(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5405],
  {
    19684: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return y;
        },
      });
      var i = n(59499),
        o = n(27812),
        a = n(4730),
        r = n(67294),
        l = n(5918),
        d = n(17534),
        s = n(37797),
        c = s.ZP.div.withConfig({
          displayName: "MasonryStyles__MasonryDiv",
          componentId: "sc-n3swdp-0",
        })(
          [
            "column-gap:30px;display:grid;grid-auto-flow:column;grid-gap:",
            ";margin-top:64px;width:100%;.contentStatic{margin-top:58px;}.box{margin-bottom:30px !important;max-width:265px;p{margin-bottom:0 !important;}}",
            "{.contentStatic{display:flex;flex-wrap:wrap;width:100%;}}",
            "{display:flex;flex-direction:column;margin-top:0;width:100%;}",
          ],
          function (t) {
            return t.gap || "30px";
          },
          (0, d.X)(d.A.desktop),
          (0, d.X)(d.A.tablet)
        ),
        u = s.ZP.div.withConfig({
          displayName: "MasonryStyles__Col",
          componentId: "sc-n3swdp-1",
        })(
          [
            "grid-gap:",
            ";",
            "{&.contentStatic{align-items:start;display:flex;justify-content:space-between;> a{width:100%;}}}",
            "{&.contentStatic{flex-wrap:wrap;margin:0;}}",
          ],
          function (t) {
            return t.gap || "30px";
          },
          (0, d.X)(d.A.desktop),
          (0, d.X)(d.A.largePhone)
        ),
        p = function (t, e, n) {
          var i = n;
          i = window;
          var o = (0, r.useRef)();
          (0, r.useEffect)(
            function () {
              o.current = e;
            },
            [e]
          ),
            (0, r.useEffect)(
              function () {
                if (i && i.addEventListener) {
                  var e = function (t) {
                    return o.current(t);
                  };
                  return (
                    i.addEventListener(t, e),
                    function () {
                      i.removeEventListener(t, e);
                    }
                  );
                }
              },
              [t, i]
            );
        },
        g = n(85893),
        m = ["children", "gap", "minWidth", "colsNum"];
      function h(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e &&
            (i = i.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function x(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? h(Object(n), !0).forEach(function (e) {
                (0, i.Z)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : h(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var f = function (t) {
          var e = t.children,
            n = t.gap,
            i = t.minWidth,
            d = void 0 === i ? 500 : i,
            s = t.colsNum,
            h = (0, a.Z)(t, m),
            f = (0, r.useRef)(),
            y = (0, r.useState)(s || 4),
            b = y[0],
            w = y[1],
            v = (0, o.Z)(Array(b)).map(function () {
              return [];
            });
          !(function (t, e) {
            t.forEach(function (t, n) {
              e[n % e.length].push(t);
            });
          })(e, v);
          var _ = function () {
            return w(
              s ? parseInt(s, 10) : Math.ceil(f.current.offsetWidth / d)
            );
          };
          return (
            (0, r.useEffect)(_, [d, s]),
            p("resize", _),
            (0, g.jsx)(
              c,
              x(
                x({ ref: f, gap: n }, h),
                {},
                {
                  children: (0, o.Z)(Array(b)).map(function (t, e) {
                    return (0,
                    g.jsx)(u, { gap: n, className: "contentStatic", children: v[e] }, (0, l.Z)());
                  }),
                }
              )
            )
          );
        },
        y = f;
      f.defaultProps = { colsNum: null };
    },
    5254: function (t, e, n) {
      "use strict";
      n.d(e, {
        Cl: function () {
          return p;
        },
        DT: function () {
          return l;
        },
        FS: function () {
          return g;
        },
        JZ: function () {
          return h;
        },
        OP: function () {
          return s;
        },
        P8: function () {
          return r;
        },
        UU: function () {
          return c;
        },
        dk: function () {
          return d;
        },
        kZ: function () {
          return m;
        },
        nT: function () {
          return u;
        },
        xn: function () {
          return x;
        },
      });
      var i = n(17534),
        o = n(88134),
        a = n(37797),
        r = (0, a.iv)(
          ["background-color:", ";padding-bottom:64px;"],
          o.ZP.grayLightest
        ),
        l = a.ZP.div.withConfig({
          displayName: "CommunityGridStyles__StyledColumns",
          componentId: "sc-1sl0n0k-0",
        })(
          [
            "",
            "{.column{width:50% !important;}}",
            "{.column{width:100% !important;}}",
          ],
          (0, i.X)(i.A.tablet),
          (0, i.X)(i.A.largePhone)
        ),
        d = a.ZP.p.withConfig({
          displayName: "CommunityGridStyles__StyledNewCardEyebrow",
          componentId: "sc-1sl0n0k-1",
        })(
          [
            "color:",
            ";font-size:14px;font-weight:600;letter-spacing:2px;line-height:24px;margin:0 0 8px;text-transform:lowercase;",
          ],
          o.ZP.gray5
        ),
        s = (0, a.iv)(
          [
            "align-items:center;display:flex;flex-direction:column;justify-content:center;text-align:center;h3{color:",
            ";font-size:14px;font-weight:600;}",
          ],
          o.ZP.gray5
        ),
        c = (0, a.iv)([
          "font-weight:700;line-height:48px;margin:0 0 32px;text-align:center;",
        ]),
        u = (0, a.iv)(
          [
            "font-size:16px;font-weight:400;line-height:24px;margin:0 auto;max-width:640px;text-align:center;",
            "{text-align:left;}",
          ],
          (0, i.X)(i.A.desktop)
        ),
        p = (0, a.iv)(["display:block;font-size:16px;margin:32px 0 0;"]),
        g = a.ZP.div.withConfig({
          displayName: "CommunityGridStyles__StyledDateViewContainer",
          componentId: "sc-1sl0n0k-2",
        })(
          [
            "display:flex;p{color:",
            ";font-size:14px;font-weight:normal;line-height:24px;margin:0;&:first-of-type{margin-right:16px;}}",
          ],
          o.ZP.grayDarker
        ),
        m = a.ZP.div.withConfig({
          displayName: "CommunityGridStyles__StyledNewCard",
          componentId: "sc-1sl0n0k-3",
        })(
          [
            "background-color:",
            ";border-radius:8px;box-shadow:0 4px 20px -5px ",
            ";display:flex;flex-direction:column;transition:all 0.2s ease;> a{box-shadow:0 4px 20px -5px ",
            ";text-decoration:none;transition:all 0.2s ease;&:hover{box-shadow:0 8px 20px -2px ",
            ";transition:all 0.2s ease;}}img{border-top-left-radius:5px;border-top-right-radius:5px;max-width:100%;width:100%;}",
          ],
          o.ZP.white,
          (0, o.E9)(o.ZP.blueDarkest, 0.05),
          (0, o.E9)(o.ZP.blueDarkest, 0.05),
          (0, o.E9)(o.ZP.blueDarkest, 0.1)
        ),
        h = a.ZP.div.withConfig({
          displayName: "CommunityGridStyles__StyledNewCardContentContainer",
          componentId: "sc-1sl0n0k-4",
        })(
          [
            "padding:24px;h5{color:",
            ";font-size:18px !important;letter-spacing:-0.2px;line-height:24px !important;margin-bottom:16px !important;}.text-only{color:#759cff;font-size:36px;font-weight:700;line-height:44px;margin:0;span{color:#356eff;font-size:72px;}}",
          ],
          o.ZP.blueDarkest
        ),
        x = a.ZP.div.withConfig({
          displayName: "CommunityGridStyles__StyledViews",
          componentId: "sc-1sl0n0k-5",
        })(["display:flex;img{height:24px;margin-right:4px;}"]);
    },
    55581: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return w;
        },
      });
      var i = n(37797),
        o = n(58069),
        a = n(57243),
        r = n(74034),
        l = n(4486),
        d = n(17534),
        s = n(88134),
        c = (0, i.iv)(["color:inherit;font-size:16px;"]),
        u = (0, i.iv)(
          ["background-color:", ";padding-bottom:", ";padding-top:", ";"],
          s.ZP.grayLightest,
          function (t) {
            return t.bottomPadding || "64px";
          },
          function (t) {
            return t.topPadding || "64px";
          }
        ),
        p = i.ZP.div.withConfig({
          displayName: "ResourceBannerStyles__ResourceBannerWrapper",
          componentId: "sc-r79y2g-0",
        })(
          [
            "align-items:flex-start;background:",
            ";background-color:",
            ";border-radius:24px;box-shadow:0 6px 20px -6px ",
            ";display:flex;flex-direction:column;margin:0 auto;max-width:1088px;overflow:hidden;padding:",
            ";position:relative;width:100%;img{bottom:0;",
            " ",
            " position:absolute;right:0;z-index:1;",
            "{display:none;}}",
          ],
          function (t) {
            return t.background || "none";
          },
          function (t) {
            return t.backgroundColor || "blue1";
          },
          (0, s.E9)(s.ZP.blueCPUInfo, 0.15),
          function (t) {
            return t.padding || "32px 40px 32px 64px";
          },
          function (t) {
            return t.backgroundImgHeight
              ? "height: ".concat(t.backgroundImgHeight, ";")
              : "";
          },
          function (t) {
            return t.bannerPositionTop
              ? "top: ".concat(t.bannerPositionTop, ";")
              : "";
          },
          (0, d.X)(d.A.tablet)
        ),
        g = i.ZP.div.withConfig({
          displayName: "ResourceBannerStyles__ResourceBannerCopy",
          componentId: "sc-r79y2g-1",
        })(
          [
            "max-width:550px;z-index:2;h3{color:",
            ";font-size:32px;font-weight:700;letter-spacing:0.05px;line-height:1.25;margin:0 0 32px;}div{p{margin-bottom:24px;}&:last-of-type{p{margin-bottom:0;}}}p{color:",
            ";font-size:16px;font-weight:400;line-height:1.5;margin:0;}",
          ],
          s.ZP.white,
          s.ZP.gray7
        ),
        m = i.ZP.div.withConfig({
          displayName: "ResourceBannerStyles__ResourceBannerTitle",
          componentId: "sc-r79y2g-2",
        })(
          [
            "display:flex;h3{color:",
            ";font-size:",
            ";margin-bottom:",
            ";margin-top:",
            ";}",
          ],
          function (t) {
            return t.color || s.ZP.white;
          },
          function (t) {
            return t.fontSize || "32px";
          },
          function (t) {
            return t.marginBottom || "32px";
          },
          function (t) {
            return t.marginTop || "0";
          }
        ),
        h = i.ZP.div.withConfig({
          displayName: "ResourceBannerStyles__ResourceBannerText",
          componentId: "sc-r79y2g-3",
        })(["p{color:", ";}"], function (t) {
          return t.color || s.ZP.white;
        }),
        x = i.ZP.ul.withConfig({
          displayName: "ResourceBannerStyles__ResourceBannerList",
          componentId: "sc-r79y2g-4",
        })(
          [
            "margin-bottom:32px;li{color:",
            ";line-height:1.5;padding-left:24px;position:relative;&::before{content:'\u2022';left:0;position:absolute;top:0;}strong{font-weight:600;}}",
          ],
          function (t) {
            return t.color || s.ZP.white;
          }
        ),
        f = i.ZP.div.withConfig({
          displayName: "ResourceBannerStyles__ResourceBannerLink",
          componentId: "sc-r79y2g-5",
        })(
          ["display:flex;p{a{color:", ";&::after{font-size:1em;}}}"],
          function (t) {
            return t.color || s.ZP.white;
          }
        ),
        y = n(85893),
        b = function (t) {
          var e = t.className,
            n = t.content;
          return (0, y.jsx)(v, {
            className: e,
            topPadding: null === n || void 0 === n ? void 0 : n.paddingTop,
            bottomPadding:
              null === n || void 0 === n ? void 0 : n.paddingBottom,
            children: (0, y.jsx)(o.Z, {
              children: (0, y.jsxs)(p, {
                padding: null === n || void 0 === n ? void 0 : n.contentPadding,
                backgroundImgHeight:
                  null === n || void 0 === n ? void 0 : n.backgroundImgHeight,
                bannerPositionTop:
                  null === n || void 0 === n ? void 0 : n.bannerPositionTop,
                backgroundColor:
                  null === n || void 0 === n ? void 0 : n.backgroundColor,
                background: null === n || void 0 === n ? void 0 : n.background,
                children: [
                  (null === n || void 0 === n ? void 0 : n.bannerImage) &&
                    (0, y.jsx)(a.Z, {
                      className: "logo",
                      src: null === n || void 0 === n ? void 0 : n.bannerImage,
                      alt: "cloud journey",
                    }),
                  (0, y.jsxs)(g, {
                    children: [
                      (0, y.jsx)(m, {
                        color:
                          null === n || void 0 === n ? void 0 : n.titleColor,
                        fontSize:
                          null === n || void 0 === n ? void 0 : n.titleFontSize,
                        marginTop:
                          null === n || void 0 === n
                            ? void 0
                            : n.titleMarginTop,
                        marginBottom:
                          null === n || void 0 === n
                            ? void 0
                            : n.titleMarginBottom,
                        children: (0, y.jsx)("h3", {
                          children:
                            null === n || void 0 === n ? void 0 : n.title,
                        }),
                      }),
                      (null === n || void 0 === n ? void 0 : n.text) &&
                        (0, y.jsx)(h, {
                          color:
                            null === n || void 0 === n ? void 0 : n.textColor,
                          children: (0, y.jsx)("p", {
                            children:
                              null === n || void 0 === n ? void 0 : n.text,
                          }),
                        }),
                      (null === n || void 0 === n ? void 0 : n.list) &&
                        (0, y.jsx)(x, {
                          color:
                            null === n || void 0 === n ? void 0 : n.textColor,
                          children:
                            null === n || void 0 === n
                              ? void 0
                              : n.list.map(function (t) {
                                  return (0, y.jsx)("li", { children: t }, t);
                                }),
                        }),
                      (null === n || void 0 === n ? void 0 : n.linkText) &&
                        (null === n || void 0 === n ? void 0 : n.linkUrl) &&
                        (0, y.jsx)(f, {
                          color:
                            null === n || void 0 === n ? void 0 : n.linkColor,
                          children: (0, y.jsx)("p", {
                            children: (0, y.jsx)(_, {
                              dashArrow: !0,
                              url:
                                null === n || void 0 === n ? void 0 : n.linkUrl,
                              children:
                                null === n || void 0 === n
                                  ? void 0
                                  : n.linkText,
                            }),
                          }),
                        }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        w = b;
      b.defaultProps = { className: "" };
      var v = (0, i.ZP)(r.Z).withConfig({
          displayName: "ResourceBanner___StyledSection",
          componentId: "sc-l8pdjo-0",
        })(["", ""], u),
        _ = (0, i.ZP)(l.Z).withConfig({
          displayName: "ResourceBanner___StyledTextLink",
          componentId: "sc-l8pdjo-1",
        })(["", ""], c);
    },
    50309: function (t, e, n) {
      "use strict";
      n.d(e, {
        $7: function () {
          return u;
        },
        $w: function () {
          return s;
        },
        BG: function () {
          return k;
        },
        Ek: function () {
          return l;
        },
        Gl: function () {
          return y;
        },
        K3: function () {
          return v;
        },
        LX: function () {
          return h;
        },
        OY: function () {
          return m;
        },
        St: function () {
          return c;
        },
        UL: function () {
          return x;
        },
        _s: function () {
          return r;
        },
        dL: function () {
          return d;
        },
        e2: function () {
          return g;
        },
        ke: function () {
          return f;
        },
        lV: function () {
          return b;
        },
        mp: function () {
          return C;
        },
        o3: function () {
          return Z;
        },
        oZ: function () {
          return w;
        },
        ok: function () {
          return _;
        },
        v0: function () {
          return p;
        },
        yc: function () {
          return P;
        },
      });
      var i = n(17534),
        o = n(88134),
        a = n(37797),
        r = (0, a.iv)(
          ["background-color:", ";padding:", ";", "{padding-top:32px;}"],
          o.ZP.grayLightest,
          function (t) {
            return t.sectionPadding || "64px 0";
          },
          (0, i.X)(i.A.tablet)
        ),
        l = a.ZP.p.withConfig({
          displayName: "StaticCardsStyles__StyledDisclaimer",
          componentId: "sc-16322s4-0",
        })(
          [
            "color:",
            ";display:flex;font-size:14px;margin:64px auto 0;max-width:670px;text-align:center;width:100%;",
          ],
          o.ZP.gray4
        ),
        d = a.ZP.div.withConfig({
          displayName: "StaticCardsStyles__StaticCardsTitle",
          componentId: "sc-16322s4-1",
        })(
          [
            "text-align:center;width:100%;h2{margin-bottom:",
            ";margin-top:",
            ";max-width:",
            ";",
            "}",
          ],
          function (t) {
            return t.marginBottom || "32px";
          },
          function (t) {
            return t.marginTop || "0";
          },
          function (t) {
            return t.titleWidth || "600px";
          },
          function (t) {
            return t.fontSize && (0, a.iv)(["font-size:", ""], t.fontSize);
          }
        ),
        s = a.ZP.div.withConfig({
          displayName: "StaticCardsStyles__StyledHeadingsContainer",
          componentId: "sc-16322s4-2",
        })([
          "display:flex;flex-direction:column;.headline{margin-bottom:16px;}",
        ]),
        c = a.ZP.div.withConfig({
          displayName: "StaticCardsStyles__StaticCardsWrapper",
          componentId: "sc-16322s4-3",
        })(
          [
            "display:flex;flex-direction:row;&",
            "{border:none;flex-basis:auto;flex-wrap:nowrap;justify-content:center;",
            "{flex-wrap:wrap;}}",
            "{flex-wrap:wrap;justify-content:center;}",
            "{justify-content:center;margin-bottom:",
            ";margin-top:",
            ";}",
          ],
          function (t) {
            return ".".concat(t.columnBreak) || 0;
          },
          (0, i.X)(i.A.tablet),
          (0, i.X)(i.A.desktop),
          (0, i.X)(i.A.desktop, "min"),
          function (t) {
            return t.marginBottom || "0";
          },
          function (t) {
            return t.marginTop || "32px";
          }
        ),
        u = (0, a.iv)(
          [
            "background-color:",
            ";border-radius:24px;box-shadow:",
            ";display:flex;flex-basis:",
            ";flex-direction:column;margin-right:32px;max-width:",
            ";overflow:hidden;text-decoration:none;width:100%;",
            "{flex-basis:auto;margin:16px 8px;max-width:none;}",
            "{",
            ";}",
          ],
          function (t) {
            return t.cardBackground || o.ZP.white;
          },
          function (t) {
            return (
              t.cardShadow ||
              "0 6px 20px -6px ".concat((0, o.E9)(o.ZP.blueCPUInfo, 0.15))
            );
          },
          function (t) {
            switch (t.columns) {
              case 2:
                return "50%";
              case 3:
                return "calc((100% - 64px) / 3)";
              case 4:
                return "25%";
              default:
                return "33%";
            }
          },
          function (t) {
            return t.maxWidth || "none";
          },
          (0, i.X)(i.A.desktop),
          (0, i.X)(i.A.desktop, "min"),
          function (t) {
            switch (t.columns) {
              case 2:
                return ":nth-child(2n){margin-right:0;}";
              case 3:
              default:
                return ":nth-child(3n){margin-right:0;}";
              case 4:
                return ":nth-child(4n){margin-right:0;}";
            }
          }
        ),
        p = a.ZP.div.withConfig({
          displayName: "StaticCardsStyles__StyledCardImage",
          componentId: "sc-16322s4-4",
        })(
          [
            "align-items:",
            ";background-color:",
            ";display:flex;justify-content:center;justify-self:center;",
            ";width:100%;img{max-width:100%;padding-top:",
            ";width:",
            ";}",
          ],
          function (t) {
            return t.cardContentImageOnly ? "center" : "baseline";
          },
          function (t) {
            return t.color || "none";
          },
          function (t) {
            return t.cardContentImageOnly && "padding: 32px 0";
          },
          function (t) {
            return t.constrainImageWidth && "32px";
          },
          function (t) {
            var e = t.cardContentImageOnly,
              n = t.constrainImageWidth;
            return e ? "" : n ? "80px" : "100%";
          }
        ),
        g = a.ZP.div.withConfig({
          displayName: "StaticCardsStyles__StyledCardContent",
          componentId: "sc-16322s4-5",
        })(
          [
            "display:flex;flex-direction:column;flex-grow:1;",
            " padding:",
            ";width:100%;p{line-height:1.5;}",
            "{min-height:",
            ";}",
          ],
          function (t) {
            return (
              "top" !== t.contentAlign &&
              (0, a.iv)(["display:flex;flex-wrap:wrap;"])
            );
          },
          function (t) {
            return t.contentMargin || "32px 40px";
          },
          (0, i.X)(i.A.desktop, "min"),
          function (t) {
            return t.cardMinHeight || "auto";
          }
        ),
        m = a.ZP.div.withConfig({
          displayName: "StaticCardsStyles__StyledCardTitle",
          componentId: "sc-16322s4-6",
        })(
          [
            "display:flex;width:100%;h3{font-size:24px;font-weight:600;line-height:32px;margin:0 0 ",
            ";text-align:left;}",
          ],
          function (t) {
            return t.marginBottom || "16px";
          }
        ),
        h = a.ZP.div.withConfig({
          displayName: "StaticCardsStyles__StaticCardsSubText",
          componentId: "sc-16322s4-7",
        })(
          [
            "color:",
            ";display:flex;justify-content:center;text-align:center;a{color:",
            ";text-decoration:none;}p{font-size:16px;font-weight:400;line-height:24px;margin-bottom:",
            ";margin-top:",
            ";max-width:",
            ";width:100%;}",
          ],
          o.ZP.gray4,
          o.ZP.blueLight,
          function (t) {
            return t.marginBottom || "64px";
          },
          function (t) {
            return t.marginTop || "20px";
          },
          function (t) {
            return t.subtitleWidth || "640px";
          }
        ),
        x = a.ZP.div.withConfig({
          displayName: "StaticCardsStyles__StyledCardLink",
          componentId: "sc-16322s4-8",
        })(["margin-top:auto;width:100%;"]),
        f = a.ZP.div.withConfig({
          displayName: "StaticCardsStyles__StyledCardBody",
          componentId: "sc-16322s4-9",
        })(
          ["margin-bottom:16px;a{color:", ";text-decoration:none;}"],
          o.ZP.blue2
        ),
        y = a.ZP.div.withConfig({
          displayName: "StaticCardsStyles__StyledCardIcon",
          componentId: "sc-16322s4-10",
        })([
          "margin-right:16px;img{border-radius:4px;height:32px;max-width:100%;min-width:32px;}",
        ]),
        b = a.ZP.ul.withConfig({
          displayName: "StaticCardsStyles__StyledCardList",
          componentId: "sc-16322s4-11",
        })(
          [
            "border-top:1px dashed ",
            ";color:",
            ";display:flex;flex-flow:row wrap;margin-top:24px;padding:24px 0 0;li{display:flex;margin:4px;img{align-self:start;}p{margin:0 8px;}}",
          ],
          o.ZP.gray6,
          o.ZP.gray4
        ),
        w = a.ZP.div.withConfig({
          displayName: "StaticCardsStyles__StyledTopWaveBackground",
          componentId: "sc-16322s4-12",
        })(
          [
            "background-color:",
            ";background-image:url(",
            ");display:flex;height:",
            ";overflow:hidden;width:100%;",
          ],
          function (t) {
            return t.backgroundColor || o.ZP.grayLightest;
          },
          function (t) {
            return t.backgroundImage;
          },
          function (t) {
            return t.waveHeight || "64px";
          }
        ),
        v = a.ZP.div.withConfig({
          displayName: "StaticCardsStyles__StyledBottomWaveBackground",
          componentId: "sc-16322s4-13",
        })(
          [
            "background-color:",
            ";background-image:url(",
            ");display:flex;height:",
            ";overflow:hidden;width:100%;",
          ],
          function (t) {
            return t.backgroundColor || o.ZP.grayLightest;
          },
          function (t) {
            return t.backgroundImage;
          },
          function (t) {
            return t.waveHeight || "64px";
          }
        ),
        _ = a.ZP.div.withConfig({
          displayName: "StaticCardsStyles__StyledCardsSection",
          componentId: "sc-16322s4-14",
        })(["background-color:", ";"], function (t) {
          var e;
          return (0,
          o.E9)(o.ZP[t.backgroundColor] || t.backgroundColor || o.ZP.grayLightest, null !== (e = t.backgroundOpacity) && void 0 !== e ? e : 1);
        }),
        k = a.ZP.div.withConfig({
          displayName: "StaticCardsStyles__SubHeadingLink",
          componentId: "sc-16322s4-15",
        })(["display:flex;justify-content:center;margin-bottom:32px;"]),
        Z =
          ((0, a.iv)(["padding-bottom:64px;padding-top:64px;"]),
          a.ZP.div.withConfig({
            displayName: "StaticCardsStyles__StyledStaticCardsContainer",
            componentId: "sc-16322s4-16",
          })(
            ["padding-bottom:", ";padding-top:", ";"],
            function (t) {
              return t.paddingBottom || "0";
            },
            function (t) {
              return t.paddingTop || "0";
            }
          )),
        C = a.ZP.p.withConfig({
          displayName: "StaticCardsStyles__StyledCtaLink",
          componentId: "sc-16322s4-17",
        })(["margin:64px 0 0;text-align:center;"]),
        P = (0, a.iv)(
          [
            "background-color:",
            ";border-radius:10px;box-shadow:0 6px 20px -6px ",
            ";color:",
            ";display:inline-block;font-size:16px;font-weight:600;line-height:1.5;padding:12px 24px;transition:all 0.2s ease;&:hover{background-color:",
            ";}",
          ],
          o.ZP.blue2,
          (0, o.E9)(o.ZP.blueCPUInfo, 0.15),
          o.ZP.white,
          o.ZP.blue
        );
    },
    18323: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return P;
        },
      });
      var i = n(37797),
        o = n(4298),
        a = n.n(o),
        r = n(58069),
        l = n(71778),
        d = n(57243),
        s = n(74034),
        c = n(4486),
        u = n(48523),
        p = n(17534),
        g = n(88134),
        m = (0, i.iv)(
          [
            "background-color:",
            ";padding:",
            ";h2{margin-top:0;}",
            "{padding-top:32px;}",
          ],
          g.ZP.grayLightest,
          function (t) {
            return t.sectionPadding || "64px 0";
          },
          (0, p.X)(p.A.tablet)
        ),
        h = i.ZP.div.withConfig({
          displayName: "VideoBrandburstStyles__StyledBrowserHeader",
          componentId: "sc-5bguab-0",
        })([
          "display:flex;img{border-top-left-radius:40px;border-top-right-radius:40px;max-width:864px;width:100%;}",
        ]),
        x = i.ZP.div.withConfig({
          displayName: "VideoBrandburstStyles__StyledVideoContainer",
          componentId: "sc-5bguab-1",
        })(["margin:0 auto;max-width:864px;position:relative;width:100%;"]),
        f = (0, i.iv)(
          [
            "border-bottom-left-radius:40px;border-bottom-right-radius:40px;box-shadow:0 6px 20px -3px ",
            ";margin:0;max-width:100%;",
          ],
          (0, g.E9)(g.ZP.blueCPUInfo, 0.2)
        ),
        y = i.ZP.div.withConfig({
          displayName: "VideoBrandburstStyles__StyledWistiaVideoContainer",
          componentId: "sc-5bguab-2",
        })(["display:flex;justify-content:center;width:100%;"]),
        b = i.ZP.div.withConfig({
          displayName: "VideoBrandburstStyles__StyledWistiaVideo",
          componentId: "sc-5bguab-3",
        })(
          [
            "height:auto;max-width:100%;width:auto;div:first-child{border-radius:24px;}",
            "{height:432px !important;}",
            "{height:239px !important;}",
          ],
          (0, p.X)(p.A.tablet),
          (0, p.X)(p.A.largePhone)
        ),
        w = (0, i.iv)(
          [
            "align-items:center;display:flex;flex-direction:column;justify-content:center;margin-bottom:32px;text-align:center;h3{color:",
            ";font-size:14px;font-weight:600;}",
          ],
          g.ZP.gray5
        ),
        v = (0, i.iv)(["margin:64px 0 16px;"]),
        _ = (0, i.iv)(
          [
            "color:",
            ";font-size:16px;font-weight:400;line-height:24px;margin:0 auto 32px;max-width:640px;text-align:center;",
            "{text-align:left;}",
          ],
          g.ZP.gray4,
          (0, p.X)(p.A.desktop)
        ),
        k = (0, i.iv)(["display:block;font-size:16px;margin:0 auto 32px;"]),
        Z =
          (i.ZP.div.withConfig({
            displayName: "VideoBrandburstStyles__CloudJourney",
            componentId: "sc-5bguab-4",
          })(
            [
              "align-items:flex-start;background-color:",
              ";border-radius:24px;box-shadow:0 6px 20px -6px ",
              ";display:flex;flex-direction:column;margin:32px auto;max-width:1088px;padding:32px 40px 32px 64px;position:relative;width:100%;img{bottom:0;position:absolute;right:0;",
              "{display:none;}}",
            ],
            g.ZP.blue1,
            (0, g.E9)(g.ZP.blueCPUInfo, 0.15),
            (0, p.X)(p.A.tablet)
          ),
          i.ZP.div.withConfig({
            displayName: "VideoBrandburstStyles__CloudJourneyCopy",
            componentId: "sc-5bguab-5",
          })(
            [
              "max-width:550px;h3{color:",
              ";font-size:32px;font-weight:700;margin:0;}p{color:",
              ";font-size:16px;font-weight:400;}",
            ],
            g.ZP.white,
            g.ZP.gray7
          ),
          i.ZP.iframe.withConfig({
            displayName: "VideoBrandburstStyles__StyledYouTubeIframe",
            componentId: "sc-5bguab-6",
          })([
            "aspect-ratio:16/9;border:none;border-radius:24px;height:100%;width:100%;",
          ])),
        C = n(85893),
        P = function (t) {
          var e,
            n = t.content;
          return (0, C.jsxs)(C.Fragment, {
            children: [
              (null === n || void 0 === n ? void 0 : n.wistiaLink) &&
                (0, C.jsx)(a(), {
                  src: "//fast.wistia.com/assets/external/E-v1.js",
                  strategy: "lazyOnload",
                }),
              (0, C.jsx)(j, {
                sectionPadding:
                  null === n || void 0 === n ? void 0 : n.sectionPadding,
                children: (0, C.jsxs)(r.Z, {
                  children: [
                    (0, C.jsxs)(S, {
                      children: [
                        (null === n || void 0 === n ? void 0 : n.title) &&
                          (0, C.jsx)(I, {
                            large: !0,
                            renderAs: "h2",
                            textAlign: "center",
                            children: n.title,
                          }),
                        (null === n || void 0 === n ? void 0 : n.subHeading) &&
                          (0, C.jsx)(N, {
                            renderAs: "p",
                            textAlign: "center",
                            children: n.subHeading,
                          }),
                        (null === n || void 0 === n ? void 0 : n.linkText) &&
                          (0, C.jsx)("p", {
                            children: (0, C.jsx)(B, {
                              dashArrow: !0,
                              url:
                                null === n || void 0 === n ? void 0 : n.linkUrl,
                              children:
                                null === n || void 0 === n
                                  ? void 0
                                  : n.linkText,
                            }),
                          }),
                      ],
                    }),
                    (null === n || void 0 === n ? void 0 : n.videoUrl) &&
                      (0, C.jsxs)(x, {
                        children: [
                          (0, C.jsx)(h, {
                            children: (0, C.jsx)(d.Z, {
                              src: u.Z.src,
                              alt: "browser UI",
                            }),
                          }),
                          (0, C.jsxs)(A, {
                            autoPlay: "autoplay",
                            loop: !0,
                            muted: !0,
                            playsInline: !0,
                            children: [
                              (0, C.jsx)("source", {
                                src:
                                  null === n || void 0 === n
                                    ? void 0
                                    : n.videoUrl,
                              }),
                              (0, C.jsx)("p", {
                                children:
                                  "Your browser does not support HTML5 video or mp4 video format.",
                              }),
                            ],
                          }),
                        ],
                      }),
                    (null === n || void 0 === n ? void 0 : n.videoId) &&
                      ((e = null === n || void 0 === n ? void 0 : n.videoId),
                      (0, C.jsx)(y, {
                        children: (0, C.jsx)(b, {
                          className: "wistia_embed wistia_async_".concat(e),
                          style: {
                            height: "576px",
                            width: "100%",
                            maxWidth: "1024px",
                          },
                        }),
                      })),
                    (null === n || void 0 === n ? void 0 : n.youtubeId) &&
                      (0, C.jsx)(Z, {
                        src: "https://www.youtube-nocookie.com/embed/".concat(
                          n.youtubeId,
                          "?controls=0&modestbranding=1&loop=1"
                        ),
                        title: "YouTube video player",
                        frameborder: "0",
                        allowfullscreen: !0,
                      }),
                  ],
                }),
              }),
            ],
          });
        },
        j = (0, i.ZP)(s.Z).withConfig({
          displayName: "VideoBrandburst___StyledSection",
          componentId: "sc-1iyp1pu-0",
        })(["", ""], m),
        S = (0, i.ZP)("div").withConfig({
          displayName: "VideoBrandburst___StyledDiv",
          componentId: "sc-1iyp1pu-1",
        })(["", ""], w),
        I = (0, i.ZP)(l.Z).withConfig({
          displayName: "VideoBrandburst___StyledHeading",
          componentId: "sc-1iyp1pu-2",
        })(["", ""], v),
        N = (0, i.ZP)(l.Z).withConfig({
          displayName: "VideoBrandburst___StyledHeading2",
          componentId: "sc-1iyp1pu-3",
        })(["", ""], _),
        B = (0, i.ZP)(c.Z).withConfig({
          displayName: "VideoBrandburst___StyledTextLink",
          componentId: "sc-1iyp1pu-4",
        })(["", ""], k),
        A = (0, i.ZP)("video").withConfig({
          displayName: "VideoBrandburst___StyledVideo",
          componentId: "sc-1iyp1pu-5",
        })(["", ""], f);
    },
    84089: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return j;
          },
        });
      var i = n(67294),
        o = n(9008),
        a = n.n(o),
        r = n(11163),
        l = n(50029),
        d = n(87794),
        s = n.n(d),
        c = n(17053),
        u = n(83454),
        p = (function () {
          var t = (0, l.Z)(
            s().mark(function t() {
              var e, n;
              return s().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return t.abrupt(
                        "return",
                        null !== (e = u) &&
                          void 0 !== u &&
                          null !== (n = e.env) &&
                          void 0 !== n &&
                          n.BYPASS_DATA_CACHE
                          ? (0, c.dY)({ type: "announcement" })
                          : [
                              {
                                id: 24,
                                type: "announcement",
                                title: "$200 60 day credit to new users",
                                subtitle: "null",
                                description: null,
                                slug: "credit-to-new-users",
                                state: "published",
                                last_validated_at: null,
                                show_on_list_view_at: null,
                                featured_at: null,
                                primary_featured_at: null,
                                created_at: "2020-05-26T18:10:17.000Z",
                                updated_at: "2022-09-26T21:13:45.000Z",
                                site: "community",
                                open_graph_image: null,
                                author: "undefined",
                                auto_publish_at: null,
                                slices: [
                                  {
                                    id: 29,
                                    static_page_id: 24,
                                    position: 0,
                                    type: "announcement",
                                    metadata: {
                                      title: {
                                        label: "Title",
                                        type: "text",
                                        value:
                                          "$200 60 day credit to new users",
                                      },
                                      background_color: {
                                        label: "Background color",
                                        type: "text",
                                        value: "#031b4e",
                                      },
                                      text_color: {
                                        label: "Text color",
                                        type: "dropdown",
                                        options: [
                                          { value: "light", label: "Light" },
                                          { value: "dark", label: "Dark" },
                                        ],
                                        value: "light",
                                      },
                                      refcode: {
                                        label: "Refcode",
                                        type: "text",
                                        value: null,
                                      },
                                      utm_source: {
                                        label: "UTM Source",
                                        type: "text",
                                        value: null,
                                      },
                                      icon: {
                                        label: "Icon",
                                        type: "image",
                                        value: null,
                                      },
                                      referral_credit_text: {
                                        label: "Referral credit text",
                                        type: "textarea",
                                        value:
                                          "Free credit active: Get started on DigitalOcean with a $200, 60-day credit for new users.",
                                      },
                                      referral_link_credit_text: {
                                        label: "Referral link credit text",
                                        type: "text",
                                        value:
                                          "Free credit active: Get started on DigitalOcean with a $200, 60-day credit for new users.",
                                      },
                                      link: {
                                        label: "Link",
                                        type: "text",
                                        value:
                                          "https://cloud.digitalocean.com/registrations/new",
                                      },
                                    },
                                    created_at: "2020-05-26T18:10:17.000Z",
                                    updated_at: "2022-09-26T21:13:45.000Z",
                                  },
                                ],
                                tags: [],
                                publishers: [],
                                editors: [],
                                authorData: [],
                              },
                              {
                                id: 25,
                                type: "announcement",
                                title: "Github Announcement Bar",
                                subtitle: "null",
                                description: null,
                                slug: "github-announcement-bar",
                                state: "published",
                                last_validated_at: null,
                                show_on_list_view_at: null,
                                featured_at: null,
                                primary_featured_at: null,
                                created_at: "2020-05-21T16:02:59.000Z",
                                updated_at: "2022-09-26T21:14:16.000Z",
                                site: "community",
                                open_graph_image: null,
                                author: "undefined",
                                auto_publish_at: null,
                                slices: [
                                  {
                                    id: 30,
                                    static_page_id: 25,
                                    position: 0,
                                    type: "announcement",
                                    metadata: {
                                      title: {
                                        label: "Title",
                                        type: "text",
                                        value: "Github Announcement Bar",
                                      },
                                      background_color: {
                                        label: "Background color",
                                        type: "text",
                                        value: null,
                                      },
                                      text_color: {
                                        label: "Text color",
                                        type: "dropdown",
                                        options: [
                                          { value: "light", label: "Light" },
                                          { value: "dark", label: "Dark" },
                                        ],
                                        value: "light",
                                      },
                                      refcode: {
                                        label: "Refcode",
                                        type: "text",
                                        value: null,
                                      },
                                      utm_source: {
                                        label: "UTM Source",
                                        type: "text",
                                        value: "github",
                                      },
                                      icon: {
                                        label: "Icon",
                                        type: "image",
                                        value: null,
                                      },
                                      referral_credit_text: {
                                        label: "Referral credit text",
                                        type: "textarea",
                                        value:
                                          "Apply your unique promo code in your account settings to receive a $200 credit.",
                                      },
                                      referral_link_credit_text: {
                                        label: "Referral link credit text",
                                        type: "text",
                                        value:
                                          "Apply your unique promo code in your account settings to receive a $200 credit.",
                                      },
                                      link: {
                                        label: "Link",
                                        type: "text",
                                        value:
                                          "https://cloud.digitalocean.com/registrations/new?refcode=74a1c5d63dac",
                                      },
                                    },
                                    created_at: "2020-05-21T16:02:59.000Z",
                                    updated_at: "2022-09-26T21:14:16.000Z",
                                  },
                                ],
                                tags: [],
                                publishers: [],
                                editors: [],
                                authorData: [],
                              },
                            ]
                      );
                    case 1:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function () {
            return t.apply(this, arguments);
          };
        })(),
        g = p,
        m = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : null,
            e = (0, i.useState)(t),
            n = e[0],
            o = e[1],
            a = (0, i.useMemo)(
              function () {
                return n || [];
              },
              [n]
            );
          return (
            (0, i.useEffect)(
              function () {
                n ||
                  g().then(function (t) {
                    return o(t);
                  });
              },
              [n]
            ),
            a
          );
        },
        h = n(99963),
        x = n(41601),
        f = n(34531),
        y = n(58069),
        b = n(37797),
        w = b.ZP.div.withConfig({
          displayName: "ErrorTemplateStyles__StyledWrapper",
          componentId: "sc-gfxdmj-0",
        })([
          "align-items:center;display:flex;flex-direction:column;margin:112px 0 32px;",
        ]),
        v = b.ZP.h1.withConfig({
          displayName: "ErrorTemplateStyles__StyledTitle",
          componentId: "sc-gfxdmj-1",
        })([
          "color:#031b4e;font-size:48px;font-weight:700;letter-spacing:-1px;line-height:1.2;margin:48px 0 16px;text-align:center;",
        ]),
        _ = b.ZP.p.withConfig({
          displayName: "ErrorTemplateStyles__StyledMessage",
          componentId: "sc-gfxdmj-2",
        })(["color:#031b4e;font-family:monospace;text-align:center;"]),
        k = n(85893),
        Z = function (t) {
          var e = t.message,
            n = t.secondaryMessage,
            i = t.showAuthButton;
          return (0, k.jsx)(y.Z, {
            children: (0, k.jsxs)(w, {
              children: [
                (0, k.jsxs)(v, {
                  children: [
                    (0, k.jsx)("small", { children: "D" }),
                    ":",
                    (0, k.jsx)("br", {}),
                    (0, k.jsx)("small", { children: e }),
                  ],
                }),
                i
                  ? (0, k.jsx)(f.Z, {
                      url: (0, x.Z)(),
                      className: "is-primary is-rounded",
                      children: "Try again",
                    })
                  : (0, k.jsx)(f.Z, {
                      url: "/",
                      className: "is-primary is-rounded",
                      children: "Go home",
                    }),
                n && (0, k.jsx)(_, { children: n }),
              ],
            }),
          });
        },
        C = Z;
      Z.defaultProps = { secondaryMessage: "", showAuthButton: !1 };
      var P = function (t) {
          var e = t.statusCode,
            n = t.authFailure,
            o = t.announcementData,
            l = m(o),
            d = (0, r.useRouter)(),
            s = (0, i.useMemo)(
              function () {
                if (n)
                  return {
                    title: "Authentication error",
                    message: "Something went wrong when signing you in",
                    secondary: ""
                      .concat(d.query.error_code, ": ")
                      .concat(d.query.error_message),
                    showAuthButton: !0,
                  };
                switch (e) {
                  case 403:
                    return {
                      title: "403 - Access denied",
                      message:
                        "403: You do not have permission to access this page.",
                    };
                  case 404:
                    return {
                      title: "404 - Page not found",
                      message:
                        "404: The page you requested could not be found.",
                    };
                  default:
                    return {
                      title: "Uh oh! An unexpected error occurred",
                      message: "Uh oh! An unexpected error occurred",
                      secondary:
                        "If this error persists, please reach out to support for help.",
                    };
                }
              },
              [n, d.query, e]
            ),
            c = (0, i.useMemo)(
              function () {
                return { data: { title: [{ text: s.title || s.message }] } };
              },
              [s]
            );
          return (0, k.jsxs)(h.Z, {
            announcementData: l,
            metaData: c,
            children: [
              (0, k.jsx)(a(), {
                children: (0, k.jsx)("meta", {
                  name: "robots",
                  content: "noindex",
                }),
              }),
              (0, k.jsx)(C, {
                message: s.message || s.title,
                secondaryMessage: s.secondary,
                showAuthButton: s.showAuthButton,
              }),
            ],
          });
        },
        j = P;
      P.defaultProps = {
        statusCode: null,
        authFailure: !1,
        announcementData: null,
      };
    },
    60175: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          __N_SSG: function () {
            return re;
          },
          default: function () {
            return le;
          },
        });
      var i = n(11163),
        o = n(99963),
        a = n(88134),
        r = n(37797),
        l = n(5918),
        d = n(71778),
        s = n(57243),
        c = n(90352),
        u = n(6534),
        p = n(17534),
        g =
          ((0, r.iv)(["background-repeat:repeat;"]),
          (0, r.iv)(
            [
              "align-items:center;display:flex;flex-direction:column;justify-content:center;",
              "{h2,p{margin-left:20px;margin-right:20px;text-align:center;}}",
            ],
            (0, p.X)(p.A.desktop)
          ),
          (0, r.iv)(["margin:60px auto 0;text-align:center;"]),
          (0, r.iv)([
            "margin:20px auto 80px !important;max-width:670px;text-align:center;",
          ]),
          (0, r.iv)(
            [
              "display:grid;grid-auto-flow:dense;grid-auto-rows:1fr;grid-gap:32px;max-width:1168px;",
              "{display:flex;flex-direction:column;grid-gap:0;margin-left:0;margin-right:0;}",
            ],
            (0, p.X)(p.A.desktop)
          ),
          (0, r.iv)(
            [
              "background:",
              ";border:1px solid ",
              ";border-radius:20px;box-shadow:none;display:block;",
              "{margin-top:32px;}",
            ],
            a.ZP.white,
            a.ZP.grayLight,
            (0, p.X)(p.A.desktop)
          )),
        m = (0, r.iv)(
          [
            "background:",
            ";border-radius:20px;box-shadow:0 2px 4px ",
            ";cursor:pointer;display:block;transition:all 0.5s ease;&:hover{background-color:",
            ";box-shadow:0 10px 20px ",
            " !important;transform:scale(1.01);}",
            "{display:inline-block;width:50%;}",
            "{width:100%;}",
          ],
          a.ZP.white,
          (0, a.E9)(a.ZP.blueDark, 0.06),
          a.ZP.white,
          (0, a.E9)(a.ZP.blueDark, 0.01),
          (0, p.X)(p.A.desktop),
          (0, p.X)(p.A.largePhone)
        ),
        h = (0, r.iv)(
          [
            "height:100%;position:relative;img{border-top-left-radius:20px;border-top-right-radius:20px;max-width:304px;width:100%;",
            "{max-width:100%;}}a{color:",
            ";font-style:normal;font-weight:600;}",
            "{align-items:center;display:flex;flex-direction:column;justify-content:center;}",
          ],
          (0, p.X)(p.A.desktop),
          a.ZP.blueLight,
          (0, p.X)(p.A.desktop)
        ),
        x = (0, r.iv)([
          "align-items:center;display:flex;justify-content:center;padding:32px 0;",
        ]),
        f =
          ((0, r.iv)(["margin-bottom:40px;margin-top:60px;"]),
          r.ZP.div.withConfig({
            displayName: "CardStaticStyles__StyledCardText",
            componentId: "sc-qkjon8-0",
          })(
            [
              "p{color:",
              ";font-size:16px;font-style:normal;font-weight:400;line-height:160%;}",
            ],
            function (t) {
              var e;
              return null !==
                (e = null === t || void 0 === t ? void 0 : t.text_color) &&
                void 0 !== e
                ? e
                : a.ZP.grayDark;
            }
          ),
          (0, r.iv)(["position:absolute;right:0;"])),
        y = r.ZP.div.withConfig({
          displayName: "CardStaticStyles__ContentWrapper",
          componentId: "sc-qkjon8-1",
        })(["display:flex;flex-wrap:wrap;margin:24px 32px;"]),
        b = r.ZP.div.withConfig({
          displayName: "CardStaticStyles__ContentType",
          componentId: "sc-qkjon8-2",
        })(
          [
            "color:",
            ";font-size:14px;font-weight:800;line-height:24px;width:100%;",
          ],
          a.ZP.gray5
        ),
        w = r.ZP.div.withConfig({
          displayName: "CardStaticStyles__ContentDate",
          componentId: "sc-qkjon8-3",
        })(
          ["color:", ";font-size:16px;margin-bottom:24px;width:100%;"],
          a.ZP.gray5
        ),
        v = (0, r.iv)(
          [
            "color:",
            ";font-size:20px;font-weight:500;line-height:28px;margin:8px 0 24px;",
          ],
          a.ZP.gray2
        ),
        _ = n(85893),
        k = function (t) {
          var e = t.title,
            n = t.image,
            i = t.link,
            o = t.type,
            a = t.publish_date,
            r = t.targetBlank,
            d = t.thumbnail_play;
          return (0, _.jsx)(
            C,
            {
              "data-testid": "card",
              target: r ? "_blank" : null,
              url: i || null,
              $_css: i ? m : g,
              children: (0, _.jsxs)(P, {
                $_css2: n && !e ? x : h,
                children: [
                  n
                    ? (0, _.jsxs)("div", {
                        style: { position: "relative" },
                        children: [
                          (0, _.jsx)(s.Z, { src: n, alt: e || "card icon" }),
                          d && (0, _.jsx)(j, { alt: "", src: u.Z.src }),
                        ],
                      })
                    : null,
                  (0, _.jsxs)(y, {
                    children: [
                      o
                        ? (0, _.jsx)(b, {
                            className: "contentTitle",
                            children: o,
                          })
                        : null,
                      e ? (0, _.jsx)(S, { renderAs: "h5", children: e }) : null,
                      a ? (0, _.jsx)(w, { children: a }) : null,
                    ],
                  }),
                ],
              }),
            },
            (0, l.Z)()
          );
        },
        Z = k;
      k.defaultProps = {
        title: null,
        image: null,
        link: null,
        type: null,
        publish_date: null,
        targetBlank: null,
        thumbnail_play: !1,
      };
      var C = (0, r.ZP)(c.Z).withConfig({
          displayName: "CardStatic___StyledLazyLink",
          componentId: "sc-1dl0m2g-0",
        })(["", ""], function (t) {
          return t.$_css;
        }),
        P = (0, r.ZP)("div").withConfig({
          displayName: "CardStatic___StyledDiv",
          componentId: "sc-1dl0m2g-1",
        })(["", ""], function (t) {
          return t.$_css2;
        }),
        j = (0, r.ZP)("img").withConfig({
          displayName: "CardStatic___StyledImg",
          componentId: "sc-1dl0m2g-2",
        })(["", ""], f),
        S = (0, r.ZP)(d.Z).withConfig({
          displayName: "CardStatic___StyledHeading",
          componentId: "sc-1dl0m2g-3",
        })(["", ""], v),
        I = n(58069),
        N = n(19684),
        B = n(74034),
        A = n(4486),
        T =
          "/_next/static/media/contributing-to-open-source-blog-image.18872550.jpg",
        H =
          "/_next/static/media/how-to-code-in-python-tutorial-image.272d48e4.jpg",
        z =
          "/_next/static/media/how-to-deploy-a-react-app-tutorial-image.91bcecea.jpg",
        D =
          "/_next/static/media/how-to-install-mysql-tutorial-image.b1d74259.jpg",
        X =
          "/_next/static/media/how-to-install-nodejs-tutorial-image.dcbc2efd.jpg",
        L =
          "/_next/static/media/how-to-scale-your-saas-product-blog-image.260c8878.jpg",
        O =
          "/_next/static/media/introducing-digitalocean-managed-mongodb-blog-image.312fe1ae.jpg",
        E =
          "/_next/static/media/multi-cloud-vs-hybrid-cloud-blog-image.c9b604bc.jpg",
        R = n(5254),
        q = function () {
          var t = [
            {
              title: "How To Install MySQL on Ubuntu 20.04",
              image: D,
              link: "https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-20-04",
              type: "tutorial",
              publish_date: "July 30, 2020",
              thumbnail_play: "",
              targetBlank: "",
            },
            {
              title:
                "How To Deploy a React Application to DigitalOcean App Platform",
              image: z,
              link: "https://www.digitalocean.com/community/tutorials/how-to-deploy-a-react-application-to-digitalocean-app-platform",
              type: "tutorial",
              publish_date: "December 18, 2020",
              thumbnail_play: "",
              targetBlank: "",
            },
            {
              title: "How To Install Node.js on Ubuntu 20.04",
              image: X,
              link: "https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04",
              type: "tutorial",
              publish_date: "August 9, 2020",
              thumbnail_play: "",
              targetBlank: "",
            },
            {
              title: "How to scale your SaaS product without breaking the bank",
              image: L,
              link: "https://www.digitalocean.com/blog/how-to-scale-your-saas-product-without-breaking-the-bank/",
              type: "blog",
              publish_date: "June 22, 2021",
              thumbnail_play: "",
              targetBlank: "",
            },
            {
              title: "Contributing to open source software: Kubernetes",
              image: T,
              link: "https://www.digitalocean.com/blog/open-source-contributing-kubernetes-beginners/",
              type: "blog",
              publish_date: "June 15, 2021",
              thumbnail_play: "",
              targetBlank: "",
            },
            {
              title: "How To Code in Python",
              image: H,
              link: "https://www.digitalocean.com/community/tutorial_series/how-to-code-in-python-3",
              type: "tutorial",
              publish_date: "August 23, 2021",
              thumbnail_play: "",
              targetBlank: "",
            },
            {
              title:
                "Introducing DigitalOcean Managed MongoDB \u2013 a fully managed, database as a service for modern apps",
              image: O,
              link: "https://www.digitalocean.com/blog/introducing-digitalocean-managed-mongodb",
              type: "blog",
              publish_date: "June 29, 2021",
              thumbnail_play: "",
              targetBlank: "",
            },
            {
              title:
                "Multi-cloud vs hybrid cloud: Everything your business needs to know",
              image: E,
              link: "https://www.digitalocean.com/blog/multi-cloud-vs-hybrid-cloud-computing",
              type: "tutorial",
              publish_date: "July 22, 2021",
              thumbnail_play: "",
              targetBlank: "",
            },
          ];
          return (0, _.jsx)(M, {
            id: "CommunityGrid",
            topPadding: !0,
            children: (0, _.jsxs)(I.Z, {
              children: [
                (0, _.jsxs)(U, {
                  children: [
                    (0, _.jsx)("div", {
                      children: (0, _.jsx)(G, {
                        large: !0,
                        renderAs: "h2",
                        children: "Grow with a global community",
                      }),
                    }),
                    (0, _.jsxs)("div", {
                      children: [
                        (0, _.jsx)(V, {
                          renderAs: "p",
                          textAlign: "center",
                          children:
                            "Our community is made up of people all over the world, who are driven to develop software and grow businesses in the cloud. Learn from other cloud users through open tutorials, resources, and events.",
                        }),
                        (0, _.jsx)("p", {
                          children: (0, _.jsx)(W, {
                            dashArrow: !0,
                            url: "https://www.digitalocean.com/community/",
                            children: "Join our community",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, _.jsx)(R.DT, {
                  children: (0, _.jsx)(N.Z, {
                    gap: "32px",
                    minWidth: 304,
                    colsNum: "4",
                    className: "contentStatic",
                    children: t.map(function (t) {
                      return (0,
                      _.jsx)(Z, { image: t.image, title: t.title, type: t.type, link: t.link, publish_date: t.publish_date, thumbnail_play: t.image_play_button, targetBlank: t.targetBlank }, (0, l.Z)());
                    }),
                  }),
                }),
              ],
            }),
          });
        },
        M = (0, r.ZP)(B.Z).withConfig({
          displayName: "CommunityGrid___StyledSection",
          componentId: "sc-1mlf0kj-0",
        })(["", ""], R.P8),
        U = (0, r.ZP)("div").withConfig({
          displayName: "CommunityGrid___StyledDiv",
          componentId: "sc-1mlf0kj-1",
        })(["", ""], R.OP),
        G = (0, r.ZP)(d.Z).withConfig({
          displayName: "CommunityGrid___StyledHeading",
          componentId: "sc-1mlf0kj-2",
        })(["", ""], R.UU),
        V = (0, r.ZP)(d.Z).withConfig({
          displayName: "CommunityGrid___StyledHeading2",
          componentId: "sc-1mlf0kj-3",
        })(["", ""], R.nT),
        W = (0, r.ZP)(A.Z).withConfig({
          displayName: "CommunityGrid___StyledTextLink",
          componentId: "sc-1mlf0kj-4",
        })(["", ""], R.Cl),
        F = n(18459),
        $ = "/_next/static/media/bottomLeft.b960e30b.svg",
        J = "/_next/static/media/bottomRight.a08e2be7.svg",
        Y = "/_next/static/media/topLeft.a12f1835.svg",
        K = "/_next/static/media/topRight.82fa6278.svg",
        Q = (0, r.iv)(
          [
            "background:",
            ";overflow:hidden;position:relative;z-index:0;",
            "{margin-top:0;}",
          ],
          a.ZP.blue2,
          (0, p.X)(p.A.tablet)
        ),
        tt =
          (r.ZP.img
            .attrs({
              src: "/_next/static/media/hero-bg-animation.ca6301d3.svg",
              alt: "",
            })
            .withConfig({
              displayName: "HeroHomeStyles__StyledBg",
              componentId: "sc-zsyfq5-0",
            })(
            [
              "bottom:0;height:100%;left:0;object-fit:cover;opacity:0.5;overflow:hidden;position:absolute;right:0;top:0;width:100%;z-index:-2;",
              "{display:none;}",
            ],
            (0, p.X)(p.A.largePhone)
          ),
          r.ZP.div.withConfig({
            displayName: "HeroHomeStyles__StyledHeroGradient",
            componentId: "sc-zsyfq5-1",
          })(
            [
              "background-color:",
              ";height:850px;position:absolute;top:0;width:100%;z-index:-1;",
              "{display:none;}.cloudsContainer{display:flex;justify-content:space-between;.cloudsLeft{display:inline-block;margin-top:260px;}.cloudsRight{display:inline-block;margin-top:180px;}}",
            ],
            a.ZP.blue2,
            (0, p.X)(p.A.phone)
          )),
        et = (0, r.iv)(["background-color:", ";"], a.ZP.blue2),
        nt = r.ZP.div.withConfig({
          displayName: "HeroHomeStyles__StyledSubHeadingHero",
          componentId: "sc-zsyfq5-2",
        })(["max-width:640px;width:100%;p{margin-bottom:0;}"]),
        it = (0, r.iv)(
          [
            "display:flex;flex-wrap:wrap;",
            "{flex-direction:column;.column{width:100% !important;}}",
          ],
          (0, p.X)(p.A.tablet)
        ),
        ot = (0, r.iv)([
          "align-items:center;display:flex;flex-direction:column;justify-content:center;z-index:1;",
        ]),
        at = (0, r.iv)(
          [
            "color:",
            ";margin-bottom:0;",
            "{margin-top:75px;}",
            "{font-size:48px !important;line-height:48px !important;}",
          ],
          a.ZP.white,
          (0, p.X)(p.A.tablet),
          (0, p.X)(p.A.tablet)
        ),
        rt = (0, r.iv)(
          [
            "color:",
            ";font-size:16px;margin-top:0;text-align:center;",
            "{font-size:20px !important;}",
          ],
          a.ZP.white,
          (0, p.X)(p.A.largePhone)
        ),
        lt = r.ZP.div.withConfig({
          displayName: "HeroHomeStyles__StyledOceanGradient",
          componentId: "sc-zsyfq5-3",
        })(
          [
            "background-color:",
            ";margin-top:64px;padding-bottom:32px;position:relative;width:100%;.roundedTop{background-color:",
            ";border-top-left-radius:40px;border-top-right-radius:40px;height:50px;position:absolute;top:-50px;width:100%;}",
          ],
          a.ZP.grayLightest,
          a.ZP.grayLightest
        ),
        dt = r.ZP.div.withConfig({
          displayName: "HeroHomeStyles__StyledStatisticsContainer",
          componentId: "sc-zsyfq5-4",
        })(
          [
            "display:flex;justify-content:center;margin-top:64px;text-align:center;.statisticsColumn{color:",
            ";display:inline-block;font-size:20px;font-weight:500;line-height:28px;margin-right:58.67px;max-width:228px;text-align:left;width:100%;&:nth-child(4){margin-right:0;}",
            "{margin-bottom:32px;margin-right:0;padding:0 20px;}",
            "{min-width:100%;}h4{color:",
            ";font-size:40px;margin:0;}}",
            "{flex-wrap:wrap;justify-content:center;.column.is-one-quarter-desktop{width:50%;}}",
            "{.column.is-one-quarter-desktop{width:100%;}}",
          ],
          a.ZP.gray4,
          (0, p.X)(p.A.tablet),
          (0, p.X)(p.A.largePhone),
          a.ZP.blue2,
          (0, p.X)(p.A.tablet),
          (0, p.X)(p.A.largePhone)
        ),
        st = (0, r.iv)(["margin-bottom:64px;"]),
        ct = r.ZP.div.withConfig({
          displayName: "HeroHomeStyles__CloudsHomeBottomLeft",
          componentId: "sc-zsyfq5-5",
        })(
          [
            "bottom:120px;height:215px;left:0;position:absolute;width:537px;",
            "{display:none;}",
          ],
          (0, p.X)(p.A.desktop)
        ),
        ut = r.ZP.div.withConfig({
          displayName: "HeroHomeStyles__CloudsHomeTopLeft",
          componentId: "sc-zsyfq5-6",
        })(
          [
            "height:273px;left:0;position:absolute;top:120px;width:211px;",
            "{top:72px;}",
            "{display:none;}",
          ],
          (0, p.X)(p.A.mediumDesktop),
          (0, p.X)(p.A.tablet)
        ),
        pt = r.ZP.div.withConfig({
          displayName: "HeroHomeStyles__CloudsHomeTopRight",
          componentId: "sc-zsyfq5-7",
        })(
          [
            "height:97px;position:absolute;right:0;top:95px;width:272px;",
            "{display:none;}",
          ],
          (0, p.X)(p.A.tablet)
        ),
        gt = r.ZP.div.withConfig({
          displayName: "HeroHomeStyles__CloudsHomeBottomRight",
          componentId: "sc-zsyfq5-8",
        })(
          [
            "bottom:120px;height:211px;position:absolute;right:0;width:666px;",
            "{display:none;}",
          ],
          (0, p.X)(p.A.desktop)
        ),
        mt = function () {
          return (0, _.jsxs)(ht, {
            topPadding: !0,
            children: [
              (0, _.jsx)(tt, {}),
              (0, _.jsx)(ut, {
                children: (0, _.jsx)(s.Z, {
                  src: Y,
                  alt: "cloud home top left",
                }),
              }),
              (0, _.jsx)(ct, {
                children: (0, _.jsx)(s.Z, {
                  src: $,
                  alt: "cloud home bottom left",
                }),
              }),
              (0, _.jsx)(pt, {
                children: (0, _.jsx)(s.Z, {
                  src: K,
                  alt: "cloud home top right",
                }),
              }),
              (0, _.jsx)(gt, {
                children: (0, _.jsx)(s.Z, {
                  src: J,
                  alt: "cloud home bottom right",
                }),
              }),
              (0, _.jsx)(xt, {
                children: (0, _.jsxs)(ft, {
                  className: "columns",
                  children: [
                    (0, _.jsx)(yt, {
                      className: "column is-12-desktop",
                      children: (0, _.jsxs)(bt, {
                        heroHeading: !0,
                        renderAs: "h1",
                        textAlign: "center",
                        children: [
                          "The simple cloud",
                          (0, _.jsx)("br", {}),
                          "that drives",
                          (0, _.jsx)("br", {}),
                          "business growth",
                        ],
                      }),
                    }),
                    (0, _.jsx)(nt, {
                      children: (0, _.jsx)(wt, {
                        renderAs: "p",
                        textAlign: "center",
                        children:
                          "Businesses grow faster when developers can build on the simple, affordable cloud they love. DigitalOcean has the cloud computing services you need, with predictable pricing, robust documentation, and scalability to support your growth at any stage.",
                      }),
                    }),
                    (0, _.jsx)(vt, {
                      className: "column is-full-desktop",
                      children: (0, _.jsx)(F.Z, {}),
                    }),
                  ],
                }),
              }),
              (0, _.jsxs)(lt, {
                children: [
                  (0, _.jsx)("div", { className: "roundedTop" }),
                  (0, _.jsx)(I.Z, {
                    children: (0, _.jsxs)(dt, {
                      children: [
                        (0, _.jsxs)("div", {
                          className: "statisticsColumn",
                          children: [
                            (0, _.jsx)("h4", { children: "15" }),
                            "Globally distributed data centers",
                          ],
                        }),
                        (0, _.jsxs)("div", {
                          className: "statisticsColumn",
                          children: [
                            (0, _.jsx)("h4", { children: "185" }),
                            "Countries our customers build in",
                          ],
                        }),
                        (0, _.jsxs)("div", {
                          className: "statisticsColumn",
                          children: [
                            (0, _.jsx)("h4", { children: "> 600k" }),
                            "Customers building with DigitalOcean",
                          ],
                        }),
                        (0, _.jsxs)("div", {
                          className: "statisticsColumn",
                          children: [
                            (0, _.jsx)("h4", { children: "99.99%" }),
                            "Uptime SLA for Droplets and Storage",
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        ht = (0, r.ZP)(B.Z).withConfig({
          displayName: "HeroHome___StyledSection",
          componentId: "sc-n5wgio-0",
        })(["", ""], Q),
        xt = (0, r.ZP)(I.Z).withConfig({
          displayName: "HeroHome___StyledContainer",
          componentId: "sc-n5wgio-1",
        })(["", ""], et),
        ft = (0, r.ZP)("div").withConfig({
          displayName: "HeroHome___StyledDiv",
          componentId: "sc-n5wgio-2",
        })(["", ""], ot),
        yt = (0, r.ZP)("div").withConfig({
          displayName: "HeroHome___StyledDiv2",
          componentId: "sc-n5wgio-3",
        })(["", ""], it),
        bt = (0, r.ZP)(d.Z).withConfig({
          displayName: "HeroHome___StyledHeading",
          componentId: "sc-n5wgio-4",
        })(["", ""], at),
        wt = (0, r.ZP)(d.Z).withConfig({
          displayName: "HeroHome___StyledHeading2",
          componentId: "sc-n5wgio-5",
        })(["", ""], rt),
        vt = (0, r.ZP)("div").withConfig({
          displayName: "HeroHome___StyledDiv3",
          componentId: "sc-n5wgio-6",
        })(["", ""], st),
        _t = n(50309),
        kt = "/_next/static/media/3cx-logo.7534bb60.png",
        Zt = "/_next/static/media/bunnyshell-logo.d9a44f28.svg",
        Ct = "/_next/static/media/centra-logo.b0378b4c.svg",
        Pt = "/_next/static/media/cloudways-logo.a4ddb8d9.png",
        jt = "/_next/static/media/ghost-logo.f01e7d3c.png",
        St = "/_next/static/media/gitlab-logo.087cac3d.svg",
        It = "/_next/static/media/hack-the-box-logo.92f0f052.svg",
        Nt = "/_next/static/media/hashicorp-logo.c49eba9c.svg",
        Bt = "/_next/static/media/intricately-logo.cfd0ee2a.svg",
        At = "/_next/static/media/parabol-logo.72329cdc.svg",
        Tt = "/_next/static/media/slack-logo.05422cb3.svg",
        Ht = "/_next/static/media/vidazoo-logo.6415a244.svg",
        zt = "/_next/static/media/vidgyor-logo.249fd018.svg",
        Dt = "/_next/static/media/whatfix-logo.0d67af6a.svg",
        Xt = "/_next/static/media/wpmudev-logo.937916e3.svg",
        Lt = 192,
        Ot = (0, r.iv)(["margin:0;overflow:hidden;padding:0;"]),
        Et = r.ZP.div.withConfig({
          displayName: "MarqueeStyles__StyledBackgroundHolder",
          componentId: "sc-bx2354-0",
        })(["background-color:", ";padding:64px 0;"], function (t) {
          return (
            (0, a.E9)(a.ZP[t.backgroundColor], t.backgroundOpacity) ||
            a.ZP.grayLightest
          );
        }),
        Rt = r.ZP.div.withConfig({
          displayName: "MarqueeStyles__Card",
          componentId: "sc-bx2354-1",
        })(
          [
            "background:",
            " no-repeat center;background-size:contain;border:24px solid ",
            ";border-radius:8px;box-shadow:0 8px 16px ",
            ";display:flex;flex-direction:column;height:104px;justify-content:space-between;margin-right:32px;padding:24px;width:192px;> p{font-size:16px;font-weight:500;line-height:24px;margin:0;}.quote{color:#000824;}.author{color:",
            ";}",
          ],
          a.ZP.white,
          a.ZP.white,
          (0, a.E9)(a.ZP.blueDarkest, 0.05),
          a.ZP.grayDarker
        ),
        qt = (0, r.F4)(
          [
            "0%{transform:translateX(0);}100%{transform:translateX(calc((-",
            "px - 32px) * 8));}",
          ],
          Lt
        ),
        Mt = (0, r.F4)(
          [
            "0%{transform:translateX(0);}100%{transform:translateX(calc((-",
            "px - 32px) * 7));}",
          ],
          Lt
        ),
        Ut = (0, r.iv)(["font-weight:700;margin-bottom:0;"]),
        Gt = r.ZP.div.withConfig({
          displayName: "MarqueeStyles__StyledRow",
          componentId: "sc-bx2354-2",
        })(
          [
            "animation:",
            " 40s linear infinite;display:flex;flex-wrap:nowrap;margin:32px auto;width:calc((",
            "px + 32px) * 16);",
          ],
          qt,
          Lt
        ),
        Vt = (0, r.ZP)(Gt).withConfig({
          displayName: "MarqueeStyles__StyledRowSecondary",
          componentId: "sc-bx2354-3",
        })(
          [
            "animation-direction:reverse;animation-name:",
            ";margin:0 auto;width:calc((",
            "px + 32px) * 14);",
          ],
          Mt,
          Lt
        ),
        Wt = function (t) {
          var e = t.content,
            n = e.topBackgroundImage,
            i = e.topBackgroundColor,
            o = e.bodyBackgroundColor,
            a = e.bodyBackgroundColorOpacity,
            r = e.bottomBackgroundImage,
            l = e.bottomBackgroundColor;
          return (0, _.jsxs)(Ft, {
            children: [
              (null === e || void 0 === e ? void 0 : e.topBackgroundImage) &&
                (0, _.jsx)(_t.oZ, { backgroundImage: n, backgroundColor: i }),
              (0, _.jsxs)(Et, {
                backgroundColor: o,
                backgroundOpacity: a,
                children: [
                  (0, _.jsx)($t, {
                    large: !0,
                    renderAs: "h2",
                    textAlign: "center",
                    children: "Our Customers",
                  }),
                  (0, _.jsxs)(Gt, {
                    children: [
                      (0, _.jsx)(Rt, {
                        style: { backgroundImage: "url(".concat(Zt, ")") },
                      }),
                      (0, _.jsx)(Rt, {
                        style: { backgroundImage: "url(".concat(Ht, ")") },
                      }),
                      (0, _.jsx)(Rt, {
                        style: { backgroundImage: "url(".concat(At, ")") },
                      }),
                      (0, _.jsx)(Rt, {
                        style: { backgroundImage: "url(".concat(Bt, ")") },
                      }),
                      (0, _.jsx)(Rt, {
                        style: { backgroundImage: "url(".concat(Pt, ")") },
                      }),
                      (0, _.jsx)(Rt, {
                        style: { backgroundImage: "url(".concat(Tt, ")") },
                      }),
                      (0, _.jsx)(Rt, {
                        style: { backgroundImage: "url(".concat(Nt, ")") },
                      }),
                      (0, _.jsx)(Rt, {
                        style: { backgroundImage: "url(".concat(kt, ")") },
                      }),
                      (0, _.jsx)(Rt, {
                        style: { backgroundImage: "url(".concat(Zt, ")") },
                      }),
                      (0, _.jsx)(Rt, {
                        style: { backgroundImage: "url(".concat(Ht, ")") },
                      }),
                      (0, _.jsx)(Rt, {
                        style: { backgroundImage: "url(".concat(At, ")") },
                      }),
                      (0, _.jsx)(Rt, {
                        style: { backgroundImage: "url(".concat(Bt, ")") },
                      }),
                      (0, _.jsx)(Rt, {
                        style: { backgroundImage: "url(".concat(Pt, ")") },
                      }),
                      (0, _.jsx)(Rt, {
                        style: { backgroundImage: "url(".concat(Tt, ")") },
                      }),
                      (0, _.jsx)(Rt, {
                        style: { backgroundImage: "url(".concat(Nt, ")") },
                      }),
                      (0, _.jsx)(Rt, {
                        style: { backgroundImage: "url(".concat(kt, ")") },
                      }),
                    ],
                  }),
                  (0, _.jsxs)(Vt, {
                    children: [
                      (0, _.jsx)(Rt, {
                        style: { backgroundImage: "url(".concat(zt, ")") },
                      }),
                      (0, _.jsx)(Rt, {
                        style: { backgroundImage: "url(".concat(Ct, ")") },
                      }),
                      (0, _.jsx)(Rt, {
                        style: { backgroundImage: "url(".concat(It, ")") },
                      }),
                      (0, _.jsx)(Rt, {
                        style: { backgroundImage: "url(".concat(Xt, ")") },
                      }),
                      (0, _.jsx)(Rt, {
                        style: { backgroundImage: "url(".concat(jt, ")") },
                      }),
                      (0, _.jsx)(Rt, {
                        style: { backgroundImage: "url(".concat(Dt, ")") },
                      }),
                      (0, _.jsx)(Rt, {
                        style: { backgroundImage: "url(".concat(St, ")") },
                      }),
                      (0, _.jsx)(Rt, {
                        style: { backgroundImage: "url(".concat(zt, ")") },
                      }),
                      (0, _.jsx)(Rt, {
                        style: { backgroundImage: "url(".concat(Ct, ")") },
                      }),
                      (0, _.jsx)(Rt, {
                        style: { backgroundImage: "url(".concat(It, ")") },
                      }),
                      (0, _.jsx)(Rt, {
                        style: { backgroundImage: "url(".concat(Xt, ")") },
                      }),
                      (0, _.jsx)(Rt, {
                        style: { backgroundImage: "url(".concat(jt, ")") },
                      }),
                      (0, _.jsx)(Rt, {
                        style: { backgroundImage: "url(".concat(Dt, ")") },
                      }),
                      (0, _.jsx)(Rt, {
                        style: { backgroundImage: "url(".concat(St, ")") },
                      }),
                    ],
                  }),
                ],
              }),
              (null === e || void 0 === e ? void 0 : e.bottomBackgroundImage) &&
                (0, _.jsx)(_t.K3, { backgroundImage: r, backgroundColor: l }),
            ],
          });
        },
        Ft = (0, r.ZP)(B.Z).withConfig({
          displayName: "Marquee___StyledSection",
          componentId: "sc-76s6aw-0",
        })(["", ""], Ot),
        $t = (0, r.ZP)(d.Z).withConfig({
          displayName: "Marquee___StyledHeading",
          componentId: "sc-76s6aw-1",
        })(["", ""], Ut),
        Jt = n(5477),
        Yt = n(57298),
        Kt = n(55581),
        Qt = n(18323),
        te = n(51956),
        ee = "/_next/static/media/bottomWaveSliceBlue5.47e176fb.svg",
        ne = "/_next/static/media/topWaveSliceBlue5.57825f7b.svg",
        ie = {
          title: "Do more with less complexity",
          subHeading:
            "Our simple UI, CLI, API, and docs enable you to spend time on your business while we focus on the infrastructure.",
          linkText: "Explore our products",
          linkUrl: "/products/",
        },
        oe = function (t) {
          var e = t.dropletsData,
            n = {
              backgroundColor: a.ZP.blue1,
              titleColor: a.ZP.white,
              textColor: a.ZP.white,
              linkColor: a.ZP.white,
              title: "A cloud for your entire journey",
              text: "Build robust applications using a comprehensive portfolio of compute, storage, database, and networking products.",
              linkText: "View the docs",
              linkUrl: "https://docs.digitalocean.com/",
              bannerImage: te.Z.src,
            },
            i = {
              topBackgroundImage: ne,
              topBackgroundColor: a.ZP.gray10,
              bodyBackgroundColor: "blue5",
              bodyBackgroundColorOpacity: 0.6,
              bottomBackgroundImage: ee,
              bottomBackgroundColor: a.ZP.gray10,
            };
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(mt, {}),
              (0, _.jsx)(Qt.Z, { content: ie }),
              (0, _.jsx)(Wt, { content: i }),
              (0, _.jsx)(Yt.Z, { data: e }),
              (0, _.jsx)(Kt.Z, { content: n }),
              (0, _.jsx)(q, {}),
              (0, _.jsx)(Jt.Z, {}),
            ],
          });
        },
        ae = n(84089),
        re = !0,
        le = function (t) {
          var e = t.pageData,
            n = t.announcementData,
            a = t.dropletsData,
            r = (0, i.useRouter)();
          return r.isFallback || e
            ? (0, _.jsx)(o.Z, {
                announcementData: n,
                metaData: e,
                footerWaveColor: "#7BDEFF",
                ignoreSlug: !0,
                ignoreType: !0,
                children: r.isFallback
                  ? (0, _.jsx)("div", { children: "Loading\u2026" })
                  : (0, _.jsx)(oe, { dropletsData: a }),
              })
            : (0, _.jsx)(ae.default, { statusCode: 404 });
        };
    },
    75557: function (t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return n(60175);
        },
      ]);
    },
    48523: function (t, e) {
      "use strict";
      e.Z = {
        src: "/_next/static/media/browserUi.8e8904bf.svg",
        height: 32,
        width: 864,
      };
    },
    51956: function (t, e) {
      "use strict";
      e.Z = {
        src: "/_next/static/media/cloudJourneyImage.954519ea.svg",
        height: 183,
        width: 403,
      };
    },
    6534: function (t, e) {
      "use strict";
      e.Z = {
        src: "/_next/static/media/card-thumbnail-play.dff05ba5.svg",
        height: 38,
        width: 38,
      };
    },
  },
  function (t) {
    t.O(
      0,
      [1092, 8616, 8249, 8417, 9963, 2460, 8711, 9774, 2888, 179],
      function () {
        return (e = 75557), t((t.s = e));
        var e;
      }
    );
    var e = t.O();
    _N_E = e;
  },
]);
