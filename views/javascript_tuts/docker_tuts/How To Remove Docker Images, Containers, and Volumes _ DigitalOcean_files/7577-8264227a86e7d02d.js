"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7577],
  {
    18462: function (e, t, o) {
      o.d(t, {
        Z: function () {
          return D;
        },
      });
      var n = o(37797),
        r = o(67294),
        i = o(41664),
        l = o.n(i),
        a = o(88723),
        c = o(71778),
        s = o(5918),
        u = o(62080),
        d = o(88134),
        p = n.ZP.a.withConfig({
          displayName:
            "PrismicRelatedRecordsStyles__PrismicRelatedRecordWrapper",
          componentId: "sc-1i7xt0o-0",
        })(
          [
            "border-radius:4px;color:",
            ";cursor:pointer;display:flex;flex-direction:column;line-height:1.5;margin:0 0 15px;padding:20px 5px;text-align:center;text-decoration:none;",
          ],
          d.ZP.gray3
        ),
        g = n.ZP.span.withConfig({
          displayName:
            "PrismicRelatedRecordsStyles__PrismicRelatedRecordImageWrapper",
          componentId: "sc-1i7xt0o-1",
        })(["display:block;width:100%;"]),
        m = n.ZP.span.withConfig({
          displayName: "PrismicRelatedRecordsStyles__PrismicRelatedRecordTitle",
          componentId: "sc-1i7xt0o-2",
        })(
          [
            "color:",
            ";display:inline-block;font-size:18px;font-weight:500;line-height:28px;margin:16px 0 5px;",
          ],
          d.ZP.bluePrismic
        ),
        h = n.ZP.span.withConfig({
          displayName:
            "PrismicRelatedRecordsStyles__PrismicRelatedRecordCategory",
          componentId: "sc-1i7xt0o-3",
        })(["color:#0080ff;"]),
        f = n.ZP.span.withConfig({
          displayName:
            "PrismicRelatedRecordsStyles__PrismicRelatedRecordDescription",
          componentId: "sc-1i7xt0o-4",
        })(
          ["color:", ";display:block;font-weight:400;text-align:start;"],
          d.ZP.gray3
        ),
        y = n.ZP.p.withConfig({
          displayName:
            "PrismicRelatedRecordsStyles__PrismicRelatedRecordDescriptionHeadline",
          componentId: "sc-1i7xt0o-5",
        })(
          [
            "color:",
            ";font-size:18px;font-weight:500;line-height:28px;margin:0;padding:0;text-align:",
            ";",
          ],
          d.ZP.bluePrismic,
          function (e) {
            return e.position ? "start" : "center";
          }
        ),
        b = n.ZP.ul.withConfig({
          displayName:
            "PrismicRelatedRecordsStyles__PrismicRelatedRecordDescriptionList",
          componentId: "sc-1i7xt0o-6",
        })(["padding-left:20px;"]),
        x = n.ZP.li.withConfig({
          displayName:
            "PrismicRelatedRecordsStyles__PrismicRelatedRecordDescriptionListItem",
          componentId: "sc-1i7xt0o-7",
        })(
          [
            "color:",
            ";font-size:14px;line-height:22px;list-style:disc;margin:0 8px;padding:0;",
          ],
          d.ZP.gray3
        ),
        w = (0, n.iv)(["margin-top:8px;"]),
        P = o(85893),
        v = function (e) {
          var t = e.record,
            o = e.position,
            n = t.long_description[0],
            r = t.long_description.slice(1),
            i = r.length > 1;
          return (0, P.jsx)(l(), {
            href: t.url,
            passHref: !0,
            children: (0, P.jsxs)(p, {
              children: [
                i
                  ? (0, P.jsxs)(P.Fragment, {
                      children: [
                        (0, P.jsx)(m, { children: t.headline }),
                        (0, P.jsx)(g, {
                          children: (0, P.jsx)("img", {
                            src: t.icon_url,
                            alt: t.category,
                            height: 45,
                            width: 45,
                          }),
                        }),
                      ],
                    })
                  : (0, P.jsxs)(P.Fragment, {
                      children: [
                        (0, P.jsx)(g, {
                          children: (0, P.jsx)("img", {
                            src: t.icon_url,
                            alt: t.category,
                            height: 45,
                            width: 45,
                          }),
                        }),
                        t.headline,
                      ],
                    }),
                (0, P.jsx)(f, {
                  children:
                    i &&
                    (0, P.jsxs)(P.Fragment, {
                      children: [
                        (0, P.jsx)(y, { position: o, children: n }),
                        (0, P.jsx)(b, {
                          children: r.map(function (e) {
                            return (0, P.jsx)(x, { children: e }, (0, s.Z)());
                          }),
                        }),
                      ],
                    }),
                }),
                i
                  ? (0, P.jsx)(k, {
                      className: "is-primary is-small is-squared",
                      children: t.button_text,
                    })
                  : (0, P.jsx)(h, { children: t.category }),
              ],
            }),
          });
        },
        Z = v;
      v.defaultProps = { position: null };
      var k = (0, n.ZP)(u.Z).withConfig({
          displayName: "PrismicRelatedRecords___StyledButton",
          componentId: "sc-19bumnj-0",
        })(["", ""], w),
        j = "/_next/static/media/icon-link.4b2ad23e.svg",
        _ = (0, n.iv)(
          [
            "color:",
            ";font-size:14px;font-weight:700;letter-spacing:1px;line-height:",
            ";margin:0;text-transform:uppercase;",
          ],
          d.ZP.gray1,
          22 / 14
        ),
        C = n.ZP.a.withConfig({
          displayName: "RelatedRecordsStyles__StyledRelatedRecord",
          componentId: "sc-1gtfc2p-0",
        })(
          [
            "color:",
            ";display:block;font-size:16px;font-weight:500;line-height:1.5;padding:16px 0;text-decoration:none;&:not(:last-child){border-bottom:1px solid #dee2e8;}&:hover{& > div{color:",
            ";}}",
          ],
          d.ZP.gray4,
          d.ZP.grayDarkest
        ),
        R = n.ZP.div.withConfig({
          displayName: "RelatedRecordsStyles__StyledRelatedRecordTitle",
          componentId: "sc-1gtfc2p-1",
        })(["margin:0 0 8px;"]),
        S = n.ZP.div.withConfig({
          displayName: "RelatedRecordsStyles__StyledRelatedRecordBody",
          componentId: "sc-1gtfc2p-2",
        })(
          [
            "align-items:center;color:",
            ";display:flex;span{text-decoration:underline;}img{margin-left:8px;}",
          ],
          d.ZP.blue2
        ),
        O = o(57243),
        I = function (e) {
          var t = e.auth,
            o = e.relatedRecords,
            n = e.title,
            i = e.recordType,
            c = e.position,
            s = e.relatedPrismicRecord,
            u = (0, r.useState)(!1),
            d = u[0],
            p = u[1],
            g = (0, r.useState)(!0),
            m = g[0],
            h = g[1];
          return (
            (0, r.useEffect)(
              function () {
                "https://www.digitalocean.com/api/dynamic-content/v1/login?success_redirect=https%3A%2F%2Fwww.digitalocean.com%2Fcommunity&error_redirect=https%3A%2F%2Fwww.digitalocean.com%2Fauth_error" ===
                  (null === s || void 0 === s ? void 0 : s.url) && p(!0);
              },
              [s]
            ),
            (0, r.useEffect)(
              function () {
                d &&
                  (null !== t && void 0 !== t && t.user
                    ? h(!1)
                    : (s.url = null === t || void 0 === t ? void 0 : t.signIn));
              },
              [t, d, s]
            ),
            (0, P.jsxs)("div", {
              children: [
                s && m && (0, P.jsx)(Z, { record: s, position: c }),
                o &&
                  o.length > 0 &&
                  (0, P.jsx)(L, { renderAs: "h3", children: n || "Related" }),
                o &&
                  o.map(function (e) {
                    return (0,
                    P.jsx)(l(), { href: (0, a.F7)(i, e.slug), passHref: !0, children: (0, P.jsxs)(C, { children: [(0, P.jsx)(R, { children: e.title }), (0, P.jsxs)(S, { children: [(0, P.jsx)("span", { children: "View" }), (0, P.jsx)(O.Z, { src: j, alt: i })] })] }) }, e.id);
                  }),
              ],
            })
          );
        },
        D = I;
      I.defaultProps = {
        relatedRecords: null,
        position: null,
        relatedPrismicRecord: null,
      };
      var L = (0, n.ZP)(c.Z).withConfig({
        displayName: "RelatedRecords___StyledHeading",
        componentId: "sc-2xyvab-0",
      })(["", ""], _);
    },
    74426: function (e, t, o) {
      o.d(t, {
        Z: function () {
          return s;
        },
      });
      var n = o(41664),
        r = o.n(n),
        i = o(88134),
        l = o(37797).ZP.span.withConfig({
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
        a = o(85893),
        c = function (e) {
          var t = e.tag,
            o = e.onClick,
            n = e.url;
          return n
            ? (0, a.jsx)(r(), {
                href: n,
                passHref: !0,
                children: (0, a.jsx)(l, {
                  as: "a",
                  title: t.name ? t.name : t,
                  children: t.name ? t.name : t,
                }),
              })
            : (0, a.jsx)(l, {
                onClick:
                  o &&
                  function (e) {
                    e.preventDefault(), o(t);
                  },
                children: t.name ? t.name : t,
              });
        },
        s = c;
      c.defaultProps = { onClick: null, url: "" };
    },
    53677: function (e, t, o) {
      o.d(t, {
        U: function () {
          return a;
        },
        X: function () {
          return c;
        },
      });
      var n = o(59499),
        r = o(88134);
      function i(e, t) {
        var o = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            o.push.apply(o, n);
        }
        return o;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(o), !0).forEach(function (t) {
                (0, n.Z)(e, t, o[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
            : i(Object(o)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(o, t)
                );
              });
        }
        return e;
      }
      var a = o(37797).ZP.input.withConfig({
          displayName: "DropdownStyles__StyledTriggerInput",
          componentId: "sc-l46zev-0",
        })(["height:0;opacity:0;position:'absolute';width:0;"]),
        c = {
          menu: function (e) {
            return l(
              l({}, e),
              {},
              {
                border: "1px solid ".concat(r.ZP.grayBorder),
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
                  borderTop: "1px solid ".concat(r.ZP.grayBorder),
                },
                "&:hover": {
                  boxShadow: "none",
                  backgroundColor: r.ZP.blue2,
                  color: r.ZP.white,
                  cursor: "pointer",
                },
                "&:focus": {
                  boxShadow: "none",
                  backgroundColor: r.ZP.blue2,
                  color: r.ZP.white,
                  cursor: "pointer",
                },
              }
            );
          },
          control: function (e, t) {
            return l(
              l({}, e),
              {},
              {
                background: t.isDisabled ? r.ZP.gray : "default",
                border: "1px solid ".concat(r.ZP.gray7),
                borderRadius: "10px",
                boxSizing: "border-box",
                color: r.ZP.gray4,
                fontSize: 14,
                fontWeight: 500,
                minWidth: "4rem",
                padding:
                  "padding" in t.selectProps.customStyle
                    ? t.selectProps.customStyle.padding
                    : 15,
                "&:hover": { color: r.ZP.blue2, cursor: "pointer" },
                "& input": { padding: "0 !important" },
              }
            );
          },
          dropdownIndicator: function (e, t) {
            return l(
              l({}, e),
              {},
              {
                transform: t.selectProps.menuIsOpen ? "rotate(180deg)" : "none",
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
    3218: function (e, t, o) {
      var n = o(67294),
        r = o(23157),
        i = o(68801),
        l = o(53677),
        a = o(85893),
        c = function (e) {
          var t = e.options,
            o = e.value,
            c = e.onChange,
            s = e.disabled,
            u = e.readonly,
            d = e.label,
            p = e.id,
            g = e.className,
            m = e.style,
            h = e.required,
            f = (0, i.Z)(d, p),
            y = f.inputId,
            b = f.labelElm,
            x = (0, n.useRef)();
          return (0, a.jsxs)("div", {
            className: g,
            children: [
              b,
              (0, a.jsx)(r.ZP, {
                ref: x,
                styles: l.X,
                options: t,
                value: o,
                onChange: c,
                isDisabled: s,
                readonly: u,
                id: y,
                components: {
                  IndicatorSeparator: function () {
                    return null;
                  },
                },
                customStyle: m,
                classNamePrefix: "react-select",
                required: h,
              }),
              !s &&
                !u &&
                (0, a.jsx)(l.U, {
                  tabIndex: -1,
                  autoComplete: "off",
                  value: o || "",
                  onChange: function () {},
                  onFocus: function () {
                    return x.current.focus();
                  },
                  required: h,
                }),
            ],
          });
        };
      (t.Z = c),
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
    20498: function (e, t, o) {
      var n = o(68801),
        r = o(78788),
        i = o(85893),
        l = function (e) {
          var t = e.value,
            o = e.name,
            l = e.onChange,
            a = e.max,
            c = e.min,
            s = e.placeholder,
            u = e.disabled,
            d = e.required,
            p = e.label,
            g = e.id,
            m = e.inputRef,
            h = (0, n.Z)(p, g),
            f = h.inputId,
            y = h.labelElm;
          return (0, i.jsxs)(i.Fragment, {
            children: [
              null !== a || null !== c
                ? (0, i.jsx)(r.Z, { value: t, min: c, max: a, children: y })
                : y,
              (0, i.jsx)("input", {
                name: o,
                ref: m,
                type: "text",
                value: t,
                onChange: function (e) {
                  return l(e.target.value);
                },
                minLength: c,
                maxLength: a,
                placeholder: s,
                disabled: u,
                required: d,
                id: f,
              }),
            ],
          });
        };
      (t.Z = l),
        (l.defaultProps = {
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
    92077: function (e, t, o) {
      o.d(t, {
        q: function () {
          return s;
        },
        X: function () {
          return u;
        },
      });
      var n = o(67294),
        r = o(61655),
        i = o(33606),
        l = function (e) {
          var t = (0, n.useState)([]),
            o = t[0],
            r = t[1],
            l = (0, n.useState)(!1),
            a = l[0],
            c = l[1];
          return (
            (0, n.useEffect)(
              function () {
                e.token &&
                  e.user &&
                  (0, i.zz)(e.token, e.user.slug).then(function (e) {
                    return r(e);
                  });
              },
              [e]
            ),
            {
              needLogIn: a,
              setNeedLogIn: c,
              subscriptions: o,
              handleSubscribeAction: function (t, o) {
                e.token
                  ? (0, i.Ld)(e.token, { type: t, id: o }).then(function (e) {
                      r(e);
                    })
                  : c(!0);
              },
              handleUnsubscribeAction: function (t, o) {
                (0, i.r1)(e.token, { type: t, id: o }).then(function (e) {
                  r(e);
                });
              },
            }
          );
        },
        a = o(85893),
        c = (0, n.createContext)({}),
        s = function (e) {
          var t = e.auth,
            o = e.children,
            i = l(t),
            s = i.needLogIn,
            u = i.setNeedLogIn,
            d = i.subscriptions,
            p = i.handleSubscribeAction,
            g = i.handleUnsubscribeAction,
            m = (0, n.useMemo)(
              function () {
                return {
                  handleSubscribeAction: p,
                  handleUnsubscribeAction: g,
                  subscriptions: d,
                };
              },
              [p, g, d]
            );
          return (0, a.jsxs)(c.Provider, {
            value: m,
            children: [
              s && (0, a.jsx)(r.Z, { needLogIn: s, setNeedLogIn: u }),
              o,
            ],
          });
        },
        u = function () {
          return (0, n.useContext)(c);
        };
    },
    44581: function (e, t, o) {
      var n = o(67294),
        r = o(99388);
      t.Z = function (e, t, o) {
        var i = (0, n.useState)(""),
          l = i[0],
          a = i[1],
          c = (0, n.useMemo)(
            function () {
              return (0, r.Z)(l);
            },
            [l]
          );
        return (
          (0, n.useEffect)(
            function () {
              var n, r, i, l, c, s, u;
              if (
                o ||
                ("function" ===
                  typeof (null === (n = window) ||
                  void 0 === n ||
                  null === (r = n.analytics) ||
                  void 0 === r ||
                  null === (i = r.user()) ||
                  void 0 === i
                    ? void 0
                    : i.id) &&
                  null !==
                    (null === (l = window) ||
                    void 0 === l ||
                    null === (c = l.analytics) ||
                    void 0 === c
                      ? void 0
                      : c.user().id()))
              )
                return null !== (u = e.tags) &&
                  void 0 !== u &&
                  u.find(function (e) {
                    return "nginx" === e.slug;
                  })
                  ? void a("cta_nginx")
                  : void a("cta_product");
              if ("cta_product_fto" === t) {
                var d, p, g, m, h, f, y;
                if (
                  null !== (d = e.tags) &&
                  void 0 !== d &&
                  d.some(function (e) {
                    return ["kubernetes", "container"].includes(e.slug);
                  })
                )
                  return void a("cta_kubernetes");
                if (
                  null !== (p = e.tags) &&
                  void 0 !== p &&
                  p.some(function (e) {
                    return ["deployment", "javascript", "css"].includes(e.slug);
                  })
                )
                  return void a("cta_app_platform");
                if (
                  null !== (g = e.tags) &&
                  void 0 !== g &&
                  g.some(function (e) {
                    return ["serverless", "digitalocean-functions"].includes(
                      e.slug
                    );
                  })
                )
                  return void a("cta_functions");
                if (
                  null !== (m = e.tags) &&
                  void 0 !== m &&
                  m.some(function (e) {
                    return ["mongodb"].includes(e.slug);
                  })
                )
                  return void a("cta_mongodb");
                if (
                  null !== (h = e.tags) &&
                  void 0 !== h &&
                  h.some(function (e) {
                    return ["postgresql"].includes(e.slug);
                  })
                )
                  return void a("cta_postgresql");
                if (
                  null !== (f = e.tags) &&
                  void 0 !== f &&
                  f.some(function (e) {
                    return ["mysql"].includes(e.slug);
                  })
                )
                  return void a("cta_mysql");
                if (
                  null !== (y = e.tags) &&
                  void 0 !== y &&
                  y.some(function (e) {
                    return ["redis"].includes(e.slug);
                  })
                )
                  return void a("cta_redis");
                a("cta_droplets");
              }
              (null !== (s = window.analytics) &&
                void 0 !== s &&
                s.user().id()) ||
                a("cta_fto");
            },
            [e.tags, t, o]
          ),
          [l, c]
        );
      };
    },
    8765: function (e, t) {
      t.Z = function (e, t, o) {
        return (
          e.filter(function (e) {
            return e.subscribable_type === t && e.subscribable_id === o;
          }).length > 0
        );
      };
    },
    99388: function (e, t, o) {
      o.d(t, {
        Z: function () {
          return c;
        },
      });
      var n = o(88134),
        r = o(6944),
        i = "/_next/static/media/questionFTO.7e48b93d.svg",
        l = "/_next/static/media/tutorialFTO.fb4e433d.svg",
        a = o(85893),
        c = function (e, t) {
          return "new_question_tutorial_fto" === e
            ? {
                title: "Get ".concat(
                  r.KM.credit,
                  " to try DigitalOcean - and do all the below for free!"
                ),
                body: "Build applications, host websites, run open source software, learn cloud computing, and more \u2013 every cloud resource you need. If you\u2019ve never tried DigitalOcean\u2019s products or services before, we\u2019ll cover your first ".concat(
                  r.KM.credit,
                  " in the next 60 days."
                ),
                link: {
                  title: "Sign up now to activate this offer",
                  url: "https://cloud.digitalocean.com/registrations/new?refcode=".concat(
                    r.rh.communityFTOAll
                  ),
                },
                image:
                  null !== t &&
                  void 0 !== t &&
                  t.includes("community/tutorials/")
                    ? l
                    : i,
              }
            : "cta_fto" === e
            ? {
                backgroundColor: n.ZP.purple1,
                title: "Try DigitalOcean for free",
                body: (0, a.jsxs)("p", {
                  children: [
                    "Click below to sign up and get",
                    " ",
                    (0, a.jsxs)("strong", {
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
              }
            : "cta_product" === e
            ? "/community/tutorials/initial-server-setup-with-ubuntu-20-04" ===
                t ||
              "/community/tutorials/how-to-configure-ssh-key-based-authentication-on-a-linux-server" ===
                t ||
              "/community/tutorials/how-to-set-up-and-configure-an-openvpn-server-on-ubuntu-20-04" ===
                t
              ? {
                  backgroundColor: n.ZP.blue1,
                  title: "Simple, Affordable, Virtual Machines",
                  body: (0, a.jsx)("p", {
                    children:
                      "Get dependable uptime, simple security tools, and predictable pricing, with DigitalOcean\u2019s virtual machines, Droplets",
                  }),
                  link: {
                    title: "Learn more",
                    url: "https://cloud.digitalocean.com/registrations/new",
                  },
                }
              : "/community/tutorials/how-to-inspect-kubernetes-networking" ===
                  t ||
                "/community/tutorials/how-to-set-up-an-elasticsearch-fluentd-and-kibana-efk-logging-stack-on-kubernetes" ===
                  t ||
                "/community/tutorials/how-to-deploy-to-kubernetes-using-argo-cd-and-gitops" ===
                  t
              ? {
                  backgroundColor: n.ZP.blue1,
                  title: "Kubernetes in Minutes",
                  body: (0, a.jsx)("p", {
                    children:
                      "Enjoy Managed Kubernetes to help grow your business. Scale-up and save with free control plane and inexpensive bandwidth!",
                  }),
                  link: {
                    title: "Learn more",
                    url: "https://cloud.digitalocean.com/registrations/new",
                  },
                }
              : "/community/tutorial_series/how-to-build-a-website-with-html" ===
                  t ||
                "/community/tutorials/how-to-deploy-a-react-application-to-digitalocean-app-platform" ===
                  t ||
                "/community/tutorials/how-to-deploy-a-static-website-to-the-cloud-with-digitalocean-app-platform" ===
                  t
              ? {
                  backgroundColor: n.ZP.blue1,
                  title: "Build quickly, scale easily",
                  body: (0, a.jsx)("p", {
                    children:
                      "Build, deploy, and scale apps quickly using App Platform. We\u2019ll handle the infra, runtimes, and dependencies, so you can focus on launching your app!",
                  }),
                  link: {
                    title: "Learn more",
                    url: "https://cloud.digitalocean.com/registrations/new",
                  },
                }
              : "/community/tutorials/how-to-install-mongodb-on-ubuntu-20-04" ===
                  t ||
                "/community/tutorials/how-to-use-the-mongodb-shell" === t ||
                "/community/tutorials/how-to-install-mongodb-on-ubuntu-18-04-source" ===
                  t
              ? {
                  backgroundColor: n.ZP.blue1,
                  title: "Fully managed MongoDB clusters",
                  body: (0, a.jsx)("p", {
                    children:
                      "Leave the complexity of your MongoDB database admin to us. We\u2019ll handle setup, backups, and updates to you can focus on building!",
                  }),
                  link: {
                    title: "Learn more",
                    url: "https://cloud.digitalocean.com/registrations/new",
                  },
                }
              : "/community/tutorials/how-to-install-postgresql-on-ubuntu-20-04-quickstart" ===
                  t ||
                "/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-20-04" ===
                  t ||
                "/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-18-04" ===
                  t
              ? {
                  backgroundColor: n.ZP.blue1,
                  title: "Worry-free PostgreSQL hosting",
                  body: (0, a.jsx)("p", {
                    children:
                      "Leave the complexity of your PostgreSQL database admin to us. We\u2019ll handle setup, backups, and updates to you can focus on building!",
                  }),
                  link: {
                    title: "Learn more",
                    url: "https://cloud.digitalocean.com/registrations/new",
                  },
                }
              : "/community/tutorials/how-to-create-a-new-user-and-grant-permissions-in-mysql" ===
                  t ||
                "/community/tutorials/how-to-install-mysql-on-ubuntu-20-04" ===
                  t ||
                "/community/tutorials/how-to-allow-remote-access-to-mysql" === t
              ? {
                  backgroundColor: n.ZP.blue1,
                  title: "Worry-free MySQL hosting",
                  body: (0, a.jsx)("p", {
                    children:
                      "Leave the complexity of your MySQL database admin to us. We\u2019ll handle setting up, backing up, and updating so you can focus on building your app!",
                  }),
                  link: {
                    title: "Learn more",
                    url: "https://cloud.digitalocean.com/registrations/new",
                  },
                }
              : "/community/tutorials/how-to-install-and-secure-redis-on-ubuntu-18-04" ===
                  t ||
                "/community/tutorials/how-to-install-and-secure-redis-on-ubuntu-20-04" ===
                  t ||
                "/community/cheatsheets/how-to-connect-to-a-redis-database" ===
                  t
              ? {
                  backgroundColor: n.ZP.blue1,
                  title: "Worry-free Redis hosting",
                  body: (0, a.jsx)("p", {
                    children:
                      "Leave the complexity of your Redis database administration to us. We\u2019ll handle setting up, backing up, and updating so you can focus on building your app",
                  }),
                  link: {
                    title: "Learn more",
                    url: "https://cloud.digitalocean.com/registrations/new",
                  },
                }
              : "/community/tutorials/js-introduction-localstorage-sessionstorage" ===
                  t ||
                "/community/tutorials/how-to-partition-and-format-storage-devices-in-linux" ===
                  t ||
                "/community/tutorials/how-to-set-up-an-object-storage-server-using-minio-on-ubuntu-18-04" ===
                  t
              ? {
                  backgroundColor: n.ZP.blue1,
                  title: "Store and deliver vast amounts of content",
                  body: (0, a.jsx)("p", {
                    children:
                      "Enjoy our S3-compatible object storage with a built-in CDN that makes scaling easy, reliable and affordable!",
                  }),
                  link: {
                    title: "Learn more",
                    url: "https://cloud.digitalocean.com/registrations/new",
                  },
                }
              : {
                  backgroundColor: n.ZP.fuchsia1,
                  title: "Scale with more droplets",
                  body: (0, a.jsxs)("p", {
                    children: [
                      " ",
                      "We\u2019ve designed our droplets to help you",
                      " ",
                      (0, a.jsx)("strong", {
                        children: "dependably and reliably scale.",
                      }),
                      " ",
                      "Add more droplets direct from your dashboard!",
                    ],
                  }),
                  link: {
                    title: "Get started",
                    url: "https://cloud.digitalocean.com/registrations/new",
                  },
                }
            : "cta_nginx" === e
            ? {
                background: "linear-gradient("
                  .concat(n.ZP.purple3, ",")
                  .concat(n.ZP.purple2, ")"),
                color: n.ZP.white,
                coralTopColor: n.ZP.blueRaspberry,
                coralBottomColor: n.ZP.honeydew,
                title: "Try our NGINX tool for free",
                body: (0, a.jsx)("p", {
                  children:
                    "Easily configure a performant, secure, and stable NGINX server with our open-source tool.",
                }),
                link: {
                  title: "Check it out",
                  url: "https://www.digitalocean.com/community/tools/nginx",
                },
              }
            : "cta_droplets" === e
            ? {
                background: "linear-gradient("
                  .concat(n.ZP.blue2, ",")
                  .concat(n.ZP.blueDarkExp, ")"),
                color: n.ZP.white,
                coralTopColor: n.ZP.raspberry,
                coralBottomColor: n.ZP.honeydew,
                title: "Virtual machines anyone can set up in seconds",
                body: (0, a.jsxs)("p", {
                  children: [
                    "Get",
                    " ",
                    (0, a.jsxs)("strong", {
                      children: [r.KM.credit, " ", "free credit"],
                    }),
                    " ",
                    "to build, deploy, and scale apps quickly using our simple solution.",
                  ],
                }),
                link: {
                  title: "Sign up to activate",
                  url: "https://cloud.digitalocean.com/registrations/new?refcode=".concat(
                    r.rh.communityFTOAll
                  ),
                },
              }
            : "cta_kubernetes" === e
            ? {
                background: "linear-gradient("
                  .concat(n.ZP.blue2, ",")
                  .concat(n.ZP.blueDarkExp, ")"),
                color: n.ZP.white,
                coralTopColor: n.ZP.raspberry,
                coralBottomColor: n.ZP.honeydew,
                title: "Business-ready Kubernetes",
                body: (0, a.jsxs)("p", {
                  children: [
                    "Get",
                    " ",
                    (0, a.jsxs)("strong", {
                      children: [r.KM.credit, " ", "free credit"],
                    }),
                    " ",
                    "to scale at a moment\u2019s notice with our CNCF Certified DigitalOcean Kubernetes.",
                  ],
                }),
                link: {
                  title: "Sign up to activate",
                  url: "https://cloud.digitalocean.com/registrations/new?refcode=".concat(
                    r.rh.communityFTOAll
                  ),
                },
              }
            : "cta_app_platform" === e
            ? {
                background: "linear-gradient("
                  .concat(n.ZP.blue2, ",")
                  .concat(n.ZP.blueDarkExp, ")"),
                color: n.ZP.white,
                coralTopColor: n.ZP.raspberry,
                coralBottomColor: n.ZP.honeydew,
                title: "Fully-managed infrastructure",
                body: (0, a.jsxs)("p", {
                  children: [
                    "Get",
                    " ",
                    (0, a.jsxs)("strong", {
                      children: [r.KM.credit, " ", "free credit"],
                    }),
                    " ",
                    "to build, deploy, and scale apps quickly using our simple solution.",
                  ],
                }),
                link: {
                  title: "Sign up to activate",
                  url: "https://cloud.digitalocean.com/registrations/new?refcode=".concat(
                    r.rh.communityFTOAll
                  ),
                },
              }
            : "cta_functions" === e
            ? {
                background: "linear-gradient("
                  .concat(n.ZP.blue2, ",")
                  .concat(n.ZP.blueDarkExp, ")"),
                color: n.ZP.white,
                coralTopColor: n.ZP.raspberry,
                coralBottomColor: n.ZP.honeydew,
                title: "Run functions on demand. Scale automatically.",
                body: (0, a.jsxs)("p", {
                  children: [
                    "Get",
                    " ",
                    (0, a.jsxs)("strong", {
                      children: [r.KM.credit, " ", "free credit"],
                    }),
                    " ",
                    "to try DigitalOcean Functions, a serverless computing solution.",
                  ],
                }),
                link: {
                  title: "Sign up to activate",
                  url: "https://cloud.digitalocean.com/registrations/new?refcode=".concat(
                    r.rh.communityFTOAll
                  ),
                },
              }
            : "cta_mongodb" === e
            ? {
                background: "linear-gradient("
                  .concat(n.ZP.blue2, ",")
                  .concat(n.ZP.blueDarkExp, ")"),
                color: n.ZP.white,
                coralTopColor: n.ZP.raspberry,
                coralBottomColor: n.ZP.honeydew,
                title: "Worry-free MongoDB database hosting",
                body: (0, a.jsxs)("p", {
                  children: [
                    "Get",
                    " ",
                    (0, a.jsxs)("strong", {
                      children: [r.KM.credit, " ", "free credit"],
                    }),
                    " ",
                    "to try our fully managed MongoDB clusters on-demand.",
                  ],
                }),
                link: {
                  title: "Sign up to activate",
                  url: "https://cloud.digitalocean.com/registrations/new?refcode=".concat(
                    r.rh.communityFTOAll
                  ),
                },
              }
            : "cta_postgresql" === e
            ? {
                background: "linear-gradient("
                  .concat(n.ZP.blue2, ",")
                  .concat(n.ZP.blueDarkExp, ")"),
                color: n.ZP.white,
                coralTopColor: n.ZP.raspberry,
                coralBottomColor: n.ZP.honeydew,
                title: "Worry-free PostgreSQL database hosting",
                body: (0, a.jsxs)("p", {
                  children: [
                    "Get",
                    " ",
                    (0, a.jsxs)("strong", {
                      children: [r.KM.credit, " ", "free credit"],
                    }),
                    " ",
                    "to try our fully managed PostgreSQL solution.",
                  ],
                }),
                link: {
                  title: "Sign up to activate",
                  url: "https://cloud.digitalocean.com/registrations/new?refcode=".concat(
                    r.rh.communityFTOAll
                  ),
                },
              }
            : "cta_mysql" === e
            ? {
                background: "linear-gradient("
                  .concat(n.ZP.blue2, ",")
                  .concat(n.ZP.blueDarkExp, ")"),
                color: n.ZP.white,
                coralTopColor: n.ZP.raspberry,
                coralBottomColor: n.ZP.honeydew,
                title: "Worry-free MySQL database hosting",
                body: (0, a.jsxs)("p", {
                  children: [
                    "Get",
                    " ",
                    (0, a.jsxs)("strong", {
                      children: [r.KM.credit, " ", "free credit"],
                    }),
                    " ",
                    "to try our fully managed MySQL solution.",
                  ],
                }),
                link: {
                  title: "Sign up to activate",
                  url: "https://cloud.digitalocean.com/registrations/new?refcode=".concat(
                    r.rh.communityFTOAll
                  ),
                },
              }
            : "cta_redis" === e
            ? {
                background: "linear-gradient("
                  .concat(n.ZP.blue2, ",")
                  .concat(n.ZP.blueDarkExp, ")"),
                color: n.ZP.white,
                coralTopColor: n.ZP.raspberry,
                coralBottomColor: n.ZP.honeydew,
                title: "Worry-free Redis database hosting",
                body: (0, a.jsxs)("p", {
                  children: [
                    "Get",
                    " ",
                    (0, a.jsxs)("strong", {
                      children: [r.KM.credit, " ", "free credit"],
                    }),
                    " ",
                    "to try our fully managed Redis solution.",
                  ],
                }),
                link: {
                  title: "Sign up to activate",
                  url: "https://cloud.digitalocean.com/registrations/new?refcode=".concat(
                    r.rh.communityFTOAll
                  ),
                },
              }
            : null;
        };
    },
    43624: function (e, t, o) {
      var n = o(50029),
        r = o(87794),
        i = o.n(r),
        l = (function () {
          var e = (0, n.Z)(
            i().mark(function e(t, o, n, r) {
              var l;
              return i().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!(t.length > 0)) {
                        e.next = 5;
                        break;
                      }
                      return (
                        (e.next = 3),
                        n(
                          t.map(function (e) {
                            return e.id;
                          }),
                          r
                        )
                      );
                    case 3:
                      return (
                        (l = e.sent),
                        e.abrupt(
                          "return",
                          l
                            .filter(function (e) {
                              return e.id !== o;
                            })
                            .slice(0, 2)
                        )
                      );
                    case 5:
                      return e.abrupt("return", []);
                    case 6:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, o, n, r) {
            return e.apply(this, arguments);
          };
        })();
      t.Z = l;
    },
    58066: function (e, t) {
      t.Z = function (e) {
        return e
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#039;");
      };
    },
    68973: function (e, t, o) {
      var n = o(67294),
        r = o(45697),
        i = o.n(r);
      function l() {
        return (
          (l =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var o = arguments[t];
                for (var n in o)
                  Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
              }
              return e;
            }),
          l.apply(this, arguments)
        );
      }
      function a(e, t) {
        if (null == e) return {};
        var o,
          n,
          r = (function (e, t) {
            if (null == e) return {};
            var o,
              n,
              r = {},
              i = Object.keys(e);
            for (n = 0; n < i.length; n++)
              (o = i[n]), t.indexOf(o) >= 0 || (r[o] = e[o]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++)
            (o = i[n]),
              t.indexOf(o) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, o) &&
                  (r[o] = e[o]));
        }
        return r;
      }
      var c = (0, n.forwardRef)(function (e, t) {
        var o = e.color,
          r = void 0 === o ? "currentColor" : o,
          i = e.size,
          c = void 0 === i ? 24 : i,
          s = a(e, ["color", "size"]);
        return n.createElement(
          "svg",
          l(
            {
              ref: t,
              xmlns: "http://www.w3.org/2000/svg",
              width: c,
              height: c,
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: r,
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            },
            s
          ),
          n.createElement("circle", { cx: "12", cy: "12", r: "10" }),
          n.createElement("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
          n.createElement("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" })
        );
      });
      (c.propTypes = {
        color: i().string,
        size: i().oneOfType([i().string, i().number]),
      }),
        (c.displayName = "AlertCircle"),
        (t.Z = c);
    },
    23157: function (e, t, o) {
      var n = o(65342),
        r = o(87462),
        i = o(67294),
        l = o(7981),
        a =
          (o(68357),
          o(73935),
          o(73469),
          (0, i.forwardRef)(function (e, t) {
            var o = (0, n.u)(e);
            return i.createElement(l.S, (0, r.Z)({ ref: t }, o));
          }));
      t.ZP = a;
    },
  },
]);
