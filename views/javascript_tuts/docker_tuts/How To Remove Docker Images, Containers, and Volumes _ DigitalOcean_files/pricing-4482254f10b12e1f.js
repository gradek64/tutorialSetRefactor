(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9939],
  {
    5477: function (t, e, o) {
      "use strict";
      o.d(e, {
        Z: function () {
          return y;
        },
      });
      var i = o(37797),
        n = o(58069),
        r = o(71778),
        a = o(90352),
        l = o(74034),
        c = o(17534),
        d = o(88134),
        s = (0, i.iv)(
          ["background-color:", ";overflow:hidden;padding:0;"],
          d.ZP.teal3
        ),
        g = (0, i.iv)(
          ["margin:64px auto;", "{padding-bottom:20px;}"],
          (0, c.X)(c.A.desktop)
        ),
        u = (0, i.iv)(
          [
            "display:flex;flex-wrap:wrap;",
            "{flex-direction:column;.column{width:100% !important;}}",
          ],
          (0, c.X)(c.A.tablet)
        ),
        p = (0, i.iv)([
          "align-items:center;display:flex;flex-direction:column;justify-content:center;",
        ]),
        m = (0, i.iv)(
          [
            "font-weight:800;margin-bottom:0;",
            "{line-height:48px !important;}",
          ],
          (0, c.X)(c.A.largePhone)
        ),
        h = i.ZP.div.withConfig({
          displayName: "NewCTABandStyles__StyledNewCTARow",
          componentId: "sc-1s4pwdr-0",
        })(
          [
            "display:flex;justify-content:center;margin:10px 0;p{color:",
            ";font-size:16px;font-weight:400;line-height:24px;margin:0 10px;max-width:640px;text-align:center;}",
          ],
          d.ZP.gray4
        ),
        x = i.ZP.div.withConfig({
          displayName: "NewCTABandStyles__GetStartedWaveWrapper",
          componentId: "sc-1s4pwdr-1",
        })(
          [
            "background-color:",
            ";background-image:url(",
            ");display:flex;height:64px;overflow:hidden;width:100%;",
          ],
          function (t) {
            return t.color || d.ZP.grayLightest;
          },
          "/_next/static/media/ctaWave.6a631f6e.svg"
        ),
        b = (0, i.iv)(
          [
            "align-items:center;background-color:",
            ";border-radius:10px;box-shadow:0 6px 20px -6px ",
            ";color:",
            ";display:flex;font-weight:600;gap:8px;line-height:1.5;padding:12px 24px;transition:all 0.2s ease;&:hover{background-color:",
            ";transition:all 0.2s ease;}&:active{box-shadow:0 0 0;}",
            "{justify-content:center;line-height:24px;}span{line-height:0;}",
          ],
          d.ZP.white,
          (0, d.E9)(d.ZP.blueCPUInfo, 0.15),
          d.ZP.gray2,
          d.ZP.gray10,
          (0, c.X)(c.A.tablet)
        ),
        f = o(85893),
        v = function (t) {
          var e = t.ctaWaveBackgroundColor,
            o = t.headingText,
            i = t.rowText,
            n = t.buttonUrl,
            r = t.buttonText,
            a = t.buttonIcon;
          return (0, f.jsxs)(w, {
            id: "NewCTABand",
            children: [
              (0, f.jsx)(x, { color: e }),
              (0, f.jsx)(Z, {
                children: (0, f.jsxs)(k, {
                  children: [
                    (0, f.jsx)(C, {
                      children: (0, f.jsx)(P, {
                        large: !0,
                        renderAs: "h2",
                        textAlign: "center",
                        children: o,
                      }),
                    }),
                    (0, f.jsx)(h, {
                      children: (0, f.jsx)("p", { children: i }),
                    }),
                    (0, f.jsx)(h, {
                      children: (0, f.jsxs)(_, {
                        url: n,
                        children: [r, a && (0, f.jsx)("span", { children: a })],
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        y = v;
      v.defaultProps = {
        ctaWaveBackgroundColor: null,
        headingText: "Start building today",
        rowText:
          "Sign up now and you'll be up and running on DigitalOcean in just minutes.",
        buttonUrl: "https://cloud.digitalocean.com/registrations/new",
        buttonText: "Sign up to get started",
        buttonIcon: null,
      };
      var w = (0, i.ZP)(l.Z).withConfig({
          displayName: "NewCTABand___StyledSection",
          componentId: "sc-knbsmi-0",
        })(["", ""], s),
        Z = (0, i.ZP)(n.Z).withConfig({
          displayName: "NewCTABand___StyledContainer",
          componentId: "sc-knbsmi-1",
        })(["", ""], g),
        k = (0, i.ZP)("div").withConfig({
          displayName: "NewCTABand___StyledDiv",
          componentId: "sc-knbsmi-2",
        })(["", ""], p),
        C = (0, i.ZP)("div").withConfig({
          displayName: "NewCTABand___StyledDiv2",
          componentId: "sc-knbsmi-3",
        })(["", ""], u),
        P = (0, i.ZP)(r.Z).withConfig({
          displayName: "NewCTABand___StyledHeading",
          componentId: "sc-knbsmi-4",
        })(["", ""], m),
        _ = (0, i.ZP)(a.Z).withConfig({
          displayName: "NewCTABand___StyledLazyLink",
          componentId: "sc-knbsmi-5",
        })(["", ""], b);
    },
    55581: function (t, e, o) {
      "use strict";
      o.d(e, {
        Z: function () {
          return y;
        },
      });
      var i = o(37797),
        n = o(58069),
        r = o(57243),
        a = o(74034),
        l = o(4486),
        c = o(17534),
        d = o(88134),
        s = (0, i.iv)(["color:inherit;font-size:16px;"]),
        g = (0, i.iv)(
          ["background-color:", ";padding-bottom:", ";padding-top:", ";"],
          d.ZP.grayLightest,
          function (t) {
            return t.bottomPadding || "64px";
          },
          function (t) {
            return t.topPadding || "64px";
          }
        ),
        u = i.ZP.div.withConfig({
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
          (0, d.E9)(d.ZP.blueCPUInfo, 0.15),
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
          (0, c.X)(c.A.tablet)
        ),
        p = i.ZP.div.withConfig({
          displayName: "ResourceBannerStyles__ResourceBannerCopy",
          componentId: "sc-r79y2g-1",
        })(
          [
            "max-width:550px;z-index:2;h3{color:",
            ";font-size:32px;font-weight:700;letter-spacing:0.05px;line-height:1.25;margin:0 0 32px;}div{p{margin-bottom:24px;}&:last-of-type{p{margin-bottom:0;}}}p{color:",
            ";font-size:16px;font-weight:400;line-height:1.5;margin:0;}",
          ],
          d.ZP.white,
          d.ZP.gray7
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
            return t.color || d.ZP.white;
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
          return t.color || d.ZP.white;
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
            return t.color || d.ZP.white;
          }
        ),
        b = i.ZP.div.withConfig({
          displayName: "ResourceBannerStyles__ResourceBannerLink",
          componentId: "sc-r79y2g-5",
        })(
          ["display:flex;p{a{color:", ";&::after{font-size:1em;}}}"],
          function (t) {
            return t.color || d.ZP.white;
          }
        ),
        f = o(85893),
        v = function (t) {
          var e = t.className,
            o = t.content;
          return (0, f.jsx)(w, {
            className: e,
            topPadding: null === o || void 0 === o ? void 0 : o.paddingTop,
            bottomPadding:
              null === o || void 0 === o ? void 0 : o.paddingBottom,
            children: (0, f.jsx)(n.Z, {
              children: (0, f.jsxs)(u, {
                padding: null === o || void 0 === o ? void 0 : o.contentPadding,
                backgroundImgHeight:
                  null === o || void 0 === o ? void 0 : o.backgroundImgHeight,
                bannerPositionTop:
                  null === o || void 0 === o ? void 0 : o.bannerPositionTop,
                backgroundColor:
                  null === o || void 0 === o ? void 0 : o.backgroundColor,
                background: null === o || void 0 === o ? void 0 : o.background,
                children: [
                  (null === o || void 0 === o ? void 0 : o.bannerImage) &&
                    (0, f.jsx)(r.Z, {
                      className: "logo",
                      src: null === o || void 0 === o ? void 0 : o.bannerImage,
                      alt: "cloud journey",
                    }),
                  (0, f.jsxs)(p, {
                    children: [
                      (0, f.jsx)(m, {
                        color:
                          null === o || void 0 === o ? void 0 : o.titleColor,
                        fontSize:
                          null === o || void 0 === o ? void 0 : o.titleFontSize,
                        marginTop:
                          null === o || void 0 === o
                            ? void 0
                            : o.titleMarginTop,
                        marginBottom:
                          null === o || void 0 === o
                            ? void 0
                            : o.titleMarginBottom,
                        children: (0, f.jsx)("h3", {
                          children:
                            null === o || void 0 === o ? void 0 : o.title,
                        }),
                      }),
                      (null === o || void 0 === o ? void 0 : o.text) &&
                        (0, f.jsx)(h, {
                          color:
                            null === o || void 0 === o ? void 0 : o.textColor,
                          children: (0, f.jsx)("p", {
                            children:
                              null === o || void 0 === o ? void 0 : o.text,
                          }),
                        }),
                      (null === o || void 0 === o ? void 0 : o.list) &&
                        (0, f.jsx)(x, {
                          color:
                            null === o || void 0 === o ? void 0 : o.textColor,
                          children:
                            null === o || void 0 === o
                              ? void 0
                              : o.list.map(function (t) {
                                  return (0, f.jsx)("li", { children: t }, t);
                                }),
                        }),
                      (null === o || void 0 === o ? void 0 : o.linkText) &&
                        (null === o || void 0 === o ? void 0 : o.linkUrl) &&
                        (0, f.jsx)(b, {
                          color:
                            null === o || void 0 === o ? void 0 : o.linkColor,
                          children: (0, f.jsx)("p", {
                            children: (0, f.jsx)(Z, {
                              dashArrow: !0,
                              url:
                                null === o || void 0 === o ? void 0 : o.linkUrl,
                              children:
                                null === o || void 0 === o
                                  ? void 0
                                  : o.linkText,
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
        y = v;
      v.defaultProps = { className: "" };
      var w = (0, i.ZP)(a.Z).withConfig({
          displayName: "ResourceBanner___StyledSection",
          componentId: "sc-l8pdjo-0",
        })(["", ""], g),
        Z = (0, i.ZP)(l.Z).withConfig({
          displayName: "ResourceBanner___StyledTextLink",
          componentId: "sc-l8pdjo-1",
        })(["", ""], s);
    },
    4309: function (t, e, o) {
      "use strict";
      o.r(e),
        o.d(e, {
          __N_SSG: function () {
            return H;
          },
          default: function () {
            return z;
          },
        });
      var i = o(11163),
        n = o(99963),
        r = o(88134),
        a = o(37394),
        l = o(4620),
        c = o(32331),
        d = o(37797),
        s = o(71778),
        g = o(74034),
        u = o(17534),
        p = (0, d.iv)(
          ["background-color:", ";padding:", ";", "{padding-top:32px;}"],
          function (t) {
            return r.ZP[t.backgroundColor] || r.ZP.gray10;
          },
          function (t) {
            return t.sectionPadding || "64px 0";
          },
          (0, u.X)(u.A.tablet)
        ),
        m = d.ZP.div.withConfig({
          displayName: "ColumnedListStyles__StyledColumnListSection",
          componentId: "sc-16l5k6f-0",
        })(
          [
            "background-color:",
            ";padding:",
            ";",
            "{padding-block-start:32px;}",
          ],
          function (t) {
            return (
              (0, r.E9)(r.ZP[t.backgroundColor], t.backgroundOpacity) ||
              r.ZP.purple5
            );
          },
          function (t) {
            return t.sectionPadding || "64px 16px";
          },
          (0, u.X)(u.A.tablet)
        ),
        h = d.ZP.div.withConfig({
          displayName: "ColumnedListStyles__StyledColumnListContainer",
          componentId: "sc-16l5k6f-1",
        })(
          [
            "background-color:",
            ";border-radius:24px;box-shadow:0 6px 20px -6px ",
            ";margin:0 auto;max-width:1088px;padding:32px 64px 48px;",
            "{padding:32px 32px 48px;}ul{column-count:2;column-gap:22px;",
            "{column-count:1;}}li{color:",
            ";font-size:18px;line-height:1.56;margin-block-end:16px;padding-inline-start:32px;position:relative;&::before{background-image:url('",
            "');content:'';height:28px;left:0;position:absolute;top:0;width:24px;}}",
          ],
          function (t) {
            return r.ZP[t.foregroundColor];
          },
          (0, r.E9)(r.ZP.blueCPUInfo, 0.35),
          (0, u.X)(u.A.tablet),
          (0, u.X)(u.A.tablet),
          r.ZP.gray9,
          "/_next/static/media/icon-green-checkmark.e0e87280.svg"
        ),
        x = d.ZP.div.withConfig({
          displayName: "ColumnedListStyles__StyledColumnListHeader",
          componentId: "sc-16l5k6f-2",
        })(
          [
            "border-bottom:1px dashed ",
            ";margin-block-end:32px;padding-block-end:32px;p{color:",
            ";}",
          ],
          r.ZP.gray9,
          r.ZP.gray9
        ),
        b = (0, d.iv)(
          ["color:", ";font-size:32px;line-height:1.25;margin-block-end:8px;"],
          r.ZP.white
        ),
        f = d.ZP.div.withConfig({
          displayName: "ColumnedListStyles__StyledTopWaveBackground",
          componentId: "sc-16l5k6f-3",
        })(
          [
            "background-color:",
            ";background-image:url(",
            ");display:flex;height:",
            ";overflow:hidden;width:100%;",
          ],
          function (t) {
            return t.backgroundColor || r.ZP.gray10;
          },
          function (t) {
            return t.backgroundImage;
          },
          function (t) {
            return t.waveHeight || "64px";
          }
        ),
        v = d.ZP.div.withConfig({
          displayName: "ColumnedListStyles__StyledBottomWaveBackground",
          componentId: "sc-16l5k6f-4",
        })(
          [
            "background-color:",
            ";background-image:url(",
            ");display:flex;height:",
            ";overflow:hidden;width:100%;",
          ],
          function (t) {
            return t.backgroundColor || r.ZP.gray10;
          },
          function (t) {
            return t.backgroundImage;
          },
          function (t) {
            return t.waveHeight || "64px";
          }
        ),
        y = o(85893),
        w = function (t) {
          var e = t.content;
          return (0, y.jsxs)(Z, {
            sectionPadding:
              null === e || void 0 === e ? void 0 : e.sectionPadding,
            backgroundColor: e.bodyBackgroundColor,
            children: [
              (null === e || void 0 === e ? void 0 : e.topBackgroundImage) &&
                (0, y.jsx)(f, {
                  backgroundImage: e.topBackgroundImage,
                  backgroundColor: e.topBackgroundColor,
                  waveHeight: e.waveHeight,
                }),
              (0, y.jsx)(m, {
                backgroundColor:
                  null !== e && void 0 !== e && e.backgroundColor
                    ? e.backgroundColor
                    : "purple5",
                backgroundOpacity:
                  null !== e && void 0 !== e && e.backgroundColorOpacity
                    ? e.backgroundColorOpacity
                    : 0.5,
                children: (0, y.jsxs)(h, {
                  foregroundColor:
                    null !== e && void 0 !== e && e.foregroundColor
                      ? e.foregroundColor
                      : "teal1",
                  children: [
                    ((null === e || void 0 === e ? void 0 : e.title) ||
                      e.body) &&
                      (0, y.jsxs)(x, {
                        children: [
                          (null === e || void 0 === e ? void 0 : e.title) &&
                            (0, y.jsx)(k, {
                              renderAs: "h2",
                              children: e.title,
                            }),
                          (null === e || void 0 === e ? void 0 : e.body) &&
                            (0, y.jsx)(s.Z, {
                              renderAs: "p",
                              children: e.body,
                            }),
                        ],
                      }),
                    (null === e || void 0 === e ? void 0 : e.items) &&
                      (0, y.jsx)("ul", {
                        children: e.items.map(function (t) {
                          return (0, y.jsx)("li", { children: t }, t);
                        }),
                      }),
                  ],
                }),
              }),
              (null === e || void 0 === e ? void 0 : e.bottomBackgroundImage) &&
                (0, y.jsx)(v, {
                  backgroundImage: e.bottomBackgroundImage,
                  backgroundColor: e.bottomBackgroundColor,
                  waveHeight: e.waveHeight,
                }),
            ],
          });
        },
        Z = (0, d.ZP)(g.Z).withConfig({
          displayName: "ColumnedList___StyledSection",
          componentId: "sc-1v2jhr6-0",
        })(["", ""], p),
        k = (0, d.ZP)(s.Z).withConfig({
          displayName: "ColumnedList___StyledHeading",
          componentId: "sc-1v2jhr6-1",
        })(["", ""], b),
        C = o(5477),
        P = o(87005),
        _ = o(52592),
        S = o(55581),
        A = o(76424),
        j = o(54330),
        B = o(40089),
        L = "/_next/static/media/bottomWaveSlice.539454d9.svg",
        I = "/_next/static/media/pricing-bandwidth-graph.42984292.svg",
        N = "/_next/static/media/pricing-investment-study.b1216c8e.jpg",
        T = o(70721),
        R = o(40695),
        D = "/_next/static/media/topWaveSlice.65736fe9.svg",
        F = function (t) {
          var e = t.data,
            o = {
              backgroundColor: r.ZP.green3,
              titleColor: r.ZP.gray2,
              textColor: r.ZP.gray2,
              linkColor: r.ZP.gray2,
              title: "Still have questions?",
              text: "Have a complex setup or additional questions around pricing? Contact our sales team to get more information on DigitalOcean pricing.",
              linkText: "Contact sales",
              linkUrl: "/company/contact/sales/",
              bannerPositionTop: "0",
              bannerImage: B.Z.src,
              backgroundImgHeight: "230px",
            },
            i = {
              backgroundColor: r.ZP.blueLight,
              titleColor: r.ZP.white,
              textColor: r.ZP.white,
              title: "Simple, predictable pricing",
              text: "Always know what you'll pay with monthly caps and flat pricing.",
              imageLeft: T.Z.src,
              imageRight: R.Z.src,
              heroImageLeftProperties: {
                width: "272px",
                height: "823px",
                bottom: "-100px",
                left: "0",
                top: null,
                right: null,
              },
              heroImageRightProperties: {
                width: "391px",
                height: "895px",
                bottom: "-240px",
                right: "-100px",
                top: null,
              },
            },
            n = {
              topBackgroundImage: D,
              bottomBackgroundImage: L,
              waveHeight: "64px",
              title: "Platform benefits",
              body: "All the capabilities you need to build and scale your apps, included at no additional cost.",
              items: [
                "Build and deploy "
                  .concat(
                    e.extras.appPlatformAllowance.toLocaleString(),
                    " static "
                  )
                  .concat(
                    (0, l._)("site", e.extras.appPlatformAllowance),
                    " for free"
                  ),
                "Transfer to and within VPCs is free, create as many VPCs as you want for no additional cost",
                "Free Reserved IPs when assigned to a Droplet",
                "Industry leading bandwidth pricing, Droplets include free outbound data transfer, starting at ".concat(
                  e.extras.dropletMinimumBandwidth.toLocaleString(),
                  " GiB / mo"
                ),
                "Free DNS management",
                "Free container registry with "
                  .concat(
                    e.extras.containerRegistryFree.repositories.toLocaleString(),
                    " repositor"
                  )
                  .concat(
                    1 === e.extras.containerRegistryFree.repositories
                      ? "y"
                      : "ies",
                    " and "
                  )
                  .concat(
                    e.extras.containerRegistryFree.price.storageQuota < 1
                      ? "".concat(
                          (
                            1024 *
                            e.extras.containerRegistryFree.price.storageQuota
                          ).toLocaleString(),
                          " MiB"
                        )
                      : "".concat(
                          e.extras.containerRegistryFree.price.storageQuota.toLocaleString(),
                          " GiB"
                        ),
                    " storage"
                  ),
                "Free cloud firewalls",
                "Collect metrics on visibility, monitor Droplet performance, and get free alerts when problems arise in your infrastructure",
                "Use ".concat(
                  e.extras.functionsAllowance.toLocaleString(),
                  " GiB-seconds per month for free with DigitalOcean Functions. There are no additional charges for function invocations."
                ),
              ],
            },
            d = {
              bodyBackgroundColor: "grayLightest",
              title: "Choose the cloud solutions you need",
              titleWidth: "100%",
              titleMarginTop: "64px",
              maxWidth: "416px",
              rowsPerColumn: 3,
              sectionPadding: "0 0 64px",
              cards: [
                {
                  id: 1,
                  url: "/pricing/droplets",
                  title: "Droplets",
                  subtitle: "Virtual Machines",
                  tooltip: {
                    text: "* starting price",
                    backgroundColor: r.ZP.blueLight,
                  },
                  cost: e.prices.droplets.toLocaleString(),
                  features: [
                    { text: "Deploy in seconds", img: j.Z },
                    { text: "Scale up on demand", img: j.Z },
                    {
                      text: "Run any workload - from mission critical apps to low traffic sites",
                      img: j.Z,
                    },
                  ],
                },
                {
                  id: 2,
                  url: "/pricing/kubernetes",
                  title: "Kubernetes",
                  cost: e.prices.kubernetes.toLocaleString(),
                  tooltip: {
                    text: "* starting price",
                    backgroundColor: r.ZP.blueLight,
                  },
                  features: [
                    { text: "Simple, managed Kubernetes", img: j.Z },
                    { text: "Free control plane", img: j.Z },
                    {
                      text: "Scale automatically, high availability",
                      img: j.Z,
                    },
                  ],
                },
                {
                  id: 3,
                  url: "/pricing/app-platform",
                  title: "App Platform",
                  tooltip: {
                    text: "* starting price",
                    backgroundColor: r.ZP.blueLight,
                  },
                  infoBubble: {
                    text: "Newly added",
                    backgroundColor: r.ZP.white,
                  },
                  cost: e.prices.appPlatform.toLocaleString(),
                  features: [
                    { text: "Build, deploy and scale apps quickly", img: j.Z },
                    {
                      text: "Fully managed solution, zero infrastructure management",
                      img: j.Z,
                    },
                    { text: "Highly scalable", img: j.Z },
                  ],
                },
                {
                  id: 10,
                  url: "/pricing/functions",
                  tooltip: {
                    text: "* starting price",
                    backgroundColor: r.ZP.blueLight,
                  },
                  title: "Functions",
                  cost: e.prices.functions.toLocaleString(),
                  features: [
                    { text: "Focus on building great apps", img: j.Z },
                    { text: "Pay for what you use", img: j.Z },
                    { text: "Scale automatically", img: j.Z },
                  ],
                },
                {
                  id: 4,
                  url: "/pricing/managed-databases",
                  title: "Databases",
                  subtitle: "Fully Managed",
                  cost: e.prices.managedDatabases.toLocaleString(),
                  tooltip: {
                    text: "* starting price",
                    backgroundColor: r.ZP.blueLight,
                  },
                  features: [
                    {
                      text: "Managed MongoDB, PostgreSQL, MySQL, and Redis",
                      img: j.Z,
                    },
                    {
                      text: "Worry-free setup, maintenance, and easy migration ",
                      img: j.Z,
                    },
                    {
                      text: "Free daily backups, automated failover, and more!",
                      img: j.Z,
                    },
                  ],
                },
                {
                  id: 5,
                  url: "/pricing/spaces-object-storage",
                  title: "Spaces",
                  subtitle: "Object storage",
                  tooltip: {
                    text: "* starting price",
                    backgroundColor: r.ZP.blueLight,
                  },
                  cost: e.prices.spacesObjectStorage.toLocaleString(),
                  features: [
                    { text: "S3-compatible object storage", img: j.Z },
                    { text: "Highly scalable", img: j.Z },
                    { text: "Built in CDN", img: j.Z },
                  ],
                },
                {
                  id: 6,
                  url: "/pricing/volumes",
                  title: "Volumes",
                  subtitle: "Block storage",
                  tooltip: {
                    text: "* starting price",
                    backgroundColor: r.ZP.blueLight,
                  },
                  cost: e.prices.volumes.toLocaleString(),
                  features: [
                    { text: "Block storage", img: j.Z },
                    { text: "Highly available", img: j.Z },
                    {
                      text: "Easily scale block storage, resize when needed, and move them between droplets",
                      img: j.Z,
                    },
                  ],
                },
                {
                  id: 7,
                  url: "/pricing/load-balancers",
                  title: "Load balancers",
                  cost: e.prices.loadBalancers.toLocaleString(),
                  tooltip: {
                    text: "* starting price",
                    backgroundColor: r.ZP.blueLight,
                  },
                  features: [
                    {
                      text: "Improve availability, performance, and scalability",
                      img: j.Z,
                    },
                    { text: "Let\u2019s Encrypt and HTTP/2 support", img: j.Z },
                    {
                      text: "Compatible with Droplets and DigitalOcean Kubernetes",
                      img: j.Z,
                    },
                  ],
                },
                {
                  id: 8,
                  url: "/pricing/container-registry",
                  title: "Container Registry",
                  cost: e.prices.containerRegistry.toLocaleString(),
                  tooltip: {
                    text: "* starting price",
                    backgroundColor: r.ZP.blueLight,
                  },
                  features: [
                    {
                      text: "Easily store and manage private container images",
                      img: j.Z,
                    },
                    {
                      text: "Transfer container images over high-speed HTTPs connections to servers across four continents",
                      img: j.Z,
                    },
                  ],
                },
                {
                  id: 11,
                  url: "/pricing/support",
                  title: "Support Plan",
                  cost: e.prices.support.toLocaleString(),
                  tooltip: {
                    text: "* starting price",
                    backgroundColor: r.ZP.blueLight,
                  },
                  features: [
                    {
                      text: "Find answers to common questions, development guidelines written by experts and get free email support ",
                      img: j.Z,
                    },
                    {
                      text: "Ideal for those testing ideas and hosting small applications",
                      img: j.Z,
                    },
                  ],
                },
                {
                  id: 12,
                  url: "/pricing/uptime-monitoring",
                  coralfyRaised: !0,
                  backgroundColor: r.ZP.blueLight,
                  textColor: "light",
                  infoBubble: {
                    text: "Newly added",
                    backgroundColor: r.ZP.white,
                  },
                  tooltip: {
                    text: "* starting price",
                    backgroundColor: r.ZP.blueLight,
                  },
                  title: "Uptime",
                  cost: e.prices.uptimeMonitoring.toLocaleString(),
                  features: [
                    {
                      textColor: r.ZP.white,
                      text: "Uptime and latency checks",
                      img: j.Z,
                    },
                    {
                      textColor: r.ZP.white,
                      text: "Alerts by email and Slack",
                      img: j.Z,
                    },
                    {
                      textColor: r.ZP.white,
                      text: ""
                        .concat(
                          e.extras.uptimeMonitoringAllowance.toLocaleString(),
                          " Uptime "
                        )
                        .concat(
                          (0, l._)("Check", e.extras.uptimeMonitoringAllowance),
                          "/month included with every account"
                        ),
                      img: j.Z,
                    },
                  ],
                },
              ],
            },
            s = {
              contentLeft: !0,
              section: [
                {
                  title: "Experience a 186% return on investment",
                  body: "A Total Economic Impact study by Forrester found that an organization experiences benefits of $2.37 million over three years versus costs of $829,000, adding up to a net present value (NPV) of $1.55 million and an ROI of 186%. An organization using DigitalOcean finds a payback of their investment in less than 6 months.",
                  image: N,
                  link: "https://www.digitalocean.com/reports/forrester-total-economic-impact-study",
                  linkText: "Read the study",
                },
                {
                  title: "Industry-leading bandwidth pricing",
                  body: "Keep your bandwidth costs low with generous transfer quotas and outbound overage at just $".concat(
                    e.extras.dropletBandwidthPrice.toLocaleString(void 0, {
                      minimumFractionDigits: 2,
                    }),
                    "/GiB."
                  ),
                  image: I,
                  link: "https://www.digitalocean.com/community/tools/bandwidth/",
                  linkText: "Go to bandwidth calculator",
                },
              ],
            },
            g = {
              headline: { title: "Frequently Asked Questions" },
              items: (0, a.Z)().general,
            };
          return (0, y.jsxs)(y.Fragment, {
            children: [
              (0, y.jsx)(_.Z, { content: i }),
              (0, y.jsx)(P.Z, { content: d }),
              (0, y.jsx)(w, { content: n }),
              (0, y.jsx)(A.Z, { content: s }),
              (0, y.jsx)(c.Z, { content: g }),
              (0, y.jsx)(S.Z, { content: o }),
              (0, y.jsx)(C.Z, {
                headingText: "Start building today",
                rowText:
                  "Sign up now and you'll be up and running on DigitalOcean in just minutes.",
                buttonUrl: "https://cloud.digitalocean.com/registrations/new",
                buttonText: "Sign up to get started",
              }),
            ],
          });
        },
        O = o(18644),
        H = !0,
        z = function (t) {
          var e = t.announcementData,
            o = t.productsData,
            r = (0, i.useRouter)(),
            a = {
              description: "Pricing Overview | DigitalOcean",
              open_graph_image: O.Z.src,
              path: "/pricing",
              title: "Pricing Overview | DigitalOcean",
            };
          return (0, y.jsx)(n.Z, {
            announcementData: e,
            metaData: a,
            footerWaveColor: "#7BDEFF",
            children: r.isFallback
              ? (0, y.jsx)("div", { children: "Loading\u2026" })
              : (0, y.jsx)(F, { data: o }),
          });
        };
    },
    4620: function (t, e, o) {
      "use strict";
      o.d(e, {
        M: function () {
          return r;
        },
        _: function () {
          return n;
        },
      });
      var i = o(57805),
        n = function (t, e) {
          return 1 === e ? t : (0, i.Z)(t);
        },
        r = function (t, e) {
          return "".concat(e.toLocaleString(), " ").concat(n(t, e));
        };
    },
    5918: function (t, e) {
      "use strict";
      var o = function () {
        return ((65536 * (1 + Math.random())) | 0).toString(16).substring(1);
      };
      e.Z = function () {
        var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 8;
        return Array(t)
          .fill(null)
          .map(function () {
            return o();
          })
          .join("-");
      };
    },
    20609: function (t, e, o) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/pricing",
        function () {
          return o(4309);
        },
      ]);
    },
    54330: function (t, e) {
      "use strict";
      e.Z = {
        src: "/_next/static/media/green-checkmark.3c14b55a.svg",
        height: 24,
        width: 32,
      };
    },
    40089: function (t, e) {
      "use strict";
      e.Z = {
        src: "/_next/static/media/mongodb-sword.a078a7e1.svg",
        height: 208,
        width: 417,
      };
    },
    18644: function (t, e) {
      "use strict";
      e.Z = {
        src: "/_next/static/media/do-logo.bde9a830.png",
        height: 58,
        width: 346,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAIElEQVR4nGNkyPiXx8DAcBWImYGYC4h/AfFPIP4LxGwAZzQFrqmbADEAAAAASUVORK5CYII=",
      };
    },
  },
  function (t) {
    t.O(
      0,
      [1092, 8616, 8249, 8417, 9963, 6424, 1757, 7005, 9774, 2888, 179],
      function () {
        return (e = 20609), t((t.s = e));
        var e;
      }
    );
    var e = t.O();
    _N_E = e;
  },
]);
