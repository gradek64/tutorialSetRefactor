(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2492],
  {
    72802: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return _;
        },
      });
      var i = n(88134),
        o = n(2451),
        l = n(71778),
        a = n(57243),
        r = n(90352),
        s = "/_next/static/media/socialFbOpaque.93287ee1.svg",
        d = "/_next/static/media/socialHackerNewsOpaque.745fe536.svg",
        c = "/_next/static/media/socialLinkedinOpaque.b7d6c484.svg",
        u = "/_next/static/media/socialTwitterOpaque.c3c3792c.svg",
        g = n(55385),
        p = n(17534),
        m = n(87288),
        h = n(37797),
        v = h.ZP.div.withConfig({
          displayName: "SocialSidebarStyles__StyledSocialSidebar",
          componentId: "sc-1yfsitd-0",
        })(
          [
            "display:flex;flex-direction:column;margin-left:112px;",
            "{display:none;}",
          ],
          (0, p.X)(p.A.desktop)
        ),
        f = h.ZP.p.withConfig({
          displayName: "SocialSidebarStyles__StyledHeader",
          componentId: "sc-1yfsitd-1",
        })(
          [
            "color:",
            ";font-family:",
            ";font-weight:600;line-height:24px;margin-bottom:8px;margin-top:0;",
          ],
          i.ZP.gray4,
          (0, m.Z)("code")
        ),
        x = h.ZP.div.withConfig({
          displayName: "SocialSidebarStyles__StyledButtons",
          componentId: "sc-1yfsitd-2",
        })(
          [
            "display:flex;gap:16px;a{background-color:",
            ";border-radius:8px;height:40px;width:40px;}",
          ],
          i.ZP.blue2
        ),
        b = h.ZP.ul.withConfig({
          displayName: "SocialSidebarStyles__StyledTags",
          componentId: "sc-1yfsitd-3",
        })(
          [
            "display:flex;flex-wrap:wrap;gap:8px;li{background-color:",
            ";border-radius:8px;color:",
            ";font-size:14px;line-height:22px;padding:4px 12px;text-transform:capitalize;transition:filter 0.2s ease;&:hover{filter:brightness(0.9);}}a{color:",
            ";}",
          ],
          i.ZP.gray9,
          i.ZP.gray3,
          i.ZP.grayDark
        ),
        y = n(85893),
        w = function (t) {
          var e = t.header,
            n = t.article,
            p = n.url,
            m = n.title,
            h = n.tags,
            w = t.type,
            _ = t.showCard,
            P = [
              {
                network: "Twitter",
                logo: u,
                deepLink: "https://twitter.com/intent/tweet?url="
                  .concat(encodeURIComponent(p), "&text=")
                  .concat(encodeURIComponent(m)),
              },
              {
                network: "Facebook",
                logo: s,
                deepLink:
                  "https://www.facebook.com/sharer/sharer.php?u=".concat(
                    encodeURIComponent(p)
                  ),
              },
              {
                network: "LinkedIn",
                logo: c,
                deepLink: "https://www.linkedin.com/shareArticle?mini=true&url="
                  .concat(encodeURIComponent(p), "&title=")
                  .concat(encodeURIComponent(m)),
              },
              {
                network: "HackerNews",
                logo: d,
                deepLink: "https://news.ycombinator.com/submitlink?u="
                  .concat(encodeURIComponent(p), "&t=")
                  .concat(encodeURIComponent(m)),
              },
            ];
          return (0, y.jsxs)(v, {
            children: [
              (0, y.jsx)(f, { children: e }),
              (0, y.jsx)(x, {
                children: P.map(function (t) {
                  var e = t.deepLink,
                    n = t.network,
                    i = t.logo;
                  return (0,
                  y.jsx)(r.Z, { rel: "nofollow", url: e, children: (0, y.jsx)(a.Z, { src: i, alt: n }) }, n);
                }),
              }),
              (0, y.jsx)(o.F, { height: "16px", margin: "8px 0" }),
              (0, y.jsx)(b, {
                children: h.map(function (t) {
                  return (
                    !!t &&
                    (0, y.jsx)(
                      "li",
                      {
                        children: (0, y.jsx)(r.Z, {
                          url: "/".concat(w, "/tag/").concat(t),
                          children: t.replace("-", " "),
                        }),
                      },
                      t
                    )
                  );
                }),
              }),
              _ &&
                (0, y.jsxs)(g.bM, {
                  margin: "32px 0 0",
                  width: "224px",
                  children: [
                    (0, y.jsx)(l.Z, {
                      renderAs: "h4",
                      children: "Optimize your streaming business",
                    }),
                    (0, y.jsx)("p", {
                      children:
                        "Download our guide to learn how streaming businesses can optimize their architecture to save costs.",
                    }),
                    (0, y.jsx)(r.Z, {
                      backgroundColor: i.ZP.blue2,
                      className: "button-link is-primary padding is-squared",
                      url: "https://try.digitalocean.com/optimize-performance/",
                      children: "Download now",
                    }),
                  ],
                }),
            ],
          });
        },
        _ = w;
      w.defaultProps = { header: "Share", type: "blog", showCard: !0 };
    },
    10814: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return f;
        },
      });
      var i = n(27812),
        o = n(67294),
        l = n(41664),
        a = n.n(l),
        r = n(11163),
        s = n(88134),
        d = n(87288),
        c = n(37797),
        u = c.ZP.div.withConfig({
          displayName: "TableOfContentsStyles__StyledTableOfContentsContainer",
          componentId: "sc-126nigt-0",
        })([
          "align-items:flex-start;display:flex;flex-direction:column;font-size:14px;font-weight:500;margin-bottom:16px;padding-bottom:16px;",
        ]),
        g = c.ZP.ul.withConfig({
          displayName: "TableOfContentsStyles__StyledTableOfContentsTitle",
          componentId: "sc-126nigt-1",
        })(
          [
            "color:",
            ";font-size:14px;font-weight:700;letter-spacing:1px;line-height:22px;text-transform:uppercase;",
          ],
          s.ZP.gray1
        ),
        p = c.ZP.ul.withConfig({
          displayName: "TableOfContentsStyles__StyledTableOfContentsList",
          componentId: "sc-126nigt-2",
        })(
          [
            "color:",
            ";font-size:14px;letter-spacing:1px;line-height:1.2;list-style:none;opacity:1;",
          ],
          s.ZP.gray1
        ),
        m = c.ZP.li.withConfig({
          displayName: "TableOfContentsStyles__StyledTableOfContentsListItem",
          componentId: "sc-126nigt-3",
        })(
          [
            "font-size:14px;letter-spacing:1px;line-height:1.1;margin:",
            ";overflow-wrap:break-word;",
          ],
          function (t) {
            return t.level
              ? "12px 0 0 ".concat(24 * (t.level - 1), "px")
              : "12px 0 0";
          }
        ),
        h = c.ZP.a.withConfig({
          displayName: "TableOfContentsStyles__StyledTableOfContentsListLink",
          componentId: "sc-126nigt-4",
        })(
          [
            "color:",
            ";cursor:pointer;font-family:",
            ";font-size:16px;font-weight:400;line-height:24px;text-decoration:none;&:hover{color:",
            ";}",
          ],
          function (t) {
            return t.active ? s.ZP.gray2 : s.ZP.gray5;
          },
          (0, d.Z)("body"),
          s.ZP.blueDark
        ),
        v = n(85893),
        f = function (t) {
          var e = t.headers,
            n = t.slim,
            l = (0, r.useRouter)(),
            s = (0, o.useState)(""),
            d = s[0],
            c = s[1];
          (0, o.useEffect)(
            function () {
              var t = l.asPath.split("#")[1];
              c(t);
            },
            [l]
          );
          var f = (0, o.useMemo)(
            function () {
              return (
                Math.min.apply(
                  Math,
                  (0, i.Z)(
                    e
                      .map(function (t) {
                        return t.level;
                      })
                      .filter(function (t) {
                        return !Number.isNaN(t);
                      })
                  )
                ) || 1
              );
            },
            [e]
          );
          return (0, v.jsx)(u, {
            slim: n,
            children: (0, v.jsxs)(p, {
              children: [
                (null === e || void 0 === e ? void 0 : e.length) > 0 &&
                  (0, v.jsx)(g, { children: "CONTENTS" }),
                null === e || void 0 === e
                  ? void 0
                  : e.map(function (t, e) {
                      return (0,
                      v.jsx)(m, { level: 0 === e ? 1 : (t.level || 1) - (f - 1), children: (0, v.jsx)(a(), { href: "#".concat(t.slug), passHref: !0, children: (0, v.jsx)(h, { active: t.slug === d, children: t.text || t.title }) }) }, t.slug);
                    }),
              ],
            }),
          });
        };
    },
    85627: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          __N_SSG: function () {
            return it;
          },
          default: function () {
            return ot;
          },
        });
      var i = n(9008),
        o = n.n(i),
        l = n(11163),
        a = n(88134),
        r = n(99963),
        s = n(37797),
        d = n(67294),
        c = n(65861),
        u = n(59667),
        g = n(3802),
        p = n(98261),
        m = n(71778),
        h = n(90352),
        v = "/_next/static/media/rectangle6.5bdb679f.svg",
        f = "/_next/static/media/rectangle7.c612aeb3.svg",
        x = "/_next/static/media/rectangle8.37b7aa05.svg",
        b = "/_next/static/media/sammy-blog-author.50322365.jpeg",
        y = n(76116),
        w = n(34634),
        _ = n(17534),
        P =
          ((0, s.iv)(["background-color:", ";"], a.ZP.grayLightest),
          s.ZP.div.withConfig({
            displayName: "HeroBlogPostStyles__StyledHeroContainer",
            componentId: "sc-pwql7m-0",
          })(
            [
              "background-color:",
              ";background-image:url(",
              ");background-repeat:no-repeat;position:relative;text-align:center;",
              "{padding-top:40px;}img{&.wave{max-width:100%;position:absolute;right:0;top:0;}}",
            ],
            a.ZP.grayLightest,
            function (t) {
              return t.backgroundImage.src || "none";
            },
            (0, _.X)(_.A.largePhone)
          )),
        j = (0, s.iv)(["margin-top:0;"]),
        Z = s.ZP.div.withConfig({
          displayName: "HeroBlogPostStyles__StyledHeroContentContainer",
          componentId: "sc-pwql7m-1",
        })(
          [
            "display:flex;flex-direction:column;margin:auto;max-width:864px;padding-top:80px;position:relative;",
            "{padding-top:0;}h1{font-size:56px;font-weight:700;line-height:64px;z-index:4;",
            "{font-size:32px;line-height:48px;}}img{z-index:3;}.rectangle{background-color:green;position:absolute;&.bot{bottom:160px;}&.smallLeft{bottom:212px;height:12px;left:60px;width:12px;}&.mediumLeft{height:24px;left:-32px;width:24px;}&.largeLeft{bottom:120px;height:40px;left:-8px;width:40px;}&.smallRight{height:12px;right:60px;top:212px;width:12px;}&.mediumRight{height:24px;right:8px;top:120px;width:24px;}&.largeRight{height:40px;right:32px;top:80px;width:40px;}}",
          ],
          (0, _.X)(_.A.largePhone),
          (0, _.X)(_.A.tablet)
        ),
        C =
          ((0, s.iv)(["position:absolute;"]),
          (0, s.iv)(["bottom:2;left:55px;position:absolute;z-index:2;"]),
          (0, s.iv)(["position:absolute;"]),
          (0, s.iv)(["position:absolute;"]),
          (0, s.iv)(["max-width:1440px;position:relative;"]),
          (0, s.iv)(["margin:0 auto 24px;"])),
        S = (0, s.iv)(["margin:0 auto 8px;"]),
        k = (0, s.iv)(["color:", ";"], a.ZP.blue2),
        N = function (t) {
          var e = t.join(" ").split(" ").length;
          return "".concat(Math.ceil(e / 250), " min read");
        },
        I = n(70699),
        T = n(85893),
        L = function (t) {
          var e,
            n,
            i,
            o,
            l,
            r,
            s,
            d,
            c,
            u,
            g,
            m,
            h,
            _,
            j,
            C,
            S,
            k,
            L,
            z,
            q,
            D,
            H,
            E,
            F,
            X,
            U,
            M,
            G,
            W,
            Y = t.content,
            $ = t.author,
            J = t.postTag;
          return (0, T.jsxs)(P, {
            backgroundImage: (0, I.O9)(
              null === (e = Y.tags) ||
                void 0 === e ||
                null === (n = e[0]) ||
                void 0 === n
                ? void 0
                : n.slug
            ),
            children: [
              (0, T.jsx)("img", {
                className: "wave",
                src: (0, I.xH)(
                  null === (i = Y.tags) ||
                    void 0 === i ||
                    null === (o = i[0]) ||
                    void 0 === o
                    ? void 0
                    : o.slug
                ).src,
                alt: "wave",
              }),
              (0, T.jsxs)(Z, {
                children: [
                  (0, T.jsx)("img", {
                    alt: "rectangle square background",
                    className: "rectangle bot smallLeft",
                    src: v,
                  }),
                  (0, T.jsx)("img", {
                    alt: "rectangle square background",
                    className: "rectangle bot mediumLeft",
                    src: f,
                  }),
                  (0, T.jsx)("img", {
                    alt: "rectangle square background",
                    className: "rectangle bot largeLeft",
                    src: x,
                  }),
                  (0, T.jsx)("img", {
                    alt: "rectangle square background",
                    className: "rectangle bot smallRight",
                    src: v,
                  }),
                  (0, T.jsx)("img", {
                    alt: "rectangle square background",
                    className: "rectangle bot mediumRight",
                    src: f,
                  }),
                  (0, T.jsx)("img", {
                    alt: "rectangle square background",
                    className: "rectangle bot largeRight",
                    src: x,
                  }),
                  (0, T.jsx)(O, {
                    url: "/blog/tag/".concat(
                      null === (l = Y.tags) ||
                        void 0 === l ||
                        null === (r = l[0]) ||
                        void 0 === r
                        ? void 0
                        : r.slug
                    ),
                    margin: "0 auto 32px",
                    $tagBgColor: (0, I.G0)(
                      null === (s = Y.tags) ||
                        void 0 === s ||
                        null === (d = s[0]) ||
                        void 0 === d
                        ? void 0
                        : d.slug
                    ),
                    children:
                      null === (c = J[0]) || void 0 === c ? void 0 : c.name,
                  }),
                  (0, T.jsx)(B, {
                    overrideColor: a.ZP.gray2,
                    renderAs: "h1",
                    children:
                      null ===
                        (u = Y.slices.find(function (t) {
                          return "blog-content" === t.type;
                        })) ||
                      void 0 === u ||
                      null === (g = u.metadata) ||
                      void 0 === g ||
                      null === (m = g.blog_headline) ||
                      void 0 === m
                        ? void 0
                        : m.value,
                  }),
                  (0, T.jsxs)(A, {
                    imageBorderColor: (0, I.G0)(
                      null === (h = Y.tags) ||
                        void 0 === h ||
                        null === (_ = h[0]) ||
                        void 0 === _
                        ? void 0
                        : _.slug
                    ),
                    children: [
                      (0, T.jsx)("img", {
                        src:
                          null !== $ &&
                          void 0 !== $ &&
                          null !== (j = $.slices) &&
                          void 0 !== j &&
                          null !==
                            (C = j.find(function (t) {
                              return "blog-author" === t.type;
                            })) &&
                          void 0 !== C &&
                          null !== (S = C.metadata) &&
                          void 0 !== S &&
                          S.author_image.value
                            ? null ===
                                (k = $.slices.find(function (t) {
                                  return "blog-author" === t.type;
                                }).metadata) || void 0 === k
                              ? void 0
                              : k.author_image.value
                            : b,
                        alt: "author",
                      }),
                      (0, T.jsx)(R, {
                        url: "/blog/author/".concat(Y.author),
                        children:
                          null === $ ||
                          void 0 === $ ||
                          null === (L = $.slices) ||
                          void 0 === L ||
                          null ===
                            (z = L.find(function (t) {
                              return "blog-author" === t.type;
                            })) ||
                          void 0 === z ||
                          null === (q = z.metadata) ||
                          void 0 === q
                            ? void 0
                            : q.author_name.value,
                      }),
                      null !== $ &&
                      void 0 !== $ &&
                      null !== (D = $.slices) &&
                      void 0 !== D &&
                      null !==
                        (H = D.find(function (t) {
                          return "blog-author" === t.type;
                        })) &&
                      void 0 !== H &&
                      null !== (E = H.metadata) &&
                      void 0 !== E &&
                      E.author_title.value
                        ? (0, T.jsxs)("p", {
                            children: [
                              (0, T.jsx)("span", { children: "\xa0" }),
                              null ===
                                (F = $.slices.find(function (t) {
                                  return "blog-author" === t.type;
                                })) ||
                              void 0 === F ||
                              null === (X = F.metadata) ||
                              void 0 === X
                                ? void 0
                                : X.author_title.value,
                            ],
                          })
                        : "",
                    ],
                  }),
                  (0, T.jsxs)(w.Az, {
                    children: [
                      "Posted:",
                      " ",
                      (0, p.Z)(
                        (null ===
                          (U = Y.slices.find(function (t) {
                            return "blog-content" === t.type;
                          })) ||
                        void 0 === U ||
                        null === (M = U.metadata) ||
                        void 0 === M
                          ? void 0
                          : M.blog_post_date.value) || "",
                        !1,
                        !0
                      ),
                      (0, T.jsx)(y.CY, { children: "\u2022" }),
                      N([
                        null ===
                          (G = Y.slices.find(function (t) {
                            return "blog-content" === t.type;
                          })) ||
                        void 0 === G ||
                        null === (W = G.metadata) ||
                        void 0 === W
                          ? void 0
                          : W.blog_post_content.value,
                      ]),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        O = (0, s.ZP)(w.u8).withConfig({
          displayName: "HeroBlogPost___StyledStyledTopicTag",
          componentId: "sc-rap1ky-0",
        })(["", ""], j),
        B = (0, s.ZP)(m.Z).withConfig({
          displayName: "HeroBlogPost___StyledHeading",
          componentId: "sc-rap1ky-1",
        })(["", ""], C),
        A = (0, s.ZP)(y.uS).withConfig({
          displayName: "HeroBlogPost___StyledStyledAuthorDetails",
          componentId: "sc-rap1ky-2",
        })(["", ""], S),
        R = (0, s.ZP)(h.Z).withConfig({
          displayName: "HeroBlogPost___StyledLazyLink",
          componentId: "sc-rap1ky-3",
        })(["", ""], k),
        z = n(72802),
        q = n(58069),
        D = n(74034),
        H = n(10814),
        E = (0, s.iv)(["background-color:", ";"], a.ZP.grayLightest),
        F = s.ZP.div.withConfig({
          displayName: "BlogPostTemplateStyles__StyledBlogPost",
          componentId: "sc-1eyll4b-0",
        })([
          "display:flex;flex-direction:row;margin:48px 0;width:100%;.observedContent{margin-top:-16px;}",
        ]),
        X =
          ((0, s.iv)(["position:absolute;"]),
          (0, s.iv)(["position:absolute;"]),
          (0, s.iv)(["position:absolute;"]),
          (0, s.iv)(["position:absolute;"]),
          (0, s.iv)([
            "height:100%;max-width:1440px;padding:0 1em;position:relative;",
          ])),
        U = s.ZP.div.withConfig({
          displayName: "BlogPostTemplateStyles__StyledBlogSidebar",
          componentId: "sc-1eyll4b-1",
        })(
          [
            "flex-shrink:0;margin-right:112px;max-width:224px;",
            "{display:none;}",
          ],
          (0, _.X)(_.A.tablet)
        ),
        M = s.ZP.div.withConfig({
          displayName: "BlogPostTemplateStyles__StyledArticlesRow",
          componentId: "sc-1eyll4b-2",
        })(
          [
            "display:flex;gap:32px;width:100%;> div{flex:1 1 0;height:initial;margin:0;max-width:unset;width:30%;}",
            "{flex-direction:column;> div{width:100%;}}",
          ],
          (0, _.X)(_.A.tablet)
        ),
        G = (0, s.iv)(["margin-bottom:64px;"]),
        W = (0, s.iv)(["background-color:", ";"], a.ZP.grayLightest),
        Y = s.ZP.div.withConfig({
          displayName: "BlogPostTemplateStyles__StyledBlogPostProgressBar",
          componentId: "sc-1eyll4b-3",
        })(
          [
            "height:8px;left:0;position:fixed;width:100%;z-index:1;&::after{background:linear-gradient(90deg,",
            " 0%,",
            " 16.15%,",
            " 33.85%,",
            " 50.52%,",
            " 66.15%,",
            " 81.25%,",
            " 100%);content:'';height:100%;left:0;position:absolute;top:0;transform:scaleX(var(--progress-width,0));transform-origin:0 0;width:100%;will-change:transform;}",
          ],
          a.ZP.honeydew,
          a.ZP.pear,
          a.ZP.lime,
          a.ZP.greenApple,
          a.ZP.aqua,
          a.ZP.blueRaspberry,
          a.ZP.blueberry
        ),
        $ = function (t) {
          var e,
            n,
            i,
            o = t.content,
            l = t.uid,
            a = t.author,
            r = t.relatedArticles,
            s = t.postTag,
            p = o.slices.find(function (t) {
              return "blog-content" === t.type;
            }),
            m = (0, d.useState)(),
            h = (m[0], m[1]),
            v = (0, u.Z)(
              (null === p ||
              void 0 === p ||
              null === (e = p.metadata) ||
              void 0 === e
                ? void 0
                : e.blog_post_content.value) || ""
            ).headings;
          !(function (t) {
            var e = (0, d.useRef)({});
            (0, d.useEffect)(
              function () {
                var n = Array.from(
                    document.querySelectorAll(
                      ".observedContent h2, .observedContent h3"
                    )
                  ),
                  i = new IntersectionObserver(
                    function (i) {
                      e.current = i.reduce(function (t, e) {
                        return (t[e.target.id] = e), t;
                      }, e.current);
                      var o = [];
                      Object.keys(e.current).forEach(function (t) {
                        var n = e.current[t];
                        n.isIntersecting && o.push(n);
                      });
                      var l = function (t) {
                        return n.findIndex(function (e) {
                          return e.id === t;
                        });
                      };
                      if (1 === o.length) t(o[0].target.id);
                      else if (o.length > 1) {
                        var a = o.sort(function (t, e) {
                          return l(t.target.id) > l(e.target.id);
                        });
                        t(a[0].target.id);
                      }
                    },
                    { rootMargin: "0px 0px -50% 0px" }
                  );
                return (
                  n.forEach(function (t) {
                    return i.observe(t);
                  }),
                  function () {
                    return i.disconnect();
                  }
                );
              },
              [t]
            );
          })(h);
          var f,
            x = (0, d.useState)(0),
            b = x[0],
            y = x[1];
          f = document.querySelector(".observedContent");
          var w = function () {
            document.addEventListener("scroll", function () {
              !(function () {
                if (f) {
                  var t = f.getBoundingClientRect().top - 112,
                    e = f.getBoundingClientRect().height;
                  (-112 !== t || t > e) && y((-1 * t) / e);
                }
              })();
            });
          };
          return (
            (0, d.useEffect)(function () {
              w();
            }),
            (0, T.jsxs)(T.Fragment, {
              children: [
                (0, T.jsx)(Y, { style: { "--progress-width": b } }),
                (0, T.jsxs)(K, {
                  sectionPadding: "0",
                  children: [
                    (0, T.jsx)(L, { author: a, content: o, postTag: s }),
                    (0, T.jsx)(Q, {
                      children: (0, T.jsxs)(F, {
                        children: [
                          (0, T.jsx)(U, {
                            children: (0, T.jsx)(H.Z, { headers: v, slim: !0 }),
                          }),
                          (0, T.jsx)("div", {
                            children: (0, T.jsx)("div", {
                              className: "observedContent",
                              children: (0, T.jsx)(c.default, {
                                content:
                                  (null === p ||
                                  void 0 === p ||
                                  null === (n = p.metadata) ||
                                  void 0 === n
                                    ? void 0
                                    : n.blog_post_content.value) || "",
                              }),
                            }),
                          }),
                          (0, T.jsx)(z.Z, {
                            article: {
                              url: "https://digitalocean.com/blog/".concat(l),
                              title:
                                null === o || void 0 === o ? void 0 : o.title,
                              tags:
                                null === o ||
                                void 0 === o ||
                                null === (i = o.tags) ||
                                void 0 === i
                                  ? void 0
                                  : i.map(function (t) {
                                      return t.slug;
                                    }),
                            },
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, T.jsx)(V, {
                  sectionPadding: "128px 0",
                  children: (0, T.jsxs)(q.Z, {
                    children: [
                      (0, T.jsx)(tt, {
                        renderAs: "h2",
                        textAlign: "center",
                        large: !0,
                        children: "Related Articles",
                      }),
                      (0, T.jsx)(M, {
                        children: r.map(function (t) {
                          var e,
                            n,
                            i,
                            o,
                            l,
                            a,
                            r,
                            s,
                            d,
                            c,
                            u,
                            p = t.slug,
                            m = t.authorData,
                            h = t.created_at,
                            v = t.slices,
                            f = t.tags;
                          return (0, T.jsx)(
                            g.Z,
                            {
                              tag:
                                null === f ||
                                void 0 === f ||
                                null === (e = f[0]) ||
                                void 0 === e
                                  ? void 0
                                  : e.slug,
                              author: {
                                url: "/blog/author/".concat(
                                  null === m || void 0 === m ? void 0 : m.slug
                                ),
                                name:
                                  null === m ||
                                  void 0 === m ||
                                  null ===
                                    (n = m.slices.find(function (t) {
                                      return "blog-author" === t.type;
                                    })) ||
                                  void 0 === n ||
                                  null === (i = n.metadata) ||
                                  void 0 === i
                                    ? void 0
                                    : i.author_name.value,
                              },
                              timeLength: "3 min read",
                              image: {
                                src:
                                  null ===
                                    (o = v.find(function (t) {
                                      return "blog-content" === t.type;
                                    })) ||
                                  void 0 === o ||
                                  null === (l = o.metadata) ||
                                  void 0 === l
                                    ? void 0
                                    : l.blog_header_image.value,
                              },
                              imageAlt:
                                null ===
                                  (a = v.find(function (t) {
                                    return "blog-content" === t.type;
                                  })) ||
                                void 0 === a ||
                                null === (r = a.metadata) ||
                                void 0 === r ||
                                null === (s = r.blog_headline) ||
                                void 0 === s
                                  ? void 0
                                  : s.value,
                              publishDate: h,
                              title:
                                null ===
                                  (d = v.find(function (t) {
                                    return "blog-content" === t.type;
                                  })) ||
                                void 0 === d ||
                                null === (c = d.metadata) ||
                                void 0 === c ||
                                null === (u = c.blog_headline) ||
                                void 0 === u
                                  ? void 0
                                  : u.value,
                              link: "/blog/".concat(p),
                            },
                            p
                          );
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            })
          );
        },
        J = $;
      $.defaultProps = { author: null };
      var K = (0, s.ZP)(D.Z).withConfig({
          displayName: "BlogPostTemplate___StyledSection",
          componentId: "sc-swml7b-0",
        })(["", ""], E),
        Q = (0, s.ZP)(q.Z).withConfig({
          displayName: "BlogPostTemplate___StyledContainer",
          componentId: "sc-swml7b-1",
        })(["", ""], X),
        V = (0, s.ZP)(D.Z).withConfig({
          displayName: "BlogPostTemplate___StyledSection2",
          componentId: "sc-swml7b-2",
        })(["", ""], W),
        tt = (0, s.ZP)(m.Z).withConfig({
          displayName: "BlogPostTemplate___StyledHeading",
          componentId: "sc-swml7b-3",
        })(["", ""], G),
        et = n(84089),
        nt = function (t) {
          var e,
            n,
            i,
            s,
            d,
            c,
            u = t.pageData,
            g = t.authorData,
            p = t.relatedArticles,
            m = t.announcementData,
            h = t.postTag,
            v = (0, l.useRouter)();
          if (!v.isFallback && !u)
            return (0, T.jsx)(et.default, { statusCode: 404 });
          var f = u.slices.find(function (t) {
            return "blog-content" === t.type;
          });
          return (0, T.jsxs)(r.Z, {
            announcementData: m,
            footerWaveColor: a.ZP.gray10,
            metaData: u,
            children: [
              (0, T.jsxs)(o(), {
                children: [
                  u.title
                    ? (0, T.jsxs)(T.Fragment, {
                        children: [
                          (0, T.jsx)("title", { children: u.title }),
                          (0, T.jsx)(
                            "meta",
                            { name: "twitter:title", content: u.title },
                            "twitterTitle"
                          ),
                          (0, T.jsx)(
                            "meta",
                            { property: "og:title", content: u.title },
                            "ogTitle"
                          ),
                        ],
                      })
                    : (0, T.jsxs)(T.Fragment, {
                        children: [
                          (0, T.jsx)("title", {
                            children:
                              (null === f ||
                              void 0 === f ||
                              null === (e = f.metadata) ||
                              void 0 === e
                                ? void 0
                                : e.blog_headline.value) || "DigitalOcean",
                          }),
                          (0, T.jsx)(
                            "meta",
                            {
                              name: "twitter:title",
                              content:
                                (null === f ||
                                void 0 === f ||
                                null === (n = f.metadata) ||
                                void 0 === n
                                  ? void 0
                                  : n.blog_headline.value) || "DigitalOcean",
                            },
                            "twitterTitle"
                          ),
                          (0, T.jsx)(
                            "meta",
                            {
                              property: "og:title",
                              content:
                                (null === f ||
                                void 0 === f ||
                                null === (i = f.metadata) ||
                                void 0 === i
                                  ? void 0
                                  : i.blog_headline.value) || "DigitalOcean",
                            },
                            "ogTitle"
                          ),
                        ],
                      }),
                  (null === f ||
                  void 0 === f ||
                  null === (s = f.metadata) ||
                  void 0 === s
                    ? void 0
                    : s.blog_header_image.value) &&
                    (0, T.jsxs)(T.Fragment, {
                      children: [
                        (0, T.jsx)(
                          "meta",
                          {
                            name: "twitter:image",
                            content:
                              null === f ||
                              void 0 === f ||
                              null === (d = f.metadata) ||
                              void 0 === d
                                ? void 0
                                : d.blog_header_image.value,
                          },
                          "twitterImage"
                        ),
                        (0, T.jsx)(
                          "meta",
                          {
                            property: "og:image",
                            content:
                              null === f ||
                              void 0 === f ||
                              null === (c = f.metadata) ||
                              void 0 === c
                                ? void 0
                                : c.blog_header_image.value,
                          },
                          "ogImage"
                        ),
                      ],
                    }),
                ],
              }),
              v.isFallback
                ? (0, T.jsx)("div", { children: "Loading\u2026" })
                : (0, T.jsx)(J, {
                    content: u,
                    relatedArticles: p,
                    uid: u.slug,
                    author: g,
                    postTag: h,
                  }),
            ],
          });
        },
        it = !0,
        ot = nt;
      nt.defaultProps = { authorData: null };
    },
    35231: function (t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/blog/[slug]",
        function () {
          return n(85627);
        },
      ]);
    },
  },
  function (t) {
    t.O(
      0,
      [1092, 8616, 8249, 8417, 9963, 2460, 6334, 9774, 2888, 179],
      function () {
        return (e = 35231), t((t.s = e));
        var e;
      }
    );
    var e = t.O();
    _N_E = e;
  },
]);
