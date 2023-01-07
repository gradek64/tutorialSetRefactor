(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7306],
  {
    45279: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return g;
        },
      });
      var i = n(4486),
        o = n(17534),
        r = n(88134),
        l = n(87288),
        a = n(37797),
        s = "/_next/static/media/ctaFish.83d8c96f.svg",
        d = a.ZP.div.withConfig({
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
                  (0, o.X)(o.A.mediumDesktop, "max"),
                  " {\n        background: "
                )
                .concat(e.gradient, ";\n      }")
            );
          },
          (0, o.X)(o.A.mediumDesktop, "min"),
          function (e) {
            var t;
            return null !== (t = e.image) && void 0 !== t ? t : s;
          },
          function (e) {
            return e.gradient && ", ".concat(e.gradient);
          }
        ),
        c = a.ZP.div.withConfig({
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
          (0, o.X)(o.A.mediumDesktop, "min"),
          r.ZP.white,
          (0, l.Z)("primary"),
          (0, o.X)(o.A.mediumDesktop, "min"),
          function (e) {
            var t;
            return null !== (t = e.color) && void 0 !== t ? t : r.ZP.gray7;
          },
          (0, o.X)(o.A.mediumDesktop, "min"),
          r.ZP.white,
          (0, l.Z)("code"),
          r.ZP.white,
          (0, l.Z)("code")
        ),
        u = n(85893),
        p = function (e) {
          var t = e.title,
            n = e.className,
            o = e.content,
            r = e.contentRight,
            l = e.linkText,
            a = e.link,
            s = e.image,
            p = e.bgColor,
            g = e.bgPosition,
            m = e.bgSize,
            h = e.gradient,
            f = e.color;
          return (0, u.jsxs)(d, {
            className: n,
            image: s,
            bgColor: p,
            bgPosition: g,
            bgSize: m,
            gradient: h,
            children: [
              (0, u.jsxs)(c, {
                color: f,
                children: [
                  (0, u.jsx)("h3", { children: t }),
                  (0, u.jsx)("p", { children: o }),
                  a && (0, u.jsx)(i.Z, { dashArrow: !0, url: a, children: l }),
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
    10814: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return x;
        },
      });
      var i = n(27812),
        o = n(67294),
        r = n(41664),
        l = n.n(r),
        a = n(11163),
        s = n(88134),
        d = n(87288),
        c = n(37797),
        u = c.ZP.div.withConfig({
          displayName: "TableOfContentsStyles__StyledTableOfContentsContainer",
          componentId: "sc-126nigt-0",
        })([
          "align-items:flex-start;display:flex;flex-direction:column;font-size:14px;font-weight:500;margin-bottom:16px;padding-bottom:16px;",
        ]),
        p = c.ZP.ul.withConfig({
          displayName: "TableOfContentsStyles__StyledTableOfContentsTitle",
          componentId: "sc-126nigt-1",
        })(
          [
            "color:",
            ";font-size:14px;font-weight:700;letter-spacing:1px;line-height:22px;text-transform:uppercase;",
          ],
          s.ZP.gray1
        ),
        g = c.ZP.ul.withConfig({
          displayName: "TableOfContentsStyles__StyledTableOfContentsList",
          componentId: "sc-126nigt-2",
        })(
          [
            "color:",
            ";font-size:14px;letter-spacing:1px;line-height:1.2;list-style:none;opacity:1;",
          ],
          s.ZP.gray1
        ),
        m = c.ZP.li.withConfig({
          displayName: "TableOfContentsStyles__StyledTableOfContentsListItem",
          componentId: "sc-126nigt-3",
        })(
          [
            "font-size:14px;letter-spacing:1px;line-height:1.1;margin:",
            ";overflow-wrap:break-word;",
          ],
          function (e) {
            return e.level
              ? "12px 0 0 ".concat(24 * (e.level - 1), "px")
              : "12px 0 0";
          }
        ),
        h = c.ZP.a.withConfig({
          displayName: "TableOfContentsStyles__StyledTableOfContentsListLink",
          componentId: "sc-126nigt-4",
        })(
          [
            "color:",
            ";cursor:pointer;font-family:",
            ";font-size:16px;font-weight:400;line-height:24px;text-decoration:none;&:hover{color:",
            ";}",
          ],
          function (e) {
            return e.active ? s.ZP.gray2 : s.ZP.gray5;
          },
          (0, d.Z)("body"),
          s.ZP.blueDark
        ),
        f = n(85893),
        x = function (e) {
          var t = e.headers,
            n = e.slim,
            r = (0, a.useRouter)(),
            s = (0, o.useState)(""),
            d = s[0],
            c = s[1];
          (0, o.useEffect)(
            function () {
              var e = r.asPath.split("#")[1];
              c(e);
            },
            [r]
          );
          var x = (0, o.useMemo)(
            function () {
              return (
                Math.min.apply(
                  Math,
                  (0, i.Z)(
                    t
                      .map(function (e) {
                        return e.level;
                      })
                      .filter(function (e) {
                        return !Number.isNaN(e);
                      })
                  )
                ) || 1
              );
            },
            [t]
          );
          return (0, f.jsx)(u, {
            slim: n,
            children: (0, f.jsxs)(g, {
              children: [
                (null === t || void 0 === t ? void 0 : t.length) > 0 &&
                  (0, f.jsx)(p, { children: "CONTENTS" }),
                null === t || void 0 === t
                  ? void 0
                  : t.map(function (e, t) {
                      return (0,
                      f.jsx)(m, { level: 0 === t ? 1 : (e.level || 1) - (x - 1), children: (0, f.jsx)(l(), { href: "#".concat(e.slug), passHref: !0, children: (0, f.jsx)(h, { active: e.slug === d, children: e.text || e.title }) }) }, e.slug);
                    }),
              ],
            }),
          });
        };
    },
    90221: function (e, t, n) {
      "use strict";
      n.d(t, {
        V: function () {
          return x;
        },
        h: function () {
          return h;
        },
      });
      var i = n(59499),
        o = n(16835),
        r = n(37797),
        l = n(67294),
        a = n(45697),
        s = n.n(a),
        d = n(62080),
        c = n(90352),
        u = n(33201),
        p = n(85893);
      function g(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? g(Object(n), !0).forEach(function (t) {
                (0, i.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : g(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var h = function (e) {
          e.label, e.content;
          return null;
        },
        f = function (e) {
          var t = e.label,
            n = e.label_color,
            i = e.id,
            o = e.text_color,
            r = e.isSelected,
            l = e.onClick,
            a = r && "light" === o ? "#0069ff" : "rgba(3, 27, 78, 0.6)";
          return (0, p.jsxs)(y, {
            id: i,
            className: "light" === o ? "white" : "darkblue",
            style: { color: n || r ? "darkblue" : "rgba(3, 27, 78, 0.6)" },
            onClick: l,
            children: [
              t,
              (0, p.jsx)(v, {
                children: (0, p.jsx)(b, {
                  x1: "1.5",
                  x2: "1.5",
                  y1: "2px",
                  y2: "48px",
                  className: r ? "selected" : "",
                  style: { stroke: r && a },
                }),
              }),
            ],
          });
        },
        x = function (e) {
          var t = e.children,
            n = e.text_color,
            i = e.button_text,
            a = e.button_link,
            s = e.button_color,
            d = (0, l.useState)(0),
            c = d[0],
            g = d[1],
            h = (0, l.useState)(!1),
            x = h[0],
            y = h[1],
            v = (0, l.useRef)([]),
            b = (0, l.useRef)([]);
          (0, l.useEffect)(function () {
            var e = new IntersectionObserver(
              function (e) {
                var t = (0, o.Z)(e, 1)[0];
                if (t.isIntersecting && t.intersectionRatio > 0.5 && !x) {
                  var n = Number(t.target.getAttribute("data-tab-id"));
                  g(n);
                }
              },
              { thresholdMargin: 60, threshold: [0.5] }
            );
            v.current.forEach(function (t) {
              e.observe(t);
            });
          });
          return (0, p.jsx)("div", {
            className: "container",
            children: (0, p.jsxs)("div", {
              className: "columns is-multiline",
              children: [
                (0, p.jsxs)(w, {
                  className: "column is-2-desktop",
                  children: [
                    l.Children.map(t || null, function (e, t) {
                      return (0, l.createElement)(
                        f,
                        m(
                          m({}, e.props),
                          {},
                          {
                            id: "testControlledTab-".concat(t),
                            text_color: n,
                            key: e.key,
                            isSelected: c === t,
                            onClick: function () {
                              return (
                                (e = t),
                                void (
                                  b.current[e] &&
                                  (y(!0),
                                  b.current[e].scrollIntoView({
                                    behavior: "smooth",
                                  }),
                                  g(e),
                                  window.setTimeout(function () {
                                    y(!1);
                                  }, 500))
                                )
                              );
                              var e;
                            },
                          }
                        )
                      );
                    }),
                    a && a.url
                      ? (0, p.jsx)(_, {
                          className:
                            "primary" === s
                              ? "button-link is-primary ".concat(
                                  s.includes("outline") ? "is-outlined" : ""
                                )
                              : "button-link is-white ".concat(
                                  s.includes("outline") ? "is-outlined" : ""
                                ),
                          url: a.url,
                          children: i,
                        })
                      : null,
                  ],
                }),
                (0, p.jsx)(Z, {
                  className: "column",
                  children: (0, p.jsx)(j, {
                    id: "testTabContent",
                    children: l.Children.map(t, function (e, t) {
                      if (null === e) return null;
                      var n = (0, r.iv)(["animation:none;", ""], u.Vy);
                      return (0, p.jsxs)(
                        S,
                        {
                          ref: function (e) {
                            v.current[t] = e;
                          },
                          "data-tab-id": t,
                          $_css: n,
                          children: [
                            (0, p.jsx)(P, {
                              ref: function (e) {
                                b.current[t] = e;
                              },
                            }),
                            l.Children.map(e.props.children, function (e) {
                              return e;
                            }),
                          ],
                        },
                        e.key
                      );
                    }),
                  }),
                }),
              ],
            }),
          });
        };
      (h.propTypes = { label: s().string.isRequired }),
        (f.defaultProps = { label_color: null }),
        (x.defaultProps = {
          button_text: null,
          button_link: null,
          button_color: null,
        });
      var y = (0, r.ZP)(d.Z).withConfig({
          displayName: "SlidingTabs___StyledButton",
          componentId: "sc-1yrceww-0",
        })(["", ""], u.D5),
        v = (0, r.ZP)("svg").withConfig({
          displayName: "SlidingTabs___StyledSvg",
          componentId: "sc-1yrceww-1",
        })(["", ""], u.Mj),
        b = (0, r.ZP)("line").withConfig({
          displayName: "SlidingTabs___StyledLine",
          componentId: "sc-1yrceww-2",
        })(["", ""], u.wm),
        w = (0, r.ZP)("div").withConfig({
          displayName: "SlidingTabs___StyledDiv",
          componentId: "sc-1yrceww-3",
        })(["", ""], u.jC),
        _ = (0, r.ZP)(c.Z).withConfig({
          displayName: "SlidingTabs___StyledLazyLink",
          componentId: "sc-1yrceww-4",
        })(["", ""], u.yc),
        Z = (0, r.ZP)("div").withConfig({
          displayName: "SlidingTabs___StyledDiv2",
          componentId: "sc-1yrceww-5",
        })(["", ""], u.jY),
        j = (0, r.ZP)("div").withConfig({
          displayName: "SlidingTabs___StyledDiv3",
          componentId: "sc-1yrceww-6",
        })(["", ""], u.HO),
        S = (0, r.ZP)("div").withConfig({
          displayName: "SlidingTabs___StyledDiv4",
          componentId: "sc-1yrceww-7",
        })(["", ""], function (e) {
          return e.$_css;
        }),
        P = (0, r.ZP)("div").withConfig({
          displayName: "SlidingTabs___StyledDiv5",
          componentId: "sc-1yrceww-8",
        })(["", ""], u.XZ);
    },
    80479: function (e, t, n) {
      "use strict";
      n.d(t, {
        OK: function () {
          return i.O;
        },
        TZ: function () {
          return i.T;
        },
        Mu: function () {
          return o.M;
        },
        Mz: function () {
          return h;
        },
      });
      n(90221);
      var i = n(72080),
        o = n(69631),
        r = n(59499),
        l = n(37797),
        a = n(67294),
        s = n(88134),
        d = n(62080),
        c = n(33201),
        u = n(85893);
      function p(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function g(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? p(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : p(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var m = function (e) {
          var t = e.label,
            n = e.id,
            i = e.isSelected,
            o = e.onClick,
            r = s.ZP.blueDark,
            l = s.ZP.grayBorder,
            a = s.ZP.blueLight;
          return (0, u.jsxs)(f, {
            id: n,
            className: "darkblue",
            style: { color: i ? r : l },
            onClick: o,
            children: [
              t,
              (0, u.jsx)(x, {
                style: { backgroundColor: s.ZP.grayLight },
                children: (0, u.jsx)(y, {
                  x1: "1.5",
                  x2: "4000px",
                  y1: "2px",
                  y2: "2px",
                  className: i ? "selected" : "",
                  style: { stroke: i && a },
                }),
              }),
            ],
          });
        },
        h = function (e) {
          var t = e.children,
            n = (0, a.useState)(0),
            i = n[0],
            o = n[1],
            r = t[i];
          return (0, u.jsxs)("div", {
            className: "container",
            children: [
              (0, u.jsx)(v, {
                children: a.Children.map(
                  t.filter(function (e) {
                    return e;
                  }) || null,
                  function (e, t) {
                    return (0, a.createElement)(
                      m,
                      g(
                        g({}, e.props),
                        {},
                        {
                          id: "testControlledTab-".concat(t),
                          key: "tab-".concat(e.props.label),
                          isSelected: i === t,
                          onClick: function () {
                            return o(t);
                          },
                        }
                      )
                    );
                  }
                ),
              }),
              r.props.children,
            ],
          });
        },
        f = (0, l.ZP)(d.Z).withConfig({
          displayName: "TutorialTabs___StyledButton",
          componentId: "sc-6fpjf1-0",
        })(["", ""], c.D5),
        x = (0, l.ZP)("svg").withConfig({
          displayName: "TutorialTabs___StyledSvg",
          componentId: "sc-6fpjf1-1",
        })(["", ""], c.Dy),
        y = (0, l.ZP)("line").withConfig({
          displayName: "TutorialTabs___StyledLine",
          componentId: "sc-6fpjf1-2",
        })(["", ""], c.wm),
        v = (0, l.ZP)("div").withConfig({
          displayName: "TutorialTabs___StyledDiv",
          componentId: "sc-6fpjf1-3",
        })(["", ""], c.M);
    },
    38966: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return C;
        },
      });
      var i = n(37797),
        o = n(67294),
        r = n(88134),
        l = n(45697),
        a = n.n(l);
      function s() {
        return (
          (s =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
              }
              return e;
            }),
          s.apply(this, arguments)
        );
      }
      function d(e, t) {
        if (null == e) return {};
        var n,
          i,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              i,
              o = {},
              r = Object.keys(e);
            for (i = 0; i < r.length; i++)
              (n = r[i]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (i = 0; i < r.length; i++)
            (n = r[i]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      var c = (0, o.forwardRef)(function (e, t) {
        var n = e.color,
          i = void 0 === n ? "currentColor" : n,
          r = e.size,
          l = void 0 === r ? 24 : r,
          a = d(e, ["color", "size"]);
        return o.createElement(
          "svg",
          s(
            {
              ref: t,
              xmlns: "http://www.w3.org/2000/svg",
              width: l,
              height: l,
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: i,
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            },
            a
          ),
          o.createElement("path", {
            d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z",
          })
        );
      });
      (c.propTypes = {
        color: a().string,
        size: a().oneOfType([a().string, a().number]),
      }),
        (c.displayName = "Twitter");
      var u = c;
      function p() {
        return (
          (p =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
              }
              return e;
            }),
          p.apply(this, arguments)
        );
      }
      function g(e, t) {
        if (null == e) return {};
        var n,
          i,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              i,
              o = {},
              r = Object.keys(e);
            for (i = 0; i < r.length; i++)
              (n = r[i]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (i = 0; i < r.length; i++)
            (n = r[i]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      var m = (0, o.forwardRef)(function (e, t) {
        var n = e.color,
          i = void 0 === n ? "currentColor" : n,
          r = e.size,
          l = void 0 === r ? 24 : r,
          a = g(e, ["color", "size"]);
        return o.createElement(
          "svg",
          p(
            {
              ref: t,
              xmlns: "http://www.w3.org/2000/svg",
              width: l,
              height: l,
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: i,
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            },
            a
          ),
          o.createElement("path", {
            d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
          })
        );
      });
      (m.propTypes = {
        color: a().string,
        size: a().oneOfType([a().string, a().number]),
      }),
        (m.displayName = "Facebook");
      var h = m,
        f = n(55707),
        x = n(57054),
        y = i.ZP.div.withConfig({
          displayName: "WasThisHelpfulStyles__StyledContainer",
          componentId: "sc-ugfqut-0",
        })(
          [
            "align-items:center;border:1px solid ",
            ";border-radius:6px;box-shadow:0 2px 4px rgba(1,14,40,0.05);display:flex;flex-direction:row;justify-content:space-between;margin-bottom:40px;padding:24px 32px;",
          ],
          r.ZP.grayLight
        ),
        v = i.ZP.div.withConfig({
          displayName: "WasThisHelpfulStyles__StyledHelpfulContainer",
          componentId: "sc-ugfqut-1",
        })(["align-items:center;display:flex;flex-grow:3;"]),
        b = i.ZP.div.withConfig({
          displayName: "WasThisHelpfulStyles__StyledShareContainer",
          componentId: "sc-ugfqut-2",
        })([
          "align-items:center;display:flex;flex-grow:1;justify-content:flex-end;",
        ]),
        w = i.ZP.div.withConfig({
          displayName: "WasThisHelpfulStyles__StyledHelpfulText",
          componentId: "sc-ugfqut-3",
        })(
          [
            "color:",
            ";font-size:18px;font-weight:700;line-height:22px;padding-right:5px;",
          ],
          r.ZP.blueDark
        ),
        _ = i.ZP.div.withConfig({
          displayName: "WasThisHelpfulStyles__StyledHelpfulButtonContainer",
          componentId: "sc-ugfqut-4",
        })(["display:flex;"]),
        Z = i.ZP.button.withConfig({
          displayName: "WasThisHelpfulStyles__StyledHelpfulButton",
          componentId: "sc-ugfqut-5",
        })(
          [
            "background-color:transparent;border:1px solid ",
            ";border-radius:3px;box-sizing:border-box;color:",
            ";cursor:pointer;font-size:16px;font-weight:700;line-height:100%;margin-left:20px;padding:8px 24px;transition:background-color 0.25s ease,border 0.25s ease,color 0.25s ease;&:hover{background:rgba(0,105,255,0.1);}",
          ],
          r.ZP.blue2,
          r.ZP.blue2
        ),
        j = (0, i.iv)(["cursor:pointer;display:flex;margin:0 5px;"]),
        S = n(90352),
        P = n(85893),
        k = function (e) {
          var t = e.isYes,
            n = e.isNo,
            i = e.onYes,
            l = e.onNo,
            a = e.shareText,
            s = e.shareUrl,
            d = (0, x.Z)(),
            c = (0, f.N)().setNeedLogIn,
            p = "https://twitter.com/share?text="
              .concat(encodeURI(a), "&url=")
              .concat(encodeURIComponent(s)),
            g = "https://www.facebook.com/sharer/sharer.php?u=".concat(
              encodeURIComponent(s)
            ),
            m = (0, o.useCallback)(
              function () {
                d.token ? i() : c(!0);
              },
              [i, c, d]
            ),
            j = (0, o.useCallback)(
              function () {
                d.token ? l() : c(!0);
              },
              [l, c, d]
            );
          return (0, P.jsxs)(y, {
            children: [
              (0, P.jsx)(v, {
                children:
                  null === t && null === n
                    ? (0, P.jsxs)(P.Fragment, {
                        children: [
                          (0, P.jsx)(w, { children: "Was this helpful?" }),
                          (0, P.jsxs)(_, {
                            children: [
                              (0, P.jsx)(Z, { onClick: m, children: "Yes" }),
                              (0, P.jsx)(Z, { onClick: j, children: "No" }),
                            ],
                          }),
                        ],
                      })
                    : (0, P.jsx)(w, {
                        children: "Thank you for your feedback.",
                      }),
              }),
              (0, P.jsxs)(b, {
                children: [
                  (0, P.jsx)(T, {
                    url: p,
                    target: "_blank",
                    children: (0, P.jsx)(u, {
                      height: 20,
                      width: 20,
                      color: r.ZP.grayDark,
                      fill: r.ZP.grayDark,
                    }),
                  }),
                  (0, P.jsx)(A, {
                    url: g,
                    target: "_blank",
                    children: (0, P.jsx)(h, {
                      height: 20,
                      width: 20,
                      color: r.ZP.grayDark,
                      fill: r.ZP.grayDark,
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        C = k;
      k.defaultProps = { isYes: null, isNo: null };
      var T = (0, i.ZP)(S.Z).withConfig({
          displayName: "WasThisHelpful___StyledLazyLink",
          componentId: "sc-1u0wtjh-0",
        })(["", ""], j),
        A = (0, i.ZP)(S.Z).withConfig({
          displayName: "WasThisHelpful___StyledLazyLink2",
          componentId: "sc-1u0wtjh-1",
        })(["", ""], j);
    },
    95793: function (e, t, n) {
      "use strict";
      var i = n(67294),
        o = n(11163),
        r = n(57805);
      t.Z = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = (0, o.useRouter)();
        (0, i.useEffect)(
          function () {
            if (n.isReady && e) {
              var i = new URL(window.location.origin + n.asPath),
                o = i.pathname.split("/")[2];
              (0, r.Z)(e) !== o &&
                (t &&
                  !i.searchParams.has("subtype") &&
                  i.searchParams.set("subtype", o),
                (i.pathname = "/community/"
                  .concat((0, r.Z)(e), "/")
                  .concat(i.pathname.split("/").slice(3).join("/"))
                  .replace(/\/$/, "")),
                n.replace(i.toString()).then());
            }
          },
          [n, e, t]
        );
      };
    },
    67543: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __N_SSG: function () {
            return ti;
          },
          default: function () {
            return ni;
          },
        });
      var i = n(59499),
        o = n(50029),
        r = n(87794),
        l = n.n(r),
        a = n(67294),
        s = n(9008),
        d = n.n(s),
        c = n(11163),
        u = n(33606),
        p = n(17053),
        g = n(12284),
        m = n(92552),
        h = n(61337),
        f = n(43624),
        x = n(5918),
        y = n(6944),
        v = n(76427),
        b = n(59667),
        w = n(88723),
        _ = n(55707),
        Z = n(92077),
        j = n(57054),
        S = n(95793),
        P = n(75933),
        k = n(16835),
        C = n(27812),
        T = n(37797),
        A = n(41664),
        I = n.n(A),
        N = n(88134),
        O = n(68973),
        z = n(17534),
        L = n(87288),
        E = function (e) {
          var t = e.querySelectorAll('button[data-js="terminal"]');
          if (!t.length)
            throw new Error("Could not register Lyceum: no buttons found");
          var n = null,
            i = function (e) {
              var t = e.classList.contains("docked")
                  ? "QuestionAndTutorialOuterContainerStyles__StyledOuterContainer"
                  : "ContainerStyles__StyledContainer",
                n = e.querySelector("div").closest('[class*="'.concat(t, '"]'));
              (e.style["max-width"] = "".concat(
                n.getBoundingClientRect().width,
                "px"
              )),
                (e.style.left = "".concat(
                  n.getBoundingClientRect().left,
                  "px"
                ));
            },
            o = function (e) {
              (n = e),
                t.forEach(function (e) {
                  return e.setAttribute("disabled", "disabled");
                });
            },
            r = function (e) {
              var t = document.createElement("div");
              (t.className = "inline"), (t.id = "terminal-".concat((0, x.Z)()));
              var n,
                i = document.createElement("style");
              (i.innerHTML =
                ((n = t.id),
                "\n#"
                  .concat(n, " {\n  background: ")
                  .concat(
                    N.ZP.white,
                    ";\n  border-radius: 16px;\n  font-family: "
                  )
                  .concat(
                    (0, L.Z)("code"),
                    ";\n  padding: 0;\n  z-index: 1000 !important;\n}\n\n#"
                  )
                  .concat(
                    n,
                    ".docked {\n  bottom: 16px;\n  margin: 0;\n  position: fixed;\n  width: 100%;\n  max-width: calc(50rem + 170px + 17rem + 176px);\n}\n\n#"
                  )
                  .concat(
                    n,
                    ".inline {\n  bottom: 16px;\n  margin: 0 auto;\n  position: fixed;\n  width: 50rem;\n}\n\n"
                  )
                  .concat((0, z.X)(z.A.tablet), " {\n  #")
                  .concat(n, ".inline {\n    width: 50%;\n  }\n\n   #")
                  .concat(
                    n,
                    ".inline .terminal-controls {\n    padding: 24px 32px;\n  }\n\n  #"
                  )
                  .concat(
                    n,
                    ".inline .terminal-controls ul {\n    flex-wrap: wrap-reverse;\n    justify-content: end;\n    width: 100px;\n  }\n\n  #"
                  )
                  .concat(
                    n,
                    " .terminal-controls ul li.separator {\n    display: none;\n  }\n}\n\n#"
                  )
                  .concat(
                    n,
                    " .terminal-controls {\n  align-items: center;\n  min-height: 38px;\n  border: 1px solid "
                  )
                  .concat(
                    N.ZP.gray7,
                    ";\n  border-radius: 16px 16px 0 0;\n  background-color: "
                  )
                  .concat(
                    N.ZP.gray4,
                    ";\n  display: flex;\n  padding: 0 32px;\n  z-index: 1;\n}\n\n"
                  )
                  .concat((0, z.X)(z.A.largePhone), " {\n  #")
                  .concat(
                    n,
                    ".inline {\n    width: calc(100% - 24px);\n  }\n\n  #"
                  )
                  .concat(
                    n,
                    " .terminal-controls {\n    padding: 24px 32px;\n  }\n\n  #"
                  )
                  .concat(
                    n,
                    " .terminal-controls ul {\n    flex-wrap: wrap-reverse;\n    justify-content: end;\n    width: 100px;\n  }\n\n  #"
                  )
                  .concat(n, " .terminal-controls ul li.separator,\n  #")
                  .concat(n, " .terminal-controls ul li.expand,\n  #")
                  .concat(
                    n,
                    " .terminal-controls ul li.shrink {\n    display: none;\n  }\n}\n\n#"
                  )
                  .concat(
                    n,
                    " .terminal-controls-header {\n  align-items: center;\n  display: flex;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 22px;\n  min-width: 150px;\n  color: "
                  )
                  .concat(N.ZP.gray6, ";\n}\n\n#")
                  .concat(
                    n,
                    " .terminal-controls ul {\n  display: flex;\n  height: 100%;\n  margin: 0;\n  margin-left: auto;\n  padding: 0;\n}\n\n#"
                  )
                  .concat(
                    n,
                    " .terminal-controls ul li {\n  align-items: center;\n  color: "
                  )
                  .concat(
                    N.ZP.white,
                    ";\n  cursor: pointer;\n  display: flex;\n  font-size: 14px;\n  font-weight: 600;\n  list-style: none;\n  margin: .25rem .5rem;\n  padding: 0;\n}\n\n#"
                  )
                  .concat(
                    n,
                    " .terminal-controls ul li.separator {\n  cursor: default;\n}\n\n#"
                  )
                  .concat(
                    n,
                    " .terminal-controls ul li svg {\n  width: 16px;\n  height: 16px;\n}\n\n#"
                  )
                  .concat(n, " iframe {\n  border: 1px solid ")
                  .concat(
                    N.ZP.gray7,
                    ";\n  border-radius: 0 0 16px 16px;\n  display: block;\n  height: 250px;\n  margin: 0 2rem 0 0;\n  width: 100%;\n}\n\n#"
                  )
                  .concat(n, ".minimized iframe {\n  display: none;\n}\n\n#")
                  .concat(
                    n,
                    ".minimized .terminal-controls {\n  border-radius: 16px;\n}\n"
                  ))),
                t.appendChild(i);
              var o = document.createElement("iframe");
              return (
                (o.frameBorder = "0"),
                (o.rel = "opener"),
                (o.src = "https://lyceum.digitalocean.com/term/?image=".concat(
                  e
                )),
                t.appendChild(o),
                t
              );
            },
            l = function (e) {
              var o = document.createElement("div");
              o.className = "terminal-controls";
              var r = document.createElement("ul"),
                l = document.createElement("div");
              (l.className = "terminal-controls-header"),
                (l.innerHTML = "Interactive Terminal"),
                o.appendChild(l),
                o.appendChild(r),
                e.insertBefore(o, e.firstChild);
              var a = document.createElement("li");
              (a.title = "Run the code"),
                (a.dataset.toggle = "tooltip"),
                (a.innerHTML = "Run"),
                r.appendChild(a);
              var s = document.createElement("li");
              (s.title = "Reset terminal"),
                (s.dataset.toggle = "tooltip"),
                (s.innerHTML = "Reset"),
                r.appendChild(s);
              var d = document.createElement("li");
              (d.innerHTML =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="21" x2="12" y2="3"></line></svg>'),
                d.classList.add("separator"),
                r.appendChild(d);
              var c = document.createElement("li");
              (c.title = "Minimize terminal"),
                (c.dataset.toggle = "tooltip"),
                (c.innerHTML =
                  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line></svg>'),
                r.appendChild(c);
              var u = document.createElement("li");
              (u.title = "Maximize terminal"),
                (u.dataset.toggle = "tooltip"),
                (u.innerHTML =
                  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="12" y1="21" x2="12" y2="3"></line></svg>'),
                (u.style.display = "none"),
                r.appendChild(u);
              var p = document.createElement("li");
              (p.title = "Shrink terminal"),
                (p.dataset.toggle = "tooltip"),
                (p.dataset.shrinkIcon = "&#xe602;"),
                (p.innerHTML =
                  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>'),
                (p.style.display = "none"),
                p.classList.add("shrink"),
                r.appendChild(p);
              var g = document.createElement("li");
              (g.title = "Expand terminal"),
                (g.dataset.toggle = "tooltip"),
                (g.dataset.expandIcon = "&#xe611;"),
                (g.innerHTML =
                  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>'),
                g.classList.add("expand"),
                r.appendChild(g);
              var m = document.createElement("li");
              (m.title = "Close terminal"),
                (m.dataset.toggle = "tooltip"),
                (m.dataset.closeIcon = "&#xe619;"),
                (m.innerHTML =
                  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="3" x2="21" y2="21"></line><line x1="3" y1="21" x2="21" y2="3"></line></svg>'),
                r.appendChild(m);
              var h = function () {
                return i(e);
              };
              window.addEventListener("resize", h, !0),
                p.addEventListener("click", function () {
                  e.classList.add("inline"),
                    e.classList.remove("docked"),
                    i(e),
                    (p.style.display = "none"),
                    (g.style.display = "");
                }),
                g.addEventListener("click", function () {
                  e.classList.add("docked"),
                    e.classList.remove("inline"),
                    i(e),
                    (g.style.display = "none"),
                    (p.style.display = "");
                }),
                c.addEventListener("click", function () {
                  e.classList.add("minimized"),
                    (c.style.display = "none"),
                    (u.style.display = "");
                }),
                u.addEventListener("click", function () {
                  e.classList.remove("minimized"),
                    (c.style.display = ""),
                    (u.style.display = "none");
                }),
                a.addEventListener("click", function () {
                  e.querySelector("iframe").contentWindow.postMessage(
                    "\n",
                    "*"
                  );
                }),
                s.addEventListener("click", function () {
                  e.querySelector("iframe").contentWindow.postMessage(
                    "clear\n",
                    "*"
                  );
                }),
                m.addEventListener("click", function () {
                  (n = null),
                    t.forEach(function (e) {
                      return e.removeAttribute("disabled");
                    }),
                    window.removeEventListener("resize", h, !0),
                    e
                      .querySelector("iframe")
                      .contentWindow.postMessage("exit", "*"),
                    e.remove();
                });
            },
            a = function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null;
              if (!n) {
                var i = e.dataset.dockerImage,
                  a = r(i);
                o(a),
                  "function" === typeof t &&
                    a
                      .querySelector("iframe")
                      .addEventListener("load", function () {
                        window.addEventListener("message", function e(n) {
                          n.source ===
                            a.querySelector("iframe").contentWindow &&
                            "Loaded" === n.data &&
                            (t(n.source),
                            window.removeEventListener("message", e));
                        });
                      }),
                  l(a),
                  e.insertAdjacentElement("afterend", a);
              }
            };
          t.forEach(function (e) {
            e.addEventListener("click", function (e) {
              e.preventDefault(), a(e.target);
            }),
              e.addEventListener("run", function (e) {
                n
                  ? n
                      .querySelector("iframe")
                      .contentWindow.postMessage(e.detail, "*")
                  : a(e.target, function (t) {
                      return t.postMessage(e.detail, "*");
                    });
              }),
              e.removeAttribute("disabled");
          });
        },
        F = n(99388),
        D = n(86174),
        R = n(28030),
        M = n(65861),
        H = n(21474),
        q = n(57805),
        Q = n(75669),
        B = n(10750),
        U = n(44581),
        W = n(75256),
        X = n(58069),
        V = n(45279),
        G = n(71778),
        Y = n(3218),
        $ = n(57243),
        K = n(90352),
        J = n(17801),
        ee = n(23937),
        te = n(62080),
        ne = n(27187),
        ie = n(77726),
        oe = n(20498),
        re = T.ZP.div.withConfig({
          displayName: "NewsletterToastStyle__NewsletterText",
          componentId: "sc-1l4zx1n-0",
        })(["margin-bottom:5px;h1{font-size:16px;}p{font-size:14px;}"]),
        le = T.ZP.div.withConfig({
          displayName: "NewsletterToastStyle__NewsletterForm",
          componentId: "sc-1l4zx1n-1",
        })(
          [
            "label{font-size:14px;}input[type='text']{border:1px solid ",
            ";border-radius:3px;color:",
            ";font-size:14px;font-weight:400;padding:10px;}div{margin-bottom:10px;}button{background-color:",
            ";border:none;border-radius:9px;color:",
            ";width:100%;&:not(:disabled):hover{background-color:",
            ";}}",
          ],
          N.ZP.grayBorder,
          N.ZP.grey,
          N.ZP.blue2,
          N.ZP.white,
          N.ZP.blueDark
        ),
        ae = T.ZP.div.withConfig({
          displayName: "NewsletterToastStyle__NewsletterThanks",
          componentId: "sc-1l4zx1n-2",
        })(["font-size:14px;"]),
        se = n(85893),
        de = function () {
          var e = (0, a.useState)(""),
            t = e[0],
            n = e[1],
            i = (0, a.useState)(!1),
            o = i[0],
            r = i[1],
            l = (0, a.useState)(!0),
            s = l[0],
            d = l[1],
            c = (0, a.useCallback)(function () {
              var e, t;
              null === (e = window) ||
                void 0 === e ||
                null === (t = e.MktoForms2) ||
                void 0 === t ||
                t.loadForm("//anchor.digitalocean.com", "113-DTN-266", 1055);
            }, []);
          (0, ee.Z)("//anchor.digitalocean.com/js/forms2/js/forms2.min.js", c);
          var u = (0, a.useCallback)(
            function (e) {
              e.preventDefault();
              var n = window.MktoForms2.getForm(1055);
              n.addHiddenFields({ Email: t }),
                n.submit(),
                window.MktoForms2.whenReady(function (e) {
                  e.onSuccess(function () {
                    return r(!0), d(!1), !1;
                  });
                });
            },
            [t]
          );
          return (0, se.jsxs)(se.Fragment, {
            children: [
              (0, se.jsxs)(re, {
                children: [
                  (0, se.jsx)("h1", {
                    children: "Sign up for Infrastructure as a Newsletter",
                  }),
                  (0, se.jsx)("p", {
                    children:
                      "Get our roundup of sysadmin tutorials and open source happenings delivered to your inbox once you sign up and again every two weeks.",
                  }),
                  o
                    ? (0, se.jsxs)(ae, {
                        children: [
                          (0, se.jsx)("span", { children: "Success!" }),
                          " ",
                          "Thank you for subscribing!",
                        ],
                      })
                    : null,
                ],
              }),
              s
                ? (0, se.jsxs)(le, {
                    children: [
                      (0, se.jsx)("form", {
                        id: "mktoForm_1055",
                        style: { display: "none", width: "100%" },
                      }),
                      (0, se.jsxs)("form", {
                        onSubmit: u,
                        children: [
                          (0, se.jsx)(ne.Z, {
                            children: (0, se.jsx)(oe.Z, {
                              name: "email",
                              label: (0, se.jsx)(ie.Z, {
                                label: "Enter your email address",
                                sup: "(required)",
                              }),
                              type: "email",
                              value: t,
                              onChange: n,
                              required: !0,
                            }),
                          }),
                          (0, se.jsx)(te.Z, { children: "Sign up" }),
                        ],
                      }),
                    ],
                  })
                : null,
            ],
          });
        },
        ce = n(45313),
        ue = n(78222),
        pe = n(64758),
        ge = n(20058),
        me = T.ZP.div.withConfig({
          displayName:
            "QuestionSearchFooterStyles__StyledQuestionSearchFooterContainer",
          componentId: "sc-175aseh-0",
        })(["margin:32px 0 60px;"]),
        he = T.ZP.div.withConfig({
          displayName:
            "QuestionSearchFooterStyles__StyledQuestionSearchFooterContent",
          componentId: "sc-175aseh-1",
        })(
          [
            "align-items:center;display:grid;grid-gap:10px;grid-template-columns:1fr;margin:32px auto;position:relative;width:100%;",
            "{grid-template-columns:320px 1fr;}",
          ],
          (0, z.X)(z.A.tablet, "min")
        ),
        fe = (0, T.iv)(
          [
            "color:",
            ";font-family:",
            ";font-size:20px;font-style:normal;font-weight:500;line-height:28px;",
          ],
          N.ZP.gray2,
          (0, L.Z)("primary")
        ),
        xe = T.ZP.div.withConfig({
          displayName:
            "QuestionSearchFooterStyles__StyledQuestionSearchFooterActions",
          componentId: "sc-175aseh-2",
        })(["display:flex;flex-wrap:wrap;line-height:1.4;"]),
        ye = T.ZP.a.withConfig({
          displayName: "QuestionSearchFooterStyles__StyledActionBox",
          componentId: "sc-175aseh-3",
        })(
          [
            "align-items:center;background:",
            ";border:1px solid ",
            ";border-radius:10px;box-shadow:0 2px 4px ",
            ";box-sizing:border-box;color:",
            ";cursor:pointer;display:flex;flex:1 1 0;font-size:16px;height:40px;justify-content:center;line-height:24px;margin-left:16px;text-align:center;text-decoration:none;width:372px;&:hover{background:",
            ";box-shadow:0 10px 20px ",
            ";color:",
            ";transition:box-shadow 0.25s linear,-webkit-box-shadow 0.25s linear;}",
            "{flex:1 1 auto;margin:10px 0 0;}",
            "{width:100%;}",
          ],
          N.ZP.white,
          N.ZP.grayBorder,
          (0, N.E9)(N.ZP.blueAccordion, 0.05),
          N.ZP.gray3,
          N.ZP.blueHover,
          (0, N.E9)(N.ZP.blueDark, 0.1),
          N.ZP.white,
          (0, z.X)(34, "max", "rem"),
          (0, z.X)(z.A.phone)
        ),
        ve = function (e) {
          var t = e.QAUrl,
            n = e.searchUrl;
          return (0, se.jsx)(me, {
            children: (0, se.jsxs)(he, {
              children: [
                (0, se.jsx)(be, {
                  renderAs: "h4",
                  children: "Still looking for an answer?",
                }),
                (0, se.jsxs)(xe, {
                  children: [
                    (0, se.jsx)(I(), {
                      href: t,
                      passHref: !0,
                      children: (0, se.jsx)(ye, { children: "Ask a question" }),
                    }),
                    (0, se.jsx)(I(), {
                      href: n,
                      passHref: !0,
                      children: (0, se.jsx)(ye, {
                        children: "Search for more help",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        be = (0, T.ZP)(G.Z).withConfig({
          displayName: "QuestionSearchFooter___StyledHeading",
          componentId: "sc-zwkbuq-0",
        })(["", ""], fe),
        we = n(18462),
        _e = n(9751),
        Ze = n(10814),
        je = n(80479),
        Se = n(74426),
        Pe = n(4486),
        ke = n(31955),
        Ce = n(78268),
        Te = n(66720),
        Ae = (0, T.ZP)(Te.E.div).withConfig({
          displayName: "ToastStyles__StyledWrapper",
          componentId: "sc-ekxewm-0",
        })(
          [
            "  background:",
            ";border:1px solid ",
            ";border-radius:3px;bottom:20px;left:0;padding:20px;position:fixed;width:100%;z-index:100000000;svg{cursor:pointer;position:absolute;right:20px;}",
            "{left:-25%;width:25%;}",
          ],
          N.ZP.grayLighter,
          N.ZP.grayLight,
          (0, z.X)(z.A.tablet, "min")
        ),
        Ie = function (e) {
          var t = e.children,
            n = e.cookie,
            i = (0, a.useState)(!1),
            o = i[0],
            r = i[1],
            l = (0, a.useCallback)(
              function () {
                var e = 0.1 * document.body.scrollHeight;
                window.scrollY < e ? o && r(!1) : "1" !== ke.Z.get(n) && r(!0);
              },
              [n, o]
            ),
            s = (0, a.useCallback)(
              function () {
                ke.Z.set(n, "1", { expires: 365, path: "/" }), r(!1);
              },
              [n]
            ),
            d = (0, a.useCallback)(function () {
              return window.innerWidth > 420 ? 540 : null;
            }, []);
          return (
            (0, a.useEffect)(
              function () {
                return "1" !== ke.Z.get(n)
                  ? (ke.Z.set(n, "0", { expires: 365, path: "/" }),
                    window.addEventListener("scroll", l),
                    function () {
                      return window.removeEventListener("scroll", l);
                    })
                  : null;
              },
              [l, n]
            ),
            o &&
              (0, se.jsxs)(Ae, {
                initial: { opacity: 0 },
                animate: { opacity: 1, x: d() },
                transition: { ease: "easeOut", duration: 2 },
                exit: { opacity: 0 },
                children: [(0, se.jsx)(Ce.Z, { size: 20, onClick: s }), t],
              })
          );
        },
        Ne = n(8765),
        Oe = "/_next/static/media/ellipseHover.677bc142.svg",
        ze = T.ZP.div.withConfig({
          displayName: "TutorialSeriesListStyles__StyledSeriesGrid",
          componentId: "sc-16t9e7a-0",
        })(
          [
            "display:grid;grid-gap:32px;grid-template-columns:1fr;",
            "{grid-template-columns:1fr 200px;}",
          ],
          (0, z.X)(z.A.tablet, "min")
        ),
        Le =
          (T.ZP.div.withConfig({
            displayName: "TutorialSeriesListStyles__StyledSeriesHead",
            componentId: "sc-16t9e7a-1",
          })(
            [
              "h3{color:",
              ";font-family:",
              ";font-size:24px;font-style:normal;font-weight:600;line-height:32px;margin:8px 0;}p{color:",
              ";font-size:16px;font-style:normal;font-weight:normal;line-height:24px;margin:8px 0 32px;}",
            ],
            N.ZP.gray2,
            (0, L.Z)("primary"),
            N.ZP.gray4
          ),
          T.ZP.div.withConfig({
            displayName: "TutorialSeriesListStyles__StyledSeriesList",
            componentId: "sc-16t9e7a-2",
          })(
            [
              "ul li{background:url(",
              ") no-repeat left 10px;padding:2px 0;padding-left:1em;&:hover{background:url(",
              ") no-repeat left 10px;a{color:",
              ";}}a{color:",
              ";font-size:16px;line-height:24px;margin:0 8px;text-decoration-line:underline;}}",
            ],
            "/_next/static/media/ellipse.5c9ff8d3.svg",
            Oe,
            N.ZP.blue,
            N.ZP.gray5
          )),
        Ee = T.ZP.div.withConfig({
          displayName: "TutorialSeriesListStyles__StyledSeriesBrowse",
          componentId: "sc-16t9e7a-3",
        })(
          [
            "color:",
            ";font-family:",
            ";font-size:20px;font-style:normal;font-weight:500;line-height:28px;margin:8px 0;",
          ],
          N.ZP.gray2,
          (0, L.Z)("primary")
        ),
        Fe = T.ZP.button.withConfig({
          displayName: "TutorialSeriesListStyles__StyledSubscribeButton",
          componentId: "sc-16t9e7a-4",
        })(
          [
            "align-items:center;background:",
            " url(",
            ") no-repeat 10px / 16px;border:1px solid ",
            ";border-radius:10px;color:",
            ";cursor:pointer;display:flex;font-size:16px;height:40px;line-height:24px;margin:16px 0 24px;padding:8px 20px 8px 2em;width:auto;&:hover{background:",
            " url(",
            ") no-repeat 10px / 16px;border-color:",
            ";color:",
            ";}",
          ],
          N.ZP.white,
          "/_next/static/media/Subscribe.4ac22aba.svg",
          N.ZP.gray6,
          N.ZP.gray3,
          N.ZP.blue,
          "/_next/static/media/SubscribeHover.086d6b26.svg",
          N.ZP.blue,
          N.ZP.white
        ),
        De = T.ZP.div.withConfig({
          displayName: "TutorialSeriesListStyles__StyledTags",
          componentId: "sc-16t9e7a-5",
        })([
          "display:flex;flex-wrap:wrap;justify-content:flex-start;a{margin:4px 4px 4px 0;}",
        ]),
        Re = function (e) {
          var t = e.series,
            n = e.records,
            i = e.tags,
            o = e.seriesSelected,
            r = e.seriesSelectedType,
            l = (0, a.useState)(n.slice(0, 3)),
            s = l[0],
            d = l[1],
            c = (0, a.useState)(!0),
            u = c[0],
            p = c[1],
            g = (0, Z.X)(),
            m = g.subscriptions,
            h = g.handleSubscribeAction,
            f = g.handleUnsubscribeAction,
            x = function () {
              u ? (d(n), p(!1)) : (d(n.slice(0, 3)), p(!0));
            };
          return (0, se.jsxs)(se.Fragment, {
            children: [
              (0, se.jsxs)(ze, {
                children: [
                  (0, se.jsxs)(Le, {
                    children: [
                      (0, se.jsxs)("h3", {
                        children: ["Tutorial Series:", " ", t.title],
                      }),
                      (0, se.jsx)(M.default, {
                        content: t.description || "",
                        allowHtml: !0,
                        allowRsvp: !0,
                        allowTerminal: !0,
                      }),
                    ],
                  }),
                  (0, se.jsxs)("div", {
                    children: [
                      (0, Ne.Z)(m, "tutorial_series", t.id)
                        ? (0, se.jsx)(Fe, {
                            onClick: function () {
                              return f("tutorial_series", t.id);
                            },
                            children: "Subscribed",
                          })
                        : (0, se.jsx)(Fe, {
                            onClick: function () {
                              return h("tutorial_series", t.id);
                            },
                            children: "Subscribe",
                          }),
                      (0, se.jsx)(De, {
                        children: i.map(function (e) {
                          return (0,
                          se.jsx)(Se.Z, { url: (0, w.F7)("tag", e.slug), tag: e }, e.id);
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, se.jsxs)(Le, {
                children: [
                  (0, se.jsx)(Ee, {
                    children: "Browse Series: ".concat(n.length, " articles"),
                  }),
                  (0, se.jsx)("ul", {
                    children: s.map(function (e, t) {
                      var i;
                      return (0, se.jsx)(
                        "li",
                        {
                          style:
                            o ===
                              (null === e ||
                              void 0 === e ||
                              null === (i = e.object) ||
                              void 0 === i
                                ? void 0
                                : i.id) &&
                            r ===
                              (null === e || void 0 === e
                                ? void 0
                                : e.object_type)
                              ? {
                                  background: "url(".concat(
                                    Oe,
                                    ") no-repeat left 10px"
                                  ),
                                }
                              : null,
                          children: (0, se.jsx)(I(), {
                            href: (0, w.F7)((0, D.Z)(e), e.object.slug),
                            passHref: !0,
                            children: (0, se.jsx)("a", {
                              href: "replace",
                              style:
                                o === e.object.id &&
                                r ===
                                  (null === e || void 0 === e
                                    ? void 0
                                    : e.object_type)
                                  ? { color: "#081B4B" }
                                  : null,
                              children: ""
                                .concat(t + 1, "/")
                                .concat(n.length, " ")
                                .concat(e.object.title, " "),
                            }),
                          }),
                        },
                        e.position
                      );
                    }),
                  }),
                  u
                    ? (0, se.jsx)(Fe, {
                        onClick: function () {
                          return x();
                        },
                        children: "Expand to view all",
                      })
                    : (0, se.jsx)(Fe, {
                        onClick: function () {
                          return x();
                        },
                        children: "Collapse list",
                      }),
                ],
              }),
            ],
          });
        },
        Me = n(18638),
        He = n(45697),
        qe = n.n(He);
      function Qe() {
        return (
          (Qe =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
              }
              return e;
            }),
          Qe.apply(this, arguments)
        );
      }
      function Be(e, t) {
        if (null == e) return {};
        var n,
          i,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              i,
              o = {},
              r = Object.keys(e);
            for (i = 0; i < r.length; i++)
              (n = r[i]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (i = 0; i < r.length; i++)
            (n = r[i]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      var Ue = (0, a.forwardRef)(function (e, t) {
        var n = e.color,
          i = void 0 === n ? "currentColor" : n,
          o = e.size,
          r = void 0 === o ? 24 : o,
          l = Be(e, ["color", "size"]);
        return a.createElement(
          "svg",
          Qe(
            {
              ref: t,
              xmlns: "http://www.w3.org/2000/svg",
              width: r,
              height: r,
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: i,
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            },
            l
          ),
          a.createElement("polyline", { points: "15 18 9 12 15 6" })
        );
      });
      (Ue.propTypes = {
        color: qe().string,
        size: qe().oneOfType([qe().string, qe().number]),
      }),
        (Ue.displayName = "ChevronLeft");
      var We = Ue,
        Xe = n(80628),
        Ve = (0, T.iv)([
          "display:block;height:auto;margin-top:16px;width:100%;",
        ]),
        Ge = (0, T.iv)(
          ["", "{margin:0 auto !important;}"],
          (0, z.X)(z.A.tablet)
        ),
        Ye = (0, T.iv)(
          ["left:0;position:relative;", "{left:170px;}"],
          (0, z.X)(z.A.tablet, "min")
        ),
        $e = T.ZP.div.withConfig({
          displayName: "SeriesCarouselStyles__StyledCarouselContentContainer",
          componentId: "sc-19ex6yw-0",
        })(
          [
            "cursor:pointer;overflow-x:hidden;width:100%;",
            "{&::before{background:",
            ";content:'';display:block;height:100%;left:0;mask-image:linear-gradient(90deg,#000 0%,transparent);position:absolute;top:0;width:10%;z-index:1;}&::after{background:",
            ";content:' ';display:block;height:100%;mask-image:linear-gradient(270deg,#000 0%,transparent);position:absolute;right:0;top:0;width:10%;}}",
            "{position:relative;}",
          ],
          (0, z.X)(z.A.tablet, "min"),
          N.ZP.white,
          N.ZP.white,
          (0, z.X)(z.A.tablet, "min")
        ),
        Ke = (0, T.iv)(["display:inline-block;height:100%;"]),
        Je = (0, T.iv)([
          "align-items:center;display:flex;justify-content:flex-start;&.right{justify-content:flex-end;}",
        ]),
        et = (0, T.iv)(
          [
            "color:",
            ";transition:opacity 0.2s;z-index:19;&:hover{color:",
            ";cursor:pointer;}.flipped{transform:rotateZ(180deg);}.last{opacity:0.6;}",
          ],
          N.ZP.gray5,
          N.ZP.gray2
        ),
        tt = (0, T.iv)([
          "display:flex;justify-content:center;margin-top:16px;width:100%;",
        ]),
        nt = (0, T.iv)(["display:flex;flex-wrap:wrap;justify-content:center;"]),
        it = (0, T.iv)(
          [
            "background-color:",
            ";border:1px solid #a9b3ca;border-radius:100%;box-sizing:border-box;cursor:pointer;display:block;height:10px;line-height:0;margin:0 4px 4px;padding:3px;width:10px;&.selected{background-color:",
            ";border:none;}&:hover{background-color:",
            ";}",
          ],
          N.ZP.white,
          N.ZP.blue2,
          N.ZP.blueHover
        ),
        ot = (0, a.forwardRef)(function (e, t) {
          var n = e.children,
            i = e.id,
            o = e.fadeIn,
            r = e.setCurrentCarouselIndex,
            l = e.maxWidth,
            s = e.hideArrows,
            d = e.externalSetSelected,
            c = e.currentValue,
            u = (0, a.useState)(340)[0],
            p = (0, a.useState)(c),
            g = p[0],
            m = p[1];
          (0, a.useEffect)(
            function () {
              r && r(g);
            },
            [r, g]
          );
          var h = function (e) {
            var t, i, o;
            m(
              ((t = e),
              (i = 0),
              (o = n.length - 1),
              Math.max(i, Math.min(t, o)))
            );
          };
          return (
            (0, a.useImperativeHandle)(t, function () {
              return { changeSelected: h, selected: g };
            }),
            (0, se.jsxs)(st, {
              style: { maxWidth: l && l },
              id: i,
              children: [
                (0, se.jsxs)("div", {
                  className: "columns is-gapless is-multiline",
                  style: { justifyContent: "center" },
                  children: [
                    (0, se.jsx)(dt, {
                      className: "column is-1",
                      children: (0, se.jsx)(ct, {
                        onClick: function () {
                          h(g - 1);
                        },
                        children: (0, se.jsx)(We, {}),
                      }),
                    }),
                    (0, se.jsx)(ut, {
                      className:
                        "column is-12-mobile is-12-tablet is-10-desktop",
                      children: (0, se.jsx)($e, {
                        children: (0, se.jsx)(pt, {
                          style: { width: u * n.length },
                          children: (0, se.jsx)(rt, {
                            currentSelected: g,
                            width: u,
                            children: a.Children.map(
                              n || null,
                              function (e, t) {
                                return (0, se.jsx)(lt, {
                                  hideArrows: s,
                                  fadeIn: o,
                                  selected: g === t,
                                  width: u,
                                  children: e,
                                });
                              }
                            ),
                          }),
                        }),
                      }),
                    }),
                    (0, se.jsx)(gt, {
                      size: 1,
                      className: "column right",
                      children: (0, se.jsx)(mt, {
                        onClick: function () {
                          h(g + 1), d && d(g + 1);
                        },
                        children: (0, se.jsx)(Xe.Z, {}),
                      }),
                    }),
                  ],
                }),
                (0, se.jsx)(ht, {
                  className: "carousel-select-container",
                  children: (0, se.jsx)(ft, {
                    children: a.Children.map(n || null, function (e, t) {
                      return (0, se.jsx)(xt, {
                        type: "button",
                        "aria-label": "slide ".concat(t + 1, " selection dot"),
                        className: t === g ? "selected" : "",
                        onClick: function () {
                          m(t), d && d(t);
                        },
                      });
                    }),
                  }),
                }),
              ],
            })
          );
        }),
        rt = function (e) {
          var t = e.children,
            n = e.currentSelected,
            i = e.width,
            o = (0, Me._)(),
            r = -n * i;
          return (
            o.start({ x: r }),
            (0, se.jsx)(Te.E.div, {
              className: "draggable",
              animate: o,
              transition: { duration: 0.3 },
              children: t,
            })
          );
        },
        lt = function (e) {
          var t = e.children,
            n = e.width,
            i = e.selected,
            o = e.fadeIn;
          return (0, se.jsx)(yt, {
            className: i ? "selected" : "",
            style: { width: n },
            $_css: o
              ? "transition: opacity 2s;\n            opacity: 0;\n            &.selected {\n              opacity: 1;\n            }"
              : "",
            children: t,
          });
        };
      ot.displayName = "Carousel";
      var at = ot;
      ot.defaultProps = {
        fadeIn: !1,
        id: "carousel",
        maxWidth: null,
        setCurrentCarouselIndex: null,
        hideArrows: null,
        externalSetSelected: null,
      };
      var st = (0, T.ZP)(X.Z).withConfig({
          displayName: "SeriesCarousel___StyledContainer",
          componentId: "sc-1ylsogk-0",
        })(["", ""], Ve),
        dt = (0, T.ZP)("div").withConfig({
          displayName: "SeriesCarousel___StyledDiv",
          componentId: "sc-1ylsogk-1",
        })(["", ""], Je),
        ct = (0, T.ZP)(Pe.Z).withConfig({
          displayName: "SeriesCarousel___StyledTextLink",
          componentId: "sc-1ylsogk-2",
        })(["", ""], et),
        ut = (0, T.ZP)("div").withConfig({
          displayName: "SeriesCarousel___StyledDiv2",
          componentId: "sc-1ylsogk-3",
        })(["", ""], Ge),
        pt = (0, T.ZP)("div").withConfig({
          displayName: "SeriesCarousel___StyledDiv3",
          componentId: "sc-1ylsogk-4",
        })(["", ""], Ye),
        gt = (0, T.ZP)("div").withConfig({
          displayName: "SeriesCarousel___StyledDiv4",
          componentId: "sc-1ylsogk-5",
        })(["", ""], Je),
        mt = (0, T.ZP)(Pe.Z).withConfig({
          displayName: "SeriesCarousel___StyledTextLink2",
          componentId: "sc-1ylsogk-6",
        })(["", ""], et),
        ht = (0, T.ZP)("div").withConfig({
          displayName: "SeriesCarousel___StyledDiv5",
          componentId: "sc-1ylsogk-7",
        })(["", ""], tt),
        ft = (0, T.ZP)("div").withConfig({
          displayName: "SeriesCarousel___StyledDiv6",
          componentId: "sc-1ylsogk-8",
        })(["", ""], nt),
        xt = (0, T.ZP)("button").withConfig({
          displayName: "SeriesCarousel___StyledButton",
          componentId: "sc-1ylsogk-9",
        })(["", ""], it),
        yt = (0, T.ZP)("div").withConfig({
          displayName: "SeriesCarousel___StyledDiv7",
          componentId: "sc-1ylsogk-10",
        })(["", " ", ""], Ke, function (e) {
          return e.$_css;
        }),
        vt = T.ZP.div.withConfig({
          displayName: "TutorialSeriesSliderStyles__StyledTutorialBarSeries",
          componentId: "sc-q0h1tq-0",
        })(
          [
            "align-items:center;background:",
            ";box-sizing:border-box;color:",
            ";display:block;font-size:15px;padding:30px 0;width:100%;",
          ],
          N.ZP.white,
          N.ZP.grayDarkest
        ),
        bt = T.ZP.div.withConfig({
          displayName: "TutorialSeriesSliderStyles__StyledBreadCrumbTitle",
          componentId: "sc-q0h1tq-1",
        })(
          [
            "color:",
            ";margin:0;padding:0;word-break:break-word;a{color:",
            ";display:block;font-size:20px;font-weight:500;height:auto;line-height:28px;text-align:center;text-decoration:none;width:auto;&:hover{color:",
            ";}}",
          ],
          N.ZP.gray2,
          N.ZP.grey,
          N.ZP.blueLight
        ),
        wt = T.ZP.div.withConfig({
          displayName: "TutorialSeriesSliderStyles__StyledSeriesCard",
          componentId: "sc-q0h1tq-2",
        })(
          [
            "background:",
            ";border:1px solid ",
            ";border-radius:16px;box-sizing:border-box;display:inline-block;height:56px;width:260px;",
            "{width:320px;}&:hover{border:1px solid ",
            ";a{color:",
            ";}}a{color:",
            ";display:block;font-size:14px;line-height:22px;overflow:hidden;padding:16px;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;}",
          ],
          N.ZP.gray10,
          N.ZP.gray8,
          (0, z.X)(z.A.tablet, "min"),
          N.ZP.blueHover,
          N.ZP.gray2,
          N.ZP.gray4
        ),
        _t = function (e) {
          var t = e.series,
            n = e.records,
            i = e.current;
          return (0, se.jsxs)(se.Fragment, {
            children: [
              (0, se.jsx)(vt, {
                children: (0, se.jsx)(X.Z, {
                  slim: !0,
                  children: (0, se.jsx)(bt, {
                    children: (0, se.jsx)(I(), {
                      href: (0, w.F7)("tutorial_serie", t.slug),
                      passHref: !0,
                      children: "Tutorial Series: ".concat(t.title),
                    }),
                  }),
                }),
              }),
              (0, se.jsx)(at, {
                currentValue: i,
                children: n.map(function (e, t) {
                  return (0, se.jsx)(
                    Zt,
                    {
                      $_css:
                        t === i
                          ? " border: 1px solid "
                              .concat(N.ZP.blue3, "; background: ")
                              .concat(N.ZP.white, "; a {color: #081B4B;}")
                          : null,
                      children: (0, se.jsx)(I(), {
                        href: (0, w.F7)((0, D.Z)(e), e.object.slug),
                        passHref: !0,
                        children: ""
                          .concat(t + 1, "/")
                          .concat(n.length, " ")
                          .concat(e.object.title, " "),
                      }),
                    },
                    e.position
                  );
                }),
              }),
            ],
          });
        },
        Zt = (0, T.ZP)(wt).withConfig({
          displayName: "TutorialSeriesSlider___StyledStyledSeriesCard",
          componentId: "sc-k1eyfs-0",
        })(["", ""], function (e) {
          return e.$_css;
        }),
        jt = n(38966),
        St = n(48588),
        Pt = n(68771),
        kt = T.ZP.div.withConfig({
          displayName:
            "TechTalkRegistrationModalTemplateStyles__StyledFormContainer",
          componentId: "sc-134m86v-0",
        })(
          [
            "align-items:center;background:",
            ";border-radius:8px;box-shadow:0 4px 20px -5px ",
            ";display:flex;margin-right:32px;padding:40px;.alert{background:",
            ";border-radius:8px;color:",
            ";display:block;padding:8px;}.alert-hidden{display:none;}",
          ],
          N.ZP.white,
          (0, N.E9)(N.ZP.blueDarkest, 0.05),
          N.ZP.greenAlert,
          N.ZP.white
        ),
        Ct = T.ZP.form.withConfig({
          displayName: "TechTalkRegistrationModalTemplateStyles__StyledForm",
          componentId: "sc-134m86v-1",
        })([
          "display:flex;flex-direction:column;width:100%;input{margin-bottom:8px;margin-left:0;z-index:1;}",
        ]),
        Tt = T.ZP.input.withConfig({
          displayName:
            "TechTalkRegistrationModalTemplateStyles__StyledFormInput",
          componentId: "sc-134m86v-2",
        })(
          [
            "background:",
            ";border:1px solid ",
            ";border-radius:8px;box-shadow:0 4px 0 ",
            ";box-sizing:border-box;height:48px;left:0;max-width:560px;padding:12px 24px;position:static;top:0;width:100%;",
            "{display:flex;flex-direction:column;}",
          ],
          N.ZP.white,
          N.ZP.gray,
          (0, N.E9)(N.ZP.grayDark, 0.2),
          (0, z.X)(z.A.desktop)
        ),
        At = T.ZP.input.withConfig({
          displayName: "TechTalkRegistrationModalTemplateStyles__StyledSubmit",
          componentId: "sc-134m86v-3",
        })(
          [
            "background:",
            ";border:0 solid transparent;border-radius:8px;box-shadow:0 0 0 transparent;color:",
            ";cursor:pointer;font-size:14px;font-weight:500;margin:auto 0 auto 16px;max-width:fit-content;padding:16px;text-shadow:0 0 0 transparent;transition:background-color 0.6s ease;&:hover{background-color:",
            ";}",
          ],
          N.ZP.blueLight,
          N.ZP.white,
          N.ZP.blue
        ),
        It = T.ZP.a.withConfig({
          displayName:
            "TechTalkRegistrationModalTemplateStyles__StyledCloseBtn",
          componentId: "sc-134m86v-4",
        })(
          [
            "cursor:pointer;height:16px;padding:16px;position:relative;width:16px;&::before,&::after{background-color:",
            ";content:'';height:16px;position:absolute;width:2px;}&::before{transform:rotate(45deg);}&::after{transform:rotate(-45deg);}",
          ],
          N.ZP.grayDark
        ),
        Nt = (0, T.iv)(
          ["position:fixed;top:104px;", "{top:24px;}"],
          (0, z.X)(z.A.desktop)
        ),
        Ot = T.ZP.div.withConfig({
          displayName:
            "TechTalkRegistrationModalTemplateStyles__StyledModalContent",
          componentId: "sc-134m86v-5",
        })(
          [
            "background:",
            ";border-radius:8px;display:flex;flex-direction:column;justify-content:space-between;margin:0 auto;max-width:776px;",
            "{width:100%;}",
          ],
          N.ZP.white,
          (0, z.X)(z.A.desktop)
        ),
        zt = T.ZP.div.withConfig({
          displayName:
            "TechTalkRegistrationModalTemplateStyles__StyledModalHeader",
          componentId: "sc-134m86v-6",
        })(
          [
            "align-items:center;border-bottom:1px solid ",
            ";display:flex;justify-content:space-between;",
          ],
          N.ZP.grayLighter
        ),
        Lt = (0, T.iv)(["padding:24px;"]),
        Et = function (e) {
          var t = e.isRSVPModalOpen,
            n = e.setIsRSVPModalOpen,
            i = e.RSVPFormId,
            o = e.setRSVPFormId,
            r = (0, a.useState)(null),
            l = r[0],
            s = r[1],
            d = (0, a.useState)(null),
            c = d[0],
            u = d[1],
            p = (0, a.useState)(null),
            g = p[0],
            m = p[1],
            h = (0, a.useState)(!1),
            f = h[0],
            x = h[1],
            y = (0, a.useCallback)(
              function () {
                var e, t;
                i &&
                  (null === (e = window) ||
                    void 0 === e ||
                    null === (t = e.MktoForms2) ||
                    void 0 === t ||
                    t.loadForm("//anchor.digitalocean.com", "113-DTN-266", i));
              },
              [i]
            );
          (0, ee.Z)("//anchor.digitalocean.com/js/forms2/js/forms2.min.js", y);
          return (0, se.jsx)(Dt, {
            show: t,
            onClose: function () {
              n(!1);
            },
            closeOnBlur: !0,
            showClose: !0,
            children: (0, se.jsxs)(Ot, {
              children: [
                (0, se.jsxs)(zt, {
                  children: [
                    (0, se.jsx)(Rt, {
                      defaultColor: N.ZP.blueDark,
                      renderAs: "h5",
                      children: "Join the Tech Talk",
                    }),
                    (0, se.jsx)(It, {
                      onClick: function () {
                        n(!1);
                      },
                    }),
                  ],
                }),
                (0, se.jsx)(kt, {
                  children: (0, se.jsxs)(Ct, {
                    onSubmit: function (e) {
                      e.preventDefault();
                      var t = window.MktoForms2.getForm(i);
                      t
                        ? (t.addHiddenFields({
                            Email: l,
                            FirstName: c,
                            LastName: g,
                          }),
                          t.submit(),
                          window.MktoForms2.whenReady(function (e) {
                            e.onSuccess(function () {
                              return (
                                x(!0),
                                o(null),
                                s(null),
                                u(null),
                                m(null),
                                setTimeout(function () {
                                  n(!1), x(!1);
                                }, 1500),
                                !1
                              );
                            });
                          }))
                        : alert("Can not submit application");
                    },
                    children: [
                      (0, se.jsxs)("div", {
                        className: "alert alert-success ".concat(
                          f ? "alert-shown" : "alert-hidden"
                        ),
                        children: [
                          (0, se.jsx)("strong", { children: "Success!" }),
                          " ",
                          "Thank you! Please check your email for further details.",
                        ],
                      }),
                      !f &&
                        (0, se.jsxs)(se.Fragment, {
                          children: [
                            (0, se.jsx)("p", {
                              children: "Please complete your information!",
                            }),
                            (0, se.jsx)(Tt, {
                              placeholder: "user@digitalocean.com",
                              required: !0,
                              type: "email",
                              value: l,
                              onChange: function (e) {
                                s(e.target.value);
                              },
                            }),
                            (0, se.jsx)(Tt, {
                              placeholder: "First Name",
                              required: !0,
                              type: "text",
                              value: c,
                              onChange: function (e) {
                                u(e.target.value);
                              },
                            }),
                            (0, se.jsx)(Tt, {
                              placeholder: "Last Name",
                              required: !0,
                              type: "text",
                              value: g,
                              onChange: function (e) {
                                m(e.target.value);
                              },
                            }),
                            (0, se.jsx)(At, {
                              value: "Sign up",
                              type: "submit",
                              return: !0,
                              false: !0,
                            }),
                          ],
                        }),
                    ],
                  }),
                }),
              ],
            }),
          });
        },
        Ft = Et;
      Et.defaultProps = { RSVPFormId: null };
      var Dt = (0, T.ZP)(Pt.Z).withConfig({
          displayName: "TechTalkRegistrationModalTemplate___StyledModal",
          componentId: "sc-qfib80-0",
        })(["", ""], Nt),
        Rt = (0, T.ZP)(G.Z).withConfig({
          displayName: "TechTalkRegistrationModalTemplate___StyledHeading",
          componentId: "sc-qfib80-1",
        })(["", ""], Lt),
        Mt = "/_next/static/media/LanguageIcon.77364d8c.svg",
        Ht = "/_next/static/media/creativecommons.c0a877f1.png",
        qt = n(93050),
        Qt = T.ZP.div.withConfig({
          displayName: "TutorialTemplateStyles__StyledRecordHeaderContainer",
          componentId: "sc-1gdp4d7-0",
        })(["font-size:20px;line-height:1.5;margin-top:40px;width:100%;"]),
        Bt = T.ZP.img.withConfig({
          displayName: "TutorialTemplateStyles__StyledRecordHeaderImage",
          componentId: "sc-1gdp4d7-1",
        })(["border-radius:24px;display:block;margin:40px 0;width:100%;"]),
        Ut = (0, T.iv)(
          [
            "font-family:",
            ";font-size:16px;font-style:normal;font-weight:bold;letter-spacing:1px;line-height:24px;margin:20px 0 8px;text-transform:capitalize;",
          ],
          (0, L.Z)("code")
        ),
        Wt = (0, T.iv)(
          [
            "color:",
            ";font-family:",
            ";font-size:24px;font-style:normal;font-weight:bold;letter-spacing:-0.5px;line-height:40px;margin:0;padding:0;word-break:break-word;",
            "{font-size:32px;}",
          ],
          N.ZP.blueDark,
          (0, L.Z)("primary"),
          (0, z.X)(z.A.tablet, "min")
        ),
        Xt = T.ZP.div.withConfig({
          displayName: "TutorialTemplateStyles__StyledRecordMetaContainer",
          componentId: "sc-1gdp4d7-2",
        })(["align-items:center;display:flex;flex-wrap:wrap;"]),
        Vt = T.ZP.ul.withConfig({
          displayName: "TutorialTemplateStyles__StyledRecordMetaList",
          componentId: "sc-1gdp4d7-3",
        })(
          [
            "align-items:center;color:",
            ";display:flex;flex-flow:row wrap;margin:0 auto;padding:10px 0;width:100%;",
          ],
          N.ZP.blueDark
        ),
        Gt = T.ZP.li.withConfig({
          displayName: "TutorialTemplateStyles__StyledRecordMetaItem",
          componentId: "sc-1gdp4d7-4",
        })([
          "color:#333;font-size:13px;font-weight:500;line-height:1.6;list-style:none;padding-right:5px;a:first-child{margin-left:0;}",
        ]),
        Yt = T.ZP.div.withConfig({
          displayName: "TutorialTemplateStyles__StyledAuthorDateContainer",
          componentId: "sc-1gdp4d7-5",
        })(["display:flex;margin-left:16px;"]),
        $t = T.ZP.div.withConfig({
          displayName: "TutorialTemplateStyles__StyledRecordMetaItemAuthor",
          componentId: "sc-1gdp4d7-6",
        })(
          [
            "color:",
            ";display:inline-block;font-size:16px;font-weight:500;line-height:1.6;list-style:none;a:first-child{margin-left:0;}",
          ],
          N.ZP.blueDark
        ),
        Kt = T.ZP.div.withConfig({
          displayName: "TutorialTemplateStyles__StyledRecordMetaItemDate",
          componentId: "sc-1gdp4d7-7",
        })(
          ["color:", ";font-size:16px;line-height:24px;margin:8px 0;"],
          N.ZP.gray4
        ),
        Jt =
          (T.ZP.span.withConfig({
            displayName:
              "TutorialTemplateStyles__StyledRecordMetaItemAuthorDefault",
            componentId: "sc-1gdp4d7-8",
          })(["color:", ";padding:0 4px;"], N.ZP.blueDark),
          T.ZP.a.withConfig({
            displayName:
              "TutorialTemplateStyles__StyledRecordMetaItemAuthorHighlight",
            componentId: "sc-1gdp4d7-9",
          })(
            [
              "color:",
              ";cursor:pointer;font-size:",
              "px;text-decoration:underline;&:hover{color:",
              ";}",
            ],
            N.ZP.blueLight,
            function (e) {
              return e.size;
            },
            N.ZP.blueHover
          )),
        en = T.ZP.div.withConfig({
          displayName: "TutorialTemplateStyles__StyledAvatarContainer",
          componentId: "sc-1gdp4d7-10",
        })([
          "box-sizing:content-box;display:inline-block;margin-top:24px;position:relative;",
        ]),
        tn = T.ZP.img.withConfig({
          displayName: "TutorialTemplateStyles__StyledAvatarSmall",
          componentId: "sc-1gdp4d7-11",
        })(
          [
            "border:1px solid ",
            ";border-radius:50%;height:48px;object-fit:contain;vertical-align:middle;width:48px;",
          ],
          N.ZP.white
        ),
        nn = T.ZP.div.withConfig({
          displayName:
            "TutorialTemplateStyles__StyledCollaboratorsFooterContainer",
          componentId: "sc-1gdp4d7-12",
        })(
          [
            "background-color:",
            ";border-radius:24px;margin-top:50px;position:relative;width:100%;",
          ],
          (0, N.E9)(N.ZP.blue5, 0.4)
        ),
        on = T.ZP.div.withConfig({
          displayName: "TutorialTemplateStyles__StyledCollaboratorsFooter",
          componentId: "sc-1gdp4d7-13",
        })(
          [
            "align-items:flex-start;color:",
            ";display:flex;flex-wrap:wrap;margin:0 auto;padding:24px 32px 32px;width:100%;z-index:5;",
          ],
          N.ZP.blueDark
        ),
        rn = T.ZP.div.withConfig({
          displayName: "TutorialTemplateStyles__StyledCollaboratorsHeading",
          componentId: "sc-1gdp4d7-14",
        })(
          [
            "align-items:center;color:",
            ";flex-basis:100%;font-family:",
            ";font-size:24px;font-style:normal;font-weight:600;line-height:32px;white-space:nowrap;",
          ],
          N.ZP.gray2,
          (0, L.Z)("primary")
        ),
        ln = T.ZP.div.withConfig({
          displayName: "TutorialTemplateStyles__StyledCollaborator",
          componentId: "sc-1gdp4d7-15",
        })([
          "display:flex;flex-direction:row;flex-grow:1;margin:0;padding:16px 14px;width:100%;",
        ]),
        an = T.ZP.img.withConfig({
          displayName: "TutorialTemplateStyles__StyledAvatarLarge",
          componentId: "sc-1gdp4d7-16",
        })(["border-radius:50%;height:64px;margin:0 16px 0 0;width:64px;"]),
        sn = T.ZP.div.withConfig({
          displayName: "TutorialTemplateStyles__StyledCollaboratorInfo",
          componentId: "sc-1gdp4d7-17",
        })(["color:", ";line-height:1.4;"], N.ZP.blueDark),
        dn = T.ZP.div.withConfig({
          displayName: "TutorialTemplateStyles__StyledCollaboratorName",
          componentId: "sc-1gdp4d7-18",
        })(
          [
            "color:",
            ";font-size:18px;font-weight:500;line-height:26px;margin:4px 0;min-width:0;overflow-wrap:break-word;",
          ],
          N.ZP.blueDark
        ),
        cn = T.ZP.div.withConfig({
          displayName: "TutorialTemplateStyles__StyledCollaboratorBio",
          componentId: "sc-1gdp4d7-19",
        })(["color:", ";font-size:16px;line-height:24px;"], N.ZP.gray4),
        un = T.ZP.div.withConfig({
          displayName: "TutorialTemplateStyles__StyledCollaboratorTitle",
          componentId: "sc-1gdp4d7-20",
        })(
          [
            "color:",
            ";font-size:",
            "px;font-weight:500;line-height:26px;overflow-wrap:break-word;padding:0;",
          ],
          N.ZP.gray4,
          function (e) {
            return e.size;
          }
        ),
        pn = (0, T.ZP)(Y.Z).withConfig({
          displayName: "TutorialTemplateStyles__StyledTutorialLanguageDropdown",
          componentId: "sc-1gdp4d7-21",
        })(
          [
            "box-sizing:border-box;display:block;margin-left:auto;width:232px;.react-select__single-value::before{background-image:url('",
            "');background-repeat:no-repeat;background-size:17px;content:'';padding:0 30px 0 0;}",
          ],
          function (e) {
            return e.icon;
          }
        ),
        gn =
          (T.ZP.div.withConfig({
            displayName: "TutorialTemplateStyles__StyledTutorialBarSeries",
            componentId: "sc-1gdp4d7-22",
          })([
            "align-items:center;background:#fff;box-sizing:border-box;color:#323232;display:block;font-size:15px;height:60px;padding:15px 0;width:100%;",
          ]),
          T.ZP.div.withConfig({
            displayName: "TutorialTemplateStyles__StyledBreadCrumbTitle",
            componentId: "sc-1gdp4d7-23",
          })(
            [
              "color:",
              ";margin:0;padding:0;word-break:break-word;a{color:#333;display:block;font-size:20px;font-weight:500;height:auto;line-height:28px;text-align:center;text-decoration:none;width:auto;&:hover{color:",
              ";}}",
            ],
            N.ZP.gray2,
            N.ZP.blueLight
          ),
          T.ZP.div.withConfig({
            displayName: "TutorialTemplateStyles__StyledCreativeCommonsLicense",
            componentId: "sc-1gdp4d7-24",
          })(
            [
              "align-items:center;color:",
              ";display:grid;font-size:14px;grid-gap:15px;grid-template-columns:1fr;line-height:22px;margin:10px 0 72px;img{display:block;height:40px;margin:10px auto;width:113.55px;}a{color:",
              ";display:inline-block;font-size:14px;text-align:center;&:hover{text-decoration:underline;}}",
              "{grid-template-columns:auto 1fr;a{text-align:left;}img{display:inline-block;}}",
            ],
            N.ZP.gray4,
            N.ZP.grayDarker,
            (0, z.X)(z.A.tablet, "min")
          )),
        mn = T.ZP.div.withConfig({
          displayName: "TutorialTemplateStyles__StyledRecordVersionsContainer",
          componentId: "sc-1gdp4d7-25",
        })(
          [
            "align-items:center;background-color:",
            ";border-radius:24px;display:flex;margin-bottom:32px;padding:24px;",
          ],
          N.ZP.grayLighter
        ),
        hn = T.ZP.div.withConfig({
          displayName: "TutorialTemplateStyles__StyledRecordVersionsTitle",
          componentId: "sc-1gdp4d7-26",
        })(["flex:3;"]),
        fn = (0, T.ZP)(G.Z).withConfig({
          displayName: "TutorialTemplateStyles__StyledVersionHeading",
          componentId: "sc-1gdp4d7-27",
        })(["font-size:18px;font-weight:700;line-height:1.4;margin-bottom:0;"]),
        xn = T.ZP.small.withConfig({
          displayName: "TutorialTemplateStyles__StyledVersionSubtitle",
          componentId: "sc-1gdp4d7-28",
        })(
          ["color:", ";display:block;font-size:16px;font-weight:400;"],
          N.ZP.grayDark
        ),
        yn =
          ((0, T.ZP)(Y.Z).withConfig({
            displayName:
              "TutorialTemplateStyles__StyledTutorialVersionDropdown",
            componentId: "sc-1gdp4d7-29",
          })(["border:1px solid ", ";margin-left:auto;"], N.ZP.grayBorder),
          T.ZP.div.withConfig({
            displayName: "TutorialTemplateStyles__StyledNextSeriesWrapper",
            componentId: "sc-1gdp4d7-30",
          })(["margin:40px 0;"])),
        vn = T.ZP.div.withConfig({
          displayName: "TutorialTemplateStyles__StyledNextSeries",
          componentId: "sc-1gdp4d7-31",
        })(
          [
            "color:",
            ";font-family:",
            ";font-size:16px;font-style:normal;font-weight:600;line-height:24px;a{text-decoration:none;}",
          ],
          N.ZP.blue2,
          (0, L.Z)("code")
        ),
        bn = T.ZP.hr.withConfig({
          displayName: "TutorialTemplateStyles__StyledDivider",
          componentId: "sc-1gdp4d7-32",
        })(
          ["border:1px solid ", ";margin-bottom:10px;width:100%;"],
          N.ZP.gray7
        ),
        wn = T.ZP.p.withConfig({
          displayName: "TutorialTemplateStyles__StyledUserRelation",
          componentId: "sc-1gdp4d7-33",
        })(
          [
            "background:",
            ";border-radius:8px;color:",
            ";display:inline-block;font-size:14px;font-weight:500;height:24px;line-height:24px;margin:0 8px;padding:0 8px;text-align:center;text-transform:capitalize;width:auto;",
          ],
          N.ZP.green4,
          N.ZP.gray2
        ),
        _n = T.ZP.div.withConfig({
          displayName: "TutorialTemplateStyles__StyledDraftWrapper",
          componentId: "sc-1gdp4d7-34",
        })(
          [
            "background-color:",
            ";border-radius:20px;color:",
            ";font-weight:700;margin:32px auto;max-width:300px;padding:5px;text-align:center;",
          ],
          N.ZP.orange2,
          N.ZP.white
        ),
        Zn = T.ZP.div.withConfig({
          displayName: "TutorialTemplateStyles__StyledStateContainer",
          componentId: "sc-1gdp4d7-35",
        })(
          [
            "background-color:",
            ";border-radius:24px;color:",
            ";margin-bottom:32px;text-align:center;",
          ],
          N.ZP.red2,
          N.ZP.white
        ),
        jn = T.ZP.div.withConfig({
          displayName: "TutorialTemplateStyles__StyledUserContentCallout",
          componentId: "sc-1gdp4d7-36",
        })(
          [
            "align-items:center;background:",
            ";border:1px solid ",
            ";border-radius:3px;display:flex;flex-flow:row nowrap;flex-direction:row;font-size:24px;margin:32px 0 16px;padding:16px 24px;width:100%;p{color:",
            ";flex-grow:1;flex-shrink:1;font-size:13px;line-height:1.6;margin-left:0.1em;padding:0;}svg{flex-shrink:0;margin:0 24px 0 0;padding:0;}",
          ],
          (0, N.E9)(N.ZP.blueLight, 0.05),
          N.ZP.blueLight,
          N.ZP.blueLight
        ),
        Sn = (0, T.iv)(
          [
            "border-bottom:1px solid ",
            ";border-top:1px solid ",
            ";cursor:pointer;display:inline-block;margin-top:24px;padding:24px 0;",
          ],
          N.ZP.gray7,
          N.ZP.gray7
        ),
        Pn = T.ZP.div.withConfig({
          displayName: "TutorialTemplateStyles__StyledTerminalCallout",
          componentId: "sc-1gdp4d7-37",
        })(
          [
            "background-color:",
            ";border-radius:24px;color:",
            ";font-size:16px;line-height:24px;margin-top:40px;padding:24px 32px;.link{cursor:pointer;font-family:inherit;font-weight:400;text-decoration:underline;&:hover{color:",
            ";}}",
          ],
          N.ZP.green5,
          N.ZP.gray4,
          N.ZP.blueHover
        ),
        kn = T.ZP.div.withConfig({
          displayName: "TutorialTemplateStyles__StyledSidebarItem",
          componentId: "sc-1gdp4d7-38",
        })(["margin-bottom:40px;&:last-child{margin-bottom:0;}"]),
        Cn = (0, T.ZP)(M.default).withConfig({
          displayName: "TutorialTemplateStyles__StyledConclusionCTA",
          componentId: "sc-1gdp4d7-39",
        })(
          [
            "border:1px solid ",
            ";border-radius:16px;color:",
            ";font-size:16px;line-height:24px;margin-top:32px;padding:24px 32px;a{border-bottom:none;color:",
            ";cursor:pointer;font-family:inherit;font-weight:600;margin-right:12px;text-decoration:none;&::after{content:'->';font-family:",
            ";font-weight:600;position:relative;right:-8px;transition:all 0.2s ease;white-space:nowrap;}&:hover{&::after{right:-12px;transition:all 0.2s ease;}}}",
          ],
          N.ZP.experimental.neutral3,
          N.ZP.gray4,
          N.ZP.blue2,
          (0, L.Z)("code")
        ),
        Tn = n(97020),
        An = n(81118),
        In = function (e) {
          var t = e.tutorial,
            n = e.comments,
            i = e.sourceRequestParams,
            r = (0, k.Z)(i, 3),
            s = r[0],
            d = r[1],
            c = r[2],
            u = c.per_page,
            g = c.exclude,
            m = c.type,
            h = (0, a.useState)(n),
            f = h[0],
            x = h[1],
            y = (0, a.useState)(0),
            v = y[0],
            b = y[1],
            _ = (0, a.useState)(n.length === c.per_page),
            Z = _[0],
            j = _[1],
            S = (function () {
              var e = (0, o.Z)(
                l().mark(function e() {
                  var t;
                  return l().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            (0, p.xP)(s, d, {
                              per_page: u,
                              exclude: g,
                              type: m,
                              page: v + 1,
                            })
                          );
                        case 2:
                          (t = e.sent),
                            x(function (e) {
                              return e.concat(t);
                            }),
                            t.length < c.per_page && j(!1),
                            b(function (e) {
                              return e + 1;
                            });
                        case 6:
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
            P = (0, C.Z)(
              new Set(
                t.authors
                  .concat(t.editors)
                  .concat(t.translators)
                  .map(function (e) {
                    var t;
                    return null === e ||
                      void 0 === e ||
                      null === (t = e.user) ||
                      void 0 === t
                      ? void 0
                      : t.slug;
                  })
                  .filter(Boolean)
              )
            );
          return (0, se.jsxs)(se.Fragment, {
            children: [
              null === t.comments_locked_at
                ? (0, se.jsx)(Tn.Z, {
                    topLevelType: "tutorial",
                    topLevel: t,
                    parentType: "tutorial",
                    parent: t,
                    type: "comment",
                    count: null === f || void 0 === f ? void 0 : f.length,
                    onSave: function (e) {
                      return x(function (t) {
                        return t.concat(e);
                      });
                    },
                    usersThread: P,
                  })
                : "",
              f.length > 0
                ? (0, se.jsx)(An.Z, {
                    records: f,
                    topLevelType: "tutorial",
                    topLevel: t,
                    title: "Comment",
                    loadNested: !0,
                    replyable: !t.comments_locked_at,
                    urlFormatter: function (e) {
                      return (0, w.F7)(t.tutorial_type, t.slug, e);
                    },
                    onLoadMore: S,
                    handleUpdatedComment: function (e) {
                      x(function (t) {
                        return t.map(function (t) {
                          return t.id === e.id ? e : t;
                        });
                      });
                    },
                    hasMoreComments: Z,
                    users: P,
                  })
                : null,
            ],
          });
        },
        Nn = n(59046),
        On = n(68605),
        zn = T.ZP.div.withConfig({
          displayName:
            "TutorialFollowUpQuestionsTemplateStyles__StyledFollowUpIntroduction",
          componentId: "sc-z821j4-0",
        })(["margin-bottom:15px;margin-top:15px;"]),
        Ln = T.ZP.div.withConfig({
          displayName:
            "TutorialFollowUpQuestionsTemplateStyles__StyledFollowUpQuestionItem",
          componentId: "sc-z821j4-1",
        })(
          ["border-left:1px solid ", ";margin-bottom:25px;padding-left:15px;"],
          N.ZP.blueLight
        ),
        En = T.ZP.a.withConfig({
          displayName:
            "TutorialFollowUpQuestionsTemplateStyles__StyledFollowUpQuestionItemLink",
          componentId: "sc-z821j4-2",
        })(
          ["color:", ";font-weight:700;&:hover{color:", ";}"],
          N.ZP.blueDark,
          N.ZP.blueLight
        ),
        Fn = T.ZP.div.withConfig({
          displayName:
            "TutorialFollowUpQuestionsTemplateStyles__StyledFollowUpQuestionViewLink",
          componentId: "sc-z821j4-3",
        })(
          [
            "color:",
            ";cursor:pointer;display:inline-block;font-size:14px;font-weight:500;margin-left:25px;svg{height:12px;margin-left:5px;vertical-align:middle;width:12px;}",
          ],
          N.ZP.blueLight
        ),
        Dn = T.ZP.a.withConfig({
          displayName:
            "TutorialFollowUpQuestionsTemplateStyles__StyledNewFollowUpQuestion",
          componentId: "sc-z821j4-4",
        })(
          [
            "border:1px solid ",
            ";border-radius:15px;color:",
            ";cursor:pointer;display:inline-block;font-weight:700;margin-bottom:35px;padding:20px;text-align:center;text-decoration:none;width:100%;&:not(:disabled):hover{background-color:",
            ";color:",
            ";opacity:1;}",
          ],
          N.ZP.blueLight,
          N.ZP.blueLight,
          N.ZP.blueLight,
          N.ZP.white
        ),
        Rn = T.ZP.div.withConfig({
          displayName:
            "TutorialFollowUpQuestionsTemplateStyles__StyledCenterContainer",
          componentId: "sc-z821j4-5",
        })(["text-align:center;"]),
        Mn = function (e) {
          var t = e.tutorial,
            n = e.followUpQuestions,
            i = e.sourceRequestParams.per_page,
            r = (0, a.useState)(n),
            s = r[0],
            d = r[1],
            c = (0, a.useState)(0),
            u = c[0],
            g = c[1],
            m = (0, a.useState)(n.length === i),
            h = m[0],
            f = m[1],
            x = (function () {
              var e = (0, o.Z)(
                l().mark(function e() {
                  var n;
                  return l().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            (0, p.hd)(t.id, { per_page: i, page: u + 1 })
                          );
                        case 2:
                          (n = e.sent),
                            d(function (e) {
                              return e.concat(n);
                            }),
                            n.length < i && f(!1),
                            g(function (e) {
                              return e + 1;
                            });
                        case 6:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return (0, se.jsxs)(se.Fragment, {
            children: [
              (0, se.jsx)(zn, {
                children: "Questions related to this tutorial:",
              }),
              s.length > 0
                ? s.map(function (e) {
                    return (0,
                    se.jsxs)(Ln, { children: [(0, se.jsx)(G.Z, { renderAs: "h5", children: (0, se.jsx)(I(), { href: (0, w.F7)("question", e.slug), passHref: !0, children: (0, se.jsx)(En, { children: e.title }) }) }), (0, se.jsxs)("div", { children: [e.content, (0, se.jsx)(K.Z, { url: (0, w.F7)("question", e.slug), target: "_blank", passHref: !0, children: (0, se.jsxs)(Fn, { children: ["View", (0, se.jsx)(Nn.Z, {})] }) })] })] }, "follow-up-".concat(e.slug));
                  })
                : "There are no follow up questions;",
              h &&
                (0, se.jsx)(Rn, {
                  children: (0, se.jsx)(On.B, {
                    onClick: function () {
                      return x();
                    },
                    children: "Load more questions",
                  }),
                }),
              (0, se.jsx)(I(), {
                href: ""
                  .concat((0, w.F7)("question", "new"), "?tutorial=")
                  .concat(t.slug),
                passHref: !0,
                children: (0, se.jsx)(Dn, {
                  children: "Ask a Follow-Up Question",
                }),
              }),
            ],
          });
        },
        Hn =
          "https://doimages.nyc3.digitaloceanspaces.com/46f22fba-7718-478b-86ae-e8b875f0473e_default-avatar.jpeg",
        qn = "https://www.digitalocean.com/".replace(/\/*$/, ""),
        Qn = function (e) {
          var t;
          return null === e ||
            void 0 === e ||
            null ===
              (t = e.groups.sort(function (e, t) {
                return e.position - t.position;
              })) ||
            void 0 === t
            ? void 0
            : t.flatMap(function (e) {
                return e.objects.sort(function (e, t) {
                  return e.position - t.position;
                });
              });
        },
        Bn = function (e) {
          var t,
            n,
            i,
            r,
            s,
            d,
            p,
            g,
            m = e.record,
            h = e.onRecordUpdate,
            f = e.content,
            b = e.headers,
            _ = e.comments,
            Z = e.commentsRequestParams,
            S = e.relatedRecords,
            P = e.translations,
            T = e.followUpQuestions,
            A = e.followUpQuestionsParams,
            z = e.versions,
            L = (0, j.Z)(),
            G = (0, c.useRouter)(),
            ee = (0, a.useState)(b),
            te = ee[0],
            ne = ee[1],
            ie = (0, a.useState)(null),
            oe = ie[0],
            re = ie[1],
            le = (0, a.useState)(m.series),
            ae = le[0],
            me = le[1],
            he = (0, a.useState)(
              [].concat(
                (0, C.Z)(m.authors),
                (0, C.Z)(m.editors),
                (0, C.Z)(m.translators)
              )
            ),
            fe = he[0],
            xe = he[1],
            ye = (0, a.useState)(!1),
            be = ye[0],
            ke = ye[1],
            Ce = (0, a.useState)(!1),
            Te = Ce[0],
            Ae = Ce[1],
            Ne = (0, a.useState)(null),
            Oe = Ne[0],
            ze = Ne[1],
            Le = (0, a.useState)(null),
            Ee = Le[0],
            Fe = Le[1],
            De = (0, a.useState)(!1),
            Me = De[0],
            He = De[1],
            qe = (0, a.useState)(null),
            Qe = qe[0],
            Be = qe[1],
            Ue = (0, a.useState)(null),
            We = Ue[0],
            Xe = Ue[1],
            Ve = (0, B.Z)(),
            Ge = (0, a.useCallback)(function (e) {
              e.preventDefault(), Be(e.target.dataset.formId), He(!0);
            }, []),
            Ye = (0, a.useCallback)(
              function (e, t) {
                ne(
                  e.headings.filter(function (e) {
                    return e.level <= 2;
                  })
                ),
                  t
                    .querySelectorAll('button[data-js="rsvp-button"]')
                    .forEach(function (e) {
                      e.addEventListener("click", Ge),
                        e.removeAttribute("disabled");
                    });
                var n = t.querySelector('button[data-js="terminal"]');
                n && (Xe(n), E(t));
              },
              [Ge]
            );
          (0, a.useEffect)(
            function () {
              me(m.series),
                xe(
                  [].concat(
                    (0, C.Z)(m.authors),
                    (0, C.Z)(m.editors),
                    (0, C.Z)(m.translators)
                  )
                );
            },
            [m]
          );
          var $e = function (e) {
              G.push(e);
            },
            Ke = (0, a.useCallback)(
              (function () {
                var e = (0, o.Z)(
                  l().mark(function e(t) {
                    var n;
                    return l().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), (0, u.XY)(L.token, m.slug, t);
                          case 2:
                            if ((n = e.sent)) {
                              e.next = 5;
                              break;
                            }
                            return e.abrupt("return");
                          case 5:
                            h(n);
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
              [L.token, m.slug, h]
            );
          (0, a.useEffect)(
            function () {
              if (z.length && oe) {
                re(null);
                var e = z
                  .map(function (e) {
                    var t = e[Object.keys(e)[0]].filter(function (e) {
                      return e.value === oe;
                    });
                    return t.length ? t[0].key : null;
                  })
                  .filter(function (e) {
                    return null !== e;
                  })[0];
                $e(e);
              }
            },
            [z.memberships, oe]
          );
          var Je = function (e) {
              var t = Qn(e),
                n = t.findIndex(function (e) {
                  return e.object_id === m.id && "tutorial" === e.object_type;
                });
              return t[n + 1] || null;
            },
            et = (0, U.Z)(m),
            tt = (0, k.Z)(et, 2)[1],
            nt = (0, a.useMemo)(
              function () {
                var e, t, n, i;
                return (
                  Ve &&
                  "function" ===
                    typeof (null === (e = window.analytics) ||
                    void 0 === e ||
                    null === (t = e.user()) ||
                    void 0 === t
                      ? void 0
                      : t.id) &&
                  null ===
                    (null === (n = window.analytics) ||
                    void 0 === n ||
                    null === (i = n.user()) ||
                    void 0 === i
                      ? void 0
                      : i.id()) &&
                  null === L.token
                );
              },
              [L, Ve]
            ),
            it = (0, W.Z)("community_tutorials_questions_bottom_fto"),
            ot = (0, k.Z)(it, 1)[0],
            rt = (0, a.useMemo)(
              function () {
                return (0, F.Z)(ot, G.asPath);
              },
              [ot, G.asPath]
            ),
            lt = (0, a.useCallback)(
              function () {
                return We.click();
              },
              [We]
            );
          return (0, se.jsxs)(se.Fragment, {
            children: [
              "draft" === (null === m || void 0 === m ? void 0 : m.state)
                ? (0, se.jsx)(_n, { children: "In draft mode" })
                : null,
              (0, se.jsxs)(ue.Z, {
                slim: !0,
                children: [
                  (0, se.jsxs)(ce.Z, {
                    children: [
                      (0, se.jsx)(Ze.Z, { headers: te, slim: !0 }),
                      We &&
                        (0, se.jsx)(Wn, {
                          dashArrow: !0,
                          onClick: lt,
                          children: "Launch Interactive Terminal",
                        }),
                      S &&
                        (0, se.jsx)(we.Z, {
                          auth: L,
                          relatedRecords: S,
                          recordType: "tutorial",
                        }),
                    ],
                  }),
                  (0, se.jsxs)(X.Z, {
                    slim: !0,
                    children: [
                      ae.map(function (e) {
                        return (0, se.jsx)(
                          _t,
                          {
                            series: { title: e.title, slug: e.slug },
                            records: Qn(e),
                            current: Qn(e).findIndex(function (e) {
                              return (
                                e.object_id === m.id &&
                                "tutorial" === e.object_type
                              );
                            }),
                          },
                          e.id
                        );
                      }),
                      (0, se.jsxs)(Qt, {
                        children: [
                          (0, se.jsx)(Xn, {
                            renderAs: "h4",
                            $_css: N.j4[m.tutorial_type],
                            children: "// ".concat(
                              (0, Q.Z)(m.tutorial_type),
                              " //"
                            ),
                          }),
                          (0, se.jsx)(Vn, {
                            renderAs: "h1",
                            children: m.title,
                          }),
                          (0, se.jsxs)(Xt, {
                            children: [
                              (0, se.jsx)(Kt, { children: (0, R.Z)(m) }),
                              (0, se.jsx)(Vt, {
                                children: m.tags.map(function (e) {
                                  return (0,
                                  se.jsx)(Gt, { children: (0, se.jsx)(Se.Z, { url: (0, w.F7)("tag", e.slug), tag: e }, e.id) }, (0, x.Z)());
                                }),
                              }),
                              (0, se.jsx)(en, {
                                children: (0, se.jsx)(tn, {
                                  src: Hn,
                                  alt: "Default avatar",
                                }),
                              }),
                              (0, se.jsx)(Yt, {
                                children: (0, se.jsxs)($t, {
                                  children: [
                                    "By",
                                    " ",
                                    m.authors.map(function (e, t) {
                                      var n, i;
                                      return (0,
                                      se.jsxs)(a.Fragment, { children: [e.user ? (0, se.jsx)(I(), { href: (0, w.F7)("user", e.user.slug), passHref: !0, children: (0, se.jsx)(Jt, { size: 16, children: (0, H.Z)(e.user) }) }) : (0, se.jsx)(Jt, { size: 16, children: e.user_name }), t < m.authors.length - 2 ? ", " : "", t === m.authors.length - 2 ? " and " : "", 1 === m.authors.length ? (0, se.jsx)(un, { size: 16, children: null !== (i = e.user) && void 0 !== i && i.title ? e.user.title : "Developer and author at DigitalOcean." }) : ""] }, (null === (n = e.user) || void 0 === n ? void 0 : n.id) || e.user_name);
                                    }),
                                  ],
                                }),
                              }),
                              P.length > 1 &&
                                (0, se.jsx)(pn, {
                                  options: P,
                                  value: P.find(function (e) {
                                    return e.key === m.language;
                                  }),
                                  onChange: function (e) {
                                    return $e(e.value);
                                  },
                                  icon: Mt,
                                  style: { padding: 5 },
                                }),
                            ],
                          }),
                          We &&
                            (0, se.jsxs)(Pn, {
                              children: [
                                (0, se.jsx)("span", {
                                  children:
                                    "This is one of our interactive tutorials! Practice the commands as you learn by ",
                                }),
                                (0, se.jsx)(Pe.Z, {
                                  className: "link",
                                  onClick: lt,
                                  children: "clicking here",
                                }),
                              ],
                            }),
                          m.header_url
                            ? (0, se.jsx)(Bt, {
                                src: m.header_url,
                                alt: m.title,
                                title: m.title,
                              })
                            : (0, se.jsx)(Bt, {
                                src: qt.Z.src,
                                alt: m.title,
                                title: m.title,
                              }),
                          m.needs_review &&
                            (0, se.jsxs)(jn, {
                              children: [
                                (0, se.jsx)(O.Z, {
                                  width: 30,
                                  height: 30,
                                  color: N.ZP.blueLight,
                                }),
                                (0, se.jsxs)("p", {
                                  children: [
                                    "While we believe that this content benefits our community, we have not yet thoroughly reviewed it.",
                                    " ",
                                    "If you have any suggestions for improvements, please let us know by clicking the",
                                    " ",
                                    "\u201creport an issue\u201c button at the bottom of the tutorial.",
                                  ],
                                }),
                              ],
                            }),
                          z.length > 0 &&
                            z.map(function (e) {
                              var t = Object.keys(e)[0];
                              if (e[t].length < 2) return null;
                              var n = e[t].filter(function (e) {
                                return e.value === m.id;
                              })[0];
                              return (0, se.jsxs)(
                                mn,
                                {
                                  children: [
                                    (0, se.jsx)(hn, {
                                      children: (0, se.jsxs)(fn, {
                                        renderAs: "h5",
                                        children: [
                                          "Not using",
                                          " ",
                                          n.distribution,
                                          " ",
                                          n.distribution_version,
                                          "?",
                                          (0, se.jsx)(xn, {
                                            children:
                                              "Choose a different version or distribution.",
                                          }),
                                        ],
                                      }),
                                    }),
                                    (0, se.jsx)(Y.Z, {
                                      options: e[t],
                                      value: e[t].find(function (e) {
                                        return e.value === m.id;
                                      }),
                                      onChange: function (e) {
                                        return re(e.value);
                                      },
                                    }),
                                  ],
                                },
                                t
                              );
                            }),
                        ],
                      }),
                      "deprecated" === m.state &&
                        (0, se.jsx)(Zn, {
                          children: (0, se.jsx)("p", {
                            children:
                              "This tutorial is out of date and no longer maintained.",
                          }),
                        }),
                      (0, se.jsx)(M.default, {
                        content: m.content,
                        allowHtml: !!m.raw_html_allowed_in_markdown_at,
                        allowRsvp: !0,
                        allowTerminal: !0,
                        onRender: Ye,
                        initial: f,
                      }),
                      m.conclusion_cta &&
                        (0, se.jsx)(Cn, { content: m.conclusion_cta }),
                      (0, se.jsx)(yn, {
                        children: ae.map(function (e) {
                          var t, n, i;
                          return (0,
                          se.jsxs)(a.Fragment, { children: [Qn(e).length && null !== Je(e) ? (0, se.jsx)(vn, { children: (0, se.jsx)(I(), { href: (0, w.F7)((0, D.Z)(Je(e)), null === (t = Je(e)) || void 0 === t || null === (n = t.object) || void 0 === n ? void 0 : n.slug), passHref: !0, children: "Next in series: ".concat(null === (i = Je(e)) || void 0 === i ? void 0 : i.object.title, " ->") }) }) : null, Qn(e).length && null === Je(e) ? (0, se.jsx)(vn, { children: (0, se.jsx)(I(), { href: (0, w.F7)("tutorial_serie", null === e || void 0 === e ? void 0 : e.slug), passHref: !0, children: "Revisit all the tutorials in this tutorial series: ".concat(null === e || void 0 === e ? void 0 : e.title, " ->") }) }) : null] }, null === e || void 0 === e ? void 0 : e.id);
                        }),
                      }),
                      (0, se.jsx)(bn, {}),
                      "function" ===
                        typeof (null === (t = window.analytics) ||
                        void 0 === t ||
                        null === (n = t.user()) ||
                        void 0 === n
                          ? void 0
                          : n.id) &&
                        null === window.analytics.user().id() &&
                        (0, se.jsx)(V.Z, {
                          title:
                            null !==
                              (i =
                                null === rt || void 0 === rt
                                  ? void 0
                                  : rt.title) && void 0 !== i
                              ? i
                              : "Want to learn more? Join the DigitalOcean Community!",
                          content:
                            null !==
                              (r =
                                null === rt || void 0 === rt
                                  ? void 0
                                  : rt.body) && void 0 !== r
                              ? r
                              : "Join our DigitalOcean community of over a million developers for free! Get help and share knowledge in our Questions & Answers section, find tutorials and tools that will help you grow as a developer and scale your project or business, and subscribe to topics of interest.",
                          linkText:
                            null !==
                              (s =
                                null === rt ||
                                void 0 === rt ||
                                null === (d = rt.link) ||
                                void 0 === d
                                  ? void 0
                                  : d.title) && void 0 !== s
                              ? s
                              : "Sign up",
                          link:
                            null !==
                              (p =
                                null === rt ||
                                void 0 === rt ||
                                null === (g = rt.link) ||
                                void 0 === g
                                  ? void 0
                                  : g.title) && void 0 !== p
                              ? p
                              : L.signIn,
                          image:
                            (null === rt || void 0 === rt
                              ? void 0
                              : rt.image) || null,
                          gradient:
                            "new_question_tutorial_fto" === ot &&
                            "linear-gradient("
                              .concat(N.ZP.blue2, ", ")
                              .concat(N.ZP.blueDarkExp, ")"),
                          color: N.ZP.gray9,
                        }),
                      ae.map(function (e) {
                        return (0,
                        se.jsx)(Re, { series: { id: e.id, title: e.title, description: e.description }, records: Qn(e), tags: m.tags, seriesSelected: m.id, seriesSelectedType: "tutorial" }, e.id);
                      }),
                      (0, se.jsx)(nn, {
                        children: (0, se.jsxs)(on, {
                          children: [
                            (0, se.jsx)(rn, { children: "About the authors" }),
                            fe.map(function (e) {
                              var t, n, i, o;
                              return (0,
                              se.jsxs)(a.Fragment, { children: [(0, se.jsxs)(ln, { children: [(0, se.jsx)(an, { src: Hn, alt: "Default avatar" }), (0, se.jsxs)(sn, { children: [(0, se.jsx)(dn, { children: e.user ? (0, se.jsxs)(se.Fragment, { children: [(0, se.jsx)(I(), { href: (0, w.F7)("user", e.user.slug), passHref: !0, children: (0, se.jsx)(Jt, { size: 18, children: (0, H.Z)(e.user) }) }), (0, se.jsx)(wn, { children: e.relation })] }) : (0, se.jsxs)(se.Fragment, { children: [(0, se.jsx)(Jt, { size: 18, children: e.user_name }), (0, se.jsx)(wn, { children: e.relation })] }) }), (0, se.jsx)(un, { size: 18, children: null !== (n = e.user) && void 0 !== n && n.title ? e.user.title : "Developer and author at DigitalOcean." })] })] }), null !== (i = e.user) && void 0 !== i && i.bio && null !== (o = e.user) && void 0 !== o && o.title ? (0, se.jsx)(cn, { children: (0, se.jsx)(M.default, { content: e.user.bio || "", allowRsvp: !0, allowTerminal: !0 }) }) : null, fe.length > 1 ? (0, se.jsx)(bn, {}) : null] }, (null === (t = e.user) || void 0 === t ? void 0 : t.id) || e.user_name);
                            }),
                          ],
                        }),
                      }),
                      (0, se.jsx)(ve, {
                        QAUrl: "/community/questions",
                        searchUrl: "/community",
                      }),
                      (0, se.jsx)(jt.Z, {
                        isYes: Oe,
                        isNo: Ee,
                        onNo: function () {
                          ke(!0), Ae(!0);
                        },
                        onYes: function () {
                          ze(!0);
                        },
                        shareUrl: ""
                          .concat(qn, "/community/")
                          .concat((0, q.Z)(m.tutorial_type), "/")
                          .concat(
                            encodeURIComponent(m.slug),
                            "?utm_medium=community&utm_source=twshare&utm_content="
                          )
                          .concat(encodeURIComponent(m.slug)),
                        shareText: m.title,
                      }),
                      (0, se.jsx)(_e.Z, {
                        record: m,
                        reportedType: "Tutorial",
                        auth: L,
                        isReportModalOpen: be,
                        setIsReportModalOpen: ke,
                        onReportChange: Fe,
                        isTriggeredByHelpful: Te,
                        setIsTriggeredByHelpful: Ae,
                      }),
                      (0, se.jsxs)(je.Mz, {
                        children: [
                          (0, se.jsx)(
                            je.OK,
                            {
                              label: "Comments",
                              content: [],
                              children: (0, se.jsx)(In, {
                                tutorial: m,
                                comments: _,
                                sourceRequestParams: Z,
                              }),
                            },
                            "tabbed-content-1"
                          ),
                          m.follow_up_questions_enabled_at
                            ? (0, se.jsx)(
                                je.OK,
                                {
                                  label: "Follow-Up Questions",
                                  content: [],
                                  children: (0, se.jsx)(Mn, {
                                    tutorial: m,
                                    followUpQuestions: T,
                                    sourceRequestParams: A,
                                  }),
                                },
                                "tabbed-content-2"
                              )
                            : "",
                        ],
                      }),
                      (0, se.jsxs)(gn, {
                        children: [
                          (0, se.jsx)(K.Z, {
                            url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
                            alt: "Creative Commons url",
                            children: (0, se.jsx)($.Z, {
                              src: Ht,
                              alt: "Creative Commons",
                            }),
                          }),
                          (0, se.jsx)(K.Z, {
                            url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
                            alt: "Creative Commons url",
                            children:
                              "This work is licensed under a Creative Commons Attribution-NonCommercial- ShareAlike 4.0 International License.",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, se.jsxs)(pe.Z, {
                    children: [
                      (0, se.jsx)(kn, {
                        children:
                          tt &&
                          (0, se.jsx)(St.Z, {
                            maxWidth: "auto",
                            backgroundColor:
                              null === tt || void 0 === tt
                                ? void 0
                                : tt.backgroundColor,
                            background:
                              null === tt || void 0 === tt
                                ? void 0
                                : tt.background,
                            color:
                              null === tt || void 0 === tt ? void 0 : tt.color,
                            coralTopColor:
                              null === tt || void 0 === tt
                                ? void 0
                                : tt.coralTopColor,
                            coralBottomColor:
                              null === tt || void 0 === tt
                                ? void 0
                                : tt.coralBottomColor,
                            title:
                              null === tt || void 0 === tt ? void 0 : tt.title,
                            body:
                              null === tt || void 0 === tt ? void 0 : tt.body,
                            link:
                              null === tt || void 0 === tt ? void 0 : tt.link,
                          }),
                      }),
                      (0, se.jsx)(kn, {
                        children: (0, se.jsx)(ge.Z, { auth: L }),
                      }),
                    ],
                  }),
                  (L.permissions.has(v.P.flags.ADMINISTRATOR) ||
                    L.permissions.has(v.P.flags.MANAGE_TUTORIALS)) &&
                    (0, se.jsx)(J.Z, {
                      record: m,
                      update: Ke,
                      type: "tutorial",
                      subType: m.tutorial_type,
                    }),
                ],
              }),
              nt
                ? (0, se.jsxs)(Ie, {
                    cookie: "signupToast-dismiss",
                    children: [
                      (0, se.jsx)("h4", {
                        children: "Try DigitalOcean for free",
                      }),
                      (0, se.jsxs)("p", {
                        children: [
                          "Click here to",
                          " ",
                          (0, se.jsx)(Pe.Z, {
                            url: "https://cloud.digitalocean.com/registrations/new?refcode=".concat(
                              y.rh.communityFTOAll
                            ),
                            children: "Sign up",
                          }),
                          " ",
                          "and get",
                          " ",
                          y.KM.credit,
                          " ",
                          "of credit to try our products over 60 days!",
                        ],
                      }),
                    ],
                  })
                : (0, se.jsx)(Ie, {
                    cookie: "newsletter-dismiss",
                    children: (0, se.jsx)(de, {}),
                  }),
              (0, se.jsx)(Ft, {
                isRSVPModalOpen: Me,
                setIsRSVPModalOpen: He,
                RSVPFormId: Qe,
                setRSVPFormId: Be,
              }),
            ],
          });
        },
        Un = Bn;
      Bn.defaultProps = { relatedRecords: null, translations: null };
      var Wn = (0, T.ZP)(Pe.Z).withConfig({
          displayName: "TutorialTemplate___StyledTextLink",
          componentId: "sc-dk9clm-0",
        })(["", ""], Sn),
        Xn = (0, T.ZP)(G.Z).withConfig({
          displayName: "TutorialTemplate___StyledHeading",
          componentId: "sc-dk9clm-1",
        })(["", " color:", ""], Ut, function (e) {
          return e.$_css;
        }),
        Vn = (0, T.ZP)(G.Z).withConfig({
          displayName: "TutorialTemplate___StyledHeading2",
          componentId: "sc-dk9clm-2",
        })(["", ""], Wt),
        Gn = n(84089);
      function Yn(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function $n(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Yn(Object(n), !0).forEach(function (t) {
                (0, i.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Yn(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var Kn = "https://www.digitalocean.com/".replace(/\/*$/, ""),
        Jn = (function () {
          var e = (0, o.Z)(
            l().mark(function e(t) {
              var n,
                i,
                o,
                r,
                a,
                s,
                d,
                c,
                g,
                m,
                h,
                x,
                v,
                w = arguments;
              return l().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((n = w.length > 1 && void 0 !== w[1] ? w[1] : null), t)
                      ) {
                        e.next = 3;
                        break;
                      }
                      return e.abrupt("return", {
                        slug: null,
                        tutorial: null,
                        content: null,
                        headers: null,
                        comments: null,
                        commentsRequestParams: null,
                        relatedRecords: null,
                        translations: null,
                        followUpQuestions: null,
                        questionsRequestParams: null,
                      });
                    case 3:
                      if (null === n || void 0 === n || !n.token) {
                        e.next = 9;
                        break;
                      }
                      return (
                        (e.next = 6),
                        (0, u.CG)(n.token, t)
                          .catch(function () {})
                          .then(function (e) {
                            return (
                              e ||
                              (0, p.CG)(t, $n({}, y._y)).catch(function () {})
                            );
                          })
                      );
                    case 6:
                      (e.t0 = e.sent), (e.next = 12);
                      break;
                    case 9:
                      return (
                        (e.next = 11),
                        (0, p.CG)(t, $n({}, y._y)).catch(function () {})
                      );
                    case 11:
                      e.t0 = e.sent;
                    case 12:
                      if ((i = e.t0)) {
                        e.next = 15;
                        break;
                      }
                      return e.abrupt("return", null);
                    case 15:
                      return (
                        (o = i.id),
                        (r = i.tags),
                        (a = i.language),
                        (s = (0, b.Z)(
                          i.content,
                          !!i.raw_html_allowed_in_markdown_at,
                          !0,
                          !0,
                          !1
                        )),
                        (d = [
                          "tutorial",
                          o,
                          {
                            type: "comment",
                            page: 0,
                            per_page: y.oA.commentsPerPage,
                          },
                        ]),
                        (e.next = 20),
                        p.xP.apply(void 0, d).catch(function (e) {
                          return (
                            console.error("Failed to load comments", e), []
                          );
                        })
                      );
                    case 20:
                      return (
                        (c = e.sent),
                        (e.next = 23),
                        (0, f.Z)(r, o, p._x, a).catch(function (e) {
                          return console.error("Failed to load related", e), [];
                        })
                      );
                    case 23:
                      if (
                        ((g = e.sent),
                        (m = { page: 0, per_page: 5 }),
                        !i.follow_up_questions_enabled_at)
                      ) {
                        e.next = 31;
                        break;
                      }
                      return (
                        (e.next = 28),
                        (0, p.hd)(i.id, m).catch(function (e) {
                          return (
                            console.error("Failed to load questions", e), []
                          );
                        })
                      );
                    case 28:
                      (e.t1 = e.sent), (e.next = 32);
                      break;
                    case 31:
                      e.t1 = [];
                    case 32:
                      return (
                        (h = e.t1),
                        (e.next = 35),
                        (0, p.iO)(t)
                          .then(function (e) {
                            return Object.keys(e)
                              .flatMap(function (t) {
                                return e[t].length > 1
                                  ? e[t].map(function (e) {
                                      return {
                                        key: e.language,
                                        label: y.J3[e.language].localized_name,
                                        value: e.slug,
                                      };
                                    })
                                  : {
                                      key: e[t][0].language,
                                      label:
                                        y.J3[e[t][0].language].localized_name,
                                      value: e[t][0].slug,
                                    };
                              })
                              .sort(function (e, t) {
                                return e.label.localeCompare(t.label);
                              });
                          })
                          .catch(function (e) {
                            return (
                              console.error("Failed to load translations", e),
                              []
                            );
                          })
                      );
                    case 35:
                      return (
                        (x = e.sent),
                        (e.next = 38),
                        (0, p.px)(i.slug)
                          .then(function (e) {
                            return e.map(function (e) {
                              var t = {},
                                n = Object.keys(e)[0];
                              return (
                                (t[n] = e[n].map(function (e) {
                                  return {
                                    distribution: e.distribution.name,
                                    distribution_version:
                                      e.distribution_version.name,
                                    key: e.tutorial.slug,
                                    label: ""
                                      .concat(e.distribution.name, " ")
                                      .concat(e.distribution_version.name),
                                    value: e.tutorial_id,
                                  };
                                })),
                                t
                              );
                            });
                          })
                          .catch(function (e) {
                            return (
                              console.error(
                                "Failed to load version grouping members",
                                e
                              ),
                              []
                            );
                          })
                      );
                    case 38:
                      return (
                        (v = e.sent),
                        e.abrupt("return", {
                          slug: t,
                          tutorial: i,
                          content: s.result,
                          headers: s.headings.filter(function (e) {
                            return e.level <= 2;
                          }),
                          comments: c,
                          commentsRequestParams: d,
                          relatedRecords: g,
                          translations: x,
                          followUpQuestions: h,
                          questionsRequestParams: m,
                          versions: v,
                        })
                      );
                    case 40:
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
        ei = function (e) {
          var t,
            n,
            i,
            r,
            s,
            u,
            p,
            f,
            y,
            b,
            k,
            C,
            T,
            A,
            I,
            N,
            O,
            z = e.data,
            L = (0, j.Z)(),
            E = (0, c.useRouter)(),
            F = (0, a.useState)(null === z || void 0 === z ? void 0 : z.slug),
            D = F[0],
            R = F[1],
            M = (0, a.useState)(z),
            H = M[0],
            q = M[1],
            Q = (0, a.useCallback)(
              (function () {
                var e = (0, o.Z)(
                  l().mark(function e(t) {
                    return l().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            q(function (e) {
                              return $n(
                                $n({}, e),
                                {},
                                { tutorial: $n($n({}, e.tutorial), t) }
                              );
                            });
                          case 1:
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
              []
            );
          if (
            ((0, a.useEffect)(
              function () {
                var e, t, n;
                if (
                  D &&
                  (null === E ||
                  void 0 === E ||
                  null === (e = E.query) ||
                  void 0 === e
                    ? void 0
                    : e.slug) !== D
                )
                  return (
                    q(z), void R(null === z || void 0 === z ? void 0 : z.slug)
                  );
                var i =
                  L.permissions.has(v.P.flags.MANAGE_TAGS) ||
                  L.permissions.has(v.P.flags.ADMINISTRATOR);
                (null !== H &&
                  void 0 !== H &&
                  null !== (t = H.tutorial) &&
                  void 0 !== t &&
                  t.slug &&
                  !i) ||
                  L.loading ||
                  null === E ||
                  void 0 === E ||
                  null === (n = E.query) ||
                  void 0 === n ||
                  !n.slug ||
                  Jn(E.query.slug, L).then(function (e) {
                    e && q(e), R(E.query.slug);
                  });
              },
              [
                D,
                null === H ||
                void 0 === H ||
                null === (t = H.tutorial) ||
                void 0 === t
                  ? void 0
                  : t.slug,
                z,
                L,
                null === E ||
                void 0 === E ||
                null === (n = E.query) ||
                void 0 === n
                  ? void 0
                  : n.slug,
              ]
            ),
            (0, S.Z)(
              null === H ||
                void 0 === H ||
                null === (i = H.tutorial) ||
                void 0 === i
                ? void 0
                : i.tutorial_type
            ),
            !E.isFallback && D && !H)
          )
            return (0, se.jsx)(Gn.default, { statusCode: 404 });
          var B =
            null !== H &&
            void 0 !== H &&
            null !== (r = H.tutorial) &&
            void 0 !== r &&
            null !== (s = r.original) &&
            void 0 !== s &&
            s.slug
              ? H.tutorial.original.slug
              : null === H ||
                void 0 === H ||
                null === (u = H.tutorial) ||
                void 0 === u
              ? void 0
              : u.slug;
          return (0, se.jsxs)(P.Z, {
            children: [
              (0, se.jsxs)(d(), {
                children: [
                  (0, se.jsx)("title", {
                    children: (0, m.Z)(
                      null === H ||
                        void 0 === H ||
                        null === (p = H.tutorial) ||
                        void 0 === p
                        ? void 0
                        : p.title,
                      "Tutorial"
                    ),
                  }),
                  (0, se.jsx)(
                    "meta",
                    {
                      name: "description",
                      content: (0, g.Z)(
                        null === H ||
                          void 0 === H ||
                          null === (f = H.tutorial) ||
                          void 0 === f
                          ? void 0
                          : f.description
                      ),
                    },
                    "description"
                  ),
                  (0, se.jsx)(
                    "meta",
                    {
                      name: "twitter:title",
                      content: (0, m.Z)(
                        null === H ||
                          void 0 === H ||
                          null === (y = H.tutorial) ||
                          void 0 === y
                          ? void 0
                          : y.title,
                        "Tutorial"
                      ),
                    },
                    "twitterTitle"
                  ),
                  (0, se.jsx)(
                    "meta",
                    {
                      name: "twitter:description",
                      content: (0, g.Z)(
                        null === H ||
                          void 0 === H ||
                          null === (b = H.tutorial) ||
                          void 0 === b
                          ? void 0
                          : b.description
                      ),
                    },
                    "twitterDescription"
                  ),
                  (0, se.jsx)(
                    "meta",
                    {
                      name: "twitter:image",
                      content:
                        null !==
                        (null === H ||
                        void 0 === H ||
                        null === (k = H.tutorial) ||
                        void 0 === k
                          ? void 0
                          : k.header_url)
                          ? null === H ||
                            void 0 === H ||
                            null === (C = H.tutorial) ||
                            void 0 === C
                            ? void 0
                            : C.header_url
                          : "".concat(Kn).concat(qt.Z.src),
                    },
                    "twitterImage"
                  ),
                  (0, se.jsx)(
                    "meta",
                    {
                      name: "og:title",
                      content: (0, m.Z)(
                        null === H ||
                          void 0 === H ||
                          null === (T = H.tutorial) ||
                          void 0 === T
                          ? void 0
                          : T.title,
                        "Tutorial"
                      ),
                    },
                    "ogTitle"
                  ),
                  (0, se.jsx)(
                    "meta",
                    {
                      name: "og:description",
                      content: (0, g.Z)(
                        null === H ||
                          void 0 === H ||
                          null === (A = H.tutorial) ||
                          void 0 === A
                          ? void 0
                          : A.description
                      ),
                    },
                    "ogDescription"
                  ),
                  (0, se.jsx)(
                    "meta",
                    {
                      name: "og:image",
                      content:
                        null !==
                        (null === H ||
                        void 0 === H ||
                        null === (I = H.tutorial) ||
                        void 0 === I
                          ? void 0
                          : I.header_url)
                          ? null === H ||
                            void 0 === H ||
                            null === (N = H.tutorial) ||
                            void 0 === N
                            ? void 0
                            : N.header_url
                          : "".concat(Kn).concat(qt.Z.src),
                    },
                    "ogImage"
                  ),
                  (0, se.jsx)("meta", {
                    property: "og:type",
                    content: "article",
                  }),
                  (null === H || void 0 === H ? void 0 : H.tutorial) &&
                    (0, se.jsxs)(se.Fragment, {
                      children: [
                        (0, se.jsx)("link", {
                          rel: "canonical",
                          href: ""
                            .concat(Kn)
                            .concat(
                              (0, w.F7)(
                                H.tutorial.tutorial_type,
                                H.tutorial.slug
                              )
                            ),
                        }),
                        (0, se.jsx)("script", {
                          type: "application/ld+json",
                          dangerouslySetInnerHTML: { __html: (0, h.Z)(H) },
                        }),
                      ],
                    }),
                  "deprecated" ===
                    (null === H ||
                    void 0 === H ||
                    null === (O = H.tutorial) ||
                    void 0 === O
                      ? void 0
                      : O.state) &&
                    (0, se.jsx)("meta", { name: "robots", content: "noindex" }),
                  (null === H || void 0 === H ? void 0 : H.translations) &&
                    (0, se.jsxs)(se.Fragment, {
                      children: [
                        H.translations.map(function (e) {
                          return (0,
                          se.jsx)("link", { rel: "alternate", hrefLang: e.key, href: "".concat(Kn).concat((0, w.F7)(H.tutorial.tutorial_type, e.value)) }, (0, x.Z)());
                        }),
                        (0, se.jsx)("link", {
                          rel: "alternate",
                          hrefLang: "x-default",
                          href: ""
                            .concat(Kn)
                            .concat((0, w.F7)(H.tutorial.tutorial_type, B)),
                        }),
                      ],
                    }),
                ],
              }),
              E.isFallback || !D
                ? (0, se.jsx)("div", { children: "Loading\u2026" })
                : (0, se.jsx)(_.U, {
                    children: (0, se.jsx)(Z.q, {
                      auth: L,
                      children: (0, se.jsx)(Un, {
                        record: H.tutorial,
                        onRecordUpdate: Q,
                        content: H.content,
                        headers: H.headers,
                        comments: H.comments,
                        commentsRequestParams: H.commentsRequestParams,
                        relatedRecords: H.relatedRecords,
                        translations: H.translations,
                        followUpQuestions: H.followUpQuestions,
                        followUpQuestionsParams: H.questionsRequestParams,
                        versions: H.versions,
                      }),
                    }),
                  }),
            ],
          });
        },
        ti = !0,
        ni = ei;
      ei.defaultProps = { data: null };
    },
    61337: function (e, t, n) {
      "use strict";
      var i = n(58066),
        o = n(21474),
        r = n(59667),
        l = n(88723),
        a = n(93050),
        s = "https://www.digitalocean.com/".replace(/\/*$/, "");
      t.Z = function (e) {
        var t = e.comments,
          n = e.tutorial,
          d = n.authors,
          c = n.description,
          u = n.editors,
          p = n.tags,
          g = n.title,
          m = {},
          h = "".concat(s).concat((0, l.F7)(n.tutorial_type, e.slug)),
          f = d.map(function (e) {
            return {
              "@type": "Person",
              name: (0, i.Z)(e.user ? (0, o.Z)(e.user) : e.user_name),
            };
          }),
          x = u.map(function (e) {
            return {
              "@type": "Person",
              name: (0, i.Z)(e.user ? (0, o.Z)(e.user) : e.user_name),
            };
          }),
          y =
            (null === t || void 0 === t
              ? void 0
              : t.map(function (e) {
                  return {
                    comment: {
                      "@context": "http://schema.org",
                      "@type": "comment",
                      "@text": (0, i.Z)(
                        (0, r.Z)(e.content || "", !1, !1, !1, !0)
                      ),
                    },
                  };
                })) || null;
        return (
          (m["@context"] = "http://schema.org"),
          (m["@type"] = "Article"),
          (m.name = (0, i.Z)(g)),
          (m.headline = (0, i.Z)(g)),
          (m.alternativeHeadline = (0, i.Z)(g)),
          (m.description = (0, i.Z)((0, r.Z)(c || "", !1, !1, !1, !0))),
          (m.keywords = (0, i.Z)(
            p
              .map(function (e) {
                return e.name;
              })
              .join(",")
          )),
          (m.url = h),
          (m.mainEntityOfPage = { "@type": "WebPage", "@id": h }),
          (m.dateModified =
            null !== n && void 0 !== n && n.last_validated_at
              ? n.last_validated_at
              : n.published_at),
          (m.inLanguage = null === n || void 0 === n ? void 0 : n.language),
          (m.accessMode = "textual"),
          (m.accessModeSufficient = "textual"),
          (m.isAccessibleForFree = !0),
          (m.license = "https://creativecommons.org/licenses/by-nc-sa/4.0/"),
          (m.publishingPrinciples =
            "https://www.digitalocean.com/community/tutorials/technical-recommendations-and-best-practices-for-digitalocean-s-tutorials"),
          (m.author = f),
          (m.datePublished =
            null === n || void 0 === n ? void 0 : n.published_at),
          (m.editor = x),
          (m.headerUrl = {
            "@type": "ImageObject",
            url: n.header_url || a.Z.src,
          }),
          (m.interactionStatistic = [
            t && {
              "@type": "InteractionCounter",
              interactionType: "http://schema.org/CommentAction",
              userInteractionCount: t.length,
            },
          ].filter(function (e) {
            return !!e;
          })),
          (m.sourceOrganization = {
            "@type": "Organization",
            name: "DigitalOcean Community",
            url: "https://www.digitalocean.com/community",
          }),
          (m.publisher = {
            "@type": "Organization",
            name: "DigitalOcean",
            url: "https://www.digitalocean.com",
            logo: {
              "@type": "ImageObject",
              url: "https://assets.digitalocean.com/logos/DO_Logo_horizontal_blue.png",
              width: 351,
              height: 60,
            },
          }),
          (m.comment = y),
          JSON.stringify(m)
        );
      };
    },
    86174: function (e, t) {
      "use strict";
      t.Z = function (e) {
        var t;
        switch (null === e || void 0 === e ? void 0 : e.object_type) {
          case "tutorial":
            return null === e ||
              void 0 === e ||
              null === (t = e.object) ||
              void 0 === t
              ? void 0
              : t.tutorial_type;
          case "versioned_tutorial_group":
            return "tutorial_collection";
          default:
            return null === e || void 0 === e ? void 0 : e.object_type;
        }
      };
    },
    28030: function (e, t, n) {
      "use strict";
      var i = n(98261);
      t.Z = function (e) {
        return "undefined" !== typeof e.event_start_at_utc &&
          null !== e.event_start_at_utc
          ? "Starts on ".concat((0, i.Z)(e.event_start_at_utc, !0))
          : null === e.published_at
          ? "Draft updated on ".concat((0, i.Z)(e.updated_at))
          : null === e.last_validated_at ||
            e.last_validated_at === e.published_at
          ? "Published on ".concat((0, i.Z)(e.published_at))
          : "Published on "
              .concat((0, i.Z)(e.published_at), " \xb7 Updated on ")
              .concat((0, i.Z)(e.last_validated_at));
      };
    },
    89965: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/community/tutorials/[slug]",
        function () {
          return n(67543);
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
        1092, 8616, 5935, 1549, 7540, 1033, 5833, 8249, 8417, 9963, 2460, 3984,
        5784, 2031, 4061, 4788, 298, 7577, 9774, 2888, 179,
      ],
      function () {
        return (t = 89965), e((e.s = t));
        var t;
      }
    );
    var t = e.O();
    _N_E = t;
  },
]);
