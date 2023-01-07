"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2031],
  {
    72080: function (t, e, o) {
      o.d(e, {
        O: function () {
          return g;
        },
        T: function () {
          return b;
        },
      });
      var n = o(59499),
        r = o(37797),
        i = o(67294),
        a = o(45697),
        c = o.n(a),
        l = o(88134),
        s = o(65861),
        p = o(5918),
        d = o(62080),
        u = o(33201),
        f = o(85893);
      function h(t, e) {
        var o = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            o.push.apply(o, n);
        }
        return o;
      }
      function y(t) {
        for (var e = 1; e < arguments.length; e++) {
          var o = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? h(Object(o), !0).forEach(function (e) {
                (0, n.Z)(t, e, o[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o))
            : h(Object(o)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(o, e)
                );
              });
        }
        return t;
      }
      var g = function (t) {
          t.label, t.content;
          return null;
        },
        m = function (t) {
          var e = t.label,
            o = t.label_color,
            n = t.id,
            r = t.text_color,
            i = t.isSelected,
            a = t.onClick,
            c = i && "light" === r ? l.ZP.white : l.ZP.blueDark,
            s =
              i || "light" !== r
                ? (0, l.E9)(l.ZP.blueDark, 0.6)
                : (0, l.E9)(l.ZP.white, 0.6),
            p = i && "light" === r ? l.ZP.white : l.ZP.blue2;
          return (0, f.jsxs)(x, {
            id: n,
            className: "light" === r ? "white" : "darkblue",
            style: { color: o || i ? c : s },
            onClick: a,
            children: [
              e,
              (0, f.jsx)(v, {
                style: {
                  backgroundColor:
                    "light" === r ? "rgba(225, 225, 225, 0.6)" : l.ZP.blue2,
                },
                children: (0, f.jsx)(w, {
                  x1: "1.5",
                  x2: "1.5",
                  y1: "2px",
                  y2: "4000px",
                  className: i ? "selected" : "",
                  style: { stroke: i && p },
                }),
              }),
            ],
          });
        },
        b = function (t) {
          var e = t.children,
            o = t.text_color,
            n = (0, i.useState)(0),
            a = n[0],
            c = n[1],
            s = e[a].props.content;
          return (0, f.jsx)("div", {
            className: "container",
            children: (0, f.jsxs)("div", {
              className: "columns is-multiline",
              children: [
                (0, f.jsx)(k, {
                  className: "column is-3",
                  children: i.Children.map(e || null, function (t, e) {
                    return (0, i.createElement)(
                      m,
                      y(
                        y({}, t.props),
                        {},
                        {
                          id: "testControlledTab-".concat(e),
                          text_color: o,
                          key: "tab-".concat(t.props.label),
                          isSelected: a === e,
                          onClick: function () {
                            return c(e);
                          },
                        }
                      )
                    );
                  }),
                }),
                (0, f.jsx)("div", {
                  className: "column",
                  children: (0, f.jsx)(u._O, {
                    className: "tab-container",
                    children: s.map(function (t) {
                      if (null === t) return null;
                      if (!Array.isArray(t))
                        return "string" === typeof t
                          ? (0, f.jsx)(
                              _,
                              {
                                style: {
                                  color:
                                    "light" === o ? l.ZP.white : l.ZP.grayDark,
                                },
                                content: t,
                              },
                              (0, p.Z)()
                            )
                          : (0, f.jsx)(
                              j,
                              {
                                style: {
                                  color:
                                    "light" === o ? l.ZP.white : l.ZP.grayDark,
                                },
                                children: t && t.value ? t.value : t,
                              },
                              (0, p.Z)()
                            );
                      var n = e[a].props.content_color,
                        i = (0, r.iv)(
                          [
                            "",
                            " &.white{color:#fff;p{color:#fff;}h4{color:#fff;}}&.content-color{color:",
                            ";p{color:",
                            ";}}&.darkgrey{h4{color:#5b6987;}}",
                          ],
                          u.Vy,
                          n,
                          n
                        );
                      return (0,
                      f.jsx)(P, { className: "light" === o ? "white" : "darkgrey", content: t, $_css: i }, (0, p.Z)());
                    }),
                  }),
                }),
              ],
            }),
          });
        };
      (g.propTypes = {
        label: c().string.isRequired,
        content: c().array.isRequired,
      }),
        (m.defaultProps = { label_color: null, text_color: null });
      var x = (0, r.ZP)(d.Z).withConfig({
          displayName: "Tabs___StyledButton",
          componentId: "sc-1q9kqq-0",
        })(["", ""], u.D5),
        v = (0, r.ZP)("svg").withConfig({
          displayName: "Tabs___StyledSvg",
          componentId: "sc-1q9kqq-1",
        })(["", ""], u.Mj),
        w = (0, r.ZP)("line").withConfig({
          displayName: "Tabs___StyledLine",
          componentId: "sc-1q9kqq-2",
        })(["", ""], u.wm),
        k = (0, r.ZP)("div").withConfig({
          displayName: "Tabs___StyledDiv",
          componentId: "sc-1q9kqq-3",
        })(["", ""], u.zp),
        _ = (0, r.ZP)(s.default).withConfig({
          displayName: "Tabs___StyledMarkdown",
          componentId: "sc-1q9kqq-4",
        })(["", ""], u.Vy),
        j = (0, r.ZP)("div").withConfig({
          displayName: "Tabs___StyledDiv2",
          componentId: "sc-1q9kqq-5",
        })(["", ""], u.Vy),
        P = (0, r.ZP)(s.default).withConfig({
          displayName: "Tabs___StyledMarkdown2",
          componentId: "sc-1q9kqq-6",
        })(["", ""], function (t) {
          return t.$_css;
        });
    },
    33201: function (t, e, o) {
      o.d(e, {
        D5: function () {
          return f;
        },
        Dy: function () {
          return g;
        },
        HO: function () {
          return x;
        },
        M: function () {
          return s;
        },
        Mj: function () {
          return y;
        },
        Vy: function () {
          return u;
        },
        XZ: function () {
          return b;
        },
        _O: function () {
          return v;
        },
        jC: function () {
          return p;
        },
        jY: function () {
          return d;
        },
        wm: function () {
          return m;
        },
        yc: function () {
          return h;
        },
        zp: function () {
          return l;
        },
      });
      var n = o(17534),
        r = o(88134),
        i = o(37797),
        a = (0, i.F4)([
          "from{opacity:0;stroke-dashoffset:50;}to{opacity:1;stroke-dashoffset:0;}",
        ]),
        c = (0, i.F4)(["from{opacity:0;}to{opacity:1;}"]),
        l = (0, i.iv)(
          [
            "&.column.is-3{flex:none;width:25%;}",
            "{display:flex;justify-content:center;overflow:hidden;overflow-x:scroll;scrollbar-width:none;white-space:nowrap;&.column.is-3{display:block;flex:none;width:100%;}}",
            "{justify-content:flex-start;}",
          ],
          (0, n.X)(n.A.tablet),
          (0, n.X)(550)
        ),
        s = (0, i.iv)(
          [
            "border-bottom:4px solid ",
            ";flex:none;margin-bottom:15px;text-align:center;width:100%;button{display:inline-block;}",
          ],
          r.ZP.gray7
        ),
        p = (0, i.iv)(
          [
            "display:block;height:100%;position:sticky;top:110px;",
            "{display:none;}",
          ],
          (0, n.X)(n.A.mediumDesktop)
        ),
        d = (0, i.iv)(["margin:0 auto !important;max-width:968px;"]),
        u = (0, i.iv)(
          [
            "animation:",
            " 0.2s ease-in forwards;display:flex;flex-direction:column;position:relative;h3,h5,h6{color:#031b4e;font-weight:600;line-height:120%;margin-bottom:10px;margin-top:25px;}h3{font-size:30px;letter-spacing:-0.5px;}h4{font-size:24px;font-weight:400;letter-spacing:0;line-height:160%;}h5{font-size:18px;letter-spacing:0;}a{color:#0069ff;font-weight:700;text-decoration:underline;&:hover{color:#1633ff !important;}}.block-img{align-items:flex-end;display:flex;justify-content:flex-start;margin:0;min-height:48px;",
            "{justify-content:center;}}p{margin:0 0 10px;}",
          ],
          c,
          (0, n.X)(n.A.tablet)
        ),
        f = (0, i.iv)(
          [
            "background:none;border:none;border-radius:0;color:",
            ";display:block;font-size:20px;font-weight:500;height:auto;padding:15px 20px;position:relative;text-align:left;white-space:inherit;",
            "{display:inline-block;}&:hover{background:none;}&:focus{border:none;box-shadow:none !important;}&.white{color:#fff;}",
          ],
          r.ZP.gray2,
          (0, n.X)(n.A.tablet)
        ),
        h = (0, i.iv)(["margin-top:32px;"]),
        y = (0, i.iv)(
          [
            "background-color:#e5e8ed;border-radius:8px;display:inline-block;height:100%;left:0;position:absolute;top:0;width:2px;",
            "{height:3px;left:0;top:54px;width:100%;}",
          ],
          (0, n.X)(n.A.tablet)
        ),
        g = (0, i.iv)(
          [
            "background-color:",
            ";border-radius:8px;bottom:-4px;display:inline-block;height:4px;left:0;position:absolute;width:100%;",
            "{height:3px;left:0;top:54px;width:100%;}",
          ],
          r.ZP.grayLight,
          (0, n.X)(n.A.tablet)
        ),
        m = (0, i.iv)(
          [
            "stroke-dasharray:150%;stroke-linecap:round;stroke-width:2;&.selected{animation:",
            " 0.6s forwards;}",
            "{stroke-dasharray:100%;transform:rotate(-90deg) translate(-6px,1px) scale(4);}",
          ],
          a,
          (0, n.X)(n.A.tablet)
        ),
        b = (0, i.iv)([
          "display:block;height:30px;position:absolute;top:-135px;width:100%;",
        ]),
        x = (0, i.iv)(
          [
            "margin-left:100px;",
            "{margin-left:0;div:last-child div{margin-bottom:0;}}",
          ],
          (0, n.X)(n.A.mediumDesktop)
        ),
        v = i.ZP.div.withConfig({
          displayName: "TabsStyles__StyledContentContainer",
          componentId: "sc-13nk3os-0",
        })(
          [
            "display:grid;grid-gap:30px;grid-template-columns:1fr 1fr;",
            "{grid-gap:40px;grid-template-columns:1fr;margin-top:40px;text-align:center;}",
          ],
          (0, n.X)(n.A.tablet)
        );
    },
    69631: function (t, e, o) {
      o.d(e, {
        M: function () {
          return O;
        },
      });
      var n = o(59499),
        r = o(37797),
        i = o(67294),
        a = o(45697),
        c = o.n(a),
        l = o(75833),
        s = o(65801),
        p = o(5918),
        d = o(62080),
        u = o(58069),
        f = o(57243),
        h = o(17534),
        y = (0, r.F4)([
          "from{opacity:0.0;stroke-dashoffset:50;}to{opacity:1.0;stroke-dashoffset:0;}",
        ]),
        g = (0, r.F4)(["from{opacity:0.0;}to{opacity:1.0;}"]),
        m = (0, r.iv)(
          [
            "display:flex;flex:1 0 auto;justify-content:center;margin-left:auto;margin-right:auto;margin-top:12px !important;width:80%;",
            "{flex-wrap:nowrap;justify-content:flex-start;max-height:74px;overflow:auto;scrollbar-width:none;width:93%;&.column{flex-basis:auto;}}",
            "{margin-top:100px;}",
          ],
          (0, h.X)(h.A.desktop),
          (0, h.X)(h.A.tablet)
        ),
        b = (0, r.iv)(
          ["animation:", " 0.2s ease-in forwards;margin:auto;width:100%;"],
          g
        ),
        x = (0, r.iv)(
          [
            "background:none;border:none;border-radius:0;color:#031b4e;display:block;font-weight:400;height:50px;margin:0 20px;padding:0;position:relative;",
            "{display:inline-block;padding-left:20px;}&:hover{background-color:transparent;}&:focus{border:none;box-shadow:none !important;}&.white{color:#fff;}",
          ],
          (0, h.X)(h.A.desktop)
        ),
        v = r.ZP.div.withConfig({
          displayName: "TopTabNavStyles__StyledLineBackground",
          componentId: "sc-1y17edn-0",
        })(
          [
            "background-color:",
            ";border-radius:8px;display:inline-block;height:3px;max-width:1168px;position:absolute;top:80px;width:100%;",
            "{width:80%;}",
            "{top:80px;}",
          ],
          function (t) {
            return t.backgroundColor;
          },
          (0, h.X)(h.A.desktop),
          (0, h.X)(h.A.tablet)
        ),
        w = (0, r.iv)([
          "border-radius:8px;display:inline-block;height:3px;left:0;position:absolute;top:56px;width:100%;z-index:4;",
        ]),
        k =
          ((0, r.iv)(
            [
              "stroke:#e5e8ed;stroke-linecap:round;stroke-width:3;transform:rotate(-90deg) translate(-6px,1px) scale(4);z-index:5;&.selected{animation:",
              " 0.6s forwards;stroke:#0069ff;}",
              "{stroke-dasharray:100%;}",
            ],
            y,
            (0, h.X)(h.A.desktop)
          ),
          r.ZP.line.withConfig({
            displayName: "TopTabNavStyles__StyledLine",
            componentId: "sc-1y17edn-1",
          })(
            [
              "stroke:",
              ";stroke-linecap:round;stroke-width:3;transform:rotate(-90deg) translate(-6px,1px) scale(4);z-index:5;&.selected{animation:",
              " 0.6s forwards;stroke:",
              ";}",
              "{stroke-dasharray:100%;}",
            ],
            function (t) {
              return t.strokeColor;
            },
            y,
            function (t) {
              return t.selectedStrokeColor;
            },
            (0, h.X)(h.A.desktop)
          )),
        _ = (0, r.iv)([
          "flex-direction:column;position:relative;.column{max-width:100%;}",
        ]),
        j = (0, r.iv)([
          "align-items:center;display:flex;img{height:24px !important;margin-left:0;margin-right:5px;width:24px !important;}",
        ]),
        P = o(85893);
      function N(t, e) {
        var o = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            o.push.apply(o, n);
        }
        return o;
      }
      function Z(t) {
        for (var e = 1; e < arguments.length; e++) {
          var o = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? N(Object(o), !0).forEach(function (e) {
                (0, n.Z)(t, e, o[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o))
            : N(Object(o)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(o, e)
                );
              });
        }
        return t;
      }
      var C = function (t) {
          var e,
            o,
            n = t.label,
            r = t.label_color,
            i = t.icon,
            a = t.id,
            c = t.text_color,
            l = t.isSelected,
            s = t.onClick,
            p = l && "light" === c ? "#fff" : "#031b4e";
          return (0, P.jsxs)(S, {
            id: a,
            className: "light" === c ? "white" : "darkblue",
            style: {
              color:
                r ||
                ((e = l),
                (o = c),
                e || "light" !== o
                  ? e && "light" === o
                    ? "rgba(255,255,255,.1)"
                    : e && "dark" === o
                    ? ""
                    : "rgba(3, 27, 78, 0.6)"
                  : "rgba(255,255,255,.5)"),
            },
            onClick: s,
            children: [
              (0, P.jsxs)(T, {
                style: { color: l ? p : "" },
                children: [
                  i &&
                    i.url &&
                    (0, P.jsx)(f.Z, { id: "testQuoteLogo", src: i.url }),
                  n,
                ],
              }),
              (0, P.jsx)(q, {
                children: (0, P.jsx)(k, {
                  x1: "1.5",
                  x2: "1.5",
                  y1: "2px",
                  y2: "48px",
                  selectedStrokeColor:
                    "light" === c ? "rgba(255,255,255,1)" : "#0069ff",
                  strokeColor: "light" === c ? "" : "#e5e8ed",
                  className: l ? "selected" : "",
                }),
              }),
            ],
          });
        },
        O = function (t) {
          var e = t.children,
            o = t.text_color,
            n = (0, i.useState)(0),
            a = n[0],
            c = n[1],
            d = e[a].props.content;
          return (0, P.jsx)(u.Z, {
            "data-testid": "top_tab_container",
            children: (0, P.jsxs)(D, {
              className: "columns is-multiline",
              children: [
                (0, P.jsxs)(A, {
                  className: "column",
                  children: [
                    (0, P.jsx)(v, {
                      backgroundColor:
                        "light" === o ? "rgba(255,255,255,.5)" : "#e5e8ed",
                      className: "styledLineBackground",
                    }),
                    i.Children.map(e || null, function (t, e) {
                      return (0, i.createElement)(
                        C,
                        Z(
                          Z({}, t.props),
                          {},
                          {
                            id: "testControlledTab-".concat(e),
                            text_color: o,
                            key: "tab-".concat(t.props.label),
                            isSelected: a === e,
                            onClick: function () {
                              return c(e);
                            },
                          }
                        )
                      );
                    }),
                  ],
                }),
                (0, P.jsx)("div", {
                  className: "column is-multiline",
                  children: (0, P.jsx)("div", {
                    className: "columns",
                    gapless: "true",
                    id: "testTabContent",
                    children: d.map(function (t) {
                      if (null === t) return null;
                      if (!Array.isArray(t))
                        return (0, P.jsx)(
                          "div",
                          {
                            className: "column",
                            children: (0, P.jsx)(X, { children: t }),
                          },
                          (0, p.Z)()
                        );
                      var o = e[a].props.content_color,
                        n = (0, r.iv)(
                          [
                            "",
                            " &.white{color:#fff;p{color:#fff;}}&.content-color{color:",
                            ";p{color:",
                            ";}}",
                          ],
                          b,
                          o,
                          o
                        );
                      return (0,
                      P.jsx)("div", { className: "column is-".concat(d.length > 1 ? "half" : null), children: (0, P.jsx)(I, { $_css: n, children: (0, P.jsx)(l.RichText, { render: t, linkResolver: s.Z }) }) }, (0, p.Z)());
                    }),
                  }),
                }),
              ],
            }),
          });
        };
      (O.defaultProps = { text_color: null, codeBlock: null }),
        c().string.isRequired,
        c().array.isRequired,
        (C.defaultProps = { label_color: null, icon: {}, text_color: null });
      var S = (0, r.ZP)(d.Z).withConfig({
          displayName: "TopTabNav___StyledButton",
          componentId: "sc-1uk46p7-0",
        })(["", ""], x),
        T = (0, r.ZP)("div").withConfig({
          displayName: "TopTabNav___StyledDiv",
          componentId: "sc-1uk46p7-1",
        })(["", ""], j),
        q = (0, r.ZP)("svg").withConfig({
          displayName: "TopTabNav___StyledSvg",
          componentId: "sc-1uk46p7-2",
        })(["", ""], w),
        D = (0, r.ZP)("div").withConfig({
          displayName: "TopTabNav___StyledDiv2",
          componentId: "sc-1uk46p7-3",
        })(["", ""], _),
        A = (0, r.ZP)("div").withConfig({
          displayName: "TopTabNav___StyledDiv3",
          componentId: "sc-1uk46p7-4",
        })(["", ""], m),
        X = (0, r.ZP)("div").withConfig({
          displayName: "TopTabNav___StyledDiv4",
          componentId: "sc-1uk46p7-5",
        })(["", ""], b),
        I = (0, r.ZP)("div").withConfig({
          displayName: "TopTabNav___StyledDiv5",
          componentId: "sc-1uk46p7-6",
        })(["", ""], function (t) {
          return t.$_css;
        });
    },
    65801: function (t, e) {
      e.Z = function (t) {
        return "page" === t.type || "page2" === t.type || "page3" === t.type
          ? "/".concat(t.uid)
          : "home" === t.type
          ? "/"
          : "landing" === t.type || "productsoverview" === t.type
          ? "/".concat(t.uid, "/")
          : "products" === t.type
          ? "/products/".concat(t.uid, "/")
          : "productslinux" === t.type
          ? "/products/linux-distribution/".concat(t.uid, "/")
          : "customersoverview" === t.type
          ? "/".concat(t.uid, "/")
          : "customers" === t.type
          ? "/customers/".concat(t.uid, "/")
          : "partnersoverview" === t.type
          ? "/".concat(t.uid, "/")
          : "partners" === t.type
          ? "/partners/".concat(t.uid, "/")
          : "opensource" === t.type ||
            "currentsoverview" === t.type ||
            "currentsoverview" === t.type ||
            "researchoverview" === t.type ||
            "support" === t.type
          ? "/".concat(t.uid, "/")
          : "contactoverview" === t.type
          ? "/company/".concat(t.uid, "/")
          : "contact" === t.type
          ? "/company/contact/".concat(t.uid, "/")
          : "aboutoverview" === t.type
          ? "/".concat(t.uid, "/")
          : "about" === t.type
          ? "/about/".concat(t.uid, "/")
          : "careersoverview" === t.type
          ? "/".concat(t.uid, "/")
          : "careers" === t.type
          ? "/careers/".concat(t.uid, "/")
          : "referralprogram" === t.type || "pressoverview" === t.type
          ? "/".concat(t.uid, "/")
          : "press" === t.type
          ? "/press/".concat(t.uid, "/")
          : "pressreleases" === t.type
          ? "/press/releases/".concat(t.uid, "/")
          : "legaloverview" === t.type
          ? "/".concat(t.uid, "/")
          : "legal" === t.type
          ? "/legal/".concat(t.uid, "/")
          : "solutions" === t.type
          ? "/solutions/".concat(t.uid, "/")
          : "pricingoverview" === t.type || "hatchoverview" === t.type
          ? "/".concat(t.uid, "/")
          : "hatch" === t.type
          ? "/hatch/".concat(t.uid, "/")
          : "trustcenter" === t.type
          ? "/trust/".concat(t.uid, "/")
          : "trustcenteroverview" === t.type
          ? "/".concat(t.uid, "/")
          : "pricingtools" === t.type
          ? "/pricing/".concat(t.uid, "/")
          : "resources" === t.type
          ? "/resources/".concat(t.uid, "/")
          : "dropletsdemos" === t.type
          ? "/".concat(t.uid, "/")
          : "blog" === t.type
          ? "/blog/".concat(t.uid, "/")
          : "/";
      };
    },
  },
]);
