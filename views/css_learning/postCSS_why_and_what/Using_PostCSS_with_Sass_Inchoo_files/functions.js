/**
 * Theme functions file
 */

/* Triggers */
(function($) {
  // Menu trigger
  $("#js-menu-trigger").on("click", function(e) {
    e.preventDefault();
    $("#js-menu").toggleClass("is-visible");
    $("#js-menu-trigger i").toggleClass("icon-cancel");
    $("#js-page-overlay").toggleClass("is-visible");
    $("body").toggleClass("prevent-scroll");
    $("body").toggleClass("menu-visible");
    $("body").removeClass("search-visible");

    if ($("#js-search-form").hasClass("is-visible")) {
      $("#js-search-form").removeClass("is-visible");
      $("#js-search-trigger i").removeClass("icon-cancel");
      $("#js-page-overlay").addClass("is-visible");
      $("body").addClass("prevent-scroll");
    }
  });

  // Search trigger
  $("#js-search-trigger").on("click", function(e) {
    e.preventDefault();
    $("#js-search-trigger i").toggleClass("icon-cancel");
    setTimeout(function() {
      $("#js-search-form input").focus();
    }, 100);
    $("#js-search-form").toggleClass("is-visible");
    $("#js-page-overlay").toggleClass("is-visible");
    $("body").toggleClass("prevent-scroll");
    $("body").toggleClass("search-visible");
    $("body").removeClass("menu-visible");

    if ($("#js-menu").hasClass("is-visible")) {
      $("#js-menu").removeClass("is-visible");
      $("#js-menu-trigger i").removeClass("icon-cancel");
      $("#js-page-overlay").addClass("is-visible");
      $("body").addClass("prevent-scroll");
    }
  });

  // Accordion trigger
  $('#js-accordion').find('.js-accordion-toggle').on('click', function(e) {
    e.preventDefault();

    // Expand or collapse this panel
    $(this).toggleClass('footer-menu__title--is-visible');
    $(this).next().slideToggle('fast');

    // Hide the other panels
    $('.js-accordion-toggle').not($(this)).removeClass('footer-menu__title--is-visible');
    $('.js-accordion-content').not($(this).next()).slideUp('fast');
  });

  $("#about-us__text-btn").on("click", function(e) {
    e.preventDefault();
    $(".about-us__text p").show();
    $(this).hide();
  });

  $("#js-clients-logos__btn-view-more").on("click", function(e) {
    e.preventDefault();
    $(".clients-logos__item").removeClass('clients-logos__item--hidden');
    $(this).hide();
  });

  // Outdated Browser notification
  function addLoadEvent(func) {    
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
      window.onload = func;
    } else {
      window.onload = function() {
        if (oldonload) {
          oldonload();
        }
        func();
      };
    }
  }
  
  addLoadEvent(function() {
    outdatedBrowser({
      bgColor: '#f25648',
      color: '#ffffff',
      lowerThan: 'grid',
      languagePath: './outdatedbrowser/lang/en.html',
    });
  });

  // Homepage Help Us section
  $('.hp-help__item').click(function() {
    var $item = $('.hp-help__item');
    var $otherItemsCont = $('.hp-help__item-content-container').not($currentItemCont);
    var $activeItemClass = 'hp-help__item--active';
    var $activeItemContClass = 'hp-help__item-content-container--active';
    var $currentItemCont = $(this).next();

    if (!$currentItemCont.hasClass($activeItemContClass)) {
      $item.removeClass($activeItemClass);
      $item.not($(this)).css({'opacity': '.7', 'transition': 'all .2s'});      
      $(this).addClass($activeItemClass).css({'opacity': '', 'transition': ''});
      $otherItemsCont.removeClass($activeItemContClass);      
      $currentItemCont.addClass($activeItemContClass);            
    } else {
      $(this).removeClass($activeItemClass);
      $item.css({'opacity': ''});
      $currentItemCont.removeClass($activeItemContClass);
    }

    $('html, body').animate({
      scrollTop: $(this).offset().top + (-24),
    }, 500);
  });
  
  // Homepage featured work Slick
  $('#js-hp-featured-work-slider').slick({
    dots: true,
    appendDots: $('#js-hp__featured-work-tabs-cont'),
    dotsClass: 'hp__featured-work-tabs',
    adaptiveHeight: true,
    arrows: true,
    customPaging: function(slick, i) {
      var label = (slick.$slides[i].childNodes[0].childNodes[0].dataset['label']);      
      return label;  
    },    
    responsive: [      
      {
        breakpoint: 768,
        settings: {
          arrows: false          
        }
      },      
    ]
  });  

  // Testimonials Slick
  $('#js-testimonials').slick({
    dots: true,    
    dotsClass: 'o-testimonial__pagination',
    adaptiveHeight: true,
    arrows: false,
    customPaging: function(slick, i) {      
      var dotImg = (slick.$slides[i].childNodes[0].childNodes[0].dataset['dotimg']);  
      var dotName = (slick.$slides[i].childNodes[0].childNodes[0].dataset['dotname']);  
      if (dotImg || dotName) {          
        return '<div><img class="lazyload" data-src="' + dotImg + '" /></div><span>' + dotName + '</span>';
      } else {
        return '<div></div>';
      }
    }    
  });

  // Homepage random banner images
  var hpBannerImages = Math.floor(Math.random() * 4 + 1);
  $('#js-hp__banner').css('background-image', 'url("//' + window.location.hostname + '/wp-content/themes/inchoo4/images/inchoo-homepage-images/inchoo-' + hpBannerImages + '.jpg")');
  
  // Vertical Timeline 
  function VerticalTimeline(element) {
    this.element = element;
    this.blocks = this.element.getElementsByClassName("js-cd-block");
    this.images = this.element.getElementsByClassName("js-cd-img");
    this.contents = this.element.getElementsByClassName("js-cd-content");
    this.offset = 0.8;
    this.hideBlocks();
  }

  VerticalTimeline.prototype.hideBlocks = function() {
    //hide timeline blocks which are outside the viewport
    if (!"classList" in document.documentElement) {
      return;
    }
    var self = this;
    for (var i = 0; i < this.blocks.length; i++) {
      (function(i) {
        if (
          self.blocks[i].getBoundingClientRect().top >
          window.innerHeight * self.offset
        ) {
          self.images[i].classList.add("cd-is-hidden");
          self.contents[i].classList.add("cd-is-hidden");
        }
      })(i);
    }
  };

  VerticalTimeline.prototype.showBlocks = function() {
    if (!"classList" in document.documentElement) {
      return;
    }
    var self = this;
    for (var i = 0; i < this.blocks.length; i++) {
      (function(i) {
        if (
          self.contents[i].classList.contains("cd-is-hidden") &&
          self.blocks[i].getBoundingClientRect().top <=
            window.innerHeight * self.offset
        ) {
          // add bounce-in animation
          self.images[i].classList.add("cd-timeline__img--bounce-in");
          self.contents[i].classList.add("cd-timeline__content--bounce-in");
          self.images[i].classList.remove("cd-is-hidden");
          self.contents[i].classList.remove("cd-is-hidden");
        }
      })(i);
    }
  };

  var verticalTimelines = document.getElementsByClassName("js-cd-timeline"),
    verticalTimelinesArray = [],
    scrolling = false;
  if (verticalTimelines.length > 0) {
    for (var i = 0; i < verticalTimelines.length; i++) {
      (function(i) {
        verticalTimelinesArray.push(new VerticalTimeline(verticalTimelines[i]));
      })(i);
    }

    //show timeline blocks on scrolling
    window.addEventListener("scroll", function(event) {
      if (!scrolling) {
        scrolling = true;
        !window.requestAnimationFrame
          ? setTimeout(checkTimelineScroll, 250)
          : window.requestAnimationFrame(checkTimelineScroll);
      }
    });
  }

  function checkTimelineScroll() {
    verticalTimelinesArray.forEach(function(timeline) {
      timeline.showBlocks();
    });
    scrolling = false;
  }

  // Cookie GDPR (Privacy Policy page)

  // Get Cookie
  function getCookie(c_name) {
    var c_value = document.cookie,
        c_start = c_value.indexOf(" " + c_name + "=");
    if (c_start == -1) c_start = c_value.indexOf(c_name + "=");
    if (c_start == -1) {
        c_value = null;
    } else {
        c_start = c_value.indexOf("=", c_start) + 1;
        var c_end = c_value.indexOf(";", c_start);
        if (c_end == -1) {
            c_end = c_value.length;
        }
        c_value = unescape(c_value.substring(c_start, c_end));
    }
    return c_value;
  }

  // Set Cookie
  function setCookie(name, value, days) {
    var d = new Date;
    d.setTime(d.getTime() + 24*60*60*1000*days);
    document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
  }
  
  // Delete Cookie
  function deleteCookie(name) { setCookie(name, '', -1); }  

  // GDPR Cookie checkbox on Privacy Policy page
  var GDPRCheckbox = $("#gdpr-checkbox");
  var GDPRCheckboxLabel = $("#gdpr-checkbox-label");

  if (getCookie("GDPRstate")) {    
    GDPRCheckbox.prop('checked', false);
    GDPRCheckboxLabel.html("You are currently opted out. Check to opt in.");
  } else {    
    GDPRCheckbox.prop('checked', true);
    GDPRCheckboxLabel.html("You are currently opted in. Uncheck to opt out.");
  }

  // Change Cookie on Click
  GDPRCheckbox.on('click', function() {
    if ($(this).is(":checked")) {      
      deleteCookie("GDPRstate");  
      GDPRCheckboxLabel.html("You are currently opted in. Uncheck to opt out.");
    } else {      
      setCookie("GDPRstate", "1", 365);
      GDPRCheckboxLabel.html("You are currently opted out. Check to opt in.");   
    }  
  });
  
  // Cookie banner
  var cookieBanner = $('#js-cookie-banner');
  var cookieBannerBtn = $('#js-cookie-banner__btn');

  if (getCookie("cookieBanner")) {
    cookieBanner.hide();
  } else {
    cookieBanner.css("opacity", "1");
    cookieBannerBtn.on('click', function() {
      setCookie('cookieBanner', '1', 365);
      cookieBanner.css({"opacity": "0", "visibility": "hidden"});
    });
  }      

  // Scroll to Top
  $("a[href^='#']").on('click', function(e) {
    e.preventDefault();
    var anchorID = $(this).attr('href').slice(1);    
    $('html, body').animate({
      scrollTop: $("#"+anchorID).offset().top
    }, 1000);
  });  

})(jQuery);

