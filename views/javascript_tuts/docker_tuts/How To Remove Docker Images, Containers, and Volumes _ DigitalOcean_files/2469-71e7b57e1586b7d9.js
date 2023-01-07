"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2469],
  {
    62080: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var r = n(59499),
        o = n(88134),
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
          o.ZP.blueDarker,
          o.ZP.blueDarker,
          o.ZP.blueDarker,
          o.ZP.blueDarker,
          o.ZP.blueDarker,
          o.ZP.greenPricingCard,
          o.ZP.white,
          o.ZP.blueDarker
        ),
        i = n(85893);
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
      var u = function (e) {
        var t = e.children;
        return (0, i.jsx)(a, s(s({}, e), {}, { children: t }));
      };
    },
    34509: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var r = n(67294),
        o = n(68801),
        a = n(88134),
        i = n(37797).ZP.div.withConfig({
          displayName: "CheckboxStyles__StyledCheckboxes",
          componentId: "sc-hrbs6c-0",
        })(
          [
            "display:flex;flex-wrap:wrap;gap:32px;margin-top:12px;label{align-items:center;display:flex;input{appearance:none;border:1.5px solid ",
            ";border-radius:5px;flex-shrink:0;height:15px;width:15px;&:checked{box-shadow:inset 0 0 0 1.5px ",
            ",inset 0 0 0 15px ",
            ";}}span{margin-left:8px;}}",
          ],
          a.ZP.gray7,
          a.ZP.white,
          a.ZP.blue2
        ),
        l = n(85893),
        s = function (e) {
          var t = e.value,
            n = e.onChange,
            a = e.disabled,
            s = e.label,
            u = e.id,
            c = e.className,
            d = e.multiple,
            p = e.options,
            f = (0, o.Z)(s, u),
            b = f.inputId,
            h = f.labelElm,
            g = (0, r.useRef)(new Set(Array.isArray(t) ? t : null));
          if (d) {
            var m = function (e) {
              var t = e.target;
              g.current.has(t.value)
                ? g.current.delete(t.value)
                : g.current.add(t.value),
                n(Array.from(g.current.keys()));
            };
            return (0, l.jsxs)("div", {
              className: c,
              children: [
                h,
                (0, l.jsx)(i, {
                  children: p.map(function (e) {
                    return (0,
                    l.jsxs)("label", { htmlFor: "".concat(b, "-").concat(e.id), children: [(0, l.jsx)("input", { id: "".concat(b, "-").concat(e.id), type: "checkbox", value: e.value, checked: g.current.has(e.value), onChange: m }), (0, l.jsx)("span", { children: e.label })] }, "".concat(b, "-").concat(e.id));
                  }),
                }),
              ],
            });
          }
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)("input", {
                type: "checkbox",
                checked: t,
                onChange: function (e) {
                  return n(e.target.checked);
                },
                disabled: a,
                id: b,
              }),
              h,
            ],
          });
        },
        u = s;
      s.defaultProps = {
        value: "",
        disabled: !1,
        label: null,
        id: null,
        className: "",
        multiple: !1,
        options: null,
      };
    },
    53677: function (e, t, n) {
      n.d(t, {
        U: function () {
          return l;
        },
        X: function () {
          return s;
        },
      });
      var r = n(59499),
        o = n(88134);
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
      function i(e) {
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
      var l = n(37797).ZP.input.withConfig({
          displayName: "DropdownStyles__StyledTriggerInput",
          componentId: "sc-l46zev-0",
        })(["height:0;opacity:0;position:'absolute';width:0;"]),
        s = {
          menu: function (e) {
            return i(
              i({}, e),
              {},
              {
                border: "1px solid ".concat(o.ZP.grayBorder),
                borderRadius: 10,
                boxShadow: "none",
                padding: 0,
                minWidth: "100%",
                width: "fit-content",
              }
            );
          },
          option: function (e) {
            return i(
              i({}, e),
              {},
              {
                "&:not(:first-of-type)": {
                  borderTop: "1px solid ".concat(o.ZP.grayBorder),
                },
                "&:hover": {
                  boxShadow: "none",
                  backgroundColor: o.ZP.blue2,
                  color: o.ZP.white,
                  cursor: "pointer",
                },
                "&:focus": {
                  boxShadow: "none",
                  backgroundColor: o.ZP.blue2,
                  color: o.ZP.white,
                  cursor: "pointer",
                },
              }
            );
          },
          control: function (e, t) {
            return i(
              i({}, e),
              {},
              {
                background: t.isDisabled ? o.ZP.gray : "default",
                border: "1px solid ".concat(o.ZP.gray7),
                borderRadius: "10px",
                boxSizing: "border-box",
                color: o.ZP.gray4,
                fontSize: 14,
                fontWeight: 500,
                minWidth: "4rem",
                padding:
                  "padding" in t.selectProps.customStyle
                    ? t.selectProps.customStyle.padding
                    : 15,
                "&:hover": { color: o.ZP.blue2, cursor: "pointer" },
                "& input": { padding: "0 !important" },
              }
            );
          },
          dropdownIndicator: function (e, t) {
            return i(
              i({}, e),
              {},
              {
                transform: t.selectProps.menuIsOpen ? "rotate(180deg)" : "none",
                color: "inherit",
                "&:hover": { color: "inherit" },
              }
            );
          },
          singleValue: function (e) {
            return i(i({}, e), {}, { color: "inherit" });
          },
        };
    },
    45737: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return v;
        },
      });
      var r = n(67294),
        o = n(87462),
        a = n(7981),
        i = n(65342),
        l = n(4942),
        s = n(1413),
        u = n(86854),
        c = n(45987),
        d = n(91585),
        p = [
          "defaultOptions",
          "cacheOptions",
          "loadOptions",
          "options",
          "isLoading",
          "onInputChange",
          "filterOption",
        ];
      n(73935), n(73469);
      var f = (0, r.forwardRef)(function (e, t) {
          var n = (function (e) {
              var t = e.defaultOptions,
                n = void 0 !== t && t,
                o = e.cacheOptions,
                a = void 0 !== o && o,
                i = e.loadOptions;
              e.options;
              var f = e.isLoading,
                b = void 0 !== f && f,
                h = e.onInputChange,
                g = e.filterOption,
                m = void 0 === g ? null : g,
                v = (0, c.Z)(e, p),
                x = v.inputValue,
                y = (0, r.useRef)(void 0),
                w = (0, r.useRef)(!1),
                O = (0, r.useState)(Array.isArray(n) ? n : void 0),
                j = (0, u.Z)(O, 2),
                Z = j[0],
                k = j[1],
                P = (0, r.useState)("undefined" !== typeof x ? x : ""),
                S = (0, u.Z)(P, 2),
                _ = S[0],
                C = S[1],
                D = (0, r.useState)(!0 === n),
                I = (0, u.Z)(D, 2),
                N = I[0],
                E = I[1],
                A = (0, r.useState)(void 0),
                q = (0, u.Z)(A, 2),
                T = q[0],
                R = q[1],
                F = (0, r.useState)([]),
                L = (0, u.Z)(F, 2),
                M = L[0],
                Q = L[1],
                V = (0, r.useState)(!1),
                z = (0, u.Z)(V, 2),
                B = z[0],
                U = z[1],
                G = (0, r.useState)({}),
                W = (0, u.Z)(G, 2),
                J = W[0],
                X = W[1],
                H = (0, r.useState)(void 0),
                Y = (0, u.Z)(H, 2),
                K = Y[0],
                $ = Y[1],
                ee = (0, r.useState)(void 0),
                te = (0, u.Z)(ee, 2),
                ne = te[0],
                re = te[1];
              a !== ne && (X({}), re(a)),
                n !== K && (k(Array.isArray(n) ? n : void 0), $(n)),
                (0, r.useEffect)(function () {
                  return (
                    (w.current = !0),
                    function () {
                      w.current = !1;
                    }
                  );
                }, []);
              var oe = (0, r.useCallback)(
                function (e, t) {
                  if (!i) return t();
                  var n = i(e, t);
                  n &&
                    "function" === typeof n.then &&
                    n.then(t, function () {
                      return t();
                    });
                },
                [i]
              );
              (0, r.useEffect)(function () {
                !0 === n &&
                  oe(_, function (e) {
                    w.current && (k(e || []), E(!!y.current));
                  });
              }, []);
              var ae = (0, r.useCallback)(
                  function (e, t) {
                    var n = (0, d.L)(e, t, h);
                    if (!n)
                      return (
                        (y.current = void 0),
                        C(""),
                        R(""),
                        Q([]),
                        E(!1),
                        void U(!1)
                      );
                    if (a && J[n]) C(n), R(n), Q(J[n]), E(!1), U(!1);
                    else {
                      var r = (y.current = {});
                      C(n),
                        E(!0),
                        U(!T),
                        oe(n, function (e) {
                          w &&
                            r === y.current &&
                            ((y.current = void 0),
                            E(!1),
                            R(n),
                            Q(e || []),
                            U(!1),
                            X(
                              e
                                ? (0, s.Z)(
                                    (0, s.Z)({}, J),
                                    {},
                                    (0, l.Z)({}, n, e)
                                  )
                                : J
                            ));
                        });
                    }
                  },
                  [a, oe, T, J, h]
                ),
                ie = B ? [] : _ && T ? M : Z || [];
              return (0, s.Z)(
                (0, s.Z)({}, v),
                {},
                {
                  options: ie,
                  isLoading: N || b,
                  onInputChange: ae,
                  filterOption: m,
                }
              );
            })(e),
            f = (0, i.u)(n);
          return r.createElement(a.S, (0, o.Z)({ ref: t }, f));
        }),
        b = n(68801),
        h = n(53677),
        g = n(85893),
        m = function (e) {
          var t = e.loadOptions,
            n = e.value,
            o = e.onChange,
            a = e.disabled,
            i = e.readonly,
            l = e.label,
            s = e.id,
            u = e.className,
            c = e.style,
            d = e.isMulti,
            p = e.name,
            m = e.required,
            v = (0, b.Z)(l, s),
            x = v.inputId,
            y = v.labelElm,
            w = (0, r.useRef)();
          return (0, g.jsxs)("div", {
            className: u,
            children: [
              y,
              (0, g.jsx)(f, {
                ref: w,
                name: p,
                styles: h.X,
                loadOptions: t,
                value: n,
                onChange: o,
                isDisabled: a,
                readonly: i,
                id: x,
                components: {
                  IndicatorSeparator: function () {
                    return null;
                  },
                },
                customStyle: c,
                classNamePrefix: "react-select",
                isMulti: d,
                defaultOptions: !0,
              }),
              !a &&
                !i &&
                (0, g.jsx)(h.U, {
                  tabIndex: -1,
                  autoComplete: "off",
                  value: d ? n : n.value || "",
                  onChange: function () {},
                  onFocus: function () {
                    return w.current.focus();
                  },
                  required: m,
                }),
            ],
          });
        },
        v = m;
      m.defaultProps = {
        value: null,
        disabled: !1,
        label: null,
        id: null,
        className: "",
        style: {},
        isMulti: !1,
        readonly: !1,
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
        a = n(918),
        i = n(85893),
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
      function u(e) {
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
        return (0, i.jsx)(a.o, u(u({}, n), {}, { children: t }));
      };
    },
    22820: function (e, t, n) {
      var r = n(50029),
        o = n(87794),
        a = n.n(o),
        i = n(67294),
        l = n(33606),
        s = n(17053),
        u = n(45737),
        c = n(85893),
        d = function (e) {
          var t = e.onChange,
            n = e.auth,
            o = e.disabled,
            d = e.value,
            p = e.label,
            f = e.id,
            b = e.name,
            h = e.required,
            g = e.type,
            m = void 0 === g ? "tag" : g,
            v = e.isMulti,
            x = void 0 === v || v,
            y = (0, i.useCallback)(
              (function () {
                var e = (0, r.Z)(
                  a().mark(function e(t) {
                    var r;
                    return a().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (null === n || void 0 === n || !n.token) {
                              e.next = 6;
                              break;
                            }
                            return (
                              (e.next = 3),
                              (0, l.hp)(n.token, t, m)
                                .catch(function () {})
                                .then(function (e) {
                                  return (
                                    e || (0, s.hp)(t, m).catch(function () {})
                                  );
                                })
                            );
                          case 3:
                            (e.t0 = e.sent), (e.next = 9);
                            break;
                          case 6:
                            return (
                              (e.next = 8),
                              (0, s.hp)(t, m).catch(function () {})
                            );
                          case 8:
                            e.t0 = e.sent;
                          case 9:
                            return (
                              (r = e.t0),
                              e.abrupt(
                                "return",
                                r.map(function (e) {
                                  return { label: e.name, value: e.slug };
                                })
                              )
                            );
                          case 11:
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
              [n.token, m]
            );
          return (0, c.jsx)(u.Z, {
            id: f,
            label: p,
            name: b,
            value: d,
            onChange: t,
            loadOptions: y,
            isMulti: x,
            required: h,
            disabled: o,
          });
        };
      (d.defaultProps = {
        disabled: null,
        value: null,
        label: null,
        onChange: null,
      }),
        (t.Z = d);
    },
    20498: function (e, t, n) {
      var r = n(68801),
        o = n(78788),
        a = n(85893),
        i = function (e) {
          var t = e.value,
            n = e.name,
            i = e.onChange,
            l = e.max,
            s = e.min,
            u = e.placeholder,
            c = e.disabled,
            d = e.required,
            p = e.label,
            f = e.id,
            b = e.inputRef,
            h = (0, r.Z)(p, f),
            g = h.inputId,
            m = h.labelElm;
          return (0, a.jsxs)(a.Fragment, {
            children: [
              null !== l || null !== s
                ? (0, a.jsx)(o.Z, { value: t, min: s, max: l, children: m })
                : m,
              (0, a.jsx)("input", {
                name: n,
                ref: b,
                type: "text",
                value: t,
                onChange: function (e) {
                  return i(e.target.value);
                },
                minLength: s,
                maxLength: l,
                placeholder: u,
                disabled: c,
                required: d,
                id: g,
              }),
            ],
          });
        };
      (t.Z = i),
        (i.defaultProps = {
          max: null,
          min: null,
          placeholder: null,
          disabled: !1,
          required: !1,
          label: null,
          id: null,
          inputRef: null,
        });
    },
    2469: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return C;
        },
      });
      var r = n(50029),
        o = n(59499),
        a = n(87794),
        i = n.n(a),
        l = n(67294),
        s = n(11163),
        u = n(33606),
        c = n(89136),
        d = n(5918),
        p = n(76427),
        f = n(57054),
        b = n(62080),
        h = n(34531),
        g = n(71778),
        m = n(34509),
        v = n(27187),
        x = n(77726),
        y = n(95784),
        w = n(22820),
        O = n(20498),
        j = n(37797),
        Z = j.ZP.form.withConfig({
          displayName: "QuestionFormTemplateStyles__StyledForm",
          componentId: "sc-1qrxt3e-0",
        })(["width:100%;"]),
        k = j.ZP.div.withConfig({
          displayName: "QuestionFormTemplateStyles__StyledQuestionFormError",
          componentId: "sc-1qrxt3e-1",
        })(["background:#faa;border-radius:3px;margin:0 0 40px;padding:20px;"]),
        P = n(85893);
      function S(e, t) {
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
      function _(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? S(Object(n), !0).forEach(function (t) {
                (0, o.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : S(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var C = function (e) {
        var t,
          n = e.record,
          o = (0, f.Z)(),
          a = (0, l.useRef)(null),
          j = !!n.id,
          S = (0, s.useRouter)();
        null !== (t = n.tags) &&
          void 0 !== t &&
          t.length &&
          (n.tags = n.tags.map(function (e) {
            return { label: e.name, value: e.slug };
          }));
        var C = (0, l.useMemo)(
            function () {
              return j
                ? "new_question_".concat(
                    null === n || void 0 === n ? void 0 : n.id
                  )
                : "new_question_";
            },
            [n, j]
          ),
          D = (0, l.useState)(n),
          I = D[0],
          N = D[1],
          E = function (e) {
            N(function (t) {
              return _(_({}, t), e);
            });
            var t,
              n = _(_({}, I), e);
            j ||
              ((n.title ||
                n.content ||
                (null !== (t = n.tags) && void 0 !== t && t.length)) &&
              0 !== Object.keys(e).length
                ? (0, c.Pp)(C, _(_({}, I), e))
                : (0, c.DC)(C));
          },
          A = (0, l.useState)(!!n.comments_locked_at),
          q = A[0],
          T = A[1],
          R = (0, l.useState)(!!n.answers_locked_at),
          F = R[0],
          L = R[1],
          M = (0, l.useState)(!!n.new_answers_locked_at),
          Q = M[0],
          V = M[1],
          z = (0, l.useState)(!1),
          B = z[0],
          U = z[1],
          G = (0, l.useState)(null),
          W = G[0],
          J = G[1],
          X = (0, l.useState)(!1),
          H = X[0],
          Y = X[1];
        (0, l.useEffect)(
          function () {
            var e = (0, c.L2)(C);
            e &&
              !j &&
              N(function (t) {
                return _(_({}, t), e);
              });
          },
          [C, j]
        );
        var K = (0, l.useState)((0, d.Z)())[0],
          $ = (function () {
            var e = (0, r.Z)(
              i().mark(function e(t) {
                var r, a, l, s;
                return i().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if ((t.preventDefault(), !B)) {
                          e.next = 3;
                          break;
                        }
                        return e.abrupt("return");
                      case 3:
                        if (
                          (U(!0),
                          J(null),
                          (r = {}),
                          (o.permissions.has(p.P.flags.ADMINISTRATOR) ||
                            o.permissions.has(p.P.flags.MANAGE_QUESTIONS)) &&
                            (r = {
                              comments_locked_at: q
                                ? I.comments_locked_at || new Date()
                                : null,
                              answers_locked_at: F
                                ? I.answers_locked_at || new Date()
                                : null,
                              new_answers_locked_at: Q
                                ? I.new_answers_locked_at || new Date()
                                : null,
                            }),
                          (a = _(
                            _(_({}, I), r),
                            {},
                            {
                              tags: (I.tags || []).map(function (e) {
                                return e.value;
                              }),
                              last_validated_at: H
                                ? new Date()
                                : I.last_validated_at,
                            }
                          )),
                          (l = function (e) {
                            console.error(e),
                              U(!1),
                              J(e.message),
                              window.scrollTo(0, 0);
                          }),
                          !j)
                        ) {
                          e.next = 15;
                          break;
                        }
                        return (
                          (e.next = 12), (0, u.ZY)(o.token, n.slug, a).catch(l)
                        );
                      case 12:
                        (e.t0 = e.sent), (e.next = 18);
                        break;
                      case 15:
                        return (e.next = 17), (0, u.CB)(o.token, a).catch(l);
                      case 17:
                        e.t0 = e.sent;
                      case 18:
                        if ((s = e.t0)) {
                          e.next = 21;
                          break;
                        }
                        return e.abrupt("return");
                      case 21:
                        return (
                          E({}),
                          (e.next = 24),
                          S.push("/community/questions/".concat(s.slug))
                        );
                      case 24:
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
          ee = (0, l.useCallback)(
            function () {
              a.current &&
                (a.current.checkValidity()
                  ? a.current.dispatchEvent(
                      new Event("submit", { cancelable: !0, bubbles: !0 })
                    )
                  : a.current.reportValidity());
            },
            [a]
          );
        return (
          (0, l.useEffect)(
            function () {
              H && ee();
            },
            [ee, H]
          ),
          (0, P.jsxs)(Z, {
            onSubmit: $,
            ref: a,
            children: [
              W &&
                (0, P.jsxs)(k, {
                  children: [
                    (0, P.jsx)("b", {
                      children: "An error occurred when saving the question:",
                    }),
                    " ",
                    W,
                  ],
                }),
              (0, P.jsx)(v.Z, {
                children: (0, P.jsx)(O.Z, {
                  name: "title",
                  label: (0, P.jsx)(x.Z, {
                    label: "Question Title",
                    sup: "(required)",
                    desc: "Enter 15 characters or more.",
                  }),
                  value: I.title || "",
                  onChange: function (e) {
                    return E({ title: e });
                  },
                  min: 15,
                  max: 140,
                  disabled: B,
                  placeholder:
                    "How To Set Up Automatic Deployment with Git with a VPS",
                  required: !0,
                }),
              }),
              (0, P.jsxs)(v.Z, {
                children: [
                  (0, P.jsx)(x.Z, {
                    label: "Question Body",
                    sup: "(required)",
                    desc: "Write your full question here, including any relevant information like operating system, error logs, and steps taken.",
                    htmlFor: K,
                  }),
                  (0, P.jsx)(y.Z, {
                    name: "content",
                    value: I.content || "",
                    onChange: function (e) {
                      return E({ content: e });
                    },
                    disabled: B,
                    required: !0,
                    placeholder:
                      "As I was following through the tutorial on the same topic (https://www.digitalocean.com/community/tutorials/how-to-set-up-automatic-deployment-with-git-with-a-vps), I successfully established a git repo at the vps, I even added remote live by git `remote add live ssh://myuser@mydomain.com/var/repo/site.git` I already have local git setup I regularly use git with my team.",
                    id: K,
                  }),
                ],
              }),
              (0, P.jsx)(v.Z, {
                children: (0, P.jsx)(w.Z, {
                  name: "tags",
                  label: (0, P.jsx)(x.Z, {
                    label: "Tags and Topics",
                    sup: "(required)",
                  }),
                  onChange: function (e) {
                    return E({ tags: e });
                  },
                  disabled: B,
                  auth: o,
                  value: I.tags || [],
                }),
              }),
              (o.permissions.has(p.P.flags.ADMINISTRATOR) ||
                o.permissions.has(p.P.flags.MANAGE_QUESTIONS)) &&
                (0, P.jsxs)(P.Fragment, {
                  children: [
                    (0, P.jsx)(g.Z, {
                      renderAs: "h4",
                      children: "Admin Settings",
                    }),
                    (0, P.jsx)(v.Z, {
                      children: (0, P.jsx)(m.Z, {
                        label:
                          "Lock all new comments (On the question AND answers)",
                        value: q,
                        onChange: function (e) {
                          return T(e);
                        },
                        disabled: B,
                      }),
                    }),
                    (0, P.jsx)(v.Z, {
                      children: (0, P.jsx)(m.Z, {
                        label:
                          "Lock answers and answer threads (No new answers or comments on answers)",
                        value: F,
                        onChange: function (e) {
                          return L(e);
                        },
                        disabled: B,
                      }),
                    }),
                    (0, P.jsx)(v.Z, {
                      children: (0, P.jsx)(m.Z, {
                        label: "Lock new answers",
                        value: Q,
                        onChange: function (e) {
                          return V(e);
                        },
                        disabled: B,
                      }),
                    }),
                  ],
                }),
              null !== o && void 0 !== o && o.token
                ? (0, P.jsx)(b.Z, {
                    className: "is-outlined",
                    disabled: B,
                    children: j ? "Save Question" : "Post the Question",
                  })
                : (0, P.jsx)(h.Z, {
                    className: "is-outlined",
                    url: o.signIn,
                    children: "Login to Post the Question",
                  }),
              (o.permissions.has(p.P.flags.ADMINISTRATOR) ||
                o.permissions.has(p.P.flags.MANAGE_QUESTIONS)) &&
                (0, P.jsx)(b.Z, {
                  type: "button",
                  className: "is-primary",
                  onClick: function () {
                    return Y(!0);
                  },
                  disabled: B,
                  children: "Save and Validate",
                }),
            ],
          })
        );
      };
    },
    57054: function (e, t, n) {
      var r = n(67294),
        o = n(18254);
      t.Z = function () {
        return (0, r.useContext)(o.V);
      };
    },
    89136: function (e, t, n) {
      n.d(t, {
        DC: function () {
          return a;
        },
        L2: function () {
          return r;
        },
        Pp: function () {
          return o;
        },
      });
      var r = function (e) {
          return window.localStorage.getItem(e)
            ? JSON.parse(window.localStorage.getItem(e))
            : null;
        },
        o = function (e, t) {
          window.localStorage.setItem(e, JSON.stringify(t));
        },
        a = function (e) {
          window.localStorage.getItem(e) && window.localStorage.removeItem(e);
        };
    },
  },
]);
