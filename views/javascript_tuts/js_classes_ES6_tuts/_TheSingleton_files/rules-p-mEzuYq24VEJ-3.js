/*
 Quantcast measurement tag
 Copyright (c) 2008-2021, Quantcast Corp.
*/
(function(b,l,k){var m=function(g){return g.replace(/^[\s\ufeff\xA0]+|[\s\ufeff\xA0]+$/g,"")},n=function(g){return{}.toString.call(g).match(/\s([a-zA-Z]+)/)[1].toLowerCase()},p=function(g,a){if(!a)return a;var b,d;b=-1!==g.toLowerCase().indexOf("tag")||-1!==g.toLowerCase().indexOf("keyword")||0===g.toLowerCase().indexOf("qc:");d=-1===g.toLowerCase().indexOf("tag")&&-1===g.toLowerCase().indexOf("keyword")&&0===g.toLowerCase().indexOf("qc:")?!1:!0;d&&(a=a.replace(/\.+/g," "));if(b){d=a.split(",");for(b=
0;b<d.length;b++)d[b]=m(d[b]);return d}return m(a.replace(/,+/g," "))},q=function(a,b,c){return a?"nc"===a?!b||!c||0>b.indexOf(c):"eq"===a?b===c:"sw"===a?0===b.indexOf(c):"ew"===a?(a=b.length-c.length,b=b.lastIndexOf(c,a),-1!==b&&b===a):"c"===a?0<=b.indexOf(c):!1:!1},a=function(a,b,c){var d;if(l.top===l.self)d=k.location.href;else{d=k.referrer;var e=k.createElement("a");e.href=d;d=e.href}q(b,d,c)?a(d):a(!1)},e=function(a,b,c){b=document.getElementsByTagName("meta");for(var d,e,f=[],h=0;h<b.length;h++)d=
b[h],e=d.getAttribute("name")||d.getAttribute("property"),e==c&&(f=f.concat(p(c,d.getAttribute("content"))));0<f.length?a(f):a(!1)},h=function(a){return{labels:a}},c=function(a){return"array"===n(a)?h(a.join(",")):h(""+a)},f=function(a,b){var c=[],d;if("array"===n(b)){for(d=0;d<b.length;d++)c.push(a+"."+b[d]);return h(c.join(","))}return h(a+"."+b)};__qc.apply(null,["rules",[b,null,[[c,"TV Tropes.Videos"]],[[a,"c","/pmwiki/recent_videos"],[a,"c","tvtropes"]]],[b,null,[[c,"TV Tropes.Forums"]],[[a,
"c","/pmwiki/topics"],[a,"c","tvtropes"]]],[b,null,[[c,"TV Tropes.Browse"]],[[a,"c","/pmwiki/browse"],[a,"c","tvtropes"]]],[b,null,[[c,"TV Tropes.Main.Trivia"]],[[a,"c","/pmwiki/pmwiki.php/Main/Trivia"],[a,"c","tvtropes"]]],[b,null,[[c,"TV Tropes.Main"]],[[a,"c","/pmwiki/pmwiki.php/Main"],[a,"c","tvtropes"]]],[b,null,[[c,"TV Tropes.WMG"]],[[a,"c","/pmwiki/pmwiki.php/WMG"],[a,"c","tvtropes"]]],[b,null,[[c,"TV Tropes.YMMV"]],[[a,"c","/pmwiki/pmwiki.php/YMMV/"],[a,"c","tvtropes"]]],[b,null,[[c,"TV Tropes.DarthWiki"]],
[[a,"c","/pmwiki/pmwiki.php/DarthWiki/"],[a,"c","tvtropes"]]],[b,null,[[c,"TV Tropes.SugarWiki"]],[[a,"c","/pmwiki/pmwiki.php/SugarWiki/"],[a,"c","tvtropes"]]],[b,null,[[c,"Salon.Video.series"]],[[a,"c","/tv/series"],[a,"c","salon"]]],[b,null,[[c,"Salon.Video.videos"]],[[a,"c","/tv/video"],[a,"c","salon"]]],[b,null,[[c,"Salon.Video"]],[[a,"c","/tv"],[a,"c","salon"]]],[b,null,[[c,"Salon.Life Stories"]],[[a,"c","/category/life-stories"],[a,"c","salon"]]],[b,null,[[c,"Salon.Science and Health"]],[[a,
"c","/category/science-and-health"],[a,"c","salon"]]],[b,null,[[c,"Salon.Food"]],[[a,"c","/category/food"],[a,"c","salon"]]],[b,null,[[c,"Salon.Culture"]],[[a,"c","/category/culture"],[a,"c","salon"]]],[b,null,[[c,"Salon.News and Politics"]],[[a,"c","/category/news-and-politics"],[a,"c","salon"]]],[b,null,[[f,"tags"]],[[e,"exactmatch","article:tag"]]],[b,null,[[f,"section"]],[[e,"exactmatch","article:section"]]],[b,null,[[f,"author"]],[[e,"exactmatch","article:author"]]],[b,null,[[f,"type"]],[[e,
"exactmatch","og:type"]]],[b,null,[[f,"title"]],[[e,"exactmatch","twitter:title"]]],[b,null,[[f,"site"]],[[e,"exactmatch","twitter:site"]]]])})("p-mEzuYq24VEJ-3",window,document);