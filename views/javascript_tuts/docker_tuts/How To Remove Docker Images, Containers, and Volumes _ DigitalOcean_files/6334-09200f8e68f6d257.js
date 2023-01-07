"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6334],
  {
    76116: function (e, t, n) {
      n.d(t, {
        CD: function () {
          return g;
        },
        CY: function () {
          return x;
        },
        Hz: function () {
          return p;
        },
        IK: function () {
          return l;
        },
        U1: function () {
          return f;
        },
        UP: function () {
          return d;
        },
        fT: function () {
          return u;
        },
        rO: function () {
          return s;
        },
        uS: function () {
          return h;
        },
        w5: function () {
          return c;
        },
        y_: function () {
          return m;
        },
      });
      var i = n(17534),
        o = n(88134),
        r = n(87288),
        a = n(37797),
        l = a.ZP.div.withConfig({
          displayName: "BlogCardStyles__StyledBlogCard",
          componentId: "sc-1pz41tg-0",
        })(
          [
            "background-color:",
            ";border-radius:24px;box-shadow:0 6px 20px -6px ",
            ";cursor:pointer;display:flex;flex-direction:column;height:100%;overflow:hidden;position:relative;text-decoration:none;transition:all 0.5s ease;width:100%;img{object-fit:cover;}&:hover{box-shadow:0 10px 20px ",
            ";}",
          ],
          o.ZP.white,
          (0, o.E9)(o.ZP.blueCPUInfo, 0.15),
          (0, o.E9)(o.ZP.blueCPUInfo, 0.35)
        ),
        d = (0, a.iv)([
          "bottom:0;left:0;position:absolute;right:0;top:0;z-index:1;",
        ]),
        s = a.ZP.div.withConfig({
          displayName: "BlogCardStyles__StyledBlogImage",
          componentId: "sc-1pz41tg-1",
        })(
          [
            "position:relative;&::after{content:'';display:block;",
            "}img{height:100%;left:0;object-fit:cover;position:absolute;top:0;width:100%;}",
          ],
          function (e) {
            return e.isLarge
              ? "\n      padding-bottom: ".concat((400 / 752) * 100, "%;\n    ")
              : "\n      padding-bottom: ".concat(
                  (222 / 416) * 100,
                  "%;\n    "
                );
          }
        ),
        c = a.ZP.div.withConfig({
          displayName: "BlogCardStyles__StyledTag",
          componentId: "sc-1pz41tg-2",
        })(
          [
            "background-color:",
            ";border-radius:8px;color:",
            ";font-family:",
            ";font-weight:600;left:16px;padding:8px 16px;position:absolute;text-transform:capitalize;top:16px;",
          ],
          function (e) {
            var t = e.backgroundColor;
            return void 0 === t ? o.ZP.honeydew : t;
          },
          o.ZP.gray2,
          (0, r.Z)("code")
        ),
        p = a.ZP.div.withConfig({
          displayName: "BlogCardStyles__StyledContent",
          componentId: "sc-1pz41tg-3",
        })(
          [
            "color:",
            ";display:flex;flex-direction:column;flex-grow:1;padding:24px;",
            "{",
            " padding:24px 40px;}p{font-size:14px;line-height:",
            ";margin:0;",
            "}a,a:visited{color:",
            ";}",
          ],
          o.ZP.gray4,
          (0, i.X)(i.A.desktop, "min"),
          function (e) {
            return e.isLarge && "\n      padding: 32px 40px;\n    ";
          },
          22 / 14,
          function (e) {
            return (
              e.isLarge &&
              "\n      font-size: 16px;\n      line-height: ".concat(
                1.5,
                ";\n    "
              )
            );
          },
          o.ZP.blue2
        ),
        u = a.ZP.h4.withConfig({
          displayName: "BlogCardStyles__StyledBlogTitle",
          componentId: "sc-1pz41tg-4",
        })(
          [
            "color:",
            ";font-size:20px;line-height:",
            ";margin:0 0 16px;",
            "{",
            "}",
          ],
          o.ZP.gray2,
          1.4,
          (0, i.X)(i.A.tablet, "min"),
          function (e) {
            return (
              e.isLarge &&
              "\n      font-size: 32px;\n      letter-spacing: -0.5px;\n      line-height: ".concat(
                1.25,
                ";\n    "
              )
            );
          }
        ),
        g = a.ZP.div.withConfig({
          displayName: "BlogCardStyles__StyledBlogBody",
          componentId: "sc-1pz41tg-5",
        })(["margin-top:auto;"]),
        h = a.ZP.div.withConfig({
          displayName: "BlogCardStyles__StyledAuthorDetails",
          componentId: "sc-1pz41tg-6",
        })(
          [
            "align-items:center;display:flex;margin-bottom:8px;.author{color:",
            ";z-index:3;}img{border:2px solid ",
            ";border-radius:24px;height:48px;margin-right:16px;object-fit:cover;width:48px;}",
          ],
          o.ZP.blueLight,
          function (e) {
            return e.imageBorderColor || o.ZP.orange4;
          }
        ),
        m = a.ZP.div.withConfig({
          displayName: "BlogCardStyles__StyledAuthorText",
          componentId: "sc-1pz41tg-7",
        })(
          ["left:", ";position:absolute;z-index:2;", "{left:", ";}"],
          function (e) {
            return e.isLarge ? "96px" : "40px";
          },
          (0, i.X)(i.A.desktop),
          function (e) {
            return e.isLarge ? "88px" : "24px";
          }
        ),
        f = a.ZP.div.withConfig({
          displayName: "BlogCardStyles__StyledBlogCardMeta",
          componentId: "sc-1pz41tg-8",
        })(["p{margin:0;}"]),
        x = a.ZP.span.withConfig({
          displayName: "BlogCardStyles__StyledMiddleDot",
          componentId: "sc-1pz41tg-9",
        })(["margin:0 8px;"]);
    },
    3802: function (e, t, n) {
      var i = n(37797),
        o = n(98261),
        r = n(90352),
        a = n(76116),
        l = n(85893);
      t.Z = function (e) {
        var t = e.tag,
          n = e.author,
          i = e.timeLength,
          s = e.image,
          c = e.imageAlt,
          p = e.publishDate,
          u = e.title,
          g = e.link,
          h = e.isLarge;
        return (0, l.jsxs)(a.IK, {
          $isLarge: h,
          children: [
            (0, l.jsx)(d, {
              prefetch: !1,
              url: g,
              "aria-label": "Read more about ".concat(u),
            }),
            s &&
              (0, l.jsxs)(a.rO, {
                isLarge: h,
                children: [
                  (null === s || void 0 === s ? void 0 : s.src) &&
                    (0, l.jsx)("img", { src: s.src, alt: c }),
                  t && (0, l.jsx)(a.w5, { children: t }),
                ],
              }),
            (0, l.jsxs)(a.Hz, {
              isLarge: h,
              children: [
                (0, l.jsx)(a.fT, { isLarge: h, children: u }),
                (0, l.jsxs)(a.CD, {
                  children: [
                    (0, l.jsxs)(a.uS, {
                      children: [
                        (null === n || void 0 === n ? void 0 : n.image) &&
                          (0, l.jsx)("img", { src: n.image, alt: n.name }),
                        (0, l.jsxs)(a.y_, {
                          isLarge: h,
                          children: [
                            (0, l.jsx)(r.Z, {
                              className: "author",
                              prefetch: !1,
                              url: null === n || void 0 === n ? void 0 : n.url,
                              children:
                                null === n || void 0 === n ? void 0 : n.name,
                            }),
                            (null === n || void 0 === n ? void 0 : n.title) &&
                              (0, l.jsxs)(l.Fragment, {
                                children: [
                                  (0, l.jsx)(a.CY, { children: "\u2022" }),
                                  (0, l.jsx)("span", { children: n.title }),
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                    (p || i) &&
                      (0, l.jsx)(a.U1, {
                        children: (0, l.jsxs)("p", {
                          children: [
                            (0, o.Z)(p, !1, !0),
                            i &&
                              (0, l.jsxs)(l.Fragment, {
                                children: [
                                  (0, l.jsx)(a.CY, { children: "\u2022" }),
                                  (0, l.jsx)("span", { children: i }),
                                ],
                              }),
                          ],
                        }),
                      }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      var d = (0, i.ZP)(r.Z).withConfig({
        displayName: "BlogCard___StyledLazyLink",
        componentId: "sc-1n4iliw-0",
      })(["", ""], a.UP);
    },
    34634: function (e, t, n) {
      n.d(t, {
        Az: function () {
          return c;
        },
        CY: function () {
          return b;
        },
        FF: function () {
          return y;
        },
        Kn: function () {
          return x;
        },
        b5: function () {
          return p;
        },
        hB: function () {
          return u;
        },
        pS: function () {
          return m;
        },
        u8: function () {
          return f;
        },
        uS: function () {
          return g;
        },
        vO: function () {
          return h;
        },
      });
      var i = n(17534),
        o = n(88134),
        r = n(87288),
        a = n(37797),
        l = n(71778),
        d = n(90352),
        s = n(46878),
        c = a.ZP.div.withConfig({
          displayName: "BlogPickStyles__StyledDate",
          componentId: "sc-1oddvzx-0",
        })(["color:", ";display:block;z-index:3;"], o.ZP.gray4),
        p = a.ZP.div.withConfig({
          displayName: "BlogPickStyles__StyledAuthorContainer",
          componentId: "sc-1oddvzx-1",
        })(["font-size:14px;line-height:", ";margin-top:auto;"], 22 / 14),
        u = a.ZP.div.withConfig({
          displayName: "BlogPickStyles__StyledPickContent",
          componentId: "sc-1oddvzx-2",
        })(["display:flex;flex-direction:column;height:100%;"]),
        g = a.ZP.div.withConfig({
          displayName: "BlogPickStyles__StyledAuthorDetails",
          componentId: "sc-1oddvzx-3",
        })(
          [
            "align-items:center;display:flex;a,a:visited{color:",
            ";text-decoration:none;}img{border:2px solid ",
            ";border-radius:24px;height:48px;margin-right:16px;width:48px;}",
          ],
          o.ZP.blueLight,
          o.ZP.orange4
        ),
        h = (0, a.ZP)(l.Z)
          .attrs({ renderAs: "h3" })
          .withConfig({
            displayName: "BlogPickStyles__StyledBlogPickTitle",
            componentId: "sc-1oddvzx-4",
          })(
          [
            "color:",
            ";font-family:",
            ";font-size:",
            ";font-weight:600;line-height:26px;margin:0 0 8px;",
          ],
          o.ZP.blueDarker,
          (0, r.Z)("body"),
          function (e) {
            return e.fontSize || "22px";
          }
        ),
        m = a.ZP.div.withConfig({
          displayName: "BlogPickStyles__StyledPick",
          componentId: "sc-1oddvzx-5",
        })(
          [
            "align-items:flex-start;border-radius:24px;display:flex;flex-direction:column;margin:",
            ";max-width:",
            ";padding:24px;position:relative;transition:background-color 0.2s ease,box-shadow 0.2s ease;width:100%;z-index:2;&:last-of-type{margin-right:0;}&:hover{background-color:",
            ";box-shadow:0 6px 20px -6px ",
            ";}",
            "{background-color:",
            ";box-shadow:0 6px 20px -6px ",
            ";min-width:320px;}",
            "{margin-bottom:32px;}",
          ],
          function (e) {
            return e.margin || "0 48px 0 0";
          },
          function (e) {
            return e.maxWidth || "390px";
          },
          o.ZP.white,
          (0, o.E9)(o.ZP.blueCPUInfo, 0.15),
          (0, i.X)(i.A.desktop),
          o.ZP.white,
          (0, o.E9)(o.ZP.blueCPUInfo, 0.15),
          (0, i.X)(i.A.tablet)
        ),
        f =
          (a.ZP.div.withConfig({
            displayName: "BlogPickStyles__StyledPickTitle",
            componentId: "sc-1oddvzx-6",
          })(["display:block;"]),
          a.ZP.a.withConfig({
            displayName: "BlogPickStyles__StyledPickAuthor",
            componentId: "sc-1oddvzx-7",
          })(["display:block;"]),
          a.ZP.div.withConfig({
            displayName: "BlogPickStyles__StyledPicksContainer",
            componentId: "sc-1oddvzx-8",
          })(
            [
              "border:4px solid transparent;border-image:url(",
              ") 10 round;display:flex;flex-direction:column;height:200px;justify-content:center;margin-left:auto;margin-right:auto;margin-top:32px;max-width:1312px;width:100%;",
            ],
            s.Z.src
          ),
          (0, a.ZP)(d.Z).withConfig({
            displayName: "BlogPickStyles__StyledTopicTag",
            componentId: "sc-1oddvzx-9",
          })(
            [
              "align-items:center;background-color:",
              ";border-radius:8px;color:black;display:flex;font-family:",
              ";font-size:14px;font-weight:600;line-height:",
              ";margin:",
              ";padding:6px 12px;text-transform:capitalize;transition:filter 0.2s ease;width:fit-content;z-index:4;",
              "{font-size:16px;line-height:",
              ";padding:8px 16px;}&:hover{filter:brightness(0.8);}",
            ],
            function (e) {
              return e.$tagBgColor || o.ZP.white;
            },
            (0, r.Z)("code"),
            20 / 14,
            function (e) {
              return e.margin ? e.margin : "0 8px 8px 0";
            },
            (0, i.X)(i.A.desktop, "min"),
            1.5
          )),
        x = (0, a.ZP)(f)
          .attrs({ as: "div" })
          .withConfig({
            displayName: "BlogPickStyles__StyledTopicTagDiv",
            componentId: "sc-1oddvzx-10",
          })(["margin:0 0 8px;&:hover{filter:none;}"]),
        y = a.ZP.a.withConfig({
          displayName: "BlogPickStyles__StyledPickLink",
          componentId: "sc-1oddvzx-11",
        })(["bottom:0;left:0;position:absolute;right:0;top:0;"]),
        b = a.ZP.span.withConfig({
          displayName: "BlogPickStyles__StyledMiddleDot",
          componentId: "sc-1oddvzx-12",
        })(["margin:0 8px;"]);
    },
    55385: function (e, t, n) {
      n.d(t, {
        IK: function () {
          return p;
        },
        ud: function () {
          return v;
        },
        LZ: function () {
          return c;
        },
        Tg: function () {
          return x;
        },
        z8: function () {
          return m;
        },
        BX: function () {
          return h;
        },
        TG: function () {
          return f;
        },
        QD: function () {
          return y;
        },
        bM: function () {
          return g;
        },
        FB: function () {
          return s;
        },
        hd: function () {
          return u;
        },
        ux: function () {
          return d;
        },
        nT: function () {
          return b;
        },
      });
      var i = n(17534),
        o = n(88134),
        r = n(37797),
        a = n(90352),
        l = n(46878),
        d = (0, r.iv)(
          [
            "display:block;margin:0 auto;max-width:1440px;padding-top:64px;",
            "{padding-top:40px;}",
          ],
          (0, i.X)(i.A.desktop)
        ),
        s = r.ZP.ul.withConfig({
          displayName: "HeroBlogStyles__StyledTopicTagList",
          componentId: "sc-pdnp9q-0",
        })([
          "display:flex;flex-flow:wrap;height:fit-content;margin-bottom:-8px;overflow-y:auto;li{list-style:none;padding-left:none;}",
        ]),
        c =
          (r.ZP.h4.withConfig({
            displayName: "HeroBlogStyles__StyledBlogTitle",
            componentId: "sc-pdnp9q-1",
          })(["font-size:32px;margin:0 0 8px;"]),
          r.ZP.div.withConfig({
            displayName: "HeroBlogStyles__StyledCardsContainer",
            componentId: "sc-pdnp9q-2",
          })(
            [
              "display:grid;gap:24px;margin:0 auto;max-width:1360px;padding:0;",
              "{gap:32px;grid-template-columns:",
              "% ",
              "%;grid-template-rows:1fr auto;padding:0 24px;}",
            ],
            (0, i.X)(i.A.desktop, "min"),
            (752 / 1312) * 100,
            (528 / 1312) * 100
          )),
        p = r.ZP.div.withConfig({
          displayName: "HeroBlogStyles__StyledBlogCard",
          componentId: "sc-pdnp9q-3",
        })(
          ["grid-row:3;", "{grid-column:1;grid-row:1/-1;}"],
          (0, i.X)(i.A.desktop, "min")
        ),
        u = r.ZP.div.withConfig({
          displayName: "HeroBlogStyles__StyledTopicsContainer",
          componentId: "sc-pdnp9q-4",
        })(
          [
            "background-color:",
            ";border-radius:24px;display:flex;flex-direction:column;justify-content:center;padding:24px;",
            "{padding:40px;}h4{color:",
            ";font-weight:600;height:fit-content;line-height:",
            ";margin-bottom:16px;",
            "{margin-bottom:24px;}}",
          ],
          o.ZP.blue2,
          (0, i.X)(i.A.desktop, "min"),
          o.ZP.white,
          32 / 24,
          (0, i.X)(i.A.desktop, "min")
        ),
        g = r.ZP.div.withConfig({
          displayName: "HeroBlogStyles__StyledTemplateCard",
          componentId: "sc-pdnp9q-5",
        })(
          [
            "background-image:url(",
            ");background-position:center;background-repeat:no-repeat;background-size:cover;border-radius:24px;display:flex;flex-direction:column;justify-content:center;margin:",
            ";padding:24px 32px;position:relative;width:",
            ";h4{font-size:20px;font-weight:600;line-height:",
            ";margin:0 0 8px;}p{color:",
            ";font-size:14px;line-height:",
            ";margin:0 0 24px;&:last-child{margin-bottom:0;}}.padding{padding:6px 20px;}a{background-color:",
            ";border:none;border-radius:10px;color:white;display:block;font-size:16px;font-weight:600;line-height:24px;padding:6px 20px;text-align:center;}",
          ],
          "/_next/static/media/blog-template-sales-bg.23864ba4.png",
          function (e) {
            return e.margin ? e.margin : "0";
          },
          function (e) {
            return e.width ? e.width : "100%";
          },
          32 / 24,
          o.ZP.gray4,
          1.5,
          o.ZP.blue2
        ),
        h = r.ZP.div.withConfig({
          displayName: "HeroBlogStyles__StyledPicksContainer",
          componentId: "sc-pdnp9q-6",
        })(
          [
            "margin:32px auto 0;max-width:1360px;padding:48px 0;position:relative;",
            "{padding:48px 24px;}&::before,&::after{background:url(",
            ") repeat-x;background-position:0 center;content:'';height:16px;left:0;position:absolute;right:0;",
            "{left:24px;right:24px;}}&::before{top:0;}&::after{bottom:0;}",
          ],
          (0, i.X)(i.A.desktop, "min"),
          l.Z.src,
          (0, i.X)(i.A.desktop, "min")
        ),
        m = r.ZP.div.withConfig({
          displayName: "HeroBlogStyles__StyledPicks",
          componentId: "sc-pdnp9q-7",
        })(
          ["display:flex;justify-content:space-between;", "{overflow:auto;}"],
          (0, i.X)(i.A.desktop)
        ),
        f = r.ZP.h2.withConfig({
          displayName: "HeroBlogStyles__StyledPicksHeading",
          componentId: "sc-pdnp9q-8",
        })(["font-size:24px;font-weight:600;line-height:32px;margin:0 0 8px;"]),
        x = r.ZP.div.withConfig({
          displayName: "HeroBlogStyles__StyledHeroTitle",
          componentId: "sc-pdnp9q-9",
        })(["h1{font-weight:700;margin:32px 0 16px;z-index:0;}"]),
        y = r.ZP.div.withConfig({
          displayName: "HeroBlogStyles__StyledSubtext",
          componentId: "sc-pdnp9q-10",
        })([
          "display:flex;justify-content:center;margin:auto;margin-bottom:64px;max-width:640px;width:100%;",
        ]),
        b = (0, r.iv)(
          [
            "color:",
            ";font-size:16px;max-width:640px;text-align:center;width:100%;",
          ],
          o.ZP.gray4
        ),
        v = (0, r.ZP)(a.Z).withConfig({
          displayName: "HeroBlogStyles__StyledBlogLazyLink",
          componentId: "sc-pdnp9q-11",
        })(["&:hover{background-color:", " !important;}"], o.ZP.blueHover);
    },
    70699: function (e, t, n) {
      n.d(t, {
        O9: function () {
          return k;
        },
        G0: function () {
          return Z;
        },
        xH: function () {
          return S;
        },
      });
      var i = n(88134),
        o = {
          src: "/_next/static/media/blog-hero-fuchsia.3d111b9e.svg",
          height: 464,
          width: 2200,
        },
        r = {
          src: "/_next/static/media/blog-hero-green.dc5090ba.svg",
          height: 464,
          width: 2200,
        },
        a = {
          src: "/_next/static/media/blog-hero-green-apple.197cb070.svg",
          height: 464,
          width: 2200,
        },
        l = {
          src: "/_next/static/media/blog-hero-honeydew.ca0ddfb8.svg",
          height: 464,
          width: 2200,
        },
        d = {
          src: "/_next/static/media/blog-hero-lime.6ec8c032.svg",
          height: 464,
          width: 2200,
        },
        s = {
          src: "/_next/static/media/blog-hero-orange.fa9e5813.svg",
          height: 464,
          width: 2200,
        },
        c = {
          src: "/_next/static/media/blog-hero-pear.1b68a3f7.svg",
          height: 464,
          width: 2200,
        },
        p = {
          src: "/_next/static/media/blog-hero-purple.537ff59d.svg",
          height: 458,
          width: 2096,
        },
        u = {
          src: "/_next/static/media/blog-hero-red.b17dd506.svg",
          height: 464,
          width: 2200,
        },
        g = {
          src: "/_next/static/media/blog-hero-teal.22727c48.svg",
          height: 464,
          width: 2200,
        },
        h = {
          src: "/_next/static/media/fuchsia4-gradient.34c0a73e.svg",
          height: 464,
          width: 2560,
        },
        m = {
          src: "/_next/static/media/green3-gradient.d3eec572.svg",
          height: 464,
          width: 2560,
        },
        f = {
          src: "/_next/static/media/greenApple-gradient.87716611.svg",
          height: 464,
          width: 2560,
        },
        x = {
          src: "/_next/static/media/honeydew-gradient.bf7e34fb.svg",
          height: 464,
          width: 2560,
        },
        y = {
          src: "/_next/static/media/lime-gradient.5dc43a10.svg",
          height: 464,
          width: 2560,
        },
        b = {
          src: "/_next/static/media/orange4-gradient.3fc0e7d3.svg",
          height: 464,
          width: 2560,
        },
        v = {
          src: "/_next/static/media/pear-gradient.d784d143.svg",
          height: 464,
          width: 2560,
        },
        w = {
          src: "/_next/static/media/purple4-gradient.631e0fce.svg",
          height: 464,
          width: 2560,
        },
        _ = {
          src: "/_next/static/media/red4-gradient.8342a777.svg",
          height: 464,
          width: 2560,
        },
        P = {
          src: "/_next/static/media/teal3-gradient.51c13545.svg",
          height: 464,
          width: 2560,
        },
        Z = function (e) {
          if (!e) return "";
          var t = e.toLowerCase();
          return "app-platform" === t || "cloud-education" === t
            ? i.ZP.teal3
            : "best-practice" === t || "community" === t
            ? i.ZP.honeydew
            : "culture" === t
            ? i.ZP.lime
            : "droplets" === t || "design" === t
            ? i.ZP.red4
            : "developer-relations" === t || "kubernetes" === t
            ? i.ZP.pear
            : "engineering" === t
            ? i.ZP.purple4
            : "marketplace" === t
            ? i.ZP.green3
            : "news" === t
            ? i.ZP.orange4
            : "product-updates" === t
            ? i.ZP.greenApple
            : "serverless" === t
            ? i.ZP.fuchsia4
            : "saas" === t
            ? i.ZP.orange3
            : "trust-security" === t
            ? i.ZP.fuchsia3
            : "security" === t
            ? i.ZP.fuchsia4
            : "resources" === t
            ? i.ZP.purple5
            : i.ZP.white;
        },
        k = function (e) {
          if (!e) return "";
          var t = e.toLowerCase();
          return "app-platform" === t || "cloud-education" === t
            ? P
            : "best-practice" === t || "community" === t
            ? x
            : "culture" === t
            ? y
            : "droplets" === t || "design" === t
            ? _
            : "developer-relations" === t || "kubernetes" === t
            ? v
            : "engineering" === t
            ? w
            : "marketplace" === t
            ? m
            : "news" === t
            ? b
            : "product-updates" === t
            ? f
            : "serverless" === t
            ? h
            : "saas" === t
            ? b
            : "trust-security" === t || "security" === t
            ? h
            : i.ZP.white;
        },
        S = function (e) {
          if (!e) return "";
          var t = e.toLowerCase();
          return "app-platform" === t || "cloud-education" === t
            ? g
            : "best-practice" === t || "community" === t
            ? l
            : "culture" === t
            ? d
            : "droplets" === t || "design" === t
            ? u
            : "developer-relations" === t || "kubernetes" === t
            ? c
            : "engineering" === t
            ? p
            : "marketplace" === t
            ? r
            : "news" === t
            ? s
            : "product-updates" === t
            ? a
            : "serverless" === t
            ? o
            : "saas" === t
            ? s
            : "trust-security" === t || "security" === t
            ? o
            : g;
        };
    },
    74034: function (e, t, n) {
      n.d(t, {
        P: function () {
          return d;
        },
        Z: function () {
          return g;
        },
      });
      var i = n(59499),
        o = n(17534),
        r = n(88134),
        a = n(37797),
        l = a.ZP.section.withConfig({
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
        d = a.ZP.div.withConfig({
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
              n = void 0 === t ? r.ZP.blue2 : t;
            return encodeURIComponent(n);
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
        s = n(85893);
      function c(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(n), !0).forEach(function (t) {
                (0, i.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : c(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var u = function (e) {
          var t = e.children;
          return (0, s.jsx)(l, p(p({}, e), {}, { children: t }));
        },
        g = u;
      u.defaultProps = { short: !1 };
    },
    84089: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return C;
          },
        });
      var i = n(67294),
        o = n(9008),
        r = n.n(o),
        a = n(11163),
        l = n(50029),
        d = n(87794),
        s = n.n(d),
        c = n(17053),
        p = n(83454),
        u = (function () {
          var e = (0, l.Z)(
            s().mark(function e() {
              var t, n;
              return s().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        "return",
                        null !== (t = p) &&
                          void 0 !== p &&
                          null !== (n = t.env) &&
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
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        g = u,
        h = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : null,
            t = (0, i.useState)(e),
            n = t[0],
            o = t[1],
            r = (0, i.useMemo)(
              function () {
                return n || [];
              },
              [n]
            );
          return (
            (0, i.useEffect)(
              function () {
                n ||
                  g().then(function (e) {
                    return o(e);
                  });
              },
              [n]
            ),
            r
          );
        },
        m = n(99963),
        f = n(41601),
        x = n(34531),
        y = n(58069),
        b = n(37797),
        v = b.ZP.div.withConfig({
          displayName: "ErrorTemplateStyles__StyledWrapper",
          componentId: "sc-gfxdmj-0",
        })([
          "align-items:center;display:flex;flex-direction:column;margin:112px 0 32px;",
        ]),
        w = b.ZP.h1.withConfig({
          displayName: "ErrorTemplateStyles__StyledTitle",
          componentId: "sc-gfxdmj-1",
        })([
          "color:#031b4e;font-size:48px;font-weight:700;letter-spacing:-1px;line-height:1.2;margin:48px 0 16px;text-align:center;",
        ]),
        _ = b.ZP.p.withConfig({
          displayName: "ErrorTemplateStyles__StyledMessage",
          componentId: "sc-gfxdmj-2",
        })(["color:#031b4e;font-family:monospace;text-align:center;"]),
        P = n(85893),
        Z = function (e) {
          var t = e.message,
            n = e.secondaryMessage,
            i = e.showAuthButton;
          return (0, P.jsx)(y.Z, {
            children: (0, P.jsxs)(v, {
              children: [
                (0, P.jsxs)(w, {
                  children: [
                    (0, P.jsx)("small", { children: "D" }),
                    ":",
                    (0, P.jsx)("br", {}),
                    (0, P.jsx)("small", { children: t }),
                  ],
                }),
                i
                  ? (0, P.jsx)(x.Z, {
                      url: (0, f.Z)(),
                      className: "is-primary is-rounded",
                      children: "Try again",
                    })
                  : (0, P.jsx)(x.Z, {
                      url: "/",
                      className: "is-primary is-rounded",
                      children: "Go home",
                    }),
                n && (0, P.jsx)(_, { children: n }),
              ],
            }),
          });
        },
        k = Z;
      Z.defaultProps = { secondaryMessage: "", showAuthButton: !1 };
      var S = function (e) {
          var t = e.statusCode,
            n = e.authFailure,
            o = e.announcementData,
            l = h(o),
            d = (0, a.useRouter)(),
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
                switch (t) {
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
              [n, d.query, t]
            ),
            c = (0, i.useMemo)(
              function () {
                return { data: { title: [{ text: s.title || s.message }] } };
              },
              [s]
            );
          return (0, P.jsxs)(m.Z, {
            announcementData: l,
            metaData: c,
            children: [
              (0, P.jsx)(r(), {
                children: (0, P.jsx)("meta", {
                  name: "robots",
                  content: "noindex",
                }),
              }),
              (0, P.jsx)(k, {
                message: s.message || s.title,
                secondaryMessage: s.secondary,
                showAuthButton: s.showAuthButton,
              }),
            ],
          });
        },
        C = S;
      S.defaultProps = {
        statusCode: null,
        authFailure: !1,
        announcementData: null,
      };
    },
    98261: function (e, t) {
      t.Z = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = { year: "numeric", month: "long", day: "numeric" };
        return (
          t && ((i.hour = "2-digit"), (i.minute = "2-digit")),
          n && (i.timeZone = "UTC"),
          new Date(e).toLocaleDateString("en-US", i)
        );
      };
    },
    46878: function (e, t) {
      t.Z = {
        src: "/_next/static/media/blog-picks-divider.7ebef2ed.svg",
        height: 4,
        width: 1303,
      };
    },
  },
]);
