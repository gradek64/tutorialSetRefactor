"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4061],
  {
    62080: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var r = n(59499),
        o = n(88134),
        i = n(37797).ZP.button.withConfig({
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
          o.ZP.blueDarker,
          o.ZP.blueDarker,
          o.ZP.blueDarker,
          o.ZP.blueDarker,
          o.ZP.blueDarker,
          o.ZP.greenPricingCard,
          o.ZP.white,
          o.ZP.blueDarker
        ),
        a = n(85893);
      function l(e, t) {
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
            ? l(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var d = function (e) {
        var t = e.children;
        return (0, a.jsx)(i, s(s({}, e), {}, { children: t }));
      };
    },
    34012: function (e, t, n) {
      n.d(t, {
        Ef: function () {
          return d;
        },
        N2: function () {
          return l;
        },
        OP: function () {
          return s;
        },
        g3: function () {
          return i;
        },
        iI: function () {
          return a;
        },
      });
      var r = n(17534),
        o = n(37797),
        i = o.ZP.div.withConfig({
          displayName: "ModalStyles__StyledModalBackground",
          componentId: "sc-9tib0l-0",
        })([
          "background:rgba(229,232,237,0.9);display:none;height:100vh;left:0;position:fixed;top:0;width:100vw;z-index:50;",
        ]),
        a = o.ZP.div.withConfig({
          displayName: "ModalStyles__StyledModalWrapper",
          componentId: "sc-9tib0l-1",
        })([
          "align-items:flex-start;display:none;left:0;margin-left:auto;margin-right:auto;padding:20px;position:absolute;right:0;text-align:left;top:0;z-index:100;",
        ]),
        l = o.ZP.div.withConfig({
          displayName: "ModalStyles__StyledLoginModalContent",
          componentId: "sc-9tib0l-2",
        })(
          [
            "background:#fff;border-radius:6px;display:flex;flex-direction:column;justify-content:space-between;margin:0 auto;max-width:770px;",
            "{width:100%;}",
          ],
          (0, r.X)(r.A.desktop)
        ),
        s = o.ZP.div.withConfig({
          displayName: "ModalStyles__StyledLoginModalBody",
          componentId: "sc-9tib0l-3",
        })(["padding:30px;text-align:center;"]),
        d = (0, o.iv)([
          "display:inline-block;margin-right:16px;margin-top:24px;text-align:center;",
        ]);
    },
    68771: function (e, t, n) {
      var r = n(59499),
        o = n(34012),
        i = n(85893);
      function a(e, t) {
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
            ? a(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : a(Object(n)).forEach(function (t) {
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
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(o.g3, {
              style: t ? { display: "flex" } : { display: "none" },
              onClick: function () {
                return n();
              },
              onKeyDown: function () {
                return n();
              },
            }),
            (0, i.jsx)(
              o.iI,
              l(
                l({}, e),
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
    9751: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return I;
        },
      });
      var r = n(50029),
        o = n(59499),
        i = n(87794),
        a = n.n(i),
        l = n(67294),
        s = n(41664),
        d = n.n(s),
        c = n(33606),
        u = n(58931),
        p = n(88723),
        f = n(18254),
        h = n(88134),
        g = n(37797),
        m = g.ZP.a.withConfig({
          displayName: "ReportAnIssueStyles__StyledReportText",
          componentId: "sc-glghqm-0",
        })(
          [
            "align-items:center;color:",
            ";cursor:pointer;display:flex;font-size:",
            ";justify-content:center;max-width:fit-content;text-decoration:underline;",
          ],
          h.ZP.blue2,
          function (e) {
            return "small" === e.size ? "13px" : "16px";
          }
        ),
        x = g.ZP.div.withConfig({
          displayName: "ReportAnIssueStyles__StyledReportModal",
          componentId: "sc-glghqm-1",
        })(
          [
            "background-color:white;border-radius:6px;display:flex;flex-direction:column;justify-content:center;left:50%;max-width:870px;position:fixed;text-align:start;top:25%;transform:translate(-50%,0);width:100%;z-index:10000;h2,h3,h4{color:",
            ";}a{color:#0080ff;text-decoration:none;}label{color:",
            ";font-size:16px;margin-left:8px;}input{background-color:",
            ";border:none;border-radius:3px;color:",
            ";height:auto;line-height:1;margin-right:0;margin-top:32px;padding:18px 30px 16px;}",
          ],
          h.ZP.blueDark,
          h.ZP.grayDarkest,
          h.ZP.blueLight,
          h.ZP.white
        ),
        y = g.ZP.div.withConfig({
          displayName: "ReportAnIssueStyles__StyledModalBackground",
          componentId: "sc-glghqm-2",
        })(
          [
            "background-color:",
            ";display:",
            ";height:100vh;left:0;position:fixed;top:0;width:100vw;z-index:10000;",
          ],
          (0, h.E9)(h.ZP.blueDark, 0.4),
          function (e) {
            return e.isReportModalOpen ? "block" : "none";
          }
        ),
        b = g.ZP.div.withConfig({
          displayName: "ReportAnIssueStyles__StyledDialogHeader",
          componentId: "sc-glghqm-3",
        })(
          [
            "background:",
            ";border-bottom:1px solid ",
            ";border-radius:6px 6px 0 0;color:",
            ";font-weight:700;line-height:18px;padding:24px;",
          ],
          h.ZP.grayLighter,
          h.ZP.grayLight,
          h.ZP.grayDark
        ),
        v = g.ZP.div.withConfig({
          displayName: "ReportAnIssueStyles__StyledDialogBody",
          componentId: "sc-glghqm-4",
        })([
          "display:flex;flex-direction:column;margin:0 auto 0 0;padding:24px 24px 48px;input{cursor:pointer;}",
        ]),
        j = g.ZP.a.withConfig({
          displayName: "ReportAnIssueStyles__StyledShowReportForm",
          componentId: "sc-glghqm-5",
        })(["color:#0080ff;cursor:pointer;"]),
        w = g.ZP.div.withConfig({
          displayName: "ReportAnIssueStyles__StyledReportEditError",
          componentId: "sc-glghqm-6",
        })(["background:#faa;border-radius:3px;margin:0 0 40px;padding:20px;"]),
        _ = n(27187),
        k = n(29964),
        Z = n(85893);
      function P(e, t) {
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
      function C(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? P(Object(n), !0).forEach(function (t) {
                (0, o.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : P(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var S = function (e) {
          var t = e.reportedType,
            n = e.record,
            o = e.auth,
            i = e.setIsReportModalOpen,
            s = e.onCreateReport,
            p = e.isTriggeredByHelpful,
            f = e.setIsTriggeredByHelpful,
            h = (0, l.useState)(!1),
            g = h[0],
            m = h[1],
            y = (0, l.useState)("other"),
            P = y[0],
            S = y[1],
            O = function (e) {
              return S(e.target.value);
            },
            I = (0, l.useState)({
              reported_type: t.toLowerCase(),
              reported_id: n.id,
              reason: "other",
              description: "",
            }),
            D = I[0],
            T = I[1],
            L = function (e) {
              return T(function (t) {
                return C(C({}, t), e);
              });
            },
            N = (0, l.useState)(!1),
            M = N[0],
            A = N[1],
            R = (0, l.useState)(null),
            B = R[0],
            q = R[1],
            E = (0, l.useCallback)(
              (function () {
                var e = (0, r.Z)(
                  a().mark(function e(t, n) {
                    var r;
                    return a().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ((t.preventDefault(), !M)) {
                              e.next = 3;
                              break;
                            }
                            return e.abrupt("return");
                          case 3:
                            return (
                              A(!0),
                              q(null),
                              (r = C(
                                C({}, D),
                                {},
                                { reason: n },
                                "other" !== n && { description: n }
                              )),
                              (e.next = 8),
                              (0, c.vn)(o.token, r).catch(function (e) {
                                console.error(e), A(!1), q(e.message);
                              })
                            );
                          case 8:
                            if (e.sent) {
                              e.next = 11;
                              break;
                            }
                            return e.abrupt("return");
                          case 11:
                            s(!0), i(!1), f(!1);
                          case 14:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
              [o, D, M, s, f, i]
            );
          return "comment" === t.toLowerCase() || "question" === t.toLowerCase()
            ? (0, Z.jsxs)(x, {
                children: [
                  (0, Z.jsx)(b, {
                    children: (0, Z.jsxs)("h2", {
                      children: ["Report this", " ", t],
                    }),
                  }),
                  (0, Z.jsxs)(v, {
                    children: [
                      (0, Z.jsx)("h2", {
                        children: "What is the reason for this report?",
                      }),
                      (0, Z.jsxs)("form", {
                        onSubmit: function (e) {
                          return E(e, P);
                        },
                        children: [
                          (0, Z.jsxs)("div", {
                            children: [
                              (0, Z.jsx)("input", {
                                type: "radio",
                                id: "spam",
                                name: "dynamic-radio",
                                value: "spam",
                                onChange: O,
                              }),
                              (0, Z.jsxs)("label", {
                                htmlFor: "spam",
                                children: [
                                  "This",
                                  " ",
                                  t.toLowerCase(),
                                  " ",
                                  "is spam",
                                ],
                              }),
                            ],
                          }),
                          (0, Z.jsxs)("div", {
                            children: [
                              (0, Z.jsx)("input", {
                                type: "radio",
                                id: "offensive",
                                name: "dynamic-radio",
                                value: "offensive",
                                onChange: O,
                              }),
                              (0, Z.jsxs)("label", {
                                htmlFor: "offensive",
                                children: [
                                  "This",
                                  " ",
                                  t.toLowerCase(),
                                  " ",
                                  "is offensive",
                                ],
                              }),
                            ],
                          }),
                          (0, Z.jsxs)("div", {
                            children: [
                              (0, Z.jsx)("input", {
                                type: "radio",
                                name: "dynamic-radio",
                                id: "off-topic",
                                value: "off-topic",
                                onChange: O,
                              }),
                              (0, Z.jsxs)("label", {
                                htmlFor: "off-topic",
                                children: [
                                  "This",
                                  " ",
                                  t.toLowerCase(),
                                  " ",
                                  "is off-topic",
                                ],
                              }),
                            ],
                          }),
                          (0, Z.jsxs)("div", {
                            children: [
                              (0, Z.jsx)("input", {
                                type: "radio",
                                id: "other",
                                name: "dynamic-radio",
                                value: "other",
                                onChange: O,
                              }),
                              (0, Z.jsxs)("label", {
                                htmlFor: "other",
                                children: [
                                  "This",
                                  " ",
                                  t.toLowerCase(),
                                  " ",
                                  "should be removed for something else",
                                ],
                              }),
                            ],
                          }),
                          "other" === P &&
                            (0, Z.jsxs)(Z.Fragment, {
                              children: [
                                B &&
                                  (0, Z.jsxs)(w, {
                                    children: [
                                      (0, Z.jsx)("b", {
                                        children:
                                          "An error occurred when saving the report:",
                                      }),
                                      B,
                                    ],
                                  }),
                                (0, Z.jsx)(_.Z, {
                                  children: (0, Z.jsx)(k.Z, {
                                    value: D.description || "",
                                    onChange: function (e) {
                                      return L({
                                        description: e,
                                        reason: "other",
                                      });
                                    },
                                    max: 500,
                                    disabled: M,
                                  }),
                                }),
                              ],
                            }),
                          (0, Z.jsx)("input", {
                            type: "submit",
                            value: "Submit",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              })
            : (0, Z.jsxs)(x, {
                children: [
                  !g &&
                    (0, Z.jsxs)(Z.Fragment, {
                      children: [
                        (0, Z.jsx)(b, {
                          children: (0, Z.jsxs)("h2", {
                            children: [t, " ", "Feedback"],
                          }),
                        }),
                        (0, Z.jsxs)(v, {
                          children: [
                            (0, Z.jsxs)("div", {
                              children: [
                                (0, Z.jsxs)("h3", {
                                  children: [
                                    " ",
                                    p
                                      ? "We're sorry you didn't find this ".concat(
                                          t.toLowerCase(),
                                          " helpful."
                                        )
                                      : "We\u2019re sorry you found an issue with this ".concat(
                                          t.toLowerCase(),
                                          "."
                                        ),
                                  ],
                                }),
                                (0, Z.jsx)("p", {
                                  children:
                                    "Is this something we can fix, or do you need to ask the community for help?",
                                }),
                              ],
                            }),
                            (0, Z.jsxs)("div", {
                              children: [
                                (0, Z.jsx)("h4", {
                                  children: p
                                    ? "We've shared this with our community team."
                                    : "Would you like our community to help you with this ".concat(
                                        t.toLowerCase(),
                                        "?"
                                      ),
                                }),
                                (0, Z.jsx)(d(), {
                                  href: "/community/questions",
                                  children: "Ask a question on our Q&A",
                                }),
                              ],
                            }),
                            (0, Z.jsxs)("div", {
                              children: [
                                (0, Z.jsxs)("h4", {
                                  children: [
                                    "Found a technical issue with the",
                                    " ",
                                    t.toLowerCase(),
                                    "?",
                                  ],
                                }),
                                (0, Z.jsx)(j, {
                                  onClick: function () {
                                    return m(!0);
                                  },
                                  children: "Report it for our team to review",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  g &&
                    (0, Z.jsxs)(Z.Fragment, {
                      children: [
                        (0, Z.jsx)(b, {
                          children: (0, Z.jsxs)("h2", {
                            children: [(0, u.Z)(t), " ", "Feedback"],
                          }),
                        }),
                        (0, Z.jsx)(v, {
                          children: (0, Z.jsxs)("div", {
                            children: [
                              (0, Z.jsxs)("h4", {
                                children: [
                                  "Found a technical issue with this",
                                  " ",
                                  t.toLowerCase(),
                                  "?",
                                ],
                              }),
                              (0, Z.jsx)("p", {
                                children:
                                  "Please provide as much detail as you can about the technical issue that you\u2019ve found in this tool.",
                              }),
                              (0, Z.jsxs)("form", {
                                onSubmit: function (e) {
                                  return E(e, D.reason);
                                },
                                children: [
                                  B &&
                                    (0, Z.jsxs)(w, {
                                      children: [
                                        (0, Z.jsx)("b", {
                                          children:
                                            "An error occurred when saving the report:",
                                        }),
                                        " ",
                                        B,
                                      ],
                                    }),
                                  (0, Z.jsx)(_.Z, {
                                    children: (0, Z.jsx)(k.Z, {
                                      value: D.description || "",
                                      onChange: function (e) {
                                        return L({
                                          description: e,
                                          reason: "other",
                                        });
                                      },
                                      max: 500,
                                      disabled: M,
                                    }),
                                  }),
                                  (0, Z.jsx)("input", {
                                    type: "submit",
                                    value: "Submit",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                ],
              });
        },
        O = function (e) {
          var t = e.isReportModalOpen,
            n = e.setIsReportModalOpen,
            r = e.onReportChange,
            o = e.isTriggeredByHelpful,
            i = e.setIsTriggeredByHelpful,
            a = (0, l.useState)(!1),
            s = a[0],
            d = a[1],
            u = (0, l.useState)(null),
            f = u[0],
            h = u[1],
            g = e.record,
            x = e.reportedType,
            b = e.auth,
            v = e.size,
            j = e.text;
          return (
            (0, l.useEffect)(
              function () {
                null !== b &&
                  void 0 !== b &&
                  b.user &&
                  null !== b &&
                  void 0 !== b &&
                  b.token &&
                  null !== g &&
                  void 0 !== g &&
                  g.id &&
                  x &&
                  !t &&
                  (d(!0),
                  h(null),
                  (0, c.jF)(b.token, b.user.slug, x.toLowerCase(), g.id)
                    .then(function (e) {
                      h(e);
                    })
                    .catch(function () {})
                    .finally(function () {
                      d(!1);
                    }));
              },
              [
                null === b || void 0 === b ? void 0 : b.token,
                null === b || void 0 === b ? void 0 : b.user,
                null === g || void 0 === g ? void 0 : g.id,
                x,
                t,
              ]
            ),
            (0, l.useEffect)(
              function () {
                r(!!f || null);
              },
              [f, r]
            ),
            null !== b && void 0 !== b && b.user && !s
              ? (0, Z.jsxs)(Z.Fragment, {
                  children: [
                    (0, Z.jsx)(y, {
                      isReportModalOpen: t,
                      onClick: function () {
                        n(!1), i(!1);
                      },
                    }),
                    f
                      ? (0, Z.jsx)(m, {
                          size: v,
                          href: (0, p.iD)("flagged", f.id),
                          children: "Reported",
                        })
                      : (0, Z.jsx)(m, {
                          size: v,
                          onClick: function () {
                            return n(!0);
                          },
                          children: j || "Report an issue",
                        }),
                    t &&
                      (0, Z.jsx)(S, {
                        auth: b,
                        record: g,
                        reportedType: x,
                        setIsReportModalOpen: n,
                        onCreateReport: r,
                        isTriggeredByHelpful: o,
                        setIsTriggeredByHelpful: i,
                      }),
                  ],
                })
              : null
          );
        },
        I = (0, f.Z)(O);
      O.defaultProps = {
        onReportChange: function () {},
        isTriggeredByHelpful: !1,
        setIsTriggeredByHelpful: function () {},
      };
    },
    918: function (e, t, n) {
      n.d(t, {
        o: function () {
          return o;
        },
      });
      var r = n(88134),
        o = n(37797).ZP.div.withConfig({
          displayName: "FieldStyles__StyledField",
          componentId: "sc-11w25ym-0",
        })(
          [
            "margin:0 0 40px;input[type='datetime-local'],input[type='date'],input[type='number'],input[type='password'],input[type='text'],input[type='email'],textarea{border:1px solid #e5e5e5;border-radius:3px;color:#333;font-size:17px;font-weight:400;padding:20px;width:100%;&:disabled{background:#ddd;}&::placeholder{color:",
            ";}}",
          ],
          r.ZP.gray5
        );
    },
    27187: function (e, t, n) {
      var r = n(59499),
        o = n(4730),
        i = n(918),
        a = n(85893),
        l = ["children"];
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
      function d(e) {
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
        var t = e.children,
          n = (0, o.Z)(e, l);
        return (0, a.jsx)(i.o, d(d({}, n), {}, { children: t }));
      };
    },
    29964: function (e, t, n) {
      var r = n(68801),
        o = n(78788),
        i = n(85893),
        a = function (e) {
          var t = e.value,
            n = e.onChange,
            a = e.max,
            l = e.disabled,
            s = e.required,
            d = e.label,
            c = e.id,
            u = e.cols,
            p = e.rows,
            f = e.placeholder,
            h = (0, r.Z)(d, c),
            g = h.inputId,
            m = h.labelElm;
          return (0, i.jsxs)(i.Fragment, {
            children: [
              null !== a
                ? (0, i.jsx)(o.Z, { value: t, max: a, children: m })
                : m,
              (0, i.jsx)("textarea", {
                value: t,
                onChange: function (e) {
                  return n(e.target.value);
                },
                maxLength: a,
                disabled: l,
                required: s,
                id: g,
                cols: u,
                rows: p,
                placeholder: f,
              }),
            ],
          });
        };
      (t.Z = a),
        (a.defaultProps = {
          max: null,
          disabled: !1,
          required: !1,
          label: null,
          id: null,
          cols: null,
          rows: null,
          placeholder: "",
        });
    },
    83866: function (e, t, n) {
      n.d(t, {
        To: function () {
          return l;
        },
        Vr: function () {
          return m;
        },
        _e: function () {
          return p;
        },
        ce: function () {
          return a;
        },
        f2: function () {
          return d;
        },
        f_: function () {
          return s;
        },
        o$: function () {
          return f;
        },
        o0: function () {
          return h;
        },
        qp: function () {
          return c;
        },
        qt: function () {
          return g;
        },
        sO: function () {
          return u;
        },
      });
      var r = n(17534),
        o = n(88134),
        i = n(37797),
        a = i.ZP.div.withConfig({
          displayName: "DocumentContentStyles__StyledDocument",
          componentId: "sc-1b8mjjk-0",
        })([
          "display:flex;flex-direction:column;margin:auto;max-width:870px;overflow-wrap:break-word;text-align:left;p{line-height:160%;img{margin:16px 0;max-width:100%;}}",
        ]),
        l =
          ((0, i.iv)(["background-repeat:repeat;"]),
          (0, i.iv)([
            "align-items:center;display:flex;flex-direction:column;justify-content:center;",
          ]),
          (0, i.iv)(["margin:20px auto 20px 0 !important;max-width:670px;"]),
          (0, i.iv)(
            [
              "p,h1,h2,h3,h4,h5,h6,ul,ol{color:",
              ";}strong{font-weight:normal;}",
            ],
            o.ZP.white
          )),
        s = (0, i.iv)(
          [
            "h1,h2,h3,h4,h5,h6{color:",
            " !important;margin-bottom:16px;margin-top:32px;}p,span,ul,ol{color:",
            ";}a{color:",
            ";}",
          ],
          o.ZP.blueDark,
          o.ZP.grayDark,
          o.ZP.blue2
        ),
        d = (0, i.iv)(
          ["position:fixed;top:100px;", "{top:20px;}"],
          (0, r.X)(r.A.desktop)
        ),
        c = i.ZP.div.withConfig({
          displayName: "DocumentContentStyles__StyledModalContent",
          componentId: "sc-1b8mjjk-1",
        })(
          [
            "background-color:",
            ";border-radius:6px;display:flex;flex-direction:column;justify-content:space-between;margin:0 auto;max-width:770px;min-height:575px;",
            "{width:100%;}",
          ],
          o.ZP.white,
          (0, r.X)(r.A.desktop)
        ),
        u = i.ZP.div.withConfig({
          displayName: "DocumentContentStyles__StyledModalHeader",
          componentId: "sc-1b8mjjk-2",
        })(
          [
            "align-items:center;border-bottom:1px solid ",
            ";display:flex;justify-content:space-between;",
          ],
          o.ZP.grayLighter
        ),
        p = (0, i.iv)(["padding:24px;"]),
        f = i.ZP.a.withConfig({
          displayName: "DocumentContentStyles__StyledCloseBtn",
          componentId: "sc-1b8mjjk-3",
        })(
          [
            "cursor:pointer;height:15px;padding:24px 20px;position:relative;width:15px;&::before,&::after{background-color:",
            ";content:' ';height:15px;position:absolute;width:2px;}&::before{transform:rotate(45deg);}&::after{transform:rotate(-45deg);}",
          ],
          o.ZP.grayDark
        ),
        h = (0, i.iv)(
          ["color:", ";height:330px;overflow:scroll;padding:48px 48px 0;"],
          o.ZP.grayDark
        ),
        g = i.ZP.div.withConfig({
          displayName: "DocumentContentStyles__StyledButtonContainer",
          componentId: "sc-1b8mjjk-4",
        })(
          [
            "margin:32px 48px 48px;.is-primary{margin-right:16px;",
            "{margin-top:16px;width:100%;}}",
          ],
          (0, r.X)(r.A.desktop)
        ),
        m = i.ZP.div.withConfig({
          displayName: "DocumentContentStyles__StyledModalTextLink",
          componentId: "sc-1b8mjjk-5",
        })(
          [
            "display:flex;margin:auto;max-width:870px;overflow-wrap:break-word;text-align:left;button{background:transparent;border:none;color:",
            ";display:inline;margin:0;padding:0;text-decoration:underline;&:hover{cursor:pointer;}}",
          ],
          o.ZP.blue2
        );
      i.ZP.p.withConfig({
        displayName: "DocumentContentStyles__StyledRecordMetaItemDate",
        componentId: "sc-1b8mjjk-6",
      })(["color:", ";font-weight:600;margin:8px 0;"], o.ZP.gray4);
    },
    61655: function (e, t, n) {
      var r = n(37797),
        o = n(88134),
        i = n(57054),
        a = n(62080),
        l = n(71778),
        s = n(90352),
        d = n(68771),
        c = n(34012),
        u = n(83866),
        p = n(85893);
      t.Z = function (e) {
        var t = e.needLogIn,
          n = e.setNeedLogIn,
          r = (0, i.Z)();
        return (0, p.jsx)(f, {
          show: t,
          onClose: function () {
            n(!1);
          },
          closeOnBlur: !0,
          showClose: !1,
          children: (0, p.jsxs)(c.N2, {
            children: [
              (0, p.jsxs)(u.sO, {
                children: [
                  (0, p.jsx)(h, {
                    defaultColor: o.ZP.blueDark,
                    renderAs: "h5",
                    children: "Join the Community",
                  }),
                  (0, p.jsx)(u.o$, {
                    onClick: function () {
                      n(!1);
                    },
                  }),
                ],
              }),
              (0, p.jsxs)(c.OP, {
                children: [
                  (0, p.jsx)(g, {
                    renderAs: "h5",
                    children: "Before you can do that",
                  }),
                  "To complete this action, sign in to your Community account or create a new one.",
                  (0, p.jsx)(m, {
                    url: r.signIn,
                    children: (0, p.jsx)(a.Z, { children: "Sign In" }),
                  }),
                  (0, p.jsx)(x, {
                    url: r.signIn,
                    children: (0, p.jsx)(a.Z, { children: "Sign Up" }),
                  }),
                ],
              }),
            ],
          }),
        });
      };
      var f = (0, r.ZP)(d.Z).withConfig({
          displayName: "LogInModalTemplate___StyledModal",
          componentId: "sc-4tqy3l-0",
        })(["", ""], u.f2),
        h = (0, r.ZP)(l.Z).withConfig({
          displayName: "LogInModalTemplate___StyledHeading",
          componentId: "sc-4tqy3l-1",
        })(["", ""], u._e),
        g = (0, r.ZP)(l.Z).withConfig({
          displayName: "LogInModalTemplate___StyledHeading2",
          componentId: "sc-4tqy3l-2",
        })(["", ""], u._e),
        m = (0, r.ZP)(s.Z).withConfig({
          displayName: "LogInModalTemplate___StyledLazyLink",
          componentId: "sc-4tqy3l-3",
        })(["", ""], c.Ef),
        x = (0, r.ZP)(s.Z).withConfig({
          displayName: "LogInModalTemplate___StyledLazyLink2",
          componentId: "sc-4tqy3l-4",
        })(["", ""], c.Ef);
    },
    55707: function (e, t, n) {
      n.d(t, {
        N: function () {
          return s;
        },
        U: function () {
          return l;
        },
      });
      var r = n(67294),
        o = n(61655),
        i = n(85893),
        a = (0, r.createContext)({}),
        l = function (e) {
          var t = e.children,
            n = (0, r.useState)(!1),
            l = n[0],
            s = n[1],
            d = (0, r.useMemo)(
              function () {
                return { needLogIn: l, setNeedLogIn: s };
              },
              [l, s]
            );
          return (0, i.jsxs)(a.Provider, {
            value: d,
            children: [
              l && (0, i.jsx)(o.Z, { needLogIn: l, setNeedLogIn: s }),
              t,
            ],
          });
        },
        s = function () {
          return (0, r.useContext)(a);
        };
    },
    57054: function (e, t, n) {
      var r = n(67294),
        o = n(18254);
      t.Z = function () {
        return (0, r.useContext)(o.V);
      };
    },
    84089: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return C;
          },
        });
      var r = n(67294),
        o = n(9008),
        i = n.n(o),
        a = n(11163),
        l = n(50029),
        s = n(87794),
        d = n.n(s),
        c = n(17053),
        u = n(83454),
        p = (function () {
          var e = (0, l.Z)(
            d().mark(function e() {
              var t, n;
              return d().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        "return",
                        null !== (t = u) &&
                          void 0 !== u &&
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
        f = p,
        h = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : null,
            t = (0, r.useState)(e),
            n = t[0],
            o = t[1],
            i = (0, r.useMemo)(
              function () {
                return n || [];
              },
              [n]
            );
          return (
            (0, r.useEffect)(
              function () {
                n ||
                  f().then(function (e) {
                    return o(e);
                  });
              },
              [n]
            ),
            i
          );
        },
        g = n(99963),
        m = n(41601),
        x = n(34531),
        y = n(58069),
        b = n(37797),
        v = b.ZP.div.withConfig({
          displayName: "ErrorTemplateStyles__StyledWrapper",
          componentId: "sc-gfxdmj-0",
        })([
          "align-items:center;display:flex;flex-direction:column;margin:112px 0 32px;",
        ]),
        j = b.ZP.h1.withConfig({
          displayName: "ErrorTemplateStyles__StyledTitle",
          componentId: "sc-gfxdmj-1",
        })([
          "color:#031b4e;font-size:48px;font-weight:700;letter-spacing:-1px;line-height:1.2;margin:48px 0 16px;text-align:center;",
        ]),
        w = b.ZP.p.withConfig({
          displayName: "ErrorTemplateStyles__StyledMessage",
          componentId: "sc-gfxdmj-2",
        })(["color:#031b4e;font-family:monospace;text-align:center;"]),
        _ = n(85893),
        k = function (e) {
          var t = e.message,
            n = e.secondaryMessage,
            r = e.showAuthButton;
          return (0, _.jsx)(y.Z, {
            children: (0, _.jsxs)(v, {
              children: [
                (0, _.jsxs)(j, {
                  children: [
                    (0, _.jsx)("small", { children: "D" }),
                    ":",
                    (0, _.jsx)("br", {}),
                    (0, _.jsx)("small", { children: t }),
                  ],
                }),
                r
                  ? (0, _.jsx)(x.Z, {
                      url: (0, m.Z)(),
                      className: "is-primary is-rounded",
                      children: "Try again",
                    })
                  : (0, _.jsx)(x.Z, {
                      url: "/",
                      className: "is-primary is-rounded",
                      children: "Go home",
                    }),
                n && (0, _.jsx)(w, { children: n }),
              ],
            }),
          });
        },
        Z = k;
      k.defaultProps = { secondaryMessage: "", showAuthButton: !1 };
      var P = function (e) {
          var t = e.statusCode,
            n = e.authFailure,
            o = e.announcementData,
            l = h(o),
            s = (0, a.useRouter)(),
            d = (0, r.useMemo)(
              function () {
                if (n)
                  return {
                    title: "Authentication error",
                    message: "Something went wrong when signing you in",
                    secondary: ""
                      .concat(s.query.error_code, ": ")
                      .concat(s.query.error_message),
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
              [n, s.query, t]
            ),
            c = (0, r.useMemo)(
              function () {
                return { data: { title: [{ text: d.title || d.message }] } };
              },
              [d]
            );
          return (0, _.jsxs)(g.Z, {
            announcementData: l,
            metaData: c,
            children: [
              (0, _.jsx)(i(), {
                children: (0, _.jsx)("meta", {
                  name: "robots",
                  content: "noindex",
                }),
              }),
              (0, _.jsx)(Z, {
                message: d.message || d.title,
                secondaryMessage: d.secondary,
                showAuthButton: d.showAuthButton,
              }),
            ],
          });
        },
        C = P;
      P.defaultProps = {
        statusCode: null,
        authFailure: !1,
        announcementData: null,
      };
    },
    98261: function (e, t) {
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
    58931: function (e, t) {
      t.Z = function (e) {
        return e[0].toUpperCase() + e.slice(1).toLowerCase();
      };
    },
  },
]);
