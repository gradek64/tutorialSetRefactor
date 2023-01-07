(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1751],
  {
    50309: function (t, e, n) {
      "use strict";
      n.d(e, {
        $7: function () {
          return p;
        },
        $w: function () {
          return s;
        },
        BG: function () {
          return v;
        },
        Ek: function () {
          return d;
        },
        Gl: function () {
          return y;
        },
        K3: function () {
          return C;
        },
        LX: function () {
          return m;
        },
        OY: function () {
          return h;
        },
        St: function () {
          return l;
        },
        UL: function () {
          return f;
        },
        _s: function () {
          return r;
        },
        dL: function () {
          return c;
        },
        e2: function () {
          return g;
        },
        ke: function () {
          return x;
        },
        lV: function () {
          return w;
        },
        mp: function () {
          return Z;
        },
        o3: function () {
          return _;
        },
        oZ: function () {
          return b;
        },
        ok: function () {
          return S;
        },
        v0: function () {
          return u;
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
        d = a.ZP.p.withConfig({
          displayName: "StaticCardsStyles__StyledDisclaimer",
          componentId: "sc-16322s4-0",
        })(
          [
            "color:",
            ";display:flex;font-size:14px;margin:64px auto 0;max-width:670px;text-align:center;width:100%;",
          ],
          o.ZP.gray4
        ),
        c = a.ZP.div.withConfig({
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
        l = a.ZP.div.withConfig({
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
        p = (0, a.iv)(
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
        u = a.ZP.div.withConfig({
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
        h = a.ZP.div.withConfig({
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
        m = a.ZP.div.withConfig({
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
        f = a.ZP.div.withConfig({
          displayName: "StaticCardsStyles__StyledCardLink",
          componentId: "sc-16322s4-8",
        })(["margin-top:auto;width:100%;"]),
        x = a.ZP.div.withConfig({
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
        w = a.ZP.ul.withConfig({
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
        b = a.ZP.div.withConfig({
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
        C = a.ZP.div.withConfig({
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
        S = a.ZP.div.withConfig({
          displayName: "StaticCardsStyles__StyledCardsSection",
          componentId: "sc-16322s4-14",
        })(["background-color:", ";"], function (t) {
          var e;
          return (0,
          o.E9)(o.ZP[t.backgroundColor] || t.backgroundColor || o.ZP.grayLightest, null !== (e = t.backgroundOpacity) && void 0 !== e ? e : 1);
        }),
        v = a.ZP.div.withConfig({
          displayName: "StaticCardsStyles__SubHeadingLink",
          componentId: "sc-16322s4-15",
        })(["display:flex;justify-content:center;margin-bottom:32px;"]),
        _ =
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
        Z = a.ZP.p.withConfig({
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
    95223: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          __N_SSG: function () {
            return z;
          },
          default: function () {
            return A;
          },
        });
      var i = n(11163),
        o = n(88134),
        a = n(99963),
        r = n(37797),
        d = n(58069),
        c = n(71778),
        s = n(64254),
        l = n(12382),
        p = {
          src: "/_next/static/media/image2.6d5c14d2.svg",
          height: 75,
          width: 75,
        },
        u = {
          src: "/_next/static/media/image3.3041e665.svg",
          height: 75,
          width: 75,
        },
        g = n(36368),
        h = n(10518),
        m = n(17534),
        f = n(87288),
        x = (0, r.iv)(
          [
            "display:flex;flex-direction:row;justify-content:space-between;min-height:576px;padding:128px 24px;",
            "{flex-direction:column;padding:40px 24px;}",
          ],
          (0, m.X)(m.A.tablet)
        ),
        y = r.ZP.div.withConfig({
          displayName: "ContactSalesTemplateStyles__StyledRightSide",
          componentId: "sc-v4zejm-0",
        })(
          [
            "align-self:start;display:flex;flex-direction:column;justify-self:flex-end;margin-left:80px;",
            "{margin-left:0;}",
          ],
          (0, m.X)(m.A.tablet)
        ),
        w =
          ((0, r.iv)(["color:", ";"], o.ZP.white),
          r.ZP.div.withConfig({
            displayName: "ContactSalesTemplateStyles__StyledPlaceholder",
            componentId: "sc-v4zejm-1",
          })(
            [
              "background:white;border-radius:24px;box-shadow:0 6px 20px -6px ",
              ";max-width:752px;padding:32px 40px 0;width:100%;",
              "{padding:32px 8px 0;}section{padding:0;}button{margin:32px 0;}label{font-family:",
              ";margin-bottom:0;text-transform:lowercase;}input:not(.react-select__input){border:none !important;border-bottom:1px solid #E3E8F4 !important;border-radius:0 !important;height:10px;}.anchor{padding-top:120px !important;}.field{margin-bottom:24px !important;max-height:fit-content;&:last-of-type{width:100%;}}.form-ready{padding-top:0;h2{font-size:40px;text-align:left;}p{font-size:16px;margin-bottom:24px;text-align:left;}}.fields{justify-content:space-between;margin:auto;}",
            ],
            (0, o.E9)(o.ZP.blueCPUInfo, 0.15),
            (0, m.X)(m.A.tablet),
            (0, f.Z)("code")
          )),
        b = r.ZP.div.withConfig({
          displayName: "ContactSalesTemplateStyles__StyledHeroContainer",
          componentId: "sc-v4zejm-2",
        })(
          [
            "background-color:",
            ";overflow:hidden;padding:72px 0 0;position:relative;z-index:0;",
          ],
          function (t) {
            return t.color || o.ZP.grayLightest;
          }
        ),
        C = r.ZP.ul.withConfig({
          displayName: "ContactSalesTemplateStyles__StyledHeroItems",
          componentId: "sc-v4zejm-3",
        })(["display:flex;flex-direction:column;max-width:448px;width:100%;"]),
        S = r.ZP.li.withConfig({
          displayName: "ContactSalesTemplateStyles__StyledHeroItem",
          componentId: "sc-v4zejm-4",
        })(
          [
            "color:",
            ";margin-bottom:24px;h3{font-size:20px;font-weight:700;}p{font-size:16px;}a{color:",
            ";}",
          ],
          o.ZP.white,
          o.ZP.white
        ),
        v = r.ZP.div.withConfig({
          displayName: "ContactSalesTemplateStyles__StyledWhitedRounded",
          componentId: "sc-v4zejm-5",
        })(
          [
            "height:64px;position:relative;width:100%;.roundedTop{background-color:",
            ";border-top-left-radius:40px;border-top-right-radius:40px;height:100%;position:absolute;top:0;width:100%;",
            "{border-top-left-radius:64px;border-top-right-radius:64px;}}",
          ],
          o.ZP.grayLightest,
          (0, m.X)(m.A.desktop, "min")
        ),
        _ = r.ZP.div.withConfig({
          displayName: "ContactSalesTemplateStyles__StyledHeroTitle",
          componentId: "sc-v4zejm-6",
        })(
          ["margin:32px 0 8px;max-width:864px;h2{color:", ";font-size:40px;}"],
          function (t) {
            return t.color || o.ZP.blue1;
          }
        ),
        Z = r.ZP.div.withConfig({
          displayName: "ContactSalesTemplateStyles__StyledHeroText",
          componentId: "sc-v4zejm-7",
        })(
          [
            "margin:0 auto;max-width:640px;p{color:",
            ";margin:0;",
            "{font-size:16px;}}",
          ],
          function (t) {
            return t.color || o.ZP.blue1;
          },
          (0, m.X)(m.A.desktop, "min")
        ),
        P = r.ZP.div.withConfig({
          displayName: "ContactSalesTemplateStyles__StyledSubtext",
          componentId: "sc-v4zejm-8",
        })(["margin:0 auto 40px;max-width:640px;width:100%;"]),
        k = n(53017),
        I = n(85893),
        j = function (t) {
          var e = t.content;
          return (0, I.jsxs)(b, {
            color: e.backgroundColor,
            children: [
              (0, I.jsxs)(N, {
                children: [
                  (0, I.jsx)(w, {
                    children: (0, I.jsx)(k.Z, { slug: "contact-sales-form" }),
                  }),
                  (0, I.jsxs)(y, {
                    children: [
                      (0, I.jsx)(_, {
                        color: e.titleColor,
                        children: (0, I.jsx)(c.Z, {
                          heroHeading: !0,
                          renderAs: "h2",
                          textAlign: e.textAlign,
                          children: e.title,
                        }),
                      }),
                      (0, I.jsx)(P, {
                        children: (0, I.jsx)(Z, {
                          color: e.textColor,
                          children: (0, I.jsx)(c.Z, {
                            renderAs: "subheading",
                            textAlign: e.textAlign,
                            children: e.text,
                          }),
                        }),
                      }),
                      (0, I.jsx)(C, {
                        children: e.items.map(function (t) {
                          return (0,
                          I.jsxs)(S, { children: [(0, I.jsx)("img", { src: t.contentLogo.src, alt: "logo" }), (0, I.jsx)("h3", { children: t.contentTitle }), (0, I.jsx)("p", { children: t.contentText })] }, t.contentTitle);
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, I.jsx)(v, {
                children: (0, I.jsx)("div", { className: "roundedTop" }),
              }),
            ],
          });
        },
        T = function () {
          var t = {
              backgroundColor: o.ZP.blueLight,
              textColor: o.ZP.white,
              title: "Why work with us?",
              titleColor: o.ZP.white,
              textAlign: "left",
              text: "We are on a mission to help our customers focus on testing their Ideas, building their businesses and realizing their dreams.  When we are working with a business we aim to make their migrations as smooth as possible and answer any questions ahead of time.",
              items: [
                {
                  contentLogo: l.Z,
                  contentTitle: "Migration assistance",
                  contentText:
                    "Immediate, on-demand, proof-of-concept support for your migration, so you\u2019re never left wondering what\u2019s going on or what will happen next.",
                },
                {
                  contentLogo: p,
                  contentTitle: "Support & service",
                  contentText:
                    "Technical experts and dedicated account managers provide ongoing guidance and support.",
                },
                {
                  contentLogo: u,
                  contentTitle: "Control your costs",
                  contentText:
                    "Our transparent, predictable pricing ensures that you know what you\u2019ll always know what you\u2019re paying. Period.",
                },
              ],
            },
            e = {
              bodyBackgroundColor: o.ZP.gray10,
              backgroundColor: o.ZP.gray10,
              paddingTop: "64px",
              graphicForeground: [
                {
                  alt: "Fish graphic",
                  url: h.Z.src,
                  position: {
                    bottom: "auto",
                    left: "auto",
                    right: "80px",
                    top: "24px",
                  },
                },
                {
                  alt: "Fish graphic",
                  url: g.Z.src,
                  position: {
                    bottom: "184px",
                    left: "-104px",
                    right: "auto",
                    top: "auto",
                  },
                },
              ],
              items: [
                {
                  logo: {
                    value:
                      "https://doimages.nyc3.digitaloceanspaces.com/aded19b8-3528-401d-94a0-cabe55e1c9ec_routetrust-brand.png",
                  },
                  quote: {
                    value:
                      "We\u2019re a small company, and we monitor our costs very closely. If we were to use AWS for everything, our costs would be around $55,000 more per month than they are with DigitalOcean. We wouldn\u2019t be able to compete in certain products.",
                  },
                  author: { value: "David Shifley" },
                  authorDetails: { value: "CTO, RouteTrust" },
                },
                {
                  logo: {
                    value:
                      "https://doimages.nyc3.digitaloceanspaces.com/655ff4db-537c-4cea-adad-41012422a1b1_426ea90a-7b1b-4244-acfb-0b3c53eb17d7_Coursicle-Logo-01.jpeg",
                  },
                  quote: {
                    value:
                      "The biggest impact on Coursicle \u2013 and why we\u2019re staying with DigitalOcean \u2013 is the way they flipped typical customer service behavior on its head. DigitalOcean\u2019s support team would spend extra time checking whether we were satisfied. They\u2019d send follow ups to make sure everything was good. They cared about building a good experience for us.",
                  },
                  author: { value: "Joe Puccio" },
                  authorDetails: { value: "Cofounder of Coursicle" },
                },
                {
                  logo: {
                    value:
                      "https://doimages.nyc3.digitaloceanspaces.com/775590b7-0c83-4525-9b9b-be05a7fc24d2_Snapt+logo.png",
                  },
                  quote: {
                    value:
                      "We partnered with DigitalOcean because of the similarity of our target audiences, the goal of DigitalOcean\u2019s technology partnerships, and the importance of building the best DevOps experience for our customers.",
                  },
                  author: { value: "Douglas Cherry" },
                  authorDetails: { value: "Cofounder of Snapt" },
                },
              ],
            };
          return (0, I.jsxs)(I.Fragment, {
            children: [
              (0, I.jsx)(j, { content: t }),
              (0, I.jsx)(s.Z, { content: e }),
            ],
          });
        },
        N = (0, r.ZP)(d.Z).withConfig({
          displayName: "ContactSalesTemplate___StyledContainer",
          componentId: "sc-lik38d-0",
        })(["", ""], x),
        z = !0,
        A = function (t) {
          var e = t.announcementData,
            n = (0, i.useRouter)();
          return (0, I.jsx)(a.Z, {
            announcementData: e,
            metaData: {
              path: "/company/contact/sales",
              description:
                "Get in touch with our team to help scale and migrate your applications to DigitalOcean.",
              title: "Contact Sales at DigitalOcean",
              open_graph_image: {},
            },
            footerWaveColor: o.ZP.gray10,
            children: n.isFallback
              ? (0, I.jsx)("div", { children: "Loading\u2026" })
              : (0, I.jsx)(T, {}),
          });
        };
    },
    2924: function (t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/company/contact/sales",
        function () {
          return n(95223);
        },
      ]);
    },
    12382: function (t, e) {
      "use strict";
      e.Z = {
        src: "/_next/static/media/image1.3bd77dfd.svg",
        height: 75,
        width: 75,
      };
    },
    36368: function (t, e) {
      "use strict";
      e.Z = {
        src: "/_next/static/media/green-fish.93646536.svg",
        height: 76,
        width: 188,
      };
    },
    10518: function (t, e) {
      "use strict";
      e.Z = {
        src: "/_next/static/media/pink-fish.ad4edcac.svg",
        height: 82,
        width: 204,
      };
    },
  },
  function (t) {
    t.O(
      0,
      [
        1092, 8616, 5935, 1549, 1033, 8249, 8417, 9963, 4221, 3017, 8125, 9774,
        2888, 179,
      ],
      function () {
        return (e = 2924), t((t.s = e));
        var e;
      }
    );
    var e = t.O();
    _N_E = e;
  },
]);
