(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4619],
  {
    78124: function (t, e, a) {
      "use strict";
      a.r(e),
        a.d(e, {
          __N_SSG: function () {
            return y;
          },
          default: function () {
            return f;
          },
        });
      var n = a(67294),
        i = a(9008),
        o = a.n(i),
        r = a(11163),
        s = a(75933),
        c = a(80298),
        u = "/_next/static/media/go.2b47294a.svg",
        l = "/_next/static/media/js.edecbe8b.svg",
        g = "/_next/static/media/node.261b896c.svg",
        m = "/_next/static/media/php.86fdfd82.svg",
        h = "/_next/static/media/python.01a77c31.svg",
        p = "/_next/static/media/react.f2853c88.svg",
        d = "/_next/static/media/sql.8e379197.svg",
        _ = "/_next/static/media/ts.661fad81.svg",
        w = a(85893),
        y = !0,
        f = function (t) {
          var e = t.allPaths,
            a = t.popularTopics,
            i = t.popularProjects,
            y = (0, r.useRouter)();
          (0, n.useEffect)(
            function () {
              y.query.whatIs &&
                y.replace("/community/learning-paths/".concat(y.query.whatIs));
            },
            [y, y.query.whatIs]
          );
          var f = [
            {
              image: l,
              language: "JavaScript",
              url: "/community/tutorial_series/how-to-code-in-javascript",
            },
            {
              image: p,
              language: "React",
              url: "/community/tutorial_series/how-to-code-in-react-js",
            },
            {
              image: h,
              language: "Python 3",
              url: "/community/tutorial_series/how-to-code-in-python-3",
            },
            {
              image: u,
              language: "Go",
              url: "/community/tutorial_series/how-to-code-in-go",
            },
            {
              image: g,
              language: "Node.js",
              url: "/community/tutorial_series/how-to-code-in-node-js",
            },
            {
              image: d,
              language: "SQL",
              url: "/community/tutorial_series/how-to-use-sql",
            },
            {
              image: m,
              language: "PHP",
              url: "/community/tutorial_series/how-to-code-in-php",
            },
            {
              image: _,
              language: "TypeScript",
              url: "/community/tutorial_series/how-to-code-in-typescript",
            },
          ];
          return (0, w.jsxs)(s.Z, {
            children: [
              (0, w.jsxs)(o(), {
                children: [
                  (0, w.jsx)("title", {
                    children: "Learning Paths | DigitalOcean",
                  }),
                  (0, w.jsx)(
                    "meta",
                    {
                      name: "description",
                      content:
                        "Learn the way you want to learn with our common learning paths and learning goals. More to come soon!",
                    },
                    "description"
                  ),
                  (0, w.jsx)(
                    "meta",
                    {
                      name: "twitter:title",
                      content: "Learning Paths | DigitalOcean",
                    },
                    "twitterTitle"
                  ),
                  (0, w.jsx)(
                    "meta",
                    {
                      name: "twitter:description",
                      content:
                        "Learn the way you want to learn with our common learning paths and learning goals. More to come soon!",
                    },
                    "twitterDescription"
                  ),
                  (0, w.jsx)(
                    "meta",
                    {
                      name: "og:title",
                      content: "Learning Paths | DigitalOcean",
                    },
                    "ogTitle"
                  ),
                  (0, w.jsx)(
                    "meta",
                    {
                      name: "og:description",
                      content:
                        "Learn the way you want to learn with our common learning paths and learning goals. More to come soon!",
                    },
                    "ogDescription"
                  ),
                ],
              }),
              y.isFallback
                ? (0, w.jsx)("div", { children: "Loading\u2026" })
                : (0, w.jsx)(c.h, {
                    allPaths: e,
                    popularLanguages: f,
                    popularTopics: a,
                    popularProjects: i,
                  }),
            ],
          });
        };
    },
    58510: function (t, e, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/community/learning-paths",
        function () {
          return a(78124);
        },
      ]);
    },
  },
  function (t) {
    t.O(
      0,
      [1092, 5935, 1549, 2678, 8249, 8417, 3984, 2419, 9169, 9774, 2888, 179],
      function () {
        return (e = 58510), t((t.s = e));
        var e;
      }
    );
    var e = t.O();
    _N_E = e;
  },
]);
