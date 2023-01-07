(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3110],
  {
    77194: function (e, t, n) {
      "use strict";
      var r = n(67294);
      t.Z = function () {
        var e = (0, r.useRef)(null);
        (0, r.useEffect)(function () {
          return (
            (e.current = new AbortController()),
            function () {
              e.current && e.current.abort();
            }
          );
        }, []);
        var t = (0, r.useCallback)(function () {
          e.current && (e.current.abort(), (e.current = new AbortController()));
        }, []);
        return { controller: e, handleAbort: t };
      };
    },
    24856: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return re;
          },
        });
      var r = n(67294),
        s = n(9008),
        i = n.n(s),
        o = n(11163),
        a = n(33606),
        l = n(17053),
        u = n(76427),
        d = n(57054),
        c = n(58069),
        h = n(75933),
        f = n(37797),
        p = n(41664),
        g = n.n(p),
        m = n(84270),
        b = n(88723),
        v = n(52507),
        y = n(21474),
        _ = n(59667),
        x = n(57671),
        j = n(77194),
        w = n(98992),
        P = n(16835),
        S = n(6944),
        C = n(88400),
        Z = n(1443),
        T = n(13688),
        N = n(89783),
        k = n(21346),
        A = f.ZP.div.withConfig({
          displayName: "UserPostsListTabStyles__StyledNoResultsContainer",
          componentId: "sc-1b7gi2r-0",
        })([
          "color:#666;font-size:20px;line-height:1.4;margin:100px 0;text-align:center;width:100%;",
        ]),
        I = n(85893),
        U = function (e) {
          var t = e.records,
            n = e.language,
            r = e.setLanguage,
            s = e.sortBy,
            i = e.setSortBy,
            o = e.page,
            a = e.setPage,
            l = e.hasMore,
            u = [
              { value: "created_at", label: "Newest" },
              { value: "views", label: "Popular" },
            ],
            d = Object.entries(S.J3).map(function (e) {
              var t = (0, P.Z)(e, 2);
              return { value: t[0], label: t[1].localized_name };
            });
          return (
            d.unshift({ value: "", label: "All" }),
            (0, I.jsxs)(I.Fragment, {
              children: [
                (0, I.jsx)(C.Z, {
                  message: t.length
                    ? "".concat(t.length, " Results")
                    : "0 Results",
                  dropdowns: (0, I.jsxs)(I.Fragment, {
                    children: [
                      (0, I.jsx)(Z.dV, {
                        label: (0, I.jsx)(N.Z, { eyebrow: "Sort by" }),
                        options: u,
                        value: u.find(function (e) {
                          return e.value === s;
                        }),
                        onChange: function (e) {
                          return i(e.value);
                        },
                        style: { padding: 0 },
                      }),
                      (0, I.jsx)(Z.dV, {
                        label: (0, I.jsx)(N.Z, { eyebrow: "Language" }),
                        options: d,
                        value: d.find(function (e) {
                          return e.value === n;
                        }),
                        onChange: function (e) {
                          return r(e.value);
                        },
                        style: { padding: 0 },
                      }),
                    ],
                  }),
                }),
                t.length
                  ? (0, I.jsx)(T.Z, {
                      records: t,
                      onClickTag: function () {
                        return null;
                      },
                      useSubTypeLink: !0,
                      showEyebrow: !0,
                    })
                  : (0, I.jsx)(A, { children: "No contributions" }),
                (0, I.jsx)(k.Z, {
                  onClick: function () {
                    return a(o + 1);
                  },
                  visible: l,
                  message: "Load more results",
                }),
              ],
            })
          );
        },
        L = f.ZP.div.withConfig({
          displayName: "UserPostsListTabbedHeaderStyles__StyledTabbedContainer",
          componentId: "sc-1h45njj-0",
        })([
          "background:#fff;font-size:14px;font-weight:500;line-height:24px;position:relative;",
        ]),
        E = f.ZP.div.withConfig({
          displayName:
            "UserPostsListTabbedHeaderStyles__StyledTabbedHeaderListContainer",
          componentId: "sc-1h45njj-1",
        })(["display:block;margin-bottom:3px;"]),
        R = f.ZP.ul.withConfig({
          displayName:
            "UserPostsListTabbedHeaderStyles__StyledTabbedHeaderList",
          componentId: "sc-1h45njj-2",
        })([
          "background:#fff;display:flex;flex-wrap:nowrap;margin:0 0 0 auto;max-width:1090px;width:95%;",
        ]),
        H = f.ZP.li.withConfig({
          displayName:
            "UserPostsListTabbedHeaderStyles__StyledTabbedHeaderListItem",
          componentId: "sc-1h45njj-3",
        })([
          "background-color:#f3f5f9;cursor:pointer;display:block;list-style:none;margin:0;padding:0 16px;",
        ]),
        M = f.ZP.a.withConfig({
          displayName:
            "UserPostsListTabbedHeaderStyles__StyledTabbedHeaderLink",
          componentId: "sc-1h45njj-4",
        })(
          [
            "border-bottom:",
            ";cursor:pointer;margin-right:20px;padding:30px 0 0;text-decoration:none;transition:color 0.15s linear;&:hover{color:#0069ff;}",
          ],
          function (e) {
            return e.active ? "2px solid #0069ff" : "2px solid transparent";
          }
        ),
        B = f.ZP.li.withConfig({
          displayName:
            "UserPostsListTabbedHeaderStyles__StyledTabbedHeaderSearchContainer",
          componentId: "sc-1h45njj-5",
        })([
          "display:block;flex:1;margin:0;padding:0 0 0 16px;text-align:right;",
        ]),
        q = f.ZP.div.withConfig({
          displayName:
            "UserPostsListTabbedHeaderStyles__StyledTabbedHeaderSearchBox",
          componentId: "sc-1h45njj-6",
        })([
          "border:1px solid #e5e8ed;border-radius:4px;display:inline-block;overflow-x:hidden;position:relative;top:5px;",
        ]),
        D = function (e) {
          var t,
            n = e.user,
            s = e.auth,
            i = (0, r.useState)(""),
            o = i[0],
            a = i[1],
            u = (0, r.useState)(""),
            d = u[0],
            h = u[1],
            f = (0, r.useState)(
              (null === (t = s.user) || void 0 === t
                ? void 0
                : t.preferred_language) || "en"
            ),
            p = f[0],
            g = f[1],
            m = (0, r.useState)("created_at"),
            b = m[0],
            v = m[1],
            P = (0, r.useState)(0),
            S = P[0],
            C = P[1],
            Z = (0, r.useState)(!1),
            T = Z[0],
            N = Z[1],
            k = (0, r.useState)([]),
            A = k[0],
            D = k[1],
            O = (0, j.Z)(),
            F = O.controller,
            G = O.handleAbort;
          return (
            (0, r.useEffect)(
              function () {
                null !== F && void 0 !== F && F.current && G(),
                  (0, l.OY)(
                    {
                      slug: n.slug,
                      query: d,
                      type: o,
                      language: p,
                      sortBy: b,
                      page: S,
                    },
                    {
                      signal:
                        null === F || void 0 === F ? void 0 : F.current.signal,
                    }
                  ).then(function (e) {
                    N(e.hasMore);
                    var t = e.records.map(function (e) {
                      var t,
                        r,
                        s,
                        i = e,
                        o = [],
                        a = e.created_at;
                      switch (e.type) {
                        case "question":
                          i.relation = "Asked";
                          break;
                        case "comment":
                          i.relation = "Answered";
                          break;
                        case "tutorial":
                          (a =
                            "undefined" !== typeof e.event_start_at_utc &&
                            null !== e.event_start_at_utc
                              ? e.event_start_at_utc
                              : null !== e.last_validated_at
                              ? e.last_validated_at
                              : e.published_at),
                            (t = i.authors.filter(function (e) {
                              var t;
                              return (
                                (null === (t = e.user) || void 0 === t
                                  ? void 0
                                  : t.slug) === n.slug
                              );
                            })),
                            (r = i.editors.filter(function (e) {
                              var t;
                              return (
                                (null === (t = e.user) || void 0 === t
                                  ? void 0
                                  : t.slug) === n.slug
                              );
                            })),
                            (s = i.translators.filter(function (e) {
                              var t;
                              return (
                                (null === (t = e.user) || void 0 === t
                                  ? void 0
                                  : t.slug) === n.slug
                              );
                            })),
                            t.length && o.push("Authored"),
                            r.length && o.push("Edited"),
                            s.length && o.push("Translated"),
                            o.length && (i.relation = o.join(", "));
                      }
                      return (
                        (i.objectID = "".concat(e.type, "-").concat(e.id)),
                        (i.summary = (0, x.Z)(
                          (0, _.Z)(
                            e.description || e.content || "",
                            !!e.raw_html_allowed_in_markdown_at,
                            "tutorial" === e.type,
                            "tutorial" === e.type,
                            !0
                          ),
                          220
                        )),
                        (i.timestamp = Math.floor(new Date(a).getTime() / 1e3)),
                        i.authors
                          ? (i.authors = i.authors.map(function (e) {
                              return e.user ? (0, y.Z)(e.user) : e.user_name;
                            }))
                          : (i.authors = [(0, y.Z)(e.user)]),
                        i
                      );
                    });
                    D(function (e) {
                      return 0 === S ? t : e.concat(t);
                    });
                  });
              },
              [n.slug, o, d, p, b, S, N, D, F, G]
            ),
            (0, r.useEffect)(
              function () {
                return C(0);
              },
              [d, o, p, b]
            ),
            (0, I.jsxs)(L, {
              children: [
                (0, I.jsx)(E, {
                  children: (0, I.jsxs)(R, {
                    children: [
                      (0, I.jsx)(M, {
                        active: "" === o,
                        onClick: function () {
                          return a("");
                        },
                        children: "All",
                      }),
                      (0, I.jsx)(M, {
                        active: "answer" === o,
                        onClick: function () {
                          return a("answer");
                        },
                        children: "Answers",
                      }),
                      (0, I.jsx)(M, {
                        active: "question" === o,
                        onClick: function () {
                          return a("question");
                        },
                        children: "Questions",
                      }),
                      (0, I.jsx)(M, {
                        active: "tutorial" === o,
                        onClick: function () {
                          return a("tutorial");
                        },
                        children: "Tutorials",
                      }),
                      (0, I.jsx)(B, {
                        children: (0, I.jsx)(q, {
                          children: (0, I.jsx)(w.Z, {
                            placeholder: "Filter Results",
                            value: d,
                            onChange: function (e) {
                              return h(e.target.value);
                            },
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                (0, I.jsx)(H, {
                  children: (0, I.jsx)(c.Z, {
                    slim: !0,
                    children: (0, I.jsx)(U, {
                      records: A,
                      language: p,
                      setLanguage: g,
                      sortBy: b,
                      setSortBy: v,
                      page: S,
                      setPage: C,
                      hasMore: T,
                    }),
                  }),
                }),
              ],
            })
          );
        },
        O = n(88134),
        F = f.ZP.div.withConfig({
          displayName: "UserProfileTemplateStyles__StyledProfileWraper",
          componentId: "sc-a7cxwy-0",
        })(["width:100%;"]),
        G = f.ZP.div.withConfig({
          displayName: "UserProfileTemplateStyles__UserFieldWrapper",
          componentId: "sc-a7cxwy-1",
        })(["margin:5px 0;"]),
        z = (0, f.iv)(
          [
            "background-color:",
            ";border:1px solid ",
            ";border-radius:10px;color:",
            ";cursor:pointer;display:inline-block;font-weight:500;margin:10px;padding:15px;text-decoration:none;&:hover{background-color:",
            ";color:",
            ";}&:disabled{background-color:",
            ";&:hover{color:",
            ";cursor:wait;}}",
          ],
          O.ZP.white,
          O.ZP.blueLight,
          O.ZP.blueLight,
          O.ZP.blueLight,
          O.ZP.white,
          O.ZP.gray,
          O.ZP.blueLight
        ),
        V = f.ZP.div.withConfig({
          displayName: "UserProfileTemplateStyles__StyledProfileColumn",
          componentId: "sc-a7cxwy-2",
        })(["display:flex;width:100%;"]),
        W = f.ZP.div.withConfig({
          displayName: "UserProfileTemplateStyles__StyledTabbedFirstColumn",
          componentId: "sc-a7cxwy-3",
        })(["width:40%;"]),
        X = f.ZP.div.withConfig({
          displayName: "UserProfileTemplateStyles__StyledTabbedSecondColumn",
          componentId: "sc-a7cxwy-4",
        })(["width:60%;"]),
        J = function (e) {
          var t = e.record,
            n = e.setUserData,
            s = (0, v.z)().addNotification,
            i = (0, d.Z)(),
            l = (0, r.useState)(!1),
            c = l[0],
            h = l[1],
            f = (0, o.useRouter)(),
            p = function (e, t) {
              e && n(e), h(!1), s(t, "success");
            },
            y = function (e) {
              h(!1), s((0, m.Z)(e.message), "error");
            },
            _ = (0, r.useMemo)(
              function () {
                return (
                  (null === i || void 0 === i ? void 0 : i.user) &&
                  (i.permissions.has(u.P.flags.MANAGE_USERS) ||
                    i.permissions.has(u.P.flags.ADMINISTRATOR))
                );
              },
              [i]
            );
          return (0, I.jsx)(F, {
            children: (0, I.jsx)("div", {
              children: (0, I.jsxs)(V, {
                children: [
                  (0, I.jsxs)(W, {
                    children: [
                      (0, I.jsxs)("h1", {
                        children: ["Username:", " ", t.username],
                      }),
                      (0, I.jsx)(G, {
                        children: (0, I.jsxs)("span", {
                          children: [t.first_name, " ", " ", " ", t.last_name],
                        }),
                      }),
                      (0, I.jsx)(G, {
                        children: (0, I.jsx)("span", { children: t.email }),
                      }),
                      (0, I.jsxs)("div", {
                        children: [
                          (null === i || void 0 === i ? void 0 : i.user) &&
                            t &&
                            (i.user.slug === t.slug ||
                              i.permissions.has(u.P.flags.MANAGE_USERS) ||
                              i.permissions.has(u.P.flags.ADMINISTRATOR)) &&
                            (0, I.jsx)(g(), {
                              href: (0, b.as)("user", t.slug),
                              passHref: !0,
                              children: (0, I.jsx)(Q, {
                                href: "replace",
                                className: "is-outlined",
                                children: "Edit Profile",
                              }),
                            }),
                          _ &&
                            null === t.disabled_at &&
                            (0, I.jsx)(Y, {
                              type: "button",
                              className: "is-outlined",
                              disabled: c,
                              onClick: function () {
                                return (
                                  (e = t.slug),
                                  h(!0),
                                  void (0, a.jo)(i.token, e)
                                    .then(function (e) {
                                      return p(e, "Account disabled.");
                                    })
                                    .catch(y)
                                );
                                var e;
                              },
                              children: "Disable Account",
                            }),
                          _ &&
                            null !== t.disabled_at &&
                            (0, I.jsx)(K, {
                              type: "button",
                              className: "is-outlined",
                              disabled: c,
                              onClick: function () {
                                return (
                                  (e = t.slug),
                                  h(!0),
                                  void (0, a.EI)(i.token, e)
                                    .then(function (e) {
                                      return p(e, "Account enabled.");
                                    })
                                    .catch(y)
                                );
                                var e;
                              },
                              children: "Enable Account",
                            }),
                          _ &&
                            null === t.archived_at &&
                            (0, I.jsx)($, {
                              type: "button",
                              className: "is-outlined",
                              disabled: c,
                              onClick: function () {
                                return (
                                  (e = t.slug),
                                  h(!0),
                                  void (0, a.eq)(i.token, e)
                                    .then(function () {
                                      return p(
                                        !1,
                                        "Account archival requested."
                                      );
                                    })
                                    .then(function () {
                                      return f.push("/community");
                                    })
                                    .catch(y)
                                );
                                var e;
                              },
                              children: "Archive Account",
                            }),
                          _ &&
                            (0, I.jsx)(ee, {
                              type: "button",
                              className: "is-outlined",
                              disabled: c,
                              onClick: function () {
                                return (
                                  (e = t.slug),
                                  h(!0),
                                  void (0, a.Wx)(i.token, e)
                                    .then(function () {
                                      return p(
                                        !1,
                                        "Account's items marked as spam."
                                      );
                                    })
                                    .catch(y)
                                );
                                var e;
                              },
                              children: "Spam All",
                            }),
                          _ &&
                            (0, I.jsx)(g(), {
                              href: "https://atlantis.internal.digitalocean.com/people/".concat(
                                t.uuid
                              ),
                              passHref: !0,
                              children: (0, I.jsx)(te, {
                                href: "replace",
                                className: "is-outlined",
                                target: "_blank",
                                children: "Atlantis Profile",
                              }),
                            }),
                        ],
                      }),
                    ],
                  }),
                  (0, I.jsx)(X, {
                    children: (0, I.jsx)(D, { user: t, auth: i }),
                  }),
                ],
              }),
            }),
          });
        },
        Q = (0, f.ZP)("a").withConfig({
          displayName: "UserProfileTemplate___StyledA",
          componentId: "sc-ov7w4j-0",
        })(["", ""], z),
        Y = (0, f.ZP)("button").withConfig({
          displayName: "UserProfileTemplate___StyledButton",
          componentId: "sc-ov7w4j-1",
        })(["", ""], z),
        K = (0, f.ZP)("button").withConfig({
          displayName: "UserProfileTemplate___StyledButton2",
          componentId: "sc-ov7w4j-2",
        })(["", ""], z),
        $ = (0, f.ZP)("button").withConfig({
          displayName: "UserProfileTemplate___StyledButton3",
          componentId: "sc-ov7w4j-3",
        })(["", ""], z),
        ee = (0, f.ZP)("button").withConfig({
          displayName: "UserProfileTemplate___StyledButton4",
          componentId: "sc-ov7w4j-4",
        })(["", ""], z),
        te = (0, f.ZP)("a").withConfig({
          displayName: "UserProfileTemplate___StyledA2",
          componentId: "sc-ov7w4j-5",
        })(["", ""], z),
        ne = n(84089),
        re = function () {
          var e = (0, d.Z)(),
            t = (0, o.useRouter)(),
            n = (0, r.useState)(),
            s = n[0],
            f = n[1],
            p = (0, r.useState)(""),
            g = p[0],
            m = p[1];
          return (
            (0, r.useEffect)(
              function () {
                var n;
                t.isReady &&
                  (e.permissions.has(u.P.flags.ADMINISTRATOR) ||
                  e.permissions.has(u.P.flags.MANAGE_USERS) ||
                  (null === (n = e.user) || void 0 === n ? void 0 : n.slug) ===
                    t.query.slug
                    ? (0, a.VG)(e.token, t.query.slug)
                        .then(function (e) {
                          return f(e);
                        })
                        .catch(function (e) {
                          return m(e);
                        })
                    : (0, l.VG)(t.query.slug)
                        .then(function (e) {
                          return f(e);
                        })
                        .catch(function (e) {
                          return m(e);
                        }));
              },
              [t, e]
            ),
            g
              ? (0, I.jsx)(ne.default, { statusCode: 404 })
              : (0, I.jsxs)(h.Z, {
                  children: [
                    (0, I.jsx)(i(), {
                      children: (0, I.jsx)("title", {
                        children: "".concat(
                          (null === s || void 0 === s ? void 0 : s.username) ||
                            "User",
                          "'s Profile | DigitalOcean"
                        ),
                      }),
                    }),
                    (0, I.jsx)(c.Z, {
                      children: s
                        ? (0, I.jsx)(J, { record: s, setUserData: f })
                        : (0, I.jsx)("div", { children: "Loading\u2026" }),
                    }),
                  ],
                })
          );
        };
    },
    97219: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/community/users/[slug]",
        function () {
          return n(24856);
        },
      ]);
    },
  },
  function (e) {
    e.O(
      0,
      [
        1092, 8616, 5935, 1549, 8249, 8417, 9963, 2460, 3984, 8562, 2088, 9774,
        2888, 179,
      ],
      function () {
        return (t = 97219), e((e.s = t));
        var t;
      }
    );
    var t = e.O();
    _N_E = t;
  },
]);
