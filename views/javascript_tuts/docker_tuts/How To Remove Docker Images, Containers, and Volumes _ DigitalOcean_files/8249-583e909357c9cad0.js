(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8249],
  {
    18116: function (t, r, e) {
      "use strict";
      var i = e(67294),
        n = e(45697),
        s = e.n(n),
        o = e(23937),
        a = function (t) {
          var r = t.options,
            e = t.children,
            n = (0, i.useState)(),
            s = n[0],
            a = n[1],
            p = (0, i.useCallback)(
              function () {
                a(new window.UniversalSearch(r));
              },
              [r]
            );
          return (
            (0, o.Z)("https://assets.digitalocean.com/labs/search.js.gz", p),
            (0, i.useEffect)(
              function () {
                return (
                  null === s || void 0 === s || s.start(),
                  function () {
                    return null === s || void 0 === s ? void 0 : s.end();
                  }
                );
              },
              [s]
            ),
            e
          );
        };
      (r.Z = a),
        (a.propTypes = {
          options: s().object.isRequired,
          children: s().oneOfType([s().arrayOf(s().node), s().node]).isRequired,
        });
    },
    58069: function (t, r, e) {
      "use strict";
      e.d(r, {
        Z: function () {
          return l;
        },
      });
      var i = e(59499),
        n = e(37797).ZP.div.withConfig({
          displayName: "ContainerStyles__StyledContainer",
          componentId: "sc-1vejnbq-0",
        })(
          [
            "display:flex;flex-direction:column;margin:0 auto;max-width:80rem;",
            " ",
            " width:100%;@media only screen and (max-width:",
            "){max-width:100%;padding:0 1rem;}",
          ],
          function (t) {
            return t.wide && "\n    max-width: 82rem;\n  ";
          },
          function (t) {
            return t.slim && "\n    max-width: 50rem;\n  ";
          },
          function (t) {
            return t.slim ? "52rem" : "82rem";
          }
        ),
        s = e(85893);
      function o(t, r) {
        var e = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          r &&
            (i = i.filter(function (r) {
              return Object.getOwnPropertyDescriptor(t, r).enumerable;
            })),
            e.push.apply(e, i);
        }
        return e;
      }
      function a(t) {
        for (var r = 1; r < arguments.length; r++) {
          var e = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? o(Object(e), !0).forEach(function (r) {
                (0, i.Z)(t, r, e[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : o(Object(e)).forEach(function (r) {
                Object.defineProperty(
                  t,
                  r,
                  Object.getOwnPropertyDescriptor(e, r)
                );
              });
        }
        return t;
      }
      var p = function (t) {
          var r = t.children;
          return (0, s.jsx)(n, a(a({}, t), {}, { children: r }));
        },
        l = p;
      p.defaultProps = { slim: !1 };
    },
    71778: function (t, r, e) {
      "use strict";
      e.d(r, {
        Z: function () {
          return v;
        },
      });
      var i = e(59499),
        n = e(4730),
        s = e(65861),
        o = e(17534),
        a = e(88134),
        p = e(37797),
        l = p.ZP.h1.withConfig({
          displayName: "HeadingStyles__StyledH1",
          componentId: "sc-kkk1io-0",
        })(
          [
            "color:",
            ";font-size:",
            ";font-weight:800;letter-spacing:-2px;",
            " ",
            " text-align:",
            ";",
            "{font-size:52px;line-height:1.2;}",
            "{font-size:40px;line-height:1.2;}",
          ],
          function (t) {
            return t.overrideColor
              ? t.overrideColor
              : "light" === t.defaultColor
              ? a.ZP.white
              : a.ZP.blueDark;
          },
          function (t) {
            return t.heroHeading ? "88px" : "44px";
          },
          function (t) {
            return t.heroHeading && "line-height: 96px;";
          },
          function (t) {
            return "left" === t.textAlign
              ? "margin: 0;"
              : "center" === t.textAlign
              ? "margin: auto;"
              : "";
          },
          function (t) {
            return t.textAlign;
          },
          (0, o.X)(o.A.tablet),
          (0, o.X)(o.A.largePhone)
        ),
        c = p.ZP.h2.withConfig({
          displayName: "HeadingStyles__StyledH2",
          componentId: "sc-kkk1io-1",
        })(
          [
            "color:",
            ";font-size:",
            ";font-weight:",
            ";letter-spacing:-1px;line-height:110%;",
            " text-align:",
            ";",
            "{text-align:center;}",
          ],
          function (t) {
            return t.overrideColor
              ? t.overrideColor
              : "light" === t.defaultColor
              ? a.ZP.white
              : a.ZP.blueDark;
          },
          function (t) {
            return t.large ? "40px" : "36px";
          },
          function (t) {
            return t.lightWeight ? "300" : "700";
          },
          function (t) {
            return "left" === t.textAlign ? "margin: 0;" : "margin: 0 auto;";
          },
          function (t) {
            return t.textAlign;
          },
          (0, o.X)(o.A.desktop)
        ),
        m = p.ZP.h3.withConfig({
          displayName: "HeadingStyles__StyledH3",
          componentId: "sc-kkk1io-2",
        })(
          [
            "color:",
            ";font-size:",
            ";font-weight:700;letter-spacing:-0.5px;line-height:120%;margin:",
            ";text-align:",
            ";",
          ],
          function (t) {
            return t.overrideColor
              ? t.overrideColor
              : "light" === t.defaultColor
              ? a.ZP.white
              : a.ZP.blueDark;
          },
          function (t) {
            return t.small ? "24px" : "30px";
          },
          function (t) {
            return t.position ? t.position : "0";
          },
          function (t) {
            return t.textAlign;
          }
        ),
        u = p.ZP.h4.withConfig({
          displayName: "HeadingStyles__StyledH4",
          componentId: "sc-kkk1io-3",
        })(
          [
            "color:",
            ";font-size:24px;font-weight:",
            ";letter-spacing:-0.5px;line-height:120%;margin:0;",
          ],
          function (t) {
            return t.overrideColor
              ? t.overrideColor
              : "light" === t.defaultColor
              ? a.ZP.white
              : a.ZP.blueDark;
          },
          function (t) {
            return t.lightWeight ? 400 : 500;
          }
        ),
        d = p.ZP.h5.withConfig({
          displayName: "HeadingStyles__StyledH5",
          componentId: "sc-kkk1io-4",
        })(
          [
            "color:",
            ";font-size:18px;font-weight:",
            ";letter-spacing:0;line-height:110%;margin:0;",
          ],
          function (t) {
            return t.overrideColor
              ? t.overrideColor
              : "light" === t.defaultColor
              ? a.ZP.white
              : a.ZP.blueDark;
          },
          function (t) {
            return t.lightWeight ? 400 : 500;
          }
        ),
        g = p.ZP.h6.withConfig({
          displayName: "HeadingStyles__StyledH6",
          componentId: "sc-kkk1io-5",
        })(
          [
            "color:",
            ";font-size:14px;letter-spacing:1px;line-height:120%;margin:0;",
          ],
          function (t) {
            return t.overrideColor
              ? t.overrideColor
              : "light" === t.defaultColor
              ? a.ZP.white
              : a.ZP.blueDark;
          }
        ),
        f = p.ZP.p.withConfig({
          displayName: "HeadingStyles__StyledSubheading",
          componentId: "sc-kkk1io-6",
        })(
          [
            "color:",
            ";font-size:",
            ";font-weight:",
            ";line-height:150%;",
            " ",
            " text-align:",
            ";",
            "{text-align:center;}",
          ],
          function (t) {
            return t.overrideColor
              ? t.overrideColor
              : "light" === t.defaultColor
              ? a.ZP.white
              : a.ZP.grayDark;
          },
          function (t) {
            return t.heroSubheading || t.largeSubheading ? "24px" : "20px";
          },
          function (t) {
            return t.lightWeight ? 300 : 500;
          },
          function (t) {
            return "left" === t.textAlign
              ? "margin: 20px 0 80px;"
              : "margin: 20px auto 80px;";
          },
          function (t) {
            return t.maxWidth && "max-width: ".concat(t.maxWidth, ";");
          },
          function (t) {
            return "left" === t.textAlign ? "left" : "center";
          },
          (0, o.X)(o.A.desktop)
        ),
        w = p.ZP.p.withConfig({
          displayName: "HeadingStyles__StyledP",
          componentId: "sc-kkk1io-7",
        })(
          ["color:", ";margin:", ";"],
          function (t) {
            return t.overrideColor
              ? t.overrideColor
              : "light" === t.defaultColor
              ? a.ZP.white
              : a.ZP.grayDark;
          },
          function (t) {
            return t.position ? t.position : "0";
          }
        ),
        h = e(85893),
        y = ["children", "renderAs", "richText"];
      function b(t, r) {
        var e = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          r &&
            (i = i.filter(function (r) {
              return Object.getOwnPropertyDescriptor(t, r).enumerable;
            })),
            e.push.apply(e, i);
        }
        return e;
      }
      function j(t) {
        for (var r = 1; r < arguments.length; r++) {
          var e = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? b(Object(e), !0).forEach(function (r) {
                (0, i.Z)(t, r, e[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : b(Object(e)).forEach(function (r) {
                Object.defineProperty(
                  t,
                  r,
                  Object.getOwnPropertyDescriptor(e, r)
                );
              });
        }
        return t;
      }
      var x = function (t) {
          var r = t.children,
            e = t.renderAs,
            i = t.richText,
            o = (0, n.Z)(t, y);
          if (i) return (0, h.jsx)(s.default, j(j({}, o), {}, { content: r }));
          return (function (t) {
            switch (t) {
              case "h1":
                return (0, h.jsx)(l, j(j({}, o), {}, { children: r }));
              case "h2":
                return (0, h.jsx)(c, j(j({}, o), {}, { children: r }));
              case "h3":
                return (0, h.jsx)(m, j(j({}, o), {}, { children: r }));
              case "h4":
                return (0, h.jsx)(u, j(j({}, o), {}, { children: r }));
              case "h5":
                return (0, h.jsx)(d, j(j({}, o), {}, { children: r }));
              case "h6":
                return (0, h.jsx)(g, j(j({}, o), {}, { children: r }));
              case "p":
              default:
                return (0, h.jsx)(w, j(j({}, o), {}, { children: r }));
              case "subheading":
                return (0, h.jsx)(f, j(j({}, o), {}, { children: r }));
            }
          })(e);
        },
        v = x;
      x.defaultProps = { children: null };
    },
    57243: function (t, r, e) {
      "use strict";
      e.d(r, {
        Z: function () {
          return a;
        },
      });
      var i = e(37797),
        n = (0, i.iv)([
          ".blur-up{filter:blur(5px);transition:filter 100ms;&.lazyloaded{filter:blur(0);}}img{animation:fadeInAnimation 0.5s both;@keyframes fadeInAnimation{from{filter:blur(5px);opacity:0;transition:filter 100ms;}to{filter:blur(0);opacity:1;}}}",
        ]),
        s = e(85893),
        o = function (t) {
          var r = t.src,
            e = t.alt,
            i = t.className,
            n = t.width,
            o = t.height,
            a = t.maxWidth,
            l = t.maxHeight,
            c = t.size,
            m = t.key,
            u = t.style;
          return r
            ? (0, s.jsx)(
                p,
                {
                  "data-src": r,
                  src: r,
                  alt: e,
                  className: "".concat(i, " lazyload blur-up"),
                  width: n,
                  height: o,
                  maxwidth: a,
                  maxheight: l,
                  size: c,
                  style: u,
                },
                m
              )
            : null;
        },
        a = o;
      o.defaultProps = {
        alt: "image",
        className: null,
        width: null,
        height: null,
        maxWidth: null,
        maxHeight: null,
        size: null,
        key: null,
        style: null,
      };
      var p = (0, i.ZP)("img").withConfig({
        displayName: "LazyImage___StyledImg",
        componentId: "sc-1pcy1c0-0",
      })(["", ""], n);
    },
    90352: function (t, r, e) {
      "use strict";
      e.d(r, {
        Z: function () {
          return g;
        },
      });
      var i = e(59499),
        n = e(37797),
        s = e(41664),
        o = e.n(s),
        a = function (t) {
          try {
            var r = new URL(t);
            if (r.pathname.includes("//") || r.pathname.includes("\\"))
              throw new Error(
                "Invalid url passed to getRelativeUrl: ".concat(
                  r.toString(),
                  ", repeated forward-slashes (//) or backslashes \\ are not valid in the url"
                )
              );
            return ("www.digitalocean.com" === r.host ||
              "digitalocean.com" === r.host ||
              r.host === window.location.host) &&
              0 !== r.pathname.indexOf("/docs") &&
              0 !== r.pathname.indexOf("/support") &&
              0 !== r.pathname.indexOf("/assets/community") &&
              0 !== r.pathname.indexOf("/try")
              ? r.toString().substring(r.origin.length)
              : r.toString();
          } catch (e) {
            if (e instanceof TypeError) return null;
            throw e;
          }
        },
        p = e(88134),
        l = (0, n.iv)(
          [
            "text-decoration:none;&.button-link{align-items:center;background-color:transparent;border:1px solid ",
            ";border-radius:100px;color:",
            ";cursor:pointer;display:flex;font-size:1em;font-weight:700;justify-content:center;padding:16px 32px;transition:all 0.3s ease;&:hover{background-color:rgba(0,105,255,0.15);color:",
            ";transition:all 0.3s ease;}&:focus{background-color:rgba(0,105,255,0.15);border:1px solid transparent;color:#0069ff;}&.is-squared{border-radius:8px;}&.is-primary{background-color:",
            ";border:1px solid ",
            ";color:#fff;transition:all 0.3s ease;&:hover{background-color:#0069ff;border:1px solid #0069ff;color:#fff !important;transition:all 0.3s ease;}&:disabled{background-color:#c4c9d6 !important;border:1px solid #c4c9d6 !important;color:#fff;}&.is-outlined{border:1px solid #0069ff;color:#0069ff;&:hover{background-color:rgba(0,105,255,0.1);border:1px solid #0069ff !important;color:#0069ff !important;}&:disabled{background-color:#fff !important;border:1px solid #8690a9 !important;color:#8690a9 !important;}}}&.is-white{background-color:#fff;border:1px solid #fff;color:#0069ff;transition:all 0.3s ease;&:hover{background-color:rgba(225,225,225,0.9);border:1px solid rgba(225,225,225,0.9);color:#0069ff !important;transition:all 0.3s ease;}&:disabled{border:1px solid #8690a9 !important;color:#8690a9 !important;}&.is-outlined{background-color:transparent;border:1px solid rgba(255,255,255,0.8);color:rgba(255,255,255,0.8);&:hover{background-color:transparent;border:1px solid rgba(255,255,255,1);color:rgba(255,255,255,1) !important;}}}&.is-green{background-color:",
            ";border:1px solid ",
            ";color:",
            ";transition:all 0.3s ease;&:hover{background-color:",
            ";border:1px solid ",
            ";color:",
            " !important;transition:all 0.3s ease;}&:disabled{border:1px solid ",
            " !important;color:",
            " !important;}&.is-outlined{background-color:transparent;border:1px solid ",
            ";color:",
            ";&:not(:disabled):hover{background-color:transparent;border:1px solid ",
            ";color:",
            ";}}}&.is-outlined{background-color:transparent;border:1px solid ",
            ";color:",
            ";transition:all 0.3s ease;&:hover{border:1px solid #0069ff;color:#0069ff;transition:all 0.3s ease;}}&.is-small{padding:12px 24px;}&.has-center-img{padding:15px 16px;}&.has-left-img{> img{margin-right:8px;}}&.mx-16{margin-left:16px;margin-right:16px;}&.is-gray3-color{box-shadow:0 6px 20px -6px ",
            ";color:",
            ";font-size:16px;font-weight:600;line-height:24px;}}",
          ],
          p.ZP.blueDarker,
          p.ZP.blueDarker,
          p.ZP.blueDarker,
          function (t) {
            return t.backgroundColor || "#1633ff";
          },
          function (t) {
            return t.backgroundColor || "#1633ff";
          },
          p.ZP.greenAlert,
          p.ZP.greenAlert,
          p.ZP.white,
          (0, p.E9)(p.ZP.greenAlert, 0.9),
          (0, p.E9)(p.ZP.greenAlert, 0.9),
          p.ZP.white,
          (0, p.E9)(p.ZP.greenAlert, 0.3),
          (0, p.E9)(p.ZP.greenAlert, 0.3),
          (0, p.E9)(p.ZP.greenAlert, 0.9),
          (0, p.E9)(p.ZP.greenAlert, 0.9),
          (0, p.E9)(p.ZP.greenAlert, 1),
          (0, p.E9)(p.ZP.greenAlert, 1),
          p.ZP.blueDarker,
          p.ZP.blueDarker,
          (0, p.E9)(p.ZP.blueCPUInfo, 0.15),
          p.ZP.gray3
        ),
        c = e(85893);
      function m(t, r) {
        var e = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          r &&
            (i = i.filter(function (r) {
              return Object.getOwnPropertyDescriptor(t, r).enumerable;
            })),
            e.push.apply(e, i);
        }
        return e;
      }
      function u(t) {
        for (var r = 1; r < arguments.length; r++) {
          var e = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? m(Object(e), !0).forEach(function (r) {
                (0, i.Z)(t, r, e[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : m(Object(e)).forEach(function (r) {
                Object.defineProperty(
                  t,
                  r,
                  Object.getOwnPropertyDescriptor(e, r)
                );
              });
        }
        return t;
      }
      var d = function (t) {
          var r = t.children,
            e = t.url,
            i = t.className,
            n = t.prefetch,
            s =
              0 === (null === e || void 0 === e ? void 0 : e.indexOf("/")) ||
              0 === (null === e || void 0 === e ? void 0 : e.indexOf("#"))
                ? e
                : a(e);
          return s
            ? 0 === s.indexOf("/")
              ? (0, c.jsx)(o(), {
                  href: s,
                  passHref: !0,
                  prefetch: n,
                  children: (0, c.jsx)(
                    f,
                    u(u({ className: i, href: s }, t), {}, { children: r })
                  ),
                })
              : (0, c.jsx)(
                  w,
                  u(u({ className: i, href: s }, t), {}, { children: r })
                )
            : (0, c.jsx)("div", u(u({}, t), {}, { children: r }));
        },
        g = d;
      d.defaultProps = { children: [], className: "", url: null };
      var f = (0, n.ZP)("a").withConfig({
          displayName: "LazyLink___StyledA",
          componentId: "sc-yi29t7-0",
        })(["", ""], l),
        w = (0, n.ZP)("a").withConfig({
          displayName: "LazyLink___StyledA2",
          componentId: "sc-yi29t7-1",
        })(["", ""], l);
    },
    4486: function (t, r, e) {
      "use strict";
      e.d(r, {
        Z: function () {
          return g;
        },
      });
      var i = e(59499),
        n = e(4730),
        s = e(37797),
        o = e(90352),
        a = e(88134),
        p = e(87288),
        l = (0, s.iv)(
          [
            "align-items:center;align-self:flex-start;color:",
            ";display:inline-flex;font-family:",
            ";font-weight:600;position:relative;transition:all 0.2s ease;",
            " ",
            " ",
            " ",
            " ",
            "",
          ],
          a.ZP.blueLight,
          (0, p.Z)("code"),
          function (t) {
            return t.regular && (0, s.iv)(["font-weight:400;"]);
          },
          function (t) {
            return t.medium && (0, s.iv)(["font-weight:500;"]);
          },
          function (t) {
            return t.white && (0, s.iv)(["color:", ";"], a.ZP.white);
          },
          function (t) {
            return (
              t.arrow &&
              (0, s.iv)([
                "margin-right:12px;&::after{content:'\u203a';font-size:23px;font-weight:700;position:relative;right:-8px;transition:right 0.2s ease;}&:hover{&::after{right:-12px;transition:right 0.2s ease;}}",
              ])
            );
          },
          function (t) {
            return (
              t.$dashArrow &&
              (0, s.iv)([
                "margin-right:12px;&::after{content:'->';font-size:18px;font-weight:700;position:relative;right:-8px;transition:all 0.2s ease;white-space:nowrap;}&:hover{&::after{right:-12px;transition:all 0.2s ease;}}",
              ])
            );
          }
        ),
        c = e(85893),
        m = ["dashArrow"];
      function u(t, r) {
        var e = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          r &&
            (i = i.filter(function (r) {
              return Object.getOwnPropertyDescriptor(t, r).enumerable;
            })),
            e.push.apply(e, i);
        }
        return e;
      }
      var d = function (t) {
          var r = t.dashArrow,
            e = (0, n.Z)(t, m);
          return (0, c.jsx)(
            f,
            (function (t) {
              for (var r = 1; r < arguments.length; r++) {
                var e = null != arguments[r] ? arguments[r] : {};
                r % 2
                  ? u(Object(e), !0).forEach(function (r) {
                      (0, i.Z)(t, r, e[r]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      t,
                      Object.getOwnPropertyDescriptors(e)
                    )
                  : u(Object(e)).forEach(function (r) {
                      Object.defineProperty(
                        t,
                        r,
                        Object.getOwnPropertyDescriptor(e, r)
                      );
                    });
              }
              return t;
            })({ $dashArrow: r }, e)
          );
        },
        g = d;
      d.defaultProps = { url: "" };
      var f = (0, s.ZP)(o.Z).withConfig({
        displayName: "TextLink___StyledLazyLink",
        componentId: "sc-6rinuw-0",
      })(["", ""], l);
    },
    96074: function (t, r, e) {
      "use strict";
      e.d(r, {
        Z: function () {
          return Bt;
        },
      });
      var i = e(67294),
        n = e(11163),
        s = e(88134),
        o = e(37797),
        a = o.ZP.div.withConfig({
          displayName: "NavigationStyles__StyledNavigation",
          componentId: "sc-fgip3f-0",
        })(
          ["box-shadow:0 4px 8px ", ";position:sticky;top:0;z-index:9999;"],
          (0, s.E9)(s.ZP.gray1, 0.05)
        ),
        p = e(17534),
        l = ["mousedown", "touchstart"],
        c = function (t) {
          var r =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1],
            e =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "";
          (0, i.useEffect)(
            function () {
              var i = function (i) {
                !!!i.target.closest(
                  "[data-ignore-clicks-outside".concat(
                    e ? "-".concat(e) : "",
                    "]"
                  )
                ) &&
                  r &&
                  t();
              };
              return (
                l.forEach(function (t) {
                  return document.addEventListener(t, i);
                }),
                function () {
                  l.forEach(function (t) {
                    return document.removeEventListener(t, i);
                  });
                }
              );
            },
            [t, r, e]
          );
        },
        m = e(78985),
        u = e(17504),
        d = e(2464),
        g = e(58069),
        f = e(90352),
        w = o.ZP.nav.withConfig({
          displayName: "PrimaryNavigationStyles__StyledPrimaryNavigation",
          componentId: "sc-n9iux5-0",
        })(
          [
            "background-color:",
            ";border-bottom:1px solid ",
            ";user-select:none;",
            "{background-color:",
            ";}",
          ],
          s.ZP.white,
          s.ZP.gray8,
          (0, p.X)(p.A.desktop, "min"),
          s.ZP.gray10
        ),
        h = (0, o.ZP)(g.Z).withConfig({
          displayName: "PrimaryNavigationStyles__StyledContainer",
          componentId: "sc-n9iux5-1",
        })(["align-items:center;flex-flow:row wrap;"]),
        y = (0, o.ZP)(f.Z).withConfig({
          displayName: "PrimaryNavigationStyles__StyledBrand",
          componentId: "sc-n9iux5-2",
        })(
          [
            "align-items:center;display:flex;height:72px;",
            ";img,picture{display:inline-block;height:32px;}",
          ],
          function (t) {
            return (
              t.primaryDropdown &&
              (0, o.iv)(["", "{display:none;}"], (0, p.X)(p.A.desktop))
            );
          }
        ),
        b = o.ZP.div.withConfig({
          displayName: "PrimaryNavigationStyles__StyledMobileMenuTrigger",
          componentId: "sc-n9iux5-3",
        })(
          [
            "align-items:center;display:flex;margin-left:",
            ";padding:16px 0;",
            "{display:none;}",
            "{margin-left:0;}",
          ],
          function (t) {
            return !t.isSignedIn && "auto";
          },
          (0, p.X)(p.A.desktop, "min"),
          (0, p.X)(p.A.tablet, "min")
        ),
        j = o.ZP.div.withConfig({
          displayName: "PrimaryNavigationStyles__StyledSeparator",
          componentId: "sc-n9iux5-4",
        })(
          [
            "background-color:",
            ";border-radius:9999px;display:",
            ";height:24px;margin:0 24px;width:2px;",
            "{display:initial;}",
          ],
          s.ZP.gray7,
          function (t) {
            return !t.isSignedIn && "none";
          },
          (0, p.X)(p.A.tablet, "min")
        ),
        x = (0, o.F4)([
          "40%{transform:translateY(var(--translation-distance));}100%{transform:translateY(var(--translation-distance)) rotateZ(var(--rotation-angle));}",
        ]),
        v = o.ZP.button.withConfig({
          displayName: "PrimaryNavigationStyles__StyledHamburger",
          componentId: "sc-n9iux5-5",
        })(
          [
            "align-items:center;background:transparent;border:none;cursor:pointer;display:flex;flex-direction:column;gap:8px;height:40px;justify-content:center;width:40px;z-index:9999;&::after,&::before{animation-duration:250ms;animation-fill-mode:forwards;animation-name:",
            ";background-color:",
            ";border-radius:9999px;content:'';display:block;height:2px;width:20px;will-change:transform;}&::after{--rotation-angle:-45deg;--translation-distance:-5px;}&::before{--rotation-angle:45deg;--translation-distance:5px;}",
          ],
          function (t) {
            return t.isMobileMenuOpen && x;
          },
          s.ZP.gray3
        ),
        k = o.ZP.ul.withConfig({
          displayName: "PrimaryMenuStyles__StyledPrimaryMenu",
          componentId: "sc-wp36hr-0",
        })(
          [
            "display:none;",
            " ",
            " order:1;width:100%;",
            "{align-items:center;display:flex;gap:8px;margin-left:32px;margin-top:0;order:initial;width:initial;}",
          ],
          function (t) {
            return t.isMobileMenuOpen && (0, o.iv)(["display:initial;"]);
          },
          function (t) {
            return (
              t.primaryDropdown &&
              (0, o.iv)(["margin-top:-72px;margin-left:-16px;"])
            );
          },
          (0, p.X)(p.A.desktop, "min")
        ),
        P = o.ZP.li.withConfig({
          displayName: "PrimaryMenuStyles__StyledMenuItem",
          componentId: "sc-wp36hr-1",
        })(
          [
            "",
            " width:",
            ";button{color:",
            ";}",
            "{display:initial;width:initial;}",
          ],
          function (t) {
            var r = t.isOpen,
              e = t.primaryDropdown;
            return !r && e && (0, o.iv)(["display:none;"]);
          },
          function (t) {
            return t.isOpen && "100vw";
          },
          function (t) {
            return t.active && s.ZP.blue2;
          },
          (0, p.X)(p.A.desktop, "min")
        ),
        S = (0, o.ZP)(f.Z).withConfig({
          displayName: "PrimaryMenuStyles__StyledMenuLink",
          componentId: "sc-wp36hr-2",
        })(
          [
            "border-bottom:1px solid ",
            ";color:",
            ";cursor:pointer;display:flex;font-weight:500;padding:12px 0;width:100%;",
            "{border:none;border-radius:10px;padding:12px 8px;&:hover{background:",
            ";}}",
          ],
          s.ZP.gray7,
          s.ZP.gray3,
          (0, p.X)(p.A.desktop, "min"),
          s.ZP.gray8
        ),
        Z = e(85893),
        O = [
          {
            as: "dropdown",
            id: "products_menu",
            text: "Products",
            tracking: { name: "www top nav", category: "products" },
            featuredSection: {
              as: "featuredLinks",
              title: "Featured Products",
              items: [
                {
                  title: "Droplets",
                  subtitle: "Scalable virtual machines",
                  url: "https://www.digitalocean.com/products/droplets/",
                  tracking: {
                    name: "www top nav sub - products",
                    category: "featured products - droplets",
                  },
                },
                {
                  title: "Kubernetes",
                  subtitle: "Managed Kubernetes clusters",
                  url: "https://www.digitalocean.com/products/kubernetes/",
                  tracking: {
                    name: "www top nav sub - products",
                    category: "featured products - kubernetes",
                  },
                },
                {
                  title: "Cloudways",
                  subtitle: "Managed cloud hosting",
                  url: "https://www.digitalocean.com/products/cloudways/",
                  tracking: {
                    name: "www top nav sub - products",
                    category: "featured products - cloudways",
                  },
                },
                {
                  title: "App Platform",
                  subtitle: "Get apps to market faster",
                  url: "https://www.digitalocean.com/products/app-platform/",
                  tracking: {
                    name: "www top nav sub - products",
                    category: "featured products - app platform",
                  },
                },
                {
                  title: "Databases",
                  subtitle: "Worry-free setup & maintenance",
                  url: "https://www.digitalocean.com/products/managed-databases/",
                  tracking: {
                    name: "www top nav sub - products",
                    category: "featured products - databases",
                  },
                },
                {
                  title: "Spaces",
                  subtitle: "Simple object storage",
                  url: "https://www.digitalocean.com/products/spaces/",
                  tracking: {
                    name: "www top nav sub - products",
                    category: "featured products - spaces",
                  },
                },
              ],
            },
            mainSection: [
              {
                title: "Compute",
                items: [
                  {
                    title: "Droplets",
                    url: "https://www.digitalocean.com/products/droplets/",
                    tracking: {
                      name: "www top nav sub - products",
                      category: "compute - droplets",
                    },
                    tag: "",
                  },
                  {
                    title: "Kubernetes",
                    url: "https://www.digitalocean.com/products/kubernetes/",
                    tracking: {
                      name: "www top nav sub - products",
                      category: "compute - kubernetes",
                    },
                    tag: "",
                  },
                  {
                    title: "App Platform",
                    url: "https://www.digitalocean.com/products/app-platform/",
                    tracking: {
                      name: "www top nav sub - products",
                      category: "compute - app platform",
                    },
                    tag: "",
                  },
                  {
                    title: "Functions",
                    url: "https://www.digitalocean.com/products/functions/",
                    tracking: {
                      name: "www top nav sub - functions",
                      category: "compute - functions",
                    },
                    tag: "Newly added",
                  },
                ],
              },
              {
                title: "Cloud Website Hosting",
                items: [
                  {
                    title: "Cloudways",
                    url: "https://www.digitalocean.com/products/cloudways/",
                    tracking: {
                      name: "www top nav sub - products",
                      category: "cloud website hosting - cloudways",
                    },
                    tag: "",
                  },
                ],
              },
              {
                title: "Storage",
                items: [
                  {
                    title: "Spaces Object Storage",
                    url: "https://www.digitalocean.com/products/spaces/",
                    tracking: {
                      name: "www top nav sub - products",
                      category: "storage - spaces object",
                    },
                    tag: "",
                  },
                  {
                    title: "Volumes Block Storage",
                    url: "https://www.digitalocean.com/products/block-storage/",
                    tracking: {
                      name: "www top nav sub - products",
                      category: "storage - volumes block",
                    },
                    tag: "",
                  },
                ],
              },
              {
                title: "Networking",
                items: [
                  {
                    title: "Virtual Private Cloud (VPC)",
                    url: "https://www.digitalocean.com/products/vpc/",
                    tracking: {
                      name: "www top nav sub - products",
                      category: "networking - vpc",
                    },
                    tag: "",
                  },
                  {
                    title: "Cloud Firewalls",
                    url: "https://www.digitalocean.com/products/cloud-firewalls/",
                    tracking: {
                      name: "www top nav sub - products",
                      category: "networking - cloud firewalls",
                    },
                    tag: "",
                  },
                  {
                    title: "Load Balancers",
                    url: "https://www.digitalocean.com/products/load-balancer/",
                    tracking: {
                      name: "www top nav sub - products",
                      category: "networking - load balancers",
                    },
                    tag: "",
                  },
                  {
                    title: "DNS",
                    url: "https://www.digitalocean.com/docs/networking/dns/",
                    tracking: {
                      name: "www top nav sub - products",
                      category: "networking - dns",
                    },
                    tag: "",
                  },
                ],
              },
              {
                title: "Managed Databases",
                items: [
                  {
                    title: "MongoDB",
                    url: "https://www.digitalocean.com/products/managed-databases-mongodb",
                    tracking: {
                      name: "www top nav sub - products",
                      category: "managed databases - mongodb",
                    },
                    tag: "",
                  },
                  {
                    title: "MySQL",
                    url: "https://www.digitalocean.com/products/managed-databases-mysql",
                    tracking: {
                      name: "www top nav sub - products",
                      category: "managed databases - mysql",
                    },
                    tag: "",
                  },
                  {
                    title: "PostgreSQL",
                    url: "https://www.digitalocean.com/products/managed-databases-postgresql",
                    tracking: {
                      name: "www top nav sub - products",
                      category: "managed databases - postgres",
                    },
                    tag: "",
                  },
                  {
                    title: "Redis\u2122",
                    url: "https://www.digitalocean.com/products/managed-databases-redis",
                    tracking: {
                      name: "www top nav sub - products",
                      category: "managed databases - redis",
                    },
                    tag: "",
                  },
                ],
              },
              {
                title: "Developer Tools",
                items: [
                  {
                    title: "API",
                    url: "https://docs.digitalocean.com/reference/api/",
                    tracking: {
                      name: "www top nav sub - products",
                      category: "developer tools - api",
                    },
                    tag: "",
                  },
                  {
                    title: "CLI",
                    url: "https://www.digitalocean.com/products/tools-and-integrations/#tools-and-integrations-cli",
                    tracking: {
                      name: "www top nav sub - products",
                      category: "developer tools - cli",
                    },
                    tag: "",
                  },
                  {
                    title: "Support Plans",
                    url: "https://www.digitalocean.com/products/support/",
                    tracking: {
                      name: "www top nav sub - products",
                      category: "developer tools - support",
                    },
                    tag: "",
                  },
                  {
                    title: "Monitoring",
                    url: "https://www.digitalocean.com/products/monitoring/",
                    tracking: {
                      name: "www top nav sub - products",
                      category: "management tools - monitoring",
                    },
                    tag: "",
                  },
                  {
                    title: "Uptime",
                    url: "https://www.digitalocean.com/products/uptime-monitoring",
                    tracking: {
                      name: "www top nav sub - products",
                      category: "management tools - uptime",
                    },
                    tag: "",
                  },
                ],
              },
            ],
            bottomLink: {
              url: "https://www.digitalocean.com/products/",
              text: "See all products",
            },
          },
          {
            as: "dropdown",
            id: "solutions_menu",
            text: "Solutions",
            tracking: { name: "www top nav", category: "solutions" },
            featuredSection: {
              as: "featuredLinks",
              title: "Our Business Solutions",
              items: [
                {
                  title: "Website Hosting",
                  subtitle: "Simple and reliable cloud website hosting",
                  url: "https://www.digitalocean.com/solutions/website-hosting/",
                  tracking: {
                    name: "www top nav sub - solutions",
                    category: "featured solutions - website hosting",
                  },
                },
                {
                  title: "VPS Hosting",
                  subtitle: "VPS hosting options suited to every need",
                  url: "https://www.digitalocean.com/solutions/vps-hosting",
                  tracking: {
                    name: "www top nav sub - solutions",
                    category: "featured solutions - vps hosting",
                  },
                },
              ],
            },
            mainSection: [
              {
                title: "Cloudways",
                items: [
                  {
                    title: "Managed WordPress",
                    url: "https://www.cloudways.com/en/wordpress-hosting.php?id=1227510",
                    target: "_blank",
                    icon: (0, Z.jsx)("svg", {
                      "aria-hidden": !0,
                      width: "14",
                      height: "14",
                      viewBox: "0 0 14 14",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: (0, Z.jsx)("path", {
                        d: "M11.0184 7.6297V11.5186C11.0184 11.8624 10.8819 12.1921 10.6388 12.4352C10.3957 12.6783 10.0659 12.8149 9.72215 12.8149H2.59255C2.24876 12.8149 1.91904 12.6783 1.67594 12.4352C1.43284 12.1921 1.29626 11.8624 1.29626 11.5186V4.38898C1.29626 4.04518 1.43284 3.71546 1.67594 3.47236C1.91904 3.22926 2.24876 3.09269 2.59255 3.09269H6.48142M9.07406 1.14819H12.9629M12.9629 1.14819V5.03706M12.9629 1.14819L5.83324 8.27779",
                        stroke: "currentColor",
                        strokeWidth: "1.25",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }),
                    }),
                    tracking: {
                      name: "www top nav sub - solutions",
                      category: "cloudways solutions - managed wordpress",
                    },
                  },
                  {
                    title: "Managed Woocommerce",
                    url: "https://www.cloudways.com/en/woocommerce-hosting.php?id=1227510",
                    target: "_blank",
                    icon: (0, Z.jsx)("svg", {
                      "aria-hidden": !0,
                      width: "14",
                      height: "14",
                      viewBox: "0 0 14 14",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: (0, Z.jsx)("path", {
                        d: "M11.0184 7.6297V11.5186C11.0184 11.8624 10.8819 12.1921 10.6388 12.4352C10.3957 12.6783 10.0659 12.8149 9.72215 12.8149H2.59255C2.24876 12.8149 1.91904 12.6783 1.67594 12.4352C1.43284 12.1921 1.29626 11.8624 1.29626 11.5186V4.38898C1.29626 4.04518 1.43284 3.71546 1.67594 3.47236C1.91904 3.22926 2.24876 3.09269 2.59255 3.09269H6.48142M9.07406 1.14819H12.9629M12.9629 1.14819V5.03706M12.9629 1.14819L5.83324 8.27779",
                        stroke: "currentColor",
                        strokeWidth: "1.25",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }),
                    }),
                    tracking: {
                      name: "www top nav sub - solutions",
                      category: "cloudways solutions - managed woocommerce",
                    },
                  },
                  {
                    title: "Managed Magento",
                    url: "https://www.cloudways.com/en/magento-hosting.php?id=1227510",
                    target: "_blank",
                    icon: (0, Z.jsx)("svg", {
                      "aria-hidden": !0,
                      width: "14",
                      height: "14",
                      viewBox: "0 0 14 14",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: (0, Z.jsx)("path", {
                        d: "M11.0184 7.6297V11.5186C11.0184 11.8624 10.8819 12.1921 10.6388 12.4352C10.3957 12.6783 10.0659 12.8149 9.72215 12.8149H2.59255C2.24876 12.8149 1.91904 12.6783 1.67594 12.4352C1.43284 12.1921 1.29626 11.8624 1.29626 11.5186V4.38898C1.29626 4.04518 1.43284 3.71546 1.67594 3.47236C1.91904 3.22926 2.24876 3.09269 2.59255 3.09269H6.48142M9.07406 1.14819H12.9629M12.9629 1.14819V5.03706M12.9629 1.14819L5.83324 8.27779",
                        stroke: "currentColor",
                        strokeWidth: "1.25",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }),
                    }),
                    tracking: {
                      name: "www top nav sub - solutions",
                      category: "cloudways solutions - managed magento",
                    },
                  },
                ],
              },
              {
                title: "By use case",
                items: [
                  {
                    title: "Cloud VPN",
                    subtitle:
                      "Quickly set up a fast, reliable, and easy to use VPN",
                    url: "https://www.digitalocean.com/solutions/vpn/",
                    tracking: {
                      name: "www top nav sub - solutions",
                      category: "by use case - cloud vpn",
                    },
                  },
                  {
                    title: "Web & Mobile Apps",
                    subtitle: "Quickly build and reliably run your apps",
                    url: "https://www.digitalocean.com/solutions/web-mobile-apps/",
                    tracking: {
                      name: "www top nav sub - solutions",
                      category: "by use case - web & mobile apps",
                    },
                  },
                  {
                    title: "Game Development",
                    subtitle: "Scale your game as fast as you want",
                    url: "https://www.digitalocean.com/solutions/gaming-development/",
                    tracking: {
                      name: "www top nav sub - solutions",
                      category: "by use case - game development",
                    },
                  },
                  {
                    title: "Video Streaming",
                    subtitle: "Create a highly available streaming service",
                    url: "https://www.digitalocean.com/solutions/streaming/",
                    tracking: {
                      name: "www top nav sub - solutions",
                      category: "by use case - video streaming",
                    },
                  },
                  {
                    title: "SaaS Platforms",
                    subtitle: "Build your SaaS exactly how you want",
                    url: "https://www.digitalocean.com/solutions/saas/",
                    tracking: {
                      name: "www top nav sub - solutions",
                      category: "by use case - saas platform",
                    },
                  },
                  {
                    title: "Blockchain",
                    subtitle:
                      "Scalable, affordable compute for your blockchain",
                    url: "https://www.digitalocean.com/solutions/blockchain/",
                    tracking: {
                      name: "www top nav sub - solutions",
                      category: "by use case - blockchain",
                    },
                  },
                ],
              },
              {
                title: "",
                items: [
                  {
                    as: "highlightLink",
                    title: "Questions?",
                    link: {
                      text: "Speak With An Expert Today",
                      url: "https://www.digitalocean.com/products/support",
                    },
                  },
                ],
              },
            ],
            bottomLink: {
              url: "https://www.digitalocean.com/business/",
              text: "See all solutions",
            },
          },
          {
            url: "https://marketplace.digitalocean.com/",
            text: "Marketplace",
            tracking: { name: "www top nav", category: "marketplace" },
          },
          {
            as: "dropdown",
            id: "community_menu",
            text: "Community",
            tracking: { name: "www top nav", category: "community" },
            featuredSection: {
              as: "featuredLinks",
              title: "Our community",
              items: [
                {
                  title: "Community Home",
                  subtitle: "DevOps and development guides",
                  url: "https://www.digitalocean.com/community/",
                  tracking: {
                    name: "www top nav sub - community",
                    category: "home",
                  },
                },
                {
                  title: "CSS-Tricks",
                  subtitle: "All things web design",
                  url: "https://css-tricks.com/",
                  target: "_blank",
                  tracking: {
                    name: "www top nav sub - community",
                    category: "css-tricks",
                  },
                },
              ],
            },
            mainSection: [
              {
                title: "Resources",
                items: [
                  {
                    title: "Tutorials",
                    url: "https://www.digitalocean.com/community/tutorials",
                    tag: "",
                    tracking: {
                      name: "www top nav sub - community",
                      category: "resources - tutorials",
                    },
                  },
                  {
                    title: "Questions And Answers",
                    url: "https://www.digitalocean.com/community/questions",
                    tag: "",
                    tracking: {
                      name: "www top nav sub - community",
                      category: "resources - questions and answers",
                    },
                  },
                  {
                    title: "Tools",
                    url: "https://www.digitalocean.com/community/tools",
                    tag: "",
                    tracking: {
                      name: "www top nav sub - community",
                      category: "resources - tools",
                    },
                  },
                  {
                    title: "Write for DOnations",
                    url: "https://www.digitalocean.com/community/pages/write-for-digitalocean",
                    tag: "",
                    tracking: {
                      name: "www top nav sub - community",
                      category: "resources - write for donations",
                    },
                  },
                  {
                    title: "Customer Stories",
                    url: "https://www.digitalocean.com/customers",
                    tag: "",
                    tracking: {
                      name: "www top nav sub - community",
                      category: "resources - customer stories",
                    },
                  },
                  {
                    title: "DigitalOcean Blog",
                    url: "https://www.digitalocean.com/blog",
                    tag: "",
                    tracking: {
                      name: "www top nav sub - community",
                      category: "resources - digitalocean blog",
                    },
                  },
                ],
              },
              {
                title: "Get Involved",
                items: [
                  {
                    title: "Hatch Startup Program",
                    url: "https://www.digitalocean.com/hatch/",
                    tag: "",
                    tracking: {
                      name: "www top nav sub - community",
                      category: "get involved - hatch startup program",
                    },
                  },
                  {
                    title: "Open Source Sponsorships",
                    url: "https://www.digitalocean.com/open-source/",
                    tag: "",
                    tracking: {
                      name: "www top nav sub - community",
                      category: "get involved - open source sponsorships",
                    },
                  },
                  {
                    title: "Hacktoberfest",
                    url: "https://hacktoberfest.digitalocean.com/",
                    tag: "",
                    target: "_blank",
                    tracking: {
                      name: "www top nav sub - community",
                      category: "get involved - hacktoberfest",
                    },
                  },
                  {
                    title: "Deploy",
                    url: "https://www.digitalocean.com/deploy",
                    tag: "",
                    tracking: {
                      name: "www top nav sub - community",
                      category: "get involved - deploy",
                    },
                  },
                  {
                    title: "DO Impact",
                    url: "https://www.digitalocean.com/impact",
                    tag: "",
                    tracking: {
                      name: "www top nav sub - community",
                      category: "get involved - do impact",
                    },
                  },
                ],
              },
              {
                title: "Documentation",
                items: [
                  {
                    title: "Quick Start",
                    url: "https://docs.digitalocean.com/products/getting-started/",
                    tag: "",
                    tracking: {
                      name: "www top nav sub - community",
                      category: "documentation - quick start",
                    },
                  },
                  {
                    title: "Droplets",
                    url: "https://docs.digitalocean.com/products/droplets/",
                    tag: "",
                    tracking: {
                      name: "www top nav sub - community",
                      category: "documentation - droplets",
                    },
                  },
                  {
                    title: "Storage",
                    url: "https://docs.digitalocean.com/products/storage/",
                    tag: "",
                    tracking: {
                      name: "www top nav sub - community",
                      category: "documentation - storage",
                    },
                  },
                  {
                    title: "App Platform",
                    url: "https://docs.digitalocean.com/products/app-platform/",
                    tag: "",
                    tracking: {
                      name: "www top nav sub - community",
                      category: "documentation - app platform",
                    },
                  },
                  {
                    title: "API Reference",
                    url: "https://docs.digitalocean.com/reference/api/",
                    tag: "",
                    tracking: {
                      name: "www top nav sub - community",
                      category: "documentation - api reference",
                    },
                  },
                  {
                    title: "Domains and DNS",
                    url: "https://docs.digitalocean.com/products/networking/dns/",
                    tag: "",
                    tracking: {
                      name: "www top nav sub - community",
                      category: "documentation - domains and dns",
                    },
                  },
                ],
              },
            ],
          },
          {
            url: "https://www.digitalocean.com/pricing/",
            text: "Pricing",
            tracking: { name: "www top nav", category: "pricing" },
          },
        ],
        C = e(59499),
        _ = e(82371),
        D = e(80628),
        M = o.ZP.button.withConfig({
          displayName: "DropdownStyles__StyledDropdownTrigger",
          componentId: "sc-q75ctd-0",
        })(
          [
            "align-items:center;background-color:transparent;border:none;border-bottom:1px solid ",
            ";color:",
            ";cursor:pointer;display:flex;font-weight:500;gap:8px;svg{&:first-of-type{display:none;}&:last-of-type{color:",
            ";margin-left:auto;margin-right:10px;}}",
            ";padding:",
            ";width:",
            ";",
            "{padding:",
            ";}",
            "{border:none;border-radius:10px;svg{&:last-of-type{margin:0;transform:rotateZ(90deg);}}&:hover{background:",
            ";}",
            ";padding:12px 8px;}",
          ],
          s.ZP.gray7,
          s.ZP.gray3,
          s.ZP.gray5,
          function (t) {
            return (
              t.primaryDropdown &&
              (0, o.iv)([
                "border:none;font-size:18px;svg{&:first-of-type{display:initial;}&:last-of-type{display:none;}}",
              ])
            );
          },
          function (t) {
            return t.primaryDropdown ? "24px" : "12px 0";
          },
          function (t) {
            return t.primaryDropdown ? "initial" : "100%";
          },
          (0, p.X)(p.A.tablet, "min"),
          function (t) {
            return t.primaryDropdown && "24px 40px";
          },
          (0, p.X)(p.A.desktop, "min"),
          s.ZP.gray8,
          function (t) {
            return (
              t.primaryDropdown &&
              (0, o.iv)(
                [
                  "font-size:initial;cursor:pointer;svg{&:first-of-type{display:none;}&:last-of-type{color:",
                  ";display:initial;transform:rotateZ(-90deg);}}",
                ],
                s.ZP.blue2
              )
            );
          }
        ),
        I = o.ZP.div.withConfig({
          displayName: "DropdownStyles__StyledDropdown",
          componentId: "sc-q75ctd-1",
        })(["display:none;flex-direction:column;", ";"], function (t) {
          return (
            t.primaryDropdown &&
            (0, o.iv)(
              [
                "border-top:1px solid ",
                ";display:flex;max-height:80vh;overflow-y:scroll;",
                "{background:",
                ";border:none;box-shadow:0 4px 8px ",
                ";left:0;margin-top:15px;max-height:unset;overflow:initial;position:absolute;width:100%;}",
              ],
              s.ZP.gray7,
              (0, p.X)(p.A.desktop, "min"),
              function (t) {
                return t.hasFeaturedSection
                  ? "linear-gradient(90deg, "
                      .concat(s.ZP.gray10, " 50%, ")
                      .concat(s.ZP.white, " 50%)")
                  : s.ZP.white;
              },
              (0, s.E9)(s.ZP.blue1, 0.05)
            )
          );
        }),
        N = (0, o.ZP)(g.Z).withConfig({
          displayName: "DropdownStyles__StyledDropdownContainer",
          componentId: "sc-q75ctd-2",
        })(
          ["", "{padding:0;}", "{flex-direction:row;}"],
          (0, p.X)(p.A.desktop),
          (0, p.X)(p.A.desktop, "min")
        ),
        A = e(4486),
        L = o.ZP.div.withConfig({
          displayName: "BottomLinkStyles__StyledBottomLink",
          componentId: "sc-uemqy7-0",
        })(
          [
            "background-color:",
            ";border-top:1px solid ",
            ";display:flex;justify-content:center;padding:12px 0;",
          ],
          s.ZP.white,
          s.ZP.gray8
        ),
        E = function (t) {
          var r = t.url,
            e = t.text;
          return (0, Z.jsx)(L, {
            children: (0, Z.jsx)(A.Z, { dashArrow: !0, url: r, children: e }),
          });
        },
        q = e(4730),
        z = e(5152),
        H = e.n(z),
        T = ["as"];
      function R(t, r) {
        var e = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          r &&
            (i = i.filter(function (r) {
              return Object.getOwnPropertyDescriptor(t, r).enumerable;
            })),
            e.push.apply(e, i);
        }
        return e;
      }
      function X(t) {
        for (var r = 1; r < arguments.length; r++) {
          var e = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? R(Object(e), !0).forEach(function (r) {
                (0, C.Z)(t, r, e[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : R(Object(e)).forEach(function (r) {
                Object.defineProperty(
                  t,
                  r,
                  Object.getOwnPropertyDescriptor(e, r)
                );
              });
        }
        return t;
      }
      var B = H()(
          function () {
            return e.e(9445).then(e.bind(e, 99445));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [99445];
              },
            },
          }
        ),
        W = H()(
          function () {
            return e.e(9521).then(e.bind(e, 19521));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [19521];
              },
            },
          }
        ),
        U = function (t) {
          var r = t.as,
            e = (0, q.Z)(t, T);
          switch (r) {
            case "featuredLinks":
              return (0, Z.jsx)(B, X({}, e));
            case "featuredBanner":
              return (0, Z.jsx)(W, X({}, e));
            default:
              return null;
          }
        },
        V = o.ZP.div.withConfig({
          displayName: "MainSectionStyles__StyledMainSection",
          componentId: "sc-13h2cja-0",
        })(
          [
            "align-content:start;background-color:",
            ";display:grid;flex-grow:1;gap:32px;grid-template-columns:1fr;padding:32px 24px;",
            "{gap:48px;grid-template-columns:repeat(3,1fr);padding:48px 40px;}",
            "{padding:48px 48px 64px;}",
          ],
          s.ZP.white,
          (0, p.X)(p.A.tablet, "min"),
          (0, p.X)(p.A.desktop, "min")
        ),
        F = ["as"];
      function G(t, r) {
        var e = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          r &&
            (i = i.filter(function (r) {
              return Object.getOwnPropertyDescriptor(t, r).enumerable;
            })),
            e.push.apply(e, i);
        }
        return e;
      }
      function Q(t) {
        for (var r = 1; r < arguments.length; r++) {
          var e = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? G(Object(e), !0).forEach(function (r) {
                (0, C.Z)(t, r, e[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : G(Object(e)).forEach(function (r) {
                Object.defineProperty(
                  t,
                  r,
                  Object.getOwnPropertyDescriptor(e, r)
                );
              });
        }
        return t;
      }
      var K = H()(
          function () {
            return e.e(9527).then(e.bind(e, 39527));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [39527];
              },
            },
          }
        ),
        Y = H()(
          function () {
            return e.e(3269).then(e.bind(e, 63269));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [63269];
              },
            },
          }
        ),
        $ = function (t) {
          var r = t.as,
            e = (0, q.Z)(t, F);
          return "highlightLink" === r
            ? (0, Z.jsx)(Y, Q({}, e), e.title)
            : (0, Z.jsx)(K, Q({}, e), e.title);
        },
        J = function (t) {
          var r = t.items;
          return (0, Z.jsx)(V, { children: r.map($) });
        };
      function tt(t, r) {
        var e = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          r &&
            (i = i.filter(function (r) {
              return Object.getOwnPropertyDescriptor(t, r).enumerable;
            })),
            e.push.apply(e, i);
        }
        return e;
      }
      function rt(t) {
        for (var r = 1; r < arguments.length; r++) {
          var e = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? tt(Object(e), !0).forEach(function (r) {
                (0, C.Z)(t, r, e[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : tt(Object(e)).forEach(function (r) {
                Object.defineProperty(
                  t,
                  r,
                  Object.getOwnPropertyDescriptor(e, r)
                );
              });
        }
        return t;
      }
      var et = function (t) {
          var r = t.id,
            e = t.text,
            i = t.featuredSection,
            n = t.mainSection,
            s = t.bottomLink,
            o = t.primaryDropdown,
            a = t.togglePrimaryDropdown;
          return (0, Z.jsxs)(Z.Fragment, {
            children: [
              (0, Z.jsxs)(M, {
                "aria-expanded": o === r,
                "aria-controls": r,
                "data-ignore-clicks-outside-primary-dropdown": !0,
                onClick: function () {
                  return a(r);
                },
                primaryDropdown: o === r,
                children: [
                  (0, Z.jsx)(_.Z, { "aria-hidden": "true" }),
                  e,
                  (0, Z.jsx)(D.Z, { "aria-hidden": "true", size: 16 }),
                ],
              }),
              (0, Z.jsxs)(I, {
                id: r,
                "data-ignore-clicks-outside-primary-dropdown": !0,
                hasFeaturedSection: !!i,
                primaryDropdown: o === r,
                children: [
                  (0, Z.jsxs)(N, {
                    children: [
                      i && (0, Z.jsx)(U, rt({}, i)),
                      (0, Z.jsx)(J, { items: n }),
                    ],
                  }),
                  s && (0, Z.jsx)(E, rt({}, s)),
                ],
              }),
            ],
          });
        },
        it = et;
      et.defaultProps = {
        featuredSection: null,
        mainSection: null,
        bottomLink: null,
        primaryDropdown: null,
      };
      var nt = function (t) {
          var r = t.isCommunity,
            e = t.isMobileMenuOpen,
            i = t.primaryDropdown,
            n = t.togglePrimaryDropdown;
          return (0, Z.jsx)(k, {
            id: "main-nav",
            "aria-label": "Main",
            isMobileMenuOpen: e,
            primaryDropdown: i,
            children: O.map(function (t) {
              var e = t.as,
                s = t.id,
                o = t.url,
                a = t.text,
                p = t.featuredSection,
                l = t.mainSection,
                c = t.bottomLink;
              return (0,
              Z.jsx)(P, { isOpen: i === s, active: r && "Community" === a, primaryDropdown: i, children: "dropdown" === e ? (0, Z.jsx)(it, { id: s, text: a, featuredSection: p, mainSection: l, bottomLink: c, primaryDropdown: i, togglePrimaryDropdown: n }) : (0, Z.jsx)(S, { url: o, children: a }) }, a);
            }),
          });
        },
        st = nt;
      nt.defaultProps = { primaryDropdown: null };
      var ot = o.ZP.ul.withConfig({
          displayName: "SecondaryLinksStyles__StyledLinksList",
          componentId: "sc-1m80wqy-0",
        })(
          [
            "display:",
            ";flex-direction:column;gap:16px;margin:40px 0;order:9;width:100%;li:first-of-type{a{border-color:",
            ";color:",
            ";}}",
            "{display:none;}",
          ],
          function (t) {
            var r = t.isMobileMenuOpen,
              e = t.isPrimaryDropdownOpen;
            return r && !e ? "flex" : "none";
          },
          s.ZP.blue2,
          s.ZP.blue2,
          (0, p.X)(p.A.desktop, "min")
        ),
        at = (0, o.ZP)(f.Z).withConfig({
          displayName: "SecondaryLinksStyles__StyledLazyLink",
          componentId: "sc-1m80wqy-1",
        })(
          [
            "align-items:center;border:1px solid ",
            ";border-radius:10px;color:",
            ";display:flex;font-weight:500;height:40px;justify-content:center;&:hover{border-color:",
            ";color:",
            ";}",
          ],
          s.ZP.gray5,
          s.ZP.gray3,
          s.ZP.blue2,
          s.ZP.blue2
        ),
        pt = [
          { url: "https://www.digitalocean.com/careers", text: "We're hiring" },
          { url: "https://www.digitalocean.com/blog/", text: "Blog" },
          { url: "https://docs.digitalocean.com/products/", text: "Docs" },
          { url: "https://www.digitalocean.com/support/", text: "Get Support" },
          {
            url: "https://www.digitalocean.com/company/contact/sales/",
            text: "Sales",
          },
        ],
        lt = function (t) {
          var r = t.isMobileMenuOpen,
            e = t.isPrimaryDropdownOpen;
          return (0, Z.jsx)(ot, {
            isMobileMenuOpen: r,
            isPrimaryDropdownOpen: e,
            children: pt.map(function (t) {
              var r = t.url,
                e = t.text;
              return (0,
              Z.jsx)("li", { children: (0, Z.jsx)(at, { url: r, children: e }) }, r);
            }),
          });
        },
        ct = e(27434),
        mt = e(4868),
        ut = e(81912),
        dt = e(53065),
        gt = o.ZP.ul.withConfig({
          displayName: "SecondaryMenuStyles__StyledSecondaryMenu",
          componentId: "sc-1v0jnsm-0",
        })(
          [
            "align-items:center;display:none;gap:16px;margin-left:auto;margin-top:40px;",
            " ",
            ";position:relative;li{flex-grow:1;}",
            "{display:flex;gap:8px;margin-top:0;}",
          ],
          function (t) {
            return (
              t.isSignedIn && (0, o.iv)(["display:flex;gap:8px;margin-top:0;"])
            );
          },
          function (t) {
            var r = t.isSignedIn,
              e = t.isMobileMenuOpen,
              i = t.isPrimaryDropdownOpen;
            return (
              !r &&
              e &&
              !i &&
              (0, o.iv)(
                ["", "{display:flex;order:1;width:100%;}"],
                (0, p.X)(p.A.tablet)
              )
            );
          },
          (0, p.X)(p.A.tablet, "min")
        ),
        ft = (0, o.ZP)(f.Z).withConfig({
          displayName: "SecondaryMenuStyles__StyledLazyLink",
          componentId: "sc-1v0jnsm-1",
        })(
          [
            "align-items:center;background-color:transparent;border:1px solid ",
            ";border-radius:10px;color:",
            ";cursor:pointer;display:flex;font-weight:500;height:40px;justify-content:center;line-height:24px;",
            " padding:0 20px;transition:background-color 250ms;width:100%;will-change:background-color;&:hover{background-color:",
            ";}",
            "{border:none;}",
          ],
          s.ZP.gray6,
          s.ZP.gray3,
          function (t) {
            return (
              t.primary &&
              (0, o.iv)(
                [
                  "background-color:",
                  ";border:none;color:",
                  ";font-weight:600;",
                ],
                s.ZP.blue2,
                s.ZP.white
              )
            );
          },
          function (t) {
            return t.primary ? s.ZP.blue1 : s.ZP.gray8;
          },
          (0, p.X)(p.A.tablet, "min")
        ),
        wt = o.ZP.li.withConfig({
          displayName: "SecondaryMenuStyles__StyledDropdown",
          componentId: "sc-1v0jnsm-2",
        })(["position:relative;"]),
        ht = (0, o.ZP)(ft)
          .attrs({ as: "button" })
          .withConfig({
            displayName: "SecondaryMenuStyles__StyledDropdownTrigger",
            componentId: "sc-1v0jnsm-3",
          })(
          [
            "align-items:center;gap:8px;img{border-radius:999px;height:40px;width:40px;}svg{color:",
            ";}",
            " ",
            "",
          ],
          function (t) {
            return t.primary ? s.ZP.white : s.ZP.gray5;
          },
          function (t) {
            return (
              t.isSignedIn &&
              (0, o.iv)([
                "align-items:flex-end;border:none;padding:0;&:hover{background-color:initial;}",
              ])
            );
          },
          function (t) {
            return (
              t.isOpen &&
              (0, o.iv)(["svg{transform:scaleY(-1);}", ""], function (t) {
                return t.primary
                  ? (0, o.iv)(["background-color:", " !important;"], s.ZP.blue1)
                  : (0, o.iv)(
                      ["background-color:", " !important;svg{color:", ";}"],
                      function (t) {
                        return !t.isSignedIn && s.ZP.gray8;
                      },
                      s.ZP.blue2
                    );
              })
            );
          }
        ),
        yt = o.ZP.ul.withConfig({
          displayName: "SecondaryMenuStyles__StyledDropdownContent",
          componentId: "sc-1v0jnsm-4",
        })(
          [
            "background-color:",
            ";border-radius:16px;box-shadow:0 6px 20px -6px ",
            ";display:",
            ";flex-direction:column;font-size:14px;gap:",
            ";min-width:100%;padding:20px;position:absolute;right:0;top:calc(100% + 8px);white-space:nowrap;hr{border:none;border-bottom:1px solid ",
            ";margin:8px 0;width:100%;}",
            "{border-top-left-radius:0;border-top-right-radius:0;top:calc(100% + 16px);}",
          ],
          s.ZP.white,
          (0, s.E9)(s.ZP.blue1, 0.15),
          function (t) {
            return t.isOpen ? "flex" : "none";
          },
          function (t) {
            return t.isSignedIn ? "8px" : "16px";
          },
          s.ZP.gray6,
          (0, p.X)(p.A.tablet, "min")
        ),
        bt = o.ZP.li.withConfig({
          displayName: "SecondaryMenuStyles__StyledDropdownTitle",
          componentId: "sc-1v0jnsm-5",
        })(["color:", ";", ""], s.ZP.gray2, function (t) {
          return (
            t.isSignedIn &&
            (0, o.iv)(
              ["color:", ";font-weight:700;margin-bottom:8px;"],
              s.ZP.gray1
            )
          );
        }),
        jt = (0, o.ZP)(f.Z).withConfig({
          displayName: "SecondaryMenuStyles__StyledDropdownLink",
          componentId: "sc-1v0jnsm-6",
        })(
          [
            "align-items:center;color:",
            ";cursor:pointer;display:flex;gap:12px;transition:color 250ms;will-change:color;&:hover{color:",
            ";}",
          ],
          s.ZP.gray4,
          s.ZP.blue2
        ),
        xt = function (t) {
          var r = t.auth,
            e = t.isCommunity,
            n = t.isMobileMenuOpen,
            s = t.isPrimaryDropdownOpen,
            o = r.signIn,
            a = r.signOut,
            p = r.user,
            l = !!p,
            m = (0, i.useState)(null),
            u = m[0],
            d = m[1],
            g = function () {
              var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : null;
              d(function (r) {
                return r === t ? null : t;
              });
            };
          return (
            c(g, u, "secondary-menu"),
            (0, Z.jsxs)(gt, {
              "data-ignore-clicks-outside-secondary-menu": !0,
              isSignedIn: l,
              isMobileMenuOpen: n,
              isPrimaryDropdownOpen: s,
              children: [
                e &&
                  l &&
                  (0, Z.jsxs)(wt, {
                    children: [
                      (0, Z.jsxs)(ht, {
                        isSignedIn: l,
                        onClick: function () {
                          return g("profile");
                        },
                        isOpen: "profile" === u,
                        children: [
                          (0, Z.jsx)("img", {
                            src:
                              null === p || void 0 === p ? void 0 : p.gravatar,
                            alt:
                              (null === p || void 0 === p
                                ? void 0
                                : p.first_name) ||
                              (null === p || void 0 === p
                                ? void 0
                                : p.username),
                          }),
                          (0, Z.jsx)(ct.Z, { "aria-hidden": "true", size: 16 }),
                        ],
                      }),
                      (0, Z.jsxs)(yt, {
                        isSignedIn: l,
                        isOpen: "profile" === u,
                        children: [
                          (0, Z.jsx)(bt, {
                            isSignedIn: l,
                            children:
                              (null === p || void 0 === p
                                ? void 0
                                : p.first_name) ||
                              (null === p || void 0 === p
                                ? void 0
                                : p.username),
                          }),
                          (0, Z.jsx)(jt, {
                            url: "/community/users/".concat(
                              null === p || void 0 === p ? void 0 : p.slug
                            ),
                            children: "Community Profile",
                          }),
                          (0, Z.jsx)(jt, {
                            url: "/community/users/".concat(
                              null === p || void 0 === p ? void 0 : p.slug,
                              "/edit"
                            ),
                            children: "Subscriptions",
                          }),
                          (0, Z.jsx)(jt, {
                            url: "/community/notifications",
                            children: "Notifications",
                          }),
                          (0, Z.jsx)("hr", {}),
                          (0, Z.jsx)(jt, {
                            url: "https://cloud.digitalocean.com/account/profile",
                            children: "DigitalOcean",
                          }),
                          (0, Z.jsx)("hr", {}),
                          (0, Z.jsxs)(jt, {
                            onClick: a,
                            children: [
                              (0, Z.jsx)(mt.Z, {
                                "aria-hidden": "true",
                                size: 16,
                              }),
                              "Sign Out",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                e &&
                  !l &&
                  (0, Z.jsxs)(Z.Fragment, {
                    children: [
                      (0, Z.jsxs)(wt, {
                        children: [
                          (0, Z.jsxs)(ht, {
                            onClick: function () {
                              return g("log_in");
                            },
                            isOpen: "log_in" === u,
                            children: [
                              "Log in",
                              (0, Z.jsx)(ct.Z, {
                                "aria-hidden": "true",
                                size: 16,
                              }),
                            ],
                          }),
                          (0, Z.jsxs)(yt, {
                            isOpen: "log_in" === u,
                            children: [
                              (0, Z.jsx)(bt, { children: "Sign in" }),
                              (0, Z.jsxs)(jt, {
                                url: o,
                                children: [
                                  (0, Z.jsx)(ut.Z, {
                                    "aria-hidden": "true",
                                    size: 20,
                                  }),
                                  "Community",
                                ],
                              }),
                              (0, Z.jsxs)(jt, {
                                url: "https://cloud.digitalocean.com/login",
                                children: [
                                  (0, Z.jsx)(dt.Z, {
                                    "aria-hidden": "true",
                                    size: 20,
                                  }),
                                  "DigitalOcean",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, Z.jsxs)(wt, {
                        children: [
                          (0, Z.jsxs)(ht, {
                            primary: !0,
                            onClick: function () {
                              return g("sign_up");
                            },
                            isOpen: "sign_up" === u,
                            children: [
                              "Sign up",
                              (0, Z.jsx)(ct.Z, {
                                "aria-hidden": "true",
                                size: 16,
                              }),
                            ],
                          }),
                          (0, Z.jsxs)(yt, {
                            isOpen: "sign_up" === u,
                            children: [
                              (0, Z.jsx)(bt, { children: "Sign up" }),
                              (0, Z.jsxs)(jt, {
                                url: o,
                                children: [
                                  (0, Z.jsx)(ut.Z, {
                                    "aria-hidden": "true",
                                    size: 20,
                                  }),
                                  "Community",
                                ],
                              }),
                              (0, Z.jsxs)(jt, {
                                url: "https://cloud.digitalocean.com/registrations/new",
                                children: [
                                  (0, Z.jsx)(dt.Z, {
                                    "aria-hidden": "true",
                                    size: 20,
                                  }),
                                  "DigitalOcean",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                !e &&
                  (0, Z.jsxs)(Z.Fragment, {
                    children: [
                      (0, Z.jsx)("li", {
                        children: (0, Z.jsx)(ft, {
                          url: "https://cloud.digitalocean.com/login",
                          children: "Log in",
                        }),
                      }),
                      (0, Z.jsx)("li", {
                        children: (0, Z.jsx)(ft, {
                          url: "https://cloud.digitalocean.com/registrations/new",
                          primary: !0,
                          children: "Sign up",
                        }),
                      }),
                    ],
                  }),
              ],
            })
          );
        },
        vt = xt;
      xt.defaultProps = { auth: {} };
      var kt = function (t) {
          var r = t.auth,
            e = t.isCommunity,
            n = t.isMobileMenuOpen,
            s = t.triggerMobileMenu,
            o = (0, i.useState)(null),
            a = o[0],
            l = o[1],
            g = function () {
              var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : null;
              l(function (r) {
                return r === t ? null : t;
              });
            };
          return (
            (0, m.Z)(n),
            c(g, a, "primary-dropdown"),
            (0, Z.jsx)(w, {
              children: (0, Z.jsxs)(h, {
                children: [
                  (0, Z.jsx)(y, {
                    primaryDropdown: a,
                    url: "/",
                    children: (0, Z.jsxs)("picture", {
                      children: [
                        (0, Z.jsx)("source", {
                          srcSet: d.Z.src,
                          media: "(min-width: ".concat(p.A.tablet, "px)"),
                        }),
                        (0, Z.jsx)("img", {
                          src: u.Z.src,
                          alt: "DigitalOceanPicture",
                        }),
                      ],
                    }),
                  }),
                  (0, Z.jsx)(st, {
                    isCommunity: e,
                    isMobileMenuOpen: n,
                    primaryDropdown: a,
                    togglePrimaryDropdown: g,
                  }),
                  (0, Z.jsx)(vt, {
                    auth: r,
                    isCommunity: e,
                    isMobileMenuOpen: n,
                    isPrimaryDropdownOpen: !!a,
                  }),
                  (0, Z.jsx)(lt, {
                    isMobileMenuOpen: n,
                    isPrimaryDropdownOpen: !!a,
                  }),
                  (0, Z.jsxs)(b, {
                    isSignedIn: !(null === r || void 0 === r || !r.user),
                    children: [
                      (0, Z.jsx)(j, {
                        isSignedIn: !(null === r || void 0 === r || !r.user),
                      }),
                      (0, Z.jsx)(v, {
                        "aria-label": "Menu",
                        "aria-controls": "main-nav",
                        "aria-expanded": n,
                        isMobileMenuOpen: n,
                        onClick: s,
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        },
        Pt = e(83206),
        St = function () {
          var t = (0, n.useRouter)(),
            r = t.asPath,
            e = t.isReady,
            s = (0, i.useState)(""),
            o = s[0],
            a = s[1];
          return (
            (0, i.useEffect)(
              function () {
                if (e) {
                  var t = new URL(r, window.location.href).pathname;
                  a(t);
                }
              },
              [r, e]
            ),
            o
          );
        },
        Zt = e(18116),
        Ot = "/_next/static/media/communitySearchButton.35037783.svg",
        Ct = o.ZP.nav.withConfig({
          displayName: "SubNavigationStyles__StyledSubNavigation",
          componentId: "sc-1ohephh-0",
        })(
          [
            "align-items:center;background-color:",
            ";display:",
            ";height:60px;overflow:auto hidden;overscroll-behavior:contain;scroll-padding-inline:16px;scroll-snap-type:x proximity;",
          ],
          s.ZP.white,
          function (t) {
            return t.isMobileMenuOpen ? "none" : "flex";
          }
        ),
        _t = (0, o.ZP)(g.Z).withConfig({
          displayName: "SubNavigationStyles__StyledContainer",
          componentId: "sc-1ohephh-1",
        })(["flex-direction:row;"]),
        Dt = o.ZP.ul.withConfig({
          displayName: "SubNavigationStyles__StyledLinksList",
          componentId: "sc-1ohephh-2",
        })([
          "display:flex;gap:24px;width:100%;li{align-items:center;display:inline-flex;flex-shrink:0;scroll-snap-align:start;&:last-of-type{margin-left:auto;}}",
        ]),
        Mt = (0, o.ZP)(f.Z).withConfig({
          displayName: "SubNavigationStyles__StyledLazyLink",
          componentId: "sc-1ohephh-3",
        })(
          [
            "color:",
            ";font-weight:500;line-height:24px;&:active,&:hover{color:",
            ";}",
          ],
          function (t) {
            return t.active ? s.ZP.blue2 : s.ZP.gray4;
          },
          s.ZP.blue2
        ),
        It = o.ZP.button.withConfig({
          displayName: "SubNavigationStyles__StyledSearchButton",
          componentId: "sc-1ohephh-4",
        })(
          [
            "align-items:center;background-color:",
            ";border:1px solid ",
            ";border-radius:8px;color:",
            ";cursor:pointer;display:flex;font-size:14px;gap:10px;height:38px;justify-content:center;line-height:22px;margin-left:auto;min-width:38px;padding:0;img,span{display:none;}",
            "{margin-right:16px;}",
            "{padding:0 16px;img,span{display:initial;}}",
          ],
          s.ZP.gray10,
          s.ZP.gray7,
          s.ZP.gray4,
          (0, p.X)(p.A.tablet),
          (0, p.X)(p.A.desktop, "min")
        ),
        Nt = [
          { url: "/community/tutorials", text: "Tutorials" },
          { url: "/community/questions", text: "Questions" },
          { url: "/community/tags/tech-talks", text: "Tech Talks" },
          { url: "/community/learning-paths", text: "Learning Paths" },
          {
            url: "https://docs.digitalocean.com/products/",
            text: "Product Docs",
          },
          { url: "/impact", text: "Social Impact" },
        ],
        At = function (t) {
          var r = t.isCommunity,
            e = t.isMobileMenuOpen,
            n = (0, i.useState)({
              algolia_app_id: "".concat("6ZHEUVKJ88"),
              algolia_public_key: "".concat("0bd8dfae4cfde5149fca544fb42e1a07"),
              search_on_slash: !0,
              search_on_phrase: "!ref",
              primary_list: ["community"],
              secondary_list: ["quicknav"],
              element_id: "communitysearch",
            })[0],
            s = St();
          return r
            ? (0, Z.jsx)(Ct, {
                isMobileMenuOpen: e,
                children: (0, Z.jsx)(_t, {
                  children: (0, Z.jsxs)(Dt, {
                    children: [
                      Nt.map(function (t) {
                        var r = t.url,
                          e = t.text;
                        return (0,
                        Z.jsx)("li", { children: (0, Z.jsx)(Mt, { active: r === s, url: r, children: e }) }, r);
                      }),
                      (0, Z.jsx)(Zt.Z, {
                        options: n,
                        children: (0, Z.jsx)("li", {
                          id: "communitysearch",
                          children: (0, Z.jsxs)(It, {
                            children: [
                              (0, Z.jsx)(Pt.Z, {
                                "aria-hidden": "true",
                                size: 16,
                              }),
                              (0, Z.jsx)("span", {
                                children: "Search Community",
                              }),
                              (0, Z.jsx)("img", {
                                "aria-hidden": "true",
                                src: Ot,
                                alt: "",
                              }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              })
            : null;
        },
        Lt = o.ZP.nav.withConfig({
          displayName: "TopHatNavigationStyles__StyledTopHatNavigation",
          componentId: "sc-1yvs29j-0",
        })(["background-color:", ";padding:8px 0;"], s.ZP.gray2),
        Et = (0, o.ZP)(g.Z).withConfig({
          displayName: "TopHatNavigationStyles__StyledContainer",
          componentId: "sc-1yvs29j-1",
        })(
          [
            "flex-direction:row;justify-content:space-between;line-height:0;",
            "{justify-content:center;}",
          ],
          (0, p.X)(p.A.desktop)
        ),
        qt = o.ZP.ul.withConfig({
          displayName: "TopHatNavigationStyles__StyledLinksList",
          componentId: "sc-1yvs29j-2",
        })(
          ["display:flex;gap:16px;", "{display:none;}"],
          (0, p.X)(p.A.desktop)
        ),
        zt = (0, o.ZP)(f.Z).withConfig({
          displayName: "TopHatNavigationStyles__StyledLazyLink",
          componentId: "sc-1yvs29j-3",
        })(
          [
            "color:",
            ";font-size:14px;font-weight:500;line-height:22px;&:hover{color:",
            ";}",
          ],
          s.ZP.gray7,
          s.ZP.gray9
        ),
        Ht = [
          { url: "https://www.digitalocean.com/careers", text: "We're hiring" },
          { url: "https://www.digitalocean.com/blog/", text: "Blog" },
          { url: "https://docs.digitalocean.com/products/", text: "Docs" },
          { url: "https://www.digitalocean.com/support/", text: "Get Support" },
          {
            url: "https://www.digitalocean.com/company/contact/sales/",
            text: "Sales",
          },
        ],
        Tt = function () {
          return (0, Z.jsx)(Lt, {
            "aria-label": "Top Hat",
            children: (0, Z.jsxs)(Et, {
              children: [
                (0, Z.jsx)(zt, {
                  url: "https://www.digitalocean.com/blog/introducing-sydney-data-center",
                  children:
                    "Our Sydney data center is here! Learn about our new, state-of-the-art data center in Australia ->",
                }),
                (0, Z.jsx)(qt, {
                  children: Ht.map(function (t) {
                    var r = t.url,
                      e = t.text;
                    return (0,
                    Z.jsx)("li", { children: (0, Z.jsx)(zt, { url: r, children: e }) }, r);
                  }),
                }),
              ],
            }),
          });
        },
        Rt = function (t) {
          var r = t.auth,
            e = (0, n.useRouter)().asPath.includes("/community"),
            s = (0, i.useState)(!1),
            o = s[0],
            p = s[1];
          return (0, Z.jsxs)(a, {
            children: [
              (0, Z.jsx)(Tt, {}),
              (0, Z.jsx)(kt, {
                auth: r,
                isCommunity: e,
                isMobileMenuOpen: o,
                triggerMobileMenu: function () {
                  return p(function (t) {
                    return !t;
                  });
                },
              }),
              (0, Z.jsx)(At, { isCommunity: e, isMobileMenuOpen: o }),
            ],
          });
        },
        Xt = function (t) {
          var r = t.auth,
            e = t.noNav,
            i = t.children;
          return (0, Z.jsxs)(Z.Fragment, {
            children: [!e && (0, Z.jsx)(Rt, { auth: r }), i],
          });
        },
        Bt = Xt;
      Xt.defaultProps = { auth: {}, noNav: !1 };
    },
    78985: function (t, r, e) {
      "use strict";
      var i = e(67294);
      r.Z = function (t) {
        (0, i.useEffect)(
          function () {
            document.body.style.overflow = t ? "hidden" : "";
          },
          [t]
        );
      };
    },
    23937: function (t, r, e) {
      "use strict";
      var i = e(67294);
      r.Z = function (t, r) {
        (0, i.useEffect)(
          function () {
            if ("undefined" !== typeof document) {
              if (document.getElementById(t)) return r(), function () {};
              var e = document.createElement("script");
              (e.id = t),
                (e.src = t),
                (e.type = "text/javascript"),
                (e.onload = function () {
                  r();
                }),
                document.body.appendChild(e);
            }
            return function () {
              document.body.removeChild(document.getElementById(t));
            };
          },
          [t, r]
        );
      };
    },
    17534: function (t, r, e) {
      "use strict";
      e.d(r, {
        A: function () {
          return i;
        },
        X: function () {
          return n;
        },
      });
      var i = {
          smallPhone: 320,
          phone: 375,
          largePhone: 425,
          tablet: 768,
          desktop: 1024,
          mediumDesktop: 1220,
          largeDesktop: 1440,
        },
        n = function (t) {
          var r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "max",
            e =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "px";
          return "@media only screen and ("
            .concat(r, "-width: ")
            .concat(t)
            .concat(e, ")");
        };
    },
    87288: function (t, r) {
      "use strict";
      var e = "'JetBrains Mono', monospace",
        i = "'Epilogue', sans-serif",
        n = "'Inter', sans-serif;";
      r.Z = function (t) {
        switch (t) {
          case "code":
            return e;
          case "primary":
          default:
            return i;
          case "body":
            return n;
        }
      };
    },
    65861: function (t, r, e) {
      "use strict";
      e.r(r),
        e.d(r, {
          default: function () {
            return v;
          },
        });
      var i = e(59499),
        n = e(4730),
        s = e(67294),
        o = e(59667),
        a = e(27812),
        p = e(50029),
        l = e(87794),
        c = e.n(l),
        m = function (t, r, e) {
          var i = document.createElement("textarea");
          (i.value = t),
            (i.style.top = "0"),
            (i.style.left = "0"),
            (i.style.position = "fixed"),
            document.body.appendChild(i),
            i.focus({ preventScroll: !0 }),
            i.select();
          try {
            return document.execCommand("copy") ? r() : e();
          } catch (n) {
            return e(n);
          } finally {
            document.body.removeChild(i);
          }
        },
        u = (function () {
          var t = (0, p.Z)(
            c().mark(function t(r, e, i) {
              var n, s;
              return c().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        null === (n = navigator) ||
                        void 0 === n ||
                        null === (s = n.clipboard) ||
                        void 0 === s ||
                        !s.writeText
                      ) {
                        t.next = 6;
                        break;
                      }
                      return (
                        (t.next = 3),
                        navigator.clipboard.writeText(r).then(
                          function () {
                            return !0;
                          },
                          function () {
                            return !1;
                          }
                        )
                      );
                    case 3:
                      if (!t.sent) {
                        t.next = 6;
                        break;
                      }
                      return t.abrupt("return", e());
                    case 6:
                      return t.abrupt("return", m(r, e, i));
                    case 7:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function (r, e, i) {
            return t.apply(this, arguments);
          };
        })(),
        d = function (t, r) {
          (t.textContent = r),
            setTimeout(function () {
              t.textContent = "Copy";
            }, 5e3);
        },
        g = [
          function (t) {
            var r = t.code,
              e = t.element,
              i = document.createElement("button");
            return (
              (i.textContent = "Copy"),
              i.addEventListener("click", function () {
                u(
                  r,
                  function () {
                    d(i, "Copied!");
                  },
                  function () {
                    var t, r;
                    d(
                      i,
                      "Press ".concat(
                        (
                          null === (t = navigator) ||
                          void 0 === t ||
                          null === (r = t.platform) ||
                          void 0 === r
                            ? void 0
                            : r.includes("Mac")
                        )
                          ? "Cmd"
                          : "Ctrl",
                        "+C to copy"
                      )
                    ),
                      window.getSelection().selectAllChildren(e);
                  }
                );
              }),
              i
            );
          },
          function (t) {
            var r = t.code,
              e = t.language;
            if ("bash" !== e && "shell" !== e) return null;
            var i =
              document && document.querySelector('button[data-js="terminal"]');
            if (!i) return null;
            var n = document.createElement("button");
            return (
              (n.textContent = "Run"),
              n.addEventListener("click", function () {
                i.dispatchEvent(
                  new CustomEvent("run", { detail: "".concat(r, "\n") })
                );
              }),
              n
            );
          },
        ],
        f = function (t) {
          var r = t.parentElement;
          if (!r.parentElement.classList.contains("code-toolbar")) {
            var e = document.createElement("div");
            e.classList.add("code-toolbar"),
              r.parentElement.insertBefore(e, r),
              e.appendChild(r);
            var i = document.createElement("div");
            i.classList.add("toolbar"), e.appendChild(i);
            var n = Object.freeze({
              code: t.textContent.trim(),
              language: (
                (0, a.Z)(r.classList).find(function (t) {
                  return t.startsWith("language-");
                }) || "language-none"
              ).slice(9),
              element: t,
            });
            g.forEach(function (t) {
              var r = t(n);
              if (r) {
                var e = document.createElement("div");
                e.classList.add("toolbar-item"),
                  e.appendChild(r),
                  i.appendChild(e);
              }
            });
          }
        },
        w = e(58276),
        h = e(85893),
        y = [
          "content",
          "allowHtml",
          "allowRsvp",
          "allowTerminal",
          "onRender",
          "initial",
          "className",
        ];
      function b(t, r) {
        var e = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          r &&
            (i = i.filter(function (r) {
              return Object.getOwnPropertyDescriptor(t, r).enumerable;
            })),
            e.push.apply(e, i);
        }
        return e;
      }
      function j(t) {
        for (var r = 1; r < arguments.length; r++) {
          var e = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? b(Object(e), !0).forEach(function (r) {
                (0, i.Z)(t, r, e[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : b(Object(e)).forEach(function (r) {
                Object.defineProperty(
                  t,
                  r,
                  Object.getOwnPropertyDescriptor(e, r)
                );
              });
        }
        return t;
      }
      var x = function (t) {
          var r = t.content,
            e = t.allowHtml,
            i = t.allowRsvp,
            a = t.allowTerminal,
            p = t.onRender,
            l = t.initial,
            c = t.className,
            m = (0, n.Z)(t, y),
            u = (0, s.useMemo)(
              function () {
                return [w.markdown, c]
                  .filter(function (t) {
                    return !(null === t || void 0 === t || !t.length);
                  })
                  .join(" ");
              },
              [c]
            ),
            d = (0, s.useMemo)(
              function () {
                return (0, o.Z)(r, e, i, a);
              },
              [r, e, i, a]
            ),
            g = (0, s.useState)(null !== l && void 0 !== l ? l : d.result)[0],
            b = (0, s.useRef)(null);
          return (
            (0, s.useEffect)(
              function () {
                var t = document
                  .createRange()
                  .createContextualFragment(d.result);
                (b.current.innerHTML = ""),
                  b.current.appendChild(t),
                  window.requestAnimationFrame(function () {
                    var t;
                    null === b ||
                      void 0 === b ||
                      null === (t = b.current) ||
                      void 0 === t ||
                      t
                        .querySelectorAll('[class*="language-"] code')
                        .forEach(f);
                  }),
                  "function" === typeof p && p(d, b.current);
              },
              [d, p]
            ),
            (0, h.jsx)(
              "div",
              j(
                j({}, m),
                {},
                { className: u, ref: b, dangerouslySetInnerHTML: { __html: g } }
              )
            )
          );
        },
        v = x;
      x.defaultProps = {
        allowHtml: !1,
        allowRsvp: !1,
        allowTerminal: !1,
        onRender: null,
        initial: null,
        className: null,
      };
    },
    57805: function (t, r) {
      "use strict";
      r.Z = function (t) {
        return "s" === t.slice(-1) || "ed" === t.slice(-2)
          ? t
          : "y" === t.slice(-1)
          ? "".concat(t.slice(0, -1), "ies")
          : "".concat(t, "s");
      };
    },
    59667: function (t, r, e) {
      "use strict";
      var i = e(27812),
        n = e(71823),
        s = e.n(n),
        o = e(67928),
        a = e.n(o),
        p = e(4601),
        l = e.n(p),
        c = e(22476),
        m = e(88723);
      r.Z = function (t) {
        var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          p = a()({
            html: r,
            langPrefix: "",
            linkify: !0,
            typographer: !0,
          }).use(s(), {
            rsvp_button: e,
            terminal_button: n,
            fence_environment: {
              allowedEnvironments: [
                "local",
                "second",
                "third",
                "fourth",
                "fifth",
              ],
            },
            fence_classes: {
              allowedClasses: [
                "prefixed",
                "line_numbers",
                "command",
                "super_user",
                "custom_prefix",
              ].concat(
                (0, i.Z)(
                  ["local", "second", "third", "fourth", "fifth"].map(function (
                    t
                  ) {
                    return "environment-".concat(t);
                  })
                )
              ),
            },
            callout: { allowedClasses: ["note", "warning", "info", "draft"] },
            heading_id: { sluggify: c.Z },
            user_mention: {
              pattern: /[a-zA-Z0-9\-_]+/i,
              path: function (t) {
                var r = (0, c.Z)(t);
                return !!r.length && (0, m.F7)("user", r);
              },
            },
          });
        if (o) return p.use(l()).render(t), p.plainText;
        var u = p.render(t).toString();
        return { result: u, headings: p.headings };
      };
    },
    22476: function (t, r) {
      "use strict";
      r.Z = function (t) {
        return t
          .toString()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase()
          .replace(/\W+/g, "-")
          .replace(/--+/g, "-")
          .replace(/(^-|-$)/g, "");
      };
    },
    88723: function (t, r, e) {
      "use strict";
      e.d(r, {
        F7: function () {
          return n;
        },
        Ij: function () {
          return p;
        },
        Mc: function () {
          return a;
        },
        as: function () {
          return s;
        },
        iD: function () {
          return o;
        },
        vF: function () {
          return l;
        },
      });
      var i = e(57805),
        n = function (t, r) {
          var e =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : void 0;
          return "/community/"
            .concat(encodeURIComponent((0, i.Z)(t)), "/")
            .concat(encodeURIComponent(r))
            .concat(e ? "?comment=".concat(encodeURIComponent(e)) : "");
        },
        s = function (t, r) {
          return "/community/"
            .concat(encodeURIComponent((0, i.Z)(t)), "/")
            .concat(encodeURIComponent(r), "/edit");
        },
        o = function (t, r) {
          return "/community/admin/"
            .concat(encodeURIComponent((0, i.Z)(t)), "/")
            .concat(encodeURIComponent(r));
        },
        a = function (t, r) {
          return "/community/admin/"
            .concat(encodeURIComponent((0, i.Z)(t)), "/")
            .concat(encodeURIComponent(r), "/edit");
        },
        p = function (t, r) {
          return "/"
            .concat(encodeURIComponent(t), "/")
            .concat(encodeURIComponent(r));
        },
        l = function (t, r) {
          return "/community/admin/static_pages/"
            .concat(encodeURIComponent(t), "/")
            .concat(encodeURIComponent(r), "/edit");
        };
    },
    17504: function (t, r) {
      "use strict";
      r.Z = {
        src: "/_next/static/media/do-logo.d3eb8550.svg",
        height: 24,
        width: 24,
      };
    },
    2464: function (t, r) {
      "use strict";
      r.Z = {
        src: "/_next/static/media/logo.87a8f3b8.svg",
        height: 32,
        width: 191,
      };
    },
    58276: function (t) {
      t.exports = { markdown: "Markdown_markdown__wHGCe" };
    },
    10437: function (t, r, e) {
      var i = {
        "./prism-abap": 21402,
        "./prism-abap.js": 21402,
        "./prism-abnf": 24387,
        "./prism-abnf.js": 24387,
        "./prism-actionscript": 87026,
        "./prism-actionscript.js": 87026,
        "./prism-ada": 21156,
        "./prism-ada.js": 21156,
        "./prism-agda": 62803,
        "./prism-agda.js": 62803,
        "./prism-al": 65669,
        "./prism-al.js": 65669,
        "./prism-antlr4": 46785,
        "./prism-antlr4.js": 46785,
        "./prism-apacheconf": 3642,
        "./prism-apacheconf.js": 3642,
        "./prism-apex": 83938,
        "./prism-apex.js": 83938,
        "./prism-apl": 60583,
        "./prism-apl.js": 60583,
        "./prism-applescript": 37610,
        "./prism-applescript.js": 37610,
        "./prism-aql": 78177,
        "./prism-aql.js": 78177,
        "./prism-arduino": 87489,
        "./prism-arduino.js": 87489,
        "./prism-arff": 36337,
        "./prism-arff.js": 36337,
        "./prism-armasm": 50354,
        "./prism-armasm.js": 50354,
        "./prism-arturo": 89421,
        "./prism-arturo.js": 89421,
        "./prism-asciidoc": 51362,
        "./prism-asciidoc.js": 51362,
        "./prism-asm6502": 6514,
        "./prism-asm6502.js": 6514,
        "./prism-asmatmel": 61962,
        "./prism-asmatmel.js": 61962,
        "./prism-aspnet": 94990,
        "./prism-aspnet.js": 94990,
        "./prism-autohotkey": 36796,
        "./prism-autohotkey.js": 36796,
        "./prism-autoit": 74056,
        "./prism-autoit.js": 74056,
        "./prism-avisynth": 68397,
        "./prism-avisynth.js": 68397,
        "./prism-avro-idl": 40183,
        "./prism-avro-idl.js": 40183,
        "./prism-awk": 51447,
        "./prism-awk.js": 51447,
        "./prism-bash": 23022,
        "./prism-bash.js": 23022,
        "./prism-basic": 10183,
        "./prism-basic.js": 10183,
        "./prism-batch": 43895,
        "./prism-batch.js": 43895,
        "./prism-bbcode": 90464,
        "./prism-bbcode.js": 90464,
        "./prism-bicep": 56377,
        "./prism-bicep.js": 56377,
        "./prism-birb": 37381,
        "./prism-birb.js": 37381,
        "./prism-bison": 73096,
        "./prism-bison.js": 73096,
        "./prism-bnf": 85309,
        "./prism-bnf.js": 85309,
        "./prism-brainfuck": 57526,
        "./prism-brainfuck.js": 57526,
        "./prism-brightscript": 27503,
        "./prism-brightscript.js": 27503,
        "./prism-bro": 70599,
        "./prism-bro.js": 70599,
        "./prism-bsl": 75333,
        "./prism-bsl.js": 75333,
        "./prism-c": 13036,
        "./prism-c.js": 13036,
        "./prism-cfscript": 16281,
        "./prism-cfscript.js": 16281,
        "./prism-chaiscript": 11204,
        "./prism-chaiscript.js": 11204,
        "./prism-cil": 95238,
        "./prism-cil.js": 95238,
        "./prism-clike": 84261,
        "./prism-clike.js": 84261,
        "./prism-clojure": 26766,
        "./prism-clojure.js": 26766,
        "./prism-cmake": 25959,
        "./prism-cmake.js": 25959,
        "./prism-cobol": 97760,
        "./prism-cobol.js": 97760,
        "./prism-coffeescript": 86949,
        "./prism-coffeescript.js": 86949,
        "./prism-concurnas": 46336,
        "./prism-concurnas.js": 46336,
        "./prism-cooklang": 63522,
        "./prism-cooklang.js": 63522,
        "./prism-coq": 90405,
        "./prism-coq.js": 90405,
        "./prism-core": 40147,
        "./prism-core.js": 40147,
        "./prism-cpp": 14897,
        "./prism-cpp.js": 14897,
        "./prism-crystal": 91464,
        "./prism-crystal.js": 91464,
        "./prism-csharp": 64775,
        "./prism-csharp.js": 64775,
        "./prism-cshtml": 16082,
        "./prism-cshtml.js": 16082,
        "./prism-csp": 79582,
        "./prism-csp.js": 79582,
        "./prism-css": 85567,
        "./prism-css-extras": 3545,
        "./prism-css-extras.js": 3545,
        "./prism-css.js": 85567,
        "./prism-csv": 81096,
        "./prism-csv.js": 81096,
        "./prism-cue": 78309,
        "./prism-cue.js": 78309,
        "./prism-cypher": 6286,
        "./prism-cypher.js": 6286,
        "./prism-d": 21393,
        "./prism-d.js": 21393,
        "./prism-dart": 12577,
        "./prism-dart.js": 12577,
        "./prism-dataweave": 12075,
        "./prism-dataweave.js": 12075,
        "./prism-dax": 39066,
        "./prism-dax.js": 39066,
        "./prism-dhall": 92366,
        "./prism-dhall.js": 92366,
        "./prism-diff": 77051,
        "./prism-diff.js": 77051,
        "./prism-django": 7686,
        "./prism-django.js": 7686,
        "./prism-dns-zone-file": 90504,
        "./prism-dns-zone-file.js": 90504,
        "./prism-docker": 21276,
        "./prism-docker.js": 21276,
        "./prism-dot": 2701,
        "./prism-dot.js": 2701,
        "./prism-ebnf": 85231,
        "./prism-ebnf.js": 85231,
        "./prism-editorconfig": 41992,
        "./prism-editorconfig.js": 41992,
        "./prism-eiffel": 83715,
        "./prism-eiffel.js": 83715,
        "./prism-ejs": 29025,
        "./prism-ejs.js": 29025,
        "./prism-elixir": 68931,
        "./prism-elixir.js": 68931,
        "./prism-elm": 8950,
        "./prism-elm.js": 8950,
        "./prism-erb": 73782,
        "./prism-erb.js": 73782,
        "./prism-erlang": 15180,
        "./prism-erlang.js": 15180,
        "./prism-etlua": 74598,
        "./prism-etlua.js": 74598,
        "./prism-excel-formula": 21169,
        "./prism-excel-formula.js": 21169,
        "./prism-factor": 59595,
        "./prism-factor.js": 59595,
        "./prism-false": 54586,
        "./prism-false.js": 54586,
        "./prism-firestore-security-rules": 22254,
        "./prism-firestore-security-rules.js": 22254,
        "./prism-flow": 19266,
        "./prism-flow.js": 19266,
        "./prism-fortran": 15921,
        "./prism-fortran.js": 15921,
        "./prism-fsharp": 790,
        "./prism-fsharp.js": 790,
        "./prism-ftl": 12298,
        "./prism-ftl.js": 12298,
        "./prism-gap": 73243,
        "./prism-gap.js": 73243,
        "./prism-gcode": 53161,
        "./prism-gcode.js": 53161,
        "./prism-gdscript": 30669,
        "./prism-gdscript.js": 30669,
        "./prism-gedcom": 8614,
        "./prism-gedcom.js": 8614,
        "./prism-gettext": 79612,
        "./prism-gettext.js": 79612,
        "./prism-gherkin": 46472,
        "./prism-gherkin.js": 46472,
        "./prism-git": 17113,
        "./prism-git.js": 17113,
        "./prism-glsl": 66595,
        "./prism-glsl.js": 66595,
        "./prism-gml": 90544,
        "./prism-gml.js": 90544,
        "./prism-gn": 52691,
        "./prism-gn.js": 52691,
        "./prism-go": 46625,
        "./prism-go-module": 41214,
        "./prism-go-module.js": 41214,
        "./prism-go.js": 46625,
        "./prism-graphql": 7784,
        "./prism-graphql.js": 7784,
        "./prism-groovy": 62588,
        "./prism-groovy.js": 62588,
        "./prism-haml": 41940,
        "./prism-haml.js": 41940,
        "./prism-handlebars": 12279,
        "./prism-handlebars.js": 12279,
        "./prism-haskell": 25255,
        "./prism-haskell.js": 25255,
        "./prism-haxe": 95594,
        "./prism-haxe.js": 95594,
        "./prism-hcl": 25535,
        "./prism-hcl.js": 25535,
        "./prism-hlsl": 89459,
        "./prism-hlsl.js": 89459,
        "./prism-hoon": 11423,
        "./prism-hoon.js": 11423,
        "./prism-hpkp": 25241,
        "./prism-hpkp.js": 25241,
        "./prism-hsts": 57242,
        "./prism-hsts.js": 57242,
        "./prism-http": 54853,
        "./prism-http.js": 54853,
        "./prism-ichigojam": 19313,
        "./prism-ichigojam.js": 19313,
        "./prism-icon": 24306,
        "./prism-icon.js": 24306,
        "./prism-icu-message-format": 85212,
        "./prism-icu-message-format.js": 85212,
        "./prism-idris": 99769,
        "./prism-idris.js": 99769,
        "./prism-iecst": 91859,
        "./prism-iecst.js": 91859,
        "./prism-ignore": 77863,
        "./prism-ignore.js": 77863,
        "./prism-inform7": 30421,
        "./prism-inform7.js": 30421,
        "./prism-ini": 28892,
        "./prism-ini.js": 28892,
        "./prism-io": 96491,
        "./prism-io.js": 96491,
        "./prism-j": 24191,
        "./prism-j.js": 24191,
        "./prism-java": 57028,
        "./prism-java.js": 57028,
        "./prism-javadoc": 34489,
        "./prism-javadoc.js": 34489,
        "./prism-javadoclike": 14762,
        "./prism-javadoclike.js": 14762,
        "./prism-javascript": 47977,
        "./prism-javascript.js": 47977,
        "./prism-javastacktrace": 79117,
        "./prism-javastacktrace.js": 79117,
        "./prism-jexl": 21426,
        "./prism-jexl.js": 21426,
        "./prism-jolie": 14366,
        "./prism-jolie.js": 14366,
        "./prism-jq": 56361,
        "./prism-jq.js": 56361,
        "./prism-js-extras": 95522,
        "./prism-js-extras.js": 95522,
        "./prism-js-templates": 30742,
        "./prism-js-templates.js": 30742,
        "./prism-jsdoc": 88221,
        "./prism-jsdoc.js": 88221,
        "./prism-json": 1202,
        "./prism-json.js": 1202,
        "./prism-json5": 54497,
        "./prism-json5.js": 54497,
        "./prism-jsonp": 27935,
        "./prism-jsonp.js": 27935,
        "./prism-jsstacktrace": 56322,
        "./prism-jsstacktrace.js": 56322,
        "./prism-jsx": 65972,
        "./prism-jsx.js": 65972,
        "./prism-julia": 72673,
        "./prism-julia.js": 72673,
        "./prism-keepalived": 13977,
        "./prism-keepalived.js": 13977,
        "./prism-keyman": 13545,
        "./prism-keyman.js": 13545,
        "./prism-kotlin": 36286,
        "./prism-kotlin.js": 36286,
        "./prism-kumir": 59298,
        "./prism-kumir.js": 59298,
        "./prism-kusto": 14860,
        "./prism-kusto.js": 14860,
        "./prism-latex": 53200,
        "./prism-latex.js": 53200,
        "./prism-latte": 19005,
        "./prism-latte.js": 19005,
        "./prism-less": 31609,
        "./prism-less.js": 31609,
        "./prism-lilypond": 39199,
        "./prism-lilypond.js": 39199,
        "./prism-linker-script": 74622,
        "./prism-linker-script.js": 74622,
        "./prism-liquid": 46572,
        "./prism-liquid.js": 46572,
        "./prism-lisp": 41375,
        "./prism-lisp.js": 41375,
        "./prism-livescript": 37956,
        "./prism-livescript.js": 37956,
        "./prism-llvm": 95409,
        "./prism-llvm.js": 95409,
        "./prism-log": 62764,
        "./prism-log.js": 62764,
        "./prism-lolcode": 4170,
        "./prism-lolcode.js": 4170,
        "./prism-lua": 52862,
        "./prism-lua.js": 52862,
        "./prism-magma": 9421,
        "./prism-magma.js": 9421,
        "./prism-makefile": 13891,
        "./prism-makefile.js": 13891,
        "./prism-markdown": 60045,
        "./prism-markdown.js": 60045,
        "./prism-markup": 28577,
        "./prism-markup-templating": 93182,
        "./prism-markup-templating.js": 93182,
        "./prism-markup.js": 28577,
        "./prism-mata": 89666,
        "./prism-mata.js": 89666,
        "./prism-matlab": 69927,
        "./prism-matlab.js": 69927,
        "./prism-maxscript": 86751,
        "./prism-maxscript.js": 86751,
        "./prism-mel": 7876,
        "./prism-mel.js": 7876,
        "./prism-mermaid": 27379,
        "./prism-mermaid.js": 27379,
        "./prism-mizar": 32541,
        "./prism-mizar.js": 32541,
        "./prism-mongodb": 98541,
        "./prism-mongodb.js": 98541,
        "./prism-monkey": 92079,
        "./prism-monkey.js": 92079,
        "./prism-moonscript": 21349,
        "./prism-moonscript.js": 21349,
        "./prism-n1ql": 50484,
        "./prism-n1ql.js": 50484,
        "./prism-n4js": 84730,
        "./prism-n4js.js": 84730,
        "./prism-nand2tetris-hdl": 96836,
        "./prism-nand2tetris-hdl.js": 96836,
        "./prism-naniscript": 52650,
        "./prism-naniscript.js": 52650,
        "./prism-nasm": 80182,
        "./prism-nasm.js": 80182,
        "./prism-neon": 69771,
        "./prism-neon.js": 69771,
        "./prism-nevod": 43388,
        "./prism-nevod.js": 43388,
        "./prism-nginx": 45870,
        "./prism-nginx.js": 45870,
        "./prism-nim": 52805,
        "./prism-nim.js": 52805,
        "./prism-nix": 85499,
        "./prism-nix.js": 85499,
        "./prism-nsis": 57053,
        "./prism-nsis.js": 57053,
        "./prism-objectivec": 49973,
        "./prism-objectivec.js": 49973,
        "./prism-ocaml": 15825,
        "./prism-ocaml.js": 15825,
        "./prism-odin": 50564,
        "./prism-odin.js": 50564,
        "./prism-opencl": 19634,
        "./prism-opencl.js": 19634,
        "./prism-openqasm": 53305,
        "./prism-openqasm.js": 53305,
        "./prism-oz": 42446,
        "./prism-oz.js": 42446,
        "./prism-parigp": 6771,
        "./prism-parigp.js": 6771,
        "./prism-parser": 79571,
        "./prism-parser.js": 79571,
        "./prism-pascal": 27451,
        "./prism-pascal.js": 27451,
        "./prism-pascaligo": 20452,
        "./prism-pascaligo.js": 20452,
        "./prism-pcaxis": 47964,
        "./prism-pcaxis.js": 47964,
        "./prism-peoplecode": 56511,
        "./prism-peoplecode.js": 56511,
        "./prism-perl": 37451,
        "./prism-perl.js": 37451,
        "./prism-php": 30326,
        "./prism-php-extras": 76041,
        "./prism-php-extras.js": 76041,
        "./prism-php.js": 30326,
        "./prism-phpdoc": 68861,
        "./prism-phpdoc.js": 68861,
        "./prism-plant-uml": 91659,
        "./prism-plant-uml.js": 91659,
        "./prism-plsql": 1862,
        "./prism-plsql.js": 1862,
        "./prism-powerquery": 33226,
        "./prism-powerquery.js": 33226,
        "./prism-powershell": 60424,
        "./prism-powershell.js": 60424,
        "./prism-processing": 98067,
        "./prism-processing.js": 98067,
        "./prism-prolog": 59340,
        "./prism-prolog.js": 59340,
        "./prism-promql": 29918,
        "./prism-promql.js": 29918,
        "./prism-properties": 12303,
        "./prism-properties.js": 12303,
        "./prism-protobuf": 4075,
        "./prism-protobuf.js": 4075,
        "./prism-psl": 83433,
        "./prism-psl.js": 83433,
        "./prism-pug": 34689,
        "./prism-pug.js": 34689,
        "./prism-puppet": 10909,
        "./prism-puppet.js": 10909,
        "./prism-pure": 90555,
        "./prism-pure.js": 90555,
        "./prism-purebasic": 53147,
        "./prism-purebasic.js": 53147,
        "./prism-purescript": 29059,
        "./prism-purescript.js": 29059,
        "./prism-python": 72364,
        "./prism-python.js": 72364,
        "./prism-q": 81763,
        "./prism-q.js": 81763,
        "./prism-qml": 10638,
        "./prism-qml.js": 10638,
        "./prism-qore": 59338,
        "./prism-qore.js": 59338,
        "./prism-qsharp": 37181,
        "./prism-qsharp.js": 37181,
        "./prism-r": 25217,
        "./prism-r.js": 25217,
        "./prism-racket": 34762,
        "./prism-racket.js": 34762,
        "./prism-reason": 24710,
        "./prism-reason.js": 24710,
        "./prism-regex": 77901,
        "./prism-regex.js": 77901,
        "./prism-rego": 28856,
        "./prism-rego.js": 28856,
        "./prism-renpy": 58646,
        "./prism-renpy.js": 58646,
        "./prism-rescript": 78059,
        "./prism-rescript.js": 78059,
        "./prism-rest": 70412,
        "./prism-rest.js": 70412,
        "./prism-rip": 53437,
        "./prism-rip.js": 53437,
        "./prism-roboconf": 65251,
        "./prism-roboconf.js": 65251,
        "./prism-robotframework": 97722,
        "./prism-robotframework.js": 97722,
        "./prism-ruby": 14750,
        "./prism-ruby.js": 14750,
        "./prism-rust": 60537,
        "./prism-rust.js": 60537,
        "./prism-sas": 12661,
        "./prism-sas.js": 12661,
        "./prism-sass": 11755,
        "./prism-sass.js": 11755,
        "./prism-scala": 74233,
        "./prism-scala.js": 74233,
        "./prism-scheme": 28951,
        "./prism-scheme.js": 28951,
        "./prism-scss": 70746,
        "./prism-scss.js": 70746,
        "./prism-shell-session": 68851,
        "./prism-shell-session.js": 68851,
        "./prism-smali": 42920,
        "./prism-smali.js": 42920,
        "./prism-smalltalk": 11441,
        "./prism-smalltalk.js": 11441,
        "./prism-smarty": 25408,
        "./prism-smarty.js": 25408,
        "./prism-sml": 22680,
        "./prism-sml.js": 22680,
        "./prism-solidity": 10682,
        "./prism-solidity.js": 10682,
        "./prism-solution-file": 63386,
        "./prism-solution-file.js": 63386,
        "./prism-soy": 85730,
        "./prism-soy.js": 85730,
        "./prism-sparql": 12810,
        "./prism-sparql.js": 12810,
        "./prism-splunk-spl": 37538,
        "./prism-splunk-spl.js": 37538,
        "./prism-sqf": 15948,
        "./prism-sqf.js": 15948,
        "./prism-sql": 8953,
        "./prism-sql.js": 8953,
        "./prism-squirrel": 23892,
        "./prism-squirrel.js": 23892,
        "./prism-stan": 53893,
        "./prism-stan.js": 53893,
        "./prism-stata": 6110,
        "./prism-stata.js": 6110,
        "./prism-stylus": 84572,
        "./prism-stylus.js": 84572,
        "./prism-supercollider": 20332,
        "./prism-supercollider.js": 20332,
        "./prism-swift": 2473,
        "./prism-swift.js": 2473,
        "./prism-systemd": 49517,
        "./prism-systemd.js": 49517,
        "./prism-t4-cs": 23656,
        "./prism-t4-cs.js": 23656,
        "./prism-t4-templating": 58733,
        "./prism-t4-templating.js": 58733,
        "./prism-t4-vb": 98367,
        "./prism-t4-vb.js": 98367,
        "./prism-tap": 16076,
        "./prism-tap.js": 16076,
        "./prism-tcl": 8432,
        "./prism-tcl.js": 8432,
        "./prism-textile": 60524,
        "./prism-textile.js": 60524,
        "./prism-toml": 34890,
        "./prism-toml.js": 34890,
        "./prism-tremor": 41229,
        "./prism-tremor.js": 41229,
        "./prism-tsx": 49617,
        "./prism-tsx.js": 49617,
        "./prism-tt2": 23506,
        "./prism-tt2.js": 23506,
        "./prism-turtle": 3663,
        "./prism-turtle.js": 3663,
        "./prism-twig": 77445,
        "./prism-twig.js": 77445,
        "./prism-typescript": 81011,
        "./prism-typescript.js": 81011,
        "./prism-typoscript": 58054,
        "./prism-typoscript.js": 58054,
        "./prism-unrealscript": 27452,
        "./prism-unrealscript.js": 27452,
        "./prism-uorazor": 38719,
        "./prism-uorazor.js": 38719,
        "./prism-uri": 4461,
        "./prism-uri.js": 4461,
        "./prism-v": 55073,
        "./prism-v.js": 55073,
        "./prism-vala": 15802,
        "./prism-vala.js": 15802,
        "./prism-vbnet": 39747,
        "./prism-vbnet.js": 39747,
        "./prism-velocity": 32257,
        "./prism-velocity.js": 32257,
        "./prism-verilog": 8676,
        "./prism-verilog.js": 8676,
        "./prism-vhdl": 3085,
        "./prism-vhdl.js": 3085,
        "./prism-vim": 93044,
        "./prism-vim.js": 93044,
        "./prism-visual-basic": 38500,
        "./prism-visual-basic.js": 38500,
        "./prism-warpscript": 99952,
        "./prism-warpscript.js": 99952,
        "./prism-wasm": 16899,
        "./prism-wasm.js": 16899,
        "./prism-web-idl": 45511,
        "./prism-web-idl.js": 45511,
        "./prism-wiki": 33139,
        "./prism-wiki.js": 33139,
        "./prism-wolfram": 97717,
        "./prism-wolfram.js": 97717,
        "./prism-wren": 70181,
        "./prism-wren.js": 70181,
        "./prism-xeora": 37082,
        "./prism-xeora.js": 37082,
        "./prism-xml-doc": 62088,
        "./prism-xml-doc.js": 62088,
        "./prism-xojo": 62363,
        "./prism-xojo.js": 62363,
        "./prism-xquery": 72742,
        "./prism-xquery.js": 72742,
        "./prism-yaml": 20540,
        "./prism-yaml.js": 20540,
        "./prism-yang": 64723,
        "./prism-yang.js": 64723,
        "./prism-zig": 8017,
        "./prism-zig.js": 8017,
      };
      function n(t) {
        var r = s(t);
        return e(r);
      }
      function s(t) {
        if (!e.o(i, t)) {
          var r = new Error("Cannot find module '" + t + "'");
          throw ((r.code = "MODULE_NOT_FOUND"), r);
        }
        return i[t];
      }
      (n.keys = function () {
        return Object.keys(i);
      }),
        (n.resolve = s),
        (t.exports = n),
        (n.id = 10437);
    },
  },
]);
