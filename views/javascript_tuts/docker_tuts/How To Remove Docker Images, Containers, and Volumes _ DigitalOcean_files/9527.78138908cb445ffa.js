"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9527],
  {
    39527: function (e, t, r) {
      r.r(t),
        r.d(t, {
          default: function () {
            return b;
          },
        });
      var n = r(59499),
        i = r(4730),
        l = r(5152),
        o = r.n(l),
        c = r(88134),
        s = r(37797),
        a = r(90352),
        p = s.ZP.p.withConfig({
          displayName: "DefaultItemStyles__StyledTitle",
          componentId: "sc-p6sww0-0",
        })(
          [
            "color:",
            ";font-size:14px;font-weight:700;letter-spacing:1px;line-height:22px;margin:0 0 16px;text-transform:uppercase;",
          ],
          c.ZP.gray1
        ),
        u = s.ZP.ul.withConfig({
          displayName: "DefaultItemStyles__StyledLinkList",
          componentId: "sc-p6sww0-1",
        })(["display:flex;flex-direction:column;gap:8px;"]),
        f = (0, s.ZP)(a.Z).withConfig({
          displayName: "DefaultItemStyles__StyledLink",
          componentId: "sc-p6sww0-2",
        })(
          [
            "align-items:center;color:",
            ";display:inline-flex;font-weight:500;gap:10px;line-height:24px;transition:color 0.2s ease;will-change:color;&:hover{color:",
            ";}",
          ],
          c.ZP.gray4,
          c.ZP.gray2
        ),
        g = r(85893),
        h = ["title", "url", "icon", "target", "as"];
      function d(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? d(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : d(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var w = o()(
          function () {
            return r.e(3269).then(r.bind(r, 63269));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [63269];
              },
            },
          }
        ),
        b = function (e) {
          var t = e.title,
            r = e.items;
          return (0, g.jsxs)("div", {
            children: [
              "" !== t && (0, g.jsx)(p, { children: t }),
              (0, g.jsx)(u, {
                children: r.map(function (e) {
                  var t = e.title,
                    r = e.url,
                    n = e.icon,
                    l = e.target,
                    o = void 0 === l ? "" : l,
                    c = e.as,
                    s = (0, i.Z)(e, h);
                  return (0,
                  g.jsx)("li", { children: "highlightLink" === c ? (0, g.jsx)(w, y({ title: t }, s)) : (0, g.jsxs)(f, { url: r, target: o, children: [t, n] }) }, r || s.link.url);
                }),
              }),
            ],
          });
        };
    },
  },
]);
