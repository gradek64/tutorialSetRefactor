!function(){"use strict";var a=window.document,b={STYLES:"https://c.disquscdn.com/next/embed/styles/lounge.c91042d40efe3b95890994e857d7bde7.css",RTL_STYLES:"https://c.disquscdn.com/next/embed/styles/lounge_rtl.a62c93f336f137fda637c67af930e2db.css","lounge/main":"https://c.disquscdn.com/next/embed/lounge.bundle.c1c5342a5f0ac83c8baa69753c98266d.js","recommendations/main":"https://c.disquscdn.com/next/embed/recommendations.bundle.baf6e3fc6bd5dc65efc3be8dc20f0f7d.js","remote/config":"https://disqus.com/next/config.js","common/vendor_extensions/highlight":"https://c.disquscdn.com/next/embed/highlight.6fbf348532f299e045c254c49c4dbedf.js"};window.require={baseUrl:"https://c.disquscdn.com/next/current/embed/embed",paths:["lounge/main","recommendations/main","remote/config","common/vendor_extensions/highlight"].reduce(function(a,c){return a[c]=b[c].slice(0,-3),a},{})};var c=a.createElement("script");c.onload=function(){require(["common/main"],function(a){a.init("lounge",b)})},c.src="https://c.disquscdn.com/next/embed/common.bundle.9cdf86f4e27785c1f9f29a4ffb5ede34.js",a.body.appendChild(c)}();