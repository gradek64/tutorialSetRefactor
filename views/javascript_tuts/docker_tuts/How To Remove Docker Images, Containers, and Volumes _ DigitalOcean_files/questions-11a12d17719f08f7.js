(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6759],
  {
    13688: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return S;
        },
      });
      var i = t(37797),
        o = t(88723),
        r = t(41664),
        s = t.n(r),
        a = function (e) {
          var n = Math.round((new Date() - new Date(e)) / 864e5),
            t = new Intl.RelativeTimeFormat("en-us", { style: "long" }),
            i = n,
            o = "day";
          switch (!0) {
            case n > 365:
              (i = Math.round(n / 365)), (o = "year");
              break;
            case n > 30 && n < 365:
              (i = Math.round(n / 30)), (o = "month");
          }
          return "".concat(t.format(-i, o));
        },
        l = t(4620),
        c = t(21474),
        u = t(51934),
        d = t(57805),
        p = t(75669),
        m = t(71778),
        x = t(74426),
        g = t(88134),
        y = t(87288),
        f = t(90352),
        h = i.ZP.a.withConfig({
          displayName: "IndexListStyles__StyledIndexListItem",
          componentId: "sc-d8xz3c-0",
        })(
          [
            "background:",
            ";border-radius:",
            ";box-shadow:0 6px 20px -6px ",
            ";box-sizing:border-box;display:block;margin-bottom:16px;padding:24px;position:relative;text-decoration:none;width:100%;&:hover{box-shadow:0 10px 20px -2px ",
            ";cursor:pointer;transform:translatey(-4px);}",
          ],
          g.ZP.white,
          function (e) {
            return e.image ? "0 0 16px 16px" : "16px";
          },
          (0, g.E9)(g.ZP.blueCPUInfo, 0.15),
          (0, g.E9)(g.ZP.blueCPUInfo, 0.15)
        ),
        w = i.ZP.span.withConfig({
          displayName: "IndexListStyles__StyledIndexItemEyeBrow",
          componentId: "sc-d8xz3c-1",
        })(
          [
            "color:",
            ";display:inline-block;font-size:12px;font-weight:500;letter-spacing:1px;margin-bottom:9px;text-transform:uppercase;",
          ],
          g.ZP.blueLight
        ),
        b = (0, i.iv)(
          [
            "color:",
            ";font-family:",
            ";font-size:18px;font-weight:600;line-height:28px;margin:4px 0 0;a{color:",
            ";text-decoration:none;}",
          ],
          g.ZP.gray2,
          (0, y.Z)("primary"),
          g.ZP.blueDark
        ),
        v = i.ZP.div.withConfig({
          displayName: "IndexListStyles__StyledIndexMetaSection",
          componentId: "sc-d8xz3c-2",
        })([
          "color:#333;font-size:13px;font-weight:500;line-height:1.6;margin:14px 0 0;",
        ]),
        Z = i.ZP.span.withConfig({
          displayName: "IndexListStyles__StyledIndexMetaItem",
          componentId: "sc-d8xz3c-3",
        })(["margin-right:0;"]),
        P = i.ZP.div.withConfig({
          displayName: "IndexListStyles__StyledAcceptedAnswer",
          componentId: "sc-d8xz3c-4",
        })(
          [
            "color:",
            ";display:inline-block;font-family:",
            ";font-size:14px;font-style:normal;font-weight:800;letter-spacing:1px;line-height:24px;margin-right:26px;padding:3px 4px 2px;text-transform:uppercase;&::before{content:url(",
            ");margin-right:8px;}",
          ],
          g.ZP.blue2,
          (0, y.Z)("code"),
          "/_next/static/media/blueCheckCirlce.c5b781c0.svg"
        ),
        j = (0, i.ZP)(f.Z).withConfig({
          displayName: "IndexListStyles__StyledEyebrowLink",
          componentId: "sc-d8xz3c-5",
        })(
          [
            "color:",
            ";display:block;text-decoration:none;transition:color 0.2 ease;&:hover{color:",
            ";}",
          ],
          g.ZP.blueLight,
          g.ZP.blue1
        ),
        _ = t(85893),
        k = function (e) {
          var n = e.records,
            t = e.onClickTag,
            i = e.showEyebrow,
            r = e.useSubTypeLink,
            m = function (e) {
              return (
                !(!(0, u.Kn)(e) || !Object.keys(e).length) ||
                !("string" !== typeof e || !e.length)
              );
            };
          return (0, _.jsx)(_.Fragment, {
            children: n.map(function (e) {
              var n, u;
              return (0, _.jsx)(
                s(),
                {
                  href:
                    "comment" === e.type && e.top_level
                      ? (0, o.F7)(e.top_level_type, e.top_level.slug, e.id)
                      : "/community/"
                          .concat(
                            (0, d.Z)(r && e.subType ? e.subType : e.type),
                            "/"
                          )
                          .concat(e.slug),
                  passHref: !0,
                  children: (0, _.jsxs)(h, {
                    children: [
                      i &&
                        (0, _.jsx)(w, {
                          children:
                            (null === e ||
                            void 0 === e ||
                            null === (n = e.series) ||
                            void 0 === n
                              ? void 0
                              : n.length) > 0
                              ? e.series.map(function (e) {
                                  var n, t, i, r, s;
                                  return (0,
                                  _.jsx)(j, { url: (0, o.F7)("tutorial_series", null === (t = e[0]) || void 0 === t || null === (i = t.tutorialSeries) || void 0 === i ? void 0 : i.slug), children: "Series:\n                      ".concat(null === (r = e[0]) || void 0 === r || null === (s = r.tutorialSeries) || void 0 === s ? void 0 : s.title, "\n                      ") }, null === (n = e[0]) || void 0 === n ? void 0 : n.tutorialSeries.id);
                                })
                              : (0, p.Z)(e.relation || e.subType || e.type),
                        }),
                      (0, _.jsx)(C, {
                        renderAs: "h3",
                        small: !0,
                        children:
                          (null === e ||
                          void 0 === e ||
                          null === (u = e.top_level) ||
                          void 0 === u
                            ? void 0
                            : u.title) || e.title,
                      }),
                      (0, _.jsxs)(v, {
                        children: [
                          "question" === e.type && m(e.acceptedAnswer)
                            ? (0, _.jsx)(P, {
                                children: "Accepted Answer Available",
                              })
                            : m(e.pinnedAnswer) &&
                              (0, _.jsx)(P, {
                                children: "Pinned Answer Available",
                              }),
                          "question" === e.type &&
                            (0, _.jsxs)(_.Fragment, {
                              children: [
                                (0, _.jsx)(Z, {
                                  children: e.answers
                                    ? (0, l.M)("answer", e.answers)
                                    : "No answers yet",
                                }),
                                (0, _.jsx)(Z, { children: " \u2022 " }),
                              ],
                            }),
                          (0, _.jsx)(Z, {
                            children: a(1e3 * e.timestamp || e.updated_at),
                          }),
                          (0, _.jsx)(Z, { children: " \u2022 " }),
                          (0, _.jsxs)(Z, {
                            children: [
                              "By",
                              " ",
                              (e.users || e.authors || []).join(", ") ||
                                (e.user && (0, c.Z)(e.user)) ||
                                "Sammy Shark",
                            ],
                          }),
                        ],
                      }),
                      (0, _.jsx)(v, {
                        children: (0, _.jsx)(Z, {
                          children: e.tags.map(function (e) {
                            return (0, _.jsx)(
                              x.Z,
                              {
                                onClick:
                                  t &&
                                  function () {
                                    return t(e);
                                  },
                                tag: e,
                              },
                              e
                            );
                          }),
                        }),
                      }),
                    ],
                  }),
                },
                e.objectID
              );
            }),
          });
        },
        S = k;
      k.defaultProps = {
        onClickTag: null,
        showEyebrow: !1,
        useSubTypeLink: !1,
      };
      var C = (0, i.ZP)(m.Z).withConfig({
        displayName: "IndexList___StyledHeading",
        componentId: "sc-16hmd7e-0",
      })(["", ""], b);
    },
    74426: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var i = t(41664),
        o = t.n(i),
        r = t(88134),
        s = t(37797).ZP.span.withConfig({
          displayName: "TagStyles__StyledTag",
          componentId: "sc-1u5lkpz-0",
        })(
          [
            "background:",
            ";border-radius:8px;color:",
            ";cursor:pointer;display:inline-block;font-size:14px;font-style:normal;font-weight:500;line-height:",
            ";margin:4px 8px 4px 0;padding:0 8px;text-align:center;text-decoration:none;transition:background 0.15s linear,color 0.15s linear;&:hover{background:",
            ";color:",
            ";}",
          ],
          r.ZP.gray9,
          r.ZP.gray4,
          24 / 14,
          r.ZP.blueHover,
          r.ZP.white
        ),
        a = t(85893),
        l = function (e) {
          var n = e.tag,
            t = e.onClick,
            i = e.url;
          return i
            ? (0, a.jsx)(o(), {
                href: i,
                passHref: !0,
                children: (0, a.jsx)(s, {
                  as: "a",
                  title: n.name ? n.name : n,
                  children: n.name ? n.name : n,
                }),
              })
            : (0, a.jsx)(s, {
                onClick:
                  t &&
                  function (e) {
                    e.preventDefault(), t(n);
                  },
                children: n.name ? n.name : n,
              });
        },
        c = l;
      l.defaultProps = { onClick: null, url: "" };
    },
    44154: function (e, n, t) {
      "use strict";
      t.d(n, {
        EP: function () {
          return C;
        },
        IW: function () {
          return m;
        },
        JD: function () {
          return f;
        },
        Kz: function () {
          return b;
        },
        MD: function () {
          return j;
        },
        SD: function () {
          return c;
        },
        U1: function () {
          return u;
        },
        XC: function () {
          return Z;
        },
        Yc: function () {
          return P;
        },
        dV: function () {
          return w;
        },
        eG: function () {
          return k;
        },
        i_: function () {
          return v;
        },
        iz: function () {
          return g;
        },
        j5: function () {
          return x;
        },
        r6: function () {
          return y;
        },
        rK: function () {
          return _;
        },
        sJ: function () {
          return p;
        },
        sr: function () {
          return S;
        },
        ul: function () {
          return I;
        },
        w1: function () {
          return d;
        },
        xr: function () {
          return h;
        },
      });
      var i = t(17534),
        o = t(88134),
        r = t(87288),
        s = t(37797),
        a = t(3218),
        l = t(4486),
        c = s.ZP.div.withConfig({
          displayName: "QuestionIndexTemplateStyles__StyledWrapper",
          componentId: "sc-x018y6-0",
        })(["background-color:", ";"], o.ZP.gray10),
        u = s.ZP.div.withConfig({
          displayName: "QuestionIndexTemplateStyles__IndexContainer",
          componentId: "sc-x018y6-1",
        })(
          [
            "column-gap:32px;display:grid;grid-template-columns:minmax(0,1fr);margin:0 auto;max-width:1440px;width:100%;.number{color:",
            ";}",
            "{grid-template-columns:300px minmax(0,1fr);}",
          ],
          o.ZP.strawberry,
          (0, i.X)(i.A.largeDesktop, "min")
        ),
        d = s.ZP.div.withConfig({
          displayName: "QuestionIndexTemplateStyles__IndexContent",
          componentId: "sc-x018y6-2",
        })(["display:block;"]),
        p = s.ZP.div.withConfig({
          displayName: "QuestionIndexTemplateStyles__StyledHeaders",
          componentId: "sc-x018y6-3",
        })(
          [
            "color:",
            ";display:block;font-family:",
            ";font-size:24px;font-weight:700;letter-spacing:-0.5px;line-height:40px;margin:",
            ";width:100%;",
            "{font-size:32px;}div{float:right;font-size:14px;margin:0;",
            "{font-size:16px;}}",
          ],
          o.ZP.gray2,
          (0, r.Z)("primary"),
          function (e) {
            return e.margin || "0 0 32px 0";
          },
          (0, i.X)(i.A.largeDesktop, "min"),
          (0, i.X)(i.A.largeDesktop, "min")
        ),
        m = s.ZP.div.withConfig({
          displayName: "QuestionIndexTemplateStyles__StyledDivider",
          componentId: "sc-x018y6-4",
        })(
          ["border-top:1px solid ", ";margin:", ";", " width:100%;"],
          o.ZP.gray7,
          function (e) {
            return e.margin || "24px 0px";
          },
          function (e) {
            return e.position || "";
          }
        ),
        x = s.ZP.div.withConfig({
          displayName: "QuestionIndexTemplateStyles__TotalResultsContainer",
          componentId: "sc-x018y6-5",
        })(
          [
            "column-gap:32px;display:grid;grid-template-columns:1fr;margin:0 auto;max-width:1440px;width:100%;",
            "{grid-template-columns:1fr 1fr;}",
          ],
          (0, i.X)(i.A.largeDesktop, "min")
        ),
        g = s.ZP.div.withConfig({
          displayName: "QuestionIndexTemplateStyles__StyledTotalResults",
          componentId: "sc-x018y6-6",
        })(
          [
            "align-self:center;font-size:16px;justify-self:center;margin:16px 0;",
            "{justify-self:end;margin:0;}",
          ],
          (0, i.X)(i.A.largeDesktop, "min")
        ),
        y = s.ZP.div.withConfig({
          displayName: "QuestionIndexTemplateStyles__StyledAskQuestion",
          componentId: "sc-x018y6-7",
        })(
          [
            ".header{color:",
            ";font-size:18px;font-style:normal;font-weight:500;line-height:28px;}p{color:",
            ";display:inline-block;font-size:18px;font-style:normal;font-weight:400;line-height:28px;margin-bottom:30px;margin-left:0;text-align:center;",
            "{margin-left:30px;}}.cloud{background:",
            ";border:1px solid ",
            ";color:",
            ";display:inline-block;margin-bottom:14px;padding:13px 32px;text-align:center;width:100%;",
            "{margin-bottom:0;width:192px;}&:hover{background:",
            ";border:1px solid ",
            ";}}",
          ],
          o.ZP.bluePrismic,
          o.ZP.gray4,
          (0, i.X)(i.A.largeDesktop, "min"),
          o.ZP.blue2,
          o.ZP.blue2,
          o.ZP.white,
          (0, i.X)(i.A.largeDesktop, "min"),
          o.ZP.blueHover,
          o.ZP.blueHover
        ),
        f = s.ZP.div.withConfig({
          displayName: "QuestionIndexTemplateStyles__StyledFilter",
          componentId: "sc-x018y6-8",
        })(
          [
            "background:",
            ";display:none;height:98vh;left:0;margin-bottom:48px;overflow-y:auto;padding:0 24px;position:absolute;top:0;white-space:nowrap;width:100%;z-index:15;",
            "{display:block;height:auto;margin-bottom:40px;overflow-y:visible;padding:0;position:relative;top:0;}",
          ],
          o.ZP.white,
          (0, i.X)(i.A.largeDesktop, "min")
        ),
        h = s.ZP.div.withConfig({
          displayName: "QuestionIndexTemplateStyles__LeftNavigationClose",
          componentId: "sc-x018y6-9",
        })(
          [
            "display:block;position:absolute;right:40px;top:32px;z-index:20;",
            "{display:none;position:relative;top:0;}",
          ],
          (0, i.X)(i.A.largeDesktop, "min")
        ),
        w = (0, s.ZP)(a.Z).withConfig({
          displayName: "QuestionIndexTemplateStyles__StyledIndexHeaderDropdown",
          componentId: "sc-x018y6-10",
        })(
          [
            "margin-bottom:16px;",
            "{display:inline-block;margin:0 6px;width:182px;}",
          ],
          (0, i.X)(i.A.largeDesktop, "min")
        ),
        b = (0, s.iv)(["display:block;margin:72px auto;"]),
        v = s.ZP.div.withConfig({
          displayName: "QuestionIndexTemplateStyles__StyledTopicContainer",
          componentId: "sc-x018y6-11",
        })([
          "column-gap:32px;display:grid;grid-template-columns:1fr;margin:42px 0 0;",
        ]),
        Z = s.ZP.h2.withConfig({
          displayName: "QuestionIndexTemplateStyles__StyledTopicHeader",
          componentId: "sc-x018y6-12",
        })(
          [
            "color:",
            ";font-family:",
            ";font-size:40px;font-style:normal;font-weight:700;letter-spacing:-1px;line-height:48px;margin:16px 0;",
          ],
          o.ZP.gray2,
          (0, r.Z)("primary")
        ),
        P = s.ZP.p.withConfig({
          displayName: "QuestionIndexTemplateStyles__StyledTopicDescription",
          componentId: "sc-x018y6-13",
        })(
          [
            "color:",
            ";font-family:",
            ";font-size:16px;font-style:normal;font-weight:400;line-height:24px;",
          ],
          o.ZP.gray4,
          (0, r.Z)("body")
        ),
        j = s.ZP.p.withConfig({
          displayName: "QuestionIndexTemplateStyles__StyledTopicAction",
          componentId: "sc-x018y6-14",
        })(
          [
            "color:",
            ";font-family:",
            ";font-size:16px;font-style:normal;font-weight:700;line-height:24px;",
          ],
          o.ZP.gray2,
          (0, r.Z)("body")
        ),
        _ = s.ZP.div.withConfig({
          displayName: "QuestionIndexTemplateStyles__StyledResults",
          componentId: "sc-x018y6-15",
        })(["padding:50px 0;text-align:center;"]),
        k = s.ZP.div.withConfig({
          displayName: "QuestionIndexTemplateStyles__StyledViewButton",
          componentId: "sc-x018y6-16",
        })(
          [
            "background:",
            ";border:1px solid ",
            ";border-radius:10px;box-shadow:none;color:",
            ";cursor:pointer;font-family:",
            ";font-size:16px;font-style:normal;font-weight:600;line-height:24px;margin:1rem auto;padding:12px 24px;text-align:center;width:max-content;&:hover{background:",
            ";border:1px solid ",
            ";border-radius:10px;box-shadow:none;color:",
            ";}",
          ],
          o.ZP.white,
          o.ZP.grayBorder,
          o.ZP.gray3,
          (0, r.Z)("body"),
          o.ZP.gray9,
          o.ZP.gray7,
          o.ZP.gray2
        ),
        S = (0, s.iv)(
          [
            "border:1px solid ",
            ";border-radius:8px;color:",
            ";cursor:pointer;display:block;font-family:",
            ";font-size:18px;font-style:normal;font-weight:400;line-height:28px;margin-bottom:72px;padding:6px 20px;width:100%;",
            "{display:none;}&::after{content:'->';font-family:",
            ";font-size:16px;font-style:normal;font-weight:600;line-height:28px;position:absolute;right:16px;}&:hover::after{right:16px;transition:none;}",
          ],
          o.ZP.gray7,
          o.ZP.gray2,
          (0, r.Z)("body"),
          (0, i.X)(i.A.largeDesktop, "min"),
          (0, r.Z)("code")
        ),
        C = s.ZP.div.withConfig({
          displayName: "QuestionIndexTemplateStyles__StyledFilterButton",
          componentId: "sc-x018y6-17",
        })(
          [
            "background:",
            ";border-radius:10px;color:",
            ";height:45px;margin:",
            ";",
            " padding:10px 77px;text-align:center;",
            "{display:none;}",
          ],
          function (e) {
            return e.bg || o.ZP.blueLight;
          },
          function (e) {
            return o.ZP[e.color] || o.ZP.white;
          },
          function (e) {
            return e.margin || "0 0 8px";
          },
          function (e) {
            return e.color && "border: 1px solid ".concat(o.ZP.gray7, ";");
          },
          (0, i.X)(i.A.largeDesktop, "min")
        ),
        I = (0, s.ZP)(l.Z).withConfig({
          displayName: "QuestionIndexTemplateStyles__StyledTextLink",
          componentId: "sc-x018y6-18",
        })(
          [
            "color:",
            ";cursor:pointer;display:block;font-size:16px;left:-10px;padding:8px 10px;position:relative;text-decoration:none;",
          ],
          o.ZP.blue2
        );
    },
    72765: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          __N_SSG: function () {
            return M;
          },
          default: function () {
            return F;
          },
        });
      var i = t(9008),
        o = t.n(i),
        r = t(11163),
        s = t(75933),
        a = t(59499),
        l = t(50029),
        c = t(37797),
        u = t(87794),
        d = t.n(u),
        p = t(67294),
        m = t(78268),
        x = t(17053),
        g = t(75669),
        y = t(88723),
        f = t(57054),
        h = t(54245),
        w = t(34531),
        b = t(58069),
        v = t(45279),
        Z = t(47983),
        P = t(90917),
        j = t(13688),
        _ = t(37364),
        k = t(90352),
        S = t(21346),
        C = t(4486),
        I = t(69582),
        T = "/_next/static/media/greenFishFlora.87500277.svg",
        Q = t(44154),
        q = t(85893);
      function N(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n &&
            (i = i.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, i);
        }
        return t;
      }
      function A(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? N(Object(t), !0).forEach(function (n) {
                (0, a.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : N(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      var D = function (e) {
          var n = e.initialRecords,
            t = e.initialTotal,
            i = e.initialMoreResults,
            o = e.initialUnansweredQuestionsRecords,
            r = e.initialUnansweredQuestionsTotal,
            s = e.initialUnansweredQuestionsMoreResults,
            a = e.tags,
            c = e.popularTopics,
            u = e.featuredQuestion,
            b = (0, p.useState)(!1),
            N = b[0],
            D = b[1],
            L = (0, p.useState)({ slug: "", name: "", state: "" }),
            M = L[0],
            F = L[1],
            E = (0, p.useState)(!1),
            U = E[0],
            X = E[1],
            H = (0, p.useState)(!1),
            B = H[0],
            J = H[1],
            K = (0, f.Z)(),
            V = (0, h.Z)({
              initialType: "question",
              initialRecords: n,
              initialTotal: t,
              initialMoreResults: i,
              initialHitsPerPage: "3",
            }),
            W = (0, h.Z)({
              initialType: "question",
              initialRecords: o,
              initialTotal: r,
              initialMoreResults: s,
              initialHitsPerPage: "3",
              initialFilter: "unanswered",
              initialUseQueryParams: !1,
            }),
            G = (0, p.useMemo)(
              function () {
                return (
                  V.query !== M.state &&
                  V.query.length > 0 &&
                  "" === M.name &&
                  !/^\[.+]$/.test(V.query)
                );
              },
              [V.query, M.name, M.state]
            ),
            $ = (0, p.useMemo)(
              function () {
                return a.map(function (e) {
                  return {
                    value: "".concat(e.name),
                    label: e.name,
                    search: (0, g.Z)(e.name),
                  };
                });
              },
              [a]
            ),
            Y = [
              { value: "", label: "All Questions" },
              { value: "answered", label: "Answered" },
              { value: "unanswered", label: "Unanswered" },
              { value: "noactivity", label: "No activity" },
            ],
            ee = [
              { value: "newest", label: "Most Recent" },
              { value: "popularity", label: "Most Popular" },
            ],
            ne = [
              { value: "all", label: "All time" },
              { value: "day", label: "Last day" },
              { value: "week", label: "Last week" },
              { value: "month", label: "Last month" },
              { value: "year", label: "Last year" },
            ],
            te = (function () {
              var e = (0, l.Z)(
                d().mark(function e(n) {
                  return d().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          n.name !== M.name &&
                            (V.setQuery(n.state), V.setTimeRange("all"));
                        case 1:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (n) {
                return e.apply(this, arguments);
              };
            })(),
            ie = function (e) {
              D(!0),
                V.setQuery(M.state),
                "newest" === e ? V.setSortBy(e) : V.setFilter(e),
                V.setHitsPerPage(12),
                window.scrollTo(0, 0);
            },
            oe = (0, p.useMemo)(
              function () {
                return (
                  (V.query !== M.state &&
                    V.query.length > 0 &&
                    "" === M.name) ||
                  N
                );
              },
              [N, V.query, M.name, M.state]
            ),
            re = (0, p.useMemo)(
              function () {
                return V.query === "[".concat(M.name, "]") && !1 === N;
              },
              [V.query, M.name, N]
            ),
            se = (0, p.useMemo)(
              function () {
                return (
                  ((0 === V.query.length && !1 === oe) ||
                    V.query === M.state) &&
                  !1 === N
                );
              },
              [oe, V.query, M.state, N]
            );
          return (
            (0, p.useEffect)(
              function () {
                V.setHitsPerPage(G || N ? "5" : "3");
              },
              [V, G, N]
            ),
            (0, p.useEffect)(
              function () {
                D(function (e) {
                  return e || G;
                });
              },
              [G]
            ),
            (0, p.useEffect)(
              function () {
                W.setQuery(V.query);
              },
              [W, V.query]
            ),
            (0, p.useEffect)(
              function () {
                if (V.query.length > 0 && /^\[.+]$/.test(V.query) && !1 === G) {
                  var e = c.find(function (e) {
                    return e.state === V.query;
                  });
                  null !== e &&
                    void 0 !== e &&
                    e.slug &&
                    (0, x.iP)(e.slug)
                      .then(function (n) {
                        F(
                          A(
                            A({}, n),
                            {},
                            {
                              featureQuestions: n.featureQuestions.map(
                                function (e) {
                                  return A(A({}, e), {}, { type: "question" });
                                }
                              ),
                              related: e.related,
                              state: "[".concat(n.name, "]"),
                              type: "question",
                            }
                          )
                        );
                      })
                      .catch(function (e) {
                        console.log(e);
                      });
                }
              },
              [c, V.query, G]
            ),
            (0, q.jsx)(Q.SD, {
              children: (0, q.jsx)(z, {
                children: (0, q.jsxs)(Q.U1, {
                  children: [
                    (0, q.jsx)(P.Z, {
                      type: "questions",
                      popularTopics: c,
                      currentTopic: M,
                      searching: G,
                      leftNavigation: B,
                      toggleLeftNavigation: function () {
                        return J(!B);
                      },
                      links: (0, q.jsx)(Q.ul, {
                        target: "_blank",
                        dashArrow: !0,
                        url: "https://docs.digitalocean.com/support/",
                        children: "DigitalOcean Support",
                      }),
                      onClick: function () {
                        V.setQuery(""),
                          V.setFilter(""),
                          F({ slug: "", name: "", state: "" }),
                          D(!1);
                      },
                      handleSetTopic: function (e) {
                        te(e), D(!1);
                      },
                    }),
                    (0, q.jsxs)(Q.w1, {
                      children: [
                        (0, q.jsx)(_.Z, {
                          query: V.query,
                          title: "Questions & Answers",
                          subText:
                            "Ask a development question or answer others\u2019 in our diverse Q&A section. For information about the DigitalOcean product, check out our Product Docs.",
                          placeholder: "Search Questions",
                          bgImage: T,
                          bgColor: "green2",
                          onChange: function (e) {
                            V.setQuery(e.target.value),
                              F({ slug: "", name: "", state: "" });
                          },
                        }),
                        (0, q.jsxs)(Q.j5, {
                          children: [
                            (0, q.jsx)(Q.r6, {
                              children: (0, q.jsx)(w.Z, {
                                className: " is-rounded cloud",
                                url: (0, y.F7)("question", "new"),
                                children: "Ask a Question",
                              }),
                            }),
                            (0, q.jsx)(Q.iz, {
                              children: "".concat(
                                V.total.toLocaleString(),
                                G || re
                                  ? " matching questions"
                                  : " questions asked"
                              ),
                            }),
                          ],
                        }),
                        (0, q.jsx)(R, {
                          url: "",
                          dashArrow: !0,
                          onClick: function () {
                            J(!B), window.scrollTo(0, 0);
                          },
                          children: "Popular Topics",
                        }),
                        oe &&
                          (0, q.jsxs)(q.Fragment, {
                            children: [
                              (0, q.jsx)(O, {
                                url: "",
                                dashArrow: !0,
                                onClick: function () {
                                  X(!U), window.scrollTo(0, 0);
                                },
                                children: "Filters",
                              }),
                              (0, q.jsx)(Q.sJ, {
                                margin: "72px 0px 24px 0px",
                                children: "Results",
                              }),
                              (0, q.jsxs)(Q.JD, {
                                style: U ? { display: "block" } : {},
                                children: [
                                  (0, q.jsx)(Z.Z, {}),
                                  (0, q.jsx)(Q.xr, {
                                    children: (0, q.jsx)(m.Z, {
                                      onClick: function () {
                                        return X(!U);
                                      },
                                    }),
                                  }),
                                  (0, q.jsx)(Q.dV, {
                                    id: "topic-tags",
                                    options: $,
                                    value: {
                                      value: "newest",
                                      label: "Topic Tags",
                                    },
                                    onChange: function (e) {
                                      V.setQuery(
                                        V.query
                                          .replace(
                                            /( ?\[[^\]]+] ?|$)/,
                                            " [".concat(e.value, "] ")
                                          )
                                          .trim()
                                      );
                                    },
                                    style: { padding: 0 },
                                  }),
                                  (0, q.jsx)(Q.dV, {
                                    id: "filter",
                                    options: Y,
                                    value: Y.find(function (e) {
                                      return e.value === V.filter;
                                    }),
                                    onChange: function (e) {
                                      return V.setFilter(e.value);
                                    },
                                    style: { padding: 0 },
                                  }),
                                  (0, q.jsx)(Q.dV, {
                                    id: "sortby",
                                    options: ee,
                                    value: ee.find(function (e) {
                                      return e.value === V.sortBy;
                                    }),
                                    onChange: function (e) {
                                      return V.setSortBy(e.value);
                                    },
                                    style: { padding: 0 },
                                  }),
                                  (0, q.jsx)(Q.dV, {
                                    id: "time-range",
                                    options: ne,
                                    value: ne.find(function (e) {
                                      return e.value === V.timeRange;
                                    }),
                                    onChange: function (e) {
                                      return V.setTimeRange(e.value);
                                    },
                                    style: { padding: 0 },
                                  }),
                                  (0, q.jsx)(Q.EP, {
                                    margin: "50px 0 8px",
                                    onClick: function () {
                                      return X(!U);
                                    },
                                    children: "Apply Filters",
                                  }),
                                  (0, q.jsx)(Q.EP, {
                                    bg: "white",
                                    color: "gray2",
                                    onClick: function () {
                                      X(!U),
                                        V.setSortBy("newest"),
                                        V.setTimeRange("all");
                                    },
                                    children: "Clear Filters",
                                  }),
                                ],
                              }),
                              0 === V.records.length
                                ? (0, q.jsx)(Q.rK, { children: "No results" })
                                : (0, q.jsxs)(q.Fragment, {
                                    children: [
                                      (0, q.jsx)(j.Z, {
                                        records: V.records,
                                        onClickTag: function (e) {
                                          return V.setQuery(
                                            ""
                                              .concat(V.query, " [")
                                              .concat(e, "]")
                                          );
                                        },
                                      }),
                                      (0, q.jsx)(S.Z, {
                                        onClick: function () {
                                          return V.setPage(V.page + 1);
                                        },
                                        visible: V.moreResults,
                                        message: "See more",
                                        styles: Q.Kz,
                                      }),
                                    ],
                                  }),
                            ],
                          }),
                        re &&
                          (0, q.jsxs)(Q.i_, {
                            children: [
                              (0, q.jsx)(Q.XC, { children: M.name }),
                              (0, q.jsx)(Q.Yc, { children: M.description }),
                              "DigitalOcean" === M.name
                                ? (0, q.jsxs)(Q.MD, {
                                    children: [
                                      "Want to learn more about DigitalOcean?",
                                      " ",
                                      (0, q.jsx)(C.Z, {
                                        dashArrow: !0,
                                        url: "/",
                                        children:
                                          "Check out our products and services",
                                      }),
                                    ],
                                  })
                                : (0, q.jsxs)(Q.MD, {
                                    children: [
                                      "Want to learn more about",
                                      " ",
                                      M.name,
                                      "?",
                                      " ",
                                      (0, q.jsx)(C.Z, {
                                        dashArrow: !0,
                                        url: "/community/tutorials?q=".concat(
                                          encodeURIComponent(M.state)
                                        ),
                                        children:
                                          "Check out our free tutorials",
                                      }),
                                    ],
                                  }),
                            ],
                          }),
                        se &&
                          (0, q.jsxs)(q.Fragment, {
                            children: [
                              (0, q.jsx)(Q.sJ, {
                                margin: "72px 0px 32px 0px",
                                children: "Featured Questions",
                              }),
                              (0, q.jsx)(j.Z, {
                                records: M.featureQuestions || u,
                                onClickTag: function (e) {
                                  return V.setQuery(
                                    "".concat(V.query, " [").concat(e.name, "]")
                                  );
                                },
                              }),
                              (0, q.jsx)(Q.IW, { margin: "72px 0px" }),
                              (0, q.jsxs)(Q.sJ, {
                                margin: "72px 0px 32px 0px",
                                children: [
                                  "Most Recent Questions",
                                  (0, q.jsx)(k.Z, {
                                    url: "/community/questions?sort_by=newest&q=".concat(
                                      encodeURIComponent(V.query),
                                      "+&hits_per_page=5"
                                    ),
                                    children: (0, q.jsx)(Q.eG, {
                                      onClick: function () {
                                        ie("newest");
                                      },
                                      children: "View all",
                                    }),
                                  }),
                                ],
                              }),
                              (0, q.jsx)(j.Z, {
                                records: V.records,
                                onClickTag: function (e) {
                                  return V.setQuery(
                                    "".concat(V.query, " [").concat(e, "]")
                                  );
                                },
                              }),
                              (0, q.jsx)(S.Z, {
                                onClick: function () {
                                  return V.setPage(V.page + 1);
                                },
                                visible: V.moreResults && "" !== M.name,
                                message: "See more",
                                styles: Q.Kz,
                              }),
                              (0, q.jsx)(Q.IW, { margin: "72px 0px" }),
                              (0, q.jsxs)(Q.sJ, {
                                margin: "72px 0px 32px 0px",
                                children: [
                                  "Unanswered Questions",
                                  (0, q.jsx)(k.Z, {
                                    url: "/community/questions?filter=unanswered&q=".concat(
                                      encodeURIComponent(V.query),
                                      "+&hits_per_page=5"
                                    ),
                                    children: (0, q.jsx)(Q.eG, {
                                      onClick: function () {
                                        ie("unanswered");
                                      },
                                      children: "View all",
                                    }),
                                  }),
                                ],
                              }),
                              (0, q.jsx)(j.Z, {
                                records: W.records,
                                onClickTag: function (e) {
                                  return V.setQuery(
                                    "".concat(V.query, " [").concat(e, "]")
                                  );
                                },
                              }),
                              (0, q.jsx)(S.Z, {
                                onClick: function () {
                                  return W.setPage(W.page + 1);
                                },
                                visible: W.moreResults && "" !== M.name,
                                message: "See more",
                                styles: Q.Kz,
                              }),
                              (0, q.jsx)(k.Z, {
                                url: "/community/questions?filter=unanswered&q=",
                                children: (0, q.jsx)(S.Z, {
                                  onClick: function () {
                                    D(!0), window.scrollTo(0, 0);
                                  },
                                  visible: !G && "" === M.name,
                                  message: "See all questions",
                                  styles: Q.Kz,
                                }),
                              }),
                            ],
                          }),
                        null === K.token
                          ? (0, q.jsx)(v.Z, {
                              title:
                                "Want to learn more? Join the DigitalOcean Community!",
                              content:
                                "Join our DigitalOcean community of over a million developers for free! Get help and share knowledge in Q&A, subscribe to topics of interest, and get courses and tools that will help you grow as a developer and scale your project or business. ",
                              linkText: "Sign up now",
                              link: K.signIn,
                              image: I.Z.src,
                              bgColor: "blue1",
                            })
                          : null,
                      ],
                    }),
                  ],
                }),
              }),
            })
          );
        },
        z = (0, c.ZP)(b.Z).withConfig({
          displayName: "QuestionIndexTemplate___StyledContainer",
          componentId: "sc-7u7awp-0",
        })(["margin:auto;padding-top:72px;"]),
        R = (0, c.ZP)(C.Z).withConfig({
          displayName: "QuestionIndexTemplate___StyledTextLink",
          componentId: "sc-7u7awp-1",
        })(["", ""], Q.sr),
        O = (0, c.ZP)(C.Z).withConfig({
          displayName: "QuestionIndexTemplate___StyledTextLink2",
          componentId: "sc-7u7awp-2",
        })(["", ""], Q.sr),
        L = t(84089),
        M = !0,
        F = function (e) {
          var n = e.initialRecords,
            t = e.initialTotal,
            i = e.initialMoreResults,
            a = e.initialUnansweredQuestionsRecords,
            l = e.initialUnansweredQuestionsTotal,
            c = e.initialUnansweredQuestionsMoreResults,
            u = e.tags,
            d = e.popularTopics,
            p = e.featuredQuestion,
            m = (0, r.useRouter)();
          return m.isFallback || n
            ? (0, q.jsxs)(s.Z, {
                children: [
                  (0, q.jsxs)(o(), {
                    children: [
                      (0, q.jsx)("title", {
                        children: "Questions & Answers | DigitalOcean",
                      }),
                      (0, q.jsx)(
                        "meta",
                        {
                          name: "twitter:title",
                          content: "Questions & Answers | DigitalOcean",
                        },
                        "twitterTitle"
                      ),
                      (0, q.jsx)(
                        "meta",
                        {
                          name: "og:title",
                          content: "Questions & Answers | DigitalOcean",
                        },
                        "ogTitle"
                      ),
                    ],
                  }),
                  m.isFallback
                    ? (0, q.jsx)("div", { children: "Loading\u2026" })
                    : (0, q.jsx)(D, {
                        initialRecords: n,
                        initialTotal: t,
                        initialMoreResults: i,
                        initialUnansweredQuestionsRecords: a,
                        initialUnansweredQuestionsTotal: l,
                        initialUnansweredQuestionsMoreResults: c,
                        tags: u,
                        popularTopics: d,
                        featuredQuestion: p,
                      }),
                ],
              })
            : (0, q.jsx)(L.default, { statusCode: 404 });
        };
    },
    21474: function (e, n) {
      "use strict";
      n.Z = function (e) {
        return e.id
          ? e.first_name && e.last_name
            ? "".concat(e.first_name, " ").concat(e.last_name)
            : e.first_name || e.last_name || e.username
          : "";
      };
    },
    23127: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/community/questions",
        function () {
          return t(72765);
        },
      ]);
    },
  },
  function (e) {
    e.O(
      0,
      [
        1092, 8616, 5935, 1549, 8249, 8417, 9963, 2460, 3984, 8562, 2419, 4834,
        9774, 2888, 179,
      ],
      function () {
        return (n = 23127), e((e.s = n));
        var n;
      }
    );
    var n = e.O();
    _N_E = n;
  },
]);
