"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9963],
  {
    99963: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return S;
        },
      });
      var o = n(9008),
        r = n.n(o),
        a = n(96074),
        i = n(98417),
        s = n(16835),
        u = n(67294),
        c = n(11163),
        l = n(31955),
        d = n(65861),
        p = n(6944),
        m = n(75256),
        f = n(17534),
        g = n(88134),
        h = n(78268),
        v = n(37797),
        x = n(90352),
        y = (0, v.ZP)(x.Z).withConfig({
          displayName: "AnnouncementBarWWWStyles__StyledBarLink",
          componentId: "sc-1rb4toz-0",
        })(
          [
            "align-items:center;background-color:",
            ";border-radius:0 0 6px 6px;box-shadow:0 2px 4px ",
            " !important;box-sizing:border-box;cursor:pointer;display:flex;justify-content:center;padding:16px 40px;position:fixed;transition:background-color 0.5s ease,box-shadow 0.5s ease,transform 0.5s ease;width:100%;z-index:8888;",
            "{flex-direction:column;}p{color:",
            ";margin:0;padding-top:1px;text-align:center;",
            "{font-size:14px;}}&:hover{background-color:",
            " !important;box-shadow:0 10px 20px ",
            " !important;}",
          ],
          function (e) {
            return e.backgroundColor;
          },
          (0, g.E9)(g.ZP.blueDark, 0.6),
          (0, f.X)(f.A.tablet),
          function (e) {
            return e.color;
          },
          (0, f.X)(f.A.desktop),
          function (e) {
            return e.backgroundColor || "#15cd72";
          },
          (0, g.E9)(g.ZP.blueDark, 0.1)
        ),
        _ = v.ZP.aside.withConfig({
          displayName: "AnnouncementBarWWWStyles__StyledBar",
          componentId: "sc-1rb4toz-1",
        })(
          [
            "align-items:center;border-radius:6px;box-shadow:0 2px 4px ",
            " !important;box-sizing:border-box;display:flex;justify-content:center;padding:16px 40px;position:fixed;transition:background-color 0.5s ease,box-shadow 0.5s ease,transform 0.5s ease;width:100%;z-index:8888;",
            "{flex-direction:column;}p{color:",
            " !important;margin:0;padding-top:1px;text-align:center;",
            "{font-size:14px;}}",
          ],
          (0, g.E9)(g.ZP.blueDark, 0.1),
          (0, f.X)(f.A.tablet),
          function (e) {
            return e.color;
          },
          (0, f.X)(f.A.desktop)
        ),
        b = v.ZP.img.withConfig({
          displayName: "AnnouncementBarWWWStyles__StyledIcon",
          componentId: "sc-1rb4toz-2",
        })(
          [
            "max-width:20px;padding-right:5px;",
            "{padding-right:0;padding-top:10px;}",
          ],
          (0, f.X)(f.A.desktop)
        ),
        w = (0, v.ZP)(h.Z)
          .attrs({ size: 40 })
          .withConfig({
            displayName: "AnnouncementBarWWWStyles__StyledDismiss",
            componentId: "sc-1rb4toz-3",
          })(
          [
            "color:",
            ";cursor:pointer;padding:8px;position:absolute;right:0;top:50%;transform:translateY(-50%);transition:color 0.5s ease;&:hover{color:",
            ";}",
          ],
          g.ZP.white,
          g.ZP.blue1
        ),
        P = n(85893),
        k = function (e) {
          var t = e.item,
            n = t.background_color,
            o = t.text_color,
            r = t.icon,
            a = t.link,
            i = t.referral_credit_text,
            s = t.referral_link_credit_text,
            l = (0, c.useRouter)(),
            p = (0, u.useState)(!1),
            m = p[0],
            f = p[1],
            g = (0, u.useCallback)(function (e) {
              e.preventDefault(), f(!0);
            }, []),
            h = (0, u.useMemo)(
              function () {
                return l.isReady
                  ? l.query.utm_source && s.value
                    ? s.value
                    : i.value
                  : "";
              },
              [l, s.value, i.value]
            );
          return (
            (0, u.useEffect)(
              function () {
                f(!1);
              },
              [h]
            ),
            m
              ? null
              : a && a.value && l.isReady
              ? (0, P.jsxs)(
                  y,
                  {
                    id: "announcement-bar",
                    url: a.value,
                    style: { backgroundColor: n.value || "#15cd72" },
                    color: "light" === o.value ? "white" : null,
                    children: [
                      r && r.value
                        ? (0, P.jsx)(b, {
                            src: r.value,
                            alt: "icon for banner",
                          })
                        : null,
                      (0, P.jsx)(d.default, { content: h }),
                      (0, P.jsx)(w, { onClick: g }),
                    ],
                  },
                  h
                )
              : (0, P.jsxs)(
                  _,
                  {
                    id: "announcement-bar",
                    style: { backgroundColor: n.value || "#15cd72" },
                    color: "light" === o.value ? "white" : null,
                    children: [
                      r && r.value
                        ? (0, P.jsx)(b, {
                            src: r.value,
                            alt: "icon for banner",
                          })
                        : null,
                      (0, P.jsx)(d.default, { content: h }),
                      (0, P.jsx)(w, { onClick: g }),
                    ],
                  },
                  h
                )
          );
        },
        j = function (e) {
          var t = e.data,
            n = e.utmSourceParam,
            o = e.hasRefCode,
            r = (0, u.useMemo)(
              function () {
                return null === t || void 0 === t
                  ? void 0
                  : t.find(function (e) {
                      return e.utm_source.value === n;
                    });
              },
              [t, n]
            ),
            a = (0, u.useMemo)(
              function () {
                return null === t || void 0 === t
                  ? void 0
                  : t.find(function (e) {
                      var t = e.utm_source;
                      return !l.Z.get("last_logged_in_at") && !t.value && o;
                    });
              },
              [t, o]
            );
          return r
            ? (0, P.jsx)(k, { item: r })
            : a
            ? (0, P.jsx)(k, { item: a })
            : null;
        },
        C = function (e) {
          var t = e.data,
            n = (0, c.useRouter)(),
            o = (0, u.useState)(!1),
            r = o[0],
            a = o[1],
            i = (0, u.useCallback)(function (e) {
              a(!0),
                fetch(
                  "https://cloud.digitalocean.com/api/v1/referrals/".concat(
                    encodeURIComponent(e),
                    "/register"
                  ),
                  { method: "GET", mode: "cors", credentials: "include" }
                );
            }, []);
          (0, u.useEffect)(
            function () {
              n.isReady && n.query.refcode && i(n.query.refcode);
            },
            [n.isReady, n.query, i]
          ),
            (0, u.useEffect)(function () {
              l.Z.get("refcode") && a(!0);
            }, []);
          var d = (0, u.useCallback)(
              function () {
                return !l.Z.get("refcode") && !n.query.refcode;
              },
              [n.query]
            ),
            f = (0, m.Z)("fto_2021", d),
            g = (0, s.Z)(f, 1)[0];
          (0, u.useEffect)(
            function () {
              "received_promo" === g && i(p.rh.wwwFTOExp);
            },
            [g, i]
          );
          var h = (0, u.useMemo)(
            function () {
              return t.map(function (e) {
                var t;
                return null === (t = e.slices) || void 0 === t
                  ? void 0
                  : t.find(function (e) {
                      return "announcement" === e.type;
                    }).metadata;
              });
            },
            [t]
          );
          return (0, P.jsx)(j, {
            data: h,
            utmSourceParam: n.query.utm_source,
            hasRefCode: r,
          });
        };
      j.defaultProps = { utmSourceParam: "", hasRefCode: !1 };
      var E = "https://www.digitalocean.com/".replace(/\/*$/, ""),
        Z = function (e) {
          var t = e.children,
            n = e.footerWaveColor,
            o = e.metaData,
            s = e.announcementData,
            u = e.ignoreType,
            c = e.ignoreSlug,
            l = o.path;
          return (
            l ||
              ((l = E),
              (l += !u && o.type ? "/".concat(o.type, "/") : ""),
              (l += !c && o.slug ? "".concat(o.slug, "/") : "")),
            (0, P.jsxs)(a.Z, {
              children: [
                (0, P.jsxs)(r(), {
                  children: [
                    (0, P.jsxs)(P.Fragment, {
                      children: [
                        (0, P.jsx)("link", { rel: "canonical", href: l }),
                        (0, P.jsx)("meta", { property: "og:url", content: l }),
                      ],
                    }),
                    (null === o || void 0 === o ? void 0 : o.description) &&
                      (0, P.jsxs)(P.Fragment, {
                        children: [
                          (0, P.jsx)(
                            "meta",
                            { name: "description", content: o.description },
                            "description"
                          ),
                          (0, P.jsx)(
                            "meta",
                            {
                              name: "twitter:description",
                              content: o.description,
                            },
                            "twitterDescription"
                          ),
                          (0, P.jsx)(
                            "meta",
                            {
                              property: "og:description",
                              content: o.description,
                            },
                            "ogDescription"
                          ),
                        ],
                      }),
                    (null === o || void 0 === o ? void 0 : o.title) &&
                      (0, P.jsxs)(P.Fragment, {
                        children: [
                          (0, P.jsx)("title", { children: o.title }),
                          (0, P.jsx)(
                            "meta",
                            { name: "twitter:title", content: o.title },
                            "twitterTitle"
                          ),
                          (0, P.jsx)(
                            "meta",
                            { property: "og:title", content: o.title },
                            "ogTitle"
                          ),
                        ],
                      }),
                    (null === o || void 0 === o
                      ? void 0
                      : o.open_graph_image) &&
                      (0, P.jsxs)(P.Fragment, {
                        children: [
                          (0, P.jsx)(
                            "meta",
                            {
                              name: "twitter:image",
                              property: o.open_graph_image,
                            },
                            "twitterImage"
                          ),
                          (0, P.jsx)(
                            "meta",
                            {
                              name: "twitter:card",
                              content: "summary_large_image",
                            },
                            "twitterCard"
                          ),
                          (0, P.jsx)(
                            "meta",
                            {
                              property: "og:image",
                              content: o.open_graph_image,
                            },
                            "ogImage"
                          ),
                        ],
                      }),
                  ],
                }),
                (0, P.jsx)(C, { data: s }),
                t,
                (0, P.jsx)(i.Z, { footerWaveColor: n }),
              ],
            })
          );
        },
        S = Z;
      Z.defaultProps = {
        footerWaveColor: null,
        ignoreType: !1,
        ignoreSlug: !1,
      };
    },
    10750: function (e, t, n) {
      var o = n(67294);
      t.Z = function () {
        var e = (0, o.useState)(!1),
          t = e[0],
          n = e[1];
        return (
          (0, o.useEffect)(
            function () {
              var e;
              if (!window || t) return function () {};
              if (null !== (e = window.analytics) && void 0 !== e && e.isReady)
                return n(!0), function () {};
              var o = function () {
                n(!0);
              };
              return (
                document.addEventListener("analyticsReady", o),
                function () {
                  document.removeEventListener("analyticsReady", o);
                }
              );
            },
            [t]
          ),
          t
        );
      };
    },
    75256: function (e, t, n) {
      var o = n(67294),
        r = n(30022),
        a = n(10750);
      t.Z = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null,
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = (0, o.useState)(),
          s = i[0],
          u = i[1],
          c = (0, a.Z)(),
          l = (0, o.useMemo)(
            function () {
              var e, o, r, a;
              return (
                !!c &&
                !(
                  null === (e = window) ||
                  void 0 === e ||
                  null === (o = e.analytics) ||
                  void 0 === o ||
                  !o.user ||
                  "function" !== typeof window.analytics.user
                ) &&
                !!(
                  ("function" ===
                    typeof (null === (r = window.analytics.user()) ||
                    void 0 === r
                      ? void 0
                      : r.id) &&
                    null === window.analytics.user().id()) ||
                  n
                ) &&
                !(
                  "function" !==
                    typeof (null === (a = window.analytics.user()) ||
                    void 0 === a
                      ? void 0
                      : a.anonymousId) || !window.analytics.user().anonymousId()
                ) &&
                !("function" === typeof t && !t())
              );
            },
            [c, t, n]
          ),
          d = (0, o.useState)(null),
          p = d[0],
          m = d[1];
        return (
          (0, o.useEffect)(
            function () {
              if (l) {
                var t = new r.Experimentation(
                  window.analytics.user().anonymousId(),
                  r.LOG_LEVEL.INFO
                );
                u(t),
                  t.loadEnv(
                    "https://cdn.optimizely.com/datafiles/YApSr5LXM4fZAxRPFXsCJC.json",
                    function () {
                      m(t.activate(e));
                    }
                  );
              } else m(null);
            },
            [l, e]
          ),
          [p, s]
        );
      };
    },
    6944: function (e, t, n) {
      n.d(t, {
        AD: function () {
          return d;
        },
        Fq: function () {
          return o;
        },
        J3: function () {
          return c;
        },
        Jb: function () {
          return f;
        },
        KM: function () {
          return _;
        },
        WA: function () {
          return x;
        },
        WW: function () {
          return h;
        },
        Wh: function () {
          return r;
        },
        _y: function () {
          return u;
        },
        cG: function () {
          return p;
        },
        cT: function () {
          return i;
        },
        gV: function () {
          return s;
        },
        oA: function () {
          return v;
        },
        oB: function () {
          return m;
        },
        rZ: function () {
          return g;
        },
        rh: function () {
          return y;
        },
        tq: function () {
          return l;
        },
      });
      var o = {
          userReport: {
            reportedType: ["question", "tutorial", "tool", "comment"],
          },
          comment: {
            parentType: [
              "tutorial",
              "question",
              "tool",
              "comment",
              "user_report",
            ],
          },
          upvote: {
            upvotableType: [
              "tutorial",
              "tutorial_series",
              "question",
              "tool",
              "comment",
            ],
          },
        },
        r = {
          tutorial: [
            "tutorial",
            "post",
            "conceptual-article",
            "tech-talk",
            "book",
            "cheatsheet",
            "meetup-kit",
            "learning-path",
          ],
          comment: ["comment", "answer", "private_comment", "private_note"],
          tool: ["api_wrapper", "apps", "courses", "services", "others"],
          userReport: ["spam", "offensive", "off-topic", "other"],
        },
        a = { tutorial: ["article", "snippet", "almanac", "video", "link"] },
        i = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "community";
          return "css-tricks" === e ? a : r;
        },
        s = [
          { value: "community", label: "Community", clientDir: "digitalocean" },
          { value: "css_tricks", label: "CSS Tricks", clientDir: "css-tricks" },
        ],
        u = { tutorialTypes: ["learning-path"], action: "NOT IN" },
        c = {
          en: { english_name: "English", localized_name: "English" },
          de: { english_name: "German", localized_name: "Deutsch" },
          es: { english_name: "Spanish", localized_name: "Espa\xf1ol" },
          id: {
            english_name: "Bahasa Indonesia",
            localized_name: "Bahasa Indonesia",
          },
          pt: { english_name: "Portuguese", localized_name: "Portugu\xeas" },
          ru: {
            english_name: "Russian",
            localized_name: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439",
          },
          fr: { english_name: "French", localized_name: "Fran\xe7ais" },
          ja: {
            english_name: "Japanese",
            localized_name: "\u65e5\u672c\u8a9e",
          },
          zh: { english_name: "Chinese", localized_name: "\u4e2d\u6587" },
        },
        l = {
          tutorial: ["draft", "published", "trashed", "deprecated"],
          tutorialSeries: ["draft", "published", "trashed"],
          question: [
            "under_review",
            "spam",
            "published",
            "trashed",
            "unlisted",
          ],
          comment: ["under_review", "spam", "published", "trashed"],
          tool: ["draft", "published", "trashed"],
          staticPage: ["draft", "published", "trashed"],
          marketingForm: ["draft", "published", "trashed"],
        },
        d = [
          "checkbox",
          "radio",
          "date",
          "email",
          "hidden",
          "number",
          "select",
          "text",
          "textarea",
        ],
        p = {
          marketo:
            "https://113-DTN-266.mktorest.com/rest/v1/leads/submitForm.json",
          airtable: "https://api.airtable.com/v0/APP_ID/TABLE_ID",
        },
        m = { tutorial: ["beginner", "intermediate", "advanced", "expert"] },
        f = [
          "announcement",
          "blog",
          "blog/author",
          "careers",
          "careers/position",
          "community/pages",
          "company/contact",
          "currents",
          "customers",
          "deploy_teaser",
          "diversity",
          "footer",
          "go",
          "hatch",
          "home",
          "landing",
          "legal",
          "metadata",
          "navigation",
          "overview",
          "partners",
          "press",
          "products",
          "products/linux-distribution",
          "reports",
          "resources",
          "resources/article",
          "resources/guide",
          "resources/podcast",
          "resources/reports",
          "resources/video",
          "solutions",
          "tide",
          "trust",
        ],
        g = {
          whitepaper: "green5",
          video: "purple5",
          podcast: "blue2",
          blog: "blue5",
        },
        h = ["tag", "team", "origin", "category", "sub-category"],
        v = {
          defaultPerPage: 100,
          answersPerPage: 3,
          commentsPerPage: 10,
          questionsPerPage: 1e3,
          tutorialsPerPage: 1e3,
          usersPerPage: 1e3,
          tagsPerPage: 1e3,
          toolsPerPage: 1e3,
          slugsHistoryPerPage: 1e3,
          tutorialCollectionsPerPage: 1e3,
          admin: { perPageOptions: [10, 15, 20, 50, 100] },
        },
        x = {
          0: { contact_type: "None" },
          1: { contact_type: "Website" },
          2: { contact_type: "Twitter" },
          3: { contact_type: "GitHub" },
          4: { contact_type: "LinkedIn" },
        },
        y = {
          communityFTOAll: "f6fcd01aaffb",
          wwwFTOEducationPage: "1960aeda82a1",
          wwwFTOExp: "dcae82944357",
        },
        _ = { credit: "$200" };
    },
  },
]);
