(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [791],
  {
    19684: function (e, t, i) {
      "use strict";
      i.d(t, {
        Z: function () {
          return x;
        },
      });
      var n = i(59499),
        o = i(27812),
        r = i(4730),
        a = i(67294),
        s = i(5918),
        l = i(17534),
        u = i(37797),
        c = u.ZP.div.withConfig({
          displayName: "MasonryStyles__MasonryDiv",
          componentId: "sc-n3swdp-0",
        })(
          [
            "column-gap:30px;display:grid;grid-auto-flow:column;grid-gap:",
            ";margin-top:64px;width:100%;.contentStatic{margin-top:58px;}.box{margin-bottom:30px !important;max-width:265px;p{margin-bottom:0 !important;}}",
            "{.contentStatic{display:flex;flex-wrap:wrap;width:100%;}}",
            "{display:flex;flex-direction:column;margin-top:0;width:100%;}",
          ],
          function (e) {
            return e.gap || "30px";
          },
          (0, l.X)(l.A.desktop),
          (0, l.X)(l.A.tablet)
        ),
        p = u.ZP.div.withConfig({
          displayName: "MasonryStyles__Col",
          componentId: "sc-n3swdp-1",
        })(
          [
            "grid-gap:",
            ";",
            "{&.contentStatic{align-items:start;display:flex;justify-content:space-between;> a{width:100%;}}}",
            "{&.contentStatic{flex-wrap:wrap;margin:0;}}",
          ],
          function (e) {
            return e.gap || "30px";
          },
          (0, l.X)(l.A.desktop),
          (0, l.X)(l.A.largePhone)
        ),
        d = function (e, t, i) {
          var n = i;
          n = window;
          var o = (0, a.useRef)();
          (0, a.useEffect)(
            function () {
              o.current = t;
            },
            [t]
          ),
            (0, a.useEffect)(
              function () {
                if (n && n.addEventListener) {
                  var t = function (e) {
                    return o.current(e);
                  };
                  return (
                    n.addEventListener(e, t),
                    function () {
                      n.removeEventListener(e, t);
                    }
                  );
                }
              },
              [e, n]
            );
        },
        g = i(85893),
        m = ["children", "gap", "minWidth", "colsNum"];
      function y(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, n);
        }
        return i;
      }
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? y(Object(i), !0).forEach(function (t) {
                (0, n.Z)(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : y(Object(i)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(i, t)
                );
              });
        }
        return e;
      }
      var h = function (e) {
          var t = e.children,
            i = e.gap,
            n = e.minWidth,
            l = void 0 === n ? 500 : n,
            u = e.colsNum,
            y = (0, r.Z)(e, m),
            h = (0, a.useRef)(),
            x = (0, a.useState)(u || 4),
            b = x[0],
            w = x[1],
            A = (0, o.Z)(Array(b)).map(function () {
              return [];
            });
          !(function (e, t) {
            e.forEach(function (e, i) {
              t[i % t.length].push(e);
            });
          })(t, A);
          var v = function () {
            return w(
              u ? parseInt(u, 10) : Math.ceil(h.current.offsetWidth / l)
            );
          };
          return (
            (0, a.useEffect)(v, [l, u]),
            d("resize", v),
            (0, g.jsx)(
              c,
              f(
                f({ ref: h, gap: i }, y),
                {},
                {
                  children: (0, o.Z)(Array(b)).map(function (e, t) {
                    return (0,
                    g.jsx)(p, { gap: i, className: "contentStatic", children: A[t] }, (0, s.Z)());
                  }),
                }
              )
            )
          );
        },
        x = h;
      h.defaultProps = { colsNum: null };
    },
    50896: function (e, t, i) {
      "use strict";
      i.d(t, {
        Z: function () {
          return P;
        },
      });
      var n = i(37797),
        o = i(88723),
        r = i(41664),
        a = i.n(r),
        s = i(88134),
        l = i(98261),
        u = i(4620),
        c = i(71778),
        p = i(93050),
        d = i(17534),
        g = i(87288),
        m = i(90352),
        y = i(19684),
        f = n.ZP.div.withConfig({
          displayName: "TutorialCardListStyles__StyledDescription",
          componentId: "sc-1b7e7fm-0",
        })(
          [
            "color:",
            ";display:-webkit-box;font-size:14px;line-height:22px;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:4;",
          ],
          s.ZP.gray4
        ),
        h = (0, n.ZP)(y.Z).withConfig({
          displayName: "TutorialCardListStyles__StyledMasonry",
          componentId: "sc-1b7e7fm-1",
        })(["margin-top:50px;.contentStatic{margin:0;}"]),
        x = n.ZP.a.withConfig({
          displayName: "TutorialCardListStyles__StyledIndexListItem",
          componentId: "sc-1b7e7fm-2",
        })(
          [
            "background:",
            ";border-radius:",
            ";box-shadow:0 6px 20px -6px ",
            ";box-sizing:border-box;display:block;height:",
            ";margin:auto;position:relative;text-decoration:none;transition:box-shadow 0.4s ease,transform 0.4s ease;width:336px;will-change:box-shadow,transform;",
            "{margin:0 0 32px;width:300px;}&:hover{box-shadow:0 10px 20px -2px ",
            ";transform:translateY(-4px);}&:active{transform:scale(0.98);}",
          ],
          s.ZP.white,
          function (e) {
            return e.image ? "0 0 16px 16px" : "16px";
          },
          (0, s.E9)(s.ZP.blueCPUInfo, 0.15),
          function (e) {
            return e.fixedHeight ? "306px" : "min-content";
          },
          (0, d.X)(d.A.tablet, "min"),
          (0, s.E9)(s.ZP.blue1, 0.15)
        ),
        b = n.ZP.div.withConfig({
          displayName: "TutorialCardListStyles__StyledIndexListItemContainer",
          componentId: "sc-1b7e7fm-3",
        })(["padding:24px 32px;"]),
        w = n.ZP.span.withConfig({
          displayName: "TutorialCardListStyles__StyledIndexItemEyeBrow",
          componentId: "sc-1b7e7fm-4",
        })(
          [
            "color:",
            ";display:inline-block;font-family:",
            ";font-size:14px;font-style:normal;font-weight:800;letter-spacing:1px;line-height:24px;margin-bottom:9px;text-transform:",
            ";",
          ],
          function (e) {
            return e.color || s.ZP.blueLight;
          },
          (0, g.Z)("code"),
          function (e) {
            return e.upper ? "uppercase" : "capitalize";
          }
        ),
        A = n.ZP.img.withConfig({
          displayName: "TutorialCardListStyles__StyledRecordHeaderImage",
          componentId: "sc-1b7e7fm-5",
        })(
          [
            "border-radius:16px 16px 0 0;display:block;height:auto;object-fit:cover;width:100%;",
            "{height:160px;}",
          ],
          (0, d.X)(d.A.tablet, "min")
        ),
        v = (0, n.iv)(
          [
            "color:",
            ";display:-webkit-box;font-size:18px;font-weight:500;line-height:28px;margin:8px 0;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:4;a{color:",
            ";text-decoration:none;}",
          ],
          s.ZP.gray2,
          s.ZP.blueDark
        ),
        T = n.ZP.div.withConfig({
          displayName: "TutorialCardListStyles__StyledIndexMetaSection",
          componentId: "sc-1b7e7fm-6",
        })(
          ["color:", ";font-size:14px;font-weight:500;line-height:1.6;"],
          s.ZP.gray
        ),
        j = n.ZP.span.withConfig({
          displayName: "TutorialCardListStyles__StyledIndexMetaItem",
          componentId: "sc-1b7e7fm-7",
        })(
          [
            "color:",
            ";font-size:16px;font-style:normal;font-weight:400;line-height:24px;margin-right:0;",
          ],
          s.ZP.gray5
        ),
        Z =
          ((0, n.ZP)(m.Z).withConfig({
            displayName: "TutorialCardListStyles__StyledEyebrowLink",
            componentId: "sc-1b7e7fm-8",
          })(
            [
              "color:",
              ";text-decoration:none;transition:color 0.2 ease;&:hover{color:",
              ";}",
            ],
            s.ZP.blueLight,
            s.ZP.blue1
          ),
          i(85893)),
        S = function (e) {
          var t = e.records,
            i = e.showDate,
            n = e.showDescription,
            r = e.showEyebrow,
            c = e.uppercaseEyebrow,
            d = e.useSubTypeLink,
            g = e.showImage,
            m = e.colsNum,
            y = e.fixedHeight;
          return (0, Z.jsx)(h, {
            gap: "32px",
            minWidth: 300,
            colsNum: m,
            children:
              null === t || void 0 === t
                ? void 0
                : t.map(function (e) {
                    return (0,
                    Z.jsx)(a(), { href: (0, o.F7)(d && e.subType ? e.subType || e.tutorial_type : e.type || e.tutorial_type, e.slug), passHref: !0, children: (0, Z.jsxs)(x, { image: g, fixedHeight: y, children: [g && (e.header_url ? (0, Z.jsx)(A, { src: e.header_url, alt: e.title, title: e.title }) : (0, Z.jsx)(A, { src: p.Z.src, alt: e.title, title: e.title })), (0, Z.jsxs)(b, { children: [r && (0, Z.jsxs)(w, { color: s.j4[e.subType || e.type || e.tutorial_type], upper: c, children: ["// ", (e.relation || e.subType || e.type || e.tutorial_type).replaceAll(/-|_/g, " "), " //"] }), (0, Z.jsx)(_, { renderAs: "h3", small: !0, children: e.title }), n && (0, Z.jsx)(f, { children: null === e || void 0 === e ? void 0 : e.description }), (0, Z.jsxs)(T, { children: ["question" === e.type && (0, Z.jsxs)(Z.Fragment, { children: [(0, Z.jsx)(j, { children: e.answers ? (0, u.M)("answer", e.answers) : "No answers yet" }), (0, Z.jsx)(j, { children: " \u2022 " })] }), (0, Z.jsx)(j, { children: i && (e.timestamp ? (0, l.Z)(1e3 * e.timestamp) : (0, l.Z)(e.last_validated_at || e.published_at || e.updated_at)) })] })] })] }) }, e.id);
                  }),
          });
        },
        P = S;
      S.defaultProps = {
        showDate: !0,
        showDescription: !1,
        showEyebrow: !1,
        uppercaseEyebrow: !0,
        useSubTypeLink: !1,
        showImage: !1,
        colsNum: "3",
        fixedHeight: !1,
      };
      var _ = (0, n.ZP)(c.Z).withConfig({
        displayName: "TutorialCardList___StyledHeading",
        componentId: "sc-8ka4ow-0",
      })(["", ""], v);
    },
    95793: function (e, t, i) {
      "use strict";
      var n = i(67294),
        o = i(11163),
        r = i(57805);
      t.Z = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          i = (0, o.useRouter)();
        (0, n.useEffect)(
          function () {
            if (i.isReady && e) {
              var n = new URL(window.location.origin + i.asPath),
                o = n.pathname.split("/")[2];
              (0, r.Z)(e) !== o &&
                (t &&
                  !n.searchParams.has("subtype") &&
                  n.searchParams.set("subtype", o),
                (n.pathname = "/community/"
                  .concat((0, r.Z)(e), "/")
                  .concat(n.pathname.split("/").slice(3).join("/"))
                  .replace(/\/$/, "")),
                i.replace(n.toString()).then());
            }
          },
          [i, e, t]
        );
      };
    },
    1007: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          __N_SSG: function () {
            return ge;
          },
          default: function () {
            return me;
          },
        });
      var n = i(9008),
        o = i.n(n),
        r = i(11163),
        a = i(95793),
        s = i(75933),
        l = i(50029),
        u = i(16835),
        c = i(59499),
        p = i(37797),
        d = i(87794),
        g = i.n(d),
        m = i(67294),
        y = i(78268),
        f = i(17053),
        h = i(6944),
        x = function (e) {
          return e
            .replace(/(?:^|-)(.)/g, function (e, t) {
              return " ".concat(t.toUpperCase());
            })
            .trim();
        },
        b = i(57805),
        w = i(75669),
        A = i(57054),
        v = i(54245),
        T = i(58069),
        j = i(45279),
        Z = i(47983),
        S = i(90917),
        P = i(37364),
        _ = i(90352),
        k = i(21346),
        C = i(4486),
        I = i(50896),
        E = i(69582),
        L = i(65711),
        N = i(17534),
        R = i(88134),
        D = i(87288),
        O = i(3218),
        M = p.ZP.div.withConfig({
          displayName: "TutorialIndexTemplateStyles__StyledWrapper",
          componentId: "sc-pkg21j-0",
        })(["background-color:", ";"], R.ZP.gray10),
        Q = p.ZP.div.withConfig({
          displayName: "TutorialIndexTemplateStyles__LeftNavigationClose",
          componentId: "sc-pkg21j-1",
        })(
          [
            "display:block;position:absolute;right:40px;top:32px;z-index:20;",
            "{display:none;position:relative;top:0;}",
          ],
          (0, N.X)(N.A.largeDesktop, "min")
        ),
        B = p.ZP.div.withConfig({
          displayName: "TutorialIndexTemplateStyles__IndexContent",
          componentId: "sc-pkg21j-2",
        })(["display:block;"]),
        q = p.ZP.div.withConfig({
          displayName: "TutorialIndexTemplateStyles__StyledDivider",
          componentId: "sc-pkg21j-3",
        })(
          ["border-top:1px solid ", ";margin:", ";", " width:100%;"],
          R.ZP.gray7,
          function (e) {
            return e.margin || "24px 0px";
          },
          function (e) {
            return e.position || "";
          }
        ),
        z = p.ZP.div.withConfig({
          displayName: "TutorialIndexTemplateStyles__IndexContainer",
          componentId: "sc-pkg21j-4",
        })(
          [
            "column-gap:32px;display:grid;grid-template-columns:1fr;margin:0 auto;max-width:1440px;width:100%;.number{color:",
            ";}",
            "{grid-template-columns:300px 1fr;}",
          ],
          R.ZP.strawberry,
          (0, N.X)(N.A.largeDesktop, "min")
        ),
        F = p.ZP.div.withConfig({
          displayName: "TutorialIndexTemplateStyles__StyledHeaders",
          componentId: "sc-pkg21j-5",
        })(
          [
            "color:",
            ";display:block;font-family:",
            ";font-size:24px;font-weight:700;letter-spacing:-0.5px;line-height:40px;margin:",
            ";width:100%;",
            "{font-size:32px;}div{float:right;font-size:14px;margin:0;",
            "{font-size:16px;}}",
          ],
          R.ZP.gray2,
          (0, D.Z)("primary"),
          function (e) {
            return e.margin || "0 0 32px 0";
          },
          (0, N.X)(N.A.largeDesktop, "min"),
          (0, N.X)(N.A.largeDesktop, "min")
        ),
        X = (0, p.ZP)(O.Z).withConfig({
          displayName: "TutorialIndexTemplateStyles__StyledIndexHeaderDropdown",
          componentId: "sc-pkg21j-6",
        })(
          [
            "margin-bottom:16px;",
            "{display:inline-block;margin:0 6px;width:182px;}",
          ],
          (0, N.X)(N.A.largeDesktop, "min")
        ),
        H = p.ZP.div.withConfig({
          displayName: "TutorialIndexTemplateStyles__StyledFilter",
          componentId: "sc-pkg21j-7",
        })(
          [
            "background:",
            ";display:none;height:98vh;left:0;margin-bottom:48px;overflow-y:auto;padding:0 24px;position:absolute;top:0;white-space:nowrap;width:100%;z-index:15;",
            "{display:block;height:auto;margin-bottom:0;overflow-y:visible;padding:0;position:relative;top:0;}",
          ],
          R.ZP.white,
          (0, N.X)(N.A.largeDesktop, "min")
        ),
        U = p.ZP.div.withConfig({
          displayName: "TutorialIndexTemplateStyles__StyledTopicContainer",
          componentId: "sc-pkg21j-8",
        })(
          [
            "column-gap:32px;display:grid;grid-template-columns:1fr;margin:72px 0 0;",
            "{grid-template-columns:1fr 304px;}",
          ],
          (0, N.X)(N.A.largeDesktop, "min")
        ),
        W = p.ZP.div.withConfig({
          displayName: "TutorialIndexTemplateStyles__StyledTopicHeader",
          componentId: "sc-pkg21j-9",
        })(
          [
            "color:",
            ";font-size:40px;font-weight:700;letter-spacing:-1px;line-height:48px;margin-bottom:16px;",
          ],
          R.ZP.gray2
        ),
        G = p.ZP.div.withConfig({
          displayName: "TutorialIndexTemplateStyles__StyledRecommend",
          componentId: "sc-pkg21j-10",
        })(
          [
            "color:",
            ";font-size:24px;font-weight:600;line-height:32px;margin-bottom:32px;",
          ],
          R.ZP.gray4
        ),
        Y = p.ZP.div.withConfig({
          displayName: "TutorialIndexTemplateStyles__StyledTopicDescription",
          componentId: "sc-pkg21j-11",
        })(
          ["color:", ";font-size:16px;font-weight:400;line-height:24px;"],
          R.ZP.gray4
        ),
        V = p.ZP.div.withConfig({
          displayName: "TutorialIndexTemplateStyles__StyledRelatedTopic",
          componentId: "sc-pkg21j-12",
        })(
          [
            "color:",
            ";display:inline-flex;flex-wrap:wrap;font-size:14px;font-weight:600;line-height:28px;margin:32px 0;p{margin:0;width:100%;}",
            "{p{width:auto;}}",
          ],
          R.ZP.gray4,
          (0, N.X)(N.A.largeDesktop, "min")
        ),
        J = p.ZP.div.withConfig({
          displayName: "TutorialIndexTemplateStyles__StyledTagItem",
          componentId: "sc-pkg21j-13",
        })(
          [
            "align-items:center;background:",
            ";border-radius:8px;color:",
            ";cursor:pointer;display:flex;flex-direction:row;height:24px;justify-content:center;margin-bottom:12px;margin-right:12px;padding:0 8px;width:auto;",
            "{margin-left:12px;}&:hover{background:",
            ";color:",
            ";}",
          ],
          R.ZP.gray9,
          R.ZP.gray4,
          (0, N.X)(N.A.largeDesktop, "min"),
          R.ZP.blueHover,
          R.ZP.white
        ),
        K = p.ZP.div.withConfig({
          displayName: "TutorialIndexTemplateStyles__StyledViewButton",
          componentId: "sc-pkg21j-14",
        })(
          [
            "background:",
            ";border:1px solid ",
            ";border-radius:10px;box-shadow:none;color:",
            ";cursor:pointer;font-family:",
            ";font-size:16px;font-style:normal;font-weight:600;line-height:24px;margin:1rem auto;padding:12px 24px;text-align:center;width:max-content;&:hover{background:",
            ";border:1px solid ",
            ";border-radius:10px;box-shadow:none;color:",
            ";}",
          ],
          R.ZP.white,
          R.ZP.grayBorder,
          R.ZP.gray3,
          (0, D.Z)("body"),
          R.ZP.gray9,
          R.ZP.gray7,
          R.ZP.gray2
        ),
        $ = p.ZP.div.withConfig({
          displayName: "TutorialIndexTemplateStyles__StyledFilterButton",
          componentId: "sc-pkg21j-15",
        })(
          [
            "background:",
            ";border-radius:10px;color:",
            ";height:45px;margin:",
            ";",
            " padding:10px 77px;text-align:center;",
            "{display:none;}",
          ],
          function (e) {
            return e.bg || R.ZP.blueLight;
          },
          function (e) {
            return R.ZP[e.color] || R.ZP.white;
          },
          function (e) {
            return e.margin || "0 0 8px";
          },
          function (e) {
            return e.color && "border: 1px solid ".concat(R.ZP.gray7, ";");
          },
          (0, N.X)(N.A.largeDesktop, "min")
        ),
        ee = (0, p.iv)(["display:block;margin:72px auto;"]),
        te = (0, p.iv)(
          [
            "border:1px solid ",
            ";border-radius:8px;color:",
            ";cursor:pointer;display:block;font-family:",
            ";font-size:18px;font-style:normal;font-weight:400;line-height:28px;margin-bottom:20px;padding:6px 20px;width:100%;",
            "{display:none;}&::after{content:'->';font-family:",
            ";font-size:16px;font-style:normal;font-weight:600;line-height:28px;position:absolute;right:16px;}&:hover::after{right:16px;transition:none;}",
          ],
          R.ZP.gray7,
          R.ZP.gray2,
          (0, D.Z)("body"),
          (0, N.X)(N.A.largeDesktop, "min"),
          (0, D.Z)("code")
        ),
        ie = p.ZP.div.withConfig({
          displayName: "TutorialIndexTemplateStyles__StyledResults",
          componentId: "sc-pkg21j-16",
        })(["padding:50px 0;text-align:center;"]),
        ne = (0, p.ZP)(C.Z).withConfig({
          displayName: "TutorialIndexTemplateStyles__StyledTextLink",
          componentId: "sc-pkg21j-17",
        })(
          [
            "color:",
            ";cursor:pointer;display:block;font-size:16px;left:-10px;padding:8px 10px;position:relative;text-decoration:none;",
          ],
          R.ZP.blue2
        ),
        oe = i(85893);
      function re(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, n);
        }
        return i;
      }
      function ae(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? re(Object(i), !0).forEach(function (t) {
                (0, c.Z)(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : re(Object(i)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(i, t)
                );
              });
        }
        return e;
      }
      var se = function (e) {
          var t,
            i,
            n = e.initialType,
            o = e.initialSubType,
            r = e.initialLanguage,
            a = e.initialTimeRange,
            s = e.initialSortBy,
            c = e.initialRecords,
            p = e.initialMoreResults,
            d = e.initialMostPopularRecords,
            T = e.initialMostPopularMoreResults,
            N = e.tags,
            R = e.popularTopics,
            D = e.featureTutorials,
            O = (0, A.Z)(),
            te = (0, v.Z)({
              initialType: n,
              initialSubType: o,
              initialLanguage: r,
              initialTimeRange: a,
              initialSortBy: s,
              initialRecords: c,
              initialMoreResults: p,
            }),
            re = (0, v.Z)({
              initialType: n,
              initialSubType: o,
              initialLanguage: r,
              initialTimeRange: a,
              initialSortBy: "popularity",
              initialRecords: d,
              initialMoreResults: T,
              initialUseQueryParams: !1,
            }),
            se = (0, m.useState)(!1),
            pe = se[0],
            de = se[1],
            ge = (0, m.useState)({
              name: "Tutorial Series",
              slug: "tutorial_series",
              state: "",
              description:
                "Learn about a developer education topic completely end-to-end with our tutorial series. We\u2019ll introduce you to a concept and help transform you from a complete beginner to an experienced practitioner of the given topic area. Our tutorial series cover programming languages, computer science concepts, practical applications, and much more!",
              related: [
                { name: "Interactive", slug: "interactive" },
                { name: "Getting Started", slug: "getting-started" },
                { name: "Linux Basics", slug: "linux-basics" },
              ],
            })[0],
            me = (0, m.useState)({ slug: "", name: "", state: "" }),
            ye = me[0],
            fe = me[1],
            he = (0, m.useState)(!1),
            xe = he[0],
            be = he[1],
            we = (0, m.useState)(!1),
            Ae = we[0],
            ve = we[1],
            Te = (0, m.useState)([]),
            je = Te[0],
            Ze = Te[1],
            Se = (0, m.useState)(!1),
            Pe = Se[0],
            _e = Se[1],
            ke = (0, m.useMemo)(
              function () {
                return (
                  te.query !== ye.state &&
                  te.query.length > 0 &&
                  "" === ye.name &&
                  !/^\[.+]$/.test(te.query)
                );
              },
              [te.query, ye.name, ye.state]
            );
          (0, m.useEffect)(
            function () {
              var e;
              pe ||
                O.loading ||
                (de(!0),
                te.language === r &&
                  te.setLanguage(
                    (null === (e = O.user) || void 0 === e
                      ? void 0
                      : e.preferred_language) || r
                  ));
            },
            [pe, te, r, O]
          ),
            (0, m.useEffect)(
              function () {
                re.setQuery(te.query),
                  re.setSubType(te.subType),
                  re.setType(te.type);
              },
              [re, te.query, te.type, te.subType]
            ),
            (0, m.useEffect)(
              function () {
                te.setHitsPerPage(ke || Pe ? 12 : 6);
              },
              [te, ke, Pe]
            ),
            (0, m.useEffect)(
              function () {
                _e(function (e) {
                  return e || ke;
                });
              },
              [ke]
            ),
            (0, m.useEffect)(
              function () {
                if (
                  te.query.length > 0 &&
                  /^\[.+]$/.test(te.query) &&
                  !1 === ke
                ) {
                  var e = R.find(function (e) {
                    return e.state === te.query;
                  });
                  null !== e &&
                    void 0 !== e &&
                    e.slug &&
                    (0, f.iP)(e.slug)
                      .then(function (t) {
                        fe(
                          ae(
                            ae({}, t),
                            {},
                            {
                              related: e.related,
                              state: "[".concat(t.name, "]"),
                            }
                          )
                        );
                      })
                      .catch(function (e) {
                        console.log(e);
                      });
                }
              },
              [R, te.query, ke]
            );
          var Ce = (0, m.useMemo)(
              function () {
                return [
                  { value: o, label: "All Content", search: "Tutorial" },
                  {
                    value: "tutorial_series",
                    label: "Tutorial Series",
                    search: "Tutorial Series",
                  },
                ].concat(
                  h.Wh.tutorial.map(function (e) {
                    return { value: e, label: (0, b.Z)(x(e)), search: x(e) };
                  })
                );
              },
              [o]
            ),
            Ie = (0, m.useMemo)(
              function () {
                return N.map(function (e) {
                  return {
                    value: "".concat(e.name),
                    label: e.name,
                    search: (0, w.Z)(e.name),
                  };
                });
              },
              [N]
            ),
            Ee = (0, m.useMemo)(function () {
              return [
                { value: "newest", label: "Most Recent" },
                { value: "popularity", label: "Most Popular" },
              ];
            }, []),
            Le = (0, m.useMemo)(function () {
              return [
                { value: "all", label: "All Time" },
                { value: "day", label: "Last Day" },
                { value: "week", label: "Last Week" },
                { value: "month", label: "Last Month" },
                { value: "year", label: "Last Year" },
              ];
            }, []),
            Ne = (0, m.useMemo)(function () {
              return [{ value: "", label: "All Languages" }].concat(
                Object.entries(h.J3).map(function (e) {
                  var t = (0, u.Z)(e, 2);
                  return { value: t[0], label: t[1].localized_name };
                })
              );
            }, []),
            Re = function (e) {
              _e(!0),
                te.setQuery(ye.state),
                te.setSortBy(e),
                te.setHitsPerPage(12),
                window.scrollTo(0, 0);
            },
            De = (0, m.useMemo)(
              function () {
                return (
                  ("tutorial_series" !== te.type ||
                    "tutorial_series" !== te.subType ||
                    !1 !== ke) &&
                  ((te.query !== ye.state &&
                    te.query.length > 0 &&
                    "" === ye.name) ||
                    te.subType !== o ||
                    te.timeRange !== a ||
                    te.language !== r ||
                    te.sortBy !== s ||
                    Pe)
                );
              },
              [
                ke,
                Pe,
                te.query,
                te.type,
                te.subType,
                te.timeRange,
                te.language,
                te.sortBy,
                ye.name,
                ye.state,
                r,
                s,
                o,
                a,
              ]
            ),
            Oe = (0, m.useMemo)(
              function () {
                return (
                  (te.query === "[".concat(ye.name, "]") ||
                    "tutorial_series" === ye.slug) &&
                  !1 === Pe
                );
              },
              [te.query, ye.name, ye.slug, Pe]
            ),
            Me = (0, m.useMemo)(
              function () {
                return (
                  (0 === te.query.length || te.query === ye.state) && !1 === Pe
                );
              },
              [te.query, ye.state, Pe]
            );
          (0, m.useEffect)(
            function () {
              "tutorial_series" === te.type &&
                "tutorial_series" === te.subType &&
                0 === te.query.length &&
                Promise.all(
                  [
                    "an-introduction-to-open-source",
                    "how-to-code-in-python-3",
                    "how-to-install-node-js-and-create-a-local-development-environment",
                    "how-to-code-in-react-js",
                  ].map(
                    (function () {
                      var e = (0, l.Z)(
                        g().mark(function e(t) {
                          var i;
                          return g().wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (e.next = 2), (0, f.G5)(t);
                                case 2:
                                  return (
                                    (i = e.sent),
                                    e.abrupt(
                                      "return",
                                      ae({ type: "tutorial_series" }, i)
                                    )
                                  );
                                case 4:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        })
                      );
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })()
                  )
                ).then(function (e) {
                  Ze(e), fe(ge);
                });
            },
            [te.type, te.subType, te.query.length, ge]
          );
          var Qe = (function () {
            var e = (0, l.Z)(
              g().mark(function e(t) {
                return g().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        t.name !== ye.name &&
                          (te.setQuery(t.state),
                          te.setSubType(o),
                          te.setType(n),
                          te.setLanguage(r),
                          te.setSortBy(s),
                          te.setTimeRange(a));
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
          return (0, oe.jsx)(M, {
            children: (0, oe.jsx)(le, {
              children: (0, oe.jsxs)(z, {
                children: [
                  (0, oe.jsx)(S.Z, {
                    type: "tutorials",
                    popularTopics: R,
                    currentTopic: ye,
                    searching: ke,
                    leftNavigation: xe,
                    toggleLeftNavigation: function () {
                      return be(!xe);
                    },
                    links: (0, oe.jsxs)(oe.Fragment, {
                      children: [
                        (0, oe.jsx)(ne, {
                          dashArrow: !0,
                          url: "/community/tutorials?type=tutorial_series&subtype=tutorial_series",
                          onClick: function () {
                            fe(ge),
                              te.setQuery(""),
                              te.setSubType("tutorial_series"),
                              te.setType("tutorial_series"),
                              _e(!1);
                          },
                          children: "Tutorial Series",
                        }),
                        (0, oe.jsx)(ne, {
                          className: "blueLink series",
                          dashArrow: !0,
                          url: "/community/tags",
                          children: "Browse all topic tags",
                        }),
                      ],
                    }),
                    onClick: function () {
                      te.setQuery(""),
                        te.setSubType(o),
                        te.setType(n),
                        te.setLanguage(r),
                        te.setSortBy(s),
                        te.setTimeRange(a),
                        fe({ slug: "", name: "", state: "" }),
                        _e(!1);
                    },
                    handleSetTopic: function (e) {
                      Qe(e), _e(!1);
                    },
                  }),
                  (0, oe.jsxs)(B, {
                    children: [
                      (0, oe.jsx)(P.Z, {
                        query: te.query,
                        title: "Tutorials",
                        subText:
                          "Follow along with one of our 6,000+ development and sysadmin tutorials.",
                        placeholder: "Search our catalog",
                        bgImage: L.Z.src,
                        bgColor: "blue2",
                        onChange: function (e) {
                          te.setQuery(e.target.value),
                            fe({ slug: "", name: "", state: "" });
                        },
                      }),
                      (0, oe.jsx)(ue, {
                        url: "",
                        dashArrow: !0,
                        onClick: function () {
                          be(!xe), window.scrollTo(0, 0);
                        },
                        children: "Popular Topics",
                      }),
                      De &&
                        (0, oe.jsxs)(oe.Fragment, {
                          children: [
                            (0, oe.jsx)(ce, {
                              url: "",
                              dashArrow: !0,
                              onClick: function () {
                                ve(!Ae), window.scrollTo(0, 0);
                              },
                              children: "Filters",
                            }),
                            (0, oe.jsx)(F, { children: "Results" }),
                            (0, oe.jsxs)(H, {
                              style: Ae ? { display: "block" } : {},
                              children: [
                                (0, oe.jsx)(Z.Z, {}),
                                (0, oe.jsx)(Q, {
                                  children: (0, oe.jsx)(y.Z, {
                                    onClick: function () {
                                      return ve(!Ae);
                                    },
                                  }),
                                }),
                                (0, oe.jsx)(X, {
                                  id: "topic-tags",
                                  options: Ie,
                                  value: {
                                    value: "newest",
                                    label: "Topic Tags",
                                  },
                                  onChange: function (e) {
                                    te.setQuery(
                                      te.query
                                        .replace(
                                          /( ?\[[^\]]+] ?|$)/,
                                          " [".concat(e.value, "] ")
                                        )
                                        .trim()
                                    );
                                  },
                                  style: { padding: 0 },
                                }),
                                (0, oe.jsx)(X, {
                                  id: "filter",
                                  options: Ce,
                                  value: Ce.find(function (e) {
                                    return e.value === te.subType;
                                  }),
                                  onChange: function (e) {
                                    te.setType(
                                      "tutorial_series" === e.value
                                        ? "tutorial_series"
                                        : "tutorial"
                                    ),
                                      te.setSubType(e.value);
                                  },
                                  style: { padding: 0 },
                                }),
                                (0, oe.jsx)(X, {
                                  id: "sort-by",
                                  options: Ee,
                                  value: Ee.find(function (e) {
                                    return e.value === te.sortBy;
                                  }),
                                  onChange: function (e) {
                                    te.setSortBy(e.value);
                                  },
                                  style: { padding: 0 },
                                }),
                                (0, oe.jsx)(X, {
                                  id: "time-range",
                                  options: Le,
                                  value: Le.find(function (e) {
                                    return e.value === te.timeRange;
                                  }),
                                  onChange: function (e) {
                                    te.setTimeRange(e.value);
                                  },
                                  style: { padding: 0 },
                                }),
                                (0, oe.jsx)(X, {
                                  id: "language",
                                  options: Ne,
                                  value: Ne.find(function (e) {
                                    return e.value === te.language;
                                  }),
                                  onChange: function (e) {
                                    te.setLanguage(e.value);
                                  },
                                  style: { padding: 0 },
                                }),
                                (0, oe.jsx)($, {
                                  margin: "50px 0 8px",
                                  onClick: function () {
                                    return ve(!Ae);
                                  },
                                  children: "Apply Filters",
                                }),
                                (0, oe.jsx)($, {
                                  bg: "white",
                                  color: "gray2",
                                  onClick: function () {
                                    ve(!Ae),
                                      te.setSortBy(s),
                                      te.setTimeRange(a),
                                      te.setLanguage(r),
                                      te.setSubType(o),
                                      te.setType(n);
                                  },
                                  children: "Clear Filters",
                                }),
                              ],
                            }),
                            0 === te.records.length
                              ? (0, oe.jsx)(ie, { children: "No results" })
                              : (0, oe.jsxs)(oe.Fragment, {
                                  children: [
                                    (0, oe.jsx)(I.Z, {
                                      records: te.records,
                                      onClickTag: function (e) {
                                        return te.setQuery(
                                          ""
                                            .concat(te.query, " [")
                                            .concat(e, "]")
                                        );
                                      },
                                      showEyebrow: !0,
                                      useSubTypeLink: !0,
                                    }),
                                    (0, oe.jsx)(k.Z, {
                                      onClick: function () {
                                        return te.setPage(te.page + 1);
                                      },
                                      visible: te.moreResults,
                                      message: "See more",
                                      styles: ee,
                                    }),
                                  ],
                                }),
                          ],
                        }),
                      Oe &&
                        (0, oe.jsxs)(U, {
                          children: [
                            (0, oe.jsxs)("div", {
                              children: [
                                (0, oe.jsx)(W, { children: ye.name }),
                                (0, oe.jsx)(Y, { children: ye.description }),
                                (0, oe.jsxs)(V, {
                                  children: [
                                    (0, oe.jsx)("p", {
                                      children: "RELATED TOPICS",
                                    }),
                                    ye.related.map(function (e) {
                                      return (0, oe.jsx)(
                                        C.Z,
                                        {
                                          url: "/community/tutorials?q=".concat(
                                            encodeURIComponent(
                                              "[".concat(e.name, "]")
                                            )
                                          ),
                                          passHref: !0,
                                          children: (0, oe.jsx)(J, {
                                            onClick: function () {
                                              _e(!0),
                                                te.setQuery(
                                                  "[".concat(e.name, "]")
                                                ),
                                                fe({
                                                  slug: "",
                                                  name: "",
                                                  state: "",
                                                });
                                            },
                                            children: e.name,
                                          }),
                                        },
                                        e
                                      );
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, oe.jsxs)("div", {
                              children: [
                                (0, oe.jsx)(G, { children: "Recommended" }),
                                "tutorial_series" === ye.slug
                                  ? (0, oe.jsx)(I.Z, {
                                      records:
                                        null === je || void 0 === je
                                          ? void 0
                                          : je.slice(0, 1),
                                      showEyebrow: !0,
                                      colsNum: "1",
                                    })
                                  : (0, oe.jsx)(I.Z, {
                                      records:
                                        (null === ye ||
                                        void 0 === ye ||
                                        null === (t = ye.featureTutorials) ||
                                        void 0 === t
                                          ? void 0
                                          : t.slice(0, 1)) || [],
                                      showEyebrow: !0,
                                      useSubTypeLink: !0,
                                      colsNum: "1",
                                    }),
                              ],
                            }),
                          ],
                        }),
                      Me &&
                        (0, oe.jsxs)(oe.Fragment, {
                          children: [
                            (0, oe.jsx)(F, {
                              margin: "72px 0px 32px 0px",
                              children: "Featured  Content",
                            }),
                            "tutorial_series" === ye.slug
                              ? (0, oe.jsx)(I.Z, {
                                  records:
                                    null === je || void 0 === je
                                      ? void 0
                                      : je.slice(1),
                                  showEyebrow: !0,
                                  showImage: !0,
                                })
                              : (0, oe.jsx)(I.Z, {
                                  records:
                                    (null === ye ||
                                    void 0 === ye ||
                                    null === (i = ye.featureTutorials) ||
                                    void 0 === i
                                      ? void 0
                                      : i.slice(1)) || D,
                                  showEyebrow: !0,
                                  useSubTypeLink: !0,
                                  showImage: !0,
                                }),
                            (0, oe.jsx)(q, { margin: "72px 0px" }),
                            (0, oe.jsxs)(F, {
                              children: [
                                "Most Recent Content",
                                (0, oe.jsx)(_.Z, {
                                  url: "/community/tutorials?sort_by=newest&q=".concat(
                                    te.query,
                                    "+&hits_per_page=12"
                                  ),
                                  children: (0, oe.jsx)(K, {
                                    onClick: function () {
                                      Re("newest");
                                    },
                                    children: "View all",
                                  }),
                                }),
                              ],
                            }),
                            (0, oe.jsx)(I.Z, {
                              records: te.records,
                              onClickTag: function (e) {
                                return te.setQuery(
                                  "".concat(te.query, " [").concat(e, "]")
                                );
                              },
                              showEyebrow: !0,
                              useSubTypeLink: !0,
                            }),
                            "" !== ye.slug &&
                              (0, oe.jsx)(k.Z, {
                                onClick: function () {
                                  return te.setPage(te.page + 1);
                                },
                                visible: te.moreResults,
                                message: "See more",
                                styles: ee,
                              }),
                            (0, oe.jsx)(q, { margin: "72px 0px" }),
                            (0, oe.jsxs)(F, {
                              children: [
                                "Popular Content",
                                (0, oe.jsx)(_.Z, {
                                  url: "/community/tutorials?sort_by=popularity&q=".concat(
                                    te.query,
                                    "+&hits_per_page=12"
                                  ),
                                  children: (0, oe.jsx)(K, {
                                    onClick: function () {
                                      Re("popularity");
                                    },
                                    children: "View all",
                                  }),
                                }),
                              ],
                            }),
                            (0, oe.jsx)(I.Z, {
                              records: re.records,
                              showEyebrow: !0,
                              useSubTypeLink: !0,
                            }),
                            (0, oe.jsx)(k.Z, {
                              onClick: function () {
                                return re.setPage(re.page + 1);
                              },
                              visible: re.moreResults,
                              message: "See more",
                              styles: ee,
                            }),
                          ],
                        }),
                      null === O.token
                        ? (0, oe.jsx)(j.Z, {
                            title:
                              "Want to learn more? Join the DigitalOcean Community!",
                            content:
                              "Join our DigitalOcean community of over a million developers for free! Get help and share knowledge in Q&A, subscribe to topics of interest, and get courses and tools that will help you grow as a developer and scale your project or business. ",
                            linkText: "Sign up now",
                            link: O.signIn,
                            image: E.Z.src,
                            bgColor: "blue1",
                          })
                        : null,
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        le = (0, p.ZP)(T.Z).withConfig({
          displayName: "TutorialIndexTemplate___StyledContainer",
          componentId: "sc-uud5yk-0",
        })(["margin:auto;padding-top:72px;"]),
        ue = (0, p.ZP)(C.Z).withConfig({
          displayName: "TutorialIndexTemplate___StyledTextLink",
          componentId: "sc-uud5yk-1",
        })(["", ""], te),
        ce = (0, p.ZP)(C.Z).withConfig({
          displayName: "TutorialIndexTemplate___StyledTextLink2",
          componentId: "sc-uud5yk-2",
        })(["", ""], te),
        pe = i(84089),
        de = "https://www.digitalocean.com/".replace(/\/*$/, ""),
        ge = !0,
        me = function (e) {
          var t = e.initialType,
            i = e.initialSubType,
            n = e.initialLanguage,
            l = e.initialTimeRange,
            u = e.initialSortBy,
            c = e.initialRecords,
            p = e.initialMoreResults,
            d = e.initialMostPopularRecords,
            g = e.initialMostPopularMoreResults,
            m = e.tags,
            y = e.popularTopics,
            f = e.featureTutorials;
          (0, a.Z)("tutorial", !0);
          var h = (0, r.useRouter)();
          return h.isFallback || c
            ? (0, oe.jsxs)(s.Z, {
                children: [
                  (0, oe.jsxs)(o(), {
                    children: [
                      (0, oe.jsx)("title", {
                        children: "Tutorials | DigitalOcean",
                      }),
                      (0, oe.jsx)(
                        "meta",
                        {
                          name: "twitter:title",
                          content: "Tutorials | DigitalOcean",
                        },
                        "twitterTitle"
                      ),
                      (0, oe.jsx)(
                        "meta",
                        {
                          name: "og:title",
                          content: "Tutorials | DigitalOcean",
                        },
                        "ogTitle"
                      ),
                      (0, oe.jsx)("link", {
                        rel: "canonical",
                        href: "".concat(de, "/community/tutorials"),
                      }),
                    ],
                  }),
                  h.isFallback
                    ? (0, oe.jsx)("div", { children: "Loading\u2026" })
                    : (0, oe.jsx)(se, {
                        initialType: t,
                        initialSubType: i,
                        initialLanguage: n,
                        initialTimeRange: l,
                        initialSortBy: u,
                        initialRecords: c,
                        initialMoreResults: p,
                        initialMostPopularRecords: d,
                        initialMostPopularMoreResults: g,
                        tags: m,
                        popularTopics: y,
                        featureTutorials: f,
                      }),
                ],
              })
            : (0, oe.jsx)(pe.default, { statusCode: 404 });
        };
    },
    98261: function (e, t) {
      "use strict";
      t.Z = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          n = { year: "numeric", month: "long", day: "numeric" };
        return (
          t && ((n.hour = "2-digit"), (n.minute = "2-digit")),
          i && (n.timeZone = "UTC"),
          new Date(e).toLocaleDateString("en-US", n)
        );
      };
    },
    46828: function (e, t, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/community/tutorials",
        function () {
          return i(1007);
        },
      ]);
    },
    93050: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/intro-to-cloud.d49bc5f7.jpeg",
        height: 357,
        width: 750,
        blurDataURL:
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAAAQEBAAAAAAAAAAAAAAAAAAAABv/aAAwDAQACEAMQAAAAofl//8QAGxABAAEFAQAAAAAAAAAAAAAAAQIAAwUSMoH/2gAIAQEAAT8AvoYWcdTtl6Nf/8QAGREAAQUAAAAAAAAAAAAAAAAAAAIDBDFz/9oACAECAQE/AIVP7KP/xAAYEQACAwAAAAAAAAAAAAAAAAAAAgNCc//aAAgBAwEBPwCkWan/2Q==",
      };
    },
  },
  function (e) {
    e.O(
      0,
      [
        1092, 8616, 5935, 1549, 8249, 8417, 9963, 2460, 3984, 8562, 2419, 4834,
        9774, 2888, 179,
      ],
      function () {
        return (t = 46828), e((e.s = t));
        var t;
      }
    );
    var t = e.O();
    _N_E = t;
  },
]);
