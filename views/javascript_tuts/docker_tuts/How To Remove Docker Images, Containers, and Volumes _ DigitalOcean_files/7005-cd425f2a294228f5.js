"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7005],
  {
    87005: function (t, i, n) {
      n.d(i, {
        Z: function () {
          return F;
        },
      });
      var o = n(37797),
        e = n(88134),
        r = n(58069),
        a = n(71778),
        l = n(74034),
        d = n(4486),
        c = n(73729),
        s = n(53967),
        g = n(17534),
        p = n(87288),
        u = n(90352),
        h = "/_next/static/media/divider.a0261a5b.svg",
        m = "/_next/static/media/dividerWhite.0d9aca76.svg",
        x = (0, o.iv)(
          ["background-color:", ";padding:", ";", "{padding-top:32px;}"],
          e.ZP.gray10,
          function (t) {
            return t.sectionPadding || "64px 0";
          },
          (0, g.X)(g.A.tablet)
        ),
        b = o.ZP.p.withConfig({
          displayName: "PricingStaticCardsStyles__StyledDisclaimer",
          componentId: "sc-1bg8nrr-0",
        })(
          [
            "color:",
            ";display:flex;font-size:14px;margin:64px auto 0;max-width:670px;text-align:center;width:100%;",
          ],
          e.ZP.gray4
        ),
        f = o.ZP.div.withConfig({
          displayName: "PricingStaticCardsStyles__StaticCardsTitle",
          componentId: "sc-1bg8nrr-1",
        })(
          [
            "width:100%;h2{margin-bottom:",
            ";margin-top:",
            ";max-width:",
            ";text-align:",
            ";}",
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
            return t.titleAlignment ? t.titleAlignment : "center";
          }
        ),
        y =
          (o.ZP.div.withConfig({
            displayName: "PricingStaticCardsStyles__StyledHeadingsContainer",
            componentId: "sc-1bg8nrr-2",
          })([
            "display:flex;flex-direction:column;.headline{margin-bottom:16px;}",
          ]),
          o.ZP.li.withConfig({
            displayName: "PricingStaticCardsStyles__StyledSpecItem",
            componentId: "sc-1bg8nrr-3",
          })(
            [
              "margin-bottom:12px;&.light{p{color:",
              ";}}p{margin:0;}.name{color:",
              ";font-family:",
              ";font-size:20px;font-weight:500;line-height:1.4;}.value{color:",
              ";font-size:16px;line-height:1.5;}",
            ],
            e.ZP.white,
            e.ZP.gray2,
            (0, p.Z)("primary"),
            e.ZP.gray4
          )),
        C = o.ZP.ul.withConfig({
          displayName: "PricingStaticCardsStyles__StyledFeatureSpecs",
          componentId: "sc-1bg8nrr-4",
        })([
          "margin-bottom:32px;&:last-child{margin-bottom:0;}li{&:last-child{margin-bottom:0;}}",
        ]),
        v = o.ZP.ul.withConfig({
          displayName: "PricingStaticCardsStyles__StyledFeatureList",
          componentId: "sc-1bg8nrr-5",
        })(
          ["color:", ";display:flex;flex-direction:column;list-style:none;"],
          function (t) {
            return "light" === t.textColor ? e.ZP.white : e.ZP.gray4;
          }
        ),
        w = o.ZP.li.withConfig({
          displayName: "PricingStaticCardsStyles__StyledFeatureItem",
          componentId: "sc-1bg8nrr-6",
        })(
          [
            "color:",
            ";display:flex;font-size:16px;line-height:1.5;margin-bottom:16px;img{align-self:flex-start;margin-right:8px;}",
          ],
          function (t) {
            return t.textColor;
          }
        ),
        P = o.ZP.div.withConfig({
          displayName: "PricingStaticCardsStyles__StaticCardsWrapper",
          componentId: "sc-1bg8nrr-7",
        })(
          [
            "display:flex;flex-direction:row;margin-top:32px;&",
            "{border:none;flex-basis:auto;flex-wrap:nowrap;justify-content:center;",
            "{flex-wrap:wrap;}}",
            "{flex-wrap:wrap;justify-content:center;}",
          ],
          function (t) {
            return ".".concat(t.columnBreak) || 0;
          },
          (0, g.X)(g.A.tablet),
          (0, g.X)(g.A.desktop)
        ),
        S = o.ZP.div.withConfig({
          displayName: "PricingStaticCardsStyles__StyledCardHeaders",
          componentId: "sc-1bg8nrr-8",
        })(
          [
            "display:flex;justify-content:space-between;width:100%;.cardTitles{h3{font-weight:600;line-height:",
            ";}}p{line-height:1.5;}",
          ],
          32 / 24
        ),
        k = o.ZP.div.withConfig({
          displayName: "PricingStaticCardsStyles__StyledInfoBubble",
          componentId: "sc-1bg8nrr-9",
        })(
          [
            "background-color:",
            ";border-radius:24px;height:24px;padding:4px 12px;p{color:",
            ";font-family:",
            ";font-size:12px;margin:0;}",
            "{align-items:center;display:flex;height:auto;justify-content:center;}",
          ],
          function (t) {
            return t.backgroundColor ? t.backgroundColor : null;
          },
          function (t) {
            return t.textColor;
          },
          (0, p.Z)("code"),
          (0, g.X)(g.A.tablet)
        ),
        Z = o.ZP.div.withConfig({
          displayName: "PricingStaticCardsStyles__StyledBottomBubble",
          componentId: "sc-1bg8nrr-10",
        })(
          [
            "align-items:center;background-color:",
            ";border-radius:16px;display:flex;margin-top:16px;padding:16px 24px;width:100%;p{color:",
            ";margin:0;&.name{font-size:18px;font-weight:400;}&.value{font-family:",
            ";font-size:24px;font-weight:600;margin-left:16px;}}",
          ],
          function (t) {
            return t.backgroundColor ? t.backgroundColor : "";
          },
          function (t) {
            return "light" === t.textColor ? e.ZP.white : "";
          },
          (0, p.Z)("primary")
        ),
        _ = o.ZP.div.withConfig({
          displayName: "PricingStaticCardsStyles__StyledCardDivider",
          componentId: "sc-1bg8nrr-11",
        })(
          [
            "border-bottom:0;border-image:url(",
            ") 1% round;border-style:solid;height:1px;margin:32px 0;width:100%;",
          ],
          function (t) {
            return "light" === t.textColor ? m : h;
          }
        ),
        j = (0, o.iv)([
          "font-size:32px;font-weight:bold;margin-bottom:5px;span{font-size:24px;white-space:nowrap;.ast{padding-bottom:4px;position:absolute;}}",
        ]),
        I = o.ZP.div.withConfig({
          displayName: "PricingStaticCardsStyles__StyledCost",
          componentId: "sc-1bg8nrr-12",
        })(
          [
            "position:relative;h2{font-family:",
            ";font-size:52px;line-height:1.25;margin-bottom:32px;margin-top:0;}p{color:",
            ";}&.hasToolTip{.monthText{cursor:pointer;position:relative;span:not(.tooltip){text-decoration:underline;}sup{text-decoration:none;}}&:hover{.tooltip{opacity:1;visibility:visible;}}}.tooltip{border-radius:24px;font-size:12px;line-height:1;opacity:0;padding:12px;position:absolute;right:0;text-align:left;top:-8px;transform:translate(50%,-100%);transition:opacity 0.3s;visibility:hidden;white-space:nowrap;width:max-content;z-index:1000;&.dark{background-color:",
            ";color:",
            ";::after{border-color:",
            " transparent transparent transparent;}}&.light{background-color:",
            ";color:",
            ";::after{border-color:",
            " transparent transparent transparent;}}::after{border-style:solid;border-width:5px;content:'';left:44%;margin-left:-1px;position:absolute;top:100%;}}",
          ],
          (0, p.Z)("code"),
          e.ZP.grayDarker,
          e.ZP.blueLight,
          e.ZP.white,
          e.ZP.blueLight,
          e.ZP.white,
          e.ZP.blueLight,
          e.ZP.white
        ),
        N = (0, o.ZP)(u.Z).withConfig({
          displayName: "PricingStaticCardsStyles__StyledCard",
          componentId: "sc-1bg8nrr-13",
        })(
          [
            "background-color:",
            ";border-radius:24px;box-shadow:0 6px 20px -6px ",
            ";display:flex;flex-direction:column;margin-right:32px;max-width:",
            ";",
            " ",
            " padding:",
            ";position:relative;transition:all 0.2s ease;transition-property:box-shadow,transform;width:100%;.blueCoral,.pinkCoral{position:absolute;&.blueCoral{left:-32px;top:-32px;",
            "{left:-16px;}}&.pinkCoral{bottom:-38px;right:-34px;&.raised{bottom:-4px;}",
            "{right:0;}}}:nth-child(",
            "){margin-right:0;",
            "{margin-right:16px;}}",
            "{flex-basis:auto;margin:16px 8px;}",
          ],
          function (t) {
            return t.backgroundColor ? t.backgroundColor : e.ZP.white;
          },
          (0, e.E9)(e.ZP.blueCPUInfo, 0.15),
          function (t) {
            return t.maxWidth || "none";
          },
          function (t) {
            return t.minHeight && "min-height: ".concat(t.minHeight, ";");
          },
          function (t) {
            return t.url
              ? "\n    &:hover {\n      box-shadow: 0px 10px 20px -2px ".concat(
                  (0, e.E9)(e.ZP.blueCPUInfo, 0.15),
                  ";\n      transform: translatey(-4px);\n    }\n\n    &:active {\n      transform: scale(0.98);\n    }"
                )
              : "";
          },
          function (t) {
            return t.padding || "32px 40px 56px";
          },
          (0, g.X)(g.A.largePhone),
          (0, g.X)(g.A.largePhone),
          function (t) {
            return t.marginZero || "3n";
          },
          (0, g.X)(g.A.desktop),
          (0, g.X)(g.A.desktop)
        ),
        B = o.ZP.div.withConfig({
          displayName: "PricingStaticCardsStyles__StaticCardsSubText",
          componentId: "sc-1bg8nrr-14",
        })(
          [
            "color:",
            ";a{color:",
            ";text-decoration:none;}p{font-size:18px;font-weight:400;line-height:24px;margin:",
            ";max-width:",
            ";text-align:",
            ";width:100%;}",
          ],
          e.ZP.gray4,
          e.ZP.blueLight,
          function (t) {
            return t.subTitleMargin || "8px 0 32px";
          },
          function (t) {
            return t.subTitleTitleWidth || "752px";
          },
          function (t) {
            return t.titleAlignment ? t.titleAlignment : "center";
          }
        ),
        T =
          (o.ZP.div.withConfig({
            displayName: "PricingStaticCardsStyles__StyledCardImage",
            componentId: "sc-1bg8nrr-15",
          })(
            [
              "align-items:baseline;background-color:",
              ";display:flex;justify-content:center;width:100%;img{border-top-left-radius:24px;border-top-right-radius:24px;max-width:100%;width:100%;}",
            ],
            function (t) {
              return t.color || "none";
            }
          ),
          o.ZP.div.withConfig({
            displayName: "PricingStaticCardsStyles__StyledCardContent",
            componentId: "sc-1bg8nrr-16",
          })(["display:flex;flex-flow:column wrap;flex-grow:1;width:100%;"])),
        A =
          (o.ZP.div.withConfig({
            displayName: "PricingStaticCardsStyles__StyledCardTextLink",
            componentId: "sc-1bg8nrr-17",
          })(["margin-top:auto;padding-top:32px;a{color:", ";}"], function (t) {
            return t.textColor;
          }),
          o.ZP.div.withConfig({
            displayName: "PricingStaticCardsStyles__StyledCardTitle",
            componentId: "sc-1bg8nrr-18",
          })([
            "display:flex;width:100%;h3{font-size:24px;font-weight:600;line-height:32px;text-align:left;}",
          ]),
          o.ZP.div.withConfig({
            displayName: "PricingStaticCardsStyles__StyledCardLink",
            componentId: "sc-1bg8nrr-19",
          })(
            [
              "margin-top:auto;a{line-height:1.5;&::after{font-size:1em;}&.light{color:",
              ";}}",
            ],
            e.ZP.white
          )),
        z =
          (o.ZP.div.withConfig({
            displayName: "PricingStaticCardsStyles__StyledCardIcon",
            componentId: "sc-1bg8nrr-20",
          })(["img{margin-right:12px;max-width:100%;}"]),
          o.ZP.div.withConfig({
            displayName: "PricingStaticCardsStyles__StyledTopWaveBackground",
            componentId: "sc-1bg8nrr-21",
          })(
            [
              "background-color:",
              ";background-image:url(",
              ");display:flex;height:",
              ";overflow:hidden;width:100%;",
            ],
            function (t) {
              return t.backgroundColor || e.ZP.gray10;
            },
            function (t) {
              return t.backgroundImage;
            },
            function (t) {
              return t.waveHeight || "64px";
            }
          )),
        H = o.ZP.div.withConfig({
          displayName: "PricingStaticCardsStyles__StyledBottomWaveBackground",
          componentId: "sc-1bg8nrr-22",
        })(
          [
            "background-color:",
            ";background-image:url(",
            ");display:flex;height:",
            ";overflow:hidden;width:100%;",
          ],
          function (t) {
            return t.backgroundColor || e.ZP.gray10;
          },
          function (t) {
            return t.backgroundImage;
          },
          function (t) {
            return t.waveHeight || "64px";
          }
        ),
        L = o.ZP.div.withConfig({
          displayName: "PricingStaticCardsStyles__StyledCardsSection",
          componentId: "sc-1bg8nrr-23",
        })(["background-color:", ";"], function (t) {
          return (
            (0, e.E9)(e.ZP[t.backgroundColor], t.backgroundOpacity) ||
            e.ZP.gray10
          );
        }),
        W = o.ZP.div.withConfig({
          displayName: "PricingStaticCardsStyles__SubHeadingLink",
          componentId: "sc-1bg8nrr-24",
        })(["display:flex;justify-content:center;margin-bottom:32px;"]),
        X =
          ((0, o.iv)(["padding-bottom:64px;padding-top:64px;"]),
          o.ZP.div.withConfig({
            displayName: "PricingStaticCardsStyles__StyledStaticCardsContainer",
            componentId: "sc-1bg8nrr-25",
          })(
            ["padding-bottom:", ";padding-top:", ";"],
            function (t) {
              return t.paddingBottom || "0";
            },
            function (t) {
              return t.paddingTop || "0";
            }
          )),
        E = n(85893),
        F = function (t) {
          var i = t.content,
            n = i.cards.reduce(function (t, n, o) {
              return (
                (o % i.rowsPerColumn === 0
                  ? t.push([n])
                  : t[t.length - 1].push(n)) && t
              );
            }, []);
          return (0, E.jsxs)(M, {
            sectionPadding:
              null === i || void 0 === i ? void 0 : i.sectionPadding,
            children: [
              (0, E.jsxs)(L, {
                backgroundColor:
                  null !== i && void 0 !== i && i.bodyBackgroundColor
                    ? i.bodyBackgroundColor
                    : "grayLightest",
                backgroundOpacity:
                  null !== i && void 0 !== i && i.bodyBackgroundColorOpacity
                    ? i.bodyBackgroundColorOpacity
                    : 1,
                children: [
                  (null === i || void 0 === i
                    ? void 0
                    : i.topBackgroundImage) &&
                    (0, E.jsx)(z, {
                      backgroundImage: i.topBackgroundImage,
                      backgroundColor: i.topBackgroundColor,
                      waveHeight: i.waveHeight,
                    }),
                  (0, E.jsx)(X, {
                    paddingBottom:
                      null === i || void 0 === i ? void 0 : i.paddingBottom,
                    paddingTop: i.paddingTop,
                    children: (0, E.jsxs)(r.Z, {
                      children: [
                        (0, E.jsx)(f, {
                          titleAlignment:
                            null === i || void 0 === i
                              ? void 0
                              : i.titleAlignment,
                          titleWidth:
                            null === i || void 0 === i ? void 0 : i.titleWidth,
                          marginTop:
                            null === i || void 0 === i
                              ? void 0
                              : i.titleMarginTop,
                          marginBottom:
                            null === i || void 0 === i
                              ? void 0
                              : i.titleMarginBottom,
                          children: (0, E.jsx)(a.Z, {
                            renderAs: "h2",
                            textAlign: "center",
                            children: i.title,
                          }),
                        }),
                        (null === i || void 0 === i ? void 0 : i.subTitle) &&
                          (0, E.jsx)(B, {
                            titleAlignment:
                              null === i || void 0 === i
                                ? void 0
                                : i.titleAlignment,
                            titleWidth:
                              null === i || void 0 === i
                                ? void 0
                                : i.subTitleTitleWidth,
                            subTitleMargin:
                              null === i || void 0 === i
                                ? void 0
                                : i.subTitleMargin,
                            children: (0, E.jsx)(a.Z, {
                              renderAs: "subheading",
                              children: i.subTitle,
                            }),
                          }),
                        i.subLinkText &&
                          (0, E.jsx)(W, {
                            children: (0, E.jsx)(d.Z, {
                              dashArrow: !0,
                              url: i.subLinkUrl,
                              children: i.subLinkText,
                            }),
                          }),
                        n.map(function (t) {
                          return (0, E.jsx)(
                            P,
                            {
                              className:
                                null === i || void 0 === i
                                  ? void 0
                                  : i.columnBreak,
                              columnBreak:
                                null === i || void 0 === i
                                  ? void 0
                                  : i.columnBreak,
                              children: t.map(function (t) {
                                var n, o, r, l, g, p, u;
                                return (0, E.jsxs)(
                                  N,
                                  {
                                    padding: i.cardPadding,
                                    url: t.url,
                                    backgroundColor: t.backgroundColor,
                                    maxWidth: i.maxWidth,
                                    minHeight: i.minHeight,
                                    marginZero:
                                      null === i || void 0 === i
                                        ? void 0
                                        : i.marginZero,
                                    columns:
                                      null === i || void 0 === i
                                        ? void 0
                                        : i.columns,
                                    children: [
                                      (t.coralfy || t.coralfyRaised) &&
                                        (0, E.jsxs)(E.Fragment, {
                                          children: [
                                            (0, E.jsx)("img", {
                                              alt: "blue coral",
                                              className: "blueCoral",
                                              src: c.Z.src,
                                            }),
                                            (0, E.jsx)("img", {
                                              alt: "pink coral",
                                              className: "pinkCoral ".concat(
                                                t.coralfyRaised && "raised"
                                              ),
                                              src: s.Z.src,
                                            }),
                                          ],
                                        }),
                                      (0, E.jsxs)(S, {
                                        children: [
                                          (0, E.jsxs)("div", {
                                            className: "cardTitles",
                                            children: [
                                              t.title &&
                                                (0, E.jsx)(a.Z, {
                                                  overrideColor:
                                                    "light" === t.textColor
                                                      ? e.ZP.white
                                                      : "",
                                                  renderAs: "h3",
                                                  small: !0,
                                                  children: t.title,
                                                }),
                                              t.subtitle &&
                                                (0, E.jsx)(a.Z, {
                                                  overrideColor:
                                                    "light" === t.textColor
                                                      ? e.ZP.white
                                                      : "",
                                                  renderAs: "p",
                                                  children: t.subtitle,
                                                }),
                                            ],
                                          }),
                                          (null === t ||
                                          void 0 === t ||
                                          null === (n = t.infoBubble) ||
                                          void 0 === n
                                            ? void 0
                                            : n.text) &&
                                            (0, E.jsx)(k, {
                                              textColor:
                                                "light" === t.textColor
                                                  ? e.ZP.blueLight
                                                  : e.ZP.white,
                                              backgroundColor:
                                                t.infoBubble.backgroundColor,
                                              children: (0, E.jsx)("p", {
                                                children: t.infoBubble.text,
                                              }),
                                            }),
                                        ],
                                      }),
                                      (0, E.jsx)(_, { textColor: t.textColor }),
                                      (0, E.jsxs)(T, {
                                        children: [
                                          (0, E.jsx)(I, {
                                            className: "".concat(
                                              t.tooltip ? "hasToolTip" : ""
                                            ),
                                            children: (0, E.jsxs)(O, {
                                              overrideColor:
                                                "light" === t.textColor
                                                  ? e.ZP.white
                                                  : "",
                                              renderAs: "h2",
                                              children: [
                                                "$",
                                                t.cost,
                                                null !== t &&
                                                void 0 !== t &&
                                                null !== (o = t.tooltip) &&
                                                void 0 !== o &&
                                                o.text
                                                  ? (0, E.jsxs)("span", {
                                                      className: "monthText",
                                                      children: [
                                                        (0, E.jsx)("span", {
                                                          className:
                                                            "tooltip ".concat(
                                                              "light" ===
                                                                t.textColor
                                                                ? "light"
                                                                : "dark"
                                                            ),
                                                          children:
                                                            t.tooltip.text,
                                                        }),
                                                        (0, E.jsx)("span", {
                                                          children: "/month",
                                                        }),
                                                        (0, E.jsx)("sup", {
                                                          children: "*",
                                                        }),
                                                      ],
                                                    })
                                                  : (0, E.jsxs)(E.Fragment, {
                                                      children: [
                                                        (0, E.jsx)("wbr", {}),
                                                        (0, E.jsx)("span", {
                                                          children: t.costValue
                                                            ? t.costValue
                                                            : "/month",
                                                        }),
                                                      ],
                                                    }),
                                              ],
                                            }),
                                          }),
                                          (null === (r = t.specs) ||
                                          void 0 === r
                                            ? void 0
                                            : r.length) > 0 &&
                                            (0, E.jsx)(C, {
                                              children: t.specs.map(function (
                                                i
                                              ) {
                                                return (0, E.jsxs)(
                                                  y,
                                                  {
                                                    className:
                                                      "light" === t.textColor
                                                        ? "light"
                                                        : "dark",
                                                    children: [
                                                      (0, E.jsx)("p", {
                                                        className: "name",
                                                        children: i.name,
                                                      }),
                                                      (0, E.jsx)("p", {
                                                        className: "value",
                                                        children: i.value,
                                                      }),
                                                    ],
                                                  },
                                                  i.name
                                                );
                                              }),
                                            }),
                                          (null === (l = t.features) ||
                                          void 0 === l
                                            ? void 0
                                            : l.length) > 0 &&
                                            (0, E.jsx)(v, {
                                              children: t.features.map(
                                                function (t) {
                                                  return (0, E.jsxs)(
                                                    w,
                                                    {
                                                      textColor: t.textColor
                                                        ? t.textColor
                                                        : e.ZP.gray4,
                                                      children: [
                                                        (0, E.jsx)("img", {
                                                          alt: "checkmark",
                                                          src: t.img.src,
                                                        }),
                                                        t.text,
                                                      ],
                                                    },
                                                    t.text
                                                  );
                                                }
                                              ),
                                            }),
                                          t.bottomBubble &&
                                            (0, E.jsxs)(Z, {
                                              textColor: t.textColor,
                                              backgroundColor:
                                                t.bottomBubble.backgroundColor,
                                              children: [
                                                (0, E.jsxs)("p", {
                                                  className: "name",
                                                  children: [
                                                    t.bottomBubble.name,
                                                    ":",
                                                  ],
                                                }),
                                                (0, E.jsx)("p", {
                                                  className: "value",
                                                  children:
                                                    t.bottomBubble.value,
                                                }),
                                              ],
                                            }),
                                          t.link &&
                                            (0, E.jsx)(A, {
                                              children: (0, E.jsx)(d.Z, {
                                                className:
                                                  "light" === t.textColor
                                                    ? "light"
                                                    : "dark",
                                                dashArrow: !0,
                                                url:
                                                  null === (g = t.link) ||
                                                  void 0 === g
                                                    ? void 0
                                                    : g.url,
                                                onClick:
                                                  null === (p = t.link) ||
                                                  void 0 === p
                                                    ? void 0
                                                    : p.navigateClick,
                                                children:
                                                  null === (u = t.link) ||
                                                  void 0 === u
                                                    ? void 0
                                                    : u.title,
                                              }),
                                            }),
                                        ],
                                      }),
                                    ],
                                  },
                                  t.id
                                );
                              }),
                            },
                            t
                              .map(function (t) {
                                return t.id;
                              })
                              .join(",")
                          );
                        }),
                      ],
                    }),
                  }),
                  (null === i || void 0 === i
                    ? void 0
                    : i.bottomBackgroundImage) &&
                    (0, E.jsx)(H, {
                      backgroundImage: i.bottomBackgroundImage,
                      backgroundColor: i.bottomBackgroundColor,
                      waveHeight: i.waveHeight,
                    }),
                ],
              }),
              (null === i || void 0 === i ? void 0 : i.disclaimerText) &&
                (0, E.jsx)(b, { children: i.disclaimerText }),
            ],
          });
        },
        M = (0, o.ZP)(l.Z).withConfig({
          displayName: "PricingStaticCards___StyledSection",
          componentId: "sc-hqrhr0-0",
        })(["", ""], x),
        O = (0, o.ZP)(a.Z).withConfig({
          displayName: "PricingStaticCards___StyledHeading",
          componentId: "sc-hqrhr0-1",
        })(["", ""], j);
    },
    73729: function (t, i) {
      i.Z = {
        src: "/_next/static/media/blue-coral.bc929368.svg",
        height: 113,
        width: 76,
      };
    },
    53967: function (t, i) {
      i.Z = {
        src: "/_next/static/media/pink-coral.aa48743c.svg",
        height: 108,
        width: 94,
      };
    },
  },
]);
