"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [298],
  {
    17801: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return k;
        },
      });
      var o = e(67294),
        i = e(84270),
        r = e(75669),
        l = e(88723),
        a = e(52507),
        s = e(88134),
        c = e(37797),
        d = e(62080),
        u = e(90352),
        p = (0, c.iv)(["bottom:40px;position:fixed;right:16px;z-index:10;"]),
        m = (0, c.ZP)(d.Z)
          .attrs({ className: "is-small" })
          .withConfig({
            displayName: "ModActionStyles__StyledModActionsButton",
            componentId: "sc-19u4jin-0",
          })(
          [
            "background-color:",
            ";border-color:",
            ";box-shadow:0 4px 12px -4px ",
            ";color:",
            ";",
            " &:not(:disabled):hover{background-color:",
            ";border-color:",
            ";}",
          ],
          s.ZP.gray2,
          s.ZP.gray2,
          (0, s.E9)(s.ZP.blue1, 0.1),
          s.ZP.white,
          p,
          s.ZP.blue2,
          s.ZP.blue2
        ),
        h = c.ZP.div.withConfig({
          displayName: "ModActionStyles__StyledModActions",
          componentId: "sc-19u4jin-1",
        })(
          [
            "background:",
            ";border-radius:8px;box-shadow:0 4px 24px -4px ",
            ";display:flex;flex-direction:column;",
            " padding:16px;",
          ],
          s.ZP.gray2,
          (0, s.E9)(s.ZP.blue1, 0.1),
          p
        ),
        g = c.ZP.p.withConfig({
          displayName: "ModActionStyles__StyledModActionsHeading",
          componentId: "sc-19u4jin-2",
        })(
          ["color:", ";font-size:15px;font-weight:600;margin:0 0 8px;"],
          s.ZP.white
        ),
        x = (0, c.iv)(
          [
            "color:",
            ";display:block;font-size:13px;font-weight:500;margin:0 -16px;padding:4px 16px;text-decoration:none;transition:background-color 0.2s ease-in-out,color 0.2s ease-in-out;&:not(:disabled):hover,&:not(:disabled):focus{background:",
            ";color:",
            ";}&:disabled{color:",
            ";cursor:not-allowed;font-style:italic;}",
          ],
          s.ZP.white,
          s.ZP.gray1,
          s.ZP.blue4,
          s.ZP.gray6
        ),
        f = c.ZP.button.withConfig({
          displayName: "ModActionStyles__StyledModActionsAction",
          componentId: "sc-19u4jin-3",
        })(
          ["background:none;border:0;cursor:pointer;", " text-align:left;"],
          x
        ),
        y = (0, c.ZP)(u.Z).withConfig({
          displayName: "ModActionStyles__StyledModActionsLink",
          componentId: "sc-19u4jin-4",
        })(["", ""], x),
        w = e(85893),
        b = function (t) {
          var n = t.record,
            e = t.update,
            s = t.type,
            c = t.subType,
            d = (0, a.z)().addNotification,
            u = (0, o.useState)(!0),
            p = u[0],
            x = u[1],
            b = (0, o.useState)(!1),
            k = b[0],
            _ = b[1],
            C = (0, o.useCallback)(
              function (t, n) {
                k ||
                  (_(!0),
                  Promise.resolve(e(t))
                    .then(function () {
                      d("".concat((0, r.Z)(c || s), " ").concat(n), "success");
                    })
                    .catch(function (t) {
                      console.error(t), d((0, i.Z)(t.message), "error");
                    })
                    .finally(function () {
                      _(!1);
                    }));
              },
              [k, e, d, s, c]
            );
          return p
            ? (0, w.jsx)(m, {
                onClick: function () {
                  return x(!1);
                },
                children: "Mod Actions",
              })
            : (0, w.jsxs)(h, {
                children: [
                  "tag" !== s
                    ? (0, w.jsxs)(g, {
                        children: ["Current State:", " ", n.state],
                      })
                    : null,
                  "tutorial" === s || "tool" === s || "tutorial_series" === s
                    ? "published" !== n.state
                      ? (0, w.jsx)(f, {
                          onClick: function () {
                            return C({ state: "published" }, "published");
                          },
                          disabled: k,
                          children: "Publish",
                        })
                      : (0, w.jsx)(f, {
                          onClick: function () {
                            return C({ state: "draft" }, "unpublished");
                          },
                          disabled: k,
                          children: "Unpublish",
                        })
                    : null,
                  "question" === s
                    ? (0, w.jsxs)(w.Fragment, {
                        children: [
                          "published" !== n.state
                            ? (0, w.jsx)(f, {
                                onClick: function () {
                                  return C({ state: "published" }, "published");
                                },
                                disabled: k,
                                children: "Publish",
                              })
                            : (0, w.jsx)(f, {
                                onClick: function () {
                                  return C({ state: "unlisted" }, "unlisted");
                                },
                                disabled: k,
                                children: "Unlist",
                              }),
                          (0, w.jsx)(f, {
                            onClick: function () {
                              return C({ state: "spam" }, "marked as spam");
                            },
                            disabled: k,
                            children: "Spam",
                          }),
                        ],
                      })
                    : null,
                  "tutorial" === s
                    ? (0, w.jsx)(f, {
                        onClick: function () {
                          return C({ state: "deprecated" }, "deprecated");
                        },
                        disabled: k,
                        children: "Deprecate",
                      })
                    : null,
                  "tutorial" === s || "tool" === s || "question" === s
                    ? (0, w.jsxs)(w.Fragment, {
                        children: [
                          (0, w.jsx)(f, {
                            onClick: function () {
                              return C({ state: "trashed" }, "trashed");
                            },
                            disabled: k,
                            children: "Trash",
                          }),
                          null === n.comments_locked_at
                            ? (0, w.jsx)(f, {
                                onClick: function () {
                                  return C(
                                    { comments_locked_at: new Date() },
                                    "comments locked"
                                  );
                                },
                                disabled: k,
                                children: "Lock ALL Comments",
                              })
                            : (0, w.jsx)(f, {
                                onClick: function () {
                                  return C(
                                    { comments_locked_at: null },
                                    "comments unlocked"
                                  );
                                },
                                disabled: k,
                                children: "Unlock All Comments",
                              }),
                        ],
                      })
                    : null,
                  "tutorial_series" === s
                    ? (0, w.jsx)(f, {
                        onClick: function () {
                          return C({ state: "trashed" }, "trashed");
                        },
                        disabled: k,
                        children: "Trash",
                      })
                    : null,
                  "question" === s
                    ? (0, w.jsxs)(w.Fragment, {
                        children: [
                          null === n.answers_locked_at
                            ? (0, w.jsx)(f, {
                                onClick: function () {
                                  return C(
                                    { answers_locked_at: new Date() },
                                    "answers locked"
                                  );
                                },
                                disabled: k,
                                children: "Lock ALL Answers",
                              })
                            : (0, w.jsx)(f, {
                                onClick: function () {
                                  return C(
                                    { answers_locked_at: null },
                                    "answers unlocked"
                                  );
                                },
                                disabled: k,
                                children: "Unlock All Answers",
                              }),
                          null === n.new_answers_locked_at
                            ? (0, w.jsx)(f, {
                                onClick: function () {
                                  return C(
                                    { new_answers_locked_at: new Date() },
                                    "answer submissions locked"
                                  );
                                },
                                disabled: k,
                                children: "Lock ALL New Answers",
                              })
                            : (0, w.jsx)(f, {
                                onClick: function () {
                                  return C(
                                    { new_answers_locked_at: null },
                                    "answer submissions unlocked"
                                  );
                                },
                                disabled: k,
                                children: "Unlock All New Answers",
                              }),
                        ],
                      })
                    : null,
                  "tag" === s
                    ? (0, w.jsxs)(w.Fragment, {
                        children: [
                          null === n.admin_view_only_at
                            ? (0, w.jsx)(f, {
                                onClick: function () {
                                  return C(
                                    { admin_view_only_at: new Date() },
                                    "hidden for regular users"
                                  );
                                },
                                disabled: k,
                                children: "Show to admins only",
                              })
                            : (0, w.jsx)(f, {
                                onClick: function () {
                                  return C(
                                    { admin_view_only_at: null },
                                    "shown to all users"
                                  );
                                },
                                disabled: k,
                                children: "Show to all users",
                              }),
                          null === n.admin_use_only_at
                            ? (0, w.jsx)(f, {
                                onClick: function () {
                                  return C(
                                    { admin_use_only_at: new Date() },
                                    "restricted to admin use only"
                                  );
                                },
                                disabled: k,
                                children: "Restrict to admin use only",
                              })
                            : (0, w.jsx)(f, {
                                onClick: function () {
                                  return C(
                                    { admin_use_only_at: null },
                                    "unrestricted for use by all users"
                                  );
                                },
                                disabled: k,
                                children: "Allow use by all users",
                              }),
                        ],
                      })
                    : null,
                  (0, w.jsx)(y, {
                    url: (0, l.as)(c || s, n.slug),
                    children: "Edit",
                  }),
                  (0, w.jsx)(f, {
                    onClick: function () {
                      return x(!0);
                    },
                    children: "Close",
                  }),
                ],
              });
        },
        k = b;
      b.defaultProps = { subType: null };
    },
    45313: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return c;
        },
      });
      var o = e(17534),
        i = e(37797),
        r = i.ZP.div.withConfig({
          displayName:
            "QuestionAndTutorialLeftContainerStyles__StyledColumnContainer",
          componentId: "sc-54mito-0",
        })(["padding-top:40px;", "{display:none;}"], (0, o.X)(o.A.desktop)),
        l = i.ZP.div.withConfig({
          displayName:
            "QuestionAndTutorialLeftContainerStyles__StyledStickyContainer",
          componentId: "sc-54mito-1",
        })(["position:sticky;top:230px;"]),
        a = e(85893),
        s = function (t) {
          var n = t.children;
          return (0, a.jsx)(r, { children: (0, a.jsx)(l, { children: n }) });
        },
        c = s;
      s.defaultProps = { children: [] };
    },
    78222: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return s;
        },
      });
      var o = e(17534),
        i = e(69961),
        r = e(37797).ZP.div.withConfig({
          displayName:
            "QuestionAndTutorialOuterContainerStyles__StyledOuterContainer",
          componentId: "sc-l9p98c-0",
        })(
          [
            "padding:0 24px;",
            "{padding:0 40px;}",
            "{display:grid;gap:",
            ";grid-template-columns:192px minmax(0,1fr) 192px;margin:0 auto;max-width:1360px;padding:0 24px;}",
          ],
          (0, o.X)(o.A.tablet, "min"),
          (0, o.X)(o.A.desktop + 1, "min"),
          (0, i.Z)(1024, 1440, 16, 88)
        ),
        l = e(85893),
        a = function (t) {
          var n = t.children,
            e = t.slim;
          return (0, l.jsx)(r, { slim: e, children: n });
        },
        s = a;
      a.defaultProps = { slim: !1 };
    },
    64758: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return s;
        },
      });
      var o = e(17534),
        i = e(37797),
        r = i.ZP.div.withConfig({
          displayName:
            "QuestionAndTutorialRightContainerStyles__StyledContainer",
          componentId: "sc-1ej6td1-0",
        })(
          ["padding-bottom:16px;padding-top:40px;", "{display:none;}"],
          (0, o.X)(o.A.desktop)
        ),
        l = i.ZP.div.withConfig({
          displayName:
            "QuestionAndTutorialRightContainerStyles__StyledStickyContainer",
          componentId: "sc-1ej6td1-1",
        })(["position:sticky;top:230px;"]),
        a = e(85893),
        s = function (t) {
          var n = t.children;
          return (0, a.jsx)(r, { children: (0, a.jsx)(l, { children: n }) });
        };
    },
    20058: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return g;
        },
      });
      var o = e(37797),
        i = e(67294),
        r = e(90352),
        l = e(88134),
        a = o.ZP.div.withConfig({
          displayName:
            "QuestionAndTutorialSideNavigationStyles__StyledSideNavigationGroup",
          componentId: "sc-f0b11o-0",
        })(["margin-bottom:32px;&:last-child{margin-bottom:0;}"]),
        s = o.ZP.h3.withConfig({
          displayName: "QuestionAndTutorialSideNavigationStyles__StyledHeading",
          componentId: "sc-f0b11o-1",
        })(
          [
            "color:",
            ";font-size:16px;font-weight:500;line-height:1.5;margin:0 0 16px;",
          ],
          l.ZP.gray1
        ),
        c = o.ZP.li.withConfig({
          displayName:
            "QuestionAndTutorialSideNavigationStyles__StyledListItem",
          componentId: "sc-f0b11o-2",
        })([
          "font-size:16px;font-weight:500;line-height:1.5;margin:0 0 8px;&:last-child{margin-bottom:0;}",
        ]),
        d = (0, o.ZP)(c).withConfig({
          displayName:
            "QuestionAndTutorialSideNavigationStyles__StyledListItemEmphasized",
          componentId: "sc-f0b11o-3",
        })(
          ["margin-top:32px;a{color:", ";&::after{font-size:1em;}}"],
          l.ZP.blue2
        ),
        u = (0, o.iv)(
          ["color:", ";transition:color 0.2s ease;&:hover{color:", ";}"],
          l.ZP.gray4,
          l.ZP.grayDarkest
        ),
        p = e(4486),
        m = e(85893),
        h = [
          {
            heading: "Popular Topics",
            links: [
              {
                emphasized: !1,
                text: "Ubuntu",
                type: "",
                url: "https://www.digitalocean.com/community/tags/ubuntu",
              },
              {
                emphasized: !1,
                text: "Linux Basics",
                type: "",
                url: "https://www.digitalocean.com/community/tags/linux-basics",
              },
              {
                emphasized: !1,
                text: "JavaScript",
                type: "",
                url: "https://www.digitalocean.com/community/tags/javascript",
              },
              {
                emphasized: !1,
                text: "React",
                type: "",
                url: "https://www.digitalocean.com/community/tags/react",
              },
              {
                emphasized: !1,
                text: "Python",
                type: "",
                url: "https://www.digitalocean.com/community/tags/python",
              },
              {
                emphasized: !1,
                text: "Security",
                type: "",
                url: "https://www.digitalocean.com/community/tags/security",
              },
              {
                emphasized: !1,
                text: "MySQL",
                type: "",
                url: "https://www.digitalocean.com/community/tags/mysql",
              },
              {
                emphasized: !1,
                text: "Docker",
                type: "",
                url: "https://www.digitalocean.com/community/tags/docker",
              },
              {
                emphasized: !1,
                text: "Kubernetes",
                type: "",
                url: "https://www.digitalocean.com/community/tags/kubernetes",
              },
              {
                emphasized: !1,
                text: "Browse all topic tags",
                type: "",
                url: "https://www.digitalocean.com/community/tags",
              },
              {
                emphasized: !0,
                text: "All tutorials",
                type: "",
                url: "https://www.digitalocean.com/community/tutorials",
              },
            ],
          },
          {
            heading: "Questions",
            links: [
              {
                emphasized: !1,
                text: "Q&A Forum",
                type: "",
                url: "https://www.digitalocean.com/community/questions",
              },
              {
                emphasized: !1,
                text: "Ask a question",
                type: "",
                url: "https://www.digitalocean.com/community/questions/new",
              },
              {
                emphasized: !1,
                text: "DigitalOcean Support",
                type: "",
                url: "https://docs.digitalocean.com/support/",
              },
            ],
          },
        ],
        g = function (t) {
          var n = t.auth,
            e = (0, i.useState)(null),
            o = e[0],
            r = e[1];
          return (
            (0, i.useEffect)(
              function () {
                r(n.user);
              },
              [n]
            ),
            (0, m.jsx)("div", {
              children: h.map(function (t) {
                return (0, m.jsxs)(
                  a,
                  {
                    children: [
                      (0, m.jsx)(s, { children: t.heading }),
                      (0, m.jsx)("ul", {
                        children: t.links.map(function (t) {
                          return t.emphasized
                            ? (0, m.jsx)(
                                d,
                                {
                                  children: (0, m.jsx)(p.Z, {
                                    dashArrow: !0,
                                    url:
                                      "signin" !== t.type || o
                                        ? t.url
                                        : n.signIn,
                                    children: t.text,
                                  }),
                                },
                                t.text
                              )
                            : (0, m.jsx)(
                                c,
                                {
                                  children: (0, m.jsx)(x, {
                                    url: t.url,
                                    children: t.text,
                                  }),
                                },
                                t.text
                              );
                        }),
                      }),
                    ],
                  },
                  t.heading
                );
              }),
            })
          );
        },
        x = (0, o.ZP)(r.Z).withConfig({
          displayName: "QuestionAndTutorialSideNavigation___StyledLazyLink",
          componentId: "sc-szp02x-0",
        })(["", ""], u);
    },
    48588: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return u;
        },
      });
      var o = e(37797),
        i = e(88134),
        r = e(6944),
        l = e(4486),
        a = o.ZP.div.withConfig({
          displayName: "CommunityCTAStyles",
          componentId: "sc-dyi7ix-0",
        })(
          [
            "background:",
            ";background-color:",
            ";border-radius:24px;color:",
            ";max-width:",
            ";padding:24px;position:relative;&::before,&::after{background-repeat:no-repeat;background-size:100%;content:'';position:absolute;}&::before{background-color:",
            ";height:64px;left:-15px;mask-image:url('",
            "');top:-13px;width:43px;}&::after{background-color:",
            ";bottom:-19px;height:64px;mask-image:url('",
            "');right:-19px;width:64px;}h3{font-size:16px;line-height:",
            ";margin:0 0 16px;}p{font-size:14px;line-height:",
            ";margin:0 0 16px;&:last-child{margin:0;}}",
          ],
          function (t) {
            return t.background || "none";
          },
          function (t) {
            return t.backgroundColor;
          },
          function (t) {
            return t.color || i.ZP.gray8;
          },
          function (t) {
            return t.maxWidth;
          },
          function (t) {
            return t.coralTopColor || i.ZP.fuchsia3;
          },
          "/_next/static/media/coral-cta-top.89e13f0f.svg",
          function (t) {
            return t.coralBottomColor || i.ZP.orange3;
          },
          "/_next/static/media/coral-cta-bottom.b2063e35.svg",
          1.625,
          20 / 14
        ),
        s = (0, o.iv)(
          [
            "color:",
            ";font-size:14px;line-height:",
            ";&::after{font-size:1em;}",
          ],
          i.ZP.gray8,
          24 / 14
        ),
        c = e(85893),
        d = function (t) {
          var n = t.maxWidth,
            e = t.backgroundColor,
            o = t.background,
            i = t.color,
            r = t.coralTopColor,
            l = t.coralBottomColor,
            s = t.title,
            d = t.body,
            u = t.link,
            m = t.onButtonClick;
          return (0, c.jsxs)(a, {
            maxWidth: n,
            backgroundColor: e,
            background: o,
            color: i,
            coralTopColor: r,
            coralBottomColor: l,
            children: [
              s && (0, c.jsx)("h3", { children: s }),
              d,
              u &&
                (0, c.jsx)("p", {
                  children: (0, c.jsx)(p, {
                    onClick: m,
                    dashArrow: !0,
                    url: null === u || void 0 === u ? void 0 : u.url,
                    children: null === u || void 0 === u ? void 0 : u.title,
                  }),
                }),
            ],
          });
        },
        u = d;
      d.defaultProps = {
        maxWidth: "auto",
        backgroundColor: i.ZP.purple1,
        background: null,
        color: null,
        coralTopColor: null,
        coralBottomColor: null,
        title: "Try DigitalOcean for free",
        body: (0, c.jsxs)("p", {
          children: [
            "Click below to sign up and get",
            " ",
            (0, c.jsxs)("strong", {
              children: [r.KM.credit, " ", "of credit"],
            }),
            " ",
            "to try our products over 60 days!",
          ],
        }),
        link: {
          title: "Sign up",
          url: "https://cloud.digitalocean.com/registrations/new?refcode=".concat(
            r.rh.communityFTOAll
          ),
        },
        onButtonClick: function () {},
      };
      var p = (0, o.ZP)(l.Z).withConfig({
        displayName: "CommunityCTA___StyledTextLink",
        componentId: "sc-eumsoq-0",
      })(["", ""], s);
    },
    69961: function (t, n) {
      n.Z = function (t, n, e, o) {
        var i = t / 16,
          r = e / 16,
          l = o / 16,
          a = (l - r) / (n / 16 - i),
          s = -i * a + r;
        return "clamp( "
          .concat(r, "rem, ")
          .concat(s, "rem + ")
          .concat(100 * a, "vw, ")
          .concat(l, "rem )");
      };
    },
    92552: function (t, n) {
      n.Z = function (t, n) {
        return ""
          .concat(t || n, " ")
          .concat(
            "Tag" === n ? "tutorials, questions, and resources" : "",
            " | DigitalOcean"
          );
      };
    },
    84270: function (t, n) {
      n.Z = function (t) {
        var n = "Something went wrong.";
        if (-1 !== t.indexOf("API call failed"))
          try {
            var e = JSON.parse(t.split(" - ").slice(2).join(" - ").trim());
            e.errors ? (n = e.errors) : e.message && (n = e.message);
          } catch (o) {}
        return n;
      };
    },
    75669: function (t, n) {
      n.Z = function (t) {
        return t
          .replace(/(?:^|_)(.)/g, function (t, n) {
            return " ".concat(n.toUpperCase());
          })
          .trim();
      };
    },
  },
]);
