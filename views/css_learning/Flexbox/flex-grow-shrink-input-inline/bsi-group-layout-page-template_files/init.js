"use strict";

/**
* Our BSI project namespace.
*/
var BSI = BSI || {};

BSI.init = function () {

    /* Globally cache the jQuery reference to the document to avoid repeated lookups.
    * This should be used as the base of all document-wide
    * searches where a closer context isn't available e.g.
    * var $someElement = $.root.find(someSelector);
    */
    $.root = $(document.body);


    /* Set up breakpoints.js
    */
    $(window).setBreakpoints({
        // Use only largest available vs use all available
        distinct: true,
        // array of widths (in px) where breakpoint events should be triggered
        breakpoints: [
      220,
      768
    ]
    });

    /* Narrow viewports
    * Functions to execute for narrow viewports
    */
    $(window).bind('enterBreakpoint220', function () {

        BSI.collapseMenu();
        BSI.collapseSubMenu
        BSI.collapseSearchFilters();

        // Resize responsive images
        BSI.responsiveImages('small');

    });
    /* Functions to execute when the viewport is manually adjusted below 768px
    */
    $(window).bind('exitBreakpoint768', function () {

        // Content choreography
        // (We could replace this with flexbox implementation for supporting browsers)
        $.root.find('.footer-bar').before($('.utility-nav'));

        // Resize responsive images
        BSI.responsiveImages('small');

    });
    /* Wide viewports
    * Functions to execute when the viewport is wider than 767px
    */
    $(window).bind('enterBreakpoint768', function () {

        BSI.unCollapseMenu();
        BSI.unCollapseSubMenu
        BSI.unCollapseSearchFilters();

        // Content choreography
        // (We could replace this with flexbox implementation for supporting browsers)
        $.root.find('#skiplinks').after($.root.find('.utility-nav'));

        // Resize responsive images
        BSI.responsiveImages('large');

        SFR.Utils.clearOddFloaters('.standards-list');
        SFR.Utils.clearOddFloaters('.resources ul');

    });

    /* Viewport-agnostic functions
    * These are executed regardless of viewport width
    */

    SFR.Utils.scaleFix();
    SFR.Utils.niceUpInPageNav('.local');

    if ($.root.find('.drop-down').length) {
        BSI.accessifyDropDownLists();
    }
    if ($.root.find('.drop-down').length) {
        BSI.accessifySubMenuDropDownLists();
    }
    if ($.root.find('.main-nav-item').length) {
        BSI.accessifyMenu();
    }
    if ($.root.find('.sub-menu-nav-item').length) {
        BSI.accessifySubMenu();
    }

    SFR.Utils.setUpCollapsibles();
    BSI.setUpNameInputs();
    BSI.setupMenuToggle();
    BSI.setupSubMenuToggle();
    BSI.setupSubSubMenuToggle();
    BSI.setupAutocompleteSearch();
    BSI.setUpTelephoneLinks();

    var breakpoint = 767;
    window.onresize = function (event) {
        if (window.innerWidth >= breakpoint) {
            BSI.hideSubMenu();
        }
    };

    window.onresize = function (event) {
        if (window.innerWidth >= breakpoint) {
            BSI.hideSubSubMenu();
        }
    };

    if ($.root.find('.pcode-lookup').length) {
        BSI.setUpPcodeLookup('/data/pcode_results.json', 'json');
    }
    if ($.root.find('.address-fields').length) {
        BSI.setUpAddressFields('.address-fields');
    }

    // Set up selectbox replacement
    BSI.setupSelectBoxes();

    // Set up form validation
    BSI.setupFormValidation();

    // Set up custom checkboxes
    BSI.setupCustomCheckboxes();

    // Set up responsive tables
    BSI.responsiveTables();

    //BSI.setupAddthis();

    
    //$.root.find('.quality-management-teaser-item.l-grid-1').equalHeight();
    $.root.find('.breakpoint-768 .courses-list .l-grid-2').equalHeight();


    // Bind two temporary events that fire once the two main breakpoints get triggered
    // This is for pieces of JavaScript that need to run *after* breakpoints.js has
    // done it's thing. However, since it does not provide any kind of initialisation
    // callback, we simply bind two events, run our js and then unbind the events immediately
    // This is typically used by functions which test the .breakpoint-N body classes to
    // determine if the site is in mobile mode or not.
    // @TODO - Is this best way of detecting mobile here?

    // Desktop init
    $(window).bind('enterBreakpoint768', function (e) {
        $(this).unbind(e);
        post_breakpoint_init();
    });

    // Mobile init
    $(window).bind('enterBreakpoint220', function (e) {
        $(this).unbind(e);
        post_breakpoint_init();
    });

    function post_breakpoint_init() {

        BSI.initialiseSlideshows();

        BSI.hookCookieAlert();

        BSI.setupTabs();

        // Initialise the country selector if url is not of supplychain
        if (window.location.hostname != 'www.bsi-supplychainsolutions.com') {
            BSI.setupCountrySelector();
        }

        BSI.setUpSearchFilters();
    }

}

$(function () { BSI.init(); });

//To set Single column image dimensions
//$(document).ready(function () {
//    $('img.opCurrentCourse').each(function () {
//        $(this).attr('width', '70');
//        $(this).attr('height', '70');
//    });    
//});