var BSI = BSI || {};

// Compartmentalise the use of strict mode to prevent errors if this javascript
// file is combined with another less well formed one.
(function ($) {
    'use strict';

    /**
    * Cookie events
    * These events enable us to execute code from an inline script in the HTML page
    * The primary reason for this is to allow separation of production scripts (eg. Analytics) that could cause errors in the demo environment
    */
    $.fn.cookieAlertVisible = function () {
        $(document.body).trigger('cookieAlertVisible', [this]);
        return this.each(function () { });
    };
    $.fn.setCookieCookie = function () {
        $(document.body).trigger('setCookieCookie', [this]);
        return this.each(function () { });
    };
    $.fn.setCookieExternal = function (cookieName, redirectUrl, expireDays, rememberCheckboxId) {
        var $rememberCheckbox = $('#' + rememberCheckboxId);
        $.cookie(cookieName, redirectUrl, { expires: expireDays, path: '/' });
        var http = location.protocol;
        var slashes = http.concat("//");
        var host = slashes.concat(window.location.hostname);

        redirectUrl = redirectUrl.replace(/\/$/, '');
        var url = redirectUrl;
        url = url.split("/");
        var host;
        switch (url[3]) {
            case "en-IE": host = host + '/en-IE';
                if (redirectUrl.toLowerCase() == host.toLowerCase()) {
                    if (!$.cookie('IrelandHome')) {
                        $.cookie(cookieName = "IrelandHome", redirectUrl, { expires: expireDays, path: '/' });
                    }
                }
                BSI.RemoveCookiesExcept('IrelandHome');
                break;

            case "de-CH": host = host + '/de-CH';
                if (redirectUrl.toLowerCase() == host.toLowerCase()) {
                    if (!$.cookie('SchweizHome'))
                        $.cookie(cookieName = "SchweizHome", redirectUrl, { expires: expireDays, path: '/' });
                }
                BSI.RemoveCookiesExcept('SchweizHome');
                break;

            case "de-AT": host = host + '/de-AT';
                if (redirectUrl.toLowerCase() == host.toLowerCase()) {
                    if (!$.cookie('OsterreichHome'))
                        $.cookie(cookieName = "OsterreichHome", redirectUrl, { expires: expireDays, path: '/' });
                }
                BSI.RemoveCookiesExcept('OsterreichHome');
                break;

            case "nl-BE": host = host + '/nl-BE';
                if (redirectUrl.toLowerCase() == host.toLowerCase()) {
                    if (!$.cookie('BelgieHome'))
                        $.cookie(cookieName = "BelgieHome", redirectUrl, { expires: expireDays, path: '/' });
                }
                BSI.RemoveCookiesExcept('BelgieHome');
                break;

            case "en-NZ": host = host + '/en-NZ';
                if (redirectUrl.toLowerCase() == host.toLowerCase()) {
                    if (!$.cookie('NewZealandHome'))
                        $.cookie(cookieName = "NewZealandHome", redirectUrl, { expires: expireDays, path: '/' });
                }
                BSI.RemoveCookiesExcept('NewZealandHome');
                break;
            default:
                BSI.RemoveCookiesExcept('');
                break;
        }
        return false;
    };


    $('#country-selector').on('countryselected', function (e) {

        // Or alternatively, just send the browser somewhere else
        window.location = e.target;

    });

    $('.xform-submit').click(function (e) {
        var isPresent = false;
        var isPresentmail = false;
        var isPresentNumber = false;
        var isSelected = true;
        for (var i = 0; i < this.form.elements.length; i++) {

            if (this.form.elements[i].tagName == "INPUT" || this.form.elements[i].tagName == "SELECT") {

                if (this.form.elements[i].required == true && this.form.elements[i].value == "") {

                    isPresent = false;
                    for (var j = 0; j < this.form.elements[i].parentElement.childNodes.length; j++) {
                        if (this.form.elements[i].parentElement.childNodes[j].className == "xformvalidator") {
                            isPresent = true;
                            e.preventDefault();
                            break;
                        }
                    }
                    if (!isPresent) {
                        var node = document.createElement('span');
                        node.setAttribute('class', 'xformvalidator')
                        node.setAttribute('style', 'color: red; display: inline;')
                        node.textContent = $('#MessageForRequiredfield').val()
                        this.form.elements[i].parentElement.appendChild(node);
                    }
                }
                if (this.form.elements[i].getAttribute("requiredemail") == "true" && this.form.elements[i].value != "") {
                    for (var j = 0; j < this.form.elements[i].parentElement.childNodes.length; j++) {
                        if (this.form.elements[i].parentElement.childNodes[j].className == "xformvalidatormail") {
                            isPresentmail = true;
                            break;
                        }
                    }
                    if (!isPresentmail) {
                        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                        if (!regex.test(this.form.elements[i].value)) {
                            var node = document.createElement('span');
                            node.setAttribute('class', 'xformvalidatormail')
                            node.setAttribute('style', 'color: red; display: inline;')
                            node.textContent = $('#MessageForEmailFormat').val()
                            this.form.elements[i].parentElement.appendChild(node);
                            e.preventDefault();
                        }
                    }
                    if (isPresentmail) {
                        var elem = this.parentElement.getElementsByClassName('xformvalidatormail');
                        if (elem.length > 0)
                            elem[0].parentNode.removeChild(elem[0]);
                    }
                }
                if (this.form.elements[i].getAttribute("requiredinteger") == "true" && this.form.elements[i].value != "") {
                    for (var j = 0; j < this.form.elements[i].parentElement.childNodes.length; j++) {
                        if (this.form.elements[i].parentElement.childNodes[j].className == "xformvalidatorinteger") {
                            isPresentNumber = true;
                            break;
                        }
                    }
                    if (!isPresentNumber && isNaN(this.form.elements[i].value)) {
                        var node = document.createElement('span');
                        node.setAttribute('class', 'xformvalidatorinteger')
                        node.setAttribute('style', 'color: red; display: inline;')
                        node.textContent = $('#MessageForInteger').val()
                        this.form.elements[i].parentElement.appendChild(node);
                        e.preventDefault();
                    }
                    if (isPresentNumber && !isNaN(this.form.elements[i].value)) {
                        var elem = this.parentElement.getElementsByClassName('xformvalidatorinteger');
                        if (elem.length > 0)
                            elem[0].parentNode.removeChild(elem[0]);
                    }
                }

                if (this.form.elements[i].getAttribute("requiredcheck") == "true" && this.form.elements[i].type == "checkbox") {
                    if ($("input[type='checkbox']").is(":checked") == false) {
                        for (var j = 0; j < this.form.elements[i].parentElement.childNodes.length; j++) {
                            if (this.form.elements[i].parentElement.childNodes[j].className == "xformvalidator") {
                                isPresent = true;
                                break;
                            }
                        }
                        if (!isPresent) {
                            var node = document.createElement('span');
                            node.setAttribute('class', 'xformvalidator')
                            node.setAttribute('style', 'color: red; display: inline;')
                            node.textContent = $('#MessageForRequiredfield').val()
                            this.form.elements[i].parentElement.appendChild(node);
                            e.preventDefault();
                            break;
                        }
                        if (isPresent) {
                            var elem = this.parentElement.getElementsByClassName('xformvalidator');
                            if (elem.length > 0)
                                elem[0].parentNode.removeChild(elem[0]);
                        }
                    }
                }
            }
            if (this.form.name.toLowerCase != undefined) {
                if (this.form.name.toLowerCase() == "ceo stress test") {
                    if (isSelected && this.form.elements[i].tagName == "SELECT" && this.form.elements[i].value == "-1") {
                        e.preventDefault();
                        $('#validationMessage').css('display', 'block');
                    }
                }
            }
        }
    });

    $('.form-item input').focusout(function (e) {

        var isPresent = false;
        var isPresentmail = false;
        var isPresentNumber = false;
        if (this.required == true && this.value == "") {

            for (var j = 0; j < this.parentElement.childNodes.length; j++) {
                if (this.parentElement.childNodes[j].className == "xformvalidator") {
                    isPresent = true;
                    break;
                }
            }
            if (!isPresent) {
                var node = document.createElement('span');
                node.setAttribute('class', 'xformvalidator')
                node.setAttribute('style', 'color: red; display: inline;')
                node.textContent = $('#MessageForRequiredfield').val()
                this.parentElement.appendChild(node);
                var elem = this.parentElement.getElementsByClassName('xformvalidatormail');
                if (elem.length > 0)
                    elem[0].parentNode.removeChild(elem[0]);
            }
        }
        if (this.getAttribute("requiredemail") == "true" && this.value != "") {

            for (var j = 0; j < this.parentElement.childNodes.length; j++) {
                if (this.parentElement.childNodes[j].className == "xformvalidatormail") {
                    isPresentmail = true;
                    break;
                }
            }
            if (!isPresentmail) {
                var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                if (!regex.test(this.value)) {
                    var node = document.createElement('span');
                    node.setAttribute('class', 'xformvalidatormail')
                    node.setAttribute('style', 'color: red; display: inline;')
                    node.textContent = $('#MessageForEmailFormat').val()
                    this.parentElement.appendChild(node);
                    var elem = this.parentElement.getElementsByClassName('xformvalidator');
                    if (elem.length > 0)
                        elem[0].parentNode.removeChild(elem[0]);
                    e.preventDefault();
                }
            }
            if (isPresentmail) {
                var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                if (regex.test(this.value)) {
                    var elem = this.parentElement.getElementsByClassName('xformvalidatormail');
                    if (elem.length > 0)
                        elem[0].parentNode.removeChild(elem[0]);
                }
            }
        }
        if (this.getAttribute("requiredinteger") == "true" && this.value != "") {

            for (var j = 0; j < this.parentElement.childNodes.length; j++) {
                if (this.parentElement.childNodes[j].className == "xformvalidatorinteger") {
                    isPresentNumber = true;
                    break;
                }
            }
            if (!isPresentNumber && isNaN(this.value)) {
                var node = document.createElement('span');
                node.setAttribute('class', 'xformvalidatorinteger')
                node.setAttribute('style', 'color: red; display: inline;')
                node.textContent = $('#MessageForInteger').val()
                this.parentElement.appendChild(node);
                var elem = this.parentElement.getElementsByClassName('xformvalidator');
                if (elem.length > 0)
                    elem[0].parentNode.removeChild(elem[0]);
                e.preventDefault();
            }
            if (isPresentNumber && !isNaN(this.value)) {
                var elem = this.parentElement.getElementsByClassName('xformvalidatorinteger');
                if (elem.length > 0)
                    elem[0].parentNode.removeChild(elem[0]);
            }
        }
        if (this.required == true && this.value != "") {
            isPresent = false;
            for (var j = 0; j < this.parentElement.childNodes.length; j++) {
                if (this.parentElement.childNodes[j].className == "xformvalidator") {
                    isPresent = true;
                    break;
                }
                //if (this.parentElement.childNodes[j].className == "xformvalidatormail") {
                //	isPresent = true;
                //	break;
                //            }
            }
            if (isPresent) {
                var elem = this.parentElement.getElementsByClassName('xformvalidator');
                if (elem.length > 0)
                    elem[0].parentNode.removeChild(elem[0]);
            }
            //if (isPresentmail) {
            //	var elem = this.parentElement.getElementsByClassName('xformvalidatormail');
            //	if (elem.length > 0)
            //		elem[0].parentNode.removeChild(elem[0]);
            //         }
        }
    });

    $("#SendEnquiry").click(function (e) {

        var previousLabel;

        for (var i = 1; i < $("#EnquiryForm")[0].elements.length; i++) {
            //Textarea or dropdown
            if ($("#EnquiryForm")[0].elements[i].tagName == "TEXTAREA" || $("#EnquiryForm")[0].elements[i].tagName == "SELECT") {
                previousLabel = $("#EnquiryForm")[0].elements[i].previousElementSibling;
                if (previousLabel != null && previousLabel.tagName == "LABEL" && previousLabel.innerText.indexOf(" *") != -1) {
                    if (($("#EnquiryForm")[0].elements[i].value == "" || $("#EnquiryForm")[0].elements[i].value == "|" || $("#EnquiryForm")[0].elements[i].value.indexOf("Please Select") != -1) && previousLabel.previousElementSibling.tagName == "SPAN") {
                        previousLabel.previousElementSibling.setAttribute('style', 'color: red; display: inline;');
                        e.preventDefault();
                    }
                } else {
                    if (previousLabel != null && previousLabel.previousElementSibling.tagName == "SPAN") {
                        previousLabel.previousElementSibling.setAttribute('style', 'color: red; display: none;');
                    }
                }
            }
            //Textbox
            else if ($("#EnquiryForm")[0].elements[i].tagName == "INPUT" && $("#EnquiryForm")[0].elements[i].type == "text") {
                previousLabel = $("#EnquiryForm")[0].elements[i].previousElementSibling;
                if (previousLabel != null && previousLabel.tagName == "LABEL" && previousLabel.innerText.indexOf(" *") != -1 && $("#EnquiryForm")[0].elements[i].value == "" && previousLabel.previousElementSibling.tagName == "SPAN") {
                    previousLabel.previousElementSibling.setAttribute('style', 'color: red; display: inline;');
                    e.preventDefault();
                } else {
                    if (previousLabel != null && previousLabel.previousElementSibling.tagName == "SPAN") {
                        previousLabel.previousElementSibling.setAttribute('style', 'color: red; display: none;');
                    }
                }
            }
            //Radio or checkbox
            else if ($("#EnquiryForm")[0].elements[i].tagName == "INPUT") {
                previousLabel = $("#EnquiryForm")[0].elements[i].parentElement.previousElementSibling;
                if (previousLabel != null && previousLabel.tagName == "LABEL" && previousLabel.innerText.indexOf(" *") != -1) {
                    if (typeof ($("input[name='" + $("#EnquiryForm")[0].elements[i].name + "']:checked").val()) == "undefined" && previousLabel.previousElementSibling.tagName == "SPAN") {
                        previousLabel.previousElementSibling.setAttribute('style', 'color: red; display: inline;');
                        e.preventDefault();
                    }
                    else {
                        if (previousLabel != null && previousLabel.previousElementSibling.tagName == "SPAN") {
                            previousLabel.previousElementSibling.setAttribute('style', 'color: red; display: none;');
                        }
                    }
                }

                if ($("#EnquiryForm")[0].elements[i].id.indexOf("GDPR_Permitted_Contact") != -1 && $("#EnquiryForm")[0].elements[i].name.indexOf("*") != -1) {
                    if (typeof ($("input[name='" + $("#EnquiryForm")[0].elements[i].name + "']:checked").val()) == "undefined") {
                        $("#EnquiryForm")[0].elements[i].previousElementSibling.setAttribute('style', 'color: red; display: inline;');
                        e.preventDefault();
                    }
                    else {
                        $("#EnquiryForm")[0].elements[i].previousElementSibling.setAttribute('style', 'color: red; display: none;');
                    }
                }

                if ($("#EnquiryForm")[0].elements[i].id == "GDPR_type_of_consent_received") {
                    if (!$("#GDPR_type_of_consent_received").is(":checked")) {
                        $('#ConsentErrorMessage').attr('style', 'color:red;display:inline;font-size:medium;');
                        e.preventDefault();
                    }
                    else {
                        $('#ConsentErrorMessage').attr('style', 'display:none;');
                    }
                }
            }

            if ($("#EnquiryForm")[0].elements[i].id == "Campaign_ID") {
                $('#CampaignIDText').val($("#Campaign_ID option:selected").text());
                i = i + 1;
            }
        }
    });

    $('#EnquiryForm input[name=GDPR_type_of_consent_received]').click(function () {
        if (!$(this).is(':checked'))
            $('#ConsentErrorMessage').attr('style', 'color:red;display:inline;font-size:medium;');
        else
            $('#ConsentErrorMessage').attr('style', 'display:none;');
    });

    $("#EnquiryForm textarea").focusout(function (e) {
        var previousLabel = this.previousElementSibling;
        if (this.value == "") {
            if (previousLabel != null && previousLabel.tagName == "LABEL" && previousLabel.innerText.indexOf(" *") != -1 && previousLabel.previousElementSibling.tagName == "SPAN") {
                previousLabel.previousElementSibling.setAttribute('style', 'color: red; display: inline;');
                e.preventDefault();
            }
        }
        else {
            if (previousLabel.previousElementSibling != null && previousLabel.previousElementSibling.tagName == "SPAN") {
                previousLabel.previousElementSibling.setAttribute('style', 'color: red; display: none;');
            }
        }
    });

    $("#EnquiryForm input").focusout(function (e) {
        var previousLabel = this.previousElementSibling;
        if (this.value == "") {
            if (previousLabel != null && previousLabel.tagName == "LABEL" && previousLabel.innerText.indexOf(" *") != -1 && previousLabel.previousElementSibling.tagName == "SPAN") {
                previousLabel.previousElementSibling.setAttribute('style', 'color: red; display: inline;');
                e.preventDefault();
            }
        }
        else {
            if (previousLabel != null && previousLabel.previousElementSibling != null && previousLabel.previousElementSibling.tagName == "SPAN") {
                previousLabel.previousElementSibling.setAttribute('style', 'color: red; display: none;');
            }
        }
    });

    $("#EnquiryForm select").change(function (e) {
        var previousLabel = this.previousElementSibling;
        if (this.value == "" || this.value == "|") {
            if (previousLabel != null && previousLabel.tagName == "LABEL" && previousLabel.innerText.indexOf(" *") != -1 && previousLabel.previousElementSibling.tagName == "SPAN") {
                previousLabel.previousElementSibling.setAttribute('style', 'color: red; display: inline;');
                e.preventDefault();
            }
        }
        else {
            if (previousLabel != null && previousLabel.previousElementSibling != null && previousLabel.previousElementSibling.tagName == "SPAN") {
                previousLabel.previousElementSibling.setAttribute('style', 'color: red; display: none;');
            }
        }
    });

    BSI.RemoveCookiesExcept = function (cookieenametoexclude) {

        if (cookieenametoexclude != 'OsterreichHome' && $.cookie('OsterreichHome')) {
            // has cookie
            $.removeCookie('OsterreichHome', { path: '/' });
        }

        if (cookieenametoexclude != 'SchweizHome' && $.cookie('SchweizHome')) {
            // has cookie
            $.removeCookie('SchweizHome', { path: '/' });
        }

        if (cookieenametoexclude != 'BelgieHome' && $.cookie('BelgieHome')) {
            // has cookie
            $.removeCookie('BelgieHome', { path: '/' });
        }

        if (cookieenametoexclude != 'NewZealandHome' && $.cookie('NewZealandHome')) {
            // has cookie
            $.removeCookie('NewZealandHome', { path: '/' });
        }

        if (cookieenametoexclude != 'IrelandHome' && $.cookie('IrelandHome')) {
            // has cookie
            $.removeCookie('IrelandHome', { path: '/' });
        }

    };

    /**
    * Test for cookies
    * @param {String} target
    *   Cookie bar will be inserted before the selected element
    */
    BSI.hookCookieAlert = function (target) {

        // Show alertbox if cookie allowing cookies doesn't already exist
        if (!$.cookie('is-cookie-accepted')) {
            // Generate markup for alertbox
            var $cookieAlertBox = $('<div class="cookie-alert-box" />'),
                $cookieAlertBoxInner = $('<div class="alert-inner" />'),
                $cookieAlertIntro = $('<p />'),
                $cookieAcceptBt = $('<a class="cookie-accept bt key-bt" href="#" />'),
                $cookieMoreInfo = $('<div class="more"></div>'),
                $cookieMoreInfoLink = $('<a class="cookie-registered"></a>'),

                // Check for strings in the i18n file
                cookieAlertIntroTxt = _t('We use cookies to give you the best experience and to help improve our website.'),
                cookieAlertButtonTxt = _t('I accept cookies on this site'),
                cookieAlertMoreInfoTxt = _t('Find out what cookies we use and how to disable them'),
                cookieMoreInfoURL = _t('/Legal/Cookies/'),

                $target = $(target);


            // Construct alertbox
            $cookieAlertIntro
                .html(cookieAlertIntroTxt)
                .wrap('<p />')
                .appendTo($cookieAlertBoxInner);
            $cookieAcceptBt
                .html(cookieAlertButtonTxt)
                .appendTo($cookieAlertBoxInner);
            $cookieMoreInfoLink
                .attr('href', cookieMoreInfoURL)
                .html(cookieAlertMoreInfoTxt)
                .appendTo($cookieMoreInfo);
            $cookieMoreInfo
                .appendTo($cookieAlertBoxInner);
            $cookieAlertBoxInner
                .appendTo($cookieAlertBox);


            // Check that the alert doesn't already exist in the DOM
            if ($.root.find('.cookie-alert-box').length) {
                return;
            }

            // Insert into DOM


            $cookieAlertBox.insertBefore($target);




            // Set keyboard focus on the alertbox
            SFR.Utils.setKeyboardFocus($cookieAlertBox);

            // Fire event so BSI can trigger production code from inline script in HTML
            $.root.cookieAlertVisible();

            // Handle click events for two possible links inside alert box
            $.root.on('click', '.cookie-alert-box a', function () {

                // The 'accept' button should hide the alertbox
                if ($(this).hasClass('cookie-accept')) {

                    // Fire event so BSI can trigger production code from inline script in HTML
                    $.root.setCookieCookie();

                    $('.cookie-alert-box').slideUp(200, function () {

                        $(this).remove();

                    });
                    return false;
                }

            });

        }

    };


    /**
    * Load Addthis
    */
    //BSI.setupAddthis = function () {
    //    Modernizr.load({
    //        load: '',
    //        callback: function () {
    //            $.root.find('.addthis_toolbox').css('display', 'block');
    //        }
    //    });
    //};


    /**
    * Initialise slideshows
    */
    BSI.initialiseSlideshows = function () {

        if ($('body').is('.breakpoint-768')) {
            $.root.find('.banner-controls').css('display', 'block');
        }

        // Initlialise slideshows
        if ($.root.find('.flexslider:not(.banner)').length) {
            $.root.find('.flexslider:not(.banner)').css('display', 'block').flexslider({
                animation: 'slide',
                animationLoop: false,
                slideshow: true, // auto-play
                slideshowSpeed: 3000,
                itemWidth: 220, // this will be initialised in a fixed 320 viewport
                controlNav: false,
                keyboard: true,
                after: function (slider) {
                    if (slider.currentSlide == 0) {
                        slider.pause(); // stop when we get back to first slide
                    }
                }
            });
        }

        // Initialise homepage slidershow
        if ($.root.find('.banner.flexslider ').length) {

            $.root.find('.banner.flexslider').css('display', 'block').flexslider({
                animation: 'slide',
                animationLoop: true,
                slideshow: true, // auto-play
                slideshowSpeed: 3000,
                maxItems: 0,
                controlNav: true,
                manualControls: '.banner-controls li',
                keyboard: true,
                after: function (slider) {
                    if (slider.currentSlide == 0) {
                        slider.pause(); // stop when we get back to first slide
                    }
                }
            });

            // Unbind the touchstart live event. See approx line 216 of flexslider source
            // They were cancelling this event, which was preventing us from scrolling the page
            // @see https://trello.com/card/ipad-won-t-let-you-scroll-if-you-start-the-touch-on-the-carousel-nav/4ff33e8323fc47565c6a6502/109
            $('.banner-controls li').die('touchstart');
        }













    };

    /**
    * Set up search filters
    */
    BSI.setUpSearchFilters = function () {
        var $loadingScreen = $.root.find('#loading-screen');

        $loadingScreen
            .addClass('refreshing')
            .children('.inner')
            .text('Refreshing results');

        $.root.find('.search-filters :checkbox').change(function () {
            if ($.root.is('.breakpoint-768')) {
                $loadingScreen
                    .children('.inner')
                    .css('margin-top', $(window).height() / 2)
                    .end()
                    .show(0, function () {
                        $.root.find('form').eq(0).submit();
                    });
            }
        });
    };

    /**
    * Telephone links
    */
    BSI.setUpTelephoneLinks = function () {
        var isiPhone = navigator.userAgent.toLowerCase().indexOf("iphone");
        var isiPad = navigator.userAgent.toLowerCase().indexOf("ipad");
        var isiAndroid = navigator.userAgent.toLowerCase().indexOf("android");

        // Prevent click events on tel: links on any device other than ipad or iphone
        if (!(isiPhone > 1 || isiPad > 1 || isiAndroid > 1)) {
            $.root.find('a[href^="tel:"]')
                .addClass('disabled-phone-link')
                .click(function (e) {
                    e.preventDefault();
                });
        }
    };

    /**
    * IOS scale fix
    * @see https://gist.github.com/901295
    */
    (function (doc) {

        var addEvent = 'addEventListener',
            type = 'gesturestart',
            qsa = 'querySelectorAll',
            scales = [1, 1],
            meta = qsa in doc ? doc[qsa]('meta[name=viewport]') : [];

        function fix() {
            meta.content = 'width=device-width,minimum-scale=' + scales[0] + ',maximum-scale=' + scales[1];
            doc.removeEventListener(type, fix, true);
        }

        if ((meta = meta[meta.length - 1]) && addEvent in doc) {
            fix();
            scales = [.25, 1.6];
            doc[addEvent](type, fix, true);
        }

    } (document));

    /**
    * Responsive tables
    * Simplified version of http://filamentgroup.com/lab/responsive_design_approach_for_complex_multicolumn_data_tables/
    */
    BSI.responsiveTables = function () {

        // Hide from IE7 and below
        if ($.browser.msie && $.browser.version < 8) {
            return;
        }

        $.root.find('table').each(function (index, item) {
            var $table = $(item);

            $table.addClass('enhanced');

            var $nav = $('<div class="table-menu"><ul /></div>');
            $nav.hide();

            // Nav checkbox change handler - toggles the respective column
            $nav.on('change', ':checkbox', function () {
                var $this = $(this);
                var $column = $this.data('column');
                var $table = $this.data('table');

                var colIndex = $column.index();

                if ($this.is(':checked')) {
                    $table.find('thead th').eq(colIndex).css('display', 'table-cell');
                    $table.find('tbody tr').each(function (index, row) {
                        $(row).children('*').eq(colIndex).css('display', 'table-cell');
                    });
                } else {
                    $table.find('thead th').eq(colIndex).css('display', 'none');
                    $table.find('tbody tr').each(function (index, row) {
                        $(row).children('*').eq(colIndex).css('display', 'none');
                    });
                }

            });

            // Loop over table headers and generate checkboxes for each
            $table.find('thead th').each(function (index, item) {
                var $th = $(item);

                if (!$th.is('.persist')) {

                    var toggle = $('<li><label><input type="checkbox" name="toggle-cols" value="" />' + $th.text() + '</label></li>');
                    toggle
                        .find(':checkbox')
                        .data('column', $th)
                        .data('table', $table);

                    if ($th.is('.essential')) {
                        toggle
                            .find(':checkbox')
                            .attr('checked', true);
                    }

                    $nav.children('ul').append(toggle);
                }
            });

            // Add our menu toggling button
            var $button = $('<a href="#" class="bt column-menu">Columns</a>');
            $button.click(function (e) {
                e.preventDefault();
                $(this)
                    .toggleClass('active')
                    .next('.table-menu')
                    .toggle();
            })

            // Add it all to the dom
            $table.wrap('<div class="enhanced-table-wrapper"></div>');
            $table
                .before($button)
                .before($nav);


        });
    };

    /**
    * Google maps
    */
    BSI.googleMapsSetup = function () {

        $('.google-map').each(function (index, item) {

            // Get the actual map div
            var $map = $(item).children('.map');

            // Create a map
            var map = new google.maps.Map(
                $map.get(0),
                {
                    zoom: $map.data('zoom'),
                    center: new google.maps.LatLng($map.data('lat'), $map.data('lng')),
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    disableDefaultUI: !$map.data('ui')
                }
            );

            // Check to see if we have the required info to drop a marker
            if ($map.is('[data-pin-lat][data-pin-lng][data-pin-title]')) {
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng($map.data('pin-lat'), $map.data('pin-lng')),
                    map: map,
                    title: $map.data('pin-title')
                });
            }
        });

    };

    /**
    * Custom checkbox handling
    */
    BSI.setupCustomCheckboxes = function () {

        // Listen for change events on checkboxes inside form blocks
        $.root.on('change', ':checkbox', function () {
            var $this = $(this);
            var $label = $this.parents('label');

            if ($this.is(':checked')) {
                $label.addClass('checked');
            } else {
                $label.removeClass('checked');
            }
        });

        // Listen for focus and blur events to add classes to the faux checkbox
        $.root.on('focus', '.checkbox-replaced :checkbox', function () {
            $(this).closest('.checkbox-replaced').addClass('focus');
        });

        $.root.on('blur', '.checkbox-replaced :checkbox', function () {
            $(this).closest('.checkbox-replaced').removeClass('focus');
        });

        // Kick off an initial change event so that the faux checkboxes get updated accordingly
        $.root.find('.form-block :checkbox, .filter-set :checkbox')
            .trigger('change')
            .closest('label')
            .addClass('checkbox-replaced');

    };

    /**
    * Form validation
    * @see http://docs.jquery.com/Plugins/Validation
    */
    BSI.setupFormValidation = function () {


        //The following a class to the labels on a form when the field is invalid. The actual validation is done by EPiServer code - this is run afterwards.
        $('form').bind("submit", function () {

            //Remove any existing error labels
            $("label.label-error").removeClass("label-error");

            var errorMsgs = $("div.form-item span.error2");
            if (errorMsgs.length > 0) {


                for (i = 0; i < errorMsgs.length; i++) {

                    if ($(errorMsgs[i]).css("display") != "none") {
                        $(errorMsgs[i]).parent().find(">label").addClass("label-error");
                        $(errorMsgs[i]).parent().find(">span.label-wrapper").addClass("label-error");
                    }

                }

            }

        });



        if (typeof formValidationConfig !== 'undefined') {
            $.validator.addMethod("valueNotEquals", function (value, element, arg) {
                return arg != value;
            }, "Invalid selection.");

            var defaults = {
                errorPlacement: function ($error, $element) {
                    $error.appendTo($element.closest('.form-item'));
                }
            };

            $.extend(formValidationConfig, defaults);

            //$('form').validate(formValidationConfig);



        }

    };

    /**
    * Select box replacement
    */
    BSI.setupSelectBoxes = function () {
        if (!($.browser.msie && $.browser.version < 8)) {
            var $selectBoxes = $.root.find('.form-block select');

            if ($selectBoxes.length > 0) {
                $selectBoxes.selectBox();
            }
        }
    };

    /**
    * Responsive images
    */
    BSI.responsiveImages = function (size) {

        $.root.find('.responsive-image').each(function (index, item) {

            var $item = $(item);
            var $img = $('<img src="' + $item.data(size + '-img') + '" alt="' + $item.data('alt') + '" />');

            $item
                .empty()
                .append($img);

        });

    };

    /**
    * Set up country selector drop-down panel and lightbox
    */
    BSI.setupCountrySelector = function () {
        if (window.location.host.indexOf("supplychainsolution") == -1) {
            var $countryNavItem = $.root.find('.country-nav-item'),
                $countrySelector = $.root.find('.country-selector'),
                //$header = $.root.find('header[role=banner]'),
                $header = $.root.find('.utility-nav'),
                $phone = $.root.find('.phone-no'),
                $close = $countrySelector.find('.close'),
                $countryAnnouncement = $.root.find('.country-selector-announcement'),
                $countryAnnouncementInner = $countryAnnouncement.find('.inner');


            var mobile = !$.root.is('.breakpoint-768'),
                state = 'hidden',
                initialHeaderHeight = 36;

            /*
            * Handle click event when country is chosen
            * This might happen in pull-down panel or in lightbox
            */
            $countryNavItem.click(function (e) {
                e.preventDefault();
                // Cancel any already running animations
                $header.stop(true, true);
                $countrySelector.stop(true, true);

                if (state === 'hidden') {

                    // Start to expand out the header to encompass the country selector
                    if (!mobile) {
                        $header.attr('style', 'overflow:visible');
                        $header
                            .animate({
                                height: $countrySelector.height() + 100
                            }, 650);
                        $phone.animate({ top: $countrySelector.height() + 158 }, 650);
                    }

                    setTimeout(function () {
                        $countryNavItem.addClass('active');
                    }, 750);

                    // After a slight delay, start to fade in the country selector
                    $countrySelector
                        .delay(500)
                        .fadeIn(500, function () {
                            // Set keyboard focus to the country selector
                            SFR.Utils.setKeyboardFocus($countrySelector.get(0));
                        });

                    state = 'visible';

                } else {

                    setTimeout(function () {
                        $countryNavItem.removeClass('active');
                    }, 150);

                    // Fade out the country selector
                    $countrySelector.fadeOut(300);

                    // After a slight delay, collapse the header to it's initial height
                    if (!mobile) {

                        $header
                            .delay(150)
                            .animate({
                                height: initialHeaderHeight
                            }, 650);
                        $phone.delay(150).animate({ top: 108 }, 650);
                    }
                    $header.attr('style', 'overflow:visible!important');
                    state = 'hidden';
                }
                // If required, close the lightbox
                if ($countryAnnouncement.length > 0) {
                    closeLightbox();
                }

            });

            // Close button click event
            $close.click(function () {
                state = 'visible';
                $countryNavItem.click();
            });

            // Click events when selecting an actual country within expanded panel
            $countrySelector.on('click', 'ul a', function (e) {
                e.preventDefault();

                // Close the country selector
                state = 'visible';
                $countryNavItem.click();

                // Fire off a custom event indicating that a country / language has been selected
                $(this).trigger('countryselected');
            });

            /*
            * 'Choose Country' announcement lightbox
            */
            if ($countryAnnouncement.length > 0) {

                if (!mobile) {
                    /*
                    * Set up lightbox-friendly DOM (on desktop only)
                    */
                    // Create overlay (inserted inside ASP.net form wrapper)
                    var $overlay = $('<div class="overlay"></div>').appendTo('body > form');

                    $countryAnnouncement
                        // Add modal styling hook to announcement
                        .addClass('modal')
                        // … and move it into the overlay
                        .appendTo($overlay);

                    // Vertically center the lightbox
                    if ($(window).height() > $countryAnnouncement.children('.inner').height()) {
                        $countryAnnouncement
                            .children('.inner')
                            .css('margin-top', ($(window).height() - $countryAnnouncement.children('.inner').height()) / 2);
                    }

                    // Give it keyboard focus
                    SFR.Utils.setKeyboardFocus($countryAnnouncement);

                    // Prevent document scrolling behind the lightbox
                    // (which we need to make it impossible to scroll past thge 100% height overlay)
                    if (!($.browser.msie && $.browser.version < 7)) {
                        $('html').css({ 'overflow': 'hidden' });
                    }

                }

                // Required actions when closing the announcement modal
                var closeLightbox = function (callback) {

                    // Fade out and remove lightbox artefacts
                    $countryAnnouncement.fadeOut(500, function () {
                        $countryAnnouncement.remove();
                    });
                    $overlay.fadeOut(500, function () {
                        $overlay.remove();
                    });
                    // Allow document to scroll again
                    if (!($.browser.msie && $.browser.version < 7)) {
                        $('html').css({ 'overflow': '' });
                    }

                    // If a callback exists, execute it (checking first that it is an executable function)
                    if (callback && typeof (callback) === 'function') {
                        callback();
                    }

                };

                /*
                * Click events for key links inside the country announcement lightbox
                */
                // Confirm site
                // …when *confirming previous choice* of current site
                // Note: we're not currently submitting anything here
                $countryAnnouncement.find('.confirm-site').click(function (e) {
                    e.preventDefault();
                    // Close the lightbox
                    closeLightbox();
                });

                // Choose site
                // …when selecting a *different* country site
                $countryAnnouncement.on('click', '.choose-site', function (e) {
                    e.preventDefault();
                    // Close the lightbox
                    closeLightbox();
                    // Fire off a custom event indicating that a country / language has been selected
                    $(this).trigger('countryselected');
                });

                // …the "view all BSI's worldwide locations" link
                $countryAnnouncement.find('.country-selector-trigger').click(function (e) {
                    e.preventDefault();
                    // Open up the country selector
                    $countryNavItem.click();
                });

                // When the announcement loses focus, hide the panel and restore keyboard focus to the root element
                // (Removed for now, because it closes the modal when focus moves to a new browser window or application)
                /*
                $countryAnnouncement.on('focusout', function(e) {
     
                // Use an "animated" hide, so that if any of the child elements receive focus we can cancel it (see below)
                $countryAnnouncement.hide(100, function() {
                SFR.Utils.setKeyboardFocus($('html'));
                });
                });
                */

                // If any of the child elements of the country announcement panel receive focus, cancel the hiding animation
                // and ensure the panel remains visible
                $countryAnnouncement.on('focus', '*', function (e) {
                    $countryAnnouncement.stop().show();
                });

            }

            // Expand the country select and uncheck the checkbox
            // on the first visit to the site
            var siteWasVisited = !!$.cookie('siteWasVisited');
            $.cookie('siteWasVisited', true, { path: '/' });
            if (!siteWasVisited && window.location.pathname == '/') {
                $countryNavItem.click();
                $('#locale_remember').prop('checked', false)
            }

        }

    };

    /**
    * Set up tabs
    * We're using CSS to tabs into accordions for narrow viewports
    */
    BSI.setupTabs = function () {

        var mobile = !$.root.is('.breakpoint-768');

        // jQuery accordion to tabs code
        $('.accordion').each(function (index, item) {
            var $this = $(item);
            var $link = $this.children('li:first-child').children('a');
            var $target = $link.next();

            $link.addClass('active');

            $target
                .addClass('is-open')
                .show(1, function () {
                    if (!mobile) {
                        $this.height($target.height() + 65);
                    }
                });
        });

        $('.accordion').on('click', 'li > a', function (e) {

            e.preventDefault();

            var $this = $(this);
            var $thisAccordion = $this.closest('.accordion');

            var $target = $this.next();
            var $old = $thisAccordion.find('.is-open');

            if (!$this.hasClass('active') || !mobile) {

                $old
                    .removeClass('is-open')
                    .hide();

                $target
                    .addClass('is-open')
                    .show();

                if (!mobile) {
                    $thisAccordion.height($target.height() + 65);
                }

                // In mobile mode, scroll the page to the top of the opened accordion
                if (mobile) {
                    $(window).scrollTop($thisAccordion.offset().top);
                }

                $thisAccordion
                    .find('.active')
                    .removeClass('active');

                $this
                    .addClass('active');

            } else {

                $thisAccordion.find('.is-open')
                    .removeClass('is-open')
                    .hide();

                $this
                    .removeClass('active');

            }

        });

    };



    /**
    * Enable keyboard navigation in standard drop-downs
    * This function ensures that each dropdown remains open when keyboard focus is on a link inside it
    * Assumes the dropdown trigger is an <li />
    */
    BSI.accessifyDropDownLists = function () {
        //$.root.find('.drop-down').accessifyFlyout({ sSubnavSelector: '.drop-down-panel' });
        // Netcel Change on 18th March
        $.root.find('.main-nav-item:not(.no-subnav)').accessifyFlyout({sSubnavSelector: '.sub-nav'});
    };

    BSI.accessifySubMenuDropDownLists = function () {
        //$.root.find('.drop-down').accessifyFlyout({ sSubnavSelector: '.drop-down-panel' });
        // Netcel Change on 18th March
        $.root.find('.sub-menu-nav-item:not(.no-subnav)').accessifyFlyout({ sSubnavSelector: '.sub-nav' });
    };


    /**
    * Enable keyboard navigation in meganav drop-downs
    * This function ensures that each dropdown remains open when keyboard focus is on a link inside it
    * Similar to above, but specific to markup in main navigation
    */
    BSI.accessifyMenu = function () {
        $.root.find('.main-nav-item').accessifyFlyout({ sSubnavSelector: '.sub-nav' });

    };

    BSI.accessifySubMenu = function () {
        $.root.find('.sub-menu-nav-item').accessifyFlyout({ sSubnavSelector: '.sub-nav' });
    }

    /**
    * Collapse main menu (for narrow viewports)
    * Triggered on load or resize down
    */
    BSI.collapseMenu = function () {

        var $menu = $.root.find('.main-nav');

        if (!$menu.hasClass('visuallyhidden')) {
            $menu
                .addClass('visuallyhidden')
                // incase we already did some show/hide and jQuery added style="overflow: visible;"
                .attr('style', '');
        }

    };

    BSI.collapseSubMenu = function () {

        var $menu = $.root.find('.sub-menu-nav');

        if (!$menu.hasClass('visuallyhidden')) {
            $menu
                .addClass('visuallyhidden')
                // incase we already did some show/hide and jQuery added style="overflow: visible;"
                .attr('style', '');
        }

    };


    /**
    * Uncollapse main menu (when resizing up)
    * Triggered on load or resize up
    */
    BSI.unCollapseMenu = function () {

        var $menu = $.root.find('.main-nav');

        if ($menu.hasClass('visuallyhidden')) {
            $menu.removeClass('visuallyhidden');
        }

    };

    BSI.unCollapseSubMenu = function () {

        var $menu = $.root.find('.sub-menu-nav');

        if ($menu.hasClass('visuallyhidden')) {
            $menu.removeClass('visuallyhidden');
        }

    };


    /**
    * Attach handlers to button that toggles menu in mobile view
    * (visibility of the button is handled in CSS)
    */
    BSI.setupMenuToggle = function () {

        var $menu = $.root.find('.main-nav'),
            $menuBt = $.root.find();

        $.root.on('click', '.menu-bt', function () {

            if ($menu.hasClass('visuallyhidden')) {

                SFR.Utils.expandIt($menu);
                $(this).addClass('active');
                $.root.find('div.sub-nav').hide();

            } else {

                SFR.Utils.collapseIt($menu);
                $(this).removeClass('active');
                $('span.collapse-filters-icon').removeClass('expanded');
            }
        });
    };

    BSI.setupSubMenuToggle = function () {

        var $menu = $.root.find('.main-nav-item');


        $.root.on('click', '.main-nav-item', function () {
            var me = $(this);
            $(this).find('span.collapse-filters-icon').toggleClass('expanded');
            $(this).find('div.sub-nav').slideToggle("fast");
        });
    };

    BSI.hideSubMenu = function () {
        $.root.find('div.sub-nav').hide();
        $('span.collapse-filters-icon').removeClass('expanded');
        $.root.find('.menu-bt').removeClass('active');
    };

    /**
    * Attach handlers to button that toggles sub menu in mobile view
    * (visibility of the button is handled in CSS)
    */

    BSI.setupSubSubMenuToggle = function () {

        var $menu = $.root.find('.sub-menu-nav-item');


        $.root.on('click', '.sub-menu-nav-item', function () {
            var me = $(this);
            $(this).find('span.collapse-filters-icon').toggleClass('expanded');
            $(this).find('div.sub-nav').slideToggle("fast");
        });
    };

    BSI.hideSubSubMenu = function () {
        $.root.find('div.sub-nav').hide();
        $('span.collapse-filters-icon').removeClass('expanded');
    };

    /**
    * Collapse search filter navigation for narrow viewports
    */
    BSI.collapseSearchFilters = function () {

        var $ctx = $.root.find('.search-filter-nav'),
            $searchFilters = $ctx.find('.search-filters'),
            // Grab button text from heading
            $triggerTxt = $searchFilters.find('.search-filter-title').html(),
            $trigger = $('<button />')
                .addClass('trigger bt key-bt')
                .html($triggerTxt),
            $cancelBt = $('<button />')
                .addClass('filter-cancel-bt bt key-bt')
                .html('Cancel'),
            $searchSummary = $.root.find('.search-results-summary'),
            $searchFields = $.root.find('.site-search-fields');

        // Set up on load
        // Collapse the filters
        $searchFilters.addClass('visuallyhidden');
        $ctx.addClass('is-collapsed');





        // Delegate event handlers for the cancel buttons
        $.root.on('click', '.filter-cancel-bt', function () {

            SFR.Utils.collapseIt($searchFilters);
            $ctx.toggleClass('is-collapsed');
            $ctx.toggleClass('is-expanded');
            return false;

        });


        // Add controls to DOM
        $searchFilters.before($trigger);
        $cancelBt
            .appendTo($searchFilters);

        // Add click handlers

        $(document).on('click', '.trigger', function () {

            //    SFR.Utils.accessiblyToggle($ctx, $target);
            SFR.Utils.accessiblyToggle($ctx, $searchFilters);
            $ctx.toggleClass('is-collapsed');
            $ctx.toggleClass('is-expanded');
            return false;

        });

    };

    /**
    * Return the search filters to their desktop state
    */
    BSI.unCollapseSearchFilters = function () {
        $.root.find('.search-filter-nav .trigger').remove();
        SFR.Utils.expandIt($.root.find('.search-filters'), 0);

        $.root.find('.search-filters .filter-cancel-bt').remove();
    }


    /**
    * Toggle 'other' salutation field
    * In an address input scenario, toggle visibility of the div containing an
    * extra text <input /> when a user selects 'Other' from the salutation <select />
    * @param {Object} $trigger
    *   The element that triggers the function
    * Assumes that the value="" attr of the select that triggers the tricky troggle is "Other" (regardless of language)
    * Note: we don't want these fields to be tabbable unless
    * the criteria is met, so no need for keyboard accessible show/hide pattern.
    */
    BSI.toggleOtherSalutationField = function ($trigger) {

        var $selectedOption = $trigger.find(':selected'),
            $otherFormItem = $trigger.parents('.name-form-item-group').find('.other-salutation');

        if ($selectedOption.val() == 'Other') {

            $otherFormItem
                .removeClass('visuallyhidden');

        } else {

            $otherFormItem
                .addClass('visuallyhidden')

                // If a user adds something to the 'other' field, then toggles back to a standard salutation
                // …empty the 'other' field to stop it being submitted
                .find('input')
                .attr('value', '');

        }

    };



    /**
    * Set up name inputs for Personal Details, Delivery etc
    * @TODO: consolidate with toggleOtherSalutationField()
    */
    BSI.setUpNameInputs = function () {

        var $trigger = $.root.find('select.salutation');

        // Attach click handlers
        $trigger.change(function () {

            BSI.toggleOtherSalutationField($(this));

        });

        // Set up on load
        BSI.toggleOtherSalutationField($trigger);

    };



    /**
    * Postcode lookup
    * Define behaviour for postcode lookups (used in checkout, my account and more)
    * Accepts two arguments relating to AJAX call:
    * @param {String} pcodeLookupResultsPath
    *   Path to postcode lookup results.
    * @param {String} pcodeLookupResultsType
    *   Data type for postcode lookup results.
 
    */
    BSI.setUpPcodeLookup = function (pcodeLookupResultsPath, pcodeLookupResultsType) {

        var $pcodeLookup = $.root.find('.pcode-lookup'),
            $ctx = $pcodeLookup.parents('.manual-addr-group'),
            $manualAddrLink = $ctx.find('.trigger'),
            $optionalAddrFields = $ctx.find('.target'),
            $pcodeLookupFormItem = $pcodeLookup.find('.postcode'),
            $pcodeLookupInput = $pcodeLookupFormItem.find('input[type=text]'),
            $pcodeLookupSbmt = $pcodeLookup.find('[type=submit]'),
            $pcodeLookupResults = $pcodeLookup.parent('form-item'),
            $pcodeScrollPane = $pcodeLookup.find('.scroll-pane'),
            pcodePrevResults,

            // Retrieve language strings defined in a JSON object in the HTML page
            // @TODO: error handling incase strings aren't available
            pcodeLookupErrorTxt = _t('Sorry, there are no results. Please check your post code and try again');


        // Diable on page load (we'll never be loading it with a value set)
        SFR.Utils.disableElem($pcodeLookupSbmt);

        // Only allow the user to do a lookup if the postcode input has *some* value
        $pcodeLookup.on('keyup', '.postcode input[type=text]', function () {

            SFR.Utils.checkInputHasValue($pcodeLookupInput, function () {

                // and toggle status of 'Find address' button accordingly
                if ($pcodeLookupInput.data('has-value') == 'true') {

                    SFR.Utils.enableElem($pcodeLookupSbmt);

                } else {

                    SFR.Utils.disableElem($pcodeLookupSbmt);

                }

            });

        });

        // When the user submits their postcode…
        $pcodeLookupSbmt.click(function (e) {

            var $pcodeLookupResultsData,
                $pcodeScrollPane,
                $pcodeLookupResults;

            // Disable the submit button for now, to avoid repeat submits
            SFR.Utils.disableElem($pcodeLookupSbmt);

            // Check for previous results
            if ($pcodeLookup.find('.scroll-pane').length) {

                // set var for later use
                pcodePrevResults = 'true';

                $pcodeScrollPane
                    // add CSS hook so we can show some feedback while request happens
                    // @TODO: add progress anim (or spin.js)
                    .addClass('loading')
                    // remove previous result set
                    .empty();

            } else {

                // set var for later use
                pcodePrevResults = 'false';

                // Create containers for lookup results
                $pcodeScrollPane = $('<div />').addClass('scroll-pane');
                $pcodeLookupResults = $('<div />').addClass('form-item').append($pcodeScrollPane);

            }

            // Make AJAX request and parse JSON data back into page
            $.ajax({
                url: pcodeLookupResultsPath,
                dataType: pcodeLookupResultsType,
                type: 'GET',
                cache: false,
                context: $pcodeLookup,
                success: function (data) {

                    // clear out data from any previous lookups
                    $pcodeLookupResultsData = '';

                    // Construct markup from JSON data and store as $pcodeLookupResultsData
                    for (var i = 0; i < data.length; i++) {

                        $pcodeLookupResultsData += '<label>'
                            + '<input type="radio" name="address-option" value="address_option-' + [i] + '" />'
                            + '<span class="building-name-number">' + data[i].building_name_number + '</span>, '
                            + '<span class="addr-line-1">' + data[i].addr_line_1 + '</span>, '
                            + '<span class="addr-line-2">' + data[i].addr_line_2 + '</span>, '
                            + '<span class="city">' + data[i].city + '</span>, '
                            + '<span class="county">' + data[i].county + '</span>, '
                            + '<span class="postcode">' + data[i].postcode + '</span>, '
                            + '<span class="country">' + data[i].country + '</span>'
                            + '</label>';

                    }

                },
                // This handles borked JSON, not a scenario where no results are produced
                error: function () {

                    // Clear out data from any previous lookups
                    $pcodeLookupResultsData = '';

                    // Display error message
                    $pcodeLookupResultsData = pcodeLookupErrorTxt;

                    // Re-enable submit button
                    SFR.Utils.enableElem($pcodeLookupSbmt);

                },
                complete: function () {

                    // Populate scroll pane (overwriting any existing contents)
                    $pcodeScrollPane.html($pcodeLookupResultsData);

                    // If this is the first lookup, we need to insert the whole results block into the DOM
                    if (pcodePrevResults == 'false') {

                        // Set hidden state
                        $pcodeLookupResults.hide();
                        // Insert into DOM
                        $pcodeLookup.append($pcodeLookupResults);
                        // Animate open
                        SFR.Utils.expandIt($pcodeLookupResults);

                    } else {

                        // Remove loading flag
                        $pcodeScrollPane.removeClass('loading');

                    }

                    // Set keyboard focus on .scroll-pane
                    SFR.Utils.setKeyboardFocus($pcodeScrollPane);

                }

            });

            // Prevent the whole form from submitting
            e.preventDefault();

        });

        // When an address is selected from the radio list…
        // @TODO: improve keyboard accessibility
        // …when keyboard focus moves to a new radio it checks it, triggering change
        // is it possible to only check a radio with a return/submit?
        $pcodeLookup.on('change', '.pcode-lookup [type=radio]', function () {

            var $this = $(this);

            $pcodeScrollPane = $this.parents('.form-item');

            // Highlight selected option
            SFR.Utils.highlightSelectedRadioLabel($this);

            // If optional address fields are still collapsed…
            if ($ctx.hasClass('is-collapsed')) {

                // …reveal them
                SFR.Utils.expandIt($optionalAddrFields, 300, function () {

                    // …hide the button
                    $manualAddrLink.hide();
                    // …and toggle the state of the container
                    $ctx.toggleClass('is-collapsed');
                    $ctx.toggleClass('is-expanded');

                });

            }

            // Populate the manual address fields when the user clicks
            // an address in the postcode lookup result set
            $this.siblings('span').each(function () {

                var $this = $(this),
                    $className = $this.attr('class');

                $ctx
                    // Find the text fields that correspond to each part of the address
                    .find('.' + $className)
                    .find('input[type=text]')
                    // and populate them with the address data
                    .val($this.text());

            });

            // Collapse then delete the lookup results
            SFR.Utils.collapseIt($pcodeScrollPane, 300, function () {

                $pcodeScrollPane.remove();

            });

            // Set keyboard focus on postcode field
            SFR.Utils.setKeyboardFocus($('.postcode input'));


        });

    };




    /**
    * WIP: Set up dynamic address forms
    * This function helps to manage the behaviour of multi-line address inputs
    * It's closely tied to setUpPcodeLookup() and also leverages some generic functions like setUpCollapsibles()
    *
    * @param {Object} context
    *   Container to scope the following functions
    */
    BSI.setUpAddressFields = function (context) {

        var $ctx = $(context || document),
            $requiredAddrFields = $ctx.find('[required=required]'),
            $optionalAddrFields = $ctx.find('.optional-fields'),

            // Retrieve language strings defined in a JSON object in the HTML page
            // @TODO: error handling incase strings aren't available
            manuaAddrTxt = _t('Manually enter address'),

            // Generate container for buttons
            $userActions = $('<div />').addClass('user-actions'),

            // The button to expand optional fields is generated dynamically by the generic
            // setUpCollapsibles() function (invoked by 'collapsible' class on .manual-addr-group),
            // But here we want to override the default button text
            $manualAddrLink = $ctx.find('.trigger');


        // Add language strings to button
        $manualAddrLink
            .addClass('bt')
            .html(manuaAddrTxt);

        // …and insert controls into DOM
        $ctx.append($userActions);

        // Hide the 'Enter address manually' button after it is used
        $manualAddrLink.click(function () {

            SFR.Utils.accessiblyToggle($ctx, $manualAddrLink);
            SFR.Utils.accessiblyToggle($ctx, $manualAddrLink.prev('.pcode-lookup').find('.scroll-pane').parents('.form-item'));

            return false;

        });


    };

    /**
    * Sets up autocomplete on site search.
    */
    BSI.setupAutocompleteSearch = function () {
        /**
        * Internal function called when the search field is updated
        *
        * @param   oData   the JSON object returned by the search service.
        */
        function _processSearchResults(oData) {
            // 0. empty everything
            oResultList.empty();

            // 1. if there are no results…
            if (oData.length == 0) {
                oResultList.append('<li class="noResults">…</li>');
            }
            else {
                for (var i = 0; i < oData.length; i++) {
                    oResultList.append('<li><a href="#">' + oData[i] + '</a></li>');
                }
            }
            oResultDom.addClass('ui_visible');
        }

        /**
        * Hides the autocomplete list.
        */
        function _resetDom() {
            oResultDom.removeClass('ui_visible');
            oResultList.empty();
        }

        // 0. look for DOM
        var oSearchWidget = $('#site-search');
        if (oSearchWidget.length == 0)
            return false;

        // 1. hook everything
        var oInp = oSearchWidget.find('input[type=search]').attr('autocomplete', 'off'),
            sParamName = oInp.attr('name'),            // cache this
            oForm = oInp.parents('form').eq(0),   // be safe
            oResultDom = $('<div class="siteSearchResults"></div>').appendTo(oSearchWidget),
            oResultList = $('<ul></ul>').appendTo(oResultDom),
            oTrigSearch = $('<strong></strong>').appendTo(oResultDom).wrap('<a href="#" class="submit">Search for </a>'),
            bWaiting = false,
            sVal = '',
            oTo = null;

        // 2. event binding on the search box
        oInp.on('keyup.search input.search', function () {
            /*
            Trigger request on keypress
            */
            // a. grab value
            sVal = oInp.val();
            oTrigSearch.text(sVal);

            // b. if it's too short, drop out
            if (sVal.length < 3)
                return true;        // return true, otherwise we’ll confuse the user

            // c. if we're already waiting for a result, don’t fire
            if (bWaiting)
                return true;

            // d. otherwise, ping a request off
            var oSend = {};
            oSend[sParamName] = sVal;
            $.get(oSearchWidget.data('json-submit-uri'), oSend, _processSearchResults);

            return true;
        }).on('blur.search', function () {
            /*
            Hide the autocomplete list when the user removes focus from the input
            (on a timeout in case they shift focus to the autocomplete list)
            */
            oTo = setTimeout(_resetDom, 100);
            return true;
        }).on('focus.search', function (e) {
            /*
            Clear any hide timeout if the user shifts focus back to the list
            */
            clearTimeout(oTo);
        }).on('keydown.search', function (e) {
            /*
            Listen for keydowns: if they hit the down cursor, shift them to the first autocomplete suggestion
            */
            // if they're not pressing the down key, ditch out
            if (e.keyCode !== 40)
                return true;

            // otherwise, shift focus
            var oA = oResultDom.find('a').eq(0).trigger('focus');
            if (oA.length > 0) {
                // if the above achieved anything, we need to clear the hide timeout—focus() on the link gets called
                // *before* blur() on the input…
                clearTimeout(oTo);
            }
            return false;
        });

        // 3. listen for events in the autocomplete list
        oResultDom.on('click.search', 'li a', function () {
            /*
            Clicking on an autocomplete: fills the form with the current value
            */
            oInp.val($(this).text());
            return false;
        }).on('click.search', 'a.submit', function () {
            /*
            Clicking on the ‘search for x’ link: resets the search term to what they entered (because it may have been
            overwritten by the click handler above) and submis the form
            */
            oInp.val(oTrigSearch.text());
            oForm.trigger('submit');
            return false;
        }).on('focus.search', 'a', function () {
            /*
            Focusing on one of the links in the autocomplete list: set the search form value to the term
            */
            var oT = $(this);

            // 0. clear the hide timeout
            clearTimeout(oTo);

            // 1. copy current value back to form
            oInp.val((oT.hasClass('submit') ? oTrigSearch.text() : oT.text()));
        }).on('blur.search', 'a', function () {
            /*
            Shifting away from one of the links: trigger a timed close
            */
            oTo = setTimeout(_resetDom, 100);
        }).on('keydown.search', 'a', function (e) {
            /*
            Pressing up or down cursor on autocomplete links: move between them
            Pressing enter: submit the form
            */
            // 0. if it’s not an up or down…
            if ((e.keyCode !== 40) && (e.keyCode !== 38) && (e.keyCode !== 13))
                return true;

            // 1. if it's enter, submit the form and drop out
            if (e.keyCode === 13) {
                oForm.trigger('submit');
                return false;
            }

            var oCurrLink = $(this);

            // 2. if we're on the submit link…
            if (oCurrLink.hasClass('submit')) {
                // a. if they've hit the up key, send them to the last item in the select list
                if (e.keyCode === 38) {
                    oResultList.find('a:last').focus();
                    clearTimeout(oTo);
                }

                // b. trap either way
                return false;
            }

            // 3. otherwise, we're somewhere in the result list
            var oNextEl = null;
            if (e.keyCode === 40) {
                /* down */
                // a. try and get next link
                oNextEl = oCurrLink.parent().next().children('a');

                // b. if it's not worked, move them to the submit link
                if (oNextEl.length == 0) {
                    oNextEl = oTrigSearch.parent();
                }
            }
            else {
                /* up */
                // a. try and get prev link
                oNextEl = oCurrLink.parent().prev().children('a');

                // b. if it's not worked, move them to the input
                if (oNextEl.length == 0) {
                    oNextEl = oInp;
                }
            }

            // 4. call focus
            oNextEl.trigger('focus');
            clearTimeout(oTo);

            return false;
        });

    };


    $("a").click(function () {
        var http = location.protocol;
        var slashes = http.concat("//");
        var host = slashes.concat(window.location.hostname);
        var redirecthost;
        var hostUrl = this.href;
        var url = hostUrl;
        url = url.split("/");

        var source = this.href.toLowerCase();
        source = source.replace(/\/$/, '');

        switch (url[3].toLowerCase()) {

            case "en-gb": redirecthost = host + '/en-IE';
                host = host + '/en-GB';
                if ((source == host.toLowerCase()) && ($.cookie('IrelandHome'))) {
                    window.document.location.href = redirecthost;
                    return false;
                }
                break;

            case "de-de":
                if ($.cookie('SchweizHome')) {
                    redirecthost = host + '/de-CH';
                    host = host + '/de-DE';
                    if ((source == host.toLowerCase())) {
                        window.document.location.href = redirecthost;
                        return false;
                    }
                }

                else if ($.cookie('OsterreichHome')) {
                    redirecthost = host + '/de-AT';
                    host = host + '/de-DE';
                    if ((source == host.toLowerCase())) {
                        window.document.location.href = redirecthost;
                        return false;
                    }
                }
                break;

            case "nl-nl": redirecthost = host + '/nl-BE';
                host = host + '/nl-NL';
                if ((source == host.toLowerCase()) && ($.cookie('BelgieHome'))) {
                    window.document.location.href = redirecthost;
                    return false;
                }
                break;

            case "en-au": redirecthost = host + '/en-NZ';
                host = host + '/en-AU';
                if ((source == host.toLowerCase()) && ($.cookie('NewZealandHome'))) {
                    window.document.location.href = redirecthost;
                    return false;
                }
                break;
        }
    });

    //WR-2016-756
    $("#HomeLang, .logo").click(function () {

        if ($.cookie('BsiLanguage')) {
            if ($.cookie('BsiLanguage').indexOf('bsiaislandi') == -1) {
                var homeLang = $.cookie('BsiLanguage');
                var hrefLang = this.href.split("/")[3];
                if (homeLang.indexOf(hrefLang) == -1) {
                    if (!window.location.origin) {
                        window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
                    }
                    window.location.href = window.location.origin + homeLang;
                    return false;
                }
                else {
                    window.location.href = this.href;
                    return false;
                }
            } else {
                window.location.href = this.href;
                return false;
            }
        }
        else {
            window.location.href = this.href;
            return false;
        }
    });

    $('a').each(function () {
        if (this.href.toLowerCase().indexOf('mailto') != -1) {
            this.href = this.href.replace("::25//", ":").replace(":25", "");
        }
    });

} (jQuery));