(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7944],
  {
    92545: function (t, e, i) {
      "use strict";
      i.d(e, {
        Z: function () {
          return D;
        },
      });
      var o = i(37797),
        n = i(67294),
        a = i(88134),
        r = i(62080),
        d = i(58069),
        l = i(71778),
        s = i(57243),
        c = i(74034),
        p = i(4486),
        g = i(50309),
        u = "/_next/static/media/play-icon-boxed.5d1edba4.svg",
        m = i(17534),
        h = (0, o.F4)(["from{opacity:0;}to{opacity:1;}"]),
        x = (0, o.F4)(["from{width:0;}to{width:100%;}"]),
        f = o.ZP.div.withConfig({
          displayName: "AutoSliderBandStyles__StyledBackgroundHolder",
          componentId: "sc-g2q3c3-0",
        })(["background-color:", ";padding:40px 0;"], function (t) {
          return (
            (0, a.E9)(a.ZP[t.backgroundColor], t.backgroundOpacity) ||
            a.ZP.white
          );
        }),
        y = (0, o.iv)(["background-color:", ";"], a.ZP.grayLightest),
        b = o.ZP.div.withConfig({
          displayName: "AutoSliderBandStyles__StyledSliderContainer",
          componentId: "sc-g2q3c3-1",
        })(
          [
            "animation:",
            " 2s ease-in-out;display:flex;padding:32px 0;z-index:0;",
            "{flex-direction:column;}",
          ],
          h,
          (0, m.X)(m.A.desktop)
        ),
        w = o.ZP.div.withConfig({
          displayName: "AutoSliderBandStyles__StyledInfoCardHolder",
          componentId: "sc-g2q3c3-2",
        })(
          [
            "max-width:640px;position:relative;width:50%;",
            "{max-width:none;width:100%;}",
          ],
          (0, m.X)(m.A.desktop)
        ),
        v = o.ZP.div.withConfig({
          displayName: "AutoSliderBandStyles__StyledSlideInfoCard",
          componentId: "sc-g2q3c3-3",
        })(
          [
            "background-color:",
            ";border-radius:24px;margin:64px -64px 0 0;padding:32px 40px;position:relative;width:100%;z-index:1;",
            "{margin:24px 0 0;width:100%;}",
          ],
          function (t) {
            var e = t.backgroundColor;
            return a.ZP[e];
          },
          (0, m.X)(m.A.desktop)
        ),
        _ = o.ZP.div.withConfig({
          displayName: "AutoSliderBandStyles__StyledInfoCardHeader",
          componentId: "sc-g2q3c3-4",
        })(
          [
            "align-items:center;display:flex;justify-content:space-between;margin-bottom:40px;img{max-width:150px;}",
            "{align-items:flex-start;flex-direction:column-reverse;}",
          ],
          (0, m.X)(m.A.largePhone)
        ),
        Z = o.ZP.div.withConfig({
          displayName: "AutoSliderBandStyles__StyledInfoCardFooter",
          componentId: "sc-g2q3c3-5",
        })([
          "align-items:center;display:flex;justify-content:space-between;margin-top:40px;",
        ]),
        S = o.ZP.p.withConfig({
          displayName: "AutoSliderBandStyles__StyledP",
          componentId: "sc-g2q3c3-6",
        })(["color:", ";"], a.ZP.white),
        P = (0, o.iv)(["align-items:center;display:flex;"]),
        C = (0, o.iv)(["margin-right:16px;"]),
        k = o.ZP.span.withConfig({
          displayName: "AutoSliderBandStyles__StyledDivider",
          componentId: "sc-g2q3c3-7",
        })(["border-left:1px dashed ", ";height:24px;"], a.ZP.white),
        j = (0, o.iv)(
          [
            "background-color:",
            " !important;border:none !important;margin-left:16px;overflow:hidden;position:relative;white-space:nowrap;&:hover{background-color:",
            " !important;}&:first-of-type{margin-left:0;}",
          ],
          (0, a.E9)(a.ZP.white, 0.1),
          (0, a.E9)(a.ZP.white, 0.25)
        ),
        I = o.ZP.span.withConfig({
          displayName: "AutoSliderBandStyles__StyledButtonMask",
          componentId: "sc-g2q3c3-8",
        })(
          [
            "animation:",
            " 15s linear;animation-play-state:",
            ";background-color:",
            ";height:100%;left:0;position:absolute;",
          ],
          x,
          function (t) {
            return t.manual ? "paused" : "play";
          },
          (0, a.E9)(a.ZP.white, 0.25)
        ),
        N = o.ZP.div.withConfig({
          displayName: "AutoSliderBandStyles__StyledButtonContainer",
          componentId: "sc-g2q3c3-9",
        })(
          ["display:flex;", "{margin-bottom:32px;}"],
          (0, m.X)(m.A.largePhone)
        ),
        B = (0, o.iv)(["position:absolute;top:-128px;z-index:-1;"]),
        A = (0, o.iv)(
          [
            "position:absolute;right:-72px;top:-128px;z-index:1;",
            "{right:-20px;top:-64px;}",
            "{right:0;top:48px;z-index:-1;}",
          ],
          (0, m.X)(m.A.desktop),
          (0, m.X)(m.A.largePhone)
        ),
        L = o.ZP.div.withConfig({
          displayName: "AutoSliderBandStyles__StyledSlideImageCard",
          componentId: "sc-g2q3c3-10",
        })(
          [
            "margin:0 0 64px -64px;position:relative;width:50%;",
            "{margin:24px 0 0;width:100%;}",
          ],
          (0, m.X)(m.A.desktop)
        ),
        T = (0, o.iv)(["border-radius:24px;max-width:100%;"]),
        H = i(85893),
        z = function (t) {
          var e,
            i,
            o,
            r,
            d,
            c,
            g,
            m,
            h = t.data,
            x = t.numberSlides,
            f = t.slideToShow,
            y = t.slideToShowSetter,
            P = (0, n.useState)(!1),
            C = P[0],
            j = P[1],
            B = (0, n.useRef)(void 0);
          return (
            (0, n.useEffect)(
              function () {
                return (
                  C ||
                    (B.current = setInterval(function () {
                      y(f === x - 1 ? 0 : f + 1);
                    }, 15e3)),
                  function () {
                    return clearInterval(B.current);
                  }
                );
              },
              [C, x, f, y]
            ),
            (0, H.jsxs)(
              b,
              {
                children: [
                  (0, H.jsxs)(w, {
                    children: [
                      (0, H.jsx)(O, { src: h.garnish.url }),
                      (0, H.jsxs)(v, {
                        backgroundColor: h.info.backgroundColor,
                        children: [
                          (0, H.jsxs)(_, {
                            children: [
                              (null === (e = h.info) || void 0 === e
                                ? void 0
                                : e.logo) &&
                                (0, H.jsx)(s.Z, { src: h.info.logo }),
                              x > 1 &&
                                (0, H.jsxs)(N, {
                                  children: [
                                    (0, H.jsx)(X, {
                                      className:
                                        "is-outlined is-small is-squared is-white",
                                      onClick: function () {
                                        0 === f
                                          ? (j(!0), y(x - 1))
                                          : (j(!0), y(f - 1));
                                      },
                                      type: "button",
                                      children: "<\u2014",
                                    }),
                                    (0, H.jsxs)(U, {
                                      className:
                                        "is-outlined is-small is-squared is-white",
                                      onClick: function () {
                                        f === x - 1
                                          ? (j(!0), y(0))
                                          : (j(!0), y(f + 1));
                                      },
                                      type: "button",
                                      children: [
                                        (0, H.jsx)(I, { manual: C }),
                                        "\u2014>",
                                      ],
                                    }),
                                  ],
                                }),
                            ],
                          }),
                          (null === h ||
                          void 0 === h ||
                          null === (i = h.info) ||
                          void 0 === i
                            ? void 0
                            : i.title) &&
                            (0, H.jsx)(l.Z, {
                              overrideColor: a.ZP.white,
                              renderAs: "h4",
                              children: h.info.title,
                            }),
                          (null === h ||
                          void 0 === h ||
                          null === (o = h.info) ||
                          void 0 === o
                            ? void 0
                            : o.copy) &&
                            (0, H.jsxs)(S, {
                              children: ["\u201c", h.info.copy, "\u201d"],
                            }),
                          (null === h ||
                          void 0 === h ||
                          null === (r = h.info) ||
                          void 0 === r
                            ? void 0
                            : r.author) &&
                            (0, H.jsxs)(S, {
                              children: ["\u2014", h.info.author],
                            }),
                          (0, H.jsxs)(Z, {
                            children: [
                              (null === h ||
                              void 0 === h ||
                              null === (d = h.info) ||
                              void 0 === d
                                ? void 0
                                : d.caseStudyUrl) &&
                                (0, H.jsxs)(R, {
                                  url: h.info.caseStudyUrl,
                                  white: !0,
                                  children: [
                                    (0, H.jsx)(E, { src: u }),
                                    "Check out the case study",
                                  ],
                                }),
                              (null === h ||
                              void 0 === h ||
                              null === (c = h.info) ||
                              void 0 === c
                                ? void 0
                                : c.caseStudyUrl) &&
                                (null === h ||
                                void 0 === h ||
                                null === (g = h.info) ||
                                void 0 === g
                                  ? void 0
                                  : g.fullStoryUrl) &&
                                (0, H.jsx)(k, {}),
                              (null === h ||
                              void 0 === h ||
                              null === (m = h.info) ||
                              void 0 === m
                                ? void 0
                                : m.fullStoryUrl) &&
                                (0, H.jsx)(p.Z, {
                                  dashArrow: !0,
                                  white: !0,
                                  url: h.info.fullStoryUrl,
                                  children: "Read the full story",
                                }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, H.jsxs)(L, {
                    children: [
                      (0, H.jsx)(F, { src: h.image.url }),
                      (0, H.jsx)(V, { src: h.garnish2.url }),
                    ],
                  }),
                ],
              },
              f
            )
          );
        },
        D = function (t) {
          var e = t.content,
            i = (0, n.useState)(0),
            o = i[0],
            a = i[1],
            r = (0, n.useCallback)(
              function (t) {
                a(t);
              },
              [a]
            );
          return (0, H.jsxs)(q, {
            sectionPadding: e.sectionPadding,
            children: [
              (null === e || void 0 === e ? void 0 : e.topBackgroundImage) &&
                (0, H.jsx)(g.oZ, {
                  backgroundImage: e.topBackgroundImage,
                  backgroundColor: e.topBackgroundColor,
                }),
              (0, H.jsx)(f, {
                backgroundColor: e.bodyBackgroundColor,
                backgroundOpacity: e.bodyBackgroundColorOpacity,
                children: (0, H.jsx)(d.Z, {
                  children: (0, H.jsx)(z, {
                    data: e.slides[o],
                    numberSlides: e.slides.length,
                    slideToShow: o,
                    slideToShowSetter: r,
                  }),
                }),
              }),
              (null === e || void 0 === e ? void 0 : e.bottomBackgroundImage) &&
                (0, H.jsx)(g.K3, {
                  backgroundImage: e.bottomBackgroundImage,
                  backgroundColor: e.bottomBackgroundColor,
                }),
            ],
          });
        },
        O = (0, o.ZP)(s.Z).withConfig({
          displayName: "AutoSliderBand___StyledLazyImage",
          componentId: "sc-234d9z-0",
        })(["", ""], B),
        X = (0, o.ZP)(r.Z).withConfig({
          displayName: "AutoSliderBand___StyledButton",
          componentId: "sc-234d9z-1",
        })(["", ""], j),
        U = (0, o.ZP)(r.Z).withConfig({
          displayName: "AutoSliderBand___StyledButton2",
          componentId: "sc-234d9z-2",
        })(["", ""], j),
        R = (0, o.ZP)(p.Z).withConfig({
          displayName: "AutoSliderBand___StyledTextLink",
          componentId: "sc-234d9z-3",
        })(["", ""], P),
        E = (0, o.ZP)(s.Z).withConfig({
          displayName: "AutoSliderBand___StyledLazyImage2",
          componentId: "sc-234d9z-4",
        })(["", ""], C),
        F = (0, o.ZP)(s.Z).withConfig({
          displayName: "AutoSliderBand___StyledLazyImage3",
          componentId: "sc-234d9z-5",
        })(["", ""], T),
        V = (0, o.ZP)(s.Z).withConfig({
          displayName: "AutoSliderBand___StyledLazyImage4",
          componentId: "sc-234d9z-6",
        })(["", ""], A),
        q = (0, o.ZP)(c.Z).withConfig({
          displayName: "AutoSliderBand___StyledSection",
          componentId: "sc-234d9z-7",
        })(["", ""], y);
    },
    37770: function (t, e, i) {
      "use strict";
      i.d(e, {
        Z: function () {
          return m;
        },
      });
      var o = i(37797),
        n = i(58069),
        a = i(71778),
        r = i(74034),
        d = i(17534),
        l = i(88134),
        s = (0, o.iv)(
          ["background-color:", ";padding:0;text-align:center;"],
          l.ZP.grayLightest
        ),
        c = o.ZP.ul.withConfig({
          displayName: "LogoBandStyles__StyledList",
          componentId: "sc-nucgh4-0",
        })(
          [
            "display:flex;flex-wrap:wrap;gap:56px;justify-content:center;list-style:none;margin-bottom:64px;margin-top:32px;",
            "{margin:auto;width:80%;}",
          ],
          (0, d.X)(d.A.desktop)
        ),
        p = o.ZP.img.withConfig({
          displayName: "LogoBandStyles__StyledCompanyLogo",
          componentId: "sc-nucgh4-1",
        })(["max-width:400px;"]),
        g =
          ((0, o.iv)(
            [
              "color:",
              ";letter-spacing:0.05em;margin:0 auto;opacity:1;text-align:center;text-transform:uppercase;",
            ],
            l.ZP.grayDark
          ),
          (0, o.iv)(["margin-bottom:24px;margin-top:8px;text-align:center;"])),
        u =
          ((0, o.iv)([
            "align-items:flex-end;display:flex;justify-content:center;margin-bottom:10px;margin-top:20px;text-align:center;width:100%;&::after{top:4px;}",
          ]),
          (0, o.iv)(["margin-left:8px;margin-top:8px;"]),
          i(85893)),
        m = function (t) {
          var e = t.content,
            i = e.text,
            o = e.textColor,
            r = e.subtext,
            d = e.subTextColor,
            l = e.logos;
          return (0, u.jsx)(h, {
            id: "logogrid",
            children: (0, u.jsxs)(n.Z, {
              children: [
                i &&
                  (0, u.jsx)(a.Z, {
                    renderAs: "h6",
                    overrideColor: o,
                    children: i,
                  }),
                r &&
                  (0, u.jsx)(x, {
                    renderAs: "subheading",
                    overrideColor: d,
                    children: r,
                  }),
                (0, u.jsx)(c, {
                  children: l.map(function (t) {
                    return (0,
                    u.jsx)("li", { children: (0, u.jsx)(p, { alt: "company logo", src: t.logoURL }) }, t.logoURL);
                  }),
                }),
              ],
            }),
          });
        },
        h = (0, o.ZP)(r.Z).withConfig({
          displayName: "LogoBand___StyledSection",
          componentId: "sc-16hjkqt-0",
        })(["", ""], s),
        x = (0, o.ZP)(a.Z).withConfig({
          displayName: "LogoBand___StyledHeading",
          componentId: "sc-16hjkqt-1",
        })(["", ""], g);
    },
    5477: function (t, e, i) {
      "use strict";
      i.d(e, {
        Z: function () {
          return w;
        },
      });
      var o = i(37797),
        n = i(58069),
        a = i(71778),
        r = i(90352),
        d = i(74034),
        l = i(17534),
        s = i(88134),
        c = (0, o.iv)(
          ["background-color:", ";overflow:hidden;padding:0;"],
          s.ZP.teal3
        ),
        p = (0, o.iv)(
          ["margin:64px auto;", "{padding-bottom:20px;}"],
          (0, l.X)(l.A.desktop)
        ),
        g = (0, o.iv)(
          [
            "display:flex;flex-wrap:wrap;",
            "{flex-direction:column;.column{width:100% !important;}}",
          ],
          (0, l.X)(l.A.tablet)
        ),
        u = (0, o.iv)([
          "align-items:center;display:flex;flex-direction:column;justify-content:center;",
        ]),
        m = (0, o.iv)(
          [
            "font-weight:800;margin-bottom:0;",
            "{line-height:48px !important;}",
          ],
          (0, l.X)(l.A.largePhone)
        ),
        h = o.ZP.div.withConfig({
          displayName: "NewCTABandStyles__StyledNewCTARow",
          componentId: "sc-1s4pwdr-0",
        })(
          [
            "display:flex;justify-content:center;margin:10px 0;p{color:",
            ";font-size:16px;font-weight:400;line-height:24px;margin:0 10px;max-width:640px;text-align:center;}",
          ],
          s.ZP.gray4
        ),
        x = o.ZP.div.withConfig({
          displayName: "NewCTABandStyles__GetStartedWaveWrapper",
          componentId: "sc-1s4pwdr-1",
        })(
          [
            "background-color:",
            ";background-image:url(",
            ");display:flex;height:64px;overflow:hidden;width:100%;",
          ],
          function (t) {
            return t.color || s.ZP.grayLightest;
          },
          "/_next/static/media/ctaWave.6a631f6e.svg"
        ),
        f = (0, o.iv)(
          [
            "align-items:center;background-color:",
            ";border-radius:10px;box-shadow:0 6px 20px -6px ",
            ";color:",
            ";display:flex;font-weight:600;gap:8px;line-height:1.5;padding:12px 24px;transition:all 0.2s ease;&:hover{background-color:",
            ";transition:all 0.2s ease;}&:active{box-shadow:0 0 0;}",
            "{justify-content:center;line-height:24px;}span{line-height:0;}",
          ],
          s.ZP.white,
          (0, s.E9)(s.ZP.blueCPUInfo, 0.15),
          s.ZP.gray2,
          s.ZP.gray10,
          (0, l.X)(l.A.tablet)
        ),
        y = i(85893),
        b = function (t) {
          var e = t.ctaWaveBackgroundColor,
            i = t.headingText,
            o = t.rowText,
            n = t.buttonUrl,
            a = t.buttonText,
            r = t.buttonIcon;
          return (0, y.jsxs)(v, {
            id: "NewCTABand",
            children: [
              (0, y.jsx)(x, { color: e }),
              (0, y.jsx)(_, {
                children: (0, y.jsxs)(Z, {
                  children: [
                    (0, y.jsx)(S, {
                      children: (0, y.jsx)(P, {
                        large: !0,
                        renderAs: "h2",
                        textAlign: "center",
                        children: i,
                      }),
                    }),
                    (0, y.jsx)(h, {
                      children: (0, y.jsx)("p", { children: o }),
                    }),
                    (0, y.jsx)(h, {
                      children: (0, y.jsxs)(C, {
                        url: n,
                        children: [a, r && (0, y.jsx)("span", { children: r })],
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        w = b;
      b.defaultProps = {
        ctaWaveBackgroundColor: null,
        headingText: "Start building today",
        rowText:
          "Sign up now and you'll be up and running on DigitalOcean in just minutes.",
        buttonUrl: "https://cloud.digitalocean.com/registrations/new",
        buttonText: "Sign up to get started",
        buttonIcon: null,
      };
      var v = (0, o.ZP)(d.Z).withConfig({
          displayName: "NewCTABand___StyledSection",
          componentId: "sc-knbsmi-0",
        })(["", ""], c),
        _ = (0, o.ZP)(n.Z).withConfig({
          displayName: "NewCTABand___StyledContainer",
          componentId: "sc-knbsmi-1",
        })(["", ""], p),
        Z = (0, o.ZP)("div").withConfig({
          displayName: "NewCTABand___StyledDiv",
          componentId: "sc-knbsmi-2",
        })(["", ""], u),
        S = (0, o.ZP)("div").withConfig({
          displayName: "NewCTABand___StyledDiv2",
          componentId: "sc-knbsmi-3",
        })(["", ""], g),
        P = (0, o.ZP)(a.Z).withConfig({
          displayName: "NewCTABand___StyledHeading",
          componentId: "sc-knbsmi-4",
        })(["", ""], m),
        C = (0, o.ZP)(r.Z).withConfig({
          displayName: "NewCTABand___StyledLazyLink",
          componentId: "sc-knbsmi-5",
        })(["", ""], f);
    },
    18323: function (t, e, i) {
      "use strict";
      i.d(e, {
        Z: function () {
          return C;
        },
      });
      var o = i(37797),
        n = i(4298),
        a = i.n(n),
        r = i(58069),
        d = i(71778),
        l = i(57243),
        s = i(74034),
        c = i(4486),
        p = i(48523),
        g = i(17534),
        u = i(88134),
        m = (0, o.iv)(
          [
            "background-color:",
            ";padding:",
            ";h2{margin-top:0;}",
            "{padding-top:32px;}",
          ],
          u.ZP.grayLightest,
          function (t) {
            return t.sectionPadding || "64px 0";
          },
          (0, g.X)(g.A.tablet)
        ),
        h = o.ZP.div.withConfig({
          displayName: "VideoBrandburstStyles__StyledBrowserHeader",
          componentId: "sc-5bguab-0",
        })([
          "display:flex;img{border-top-left-radius:40px;border-top-right-radius:40px;max-width:864px;width:100%;}",
        ]),
        x = o.ZP.div.withConfig({
          displayName: "VideoBrandburstStyles__StyledVideoContainer",
          componentId: "sc-5bguab-1",
        })(["margin:0 auto;max-width:864px;position:relative;width:100%;"]),
        f = (0, o.iv)(
          [
            "border-bottom-left-radius:40px;border-bottom-right-radius:40px;box-shadow:0 6px 20px -3px ",
            ";margin:0;max-width:100%;",
          ],
          (0, u.E9)(u.ZP.blueCPUInfo, 0.2)
        ),
        y = o.ZP.div.withConfig({
          displayName: "VideoBrandburstStyles__StyledWistiaVideoContainer",
          componentId: "sc-5bguab-2",
        })(["display:flex;justify-content:center;width:100%;"]),
        b = o.ZP.div.withConfig({
          displayName: "VideoBrandburstStyles__StyledWistiaVideo",
          componentId: "sc-5bguab-3",
        })(
          [
            "height:auto;max-width:100%;width:auto;div:first-child{border-radius:24px;}",
            "{height:432px !important;}",
            "{height:239px !important;}",
          ],
          (0, g.X)(g.A.tablet),
          (0, g.X)(g.A.largePhone)
        ),
        w = (0, o.iv)(
          [
            "align-items:center;display:flex;flex-direction:column;justify-content:center;margin-bottom:32px;text-align:center;h3{color:",
            ";font-size:14px;font-weight:600;}",
          ],
          u.ZP.gray5
        ),
        v = (0, o.iv)(["margin:64px 0 16px;"]),
        _ = (0, o.iv)(
          [
            "color:",
            ";font-size:16px;font-weight:400;line-height:24px;margin:0 auto 32px;max-width:640px;text-align:center;",
            "{text-align:left;}",
          ],
          u.ZP.gray4,
          (0, g.X)(g.A.desktop)
        ),
        Z = (0, o.iv)(["display:block;font-size:16px;margin:0 auto 32px;"]),
        S =
          (o.ZP.div.withConfig({
            displayName: "VideoBrandburstStyles__CloudJourney",
            componentId: "sc-5bguab-4",
          })(
            [
              "align-items:flex-start;background-color:",
              ";border-radius:24px;box-shadow:0 6px 20px -6px ",
              ";display:flex;flex-direction:column;margin:32px auto;max-width:1088px;padding:32px 40px 32px 64px;position:relative;width:100%;img{bottom:0;position:absolute;right:0;",
              "{display:none;}}",
            ],
            u.ZP.blue1,
            (0, u.E9)(u.ZP.blueCPUInfo, 0.15),
            (0, g.X)(g.A.tablet)
          ),
          o.ZP.div.withConfig({
            displayName: "VideoBrandburstStyles__CloudJourneyCopy",
            componentId: "sc-5bguab-5",
          })(
            [
              "max-width:550px;h3{color:",
              ";font-size:32px;font-weight:700;margin:0;}p{color:",
              ";font-size:16px;font-weight:400;}",
            ],
            u.ZP.white,
            u.ZP.gray7
          ),
          o.ZP.iframe.withConfig({
            displayName: "VideoBrandburstStyles__StyledYouTubeIframe",
            componentId: "sc-5bguab-6",
          })([
            "aspect-ratio:16/9;border:none;border-radius:24px;height:100%;width:100%;",
          ])),
        P = i(85893),
        C = function (t) {
          var e,
            i = t.content;
          return (0, P.jsxs)(P.Fragment, {
            children: [
              (null === i || void 0 === i ? void 0 : i.wistiaLink) &&
                (0, P.jsx)(a(), {
                  src: "//fast.wistia.com/assets/external/E-v1.js",
                  strategy: "lazyOnload",
                }),
              (0, P.jsx)(k, {
                sectionPadding:
                  null === i || void 0 === i ? void 0 : i.sectionPadding,
                children: (0, P.jsxs)(r.Z, {
                  children: [
                    (0, P.jsxs)(j, {
                      children: [
                        (null === i || void 0 === i ? void 0 : i.title) &&
                          (0, P.jsx)(I, {
                            large: !0,
                            renderAs: "h2",
                            textAlign: "center",
                            children: i.title,
                          }),
                        (null === i || void 0 === i ? void 0 : i.subHeading) &&
                          (0, P.jsx)(N, {
                            renderAs: "p",
                            textAlign: "center",
                            children: i.subHeading,
                          }),
                        (null === i || void 0 === i ? void 0 : i.linkText) &&
                          (0, P.jsx)("p", {
                            children: (0, P.jsx)(B, {
                              dashArrow: !0,
                              url:
                                null === i || void 0 === i ? void 0 : i.linkUrl,
                              children:
                                null === i || void 0 === i
                                  ? void 0
                                  : i.linkText,
                            }),
                          }),
                      ],
                    }),
                    (null === i || void 0 === i ? void 0 : i.videoUrl) &&
                      (0, P.jsxs)(x, {
                        children: [
                          (0, P.jsx)(h, {
                            children: (0, P.jsx)(l.Z, {
                              src: p.Z.src,
                              alt: "browser UI",
                            }),
                          }),
                          (0, P.jsxs)(A, {
                            autoPlay: "autoplay",
                            loop: !0,
                            muted: !0,
                            playsInline: !0,
                            children: [
                              (0, P.jsx)("source", {
                                src:
                                  null === i || void 0 === i
                                    ? void 0
                                    : i.videoUrl,
                              }),
                              (0, P.jsx)("p", {
                                children:
                                  "Your browser does not support HTML5 video or mp4 video format.",
                              }),
                            ],
                          }),
                        ],
                      }),
                    (null === i || void 0 === i ? void 0 : i.videoId) &&
                      ((e = null === i || void 0 === i ? void 0 : i.videoId),
                      (0, P.jsx)(y, {
                        children: (0, P.jsx)(b, {
                          className: "wistia_embed wistia_async_".concat(e),
                          style: {
                            height: "576px",
                            width: "100%",
                            maxWidth: "1024px",
                          },
                        }),
                      })),
                    (null === i || void 0 === i ? void 0 : i.youtubeId) &&
                      (0, P.jsx)(S, {
                        src: "https://www.youtube-nocookie.com/embed/".concat(
                          i.youtubeId,
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
        k = (0, o.ZP)(s.Z).withConfig({
          displayName: "VideoBrandburst___StyledSection",
          componentId: "sc-1iyp1pu-0",
        })(["", ""], m),
        j = (0, o.ZP)("div").withConfig({
          displayName: "VideoBrandburst___StyledDiv",
          componentId: "sc-1iyp1pu-1",
        })(["", ""], w),
        I = (0, o.ZP)(d.Z).withConfig({
          displayName: "VideoBrandburst___StyledHeading",
          componentId: "sc-1iyp1pu-2",
        })(["", ""], v),
        N = (0, o.ZP)(d.Z).withConfig({
          displayName: "VideoBrandburst___StyledHeading2",
          componentId: "sc-1iyp1pu-3",
        })(["", ""], _),
        B = (0, o.ZP)(c.Z).withConfig({
          displayName: "VideoBrandburst___StyledTextLink",
          componentId: "sc-1iyp1pu-4",
        })(["", ""], Z),
        A = (0, o.ZP)("video").withConfig({
          displayName: "VideoBrandburst___StyledVideo",
          componentId: "sc-1iyp1pu-5",
        })(["", ""], f);
    },
    90756: function (t, e, i) {
      "use strict";
      i.r(e),
        i.d(e, {
          __N_SSG: function () {
            return Pt;
          },
          default: function () {
            return Ct;
          },
        });
      var o = i(11163),
        n = i(88134),
        a = i(99963),
        r = i(92545),
        d = i(37797),
        l = i(58069),
        s = i(71778),
        c = i(57243),
        p = i(74034),
        g = i(17534),
        u = d.ZP.div.withConfig({
          displayName: "HeroBigLogoStyles__StyledContainer",
          componentId: "sc-u9kerf-0",
        })([
          "display:flex;flex-direction:column;justify-content:center;margin:auto;",
        ]),
        m = (0, d.iv)(["z-index:5;"]),
        h = d.ZP.div.withConfig({
          displayName: "HeroBigLogoStyles__StyledLogoContainer",
          componentId: "sc-u9kerf-1",
        })(
          [
            "display:flex;margin:auto;",
            "{margin-top:-32px;img{max-width:200px;}}",
          ],
          (0, g.X)(g.A.tablet)
        ),
        x = d.ZP.div.withConfig({
          displayName: "HeroBigLogoStyles__StyledHeroContainer",
          componentId: "sc-u9kerf-2",
        })(
          [
            "align-items:center;background-color:",
            ";display:flex;height:808px;justify-content:center;overflow:hidden;position:relative;z-index:0;",
            "{padding-top:0;}",
          ],
          function (t) {
            return t.color || n.ZP.grayLightest;
          },
          (0, g.X)(g.A.tablet)
        ),
        f = d.ZP.div.withConfig({
          displayName: "HeroBigLogoStyles__StyledHeroTitle",
          componentId: "sc-u9kerf-3",
        })(["h1{margin:32px 0 16px;}"]),
        y = d.ZP.div.withConfig({
          displayName: "HeroBigLogoStyles__StyledHeroText",
          componentId: "sc-u9kerf-4",
        })(["p{font-size:18px;}"]),
        b = d.ZP.div.withConfig({
          displayName: "HeroBigLogoStyles__HeroImageLeft",
          componentId: "sc-u9kerf-5",
        })(
          [
            "bottom:",
            ";height:",
            ";left:",
            ";position:absolute;width:",
            ";",
            "{opacity:0.1;}",
            "{display:none;}",
          ],
          function (t) {
            return t.bottom || "auto";
          },
          function (t) {
            return t.height || "auto";
          },
          function (t) {
            return t.left || "auto";
          },
          function (t) {
            return t.width || "auto";
          },
          (0, g.X)(g.A.mediumDesktop),
          (0, g.X)(g.A.tablet)
        ),
        w = d.ZP.div.withConfig({
          displayName: "HeroBigLogoStyles__HeroImageRight",
          componentId: "sc-u9kerf-6",
        })(
          [
            "bottom:",
            ";height:",
            ";position:absolute;right:",
            ";width:",
            ";",
            "{opacity:0.1;}",
            "{display:none;}",
          ],
          function (t) {
            return t.bottom || "auto";
          },
          function (t) {
            return t.height || "auto";
          },
          function (t) {
            return t.right || "auto";
          },
          function (t) {
            return t.width || "auto";
          },
          (0, g.X)(g.A.mediumDesktop),
          (0, g.X)(g.A.tablet)
        ),
        v =
          ((0, d.iv)(
            ["display:flex;flex-wrap:wrap;", "{flex-direction:column;}"],
            (0, g.X)(g.A.tablet)
          ),
          (0, d.iv)([
            "align-items:center;display:flex;flex-direction:column;justify-content:center;z-index:1;",
          ]),
          d.ZP.div.withConfig({
            displayName: "HeroBigLogoStyles__StyledSubtext",
            componentId: "sc-u9kerf-7",
          })(["max-width:640px;width:100%;"])),
        _ = (0, d.iv)(
          [
            "color:",
            ";font-size:16px;max-width:640px;text-align:center;width:100%;",
          ],
          n.ZP.gray4
        ),
        Z = d.ZP.div.withConfig({
          displayName: "HeroBigLogoStyles__StyledWhitedRounded",
          componentId: "sc-u9kerf-8",
        })(
          [
            "background-color:",
            ";margin-top:0;position:relative;width:100%;.roundedTop{background-color:",
            ";border-top-left-radius:40px;border-top-right-radius:40px;height:48px;position:absolute;top:-48px;width:100%;}",
          ],
          n.ZP.grayLightest,
          n.ZP.grayLightest
        ),
        S =
          ((0, d.iv)(["margin-bottom:64px;"]),
          (0, d.iv)(["max-width:900px;"]),
          i(85893)),
        P = function (t) {
          var e = t.content;
          return (0, S.jsxs)(S.Fragment, {
            children: [
              (0, S.jsxs)(x, {
                color: e.backgroundColor,
                children: [
                  (0, S.jsx)(b, {
                    width: e.heroImageLeftProperties.width,
                    height: e.heroImageLeftProperties.height,
                    bottom: e.heroImageLeftProperties.bottom,
                    top: e.heroImageLeftProperties.top,
                    left: e.heroImageLeftProperties.left,
                    children: (0, S.jsx)(c.Z, {
                      src: e.imageLeft,
                      alt: "hero image left",
                    }),
                  }),
                  (0, S.jsx)(w, {
                    width: e.heroImageRightProperties.width,
                    height: e.heroImageRightProperties.height,
                    bottom: e.heroImageRightProperties.bottom,
                    top: e.heroImageRightProperties.top,
                    right: e.heroImageRightProperties.right,
                    children: (0, S.jsx)(c.Z, {
                      src: e.imageRight,
                      alt: "hero image right",
                    }),
                  }),
                  (0, S.jsx)(p.Z, {
                    topPadding: !0,
                    children: (0, S.jsx)(l.Z, {
                      children: (0, S.jsxs)(C, {
                        children: [
                          (0, S.jsx)(h, {
                            children: (0, S.jsx)(c.Z, { src: e.imageLogo }),
                          }),
                          (0, S.jsx)(f, {
                            color: e.titleColor,
                            children: (0, S.jsx)(s.Z, {
                              heroHeading: !0,
                              renderAs: "h1",
                              defaultColor: n.ZP.blue1,
                              overrideColor: e.titleColor,
                              textAlign: "center",
                              children: e.title,
                            }),
                          }),
                          (0, S.jsx)(v, {
                            children: (0, S.jsx)(y, {
                              children: (0, S.jsx)(k, {
                                renderAs: "p",
                                textAlign: "center",
                                children: e.text,
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
              (0, S.jsx)(Z, {
                children: (0, S.jsx)("div", { className: "roundedTop" }),
              }),
            ],
          });
        },
        C = (0, d.ZP)(u).withConfig({
          displayName: "HeroBigLogo___StyledStyledContainer",
          componentId: "sc-1mcfw8e-0",
        })(["", ""], m),
        k = (0, d.ZP)(s.Z).withConfig({
          displayName: "HeroBigLogo___StyledHeading",
          componentId: "sc-1mcfw8e-1",
        })(["", ""], _),
        j = i(37770),
        I = i(5477),
        N = i(76424),
        B = i(67294),
        A = i(23937),
        L = i(90352),
        T = i(53017),
        H = "/_next/static/media/anemone-illo.cf08d509.svg",
        z = "/_next/static/media/bubbles-illo.1718f97e.svg",
        D = "/_next/static/media/bubbles-illo-2.c60b32c1.svg",
        O = "/_next/static/media/coral.5b7b44a0.svg",
        X = "/_next/static/media/ellipse.58d8658a.svg",
        U = "/_next/static/media/gutweed-illo.d4f39147.svg",
        R = "/_next/static/media/pbs-illo.64064a54.svg",
        E = i(87288),
        F = d.ZP.div.withConfig({
          displayName: "StyledSocialImpactForm__StyledSocialBackground",
          componentId: "sc-1g9nuye-0",
        })(
          [
            "background-color:",
            ";bottom:0;height:100%;position:absolute;width:100%;z-index:-4;",
            "{display:none;}",
          ],
          n.ZP.grayLightest,
          (0, g.X)(g.A.desktop)
        ),
        V = (0, d.iv)(
          [
            "padding:128px 0 64px;position:relative;",
            "{flex-flow:column wrap;padding:88px 0 64px;}",
            "{background-color:",
            ";padding:48px 24px 0;}.termsLink{margin-top:24px;text-align:center;a{color:",
            ";text-align:center;text-decoration:underline;}}",
          ],
          (0, g.X)(g.A.desktop),
          (0, g.X)(g.A.desktop),
          n.ZP.grayLightest,
          n.ZP.blueHover
        ),
        q =
          ((0, d.iv)(
            [
              "display:flex;flex-flow:row wrap;width:100%;",
              "{flex-flow:column wrap;}",
            ],
            (0, g.X)(g.A.desktop)
          ),
          (0, d.iv)(
            [
              "background-color:",
              ";border:none;border-radius:10px;bottom:32px;cursor:pointer;left:32px;outline:none;padding:12px 20px;position:absolute;",
            ],
            n.ZP.green3
          ),
          d.ZP.div.withConfig({
            displayName:
              "StyledSocialImpactForm__StyledSocialImpactFormContainer",
            componentId: "sc-1g9nuye-1",
          })(
            [
              "align-items:flex-start;background-color:",
              ";border-radius:24px;box-shadow:0 6px 20px -6px ",
              ";display:flex;flex-direction:column;margin:auto;max-width:864px;padding:40px;position:relative;width:100%;.thank-you-wrapper{position:absolute;right:0;top:32px;}button{background-color:",
              ";border:none;border-radius:10px;bottom:32px;color:",
              ";cursor:pointer;font-weight:400;left:32px;margin:0;outline:none;padding:12px 20px;}h2{margin-left:0;text-align:left;}span{width:100%;}p{font-size:16px;margin:0;text-align:left;}.field{display:flex;flex-direction:column;justify-content:space-between;&:nth-child(2){order:1;}&:nth-child(1){max-width:740px;order:3;width:100%;}label{color:",
              ";font-family:",
              ";font-size:16px;text-transform:lowercase;sup{display:none;}}input[type='text'],input[type='email']{border:none;border-bottom:1px solid ",
              ";border-radius:0;padding:8px 0;&:focus{border-color:",
              ";outline:none;}}}label{color:",
              ";font-size:16px;font-weight:600;margin-bottom:8px;width:100%;}section{padding:0;width:100%;}.anchor{padding-bottom:0;padding-top:128px !important;}.alert{background:",
              ";border-radius:8px;bottom:100px;color:",
              ";max-height:fit-content;opacity:1;padding:8px;position:absolute;right:-100px;top:32px;transform:translate(-50%,-50%);transition:opacity 2s linear;visibility:visible;width:300px;}.alert-hidden{opacity:0;transition:visibility 2s,opacity 2s linear;visibility:hidden;}img{z-index:-1;}.formTitle{font-size:40px;font-weight:700;}.subtitle{margin-bottom:24px;}.formSubtitle{font-size:16px;font-weight:400;}.formInputTitle{font-size:16px;font-style:normal;font-weight:600;line-height:24px;}.orangeCoral{bottom:46px;left:-130px;position:absolute;transform:rotate(0.64deg);}.purpleRocks1{bottom:-40px;left:-32px;position:absolute;}.purpleRocks2{position:absolute;right:300px;top:-88px;}.pinkMoon{left:-144px;position:absolute;top:-64px;z-index:-2;}.blueSeaweed{left:-132px;position:absolute;top:-130px;}.purpleAnemone{bottom:-32px;position:absolute;right:-200px;z-index:-1;}.greenTubas{position:absolute;right:-100px;top:-128px;z-index:-3;}",
              "{h2{text-align:left;}img{display:none;}}",
            ],
            n.ZP.white,
            (0, n.E9)(n.ZP.blueCPUInfo, 0.15),
            n.ZP.green3,
            n.ZP.black,
            n.ZP.blue2,
            (0, E.Z)("code"),
            n.ZP.gray8,
            n.ZP.blue2,
            n.ZP.blueLight,
            n.ZP.greenAlert,
            n.ZP.white,
            (0, g.X)(g.A.desktop)
          )),
        W = function () {
          var t = (0, B.useState)(!1),
            e = t[0],
            i = t[1],
            o = (0, B.useCallback)(function () {
              var t, e;
              null === (t = window) ||
                void 0 === t ||
                null === (e = t.MktoForms2) ||
                void 0 === e ||
                e.loadForm("//anchor.digitalocean.com", "113-DTN-266", 1417);
            }, []);
          return (
            (0, A.Z)("//anchor.digitalocean.com/js/forms2/js/forms2.min.js", o),
            (0, S.jsxs)(G, {
              children: [
                (0, S.jsxs)(q, {
                  children: [
                    (0, S.jsx)("img", {
                      alt: "orange",
                      src: O,
                      className: "orangeCoral",
                    }),
                    (0, S.jsx)("img", {
                      alt: "bubbles",
                      src: z,
                      className: "purpleRocks1",
                    }),
                    (0, S.jsx)("img", {
                      alt: "bubbles 2",
                      src: D,
                      className: "purpleRocks2",
                    }),
                    (0, S.jsx)("img", {
                      alt: "pink moon",
                      src: X,
                      className: "pinkMoon",
                    }),
                    (0, S.jsx)("img", {
                      alt: "blue seaweed",
                      src: U,
                      className: "blueSeaweed",
                    }),
                    (0, S.jsx)("img", {
                      alt: "purple anemone",
                      src: H,
                      className: "purpleAnemone",
                    }),
                    (0, S.jsx)("img", {
                      alt: "green tubas",
                      src: R,
                      className: "greenTubas",
                    }),
                    (0, S.jsxs)("div", {
                      className: "alert alert-success ".concat(
                        e ? "alert-shown" : "alert-hidden"
                      ),
                      onTransitionEnd: function () {
                        return i(!1);
                      },
                      children: [
                        (0, S.jsx)("strong", { children: "Success!" }),
                        " ",
                        "Thank you! Please check your email for further details.",
                      ],
                    }),
                    (0, S.jsx)(T.Z, { slug: "social-impact-form" }),
                  ],
                }),
                (0, S.jsxs)("div", {
                  className: "termsLink",
                  children: [
                    "By signing up you agree to the",
                    " ",
                    (0, S.jsx)(L.Z, {
                      url: "/legal/terms-of-service-agreement/",
                      children: "Terms of Service",
                    }),
                    " ",
                    "and",
                    " ",
                    (0, S.jsx)(L.Z, {
                      url: "/legal/privacy-policy/",
                      children: "Privacy Policy.",
                    }),
                  ],
                }),
                (0, S.jsx)(F, {}),
              ],
            })
          );
        },
        G = (0, d.ZP)(p.Z).withConfig({
          displayName: "SocialImpactForm___StyledSection",
          componentId: "sc-17gxno6-0",
        })(["", ""], V),
        M = i(54933),
        Y = d.ZP.div.withConfig({
          displayName: "StatisticsStyles__StyledStatisticsContainer",
          componentId: "sc-1pa99mz-0",
        })(
          [
            "background-color:",
            ";display:flex;justify-content:center;margin-top:0;padding:64px 32px;text-align:center;",
            "{align-items:center;flex-direction:column;padding:32px 0 0;}",
          ],
          function (t) {
            return t.backgroundColor ? t.backgroundColor : n.ZP.grayLightest;
          },
          (0, g.X)(g.A.tablet)
        ),
        J = d.ZP.div.withConfig({
          displayName: "StatisticsStyles__StyledStat",
          componentId: "sc-1pa99mz-1",
        })(
          [
            "color:",
            ";display:inline-block;font-size:20px;font-weight:500;line-height:28px;margin-right:56px;max-width:228px;text-align:left;width:100%;&:nth-child(4){margin-right:0;}",
            "{margin-bottom:32px;margin-right:0;padding:0 20px;}",
            "{min-width:100%;}",
          ],
          n.ZP.gray4,
          (0, g.X)(g.A.tablet),
          (0, g.X)(g.A.largePhone)
        ),
        $ = d.ZP.h4.withConfig({
          displayName: "StatisticsStyles__StyledText",
          componentId: "sc-1pa99mz-2",
        })(["color:", ";font-size:40px;margin:0;"], function (t) {
          return t.color ? t.color : n.ZP.blue2;
        }),
        K = d.ZP.p.withConfig({
          displayName: "StatisticsStyles__StyledSubText",
          componentId: "sc-1pa99mz-3",
        })(["margin-top:6px;"]),
        Q = function (t) {
          var e = t.color,
            i = t.text,
            o = t.subtext;
          return (0, S.jsxs)(J, {
            children: [
              (0, S.jsx)($, { color: e, children: i }),
              (0, S.jsx)(K, { children: o }),
            ],
          });
        },
        tt = function (t) {
          var e = t.content,
            i = e.stats,
            o = e.backgroundColor;
          return (0, S.jsx)(Y, {
            backgroundColor: o,
            children: i.map(function (t) {
              return (0,
              S.jsx)(Q, { color: t.statTextColor, text: t.statText, subtext: t.statSubtext }, t.statText);
            }),
          });
        },
        et = i(18323),
        it = i(70950),
        ot = i(69219),
        nt = "/_next/static/media/aliPic.b6cb5881.jpg",
        at = "/_next/static/media/basa.f115155e.png",
        rt = "/_next/static/media/blueImpactWaveBottom.b89db7eb.svg",
        dt = "/_next/static/media/blueImpactWaveTop.c6aea9df.svg",
        lt = "/_next/static/media/do-social-hero-left.623ba3fb.svg",
        st = "/_next/static/media/do-social-hero-right.a7918075.svg",
        ct = "/_next/static/media/do-social-impact.1768f439.svg",
        pt = "/_next/static/media/fht.2d563681.png",
        gt = "/_next/static/media/impact-gdo.962577aa.jpg",
        ut = "/_next/static/media/impact-hhh.84b8e987.png",
        mt = "/_next/static/media/impact-philanthropy.5f68586a.png",
        ht = "/_next/static/media/projectSitaraLogo.d057ad5e.png",
        xt = "/_next/static/media/projectSitaraPic.91868fc7.jpg",
        ft = "/_next/static/media/sitara.2aba5c4f.png",
        yt = "/_next/static/media/tsi.6ed3bf53.png",
        bt = "/_next/static/media/unicodemy.de4e2638.png",
        wt = "/_next/static/media/unicodemy-logo.d7db3bb7.png",
        vt = "/_next/static/media/unicodemy-pic.526a8d56.png",
        _t = function () {
          var t = {
              title: "Programs designed to make an impact",
              titleColor: n.ZP.gray2,
              subtitle:
                "DigitalOcean\u2019s values start with community and end with love. Our social impact program shows love to our global community by supporting them as they do good in sectors ranging from education to climate.",
              subtitleColor: n.ZP.gray4,
              titleWidth: "864px",
              contentLeft: !0,
              wistiaLink: !1,
              sectionPadding: "0 0",
              section: [
                {
                  title: "Hollie\u2019s Hub for Good",
                  body: "Our inaugural social impact program, Hollie\u2019s Hub for Good, provides builders with DigitalOcean credits to enable the growth of their programs. Hollie\u2019s Hub for Good was created by Hollie Haggans, DigitalOcean\u2019s 150th employee, who tragically passed away in 2020. Hollie was a fierce champion of the community of developers and startups she so passionately served, and Hollie\u2019s Hub for Good continues the inspiring work she accomplished.",
                  image: ut,
                  link: "https://www.digitalocean.com/community/pages/hollies-hub-for-good",
                  linkText: "Learn more",
                  videoId: null,
                },
                {
                  title: "Philanthropy",
                  body: "DigitalOcean gives donations to a range of organizations through an employee giving program and the company\u2019s philanthropy.",
                  image: mt,
                  videoId: null,
                },
                {
                  title: "Green DigitalOcean",
                  body: "DigitalOcean\u2019s plans to bring understanding to our carbon footprint and identify key Environmental, Social, and Governance focus areas.",
                  image: gt,
                  videoId: null,
                },
              ],
            },
            e = {
              backgroundColor: "#c8Dfff",
              titleColor: n.ZP.blueLight,
              title: "DO Impact",
              text: "DigitalOcean\u2019s social impact efforts empower changemakers around the globe through products and philanthropy, enable our people to do good in their communities, and ensure our footprint is sustainable.",
              imageLogo: ct,
              imageLeft: lt,
              imageRight: st,
              heroImageLeftProperties: {
                width: "272px",
                height: "823px",
                bottom: "-132px",
                left: "0",
                top: null,
                right: null,
              },
              heroImageRightProperties: {
                width: "391px",
                height: "895px",
                bottom: "-226px",
                right: "80px",
                top: null,
              },
            },
            i = {
              backgroundColor: n.ZP.grayLightest,
              stats: [
                {
                  statText: "2000+",
                  statTextColor: "#ff1eff",
                  statSubtext:
                    "organizations have benefited from credits and donations.",
                },
                {
                  statText: "$50m",
                  statTextColor: "#ff1eff",
                  statSubtext:
                    "commited to social impact over the next ten years.",
                },
                {
                  statText: "32%",
                  statTextColor: "#ff1eff",
                  statSubtext: "of employees donated or volunteered in 2021.",
                },
              ],
            },
            o = {
              title: "Recent news",
              titleWidth: "100%",
              titleMarginBottom: "0px",
              titleMarginTop: "64px",
              maxWidth: "416px",
              rowsPerColumn: 3,
              topBackgroundColor: n.ZP.grayLightest,
              bodyBackgroundColor: "grayLightest",
              bodyBackgroundColorOpacity: 0.5,
              bottomBackgroundColor: n.ZP.grayLightest,
              columnBreak: "threeItems",
              columns: 3,
              sectionPadding: "64px 0 128px",
              cards: [
                {
                  cardHeadline: "News",
                  cardHeadlineColor: "#00a099",
                  cardTitle: "Announcing DO Impact",
                  cardBody:
                    "Learn about DigitalOcean\u2018s new social impact programs.",
                  cardLinkText: "Learn more",
                  cardLinkUrl:
                    "https://www.digitalocean.com/blog/announcing-do-impact",
                },
                {
                  cardHeadline: "News",
                  cardHeadlineColor: "#00a099",
                  cardTitle: "Coming together for good ",
                  cardBody:
                    "Read about DigitalOcean\u2019s commitment to social impact on Giving Tuesday.",
                  cardLinkText: "Learn more",
                  cardLinkUrl:
                    "https://www.digitalocean.com/blog/giving-tuesday-2021",
                },
                {
                  cardHeadline: "News",
                  cardHeadlineColor: "#00a099",
                  cardTitle: "DigitalOcean joins pledge 1%",
                  cardBody:
                    "As DigitalOcean became a public company, we joined the Pledge 1% movement.",
                  cardLinkText: "Learn more",
                  cardLinkUrl:
                    "https://www.digitalocean.com/blog/digitalocean-becomes-a-public-company",
                },
              ],
            },
            a = {
              textColor: "",
              text: "",
              subTextColor: "",
              subtext: "",
              logos: [
                { logoURL: at },
                { logoURL: pt },
                { logoURL: ft },
                { logoURL: yt },
                { logoURL: bt },
              ],
            },
            d = {
              topBackgroundImage: dt,
              topBackgroundColor: "",
              bodyBackgroundColor: "blueImpactSlider",
              bodyBackgroundColorOpacity: 1,
              bottomBackgroundImage: rt,
              bottomBackgroundColor: "",
              slides: [
                {
                  info: {
                    author: "Ali Munir, Senior Customer Success Manager",
                    backgroundColor: "blueLight",
                    copy: "Helping communities is at the core of what DigitalOcean does, whether it\u2019s the developer community or local communities. My manager has been very supportive of my work with refugees and has connected me with others who are working on social impact at DigitalOcean, which is very motivating for me to continue doing good in my community.",
                    title:
                      "DigitalOcean\u2019s Ali Munir makes a regular impact in his community by working with refugees as they settle in Germany.",
                  },
                  image: { url: nt },
                  garnish: { url: ot.Z.src },
                  garnish2: { url: it.Z.src },
                },
                {
                  info: {
                    author: "Pamela Gonzales, Founder, Unicodemy",
                    backgroundColor: "blueLight",
                    copy: "It\u2019s hard to get funding for things like hosting and maintaining technology, so DigitalOcean\u2019s contribution to that part of our business significantly impacts our ability to support girls. For a project like ours, it\u2019s important to be sustainable. Funding can often run out at any time, and can often only last for a year. DigitalOcean helps us be sustainable.",
                    logo: wt,
                    title:
                      "Unicodemy teaches girls to code with support from DigitalOcean",
                  },
                  image: { url: vt },
                  garnish: { url: ot.Z.src },
                  garnish2: { url: it.Z.src },
                },
                {
                  info: {
                    author: "Shriya Shankar, Founder, Project Sitara",
                    backgroundColor: "blueLight",
                    caseStudyUrl: null,
                    copy: "Having access to the community and support that DigitalOcean provides through Hollie\u2019s Hub for Good has made me feel like we don\u2019t have to be alone. They are here to support us in whatever way that they can and it feels like we are all in this together. That\u2019s quite motivating for me.",
                    logo: ht,
                    title:
                      "DigitalOcean helps Project Sitara provide accessible education to students in rural India.",
                  },
                  image: { url: xt },
                  garnish: { url: ot.Z.src },
                  garnish2: { url: it.Z.src },
                },
              ],
            };
          return (0, S.jsxs)(S.Fragment, {
            children: [
              (0, S.jsx)(P, { content: e }),
              (0, S.jsx)(tt, { content: i }),
              (0, S.jsx)(et.Z, {
                content: { wistiaLink: !0, videoId: "be0r687a21" },
              }),
              (0, S.jsx)(N.Z, { content: t }),
              (0, S.jsx)(r.Z, { content: d }),
              (0, S.jsx)(j.Z, { content: a }),
              (0, S.jsx)(W, {}),
              (0, S.jsx)(M.Z, { content: o }),
              (0, S.jsx)(I.Z, {}),
            ],
          });
        },
        Zt = "/_next/static/media/si-og.f1b842c2.png",
        St = "https://www.digitalocean.com/".replace(/\/*$/, ""),
        Pt = !0,
        Ct = function (t) {
          var e = t.announcementData,
            i = (0, o.useRouter)(),
            r = {
              description: "Impact Overview | DigitalOcean",
              open_graph_image: "".concat(St).concat(Zt),
              path: "/impact",
              title: "Impact Overview | DigitalOcean",
            };
          return (0, S.jsx)(a.Z, {
            footerWaveColor: n.ZP.teal3,
            announcementData: e,
            metaData: r,
            children: i.isFallback
              ? (0, S.jsx)("div", { children: "Loading\u2026" })
              : (0, S.jsx)(_t, {}),
          });
        };
    },
    53499: function (t, e, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/impact",
        function () {
          return i(90756);
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
    70950: function (t, e) {
      "use strict";
      e.Z = {
        src: "/_next/static/media/garnish-2-blue.5aa0f894.svg",
        height: 312,
        width: 264,
      };
    },
    69219: function (t, e) {
      "use strict";
      e.Z = {
        src: "/_next/static/media/garnish-blue.26799a4e.svg",
        height: 296,
        width: 288,
      };
    },
  },
  function (t) {
    t.O(
      0,
      [
        1092, 8616, 5935, 1549, 8249, 8417, 9963, 4221, 3017, 4933, 6424, 9774,
        2888, 179,
      ],
      function () {
        return (e = 53499), t((t.s = e));
        var e;
      }
    );
    var e = t.O();
    _N_E = e;
  },
]);
