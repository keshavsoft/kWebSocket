var u0 = s => {
    throw TypeError(s)
}
    ;
var Ni = (s, u, r) => u.has(s) ? u0("Cannot add the same private member more than once") : u instanceof WeakSet ? u.add(s) : u.set(s, r);
function c0(s, u) {
    for (var r = 0; r < u.length; r++) {
        const c = u[r];
        if (typeof c != "string" && !Array.isArray(c)) {
            for (const o in c)
                if (o !== "default" && !(o in s)) {
                    const h = Object.getOwnPropertyDescriptor(c, o);
                    h && Object.defineProperty(s, o, h.get ? h : {
                        enumerable: !0,
                        get: () => c[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(s, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function () {
    const u = document.createElement("link").relList;
    if (u && u.supports && u.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        c(o);
    new MutationObserver(o => {
        for (const h of o)
            if (h.type === "childList")
                for (const p of h.addedNodes)
                    p.tagName === "LINK" && p.rel === "modulepreload" && c(p)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function r(o) {
        const h = {};
        return o.integrity && (h.integrity = o.integrity),
            o.referrerPolicy && (h.referrerPolicy = o.referrerPolicy),
            o.crossOrigin === "use-credentials" ? h.credentials = "include" : o.crossOrigin === "anonymous" ? h.credentials = "omit" : h.credentials = "same-origin",
            h
    }
    function c(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const h = r(o);
        fetch(o.href, h)
    }
}
)();
function r0(s) {
    return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s
}
var Cr = {
    exports: {}
}
    , Hi = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ud;
function s0() {
    if (Ud)
        return Hi;
    Ud = 1;
    var s = Symbol.for("react.transitional.element")
        , u = Symbol.for("react.fragment");
    function r(c, o, h) {
        var p = null;
        if (h !== void 0 && (p = "" + h),
            o.key !== void 0 && (p = "" + o.key),
            "key" in o) {
            h = {};
            for (var g in o)
                g !== "key" && (h[g] = o[g])
        } else
            h = o;
        return o = h.ref,
        {
            $$typeof: s,
            type: c,
            key: p,
            ref: o !== void 0 ? o : null,
            props: h
        }
    }
    return Hi.Fragment = u,
        Hi.jsx = r,
        Hi.jsxs = r,
        Hi
}
var kd;
function f0() {
    return kd || (kd = 1,
        Cr.exports = s0()),
        Cr.exports
}
var Ne = f0()
    , Er = {
        exports: {}
    }
    , J = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jd;
function o0() {
    if (jd)
        return J;
    jd = 1;
    var s = Symbol.for("react.transitional.element")
        , u = Symbol.for("react.portal")
        , r = Symbol.for("react.fragment")
        , c = Symbol.for("react.strict_mode")
        , o = Symbol.for("react.profiler")
        , h = Symbol.for("react.consumer")
        , p = Symbol.for("react.context")
        , g = Symbol.for("react.forward_ref")
        , v = Symbol.for("react.suspense")
        , y = Symbol.for("react.memo")
        , C = Symbol.for("react.lazy")
        , D = Symbol.iterator;
    function U(b) {
        return b === null || typeof b != "object" ? null : (b = D && b[D] || b["@@iterator"],
            typeof b == "function" ? b : null)
    }
    var L = {
        isMounted: function () {
            return !1
        },
        enqueueForceUpdate: function () { },
        enqueueReplaceState: function () { },
        enqueueSetState: function () { }
    }
        , I = Object.assign
        , ce = {};
    function we(b, z, Q) {
        this.props = b,
            this.context = z,
            this.refs = ce,
            this.updater = Q || L
    }
    we.prototype.isReactComponent = {},
        we.prototype.setState = function (b, z) {
            if (typeof b != "object" && typeof b != "function" && b != null)
                throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
            this.updater.enqueueSetState(this, b, z, "setState")
        }
        ,
        we.prototype.forceUpdate = function (b) {
            this.updater.enqueueForceUpdate(this, b, "forceUpdate")
        }
        ;
    function jt() { }
    jt.prototype = we.prototype;
    function Ge(b, z, Q) {
        this.props = b,
            this.context = z,
            this.refs = ce,
            this.updater = Q || L
    }
    var bt = Ge.prototype = new jt;
    bt.constructor = Ge,
        I(bt, we.prototype),
        bt.isPureReactComponent = !0;
    var en = Array.isArray
        , ie = {
            H: null,
            A: null,
            T: null,
            S: null
        }
        , Ke = Object.prototype.hasOwnProperty;
    function tn(b, z, Q, Y, j, ee) {
        return Q = ee.ref,
        {
            $$typeof: s,
            type: b,
            key: z,
            ref: Q !== void 0 ? Q : null,
            props: ee
        }
    }
    function nn(b, z) {
        return tn(b.type, z, void 0, void 0, void 0, b.props)
    }
    function X(b) {
        return typeof b == "object" && b !== null && b.$$typeof === s
    }
    function le(b) {
        var z = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + b.replace(/[=:]/g, function (Q) {
            return z[Q]
        })
    }
    var ut = /\/+/g;
    function Bt(b, z) {
        return typeof b == "object" && b !== null && b.key != null ? le("" + b.key) : z.toString(36)
    }
    function Et() { }
    function Nt(b) {
        switch (b.status) {
            case "fulfilled":
                return b.value;
            case "rejected":
                throw b.reason;
            default:
                switch (typeof b.status == "string" ? b.then(Et, Et) : (b.status = "pending",
                    b.then(function (z) {
                        b.status === "pending" && (b.status = "fulfilled",
                            b.value = z)
                    }, function (z) {
                        b.status === "pending" && (b.status = "rejected",
                            b.reason = z)
                    })),
                b.status) {
                    case "fulfilled":
                        return b.value;
                    case "rejected":
                        throw b.reason
                }
        }
        throw b
    }
    function Je(b, z, Q, Y, j) {
        var ee = typeof b;
        (ee === "undefined" || ee === "boolean") && (b = null);
        var $ = !1;
        if (b === null)
            $ = !0;
        else
            switch (ee) {
                case "bigint":
                case "string":
                case "number":
                    $ = !0;
                    break;
                case "object":
                    switch (b.$$typeof) {
                        case s:
                        case u:
                            $ = !0;
                            break;
                        case C:
                            return $ = b._init,
                                Je($(b._payload), z, Q, Y, j)
                    }
            }
        if ($)
            return j = j(b),
                $ = Y === "" ? "." + Bt(b, 0) : Y,
                en(j) ? (Q = "",
                    $ != null && (Q = $.replace(ut, "$&/") + "/"),
                    Je(j, z, Q, "", function (Te) {
                        return Te
                    })) : j != null && (X(j) && (j = nn(j, Q + (j.key == null || b && b.key === j.key ? "" : ("" + j.key).replace(ut, "$&/") + "/") + $)),
                        z.push(j)),
                1;
        $ = 0;
        var Xe = Y === "" ? "." : Y + ":";
        if (en(b))
            for (var ue = 0; ue < b.length; ue++)
                Y = b[ue],
                    ee = Xe + Bt(Y, ue),
                    $ += Je(Y, z, Q, ee, j);
        else if (ue = U(b),
            typeof ue == "function")
            for (b = ue.call(b),
                ue = 0; !(Y = b.next()).done;)
                Y = Y.value,
                    ee = Xe + Bt(Y, ue++),
                    $ += Je(Y, z, Q, ee, j);
        else if (ee === "object") {
            if (typeof b.then == "function")
                return Je(Nt(b), z, Q, Y, j);
            throw z = String(b),
            Error("Objects are not valid as a React child (found: " + (z === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : z) + "). If you meant to render a collection of children, use an array instead.")
        }
        return $
    }
    function k(b, z, Q) {
        if (b == null)
            return b;
        var Y = []
            , j = 0;
        return Je(b, Y, "", "", function (ee) {
            return z.call(Q, ee, j++)
        }),
            Y
    }
    function K(b) {
        if (b._status === -1) {
            var z = b._result;
            z = z(),
                z.then(function (Q) {
                    (b._status === 0 || b._status === -1) && (b._status = 1,
                        b._result = Q)
                }, function (Q) {
                    (b._status === 0 || b._status === -1) && (b._status = 2,
                        b._result = Q)
                }),
                b._status === -1 && (b._status = 0,
                    b._result = z)
        }
        if (b._status === 1)
            return b._result.default;
        throw b._result
    }
    var V = typeof reportError == "function" ? reportError : function (b) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var z = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: typeof b == "object" && b !== null && typeof b.message == "string" ? String(b.message) : String(b),
                error: b
            });
            if (!window.dispatchEvent(z))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", b);
            return
        }
        console.error(b)
    }
        ;
    function oe() { }
    return J.Children = {
        map: k,
        forEach: function (b, z, Q) {
            k(b, function () {
                z.apply(this, arguments)
            }, Q)
        },
        count: function (b) {
            var z = 0;
            return k(b, function () {
                z++
            }),
                z
        },
        toArray: function (b) {
            return k(b, function (z) {
                return z
            }) || []
        },
        only: function (b) {
            if (!X(b))
                throw Error("React.Children.only expected to receive a single React element child.");
            return b
        }
    },
        J.Component = we,
        J.Fragment = r,
        J.Profiler = o,
        J.PureComponent = Ge,
        J.StrictMode = c,
        J.Suspense = v,
        J.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ie,
        J.act = function () {
            throw Error("act(...) is not supported in production builds of React.")
        }
        ,
        J.cache = function (b) {
            return function () {
                return b.apply(null, arguments)
            }
        }
        ,
        J.cloneElement = function (b, z, Q) {
            if (b == null)
                throw Error("The argument must be a React element, but you passed " + b + ".");
            var Y = I({}, b.props)
                , j = b.key
                , ee = void 0;
            if (z != null)
                for ($ in z.ref !== void 0 && (ee = void 0),
                    z.key !== void 0 && (j = "" + z.key),
                    z)
                    !Ke.call(z, $) || $ === "key" || $ === "__self" || $ === "__source" || $ === "ref" && z.ref === void 0 || (Y[$] = z[$]);
            var $ = arguments.length - 2;
            if ($ === 1)
                Y.children = Q;
            else if (1 < $) {
                for (var Xe = Array($), ue = 0; ue < $; ue++)
                    Xe[ue] = arguments[ue + 2];
                Y.children = Xe
            }
            return tn(b.type, j, void 0, void 0, ee, Y)
        }
        ,
        J.createContext = function (b) {
            return b = {
                $$typeof: p,
                _currentValue: b,
                _currentValue2: b,
                _threadCount: 0,
                Provider: null,
                Consumer: null
            },
                b.Provider = b,
                b.Consumer = {
                    $$typeof: h,
                    _context: b
                },
                b
        }
        ,
        J.createElement = function (b, z, Q) {
            var Y, j = {}, ee = null;
            if (z != null)
                for (Y in z.key !== void 0 && (ee = "" + z.key),
                    z)
                    Ke.call(z, Y) && Y !== "key" && Y !== "__self" && Y !== "__source" && (j[Y] = z[Y]);
            var $ = arguments.length - 2;
            if ($ === 1)
                j.children = Q;
            else if (1 < $) {
                for (var Xe = Array($), ue = 0; ue < $; ue++)
                    Xe[ue] = arguments[ue + 2];
                j.children = Xe
            }
            if (b && b.defaultProps)
                for (Y in $ = b.defaultProps,
                    $)
                    j[Y] === void 0 && (j[Y] = $[Y]);
            return tn(b, ee, void 0, void 0, null, j)
        }
        ,
        J.createRef = function () {
            return {
                current: null
            }
        }
        ,
        J.forwardRef = function (b) {
            return {
                $$typeof: g,
                render: b
            }
        }
        ,
        J.isValidElement = X,
        J.lazy = function (b) {
            return {
                $$typeof: C,
                _payload: {
                    _status: -1,
                    _result: b
                },
                _init: K
            }
        }
        ,
        J.memo = function (b, z) {
            return {
                $$typeof: y,
                type: b,
                compare: z === void 0 ? null : z
            }
        }
        ,
        J.startTransition = function (b) {
            var z = ie.T
                , Q = {};
            ie.T = Q;
            try {
                var Y = b()
                    , j = ie.S;
                j !== null && j(Q, Y),
                    typeof Y == "object" && Y !== null && typeof Y.then == "function" && Y.then(oe, V)
            } catch (ee) {
                V(ee)
            } finally {
                ie.T = z
            }
        }
        ,
        J.unstable_useCacheRefresh = function () {
            return ie.H.useCacheRefresh()
        }
        ,
        J.use = function (b) {
            return ie.H.use(b)
        }
        ,
        J.useActionState = function (b, z, Q) {
            return ie.H.useActionState(b, z, Q)
        }
        ,
        J.useCallback = function (b, z) {
            return ie.H.useCallback(b, z)
        }
        ,
        J.useContext = function (b) {
            return ie.H.useContext(b)
        }
        ,
        J.useDebugValue = function () { }
        ,
        J.useDeferredValue = function (b, z) {
            return ie.H.useDeferredValue(b, z)
        }
        ,
        J.useEffect = function (b, z) {
            return ie.H.useEffect(b, z)
        }
        ,
        J.useId = function () {
            return ie.H.useId()
        }
        ,
        J.useImperativeHandle = function (b, z, Q) {
            return ie.H.useImperativeHandle(b, z, Q)
        }
        ,
        J.useInsertionEffect = function (b, z) {
            return ie.H.useInsertionEffect(b, z)
        }
        ,
        J.useLayoutEffect = function (b, z) {
            return ie.H.useLayoutEffect(b, z)
        }
        ,
        J.useMemo = function (b, z) {
            return ie.H.useMemo(b, z)
        }
        ,
        J.useOptimistic = function (b, z) {
            return ie.H.useOptimistic(b, z)
        }
        ,
        J.useReducer = function (b, z, Q) {
            return ie.H.useReducer(b, z, Q)
        }
        ,
        J.useRef = function (b) {
            return ie.H.useRef(b)
        }
        ,
        J.useState = function (b) {
            return ie.H.useState(b)
        }
        ,
        J.useSyncExternalStore = function (b, z, Q) {
            return ie.H.useSyncExternalStore(b, z, Q)
        }
        ,
        J.useTransition = function () {
            return ie.H.useTransition()
        }
        ,
        J.version = "19.0.0",
        J
}
var Bd;
function Qr() {
    return Bd || (Bd = 1,
        Er.exports = o0()),
        Er.exports
}
var Fn = Qr()
    , Rr = {
        exports: {}
    }
    , Li = {}
    , Dr = {
        exports: {}
    }
    , Or = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nd;
function d0() {
    return Nd || (Nd = 1,
        function (s) {
            function u(k, K) {
                var V = k.length;
                k.push(K);
                e: for (; 0 < V;) {
                    var oe = V - 1 >>> 1
                        , b = k[oe];
                    if (0 < o(b, K))
                        k[oe] = K,
                            k[V] = b,
                            V = oe;
                    else
                        break e
                }
            }
            function r(k) {
                return k.length === 0 ? null : k[0]
            }
            function c(k) {
                if (k.length === 0)
                    return null;
                var K = k[0]
                    , V = k.pop();
                if (V !== K) {
                    k[0] = V;
                    e: for (var oe = 0, b = k.length, z = b >>> 1; oe < z;) {
                        var Q = 2 * (oe + 1) - 1
                            , Y = k[Q]
                            , j = Q + 1
                            , ee = k[j];
                        if (0 > o(Y, V))
                            j < b && 0 > o(ee, Y) ? (k[oe] = ee,
                                k[j] = V,
                                oe = j) : (k[oe] = Y,
                                    k[Q] = V,
                                    oe = Q);
                        else if (j < b && 0 > o(ee, V))
                            k[oe] = ee,
                                k[j] = V,
                                oe = j;
                        else
                            break e
                    }
                }
                return K
            }
            function o(k, K) {
                var V = k.sortIndex - K.sortIndex;
                return V !== 0 ? V : k.id - K.id
            }
            if (s.unstable_now = void 0,
                typeof performance == "object" && typeof performance.now == "function") {
                var h = performance;
                s.unstable_now = function () {
                    return h.now()
                }
            } else {
                var p = Date
                    , g = p.now();
                s.unstable_now = function () {
                    return p.now() - g
                }
            }
            var v = []
                , y = []
                , C = 1
                , D = null
                , U = 3
                , L = !1
                , I = !1
                , ce = !1
                , we = typeof setTimeout == "function" ? setTimeout : null
                , jt = typeof clearTimeout == "function" ? clearTimeout : null
                , Ge = typeof setImmediate < "u" ? setImmediate : null;
            function bt(k) {
                for (var K = r(y); K !== null;) {
                    if (K.callback === null)
                        c(y);
                    else if (K.startTime <= k)
                        c(y),
                            K.sortIndex = K.expirationTime,
                            u(v, K);
                    else
                        break;
                    K = r(y)
                }
            }
            function en(k) {
                if (ce = !1,
                    bt(k),
                    !I)
                    if (r(v) !== null)
                        I = !0,
                            Nt();
                    else {
                        var K = r(y);
                        K !== null && Je(en, K.startTime - k)
                    }
            }
            var ie = !1
                , Ke = -1
                , tn = 5
                , nn = -1;
            function X() {
                return !(s.unstable_now() - nn < tn)
            }
            function le() {
                if (ie) {
                    var k = s.unstable_now();
                    nn = k;
                    var K = !0;
                    try {
                        e: {
                            I = !1,
                                ce && (ce = !1,
                                    jt(Ke),
                                    Ke = -1),
                                L = !0;
                            var V = U;
                            try {
                                t: {
                                    for (bt(k),
                                        D = r(v); D !== null && !(D.expirationTime > k && X());) {
                                        var oe = D.callback;
                                        if (typeof oe == "function") {
                                            D.callback = null,
                                                U = D.priorityLevel;
                                            var b = oe(D.expirationTime <= k);
                                            if (k = s.unstable_now(),
                                                typeof b == "function") {
                                                D.callback = b,
                                                    bt(k),
                                                    K = !0;
                                                break t
                                            }
                                            D === r(v) && c(v),
                                                bt(k)
                                        } else
                                            c(v);
                                        D = r(v)
                                    }
                                    if (D !== null)
                                        K = !0;
                                    else {
                                        var z = r(y);
                                        z !== null && Je(en, z.startTime - k),
                                            K = !1
                                    }
                                }
                                break e
                            } finally {
                                D = null,
                                    U = V,
                                    L = !1
                            }
                            K = void 0
                        }
                    } finally {
                        K ? ut() : ie = !1
                    }
                }
            }
            var ut;
            if (typeof Ge == "function")
                ut = function () {
                    Ge(le)
                }
                    ;
            else if (typeof MessageChannel < "u") {
                var Bt = new MessageChannel
                    , Et = Bt.port2;
                Bt.port1.onmessage = le,
                    ut = function () {
                        Et.postMessage(null)
                    }
            } else
                ut = function () {
                    we(le, 0)
                }
                    ;
            function Nt() {
                ie || (ie = !0,
                    ut())
            }
            function Je(k, K) {
                Ke = we(function () {
                    k(s.unstable_now())
                }, K)
            }
            s.unstable_IdlePriority = 5,
                s.unstable_ImmediatePriority = 1,
                s.unstable_LowPriority = 4,
                s.unstable_NormalPriority = 3,
                s.unstable_Profiling = null,
                s.unstable_UserBlockingPriority = 2,
                s.unstable_cancelCallback = function (k) {
                    k.callback = null
                }
                ,
                s.unstable_continueExecution = function () {
                    I || L || (I = !0,
                        Nt())
                }
                ,
                s.unstable_forceFrameRate = function (k) {
                    0 > k || 125 < k ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : tn = 0 < k ? Math.floor(1e3 / k) : 5
                }
                ,
                s.unstable_getCurrentPriorityLevel = function () {
                    return U
                }
                ,
                s.unstable_getFirstCallbackNode = function () {
                    return r(v)
                }
                ,
                s.unstable_next = function (k) {
                    switch (U) {
                        case 1:
                        case 2:
                        case 3:
                            var K = 3;
                            break;
                        default:
                            K = U
                    }
                    var V = U;
                    U = K;
                    try {
                        return k()
                    } finally {
                        U = V
                    }
                }
                ,
                s.unstable_pauseExecution = function () { }
                ,
                s.unstable_requestPaint = function () { }
                ,
                s.unstable_runWithPriority = function (k, K) {
                    switch (k) {
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                            break;
                        default:
                            k = 3
                    }
                    var V = U;
                    U = k;
                    try {
                        return K()
                    } finally {
                        U = V
                    }
                }
                ,
                s.unstable_scheduleCallback = function (k, K, V) {
                    var oe = s.unstable_now();
                    switch (typeof V == "object" && V !== null ? (V = V.delay,
                        V = typeof V == "number" && 0 < V ? oe + V : oe) : V = oe,
                    k) {
                        case 1:
                            var b = -1;
                            break;
                        case 2:
                            b = 250;
                            break;
                        case 5:
                            b = 1073741823;
                            break;
                        case 4:
                            b = 1e4;
                            break;
                        default:
                            b = 5e3
                    }
                    return b = V + b,
                        k = {
                            id: C++,
                            callback: K,
                            priorityLevel: k,
                            startTime: V,
                            expirationTime: b,
                            sortIndex: -1
                        },
                        V > oe ? (k.sortIndex = V,
                            u(y, k),
                            r(v) === null && k === r(y) && (ce ? (jt(Ke),
                                Ke = -1) : ce = !0,
                                Je(en, V - oe))) : (k.sortIndex = b,
                                    u(v, k),
                                    I || L || (I = !0,
                                        Nt())),
                        k
                }
                ,
                s.unstable_shouldYield = X,
                s.unstable_wrapCallback = function (k) {
                    var K = U;
                    return function () {
                        var V = U;
                        U = K;
                        try {
                            return k.apply(this, arguments)
                        } finally {
                            U = V
                        }
                    }
                }
        }(Or)),
        Or
}
var Hd;
function h0() {
    return Hd || (Hd = 1,
        Dr.exports = d0()),
        Dr.exports
}
var Ar = {
    exports: {}
}
    , qe = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ld;
function p0() {
    if (Ld)
        return qe;
    Ld = 1;
    var s = Qr();
    function u(v) {
        var y = "https://react.dev/errors/" + v;
        if (1 < arguments.length) {
            y += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var C = 2; C < arguments.length; C++)
                y += "&args[]=" + encodeURIComponent(arguments[C])
        }
        return "Minified React error #" + v + "; visit " + y + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function r() { }
    var c = {
        d: {
            f: r,
            r: function () {
                throw Error(u(522))
            },
            D: r,
            C: r,
            L: r,
            m: r,
            X: r,
            S: r,
            M: r
        },
        p: 0,
        findDOMNode: null
    }
        , o = Symbol.for("react.portal");
    function h(v, y, C) {
        var D = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: o,
            key: D == null ? null : "" + D,
            children: v,
            containerInfo: y,
            implementation: C
        }
    }
    var p = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function g(v, y) {
        if (v === "font")
            return "";
        if (typeof y == "string")
            return y === "use-credentials" ? y : ""
    }
    return qe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c,
        qe.createPortal = function (v, y) {
            var C = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
            if (!y || y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11)
                throw Error(u(299));
            return h(v, y, null, C)
        }
        ,
        qe.flushSync = function (v) {
            var y = p.T
                , C = c.p;
            try {
                if (p.T = null,
                    c.p = 2,
                    v)
                    return v()
            } finally {
                p.T = y,
                    c.p = C,
                    c.d.f()
            }
        }
        ,
        qe.preconnect = function (v, y) {
            typeof v == "string" && (y ? (y = y.crossOrigin,
                y = typeof y == "string" ? y === "use-credentials" ? y : "" : void 0) : y = null,
                c.d.C(v, y))
        }
        ,
        qe.prefetchDNS = function (v) {
            typeof v == "string" && c.d.D(v)
        }
        ,
        qe.preinit = function (v, y) {
            if (typeof v == "string" && y && typeof y.as == "string") {
                var C = y.as
                    , D = g(C, y.crossOrigin)
                    , U = typeof y.integrity == "string" ? y.integrity : void 0
                    , L = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
                C === "style" ? c.d.S(v, typeof y.precedence == "string" ? y.precedence : void 0, {
                    crossOrigin: D,
                    integrity: U,
                    fetchPriority: L
                }) : C === "script" && c.d.X(v, {
                    crossOrigin: D,
                    integrity: U,
                    fetchPriority: L,
                    nonce: typeof y.nonce == "string" ? y.nonce : void 0
                })
            }
        }
        ,
        qe.preinitModule = function (v, y) {
            if (typeof v == "string")
                if (typeof y == "object" && y !== null) {
                    if (y.as == null || y.as === "script") {
                        var C = g(y.as, y.crossOrigin);
                        c.d.M(v, {
                            crossOrigin: C,
                            integrity: typeof y.integrity == "string" ? y.integrity : void 0,
                            nonce: typeof y.nonce == "string" ? y.nonce : void 0
                        })
                    }
                } else
                    y == null && c.d.M(v)
        }
        ,
        qe.preload = function (v, y) {
            if (typeof v == "string" && typeof y == "object" && y !== null && typeof y.as == "string") {
                var C = y.as
                    , D = g(C, y.crossOrigin);
                c.d.L(v, C, {
                    crossOrigin: D,
                    integrity: typeof y.integrity == "string" ? y.integrity : void 0,
                    nonce: typeof y.nonce == "string" ? y.nonce : void 0,
                    type: typeof y.type == "string" ? y.type : void 0,
                    fetchPriority: typeof y.fetchPriority == "string" ? y.fetchPriority : void 0,
                    referrerPolicy: typeof y.referrerPolicy == "string" ? y.referrerPolicy : void 0,
                    imageSrcSet: typeof y.imageSrcSet == "string" ? y.imageSrcSet : void 0,
                    imageSizes: typeof y.imageSizes == "string" ? y.imageSizes : void 0,
                    media: typeof y.media == "string" ? y.media : void 0
                })
            }
        }
        ,
        qe.preloadModule = function (v, y) {
            if (typeof v == "string")
                if (y) {
                    var C = g(y.as, y.crossOrigin);
                    c.d.m(v, {
                        as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
                        crossOrigin: C,
                        integrity: typeof y.integrity == "string" ? y.integrity : void 0
                    })
                } else
                    c.d.m(v)
        }
        ,
        qe.requestFormReset = function (v) {
            c.d.r(v)
        }
        ,
        qe.unstable_batchedUpdates = function (v, y) {
            return v(y)
        }
        ,
        qe.useFormState = function (v, y, C) {
            return p.H.useFormState(v, y, C)
        }
        ,
        qe.useFormStatus = function () {
            return p.H.useHostTransitionStatus()
        }
        ,
        qe.version = "19.0.0",
        qe
}
var qd;
function m0() {
    if (qd)
        return Ar.exports;
    qd = 1;
    function s() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)
            } catch (u) {
                console.error(u)
            }
    }
    return s(),
        Ar.exports = p0(),
        Ar.exports
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yd;
function y0() {
    if (Yd)
        return Li;
    Yd = 1;
    var s = h0()
        , u = Qr()
        , r = m0();
    function c(e) {
        var t = "https://react.dev/errors/" + e;
        if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++)
                t += "&args[]=" + encodeURIComponent(arguments[n])
        }
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function o(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    }
    var h = Symbol.for("react.element")
        , p = Symbol.for("react.transitional.element")
        , g = Symbol.for("react.portal")
        , v = Symbol.for("react.fragment")
        , y = Symbol.for("react.strict_mode")
        , C = Symbol.for("react.profiler")
        , D = Symbol.for("react.provider")
        , U = Symbol.for("react.consumer")
        , L = Symbol.for("react.context")
        , I = Symbol.for("react.forward_ref")
        , ce = Symbol.for("react.suspense")
        , we = Symbol.for("react.suspense_list")
        , jt = Symbol.for("react.memo")
        , Ge = Symbol.for("react.lazy")
        , bt = Symbol.for("react.offscreen")
        , en = Symbol.for("react.memo_cache_sentinel")
        , ie = Symbol.iterator;
    function Ke(e) {
        return e === null || typeof e != "object" ? null : (e = ie && e[ie] || e["@@iterator"],
            typeof e == "function" ? e : null)
    }
    var tn = Symbol.for("react.client.reference");
    function nn(e) {
        if (e == null)
            return null;
        if (typeof e == "function")
            return e.$$typeof === tn ? null : e.displayName || e.name || null;
        if (typeof e == "string")
            return e;
        switch (e) {
            case v:
                return "Fragment";
            case g:
                return "Portal";
            case C:
                return "Profiler";
            case y:
                return "StrictMode";
            case ce:
                return "Suspense";
            case we:
                return "SuspenseList"
        }
        if (typeof e == "object")
            switch (e.$$typeof) {
                case L:
                    return (e.displayName || "Context") + ".Provider";
                case U:
                    return (e._context.displayName || "Context") + ".Consumer";
                case I:
                    var t = e.render;
                    return e = e.displayName,
                        e || (e = t.displayName || t.name || "",
                            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
                        e;
                case jt:
                    return t = e.displayName || null,
                        t !== null ? t : nn(e.type) || "Memo";
                case Ge:
                    t = e._payload,
                        e = e._init;
                    try {
                        return nn(e(t))
                    } catch { }
            }
        return null
    }
    var X = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, le = Object.assign, ut, Bt;
    function Et(e) {
        if (ut === void 0)
            try {
                throw Error()
            } catch (n) {
                var t = n.stack.trim().match(/\n( *(at )?)/);
                ut = t && t[1] || "",
                    Bt = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : ""
            }
        return `
` + ut + e + Bt
    }
    var Nt = !1;
    function Je(e, t) {
        if (!e || Nt)
            return "";
        Nt = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var a = {
                DetermineComponentFrameRoot: function () {
                    try {
                        if (t) {
                            var x = function () {
                                throw Error()
                            };
                            if (Object.defineProperty(x.prototype, "props", {
                                set: function () {
                                    throw Error()
                                }
                            }),
                                typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(x, [])
                                } catch (O) {
                                    var R = O
                                }
                                Reflect.construct(e, [], x)
                            } else {
                                try {
                                    x.call()
                                } catch (O) {
                                    R = O
                                }
                                e.call(x.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (O) {
                                R = O
                            }
                            (x = e()) && typeof x.catch == "function" && x.catch(function () { })
                        }
                    } catch (O) {
                        if (O && R && typeof O.stack == "string")
                            return [O.stack, R.stack]
                    }
                    return [null, null]
                }
            };
            a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var i = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
            i && i.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var l = a.DetermineComponentFrameRoot()
                , f = l[0]
                , d = l[1];
            if (f && d) {
                var m = f.split(`
`)
                    , _ = d.split(`
`);
                for (i = a = 0; a < m.length && !m[a].includes("DetermineComponentFrameRoot");)
                    a++;
                for (; i < _.length && !_[i].includes("DetermineComponentFrameRoot");)
                    i++;
                if (a === m.length || i === _.length)
                    for (a = m.length - 1,
                        i = _.length - 1; 1 <= a && 0 <= i && m[a] !== _[i];)
                        i--;
                for (; 1 <= a && 0 <= i; a--,
                    i--)
                    if (m[a] !== _[i]) {
                        if (a !== 1 || i !== 1)
                            do
                                if (a--,
                                    i--,
                                    0 > i || m[a] !== _[i]) {
                                    var A = `
` + m[a].replace(" at new ", " at ");
                                    return e.displayName && A.includes("<anonymous>") && (A = A.replace("<anonymous>", e.displayName)),
                                        A
                                }
                            while (1 <= a && 0 <= i);
                        break
                    }
            }
        } finally {
            Nt = !1,
                Error.prepareStackTrace = n
        }
        return (n = e ? e.displayName || e.name : "") ? Et(n) : ""
    }
    function k(e) {
        switch (e.tag) {
            case 26:
            case 27:
            case 5:
                return Et(e.type);
            case 16:
                return Et("Lazy");
            case 13:
                return Et("Suspense");
            case 19:
                return Et("SuspenseList");
            case 0:
            case 15:
                return e = Je(e.type, !1),
                    e;
            case 11:
                return e = Je(e.type.render, !1),
                    e;
            case 1:
                return e = Je(e.type, !0),
                    e;
            default:
                return ""
        }
    }
    function K(e) {
        try {
            var t = "";
            do
                t += k(e),
                    e = e.return;
            while (e);
            return t
        } catch (n) {
            return `
Error generating stack: ` + n.message + `
` + n.stack
        }
    }
    function V(e) {
        var t = e
            , n = e;
        if (e.alternate)
            for (; t.return;)
                t = t.return;
        else {
            e = t;
            do
                t = e,
                    (t.flags & 4098) !== 0 && (n = t.return),
                    e = t.return;
            while (e)
        }
        return t.tag === 3 ? n : null
    }
    function oe(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate,
                e !== null && (t = e.memoizedState)),
                t !== null)
                return t.dehydrated
        }
        return null
    }
    function b(e) {
        if (V(e) !== e)
            throw Error(c(188))
    }
    function z(e) {
        var t = e.alternate;
        if (!t) {
            if (t = V(e),
                t === null)
                throw Error(c(188));
            return t !== e ? null : e
        }
        for (var n = e, a = t; ;) {
            var i = n.return;
            if (i === null)
                break;
            var l = i.alternate;
            if (l === null) {
                if (a = i.return,
                    a !== null) {
                    n = a;
                    continue
                }
                break
            }
            if (i.child === l.child) {
                for (l = i.child; l;) {
                    if (l === n)
                        return b(i),
                            e;
                    if (l === a)
                        return b(i),
                            t;
                    l = l.sibling
                }
                throw Error(c(188))
            }
            if (n.return !== a.return)
                n = i,
                    a = l;
            else {
                for (var f = !1, d = i.child; d;) {
                    if (d === n) {
                        f = !0,
                            n = i,
                            a = l;
                        break
                    }
                    if (d === a) {
                        f = !0,
                            a = i,
                            n = l;
                        break
                    }
                    d = d.sibling
                }
                if (!f) {
                    for (d = l.child; d;) {
                        if (d === n) {
                            f = !0,
                                n = l,
                                a = i;
                            break
                        }
                        if (d === a) {
                            f = !0,
                                a = l,
                                n = i;
                            break
                        }
                        d = d.sibling
                    }
                    if (!f)
                        throw Error(c(189))
                }
            }
            if (n.alternate !== a)
                throw Error(c(190))
        }
        if (n.tag !== 3)
            throw Error(c(188));
        return n.stateNode.current === n ? e : t
    }
    function Q(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return e;
        for (e = e.child; e !== null;) {
            if (t = Q(e),
                t !== null)
                return t;
            e = e.sibling
        }
        return null
    }
    var Y = Array.isArray
        , j = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
        , ee = {
            pending: !1,
            data: null,
            method: null,
            action: null
        }
        , $ = []
        , Xe = -1;
    function ue(e) {
        return {
            current: e
        }
    }
    function Te(e) {
        0 > Xe || (e.current = $[Xe],
            $[Xe] = null,
            Xe--)
    }
    function pe(e, t) {
        Xe++,
            $[Xe] = e.current,
            e.current = t
    }
    var Rt = ue(null)
        , qa = ue(null)
        , an = ue(null)
        , Zi = ue(null);
    function Ki(e, t) {
        switch (pe(an, t),
        pe(qa, e),
        pe(Rt, null),
        e = t.nodeType,
        e) {
            case 9:
            case 11:
                t = (t = t.documentElement) && (t = t.namespaceURI) ? cd(t) : 0;
                break;
            default:
                if (e = e === 8 ? t.parentNode : t,
                    t = e.tagName,
                    e = e.namespaceURI)
                    e = cd(e),
                        t = rd(e, t);
                else
                    switch (t) {
                        case "svg":
                            t = 1;
                            break;
                        case "math":
                            t = 2;
                            break;
                        default:
                            t = 0
                    }
        }
        Te(Rt),
            pe(Rt, t)
    }
    function ta() {
        Te(Rt),
            Te(qa),
            Te(an)
    }
    function pu(e) {
        e.memoizedState !== null && pe(Zi, e);
        var t = Rt.current
            , n = rd(t, e.type);
        t !== n && (pe(qa, e),
            pe(Rt, n))
    }
    function Ji(e) {
        qa.current === e && (Te(Rt),
            Te(qa)),
            Zi.current === e && (Te(Zi),
                zi._currentValue = ee)
    }
    var mu = Object.prototype.hasOwnProperty
        , yu = s.unstable_scheduleCallback
        , gu = s.unstable_cancelCallback
        , Lh = s.unstable_shouldYield
        , qh = s.unstable_requestPaint
        , Dt = s.unstable_now
        , Yh = s.unstable_getCurrentPriorityLevel
        , $r = s.unstable_ImmediatePriority
        , Pr = s.unstable_UserBlockingPriority
        , $i = s.unstable_NormalPriority
        , Gh = s.unstable_LowPriority
        , Fr = s.unstable_IdlePriority
        , Xh = s.log
        , Qh = s.unstable_setDisableYieldValue
        , Ya = null
        , Ie = null;
    function Vh(e) {
        if (Ie && typeof Ie.onCommitFiberRoot == "function")
            try {
                Ie.onCommitFiberRoot(Ya, e, void 0, (e.current.flags & 128) === 128)
            } catch { }
    }
    function ln(e) {
        if (typeof Xh == "function" && Qh(e),
            Ie && typeof Ie.setStrictMode == "function")
            try {
                Ie.setStrictMode(Ya, e)
            } catch { }
    }
    var et = Math.clz32 ? Math.clz32 : Jh
        , Zh = Math.log
        , Kh = Math.LN2;
    function Jh(e) {
        return e >>>= 0,
            e === 0 ? 32 : 31 - (Zh(e) / Kh | 0) | 0
    }
    var Pi = 128
        , Fi = 4194304;
    function An(e) {
        var t = e & 42;
        if (t !== 0)
            return t;
        switch (e & -e) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 4:
                return 4;
            case 8:
                return 8;
            case 16:
                return 16;
            case 32:
                return 32;
            case 64:
                return 64;
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return e & 4194176;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return e & 62914560;
            case 67108864:
                return 67108864;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 0;
            default:
                return e
        }
    }
    function Wi(e, t) {
        var n = e.pendingLanes;
        if (n === 0)
            return 0;
        var a = 0
            , i = e.suspendedLanes
            , l = e.pingedLanes
            , f = e.warmLanes;
        e = e.finishedLanes !== 0;
        var d = n & 134217727;
        return d !== 0 ? (n = d & ~i,
            n !== 0 ? a = An(n) : (l &= d,
                l !== 0 ? a = An(l) : e || (f = d & ~f,
                    f !== 0 && (a = An(f))))) : (d = n & ~i,
                        d !== 0 ? a = An(d) : l !== 0 ? a = An(l) : e || (f = n & ~f,
                            f !== 0 && (a = An(f)))),
            a === 0 ? 0 : t !== 0 && t !== a && (t & i) === 0 && (i = a & -a,
                f = t & -t,
                i >= f || i === 32 && (f & 4194176) !== 0) ? t : a
    }
    function Ga(e, t) {
        return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0
    }
    function $h(e, t) {
        switch (e) {
            case 1:
            case 2:
            case 4:
            case 8:
                return t + 250;
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return t + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return -1;
            case 67108864:
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1
        }
    }
    function Wr() {
        var e = Pi;
        return Pi <<= 1,
            (Pi & 4194176) === 0 && (Pi = 128),
            e
    }
    function wr() {
        var e = Fi;
        return Fi <<= 1,
            (Fi & 62914560) === 0 && (Fi = 4194304),
            e
    }
    function vu(e) {
        for (var t = [], n = 0; 31 > n; n++)
            t.push(e);
        return t
    }
    function Xa(e, t) {
        e.pendingLanes |= t,
            t !== 268435456 && (e.suspendedLanes = 0,
                e.pingedLanes = 0,
                e.warmLanes = 0)
    }
    function Ph(e, t, n, a, i, l) {
        var f = e.pendingLanes;
        e.pendingLanes = n,
            e.suspendedLanes = 0,
            e.pingedLanes = 0,
            e.warmLanes = 0,
            e.expiredLanes &= n,
            e.entangledLanes &= n,
            e.errorRecoveryDisabledLanes &= n,
            e.shellSuspendCounter = 0;
        var d = e.entanglements
            , m = e.expirationTimes
            , _ = e.hiddenUpdates;
        for (n = f & ~n; 0 < n;) {
            var A = 31 - et(n)
                , x = 1 << A;
            d[A] = 0,
                m[A] = -1;
            var R = _[A];
            if (R !== null)
                for (_[A] = null,
                    A = 0; A < R.length; A++) {
                    var O = R[A];
                    O !== null && (O.lane &= -536870913)
                }
            n &= ~x
        }
        a !== 0 && Ir(e, a, 0),
            l !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= l & ~(f & ~t))
    }
    function Ir(e, t, n) {
        e.pendingLanes |= t,
            e.suspendedLanes &= ~t;
        var a = 31 - et(t);
        e.entangledLanes |= t,
            e.entanglements[a] = e.entanglements[a] | 1073741824 | n & 4194218
    }
    function es(e, t) {
        var n = e.entangledLanes |= t;
        for (e = e.entanglements; n;) {
            var a = 31 - et(n)
                , i = 1 << a;
            i & t | e[a] & t && (e[a] |= t),
                n &= ~i
        }
    }
    function ts(e) {
        return e &= -e,
            2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }
    function ns() {
        var e = j.p;
        return e !== 0 ? e : (e = window.event,
            e === void 0 ? 32 : Dd(e.type))
    }
    function Fh(e, t) {
        var n = j.p;
        try {
            return j.p = e,
                t()
        } finally {
            j.p = n
        }
    }
    var un = Math.random().toString(36).slice(2)
        , He = "__reactFiber$" + un
        , $e = "__reactProps$" + un
        , na = "__reactContainer$" + un
        , bu = "__reactEvents$" + un
        , Wh = "__reactListeners$" + un
        , wh = "__reactHandles$" + un
        , as = "__reactResources$" + un
        , Qa = "__reactMarker$" + un;
    function Su(e) {
        delete e[He],
            delete e[$e],
            delete e[bu],
            delete e[Wh],
            delete e[wh]
    }
    function Mn(e) {
        var t = e[He];
        if (t)
            return t;
        for (var n = e.parentNode; n;) {
            if (t = n[na] || n[He]) {
                if (n = t.alternate,
                    t.child !== null || n !== null && n.child !== null)
                    for (e = od(e); e !== null;) {
                        if (n = e[He])
                            return n;
                        e = od(e)
                    }
                return t
            }
            e = n,
                n = e.parentNode
        }
        return null
    }
    function aa(e) {
        if (e = e[He] || e[na]) {
            var t = e.tag;
            if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
                return e
        }
        return null
    }
    function Va(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return e.stateNode;
        throw Error(c(33))
    }
    function ia(e) {
        var t = e[as];
        return t || (t = e[as] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }),
            t
    }
    function Ae(e) {
        e[Qa] = !0
    }
    var is = new Set
        , ls = {};
    function xn(e, t) {
        la(e, t),
            la(e + "Capture", t)
    }
    function la(e, t) {
        for (ls[e] = t,
            e = 0; e < t.length; e++)
            is.add(t[e])
    }
    var Ht = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
        , Ih = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")
        , us = {}
        , cs = {};
    function ep(e) {
        return mu.call(cs, e) ? !0 : mu.call(us, e) ? !1 : Ih.test(e) ? cs[e] = !0 : (us[e] = !0,
            !1)
    }
    function wi(e, t, n) {
        if (ep(t))
            if (n === null)
                e.removeAttribute(t);
            else {
                switch (typeof n) {
                    case "undefined":
                    case "function":
                    case "symbol":
                        e.removeAttribute(t);
                        return;
                    case "boolean":
                        var a = t.toLowerCase().slice(0, 5);
                        if (a !== "data-" && a !== "aria-") {
                            e.removeAttribute(t);
                            return
                        }
                }
                e.setAttribute(t, "" + n)
            }
    }
    function Ii(e, t, n) {
        if (n === null)
            e.removeAttribute(t);
        else {
            switch (typeof n) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    e.removeAttribute(t);
                    return
            }
            e.setAttribute(t, "" + n)
        }
    }
    function Lt(e, t, n, a) {
        if (a === null)
            e.removeAttribute(n);
        else {
            switch (typeof a) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    e.removeAttribute(n);
                    return
            }
            e.setAttributeNS(t, n, "" + a)
        }
    }
    function ct(e) {
        switch (typeof e) {
            case "bigint":
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return e;
            case "object":
                return e;
            default:
                return ""
        }
    }
    function rs(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }
    function tp(e) {
        var t = rs(e) ? "checked" : "value"
            , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
            , a = "" + e[t];
        if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
            var i = n.get
                , l = n.set;
            return Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                    return i.call(this)
                },
                set: function (f) {
                    a = "" + f,
                        l.call(this, f)
                }
            }),
                Object.defineProperty(e, t, {
                    enumerable: n.enumerable
                }),
            {
                getValue: function () {
                    return a
                },
                setValue: function (f) {
                    a = "" + f
                },
                stopTracking: function () {
                    e._valueTracker = null,
                        delete e[t]
                }
            }
        }
    }
    function el(e) {
        e._valueTracker || (e._valueTracker = tp(e))
    }
    function ss(e) {
        if (!e)
            return !1;
        var t = e._valueTracker;
        if (!t)
            return !0;
        var n = t.getValue()
            , a = "";
        return e && (a = rs(e) ? e.checked ? "true" : "false" : e.value),
            e = a,
            e !== n ? (t.setValue(e),
                !0) : !1
    }
    function tl(e) {
        if (e = e || (typeof document < "u" ? document : void 0),
            typeof e > "u")
            return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }
    var np = /[\n"\\]/g;
    function rt(e) {
        return e.replace(np, function (t) {
            return "\\" + t.charCodeAt(0).toString(16) + " "
        })
    }
    function _u(e, t, n, a, i, l, f, d) {
        e.name = "",
            f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? e.type = f : e.removeAttribute("type"),
            t != null ? f === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + ct(t)) : e.value !== "" + ct(t) && (e.value = "" + ct(t)) : f !== "submit" && f !== "reset" || e.removeAttribute("value"),
            t != null ? Tu(e, f, ct(t)) : n != null ? Tu(e, f, ct(n)) : a != null && e.removeAttribute("value"),
            i == null && l != null && (e.defaultChecked = !!l),
            i != null && (e.checked = i && typeof i != "function" && typeof i != "symbol"),
            d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? e.name = "" + ct(d) : e.removeAttribute("name")
    }
    function fs(e, t, n, a, i, l, f, d) {
        if (l != null && typeof l != "function" && typeof l != "symbol" && typeof l != "boolean" && (e.type = l),
            t != null || n != null) {
            if (!(l !== "submit" && l !== "reset" || t != null))
                return;
            n = n != null ? "" + ct(n) : "",
                t = t != null ? "" + ct(t) : n,
                d || t === e.value || (e.value = t),
                e.defaultValue = t
        }
        a = a ?? i,
            a = typeof a != "function" && typeof a != "symbol" && !!a,
            e.checked = d ? e.checked : !!a,
            e.defaultChecked = !!a,
            f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (e.name = f)
    }
    function Tu(e, t, n) {
        t === "number" && tl(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n)
    }
    function ua(e, t, n, a) {
        if (e = e.options,
            t) {
            t = {};
            for (var i = 0; i < n.length; i++)
                t["$" + n[i]] = !0;
            for (n = 0; n < e.length; n++)
                i = t.hasOwnProperty("$" + e[n].value),
                    e[n].selected !== i && (e[n].selected = i),
                    i && a && (e[n].defaultSelected = !0)
        } else {
            for (n = "" + ct(n),
                t = null,
                i = 0; i < e.length; i++) {
                if (e[i].value === n) {
                    e[i].selected = !0,
                        a && (e[i].defaultSelected = !0);
                    return
                }
                t !== null || e[i].disabled || (t = e[i])
            }
            t !== null && (t.selected = !0)
        }
    }
    function os(e, t, n) {
        if (t != null && (t = "" + ct(t),
            t !== e.value && (e.value = t),
            n == null)) {
            e.defaultValue !== t && (e.defaultValue = t);
            return
        }
        e.defaultValue = n != null ? "" + ct(n) : ""
    }
    function ds(e, t, n, a) {
        if (t == null) {
            if (a != null) {
                if (n != null)
                    throw Error(c(92));
                if (Y(a)) {
                    if (1 < a.length)
                        throw Error(c(93));
                    a = a[0]
                }
                n = a
            }
            n == null && (n = ""),
                t = n
        }
        n = ct(t),
            e.defaultValue = n,
            a = e.textContent,
            a === n && a !== "" && a !== null && (e.value = a)
    }
    function ca(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && n.nodeType === 3) {
                n.nodeValue = t;
                return
            }
        }
        e.textContent = t
    }
    var ap = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function hs(e, t, n) {
        var a = t.indexOf("--") === 0;
        n == null || typeof n == "boolean" || n === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, n) : typeof n != "number" || n === 0 || ap.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px"
    }
    function ps(e, t, n) {
        if (t != null && typeof t != "object")
            throw Error(c(62));
        if (e = e.style,
            n != null) {
            for (var a in n)
                !n.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "");
            for (var i in t)
                a = t[i],
                    t.hasOwnProperty(i) && n[i] !== a && hs(e, i, a)
        } else
            for (var l in t)
                t.hasOwnProperty(l) && hs(e, l, t[l])
    }
    function Cu(e) {
        if (e.indexOf("-") === -1)
            return !1;
        switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0
        }
    }
    var ip = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]])
        , lp = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function nl(e) {
        return lp.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
    }
    var Eu = null;
    function Ru(e) {
        return e = e.target || e.srcElement || window,
            e.correspondingUseElement && (e = e.correspondingUseElement),
            e.nodeType === 3 ? e.parentNode : e
    }
    var ra = null
        , sa = null;
    function ms(e) {
        var t = aa(e);
        if (t && (e = t.stateNode)) {
            var n = e[$e] || null;
            e: switch (e = t.stateNode,
            t.type) {
                case "input":
                    if (_u(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name),
                        t = n.name,
                        n.type === "radio" && t != null) {
                        for (n = e; n.parentNode;)
                            n = n.parentNode;
                        for (n = n.querySelectorAll('input[name="' + rt("" + t) + '"][type="radio"]'),
                            t = 0; t < n.length; t++) {
                            var a = n[t];
                            if (a !== e && a.form === e.form) {
                                var i = a[$e] || null;
                                if (!i)
                                    throw Error(c(90));
                                _u(a, i.value, i.defaultValue, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name)
                            }
                        }
                        for (t = 0; t < n.length; t++)
                            a = n[t],
                                a.form === e.form && ss(a)
                    }
                    break e;
                case "textarea":
                    os(e, n.value, n.defaultValue);
                    break e;
                case "select":
                    t = n.value,
                        t != null && ua(e, !!n.multiple, t, !1)
            }
        }
    }
    var Du = !1;
    function ys(e, t, n) {
        if (Du)
            return e(t, n);
        Du = !0;
        try {
            var a = e(t);
            return a
        } finally {
            if (Du = !1,
                (ra !== null || sa !== null) && (ql(),
                    ra && (t = ra,
                        e = sa,
                        sa = ra = null,
                        ms(t),
                        e)))
                for (t = 0; t < e.length; t++)
                    ms(e[t])
        }
    }
    function Za(e, t) {
        var n = e.stateNode;
        if (n === null)
            return null;
        var a = n[$e] || null;
        if (a === null)
            return null;
        n = a[t];
        e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (a = !a.disabled) || (e = e.type,
                    a = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
                    e = !a;
                break e;
            default:
                e = !1
        }
        if (e)
            return null;
        if (n && typeof n != "function")
            throw Error(c(231, t, typeof n));
        return n
    }
    var Ou = !1;
    if (Ht)
        try {
            var Ka = {};
            Object.defineProperty(Ka, "passive", {
                get: function () {
                    Ou = !0
                }
            }),
                window.addEventListener("test", Ka, Ka),
                window.removeEventListener("test", Ka, Ka)
        } catch {
            Ou = !1
        }
    var cn = null
        , Au = null
        , al = null;
    function gs() {
        if (al)
            return al;
        var e, t = Au, n = t.length, a, i = "value" in cn ? cn.value : cn.textContent, l = i.length;
        for (e = 0; e < n && t[e] === i[e]; e++)
            ;
        var f = n - e;
        for (a = 1; a <= f && t[n - a] === i[l - a]; a++)
            ;
        return al = i.slice(e, 1 < a ? 1 - a : void 0)
    }
    function il(e) {
        var t = e.keyCode;
        return "charCode" in e ? (e = e.charCode,
            e === 0 && t === 13 && (e = 13)) : e = t,
            e === 10 && (e = 13),
            32 <= e || e === 13 ? e : 0
    }
    function ll() {
        return !0
    }
    function vs() {
        return !1
    }
    function Pe(e) {
        function t(n, a, i, l, f) {
            this._reactName = n,
                this._targetInst = i,
                this.type = a,
                this.nativeEvent = l,
                this.target = f,
                this.currentTarget = null;
            for (var d in e)
                e.hasOwnProperty(d) && (n = e[d],
                    this[d] = n ? n(l) : l[d]);
            return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? ll : vs,
                this.isPropagationStopped = vs,
                this
        }
        return le(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
                    this.isDefaultPrevented = ll)
            },
            stopPropagation: function () {
                var n = this.nativeEvent;
                n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
                    this.isPropagationStopped = ll)
            },
            persist: function () { },
            isPersistent: ll
        }),
            t
    }
    var zn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, ul = Pe(zn), Ja = le({}, zn, {
        view: 0,
        detail: 0
    }), up = Pe(Ja), Mu, xu, $a, cl = le({}, Ja, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Uu,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function (e) {
            return "movementX" in e ? e.movementX : (e !== $a && ($a && e.type === "mousemove" ? (Mu = e.screenX - $a.screenX,
                xu = e.screenY - $a.screenY) : xu = Mu = 0,
                $a = e),
                Mu)
        },
        movementY: function (e) {
            return "movementY" in e ? e.movementY : xu
        }
    }), bs = Pe(cl), cp = le({}, cl, {
        dataTransfer: 0
    }), rp = Pe(cp), sp = le({}, Ja, {
        relatedTarget: 0
    }), zu = Pe(sp), fp = le({}, zn, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), op = Pe(fp), dp = le({}, zn, {
        clipboardData: function (e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }), hp = Pe(dp), pp = le({}, zn, {
        data: 0
    }), Ss = Pe(pp), mp = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, yp = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, gp = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function vp(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = gp[e]) ? !!t[e] : !1
    }
    function Uu() {
        return vp
    }
    var bp = le({}, Ja, {
        key: function (e) {
            if (e.key) {
                var t = mp[e.key] || e.key;
                if (t !== "Unidentified")
                    return t
            }
            return e.type === "keypress" ? (e = il(e),
                e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? yp[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Uu,
        charCode: function (e) {
            return e.type === "keypress" ? il(e) : 0
        },
        keyCode: function (e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function (e) {
            return e.type === "keypress" ? il(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    })
        , Sp = Pe(bp)
        , _p = le({}, cl, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
        })
        , _s = Pe(_p)
        , Tp = le({}, Ja, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: Uu
        })
        , Cp = Pe(Tp)
        , Ep = le({}, zn, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        })
        , Rp = Pe(Ep)
        , Dp = le({}, cl, {
            deltaX: function (e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
            },
            deltaY: function (e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
            },
            deltaZ: 0,
            deltaMode: 0
        })
        , Op = Pe(Dp)
        , Ap = le({}, zn, {
            newState: 0,
            oldState: 0
        })
        , Mp = Pe(Ap)
        , xp = [9, 13, 27, 32]
        , ku = Ht && "CompositionEvent" in window
        , Pa = null;
    Ht && "documentMode" in document && (Pa = document.documentMode);
    var zp = Ht && "TextEvent" in window && !Pa
        , Ts = Ht && (!ku || Pa && 8 < Pa && 11 >= Pa)
        , Cs = " "
        , Es = !1;
    function Rs(e, t) {
        switch (e) {
            case "keyup":
                return xp.indexOf(t.keyCode) !== -1;
            case "keydown":
                return t.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1
        }
    }
    function Ds(e) {
        return e = e.detail,
            typeof e == "object" && "data" in e ? e.data : null
    }
    var fa = !1;
    function Up(e, t) {
        switch (e) {
            case "compositionend":
                return Ds(t);
            case "keypress":
                return t.which !== 32 ? null : (Es = !0,
                    Cs);
            case "textInput":
                return e = t.data,
                    e === Cs && Es ? null : e;
            default:
                return null
        }
    }
    function kp(e, t) {
        if (fa)
            return e === "compositionend" || !ku && Rs(e, t) ? (e = gs(),
                al = Au = cn = null,
                fa = !1,
                e) : null;
        switch (e) {
            case "paste":
                return null;
            case "keypress":
                if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                    if (t.char && 1 < t.char.length)
                        return t.char;
                    if (t.which)
                        return String.fromCharCode(t.which)
                }
                return null;
            case "compositionend":
                return Ts && t.locale !== "ko" ? null : t.data;
            default:
                return null
        }
    }
    var jp = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function Os(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!jp[e.type] : t === "textarea"
    }
    function As(e, t, n, a) {
        ra ? sa ? sa.push(a) : sa = [a] : ra = a,
            t = Vl(t, "onChange"),
            0 < t.length && (n = new ul("onChange", "change", null, n, a),
                e.push({
                    event: n,
                    listeners: t
                }))
    }
    var Fa = null
        , Wa = null;
    function Bp(e) {
        nd(e, 0)
    }
    function rl(e) {
        var t = Va(e);
        if (ss(t))
            return e
    }
    function Ms(e, t) {
        if (e === "change")
            return t
    }
    var xs = !1;
    if (Ht) {
        var ju;
        if (Ht) {
            var Bu = "oninput" in document;
            if (!Bu) {
                var zs = document.createElement("div");
                zs.setAttribute("oninput", "return;"),
                    Bu = typeof zs.oninput == "function"
            }
            ju = Bu
        } else
            ju = !1;
        xs = ju && (!document.documentMode || 9 < document.documentMode)
    }
    function Us() {
        Fa && (Fa.detachEvent("onpropertychange", ks),
            Wa = Fa = null)
    }
    function ks(e) {
        if (e.propertyName === "value" && rl(Wa)) {
            var t = [];
            As(t, Wa, e, Ru(e)),
                ys(Bp, t)
        }
    }
    function Np(e, t, n) {
        e === "focusin" ? (Us(),
            Fa = t,
            Wa = n,
            Fa.attachEvent("onpropertychange", ks)) : e === "focusout" && Us()
    }
    function Hp(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown")
            return rl(Wa)
    }
    function Lp(e, t) {
        if (e === "click")
            return rl(t)
    }
    function qp(e, t) {
        if (e === "input" || e === "change")
            return rl(t)
    }
    function Yp(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var tt = typeof Object.is == "function" ? Object.is : Yp;
    function wa(e, t) {
        if (tt(e, t))
            return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null)
            return !1;
        var n = Object.keys(e)
            , a = Object.keys(t);
        if (n.length !== a.length)
            return !1;
        for (a = 0; a < n.length; a++) {
            var i = n[a];
            if (!mu.call(t, i) || !tt(e[i], t[i]))
                return !1
        }
        return !0
    }
    function js(e) {
        for (; e && e.firstChild;)
            e = e.firstChild;
        return e
    }
    function Bs(e, t) {
        var n = js(e);
        e = 0;
        for (var a; n;) {
            if (n.nodeType === 3) {
                if (a = e + n.textContent.length,
                    e <= t && a >= t)
                    return {
                        node: n,
                        offset: t - e
                    };
                e = a
            }
            e: {
                for (; n;) {
                    if (n.nextSibling) {
                        n = n.nextSibling;
                        break e
                    }
                    n = n.parentNode
                }
                n = void 0
            }
            n = js(n)
        }
    }
    function Ns(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ns(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
    }
    function Hs(e) {
        e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
        for (var t = tl(e.document); t instanceof e.HTMLIFrameElement;) {
            try {
                var n = typeof t.contentWindow.location.href == "string"
            } catch {
                n = !1
            }
            if (n)
                e = t.contentWindow;
            else
                break;
            t = tl(e.document)
        }
        return t
    }
    function Nu(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
    }
    function Gp(e, t) {
        var n = Hs(t);
        t = e.focusedElem;
        var a = e.selectionRange;
        if (n !== t && t && t.ownerDocument && Ns(t.ownerDocument.documentElement, t)) {
            if (a !== null && Nu(t)) {
                if (e = a.start,
                    n = a.end,
                    n === void 0 && (n = e),
                    "selectionStart" in t)
                    t.selectionStart = e,
                        t.selectionEnd = Math.min(n, t.value.length);
                else if (n = (e = t.ownerDocument || document) && e.defaultView || window,
                    n.getSelection) {
                    n = n.getSelection();
                    var i = t.textContent.length
                        , l = Math.min(a.start, i);
                    a = a.end === void 0 ? l : Math.min(a.end, i),
                        !n.extend && l > a && (i = a,
                            a = l,
                            l = i),
                        i = Bs(t, l);
                    var f = Bs(t, a);
                    i && f && (n.rangeCount !== 1 || n.anchorNode !== i.node || n.anchorOffset !== i.offset || n.focusNode !== f.node || n.focusOffset !== f.offset) && (e = e.createRange(),
                        e.setStart(i.node, i.offset),
                        n.removeAllRanges(),
                        l > a ? (n.addRange(e),
                            n.extend(f.node, f.offset)) : (e.setEnd(f.node, f.offset),
                                n.addRange(e)))
                }
            }
            for (e = [],
                n = t; n = n.parentNode;)
                n.nodeType === 1 && e.push({
                    element: n,
                    left: n.scrollLeft,
                    top: n.scrollTop
                });
            for (typeof t.focus == "function" && t.focus(),
                t = 0; t < e.length; t++)
                n = e[t],
                    n.element.scrollLeft = n.left,
                    n.element.scrollTop = n.top
        }
    }
    var Xp = Ht && "documentMode" in document && 11 >= document.documentMode
        , oa = null
        , Hu = null
        , Ia = null
        , Lu = !1;
    function Ls(e, t, n) {
        var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
        Lu || oa == null || oa !== tl(a) || (a = oa,
            "selectionStart" in a && Nu(a) ? a = {
                start: a.selectionStart,
                end: a.selectionEnd
            } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(),
                a = {
                    anchorNode: a.anchorNode,
                    anchorOffset: a.anchorOffset,
                    focusNode: a.focusNode,
                    focusOffset: a.focusOffset
                }),
            Ia && wa(Ia, a) || (Ia = a,
                a = Vl(Hu, "onSelect"),
                0 < a.length && (t = new ul("onSelect", "select", null, t, n),
                    e.push({
                        event: t,
                        listeners: a
                    }),
                    t.target = oa)))
    }
    function Un(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(),
            n["Webkit" + e] = "webkit" + t,
            n["Moz" + e] = "moz" + t,
            n
    }
    var da = {
        animationend: Un("Animation", "AnimationEnd"),
        animationiteration: Un("Animation", "AnimationIteration"),
        animationstart: Un("Animation", "AnimationStart"),
        transitionrun: Un("Transition", "TransitionRun"),
        transitionstart: Un("Transition", "TransitionStart"),
        transitioncancel: Un("Transition", "TransitionCancel"),
        transitionend: Un("Transition", "TransitionEnd")
    }
        , qu = {}
        , qs = {};
    Ht && (qs = document.createElement("div").style,
        "AnimationEvent" in window || (delete da.animationend.animation,
            delete da.animationiteration.animation,
            delete da.animationstart.animation),
        "TransitionEvent" in window || delete da.transitionend.transition);
    function kn(e) {
        if (qu[e])
            return qu[e];
        if (!da[e])
            return e;
        var t = da[e], n;
        for (n in t)
            if (t.hasOwnProperty(n) && n in qs)
                return qu[e] = t[n];
        return e
    }
    var Ys = kn("animationend")
        , Gs = kn("animationiteration")
        , Xs = kn("animationstart")
        , Qp = kn("transitionrun")
        , Vp = kn("transitionstart")
        , Zp = kn("transitioncancel")
        , Qs = kn("transitionend")
        , Vs = new Map
        , Zs = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");
    function St(e, t) {
        Vs.set(e, t),
            xn(t, [e])
    }
    var st = []
        , ha = 0
        , Yu = 0;
    function sl() {
        for (var e = ha, t = Yu = ha = 0; t < e;) {
            var n = st[t];
            st[t++] = null;
            var a = st[t];
            st[t++] = null;
            var i = st[t];
            st[t++] = null;
            var l = st[t];
            if (st[t++] = null,
                a !== null && i !== null) {
                var f = a.pending;
                f === null ? i.next = i : (i.next = f.next,
                    f.next = i),
                    a.pending = i
            }
            l !== 0 && Ks(n, i, l)
        }
    }
    function fl(e, t, n, a) {
        st[ha++] = e,
            st[ha++] = t,
            st[ha++] = n,
            st[ha++] = a,
            Yu |= a,
            e.lanes |= a,
            e = e.alternate,
            e !== null && (e.lanes |= a)
    }
    function Gu(e, t, n, a) {
        return fl(e, t, n, a),
            ol(e)
    }
    function rn(e, t) {
        return fl(e, null, null, t),
            ol(e)
    }
    function Ks(e, t, n) {
        e.lanes |= n;
        var a = e.alternate;
        a !== null && (a.lanes |= n);
        for (var i = !1, l = e.return; l !== null;)
            l.childLanes |= n,
                a = l.alternate,
                a !== null && (a.childLanes |= n),
                l.tag === 22 && (e = l.stateNode,
                    e === null || e._visibility & 1 || (i = !0)),
                e = l,
                l = l.return;
        i && t !== null && e.tag === 3 && (l = e.stateNode,
            i = 31 - et(n),
            l = l.hiddenUpdates,
            e = l[i],
            e === null ? l[i] = [t] : e.push(t),
            t.lane = n | 536870912)
    }
    function ol(e) {
        if (50 < Ei)
            throw Ei = 0,
            Jc = null,
            Error(c(185));
        for (var t = e.return; t !== null;)
            e = t,
                t = e.return;
        return e.tag === 3 ? e.stateNode : null
    }
    var pa = {}
        , Js = new WeakMap;
    function ft(e, t) {
        if (typeof e == "object" && e !== null) {
            var n = Js.get(e);
            return n !== void 0 ? n : (t = {
                value: e,
                source: t,
                stack: K(t)
            },
                Js.set(e, t),
                t)
        }
        return {
            value: e,
            source: t,
            stack: K(t)
        }
    }
    var ma = []
        , ya = 0
        , dl = null
        , hl = 0
        , ot = []
        , dt = 0
        , jn = null
        , qt = 1
        , Yt = "";
    function Bn(e, t) {
        ma[ya++] = hl,
            ma[ya++] = dl,
            dl = e,
            hl = t
    }
    function $s(e, t, n) {
        ot[dt++] = qt,
            ot[dt++] = Yt,
            ot[dt++] = jn,
            jn = e;
        var a = qt;
        e = Yt;
        var i = 32 - et(a) - 1;
        a &= ~(1 << i),
            n += 1;
        var l = 32 - et(t) + i;
        if (30 < l) {
            var f = i - i % 5;
            l = (a & (1 << f) - 1).toString(32),
                a >>= f,
                i -= f,
                qt = 1 << 32 - et(t) + i | n << i | a,
                Yt = l + e
        } else
            qt = 1 << l | n << i | a,
                Yt = e
    }
    function Xu(e) {
        e.return !== null && (Bn(e, 1),
            $s(e, 1, 0))
    }
    function Qu(e) {
        for (; e === dl;)
            dl = ma[--ya],
                ma[ya] = null,
                hl = ma[--ya],
                ma[ya] = null;
        for (; e === jn;)
            jn = ot[--dt],
                ot[dt] = null,
                Yt = ot[--dt],
                ot[dt] = null,
                qt = ot[--dt],
                ot[dt] = null
    }
    var Qe = null
        , ke = null
        , ne = !1
        , _t = null
        , Ot = !1
        , Vu = Error(c(519));
    function Nn(e) {
        var t = Error(c(418, ""));
        throw ni(ft(t, e)),
        Vu
    }
    function Ps(e) {
        var t = e.stateNode
            , n = e.type
            , a = e.memoizedProps;
        switch (t[He] = e,
        t[$e] = a,
        n) {
            case "dialog":
                w("cancel", t),
                    w("close", t);
                break;
            case "iframe":
            case "object":
            case "embed":
                w("load", t);
                break;
            case "video":
            case "audio":
                for (n = 0; n < Di.length; n++)
                    w(Di[n], t);
                break;
            case "source":
                w("error", t);
                break;
            case "img":
            case "image":
            case "link":
                w("error", t),
                    w("load", t);
                break;
            case "details":
                w("toggle", t);
                break;
            case "input":
                w("invalid", t),
                    fs(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0),
                    el(t);
                break;
            case "select":
                w("invalid", t);
                break;
            case "textarea":
                w("invalid", t),
                    ds(t, a.value, a.defaultValue, a.children),
                    el(t)
        }
        n = a.children,
            typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || a.suppressHydrationWarning === !0 || ud(t.textContent, n) ? (a.popover != null && (w("beforetoggle", t),
                w("toggle", t)),
                a.onScroll != null && w("scroll", t),
                a.onScrollEnd != null && w("scrollend", t),
                a.onClick != null && (t.onclick = Zl),
                t = !0) : t = !1,
            t || Nn(e)
    }
    function Fs(e) {
        for (Qe = e.return; Qe;)
            switch (Qe.tag) {
                case 3:
                case 27:
                    Ot = !0;
                    return;
                case 5:
                case 13:
                    Ot = !1;
                    return;
                default:
                    Qe = Qe.return
            }
    }
    function ei(e) {
        if (e !== Qe)
            return !1;
        if (!ne)
            return Fs(e),
                ne = !0,
                !1;
        var t = !1, n;
        if ((n = e.tag !== 3 && e.tag !== 27) && ((n = e.tag === 5) && (n = e.type,
            n = !(n !== "form" && n !== "button") || fr(e.type, e.memoizedProps)),
            n = !n),
            n && (t = !0),
            t && ke && Nn(e),
            Fs(e),
            e.tag === 13) {
            if (e = e.memoizedState,
                e = e !== null ? e.dehydrated : null,
                !e)
                throw Error(c(317));
            e: {
                for (e = e.nextSibling,
                    t = 0; e;) {
                    if (e.nodeType === 8)
                        if (n = e.data,
                            n === "/$") {
                            if (t === 0) {
                                ke = Ct(e.nextSibling);
                                break e
                            }
                            t--
                        } else
                            n !== "$" && n !== "$!" && n !== "$?" || t++;
                    e = e.nextSibling
                }
                ke = null
            }
        } else
            ke = Qe ? Ct(e.stateNode.nextSibling) : null;
        return !0
    }
    function ti() {
        ke = Qe = null,
            ne = !1
    }
    function ni(e) {
        _t === null ? _t = [e] : _t.push(e)
    }
    var ai = Error(c(460))
        , Ws = Error(c(474))
        , Zu = {
            then: function () { }
        };
    function ws(e) {
        return e = e.status,
            e === "fulfilled" || e === "rejected"
    }
    function pl() { }
    function Is(e, t, n) {
        switch (n = e[n],
        n === void 0 ? e.push(t) : n !== t && (t.then(pl, pl),
            t = n),
        t.status) {
            case "fulfilled":
                return t.value;
            case "rejected":
                throw e = t.reason,
                e === ai ? Error(c(483)) : e;
            default:
                if (typeof t.status == "string")
                    t.then(pl, pl);
                else {
                    if (e = de,
                        e !== null && 100 < e.shellSuspendCounter)
                        throw Error(c(482));
                    e = t,
                        e.status = "pending",
                        e.then(function (a) {
                            if (t.status === "pending") {
                                var i = t;
                                i.status = "fulfilled",
                                    i.value = a
                            }
                        }, function (a) {
                            if (t.status === "pending") {
                                var i = t;
                                i.status = "rejected",
                                    i.reason = a
                            }
                        })
                }
                switch (t.status) {
                    case "fulfilled":
                        return t.value;
                    case "rejected":
                        throw e = t.reason,
                        e === ai ? Error(c(483)) : e
                }
                throw ii = t,
                ai
        }
    }
    var ii = null;
    function ef() {
        if (ii === null)
            throw Error(c(459));
        var e = ii;
        return ii = null,
            e
    }
    var ga = null
        , li = 0;
    function ml(e) {
        var t = li;
        return li += 1,
            ga === null && (ga = []),
            Is(ga, e, t)
    }
    function ui(e, t) {
        t = t.props.ref,
            e.ref = t !== void 0 ? t : null
    }
    function yl(e, t) {
        throw t.$$typeof === h ? Error(c(525)) : (e = Object.prototype.toString.call(t),
            Error(c(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
    }
    function tf(e) {
        var t = e._init;
        return t(e._payload)
    }
    function nf(e) {
        function t(T, S) {
            if (e) {
                var E = T.deletions;
                E === null ? (T.deletions = [S],
                    T.flags |= 16) : E.push(S)
            }
        }
        function n(T, S) {
            if (!e)
                return null;
            for (; S !== null;)
                t(T, S),
                    S = S.sibling;
            return null
        }
        function a(T) {
            for (var S = new Map; T !== null;)
                T.key !== null ? S.set(T.key, T) : S.set(T.index, T),
                    T = T.sibling;
            return S
        }
        function i(T, S) {
            return T = Sn(T, S),
                T.index = 0,
                T.sibling = null,
                T
        }
        function l(T, S, E) {
            return T.index = E,
                e ? (E = T.alternate,
                    E !== null ? (E = E.index,
                        E < S ? (T.flags |= 33554434,
                            S) : E) : (T.flags |= 33554434,
                                S)) : (T.flags |= 1048576,
                                    S)
        }
        function f(T) {
            return e && T.alternate === null && (T.flags |= 33554434),
                T
        }
        function d(T, S, E, M) {
            return S === null || S.tag !== 6 ? (S = qc(E, T.mode, M),
                S.return = T,
                S) : (S = i(S, E),
                    S.return = T,
                    S)
        }
        function m(T, S, E, M) {
            var B = E.type;
            return B === v ? A(T, S, E.props.children, M, E.key) : S !== null && (S.elementType === B || typeof B == "object" && B !== null && B.$$typeof === Ge && tf(B) === S.type) ? (S = i(S, E.props),
                ui(S, E),
                S.return = T,
                S) : (S = jl(E.type, E.key, E.props, null, T.mode, M),
                    ui(S, E),
                    S.return = T,
                    S)
        }
        function _(T, S, E, M) {
            return S === null || S.tag !== 4 || S.stateNode.containerInfo !== E.containerInfo || S.stateNode.implementation !== E.implementation ? (S = Yc(E, T.mode, M),
                S.return = T,
                S) : (S = i(S, E.children || []),
                    S.return = T,
                    S)
        }
        function A(T, S, E, M, B) {
            return S === null || S.tag !== 7 ? (S = Kn(E, T.mode, M, B),
                S.return = T,
                S) : (S = i(S, E),
                    S.return = T,
                    S)
        }
        function x(T, S, E) {
            if (typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint")
                return S = qc("" + S, T.mode, E),
                    S.return = T,
                    S;
            if (typeof S == "object" && S !== null) {
                switch (S.$$typeof) {
                    case p:
                        return E = jl(S.type, S.key, S.props, null, T.mode, E),
                            ui(E, S),
                            E.return = T,
                            E;
                    case g:
                        return S = Yc(S, T.mode, E),
                            S.return = T,
                            S;
                    case Ge:
                        var M = S._init;
                        return S = M(S._payload),
                            x(T, S, E)
                }
                if (Y(S) || Ke(S))
                    return S = Kn(S, T.mode, E, null),
                        S.return = T,
                        S;
                if (typeof S.then == "function")
                    return x(T, ml(S), E);
                if (S.$$typeof === L)
                    return x(T, zl(T, S), E);
                yl(T, S)
            }
            return null
        }
        function R(T, S, E, M) {
            var B = S !== null ? S.key : null;
            if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
                return B !== null ? null : d(T, S, "" + E, M);
            if (typeof E == "object" && E !== null) {
                switch (E.$$typeof) {
                    case p:
                        return E.key === B ? m(T, S, E, M) : null;
                    case g:
                        return E.key === B ? _(T, S, E, M) : null;
                    case Ge:
                        return B = E._init,
                            E = B(E._payload),
                            R(T, S, E, M)
                }
                if (Y(E) || Ke(E))
                    return B !== null ? null : A(T, S, E, M, null);
                if (typeof E.then == "function")
                    return R(T, S, ml(E), M);
                if (E.$$typeof === L)
                    return R(T, S, zl(T, E), M);
                yl(T, E)
            }
            return null
        }
        function O(T, S, E, M, B) {
            if (typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint")
                return T = T.get(E) || null,
                    d(S, T, "" + M, B);
            if (typeof M == "object" && M !== null) {
                switch (M.$$typeof) {
                    case p:
                        return T = T.get(M.key === null ? E : M.key) || null,
                            m(S, T, M, B);
                    case g:
                        return T = T.get(M.key === null ? E : M.key) || null,
                            _(S, T, M, B);
                    case Ge:
                        var F = M._init;
                        return M = F(M._payload),
                            O(T, S, E, M, B)
                }
                if (Y(M) || Ke(M))
                    return T = T.get(E) || null,
                        A(S, T, M, B, null);
                if (typeof M.then == "function")
                    return O(T, S, E, ml(M), B);
                if (M.$$typeof === L)
                    return O(T, S, E, zl(S, M), B);
                yl(S, M)
            }
            return null
        }
        function H(T, S, E, M) {
            for (var B = null, F = null, q = S, G = S = 0, ze = null; q !== null && G < E.length; G++) {
                q.index > G ? (ze = q,
                    q = null) : ze = q.sibling;
                var ae = R(T, q, E[G], M);
                if (ae === null) {
                    q === null && (q = ze);
                    break
                }
                e && q && ae.alternate === null && t(T, q),
                    S = l(ae, S, G),
                    F === null ? B = ae : F.sibling = ae,
                    F = ae,
                    q = ze
            }
            if (G === E.length)
                return n(T, q),
                    ne && Bn(T, G),
                    B;
            if (q === null) {
                for (; G < E.length; G++)
                    q = x(T, E[G], M),
                        q !== null && (S = l(q, S, G),
                            F === null ? B = q : F.sibling = q,
                            F = q);
                return ne && Bn(T, G),
                    B
            }
            for (q = a(q); G < E.length; G++)
                ze = O(q, T, G, E[G], M),
                    ze !== null && (e && ze.alternate !== null && q.delete(ze.key === null ? G : ze.key),
                        S = l(ze, S, G),
                        F === null ? B = ze : F.sibling = ze,
                        F = ze);
            return e && q.forEach(function (On) {
                return t(T, On)
            }),
                ne && Bn(T, G),
                B
        }
        function Z(T, S, E, M) {
            if (E == null)
                throw Error(c(151));
            for (var B = null, F = null, q = S, G = S = 0, ze = null, ae = E.next(); q !== null && !ae.done; G++,
                ae = E.next()) {
                q.index > G ? (ze = q,
                    q = null) : ze = q.sibling;
                var On = R(T, q, ae.value, M);
                if (On === null) {
                    q === null && (q = ze);
                    break
                }
                e && q && On.alternate === null && t(T, q),
                    S = l(On, S, G),
                    F === null ? B = On : F.sibling = On,
                    F = On,
                    q = ze
            }
            if (ae.done)
                return n(T, q),
                    ne && Bn(T, G),
                    B;
            if (q === null) {
                for (; !ae.done; G++,
                    ae = E.next())
                    ae = x(T, ae.value, M),
                        ae !== null && (S = l(ae, S, G),
                            F === null ? B = ae : F.sibling = ae,
                            F = ae);
                return ne && Bn(T, G),
                    B
            }
            for (q = a(q); !ae.done; G++,
                ae = E.next())
                ae = O(q, T, G, ae.value, M),
                    ae !== null && (e && ae.alternate !== null && q.delete(ae.key === null ? G : ae.key),
                        S = l(ae, S, G),
                        F === null ? B = ae : F.sibling = ae,
                        F = ae);
            return e && q.forEach(function (l0) {
                return t(T, l0)
            }),
                ne && Bn(T, G),
                B
        }
        function be(T, S, E, M) {
            if (typeof E == "object" && E !== null && E.type === v && E.key === null && (E = E.props.children),
                typeof E == "object" && E !== null) {
                switch (E.$$typeof) {
                    case p:
                        e: {
                            for (var B = E.key; S !== null;) {
                                if (S.key === B) {
                                    if (B = E.type,
                                        B === v) {
                                        if (S.tag === 7) {
                                            n(T, S.sibling),
                                                M = i(S, E.props.children),
                                                M.return = T,
                                                T = M;
                                            break e
                                        }
                                    } else if (S.elementType === B || typeof B == "object" && B !== null && B.$$typeof === Ge && tf(B) === S.type) {
                                        n(T, S.sibling),
                                            M = i(S, E.props),
                                            ui(M, E),
                                            M.return = T,
                                            T = M;
                                        break e
                                    }
                                    n(T, S);
                                    break
                                } else
                                    t(T, S);
                                S = S.sibling
                            }
                            E.type === v ? (M = Kn(E.props.children, T.mode, M, E.key),
                                M.return = T,
                                T = M) : (M = jl(E.type, E.key, E.props, null, T.mode, M),
                                    ui(M, E),
                                    M.return = T,
                                    T = M)
                        }
                        return f(T);
                    case g:
                        e: {
                            for (B = E.key; S !== null;) {
                                if (S.key === B)
                                    if (S.tag === 4 && S.stateNode.containerInfo === E.containerInfo && S.stateNode.implementation === E.implementation) {
                                        n(T, S.sibling),
                                            M = i(S, E.children || []),
                                            M.return = T,
                                            T = M;
                                        break e
                                    } else {
                                        n(T, S);
                                        break
                                    }
                                else
                                    t(T, S);
                                S = S.sibling
                            }
                            M = Yc(E, T.mode, M),
                                M.return = T,
                                T = M
                        }
                        return f(T);
                    case Ge:
                        return B = E._init,
                            E = B(E._payload),
                            be(T, S, E, M)
                }
                if (Y(E))
                    return H(T, S, E, M);
                if (Ke(E)) {
                    if (B = Ke(E),
                        typeof B != "function")
                        throw Error(c(150));
                    return E = B.call(E),
                        Z(T, S, E, M)
                }
                if (typeof E.then == "function")
                    return be(T, S, ml(E), M);
                if (E.$$typeof === L)
                    return be(T, S, zl(T, E), M);
                yl(T, E)
            }
            return typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint" ? (E = "" + E,
                S !== null && S.tag === 6 ? (n(T, S.sibling),
                    M = i(S, E),
                    M.return = T,
                    T = M) : (n(T, S),
                        M = qc(E, T.mode, M),
                        M.return = T,
                        T = M),
                f(T)) : n(T, S)
        }
        return function (T, S, E, M) {
            try {
                li = 0;
                var B = be(T, S, E, M);
                return ga = null,
                    B
            } catch (q) {
                if (q === ai)
                    throw q;
                var F = yt(29, q, null, T.mode);
                return F.lanes = M,
                    F.return = T,
                    F
            } finally { }
        }
    }
    var Hn = nf(!0)
        , af = nf(!1)
        , va = ue(null)
        , gl = ue(0);
    function lf(e, t) {
        e = Wt,
            pe(gl, e),
            pe(va, t),
            Wt = e | t.baseLanes
    }
    function Ku() {
        pe(gl, Wt),
            pe(va, va.current)
    }
    function Ju() {
        Wt = gl.current,
            Te(va),
            Te(gl)
    }
    var ht = ue(null)
        , At = null;
    function sn(e) {
        var t = e.alternate;
        pe(De, De.current & 1),
            pe(ht, e),
            At === null && (t === null || va.current !== null || t.memoizedState !== null) && (At = e)
    }
    function uf(e) {
        if (e.tag === 22) {
            if (pe(De, De.current),
                pe(ht, e),
                At === null) {
                var t = e.alternate;
                t !== null && t.memoizedState !== null && (At = e)
            }
        } else
            fn()
    }
    function fn() {
        pe(De, De.current),
            pe(ht, ht.current)
    }
    function Gt(e) {
        Te(ht),
            At === e && (At = null),
            Te(De)
    }
    var De = ue(0);
    function vl(e) {
        for (var t = e; t !== null;) {
            if (t.tag === 13) {
                var n = t.memoizedState;
                if (n !== null && (n = n.dehydrated,
                    n === null || n.data === "$?" || n.data === "$!"))
                    return t
            } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
                if ((t.flags & 128) !== 0)
                    return t
            } else if (t.child !== null) {
                t.child.return = t,
                    t = t.child;
                continue
            }
            if (t === e)
                break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e)
                    return null;
                t = t.return
            }
            t.sibling.return = t.return,
                t = t.sibling
        }
        return null
    }
    var Kp = typeof AbortController < "u" ? AbortController : function () {
        var e = []
            , t = this.signal = {
                aborted: !1,
                addEventListener: function (n, a) {
                    e.push(a)
                }
            };
        this.abort = function () {
            t.aborted = !0,
                e.forEach(function (n) {
                    return n()
                })
        }
    }
        , Jp = s.unstable_scheduleCallback
        , $p = s.unstable_NormalPriority
        , Oe = {
            $$typeof: L,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0
        };
    function $u() {
        return {
            controller: new Kp,
            data: new Map,
            refCount: 0
        }
    }
    function ci(e) {
        e.refCount--,
            e.refCount === 0 && Jp($p, function () {
                e.controller.abort()
            })
    }
    var ri = null
        , Pu = 0
        , ba = 0
        , Sa = null;
    function Pp(e, t) {
        if (ri === null) {
            var n = ri = [];
            Pu = 0,
                ba = tr(),
                Sa = {
                    status: "pending",
                    value: void 0,
                    then: function (a) {
                        n.push(a)
                    }
                }
        }
        return Pu++,
            t.then(cf, cf),
            t
    }
    function cf() {
        if (--Pu === 0 && ri !== null) {
            Sa !== null && (Sa.status = "fulfilled");
            var e = ri;
            ri = null,
                ba = 0,
                Sa = null;
            for (var t = 0; t < e.length; t++)
                (0,
                    e[t])()
        }
    }
    function Fp(e, t) {
        var n = []
            , a = {
                status: "pending",
                value: null,
                reason: null,
                then: function (i) {
                    n.push(i)
                }
            };
        return e.then(function () {
            a.status = "fulfilled",
                a.value = t;
            for (var i = 0; i < n.length; i++)
                (0,
                    n[i])(t)
        }, function (i) {
            for (a.status = "rejected",
                a.reason = i,
                i = 0; i < n.length; i++)
                (0,
                    n[i])(void 0)
        }),
            a
    }
    var rf = X.S;
    X.S = function (e, t) {
        typeof t == "object" && t !== null && typeof t.then == "function" && Pp(e, t),
            rf !== null && rf(e, t)
    }
        ;
    var Ln = ue(null);
    function Fu() {
        var e = Ln.current;
        return e !== null ? e : de.pooledCache
    }
    function bl(e, t) {
        t === null ? pe(Ln, Ln.current) : pe(Ln, t.pool)
    }
    function sf() {
        var e = Fu();
        return e === null ? null : {
            parent: Oe._currentValue,
            pool: e
        }
    }
    var on = 0
        , P = null
        , re = null
        , Ce = null
        , Sl = !1
        , _a = !1
        , qn = !1
        , _l = 0
        , si = 0
        , Ta = null
        , Wp = 0;
    function _e() {
        throw Error(c(321))
    }
    function Wu(e, t) {
        if (t === null)
            return !1;
        for (var n = 0; n < t.length && n < e.length; n++)
            if (!tt(e[n], t[n]))
                return !1;
        return !0
    }
    function wu(e, t, n, a, i, l) {
        return on = l,
            P = t,
            t.memoizedState = null,
            t.updateQueue = null,
            t.lanes = 0,
            X.H = e === null || e.memoizedState === null ? Yn : dn,
            qn = !1,
            l = n(a, i),
            qn = !1,
            _a && (l = of(t, n, a, i)),
            ff(e),
            l
    }
    function ff(e) {
        X.H = Mt;
        var t = re !== null && re.next !== null;
        if (on = 0,
            Ce = re = P = null,
            Sl = !1,
            si = 0,
            Ta = null,
            t)
            throw Error(c(300));
        e === null || Me || (e = e.dependencies,
            e !== null && xl(e) && (Me = !0))
    }
    function of(e, t, n, a) {
        P = e;
        var i = 0;
        do {
            if (_a && (Ta = null),
                si = 0,
                _a = !1,
                25 <= i)
                throw Error(c(301));
            if (i += 1,
                Ce = re = null,
                e.updateQueue != null) {
                var l = e.updateQueue;
                l.lastEffect = null,
                    l.events = null,
                    l.stores = null,
                    l.memoCache != null && (l.memoCache.index = 0)
            }
            X.H = Gn,
                l = t(n, a)
        } while (_a);
        return l
    }
    function wp() {
        var e = X.H
            , t = e.useState()[0];
        return t = typeof t.then == "function" ? fi(t) : t,
            e = e.useState()[0],
            (re !== null ? re.memoizedState : null) !== e && (P.flags |= 1024),
            t
    }
    function Iu() {
        var e = _l !== 0;
        return _l = 0,
            e
    }
    function ec(e, t, n) {
        t.updateQueue = e.updateQueue,
            t.flags &= -2053,
            e.lanes &= ~n
    }
    function tc(e) {
        if (Sl) {
            for (e = e.memoizedState; e !== null;) {
                var t = e.queue;
                t !== null && (t.pending = null),
                    e = e.next
            }
            Sl = !1
        }
        on = 0,
            Ce = re = P = null,
            _a = !1,
            si = _l = 0,
            Ta = null
    }
    function Fe() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return Ce === null ? P.memoizedState = Ce = e : Ce = Ce.next = e,
            Ce
    }
    function Ee() {
        if (re === null) {
            var e = P.alternate;
            e = e !== null ? e.memoizedState : null
        } else
            e = re.next;
        var t = Ce === null ? P.memoizedState : Ce.next;
        if (t !== null)
            Ce = t,
                re = e;
        else {
            if (e === null)
                throw P.alternate === null ? Error(c(467)) : Error(c(310));
            re = e,
                e = {
                    memoizedState: re.memoizedState,
                    baseState: re.baseState,
                    baseQueue: re.baseQueue,
                    queue: re.queue,
                    next: null
                },
                Ce === null ? P.memoizedState = Ce = e : Ce = Ce.next = e
        }
        return Ce
    }
    var Tl;
    Tl = function () {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }
        ;
    function fi(e) {
        var t = si;
        return si += 1,
            Ta === null && (Ta = []),
            e = Is(Ta, e, t),
            t = P,
            (Ce === null ? t.memoizedState : Ce.next) === null && (t = t.alternate,
                X.H = t === null || t.memoizedState === null ? Yn : dn),
            e
    }
    function Cl(e) {
        if (e !== null && typeof e == "object") {
            if (typeof e.then == "function")
                return fi(e);
            if (e.$$typeof === L)
                return Le(e)
        }
        throw Error(c(438, String(e)))
    }
    function nc(e) {
        var t = null
            , n = P.updateQueue;
        if (n !== null && (t = n.memoCache),
            t == null) {
            var a = P.alternate;
            a !== null && (a = a.updateQueue,
                a !== null && (a = a.memoCache,
                    a != null && (t = {
                        data: a.data.map(function (i) {
                            return i.slice()
                        }),
                        index: 0
                    })))
        }
        if (t == null && (t = {
            data: [],
            index: 0
        }),
            n === null && (n = Tl(),
                P.updateQueue = n),
            n.memoCache = t,
            n = t.data[t.index],
            n === void 0)
            for (n = t.data[t.index] = Array(e),
                a = 0; a < e; a++)
                n[a] = en;
        return t.index++,
            n
    }
    function Xt(e, t) {
        return typeof t == "function" ? t(e) : t
    }
    function El(e) {
        var t = Ee();
        return ac(t, re, e)
    }
    function ac(e, t, n) {
        var a = e.queue;
        if (a === null)
            throw Error(c(311));
        a.lastRenderedReducer = n;
        var i = e.baseQueue
            , l = a.pending;
        if (l !== null) {
            if (i !== null) {
                var f = i.next;
                i.next = l.next,
                    l.next = f
            }
            t.baseQueue = i = l,
                a.pending = null
        }
        if (l = e.baseState,
            i === null)
            e.memoizedState = l;
        else {
            t = i.next;
            var d = f = null
                , m = null
                , _ = t
                , A = !1;
            do {
                var x = _.lane & -536870913;
                if (x !== _.lane ? (te & x) === x : (on & x) === x) {
                    var R = _.revertLane;
                    if (R === 0)
                        m !== null && (m = m.next = {
                            lane: 0,
                            revertLane: 0,
                            action: _.action,
                            hasEagerState: _.hasEagerState,
                            eagerState: _.eagerState,
                            next: null
                        }),
                            x === ba && (A = !0);
                    else if ((on & R) === R) {
                        _ = _.next,
                            R === ba && (A = !0);
                        continue
                    } else
                        x = {
                            lane: 0,
                            revertLane: _.revertLane,
                            action: _.action,
                            hasEagerState: _.hasEagerState,
                            eagerState: _.eagerState,
                            next: null
                        },
                            m === null ? (d = m = x,
                                f = l) : m = m.next = x,
                            P.lanes |= R,
                            _n |= R;
                    x = _.action,
                        qn && n(l, x),
                        l = _.hasEagerState ? _.eagerState : n(l, x)
                } else
                    R = {
                        lane: x,
                        revertLane: _.revertLane,
                        action: _.action,
                        hasEagerState: _.hasEagerState,
                        eagerState: _.eagerState,
                        next: null
                    },
                        m === null ? (d = m = R,
                            f = l) : m = m.next = R,
                        P.lanes |= x,
                        _n |= x;
                _ = _.next
            } while (_ !== null && _ !== t);
            if (m === null ? f = l : m.next = d,
                !tt(l, e.memoizedState) && (Me = !0,
                    A && (n = Sa,
                        n !== null)))
                throw n;
            e.memoizedState = l,
                e.baseState = f,
                e.baseQueue = m,
                a.lastRenderedState = l
        }
        return i === null && (a.lanes = 0),
            [e.memoizedState, a.dispatch]
    }
    function ic(e) {
        var t = Ee()
            , n = t.queue;
        if (n === null)
            throw Error(c(311));
        n.lastRenderedReducer = e;
        var a = n.dispatch
            , i = n.pending
            , l = t.memoizedState;
        if (i !== null) {
            n.pending = null;
            var f = i = i.next;
            do
                l = e(l, f.action),
                    f = f.next;
            while (f !== i);
            tt(l, t.memoizedState) || (Me = !0),
                t.memoizedState = l,
                t.baseQueue === null && (t.baseState = l),
                n.lastRenderedState = l
        }
        return [l, a]
    }
    function df(e, t, n) {
        var a = P
            , i = Ee()
            , l = ne;
        if (l) {
            if (n === void 0)
                throw Error(c(407));
            n = n()
        } else
            n = t();
        var f = !tt((re || i).memoizedState, n);
        if (f && (i.memoizedState = n,
            Me = !0),
            i = i.queue,
            cc(mf.bind(null, a, i, e), [e]),
            i.getSnapshot !== t || f || Ce !== null && Ce.memoizedState.tag & 1) {
            if (a.flags |= 2048,
                Ca(9, pf.bind(null, a, i, n, t), {
                    destroy: void 0
                }, null),
                de === null)
                throw Error(c(349));
            l || (on & 60) !== 0 || hf(a, t, n)
        }
        return n
    }
    function hf(e, t, n) {
        e.flags |= 16384,
            e = {
                getSnapshot: t,
                value: n
            },
            t = P.updateQueue,
            t === null ? (t = Tl(),
                P.updateQueue = t,
                t.stores = [e]) : (n = t.stores,
                    n === null ? t.stores = [e] : n.push(e))
    }
    function pf(e, t, n, a) {
        t.value = n,
            t.getSnapshot = a,
            yf(t) && gf(e)
    }
    function mf(e, t, n) {
        return n(function () {
            yf(t) && gf(e)
        })
    }
    function yf(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !tt(e, n)
        } catch {
            return !0
        }
    }
    function gf(e) {
        var t = rn(e, 2);
        t !== null && Ve(t, e, 2)
    }
    function lc(e) {
        var t = Fe();
        if (typeof e == "function") {
            var n = e;
            if (e = n(),
                qn) {
                ln(!0);
                try {
                    n()
                } finally {
                    ln(!1)
                }
            }
        }
        return t.memoizedState = t.baseState = e,
            t.queue = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Xt,
                lastRenderedState: e
            },
            t
    }
    function vf(e, t, n, a) {
        return e.baseState = n,
            ac(e, re, typeof a == "function" ? a : Xt)
    }
    function Ip(e, t, n, a, i) {
        if (Ol(e))
            throw Error(c(485));
        if (e = t.action,
            e !== null) {
            var l = {
                payload: i,
                action: e,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function (f) {
                    l.listeners.push(f)
                }
            };
            X.T !== null ? n(!0) : l.isTransition = !1,
                a(l),
                n = t.pending,
                n === null ? (l.next = t.pending = l,
                    bf(t, l)) : (l.next = n.next,
                        t.pending = n.next = l)
        }
    }
    function bf(e, t) {
        var n = t.action
            , a = t.payload
            , i = e.state;
        if (t.isTransition) {
            var l = X.T
                , f = {};
            X.T = f;
            try {
                var d = n(i, a)
                    , m = X.S;
                m !== null && m(f, d),
                    Sf(e, t, d)
            } catch (_) {
                uc(e, t, _)
            } finally {
                X.T = l
            }
        } else
            try {
                l = n(i, a),
                    Sf(e, t, l)
            } catch (_) {
                uc(e, t, _)
            }
    }
    function Sf(e, t, n) {
        n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(function (a) {
            _f(e, t, a)
        }, function (a) {
            return uc(e, t, a)
        }) : _f(e, t, n)
    }
    function _f(e, t, n) {
        t.status = "fulfilled",
            t.value = n,
            Tf(t),
            e.state = n,
            t = e.pending,
            t !== null && (n = t.next,
                n === t ? e.pending = null : (n = n.next,
                    t.next = n,
                    bf(e, n)))
    }
    function uc(e, t, n) {
        var a = e.pending;
        if (e.pending = null,
            a !== null) {
            a = a.next;
            do
                t.status = "rejected",
                    t.reason = n,
                    Tf(t),
                    t = t.next;
            while (t !== a)
        }
        e.action = null
    }
    function Tf(e) {
        e = e.listeners;
        for (var t = 0; t < e.length; t++)
            (0,
                e[t])()
    }
    function Cf(e, t) {
        return t
    }
    function Ef(e, t) {
        if (ne) {
            var n = de.formState;
            if (n !== null) {
                e: {
                    var a = P;
                    if (ne) {
                        if (ke) {
                            t: {
                                for (var i = ke, l = Ot; i.nodeType !== 8;) {
                                    if (!l) {
                                        i = null;
                                        break t
                                    }
                                    if (i = Ct(i.nextSibling),
                                        i === null) {
                                        i = null;
                                        break t
                                    }
                                }
                                l = i.data,
                                    i = l === "F!" || l === "F" ? i : null
                            }
                            if (i) {
                                ke = Ct(i.nextSibling),
                                    a = i.data === "F!";
                                break e
                            }
                        }
                        Nn(a)
                    }
                    a = !1
                }
                a && (t = n[0])
            }
        }
        return n = Fe(),
            n.memoizedState = n.baseState = t,
            a = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Cf,
                lastRenderedState: t
            },
            n.queue = a,
            n = Xf.bind(null, P, a),
            a.dispatch = n,
            a = lc(!1),
            l = dc.bind(null, P, !1, a.queue),
            a = Fe(),
            i = {
                state: t,
                dispatch: null,
                action: e,
                pending: null
            },
            a.queue = i,
            n = Ip.bind(null, P, i, l, n),
            i.dispatch = n,
            a.memoizedState = e,
            [t, n, !1]
    }
    function Rf(e) {
        var t = Ee();
        return Df(t, re, e)
    }
    function Df(e, t, n) {
        t = ac(e, t, Cf)[0],
            e = El(Xt)[0],
            t = typeof t == "object" && t !== null && typeof t.then == "function" ? fi(t) : t;
        var a = Ee()
            , i = a.queue
            , l = i.dispatch;
        return n !== a.memoizedState && (P.flags |= 2048,
            Ca(9, em.bind(null, i, n), {
                destroy: void 0
            }, null)),
            [t, l, e]
    }
    function em(e, t) {
        e.action = t
    }
    function Of(e) {
        var t = Ee()
            , n = re;
        if (n !== null)
            return Df(t, n, e);
        Ee(),
            t = t.memoizedState,
            n = Ee();
        var a = n.queue.dispatch;
        return n.memoizedState = e,
            [t, a, !1]
    }
    function Ca(e, t, n, a) {
        return e = {
            tag: e,
            create: t,
            inst: n,
            deps: a,
            next: null
        },
            t = P.updateQueue,
            t === null && (t = Tl(),
                P.updateQueue = t),
            n = t.lastEffect,
            n === null ? t.lastEffect = e.next = e : (a = n.next,
                n.next = e,
                e.next = a,
                t.lastEffect = e),
            e
    }
    function Af() {
        return Ee().memoizedState
    }
    function Rl(e, t, n, a) {
        var i = Fe();
        P.flags |= e,
            i.memoizedState = Ca(1 | t, n, {
                destroy: void 0
            }, a === void 0 ? null : a)
    }
    function Dl(e, t, n, a) {
        var i = Ee();
        a = a === void 0 ? null : a;
        var l = i.memoizedState.inst;
        re !== null && a !== null && Wu(a, re.memoizedState.deps) ? i.memoizedState = Ca(t, n, l, a) : (P.flags |= e,
            i.memoizedState = Ca(1 | t, n, l, a))
    }
    function Mf(e, t) {
        Rl(8390656, 8, e, t)
    }
    function cc(e, t) {
        Dl(2048, 8, e, t)
    }
    function xf(e, t) {
        return Dl(4, 2, e, t)
    }
    function zf(e, t) {
        return Dl(4, 4, e, t)
    }
    function Uf(e, t) {
        if (typeof t == "function") {
            e = e();
            var n = t(e);
            return function () {
                typeof n == "function" ? n() : t(null)
            }
        }
        if (t != null)
            return e = e(),
                t.current = e,
                function () {
                    t.current = null
                }
    }
    function kf(e, t, n) {
        n = n != null ? n.concat([e]) : null,
            Dl(4, 4, Uf.bind(null, t, e), n)
    }
    function rc() { }
    function jf(e, t) {
        var n = Ee();
        t = t === void 0 ? null : t;
        var a = n.memoizedState;
        return t !== null && Wu(t, a[1]) ? a[0] : (n.memoizedState = [e, t],
            e)
    }
    function Bf(e, t) {
        var n = Ee();
        t = t === void 0 ? null : t;
        var a = n.memoizedState;
        if (t !== null && Wu(t, a[1]))
            return a[0];
        if (a = e(),
            qn) {
            ln(!0);
            try {
                e()
            } finally {
                ln(!1)
            }
        }
        return n.memoizedState = [a, t],
            a
    }
    function sc(e, t, n) {
        return n === void 0 || (on & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = n,
            e = Lo(),
            P.lanes |= e,
            _n |= e,
            n)
    }
    function Nf(e, t, n, a) {
        return tt(n, t) ? n : va.current !== null ? (e = sc(e, n, a),
            tt(e, t) || (Me = !0),
            e) : (on & 42) === 0 ? (Me = !0,
                e.memoizedState = n) : (e = Lo(),
                    P.lanes |= e,
                    _n |= e,
                    t)
    }
    function Hf(e, t, n, a, i) {
        var l = j.p;
        j.p = l !== 0 && 8 > l ? l : 8;
        var f = X.T
            , d = {};
        X.T = d,
            dc(e, !1, t, n);
        try {
            var m = i()
                , _ = X.S;
            if (_ !== null && _(d, m),
                m !== null && typeof m == "object" && typeof m.then == "function") {
                var A = Fp(m, a);
                oi(e, t, A, lt(e))
            } else
                oi(e, t, a, lt(e))
        } catch (x) {
            oi(e, t, {
                then: function () { },
                status: "rejected",
                reason: x
            }, lt())
        } finally {
            j.p = l,
                X.T = f
        }
    }
    function tm() { }
    function fc(e, t, n, a) {
        if (e.tag !== 5)
            throw Error(c(476));
        var i = Lf(e).queue;
        Hf(e, i, t, ee, n === null ? tm : function () {
            return qf(e),
                n(a)
        }
        )
    }
    function Lf(e) {
        var t = e.memoizedState;
        if (t !== null)
            return t;
        t = {
            memoizedState: ee,
            baseState: ee,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Xt,
                lastRenderedState: ee
            },
            next: null
        };
        var n = {};
        return t.next = {
            memoizedState: n,
            baseState: n,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Xt,
                lastRenderedState: n
            },
            next: null
        },
            e.memoizedState = t,
            e = e.alternate,
            e !== null && (e.memoizedState = t),
            t
    }
    function qf(e) {
        var t = Lf(e).next.queue;
        oi(e, t, {}, lt())
    }
    function oc() {
        return Le(zi)
    }
    function Yf() {
        return Ee().memoizedState
    }
    function Gf() {
        return Ee().memoizedState
    }
    function nm(e) {
        for (var t = e.return; t !== null;) {
            switch (t.tag) {
                case 24:
                case 3:
                    var n = lt();
                    e = mn(n);
                    var a = yn(t, e, n);
                    a !== null && (Ve(a, t, n),
                        pi(a, t, n)),
                        t = {
                            cache: $u()
                        },
                        e.payload = t;
                    return
            }
            t = t.return
        }
    }
    function am(e, t, n) {
        var a = lt();
        n = {
            lane: a,
            revertLane: 0,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
            Ol(e) ? Qf(t, n) : (n = Gu(e, t, n, a),
                n !== null && (Ve(n, e, a),
                    Vf(n, t, a)))
    }
    function Xf(e, t, n) {
        var a = lt();
        oi(e, t, n, a)
    }
    function oi(e, t, n, a) {
        var i = {
            lane: a,
            revertLane: 0,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (Ol(e))
            Qf(t, i);
        else {
            var l = e.alternate;
            if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer,
                l !== null))
                try {
                    var f = t.lastRenderedState
                        , d = l(f, n);
                    if (i.hasEagerState = !0,
                        i.eagerState = d,
                        tt(d, f))
                        return fl(e, t, i, 0),
                            de === null && sl(),
                            !1
                } catch { } finally { }
            if (n = Gu(e, t, i, a),
                n !== null)
                return Ve(n, e, a),
                    Vf(n, t, a),
                    !0
        }
        return !1
    }
    function dc(e, t, n, a) {
        if (a = {
            lane: 2,
            revertLane: tr(),
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
            Ol(e)) {
            if (t)
                throw Error(c(479))
        } else
            t = Gu(e, n, a, 2),
                t !== null && Ve(t, e, 2)
    }
    function Ol(e) {
        var t = e.alternate;
        return e === P || t !== null && t === P
    }
    function Qf(e, t) {
        _a = Sl = !0;
        var n = e.pending;
        n === null ? t.next = t : (t.next = n.next,
            n.next = t),
            e.pending = t
    }
    function Vf(e, t, n) {
        if ((n & 4194176) !== 0) {
            var a = t.lanes;
            a &= e.pendingLanes,
                n |= a,
                t.lanes = n,
                es(e, n)
        }
    }
    var Mt = {
        readContext: Le,
        use: Cl,
        useCallback: _e,
        useContext: _e,
        useEffect: _e,
        useImperativeHandle: _e,
        useLayoutEffect: _e,
        useInsertionEffect: _e,
        useMemo: _e,
        useReducer: _e,
        useRef: _e,
        useState: _e,
        useDebugValue: _e,
        useDeferredValue: _e,
        useTransition: _e,
        useSyncExternalStore: _e,
        useId: _e
    };
    Mt.useCacheRefresh = _e,
        Mt.useMemoCache = _e,
        Mt.useHostTransitionStatus = _e,
        Mt.useFormState = _e,
        Mt.useActionState = _e,
        Mt.useOptimistic = _e;
    var Yn = {
        readContext: Le,
        use: Cl,
        useCallback: function (e, t) {
            return Fe().memoizedState = [e, t === void 0 ? null : t],
                e
        },
        useContext: Le,
        useEffect: Mf,
        useImperativeHandle: function (e, t, n) {
            n = n != null ? n.concat([e]) : null,
                Rl(4194308, 4, Uf.bind(null, t, e), n)
        },
        useLayoutEffect: function (e, t) {
            return Rl(4194308, 4, e, t)
        },
        useInsertionEffect: function (e, t) {
            Rl(4, 2, e, t)
        },
        useMemo: function (e, t) {
            var n = Fe();
            t = t === void 0 ? null : t;
            var a = e();
            if (qn) {
                ln(!0);
                try {
                    e()
                } finally {
                    ln(!1)
                }
            }
            return n.memoizedState = [a, t],
                a
        },
        useReducer: function (e, t, n) {
            var a = Fe();
            if (n !== void 0) {
                var i = n(t);
                if (qn) {
                    ln(!0);
                    try {
                        n(t)
                    } finally {
                        ln(!1)
                    }
                }
            } else
                i = t;
            return a.memoizedState = a.baseState = i,
                e = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: i
                },
                a.queue = e,
                e = e.dispatch = am.bind(null, P, e),
                [a.memoizedState, e]
        },
        useRef: function (e) {
            var t = Fe();
            return e = {
                current: e
            },
                t.memoizedState = e
        },
        useState: function (e) {
            e = lc(e);
            var t = e.queue
                , n = Xf.bind(null, P, t);
            return t.dispatch = n,
                [e.memoizedState, n]
        },
        useDebugValue: rc,
        useDeferredValue: function (e, t) {
            var n = Fe();
            return sc(n, e, t)
        },
        useTransition: function () {
            var e = lc(!1);
            return e = Hf.bind(null, P, e.queue, !0, !1),
                Fe().memoizedState = e,
                [!1, e]
        },
        useSyncExternalStore: function (e, t, n) {
            var a = P
                , i = Fe();
            if (ne) {
                if (n === void 0)
                    throw Error(c(407));
                n = n()
            } else {
                if (n = t(),
                    de === null)
                    throw Error(c(349));
                (te & 60) !== 0 || hf(a, t, n)
            }
            i.memoizedState = n;
            var l = {
                value: n,
                getSnapshot: t
            };
            return i.queue = l,
                Mf(mf.bind(null, a, l, e), [e]),
                a.flags |= 2048,
                Ca(9, pf.bind(null, a, l, n, t), {
                    destroy: void 0
                }, null),
                n
        },
        useId: function () {
            var e = Fe()
                , t = de.identifierPrefix;
            if (ne) {
                var n = Yt
                    , a = qt;
                n = (a & ~(1 << 32 - et(a) - 1)).toString(32) + n,
                    t = ":" + t + "R" + n,
                    n = _l++,
                    0 < n && (t += "H" + n.toString(32)),
                    t += ":"
            } else
                n = Wp++,
                    t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        useCacheRefresh: function () {
            return Fe().memoizedState = nm.bind(null, P)
        }
    };
    Yn.useMemoCache = nc,
        Yn.useHostTransitionStatus = oc,
        Yn.useFormState = Ef,
        Yn.useActionState = Ef,
        Yn.useOptimistic = function (e) {
            var t = Fe();
            t.memoizedState = t.baseState = e;
            var n = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null
            };
            return t.queue = n,
                t = dc.bind(null, P, !0, n),
                n.dispatch = t,
                [e, t]
        }
        ;
    var dn = {
        readContext: Le,
        use: Cl,
        useCallback: jf,
        useContext: Le,
        useEffect: cc,
        useImperativeHandle: kf,
        useInsertionEffect: xf,
        useLayoutEffect: zf,
        useMemo: Bf,
        useReducer: El,
        useRef: Af,
        useState: function () {
            return El(Xt)
        },
        useDebugValue: rc,
        useDeferredValue: function (e, t) {
            var n = Ee();
            return Nf(n, re.memoizedState, e, t)
        },
        useTransition: function () {
            var e = El(Xt)[0]
                , t = Ee().memoizedState;
            return [typeof e == "boolean" ? e : fi(e), t]
        },
        useSyncExternalStore: df,
        useId: Yf
    };
    dn.useCacheRefresh = Gf,
        dn.useMemoCache = nc,
        dn.useHostTransitionStatus = oc,
        dn.useFormState = Rf,
        dn.useActionState = Rf,
        dn.useOptimistic = function (e, t) {
            var n = Ee();
            return vf(n, re, e, t)
        }
        ;
    var Gn = {
        readContext: Le,
        use: Cl,
        useCallback: jf,
        useContext: Le,
        useEffect: cc,
        useImperativeHandle: kf,
        useInsertionEffect: xf,
        useLayoutEffect: zf,
        useMemo: Bf,
        useReducer: ic,
        useRef: Af,
        useState: function () {
            return ic(Xt)
        },
        useDebugValue: rc,
        useDeferredValue: function (e, t) {
            var n = Ee();
            return re === null ? sc(n, e, t) : Nf(n, re.memoizedState, e, t)
        },
        useTransition: function () {
            var e = ic(Xt)[0]
                , t = Ee().memoizedState;
            return [typeof e == "boolean" ? e : fi(e), t]
        },
        useSyncExternalStore: df,
        useId: Yf
    };
    Gn.useCacheRefresh = Gf,
        Gn.useMemoCache = nc,
        Gn.useHostTransitionStatus = oc,
        Gn.useFormState = Of,
        Gn.useActionState = Of,
        Gn.useOptimistic = function (e, t) {
            var n = Ee();
            return re !== null ? vf(n, re, e, t) : (n.baseState = e,
                [e, n.queue.dispatch])
        }
        ;
    function hc(e, t, n, a) {
        t = e.memoizedState,
            n = n(a, t),
            n = n == null ? t : le({}, t, n),
            e.memoizedState = n,
            e.lanes === 0 && (e.updateQueue.baseState = n)
    }
    var pc = {
        isMounted: function (e) {
            return (e = e._reactInternals) ? V(e) === e : !1
        },
        enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var a = lt()
                , i = mn(a);
            i.payload = t,
                n != null && (i.callback = n),
                t = yn(e, i, a),
                t !== null && (Ve(t, e, a),
                    pi(t, e, a))
        },
        enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var a = lt()
                , i = mn(a);
            i.tag = 1,
                i.payload = t,
                n != null && (i.callback = n),
                t = yn(e, i, a),
                t !== null && (Ve(t, e, a),
                    pi(t, e, a))
        },
        enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = lt()
                , a = mn(n);
            a.tag = 2,
                t != null && (a.callback = t),
                t = yn(e, a, n),
                t !== null && (Ve(t, e, n),
                    pi(t, e, n))
        }
    };
    function Zf(e, t, n, a, i, l, f) {
        return e = e.stateNode,
            typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, l, f) : t.prototype && t.prototype.isPureReactComponent ? !wa(n, a) || !wa(i, l) : !0
    }
    function Kf(e, t, n, a) {
        e = t.state,
            typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, a),
            typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, a),
            t.state !== e && pc.enqueueReplaceState(t, t.state, null)
    }
    function Xn(e, t) {
        var n = t;
        if ("ref" in t) {
            n = {};
            for (var a in t)
                a !== "ref" && (n[a] = t[a])
        }
        if (e = e.defaultProps) {
            n === t && (n = le({}, n));
            for (var i in e)
                n[i] === void 0 && (n[i] = e[i])
        }
        return n
    }
    var Al = typeof reportError == "function" ? reportError : function (e) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
                error: e
            });
            if (!window.dispatchEvent(t))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", e);
            return
        }
        console.error(e)
    }
        ;
    function Jf(e) {
        Al(e)
    }
    function $f(e) {
        console.error(e)
    }
    function Pf(e) {
        Al(e)
    }
    function Ml(e, t) {
        try {
            var n = e.onUncaughtError;
            n(t.value, {
                componentStack: t.stack
            })
        } catch (a) {
            setTimeout(function () {
                throw a
            })
        }
    }
    function Ff(e, t, n) {
        try {
            var a = e.onCaughtError;
            a(n.value, {
                componentStack: n.stack,
                errorBoundary: t.tag === 1 ? t.stateNode : null
            })
        } catch (i) {
            setTimeout(function () {
                throw i
            })
        }
    }
    function mc(e, t, n) {
        return n = mn(n),
            n.tag = 3,
            n.payload = {
                element: null
            },
            n.callback = function () {
                Ml(e, t)
            }
            ,
            n
    }
    function Wf(e) {
        return e = mn(e),
            e.tag = 3,
            e
    }
    function wf(e, t, n, a) {
        var i = n.type.getDerivedStateFromError;
        if (typeof i == "function") {
            var l = a.value;
            e.payload = function () {
                return i(l)
            }
                ,
                e.callback = function () {
                    Ff(t, n, a)
                }
        }
        var f = n.stateNode;
        f !== null && typeof f.componentDidCatch == "function" && (e.callback = function () {
            Ff(t, n, a),
                typeof i != "function" && (Tn === null ? Tn = new Set([this]) : Tn.add(this));
            var d = a.stack;
            this.componentDidCatch(a.value, {
                componentStack: d !== null ? d : ""
            })
        }
        )
    }
    function im(e, t, n, a, i) {
        if (n.flags |= 32768,
            a !== null && typeof a == "object" && typeof a.then == "function") {
            if (t = n.alternate,
                t !== null && hi(t, n, i, !0),
                n = ht.current,
                n !== null) {
                switch (n.tag) {
                    case 13:
                        return At === null ? Fc() : n.alternate === null && ve === 0 && (ve = 3),
                            n.flags &= -257,
                            n.flags |= 65536,
                            n.lanes = i,
                            a === Zu ? n.flags |= 16384 : (t = n.updateQueue,
                                t === null ? n.updateQueue = new Set([a]) : t.add(a),
                                wc(e, a, i)),
                            !1;
                    case 22:
                        return n.flags |= 65536,
                            a === Zu ? n.flags |= 16384 : (t = n.updateQueue,
                                t === null ? (t = {
                                    transitions: null,
                                    markerInstances: null,
                                    retryQueue: new Set([a])
                                },
                                    n.updateQueue = t) : (n = t.retryQueue,
                                        n === null ? t.retryQueue = new Set([a]) : n.add(a)),
                                wc(e, a, i)),
                            !1
                }
                throw Error(c(435, n.tag))
            }
            return wc(e, a, i),
                Fc(),
                !1
        }
        if (ne)
            return t = ht.current,
                t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256),
                    t.flags |= 65536,
                    t.lanes = i,
                    a !== Vu && (e = Error(c(422), {
                        cause: a
                    }),
                        ni(ft(e, n)))) : (a !== Vu && (t = Error(c(423), {
                            cause: a
                        }),
                            ni(ft(t, n))),
                            e = e.current.alternate,
                            e.flags |= 65536,
                            i &= -i,
                            e.lanes |= i,
                            a = ft(a, n),
                            i = mc(e.stateNode, a, i),
                            xc(e, i),
                            ve !== 4 && (ve = 2)),
                !1;
        var l = Error(c(520), {
            cause: a
        });
        if (l = ft(l, n),
            Ti === null ? Ti = [l] : Ti.push(l),
            ve !== 4 && (ve = 2),
            t === null)
            return !0;
        a = ft(a, n),
            n = t;
        do {
            switch (n.tag) {
                case 3:
                    return n.flags |= 65536,
                        e = i & -i,
                        n.lanes |= e,
                        e = mc(n.stateNode, a, e),
                        xc(n, e),
                        !1;
                case 1:
                    if (t = n.type,
                        l = n.stateNode,
                        (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || l !== null && typeof l.componentDidCatch == "function" && (Tn === null || !Tn.has(l))))
                        return n.flags |= 65536,
                            i &= -i,
                            n.lanes |= i,
                            i = Wf(i),
                            wf(i, e, n, a),
                            xc(n, i),
                            !1
            }
            n = n.return
        } while (n !== null);
        return !1
    }
    var If = Error(c(461))
        , Me = !1;
    function je(e, t, n, a) {
        t.child = e === null ? af(t, null, n, a) : Hn(t, e.child, n, a)
    }
    function eo(e, t, n, a, i) {
        n = n.render;
        var l = t.ref;
        if ("ref" in a) {
            var f = {};
            for (var d in a)
                d !== "ref" && (f[d] = a[d])
        } else
            f = a;
        return Vn(t),
            a = wu(e, t, n, f, l, i),
            d = Iu(),
            e !== null && !Me ? (ec(e, t, i),
                Qt(e, t, i)) : (ne && d && Xu(t),
                    t.flags |= 1,
                    je(e, t, a, i),
                    t.child)
    }
    function to(e, t, n, a, i) {
        if (e === null) {
            var l = n.type;
            return typeof l == "function" && !Lc(l) && l.defaultProps === void 0 && n.compare === null ? (t.tag = 15,
                t.type = l,
                no(e, t, l, a, i)) : (e = jl(n.type, null, a, t, t.mode, i),
                    e.ref = t.ref,
                    e.return = t,
                    t.child = e)
        }
        if (l = e.child,
            !Ec(e, i)) {
            var f = l.memoizedProps;
            if (n = n.compare,
                n = n !== null ? n : wa,
                n(f, a) && e.ref === t.ref)
                return Qt(e, t, i)
        }
        return t.flags |= 1,
            e = Sn(l, a),
            e.ref = t.ref,
            e.return = t,
            t.child = e
    }
    function no(e, t, n, a, i) {
        if (e !== null) {
            var l = e.memoizedProps;
            if (wa(l, a) && e.ref === t.ref)
                if (Me = !1,
                    t.pendingProps = a = l,
                    Ec(e, i))
                    (e.flags & 131072) !== 0 && (Me = !0);
                else
                    return t.lanes = e.lanes,
                        Qt(e, t, i)
        }
        return yc(e, t, n, a, i)
    }
    function ao(e, t, n) {
        var a = t.pendingProps
            , i = a.children
            , l = (t.stateNode._pendingVisibility & 2) !== 0
            , f = e !== null ? e.memoizedState : null;
        if (di(e, t),
            a.mode === "hidden" || l) {
            if ((t.flags & 128) !== 0) {
                if (a = f !== null ? f.baseLanes | n : n,
                    e !== null) {
                    for (i = t.child = e.child,
                        l = 0; i !== null;)
                        l = l | i.lanes | i.childLanes,
                            i = i.sibling;
                    t.childLanes = l & ~a
                } else
                    t.childLanes = 0,
                        t.child = null;
                return io(e, t, a, n)
            }
            if ((n & 536870912) !== 0)
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                },
                    e !== null && bl(t, f !== null ? f.cachePool : null),
                    f !== null ? lf(t, f) : Ku(),
                    uf(t);
            else
                return t.lanes = t.childLanes = 536870912,
                    io(e, t, f !== null ? f.baseLanes | n : n, n)
        } else
            f !== null ? (bl(t, f.cachePool),
                lf(t, f),
                fn(),
                t.memoizedState = null) : (e !== null && bl(t, null),
                    Ku(),
                    fn());
        return je(e, t, i, n),
            t.child
    }
    function io(e, t, n, a) {
        var i = Fu();
        return i = i === null ? null : {
            parent: Oe._currentValue,
            pool: i
        },
            t.memoizedState = {
                baseLanes: n,
                cachePool: i
            },
            e !== null && bl(t, null),
            Ku(),
            uf(t),
            e !== null && hi(e, t, a, !0),
            null
    }
    function di(e, t) {
        var n = t.ref;
        if (n === null)
            e !== null && e.ref !== null && (t.flags |= 2097664);
        else {
            if (typeof n != "function" && typeof n != "object")
                throw Error(c(284));
            (e === null || e.ref !== n) && (t.flags |= 2097664)
        }
    }
    function yc(e, t, n, a, i) {
        return Vn(t),
            n = wu(e, t, n, a, void 0, i),
            a = Iu(),
            e !== null && !Me ? (ec(e, t, i),
                Qt(e, t, i)) : (ne && a && Xu(t),
                    t.flags |= 1,
                    je(e, t, n, i),
                    t.child)
    }
    function lo(e, t, n, a, i, l) {
        return Vn(t),
            t.updateQueue = null,
            n = of(t, a, n, i),
            ff(e),
            a = Iu(),
            e !== null && !Me ? (ec(e, t, l),
                Qt(e, t, l)) : (ne && a && Xu(t),
                    t.flags |= 1,
                    je(e, t, n, l),
                    t.child)
    }
    function uo(e, t, n, a, i) {
        if (Vn(t),
            t.stateNode === null) {
            var l = pa
                , f = n.contextType;
            typeof f == "object" && f !== null && (l = Le(f)),
                l = new n(a, l),
                t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null,
                l.updater = pc,
                t.stateNode = l,
                l._reactInternals = t,
                l = t.stateNode,
                l.props = a,
                l.state = t.memoizedState,
                l.refs = {},
                Ac(t),
                f = n.contextType,
                l.context = typeof f == "object" && f !== null ? Le(f) : pa,
                l.state = t.memoizedState,
                f = n.getDerivedStateFromProps,
                typeof f == "function" && (hc(t, n, f, a),
                    l.state = t.memoizedState),
                typeof n.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (f = l.state,
                    typeof l.componentWillMount == "function" && l.componentWillMount(),
                    typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(),
                    f !== l.state && pc.enqueueReplaceState(l, l.state, null),
                    yi(t, a, l, i),
                    mi(),
                    l.state = t.memoizedState),
                typeof l.componentDidMount == "function" && (t.flags |= 4194308),
                a = !0
        } else if (e === null) {
            l = t.stateNode;
            var d = t.memoizedProps
                , m = Xn(n, d);
            l.props = m;
            var _ = l.context
                , A = n.contextType;
            f = pa,
                typeof A == "object" && A !== null && (f = Le(A));
            var x = n.getDerivedStateFromProps;
            A = typeof x == "function" || typeof l.getSnapshotBeforeUpdate == "function",
                d = t.pendingProps !== d,
                A || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (d || _ !== f) && Kf(t, l, a, f),
                pn = !1;
            var R = t.memoizedState;
            l.state = R,
                yi(t, a, l, i),
                mi(),
                _ = t.memoizedState,
                d || R !== _ || pn ? (typeof x == "function" && (hc(t, n, x, a),
                    _ = t.memoizedState),
                    (m = pn || Zf(t, n, m, a, R, _, f)) ? (A || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(),
                        typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()),
                        typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
                            t.memoizedProps = a,
                            t.memoizedState = _),
                    l.props = a,
                    l.state = _,
                    l.context = f,
                    a = m) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
                        a = !1)
        } else {
            l = t.stateNode,
                Mc(e, t),
                f = t.memoizedProps,
                A = Xn(n, f),
                l.props = A,
                x = t.pendingProps,
                R = l.context,
                _ = n.contextType,
                m = pa,
                typeof _ == "object" && _ !== null && (m = Le(_)),
                d = n.getDerivedStateFromProps,
                (_ = typeof d == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (f !== x || R !== m) && Kf(t, l, a, m),
                pn = !1,
                R = t.memoizedState,
                l.state = R,
                yi(t, a, l, i),
                mi();
            var O = t.memoizedState;
            f !== x || R !== O || pn || e !== null && e.dependencies !== null && xl(e.dependencies) ? (typeof d == "function" && (hc(t, n, d, a),
                O = t.memoizedState),
                (A = pn || Zf(t, n, A, a, R, O, m) || e !== null && e.dependencies !== null && xl(e.dependencies)) ? (_ || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(a, O, m),
                    typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(a, O, m)),
                    typeof l.componentDidUpdate == "function" && (t.flags |= 4),
                    typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || f === e.memoizedProps && R === e.memoizedState || (t.flags |= 4),
                        typeof l.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && R === e.memoizedState || (t.flags |= 1024),
                        t.memoizedProps = a,
                        t.memoizedState = O),
                l.props = a,
                l.state = O,
                l.context = m,
                a = A) : (typeof l.componentDidUpdate != "function" || f === e.memoizedProps && R === e.memoizedState || (t.flags |= 4),
                    typeof l.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && R === e.memoizedState || (t.flags |= 1024),
                    a = !1)
        }
        return l = a,
            di(e, t),
            a = (t.flags & 128) !== 0,
            l || a ? (l = t.stateNode,
                n = a && typeof n.getDerivedStateFromError != "function" ? null : l.render(),
                t.flags |= 1,
                e !== null && a ? (t.child = Hn(t, e.child, null, i),
                    t.child = Hn(t, null, n, i)) : je(e, t, n, i),
                t.memoizedState = l.state,
                e = t.child) : e = Qt(e, t, i),
            e
    }
    function co(e, t, n, a) {
        return ti(),
            t.flags |= 256,
            je(e, t, n, a),
            t.child
    }
    var gc = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };
    function vc(e) {
        return {
            baseLanes: e,
            cachePool: sf()
        }
    }
    function bc(e, t, n) {
        return e = e !== null ? e.childLanes & ~n : 0,
            t && (e |= gt),
            e
    }
    function ro(e, t, n) {
        var a = t.pendingProps, i = !1, l = (t.flags & 128) !== 0, f;
        if ((f = l) || (f = e !== null && e.memoizedState === null ? !1 : (De.current & 2) !== 0),
            f && (i = !0,
                t.flags &= -129),
            f = (t.flags & 32) !== 0,
            t.flags &= -33,
            e === null) {
            if (ne) {
                if (i ? sn(t) : fn(),
                    ne) {
                    var d = ke, m;
                    if (m = d) {
                        e: {
                            for (m = d,
                                d = Ot; m.nodeType !== 8;) {
                                if (!d) {
                                    d = null;
                                    break e
                                }
                                if (m = Ct(m.nextSibling),
                                    m === null) {
                                    d = null;
                                    break e
                                }
                            }
                            d = m
                        }
                        d !== null ? (t.memoizedState = {
                            dehydrated: d,
                            treeContext: jn !== null ? {
                                id: qt,
                                overflow: Yt
                            } : null,
                            retryLane: 536870912
                        },
                            m = yt(18, null, null, 0),
                            m.stateNode = d,
                            m.return = t,
                            t.child = m,
                            Qe = t,
                            ke = null,
                            m = !0) : m = !1
                    }
                    m || Nn(t)
                }
                if (d = t.memoizedState,
                    d !== null && (d = d.dehydrated,
                        d !== null))
                    return d.data === "$!" ? t.lanes = 16 : t.lanes = 536870912,
                        null;
                Gt(t)
            }
            return d = a.children,
                a = a.fallback,
                i ? (fn(),
                    i = t.mode,
                    d = _c({
                        mode: "hidden",
                        children: d
                    }, i),
                    a = Kn(a, i, n, null),
                    d.return = t,
                    a.return = t,
                    d.sibling = a,
                    t.child = d,
                    i = t.child,
                    i.memoizedState = vc(n),
                    i.childLanes = bc(e, f, n),
                    t.memoizedState = gc,
                    a) : (sn(t),
                        Sc(t, d))
        }
        if (m = e.memoizedState,
            m !== null && (d = m.dehydrated,
                d !== null)) {
            if (l)
                t.flags & 256 ? (sn(t),
                    t.flags &= -257,
                    t = Tc(e, t, n)) : t.memoizedState !== null ? (fn(),
                        t.child = e.child,
                        t.flags |= 128,
                        t = null) : (fn(),
                            i = a.fallback,
                            d = t.mode,
                            a = _c({
                                mode: "visible",
                                children: a.children
                            }, d),
                            i = Kn(i, d, n, null),
                            i.flags |= 2,
                            a.return = t,
                            i.return = t,
                            a.sibling = i,
                            t.child = a,
                            Hn(t, e.child, null, n),
                            a = t.child,
                            a.memoizedState = vc(n),
                            a.childLanes = bc(e, f, n),
                            t.memoizedState = gc,
                            t = i);
            else if (sn(t),
                d.data === "$!") {
                if (f = d.nextSibling && d.nextSibling.dataset,
                    f)
                    var _ = f.dgst;
                f = _,
                    a = Error(c(419)),
                    a.stack = "",
                    a.digest = f,
                    ni({
                        value: a,
                        source: null,
                        stack: null
                    }),
                    t = Tc(e, t, n)
            } else if (Me || hi(e, t, n, !1),
                f = (n & e.childLanes) !== 0,
                Me || f) {
                if (f = de,
                    f !== null) {
                    if (a = n & -n,
                        (a & 42) !== 0)
                        a = 1;
                    else
                        switch (a) {
                            case 2:
                                a = 1;
                                break;
                            case 8:
                                a = 4;
                                break;
                            case 32:
                                a = 16;
                                break;
                            case 128:
                            case 256:
                            case 512:
                            case 1024:
                            case 2048:
                            case 4096:
                            case 8192:
                            case 16384:
                            case 32768:
                            case 65536:
                            case 131072:
                            case 262144:
                            case 524288:
                            case 1048576:
                            case 2097152:
                            case 4194304:
                            case 8388608:
                            case 16777216:
                            case 33554432:
                                a = 64;
                                break;
                            case 268435456:
                                a = 134217728;
                                break;
                            default:
                                a = 0
                        }
                    if (a = (a & (f.suspendedLanes | n)) !== 0 ? 0 : a,
                        a !== 0 && a !== m.retryLane)
                        throw m.retryLane = a,
                        rn(e, a),
                        Ve(f, e, a),
                        If
                }
                d.data === "$?" || Fc(),
                    t = Tc(e, t, n)
            } else
                d.data === "$?" ? (t.flags |= 128,
                    t.child = e.child,
                    t = bm.bind(null, e),
                    d._reactRetry = t,
                    t = null) : (e = m.treeContext,
                        ke = Ct(d.nextSibling),
                        Qe = t,
                        ne = !0,
                        _t = null,
                        Ot = !1,
                        e !== null && (ot[dt++] = qt,
                            ot[dt++] = Yt,
                            ot[dt++] = jn,
                            qt = e.id,
                            Yt = e.overflow,
                            jn = t),
                        t = Sc(t, a.children),
                        t.flags |= 4096);
            return t
        }
        return i ? (fn(),
            i = a.fallback,
            d = t.mode,
            m = e.child,
            _ = m.sibling,
            a = Sn(m, {
                mode: "hidden",
                children: a.children
            }),
            a.subtreeFlags = m.subtreeFlags & 31457280,
            _ !== null ? i = Sn(_, i) : (i = Kn(i, d, n, null),
                i.flags |= 2),
            i.return = t,
            a.return = t,
            a.sibling = i,
            t.child = a,
            a = i,
            i = t.child,
            d = e.child.memoizedState,
            d === null ? d = vc(n) : (m = d.cachePool,
                m !== null ? (_ = Oe._currentValue,
                    m = m.parent !== _ ? {
                        parent: _,
                        pool: _
                    } : m) : m = sf(),
                d = {
                    baseLanes: d.baseLanes | n,
                    cachePool: m
                }),
            i.memoizedState = d,
            i.childLanes = bc(e, f, n),
            t.memoizedState = gc,
            a) : (sn(t),
                n = e.child,
                e = n.sibling,
                n = Sn(n, {
                    mode: "visible",
                    children: a.children
                }),
                n.return = t,
                n.sibling = null,
                e !== null && (f = t.deletions,
                    f === null ? (t.deletions = [e],
                        t.flags |= 16) : f.push(e)),
                t.child = n,
                t.memoizedState = null,
                n)
    }
    function Sc(e, t) {
        return t = _c({
            mode: "visible",
            children: t
        }, e.mode),
            t.return = e,
            e.child = t
    }
    function _c(e, t) {
        return Bo(e, t, 0, null)
    }
    function Tc(e, t, n) {
        return Hn(t, e.child, null, n),
            e = Sc(t, t.pendingProps.children),
            e.flags |= 2,
            t.memoizedState = null,
            e
    }
    function so(e, t, n) {
        e.lanes |= t;
        var a = e.alternate;
        a !== null && (a.lanes |= t),
            Dc(e.return, t, n)
    }
    function Cc(e, t, n, a, i) {
        var l = e.memoizedState;
        l === null ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: a,
            tail: n,
            tailMode: i
        } : (l.isBackwards = t,
            l.rendering = null,
            l.renderingStartTime = 0,
            l.last = a,
            l.tail = n,
            l.tailMode = i)
    }
    function fo(e, t, n) {
        var a = t.pendingProps
            , i = a.revealOrder
            , l = a.tail;
        if (je(e, t, a.children, n),
            a = De.current,
            (a & 2) !== 0)
            a = a & 1 | 2,
                t.flags |= 128;
        else {
            if (e !== null && (e.flags & 128) !== 0)
                e: for (e = t.child; e !== null;) {
                    if (e.tag === 13)
                        e.memoizedState !== null && so(e, n, t);
                    else if (e.tag === 19)
                        so(e, n, t);
                    else if (e.child !== null) {
                        e.child.return = e,
                            e = e.child;
                        continue
                    }
                    if (e === t)
                        break e;
                    for (; e.sibling === null;) {
                        if (e.return === null || e.return === t)
                            break e;
                        e = e.return
                    }
                    e.sibling.return = e.return,
                        e = e.sibling
                }
            a &= 1
        }
        switch (pe(De, a),
        i) {
            case "forwards":
                for (n = t.child,
                    i = null; n !== null;)
                    e = n.alternate,
                        e !== null && vl(e) === null && (i = n),
                        n = n.sibling;
                n = i,
                    n === null ? (i = t.child,
                        t.child = null) : (i = n.sibling,
                            n.sibling = null),
                    Cc(t, !1, i, n, l);
                break;
            case "backwards":
                for (n = null,
                    i = t.child,
                    t.child = null; i !== null;) {
                    if (e = i.alternate,
                        e !== null && vl(e) === null) {
                        t.child = i;
                        break
                    }
                    e = i.sibling,
                        i.sibling = n,
                        n = i,
                        i = e
                }
                Cc(t, !0, n, null, l);
                break;
            case "together":
                Cc(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null
        }
        return t.child
    }
    function Qt(e, t, n) {
        if (e !== null && (t.dependencies = e.dependencies),
            _n |= t.lanes,
            (n & t.childLanes) === 0)
            if (e !== null) {
                if (hi(e, t, n, !1),
                    (n & t.childLanes) === 0)
                    return null
            } else
                return null;
        if (e !== null && t.child !== e.child)
            throw Error(c(153));
        if (t.child !== null) {
            for (e = t.child,
                n = Sn(e, e.pendingProps),
                t.child = n,
                n.return = t; e.sibling !== null;)
                e = e.sibling,
                    n = n.sibling = Sn(e, e.pendingProps),
                    n.return = t;
            n.sibling = null
        }
        return t.child
    }
    function Ec(e, t) {
        return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies,
            !!(e !== null && xl(e)))
    }
    function lm(e, t, n) {
        switch (t.tag) {
            case 3:
                Ki(t, t.stateNode.containerInfo),
                    hn(t, Oe, e.memoizedState.cache),
                    ti();
                break;
            case 27:
            case 5:
                pu(t);
                break;
            case 4:
                Ki(t, t.stateNode.containerInfo);
                break;
            case 10:
                hn(t, t.type, t.memoizedProps.value);
                break;
            case 13:
                var a = t.memoizedState;
                if (a !== null)
                    return a.dehydrated !== null ? (sn(t),
                        t.flags |= 128,
                        null) : (n & t.child.childLanes) !== 0 ? ro(e, t, n) : (sn(t),
                            e = Qt(e, t, n),
                            e !== null ? e.sibling : null);
                sn(t);
                break;
            case 19:
                var i = (e.flags & 128) !== 0;
                if (a = (n & t.childLanes) !== 0,
                    a || (hi(e, t, n, !1),
                        a = (n & t.childLanes) !== 0),
                    i) {
                    if (a)
                        return fo(e, t, n);
                    t.flags |= 128
                }
                if (i = t.memoizedState,
                    i !== null && (i.rendering = null,
                        i.tail = null,
                        i.lastEffect = null),
                    pe(De, De.current),
                    a)
                    break;
                return null;
            case 22:
            case 23:
                return t.lanes = 0,
                    ao(e, t, n);
            case 24:
                hn(t, Oe, e.memoizedState.cache)
        }
        return Qt(e, t, n)
    }
    function oo(e, t, n) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps)
                Me = !0;
            else {
                if (!Ec(e, n) && (t.flags & 128) === 0)
                    return Me = !1,
                        lm(e, t, n);
                Me = (e.flags & 131072) !== 0
            }
        else
            Me = !1,
                ne && (t.flags & 1048576) !== 0 && $s(t, hl, t.index);
        switch (t.lanes = 0,
        t.tag) {
            case 16:
                e: {
                    e = t.pendingProps;
                    var a = t.elementType
                        , i = a._init;
                    if (a = i(a._payload),
                        t.type = a,
                        typeof a == "function")
                        Lc(a) ? (e = Xn(a, e),
                            t.tag = 1,
                            t = uo(null, t, a, e, n)) : (t.tag = 0,
                                t = yc(null, t, a, e, n));
                    else {
                        if (a != null) {
                            if (i = a.$$typeof,
                                i === I) {
                                t.tag = 11,
                                    t = eo(null, t, a, e, n);
                                break e
                            } else if (i === jt) {
                                t.tag = 14,
                                    t = to(null, t, a, e, n);
                                break e
                            }
                        }
                        throw t = nn(a) || a,
                        Error(c(306, t, ""))
                    }
                }
                return t;
            case 0:
                return yc(e, t, t.type, t.pendingProps, n);
            case 1:
                return a = t.type,
                    i = Xn(a, t.pendingProps),
                    uo(e, t, a, i, n);
            case 3:
                e: {
                    if (Ki(t, t.stateNode.containerInfo),
                        e === null)
                        throw Error(c(387));
                    var l = t.pendingProps;
                    i = t.memoizedState,
                        a = i.element,
                        Mc(e, t),
                        yi(t, l, null, n);
                    var f = t.memoizedState;
                    if (l = f.cache,
                        hn(t, Oe, l),
                        l !== i.cache && Oc(t, [Oe], n, !0),
                        mi(),
                        l = f.element,
                        i.isDehydrated)
                        if (i = {
                            element: l,
                            isDehydrated: !1,
                            cache: f.cache
                        },
                            t.updateQueue.baseState = i,
                            t.memoizedState = i,
                            t.flags & 256) {
                            t = co(e, t, l, n);
                            break e
                        } else if (l !== a) {
                            a = ft(Error(c(424)), t),
                                ni(a),
                                t = co(e, t, l, n);
                            break e
                        } else
                            for (ke = Ct(t.stateNode.containerInfo.firstChild),
                                Qe = t,
                                ne = !0,
                                _t = null,
                                Ot = !0,
                                n = af(t, null, l, n),
                                t.child = n; n;)
                                n.flags = n.flags & -3 | 4096,
                                    n = n.sibling;
                    else {
                        if (ti(),
                            l === a) {
                            t = Qt(e, t, n);
                            break e
                        }
                        je(e, t, l, n)
                    }
                    t = t.child
                }
                return t;
            case 26:
                return di(e, t),
                    e === null ? (n = md(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : ne || (n = t.type,
                        e = t.pendingProps,
                        a = Kl(an.current).createElement(n),
                        a[He] = t,
                        a[$e] = e,
                        Be(a, n, e),
                        Ae(a),
                        t.stateNode = a) : t.memoizedState = md(t.type, e.memoizedProps, t.pendingProps, e.memoizedState),
                    null;
            case 27:
                return pu(t),
                    e === null && ne && (a = t.stateNode = dd(t.type, t.pendingProps, an.current),
                        Qe = t,
                        Ot = !0,
                        ke = Ct(a.firstChild)),
                    a = t.pendingProps.children,
                    e !== null || ne ? je(e, t, a, n) : t.child = Hn(t, null, a, n),
                    di(e, t),
                    t.child;
            case 5:
                return e === null && ne && ((i = a = ke) && (a = Bm(a, t.type, t.pendingProps, Ot),
                    a !== null ? (t.stateNode = a,
                        Qe = t,
                        ke = Ct(a.firstChild),
                        Ot = !1,
                        i = !0) : i = !1),
                    i || Nn(t)),
                    pu(t),
                    i = t.type,
                    l = t.pendingProps,
                    f = e !== null ? e.memoizedProps : null,
                    a = l.children,
                    fr(i, l) ? a = null : f !== null && fr(i, f) && (t.flags |= 32),
                    t.memoizedState !== null && (i = wu(e, t, wp, null, null, n),
                        zi._currentValue = i),
                    di(e, t),
                    je(e, t, a, n),
                    t.child;
            case 6:
                return e === null && ne && ((e = n = ke) && (n = Nm(n, t.pendingProps, Ot),
                    n !== null ? (t.stateNode = n,
                        Qe = t,
                        ke = null,
                        e = !0) : e = !1),
                    e || Nn(t)),
                    null;
            case 13:
                return ro(e, t, n);
            case 4:
                return Ki(t, t.stateNode.containerInfo),
                    a = t.pendingProps,
                    e === null ? t.child = Hn(t, null, a, n) : je(e, t, a, n),
                    t.child;
            case 11:
                return eo(e, t, t.type, t.pendingProps, n);
            case 7:
                return je(e, t, t.pendingProps, n),
                    t.child;
            case 8:
                return je(e, t, t.pendingProps.children, n),
                    t.child;
            case 12:
                return je(e, t, t.pendingProps.children, n),
                    t.child;
            case 10:
                return a = t.pendingProps,
                    hn(t, t.type, a.value),
                    je(e, t, a.children, n),
                    t.child;
            case 9:
                return i = t.type._context,
                    a = t.pendingProps.children,
                    Vn(t),
                    i = Le(i),
                    a = a(i),
                    t.flags |= 1,
                    je(e, t, a, n),
                    t.child;
            case 14:
                return to(e, t, t.type, t.pendingProps, n);
            case 15:
                return no(e, t, t.type, t.pendingProps, n);
            case 19:
                return fo(e, t, n);
            case 22:
                return ao(e, t, n);
            case 24:
                return Vn(t),
                    a = Le(Oe),
                    e === null ? (i = Fu(),
                        i === null && (i = de,
                            l = $u(),
                            i.pooledCache = l,
                            l.refCount++,
                            l !== null && (i.pooledCacheLanes |= n),
                            i = l),
                        t.memoizedState = {
                            parent: a,
                            cache: i
                        },
                        Ac(t),
                        hn(t, Oe, i)) : ((e.lanes & n) !== 0 && (Mc(e, t),
                            yi(t, null, null, n),
                            mi()),
                            i = e.memoizedState,
                            l = t.memoizedState,
                            i.parent !== a ? (i = {
                                parent: a,
                                cache: a
                            },
                                t.memoizedState = i,
                                t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = i),
                                hn(t, Oe, a)) : (a = l.cache,
                                    hn(t, Oe, a),
                                    a !== i.cache && Oc(t, [Oe], n, !0))),
                    je(e, t, t.pendingProps.children, n),
                    t.child;
            case 29:
                throw t.pendingProps
        }
        throw Error(c(156, t.tag))
    }
    var Rc = ue(null)
        , Qn = null
        , Vt = null;
    function hn(e, t, n) {
        pe(Rc, t._currentValue),
            t._currentValue = n
    }
    function Zt(e) {
        e._currentValue = Rc.current,
            Te(Rc)
    }
    function Dc(e, t, n) {
        for (; e !== null;) {
            var a = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t,
                a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
                e === n)
                break;
            e = e.return
        }
    }
    function Oc(e, t, n, a) {
        var i = e.child;
        for (i !== null && (i.return = e); i !== null;) {
            var l = i.dependencies;
            if (l !== null) {
                var f = i.child;
                l = l.firstContext;
                e: for (; l !== null;) {
                    var d = l;
                    l = i;
                    for (var m = 0; m < t.length; m++)
                        if (d.context === t[m]) {
                            l.lanes |= n,
                                d = l.alternate,
                                d !== null && (d.lanes |= n),
                                Dc(l.return, n, e),
                                a || (f = null);
                            break e
                        }
                    l = d.next
                }
            } else if (i.tag === 18) {
                if (f = i.return,
                    f === null)
                    throw Error(c(341));
                f.lanes |= n,
                    l = f.alternate,
                    l !== null && (l.lanes |= n),
                    Dc(f, n, e),
                    f = null
            } else
                f = i.child;
            if (f !== null)
                f.return = i;
            else
                for (f = i; f !== null;) {
                    if (f === e) {
                        f = null;
                        break
                    }
                    if (i = f.sibling,
                        i !== null) {
                        i.return = f.return,
                            f = i;
                        break
                    }
                    f = f.return
                }
            i = f
        }
    }
    function hi(e, t, n, a) {
        e = null;
        for (var i = t, l = !1; i !== null;) {
            if (!l) {
                if ((i.flags & 524288) !== 0)
                    l = !0;
                else if ((i.flags & 262144) !== 0)
                    break
            }
            if (i.tag === 10) {
                var f = i.alternate;
                if (f === null)
                    throw Error(c(387));
                if (f = f.memoizedProps,
                    f !== null) {
                    var d = i.type;
                    tt(i.pendingProps.value, f.value) || (e !== null ? e.push(d) : e = [d])
                }
            } else if (i === Zi.current) {
                if (f = i.alternate,
                    f === null)
                    throw Error(c(387));
                f.memoizedState.memoizedState !== i.memoizedState.memoizedState && (e !== null ? e.push(zi) : e = [zi])
            }
            i = i.return
        }
        e !== null && Oc(t, e, n, a),
            t.flags |= 262144
    }
    function xl(e) {
        for (e = e.firstContext; e !== null;) {
            if (!tt(e.context._currentValue, e.memoizedValue))
                return !0;
            e = e.next
        }
        return !1
    }
    function Vn(e) {
        Qn = e,
            Vt = null,
            e = e.dependencies,
            e !== null && (e.firstContext = null)
    }
    function Le(e) {
        return ho(Qn, e)
    }
    function zl(e, t) {
        return Qn === null && Vn(e),
            ho(e, t)
    }
    function ho(e, t) {
        var n = t._currentValue;
        if (t = {
            context: t,
            memoizedValue: n,
            next: null
        },
            Vt === null) {
            if (e === null)
                throw Error(c(308));
            Vt = t,
                e.dependencies = {
                    lanes: 0,
                    firstContext: t
                },
                e.flags |= 524288
        } else
            Vt = Vt.next = t;
        return n
    }
    var pn = !1;
    function Ac(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }
    function Mc(e, t) {
        e = e.updateQueue,
            t.updateQueue === e && (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                callbacks: null
            })
    }
    function mn(e) {
        return {
            lane: e,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function yn(e, t, n) {
        var a = e.updateQueue;
        if (a === null)
            return null;
        if (a = a.shared,
            (ye & 2) !== 0) {
            var i = a.pending;
            return i === null ? t.next = t : (t.next = i.next,
                i.next = t),
                a.pending = t,
                t = ol(e),
                Ks(e, null, n),
                t
        }
        return fl(e, a, t, n),
            ol(e)
    }
    function pi(e, t, n) {
        if (t = t.updateQueue,
            t !== null && (t = t.shared,
                (n & 4194176) !== 0)) {
            var a = t.lanes;
            a &= e.pendingLanes,
                n |= a,
                t.lanes = n,
                es(e, n)
        }
    }
    function xc(e, t) {
        var n = e.updateQueue
            , a = e.alternate;
        if (a !== null && (a = a.updateQueue,
            n === a)) {
            var i = null
                , l = null;
            if (n = n.firstBaseUpdate,
                n !== null) {
                do {
                    var f = {
                        lane: n.lane,
                        tag: n.tag,
                        payload: n.payload,
                        callback: null,
                        next: null
                    };
                    l === null ? i = l = f : l = l.next = f,
                        n = n.next
                } while (n !== null);
                l === null ? i = l = t : l = l.next = t
            } else
                i = l = t;
            n = {
                baseState: a.baseState,
                firstBaseUpdate: i,
                lastBaseUpdate: l,
                shared: a.shared,
                callbacks: a.callbacks
            },
                e.updateQueue = n;
            return
        }
        e = n.lastBaseUpdate,
            e === null ? n.firstBaseUpdate = t : e.next = t,
            n.lastBaseUpdate = t
    }
    var zc = !1;
    function mi() {
        if (zc) {
            var e = Sa;
            if (e !== null)
                throw e
        }
    }
    function yi(e, t, n, a) {
        zc = !1;
        var i = e.updateQueue;
        pn = !1;
        var l = i.firstBaseUpdate
            , f = i.lastBaseUpdate
            , d = i.shared.pending;
        if (d !== null) {
            i.shared.pending = null;
            var m = d
                , _ = m.next;
            m.next = null,
                f === null ? l = _ : f.next = _,
                f = m;
            var A = e.alternate;
            A !== null && (A = A.updateQueue,
                d = A.lastBaseUpdate,
                d !== f && (d === null ? A.firstBaseUpdate = _ : d.next = _,
                    A.lastBaseUpdate = m))
        }
        if (l !== null) {
            var x = i.baseState;
            f = 0,
                A = _ = m = null,
                d = l;
            do {
                var R = d.lane & -536870913
                    , O = R !== d.lane;
                if (O ? (te & R) === R : (a & R) === R) {
                    R !== 0 && R === ba && (zc = !0),
                        A !== null && (A = A.next = {
                            lane: 0,
                            tag: d.tag,
                            payload: d.payload,
                            callback: null,
                            next: null
                        });
                    e: {
                        var H = e
                            , Z = d;
                        R = t;
                        var be = n;
                        switch (Z.tag) {
                            case 1:
                                if (H = Z.payload,
                                    typeof H == "function") {
                                    x = H.call(be, x, R);
                                    break e
                                }
                                x = H;
                                break e;
                            case 3:
                                H.flags = H.flags & -65537 | 128;
                            case 0:
                                if (H = Z.payload,
                                    R = typeof H == "function" ? H.call(be, x, R) : H,
                                    R == null)
                                    break e;
                                x = le({}, x, R);
                                break e;
                            case 2:
                                pn = !0
                        }
                    }
                    R = d.callback,
                        R !== null && (e.flags |= 64,
                            O && (e.flags |= 8192),
                            O = i.callbacks,
                            O === null ? i.callbacks = [R] : O.push(R))
                } else
                    O = {
                        lane: R,
                        tag: d.tag,
                        payload: d.payload,
                        callback: d.callback,
                        next: null
                    },
                        A === null ? (_ = A = O,
                            m = x) : A = A.next = O,
                        f |= R;
                if (d = d.next,
                    d === null) {
                    if (d = i.shared.pending,
                        d === null)
                        break;
                    O = d,
                        d = O.next,
                        O.next = null,
                        i.lastBaseUpdate = O,
                        i.shared.pending = null
                }
            } while (!0);
            A === null && (m = x),
                i.baseState = m,
                i.firstBaseUpdate = _,
                i.lastBaseUpdate = A,
                l === null && (i.shared.lanes = 0),
                _n |= f,
                e.lanes = f,
                e.memoizedState = x
        }
    }
    function po(e, t) {
        if (typeof e != "function")
            throw Error(c(191, e));
        e.call(t)
    }
    function mo(e, t) {
        var n = e.callbacks;
        if (n !== null)
            for (e.callbacks = null,
                e = 0; e < n.length; e++)
                po(n[e], t)
    }
    function gi(e, t) {
        try {
            var n = t.updateQueue
                , a = n !== null ? n.lastEffect : null;
            if (a !== null) {
                var i = a.next;
                n = i;
                do {
                    if ((n.tag & e) === e) {
                        a = void 0;
                        var l = n.create
                            , f = n.inst;
                        a = l(),
                            f.destroy = a
                    }
                    n = n.next
                } while (n !== i)
            }
        } catch (d) {
            fe(t, t.return, d)
        }
    }
    function gn(e, t, n) {
        try {
            var a = t.updateQueue
                , i = a !== null ? a.lastEffect : null;
            if (i !== null) {
                var l = i.next;
                a = l;
                do {
                    if ((a.tag & e) === e) {
                        var f = a.inst
                            , d = f.destroy;
                        if (d !== void 0) {
                            f.destroy = void 0,
                                i = t;
                            var m = n;
                            try {
                                d()
                            } catch (_) {
                                fe(i, m, _)
                            }
                        }
                    }
                    a = a.next
                } while (a !== l)
            }
        } catch (_) {
            fe(t, t.return, _)
        }
    }
    function yo(e) {
        var t = e.updateQueue;
        if (t !== null) {
            var n = e.stateNode;
            try {
                mo(t, n)
            } catch (a) {
                fe(e, e.return, a)
            }
        }
    }
    function go(e, t, n) {
        n.props = Xn(e.type, e.memoizedProps),
            n.state = e.memoizedState;
        try {
            n.componentWillUnmount()
        } catch (a) {
            fe(e, t, a)
        }
    }
    function Zn(e, t) {
        try {
            var n = e.ref;
            if (n !== null) {
                var a = e.stateNode;
                switch (e.tag) {
                    case 26:
                    case 27:
                    case 5:
                        var i = a;
                        break;
                    default:
                        i = a
                }
                typeof n == "function" ? e.refCleanup = n(i) : n.current = i
            }
        } catch (l) {
            fe(e, t, l)
        }
    }
    function nt(e, t) {
        var n = e.ref
            , a = e.refCleanup;
        if (n !== null)
            if (typeof a == "function")
                try {
                    a()
                } catch (i) {
                    fe(e, t, i)
                } finally {
                    e.refCleanup = null,
                        e = e.alternate,
                        e != null && (e.refCleanup = null)
                }
            else if (typeof n == "function")
                try {
                    n(null)
                } catch (i) {
                    fe(e, t, i)
                }
            else
                n.current = null
    }
    function vo(e) {
        var t = e.type
            , n = e.memoizedProps
            , a = e.stateNode;
        try {
            e: switch (t) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                    n.autoFocus && a.focus();
                    break e;
                case "img":
                    n.src ? a.src = n.src : n.srcSet && (a.srcset = n.srcSet)
            }
        } catch (i) {
            fe(e, e.return, i)
        }
    }
    function bo(e, t, n) {
        try {
            var a = e.stateNode;
            xm(a, e.type, n, t),
                a[$e] = t
        } catch (i) {
            fe(e, e.return, i)
        }
    }
    function So(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 || e.tag === 4
    }
    function Uc(e) {
        e: for (; ;) {
            for (; e.sibling === null;) {
                if (e.return === null || So(e.return))
                    return null;
                e = e.return
            }
            for (e.sibling.return = e.return,
                e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 27 && e.tag !== 18;) {
                if (e.flags & 2 || e.child === null || e.tag === 4)
                    continue e;
                e.child.return = e,
                    e = e.child
            }
            if (!(e.flags & 2))
                return e.stateNode
        }
    }
    function kc(e, t, n) {
        var a = e.tag;
        if (a === 5 || a === 6)
            e = e.stateNode,
                t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
                    t.insertBefore(e, n)) : (t = n,
                        t.appendChild(e)),
                    n = n._reactRootContainer,
                    n != null || t.onclick !== null || (t.onclick = Zl));
        else if (a !== 4 && a !== 27 && (e = e.child,
            e !== null))
            for (kc(e, t, n),
                e = e.sibling; e !== null;)
                kc(e, t, n),
                    e = e.sibling
    }
    function Ul(e, t, n) {
        var a = e.tag;
        if (a === 5 || a === 6)
            e = e.stateNode,
                t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (a !== 4 && a !== 27 && (e = e.child,
            e !== null))
            for (Ul(e, t, n),
                e = e.sibling; e !== null;)
                Ul(e, t, n),
                    e = e.sibling
    }
    var Kt = !1
        , ge = !1
        , jc = !1
        , _o = typeof WeakSet == "function" ? WeakSet : Set
        , xe = null
        , To = !1;
    function um(e, t) {
        if (e = e.containerInfo,
            rr = wl,
            e = Hs(e),
            Nu(e)) {
            if ("selectionStart" in e)
                var n = {
                    start: e.selectionStart,
                    end: e.selectionEnd
                };
            else
                e: {
                    n = (n = e.ownerDocument) && n.defaultView || window;
                    var a = n.getSelection && n.getSelection();
                    if (a && a.rangeCount !== 0) {
                        n = a.anchorNode;
                        var i = a.anchorOffset
                            , l = a.focusNode;
                        a = a.focusOffset;
                        try {
                            n.nodeType,
                                l.nodeType
                        } catch {
                            n = null;
                            break e
                        }
                        var f = 0
                            , d = -1
                            , m = -1
                            , _ = 0
                            , A = 0
                            , x = e
                            , R = null;
                        t: for (; ;) {
                            for (var O; x !== n || i !== 0 && x.nodeType !== 3 || (d = f + i),
                                x !== l || a !== 0 && x.nodeType !== 3 || (m = f + a),
                                x.nodeType === 3 && (f += x.nodeValue.length),
                                (O = x.firstChild) !== null;)
                                R = x,
                                    x = O;
                            for (; ;) {
                                if (x === e)
                                    break t;
                                if (R === n && ++_ === i && (d = f),
                                    R === l && ++A === a && (m = f),
                                    (O = x.nextSibling) !== null)
                                    break;
                                x = R,
                                    R = x.parentNode
                            }
                            x = O
                        }
                        n = d === -1 || m === -1 ? null : {
                            start: d,
                            end: m
                        }
                    } else
                        n = null
                }
            n = n || {
                start: 0,
                end: 0
            }
        } else
            n = null;
        for (sr = {
            focusedElem: e,
            selectionRange: n
        },
            wl = !1,
            xe = t; xe !== null;)
            if (t = xe,
                e = t.child,
                (t.subtreeFlags & 1028) !== 0 && e !== null)
                e.return = t,
                    xe = e;
            else
                for (; xe !== null;) {
                    switch (t = xe,
                    l = t.alternate,
                    e = t.flags,
                    t.tag) {
                        case 0:
                            break;
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if ((e & 1024) !== 0 && l !== null) {
                                e = void 0,
                                    n = t,
                                    i = l.memoizedProps,
                                    l = l.memoizedState,
                                    a = n.stateNode;
                                try {
                                    var H = Xn(n.type, i, n.elementType === n.type);
                                    e = a.getSnapshotBeforeUpdate(H, l),
                                        a.__reactInternalSnapshotBeforeUpdate = e
                                } catch (Z) {
                                    fe(n, n.return, Z)
                                }
                            }
                            break;
                        case 3:
                            if ((e & 1024) !== 0) {
                                if (e = t.stateNode.containerInfo,
                                    n = e.nodeType,
                                    n === 9)
                                    hr(e);
                                else if (n === 1)
                                    switch (e.nodeName) {
                                        case "HEAD":
                                        case "HTML":
                                        case "BODY":
                                            hr(e);
                                            break;
                                        default:
                                            e.textContent = ""
                                    }
                            }
                            break;
                        case 5:
                        case 26:
                        case 27:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            if ((e & 1024) !== 0)
                                throw Error(c(163))
                    }
                    if (e = t.sibling,
                        e !== null) {
                        e.return = t.return,
                            xe = e;
                        break
                    }
                    xe = t.return
                }
        return H = To,
            To = !1,
            H
    }
    function Co(e, t, n) {
        var a = n.flags;
        switch (n.tag) {
            case 0:
            case 11:
            case 15:
                $t(e, n),
                    a & 4 && gi(5, n);
                break;
            case 1:
                if ($t(e, n),
                    a & 4)
                    if (e = n.stateNode,
                        t === null)
                        try {
                            e.componentDidMount()
                        } catch (d) {
                            fe(n, n.return, d)
                        }
                    else {
                        var i = Xn(n.type, t.memoizedProps);
                        t = t.memoizedState;
                        try {
                            e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate)
                        } catch (d) {
                            fe(n, n.return, d)
                        }
                    }
                a & 64 && yo(n),
                    a & 512 && Zn(n, n.return);
                break;
            case 3:
                if ($t(e, n),
                    a & 64 && (a = n.updateQueue,
                        a !== null)) {
                    if (e = null,
                        n.child !== null)
                        switch (n.child.tag) {
                            case 27:
                            case 5:
                                e = n.child.stateNode;
                                break;
                            case 1:
                                e = n.child.stateNode
                        }
                    try {
                        mo(a, e)
                    } catch (d) {
                        fe(n, n.return, d)
                    }
                }
                break;
            case 26:
                $t(e, n),
                    a & 512 && Zn(n, n.return);
                break;
            case 27:
            case 5:
                $t(e, n),
                    t === null && a & 4 && vo(n),
                    a & 512 && Zn(n, n.return);
                break;
            case 12:
                $t(e, n);
                break;
            case 13:
                $t(e, n),
                    a & 4 && Do(e, n);
                break;
            case 22:
                if (i = n.memoizedState !== null || Kt,
                    !i) {
                    t = t !== null && t.memoizedState !== null || ge;
                    var l = Kt
                        , f = ge;
                    Kt = i,
                        (ge = t) && !f ? vn(e, n, (n.subtreeFlags & 8772) !== 0) : $t(e, n),
                        Kt = l,
                        ge = f
                }
                a & 512 && (n.memoizedProps.mode === "manual" ? Zn(n, n.return) : nt(n, n.return));
                break;
            default:
                $t(e, n)
        }
    }
    function Eo(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null,
            Eo(t)),
            e.child = null,
            e.deletions = null,
            e.sibling = null,
            e.tag === 5 && (t = e.stateNode,
                t !== null && Su(t)),
            e.stateNode = null,
            e.return = null,
            e.dependencies = null,
            e.memoizedProps = null,
            e.memoizedState = null,
            e.pendingProps = null,
            e.stateNode = null,
            e.updateQueue = null
    }
    var Re = null
        , at = !1;
    function Jt(e, t, n) {
        for (n = n.child; n !== null;)
            Ro(e, t, n),
                n = n.sibling
    }
    function Ro(e, t, n) {
        if (Ie && typeof Ie.onCommitFiberUnmount == "function")
            try {
                Ie.onCommitFiberUnmount(Ya, n)
            } catch { }
        switch (n.tag) {
            case 26:
                ge || nt(n, t),
                    Jt(e, t, n),
                    n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode,
                        n.parentNode.removeChild(n));
                break;
            case 27:
                ge || nt(n, t);
                var a = Re
                    , i = at;
                for (Re = n.stateNode,
                    Jt(e, t, n),
                    n = n.stateNode,
                    t = n.attributes; t.length;)
                    n.removeAttributeNode(t[0]);
                Su(n),
                    Re = a,
                    at = i;
                break;
            case 5:
                ge || nt(n, t);
            case 6:
                i = Re;
                var l = at;
                if (Re = null,
                    Jt(e, t, n),
                    Re = i,
                    at = l,
                    Re !== null)
                    if (at)
                        try {
                            e = Re,
                                a = n.stateNode,
                                e.nodeType === 8 ? e.parentNode.removeChild(a) : e.removeChild(a)
                        } catch (f) {
                            fe(n, t, f)
                        }
                    else
                        try {
                            Re.removeChild(n.stateNode)
                        } catch (f) {
                            fe(n, t, f)
                        }
                break;
            case 18:
                Re !== null && (at ? (t = Re,
                    n = n.stateNode,
                    t.nodeType === 8 ? dr(t.parentNode, n) : t.nodeType === 1 && dr(t, n),
                    Bi(t)) : dr(Re, n.stateNode));
                break;
            case 4:
                a = Re,
                    i = at,
                    Re = n.stateNode.containerInfo,
                    at = !0,
                    Jt(e, t, n),
                    Re = a,
                    at = i;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                ge || gn(2, n, t),
                    ge || gn(4, n, t),
                    Jt(e, t, n);
                break;
            case 1:
                ge || (nt(n, t),
                    a = n.stateNode,
                    typeof a.componentWillUnmount == "function" && go(n, t, a)),
                    Jt(e, t, n);
                break;
            case 21:
                Jt(e, t, n);
                break;
            case 22:
                ge || nt(n, t),
                    ge = (a = ge) || n.memoizedState !== null,
                    Jt(e, t, n),
                    ge = a;
                break;
            default:
                Jt(e, t, n)
        }
    }
    function Do(e, t) {
        if (t.memoizedState === null && (e = t.alternate,
            e !== null && (e = e.memoizedState,
                e !== null && (e = e.dehydrated,
                    e !== null))))
            try {
                Bi(e)
            } catch (n) {
                fe(t, t.return, n)
            }
    }
    function cm(e) {
        switch (e.tag) {
            case 13:
            case 19:
                var t = e.stateNode;
                return t === null && (t = e.stateNode = new _o),
                    t;
            case 22:
                return e = e.stateNode,
                    t = e._retryCache,
                    t === null && (t = e._retryCache = new _o),
                    t;
            default:
                throw Error(c(435, e.tag))
        }
    }
    function Bc(e, t) {
        var n = cm(e);
        t.forEach(function (a) {
            var i = Sm.bind(null, e, a);
            n.has(a) || (n.add(a),
                a.then(i, i))
        })
    }
    function pt(e, t) {
        var n = t.deletions;
        if (n !== null)
            for (var a = 0; a < n.length; a++) {
                var i = n[a]
                    , l = e
                    , f = t
                    , d = f;
                e: for (; d !== null;) {
                    switch (d.tag) {
                        case 27:
                        case 5:
                            Re = d.stateNode,
                                at = !1;
                            break e;
                        case 3:
                            Re = d.stateNode.containerInfo,
                                at = !0;
                            break e;
                        case 4:
                            Re = d.stateNode.containerInfo,
                                at = !0;
                            break e
                    }
                    d = d.return
                }
                if (Re === null)
                    throw Error(c(160));
                Ro(l, f, i),
                    Re = null,
                    at = !1,
                    l = i.alternate,
                    l !== null && (l.return = null),
                    i.return = null
            }
        if (t.subtreeFlags & 13878)
            for (t = t.child; t !== null;)
                Oo(t, e),
                    t = t.sibling
    }
    var Tt = null;
    function Oo(e, t) {
        var n = e.alternate
            , a = e.flags;
        switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                pt(t, e),
                    mt(e),
                    a & 4 && (gn(3, e, e.return),
                        gi(3, e),
                        gn(5, e, e.return));
                break;
            case 1:
                pt(t, e),
                    mt(e),
                    a & 512 && (ge || n === null || nt(n, n.return)),
                    a & 64 && Kt && (e = e.updateQueue,
                        e !== null && (a = e.callbacks,
                            a !== null && (n = e.shared.hiddenCallbacks,
                                e.shared.hiddenCallbacks = n === null ? a : n.concat(a))));
                break;
            case 26:
                var i = Tt;
                if (pt(t, e),
                    mt(e),
                    a & 512 && (ge || n === null || nt(n, n.return)),
                    a & 4) {
                    var l = n !== null ? n.memoizedState : null;
                    if (a = e.memoizedState,
                        n === null)
                        if (a === null)
                            if (e.stateNode === null) {
                                e: {
                                    a = e.type,
                                        n = e.memoizedProps,
                                        i = i.ownerDocument || i;
                                    t: switch (a) {
                                        case "title":
                                            l = i.getElementsByTagName("title")[0],
                                                (!l || l[Qa] || l[He] || l.namespaceURI === "http://www.w3.org/2000/svg" || l.hasAttribute("itemprop")) && (l = i.createElement(a),
                                                    i.head.insertBefore(l, i.querySelector("head > title"))),
                                                Be(l, a, n),
                                                l[He] = e,
                                                Ae(l),
                                                a = l;
                                            break e;
                                        case "link":
                                            var f = vd("link", "href", i).get(a + (n.href || ""));
                                            if (f) {
                                                for (var d = 0; d < f.length; d++)
                                                    if (l = f[d],
                                                        l.getAttribute("href") === (n.href == null ? null : n.href) && l.getAttribute("rel") === (n.rel == null ? null : n.rel) && l.getAttribute("title") === (n.title == null ? null : n.title) && l.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                                                        f.splice(d, 1);
                                                        break t
                                                    }
                                            }
                                            l = i.createElement(a),
                                                Be(l, a, n),
                                                i.head.appendChild(l);
                                            break;
                                        case "meta":
                                            if (f = vd("meta", "content", i).get(a + (n.content || ""))) {
                                                for (d = 0; d < f.length; d++)
                                                    if (l = f[d],
                                                        l.getAttribute("content") === (n.content == null ? null : "" + n.content) && l.getAttribute("name") === (n.name == null ? null : n.name) && l.getAttribute("property") === (n.property == null ? null : n.property) && l.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && l.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                                                        f.splice(d, 1);
                                                        break t
                                                    }
                                            }
                                            l = i.createElement(a),
                                                Be(l, a, n),
                                                i.head.appendChild(l);
                                            break;
                                        default:
                                            throw Error(c(468, a))
                                    }
                                    l[He] = e,
                                        Ae(l),
                                        a = l
                                }
                                e.stateNode = a
                            } else
                                bd(i, e.type, e.stateNode);
                        else
                            e.stateNode = gd(i, a, e.memoizedProps);
                    else
                        l !== a ? (l === null ? n.stateNode !== null && (n = n.stateNode,
                            n.parentNode.removeChild(n)) : l.count--,
                            a === null ? bd(i, e.type, e.stateNode) : gd(i, a, e.memoizedProps)) : a === null && e.stateNode !== null && bo(e, e.memoizedProps, n.memoizedProps)
                }
                break;
            case 27:
                if (a & 4 && e.alternate === null) {
                    i = e.stateNode,
                        l = e.memoizedProps;
                    try {
                        for (var m = i.firstChild; m;) {
                            var _ = m.nextSibling
                                , A = m.nodeName;
                            m[Qa] || A === "HEAD" || A === "BODY" || A === "SCRIPT" || A === "STYLE" || A === "LINK" && m.rel.toLowerCase() === "stylesheet" || i.removeChild(m),
                                m = _
                        }
                        for (var x = e.type, R = i.attributes; R.length;)
                            i.removeAttributeNode(R[0]);
                        Be(i, x, l),
                            i[He] = e,
                            i[$e] = l
                    } catch (H) {
                        fe(e, e.return, H)
                    }
                }
            case 5:
                if (pt(t, e),
                    mt(e),
                    a & 512 && (ge || n === null || nt(n, n.return)),
                    e.flags & 32) {
                    i = e.stateNode;
                    try {
                        ca(i, "")
                    } catch (H) {
                        fe(e, e.return, H)
                    }
                }
                a & 4 && e.stateNode != null && (i = e.memoizedProps,
                    bo(e, i, n !== null ? n.memoizedProps : i)),
                    a & 1024 && (jc = !0);
                break;
            case 6:
                if (pt(t, e),
                    mt(e),
                    a & 4) {
                    if (e.stateNode === null)
                        throw Error(c(162));
                    a = e.memoizedProps,
                        n = e.stateNode;
                    try {
                        n.nodeValue = a
                    } catch (H) {
                        fe(e, e.return, H)
                    }
                }
                break;
            case 3:
                if (Pl = null,
                    i = Tt,
                    Tt = Jl(t.containerInfo),
                    pt(t, e),
                    Tt = i,
                    mt(e),
                    a & 4 && n !== null && n.memoizedState.isDehydrated)
                    try {
                        Bi(t.containerInfo)
                    } catch (H) {
                        fe(e, e.return, H)
                    }
                jc && (jc = !1,
                    Ao(e));
                break;
            case 4:
                a = Tt,
                    Tt = Jl(e.stateNode.containerInfo),
                    pt(t, e),
                    mt(e),
                    Tt = a;
                break;
            case 12:
                pt(t, e),
                    mt(e);
                break;
            case 13:
                pt(t, e),
                    mt(e),
                    e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (Vc = Dt()),
                    a & 4 && (a = e.updateQueue,
                        a !== null && (e.updateQueue = null,
                            Bc(e, a)));
                break;
            case 22:
                if (a & 512 && (ge || n === null || nt(n, n.return)),
                    m = e.memoizedState !== null,
                    _ = n !== null && n.memoizedState !== null,
                    A = Kt,
                    x = ge,
                    Kt = A || m,
                    ge = x || _,
                    pt(t, e),
                    ge = x,
                    Kt = A,
                    mt(e),
                    t = e.stateNode,
                    t._current = e,
                    t._visibility &= -3,
                    t._visibility |= t._pendingVisibility & 2,
                    a & 8192 && (t._visibility = m ? t._visibility & -2 : t._visibility | 1,
                        m && (t = Kt || ge,
                            n === null || _ || t || Ea(e)),
                        e.memoizedProps === null || e.memoizedProps.mode !== "manual"))
                    e: for (n = null,
                        t = e; ;) {
                        if (t.tag === 5 || t.tag === 26 || t.tag === 27) {
                            if (n === null) {
                                _ = n = t;
                                try {
                                    if (i = _.stateNode,
                                        m)
                                        l = i.style,
                                            typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none";
                                    else {
                                        f = _.stateNode,
                                            d = _.memoizedProps.style;
                                        var O = d != null && d.hasOwnProperty("display") ? d.display : null;
                                        f.style.display = O == null || typeof O == "boolean" ? "" : ("" + O).trim()
                                    }
                                } catch (H) {
                                    fe(_, _.return, H)
                                }
                            }
                        } else if (t.tag === 6) {
                            if (n === null) {
                                _ = t;
                                try {
                                    _.stateNode.nodeValue = m ? "" : _.memoizedProps
                                } catch (H) {
                                    fe(_, _.return, H)
                                }
                            }
                        } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                            t.child.return = t,
                                t = t.child;
                            continue
                        }
                        if (t === e)
                            break e;
                        for (; t.sibling === null;) {
                            if (t.return === null || t.return === e)
                                break e;
                            n === t && (n = null),
                                t = t.return
                        }
                        n === t && (n = null),
                            t.sibling.return = t.return,
                            t = t.sibling
                    }
                a & 4 && (a = e.updateQueue,
                    a !== null && (n = a.retryQueue,
                        n !== null && (a.retryQueue = null,
                            Bc(e, n))));
                break;
            case 19:
                pt(t, e),
                    mt(e),
                    a & 4 && (a = e.updateQueue,
                        a !== null && (e.updateQueue = null,
                            Bc(e, a)));
                break;
            case 21:
                break;
            default:
                pt(t, e),
                    mt(e)
        }
    }
    function mt(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                if (e.tag !== 27) {
                    e: {
                        for (var n = e.return; n !== null;) {
                            if (So(n)) {
                                var a = n;
                                break e
                            }
                            n = n.return
                        }
                        throw Error(c(160))
                    }
                    switch (a.tag) {
                        case 27:
                            var i = a.stateNode
                                , l = Uc(e);
                            Ul(e, l, i);
                            break;
                        case 5:
                            var f = a.stateNode;
                            a.flags & 32 && (ca(f, ""),
                                a.flags &= -33);
                            var d = Uc(e);
                            Ul(e, d, f);
                            break;
                        case 3:
                        case 4:
                            var m = a.stateNode.containerInfo
                                , _ = Uc(e);
                            kc(e, _, m);
                            break;
                        default:
                            throw Error(c(161))
                    }
                }
            } catch (A) {
                fe(e, e.return, A)
            }
            e.flags &= -3
        }
        t & 4096 && (e.flags &= -4097)
    }
    function Ao(e) {
        if (e.subtreeFlags & 1024)
            for (e = e.child; e !== null;) {
                var t = e;
                Ao(t),
                    t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
                    e = e.sibling
            }
    }
    function $t(e, t) {
        if (t.subtreeFlags & 8772)
            for (t = t.child; t !== null;)
                Co(e, t.alternate, t),
                    t = t.sibling
    }
    function Ea(e) {
        for (e = e.child; e !== null;) {
            var t = e;
            switch (t.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    gn(4, t, t.return),
                        Ea(t);
                    break;
                case 1:
                    nt(t, t.return);
                    var n = t.stateNode;
                    typeof n.componentWillUnmount == "function" && go(t, t.return, n),
                        Ea(t);
                    break;
                case 26:
                case 27:
                case 5:
                    nt(t, t.return),
                        Ea(t);
                    break;
                case 22:
                    nt(t, t.return),
                        t.memoizedState === null && Ea(t);
                    break;
                default:
                    Ea(t)
            }
            e = e.sibling
        }
    }
    function vn(e, t, n) {
        for (n = n && (t.subtreeFlags & 8772) !== 0,
            t = t.child; t !== null;) {
            var a = t.alternate
                , i = e
                , l = t
                , f = l.flags;
            switch (l.tag) {
                case 0:
                case 11:
                case 15:
                    vn(i, l, n),
                        gi(4, l);
                    break;
                case 1:
                    if (vn(i, l, n),
                        a = l,
                        i = a.stateNode,
                        typeof i.componentDidMount == "function")
                        try {
                            i.componentDidMount()
                        } catch (_) {
                            fe(a, a.return, _)
                        }
                    if (a = l,
                        i = a.updateQueue,
                        i !== null) {
                        var d = a.stateNode;
                        try {
                            var m = i.shared.hiddenCallbacks;
                            if (m !== null)
                                for (i.shared.hiddenCallbacks = null,
                                    i = 0; i < m.length; i++)
                                    po(m[i], d)
                        } catch (_) {
                            fe(a, a.return, _)
                        }
                    }
                    n && f & 64 && yo(l),
                        Zn(l, l.return);
                    break;
                case 26:
                case 27:
                case 5:
                    vn(i, l, n),
                        n && a === null && f & 4 && vo(l),
                        Zn(l, l.return);
                    break;
                case 12:
                    vn(i, l, n);
                    break;
                case 13:
                    vn(i, l, n),
                        n && f & 4 && Do(i, l);
                    break;
                case 22:
                    l.memoizedState === null && vn(i, l, n),
                        Zn(l, l.return);
                    break;
                default:
                    vn(i, l, n)
            }
            t = t.sibling
        }
    }
    function Nc(e, t) {
        var n = null;
        e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool),
            e = null,
            t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool),
            e !== n && (e != null && e.refCount++,
                n != null && ci(n))
    }
    function Hc(e, t) {
        e = null,
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            t = t.memoizedState.cache,
            t !== e && (t.refCount++,
                e != null && ci(e))
    }
    function bn(e, t, n, a) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null;)
                Mo(e, t, n, a),
                    t = t.sibling
    }
    function Mo(e, t, n, a) {
        var i = t.flags;
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
                bn(e, t, n, a),
                    i & 2048 && gi(9, t);
                break;
            case 3:
                bn(e, t, n, a),
                    i & 2048 && (e = null,
                        t.alternate !== null && (e = t.alternate.memoizedState.cache),
                        t = t.memoizedState.cache,
                        t !== e && (t.refCount++,
                            e != null && ci(e)));
                break;
            case 12:
                if (i & 2048) {
                    bn(e, t, n, a),
                        e = t.stateNode;
                    try {
                        var l = t.memoizedProps
                            , f = l.id
                            , d = l.onPostCommit;
                        typeof d == "function" && d(f, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0)
                    } catch (m) {
                        fe(t, t.return, m)
                    }
                } else
                    bn(e, t, n, a);
                break;
            case 23:
                break;
            case 22:
                l = t.stateNode,
                    t.memoizedState !== null ? l._visibility & 4 ? bn(e, t, n, a) : vi(e, t) : l._visibility & 4 ? bn(e, t, n, a) : (l._visibility |= 4,
                        Ra(e, t, n, a, (t.subtreeFlags & 10256) !== 0)),
                    i & 2048 && Nc(t.alternate, t);
                break;
            case 24:
                bn(e, t, n, a),
                    i & 2048 && Hc(t.alternate, t);
                break;
            default:
                bn(e, t, n, a)
        }
    }
    function Ra(e, t, n, a, i) {
        for (i = i && (t.subtreeFlags & 10256) !== 0,
            t = t.child; t !== null;) {
            var l = e
                , f = t
                , d = n
                , m = a
                , _ = f.flags;
            switch (f.tag) {
                case 0:
                case 11:
                case 15:
                    Ra(l, f, d, m, i),
                        gi(8, f);
                    break;
                case 23:
                    break;
                case 22:
                    var A = f.stateNode;
                    f.memoizedState !== null ? A._visibility & 4 ? Ra(l, f, d, m, i) : vi(l, f) : (A._visibility |= 4,
                        Ra(l, f, d, m, i)),
                        i && _ & 2048 && Nc(f.alternate, f);
                    break;
                case 24:
                    Ra(l, f, d, m, i),
                        i && _ & 2048 && Hc(f.alternate, f);
                    break;
                default:
                    Ra(l, f, d, m, i)
            }
            t = t.sibling
        }
    }
    function vi(e, t) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null;) {
                var n = e
                    , a = t
                    , i = a.flags;
                switch (a.tag) {
                    case 22:
                        vi(n, a),
                            i & 2048 && Nc(a.alternate, a);
                        break;
                    case 24:
                        vi(n, a),
                            i & 2048 && Hc(a.alternate, a);
                        break;
                    default:
                        vi(n, a)
                }
                t = t.sibling
            }
    }
    var bi = 8192;
    function Da(e) {
        if (e.subtreeFlags & bi)
            for (e = e.child; e !== null;)
                xo(e),
                    e = e.sibling
    }
    function xo(e) {
        switch (e.tag) {
            case 26:
                Da(e),
                    e.flags & bi && e.memoizedState !== null && Pm(Tt, e.memoizedState, e.memoizedProps);
                break;
            case 5:
                Da(e);
                break;
            case 3:
            case 4:
                var t = Tt;
                Tt = Jl(e.stateNode.containerInfo),
                    Da(e),
                    Tt = t;
                break;
            case 22:
                e.memoizedState === null && (t = e.alternate,
                    t !== null && t.memoizedState !== null ? (t = bi,
                        bi = 16777216,
                        Da(e),
                        bi = t) : Da(e));
                break;
            default:
                Da(e)
        }
    }
    function zo(e) {
        var t = e.alternate;
        if (t !== null && (e = t.child,
            e !== null)) {
            t.child = null;
            do
                t = e.sibling,
                    e.sibling = null,
                    e = t;
            while (e !== null)
        }
    }
    function Si(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    xe = a,
                        ko(a, e)
                }
            zo(e)
        }
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null;)
                Uo(e),
                    e = e.sibling
    }
    function Uo(e) {
        switch (e.tag) {
            case 0:
            case 11:
            case 15:
                Si(e),
                    e.flags & 2048 && gn(9, e, e.return);
                break;
            case 3:
                Si(e);
                break;
            case 12:
                Si(e);
                break;
            case 22:
                var t = e.stateNode;
                e.memoizedState !== null && t._visibility & 4 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -5,
                    kl(e)) : Si(e);
                break;
            default:
                Si(e)
        }
    }
    function kl(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    xe = a,
                        ko(a, e)
                }
            zo(e)
        }
        for (e = e.child; e !== null;) {
            switch (t = e,
            t.tag) {
                case 0:
                case 11:
                case 15:
                    gn(8, t, t.return),
                        kl(t);
                    break;
                case 22:
                    n = t.stateNode,
                        n._visibility & 4 && (n._visibility &= -5,
                            kl(t));
                    break;
                default:
                    kl(t)
            }
            e = e.sibling
        }
    }
    function ko(e, t) {
        for (; xe !== null;) {
            var n = xe;
            switch (n.tag) {
                case 0:
                case 11:
                case 15:
                    gn(8, n, t);
                    break;
                case 23:
                case 22:
                    if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
                        var a = n.memoizedState.cachePool.pool;
                        a != null && a.refCount++
                    }
                    break;
                case 24:
                    ci(n.memoizedState.cache)
            }
            if (a = n.child,
                a !== null)
                a.return = n,
                    xe = a;
            else
                e: for (n = e; xe !== null;) {
                    a = xe;
                    var i = a.sibling
                        , l = a.return;
                    if (Eo(a),
                        a === n) {
                        xe = null;
                        break e
                    }
                    if (i !== null) {
                        i.return = l,
                            xe = i;
                        break e
                    }
                    xe = l
                }
        }
    }
    function rm(e, t, n, a) {
        this.tag = e,
            this.key = n,
            this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
            this.index = 0,
            this.refCleanup = this.ref = null,
            this.pendingProps = t,
            this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
            this.mode = a,
            this.subtreeFlags = this.flags = 0,
            this.deletions = null,
            this.childLanes = this.lanes = 0,
            this.alternate = null
    }
    function yt(e, t, n, a) {
        return new rm(e, t, n, a)
    }
    function Lc(e) {
        return e = e.prototype,
            !(!e || !e.isReactComponent)
    }
    function Sn(e, t) {
        var n = e.alternate;
        return n === null ? (n = yt(e.tag, t, e.key, e.mode),
            n.elementType = e.elementType,
            n.type = e.type,
            n.stateNode = e.stateNode,
            n.alternate = e,
            e.alternate = n) : (n.pendingProps = t,
                n.type = e.type,
                n.flags = 0,
                n.subtreeFlags = 0,
                n.deletions = null),
            n.flags = e.flags & 31457280,
            n.childLanes = e.childLanes,
            n.lanes = e.lanes,
            n.child = e.child,
            n.memoizedProps = e.memoizedProps,
            n.memoizedState = e.memoizedState,
            n.updateQueue = e.updateQueue,
            t = e.dependencies,
            n.dependencies = t === null ? null : {
                lanes: t.lanes,
                firstContext: t.firstContext
            },
            n.sibling = e.sibling,
            n.index = e.index,
            n.ref = e.ref,
            n.refCleanup = e.refCleanup,
            n
    }
    function jo(e, t) {
        e.flags &= 31457282;
        var n = e.alternate;
        return n === null ? (e.childLanes = 0,
            e.lanes = t,
            e.child = null,
            e.subtreeFlags = 0,
            e.memoizedProps = null,
            e.memoizedState = null,
            e.updateQueue = null,
            e.dependencies = null,
            e.stateNode = null) : (e.childLanes = n.childLanes,
                e.lanes = n.lanes,
                e.child = n.child,
                e.subtreeFlags = 0,
                e.deletions = null,
                e.memoizedProps = n.memoizedProps,
                e.memoizedState = n.memoizedState,
                e.updateQueue = n.updateQueue,
                e.type = n.type,
                t = n.dependencies,
                e.dependencies = t === null ? null : {
                    lanes: t.lanes,
                    firstContext: t.firstContext
                }),
            e
    }
    function jl(e, t, n, a, i, l) {
        var f = 0;
        if (a = e,
            typeof e == "function")
            Lc(e) && (f = 1);
        else if (typeof e == "string")
            f = Jm(e, n, Rt.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
        else
            e: switch (e) {
                case v:
                    return Kn(n.children, i, l, t);
                case y:
                    f = 8,
                        i |= 24;
                    break;
                case C:
                    return e = yt(12, n, t, i | 2),
                        e.elementType = C,
                        e.lanes = l,
                        e;
                case ce:
                    return e = yt(13, n, t, i),
                        e.elementType = ce,
                        e.lanes = l,
                        e;
                case we:
                    return e = yt(19, n, t, i),
                        e.elementType = we,
                        e.lanes = l,
                        e;
                case bt:
                    return Bo(n, i, l, t);
                default:
                    if (typeof e == "object" && e !== null)
                        switch (e.$$typeof) {
                            case D:
                            case L:
                                f = 10;
                                break e;
                            case U:
                                f = 9;
                                break e;
                            case I:
                                f = 11;
                                break e;
                            case jt:
                                f = 14;
                                break e;
                            case Ge:
                                f = 16,
                                    a = null;
                                break e
                        }
                    f = 29,
                        n = Error(c(130, e === null ? "null" : typeof e, "")),
                        a = null
            }
        return t = yt(f, n, t, i),
            t.elementType = e,
            t.type = a,
            t.lanes = l,
            t
    }
    function Kn(e, t, n, a) {
        return e = yt(7, e, a, t),
            e.lanes = n,
            e
    }
    function Bo(e, t, n, a) {
        e = yt(22, e, a, t),
            e.elementType = bt,
            e.lanes = n;
        var i = {
            _visibility: 1,
            _pendingVisibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
            _current: null,
            detach: function () {
                var l = i._current;
                if (l === null)
                    throw Error(c(456));
                if ((i._pendingVisibility & 2) === 0) {
                    var f = rn(l, 2);
                    f !== null && (i._pendingVisibility |= 2,
                        Ve(f, l, 2))
                }
            },
            attach: function () {
                var l = i._current;
                if (l === null)
                    throw Error(c(456));
                if ((i._pendingVisibility & 2) !== 0) {
                    var f = rn(l, 2);
                    f !== null && (i._pendingVisibility &= -3,
                        Ve(f, l, 2))
                }
            }
        };
        return e.stateNode = i,
            e
    }
    function qc(e, t, n) {
        return e = yt(6, e, null, t),
            e.lanes = n,
            e
    }
    function Yc(e, t, n) {
        return t = yt(4, e.children !== null ? e.children : [], e.key, t),
            t.lanes = n,
            t.stateNode = {
                containerInfo: e.containerInfo,
                pendingChildren: null,
                implementation: e.implementation
            },
            t
    }
    function Pt(e) {
        e.flags |= 4
    }
    function No(e, t) {
        if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
            e.flags &= -16777217;
        else if (e.flags |= 16777216,
            !Sd(t)) {
            if (t = ht.current,
                t !== null && ((te & 4194176) === te ? At !== null : (te & 62914560) !== te && (te & 536870912) === 0 || t !== At))
                throw ii = Zu,
                Ws;
            e.flags |= 8192
        }
    }
    function Bl(e, t) {
        t !== null && (e.flags |= 4),
            e.flags & 16384 && (t = e.tag !== 22 ? wr() : 536870912,
                e.lanes |= t,
                Aa |= t)
    }
    function _i(e, t) {
        if (!ne)
            switch (e.tailMode) {
                case "hidden":
                    t = e.tail;
                    for (var n = null; t !== null;)
                        t.alternate !== null && (n = t),
                            t = t.sibling;
                    n === null ? e.tail = null : n.sibling = null;
                    break;
                case "collapsed":
                    n = e.tail;
                    for (var a = null; n !== null;)
                        n.alternate !== null && (a = n),
                            n = n.sibling;
                    a === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : a.sibling = null
            }
    }
    function me(e) {
        var t = e.alternate !== null && e.alternate.child === e.child
            , n = 0
            , a = 0;
        if (t)
            for (var i = e.child; i !== null;)
                n |= i.lanes | i.childLanes,
                    a |= i.subtreeFlags & 31457280,
                    a |= i.flags & 31457280,
                    i.return = e,
                    i = i.sibling;
        else
            for (i = e.child; i !== null;)
                n |= i.lanes | i.childLanes,
                    a |= i.subtreeFlags,
                    a |= i.flags,
                    i.return = e,
                    i = i.sibling;
        return e.subtreeFlags |= a,
            e.childLanes = n,
            t
    }
    function sm(e, t, n) {
        var a = t.pendingProps;
        switch (Qu(t),
        t.tag) {
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return me(t),
                    null;
            case 1:
                return me(t),
                    null;
            case 3:
                return n = t.stateNode,
                    a = null,
                    e !== null && (a = e.memoizedState.cache),
                    t.memoizedState.cache !== a && (t.flags |= 2048),
                    Zt(Oe),
                    ta(),
                    n.pendingContext && (n.context = n.pendingContext,
                        n.pendingContext = null),
                    (e === null || e.child === null) && (ei(t) ? Pt(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024,
                        _t !== null && ($c(_t),
                            _t = null))),
                    me(t),
                    null;
            case 26:
                return n = t.memoizedState,
                    e === null ? (Pt(t),
                        n !== null ? (me(t),
                            No(t, n)) : (me(t),
                                t.flags &= -16777217)) : n ? n !== e.memoizedState ? (Pt(t),
                                    me(t),
                                    No(t, n)) : (me(t),
                                        t.flags &= -16777217) : (e.memoizedProps !== a && Pt(t),
                                            me(t),
                                            t.flags &= -16777217),
                    null;
            case 27:
                Ji(t),
                    n = an.current;
                var i = t.type;
                if (e !== null && t.stateNode != null)
                    e.memoizedProps !== a && Pt(t);
                else {
                    if (!a) {
                        if (t.stateNode === null)
                            throw Error(c(166));
                        return me(t),
                            null
                    }
                    e = Rt.current,
                        ei(t) ? Ps(t) : (e = dd(i, a, n),
                            t.stateNode = e,
                            Pt(t))
                }
                return me(t),
                    null;
            case 5:
                if (Ji(t),
                    n = t.type,
                    e !== null && t.stateNode != null)
                    e.memoizedProps !== a && Pt(t);
                else {
                    if (!a) {
                        if (t.stateNode === null)
                            throw Error(c(166));
                        return me(t),
                            null
                    }
                    if (e = Rt.current,
                        ei(t))
                        Ps(t);
                    else {
                        switch (i = Kl(an.current),
                        e) {
                            case 1:
                                e = i.createElementNS("http://www.w3.org/2000/svg", n);
                                break;
                            case 2:
                                e = i.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                                break;
                            default:
                                switch (n) {
                                    case "svg":
                                        e = i.createElementNS("http://www.w3.org/2000/svg", n);
                                        break;
                                    case "math":
                                        e = i.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                                        break;
                                    case "script":
                                        e = i.createElement("div"),
                                            e.innerHTML = "<script><\/script>",
                                            e = e.removeChild(e.firstChild);
                                        break;
                                    case "select":
                                        e = typeof a.is == "string" ? i.createElement("select", {
                                            is: a.is
                                        }) : i.createElement("select"),
                                            a.multiple ? e.multiple = !0 : a.size && (e.size = a.size);
                                        break;
                                    default:
                                        e = typeof a.is == "string" ? i.createElement(n, {
                                            is: a.is
                                        }) : i.createElement(n)
                                }
                        }
                        e[He] = t,
                            e[$e] = a;
                        e: for (i = t.child; i !== null;) {
                            if (i.tag === 5 || i.tag === 6)
                                e.appendChild(i.stateNode);
                            else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                                i.child.return = i,
                                    i = i.child;
                                continue
                            }
                            if (i === t)
                                break e;
                            for (; i.sibling === null;) {
                                if (i.return === null || i.return === t)
                                    break e;
                                i = i.return
                            }
                            i.sibling.return = i.return,
                                i = i.sibling
                        }
                        t.stateNode = e;
                        e: switch (Be(e, n, a),
                        n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                e = !!a.autoFocus;
                                break e;
                            case "img":
                                e = !0;
                                break e;
                            default:
                                e = !1
                        }
                        e && Pt(t)
                    }
                }
                return me(t),
                    t.flags &= -16777217,
                    null;
            case 6:
                if (e && t.stateNode != null)
                    e.memoizedProps !== a && Pt(t);
                else {
                    if (typeof a != "string" && t.stateNode === null)
                        throw Error(c(166));
                    if (e = an.current,
                        ei(t)) {
                        if (e = t.stateNode,
                            n = t.memoizedProps,
                            a = null,
                            i = Qe,
                            i !== null)
                            switch (i.tag) {
                                case 27:
                                case 5:
                                    a = i.memoizedProps
                            }
                        e[He] = t,
                            e = !!(e.nodeValue === n || a !== null && a.suppressHydrationWarning === !0 || ud(e.nodeValue, n)),
                            e || Nn(t)
                    } else
                        e = Kl(e).createTextNode(a),
                            e[He] = t,
                            t.stateNode = e
                }
                return me(t),
                    null;
            case 13:
                if (a = t.memoizedState,
                    e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                    if (i = ei(t),
                        a !== null && a.dehydrated !== null) {
                        if (e === null) {
                            if (!i)
                                throw Error(c(318));
                            if (i = t.memoizedState,
                                i = i !== null ? i.dehydrated : null,
                                !i)
                                throw Error(c(317));
                            i[He] = t
                        } else
                            ti(),
                                (t.flags & 128) === 0 && (t.memoizedState = null),
                                t.flags |= 4;
                        me(t),
                            i = !1
                    } else
                        _t !== null && ($c(_t),
                            _t = null),
                            i = !0;
                    if (!i)
                        return t.flags & 256 ? (Gt(t),
                            t) : (Gt(t),
                                null)
                }
                if (Gt(t),
                    (t.flags & 128) !== 0)
                    return t.lanes = n,
                        t;
                if (n = a !== null,
                    e = e !== null && e.memoizedState !== null,
                    n) {
                    a = t.child,
                        i = null,
                        a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (i = a.alternate.memoizedState.cachePool.pool);
                    var l = null;
                    a.memoizedState !== null && a.memoizedState.cachePool !== null && (l = a.memoizedState.cachePool.pool),
                        l !== i && (a.flags |= 2048)
                }
                return n !== e && n && (t.child.flags |= 8192),
                    Bl(t, t.updateQueue),
                    me(t),
                    null;
            case 4:
                return ta(),
                    e === null && lr(t.stateNode.containerInfo),
                    me(t),
                    null;
            case 10:
                return Zt(t.type),
                    me(t),
                    null;
            case 19:
                if (Te(De),
                    i = t.memoizedState,
                    i === null)
                    return me(t),
                        null;
                if (a = (t.flags & 128) !== 0,
                    l = i.rendering,
                    l === null)
                    if (a)
                        _i(i, !1);
                    else {
                        if (ve !== 0 || e !== null && (e.flags & 128) !== 0)
                            for (e = t.child; e !== null;) {
                                if (l = vl(e),
                                    l !== null) {
                                    for (t.flags |= 128,
                                        _i(i, !1),
                                        e = l.updateQueue,
                                        t.updateQueue = e,
                                        Bl(t, e),
                                        t.subtreeFlags = 0,
                                        e = n,
                                        n = t.child; n !== null;)
                                        jo(n, e),
                                            n = n.sibling;
                                    return pe(De, De.current & 1 | 2),
                                        t.child
                                }
                                e = e.sibling
                            }
                        i.tail !== null && Dt() > Nl && (t.flags |= 128,
                            a = !0,
                            _i(i, !1),
                            t.lanes = 4194304)
                    }
                else {
                    if (!a)
                        if (e = vl(l),
                            e !== null) {
                            if (t.flags |= 128,
                                a = !0,
                                e = e.updateQueue,
                                t.updateQueue = e,
                                Bl(t, e),
                                _i(i, !0),
                                i.tail === null && i.tailMode === "hidden" && !l.alternate && !ne)
                                return me(t),
                                    null
                        } else
                            2 * Dt() - i.renderingStartTime > Nl && n !== 536870912 && (t.flags |= 128,
                                a = !0,
                                _i(i, !1),
                                t.lanes = 4194304);
                    i.isBackwards ? (l.sibling = t.child,
                        t.child = l) : (e = i.last,
                            e !== null ? e.sibling = l : t.child = l,
                            i.last = l)
                }
                return i.tail !== null ? (t = i.tail,
                    i.rendering = t,
                    i.tail = t.sibling,
                    i.renderingStartTime = Dt(),
                    t.sibling = null,
                    e = De.current,
                    pe(De, a ? e & 1 | 2 : e & 1),
                    t) : (me(t),
                        null);
            case 22:
            case 23:
                return Gt(t),
                    Ju(),
                    a = t.memoizedState !== null,
                    e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192),
                    a ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (me(t),
                        t.subtreeFlags & 6 && (t.flags |= 8192)) : me(t),
                    n = t.updateQueue,
                    n !== null && Bl(t, n.retryQueue),
                    n = null,
                    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool),
                    a = null,
                    t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool),
                    a !== n && (t.flags |= 2048),
                    e !== null && Te(Ln),
                    null;
            case 24:
                return n = null,
                    e !== null && (n = e.memoizedState.cache),
                    t.memoizedState.cache !== n && (t.flags |= 2048),
                    Zt(Oe),
                    me(t),
                    null;
            case 25:
                return null
        }
        throw Error(c(156, t.tag))
    }
    function fm(e, t) {
        switch (Qu(t),
        t.tag) {
            case 1:
                return e = t.flags,
                    e & 65536 ? (t.flags = e & -65537 | 128,
                        t) : null;
            case 3:
                return Zt(Oe),
                    ta(),
                    e = t.flags,
                    (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128,
                        t) : null;
            case 26:
            case 27:
            case 5:
                return Ji(t),
                    null;
            case 13:
                if (Gt(t),
                    e = t.memoizedState,
                    e !== null && e.dehydrated !== null) {
                    if (t.alternate === null)
                        throw Error(c(340));
                    ti()
                }
                return e = t.flags,
                    e & 65536 ? (t.flags = e & -65537 | 128,
                        t) : null;
            case 19:
                return Te(De),
                    null;
            case 4:
                return ta(),
                    null;
            case 10:
                return Zt(t.type),
                    null;
            case 22:
            case 23:
                return Gt(t),
                    Ju(),
                    e !== null && Te(Ln),
                    e = t.flags,
                    e & 65536 ? (t.flags = e & -65537 | 128,
                        t) : null;
            case 24:
                return Zt(Oe),
                    null;
            case 25:
                return null;
            default:
                return null
        }
    }
    function Ho(e, t) {
        switch (Qu(t),
        t.tag) {
            case 3:
                Zt(Oe),
                    ta();
                break;
            case 26:
            case 27:
            case 5:
                Ji(t);
                break;
            case 4:
                ta();
                break;
            case 13:
                Gt(t);
                break;
            case 19:
                Te(De);
                break;
            case 10:
                Zt(t.type);
                break;
            case 22:
            case 23:
                Gt(t),
                    Ju(),
                    e !== null && Te(Ln);
                break;
            case 24:
                Zt(Oe)
        }
    }
    var om = {
        getCacheForType: function (e) {
            var t = Le(Oe)
                , n = t.data.get(e);
            return n === void 0 && (n = e(),
                t.data.set(e, n)),
                n
        }
    }
        , dm = typeof WeakMap == "function" ? WeakMap : Map
        , ye = 0
        , de = null
        , W = null
        , te = 0
        , he = 0
        , it = null
        , Ft = !1
        , Oa = !1
        , Gc = !1
        , Wt = 0
        , ve = 0
        , _n = 0
        , Jn = 0
        , Xc = 0
        , gt = 0
        , Aa = 0
        , Ti = null
        , xt = null
        , Qc = !1
        , Vc = 0
        , Nl = 1 / 0
        , Hl = null
        , Tn = null
        , Ll = !1
        , $n = null
        , Ci = 0
        , Zc = 0
        , Kc = null
        , Ei = 0
        , Jc = null;
    function lt() {
        if ((ye & 2) !== 0 && te !== 0)
            return te & -te;
        if (X.T !== null) {
            var e = ba;
            return e !== 0 ? e : tr()
        }
        return ns()
    }
    function Lo() {
        gt === 0 && (gt = (te & 536870912) === 0 || ne ? Wr() : 536870912);
        var e = ht.current;
        return e !== null && (e.flags |= 32),
            gt
    }
    function Ve(e, t, n) {
        (e === de && he === 2 || e.cancelPendingCommit !== null) && (Ma(e, 0),
            wt(e, te, gt, !1)),
            Xa(e, n),
            ((ye & 2) === 0 || e !== de) && (e === de && ((ye & 2) === 0 && (Jn |= n),
                ve === 4 && wt(e, te, gt, !1)),
                zt(e))
    }
    function qo(e, t, n) {
        if ((ye & 6) !== 0)
            throw Error(c(327));
        var a = !n && (t & 60) === 0 && (t & e.expiredLanes) === 0 || Ga(e, t)
            , i = a ? mm(e, t) : Wc(e, t, !0)
            , l = a;
        do {
            if (i === 0) {
                Oa && !a && wt(e, t, 0, !1);
                break
            } else if (i === 6)
                wt(e, t, 0, !Ft);
            else {
                if (n = e.current.alternate,
                    l && !hm(n)) {
                    i = Wc(e, t, !1),
                        l = !1;
                    continue
                }
                if (i === 2) {
                    if (l = t,
                        e.errorRecoveryDisabledLanes & l)
                        var f = 0;
                    else
                        f = e.pendingLanes & -536870913,
                            f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
                    if (f !== 0) {
                        t = f;
                        e: {
                            var d = e;
                            i = Ti;
                            var m = d.current.memoizedState.isDehydrated;
                            if (m && (Ma(d, f).flags |= 256),
                                f = Wc(d, f, !1),
                                f !== 2) {
                                if (Gc && !m) {
                                    d.errorRecoveryDisabledLanes |= l,
                                        Jn |= l,
                                        i = 4;
                                    break e
                                }
                                l = xt,
                                    xt = i,
                                    l !== null && $c(l)
                            }
                            i = f
                        }
                        if (l = !1,
                            i !== 2)
                            continue
                    }
                }
                if (i === 1) {
                    Ma(e, 0),
                        wt(e, t, 0, !0);
                    break
                }
                e: {
                    switch (a = e,
                    i) {
                        case 0:
                        case 1:
                            throw Error(c(345));
                        case 4:
                            if ((t & 4194176) === t) {
                                wt(a, t, gt, !Ft);
                                break e
                            }
                            break;
                        case 2:
                            xt = null;
                            break;
                        case 3:
                        case 5:
                            break;
                        default:
                            throw Error(c(329))
                    }
                    if (a.finishedWork = n,
                        a.finishedLanes = t,
                        (t & 62914560) === t && (l = Vc + 300 - Dt(),
                            10 < l)) {
                        if (wt(a, t, gt, !Ft),
                            Wi(a, 0) !== 0)
                            break e;
                        a.timeoutHandle = sd(Yo.bind(null, a, n, xt, Hl, Qc, t, gt, Jn, Aa, Ft, 2, -0, 0), l);
                        break e
                    }
                    Yo(a, n, xt, Hl, Qc, t, gt, Jn, Aa, Ft, 0, -0, 0)
                }
            }
            break
        } while (!0);
        zt(e)
    }
    function $c(e) {
        xt === null ? xt = e : xt.push.apply(xt, e)
    }
    function Yo(e, t, n, a, i, l, f, d, m, _, A, x, R) {
        var O = t.subtreeFlags;
        if ((O & 8192 || (O & 16785408) === 16785408) && (xi = {
            stylesheets: null,
            count: 0,
            unsuspend: $m
        },
            xo(t),
            t = Fm(),
            t !== null)) {
            e.cancelPendingCommit = t(Jo.bind(null, e, n, a, i, f, d, m, 1, x, R)),
                wt(e, l, f, !_);
            return
        }
        Jo(e, n, a, i, f, d, m, A, x, R)
    }
    function hm(e) {
        for (var t = e; ;) {
            var n = t.tag;
            if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue,
                n !== null && (n = n.stores,
                    n !== null)))
                for (var a = 0; a < n.length; a++) {
                    var i = n[a]
                        , l = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!tt(l(), i))
                            return !1
                    } catch {
                        return !1
                    }
                }
            if (n = t.child,
                t.subtreeFlags & 16384 && n !== null)
                n.return = t,
                    t = n;
            else {
                if (t === e)
                    break;
                for (; t.sibling === null;) {
                    if (t.return === null || t.return === e)
                        return !0;
                    t = t.return
                }
                t.sibling.return = t.return,
                    t = t.sibling
            }
        }
        return !0
    }
    function wt(e, t, n, a) {
        t &= ~Xc,
            t &= ~Jn,
            e.suspendedLanes |= t,
            e.pingedLanes &= ~t,
            a && (e.warmLanes |= t),
            a = e.expirationTimes;
        for (var i = t; 0 < i;) {
            var l = 31 - et(i)
                , f = 1 << l;
            a[l] = -1,
                i &= ~f
        }
        n !== 0 && Ir(e, n, t)
    }
    function ql() {
        return (ye & 6) === 0 ? (Ri(0),
            !1) : !0
    }
    function Pc() {
        if (W !== null) {
            if (he === 0)
                var e = W.return;
            else
                e = W,
                    Vt = Qn = null,
                    tc(e),
                    ga = null,
                    li = 0,
                    e = W;
            for (; e !== null;)
                Ho(e.alternate, e),
                    e = e.return;
            W = null
        }
    }
    function Ma(e, t) {
        e.finishedWork = null,
            e.finishedLanes = 0;
        var n = e.timeoutHandle;
        n !== -1 && (e.timeoutHandle = -1,
            Um(n)),
            n = e.cancelPendingCommit,
            n !== null && (e.cancelPendingCommit = null,
                n()),
            Pc(),
            de = e,
            W = n = Sn(e.current, null),
            te = t,
            he = 0,
            it = null,
            Ft = !1,
            Oa = Ga(e, t),
            Gc = !1,
            Aa = gt = Xc = Jn = _n = ve = 0,
            xt = Ti = null,
            Qc = !1,
            (t & 8) !== 0 && (t |= t & 32);
        var a = e.entangledLanes;
        if (a !== 0)
            for (e = e.entanglements,
                a &= t; 0 < a;) {
                var i = 31 - et(a)
                    , l = 1 << i;
                t |= e[i],
                    a &= ~l
            }
        return Wt = t,
            sl(),
            n
    }
    function Go(e, t) {
        P = null,
            X.H = Mt,
            t === ai ? (t = ef(),
                he = 3) : t === Ws ? (t = ef(),
                    he = 4) : he = t === If ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1,
            it = t,
            W === null && (ve = 1,
                Ml(e, ft(t, e.current)))
    }
    function Xo() {
        var e = X.H;
        return X.H = Mt,
            e === null ? Mt : e
    }
    function Qo() {
        var e = X.A;
        return X.A = om,
            e
    }
    function Fc() {
        ve = 4,
            Ft || (te & 4194176) !== te && ht.current !== null || (Oa = !0),
            (_n & 134217727) === 0 && (Jn & 134217727) === 0 || de === null || wt(de, te, gt, !1)
    }
    function Wc(e, t, n) {
        var a = ye;
        ye |= 2;
        var i = Xo()
            , l = Qo();
        (de !== e || te !== t) && (Hl = null,
            Ma(e, t)),
            t = !1;
        var f = ve;
        e: do
            try {
                if (he !== 0 && W !== null) {
                    var d = W
                        , m = it;
                    switch (he) {
                        case 8:
                            Pc(),
                                f = 6;
                            break e;
                        case 3:
                        case 2:
                        case 6:
                            ht.current === null && (t = !0);
                            var _ = he;
                            if (he = 0,
                                it = null,
                                xa(e, d, m, _),
                                n && Oa) {
                                f = 0;
                                break e
                            }
                            break;
                        default:
                            _ = he,
                                he = 0,
                                it = null,
                                xa(e, d, m, _)
                    }
                }
                pm(),
                    f = ve;
                break
            } catch (A) {
                Go(e, A)
            }
        while (!0);
        return t && e.shellSuspendCounter++,
            Vt = Qn = null,
            ye = a,
            X.H = i,
            X.A = l,
            W === null && (de = null,
                te = 0,
                sl()),
            f
    }
    function pm() {
        for (; W !== null;)
            Vo(W)
    }
    function mm(e, t) {
        var n = ye;
        ye |= 2;
        var a = Xo()
            , i = Qo();
        de !== e || te !== t ? (Hl = null,
            Nl = Dt() + 500,
            Ma(e, t)) : Oa = Ga(e, t);
        e: do
            try {
                if (he !== 0 && W !== null) {
                    t = W;
                    var l = it;
                    t: switch (he) {
                        case 1:
                            he = 0,
                                it = null,
                                xa(e, t, l, 1);
                            break;
                        case 2:
                            if (ws(l)) {
                                he = 0,
                                    it = null,
                                    Zo(t);
                                break
                            }
                            t = function () {
                                he === 2 && de === e && (he = 7),
                                    zt(e)
                            }
                                ,
                                l.then(t, t);
                            break e;
                        case 3:
                            he = 7;
                            break e;
                        case 4:
                            he = 5;
                            break e;
                        case 7:
                            ws(l) ? (he = 0,
                                it = null,
                                Zo(t)) : (he = 0,
                                    it = null,
                                    xa(e, t, l, 7));
                            break;
                        case 5:
                            var f = null;
                            switch (W.tag) {
                                case 26:
                                    f = W.memoizedState;
                                case 5:
                                case 27:
                                    var d = W;
                                    if (!f || Sd(f)) {
                                        he = 0,
                                            it = null;
                                        var m = d.sibling;
                                        if (m !== null)
                                            W = m;
                                        else {
                                            var _ = d.return;
                                            _ !== null ? (W = _,
                                                Yl(_)) : W = null
                                        }
                                        break t
                                    }
                            }
                            he = 0,
                                it = null,
                                xa(e, t, l, 5);
                            break;
                        case 6:
                            he = 0,
                                it = null,
                                xa(e, t, l, 6);
                            break;
                        case 8:
                            Pc(),
                                ve = 6;
                            break e;
                        default:
                            throw Error(c(462))
                    }
                }
                ym();
                break
            } catch (A) {
                Go(e, A)
            }
        while (!0);
        return Vt = Qn = null,
            X.H = a,
            X.A = i,
            ye = n,
            W !== null ? 0 : (de = null,
                te = 0,
                sl(),
                ve)
    }
    function ym() {
        for (; W !== null && !Lh();)
            Vo(W)
    }
    function Vo(e) {
        var t = oo(e.alternate, e, Wt);
        e.memoizedProps = e.pendingProps,
            t === null ? Yl(e) : W = t
    }
    function Zo(e) {
        var t = e
            , n = t.alternate;
        switch (t.tag) {
            case 15:
            case 0:
                t = lo(n, t, t.pendingProps, t.type, void 0, te);
                break;
            case 11:
                t = lo(n, t, t.pendingProps, t.type.render, t.ref, te);
                break;
            case 5:
                tc(t);
            default:
                Ho(n, t),
                    t = W = jo(t, Wt),
                    t = oo(n, t, Wt)
        }
        e.memoizedProps = e.pendingProps,
            t === null ? Yl(e) : W = t
    }
    function xa(e, t, n, a) {
        Vt = Qn = null,
            tc(t),
            ga = null,
            li = 0;
        var i = t.return;
        try {
            if (im(e, i, t, n, te)) {
                ve = 1,
                    Ml(e, ft(n, e.current)),
                    W = null;
                return
            }
        } catch (l) {
            if (i !== null)
                throw W = i,
                l;
            ve = 1,
                Ml(e, ft(n, e.current)),
                W = null;
            return
        }
        t.flags & 32768 ? (ne || a === 1 ? e = !0 : Oa || (te & 536870912) !== 0 ? e = !1 : (Ft = e = !0,
            (a === 2 || a === 3 || a === 6) && (a = ht.current,
                a !== null && a.tag === 13 && (a.flags |= 16384))),
            Ko(t, e)) : Yl(t)
    }
    function Yl(e) {
        var t = e;
        do {
            if ((t.flags & 32768) !== 0) {
                Ko(t, Ft);
                return
            }
            e = t.return;
            var n = sm(t.alternate, t, Wt);
            if (n !== null) {
                W = n;
                return
            }
            if (t = t.sibling,
                t !== null) {
                W = t;
                return
            }
            W = t = e
        } while (t !== null);
        ve === 0 && (ve = 5)
    }
    function Ko(e, t) {
        do {
            var n = fm(e.alternate, e);
            if (n !== null) {
                n.flags &= 32767,
                    W = n;
                return
            }
            if (n = e.return,
                n !== null && (n.flags |= 32768,
                    n.subtreeFlags = 0,
                    n.deletions = null),
                !t && (e = e.sibling,
                    e !== null)) {
                W = e;
                return
            }
            W = e = n
        } while (e !== null);
        ve = 6,
            W = null
    }
    function Jo(e, t, n, a, i, l, f, d, m, _) {
        var A = X.T
            , x = j.p;
        try {
            j.p = 2,
                X.T = null,
                gm(e, t, n, a, x, i, l, f, d, m, _)
        } finally {
            X.T = A,
                j.p = x
        }
    }
    function gm(e, t, n, a, i, l, f, d) {
        do
            za();
        while ($n !== null);
        if ((ye & 6) !== 0)
            throw Error(c(327));
        var m = e.finishedWork;
        if (a = e.finishedLanes,
            m === null)
            return null;
        if (e.finishedWork = null,
            e.finishedLanes = 0,
            m === e.current)
            throw Error(c(177));
        e.callbackNode = null,
            e.callbackPriority = 0,
            e.cancelPendingCommit = null;
        var _ = m.lanes | m.childLanes;
        if (_ |= Yu,
            Ph(e, a, _, l, f, d),
            e === de && (W = de = null,
                te = 0),
            (m.subtreeFlags & 10256) === 0 && (m.flags & 10256) === 0 || Ll || (Ll = !0,
                Zc = _,
                Kc = n,
                _m($i, function () {
                    return za(),
                        null
                })),
            n = (m.flags & 15990) !== 0,
            (m.subtreeFlags & 15990) !== 0 || n ? (n = X.T,
                X.T = null,
                l = j.p,
                j.p = 2,
                f = ye,
                ye |= 4,
                um(e, m),
                Oo(m, e),
                Gp(sr, e.containerInfo),
                wl = !!rr,
                sr = rr = null,
                e.current = m,
                Co(e, m.alternate, m),
                qh(),
                ye = f,
                j.p = l,
                X.T = n) : e.current = m,
            Ll ? (Ll = !1,
                $n = e,
                Ci = a) : $o(e, _),
            _ = e.pendingLanes,
            _ === 0 && (Tn = null),
            Vh(m.stateNode),
            zt(e),
            t !== null)
            for (i = e.onRecoverableError,
                m = 0; m < t.length; m++)
                _ = t[m],
                    i(_.value, {
                        componentStack: _.stack
                    });
        return (Ci & 3) !== 0 && za(),
            _ = e.pendingLanes,
            (a & 4194218) !== 0 && (_ & 42) !== 0 ? e === Jc ? Ei++ : (Ei = 0,
                Jc = e) : Ei = 0,
            Ri(0),
            null
    }
    function $o(e, t) {
        (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache,
            t != null && (e.pooledCache = null,
                ci(t)))
    }
    function za() {
        if ($n !== null) {
            var e = $n
                , t = Zc;
            Zc = 0;
            var n = ts(Ci)
                , a = X.T
                , i = j.p;
            try {
                if (j.p = 32 > n ? 32 : n,
                    X.T = null,
                    $n === null)
                    var l = !1;
                else {
                    n = Kc,
                        Kc = null;
                    var f = $n
                        , d = Ci;
                    if ($n = null,
                        Ci = 0,
                        (ye & 6) !== 0)
                        throw Error(c(331));
                    var m = ye;
                    if (ye |= 4,
                        Uo(f.current),
                        Mo(f, f.current, d, n),
                        ye = m,
                        Ri(0, !1),
                        Ie && typeof Ie.onPostCommitFiberRoot == "function")
                        try {
                            Ie.onPostCommitFiberRoot(Ya, f)
                        } catch { }
                    l = !0
                }
                return l
            } finally {
                j.p = i,
                    X.T = a,
                    $o(e, t)
            }
        }
        return !1
    }
    function Po(e, t, n) {
        t = ft(n, t),
            t = mc(e.stateNode, t, 2),
            e = yn(e, t, 2),
            e !== null && (Xa(e, 2),
                zt(e))
    }
    function fe(e, t, n) {
        if (e.tag === 3)
            Po(e, e, n);
        else
            for (; t !== null;) {
                if (t.tag === 3) {
                    Po(t, e, n);
                    break
                } else if (t.tag === 1) {
                    var a = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Tn === null || !Tn.has(a))) {
                        e = ft(n, e),
                            n = Wf(2),
                            a = yn(t, n, 2),
                            a !== null && (wf(n, a, t, e),
                                Xa(a, 2),
                                zt(a));
                        break
                    }
                }
                t = t.return
            }
    }
    function wc(e, t, n) {
        var a = e.pingCache;
        if (a === null) {
            a = e.pingCache = new dm;
            var i = new Set;
            a.set(t, i)
        } else
            i = a.get(t),
                i === void 0 && (i = new Set,
                    a.set(t, i));
        i.has(n) || (Gc = !0,
            i.add(n),
            e = vm.bind(null, e, t, n),
            t.then(e, e))
    }
    function vm(e, t, n) {
        var a = e.pingCache;
        a !== null && a.delete(t),
            e.pingedLanes |= e.suspendedLanes & n,
            e.warmLanes &= ~n,
            de === e && (te & n) === n && (ve === 4 || ve === 3 && (te & 62914560) === te && 300 > Dt() - Vc ? (ye & 2) === 0 && Ma(e, 0) : Xc |= n,
                Aa === te && (Aa = 0)),
            zt(e)
    }
    function Fo(e, t) {
        t === 0 && (t = wr()),
            e = rn(e, t),
            e !== null && (Xa(e, t),
                zt(e))
    }
    function bm(e) {
        var t = e.memoizedState
            , n = 0;
        t !== null && (n = t.retryLane),
            Fo(e, n)
    }
    function Sm(e, t) {
        var n = 0;
        switch (e.tag) {
            case 13:
                var a = e.stateNode
                    , i = e.memoizedState;
                i !== null && (n = i.retryLane);
                break;
            case 19:
                a = e.stateNode;
                break;
            case 22:
                a = e.stateNode._retryCache;
                break;
            default:
                throw Error(c(314))
        }
        a !== null && a.delete(t),
            Fo(e, n)
    }
    function _m(e, t) {
        return yu(e, t)
    }
    var Gl = null
        , Ua = null
        , Ic = !1
        , Xl = !1
        , er = !1
        , Pn = 0;
    function zt(e) {
        e !== Ua && e.next === null && (Ua === null ? Gl = Ua = e : Ua = Ua.next = e),
            Xl = !0,
            Ic || (Ic = !0,
                Cm(Tm))
    }
    function Ri(e, t) {
        if (!er && Xl) {
            er = !0;
            do
                for (var n = !1, a = Gl; a !== null;) {
                    if (e !== 0) {
                        var i = a.pendingLanes;
                        if (i === 0)
                            var l = 0;
                        else {
                            var f = a.suspendedLanes
                                , d = a.pingedLanes;
                            l = (1 << 31 - et(42 | e) + 1) - 1,
                                l &= i & ~(f & ~d),
                                l = l & 201326677 ? l & 201326677 | 1 : l ? l | 2 : 0
                        }
                        l !== 0 && (n = !0,
                            Io(a, l))
                    } else
                        l = te,
                            l = Wi(a, a === de ? l : 0),
                            (l & 3) === 0 || Ga(a, l) || (n = !0,
                                Io(a, l));
                    a = a.next
                }
            while (n);
            er = !1
        }
    }
    function Tm() {
        Xl = Ic = !1;
        var e = 0;
        Pn !== 0 && (zm() && (e = Pn),
            Pn = 0);
        for (var t = Dt(), n = null, a = Gl; a !== null;) {
            var i = a.next
                , l = Wo(a, t);
            l === 0 ? (a.next = null,
                n === null ? Gl = i : n.next = i,
                i === null && (Ua = n)) : (n = a,
                    (e !== 0 || (l & 3) !== 0) && (Xl = !0)),
                a = i
        }
        Ri(e)
    }
    function Wo(e, t) {
        for (var n = e.suspendedLanes, a = e.pingedLanes, i = e.expirationTimes, l = e.pendingLanes & -62914561; 0 < l;) {
            var f = 31 - et(l)
                , d = 1 << f
                , m = i[f];
            m === -1 ? ((d & n) === 0 || (d & a) !== 0) && (i[f] = $h(d, t)) : m <= t && (e.expiredLanes |= d),
                l &= ~d
        }
        if (t = de,
            n = te,
            n = Wi(e, e === t ? n : 0),
            a = e.callbackNode,
            n === 0 || e === t && he === 2 || e.cancelPendingCommit !== null)
            return a !== null && a !== null && gu(a),
                e.callbackNode = null,
                e.callbackPriority = 0;
        if ((n & 3) === 0 || Ga(e, n)) {
            if (t = n & -n,
                t === e.callbackPriority)
                return t;
            switch (a !== null && gu(a),
            ts(n)) {
                case 2:
                case 8:
                    n = Pr;
                    break;
                case 32:
                    n = $i;
                    break;
                case 268435456:
                    n = Fr;
                    break;
                default:
                    n = $i
            }
            return a = wo.bind(null, e),
                n = yu(n, a),
                e.callbackPriority = t,
                e.callbackNode = n,
                t
        }
        return a !== null && a !== null && gu(a),
            e.callbackPriority = 2,
            e.callbackNode = null,
            2
    }
    function wo(e, t) {
        var n = e.callbackNode;
        if (za() && e.callbackNode !== n)
            return null;
        var a = te;
        return a = Wi(e, e === de ? a : 0),
            a === 0 ? null : (qo(e, a, t),
                Wo(e, Dt()),
                e.callbackNode != null && e.callbackNode === n ? wo.bind(null, e) : null)
    }
    function Io(e, t) {
        if (za())
            return null;
        qo(e, t, !0)
    }
    function Cm(e) {
        km(function () {
            (ye & 6) !== 0 ? yu($r, e) : e()
        })
    }
    function tr() {
        return Pn === 0 && (Pn = Wr()),
            Pn
    }
    function ed(e) {
        return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : nl("" + e)
    }
    function td(e, t) {
        var n = t.ownerDocument.createElement("input");
        return n.name = t.name,
            n.value = t.value,
            e.id && n.setAttribute("form", e.id),
            t.parentNode.insertBefore(n, t),
            e = new FormData(e),
            n.parentNode.removeChild(n),
            e
    }
    function Em(e, t, n, a, i) {
        if (t === "submit" && n && n.stateNode === i) {
            var l = ed((i[$e] || null).action)
                , f = a.submitter;
            f && (t = (t = f[$e] || null) ? ed(t.formAction) : f.getAttribute("formAction"),
                t !== null && (l = t,
                    f = null));
            var d = new ul("action", "action", null, a, i);
            e.push({
                event: d,
                listeners: [{
                    instance: null,
                    listener: function () {
                        if (a.defaultPrevented) {
                            if (Pn !== 0) {
                                var m = f ? td(i, f) : new FormData(i);
                                fc(n, {
                                    pending: !0,
                                    data: m,
                                    method: i.method,
                                    action: l
                                }, null, m)
                            }
                        } else
                            typeof l == "function" && (d.preventDefault(),
                                m = f ? td(i, f) : new FormData(i),
                                fc(n, {
                                    pending: !0,
                                    data: m,
                                    method: i.method,
                                    action: l
                                }, l, m))
                    },
                    currentTarget: i
                }]
            })
        }
    }
    for (var nr = 0; nr < Zs.length; nr++) {
        var ar = Zs[nr]
            , Rm = ar.toLowerCase()
            , Dm = ar[0].toUpperCase() + ar.slice(1);
        St(Rm, "on" + Dm)
    }
    St(Ys, "onAnimationEnd"),
        St(Gs, "onAnimationIteration"),
        St(Xs, "onAnimationStart"),
        St("dblclick", "onDoubleClick"),
        St("focusin", "onFocus"),
        St("focusout", "onBlur"),
        St(Qp, "onTransitionRun"),
        St(Vp, "onTransitionStart"),
        St(Zp, "onTransitionCancel"),
        St(Qs, "onTransitionEnd"),
        la("onMouseEnter", ["mouseout", "mouseover"]),
        la("onMouseLeave", ["mouseout", "mouseover"]),
        la("onPointerEnter", ["pointerout", "pointerover"]),
        la("onPointerLeave", ["pointerout", "pointerover"]),
        xn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
        xn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
        xn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
        xn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
        xn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
        xn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Di = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
        , Om = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Di));
    function nd(e, t) {
        t = (t & 4) !== 0;
        for (var n = 0; n < e.length; n++) {
            var a = e[n]
                , i = a.event;
            a = a.listeners;
            e: {
                var l = void 0;
                if (t)
                    for (var f = a.length - 1; 0 <= f; f--) {
                        var d = a[f]
                            , m = d.instance
                            , _ = d.currentTarget;
                        if (d = d.listener,
                            m !== l && i.isPropagationStopped())
                            break e;
                        l = d,
                            i.currentTarget = _;
                        try {
                            l(i)
                        } catch (A) {
                            Al(A)
                        }
                        i.currentTarget = null,
                            l = m
                    }
                else
                    for (f = 0; f < a.length; f++) {
                        if (d = a[f],
                            m = d.instance,
                            _ = d.currentTarget,
                            d = d.listener,
                            m !== l && i.isPropagationStopped())
                            break e;
                        l = d,
                            i.currentTarget = _;
                        try {
                            l(i)
                        } catch (A) {
                            Al(A)
                        }
                        i.currentTarget = null,
                            l = m
                    }
            }
        }
    }
    function w(e, t) {
        var n = t[bu];
        n === void 0 && (n = t[bu] = new Set);
        var a = e + "__bubble";
        n.has(a) || (ad(t, e, 2, !1),
            n.add(a))
    }
    function ir(e, t, n) {
        var a = 0;
        t && (a |= 4),
            ad(n, e, a, t)
    }
    var Ql = "_reactListening" + Math.random().toString(36).slice(2);
    function lr(e) {
        if (!e[Ql]) {
            e[Ql] = !0,
                is.forEach(function (n) {
                    n !== "selectionchange" && (Om.has(n) || ir(n, !1, e),
                        ir(n, !0, e))
                });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[Ql] || (t[Ql] = !0,
                ir("selectionchange", !1, t))
        }
    }
    function ad(e, t, n, a) {
        switch (Dd(t)) {
            case 2:
                var i = Im;
                break;
            case 8:
                i = e0;
                break;
            default:
                i = vr
        }
        n = i.bind(null, t, n, e),
            i = void 0,
            !Ou || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0),
            a ? i !== void 0 ? e.addEventListener(t, n, {
                capture: !0,
                passive: i
            }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
                passive: i
            }) : e.addEventListener(t, n, !1)
    }
    function ur(e, t, n, a, i) {
        var l = a;
        if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
            e: for (; ;) {
                if (a === null)
                    return;
                var f = a.tag;
                if (f === 3 || f === 4) {
                    var d = a.stateNode.containerInfo;
                    if (d === i || d.nodeType === 8 && d.parentNode === i)
                        break;
                    if (f === 4)
                        for (f = a.return; f !== null;) {
                            var m = f.tag;
                            if ((m === 3 || m === 4) && (m = f.stateNode.containerInfo,
                                m === i || m.nodeType === 8 && m.parentNode === i))
                                return;
                            f = f.return
                        }
                    for (; d !== null;) {
                        if (f = Mn(d),
                            f === null)
                            return;
                        if (m = f.tag,
                            m === 5 || m === 6 || m === 26 || m === 27) {
                            a = l = f;
                            continue e
                        }
                        d = d.parentNode
                    }
                }
                a = a.return
            }
        ys(function () {
            var _ = l
                , A = Ru(n)
                , x = [];
            e: {
                var R = Vs.get(e);
                if (R !== void 0) {
                    var O = ul
                        , H = e;
                    switch (e) {
                        case "keypress":
                            if (il(n) === 0)
                                break e;
                        case "keydown":
                        case "keyup":
                            O = Sp;
                            break;
                        case "focusin":
                            H = "focus",
                                O = zu;
                            break;
                        case "focusout":
                            H = "blur",
                                O = zu;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            O = zu;
                            break;
                        case "click":
                            if (n.button === 2)
                                break e;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            O = bs;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            O = rp;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            O = Cp;
                            break;
                        case Ys:
                        case Gs:
                        case Xs:
                            O = op;
                            break;
                        case Qs:
                            O = Rp;
                            break;
                        case "scroll":
                        case "scrollend":
                            O = up;
                            break;
                        case "wheel":
                            O = Op;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            O = hp;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            O = _s;
                            break;
                        case "toggle":
                        case "beforetoggle":
                            O = Mp
                    }
                    var Z = (t & 4) !== 0
                        , be = !Z && (e === "scroll" || e === "scrollend")
                        , T = Z ? R !== null ? R + "Capture" : null : R;
                    Z = [];
                    for (var S = _, E; S !== null;) {
                        var M = S;
                        if (E = M.stateNode,
                            M = M.tag,
                            M !== 5 && M !== 26 && M !== 27 || E === null || T === null || (M = Za(S, T),
                                M != null && Z.push(Oi(S, M, E))),
                            be)
                            break;
                        S = S.return
                    }
                    0 < Z.length && (R = new O(R, H, null, n, A),
                        x.push({
                            event: R,
                            listeners: Z
                        }))
                }
            }
            if ((t & 7) === 0) {
                e: {
                    if (R = e === "mouseover" || e === "pointerover",
                        O = e === "mouseout" || e === "pointerout",
                        R && n !== Eu && (H = n.relatedTarget || n.fromElement) && (Mn(H) || H[na]))
                        break e;
                    if ((O || R) && (R = A.window === A ? A : (R = A.ownerDocument) ? R.defaultView || R.parentWindow : window,
                        O ? (H = n.relatedTarget || n.toElement,
                            O = _,
                            H = H ? Mn(H) : null,
                            H !== null && (be = V(H),
                                Z = H.tag,
                                H !== be || Z !== 5 && Z !== 27 && Z !== 6) && (H = null)) : (O = null,
                                    H = _),
                        O !== H)) {
                        if (Z = bs,
                            M = "onMouseLeave",
                            T = "onMouseEnter",
                            S = "mouse",
                            (e === "pointerout" || e === "pointerover") && (Z = _s,
                                M = "onPointerLeave",
                                T = "onPointerEnter",
                                S = "pointer"),
                            be = O == null ? R : Va(O),
                            E = H == null ? R : Va(H),
                            R = new Z(M, S + "leave", O, n, A),
                            R.target = be,
                            R.relatedTarget = E,
                            M = null,
                            Mn(A) === _ && (Z = new Z(T, S + "enter", H, n, A),
                                Z.target = E,
                                Z.relatedTarget = be,
                                M = Z),
                            be = M,
                            O && H)
                            t: {
                                for (Z = O,
                                    T = H,
                                    S = 0,
                                    E = Z; E; E = ka(E))
                                    S++;
                                for (E = 0,
                                    M = T; M; M = ka(M))
                                    E++;
                                for (; 0 < S - E;)
                                    Z = ka(Z),
                                        S--;
                                for (; 0 < E - S;)
                                    T = ka(T),
                                        E--;
                                for (; S--;) {
                                    if (Z === T || T !== null && Z === T.alternate)
                                        break t;
                                    Z = ka(Z),
                                        T = ka(T)
                                }
                                Z = null
                            }
                        else
                            Z = null;
                        O !== null && id(x, R, O, Z, !1),
                            H !== null && be !== null && id(x, be, H, Z, !0)
                    }
                }
                e: {
                    if (R = _ ? Va(_) : window,
                        O = R.nodeName && R.nodeName.toLowerCase(),
                        O === "select" || O === "input" && R.type === "file")
                        var B = Ms;
                    else if (Os(R))
                        if (xs)
                            B = qp;
                        else {
                            B = Hp;
                            var F = Np
                        }
                    else
                        O = R.nodeName,
                            !O || O.toLowerCase() !== "input" || R.type !== "checkbox" && R.type !== "radio" ? _ && Cu(_.elementType) && (B = Ms) : B = Lp;
                    if (B && (B = B(e, _))) {
                        As(x, B, n, A);
                        break e
                    }
                    F && F(e, R, _),
                        e === "focusout" && _ && R.type === "number" && _.memoizedProps.value != null && Tu(R, "number", R.value)
                }
                switch (F = _ ? Va(_) : window,
                e) {
                    case "focusin":
                        (Os(F) || F.contentEditable === "true") && (oa = F,
                            Hu = _,
                            Ia = null);
                        break;
                    case "focusout":
                        Ia = Hu = oa = null;
                        break;
                    case "mousedown":
                        Lu = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        Lu = !1,
                            Ls(x, n, A);
                        break;
                    case "selectionchange":
                        if (Xp)
                            break;
                    case "keydown":
                    case "keyup":
                        Ls(x, n, A)
                }
                var q;
                if (ku)
                    e: {
                        switch (e) {
                            case "compositionstart":
                                var G = "onCompositionStart";
                                break e;
                            case "compositionend":
                                G = "onCompositionEnd";
                                break e;
                            case "compositionupdate":
                                G = "onCompositionUpdate";
                                break e
                        }
                        G = void 0
                    }
                else
                    fa ? Rs(e, n) && (G = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (G = "onCompositionStart");
                G && (Ts && n.locale !== "ko" && (fa || G !== "onCompositionStart" ? G === "onCompositionEnd" && fa && (q = gs()) : (cn = A,
                    Au = "value" in cn ? cn.value : cn.textContent,
                    fa = !0)),
                    F = Vl(_, G),
                    0 < F.length && (G = new Ss(G, e, null, n, A),
                        x.push({
                            event: G,
                            listeners: F
                        }),
                        q ? G.data = q : (q = Ds(n),
                            q !== null && (G.data = q)))),
                    (q = zp ? Up(e, n) : kp(e, n)) && (G = Vl(_, "onBeforeInput"),
                        0 < G.length && (F = new Ss("onBeforeInput", "beforeinput", null, n, A),
                            x.push({
                                event: F,
                                listeners: G
                            }),
                            F.data = q)),
                    Em(x, e, _, n, A)
            }
            nd(x, t)
        })
    }
    function Oi(e, t, n) {
        return {
            instance: e,
            listener: t,
            currentTarget: n
        }
    }
    function Vl(e, t) {
        for (var n = t + "Capture", a = []; e !== null;) {
            var i = e
                , l = i.stateNode;
            i = i.tag,
                i !== 5 && i !== 26 && i !== 27 || l === null || (i = Za(e, n),
                    i != null && a.unshift(Oi(e, i, l)),
                    i = Za(e, t),
                    i != null && a.push(Oi(e, i, l))),
                e = e.return
        }
        return a
    }
    function ka(e) {
        if (e === null)
            return null;
        do
            e = e.return;
        while (e && e.tag !== 5 && e.tag !== 27);
        return e || null
    }
    function id(e, t, n, a, i) {
        for (var l = t._reactName, f = []; n !== null && n !== a;) {
            var d = n
                , m = d.alternate
                , _ = d.stateNode;
            if (d = d.tag,
                m !== null && m === a)
                break;
            d !== 5 && d !== 26 && d !== 27 || _ === null || (m = _,
                i ? (_ = Za(n, l),
                    _ != null && f.unshift(Oi(n, _, m))) : i || (_ = Za(n, l),
                        _ != null && f.push(Oi(n, _, m)))),
                n = n.return
        }
        f.length !== 0 && e.push({
            event: t,
            listeners: f
        })
    }
    var Am = /\r\n?/g
        , Mm = /\u0000|\uFFFD/g;
    function ld(e) {
        return (typeof e == "string" ? e : "" + e).replace(Am, `
`).replace(Mm, "")
    }
    function ud(e, t) {
        return t = ld(t),
            ld(e) === t
    }
    function Zl() { }
    function se(e, t, n, a, i, l) {
        switch (n) {
            case "children":
                typeof a == "string" ? t === "body" || t === "textarea" && a === "" || ca(e, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && ca(e, "" + a);
                break;
            case "className":
                Ii(e, "class", a);
                break;
            case "tabIndex":
                Ii(e, "tabindex", a);
                break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
                Ii(e, n, a);
                break;
            case "style":
                ps(e, a, l);
                break;
            case "data":
                if (t !== "object") {
                    Ii(e, "data", a);
                    break
                }
            case "src":
            case "href":
                if (a === "" && (t !== "a" || n !== "href")) {
                    e.removeAttribute(n);
                    break
                }
                if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
                    e.removeAttribute(n);
                    break
                }
                a = nl("" + a),
                    e.setAttribute(n, a);
                break;
            case "action":
            case "formAction":
                if (typeof a == "function") {
                    e.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                    break
                } else
                    typeof l == "function" && (n === "formAction" ? (t !== "input" && se(e, t, "name", i.name, i, null),
                        se(e, t, "formEncType", i.formEncType, i, null),
                        se(e, t, "formMethod", i.formMethod, i, null),
                        se(e, t, "formTarget", i.formTarget, i, null)) : (se(e, t, "encType", i.encType, i, null),
                            se(e, t, "method", i.method, i, null),
                            se(e, t, "target", i.target, i, null)));
                if (a == null || typeof a == "symbol" || typeof a == "boolean") {
                    e.removeAttribute(n);
                    break
                }
                a = nl("" + a),
                    e.setAttribute(n, a);
                break;
            case "onClick":
                a != null && (e.onclick = Zl);
                break;
            case "onScroll":
                a != null && w("scroll", e);
                break;
            case "onScrollEnd":
                a != null && w("scrollend", e);
                break;
            case "dangerouslySetInnerHTML":
                if (a != null) {
                    if (typeof a != "object" || !("__html" in a))
                        throw Error(c(61));
                    if (n = a.__html,
                        n != null) {
                        if (i.children != null)
                            throw Error(c(60));
                        e.innerHTML = n
                    }
                }
                break;
            case "multiple":
                e.multiple = a && typeof a != "function" && typeof a != "symbol";
                break;
            case "muted":
                e.muted = a && typeof a != "function" && typeof a != "symbol";
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "ref":
                break;
            case "autoFocus":
                break;
            case "xlinkHref":
                if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
                    e.removeAttribute("xlink:href");
                    break
                }
                n = nl("" + a),
                    e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
                break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
                a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(n, "" + a) : e.removeAttribute(n);
                break;
            case "inert":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
                a && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
                break;
            case "capture":
            case "download":
                a === !0 ? e.setAttribute(n, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(n, a) : e.removeAttribute(n);
                break;
            case "cols":
            case "rows":
            case "size":
            case "span":
                a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? e.setAttribute(n, a) : e.removeAttribute(n);
                break;
            case "rowSpan":
            case "start":
                a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? e.removeAttribute(n) : e.setAttribute(n, a);
                break;
            case "popover":
                w("beforetoggle", e),
                    w("toggle", e),
                    wi(e, "popover", a);
                break;
            case "xlinkActuate":
                Lt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
                break;
            case "xlinkArcrole":
                Lt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
                break;
            case "xlinkRole":
                Lt(e, "http://www.w3.org/1999/xlink", "xlink:role", a);
                break;
            case "xlinkShow":
                Lt(e, "http://www.w3.org/1999/xlink", "xlink:show", a);
                break;
            case "xlinkTitle":
                Lt(e, "http://www.w3.org/1999/xlink", "xlink:title", a);
                break;
            case "xlinkType":
                Lt(e, "http://www.w3.org/1999/xlink", "xlink:type", a);
                break;
            case "xmlBase":
                Lt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
                break;
            case "xmlLang":
                Lt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
                break;
            case "xmlSpace":
                Lt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
                break;
            case "is":
                wi(e, "is", a);
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = ip.get(n) || n,
                    wi(e, n, a))
        }
    }
    function cr(e, t, n, a, i, l) {
        switch (n) {
            case "style":
                ps(e, a, l);
                break;
            case "dangerouslySetInnerHTML":
                if (a != null) {
                    if (typeof a != "object" || !("__html" in a))
                        throw Error(c(61));
                    if (n = a.__html,
                        n != null) {
                        if (i.children != null)
                            throw Error(c(60));
                        e.innerHTML = n
                    }
                }
                break;
            case "children":
                typeof a == "string" ? ca(e, a) : (typeof a == "number" || typeof a == "bigint") && ca(e, "" + a);
                break;
            case "onScroll":
                a != null && w("scroll", e);
                break;
            case "onScrollEnd":
                a != null && w("scrollend", e);
                break;
            case "onClick":
                a != null && (e.onclick = Zl);
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "innerHTML":
            case "ref":
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                if (!ls.hasOwnProperty(n))
                    e: {
                        if (n[0] === "o" && n[1] === "n" && (i = n.endsWith("Capture"),
                            t = n.slice(2, i ? n.length - 7 : void 0),
                            l = e[$e] || null,
                            l = l != null ? l[n] : null,
                            typeof l == "function" && e.removeEventListener(t, l, i),
                            typeof a == "function")) {
                            typeof l != "function" && l !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)),
                                e.addEventListener(t, a, i);
                            break e
                        }
                        n in e ? e[n] = a : a === !0 ? e.setAttribute(n, "") : wi(e, n, a)
                    }
        }
    }
    function Be(e, t, n) {
        switch (t) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "img":
                w("error", e),
                    w("load", e);
                var a = !1, i = !1, l;
                for (l in n)
                    if (n.hasOwnProperty(l)) {
                        var f = n[l];
                        if (f != null)
                            switch (l) {
                                case "src":
                                    a = !0;
                                    break;
                                case "srcSet":
                                    i = !0;
                                    break;
                                case "children":
                                case "dangerouslySetInnerHTML":
                                    throw Error(c(137, t));
                                default:
                                    se(e, t, l, f, n, null)
                            }
                    }
                i && se(e, t, "srcSet", n.srcSet, n, null),
                    a && se(e, t, "src", n.src, n, null);
                return;
            case "input":
                w("invalid", e);
                var d = l = f = i = null
                    , m = null
                    , _ = null;
                for (a in n)
                    if (n.hasOwnProperty(a)) {
                        var A = n[a];
                        if (A != null)
                            switch (a) {
                                case "name":
                                    i = A;
                                    break;
                                case "type":
                                    f = A;
                                    break;
                                case "checked":
                                    m = A;
                                    break;
                                case "defaultChecked":
                                    _ = A;
                                    break;
                                case "value":
                                    l = A;
                                    break;
                                case "defaultValue":
                                    d = A;
                                    break;
                                case "children":
                                case "dangerouslySetInnerHTML":
                                    if (A != null)
                                        throw Error(c(137, t));
                                    break;
                                default:
                                    se(e, t, a, A, n, null)
                            }
                    }
                fs(e, l, d, m, _, f, i, !1),
                    el(e);
                return;
            case "select":
                w("invalid", e),
                    a = f = l = null;
                for (i in n)
                    if (n.hasOwnProperty(i) && (d = n[i],
                        d != null))
                        switch (i) {
                            case "value":
                                l = d;
                                break;
                            case "defaultValue":
                                f = d;
                                break;
                            case "multiple":
                                a = d;
                            default:
                                se(e, t, i, d, n, null)
                        }
                t = l,
                    n = f,
                    e.multiple = !!a,
                    t != null ? ua(e, !!a, t, !1) : n != null && ua(e, !!a, n, !0);
                return;
            case "textarea":
                w("invalid", e),
                    l = i = a = null;
                for (f in n)
                    if (n.hasOwnProperty(f) && (d = n[f],
                        d != null))
                        switch (f) {
                            case "value":
                                a = d;
                                break;
                            case "defaultValue":
                                i = d;
                                break;
                            case "children":
                                l = d;
                                break;
                            case "dangerouslySetInnerHTML":
                                if (d != null)
                                    throw Error(c(91));
                                break;
                            default:
                                se(e, t, f, d, n, null)
                        }
                ds(e, a, i, l),
                    el(e);
                return;
            case "option":
                for (m in n)
                    if (n.hasOwnProperty(m) && (a = n[m],
                        a != null))
                        switch (m) {
                            case "selected":
                                e.selected = a && typeof a != "function" && typeof a != "symbol";
                                break;
                            default:
                                se(e, t, m, a, n, null)
                        }
                return;
            case "dialog":
                w("cancel", e),
                    w("close", e);
                break;
            case "iframe":
            case "object":
                w("load", e);
                break;
            case "video":
            case "audio":
                for (a = 0; a < Di.length; a++)
                    w(Di[a], e);
                break;
            case "image":
                w("error", e),
                    w("load", e);
                break;
            case "details":
                w("toggle", e);
                break;
            case "embed":
            case "source":
            case "link":
                w("error", e),
                    w("load", e);
            case "area":
            case "base":
            case "br":
            case "col":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "track":
            case "wbr":
            case "menuitem":
                for (_ in n)
                    if (n.hasOwnProperty(_) && (a = n[_],
                        a != null))
                        switch (_) {
                            case "children":
                            case "dangerouslySetInnerHTML":
                                throw Error(c(137, t));
                            default:
                                se(e, t, _, a, n, null)
                        }
                return;
            default:
                if (Cu(t)) {
                    for (A in n)
                        n.hasOwnProperty(A) && (a = n[A],
                            a !== void 0 && cr(e, t, A, a, n, void 0));
                    return
                }
        }
        for (d in n)
            n.hasOwnProperty(d) && (a = n[d],
                a != null && se(e, t, d, a, n, null))
    }
    function xm(e, t, n, a) {
        switch (t) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "input":
                var i = null
                    , l = null
                    , f = null
                    , d = null
                    , m = null
                    , _ = null
                    , A = null;
                for (O in n) {
                    var x = n[O];
                    if (n.hasOwnProperty(O) && x != null)
                        switch (O) {
                            case "checked":
                                break;
                            case "value":
                                break;
                            case "defaultValue":
                                m = x;
                            default:
                                a.hasOwnProperty(O) || se(e, t, O, null, a, x)
                        }
                }
                for (var R in a) {
                    var O = a[R];
                    if (x = n[R],
                        a.hasOwnProperty(R) && (O != null || x != null))
                        switch (R) {
                            case "type":
                                l = O;
                                break;
                            case "name":
                                i = O;
                                break;
                            case "checked":
                                _ = O;
                                break;
                            case "defaultChecked":
                                A = O;
                                break;
                            case "value":
                                f = O;
                                break;
                            case "defaultValue":
                                d = O;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (O != null)
                                    throw Error(c(137, t));
                                break;
                            default:
                                O !== x && se(e, t, R, O, a, x)
                        }
                }
                _u(e, f, d, m, _, A, l, i);
                return;
            case "select":
                O = f = d = R = null;
                for (l in n)
                    if (m = n[l],
                        n.hasOwnProperty(l) && m != null)
                        switch (l) {
                            case "value":
                                break;
                            case "multiple":
                                O = m;
                            default:
                                a.hasOwnProperty(l) || se(e, t, l, null, a, m)
                        }
                for (i in a)
                    if (l = a[i],
                        m = n[i],
                        a.hasOwnProperty(i) && (l != null || m != null))
                        switch (i) {
                            case "value":
                                R = l;
                                break;
                            case "defaultValue":
                                d = l;
                                break;
                            case "multiple":
                                f = l;
                            default:
                                l !== m && se(e, t, i, l, a, m)
                        }
                t = d,
                    n = f,
                    a = O,
                    R != null ? ua(e, !!n, R, !1) : !!a != !!n && (t != null ? ua(e, !!n, t, !0) : ua(e, !!n, n ? [] : "", !1));
                return;
            case "textarea":
                O = R = null;
                for (d in n)
                    if (i = n[d],
                        n.hasOwnProperty(d) && i != null && !a.hasOwnProperty(d))
                        switch (d) {
                            case "value":
                                break;
                            case "children":
                                break;
                            default:
                                se(e, t, d, null, a, i)
                        }
                for (f in a)
                    if (i = a[f],
                        l = n[f],
                        a.hasOwnProperty(f) && (i != null || l != null))
                        switch (f) {
                            case "value":
                                R = i;
                                break;
                            case "defaultValue":
                                O = i;
                                break;
                            case "children":
                                break;
                            case "dangerouslySetInnerHTML":
                                if (i != null)
                                    throw Error(c(91));
                                break;
                            default:
                                i !== l && se(e, t, f, i, a, l)
                        }
                os(e, R, O);
                return;
            case "option":
                for (var H in n)
                    if (R = n[H],
                        n.hasOwnProperty(H) && R != null && !a.hasOwnProperty(H))
                        switch (H) {
                            case "selected":
                                e.selected = !1;
                                break;
                            default:
                                se(e, t, H, null, a, R)
                        }
                for (m in a)
                    if (R = a[m],
                        O = n[m],
                        a.hasOwnProperty(m) && R !== O && (R != null || O != null))
                        switch (m) {
                            case "selected":
                                e.selected = R && typeof R != "function" && typeof R != "symbol";
                                break;
                            default:
                                se(e, t, m, R, a, O)
                        }
                return;
            case "img":
            case "link":
            case "area":
            case "base":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "source":
            case "track":
            case "wbr":
            case "menuitem":
                for (var Z in n)
                    R = n[Z],
                        n.hasOwnProperty(Z) && R != null && !a.hasOwnProperty(Z) && se(e, t, Z, null, a, R);
                for (_ in a)
                    if (R = a[_],
                        O = n[_],
                        a.hasOwnProperty(_) && R !== O && (R != null || O != null))
                        switch (_) {
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (R != null)
                                    throw Error(c(137, t));
                                break;
                            default:
                                se(e, t, _, R, a, O)
                        }
                return;
            default:
                if (Cu(t)) {
                    for (var be in n)
                        R = n[be],
                            n.hasOwnProperty(be) && R !== void 0 && !a.hasOwnProperty(be) && cr(e, t, be, void 0, a, R);
                    for (A in a)
                        R = a[A],
                            O = n[A],
                            !a.hasOwnProperty(A) || R === O || R === void 0 && O === void 0 || cr(e, t, A, R, a, O);
                    return
                }
        }
        for (var T in n)
            R = n[T],
                n.hasOwnProperty(T) && R != null && !a.hasOwnProperty(T) && se(e, t, T, null, a, R);
        for (x in a)
            R = a[x],
                O = n[x],
                !a.hasOwnProperty(x) || R === O || R == null && O == null || se(e, t, x, R, a, O)
    }
    var rr = null
        , sr = null;
    function Kl(e) {
        return e.nodeType === 9 ? e : e.ownerDocument
    }
    function cd(e) {
        switch (e) {
            case "http://www.w3.org/2000/svg":
                return 1;
            case "http://www.w3.org/1998/Math/MathML":
                return 2;
            default:
                return 0
        }
    }
    function rd(e, t) {
        if (e === 0)
            switch (t) {
                case "svg":
                    return 1;
                case "math":
                    return 2;
                default:
                    return 0
            }
        return e === 1 && t === "foreignObject" ? 0 : e
    }
    function fr(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var or = null;
    function zm() {
        var e = window.event;
        return e && e.type === "popstate" ? e === or ? !1 : (or = e,
            !0) : (or = null,
                !1)
    }
    var sd = typeof setTimeout == "function" ? setTimeout : void 0
        , Um = typeof clearTimeout == "function" ? clearTimeout : void 0
        , fd = typeof Promise == "function" ? Promise : void 0
        , km = typeof queueMicrotask == "function" ? queueMicrotask : typeof fd < "u" ? function (e) {
            return fd.resolve(null).then(e).catch(jm)
        }
            : sd;
    function jm(e) {
        setTimeout(function () {
            throw e
        })
    }
    function dr(e, t) {
        var n = t
            , a = 0;
        do {
            var i = n.nextSibling;
            if (e.removeChild(n),
                i && i.nodeType === 8)
                if (n = i.data,
                    n === "/$") {
                    if (a === 0) {
                        e.removeChild(i),
                            Bi(t);
                        return
                    }
                    a--
                } else
                    n !== "$" && n !== "$?" && n !== "$!" || a++;
            n = i
        } while (n);
        Bi(t)
    }
    function hr(e) {
        var t = e.firstChild;
        for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
            var n = t;
            switch (t = t.nextSibling,
            n.nodeName) {
                case "HTML":
                case "HEAD":
                case "BODY":
                    hr(n),
                        Su(n);
                    continue;
                case "SCRIPT":
                case "STYLE":
                    continue;
                case "LINK":
                    if (n.rel.toLowerCase() === "stylesheet")
                        continue
            }
            e.removeChild(n)
        }
    }
    function Bm(e, t, n, a) {
        for (; e.nodeType === 1;) {
            var i = n;
            if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden"))
                    break
            } else if (a) {
                if (!e[Qa])
                    switch (t) {
                        case "meta":
                            if (!e.hasAttribute("itemprop"))
                                break;
                            return e;
                        case "link":
                            if (l = e.getAttribute("rel"),
                                l === "stylesheet" && e.hasAttribute("data-precedence"))
                                break;
                            if (l !== i.rel || e.getAttribute("href") !== (i.href == null ? null : i.href) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin) || e.getAttribute("title") !== (i.title == null ? null : i.title))
                                break;
                            return e;
                        case "style":
                            if (e.hasAttribute("data-precedence"))
                                break;
                            return e;
                        case "script":
                            if (l = e.getAttribute("src"),
                                (l !== (i.src == null ? null : i.src) || e.getAttribute("type") !== (i.type == null ? null : i.type) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin)) && l && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                                break;
                            return e;
                        default:
                            return e
                    }
            } else if (t === "input" && e.type === "hidden") {
                var l = i.name == null ? null : "" + i.name;
                if (i.type === "hidden" && e.getAttribute("name") === l)
                    return e
            } else
                return e;
            if (e = Ct(e.nextSibling),
                e === null)
                break
        }
        return null
    }
    function Nm(e, t, n) {
        if (t === "")
            return null;
        for (; e.nodeType !== 3;)
            if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = Ct(e.nextSibling),
                e === null))
                return null;
        return e
    }
    function Ct(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3)
                break;
            if (t === 8) {
                if (t = e.data,
                    t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
                    break;
                if (t === "/$")
                    return null
            }
        }
        return e
    }
    function od(e) {
        e = e.previousSibling;
        for (var t = 0; e;) {
            if (e.nodeType === 8) {
                var n = e.data;
                if (n === "$" || n === "$!" || n === "$?") {
                    if (t === 0)
                        return e;
                    t--
                } else
                    n === "/$" && t++
            }
            e = e.previousSibling
        }
        return null
    }
    function dd(e, t, n) {
        switch (t = Kl(n),
        e) {
            case "html":
                if (e = t.documentElement,
                    !e)
                    throw Error(c(452));
                return e;
            case "head":
                if (e = t.head,
                    !e)
                    throw Error(c(453));
                return e;
            case "body":
                if (e = t.body,
                    !e)
                    throw Error(c(454));
                return e;
            default:
                throw Error(c(451))
        }
    }
    var vt = new Map
        , hd = new Set;
    function Jl(e) {
        return typeof e.getRootNode == "function" ? e.getRootNode() : e.ownerDocument
    }
    var It = j.d;
    j.d = {
        f: Hm,
        r: Lm,
        D: qm,
        C: Ym,
        L: Gm,
        m: Xm,
        X: Vm,
        S: Qm,
        M: Zm
    };
    function Hm() {
        var e = It.f()
            , t = ql();
        return e || t
    }
    function Lm(e) {
        var t = aa(e);
        t !== null && t.tag === 5 && t.type === "form" ? qf(t) : It.r(e)
    }
    var ja = typeof document > "u" ? null : document;
    function pd(e, t, n) {
        var a = ja;
        if (a && typeof t == "string" && t) {
            var i = rt(t);
            i = 'link[rel="' + e + '"][href="' + i + '"]',
                typeof n == "string" && (i += '[crossorigin="' + n + '"]'),
                hd.has(i) || (hd.add(i),
                    e = {
                        rel: e,
                        crossOrigin: n,
                        href: t
                    },
                    a.querySelector(i) === null && (t = a.createElement("link"),
                        Be(t, "link", e),
                        Ae(t),
                        a.head.appendChild(t)))
        }
    }
    function qm(e) {
        It.D(e),
            pd("dns-prefetch", e, null)
    }
    function Ym(e, t) {
        It.C(e, t),
            pd("preconnect", e, t)
    }
    function Gm(e, t, n) {
        It.L(e, t, n);
        var a = ja;
        if (a && e && t) {
            var i = 'link[rel="preload"][as="' + rt(t) + '"]';
            t === "image" && n && n.imageSrcSet ? (i += '[imagesrcset="' + rt(n.imageSrcSet) + '"]',
                typeof n.imageSizes == "string" && (i += '[imagesizes="' + rt(n.imageSizes) + '"]')) : i += '[href="' + rt(e) + '"]';
            var l = i;
            switch (t) {
                case "style":
                    l = Ba(e);
                    break;
                case "script":
                    l = Na(e)
            }
            vt.has(l) || (e = le({
                rel: "preload",
                href: t === "image" && n && n.imageSrcSet ? void 0 : e,
                as: t
            }, n),
                vt.set(l, e),
                a.querySelector(i) !== null || t === "style" && a.querySelector(Ai(l)) || t === "script" && a.querySelector(Mi(l)) || (t = a.createElement("link"),
                    Be(t, "link", e),
                    Ae(t),
                    a.head.appendChild(t)))
        }
    }
    function Xm(e, t) {
        It.m(e, t);
        var n = ja;
        if (n && e) {
            var a = t && typeof t.as == "string" ? t.as : "script"
                , i = 'link[rel="modulepreload"][as="' + rt(a) + '"][href="' + rt(e) + '"]'
                , l = i;
            switch (a) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    l = Na(e)
            }
            if (!vt.has(l) && (e = le({
                rel: "modulepreload",
                href: e
            }, t),
                vt.set(l, e),
                n.querySelector(i) === null)) {
                switch (a) {
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script":
                        if (n.querySelector(Mi(l)))
                            return
                }
                a = n.createElement("link"),
                    Be(a, "link", e),
                    Ae(a),
                    n.head.appendChild(a)
            }
        }
    }
    function Qm(e, t, n) {
        It.S(e, t, n);
        var a = ja;
        if (a && e) {
            var i = ia(a).hoistableStyles
                , l = Ba(e);
            t = t || "default";
            var f = i.get(l);
            if (!f) {
                var d = {
                    loading: 0,
                    preload: null
                };
                if (f = a.querySelector(Ai(l)))
                    d.loading = 5;
                else {
                    e = le({
                        rel: "stylesheet",
                        href: e,
                        "data-precedence": t
                    }, n),
                        (n = vt.get(l)) && pr(e, n);
                    var m = f = a.createElement("link");
                    Ae(m),
                        Be(m, "link", e),
                        m._p = new Promise(function (_, A) {
                            m.onload = _,
                                m.onerror = A
                        }
                        ),
                        m.addEventListener("load", function () {
                            d.loading |= 1
                        }),
                        m.addEventListener("error", function () {
                            d.loading |= 2
                        }),
                        d.loading |= 4,
                        $l(f, t, a)
                }
                f = {
                    type: "stylesheet",
                    instance: f,
                    count: 1,
                    state: d
                },
                    i.set(l, f)
            }
        }
    }
    function Vm(e, t) {
        It.X(e, t);
        var n = ja;
        if (n && e) {
            var a = ia(n).hoistableScripts
                , i = Na(e)
                , l = a.get(i);
            l || (l = n.querySelector(Mi(i)),
                l || (e = le({
                    src: e,
                    async: !0
                }, t),
                    (t = vt.get(i)) && mr(e, t),
                    l = n.createElement("script"),
                    Ae(l),
                    Be(l, "link", e),
                    n.head.appendChild(l)),
                l = {
                    type: "script",
                    instance: l,
                    count: 1,
                    state: null
                },
                a.set(i, l))
        }
    }
    function Zm(e, t) {
        It.M(e, t);
        var n = ja;
        if (n && e) {
            var a = ia(n).hoistableScripts
                , i = Na(e)
                , l = a.get(i);
            l || (l = n.querySelector(Mi(i)),
                l || (e = le({
                    src: e,
                    async: !0,
                    type: "module"
                }, t),
                    (t = vt.get(i)) && mr(e, t),
                    l = n.createElement("script"),
                    Ae(l),
                    Be(l, "link", e),
                    n.head.appendChild(l)),
                l = {
                    type: "script",
                    instance: l,
                    count: 1,
                    state: null
                },
                a.set(i, l))
        }
    }
    function md(e, t, n, a) {
        var i = (i = an.current) ? Jl(i) : null;
        if (!i)
            throw Error(c(446));
        switch (e) {
            case "meta":
            case "title":
                return null;
            case "style":
                return typeof n.precedence == "string" && typeof n.href == "string" ? (t = Ba(n.href),
                    n = ia(i).hoistableStyles,
                    a = n.get(t),
                    a || (a = {
                        type: "style",
                        instance: null,
                        count: 0,
                        state: null
                    },
                        n.set(t, a)),
                    a) : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null
                };
            case "link":
                if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
                    e = Ba(n.href);
                    var l = ia(i).hoistableStyles
                        , f = l.get(e);
                    if (f || (i = i.ownerDocument || i,
                        f = {
                            type: "stylesheet",
                            instance: null,
                            count: 0,
                            state: {
                                loading: 0,
                                preload: null
                            }
                        },
                        l.set(e, f),
                        (l = i.querySelector(Ai(e))) && !l._p && (f.instance = l,
                            f.state.loading = 5),
                        vt.has(e) || (n = {
                            rel: "preload",
                            as: "style",
                            href: n.href,
                            crossOrigin: n.crossOrigin,
                            integrity: n.integrity,
                            media: n.media,
                            hrefLang: n.hrefLang,
                            referrerPolicy: n.referrerPolicy
                        },
                            vt.set(e, n),
                            l || Km(i, e, n, f.state))),
                        t && a === null)
                        throw Error(c(528, ""));
                    return f
                }
                if (t && a !== null)
                    throw Error(c(529, ""));
                return null;
            case "script":
                return t = n.async,
                    n = n.src,
                    typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Na(n),
                        n = ia(i).hoistableScripts,
                        a = n.get(t),
                        a || (a = {
                            type: "script",
                            instance: null,
                            count: 0,
                            state: null
                        },
                            n.set(t, a)),
                        a) : {
                        type: "void",
                        instance: null,
                        count: 0,
                        state: null
                    };
            default:
                throw Error(c(444, e))
        }
    }
    function Ba(e) {
        return 'href="' + rt(e) + '"'
    }
    function Ai(e) {
        return 'link[rel="stylesheet"][' + e + "]"
    }
    function yd(e) {
        return le({}, e, {
            "data-precedence": e.precedence,
            precedence: null
        })
    }
    function Km(e, t, n, a) {
        e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = e.createElement("link"),
            a.preload = t,
            t.addEventListener("load", function () {
                return a.loading |= 1
            }),
            t.addEventListener("error", function () {
                return a.loading |= 2
            }),
            Be(t, "link", n),
            Ae(t),
            e.head.appendChild(t))
    }
    function Na(e) {
        return '[src="' + rt(e) + '"]'
    }
    function Mi(e) {
        return "script[async]" + e
    }
    function gd(e, t, n) {
        if (t.count++,
            t.instance === null)
            switch (t.type) {
                case "style":
                    var a = e.querySelector('style[data-href~="' + rt(n.href) + '"]');
                    if (a)
                        return t.instance = a,
                            Ae(a),
                            a;
                    var i = le({}, n, {
                        "data-href": n.href,
                        "data-precedence": n.precedence,
                        href: null,
                        precedence: null
                    });
                    return a = (e.ownerDocument || e).createElement("style"),
                        Ae(a),
                        Be(a, "style", i),
                        $l(a, n.precedence, e),
                        t.instance = a;
                case "stylesheet":
                    i = Ba(n.href);
                    var l = e.querySelector(Ai(i));
                    if (l)
                        return t.state.loading |= 4,
                            t.instance = l,
                            Ae(l),
                            l;
                    a = yd(n),
                        (i = vt.get(i)) && pr(a, i),
                        l = (e.ownerDocument || e).createElement("link"),
                        Ae(l);
                    var f = l;
                    return f._p = new Promise(function (d, m) {
                        f.onload = d,
                            f.onerror = m
                    }
                    ),
                        Be(l, "link", a),
                        t.state.loading |= 4,
                        $l(l, n.precedence, e),
                        t.instance = l;
                case "script":
                    return l = Na(n.src),
                        (i = e.querySelector(Mi(l))) ? (t.instance = i,
                            Ae(i),
                            i) : (a = n,
                                (i = vt.get(l)) && (a = le({}, n),
                                    mr(a, i)),
                                e = e.ownerDocument || e,
                                i = e.createElement("script"),
                                Ae(i),
                                Be(i, "link", a),
                                e.head.appendChild(i),
                                t.instance = i);
                case "void":
                    return null;
                default:
                    throw Error(c(443, t.type))
            }
        else
            t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance,
                t.state.loading |= 4,
                $l(a, n.precedence, e));
        return t.instance
    }
    function $l(e, t, n) {
        for (var a = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), i = a.length ? a[a.length - 1] : null, l = i, f = 0; f < a.length; f++) {
            var d = a[f];
            if (d.dataset.precedence === t)
                l = d;
            else if (l !== i)
                break
        }
        l ? l.parentNode.insertBefore(e, l.nextSibling) : (t = n.nodeType === 9 ? n.head : n,
            t.insertBefore(e, t.firstChild))
    }
    function pr(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
            e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
            e.title == null && (e.title = t.title)
    }
    function mr(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
            e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
            e.integrity == null && (e.integrity = t.integrity)
    }
    var Pl = null;
    function vd(e, t, n) {
        if (Pl === null) {
            var a = new Map
                , i = Pl = new Map;
            i.set(n, a)
        } else
            i = Pl,
                a = i.get(n),
                a || (a = new Map,
                    i.set(n, a));
        if (a.has(e))
            return a;
        for (a.set(e, null),
            n = n.getElementsByTagName(e),
            i = 0; i < n.length; i++) {
            var l = n[i];
            if (!(l[Qa] || l[He] || e === "link" && l.getAttribute("rel") === "stylesheet") && l.namespaceURI !== "http://www.w3.org/2000/svg") {
                var f = l.getAttribute(t) || "";
                f = e + f;
                var d = a.get(f);
                d ? d.push(l) : a.set(f, [l])
            }
        }
        return a
    }
    function bd(e, t, n) {
        e = e.ownerDocument || e,
            e.head.insertBefore(n, t === "title" ? e.querySelector("head > title") : null)
    }
    function Jm(e, t, n) {
        if (n === 1 || t.itemProp != null)
            return !1;
        switch (e) {
            case "meta":
            case "title":
                return !0;
            case "style":
                if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
                    break;
                return !0;
            case "link":
                if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
                    break;
                switch (t.rel) {
                    case "stylesheet":
                        return e = t.disabled,
                            typeof t.precedence == "string" && e == null;
                    default:
                        return !0
                }
            case "script":
                if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
                    return !0
        }
        return !1
    }
    function Sd(e) {
        return !(e.type === "stylesheet" && (e.state.loading & 3) === 0)
    }
    var xi = null;
    function $m() { }
    function Pm(e, t, n) {
        if (xi === null)
            throw Error(c(475));
        var a = xi;
        if (t.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (t.state.loading & 4) === 0) {
            if (t.instance === null) {
                var i = Ba(n.href)
                    , l = e.querySelector(Ai(i));
                if (l) {
                    e = l._p,
                        e !== null && typeof e == "object" && typeof e.then == "function" && (a.count++,
                            a = Fl.bind(a),
                            e.then(a, a)),
                        t.state.loading |= 4,
                        t.instance = l,
                        Ae(l);
                    return
                }
                l = e.ownerDocument || e,
                    n = yd(n),
                    (i = vt.get(i)) && pr(n, i),
                    l = l.createElement("link"),
                    Ae(l);
                var f = l;
                f._p = new Promise(function (d, m) {
                    f.onload = d,
                        f.onerror = m
                }
                ),
                    Be(l, "link", n),
                    t.instance = l
            }
            a.stylesheets === null && (a.stylesheets = new Map),
                a.stylesheets.set(t, e),
                (e = t.state.preload) && (t.state.loading & 3) === 0 && (a.count++,
                    t = Fl.bind(a),
                    e.addEventListener("load", t),
                    e.addEventListener("error", t))
        }
    }
    function Fm() {
        if (xi === null)
            throw Error(c(475));
        var e = xi;
        return e.stylesheets && e.count === 0 && yr(e, e.stylesheets),
            0 < e.count ? function (t) {
                var n = setTimeout(function () {
                    if (e.stylesheets && yr(e, e.stylesheets),
                        e.unsuspend) {
                        var a = e.unsuspend;
                        e.unsuspend = null,
                            a()
                    }
                }, 6e4);
                return e.unsuspend = t,
                    function () {
                        e.unsuspend = null,
                            clearTimeout(n)
                    }
            }
                : null
    }
    function Fl() {
        if (this.count--,
            this.count === 0) {
            if (this.stylesheets)
                yr(this, this.stylesheets);
            else if (this.unsuspend) {
                var e = this.unsuspend;
                this.unsuspend = null,
                    e()
            }
        }
    }
    var Wl = null;
    function yr(e, t) {
        e.stylesheets = null,
            e.unsuspend !== null && (e.count++,
                Wl = new Map,
                t.forEach(Wm, e),
                Wl = null,
                Fl.call(e))
    }
    function Wm(e, t) {
        if (!(t.state.loading & 4)) {
            var n = Wl.get(e);
            if (n)
                var a = n.get(null);
            else {
                n = new Map,
                    Wl.set(e, n);
                for (var i = e.querySelectorAll("link[data-precedence],style[data-precedence]"), l = 0; l < i.length; l++) {
                    var f = i[l];
                    (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (n.set(f.dataset.precedence, f),
                        a = f)
                }
                a && n.set(null, a)
            }
            i = t.instance,
                f = i.getAttribute("data-precedence"),
                l = n.get(f) || a,
                l === a && n.set(null, i),
                n.set(f, i),
                this.count++,
                a = Fl.bind(this),
                i.addEventListener("load", a),
                i.addEventListener("error", a),
                l ? l.parentNode.insertBefore(i, l.nextSibling) : (e = e.nodeType === 9 ? e.head : e,
                    e.insertBefore(i, e.firstChild)),
                t.state.loading |= 4
        }
    }
    var zi = {
        $$typeof: L,
        Provider: null,
        Consumer: null,
        _currentValue: ee,
        _currentValue2: ee,
        _threadCount: 0
    };
    function wm(e, t, n, a, i, l, f, d) {
        this.tag = 1,
            this.containerInfo = e,
            this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
            this.timeoutHandle = -1,
            this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
            this.callbackPriority = 0,
            this.expirationTimes = vu(-1),
            this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.finishedLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
            this.entanglements = vu(0),
            this.hiddenUpdates = vu(null),
            this.identifierPrefix = a,
            this.onUncaughtError = i,
            this.onCaughtError = l,
            this.onRecoverableError = f,
            this.pooledCache = null,
            this.pooledCacheLanes = 0,
            this.formState = d,
            this.incompleteTransitions = new Map
    }
    function _d(e, t, n, a, i, l, f, d, m, _, A, x) {
        return e = new wm(e, t, n, f, d, m, _, x),
            t = 1,
            l === !0 && (t |= 24),
            l = yt(3, null, null, t),
            e.current = l,
            l.stateNode = e,
            t = $u(),
            t.refCount++,
            e.pooledCache = t,
            t.refCount++,
            l.memoizedState = {
                element: a,
                isDehydrated: n,
                cache: t
            },
            Ac(l),
            e
    }
    function Td(e) {
        return e ? (e = pa,
            e) : pa
    }
    function Cd(e, t, n, a, i, l) {
        i = Td(i),
            a.context === null ? a.context = i : a.pendingContext = i,
            a = mn(t),
            a.payload = {
                element: n
            },
            l = l === void 0 ? null : l,
            l !== null && (a.callback = l),
            n = yn(e, a, t),
            n !== null && (Ve(n, e, t),
                pi(n, e, t))
    }
    function Ed(e, t) {
        if (e = e.memoizedState,
            e !== null && e.dehydrated !== null) {
            var n = e.retryLane;
            e.retryLane = n !== 0 && n < t ? n : t
        }
    }
    function gr(e, t) {
        Ed(e, t),
            (e = e.alternate) && Ed(e, t)
    }
    function Rd(e) {
        if (e.tag === 13) {
            var t = rn(e, 67108864);
            t !== null && Ve(t, e, 67108864),
                gr(e, 67108864)
        }
    }
    var wl = !0;
    function Im(e, t, n, a) {
        var i = X.T;
        X.T = null;
        var l = j.p;
        try {
            j.p = 2,
                vr(e, t, n, a)
        } finally {
            j.p = l,
                X.T = i
        }
    }
    function e0(e, t, n, a) {
        var i = X.T;
        X.T = null;
        var l = j.p;
        try {
            j.p = 8,
                vr(e, t, n, a)
        } finally {
            j.p = l,
                X.T = i
        }
    }
    function vr(e, t, n, a) {
        if (wl) {
            var i = br(a);
            if (i === null)
                ur(e, t, a, Il, n),
                    Od(e, a);
            else if (n0(i, e, t, n, a))
                a.stopPropagation();
            else if (Od(e, a),
                t & 4 && -1 < t0.indexOf(e)) {
                for (; i !== null;) {
                    var l = aa(i);
                    if (l !== null)
                        switch (l.tag) {
                            case 3:
                                if (l = l.stateNode,
                                    l.current.memoizedState.isDehydrated) {
                                    var f = An(l.pendingLanes);
                                    if (f !== 0) {
                                        var d = l;
                                        for (d.pendingLanes |= 2,
                                            d.entangledLanes |= 2; f;) {
                                            var m = 1 << 31 - et(f);
                                            d.entanglements[1] |= m,
                                                f &= ~m
                                        }
                                        zt(l),
                                            (ye & 6) === 0 && (Nl = Dt() + 500,
                                                Ri(0))
                                    }
                                }
                                break;
                            case 13:
                                d = rn(l, 2),
                                    d !== null && Ve(d, l, 2),
                                    ql(),
                                    gr(l, 2)
                        }
                    if (l = br(a),
                        l === null && ur(e, t, a, Il, n),
                        l === i)
                        break;
                    i = l
                }
                i !== null && a.stopPropagation()
            } else
                ur(e, t, a, null, n)
        }
    }
    function br(e) {
        return e = Ru(e),
            Sr(e)
    }
    var Il = null;
    function Sr(e) {
        if (Il = null,
            e = Mn(e),
            e !== null) {
            var t = V(e);
            if (t === null)
                e = null;
            else {
                var n = t.tag;
                if (n === 13) {
                    if (e = oe(t),
                        e !== null)
                        return e;
                    e = null
                } else if (n === 3) {
                    if (t.stateNode.current.memoizedState.isDehydrated)
                        return t.tag === 3 ? t.stateNode.containerInfo : null;
                    e = null
                } else
                    t !== e && (e = null)
            }
        }
        return Il = e,
            null
    }
    function Dd(e) {
        switch (e) {
            case "beforetoggle":
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "toggle":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
                return 2;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 8;
            case "message":
                switch (Yh()) {
                    case $r:
                        return 2;
                    case Pr:
                        return 8;
                    case $i:
                    case Gh:
                        return 32;
                    case Fr:
                        return 268435456;
                    default:
                        return 32
                }
            default:
                return 32
        }
    }
    var _r = !1
        , Cn = null
        , En = null
        , Rn = null
        , Ui = new Map
        , ki = new Map
        , Dn = []
        , t0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function Od(e, t) {
        switch (e) {
            case "focusin":
            case "focusout":
                Cn = null;
                break;
            case "dragenter":
            case "dragleave":
                En = null;
                break;
            case "mouseover":
            case "mouseout":
                Rn = null;
                break;
            case "pointerover":
            case "pointerout":
                Ui.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                ki.delete(t.pointerId)
        }
    }
    function ji(e, t, n, a, i, l) {
        return e === null || e.nativeEvent !== l ? (e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: a,
            nativeEvent: l,
            targetContainers: [i]
        },
            t !== null && (t = aa(t),
                t !== null && Rd(t)),
            e) : (e.eventSystemFlags |= a,
                t = e.targetContainers,
                i !== null && t.indexOf(i) === -1 && t.push(i),
                e)
    }
    function n0(e, t, n, a, i) {
        switch (t) {
            case "focusin":
                return Cn = ji(Cn, e, t, n, a, i),
                    !0;
            case "dragenter":
                return En = ji(En, e, t, n, a, i),
                    !0;
            case "mouseover":
                return Rn = ji(Rn, e, t, n, a, i),
                    !0;
            case "pointerover":
                var l = i.pointerId;
                return Ui.set(l, ji(Ui.get(l) || null, e, t, n, a, i)),
                    !0;
            case "gotpointercapture":
                return l = i.pointerId,
                    ki.set(l, ji(ki.get(l) || null, e, t, n, a, i)),
                    !0
        }
        return !1
    }
    function Ad(e) {
        var t = Mn(e.target);
        if (t !== null) {
            var n = V(t);
            if (n !== null) {
                if (t = n.tag,
                    t === 13) {
                    if (t = oe(n),
                        t !== null) {
                        e.blockedOn = t,
                            Fh(e.priority, function () {
                                if (n.tag === 13) {
                                    var a = lt()
                                        , i = rn(n, a);
                                    i !== null && Ve(i, n, a),
                                        gr(n, a)
                                }
                            });
                        return
                    }
                } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                    return
                }
            }
        }
        e.blockedOn = null
    }
    function eu(e) {
        if (e.blockedOn !== null)
            return !1;
        for (var t = e.targetContainers; 0 < t.length;) {
            var n = br(e.nativeEvent);
            if (n === null) {
                n = e.nativeEvent;
                var a = new n.constructor(n.type, n);
                Eu = a,
                    n.target.dispatchEvent(a),
                    Eu = null
            } else
                return t = aa(n),
                    t !== null && Rd(t),
                    e.blockedOn = n,
                    !1;
            t.shift()
        }
        return !0
    }
    function Md(e, t, n) {
        eu(e) && n.delete(t)
    }
    function a0() {
        _r = !1,
            Cn !== null && eu(Cn) && (Cn = null),
            En !== null && eu(En) && (En = null),
            Rn !== null && eu(Rn) && (Rn = null),
            Ui.forEach(Md),
            ki.forEach(Md)
    }
    function tu(e, t) {
        e.blockedOn === t && (e.blockedOn = null,
            _r || (_r = !0,
                s.unstable_scheduleCallback(s.unstable_NormalPriority, a0)))
    }
    var nu = null;
    function xd(e) {
        nu !== e && (nu = e,
            s.unstable_scheduleCallback(s.unstable_NormalPriority, function () {
                nu === e && (nu = null);
                for (var t = 0; t < e.length; t += 3) {
                    var n = e[t]
                        , a = e[t + 1]
                        , i = e[t + 2];
                    if (typeof a != "function") {
                        if (Sr(a || n) === null)
                            continue;
                        break
                    }
                    var l = aa(n);
                    l !== null && (e.splice(t, 3),
                        t -= 3,
                        fc(l, {
                            pending: !0,
                            data: i,
                            method: n.method,
                            action: a
                        }, a, i))
                }
            }))
    }
    function Bi(e) {
        function t(m) {
            return tu(m, e)
        }
        Cn !== null && tu(Cn, e),
            En !== null && tu(En, e),
            Rn !== null && tu(Rn, e),
            Ui.forEach(t),
            ki.forEach(t);
        for (var n = 0; n < Dn.length; n++) {
            var a = Dn[n];
            a.blockedOn === e && (a.blockedOn = null)
        }
        for (; 0 < Dn.length && (n = Dn[0],
            n.blockedOn === null);)
            Ad(n),
                n.blockedOn === null && Dn.shift();
        if (n = (e.ownerDocument || e).$$reactFormReplay,
            n != null)
            for (a = 0; a < n.length; a += 3) {
                var i = n[a]
                    , l = n[a + 1]
                    , f = i[$e] || null;
                if (typeof l == "function")
                    f || xd(n);
                else if (f) {
                    var d = null;
                    if (l && l.hasAttribute("formAction")) {
                        if (i = l,
                            f = l[$e] || null)
                            d = f.formAction;
                        else if (Sr(i) !== null)
                            continue
                    } else
                        d = f.action;
                    typeof d == "function" ? n[a + 1] = d : (n.splice(a, 3),
                        a -= 3),
                        xd(n)
                }
            }
    }
    function Tr(e) {
        this._internalRoot = e
    }
    au.prototype.render = Tr.prototype.render = function (e) {
        var t = this._internalRoot;
        if (t === null)
            throw Error(c(409));
        var n = t.current
            , a = lt();
        Cd(n, a, e, t, null, null)
    }
        ,
        au.prototype.unmount = Tr.prototype.unmount = function () {
            var e = this._internalRoot;
            if (e !== null) {
                this._internalRoot = null;
                var t = e.containerInfo;
                e.tag === 0 && za(),
                    Cd(e.current, 2, null, e, null, null),
                    ql(),
                    t[na] = null
            }
        }
        ;
    function au(e) {
        this._internalRoot = e
    }
    au.prototype.unstable_scheduleHydration = function (e) {
        if (e) {
            var t = ns();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for (var n = 0; n < Dn.length && t !== 0 && t < Dn[n].priority; n++)
                ;
            Dn.splice(n, 0, e),
                n === 0 && Ad(e)
        }
    }
        ;
    var zd = u.version;
    if (zd !== "19.0.0")
        throw Error(c(527, zd, "19.0.0"));
    j.findDOMNode = function (e) {
        var t = e._reactInternals;
        if (t === void 0)
            throw typeof e.render == "function" ? Error(c(188)) : (e = Object.keys(e).join(","),
                Error(c(268, e)));
        return e = z(t),
            e = e !== null ? Q(e) : null,
            e = e === null ? null : e.stateNode,
            e
    }
        ;
    var i0 = {
        bundleType: 0,
        version: "19.0.0",
        rendererPackageName: "react-dom",
        currentDispatcherRef: X,
        findFiberByHostInstance: Mn,
        reconcilerVersion: "19.0.0"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var iu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!iu.isDisabled && iu.supportsFiber)
            try {
                Ya = iu.inject(i0),
                    Ie = iu
            } catch { }
    }
    return Li.createRoot = function (e, t) {
        if (!o(e))
            throw Error(c(299));
        var n = !1
            , a = ""
            , i = Jf
            , l = $f
            , f = Pf
            , d = null;
        return t != null && (t.unstable_strictMode === !0 && (n = !0),
            t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
            t.onUncaughtError !== void 0 && (i = t.onUncaughtError),
            t.onCaughtError !== void 0 && (l = t.onCaughtError),
            t.onRecoverableError !== void 0 && (f = t.onRecoverableError),
            t.unstable_transitionCallbacks !== void 0 && (d = t.unstable_transitionCallbacks)),
            t = _d(e, 1, !1, null, null, n, a, i, l, f, d, null),
            e[na] = t.current,
            lr(e.nodeType === 8 ? e.parentNode : e),
            new Tr(t)
    }
        ,
        Li.hydrateRoot = function (e, t, n) {
            if (!o(e))
                throw Error(c(299));
            var a = !1
                , i = ""
                , l = Jf
                , f = $f
                , d = Pf
                , m = null
                , _ = null;
            return n != null && (n.unstable_strictMode === !0 && (a = !0),
                n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
                n.onUncaughtError !== void 0 && (l = n.onUncaughtError),
                n.onCaughtError !== void 0 && (f = n.onCaughtError),
                n.onRecoverableError !== void 0 && (d = n.onRecoverableError),
                n.unstable_transitionCallbacks !== void 0 && (m = n.unstable_transitionCallbacks),
                n.formState !== void 0 && (_ = n.formState)),
                t = _d(e, 1, !0, t, n ?? null, a, i, l, f, d, m, _),
                t.context = Td(null),
                n = t.current,
                a = lt(),
                i = mn(a),
                i.callback = null,
                yn(n, i, a),
                t.current.lanes = a,
                Xa(t, a),
                zt(t),
                e[na] = t.current,
                lr(e),
                new au(t)
        }
        ,
        Li.version = "19.0.0",
        Li
}
var Gd;
function g0() {
    if (Gd)
        return Rr.exports;
    Gd = 1;
    function s() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)
            } catch (u) {
                console.error(u)
            }
    }
    return s(),
        Rr.exports = y0(),
        Rr.exports
}
var v0 = g0();
class b0 {
    constructor() {
        this.encoder = new TextEncoder,
            this._pieces = [],
            this._parts = []
    }
    append_buffer(u) {
        this.flush(),
            this._parts.push(u)
    }
    append(u) {
        this._pieces.push(u)
    }
    flush() {
        if (this._pieces.length > 0) {
            const u = new Uint8Array(this._pieces);
            this._parts.push(u),
                this._pieces = []
        }
    }
    toArrayBuffer() {
        const u = [];
        for (const r of this._parts)
            u.push(r);
        return S0(u).buffer
    }
}
function S0(s) {
    let u = 0;
    for (const o of s)
        u += o.byteLength;
    const r = new Uint8Array(u);
    let c = 0;
    for (const o of s) {
        const h = new Uint8Array(o.buffer, o.byteOffset, o.byteLength);
        r.set(h, c),
            c += o.byteLength
    }
    return r
}
function wd(s) {
    return new _0(s).unpack()
}
function Id(s) {
    const u = new T0
        , r = u.pack(s);
    return r instanceof Promise ? r.then(() => u.getBuffer()) : u.getBuffer()
}
class _0 {
    constructor(u) {
        this.index = 0,
            this.dataBuffer = u,
            this.dataView = new Uint8Array(this.dataBuffer),
            this.length = this.dataBuffer.byteLength
    }
    unpack() {
        const u = this.unpack_uint8();
        if (u < 128)
            return u;
        if ((u ^ 224) < 32)
            return (u ^ 224) - 32;
        let r;
        if ((r = u ^ 160) <= 15)
            return this.unpack_raw(r);
        if ((r = u ^ 176) <= 15)
            return this.unpack_string(r);
        if ((r = u ^ 144) <= 15)
            return this.unpack_array(r);
        if ((r = u ^ 128) <= 15)
            return this.unpack_map(r);
        switch (u) {
            case 192:
                return null;
            case 193:
                return;
            case 194:
                return !1;
            case 195:
                return !0;
            case 202:
                return this.unpack_float();
            case 203:
                return this.unpack_double();
            case 204:
                return this.unpack_uint8();
            case 205:
                return this.unpack_uint16();
            case 206:
                return this.unpack_uint32();
            case 207:
                return this.unpack_uint64();
            case 208:
                return this.unpack_int8();
            case 209:
                return this.unpack_int16();
            case 210:
                return this.unpack_int32();
            case 211:
                return this.unpack_int64();
            case 212:
                return;
            case 213:
                return;
            case 214:
                return;
            case 215:
                return;
            case 216:
                return r = this.unpack_uint16(),
                    this.unpack_string(r);
            case 217:
                return r = this.unpack_uint32(),
                    this.unpack_string(r);
            case 218:
                return r = this.unpack_uint16(),
                    this.unpack_raw(r);
            case 219:
                return r = this.unpack_uint32(),
                    this.unpack_raw(r);
            case 220:
                return r = this.unpack_uint16(),
                    this.unpack_array(r);
            case 221:
                return r = this.unpack_uint32(),
                    this.unpack_array(r);
            case 222:
                return r = this.unpack_uint16(),
                    this.unpack_map(r);
            case 223:
                return r = this.unpack_uint32(),
                    this.unpack_map(r)
        }
    }
    unpack_uint8() {
        const u = this.dataView[this.index] & 255;
        return this.index++,
            u
    }
    unpack_uint16() {
        const u = this.read(2)
            , r = (u[0] & 255) * 256 + (u[1] & 255);
        return this.index += 2,
            r
    }
    unpack_uint32() {
        const u = this.read(4)
            , r = ((u[0] * 256 + u[1]) * 256 + u[2]) * 256 + u[3];
        return this.index += 4,
            r
    }
    unpack_uint64() {
        const u = this.read(8)
            , r = ((((((u[0] * 256 + u[1]) * 256 + u[2]) * 256 + u[3]) * 256 + u[4]) * 256 + u[5]) * 256 + u[6]) * 256 + u[7];
        return this.index += 8,
            r
    }
    unpack_int8() {
        const u = this.unpack_uint8();
        return u < 128 ? u : u - 256
    }
    unpack_int16() {
        const u = this.unpack_uint16();
        return u < 32768 ? u : u - 65536
    }
    unpack_int32() {
        const u = this.unpack_uint32();
        return u < 2 ** 31 ? u : u - 2 ** 32
    }
    unpack_int64() {
        const u = this.unpack_uint64();
        return u < 2 ** 63 ? u : u - 2 ** 64
    }
    unpack_raw(u) {
        if (this.length < this.index + u)
            throw new Error(`BinaryPackFailure: index is out of range ${this.index} ${u} ${this.length}`);
        const r = this.dataBuffer.slice(this.index, this.index + u);
        return this.index += u,
            r
    }
    unpack_string(u) {
        const r = this.read(u);
        let c = 0, o = "", h, p;
        for (; c < u;)
            h = r[c],
                h < 160 ? (p = h,
                    c++) : (h ^ 192) < 32 ? (p = (h & 31) << 6 | r[c + 1] & 63,
                        c += 2) : (h ^ 224) < 16 ? (p = (h & 15) << 12 | (r[c + 1] & 63) << 6 | r[c + 2] & 63,
                            c += 3) : (p = (h & 7) << 18 | (r[c + 1] & 63) << 12 | (r[c + 2] & 63) << 6 | r[c + 3] & 63,
                                c += 4),
                o += String.fromCodePoint(p);
        return this.index += u,
            o
    }
    unpack_array(u) {
        const r = new Array(u);
        for (let c = 0; c < u; c++)
            r[c] = this.unpack();
        return r
    }
    unpack_map(u) {
        const r = {};
        for (let c = 0; c < u; c++) {
            const o = this.unpack();
            r[o] = this.unpack()
        }
        return r
    }
    unpack_float() {
        const u = this.unpack_uint32()
            , r = u >> 31
            , c = (u >> 23 & 255) - 127
            , o = u & 8388607 | 8388608;
        return (r === 0 ? 1 : -1) * o * 2 ** (c - 23)
    }
    unpack_double() {
        const u = this.unpack_uint32()
            , r = this.unpack_uint32()
            , c = u >> 31
            , o = (u >> 20 & 2047) - 1023
            , p = (u & 1048575 | 1048576) * 2 ** (o - 20) + r * 2 ** (o - 52);
        return (c === 0 ? 1 : -1) * p
    }
    read(u) {
        const r = this.index;
        if (r + u <= this.length)
            return this.dataView.subarray(r, r + u);
        throw new Error("BinaryPackFailure: read index out of range")
    }
}
class T0 {
    getBuffer() {
        return this._bufferBuilder.toArrayBuffer()
    }
    pack(u) {
        if (typeof u == "string")
            this.pack_string(u);
        else if (typeof u == "number")
            Math.floor(u) === u ? this.pack_integer(u) : this.pack_double(u);
        else if (typeof u == "boolean")
            u === !0 ? this._bufferBuilder.append(195) : u === !1 && this._bufferBuilder.append(194);
        else if (u === void 0)
            this._bufferBuilder.append(192);
        else if (typeof u == "object")
            if (u === null)
                this._bufferBuilder.append(192);
            else {
                const r = u.constructor;
                if (u instanceof Array) {
                    const c = this.pack_array(u);
                    if (c instanceof Promise)
                        return c.then(() => this._bufferBuilder.flush())
                } else if (u instanceof ArrayBuffer)
                    this.pack_bin(new Uint8Array(u));
                else if ("BYTES_PER_ELEMENT" in u) {
                    const c = u;
                    this.pack_bin(new Uint8Array(c.buffer, c.byteOffset, c.byteLength))
                } else if (u instanceof Date)
                    this.pack_string(u.toString());
                else {
                    if (u instanceof Blob)
                        return u.arrayBuffer().then(c => {
                            this.pack_bin(new Uint8Array(c)),
                                this._bufferBuilder.flush()
                        }
                        );
                    if (r == Object || r.toString().startsWith("class")) {
                        const c = this.pack_object(u);
                        if (c instanceof Promise)
                            return c.then(() => this._bufferBuilder.flush())
                    } else
                        throw new Error(`Type "${r.toString()}" not yet supported`)
                }
            }
        else
            throw new Error(`Type "${typeof u}" not yet supported`);
        this._bufferBuilder.flush()
    }
    pack_bin(u) {
        const r = u.length;
        if (r <= 15)
            this.pack_uint8(160 + r);
        else if (r <= 65535)
            this._bufferBuilder.append(218),
                this.pack_uint16(r);
        else if (r <= 4294967295)
            this._bufferBuilder.append(219),
                this.pack_uint32(r);
        else
            throw new Error("Invalid length");
        this._bufferBuilder.append_buffer(u)
    }
    pack_string(u) {
        const r = this._textEncoder.encode(u)
            , c = r.length;
        if (c <= 15)
            this.pack_uint8(176 + c);
        else if (c <= 65535)
            this._bufferBuilder.append(216),
                this.pack_uint16(c);
        else if (c <= 4294967295)
            this._bufferBuilder.append(217),
                this.pack_uint32(c);
        else
            throw new Error("Invalid length");
        this._bufferBuilder.append_buffer(r)
    }
    pack_array(u) {
        const r = u.length;
        if (r <= 15)
            this.pack_uint8(144 + r);
        else if (r <= 65535)
            this._bufferBuilder.append(220),
                this.pack_uint16(r);
        else if (r <= 4294967295)
            this._bufferBuilder.append(221),
                this.pack_uint32(r);
        else
            throw new Error("Invalid length");
        const c = o => {
            if (o < r) {
                const h = this.pack(u[o]);
                return h instanceof Promise ? h.then(() => c(o + 1)) : c(o + 1)
            }
        }
            ;
        return c(0)
    }
    pack_integer(u) {
        if (u >= -32 && u <= 127)
            this._bufferBuilder.append(u & 255);
        else if (u >= 0 && u <= 255)
            this._bufferBuilder.append(204),
                this.pack_uint8(u);
        else if (u >= -128 && u <= 127)
            this._bufferBuilder.append(208),
                this.pack_int8(u);
        else if (u >= 0 && u <= 65535)
            this._bufferBuilder.append(205),
                this.pack_uint16(u);
        else if (u >= -32768 && u <= 32767)
            this._bufferBuilder.append(209),
                this.pack_int16(u);
        else if (u >= 0 && u <= 4294967295)
            this._bufferBuilder.append(206),
                this.pack_uint32(u);
        else if (u >= -2147483648 && u <= 2147483647)
            this._bufferBuilder.append(210),
                this.pack_int32(u);
        else if (u >= -9223372036854776e3 && u <= 9223372036854776e3)
            this._bufferBuilder.append(211),
                this.pack_int64(u);
        else if (u >= 0 && u <= 18446744073709552e3)
            this._bufferBuilder.append(207),
                this.pack_uint64(u);
        else
            throw new Error("Invalid integer")
    }
    pack_double(u) {
        let r = 0;
        u < 0 && (r = 1,
            u = -u);
        const c = Math.floor(Math.log(u) / Math.LN2)
            , o = u / 2 ** c - 1
            , h = Math.floor(o * 2 ** 52)
            , p = 2 ** 32
            , g = r << 31 | c + 1023 << 20 | h / p & 1048575
            , v = h % p;
        this._bufferBuilder.append(203),
            this.pack_int32(g),
            this.pack_int32(v)
    }
    pack_object(u) {
        const r = Object.keys(u)
            , c = r.length;
        if (c <= 15)
            this.pack_uint8(128 + c);
        else if (c <= 65535)
            this._bufferBuilder.append(222),
                this.pack_uint16(c);
        else if (c <= 4294967295)
            this._bufferBuilder.append(223),
                this.pack_uint32(c);
        else
            throw new Error("Invalid length");
        const o = h => {
            if (h < r.length) {
                const p = r[h];
                if (u.hasOwnProperty(p)) {
                    this.pack(p);
                    const g = this.pack(u[p]);
                    if (g instanceof Promise)
                        return g.then(() => o(h + 1))
                }
                return o(h + 1)
            }
        }
            ;
        return o(0)
    }
    pack_uint8(u) {
        this._bufferBuilder.append(u)
    }
    pack_uint16(u) {
        this._bufferBuilder.append(u >> 8),
            this._bufferBuilder.append(u & 255)
    }
    pack_uint32(u) {
        const r = u & 4294967295;
        this._bufferBuilder.append((r & 4278190080) >>> 24),
            this._bufferBuilder.append((r & 16711680) >>> 16),
            this._bufferBuilder.append((r & 65280) >>> 8),
            this._bufferBuilder.append(r & 255)
    }
    pack_uint64(u) {
        const r = u / 4294967296
            , c = u % 2 ** 32;
        this._bufferBuilder.append((r & 4278190080) >>> 24),
            this._bufferBuilder.append((r & 16711680) >>> 16),
            this._bufferBuilder.append((r & 65280) >>> 8),
            this._bufferBuilder.append(r & 255),
            this._bufferBuilder.append((c & 4278190080) >>> 24),
            this._bufferBuilder.append((c & 16711680) >>> 16),
            this._bufferBuilder.append((c & 65280) >>> 8),
            this._bufferBuilder.append(c & 255)
    }
    pack_int8(u) {
        this._bufferBuilder.append(u & 255)
    }
    pack_int16(u) {
        this._bufferBuilder.append((u & 65280) >> 8),
            this._bufferBuilder.append(u & 255)
    }
    pack_int32(u) {
        this._bufferBuilder.append(u >>> 24 & 255),
            this._bufferBuilder.append((u & 16711680) >>> 16),
            this._bufferBuilder.append((u & 65280) >>> 8),
            this._bufferBuilder.append(u & 255)
    }
    pack_int64(u) {
        const r = Math.floor(u / 4294967296)
            , c = u % 2 ** 32;
        this._bufferBuilder.append((r & 4278190080) >>> 24),
            this._bufferBuilder.append((r & 16711680) >>> 16),
            this._bufferBuilder.append((r & 65280) >>> 8),
            this._bufferBuilder.append(r & 255),
            this._bufferBuilder.append((c & 4278190080) >>> 24),
            this._bufferBuilder.append((c & 16711680) >>> 16),
            this._bufferBuilder.append((c & 65280) >>> 8),
            this._bufferBuilder.append(c & 255)
    }
    constructor() {
        this._bufferBuilder = new b0,
            this._textEncoder = new TextEncoder
    }
}
let eh = !0
    , th = !0;
function lu(s, u, r) {
    const c = s.match(u);
    return c && c.length >= r && parseInt(c[r], 10)
}
function wn(s, u, r) {
    if (!s.RTCPeerConnection)
        return;
    const c = s.RTCPeerConnection.prototype
        , o = c.addEventListener;
    c.addEventListener = function (p, g) {
        if (p !== u)
            return o.apply(this, arguments);
        const v = y => {
            const C = r(y);
            C && (g.handleEvent ? g.handleEvent(C) : g(C))
        }
            ;
        return this._eventMap = this._eventMap || {},
            this._eventMap[u] || (this._eventMap[u] = new Map),
            this._eventMap[u].set(g, v),
            o.apply(this, [p, v])
    }
        ;
    const h = c.removeEventListener;
    c.removeEventListener = function (p, g) {
        if (p !== u || !this._eventMap || !this._eventMap[u])
            return h.apply(this, arguments);
        if (!this._eventMap[u].has(g))
            return h.apply(this, arguments);
        const v = this._eventMap[u].get(g);
        return this._eventMap[u].delete(g),
            this._eventMap[u].size === 0 && delete this._eventMap[u],
            Object.keys(this._eventMap).length === 0 && delete this._eventMap,
            h.apply(this, [p, v])
    }
        ,
        Object.defineProperty(c, "on" + u, {
            get() {
                return this["_on" + u]
            },
            set(p) {
                this["_on" + u] && (this.removeEventListener(u, this["_on" + u]),
                    delete this["_on" + u]),
                    p && this.addEventListener(u, this["_on" + u] = p)
            },
            enumerable: !0,
            configurable: !0
        })
}
function C0(s) {
    return typeof s != "boolean" ? new Error("Argument type: " + typeof s + ". Please use a boolean.") : (eh = s,
        s ? "adapter.js logging disabled" : "adapter.js logging enabled")
}
function E0(s) {
    return typeof s != "boolean" ? new Error("Argument type: " + typeof s + ". Please use a boolean.") : (th = !s,
        "adapter.js deprecation warnings " + (s ? "disabled" : "enabled"))
}
function nh() {
    if (typeof window == "object") {
        if (eh)
            return;
        typeof console < "u" && typeof console.log == "function" && console.log.apply(console, arguments)
    }
}
function Vr(s, u) {
    th && console.warn(s + " is deprecated, please use " + u + " instead.")
}
function R0(s) {
    const u = {
        browser: null,
        version: null
    };
    if (typeof s > "u" || !s.navigator || !s.navigator.userAgent)
        return u.browser = "Not a browser.",
            u;
    const { navigator: r } = s;
    if (r.userAgentData && r.userAgentData.brands) {
        const c = r.userAgentData.brands.find(o => o.brand === "Chromium");
        if (c)
            return {
                browser: "chrome",
                version: parseInt(c.version, 10)
            }
    }
    if (r.mozGetUserMedia)
        u.browser = "firefox",
            u.version = lu(r.userAgent, /Firefox\/(\d+)\./, 1);
    else if (r.webkitGetUserMedia || s.isSecureContext === !1 && s.webkitRTCPeerConnection)
        u.browser = "chrome",
            u.version = lu(r.userAgent, /Chrom(e|ium)\/(\d+)\./, 2);
    else if (s.RTCPeerConnection && r.userAgent.match(/AppleWebKit\/(\d+)\./))
        u.browser = "safari",
            u.version = lu(r.userAgent, /AppleWebKit\/(\d+)\./, 1),
            u.supportsUnifiedPlan = s.RTCRtpTransceiver && "currentDirection" in s.RTCRtpTransceiver.prototype;
    else
        return u.browser = "Not a supported browser.",
            u;
    return u
}
function Xd(s) {
    return Object.prototype.toString.call(s) === "[object Object]"
}
function ah(s) {
    return Xd(s) ? Object.keys(s).reduce(function (u, r) {
        const c = Xd(s[r])
            , o = c ? ah(s[r]) : s[r]
            , h = c && !Object.keys(o).length;
        return o === void 0 || h ? u : Object.assign(u, {
            [r]: o
        })
    }, {}) : s
}
function Ur(s, u, r) {
    !u || r.has(u.id) || (r.set(u.id, u),
        Object.keys(u).forEach(c => {
            c.endsWith("Id") ? Ur(s, s.get(u[c]), r) : c.endsWith("Ids") && u[c].forEach(o => {
                Ur(s, s.get(o), r)
            }
            )
        }
        ))
}
function Qd(s, u, r) {
    const c = r ? "outbound-rtp" : "inbound-rtp"
        , o = new Map;
    if (u === null)
        return o;
    const h = [];
    return s.forEach(p => {
        p.type === "track" && p.trackIdentifier === u.id && h.push(p)
    }
    ),
        h.forEach(p => {
            s.forEach(g => {
                g.type === c && g.trackId === p.id && Ur(s, g, o)
            }
            )
        }
        ),
        o
}
const Vd = nh;
function ih(s, u) {
    const r = s && s.navigator;
    if (!r.mediaDevices)
        return;
    const c = function (g) {
        if (typeof g != "object" || g.mandatory || g.optional)
            return g;
        const v = {};
        return Object.keys(g).forEach(y => {
            if (y === "require" || y === "advanced" || y === "mediaSource")
                return;
            const C = typeof g[y] == "object" ? g[y] : {
                ideal: g[y]
            };
            C.exact !== void 0 && typeof C.exact == "number" && (C.min = C.max = C.exact);
            const D = function (U, L) {
                return U ? U + L.charAt(0).toUpperCase() + L.slice(1) : L === "deviceId" ? "sourceId" : L
            };
            if (C.ideal !== void 0) {
                v.optional = v.optional || [];
                let U = {};
                typeof C.ideal == "number" ? (U[D("min", y)] = C.ideal,
                    v.optional.push(U),
                    U = {},
                    U[D("max", y)] = C.ideal,
                    v.optional.push(U)) : (U[D("", y)] = C.ideal,
                        v.optional.push(U))
            }
            C.exact !== void 0 && typeof C.exact != "number" ? (v.mandatory = v.mandatory || {},
                v.mandatory[D("", y)] = C.exact) : ["min", "max"].forEach(U => {
                    C[U] !== void 0 && (v.mandatory = v.mandatory || {},
                        v.mandatory[D(U, y)] = C[U])
                }
                )
        }
        ),
            g.advanced && (v.optional = (v.optional || []).concat(g.advanced)),
            v
    }
        , o = function (g, v) {
            if (u.version >= 61)
                return v(g);
            if (g = JSON.parse(JSON.stringify(g)),
                g && typeof g.audio == "object") {
                const y = function (C, D, U) {
                    D in C && !(U in C) && (C[U] = C[D],
                        delete C[D])
                };
                g = JSON.parse(JSON.stringify(g)),
                    y(g.audio, "autoGainControl", "googAutoGainControl"),
                    y(g.audio, "noiseSuppression", "googNoiseSuppression"),
                    g.audio = c(g.audio)
            }
            if (g && typeof g.video == "object") {
                let y = g.video.facingMode;
                y = y && (typeof y == "object" ? y : {
                    ideal: y
                });
                const C = u.version < 66;
                if (y && (y.exact === "user" || y.exact === "environment" || y.ideal === "user" || y.ideal === "environment") && !(r.mediaDevices.getSupportedConstraints && r.mediaDevices.getSupportedConstraints().facingMode && !C)) {
                    delete g.video.facingMode;
                    let D;
                    if (y.exact === "environment" || y.ideal === "environment" ? D = ["back", "rear"] : (y.exact === "user" || y.ideal === "user") && (D = ["front"]),
                        D)
                        return r.mediaDevices.enumerateDevices().then(U => {
                            U = U.filter(I => I.kind === "videoinput");
                            let L = U.find(I => D.some(ce => I.label.toLowerCase().includes(ce)));
                            return !L && U.length && D.includes("back") && (L = U[U.length - 1]),
                                L && (g.video.deviceId = y.exact ? {
                                    exact: L.deviceId
                                } : {
                                    ideal: L.deviceId
                                }),
                                g.video = c(g.video),
                                Vd("chrome: " + JSON.stringify(g)),
                                v(g)
                        }
                        )
                }
                g.video = c(g.video)
            }
            return Vd("chrome: " + JSON.stringify(g)),
                v(g)
        }
        , h = function (g) {
            return u.version >= 64 ? g : {
                name: {
                    PermissionDeniedError: "NotAllowedError",
                    PermissionDismissedError: "NotAllowedError",
                    InvalidStateError: "NotAllowedError",
                    DevicesNotFoundError: "NotFoundError",
                    ConstraintNotSatisfiedError: "OverconstrainedError",
                    TrackStartError: "NotReadableError",
                    MediaDeviceFailedDueToShutdown: "NotAllowedError",
                    MediaDeviceKillSwitchOn: "NotAllowedError",
                    TabCaptureError: "AbortError",
                    ScreenCaptureError: "AbortError",
                    DeviceCaptureError: "AbortError"
                }[g.name] || g.name,
                message: g.message,
                constraint: g.constraint || g.constraintName,
                toString() {
                    return this.name + (this.message && ": ") + this.message
                }
            }
        }
        , p = function (g, v, y) {
            o(g, C => {
                r.webkitGetUserMedia(C, v, D => {
                    y && y(h(D))
                }
                )
            }
            )
        };
    if (r.getUserMedia = p.bind(r),
        r.mediaDevices.getUserMedia) {
        const g = r.mediaDevices.getUserMedia.bind(r.mediaDevices);
        r.mediaDevices.getUserMedia = function (v) {
            return o(v, y => g(y).then(C => {
                if (y.audio && !C.getAudioTracks().length || y.video && !C.getVideoTracks().length)
                    throw C.getTracks().forEach(D => {
                        D.stop()
                    }
                    ),
                    new DOMException("", "NotFoundError");
                return C
            }
                , C => Promise.reject(h(C))))
        }
    }
}
function lh(s) {
    s.MediaStream = s.MediaStream || s.webkitMediaStream
}
function uh(s) {
    if (typeof s == "object" && s.RTCPeerConnection && !("ontrack" in s.RTCPeerConnection.prototype)) {
        Object.defineProperty(s.RTCPeerConnection.prototype, "ontrack", {
            get() {
                return this._ontrack
            },
            set(r) {
                this._ontrack && this.removeEventListener("track", this._ontrack),
                    this.addEventListener("track", this._ontrack = r)
            },
            enumerable: !0,
            configurable: !0
        });
        const u = s.RTCPeerConnection.prototype.setRemoteDescription;
        s.RTCPeerConnection.prototype.setRemoteDescription = function () {
            return this._ontrackpoly || (this._ontrackpoly = c => {
                c.stream.addEventListener("addtrack", o => {
                    let h;
                    s.RTCPeerConnection.prototype.getReceivers ? h = this.getReceivers().find(g => g.track && g.track.id === o.track.id) : h = {
                        track: o.track
                    };
                    const p = new Event("track");
                    p.track = o.track,
                        p.receiver = h,
                        p.transceiver = {
                            receiver: h
                        },
                        p.streams = [c.stream],
                        this.dispatchEvent(p)
                }
                ),
                    c.stream.getTracks().forEach(o => {
                        let h;
                        s.RTCPeerConnection.prototype.getReceivers ? h = this.getReceivers().find(g => g.track && g.track.id === o.id) : h = {
                            track: o
                        };
                        const p = new Event("track");
                        p.track = o,
                            p.receiver = h,
                            p.transceiver = {
                                receiver: h
                            },
                            p.streams = [c.stream],
                            this.dispatchEvent(p)
                    }
                    )
            }
                ,
                this.addEventListener("addstream", this._ontrackpoly)),
                u.apply(this, arguments)
        }
    } else
        wn(s, "track", u => (u.transceiver || Object.defineProperty(u, "transceiver", {
            value: {
                receiver: u.receiver
            }
        }),
            u))
}
function ch(s) {
    if (typeof s == "object" && s.RTCPeerConnection && !("getSenders" in s.RTCPeerConnection.prototype) && "createDTMFSender" in s.RTCPeerConnection.prototype) {
        const u = function (o, h) {
            return {
                track: h,
                get dtmf() {
                    return this._dtmf === void 0 && (h.kind === "audio" ? this._dtmf = o.createDTMFSender(h) : this._dtmf = null),
                        this._dtmf
                },
                _pc: o
            }
        };
        if (!s.RTCPeerConnection.prototype.getSenders) {
            s.RTCPeerConnection.prototype.getSenders = function () {
                return this._senders = this._senders || [],
                    this._senders.slice()
            }
                ;
            const o = s.RTCPeerConnection.prototype.addTrack;
            s.RTCPeerConnection.prototype.addTrack = function (g, v) {
                let y = o.apply(this, arguments);
                return y || (y = u(this, g),
                    this._senders.push(y)),
                    y
            }
                ;
            const h = s.RTCPeerConnection.prototype.removeTrack;
            s.RTCPeerConnection.prototype.removeTrack = function (g) {
                h.apply(this, arguments);
                const v = this._senders.indexOf(g);
                v !== -1 && this._senders.splice(v, 1)
            }
        }
        const r = s.RTCPeerConnection.prototype.addStream;
        s.RTCPeerConnection.prototype.addStream = function (h) {
            this._senders = this._senders || [],
                r.apply(this, [h]),
                h.getTracks().forEach(p => {
                    this._senders.push(u(this, p))
                }
                )
        }
            ;
        const c = s.RTCPeerConnection.prototype.removeStream;
        s.RTCPeerConnection.prototype.removeStream = function (h) {
            this._senders = this._senders || [],
                c.apply(this, [h]),
                h.getTracks().forEach(p => {
                    const g = this._senders.find(v => v.track === p);
                    g && this._senders.splice(this._senders.indexOf(g), 1)
                }
                )
        }
    } else if (typeof s == "object" && s.RTCPeerConnection && "getSenders" in s.RTCPeerConnection.prototype && "createDTMFSender" in s.RTCPeerConnection.prototype && s.RTCRtpSender && !("dtmf" in s.RTCRtpSender.prototype)) {
        const u = s.RTCPeerConnection.prototype.getSenders;
        s.RTCPeerConnection.prototype.getSenders = function () {
            const c = u.apply(this, []);
            return c.forEach(o => o._pc = this),
                c
        }
            ,
            Object.defineProperty(s.RTCRtpSender.prototype, "dtmf", {
                get() {
                    return this._dtmf === void 0 && (this.track.kind === "audio" ? this._dtmf = this._pc.createDTMFSender(this.track) : this._dtmf = null),
                        this._dtmf
                }
            })
    }
}
function rh(s) {
    if (!(typeof s == "object" && s.RTCPeerConnection && s.RTCRtpSender && s.RTCRtpReceiver))
        return;
    if (!("getStats" in s.RTCRtpSender.prototype)) {
        const r = s.RTCPeerConnection.prototype.getSenders;
        r && (s.RTCPeerConnection.prototype.getSenders = function () {
            const h = r.apply(this, []);
            return h.forEach(p => p._pc = this),
                h
        }
        );
        const c = s.RTCPeerConnection.prototype.addTrack;
        c && (s.RTCPeerConnection.prototype.addTrack = function () {
            const h = c.apply(this, arguments);
            return h._pc = this,
                h
        }
        ),
            s.RTCRtpSender.prototype.getStats = function () {
                const h = this;
                return this._pc.getStats().then(p => Qd(p, h.track, !0))
            }
    }
    if (!("getStats" in s.RTCRtpReceiver.prototype)) {
        const r = s.RTCPeerConnection.prototype.getReceivers;
        r && (s.RTCPeerConnection.prototype.getReceivers = function () {
            const o = r.apply(this, []);
            return o.forEach(h => h._pc = this),
                o
        }
        ),
            wn(s, "track", c => (c.receiver._pc = c.srcElement,
                c)),
            s.RTCRtpReceiver.prototype.getStats = function () {
                const o = this;
                return this._pc.getStats().then(h => Qd(h, o.track, !1))
            }
    }
    if (!("getStats" in s.RTCRtpSender.prototype && "getStats" in s.RTCRtpReceiver.prototype))
        return;
    const u = s.RTCPeerConnection.prototype.getStats;
    s.RTCPeerConnection.prototype.getStats = function () {
        if (arguments.length > 0 && arguments[0] instanceof s.MediaStreamTrack) {
            const c = arguments[0];
            let o, h, p;
            return this.getSenders().forEach(g => {
                g.track === c && (o ? p = !0 : o = g)
            }
            ),
                this.getReceivers().forEach(g => (g.track === c && (h ? p = !0 : h = g),
                    g.track === c)),
                p || o && h ? Promise.reject(new DOMException("There are more than one sender or receiver for the track.", "InvalidAccessError")) : o ? o.getStats() : h ? h.getStats() : Promise.reject(new DOMException("There is no sender or receiver for the track.", "InvalidAccessError"))
        }
        return u.apply(this, arguments)
    }
}
function sh(s) {
    s.RTCPeerConnection.prototype.getLocalStreams = function () {
        return this._shimmedLocalStreams = this._shimmedLocalStreams || {},
            Object.keys(this._shimmedLocalStreams).map(p => this._shimmedLocalStreams[p][0])
    }
        ;
    const u = s.RTCPeerConnection.prototype.addTrack;
    s.RTCPeerConnection.prototype.addTrack = function (p, g) {
        if (!g)
            return u.apply(this, arguments);
        this._shimmedLocalStreams = this._shimmedLocalStreams || {};
        const v = u.apply(this, arguments);
        return this._shimmedLocalStreams[g.id] ? this._shimmedLocalStreams[g.id].indexOf(v) === -1 && this._shimmedLocalStreams[g.id].push(v) : this._shimmedLocalStreams[g.id] = [g, v],
            v
    }
        ;
    const r = s.RTCPeerConnection.prototype.addStream;
    s.RTCPeerConnection.prototype.addStream = function (p) {
        this._shimmedLocalStreams = this._shimmedLocalStreams || {},
            p.getTracks().forEach(y => {
                if (this.getSenders().find(D => D.track === y))
                    throw new DOMException("Track already exists.", "InvalidAccessError")
            }
            );
        const g = this.getSenders();
        r.apply(this, arguments);
        const v = this.getSenders().filter(y => g.indexOf(y) === -1);
        this._shimmedLocalStreams[p.id] = [p].concat(v)
    }
        ;
    const c = s.RTCPeerConnection.prototype.removeStream;
    s.RTCPeerConnection.prototype.removeStream = function (p) {
        return this._shimmedLocalStreams = this._shimmedLocalStreams || {},
            delete this._shimmedLocalStreams[p.id],
            c.apply(this, arguments)
    }
        ;
    const o = s.RTCPeerConnection.prototype.removeTrack;
    s.RTCPeerConnection.prototype.removeTrack = function (p) {
        return this._shimmedLocalStreams = this._shimmedLocalStreams || {},
            p && Object.keys(this._shimmedLocalStreams).forEach(g => {
                const v = this._shimmedLocalStreams[g].indexOf(p);
                v !== -1 && this._shimmedLocalStreams[g].splice(v, 1),
                    this._shimmedLocalStreams[g].length === 1 && delete this._shimmedLocalStreams[g]
            }
            ),
            o.apply(this, arguments)
    }
}
function fh(s, u) {
    if (!s.RTCPeerConnection)
        return;
    if (s.RTCPeerConnection.prototype.addTrack && u.version >= 65)
        return sh(s);
    const r = s.RTCPeerConnection.prototype.getLocalStreams;
    s.RTCPeerConnection.prototype.getLocalStreams = function () {
        const C = r.apply(this);
        return this._reverseStreams = this._reverseStreams || {},
            C.map(D => this._reverseStreams[D.id])
    }
        ;
    const c = s.RTCPeerConnection.prototype.addStream;
    s.RTCPeerConnection.prototype.addStream = function (C) {
        if (this._streams = this._streams || {},
            this._reverseStreams = this._reverseStreams || {},
            C.getTracks().forEach(D => {
                if (this.getSenders().find(L => L.track === D))
                    throw new DOMException("Track already exists.", "InvalidAccessError")
            }
            ),
            !this._reverseStreams[C.id]) {
            const D = new s.MediaStream(C.getTracks());
            this._streams[C.id] = D,
                this._reverseStreams[D.id] = C,
                C = D
        }
        c.apply(this, [C])
    }
        ;
    const o = s.RTCPeerConnection.prototype.removeStream;
    s.RTCPeerConnection.prototype.removeStream = function (C) {
        this._streams = this._streams || {},
            this._reverseStreams = this._reverseStreams || {},
            o.apply(this, [this._streams[C.id] || C]),
            delete this._reverseStreams[this._streams[C.id] ? this._streams[C.id].id : C.id],
            delete this._streams[C.id]
    }
        ,
        s.RTCPeerConnection.prototype.addTrack = function (C, D) {
            if (this.signalingState === "closed")
                throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
            const U = [].slice.call(arguments, 1);
            if (U.length !== 1 || !U[0].getTracks().find(ce => ce === C))
                throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.", "NotSupportedError");
            if (this.getSenders().find(ce => ce.track === C))
                throw new DOMException("Track already exists.", "InvalidAccessError");
            this._streams = this._streams || {},
                this._reverseStreams = this._reverseStreams || {};
            const I = this._streams[D.id];
            if (I)
                I.addTrack(C),
                    Promise.resolve().then(() => {
                        this.dispatchEvent(new Event("negotiationneeded"))
                    }
                    );
            else {
                const ce = new s.MediaStream([C]);
                this._streams[D.id] = ce,
                    this._reverseStreams[ce.id] = D,
                    this.addStream(ce)
            }
            return this.getSenders().find(ce => ce.track === C)
        }
        ;
    function h(y, C) {
        let D = C.sdp;
        return Object.keys(y._reverseStreams || []).forEach(U => {
            const L = y._reverseStreams[U]
                , I = y._streams[L.id];
            D = D.replace(new RegExp(I.id, "g"), L.id)
        }
        ),
            new RTCSessionDescription({
                type: C.type,
                sdp: D
            })
    }
    function p(y, C) {
        let D = C.sdp;
        return Object.keys(y._reverseStreams || []).forEach(U => {
            const L = y._reverseStreams[U]
                , I = y._streams[L.id];
            D = D.replace(new RegExp(L.id, "g"), I.id)
        }
        ),
            new RTCSessionDescription({
                type: C.type,
                sdp: D
            })
    }
    ["createOffer", "createAnswer"].forEach(function (y) {
        const C = s.RTCPeerConnection.prototype[y]
            , D = {
                [y]() {
                    const U = arguments;
                    return arguments.length && typeof arguments[0] == "function" ? C.apply(this, [I => {
                        const ce = h(this, I);
                        U[0].apply(null, [ce])
                    }
                        , I => {
                            U[1] && U[1].apply(null, I)
                        }
                        , arguments[2]]) : C.apply(this, arguments).then(I => h(this, I))
                }
            };
        s.RTCPeerConnection.prototype[y] = D[y]
    });
    const g = s.RTCPeerConnection.prototype.setLocalDescription;
    s.RTCPeerConnection.prototype.setLocalDescription = function () {
        return !arguments.length || !arguments[0].type ? g.apply(this, arguments) : (arguments[0] = p(this, arguments[0]),
            g.apply(this, arguments))
    }
        ;
    const v = Object.getOwnPropertyDescriptor(s.RTCPeerConnection.prototype, "localDescription");
    Object.defineProperty(s.RTCPeerConnection.prototype, "localDescription", {
        get() {
            const y = v.get.apply(this);
            return y.type === "" ? y : h(this, y)
        }
    }),
        s.RTCPeerConnection.prototype.removeTrack = function (C) {
            if (this.signalingState === "closed")
                throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
            if (!C._pc)
                throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.", "TypeError");
            if (!(C._pc === this))
                throw new DOMException("Sender was not created by this connection.", "InvalidAccessError");
            this._streams = this._streams || {};
            let U;
            Object.keys(this._streams).forEach(L => {
                this._streams[L].getTracks().find(ce => C.track === ce) && (U = this._streams[L])
            }
            ),
                U && (U.getTracks().length === 1 ? this.removeStream(this._reverseStreams[U.id]) : U.removeTrack(C.track),
                    this.dispatchEvent(new Event("negotiationneeded")))
        }
}
function kr(s, u) {
    !s.RTCPeerConnection && s.webkitRTCPeerConnection && (s.RTCPeerConnection = s.webkitRTCPeerConnection),
        s.RTCPeerConnection && u.version < 53 && ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function (r) {
            const c = s.RTCPeerConnection.prototype[r]
                , o = {
                    [r]() {
                        return arguments[0] = new (r === "addIceCandidate" ? s.RTCIceCandidate : s.RTCSessionDescription)(arguments[0]),
                            c.apply(this, arguments)
                    }
                };
            s.RTCPeerConnection.prototype[r] = o[r]
        })
}
function oh(s, u) {
    wn(s, "negotiationneeded", r => {
        const c = r.target;
        if (!((u.version < 72 || c.getConfiguration && c.getConfiguration().sdpSemantics === "plan-b") && c.signalingState !== "stable"))
            return r
    }
    )
}
const Zd = Object.freeze(Object.defineProperty({
    __proto__: null,
    fixNegotiationNeeded: oh,
    shimAddTrackRemoveTrack: fh,
    shimAddTrackRemoveTrackWithNative: sh,
    shimGetSendersWithDtmf: ch,
    shimGetUserMedia: ih,
    shimMediaStream: lh,
    shimOnTrack: uh,
    shimPeerConnection: kr,
    shimSenderReceiverGetStats: rh
}, Symbol.toStringTag, {
    value: "Module"
}));
function dh(s, u) {
    const r = s && s.navigator
        , c = s && s.MediaStreamTrack;
    if (r.getUserMedia = function (o, h, p) {
        Vr("navigator.getUserMedia", "navigator.mediaDevices.getUserMedia"),
            r.mediaDevices.getUserMedia(o).then(h, p)
    }
        ,
        !(u.version > 55 && "autoGainControl" in r.mediaDevices.getSupportedConstraints())) {
        const o = function (p, g, v) {
            g in p && !(v in p) && (p[v] = p[g],
                delete p[g])
        }
            , h = r.mediaDevices.getUserMedia.bind(r.mediaDevices);
        if (r.mediaDevices.getUserMedia = function (p) {
            return typeof p == "object" && typeof p.audio == "object" && (p = JSON.parse(JSON.stringify(p)),
                o(p.audio, "autoGainControl", "mozAutoGainControl"),
                o(p.audio, "noiseSuppression", "mozNoiseSuppression")),
                h(p)
        }
            ,
            c && c.prototype.getSettings) {
            const p = c.prototype.getSettings;
            c.prototype.getSettings = function () {
                const g = p.apply(this, arguments);
                return o(g, "mozAutoGainControl", "autoGainControl"),
                    o(g, "mozNoiseSuppression", "noiseSuppression"),
                    g
            }
        }
        if (c && c.prototype.applyConstraints) {
            const p = c.prototype.applyConstraints;
            c.prototype.applyConstraints = function (g) {
                return this.kind === "audio" && typeof g == "object" && (g = JSON.parse(JSON.stringify(g)),
                    o(g, "autoGainControl", "mozAutoGainControl"),
                    o(g, "noiseSuppression", "mozNoiseSuppression")),
                    p.apply(this, [g])
            }
        }
    }
}
function D0(s, u) {
    s.navigator.mediaDevices && "getDisplayMedia" in s.navigator.mediaDevices || s.navigator.mediaDevices && (s.navigator.mediaDevices.getDisplayMedia = function (c) {
        if (!(c && c.video)) {
            const o = new DOMException("getDisplayMedia without video constraints is undefined");
            return o.name = "NotFoundError",
                o.code = 8,
                Promise.reject(o)
        }
        return c.video === !0 ? c.video = {
            mediaSource: u
        } : c.video.mediaSource = u,
            s.navigator.mediaDevices.getUserMedia(c)
    }
    )
}
function hh(s) {
    typeof s == "object" && s.RTCTrackEvent && "receiver" in s.RTCTrackEvent.prototype && !("transceiver" in s.RTCTrackEvent.prototype) && Object.defineProperty(s.RTCTrackEvent.prototype, "transceiver", {
        get() {
            return {
                receiver: this.receiver
            }
        }
    })
}
function jr(s, u) {
    if (typeof s != "object" || !(s.RTCPeerConnection || s.mozRTCPeerConnection))
        return;
    !s.RTCPeerConnection && s.mozRTCPeerConnection && (s.RTCPeerConnection = s.mozRTCPeerConnection),
        u.version < 53 && ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function (o) {
            const h = s.RTCPeerConnection.prototype[o]
                , p = {
                    [o]() {
                        return arguments[0] = new (o === "addIceCandidate" ? s.RTCIceCandidate : s.RTCSessionDescription)(arguments[0]),
                            h.apply(this, arguments)
                    }
                };
            s.RTCPeerConnection.prototype[o] = p[o]
        });
    const r = {
        inboundrtp: "inbound-rtp",
        outboundrtp: "outbound-rtp",
        candidatepair: "candidate-pair",
        localcandidate: "local-candidate",
        remotecandidate: "remote-candidate"
    }
        , c = s.RTCPeerConnection.prototype.getStats;
    s.RTCPeerConnection.prototype.getStats = function () {
        const [h, p, g] = arguments;
        return c.apply(this, [h || null]).then(v => {
            if (u.version < 53 && !p)
                try {
                    v.forEach(y => {
                        y.type = r[y.type] || y.type
                    }
                    )
                } catch (y) {
                    if (y.name !== "TypeError")
                        throw y;
                    v.forEach((C, D) => {
                        v.set(D, Object.assign({}, C, {
                            type: r[C.type] || C.type
                        }))
                    }
                    )
                }
            return v
        }
        ).then(p, g)
    }
}
function ph(s) {
    if (!(typeof s == "object" && s.RTCPeerConnection && s.RTCRtpSender) || s.RTCRtpSender && "getStats" in s.RTCRtpSender.prototype)
        return;
    const u = s.RTCPeerConnection.prototype.getSenders;
    u && (s.RTCPeerConnection.prototype.getSenders = function () {
        const o = u.apply(this, []);
        return o.forEach(h => h._pc = this),
            o
    }
    );
    const r = s.RTCPeerConnection.prototype.addTrack;
    r && (s.RTCPeerConnection.prototype.addTrack = function () {
        const o = r.apply(this, arguments);
        return o._pc = this,
            o
    }
    ),
        s.RTCRtpSender.prototype.getStats = function () {
            return this.track ? this._pc.getStats(this.track) : Promise.resolve(new Map)
        }
}
function mh(s) {
    if (!(typeof s == "object" && s.RTCPeerConnection && s.RTCRtpSender) || s.RTCRtpSender && "getStats" in s.RTCRtpReceiver.prototype)
        return;
    const u = s.RTCPeerConnection.prototype.getReceivers;
    u && (s.RTCPeerConnection.prototype.getReceivers = function () {
        const c = u.apply(this, []);
        return c.forEach(o => o._pc = this),
            c
    }
    ),
        wn(s, "track", r => (r.receiver._pc = r.srcElement,
            r)),
        s.RTCRtpReceiver.prototype.getStats = function () {
            return this._pc.getStats(this.track)
        }
}
function yh(s) {
    !s.RTCPeerConnection || "removeStream" in s.RTCPeerConnection.prototype || (s.RTCPeerConnection.prototype.removeStream = function (r) {
        Vr("removeStream", "removeTrack"),
            this.getSenders().forEach(c => {
                c.track && r.getTracks().includes(c.track) && this.removeTrack(c)
            }
            )
    }
    )
}
function gh(s) {
    s.DataChannel && !s.RTCDataChannel && (s.RTCDataChannel = s.DataChannel)
}
function vh(s) {
    if (!(typeof s == "object" && s.RTCPeerConnection))
        return;
    const u = s.RTCPeerConnection.prototype.addTransceiver;
    u && (s.RTCPeerConnection.prototype.addTransceiver = function () {
        this.setParametersPromises = [];
        let c = arguments[1] && arguments[1].sendEncodings;
        c === void 0 && (c = []),
            c = [...c];
        const o = c.length > 0;
        o && c.forEach(p => {
            if ("rid" in p && !/^[a-z0-9]{0,16}$/i.test(p.rid))
                throw new TypeError("Invalid RID value provided.");
            if ("scaleResolutionDownBy" in p && !(parseFloat(p.scaleResolutionDownBy) >= 1))
                throw new RangeError("scale_resolution_down_by must be >= 1.0");
            if ("maxFramerate" in p && !(parseFloat(p.maxFramerate) >= 0))
                throw new RangeError("max_framerate must be >= 0.0")
        }
        );
        const h = u.apply(this, arguments);
        if (o) {
            const { sender: p } = h
                , g = p.getParameters();
            (!("encodings" in g) || g.encodings.length === 1 && Object.keys(g.encodings[0]).length === 0) && (g.encodings = c,
                p.sendEncodings = c,
                this.setParametersPromises.push(p.setParameters(g).then(() => {
                    delete p.sendEncodings
                }
                ).catch(() => {
                    delete p.sendEncodings
                }
                )))
        }
        return h
    }
    )
}
function bh(s) {
    if (!(typeof s == "object" && s.RTCRtpSender))
        return;
    const u = s.RTCRtpSender.prototype.getParameters;
    u && (s.RTCRtpSender.prototype.getParameters = function () {
        const c = u.apply(this, arguments);
        return "encodings" in c || (c.encodings = [].concat(this.sendEncodings || [{}])),
            c
    }
    )
}
function Sh(s) {
    if (!(typeof s == "object" && s.RTCPeerConnection))
        return;
    const u = s.RTCPeerConnection.prototype.createOffer;
    s.RTCPeerConnection.prototype.createOffer = function () {
        return this.setParametersPromises && this.setParametersPromises.length ? Promise.all(this.setParametersPromises).then(() => u.apply(this, arguments)).finally(() => {
            this.setParametersPromises = []
        }
        ) : u.apply(this, arguments)
    }
}
function _h(s) {
    if (!(typeof s == "object" && s.RTCPeerConnection))
        return;
    const u = s.RTCPeerConnection.prototype.createAnswer;
    s.RTCPeerConnection.prototype.createAnswer = function () {
        return this.setParametersPromises && this.setParametersPromises.length ? Promise.all(this.setParametersPromises).then(() => u.apply(this, arguments)).finally(() => {
            this.setParametersPromises = []
        }
        ) : u.apply(this, arguments)
    }
}
const Kd = Object.freeze(Object.defineProperty({
    __proto__: null,
    shimAddTransceiver: vh,
    shimCreateAnswer: _h,
    shimCreateOffer: Sh,
    shimGetDisplayMedia: D0,
    shimGetParameters: bh,
    shimGetUserMedia: dh,
    shimOnTrack: hh,
    shimPeerConnection: jr,
    shimRTCDataChannel: gh,
    shimReceiverGetStats: mh,
    shimRemoveStream: yh,
    shimSenderGetStats: ph
}, Symbol.toStringTag, {
    value: "Module"
}));
function Th(s) {
    if (!(typeof s != "object" || !s.RTCPeerConnection)) {
        if ("getLocalStreams" in s.RTCPeerConnection.prototype || (s.RTCPeerConnection.prototype.getLocalStreams = function () {
            return this._localStreams || (this._localStreams = []),
                this._localStreams
        }
        ),
            !("addStream" in s.RTCPeerConnection.prototype)) {
            const u = s.RTCPeerConnection.prototype.addTrack;
            s.RTCPeerConnection.prototype.addStream = function (c) {
                this._localStreams || (this._localStreams = []),
                    this._localStreams.includes(c) || this._localStreams.push(c),
                    c.getAudioTracks().forEach(o => u.call(this, o, c)),
                    c.getVideoTracks().forEach(o => u.call(this, o, c))
            }
                ,
                s.RTCPeerConnection.prototype.addTrack = function (c, ...o) {
                    return o && o.forEach(h => {
                        this._localStreams ? this._localStreams.includes(h) || this._localStreams.push(h) : this._localStreams = [h]
                    }
                    ),
                        u.apply(this, arguments)
                }
        }
        "removeStream" in s.RTCPeerConnection.prototype || (s.RTCPeerConnection.prototype.removeStream = function (r) {
            this._localStreams || (this._localStreams = []);
            const c = this._localStreams.indexOf(r);
            if (c === -1)
                return;
            this._localStreams.splice(c, 1);
            const o = r.getTracks();
            this.getSenders().forEach(h => {
                o.includes(h.track) && this.removeTrack(h)
            }
            )
        }
        )
    }
}
function Ch(s) {
    if (!(typeof s != "object" || !s.RTCPeerConnection) && ("getRemoteStreams" in s.RTCPeerConnection.prototype || (s.RTCPeerConnection.prototype.getRemoteStreams = function () {
        return this._remoteStreams ? this._remoteStreams : []
    }
    ),
        !("onaddstream" in s.RTCPeerConnection.prototype))) {
        Object.defineProperty(s.RTCPeerConnection.prototype, "onaddstream", {
            get() {
                return this._onaddstream
            },
            set(r) {
                this._onaddstream && (this.removeEventListener("addstream", this._onaddstream),
                    this.removeEventListener("track", this._onaddstreampoly)),
                    this.addEventListener("addstream", this._onaddstream = r),
                    this.addEventListener("track", this._onaddstreampoly = c => {
                        c.streams.forEach(o => {
                            if (this._remoteStreams || (this._remoteStreams = []),
                                this._remoteStreams.includes(o))
                                return;
                            this._remoteStreams.push(o);
                            const h = new Event("addstream");
                            h.stream = o,
                                this.dispatchEvent(h)
                        }
                        )
                    }
                    )
            }
        });
        const u = s.RTCPeerConnection.prototype.setRemoteDescription;
        s.RTCPeerConnection.prototype.setRemoteDescription = function () {
            const c = this;
            return this._onaddstreampoly || this.addEventListener("track", this._onaddstreampoly = function (o) {
                o.streams.forEach(h => {
                    if (c._remoteStreams || (c._remoteStreams = []),
                        c._remoteStreams.indexOf(h) >= 0)
                        return;
                    c._remoteStreams.push(h);
                    const p = new Event("addstream");
                    p.stream = h,
                        c.dispatchEvent(p)
                }
                )
            }
            ),
                u.apply(c, arguments)
        }
    }
}
function Eh(s) {
    if (typeof s != "object" || !s.RTCPeerConnection)
        return;
    const u = s.RTCPeerConnection.prototype
        , r = u.createOffer
        , c = u.createAnswer
        , o = u.setLocalDescription
        , h = u.setRemoteDescription
        , p = u.addIceCandidate;
    u.createOffer = function (y, C) {
        const D = arguments.length >= 2 ? arguments[2] : arguments[0]
            , U = r.apply(this, [D]);
        return C ? (U.then(y, C),
            Promise.resolve()) : U
    }
        ,
        u.createAnswer = function (y, C) {
            const D = arguments.length >= 2 ? arguments[2] : arguments[0]
                , U = c.apply(this, [D]);
            return C ? (U.then(y, C),
                Promise.resolve()) : U
        }
        ;
    let g = function (v, y, C) {
        const D = o.apply(this, [v]);
        return C ? (D.then(y, C),
            Promise.resolve()) : D
    };
    u.setLocalDescription = g,
        g = function (v, y, C) {
            const D = h.apply(this, [v]);
            return C ? (D.then(y, C),
                Promise.resolve()) : D
        }
        ,
        u.setRemoteDescription = g,
        g = function (v, y, C) {
            const D = p.apply(this, [v]);
            return C ? (D.then(y, C),
                Promise.resolve()) : D
        }
        ,
        u.addIceCandidate = g
}
function Rh(s) {
    const u = s && s.navigator;
    if (u.mediaDevices && u.mediaDevices.getUserMedia) {
        const r = u.mediaDevices
            , c = r.getUserMedia.bind(r);
        u.mediaDevices.getUserMedia = o => c(Dh(o))
    }
    !u.getUserMedia && u.mediaDevices && u.mediaDevices.getUserMedia && (u.getUserMedia = (function (c, o, h) {
        u.mediaDevices.getUserMedia(c).then(o, h)
    }
    ).bind(u))
}
function Dh(s) {
    return s && s.video !== void 0 ? Object.assign({}, s, {
        video: ah(s.video)
    }) : s
}
function Oh(s) {
    if (!s.RTCPeerConnection)
        return;
    const u = s.RTCPeerConnection;
    s.RTCPeerConnection = function (c, o) {
        if (c && c.iceServers) {
            const h = [];
            for (let p = 0; p < c.iceServers.length; p++) {
                let g = c.iceServers[p];
                g.urls === void 0 && g.url ? (Vr("RTCIceServer.url", "RTCIceServer.urls"),
                    g = JSON.parse(JSON.stringify(g)),
                    g.urls = g.url,
                    delete g.url,
                    h.push(g)) : h.push(c.iceServers[p])
            }
            c.iceServers = h
        }
        return new u(c, o)
    }
        ,
        s.RTCPeerConnection.prototype = u.prototype,
        "generateCertificate" in u && Object.defineProperty(s.RTCPeerConnection, "generateCertificate", {
            get() {
                return u.generateCertificate
            }
        })
}
function Ah(s) {
    typeof s == "object" && s.RTCTrackEvent && "receiver" in s.RTCTrackEvent.prototype && !("transceiver" in s.RTCTrackEvent.prototype) && Object.defineProperty(s.RTCTrackEvent.prototype, "transceiver", {
        get() {
            return {
                receiver: this.receiver
            }
        }
    })
}
function Mh(s) {
    const u = s.RTCPeerConnection.prototype.createOffer;
    s.RTCPeerConnection.prototype.createOffer = function (c) {
        if (c) {
            typeof c.offerToReceiveAudio < "u" && (c.offerToReceiveAudio = !!c.offerToReceiveAudio);
            const o = this.getTransceivers().find(p => p.receiver.track.kind === "audio");
            c.offerToReceiveAudio === !1 && o ? o.direction === "sendrecv" ? o.setDirection ? o.setDirection("sendonly") : o.direction = "sendonly" : o.direction === "recvonly" && (o.setDirection ? o.setDirection("inactive") : o.direction = "inactive") : c.offerToReceiveAudio === !0 && !o && this.addTransceiver("audio", {
                direction: "recvonly"
            }),
                typeof c.offerToReceiveVideo < "u" && (c.offerToReceiveVideo = !!c.offerToReceiveVideo);
            const h = this.getTransceivers().find(p => p.receiver.track.kind === "video");
            c.offerToReceiveVideo === !1 && h ? h.direction === "sendrecv" ? h.setDirection ? h.setDirection("sendonly") : h.direction = "sendonly" : h.direction === "recvonly" && (h.setDirection ? h.setDirection("inactive") : h.direction = "inactive") : c.offerToReceiveVideo === !0 && !h && this.addTransceiver("video", {
                direction: "recvonly"
            })
        }
        return u.apply(this, arguments)
    }
}
function xh(s) {
    typeof s != "object" || s.AudioContext || (s.AudioContext = s.webkitAudioContext)
}
const Jd = Object.freeze(Object.defineProperty({
    __proto__: null,
    shimAudioContext: xh,
    shimCallbacksAPI: Eh,
    shimConstraints: Dh,
    shimCreateOfferLegacy: Mh,
    shimGetUserMedia: Rh,
    shimLocalStreamsAPI: Th,
    shimRTCIceServerUrls: Oh,
    shimRemoteStreamsAPI: Ch,
    shimTrackEventTransceiver: Ah
}, Symbol.toStringTag, {
    value: "Module"
}));
var Mr = {
    exports: {}
}, $d;
function O0() {
    return $d || ($d = 1,
        function (s) {
            const u = {};
            u.generateIdentifier = function () {
                return Math.random().toString(36).substring(2, 12)
            }
                ,
                u.localCName = u.generateIdentifier(),
                u.splitLines = function (r) {
                    return r.trim().split(`
`).map(c => c.trim())
                }
                ,
                u.splitSections = function (r) {
                    return r.split(`
m=`).map((o, h) => (h > 0 ? "m=" + o : o).trim() + `\r
`)
                }
                ,
                u.getDescription = function (r) {
                    const c = u.splitSections(r);
                    return c && c[0]
                }
                ,
                u.getMediaSections = function (r) {
                    const c = u.splitSections(r);
                    return c.shift(),
                        c
                }
                ,
                u.matchPrefix = function (r, c) {
                    return u.splitLines(r).filter(o => o.indexOf(c) === 0)
                }
                ,
                u.parseCandidate = function (r) {
                    let c;
                    r.indexOf("a=candidate:") === 0 ? c = r.substring(12).split(" ") : c = r.substring(10).split(" ");
                    const o = {
                        foundation: c[0],
                        component: {
                            1: "rtp",
                            2: "rtcp"
                        }[c[1]] || c[1],
                        protocol: c[2].toLowerCase(),
                        priority: parseInt(c[3], 10),
                        ip: c[4],
                        address: c[4],
                        port: parseInt(c[5], 10),
                        type: c[7]
                    };
                    for (let h = 8; h < c.length; h += 2)
                        switch (c[h]) {
                            case "raddr":
                                o.relatedAddress = c[h + 1];
                                break;
                            case "rport":
                                o.relatedPort = parseInt(c[h + 1], 10);
                                break;
                            case "tcptype":
                                o.tcpType = c[h + 1];
                                break;
                            case "ufrag":
                                o.ufrag = c[h + 1],
                                    o.usernameFragment = c[h + 1];
                                break;
                            default:
                                o[c[h]] === void 0 && (o[c[h]] = c[h + 1]);
                                break
                        }
                    return o
                }
                ,
                u.writeCandidate = function (r) {
                    const c = [];
                    c.push(r.foundation);
                    const o = r.component;
                    o === "rtp" ? c.push(1) : o === "rtcp" ? c.push(2) : c.push(o),
                        c.push(r.protocol.toUpperCase()),
                        c.push(r.priority),
                        c.push(r.address || r.ip),
                        c.push(r.port);
                    const h = r.type;
                    return c.push("typ"),
                        c.push(h),
                        h !== "host" && r.relatedAddress && r.relatedPort && (c.push("raddr"),
                            c.push(r.relatedAddress),
                            c.push("rport"),
                            c.push(r.relatedPort)),
                        r.tcpType && r.protocol.toLowerCase() === "tcp" && (c.push("tcptype"),
                            c.push(r.tcpType)),
                        (r.usernameFragment || r.ufrag) && (c.push("ufrag"),
                            c.push(r.usernameFragment || r.ufrag)),
                        "candidate:" + c.join(" ")
                }
                ,
                u.parseIceOptions = function (r) {
                    return r.substring(14).split(" ")
                }
                ,
                u.parseRtpMap = function (r) {
                    let c = r.substring(9).split(" ");
                    const o = {
                        payloadType: parseInt(c.shift(), 10)
                    };
                    return c = c[0].split("/"),
                        o.name = c[0],
                        o.clockRate = parseInt(c[1], 10),
                        o.channels = c.length === 3 ? parseInt(c[2], 10) : 1,
                        o.numChannels = o.channels,
                        o
                }
                ,
                u.writeRtpMap = function (r) {
                    let c = r.payloadType;
                    r.preferredPayloadType !== void 0 && (c = r.preferredPayloadType);
                    const o = r.channels || r.numChannels || 1;
                    return "a=rtpmap:" + c + " " + r.name + "/" + r.clockRate + (o !== 1 ? "/" + o : "") + `\r
`
                }
                ,
                u.parseExtmap = function (r) {
                    const c = r.substring(9).split(" ");
                    return {
                        id: parseInt(c[0], 10),
                        direction: c[0].indexOf("/") > 0 ? c[0].split("/")[1] : "sendrecv",
                        uri: c[1],
                        attributes: c.slice(2).join(" ")
                    }
                }
                ,
                u.writeExtmap = function (r) {
                    return "a=extmap:" + (r.id || r.preferredId) + (r.direction && r.direction !== "sendrecv" ? "/" + r.direction : "") + " " + r.uri + (r.attributes ? " " + r.attributes : "") + `\r
`
                }
                ,
                u.parseFmtp = function (r) {
                    const c = {};
                    let o;
                    const h = r.substring(r.indexOf(" ") + 1).split(";");
                    for (let p = 0; p < h.length; p++)
                        o = h[p].trim().split("="),
                            c[o[0].trim()] = o[1];
                    return c
                }
                ,
                u.writeFmtp = function (r) {
                    let c = ""
                        , o = r.payloadType;
                    if (r.preferredPayloadType !== void 0 && (o = r.preferredPayloadType),
                        r.parameters && Object.keys(r.parameters).length) {
                        const h = [];
                        Object.keys(r.parameters).forEach(p => {
                            r.parameters[p] !== void 0 ? h.push(p + "=" + r.parameters[p]) : h.push(p)
                        }
                        ),
                            c += "a=fmtp:" + o + " " + h.join(";") + `\r
`
                    }
                    return c
                }
                ,
                u.parseRtcpFb = function (r) {
                    const c = r.substring(r.indexOf(" ") + 1).split(" ");
                    return {
                        type: c.shift(),
                        parameter: c.join(" ")
                    }
                }
                ,
                u.writeRtcpFb = function (r) {
                    let c = ""
                        , o = r.payloadType;
                    return r.preferredPayloadType !== void 0 && (o = r.preferredPayloadType),
                        r.rtcpFeedback && r.rtcpFeedback.length && r.rtcpFeedback.forEach(h => {
                            c += "a=rtcp-fb:" + o + " " + h.type + (h.parameter && h.parameter.length ? " " + h.parameter : "") + `\r
`
                        }
                        ),
                        c
                }
                ,
                u.parseSsrcMedia = function (r) {
                    const c = r.indexOf(" ")
                        , o = {
                            ssrc: parseInt(r.substring(7, c), 10)
                        }
                        , h = r.indexOf(":", c);
                    return h > -1 ? (o.attribute = r.substring(c + 1, h),
                        o.value = r.substring(h + 1)) : o.attribute = r.substring(c + 1),
                        o
                }
                ,
                u.parseSsrcGroup = function (r) {
                    const c = r.substring(13).split(" ");
                    return {
                        semantics: c.shift(),
                        ssrcs: c.map(o => parseInt(o, 10))
                    }
                }
                ,
                u.getMid = function (r) {
                    const c = u.matchPrefix(r, "a=mid:")[0];
                    if (c)
                        return c.substring(6)
                }
                ,
                u.parseFingerprint = function (r) {
                    const c = r.substring(14).split(" ");
                    return {
                        algorithm: c[0].toLowerCase(),
                        value: c[1].toUpperCase()
                    }
                }
                ,
                u.getDtlsParameters = function (r, c) {
                    return {
                        role: "auto",
                        fingerprints: u.matchPrefix(r + c, "a=fingerprint:").map(u.parseFingerprint)
                    }
                }
                ,
                u.writeDtlsParameters = function (r, c) {
                    let o = "a=setup:" + c + `\r
`;
                    return r.fingerprints.forEach(h => {
                        o += "a=fingerprint:" + h.algorithm + " " + h.value + `\r
`
                    }
                    ),
                        o
                }
                ,
                u.parseCryptoLine = function (r) {
                    const c = r.substring(9).split(" ");
                    return {
                        tag: parseInt(c[0], 10),
                        cryptoSuite: c[1],
                        keyParams: c[2],
                        sessionParams: c.slice(3)
                    }
                }
                ,
                u.writeCryptoLine = function (r) {
                    return "a=crypto:" + r.tag + " " + r.cryptoSuite + " " + (typeof r.keyParams == "object" ? u.writeCryptoKeyParams(r.keyParams) : r.keyParams) + (r.sessionParams ? " " + r.sessionParams.join(" ") : "") + `\r
`
                }
                ,
                u.parseCryptoKeyParams = function (r) {
                    if (r.indexOf("inline:") !== 0)
                        return null;
                    const c = r.substring(7).split("|");
                    return {
                        keyMethod: "inline",
                        keySalt: c[0],
                        lifeTime: c[1],
                        mkiValue: c[2] ? c[2].split(":")[0] : void 0,
                        mkiLength: c[2] ? c[2].split(":")[1] : void 0
                    }
                }
                ,
                u.writeCryptoKeyParams = function (r) {
                    return r.keyMethod + ":" + r.keySalt + (r.lifeTime ? "|" + r.lifeTime : "") + (r.mkiValue && r.mkiLength ? "|" + r.mkiValue + ":" + r.mkiLength : "")
                }
                ,
                u.getCryptoParameters = function (r, c) {
                    return u.matchPrefix(r + c, "a=crypto:").map(u.parseCryptoLine)
                }
                ,
                u.getIceParameters = function (r, c) {
                    const o = u.matchPrefix(r + c, "a=ice-ufrag:")[0]
                        , h = u.matchPrefix(r + c, "a=ice-pwd:")[0];
                    return o && h ? {
                        usernameFragment: o.substring(12),
                        password: h.substring(10)
                    } : null
                }
                ,
                u.writeIceParameters = function (r) {
                    let c = "a=ice-ufrag:" + r.usernameFragment + `\r
a=ice-pwd:` + r.password + `\r
`;
                    return r.iceLite && (c += `a=ice-lite\r
`),
                        c
                }
                ,
                u.parseRtpParameters = function (r) {
                    const c = {
                        codecs: [],
                        headerExtensions: [],
                        fecMechanisms: [],
                        rtcp: []
                    }
                        , h = u.splitLines(r)[0].split(" ");
                    c.profile = h[2];
                    for (let g = 3; g < h.length; g++) {
                        const v = h[g]
                            , y = u.matchPrefix(r, "a=rtpmap:" + v + " ")[0];
                        if (y) {
                            const C = u.parseRtpMap(y)
                                , D = u.matchPrefix(r, "a=fmtp:" + v + " ");
                            switch (C.parameters = D.length ? u.parseFmtp(D[0]) : {},
                            C.rtcpFeedback = u.matchPrefix(r, "a=rtcp-fb:" + v + " ").map(u.parseRtcpFb),
                            c.codecs.push(C),
                            C.name.toUpperCase()) {
                                case "RED":
                                case "ULPFEC":
                                    c.fecMechanisms.push(C.name.toUpperCase());
                                    break
                            }
                        }
                    }
                    u.matchPrefix(r, "a=extmap:").forEach(g => {
                        c.headerExtensions.push(u.parseExtmap(g))
                    }
                    );
                    const p = u.matchPrefix(r, "a=rtcp-fb:* ").map(u.parseRtcpFb);
                    return c.codecs.forEach(g => {
                        p.forEach(v => {
                            g.rtcpFeedback.find(C => C.type === v.type && C.parameter === v.parameter) || g.rtcpFeedback.push(v)
                        }
                        )
                    }
                    ),
                        c
                }
                ,
                u.writeRtpDescription = function (r, c) {
                    let o = "";
                    o += "m=" + r + " ",
                        o += c.codecs.length > 0 ? "9" : "0",
                        o += " " + (c.profile || "UDP/TLS/RTP/SAVPF") + " ",
                        o += c.codecs.map(p => p.preferredPayloadType !== void 0 ? p.preferredPayloadType : p.payloadType).join(" ") + `\r
`,
                        o += `c=IN IP4 0.0.0.0\r
`,
                        o += `a=rtcp:9 IN IP4 0.0.0.0\r
`,
                        c.codecs.forEach(p => {
                            o += u.writeRtpMap(p),
                                o += u.writeFmtp(p),
                                o += u.writeRtcpFb(p)
                        }
                        );
                    let h = 0;
                    return c.codecs.forEach(p => {
                        p.maxptime > h && (h = p.maxptime)
                    }
                    ),
                        h > 0 && (o += "a=maxptime:" + h + `\r
`),
                        c.headerExtensions && c.headerExtensions.forEach(p => {
                            o += u.writeExtmap(p)
                        }
                        ),
                        o
                }
                ,
                u.parseRtpEncodingParameters = function (r) {
                    const c = []
                        , o = u.parseRtpParameters(r)
                        , h = o.fecMechanisms.indexOf("RED") !== -1
                        , p = o.fecMechanisms.indexOf("ULPFEC") !== -1
                        , g = u.matchPrefix(r, "a=ssrc:").map(U => u.parseSsrcMedia(U)).filter(U => U.attribute === "cname")
                        , v = g.length > 0 && g[0].ssrc;
                    let y;
                    const C = u.matchPrefix(r, "a=ssrc-group:FID").map(U => U.substring(17).split(" ").map(I => parseInt(I, 10)));
                    C.length > 0 && C[0].length > 1 && C[0][0] === v && (y = C[0][1]),
                        o.codecs.forEach(U => {
                            if (U.name.toUpperCase() === "RTX" && U.parameters.apt) {
                                let L = {
                                    ssrc: v,
                                    codecPayloadType: parseInt(U.parameters.apt, 10)
                                };
                                v && y && (L.rtx = {
                                    ssrc: y
                                }),
                                    c.push(L),
                                    h && (L = JSON.parse(JSON.stringify(L)),
                                        L.fec = {
                                            ssrc: v,
                                            mechanism: p ? "red+ulpfec" : "red"
                                        },
                                        c.push(L))
                            }
                        }
                        ),
                        c.length === 0 && v && c.push({
                            ssrc: v
                        });
                    let D = u.matchPrefix(r, "b=");
                    return D.length && (D[0].indexOf("b=TIAS:") === 0 ? D = parseInt(D[0].substring(7), 10) : D[0].indexOf("b=AS:") === 0 ? D = parseInt(D[0].substring(5), 10) * 1e3 * .95 - 50 * 40 * 8 : D = void 0,
                        c.forEach(U => {
                            U.maxBitrate = D
                        }
                        )),
                        c
                }
                ,
                u.parseRtcpParameters = function (r) {
                    const c = {}
                        , o = u.matchPrefix(r, "a=ssrc:").map(g => u.parseSsrcMedia(g)).filter(g => g.attribute === "cname")[0];
                    o && (c.cname = o.value,
                        c.ssrc = o.ssrc);
                    const h = u.matchPrefix(r, "a=rtcp-rsize");
                    c.reducedSize = h.length > 0,
                        c.compound = h.length === 0;
                    const p = u.matchPrefix(r, "a=rtcp-mux");
                    return c.mux = p.length > 0,
                        c
                }
                ,
                u.writeRtcpParameters = function (r) {
                    let c = "";
                    return r.reducedSize && (c += `a=rtcp-rsize\r
`),
                        r.mux && (c += `a=rtcp-mux\r
`),
                        r.ssrc !== void 0 && r.cname && (c += "a=ssrc:" + r.ssrc + " cname:" + r.cname + `\r
`),
                        c
                }
                ,
                u.parseMsid = function (r) {
                    let c;
                    const o = u.matchPrefix(r, "a=msid:");
                    if (o.length === 1)
                        return c = o[0].substring(7).split(" "),
                        {
                            stream: c[0],
                            track: c[1]
                        };
                    const h = u.matchPrefix(r, "a=ssrc:").map(p => u.parseSsrcMedia(p)).filter(p => p.attribute === "msid");
                    if (h.length > 0)
                        return c = h[0].value.split(" "),
                        {
                            stream: c[0],
                            track: c[1]
                        }
                }
                ,
                u.parseSctpDescription = function (r) {
                    const c = u.parseMLine(r)
                        , o = u.matchPrefix(r, "a=max-message-size:");
                    let h;
                    o.length > 0 && (h = parseInt(o[0].substring(19), 10)),
                        isNaN(h) && (h = 65536);
                    const p = u.matchPrefix(r, "a=sctp-port:");
                    if (p.length > 0)
                        return {
                            port: parseInt(p[0].substring(12), 10),
                            protocol: c.fmt,
                            maxMessageSize: h
                        };
                    const g = u.matchPrefix(r, "a=sctpmap:");
                    if (g.length > 0) {
                        const v = g[0].substring(10).split(" ");
                        return {
                            port: parseInt(v[0], 10),
                            protocol: v[1],
                            maxMessageSize: h
                        }
                    }
                }
                ,
                u.writeSctpDescription = function (r, c) {
                    let o = [];
                    return r.protocol !== "DTLS/SCTP" ? o = ["m=" + r.kind + " 9 " + r.protocol + " " + c.protocol + `\r
`, `c=IN IP4 0.0.0.0\r
`, "a=sctp-port:" + c.port + `\r
`] : o = ["m=" + r.kind + " 9 " + r.protocol + " " + c.port + `\r
`, `c=IN IP4 0.0.0.0\r
`, "a=sctpmap:" + c.port + " " + c.protocol + ` 65535\r
`],
                        c.maxMessageSize !== void 0 && o.push("a=max-message-size:" + c.maxMessageSize + `\r
`),
                        o.join("")
                }
                ,
                u.generateSessionId = function () {
                    return Math.random().toString().substr(2, 22)
                }
                ,
                u.writeSessionBoilerplate = function (r, c, o) {
                    let h;
                    const p = c !== void 0 ? c : 2;
                    return r ? h = r : h = u.generateSessionId(),
                        `v=0\r
o=` + (o || "thisisadapterortc") + " " + h + " " + p + ` IN IP4 127.0.0.1\r
s=-\r
t=0 0\r
`
                }
                ,
                u.getDirection = function (r, c) {
                    const o = u.splitLines(r);
                    for (let h = 0; h < o.length; h++)
                        switch (o[h]) {
                            case "a=sendrecv":
                            case "a=sendonly":
                            case "a=recvonly":
                            case "a=inactive":
                                return o[h].substring(2)
                        }
                    return c ? u.getDirection(c) : "sendrecv"
                }
                ,
                u.getKind = function (r) {
                    return u.splitLines(r)[0].split(" ")[0].substring(2)
                }
                ,
                u.isRejected = function (r) {
                    return r.split(" ", 2)[1] === "0"
                }
                ,
                u.parseMLine = function (r) {
                    const o = u.splitLines(r)[0].substring(2).split(" ");
                    return {
                        kind: o[0],
                        port: parseInt(o[1], 10),
                        protocol: o[2],
                        fmt: o.slice(3).join(" ")
                    }
                }
                ,
                u.parseOLine = function (r) {
                    const o = u.matchPrefix(r, "o=")[0].substring(2).split(" ");
                    return {
                        username: o[0],
                        sessionId: o[1],
                        sessionVersion: parseInt(o[2], 10),
                        netType: o[3],
                        addressType: o[4],
                        address: o[5]
                    }
                }
                ,
                u.isValidSDP = function (r) {
                    if (typeof r != "string" || r.length === 0)
                        return !1;
                    const c = u.splitLines(r);
                    for (let o = 0; o < c.length; o++)
                        if (c[o].length < 2 || c[o].charAt(1) !== "=")
                            return !1;
                    return !0
                }
                ,
                s.exports = u
        }(Mr)),
        Mr.exports
}
var zh = O0();
const Ha = r0(zh)
    , A0 = c0({
        __proto__: null,
        default: Ha
    }, [zh]);
function uu(s) {
    if (!s.RTCIceCandidate || s.RTCIceCandidate && "foundation" in s.RTCIceCandidate.prototype)
        return;
    const u = s.RTCIceCandidate;
    s.RTCIceCandidate = function (c) {
        if (typeof c == "object" && c.candidate && c.candidate.indexOf("a=") === 0 && (c = JSON.parse(JSON.stringify(c)),
            c.candidate = c.candidate.substring(2)),
            c.candidate && c.candidate.length) {
            const o = new u(c)
                , h = Ha.parseCandidate(c.candidate);
            for (const p in h)
                p in o || Object.defineProperty(o, p, {
                    value: h[p]
                });
            return o.toJSON = function () {
                return {
                    candidate: o.candidate,
                    sdpMid: o.sdpMid,
                    sdpMLineIndex: o.sdpMLineIndex,
                    usernameFragment: o.usernameFragment
                }
            }
                ,
                o
        }
        return new u(c)
    }
        ,
        s.RTCIceCandidate.prototype = u.prototype,
        wn(s, "icecandidate", r => (r.candidate && Object.defineProperty(r, "candidate", {
            value: new s.RTCIceCandidate(r.candidate),
            writable: "false"
        }),
            r))
}
function Br(s) {
    !s.RTCIceCandidate || s.RTCIceCandidate && "relayProtocol" in s.RTCIceCandidate.prototype || wn(s, "icecandidate", u => {
        if (u.candidate) {
            const r = Ha.parseCandidate(u.candidate.candidate);
            r.type === "relay" && (u.candidate.relayProtocol = {
                0: "tls",
                1: "tcp",
                2: "udp"
            }[r.priority >> 24])
        }
        return u
    }
    )
}
function cu(s, u) {
    if (!s.RTCPeerConnection)
        return;
    "sctp" in s.RTCPeerConnection.prototype || Object.defineProperty(s.RTCPeerConnection.prototype, "sctp", {
        get() {
            return typeof this._sctp > "u" ? null : this._sctp
        }
    });
    const r = function (g) {
        if (!g || !g.sdp)
            return !1;
        const v = Ha.splitSections(g.sdp);
        return v.shift(),
            v.some(y => {
                const C = Ha.parseMLine(y);
                return C && C.kind === "application" && C.protocol.indexOf("SCTP") !== -1
            }
            )
    }
        , c = function (g) {
            const v = g.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
            if (v === null || v.length < 2)
                return -1;
            const y = parseInt(v[1], 10);
            return y !== y ? -1 : y
        }
        , o = function (g) {
            let v = 65536;
            return u.browser === "firefox" && (u.version < 57 ? g === -1 ? v = 16384 : v = 2147483637 : u.version < 60 ? v = u.version === 57 ? 65535 : 65536 : v = 2147483637),
                v
        }
        , h = function (g, v) {
            let y = 65536;
            u.browser === "firefox" && u.version === 57 && (y = 65535);
            const C = Ha.matchPrefix(g.sdp, "a=max-message-size:");
            return C.length > 0 ? y = parseInt(C[0].substring(19), 10) : u.browser === "firefox" && v !== -1 && (y = 2147483637),
                y
        }
        , p = s.RTCPeerConnection.prototype.setRemoteDescription;
    s.RTCPeerConnection.prototype.setRemoteDescription = function () {
        if (this._sctp = null,
            u.browser === "chrome" && u.version >= 76) {
            const { sdpSemantics: v } = this.getConfiguration();
            v === "plan-b" && Object.defineProperty(this, "sctp", {
                get() {
                    return typeof this._sctp > "u" ? null : this._sctp
                },
                enumerable: !0,
                configurable: !0
            })
        }
        if (r(arguments[0])) {
            const v = c(arguments[0])
                , y = o(v)
                , C = h(arguments[0], v);
            let D;
            y === 0 && C === 0 ? D = Number.POSITIVE_INFINITY : y === 0 || C === 0 ? D = Math.max(y, C) : D = Math.min(y, C);
            const U = {};
            Object.defineProperty(U, "maxMessageSize", {
                get() {
                    return D
                }
            }),
                this._sctp = U
        }
        return p.apply(this, arguments)
    }
}
function ru(s) {
    if (!(s.RTCPeerConnection && "createDataChannel" in s.RTCPeerConnection.prototype))
        return;
    function u(c, o) {
        const h = c.send;
        c.send = function () {
            const g = arguments[0]
                , v = g.length || g.size || g.byteLength;
            if (c.readyState === "open" && o.sctp && v > o.sctp.maxMessageSize)
                throw new TypeError("Message too large (can send a maximum of " + o.sctp.maxMessageSize + " bytes)");
            return h.apply(c, arguments)
        }
    }
    const r = s.RTCPeerConnection.prototype.createDataChannel;
    s.RTCPeerConnection.prototype.createDataChannel = function () {
        const o = r.apply(this, arguments);
        return u(o, this),
            o
    }
        ,
        wn(s, "datachannel", c => (u(c.channel, c.target),
            c))
}
function Nr(s) {
    if (!s.RTCPeerConnection || "connectionState" in s.RTCPeerConnection.prototype)
        return;
    const u = s.RTCPeerConnection.prototype;
    Object.defineProperty(u, "connectionState", {
        get() {
            return {
                completed: "connected",
                checking: "connecting"
            }[this.iceConnectionState] || this.iceConnectionState
        },
        enumerable: !0,
        configurable: !0
    }),
        Object.defineProperty(u, "onconnectionstatechange", {
            get() {
                return this._onconnectionstatechange || null
            },
            set(r) {
                this._onconnectionstatechange && (this.removeEventListener("connectionstatechange", this._onconnectionstatechange),
                    delete this._onconnectionstatechange),
                    r && this.addEventListener("connectionstatechange", this._onconnectionstatechange = r)
            },
            enumerable: !0,
            configurable: !0
        }),
        ["setLocalDescription", "setRemoteDescription"].forEach(r => {
            const c = u[r];
            u[r] = function () {
                return this._connectionstatechangepoly || (this._connectionstatechangepoly = o => {
                    const h = o.target;
                    if (h._lastConnectionState !== h.connectionState) {
                        h._lastConnectionState = h.connectionState;
                        const p = new Event("connectionstatechange", o);
                        h.dispatchEvent(p)
                    }
                    return o
                }
                    ,
                    this.addEventListener("iceconnectionstatechange", this._connectionstatechangepoly)),
                    c.apply(this, arguments)
            }
        }
        )
}
function Hr(s, u) {
    if (!s.RTCPeerConnection || u.browser === "chrome" && u.version >= 71 || u.browser === "safari" && u.version >= 605)
        return;
    const r = s.RTCPeerConnection.prototype.setRemoteDescription;
    s.RTCPeerConnection.prototype.setRemoteDescription = function (o) {
        if (o && o.sdp && o.sdp.indexOf(`
a=extmap-allow-mixed`) !== -1) {
            const h = o.sdp.split(`
`).filter(p => p.trim() !== "a=extmap-allow-mixed").join(`
`);
            s.RTCSessionDescription && o instanceof s.RTCSessionDescription ? arguments[0] = new s.RTCSessionDescription({
                type: o.type,
                sdp: h
            }) : o.sdp = h
        }
        return r.apply(this, arguments)
    }
}
function su(s, u) {
    if (!(s.RTCPeerConnection && s.RTCPeerConnection.prototype))
        return;
    const r = s.RTCPeerConnection.prototype.addIceCandidate;
    !r || r.length === 0 || (s.RTCPeerConnection.prototype.addIceCandidate = function () {
        return arguments[0] ? (u.browser === "chrome" && u.version < 78 || u.browser === "firefox" && u.version < 68 || u.browser === "safari") && arguments[0] && arguments[0].candidate === "" ? Promise.resolve() : r.apply(this, arguments) : (arguments[1] && arguments[1].apply(null),
            Promise.resolve())
    }
    )
}
function fu(s, u) {
    if (!(s.RTCPeerConnection && s.RTCPeerConnection.prototype))
        return;
    const r = s.RTCPeerConnection.prototype.setLocalDescription;
    !r || r.length === 0 || (s.RTCPeerConnection.prototype.setLocalDescription = function () {
        let o = arguments[0] || {};
        if (typeof o != "object" || o.type && o.sdp)
            return r.apply(this, arguments);
        if (o = {
            type: o.type,
            sdp: o.sdp
        },
            !o.type)
            switch (this.signalingState) {
                case "stable":
                case "have-local-offer":
                case "have-remote-pranswer":
                    o.type = "offer";
                    break;
                default:
                    o.type = "answer";
                    break
            }
        return o.sdp || o.type !== "offer" && o.type !== "answer" ? r.apply(this, [o]) : (o.type === "offer" ? this.createOffer : this.createAnswer).apply(this).then(p => r.apply(this, [p]))
    }
    )
}
const M0 = Object.freeze(Object.defineProperty({
    __proto__: null,
    removeExtmapAllowMixed: Hr,
    shimAddIceCandidateNullOrEmpty: su,
    shimConnectionState: Nr,
    shimMaxMessageSize: cu,
    shimParameterlessSetLocalDescription: fu,
    shimRTCIceCandidate: uu,
    shimRTCIceCandidateRelayProtocol: Br,
    shimSendThrowTypeError: ru
}, Symbol.toStringTag, {
    value: "Module"
}));
function x0({ window: s } = {}, u = {
    shimChrome: !0,
    shimFirefox: !0,
    shimSafari: !0
}) {
    const r = nh
        , c = R0(s)
        , o = {
            browserDetails: c,
            commonShim: M0,
            extractVersion: lu,
            disableLog: C0,
            disableWarnings: E0,
            sdp: A0
        };
    switch (c.browser) {
        case "chrome":
            if (!Zd || !kr || !u.shimChrome)
                return r("Chrome shim is not included in this adapter release."),
                    o;
            if (c.version === null)
                return r("Chrome shim can not determine version, not shimming."),
                    o;
            r("adapter.js shimming chrome."),
                o.browserShim = Zd,
                su(s, c),
                fu(s),
                ih(s, c),
                lh(s),
                kr(s, c),
                uh(s),
                fh(s, c),
                ch(s),
                rh(s),
                oh(s, c),
                uu(s),
                Br(s),
                Nr(s),
                cu(s, c),
                ru(s),
                Hr(s, c);
            break;
        case "firefox":
            if (!Kd || !jr || !u.shimFirefox)
                return r("Firefox shim is not included in this adapter release."),
                    o;
            r("adapter.js shimming firefox."),
                o.browserShim = Kd,
                su(s, c),
                fu(s),
                dh(s, c),
                jr(s, c),
                hh(s),
                yh(s),
                ph(s),
                mh(s),
                gh(s),
                vh(s),
                bh(s),
                Sh(s),
                _h(s),
                uu(s),
                Nr(s),
                cu(s, c),
                ru(s);
            break;
        case "safari":
            if (!Jd || !u.shimSafari)
                return r("Safari shim is not included in this adapter release."),
                    o;
            r("adapter.js shimming safari."),
                o.browserShim = Jd,
                su(s, c),
                fu(s),
                Oh(s),
                Mh(s),
                Eh(s),
                Th(s),
                Ch(s),
                Ah(s),
                Rh(s),
                xh(s),
                uu(s),
                Br(s),
                cu(s, c),
                ru(s),
                Hr(s, c);
            break;
        default:
            r("Unsupported browser!");
            break
    }
    return o
}
const Pd = x0({
    window: typeof window > "u" ? void 0 : window
});
function In(s, u, r, c) {
    Object.defineProperty(s, u, {
        get: r,
        set: c,
        enumerable: !0,
        configurable: !0
    })
}
class Uh {
    constructor() {
        this.chunkedMTU = 16300,
            this._dataCount = 1,
            this.chunk = u => {
                const r = []
                    , c = u.byteLength
                    , o = Math.ceil(c / this.chunkedMTU);
                let h = 0
                    , p = 0;
                for (; p < c;) {
                    const g = Math.min(c, p + this.chunkedMTU)
                        , v = u.slice(p, g)
                        , y = {
                            __peerData: this._dataCount,
                            n: h,
                            data: v,
                            total: o
                        };
                    r.push(y),
                        p = g,
                        h++
                }
                return this._dataCount++,
                    r
            }
    }
}
function z0(s) {
    let u = 0;
    for (const o of s)
        u += o.byteLength;
    const r = new Uint8Array(u);
    let c = 0;
    for (const o of s)
        r.set(o, c),
            c += o.byteLength;
    return r
}
const xr = Pd.default || Pd
    , qi = new class {
        isWebRTCSupported() {
            return typeof RTCPeerConnection < "u"
        }
        isBrowserSupported() {
            const s = this.getBrowser()
                , u = this.getVersion();
            return this.supportedBrowsers.includes(s) ? s === "chrome" ? u >= this.minChromeVersion : s === "firefox" ? u >= this.minFirefoxVersion : s === "safari" ? !this.isIOS && u >= this.minSafariVersion : !1 : !1
        }
        getBrowser() {
            return xr.browserDetails.browser
        }
        getVersion() {
            return xr.browserDetails.version || 0
        }
        isUnifiedPlanSupported() {
            const s = this.getBrowser()
                , u = xr.browserDetails.version || 0;
            if (s === "chrome" && u < this.minChromeVersion)
                return !1;
            if (s === "firefox" && u >= this.minFirefoxVersion)
                return !0;
            if (!window.RTCRtpTransceiver || !("currentDirection" in RTCRtpTransceiver.prototype))
                return !1;
            let r, c = !1;
            try {
                r = new RTCPeerConnection,
                    r.addTransceiver("audio"),
                    c = !0
            } catch { } finally {
                r && r.close()
            }
            return c
        }
        toString() {
            return `Supports:
    browser:${this.getBrowser()}
    version:${this.getVersion()}
    isIOS:${this.isIOS}
    isWebRTCSupported:${this.isWebRTCSupported()}
    isBrowserSupported:${this.isBrowserSupported()}
    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`
        }
        constructor() {
            this.isIOS = typeof navigator < "u" ? ["iPad", "iPhone", "iPod"].includes(navigator.platform) : !1,
                this.supportedBrowsers = ["firefox", "chrome", "safari"],
                this.minFirefoxVersion = 59,
                this.minChromeVersion = 72,
                this.minSafariVersion = 605
        }
    }
    , U0 = s => !s || /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(s)
    , kh = () => Math.random().toString(36).slice(2)
    , Fd = {
        iceServers: [{
            urls: "stun:stun.l.google.com:19302"
        }, {
            urls: ["turn:eu-0.turn.peerjs.com:3478", "turn:us-0.turn.peerjs.com:3478"],
            username: "peerjs",
            credential: "peerjsp"
        }],
        sdpSemantics: "unified-plan"
    };
class k0 extends Uh {
    noop() { }
    blobToArrayBuffer(u, r) {
        const c = new FileReader;
        return c.onload = function (o) {
            o.target && r(o.target.result)
        }
            ,
            c.readAsArrayBuffer(u),
            c
    }
    binaryStringToArrayBuffer(u) {
        const r = new Uint8Array(u.length);
        for (let c = 0; c < u.length; c++)
            r[c] = u.charCodeAt(c) & 255;
        return r.buffer
    }
    isSecure() {
        return location.protocol === "https:"
    }
    constructor(...u) {
        super(...u),
            this.CLOUD_HOST = "0.peerjs.com",
            this.CLOUD_PORT = 443,
            this.chunkedBrowsers = {
                Chrome: 1,
                chrome: 1
            },
            this.defaultConfig = Fd,
            this.browser = qi.getBrowser(),
            this.browserVersion = qi.getVersion(),
            this.pack = Id,
            this.unpack = wd,
            this.supports = function () {
                const r = {
                    browser: qi.isBrowserSupported(),
                    webRTC: qi.isWebRTCSupported(),
                    audioVideo: !1,
                    data: !1,
                    binaryBlob: !1,
                    reliable: !1
                };
                if (!r.webRTC)
                    return r;
                let c;
                try {
                    c = new RTCPeerConnection(Fd),
                        r.audioVideo = !0;
                    let o;
                    try {
                        o = c.createDataChannel("_PEERJSTEST", {
                            ordered: !0
                        }),
                            r.data = !0,
                            r.reliable = !!o.ordered;
                        try {
                            o.binaryType = "blob",
                                r.binaryBlob = !qi.isIOS
                        } catch { }
                    } catch { } finally {
                        o && o.close()
                    }
                } catch { } finally {
                    c && c.close()
                }
                return r
            }(),
            this.validateId = U0,
            this.randomToken = kh
    }
}
const We = new k0
    , j0 = "PeerJS: ";
var Wd;
(function (s) {
    s[s.Disabled = 0] = "Disabled",
        s[s.Errors = 1] = "Errors",
        s[s.Warnings = 2] = "Warnings",
        s[s.All = 3] = "All"
}
)(Wd || (Wd = {}));
class B0 {
    get logLevel() {
        return this._logLevel
    }
    set logLevel(u) {
        this._logLevel = u
    }
    log(...u) {
        this._logLevel >= 3 && this._print(3, ...u)
    }
    warn(...u) {
        this._logLevel >= 2 && this._print(2, ...u)
    }
    error(...u) {
        this._logLevel >= 1 && this._print(1, ...u)
    }
    setLogFunction(u) {
        this._print = u
    }
    _print(u, ...r) {
        const c = [j0, ...r];
        for (const o in c)
            c[o] instanceof Error && (c[o] = "(" + c[o].name + ") " + c[o].message);
        u >= 3 ? console.log(...c) : u >= 2 ? console.warn("WARNING", ...c) : u >= 1 && console.error("ERROR", ...c)
    }
    constructor() {
        this._logLevel = 0
    }
}
var N = new B0
    , Zr = {}
    , N0 = Object.prototype.hasOwnProperty
    , Ze = "~";
function Xi() { }
Object.create && (Xi.prototype = Object.create(null),
    new Xi().__proto__ || (Ze = !1));
function H0(s, u, r) {
    this.fn = s,
        this.context = u,
        this.once = r || !1
}
function jh(s, u, r, c, o) {
    if (typeof r != "function")
        throw new TypeError("The listener must be a function");
    var h = new H0(r, c || s, o)
        , p = Ze ? Ze + u : u;
    return s._events[p] ? s._events[p].fn ? s._events[p] = [s._events[p], h] : s._events[p].push(h) : (s._events[p] = h,
        s._eventsCount++),
        s
}
function ou(s, u) {
    --s._eventsCount === 0 ? s._events = new Xi : delete s._events[u]
}
function Ye() {
    this._events = new Xi,
        this._eventsCount = 0
}
Ye.prototype.eventNames = function () {
    var u = [], r, c;
    if (this._eventsCount === 0)
        return u;
    for (c in r = this._events)
        N0.call(r, c) && u.push(Ze ? c.slice(1) : c);
    return Object.getOwnPropertySymbols ? u.concat(Object.getOwnPropertySymbols(r)) : u
}
    ;
Ye.prototype.listeners = function (u) {
    var r = Ze ? Ze + u : u
        , c = this._events[r];
    if (!c)
        return [];
    if (c.fn)
        return [c.fn];
    for (var o = 0, h = c.length, p = new Array(h); o < h; o++)
        p[o] = c[o].fn;
    return p
}
    ;
Ye.prototype.listenerCount = function (u) {
    var r = Ze ? Ze + u : u
        , c = this._events[r];
    return c ? c.fn ? 1 : c.length : 0
}
    ;
Ye.prototype.emit = function (u, r, c, o, h, p) {
    var g = Ze ? Ze + u : u;
    if (!this._events[g])
        return !1;
    var v = this._events[g], y = arguments.length, C, D;
    if (v.fn) {
        switch (v.once && this.removeListener(u, v.fn, void 0, !0),
        y) {
            case 1:
                return v.fn.call(v.context),
                    !0;
            case 2:
                return v.fn.call(v.context, r),
                    !0;
            case 3:
                return v.fn.call(v.context, r, c),
                    !0;
            case 4:
                return v.fn.call(v.context, r, c, o),
                    !0;
            case 5:
                return v.fn.call(v.context, r, c, o, h),
                    !0;
            case 6:
                return v.fn.call(v.context, r, c, o, h, p),
                    !0
        }
        for (D = 1,
            C = new Array(y - 1); D < y; D++)
            C[D - 1] = arguments[D];
        v.fn.apply(v.context, C)
    } else {
        var U = v.length, L;
        for (D = 0; D < U; D++)
            switch (v[D].once && this.removeListener(u, v[D].fn, void 0, !0),
            y) {
                case 1:
                    v[D].fn.call(v[D].context);
                    break;
                case 2:
                    v[D].fn.call(v[D].context, r);
                    break;
                case 3:
                    v[D].fn.call(v[D].context, r, c);
                    break;
                case 4:
                    v[D].fn.call(v[D].context, r, c, o);
                    break;
                default:
                    if (!C)
                        for (L = 1,
                            C = new Array(y - 1); L < y; L++)
                            C[L - 1] = arguments[L];
                    v[D].fn.apply(v[D].context, C)
            }
    }
    return !0
}
    ;
Ye.prototype.on = function (u, r, c) {
    return jh(this, u, r, c, !1)
}
    ;
Ye.prototype.once = function (u, r, c) {
    return jh(this, u, r, c, !0)
}
    ;
Ye.prototype.removeListener = function (u, r, c, o) {
    var h = Ze ? Ze + u : u;
    if (!this._events[h])
        return this;
    if (!r)
        return ou(this, h),
            this;
    var p = this._events[h];
    if (p.fn)
        p.fn === r && (!o || p.once) && (!c || p.context === c) && ou(this, h);
    else {
        for (var g = 0, v = [], y = p.length; g < y; g++)
            (p[g].fn !== r || o && !p[g].once || c && p[g].context !== c) && v.push(p[g]);
        v.length ? this._events[h] = v.length === 1 ? v[0] : v : ou(this, h)
    }
    return this
}
    ;
Ye.prototype.removeAllListeners = function (u) {
    var r;
    return u ? (r = Ze ? Ze + u : u,
        this._events[r] && ou(this, r)) : (this._events = new Xi,
            this._eventsCount = 0),
        this
}
    ;
Ye.prototype.off = Ye.prototype.removeListener;
Ye.prototype.addListener = Ye.prototype.on;
Ye.prefixed = Ze;
Ye.EventEmitter = Ye;
Zr = Ye;
var ea = {};
In(ea, "ConnectionType", () => kt);
In(ea, "PeerErrorType", () => Se);
In(ea, "BaseConnectionErrorType", () => Qi);
In(ea, "DataConnectionErrorType", () => Vi);
In(ea, "SerializationType", () => La);
In(ea, "SocketEventType", () => Ut);
In(ea, "ServerMessageType", () => Ue);
var kt;
(function (s) {
    s.Data = "data",
        s.Media = "media"
}
)(kt || (kt = {}));
var Se;
(function (s) {
    s.BrowserIncompatible = "browser-incompatible",
        s.Disconnected = "disconnected",
        s.InvalidID = "invalid-id",
        s.InvalidKey = "invalid-key",
        s.Network = "network",
        s.PeerUnavailable = "peer-unavailable",
        s.SslUnavailable = "ssl-unavailable",
        s.ServerError = "server-error",
        s.SocketError = "socket-error",
        s.SocketClosed = "socket-closed",
        s.UnavailableID = "unavailable-id",
        s.WebRTC = "webrtc"
}
)(Se || (Se = {}));
var Qi;
(function (s) {
    s.NegotiationFailed = "negotiation-failed",
        s.ConnectionClosed = "connection-closed"
}
)(Qi || (Qi = {}));
var Vi;
(function (s) {
    s.NotOpenYet = "not-open-yet",
        s.MessageToBig = "message-too-big"
}
)(Vi || (Vi = {}));
var La;
(function (s) {
    s.Binary = "binary",
        s.BinaryUTF8 = "binary-utf8",
        s.JSON = "json",
        s.None = "raw"
}
)(La || (La = {}));
var Ut;
(function (s) {
    s.Message = "message",
        s.Disconnected = "disconnected",
        s.Error = "error",
        s.Close = "close"
}
)(Ut || (Ut = {}));
var Ue;
(function (s) {
    s.Heartbeat = "HEARTBEAT",
        s.Candidate = "CANDIDATE",
        s.Offer = "OFFER",
        s.Answer = "ANSWER",
        s.Open = "OPEN",
        s.Error = "ERROR",
        s.IdTaken = "ID-TAKEN",
        s.InvalidKey = "INVALID-KEY",
        s.Leave = "LEAVE",
        s.Expire = "EXPIRE"
}
)(Ue || (Ue = {}));
var Kr = {};
Kr = JSON.parse('{"name":"peerjs","version":"1.5.4","keywords":["peerjs","webrtc","p2p","rtc"],"description":"PeerJS client","homepage":"https://peerjs.com","bugs":{"url":"https://github.com/peers/peerjs/issues"},"repository":{"type":"git","url":"https://github.com/peers/peerjs"},"license":"MIT","contributors":["Michelle Bu <michelle@michellebu.com>","afrokick <devbyru@gmail.com>","ericz <really.ez@gmail.com>","Jairo <kidandcat@gmail.com>","Jonas Gloning <34194370+jonasgloning@users.noreply.github.com>","Jairo Caro-Accino Viciana <jairo@galax.be>","Carlos Caballero <carlos.caballero.gonzalez@gmail.com>","hc <hheennrryy@gmail.com>","Muhammad Asif <capripio@gmail.com>","PrashoonB <prashoonbhattacharjee@gmail.com>","Harsh Bardhan Mishra <47351025+HarshCasper@users.noreply.github.com>","akotynski <aleksanderkotbury@gmail.com>","lmb <i@lmb.io>","Jairooo <jairocaro@msn.com>","Moritz Stückler <moritz.stueckler@gmail.com>","Simon <crydotsnakegithub@gmail.com>","Denis Lukov <denismassters@gmail.com>","Philipp Hancke <fippo@andyet.net>","Hans Oksendahl <hansoksendahl@gmail.com>","Jess <jessachandler@gmail.com>","khankuan <khankuan@gmail.com>","DUODVK <kurmanov.work@gmail.com>","XiZhao <kwang1imsa@gmail.com>","Matthias Lohr <matthias@lohr.me>","=frank tree <=frnktrb@googlemail.com>","Andre Eckardt <aeckardt@outlook.com>","Chris Cowan <agentme49@gmail.com>","Alex Chuev <alex@chuev.com>","alxnull <alxnull@e.mail.de>","Yemel Jardi <angel.jardi@gmail.com>","Ben Parnell <benjaminparnell.94@gmail.com>","Benny Lichtner <bennlich@gmail.com>","fresheneesz <bitetrudpublic@gmail.com>","bob.barstead@exaptive.com <bob.barstead@exaptive.com>","chandika <chandika@gmail.com>","emersion <contact@emersion.fr>","Christopher Van <cvan@users.noreply.github.com>","eddieherm <edhermoso@gmail.com>","Eduardo Pinho <enet4mikeenet@gmail.com>","Evandro Zanatta <ezanatta@tray.net.br>","Gardner Bickford <gardner@users.noreply.github.com>","Gian Luca <gianluca.cecchi@cynny.com>","PatrickJS <github@gdi2290.com>","jonnyf <github@jonathanfoss.co.uk>","Hizkia Felix <hizkifw@gmail.com>","Hristo Oskov <hristo.oskov@gmail.com>","Isaac Madwed <i.madwed@gmail.com>","Ilya Konanykhin <ilya.konanykhin@gmail.com>","jasonbarry <jasbarry@me.com>","Jonathan Burke <jonathan.burke.1311@googlemail.com>","Josh Hamit <josh.hamit@gmail.com>","Jordan Austin <jrax86@gmail.com>","Joel Wetzell <jwetzell@yahoo.com>","xizhao <kevin.wang@cloudera.com>","Alberto Torres <kungfoobar@gmail.com>","Jonathan Mayol <mayoljonathan@gmail.com>","Jefferson Felix <me@jsfelix.dev>","Rolf Erik Lekang <me@rolflekang.com>","Kevin Mai-Husan Chia <mhchia@users.noreply.github.com>","Pepijn de Vos <pepijndevos@gmail.com>","JooYoung <qkdlql@naver.com>","Tobias Speicher <rootcommander@gmail.com>","Steve Blaurock <sblaurock@gmail.com>","Kyrylo Shegeda <shegeda@ualberta.ca>","Diwank Singh Tomer <singh@diwank.name>","Sören Balko <Soeren.Balko@gmail.com>","Arpit Solanki <solankiarpit1997@gmail.com>","Yuki Ito <yuki@gnnk.net>","Artur Zayats <zag2art@gmail.com>"],"funding":{"type":"opencollective","url":"https://opencollective.com/peer"},"collective":{"type":"opencollective","url":"https://opencollective.com/peer"},"files":["dist/*"],"sideEffects":["lib/global.ts","lib/supports.ts"],"main":"dist/bundler.cjs","module":"dist/bundler.mjs","browser-minified":"dist/peerjs.min.js","browser-unminified":"dist/peerjs.js","browser-minified-msgpack":"dist/serializer.msgpack.mjs","types":"dist/types.d.ts","engines":{"node":">= 14"},"targets":{"types":{"source":"lib/exports.ts"},"main":{"source":"lib/exports.ts","sourceMap":{"inlineSources":true}},"module":{"source":"lib/exports.ts","includeNodeModules":["eventemitter3"],"sourceMap":{"inlineSources":true}},"browser-minified":{"context":"browser","outputFormat":"global","optimize":true,"engines":{"browsers":"chrome >= 83, edge >= 83, firefox >= 80, safari >= 15"},"source":"lib/global.ts"},"browser-unminified":{"context":"browser","outputFormat":"global","optimize":false,"engines":{"browsers":"chrome >= 83, edge >= 83, firefox >= 80, safari >= 15"},"source":"lib/global.ts"},"browser-minified-msgpack":{"context":"browser","outputFormat":"esmodule","isLibrary":true,"optimize":true,"engines":{"browsers":"chrome >= 83, edge >= 83, firefox >= 102, safari >= 15"},"source":"lib/dataconnection/StreamConnection/MsgPack.ts"}},"scripts":{"contributors":"git-authors-cli --print=false && prettier --write package.json && git add package.json package-lock.json && git commit -m \\"chore(contributors): update and sort contributors list\\"","check":"tsc --noEmit && tsc -p e2e/tsconfig.json --noEmit","watch":"parcel watch","build":"rm -rf dist && parcel build","prepublishOnly":"npm run build","test":"jest","test:watch":"jest --watch","coverage":"jest --coverage --collectCoverageFrom=\\"./lib/**\\"","format":"prettier --write .","format:check":"prettier --check .","semantic-release":"semantic-release","e2e":"wdio run e2e/wdio.local.conf.ts","e2e:bstack":"wdio run e2e/wdio.bstack.conf.ts"},"devDependencies":{"@parcel/config-default":"^2.9.3","@parcel/packager-ts":"^2.9.3","@parcel/transformer-typescript-tsc":"^2.9.3","@parcel/transformer-typescript-types":"^2.9.3","@semantic-release/changelog":"^6.0.1","@semantic-release/git":"^10.0.1","@swc/core":"^1.3.27","@swc/jest":"^0.2.24","@types/jasmine":"^4.3.4","@wdio/browserstack-service":"^8.11.2","@wdio/cli":"^8.11.2","@wdio/globals":"^8.11.2","@wdio/jasmine-framework":"^8.11.2","@wdio/local-runner":"^8.11.2","@wdio/spec-reporter":"^8.11.2","@wdio/types":"^8.10.4","http-server":"^14.1.1","jest":"^29.3.1","jest-environment-jsdom":"^29.3.1","mock-socket":"^9.0.0","parcel":"^2.9.3","prettier":"^3.0.0","semantic-release":"^21.0.0","ts-node":"^10.9.1","typescript":"^5.0.0","wdio-geckodriver-service":"^5.0.1"},"dependencies":{"@msgpack/msgpack":"^2.8.0","eventemitter3":"^4.0.7","peerjs-js-binarypack":"^2.1.0","webrtc-adapter":"^9.0.0"},"alias":{"process":false,"buffer":false}}');
class L0 extends Zr.EventEmitter {
    constructor(u, r, c, o, h, p = 5e3) {
        super(),
            this.pingInterval = p,
            this._disconnected = !0,
            this._messagesQueue = [];
        const g = u ? "wss://" : "ws://";
        this._baseUrl = g + r + ":" + c + o + "peerjs?key=" + h
    }
    start(u, r) {
        this._id = u;
        const c = `${this._baseUrl}&id=${u}&token=${r}`;
        this._socket || !this._disconnected || (this._socket = new WebSocket(c + "&version=" + Kr.version),
            this._disconnected = !1,
            this._socket.onmessage = o => {
                let h;
                try {
                    h = JSON.parse(o.data),
                        N.log("Server message received:", h)
                } catch {
                    N.log("Invalid server message", o.data);
                    return
                }
                this.emit(Ut.Message, h)
            }
            ,
            this._socket.onclose = o => {
                this._disconnected || (N.log("Socket closed.", o),
                    this._cleanup(),
                    this._disconnected = !0,
                    this.emit(Ut.Disconnected))
            }
            ,
            this._socket.onopen = () => {
                this._disconnected || (this._sendQueuedMessages(),
                    N.log("Socket open"),
                    this._scheduleHeartbeat())
            }
        )
    }
    _scheduleHeartbeat() {
        this._wsPingTimer = setTimeout(() => {
            this._sendHeartbeat()
        }
            , this.pingInterval)
    }
    _sendHeartbeat() {
        if (!this._wsOpen()) {
            N.log("Cannot send heartbeat, because socket closed");
            return
        }
        const u = JSON.stringify({
            type: Ue.Heartbeat
        });
        this._socket.send(u),
            this._scheduleHeartbeat()
    }
    _wsOpen() {
        return !!this._socket && this._socket.readyState === 1
    }
    _sendQueuedMessages() {
        const u = [...this._messagesQueue];
        this._messagesQueue = [];
        for (const r of u)
            this.send(r)
    }
    send(u) {
        if (this._disconnected)
            return;
        if (!this._id) {
            this._messagesQueue.push(u);
            return
        }
        if (!u.type) {
            this.emit(Ut.Error, "Invalid message");
            return
        }
        if (!this._wsOpen())
            return;
        const r = JSON.stringify(u);
        this._socket.send(r)
    }
    close() {
        this._disconnected || (this._cleanup(),
            this._disconnected = !0)
    }
    _cleanup() {
        this._socket && (this._socket.onopen = this._socket.onmessage = this._socket.onclose = null,
            this._socket.close(),
            this._socket = void 0),
            clearTimeout(this._wsPingTimer)
    }
}
class Bh {
    constructor(u) {
        this.connection = u
    }
    startConnection(u) {
        const r = this._startPeerConnection();
        if (this.connection.peerConnection = r,
            this.connection.type === kt.Media && u._stream && this._addTracksToConnection(u._stream, r),
            u.originator) {
            const c = this.connection
                , o = {
                    ordered: !!u.reliable
                }
                , h = r.createDataChannel(c.label, o);
            c._initializeDataChannel(h),
                this._makeOffer()
        } else
            this.handleSDP("OFFER", u.sdp)
    }
    _startPeerConnection() {
        N.log("Creating RTCPeerConnection.");
        const u = new RTCPeerConnection(this.connection.provider.options.config);
        return this._setupListeners(u),
            u
    }
    _setupListeners(u) {
        const r = this.connection.peer
            , c = this.connection.connectionId
            , o = this.connection.type
            , h = this.connection.provider;
        N.log("Listening for ICE candidates."),
            u.onicecandidate = p => {
                !p.candidate || !p.candidate.candidate || (N.log(`Received ICE candidates for ${r}:`, p.candidate),
                    h.socket.send({
                        type: Ue.Candidate,
                        payload: {
                            candidate: p.candidate,
                            type: o,
                            connectionId: c
                        },
                        dst: r
                    }))
            }
            ,
            u.oniceconnectionstatechange = () => {
                switch (u.iceConnectionState) {
                    case "failed":
                        N.log("iceConnectionState is failed, closing connections to " + r),
                            this.connection.emitError(Qi.NegotiationFailed, "Negotiation of connection to " + r + " failed."),
                            this.connection.close();
                        break;
                    case "closed":
                        N.log("iceConnectionState is closed, closing connections to " + r),
                            this.connection.emitError(Qi.ConnectionClosed, "Connection to " + r + " closed."),
                            this.connection.close();
                        break;
                    case "disconnected":
                        N.log("iceConnectionState changed to disconnected on the connection with " + r);
                        break;
                    case "completed":
                        u.onicecandidate = () => { }
                            ;
                        break
                }
                this.connection.emit("iceStateChanged", u.iceConnectionState)
            }
            ,
            N.log("Listening for data channel"),
            u.ondatachannel = p => {
                N.log("Received data channel");
                const g = p.channel;
                h.getConnection(r, c)._initializeDataChannel(g)
            }
            ,
            N.log("Listening for remote stream"),
            u.ontrack = p => {
                N.log("Received remote stream");
                const g = p.streams[0]
                    , v = h.getConnection(r, c);
                if (v.type === kt.Media) {
                    const y = v;
                    this._addStreamToMediaConnection(g, y)
                }
            }
    }
    cleanup() {
        N.log("Cleaning up PeerConnection to " + this.connection.peer);
        const u = this.connection.peerConnection;
        if (!u)
            return;
        this.connection.peerConnection = null,
            u.onicecandidate = u.oniceconnectionstatechange = u.ondatachannel = u.ontrack = () => { }
            ;
        const r = u.signalingState !== "closed";
        let c = !1;
        const o = this.connection.dataChannel;
        o && (c = !!o.readyState && o.readyState !== "closed"),
            (r || c) && u.close()
    }
    async _makeOffer() {
        const u = this.connection.peerConnection
            , r = this.connection.provider;
        try {
            const c = await u.createOffer(this.connection.options.constraints);
            N.log("Created offer."),
                this.connection.options.sdpTransform && typeof this.connection.options.sdpTransform == "function" && (c.sdp = this.connection.options.sdpTransform(c.sdp) || c.sdp);
            try {
                await u.setLocalDescription(c),
                    N.log("Set localDescription:", c, `for:${this.connection.peer}`);
                let o = {
                    sdp: c,
                    type: this.connection.type,
                    connectionId: this.connection.connectionId,
                    metadata: this.connection.metadata
                };
                if (this.connection.type === kt.Data) {
                    const h = this.connection;
                    o = {
                        ...o,
                        label: h.label,
                        reliable: h.reliable,
                        serialization: h.serialization
                    }
                }
                r.socket.send({
                    type: Ue.Offer,
                    payload: o,
                    dst: this.connection.peer
                })
            } catch (o) {
                o != "OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer" && (r.emitError(Se.WebRTC, o),
                    N.log("Failed to setLocalDescription, ", o))
            }
        } catch (c) {
            r.emitError(Se.WebRTC, c),
                N.log("Failed to createOffer, ", c)
        }
    }
    async _makeAnswer() {
        const u = this.connection.peerConnection
            , r = this.connection.provider;
        try {
            const c = await u.createAnswer();
            N.log("Created answer."),
                this.connection.options.sdpTransform && typeof this.connection.options.sdpTransform == "function" && (c.sdp = this.connection.options.sdpTransform(c.sdp) || c.sdp);
            try {
                await u.setLocalDescription(c),
                    N.log("Set localDescription:", c, `for:${this.connection.peer}`),
                    r.socket.send({
                        type: Ue.Answer,
                        payload: {
                            sdp: c,
                            type: this.connection.type,
                            connectionId: this.connection.connectionId
                        },
                        dst: this.connection.peer
                    })
            } catch (o) {
                r.emitError(Se.WebRTC, o),
                    N.log("Failed to setLocalDescription, ", o)
            }
        } catch (c) {
            r.emitError(Se.WebRTC, c),
                N.log("Failed to create answer, ", c)
        }
    }
    async handleSDP(u, r) {
        r = new RTCSessionDescription(r);
        const c = this.connection.peerConnection
            , o = this.connection.provider;
        N.log("Setting remote description", r);
        const h = this;
        try {
            await c.setRemoteDescription(r),
                N.log(`Set remoteDescription:${u} for:${this.connection.peer}`),
                u === "OFFER" && await h._makeAnswer()
        } catch (p) {
            o.emitError(Se.WebRTC, p),
                N.log("Failed to setRemoteDescription, ", p)
        }
    }
    async handleCandidate(u) {
        N.log("handleCandidate:", u);
        try {
            await this.connection.peerConnection.addIceCandidate(u),
                N.log(`Added ICE candidate for:${this.connection.peer}`)
        } catch (r) {
            this.connection.provider.emitError(Se.WebRTC, r),
                N.log("Failed to handleCandidate, ", r)
        }
    }
    _addTracksToConnection(u, r) {
        if (N.log(`add tracks from stream ${u.id} to peer connection`),
            !r.addTrack)
            return N.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");
        u.getTracks().forEach(c => {
            r.addTrack(c, u)
        }
        )
    }
    _addStreamToMediaConnection(u, r) {
        N.log(`add stream ${u.id} to media connection ${r.connectionId}`),
            r.addStream(u)
    }
}
class Nh extends Zr.EventEmitter {
    emitError(u, r) {
        N.error("Error:", r),
            this.emit("error", new q0(`${u}`, r))
    }
}
class q0 extends Error {
    constructor(u, r) {
        typeof r == "string" ? super(r) : (super(),
            Object.assign(this, r)),
            this.type = u
    }
}
class Hh extends Nh {
    get open() {
        return this._open
    }
    constructor(u, r, c) {
        super(),
            this.peer = u,
            this.provider = r,
            this.options = c,
            this._open = !1,
            this.metadata = c.metadata
    }
}
var qr;
const Yi = class Yi extends Hh {
    get type() {
        return kt.Media
    }
    get localStream() {
        return this._localStream
    }
    get remoteStream() {
        return this._remoteStream
    }
    constructor(u, r, c) {
        super(u, r, c),
            this._localStream = this.options._stream,
            this.connectionId = this.options.connectionId || Yi.ID_PREFIX + We.randomToken(),
            this._negotiator = new Bh(this),
            this._localStream && this._negotiator.startConnection({
                _stream: this._localStream,
                originator: !0
            })
    }
    _initializeDataChannel(u) {
        this.dataChannel = u,
            this.dataChannel.onopen = () => {
                N.log(`DC#${this.connectionId} dc connection success`),
                    this.emit("willCloseOnRemote")
            }
            ,
            this.dataChannel.onclose = () => {
                N.log(`DC#${this.connectionId} dc closed for:`, this.peer),
                    this.close()
            }
    }
    addStream(u) {
        N.log("Receiving stream", u),
            this._remoteStream = u,
            super.emit("stream", u)
    }
    handleMessage(u) {
        const r = u.type
            , c = u.payload;
        switch (u.type) {
            case Ue.Answer:
                this._negotiator.handleSDP(r, c.sdp),
                    this._open = !0;
                break;
            case Ue.Candidate:
                this._negotiator.handleCandidate(c.candidate);
                break;
            default:
                N.warn(`Unrecognized message type:${r} from peer:${this.peer}`);
                break
        }
    }
    answer(u, r = {}) {
        if (this._localStream) {
            N.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");
            return
        }
        this._localStream = u,
            r && r.sdpTransform && (this.options.sdpTransform = r.sdpTransform),
            this._negotiator.startConnection({
                ...this.options._payload,
                _stream: u
            });
        const c = this.provider._getMessages(this.connectionId);
        for (const o of c)
            this.handleMessage(o);
        this._open = !0
    }
    close() {
        this._negotiator && (this._negotiator.cleanup(),
            this._negotiator = null),
            this._localStream = null,
            this._remoteStream = null,
            this.provider && (this.provider._removeConnection(this),
                this.provider = null),
            this.options && this.options._stream && (this.options._stream = null),
            this.open && (this._open = !1,
                super.emit("close"))
    }
}
    ;
qr = new WeakMap,
    Ni(Yi, qr, Yi.ID_PREFIX = "mc_");
let du = Yi;
class Y0 {
    constructor(u) {
        this._options = u
    }
    _buildRequest(u) {
        const r = this._options.secure ? "https" : "http"
            , { host: c, port: o, path: h, key: p } = this._options
            , g = new URL(`${r}://${c}:${o}${h}${p}/${u}`);
        return g.searchParams.set("ts", `${Date.now()}${Math.random()}`),
            g.searchParams.set("version", Kr.version),
            fetch(g.href, {
                referrerPolicy: this._options.referrerPolicy
            })
    }
    async retrieveId() {
        try {
            const u = await this._buildRequest("id");
            if (u.status !== 200)
                throw new Error(`Error. Status:${u.status}`);
            return u.text()
        } catch (u) {
            N.error("Error retrieving ID", u);
            let r = "";
            throw this._options.path === "/" && this._options.host !== We.CLOUD_HOST && (r = " If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),
            new Error("Could not get an ID from the server." + r)
        }
    }
    async listAllPeers() {
        try {
            const u = await this._buildRequest("peers");
            if (u.status !== 200) {
                if (u.status === 401) {
                    let r = "";
                    throw this._options.host === We.CLOUD_HOST ? r = "It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key." : r = "You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.",
                    new Error("It doesn't look like you have permission to list peers IDs. " + r)
                }
                throw new Error(`Error. Status:${u.status}`)
            }
            return u.json()
        } catch (u) {
            throw N.error("Error retrieving list peers", u),
            new Error("Could not get list peers from the server." + u)
        }
    }
}
var Yr, Gr;
const Wn = class Wn extends Hh {
    get type() {
        return kt.Data
    }
    constructor(u, r, c) {
        super(u, r, c),
            this.connectionId = this.options.connectionId || Wn.ID_PREFIX + kh(),
            this.label = this.options.label || this.connectionId,
            this.reliable = !!this.options.reliable,
            this._negotiator = new Bh(this),
            this._negotiator.startConnection(this.options._payload || {
                originator: !0,
                reliable: this.reliable
            })
    }
    _initializeDataChannel(u) {
        this.dataChannel = u,
            this.dataChannel.onopen = () => {
                N.log(`DC#${this.connectionId} dc connection success`),
                    this._open = !0,
                    this.emit("open")
            }
            ,
            this.dataChannel.onmessage = r => {
                N.log(`DC#${this.connectionId} dc onmessage:`, r.data)
            }
            ,
            this.dataChannel.onclose = () => {
                N.log(`DC#${this.connectionId} dc closed for:`, this.peer),
                    this.close()
            }
    }
    close(u) {
        if (u != null && u.flush) {
            this.send({
                __peerData: {
                    type: "close"
                }
            });
            return
        }
        this._negotiator && (this._negotiator.cleanup(),
            this._negotiator = null),
            this.provider && (this.provider._removeConnection(this),
                this.provider = null),
            this.dataChannel && (this.dataChannel.onopen = null,
                this.dataChannel.onmessage = null,
                this.dataChannel.onclose = null,
                this.dataChannel = null),
            this.open && (this._open = !1,
                super.emit("close"))
    }
    send(u, r = !1) {
        if (!this.open) {
            this.emitError(Vi.NotOpenYet, "Connection is not open. You should listen for the `open` event before sending messages.");
            return
        }
        return this._send(u, r)
    }
    async handleMessage(u) {
        const r = u.payload;
        switch (u.type) {
            case Ue.Answer:
                await this._negotiator.handleSDP(u.type, r.sdp);
                break;
            case Ue.Candidate:
                await this._negotiator.handleCandidate(r.candidate);
                break;
            default:
                N.warn("Unrecognized message type:", u.type, "from peer:", this.peer);
                break
        }
    }
}
    ;
Yr = new WeakMap,
    Gr = new WeakMap,
    Ni(Wn, Yr, Wn.ID_PREFIX = "dc_"),
    Ni(Wn, Gr, Wn.MAX_BUFFERED_AMOUNT = 8388608);
let hu = Wn;
class Jr extends hu {
    get bufferSize() {
        return this._bufferSize
    }
    _initializeDataChannel(u) {
        super._initializeDataChannel(u),
            this.dataChannel.binaryType = "arraybuffer",
            this.dataChannel.addEventListener("message", r => this._handleDataMessage(r))
    }
    _bufferedSend(u) {
        (this._buffering || !this._trySend(u)) && (this._buffer.push(u),
            this._bufferSize = this._buffer.length)
    }
    _trySend(u) {
        if (!this.open)
            return !1;
        if (this.dataChannel.bufferedAmount > hu.MAX_BUFFERED_AMOUNT)
            return this._buffering = !0,
                setTimeout(() => {
                    this._buffering = !1,
                        this._tryBuffer()
                }
                    , 50),
                !1;
        try {
            this.dataChannel.send(u)
        } catch (r) {
            return N.error(`DC#:${this.connectionId} Error when sending:`, r),
                this._buffering = !0,
                this.close(),
                !1
        }
        return !0
    }
    _tryBuffer() {
        if (!this.open || this._buffer.length === 0)
            return;
        const u = this._buffer[0];
        this._trySend(u) && (this._buffer.shift(),
            this._bufferSize = this._buffer.length,
            this._tryBuffer())
    }
    close(u) {
        if (u != null && u.flush) {
            this.send({
                __peerData: {
                    type: "close"
                }
            });
            return
        }
        this._buffer = [],
            this._bufferSize = 0,
            super.close()
    }
    constructor(...u) {
        super(...u),
            this._buffer = [],
            this._bufferSize = 0,
            this._buffering = !1
    }
}
class zr extends Jr {
    close(u) {
        super.close(u),
            this._chunkedData = {}
    }
    constructor(u, r, c) {
        super(u, r, c),
            this.chunker = new Uh,
            this.serialization = La.Binary,
            this._chunkedData = {}
    }
    _handleDataMessage({ data: u }) {
        const r = wd(u)
            , c = r.__peerData;
        if (c) {
            if (c.type === "close") {
                this.close();
                return
            }
            this._handleChunk(r);
            return
        }
        this.emit("data", r)
    }
    _handleChunk(u) {
        const r = u.__peerData
            , c = this._chunkedData[r] || {
                data: [],
                count: 0,
                total: u.total
            };
        if (c.data[u.n] = new Uint8Array(u.data),
            c.count++,
            this._chunkedData[r] = c,
            c.total === c.count) {
            delete this._chunkedData[r];
            const o = z0(c.data);
            this._handleDataMessage({
                data: o
            })
        }
    }
    _send(u, r) {
        const c = Id(u);
        if (c instanceof Promise)
            return this._send_blob(c);
        if (!r && c.byteLength > this.chunker.chunkedMTU) {
            this._sendChunks(c);
            return
        }
        this._bufferedSend(c)
    }
    async _send_blob(u) {
        const r = await u;
        if (r.byteLength > this.chunker.chunkedMTU) {
            this._sendChunks(r);
            return
        }
        this._bufferedSend(r)
    }
    _sendChunks(u) {
        const r = this.chunker.chunk(u);
        N.log(`DC#${this.connectionId} Try to send ${r.length} chunks...`);
        for (const c of r)
            this.send(c, !0)
    }
}
class G0 extends Jr {
    _handleDataMessage({ data: u }) {
        super.emit("data", u)
    }
    _send(u, r) {
        this._bufferedSend(u)
    }
    constructor(...u) {
        super(...u),
            this.serialization = La.None
    }
}
class X0 extends Jr {
    _handleDataMessage({ data: u }) {
        const r = this.parse(this.decoder.decode(u))
            , c = r.__peerData;
        if (c && c.type === "close") {
            this.close();
            return
        }
        this.emit("data", r)
    }
    _send(u, r) {
        const c = this.encoder.encode(this.stringify(u));
        if (c.byteLength >= We.chunkedMTU) {
            this.emitError(Vi.MessageToBig, "Message too big for JSON channel");
            return
        }
        this._bufferedSend(c)
    }
    constructor(...u) {
        super(...u),
            this.serialization = La.JSON,
            this.encoder = new TextEncoder,
            this.decoder = new TextDecoder,
            this.stringify = JSON.stringify,
            this.parse = JSON.parse
    }
}
var Xr;
const Gi = class Gi extends Nh {
    get id() {
        return this._id
    }
    get options() {
        return this._options
    }
    get open() {
        return this._open
    }
    get socket() {
        return this._socket
    }
    get connections() {
        const u = Object.create(null);
        for (const [r, c] of this._connections)
            u[r] = c;
        return u
    }
    get destroyed() {
        return this._destroyed
    }
    get disconnected() {
        return this._disconnected
    }
    constructor(u, r) {
        super(),
            this._serializers = {
                raw: G0,
                json: X0,
                binary: zr,
                "binary-utf8": zr,
                default: zr
            },
            this._id = null,
            this._lastServerId = null,
            this._destroyed = !1,
            this._disconnected = !1,
            this._open = !1,
            this._connections = new Map,
            this._lostMessages = new Map;
        let c;
        if (u && u.constructor == Object ? r = u : u && (c = u.toString()),
            r = {
                debug: 0,
                host: We.CLOUD_HOST,
                port: We.CLOUD_PORT,
                path: "/",
                key: Gi.DEFAULT_KEY,
                token: We.randomToken(),
                config: We.defaultConfig,
                referrerPolicy: "strict-origin-when-cross-origin",
                serializers: {},
                ...r
            },
            this._options = r,
            this._serializers = {
                ...this._serializers,
                ...this.options.serializers
            },
            this._options.host === "/" && (this._options.host = window.location.hostname),
            this._options.path && (this._options.path[0] !== "/" && (this._options.path = "/" + this._options.path),
                this._options.path[this._options.path.length - 1] !== "/" && (this._options.path += "/")),
            this._options.secure === void 0 && this._options.host !== We.CLOUD_HOST ? this._options.secure = We.isSecure() : this._options.host == We.CLOUD_HOST && (this._options.secure = !0),
            this._options.logFunction && N.setLogFunction(this._options.logFunction),
            N.logLevel = this._options.debug || 0,
            this._api = new Y0(r),
            this._socket = this._createServerConnection(),
            !We.supports.audioVideo && !We.supports.data) {
            this._delayedAbort(Se.BrowserIncompatible, "The current browser does not support WebRTC");
            return
        }
        if (c && !We.validateId(c)) {
            this._delayedAbort(Se.InvalidID, `ID "${c}" is invalid`);
            return
        }
        c ? this._initialize(c) : this._api.retrieveId().then(o => this._initialize(o)).catch(o => this._abort(Se.ServerError, o))
    }
    _createServerConnection() {
        const u = new L0(this._options.secure, this._options.host, this._options.port, this._options.path, this._options.key, this._options.pingInterval);
        return u.on(Ut.Message, r => {
            this._handleMessage(r)
        }
        ),
            u.on(Ut.Error, r => {
                this._abort(Se.SocketError, r)
            }
            ),
            u.on(Ut.Disconnected, () => {
                this.disconnected || (this.emitError(Se.Network, "Lost connection to server."),
                    this.disconnect())
            }
            ),
            u.on(Ut.Close, () => {
                this.disconnected || this._abort(Se.SocketClosed, "Underlying socket is already closed.")
            }
            ),
            u
    }
    _initialize(u) {
        this._id = u,
            this.socket.start(u, this._options.token)
    }
    _handleMessage(u) {
        const r = u.type
            , c = u.payload
            , o = u.src;
        switch (r) {
            case Ue.Open:
                this._lastServerId = this.id,
                    this._open = !0,
                    this.emit("open", this.id);
                break;
            case Ue.Error:
                this._abort(Se.ServerError, c.msg);
                break;
            case Ue.IdTaken:
                this._abort(Se.UnavailableID, `ID "${this.id}" is taken`);
                break;
            case Ue.InvalidKey:
                this._abort(Se.InvalidKey, `API KEY "${this._options.key}" is invalid`);
                break;
            case Ue.Leave:
                N.log(`Received leave message from ${o}`),
                    this._cleanupPeer(o),
                    this._connections.delete(o);
                break;
            case Ue.Expire:
                this.emitError(Se.PeerUnavailable, `Could not connect to peer ${o}`);
                break;
            case Ue.Offer:
                {
                    const h = c.connectionId;
                    let p = this.getConnection(o, h);
                    if (p && (p.close(),
                        N.warn(`Offer received for existing Connection ID:${h}`)),
                        c.type === kt.Media) {
                        const v = new du(o, this, {
                            connectionId: h,
                            _payload: c,
                            metadata: c.metadata
                        });
                        p = v,
                            this._addConnection(o, p),
                            this.emit("call", v)
                    } else if (c.type === kt.Data) {
                        const v = new this._serializers[c.serialization](o, this, {
                            connectionId: h,
                            _payload: c,
                            metadata: c.metadata,
                            label: c.label,
                            serialization: c.serialization,
                            reliable: c.reliable
                        });
                        p = v,
                            this._addConnection(o, p),
                            this.emit("connection", v)
                    } else {
                        N.warn(`Received malformed connection type:${c.type}`);
                        return
                    }
                    const g = this._getMessages(h);
                    for (const v of g)
                        p.handleMessage(v);
                    break
                }
            default:
                {
                    if (!c) {
                        N.warn(`You received a malformed message from ${o} of type ${r}`);
                        return
                    }
                    const h = c.connectionId
                        , p = this.getConnection(o, h);
                    p && p.peerConnection ? p.handleMessage(u) : h ? this._storeMessage(h, u) : N.warn("You received an unrecognized message:", u);
                    break
                }
        }
    }
    _storeMessage(u, r) {
        this._lostMessages.has(u) || this._lostMessages.set(u, []),
            this._lostMessages.get(u).push(r)
    }
    _getMessages(u) {
        const r = this._lostMessages.get(u);
        return r ? (this._lostMessages.delete(u),
            r) : []
    }
    connect(u, r = {}) {
        if (r = {
            serialization: "default",
            ...r
        },
            this.disconnected) {
            N.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."),
                this.emitError(Se.Disconnected, "Cannot connect to new Peer after disconnecting from server.");
            return
        }
        const c = new this._serializers[r.serialization](u, this, r);
        return this._addConnection(u, c),
            c
    }
    call(u, r, c = {}) {
        if (this.disconnected) {
            N.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."),
                this.emitError(Se.Disconnected, "Cannot connect to new Peer after disconnecting from server.");
            return
        }
        if (!r) {
            N.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");
            return
        }
        const o = new du(u, this, {
            ...c,
            _stream: r
        });
        return this._addConnection(u, o),
            o
    }
    _addConnection(u, r) {
        N.log(`add connection ${r.type}:${r.connectionId} to peerId:${u}`),
            this._connections.has(u) || this._connections.set(u, []),
            this._connections.get(u).push(r)
    }
    _removeConnection(u) {
        const r = this._connections.get(u.peer);
        if (r) {
            const c = r.indexOf(u);
            c !== -1 && r.splice(c, 1)
        }
        this._lostMessages.delete(u.connectionId)
    }
    getConnection(u, r) {
        const c = this._connections.get(u);
        if (!c)
            return null;
        for (const o of c)
            if (o.connectionId === r)
                return o;
        return null
    }
    _delayedAbort(u, r) {
        setTimeout(() => {
            this._abort(u, r)
        }
            , 0)
    }
    _abort(u, r) {
        N.error("Aborting!"),
            this.emitError(u, r),
            this._lastServerId ? this.disconnect() : this.destroy()
    }
    destroy() {
        this.destroyed || (N.log(`Destroy peer with ID:${this.id}`),
            this.disconnect(),
            this._cleanup(),
            this._destroyed = !0,
            this.emit("close"))
    }
    _cleanup() {
        for (const u of this._connections.keys())
            this._cleanupPeer(u),
                this._connections.delete(u);
        this.socket.removeAllListeners()
    }
    _cleanupPeer(u) {
        const r = this._connections.get(u);
        if (r)
            for (const c of r)
                c.close()
    }
    disconnect() {
        if (this.disconnected)
            return;
        const u = this.id;
        N.log(`Disconnect peer with ID:${u}`),
            this._disconnected = !0,
            this._open = !1,
            this.socket.close(),
            this._lastServerId = u,
            this._id = null,
            this.emit("disconnected", u)
    }
    reconnect() {
        if (this.disconnected && !this.destroyed)
            N.log(`Attempting reconnection to server with ID ${this._lastServerId}`),
                this._disconnected = !1,
                this._initialize(this._lastServerId);
        else {
            if (this.destroyed)
                throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");
            if (!this.disconnected && !this.open)
                N.error("In a hurry? We're still trying to make the initial connection!");
            else
                throw new Error(`Peer ${this.id} cannot reconnect because it is not disconnected from the server!`)
        }
    }
    listAllPeers(u = r => { }
    ) {
        this._api.listAllPeers().then(r => u(r)).catch(r => this._abort(Se.ServerError, r))
    }
}
    ;
Xr = new WeakMap,
    Ni(Gi, Xr, Gi.DEFAULT_KEY = "peerjs");
let Lr = Gi;
var Q0 = Lr;
const V0 = () => {
    const [s, u] = Fn.useState("")
        , [r, c] = Fn.useState("")
        , o = Fn.useRef(null)
        , h = Fn.useRef(null)
        , p = Fn.useRef(null);
    Fn.useEffect(() => {
        const v = new Q0;
        p.current = v,
            v.on("open", y => {
                u(y),
                    console.log("My ID:", y)
            }
            ),
            navigator.mediaDevices.getUserMedia({
                video: !0,
                audio: !0
            }).then(y => {
                o.current.srcObject = y,
                    v.on("call", C => {
                        C.answer(y),
                            C.on("stream", D => {
                                h.current.srcObject = D
                            }
                            )
                    }
                    )
            }
            )
    }
        , []);
    const g = () => {
        navigator.mediaDevices.getUserMedia({
            video: !0,
            audio: !0
        }).then(v => {
            p.current.call(r, v).on("stream", C => {
                h.current.srcObject = C
            }
            )
        }
        )
    }
        ;
    return Ne.jsxs("div", {
        className: "p-4",
        children: [Ne.jsxs("p", {
            children: ["Your ID: ", Ne.jsx("b", {
                children: s
            })]
        }), Ne.jsx("input", {
            type: "text",
            value: r,
            onChange: v => c(v.target.value),
            placeholder: "Enter Peer ID"
        }), Ne.jsx("button", {
            onClick: g,
            children: "Call"
        }), Ne.jsxs("div", {
            children: [Ne.jsxs("div", {
                children: [Ne.jsx("h3", {
                    children: "My Video"
                }), Ne.jsx("video", {
                    ref: o,
                    autoPlay: !0,
                    muted: !0
                })]
            }), Ne.jsxs("div", {
                children: [Ne.jsx("h3", {
                    children: "Remote Video"
                }), Ne.jsx("video", {
                    ref: h,
                    autoPlay: !0
                })]
            })]
        })]
    })
}
    , Z0 = () => Ne.jsxs("div", {
        className: "App",
        children: [Ne.jsx("h1", {
            className: "text-center text-2xl mb-4",
            children: "PeerJS Video Chat"
        }), Ne.jsx(V0, {})]
    });
v0.createRoot(document.getElementById("root")).render(Ne.jsx(Fn.StrictMode, {
    children: Ne.jsx(Z0, {})
}));
