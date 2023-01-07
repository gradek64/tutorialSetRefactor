"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8562],
  {
    68605: function (e, t, r) {
      r.d(t, {
        B: function () {
          return o;
        },
      });
      var n = r(88134),
        o = r(37797).ZP.button.withConfig({
          displayName: "LoadMoreButtonStyles__StyledLoadMoreButton",
          componentId: "sc-1my1ou7-0",
        })(
          [
            "background:",
            ";border:1px solid ",
            ";border-radius:10px;box-shadow:none;color:",
            ";cursor:pointer;font-size:16px;line-height:24px;margin:1rem auto;padding:8px 20px;text-align:center;&:hover{background:",
            ";box-shadow:0 10px 20px ",
            ";color:",
            ";transition:box-shadow 0.25s linear,-webkit-box-shadow 0.25s linear;}",
          ],
          n.ZP.white,
          n.ZP.grayBorder,
          n.ZP.gray3,
          n.ZP.blueHover,
          (0, n.E9)(n.ZP.blueDark, 0.1),
          n.ZP.white
        );
    },
    21346: function (e, t, r) {
      var n = r(37797),
        o = r(68605),
        a = r(85893),
        l = function (e) {
          var t = e.visible,
            r = e.onClick,
            n = e.message,
            o = e.styles;
          return (
            t &&
            (0, a.jsx)(i, { type: "button", onClick: r, $_css: o, children: n })
          );
        };
      (t.Z = l), (l.defaultProps = { message: "Load More", styles: null });
      var i = (0, n.ZP)(o.B).withConfig({
        displayName: "LoadMoreButton___StyledStyledLoadMoreButton",
        componentId: "sc-1xkxrc2-0",
      })(["", ""], function (e) {
        return e.$_css;
      });
    },
    98992: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return f;
        },
      });
      var n = r(37797),
        o = r(67294),
        a = r(5918),
        l = r(83206),
        i = n.ZP.div.withConfig({
          displayName: "SearchStyles__StyledSearchContainer",
          componentId: "sc-exxxze-0",
        })(["position:relative;width:100%;"]),
        u = n.ZP.label.withConfig({
          displayName: "SearchStyles__StyledSearchLabel",
          componentId: "sc-exxxze-1",
        })([
          "border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;",
        ]),
        s = (0, n.ZP)(l.Z).withConfig({
          displayName: "SearchStyles__StyledSearchIcon",
          componentId: "sc-exxxze-2",
        })([
          "color:hsl(0,0%,60%);height:1.5rem;left:0;margin:1rem 1.25rem;pointer-events:none;position:absolute;top:0;width:1.5rem;",
        ]),
        c = n.ZP.input.withConfig({
          displayName: "SearchStyles__StyledSearchInput",
          componentId: "sc-exxxze-3",
        })([
          "border:0;border-radius:4px;color:hsl(0,0%,30%);display:inline-block;font-size:18px;font-weight:400;line-height:1.5rem;padding:1rem 1.5rem 1rem 4rem;width:100%;",
        ]),
        d = r(85893),
        p = function (e) {
          var t = e.placeholder,
            r = e.styles,
            n = e.value,
            l = e.onChange,
            i = (0, o.useState)(),
            p = i[0],
            f = i[1];
          return (
            (0, o.useEffect)(function () {
              f((0, a.Z)());
            }, []),
            (0, d.jsxs)(y, {
              $_css: r,
              children: [
                (0, d.jsx)(s, {}),
                (0, d.jsx)(u, { htmlFor: p, children: t }),
                (0, d.jsx)(c, {
                  id: p,
                  placeholder: t,
                  type: "text",
                  value: n,
                  onChange: l,
                }),
              ],
            })
          );
        },
        f = p;
      p.defaultProps = { placeholder: null, styles: null };
      var y = (0, n.ZP)(i).withConfig({
        displayName: "Search___StyledStyledSearchContainer",
        componentId: "sc-1ezx7ji-0",
      })(["", ""], function (e) {
        return e.$_css;
      });
    },
    84089: function (e, t, r) {
      r.r(t),
        r.d(t, {
          default: function () {
            return Z;
          },
        });
      var n = r(67294),
        o = r(9008),
        a = r.n(o),
        l = r(11163),
        i = r(50029),
        u = r(87794),
        s = r.n(u),
        c = r(17053),
        d = r(83454),
        p = (function () {
          var e = (0, i.Z)(
            s().mark(function e() {
              var t, r;
              return s().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        "return",
                        null !== (t = d) &&
                          void 0 !== d &&
                          null !== (r = t.env) &&
                          void 0 !== r &&
                          r.BYPASS_DATA_CACHE
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
        y = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : null,
            t = (0, n.useState)(e),
            r = t[0],
            o = t[1],
            a = (0, n.useMemo)(
              function () {
                return r || [];
              },
              [r]
            );
          return (
            (0, n.useEffect)(
              function () {
                r ||
                  f().then(function (e) {
                    return o(e);
                  });
              },
              [r]
            ),
            a
          );
        },
        h = r(99963),
        g = r(41601),
        m = r(34531),
        v = r(58069),
        x = r(37797),
        b = x.ZP.div.withConfig({
          displayName: "ErrorTemplateStyles__StyledWrapper",
          componentId: "sc-gfxdmj-0",
        })([
          "align-items:center;display:flex;flex-direction:column;margin:112px 0 32px;",
        ]),
        w = x.ZP.h1.withConfig({
          displayName: "ErrorTemplateStyles__StyledTitle",
          componentId: "sc-gfxdmj-1",
        })([
          "color:#031b4e;font-size:48px;font-weight:700;letter-spacing:-1px;line-height:1.2;margin:48px 0 16px;text-align:center;",
        ]),
        _ = x.ZP.p.withConfig({
          displayName: "ErrorTemplateStyles__StyledMessage",
          componentId: "sc-gfxdmj-2",
        })(["color:#031b4e;font-family:monospace;text-align:center;"]),
        O = r(85893),
        k = function (e) {
          var t = e.message,
            r = e.secondaryMessage,
            n = e.showAuthButton;
          return (0, O.jsx)(v.Z, {
            children: (0, O.jsxs)(b, {
              children: [
                (0, O.jsxs)(w, {
                  children: [
                    (0, O.jsx)("small", { children: "D" }),
                    ":",
                    (0, O.jsx)("br", {}),
                    (0, O.jsx)("small", { children: t }),
                  ],
                }),
                n
                  ? (0, O.jsx)(m.Z, {
                      url: (0, g.Z)(),
                      className: "is-primary is-rounded",
                      children: "Try again",
                    })
                  : (0, O.jsx)(m.Z, {
                      url: "/",
                      className: "is-primary is-rounded",
                      children: "Go home",
                    }),
                r && (0, O.jsx)(_, { children: r }),
              ],
            }),
          });
        },
        j = k;
      k.defaultProps = { secondaryMessage: "", showAuthButton: !1 };
      var S = function (e) {
          var t = e.statusCode,
            r = e.authFailure,
            o = e.announcementData,
            i = y(o),
            u = (0, l.useRouter)(),
            s = (0, n.useMemo)(
              function () {
                if (r)
                  return {
                    title: "Authentication error",
                    message: "Something went wrong when signing you in",
                    secondary: ""
                      .concat(u.query.error_code, ": ")
                      .concat(u.query.error_message),
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
              [r, u.query, t]
            ),
            c = (0, n.useMemo)(
              function () {
                return { data: { title: [{ text: s.title || s.message }] } };
              },
              [s]
            );
          return (0, O.jsxs)(h.Z, {
            announcementData: i,
            metaData: c,
            children: [
              (0, O.jsx)(a(), {
                children: (0, O.jsx)("meta", {
                  name: "robots",
                  content: "noindex",
                }),
              }),
              (0, O.jsx)(j, {
                message: s.message || s.title,
                secondaryMessage: s.secondary,
                showAuthButton: s.showAuthButton,
              }),
            ],
          });
        },
        Z = S;
      S.defaultProps = {
        statusCode: null,
        authFailure: !1,
        announcementData: null,
      };
    },
    75669: function (e, t) {
      t.Z = function (e) {
        return e
          .replace(/(?:^|_)(.)/g, function (e, t) {
            return " ".concat(t.toUpperCase());
          })
          .trim();
      };
    },
    38571: function (e, t, r) {
      var n = r(67294),
        o = r(45697),
        a = r.n(o);
      function l() {
        return (
          (l =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }),
          l.apply(this, arguments)
        );
      }
      function i(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              o = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (r = a[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (o[r] = e[r]));
        }
        return o;
      }
      var u = (0, n.forwardRef)(function (e, t) {
        var r = e.color,
          o = void 0 === r ? "currentColor" : r,
          a = e.size,
          u = void 0 === a ? 24 : a,
          s = i(e, ["color", "size"]);
        return n.createElement(
          "svg",
          l(
            {
              ref: t,
              xmlns: "http://www.w3.org/2000/svg",
              width: u,
              height: u,
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: o,
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            },
            s
          ),
          n.createElement("circle", { cx: "12", cy: "8", r: "7" }),
          n.createElement("polyline", {
            points: "8.21 13.89 7 23 12 20 17 23 15.79 13.88",
          })
        );
      });
      (u.propTypes = {
        color: a().string,
        size: a().oneOfType([a().string, a().number]),
      }),
        (u.displayName = "Award"),
        (t.Z = u);
    },
    82802: function (e, t, r) {
      var n = r(67294),
        o = r(45697),
        a = r.n(o);
      function l() {
        return (
          (l =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }),
          l.apply(this, arguments)
        );
      }
      function i(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              o = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (r = a[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (o[r] = e[r]));
        }
        return o;
      }
      var u = (0, n.forwardRef)(function (e, t) {
        var r = e.color,
          o = void 0 === r ? "currentColor" : r,
          a = e.size,
          u = void 0 === a ? 24 : a,
          s = i(e, ["color", "size"]);
        return n.createElement(
          "svg",
          l(
            {
              ref: t,
              xmlns: "http://www.w3.org/2000/svg",
              width: u,
              height: u,
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: o,
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            },
            s
          ),
          n.createElement("polyline", { points: "18 15 12 9 6 15" })
        );
      });
      (u.propTypes = {
        color: a().string,
        size: a().oneOfType([a().string, a().number]),
      }),
        (u.displayName = "ChevronUp"),
        (t.Z = u);
    },
    47811: function (e, t, r) {
      var n = r(67294),
        o = r(45697),
        a = r.n(o);
      function l() {
        return (
          (l =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }),
          l.apply(this, arguments)
        );
      }
      function i(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              o = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (r = a[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (o[r] = e[r]));
        }
        return o;
      }
      var u = (0, n.forwardRef)(function (e, t) {
        var r = e.color,
          o = void 0 === r ? "currentColor" : r,
          a = e.size,
          u = void 0 === a ? 24 : a,
          s = i(e, ["color", "size"]);
        return n.createElement(
          "svg",
          l(
            {
              ref: t,
              xmlns: "http://www.w3.org/2000/svg",
              width: u,
              height: u,
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: o,
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            },
            s
          ),
          n.createElement("path", {
            d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",
          })
        );
      });
      (u.propTypes = {
        color: a().string,
        size: a().oneOfType([a().string, a().number]),
      }),
        (u.displayName = "Heart"),
        (t.Z = u);
    },
    56965: function (e, t, r) {
      var n = r(67294),
        o = r(45697),
        a = r.n(o);
      function l() {
        return (
          (l =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }),
          l.apply(this, arguments)
        );
      }
      function i(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              o = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (r = a[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (o[r] = e[r]));
        }
        return o;
      }
      var u = (0, n.forwardRef)(function (e, t) {
        var r = e.color,
          o = void 0 === r ? "currentColor" : r,
          a = e.size,
          u = void 0 === a ? 24 : a,
          s = i(e, ["color", "size"]);
        return n.createElement(
          "svg",
          l(
            {
              ref: t,
              xmlns: "http://www.w3.org/2000/svg",
              width: u,
              height: u,
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: o,
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            },
            s
          ),
          n.createElement("circle", { cx: "12", cy: "12", r: "10" }),
          n.createElement("circle", { cx: "12", cy: "12", r: "4" }),
          n.createElement("line", {
            x1: "4.93",
            y1: "4.93",
            x2: "9.17",
            y2: "9.17",
          }),
          n.createElement("line", {
            x1: "14.83",
            y1: "14.83",
            x2: "19.07",
            y2: "19.07",
          }),
          n.createElement("line", {
            x1: "14.83",
            y1: "9.17",
            x2: "19.07",
            y2: "4.93",
          }),
          n.createElement("line", {
            x1: "14.83",
            y1: "9.17",
            x2: "18.36",
            y2: "5.64",
          }),
          n.createElement("line", {
            x1: "4.93",
            y1: "19.07",
            x2: "9.17",
            y2: "14.83",
          })
        );
      });
      (u.propTypes = {
        color: a().string,
        size: a().oneOfType([a().string, a().number]),
      }),
        (u.displayName = "LifeBuoy"),
        (t.Z = u);
    },
    90408: function (e, t, r) {
      var n = r(67294),
        o = r(45697),
        a = r.n(o);
      function l() {
        return (
          (l =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }),
          l.apply(this, arguments)
        );
      }
      function i(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              o = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (r = a[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (o[r] = e[r]));
        }
        return o;
      }
      var u = (0, n.forwardRef)(function (e, t) {
        var r = e.color,
          o = void 0 === r ? "currentColor" : r,
          a = e.size,
          u = void 0 === a ? 24 : a,
          s = i(e, ["color", "size"]);
        return n.createElement(
          "svg",
          l(
            {
              ref: t,
              xmlns: "http://www.w3.org/2000/svg",
              width: u,
              height: u,
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: o,
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            },
            s
          ),
          n.createElement("line", { x1: "3", y1: "12", x2: "21", y2: "12" }),
          n.createElement("line", { x1: "3", y1: "6", x2: "21", y2: "6" }),
          n.createElement("line", { x1: "3", y1: "18", x2: "21", y2: "18" })
        );
      });
      (u.propTypes = {
        color: a().string,
        size: a().oneOfType([a().string, a().number]),
      }),
        (u.displayName = "Menu"),
        (t.Z = u);
    },
    60619: function (e, t, r) {
      var n = r(67294);
      function o() {
        return (
          (o =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }),
          o.apply(this, arguments)
        );
      }
      t.Z = function (e, t) {
        void 0 === t && (t = {});
        var a,
          l = t,
          i = l.volume,
          u = void 0 === i ? 1 : i,
          s = l.playbackRate,
          c = void 0 === s ? 1 : s,
          d = l.soundEnabled,
          p = void 0 === d || d,
          f = l.interrupt,
          y = void 0 !== f && f,
          h = l.onload,
          g = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              o = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
            return o;
          })(l, [
            "id",
            "volume",
            "playbackRate",
            "soundEnabled",
            "interrupt",
            "onload",
          ]),
          m = n.useRef(null),
          v = n.useRef(!1),
          x = n.useState(null),
          b = x[0],
          w = x[1],
          _ = n.useState(null),
          O = _[0],
          k = _[1],
          j = function () {
            "function" === typeof h && h.call(this),
              v.current && w(1e3 * this.duration()),
              k(this);
          };
        (a = function () {
          return (
            r
              .e(1766)
              .then(r.t.bind(r, 41766, 23))
              .then(function (t) {
                var r;
                v.current ||
                  ((m.current =
                    null !== (r = t.Howl) && void 0 !== r ? r : t.default.Howl),
                  (v.current = !0),
                  new m.current(
                    o(
                      {
                        src: Array.isArray(e) ? e : [e],
                        volume: u,
                        rate: c,
                        onload: j,
                      },
                      g
                    )
                  ));
              }),
            function () {
              v.current = !1;
            }
          );
        }),
          (0, n.useEffect)(a, []),
          n.useEffect(
            function () {
              m.current &&
                O &&
                k(
                  new m.current(
                    o(
                      { src: Array.isArray(e) ? e : [e], volume: u, onload: j },
                      g
                    )
                  )
                );
            },
            [JSON.stringify(e)]
          ),
          n.useEffect(
            function () {
              O && (O.volume(u), O.rate(c));
            },
            [u, c]
          );
        var S = n.useCallback(
            function (e) {
              "undefined" === typeof e && (e = {}),
                O &&
                  (p || e.forceSoundEnabled) &&
                  (y && O.stop(),
                  e.playbackRate && O.rate(e.playbackRate),
                  O.play(e.id));
            },
            [O, p, y]
          ),
          Z = n.useCallback(
            function (e) {
              O && O.stop(e);
            },
            [O]
          ),
          E = n.useCallback(
            function (e) {
              O && O.pause(e);
            },
            [O]
          );
        return [S, { sound: O, stop: Z, pause: E, duration: b }];
      };
    },
  },
]);
