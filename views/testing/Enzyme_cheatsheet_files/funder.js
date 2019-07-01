(function() {
  function embed () {
    var evt = new Event('codefund');
    var uplift = {};

    function trackUplift() {
      try {
        var url = 'https://codefund.io/impressions/20118e3f-496c-46f2-bf90-d53aa0bd7c98/uplift?advertiser_id=132';
        console.log('CodeFund is recording uplift. ' + url);
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.send();
      } catch (e) {
        console.log('CodeFund was unable to record uplift! ' + e.message);
      }
    };

    function verifyUplift() {
      if (uplift.pixel1 === undefined || uplift.pixel2 === undefined) { return; }
      if (uplift.pixel1 && !uplift.pixel2) { trackUplift(); }
    }

    function detectUplift(count) {
      var url = 'https://cdn2.codefund.app/assets/px.js';
      if (url.length === 0) { return; }
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status >= 200 && xhr.status < 300) {
            if (count === 1) { detectUplift(2); }
            uplift['pixel' + count] = true;
          } else {
            uplift['pixel' + count] = false;
          }
          verifyUplift();
        }
      };
      xhr.open('GET', url + '?ch=' + count + '&rnd=' + Math.random() * 11);
      xhr.send();
    }

    function elementVisible(element) {
      if (!element) { return false; }

      while (element) {
        var style = getComputedStyle(element);
        if (style.visibility === 'hidden' || style.display === 'none') { return false; }
        element = element.parentElement;
      }

      return true;
    }

    function closeCodeFund() {
      var codeFundElement = document.getElementById('codefund') || document.getElementById('codefund_ad');
      codeFundElement.remove();
      sessionStorage.setItem('codefund', 'closed');
    }

    try {
      if (sessionStorage.getItem('codefund') === 'closed') { return; }

      var codeFundElement = document.getElementById('codefund') || document.getElementById('codefund_ad');
      if (!elementVisible(codeFundElement)) {
        console.log('CodeFund element not visible! Please verify an element exists with id="codefund" and that it is visible.');
        return;
      }

      codeFundElement.innerHTML = '<div id="cf"> <div class="cf-wrapper" style="max-width: 330px; display: block; font-size: 14px; line-height: 1.4; font-family: Helvetica, Arial; margin-left: auto; margin-right: auto; padding: 15px;" align="center"> <div class="cf-header" style="font-size: 12px; color: #678; display: block; margin-bottom: 8px;">Proudly sponsored by</div> <a data-href="campaign_url" class="cf-text" target="_blank" rel="nofollow noopener" style="box-shadow: none !important; color: #333; text-decoration: none;"> <strong>Beyond Blockchain </strong> <span>- A Gitcoin hackathon. 500 coders, $15K in prizes. Jun 24 - Jul 10.</span> </a> <a href="https://codefund.app" data-target="powered_by_url" class="cf-powered-by" target="_blank" rel="nofollow noopener" style="box-shadow: none !important; margin-top: 5px; font-size: 11px; display: block; color: #678; text-decoration: none; text-align: center;"> <em>ethical</em> ad by CodeFund <img data-src="impression_url" style="position: fixed; left: -1000px; top: -1000px;"> </a> </div> </div> <style>#cf .cf-header:before { content: " "; margin: 0 0.5em; opacity: 0.5; } #cf .cf-header:after { content: " "; margin: 0 0.5em; opacity: 0.5; } </style>';
      codeFundElement.querySelector('img[data-src="impression_url"]').src = 'https://codefund.io/display/20118e3f-496c-46f2-bf90-d53aa0bd7c98.gif';
      codeFundElement.querySelectorAll('a[data-href="campaign_url"]').forEach(function (a) { a.href = 'https://codefund.io/impressions/20118e3f-496c-46f2-bf90-d53aa0bd7c98/click?campaign_id=289'; });

      var poweredByElement = codeFundElement.querySelector('a[data-target="powered_by_url"]');
      if (poweredByElement) { poweredByElement.href = 'https://codefund.io/invite/lN4RA92tcuA'; }

      var closeElement = codeFundElement.querySelector('button[data-behavior="close"]');
      if (closeElement) { closeElement.addEventListener('click', closeCodeFund); }

      evt.detail = { status: 'ok', house: true };
      detectUplift(1);
    } catch (e) {
      console.log('CodeFund detected an error! Please verify an element exists with id="codefund". ' + e.message);
      evt.detail = { status: 'error', message: e.message };
    }
    document.removeEventListener('DOMContentLoaded', embed);
    window.dispatchEvent(evt);
  };
  (document.readyState === 'loading') ? document.addEventListener('DOMContentLoaded', embed) : embed();
})();
