"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6424],
  {
    76424: function (i, t, o) {
      o.d(t, {
        Z: function () {
          return Z;
        },
      });
      var n = o(37797),
        e = o(4298),
        d = o.n(e),
        l = o(5918),
        a = o(58069),
        r = o(71778),
        g = o(57243),
        c = o(74034),
        s = o(4486),
        u = o(17534),
        v = o(88134),
        m = (0, n.iv)(
          ["background-color:", ";padding:", ";"],
          v.ZP.grayLightest,
          function (i) {
            return i.sectionPadding || "64px 0";
          }
        ),
        p =
          (n.ZP.div.withConfig({
            displayName: "RotatingContentStyles__StaticCardsTitle",
            componentId: "sc-1m40awq-0",
          })([
            "text-align:center;width:100%;h2{margin-bottom:32px;max-width:600px;}",
          ]),
          n.ZP.div.withConfig({
            displayName: "RotatingContentStyles__StaticCardsWrapper",
            componentId: "sc-1m40awq-1",
          })(["display:flex;flex-direction:row;margin-top:32px;"]),
          n.ZP.div.withConfig({
            displayName: "RotatingContentStyles__StyledCard",
            componentId: "sc-1m40awq-2",
          })(
            [
              "background-color:",
              ";border-radius:24px;box-shadow:0 6px 20px -6px ",
              ";display:flex;flex-basis:33%;flex-wrap:wrap;justify-content:space-between;margin-right:32px;max-width:",
              ";width:100%;:nth-child(3n){margin-right:0;}",
            ],
            v.ZP.white,
            (0, v.E9)(v.ZP.blueCPUInfo, 0.15),
            function (i) {
              return i.maxWidth || "none";
            }
          ),
          n.ZP.div.withConfig({
            displayName: "RotatingContentStyles__StyledCardImage",
            componentId: "sc-1m40awq-3",
          })(["img{max-width:100%;}"]),
          n.ZP.div.withConfig({
            displayName: "RotatingContentStyles__StyledCardContent",
            componentId: "sc-1m40awq-4",
          })(["display:flex;flex-wrap:wrap;margin:32px 40px;width:100%;"]),
          n.ZP.div.withConfig({
            displayName: "RotatingContentStyles__StyledCardTitle",
            componentId: "sc-1m40awq-5",
          })([
            "display:flex;width:100%;h3{font-size:24px;font-weight:600;line-height:32px;text-align:left;}",
          ]),
          n.ZP.div.withConfig({
            displayName: "RotatingContentStyles__StyledCardBody",
            componentId: "sc-1m40awq-6",
          })(["p{margin-bottom:24px;margin-top:0;}"]),
          n.ZP.div.withConfig({
            displayName: "RotatingContentStyles__StyledCardLink",
            componentId: "sc-1m40awq-7",
          })(["width:100%;"]),
          n.ZP.div.withConfig({
            displayName: "RotatingContentStyles__StyledCardIcon",
            componentId: "sc-1m40awq-8",
          })(["img{margin-right:12px;max-width:100%;}"]),
          n.ZP.div.withConfig({
            displayName: "RotatingContentStyles__StyledCardsSection",
            componentId: "sc-1m40awq-9",
          })(["background-color:", ";"], function (i) {
            return (
              (0, v.E9)(v.ZP[i.backgroundColor], i.backgroundOpacity) ||
              v.ZP.white
            );
          }),
          n.ZP.div.withConfig({
            displayName: "RotatingContentStyles__RotatingContentTitle",
            componentId: "sc-1m40awq-10",
          })(
            [
              "display:flex;margin:0 auto;max-width:",
              ";width:100%;h2{font-size:40px;font-weight:700;line-height:48px;margin-bottom:",
              ";margin-top:",
              ";}",
            ],
            function (i) {
              return i.titleWidth || "100%";
            },
            function (i) {
              return i.marginBottom || "0";
            },
            function (i) {
              return i.marginTop || "64px";
            }
          )),
        h = n.ZP.div.withConfig({
          displayName: "RotatingContentStyles__RotatingContentSubtitle",
          componentId: "sc-1m40awq-11",
        })(
          [
            "color:",
            ";margin:",
            " auto ",
            ";max-width:",
            ";text-align:center;width:100%;",
            "{margin:0;}",
          ],
          v.ZP.gray4,
          function (i) {
            return i.marginTop || "0";
          },
          function (i) {
            return i.marginBottom || "32px";
          },
          function (i) {
            return i.subtitleWidth || "640px";
          },
          (0, u.X)(u.A.tablet)
        ),
        x = n.ZP.div.withConfig({
          displayName: "RotatingContentStyles__RotatingContentWrapper",
          componentId: "sc-1m40awq-12",
        })(
          [
            "align-items:",
            ";display:flex;justify-content:space-between;margin:",
            ";",
            "{flex-wrap:wrap;justify-content:center;margin-bottom:0;}",
          ],
          function (i) {
            return "middle" === i.contentAlign ? "center" : "flex-start";
          },
          function (i) {
            return i.contentSpacing || "64px 0";
          },
          (0, u.X)(u.A.desktop)
        ),
        y = n.ZP.div.withConfig({
          displayName: "RotatingContentStyles__RotatingContentText",
          componentId: "sc-1m40awq-13",
        })(
          [
            "margin:0 144px;max-width:",
            ";width:100%;h4{color:",
            ";display:flex;font-size:24px;font-weight:600;line-height:32px;margin-bottom:",
            ";margin-top:",
            ";img{margin-right:8px;}}p{color:",
            ";line-height:1.5;margin-bottom:",
            ";margin-top:",
            ";img{margin-right:24px;margin-top:4px;width:24px;}}",
            "{margin:0;}",
          ],
          function (i) {
            var t = i.maxWidth;
            return void 0 === t ? "416px" : t;
          },
          v.ZP.gray2,
          function (i) {
            return i.titleMarginBottom || "8px";
          },
          function (i) {
            return i.titleMarginTop || "32px";
          },
          v.ZP.gray4,
          function (i) {
            return i.bodyMarginBottom || "24px";
          },
          function (i) {
            return i.bodyMarginTop || "16px";
          },
          (0, u.X)(u.A.tablet)
        ),
        w = n.ZP.div.withConfig({
          displayName: "RotatingContentStyles__RotatingContentMedia",
          componentId: "sc-1m40awq-14",
        })(
          [
            "display:flex;max-width:640px;width:100%;",
            "{justify-content:center;margin-top:32px;:nth-child(1){order:2;}}img{border-radius:24px;width:100%;",
            "{max-width:416px;}}",
          ],
          (0, u.X)(u.A.desktop),
          (0, u.X)(u.A.desktop)
        ),
        f = n.ZP.div.withConfig({
          displayName: "RotatingContentStyles__StyledVideoContainer",
          componentId: "sc-1m40awq-15",
        })(["display:flex;justify-content:center;width:100%;"]),
        C = n.ZP.div.withConfig({
          displayName: "RotatingContentStyles__StyledVideo",
          componentId: "sc-1m40awq-16",
        })([
          "height:auto;max-width:100%;width:auto;div:first-child{border-radius:24px;}",
        ]),
        b =
          ((0, n.iv)(["flex-direction:row-reverse;"]),
          n.ZP.div.withConfig({
            displayName: "RotatingContentStyles__StyledTopWaveBackground",
            componentId: "sc-1m40awq-17",
          })(
            [
              "background-color:",
              ";background-image:url(",
              ");display:flex;height:",
              ";overflow:hidden;width:100%;",
            ],
            function (i) {
              return i.backgroundColor || v.ZP.grayLightest;
            },
            function (i) {
              return i.backgroundImage;
            },
            function (i) {
              return i.waveHeight || "64px";
            }
          )),
        k = n.ZP.div.withConfig({
          displayName: "RotatingContentStyles__StyledBottomWaveBackground",
          componentId: "sc-1m40awq-18",
        })(
          [
            "background-color:",
            ";background-image:url(",
            ");display:flex;height:",
            ";overflow:hidden;width:100%;",
          ],
          function (i) {
            return i.backgroundColor || v.ZP.grayLightest;
          },
          function (i) {
            return i.backgroundImage;
          },
          function (i) {
            return i.waveHeight || "64px";
          }
        ),
        j = n.ZP.div.withConfig({
          displayName: "RotatingContentStyles__StyledRotatingSection",
          componentId: "sc-1m40awq-19",
        })(["background-color:", ";"], function (i) {
          return (
            (0, v.E9)(v.ZP[i.backgroundColor], i.backgroundOpacity) ||
            v.ZP.grayLightest
          );
        }),
        _ = o(85893),
        Z = function (i) {
          var t = i.content,
            o = function (i) {
              return (0, _.jsx)(f, {
                children: (0, _.jsx)(C, {
                  className: "wistia_embed wistia_async_".concat(i),
                  style: { height: "320px", width: "100%", maxWidth: "640px" },
                }),
              });
            };
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (null === t || void 0 === t ? void 0 : t.wistiaLink) &&
                (0, _.jsx)(d(), {
                  src: "//fast.wistia.com/assets/external/E-v1.js",
                  strategy: "lazyOnload",
                }),
              (0, _.jsxs)(S, {
                backgroundColor:
                  null === t || void 0 === t ? void 0 : t.backgroundColor,
                sectionPadding:
                  null === t || void 0 === t ? void 0 : t.sectionPadding,
                children: [
                  (null === t || void 0 === t
                    ? void 0
                    : t.topBackgroundImage) &&
                    (0, _.jsx)(b, {
                      backgroundImage: t.topBackgroundImage,
                      backgroundColor: t.topBackgroundColor,
                      waveHeight: t.waveHeight,
                    }),
                  (0, _.jsxs)(j, {
                    backgroundColor:
                      null !== t && void 0 !== t && t.bodyBackgroundColor
                        ? t.bodyBackgroundColor
                        : "grayLightest",
                    backgroundOpacity:
                      null !== t && void 0 !== t && t.bodyBackgroundColorOpacity
                        ? t.bodyBackgroundColorOpacity
                        : 1,
                    children: [
                      (0, _.jsxs)(a.Z, {
                        children: [
                          (null === t || void 0 === t ? void 0 : t.title) &&
                            (0, _.jsx)(p, {
                              titleWidth:
                                null === t || void 0 === t
                                  ? void 0
                                  : t.titleWidth,
                              marginTop:
                                null === t || void 0 === t
                                  ? void 0
                                  : t.titleMarginTop,
                              marginBottom:
                                null === t || void 0 === t
                                  ? void 0
                                  : t.titleMarginBottom,
                              children: (0, _.jsx)(r.Z, {
                                heroHeading: !0,
                                renderAs: "h2",
                                textAlign: "center",
                                overrideColor:
                                  null === t || void 0 === t
                                    ? void 0
                                    : t.titleColor,
                                children: t.title,
                              }),
                            }),
                          (null === t || void 0 === t ? void 0 : t.subtitle) &&
                            (0, _.jsx)(h, {
                              subtitleWidth:
                                null === t || void 0 === t
                                  ? void 0
                                  : t.subtitleWidth,
                              marginTop:
                                null === t || void 0 === t
                                  ? void 0
                                  : t.subtitleMarginTop,
                              marginBottom:
                                null === t || void 0 === t
                                  ? void 0
                                  : t.subtitleMarginBottom,
                              children: (0, _.jsx)(r.Z, {
                                heroHeading: !0,
                                renderAs: "p",
                                textAlign: "center",
                                overrideColor:
                                  null === t || void 0 === t
                                    ? void 0
                                    : t.subtitleColor,
                                children: t.subtitle,
                              }),
                            }),
                          t.contentLeft
                            ? (0, _.jsx)(_.Fragment, {
                                children: t.section.map(function (i, n) {
                                  var e, d, a, r;
                                  return (0,
                                  _.jsx)(x, { contentSpacing: null === t || void 0 === t ? void 0 : t.contentSpacing, contentAlign: null === t || void 0 === t ? void 0 : t.contentAlign, children: n % 2 === 0 ? (0, _.jsxs)(_.Fragment, { children: [(0, _.jsxs)(y, { titleMarginTop: null === i || void 0 === i ? void 0 : i.titleMarginTop, titleMarginBottom: null === i || void 0 === i ? void 0 : i.titleMarginBottom, bodyMarginTop: null === i || void 0 === i ? void 0 : i.bodyMarginTop, bodyMarginBottom: null === i || void 0 === i ? void 0 : i.bodyMarginBottom, maxWidth: null === i || void 0 === i ? void 0 : i.contentMaxWidth, children: [(0, _.jsxs)("h4", { children: [(null === i || void 0 === i ? void 0 : i.titleLogo) && (0, _.jsx)("img", { alt: "title logo", src: i.titleLogo }), " ", i.title] }), (0, _.jsx)("p", { children: i.body }), (null === i || void 0 === i ? void 0 : i.linkText) && (0, _.jsx)(s.Z, { dashArrow: !0, url: i.link, target: null === i || void 0 === i ? void 0 : i.linkTarget, onClick: null === i || void 0 === i ? void 0 : i.navigateClick, children: i.linkText })] }), (0, _.jsxs)(w, { children: [(null === i || void 0 === i ? void 0 : i.image) && (0, _.jsx)(g.Z, { src: (null === i || void 0 === i || null === (e = i.image) || void 0 === e ? void 0 : e.src) || i.image, alt: (null === i || void 0 === i || null === (d = i.image) || void 0 === d ? void 0 : d.alt) || i.title }), (null === i || void 0 === i ? void 0 : i.videoId) && o(i.videoId)] })] }) : (0, _.jsxs)(_.Fragment, { children: [(0, _.jsxs)(w, { children: [(null === i || void 0 === i ? void 0 : i.image) && (0, _.jsx)(g.Z, { src: (null === i || void 0 === i || null === (a = i.image) || void 0 === a ? void 0 : a.src) || i.image, alt: (null === i || void 0 === i || null === (r = i.image) || void 0 === r ? void 0 : r.alt) || i.title }), (null === i || void 0 === i ? void 0 : i.videoId) && o(i.videoId)] }), (0, _.jsxs)(y, { titleMarginTop: null === i || void 0 === i ? void 0 : i.titleMarginTop, titleMarginBottom: null === i || void 0 === i ? void 0 : i.titleMarginBottom, bodyMarginTop: null === i || void 0 === i ? void 0 : i.bodyMarginTop, bodyMarginBottom: null === i || void 0 === i ? void 0 : i.bodyMarginBottom, children: [(0, _.jsxs)("h4", { children: [(null === i || void 0 === i ? void 0 : i.titleLogo) && (0, _.jsx)("img", { alt: "title logo", src: i.titleLogo }), " ", i.title] }), (0, _.jsx)("p", { children: i.body }), (null === i || void 0 === i ? void 0 : i.linkText) && (0, _.jsx)(s.Z, { dashArrow: !0, url: i.link, target: null === i || void 0 === i ? void 0 : i.linkTarget, onClick: null === i || void 0 === i ? void 0 : i.navigateClick, children: i.linkText })] })] }) }, (0, l.Z)());
                                }),
                              })
                            : (0, _.jsx)(_.Fragment, {
                                children: t.section.map(function (i, n) {
                                  var e, d, a, r;
                                  return (0,
                                  _.jsx)(x, { contentSpacing: null === t || void 0 === t ? void 0 : t.contentSpacing, contentAlign: null === t || void 0 === t ? void 0 : t.contentAlign, children: n % 2 === 0 ? (0, _.jsxs)(_.Fragment, { children: [(0, _.jsxs)(w, { children: [(null === i || void 0 === i ? void 0 : i.image) && (0, _.jsx)(g.Z, { src: (null === i || void 0 === i || null === (e = i.image) || void 0 === e ? void 0 : e.src) || i.image, alt: (null === i || void 0 === i || null === (d = i.image) || void 0 === d ? void 0 : d.alt) || i.title }), (null === i || void 0 === i ? void 0 : i.videoId) && o(i.videoId)] }), (0, _.jsxs)(y, { titleMarginTop: null === i || void 0 === i ? void 0 : i.titleMarginTop, titleMarginBottom: null === i || void 0 === i ? void 0 : i.titleMarginBottom, bodyMarginTop: null === i || void 0 === i ? void 0 : i.bodyMarginTop, bodyMarginBottom: null === i || void 0 === i ? void 0 : i.bodyMarginBottom, children: [(0, _.jsx)("h4", { children: i.title }), (0, _.jsx)("p", { children: i.body }), (null === i || void 0 === i ? void 0 : i.linkText) && (0, _.jsx)(s.Z, { dashArrow: !0, url: i.link, target: null === i || void 0 === i ? void 0 : i.linkTarget, onClick: null === i || void 0 === i ? void 0 : i.navigateClick, children: i.linkText })] })] }) : (0, _.jsxs)(_.Fragment, { children: [(0, _.jsxs)(y, { titleMarginTop: null === i || void 0 === i ? void 0 : i.titleMarginTop, titleMarginBottom: null === i || void 0 === i ? void 0 : i.titleMarginBottom, bodyMarginTop: null === i || void 0 === i ? void 0 : i.bodyMarginTop, bodyMarginBottom: null === i || void 0 === i ? void 0 : i.bodyMarginBottom, children: [(0, _.jsx)("h4", { children: i.title }), (0, _.jsx)("p", { children: i.body }), (null === i || void 0 === i ? void 0 : i.linkText) && (0, _.jsx)(s.Z, { dashArrow: !0, url: i.link, target: null === i || void 0 === i ? void 0 : i.linkTarget, children: i.linkText })] }), (0, _.jsxs)(w, { children: [(null === i || void 0 === i ? void 0 : i.image) && (0, _.jsx)(g.Z, { src: (null === i || void 0 === i || null === (a = i.image) || void 0 === a ? void 0 : a.src) || i.image, alt: (null === i || void 0 === i || null === (r = i.image) || void 0 === r ? void 0 : r.alt) || i.title }), (null === i || void 0 === i ? void 0 : i.videoId) && o(i.videoId)] })] }) }, (0, l.Z)());
                                }),
                              }),
                        ],
                      }),
                      (null === t || void 0 === t
                        ? void 0
                        : t.bottomBackgroundImage) &&
                        (0, _.jsx)(k, {
                          backgroundImage: t.bottomBackgroundImage,
                          backgroundColor: t.bottomBackgroundColor,
                          waveHeight: t.waveHeight,
                        }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        S = (0, n.ZP)(c.Z).withConfig({
          displayName: "RotatingContent___StyledSection",
          componentId: "sc-1pdzi23-0",
        })(["", ""], m);
    },
  },
]);
