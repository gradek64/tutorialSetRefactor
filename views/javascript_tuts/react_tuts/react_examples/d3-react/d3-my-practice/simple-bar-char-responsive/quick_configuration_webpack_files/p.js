(function() {
  window.PARSELY = window.PARSELY || {};
  window.PARSELY.version = "1.1.1";
  window.PARSELY.majorVersion = 1;
  window.PARSELY.flavor = "engagedtime-slots-sync";
  window.PARSELY.__template_track_tpcs = true;
  window.PARSELY.__template_track_ips = true;
  window.PARSELY.__template_heartbeat_should_honor_autotrack = undefined;
  window.PARSELY.__template_apikey = "medium.com";
})();

/*! parsely-js-api - v1.1.1 - 2018-08-07
 * http://www.parsely.com/
 * 2018 Parsely, Inc. */

(window.PARSELY = window.PARSELY || {}),
  (function() {
    var e = function() {
      return function(e) {
        this !== window && void 0 !== this && this.msgs.push(e);
      };
    };
    PARSELY.console = { msgs: [], log: e(), dir: e() };
  })(),
  (function() {
    var e = PARSELY.console,
      t = function(e) {
        return e < 10 ? "0" + e : "" + e;
      },
      n = new Date(),
      i =
        n.getUTCFullYear() +
        "-" +
        t(n.getUTCMonth() + 1) +
        "-" +
        t(n.getUTCDate()) +
        "-" +
        t(n.getUTCHours()),
      o = PARSELY.site || PARSELY.__template_apikey || "missing.parsely.com",
      r =
        document.location.protocol +
        "//" +
        (PARSELY.pixelhost || "srv-" + i + ".pixel.parsely.com");
    (PARSELY.pInit = function(t) {
      t.error === undefined
        ? (e.log("Static configuration loaded"),
          (PARSELY.config = t),
          (PARSELY.urls = { static: null, config: null, pixel: r }),
          (PARSELY._sync = !0))
        : e.log("Unable to load static configuration");
    }),
      e.log("Loading configuration statically");
    var a = {
      apikey: o,
      uuid: null,
      network_uuid: null,
      apikey_uuid: null,
      settings: {
        debug: !1,
        widget: !1,
        tracker: !0,
        test: window._parselyIsTest || !1
      },
      bundle: null,
      customizations: null,
      track_ip_addresses: PARSELY.__template_track_ips || !0,
      track_third_party_cookies: PARSELY.__template_track_tpcs || !1,
      heartbeat_should_honor_autotrack:
        PARSELY.__template_heartbeat_should_honor_autotrack || !1,
      is_remote_config: !1
    };
    (PARSELY.$LAB = null), PARSELY.pInit(a);
  })(),
  (function() {
    function f(e) {
      return e < 10 ? "0" + e : e;
    }
    function quote(e) {
      return (
        (escapable.lastIndex = 0),
        escapable.test(e)
          ? '"' +
            e.replace(escapable, function(e) {
              var t = meta[e];
              return "string" == typeof t
                ? t
                : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
            }) +
            '"'
          : '"' + e + '"'
      );
    }
    function str(e, t) {
      var n,
        i,
        o,
        r,
        a,
        s = gap,
        u = t[e];
      switch ((u &&
        "object" == typeof u &&
        "function" == typeof u.toJSON &&
        (u = u.toJSON(e)),
      "function" == typeof rep && (u = rep.call(t, e, u)),
      typeof u)) {
        case "string":
          return quote(u);
        case "number":
          return isFinite(u) ? String(u) : "null";
        case "boolean":
        case "null":
          return String(u);
        case "object":
          if (!u) return "null";
          if (
            ((gap += indent),
            (a = []),
            "[object Array]" === Object.prototype.toString.apply(u))
          ) {
            for (r = u.length, n = 0; n < r; n += 1) a[n] = str(n, u) || "null";
            return (
              (o =
                0 === a.length
                  ? "[]"
                  : gap
                    ? "[\n" + gap + a.join(",\n" + gap) + "\n" + s + "]"
                    : "[" + a.join(",") + "]"),
              (gap = s),
              o
            );
          }
          if (rep && "object" == typeof rep)
            for (r = rep.length, n = 0; n < r; n += 1)
              "string" == typeof (i = rep[n]) &&
                (o = str(i, u)) &&
                a.push(quote(i) + (gap ? ": " : ":") + o);
          else
            for (i in u)
              Object.hasOwnProperty.call(u, i) &&
                (o = str(i, u)) &&
                a.push(quote(i) + (gap ? ": " : ":") + o);
          return (
            (o =
              0 === a.length
                ? "{}"
                : gap
                  ? "{\n" + gap + a.join(",\n" + gap) + "\n" + s + "}"
                  : "{" + a.join(",") + "}"),
            (gap = s),
            o
          );
      }
    }
    this.PARSELY || (this.PARSELY = {});
    var root = this.PARSELY;
    root.JSON || (root.JSON = {}),
      "function" != typeof Date.prototype.toJSON &&
        ((Date.prototype.toJSON = function(e) {
          return isFinite(this.valueOf())
            ? this.getUTCFullYear() +
                "-" +
                f(this.getUTCMonth() + 1) +
                "-" +
                f(this.getUTCDate()) +
                "T" +
                f(this.getUTCHours()) +
                ":" +
                f(this.getUTCMinutes()) +
                ":" +
                f(this.getUTCSeconds()) +
                "Z"
            : null;
        }),
        (String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(
          e
        ) {
          return this.valueOf();
        }));
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      gap,
      indent,
      meta = {
        "\b": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
      },
      rep;
    "function" != typeof root.JSON.stringify &&
      (root.JSON.stringify = function(e, t, n) {
        var i;
        if (((gap = ""), (indent = ""), "number" == typeof n))
          for (i = 0; i < n; i += 1) indent += " ";
        else "string" == typeof n && (indent = n);
        if (
          ((rep = t),
          t &&
            "function" != typeof t &&
            ("object" != typeof t || "number" != typeof t.length))
        )
          throw new Error("JSON.stringify");
        return str("", { "": e });
      }),
      "function" != typeof root.JSON.parse &&
        (root.JSON.parse = function(text, reviver) {
          function walk(e, t) {
            var n,
              i,
              o = e[t];
            if (o && "object" == typeof o)
              for (n in o)
                Object.hasOwnProperty.call(o, n) &&
                  ((i = walk(o, n)) !== undefined ? (o[n] = i) : delete o[n]);
            return reviver.call(e, t, o);
          }
          var j;
          if (
            ((text = String(text)),
            (cx.lastIndex = 0),
            cx.test(text) &&
              (text = text.replace(cx, function(e) {
                return (
                  "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                );
              })),
            /^[\],:{}\s]*$/.test(
              text
                .replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@")
                .replace(
                  /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                  "]"
                )
                .replace(/(?:^|:|,)(?:\s*\[)+/g, "")
            ))
          )
            return (
              (j = eval("(" + text + ")")),
              "function" == typeof reviver ? walk({ "": j }, "") : j
            );
          throw new SyntaxError("JSON.parse");
        });
  })(),
  (function() {
    this.PARSELY || (this.PARSELY = {});
    var e = this.PARSELY,
      t = !1,
      n = /xyz/.test(function() {
        xyz;
      })
        ? /\b_super\b/
        : /.*/;
    (e.Class = function() {}),
      (e.Class.extend = function(e) {
        function i() {
          !t && this.init && this.init.apply(this, arguments);
        }
        var o = this.prototype;
        t = !0;
        var r = new this();
        t = !1;
        for (var a in e)
          r[a] =
            "function" == typeof e[a] &&
            "function" == typeof o[a] &&
            n.test(e[a])
              ? (function(e, t) {
                  return function() {
                    var n = this._super;
                    this._super = o[e];
                    var i = t.apply(this, arguments);
                    return (this._super = n), i;
                  };
                })(a, e[a])
              : e[a];
        return (
          (i.prototype = r),
          (i.constructor = i),
          (i.extend = arguments.callee),
          i
        );
      });
  })(),
  (function(e, t) {
    "undefined" == typeof PARSELY && (PARSELY = {}),
      "object" == typeof module && "object" == typeof module.exports
        ? ((module.exports = e.document
            ? t(e, !0)
            : function(e) {
                if (!e.document)
                  throw new Error("jQuery requires a window with a document");
                return t(e);
              }),
          (PARSELY.$ = PARSELY.jQuery = t(e, !0)))
        : (PARSELY.$ = PARSELY.jQuery = t(e, !1));
  })("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
      var t = e.length,
        n = v.type(e);
      return (
        "function" !== n &&
        !v.isWindow(e) &&
        (!(1 !== e.nodeType || !t) ||
          ("array" === n ||
            0 === t ||
            ("number" == typeof t && t > 0 && t - 1 in e)))
      );
    }
    function i(e) {
      var t;
      for (t in e)
        if (("data" !== t || !v.isEmptyObject(e[t])) && "toJSON" !== t)
          return !1;
      return !0;
    }
    function o(e, t, n, i) {
      if (v.acceptData(e)) {
        var o,
          r,
          a = v.expando,
          s = e.nodeType,
          u = s ? v.cache : e,
          l = s ? e[a] : e[a] && a;
        if (
          (l && u[l] && (i || u[l].data)) ||
          n !== undefined ||
          "string" != typeof t
        )
          return (
            l || (l = s ? (e[a] = c.pop() || v.guid++) : a),
            u[l] || (u[l] = s ? {} : { toJSON: v.noop }),
            ("object" != typeof t && "function" != typeof t) ||
              (i
                ? (u[l] = v.extend(u[l], t))
                : (u[l].data = v.extend(u[l].data, t))),
            (r = u[l]),
            i || (r.data || (r.data = {}), (r = r.data)),
            n !== undefined && (r[v.camelCase(t)] = n),
            "string" == typeof t
              ? null == (o = r[t]) && (o = r[v.camelCase(t)])
              : (o = r),
            o
          );
      }
    }
    function r() {
      return !0;
    }
    function a() {
      return !1;
    }
    function s() {
      try {
        return w.activeElement;
      } catch (e) {}
    }
    function u(e, t, n, i) {
      var o;
      if (v.isArray(t))
        v.each(t, function(t, o) {
          n || j.test(e)
            ? i(e, o)
            : u(e + "[" + ("object" == typeof o ? t : "") + "]", o, n, i);
        });
      else if (n || "object" !== v.type(t)) i(e, t);
      else for (o in t) u(e + "[" + o + "]", t[o], n, i);
    }
    var c = [],
      l = c.slice,
      d = (c.concat, c.push),
      f = (c.indexOf, {}),
      p = f.toString,
      g = f.hasOwnProperty,
      h = {},
      m =
        "1.11.1 -deprecated,-css,-css/addGetHookIf,-css/curCSS,-css/defaultDisplay,-css/hiddenVisibleSelectors,-css/support,-css/swap,-css/var/cssExpand,-css/var/isHidden,-css/var/rmargin,-css/var/rnumnonpx,-effects,-effects/Tween,-effects/animatedSelector,-effects/support,-dimensions,-offset,-ajax,-ajax/jsonp,-ajax/load,-ajax/parseJSON,-ajax/parseXML,-ajax/script,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl",
      v = function(e, t) {
        return new v.fn.init(e, t);
      },
      y = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      _ = /^-ms-/,
      S = /-([\da-z])/gi,
      b = function(e, t) {
        return t.toUpperCase();
      };
    (v.fn = v.prototype = {
      jquery: m,
      constructor: v,
      selector: "",
      length: 0,
      toArray: function() {
        return l.call(this);
      },
      get: function(e) {
        return null != e
          ? e < 0 ? this[e + this.length] : this[e]
          : l.call(this);
      },
      pushStack: function(e) {
        var t = v.merge(this.constructor(), e);
        return (t.prevObject = this), (t.context = this.context), t;
      },
      each: function(e, t) {
        return v.each(this, e, t);
      },
      map: function(e) {
        return this.pushStack(
          v.map(this, function(t, n) {
            return e.call(t, n, t);
          })
        );
      },
      slice: function() {
        return this.pushStack(l.apply(this, arguments));
      },
      first: function() {
        return this.eq(0);
      },
      last: function() {
        return this.eq(-1);
      },
      eq: function(e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
      },
      end: function() {
        return this.prevObject || this.constructor(null);
      },
      push: d,
      sort: c.sort,
      splice: c.splice
    }),
      (v.extend = v.fn.extend = function() {
        var e,
          t,
          n,
          i,
          o,
          r,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          c = !1;
        for (
          "boolean" == typeof a && ((c = a), (a = arguments[s] || {}), s++),
            "object" == typeof a || v.isFunction(a) || (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (o = arguments[s]))
            for (i in o)
              (e = a[i]),
                a !== (n = o[i]) &&
                  (c && n && (v.isPlainObject(n) || (t = v.isArray(n)))
                    ? (t
                        ? ((t = !1), (r = e && v.isArray(e) ? e : []))
                        : (r = e && v.isPlainObject(e) ? e : {}),
                      (a[i] = v.extend(c, r, n)))
                    : n !== undefined && (a[i] = n));
        return a;
      }),
      v.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
          throw new Error(e);
        },
        noop: function() {},
        isFunction: function(e) {
          return "function" === v.type(e);
        },
        isArray:
          Array.isArray ||
          function(e) {
            return "array" === v.type(e);
          },
        isWindow: function(e) {
          return null != e && e == e.window;
        },
        isNumeric: function(e) {
          return !v.isArray(e) && e - parseFloat(e) >= 0;
        },
        isEmptyObject: function(e) {
          var t;
          for (t in e) return !1;
          return !0;
        },
        isPlainObject: function(e) {
          var t;
          if (!e || "object" !== v.type(e) || e.nodeType || v.isWindow(e))
            return !1;
          try {
            if (
              e.constructor &&
              !g.call(e, "constructor") &&
              !g.call(e.constructor.prototype, "isPrototypeOf")
            )
              return !1;
          } catch (n) {
            return !1;
          }
          if (h.ownLast) for (t in e) return g.call(e, t);
          for (t in e);
          return t === undefined || g.call(e, t);
        },
        type: function(e) {
          return null == e
            ? e + ""
            : "object" == typeof e || "function" == typeof e
              ? f[p.call(e)] || "object"
              : typeof e;
        },
        camelCase: function(e) {
          return e.replace(_, "ms-").replace(S, b);
        },
        nodeName: function(e, t) {
          return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        },
        each: function(e, t, i) {
          var o = 0,
            r = e.length,
            a = n(e);
          if (i) {
            if (a) for (; o < r && !1 !== t.apply(e[o], i); o++);
            else for (o in e) if (!1 === t.apply(e[o], i)) break;
          } else if (a) for (; o < r && !1 !== t.call(e[o], o, e[o]); o++);
          else for (o in e) if (!1 === t.call(e[o], o, e[o])) break;
          return e;
        },
        trim: function(e) {
          return null == e ? "" : (e + "").replace(y, "");
        },
        makeArray: function(e, t) {
          var i = t || [];
          return (
            null != e &&
              (n(Object(e))
                ? v.merge(i, "string" == typeof e ? [e] : e)
                : d.call(i, e)),
            i
          );
        },
        guid: 1,
        now: function() {
          return +new Date();
        },
        support: h
      }),
      v.each(
        "Boolean Number String Function Array Date RegExp Object Error".split(
          " "
        ),
        function(e, t) {
          f["[object " + t + "]"] = t.toLowerCase();
        }
      );
    var x,
      E = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      w = e.document,
      k = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    ((v.fn.init = function(e, t) {
      var n, i;
      if (!e) return this;
      if ("string" == typeof e) {
        if (
          (n =
            "<" === e.charAt(0) &&
            ">" === e.charAt(e.length - 1) &&
            e.length >= 3
              ? [null, e, null]
              : k.exec(e)) &&
          (n[1] || !t)
        ) {
          if (n[1]) {
            if (
              ((t = t instanceof v ? t[0] : t),
              v.merge(
                this,
                v.parseHTML(
                  n[1],
                  t && t.nodeType ? t.ownerDocument || t : w,
                  !0
                )
              ),
              E.test(n[1]) && v.isPlainObject(t))
            )
              for (n in t)
                v.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
            return this;
          }
          return (
            (i = w.getElementById(n[2])) &&
              i.parentNode &&
              ((this.length = 1), (this[0] = i)),
            (this.context = w),
            (this.selector = e),
            this
          );
        }
      } else {
        if (e.nodeType)
          return (this.context = this[0] = e), (this.length = 1), this;
        if (v.isFunction(e))
          return "undefined" != typeof x.ready ? x.ready(e) : e(v);
      }
      return (
        e.selector !== undefined &&
          ((this.selector = e.selector), (this.context = e.context)),
        v.makeArray(e, this)
      );
    }).prototype =
      v.fn),
      (x = v(w));
    var P,
      A = /\S+/g,
      C = typeof undefined;
    for (P in v(h)) break;
    (h.ownLast = "0" !== P),
      (v.acceptData = function(e) {
        var t = v.noData[(e.nodeName + " ").toLowerCase()],
          n = +e.nodeType || 1;
        return (
          (1 === n || 9 === n) &&
          (!t || (!0 !== t && e.getAttribute("classid") === t))
        );
      });
    v.extend({
      cache: {},
      noData: {
        "applet ": !0,
        "embed ": !0,
        "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
      },
      hasData: function(e) {
        return (
          !!(e = e.nodeType ? v.cache[e[v.expando]] : e[v.expando]) && !i(e)
        );
      },
      data: function(e, t, n) {
        return o(e, t, n);
      },
      _data: function(e, t, n) {
        return o(e, t, n, !0);
      }
    });
    !(function() {
      var t,
        n,
        i = w.createElement("div");
      for (t in { submit: !0, change: !0, focusin: !0 })
        (n = "on" + t),
          (h[t + "Bubbles"] = n in e) ||
            (i.setAttribute(n, "t"),
            (h[t + "Bubbles"] = !1 === i.attributes[n].expando));
      i = null;
    })();
    var L = /^key/,
      T = /^(?:mouse|pointer|contextmenu)|click/,
      R = /^(?:focusinfocus|focusoutblur)$/,
      N = /^([^.]*)(?:\.(.+)|)$/;
    (v.event = {
      global: {},
      add: function(e, t, n, i, o) {
        var r,
          a,
          s,
          u,
          c,
          l,
          d,
          f,
          p,
          g,
          h,
          m = v._data(e);
        if (m) {
          for (
            n.handler && ((n = (u = n).handler), (o = u.selector)),
              n.guid || (n.guid = v.guid++),
              (a = m.events) || (a = m.events = {}),
              (l = m.handle) ||
                ((l = m.handle = function(e) {
                  return typeof v === C || (e && v.event.triggered === e.type)
                    ? undefined
                    : v.event.dispatch.apply(l.elem, arguments);
                }).elem = e),
              s = (t = (t || "").match(A) || [""]).length;
            s--;

          )
            (p = h = (r = N.exec(t[s]) || [])[1]),
              (g = (r[2] || "").split(".").sort()),
              p &&
                ((c = v.event.special[p] || {}),
                (p = (o ? c.delegateType : c.bindType) || p),
                (c = v.event.special[p] || {}),
                (d = v.extend(
                  {
                    type: p,
                    origType: h,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && v.expr.match.needsContext.test(o),
                    namespace: g.join(".")
                  },
                  u
                )),
                (f = a[p]) ||
                  (((f = a[p] = []).delegateCount = 0),
                  (c.setup && !1 !== c.setup.call(e, i, g, l)) ||
                    (e.addEventListener
                      ? e.addEventListener(p, l, !1)
                      : e.attachEvent && e.attachEvent("on" + p, l))),
                c.add &&
                  (c.add.call(e, d),
                  d.handler.guid || (d.handler.guid = n.guid)),
                o ? f.splice(f.delegateCount++, 0, d) : f.push(d),
                (v.event.global[p] = !0));
          e = null;
        }
      },
      trigger: function(t, n, i, o) {
        var r,
          a,
          s,
          u,
          c,
          l,
          d,
          f = [i || w],
          p = g.call(t, "type") ? t.type : t,
          h = g.call(t, "namespace") ? t.namespace.split(".") : [];
        if (
          ((s = l = i = i || w),
          3 !== i.nodeType &&
            8 !== i.nodeType &&
            !R.test(p + v.event.triggered) &&
            (p.indexOf(".") >= 0 &&
              ((p = (h = p.split(".")).shift()), h.sort()),
            (a = p.indexOf(":") < 0 && "on" + p),
            (t = t[v.expando] ? t : new v.Event(p, "object" == typeof t && t)),
            (t.isTrigger = o ? 2 : 3),
            (t.namespace = h.join(".")),
            (t.namespace_re = t.namespace
              ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
              : null),
            (t.result = undefined),
            t.target || (t.target = i),
            (n = null == n ? [t] : v.makeArray(n, [t])),
            (c = v.event.special[p] || {}),
            o || !c.trigger || !1 !== c.trigger.apply(i, n)))
        ) {
          if (!o && !c.noBubble && !v.isWindow(i)) {
            for (
              u = c.delegateType || p, R.test(u + p) || (s = s.parentNode);
              s;
              s = s.parentNode
            )
              f.push(s), (l = s);
            l === (i.ownerDocument || w) &&
              f.push(l.defaultView || l.parentWindow || e);
          }
          for (d = 0; (s = f[d++]) && !t.isPropagationStopped(); )
            (t.type = d > 1 ? u : c.bindType || p),
              (r =
                (v._data(s, "events") || {})[t.type] && v._data(s, "handle")) &&
                r.apply(s, n),
              (r = a && s[a]) &&
                r.apply &&
                v.acceptData(s) &&
                ((t.result = r.apply(s, n)),
                !1 === t.result && t.preventDefault());
          if (
            ((t.type = p),
            !o &&
              !t.isDefaultPrevented() &&
              (!c._default || !1 === c._default.apply(f.pop(), n)) &&
              v.acceptData(i) &&
              a &&
              i[p] &&
              !v.isWindow(i))
          ) {
            (l = i[a]) && (i[a] = null), (v.event.triggered = p);
            try {
              i[p]();
            } catch (m) {}
            (v.event.triggered = undefined), l && (i[a] = l);
          }
          return t.result;
        }
      },
      dispatch: function(e) {
        e = v.event.fix(e);
        var t,
          n,
          i,
          o,
          r,
          a = [],
          s = l.call(arguments),
          u = (v._data(this, "events") || {})[e.type] || [],
          c = v.event.special[e.type] || {};
        if (
          ((s[0] = e),
          (e.delegateTarget = this),
          !c.preDispatch || !1 !== c.preDispatch.call(this, e))
        ) {
          for (
            a = v.event.handlers.call(this, e, u), t = 0;
            (o = a[t++]) && !e.isPropagationStopped();

          )
            for (
              e.currentTarget = o.elem, r = 0;
              (i = o.handlers[r++]) && !e.isImmediatePropagationStopped();

            )
              (e.namespace_re && !e.namespace_re.test(i.namespace)) ||
                ((e.handleObj = i),
                (e.data = i.data),
                (n = (
                  (v.event.special[i.origType] || {}).handle || i.handler
                ).apply(o.elem, s)) !== undefined &&
                  !1 === (e.result = n) &&
                  (e.preventDefault(), e.stopPropagation()));
          return c.postDispatch && c.postDispatch.call(this, e), e.result;
        }
      },
      handlers: function(e, t) {
        var n,
          i,
          o,
          r,
          a = [],
          s = t.delegateCount,
          u = e.target;
        if (s && u.nodeType && (!e.button || "click" !== e.type))
          for (; u != this; u = u.parentNode || this)
            if (1 === u.nodeType && (!0 !== u.disabled || "click" !== e.type)) {
              for (o = [], r = 0; r < s; r++)
                o[(n = (i = t[r]).selector + " ")] === undefined &&
                  (o[n] = i.needsContext
                    ? v(n, this).index(u) >= 0
                    : v.find(n, this, null, [u]).length),
                  o[n] && o.push(i);
              o.length && a.push({ elem: u, handlers: o });
            }
        return s < t.length && a.push({ elem: this, handlers: t.slice(s) }), a;
      },
      fix: function(e) {
        if (e[v.expando]) return e;
        var t,
          n,
          i,
          o = e.type,
          r = e,
          a = this.fixHooks[o];
        for (
          a ||
            (this.fixHooks[o] = a = T.test(o)
              ? this.mouseHooks
              : L.test(o) ? this.keyHooks : {}),
            i = a.props ? this.props.concat(a.props) : this.props,
            e = new v.Event(r),
            t = i.length;
          t--;

        )
          e[(n = i[t])] = r[n];
        return (
          e.target || (e.target = r.srcElement || w),
          3 === e.target.nodeType && (e.target = e.target.parentNode),
          (e.metaKey = !!e.metaKey),
          a.filter ? a.filter(e, r) : e
        );
      },
      props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
        " "
      ),
      fixHooks: {},
      special: {
        load: { noBubble: !0 },
        focus: {
          trigger: function() {
            if (this !== s() && this.focus)
              try {
                return this.focus(), !1;
              } catch (e) {}
          },
          delegateType: "focusin"
        },
        blur: {
          trigger: function() {
            if (this === s() && this.blur) return this.blur(), !1;
          },
          delegateType: "focusout"
        }
      }
    }),
      (v.Event = function(e, t) {
        if (!(this instanceof v.Event)) return new v.Event(e, t);
        e && e.type
          ? ((this.originalEvent = e),
            (this.type = e.type),
            (this.isDefaultPrevented =
              e.defaultPrevented ||
              (e.defaultPrevented === undefined && !1 === e.returnValue)
                ? r
                : a))
          : (this.type = e),
          t && v.extend(this, t),
          (this.timeStamp = (e && e.timeStamp) || v.now()),
          (this[v.expando] = !0);
      }),
      (v.Event.prototype = {
        isDefaultPrevented: a,
        isPropagationStopped: a,
        isImmediatePropagationStopped: a,
        stopPropagation: function() {
          var e = this.originalEvent;
          (this.isPropagationStopped = r),
            e &&
              (e.stopPropagation && e.stopPropagation(), (e.cancelBubble = !0));
        },
        stopImmediatePropagation: function() {
          var e = this.originalEvent;
          (this.isImmediatePropagationStopped = r),
            e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
            this.stopPropagation();
        }
      }),
      v.fn.extend({
        on: function(e, t, n, i, o) {
          var r, s;
          if ("object" == typeof e) {
            "string" != typeof t && ((n = n || t), (t = undefined));
            for (r in e) this.on(r, t, n, e[r], o);
            return this;
          }
          if (
            (null == n && null == i
              ? ((i = t), (n = t = undefined))
              : null == i &&
                ("string" == typeof t
                  ? ((i = n), (n = undefined))
                  : ((i = n), (n = t), (t = undefined))),
            !1 === i)
          )
            i = a;
          else if (!i) return this;
          return (
            1 === o &&
              ((s = i),
              ((i = function(e) {
                return v().off(e), s.apply(this, arguments);
              }).guid =
                s.guid || (s.guid = v.guid++))),
            this.each(function() {
              v.event.add(this, e, i, n, t);
            })
          );
        },
        trigger: function(e, t) {
          return this.each(function() {
            v.event.trigger(e, t, this);
          });
        },
        triggerHandler: function(e, t) {
          var n = this[0];
          if (n) return v.event.trigger(e, t, n, !0);
        }
      });
    h.getSetAttribute, h.input;
    v.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function(e, t) {
        v.fn[t] = function(e, n) {
          return arguments.length > 0
            ? this.on(t, null, e, n)
            : this.trigger(t);
        };
      }
    );
    var D = /%20/g,
      j = /\[\]$/;
    v.param = function(e, t) {
      var n,
        i = [],
        o = function(e, t) {
          (t = v.isFunction(t) ? t() : null == t ? "" : t),
            (i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t));
        };
      if (
        (t === undefined && (t = v.ajaxSettings && v.ajaxSettings.traditional),
        v.isArray(e) || (e.jquery && !v.isPlainObject(e)))
      )
        v.each(e, function() {
          o(this.name, this.value);
        });
      else for (n in e) u(n, e[n], t, o);
      return i.join("&").replace(D, "+");
    };
    var O = e.jQuery,
      Y = e.$;
    return (
      (v.noConflict = function(t) {
        return e.$ === v && (e.$ = Y), t && e.jQuery === v && (e.jQuery = O), v;
      }),
      typeof t === C && (e.jQuery = e.$ = v),
      v
    );
  }),
  (function(e, t, n, i) {
    for (
      var o,
        r,
        a =
          ("onfocusin" in t) && ("hasFocus" in t)
            ? "focusin focusout"
            : "focus blur",
        s = ["webkit", "o", "ms", "moz", ""],
        u = n.support || {},
        c = n.event;
      void 0 != (o = s.pop());

    )
      if (
        ((r = (o ? o + "H" : "h") + "idden"),
        (u.pageVisibility = "boolean" == typeof t[r]))
      ) {
        a = o + "visibilitychange";
        break;
      }
    n(/blur$/.test(a) ? e : t).on(a, function(e) {
      var n = e.type,
        i = e.originalEvent;
      if (i) {
        var o = i.toElement;
        if (
          !/^focus./.test(n) ||
          (void 0 == o && void 0 == i.fromElement && void 0 == i.relatedTarget)
        ) {
          var a;
          (a = (r && t[r]) || /^(?:blur|focusout)$/.test(n) ? "hide" : "show"),
            (a += ".visibility"),
            c.trigger(a);
        }
      }
    });
  })(this, document, PARSELY.jQuery),
  (function() {
    this.PARSELY = this.PARSELY || {};
    var e,
      t = this.PARSELY,
      n = t.$;
    (t.util = {}),
      ((e = t.util).reduce = function(e, t, i) {
        return (
          2 === arguments.length &&
            ((i = e[0]), (e = e.splice(1, e.length - 1))),
          n.each(e, function(e, n) {
            i = t.apply(n, [i, n]);
          }),
          i
        );
      }),
      (e.arrayContains = function(e, t) {
        var i = !1;
        return (
          n.each(e, function(e, n) {
            if (n === t) return (i = !0), !1;
          }),
          i
        );
      }),
      (e.objectValues = function(e) {
        var t = [];
        for (var n in e) t.push(e[n]);
        return t;
      }),
      (e.getWindow = function() {
        try {
          return window.top.document.cookie, window.top;
        } catch (e) {
          try {
            return window.parent.document.cookie, window.parent;
          } catch (t) {
            return window;
          }
        }
      }),
      (e.windowSetFunction = function(t, n) {
        var i = e.getWindow(),
          o = i[t];
        i[t] = function() {
          n(), "function" == typeof o && o();
        };
      }),
      (e.windowAddEventListener = function(e, t) {
        var n = !1;
        try {
          addEventListener(
            "test",
            null,
            Object.defineProperty({}, "passive", {
              get: function() {
                n = !0;
              }
            })
          );
        } catch (o) {}
        var i = !1;
        return (
          n && (i = { passive: !0, capture: !1 }),
          "undefined" != typeof window.addEventListener
            ? window.addEventListener(e, t, i)
            : "undefined" != typeof document.attachEvent &&
              document.attachEvent("on" + e, t)
        );
      }),
      (e.windowRemoveEventListener = function(e, t, n) {
        return (
          (n = void 0 !== n && n),
          "undefined" != typeof window.removeEventListener
            ? window.removeEventListener(e, t, n)
            : "undefined" != typeof document.detachEvent &&
              document.detachEvent("on" + e, t)
        );
      }),
      (e.objAddEventListener = function(e, t, n, i) {
        return (
          (i = void 0 !== i && i),
          "undefined" != typeof e.addEventListener
            ? e.addEventListener(t, n, i)
            : "undefined" != typeof e.attachEvent && e.attachEvent("on" + t, n)
        );
      }),
      (e.objRemoveEventListener = function(e, t, n, i) {
        return (
          (i = void 0 !== i && i),
          "undefined" != typeof e.removeEventListener
            ? e.removeEventListener(t, n, i)
            : "undefined" != typeof e.detachEvent && e.detachEvent("on" + t, n)
        );
      }),
      (e.getRandomInt = function(e, t) {
        return Math.floor(Math.random() * (t - e + 1)) + e;
      });
  })(),
  (function(e) {
    "use strict";
    e.Cookies = (function(t) {
      var n = function(e, t, i) {
        return 1 === arguments.length ? n.get(e) : n.set(e, t, i);
      };
      return (
        (n._document = t.document),
        (n._cacheKeyPrefix = "cookey."),
        (n._maxExpireDate = new Date("Fri, 31 Dec 9999 23:59:59 UTC")),
        (n.defaults = { path: "/", secure: !1 }),
        (n.get = function(e) {
          return n._renewCache(), n._cache[n._cacheKeyPrefix + e];
        }),
        (n.getJSON = function(t) {
          var i = n.get(t);
          return i === undefined ? i : e.JSON.parse(i);
        }),
        (n.set = function(t, i, o) {
          (o = n._getExtendedOptions(o)).expires = n._getExpiresDate(
            i === undefined ? -1 : o.expires
          );
          try {
            n._document.cookie = n._generateCookieString(t, i, o);
          } catch (r) {
            e.console.log(r);
          }
          return n;
        }),
        (n.setJSON = function(t, i, o) {
          return n.set(t, e.JSON.stringify(i), o), n;
        }),
        (n.extendExpiry = function(e, t) {
          var i = n.get(e);
          if (i === undefined) return !1;
          n.set(e, i, t);
        }),
        (n.expire = function(e, t) {
          if (e.constructor !== Array) return n.set(e, undefined, t);
          for (var i = 0; i < e.length; i++) n.set(e[i], undefined, t);
        }),
        (n._getExtendedOptions = function(e) {
          return {
            path: (e && e.path) || n.defaults.path,
            domain: (e && e.domain) || n.defaults.domain,
            expires: (e && e.expires) || n.defaults.expires,
            secure: e && e.secure !== undefined ? e.secure : n.defaults.secure
          };
        }),
        (n._isValidDate = function(e) {
          return (
            "[object Date]" === Object.prototype.toString.call(e) &&
            !isNaN(e.getTime())
          );
        }),
        (n._getExpiresDate = function(e, t) {
          if (
            ((t = t || new Date()),
            "number" == typeof e
              ? (e =
                  e === Infinity
                    ? n._maxExpireDate
                    : new Date(t.getTime() + 1e3 * e))
              : "string" == typeof e && (e = new Date(e)),
            e && !n._isValidDate(e))
          )
            throw new Error(
              "`expires` parameter cannot be converted to a valid Date instance"
            );
          return e;
        }),
        (n._generateCookieString = function(t, i, o) {
          (t = (t = t.replace(/[^#$&+\^`|]/g, encodeURIComponent))
            .replace(/\(/g, "%28")
            .replace(/\)/g, "%29")),
            (i = (i + "").replace(
              /[^!#$&-+\--:<-\[\]-~]/g,
              encodeURIComponent
            ));
          var r = (o = o || {}).domain || e.cookieDomain || n._autoCookieDomain,
            a = t + "=" + i;
          return (
            (a += o.path ? ";path=" + o.path : ""),
            (a += r ? ";domain=" + r : ""),
            (a += o.expires ? ";expires=" + o.expires.toUTCString() : ""),
            (a += o.secure ? ";secure" : "")
          );
        }),
        (n._getCacheFromString = function(e) {
          for (
            var t = {}, i = e ? e.split("; ") : [], o = 0;
            o < i.length;
            o++
          ) {
            var r = n._getKeyValuePairFromCookieString(i[o]);
            if (null != r) {
              var a = n._cacheKeyPrefix + r.key;
              t[a] === undefined && (t[a] = r.value);
            }
          }
          return t;
        }),
        (n._getKeyValuePairFromCookieString = function(e) {
          var t = e.indexOf("=");
          t = t < 0 ? e.length : t;
          var n = e.substr(0, t),
            i = e.substr(t + 1);
          try {
            (n = decodeURIComponent(n)), (i = decodeURIComponent(i));
          } catch (o) {
            return null;
          }
          return { key: n, value: i };
        }),
        (n._renewCache = function() {
          try {
            n._cachedDocumentCookie !== n._document.cookie &&
              ((n._cache = n._getCacheFromString(n._document.cookie)),
              (n._cachedDocumentCookie = n._document.cookie));
          } catch (t) {
            e.console.log(t);
          }
        }),
        (n._isValidDomain = function(e) {
          var t = "cookies.js_dtest",
            i = "1" === n.set(t, 1, { domain: e }).get(t);
          return n.expire(t, { domain: e }), i;
        }),
        (n._getAutoCookieDomain = function() {
          var t = e.util.getWindow().location.hostname;
          if (!isNaN(parseInt(t.replace(".", ""), 10)))
            return n._isValidDomain(t) ? t : null;
          var i = t.split(".");
          if (1 === i.length) return t;
          for (var o, r = 2; r <= i.length; r++) {
            var a = i.slice(-r).join(".");
            if (n._isValidDomain(a)) {
              o = a;
              break;
            }
          }
          return o || t;
        }),
        (n._autoCookieDomain = n._getAutoCookieDomain()),
        n
      );
    })(e.util.getWindow());
  })(this.PARSELY),
  (function(e) {
    "use strict";
    e.LocalStorage = (function(t) {
      var n = function(e, t, i) {
        return 1 === arguments.length ? n.get(e) : n.set(e, t, i);
      };
      return (
        (n._keyPrefix = "pStore-"),
        (n._delimiter = "|^"),
        (n._store = t.localStorage),
        (n._baseDomain = null),
        (n.get = function(e) {
          n._setDomain(), n._migrateCookie(e);
          var t = n._store[n._keyPrefix + e];
          if (void 0 === t) return undefined;
          try {
            t = n._deserialize(t);
          } catch (o) {
            return (
              console.log("Error deserializing stored data for key " + e),
              n.expire(e),
              undefined
            );
          }
          if ("undefined" != typeof t.expires) {
            var i = parseInt(t.expires, 10);
            if (!isNaN(i) && new Date().getTime() > i)
              return n.expire(e), undefined;
          }
          return n._unsetDomain(), t.value;
        }),
        (n.getJSON = function(t) {
          var i = n.get(t);
          return void 0 === i ? i : e.JSON.parse(i);
        }),
        (n.set = function(t, i, o) {
          n._setDomain();
          var r = n._keyPrefix + t;
          if (void 0 === i) return delete n._store[r], n;
          o = e.Cookies._getExtendedOptions(o);
          var a,
            s = e.Cookies._getExpiresDate(o.expires);
          void 0 !== s && (s = s.getTime());
          try {
            a = n._serialize({ value: i, expires: s });
          } catch (u) {
            return console.log("Error serializing stored data for key " + t), n;
          }
          return (n._store[r] = a), n._unsetDomain(), n;
        }),
        (n.setJSON = function(t, i, o) {
          return n.set(t, e.JSON.stringify(i), o), n;
        }),
        (n.extendExpiry = function(e, t) {
          var i = n.get(e);
          if (void 0 === i) return !1;
          n.set(e, i, t);
        }),
        (n.expire = function(e, t) {
          return n.set(e, undefined, t);
        }),
        (n._serialize = function(e) {
          return e.value + n._delimiter + e.expires;
        }),
        (n._deserialize = function(e) {
          var t = e.split(n._delimiter),
            i = { value: t[0] };
          return t.length > 1 && (i.expires = t[1]), i;
        }),
        (n._migrateCookie = function(t) {
          var i = e.Cookies.get(t);
          if ((e.Cookies.expire(t), void 0 !== i)) {
            var o = e.ParselyStorage.defaults[t],
              r = {};
            void 0 !== o && (r.expires = o), n.set(t, i, r);
          }
        }),
        (n._setDomain = function() {
          if (t === window) {
            n._baseDomain = document.domain;
            try {
              document.domain = e.Cookies._autoCookieDomain;
            } catch (i) {
              console.log("Error setting document.domain for LocalStorage");
            }
          }
        }),
        (n._unsetDomain = function() {
          if (null !== n._baseDomain)
            try {
              document.domain = n._baseDomain;
            } catch (e) {
              console.log("Error setting document.domain for LocalStorage");
            }
        }),
        n
      );
    })(e.util.getWindow());
    e.ParselyStorage = (function(t) {
      var n = function(e, t, i) {
        return 1 === arguments.length ? n.get(e) : n.set(e, t, i);
      };
      return (
        (n._impl =
          (function() {
            var n = e.LocalStorage._keyPrefix;
            try {
              return (
                t.localStorage.setItem(n, n), t.localStorage.removeItem(n), !0
              );
            } catch (i) {
              return !1;
            }
          })() &&
          (function() {
            var t = !1,
              n = e.Cookies.get("_parsely_visitor");
            return (
              void 0 !== n && "{" !== n.charAt(0) && (t = !0),
              !0 === e.use_localstorage && !t
            );
          })()
            ? e.LocalStorage
            : e.Cookies),
        (n.get = n._impl.get),
        (n.getJSON = n._impl.getJSON),
        (n.set = n._impl.set),
        (n.setJSON = n._impl.setJSON),
        (n.extendExpiry = n._impl.extendExpiry),
        (n.expire = n._impl.expire),
        (n.defaults = {
          visitor: { key: "_parsely_visitor", expires: 34164e3, secure: !1 },
          session: { key: "_parsely_session", expires: 1800, secure: !1 }
        }),
        n
      );
    })(e.util.getWindow());
  })(this.PARSELY),
  (function() {
    var e = this.PARSELY,
      t = e.Class,
      n = e.ParselyStorage,
      i = e.console,
      o = e.JSON,
      r = ["id"],
      a = t.extend({
        init: function() {
          (this.visitorCookieName =
            e.visitorCookieName || n.defaults.visitor.key),
            (this.visitorCookieTimeoutSecs =
              e.visitorCookieTimeoutSecs || n.defaults.visitor.expires),
            (this.visitorCookieSecure =
              e.visitorCookieSecure || n.defaults.visitor.secure),
            (this.legacyVisitorCookieName =
              e.legacyVisitorCookieName || "parsely_uuid");
        },
        getVisitorInfo: function(t) {
          t = t || !1;
          var r = n.get(this.visitorCookieName);
          if (void 0 === r) {
            var a = n.get(this.legacyVisitorCookieName),
              s = e.config.apikey_uuid || e.config.uuid;
            void 0 === a && null !== s
              ? ((a = s),
                i.log(
                  "No existing visitor ID found, using UUID from config: " + a
                ))
              : i.log("Using existing value for visitor ID: " + a),
              (r = this.initVisitor(a)),
              n.expire("parsely_uuid");
          } else {
            var u = !1;
            try {
              (r = o.parse(r)), (u = !0);
            } catch (c) {
              i.log(
                'Unable to JSON parse visitorInfo "' + r + '", assuming ampid.'
              ),
                (r = this.initVisitor(r));
            }
            u && t && this.extendVisitorExpiry();
          }
          return (e.config.parsely_site_uuid = r.id), r;
        },
        initVisitor: function(e) {
          return this.setVisitorInfo({
            id: e,
            session_count: 0,
            last_session_ts: 0
          });
        },
        setVisitorInfo: function(e) {
          for (var t = 0; t < r.length; t++) {
            var i = r[t];
            if ("undefined" == typeof e[i] || null === e[i]) return !1;
          }
          return (
            n.setJSON(this.visitorCookieName, e, {
              expires: this.visitorCookieTimeoutSecs,
              secure: this.visitorCookieSecure
            }),
            e
          );
        },
        extendVisitorExpiry: function() {
          n.extendExpiry(this.visitorCookieName, {
            expires: this.visitorCookieTimeoutSecs,
            secure: this.visitorCookieSecure
          });
        }
      });
    e.visitorManager = new a();
  })(),
  (function() {
    var e = this.PARSELY,
      t = e.util,
      n = e.Class,
      i = e.ParselyStorage,
      o = e.console,
      r = e.visitorManager,
      a = n.extend({
        init: function() {
          (this.windowAlias = t.getWindow()),
            (this.documentAlias = this.windowAlias.document),
            (this.sessionCookieName =
              e.sessionCookieName || i.defaults.session.key),
            (this.sessionCookieTimeoutSecs = i.defaults.session.expires),
            (this.sessionCookieSecure =
              e.sessionCookieSecure || i.defaults.session.secure),
            o.log("Initializing session."),
            this.getSession(!1);
        },
        getSession: function(t) {
          t = t || !1;
          var n = r.getVisitorInfo(),
            a = i.getJSON(this.sessionCookieName);
          if (void 0 === a) {
            var s, u;
            !1 === n
              ? ((s = 1), (u = 0))
              : (n.session_count++,
                (s = n.session_count),
                (u = n.last_session_ts));
            var c = new Date();
            (a = {
              sid: s,
              surl: e.lastRequest
                ? e.lastRequest.url
                : this.windowAlias.location.href,
              sref: e.lastRequest
                ? e.lastRequest.urlref
                : this.documentAlias.referrer,
              sts: c.getTime(),
              slts: u
            }),
              o.log(
                "Session expired/never existed, creating new session with " +
                  this.sessionCookieTimeoutSecs +
                  "s timeout: " +
                  e.JSON.stringify(a)
              ),
              i.setJSON(this.sessionCookieName, a, {
                expires: this.sessionCookieTimeoutSecs,
                secure: this.sessionCookieSecure
              }),
              (n.last_session_ts = a.sts),
              r.setVisitorInfo(n);
          } else t && this.extendSessionExpiry();
          return a;
        },
        extendSessionExpiry: function() {
          i.extendExpiry(this.sessionCookieName, {
            expires: this.sessionCookieTimeoutSecs,
            secure: this.sessionCookieSecure
          });
        }
      });
    e.sessionManager = new a();
  })(),
  (function() {
    var e = this.PARSELY,
      t = e.util,
      n = e.JSON,
      i = e.$,
      o = t.getWindow().document;
    (PARSELY.getLdJsonMetas = function() {
      for (var e = o.getElementsByTagName("script"), t = 0; t < e.length; t++) {
        var i = e[t];
        if ("application/ld+json" === i.getAttribute("type")) {
          var r;
          try {
            r = n.parse(i.innerHTML);
          } catch (a) {
            return null;
          }
          return {
            type: "NewsArticle" === r["@type"] ? "post" : "sectionpage",
            title: r.headline,
            link: r.url,
            image_url: r.thumbnailUrl,
            pub_date: r.dateCreated,
            section: r.articleSection,
            authors: r.creator,
            tags: r.keywords
          };
        }
      }
      return null;
    }),
      (PARSELY.getRepeatedMetaMetas = function() {
        for (
          var e = {},
            t = o.getElementsByTagName("meta"),
            n = {
              "parsely-title": "title",
              "parsely-link": "link",
              "parsely-image-url": "image_url",
              "parsely-type": "type",
              "parsely-post-id": "post_id",
              "parsely-pub-date": "pub_date",
              "parsely-section": "section",
              "parsely-author": "authors",
              "parsely-tags": "tags"
            },
            r = 0;
          r < t.length;
          r++
        ) {
          var a = t[r],
            s = n[a.getAttribute("name")];
          if (void 0 !== s) {
            var u = a.getAttribute("content");
            "authors" === s
              ? "undefined" == typeof e[s] ? (e[s] = [u]) : e[s].push(u)
              : (e[s] = "tags" === s ? u.split(",") : u);
          }
        }
        return i.isEmptyObject(e) ? null : e;
      }),
      (PARSELY.getParselyPageMetas = function() {
        for (var e = o.getElementsByTagName("meta"), t = 0; t < e.length; t++) {
          var i = e[t];
          if ("parsely-page" === i.getAttribute("name")) {
            var r = i.getAttribute("value") || i.getAttribute("content");
            try {
              return n.parse(r);
            } catch (a) {
              return null;
            }
          }
        }
        return null;
      }),
      (PARSELY.getMetas = function() {
        return (
          this.getRepeatedMetaMetas() ||
          this.getParselyPageMetas() ||
          this.getLdJsonMetas()
        );
      });
  })(),
  (function() {
    function e(e) {
      for (var t = 0, n = 0; e; )
        (t += e.offsetLeft), (n += e.offsetTop), (e = e.offsetParent);
      return [t, n];
    }
    function t(e) {
      if ("" !== e.id) return '//*[@id="' + e.id + '"]';
      if (e === document.body) return "//" + e.tagName.toLowerCase();
      for (var n = 0, i = e.parentNode.childNodes, o = 0; o < i.length; o++) {
        var r = i[o];
        if (r === e)
          return (
            t(e.parentNode) +
            "/" +
            e.tagName.toLowerCase() +
            "[" +
            (n + 1) +
            "]"
          );
        r.nodeType === u && r.tagName === e.tagName && n++;
      }
    }
    function n(e) {
      if (!e || 0 === e.indexOf("#") || 0 === e.indexOf("javascript"))
        return !0;
      var t = window.location.href;
      return e === t || 0 === e.indexOf(t + "#");
    }
    function i(e, t) {
      function n(e, t) {
        return e === document || t >= i || !e
          ? null
          : "A" === e.nodeName ? e : n(e.parentNode, t + 1);
      }
      var i = (t = t || {}).maxHeight || 5;
      return n(e, 0);
    }
    var o = this.PARSELY,
      r = o.util,
      a = o.ParselyStorage,
      s = o.util.getWindow(),
      u = 1;
    r.objAddEventListener(document.body, "click", function(o) {
      var r = i(o.target ? o.target : o.srcElement);
      if (null === r) return !0;
      if (!n(r.getAttribute("href"))) {
        var u = e(r),
          c = t(r),
          l = {
            url: s.location.href,
            x: u[0],
            y: u[1],
            xpath: c,
            href: r.href
          };
        a.setJSON("_parsely_slot_click", l);
      }
    });
  })(),
  (function(e) {
    "use strict";
    var t = e.$;
    e.Sampler = (function(n) {
      var i = {};
      return (
        (i._hasStartedSampling = !1),
        (i._accumulators = {}),
        (i._baseHeartbeatInterval = 10500),
        t.isNumeric(e.secondsBetweenHeartbeats) &&
          e.secondsBetweenHeartbeats >= 1 &&
          e.secondsBetweenHeartbeats <= 15 &&
          (i._baseHeartbeatInterval = 1e3 * e.secondsBetweenHeartbeats),
        (i._heartbeatInterval = i._baseHeartbeatInterval),
        (i.trackKey = function(e, t, o, r) {
          if ((void 0 === t || "function" == typeof t) && void 0 !== o) {
            if (!i._accumulators.hasOwnProperty(e)) {
              var a = i._timeoutFromDuration(r);
              (i._accumulators[e] = {
                ms: 0,
                totalMs: 0,
                lastSampleTime: new Date().getTime(),
                sampleFn: t,
                heartbeatFn: o,
                heartbeatTimeout: a
              }),
                (i._heartbeatInterval = Math.min(i._heartbeatInterval, a));
            }
            !1 === i._hasStartedSampling &&
              (n.setInterval(i._sample, 100),
              (i._hasStartedSampling = !0),
              n.setTimeout(i._sendHeartbeats, i._heartbeatInterval));
          }
        }),
        (i._timeoutFromDuration = function(e) {
          var t = i._baseHeartbeatInterval;
          if (void 0 === e) return t;
          var n = e / 5;
          return n < t / 2 ? e / 5 : n < t ? t / 2 : t;
        }),
        (i.dropKey = function(e) {
          delete i._accumulators[e];
        }),
        (i._sample = function(e, t) {
          e = void 0 === e ? new Date().getTime() : e;
          var n, o, r;
          for (var a in i._accumulators)
            (n = i._accumulators[a]),
              (r = e - (void 0 === t ? n.lastSampleTime : t)),
              (o = "undefined" == typeof n.sampleFn || n.sampleFn(e)),
              (n.ms += o ? r : 0),
              (n.totalMs += o ? r : 0),
              (n.lastSampleTime = e);
        }),
        (i.sendHeartbeat = function(e, t) {
          var n = i._accumulators[e],
            o = void 0 === t ? n.ms / 1e3 : t,
            r = Math.round(o);
          r > 0 &&
            o <= i._baseHeartbeatInterval / 1e3 + 0.25 &&
            n.heartbeatFn(r, !0, n.totalMs),
            (n.ms = 0);
        }),
        (i._sendHeartbeats = function(e) {
          var t, o;
          for (var r in i._accumulators)
            (o =
              (t = i._accumulators[r]).heartbeatTimeout - i._heartbeatInterval),
              t.ms >= o && i.sendHeartbeat(r, e);
          n.setTimeout(i._sendHeartbeats, i._heartbeatInterval);
        }),
        e.util.windowAddEventListener("beforeunload", function() {
          i._sendHeartbeats();
        }),
        i
      );
    })(e.util.getWindow());
  })(this.PARSELY),
  (function() {
    var e = this.PARSELY,
      t = e.config.settings,
      n = e.Sampler,
      i = e.$,
      o = e.util;
    if ("boolean" != typeof e.enableHeartbeats || e.enableHeartbeats) {
      var r = [
          "focus",
          "mousedown",
          "mouseup",
          "mousemove",
          "scroll",
          "touchstart",
          "touchenter",
          "keyup",
          "keydown"
        ],
        a = 5;
      i.isNumeric(e.activeTimeout) &&
        e.activeTimeout >= 1 &&
        e.activeTimeout <= 60 &&
        (a = e.activeTimeout);
      var s = new Date().getTime();
      (e.engagedTime = e.engagedTime || {}),
        (e._lastEventTime = s),
        (e.isEngaged = !0),
        (e.isInteracting = !0),
        (e.focused = !0),
        (e.videoPlaying = !1),
        (e.ENGAGED_TIME_SAMPLER_KEY = "engagedTime"),
        !0 === t.test && (e._handleEngagementActivityCalls = 0),
        !0 !== e.fbInstantArticles &&
          (i(document).on("show.visibility", function() {
            e.focused = !0;
          }),
          i(document).on("hide.visibility", function() {
            e.focused = !1;
          }));
      var u = function() {
        (e._lastEventTime = new Date().getTime()),
          !0 === t.test && e._handleEngagementActivityCalls++;
      };
      !0 !== e.fbInstantArticles
        ? i.each(r, function(e, t) {
            o.windowAddEventListener(t, u);
          })
        : setInterval(u, 1e3 * a),
        (e.engagedTime.getParams = function() {
          return {
            minActiveTimeout: 1,
            maxActiveTimeout: 60,
            activeTimeout: a
          };
        }),
        (e.engagedTime.sample = function(t, n, i, o) {
          return (
            (t = void 0 === t ? new Date().getTime() : t),
            (n = void 0 === n ? e._lastEventTime : n),
            (i = void 0 === i ? e.videoPlaying : i),
            (o = void 0 === o ? e.focused : o),
            (e.isInteracting = t - n < 1e3 * a),
            (e.isEngaged = (e.isInteracting && o) || i),
            e.isEngaged
          );
        }),
        (e.engagedTime.sendHeartbeat = function(t, n, r) {
          (t = void 0 === t ? 0 : t),
            (n = void 0 === n ? e.enableHeartbeats : n);
          var a = o.getWindow();
          (void 0 === n || !0 === n) &&
            (!0 !== e.config.heartbeat_should_honor_autotrack || e.autotrack) &&
            (PARSELY.beacon.pixel.beacon({
              date: new Date().toString(),
              action: "heartbeat",
              inc: t,
              tt: r,
              url: e.lastRequest ? e.lastRequest.url : a.location.href,
              urlref: e.lastRequest ? e.lastRequest.urlref : a.document.referrer
            }),
            i.isFunction(e.onHeartbeat) && e.onHeartbeat(t));
        });
      var c = !0 === e.fbInstantArticles ? undefined : e.engagedTime.sample;
      n.trackKey(e.ENGAGED_TIME_SAMPLER_KEY, c, e.engagedTime.sendHeartbeat);
    }
  })(),
  (function() {
    var e = this.PARSELY,
      t = e.$,
      n = e.Class,
      i = e.JSON,
      o = e.console,
      r = e.config,
      a = e.urls,
      s = e.visitorManager,
      u = e.sessionManager,
      c = e.ParselyStorage,
      l = e.util.getWindow(),
      d = l.document,
      f = l.screen;
    PARSELY.Pixel = n.extend({
      init: function() {
        var e = l.location.href,
          t =
            f.width +
            "x" +
            f.height +
            "|" +
            (f.availWidth + "x" + f.availHeight) +
            "|" +
            f.colorDepth;
        (this.callbackName = "parselyStartCallback"),
          (this.data = {
            idsite: r.apikey,
            url: e,
            urlref: d.referrer,
            screen: t,
            data: {}
          }),
          (r.hasOwnProperty("is_remote_config") && !0 !== r.is_remote_config) ||
            ((this.data.data.parsely_uuid = r.network_uuid || r.uuid),
            (this.data.data.parsely_site_uuid = r.parsely_site_uuid)),
          (this.remoteEndpoint = a.pixel + this.selectEndpoint());
      },
      selectEndpoint: function() {
        return r.hasOwnProperty("is_remote_config") && !1 === r.is_remote_config
          ? !1 === r.track_ip_addresses
            ? !0 === r.track_third_party_cookies ? "/eventx/" : "/px/"
            : !0 === r.track_third_party_cookies ? "/event/" : "/plogger/"
          : !1 === r.track_ip_addresses ? "/px/" : "/plogger/";
      },
      addDefaults: function(e) {
        t.extend(!0, this.data, e);
      },
      shouldFetchVisitorID: function(t) {
        return (
          !(
            !r.hasOwnProperty("is_remote_config") || !0 === r.is_remote_config
          ) &&
          (!t || (!!e.updateVisitorIds && 0 !== t.indexOf("pid=")))
        );
      },
      requestJsonPInit: function(e) {
        (l[this.callbackName] = function(n) {
          r.uuid = n.set.length > 0 ? n.set : n.got;
          var i = u.getSession(),
            o = { id: r.uuid, session_count: i.sid, last_session_ts: i.sts };
          c.setJSON(s.visitorCookieName, o, {
            expires: s.visitorCookieTimeoutSecs,
            secure: s.visitorCookieSecure
          }),
            u.getSession(),
            t.isFunction(PARSELY.onBeacon) && PARSELY.onBeacon(e);
        }),
          (e.callback = this.callbackName);
        var n = t.param(e),
          i = !1 === r.track_ip_addresses ? "x" : "",
          f = a.pixel + "/start" + i + "/?" + n;
        o.log("beaconing to endpoint: " + f);
        var p = document.createElement("script");
        (p.src = f), d.getElementsByTagName("head")[0].appendChild(p);
      },
      requestImg: function(n, i) {
        o.log("beaconing to endpoint: " + this.remoteEndpoint), (n.u = i);
        var r = new Image(),
          a = t.param(n),
          s = this.remoteEndpoint + "?" + a;
        (r.src = s), t.isFunction(e.onBeacon) && e.onBeacon(n);
      },
      generatePageloadId: function() {
        return (
          "undefined" == typeof e.pageload_id &&
            (e.pageload_id = Math.floor(99999999 * Math.random())),
          e.pageload_id
        );
      },
      beacon: function(n, a) {
        var l = u.getSession(!0),
          d = new Date().getTime(),
          f = this.generatePageloadId() || 0,
          p = t.extend(!0, { rand: d, plid: f }, this.data, l, n),
          g = e.visitorManager.getVisitorInfo();
        if ((s.extendVisitorExpiry(), "pageview" === p.action)) {
          var h = c.getJSON("_parsely_slot_click");
          h &&
            (c.expire("_parsely_slot_click"),
            o.log("Valid slot click found"),
            (p.sl_xp = h.xpath),
            (p.sl_x = h.x),
            (p.sl_y = h.y),
            (p.sl_h = h.href));
        }
        (p.data = i.stringify(p.data)),
          !0 !== a && (PARSELY.lastRequest = p),
          (r.uuid = g.id),
          this.shouldFetchVisitorID(g.id)
            ? this.requestJsonPInit(p)
            : this.requestImg(p, r.uuid);
      }
    });
  })(),
  (function() {
    var e = this.PARSELY,
      t = e.$,
      n = e.$LAB,
      i = e.console,
      o = e.Class,
      r = e.util.getWindow().document;
    PARSELY.Beacon = o.extend({
      init: function() {
        (this.pixel = new PARSELY.Pixel()),
          (this.autotrack =
            "undefined" == typeof PARSELY.autotrack || PARSELY.autotrack);
      },
      trackPageView: function(e, n) {
        var i = {
          title: r.title,
          date: new Date().toString(),
          action: "pageview"
        };
        e && t.extend(i, e), this.pixel.beacon(i, n);
      },
      loadCustomizations: function() {
        if (e.config) {
          var t = e.config.customizations;
          if (t) {
            i.log("Found customizations; loading.");
            var o = e.urls["static"],
              r = this;
            n.script(o + t).wait(function() {
              "undefined" != typeof PARSELY.pCustom &&
                (PARSELY.pCustom(r), i.log("pCustom function called"));
            });
          }
        }
      },
      start: function() {
        (this.startTime = new Date().getTime()),
          this.autotrack
            ? (i.log("autotrack enabled; doing automatic pageview beacon"),
              this.trackPageView())
            : i.log("autotrack disabled; beacon loaded but no data sent"),
          this.loadCustomizations();
      }
    });
  })(),
  (function() {
    var e = PARSELY.config.settings,
      t = PARSELY.console,
      n = PARSELY.$;
    if (
      ((PARSELY.updateDefaults = function(e) {
        return PARSELY.beacon.pixel.addDefaults(e);
      }),
      (PARSELY.setConfigOptions = function(e) {
        for (
          var t = ["track_ip_addresses", "track_third_party_cookies"], n = 0;
          n < t.length;
          n++
        )
          e.hasOwnProperty(t[n]) && (PARSELY.config[t[n]] = e[t[n]]);
      }),
      e.tracker)
    ) {
      t.log("tracker enabled, create Beacon");
      var i = new PARSELY.Beacon();
      (PARSELY.beacon = i),
        i.start(),
        n.isFunction(PARSELY.onReady) && PARSELY.onReady();
    }
    try {
      if (
        "undefined" != typeof Storage &&
        localStorage.getItem("parsely-overlay")
      ) {
        var o = document.createElement("script");
        o.setAttribute(
          "src",
          "https://dash.parsely.com/static/build/overlay.js?v=" +
            new Date().getTime()
        ),
          document.body.appendChild(o);
      }
    } catch (r) {
      PARSELY.console.log(r);
    }
  })(),
  (function() {
    var e = PARSELY.onload,
      t = PARSELY.console;
    if ("function" == typeof e)
      try {
        e();
      } catch (n) {
        t.dir({ info: "hook threw exception", error: n });
      }
    t.log("Final load stage completed successfully");
  })();
