window.mdn.utils = {
  isTocSticky: false,
  tocHeight: 0,
  getOffsetTop: function(elem) {
    "use strict";
    var boundingClientRect = elem.getBoundingClientRect();
    var elemDocumentWindow = elem.ownerDocument.defaultView;
    var top = boundingClientRect.top;
    var yOffset = parseInt(elemDocumentWindow.pageYOffset, 10);
    return top + yOffset;
  },
  randomString: function(strLength) {
    "use strict";
    var length = strLength || 5;
    var possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var text = "";
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  },
  scrollToHeading: function(id) {
    "use strict";
    var toc = document.getElementById("toc");
    if (toc) {
      this.tocHeight = toc.offsetHeight;
      this.isTocSticky = getComputedStyle(toc).position === "sticky";
    }
    var heading = document.getElementById(id);
    var headingTop = mdn.utils.getOffsetTop(heading);
    var scrollY = 0;
    if (toc && this.isTocSticky) {
      scrollY = headingTop - this.tocHeight;
    } else {
      scrollY = headingTop;
    }
    window.location.hash = id;
    window.scroll(0, parseInt(scrollY, 10));
  }
};
function handlePerformanceEvents(data) {
  mdn.analytics.trackEvent({
    category: data.category,
    action: data.action,
    label: mdn.utils.randomString(5) + "-" + new Date().getTime(),
    value: data.value - performance.timing.navigationStart
  });
  mdn.analytics.trackTiming({
    category: data.category,
    timingVar: data.action,
    value: data.value - performance.timing.navigationStart
  });
}
function setLoadEventEnd(perfData) {
  var measureName = perfData.markName + "-measure";
  window.mdn.perf.setMark(perfData.markName);
  window.mdn.perf.setMeasure({
    measureName: measureName,
    startMark: "navigationStart",
    endMark: perfData.markName
  });
  mdn.analytics.trackTiming({
    category: "Interactive Examples",
    timingVar: measureName,
    value: window.mdn.perf.getDuration(measureName)
  });
}
window.mdn.postMessageHandler = {
  interactiveExamplesMsgHandler: function(event) {
    "use strict";
    var allowedOrigin =
      window.mdn.interactiveEditor.editorUrl ||
      "https://interactive-examples.mdn.mozilla.net";
    var eventData = event.data;
    if (
      event.origin !== allowedOrigin ||
      (eventData.markName &&
        eventData.markName.indexOf("interactive-editor-") > -1)
    ) {
      return false;
    }
    if (eventData.label === "Performance Events") {
      handlePerformanceEvents(eventData);
    } else if (
      eventData.markName &&
      eventData.markName.indexOf("ie-load-event-end") > -1
    ) {
      setLoadEventEnd(eventData);
    } else {
      mdn.analytics.trackEvent(eventData);
    }
  }
};
window.addEventListener(
  "message",
  window.mdn.postMessageHandler.interactiveExamplesMsgHandler,
  false
);
(function(win, doc, $) {
  "use strict";
  $(".toggleable").mozTogglers();
  $(".page-watch a").on("click", function(e) {
    e.preventDefault();
    var $link = $(this);
    if ($link.hasClass("disabled")) {
      return;
    }
    mdn.analytics.trackEvent({
      category: "Page Watch",
      action: $link.text().trim()
    });
    var $form = $link.closest("form");
    var notification = mdn.Notifier.growl($link.data("subscribe-status"), {
      duration: 0,
      type: "text"
    });
    $link.addClass("disabled");
    $.ajax($form.attr("action"), {
      cache: false,
      method: "post",
      data: $form.serialize()
    }).done(function(data) {
      var message;
      if (Number(data.status) === 1) {
        $link.text($link.data("unsubscribe-text"));
        message = $link.data("subscribe-message");
      } else {
        $link.text($link.data("subscribe-text"));
        message = $link.data("unsubscribe-message");
      }
      notification.success(message, 2e3);
      $link.removeClass("disabled");
    });
  });
  $(".external").each(function() {
    var $link = $(this);
    if (!$link.find("img").length) {
      $link.addClass("external-icon");
    }
  });
  $(
    ".document .document-head h1, .quick-links a code, .crumbs span[property=name]"
  ).each(function() {
    var $wrapper = $(this);
    var text = $wrapper.text();
    if ($wrapper.children().length > 0) {
      return;
    }
    var split = text.split(/([a-z]{3})(?=[[.:(A-Z][@.:(A-Z]{0,}[a-zA-Z]{3})/g);
    $wrapper.empty();
    $.each(split, function(key, value) {
      if (key > 0 && key % 2 === 0) {
        $wrapper.append("<wbr>");
      }
      $wrapper.append(doc.createTextNode(value));
    });
  });
  if ($("article pre").length && "querySelectorAll" in doc) {
    if (mdn.assets && mdn.assets.js.hasOwnProperty("syntax-prism")) {
      (function() {
        mdn.assets.js["syntax-prism"].forEach(function(url, index, array) {
          var syntaxScript = doc.createElement("script");
          syntaxScript.async = array.length === 1;
          if (index === 0) {
            syntaxScript.setAttribute("data-manual", "true");
          }
          syntaxScript.src = url;
          doc.head.appendChild(syntaxScript);
        });
      })();
    }
  }
  $("#nav-access").on("click contextmenu", "a", function(event) {
    var $thisLink = $(this);
    var url = $thisLink.attr("href");
    var data = {
      category: "Access Links",
      action: $thisLink.text(),
      label: $thisLink.attr("href")
    };
    mdn.analytics.trackLink(event, url, data);
    if (win.ga) {
      ga("set", "dimension11", "Yes");
    }
  });
  $("#main-nav").on("click contextmenu", "a", function(event) {
    var url = this.href;
    var data = { category: "Wiki", action: "Main Nav", label: url };
    mdn.analytics.trackLink(event, url, data);
  });
  $(".crumbs").on("click contextmenu", "a", function(event) {
    var url = this.href;
    var data = { category: "Wiki", action: "Crumbs", label: url };
    mdn.analytics.trackLink(event, url, data);
  });
  $(".htab").each(function(index) {
    var $htab = $(this);
    var $items = $htab.find(">ul>li");
    $htab.append($("div[id=compat-desktop]")[index]);
    $htab.append($("div[id=compat-mobile]")[index]);
    $items
      .find("a")
      .on("click mdn:click", function(e) {
        var $this = $(this);
        if (e) {
          e.preventDefault();
          e.stopPropagation();
        }
        $items.removeClass("selected");
        $this.parent().addClass("selected");
        $htab
          .find(">div")
          .hide()
          .eq($items.index($this.parent()))
          .show();
      })
      .eq(0)
      .trigger("mdn:click");
  });
  $(".wiki-l10n").on("change", function() {
    if (this.value) {
      win.location = this.value;
    }
  });
  $("body[contextmenu=edit-history-menu]").mozContextMenu(function(
    target,
    $contextMenu
  ) {
    var $body = $("body");
    var isTextSelected = !document.getSelection().isCollapsed;
    var isLinkTargeted =
      $(target).is("a") ||
      $(target)
        .parents()
        .is("a");
    var isImageTargeted = $(target).is("img");
    if (isLinkTargeted || isTextSelected || isImageTargeted) {
      $body.attr("contextmenu", "");
    }
    $contextMenu.on("click", function(e) {
      window.location.href = $(e.target).data("action") + "?src=context";
    });
  });
  var $kserrors = $("#kserrors");
  if ($kserrors.length) {
    var $kserrorsToggle = $kserrors.find(".kserrors-details-toggle");
    var $kserrorsDetails = $kserrors.find(".kserrors-details");
    $kserrorsToggle.toggleMessage({
      toggleCallback: function() {
        $kserrorsDetails.toggleClass("hidden");
      }
    });
    var $kserrorsList = $("#kserrors-list");
    if ($kserrorsList.length) {
      $kserrorsList.each(function() {
        var $thisError = $(this);
        var errorType = $thisError
          .find(".kserror-type")
          .text()
          .trim();
        var errorMacro = $thisError
          .find(".kserror-macro")
          .text()
          .trim();
        var errorParse = $thisError
          .find(".kserror-parse")
          .text()
          .trim()
          .replace(/\s\s+/g, " ");
        mdn.analytics.trackError(
          "Kumascript Error",
          errorType,
          "in: " + errorMacro + "; parsing: " + errorParse
        );
      });
    } else {
      mdn.analytics.trackError("Kumascript Error", "generic error");
    }
  }
  var $docPending = $("#doc-pending-fallback");
  if ($docPending.length) {
    mdn.analytics.trackError("Translation Pending", "displayed");
  }
  $(".stack-form")
    .html(
      '<form action="http://stackoverflow.com/search"><i class="stack-icon" aria-hidden="true"></i><label for="stack-search" class="offscreen">' +
        gettext("Search Stack Overflow") +
        '</label><input id="stack-search" placeholder="' +
        gettext("Search Stack Overflow") +
        '" /><button type="submit" class="offscreen">Submit Search</button></form>'
    )
    .find("form")
    .on("submit", function(e) {
      e.preventDefault();
      var value = $(this)
        .find("#stack-search")
        .val();
      if (value !== "") {
        win.location =
          "http://stackoverflow.com/search?q=[firefox]+or+[firefox-os]+or+[html5-apps]+" +
          value;
      }
    });
  if ($("math").length) {
    (function() {
      var $div = $(
        '<div class="offscreen"><math xmlns="http://www.w3.org/1998/Math/MathML"><mspace height="23px" width="77px"/></math></div>'
      ).appendTo(document.body);
      var box = $div.get(0).firstChild.firstChild.getBoundingClientRect();
      $div.remove();
      var supportsMathML =
        Math.abs(box.height - 23) <= 1 && Math.abs(box.width - 77) <= 1;
      if (!supportsMathML) {
        $(
          '<link href="' +
            mdn.staticPath +
            'styles/libs/mathml.css" rel="stylesheet" type="text/css" />'
        ).appendTo(doc.head);
        $("#wikiArticle").prepend(
          '<div class="notice"><p>' +
            gettext(
              "Your browser does not support MathML. A CSS fallback has been used instead."
            ) +
            "</p></div>"
        );
      }
    })();
  }
  (function() {
    var $button = $(".revision-list-controls .link-btn");
    if ($button.length) {
      var revisionButtonOffset = $button.offset().top;
      $(win).on("scroll", function() {
        var $compareButton = $button;
        var scroll = $(this).scrollTop();
        $compareButton.toggleClass("fixed", scroll >= revisionButtonOffset);
      });
    }
  })();
  (function() {
    var $youtubeIframes = $('iframe[src*="youtube.com/embed"]');
    var players = [];
    var timeoutFlag = 1;
    var timer;
    function timeout() {
      var fraction;
      timeoutFlag = 1;
      $.each(players, function(index, player) {
        if (player.getPlayerState() !== 1) {
          return;
        }
        timeoutFlag = 0;
        fraction = player.getCurrentTime() / player.getDuration();
        if (!player.checkpoint) {
          player.checkpoint = 0.1 + Math.round(fraction * 10) / 10;
        }
        if (fraction > player.checkpoint) {
          mdn.analytics.trackEvent({
            category: "YouTube",
            action: "Percent Completed",
            label: player.getVideoUrl(),
            value: Math.round(player.checkpoint * 100)
          });
          player.checkpoint += 0.1;
        }
      });
      if (timeoutFlag) {
        if (timer) {
          clearTimeout(timer);
        }
      } else {
        timer = setTimeout(timeout, 6e3);
      }
    }
    if (!$youtubeIframes.length) {
      return;
    }
    var origin =
      win.location.protocol +
      "//" +
      win.location.hostname +
      (win.location.port ? ":" + win.location.port : "");
    $youtubeIframes.each(function() {
      $(this).attr("src", function(i, src) {
        return (
          src +
          (src.split("?")[1] ? "&" : "?") +
          "&enablejsapi=1&origin=" +
          origin
        );
      });
    });
    var youtubeScript = doc.createElement("script");
    youtubeScript.async = "true";
    youtubeScript.src = "//www.youtube.com/iframe_api";
    doc.body.appendChild(youtubeScript);
    win.onYouTubeIframeAPIReady = function() {
      $youtubeIframes.each(function(i) {
        players[i] = new window.YT.Player($(this).get(0));
        players[i].addEventListener("onStateChange", function(event) {
          var action;
          switch (event.data) {
            case 0:
              action = "Finished";
              break;
            case 1:
              action = "Play";
              if (timeoutFlag) {
                timeout();
              }
              break;
            case 2:
              action = "Pause";
              break;
            case 3:
              action = "Buffering";
              break;
            default:
              return;
          }
          mdn.analytics.trackEvent({
            category: "YouTube",
            action: action,
            label: players[i].getVideoUrl()
          });
        });
        players[i].addEventListener("onPlaybackQualityChange", function(event) {
          var value;
          switch (event.data) {
            case "small":
              value = 240;
              break;
            case "medium":
              value = 360;
              break;
            case "large":
              value = 480;
              break;
            case "hd720":
              value = 720;
              break;
            case "hd1080":
              value = 1080;
              break;
            case "highres":
              value = 1440;
              break;
            default:
              value = 0;
          }
          mdn.analytics.trackEvent({
            category: "YouTube",
            action: "Playback Quality",
            label: players[i].getVideoUrl(),
            value: value
          });
        });
        players[i].addEventListener("onError", function(event) {
          mdn.analytics.trackError("YouTube Error", event.data);
        });
      });
    };
  })();
  function initDetailsTags() {
    var supportsDetails = (function(doc) {
      var el = doc.createElement("details");
      var isFake;
      var root;
      var diff;
      if (!("open" in el)) {
        return false;
      }
      root =
        doc.body ||
        (function() {
          var de = doc.documentElement;
          isFake = true;
          return de.insertBefore(
            doc.createElement("body"),
            de.firstElementChild || de.firstChild
          );
        })();
      el.innerHTML = "<summary>a</summary>b";
      el.style.display = "block";
      root.appendChild(el);
      diff = el.offsetHeight;
      el.open = true;
      diff = diff !== el.offsetHeight;
      root.removeChild(el);
      if (isFake) {
        root.parentNode.removeChild(root);
      }
      return diff;
    })(document);
    if (supportsDetails) {
      return;
    }
    $("details")
      .addClass("no-details")
      .each(function() {
        var $details = $(this);
        var $detailsSummary = $("summary", $details);
        var $detailsNotSummary = $details.children(":not(summary)");
        var $detailsNotSummaryContents = $details.contents(":not(summary)");
        if (!$detailsSummary.length) {
          $detailsSummary = $(doc.createElement("summary"))
            .text(gettext("Details"))
            .prependTo($details);
        }
        if ($detailsNotSummary.length !== $detailsNotSummaryContents.length) {
          $detailsNotSummaryContents
            .filter(function() {
              return this.nodeType === 3 && /[^\t\n\r ]/.test(this.data);
            })
            .wrap("<span>");
          $detailsNotSummary = $details.children(":not(summary)");
        }
        if (typeof $details.attr("open") !== "undefined") {
          $details.addClass("open");
          $detailsNotSummary.show();
        } else {
          $detailsNotSummary.hide();
        }
        $detailsSummary
          .attr("tabindex", 0)
          .attr("role", "button")
          .on("click", function() {
            $detailsSummary.focus();
            if (typeof $details.attr("open") !== "undefined") {
              $details.removeAttr("open");
              $detailsSummary.attr("aria-expanded", "false");
            } else {
              $details.attr("open", "open");
              $detailsSummary.attr("aria-expanded", "true");
            }
            $detailsNotSummary.slideToggle();
            $details.toggleClass("open");
          })
          .on("keyup", function(ev) {
            if (32 === ev.keyCode || 13 === ev.keyCode) {
              ev.preventDefault();
              $detailsSummary.click();
            }
          });
      });
  }
  if ($("details").length) {
    initDetailsTags();
  }
  function getDraftStorageKey() {
    var key = win.location.pathname;
    key = key.replace("$edit", "");
    key = key.replace("$translate", "");
    key = "draft/edit" + key;
    key = $.trim(key);
    return key;
  }
  var revisionSaved = win.mdn.getUrlParameter("rev_saved");
  var storageKey = getDraftStorageKey();
  if (
    win.location.href.indexOf("rev_saved") > -1 &&
    win.mdn.features.localStorage
  ) {
    var draftRevision = localStorage.getItem(storageKey + "#revision");
    if (draftRevision === revisionSaved) {
      localStorage.removeItem(storageKey);
      localStorage.removeItem(storageKey + "#save-time");
      localStorage.removeItem(storageKey + "#revision");
    }
    var location = win.location;
    if (win.history.replaceState) {
      win.history.replaceState({}, "", location.pathname);
    }
  }
})(window, document, jQuery);
(function() {
  "use strict";
  var iframe = document.querySelector("iframe.interactive");
  var mediaQuery = window.matchMedia("(min-width: 63.9385em)");
  var targetOrigin =
    window.mdn.interactiveEditor.editorUrl ||
    "https://interactive-examples.mdn.mozilla.net";
  function getInteractiveExamplesPerfEntry(perfEntries) {
    for (var i = 0, l = perfEntries.length; i < l; i++) {
      var currentEntry = perfEntries[i];
      if (
        currentEntry.initiatorType &&
        currentEntry.initiatorType === "iframe" &&
        currentEntry.name.indexOf(targetOrigin) > -1
      ) {
        return perfEntries[i];
      }
    }
  }
  if (iframe && performance !== undefined) {
    window.addEventListener("load", function() {
      var interactiveExamplesPerfEntry = {};
      var perfEntries = performance.getEntriesByType("resource");
      var mainNavigationStart = 0;
      var iframeFetchStart = 0;
      var iframeFetchStartSinceUnixEpoch = 0;
      var timeToIframeFetchStart = 0;
      if (perfEntries === undefined || perfEntries.length <= 0) {
        console.info("No performance entries was returned");
        return;
      }
      interactiveExamplesPerfEntry = getInteractiveExamplesPerfEntry(
        perfEntries
      );
      if (interactiveExamplesPerfEntry !== undefined) {
        mainNavigationStart = performance.timing.navigationStart;
        iframeFetchStart = Math.round(interactiveExamplesPerfEntry.fetchStart);
        iframeFetchStartSinceUnixEpoch = mainNavigationStart + iframeFetchStart;
        timeToIframeFetchStart =
          new Date(iframeFetchStartSinceUnixEpoch) -
          new Date(mainNavigationStart);
        mdn.analytics.trackEvent({
          category: "Interactive Examples",
          action: "Time to iframe fetch start",
          label: mdn.utils.randomString(5) + "-" + new Date().getTime(),
          value: timeToIframeFetchStart
        });
        mdn.analytics.trackTiming({
          category: "Interactive Examples",
          timingVar: "Time to iframe fetch start",
          value: timeToIframeFetchStart
        });
      }
    });
  }
  if (!iframe || iframe.classList.contains("interactive-js")) {
    return;
  }
  function postToEditor(message) {
    iframe.contentWindow.postMessage(message, targetOrigin);
  }
  mediaQuery.addListener(function(event) {
    if (event.matches) {
      postToEditor({ smallViewport: false });
    } else {
      postToEditor({ smallViewport: true });
    }
  });
  window.onload = function() {
    if (!mediaQuery.matches) {
      postToEditor({ smallViewport: true });
    }
  };
})();
(function(win, doc, $) {
  "use strict";
  var sites = ["CodePen", "JSFiddle"];
  var frameLength = "frame_".length;
  var sourceURL =
    $("link[rel=canonical]").attr("href") || win.location.href.split("#")[0];
  var plug =
    "\x3c!-- Learn about this code on MDN: " + sourceURL + " --\x3e\n\n";
  var analytics =
    '<input type="hidden" name="utm_source" value="mdn" />' +
    '<input type="hidden" name="utm_medium" value="code-sample" />' +
    '<input type="hidden" name="utm_campaign" value="external-samples" />';
  $(".sample-code-frame").each(function() {
    var $this = $(this);
    var parentTable = $this.parents(".sample-code-table").get(0);
    var section = $this.attr("id").substring(frameLength);
    var source = $this.attr("src").replace(/^https?:\/\//, "");
    source = source.slice(source.indexOf("/"), source.indexOf("$"));
    var $sampleFrame = parentTable ? parentTable : $this;
    createSampleButtons($sampleFrame, section, source);
  });
  function openJSFiddle(title, htmlCode, cssCode, jsCode) {
    var $form = $(
      '<form method="post" action="https://jsfiddle.net/api/mdn/" class="hidden" target="_blank">' +
        '<input type="hidden" name="html" />' +
        '<input type="hidden" name="css" />' +
        '<input type="hidden" name="js" />' +
        '<input type="hidden" name="title" />' +
        '<input type="hidden" name="wrap" value="b" />' +
        analytics +
        '<input type="submit" />' +
        "</form>"
    ).appendTo(doc.body);
    $form.find("input[name=html]").val(plug + htmlCode);
    $form.find("input[name=css]").val(cssCode);
    $form.find("input[name=js]").val(jsCode);
    $form.find("input[name=title]").val(title);
    $form.get(0).submit();
  }
  function openCodepen(title, htmlCode, cssCode, jsCode) {
    var $form = $(
      '<form method="post" action="https://codepen.io/pen/define" class="hidden" target="_blank">' +
        '<input type="hidden" name="data">' +
        analytics +
        '<input type="submit" />' +
        "</form>"
    ).appendTo(doc.body);
    var data = {
      title: title,
      html: plug + htmlCode,
      css: cssCode,
      js: jsCode
    };
    $form.find("input[name=data]").val(JSON.stringify(data));
    $form.get(0).submit();
  }
  function openSample(
    sampleCodeHost,
    section,
    title,
    htmlCode,
    cssCode,
    jsCode
  ) {
    var cssCleanCode = cssCode.replace(/\xA0/g, " ");
    mdn.analytics.trackEvent({
      category: "Samples",
      action: "open-" + sampleCodeHost,
      label: section
    });
    if (win.ga) {
      ga("set", "dimension8", "Yes");
    }
    if (sampleCodeHost === "jsfiddle") {
      openJSFiddle(title, htmlCode, cssCleanCode, jsCode);
    } else if (sampleCodeHost === "codepen") {
      openCodepen(title, htmlCode, cssCleanCode, jsCode);
    }
  }
  function createSampleButtons($sampleFrame, section, source) {
    $.get(source + "?section=" + section + "&raw=1")
      .then(function(sample) {
        var $sample = $("<div />").append(sample);
        var htmlCode = $sample.find("pre[class*=html]").text();
        var cssCode = $sample.find("pre[class*=css]").text();
        var jsCode = $sample.find("pre[class*=js]").text();
        var title = doc.getElementById(section);
        title = title ? title.textContent : "";
        if (htmlCode.length || cssCode.length || jsCode.length) {
          var $buttonContainer = $('<div class="open-in-host-container" />');
          $.each(sites, function() {
            var sampleCodeHost = this.toLowerCase();
            var $button = $("<button />", {
              class: "open-in-host button neutral"
            });
            var $icon = $("<i />", {
              class: "icon-" + sampleCodeHost,
              "aria-hidden": "true"
            });
            var $text =
              interpolate(gettext("Open in %(site)s"), { site: this }, true) +
              " ";
            $button
              .append($text)
              .append($icon)
              .appendTo($buttonContainer);
            $buttonContainer.insertAfter($sampleFrame);
            $button.on("click", function() {
              openSample(
                sampleCodeHost,
                section,
                title,
                htmlCode,
                cssCode,
                jsCode
              );
            });
          });
        } else if ($sample.children().length === 0) {
          mdn.analytics.trackError(
            "embedLiveSample Error",
            "$sample was empty",
            section
          );
        } else {
          mdn.analytics.trackError(
            "embedLiveSample Error",
            "$sample did not cointain any code",
            section
          );
        }
      })
      .fail(function() {
        mdn.analytics.trackError(
          "embedLiveSample Error",
          "ajax error retreiving source",
          section
        );
      });
  }
})(window, document, jQuery);
(function($, win, doc) {
  "use strict";
  var breakpoint = "(min-width: 47.9385em)";
  var $h2s = $("#wikiArticle").find("h2");
  var tocHeight = 0;
  var tocItemHeight = 0;
  var headingMargin = 0;
  function toggleCollapse(trigger) {
    var $trigger = $(trigger);
    var targetId = $trigger.attr("aria-controls");
    var $target = $("#" + targetId);
    var expanded = $trigger.attr("aria-expanded") === "true" ? true : false;
    if (expanded) {
      $target.attr("aria-hidden", "true");
      $trigger.attr("aria-expanded", "false");
    } else {
      $target.attr("aria-hidden", "false");
      $trigger.attr("aria-expanded", "true");
    }
  }
  function collapseHeadings() {
    if ($h2s.length < 2) {
      return;
    }
    $h2s.each(function(index, h2) {
      var $h2 = $(h2);
      var $buttonTemplate = $(
        '<button class="collapse-trigger" aria-expanded="false" aria-controls="collapse-' +
          index +
          '"></button>'
      );
      $buttonTemplate.on("click", function() {
        toggleCollapse(this);
      });
      $h2.find(".section-edit").remove();
      $h2.wrapInner($buttonTemplate);
      $h2
        .nextUntil("h2")
        .wrapAll(
          '<div id="collapse-' +
            index +
            '" class="collapsible" aria-hidden="true"></div>'
        );
    });
    if (window.location.hash) {
      var thisHash = window.location.hash;
      var headingId = thisHash.replace(/^#/, "");
      var $heading = $(doc.getElementById(headingId));
      if ($heading.length) {
        var $button = $heading.find("button");
        $button.click();
      }
      mdn.utils.scrollToHeading(headingId);
    }
  }
  function stickyToc() {
    var $toc = $("#toc");
    var hasToc = $toc.length ? true : false;
    var underlineTimeOutId;
    var underlineWait = false;
    var underlineWaitTime = 100;
    var wiggleRoom = 20;
    var $compatTable = $(".htab");
    var hasCompat = $compatTable.length ? true : false;
    if (!hasToc) {
      return;
    }
    if ($h2s.length < 2 && !hasCompat) {
      $toc.addClass("hidden");
      return;
    }
    tocHeight = $toc.outerHeight();
    tocItemHeight = $toc.find("li:first").outerHeight();
    if ($h2s.length) {
      var $lastheading = $h2s.last();
      headingMargin = parseInt($lastheading.css("margin-bottom"));
    }
    function underlineCurrent() {
      var screenTop = $(win).scrollTop();
      var screenBottom = screenTop + $(win).height();
      var screenUsableBottom = screenBottom - wiggleRoom;
      var screenUsableTop = screenTop + tocHeight + headingMargin + wiggleRoom;
      var $lastVisible;
      $h2s.each(function(index, h2) {
        var $h2 = $(h2);
        var h2Top = $h2.offset().top;
        var h2Bottom = h2Top + $h2.outerHeight();
        var $linkToH2 = $toc.find('a[href="#' + $h2.attr("id") + '"]');
        if (h2Top < screenUsableTop) {
          $lastVisible = $linkToH2;
        }
        if (
          h2Top > screenUsableTop &&
          h2Bottom + headingMargin < screenUsableBottom
        ) {
          $linkToH2.addClass("toc-current");
        } else {
          $linkToH2.removeClass("toc-current");
        }
      });
      if ($lastVisible) {
        $lastVisible.addClass("toc-current");
      }
    }
    function countDownToUnderline() {
      clearTimeout(underlineTimeOutId);
      underlineTimeOutId = setTimeout(underlineCurrent, underlineWaitTime);
      if (!underlineWait) {
        underlineCurrent();
        underlineWait = true;
        setTimeout(function() {
          underlineWait = false;
        }, underlineWaitTime);
      }
    }
    function handleTocClick(event) {
      var $thisTarget = $(event.target);
      var $thisLink = $thisTarget.closest("a");
      var linkHref = $thisLink.attr("href");
      var headingId = linkHref.replace(/^#/, "");
      var linkData = {
        category: "TOC Links",
        action: $thisLink.text(),
        label: linkHref
      };
      mdn.analytics.trackLink(event, linkHref, linkData);
      mdn.utils.scrollToHeading(headingId);
    }
    if (tocHeight > tocItemHeight * 2) {
      $toc.addClass("toc_tall");
      mdn.analytics.trackError(
        "TOC Height Warning",
        "Reported height:" + tocHeight
      );
    }
    if ($toc.css("position") === "sticky" && $toc.is(":visible")) {
      $toc.find("a[href]").on("click", function(event) {
        event.preventDefault();
        handleTocClick(event);
      });
    }
    $(win).on("scroll", function() {
      countDownToUnderline();
    });
  }
  if (win.matchMedia(breakpoint).matches === true) {
    stickyToc();
  } else {
    collapseHeadings();
  }
})(jQuery, window, document);
(function() {
  "use strict";
  function prependLocalAnchors() {
    var mainDocument = document.getElementById("document-main");
    var headings = Array.from(document.querySelectorAll("h2[id]")).concat(
      Array.from(document.querySelectorAll("h3[id]"))
    );
    var pageUrl = new URL(document.location.href);
    if (pageUrl.hash) {
      pageUrl.hash = "";
    }
    for (var i = 0, l = headings.length; i < l; i++) {
      var currentHeading = headings[i];
      var localAnchorTag = document.createElement("a");
      var span = document.createElement("span");
      var link = window.mdnIcons
        ? window.mdnIcons.getIcon("link")
        : gettext("Link");
      localAnchorTag.classList.add("local-anchor");
      span.textContent = gettext("Section");
      localAnchorTag.appendChild(link);
      localAnchorTag.appendChild(span);
      if (!currentHeading.classList.contains("offscreen")) {
        pageUrl.hash = currentHeading.id;
        localAnchorTag.href = pageUrl;
        localAnchorTag.dataset.headingId = currentHeading.id;
        currentHeading.insertAdjacentElement("beforeend", localAnchorTag);
      }
    }
    mainDocument.addEventListener("click", function(event) {
      var target = event.target;
      if (target.tagName === "A") {
        var hrefAttrValue = target.getAttribute("href");
        var isInDocumentLink = hrefAttrValue.startsWith("#");
        var headingId = isInDocumentLink
          ? hrefAttrValue.substr(1)
          : target.dataset.headingId;
        if (target.classList.contains("local-anchor") || isInDocumentLink) {
          event.preventDefault();
          mdn.utils.scrollToHeading(headingId);
        }
      }
    });
  }
  if (typeof Array.from !== "undefined") {
    window.addEventListener("load", function() {
      prependLocalAnchors();
    });
  }
})();
window.addEventListener("load", function() {
  var hash = window.location.hash;
  if (hash) {
    var id = hash.substr(1);
    var elem = document.getElementById(id);
    if (elem) {
      setTimeout(function() {
        mdn.utils.scrollToHeading(id);
      }, 60);
    }
  }
});
