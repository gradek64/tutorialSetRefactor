"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2419],
  {
    45279: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return g;
        },
      });
      var o = t(4486),
        i = t(17534),
        r = t(88134),
        a = t(87288),
        l = t(37797),
        c = "/_next/static/media/ctaFish.83d8c96f.svg",
        s = l.ZP.div.withConfig({
          displayName: "CTAStyles__StyledCTA",
          componentId: "sc-1w7gzco-0",
        })(
          [
            "background:",
            " / ",
            "  ",
            ";border-radius:24px;box-shadow:0 6px 20px -6px ",
            ";color:",
            ";display:flex;justify-content:space-between;margin:0 0 72px;",
            " overflow:hidden;width:100%;",
            "{background-image:url(",
            ")",
            ";}",
          ],
          function (e) {
            return e.bgPosition;
          },
          function (e) {
            return e.bgSize;
          },
          function (e) {
            return r.ZP[e.bgColor];
          },
          (0, r.E9)(r.ZP.blueCPUInfo, 0.15),
          r.ZP.white,
          function (e) {
            return (
              e.gradient &&
              ""
                .concat(
                  (0, i.X)(i.A.mediumDesktop, "max"),
                  " {\n        background: "
                )
                .concat(e.gradient, ";\n      }")
            );
          },
          (0, i.X)(i.A.mediumDesktop, "min"),
          function (e) {
            var n;
            return null !== (n = e.image) && void 0 !== n ? n : c;
          },
          function (e) {
            return e.gradient && ", ".concat(e.gradient);
          }
        ),
        d = l.ZP.div.withConfig({
          displayName: "CTAStyles__StyledLeftContent",
          componentId: "sc-1w7gzco-1",
        })(
          [
            "padding:24px;",
            "{padding:32px 32px 32px 64px;}h3{color:",
            ";font-family:",
            ";font-size:24px;font-style:normal;font-weight:bold;letter-spacing:-0.5px;line-height:40px;margin:0 0 16px;width:100%;",
            "{font-size:32px;width:544px;}}p{color:",
            ";font-size:16px;font-style:normal;font-weight:normal;line-height:24px;margin:16px 0;width:100%;",
            "{width:544px;}}div{color:",
            ";cursor:pointer;font-family:",
            ";}a{color:",
            ";font-family:",
            ";font-size:16px;font-style:normal;font-weight:600;line-height:24px;text-decoration:none;}",
          ],
          (0, i.X)(i.A.mediumDesktop, "min"),
          r.ZP.white,
          (0, a.Z)("primary"),
          (0, i.X)(i.A.mediumDesktop, "min"),
          function (e) {
            var n;
            return null !== (n = e.color) && void 0 !== n ? n : r.ZP.gray7;
          },
          (0, i.X)(i.A.mediumDesktop, "min"),
          r.ZP.white,
          (0, a.Z)("code"),
          r.ZP.white,
          (0, a.Z)("code")
        ),
        u = t(85893),
        p = function (e) {
          var n = e.title,
            t = e.className,
            i = e.content,
            r = e.contentRight,
            a = e.linkText,
            l = e.link,
            c = e.image,
            p = e.bgColor,
            g = e.bgPosition,
            f = e.bgSize,
            h = e.gradient,
            m = e.color;
          return (0, u.jsxs)(s, {
            className: t,
            image: c,
            bgColor: p,
            bgPosition: g,
            bgSize: f,
            gradient: h,
            children: [
              (0, u.jsxs)(d, {
                color: m,
                children: [
                  (0, u.jsx)("h3", { children: n }),
                  (0, u.jsx)("p", { children: i }),
                  l && (0, u.jsx)(o.Z, { dashArrow: !0, url: l, children: a }),
                ],
              }),
              r && r,
            ],
          });
        },
        g = p;
      p.defaultProps = {
        bgColor: "teal1",
        className: "",
        contentRight: null,
        linkText: "",
        link: "",
        image: "",
        bgPosition: "none bottom right",
        bgSize: "contain no-repeat",
        gradient: null,
        color: null,
      };
    },
    90917: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return Z;
        },
      });
      var o = t(17534),
        i = t(78268),
        r = t(6944),
        a = t(78985),
        l = t(34531),
        c = t(90352),
        s = t(17504),
        d = t(2464),
        u = t(88134),
        p = t(37797),
        g = {
          questions: u.ZP.green2,
          tutorials: u.ZP.blue2,
          "learning-paths": u.ZP.purple2,
        },
        f = p.ZP.button.withConfig({
          displayName: "IndexLeftNavigationStyles__StyledBackdrop",
          componentId: "sc-1f2j6g7-0",
        })(
          [
            "background-color:",
            ";display:",
            ";inset:0;opacity:0.85;position:fixed;z-index:99998;",
          ],
          u.ZP.white,
          function (e) {
            return e.visible ? "block" : "none";
          }
        ),
        h = p.ZP.div.withConfig({
          displayName: "IndexLeftNavigationStyles__StyledTopBar",
          componentId: "sc-1f2j6g7-1",
        })(
          [
            "align-items:center;display:flex;justify-content:space-between;margin:0 -12px;padding-bottom:40px;picture{display:inline-flex;height:32px;}",
            "{display:none;}",
          ],
          (0, o.X)(o.A.largeDesktop, "min")
        ),
        m = p.ZP.div.withConfig({
          displayName: "IndexLeftNavigationStyles__LeftNavigation",
          componentId: "sc-1f2j6g7-2",
        })(
          [
            "align-items:center;background-color:",
            ";display:",
            ";inset:0 auto 0 0;max-width:",
            "px;overflow-y:auto;padding:40px 44px;position:absolute;width:100%;z-index:99999;",
            "{padding:40px 52px;}",
            "{display:block;height:auto;overflow:none;padding:0 0 0 24px;position:relative;top:0;z-index:1;}p{color:",
            ";font-size:16px;font-weight:500;line-height:24px;margin:0 0 24px;}a:active div,.active{background:",
            ";border-radius:10px;color:",
            ";}",
          ],
          function (e) {
            return e.leftNavigation && u.ZP.white;
          },
          function (e) {
            return e.leftNavigation ? "block" : "none";
          },
          o.A.largePhone,
          (0, o.X)(o.A.largePhone, "min"),
          (0, o.X)(o.A.largeDesktop, "min"),
          u.ZP.gray1,
          u.ZP.gray8,
          function (e) {
            return g[e.type];
          }
        ),
        x = p.ZP.button.withConfig({
          displayName: "IndexLeftNavigationStyles__LeftNavigationClose",
          componentId: "sc-1f2j6g7-3",
        })([
          "background-color:transparent;border:none;cursor:pointer;display:inline-flex;padding:0;",
        ]),
        b = p.ZP.div.withConfig({
          displayName: "IndexLeftNavigationStyles__StyledDivider",
          componentId: "sc-1f2j6g7-4",
        })(
          [
            "border-top:1px solid ",
            ";left:-10px;margin:",
            ";position:relative;width:100%;",
          ],
          u.ZP.gray7,
          function (e) {
            return e.margin || "24px 0px";
          }
        ),
        y = p.ZP.div.withConfig({
          displayName: "IndexLeftNavigationStyles__StyledTagsButtons",
          componentId: "sc-1f2j6g7-5",
        })(
          [
            "color:",
            ";cursor:pointer;font-size:16px;font-weight:",
            ";left:-10px;line-height:24px;padding:8px 12px;position:relative;text-transform:capitalize;.all{font-weight:700;}&:hover{background:",
            ";border-radius:10px;}",
          ],
          function (e) {
            return e.main ? u.ZP.gray1 : u.ZP.gray4;
          },
          function (e) {
            return e.main ? "700" : "500";
          },
          u.ZP.gray8
        ),
        v = p.ZP.div.withConfig({
          displayName: "IndexLeftNavigationStyles__StyledAd",
          componentId: "sc-1f2j6g7-6",
        })(
          [
            "width:192px;.header{color:",
            ";font-size:18px;font-style:normal;font-weight:500;line-height:28px;}p{color:",
            ";font-size:14px;font-style:normal;font-weight:400;line-height:22px;}.cloud{align-items:center;background:",
            ";border:none;border-radius:10px;color:",
            ";display:flex;font-size:16px;font-weight:600;height:40px;justify-content:center;line-height:24px;padding:8px 20px;&:hover{background:",
            ";}}",
          ],
          u.ZP.bluePrismic,
          u.ZP.gray3,
          u.ZP.blue2,
          u.ZP.white,
          u.ZP.blueHover
        ),
        P = t(85893),
        w = function (e) {
          var n = e.type,
            t = e.listTitle,
            u = e.popularTopics,
            p = e.currentTopic,
            g = e.searching,
            w = e.leftNavigation,
            Z = e.toggleLeftNavigation,
            j = e.links,
            k = e.onClick,
            S = e.handleSetTopic;
          return (
            (0, a.Z)(w),
            (0, P.jsxs)(P.Fragment, {
              children: [
                (0, P.jsxs)(m, {
                  leftNavigation: w,
                  type: n,
                  children: [
                    (0, P.jsxs)(h, {
                      children: [
                        (0, P.jsxs)("picture", {
                          children: [
                            (0, P.jsx)("source", {
                              srcSet: d.Z.src,
                              media: "(min-width: ".concat(o.A.tablet, "px)"),
                            }),
                            (0, P.jsx)("img", {
                              src: s.Z.src,
                              alt: "DigitalOceanPicture",
                            }),
                          ],
                        }),
                        (0, P.jsx)(x, {
                          onClick: function () {
                            return Z();
                          },
                          children: (0, P.jsx)(i.Z, {}),
                        }),
                      ],
                    }),
                    (0, P.jsx)(c.Z, {
                      url: "/community/".concat(n),
                      children: (0, P.jsx)(y, {
                        main: !0,
                        className: "".concat(
                          "" === p.name || g ? "active" : ""
                        ),
                        url: "/community/".concat(n),
                        onClick: k,
                        children:
                          "learning-paths" === n
                            ? "Learning Paths"
                            : "All ".concat(n),
                      }),
                    }),
                    (0, P.jsx)(b, {}),
                    (0, P.jsx)("p", { children: t }),
                    u.map(function (e) {
                      return (0, P.jsx)(
                        c.Z,
                        {
                          url:
                            "learning-paths" !== n
                              ? "/community/"
                                  .concat(n, "?q=")
                                  .concat(encodeURIComponent(e.state))
                              : "/community/"
                                  .concat(n, "/")
                                  .concat(encodeURIComponent(e.slug)),
                          children: (0, P.jsx)(y, {
                            className: "".concat(
                              e.slug === p.slug && !1 === g ? "active" : ""
                            ),
                            onClick: function () {
                              return S(e);
                            },
                            children: e.name || e.title,
                          }),
                        },
                        e.id
                      );
                    }),
                    (0, P.jsx)(b, {}),
                    j,
                    (0, P.jsx)(b, {}),
                    (0, P.jsxs)(v, {
                      children: [
                        (0, P.jsxs)("p", {
                          className: "header",
                          children: [
                            "Enjoy",
                            " ",
                            (0, P.jsx)("span", {
                              className: "number",
                              children: r.KM.credit,
                            }),
                            " ",
                            "to try DigitalOcean",
                          ],
                        }),
                        (0, P.jsxs)("p", {
                          children: [
                            "Click below for",
                            " ",
                            r.KM.credit,
                            " ",
                            "of free credit to try DigitalOcean on us for the next 60 days. Thank you for being a part of our community!",
                          ],
                        }),
                        (0, P.jsx)(l.Z, {
                          className: " is-rounded cloud",
                          url: "https://cloud.digitalocean.com/registrations/new?refcode=".concat(
                            r.rh.communityFTOAll
                          ),
                          children: "Join Now",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, P.jsx)(f, {
                  "aria-label": "Close left navigation",
                  visible: w,
                  onClick: function () {
                    return Z();
                  },
                }),
              ],
            })
          );
        },
        Z = w;
      w.defaultProps = {
        listTitle: "Popular Topics",
        onClick: null,
        handleSetTopic: function () {},
      };
    },
    53677: function (e, n, t) {
      t.d(n, {
        U: function () {
          return l;
        },
        X: function () {
          return c;
        },
      });
      var o = t(59499),
        i = t(88134);
      function r(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          n &&
            (o = o.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, o);
        }
        return t;
      }
      function a(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? r(Object(t), !0).forEach(function (n) {
                (0, o.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : r(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      var l = t(37797).ZP.input.withConfig({
          displayName: "DropdownStyles__StyledTriggerInput",
          componentId: "sc-l46zev-0",
        })(["height:0;opacity:0;position:'absolute';width:0;"]),
        c = {
          menu: function (e) {
            return a(
              a({}, e),
              {},
              {
                border: "1px solid ".concat(i.ZP.grayBorder),
                borderRadius: 10,
                boxShadow: "none",
                padding: 0,
                minWidth: "100%",
                width: "fit-content",
              }
            );
          },
          option: function (e) {
            return a(
              a({}, e),
              {},
              {
                "&:not(:first-of-type)": {
                  borderTop: "1px solid ".concat(i.ZP.grayBorder),
                },
                "&:hover": {
                  boxShadow: "none",
                  backgroundColor: i.ZP.blue2,
                  color: i.ZP.white,
                  cursor: "pointer",
                },
                "&:focus": {
                  boxShadow: "none",
                  backgroundColor: i.ZP.blue2,
                  color: i.ZP.white,
                  cursor: "pointer",
                },
              }
            );
          },
          control: function (e, n) {
            return a(
              a({}, e),
              {},
              {
                background: n.isDisabled ? i.ZP.gray : "default",
                border: "1px solid ".concat(i.ZP.gray7),
                borderRadius: "10px",
                boxSizing: "border-box",
                color: i.ZP.gray4,
                fontSize: 14,
                fontWeight: 500,
                minWidth: "4rem",
                padding:
                  "padding" in n.selectProps.customStyle
                    ? n.selectProps.customStyle.padding
                    : 15,
                "&:hover": { color: i.ZP.blue2, cursor: "pointer" },
                "& input": { padding: "0 !important" },
              }
            );
          },
          dropdownIndicator: function (e, n) {
            return a(
              a({}, e),
              {},
              {
                transform: n.selectProps.menuIsOpen ? "rotate(180deg)" : "none",
                color: "inherit",
                "&:hover": { color: "inherit" },
              }
            );
          },
          singleValue: function (e) {
            return a(a({}, e), {}, { color: "inherit" });
          },
        };
    },
    3218: function (e, n, t) {
      var o = t(67294),
        i = t(23157),
        r = t(68801),
        a = t(53677),
        l = t(85893),
        c = function (e) {
          var n = e.options,
            t = e.value,
            c = e.onChange,
            s = e.disabled,
            d = e.readonly,
            u = e.label,
            p = e.id,
            g = e.className,
            f = e.style,
            h = e.required,
            m = (0, r.Z)(u, p),
            x = m.inputId,
            b = m.labelElm,
            y = (0, o.useRef)();
          return (0, l.jsxs)("div", {
            className: g,
            children: [
              b,
              (0, l.jsx)(i.ZP, {
                ref: y,
                styles: a.X,
                options: n,
                value: t,
                onChange: c,
                isDisabled: s,
                readonly: d,
                id: x,
                components: {
                  IndicatorSeparator: function () {
                    return null;
                  },
                },
                customStyle: f,
                classNamePrefix: "react-select",
                required: h,
              }),
              !s &&
                !d &&
                (0, l.jsx)(a.U, {
                  tabIndex: -1,
                  autoComplete: "off",
                  value: t || "",
                  onChange: function () {},
                  onFocus: function () {
                    return y.current.focus();
                  },
                  required: h,
                }),
            ],
          });
        };
      (n.Z = c),
        (c.defaultProps = {
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
    77726: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return p;
        },
      });
      var o = t(59499),
        i = t(4730),
        r = t(25935),
        a = t(37797).ZP.label.withConfig({
          displayName: "LabelStyles__StyledLabel",
          componentId: "sc-1f08lap-0",
        })([
          "color:#031b4e;display:block;font-size:18px;font-weight:500;margin:0 0 8px;> sup{color:#031b48;font-size:0.7em;font-weight:300;left:0.25em;position:relative;top:0.1em;vertical-align:super;}> span{color:#5b6987;display:block;font-size:0.9em;font-weight:400;}",
        ]),
        l = t(85893),
        c = ["label", "sup", "desc"];
      function s(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          n &&
            (o = o.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, o);
        }
        return t;
      }
      function d(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? s(Object(t), !0).forEach(function (n) {
                (0, o.Z)(e, n, t[n]);
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
      var u = function (e) {
          var n = e.label,
            t = e.sup,
            o = e.desc,
            s = (0, i.Z)(e, c);
          return (0, l.jsxs)(
            a,
            d(
              d({}, s),
              {},
              {
                children: [
                  n,
                  t && (0, l.jsx)("sup", { children: t }),
                  o &&
                    (0, l.jsx)("span", {
                      children: "string" === typeof o ? (0, r.ZP)(o) : o,
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
      var o = t(67294),
        i = t(18254);
      n.Z = function () {
        return (0, o.useContext)(i.V);
      };
    },
    68801: function (e, n, t) {
      var o = t(67294),
        i = t(5918),
        r = t(77726),
        a = t(85893);
      n.Z = function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : null,
          n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null,
          t = (0, o.useState)(null === n ? (0, i.Z)() : n),
          l = t[0],
          c =
            null !== e &&
            ("string" === typeof e
              ? (0, a.jsx)(r.Z, { htmlFor: l, label: e })
              : (0, o.cloneElement)(e, { htmlFor: l }));
        return { inputId: l, labelElm: c };
      };
    },
    4620: function (e, n, t) {
      t.d(n, {
        M: function () {
          return r;
        },
        _: function () {
          return i;
        },
      });
      var o = t(57805),
        i = function (e, n) {
          return 1 === n ? e : (0, o.Z)(e);
        },
        r = function (e, n) {
          return "".concat(n.toLocaleString(), " ").concat(i(e, n));
        };
    },
  },
]);
