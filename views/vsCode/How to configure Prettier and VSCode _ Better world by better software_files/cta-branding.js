(function() {
    try {
        var MODULE_VERSION = '1.0.16';
        var MODULE_NAME = 'cta-branding';
        var MODULE_TYPE = 'prod';
        var BUTTON_HEIGHT = 29; // 24 for button + 5 margin
        var CTA = {};
        var pvID = generateGuid(20) + "_" + Date.now();
        var cardIndexOnPage = 0;
        var logToElastic = Math.floor(Math.random() * 1000) === 0;
        var keysToSend = [
            "branding-text",
            "category",
            "id",
            "item-id",
            "publisher",
            "published-date",
            "sig",
            "syndicator-id",
            "thumb-size",
            "cta-text",
            "title",
            "description"
        ];

        CTA.hooks = {
            'item-renderer': function (itemContainer, data) {
                if (window.TRCImpl && window.TRCImpl.global && window.TRCImpl.global['disable-cta-on-custom-module']) {
                    return;
                }

                itemContainer.formatsData = itemContainer.formatsData || {};
                itemContainer.formatsData.sendAbTestEvent = sendAbTestEvent.bind(itemContainer);
                itemContainer.formatsData.writeToElastic = writeToElastic.bind(itemContainer);
                itemContainer.formatsData.cardIndex = cardIndexOnPage++;
                itemContainer.formatsData.index = data.itemIndex;
                itemContainer.formatsData.placement = itemContainer.rbox.placement;

                sendItemDataToES(itemContainer, data);

                var actionText = data['cta-text'];

                if (MODULE_NAME === 'cta-test' && Math.random() > 0.5) {
                    actionText = actionText || 'Learn More';
                }

                if (actionText) {
                    if (!shouldCtaItemBeRendered(itemContainer, data)) {
                        return;
                    }

                    var shouldRenderAsCTA = shouldRenderItemAsCTA(itemContainer);
                    itemContainer.formatsData.shouldRenderAsCTA = shouldRenderAsCTA;
                    itemContainer.formatsData.actionText = actionText;
                    itemContainer.formatsData.sendAbTestEvent('cta_render_candidate');

                    if (shouldRenderAsCTA && !itemContainer.rbox.formatsData) {
                        itemContainer.rbox.formatsData = {};

                        itemContainer.rbox.formatsData.hasCTAItem = true;
                        itemContainer.rbox.formatsData.shouldAdjustAllItemsHeight =
                            !isStream(itemContainer.rbox) && !isSingleColumnWidget(itemContainer.rbox);
                    }
                }

                // --------------------- Helper Functions -----------------------------
                function isStream(rbox) {
                    if (rbox.isFeedCard) {
                        return false;
                    }

                    var widgetCreatorLayout =
                        rbox.trc.getProperty(rbox.mode_name, 'widget-creator-layout', rbox.propertiesOverride);

                    return widgetCreatorLayout === 'autowidget-template-stream';
                }

                function isSingleColumnWidget(rbox) {
                    var responsiveRule = rbox.getEffectiveResponsiveRule();

                    if (responsiveRule && responsiveRule.cells === 1) {
                        return true;
                    }

                    return false;
                }

                function shouldRenderItemAsCTA(itemContainer) {
                    if (itemContainer.rbox.container.querySelector('.story-widget')) {
                        itemContainer.formatsData.sendAbTestEvent('filterd_item_in_reco_reel_story_widget');
                        return false;
                    }

                    if (itemContainer.querySelector('.align-disclosure-right')) {
                        itemContainer.formatsData.sendAbTestEvent('filterd_item_align_disclosure_right');
                        return false;
                    }

                    if (itemContainer.classList.contains('tbl-next-up-widget-item')) {
                        itemContainer.formatsData.sendAbTestEvent('filterd_item_next_up');
                        return false;
                    }

                    return true;
                }

                function shouldCtaItemBeRendered(itemContainer, data) {
                    if (!data["isSyndicated"] || data["is-in-network"]) {
                        itemContainer.formatsData.sendAbTestEvent('filtered_non_sc');
                        return false;
                    }

                    if (data["description"]) {
                        itemContainer.formatsData.sendAbTestEvent('filterd_item_with_description');
                        return false;
                    }

                    var detailOrder = itemContainer.detail_order;
                    if (detailOrder && detailOrder.length && detailOrder[0] === "branding") {
                        itemContainer.formatsData.sendAbTestEvent('filterd_item_branding_before_title');
                        return false;
                    }

                    var titleLink = itemContainer.link;
                    if (!titleLink) {
                        itemContainer.formatsData.sendAbTestEvent('filtered_no_title');
                        return false;
                    }

                    var itemContainerWidth = itemContainer.getBoundingClientRect().width;
                    if (itemContainerWidth > 0 && itemContainerWidth < 170) {
                        itemContainer.formatsData.sendAbTestEvent('filtered_below_min_width');
                        return false;
                    }

                    return true;
                }

                function sendItemDataToES(itemContainer, data) {
                    var dataToSend = {
                        isFeed: itemContainer.rbox.isFeedCard ? true : false
                    };
                    for (var i=0; i<keysToSend.length; i++) {
                        if (data.hasOwnProperty(keysToSend[i])) {
                            dataToSend[keysToSend[i]] = data[keysToSend[i]];
                        }
                    }
                    itemContainer.formatsData.writeToElastic('item_data', {item: dataToSend});
                }
            },
            'list-suffix': function (internalc, myOrigin) {
                if (window.TRCImpl && window.TRCImpl.global && window.TRCImpl.global['disable-cta-on-custom-module']) {
                    return;
                }

                var placementItems = myOrigin.boxes;
                var shouldAdjustHeight = false;
                var maxDesiredHeight = 0;

                placementItems.forEach(function (itemContainer) {
                    var formatsData = itemContainer.rbox.formatsData;
                    if (!formatsData || !formatsData.hasCTAItem) {
                        return;
                    }

                    if (!itemContainer.formatsData.shouldRenderAsCTA && !formatsData.shouldAdjustAllItemsHeight) {
                        return;
                    }

                    var videoLabelBox = itemContainer.querySelector('.video-label-box');
                    var branding = videoLabelBox.querySelector('.branding');

                    if (formatsData.shouldAdjustAllItemsHeight) {
                        shouldAdjustHeight = true;

                        maxDesiredHeight =
                            Math.max(
                                maxDesiredHeight,
                                getDesiredVideoBoxHeight(itemContainer, videoLabelBox, branding));
                    }

                    if (itemContainer.formatsData.shouldRenderAsCTA) {
                        shouldAdjustHeight = true;
                        renderCTAButton(itemContainer, videoLabelBox, branding);
                        if (videoLabelBox.classList.contains('video-label-box-cta')) {
                            handleCtaResponsiveStyle(myOrigin, itemContainer, videoLabelBox, branding);
                        }
                    }
                });

                if (shouldAdjustHeight) {
                    placementItems.forEach(function (itemContainer) {
                        fixVideoBoxHeight(itemContainer, maxDesiredHeight);
                    });
                }

                // --------------------- Helper Functions -----------------------------

                function renderCTAButton(itemContainer, videoLabelBox, branding) {
                    var videoLabel = videoLabelBox.querySelector('.video-label'),
                        ctaAnchor;

                    itemContainer.formatsData.sendAbTestEvent('rendered');

                    ctaAnchor = createCtaAnchorElement(itemContainer, videoLabel, itemContainer.formatsData.actionText);
                    addCtaToDom(ctaAnchor, itemContainer, videoLabelBox, videoLabel, branding);
                    addClickMetricToCTA(itemContainer, ctaAnchor.ctaButton);
                }

                function isLinkDirectsToLabelLink(itemContainer) {
                    var labelLink = getLabelLink(itemContainer);
                    return !labelLink || !itemContainer.link || itemContainer.link === labelLink;
                }

                function getDesiredVideoBoxHeight(itemContainer, videoLabelBox, branding) {
                    if (videoLabelBox.clientHeight <= 0) {
                        return 0;
                    }

                    if (!itemContainer.formatsData.shouldRenderAsCTA) {
                        return 0;
                    }

                    if (itemContainer.rbox.isFeedCard && itemContainer.rbox.isResponsive) {
                        // feed is responsive - no need to tweak height
                        return 0;
                    }

                    return videoLabelBox.clientHeight - branding.clientHeight + Math.max(BUTTON_HEIGHT , branding.clientHeight);
                }

                function fixVideoBoxHeight(itemContainer, allItemsHeight) {
                    var videoLabelBox = itemContainer.querySelector('.video-label-box');

                    if (itemContainer.rbox.formatsData.shouldAdjustAllItemsHeight) {
                        if (allItemsHeight <= 0) {
                            return;
                        }

                        videoLabelBox.style.height = allItemsHeight + 'px';
                        return;
                    }

                    var branding = videoLabelBox.querySelector('.branding');
                    var videoBoxHeight = getDesiredVideoBoxHeight(itemContainer, videoLabelBox, branding);

                    if (videoBoxHeight > 0) {
                        videoLabelBox.style.height = videoBoxHeight + 'px';
                    }
                }

                function addCtaToDom(ctaAnchor, itemContainer, videoLabelBox, videoLabel, branding) {
                    var link =
                        isLinkDirectsToLabelLink(itemContainer)
                            ? itemContainer.link
                            : getLabelLink(itemContainer);

                    link && link.classList.add('video-cta-style');
                    !itemContainer.rbox.isFeedCard && link && link.classList.add('non-feed-cta-item');
                    videoLabelBox && videoLabelBox.classList.add('video-label-box-cta');
                    videoLabel && videoLabel.classList.add('video-label-flex-cta-item');
                    branding && handleBrandingFlexItemOrder(itemContainer, branding);

                    videoLabelBox.appendChild(ctaAnchor);
                }

                function getLabelLink(itemContainer) {
                    return itemContainer.querySelector('.item-label-href');
                }

                function addClickMetricToCTA(itemContainer, ctaButton) {
                    ctaButton.onclick = function() {
                        itemContainer.formatsData.sendAbTestEvent('cta_button_clicked');
                    }
                }

                function handleBrandingFlexItemOrder(itemContainer, branding) {
                    branding.classList.add('video-branding-flex-cta-item');
                    branding.style.order = 1;
                }

                function createCtaAnchorElement(itemContainer, videoLabel, actionText) {
                    var ctaAnchor = document.createElement('a'),
                        ctaButton = createCtaButton(actionText);

                    ctaAnchor.classList.add('video-cta-href');
                    ctaAnchor.target = '_blank';
                    ctaAnchor.href = createAnchorHref(itemContainer);

                    ctaAnchor.ctaButton = ctaButton;
                    ctaAnchor.appendChild(ctaButton);

                    return ctaAnchor;
                }

                function createAnchorHref(itemContainer) {
                    var href;
                    var link = itemContainer.link;
                    var rbox = itemContainer.rbox;

                    if (rbox.shiftRedirOnclick) {
                        href = link.logger_url;
                    }
                    else {
                        var t = rbox.attachHeatMapDataToLink(link.logger_url, null);
                        href = t;
                    }

                    href = href + '&cta=true';

                    return href;
                }

                function createCtaButton(actionText) {
                    var btn = document.createElement('Button');

                    btn.type = 'button';
                    btn.classList.add('video-cta-button', 'video-cta-style');
                    btn.innerText = actionText;
                    return btn;
                }

                function handleCtaResponsiveStyle(myOrigin, itemContainer, videoLabelBox, branding) {
                    updateBrandingMaxWidth(itemContainer, videoLabelBox, branding);
                    myOrigin.fixResponsiveBoxTitleAndDesc(itemContainer);

                    window.TRC.dom.on(window, "resize", function () {
                        myOrigin.fixResponsiveBoxTitleAndDesc(itemContainer);
                        updateBrandingMaxWidth(videoLabelBox, branding);
                    });

                    if (itemContainer.video_data) {
                        var brandingSpans = myOrigin.getDetailSpansFromLabelsBoxes('branding', itemContainer);

                        if (brandingSpans.length) {
                            //we use setTimeout here so that the browser will have enough time to inject resposive rules before calculation
                            setTimeout(function () {
                                for (var i = 0; i < brandingSpans.length; i++) {
                                    myOrigin.fixBoxOverflow(brandingSpans[i],
                                        itemContainer.video_data['branding-text'], true,
                                        true);
                                }
                            }, 0);
                        }
                    }
                }

                function updateBrandingMaxWidth(itemContainer, videoLabelBox, branding) {
                    var videoLabelBoxWidth, ctaAnchorWidth;

                    if (branding) {
                        videoLabelBoxWidth = getComputedStyleProp(videoLabelBox, 'width');
                        // Instead of getting computed style of cta which is already fixed in CSS - 72 width + 15 total horizontal margin
                        ctaAnchorWidth = 72 + 5 + 10;
                        branding.style.maxWidth = (videoLabelBoxWidth - ctaAnchorWidth) + "px";
                    }
                }
            }
        };

        function getComputedStyleProp(element, propName, defaultValue) {
            var computesStyle = window.getComputedStyle(element),
                prop = computesStyle[propName];

            if (!prop) {
                return defaultValue || null;
            }

            var number = parseInt(computesStyle[propName]);
            return isNaN(number) ? computesStyle[propName] : number;
        }

        function sendAbTestEvent(name) {
            var data = {
                module: MODULE_NAME,
                event: name,
                cardIndexOnPage: this.formatsData.cardIndex,
                index: this.formatsData.index,
                placement: this.formatsData.placement
            };
            window.TRCImpl.sendAbTestEvent('CTA', JSON.stringify(data));
            window.TRCImpl.sendAbTestEvent(MODULE_NAME, name);
            this.formatsData.writeToElastic('abTestEvent', {
                type: MODULE_NAME,
                name: name
            });
        }

        function generateGuid(len, radix) {
            var BASE64URICHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split('');
            var chars = BASE64URICHARS,
                newId = [],
                i = 0;
            radix = radix || chars.length;
            len = len || 22;
            for (i = 0; i < len; i++) newId[i] = chars[0 | Math.random() * radix];
            return newId.join('');
        }

        function writeToElastic(action, paramTags) {
            if (!logToElastic) {
                return;
            }
            // console.log('********* write to ES doc ID:', pvID, this.formatsData.cradEsID, action, paramTags);
            var http = new XMLHttpRequest();
            http.open('POST', '//vidanalytics.taboola.com/putes/formats', true);
            var data = Object.assign({
                pvID: pvID,
                cardIndex: this.formatsData.cardIndex,
                event: action,
                detailsOrder: getDetailsOrder(this)
            }, getDefaultEsData());
            data = Object.assign(data, paramTags);
            http.send(JSON.stringify(data));
        }

        function getDetailsOrder(itemContainer) {
            try {
                return itemContainer.detail_order.join(',');
            } catch (e) {}
            return 'NONE';
        }

        function getDefaultEsData() {
            return {
                moduleVersion: MODULE_VERSION,
                moduleType: MODULE_TYPE,
                timestamp: (new Date()).toISOString(),
            }
        }

        window.TRC.customHooks[MODULE_NAME] = CTA;

    } catch (ex) {
        window.__trcError('Error in CTA module: ' + ex.message);
    }
})();
