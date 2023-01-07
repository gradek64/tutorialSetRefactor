"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8125],
  {
    64254: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return F;
        },
      });
      var o = n(59499),
        i = n(37797),
        r = n(67294),
        l = n(18638),
        a = n(58069),
        d = n(71778),
        s = n(57243),
        c = n(50309),
        u = n(17534),
        g = n(88134),
        p = n(66720),
        f = n(74034),
        h = (0, i.ZP)(f.Z).withConfig({
          displayName: "CarouselTestimonialStyles__StyledSection",
          componentId: "sc-in4orf-0",
        })(
          ["background-color:", ";margin:", ";overflow:hidden;padding:0;"],
          function (e) {
            return e.backgroundColor || g.ZP.white;
          },
          function (e) {
            return e.margin ? e.margin : "0";
          }
        ),
        m = (0, i.iv)(
          [
            "display:block;height:auto;padding:64px 0;position:relative;width:100%;",
            "{padding:64px;}",
            "{padding:64px 20px;}",
          ],
          (0, u.X)(u.A.largeDesktop),
          (0, u.X)(u.A.desktop)
        ),
        x = (0, i.ZP)(s.Z).withConfig({
          displayName: "CarouselTestimonialStyles__StyledGraphicForeground",
          componentId: "sc-in4orf-1",
        })(
          [
            "bottom:",
            ";left:",
            ";position:absolute;right:",
            ";top:",
            ";z-index:1;",
          ],
          function (e) {
            return e.position.bottom;
          },
          function (e) {
            return e.position.left;
          },
          function (e) {
            return e.position.right;
          },
          function (e) {
            return e.position.top;
          }
        ),
        y = (0, i.ZP)(x).withConfig({
          displayName: "CarouselTestimonialStyles__StyledGraphicBackground",
          componentId: "sc-in4orf-2",
        })(["z-index:0;"]),
        b = (0, i.iv)(
          ["", "{margin:0 auto !important;}"],
          (0, u.X)(u.A.tablet)
        ),
        v = i.ZP.div.withConfig({
          displayName:
            "CarouselTestimonialStyles__StyledCarouselContentContainer",
          componentId: "sc-in4orf-3",
        })(
          [
            "cursor:",
            ";overflow-x:hidden;width:100%;&:active{cursor:",
            ";}",
            "{position:relative;}",
          ],
          function (e) {
            return e.cursor;
          },
          function (e) {
            return "grab" === e.cursor ? "grabbing" : "auto";
          },
          (0, u.X)(u.A.tablet, "min")
        ),
        C = (0, i.iv)(["display:inline-block;"]),
        S = i.ZP.button
          .attrs({ type: "button" })
          .withConfig({
            displayName:
              "CarouselTestimonialStyles__StyledCarouselSelectButton",
            componentId: "sc-in4orf-4",
          })(
          [
            "background-color:",
            ";border:none;border-radius:100%;cursor:pointer;height:",
            ";margin-right:8px;transition:all 0.2s ease;width:",
            ";&:last-of-type{margin-right:0;}",
          ],
          function (e) {
            return e.selected ? g.ZP.blue2 : g.ZP.blue4;
          },
          function (e) {
            return e.selected ? "24px" : "16px";
          },
          function (e) {
            return e.selected ? "24px" : "16px";
          }
        ),
        w = (0, i.ZP)(p.E.div).withConfig({
          displayName: "CarouselTestimonialStyles__MotionDiv",
          componentId: "sc-in4orf-5",
        })(["display:flex;"]),
        j = i.ZP.div.withConfig({
          displayName: "CarouselTestimonialStyles__StyledControlContainer",
          componentId: "sc-in4orf-6",
        })(["display:flex;justify-content:space-between;margin-top:40px;"]),
        _ = i.ZP.div.withConfig({
          displayName: "CarouselTestimonialStyles__StyledQuoteContainer",
          componentId: "sc-in4orf-7",
        })(
          [
            "align-items:center;background-color:",
            ";background-image:",
            ";background-repeat:no-repeat;background-size:cover;border-radius:24px;box-shadow:0 6px 20px -6px  ",
            ";display:flex;flex-direction:column;height:100%;justify-content:center;padding:64px 136px;",
            "{padding:64px;}",
            "{padding:20px;}",
          ],
          g.ZP.white,
          function (e) {
            return e.quoteBackgroundImage
              ? "url(".concat(e.quoteBackgroundImage, ")")
              : null;
          },
          (0, g.E9)(g.ZP.blueCPUInfo, 0.15),
          (0, u.X)(u.A.desktop),
          (0, u.X)(u.A.tablet)
        ),
        k = i.ZP.div.withConfig({
          displayName: "CarouselTestimonialStyles__StyledLogo",
          componentId: "sc-in4orf-8",
        })(["display:flex;max-height:64px;"]),
        P = i.ZP.q.withConfig({
          displayName: "CarouselTestimonialStyles__StyledQuote",
          componentId: "sc-in4orf-9",
        })(
          [
            "color:",
            ";font-family:",
            ";font-size:",
            ";font-weight:",
            ";letter-spacing:-1px;line-height:48px;margin:40px 0;text-align:center;",
          ],
          function (e) {
            return e.color ? e.color : g.ZP.gray3;
          },
          function (e) {
            return e.font;
          },
          function (e) {
            return e.size ? e.size : "36px";
          },
          function (e) {
            return e.weight;
          }
        ),
        I = i.ZP.p.withConfig({
          displayName: "CarouselTestimonialStyles__StyledAuthorName",
          componentId: "sc-in4orf-10",
        })(
          [
            "color:",
            ";font-size:20px;font-weight:500;line-height:28px;margin:0;text-align:center;",
          ],
          function (e) {
            return e.color ? e.color : g.ZP.gray4;
          }
        ),
        Z = i.ZP.img.withConfig({
          displayName: "CarouselTestimonialStyles__StyledLogos",
          componentId: "sc-in4orf-11",
        })([
          "display:inline-block;height:42px;margin:10px 10px 0 0;width:auto;",
        ]),
        T = (0, i.ZP)(I).withConfig({
          displayName: "CarouselTestimonialStyles__StyledAuthorInfo",
          componentId: "sc-in4orf-12",
        })(
          ["color:", ";font-size:16px;font-weight:400;line-height:24px;"],
          function (e) {
            return e.color ? e.color : null;
          }
        ),
        B = i.ZP.div.withConfig({
          displayName:
            "CarouselTestimonialStyles__StyledCarouselButtonContainer",
          componentId: "sc-in4orf-13",
        })(
          [
            "align-items:center;display:flex;justify-content:space-between;",
            "{display:none;}",
          ],
          (0, u.X)(u.A.tablet)
        ),
        N = i.ZP.button
          .attrs({ type: "button" })
          .withConfig({
            displayName: "CarouselTestimonialStyles__StyledNextPrevButton",
            componentId: "sc-in4orf-14",
          })(
          [
            "align-items:center;background-color:",
            ";border:none;border-radius:8px;color:",
            ";display:flex;padding:8px 32px;transition:background-color 0.2s ease;z-index:1;&:first-of-type{margin-right:16px;}&:hover{background-color:",
            ";cursor:pointer;}&:disabled{background-color:",
            ";cursor:auto;}",
          ],
          g.ZP.blue2,
          g.ZP.white,
          g.ZP.blue4,
          g.ZP.blue4
        ),
        A = i.ZP.div.withConfig({
          displayName: "CarouselTestimonialStyles__StaticCardsTitle",
          componentId: "sc-in4orf-15",
        })(
          [
            "text-align:center;width:100%;h2{margin-bottom:",
            ";margin-top:",
            ";max-width:",
            ";",
            "}",
          ],
          function (e) {
            return e.marginBottom || "32px";
          },
          function (e) {
            return e.marginTop || "0";
          },
          function (e) {
            return e.titleWidth || "600px";
          },
          function (e) {
            return e.fontSize && (0, i.iv)(["font-size:", ""], e.fontSize);
          }
        ),
        O = i.ZP.div.withConfig({
          displayName: "CarouselTestimonialStyles__StaticCardsSubText",
          componentId: "sc-in4orf-16",
        })(
          [
            "color:",
            ";display:flex;justify-content:center;text-align:center;a{color:",
            ";text-decoration:none;}p{font-size:16px;font-weight:400;line-height:24px;margin-bottom:",
            ";margin-top:",
            ";max-width:",
            ";width:100%;}",
          ],
          g.ZP.gray4,
          g.ZP.blueLight,
          function (e) {
            return e.marginBottom || "64px";
          },
          function (e) {
            return e.marginTop || "20px";
          },
          function (e) {
            return e.subtitleWidth || "640px";
          }
        ),
        z = n(85893);
      function D(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function M(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? D(Object(n), !0).forEach(function (t) {
                (0, o.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : D(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var W = function (e) {
          var t = e.field,
            n = t.author,
            o = t.authorDetails,
            i = t.logo,
            r = t.quote,
            l = t.quoteBackgroundImage,
            a = t.logos;
          return (0, z.jsxs)(
            _,
            {
              quoteBackgroundImage: l,
              children: [
                (null === i || void 0 === i ? void 0 : i.url) &&
                  (0, z.jsx)(k, { children: (0, z.jsx)(s.Z, { src: i.url }) }),
                (0, z.jsx)(
                  P,
                  M(
                    M({}, r),
                    {},
                    { children: null === r || void 0 === r ? void 0 : r.value }
                  )
                ),
                (0, z.jsx)(I, {
                  color: null === r || void 0 === r ? void 0 : r.color,
                  children: null === n || void 0 === n ? void 0 : n.value,
                }),
                (0, z.jsx)(T, {
                  color: null === r || void 0 === r ? void 0 : r.color,
                  children: null === o || void 0 === o ? void 0 : o.value,
                }),
                a &&
                  (0, z.jsx)("div", {
                    children: a.map(function (e) {
                      return (0, z.jsx)(Z, { src: e }, e);
                    }),
                  }),
              ],
            },
            null === r || void 0 === r ? void 0 : r.value
          );
        },
        E = (0, r.forwardRef)(function (e, t) {
          var n = (0, r.useState)(0),
            o = n[0],
            i = n[1],
            l = (0, r.useState)(0),
            a = l[0],
            d = l[1],
            s = e.children,
            c = e.id,
            u = e.fadeIn,
            g = e.selectColor,
            p = e.setCurrentCarouselIndex,
            f = e.maxWidth,
            h = e.hideArrows,
            m = e.externalSetSelected,
            b = e.graphicBackground,
            C = e.graphicForeground,
            S = e.dragabble,
            w = (0, r.useState)(!1)[1],
            _ = (0, r.useRef)(),
            k = function () {
              _.current && i(_.current.getBoundingClientRect().width);
            };
          (0, r.useEffect)(function () {
            window.addEventListener("resize", k), k();
          }, []),
            (0, r.useEffect)(
              function () {
                p && p(a);
              },
              [p, a]
            );
          var P = function (e) {
            var t, n, o;
            d(
              ((t = e),
              (n = 0),
              (o = s.length - 1),
              Math.max(n, Math.min(t, o)))
            );
          };
          return (
            (0, r.useImperativeHandle)(t, function () {
              return { changeSelected: P, selected: a };
            }),
            (0, z.jsxs)(L, {
              style: { maxWidth: f && f },
              id: c,
              children: [
                C &&
                  C.map(function (e) {
                    return (0,
                    z.jsx)(x, { position: e.position, src: e.url }, e.url);
                  }),
                b &&
                  b.map(function (e) {
                    return (0,
                    z.jsx)(y, { position: e.position, src: e.url }, e.url);
                  }),
                (0, z.jsx)($, {
                  children: (0, z.jsx)(v, {
                    ref: _,
                    cursor: S ? "grab" : "auto",
                    children: (0, z.jsx)("div", {
                      style: { width: o * s.length },
                      children: (0, z.jsx)(X, {
                        setIsBeingDragged: w,
                        setSelected: P,
                        externalSetSelected: m,
                        currentSelected: a,
                        width: o,
                        dragabble: S,
                        children: r.Children.map(s || null, function (e, t) {
                          return (0,
                          z.jsx)(q, { hideArrows: h, fadeIn: u, selected: a === t, width: o, children: e });
                        }),
                      }),
                    }),
                  }),
                }),
                (0, z.jsxs)(j, {
                  children: [
                    (0, z.jsx)(B, {
                      children:
                        !h &&
                        r.Children.map(s || null, function (e, t) {
                          return (0, z.jsx)(R, {
                            "aria-label": "slide ".concat(
                              t + 1,
                              " selection dot"
                            ),
                            onMouseUp: function () {
                              return w(!1);
                            },
                            onMouseDown: function () {
                              return w(!0);
                            },
                            selected: t === a,
                            onClick: function () {
                              d(t), m && m(t);
                            },
                            $_css: g,
                          });
                        }),
                    }),
                    !h &&
                      (0, z.jsxs)(B, {
                        children: [
                          (0, z.jsx)(N, {
                            disabled: 0 === a,
                            onClick: function () {
                              P(a - 1);
                            },
                            children: "<\u2014",
                          }),
                          (0, z.jsx)(N, {
                            disabled: a === s.length - 1,
                            onClick: function () {
                              P(a + 1), m && m(a + 1);
                            },
                            children: "\u2014>",
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            })
          );
        }),
        X = function (e) {
          var t = e.children,
            n = e.setSelected,
            o = e.currentSelected,
            i = e.width,
            a = e.setIsBeingDragged,
            d = e.externalSetSelected,
            s = e.dragabble,
            c = (0, l._)(),
            u = -o * i,
            g = (0, r.useState)(!1),
            p = g[0],
            f = g[1];
          return (
            c.start({ x: u }),
            (0, z.jsx)(w, {
              className: "draggable",
              drag: s ? "x" : "null",
              onDrag: function (e, t) {
                p ||
                  (t.offset.x < -i / 2
                    ? (n(o + 1), d && d(o + 1), c.stop(), f(!0))
                    : t.offset.x > i / 2 &&
                      (n(o - 1), d && d(o - 1), c.stop(), f(!0)));
              },
              onDragStart: function () {
                a(!0);
              },
              onDragEnd: function () {
                c.start({ x: u }), f(!1), a(!1);
              },
              animate: c,
              transition: { duration: 0.3 },
              children: t,
            })
          );
        },
        q = function (e) {
          var t = e.children,
            n = e.width,
            o = e.selected,
            i = e.fadeIn;
          return (0, z.jsx)(G, {
            className: o ? "selected" : "",
            style: { width: n },
            $_css2: i
              ? "transition: opacity 2s;\n            opacity: 0;\n            &.selected {\n              opacity: 1;\n            }"
              : "",
            children: t,
          });
        },
        F = function (e) {
          var t,
            n = e.content,
            o = n.backgroundColor,
            i = n.graphicBackground,
            r = n.graphicForeground,
            l = n.mainMargin,
            a = n.carouselMaxWidth,
            s = n.dragabble;
          return (0, z.jsxs)(h, {
            backgroundColor: o,
            margin: l,
            children: [
              (null === n || void 0 === n ? void 0 : n.topBackgroundImage) &&
                (0, z.jsx)(c.oZ, {
                  backgroundImage: n.topBackgroundImage,
                  backgroundColor: n.topBackgroundColor,
                }),
              (null === n || void 0 === n ? void 0 : n.title) &&
                (0, z.jsx)(A, {
                  titleWidth:
                    null === n || void 0 === n ? void 0 : n.titleWidth,
                  marginTop:
                    null === n || void 0 === n ? void 0 : n.titleMarginTop,
                  marginBottom:
                    null === n || void 0 === n ? void 0 : n.titleMarginBottom,
                  fontSize:
                    null === n || void 0 === n ? void 0 : n.titleFontSize,
                  children: (0, z.jsx)(d.Z, {
                    renderAs: "h2",
                    overrideColor:
                      null === n || void 0 === n ? void 0 : n.titleColor,
                    textAlign: "center",
                    children: n.title,
                  }),
                }),
              (null === n || void 0 === n ? void 0 : n.subTitle) &&
                (0, z.jsx)(O, {
                  subtitleWidth:
                    null === n || void 0 === n ? void 0 : n.subtitleWidth,
                  marginTop:
                    null === n || void 0 === n ? void 0 : n.subtitleMarginTop,
                  marginBottom:
                    null === n || void 0 === n
                      ? void 0
                      : n.subtitleMarginBottom,
                  children: (0, z.jsx)(d.Z, {
                    renderAs: "subheading",
                    children: n.subTitle,
                  }),
                }),
              (0, z.jsx)(E, {
                fadeIn: !0,
                graphicBackground: i,
                graphicForeground: r,
                hideArrows: n.hideArrows,
                maxWidth: a,
                dragabble: s,
                children:
                  null === n ||
                  void 0 === n ||
                  null === (t = n.items) ||
                  void 0 === t
                    ? void 0
                    : t.map(function (e) {
                        var t;
                        return (0,
                        z.jsx)(W, { field: e }, null === e || void 0 === e || null === (t = e.author) || void 0 === t ? void 0 : t.value);
                      }),
              }),
              (null === n || void 0 === n ? void 0 : n.bottomBackgroundImage) &&
                (0, z.jsx)(c.K3, {
                  backgroundImage: n.bottomBackgroundImage,
                  backgroundColor: n.bottomBackgroundColor,
                }),
            ],
          });
        };
      (E.displayName = "Carousel"),
        (E.defaultProps = {
          fadeIn: !1,
          maxWidth: null,
          selectColor: null,
          setCurrentCarouselIndex: null,
          hideArrows: null,
          externalSetSelected: null,
          dragabble: !0,
        }),
        (X.defaultProps = {
          externalSetSelected: null,
          setIsBeingDragged: null,
          dragabble: !0,
        });
      var L = (0, i.ZP)(a.Z).withConfig({
          displayName: "CarouselTestimonial___StyledContainer",
          componentId: "sc-jgjhyv-0",
        })(["", ""], m),
        $ = (0, i.ZP)("div").withConfig({
          displayName: "CarouselTestimonial___StyledDiv",
          componentId: "sc-jgjhyv-1",
        })(["", ""], b),
        R = (0, i.ZP)(S).withConfig({
          displayName: "CarouselTestimonial___StyledStyledCarouselSelectButton",
          componentId: "sc-jgjhyv-2",
        })(["&.selected{background-color:", ";}"], function (e) {
          return e.$_css;
        }),
        G = (0, i.ZP)("div").withConfig({
          displayName: "CarouselTestimonial___StyledDiv2",
          componentId: "sc-jgjhyv-3",
        })(["", " ", ""], C, function (e) {
          return e.$_css2;
        });
    },
  },
]);
