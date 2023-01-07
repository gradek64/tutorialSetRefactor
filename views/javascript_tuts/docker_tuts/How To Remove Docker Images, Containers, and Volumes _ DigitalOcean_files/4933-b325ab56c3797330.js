"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4933],
  {
    50309: function (n, i, t) {
      t.d(i, {
        $7: function () {
          return s;
        },
        $w: function () {
          return c;
        },
        BG: function () {
          return S;
        },
        Ek: function () {
          return a;
        },
        Gl: function () {
          return f;
        },
        K3: function () {
          return k;
        },
        LX: function () {
          return v;
        },
        OY: function () {
          return m;
        },
        St: function () {
          return u;
        },
        UL: function () {
          return h;
        },
        _s: function () {
          return e;
        },
        dL: function () {
          return l;
        },
        e2: function () {
          return p;
        },
        ke: function () {
          return x;
        },
        lV: function () {
          return y;
        },
        mp: function () {
          return Z;
        },
        o3: function () {
          return b;
        },
        oZ: function () {
          return C;
        },
        ok: function () {
          return w;
        },
        v0: function () {
          return g;
        },
        yc: function () {
          return _;
        },
      });
      var o = t(17534),
        r = t(88134),
        d = t(37797),
        e = (0, d.iv)(
          ["background-color:", ";padding:", ";", "{padding-top:32px;}"],
          r.ZP.grayLightest,
          function (n) {
            return n.sectionPadding || "64px 0";
          },
          (0, o.X)(o.A.tablet)
        ),
        a = d.ZP.p.withConfig({
          displayName: "StaticCardsStyles__StyledDisclaimer",
          componentId: "sc-16322s4-0",
        })(
          [
            "color:",
            ";display:flex;font-size:14px;margin:64px auto 0;max-width:670px;text-align:center;width:100%;",
          ],
          r.ZP.gray4
        ),
        l = d.ZP.div.withConfig({
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
          function (n) {
            return n.marginBottom || "32px";
          },
          function (n) {
            return n.marginTop || "0";
          },
          function (n) {
            return n.titleWidth || "600px";
          },
          function (n) {
            return n.fontSize && (0, d.iv)(["font-size:", ""], n.fontSize);
          }
        ),
        c = d.ZP.div.withConfig({
          displayName: "StaticCardsStyles__StyledHeadingsContainer",
          componentId: "sc-16322s4-2",
        })([
          "display:flex;flex-direction:column;.headline{margin-bottom:16px;}",
        ]),
        u = d.ZP.div.withConfig({
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
          function (n) {
            return ".".concat(n.columnBreak) || 0;
          },
          (0, o.X)(o.A.tablet),
          (0, o.X)(o.A.desktop),
          (0, o.X)(o.A.desktop, "min"),
          function (n) {
            return n.marginBottom || "0";
          },
          function (n) {
            return n.marginTop || "32px";
          }
        ),
        s = (0, d.iv)(
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
          function (n) {
            return n.cardBackground || r.ZP.white;
          },
          function (n) {
            return (
              n.cardShadow ||
              "0 6px 20px -6px ".concat((0, r.E9)(r.ZP.blueCPUInfo, 0.15))
            );
          },
          function (n) {
            switch (n.columns) {
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
          function (n) {
            return n.maxWidth || "none";
          },
          (0, o.X)(o.A.desktop),
          (0, o.X)(o.A.desktop, "min"),
          function (n) {
            switch (n.columns) {
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
        g = d.ZP.div.withConfig({
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
          function (n) {
            return n.cardContentImageOnly ? "center" : "baseline";
          },
          function (n) {
            return n.color || "none";
          },
          function (n) {
            return n.cardContentImageOnly && "padding: 32px 0";
          },
          function (n) {
            return n.constrainImageWidth && "32px";
          },
          function (n) {
            var i = n.cardContentImageOnly,
              t = n.constrainImageWidth;
            return i ? "" : t ? "80px" : "100%";
          }
        ),
        p = d.ZP.div.withConfig({
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
          function (n) {
            return (
              "top" !== n.contentAlign &&
              (0, d.iv)(["display:flex;flex-wrap:wrap;"])
            );
          },
          function (n) {
            return n.contentMargin || "32px 40px";
          },
          (0, o.X)(o.A.desktop, "min"),
          function (n) {
            return n.cardMinHeight || "auto";
          }
        ),
        m = d.ZP.div.withConfig({
          displayName: "StaticCardsStyles__StyledCardTitle",
          componentId: "sc-16322s4-6",
        })(
          [
            "display:flex;width:100%;h3{font-size:24px;font-weight:600;line-height:32px;margin:0 0 ",
            ";text-align:left;}",
          ],
          function (n) {
            return n.marginBottom || "16px";
          }
        ),
        v = d.ZP.div.withConfig({
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
          r.ZP.gray4,
          r.ZP.blueLight,
          function (n) {
            return n.marginBottom || "64px";
          },
          function (n) {
            return n.marginTop || "20px";
          },
          function (n) {
            return n.subtitleWidth || "640px";
          }
        ),
        h = d.ZP.div.withConfig({
          displayName: "StaticCardsStyles__StyledCardLink",
          componentId: "sc-16322s4-8",
        })(["margin-top:auto;width:100%;"]),
        x = d.ZP.div.withConfig({
          displayName: "StaticCardsStyles__StyledCardBody",
          componentId: "sc-16322s4-9",
        })(
          ["margin-bottom:16px;a{color:", ";text-decoration:none;}"],
          r.ZP.blue2
        ),
        f = d.ZP.div.withConfig({
          displayName: "StaticCardsStyles__StyledCardIcon",
          componentId: "sc-16322s4-10",
        })([
          "margin-right:16px;img{border-radius:4px;height:32px;max-width:100%;min-width:32px;}",
        ]),
        y = d.ZP.ul.withConfig({
          displayName: "StaticCardsStyles__StyledCardList",
          componentId: "sc-16322s4-11",
        })(
          [
            "border-top:1px dashed ",
            ";color:",
            ";display:flex;flex-flow:row wrap;margin-top:24px;padding:24px 0 0;li{display:flex;margin:4px;img{align-self:start;}p{margin:0 8px;}}",
          ],
          r.ZP.gray6,
          r.ZP.gray4
        ),
        C = d.ZP.div.withConfig({
          displayName: "StaticCardsStyles__StyledTopWaveBackground",
          componentId: "sc-16322s4-12",
        })(
          [
            "background-color:",
            ";background-image:url(",
            ");display:flex;height:",
            ";overflow:hidden;width:100%;",
          ],
          function (n) {
            return n.backgroundColor || r.ZP.grayLightest;
          },
          function (n) {
            return n.backgroundImage;
          },
          function (n) {
            return n.waveHeight || "64px";
          }
        ),
        k = d.ZP.div.withConfig({
          displayName: "StaticCardsStyles__StyledBottomWaveBackground",
          componentId: "sc-16322s4-13",
        })(
          [
            "background-color:",
            ";background-image:url(",
            ");display:flex;height:",
            ";overflow:hidden;width:100%;",
          ],
          function (n) {
            return n.backgroundColor || r.ZP.grayLightest;
          },
          function (n) {
            return n.backgroundImage;
          },
          function (n) {
            return n.waveHeight || "64px";
          }
        ),
        w = d.ZP.div.withConfig({
          displayName: "StaticCardsStyles__StyledCardsSection",
          componentId: "sc-16322s4-14",
        })(["background-color:", ";"], function (n) {
          var i;
          return (0,
          r.E9)(r.ZP[n.backgroundColor] || n.backgroundColor || r.ZP.grayLightest, null !== (i = n.backgroundOpacity) && void 0 !== i ? i : 1);
        }),
        S = d.ZP.div.withConfig({
          displayName: "StaticCardsStyles__SubHeadingLink",
          componentId: "sc-16322s4-15",
        })(["display:flex;justify-content:center;margin-bottom:32px;"]),
        b =
          ((0, d.iv)(["padding-bottom:64px;padding-top:64px;"]),
          d.ZP.div.withConfig({
            displayName: "StaticCardsStyles__StyledStaticCardsContainer",
            componentId: "sc-16322s4-16",
          })(
            ["padding-bottom:", ";padding-top:", ";"],
            function (n) {
              return n.paddingBottom || "0";
            },
            function (n) {
              return n.paddingTop || "0";
            }
          )),
        Z = d.ZP.p.withConfig({
          displayName: "StaticCardsStyles__StyledCtaLink",
          componentId: "sc-16322s4-17",
        })(["margin:64px 0 0;text-align:center;"]),
        _ = (0, d.iv)(
          [
            "background-color:",
            ";border-radius:10px;box-shadow:0 6px 20px -6px ",
            ";color:",
            ";display:inline-block;font-size:16px;font-weight:600;line-height:1.5;padding:12px 24px;transition:all 0.2s ease;&:hover{background-color:",
            ";}",
          ],
          r.ZP.blue2,
          (0, r.E9)(r.ZP.blueCPUInfo, 0.15),
          r.ZP.white,
          r.ZP.blue
        );
    },
    54933: function (n, i, t) {
      var o = t(37797),
        r = t(88134),
        d = t(5918),
        e = t(58069),
        a = t(71778),
        l = t(57243),
        c = t(90352),
        u = t(74034),
        s = t(4486),
        g = t(54330),
        p = t(50309),
        m = t(85893),
        v = function (n) {
          var i = n.content,
            t = n.cardKey,
            o = n.link,
            r = n.target,
            d = n.isLinkType,
            e = n.children;
          return d
            ? (0, m.jsx)(
                h,
                {
                  url: o,
                  target: r,
                  maxWidth: i.maxWidth,
                  marginZero:
                    null === i || void 0 === i ? void 0 : i.marginZero,
                  columns: null === i || void 0 === i ? void 0 : i.columns,
                  cardBackground:
                    null === i || void 0 === i ? void 0 : i.cardBackground,
                  cardShadow:
                    null === i || void 0 === i ? void 0 : i.cardShadow,
                  children: e,
                },
                t
              )
            : (0, m.jsx)(
                x,
                {
                  maxWidth: i.maxWidth,
                  marginZero:
                    null === i || void 0 === i ? void 0 : i.marginZero,
                  columns: null === i || void 0 === i ? void 0 : i.columns,
                  cardBackground:
                    null === i || void 0 === i ? void 0 : i.cardBackground,
                  cardShadow:
                    null === i || void 0 === i ? void 0 : i.cardShadow,
                  children: e,
                },
                t
              );
        };
      i.Z = function (n) {
        var i = n.content,
          t = i.cards.reduce(function (n, t, o) {
            return (
              (o % i.rowsPerColumn === 0
                ? n.push([t])
                : n[n.length - 1].push(t)) && n
            );
          }, []);
        return (0, m.jsxs)(m.Fragment, {
          children: [
            (null === i || void 0 === i ? void 0 : i.sectionWaves) &&
              (0, m.jsx)(u.P, {
                wavesColor:
                  null === i || void 0 === i ? void 0 : i.bodyBackgroundColor,
              }),
            (0, m.jsxs)(f, {
              sectionPadding:
                null === i || void 0 === i ? void 0 : i.sectionPadding,
              children: [
                (0, m.jsxs)(p.ok, {
                  backgroundColor:
                    null === i || void 0 === i ? void 0 : i.bodyBackgroundColor,
                  backgroundOpacity:
                    null === i || void 0 === i
                      ? void 0
                      : i.bodyBackgroundColorOpacity,
                  children: [
                    (null === i || void 0 === i
                      ? void 0
                      : i.topBackgroundImage) &&
                      (0, m.jsx)(p.oZ, {
                        backgroundImage: i.topBackgroundImage,
                        backgroundColor: i.topBackgroundColor,
                        waveHeight: i.waveHeight,
                      }),
                    (0, m.jsx)(p.o3, {
                      paddingBottom:
                        null === i || void 0 === i ? void 0 : i.paddingBottom,
                      paddingTop: i.paddingTop,
                      children: (0, m.jsxs)(e.Z, {
                        wide: i.wide,
                        children: [
                          (null === i || void 0 === i ? void 0 : i.title) &&
                            (0, m.jsx)(p.dL, {
                              titleWidth:
                                null === i || void 0 === i
                                  ? void 0
                                  : i.titleWidth,
                              marginTop:
                                null === i || void 0 === i
                                  ? void 0
                                  : i.titleMarginTop,
                              marginBottom:
                                null === i || void 0 === i
                                  ? void 0
                                  : i.titleMarginBottom,
                              fontSize:
                                null === i || void 0 === i
                                  ? void 0
                                  : i.titleFontSize,
                              children: (0, m.jsx)(a.Z, {
                                renderAs: "h2",
                                overrideColor:
                                  null === i || void 0 === i
                                    ? void 0
                                    : i.titleColor,
                                textAlign: "center",
                                children: i.title,
                              }),
                            }),
                          (null === i || void 0 === i ? void 0 : i.subTitle) &&
                            (0, m.jsx)(p.LX, {
                              subtitleWidth:
                                null === i || void 0 === i
                                  ? void 0
                                  : i.subtitleWidth,
                              marginTop:
                                null === i || void 0 === i
                                  ? void 0
                                  : i.subtitleMarginTop,
                              marginBottom:
                                null === i || void 0 === i
                                  ? void 0
                                  : i.subtitleMarginBottom,
                              children: (0, m.jsx)(a.Z, {
                                renderAs: "subheading",
                                children: i.subTitle,
                              }),
                            }),
                          i.subLinkText &&
                            (0, m.jsx)(p.BG, {
                              children: (0, m.jsx)(s.Z, {
                                dashArrow: !0,
                                url: i.subLinkUrl,
                                children: i.subLinkText,
                              }),
                            }),
                          t.map(function (n) {
                            return (0, m.jsx)(
                              p.St,
                              {
                                className:
                                  null === i || void 0 === i
                                    ? void 0
                                    : i.columnBreak,
                                columnBreak:
                                  null === i || void 0 === i
                                    ? void 0
                                    : i.columnBreak,
                                marginTop:
                                  null === i || void 0 === i
                                    ? void 0
                                    : i.cardsMarginTop,
                                marginBottom:
                                  null === i || void 0 === i
                                    ? void 0
                                    : i.cardsMarginBottom,
                                children: n.map(function (n) {
                                  return (0, m.jsxs)(
                                    v,
                                    {
                                      content: i,
                                      link:
                                        null === n || void 0 === n
                                          ? void 0
                                          : n.cardLinkUrl,
                                      target:
                                        null === n || void 0 === n
                                          ? void 0
                                          : n.cardLinkTarget,
                                      isLinkType:
                                        (null === n || void 0 === n
                                          ? void 0
                                          : n.cardLinkUrl) &&
                                        !(
                                          null !== n &&
                                          void 0 !== n &&
                                          n.cardLinkText
                                        ),
                                      children: [
                                        (null === n || void 0 === n
                                          ? void 0
                                          : n.cardImage) &&
                                          (0, m.jsx)(p.v0, {
                                            cardContentImageOnly:
                                              null === i || void 0 === i
                                                ? void 0
                                                : i.cardContentImageOnly,
                                            color:
                                              null === n || void 0 === n
                                                ? void 0
                                                : n.backgroundColor,
                                            constrainImageWidth:
                                              null === i || void 0 === i
                                                ? void 0
                                                : i.constrainImageWidth,
                                            children: (0, m.jsx)(l.Z, {
                                              src: n.cardImage,
                                              alt: n.cardTitle,
                                            }),
                                          }),
                                        !(
                                          null !== i &&
                                          void 0 !== i &&
                                          i.cardContentImageOnly
                                        ) &&
                                          (0, m.jsxs)(p.e2, {
                                            cardMinHeight:
                                              null === i || void 0 === i
                                                ? void 0
                                                : i.cardMinHeight,
                                            contentMargin:
                                              null === i || void 0 === i
                                                ? void 0
                                                : i.cardContentMargin,
                                            contentAlign:
                                              null === i || void 0 === i
                                                ? void 0
                                                : i.cardContentAlign,
                                            children: [
                                              (0, m.jsxs)(p.OY, {
                                                marginTop:
                                                  null === i || void 0 === i
                                                    ? void 0
                                                    : i.cardTitleMarginTop,
                                                marginBottom:
                                                  null === i || void 0 === i
                                                    ? void 0
                                                    : i.cardTitleMarginBottom,
                                                children: [
                                                  (null === n || void 0 === n
                                                    ? void 0
                                                    : n.cardIcon) &&
                                                    (0, m.jsx)(p.Gl, {
                                                      children: (0, m.jsx)(
                                                        l.Z,
                                                        {
                                                          src: n.cardIcon,
                                                          alt: n.cardTitle,
                                                        }
                                                      ),
                                                    }),
                                                  (0, m.jsxs)(p.$w, {
                                                    children: [
                                                      (null === n ||
                                                      void 0 === n
                                                        ? void 0
                                                        : n.cardHeadline) &&
                                                        (0, m.jsx)(a.Z, {
                                                          overrideColor:
                                                            null === n ||
                                                            void 0 === n
                                                              ? void 0
                                                              : n.cardHeadlineColor,
                                                          renderAs: "h6",
                                                          children:
                                                            n.cardHeadline,
                                                        }),
                                                      (null === n ||
                                                      void 0 === n
                                                        ? void 0
                                                        : n.cardTitle) &&
                                                        (0, m.jsx)(a.Z, {
                                                          overrideColor:
                                                            null === n ||
                                                            void 0 === n
                                                              ? void 0
                                                              : n.cardTitleColor,
                                                          renderAs: "h3",
                                                          children: n.cardTitle,
                                                        }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              (0, m.jsx)(p.ke, {
                                                children:
                                                  (null === n || void 0 === n
                                                    ? void 0
                                                    : n.cardBody) &&
                                                  (0, m.jsx)(a.Z, {
                                                    overrideColor: r.ZP.gray4,
                                                    position: "0",
                                                    renderAs: "p",
                                                    children: n.cardBody,
                                                  }),
                                              }),
                                              (null === n || void 0 === n
                                                ? void 0
                                                : n.list) &&
                                                (0, m.jsx)(p.lV, {
                                                  children:
                                                    null === n || void 0 === n
                                                      ? void 0
                                                      : n.list.map(function (
                                                          n
                                                        ) {
                                                          return (0, m.jsxs)(
                                                            "li",
                                                            {
                                                              children: [
                                                                (0, m.jsx)(
                                                                  "img",
                                                                  {
                                                                    alt: n,
                                                                    src: g.Z
                                                                      .src,
                                                                  }
                                                                ),
                                                                (0, m.jsx)(
                                                                  "p",
                                                                  {
                                                                    children: n,
                                                                  }
                                                                ),
                                                              ],
                                                            },
                                                            n
                                                          );
                                                        }),
                                                }),
                                              (null === n || void 0 === n
                                                ? void 0
                                                : n.cardLinkText) &&
                                                (0, m.jsx)(p.UL, {
                                                  children: (0, m.jsx)(s.Z, {
                                                    dashArrow: !0,
                                                    url:
                                                      null === n || void 0 === n
                                                        ? void 0
                                                        : n.cardLinkUrl,
                                                    onClick:
                                                      null === n || void 0 === n
                                                        ? void 0
                                                        : n.navigateClick,
                                                    target:
                                                      null === n || void 0 === n
                                                        ? void 0
                                                        : n.cardLinkTarget,
                                                    children:
                                                      null === n || void 0 === n
                                                        ? void 0
                                                        : n.cardLinkText,
                                                  }),
                                                }),
                                            ],
                                          }),
                                      ],
                                    },
                                    null === n || void 0 === n
                                      ? void 0
                                      : n.cardTitle
                                  );
                                }),
                              },
                              (0, d.Z)()
                            );
                          }),
                          i.ctaLink &&
                            (0, m.jsx)(p.mp, {
                              children:
                                "textLink" === i.ctaLink.type
                                  ? (0, m.jsx)(s.Z, {
                                      dashArrow: !0,
                                      url: i.ctaLink.url,
                                      children: i.ctaLink.text,
                                    })
                                  : (0, m.jsx)(y, {
                                      dashArrow: !0,
                                      url: i.ctaLink.url,
                                      children: i.ctaLink.text,
                                    }),
                            }),
                        ],
                      }),
                    }),
                    (null === i || void 0 === i
                      ? void 0
                      : i.bottomBackgroundImage) &&
                      (0, m.jsx)(p.K3, {
                        backgroundImage: i.bottomBackgroundImage,
                        backgroundColor: i.bottomBackgroundColor,
                        waveHeight: i.waveHeight,
                      }),
                  ],
                }),
                (null === i || void 0 === i ? void 0 : i.disclaimerText) &&
                  (0, m.jsx)(p.Ek, { children: i.disclaimerText }),
              ],
            }),
            (null === i || void 0 === i ? void 0 : i.sectionWaves) &&
              (0, m.jsx)(u.P, {
                wavesColor:
                  null === i || void 0 === i ? void 0 : i.bodyBackgroundColor,
                flip: !0,
              }),
          ],
        });
      };
      var h = (0, o.ZP)(c.Z).withConfig({
          displayName: "StaticCards___StyledLazyLink",
          componentId: "sc-o78p5g-0",
        })(["", ""], p.$7),
        x = (0, o.ZP)("div").withConfig({
          displayName: "StaticCards___StyledDiv",
          componentId: "sc-o78p5g-1",
        })(["", ""], p.$7),
        f = (0, o.ZP)(u.Z).withConfig({
          displayName: "StaticCards___StyledSection",
          componentId: "sc-o78p5g-2",
        })(["", ""], p._s),
        y = (0, o.ZP)(c.Z).withConfig({
          displayName: "StaticCards___StyledLazyLink2",
          componentId: "sc-o78p5g-3",
        })(["", ""], p.yc);
    },
    54330: function (n, i) {
      i.Z = {
        src: "/_next/static/media/green-checkmark.3c14b55a.svg",
        height: 24,
        width: 32,
      };
    },
  },
]);
