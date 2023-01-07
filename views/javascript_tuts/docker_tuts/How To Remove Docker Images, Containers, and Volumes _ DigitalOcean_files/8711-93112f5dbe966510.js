"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8711],
  {
    18459: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return m;
        },
      });
      var n = i(37797),
        o = i(57243),
        r = i(90352),
        a = i(17534),
        s = i(88134),
        c = n.ZP.div.withConfig({
          displayName: "SignupButtonsStyles__ButtonContainer",
          componentId: "sc-yg5bly-0",
        })(
          [
            "display:flex;justify-content:center;margin:40px 0 60px;padding:0;",
            "{flex-direction:column;}",
          ],
          (0, a.X)(a.A.tablet)
        ),
        l = (0, n.iv)(
          [
            "align-items:center;background-color:",
            ";border-radius:10px;box-shadow:0 6px 20px -6px ",
            ";color:",
            ";display:flex;font-weight:600;padding:12px 24px;transition:all 0.2s ease;&:hover{background-color:#00247c;box-shadow:0 2px 0 ",
            ";transition:all 0.2s ease;}&:active{box-shadow:0 0 0;}",
            "{justify-content:center;line-height:24px;margin-bottom:16px;margin-right:0;}",
          ],
          s.ZP.blue1,
          (0, s.E9)(s.ZP.gray2, 0.35),
          s.ZP.white,
          (0, s.E9)(s.ZP.gray2, 0.35),
          (0, a.X)(a.A.tablet)
        ),
        d = (0, n.iv)(
          [
            "align-items:center;background-color:",
            ";border-radius:10px;box-shadow:0 6px 20px -6px ",
            ";color:",
            ";display:flex;font-weight:600;margin-right:24px;padding:12px 24px 12px 16px;transition:all 0.2s ease;&:hover{background-color:",
            ";transition:all 0.2s ease;}&:active{box-shadow:0 0 0;}",
            "{justify-content:center;line-height:24px;margin-bottom:16px;margin-right:0;}",
          ],
          s.ZP.white,
          (0, s.E9)(s.ZP.blueCPUInfo, 0.15),
          s.ZP.gray2,
          s.ZP.gray10,
          (0, a.X)(a.A.tablet)
        ),
        p = (0, n.iv)(
          [
            "align-items:center;background-color:",
            ";border-radius:10px;box-shadow:0 6px 20px -6px ",
            ";color:",
            ";display:flex;font-weight:600;margin-right:24px;padding:12px 24px 12px 16px;transition:all 0.2s ease;&:hover{background-color:",
            ";transition:all 0.2s ease;}&:active{box-shadow:0 0 0;}",
            "{justify-content:center;line-height:24px;margin-bottom:16px;margin-right:0;}",
          ],
          s.ZP.white,
          (0, s.E9)(s.ZP.blueCPUInfo, 0.15),
          s.ZP.gray2,
          s.ZP.gray10,
          (0, a.X)(a.A.tablet)
        ),
        g = n.ZP.span.withConfig({
          displayName: "SignupButtonsStyles__StyledImageButtonText",
          componentId: "sc-yg5bly-1",
        })(["margin-left:16px;"]),
        u = i(85893),
        m = function () {
          return (0, u.jsxs)(c, {
            children: [
              (0, u.jsxs)(h, {
                url: "https://cloud.digitalocean.com/registrations/google",
                children: [
                  (0, u.jsx)(o.Z, {
                    alt: "Google Icon",
                    src: "https://doimages.nyc3.digitaloceanspaces.com/google-logo.svg",
                  }),
                  (0, u.jsx)(g, { children: "Sign up with Google" }),
                ],
              }),
              (0, u.jsxs)(x, {
                url: "https://cloud.digitalocean.com/registrations/github",
                children: [
                  (0, u.jsx)(o.Z, {
                    alt: "GitHub Icon",
                    src: "https://doimages.nyc3.digitaloceanspaces.com/github-logo.svg",
                  }),
                  (0, u.jsx)(g, { children: "Sign up with GitHub" }),
                ],
              }),
              (0, u.jsx)(f, {
                url: "https://cloud.digitalocean.com/registrations/email",
                children: "Sign up with email",
              }),
            ],
          });
        },
        h = (0, n.ZP)(r.Z).withConfig({
          displayName: "SignupButtons___StyledLazyLink",
          componentId: "sc-1j4c66p-0",
        })(["", ""], d),
        x = (0, n.ZP)(r.Z).withConfig({
          displayName: "SignupButtons___StyledLazyLink2",
          componentId: "sc-1j4c66p-1",
        })(["", ""], p),
        f = (0, n.ZP)(r.Z).withConfig({
          displayName: "SignupButtons___StyledLazyLink3",
          componentId: "sc-1j4c66p-2",
        })(["", ""], l);
    },
    74034: function (e, t, i) {
      i.d(t, {
        P: function () {
          return c;
        },
        Z: function () {
          return u;
        },
      });
      var n = i(59499),
        o = i(17534),
        r = i(88134),
        a = i(37797),
        s = a.ZP.section.withConfig({
          displayName: "SectionStyles__StyledSection",
          componentId: "sc-1m0c0h1-0",
        })(
          [
            "background-color:",
            ";padding:",
            ";scroll-margin-top:128px;",
            "{padding:",
            "}&.section-cta-band{background-position:center;background-repeat:no-repeat;background-size:cover;}",
          ],
          function (e) {
            return e.backgroundColor;
          },
          function (e) {
            return e.short
              ? "64px 0;"
              : e.topPadding
              ? "64px 0 0;"
              : e.sectionPadding
              ? e.sectionPadding
              : "120px 0;";
          },
          (0, o.X)(o.A.desktop),
          function (e) {
            return e.topPadding ? "64px 0 0;" : "64px 0;";
          }
        ),
        c = a.ZP.div.withConfig({
          displayName: "SectionStyles__Waves",
          componentId: "sc-1m0c0h1-1",
        })(
          [
            "background-color:",
            ";background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='11.939 36 288.061 64' width='288.061' height='64'%3E%3Cpath d='M 155.939 64.16 C 83.984 64.16 83.894 36 11.939 36 L 11.939 100 L 300 100 L 300 36 C 228.045 36 227.894 64.16 155.939 64.16 Z' fill='",
            "'%3E%3C/path%3E%3C/svg%3E\");height:64px;",
            " width:100%;",
          ],
          function (e) {
            var t = e.wavesBackground;
            return void 0 === t ? r.ZP.gray10 : t;
          },
          function (e) {
            var t = e.wavesColor,
              i = void 0 === t ? r.ZP.blue2 : t;
            return encodeURIComponent(i);
          },
          function (e) {
            return (
              e.flip &&
              (0, a.iv)([
                "background-position-x:144.03px;transform:scaleY(-1);",
              ])
            );
          }
        ),
        l = i(85893);
      function d(e, t) {
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
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? d(Object(i), !0).forEach(function (t) {
                (0, n.Z)(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : d(Object(i)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(i, t)
                );
              });
        }
        return e;
      }
      var g = function (e) {
          var t = e.children;
          return (0, l.jsx)(s, p(p({}, e), {}, { children: t }));
        },
        u = g;
      g.defaultProps = { short: !1 };
    },
    5477: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return w;
        },
      });
      var n = i(37797),
        o = i(58069),
        r = i(71778),
        a = i(90352),
        s = i(74034),
        c = i(17534),
        l = i(88134),
        d = (0, n.iv)(
          ["background-color:", ";overflow:hidden;padding:0;"],
          l.ZP.teal3
        ),
        p = (0, n.iv)(
          ["margin:64px auto;", "{padding-bottom:20px;}"],
          (0, c.X)(c.A.desktop)
        ),
        g = (0, n.iv)(
          [
            "display:flex;flex-wrap:wrap;",
            "{flex-direction:column;.column{width:100% !important;}}",
          ],
          (0, c.X)(c.A.tablet)
        ),
        u = (0, n.iv)([
          "align-items:center;display:flex;flex-direction:column;justify-content:center;",
        ]),
        m = (0, n.iv)(
          [
            "font-weight:800;margin-bottom:0;",
            "{line-height:48px !important;}",
          ],
          (0, c.X)(c.A.largePhone)
        ),
        h = n.ZP.div.withConfig({
          displayName: "NewCTABandStyles__StyledNewCTARow",
          componentId: "sc-1s4pwdr-0",
        })(
          [
            "display:flex;justify-content:center;margin:10px 0;p{color:",
            ";font-size:16px;font-weight:400;line-height:24px;margin:0 10px;max-width:640px;text-align:center;}",
          ],
          l.ZP.gray4
        ),
        x = n.ZP.div.withConfig({
          displayName: "NewCTABandStyles__GetStartedWaveWrapper",
          componentId: "sc-1s4pwdr-1",
        })(
          [
            "background-color:",
            ";background-image:url(",
            ");display:flex;height:64px;overflow:hidden;width:100%;",
          ],
          function (e) {
            return e.color || l.ZP.grayLightest;
          },
          "/_next/static/media/ctaWave.6a631f6e.svg"
        ),
        f = (0, n.iv)(
          [
            "align-items:center;background-color:",
            ";border-radius:10px;box-shadow:0 6px 20px -6px ",
            ";color:",
            ";display:flex;font-weight:600;gap:8px;line-height:1.5;padding:12px 24px;transition:all 0.2s ease;&:hover{background-color:",
            ";transition:all 0.2s ease;}&:active{box-shadow:0 0 0;}",
            "{justify-content:center;line-height:24px;}span{line-height:0;}",
          ],
          l.ZP.white,
          (0, l.E9)(l.ZP.blueCPUInfo, 0.15),
          l.ZP.gray2,
          l.ZP.gray10,
          (0, c.X)(c.A.tablet)
        ),
        b = i(85893),
        y = function (e) {
          var t = e.ctaWaveBackgroundColor,
            i = e.headingText,
            n = e.rowText,
            o = e.buttonUrl,
            r = e.buttonText,
            a = e.buttonIcon;
          return (0, b.jsxs)(v, {
            id: "NewCTABand",
            children: [
              (0, b.jsx)(x, { color: t }),
              (0, b.jsx)(P, {
                children: (0, b.jsxs)(C, {
                  children: [
                    (0, b.jsx)(j, {
                      children: (0, b.jsx)(Z, {
                        large: !0,
                        renderAs: "h2",
                        textAlign: "center",
                        children: i,
                      }),
                    }),
                    (0, b.jsx)(h, {
                      children: (0, b.jsx)("p", { children: n }),
                    }),
                    (0, b.jsx)(h, {
                      children: (0, b.jsxs)(S, {
                        url: o,
                        children: [r, a && (0, b.jsx)("span", { children: a })],
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        w = y;
      y.defaultProps = {
        ctaWaveBackgroundColor: null,
        headingText: "Start building today",
        rowText:
          "Sign up now and you'll be up and running on DigitalOcean in just minutes.",
        buttonUrl: "https://cloud.digitalocean.com/registrations/new",
        buttonText: "Sign up to get started",
        buttonIcon: null,
      };
      var v = (0, n.ZP)(s.Z).withConfig({
          displayName: "NewCTABand___StyledSection",
          componentId: "sc-knbsmi-0",
        })(["", ""], d),
        P = (0, n.ZP)(o.Z).withConfig({
          displayName: "NewCTABand___StyledContainer",
          componentId: "sc-knbsmi-1",
        })(["", ""], p),
        C = (0, n.ZP)("div").withConfig({
          displayName: "NewCTABand___StyledDiv",
          componentId: "sc-knbsmi-2",
        })(["", ""], u),
        j = (0, n.ZP)("div").withConfig({
          displayName: "NewCTABand___StyledDiv2",
          componentId: "sc-knbsmi-3",
        })(["", ""], g),
        Z = (0, n.ZP)(r.Z).withConfig({
          displayName: "NewCTABand___StyledHeading",
          componentId: "sc-knbsmi-4",
        })(["", ""], m),
        S = (0, n.ZP)(a.Z).withConfig({
          displayName: "NewCTABand___StyledLazyLink",
          componentId: "sc-knbsmi-5",
        })(["", ""], f);
    },
    57298: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return W;
        },
      });
      var n = i(59499),
        o = i(37797),
        r = i(67294),
        a = i(88134),
        s = i(4620),
        c = i(58069),
        l = i(71778),
        d = i(74034),
        p = i(4486),
        g = "/_next/static/media/anemone.a7bc340d.svg",
        u = "/_next/static/media/aws-logo.72288ec5.svg",
        m = "/_next/static/media/azure-logo.9b198435.svg",
        h = "/_next/static/media/coral.60cd6a37.svg",
        x = "/_next/static/media/do-logo.d3eb8550.svg",
        f = "/_next/static/media/gcp-logo.e05c1f98.svg",
        b = "/_next/static/media/greenmoon.15403f40.svg",
        y = "/_next/static/media/seashell.c6f5a32f.svg",
        w = i(17534),
        v = i(87288),
        P = (0, o.F4)(["from{width:0;}to{width:100%;}"]),
        C = (0, o.iv)(
          ["background-color:", ";overflow:hidden;padding-bottom:64px;"],
          a.ZP.gray10
        ),
        j = o.ZP.div.withConfig({
          displayName: "PricingComparisonToolStyles__StyledBrand",
          componentId: "sc-1k0sndv-0",
        })([
          "align-items:center;display:flex;p{line-height:16px;}img{margin-right:8px;width:40px;}",
        ]),
        Z = o.ZP.div.withConfig({
          displayName: "PricingComparisonToolStyles__StyledColumns",
          componentId: "sc-1k0sndv-1",
        })(["", "{flex-direction:column;}"], (0, w.X)(w.A.desktop)),
        S = o.ZP.div.withConfig({
          displayName: "PricingComparisonToolStyles__StyledTextContainer",
          componentId: "sc-1k0sndv-2",
        })(
          [
            "display:flex;flex-direction:column;height:100%;justify-content:center;padding-right:32px;",
            "{margin-bottom:64px;.title,.subtitle,p{margin-left:auto;margin-right:auto;text-align:center;}}",
          ],
          (0, w.X)(w.A.desktop)
        ),
        _ = o.ZP.div.withConfig({
          displayName: "PricingComparisonToolStyles__StyledVMsCostsWrapper",
          componentId: "sc-1k0sndv-3",
        })(
          [
            "border-radius:24px;box-shadow:0 6px 20px -6px ",
            ";position:relative;img{&.greenmoon{left:184px;position:absolute;top:-50px;}&.coral{bottom:30px;left:360px;position:absolute;}&.seashell{bottom:0;left:-120px;position:absolute;}&.anemone{left:-180px;position:absolute;top:64px;}}",
            "{img{&.greenmoon,&.coral,&.seashell,&.anemone{display:none;}}}",
          ],
          (0, a.E9)(a.ZP.blueCPUInfo, 0.15),
          (0, w.X)(w.A.largeDesktop)
        ),
        k = o.ZP.div.withConfig({
          displayName: "PricingComparisonToolStyles__StyledVMsCostsContainer",
          componentId: "sc-1k0sndv-4",
        })(
          [
            "display:flex;position:relative;",
            "{justify-content:center;}",
            "{flex-direction:column;}",
          ],
          (0, w.X)(w.A.desktop),
          (0, w.X)(w.A.tablet)
        ),
        N = o.ZP.div.withConfig({
          displayName: "PricingComparisonToolStyles__StyledVMsTop",
          componentId: "sc-1k0sndv-5",
        })(
          [
            "background-color:",
            ";border-radius:24px 24px 0 0;padding:32px 40px;",
          ],
          a.ZP.blueHover
        ),
        I = o.ZP.div.withConfig({
          displayName: "PricingComparisonToolStyles__StyledVMsBottom",
          componentId: "sc-1k0sndv-6",
        })(
          ["background-color:", ";border-radius:24px;padding:32px 40px;"],
          a.ZP.white
        ),
        T = o.ZP.div.withConfig({
          displayName: "PricingComparisonToolStyles__StyledCpuSelector",
          componentId: "sc-1k0sndv-7",
        })(
          [
            "display:flex;justify-content:space-between;",
            "{flex-wrap:wrap;}button{background-color:",
            ";border:none;border-radius:8px;color:white;cursor:pointer;overflow:hidden;padding:12px 24px;position:relative;transition:background-color 0.2s ease;",
            "{padding:8px 12px;}&:hover{background-color:",
            " !important;transition:background-color 0.2s ease;}&.selected,&.progress{background-color:#4C7EFB;}.progressBar{animation:",
            " 15s linear;background-color:",
            ";height:100%;left:0;position:absolute;top:0;}}",
          ],
          (0, w.X)(w.A.largePhone),
          a.ZP.blueHover,
          (0, w.X)(w.A.largePhone),
          (0, a.E9)(a.ZP.white, 0.3),
          P,
          (0, a.E9)(a.ZP.white, 0.25)
        ),
        A = o.ZP.div.withConfig({
          displayName: "PricingComparisonToolStyles__StyledCpuInfo",
          componentId: "sc-1k0sndv-8",
        })(
          [
            "align-items:center;background:",
            ";border-radius:10px;display:flex;flex-flow:row wrap;justify-content:center;padding:16px;p{color:",
            ";margin:0;&:not(:last-child)::after{content:'/';padding:0 4px;}}",
          ],
          a.ZP.gray9,
          a.ZP.gray4
        ),
        O = o.ZP.ul.withConfig({
          displayName: "PricingComparisonToolStyles__StyledPricingComparison",
          componentId: "sc-1k0sndv-9",
        })(
          [
            "list-style:none;p{color:",
            ";margin-bottom:20px;}img{margin-right:16px;}li{border-bottom:1px dashed #A9B3CA;display:flex;justify-content:space-between;padding:12px 0;&:last-of-type{border-bottom:none;}}",
          ],
          a.ZP.gray2
        ),
        B = o.ZP.div.withConfig({
          displayName: "PricingComparisonToolStyles__StyledCost",
          componentId: "sc-1k0sndv-10",
        })(
          [
            "align-items:center;color:",
            ";display:block;font-family:",
            ";font-size:32px;font-weight:bold;text-align:right;",
          ],
          function (e) {
            return e.blue ? a.ZP.blue2 : "#FF4C6C";
          },
          (0, v.Z)("code")
        ),
        z = o.ZP.div.withConfig({
          displayName: "PricingComparisonToolStyles__StyledBandwidth",
          componentId: "sc-1k0sndv-11",
        })(
          [
            "align-items:center;color:",
            ";display:block;font-family:",
            ";font-size:14px;font-weight:400;line-height:22px;margin:4px 0 0;",
          ],
          a.ZP.gray4,
          (0, v.Z)("code")
        ),
        L = o.ZP.div.withConfig({
          displayName: "PricingComparisonToolStyles__StyledVMs",
          componentId: "sc-1k0sndv-12",
        })(
          [
            "background-color:",
            ";border-radius:24px;color:",
            ";display:flex;flex-direction:column;max-width:528px;",
            "{width:50%;}",
            "{max-width:none;width:auto;}.title{color:",
            ";font-size:32px;font-weight:600;line-height:40px;margin:0;text-align:left;}.subtitle{color:",
            ";font-size:16px;font-weight:500;line-height:24px;}",
          ],
          a.ZP.white,
          a.ZP.gray,
          (0, w.X)(w.A.desktop),
          (0, w.X)(w.A.tablet),
          a.ZP.grayLightPCTool,
          a.ZP.gray
        ),
        D =
          (o.ZP.div.withConfig({
            displayName: "PricingComparisonToolStyles__StyledCostsContainer",
            componentId: "sc-1k0sndv-13",
          })(
            ["margin:32px 0;", "{width:50%;}", "{width:100%;}"],
            (0, w.X)(w.A.desktop),
            (0, w.X)(w.A.tablet)
          ),
          o.ZP.div.withConfig({
            displayName: "PricingComparisonToolStyles__StyledCosts",
            componentId: "sc-1k0sndv-14",
          })(
            [
              "background-color:",
              ";border-radius:8px;min-width:464px;padding:24px;.title{color:",
              ";font-size:32px;font-weight:600;line-height:40px;margin:0;}.subtitle{color:",
              ";font-size:16px;font-weight:500;line-height:24px;}ul{list-style:none;li{align-items:center;border-bottom:1px solid ",
              ";display:flex;&:last-of-type{border-bottom:0;}img{margin-right:8px;}p{color:",
              ";font-size:16px;font-weight:500;line-height:24px;}.company-name{margin-right:24px;min-width:100px;}.company-price{justify-self:flex-end;&.company-price-do{color:",
              ";}}}}",
              "{min-width:none;}",
            ],
            a.ZP.white,
            a.ZP.blueDarkest,
            a.ZP.grayDarker,
            a.ZP.grayLightPCTool,
            a.ZP.blueDarkest,
            a.ZP.bluePCTool,
            (0, w.X)(w.A.desktop)
          ),
          (0, o.iv)([
            "font-size:16px;font-weight:400;line-height:24px;margin-top:8px;",
          ])),
        E =
          (o.ZP.div.withConfig({
            displayName: "PricingComparisonToolStyles__StyledButtonContainer",
            componentId: "sc-1k0sndv-15",
          })(
            [
              "display:flex;margin-top:32px;button{background-color:transparent;border:0;border-top:1px solid ",
              ";cursor:pointer;height:1px;padding:4px 8px;position:relative;width:32px;&::before,&::after{background-color:",
              ";content:'';display:block;height:1px;position:absolute;width:8px;}&::before{top:-4px;transform:rotate(135deg);}&::after{top:2px;transform:rotate(45deg);}&:first-of-type{&::before,&::after{left:-1px;}}&:last-of-type{margin-left:16px;&::before,&::after{right:-1px;}&::before{transform:rotate(45deg);}&::after{transform:rotate(135deg);}}}",
            ],
            a.ZP.white,
            a.ZP.white
          ),
          o.ZP.span.withConfig({
            displayName: "PricingComparisonToolStyles__StyledBar",
            componentId: "sc-1k0sndv-16",
          })(
            [
              "background-color:",
              ";border-bottom-right-radius:4px;border-top-right-radius:4px;display:inline-block;height:24px;max-width:160px;transition:width 0.6s ease;width:100%;",
              "{max-width:none;}",
            ],
            a.ZP.blueDarkest,
            (0, w.X)(w.A.tablet)
          ),
          (0, o.iv)(["background-color:", " !important;"], a.ZP.bluePCTool),
          o.ZP.div.withConfig({
            displayName:
              "PricingComparisonToolStyles__StyledCompanyPriceContainer",
            componentId: "sc-1k0sndv-17",
          })(["display:flex;justify-content:flex-end;width:100%;"]),
          o.ZP.div.withConfig({
            displayName: "PricingComparisonToolStyles__StyledHeadingsContainer",
            componentId: "sc-1k0sndv-18",
          })(["margin-bottom:24px;"])),
        X = i(85893);
      function M(e, t) {
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
      function F(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? M(Object(i), !0).forEach(function (t) {
                (0, n.Z)(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : M(Object(i)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(i, t)
                );
              });
        }
        return e;
      }
      var W = function (e) {
          var t = e.data,
            i = (0, r.useMemo)(
              function () {
                return t.basic.regular.reduce(function (e, t) {
                  return F(F({}, e), {}, (0, n.Z)({}, t.slug, t));
                }, {});
              },
              [t]
            ),
            o = (0, r.useMemo)(
              function () {
                return [
                  {
                    cpu: i["s-1vcpu-1gb"].cpus,
                    memory: i["s-1vcpu-1gb"].memory,
                    storage: i["s-1vcpu-1gb"].ssd.size,
                    transfer: i["s-1vcpu-1gb"].price.transferQuota,
                    comparisons: {
                      do: { price: i["s-1vcpu-1gb"].price.monthly },
                      gcp: { price: 6.88, bandwidth: 91.88 },
                      aws: { price: 8.47, bandwidth: 98.47 },
                      azure: { price: 7.59, bandwidth: 79.59 },
                    },
                  },
                  {
                    cpu: i["s-2vcpu-4gb"].cpus,
                    memory: i["s-2vcpu-4gb"].memory,
                    storage: i["s-2vcpu-4gb"].ssd.size,
                    transfer: i["s-2vcpu-4gb"].price.transferQuota,
                    comparisons: {
                      do: { price: i["s-2vcpu-4gb"].price.monthly },
                      gcp: { price: 27.55, bandwidth: 367.55 },
                      aws: { price: 30.37, bandwidth: 399.01 },
                      azure: { price: 30.37, bandwidth: 342.37 },
                    },
                  },
                  {
                    cpu: i["s-4vcpu-8gb"].cpus,
                    memory: i["s-4vcpu-8gb"].memory,
                    storage: i["s-4vcpu-8gb"].ssd.size,
                    transfer: i["s-4vcpu-8gb"].price.transferQuota,
                    comparisons: {
                      do: { price: i["s-4vcpu-8gb"].price.monthly },
                      gcp: { price: 55.09, bandwidth: 480.09 },
                      aws: { price: 60.74, bandwidth: 521.54 },
                      azure: { price: 60.74, bandwidth: 452.74 },
                    },
                  },
                  {
                    cpu: i["s-8vcpu-16gb"].cpus,
                    memory: i["s-8vcpu-16gb"].memory,
                    storage: i["s-8vcpu-16gb"].ssd.size,
                    transfer: i["s-8vcpu-16gb"].price.transferQuota,
                    comparisons: {
                      do: { price: i["s-8vcpu-16gb"].price.monthly },
                      gcp: { price: 110.19, bandwidth: 620.19 },
                      aws: { price: 121.47, bandwidth: 674.43 },
                      azure: { price: 121.18, bandwidth: 593.18 },
                    },
                  },
                ];
              },
              [i]
            ),
            d = (0, r.useState)(0),
            w = d[0],
            v = d[1],
            P = (0, r.useState)(!0),
            C = P[0],
            D = P[1];
          return (
            (0, r.useEffect)(
              function () {
                if (C) {
                  var e = setTimeout(function () {
                    return v(w >= 3 ? 0 : w + 1);
                  }, 15e3);
                  return function () {
                    clearInterval(e);
                  };
                }
              },
              [w, C]
            ),
            (0, r.useEffect)(
              function () {
                if (!C) {
                  var e = setTimeout(function () {
                    return D(!0);
                  }, 1e4);
                  return function () {
                    return clearInterval(e);
                  };
                }
                return function () {};
              },
              [C]
            ),
            (0, X.jsx)(G, {
              topPadding: !0,
              children: (0, X.jsx)(c.Z, {
                children: (0, X.jsxs)(Z, {
                  className: "columns",
                  children: [
                    (0, X.jsx)("div", {
                      className: "column is-one-half-desktop",
                      children: (0, X.jsxs)(S, {
                        children: [
                          (0, X.jsx)(l.Z, {
                            large: !0,
                            renderAs: "h2",
                            textAlign: "left",
                            children: "See what you can save",
                          }),
                          (0, X.jsx)("p", {
                            children:
                              "Monthly caps and flat pricing mean your bill is never a surprise.",
                          }),
                          (0, X.jsx)("p", {
                            children: (0, X.jsx)(p.Z, {
                              dashArrow: !0,
                              url: "https://www.digitalocean.com/pricing/calculator/",
                              children: "Calculate your savings",
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, X.jsxs)(_, {
                      children: [
                        (0, X.jsx)("img", {
                          alt: "greenmoon",
                          className: "greenmoon",
                          src: b,
                        }),
                        (0, X.jsx)("img", {
                          alt: "coral",
                          className: "coral",
                          src: h,
                        }),
                        (0, X.jsx)("img", {
                          alt: "anemone",
                          className: "anemone",
                          src: g,
                        }),
                        (0, X.jsx)("img", {
                          alt: "seashell",
                          className: "seashell",
                          src: y,
                        }),
                        (0, X.jsx)(k, {
                          children: (0, X.jsxs)(L, {
                            children: [
                              (0, X.jsxs)(N, {
                                children: [
                                  (0, X.jsxs)(E, {
                                    children: [
                                      (0, X.jsx)(l.Z, {
                                        defaultColor: "light",
                                        renderAs: "h3",
                                        children: "Basic virtual machine costs",
                                      }),
                                      (0, X.jsx)(U, {
                                        overrideColor: a.ZP.gray7,
                                        renderAs: "h6",
                                        children:
                                          "Easy, fast, and flexible compute built for a range of needs.",
                                      }),
                                    ],
                                  }),
                                  (0, X.jsx)(T, {
                                    children: o.map(function (e, t) {
                                      return (0, X.jsxs)(
                                        "button",
                                        {
                                          type: "button",
                                          className:
                                            w === t
                                              ? "selected ".concat(
                                                  C ? "progress" : ""
                                                )
                                              : "",
                                          onClick: function () {
                                            D(!1), v(t);
                                          },
                                          children: [
                                            e.cpu.toLocaleString(),
                                            " ",
                                            (0, s._)("CPU", e.cpu),
                                            (0, X.jsx)("div", {
                                              className:
                                                w === t
                                                  ? "selected ".concat(
                                                      C ? "progressBar" : ""
                                                    )
                                                  : "",
                                            }),
                                          ],
                                        },
                                        t
                                      );
                                    }),
                                  }),
                                ],
                              }),
                              (0, X.jsxs)(I, {
                                children: [
                                  (0, X.jsxs)(A, {
                                    children: [
                                      (0, X.jsxs)("p", {
                                        children: [
                                          o[w].memory.toLocaleString(),
                                          " GiB Memory",
                                        ],
                                      }),
                                      (0, X.jsxs)("p", {
                                        children: [
                                          o[w].storage.toLocaleString(),
                                          " GiB Storage",
                                        ],
                                      }),
                                      (0, X.jsxs)("p", {
                                        children: [
                                          o[w].transfer.toLocaleString(),
                                          " GiB Bandwidth",
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, X.jsxs)(O, {
                                    children: [
                                      (0, X.jsxs)("li", {
                                        children: [
                                          (0, X.jsxs)(j, {
                                            children: [
                                              (0, X.jsx)("img", {
                                                alt: "do-logo",
                                                src: x,
                                              }),
                                              (0, X.jsx)("p", {
                                                children: "DigitalOcean",
                                              }),
                                            ],
                                          }),
                                          (0, X.jsxs)(B, {
                                            blue: !0,
                                            children: [
                                              "$",
                                              o[
                                                w
                                              ].comparisons.do.price.toLocaleString(
                                                void 0,
                                                { minimumFractionDigits: 2 }
                                              ),
                                              (0, X.jsx)(z, {
                                                children: "Includes bandwidth",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, X.jsxs)("li", {
                                        children: [
                                          (0, X.jsxs)(j, {
                                            children: [
                                              (0, X.jsx)("img", {
                                                alt: "gcp-logo",
                                                src: f,
                                              }),
                                              " ",
                                              (0, X.jsx)("p", {
                                                children: "GCP",
                                              }),
                                            ],
                                          }),
                                          (0, X.jsxs)(B, {
                                            children: [
                                              "$",
                                              o[
                                                w
                                              ].comparisons.gcp.price.toLocaleString(
                                                void 0,
                                                { minimumFractionDigits: 2 }
                                              ),
                                              (0, X.jsxs)(z, {
                                                children: [
                                                  "With bandwidth: $",
                                                  o[
                                                    w
                                                  ].comparisons.gcp.bandwidth.toLocaleString(
                                                    void 0,
                                                    { minimumFractionDigits: 2 }
                                                  ),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, X.jsxs)("li", {
                                        children: [
                                          (0, X.jsxs)(j, {
                                            children: [
                                              (0, X.jsx)("img", {
                                                alt: "aws-logo",
                                                src: u,
                                              }),
                                              (0, X.jsx)("p", {
                                                children: "AWS",
                                              }),
                                            ],
                                          }),
                                          (0, X.jsxs)(B, {
                                            children: [
                                              "$",
                                              o[
                                                w
                                              ].comparisons.aws.price.toLocaleString(
                                                void 0,
                                                { minimumFractionDigits: 2 }
                                              ),
                                              (0, X.jsxs)(z, {
                                                children: [
                                                  "With bandwidth: $",
                                                  o[
                                                    w
                                                  ].comparisons.aws.bandwidth.toLocaleString(
                                                    void 0,
                                                    { minimumFractionDigits: 2 }
                                                  ),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, X.jsxs)("li", {
                                        children: [
                                          (0, X.jsxs)(j, {
                                            children: [
                                              (0, X.jsx)("img", {
                                                alt: "azure-logo",
                                                src: m,
                                              }),
                                              " ",
                                              (0, X.jsx)("p", {
                                                children: "Azure",
                                              }),
                                            ],
                                          }),
                                          (0, X.jsxs)(B, {
                                            children: [
                                              "$",
                                              o[
                                                w
                                              ].comparisons.azure.price.toLocaleString(
                                                void 0,
                                                { minimumFractionDigits: 2 }
                                              ),
                                              (0, X.jsxs)(z, {
                                                children: [
                                                  "With bandwidth: $",
                                                  o[
                                                    w
                                                  ].comparisons.azure.bandwidth.toLocaleString(
                                                    void 0,
                                                    { minimumFractionDigits: 2 }
                                                  ),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            })
          );
        },
        G = (0, o.ZP)(d.Z).withConfig({
          displayName: "PricingComparisonTool___StyledSection",
          componentId: "sc-lsfddb-0",
        })(["", ""], C),
        U = (0, o.ZP)(l.Z).withConfig({
          displayName: "PricingComparisonTool___StyledHeading",
          componentId: "sc-lsfddb-1",
        })(["", ""], D);
    },
    4620: function (e, t, i) {
      i.d(t, {
        M: function () {
          return r;
        },
        _: function () {
          return o;
        },
      });
      var n = i(57805),
        o = function (e, t) {
          return 1 === t ? e : (0, n.Z)(e);
        },
        r = function (e, t) {
          return "".concat(t.toLocaleString(), " ").concat(o(e, t));
        };
    },
    5918: function (e, t) {
      var i = function () {
        return ((65536 * (1 + Math.random())) | 0).toString(16).substring(1);
      };
      t.Z = function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 8;
        return Array(e)
          .fill(null)
          .map(function () {
            return i();
          })
          .join("-");
      };
    },
  },
]);
