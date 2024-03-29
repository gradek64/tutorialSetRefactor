/*
 Quantcast measurement tag
 Copyright (c) 2008-2020, Quantcast Corp.
*/
(function (g, f, e) {
  try {
    __qc("defaults", g, { labels: "_fp.event.Default" });
  } catch (m) {}
  var h = function (a) {
      var b = e.createElement("a");
      b.href = a;
      return b;
    },
    k = function (a, b, c) {
      return a
        ? "nc" === a
          ? !b || !c || 0 > b.indexOf(c)
          : "eq" === a
          ? b === c
          : "sw" === a
          ? 0 === b.indexOf(c)
          : "ew" === a
          ? ((a = b.length - c.length),
            (b = b.lastIndexOf(c, a)),
            -1 !== b && b === a)
          : "c" === a
          ? 0 <= b.indexOf(c)
          : !1
        : !1;
    },
    l = [
      "rules",
      [
        g,
        null,
        [
          [
            function (a) {
              return "array" ===
                {}.toString
                  .call(a)
                  .match(/\s([a-zA-Z]+)/)[1]
                  .toLowerCase()
                ? { labels: a.join(",") }
                : { labels: "" + a };
            },
            "_fp.event.Homepage",
          ],
        ],
        [
          [
            function (a, b, c) {
              var d;
              d =
                f.top === f.self ? e.location.pathname : h(e.referrer).pathname;
              k(b, d, c) ? a(d) : a(!1);
            },
            "eq",
            "/",
          ],
          [
            function (a, b, c) {
              var d;
              d = f.top === f.self ? e.location.href : h(e.referrer).href;
              k(b, d, c) ? a(d) : a(!1);
            },
            "nc",
            "scotch.io",
          ],
        ],
      ],
    ];
  __qc.apply(null, l);
  (function (a) {
    var b = function () {
        return f.top === f.self ? e.location.href : h(e.referrer).href;
      },
      c = b();
    setInterval(function () {
      var d = b();
      d !== c &&
        ((c = d),
        __qc.apply(null, a),
        __qc("push", { qacct: g, event: "load" }, !0));
    }, 2e3);
  })(l);
})("p-ezk6DY8pwNxCt", window, document);
