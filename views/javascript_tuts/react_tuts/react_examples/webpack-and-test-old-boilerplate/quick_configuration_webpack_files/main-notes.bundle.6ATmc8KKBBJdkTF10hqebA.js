(function(z) {
  "use strict";
  var A7 = function(a) {
      z.L.call(this);
      this.C(a);
    },
    B7 = function(a) {
      z.L.call(this);
      this.C(a);
    },
    T4a = function(a, b) {
      this.user = a;
      this.quotes = b;
    },
    U4a = function(a, b) {
      b = b.g();
      if (b === Number || b.$isProtoEnum)
        return (a = Number(a)), Number.isNaN(a) ? void 0 : a;
      if (b === Boolean) return !!a;
      if (b === String) return String(a);
    },
    C7 = function(a) {
      return a.UA.best || null;
    },
    D7 = function(a, b) {
      b = b.filter(function(a) {
        return "anon" != a.Ua();
      });
      b = z.nb(
        b,
        function(a) {
          return a.Ua();
        },
        a
      );
      return z.tb(b).map(function(a) {
        return new T4a(a[0].Zb(), a);
      }, a);
    },
    V4a = function(a, b, c, d) {
      return (0, z.Zd)(a.Ft[b.name] || [], function(a) {
        return a.ld() == c && a.ke() == d;
      });
    },
    E7 = function() {
      this.GF = 1;
    },
    F7 = function(a) {
      z.ni.call(this);
      this.C(a);
    },
    W4a = function(a, b) {
      return z.K(a, "slots", b);
    },
    X4a = function(a, b) {
      return z.K(a, "requestContext", b);
    },
    G7 = function(a) {
      z.L.call(this);
      this.C(a);
    },
    H7 = function(a) {
      return z.I(a, "inResponseToMediaResource");
    },
    I7 = function(a) {
      return z.I(a, "mediumQuote");
    },
    Y4a = function(a, b) {
      a.tN = b;
      return a;
    },
    J7 = function(a, b) {
      return C7(a)
        ? z.BD(C7(a)).filter(function(a) {
            return this.e0(a) == b;
          }, a)
        : [];
    },
    Z4a = function(a) {
      a = new Date(a);
      return Date.UTC(a.getFullYear(), a.getMonth() + 1, 1) - 1;
    },
    $4a = function(a) {
      var b = z
        .dN(a.Nj.dt, a.Nj.Cr(), a.Wl.dt, a.Wl.Cr())
        .ra()
        .trim();
      0 < a.Nj.Cr() && (b = "…" + b);
      var c = z.mE(a.ic, a.Wl.dt);
      a.Wl.Cr() < c.ra().length && (b += "…");
      return b;
    },
    a5a = function(a) {
      var b = z.eC(a.pua),
        c = a.Nj.dt,
        d = c ? b.indexOf(c) : -1,
        e = (c = a.Wl.dt) ? b.indexOf(c) : -1;
      if (-1 == d || -1 == e) return "";
      for (c = []; d <= e; d++) c.push(z.mE(a.ic, b[d]));
      b = z.Sa(c);
      a = z.ru(c.indexOf(c[0]), a.Nj.Cr(), c.indexOf(b), a.Wl.Cr(), !1);
      return z.mja(new z.eu(z.Pm, z.XCa), c, a, !0);
    },
    b5a = function(a, b, c) {
      c = c.$x;
      b = b.getAttribute("name").split(" ");
      var d = z.Jb(b);
      a = (a.Ft[c.name] || []).filter(function(a) {
        return d[a.Hi()];
      });
      return a.length ? z.nva(a) : null;
    },
    c5a = function(a, b, c, d) {
      b = V4a(a, b, c, d);
      return D7(a, b);
    },
    d5a = function(a, b) {
      var c = 0;
      (a.Ft[b] || []).forEach(function(a) {
        "anon" == a.Ua() && (c += a.ue());
      });
      return c;
    },
    e5a = function(a, b, c) {
      var d = a.U.R(z.GCa, { postId: b }, { filter: c });
      return z.ZD(a, d, function() {
        return this.qb.kl(d);
      });
    },
    f5a = function(a, b) {
      return z.wa(b) in a.Tz;
    },
    g5a = function(a, b) {
      z.Mt(a, 7);
      var c = new z.Dt("", 1, a.ra());
      b.forEach(function(a) {
        z.Kt(c, z.ut(a.startOffset, a.endOffset, [a.quoteId], [a.userId]));
      }, a);
      b = z.$ia(c);
      for (var d = z.aja(c, b), e = 0; e < b.length; e++) {
        var g = d[e];
        if (g.length) {
          for (var k = {}, l = [], q = 0; q < g.length; q++) {
            var r = g[q];
            k[z.I(r, "creatorIds")] = !0;
            l.push(r.getName());
          }
          g = b[e];
          q = e < b.length - 1 ? b[e + 1] : a.ra().length;
          z.Kt(a, z.ut(g, q, l, Object.keys(k)));
        }
      }
    },
    h5a = function(a) {
      if (!(a instanceof Array)) {
        a = z.ka(a);
        for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
        a = c;
      }
      return a;
    },
    K7 = function(a) {
      function b(a) {
        return function(c) {
          return g(c) ? [] : [].concat([e(a)(c)], h5a(b(a)(d(a)(c))));
        };
      }
      function c(a) {
        return function(b) {
          return function(c) {
            return a(b(c));
          };
        };
      }
      function d(a) {
        return function(b) {
          return b.slice(a);
        };
      }
      function e(a) {
        return function(b) {
          return b.slice(0, a);
        };
      }
      function g(a) {
        return 0 === a.length;
      }
      var k = " one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(
          " "
        ),
        l = "  twenty thirty forty fifty sixty seventy eighty ninety".split(
          " "
        ),
        q = " thousand million billion trillion quadrillion quintillion sextillion septillion octillion nonillion".split(
          " "
        );
      return "number" === typeof a
        ? K7(String(a))
        : "0" === a
          ? "zero"
          : c(b(3))(function(a) {
              return a.slice(0).reverse();
            })(a.split(""))
              .map(function(a) {
                var b = z.ka(a);
                a = b.next().value;
                var c = b.next().value,
                  b = b.next().value;
                return [
                  0 === (Number(b) || 0) ? "" : k[b] + " hundred ",
                  0 === (Number(a) || 0) ? l[c] : (l[c] && l[c] + "-") || "",
                  k[c + a] || k[a]
                ].join("");
              })
              .map(function(a, b) {
                return "" === a ? a : a + " " + q[b];
              })
              .filter(
                c(function(a) {
                  return !a;
                })(g)
              )
              .reverse()
              .join(" ")
              .trim();
    },
    i5a = function(a, b) {
      var c = a.text,
        d = a.l,
        e = "";
      a = "" + z.A(z.ti(a));
      a = (0, z.N)(a);
      e += z.A(
        z.O(
          {
            s: c,
            Mb: !0,
            Zd: !0,
            href: (0, z.M)("" + z.G(b.Xp)),
            source: a,
            style: "link.obvious",
            ca: !0,
            l: d
          },
          b
        )
      );
      return (0, z.y)(e);
    },
    j5a = function(a, b, c) {
      b = "";
      a.ABa
        ? (a = z.n("Top highlight"))
        : ((c =
            "" + z.A(z.hQ(z.D({ e1: !0, Aga: !c.useragent.isMobile }, a), c))),
          1 == a.ji && a.isActive && ((a = z.n("highlighted")), (c += " " + a)),
          (a = (0, z.y)(c)));
      b += a;
      return (0, z.y)(b);
    },
    L7 = function(a, b) {
      this.Vh = a;
      this.Tna = b;
      this.ye = (this.Bk = b = z.$B(a.node, b)) && b.getAttribute("name");
      this.hN = b ? z.ax(a, b) : -1;
    },
    M7 = function(a) {
      var b = a.length;
      a = a.match(k5a);
      if (!a) return b;
      for (var c = 0; c < a.length; c++) b += 23 - a[c].length;
      return b;
    },
    l5a = function(a, b, c) {
      return (0, z.y)(
        z.gP(z.D({ user: c.currentUser, type: "quoteResponses" }, a), c)
      );
    },
    m5a = function(a, b, c) {
      return (0, z.y)(
        z.A(
          z.Tk(
            {
              icon: (0, z.N)("" + z.A(z.pk())),
              ca: !0,
              action: "dismiss-meter",
              l: "js-dismissMeterButton"
            },
            c
          )
        )
      );
    },
    n5a = function(a, b) {
      var c = "";
      switch (a.OZ) {
        case 1:
          a = z.n("Smart stories. New ideas. No ads. $5/month.");
          c += a;
          break;
        case 2:
          a = z.n("Read smarter, not harder.");
          c += a;
          break;
        default:
          (a = z.n(
            "This is the only ad on {$productName}. You can make it go away.",
            { productName: z.A(b.productName) }
          )),
            (c += a);
      }
      return (0, z.y)(c);
    },
    N7 = function(a) {
      z.L.call(this);
      this.C(a);
    },
    o5a = function(a, b, c) {
      b =
        "\x3cdiv class\x3d'u-marginLeft10'\x3e\x3cdiv class\x3d\"buttonSet u-inlineBlock\"\x3e" +
        z.A(
          z.Tk(
            {
              action: "quote",
              source: "quote_popover",
              icon: (0, z.N)("" + z.A(z.Vda())),
              l: (0, z.N)(
                "button--highlightMenu u-sm-height42 u-sm-lineHeight44 u-accentColor--highlightStrong js-quoteAttributions-pileOn"
              ),
              Mb: !0,
              pk: !0,
              TO: "quote",
              ca: !0,
              isActive: a.isActive
            },
            c
          )
        ) +
        (c.supportsEdit
          ? z.A(
              z.Tk(
                {
                  action: "quote-respond",
                  source: "quote_popover",
                  icon: (0, z.N)("" + z.A(z.Zda())),
                  l: "button--highlightMenu u-sm-height42 u-sm-lineHeight44",
                  Mb: !0,
                  ca: !0
                },
                c
              )
            )
          : "") +
        (a.ER
          ? z.A(
              z.Tk(
                {
                  action: "twitter",
                  source: "quote_popover",
                  icon: (0, z.N)("" + z.A(z.vk(null))),
                  l: "button--highlightMenu u-sm-height42 u-sm-lineHeight44",
                  Mb: !0,
                  ca: !0
                },
                c
              )
            )
          : "") +
        '\x3cdiv class\x3d"buttonSet-separator"\x3e\x3c/div\x3e\x3c/div\x3e';
      b +=
        '\x3cdiv class\x3d"' +
        z.F(
          z.E(
            "js-quoteAttributions-info u-inlineBlock u-verticalAlignTop u-noWrapWithEllipsis u-maxWidth414 u-paddingTop11 u-paddingRight18 u-paddingBottom0 u-paddingLeft10 u-xs-paddingTop13 u-xs-paddingLeft4 u-xs-maxWidth160"
          )
        ) +
        '"\x3e' +
        j5a(a, 0, c) +
        "\x3c/div\x3e\x3c/div\x3e";
      return (0, z.y)(b);
    },
    O7 = function(a) {
      z.Rm.call(this);
      var b = z.jo();
      this.Nj = b && new L7(z.Zo(b, !0), a);
      this.Wl = b && new L7(z.Zo(b, !1), a);
    },
    P7 = function(a, b) {
      var c = new z.ui(z.Om(b)),
        c = new z.Ke(c.R(z.QBa)),
        d = new z.Ke("https://www.facebook.com/v2.7/dialog/share");
      z.Pe(
        d,
        z.bf({
          app_id: b.facebook.key,
          href: a.toString(),
          display: "popup",
          redirect_uri: c.toString()
        })
      );
      return d;
    },
    p5a = function(a, b, c) {
      function d(a) {
        return a
          .replace(/“/g, "‘")
          .replace(/”/g, "’")
          .replace(/„/g, "‚")
          .replace(/'/g, "’");
      }
      b.content = d(b.content);
      b.name && (b.name = d(b.name));
      var e = String(a(b, null, c)),
        g = M7(e) - 280;
      0 < g &&
        ((b.content = z.Wh(b.content, b.content.length - g)),
        (e = String(a(b, null, c))));
      return e;
    },
    q5a = function(a, b) {
      b = new z.ui(b.authBaseUrl);
      return new z.Ke(b.pp(a));
    },
    r5a = function() {
      var a = z.n("Highlights");
      return (0, z.y)("" + a);
    },
    s5a = function(a, b, c) {
      b =
        a.post.virtuals.responsesCreatedCount >= c.j.z2 &&
        (a.post.creator.userId == c.currentUser.userId ||
          (null == a.post.homeCollection
            ? null
            : null == a.post.homeCollection.virtuals
              ? null
              : null == a.post.homeCollection.virtuals.permissions
                ? null
                : a.post.homeCollection.virtuals.permissions.canManageAll));
      var d = z.D({ oFa: b }, a),
        d = d || {},
        e = d.oFa,
        d = z.y,
        g = (0, z.N)("" + z.A(z.nl()));
      c.supportsEdit && e
        ? ((e = {}),
          (e = e.l),
          (e =
            "" +
            z.A(
              z.Pk(
                {
                  gi: !0,
                  action: "show-responses-stream-editor",
                  l: z.E(
                    "js-showResponsesStreamEditorButton" + (e ? " " + e : "")
                  ),
                  s: (0, z.N)("" + z.A(z.uIa()))
                },
                c
              )
            )),
          (e = (0, z.y)(e)))
        : (e = "");
      a =
        "" +
        ('\x3cdiv class\x3d"container u-maxWidth740"\x3e\x3cdiv class\x3d"responsesStreamWrapper u-maxWidth640 u-hide js-responsesStreamWrapper"\x3e' +
          d(
            '\x3cdiv class\x3d"container responsesStream-title u-paddingTop15"\x3e\x3cdiv class\x3d"row"\x3e' +
              z.A(z.MO({ title: g, zI: !0, Gg: (0, z.N)("" + e) }, c)) +
              "\x3c/div\x3e\x3c/div\x3e"
          ) +
          z.zMa(z.D({ Ld: b }, a), c) +
          (b ? z.AMa(a, c) : "") +
          z.yMa(c) +
          "\x3c/div\x3e\x3c/div\x3e");
      return (0, z.y)(a);
    },
    t5a = function(a, b, c) {
      var d = a.OZ,
        e = a.l;
      b = "";
      var d = (c.useragent.isMobile && !c.useragent.isTablet) || 1 < d,
        g;
      g = (0, z.N)(
        "" +
          (d
            ? "u-bottom15 u-sm-bottom10"
            : "u-backgroundWhite u-boxShadowTop u-borderBottomLightest u-bottom0")
      );
      var k;
      k = (0, z.N)(
        "" +
          (d
            ? "u-backgroundWhite u-borderLightest u-boxShadow2px10pxBlackLighter u-borderRadius4"
            : "")
      );
      e =
        '\x3cdiv class\x3d"postMeterBar u-sizeFullWidth u-fixed ' +
        z.F(g) +
        (e ? " " + z.F(e) : "") +
        ' js-meterBanner" role\x3d"alert" aria-live\x3d"assertive"\x3e\x3cdiv class\x3d"u-borderBox u-maxWidth1040 u-marginAuto u-paddingTop25 u-paddingBottom25 u-paddingLeft20 u-paddingRight20 ' +
        (d ? z.F(k) : "") +
        ' u-sm-maxWidth740 u-xs-marginLeft10 u-xs-marginRight10 u-xs-paddingTop15 u-xs-paddingBottom15 u-xs-paddingLeft10 u-xs-paddingRight10"\x3e\x3cdiv class\x3d"u-flexCenter"\x3e' +
        z.A(
          z.Mz(
            {
              qc: !0,
              b1: !0,
              location: c.j.Uc.Zja,
              postId: a.post.id,
              authorId: a.post.creatorId,
              s: (0, z.N)(
                '\x3cdiv class\x3d"u-flex0 u-flexCenter"\x3e' +
                  (c.variants.enable_star_meter_ui ? z.QF(a, c) : z.PF(a, c)) +
                  "\x3c/div\x3e"
              )
            },
            c
          )
        ) +
        '\x3cdiv class\x3d"u-flex1 u-marginLeft20 u-marginTop8 u-xs-marginLeft10 u-xs-marginTop0"\x3e\x3cdiv class\x3d"' +
        z.F(z.om({ Wa: "small" })) +
        ' u-xs-hide"\x3e\x3cdiv class\x3d"ui-brand2"\x3e' +
        z.A(
          z.Nz(
            {
              location: c.j.Uc.SS,
              s: (0, z.N)("" + n5a(a, c)),
              postId: a.post.id,
              collectionId: a.post.homeCollectionId,
              authorId: a.post.creatorId,
              Yf: !0
            },
            c
          )
        ) +
        '\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"' +
        z.F(z.om({ Wa: "small" })) +
        ' u-xs-show"\x3e\x3cdiv class\x3d"ui-h4"\x3e' +
        z.A(
          z.Nz(
            {
              location: c.j.Uc.SS,
              s: (0, z.N)("" + n5a(a, c)),
              postId: a.post.id,
              collectionId: a.post.homeCollectionId,
              authorId: a.post.creatorId,
              Yf: !0
            },
            c
          )
        ) +
        '\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"u-flex0 u-marginLeft20 u-xs-marginLeft10 js-expandMeterButton"\x3e';
      g = "";
      k = "" + z.A(z.tO(null));
      k = (0, z.N)(k);
      if (c.useragent.isMobile)
        g += z.A(
          z.Tk(
            {
              icon: k,
              ca: !0,
              action: "expand-meter"
            },
            c
          )
        );
      else {
        var l = z.n("Details");
        g += z.A(
          z.Tk(
            {
              text: (0, z.N)("" + l),
              Fd: !0,
              icon: k,
              ca: !0,
              action: "expand-meter"
            },
            c
          )
        );
      }
      g = (0, z.y)(g);
      d =
        e +
        g +
        '\x3c/div\x3e\x3cdiv class\x3d"u-flex0 u-marginLeft40 u-flexCenter u-textColorNormal u-xs-marginLeft10 u-xs-hide js-dismissMeterIndicator"\x3e' +
        (d && !c.variants.enable_sticky_meter
          ? (0, z.y)(
              '\x3cfigure class\x3d"circleCountdown"\x3e\x3csvg role\x3d"img" xmlns\x3d"http://www.w3.org/2000/svg"\x3e\x3ccircle class\x3d"circleCountdown-fill" cx\x3d"50%" cy\x3d"50%" r\x3d"8px" /\x3e\x3c/svg\x3e\x3c/figure\x3e'
            )
          : m5a(0, 0, c)) +
        '\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"postMeterBar-details u-marginLeft137 u-paddingLeft20 u-paddingRight20 ' +
        z.F(z.om({ Wa: "regular" })) +
        ' u-sm-marginLeft137 u-xs-margin0 u-xs-padding0 js-moreInfo"\x3e\x3cp class\x3d"ui-body u-marginVertical10 u-xs-paddingTop10 u-xs-borderTopLight"\x3e';
      g = a.OZ;
      e = "";
      l = z.n(
        "We’ve built a better place on the internet for readers, not advertisers. This is the last free story in your member preview this month, so upgrade today for more big ideas and insightful stories — all without an ad in sight."
      );
      k = a.post.lockedPostSource == c.j.yv.vz;
      l = (0, z.N)("" + l);
      if (c.useragent.isMobile)
        if (k)
          switch (g) {
            case 1:
              g = z.n(
                "Enjoy daily, ad-free selections from The New York Times, The Atlantic, Fast Company, and more for $5/month."
              );
              e += g;
              break;
            default:
              (g = z.n(
                "Access dozens of ad-free selections daily from the world’s leading publications for $5/month."
              )),
                (e += g);
          }
        else
          switch (g) {
            case 1:
              g = z.n(
                "Welcome to your free member preview for this month. Upgrade for unlimited access"
              );
              e += g;
              c.isAuthenticated ||
                ((g = z.n("sign in")),
                (k = z.n(" or ")),
                (e +=
                  k +
                  i5a({ text: (0, z.N)("" + g), susiEntry: c.j.qa.y5 }, c)));
              e += ".";
              break;
            case 2:
              g = z.n(
                "You’ve read {$length} of the {$maxUnlockCount} stories in your free member preview this month.",
                {
                  length: z.A(K7(Number(a.meteringInfo.postIds.length))),
                  maxUnlockCount: z.A(K7(Number(a.meteringInfo.maxUnlockCount)))
                }
              );
              e += g;
              break;
            case 3:
              g = z.n(
                "This is the last free story in your member preview this month, so upgrade today for more big ideas and insightful stories."
              );
              e += g;
              break;
            default:
              (g = z.n(
                "This is the last free story in your member preview this month. Upgrade for unlimited access."
              )),
                (e += g);
          }
      else if (k)
        switch (g) {
          case 1:
            g = z.n(
              "Enjoy daily, ad-free selections from The New York Times, The Atlantic, Fast Company, and more, when you upgrade for $5/month."
            );
            e += g;
            break;
          case 3:
            e += z.A(l);
            break;
          default:
            (g = z.n(
              "Unlock the best of {$productName} when you upgrade for $5/month. Access dozens of ad-free selections daily from the world’s leading publications.",
              { productName: z.A(c.productName) }
            )),
              (e += g);
        }
      else
        switch (g) {
          case 1:
            g = z.n(
              "Members get unlimited access to the best stories on {$productName} — but you can read {$maxUnlockCount} for free each month. Upgrade for $5/month.",
              {
                productName: z.A(c.productName),
                maxUnlockCount: z.A(K7(Number(a.meteringInfo.maxUnlockCount)))
              }
            );
            e += g;
            c.isAuthenticated ||
              ((g = z.n("Already a member?")),
              (e +=
                '\x3cspan class\x3d"u-block u-marginTop20"\x3e' +
                g +
                " " +
                i5a({ text: (0, z.N)("Sign in"), susiEntry: c.j.qa.y5 }, c) +
                ".\x3c/span\x3e"));
            break;
          case 3:
            e += z.A(l);
            break;
          default:
            (g = z.n(
              "Unlock the best of {$productName} when you upgrade for $5/month. Access in-depth, insightful stories from top writers and leading experts.",
              { productName: z.A(c.productName) }
            )),
              (e += g);
        }
      e = (0, z.y)(e);
      b +=
        d +
        e +
        '\x3c/p\x3e\x3cdiv class\x3d"u-marginTop20 u-xs-marginTop15"\x3e' +
        z.A(
          z.Nz(
            {
              location: c.j.Uc.w5,
              Ra: !0,
              la: !0,
              dd: !0,
              Jh: !0,
              postId: a.post.id,
              collectionId: a.post.homeCollectionId,
              authorId: a.post.creatorId,
              l: "u-xs-sizeFullWidth"
            },
            c
          )
        ) +
        "\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e";
      return (0, z.y)(b);
    },
    u5a = function(a, b, c) {
      c = c || {};
      a = z.y;
      b =
        '\x3cdiv class\x3d"u-relative u-borderBox u-paddingHorizontal16 u-paddingVertical12 u-textAlignLeft ' +
        z.F(z.om({ Wa: "regular", caption: "regular" })) +
        ' js-writerControlsOnboarding" style\x3d"' +
        (c.Aa ? "/*" + c.Aa + "*/" : "") +
        'width: 166px;"\x3e\x3cdiv class\x3d"u-absolute" style\x3d"' +
        (c.Aa ? "/*" + c.Aa + "*/" : "") +
        'top: 0; right: 8px;"\x3e';
      c = (0, z.y)(
        z.A(
          z.Tk(
            {
              icon: (0, z.N)("" + z.A(z.pk())),
              ca: !0,
              action: "dismiss-writer-controls-onboarding",
              l: "js-dismissWriterControlsOnboarding"
            },
            c
          )
        )
      );
      return a(
        b +
          c +
          '\x3c/div\x3e\x3cspan class\x3d"u-textColorGreenNormal u-uiTextSemibold"\x3eNew!\x3c/span\x3e \x3cspan class\x3d"ui-caption"\x3eFind your writer controls here.\x3c/span\x3e\x3c/div\x3e'
      );
    },
    v5a = function(a, b, c) {
      var d = "";
      b = z.n("Cancel");
      var e = z.n("Copy"),
        g = z.n("Learn more"),
        k = z.n(
          "This link guarantees anyone free access to your story, even if they’ve read all of their complimentary stories for this month."
        ),
        g =
          '\x3cdiv class\x3d"u-textAlignLeft u-padding15 u-paddingVertical8 u-resetSpectrum"\x3e\x3cdiv class\x3d"popover-description"\x3e' +
          k +
          " " +
          z.A(
            z.O(
              { Xa: !0, href: c.j.K_, source: c.j.Ab.QD, s: (0, z.N)("" + g) },
              c
            )
          ) +
          '\x3c/div\x3e\x3cdiv class\x3d"u-flex u-borderBottomLighter u-borderBottomWidth2 u-paddingBottom5 u-marginTop20"\x3e\x3cinput class\x3d"u-textColorNormal u-textInput u-border0 u-lineHeightBase u-sizeFullWidth u-marginLeft0 u-marginRight16 js-friendLinkUrl" value\x3d"';
      a = (0, z.y)(
        z.A(
          z.yi(
            {
              post: a.post,
              Up: a.uniqueSlug,
              shareKey: a.shareKey,
              source: c.j.Ab.fK
            },
            0,
            c
          )
        )
      );
      d +=
        g +
        z.F(a) +
        '" disabled\x3d"disabled" /\x3e' +
        z.A(
          z.Pk(
            {
              action: "copy-community-link",
              s: (0, z.N)("" + e),
              isPrimary: !0,
              ca: !0,
              l: "js-friendLinkCopyButton"
            },
            c
          )
        ) +
        '\x3c/div\x3e\x3cdiv class\x3d"u-marginTop20"\x3e' +
        z.A(
          z.Pk(
            {
              action: "show-writer-controls-popover",
              s: (0, z.N)("" + b),
              isPrimary: !1,
              ca: !0
            },
            c
          )
        ) +
        "\x3c/div\x3e\x3c/div\x3e";
      return (0, z.y)(d);
    },
    w5a = function(a, b, c) {
      b = a.shareKey;
      var d = "",
        e = z.n("Edit story"),
        g =
          c.variants.enable_post_stats_page &&
          ((z.Du(c.currentUser) && c.currentUser.userId == a.post.creatorId) ||
            c.variants.enable_post_stats_page_for_everyone) &&
          (z.Qy(a.post.firstPublishedAt) ||
            c.variants.enable_post_stats_page_for_old_posts),
        d =
          d +
          ('\x3cul class\x3d"list list--borderless list--short u-resetSpectrum"\x3e\x3cli class\x3d"list-item u-xs-hide"\x3e' +
            z.A(
              z.O(
                {
                  Ra: !0,
                  href: (0, z.M)("" + z.G(z.Gi(a, c))),
                  s: (0, z.N)("" + e),
                  ca: !0
                },
                c
              )
            ) +
            "\x3c/li\x3e");
      g &&
        ((e = z.n("View stats")),
        (d +=
          '\x3cli class\x3d"list-item"\x3e' +
          z.A(
            z.O(
              {
                Ra: !0,
                href: (0, z.M)("" + z.G(z.iR(a, c))),
                s: (0, z.N)("" + e),
                ca: !0,
                l: "js-writerControlsStatsLink"
              },
              c
            )
          ) +
          "\x3c/li\x3e"));
      a = d;
      b
        ? ((b = ""),
          (d = "" + z.n("Share Friend Link")),
          (d = (0, z.N)(d)),
          (b += z.A(
            z.Pk(
              {
                action: "show-friend-link-popover",
                s: d,
                l: "js-friendLinkShareRow",
                ca: !0
              },
              c
            )
          )),
          (c = '\x3cli class\x3d"list-item"\x3e' + (0, z.y)(b) + "\x3c/li\x3e"))
        : (c = "");
      return (0, z.y)(a + (c + "\x3c/ul\x3e"));
    },
    Q7 = function(a, b, c) {
      z.P.call(this);
      this.ge = a.get("quotes-data");
      var d = this.ge.Xo;
      d.subscribe("add", this.F$, this);
      d.subscribe("remove", this.F$, this);
      this.Ka = b;
      this.be = b.Pl;
      this.am = c;
      this.X6 = [];
      this.ya = a.get("app");
      this.ma = a.get("popover");
      this.U = a.get("route-builder");
      this.iV = a.get("global-event-bus");
      this.Eua = a.get("progressive-media-loader");
    },
    y5a = function(a, b, c, d) {
      var e = x5a(a, b);
      if (e) {
        var g = a.Ka.isPublished(),
          k = z.Hva(a.Ka);
        e.ER = g && k;
        if (
          (c = z
            .AG(
              z.$C(
                z.ZC(z.aD(z.BF(z.bD(a.ma).Sa(o5a, e), z.CF), c), {
                  Q0: !0,
                  qI: !0,
                  la: !0
                }),
                "popover--quoteAttributions"
              ),
              d
            )
            .ba())
        )
          c.xk(
            "deactivate",
            function() {
              this.ep === b && R7(this, null);
            },
            a
          ),
            c
              .il()
              .J("quote", a.Soa.bind(a, c))
              .J("quote-respond", a.Toa.bind(a, c))
              .J("twitter", a.Uoa.bind(a));
      }
    },
    x5a = function(a, b) {
      if ("anon" == b.Ua()) return { isActive: !1, ABa: !0 };
      var c = S7(a, b),
        d = b.ld();
      b = b.ke();
      a = c5a(a.ge, c, d, b);
      if (!a || !a.length) return null;
      a = (0, z.Mb)(a, function(a) {
        return a.user;
      });
      c = (0, z.Zd)(a, function(a) {
        return a.userId != z.qr().userId;
      });
      return {
        isActive: (0, z.Jd)(a, function(a) {
          return a.userId == z.qr().userId;
        }),
        social: c,
        ji: a.length
      };
    },
    z5a = function(a, b) {
      a = a.be.querySelectorAll('.markup--quote[name~\x3d"' + b.Hi() + '"]');
      return z.bb(a);
    },
    S7 = function(a, b) {
      b = b.Sb()[0].name;
      return (b = z.ft(a.be, b)) ? a.Ka.Gi(b) : null;
    },
    A5a = function(a, b) {
      var c = z.ko(b);
      return (c = z.jF(a.am, c)) ? b5a(a.ge, b, c) : null;
    },
    R7 = function(a, b) {
      a.ep !== b && (a.ep && B5a(a, a.ep, !1), b && B5a(a, b, !0), (a.ep = b));
    },
    B5a = function(a, b, c) {
      z5a(a, b).map(function(a) {
        z.fe(a, "is-targeted", c);
      });
    },
    T7 = function(a, b) {
      (b = C5a(a, b)) && z.hF(a.Xj(), b);
    },
    C5a = function(a, b) {
      var c = b.Sb(),
        d = z.ft(a.be, c[0].getName());
      a = z.ft(a.be, z.Sa(c).getName());
      return z.dN(d, b.ld(), a, b.ke());
    },
    U7 = function(a, b, c, d) {
      a = { postId: a.Ka.wa(), quoteId: b, source: d };
      z.by(c ? z.zva : z.rEa, a);
    },
    D5a = function() {
      var a = z.n("Copied");
      return (0, z.y)("" + a);
    },
    E5a = function(a, b, c) {
      b = "";
      var d = z.n("Copy"),
        e = z.n("Learn more"),
        g = z.n(
          "This link guarantees anyone free access to your story, even if they’ve read all of their complimentary stories for this month."
        );
      b +=
        '\x3cdiv class\x3d"u-textAlignLeft u-padding10"\x3e\x3cdiv class\x3d"popover-description"\x3e' +
        g +
        " " +
        z.A(
          z.O(
            { Xa: !0, href: c.j.K_, source: c.j.Ab.QD, s: (0, z.N)("" + e) },
            c
          )
        ) +
        '\x3c/div\x3e\x3cdiv class\x3d"u-flex u-borderBottomLighter u-borderBottomWidth2 u-paddingBottom5 u-marginTop20"\x3e\x3cinput class\x3d"u-textColorNormal u-textInput u-border0 u-lineHeightBase u-sizeFullWidth u-marginLeft0 u-marginRight16 js-friendLinkUrl" value\x3d"' +
        z.F(z.Oua(a, c)) +
        '" disabled\x3d"disabled"/\x3e' +
        z.A(
          z.Pk(
            {
              action: "copy-community-link",
              s: (0, z.N)("" + d),
              isPrimary: !0,
              ca: !0,
              l: "js-friendLinkCopyButton"
            },
            c
          )
        ) +
        "\x3c/div\x3e\x3c/div\x3e";
      return (0, z.y)(b);
    },
    F5a = function(a, b) {
      z.dC(a, z.cC, z.gc(b, z.cc(!0)), void 0);
    },
    G5a = function(a, b, c) {
      z.ra(a) || (a = a.toString());
      var d = window,
        e = {
          scrollbars: !0,
          BEa: !0,
          toolbar: !1,
          location: !0,
          width: 670,
          height: 690
        };
      z.Db(e, c || {});
      e.left ||
        e.top ||
        ((e.width = (0, window.parseInt)(e.width, 10)),
        (e.height = (0, window.parseInt)(e.height, 10)),
        (e.left = Math.max(
          d.screenX + Math.round(d.outerWidth / 2 - e.width / 2),
          0
        )),
        (e.top = Math.max(
          d.screenY + Math.round(d.outerHeight / 2 - e.height / 2),
          0
        )));
      var g = {
        scrollbars: "scrollbars",
        BEa: "resizable",
        toolbar: "toolbar",
        location: "location",
        width: "width",
        height: "height",
        left: "left",
        top: "top"
      };
      c = z
        .nha(
          e,
          function(a, b, c) {
            g[c] &&
              ("boolean" == typeof b && (b = b ? "yes" : "no"),
              a.push(g[c] + "\x3d" + b));
            return a;
          },
          []
        )
        .join();
      return d.open(a, b, c);
    },
    H5a = function(a) {
      var b = z.Bw(z.Ywa, { yCa: !0 });
      b &&
        ((b = b.split(/\s+/)),
        (b = b.filter(function(a) {
          return !z.Ea(a);
        })),
        b.length && z.Yd(a, b));
    },
    I5a = function(a) {
      return (0, z.y)(
        z.A(z.ml(String(a.content))) + " — " + z.A(z.Us(a)) + " " + z.A(a.url)
      );
    },
    J5a = function(a, b, c) {
      return (0, z.ri)("https://" + z.wh(c.textshotHost) + "/image");
    },
    K5a = function(a, b, c) {
      return (0, z.ri)(
        "https://twitter.com/" +
          z.wh(c.currentUser.twitterScreenName) +
          "/status/" +
          z.wh(a.id)
      );
    },
    L5a = function() {
      var a = z.y,
        b;
      b = z.n("Failed to load image");
      b = (0, z.y)("" + b);
      return a(
        '\x3cspan class\x3d"tweetEditor-imageStatusIcon"\x3e\x26times;\x3c/span\x3e' +
          z.A(b)
      );
    },
    M5a = function(a, b, c) {
      b = z.y;
      a =
        '\x3cdiv class\x3d"tweetEditor u-sizeFullWidth"\x3e\x3cdiv class\x3d"js-tweetEditor-error tweetEditor-error u-paddingBottom10 u-textAlignCenter u-textColorRed"\x3e\x3c/div\x3e\x3cdiv class\x3d"tweetEditor-avatar"\x3e' +
        z.A(z.Cl({ user: a.user, rf: !0 }, c)) +
        '\x3c/div\x3e\x3cdiv class\x3d"tweetEditor-tweetContainer"\x3e\x3cdiv class\x3d"tweetEditor-textContainer"\x3e\x3cdiv class\x3d"js-tweetEditor-text textInput textInput--chromeless u-textAlignLeft"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"tweetEditor-textshot"\x3e\x3cdiv class\x3d"js-tweetEditor-imageStatus tweetEditor-imageStatus"\x3e';
      var d;
      d = z.n("Loading image attachment…");
      d = (0, z.y)("" + d);
      a = a + z.A(d) + "\x3c/div\x3e";
      d = {};
      d = (0, z.y)(
        z.Kj(
          z.D(
            {
              name: "addCircled",
              size: "21px",
              content: (0, z.N)(
                '\x3csvg class\x3d"svgIcon-use" width\x3d"21" height\x3d"21" \x3e\x3cpath d\x3d"M2.286 12.691a8.358 8.358 0 0 0 2.192 3.831A8.298 8.298 0 0 0 8.3 18.715c.73.19 1.462.288 2.192.29a8.363 8.363 0 0 0 2.2-.29 8.286 8.286 0 0 0 3.822-2.193 8.264 8.264 0 0 0 2.201-3.82c.19-.732.285-1.462.285-2.193a8.248 8.248 0 0 0-.285-2.2 8.265 8.265 0 0 0-2.2-3.823 8.258 8.258 0 0 0-3.822-2.2A8.66 8.66 0 0 0 10.5 2a8.188 8.188 0 0 0-2.192.286 8.33 8.33 0 0 0-3.831 2.2 8.298 8.298 0 0 0-2.193 3.822A8.66 8.66 0 0 0 2 10.5c0 .731.095 1.461.286 2.191zm1.557-.413a6.74 6.74 0 0 1-.239-1.773c0-.592.08-1.184.24-1.773a6.77 6.77 0 0 1 1.786-3.09 6.73 6.73 0 0 1 3.085-1.79c.59-.16 1.181-.24 1.777-.24.596 0 1.188.08 1.777.24a6.736 6.736 0 0 1 3.094 1.786 6.801 6.801 0 0 1 1.787 3.094c.16.59.239 1.178.239 1.768 0 .59-.08 1.182-.24 1.778a6.75 6.75 0 0 1-1.786 3.093 6.801 6.801 0 0 1-3.094 1.787 6.707 6.707 0 0 1-3.545 0A6.74 6.74 0 0 1 5.63 15.37a6.746 6.746 0 0 1-1.787-3.093zm2.937-2.055c0-.134.049-.25.148-.345a.494.494 0 0 1 .359-.143H9.23a.478.478 0 0 0 .35-.148.475.475 0 0 0 .147-.35V7.303c0-.141.048-.262.144-.363a.458.458 0 0 1 .345-.152h.562c.134 0 .25.05.35.152a.502.502 0 0 1 .147.363v1.934c0 .135.048.252.143.35a.46.46 0 0 0 .345.148h1.945c.14 0 .26.048.358.143.099.096.148.21.148.345v.562a.476.476 0 0 1-.148.35.486.486 0 0 1-.358.147h-1.945a.472.472 0 0 0-.345.143.47.47 0 0 0-.143.345v1.944c0 .14-.05.262-.148.36a.478.478 0 0 1-.35.147h-.56a.498.498 0 0 1-.489-.507V11.77a.461.461 0 0 0-.148-.345.487.487 0 0 0-.35-.143H7.287a.488.488 0 0 1-.36-.147.476.476 0 0 1-.147-.35v-.562z" fill-rule\x3d"evenodd"/\x3e\x3c/svg\x3e'
              )
            },
            d
          )
        )
      );
      d = (0, z.N)("" + z.A(d));
      var e;
      e = z.n("Include quote image");
      e = (0, z.y)("" + e);
      a =
        a +
        z.A(
          z.Tk(
            {
              icon: d,
              isPrimary: !0,
              ca: !0,
              l: "js-tweetEditor-addTextshot u-hide",
              action: "add-textshot",
              text: (0, z.N)("" + z.A(e))
            },
            c
          )
        ) +
        '\x3cdiv class\x3d"js-tweetEditor-imageContainer tweetEditor-imageContainer"\x3e';
      d = (0, z.N)("\x26times;");
      e = z.n("Remove quote image from tweet");
      e = (0, z.y)("" + e);
      return b(
        a +
          z.A(
            z.Pk(
              {
                s: d,
                Wc: !0,
                l: "js-tweetEditor-removeTextshot tweetEditor-removeTextshot",
                title: (0, z.N)("" + z.A(e)),
                action: "remove-textshot"
              },
              c
            )
          ) +
          '\x3cimg class\x3d"js-tweetEditor-image tweetEditor-image" data-action\x3d"toggle-expand-image"\x3e\x3c/img\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e' +
          (c.variants.textshots_userid
            ? '\x3cdiv class\x3d"u-textColorRed"\x3eTweet to test account @fuzzyoctopusfee\x3c/div\x3e'
            : "")
      );
    },
    N5a = function() {
      var a = z.n("An error occurred, and the tweet wasn’t posted to Twitter.");
      return (0, z.y)("" + a);
    },
    O5a = function(a, b, c) {
      var d = "";
      b = z.n("Tweet posted.");
      a = a.QFa;
      var e;
      e = z.n("View the tweet");
      e = (0, z.y)("" + e);
      d += b + " " + z.A(z.O({ Xa: !0, href: a, s: (0, z.N)("" + e) }, c));
      return (0, z.y)(d);
    },
    P5a = function(a, b, c) {
      a = z.n("Tweet must be {$twitterMaxTweetLength} characters or less.", {
        twitterMaxTweetLength: z.A(c.j.RFa)
      });
      return (0, z.y)("" + a);
    },
    Q5a = function(a) {
      if (!a) return "";
      var b = [],
        c = z.Bb(["grafId", "noteId", "command", "startIndex", "endIndex"]),
        d;
      for (d in a) b[c[d]] = a[d];
      return b.join("-");
    },
    R5a = function(a, b) {
      return a instanceof z.pd
        ? z.u(a.yc(!0), b, void 0)
        : z.u(z.Ld(a), b, void 0);
    },
    V7 = function(a) {
      z.zx.call(this);
      this.ic = a.get("dom-model-converter");
      this.s9 = {};
      this.i8 = {};
      this.kX = {};
      this.X = a;
      this.Vk = a.get("request");
      this.U = a.get("route-builder");
      this.ka = a.get("model-store");
      this.cb = "";
      this.Y9 = z.Dm;
      this.U6 = !1;
      this.kh = null;
    },
    W7 = function(a, b) {
      var c = a.s9[b];
      c || ((c = a.s9[b] = new z.wD()), a.fa("new_note_list", c, a));
      return c;
    },
    S5a = function(a, b) {
      if (!b) return !1;
      var c = b.ra();
      if (a.content == c.substring(a.startIndex, a.endIndex)) return !0;
      var d = new RegExp(z.Ja(a.content), "gi"),
        c = (b = d.exec(c)) && d.exec(c);
      return b && !c
        ? ((c = a.endIndex - a.startIndex),
          (a.startIndex = b.index),
          (a.endIndex = b.index + c),
          (a.content = b[0]),
          !0)
        : !1;
    },
    X7 = function(a, b, c) {
      var d = b.wa(),
        e = b.mg(),
        g = W7(a, b.Wd()),
        k = g ? g.indexOf(b) : -1,
        l = b.wu();
      b.fq(c);
      "HIDDEN" == c ? a.ka.remove(b) : (b = z.XC(a.ka, b));
      var q = g ? g.indexOf(b) : -1;
      return {
        al: a.Vk.put(a.U.R(z.ZBa, { postId: d, noteId: e }), { state: c }),
        ZI: function() {
          b.fq(l);
          -1 == q && (-1 == k ? g.add(b) : z.yD(g, b, k));
        }
      };
    },
    Y7 = function(a, b, c, d, e, g) {
      var k = z.I(a.yp(c, e), "replies"),
        l = z.Ta(k, function(a) {
          return a.Ux() == b;
        }),
        q = k[l];
      "HIDDEN" == g && z.Ya(k, l);
      c = a.U.R(z.bCa, { postId: d, noteId: c, replyId: b });
      a = a.Vk.put(c, { state: g });
      var r = z.Ta(k, function(a) {
        return a.Ux() == b;
      });
      return {
        al: a,
        ZI: function() {
          -1 == r && z.fb(k, l, 0, q);
        }
      };
    },
    T5a = function(a, b, c) {
      this.range = a;
      this.anchor = b;
      this.qB = b.getAttribute("name");
      this.highlight = c;
    },
    Z7 = function(a, b) {
      z.P.call(this);
      this.Pa = a.get("screen-request");
      this.qva = b;
      this.KT = [];
      this.Pv = null;
      this.mn = {};
      this.JX = !1;
      this.taa = null;
    },
    $7 = function(a, b, c) {
      z.P.call(this);
      this.va = a.get("screen");
      this.Kf = c;
      this.Ha(b);
    },
    a8 = function(a, b) {
      z.P.call(this);
      this.lb = a.get("dom-monitor");
      this.ub = a.get("element-tracker");
      this.ma = a.get("popover");
      this.va = a.get("screen");
      this.Mv = z.AC(a.get("activity-monitor"), 1e4);
      this.jG = a.get("placements-store");
      this.Ka = b;
      this.yF = !1;
    },
    U5a = function(a) {
      var b = a.query(".js-postActionsFooter");
      return b ? ((a = z.sC(a.ub)), 0 > z.$w(b).top - a.height) : !1;
    },
    V5a = function(a) {
      var b = a.query(".js-readNextMetabarRight");
      a.jG &&
        b &&
        z.u(a.jG.vu(2), function(a) {
          a && z.Aw(b, z.zQ, { items: a.items, context: 2 });
        });
    },
    b8 = function(a, b, c, d) {
      z.P.call(this);
      this.va = a.get("screen");
      this.nn = c;
      this.Kf = d;
      this.CM = !1;
      this.W = this.Ov = this.MA = this.N9 = null;
      this.Ha(b);
    },
    W5a = function(a) {
      return Math.floor((Z4a(a) - a) / 1e3);
    },
    c8 = function(a, b, c) {
      z.P.call(this);
      this.va = a.get("screen");
      this.AX = this.nn = null;
      this.W = b;
      this.Ka = c;
      this.Z = a.get("request");
      this.Sd = null;
      this.U = a.get("route-builder");
    },
    Y5a = function(a) {
      if (X5a(a)) {
        var b = a.U.R(z.Vya),
          c = a.W.id,
          d = Date.now(),
          e = z.I(z.Pm, "meterConfig").maxUnlockCount,
          g = z.aE.get("mpids") ? z.aE.get("mpids").split(",") : [];
        g &&
          !z.Xa(g, c) &&
          g.length < e &&
          (g.push(c), z.aE.set("mpids", g.join(","), W5a(d), "/"));
        return a.Z.put(b, { postIds: g });
      }
      return z.Ld({});
    },
    X5a = function(a) {
      var b = z.qr();
      return (
        a.W &&
        a.W.isSubscriptionLocked &&
        !z.Wl(b) &&
        a.W.creatorId != b.userId &&
        !(a.W && 3 == a.W.lockedPostSource && !z.rr()) &&
        !a.Sd
      );
    },
    d8 = function(a, b) {
      z.P.call(this);
      this.Sd = null;
      this.ma = a.get("popover");
      this.W = b;
      this.Z = a.get("request");
      this.va = a.get("screen");
      this.X = a;
    },
    e8 = function(a, b) {
      z.P.call(this);
      this.ya = a.get("app");
      this.Sd = null;
      this.ma = a.get("popover");
      this.W = b;
      this.Z = a.get("request");
      this.va = a.get("screen");
      this.X = a;
    },
    f8 = function(a, b, c, d) {
      z
        .ZC(z.aD(z.bD(a.ma), b).Sa(c, d), {
          Bc: !0,
          sI: !0
        })
        .zg(a.va.query(".js-metabar"))
        .ba();
    },
    Z5a = function(a, b) {
      return (a = a.ma.Ec()) ? a.Wd() : b.target;
    },
    g8 = function(a) {
      z.P.call(this);
      this.jG = a.get("placements-store");
    },
    $5a = function(a) {
      a.jG &&
        z.u(a.jG.vu(1), function(b) {
          b && z.Aw(a.V(), z.zQ, { items: b.items, context: 9 });
        });
    },
    h8 = function(a) {
      z.P.call(this);
      this.ub = a.get("element-tracker");
      this.VN = this.wX = null;
      this.p9 = [];
      this.bH = 0;
      this.fZ = a6a;
      this.AU = this.BU = null;
    },
    b6a = function(a, b) {
      return (0, z.Jd)(a.p9, function(a) {
        a = a.$c();
        return z.to(b, a);
      });
    },
    c6a = function(a) {
      return z.nKa(a.wX).map(function(b) {
        return z.oC(a.ub, b);
      });
    },
    i8 = function(a, b) {
      z.P.call(this);
      this.X = a;
      this.ub = a.get("element-tracker");
      this.Ka = b;
      this.Q9 = this.Ka.Pl;
      this.V9 = this.vX = null;
    },
    j8 = function() {},
    d6a = function(a) {
      this.gN = a;
    },
    k8 = function(a, b) {
      return b ? z.ft(a.gN, b) : null;
    },
    e6a = function(a, b, c) {
      F5a(a.gN, function(a) {
        var e = a.getAttribute("name");
        e && b.call(c, a, e);
      });
    },
    f6a = function(a, b) {
      return z.Mg(a.gN, b) ? a.gN : null;
    },
    l8 = function(a, b, c, d, e) {
      z.ZW.call(this, a, b);
      this.Ia(new z.rW(c));
      this.Ia(new z.mX(!1));
      this.Ia(new z.pX(a));
      this.Ia(new z.$W());
      this.Ia(new z.sX(a, !1, !1));
      this.Ia(new z.sU(d, !0));
      this.Qk = !0;
      this.$l = d;
      this.Vk = a.get("request");
      this.pa = a.get("dialog");
      this.RW = e;
      this.ba();
    },
    g6a = function() {
      var a = z.n(
        "Saving failed. You may be having connectivity issues or notes might be disabled on this post. Please try again."
      );
      return (0, z.y)("" + a);
    },
    h6a = function() {
      var a = z.n(
        "Yikes! Something happened and we couldn’t dismiss this note."
      );
      return (0, z.y)("" + a);
    },
    i6a = function() {
      var a = z.n(
        "Yikes! Something happened and we couldn’t delete this note."
      );
      return (0, z.y)("" + a);
    },
    j6a = function() {
      var a = z.n(
        "Yikes! Something happened and we couldn’t delete this reply."
      );
      return (0, z.y)("" + a);
    },
    k6a = function() {
      var a = z.n("The note has been dismissed.");
      return (0, z.y)("" + a);
    },
    l6a = function() {
      var a = z.n("The note has been deleted.");
      return (0, z.y)("" + a);
    },
    m6a = function() {
      var a = z.n("The reply has been deleted.");
      return (0, z.y)("" + a);
    },
    n6a = function() {
      var a = z.n("Write a note…");
      return (0, z.y)("" + a);
    },
    o6a = function() {
      var a = z.n("Cancel");
      return (0, z.y)("" + a);
    },
    m8 = function(a, b, c, d, e) {
      l8.call(this, a, b, e || "Leave a note", 400, d || null);
      this.cb = c;
      this.U = a.get("route-builder");
      this.af = a.get("notes-data");
    },
    n8 = function(a, b, c, d, e, g) {
      l8.call(this, a, b, "Leave a reply…", 200, d);
      this.U = a.get("route-builder");
      this.af = a.get("notes-data");
      this.cb = c;
      this.B$ = g || null;
      this.ye = e;
    },
    q6a = function(a, b, c) {
      var d = '\x3cdiv class\x3d"quoteResponses js-quoteResponses"\x3e',
        e = a.quotes.length,
        g = a.responses.length || a.Z3;
      b = a.notes.length || a.AR;
      if (e || g || b) {
        if (e) {
          var e =
              '\x3cdiv class\x3d"quoteResponses-section"\x3e' +
              z.A(
                z.Iz(
                  {
                    title: (0, z.N)(
                      z.A(r5a()) + " (" + z.A(a.quotes.length) + ")"
                    ),
                    Xf: !0
                  },
                  c
                )
              ),
            k;
          k = { Ofa: a.quotes, nGa: !0 };
          var l = '\x3cdiv class\x3d"js-quotesList"\x3e';
          if (!k.nGa)
            var q = z.n("Learn more"),
              l =
                l +
                z.A(
                  z.Iz(
                    {
                      title: (0, z.N)("" + z.A(r5a())),
                      Xf: !0,
                      Gg: (0, z.N)(
                        "" +
                          z.A(
                            z.Hz(
                              {
                                href: (0, z.M)(
                                  "" +
                                    z.G(
                                      (0, z.ri)(
                                        "https://medium.com/the-story/introducing-highlights-a4df69e8ed43"
                                      )
                                    )
                                ),
                                moreText: (0, z.N)("" + q),
                                fb: !0
                              },
                              c
                            )
                          )
                      )
                    },
                    c
                  )
                );
          for (
            var q =
                "list u-marginTop5 u-marginBottom15" +
                (k.Ofa.length ? "" : " u-hide"),
              q = (0, z.N)(q),
              l = l + ('\x3cul class\x3d"' + z.F(q) + '"\x3e'),
              q = k.Ofa,
              r = q.length,
              t = 0;
            t < r;
            t++
          ) {
            for (
              var w = q[t], C = "", J = w.quotes, Q = J.length, R = 0;
              R < Q;
              R++
            )
              C += "" + J[R].quoteId + (R != Q - 1 ? "," : "");
            C = z.E(C);
            l +=
              '\x3cli class\x3d"list-item list-item--inline u-border0" data-quote-ids\x3d"' +
              z.F(C) +
              '" data-quote-creator-id\x3d"' +
              z.F(w.user.userId) +
              '" data-action\x3d"highlight-quote" data-action-type\x3d"hover"\x3e' +
              z.A(z.Al(z.D({ user: w.user, Ge: !0 }, k), c)) +
              "\x3c/li\x3e";
          }
          k = (0, z.y)(l + "\x3c/ul\x3e\x3c/div\x3e");
          e = e + z.A(k) + "\x3c/div\x3e";
        } else e = "";
        g
          ? ((g =
              '\x3cdiv class\x3d"quoteResponses-section' +
              (a.Z3 ? " is-withEditor" : "") +
              '"\x3e' +
              z.A(z.Iz({ title: (0, z.N)("" + z.A(z.nl())), Xf: !0 }, c))),
            a.Z3 && c.supportsEdit && c.isAuthenticated
              ? ((k = {}),
                (k = (0, z.y)(
                  '\x3cdiv class\x3d"js-inlineNewPostControl inlineNewPostControl inlineNewPostControl--quoteResponses"\x3e' +
                    z.gP(
                      z.D(
                        {
                          user: c.currentUser,
                          isCollapsed: !0,
                          nC: !0,
                          type: "quoteResponses",
                          Vu: (0, z.N)("" + z.A(z.$ea()))
                        },
                        k
                      ),
                      c
                    ) +
                    "\x3c/div\x3e"
                )),
                (k = z.A(k)))
              : (k = ""),
            (g = g + k + p6a(a, 0, c) + "\x3c/div\x3e"))
          : (g = "");
        d += e + g;
        if (a.EDa && b) {
          g = z.n("Who can see this?");
          d +=
            '\x3cdiv class\x3d"quoteResponses-section quoteResponses-section--fullBleed u-paddingLeft0 u-paddingRight0"\x3e';
          e = b = "";
          k = a.post.homeCollection;
          k =
            a.post.creator.userId != c.currentUser.userId
              ? k
                ? z.n(
                    "Private notes are visible to you, the author, and the editors of {$name}.",
                    { name: z.A(k.name) }
                  )
                : z.n(
                    "Private notes are visible to you, the author, and the editors of any publication this story is added to."
                  )
              : k
                ? z.n(
                    "Private notes are visible to you and the editors of {$name}.",
                    { name: z.A(k.name) }
                  )
                : z.n(
                    "Private notes are visible to you and the editors of any publication this story is added to."
                  );
          e += k;
          e = (0, z.y)(e);
          e = "" + z.A(e);
          e = (0, z.N)(e);
          b +=
            '\x3cspan data-tooltip\x3d"' +
            z.F(e) +
            '"\x3e' +
            g +
            "\x3c/span\x3e";
          g = {};
          g = (0, z.y)(
            z.Kj(
              z.D(
                {
                  name: "lock",
                  size: "19px",
                  content: (0, z.N)(
                    '\x3csvg class\x3d"svgIcon-use" width\x3d"19" height\x3d"19" \x3e\x3cpath d\x3d"M14 14.052a1 1 0 0 1-.992.998H5.992A.99.99 0 0 1 5 14.052v-4.004a1 1 0 0 1 .992-.998h7.016a.99.99 0 0 1 .992.998v4.004zM7 5.445C7 4.187 8.114 3.15 9.5 3.15c1.385 0 2.5 1.04 2.5 2.295V8.05H7V5.445zm6.008 2.605H13V5.445c0-1.822-1.578-3.295-3.5-3.295C7.577 2.15 6 3.618 6 5.445V8.05h-.008A2 2 0 0 0 4 10.048v4.004a1.99 1.99 0 0 0 1.992 1.998h7.016A2 2 0 0 0 15 14.052v-4.004a1.99 1.99 0 0 0-1.992-1.998z" fill-rule\x3d"evenodd"/\x3e\x3c/svg\x3e'
                  )
                },
                g
              )
            )
          );
          g = (0, z.N)("" + z.A(g));
          e = z.n("Private notes");
          e = (0, z.y)("" + e);
          b = {
            KFa: g,
            title: (0, z.N)("" + z.A(e)),
            Xf: !0,
            Gg: (0, z.N)(b),
            l: "heading--privateNotes"
          };
          b = (0, z.y)(
            z.Fz(z.D({ zi: (0, z.N)("" + z.Gz(b, c)), sCa: !0 }, b))
          );
          b = d += z.A(b);
          d =
            "" +
            ('\x3cdiv class\x3d"privateNotes-list js-notesList' +
              (a.AR ? " is-showingNoteEditor" : "") +
              (0 == a.notes.length ? " is-empty" : "") +
              '"\x3e');
          g = a.notes;
          e = g.length;
          for (k = 0; k < e; k++)
            d += o8({ note: g[k], post: a.post, yJ: a.yJ }, 0, c);
          a.AR
            ? ((g = a.post.creator),
              (a = ""),
              (g =
                c.currentUser.userId == g.userId
                  ? z.n("Leave yourself a note")
                  : z.n("Send {$name} a private note…", { name: z.A(g.name) })),
              (a += g),
              (a = (0, z.y)(a)),
              (a =
                '\x3cdiv class\x3d"privateNotes-actions js-noteActions"\x3e' +
                z.A(
                  z.Sk(
                    {
                      action: "show-note-editor",
                      text: (0, z.N)("" + z.A(a)),
                      l: "privateNotes-prompt"
                    },
                    0,
                    c
                  )
                )),
              (g = z.y),
              (e =
                '\x3cdiv class\x3d"privateNotes-editor"\x3e' +
                z.A(z.Bl({ user: c.currentUser, rf: !0 }, c)) +
                '\x3cdiv class\x3d"js-noteEditor"\x3e\x3c/div\x3e\x3cdiv class\x3d"buttonSet"\x3e'),
              (k = z.n("Send")),
              (k = (0, z.y)("" + k)),
              (c = g(
                e +
                  z.A(
                    z.Sk(
                      {
                        action: "save-note",
                        isPrimary: !0,
                        l: "js-saveNoteButton",
                        text: (0, z.N)("" + z.A(k))
                      },
                      0,
                      c
                    )
                  ) +
                  z.A(
                    z.Sk(
                      {
                        action: "hide-note-editor",
                        text: (0, z.N)("" + z.A(o6a()))
                      },
                      0,
                      c
                    )
                  ) +
                  "\x3c/div\x3e\x3c/div\x3e"
              )),
              (c = a + c + "\x3c/div\x3e"))
            : (c = "");
          c = (0, z.y)(d + ("\x3c/div\x3e" + c));
          d =
            b +
            ('\x3cdiv class\x3d"quoteResponses-inner privateNotes"\x3e' +
              c +
              "\x3c/div\x3e\x3c/div\x3e");
        }
      } else
        0 < a.jD &&
          ((a = z.n("Show next tip")),
          (b = z.n("Show previous tip")),
          (d +=
            '\x3cdiv class\x3d"quoteResponses-section quoteResponses-section--fullBleed quoteResponses-section--tips u-textAlignCenter u-paddingLeft0 u-paddingRight0"\x3e\x3cdiv class\x3d"quoteResponses-section--tipsInner u-alignMiddle"\x3e' +
            z.A(
              z.Tk(
                {
                  sb: !0,
                  Wc: !0,
                  ca: !0,
                  action: "previous-highlight-tip",
                  icon: (0, z.N)("" + z.A(z.Lda())),
                  title: (0, z.N)("" + b)
                },
                c
              )
            ) +
            "\x3cdiv class\x3d'u-alignBlock quoteResponses-section--tipsContent u-paddingLeft20 u-paddingRight20 js-highlightTip'\x3e\x3c/div\x3e" +
            z.A(
              z.Tk(
                {
                  sb: !0,
                  Wc: !0,
                  ca: !0,
                  action: "next-highlight-tip",
                  icon: (0, z.N)("" + z.A(z.Mda())),
                  title: (0, z.N)("" + a)
                },
                c
              )
            ) +
            "\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e"));
      return (0, z.y)(d + "\x3c/div\x3e");
    },
    p6a = function(a, b, c) {
      return (0, z.y)(
        z.A(
          z.DQ(
            {
              posts: a.responses,
              source: "quoteResponses",
              dQ: !0
            },
            0,
            c
          )
        )
      );
    },
    o8 = function(a, b, c) {
      var d,
        e = null == a.note.replies ? null : a.note.replies.length,
        g = null == a.note.replyId,
        k = a.post.creator.userId == c.currentUser.userId,
        l = a.post.creator.userId == a.note.author.userId;
      d = a.note.author.userId == c.currentUser.userId;
      b =
        k ||
        (null == a.post.homeCollection
          ? null
          : a.post.homeCollection.virtuals.permissions.canEditPosts);
      var q =
          "" +
          (g
            ? "js-note-item" +
              (a.note.noteId ? " js-note-" + a.note.noteId : "")
            : "js-reply-item" +
              (a.note.replyId ? " js-reply-" + a.note.replyId : "")),
        q = z.E(q),
        q =
          '\x3cdiv class\x3d"privateNotes-item ' +
          z.F(q) +
          ' js-note" data-note-id\x3d"' +
          z.F(a.note.noteId) +
          '"\x3e' +
          (g
            ? z.A(z.Al({ user: a.note.author }, c))
            : z.A(z.dO({ user: a.note.author }, c))) +
          '\x3cdiv class\x3d"privateNotes-authorLockup"\x3e\x3cdiv class\x3d"privateNotes-author"\x3e' +
          z.A(z.cl({ user: a.note.author }, c));
      g ||
      !(
        k ||
        d ||
        (null == a.post.homeCollection
          ? 0
          : a.post.homeCollection.virtuals.permissions.canEditPosts)
      ) ||
      l ||
      a.pea
        ? (k = "")
        : ((k = z.n("(Editor)")),
          (k = (0, z.y)("" + k)),
          (k =
            '\x3cspan class\x3d"privateNotes-author--supplemental"\x3e ' +
            z.A(k) +
            "\x3c/span\x3e"));
      q =
        q +
        k +
        '\x3c/div\x3e\x3cdiv class\x3d"privateNotes-supplemental"\x3e' +
        z.A(z.Rh(Number(a.note.createdAt), c)) +
        '\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"privateNotes-content js-privateNotesContent"\x3e';
      k = z.A(z.Hu(String(a.note.content), c));
      l = String(k).replace(/(\r\n|\r|\n)/g, "\x3cbr\x3e");
      k = z.Wg(k, z.Yg) ? (0, z.y)(l, z.Yba(k)) : l;
      d =
        "" +
        (q +
          k +
          "\x3c/div\x3e" +
          (d ? r6a({ note: a.note, isPrimary: g }, c) : ""));
      if (g) {
        d +=
          '\x3cdiv class\x3d"privateNotes-replies' +
          (e ? "" : " is-empty") +
          ' js-repliesList"\x3e';
        if (e)
          for (e = a.note.replies, g = e.length, q = 0; q < g; q++)
            (k = e[q]),
              (d += o8(
                {
                  note: k,
                  post: a.post,
                  pea: a.note.author.userId == k.author.userId
                },
                0,
                c
              ));
        e = d;
        a.yJ
          ? ((g = z.y),
            (d =
              '\x3cdiv class\x3d"privateNotes-editor privateNotes-editor--reply"\x3e' +
              z.A(z.JQ({ user: c.currentUser, rf: !0 }, c)) +
              '\x3cdiv class\x3d"js-replyEditor"\x3e\x3c/div\x3e\x3cdiv class\x3d"buttonSet"\x3e'),
            (q = z.n("Send")),
            (q = (0, z.y)("" + q)),
            (g = g(
              d +
                z.A(
                  z.Sk(
                    {
                      action: "save-reply",
                      isPrimary: !0,
                      text: (0, z.N)("" + z.A(q))
                    },
                    0,
                    c
                  )
                ) +
                z.A(
                  z.Sk(
                    {
                      action: "hide-reply-editor",
                      text: (0, z.N)("" + z.A(o6a()))
                    },
                    0,
                    c
                  )
                ) +
                "\x3c/div\x3e\x3c/div\x3e"
            )))
          : (g = "");
        g =
          "\x3c/div\x3e" +
          g +
          '\x3cdiv class\x3d"privateNotes-actions' +
          (b ? " privateNotes-actions--withDismiss" : "") +
          ' u-clearfix"\x3e';
        a.yJ
          ? ((d = z.y),
            (q = z.n("Reply")),
            (q = (0, z.y)("" + q)),
            (d =
              '\x3cdiv class\x3d"u-floatLeft"\x3e' +
              d(
                z.A(
                  z.Sk(
                    {
                      isPrimary: !0,
                      action: "show-reply-editor",
                      l: "privateNotes-prompt",
                      text: (0, z.N)("" + z.A(q))
                    },
                    0,
                    c
                  )
                )
              ) +
              "\x3c/div\x3e"))
          : (d = "");
        d =
          e +
          (g +
            d +
            (b
              ? '\x3cdiv class\x3d"u-floatRight"\x3e' +
                r6a({ note: a.note, isPrimary: !0, Wda: !0 }, c) +
                "\x3c/div\x3e"
              : "") +
            "\x3c/div\x3e");
      }
      return (0, z.y)(d + "\x3c/div\x3e");
    },
    r6a = function(a, b) {
      var c = z.y,
        d = a.isPrimary ? a.note.noteId : a.note.replyId,
        e = a.Wda
          ? "dismiss-note"
          : a.isPrimary ? "delete-note" : "delete-reply";
      a = a.Wda ? z.n("Dismiss note") : z.n("Delete");
      a = (0, z.y)("" + a);
      a = z.A(a);
      return c(
        z.A(
          z.Sk(
            {
              actionValue: d,
              action: e,
              l: "privateNotes-delete js-deleteNote",
              text: (0, z.N)("" + a)
            },
            0,
            b
          )
        )
      );
    },
    s6a = function(a, b, c) {
      b = "";
      if (0 == a.N3)
        (a =
          1 == a.jD
            ? z.n(
                "People highlighted this passage. You can click on an existing highlight to add to it, like below:"
              )
            : z.n(
                "{$topQuoteCount} people highlighted this passage. You can click on an existing highlight to add to it, like below:",
                { topQuoteCount: z.A(a.jD) }
              )),
          (b += a),
          (b +=
            '\x3cimg class\x3d"quoteResponses-tipAnimation" src\x3d"' +
            z.F(z.Hh(z.vj({ imageId: "1*SyXCciYXeNpx4-GUAuh0XQ.gif" }, 0, c))) +
            '"\x3e');
      else if (1 == a.N3)
        (a = z.n(
          "Or, select any passage to create your own highlight and tell the author and others what resonated with you:"
        )),
          (b +=
            a +
            '\x3cimg class\x3d"quoteResponses-tipAnimation" src\x3d"' +
            z.F(z.Hh(z.vj({ imageId: "1*dEp02HXMKtAeKxsV5MWqGg.gif" }, 0, c))) +
            '"\x3e');
      else if (2 == a.N3) {
        a = z.n(
          "so that you can save your highlights and share them with others."
        );
        var d = z.n("Sign up and create a profile");
        b +=
          z.A(
            z.Sk(
              {
                text: (0, z.N)("" + d),
                Mb: !0,
                source: (0, z.N)(
                  "" + z.A(z.ti({ name: c.j.Ab.Nia, susiEntry: c.j.qa.GD }))
                ),
                l: "u-textUnderline"
              },
              0,
              c
            )
          ) +
          " " +
          a;
      }
      return (0, z.y)(b);
    },
    p8 = function(a, b, c, d, e, g, k, l) {
      z.P.call(this);
      this.X = a;
      this.ha = a.get("butter-bar");
      this.Ka = b;
      this.ye = c;
      this.Hj = e;
      this.ge = a.get("quotes-data");
      this.af = a.get("notes-data");
      this.aj = a.get("responses-data");
      this.Se = g;
      this.RW = d;
      this.PX = (this.uG = k) ? k.Hi() : null;
      this.vf = this.Ic = null;
      this.Kj = {};
      this.u8 = !!z.rr();
      this.v8 = !!z.tr();
      this.sA = this.u8 && this.v8 && z.tF(b);
      this.Hq = null;
      this.oM = 0;
      this.Iaa = d5a(this.ge, this.ye);
      this.sw = l;
      this.Ha(this.xq());
      this.w9 = z.rr() ? 2 : 3;
    },
    t6a = function(a) {
      a.Za(".js-block").forEach(function(a) {
        this.Ea(a, "mouseenter", this.wpa, this);
        this.Ea(a, "mouseleave", this.gZ, this);
      }, a);
    },
    u6a = function(a) {
      a.Za(".js-note").forEach(function(a) {
        this.Ea(a, "mouseenter", this.upa, this);
        this.Ea(a, "mouseleave", this.gZ, this);
      }, a);
    },
    v6a = function(a, b) {
      var c = a.query(".js-note-" + b);
      a.Kj[b] ||
        ((a.Kj[b] = new n8(
          a.X,
          c.querySelector(".js-replyEditor"),
          a.Ka.wa(),
          b,
          a.ye
        )),
        z.Bx(a, a.Kj[b], "saving", a.Tsa, a),
        z.Bx(a, a.Kj[b], "save", a.Osa, a),
        z.Bx(a, a.Kj[b], "fail", a.Mra, a));
      z.Xd(c, "is-noteEditorVisible");
      a.Kj[b].focus();
    },
    w6a = function(a, b) {
      var c = a.Kj[b];
      c &&
        (c.eb() && c.Fc(""),
        (a = a.query(".js-note-" + b)),
        z.ce(a, "is-noteEditorVisible"));
    },
    x6a = function(a, b, c) {
      var d = k8(a.Se, a.ye);
      if (d) {
        var e = [];
        a.sw &&
          (e = a.sw.quotes.map(function(a) {
            return a.Hi();
          }));
        (0, z.Mb)(
          d.querySelectorAll(".markup--quote"),
          function(a) {
            var d = a.getAttribute("data-creator-ids").split(" "),
              d = z.Xa(d, b);
            if (this.sw)
              var l = a.getAttribute("name").split(" "),
                d = d && (0, z.Jd)(l, z.Xa.bind(null, e));
            z.fe(a, "is-selected", c && d);
          },
          a
        );
      }
    },
    q8 = function(a) {
      return (
        (a = z.ct(a, function(a) {
          return z.Wd(a, "js-note-item");
        })) && a.getAttribute("data-note-id")
      );
    },
    y6a = function(a, b, c, d) {
      b = new z.$E(b, 300);
      b.Ha(c);
      b.subscribe("dismiss", d, a);
      b.ba();
      return b;
    },
    r8 = function(a) {
      var b = a.Sb(),
        c = a.ld();
      a = a.ke();
      1 < b.length && (a = b[0].ra().length);
      var d = new z.Ux();
      d.$p(b[0].getName());
      d.vg(c);
      z.K(d, "endIndex", a);
      d.Fc(b[0].ra().substring(c, a));
      return d;
    },
    s8 = function(a, b) {
      b %= a.w9;
      0 > b && (b = a.w9 - 1);
      a.oM = b;
      (b = a.query(".js-highlightTip")) &&
        z.Aw(b, s6a, { N3: a.oM, jD: a.Iaa });
    },
    t8 = function(a, b, c, d) {
      z.P.call(this);
      this.Ha(this.xq(d));
      this.lb = a.get("dom-monitor");
      this.Ka = b;
      this.A8 = !b.Ja().Br() || b.Ib();
      this.cb = b.wa();
      this.Se = c;
      this.ge = a.get("quotes-data");
      this.aj = a.get("responses-data");
      this.af = a.get("notes-data");
      this.Yv = null;
      this.oh = {};
    },
    z6a = function(a, b) {
      b.forEach(function(a) {
        a && u8(this, a);
      }, a);
    },
    u8 = function(a, b) {
      if (!a.Yv)
        if (k8(a.Se, b)) {
          var c = A6a(a, b),
            c = B6a(a, c),
            c = C6a(a, c),
            c = D6a(a, c);
          a.oh[b] = c;
          E6a(a, b);
        } else delete a.oh[b];
    },
    F6a = function(a, b) {
      if (!a.Yv) {
        var c = a.oh[b];
        if (c) {
          var d = c.length,
            c = C6a(a, c),
            c = D6a(a, c);
          a.oh[b] = c;
          d != c.length
            ? E6a(a, b)
            : c.forEach(function(a) {
                a.Na && a.offsetTop && (a.Na.style.top = a.offsetTop + "px");
              });
        }
      }
    },
    G6a = function(a, b, c) {
      return z.Ua(a.oh[b] || [], function(a) {
        return a.Na == c;
      });
    },
    A6a = function(a, b) {
      var c = [];
      W7(a.af, b).Hg(function(a) {
        var e = a.NB(),
          g;
        e
          ? ((g = this.af.GP(e)), (e = g.Oa()), (g = z.I(g, "endIndex")))
          : ((e = 0), (g = a.eb().length));
        c.push({
          anchor: b,
          startIndex: e,
          endIndex: g,
          notes: [a],
          quotes: [],
          responses: []
        });
      }, a);
      if (a.A8) return c;
      (a.ge.Ft[b] || []).forEach(function(a) {
        var e = H6a(a);
        c.push({
          anchor: b,
          startIndex: e.startIndex,
          endIndex: e.endIndex,
          notes: [],
          quotes: [a],
          responses: []
        });
      }, a);
      J7(a.aj, b).forEach(function(a) {
        var e = H7(a);
        e &&
          (e = I7(e) && I7(e).Pn()) &&
          ((e = H6a(e)),
          c.push({
            anchor: b,
            startIndex: e.startIndex,
            endIndex: e.endIndex,
            notes: [],
            quotes: [],
            responses: [a]
          }));
      }, a);
      return c;
    },
    B6a = function(a, b) {
      var c = [];
      b.sort(function(a, b) {
        return a.startIndex - b.startIndex;
      });
      b.forEach(function(a) {
        var b = z.Ta(c, function(b) {
          return (
            b.endIndex >= a.startIndex - 1 && b.startIndex <= a.endIndex + 1
          );
        });
        0 <= b ? this.QF(c[b], a) : c.push(a);
      }, a);
      return c;
    },
    D6a = function(a, b) {
      var c = [];
      b.forEach(function(a) {
        if (a.offsetTop) {
          var b = z.Ta(c, function(b) {
            return 30 >= Math.abs(b.offsetTop - a.offsetTop);
          });
          0 <= b ? this.QF(c[b], a) : c.push(a);
        }
      }, a);
      return c;
    },
    E6a = function(a, b) {
      a.Za(".js-paragraphControl-" + b).forEach(z.Fg);
      a.oh[b] = a.oh[b].map(function(a) {
        var b = I6a(this, a),
          b = z.Cw(J6a, b);
        b.style.top = a.offsetTop + "px";
        a.Na = b;
        this.V().appendChild(a.Na);
        z.Xd(b, "is-visible");
        return a;
      }, a);
    },
    I6a = function(a, b) {
      var c = b.notes,
        d = b.responses,
        e = D7(a.ge, b.quotes),
        g = d ? d.length : 0,
        k = c ? c.length : 0,
        l = 0,
        q = 0,
        r = 0,
        t = !1,
        w = !1,
        C = {},
        J = {},
        Q = z.qr().userId,
        R = a.Ka.Ja()
          .je()
          .Ua();
      c.forEach(function(a) {
        var b = a.IH();
        b &&
          ((a = z.I(a, "replies")) &&
            a.forEach(function(a) {
              k++;
              a.author &&
                (a.author.userId == Q && l++,
                a.author.social &&
                  a.author.social.isFollowing &&
                  (C[a.author.userId] = a.author),
                (J[a.author.userId] = !0));
            }),
          (J[b.userId] = !0),
          b.userId == Q && l++,
          b.userId == R ? q++ : r++,
          b.social && b.social.isFollowing && (C[b.userId] = b));
      });
      e.forEach(function(a) {
        a = a.user;
        J[a.userId] = !0;
        a.userId == Q && (t = !0);
        a.social && a.social.isFollowing && (C[a.userId] = a);
      });
      d.forEach(function(a) {
        a = a.je();
        J[a.userId] = !0;
        a.userId == Q && (w = !0);
        a.social && a.social.isFollowing && (C[a.userId] = a);
      });
      c = b.quotes.filter(function(a) {
        return "anon" == a.Ua();
      });
      return {
        postId: a.cb,
        qB: b.anchor,
        CDa: k,
        CEa: g,
        Cy: w,
        uy: l,
        ifa: q,
        DDa: r,
        BYa: e.length,
        By: t,
        Lda: Object.keys(J).length,
        sBa: z.tb(C),
        jD: c.length
      };
    },
    H6a = function(a) {
      var b = a.ld(),
        c = a.ke();
      1 < a.paragraphs.length && (c = a.paragraphs[0].text.length);
      return { startIndex: b, endIndex: c };
    },
    C6a = function(a, b) {
      var c = z.Xw();
      return b.map(function(a) {
        var b = this.Se.get(a.anchor),
          g = this.Ka.Gi(b);
        if (!g) return a;
        var k;
        4 == g.type &&
          (g.ra() && (k = b.querySelector("figcaption")), k || (k = b));
        if (!k) {
          g = a.startIndex + 1;
          b = [b];
          k = 0;
          for (var l = null; 0 < b.length && k < g; )
            if (((l = b.pop()), !(l.nodeName in z.SJa)))
              if (3 == l.nodeType) {
                var q = l.nodeValue
                  .replace(/(\r\n|\r|\n)/g, "")
                  .replace(/ +/g, " ");
                k += q.length;
              } else if (l.nodeName in z.jR) k += z.jR[l.nodeName].length;
              else
                for (q = l.childNodes.length - 1; 0 <= q; q--)
                  b.push(l.childNodes[q]);
          k = l;
        }
        g = z.$w(k, !0);
        a.offsetTop = Math.round(g.top + c.top);
        return a;
      }, a);
    },
    J6a = function(a, b, c) {
      b = z.y;
      var d =
          '\x3cdiv class\x3d"paragraphControls js-paragraphControl js-paragraphControl-' +
          z.F(a.qB) +
          ' u-noUserSelect"\x3e',
        e = z.y,
        g;
      if (a.CDa || a.CEa) {
        g =
          '\x3cdiv class\x3d"notesMarker u-noUserSelect" data-action\x3d"select-anchor" data-action-value\x3d"' +
          z.F(a.qB) +
          '"\x3e';
        var k;
        k = {};
        k = (0, z.y)(
          z.Kj(
            z.D(
              {
                name: "asteriskFilled",
                size: "19px",
                content: (0, z.N)(
                  '\x3csvg class\x3d"svgIcon-use" width\x3d"19" height\x3d"19" \x3e\x3cpath d\x3d"M14.78 8.07a8.681 8.681 0 0 0-.427-1.383.478.478 0 0 0-.584-.27l-3.12.77V4.034c0-.247-.19-.48-.43-.5a7.23 7.23 0 0 0-1.38 0c-.24.02-.43.253-.43.5V7.19L5.3 6.415a.48.48 0 0 0-.583.27c-.18.448-.324.91-.426 1.383-.05.24.1.5.32.58l3.06.754-1.98 2.956c-.14.196-.13.502.04.67.34.332.7.632 1.09.896.2.136.49.077.63-.117l2.09-3.114 2.09 3.112c.15.193.43.252.63.116.39-.26.75-.56 1.09-.89.17-.17.19-.47.04-.67L11.4 9.41l3.06-.76a.517.517 0 0 0 .32-.58" fill-rule\x3d"evenodd"/\x3e\x3c/svg\x3e'
                )
              },
              k
            )
          )
        );
        g = g + z.A(k) + "\x3c/div\x3e";
      } else g = "";
      var l = (k = ""),
        q = "",
        r = 1 == a.uy ? z.n("a note") : z.n("notes"),
        q = q + ("" + r),
        q = z.E(q);
      1 == a.Lda &&
        (0 < a.uy || a.By || a.Cy) &&
        (0 < a.uy && a.By && a.Cy
          ? ((q = z.n("highlighted, responded, and left {$noteCountText}", {
              noteCountText: "" + q
            })),
            (l += " " + q))
          : 0 < a.uy && a.Cy
            ? ((q = z.n("responded and left {$noteCountText}", {
                noteCountText: "" + q
              })),
              (l += " " + q))
            : 0 < a.uy && a.By
              ? ((q = z.n("highlighted and left {$noteCountText}", {
                  noteCountText: "" + q
                })),
                (l += " " + q))
              : a.By && a.Cy
                ? ((q = z.n("highlighted and responded")), (l += " " + q))
                : a.By
                  ? ((q = z.n("highlighted")), (l += " " + q))
                  : 0 < a.uy
                    ? ((q = z.n("left {$noteCountText}", {
                        noteCountText: "" + q
                      })),
                      (l += " " + q))
                    : a.Cy && ((q = z.n("responded")), (l += " " + q)));
      l = z.E(l);
      k += '\x3cspan class\x3d"paragraphControls-itemText"\x3e';
      q = "";
      if (0 < a.ifa && 0 == a.DDa && !a.By && !a.Cy)
        (c = 1 == a.ifa ? z.n("Note to self") : z.n("Notes to self")), (q += c);
      else {
        r = "";
        if (0 < a.jD)
          var t = z.n("Top highlight"),
            r = r + t;
        q += z.A(
          z.hQ(
            z.D(
              {
                social: a.sBa,
                isActive: 0 < a.uy || a.By || a.Cy,
                ji: a.Lda,
                e1: !0,
                WDa: !0,
                ica: (0, z.N)(r)
              },
              a
            ),
            c
          )
        );
        q += z.A(l);
      }
      q = (0, z.N)(q);
      k += z.A(z.kIa(z.D({ text: q }, a))) + "\x3c/span\x3e";
      a = (0, z.y)(k);
      a = e(g + a);
      return b(d + a + "\x3c/div\x3e");
    },
    v8 = function(a, b, c) {
      z.P.call(this);
      this.X = a;
      this.ya = a.get("app");
      this.Xna = a.get("floating-components");
      this.va = a.get("screen");
      this.Ya = a.get("screen-service");
      this.lb = a.get("dom-monitor");
      this.Ka = b;
      this.be = b.be;
      this.Pl = this.be.querySelector(".js-postField");
      this.O9 = this.va.V().querySelector(".js-notesPositionContainer");
      this.ge = a.get("quotes-data");
      this.af = a.get("notes-data");
      this.af.subscribe("new_note_list", this.jsa, this);
      this.aj = a.get("responses-data");
      this.Nl = null;
      this.Se = new d6a(this.be.querySelector(".js-notesSource"));
      this.NF = this.oh = this.WN = null;
      this.oh = new t8(a, b, this.Se, this.O9);
      this.track(this.oh);
      this.NF = this.oh.V();
      this.Ol = this.uW = null;
      this.Ae = c;
    },
    x8 = function(a, b) {
      if (a.isActive()) {
        var c = (b = b || a.uW) && b.YP,
          d = b && b.noteId;
        c &&
          (a.Rw(c),
          d &&
            a.af.yp(d, c) &&
            a.Ol &&
            z.u(a.Ol, function() {
              return w8(a, c, null, d);
            }));
        z.yna(a.ya, "");
      } else a.uW = b || null;
    },
    w8 = function(a, b, c, d, e, g) {
      var k = { Cm: !0, Y0: z.Gw() };
      a.XX();
      c = new p8(a.X, a.Ka, b, d || "", c || null, a.Se, e || null, g || null);
      c.subscribe("set-active-highlight", a.R$, a);
      c.subscribe("reset-highlight", a.xva, a);
      c.subscribe("close", a.XX, a);
      b = g && g.Na ? g.Na : a.Se.get(b);
      g = z.Axa(a.Xna);
      g.yn = b;
      b = g.oD(c);
      b.WG = k;
      k = b.ZR(a.rn.bind(a));
      k.QN = !0;
      a.Nl = k.ba();
    },
    K6a = function(a, b, c) {
      var d = a.Ka.Gi(k8(a.Se, b));
      if (d && 4 != d.type) {
        z.Mt(d, 4);
        if (c) {
          if (!S5a(c, d)) return;
          z.Kt(d, z.tt(c.startIndex, c.endIndex, c.id));
        }
        c = a.Ka.Ib();
        var e = a.Ka.Ja();
        c = {
          mode: c ? "edit" : "view",
          uj: z.$t(e),
          media: null,
          vl: null,
          sections: !0,
          lk: !1,
          dk: !1,
          Zk: !1,
          Af: !1,
          postId: e.id
        };
        a.Se.get(b).innerHTML = z.wu(d, z.Pm, c);
      }
    },
    L6a = function(a, b) {
      var c = z.jo();
      if (!c || c.isCollapsed())
        if ((b && (c = b), !c || c.isCollapsed())) return null;
      b = c.Df();
      var d = f6a(a.Se, b);
      if (!d) return null;
      a = (b = z.ct(b, z.cC, d)) && a.Ka.Gi(b);
      if (!b) return null;
      var d = z.bx(c, b, !0),
        e = z.bx(c, b, !1);
      return -1 == d || -1 == e
        ? null
        : new T5a(
            c,
            b,
            new z.Ux({
              anchor: b.getAttribute("name"),
              startIndex: d,
              endIndex: e,
              content: a.ra().substring(d, e)
            })
          );
    },
    M6a = function() {},
    y8 = function(a, b) {
      z.P.call(this);
      this.vh = b || s5a;
      this.Pa = a.get("screen-request");
      this.W = null;
      this.qZ = a.get("screen-view-state");
      this.X = a;
      this.daa = this.wY = !1;
      this.iX = this.Ic = null;
    },
    z8 = function(a) {
      z.zx.call(this);
      this.Xy = a;
    },
    N6a = function(a, b, c) {
      a = z.ra(a) ? new z.Ke(a) : a;
      (a = G5a(a, b, c || {})) && new z8(a).focus();
    },
    A8 = function(a) {
      this.Z = a.get("request");
      this.U = a.get("route-builder");
    },
    B8 = function(a) {
      z.Rm.call(this);
      this.X = a;
      this.ME = a.get("dialog");
      this.Z = a.get("request");
      this.U = a.get("route-builder");
      this.ha = a.get("butter-bar");
      this.eH = this.pa = this.ex = this.W = null;
      this.tM = !1;
    },
    P6a = function(a) {
      var b = a.pa.query(".js-tweetEditor-image"),
        c = a.pa.query(".js-tweetEditor-imageContainer"),
        d = a.pa.query(".js-tweetEditor-imageStatus");
      z.Xd(c, "u-hide");
      var e = O6a(a);
      e.base64 = !0;
      z.v(
        z.u(
          a.Z.post(z.Bw(J5a), e, { rB: !1, withCredentials: !1 }),
          function(a) {
            b.src = "data:image/png;base64," + a;
            z.ce(c, "u-hide");
            z.Xd(d, "u-hide");
            this.tM = !0;
          },
          a
        ),
        function(a) {
          z.vx(a);
          z.Aw(d, L5a);
        },
        a
      );
    },
    Q6a = function(a, b) {
      return 280 >= M7(b)
        ? !0
        : ((b = a.pa.query(".js-tweetEditor-text")),
          new z.QA(b, { name: "shimmy-shake", duration: 400 }).start(),
          (a = a.pa.query(".js-tweetEditor-error")),
          z.Aw(a, P5a),
          !1);
    },
    O6a = function(a) {
      var b = a.W,
        c = a.ex.HFa;
      a = a.ex.GFa;
      var d = b.creator,
        e = b.approvedHomeCollection,
        g = z.Pm,
        k = null;
      e && (k = e.image);
      var l = null;
      e && e.logo && e.logo.imageId && (l = e.logo.imageId);
      var q = null;
      e &&
        e.tintColor &&
        2 == e.colorBehavior &&
        e.logo &&
        e.logo.imageId &&
        (q = e.tintColor);
      var r = null;
      e && e.tintColor && ((r = z.KJa(e.tintColor)), (r = z.Es(r, 0.6).color));
      return new N7({
        content: c,
        altText: a,
        title: b.title,
        author: d && d.name,
        date: z.Qh(b.createdAt, g),
        authorAvatarId: d && d.imageId,
        collection: e && e.name,
        collectionAvatarId: k ? k.imageId : null,
        collectionLogoId: l,
        collectionBackgroundColor: q,
        collectionHighlightColor: r,
        version: 2
      });
    },
    R6a = function(a) {
      this.Z = a.get("request");
      this.U = a.get("route-builder");
      this.X = a;
    },
    S6a = { bNa: 1, dNa: 2, cNa: 3, eNa: 4, fNa: 5, aNa: 6, $isProtoEnum: !0 };
  z.p(A7, z.L);
  z.f = A7.prototype;
  z.f.F = function() {
    return "";
  };
  z.f.H = function() {
    return "";
  };
  z.f.cv = z.h(329);
  z.f.kd = z.h(458);
  z.f.yb = z.h(462);
  z.f.L = function() {
    return A7.prototype;
  };
  z.f.D = {
    name: "PlacementSlot",
    N: !1,
    fields: {
      location: {
        name: "location",
        g: function() {
          return S6a;
        },
        h: 1
      },
      index: { name: "index", g: z.W, h: 2 }
    },
    O: {}
  };
  z.f.yb = z.Y(462, function(a) {
    return z.K(this, "index", a);
  });
  z.f.kd = z.Y(458, function() {
    return z.I(this, "index");
  });
  z.p(B7, z.L);
  z.f = B7.prototype;
  z.f.F = function() {
    return "";
  };
  z.f.H = function() {
    return "Placement";
  };
  z.f.ef = function() {
    return z.I(this, "items");
  };
  z.f.vc = z.h(412);
  z.f.cv = z.h(328);
  z.f.kd = z.h(457);
  z.f.yb = z.h(461);
  z.f.L = function() {
    return B7.prototype;
  };
  z.f.D = {
    name: "Placement",
    N: !1,
    fields: {
      items: {
        name: "items",
        g: function() {
          return z.mM;
        },
        aa: z.U,
        h: 1
      },
      location: {
        name: "location",
        g: function() {
          return S6a;
        },
        h: 2
      },
      index: { name: "index", g: z.W, h: 3 }
    },
    O: {}
  };
  z.f.yb = z.Y(461, function(a) {
    return z.K(this, "index", a);
  });
  z.f.kd = z.Y(457, function() {
    return z.I(this, "index");
  });
  z.f.vc = z.Y(412, function(a) {
    return z.K(this, "items", a);
  });
  z.m(E7, z.hf);
  E7.prototype.Vj = function(a) {
    var b = {};
    z.XD(this, b, a.Jb(), "");
    return b;
  };
  E7.prototype.tb = function(a, b) {
    if (!a || !b) return null;
    var c = new a();
    Object.keys(b).forEach(function(a) {
      for (
        var e = a.split(/[[\]]+/).filter(function(a) {
            return !!a;
          }),
          g = c,
          k = e.shift();
        k;

      ) {
        var l = g.D.kj[k];
        if (!l) break;
        var q = l.g();
        if (l.aa()) {
          var r = z.ii(g, k) || [],
            t = e.shift(),
            w = Number(t);
          if (void 0 === t || !Number.isInteger(w) || 0 > w) break;
          if (q.prototype instanceof z.Zh)
            (l = r[w]), l || ((l = new q()), (r[w] = l)), z.K(g, k, r), (g = l);
          else {
            if (void 0 !== e.shift()) break;
            q = U4a(b[a], l);
            r[w] = q;
            z.K(g, k, r);
          }
        } else if (q.prototype instanceof z.Zh)
          (r = z.ii(g, k)), r || ((r = new q()), z.K(g, k, r)), (g = r);
        else {
          if (void 0 !== e.shift()) break;
          q = U4a(b[a], l);
          z.K(g, k, q);
        }
        k = e.shift();
      }
    });
    return c;
  };
  z.p(F7, z.ni);
  z.f = F7.prototype;
  z.f.F = function() {
    return "";
  };
  z.f.H = function() {
    return "";
  };
  z.f.vu = z.h(596);
  z.f.yR = z.h(453);
  z.f.L = function() {
    return F7.prototype;
  };
  z.f.D = {
    name: "PlacementsResponse",
    N: !1,
    fields: {
      placements: {
        name: "placements",
        g: function() {
          return B7;
        },
        aa: z.U,
        h: 1
      },
      stateParams: {
        name: "stateParams",
        g: function() {
          return z.$M;
        },
        h: 2
      }
    },
    O: {}
  };
  z.p(G7, z.L);
  z.f = G7.prototype;
  z.f.F = function() {
    return "";
  };
  z.f.H = function() {
    return "";
  };
  z.f.yR = z.h(454);
  z.f.L = function() {
    return G7.prototype;
  };
  z.f.D = {
    name: "PlacementsRequestQuery",
    N: !1,
    fields: {
      requestContext: {
        name: "requestContext",
        g: function() {
          return z.Hr;
        },
        h: 1
      },
      slots: {
        name: "slots",
        g: function() {
          return A7;
        },
        aa: z.U,
        h: 2
      },
      stateParams: {
        name: "stateParams",
        g: function() {
          return z.$M;
        },
        h: 3
      }
    },
    O: {}
  };
  z.ZW.prototype.uR = z.Y(612, function(a) {
    a != this.FM && this.mb && (this.mb.Mh.contentEditable = a);
    this.FM = a;
  });
  z.uG.prototype.ZR = z.Y(603, function(a) {
    this.rn = a;
    return this;
  });
  z.zG.prototype.ZR = z.Y(602, function(a) {
    this.rn = a;
    return this;
  });
  z.fG.prototype.e0 = z.Y(601, function(a) {
    a = H7(a);
    if (!a) return null;
    a = I7(a) && I7(a).Pn();
    return a ? ((a = a.Sb()) && a.length ? a[0].getName() : null) : null;
  });
  F7.prototype.vu = z.Y(596, function() {
    return z.I(this, "placements");
  });
  z.YD.prototype.vu = z.Y(595, function(a, b, c) {
    var d = this;
    a = W4a(X4a(new G7(), a), b);
    c && a.yR(c);
    c = new E7().Vj(a);
    var e = this.U.R(z.Wya, {}, c);
    return z.ZD(this, e, function() {
      return z.u(d.Z.get(e, { background: !0 }), function(a) {
        a = d.Ba.dc(F7, a);
        d.ka.hc(a);
        return a;
      });
    });
  });
  z.Xx.prototype.yp = z.Y(516, function() {
    return z.I(this, "note");
  });
  z.SD.prototype.yp = z.Y(515, function(a) {
    return this.gc("Note", a);
  });
  z.Tx.prototype.Ux = z.Y(514, function() {
    return z.I(this, "replyId");
  });
  z.Xx.prototype.Ux = z.Y(513, function() {
    return z.I(this, "replyId");
  });
  z.Rx.prototype.Iy = z.Y(512, function(a) {
    return z.K(this, "highlight", a);
  });
  z.Rx.prototype.GP = z.Y(511, function() {
    return z.I(this, "highlight");
  });
  z.Rx.prototype.Zu = z.Y(510, function(a) {
    return z.K(this, "author", a);
  });
  z.Tx.prototype.Zu = z.Y(509, function(a) {
    return z.K(this, "author", a);
  });
  z.Rx.prototype.IH = z.Y(508, function() {
    return z.I(this, "author");
  });
  z.Tx.prototype.IH = z.Y(507, function() {
    return z.I(this, "author");
  });
  z.Rx.prototype.NB = z.Y(506, function() {
    return z.I(this, "highlightId");
  });
  z.Rx.prototype.mg = z.Y(505, function() {
    return z.I(this, "noteId");
  });
  z.Tx.prototype.mg = z.Y(504, function() {
    return z.I(this, "noteId");
  });
  z.Xx.prototype.mg = z.Y(503, function() {
    return z.I(this, "noteId");
  });
  z.Ox.prototype.fq = z.Y(500, function(a) {
    return z.K(this, "state", a);
  });
  z.Rx.prototype.fq = z.Y(499, function(a) {
    return z.K(this, "state", a);
  });
  z.Tx.prototype.fq = z.Y(498, function(a) {
    return z.K(this, "state", a);
  });
  z.js.prototype.$u = z.Y(474, function(a) {
    return z.K(this, "authorId", a);
  });
  z.Rx.prototype.$u = z.Y(473, function(a) {
    return z.K(this, "authorId", a);
  });
  z.Tx.prototype.$u = z.Y(472, function(a) {
    return z.K(this, "authorId", a);
  });
  G7.prototype.yR = z.Y(454, function(a) {
    return z.K(this, "stateParams", a);
  });
  F7.prototype.yR = z.Y(453, function(a) {
    return z.K(this, "stateParams", a);
  });
  z.Qq.prototype.Ne = z.Y(374, function() {
    return z.I(this, "catalogId");
  });
  z.yK.prototype.Ne = z.Y(373, function() {
    return z.I(this, "catalogId");
  });
  z.pK.prototype.Ne = z.Y(372, function() {
    return z.I(this, "catalogId");
  });
  z.mM.prototype.Ne = z.Y(371, function() {
    return z.I(this, "catalogId");
  });
  z.WJ.prototype.Ne = z.Y(370, function() {
    return z.I(this, "catalogId");
  });
  z.SL.prototype.Ne = z.Y(369, function() {
    return z.I(this, "catalogId");
  });
  z.NK.prototype.Ne = z.Y(368, function() {
    return z.I(this, "catalogId");
  });
  z.KL.prototype.Ne = z.Y(367, function() {
    return z.I(this, "catalogId");
  });
  z.JL.prototype.Ne = z.Y(366, function() {
    return z.I(this, "catalogId");
  });
  z.IL.prototype.Ne = z.Y(365, function() {
    return z.I(this, "catalogId");
  });
  z.js.prototype.Ne = z.Y(364, function() {
    return z.I(this, "catalogId");
  });
  z.Xx.prototype.Ne = z.Y(363, function() {
    return z.I(this, "catalogId");
  });
  z.SH.prototype.Ne = z.Y(362, function() {
    return z.I(this, "catalogId");
  });
  z.Hq.prototype.cv = z.Y(331, function(a) {
    return z.K(this, "location", a);
  });
  z.Cr.prototype.cv = z.Y(330, function(a) {
    return z.K(this, "location", a);
  });
  A7.prototype.cv = z.Y(329, function(a) {
    return z.K(this, "location", a);
  });
  B7.prototype.cv = z.Y(328, function(a) {
    return z.K(this, "location", a);
  });
  z.rp.prototype.PP = z.Y(70, function() {
    return z.I(this, "point");
  });
  var k5a = /(?:https?:\/\/|www\.)\w[\w~#-@![\]]*/g;
  L7.prototype.PP = function() {
    var a = window.document.body;
    return z.Mg(a, this.Vh.node)
      ? this.Vh
      : this.Bk && z.Mg(a, this.Bk)
        ? z.WM(this.hN, this.Bk)
        : this.ye && (a = z.ft(this.Tna, this.ye)) ? z.WM(this.hN, a) : null;
  };
  z.p(N7, z.L);
  z.f = N7.prototype;
  z.f.F = function() {
    return "";
  };
  z.f.H = function() {
    return "";
  };
  z.f.eb = function() {
    return z.I(this, "content");
  };
  z.f.Fc = function(a) {
    return z.K(this, "content", a);
  };
  z.f.jb = function() {
    return z.I(this, "title");
  };
  z.f.ec = function(a) {
    return z.K(this, "title", a);
  };
  z.f.IH = function() {
    return z.I(this, "author");
  };
  z.f.Zu = function(a) {
    return z.K(this, "author", a);
  };
  z.f.getDate = function() {
    return z.I(this, "date");
  };
  z.f.setDate = function(a) {
    return z.K(this, "date", a);
  };
  z.f.Kb = function() {
    return z.I(this, "collection");
  };
  z.f.setVersion = function(a) {
    return z.K(this, "version", a);
  };
  z.f.tJ = function(a) {
    return z.K(this, "template", a);
  };
  z.f.Mc = function() {
    return z.I(this, "subtitle");
  };
  z.f.ae = function(a) {
    return z.K(this, "subtitle", a);
  };
  z.f.L = function() {
    return N7.prototype;
  };
  z.f.D = {
    name: "TextshotInfo",
    N: !1,
    fields: {
      content: { name: "content", g: z.V, h: 1 },
      altText: { name: "altText", g: z.V, h: 2 },
      title: { name: "title", g: z.V, h: 3 },
      author: { name: "author", g: z.V, h: 4 },
      date: { name: "date", g: z.V, h: 5 },
      authorAvatarId: { name: "authorAvatarId", g: z.V, h: 6 },
      collection: { name: "collection", g: z.V, h: 7 },
      collectionAvatarId: { name: "collectionAvatarId", g: z.V, h: 8 },
      collectionLogoId: { name: "collectionLogoId", g: z.V, h: 9 },
      collectionBackgroundColor: {
        name: "collectionBackgroundColor",
        g: z.V,
        h: 10
      },
      collectionHighlightColor: {
        name: "collectionHighlightColor",
        g: z.V,
        h: 11
      },
      version: { name: "version", g: z.W, h: 12 },
      base64: { name: "base64", g: z.X, h: 13 },
      template: { name: "template", g: z.V, h: 14 },
      mainStat: { name: "mainStat", g: z.V, h: 15 },
      mainStatTitle: { name: "mainStatTitle", g: z.V, h: 16 },
      subtitle: { name: "subtitle", g: z.V, h: 17 },
      icon: { name: "icon", g: z.V, h: 18 },
      imgKey: { name: "imgKey", g: z.V, h: 19 }
    },
    O: {}
  };
  z.p(O7, z.jn);
  O7.prototype.XI = function() {
    if (!this.Nj) return null;
    var a = this.Nj.PP();
    if (!a) return null;
    var b = this.Wl.PP();
    return b ? z.Wn(a.node, a.offset, b.node, b.offset) : null;
  };
  var T6a = { mOa: "quote-respond" };
  z.p(Q7, z.P);
  z.f = Q7.prototype;
  z.f.Xj = function() {
    return this.am.Xj();
  };
  z.f.S = function() {
    Q7.ea.S.call(this);
    z.Bx(this, this.iV, "data-redirect-type-quote", this.tra, this);
    this.Ea(this.be, "click", this.hw, this);
    z.uF(this.Ka) && z.Ew() && this.Ea(this.be, "mouseover", this.Loa, this);
    this.Ka.Ja().Br() && !this.Ka.Ib() && z.v(this.ge.load(this.Ka.wa()), z.vx);
    var a = this.Xj();
    a &&
      (z.Bx(this, a, "quote", this.Ioa, this),
      z.Bx(this, a, "quote-respond", this.Joa, this),
      z.Bx(this, a, "show", this.iZ, this),
      z.Bx(this, a, "hide", this.Nra, this));
  };
  z.f.tra = function(a) {
    var b = z.jF(this.am, this.Xj().ax);
    b &&
      (a.url = new z.Ke(
        this.U.R(
          z.eCa,
          { postId: this.Ka.wa() },
          {
            paragraphs: JSON.stringify([b.$x.tb().Jb()]),
            startOffset: b.start,
            endOffset: b.end
          }
        )
      ));
  };
  z.f.hw = function(a) {
    z.ct(
      a.target,
      function(a) {
        if (a === this.be) return !0;
        var c = z.lC(a);
        if (3 == c) return !0;
        if (7 == c) {
          if ((c = A5a(this, a)))
            if ((R7(this, c), z.Ew())) T7(this, c);
            else {
              var d = new z.YE();
              y5a(this, c, a, d);
            }
          return !0;
        }
        return !1;
      }.bind(this)
    );
  };
  z.f.Loa = function(a) {
    z.ct(
      a.target,
      function(a) {
        if (a === this.be) return !0;
        var c = z.lC(a);
        if (3 == c) return !0;
        if (7 == c) {
          c = z.jo();
          if (
            !((c && !c.isCollapsed()) || (this.Xj() && this.Xj().Pp())) &&
            (c = A5a(this, a))
          ) {
            var d = this.be.querySelector(
              '.markup--quote[name~\x3d"' + c.Hi() + '"]'
            );
            a = new z.$E(a, 100);
            y5a(this, c, d, a);
            R7(this, c);
          }
          return !0;
        }
        return !1;
      }.bind(this)
    );
  };
  z.f.iZ = function() {
    var a = z.jo();
    a && !a.isCollapsed() && R7(this, null);
    if (z.uF(this.Ka) && (a = z.jF(this.am, this.Xj().ax))) {
      var a = z.lva(this.ge, a.$x, a.start, a.end),
        b = this.Xj()
          .Da()
          .querySelector(".js-highlightMenuQuoteButton");
      z.fe(b, "is-active", !!a);
    }
  };
  z.f.Nra = function() {
    this.ep && R7(this, null);
  };
  z.f.Ioa = function() {
    if (z.uF(this.Ka)) {
      var a = z.eF(this.Xj());
      if (a) {
        var b = a.range,
          c = a.OCa,
          a = this.Xj()
            .Da()
            .querySelector(".js-highlightMenuQuoteButton"),
          d = z.Wd(a, "is-active"),
          b = z.jF(this.am, b);
        z.v(
          z.u(
            this.ge.toggle(b.$x, b.start, b.end, !c),
            function(a) {
              z.OJa();
              d ? z.gF(this.Xj()) : T7(this, a);
              var b = c ? "selection_menu" : "quote_click_menu";
              U7(this, a.Hi(), !d, b);
            },
            this
          ),
          z.vx
        );
      }
    }
  };
  z.f.Joa = function() {
    if (z.uF(this.Ka) && z.Pm.supportsEdit) {
      var a = z.eF(this.Xj());
      if (a) {
        var b = z.jF(this.am, a.range);
        z.v(
          z.u(
            this.ge.create(b.$x, b.start, b.end, 1, !0),
            function(a) {
              U7(this, a.Hi(), !0, "selection_menu_quote_respond");
              this.fa("quote-respond", a, b.$x.name);
            },
            this
          ),
          z.vx
        );
      }
    }
  };
  z.f.Soa = function(a) {
    var b = this.ep,
      c = S7(this, b),
      d = b.ld(),
      e = b.ke(),
      b = a.query(".js-quoteAttributions-pileOn"),
      g = z.Wd(b, "is-active");
    z.v(
      z.u(
        this.ge.toggle(c, d, e, !0),
        function(b) {
          var l = a.query(".js-quoteAttributions-pileOn");
          z.ge(l, "is-active");
          if ((l = z.WE(this.ge, c, d, e))) {
            var q = x5a(this, l),
              r = a.query(".js-quoteAttributions-info");
            z.Aw(r, j5a, q);
          } else a.bc();
          !g && z.Ew() && (a.bc(), T7(this, l));
          l = z.Ew() ? "quote_hover" : "quote_click_mobile";
          U7(this, b.Hi(), !g, l);
        },
        this
      ),
      z.vx
    );
  };
  z.f.Toa = function() {
    if (z.uF(this.Ka) && z.Pm.supportsEdit) {
      var a = S7(this, this.ep),
        b = this.ep.ld(),
        c = this.ep.ke();
      z.v(
        z.u(
          this.ge.create(a, b, c, 1, !0),
          function(b) {
            U7(this, b.Hi(), !0, "quote_respond");
            this.fa("quote-respond", b, a.name);
          },
          this
        ),
        z.vx
      );
    }
  };
  z.f.Uoa = function() {
    var a = C5a(this, this.ep);
    a && z.Ava(this.am, a);
  };
  z.f.F$ = function() {
    var a = new O7(this.be),
      b = this.ge.Ft,
      c = Object.keys(b).concat(this.X6);
    z.gb(c);
    c.forEach(function(a) {
      var c = b[a] || [],
        g = this.Ka;
      if ((g = (a = g.be && z.ft(g.be, a)) && this.Ka.Gi(a)))
        g5a(g, c),
          (a.innerHTML = z.wu(g, z.Pm, z.Gva(this.Ka))),
          z.Oxa(this.Eua, a);
    }, this);
    this.X6 = Object.keys(b);
    (a = a.restore()) && a.select();
  };
  z.p(V7, z.zx);
  z.f = V7.prototype;
  z.f.load = function(a) {
    if (!z.rr()) return z.Ld([]);
    this.cb = a;
    this.kh ||
      (this.kh = z.v(
        z.u(
          this.Vk.get(this.U.R(z.XBa, { postId: a }), { background: !0 }),
          this.Cua,
          this
        ),
        z.vx
      ));
    return this.kh.yc();
  };
  z.f.Kp = function() {
    return this.U6;
  };
  z.f.mj = function() {
    return this.Y9;
  };
  z.f.GP = function(a) {
    return this.i8[a] || null;
  };
  z.f.yp = function(a, b) {
    return z.EN(W7(this, b), a);
  };
  z.f.Iy = function(a, b) {
    this.i8[a] = b;
  };
  z.f.wa = function() {
    return this.cb;
  };
  z.f.Cua = function(a) {
    var b = a.references.User;
    this.Y9 = a.post.visibility;
    var c = a.value;
    if (c)
      for (var d = 0; d < c.length; d++) {
        var e = c[d];
        if ("HIDDEN" != e.state) {
          var g = e.replies,
            k = b;
          if (g)
            for (var l = 0; l < g.length; l++) {
              var q = g[l],
                r = q.authorId || null;
              q.author = (r && k[r]) || null;
            }
          g = e.anchor;
          k = e.authorId || null;
          e.author = (k && b[k]) || null;
          g = W7(this, g);
          e = z.Sx(e);
          g.add(z.XC(this.ka, e));
        }
      }
    if ((a = a.highlights))
      for (b = 0; b < a.length; b++) this.Iy(a[b].id, z.ip.tb(z.Ux, a[b]));
    this.U6 = !0;
  };
  z.m(Z7, z.P);
  Z7.prototype.vu = function(a) {
    var b = this;
    if (this.JX) {
      var c = new z.pd();
      (0, window.setTimeout)(function() {
        return c.callback();
      }, U6a);
      return R5a(c, function() {
        return b.vu(a);
      });
    }
    if (this.mn[a])
      throw Error(
        "Requesting multiple placements for the same location (" +
          a +
          ") is not supported."
      );
    this.KT.push(new A7().cv(a).yb(0));
    var d = new z.pd();
    this.mn[a] = d;
    this.Pv || (this.Pv = (0, window.setTimeout)(this.Bua.bind(this), V6a));
    return d;
  };
  Z7.prototype.Bua = function() {
    var a = this;
    this.JX = !0;
    z.Cd(
      z.v(
        z.u(this.Pa.vu(this.qva, this.KT, this.taa), function(b) {
          var c = b.placements;
          b = b.stateParams;
          if (!c)
            return z.tb(a.mn).forEach(function(a) {
              return a.callback(null);
            });
          c.forEach(function(b) {
            a.mn[b.location].callback(b);
          });
          a.taa = b;
        }),
        function(b) {
          z.tb(a.mn).forEach(function(a) {
            return a.Bh(b);
          });
        }
      ),
      function() {
        var b = a.KT;
        if (!z.oa(b)) for (var c = b.length - 1; 0 <= c; c--) delete b[c];
        b.length = 0;
        z.xb(a.mn);
        (0, window.clearTimeout)(a.Pv);
        a.Pv = null;
        a.JX = !1;
      }
    );
  };
  var U6a = 20,
    V6a = 500;
  z.m($7, z.P);
  $7.prototype.S = function() {
    z.P.prototype.S.call(this);
    z.u(z.en(300), this.Tla, this);
  };
  $7.prototype.Tla = function() {
    if (this.Kf && this.Kf.postIds && this.Kf.postIds.length) {
      var a = this.Za(".js-paywall").find(function(a) {
          return "none" !== window.getComputedStyle(a).display;
        }),
        b = Math.min(this.Kf.postIds.length, this.Kf.maxUnlockCount),
        c = a.querySelectorAll(".js-meterThumbnail"),
        d = new z.pd();
      if (0 < c.length)
        for (a = 0; a < b; a++) {
          var e = c[a],
            g = e.querySelector(".js-thumbnailImage"),
            k = z.Bw(z.vj, {
              imageId: this.Kf.previewImageIds[a]
                ? this.Kf.previewImageIds[a]
                : "1*gqOHypRwp9HBuHaiSx6kWQ.png",
              strategy: "crop-fixed",
              width: 40,
              height: 40
            });
          z.vo(g, "background-image", 'url("' + k + '"');
          z.u(d, this.CT.bind(this, e, a == c.length - 1));
        }
      else
        for (
          c = a.querySelectorAll(".js-meterStar"),
            a = this.Kf.maxUnlockCount,
            e = 0;
          e < b;
          e++
        )
          z.u(d, this.BT.bind(this, c[e], a));
      d.callback();
    }
  };
  $7.prototype.CT = function(a, b) {
    b = new z.QA(a, {
      name: b ? "pulse-grow-50-110" : "pulse-grow-50-105",
      duration: 800 + (b ? 200 : 0)
    });
    var c = z.u(
        new z.QA(a.querySelector(".js-thumbnailImage"), {
          name: "fade-in",
          duration: 800
        }),
        function() {
          z.Xd(a, "is-read");
        }
      ),
      d = new z.QA(a.querySelector(".js-thumbnailText"), {
        name: "color-light-to-white",
        duration: 800
      });
    return new z.Qm([b.start(), c.start(), d.start()]);
  };
  $7.prototype.BT = function(a, b) {
    b = z.u(
      new z.QA(a.querySelector(".js-starIcon"), {
        name: "color-light-to-grey",
        duration: Math.round(2400 / Math.min(5, b))
      }),
      function() {
        z.Xd(a, "is-read");
      }
    );
    return new z.Qm([b.start()]);
  };
  z.m(a8, z.P);
  a8.prototype.S = function() {
    z.P.prototype.S.call(this);
    var a = this.va.query(".js-postActionsBar");
    a &&
      (this.Ha(a),
      (a = this.va.Sw)
        ? (z.Bx(this, a, "show", this.cB.bind(this, !0)),
          z.Bx(this, a, "dock", this.cB.bind(this, !0)))
        : z.Bx(this, this.lb, "scroll-up", this.cB.bind(this, !0)),
      z.Bx(this, this.lb, "scroll-down", this.cB.bind(this, !1)),
      this.cB(!0),
      z.Pm.variants.enable_branch_io ||
        z.it(this.va.query(".js-openInAppButton")),
      V5a(this),
      z.Dw() || this.Ea(this.va.V(), "mousemove", z.cn(200, this.dG, this)));
  };
  a8.prototype.ia = function() {
    z.P.prototype.ia.call(this);
  };
  a8.prototype.dG = function(a) {
    if (!this.yF) {
      var b = z.sC(this.ub);
      a.clientY > b.height - 100 && this.cB(!0);
    }
  };
  a8.prototype.cB = function(a) {
    if (
      this.Ka.isPublished() &&
      !(this.yF === a || (a && U5a(this))) &&
      (a || z.rr() || U5a(this))
    ) {
      var b = this.ma.Ec(),
        c;
      b && (c = b.Wd()) && z.Ug(c, "js-postActionsBarContent") && b.bc();
      (this.yF = a) ? this.fa(W6a) : this.fa(X6a);
      z.fe(this.V(), "is-visible", this.yF);
    }
  };
  var W6a = "show",
    X6a = "hide";
  z.m(b8, z.P);
  z.f = b8.prototype;
  z.f.S = function() {
    var a = this;
    z.P.prototype.S.call(this);
    this.nn &&
      (z.Bx(this, this.nn, W6a, function() {
        z.Xd(a.V(), "is-abovePostActions");
        a.CM = !0;
      }),
      z.Bx(this, this.nn, X6a, function() {
        z.ce(a.V(), "is-abovePostActions");
        a.CM = !1;
      }));
    z
      .T(this.V())
      .J("dismiss-meter", this.Us, this)
      .J("expand-meter", this.Ona, this);
    var b = this.Kf.postIds && 1 < this.Kf.postIds.length,
      c = z.Sq().isMobile && !z.Sq().isTablet;
    z.pi(z.Pm).enable_sticky_meter ||
      (!b && !c) ||
      (this.Ov = (0, window.setTimeout)(this.Us.bind(this), Y6a));
    z.u(z.en(300), this.ava, this);
  };
  z.f.ia = function() {
    this.MA && (this.MA.cancel(), (this.MA = null));
    this.Ov && ((0, window.clearTimeout)(this.Ov), (this.Ov = null));
    z.P.prototype.ia.call(this);
  };
  z.f.Us = function() {
    var a = this;
    this.MA = new z.QA(this.V(), {
      name: this.CM
        ? z.Sq().isMobile ? "pop-shift-down-35" : "pop-shift-down-44"
        : "pop-shift-down-0",
      duration: 550,
      timing: "ease-in-out"
    });
    z.u(this.MA, function() {
      z.ht(a.V());
      a.fa(Z6a);
    });
    this.MA.start();
  };
  z.f.Ona = function() {
    var a = this.query($6a),
      b = this.query(a7a),
      c = this.query(b7a);
    z.ht(a);
    z.Xd(b, "is-visible");
    this.Ov && ((0, window.clearTimeout)(this.Ov), (this.Ov = null));
    z.Aw(c, m5a);
    z.ce(c, "u-xs-hide");
    z.by(z.aGa, { unlockCount: this.Kf.postIds.length });
  };
  z.f.ava = function() {
    var a = this;
    this.va.V().appendChild(this.V());
    this.N9 = new z.QA(this.V(), {
      name: this.CM
        ? z.Sq().isMobile ? "pop-shift-up-35" : "pop-shift-up-44"
        : "pop-shift-up-0",
      duration: 800,
      timing: "ease-in-out"
    });
    z.u(this.N9.start(), function() {
      z.by(z.$Fa, {
        unlockCount: a.Kf.postIds.length,
        postId: a.W ? a.W.id : ""
      });
      if (a.Kf && a.Kf.postIds && a.Kf.postIds.length) {
        var b = Math.min(a.Kf.postIds.length, a.Kf.maxUnlockCount),
          c = a.Za(".js-meterThumbnail"),
          d = new z.pd();
        if (0 < c.length)
          for (var e = 0; e < b; e++)
            z.u(d, a.CT.bind(a, c[e], e == c.length - 1));
        else
          for (
            var c = a.Za(".js-meterStar"), e = a.Kf.maxUnlockCount, g = 0;
            g < b;
            g++
          )
            z.u(d, a.BT.bind(a, c[g], e));
        d.callback();
      }
    });
  };
  z.f.CT = function(a, b) {
    b = new z.QA(a, {
      name: b ? "pulse-grow-50-110" : "pulse-grow-50-105",
      duration: 800 + (b ? 200 : 0)
    });
    var c = z.u(
        new z.QA(a.querySelector(".js-thumbnailImage"), {
          name: "fade-in",
          duration: 800
        }),
        function() {
          z.Xd(a, "is-read");
        }
      ),
      d = new z.QA(a.querySelector(".js-thumbnailText"), {
        name: "color-light-to-white",
        duration: 800
      });
    return new z.Qm([b.start(), c.start(), d.start()]);
  };
  z.f.BT = function(a, b) {
    b = z.u(
      new z.QA(a.querySelector(".js-starIcon"), {
        name: "color-light-to-grey",
        duration: Math.round(2400 / Math.min(5, b))
      }),
      function() {
        z.Xd(a, "is-read");
      }
    );
    return new z.Qm([b.start()]);
  };
  z.f.Yb = function(a) {
    this.W = a;
    return this;
  };
  var Y6a = 6e3,
    b7a = ".js-dismissMeterIndicator",
    $6a = ".js-expandMeterButton",
    a7a = ".js-moreInfo",
    Z6a = "dismissed";
  z.m(c8, z.P);
  c8.prototype.S = function() {
    var a = this;
    z.P.prototype.S.call(this);
    return z.u(z.v(Y5a(this), z.vx), function(b) {
      b = b.meteringInfo;
      var c = a.va.na();
      a.nn || (a.nn = new a8(c, a.Ka));
      var d = a.va.query(".js-paywall");
      if (d) a.va.track(new $7(c, d, b));
      else if (b && 0 <= (0, z.Wa)(b.postIds, a.W.id)) {
        d = 0;
        if (z.Pm.variants.enable_user_post_metering_max_five)
          switch (b.postIds.length) {
            case 0:
            case 1:
              d = 1;
              break;
            case 3:
              d = 2;
              break;
            case 5:
              d = 3;
          }
        else if (z.Pm.variants.enable_user_post_metering_max_seven)
          switch (b.postIds.length) {
            case 0:
            case 1:
              d = 1;
              break;
            case 4:
              d = 2;
              break;
            case 7:
              d = 3;
          }
        else d = b.postIds.length || 1;
        0 < d &&
          ((d = z.Cw(t5a, { post: a.W, meteringInfo: b, OZ: d })),
          (a.AX = new b8(c, d, a.nn, b).Yb(a.W)),
          a.va.track(a.AX),
          z.Bx(a, a.AX, Z6a, function() {
            !z.rr() &&
              z.Pm.useragent.isMobile &&
              (f5a(a.va, a.nn) || a.va.track(a.nn));
          }));
      }
      if (!X5a(a) || z.rr()) f5a(a.va, a.nn) || a.va.track(a.nn);
    });
  };
  c8.prototype.Mm = function(a) {
    this.Sd = a;
  };
  z.m(d8, z.P);
  z.f = d8.prototype;
  z.f.S = function() {
    z.P.prototype.S.call(this);
    z
      .T(this.va.V())
      .J("show-share-community-link-popover", this.Ywa, this)
      .J("copy-community-link", this.aU, this);
  };
  z.f.ia = function() {
    var a = z.T(this.va.V());
    a.clear("show-share-community-link-popover");
    a.clear("copy-community-link");
    z.P.prototype.ia.call(this);
  };
  z.f.Mm = function(a) {
    this.Sd = a;
  };
  z.f.Ywa = function(a) {
    var b = this;
    z.u(
      this.W.uniqueSlug
        ? z.Ld(this.W.uniqueSlug)
        : z.u(z.bE(this.Z, z.cJ, { postId: this.W.nb() }), function(a) {
            return a.value.uniqueSlug;
          }),
      function(c) {
        var d = b.ma.Ec(),
          d = d ? d.Wd() : a.target;
        z
          .ZC(
            z
              .aD(z.bD(b.ma), d)
              .Sa(E5a, { post: b.W, uniqueSlug: c, shareKey: b.Sd }),
            { Xn: !0, sI: !0 }
          )
          .ba();
        c = { postId: b.W.nb() };
        z.by(z.JDa, c);
      }
    );
  };
  z.f.aU = function(a) {
    var b = this.va.query(".js-friendLinkUrl");
    b.disabled = !1;
    b.select();
    window.document.execCommand("copy");
    b.disabled = !0;
    z.Aw(a.target, D5a);
    z.by(z.UFa, { postId: this.W.postId });
  };
  z.m(e8, z.P);
  z.f = e8.prototype;
  z.f.S = function() {
    z.P.prototype.S.call(this);
    z
      .T(this.va.V())
      .J("dismiss-writer-controls-onboarding", this.pna, this)
      .J("show-writer-controls-popover", this.fxa, this)
      .J("show-friend-link-popover", this.Fwa, this);
    var a = this.va.query(".js-writerControlsButton");
    if (a) {
      var b = new z.fx(C8);
      b.get(C8) || (b.put(C8, 1), f8(this, a, u5a));
    }
  };
  z.f.ia = function() {
    var a = z.T(this.va.V());
    a.clear("dismiss-writer-controls-onboarding");
    a.clear("show-writer-controls-popover");
    a.clear("show-friend-link-popover");
    z.P.prototype.ia.call(this);
  };
  z.f.Mm = function(a) {
    this.Sd = a;
    return this;
  };
  z.f.pna = function() {
    this.ma.Rb();
  };
  z.f.fxa = function(a) {
    a = Z5a(this, a);
    f8(this, a, w5a, {
      post: this.W,
      shareKey: this.Sd,
      source: z.si(
        new z.js({
          name: "post_page",
          dimension: "writer_controls",
          postId: this.W.id
        })
      )
    });
    a = { postId: this.W.nb() };
    z.by(z.KDa, a);
  };
  z.f.Fwa = function(a) {
    var b = this;
    z.u(
      this.W.uniqueSlug
        ? z.Ld(this.W.uniqueSlug)
        : z.u(z.bE(this.Z, z.cJ, { postId: this.W.nb() }), function(a) {
            return a.value.uniqueSlug;
          }),
      function(c) {
        var d = Z5a(b, a);
        f8(b, d, v5a, { post: b.W, uniqueSlug: c, shareKey: b.Sd });
        c = { postId: b.W.nb() };
        z.by(z.JDa, c);
      }
    );
  };
  var C8 = "writer-controls-onboarding";
  z.m(g8, z.P);
  g8.prototype.S = function() {
    z.P.prototype.S.call(this);
    $5a(this);
  };
  z.m(h8, z.P);
  z.f = h8.prototype;
  z.f.S = function() {
    z.P.prototype.S.call(this);
    this.p9 = c6a(this);
    this.VN = z.oC(this.ub, this.V(), "fixed");
    z.Bx(this, this.ub, "refresh", this.fha.bind(this));
    var a = this.V();
    z.Yd(a, ["u-fixed", "u-transition--fadeOut300"]);
    z.vo(a, "transform", "translateY(" + this.fZ + "px)");
    this.hH();
    this.fha();
  };
  z.f.fha = function() {
    this.zW();
    this.BW();
  };
  z.f.zW = function() {
    this.hH();
    var a = this.VN.$c(),
      a = a.top + a.height;
    if (z.sC(this.ub).top + this.fZ <= this.BU) return this.eZ();
    if (a >= this.AU) return this.bA();
  };
  z.f.BW = function() {
    var a = this.VN.$c(),
      b = z.sC(this.ub);
    return b.height < c7a || this.bH > b.top || b6a(this, a)
      ? this.zV()
      : this.dB();
  };
  z.f.dB = function() {
    z.cS(this.V(), "u-transition--fadeOut300", "u-transition--fadeIn300");
  };
  z.f.zV = function() {
    z.cS(this.V(), "u-transition--fadeIn300", "u-transition--fadeOut300");
  };
  z.f.bA = function() {
    var a = this.V();
    z.cS(a, "u-fixed", "u-absolute");
    z.vo(a, "transform", "translateY(" + this.BU + "px)");
  };
  z.f.eZ = function() {
    var a = this.V();
    z.cS(a, "u-absolute", "u-fixed");
    z.vo(a, "transform", "translateY(" + this.fZ + "px)");
  };
  z.f.hH = function() {
    var a = z.oC(this.ub, this.wX);
    this.AU = z.KB(a) + a.df();
    this.BU = this.AU - this.VN.df();
  };
  var a6a = 150,
    c7a = 400;
  z.m(i8, z.P);
  i8.prototype.S = function() {
    z.P.prototype.S.call(this);
    this.vX = z.oC(this.ub, this.Q9);
    if (this.Ka.isPublished() && this.vX.df() > d7a) {
      var a = z.Ax(this, ".js-postShareWidget"),
        a = new h8(this.X).Ha(a);
      a.wX = this.Q9;
      a.bH = z.KB(this.vX);
      this.V9 = a;
      this.track(this.V9);
    }
  };
  var d7a = 300;
  j8.prototype.hP = function(a, b, c) {
    return new Q7(a, b, c);
  };
  j8.prototype.Qn = function() {
    return T6a;
  };
  d6a.prototype.get = function(a) {
    return k8(this, a);
  };
  z.p(l8, z.ZW);
  z.f = l8.prototype;
  z.f.GG = !1;
  z.f.oA = "";
  z.f.HG = 0;
  z.f.Or = z.U;
  z.f.mg = function() {
    return this.RW;
  };
  z.f.save = function() {
    this.eb().length <= this.$l && this.cr();
  };
  z.f.pb = function() {
    (0, window.clearTimeout)(this.HG);
    l8.ea.pb.call(this);
  };
  z.f.S = function() {
    function a(a) {
      a.stopPropagation();
    }
    l8.ea.S.call(this);
    this.oA = this.eb();
    this.Fc(this.oA);
    this.px(13, this.WW, this);
    this.px(27, this.XW, this);
    this.mb.Ea("blur", this.VW, !1, this);
    var b = this.mb.Da();
    z.Pw(b, "keydown", a);
    z.Pw(b, "keyup", a);
    z.Pw(b, "keypress", a);
  };
  z.f.j2 = function(a) {
    return a;
  };
  z.f.cr = function() {
    if (this.isEnabled()) {
      var a = this.eb().trim();
      if (a) {
        this.uR(!1);
        var b = this.$ca(),
          a = this.Zca(a);
        this.fa("saving", a);
        z.Ad(
          z.v(
            z.u(this.Vk.post(b, a.Jb()), this.nsa, this),
            this.lsa.bind(this, a)
          ),
          this.uR.bind(this, !0)
        );
      }
    }
  };
  z.f.nsa = function(a) {
    this.fa("save", this.j2(a.value));
  };
  z.f.lsa = function(a, b) {
    this.fa("fail", a);
    this.pa.error(g6a());
    z.vx(b);
  };
  z.f.WW = function(a) {
    if (this.mr && z.AX(this.mr)) return !1;
    a.shiftKey || (a.preventDefault(), this.save());
    return !0;
  };
  z.f.XW = function(a) {
    if (this.mr && z.AX(this.mr)) return !1;
    a.preventDefault();
    this.Fc(this.oA);
    this.fa("cancel");
    return !1;
  };
  z.f.VW = function() {
    this.GG &&
      (this.eb().length >= this.$l
        ? (0, window.confirm)(this.bda())
          ? (this.Fc(this.oA), this.fa("cancel"))
          : this.focus()
        : (this.HG = (0, window.setTimeout)(this.cr.bind(this), 100)));
  };
  z.p(m8, l8);
  z.f = m8.prototype;
  z.f.yT = null;
  z.f.r6 = null;
  z.f.zT = null;
  z.f.Hj = null;
  z.f.FV = null;
  z.f.EV = null;
  z.f.h8 = null;
  z.f.Iy = function(a) {
    this.Hj = a;
    this.FV = a.startIndex;
    this.EV = a.endIndex;
    this.h8 = a.content;
    return this;
  };
  z.f.bda = function() {
    var a = z.n("Your note is too long; do you want to abandon your changes?");
    return (0, z.y)("" + a);
  };
  z.f.j2 = function(a) {
    var b = z.yw();
    a = z
      .Sx(a)
      .Zu(b)
      .$u(b.Ua());
    this.Hj && a.NB() && this.af.Iy(a.NB(), this.Hj);
    var b = this.af,
      c;
    c = z.XC(b.ka, a);
    W7(b, c.Wd()).add(c);
    return a;
  };
  z.f.$ca = function() {
    return this.mg()
      ? this.U.R(z.YBa, { postId: this.cb, noteId: this.mg() })
      : this.U.R(z.WBa, { postId: this.cb });
  };
  z.f.Zca = function(a) {
    var b = z.yw();
    a = new z.Rx({
      content: a,
      anchor: this.yT,
      anchorContent: this.r6,
      anchorImage: this.zT ? this.zT.Jb() : null,
      replies: [],
      createdAt: Date.now()
    }).Zu(b);
    null != this.FV &&
      null != this.EV &&
      ((b = new z.Ux({
        anchor: this.yT,
        startIndex: this.FV,
        endIndex: this.EV,
        content: this.h8
      })),
      a.Iy(b));
    return a;
  };
  z.p(n8, l8);
  n8.prototype.bda = function() {
    var a = z.n("Your reply is too long; do you want to abandon your changes?");
    return (0, z.y)("" + a);
  };
  n8.prototype.j2 = function(a) {
    var b = z.yw();
    a = z
      .Fma(a)
      .Zu(b)
      .$u(b.Ua());
    z.I(this.af.yp(a.mg(), this.ye), "replies").push(a);
    return a;
  };
  n8.prototype.$ca = function() {
    return this.B$
      ? this.U.R(z.aCa, {
          postId: this.cb,
          noteId: this.mg(),
          replyId: this.B$
        })
      : this.U.R(z.$Ba, { postId: this.cb, noteId: this.mg() });
  };
  n8.prototype.Zca = function(a) {
    var b = z.yw();
    return new z.Tx({
      replyId: "",
      postId: this.cb,
      noteId: this.mg(),
      content: a,
      createdAt: Date.now()
    }).Zu(b);
  };
  z.p(p8, z.P);
  z.f = p8.prototype;
  z.f.S = function() {
    p8.ea.S.call(this);
    z
      .T(this.V())
      .J("show-note-editor", this.BY, this)
      .J("hide-note-editor", this.BV.bind(this, !0))
      .J("show-reply-editor", this.Xwa, this)
      .J("hide-reply-editor", this.spa, this)
      .J("save-note", this.Qva, this)
      .J("save-reply", this.Rva, this)
      .J("highlight-quote", this.vpa, this)
      .J("dismiss-note", this.b7.bind(this, !0), this)
      .J("delete-note", this.b7.bind(this, !1), this)
      .J("delete-reply", this.cna, this)
      .J("previous-highlight-tip", this.zua, this)
      .J("next-highlight-tip", this.Qqa, this);
    u6a(this);
    this.aj &&
      C7(this.aj) &&
      (t6a(this), z.Bx(this, C7(this.aj), "add", this.ksa, this));
    if (this.PX && this.u8 && this.v8) {
      var a = this.query(".js-inlineNewPostControl"),
        b = this.PX,
        c = this.Ka.wa(),
        d = new z.XS(this.X);
      d.iJ("web-inline-quote-responses");
      d.Ha(a);
      d.OE = !0;
      d.wU = !0;
      d.tU = !0;
      d.tJ(l5a);
      d.nA = b;
      d.oJ(c);
      z.YS(d, !0);
      this.Ic = d;
      this.Ic.ba();
      a = r8(this.uG);
      this.fa("set-active-highlight", this.ye, a);
    }
    this.Hj && (this.BY(), this.vf && this.vf.focus());
    s8(this, 0);
  };
  z.f.ia = function() {
    this.Hq && this.Hq.v_();
    (this.Hj || this.uG) && this.fa("reset-highlight", this.ye, null);
    p8.ea.ia.call(this);
  };
  z.f.pb = function() {
    z.iy(this.V());
    z.Fg(this.V());
    z.Tm(this.Ic);
    z.Tm(this.vf);
    z.Tm(this.Hq);
    z.Um(z.tb(this.Kj));
    this.Hq = this.Kj = this.vf = this.Ic = null;
    p8.ea.pb.call(this);
  };
  z.f.Un = function() {
    if (this.vf && this.vf.eb()) return !0;
    for (var a = z.tb(this.Kj), b = 0; b < a.length; b++)
      if (a[b] && a[b].eb()) return !0;
    return this.Ic && !this.Ic.isDismissable() ? !0 : !1;
  };
  z.f.xq = function() {
    var a = [],
      b = [],
      c = [],
      d = this.sA && (this.Hj || this.uG);
    d ||
      (this.sw
        ? ((a = this.ge ? D7(this.ge, this.sw.quotes) : []),
          (b = this.sw.notes),
          (c = this.sw.responses))
        : ((b = this.af ? z.BD(W7(this.af, this.ye)) : []),
          this.RW ||
            (this.ge
              ? ((a = this.ge), (a = D7(a, a.Ft[this.ye] || [])))
              : (a = []),
            (c = this.aj ? J7(this.aj, this.ye) : []))));
    return z.Cw(q6a, {
      post: this.Ka.Ja(),
      quotes: a,
      notes: b,
      responses: c,
      Z3: !!this.PX,
      AR: d,
      yJ: this.sA,
      jD: this.Iaa,
      EDa: z.tF(this.Ka)
    });
  };
  z.f.ksa = function() {
    var a = this.query(".js-postList"),
      b = z.Cw(p6a, { responses: J7(this.aj, this.ye) });
    z.Gg(b, a);
    t6a(this);
  };
  z.f.BY = function() {
    if (this.sA) {
      if (!this.vf) {
        var a = this.query(".js-noteEditor"),
          b = z.Bw(n6a),
          a = (this.vf = new m8(this.X, a, this.Ka.wa(), null, b)),
          b = this.ye,
          c = this.Ka.Gi(this.Se.get(this.ye)),
          d = c.ra(),
          c = 4 == c.type ? c.le() : null;
        a.yT = b;
        a.r6 = d;
        a.zT = c;
        (a = this.Hj) && this.vf.Iy(a);
        z.Bx(this, this.vf, "saving", this.Ssa, this);
        z.Bx(this, this.vf, "fail", this.Lra, this);
        z.Bx(this, this.vf, "save", this.Nsa, this);
      }
      z.Xd(this.query(".js-noteActions"), "is-noteEditorVisible");
      this.vf && this.vf.focus();
    }
  };
  z.f.Qva = function() {
    this.vf && this.vf.save();
  };
  z.f.Ssa = function(a) {
    this.vf.Fc("");
    var b = this.query(".js-notesList");
    a = { note: a, post: this.Ka.Ja(), AR: this.sA, yJ: this.sA };
    a = z.Cw(o8, a);
    b.appendChild(a);
    z.ce(b, "is-empty");
    u6a(this);
    this.BV();
  };
  z.f.Nsa = function(a) {
    var b = this.query(".js-notesList").lastChild;
    a = a.mg();
    z.Xd(b, "js-note-" + a);
    b.setAttribute("data-note-id", a);
    (b = b.querySelector(".js-deleteNote")) &&
      b.setAttribute("data-action-value", a);
  };
  z.f.Lra = function() {
    var a = this.query(".js-notesList");
    a.removeChild(a.lastChild);
    z.Xd(a, "is-empty");
    this.BY();
  };
  z.f.BV = function(a) {
    a
      ? this.fa("close")
      : this.vf &&
        (this.vf.eb() && this.vf.Fc(""),
        z.ce(this.query(".js-noteActions"), "is-noteEditorVisible"));
  };
  z.f.Xwa = function(a) {
    (a = q8(a.target)) && this.sA && v6a(this, a);
  };
  z.f.Rva = function(a) {
    a = q8(a.target);
    (a = this.Kj[a]) && a.save();
  };
  z.f.Tsa = function(a) {
    var b = a.mg();
    this.Kj[b] && this.Kj[b].Fc("");
    var c = this.af.yp(b, this.ye).author.userId == a.author.userId,
      d = this.query(".js-note-" + a.mg() + " .js-repliesList");
    a = { note: a, post: this.Ka.Ja(), pea: c };
    a = z.Cw(o8, a);
    d.appendChild(a);
    z.ce(d, "is-empty");
    w6a(this, b);
  };
  z.f.Osa = function(a) {
    var b = this.query(".js-note-" + a.mg()).querySelector(".js-repliesList")
      .lastChild;
    a = a.Ux();
    z.Xd(b, "js-reply-" + a);
    (b = b.querySelector(".js-deleteNote")) &&
      b.setAttribute("data-action-value", a);
  };
  z.f.Mra = function(a) {
    var b = this.query(".js-note-" + a.mg() + " .js-repliesList");
    b.removeChild(b.lastChild);
    z.Xd(b, "is-empty");
    v6a(this, a.mg());
  };
  z.f.spa = function(a) {
    (a = q8(a.target)) && w6a(this, a);
  };
  z.f.vpa = function(a) {
    a = a.target;
    var b = a.getAttribute("data-quote-creator-id"),
      c = k8(this.Se, this.ye);
    c &&
      (this.Hq && this.Hq.v_(),
      (this.Hq = y6a(this, c, a, function() {
        x6a(this, b, !1);
        z.Tm(this.Hq);
        this.Hq = null;
      })),
      x6a(this, b, !0));
  };
  z.f.upa = function(a) {
    var b = k8(this.Se, this.ye);
    (a = this.af.yp(a.target.getAttribute("data-note-id"), this.ye)) &&
      b &&
      ((b = (b = a.NB()) ? this.af.GP(b) : null),
      this.fa("set-active-highlight", this.ye, b));
  };
  z.f.wpa = function(a) {
    var b = k8(this.Se, this.ye),
      c;
    c = this.aj;
    a = a.target.getAttribute("data-post-id");
    c = C7(c) ? z.EN(C7(c), a) : null;
    b &&
      c &&
      (b = H7(c)) &&
      (b = I7(b) && I7(b).Pn()) &&
      (c = b.Sb()) &&
      c.length &&
      ((b = r8(b)), this.fa("set-active-highlight", this.ye, b));
  };
  z.f.gZ = function() {
    var a = null;
    this.uG && (a = r8(this.uG));
    this.Hj && (a = this.Hj);
    this.fa("reset-highlight", this.ye, a);
  };
  z.f.b7 = function(a, b) {
    b = b.value;
    var c = this.af.yp(b, this.ye),
      d = this.query(".js-note-" + b);
    if (c && d) {
      z.ht(d);
      this.gZ();
      this.Za(".js-note-item").every(function(a) {
        return z.Wd(a, "u-hide");
      }) && this.BV(!0);
      var e = X7(this.af, c, "HIDDEN");
      z.v(
        e.al,
        function(b) {
          this.ha.ba(a ? h6a() : i6a(), "error");
          e.ZI();
          z.it(d);
          (400 > b.status || 499 < b.status) && X7(this.af, c, "NEW");
        },
        this
      );
      z.u(
        this.ha.ba(a ? k6a() : l6a(), { type: "success", kD: !0 }),
        function() {
          this.ha.bc();
          e.ZI();
          X7(this.af, c, "NEW");
          z.it(d);
        },
        this
      );
    }
  };
  z.f.cna = function(a) {
    var b = a.value,
      c = this.query(".js-reply-" + b),
      d = q8(a.target);
    if (d && c) {
      z.ht(c);
      var e = Y7(this.af, b, d, this.Ka.wa(), this.ye, "HIDDEN");
      z.v(
        e.al,
        function() {
          this.ha.ba(j6a(), "error");
          e.ZI();
          z.it(c);
          Y7(this.af, b, d, this.Ka.wa(), this.ye, "");
        },
        this
      );
      z.u(
        this.ha.ba(m6a(), { type: "success", kD: !0 }),
        function() {
          this.ha.bc();
          e.ZI();
          Y7(this.af, b, d, this.Ka.wa(), this.ye, "");
          z.it(c);
        },
        this
      );
    }
  };
  z.f.zua = function() {
    s8(this, this.oM - 1);
  };
  z.f.Qqa = function() {
    s8(this, this.oM + 1);
  };
  z.p(t8, z.P);
  z.f = t8.prototype;
  z.f.S = function() {
    t8.ea.S.call(this);
    var a = [];
    z.tF(this.Ka) && a.push(this.af.load(this.cb));
    this.A8 || (a.push(this.ge.load(this.cb)), a.push(this.aj.load(this.cb)));
    this.Yv = z.u(
      z.u(
        z.u(
          z.PR(a),
          function() {
            this.Yv = null;
          },
          this
        ),
        this.render,
        this
      ),
      this.Zla,
      this
    );
    z.Bx(this, this.lb, "resize-end", this.Hf, this);
  };
  z.f.ia = function() {
    this.Yv && this.Yv.cancel();
    t8.ea.ia.call(this);
  };
  z.f.pb = function() {
    this.Yv = null;
    t8.ea.pb.call(this);
  };
  z.f.render = function() {
    e6a(
      this.Se,
      function(a, b) {
        u8(this, b);
      },
      this
    );
  };
  z.f.Hf = function() {
    e6a(
      this.Se,
      function(a, b) {
        F6a(this, b);
      },
      this
    );
  };
  z.f.Zla = function() {
    var a = this.ge.Xo;
    z.Bx(this, a, "add", this.D9, this);
    z.Bx(this, a, "remove", this.D9, this);
    (a = C7(this.aj)) && z.Bx(this, a, "add", this.Ksa, this);
  };
  z.f.D9 = function(a) {
    z6a(this, Object.keys(z.pva(this.ge, a instanceof Array ? a : [a])));
  };
  z.f.Ksa = function(a) {
    z6a(this, (a instanceof Array ? a : [a]).map(this.aj.e0, this.aj));
  };
  z.f.xq = function(a) {
    var b = window.document.createElement("div");
    b.className = "notesMarkers";
    a.appendChild(b);
    return b;
  };
  z.f.QF = function(a, b) {
    z.Db(a, {
      startIndex: Math.min(a.startIndex, b.startIndex),
      endIndex: Math.max(a.endIndex, b.endIndex),
      notes: a.notes.concat(b.notes),
      quotes: a.quotes.concat(b.quotes),
      responses: a.responses.concat(b.responses)
    });
  };
  z.p(v8, z.P);
  z.f = v8.prototype;
  z.f.S = function() {
    v8.ea.S.call(this);
    this.Ea(this.va.V(), "click", this.tqa, this, !0);
    z.T(this.NF).J("select-anchor", this.Zsa, this);
    var a = this.Ka.Ja();
    if (a.Br() && !this.Ka.Ib()) {
      var b = z.Kq(a),
        b = 2 == a.visibility && b;
      a.allowResponses && !b && z.v(this.aj.load(this.Ka.wa(), "best"), z.vx);
      z.v(this.ge.load(this.Ka.wa()), z.vx);
    }
    a.ak().HH() && (this.fN = z.u(this.af.load(this.Ka.wa()), this.osa, this));
    this.uW && x8(this, null);
    z.Bx(
      this,
      this.Ya,
      "historyUpdate",
      function() {
        x8(this, z.kF());
      },
      this
    );
    this.Ae && z.Bx(this, this.Ae, "highlight", this.msa, this);
  };
  z.f.pb = function() {
    z.Tm(this.oh);
    this.oh = null;
    z.Tm(this.Nl);
    this.Nl = null;
    this.NF && z.T(this.NF).clear("select-anchor");
    this.fN && this.fN.cancel();
    this.fN = null;
    v8.ea.pb.call(this);
  };
  z.f.RDa = function(a, b) {
    w8(this, b, null, null, a);
  };
  z.f.XFa = function() {
    this.oh && this.oh.Hf();
  };
  z.f.Un = function() {
    if (!this.Nl) return !1;
    var a = this.Nl.eb();
    return a ? a.Un() : !1;
  };
  z.f.jsa = function(a) {
    a.subscribe("add", this.Taa, this);
    a.subscribe("remove", this.Taa, this);
  };
  z.f.Taa = function(a) {
    (z.oa(a) ? a : [a]).forEach(function(a) {
      u8(this.oh, a.Wd());
    }, this);
  };
  z.f.osa = function() {
    var a = (0, z.Ka)();
    this.fN = null;
    x8(this, z.kF());
    this.Ea(this.Pl, z.zI, this.eX, this);
    z.Xy(z.qEa, (0, z.Ka)() - a);
  };
  z.f.eX = function(a) {
    (a = a.target.getAttribute("name")) && k8(this.Se, a) && F6a(this.oh, a);
  };
  z.f.msa = function() {
    if (this.Ae) {
      var a = L6a(this, this.Ae.ax);
      z.gF(this.Ae);
      a && ((a = a.highlight), this.R$(a.anchor, a), w8(this, a.anchor, a));
    }
  };
  z.f.tqa = function(a) {
    if (this.Nl) {
      var b = a.target;
      if (!z.Mg(this.Nl.V(), b)) {
        var c = this.Nl.eb(),
          d;
        if (!(d = !c)) {
          a: if (c.vf && c.vf.eb()) c = !0;
          else {
            d = z.tb(c.Kj);
            for (var e = 0; e < d.length; e++)
              if (d[e] && d[e].eb()) {
                c = !0;
                break a;
              }
            c = c.Ic && !c.Ic.Ji() ? !0 : !1;
          }
          d = !c;
        }
        d &&
          ((c = this.Nl && this.Nl.yn),
          (d = "select-anchor" == b.getAttribute("data-action")),
          this.XX(),
          c && d && z.Mg(c, b) && a.stopPropagation());
      }
    }
  };
  z.f.rn = function(a) {
    if (!z.Gw()) {
      var b = a.yn,
        c = z.$w(b);
      a.gl();
      a = a.V();
      var d = z.$w(a),
        e = window.innerHeight,
        g = window.innerWidth,
        k = this.va.query(".js-metabar"),
        l = 0;
      k && (l = z.$w(k).height);
      d.height >= e - l
        ? H5a(a)
        : (z.Ww(b),
          (b =
            c.top + d.height >= e ? z.Xw().top + e - d.height - 10 : z.Ww(b)),
          (c = z.$w(this.NF).left + 10),
          c + d.width >= g && (c = g - d.width - 10),
          (a.style.top = b + "px"),
          (a.style.left = c + "px"));
    }
  };
  z.f.XX = function() {
    z.Tm(this.Nl);
    this.Nl = null;
  };
  z.f.Zsa = function(a) {
    var b = z.ct(
        a.target,
        function(a) {
          return z.Wd(a, "js-paragraphControl");
        },
        this.O9
      ),
      b = G6a(this.oh, a.value, b);
    w8(this, a.value, null, null, null, b);
  };
  z.f.R$ = function(a, b) {
    if (this.Ka.Ib()) {
      var c = z.jo();
      this.WN = (c = c && f6a(this.Se, c.Df())) && new O7(c);
    }
    K6a(this, a, b);
  };
  z.f.xva = function(a, b) {
    K6a(this, a, b);
    this.Ka.Ib() && this.WN && (a = this.WN.restore()) && a.select();
    this.WN = null;
  };
  z.f.Rw = function(a) {
    if (this.Se && (a = k8(this.Se, a))) {
      a = Math.max(z.Ww(a), 0);
      var b = z.hz(this.va);
      this.Ol && this.Ol.cancel();
      this.Ol = new z.dp(b, "scrollTop", 600, a);
    }
  };
  M6a.prototype.hP = function(a, b, c) {
    return new v8(a, b, c);
  };
  z.m(y8, z.P);
  z.f = y8.prototype;
  z.f.Yb = function(a) {
    this.W = a;
  };
  z.f.tJ = function(a) {
    this.vh = a;
  };
  z.f.aFa = function(a) {
    this.wY = a;
  };
  z.f.bFa = function(a) {
    this.daa = a;
  };
  z.f.S = function() {
    this.V()
      ? (z.P.prototype.S.call(this),
        z
          .T(this.V())
          .J("show-responses-stream-editor", this.lta, this)
          .J("show-other-responses", this.iaa, this),
        z.Aw(this.V(), this.vh, { post: this.W }),
        this.W.Br() &&
          z.v(
            z.u(
              z.u(
                z.u(
                  e5a(this.Pa, this.W.nb(), "best"),
                  this.y$.bind(this, "best")
                ),
                this.fva,
                this
              ),
              function() {
                this.qZ.w3 && this.iaa();
              },
              this
            ),
            z.vx
          ))
      : z.vx(
          "Attempted to initialize ResponsesStreamControl without root element."
        );
  };
  z.f.ia = function() {
    z.T(this.V()).clear("show-other-responses");
    z.P.prototype.ia.call(this);
  };
  z.f.y$ = function(a, b) {
    this.isActive() &&
      ((b = b.xe),
      "best" == a
        ? ((a = this.query(".js-responsesStream")),
          z.Bx(this, b, "add", this.e9.bind(this, b)),
          this.e9(b))
        : (a = this.query(".js-responsesStreamOther")),
      b &&
        (z.tr() || 0 < b.ue()) &&
        a &&
        (z.Aw(a, z.zQ, { items: z.BD(b), context: 2 }),
        (b = new z.AS(this.X, b)),
        b.Ha(a),
        b.md(2),
        this.track(b),
        z.it(this.query(".js-responsesStreamWrapper"))),
      this.daa && ((a = z.Ww(a)), z.Tw(window.document.body, 0, a)));
  };
  z.f.fva = function() {
    var a = this.query(".js-inlineNewPostControl"),
      b = this.query(".js-responsesLoggedOutPrompt");
    z.tr()
      ? a
        ? ((this.Ic = z
            .YS(
              Y4a(
                new z.XS(this.X).iJ("web-inline-post-response").oJ(this.W.nb()),
                z.zw(z.yi, { post: this.W, nR: !0 })
              ),
              this.wY
            )
            .Ha(a)),
          this.track(this.Ic))
        : b && this.wY && ((a = z.Vw(b)), (b = z.Ww(b)), z.Tw(a, 0, b))
      : b && z.Xd(b, "u-hide");
  };
  z.f.iaa = function() {
    this.iX ||
      (this.iX = z.Ad(
        z.u(
          z.u(e5a(this.Pa, this.W.nb(), "other"), this.y$.bind(this, "other")),
          function() {
            z.ht(this.query(".js-showOtherResponses"));
            this.qZ.w3 = !0;
          },
          this
        ),
        function() {
          this.iX = null;
        },
        this
      ));
  };
  z.f.e9 = function(a) {
    (a = a.Ok) &&
      a.next &&
      "other" == a.next.filter &&
      !this.qZ.w3 &&
      (z.it(this.query(".js-responsesStreamWrapper")),
      z.it(this.query(".js-showOtherResponses")));
  };
  z.f.Gx = function() {
    this.Ic && (z.DR(this.Ic.V(), new z.po(60, 0, 200, 0)), this.Ic.Gx());
  };
  z.f.lta = function() {
    var a = this.query(".js-responsesStreamEditor"),
      b = this.query(".js-showResponsesStreamEditorButton");
    z.jt(a) && (z.it(a), z.ht(b), this.Gx());
  };
  z.p(z8, z.zx);
  z8.prototype.focus = function() {
    this.isActive && this.Xy.focus();
  };
  z8.prototype.close = function() {
    this.Xy && !this.Xy.closed && this.Xy.close();
    this.fa("close");
    this.Rf();
  };
  z8.prototype.isActive = function() {
    return this.Xy ? !this.Xy.closed : !1;
  };
  z8.prototype.Ga = function() {
    this.Xy = null;
    z8.ea.Ga.call(this);
  };
  A8.prototype.fv = function(a, b, c) {
    var d;
    d = z.Pm;
    var e = new z.ui(z.Om(d)),
      e = new z.Ke(e.pp(a));
    d = P7(e, d);
    this.Aw(d);
    z.by(z.MF, {
      postId: a.id,
      type: b,
      source: c,
      dest: "facebook",
      dialogType: "native"
    });
  };
  A8.prototype.o3 = function(a) {
    var b;
    b = z.Pm;
    var c = new z.ui(z.Om(b));
    a = new z.Ke(c.R(z.Zv, { catalogSlug: a.Ne(), username: a.je().$j() }));
    b = P7(a, b);
    this.Aw(b);
  };
  A8.prototype.q3 = function(a) {
    var b;
    b = z.Pm;
    var c = new z.ui(z.Om(b));
    a = new z.Ke(c.R(z.Qv, { sequenceSlug: a.Vc() }));
    b = P7(a, b);
    this.Aw(b);
  };
  A8.prototype.Aw = function(a) {
    N6a(a, "facebook-share", { width: 550, height: 320 });
  };
  z.p(B8, z.Rm);
  B8.prototype.open = function(a, b) {
    this.W = a;
    this.ex = b;
    this.pa = this.ME.open({ bodyHtml: z.zw(M5a, this.ex), type: "tweet" }, !0);
    a = this.pa.query(".js-tweetEditor-text");
    b = this.X;
    var c = String,
      d;
    d = z.n("Enter tweet text.");
    d = (0, z.y)("" + d);
    this.eH = new z.WX(b, a, c(d), !0);
    a = new z.sU(280, !0);
    a.Q6 = M7;
    this.eH.Ia(a);
    a = p5a(I5a, this.ex, z.Pm);
    this.eH.Fc(a);
    this.eH.focus();
    P6a(this);
    z
      .T(this.pa.Nb)
      .J("remove-textshot", this.X$.bind(this, !1), this)
      .J("add-textshot", this.X$.bind(this, !0), this)
      .J("toggle-expand-image", this.Oxa, this);
    this.pa.subscribe(z.yz, this.sya.bind(this));
  };
  B8.prototype.sya = function() {
    var a = this.eH.eb();
    if (Q6a(this, a)) {
      var b = this.tM ? O6a(this) : null;
      z.v(
        z.u(
          this.Z.post(this.U.R(z.DBa), { tweet: a, textshotInfo: b }),
          function(a) {
            a = z.Bw(K5a, { id: a.value });
            a = z.zw(O5a, { QFa: a });
            this.ha.ba(a, { type: "success", Al: 1e4 });
          },
          this
        ),
        function(a) {
          z.vx(a);
          this.ha.ba(N5a(), "error");
        },
        this
      );
      z.Ry(z.fEa, {
        postId: this.W.id,
        type: this.ex.shareType,
        source: this.ex.eFa,
        dest: "twitter",
        style: this.tM ? "textshot" : null
      });
      this.pa.close();
    }
  };
  B8.prototype.X$ = function(a) {
    this.tM = a;
    z.fe(this.pa.query(".js-tweetEditor-imageContainer"), "u-hide", !a);
    z.fe(this.pa.query(".js-tweetEditor-addTextshot"), "u-hide", a);
  };
  B8.prototype.Oxa = function() {
    var a = this.pa.query(".js-tweetEditor-image");
    z.ge(a, "tweetEditor-image--expanded");
  };
  z.f = R6a.prototype;
  z.f.dFa = function(a, b) {
    var c = z.qr(),
      d = a.creator || {},
      e = a5a(b),
      g = $4a(b),
      k = q5a(a, z.Pm);
    (b = Q5a(b.b0())) && z.Qe(k, b || "");
    var l = {
      name: d.name || "",
      username: d.username || "",
      twitterScreenName: d.twitterScreenName || "",
      url: k.toString(),
      content: a.title,
      user: c,
      HFa: e,
      GFa: g,
      shareType: "highlight",
      eFa: "highlight_menu"
    };
    z.v(
      z.u(this.X.load("tweet-dialog"), function(b) {
        b.open(a, l);
      }),
      z.vx
    );
    z.Ry(z.MF, {
      postId: a.id,
      type: "highlight",
      source: "highlight_menu",
      dest: "twitter",
      dialogType: "inapp"
    });
    return !0;
  };
  z.f.fv = function(a, b, c, d, e) {
    var g = z.qr().userId,
      k = "highlight" == c ? I5a : z.Pia,
      l = z.Pm,
      q = a.creator || {};
    b = {
      content: b,
      name: q.name || "",
      username: q.username || "",
      twitterScreenName: q.twitterScreenName || "",
      Cba: q.userId == g,
      url: q5a(a, l).toString(),
      collaborators: d || []
    };
    d = d && d.length ? String(k(b, null, l)) : p5a(k, b, l);
    k = new z.Ke("https://twitter.com/intent/tweet");
    z.Ze(k, "text", d);
    this.Aw(k);
    z.by(z.MF, {
      postId: a.id,
      type: c,
      source: e,
      dest: "twitter",
      dialogType: "native"
    });
  };
  z.f.o3 = function(a) {
    var b = z.Pm,
      c = new z.ui(z.Om(b)),
      c = new z.Ke(
        c.R(z.Zv, { catalogSlug: a.Ne(), username: a.je().$j() })
      ).toString();
    a = z.B(
      "" +
        z.ml(String(a.name)) +
        ((null == a.creator ? null : a.creator.userId) != b.currentUser.userId
          ? " — " +
            z.Us({
              twitterScreenName:
                null == a.creator ? null : a.creator.twitterScreenName,
              name: null == a.creator ? null : a.creator.name
            })
          : "") +
        " " +
        ("" + c)
    );
    b = new z.Ke("https://twitter.com/intent/tweet");
    z.Ze(b, "text", a);
    this.Aw(b);
  };
  z.f.q3 = function(a) {
    var b = new z.ui(z.Om(z.Pm)),
      b = new z.Ke(b.R(z.Qv, { sequenceSlug: a.Vc() })).toString();
    a = z.B("" + z.ml(String(a.title)) + " " + ("" + b));
    b = new z.Ke("https://twitter.com/intent/tweet");
    z.Ze(b, "text", a);
    this.Aw(b);
  };
  z.f.Aw = function(a) {
    N6a(a, "twitter-share", { width: 670, height: 420 });
  };
  var e7a = z.yy,
    f7a = e7a.na();
  z.By(
    z.By(
      z.By(
        z.By(
          z.By(
            z.By(
              z.By(
                f7a
                  .scope("screen")
                  .add("quotes", j8)
                  .add("quote-responses", M6a)
                  .add("responses-stream-control", y8)
                  .add("notes-data", V7),
                "PlacementsStore",
                Z7
              ),
              "FriendLinkControl",
              d8
            ),
            "WriterControls",
            e8
          ),
          "Meter",
          c8
        ),
        "PostMeterBar",
        b8
      ),
      "PostFooterReadNext",
      g8
    ),
    "PostSidebar",
    i8
  );
  f7a
    .scope("app")
    .add("twitter", R6a)
    .add("facebook", A8)
    .add("tweet-dialog", B8);
  z.FN(e7a, "notes");
}.call(this, _mdm));
