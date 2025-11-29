import Ce, { useEffect as je } from "react";
function ke(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var te = { exports: {} }, K = {};
var ve;
function Ie() {
  if (ve) return K;
  ve = 1;
  var n = Symbol.for("react.transitional.element"), O = Symbol.for("react.fragment");
  function E(l, p, c) {
    var m = null;
    if (c !== void 0 && (m = "" + c), p.key !== void 0 && (m = "" + p.key), "key" in p) {
      c = {};
      for (var f in p)
        f !== "key" && (c[f] = p[f]);
    } else c = p;
    return p = c.ref, {
      $$typeof: n,
      type: l,
      key: m,
      ref: p !== void 0 ? p : null,
      props: c
    };
  }
  return K.Fragment = O, K.jsx = E, K.jsxs = E, K;
}
var ee = {};
var ye;
function $e() {
  return ye || (ye = 1, process.env.NODE_ENV !== "production" && (function() {
    function n(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === B ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case C:
          return "Fragment";
        case W:
          return "Profiler";
        case $:
          return "StrictMode";
        case D:
          return "Suspense";
        case H:
          return "SuspenseList";
        case Q:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case x:
            return "Portal";
          case j:
            return e.displayName || "Context";
          case k:
            return (e._context.displayName || "Context") + ".Consumer";
          case a:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Z:
            return t = e.displayName || null, t !== null ? t : n(e.type) || "Memo";
          case F:
            t = e._payload, e = e._init;
            try {
              return n(e(t));
            } catch {
            }
        }
      return null;
    }
    function O(e) {
      return "" + e;
    }
    function E(e) {
      try {
        O(e);
        var t = !1;
      } catch {
        t = !0;
      }
      if (t) {
        t = console;
        var s = t.error, i = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return s.call(
          t,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          i
        ), O(e);
      }
    }
    function l(e) {
      if (e === C) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === F)
        return "<...>";
      try {
        var t = n(e);
        return t ? "<" + t + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function p() {
      var e = U.A;
      return e === null ? null : e.getOwner();
    }
    function c() {
      return Error("react-stack-top-frame");
    }
    function m(e) {
      if (G.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function f(e, t) {
      function s() {
        Y || (Y = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          t
        ));
      }
      s.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: s,
        configurable: !0
      });
    }
    function S() {
      var e = n(this.type);
      return N[e] || (N[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function P(e, t, s, i, y, d) {
      var u = s.ref;
      return e = {
        $$typeof: I,
        type: e,
        key: t,
        props: s,
        _owner: i
      }, (u !== void 0 ? u : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: S
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: y
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: d
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function T(e, t, s, i, y, d) {
      var u = t.children;
      if (u !== void 0)
        if (i)
          if (L(u)) {
            for (i = 0; i < u.length; i++)
              _(u[i]);
            Object.freeze && Object.freeze(u);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else _(u);
      if (G.call(t, "key")) {
        u = n(e);
        var v = Object.keys(t).filter(function(b) {
          return b !== "key";
        });
        i = 0 < v.length ? "{key: someKey, " + v.join(": ..., ") + ": ...}" : "{key: someKey}", r[u + i] || (v = 0 < v.length ? "{" + v.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          i,
          u,
          v,
          u
        ), r[u + i] = !0);
      }
      if (u = null, s !== void 0 && (E(s), u = "" + s), m(t) && (E(t.key), u = "" + t.key), "key" in t) {
        s = {};
        for (var h in t)
          h !== "key" && (s[h] = t[h]);
      } else s = t;
      return u && f(
        s,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), P(
        e,
        u,
        s,
        p(),
        y,
        d
      );
    }
    function _(e) {
      A(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === F && (e._payload.status === "fulfilled" ? A(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function A(e) {
      return typeof e == "object" && e !== null && e.$$typeof === I;
    }
    var w = Ce, I = Symbol.for("react.transitional.element"), x = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), $ = Symbol.for("react.strict_mode"), W = Symbol.for("react.profiler"), k = Symbol.for("react.consumer"), j = Symbol.for("react.context"), a = Symbol.for("react.forward_ref"), D = Symbol.for("react.suspense"), H = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), F = Symbol.for("react.lazy"), Q = Symbol.for("react.activity"), B = Symbol.for("react.client.reference"), U = w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, G = Object.prototype.hasOwnProperty, L = Array.isArray, z = console.createTask ? console.createTask : function() {
      return null;
    };
    w = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var Y, N = {}, V = w.react_stack_bottom_frame.bind(
      w,
      c
    )(), X = z(l(c)), r = {};
    ee.Fragment = C, ee.jsx = function(e, t, s) {
      var i = 1e4 > U.recentlyCreatedOwnerStacks++;
      return T(
        e,
        t,
        s,
        !1,
        i ? Error("react-stack-top-frame") : V,
        i ? z(l(e)) : X
      );
    }, ee.jsxs = function(e, t, s) {
      var i = 1e4 > U.recentlyCreatedOwnerStacks++;
      return T(
        e,
        t,
        s,
        !0,
        i ? Error("react-stack-top-frame") : V,
        i ? z(l(e)) : X
      );
    };
  })()), ee;
}
var me;
function Me() {
  return me || (me = 1, process.env.NODE_ENV === "production" ? te.exports = Ie() : te.exports = $e()), te.exports;
}
var J = Me(), ne = { exports: {} }, oe = { exports: {} }, R = {};
var be;
function Ye() {
  if (be) return R;
  be = 1;
  var n = typeof Symbol == "function" && Symbol.for, O = n ? Symbol.for("react.element") : 60103, E = n ? Symbol.for("react.portal") : 60106, l = n ? Symbol.for("react.fragment") : 60107, p = n ? Symbol.for("react.strict_mode") : 60108, c = n ? Symbol.for("react.profiler") : 60114, m = n ? Symbol.for("react.provider") : 60109, f = n ? Symbol.for("react.context") : 60110, S = n ? Symbol.for("react.async_mode") : 60111, P = n ? Symbol.for("react.concurrent_mode") : 60111, T = n ? Symbol.for("react.forward_ref") : 60112, _ = n ? Symbol.for("react.suspense") : 60113, A = n ? Symbol.for("react.suspense_list") : 60120, w = n ? Symbol.for("react.memo") : 60115, I = n ? Symbol.for("react.lazy") : 60116, x = n ? Symbol.for("react.block") : 60121, C = n ? Symbol.for("react.fundamental") : 60117, $ = n ? Symbol.for("react.responder") : 60118, W = n ? Symbol.for("react.scope") : 60119;
  function k(a) {
    if (typeof a == "object" && a !== null) {
      var D = a.$$typeof;
      switch (D) {
        case O:
          switch (a = a.type, a) {
            case S:
            case P:
            case l:
            case c:
            case p:
            case _:
              return a;
            default:
              switch (a = a && a.$$typeof, a) {
                case f:
                case T:
                case I:
                case w:
                case m:
                  return a;
                default:
                  return D;
              }
          }
        case E:
          return D;
      }
    }
  }
  function j(a) {
    return k(a) === P;
  }
  return R.AsyncMode = S, R.ConcurrentMode = P, R.ContextConsumer = f, R.ContextProvider = m, R.Element = O, R.ForwardRef = T, R.Fragment = l, R.Lazy = I, R.Memo = w, R.Portal = E, R.Profiler = c, R.StrictMode = p, R.Suspense = _, R.isAsyncMode = function(a) {
    return j(a) || k(a) === S;
  }, R.isConcurrentMode = j, R.isContextConsumer = function(a) {
    return k(a) === f;
  }, R.isContextProvider = function(a) {
    return k(a) === m;
  }, R.isElement = function(a) {
    return typeof a == "object" && a !== null && a.$$typeof === O;
  }, R.isForwardRef = function(a) {
    return k(a) === T;
  }, R.isFragment = function(a) {
    return k(a) === l;
  }, R.isLazy = function(a) {
    return k(a) === I;
  }, R.isMemo = function(a) {
    return k(a) === w;
  }, R.isPortal = function(a) {
    return k(a) === E;
  }, R.isProfiler = function(a) {
    return k(a) === c;
  }, R.isStrictMode = function(a) {
    return k(a) === p;
  }, R.isSuspense = function(a) {
    return k(a) === _;
  }, R.isValidElementType = function(a) {
    return typeof a == "string" || typeof a == "function" || a === l || a === P || a === c || a === p || a === _ || a === A || typeof a == "object" && a !== null && (a.$$typeof === I || a.$$typeof === w || a.$$typeof === m || a.$$typeof === f || a.$$typeof === T || a.$$typeof === C || a.$$typeof === $ || a.$$typeof === W || a.$$typeof === x);
  }, R.typeOf = k, R;
}
var g = {};
var Ee;
function Ne() {
  return Ee || (Ee = 1, process.env.NODE_ENV !== "production" && (function() {
    var n = typeof Symbol == "function" && Symbol.for, O = n ? Symbol.for("react.element") : 60103, E = n ? Symbol.for("react.portal") : 60106, l = n ? Symbol.for("react.fragment") : 60107, p = n ? Symbol.for("react.strict_mode") : 60108, c = n ? Symbol.for("react.profiler") : 60114, m = n ? Symbol.for("react.provider") : 60109, f = n ? Symbol.for("react.context") : 60110, S = n ? Symbol.for("react.async_mode") : 60111, P = n ? Symbol.for("react.concurrent_mode") : 60111, T = n ? Symbol.for("react.forward_ref") : 60112, _ = n ? Symbol.for("react.suspense") : 60113, A = n ? Symbol.for("react.suspense_list") : 60120, w = n ? Symbol.for("react.memo") : 60115, I = n ? Symbol.for("react.lazy") : 60116, x = n ? Symbol.for("react.block") : 60121, C = n ? Symbol.for("react.fundamental") : 60117, $ = n ? Symbol.for("react.responder") : 60118, W = n ? Symbol.for("react.scope") : 60119;
    function k(o) {
      return typeof o == "string" || typeof o == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      o === l || o === P || o === c || o === p || o === _ || o === A || typeof o == "object" && o !== null && (o.$$typeof === I || o.$$typeof === w || o.$$typeof === m || o.$$typeof === f || o.$$typeof === T || o.$$typeof === C || o.$$typeof === $ || o.$$typeof === W || o.$$typeof === x);
    }
    function j(o) {
      if (typeof o == "object" && o !== null) {
        var q = o.$$typeof;
        switch (q) {
          case O:
            var re = o.type;
            switch (re) {
              case S:
              case P:
              case l:
              case c:
              case p:
              case _:
                return re;
              default:
                var pe = re && re.$$typeof;
                switch (pe) {
                  case f:
                  case T:
                  case I:
                  case w:
                  case m:
                    return pe;
                  default:
                    return q;
                }
            }
          case E:
            return q;
        }
      }
    }
    var a = S, D = P, H = f, Z = m, F = O, Q = T, B = l, U = I, G = w, L = E, z = c, Y = p, N = _, V = !1;
    function X(o) {
      return V || (V = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), r(o) || j(o) === S;
    }
    function r(o) {
      return j(o) === P;
    }
    function e(o) {
      return j(o) === f;
    }
    function t(o) {
      return j(o) === m;
    }
    function s(o) {
      return typeof o == "object" && o !== null && o.$$typeof === O;
    }
    function i(o) {
      return j(o) === T;
    }
    function y(o) {
      return j(o) === l;
    }
    function d(o) {
      return j(o) === I;
    }
    function u(o) {
      return j(o) === w;
    }
    function v(o) {
      return j(o) === E;
    }
    function h(o) {
      return j(o) === c;
    }
    function b(o) {
      return j(o) === p;
    }
    function M(o) {
      return j(o) === _;
    }
    g.AsyncMode = a, g.ConcurrentMode = D, g.ContextConsumer = H, g.ContextProvider = Z, g.Element = F, g.ForwardRef = Q, g.Fragment = B, g.Lazy = U, g.Memo = G, g.Portal = L, g.Profiler = z, g.StrictMode = Y, g.Suspense = N, g.isAsyncMode = X, g.isConcurrentMode = r, g.isContextConsumer = e, g.isContextProvider = t, g.isElement = s, g.isForwardRef = i, g.isFragment = y, g.isLazy = d, g.isMemo = u, g.isPortal = v, g.isProfiler = h, g.isStrictMode = b, g.isSuspense = M, g.isValidElementType = k, g.typeOf = j;
  })()), g;
}
var Te;
function xe() {
  return Te || (Te = 1, process.env.NODE_ENV === "production" ? oe.exports = Ye() : oe.exports = Ne()), oe.exports;
}
var ie, he;
function qe() {
  if (he) return ie;
  he = 1;
  var n = Object.getOwnPropertySymbols, O = Object.prototype.hasOwnProperty, E = Object.prototype.propertyIsEnumerable;
  function l(c) {
    if (c == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(c);
  }
  function p() {
    try {
      if (!Object.assign)
        return !1;
      var c = new String("abc");
      if (c[5] = "de", Object.getOwnPropertyNames(c)[0] === "5")
        return !1;
      for (var m = {}, f = 0; f < 10; f++)
        m["_" + String.fromCharCode(f)] = f;
      var S = Object.getOwnPropertyNames(m).map(function(T) {
        return m[T];
      });
      if (S.join("") !== "0123456789")
        return !1;
      var P = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(T) {
        P[T] = T;
      }), Object.keys(Object.assign({}, P)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ie = p() ? Object.assign : function(c, m) {
    for (var f, S = l(c), P, T = 1; T < arguments.length; T++) {
      f = Object(arguments[T]);
      for (var _ in f)
        O.call(f, _) && (S[_] = f[_]);
      if (n) {
        P = n(f);
        for (var A = 0; A < P.length; A++)
          E.call(f, P[A]) && (S[P[A]] = f[P[A]]);
      }
    }
    return S;
  }, ie;
}
var se, _e;
function de() {
  if (_e) return se;
  _e = 1;
  var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return se = n, se;
}
var ue, Re;
function we() {
  return Re || (Re = 1, ue = Function.call.bind(Object.prototype.hasOwnProperty)), ue;
}
var ce, ge;
function De() {
  if (ge) return ce;
  ge = 1;
  var n = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var O = /* @__PURE__ */ de(), E = {}, l = /* @__PURE__ */ we();
    n = function(c) {
      var m = "Warning: " + c;
      typeof console < "u" && console.error(m);
      try {
        throw new Error(m);
      } catch {
      }
    };
  }
  function p(c, m, f, S, P) {
    if (process.env.NODE_ENV !== "production") {
      for (var T in c)
        if (l(c, T)) {
          var _;
          try {
            if (typeof c[T] != "function") {
              var A = Error(
                (S || "React class") + ": " + f + " type `" + T + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof c[T] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw A.name = "Invariant Violation", A;
            }
            _ = c[T](m, T, S, f, null, O);
          } catch (I) {
            _ = I;
          }
          if (_ && !(_ instanceof Error) && n(
            (S || "React class") + ": type specification of " + f + " `" + T + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof _ + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), _ instanceof Error && !(_.message in E)) {
            E[_.message] = !0;
            var w = P ? P() : "";
            n(
              "Failed " + f + " type: " + _.message + (w ?? "")
            );
          }
        }
    }
  }
  return p.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (E = {});
  }, ce = p, ce;
}
var fe, Oe;
function Le() {
  if (Oe) return fe;
  Oe = 1;
  var n = xe(), O = qe(), E = /* @__PURE__ */ de(), l = /* @__PURE__ */ we(), p = /* @__PURE__ */ De(), c = function() {
  };
  process.env.NODE_ENV !== "production" && (c = function(f) {
    var S = "Warning: " + f;
    typeof console < "u" && console.error(S);
    try {
      throw new Error(S);
    } catch {
    }
  });
  function m() {
    return null;
  }
  return fe = function(f, S) {
    var P = typeof Symbol == "function" && Symbol.iterator, T = "@@iterator";
    function _(r) {
      var e = r && (P && r[P] || r[T]);
      if (typeof e == "function")
        return e;
    }
    var A = "<<anonymous>>", w = {
      array: $("array"),
      bigint: $("bigint"),
      bool: $("boolean"),
      func: $("function"),
      number: $("number"),
      object: $("object"),
      string: $("string"),
      symbol: $("symbol"),
      any: W(),
      arrayOf: k,
      element: j(),
      elementType: a(),
      instanceOf: D,
      node: Q(),
      objectOf: Z,
      oneOf: H,
      oneOfType: F,
      shape: U,
      exact: G
    };
    function I(r, e) {
      return r === e ? r !== 0 || 1 / r === 1 / e : r !== r && e !== e;
    }
    function x(r, e) {
      this.message = r, this.data = e && typeof e == "object" ? e : {}, this.stack = "";
    }
    x.prototype = Error.prototype;
    function C(r) {
      if (process.env.NODE_ENV !== "production")
        var e = {}, t = 0;
      function s(y, d, u, v, h, b, M) {
        if (v = v || A, b = b || u, M !== E) {
          if (S) {
            var o = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw o.name = "Invariant Violation", o;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var q = v + ":" + u;
            !e[q] && // Avoid spamming the console because they are often not actionable except for lib authors
            t < 3 && (c(
              "You are manually calling a React.PropTypes validation function for the `" + b + "` prop on `" + v + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), e[q] = !0, t++);
          }
        }
        return d[u] == null ? y ? d[u] === null ? new x("The " + h + " `" + b + "` is marked as required " + ("in `" + v + "`, but its value is `null`.")) : new x("The " + h + " `" + b + "` is marked as required in " + ("`" + v + "`, but its value is `undefined`.")) : null : r(d, u, v, h, b);
      }
      var i = s.bind(null, !1);
      return i.isRequired = s.bind(null, !0), i;
    }
    function $(r) {
      function e(t, s, i, y, d, u) {
        var v = t[s], h = Y(v);
        if (h !== r) {
          var b = N(v);
          return new x(
            "Invalid " + y + " `" + d + "` of type " + ("`" + b + "` supplied to `" + i + "`, expected ") + ("`" + r + "`."),
            { expectedType: r }
          );
        }
        return null;
      }
      return C(e);
    }
    function W() {
      return C(m);
    }
    function k(r) {
      function e(t, s, i, y, d) {
        if (typeof r != "function")
          return new x("Property `" + d + "` of component `" + i + "` has invalid PropType notation inside arrayOf.");
        var u = t[s];
        if (!Array.isArray(u)) {
          var v = Y(u);
          return new x("Invalid " + y + " `" + d + "` of type " + ("`" + v + "` supplied to `" + i + "`, expected an array."));
        }
        for (var h = 0; h < u.length; h++) {
          var b = r(u, h, i, y, d + "[" + h + "]", E);
          if (b instanceof Error)
            return b;
        }
        return null;
      }
      return C(e);
    }
    function j() {
      function r(e, t, s, i, y) {
        var d = e[t];
        if (!f(d)) {
          var u = Y(d);
          return new x("Invalid " + i + " `" + y + "` of type " + ("`" + u + "` supplied to `" + s + "`, expected a single ReactElement."));
        }
        return null;
      }
      return C(r);
    }
    function a() {
      function r(e, t, s, i, y) {
        var d = e[t];
        if (!n.isValidElementType(d)) {
          var u = Y(d);
          return new x("Invalid " + i + " `" + y + "` of type " + ("`" + u + "` supplied to `" + s + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return C(r);
    }
    function D(r) {
      function e(t, s, i, y, d) {
        if (!(t[s] instanceof r)) {
          var u = r.name || A, v = X(t[s]);
          return new x("Invalid " + y + " `" + d + "` of type " + ("`" + v + "` supplied to `" + i + "`, expected ") + ("instance of `" + u + "`."));
        }
        return null;
      }
      return C(e);
    }
    function H(r) {
      if (!Array.isArray(r))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? c(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : c("Invalid argument supplied to oneOf, expected an array.")), m;
      function e(t, s, i, y, d) {
        for (var u = t[s], v = 0; v < r.length; v++)
          if (I(u, r[v]))
            return null;
        var h = JSON.stringify(r, function(M, o) {
          var q = N(o);
          return q === "symbol" ? String(o) : o;
        });
        return new x("Invalid " + y + " `" + d + "` of value `" + String(u) + "` " + ("supplied to `" + i + "`, expected one of " + h + "."));
      }
      return C(e);
    }
    function Z(r) {
      function e(t, s, i, y, d) {
        if (typeof r != "function")
          return new x("Property `" + d + "` of component `" + i + "` has invalid PropType notation inside objectOf.");
        var u = t[s], v = Y(u);
        if (v !== "object")
          return new x("Invalid " + y + " `" + d + "` of type " + ("`" + v + "` supplied to `" + i + "`, expected an object."));
        for (var h in u)
          if (l(u, h)) {
            var b = r(u, h, i, y, d + "." + h, E);
            if (b instanceof Error)
              return b;
          }
        return null;
      }
      return C(e);
    }
    function F(r) {
      if (!Array.isArray(r))
        return process.env.NODE_ENV !== "production" && c("Invalid argument supplied to oneOfType, expected an instance of array."), m;
      for (var e = 0; e < r.length; e++) {
        var t = r[e];
        if (typeof t != "function")
          return c(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + V(t) + " at index " + e + "."
          ), m;
      }
      function s(i, y, d, u, v) {
        for (var h = [], b = 0; b < r.length; b++) {
          var M = r[b], o = M(i, y, d, u, v, E);
          if (o == null)
            return null;
          o.data && l(o.data, "expectedType") && h.push(o.data.expectedType);
        }
        var q = h.length > 0 ? ", expected one of type [" + h.join(", ") + "]" : "";
        return new x("Invalid " + u + " `" + v + "` supplied to " + ("`" + d + "`" + q + "."));
      }
      return C(s);
    }
    function Q() {
      function r(e, t, s, i, y) {
        return L(e[t]) ? null : new x("Invalid " + i + " `" + y + "` supplied to " + ("`" + s + "`, expected a ReactNode."));
      }
      return C(r);
    }
    function B(r, e, t, s, i) {
      return new x(
        (r || "React class") + ": " + e + " type `" + t + "." + s + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + i + "`."
      );
    }
    function U(r) {
      function e(t, s, i, y, d) {
        var u = t[s], v = Y(u);
        if (v !== "object")
          return new x("Invalid " + y + " `" + d + "` of type `" + v + "` " + ("supplied to `" + i + "`, expected `object`."));
        for (var h in r) {
          var b = r[h];
          if (typeof b != "function")
            return B(i, y, d, h, N(b));
          var M = b(u, h, i, y, d + "." + h, E);
          if (M)
            return M;
        }
        return null;
      }
      return C(e);
    }
    function G(r) {
      function e(t, s, i, y, d) {
        var u = t[s], v = Y(u);
        if (v !== "object")
          return new x("Invalid " + y + " `" + d + "` of type `" + v + "` " + ("supplied to `" + i + "`, expected `object`."));
        var h = O({}, t[s], r);
        for (var b in h) {
          var M = r[b];
          if (l(r, b) && typeof M != "function")
            return B(i, y, d, b, N(M));
          if (!M)
            return new x(
              "Invalid " + y + " `" + d + "` key `" + b + "` supplied to `" + i + "`.\nBad object: " + JSON.stringify(t[s], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(r), null, "  ")
            );
          var o = M(u, b, i, y, d + "." + b, E);
          if (o)
            return o;
        }
        return null;
      }
      return C(e);
    }
    function L(r) {
      switch (typeof r) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !r;
        case "object":
          if (Array.isArray(r))
            return r.every(L);
          if (r === null || f(r))
            return !0;
          var e = _(r);
          if (e) {
            var t = e.call(r), s;
            if (e !== r.entries) {
              for (; !(s = t.next()).done; )
                if (!L(s.value))
                  return !1;
            } else
              for (; !(s = t.next()).done; ) {
                var i = s.value;
                if (i && !L(i[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function z(r, e) {
      return r === "symbol" ? !0 : e ? e["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && e instanceof Symbol : !1;
    }
    function Y(r) {
      var e = typeof r;
      return Array.isArray(r) ? "array" : r instanceof RegExp ? "object" : z(e, r) ? "symbol" : e;
    }
    function N(r) {
      if (typeof r > "u" || r === null)
        return "" + r;
      var e = Y(r);
      if (e === "object") {
        if (r instanceof Date)
          return "date";
        if (r instanceof RegExp)
          return "regexp";
      }
      return e;
    }
    function V(r) {
      var e = N(r);
      switch (e) {
        case "array":
        case "object":
          return "an " + e;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + e;
        default:
          return e;
      }
    }
    function X(r) {
      return !r.constructor || !r.constructor.name ? A : r.constructor.name;
    }
    return w.checkPropTypes = p, w.resetWarningCache = p.resetWarningCache, w.PropTypes = w, w;
  }, fe;
}
var le, Pe;
function We() {
  if (Pe) return le;
  Pe = 1;
  var n = /* @__PURE__ */ de();
  function O() {
  }
  function E() {
  }
  return E.resetWarningCache = O, le = function() {
    function l(m, f, S, P, T, _) {
      if (_ !== n) {
        var A = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw A.name = "Invariant Violation", A;
      }
    }
    l.isRequired = l;
    function p() {
      return l;
    }
    var c = {
      array: l,
      bigint: l,
      bool: l,
      func: l,
      number: l,
      object: l,
      string: l,
      symbol: l,
      any: l,
      arrayOf: p,
      element: l,
      elementType: l,
      instanceOf: p,
      node: l,
      objectOf: p,
      oneOf: p,
      oneOfType: p,
      shape: p,
      exact: p,
      checkPropTypes: E,
      resetWarningCache: O
    };
    return c.PropTypes = c, c;
  }, le;
}
var Se;
function Fe() {
  if (Se) return ne.exports;
  if (Se = 1, process.env.NODE_ENV !== "production") {
    var n = xe(), O = !0;
    ne.exports = /* @__PURE__ */ Le()(n.isElement, O);
  } else
    ne.exports = /* @__PURE__ */ We()();
  return ne.exports;
}
var Ue = /* @__PURE__ */ Fe();
const ae = /* @__PURE__ */ ke(Ue);
function Ae({
  isOpen: n,
  onClose: O,
  title: E,
  children: l,
  className: p = "",
  // Allows custom themes or additional classes
  animation: c = "fade"
  // Animation type: "fade" | "zoom" | "slide-up" | "none"
}) {
  return je(() => {
    if (!n) return;
    const m = (f) => {
      f.key === "Escape" && O();
    };
    return document.addEventListener("keydown", m), () => document.removeEventListener("keydown", m);
  }, [n, O]), n ? /* @__PURE__ */ J.jsx(
    "div",
    {
      className: `modal-overlay ${p}`,
      onClick: O,
      "data-animation": c,
      children: /* @__PURE__ */ J.jsxs(
        "div",
        {
          className: "modal-container",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": E ? "modal-title" : void 0,
          onClick: (m) => m.stopPropagation(),
          "data-animation": c,
          children: [
            /* @__PURE__ */ J.jsx(
              "button",
              {
                type: "button",
                className: "modal-close",
                onClick: O,
                "aria-label": "Close",
                children: /* @__PURE__ */ J.jsx(
                  "svg",
                  {
                    className: "icon-close",
                    viewBox: "0 0 24 24",
                    "aria-hidden": "true",
                    focusable: "false",
                    children: /* @__PURE__ */ J.jsx("path", { d: "M6 6 L18 18 M18 6 L6 18" })
                  }
                )
              }
            ),
            E && /* @__PURE__ */ J.jsx("h2", { id: "modal-title", className: "modal-title", children: E }),
            /* @__PURE__ */ J.jsx("div", { className: "modal-content", children: l })
          ]
        }
      )
    }
  ) : null;
}
Ae.propTypes = {
  isOpen: ae.bool.isRequired,
  onClose: ae.func.isRequired,
  className: ae.string,
  animation: ae.oneOf(["fade", "zoom", "slide-up", "none"])
};
Ae.defaultProps = {
  title: null,
  className: "",
  animation: "slide-up"
};
export {
  Ae as Modal,
  Ae as default
};
