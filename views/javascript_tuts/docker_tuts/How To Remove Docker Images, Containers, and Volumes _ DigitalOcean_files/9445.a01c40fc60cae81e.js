"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9445],
  {
    99445: function (e, t, i) {
      i.r(t),
        i.d(t, {
          default: function () {
            return x;
          },
        });
      var n = i(10978),
        p = i(17534),
        l = i(88134),
        r = i(87288),
        a = i(37797),
        o = i(90352),
        s = a.ZP.p.withConfig({
          displayName: "FeaturedLinksStyles__StyledTitle",
          componentId: "sc-1lpsal8-0",
        })(
          [
            "color:",
            ";font-size:14px;font-weight:700;letter-spacing:1px;margin:0 0 16px;text-transform:uppercase;",
            "{margin:0 16px 24px;}",
            "{margin:0 16px 16px;}",
          ],
          l.ZP.gray1,
          (0, p.X)(p.A.tablet, "min"),
          (0, p.X)(p.A.desktop, "min")
        ),
        d = a.ZP.ul.withConfig({
          displayName: "FeaturedLinksStyles__StyledLinkList",
          componentId: "sc-1lpsal8-1",
        })(
          [
            "display:flex;flex-direction:column;gap:12px;",
            "{flex-flow:row wrap;gap:2px;li{flex:1 0 40%;}}",
            "{flex-direction:column;}",
          ],
          (0, p.X)(p.A.tablet, "min"),
          (0, p.X)(p.A.desktop, "min")
        ),
        c = (0, a.ZP)(o.Z).withConfig({
          displayName: "FeaturedLinksStyles__StyledLink",
          componentId: "sc-1lpsal8-2",
        })(
          [
            "border-radius:16px;display:flex;flex-direction:column;span{&:first-of-type{color:",
            ";font-family:",
            ";font-size:18px;font-weight:500;}&:last-of-type{display:none;}}&:hover{span{&:first-of-type{color:",
            ";}}}",
            "{margin-top:2px;padding:16px;span{&:first-of-type{font-size:20px;}&:last-of-type{color:",
            ";display:initial;}}&:hover{background-color:",
            ";}}",
            "{margin-top:2px;padding:16px;span{&:first-of-type{font-size:20px;}&:last-of-type{color:",
            ";display:initial;}}&:hover{background-color:",
            ";}}",
          ],
          l.ZP.gray3,
          (0, r.Z)("primary"),
          l.ZP.blue2,
          (0, p.X)(p.A.tablet, "min"),
          l.ZP.gray4,
          l.ZP.blue5,
          (0, p.X)(p.A.desktop, "min"),
          l.ZP.gray4,
          l.ZP.blue5
        ),
        f = i(85893),
        x = function (e) {
          var t = e.title,
            i = e.items;
          return (0, f.jsxs)(n.B, {
            children: [
              (0, f.jsx)(s, { children: t }),
              (0, f.jsx)(d, {
                children: i.map(function (e) {
                  var t = e.url,
                    i = e.title,
                    n = e.subtitle,
                    p = e.target,
                    l = void 0 === p ? "" : p;
                  return (0,
                  f.jsx)("li", { children: (0, f.jsxs)(c, { url: t, target: l, children: [(0, f.jsx)("span", { children: i }), (0, f.jsx)("span", { children: n })] }) }, t);
                }),
              }),
            ],
          });
        };
    },
    10978: function (e, t, i) {
      i.d(t, {
        B: function () {
          return l;
        },
      });
      var n = i(17534),
        p = i(88134),
        l = i(37797).ZP.div.withConfig({
          displayName: "FeaturedSectionStyles__StyledFeaturedSection",
          componentId: "sc-1c2xqdk-0",
        })(
          [
            "background-color:",
            ";flex-shrink:0;padding:32px 24px;",
            "{padding:48px 24px;}",
            "{padding:48px 48px 48px 0;width:360px;}",
            "{margin-left:-16px;}",
          ],
          p.ZP.gray10,
          (0, n.X)(n.A.tablet, "min"),
          (0, n.X)(n.A.desktop, "min"),
          (0, n.X)(84, "min", "rem")
        );
    },
  },
]);
