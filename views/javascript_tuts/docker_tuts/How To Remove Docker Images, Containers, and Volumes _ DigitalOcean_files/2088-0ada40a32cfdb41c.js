"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2088],
  {
    1443: function (e, n, t) {
      t.d(n, {
        Fx: function () {
          return s;
        },
        YV: function () {
          return c;
        },
        dV: function () {
          return d;
        },
        ft: function () {
          return a;
        },
        xu: function () {
          return u;
        },
      });
      var r = t(17534),
        o = t(37797),
        i = t(3218),
        l = t(90352),
        a = o.ZP.div.withConfig({
          displayName: "IndexHeaderStyles__StyledIndexHeader",
          componentId: "sc-1qr71jk-0",
        })([
          "align-items:center;display:flex;flex-flow:row wrap;margin-top:16px;",
        ]),
        s = o.ZP.div.withConfig({
          displayName: "IndexHeaderStyles__StyledIndexHeaderMessage",
          componentId: "sc-1qr71jk-1",
        })(["color:#405379;font-size:14px;font-weight:500;"]),
        c = o.ZP.div.withConfig({
          displayName: "IndexHeaderStyles__StyledIndexHeaderDropdowns",
          componentId: "sc-1qr71jk-2",
        })(
          [
            "display:flex;flex-direction:row;margin:0 0 0 auto;",
            "{margin:16px 0 0 16px;}",
            "{margin:16px 0 0;}",
          ],
          (0, r.X)(r.A.tablet),
          (0, r.X)(r.A.largePhone)
        ),
        d = (0, o.ZP)(i.Z).withConfig({
          displayName: "IndexHeaderStyles__StyledIndexHeaderDropdown",
          componentId: "sc-1qr71jk-3",
        })(["margin:0 6px;"]),
        u = (0, o.ZP)(l.Z).withConfig({
          displayName: "IndexHeaderStyles__StyledLazyLink",
          componentId: "sc-1qr71jk-4",
        })(["margin-left:32px;"]);
    },
    88400: function (e, n, t) {
      var r = t(88723),
        o = t(1443),
        i = t(85893),
        l = function (e) {
          var n = e.message,
            t = e.dropdowns,
            l = e.button;
          return (0, i.jsxs)(o.ft, {
            children: [
              (0, i.jsx)(o.Fx, { children: n }),
              l &&
                (0, i.jsx)(o.xu, {
                  className: "button-link is-primary is-small is-squared",
                  url: (0, r.F7)("question", "new"),
                  children: l,
                }),
              (0, i.jsx)(o.YV, { children: t }),
            ],
          });
        };
      (n.Z = l), (l.defaultProps = { message: null });
    },
    13688: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return _;
        },
      });
      var r = t(37797),
        o = t(88723),
        i = t(41664),
        l = t.n(i),
        a = function (e) {
          var n = Math.round((new Date() - new Date(e)) / 864e5),
            t = new Intl.RelativeTimeFormat("en-us", { style: "long" }),
            r = n,
            o = "day";
          switch (!0) {
            case n > 365:
              (r = Math.round(n / 365)), (o = "year");
              break;
            case n > 30 && n < 365:
              (r = Math.round(n / 30)), (o = "month");
          }
          return "".concat(t.format(-r, o));
        },
        s = t(4620),
        c = t(21474),
        d = t(51934),
        u = t(57805),
        p = t(75669),
        f = t(71778),
        y = t(74426),
        g = t(88134),
        m = t(87288),
        x = t(90352),
        h = r.ZP.a.withConfig({
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
        b = r.ZP.span.withConfig({
          displayName: "IndexListStyles__StyledIndexItemEyeBrow",
          componentId: "sc-d8xz3c-1",
        })(
          [
            "color:",
            ";display:inline-block;font-size:12px;font-weight:500;letter-spacing:1px;margin-bottom:9px;text-transform:uppercase;",
          ],
          g.ZP.blueLight
        ),
        w = (0, r.iv)(
          [
            "color:",
            ";font-family:",
            ";font-size:18px;font-weight:600;line-height:28px;margin:4px 0 0;a{color:",
            ";text-decoration:none;}",
          ],
          g.ZP.gray2,
          (0, m.Z)("primary"),
          g.ZP.blueDark
        ),
        v = r.ZP.div.withConfig({
          displayName: "IndexListStyles__StyledIndexMetaSection",
          componentId: "sc-d8xz3c-2",
        })([
          "color:#333;font-size:13px;font-weight:500;line-height:1.6;margin:14px 0 0;",
        ]),
        P = r.ZP.span.withConfig({
          displayName: "IndexListStyles__StyledIndexMetaItem",
          componentId: "sc-d8xz3c-3",
        })(["margin-right:0;"]),
        j = r.ZP.div.withConfig({
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
          (0, m.Z)("code"),
          "/_next/static/media/blueCheckCirlce.c5b781c0.svg"
        ),
        Z = (0, r.ZP)(x.Z).withConfig({
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
        S = t(85893),
        O = function (e) {
          var n = e.records,
            t = e.onClickTag,
            r = e.showEyebrow,
            i = e.useSubTypeLink,
            f = function (e) {
              return (
                !(!(0, d.Kn)(e) || !Object.keys(e).length) ||
                !("string" !== typeof e || !e.length)
              );
            };
          return (0, S.jsx)(S.Fragment, {
            children: n.map(function (e) {
              var n, d;
              return (0, S.jsx)(
                l(),
                {
                  href:
                    "comment" === e.type && e.top_level
                      ? (0, o.F7)(e.top_level_type, e.top_level.slug, e.id)
                      : "/community/"
                          .concat(
                            (0, u.Z)(i && e.subType ? e.subType : e.type),
                            "/"
                          )
                          .concat(e.slug),
                  passHref: !0,
                  children: (0, S.jsxs)(h, {
                    children: [
                      r &&
                        (0, S.jsx)(b, {
                          children:
                            (null === e ||
                            void 0 === e ||
                            null === (n = e.series) ||
                            void 0 === n
                              ? void 0
                              : n.length) > 0
                              ? e.series.map(function (e) {
                                  var n, t, r, i, l;
                                  return (0,
                                  S.jsx)(Z, { url: (0, o.F7)("tutorial_series", null === (t = e[0]) || void 0 === t || null === (r = t.tutorialSeries) || void 0 === r ? void 0 : r.slug), children: "Series:\n                      ".concat(null === (i = e[0]) || void 0 === i || null === (l = i.tutorialSeries) || void 0 === l ? void 0 : l.title, "\n                      ") }, null === (n = e[0]) || void 0 === n ? void 0 : n.tutorialSeries.id);
                                })
                              : (0, p.Z)(e.relation || e.subType || e.type),
                        }),
                      (0, S.jsx)(I, {
                        renderAs: "h3",
                        small: !0,
                        children:
                          (null === e ||
                          void 0 === e ||
                          null === (d = e.top_level) ||
                          void 0 === d
                            ? void 0
                            : d.title) || e.title,
                      }),
                      (0, S.jsxs)(v, {
                        children: [
                          "question" === e.type && f(e.acceptedAnswer)
                            ? (0, S.jsx)(j, {
                                children: "Accepted Answer Available",
                              })
                            : f(e.pinnedAnswer) &&
                              (0, S.jsx)(j, {
                                children: "Pinned Answer Available",
                              }),
                          "question" === e.type &&
                            (0, S.jsxs)(S.Fragment, {
                              children: [
                                (0, S.jsx)(P, {
                                  children: e.answers
                                    ? (0, s.M)("answer", e.answers)
                                    : "No answers yet",
                                }),
                                (0, S.jsx)(P, { children: " \u2022 " }),
                              ],
                            }),
                          (0, S.jsx)(P, {
                            children: a(1e3 * e.timestamp || e.updated_at),
                          }),
                          (0, S.jsx)(P, { children: " \u2022 " }),
                          (0, S.jsxs)(P, {
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
                      (0, S.jsx)(v, {
                        children: (0, S.jsx)(P, {
                          children: e.tags.map(function (e) {
                            return (0, S.jsx)(
                              y.Z,
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
        _ = O;
      O.defaultProps = {
        onClickTag: null,
        showEyebrow: !1,
        useSubTypeLink: !1,
      };
      var I = (0, r.ZP)(f.Z).withConfig({
        displayName: "IndexList___StyledHeading",
        componentId: "sc-16hmd7e-0",
      })(["", ""], w);
    },
    74426: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var r = t(41664),
        o = t.n(r),
        i = t(88134),
        l = t(37797).ZP.span.withConfig({
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
          i.ZP.gray9,
          i.ZP.gray4,
          24 / 14,
          i.ZP.blueHover,
          i.ZP.white
        ),
        a = t(85893),
        s = function (e) {
          var n = e.tag,
            t = e.onClick,
            r = e.url;
          return r
            ? (0, a.jsx)(o(), {
                href: r,
                passHref: !0,
                children: (0, a.jsx)(l, {
                  as: "a",
                  title: n.name ? n.name : n,
                  children: n.name ? n.name : n,
                }),
              })
            : (0, a.jsx)(l, {
                onClick:
                  t &&
                  function (e) {
                    e.preventDefault(), t(n);
                  },
                children: n.name ? n.name : n,
              });
        },
        c = s;
      s.defaultProps = { onClick: null, url: "" };
    },
    53677: function (e, n, t) {
      t.d(n, {
        U: function () {
          return a;
        },
        X: function () {
          return s;
        },
      });
      var r = t(59499),
        o = t(88134);
      function i(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function l(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? i(Object(t), !0).forEach(function (n) {
                (0, r.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : i(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      var a = t(37797).ZP.input.withConfig({
          displayName: "DropdownStyles__StyledTriggerInput",
          componentId: "sc-l46zev-0",
        })(["height:0;opacity:0;position:'absolute';width:0;"]),
        s = {
          menu: function (e) {
            return l(
              l({}, e),
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
            return l(
              l({}, e),
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
          control: function (e, n) {
            return l(
              l({}, e),
              {},
              {
                background: n.isDisabled ? o.ZP.gray : "default",
                border: "1px solid ".concat(o.ZP.gray7),
                borderRadius: "10px",
                boxSizing: "border-box",
                color: o.ZP.gray4,
                fontSize: 14,
                fontWeight: 500,
                minWidth: "4rem",
                padding:
                  "padding" in n.selectProps.customStyle
                    ? n.selectProps.customStyle.padding
                    : 15,
                "&:hover": { color: o.ZP.blue2, cursor: "pointer" },
                "& input": { padding: "0 !important" },
              }
            );
          },
          dropdownIndicator: function (e, n) {
            return l(
              l({}, e),
              {},
              {
                transform: n.selectProps.menuIsOpen ? "rotate(180deg)" : "none",
                color: "inherit",
                "&:hover": { color: "inherit" },
              }
            );
          },
          singleValue: function (e) {
            return l(l({}, e), {}, { color: "inherit" });
          },
        };
    },
    3218: function (e, n, t) {
      var r = t(67294),
        o = t(23157),
        i = t(68801),
        l = t(53677),
        a = t(85893),
        s = function (e) {
          var n = e.options,
            t = e.value,
            s = e.onChange,
            c = e.disabled,
            d = e.readonly,
            u = e.label,
            p = e.id,
            f = e.className,
            y = e.style,
            g = e.required,
            m = (0, i.Z)(u, p),
            x = m.inputId,
            h = m.labelElm,
            b = (0, r.useRef)();
          return (0, a.jsxs)("div", {
            className: f,
            children: [
              h,
              (0, a.jsx)(o.ZP, {
                ref: b,
                styles: l.X,
                options: n,
                value: t,
                onChange: s,
                isDisabled: c,
                readonly: d,
                id: x,
                components: {
                  IndicatorSeparator: function () {
                    return null;
                  },
                },
                customStyle: y,
                classNamePrefix: "react-select",
                required: g,
              }),
              !c &&
                !d &&
                (0, a.jsx)(l.U, {
                  tabIndex: -1,
                  autoComplete: "off",
                  value: t || "",
                  onChange: function () {},
                  onFocus: function () {
                    return b.current.focus();
                  },
                  required: g,
                }),
            ],
          });
        };
      (n.Z = s),
        (s.defaultProps = {
          value: null,
          disabled: !1,
          label: null,
          id: null,
          className: "",
          style: {},
          required: !1,
          readonly: !1,
        });
    },
    89783: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var r = t(59499),
        o = t(4730),
        i = t(37797).ZP.label.withConfig({
          displayName: "EyebrowStyles__StyledEyebrow",
          componentId: "sc-1oxh3he-0",
        })([
          "border-bottom:2px solid #0069ff99;color:#0069ff99;display:block;font-size:12px;letter-spacing:1px;margin:6px 0;padding:0 0 2px;text-transform:uppercase;",
        ]),
        l = t(85893),
        a = ["eyebrow"];
      function s(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function c(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? s(Object(t), !0).forEach(function (n) {
                (0, r.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : s(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      var d = function (e) {
          var n = e.eyebrow,
            t = (0, o.Z)(e, a);
          return n && (0, l.jsx)(i, c(c({}, t), {}, { children: n }));
        },
        u = d;
      d.defaultProps = { eyebrow: "" };
    },
    77726: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return p;
        },
      });
      var r = t(59499),
        o = t(4730),
        i = t(25935),
        l = t(37797).ZP.label.withConfig({
          displayName: "LabelStyles__StyledLabel",
          componentId: "sc-1f08lap-0",
        })([
          "color:#031b4e;display:block;font-size:18px;font-weight:500;margin:0 0 8px;> sup{color:#031b48;font-size:0.7em;font-weight:300;left:0.25em;position:relative;top:0.1em;vertical-align:super;}> span{color:#5b6987;display:block;font-size:0.9em;font-weight:400;}",
        ]),
        a = t(85893),
        s = ["label", "sup", "desc"];
      function c(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function d(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? c(Object(t), !0).forEach(function (n) {
                (0, r.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      var u = function (e) {
          var n = e.label,
            t = e.sup,
            r = e.desc,
            c = (0, o.Z)(e, s);
          return (0, a.jsxs)(
            l,
            d(
              d({}, c),
              {},
              {
                children: [
                  n,
                  t && (0, a.jsx)("sup", { children: t }),
                  r &&
                    (0, a.jsx)("span", {
                      children: "string" === typeof r ? (0, i.ZP)(r) : r,
                    }),
                ],
              }
            )
          );
        },
        p = u;
      u.defaultProps = { sup: "", desc: "" };
    },
    57054: function (e, n, t) {
      var r = t(67294),
        o = t(18254);
      n.Z = function () {
        return (0, r.useContext)(o.V);
      };
    },
    68801: function (e, n, t) {
      var r = t(67294),
        o = t(5918),
        i = t(77726),
        l = t(85893);
      n.Z = function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : null,
          n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null,
          t = (0, r.useState)(null === n ? (0, o.Z)() : n),
          a = t[0],
          s =
            null !== e &&
            ("string" === typeof e
              ? (0, l.jsx)(i.Z, { htmlFor: a, label: e })
              : (0, r.cloneElement)(e, { htmlFor: a }));
        return { inputId: a, labelElm: s };
      };
    },
    84270: function (e, n) {
      n.Z = function (e) {
        var n = "Something went wrong.";
        if (-1 !== e.indexOf("API call failed"))
          try {
            var t = JSON.parse(e.split(" - ").slice(2).join(" - ").trim());
            t.errors ? (n = t.errors) : t.message && (n = t.message);
          } catch (r) {}
        return n;
      };
    },
    4620: function (e, n, t) {
      t.d(n, {
        M: function () {
          return i;
        },
        _: function () {
          return o;
        },
      });
      var r = t(57805),
        o = function (e, n) {
          return 1 === n ? e : (0, r.Z)(e);
        },
        i = function (e, n) {
          return "".concat(n.toLocaleString(), " ").concat(o(e, n));
        };
    },
    21474: function (e, n) {
      n.Z = function (e) {
        return e.id
          ? e.first_name && e.last_name
            ? "".concat(e.first_name, " ").concat(e.last_name)
            : e.first_name || e.last_name || e.username
          : "";
      };
    },
    23157: function (e, n, t) {
      var r = t(65342),
        o = t(87462),
        i = t(67294),
        l = t(7981),
        a =
          (t(68357),
          t(73935),
          t(73469),
          (0, i.forwardRef)(function (e, n) {
            var t = (0, r.u)(e);
            return i.createElement(l.S, (0, o.Z)({ ref: n }, t));
          }));
      n.ZP = a;
    },
  },
]);
