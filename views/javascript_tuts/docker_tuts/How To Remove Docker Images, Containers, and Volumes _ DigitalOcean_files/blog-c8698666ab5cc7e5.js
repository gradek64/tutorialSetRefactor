(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9195],
  {
    86639: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          __N_SSG: function () {
            return q;
          },
          default: function () {
            return Q;
          },
        });
      var o = n(9008),
        i = n.n(o),
        r = n(11163),
        l = n(88134),
        a = n(99963),
        s = n(59499),
        c = n(27812),
        d = n(67294),
        u = n(37797),
        g = n(90352),
        p = n(35449),
        h = n(17534),
        f = n(87288),
        m = u.ZP.div.withConfig({
          displayName: "BlogCarouselStyles__StyledBlogHeader",
          componentId: "sc-10pmcfh-0",
        })(
          [
            "align-items:center;display:flex;padding:32px 24px 0;",
            "{padding:32px 64px 0;}",
          ],
          (0, h.X)(h.A.desktop, "min")
        ),
        v = (0, u.iv)(["position:relative;"]),
        x = u.ZP.h2.withConfig({
          displayName: "BlogCarouselStyles__StyledBlogCarouselTitle",
          componentId: "sc-10pmcfh-1",
        })(
          [
            "color:",
            ";font-size:32px;font-weight:700;letter-spacing:-0.5px;line-height:",
            ";margin:0 24px 0 0;",
            "{font-size:24px;}",
          ],
          l.ZP.gray2,
          1.25,
          (0, h.X)(h.A.largePhone)
        ),
        b = u.ZP.div.withConfig({
          displayName: "BlogCarouselStyles__StyledBlogCarouselLink",
          componentId: "sc-10pmcfh-2",
        })(
          [
            "margin-left:auto;",
            "{margin-left:0;}a{border-radius:10px;box-shadow:inset 0 0 0 1px ",
            ";color:",
            ";display:block;font-size:16px;font-weight:600;line-height:",
            ";padding:8px 20px;transition:all 200ms ease-in-out;white-space:nowrap;&:hover{background-color:",
            ";box-shadow:none;color:",
            ";}}",
          ],
          (0, h.X)(h.A.desktop, "min"),
          l.ZP.gray7,
          l.ZP.gray2,
          1.5,
          l.ZP.blueHover,
          l.ZP.white
        ),
        y = u.ZP.div.withConfig({
          displayName: "BlogCarouselStyles__StyledScrollToItem",
          componentId: "sc-10pmcfh-3",
        })(["position:absolute;top:-164px;"]),
        j = u.ZP.div.withConfig({
          displayName: "BlogCarouselStyles__StyledBlogCarouselControls",
          componentId: "sc-10pmcfh-4",
        })(
          [
            "display:none;margin-left:auto;",
            "{display:block;}button{background-color:",
            ";border:0;border-radius:10px;color:",
            ";cursor:pointer;font-family:",
            ";font-size:16px;font-weight:600;line-height:",
            ";margin-left:16px;padding:8px 16px;transition:filter 0.2s ease;&:hover{filter:brightness(0.9);}&:disabled{background-color:",
            ";color:",
            ";cursor:initial;}}",
          ],
          (0, h.X)(h.A.desktop, "min"),
          l.ZP.gray8,
          l.ZP.gray4,
          (0, f.Z)("code"),
          1.5,
          l.ZP.gray9,
          l.ZP.gray6
        ),
        w = u.ZP.div.withConfig({
          displayName: "BlogCarouselStyles__StyledBlogCarousel",
          componentId: "sc-10pmcfh-5",
        })(
          [
            "display:flex;overflow:auto;padding:32px 24px;position:relative;scroll-behavior:smooth;scroll-snap-type:x mandatory;scrollbar-width:none;",
            "{overflow:hidden;padding:32px 64px;}&::-webkit-scrollbar{display:none;}> div{flex-shrink:0;margin-right:16px;scroll-snap-align:center;width:",
            "%;",
            "{width:40%;}",
            "{margin-right:32px;width:",
            "%;}&:last-child{margin-right:0;}> div{height:100%;}}",
          ],
          (0, h.X)(h.A.desktop, "min"),
          (320 / 336) * 100,
          (0, h.X)(h.A.tablet, "min"),
          (0, h.X)(h.A.desktop, "min"),
          (416 / 1440) * 100
        ),
        P = n(3802),
        _ = n(85893),
        C = function (t) {
          var e = t.title,
            n = t.link,
            o = t.posts,
            i = t.controls,
            r = t.elRef,
            l = t.dataId,
            a = t.uid,
            s = (0, d.useRef)(null),
            c = (0, d.useState)(null),
            u = c[0],
            h = c[1],
            f = (0, d.useState)(0),
            v = f[0],
            C = f[1],
            Z = (0, d.useState)(0),
            k = Z[0],
            B = Z[1],
            A = (0, d.useState)(!0),
            S = A[0],
            O = A[1],
            N = (0, d.useState)(!1),
            T = N[0],
            I = N[1],
            E = function (t) {
              B(k + t), u.scrollBy({ left: v * t, top: 0, behavior: "smooth" });
            };
          return (
            (0, d.useEffect)(
              function () {
                var t,
                  e =
                    null === (t = s.current.firstElementChild) || void 0 === t
                      ? void 0
                      : t.clientWidth,
                  n = s.current;
                O(0 === k), I(6 === k), h(n), C(e);
              },
              [v, u, k]
            ),
            (0, _.jsxs)(D, {
              "data-tab-id": l,
              ref: r,
              children: [
                (0, _.jsx)(y, { id: a }),
                (0, _.jsxs)(m, {
                  children: [
                    e && (0, _.jsx)(x, { children: e }),
                    n &&
                      (0, _.jsx)(b, {
                        children: (0, _.jsx)(g.Z, {
                          url: n.url,
                          prefetch: !1,
                          children: n.title,
                        }),
                      }),
                    i &&
                      (null === o || void 0 === o ? void 0 : o.length) > 3 &&
                      (0, _.jsxs)(j, {
                        children: [
                          (0, _.jsx)(
                            "button",
                            {
                              type: "button",
                              onClick: function () {
                                return E(-1);
                              },
                              disabled: S,
                              children: "<-",
                            },
                            "back"
                          ),
                          (0, _.jsx)(
                            "button",
                            {
                              type: "button",
                              onClick: function () {
                                return E(1);
                              },
                              disabled: T,
                              children: "->",
                            },
                            "forward"
                          ),
                        ],
                      }),
                  ],
                }),
                (0, _.jsx)(
                  w,
                  {
                    "aria-label": "".concat(e && "".concat(e, " "), "Carousel"),
                    tabindex: "0",
                    ref: s,
                    children: o.map(function (t, e) {
                      var n, o;
                      return (
                        e <= 8 &&
                        (0, _.jsx)(
                          "div",
                          {
                            "aria-label": "Slide ".concat(e + 1, " of 9"),
                            children: (0, _.jsx)(P.Z, {
                              author: {
                                name:
                                  (null === t ||
                                  void 0 === t ||
                                  null === (n = t.authorData) ||
                                  void 0 === n
                                    ? void 0
                                    : n.slices.find(function (t) {
                                        return "blog-author" === t.type;
                                      }).metadata.author_name.value) ||
                                  "DigitalOcean",
                                url: "/blog/author/".concat(
                                  null === t || void 0 === t ? void 0 : t.author
                                ),
                              },
                              publishDate: t.slices.find(function (t) {
                                return "blog-content" === t.type;
                              }).metadata.blog_post_date.value,
                              timeLength: t.readingTime,
                              title: t.slices.find(function (t) {
                                return "blog-content" === t.type;
                              }).metadata.blog_headline.value,
                              image: {
                                src:
                                  (null ===
                                    (o = t.slices.find(function (t) {
                                      return "blog-content" === t.type;
                                    }).metadata.blog_header_image) ||
                                  void 0 === o
                                    ? void 0
                                    : o.value) || p.Z.src,
                              },
                              imageAlt: "",
                              link: "/blog/".concat(t.slug),
                            }),
                          },
                          t.slug
                        )
                      );
                    }),
                  },
                  e
                ),
              ],
            })
          );
        },
        Z = C;
      C.defaultProps = {
        title: null,
        link: null,
        controls: !0,
        elRef: null,
        dataId: "",
      };
      var D = (0, u.ZP)("div").withConfig({
          displayName: "BlogCarousel___StyledDiv",
          componentId: "sc-4pq5e0-0",
        })(["", ""], v),
        k = n(16835),
        B = function (t) {
          var e = (0, d.useState)(!1),
            n = e[0],
            o = e[1];
          return (
            (0, d.useEffect)(
              function () {
                var e = new IntersectionObserver(function (t) {
                  var e = (0, k.Z)(t, 1)[0];
                  o(e.isIntersecting);
                });
                return (
                  e.observe(t.current),
                  function () {
                    return e.disconnect();
                  }
                );
              },
              [t]
            ),
            n
          );
        },
        A = u.ZP.div.withConfig({
          displayName: "BlogListTagNavStyles__StyledBlogTagNav",
          componentId: "sc-ocbsl3-0",
        })(
          [
            "background-color:",
            ";border-radius:0 0 24px 24px;box-shadow:0 6px 20px -6px ",
            ";display:flex;justify-content:center;min-height:64px;padding:12px 64px;position:fixed;width:100%;z-index:7777;",
            "{display:none;}",
          ],
          l.ZP.white,
          (0, l.E9)(l.ZP.blueCPUInfo, 0.15),
          (0, h.X)(h.A.desktop)
        ),
        S = u.ZP.div.withConfig({
          displayName: "BlogListTagNavStyles__StyledLinksContainer",
          componentId: "sc-ocbsl3-1",
        })(["display:flex;flex-flow:row wrap;justify-content:center;"]),
        O = u.ZP.a.withConfig({
          displayName: "BlogListTagNavStyles__StyledLink",
          componentId: "sc-ocbsl3-2",
        })(
          [
            "background-color:",
            ";border-radius:10px;color:",
            ";cursor:pointer;margin-right:36px;padding:8px 12px;text-decoration:none;&:hover{&:not(.active){background:",
            ";box-shadow:0 0 0 1px ",
            ";}}",
          ],
          function (t) {
            return t.selected ? l.ZP.blueLight : "auto";
          },
          function (t) {
            return t.selected ? l.ZP.white : l.ZP.gray3;
          },
          l.ZP.grayLightest,
          l.ZP.gray7
        ),
        N = function (t) {
          var e = t.items,
            n = t.observableCarousel,
            o = t.refs,
            i = (0, d.useState)(0),
            r = i[0],
            l = i[1],
            a = B(n);
          return (
            (0, d.useEffect)(
              function () {
                var t = new IntersectionObserver(
                  function (t) {
                    var e = (0, k.Z)(t, 1)[0];
                    if (e.isIntersecting) {
                      var n = Number(e.target.getAttribute("data-tab-id"));
                      l(n);
                    }
                  },
                  { thresholdMargin: 40, threshold: 0.8 }
                );
                return (
                  o.forEach(function (e) {
                    t.observe(e.current);
                  }),
                  function () {
                    return t.disconnect();
                  }
                );
              },
              [o]
            ),
            (0, _.jsx)(A, {
              children: (0, _.jsx)(S, {
                children: e.map(function (t, e) {
                  return (0,
                  _.jsx)(O, { className: e === r && a ? "active" : " ", selected: e === r && a, href: "".concat(t.url), children: t.text }, t.text);
                }),
              }),
            })
          );
        },
        T = n(98261),
        I = n(58069),
        E = n(71778),
        z = n(74034),
        L = n(34634),
        R = n(55385),
        M = n(70699),
        X = function (t) {
          var e = t.titleMargin,
            n = t.tagMargin,
            o = t.tag,
            i = t.title,
            r = t.blogPickUrlPath,
            l = t.date,
            a = t.author,
            s = t.fontSize,
            c = t.readingTime;
          return (0, _.jsxs)(L.pS, {
            children: [
              (0, _.jsx)(L.FF, {
                href: r,
                "aria-label": "Read more about ".concat(i),
              }),
              (0, _.jsxs)(L.hB, {
                children: [
                  (0, _.jsx)(L.Kn, {
                    margin: n,
                    $tagBgColor: (0, M.G0)(o.uid),
                    children: o.text,
                  }),
                  (0, _.jsx)(L.vO, { margin: e, fontSize: s, children: i }),
                  (0, _.jsxs)(L.b5, {
                    children: [
                      (0, _.jsxs)(L.uS, {
                        children: [
                          (0, _.jsx)("a", {
                            href: "/blog/author/".concat(a.slug),
                            children: a.name,
                          }),
                          (null === a || void 0 === a ? void 0 : a.role) &&
                            (0, _.jsx)("p", { children: a.role }),
                        ],
                      }),
                      (0, _.jsxs)(L.Az, {
                        children: [
                          l,
                          (0, _.jsx)(L.CY, { children: "\u2022" }),
                          c,
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        F = function (t) {
          var e,
            n,
            o,
            i,
            r = t.content,
            a = t.doPicks;
          return (0, _.jsx)(z.Z, {
            sectionPadding: "120px 0 0",
            style: { backgroundColor: r.backgroundColor },
            children: (0, _.jsxs)(G, {
              children: [
                (0, _.jsx)(R.Tg, {
                  children: (0, _.jsx)(E.Z, {
                    renderAs: "h1",
                    defaultColor: l.ZP.blue1,
                    overrideColor: r.titleColor,
                    textAlign: "center",
                    children: r.title,
                  }),
                }),
                (0, _.jsx)(R.QD, {
                  children: (0, _.jsx)(U, {
                    renderAs: "p",
                    textAlign: "center",
                    children: r.text,
                  }),
                }),
                (0, _.jsxs)(R.LZ, {
                  children: [
                    (0, _.jsx)(R.IK, {
                      children: (0, _.jsx)(P.Z, {
                        author: {
                          name:
                            null === (e = r.primaryBlogData) || void 0 === e
                              ? void 0
                              : e.authorData.slices.find(function (t) {
                                  return "blog-author" === t.type;
                                }).metadata.author_name.value,
                          title:
                            null === (n = r.primaryBlogData) || void 0 === n
                              ? void 0
                              : n.authorData.slices.find(function (t) {
                                  return "blog-author" === t.type;
                                }).metadata.author_title.value,
                          url: "/blog/author/".concat(
                            null === (o = r.primaryBlogData) || void 0 === o
                              ? void 0
                              : o.author
                          ),
                          image:
                            null === (i = r.primaryBlogData) || void 0 === i
                              ? void 0
                              : i.authorData.slices.find(function (t) {
                                  return "blog-author" === t.type;
                                }).metadata.author_image.value,
                        },
                        publishDate: r.primaryBlogData.slices.find(function (
                          t
                        ) {
                          return "blog-content" === t.type;
                        }).metadata.blog_post_date.value,
                        title: r.primaryBlogData.slices.find(function (t) {
                          return "blog-content" === t.type;
                        }).metadata.blog_headline.value,
                        image: {
                          src: r.primaryBlogData.slices.find(function (t) {
                            return "blog-content" === t.type;
                          }).metadata.blog_header_image.value,
                        },
                        link: "/blog/".concat(r.primaryBlogData.slug),
                        isLarge: !0,
                      }),
                    }),
                    (0, _.jsxs)(R.hd, {
                      children: [
                        (0, _.jsx)(E.Z, {
                          renderAs: "h4",
                          children: "Category Topics",
                        }),
                        (0, _.jsx)(R.FB, {
                          children: r.tags.map(function (t) {
                            return (0,
                            _.jsx)("li", { children: (0, _.jsx)(L.u8, { url: "/blog/tag/".concat(t.slug), passHref: !0, prefetch: !1, scroll: !1, $tagBgColor: (0, M.G0)(t.slug), children: t.name }) }, t.slug);
                          }),
                        }),
                      ],
                    }),
                    (0, _.jsxs)(R.bM, {
                      children: [
                        (0, _.jsx)(E.Z, {
                          renderAs: "h4",
                          children: "Optimize your streaming business",
                        }),
                        (0, _.jsx)("p", {
                          children:
                            "Download our guide to learn how streaming businesses can optimize their architecture to save costs.",
                        }),
                        (0, _.jsx)("p", {
                          children: (0, _.jsx)(R.ud, {
                            backgroundColor: l.ZP.blue2,
                            url: "https://try.digitalocean.com/optimize-performance/",
                            children: "Download now",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, _.jsxs)(R.BX, {
                  children: [
                    (0, _.jsx)(R.TG, { children: "DigitalOcean\u2018s Picks" }),
                    (0, _.jsx)(R.z8, {
                      children: a.map(function (t) {
                        var e, n, o, i, r;
                        return (0, _.jsx)(
                          X,
                          {
                            tag: {
                              text:
                                null === t ||
                                void 0 === t ||
                                null === (e = t.tags) ||
                                void 0 === e ||
                                null === (n = e[0]) ||
                                void 0 === n
                                  ? void 0
                                  : n.slug.replace("-", " "),
                              uid:
                                null === t ||
                                void 0 === t ||
                                null === (o = t.tags) ||
                                void 0 === o ||
                                null === (i = o[0]) ||
                                void 0 === i
                                  ? void 0
                                  : i.slug,
                            },
                            title:
                              null === t || void 0 === t
                                ? void 0
                                : t.slices.find(function (t) {
                                    return "blog-content" === t.type;
                                  }).metadata.blog_headline.value,
                            blogPickUrlPath: "/blog/".concat(
                              null === t || void 0 === t ? void 0 : t.slug
                            ),
                            tagMargin: "0 0 8x",
                            titleMargin: "0 0 8px",
                            author: {
                              name:
                                null === t ||
                                void 0 === t ||
                                null === (r = t.authorData) ||
                                void 0 === r
                                  ? void 0
                                  : r.slices.find(function (t) {
                                      return "blog-author" === t.type;
                                    }).metadata.author_name.value,
                              slug:
                                null === t || void 0 === t ? void 0 : t.author,
                            },
                            date: (0, T.Z)(
                              null === t || void 0 === t
                                ? void 0
                                : t.slices.find(function (t) {
                                    return "blog-content" === t.type;
                                  }).metadata.blog_post_date.value,
                              !1,
                              !0
                            ),
                            readingTime:
                              null === t || void 0 === t
                                ? void 0
                                : t.readingTime,
                            fontSize: "18px",
                          },
                          null === t || void 0 === t ? void 0 : t.slug
                        );
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        G = (0, u.ZP)(I.Z).withConfig({
          displayName: "HeroBlog___StyledContainer",
          componentId: "sc-14qt5rg-0",
        })(["", ""], R.ux),
        U = (0, u.ZP)(E.Z).withConfig({
          displayName: "HeroBlog___StyledHeading",
          componentId: "sc-14qt5rg-1",
        })(["", ""], R.nT),
        H = u.ZP.div.withConfig({
          displayName: "BlogListTemplateStyles__StyledBlogPost",
          componentId: "sc-v5nr09-0",
        })(["background-color:", ";padding:32px 0 64px;"], l.ZP.gray10);
      function V(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          e &&
            (o = o.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function J(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? V(Object(n), !0).forEach(function (e) {
                (0, s.Z)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : V(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var K = function (t) {
          var e = t.content,
            n = t.doPicks,
            o = t.tagData,
            i = t.primaryBlogData,
            r = [
              { text: "News", url: "#news" },
              { text: "Product Updates", url: "#product-updates" },
              { text: "Cloud Education", url: "#cloud-education" },
              { text: "Culture", url: "#culture" },
              { text: "Community", url: "#community" },
              { text: "Trust Security", url: "#trust-security" },
              { text: "Engineering", url: "#engineering" },
            ],
            a = (0, d.useRef)(
              r.map(function () {
                return (0, d.createRef)();
              })
            ),
            s = (0, d.useRef)(null),
            u = (0, d.useMemo)(
              function () {
                return (0, c.Z)(e).sort(function (t, e) {
                  var n,
                    o,
                    i,
                    r,
                    l = e.slices.find(function (t) {
                      return "blog-content" === t.type;
                    }),
                    a = t.slices.find(function (t) {
                      return "blog-content" === t.type;
                    });
                  return (
                    new Date(
                      null === l ||
                      void 0 === l ||
                      null === (n = l.metadata) ||
                      void 0 === n ||
                      null === (o = n.blog_post_date) ||
                      void 0 === o
                        ? void 0
                        : o.value
                    ).getTime() -
                    new Date(
                      null === a ||
                      void 0 === a ||
                      null === (i = a.metadata) ||
                      void 0 === i ||
                      null === (r = i.blog_post_date) ||
                      void 0 === r
                        ? void 0
                        : r.value
                    ).getTime()
                  );
                });
              },
              [e]
            ),
            g = o.map(function (t) {
              return J(
                J({}, t),
                {},
                {
                  posts: u.filter(function (e) {
                    var n;
                    return null === e ||
                      void 0 === e ||
                      null === (n = e.tags) ||
                      void 0 === n
                      ? void 0
                      : n
                          .map(function (t) {
                            return t.slug;
                          })
                          .includes(t.slug);
                  }),
                }
              );
            }),
            p = {
              backgroundColor: l.ZP.grayLightest,
              titleColor: l.ZP.gray2,
              textColor: l.ZP.black,
              title: "The DigitalOcean Blog",
              text: "Dive into DigitalOcean product updates, company news, and educational content on how developers and startups can leverage the cloud.",
              tags: o,
              primaryBlogData: i,
            },
            h = [
              "news",
              "product-updates",
              "cloud-education",
              "culture",
              "community",
              "trust-security",
              "engineering",
            ];
          g.sort(function (t, e) {
            return h.indexOf(t.slug) - h.indexOf(e.slug);
          });
          var f = u.filter(function (t) {
            return n
              .map(function (t) {
                return t.slug;
              })
              .includes(t.slug);
          });
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(N, {
                observableCarousel: s,
                items: r,
                refs: a.current,
              }),
              (0, _.jsx)(F, { content: p, doPicks: f }),
              (0, _.jsx)(H, {
                ref: s,
                children: g.map(function (t, e) {
                  return (0,
                  _.jsx)(Z, { uid: null === t || void 0 === t ? void 0 : t.slug, dataId: e, elRef: a.current[e], navigateTo: null === t || void 0 === t ? void 0 : t.navigateTo, title: null === t || void 0 === t ? void 0 : t.name, link: { title: "View All", url: "/blog/tag/".concat(null === t || void 0 === t ? void 0 : t.slug) }, posts: null === t || void 0 === t ? void 0 : t.posts }, null === t || void 0 === t ? void 0 : t.slug);
                }),
              }),
            ],
          });
        },
        W = n(84089),
        q = !0,
        Q = function (t) {
          var e = t.featuredPosts,
            n = t.pageData,
            o = t.tagData,
            s = t.announcementData,
            c = t.primaryBlogData,
            d = (0, r.useRouter)();
          return d.isFallback || n
            ? (0, _.jsxs)(a.Z, {
                announcementData: s,
                metaData: n[0],
                footerWaveColor: l.ZP.gray10,
                children: [
                  (0, _.jsxs)(i(), {
                    children: [
                      (0, _.jsx)("link", {
                        rel: "alternate",
                        type: "application/rss+xml",
                        title: "The DigitalOcean Blog",
                        href: "/blog/rss",
                      }),
                      (0, _.jsx)("link", {
                        rel: "canonical",
                        href: "https://www.digitalocean.com/blog",
                      }),
                      (0, _.jsx)("meta", {
                        property: "og:url",
                        content: "https://www.digitalocean.com/blog/",
                      }),
                      (0, _.jsx)("title", { children: "DigitalOcean Blog" }),
                      (0, _.jsx)(
                        "meta",
                        {
                          name: "description",
                          content: "DigitalOcean blog - Simplify your cloud",
                        },
                        "description"
                      ),
                      (0, _.jsx)(
                        "meta",
                        {
                          name: "twitter:description",
                          content: "DigitalOcean blog - Simplify your cloud",
                        },
                        "twitterDescription"
                      ),
                      (0, _.jsx)(
                        "meta",
                        {
                          property: "og:description",
                          content: "DigitalOcean blog - Simplify your cloud",
                        },
                        "ogDescription"
                      ),
                      (0, _.jsx)(
                        "meta",
                        { name: "twitter:title", content: "DigitalOcean Blog" },
                        "twitterTitle"
                      ),
                      (0, _.jsx)(
                        "meta",
                        { property: "og:title", content: "DigitalOcean Blog" },
                        "ogTitle"
                      ),
                    ],
                  }),
                  d.isFallback
                    ? (0, _.jsx)("div", { children: "Loading\u2026" })
                    : (0, _.jsx)(K, {
                        primaryBlogData: c,
                        content: n,
                        tagData: o,
                        doPicks: e,
                      }),
                ],
              })
            : (0, _.jsx)(W.default, { statusCode: 404 });
        };
    },
    57286: function (t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/blog",
        function () {
          return n(86639);
        },
      ]);
    },
    35449: function (t, e) {
      "use strict";
      e.Z = {
        src: "/_next/static/media/blog-placeholder.a6dc2360.png",
        height: 360,
        width: 540,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFBAMAAACKv7BmAAAAKlBMVEX8/P37/Pz6+/z6+vv5+vv39/n29/n19vr19vn09ffz9fjy9Pjy9Pfy8/Z0WJ8dAAAAIklEQVR42mPYVdG+mmHzzJnWDJvu3tVmOGDizMOwMSxVGgCMKAnmE7JFvgAAAABJRU5ErkJggg==",
      };
    },
  },
  function (t) {
    t.O(
      0,
      [1092, 8616, 8249, 8417, 9963, 2460, 6334, 9774, 2888, 179],
      function () {
        return (e = 57286), t((t.s = e));
        var e;
      }
    );
    var e = t.O();
    _N_E = e;
  },
]);
