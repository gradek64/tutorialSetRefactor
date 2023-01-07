(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9006],
  {
    62080: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var r = n(59499),
        i = n(88134),
        a = n(37797).ZP.button.withConfig({
          displayName: "ButtonStyles__StyledButton",
          componentId: "sc-4h9jsk-0",
        })(
          [
            "align-items:center;background-color:transparent;border:1px solid ",
            ";border-radius:100px;color:",
            ";cursor:pointer;display:flex;font-size:1em;font-weight:700;justify-content:center;padding:16px 32px;text-decoration:none;transition:all 0.3s ease;&:not(:disabled):hover{background-color:rgba(0,105,255,0.15);transition:all 0.3s ease;}&:disabled{cursor:default;}&.is-squared{border-radius:8px;}&.is-primary{background-color:#1633ff;border:1px solid #1633ff;color:#fff;transition:all 0.3s ease;&:not(:disabled):hover{background-color:#0069ff !important;border:1px solid #0069ff;color:#fff !important;transition:all 0.3s ease;}&:disabled{background-color:#c4c9d6 !important;border:1px solid #c4c9d6 !important;color:#fff;}&.is-outlined{border:1px solid #0069ff;color:#0069ff;&:not(:disabled):hover{background-color:#f2f8ff !important;border:1px solid #0069ff !important;color:#0069ff !important;}&:disabled{background-color:#fff !important;border:1px solid #8690a9 !important;color:#8690a9 !important;}}}&.is-white{background-color:#fff;border:1px solid #fff;color:#0069ff;transition:all 0.3s ease;&:not(:disabled):hover{background-color:rgba(225,225,225,0.9);color:#0069ff;transition:all 0.3s ease;}&:disabled{border:1px solid #8690a9 !important;color:#8690a9 !important;}&.is-outlined{background-color:transparent;border:1px solid rgba(255,255,255,0.9);color:rgba(255,255,255,0.9);&:not(:disabled):hover{background-color:transparent;border:1px solid rgba(255,255,255,1);color:rgba(255,255,255,1);}}}&.is-outlined{background-color:transparent;border:1px solid ",
            ";color:",
            ";transition:all 0.3s ease;&:not(:disabled):hover{border:1px solid #0069ff;color:#0069ff;transition:all 0.3s ease;}}&.is-small{padding:12px 24px;}&.has-center-img{padding:15px 16px;}&.has-left-img{img{margin-right:8px;}}&.mx-16{margin-left:16px;margin-right:16px;}&.mt-32{margin-top:32px;}&.is-community{border:0;border-radius:8px;cursor:pointer;font-size:16px;font-weight:600;height:50px;line-height:50px;margin:5px;padding:0 15px;text-align:center;transition:color 0.2s ease-in-out,background-color 0.2s ease-in-out;&.blue{background-color:#0069ff;color:#fff;&:not(:disabled):hover{background-color:",
            ";}}&.green{background-color:",
            ";color:",
            ";&:hover{background-color:",
            ";}}&.outlined{background-color:transparent;border:1px solid #0069ff;color:#0069ff;&:not(:disabled):hover{background-color:#0069ff;color:#fff;}}&.small{font-weight:500;height:35px;line-height:35px;}}",
          ],
          i.ZP.blueDarker,
          i.ZP.blueDarker,
          i.ZP.blueDarker,
          i.ZP.blueDarker,
          i.ZP.blueDarker,
          i.ZP.greenPricingCard,
          i.ZP.white,
          i.ZP.blueDarker
        ),
        o = n(85893);
      function s(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var c = function (e) {
        var t = e.children;
        return (0, o.jsx)(a, l(l({}, e), {}, { children: t }));
      };
    },
    17801: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return w;
        },
      });
      var r = n(67294),
        i = n(84270),
        a = n(75669),
        o = n(88723),
        s = n(52507),
        l = n(88134),
        c = n(37797),
        u = n(62080),
        d = n(90352),
        p = (0, c.iv)(["bottom:40px;position:fixed;right:16px;z-index:10;"]),
        g = (0, c.ZP)(u.Z)
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
          l.ZP.gray2,
          l.ZP.gray2,
          (0, l.E9)(l.ZP.blue1, 0.1),
          l.ZP.white,
          p,
          l.ZP.blue2,
          l.ZP.blue2
        ),
        f = c.ZP.div.withConfig({
          displayName: "ModActionStyles__StyledModActions",
          componentId: "sc-19u4jin-1",
        })(
          [
            "background:",
            ";border-radius:8px;box-shadow:0 4px 24px -4px ",
            ";display:flex;flex-direction:column;",
            " padding:16px;",
          ],
          l.ZP.gray2,
          (0, l.E9)(l.ZP.blue1, 0.1),
          p
        ),
        h = c.ZP.p.withConfig({
          displayName: "ModActionStyles__StyledModActionsHeading",
          componentId: "sc-19u4jin-2",
        })(
          ["color:", ";font-size:15px;font-weight:600;margin:0 0 8px;"],
          l.ZP.white
        ),
        m = (0, c.iv)(
          [
            "color:",
            ";display:block;font-size:13px;font-weight:500;margin:0 -16px;padding:4px 16px;text-decoration:none;transition:background-color 0.2s ease-in-out,color 0.2s ease-in-out;&:not(:disabled):hover,&:not(:disabled):focus{background:",
            ";color:",
            ";}&:disabled{color:",
            ";cursor:not-allowed;font-style:italic;}",
          ],
          l.ZP.white,
          l.ZP.gray1,
          l.ZP.blue4,
          l.ZP.gray6
        ),
        b = c.ZP.button.withConfig({
          displayName: "ModActionStyles__StyledModActionsAction",
          componentId: "sc-19u4jin-3",
        })(
          ["background:none;border:0;cursor:pointer;", " text-align:left;"],
          m
        ),
        y = (0, c.ZP)(d.Z).withConfig({
          displayName: "ModActionStyles__StyledModActionsLink",
          componentId: "sc-19u4jin-4",
        })(["", ""], m),
        x = n(85893),
        v = function (e) {
          var t = e.record,
            n = e.update,
            l = e.type,
            c = e.subType,
            u = (0, s.z)().addNotification,
            d = (0, r.useState)(!0),
            p = d[0],
            m = d[1],
            v = (0, r.useState)(!1),
            w = v[0],
            k = v[1],
            P = (0, r.useCallback)(
              function (e, t) {
                w ||
                  (k(!0),
                  Promise.resolve(n(e))
                    .then(function () {
                      u("".concat((0, a.Z)(c || l), " ").concat(t), "success");
                    })
                    .catch(function (e) {
                      console.error(e), u((0, i.Z)(e.message), "error");
                    })
                    .finally(function () {
                      k(!1);
                    }));
              },
              [w, n, u, l, c]
            );
          return p
            ? (0, x.jsx)(g, {
                onClick: function () {
                  return m(!1);
                },
                children: "Mod Actions",
              })
            : (0, x.jsxs)(f, {
                children: [
                  "tag" !== l
                    ? (0, x.jsxs)(h, {
                        children: ["Current State:", " ", t.state],
                      })
                    : null,
                  "tutorial" === l || "tool" === l || "tutorial_series" === l
                    ? "published" !== t.state
                      ? (0, x.jsx)(b, {
                          onClick: function () {
                            return P({ state: "published" }, "published");
                          },
                          disabled: w,
                          children: "Publish",
                        })
                      : (0, x.jsx)(b, {
                          onClick: function () {
                            return P({ state: "draft" }, "unpublished");
                          },
                          disabled: w,
                          children: "Unpublish",
                        })
                    : null,
                  "question" === l
                    ? (0, x.jsxs)(x.Fragment, {
                        children: [
                          "published" !== t.state
                            ? (0, x.jsx)(b, {
                                onClick: function () {
                                  return P({ state: "published" }, "published");
                                },
                                disabled: w,
                                children: "Publish",
                              })
                            : (0, x.jsx)(b, {
                                onClick: function () {
                                  return P({ state: "unlisted" }, "unlisted");
                                },
                                disabled: w,
                                children: "Unlist",
                              }),
                          (0, x.jsx)(b, {
                            onClick: function () {
                              return P({ state: "spam" }, "marked as spam");
                            },
                            disabled: w,
                            children: "Spam",
                          }),
                        ],
                      })
                    : null,
                  "tutorial" === l
                    ? (0, x.jsx)(b, {
                        onClick: function () {
                          return P({ state: "deprecated" }, "deprecated");
                        },
                        disabled: w,
                        children: "Deprecate",
                      })
                    : null,
                  "tutorial" === l || "tool" === l || "question" === l
                    ? (0, x.jsxs)(x.Fragment, {
                        children: [
                          (0, x.jsx)(b, {
                            onClick: function () {
                              return P({ state: "trashed" }, "trashed");
                            },
                            disabled: w,
                            children: "Trash",
                          }),
                          null === t.comments_locked_at
                            ? (0, x.jsx)(b, {
                                onClick: function () {
                                  return P(
                                    { comments_locked_at: new Date() },
                                    "comments locked"
                                  );
                                },
                                disabled: w,
                                children: "Lock ALL Comments",
                              })
                            : (0, x.jsx)(b, {
                                onClick: function () {
                                  return P(
                                    { comments_locked_at: null },
                                    "comments unlocked"
                                  );
                                },
                                disabled: w,
                                children: "Unlock All Comments",
                              }),
                        ],
                      })
                    : null,
                  "tutorial_series" === l
                    ? (0, x.jsx)(b, {
                        onClick: function () {
                          return P({ state: "trashed" }, "trashed");
                        },
                        disabled: w,
                        children: "Trash",
                      })
                    : null,
                  "question" === l
                    ? (0, x.jsxs)(x.Fragment, {
                        children: [
                          null === t.answers_locked_at
                            ? (0, x.jsx)(b, {
                                onClick: function () {
                                  return P(
                                    { answers_locked_at: new Date() },
                                    "answers locked"
                                  );
                                },
                                disabled: w,
                                children: "Lock ALL Answers",
                              })
                            : (0, x.jsx)(b, {
                                onClick: function () {
                                  return P(
                                    { answers_locked_at: null },
                                    "answers unlocked"
                                  );
                                },
                                disabled: w,
                                children: "Unlock All Answers",
                              }),
                          null === t.new_answers_locked_at
                            ? (0, x.jsx)(b, {
                                onClick: function () {
                                  return P(
                                    { new_answers_locked_at: new Date() },
                                    "answer submissions locked"
                                  );
                                },
                                disabled: w,
                                children: "Lock ALL New Answers",
                              })
                            : (0, x.jsx)(b, {
                                onClick: function () {
                                  return P(
                                    { new_answers_locked_at: null },
                                    "answer submissions unlocked"
                                  );
                                },
                                disabled: w,
                                children: "Unlock All New Answers",
                              }),
                        ],
                      })
                    : null,
                  "tag" === l
                    ? (0, x.jsxs)(x.Fragment, {
                        children: [
                          null === t.admin_view_only_at
                            ? (0, x.jsx)(b, {
                                onClick: function () {
                                  return P(
                                    { admin_view_only_at: new Date() },
                                    "hidden for regular users"
                                  );
                                },
                                disabled: w,
                                children: "Show to admins only",
                              })
                            : (0, x.jsx)(b, {
                                onClick: function () {
                                  return P(
                                    { admin_view_only_at: null },
                                    "shown to all users"
                                  );
                                },
                                disabled: w,
                                children: "Show to all users",
                              }),
                          null === t.admin_use_only_at
                            ? (0, x.jsx)(b, {
                                onClick: function () {
                                  return P(
                                    { admin_use_only_at: new Date() },
                                    "restricted to admin use only"
                                  );
                                },
                                disabled: w,
                                children: "Restrict to admin use only",
                              })
                            : (0, x.jsx)(b, {
                                onClick: function () {
                                  return P(
                                    { admin_use_only_at: null },
                                    "unrestricted for use by all users"
                                  );
                                },
                                disabled: w,
                                children: "Allow use by all users",
                              }),
                        ],
                      })
                    : null,
                  (0, x.jsx)(y, {
                    url: (0, o.as)(c || l, t.slug),
                    children: "Edit",
                  }),
                  (0, x.jsx)(b, {
                    onClick: function () {
                      return m(!0);
                    },
                    children: "Close",
                  }),
                ],
              });
        },
        w = v;
      v.defaultProps = { subType: null };
    },
    34012: function (e, t, n) {
      "use strict";
      n.d(t, {
        Ef: function () {
          return c;
        },
        N2: function () {
          return s;
        },
        OP: function () {
          return l;
        },
        g3: function () {
          return a;
        },
        iI: function () {
          return o;
        },
      });
      var r = n(17534),
        i = n(37797),
        a = i.ZP.div.withConfig({
          displayName: "ModalStyles__StyledModalBackground",
          componentId: "sc-9tib0l-0",
        })([
          "background:rgba(229,232,237,0.9);display:none;height:100vh;left:0;position:fixed;top:0;width:100vw;z-index:50;",
        ]),
        o = i.ZP.div.withConfig({
          displayName: "ModalStyles__StyledModalWrapper",
          componentId: "sc-9tib0l-1",
        })([
          "align-items:flex-start;display:none;left:0;margin-left:auto;margin-right:auto;padding:20px;position:absolute;right:0;text-align:left;top:0;z-index:100;",
        ]),
        s = i.ZP.div.withConfig({
          displayName: "ModalStyles__StyledLoginModalContent",
          componentId: "sc-9tib0l-2",
        })(
          [
            "background:#fff;border-radius:6px;display:flex;flex-direction:column;justify-content:space-between;margin:0 auto;max-width:770px;",
            "{width:100%;}",
          ],
          (0, r.X)(r.A.desktop)
        ),
        l = i.ZP.div.withConfig({
          displayName: "ModalStyles__StyledLoginModalBody",
          componentId: "sc-9tib0l-3",
        })(["padding:30px;text-align:center;"]),
        c = (0, i.iv)([
          "display:inline-block;margin-right:16px;margin-top:24px;text-align:center;",
        ]);
    },
    68771: function (e, t, n) {
      "use strict";
      var r = n(59499),
        i = n(34012),
        a = n(85893);
      function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : o(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      t.Z = function (e) {
        var t = e.show,
          n = e.onClose,
          r = e.children;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(i.g3, {
              style: t ? { display: "flex" } : { display: "none" },
              onClick: function () {
                return n();
              },
              onKeyDown: function () {
                return n();
              },
            }),
            (0, a.jsx)(
              i.iI,
              s(
                s({}, e),
                {},
                {
                  style: t ? { display: "flex" } : { display: "none" },
                  children: r,
                }
              )
            ),
          ],
        });
      };
    },
    83866: function (e, t, n) {
      "use strict";
      n.d(t, {
        To: function () {
          return s;
        },
        Vr: function () {
          return m;
        },
        _e: function () {
          return p;
        },
        ce: function () {
          return o;
        },
        f2: function () {
          return c;
        },
        f_: function () {
          return l;
        },
        o$: function () {
          return g;
        },
        o0: function () {
          return f;
        },
        qp: function () {
          return u;
        },
        qt: function () {
          return h;
        },
        sO: function () {
          return d;
        },
      });
      var r = n(17534),
        i = n(88134),
        a = n(37797),
        o = a.ZP.div.withConfig({
          displayName: "DocumentContentStyles__StyledDocument",
          componentId: "sc-1b8mjjk-0",
        })([
          "display:flex;flex-direction:column;margin:auto;max-width:870px;overflow-wrap:break-word;text-align:left;p{line-height:160%;img{margin:16px 0;max-width:100%;}}",
        ]),
        s =
          ((0, a.iv)(["background-repeat:repeat;"]),
          (0, a.iv)([
            "align-items:center;display:flex;flex-direction:column;justify-content:center;",
          ]),
          (0, a.iv)(["margin:20px auto 20px 0 !important;max-width:670px;"]),
          (0, a.iv)(
            [
              "p,h1,h2,h3,h4,h5,h6,ul,ol{color:",
              ";}strong{font-weight:normal;}",
            ],
            i.ZP.white
          )),
        l = (0, a.iv)(
          [
            "h1,h2,h3,h4,h5,h6{color:",
            " !important;margin-bottom:16px;margin-top:32px;}p,span,ul,ol{color:",
            ";}a{color:",
            ";}",
          ],
          i.ZP.blueDark,
          i.ZP.grayDark,
          i.ZP.blue2
        ),
        c = (0, a.iv)(
          ["position:fixed;top:100px;", "{top:20px;}"],
          (0, r.X)(r.A.desktop)
        ),
        u = a.ZP.div.withConfig({
          displayName: "DocumentContentStyles__StyledModalContent",
          componentId: "sc-1b8mjjk-1",
        })(
          [
            "background-color:",
            ";border-radius:6px;display:flex;flex-direction:column;justify-content:space-between;margin:0 auto;max-width:770px;min-height:575px;",
            "{width:100%;}",
          ],
          i.ZP.white,
          (0, r.X)(r.A.desktop)
        ),
        d = a.ZP.div.withConfig({
          displayName: "DocumentContentStyles__StyledModalHeader",
          componentId: "sc-1b8mjjk-2",
        })(
          [
            "align-items:center;border-bottom:1px solid ",
            ";display:flex;justify-content:space-between;",
          ],
          i.ZP.grayLighter
        ),
        p = (0, a.iv)(["padding:24px;"]),
        g = a.ZP.a.withConfig({
          displayName: "DocumentContentStyles__StyledCloseBtn",
          componentId: "sc-1b8mjjk-3",
        })(
          [
            "cursor:pointer;height:15px;padding:24px 20px;position:relative;width:15px;&::before,&::after{background-color:",
            ";content:' ';height:15px;position:absolute;width:2px;}&::before{transform:rotate(45deg);}&::after{transform:rotate(-45deg);}",
          ],
          i.ZP.grayDark
        ),
        f = (0, a.iv)(
          ["color:", ";height:330px;overflow:scroll;padding:48px 48px 0;"],
          i.ZP.grayDark
        ),
        h = a.ZP.div.withConfig({
          displayName: "DocumentContentStyles__StyledButtonContainer",
          componentId: "sc-1b8mjjk-4",
        })(
          [
            "margin:32px 48px 48px;.is-primary{margin-right:16px;",
            "{margin-top:16px;width:100%;}}",
          ],
          (0, r.X)(r.A.desktop)
        ),
        m = a.ZP.div.withConfig({
          displayName: "DocumentContentStyles__StyledModalTextLink",
          componentId: "sc-1b8mjjk-5",
        })(
          [
            "display:flex;margin:auto;max-width:870px;overflow-wrap:break-word;text-align:left;button{background:transparent;border:none;color:",
            ";display:inline;margin:0;padding:0;text-decoration:underline;&:hover{cursor:pointer;}}",
          ],
          i.ZP.blue2
        );
      a.ZP.p.withConfig({
        displayName: "DocumentContentStyles__StyledRecordMetaItemDate",
        componentId: "sc-1b8mjjk-6",
      })(["color:", ";font-weight:600;margin:8px 0;"], i.ZP.gray4);
    },
    61655: function (e, t, n) {
      "use strict";
      var r = n(37797),
        i = n(88134),
        a = n(57054),
        o = n(62080),
        s = n(71778),
        l = n(90352),
        c = n(68771),
        u = n(34012),
        d = n(83866),
        p = n(85893);
      t.Z = function (e) {
        var t = e.needLogIn,
          n = e.setNeedLogIn,
          r = (0, a.Z)();
        return (0, p.jsx)(g, {
          show: t,
          onClose: function () {
            n(!1);
          },
          closeOnBlur: !0,
          showClose: !1,
          children: (0, p.jsxs)(u.N2, {
            children: [
              (0, p.jsxs)(d.sO, {
                children: [
                  (0, p.jsx)(f, {
                    defaultColor: i.ZP.blueDark,
                    renderAs: "h5",
                    children: "Join the Community",
                  }),
                  (0, p.jsx)(d.o$, {
                    onClick: function () {
                      n(!1);
                    },
                  }),
                ],
              }),
              (0, p.jsxs)(u.OP, {
                children: [
                  (0, p.jsx)(h, {
                    renderAs: "h5",
                    children: "Before you can do that",
                  }),
                  "To complete this action, sign in to your Community account or create a new one.",
                  (0, p.jsx)(m, {
                    url: r.signIn,
                    children: (0, p.jsx)(o.Z, { children: "Sign In" }),
                  }),
                  (0, p.jsx)(b, {
                    url: r.signIn,
                    children: (0, p.jsx)(o.Z, { children: "Sign Up" }),
                  }),
                ],
              }),
            ],
          }),
        });
      };
      var g = (0, r.ZP)(c.Z).withConfig({
          displayName: "LogInModalTemplate___StyledModal",
          componentId: "sc-4tqy3l-0",
        })(["", ""], d.f2),
        f = (0, r.ZP)(s.Z).withConfig({
          displayName: "LogInModalTemplate___StyledHeading",
          componentId: "sc-4tqy3l-1",
        })(["", ""], d._e),
        h = (0, r.ZP)(s.Z).withConfig({
          displayName: "LogInModalTemplate___StyledHeading2",
          componentId: "sc-4tqy3l-2",
        })(["", ""], d._e),
        m = (0, r.ZP)(l.Z).withConfig({
          displayName: "LogInModalTemplate___StyledLazyLink",
          componentId: "sc-4tqy3l-3",
        })(["", ""], u.Ef),
        b = (0, r.ZP)(l.Z).withConfig({
          displayName: "LogInModalTemplate___StyledLazyLink2",
          componentId: "sc-4tqy3l-4",
        })(["", ""], u.Ef);
    },
    92077: function (e, t, n) {
      "use strict";
      n.d(t, {
        q: function () {
          return c;
        },
        X: function () {
          return u;
        },
      });
      var r = n(67294),
        i = n(61655),
        a = n(33606),
        o = function (e) {
          var t = (0, r.useState)([]),
            n = t[0],
            i = t[1],
            o = (0, r.useState)(!1),
            s = o[0],
            l = o[1];
          return (
            (0, r.useEffect)(
              function () {
                e.token &&
                  e.user &&
                  (0, a.zz)(e.token, e.user.slug).then(function (e) {
                    return i(e);
                  });
              },
              [e]
            ),
            {
              needLogIn: s,
              setNeedLogIn: l,
              subscriptions: n,
              handleSubscribeAction: function (t, n) {
                e.token
                  ? (0, a.Ld)(e.token, { type: t, id: n }).then(function (e) {
                      i(e);
                    })
                  : l(!0);
              },
              handleUnsubscribeAction: function (t, n) {
                (0, a.r1)(e.token, { type: t, id: n }).then(function (e) {
                  i(e);
                });
              },
            }
          );
        },
        s = n(85893),
        l = (0, r.createContext)({}),
        c = function (e) {
          var t = e.auth,
            n = e.children,
            a = o(t),
            c = a.needLogIn,
            u = a.setNeedLogIn,
            d = a.subscriptions,
            p = a.handleSubscribeAction,
            g = a.handleUnsubscribeAction,
            f = (0, r.useMemo)(
              function () {
                return {
                  handleSubscribeAction: p,
                  handleUnsubscribeAction: g,
                  subscriptions: d,
                };
              },
              [p, g, d]
            );
          return (0, s.jsxs)(l.Provider, {
            value: f,
            children: [
              c && (0, s.jsx)(i.Z, { needLogIn: c, setNeedLogIn: u }),
              n,
            ],
          });
        },
        u = function () {
          return (0, r.useContext)(l);
        };
    },
    54245: function (e, t, n) {
      "use strict";
      var r = n(59499),
        i = n(67294),
        a = n(11163),
        o = n(17053);
      function s(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      t.Z = function (e) {
        var t = e.initialRecords,
          n = void 0 === t ? [] : t,
          s = e.initialTotal,
          c = void 0 === s ? 0 : s,
          u = e.initialType,
          d = void 0 === u ? "" : u,
          p = e.initialSubType,
          g = void 0 === p ? "" : p,
          f = e.initialQuery,
          h = void 0 === f ? "" : f,
          m = e.initialFilter,
          b = void 0 === m ? "" : m,
          y = e.initialLanguage,
          x = void 0 === y ? "" : y,
          v = e.initialTag,
          w = void 0 === v ? "" : v,
          k = e.initialSortBy,
          P = void 0 === k ? "newest" : k,
          j = e.initialTimeRange,
          _ = void 0 === j ? "all" : j,
          A = e.initialHitsPerPage,
          S = void 0 === A ? 6 : A,
          Z = e.initialMoreResults,
          C = void 0 === Z || Z,
          T = e.initialUseQueryParams,
          O = void 0 === T || T,
          I = (0, i.useState)(n),
          N = I[0],
          L = I[1],
          D = (0, i.useState)(c),
          R = D[0],
          E = D[1],
          M = (0, i.useState)({}),
          q = M[0],
          B = M[1],
          z = (0, i.useState)(d),
          Q = z[0],
          F = z[1],
          H = (0, i.useState)(g),
          U = H[0],
          V = H[1],
          G = (0, i.useState)(h),
          X = G[0],
          K = G[1],
          W = (0, i.useState)(b),
          Y = W[0],
          J = W[1],
          $ = (0, i.useState)(x),
          ee = $[0],
          te = $[1],
          ne = (0, i.useState)(w),
          re = ne[0],
          ie = ne[1],
          ae = (0, i.useState)(P),
          oe = ae[0],
          se = ae[1],
          le = (0, i.useState)(_),
          ce = le[0],
          ue = le[1],
          de = (0, i.useState)(S),
          pe = de[0],
          ge = de[1],
          fe = (0, i.useState)(0),
          he = fe[0],
          me = fe[1],
          be = (0, i.useState)(C),
          ye = be[0],
          xe = be[1],
          ve = (0, i.useState)(O),
          we = ve[0],
          ke = ve[1],
          Pe = (0, i.useState)(""),
          je = Pe[0],
          _e = Pe[1],
          Ae = (0, i.useState)({}),
          Se = Ae[0],
          Ze = Ae[1],
          Ce = (0, i.useState)(null),
          Te = Ce[0],
          Oe = Ce[1],
          Ie = (0, i.useRef)(!1),
          Ne = (0, a.useRouter)(),
          Le = function (e) {
            L(0 === he ? e.hits : N.concat(e.hits)),
              E(e.total),
              xe(e.more),
              B(e);
          };
        return (
          (0, i.useEffect)(
            function () {
              if (Ne.isReady && we) {
                var e = new URL(window.location.origin + Ne.asPath);
                if (e.searchParams.toString() !== je)
                  return (
                    e.searchParams.has("q") && K(e.searchParams.get("q")),
                    e.searchParams.has("type") && F(e.searchParams.get("type")),
                    e.searchParams.has("subtype") &&
                      V(e.searchParams.get("subtype")),
                    e.searchParams.has("filter") &&
                      J(e.searchParams.get("filter")),
                    e.searchParams.has("language") &&
                      te(e.searchParams.get("language")),
                    e.searchParams.has("sort_by") &&
                      se(e.searchParams.get("sort_by")),
                    e.searchParams.has("time_range") &&
                      ue(e.searchParams.get("time_range")),
                    e.searchParams.has("hits_per_page") &&
                      ge(e.searchParams.get("hits_per_page")),
                    void _e(e.searchParams.toString())
                  );
                X !== h
                  ? e.searchParams.set("q", X)
                  : e.searchParams.delete("q"),
                  Q !== d
                    ? e.searchParams.set("type", Q)
                    : e.searchParams.delete("type"),
                  U !== g
                    ? e.searchParams.set("subtype", U)
                    : e.searchParams.delete("subtype"),
                  Y !== b
                    ? e.searchParams.set("filter", Y)
                    : e.searchParams.delete("filter"),
                  ee !== x
                    ? e.searchParams.set("language", ee)
                    : e.searchParams.delete("language"),
                  oe !== P
                    ? e.searchParams.set("sort_by", oe)
                    : e.searchParams.delete("sort_by"),
                  ce !== _
                    ? e.searchParams.set("time_range", ce)
                    : e.searchParams.delete("time_range"),
                  pe !== S
                    ? e.searchParams.set("hits_per_page", pe)
                    : e.searchParams.delete("hits_per_page"),
                  e.searchParams.toString() !== je &&
                    Ne.replace(e.toString(), void 0, { shallow: !0 }).then(
                      function () {
                        _e(e.searchParams.toString());
                      }
                    );
              }
            },
            [Ne, we, je, X, Q, U, Y, ee, oe, ce, pe, h, d, g, b, x, P, _, S]
          ),
          (0, i.useEffect)(
            function () {
              return me(0);
            },
            [X, Q, U, Y, ee, re, oe, ce, pe]
          ),
          (0, i.useEffect)(
            function () {
              if (!Ie.current) return (Ie.current = !0), Promise.resolve();
              Te && (Te.abort(), Oe(null));
              var e = {
                  query: X.trim(),
                  type: Q,
                  subType: U,
                  filter: Y,
                  language: ee,
                  tag: re,
                  sortBy: oe,
                  timeRange: ce,
                  page: he,
                  hitsPerPage: pe,
                },
                t = JSON.stringify(e);
              if (Object.prototype.hasOwnProperty.call(Se, t)) return Le(Se[t]);
              var n = window.AbortController
                ? new window.AbortController()
                : null;
              return (
                Oe(n),
                (0, o.V9)(e, { signal: n && n.signal })
                  .then(function (e) {
                    Ze(l(l({}, Se), {}, (0, r.Z)({}, t, e))), Le(e);
                  })
                  .catch(function (e) {
                    if (!(e instanceof DOMException && "AbortError" === e.name))
                      throw e;
                  })
              );
            },
            [X, Q, U, Y, ee, re, oe, ce, pe, he]
          ),
          {
            records: N,
            total: R,
            results: q,
            moreResults: ye,
            setType: F,
            type: Q,
            setSubType: V,
            subType: U,
            setQuery: K,
            query: X,
            setFilter: J,
            filter: Y,
            setLanguage: te,
            language: ee,
            setSortBy: se,
            sortBy: oe,
            setTimeRange: ue,
            timeRange: ce,
            setTag: ie,
            tag: re,
            hitsPerPage: pe,
            setHitsPerPage: ge,
            setUseQueryParams: ke,
            useQueryParams: we,
            setPage: me,
            page: he,
          }
        );
      };
    },
    79878: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __N_SSG: function () {
            return Re;
          },
          default: function () {
            return Ee;
          },
        });
      var r = n(59499),
        i = n(50029),
        a = n(87794),
        o = n.n(a),
        s = n(67294),
        l = n(9008),
        c = n.n(l),
        u = n(11163),
        d = n(33606),
        p = n(17053),
        g = n(12284),
        f = n(92552),
        h = n(18254),
        m = n(92077),
        b = n(75933),
        y = n(5152),
        x = n.n(y),
        v = n(41664),
        w = n.n(v),
        k = n(45697),
        P = n.n(k);
      function j() {
        return (
          (j =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          j.apply(this, arguments)
        );
      }
      function _(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      var A = (0, s.forwardRef)(function (e, t) {
        var n = e.color,
          r = void 0 === n ? "currentColor" : n,
          i = e.size,
          a = void 0 === i ? 24 : i,
          o = _(e, ["color", "size"]);
        return s.createElement(
          "svg",
          j(
            {
              ref: t,
              xmlns: "http://www.w3.org/2000/svg",
              width: a,
              height: a,
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: r,
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            },
            o
          ),
          s.createElement("path", {
            d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z",
          }),
          s.createElement("polyline", { points: "22,6 12,13 2,6" })
        );
      });
      (A.propTypes = {
        color: P().string,
        size: P().oneOfType([P().string, P().number]),
      }),
        (A.displayName = "Mail");
      var S = A;
      function Z() {
        return (
          (Z =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          Z.apply(this, arguments)
        );
      }
      function C(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      var T = (0, s.forwardRef)(function (e, t) {
        var n = e.color,
          r = void 0 === n ? "currentColor" : n,
          i = e.size,
          a = void 0 === i ? 24 : i,
          o = C(e, ["color", "size"]);
        return s.createElement(
          "svg",
          Z(
            {
              ref: t,
              xmlns: "http://www.w3.org/2000/svg",
              width: a,
              height: a,
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: r,
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            },
            o
          ),
          s.createElement("path", { d: "M4 11a9 9 0 0 1 9 9" }),
          s.createElement("path", { d: "M4 4a16 16 0 0 1 16 16" }),
          s.createElement("circle", { cx: "5", cy: "19", r: "1" })
        );
      });
      (T.propTypes = {
        color: P().string,
        size: P().oneOfType([P().string, P().number]),
      }),
        (T.displayName = "Rss");
      var O = T,
        I = n(8765),
        N = n(28030),
        L = n(21474),
        D = n(76427),
        R = n(59667),
        E = n(57671),
        M = n(88723),
        q = n(54245),
        B = n(62080),
        z = n(58069),
        Q = n(16835),
        F = n(6944),
        H = n(88400),
        U = n(1443),
        V = n(13688),
        G = n(89783),
        X = n(21346),
        K = n(37797),
        W = K.ZP.div.withConfig({
          displayName: "IndexListTabStyles__StyledNoResultsContainer",
          componentId: "sc-1mez9ss-0",
        })([
          "color:#666;font-size:20px;line-height:1.4;margin:100px 0;text-align:center;width:100%;",
        ]),
        Y = n(85893),
        J = function (e) {
          var t = e.records,
            n = e.search,
            r = e.initialTag,
            i = [
              { value: "newest", label: "Newest" },
              { value: "popularity", label: "Popular" },
            ],
            a = [{ value: "", label: "All" }].concat(
              Object.entries(F.J3).map(function (e) {
                var t = (0, Q.Z)(e, 2);
                return { value: t[0], label: t[1].localized_name };
              })
            ),
            o = [
              { value: "all", label: "All time" },
              { value: "day", label: "Last day" },
              { value: "week", label: "Last week" },
              { value: "month", label: "Last month" },
              { value: "year", label: "Last year" },
            ];
          return (0, Y.jsxs)(Y.Fragment, {
            children: [
              (0, Y.jsx)(H.Z, {
                message: t.length
                  ? "".concat(t.length, " Results")
                  : "0 Results",
                dropdowns: (0, Y.jsxs)(Y.Fragment, {
                  children: [
                    (0, Y.jsx)(U.dV, {
                      label: (0, Y.jsx)(G.Z, { eyebrow: "Sort by" }),
                      options: i,
                      value: i.find(function (e) {
                        return e.value === n.sortBy;
                      }),
                      onChange: function (e) {
                        return n.setSortBy(e.value);
                      },
                    }),
                    (0, Y.jsx)(U.dV, {
                      label: (0, Y.jsx)(G.Z, { eyebrow: "Time range" }),
                      options: o,
                      value: o.find(function (e) {
                        return e.value === n.timeRange;
                      }),
                      onChange: function (e) {
                        return n.setTimeRange(e.value);
                      },
                    }),
                    (0, Y.jsx)(U.dV, {
                      label: (0, Y.jsx)(G.Z, { eyebrow: "Language" }),
                      options: a,
                      value: a.find(function (e) {
                        return e.value === n.language;
                      }),
                      onChange: function (e) {
                        return n.setLanguage(e.value);
                      },
                    }),
                  ],
                }),
              }),
              t.length
                ? (0, Y.jsx)(V.Z, {
                    records: t,
                    onClickTag: function (e) {
                      return n.setQuery(
                        "".concat(n.query, " [").concat(e, "]")
                      );
                    },
                    showEyebrow: !0,
                  })
                : (0, Y.jsxs)(W, { children: ["No results tagged with", r] }),
              (0, Y.jsx)(X.Z, {
                onClick: function () {
                  return n.setPage(n.page + 1);
                },
                visible: n.moreResults,
                message: "Load more results",
              }),
            ],
          });
        },
        $ = n(98992),
        ee = K.ZP.div.withConfig({
          displayName: "IndexListTabbedHeaderStyles__StyledTabbedContainer",
          componentId: "sc-1m9ten9-0",
        })([
          "background:#fff;font-size:14px;font-weight:500;line-height:24px;position:relative;",
        ]),
        te = K.ZP.div.withConfig({
          displayName:
            "IndexListTabbedHeaderStyles__StyledTabbedHeaderListContainer",
          componentId: "sc-1m9ten9-1",
        })([
          "box-shadow:0 2px 4px rgb(3 27 78 / 10%);display:block;margin-bottom:3px;",
        ]),
        ne = K.ZP.ul.withConfig({
          displayName: "IndexListTabbedHeaderStyles__StyledTabbedHeaderList",
          componentId: "sc-1m9ten9-2",
        })([
          "background:#fff;display:flex;flex-wrap:nowrap;margin:0 auto;max-width:1090px;width:80%;",
        ]),
        re = K.ZP.li.withConfig({
          displayName:
            "IndexListTabbedHeaderStyles__StyledTabbedHeaderListItem",
          componentId: "sc-1m9ten9-3",
        })([
          "background-color:#f3f5f9;cursor:pointer;display:block;list-style:none;margin:0;padding:0 16px;",
        ]),
        ie = K.ZP.a.withConfig({
          displayName: "IndexListTabbedHeaderStyles__StyledTabbedHeaderLink",
          componentId: "sc-1m9ten9-4",
        })(
          [
            "border-bottom:",
            ";cursor:pointer;margin-right:20px;padding:30px 0 0;text-decoration:none;transition:color 0.15s linear;&:hover{color:#0069ff;}",
          ],
          function (e) {
            return e.active ? "2px solid #0069ff" : "2px solid transparent";
          }
        ),
        ae = K.ZP.li.withConfig({
          displayName:
            "IndexListTabbedHeaderStyles__StyledTabbedHeaderSearchContainer",
          componentId: "sc-1m9ten9-5",
        })(["display:block;flex:1;margin:0;padding:0 16px;text-align:right;"]),
        oe = K.ZP.div.withConfig({
          displayName:
            "IndexListTabbedHeaderStyles__StyledTabbedHeaderSearchBox",
          componentId: "sc-1m9ten9-6",
        })([
          "border:1px solid #e5e8ed;border-radius:4px;display:inline-block;overflow-x:hidden;position:relative;top:5px;",
        ]),
        se = function (e) {
          var t = e.search,
            n = e.initialType,
            r = e.initialTag,
            a = function (e) {
              return e > 0;
            },
            l = (0, s.useState)(!1),
            c = l[0],
            u = l[1],
            d = (0, s.useState)(!1),
            g = d[0],
            f = d[1],
            h = (0, s.useState)(!1),
            m = h[0],
            b = h[1],
            y = (0, s.useState)(!1),
            x = y[0],
            v = y[1],
            w = (0, s.useState)(!1),
            k = w[0],
            P = w[1],
            j = (0, s.useState)(!1),
            _ = j[0],
            A = j[1],
            S = (0, s.useState)(!1),
            Z = S[0],
            C = S[1],
            T = (0, s.useState)(!1),
            O = T[0],
            I = T[1],
            N = (0, s.useState)(!1),
            L = N[0],
            D = N[1],
            R = (0, s.useCallback)(
              (0, i.Z)(
                o().mark(function e() {
                  var t;
                  return o().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            (0, p.V9)({
                              query: "",
                              timeRange: "all",
                              type: "tool",
                              tag: r,
                              hitsPerPage: 0,
                            })
                          );
                        case 2:
                          return (
                            (t = e.sent), e.abrupt("return", u(a(t.total)))
                          );
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              [r]
            ),
            E = (0, s.useCallback)(
              (0, i.Z)(
                o().mark(function e() {
                  var t;
                  return o().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            (0, p.V9)({
                              query: "",
                              timeRange: "all",
                              type: "question",
                              tag: r,
                              hitsPerPage: 0,
                            })
                          );
                        case 2:
                          return (
                            (t = e.sent), e.abrupt("return", f(a(t.total)))
                          );
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              [r]
            ),
            M = (0, s.useCallback)(
              (0, i.Z)(
                o().mark(function e() {
                  var t;
                  return o().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            (0, p.V9)({
                              query: "",
                              timeRange: "all",
                              type: "tutorial",
                              subType: "tutorial",
                              tag: r,
                              hitsPerPage: 0,
                            })
                          );
                        case 2:
                          return (
                            (t = e.sent), e.abrupt("return", b(a(t.total)))
                          );
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              [r]
            ),
            q = (0, s.useCallback)(
              (0, i.Z)(
                o().mark(function e() {
                  var t;
                  return o().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            (0, p.V9)({
                              query: "",
                              timeRange: "all",
                              type: "tutorial",
                              subType: "book",
                              tag: r,
                              hitsPerPage: 0,
                            })
                          );
                        case 2:
                          return (
                            (t = e.sent), e.abrupt("return", v(a(t.total)))
                          );
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              [r]
            ),
            B = (0, s.useCallback)(
              (0, i.Z)(
                o().mark(function e() {
                  var t;
                  return o().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            (0, p.V9)({
                              query: "",
                              timeRange: "all",
                              type: "tutorial",
                              subType: "cheatsheet",
                              tag: r,
                              hitsPerPage: 0,
                            })
                          );
                        case 2:
                          return (
                            (t = e.sent), e.abrupt("return", P(a(t.total)))
                          );
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              [r]
            ),
            Q = (0, s.useCallback)(
              (0, i.Z)(
                o().mark(function e() {
                  var t;
                  return o().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            (0, p.V9)({
                              query: "",
                              timeRange: "all",
                              type: "tutorial",
                              subType: "tech-talk",
                              tag: r,
                              hitsPerPage: 0,
                            })
                          );
                        case 2:
                          return (
                            (t = e.sent), e.abrupt("return", A(a(t.total)))
                          );
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              [r]
            ),
            F = (0, s.useCallback)(
              (0, i.Z)(
                o().mark(function e() {
                  var t;
                  return o().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            (0, p.V9)({
                              query: "",
                              timeRange: "all",
                              type: "tutorial",
                              subType: "conceptual-article",
                              tag: r,
                              hitsPerPage: 0,
                            })
                          );
                        case 2:
                          return (
                            (t = e.sent), e.abrupt("return", C(a(t.total)))
                          );
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              [r]
            ),
            H = (0, s.useCallback)(
              (0, i.Z)(
                o().mark(function e() {
                  var t;
                  return o().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            (0, p.V9)({
                              query: "",
                              timeRange: "all",
                              type: "tutorial",
                              subType: "post",
                              tag: r,
                              hitsPerPage: 0,
                            })
                          );
                        case 2:
                          return (
                            (t = e.sent), e.abrupt("return", I(a(t.total)))
                          );
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              [r]
            ),
            U = (0, s.useCallback)(
              (0, i.Z)(
                o().mark(function e() {
                  var t;
                  return o().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            (0, p.V9)({
                              query: "",
                              timeRange: "all",
                              type: "tutorial",
                              subType: "meetup-kit",
                              tag: r,
                              hitsPerPage: 0,
                            })
                          );
                        case 2:
                          return (
                            (t = e.sent), e.abrupt("return", D(a(t.total)))
                          );
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              [r]
            );
          (0, s.useEffect)(
            function () {
              R(), E(), q(), B(), M(), Q(), F(), H(), U();
            },
            [R, E, q, B, M, Q, F, H, U]
          );
          var V = (0, s.useCallback)(
              function (e) {
                return function () {
                  t.setType(e), t.setSubType("");
                };
              },
              [t]
            ),
            G = (0, s.useCallback)(
              function (e, n) {
                return function () {
                  t.setSubType(e), t.setType(n);
                };
              },
              [t]
            );
          return (0, Y.jsxs)(ee, {
            children: [
              (0, Y.jsx)(te, {
                children: (0, Y.jsxs)(ne, {
                  children: [
                    (0, Y.jsx)(ie, {
                      active: t.type === n,
                      onClick: V(n),
                      children: "All",
                    }),
                    m &&
                      (0, Y.jsx)(ie, {
                        active: "tutorial" === t.subType,
                        onClick: G("tutorial", "tutorial"),
                        children: "Tutorials",
                      }),
                    x &&
                      (0, Y.jsx)(ie, {
                        active: "book" === t.subType,
                        onClick: G("book", "tutorial"),
                        children: "Books",
                      }),
                    k &&
                      (0, Y.jsx)(ie, {
                        active: "cheatsheet" === t.subType,
                        onClick: G("cheatsheet", "tutorial"),
                        children: "Cheatsheets",
                      }),
                    _ &&
                      (0, Y.jsx)(ie, {
                        active: "tech-talk" === t.subType,
                        onClick: G("tech-talk", "tutorial"),
                        children: "Tech Talks",
                      }),
                    Z &&
                      (0, Y.jsx)(ie, {
                        active: "conceptual-article" === t.subType,
                        onClick: G("conceptual-article", "tutorial"),
                        children: "Conceptual Articles",
                      }),
                    O &&
                      (0, Y.jsx)(ie, {
                        active: "post" === t.subType,
                        onClick: G("post", "tutorial"),
                        children: "Posts",
                      }),
                    L &&
                      (0, Y.jsx)(ie, {
                        active: "meetup-kit" === t.subType,
                        onClick: G("meetup-kit", "tutorial"),
                        children: "Meetup Kits",
                      }),
                    g &&
                      (0, Y.jsx)(ie, {
                        active: "question" === t.type,
                        onClick: V("question"),
                        children: "Questions",
                      }),
                    c &&
                      (0, Y.jsx)(ie, {
                        active: "tool" === t.type,
                        onClick: V("tool"),
                        children: "Tools",
                      }),
                    (0, Y.jsx)(ae, {
                      children: (0, Y.jsx)(oe, {
                        children: (0, Y.jsx)($.Z, {
                          placeholder: "Filter Results",
                          value: t.query,
                          onChange: function (e) {
                            return t.setQuery(e.target.value);
                          },
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              (0, Y.jsx)(re, {
                children: (0, Y.jsx)(z.Z, {
                  slim: !0,
                  children: (0, Y.jsx)(J, {
                    records: t.records,
                    search: t,
                    initialTag: r,
                  }),
                }),
              }),
            ],
          });
        },
        le = n(90352),
        ce = n(17801),
        ue = n(93050),
        de = n(17534),
        pe = n(88134),
        ge = K.ZP.div.withConfig({
          displayName: "TagTemplateStyles__StyledTagHeroContainer",
          componentId: "sc-1kbl79f-0",
        })([
          "line-height:1.4;padding:40px 0;position:relative;text-align:center;",
        ]),
        fe = K.ZP.div.withConfig({
          displayName: "TagTemplateStyles__StyledTagHero",
          componentId: "sc-1kbl79f-1",
        })(["padding:0 15px;position:relative;"]),
        he = K.ZP.h2.withConfig({
          displayName: "TagTemplateStyles__StyledTagName",
          componentId: "sc-1kbl79f-2",
        })([
          "color:#031b4e;font-size:36px;font-weight:700;letter-spacing:-1px;margin:0 auto;padding:10px 0 15px;",
        ]),
        me = K.ZP.div.withConfig({
          displayName: "TagTemplateStyles__StyledTagDescription",
          componentId: "sc-1kbl79f-3",
        })([
          "color:#5b6987;display:block;font-size:24px;font-weight:300;margin:0 auto;max-width:780px;padding:0 0 30px;",
        ]),
        be = K.ZP.div.withConfig({
          displayName: "TagTemplateStyles__StyledTagSubscribeContainer",
          componentId: "sc-1kbl79f-4",
        })([
          "align-items:center;background:#f3f5f9;border-radius:3px;color:#5b6987;display:flex;flex-flow:row wrap;font-size:16px;margin:0 auto;max-width:1032px;padding:20px;text-align:left;width:calc(100% - 30px);",
        ]),
        ye = K.ZP.div.withConfig({
          displayName: "TagTemplateStyles__StyledTagSubscribeContent",
          componentId: "sc-1kbl79f-5",
        })([
          "color:#5b6987;flex:1 1 500px;font-size:16px;line-height:1.4;margin:5px;padding-left:14px;position:relative;text-align:left;",
        ]),
        xe = K.ZP.div.withConfig({
          displayName: "TagTemplateStyles__StyledTagSubscribeTitle",
          componentId: "sc-1kbl79f-6",
        })(["color:#031b4e;font-size:18px;font-weight:700;"]),
        ve = K.ZP.div.withConfig({
          displayName: "TagTemplateStyles__StyledTagSubscribeButtons",
          componentId: "sc-1kbl79f-7",
        })([
          "align-items:center;align-self:flex-end;display:flex;font-weight:700;justify-content:space-between;margin:5px;padding-left:45px;",
        ]),
        we = K.ZP.div.withConfig({
          displayName: "TagTemplateStyles__StyledFeatureTutorialsGrid",
          componentId: "sc-1kbl79f-8",
        })(
          [
            "display:grid;gap:30px;grid-template-columns:1fr;height:100%;margin:10px auto;max-width:1032px;padding-top:15px;text-align:left;width:calc(100% - 30px);",
            "{grid-template-columns:60% 1fr;}",
          ],
          (0, de.X)(de.A.tablet, "min")
        ),
        ke = K.ZP.div.withConfig({
          displayName: "TagTemplateStyles__StyledTutorialDescription",
          componentId: "sc-1kbl79f-9",
        })([
          "display:block;font-size:14px;height:62px;line-height:19px;padding-bottom:24px;",
        ]),
        Pe = K.ZP.div.withConfig({
          displayName: "TagTemplateStyles__StyledTutorialCard",
          componentId: "sc-1kbl79f-10",
        })([
          "border-bottom:2px solid #f3f5f9;display:block;padding:0 20px 30px;position:relative;&:last-of-type{border-bottom:none;}",
        ]),
        je = K.ZP.div.withConfig({
          displayName: "TagTemplateStyles__StyledTutorialMainCard",
          componentId: "sc-1kbl79f-11",
        })(
          [
            "display:block;position:relative;img{height:215px;object-fit:cover;width:100%;",
            "{height:295px;}}&:first-child{grid-row:span 2 / auto;height:480px;}",
          ],
          (0, de.X)(de.A.tablet, "min")
        ),
        _e = K.ZP.div.withConfig({
          displayName: "TagTemplateStyles__StyledTutorialMainCardContent",
          componentId: "sc-1kbl79f-12",
        })(
          [
            "background:",
            ";border-radius:5px;box-shadow:0 2px 4px ",
            ";margin:auto;padding:25px;position:relative;top:-100px;width:calc(100% - 30px);span{color:",
            ";font-size:12px;letter-spacing:1px;text-transform:uppercase;}a{color:",
            ";display:block;font-size:26px;font-weight:700;padding:15px 0;text-decoration:none;&:hover{color:",
            ";text-decoration:none;}}",
          ],
          pe.ZP.white,
          (0, pe.E9)(pe.ZP.blueDark, 0.06),
          pe.ZP.blueLight,
          pe.ZP.blueDark,
          pe.ZP.blueLight
        ),
        Ae = K.ZP.div.withConfig({
          displayName: "TagTemplateStyles__StyledTutorialCardContent",
          componentId: "sc-1kbl79f-13",
        })(
          [
            "span{color:",
            ";font-size:12px;letter-spacing:1px;text-transform:uppercase;}a{color:",
            ";display:block;font-size:18px;font-weight:700;padding:15px 0;text-decoration:none;&:hover{color:",
            ";text-decoration:none;}}",
          ],
          pe.ZP.blueLight,
          pe.ZP.blueDark,
          pe.ZP.blueLight
        ),
        Se = K.ZP.div.withConfig({
          displayName: "TagTemplateStyles__StyledTutorialAuthors",
          componentId: "sc-1kbl79f-14",
        })(["color:", ";font-size:13px;line-height:20px;"], pe.ZP.blueDark),
        Ze = x()(
          function () {
            return Promise.resolve().then(n.bind(n, 65861));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [65861];
              },
            },
          }
        ),
        Ce = function (e) {
          var t,
            n = e.record,
            r = e.onRecordUpdate,
            a = e.initialType,
            l = e.initialLanguage,
            c = e.initialTimeRange,
            u = e.initialSortBy,
            p = e.initialTag,
            g = e.initialRecords,
            f = e.initialTotal,
            h = e.initialMoreResults,
            b = e.auth,
            y = (0, q.Z)({
              initialType: a,
              initialLanguage: l,
              initialTimeRange: c,
              initialSortBy: u,
              initialTag: p,
              initialRecords: g,
              initialTotal: f,
              initialMoreResults: h,
            }),
            x = (0, s.useState)(!1),
            v = x[0],
            k = x[1];
          (0, s.useEffect)(
            function () {
              var e;
              v ||
                b.loading ||
                (k(!0),
                y.language === l &&
                  y.setLanguage(
                    (null === (e = b.user) || void 0 === e
                      ? void 0
                      : e.preferred_language) || l
                  ));
            },
            [v, y, l, b]
          ),
            (0, s.useEffect)(
              function () {
                y.setTag(p);
              },
              [p, y]
            );
          var P = (0, s.useCallback)(
              (function () {
                var e = (0, i.Z)(
                  o().mark(function e(t) {
                    var i;
                    return o().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), (0, d.BL)(b.token, n.slug, t);
                          case 2:
                            if ((i = e.sent)) {
                              e.next = 5;
                              break;
                            }
                            return e.abrupt("return");
                          case 5:
                            r(i);
                          case 6:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              [b.token, n.slug, r]
            ),
            j = (0, m.X)(),
            _ = j.subscriptions,
            A = j.handleSubscribeAction,
            Z = j.handleUnsubscribeAction;
          return (0, Y.jsxs)(Y.Fragment, {
            children: [
              (0, Y.jsxs)(ge, {
                children: [
                  (0, Y.jsxs)(fe, {
                    children: [
                      (0, Y.jsx)(he, { children: n.name }),
                      n.description &&
                        (0, Y.jsx)(me, {
                          children: (0, Y.jsx)(Ze, { content: n.description }),
                        }),
                    ],
                  }),
                  (0, Y.jsx)(we, {
                    children:
                      null !== n &&
                      void 0 !== n &&
                      null !== (t = n.featureTutorials) &&
                      void 0 !== t &&
                      t.length
                        ? n.featureTutorials.slice(1).map(function (e, t) {
                            return 0 === t
                              ? (0, Y.jsxs)(
                                  je,
                                  {
                                    children: [
                                      e.header_url
                                        ? (0, Y.jsx)("img", {
                                            alt: "",
                                            title: "",
                                            className: "image",
                                            src: e.header_url,
                                          })
                                        : (0, Y.jsx)("img", {
                                            alt: "",
                                            title: "",
                                            className: "image",
                                            src: ue.Z.src,
                                          }),
                                      (0, Y.jsxs)(_e, {
                                        children: [
                                          (0, Y.jsx)("span", {
                                            children: "featured tutorial",
                                          }),
                                          (0, Y.jsx)(w(), {
                                            href: (0, M.F7)(
                                              e.tutorial_type,
                                              e.slug
                                            ),
                                            passHref: !0,
                                            children: e.title,
                                          }),
                                          (0, Y.jsx)(ke, {
                                            children: (0, E.Z)(
                                              (0, R.Z)(
                                                e.description ||
                                                  e.content ||
                                                  "",
                                                null !==
                                                  e.raw_html_allowed_in_markdown_at,
                                                !0,
                                                !0,
                                                !0
                                              ),
                                              120
                                            ),
                                          }),
                                          (0, Y.jsx)(Se, {
                                            children: (0, Y.jsxs)("p", {
                                              children: [
                                                e.authors.map(function (t, n) {
                                                  return (0,
                                                  Y.jsxs)(Y.Fragment, { children: [t.user ? (0, L.Z)(t.user) : t.user_name, n < e.authors.length - 1 ? ", " : "", n === e.authors.length - 2 ? "and " : ""] });
                                                }),
                                                " \u2022 ".concat((0, N.Z)(e)),
                                              ],
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  },
                                  e.id
                                )
                              : (0, Y.jsx)(
                                  Pe,
                                  {
                                    children: (0, Y.jsxs)(Ae, {
                                      children: [
                                        (0, Y.jsx)("span", {
                                          children: "featured tutorial",
                                        }),
                                        (0, Y.jsx)(w(), {
                                          href: (0, M.F7)(
                                            e.tutorial_type,
                                            e.slug
                                          ),
                                          passHref: !0,
                                          children: e.title,
                                        }),
                                        (0, Y.jsx)(ke, {
                                          children: (0, E.Z)(
                                            (0, R.Z)(
                                              e.description || e.content || "",
                                              null !==
                                                e.raw_html_allowed_in_markdown_at,
                                              !0,
                                              !0,
                                              !0
                                            ),
                                            120
                                          ),
                                        }),
                                        (0, Y.jsx)(Se, {
                                          children: (0, Y.jsxs)("p", {
                                            children: [
                                              e.authors.map(function (t, n) {
                                                return (0,
                                                Y.jsxs)(Y.Fragment, { children: [t.user ? (0, L.Z)(t.user) : t.user_name, n < e.authors.length - 1 ? ", " : "", n === e.authors.length - 2 ? "and " : ""] });
                                              }),
                                              " \u2022 ".concat((0, N.Z)(e)),
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                  },
                                  e.id
                                );
                          })
                        : null,
                  }),
                  (0, Y.jsxs)(be, {
                    children: [
                      (0, Y.jsx)("div", {
                        children:
                          !(0, I.Z)(_, "tag", n.id) &&
                          (0, Y.jsx)(S, { color: "#0069ff" }),
                      }),
                      (0, Y.jsxs)(ye, {
                        children: [
                          (0, Y.jsxs)(xe, {
                            children: [
                              !(0, I.Z)(_, "tag", n.id) && "Subscribe to ",
                              n.name,
                              (0, I.Z)(_, "tag", n.id) &&
                                " subscription active",
                            ],
                          }),
                          (0, Y.jsx)("div", {
                            children: (0, I.Z)(_, "tag", n.id)
                              ? "You will receive email notifications for new publications on ".concat(
                                  n.name,
                                  "."
                                )
                              : "Get notified when new articles on ".concat(
                                  n.name,
                                  " are published."
                                ),
                          }),
                        ],
                      }),
                      (0, Y.jsxs)(ve, {
                        children: [
                          (0, Y.jsx)(le.Z, {
                            url: (0, M.F7)("tag", "".concat(n.slug, ".atom")),
                            children: (0, Y.jsxs)(B.Z, {
                              className: "is-community outlined",
                              children: [
                                "RSS",
                                (0, Y.jsx)(O, {
                                  height: 20,
                                  width: 20,
                                  viewBox: "-2 0 26 26",
                                }),
                              ],
                            }),
                          }),
                          (0, I.Z)(_, "tag", n.id)
                            ? (0, Y.jsx)(B.Z, {
                                onClick: function () {
                                  return Z("tag", n.id);
                                },
                                className: "is-community green",
                                children: "Subscribed",
                              })
                            : (0, Y.jsx)(B.Z, {
                                onClick: function () {
                                  return A("tag", n.id);
                                },
                                className: "is-community blue",
                                children: "Subscribe",
                              }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, Y.jsx)(se, {
                records: y.records,
                search: y,
                initialType: a,
                initialTag: p,
              }),
              (b.permissions.has(D.P.flags.ADMINISTRATOR) ||
                b.permissions.has(D.P.flags.MANAGE_TAGS)) &&
                (0, Y.jsx)(ce.Z, { record: n, update: P, type: "tag" }),
            ],
          });
        },
        Te = n(84089);
      function Oe(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Ie(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Oe(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Oe(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var Ne = "https://www.digitalocean.com/".replace(/\/*$/, ""),
        Le = (function () {
          var e = (0, i.Z)(
            o().mark(function e(t) {
              var n,
                r,
                i,
                a,
                s,
                l,
                c,
                u,
                g,
                f,
                h,
                m = arguments;
              return o().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((n = m.length > 1 && void 0 !== m[1] ? m[1] : null), t)
                      ) {
                        e.next = 3;
                        break;
                      }
                      return e.abrupt("return", {
                        slug: null,
                        tag: null,
                        initialType: null,
                        initialRecords: null,
                        initialTotal: null,
                        initialMoreResults: null,
                        initialTag: null,
                      });
                    case 3:
                      if (null === n || void 0 === n || !n.token) {
                        e.next = 9;
                        break;
                      }
                      return (
                        (e.next = 6),
                        (0, d.iP)(n.token, t)
                          .catch(function () {})
                          .then(function (e) {
                            return e || (0, p.iP)(t).catch(function () {});
                          })
                      );
                    case 6:
                      (e.t0 = e.sent), (e.next = 12);
                      break;
                    case 9:
                      return (e.next = 11), (0, p.iP)(t).catch(function () {});
                    case 11:
                      e.t0 = e.sent;
                    case 12:
                      if ((r = e.t0)) {
                        e.next = 15;
                        break;
                      }
                      return e.abrupt("return", null);
                    case 15:
                      return (
                        (i = "tutorial,question"),
                        (a = "en"),
                        (s = "all"),
                        (l = "newest"),
                        (c = r.name),
                        (e.next = 22),
                        (0, p.V9)({
                          query: "",
                          type: i,
                          language: a,
                          timeRange: s,
                          sortBy: l,
                          tag: c,
                        })
                      );
                    case 22:
                      return (
                        (u = e.sent),
                        (g = u.hits),
                        (f = u.total),
                        (h = u.more),
                        e.abrupt("return", {
                          slug: t,
                          tag: r,
                          initialType: i,
                          initialLanguage: a,
                          initialTimeRange: s,
                          initialSortBy: l,
                          initialTag: c,
                          initialRecords: g,
                          initialTotal: f,
                          initialMoreResults: h,
                        })
                      );
                    case 27:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        De = function (e) {
          var t,
            n,
            r,
            i,
            a,
            o,
            l,
            d,
            p = e.data,
            h = e.auth,
            y = (0, u.useRouter)(),
            x = (0, s.useState)(null === p || void 0 === p ? void 0 : p.slug),
            v = x[0],
            w = x[1],
            k = (0, s.useState)(p),
            P = k[0],
            j = k[1],
            _ = (0, s.useCallback)(function (e) {
              j(function (t) {
                return Ie(Ie({}, t), {}, { tag: Ie(Ie({}, t.tag), e) });
              });
            }, []);
          return (
            (0, s.useEffect)(
              function () {
                var e, t;
                if (
                  v &&
                  (null === y ||
                  void 0 === y ||
                  null === (e = y.query) ||
                  void 0 === e
                    ? void 0
                    : e.slug) !== v
                )
                  return (
                    j(p), void w(null === p || void 0 === p ? void 0 : p.slug)
                  );
                P ||
                  h.loading ||
                  null === y ||
                  void 0 === y ||
                  null === (t = y.query) ||
                  void 0 === t ||
                  !t.slug ||
                  Le(y.query.slug, h).then(function (e) {
                    e && j(e), w(y.query.slug);
                  });
              },
              [
                v,
                p,
                P,
                h,
                null === y ||
                void 0 === y ||
                null === (t = y.query) ||
                void 0 === t
                  ? void 0
                  : t.slug,
              ]
            ),
            y.isFallback || !v || P
              ? (0, Y.jsxs)(b.Z, {
                  children: [
                    (0, Y.jsxs)(c(), {
                      children: [
                        (0, Y.jsx)("title", {
                          children: (0, f.Z)(
                            null === P ||
                              void 0 === P ||
                              null === (n = P.tag) ||
                              void 0 === n
                              ? void 0
                              : n.name,
                            "Tag"
                          ),
                        }),
                        (0, Y.jsx)(
                          "meta",
                          {
                            name: "description",
                            content: (0, g.Z)(
                              null === P ||
                                void 0 === P ||
                                null === (r = P.tag) ||
                                void 0 === r
                                ? void 0
                                : r.description
                            ),
                          },
                          "description"
                        ),
                        (0, Y.jsx)(
                          "meta",
                          {
                            name: "twitter:title",
                            content: (0, f.Z)(
                              null === P ||
                                void 0 === P ||
                                null === (i = P.tag) ||
                                void 0 === i
                                ? void 0
                                : i.name,
                              "Tag"
                            ),
                          },
                          "twitterTitle"
                        ),
                        (0, Y.jsx)(
                          "meta",
                          {
                            name: "twitter:description",
                            content: (0, g.Z)(
                              null === P ||
                                void 0 === P ||
                                null === (a = P.tag) ||
                                void 0 === a
                                ? void 0
                                : a.description
                            ),
                          },
                          "twitterDescription"
                        ),
                        (0, Y.jsx)(
                          "meta",
                          {
                            name: "og:title",
                            content: (0, f.Z)(
                              null === P ||
                                void 0 === P ||
                                null === (o = P.tag) ||
                                void 0 === o
                                ? void 0
                                : o.name,
                              "Tag"
                            ),
                          },
                          "ogTitle"
                        ),
                        (0, Y.jsx)(
                          "meta",
                          {
                            name: "og:description",
                            content: (0, g.Z)(
                              null === P ||
                                void 0 === P ||
                                null === (l = P.tag) ||
                                void 0 === l
                                ? void 0
                                : l.description
                            ),
                          },
                          "ogDescription"
                        ),
                        (0, Y.jsx)("link", {
                          rel: "canonical",
                          href: ""
                            .concat(Ne, "/community/tags/")
                            .concat(
                              null === P ||
                                void 0 === P ||
                                null === (d = P.tag) ||
                                void 0 === d
                                ? void 0
                                : d.slug
                            ),
                        }),
                      ],
                    }),
                    y.isFallback || !v
                      ? (0, Y.jsx)("div", { children: "Loading\u2026" })
                      : (0, Y.jsx)(m.q, {
                          auth: h,
                          children: (0, Y.jsx)(Ce, {
                            auth: h,
                            record: P.tag,
                            onRecordUpdate: _,
                            initialType: P.initialType,
                            initialLanguage: P.initialLanguage,
                            initialTimeRange: P.initialTimeRange,
                            initialSortBy: P.initialSortBy,
                            initialTag: P.initialTag,
                            initialRecords: P.initialRecords,
                            initialTotal: P.initialTotal,
                            initialMoreResults: P.initialMoreResults,
                          }),
                        }),
                  ],
                })
              : (0, Y.jsx)(Te.default, { statusCode: 404 })
          );
        },
        Re = !0,
        Ee = (0, h.Z)(De);
      De.defaultProps = { data: null };
    },
    8765: function (e, t) {
      "use strict";
      t.Z = function (e, t, n) {
        return (
          e.filter(function (e) {
            return e.subscribable_type === t && e.subscribable_id === n;
          }).length > 0
        );
      };
    },
    92552: function (e, t) {
      "use strict";
      t.Z = function (e, t) {
        return ""
          .concat(e || t, " ")
          .concat(
            "Tag" === t ? "tutorials, questions, and resources" : "",
            " | DigitalOcean"
          );
      };
    },
    98261: function (e, t) {
      "use strict";
      t.Z = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          r = { year: "numeric", month: "long", day: "numeric" };
        return (
          t && ((r.hour = "2-digit"), (r.minute = "2-digit")),
          n && (r.timeZone = "UTC"),
          new Date(e).toLocaleDateString("en-US", r)
        );
      };
    },
    28030: function (e, t, n) {
      "use strict";
      var r = n(98261);
      t.Z = function (e) {
        return "undefined" !== typeof e.event_start_at_utc &&
          null !== e.event_start_at_utc
          ? "Starts on ".concat((0, r.Z)(e.event_start_at_utc, !0))
          : null === e.published_at
          ? "Draft updated on ".concat((0, r.Z)(e.updated_at))
          : null === e.last_validated_at ||
            e.last_validated_at === e.published_at
          ? "Published on ".concat((0, r.Z)(e.published_at))
          : "Published on "
              .concat((0, r.Z)(e.published_at), " \xb7 Updated on ")
              .concat((0, r.Z)(e.last_validated_at));
      };
    },
    9596: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/community/tags/[slug]",
        function () {
          return n(79878);
        },
      ]);
    },
    93050: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/intro-to-cloud.d49bc5f7.jpeg",
        height: 357,
        width: 750,
        blurDataURL:
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAAAQEBAAAAAAAAAAAAAAAAAAAABv/aAAwDAQACEAMQAAAAofl//8QAGxABAAEFAQAAAAAAAAAAAAAAAQIAAwUSMoH/2gAIAQEAAT8AvoYWcdTtl6Nf/8QAGREAAQUAAAAAAAAAAAAAAAAAAAIDBDFz/9oACAECAQE/AIVP7KP/xAAYEQACAwAAAAAAAAAAAAAAAAAAAgNCc//aAAgBAwEBPwCkWan/2Q==",
      };
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
        return (t = 9596), e((e.s = t));
        var t;
      }
    );
    var t = e.O();
    _N_E = t;
  },
]);
