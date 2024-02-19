var m1 = Object.defineProperty;
var _1 = (t, e, n) =>
	e in t
		? m1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
		: (t[e] = n);
var mr = (t, e, n) => (_1(t, typeof e != 'symbol' ? e + '' : e, n), n);
(function () {
	const e = document.createElement('link').relList;
	if (e && e.supports && e.supports('modulepreload')) return;
	for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
	new MutationObserver((i) => {
		for (const s of i)
			if (s.type === 'childList')
				for (const o of s.addedNodes)
					o.tagName === 'LINK' && o.rel === 'modulepreload' && r(o);
	}).observe(document, { childList: !0, subtree: !0 });
	function n(i) {
		const s = {};
		return (
			i.integrity && (s.integrity = i.integrity),
			i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
			i.crossOrigin === 'use-credentials'
				? (s.credentials = 'include')
				: i.crossOrigin === 'anonymous'
					? (s.credentials = 'omit')
					: (s.credentials = 'same-origin'),
			s
		);
	}
	function r(i) {
		if (i.ep) return;
		i.ep = !0;
		const s = n(i);
		fetch(i.href, s);
	}
})();
function Md(t) {
	return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, 'default')
		? t.default
		: t;
}
var a0 = { exports: {} },
	Xa = {},
	c0 = { exports: {} },
	ce = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xl = Symbol.for('react.element'),
	g1 = Symbol.for('react.portal'),
	v1 = Symbol.for('react.fragment'),
	y1 = Symbol.for('react.strict_mode'),
	x1 = Symbol.for('react.profiler'),
	w1 = Symbol.for('react.provider'),
	S1 = Symbol.for('react.context'),
	k1 = Symbol.for('react.forward_ref'),
	T1 = Symbol.for('react.suspense'),
	E1 = Symbol.for('react.memo'),
	C1 = Symbol.for('react.lazy'),
	tp = Symbol.iterator;
function P1(t) {
	return t === null || typeof t != 'object'
		? null
		: ((t = (tp && t[tp]) || t['@@iterator']),
			typeof t == 'function' ? t : null);
}
var f0 = {
		isMounted: function () {
			return !1;
		},
		enqueueForceUpdate: function () {},
		enqueueReplaceState: function () {},
		enqueueSetState: function () {},
	},
	d0 = Object.assign,
	h0 = {};
function ko(t, e, n) {
	(this.props = t),
		(this.context = e),
		(this.refs = h0),
		(this.updater = n || f0);
}
ko.prototype.isReactComponent = {};
ko.prototype.setState = function (t, e) {
	if (typeof t != 'object' && typeof t != 'function' && t != null)
		throw Error(
			'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
		);
	this.updater.enqueueSetState(this, t, e, 'setState');
};
ko.prototype.forceUpdate = function (t) {
	this.updater.enqueueForceUpdate(this, t, 'forceUpdate');
};
function p0() {}
p0.prototype = ko.prototype;
function jd(t, e, n) {
	(this.props = t),
		(this.context = e),
		(this.refs = h0),
		(this.updater = n || f0);
}
var Rd = (jd.prototype = new p0());
Rd.constructor = jd;
d0(Rd, ko.prototype);
Rd.isPureReactComponent = !0;
var np = Array.isArray,
	m0 = Object.prototype.hasOwnProperty,
	Dd = { current: null },
	_0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function g0(t, e, n) {
	var r,
		i = {},
		s = null,
		o = null;
	if (e != null)
		for (r in (e.ref !== void 0 && (o = e.ref),
		e.key !== void 0 && (s = '' + e.key),
		e))
			m0.call(e, r) && !_0.hasOwnProperty(r) && (i[r] = e[r]);
	var l = arguments.length - 2;
	if (l === 1) i.children = n;
	else if (1 < l) {
		for (var u = Array(l), a = 0; a < l; a++) u[a] = arguments[a + 2];
		i.children = u;
	}
	if (t && t.defaultProps)
		for (r in ((l = t.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
	return {
		$$typeof: Xl,
		type: t,
		key: s,
		ref: o,
		props: i,
		_owner: Dd.current,
	};
}
function N1(t, e) {
	return {
		$$typeof: Xl,
		type: t.type,
		key: e,
		ref: t.ref,
		props: t.props,
		_owner: t._owner,
	};
}
function Ad(t) {
	return typeof t == 'object' && t !== null && t.$$typeof === Xl;
}
function O1(t) {
	var e = { '=': '=0', ':': '=2' };
	return (
		'$' +
		t.replace(/[=:]/g, function (n) {
			return e[n];
		})
	);
}
var rp = /\/+/g;
function _c(t, e) {
	return typeof t == 'object' && t !== null && t.key != null
		? O1('' + t.key)
		: e.toString(36);
}
function Iu(t, e, n, r, i) {
	var s = typeof t;
	(s === 'undefined' || s === 'boolean') && (t = null);
	var o = !1;
	if (t === null) o = !0;
	else
		switch (s) {
			case 'string':
			case 'number':
				o = !0;
				break;
			case 'object':
				switch (t.$$typeof) {
					case Xl:
					case g1:
						o = !0;
				}
		}
	if (o)
		return (
			(o = t),
			(i = i(o)),
			(t = r === '' ? '.' + _c(o, 0) : r),
			np(i)
				? ((n = ''),
					t != null && (n = t.replace(rp, '$&/') + '/'),
					Iu(i, e, n, '', function (a) {
						return a;
					}))
				: i != null &&
					(Ad(i) &&
						(i = N1(
							i,
							n +
								(!i.key || (o && o.key === i.key)
									? ''
									: ('' + i.key).replace(rp, '$&/') + '/') +
								t,
						)),
					e.push(i)),
			1
		);
	if (((o = 0), (r = r === '' ? '.' : r + ':'), np(t)))
		for (var l = 0; l < t.length; l++) {
			s = t[l];
			var u = r + _c(s, l);
			o += Iu(s, e, n, u, i);
		}
	else if (((u = P1(t)), typeof u == 'function'))
		for (t = u.call(t), l = 0; !(s = t.next()).done; )
			(s = s.value), (u = r + _c(s, l++)), (o += Iu(s, e, n, u, i));
	else if (s === 'object')
		throw (
			((e = String(t)),
			Error(
				'Objects are not valid as a React child (found: ' +
					(e === '[object Object]'
						? 'object with keys {' + Object.keys(t).join(', ') + '}'
						: e) +
					'). If you meant to render a collection of children, use an array instead.',
			))
		);
	return o;
}
function ou(t, e, n) {
	if (t == null) return t;
	var r = [],
		i = 0;
	return (
		Iu(t, r, '', '', function (s) {
			return e.call(n, s, i++);
		}),
		r
	);
}
function M1(t) {
	if (t._status === -1) {
		var e = t._result;
		(e = e()),
			e.then(
				function (n) {
					(t._status === 0 || t._status === -1) &&
						((t._status = 1), (t._result = n));
				},
				function (n) {
					(t._status === 0 || t._status === -1) &&
						((t._status = 2), (t._result = n));
				},
			),
			t._status === -1 && ((t._status = 0), (t._result = e));
	}
	if (t._status === 1) return t._result.default;
	throw t._result;
}
var tn = { current: null },
	Vu = { transition: null },
	j1 = {
		ReactCurrentDispatcher: tn,
		ReactCurrentBatchConfig: Vu,
		ReactCurrentOwner: Dd,
	};
ce.Children = {
	map: ou,
	forEach: function (t, e, n) {
		ou(
			t,
			function () {
				e.apply(this, arguments);
			},
			n,
		);
	},
	count: function (t) {
		var e = 0;
		return (
			ou(t, function () {
				e++;
			}),
			e
		);
	},
	toArray: function (t) {
		return (
			ou(t, function (e) {
				return e;
			}) || []
		);
	},
	only: function (t) {
		if (!Ad(t))
			throw Error(
				'React.Children.only expected to receive a single React element child.',
			);
		return t;
	},
};
ce.Component = ko;
ce.Fragment = v1;
ce.Profiler = x1;
ce.PureComponent = jd;
ce.StrictMode = y1;
ce.Suspense = T1;
ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = j1;
ce.cloneElement = function (t, e, n) {
	if (t == null)
		throw Error(
			'React.cloneElement(...): The argument must be a React element, but you passed ' +
				t +
				'.',
		);
	var r = d0({}, t.props),
		i = t.key,
		s = t.ref,
		o = t._owner;
	if (e != null) {
		if (
			(e.ref !== void 0 && ((s = e.ref), (o = Dd.current)),
			e.key !== void 0 && (i = '' + e.key),
			t.type && t.type.defaultProps)
		)
			var l = t.type.defaultProps;
		for (u in e)
			m0.call(e, u) &&
				!_0.hasOwnProperty(u) &&
				(r[u] = e[u] === void 0 && l !== void 0 ? l[u] : e[u]);
	}
	var u = arguments.length - 2;
	if (u === 1) r.children = n;
	else if (1 < u) {
		l = Array(u);
		for (var a = 0; a < u; a++) l[a] = arguments[a + 2];
		r.children = l;
	}
	return { $$typeof: Xl, type: t.type, key: i, ref: s, props: r, _owner: o };
};
ce.createContext = function (t) {
	return (
		(t = {
			$$typeof: S1,
			_currentValue: t,
			_currentValue2: t,
			_threadCount: 0,
			Provider: null,
			Consumer: null,
			_defaultValue: null,
			_globalName: null,
		}),
		(t.Provider = { $$typeof: w1, _context: t }),
		(t.Consumer = t)
	);
};
ce.createElement = g0;
ce.createFactory = function (t) {
	var e = g0.bind(null, t);
	return (e.type = t), e;
};
ce.createRef = function () {
	return { current: null };
};
ce.forwardRef = function (t) {
	return { $$typeof: k1, render: t };
};
ce.isValidElement = Ad;
ce.lazy = function (t) {
	return { $$typeof: C1, _payload: { _status: -1, _result: t }, _init: M1 };
};
ce.memo = function (t, e) {
	return { $$typeof: E1, type: t, compare: e === void 0 ? null : e };
};
ce.startTransition = function (t) {
	var e = Vu.transition;
	Vu.transition = {};
	try {
		t();
	} finally {
		Vu.transition = e;
	}
};
ce.unstable_act = function () {
	throw Error('act(...) is not supported in production builds of React.');
};
ce.useCallback = function (t, e) {
	return tn.current.useCallback(t, e);
};
ce.useContext = function (t) {
	return tn.current.useContext(t);
};
ce.useDebugValue = function () {};
ce.useDeferredValue = function (t) {
	return tn.current.useDeferredValue(t);
};
ce.useEffect = function (t, e) {
	return tn.current.useEffect(t, e);
};
ce.useId = function () {
	return tn.current.useId();
};
ce.useImperativeHandle = function (t, e, n) {
	return tn.current.useImperativeHandle(t, e, n);
};
ce.useInsertionEffect = function (t, e) {
	return tn.current.useInsertionEffect(t, e);
};
ce.useLayoutEffect = function (t, e) {
	return tn.current.useLayoutEffect(t, e);
};
ce.useMemo = function (t, e) {
	return tn.current.useMemo(t, e);
};
ce.useReducer = function (t, e, n) {
	return tn.current.useReducer(t, e, n);
};
ce.useRef = function (t) {
	return tn.current.useRef(t);
};
ce.useState = function (t) {
	return tn.current.useState(t);
};
ce.useSyncExternalStore = function (t, e, n) {
	return tn.current.useSyncExternalStore(t, e, n);
};
ce.useTransition = function () {
	return tn.current.useTransition();
};
ce.version = '18.2.0';
c0.exports = ce;
var te = c0.exports;
const ut = Md(te);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var R1 = te,
	D1 = Symbol.for('react.element'),
	A1 = Symbol.for('react.fragment'),
	L1 = Object.prototype.hasOwnProperty,
	z1 = R1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	F1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function v0(t, e, n) {
	var r,
		i = {},
		s = null,
		o = null;
	n !== void 0 && (s = '' + n),
		e.key !== void 0 && (s = '' + e.key),
		e.ref !== void 0 && (o = e.ref);
	for (r in e) L1.call(e, r) && !F1.hasOwnProperty(r) && (i[r] = e[r]);
	if (t && t.defaultProps)
		for (r in ((e = t.defaultProps), e)) i[r] === void 0 && (i[r] = e[r]);
	return {
		$$typeof: D1,
		type: t,
		key: s,
		ref: o,
		props: i,
		_owner: z1.current,
	};
}
Xa.Fragment = A1;
Xa.jsx = v0;
Xa.jsxs = v0;
a0.exports = Xa;
var v = a0.exports,
	cf = {},
	y0 = { exports: {} },
	Rn = {},
	x0 = { exports: {} },
	w0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (t) {
	function e(A, $) {
		var w = A.length;
		A.push($);
		e: for (; 0 < w; ) {
			var q = (w - 1) >>> 1,
				oe = A[q];
			if (0 < i(oe, $)) (A[q] = $), (A[w] = oe), (w = q);
			else break e;
		}
	}
	function n(A) {
		return A.length === 0 ? null : A[0];
	}
	function r(A) {
		if (A.length === 0) return null;
		var $ = A[0],
			w = A.pop();
		if (w !== $) {
			A[0] = w;
			e: for (var q = 0, oe = A.length, it = oe >>> 1; q < it; ) {
				var ge = 2 * (q + 1) - 1,
					Oe = A[ge],
					Ee = ge + 1,
					ye = A[Ee];
				if (0 > i(Oe, w))
					Ee < oe && 0 > i(ye, Oe)
						? ((A[q] = ye), (A[Ee] = w), (q = Ee))
						: ((A[q] = Oe), (A[ge] = w), (q = ge));
				else if (Ee < oe && 0 > i(ye, w)) (A[q] = ye), (A[Ee] = w), (q = Ee);
				else break e;
			}
		}
		return $;
	}
	function i(A, $) {
		var w = A.sortIndex - $.sortIndex;
		return w !== 0 ? w : A.id - $.id;
	}
	if (typeof performance == 'object' && typeof performance.now == 'function') {
		var s = performance;
		t.unstable_now = function () {
			return s.now();
		};
	} else {
		var o = Date,
			l = o.now();
		t.unstable_now = function () {
			return o.now() - l;
		};
	}
	var u = [],
		a = [],
		c = 1,
		d = null,
		f = 3,
		h = !1,
		g = !1,
		m = !1,
		T = typeof setTimeout == 'function' ? setTimeout : null,
		_ = typeof clearTimeout == 'function' ? clearTimeout : null,
		p = typeof setImmediate < 'u' ? setImmediate : null;
	typeof navigator < 'u' &&
		navigator.scheduling !== void 0 &&
		navigator.scheduling.isInputPending !== void 0 &&
		navigator.scheduling.isInputPending.bind(navigator.scheduling);
	function y(A) {
		for (var $ = n(a); $ !== null; ) {
			if ($.callback === null) r(a);
			else if ($.startTime <= A)
				r(a), ($.sortIndex = $.expirationTime), e(u, $);
			else break;
			$ = n(a);
		}
	}
	function x(A) {
		if (((m = !1), y(A), !g))
			if (n(u) !== null) (g = !0), G(k);
			else {
				var $ = n(a);
				$ !== null && Q(x, $.startTime - A);
			}
	}
	function k(A, $) {
		(g = !1), m && ((m = !1), _(N), (N = -1)), (h = !0);
		var w = f;
		try {
			for (
				y($), d = n(u);
				d !== null && (!(d.expirationTime > $) || (A && !H()));

			) {
				var q = d.callback;
				if (typeof q == 'function') {
					(d.callback = null), (f = d.priorityLevel);
					var oe = q(d.expirationTime <= $);
					($ = t.unstable_now()),
						typeof oe == 'function' ? (d.callback = oe) : d === n(u) && r(u),
						y($);
				} else r(u);
				d = n(u);
			}
			if (d !== null) var it = !0;
			else {
				var ge = n(a);
				ge !== null && Q(x, ge.startTime - $), (it = !1);
			}
			return it;
		} finally {
			(d = null), (f = w), (h = !1);
		}
	}
	var C = !1,
		E = null,
		N = -1,
		j = 5,
		M = -1;
	function H() {
		return !(t.unstable_now() - M < j);
	}
	function D() {
		if (E !== null) {
			var A = t.unstable_now();
			M = A;
			var $ = !0;
			try {
				$ = E(!0, A);
			} finally {
				$ ? I() : ((C = !1), (E = null));
			}
		} else C = !1;
	}
	var I;
	if (typeof p == 'function')
		I = function () {
			p(D);
		};
	else if (typeof MessageChannel < 'u') {
		var Y = new MessageChannel(),
			K = Y.port2;
		(Y.port1.onmessage = D),
			(I = function () {
				K.postMessage(null);
			});
	} else
		I = function () {
			T(D, 0);
		};
	function G(A) {
		(E = A), C || ((C = !0), I());
	}
	function Q(A, $) {
		N = T(function () {
			A(t.unstable_now());
		}, $);
	}
	(t.unstable_IdlePriority = 5),
		(t.unstable_ImmediatePriority = 1),
		(t.unstable_LowPriority = 4),
		(t.unstable_NormalPriority = 3),
		(t.unstable_Profiling = null),
		(t.unstable_UserBlockingPriority = 2),
		(t.unstable_cancelCallback = function (A) {
			A.callback = null;
		}),
		(t.unstable_continueExecution = function () {
			g || h || ((g = !0), G(k));
		}),
		(t.unstable_forceFrameRate = function (A) {
			0 > A || 125 < A
				? console.error(
						'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
					)
				: (j = 0 < A ? Math.floor(1e3 / A) : 5);
		}),
		(t.unstable_getCurrentPriorityLevel = function () {
			return f;
		}),
		(t.unstable_getFirstCallbackNode = function () {
			return n(u);
		}),
		(t.unstable_next = function (A) {
			switch (f) {
				case 1:
				case 2:
				case 3:
					var $ = 3;
					break;
				default:
					$ = f;
			}
			var w = f;
			f = $;
			try {
				return A();
			} finally {
				f = w;
			}
		}),
		(t.unstable_pauseExecution = function () {}),
		(t.unstable_requestPaint = function () {}),
		(t.unstable_runWithPriority = function (A, $) {
			switch (A) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
					break;
				default:
					A = 3;
			}
			var w = f;
			f = A;
			try {
				return $();
			} finally {
				f = w;
			}
		}),
		(t.unstable_scheduleCallback = function (A, $, w) {
			var q = t.unstable_now();
			switch (
				(typeof w == 'object' && w !== null
					? ((w = w.delay), (w = typeof w == 'number' && 0 < w ? q + w : q))
					: (w = q),
				A)
			) {
				case 1:
					var oe = -1;
					break;
				case 2:
					oe = 250;
					break;
				case 5:
					oe = 1073741823;
					break;
				case 4:
					oe = 1e4;
					break;
				default:
					oe = 5e3;
			}
			return (
				(oe = w + oe),
				(A = {
					id: c++,
					callback: $,
					priorityLevel: A,
					startTime: w,
					expirationTime: oe,
					sortIndex: -1,
				}),
				w > q
					? ((A.sortIndex = w),
						e(a, A),
						n(u) === null &&
							A === n(a) &&
							(m ? (_(N), (N = -1)) : (m = !0), Q(x, w - q)))
					: ((A.sortIndex = oe), e(u, A), g || h || ((g = !0), G(k))),
				A
			);
		}),
		(t.unstable_shouldYield = H),
		(t.unstable_wrapCallback = function (A) {
			var $ = f;
			return function () {
				var w = f;
				f = $;
				try {
					return A.apply(this, arguments);
				} finally {
					f = w;
				}
			};
		});
})(w0);
x0.exports = w0;
var I1 = x0.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var S0 = te,
	Mn = I1;
function z(t) {
	for (
		var e = 'https://reactjs.org/docs/error-decoder.html?invariant=' + t, n = 1;
		n < arguments.length;
		n++
	)
		e += '&args[]=' + encodeURIComponent(arguments[n]);
	return (
		'Minified React error #' +
		t +
		'; visit ' +
		e +
		' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
	);
}
var k0 = new Set(),
	Sl = {};
function ws(t, e) {
	uo(t, e), uo(t + 'Capture', e);
}
function uo(t, e) {
	for (Sl[t] = e, t = 0; t < e.length; t++) k0.add(e[t]);
}
var Yr = !(
		typeof window > 'u' ||
		typeof window.document > 'u' ||
		typeof window.document.createElement > 'u'
	),
	ff = Object.prototype.hasOwnProperty,
	V1 =
		/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	ip = {},
	sp = {};
function $1(t) {
	return ff.call(sp, t)
		? !0
		: ff.call(ip, t)
			? !1
			: V1.test(t)
				? (sp[t] = !0)
				: ((ip[t] = !0), !1);
}
function U1(t, e, n, r) {
	if (n !== null && n.type === 0) return !1;
	switch (typeof e) {
		case 'function':
		case 'symbol':
			return !0;
		case 'boolean':
			return r
				? !1
				: n !== null
					? !n.acceptsBooleans
					: ((t = t.toLowerCase().slice(0, 5)), t !== 'data-' && t !== 'aria-');
		default:
			return !1;
	}
}
function B1(t, e, n, r) {
	if (e === null || typeof e > 'u' || U1(t, e, n, r)) return !0;
	if (r) return !1;
	if (n !== null)
		switch (n.type) {
			case 3:
				return !e;
			case 4:
				return e === !1;
			case 5:
				return isNaN(e);
			case 6:
				return isNaN(e) || 1 > e;
		}
	return !1;
}
function nn(t, e, n, r, i, s, o) {
	(this.acceptsBooleans = e === 2 || e === 3 || e === 4),
		(this.attributeName = r),
		(this.attributeNamespace = i),
		(this.mustUseProperty = n),
		(this.propertyName = t),
		(this.type = e),
		(this.sanitizeURL = s),
		(this.removeEmptyString = o);
}
var Mt = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
	.split(' ')
	.forEach(function (t) {
		Mt[t] = new nn(t, 0, !1, t, null, !1, !1);
	});
[
	['acceptCharset', 'accept-charset'],
	['className', 'class'],
	['htmlFor', 'for'],
	['httpEquiv', 'http-equiv'],
].forEach(function (t) {
	var e = t[0];
	Mt[e] = new nn(e, 1, !1, t[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (t) {
	Mt[t] = new nn(t, 2, !1, t.toLowerCase(), null, !1, !1);
});
[
	'autoReverse',
	'externalResourcesRequired',
	'focusable',
	'preserveAlpha',
].forEach(function (t) {
	Mt[t] = new nn(t, 2, !1, t, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
	.split(' ')
	.forEach(function (t) {
		Mt[t] = new nn(t, 3, !1, t.toLowerCase(), null, !1, !1);
	});
['checked', 'multiple', 'muted', 'selected'].forEach(function (t) {
	Mt[t] = new nn(t, 3, !0, t, null, !1, !1);
});
['capture', 'download'].forEach(function (t) {
	Mt[t] = new nn(t, 4, !1, t, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (t) {
	Mt[t] = new nn(t, 6, !1, t, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (t) {
	Mt[t] = new nn(t, 5, !1, t.toLowerCase(), null, !1, !1);
});
var Ld = /[\-:]([a-z])/g;
function zd(t) {
	return t[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
	.split(' ')
	.forEach(function (t) {
		var e = t.replace(Ld, zd);
		Mt[e] = new nn(e, 1, !1, t, null, !1, !1);
	});
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
	.split(' ')
	.forEach(function (t) {
		var e = t.replace(Ld, zd);
		Mt[e] = new nn(e, 1, !1, t, 'http://www.w3.org/1999/xlink', !1, !1);
	});
['xml:base', 'xml:lang', 'xml:space'].forEach(function (t) {
	var e = t.replace(Ld, zd);
	Mt[e] = new nn(e, 1, !1, t, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (t) {
	Mt[t] = new nn(t, 1, !1, t.toLowerCase(), null, !1, !1);
});
Mt.xlinkHref = new nn(
	'xlinkHref',
	1,
	!1,
	'xlink:href',
	'http://www.w3.org/1999/xlink',
	!0,
	!1,
);
['src', 'href', 'action', 'formAction'].forEach(function (t) {
	Mt[t] = new nn(t, 1, !1, t.toLowerCase(), null, !0, !0);
});
function Fd(t, e, n, r) {
	var i = Mt.hasOwnProperty(e) ? Mt[e] : null;
	(i !== null
		? i.type !== 0
		: r ||
			!(2 < e.length) ||
			(e[0] !== 'o' && e[0] !== 'O') ||
			(e[1] !== 'n' && e[1] !== 'N')) &&
		(B1(e, n, i, r) && (n = null),
		r || i === null
			? $1(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, '' + n))
			: i.mustUseProperty
				? (t[i.propertyName] = n === null ? (i.type === 3 ? !1 : '') : n)
				: ((e = i.attributeName),
					(r = i.attributeNamespace),
					n === null
						? t.removeAttribute(e)
						: ((i = i.type),
							(n = i === 3 || (i === 4 && n === !0) ? '' : '' + n),
							r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n))));
}
var Zr = S0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	lu = Symbol.for('react.element'),
	As = Symbol.for('react.portal'),
	Ls = Symbol.for('react.fragment'),
	Id = Symbol.for('react.strict_mode'),
	df = Symbol.for('react.profiler'),
	T0 = Symbol.for('react.provider'),
	E0 = Symbol.for('react.context'),
	Vd = Symbol.for('react.forward_ref'),
	hf = Symbol.for('react.suspense'),
	pf = Symbol.for('react.suspense_list'),
	$d = Symbol.for('react.memo'),
	si = Symbol.for('react.lazy'),
	C0 = Symbol.for('react.offscreen'),
	op = Symbol.iterator;
function Mo(t) {
	return t === null || typeof t != 'object'
		? null
		: ((t = (op && t[op]) || t['@@iterator']),
			typeof t == 'function' ? t : null);
}
var We = Object.assign,
	gc;
function Wo(t) {
	if (gc === void 0)
		try {
			throw Error();
		} catch (n) {
			var e = n.stack.trim().match(/\n( *(at )?)/);
			gc = (e && e[1]) || '';
		}
	return (
		`
` +
		gc +
		t
	);
}
var vc = !1;
function yc(t, e) {
	if (!t || vc) return '';
	vc = !0;
	var n = Error.prepareStackTrace;
	Error.prepareStackTrace = void 0;
	try {
		if (e)
			if (
				((e = function () {
					throw Error();
				}),
				Object.defineProperty(e.prototype, 'props', {
					set: function () {
						throw Error();
					},
				}),
				typeof Reflect == 'object' && Reflect.construct)
			) {
				try {
					Reflect.construct(e, []);
				} catch (a) {
					var r = a;
				}
				Reflect.construct(t, [], e);
			} else {
				try {
					e.call();
				} catch (a) {
					r = a;
				}
				t.call(e.prototype);
			}
		else {
			try {
				throw Error();
			} catch (a) {
				r = a;
			}
			t();
		}
	} catch (a) {
		if (a && r && typeof a.stack == 'string') {
			for (
				var i = a.stack.split(`
`),
					s = r.stack.split(`
`),
					o = i.length - 1,
					l = s.length - 1;
				1 <= o && 0 <= l && i[o] !== s[l];

			)
				l--;
			for (; 1 <= o && 0 <= l; o--, l--)
				if (i[o] !== s[l]) {
					if (o !== 1 || l !== 1)
						do
							if ((o--, l--, 0 > l || i[o] !== s[l])) {
								var u =
									`
` + i[o].replace(' at new ', ' at ');
								return (
									t.displayName &&
										u.includes('<anonymous>') &&
										(u = u.replace('<anonymous>', t.displayName)),
									u
								);
							}
						while (1 <= o && 0 <= l);
					break;
				}
		}
	} finally {
		(vc = !1), (Error.prepareStackTrace = n);
	}
	return (t = t ? t.displayName || t.name : '') ? Wo(t) : '';
}
function W1(t) {
	switch (t.tag) {
		case 5:
			return Wo(t.type);
		case 16:
			return Wo('Lazy');
		case 13:
			return Wo('Suspense');
		case 19:
			return Wo('SuspenseList');
		case 0:
		case 2:
		case 15:
			return (t = yc(t.type, !1)), t;
		case 11:
			return (t = yc(t.type.render, !1)), t;
		case 1:
			return (t = yc(t.type, !0)), t;
		default:
			return '';
	}
}
function mf(t) {
	if (t == null) return null;
	if (typeof t == 'function') return t.displayName || t.name || null;
	if (typeof t == 'string') return t;
	switch (t) {
		case Ls:
			return 'Fragment';
		case As:
			return 'Portal';
		case df:
			return 'Profiler';
		case Id:
			return 'StrictMode';
		case hf:
			return 'Suspense';
		case pf:
			return 'SuspenseList';
	}
	if (typeof t == 'object')
		switch (t.$$typeof) {
			case E0:
				return (t.displayName || 'Context') + '.Consumer';
			case T0:
				return (t._context.displayName || 'Context') + '.Provider';
			case Vd:
				var e = t.render;
				return (
					(t = t.displayName),
					t ||
						((t = e.displayName || e.name || ''),
						(t = t !== '' ? 'ForwardRef(' + t + ')' : 'ForwardRef')),
					t
				);
			case $d:
				return (
					(e = t.displayName || null), e !== null ? e : mf(t.type) || 'Memo'
				);
			case si:
				(e = t._payload), (t = t._init);
				try {
					return mf(t(e));
				} catch {}
		}
	return null;
}
function b1(t) {
	var e = t.type;
	switch (t.tag) {
		case 24:
			return 'Cache';
		case 9:
			return (e.displayName || 'Context') + '.Consumer';
		case 10:
			return (e._context.displayName || 'Context') + '.Provider';
		case 18:
			return 'DehydratedFragment';
		case 11:
			return (
				(t = e.render),
				(t = t.displayName || t.name || ''),
				e.displayName || (t !== '' ? 'ForwardRef(' + t + ')' : 'ForwardRef')
			);
		case 7:
			return 'Fragment';
		case 5:
			return e;
		case 4:
			return 'Portal';
		case 3:
			return 'Root';
		case 6:
			return 'Text';
		case 16:
			return mf(e);
		case 8:
			return e === Id ? 'StrictMode' : 'Mode';
		case 22:
			return 'Offscreen';
		case 12:
			return 'Profiler';
		case 21:
			return 'Scope';
		case 13:
			return 'Suspense';
		case 19:
			return 'SuspenseList';
		case 25:
			return 'TracingMarker';
		case 1:
		case 0:
		case 17:
		case 2:
		case 14:
		case 15:
			if (typeof e == 'function') return e.displayName || e.name || null;
			if (typeof e == 'string') return e;
	}
	return null;
}
function Ni(t) {
	switch (typeof t) {
		case 'boolean':
		case 'number':
		case 'string':
		case 'undefined':
			return t;
		case 'object':
			return t;
		default:
			return '';
	}
}
function P0(t) {
	var e = t.type;
	return (
		(t = t.nodeName) &&
		t.toLowerCase() === 'input' &&
		(e === 'checkbox' || e === 'radio')
	);
}
function H1(t) {
	var e = P0(t) ? 'checked' : 'value',
		n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
		r = '' + t[e];
	if (
		!t.hasOwnProperty(e) &&
		typeof n < 'u' &&
		typeof n.get == 'function' &&
		typeof n.set == 'function'
	) {
		var i = n.get,
			s = n.set;
		return (
			Object.defineProperty(t, e, {
				configurable: !0,
				get: function () {
					return i.call(this);
				},
				set: function (o) {
					(r = '' + o), s.call(this, o);
				},
			}),
			Object.defineProperty(t, e, { enumerable: n.enumerable }),
			{
				getValue: function () {
					return r;
				},
				setValue: function (o) {
					r = '' + o;
				},
				stopTracking: function () {
					(t._valueTracker = null), delete t[e];
				},
			}
		);
	}
}
function uu(t) {
	t._valueTracker || (t._valueTracker = H1(t));
}
function N0(t) {
	if (!t) return !1;
	var e = t._valueTracker;
	if (!e) return !0;
	var n = e.getValue(),
		r = '';
	return (
		t && (r = P0(t) ? (t.checked ? 'true' : 'false') : t.value),
		(t = r),
		t !== n ? (e.setValue(t), !0) : !1
	);
}
function oa(t) {
	if (((t = t || (typeof document < 'u' ? document : void 0)), typeof t > 'u'))
		return null;
	try {
		return t.activeElement || t.body;
	} catch {
		return t.body;
	}
}
function _f(t, e) {
	var n = e.checked;
	return We({}, e, {
		defaultChecked: void 0,
		defaultValue: void 0,
		value: void 0,
		checked: n ?? t._wrapperState.initialChecked,
	});
}
function lp(t, e) {
	var n = e.defaultValue == null ? '' : e.defaultValue,
		r = e.checked != null ? e.checked : e.defaultChecked;
	(n = Ni(e.value != null ? e.value : n)),
		(t._wrapperState = {
			initialChecked: r,
			initialValue: n,
			controlled:
				e.type === 'checkbox' || e.type === 'radio'
					? e.checked != null
					: e.value != null,
		});
}
function O0(t, e) {
	(e = e.checked), e != null && Fd(t, 'checked', e, !1);
}
function gf(t, e) {
	O0(t, e);
	var n = Ni(e.value),
		r = e.type;
	if (n != null)
		r === 'number'
			? ((n === 0 && t.value === '') || t.value != n) && (t.value = '' + n)
			: t.value !== '' + n && (t.value = '' + n);
	else if (r === 'submit' || r === 'reset') {
		t.removeAttribute('value');
		return;
	}
	e.hasOwnProperty('value')
		? vf(t, e.type, n)
		: e.hasOwnProperty('defaultValue') && vf(t, e.type, Ni(e.defaultValue)),
		e.checked == null &&
			e.defaultChecked != null &&
			(t.defaultChecked = !!e.defaultChecked);
}
function up(t, e, n) {
	if (e.hasOwnProperty('value') || e.hasOwnProperty('defaultValue')) {
		var r = e.type;
		if (
			!(
				(r !== 'submit' && r !== 'reset') ||
				(e.value !== void 0 && e.value !== null)
			)
		)
			return;
		(e = '' + t._wrapperState.initialValue),
			n || e === t.value || (t.value = e),
			(t.defaultValue = e);
	}
	(n = t.name),
		n !== '' && (t.name = ''),
		(t.defaultChecked = !!t._wrapperState.initialChecked),
		n !== '' && (t.name = n);
}
function vf(t, e, n) {
	(e !== 'number' || oa(t.ownerDocument) !== t) &&
		(n == null
			? (t.defaultValue = '' + t._wrapperState.initialValue)
			: t.defaultValue !== '' + n && (t.defaultValue = '' + n));
}
var bo = Array.isArray;
function Ks(t, e, n, r) {
	if (((t = t.options), e)) {
		e = {};
		for (var i = 0; i < n.length; i++) e['$' + n[i]] = !0;
		for (n = 0; n < t.length; n++)
			(i = e.hasOwnProperty('$' + t[n].value)),
				t[n].selected !== i && (t[n].selected = i),
				i && r && (t[n].defaultSelected = !0);
	} else {
		for (n = '' + Ni(n), e = null, i = 0; i < t.length; i++) {
			if (t[i].value === n) {
				(t[i].selected = !0), r && (t[i].defaultSelected = !0);
				return;
			}
			e !== null || t[i].disabled || (e = t[i]);
		}
		e !== null && (e.selected = !0);
	}
}
function yf(t, e) {
	if (e.dangerouslySetInnerHTML != null) throw Error(z(91));
	return We({}, e, {
		value: void 0,
		defaultValue: void 0,
		children: '' + t._wrapperState.initialValue,
	});
}
function ap(t, e) {
	var n = e.value;
	if (n == null) {
		if (((n = e.children), (e = e.defaultValue), n != null)) {
			if (e != null) throw Error(z(92));
			if (bo(n)) {
				if (1 < n.length) throw Error(z(93));
				n = n[0];
			}
			e = n;
		}
		e == null && (e = ''), (n = e);
	}
	t._wrapperState = { initialValue: Ni(n) };
}
function M0(t, e) {
	var n = Ni(e.value),
		r = Ni(e.defaultValue);
	n != null &&
		((n = '' + n),
		n !== t.value && (t.value = n),
		e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)),
		r != null && (t.defaultValue = '' + r);
}
function cp(t) {
	var e = t.textContent;
	e === t._wrapperState.initialValue && e !== '' && e !== null && (t.value = e);
}
function j0(t) {
	switch (t) {
		case 'svg':
			return 'http://www.w3.org/2000/svg';
		case 'math':
			return 'http://www.w3.org/1998/Math/MathML';
		default:
			return 'http://www.w3.org/1999/xhtml';
	}
}
function xf(t, e) {
	return t == null || t === 'http://www.w3.org/1999/xhtml'
		? j0(e)
		: t === 'http://www.w3.org/2000/svg' && e === 'foreignObject'
			? 'http://www.w3.org/1999/xhtml'
			: t;
}
var au,
	R0 = (function (t) {
		return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
			? function (e, n, r, i) {
					MSApp.execUnsafeLocalFunction(function () {
						return t(e, n, r, i);
					});
				}
			: t;
	})(function (t, e) {
		if (t.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in t)
			t.innerHTML = e;
		else {
			for (
				au = au || document.createElement('div'),
					au.innerHTML = '<svg>' + e.valueOf().toString() + '</svg>',
					e = au.firstChild;
				t.firstChild;

			)
				t.removeChild(t.firstChild);
			for (; e.firstChild; ) t.appendChild(e.firstChild);
		}
	});
function kl(t, e) {
	if (e) {
		var n = t.firstChild;
		if (n && n === t.lastChild && n.nodeType === 3) {
			n.nodeValue = e;
			return;
		}
	}
	t.textContent = e;
}
var el = {
		animationIterationCount: !0,
		aspectRatio: !0,
		borderImageOutset: !0,
		borderImageSlice: !0,
		borderImageWidth: !0,
		boxFlex: !0,
		boxFlexGroup: !0,
		boxOrdinalGroup: !0,
		columnCount: !0,
		columns: !0,
		flex: !0,
		flexGrow: !0,
		flexPositive: !0,
		flexShrink: !0,
		flexNegative: !0,
		flexOrder: !0,
		gridArea: !0,
		gridRow: !0,
		gridRowEnd: !0,
		gridRowSpan: !0,
		gridRowStart: !0,
		gridColumn: !0,
		gridColumnEnd: !0,
		gridColumnSpan: !0,
		gridColumnStart: !0,
		fontWeight: !0,
		lineClamp: !0,
		lineHeight: !0,
		opacity: !0,
		order: !0,
		orphans: !0,
		tabSize: !0,
		widows: !0,
		zIndex: !0,
		zoom: !0,
		fillOpacity: !0,
		floodOpacity: !0,
		stopOpacity: !0,
		strokeDasharray: !0,
		strokeDashoffset: !0,
		strokeMiterlimit: !0,
		strokeOpacity: !0,
		strokeWidth: !0,
	},
	Y1 = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(el).forEach(function (t) {
	Y1.forEach(function (e) {
		(e = e + t.charAt(0).toUpperCase() + t.substring(1)), (el[e] = el[t]);
	});
});
function D0(t, e, n) {
	return e == null || typeof e == 'boolean' || e === ''
		? ''
		: n || typeof e != 'number' || e === 0 || (el.hasOwnProperty(t) && el[t])
			? ('' + e).trim()
			: e + 'px';
}
function A0(t, e) {
	t = t.style;
	for (var n in e)
		if (e.hasOwnProperty(n)) {
			var r = n.indexOf('--') === 0,
				i = D0(n, e[n], r);
			n === 'float' && (n = 'cssFloat'), r ? t.setProperty(n, i) : (t[n] = i);
		}
}
var Q1 = We(
	{ menuitem: !0 },
	{
		area: !0,
		base: !0,
		br: !0,
		col: !0,
		embed: !0,
		hr: !0,
		img: !0,
		input: !0,
		keygen: !0,
		link: !0,
		meta: !0,
		param: !0,
		source: !0,
		track: !0,
		wbr: !0,
	},
);
function wf(t, e) {
	if (e) {
		if (Q1[t] && (e.children != null || e.dangerouslySetInnerHTML != null))
			throw Error(z(137, t));
		if (e.dangerouslySetInnerHTML != null) {
			if (e.children != null) throw Error(z(60));
			if (
				typeof e.dangerouslySetInnerHTML != 'object' ||
				!('__html' in e.dangerouslySetInnerHTML)
			)
				throw Error(z(61));
		}
		if (e.style != null && typeof e.style != 'object') throw Error(z(62));
	}
}
function Sf(t, e) {
	if (t.indexOf('-') === -1) return typeof e.is == 'string';
	switch (t) {
		case 'annotation-xml':
		case 'color-profile':
		case 'font-face':
		case 'font-face-src':
		case 'font-face-uri':
		case 'font-face-format':
		case 'font-face-name':
		case 'missing-glyph':
			return !1;
		default:
			return !0;
	}
}
var kf = null;
function Ud(t) {
	return (
		(t = t.target || t.srcElement || window),
		t.correspondingUseElement && (t = t.correspondingUseElement),
		t.nodeType === 3 ? t.parentNode : t
	);
}
var Tf = null,
	qs = null,
	Zs = null;
function fp(t) {
	if ((t = ql(t))) {
		if (typeof Tf != 'function') throw Error(z(280));
		var e = t.stateNode;
		e && ((e = Ja(e)), Tf(t.stateNode, t.type, e));
	}
}
function L0(t) {
	qs ? (Zs ? Zs.push(t) : (Zs = [t])) : (qs = t);
}
function z0() {
	if (qs) {
		var t = qs,
			e = Zs;
		if (((Zs = qs = null), fp(t), e)) for (t = 0; t < e.length; t++) fp(e[t]);
	}
}
function F0(t, e) {
	return t(e);
}
function I0() {}
var xc = !1;
function V0(t, e, n) {
	if (xc) return t(e, n);
	xc = !0;
	try {
		return F0(t, e, n);
	} finally {
		(xc = !1), (qs !== null || Zs !== null) && (I0(), z0());
	}
}
function Tl(t, e) {
	var n = t.stateNode;
	if (n === null) return null;
	var r = Ja(n);
	if (r === null) return null;
	n = r[e];
	e: switch (e) {
		case 'onClick':
		case 'onClickCapture':
		case 'onDoubleClick':
		case 'onDoubleClickCapture':
		case 'onMouseDown':
		case 'onMouseDownCapture':
		case 'onMouseMove':
		case 'onMouseMoveCapture':
		case 'onMouseUp':
		case 'onMouseUpCapture':
		case 'onMouseEnter':
			(r = !r.disabled) ||
				((t = t.type),
				(r = !(
					t === 'button' ||
					t === 'input' ||
					t === 'select' ||
					t === 'textarea'
				))),
				(t = !r);
			break e;
		default:
			t = !1;
	}
	if (t) return null;
	if (n && typeof n != 'function') throw Error(z(231, e, typeof n));
	return n;
}
var Ef = !1;
if (Yr)
	try {
		var jo = {};
		Object.defineProperty(jo, 'passive', {
			get: function () {
				Ef = !0;
			},
		}),
			window.addEventListener('test', jo, jo),
			window.removeEventListener('test', jo, jo);
	} catch {
		Ef = !1;
	}
function X1(t, e, n, r, i, s, o, l, u) {
	var a = Array.prototype.slice.call(arguments, 3);
	try {
		e.apply(n, a);
	} catch (c) {
		this.onError(c);
	}
}
var tl = !1,
	la = null,
	ua = !1,
	Cf = null,
	G1 = {
		onError: function (t) {
			(tl = !0), (la = t);
		},
	};
function K1(t, e, n, r, i, s, o, l, u) {
	(tl = !1), (la = null), X1.apply(G1, arguments);
}
function q1(t, e, n, r, i, s, o, l, u) {
	if ((K1.apply(this, arguments), tl)) {
		if (tl) {
			var a = la;
			(tl = !1), (la = null);
		} else throw Error(z(198));
		ua || ((ua = !0), (Cf = a));
	}
}
function Ss(t) {
	var e = t,
		n = t;
	if (t.alternate) for (; e.return; ) e = e.return;
	else {
		t = e;
		do (e = t), e.flags & 4098 && (n = e.return), (t = e.return);
		while (t);
	}
	return e.tag === 3 ? n : null;
}
function $0(t) {
	if (t.tag === 13) {
		var e = t.memoizedState;
		if (
			(e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
			e !== null)
		)
			return e.dehydrated;
	}
	return null;
}
function dp(t) {
	if (Ss(t) !== t) throw Error(z(188));
}
function Z1(t) {
	var e = t.alternate;
	if (!e) {
		if (((e = Ss(t)), e === null)) throw Error(z(188));
		return e !== t ? null : t;
	}
	for (var n = t, r = e; ; ) {
		var i = n.return;
		if (i === null) break;
		var s = i.alternate;
		if (s === null) {
			if (((r = i.return), r !== null)) {
				n = r;
				continue;
			}
			break;
		}
		if (i.child === s.child) {
			for (s = i.child; s; ) {
				if (s === n) return dp(i), t;
				if (s === r) return dp(i), e;
				s = s.sibling;
			}
			throw Error(z(188));
		}
		if (n.return !== r.return) (n = i), (r = s);
		else {
			for (var o = !1, l = i.child; l; ) {
				if (l === n) {
					(o = !0), (n = i), (r = s);
					break;
				}
				if (l === r) {
					(o = !0), (r = i), (n = s);
					break;
				}
				l = l.sibling;
			}
			if (!o) {
				for (l = s.child; l; ) {
					if (l === n) {
						(o = !0), (n = s), (r = i);
						break;
					}
					if (l === r) {
						(o = !0), (r = s), (n = i);
						break;
					}
					l = l.sibling;
				}
				if (!o) throw Error(z(189));
			}
		}
		if (n.alternate !== r) throw Error(z(190));
	}
	if (n.tag !== 3) throw Error(z(188));
	return n.stateNode.current === n ? t : e;
}
function U0(t) {
	return (t = Z1(t)), t !== null ? B0(t) : null;
}
function B0(t) {
	if (t.tag === 5 || t.tag === 6) return t;
	for (t = t.child; t !== null; ) {
		var e = B0(t);
		if (e !== null) return e;
		t = t.sibling;
	}
	return null;
}
var W0 = Mn.unstable_scheduleCallback,
	hp = Mn.unstable_cancelCallback,
	J1 = Mn.unstable_shouldYield,
	ey = Mn.unstable_requestPaint,
	Ze = Mn.unstable_now,
	ty = Mn.unstable_getCurrentPriorityLevel,
	Bd = Mn.unstable_ImmediatePriority,
	b0 = Mn.unstable_UserBlockingPriority,
	aa = Mn.unstable_NormalPriority,
	ny = Mn.unstable_LowPriority,
	H0 = Mn.unstable_IdlePriority,
	Ga = null,
	Er = null;
function ry(t) {
	if (Er && typeof Er.onCommitFiberRoot == 'function')
		try {
			Er.onCommitFiberRoot(Ga, t, void 0, (t.current.flags & 128) === 128);
		} catch {}
}
var ar = Math.clz32 ? Math.clz32 : oy,
	iy = Math.log,
	sy = Math.LN2;
function oy(t) {
	return (t >>>= 0), t === 0 ? 32 : (31 - ((iy(t) / sy) | 0)) | 0;
}
var cu = 64,
	fu = 4194304;
function Ho(t) {
	switch (t & -t) {
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
			return t & 4194240;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return t & 130023424;
		case 134217728:
			return 134217728;
		case 268435456:
			return 268435456;
		case 536870912:
			return 536870912;
		case 1073741824:
			return 1073741824;
		default:
			return t;
	}
}
function ca(t, e) {
	var n = t.pendingLanes;
	if (n === 0) return 0;
	var r = 0,
		i = t.suspendedLanes,
		s = t.pingedLanes,
		o = n & 268435455;
	if (o !== 0) {
		var l = o & ~i;
		l !== 0 ? (r = Ho(l)) : ((s &= o), s !== 0 && (r = Ho(s)));
	} else (o = n & ~i), o !== 0 ? (r = Ho(o)) : s !== 0 && (r = Ho(s));
	if (r === 0) return 0;
	if (
		e !== 0 &&
		e !== r &&
		!(e & i) &&
		((i = r & -r), (s = e & -e), i >= s || (i === 16 && (s & 4194240) !== 0))
	)
		return e;
	if ((r & 4 && (r |= n & 16), (e = t.entangledLanes), e !== 0))
		for (t = t.entanglements, e &= r; 0 < e; )
			(n = 31 - ar(e)), (i = 1 << n), (r |= t[n]), (e &= ~i);
	return r;
}
function ly(t, e) {
	switch (t) {
		case 1:
		case 2:
		case 4:
			return e + 250;
		case 8:
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
			return e + 5e3;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return -1;
		case 134217728:
		case 268435456:
		case 536870912:
		case 1073741824:
			return -1;
		default:
			return -1;
	}
}
function uy(t, e) {
	for (
		var n = t.suspendedLanes,
			r = t.pingedLanes,
			i = t.expirationTimes,
			s = t.pendingLanes;
		0 < s;

	) {
		var o = 31 - ar(s),
			l = 1 << o,
			u = i[o];
		u === -1
			? (!(l & n) || l & r) && (i[o] = ly(l, e))
			: u <= e && (t.expiredLanes |= l),
			(s &= ~l);
	}
}
function Pf(t) {
	return (
		(t = t.pendingLanes & -1073741825),
		t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
	);
}
function Y0() {
	var t = cu;
	return (cu <<= 1), !(cu & 4194240) && (cu = 64), t;
}
function wc(t) {
	for (var e = [], n = 0; 31 > n; n++) e.push(t);
	return e;
}
function Gl(t, e, n) {
	(t.pendingLanes |= e),
		e !== 536870912 && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
		(t = t.eventTimes),
		(e = 31 - ar(e)),
		(t[e] = n);
}
function ay(t, e) {
	var n = t.pendingLanes & ~e;
	(t.pendingLanes = e),
		(t.suspendedLanes = 0),
		(t.pingedLanes = 0),
		(t.expiredLanes &= e),
		(t.mutableReadLanes &= e),
		(t.entangledLanes &= e),
		(e = t.entanglements);
	var r = t.eventTimes;
	for (t = t.expirationTimes; 0 < n; ) {
		var i = 31 - ar(n),
			s = 1 << i;
		(e[i] = 0), (r[i] = -1), (t[i] = -1), (n &= ~s);
	}
}
function Wd(t, e) {
	var n = (t.entangledLanes |= e);
	for (t = t.entanglements; n; ) {
		var r = 31 - ar(n),
			i = 1 << r;
		(i & e) | (t[r] & e) && (t[r] |= e), (n &= ~i);
	}
}
var xe = 0;
function Q0(t) {
	return (t &= -t), 1 < t ? (4 < t ? (t & 268435455 ? 16 : 536870912) : 4) : 1;
}
var X0,
	bd,
	G0,
	K0,
	q0,
	Nf = !1,
	du = [],
	gi = null,
	vi = null,
	yi = null,
	El = new Map(),
	Cl = new Map(),
	li = [],
	cy =
		'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
			' ',
		);
function pp(t, e) {
	switch (t) {
		case 'focusin':
		case 'focusout':
			gi = null;
			break;
		case 'dragenter':
		case 'dragleave':
			vi = null;
			break;
		case 'mouseover':
		case 'mouseout':
			yi = null;
			break;
		case 'pointerover':
		case 'pointerout':
			El.delete(e.pointerId);
			break;
		case 'gotpointercapture':
		case 'lostpointercapture':
			Cl.delete(e.pointerId);
	}
}
function Ro(t, e, n, r, i, s) {
	return t === null || t.nativeEvent !== s
		? ((t = {
				blockedOn: e,
				domEventName: n,
				eventSystemFlags: r,
				nativeEvent: s,
				targetContainers: [i],
			}),
			e !== null && ((e = ql(e)), e !== null && bd(e)),
			t)
		: ((t.eventSystemFlags |= r),
			(e = t.targetContainers),
			i !== null && e.indexOf(i) === -1 && e.push(i),
			t);
}
function fy(t, e, n, r, i) {
	switch (e) {
		case 'focusin':
			return (gi = Ro(gi, t, e, n, r, i)), !0;
		case 'dragenter':
			return (vi = Ro(vi, t, e, n, r, i)), !0;
		case 'mouseover':
			return (yi = Ro(yi, t, e, n, r, i)), !0;
		case 'pointerover':
			var s = i.pointerId;
			return El.set(s, Ro(El.get(s) || null, t, e, n, r, i)), !0;
		case 'gotpointercapture':
			return (
				(s = i.pointerId), Cl.set(s, Ro(Cl.get(s) || null, t, e, n, r, i)), !0
			);
	}
	return !1;
}
function Z0(t) {
	var e = Ki(t.target);
	if (e !== null) {
		var n = Ss(e);
		if (n !== null) {
			if (((e = n.tag), e === 13)) {
				if (((e = $0(n)), e !== null)) {
					(t.blockedOn = e),
						q0(t.priority, function () {
							G0(n);
						});
					return;
				}
			} else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
				t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
				return;
			}
		}
	}
	t.blockedOn = null;
}
function $u(t) {
	if (t.blockedOn !== null) return !1;
	for (var e = t.targetContainers; 0 < e.length; ) {
		var n = Of(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
		if (n === null) {
			n = t.nativeEvent;
			var r = new n.constructor(n.type, n);
			(kf = r), n.target.dispatchEvent(r), (kf = null);
		} else return (e = ql(n)), e !== null && bd(e), (t.blockedOn = n), !1;
		e.shift();
	}
	return !0;
}
function mp(t, e, n) {
	$u(t) && n.delete(e);
}
function dy() {
	(Nf = !1),
		gi !== null && $u(gi) && (gi = null),
		vi !== null && $u(vi) && (vi = null),
		yi !== null && $u(yi) && (yi = null),
		El.forEach(mp),
		Cl.forEach(mp);
}
function Do(t, e) {
	t.blockedOn === e &&
		((t.blockedOn = null),
		Nf ||
			((Nf = !0),
			Mn.unstable_scheduleCallback(Mn.unstable_NormalPriority, dy)));
}
function Pl(t) {
	function e(i) {
		return Do(i, t);
	}
	if (0 < du.length) {
		Do(du[0], t);
		for (var n = 1; n < du.length; n++) {
			var r = du[n];
			r.blockedOn === t && (r.blockedOn = null);
		}
	}
	for (
		gi !== null && Do(gi, t),
			vi !== null && Do(vi, t),
			yi !== null && Do(yi, t),
			El.forEach(e),
			Cl.forEach(e),
			n = 0;
		n < li.length;
		n++
	)
		(r = li[n]), r.blockedOn === t && (r.blockedOn = null);
	for (; 0 < li.length && ((n = li[0]), n.blockedOn === null); )
		Z0(n), n.blockedOn === null && li.shift();
}
var Js = Zr.ReactCurrentBatchConfig,
	fa = !0;
function hy(t, e, n, r) {
	var i = xe,
		s = Js.transition;
	Js.transition = null;
	try {
		(xe = 1), Hd(t, e, n, r);
	} finally {
		(xe = i), (Js.transition = s);
	}
}
function py(t, e, n, r) {
	var i = xe,
		s = Js.transition;
	Js.transition = null;
	try {
		(xe = 4), Hd(t, e, n, r);
	} finally {
		(xe = i), (Js.transition = s);
	}
}
function Hd(t, e, n, r) {
	if (fa) {
		var i = Of(t, e, n, r);
		if (i === null) jc(t, e, r, da, n), pp(t, r);
		else if (fy(i, t, e, n, r)) r.stopPropagation();
		else if ((pp(t, r), e & 4 && -1 < cy.indexOf(t))) {
			for (; i !== null; ) {
				var s = ql(i);
				if (
					(s !== null && X0(s),
					(s = Of(t, e, n, r)),
					s === null && jc(t, e, r, da, n),
					s === i)
				)
					break;
				i = s;
			}
			i !== null && r.stopPropagation();
		} else jc(t, e, r, null, n);
	}
}
var da = null;
function Of(t, e, n, r) {
	if (((da = null), (t = Ud(r)), (t = Ki(t)), t !== null))
		if (((e = Ss(t)), e === null)) t = null;
		else if (((n = e.tag), n === 13)) {
			if (((t = $0(e)), t !== null)) return t;
			t = null;
		} else if (n === 3) {
			if (e.stateNode.current.memoizedState.isDehydrated)
				return e.tag === 3 ? e.stateNode.containerInfo : null;
			t = null;
		} else e !== t && (t = null);
	return (da = t), null;
}
function J0(t) {
	switch (t) {
		case 'cancel':
		case 'click':
		case 'close':
		case 'contextmenu':
		case 'copy':
		case 'cut':
		case 'auxclick':
		case 'dblclick':
		case 'dragend':
		case 'dragstart':
		case 'drop':
		case 'focusin':
		case 'focusout':
		case 'input':
		case 'invalid':
		case 'keydown':
		case 'keypress':
		case 'keyup':
		case 'mousedown':
		case 'mouseup':
		case 'paste':
		case 'pause':
		case 'play':
		case 'pointercancel':
		case 'pointerdown':
		case 'pointerup':
		case 'ratechange':
		case 'reset':
		case 'resize':
		case 'seeked':
		case 'submit':
		case 'touchcancel':
		case 'touchend':
		case 'touchstart':
		case 'volumechange':
		case 'change':
		case 'selectionchange':
		case 'textInput':
		case 'compositionstart':
		case 'compositionend':
		case 'compositionupdate':
		case 'beforeblur':
		case 'afterblur':
		case 'beforeinput':
		case 'blur':
		case 'fullscreenchange':
		case 'focus':
		case 'hashchange':
		case 'popstate':
		case 'select':
		case 'selectstart':
			return 1;
		case 'drag':
		case 'dragenter':
		case 'dragexit':
		case 'dragleave':
		case 'dragover':
		case 'mousemove':
		case 'mouseout':
		case 'mouseover':
		case 'pointermove':
		case 'pointerout':
		case 'pointerover':
		case 'scroll':
		case 'toggle':
		case 'touchmove':
		case 'wheel':
		case 'mouseenter':
		case 'mouseleave':
		case 'pointerenter':
		case 'pointerleave':
			return 4;
		case 'message':
			switch (ty()) {
				case Bd:
					return 1;
				case b0:
					return 4;
				case aa:
				case ny:
					return 16;
				case H0:
					return 536870912;
				default:
					return 16;
			}
		default:
			return 16;
	}
}
var ai = null,
	Yd = null,
	Uu = null;
function e_() {
	if (Uu) return Uu;
	var t,
		e = Yd,
		n = e.length,
		r,
		i = 'value' in ai ? ai.value : ai.textContent,
		s = i.length;
	for (t = 0; t < n && e[t] === i[t]; t++);
	var o = n - t;
	for (r = 1; r <= o && e[n - r] === i[s - r]; r++);
	return (Uu = i.slice(t, 1 < r ? 1 - r : void 0));
}
function Bu(t) {
	var e = t.keyCode;
	return (
		'charCode' in t
			? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
			: (t = e),
		t === 10 && (t = 13),
		32 <= t || t === 13 ? t : 0
	);
}
function hu() {
	return !0;
}
function _p() {
	return !1;
}
function Dn(t) {
	function e(n, r, i, s, o) {
		(this._reactName = n),
			(this._targetInst = i),
			(this.type = r),
			(this.nativeEvent = s),
			(this.target = o),
			(this.currentTarget = null);
		for (var l in t)
			t.hasOwnProperty(l) && ((n = t[l]), (this[l] = n ? n(s) : s[l]));
		return (
			(this.isDefaultPrevented = (
				s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
			)
				? hu
				: _p),
			(this.isPropagationStopped = _p),
			this
		);
	}
	return (
		We(e.prototype, {
			preventDefault: function () {
				this.defaultPrevented = !0;
				var n = this.nativeEvent;
				n &&
					(n.preventDefault
						? n.preventDefault()
						: typeof n.returnValue != 'unknown' && (n.returnValue = !1),
					(this.isDefaultPrevented = hu));
			},
			stopPropagation: function () {
				var n = this.nativeEvent;
				n &&
					(n.stopPropagation
						? n.stopPropagation()
						: typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
					(this.isPropagationStopped = hu));
			},
			persist: function () {},
			isPersistent: hu,
		}),
		e
	);
}
var To = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function (t) {
			return t.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0,
	},
	Qd = Dn(To),
	Kl = We({}, To, { view: 0, detail: 0 }),
	my = Dn(Kl),
	Sc,
	kc,
	Ao,
	Ka = We({}, Kl, {
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
		getModifierState: Xd,
		button: 0,
		buttons: 0,
		relatedTarget: function (t) {
			return t.relatedTarget === void 0
				? t.fromElement === t.srcElement
					? t.toElement
					: t.fromElement
				: t.relatedTarget;
		},
		movementX: function (t) {
			return 'movementX' in t
				? t.movementX
				: (t !== Ao &&
						(Ao && t.type === 'mousemove'
							? ((Sc = t.screenX - Ao.screenX), (kc = t.screenY - Ao.screenY))
							: (kc = Sc = 0),
						(Ao = t)),
					Sc);
		},
		movementY: function (t) {
			return 'movementY' in t ? t.movementY : kc;
		},
	}),
	gp = Dn(Ka),
	_y = We({}, Ka, { dataTransfer: 0 }),
	gy = Dn(_y),
	vy = We({}, Kl, { relatedTarget: 0 }),
	Tc = Dn(vy),
	yy = We({}, To, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
	xy = Dn(yy),
	wy = We({}, To, {
		clipboardData: function (t) {
			return 'clipboardData' in t ? t.clipboardData : window.clipboardData;
		},
	}),
	Sy = Dn(wy),
	ky = We({}, To, { data: 0 }),
	vp = Dn(ky),
	Ty = {
		Esc: 'Escape',
		Spacebar: ' ',
		Left: 'ArrowLeft',
		Up: 'ArrowUp',
		Right: 'ArrowRight',
		Down: 'ArrowDown',
		Del: 'Delete',
		Win: 'OS',
		Menu: 'ContextMenu',
		Apps: 'ContextMenu',
		Scroll: 'ScrollLock',
		MozPrintableKey: 'Unidentified',
	},
	Ey = {
		8: 'Backspace',
		9: 'Tab',
		12: 'Clear',
		13: 'Enter',
		16: 'Shift',
		17: 'Control',
		18: 'Alt',
		19: 'Pause',
		20: 'CapsLock',
		27: 'Escape',
		32: ' ',
		33: 'PageUp',
		34: 'PageDown',
		35: 'End',
		36: 'Home',
		37: 'ArrowLeft',
		38: 'ArrowUp',
		39: 'ArrowRight',
		40: 'ArrowDown',
		45: 'Insert',
		46: 'Delete',
		112: 'F1',
		113: 'F2',
		114: 'F3',
		115: 'F4',
		116: 'F5',
		117: 'F6',
		118: 'F7',
		119: 'F8',
		120: 'F9',
		121: 'F10',
		122: 'F11',
		123: 'F12',
		144: 'NumLock',
		145: 'ScrollLock',
		224: 'Meta',
	},
	Cy = {
		Alt: 'altKey',
		Control: 'ctrlKey',
		Meta: 'metaKey',
		Shift: 'shiftKey',
	};
function Py(t) {
	var e = this.nativeEvent;
	return e.getModifierState ? e.getModifierState(t) : (t = Cy[t]) ? !!e[t] : !1;
}
function Xd() {
	return Py;
}
var Ny = We({}, Kl, {
		key: function (t) {
			if (t.key) {
				var e = Ty[t.key] || t.key;
				if (e !== 'Unidentified') return e;
			}
			return t.type === 'keypress'
				? ((t = Bu(t)), t === 13 ? 'Enter' : String.fromCharCode(t))
				: t.type === 'keydown' || t.type === 'keyup'
					? Ey[t.keyCode] || 'Unidentified'
					: '';
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: Xd,
		charCode: function (t) {
			return t.type === 'keypress' ? Bu(t) : 0;
		},
		keyCode: function (t) {
			return t.type === 'keydown' || t.type === 'keyup' ? t.keyCode : 0;
		},
		which: function (t) {
			return t.type === 'keypress'
				? Bu(t)
				: t.type === 'keydown' || t.type === 'keyup'
					? t.keyCode
					: 0;
		},
	}),
	Oy = Dn(Ny),
	My = We({}, Ka, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0,
	}),
	yp = Dn(My),
	jy = We({}, Kl, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: Xd,
	}),
	Ry = Dn(jy),
	Dy = We({}, To, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
	Ay = Dn(Dy),
	Ly = We({}, Ka, {
		deltaX: function (t) {
			return 'deltaX' in t ? t.deltaX : 'wheelDeltaX' in t ? -t.wheelDeltaX : 0;
		},
		deltaY: function (t) {
			return 'deltaY' in t
				? t.deltaY
				: 'wheelDeltaY' in t
					? -t.wheelDeltaY
					: 'wheelDelta' in t
						? -t.wheelDelta
						: 0;
		},
		deltaZ: 0,
		deltaMode: 0,
	}),
	zy = Dn(Ly),
	Fy = [9, 13, 27, 32],
	Gd = Yr && 'CompositionEvent' in window,
	nl = null;
Yr && 'documentMode' in document && (nl = document.documentMode);
var Iy = Yr && 'TextEvent' in window && !nl,
	t_ = Yr && (!Gd || (nl && 8 < nl && 11 >= nl)),
	xp = ' ',
	wp = !1;
function n_(t, e) {
	switch (t) {
		case 'keyup':
			return Fy.indexOf(e.keyCode) !== -1;
		case 'keydown':
			return e.keyCode !== 229;
		case 'keypress':
		case 'mousedown':
		case 'focusout':
			return !0;
		default:
			return !1;
	}
}
function r_(t) {
	return (t = t.detail), typeof t == 'object' && 'data' in t ? t.data : null;
}
var zs = !1;
function Vy(t, e) {
	switch (t) {
		case 'compositionend':
			return r_(e);
		case 'keypress':
			return e.which !== 32 ? null : ((wp = !0), xp);
		case 'textInput':
			return (t = e.data), t === xp && wp ? null : t;
		default:
			return null;
	}
}
function $y(t, e) {
	if (zs)
		return t === 'compositionend' || (!Gd && n_(t, e))
			? ((t = e_()), (Uu = Yd = ai = null), (zs = !1), t)
			: null;
	switch (t) {
		case 'paste':
			return null;
		case 'keypress':
			if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
				if (e.char && 1 < e.char.length) return e.char;
				if (e.which) return String.fromCharCode(e.which);
			}
			return null;
		case 'compositionend':
			return t_ && e.locale !== 'ko' ? null : e.data;
		default:
			return null;
	}
}
var Uy = {
	color: !0,
	date: !0,
	datetime: !0,
	'datetime-local': !0,
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
	week: !0,
};
function Sp(t) {
	var e = t && t.nodeName && t.nodeName.toLowerCase();
	return e === 'input' ? !!Uy[t.type] : e === 'textarea';
}
function i_(t, e, n, r) {
	L0(r),
		(e = ha(e, 'onChange')),
		0 < e.length &&
			((n = new Qd('onChange', 'change', null, n, r)),
			t.push({ event: n, listeners: e }));
}
var rl = null,
	Nl = null;
function By(t) {
	m_(t, 0);
}
function qa(t) {
	var e = Vs(t);
	if (N0(e)) return t;
}
function Wy(t, e) {
	if (t === 'change') return e;
}
var s_ = !1;
if (Yr) {
	var Ec;
	if (Yr) {
		var Cc = 'oninput' in document;
		if (!Cc) {
			var kp = document.createElement('div');
			kp.setAttribute('oninput', 'return;'),
				(Cc = typeof kp.oninput == 'function');
		}
		Ec = Cc;
	} else Ec = !1;
	s_ = Ec && (!document.documentMode || 9 < document.documentMode);
}
function Tp() {
	rl && (rl.detachEvent('onpropertychange', o_), (Nl = rl = null));
}
function o_(t) {
	if (t.propertyName === 'value' && qa(Nl)) {
		var e = [];
		i_(e, Nl, t, Ud(t)), V0(By, e);
	}
}
function by(t, e, n) {
	t === 'focusin'
		? (Tp(), (rl = e), (Nl = n), rl.attachEvent('onpropertychange', o_))
		: t === 'focusout' && Tp();
}
function Hy(t) {
	if (t === 'selectionchange' || t === 'keyup' || t === 'keydown')
		return qa(Nl);
}
function Yy(t, e) {
	if (t === 'click') return qa(e);
}
function Qy(t, e) {
	if (t === 'input' || t === 'change') return qa(e);
}
function Xy(t, e) {
	return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
}
var fr = typeof Object.is == 'function' ? Object.is : Xy;
function Ol(t, e) {
	if (fr(t, e)) return !0;
	if (typeof t != 'object' || t === null || typeof e != 'object' || e === null)
		return !1;
	var n = Object.keys(t),
		r = Object.keys(e);
	if (n.length !== r.length) return !1;
	for (r = 0; r < n.length; r++) {
		var i = n[r];
		if (!ff.call(e, i) || !fr(t[i], e[i])) return !1;
	}
	return !0;
}
function Ep(t) {
	for (; t && t.firstChild; ) t = t.firstChild;
	return t;
}
function Cp(t, e) {
	var n = Ep(t);
	t = 0;
	for (var r; n; ) {
		if (n.nodeType === 3) {
			if (((r = t + n.textContent.length), t <= e && r >= e))
				return { node: n, offset: e - t };
			t = r;
		}
		e: {
			for (; n; ) {
				if (n.nextSibling) {
					n = n.nextSibling;
					break e;
				}
				n = n.parentNode;
			}
			n = void 0;
		}
		n = Ep(n);
	}
}
function l_(t, e) {
	return t && e
		? t === e
			? !0
			: t && t.nodeType === 3
				? !1
				: e && e.nodeType === 3
					? l_(t, e.parentNode)
					: 'contains' in t
						? t.contains(e)
						: t.compareDocumentPosition
							? !!(t.compareDocumentPosition(e) & 16)
							: !1
		: !1;
}
function u_() {
	for (var t = window, e = oa(); e instanceof t.HTMLIFrameElement; ) {
		try {
			var n = typeof e.contentWindow.location.href == 'string';
		} catch {
			n = !1;
		}
		if (n) t = e.contentWindow;
		else break;
		e = oa(t.document);
	}
	return e;
}
function Kd(t) {
	var e = t && t.nodeName && t.nodeName.toLowerCase();
	return (
		e &&
		((e === 'input' &&
			(t.type === 'text' ||
				t.type === 'search' ||
				t.type === 'tel' ||
				t.type === 'url' ||
				t.type === 'password')) ||
			e === 'textarea' ||
			t.contentEditable === 'true')
	);
}
function Gy(t) {
	var e = u_(),
		n = t.focusedElem,
		r = t.selectionRange;
	if (
		e !== n &&
		n &&
		n.ownerDocument &&
		l_(n.ownerDocument.documentElement, n)
	) {
		if (r !== null && Kd(n)) {
			if (
				((e = r.start),
				(t = r.end),
				t === void 0 && (t = e),
				'selectionStart' in n)
			)
				(n.selectionStart = e), (n.selectionEnd = Math.min(t, n.value.length));
			else if (
				((t = ((e = n.ownerDocument || document) && e.defaultView) || window),
				t.getSelection)
			) {
				t = t.getSelection();
				var i = n.textContent.length,
					s = Math.min(r.start, i);
				(r = r.end === void 0 ? s : Math.min(r.end, i)),
					!t.extend && s > r && ((i = r), (r = s), (s = i)),
					(i = Cp(n, s));
				var o = Cp(n, r);
				i &&
					o &&
					(t.rangeCount !== 1 ||
						t.anchorNode !== i.node ||
						t.anchorOffset !== i.offset ||
						t.focusNode !== o.node ||
						t.focusOffset !== o.offset) &&
					((e = e.createRange()),
					e.setStart(i.node, i.offset),
					t.removeAllRanges(),
					s > r
						? (t.addRange(e), t.extend(o.node, o.offset))
						: (e.setEnd(o.node, o.offset), t.addRange(e)));
			}
		}
		for (e = [], t = n; (t = t.parentNode); )
			t.nodeType === 1 &&
				e.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
		for (typeof n.focus == 'function' && n.focus(), n = 0; n < e.length; n++)
			(t = e[n]),
				(t.element.scrollLeft = t.left),
				(t.element.scrollTop = t.top);
	}
}
var Ky = Yr && 'documentMode' in document && 11 >= document.documentMode,
	Fs = null,
	Mf = null,
	il = null,
	jf = !1;
function Pp(t, e, n) {
	var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
	jf ||
		Fs == null ||
		Fs !== oa(r) ||
		((r = Fs),
		'selectionStart' in r && Kd(r)
			? (r = { start: r.selectionStart, end: r.selectionEnd })
			: ((r = (
					(r.ownerDocument && r.ownerDocument.defaultView) ||
					window
				).getSelection()),
				(r = {
					anchorNode: r.anchorNode,
					anchorOffset: r.anchorOffset,
					focusNode: r.focusNode,
					focusOffset: r.focusOffset,
				})),
		(il && Ol(il, r)) ||
			((il = r),
			(r = ha(Mf, 'onSelect')),
			0 < r.length &&
				((e = new Qd('onSelect', 'select', null, e, n)),
				t.push({ event: e, listeners: r }),
				(e.target = Fs))));
}
function pu(t, e) {
	var n = {};
	return (
		(n[t.toLowerCase()] = e.toLowerCase()),
		(n['Webkit' + t] = 'webkit' + e),
		(n['Moz' + t] = 'moz' + e),
		n
	);
}
var Is = {
		animationend: pu('Animation', 'AnimationEnd'),
		animationiteration: pu('Animation', 'AnimationIteration'),
		animationstart: pu('Animation', 'AnimationStart'),
		transitionend: pu('Transition', 'TransitionEnd'),
	},
	Pc = {},
	a_ = {};
Yr &&
	((a_ = document.createElement('div').style),
	'AnimationEvent' in window ||
		(delete Is.animationend.animation,
		delete Is.animationiteration.animation,
		delete Is.animationstart.animation),
	'TransitionEvent' in window || delete Is.transitionend.transition);
function Za(t) {
	if (Pc[t]) return Pc[t];
	if (!Is[t]) return t;
	var e = Is[t],
		n;
	for (n in e) if (e.hasOwnProperty(n) && n in a_) return (Pc[t] = e[n]);
	return t;
}
var c_ = Za('animationend'),
	f_ = Za('animationiteration'),
	d_ = Za('animationstart'),
	h_ = Za('transitionend'),
	p_ = new Map(),
	Np =
		'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
			' ',
		);
function Di(t, e) {
	p_.set(t, e), ws(e, [t]);
}
for (var Nc = 0; Nc < Np.length; Nc++) {
	var Oc = Np[Nc],
		qy = Oc.toLowerCase(),
		Zy = Oc[0].toUpperCase() + Oc.slice(1);
	Di(qy, 'on' + Zy);
}
Di(c_, 'onAnimationEnd');
Di(f_, 'onAnimationIteration');
Di(d_, 'onAnimationStart');
Di('dblclick', 'onDoubleClick');
Di('focusin', 'onFocus');
Di('focusout', 'onBlur');
Di(h_, 'onTransitionEnd');
uo('onMouseEnter', ['mouseout', 'mouseover']);
uo('onMouseLeave', ['mouseout', 'mouseover']);
uo('onPointerEnter', ['pointerout', 'pointerover']);
uo('onPointerLeave', ['pointerout', 'pointerover']);
ws(
	'onChange',
	'change click focusin focusout input keydown keyup selectionchange'.split(
		' ',
	),
);
ws(
	'onSelect',
	'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
		' ',
	),
);
ws('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
ws(
	'onCompositionEnd',
	'compositionend focusout keydown keypress keyup mousedown'.split(' '),
);
ws(
	'onCompositionStart',
	'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
);
ws(
	'onCompositionUpdate',
	'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
);
var Yo =
		'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
			' ',
		),
	Jy = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Yo));
function Op(t, e, n) {
	var r = t.type || 'unknown-event';
	(t.currentTarget = n), q1(r, e, void 0, t), (t.currentTarget = null);
}
function m_(t, e) {
	e = (e & 4) !== 0;
	for (var n = 0; n < t.length; n++) {
		var r = t[n],
			i = r.event;
		r = r.listeners;
		e: {
			var s = void 0;
			if (e)
				for (var o = r.length - 1; 0 <= o; o--) {
					var l = r[o],
						u = l.instance,
						a = l.currentTarget;
					if (((l = l.listener), u !== s && i.isPropagationStopped())) break e;
					Op(i, l, a), (s = u);
				}
			else
				for (o = 0; o < r.length; o++) {
					if (
						((l = r[o]),
						(u = l.instance),
						(a = l.currentTarget),
						(l = l.listener),
						u !== s && i.isPropagationStopped())
					)
						break e;
					Op(i, l, a), (s = u);
				}
		}
	}
	if (ua) throw ((t = Cf), (ua = !1), (Cf = null), t);
}
function Ce(t, e) {
	var n = e[zf];
	n === void 0 && (n = e[zf] = new Set());
	var r = t + '__bubble';
	n.has(r) || (__(e, t, 2, !1), n.add(r));
}
function Mc(t, e, n) {
	var r = 0;
	e && (r |= 4), __(n, t, r, e);
}
var mu = '_reactListening' + Math.random().toString(36).slice(2);
function Ml(t) {
	if (!t[mu]) {
		(t[mu] = !0),
			k0.forEach(function (n) {
				n !== 'selectionchange' && (Jy.has(n) || Mc(n, !1, t), Mc(n, !0, t));
			});
		var e = t.nodeType === 9 ? t : t.ownerDocument;
		e === null || e[mu] || ((e[mu] = !0), Mc('selectionchange', !1, e));
	}
}
function __(t, e, n, r) {
	switch (J0(e)) {
		case 1:
			var i = hy;
			break;
		case 4:
			i = py;
			break;
		default:
			i = Hd;
	}
	(n = i.bind(null, e, n, t)),
		(i = void 0),
		!Ef ||
			(e !== 'touchstart' && e !== 'touchmove' && e !== 'wheel') ||
			(i = !0),
		r
			? i !== void 0
				? t.addEventListener(e, n, { capture: !0, passive: i })
				: t.addEventListener(e, n, !0)
			: i !== void 0
				? t.addEventListener(e, n, { passive: i })
				: t.addEventListener(e, n, !1);
}
function jc(t, e, n, r, i) {
	var s = r;
	if (!(e & 1) && !(e & 2) && r !== null)
		e: for (;;) {
			if (r === null) return;
			var o = r.tag;
			if (o === 3 || o === 4) {
				var l = r.stateNode.containerInfo;
				if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
				if (o === 4)
					for (o = r.return; o !== null; ) {
						var u = o.tag;
						if (
							(u === 3 || u === 4) &&
							((u = o.stateNode.containerInfo),
							u === i || (u.nodeType === 8 && u.parentNode === i))
						)
							return;
						o = o.return;
					}
				for (; l !== null; ) {
					if (((o = Ki(l)), o === null)) return;
					if (((u = o.tag), u === 5 || u === 6)) {
						r = s = o;
						continue e;
					}
					l = l.parentNode;
				}
			}
			r = r.return;
		}
	V0(function () {
		var a = s,
			c = Ud(n),
			d = [];
		e: {
			var f = p_.get(t);
			if (f !== void 0) {
				var h = Qd,
					g = t;
				switch (t) {
					case 'keypress':
						if (Bu(n) === 0) break e;
					case 'keydown':
					case 'keyup':
						h = Oy;
						break;
					case 'focusin':
						(g = 'focus'), (h = Tc);
						break;
					case 'focusout':
						(g = 'blur'), (h = Tc);
						break;
					case 'beforeblur':
					case 'afterblur':
						h = Tc;
						break;
					case 'click':
						if (n.button === 2) break e;
					case 'auxclick':
					case 'dblclick':
					case 'mousedown':
					case 'mousemove':
					case 'mouseup':
					case 'mouseout':
					case 'mouseover':
					case 'contextmenu':
						h = gp;
						break;
					case 'drag':
					case 'dragend':
					case 'dragenter':
					case 'dragexit':
					case 'dragleave':
					case 'dragover':
					case 'dragstart':
					case 'drop':
						h = gy;
						break;
					case 'touchcancel':
					case 'touchend':
					case 'touchmove':
					case 'touchstart':
						h = Ry;
						break;
					case c_:
					case f_:
					case d_:
						h = xy;
						break;
					case h_:
						h = Ay;
						break;
					case 'scroll':
						h = my;
						break;
					case 'wheel':
						h = zy;
						break;
					case 'copy':
					case 'cut':
					case 'paste':
						h = Sy;
						break;
					case 'gotpointercapture':
					case 'lostpointercapture':
					case 'pointercancel':
					case 'pointerdown':
					case 'pointermove':
					case 'pointerout':
					case 'pointerover':
					case 'pointerup':
						h = yp;
				}
				var m = (e & 4) !== 0,
					T = !m && t === 'scroll',
					_ = m ? (f !== null ? f + 'Capture' : null) : f;
				m = [];
				for (var p = a, y; p !== null; ) {
					y = p;
					var x = y.stateNode;
					if (
						(y.tag === 5 &&
							x !== null &&
							((y = x),
							_ !== null && ((x = Tl(p, _)), x != null && m.push(jl(p, x, y)))),
						T)
					)
						break;
					p = p.return;
				}
				0 < m.length &&
					((f = new h(f, g, null, n, c)), d.push({ event: f, listeners: m }));
			}
		}
		if (!(e & 7)) {
			e: {
				if (
					((f = t === 'mouseover' || t === 'pointerover'),
					(h = t === 'mouseout' || t === 'pointerout'),
					f &&
						n !== kf &&
						(g = n.relatedTarget || n.fromElement) &&
						(Ki(g) || g[Qr]))
				)
					break e;
				if (
					(h || f) &&
					((f =
						c.window === c
							? c
							: (f = c.ownerDocument)
								? f.defaultView || f.parentWindow
								: window),
					h
						? ((g = n.relatedTarget || n.toElement),
							(h = a),
							(g = g ? Ki(g) : null),
							g !== null &&
								((T = Ss(g)), g !== T || (g.tag !== 5 && g.tag !== 6)) &&
								(g = null))
						: ((h = null), (g = a)),
					h !== g)
				) {
					if (
						((m = gp),
						(x = 'onMouseLeave'),
						(_ = 'onMouseEnter'),
						(p = 'mouse'),
						(t === 'pointerout' || t === 'pointerover') &&
							((m = yp),
							(x = 'onPointerLeave'),
							(_ = 'onPointerEnter'),
							(p = 'pointer')),
						(T = h == null ? f : Vs(h)),
						(y = g == null ? f : Vs(g)),
						(f = new m(x, p + 'leave', h, n, c)),
						(f.target = T),
						(f.relatedTarget = y),
						(x = null),
						Ki(c) === a &&
							((m = new m(_, p + 'enter', g, n, c)),
							(m.target = y),
							(m.relatedTarget = T),
							(x = m)),
						(T = x),
						h && g)
					)
						t: {
							for (m = h, _ = g, p = 0, y = m; y; y = Cs(y)) p++;
							for (y = 0, x = _; x; x = Cs(x)) y++;
							for (; 0 < p - y; ) (m = Cs(m)), p--;
							for (; 0 < y - p; ) (_ = Cs(_)), y--;
							for (; p--; ) {
								if (m === _ || (_ !== null && m === _.alternate)) break t;
								(m = Cs(m)), (_ = Cs(_));
							}
							m = null;
						}
					else m = null;
					h !== null && Mp(d, f, h, m, !1),
						g !== null && T !== null && Mp(d, T, g, m, !0);
				}
			}
			e: {
				if (
					((f = a ? Vs(a) : window),
					(h = f.nodeName && f.nodeName.toLowerCase()),
					h === 'select' || (h === 'input' && f.type === 'file'))
				)
					var k = Wy;
				else if (Sp(f))
					if (s_) k = Qy;
					else {
						k = Hy;
						var C = by;
					}
				else
					(h = f.nodeName) &&
						h.toLowerCase() === 'input' &&
						(f.type === 'checkbox' || f.type === 'radio') &&
						(k = Yy);
				if (k && (k = k(t, a))) {
					i_(d, k, n, c);
					break e;
				}
				C && C(t, f, a),
					t === 'focusout' &&
						(C = f._wrapperState) &&
						C.controlled &&
						f.type === 'number' &&
						vf(f, 'number', f.value);
			}
			switch (((C = a ? Vs(a) : window), t)) {
				case 'focusin':
					(Sp(C) || C.contentEditable === 'true') &&
						((Fs = C), (Mf = a), (il = null));
					break;
				case 'focusout':
					il = Mf = Fs = null;
					break;
				case 'mousedown':
					jf = !0;
					break;
				case 'contextmenu':
				case 'mouseup':
				case 'dragend':
					(jf = !1), Pp(d, n, c);
					break;
				case 'selectionchange':
					if (Ky) break;
				case 'keydown':
				case 'keyup':
					Pp(d, n, c);
			}
			var E;
			if (Gd)
				e: {
					switch (t) {
						case 'compositionstart':
							var N = 'onCompositionStart';
							break e;
						case 'compositionend':
							N = 'onCompositionEnd';
							break e;
						case 'compositionupdate':
							N = 'onCompositionUpdate';
							break e;
					}
					N = void 0;
				}
			else
				zs
					? n_(t, n) && (N = 'onCompositionEnd')
					: t === 'keydown' && n.keyCode === 229 && (N = 'onCompositionStart');
			N &&
				(t_ &&
					n.locale !== 'ko' &&
					(zs || N !== 'onCompositionStart'
						? N === 'onCompositionEnd' && zs && (E = e_())
						: ((ai = c),
							(Yd = 'value' in ai ? ai.value : ai.textContent),
							(zs = !0))),
				(C = ha(a, N)),
				0 < C.length &&
					((N = new vp(N, t, null, n, c)),
					d.push({ event: N, listeners: C }),
					E ? (N.data = E) : ((E = r_(n)), E !== null && (N.data = E)))),
				(E = Iy ? Vy(t, n) : $y(t, n)) &&
					((a = ha(a, 'onBeforeInput')),
					0 < a.length &&
						((c = new vp('onBeforeInput', 'beforeinput', null, n, c)),
						d.push({ event: c, listeners: a }),
						(c.data = E)));
		}
		m_(d, e);
	});
}
function jl(t, e, n) {
	return { instance: t, listener: e, currentTarget: n };
}
function ha(t, e) {
	for (var n = e + 'Capture', r = []; t !== null; ) {
		var i = t,
			s = i.stateNode;
		i.tag === 5 &&
			s !== null &&
			((i = s),
			(s = Tl(t, n)),
			s != null && r.unshift(jl(t, s, i)),
			(s = Tl(t, e)),
			s != null && r.push(jl(t, s, i))),
			(t = t.return);
	}
	return r;
}
function Cs(t) {
	if (t === null) return null;
	do t = t.return;
	while (t && t.tag !== 5);
	return t || null;
}
function Mp(t, e, n, r, i) {
	for (var s = e._reactName, o = []; n !== null && n !== r; ) {
		var l = n,
			u = l.alternate,
			a = l.stateNode;
		if (u !== null && u === r) break;
		l.tag === 5 &&
			a !== null &&
			((l = a),
			i
				? ((u = Tl(n, s)), u != null && o.unshift(jl(n, u, l)))
				: i || ((u = Tl(n, s)), u != null && o.push(jl(n, u, l)))),
			(n = n.return);
	}
	o.length !== 0 && t.push({ event: e, listeners: o });
}
var ex = /\r\n?/g,
	tx = /\u0000|\uFFFD/g;
function jp(t) {
	return (typeof t == 'string' ? t : '' + t)
		.replace(
			ex,
			`
`,
		)
		.replace(tx, '');
}
function _u(t, e, n) {
	if (((e = jp(e)), jp(t) !== e && n)) throw Error(z(425));
}
function pa() {}
var Rf = null,
	Df = null;
function Af(t, e) {
	return (
		t === 'textarea' ||
		t === 'noscript' ||
		typeof e.children == 'string' ||
		typeof e.children == 'number' ||
		(typeof e.dangerouslySetInnerHTML == 'object' &&
			e.dangerouslySetInnerHTML !== null &&
			e.dangerouslySetInnerHTML.__html != null)
	);
}
var Lf = typeof setTimeout == 'function' ? setTimeout : void 0,
	nx = typeof clearTimeout == 'function' ? clearTimeout : void 0,
	Rp = typeof Promise == 'function' ? Promise : void 0,
	rx =
		typeof queueMicrotask == 'function'
			? queueMicrotask
			: typeof Rp < 'u'
				? function (t) {
						return Rp.resolve(null).then(t).catch(ix);
					}
				: Lf;
function ix(t) {
	setTimeout(function () {
		throw t;
	});
}
function Rc(t, e) {
	var n = e,
		r = 0;
	do {
		var i = n.nextSibling;
		if ((t.removeChild(n), i && i.nodeType === 8))
			if (((n = i.data), n === '/$')) {
				if (r === 0) {
					t.removeChild(i), Pl(e);
					return;
				}
				r--;
			} else (n !== '$' && n !== '$?' && n !== '$!') || r++;
		n = i;
	} while (n);
	Pl(e);
}
function xi(t) {
	for (; t != null; t = t.nextSibling) {
		var e = t.nodeType;
		if (e === 1 || e === 3) break;
		if (e === 8) {
			if (((e = t.data), e === '$' || e === '$!' || e === '$?')) break;
			if (e === '/$') return null;
		}
	}
	return t;
}
function Dp(t) {
	t = t.previousSibling;
	for (var e = 0; t; ) {
		if (t.nodeType === 8) {
			var n = t.data;
			if (n === '$' || n === '$!' || n === '$?') {
				if (e === 0) return t;
				e--;
			} else n === '/$' && e++;
		}
		t = t.previousSibling;
	}
	return null;
}
var Eo = Math.random().toString(36).slice(2),
	xr = '__reactFiber$' + Eo,
	Rl = '__reactProps$' + Eo,
	Qr = '__reactContainer$' + Eo,
	zf = '__reactEvents$' + Eo,
	sx = '__reactListeners$' + Eo,
	ox = '__reactHandles$' + Eo;
function Ki(t) {
	var e = t[xr];
	if (e) return e;
	for (var n = t.parentNode; n; ) {
		if ((e = n[Qr] || n[xr])) {
			if (
				((n = e.alternate),
				e.child !== null || (n !== null && n.child !== null))
			)
				for (t = Dp(t); t !== null; ) {
					if ((n = t[xr])) return n;
					t = Dp(t);
				}
			return e;
		}
		(t = n), (n = t.parentNode);
	}
	return null;
}
function ql(t) {
	return (
		(t = t[xr] || t[Qr]),
		!t || (t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3) ? null : t
	);
}
function Vs(t) {
	if (t.tag === 5 || t.tag === 6) return t.stateNode;
	throw Error(z(33));
}
function Ja(t) {
	return t[Rl] || null;
}
var Ff = [],
	$s = -1;
function Ai(t) {
	return { current: t };
}
function Ne(t) {
	0 > $s || ((t.current = Ff[$s]), (Ff[$s] = null), $s--);
}
function Te(t, e) {
	$s++, (Ff[$s] = t.current), (t.current = e);
}
var Oi = {},
	Bt = Ai(Oi),
	fn = Ai(!1),
	fs = Oi;
function ao(t, e) {
	var n = t.type.contextTypes;
	if (!n) return Oi;
	var r = t.stateNode;
	if (r && r.__reactInternalMemoizedUnmaskedChildContext === e)
		return r.__reactInternalMemoizedMaskedChildContext;
	var i = {},
		s;
	for (s in n) i[s] = e[s];
	return (
		r &&
			((t = t.stateNode),
			(t.__reactInternalMemoizedUnmaskedChildContext = e),
			(t.__reactInternalMemoizedMaskedChildContext = i)),
		i
	);
}
function dn(t) {
	return (t = t.childContextTypes), t != null;
}
function ma() {
	Ne(fn), Ne(Bt);
}
function Ap(t, e, n) {
	if (Bt.current !== Oi) throw Error(z(168));
	Te(Bt, e), Te(fn, n);
}
function g_(t, e, n) {
	var r = t.stateNode;
	if (((e = e.childContextTypes), typeof r.getChildContext != 'function'))
		return n;
	r = r.getChildContext();
	for (var i in r) if (!(i in e)) throw Error(z(108, b1(t) || 'Unknown', i));
	return We({}, n, r);
}
function _a(t) {
	return (
		(t =
			((t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext) || Oi),
		(fs = Bt.current),
		Te(Bt, t),
		Te(fn, fn.current),
		!0
	);
}
function Lp(t, e, n) {
	var r = t.stateNode;
	if (!r) throw Error(z(169));
	n
		? ((t = g_(t, e, fs)),
			(r.__reactInternalMemoizedMergedChildContext = t),
			Ne(fn),
			Ne(Bt),
			Te(Bt, t))
		: Ne(fn),
		Te(fn, n);
}
var Fr = null,
	ec = !1,
	Dc = !1;
function v_(t) {
	Fr === null ? (Fr = [t]) : Fr.push(t);
}
function lx(t) {
	(ec = !0), v_(t);
}
function Li() {
	if (!Dc && Fr !== null) {
		Dc = !0;
		var t = 0,
			e = xe;
		try {
			var n = Fr;
			for (xe = 1; t < n.length; t++) {
				var r = n[t];
				do r = r(!0);
				while (r !== null);
			}
			(Fr = null), (ec = !1);
		} catch (i) {
			throw (Fr !== null && (Fr = Fr.slice(t + 1)), W0(Bd, Li), i);
		} finally {
			(xe = e), (Dc = !1);
		}
	}
	return null;
}
var Us = [],
	Bs = 0,
	ga = null,
	va = 0,
	Fn = [],
	In = 0,
	ds = null,
	Ur = 1,
	Br = '';
function Hi(t, e) {
	(Us[Bs++] = va), (Us[Bs++] = ga), (ga = t), (va = e);
}
function y_(t, e, n) {
	(Fn[In++] = Ur), (Fn[In++] = Br), (Fn[In++] = ds), (ds = t);
	var r = Ur;
	t = Br;
	var i = 32 - ar(r) - 1;
	(r &= ~(1 << i)), (n += 1);
	var s = 32 - ar(e) + i;
	if (30 < s) {
		var o = i - (i % 5);
		(s = (r & ((1 << o) - 1)).toString(32)),
			(r >>= o),
			(i -= o),
			(Ur = (1 << (32 - ar(e) + i)) | (n << i) | r),
			(Br = s + t);
	} else (Ur = (1 << s) | (n << i) | r), (Br = t);
}
function qd(t) {
	t.return !== null && (Hi(t, 1), y_(t, 1, 0));
}
function Zd(t) {
	for (; t === ga; )
		(ga = Us[--Bs]), (Us[Bs] = null), (va = Us[--Bs]), (Us[Bs] = null);
	for (; t === ds; )
		(ds = Fn[--In]),
			(Fn[In] = null),
			(Br = Fn[--In]),
			(Fn[In] = null),
			(Ur = Fn[--In]),
			(Fn[In] = null);
}
var Nn = null,
	Cn = null,
	Ae = !1,
	or = null;
function x_(t, e) {
	var n = Un(5, null, null, 0);
	(n.elementType = 'DELETED'),
		(n.stateNode = e),
		(n.return = t),
		(e = t.deletions),
		e === null ? ((t.deletions = [n]), (t.flags |= 16)) : e.push(n);
}
function zp(t, e) {
	switch (t.tag) {
		case 5:
			var n = t.type;
			return (
				(e =
					e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase()
						? null
						: e),
				e !== null
					? ((t.stateNode = e), (Nn = t), (Cn = xi(e.firstChild)), !0)
					: !1
			);
		case 6:
			return (
				(e = t.pendingProps === '' || e.nodeType !== 3 ? null : e),
				e !== null ? ((t.stateNode = e), (Nn = t), (Cn = null), !0) : !1
			);
		case 13:
			return (
				(e = e.nodeType !== 8 ? null : e),
				e !== null
					? ((n = ds !== null ? { id: Ur, overflow: Br } : null),
						(t.memoizedState = {
							dehydrated: e,
							treeContext: n,
							retryLane: 1073741824,
						}),
						(n = Un(18, null, null, 0)),
						(n.stateNode = e),
						(n.return = t),
						(t.child = n),
						(Nn = t),
						(Cn = null),
						!0)
					: !1
			);
		default:
			return !1;
	}
}
function If(t) {
	return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
}
function Vf(t) {
	if (Ae) {
		var e = Cn;
		if (e) {
			var n = e;
			if (!zp(t, e)) {
				if (If(t)) throw Error(z(418));
				e = xi(n.nextSibling);
				var r = Nn;
				e && zp(t, e)
					? x_(r, n)
					: ((t.flags = (t.flags & -4097) | 2), (Ae = !1), (Nn = t));
			}
		} else {
			if (If(t)) throw Error(z(418));
			(t.flags = (t.flags & -4097) | 2), (Ae = !1), (Nn = t);
		}
	}
}
function Fp(t) {
	for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; )
		t = t.return;
	Nn = t;
}
function gu(t) {
	if (t !== Nn) return !1;
	if (!Ae) return Fp(t), (Ae = !0), !1;
	var e;
	if (
		((e = t.tag !== 3) &&
			!(e = t.tag !== 5) &&
			((e = t.type),
			(e = e !== 'head' && e !== 'body' && !Af(t.type, t.memoizedProps))),
		e && (e = Cn))
	) {
		if (If(t)) throw (w_(), Error(z(418)));
		for (; e; ) x_(t, e), (e = xi(e.nextSibling));
	}
	if ((Fp(t), t.tag === 13)) {
		if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
			throw Error(z(317));
		e: {
			for (t = t.nextSibling, e = 0; t; ) {
				if (t.nodeType === 8) {
					var n = t.data;
					if (n === '/$') {
						if (e === 0) {
							Cn = xi(t.nextSibling);
							break e;
						}
						e--;
					} else (n !== '$' && n !== '$!' && n !== '$?') || e++;
				}
				t = t.nextSibling;
			}
			Cn = null;
		}
	} else Cn = Nn ? xi(t.stateNode.nextSibling) : null;
	return !0;
}
function w_() {
	for (var t = Cn; t; ) t = xi(t.nextSibling);
}
function co() {
	(Cn = Nn = null), (Ae = !1);
}
function Jd(t) {
	or === null ? (or = [t]) : or.push(t);
}
var ux = Zr.ReactCurrentBatchConfig;
function ir(t, e) {
	if (t && t.defaultProps) {
		(e = We({}, e)), (t = t.defaultProps);
		for (var n in t) e[n] === void 0 && (e[n] = t[n]);
		return e;
	}
	return e;
}
var ya = Ai(null),
	xa = null,
	Ws = null,
	eh = null;
function th() {
	eh = Ws = xa = null;
}
function nh(t) {
	var e = ya.current;
	Ne(ya), (t._currentValue = e);
}
function $f(t, e, n) {
	for (; t !== null; ) {
		var r = t.alternate;
		if (
			((t.childLanes & e) !== e
				? ((t.childLanes |= e), r !== null && (r.childLanes |= e))
				: r !== null && (r.childLanes & e) !== e && (r.childLanes |= e),
			t === n)
		)
			break;
		t = t.return;
	}
}
function eo(t, e) {
	(xa = t),
		(eh = Ws = null),
		(t = t.dependencies),
		t !== null &&
			t.firstContext !== null &&
			(t.lanes & e && (cn = !0), (t.firstContext = null));
}
function Yn(t) {
	var e = t._currentValue;
	if (eh !== t)
		if (((t = { context: t, memoizedValue: e, next: null }), Ws === null)) {
			if (xa === null) throw Error(z(308));
			(Ws = t), (xa.dependencies = { lanes: 0, firstContext: t });
		} else Ws = Ws.next = t;
	return e;
}
var qi = null;
function rh(t) {
	qi === null ? (qi = [t]) : qi.push(t);
}
function S_(t, e, n, r) {
	var i = e.interleaved;
	return (
		i === null ? ((n.next = n), rh(e)) : ((n.next = i.next), (i.next = n)),
		(e.interleaved = n),
		Xr(t, r)
	);
}
function Xr(t, e) {
	t.lanes |= e;
	var n = t.alternate;
	for (n !== null && (n.lanes |= e), n = t, t = t.return; t !== null; )
		(t.childLanes |= e),
			(n = t.alternate),
			n !== null && (n.childLanes |= e),
			(n = t),
			(t = t.return);
	return n.tag === 3 ? n.stateNode : null;
}
var oi = !1;
function ih(t) {
	t.updateQueue = {
		baseState: t.memoizedState,
		firstBaseUpdate: null,
		lastBaseUpdate: null,
		shared: { pending: null, interleaved: null, lanes: 0 },
		effects: null,
	};
}
function k_(t, e) {
	(t = t.updateQueue),
		e.updateQueue === t &&
			(e.updateQueue = {
				baseState: t.baseState,
				firstBaseUpdate: t.firstBaseUpdate,
				lastBaseUpdate: t.lastBaseUpdate,
				shared: t.shared,
				effects: t.effects,
			});
}
function br(t, e) {
	return {
		eventTime: t,
		lane: e,
		tag: 0,
		payload: null,
		callback: null,
		next: null,
	};
}
function wi(t, e, n) {
	var r = t.updateQueue;
	if (r === null) return null;
	if (((r = r.shared), _e & 2)) {
		var i = r.pending;
		return (
			i === null ? (e.next = e) : ((e.next = i.next), (i.next = e)),
			(r.pending = e),
			Xr(t, n)
		);
	}
	return (
		(i = r.interleaved),
		i === null ? ((e.next = e), rh(r)) : ((e.next = i.next), (i.next = e)),
		(r.interleaved = e),
		Xr(t, n)
	);
}
function Wu(t, e, n) {
	if (
		((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194240) !== 0))
	) {
		var r = e.lanes;
		(r &= t.pendingLanes), (n |= r), (e.lanes = n), Wd(t, n);
	}
}
function Ip(t, e) {
	var n = t.updateQueue,
		r = t.alternate;
	if (r !== null && ((r = r.updateQueue), n === r)) {
		var i = null,
			s = null;
		if (((n = n.firstBaseUpdate), n !== null)) {
			do {
				var o = {
					eventTime: n.eventTime,
					lane: n.lane,
					tag: n.tag,
					payload: n.payload,
					callback: n.callback,
					next: null,
				};
				s === null ? (i = s = o) : (s = s.next = o), (n = n.next);
			} while (n !== null);
			s === null ? (i = s = e) : (s = s.next = e);
		} else i = s = e;
		(n = {
			baseState: r.baseState,
			firstBaseUpdate: i,
			lastBaseUpdate: s,
			shared: r.shared,
			effects: r.effects,
		}),
			(t.updateQueue = n);
		return;
	}
	(t = n.lastBaseUpdate),
		t === null ? (n.firstBaseUpdate = e) : (t.next = e),
		(n.lastBaseUpdate = e);
}
function wa(t, e, n, r) {
	var i = t.updateQueue;
	oi = !1;
	var s = i.firstBaseUpdate,
		o = i.lastBaseUpdate,
		l = i.shared.pending;
	if (l !== null) {
		i.shared.pending = null;
		var u = l,
			a = u.next;
		(u.next = null), o === null ? (s = a) : (o.next = a), (o = u);
		var c = t.alternate;
		c !== null &&
			((c = c.updateQueue),
			(l = c.lastBaseUpdate),
			l !== o &&
				(l === null ? (c.firstBaseUpdate = a) : (l.next = a),
				(c.lastBaseUpdate = u)));
	}
	if (s !== null) {
		var d = i.baseState;
		(o = 0), (c = a = u = null), (l = s);
		do {
			var f = l.lane,
				h = l.eventTime;
			if ((r & f) === f) {
				c !== null &&
					(c = c.next =
						{
							eventTime: h,
							lane: 0,
							tag: l.tag,
							payload: l.payload,
							callback: l.callback,
							next: null,
						});
				e: {
					var g = t,
						m = l;
					switch (((f = e), (h = n), m.tag)) {
						case 1:
							if (((g = m.payload), typeof g == 'function')) {
								d = g.call(h, d, f);
								break e;
							}
							d = g;
							break e;
						case 3:
							g.flags = (g.flags & -65537) | 128;
						case 0:
							if (
								((g = m.payload),
								(f = typeof g == 'function' ? g.call(h, d, f) : g),
								f == null)
							)
								break e;
							d = We({}, d, f);
							break e;
						case 2:
							oi = !0;
					}
				}
				l.callback !== null &&
					l.lane !== 0 &&
					((t.flags |= 64),
					(f = i.effects),
					f === null ? (i.effects = [l]) : f.push(l));
			} else
				(h = {
					eventTime: h,
					lane: f,
					tag: l.tag,
					payload: l.payload,
					callback: l.callback,
					next: null,
				}),
					c === null ? ((a = c = h), (u = d)) : (c = c.next = h),
					(o |= f);
			if (((l = l.next), l === null)) {
				if (((l = i.shared.pending), l === null)) break;
				(f = l),
					(l = f.next),
					(f.next = null),
					(i.lastBaseUpdate = f),
					(i.shared.pending = null);
			}
		} while (!0);
		if (
			(c === null && (u = d),
			(i.baseState = u),
			(i.firstBaseUpdate = a),
			(i.lastBaseUpdate = c),
			(e = i.shared.interleaved),
			e !== null)
		) {
			i = e;
			do (o |= i.lane), (i = i.next);
			while (i !== e);
		} else s === null && (i.shared.lanes = 0);
		(ps |= o), (t.lanes = o), (t.memoizedState = d);
	}
}
function Vp(t, e, n) {
	if (((t = e.effects), (e.effects = null), t !== null))
		for (e = 0; e < t.length; e++) {
			var r = t[e],
				i = r.callback;
			if (i !== null) {
				if (((r.callback = null), (r = n), typeof i != 'function'))
					throw Error(z(191, i));
				i.call(r);
			}
		}
}
var T_ = new S0.Component().refs;
function Uf(t, e, n, r) {
	(e = t.memoizedState),
		(n = n(r, e)),
		(n = n == null ? e : We({}, e, n)),
		(t.memoizedState = n),
		t.lanes === 0 && (t.updateQueue.baseState = n);
}
var tc = {
	isMounted: function (t) {
		return (t = t._reactInternals) ? Ss(t) === t : !1;
	},
	enqueueSetState: function (t, e, n) {
		t = t._reactInternals;
		var r = en(),
			i = ki(t),
			s = br(r, i);
		(s.payload = e),
			n != null && (s.callback = n),
			(e = wi(t, s, i)),
			e !== null && (cr(e, t, i, r), Wu(e, t, i));
	},
	enqueueReplaceState: function (t, e, n) {
		t = t._reactInternals;
		var r = en(),
			i = ki(t),
			s = br(r, i);
		(s.tag = 1),
			(s.payload = e),
			n != null && (s.callback = n),
			(e = wi(t, s, i)),
			e !== null && (cr(e, t, i, r), Wu(e, t, i));
	},
	enqueueForceUpdate: function (t, e) {
		t = t._reactInternals;
		var n = en(),
			r = ki(t),
			i = br(n, r);
		(i.tag = 2),
			e != null && (i.callback = e),
			(e = wi(t, i, r)),
			e !== null && (cr(e, t, r, n), Wu(e, t, r));
	},
};
function $p(t, e, n, r, i, s, o) {
	return (
		(t = t.stateNode),
		typeof t.shouldComponentUpdate == 'function'
			? t.shouldComponentUpdate(r, s, o)
			: e.prototype && e.prototype.isPureReactComponent
				? !Ol(n, r) || !Ol(i, s)
				: !0
	);
}
function E_(t, e, n) {
	var r = !1,
		i = Oi,
		s = e.contextType;
	return (
		typeof s == 'object' && s !== null
			? (s = Yn(s))
			: ((i = dn(e) ? fs : Bt.current),
				(r = e.contextTypes),
				(s = (r = r != null) ? ao(t, i) : Oi)),
		(e = new e(n, s)),
		(t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null),
		(e.updater = tc),
		(t.stateNode = e),
		(e._reactInternals = t),
		r &&
			((t = t.stateNode),
			(t.__reactInternalMemoizedUnmaskedChildContext = i),
			(t.__reactInternalMemoizedMaskedChildContext = s)),
		e
	);
}
function Up(t, e, n, r) {
	(t = e.state),
		typeof e.componentWillReceiveProps == 'function' &&
			e.componentWillReceiveProps(n, r),
		typeof e.UNSAFE_componentWillReceiveProps == 'function' &&
			e.UNSAFE_componentWillReceiveProps(n, r),
		e.state !== t && tc.enqueueReplaceState(e, e.state, null);
}
function Bf(t, e, n, r) {
	var i = t.stateNode;
	(i.props = n), (i.state = t.memoizedState), (i.refs = T_), ih(t);
	var s = e.contextType;
	typeof s == 'object' && s !== null
		? (i.context = Yn(s))
		: ((s = dn(e) ? fs : Bt.current), (i.context = ao(t, s))),
		(i.state = t.memoizedState),
		(s = e.getDerivedStateFromProps),
		typeof s == 'function' && (Uf(t, e, s, n), (i.state = t.memoizedState)),
		typeof e.getDerivedStateFromProps == 'function' ||
			typeof i.getSnapshotBeforeUpdate == 'function' ||
			(typeof i.UNSAFE_componentWillMount != 'function' &&
				typeof i.componentWillMount != 'function') ||
			((e = i.state),
			typeof i.componentWillMount == 'function' && i.componentWillMount(),
			typeof i.UNSAFE_componentWillMount == 'function' &&
				i.UNSAFE_componentWillMount(),
			e !== i.state && tc.enqueueReplaceState(i, i.state, null),
			wa(t, n, i, r),
			(i.state = t.memoizedState)),
		typeof i.componentDidMount == 'function' && (t.flags |= 4194308);
}
function Lo(t, e, n) {
	if (
		((t = n.ref), t !== null && typeof t != 'function' && typeof t != 'object')
	) {
		if (n._owner) {
			if (((n = n._owner), n)) {
				if (n.tag !== 1) throw Error(z(309));
				var r = n.stateNode;
			}
			if (!r) throw Error(z(147, t));
			var i = r,
				s = '' + t;
			return e !== null &&
				e.ref !== null &&
				typeof e.ref == 'function' &&
				e.ref._stringRef === s
				? e.ref
				: ((e = function (o) {
						var l = i.refs;
						l === T_ && (l = i.refs = {}),
							o === null ? delete l[s] : (l[s] = o);
					}),
					(e._stringRef = s),
					e);
		}
		if (typeof t != 'string') throw Error(z(284));
		if (!n._owner) throw Error(z(290, t));
	}
	return t;
}
function vu(t, e) {
	throw (
		((t = Object.prototype.toString.call(e)),
		Error(
			z(
				31,
				t === '[object Object]'
					? 'object with keys {' + Object.keys(e).join(', ') + '}'
					: t,
			),
		))
	);
}
function Bp(t) {
	var e = t._init;
	return e(t._payload);
}
function C_(t) {
	function e(_, p) {
		if (t) {
			var y = _.deletions;
			y === null ? ((_.deletions = [p]), (_.flags |= 16)) : y.push(p);
		}
	}
	function n(_, p) {
		if (!t) return null;
		for (; p !== null; ) e(_, p), (p = p.sibling);
		return null;
	}
	function r(_, p) {
		for (_ = new Map(); p !== null; )
			p.key !== null ? _.set(p.key, p) : _.set(p.index, p), (p = p.sibling);
		return _;
	}
	function i(_, p) {
		return (_ = Ti(_, p)), (_.index = 0), (_.sibling = null), _;
	}
	function s(_, p, y) {
		return (
			(_.index = y),
			t
				? ((y = _.alternate),
					y !== null
						? ((y = y.index), y < p ? ((_.flags |= 2), p) : y)
						: ((_.flags |= 2), p))
				: ((_.flags |= 1048576), p)
		);
	}
	function o(_) {
		return t && _.alternate === null && (_.flags |= 2), _;
	}
	function l(_, p, y, x) {
		return p === null || p.tag !== 6
			? ((p = $c(y, _.mode, x)), (p.return = _), p)
			: ((p = i(p, y)), (p.return = _), p);
	}
	function u(_, p, y, x) {
		var k = y.type;
		return k === Ls
			? c(_, p, y.props.children, x, y.key)
			: p !== null &&
				  (p.elementType === k ||
						(typeof k == 'object' &&
							k !== null &&
							k.$$typeof === si &&
							Bp(k) === p.type))
				? ((x = i(p, y.props)), (x.ref = Lo(_, p, y)), (x.return = _), x)
				: ((x = Gu(y.type, y.key, y.props, null, _.mode, x)),
					(x.ref = Lo(_, p, y)),
					(x.return = _),
					x);
	}
	function a(_, p, y, x) {
		return p === null ||
			p.tag !== 4 ||
			p.stateNode.containerInfo !== y.containerInfo ||
			p.stateNode.implementation !== y.implementation
			? ((p = Uc(y, _.mode, x)), (p.return = _), p)
			: ((p = i(p, y.children || [])), (p.return = _), p);
	}
	function c(_, p, y, x, k) {
		return p === null || p.tag !== 7
			? ((p = rs(y, _.mode, x, k)), (p.return = _), p)
			: ((p = i(p, y)), (p.return = _), p);
	}
	function d(_, p, y) {
		if ((typeof p == 'string' && p !== '') || typeof p == 'number')
			return (p = $c('' + p, _.mode, y)), (p.return = _), p;
		if (typeof p == 'object' && p !== null) {
			switch (p.$$typeof) {
				case lu:
					return (
						(y = Gu(p.type, p.key, p.props, null, _.mode, y)),
						(y.ref = Lo(_, null, p)),
						(y.return = _),
						y
					);
				case As:
					return (p = Uc(p, _.mode, y)), (p.return = _), p;
				case si:
					var x = p._init;
					return d(_, x(p._payload), y);
			}
			if (bo(p) || Mo(p))
				return (p = rs(p, _.mode, y, null)), (p.return = _), p;
			vu(_, p);
		}
		return null;
	}
	function f(_, p, y, x) {
		var k = p !== null ? p.key : null;
		if ((typeof y == 'string' && y !== '') || typeof y == 'number')
			return k !== null ? null : l(_, p, '' + y, x);
		if (typeof y == 'object' && y !== null) {
			switch (y.$$typeof) {
				case lu:
					return y.key === k ? u(_, p, y, x) : null;
				case As:
					return y.key === k ? a(_, p, y, x) : null;
				case si:
					return (k = y._init), f(_, p, k(y._payload), x);
			}
			if (bo(y) || Mo(y)) return k !== null ? null : c(_, p, y, x, null);
			vu(_, y);
		}
		return null;
	}
	function h(_, p, y, x, k) {
		if ((typeof x == 'string' && x !== '') || typeof x == 'number')
			return (_ = _.get(y) || null), l(p, _, '' + x, k);
		if (typeof x == 'object' && x !== null) {
			switch (x.$$typeof) {
				case lu:
					return (_ = _.get(x.key === null ? y : x.key) || null), u(p, _, x, k);
				case As:
					return (_ = _.get(x.key === null ? y : x.key) || null), a(p, _, x, k);
				case si:
					var C = x._init;
					return h(_, p, y, C(x._payload), k);
			}
			if (bo(x) || Mo(x)) return (_ = _.get(y) || null), c(p, _, x, k, null);
			vu(p, x);
		}
		return null;
	}
	function g(_, p, y, x) {
		for (
			var k = null, C = null, E = p, N = (p = 0), j = null;
			E !== null && N < y.length;
			N++
		) {
			E.index > N ? ((j = E), (E = null)) : (j = E.sibling);
			var M = f(_, E, y[N], x);
			if (M === null) {
				E === null && (E = j);
				break;
			}
			t && E && M.alternate === null && e(_, E),
				(p = s(M, p, N)),
				C === null ? (k = M) : (C.sibling = M),
				(C = M),
				(E = j);
		}
		if (N === y.length) return n(_, E), Ae && Hi(_, N), k;
		if (E === null) {
			for (; N < y.length; N++)
				(E = d(_, y[N], x)),
					E !== null &&
						((p = s(E, p, N)), C === null ? (k = E) : (C.sibling = E), (C = E));
			return Ae && Hi(_, N), k;
		}
		for (E = r(_, E); N < y.length; N++)
			(j = h(E, _, N, y[N], x)),
				j !== null &&
					(t && j.alternate !== null && E.delete(j.key === null ? N : j.key),
					(p = s(j, p, N)),
					C === null ? (k = j) : (C.sibling = j),
					(C = j));
		return (
			t &&
				E.forEach(function (H) {
					return e(_, H);
				}),
			Ae && Hi(_, N),
			k
		);
	}
	function m(_, p, y, x) {
		var k = Mo(y);
		if (typeof k != 'function') throw Error(z(150));
		if (((y = k.call(y)), y == null)) throw Error(z(151));
		for (
			var C = (k = null), E = p, N = (p = 0), j = null, M = y.next();
			E !== null && !M.done;
			N++, M = y.next()
		) {
			E.index > N ? ((j = E), (E = null)) : (j = E.sibling);
			var H = f(_, E, M.value, x);
			if (H === null) {
				E === null && (E = j);
				break;
			}
			t && E && H.alternate === null && e(_, E),
				(p = s(H, p, N)),
				C === null ? (k = H) : (C.sibling = H),
				(C = H),
				(E = j);
		}
		if (M.done) return n(_, E), Ae && Hi(_, N), k;
		if (E === null) {
			for (; !M.done; N++, M = y.next())
				(M = d(_, M.value, x)),
					M !== null &&
						((p = s(M, p, N)), C === null ? (k = M) : (C.sibling = M), (C = M));
			return Ae && Hi(_, N), k;
		}
		for (E = r(_, E); !M.done; N++, M = y.next())
			(M = h(E, _, N, M.value, x)),
				M !== null &&
					(t && M.alternate !== null && E.delete(M.key === null ? N : M.key),
					(p = s(M, p, N)),
					C === null ? (k = M) : (C.sibling = M),
					(C = M));
		return (
			t &&
				E.forEach(function (D) {
					return e(_, D);
				}),
			Ae && Hi(_, N),
			k
		);
	}
	function T(_, p, y, x) {
		if (
			(typeof y == 'object' &&
				y !== null &&
				y.type === Ls &&
				y.key === null &&
				(y = y.props.children),
			typeof y == 'object' && y !== null)
		) {
			switch (y.$$typeof) {
				case lu:
					e: {
						for (var k = y.key, C = p; C !== null; ) {
							if (C.key === k) {
								if (((k = y.type), k === Ls)) {
									if (C.tag === 7) {
										n(_, C.sibling),
											(p = i(C, y.props.children)),
											(p.return = _),
											(_ = p);
										break e;
									}
								} else if (
									C.elementType === k ||
									(typeof k == 'object' &&
										k !== null &&
										k.$$typeof === si &&
										Bp(k) === C.type)
								) {
									n(_, C.sibling),
										(p = i(C, y.props)),
										(p.ref = Lo(_, C, y)),
										(p.return = _),
										(_ = p);
									break e;
								}
								n(_, C);
								break;
							} else e(_, C);
							C = C.sibling;
						}
						y.type === Ls
							? ((p = rs(y.props.children, _.mode, x, y.key)),
								(p.return = _),
								(_ = p))
							: ((x = Gu(y.type, y.key, y.props, null, _.mode, x)),
								(x.ref = Lo(_, p, y)),
								(x.return = _),
								(_ = x));
					}
					return o(_);
				case As:
					e: {
						for (C = y.key; p !== null; ) {
							if (p.key === C)
								if (
									p.tag === 4 &&
									p.stateNode.containerInfo === y.containerInfo &&
									p.stateNode.implementation === y.implementation
								) {
									n(_, p.sibling),
										(p = i(p, y.children || [])),
										(p.return = _),
										(_ = p);
									break e;
								} else {
									n(_, p);
									break;
								}
							else e(_, p);
							p = p.sibling;
						}
						(p = Uc(y, _.mode, x)), (p.return = _), (_ = p);
					}
					return o(_);
				case si:
					return (C = y._init), T(_, p, C(y._payload), x);
			}
			if (bo(y)) return g(_, p, y, x);
			if (Mo(y)) return m(_, p, y, x);
			vu(_, y);
		}
		return (typeof y == 'string' && y !== '') || typeof y == 'number'
			? ((y = '' + y),
				p !== null && p.tag === 6
					? (n(_, p.sibling), (p = i(p, y)), (p.return = _), (_ = p))
					: (n(_, p), (p = $c(y, _.mode, x)), (p.return = _), (_ = p)),
				o(_))
			: n(_, p);
	}
	return T;
}
var fo = C_(!0),
	P_ = C_(!1),
	Zl = {},
	Cr = Ai(Zl),
	Dl = Ai(Zl),
	Al = Ai(Zl);
function Zi(t) {
	if (t === Zl) throw Error(z(174));
	return t;
}
function sh(t, e) {
	switch ((Te(Al, e), Te(Dl, t), Te(Cr, Zl), (t = e.nodeType), t)) {
		case 9:
		case 11:
			e = (e = e.documentElement) ? e.namespaceURI : xf(null, '');
			break;
		default:
			(t = t === 8 ? e.parentNode : e),
				(e = t.namespaceURI || null),
				(t = t.tagName),
				(e = xf(e, t));
	}
	Ne(Cr), Te(Cr, e);
}
function ho() {
	Ne(Cr), Ne(Dl), Ne(Al);
}
function N_(t) {
	Zi(Al.current);
	var e = Zi(Cr.current),
		n = xf(e, t.type);
	e !== n && (Te(Dl, t), Te(Cr, n));
}
function oh(t) {
	Dl.current === t && (Ne(Cr), Ne(Dl));
}
var Ve = Ai(0);
function Sa(t) {
	for (var e = t; e !== null; ) {
		if (e.tag === 13) {
			var n = e.memoizedState;
			if (
				n !== null &&
				((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
			)
				return e;
		} else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
			if (e.flags & 128) return e;
		} else if (e.child !== null) {
			(e.child.return = e), (e = e.child);
			continue;
		}
		if (e === t) break;
		for (; e.sibling === null; ) {
			if (e.return === null || e.return === t) return null;
			e = e.return;
		}
		(e.sibling.return = e.return), (e = e.sibling);
	}
	return null;
}
var Ac = [];
function lh() {
	for (var t = 0; t < Ac.length; t++)
		Ac[t]._workInProgressVersionPrimary = null;
	Ac.length = 0;
}
var bu = Zr.ReactCurrentDispatcher,
	Lc = Zr.ReactCurrentBatchConfig,
	hs = 0,
	Be = null,
	at = null,
	gt = null,
	ka = !1,
	sl = !1,
	Ll = 0,
	ax = 0;
function At() {
	throw Error(z(321));
}
function uh(t, e) {
	if (e === null) return !1;
	for (var n = 0; n < e.length && n < t.length; n++)
		if (!fr(t[n], e[n])) return !1;
	return !0;
}
function ah(t, e, n, r, i, s) {
	if (
		((hs = s),
		(Be = e),
		(e.memoizedState = null),
		(e.updateQueue = null),
		(e.lanes = 0),
		(bu.current = t === null || t.memoizedState === null ? hx : px),
		(t = n(r, i)),
		sl)
	) {
		s = 0;
		do {
			if (((sl = !1), (Ll = 0), 25 <= s)) throw Error(z(301));
			(s += 1),
				(gt = at = null),
				(e.updateQueue = null),
				(bu.current = mx),
				(t = n(r, i));
		} while (sl);
	}
	if (
		((bu.current = Ta),
		(e = at !== null && at.next !== null),
		(hs = 0),
		(gt = at = Be = null),
		(ka = !1),
		e)
	)
		throw Error(z(300));
	return t;
}
function ch() {
	var t = Ll !== 0;
	return (Ll = 0), t;
}
function gr() {
	var t = {
		memoizedState: null,
		baseState: null,
		baseQueue: null,
		queue: null,
		next: null,
	};
	return gt === null ? (Be.memoizedState = gt = t) : (gt = gt.next = t), gt;
}
function Qn() {
	if (at === null) {
		var t = Be.alternate;
		t = t !== null ? t.memoizedState : null;
	} else t = at.next;
	var e = gt === null ? Be.memoizedState : gt.next;
	if (e !== null) (gt = e), (at = t);
	else {
		if (t === null) throw Error(z(310));
		(at = t),
			(t = {
				memoizedState: at.memoizedState,
				baseState: at.baseState,
				baseQueue: at.baseQueue,
				queue: at.queue,
				next: null,
			}),
			gt === null ? (Be.memoizedState = gt = t) : (gt = gt.next = t);
	}
	return gt;
}
function zl(t, e) {
	return typeof e == 'function' ? e(t) : e;
}
function zc(t) {
	var e = Qn(),
		n = e.queue;
	if (n === null) throw Error(z(311));
	n.lastRenderedReducer = t;
	var r = at,
		i = r.baseQueue,
		s = n.pending;
	if (s !== null) {
		if (i !== null) {
			var o = i.next;
			(i.next = s.next), (s.next = o);
		}
		(r.baseQueue = i = s), (n.pending = null);
	}
	if (i !== null) {
		(s = i.next), (r = r.baseState);
		var l = (o = null),
			u = null,
			a = s;
		do {
			var c = a.lane;
			if ((hs & c) === c)
				u !== null &&
					(u = u.next =
						{
							lane: 0,
							action: a.action,
							hasEagerState: a.hasEagerState,
							eagerState: a.eagerState,
							next: null,
						}),
					(r = a.hasEagerState ? a.eagerState : t(r, a.action));
			else {
				var d = {
					lane: c,
					action: a.action,
					hasEagerState: a.hasEagerState,
					eagerState: a.eagerState,
					next: null,
				};
				u === null ? ((l = u = d), (o = r)) : (u = u.next = d),
					(Be.lanes |= c),
					(ps |= c);
			}
			a = a.next;
		} while (a !== null && a !== s);
		u === null ? (o = r) : (u.next = l),
			fr(r, e.memoizedState) || (cn = !0),
			(e.memoizedState = r),
			(e.baseState = o),
			(e.baseQueue = u),
			(n.lastRenderedState = r);
	}
	if (((t = n.interleaved), t !== null)) {
		i = t;
		do (s = i.lane), (Be.lanes |= s), (ps |= s), (i = i.next);
		while (i !== t);
	} else i === null && (n.lanes = 0);
	return [e.memoizedState, n.dispatch];
}
function Fc(t) {
	var e = Qn(),
		n = e.queue;
	if (n === null) throw Error(z(311));
	n.lastRenderedReducer = t;
	var r = n.dispatch,
		i = n.pending,
		s = e.memoizedState;
	if (i !== null) {
		n.pending = null;
		var o = (i = i.next);
		do (s = t(s, o.action)), (o = o.next);
		while (o !== i);
		fr(s, e.memoizedState) || (cn = !0),
			(e.memoizedState = s),
			e.baseQueue === null && (e.baseState = s),
			(n.lastRenderedState = s);
	}
	return [s, r];
}
function O_() {}
function M_(t, e) {
	var n = Be,
		r = Qn(),
		i = e(),
		s = !fr(r.memoizedState, i);
	if (
		(s && ((r.memoizedState = i), (cn = !0)),
		(r = r.queue),
		fh(D_.bind(null, n, r, t), [t]),
		r.getSnapshot !== e || s || (gt !== null && gt.memoizedState.tag & 1))
	) {
		if (
			((n.flags |= 2048),
			Fl(9, R_.bind(null, n, r, i, e), void 0, null),
			yt === null)
		)
			throw Error(z(349));
		hs & 30 || j_(n, e, i);
	}
	return i;
}
function j_(t, e, n) {
	(t.flags |= 16384),
		(t = { getSnapshot: e, value: n }),
		(e = Be.updateQueue),
		e === null
			? ((e = { lastEffect: null, stores: null }),
				(Be.updateQueue = e),
				(e.stores = [t]))
			: ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t));
}
function R_(t, e, n, r) {
	(e.value = n), (e.getSnapshot = r), A_(e) && L_(t);
}
function D_(t, e, n) {
	return n(function () {
		A_(e) && L_(t);
	});
}
function A_(t) {
	var e = t.getSnapshot;
	t = t.value;
	try {
		var n = e();
		return !fr(t, n);
	} catch {
		return !0;
	}
}
function L_(t) {
	var e = Xr(t, 1);
	e !== null && cr(e, t, 1, -1);
}
function Wp(t) {
	var e = gr();
	return (
		typeof t == 'function' && (t = t()),
		(e.memoizedState = e.baseState = t),
		(t = {
			pending: null,
			interleaved: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: zl,
			lastRenderedState: t,
		}),
		(e.queue = t),
		(t = t.dispatch = dx.bind(null, Be, t)),
		[e.memoizedState, t]
	);
}
function Fl(t, e, n, r) {
	return (
		(t = { tag: t, create: e, destroy: n, deps: r, next: null }),
		(e = Be.updateQueue),
		e === null
			? ((e = { lastEffect: null, stores: null }),
				(Be.updateQueue = e),
				(e.lastEffect = t.next = t))
			: ((n = e.lastEffect),
				n === null
					? (e.lastEffect = t.next = t)
					: ((r = n.next), (n.next = t), (t.next = r), (e.lastEffect = t))),
		t
	);
}
function z_() {
	return Qn().memoizedState;
}
function Hu(t, e, n, r) {
	var i = gr();
	(Be.flags |= t),
		(i.memoizedState = Fl(1 | e, n, void 0, r === void 0 ? null : r));
}
function nc(t, e, n, r) {
	var i = Qn();
	r = r === void 0 ? null : r;
	var s = void 0;
	if (at !== null) {
		var o = at.memoizedState;
		if (((s = o.destroy), r !== null && uh(r, o.deps))) {
			i.memoizedState = Fl(e, n, s, r);
			return;
		}
	}
	(Be.flags |= t), (i.memoizedState = Fl(1 | e, n, s, r));
}
function bp(t, e) {
	return Hu(8390656, 8, t, e);
}
function fh(t, e) {
	return nc(2048, 8, t, e);
}
function F_(t, e) {
	return nc(4, 2, t, e);
}
function I_(t, e) {
	return nc(4, 4, t, e);
}
function V_(t, e) {
	if (typeof e == 'function')
		return (
			(t = t()),
			e(t),
			function () {
				e(null);
			}
		);
	if (e != null)
		return (
			(t = t()),
			(e.current = t),
			function () {
				e.current = null;
			}
		);
}
function $_(t, e, n) {
	return (
		(n = n != null ? n.concat([t]) : null), nc(4, 4, V_.bind(null, e, t), n)
	);
}
function dh() {}
function U_(t, e) {
	var n = Qn();
	e = e === void 0 ? null : e;
	var r = n.memoizedState;
	return r !== null && e !== null && uh(e, r[1])
		? r[0]
		: ((n.memoizedState = [t, e]), t);
}
function B_(t, e) {
	var n = Qn();
	e = e === void 0 ? null : e;
	var r = n.memoizedState;
	return r !== null && e !== null && uh(e, r[1])
		? r[0]
		: ((t = t()), (n.memoizedState = [t, e]), t);
}
function W_(t, e, n) {
	return hs & 21
		? (fr(n, e) || ((n = Y0()), (Be.lanes |= n), (ps |= n), (t.baseState = !0)),
			e)
		: (t.baseState && ((t.baseState = !1), (cn = !0)), (t.memoizedState = n));
}
function cx(t, e) {
	var n = xe;
	(xe = n !== 0 && 4 > n ? n : 4), t(!0);
	var r = Lc.transition;
	Lc.transition = {};
	try {
		t(!1), e();
	} finally {
		(xe = n), (Lc.transition = r);
	}
}
function b_() {
	return Qn().memoizedState;
}
function fx(t, e, n) {
	var r = ki(t);
	if (
		((n = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		}),
		H_(t))
	)
		Y_(e, n);
	else if (((n = S_(t, e, n, r)), n !== null)) {
		var i = en();
		cr(n, t, r, i), Q_(n, e, r);
	}
}
function dx(t, e, n) {
	var r = ki(t),
		i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
	if (H_(t)) Y_(e, i);
	else {
		var s = t.alternate;
		if (
			t.lanes === 0 &&
			(s === null || s.lanes === 0) &&
			((s = e.lastRenderedReducer), s !== null)
		)
			try {
				var o = e.lastRenderedState,
					l = s(o, n);
				if (((i.hasEagerState = !0), (i.eagerState = l), fr(l, o))) {
					var u = e.interleaved;
					u === null
						? ((i.next = i), rh(e))
						: ((i.next = u.next), (u.next = i)),
						(e.interleaved = i);
					return;
				}
			} catch {
			} finally {
			}
		(n = S_(t, e, i, r)),
			n !== null && ((i = en()), cr(n, t, r, i), Q_(n, e, r));
	}
}
function H_(t) {
	var e = t.alternate;
	return t === Be || (e !== null && e === Be);
}
function Y_(t, e) {
	sl = ka = !0;
	var n = t.pending;
	n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
		(t.pending = e);
}
function Q_(t, e, n) {
	if (n & 4194240) {
		var r = e.lanes;
		(r &= t.pendingLanes), (n |= r), (e.lanes = n), Wd(t, n);
	}
}
var Ta = {
		readContext: Yn,
		useCallback: At,
		useContext: At,
		useEffect: At,
		useImperativeHandle: At,
		useInsertionEffect: At,
		useLayoutEffect: At,
		useMemo: At,
		useReducer: At,
		useRef: At,
		useState: At,
		useDebugValue: At,
		useDeferredValue: At,
		useTransition: At,
		useMutableSource: At,
		useSyncExternalStore: At,
		useId: At,
		unstable_isNewReconciler: !1,
	},
	hx = {
		readContext: Yn,
		useCallback: function (t, e) {
			return (gr().memoizedState = [t, e === void 0 ? null : e]), t;
		},
		useContext: Yn,
		useEffect: bp,
		useImperativeHandle: function (t, e, n) {
			return (
				(n = n != null ? n.concat([t]) : null),
				Hu(4194308, 4, V_.bind(null, e, t), n)
			);
		},
		useLayoutEffect: function (t, e) {
			return Hu(4194308, 4, t, e);
		},
		useInsertionEffect: function (t, e) {
			return Hu(4, 2, t, e);
		},
		useMemo: function (t, e) {
			var n = gr();
			return (
				(e = e === void 0 ? null : e), (t = t()), (n.memoizedState = [t, e]), t
			);
		},
		useReducer: function (t, e, n) {
			var r = gr();
			return (
				(e = n !== void 0 ? n(e) : e),
				(r.memoizedState = r.baseState = e),
				(t = {
					pending: null,
					interleaved: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: t,
					lastRenderedState: e,
				}),
				(r.queue = t),
				(t = t.dispatch = fx.bind(null, Be, t)),
				[r.memoizedState, t]
			);
		},
		useRef: function (t) {
			var e = gr();
			return (t = { current: t }), (e.memoizedState = t);
		},
		useState: Wp,
		useDebugValue: dh,
		useDeferredValue: function (t) {
			return (gr().memoizedState = t);
		},
		useTransition: function () {
			var t = Wp(!1),
				e = t[0];
			return (t = cx.bind(null, t[1])), (gr().memoizedState = t), [e, t];
		},
		useMutableSource: function () {},
		useSyncExternalStore: function (t, e, n) {
			var r = Be,
				i = gr();
			if (Ae) {
				if (n === void 0) throw Error(z(407));
				n = n();
			} else {
				if (((n = e()), yt === null)) throw Error(z(349));
				hs & 30 || j_(r, e, n);
			}
			i.memoizedState = n;
			var s = { value: n, getSnapshot: e };
			return (
				(i.queue = s),
				bp(D_.bind(null, r, s, t), [t]),
				(r.flags |= 2048),
				Fl(9, R_.bind(null, r, s, n, e), void 0, null),
				n
			);
		},
		useId: function () {
			var t = gr(),
				e = yt.identifierPrefix;
			if (Ae) {
				var n = Br,
					r = Ur;
				(n = (r & ~(1 << (32 - ar(r) - 1))).toString(32) + n),
					(e = ':' + e + 'R' + n),
					(n = Ll++),
					0 < n && (e += 'H' + n.toString(32)),
					(e += ':');
			} else (n = ax++), (e = ':' + e + 'r' + n.toString(32) + ':');
			return (t.memoizedState = e);
		},
		unstable_isNewReconciler: !1,
	},
	px = {
		readContext: Yn,
		useCallback: U_,
		useContext: Yn,
		useEffect: fh,
		useImperativeHandle: $_,
		useInsertionEffect: F_,
		useLayoutEffect: I_,
		useMemo: B_,
		useReducer: zc,
		useRef: z_,
		useState: function () {
			return zc(zl);
		},
		useDebugValue: dh,
		useDeferredValue: function (t) {
			var e = Qn();
			return W_(e, at.memoizedState, t);
		},
		useTransition: function () {
			var t = zc(zl)[0],
				e = Qn().memoizedState;
			return [t, e];
		},
		useMutableSource: O_,
		useSyncExternalStore: M_,
		useId: b_,
		unstable_isNewReconciler: !1,
	},
	mx = {
		readContext: Yn,
		useCallback: U_,
		useContext: Yn,
		useEffect: fh,
		useImperativeHandle: $_,
		useInsertionEffect: F_,
		useLayoutEffect: I_,
		useMemo: B_,
		useReducer: Fc,
		useRef: z_,
		useState: function () {
			return Fc(zl);
		},
		useDebugValue: dh,
		useDeferredValue: function (t) {
			var e = Qn();
			return at === null ? (e.memoizedState = t) : W_(e, at.memoizedState, t);
		},
		useTransition: function () {
			var t = Fc(zl)[0],
				e = Qn().memoizedState;
			return [t, e];
		},
		useMutableSource: O_,
		useSyncExternalStore: M_,
		useId: b_,
		unstable_isNewReconciler: !1,
	};
function po(t, e) {
	try {
		var n = '',
			r = e;
		do (n += W1(r)), (r = r.return);
		while (r);
		var i = n;
	} catch (s) {
		i =
			`
Error generating stack: ` +
			s.message +
			`
` +
			s.stack;
	}
	return { value: t, source: e, stack: i, digest: null };
}
function Ic(t, e, n) {
	return { value: t, source: null, stack: n ?? null, digest: e ?? null };
}
function Wf(t, e) {
	try {
		console.error(e.value);
	} catch (n) {
		setTimeout(function () {
			throw n;
		});
	}
}
var _x = typeof WeakMap == 'function' ? WeakMap : Map;
function X_(t, e, n) {
	(n = br(-1, n)), (n.tag = 3), (n.payload = { element: null });
	var r = e.value;
	return (
		(n.callback = function () {
			Ca || ((Ca = !0), (Jf = r)), Wf(t, e);
		}),
		n
	);
}
function G_(t, e, n) {
	(n = br(-1, n)), (n.tag = 3);
	var r = t.type.getDerivedStateFromError;
	if (typeof r == 'function') {
		var i = e.value;
		(n.payload = function () {
			return r(i);
		}),
			(n.callback = function () {
				Wf(t, e);
			});
	}
	var s = t.stateNode;
	return (
		s !== null &&
			typeof s.componentDidCatch == 'function' &&
			(n.callback = function () {
				Wf(t, e),
					typeof r != 'function' &&
						(Si === null ? (Si = new Set([this])) : Si.add(this));
				var o = e.stack;
				this.componentDidCatch(e.value, {
					componentStack: o !== null ? o : '',
				});
			}),
		n
	);
}
function Hp(t, e, n) {
	var r = t.pingCache;
	if (r === null) {
		r = t.pingCache = new _x();
		var i = new Set();
		r.set(e, i);
	} else (i = r.get(e)), i === void 0 && ((i = new Set()), r.set(e, i));
	i.has(n) || (i.add(n), (t = Mx.bind(null, t, e, n)), e.then(t, t));
}
function Yp(t) {
	do {
		var e;
		if (
			((e = t.tag === 13) &&
				((e = t.memoizedState), (e = e !== null ? e.dehydrated !== null : !0)),
			e)
		)
			return t;
		t = t.return;
	} while (t !== null);
	return null;
}
function Qp(t, e, n, r, i) {
	return t.mode & 1
		? ((t.flags |= 65536), (t.lanes = i), t)
		: (t === e
				? (t.flags |= 65536)
				: ((t.flags |= 128),
					(n.flags |= 131072),
					(n.flags &= -52805),
					n.tag === 1 &&
						(n.alternate === null
							? (n.tag = 17)
							: ((e = br(-1, 1)), (e.tag = 2), wi(n, e, 1))),
					(n.lanes |= 1)),
			t);
}
var gx = Zr.ReactCurrentOwner,
	cn = !1;
function Yt(t, e, n, r) {
	e.child = t === null ? P_(e, null, n, r) : fo(e, t.child, n, r);
}
function Xp(t, e, n, r, i) {
	n = n.render;
	var s = e.ref;
	return (
		eo(e, i),
		(r = ah(t, e, n, r, s, i)),
		(n = ch()),
		t !== null && !cn
			? ((e.updateQueue = t.updateQueue),
				(e.flags &= -2053),
				(t.lanes &= ~i),
				Gr(t, e, i))
			: (Ae && n && qd(e), (e.flags |= 1), Yt(t, e, r, i), e.child)
	);
}
function Gp(t, e, n, r, i) {
	if (t === null) {
		var s = n.type;
		return typeof s == 'function' &&
			!xh(s) &&
			s.defaultProps === void 0 &&
			n.compare === null &&
			n.defaultProps === void 0
			? ((e.tag = 15), (e.type = s), K_(t, e, s, r, i))
			: ((t = Gu(n.type, null, r, e, e.mode, i)),
				(t.ref = e.ref),
				(t.return = e),
				(e.child = t));
	}
	if (((s = t.child), !(t.lanes & i))) {
		var o = s.memoizedProps;
		if (
			((n = n.compare), (n = n !== null ? n : Ol), n(o, r) && t.ref === e.ref)
		)
			return Gr(t, e, i);
	}
	return (
		(e.flags |= 1),
		(t = Ti(s, r)),
		(t.ref = e.ref),
		(t.return = e),
		(e.child = t)
	);
}
function K_(t, e, n, r, i) {
	if (t !== null) {
		var s = t.memoizedProps;
		if (Ol(s, r) && t.ref === e.ref)
			if (((cn = !1), (e.pendingProps = r = s), (t.lanes & i) !== 0))
				t.flags & 131072 && (cn = !0);
			else return (e.lanes = t.lanes), Gr(t, e, i);
	}
	return bf(t, e, n, r, i);
}
function q_(t, e, n) {
	var r = e.pendingProps,
		i = r.children,
		s = t !== null ? t.memoizedState : null;
	if (r.mode === 'hidden')
		if (!(e.mode & 1))
			(e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				Te(Hs, wn),
				(wn |= n);
		else {
			if (!(n & 1073741824))
				return (
					(t = s !== null ? s.baseLanes | n : n),
					(e.lanes = e.childLanes = 1073741824),
					(e.memoizedState = {
						baseLanes: t,
						cachePool: null,
						transitions: null,
					}),
					(e.updateQueue = null),
					Te(Hs, wn),
					(wn |= t),
					null
				);
			(e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				(r = s !== null ? s.baseLanes : n),
				Te(Hs, wn),
				(wn |= r);
		}
	else
		s !== null ? ((r = s.baseLanes | n), (e.memoizedState = null)) : (r = n),
			Te(Hs, wn),
			(wn |= r);
	return Yt(t, e, i, n), e.child;
}
function Z_(t, e) {
	var n = e.ref;
	((t === null && n !== null) || (t !== null && t.ref !== n)) &&
		((e.flags |= 512), (e.flags |= 2097152));
}
function bf(t, e, n, r, i) {
	var s = dn(n) ? fs : Bt.current;
	return (
		(s = ao(e, s)),
		eo(e, i),
		(n = ah(t, e, n, r, s, i)),
		(r = ch()),
		t !== null && !cn
			? ((e.updateQueue = t.updateQueue),
				(e.flags &= -2053),
				(t.lanes &= ~i),
				Gr(t, e, i))
			: (Ae && r && qd(e), (e.flags |= 1), Yt(t, e, n, i), e.child)
	);
}
function Kp(t, e, n, r, i) {
	if (dn(n)) {
		var s = !0;
		_a(e);
	} else s = !1;
	if ((eo(e, i), e.stateNode === null))
		Yu(t, e), E_(e, n, r), Bf(e, n, r, i), (r = !0);
	else if (t === null) {
		var o = e.stateNode,
			l = e.memoizedProps;
		o.props = l;
		var u = o.context,
			a = n.contextType;
		typeof a == 'object' && a !== null
			? (a = Yn(a))
			: ((a = dn(n) ? fs : Bt.current), (a = ao(e, a)));
		var c = n.getDerivedStateFromProps,
			d =
				typeof c == 'function' ||
				typeof o.getSnapshotBeforeUpdate == 'function';
		d ||
			(typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
				typeof o.componentWillReceiveProps != 'function') ||
			((l !== r || u !== a) && Up(e, o, r, a)),
			(oi = !1);
		var f = e.memoizedState;
		(o.state = f),
			wa(e, r, o, i),
			(u = e.memoizedState),
			l !== r || f !== u || fn.current || oi
				? (typeof c == 'function' && (Uf(e, n, c, r), (u = e.memoizedState)),
					(l = oi || $p(e, n, l, r, f, u, a))
						? (d ||
								(typeof o.UNSAFE_componentWillMount != 'function' &&
									typeof o.componentWillMount != 'function') ||
								(typeof o.componentWillMount == 'function' &&
									o.componentWillMount(),
								typeof o.UNSAFE_componentWillMount == 'function' &&
									o.UNSAFE_componentWillMount()),
							typeof o.componentDidMount == 'function' && (e.flags |= 4194308))
						: (typeof o.componentDidMount == 'function' && (e.flags |= 4194308),
							(e.memoizedProps = r),
							(e.memoizedState = u)),
					(o.props = r),
					(o.state = u),
					(o.context = a),
					(r = l))
				: (typeof o.componentDidMount == 'function' && (e.flags |= 4194308),
					(r = !1));
	} else {
		(o = e.stateNode),
			k_(t, e),
			(l = e.memoizedProps),
			(a = e.type === e.elementType ? l : ir(e.type, l)),
			(o.props = a),
			(d = e.pendingProps),
			(f = o.context),
			(u = n.contextType),
			typeof u == 'object' && u !== null
				? (u = Yn(u))
				: ((u = dn(n) ? fs : Bt.current), (u = ao(e, u)));
		var h = n.getDerivedStateFromProps;
		(c =
			typeof h == 'function' ||
			typeof o.getSnapshotBeforeUpdate == 'function') ||
			(typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
				typeof o.componentWillReceiveProps != 'function') ||
			((l !== d || f !== u) && Up(e, o, r, u)),
			(oi = !1),
			(f = e.memoizedState),
			(o.state = f),
			wa(e, r, o, i);
		var g = e.memoizedState;
		l !== d || f !== g || fn.current || oi
			? (typeof h == 'function' && (Uf(e, n, h, r), (g = e.memoizedState)),
				(a = oi || $p(e, n, a, r, f, g, u) || !1)
					? (c ||
							(typeof o.UNSAFE_componentWillUpdate != 'function' &&
								typeof o.componentWillUpdate != 'function') ||
							(typeof o.componentWillUpdate == 'function' &&
								o.componentWillUpdate(r, g, u),
							typeof o.UNSAFE_componentWillUpdate == 'function' &&
								o.UNSAFE_componentWillUpdate(r, g, u)),
						typeof o.componentDidUpdate == 'function' && (e.flags |= 4),
						typeof o.getSnapshotBeforeUpdate == 'function' && (e.flags |= 1024))
					: (typeof o.componentDidUpdate != 'function' ||
							(l === t.memoizedProps && f === t.memoizedState) ||
							(e.flags |= 4),
						typeof o.getSnapshotBeforeUpdate != 'function' ||
							(l === t.memoizedProps && f === t.memoizedState) ||
							(e.flags |= 1024),
						(e.memoizedProps = r),
						(e.memoizedState = g)),
				(o.props = r),
				(o.state = g),
				(o.context = u),
				(r = a))
			: (typeof o.componentDidUpdate != 'function' ||
					(l === t.memoizedProps && f === t.memoizedState) ||
					(e.flags |= 4),
				typeof o.getSnapshotBeforeUpdate != 'function' ||
					(l === t.memoizedProps && f === t.memoizedState) ||
					(e.flags |= 1024),
				(r = !1));
	}
	return Hf(t, e, n, r, s, i);
}
function Hf(t, e, n, r, i, s) {
	Z_(t, e);
	var o = (e.flags & 128) !== 0;
	if (!r && !o) return i && Lp(e, n, !1), Gr(t, e, s);
	(r = e.stateNode), (gx.current = e);
	var l =
		o && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
	return (
		(e.flags |= 1),
		t !== null && o
			? ((e.child = fo(e, t.child, null, s)), (e.child = fo(e, null, l, s)))
			: Yt(t, e, l, s),
		(e.memoizedState = r.state),
		i && Lp(e, n, !0),
		e.child
	);
}
function J_(t) {
	var e = t.stateNode;
	e.pendingContext
		? Ap(t, e.pendingContext, e.pendingContext !== e.context)
		: e.context && Ap(t, e.context, !1),
		sh(t, e.containerInfo);
}
function qp(t, e, n, r, i) {
	return co(), Jd(i), (e.flags |= 256), Yt(t, e, n, r), e.child;
}
var Yf = { dehydrated: null, treeContext: null, retryLane: 0 };
function Qf(t) {
	return { baseLanes: t, cachePool: null, transitions: null };
}
function eg(t, e, n) {
	var r = e.pendingProps,
		i = Ve.current,
		s = !1,
		o = (e.flags & 128) !== 0,
		l;
	if (
		((l = o) ||
			(l = t !== null && t.memoizedState === null ? !1 : (i & 2) !== 0),
		l
			? ((s = !0), (e.flags &= -129))
			: (t === null || t.memoizedState !== null) && (i |= 1),
		Te(Ve, i & 1),
		t === null)
	)
		return (
			Vf(e),
			(t = e.memoizedState),
			t !== null && ((t = t.dehydrated), t !== null)
				? (e.mode & 1
						? t.data === '$!'
							? (e.lanes = 8)
							: (e.lanes = 1073741824)
						: (e.lanes = 1),
					null)
				: ((o = r.children),
					(t = r.fallback),
					s
						? ((r = e.mode),
							(s = e.child),
							(o = { mode: 'hidden', children: o }),
							!(r & 1) && s !== null
								? ((s.childLanes = 0), (s.pendingProps = o))
								: (s = sc(o, r, 0, null)),
							(t = rs(t, r, n, null)),
							(s.return = e),
							(t.return = e),
							(s.sibling = t),
							(e.child = s),
							(e.child.memoizedState = Qf(n)),
							(e.memoizedState = Yf),
							t)
						: hh(e, o))
		);
	if (((i = t.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
		return vx(t, e, o, r, l, i, n);
	if (s) {
		(s = r.fallback), (o = e.mode), (i = t.child), (l = i.sibling);
		var u = { mode: 'hidden', children: r.children };
		return (
			!(o & 1) && e.child !== i
				? ((r = e.child),
					(r.childLanes = 0),
					(r.pendingProps = u),
					(e.deletions = null))
				: ((r = Ti(i, u)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
			l !== null ? (s = Ti(l, s)) : ((s = rs(s, o, n, null)), (s.flags |= 2)),
			(s.return = e),
			(r.return = e),
			(r.sibling = s),
			(e.child = r),
			(r = s),
			(s = e.child),
			(o = t.child.memoizedState),
			(o =
				o === null
					? Qf(n)
					: {
							baseLanes: o.baseLanes | n,
							cachePool: null,
							transitions: o.transitions,
						}),
			(s.memoizedState = o),
			(s.childLanes = t.childLanes & ~n),
			(e.memoizedState = Yf),
			r
		);
	}
	return (
		(s = t.child),
		(t = s.sibling),
		(r = Ti(s, { mode: 'visible', children: r.children })),
		!(e.mode & 1) && (r.lanes = n),
		(r.return = e),
		(r.sibling = null),
		t !== null &&
			((n = e.deletions),
			n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t)),
		(e.child = r),
		(e.memoizedState = null),
		r
	);
}
function hh(t, e) {
	return (
		(e = sc({ mode: 'visible', children: e }, t.mode, 0, null)),
		(e.return = t),
		(t.child = e)
	);
}
function yu(t, e, n, r) {
	return (
		r !== null && Jd(r),
		fo(e, t.child, null, n),
		(t = hh(e, e.pendingProps.children)),
		(t.flags |= 2),
		(e.memoizedState = null),
		t
	);
}
function vx(t, e, n, r, i, s, o) {
	if (n)
		return e.flags & 256
			? ((e.flags &= -257), (r = Ic(Error(z(422)))), yu(t, e, o, r))
			: e.memoizedState !== null
				? ((e.child = t.child), (e.flags |= 128), null)
				: ((s = r.fallback),
					(i = e.mode),
					(r = sc({ mode: 'visible', children: r.children }, i, 0, null)),
					(s = rs(s, i, o, null)),
					(s.flags |= 2),
					(r.return = e),
					(s.return = e),
					(r.sibling = s),
					(e.child = r),
					e.mode & 1 && fo(e, t.child, null, o),
					(e.child.memoizedState = Qf(o)),
					(e.memoizedState = Yf),
					s);
	if (!(e.mode & 1)) return yu(t, e, o, null);
	if (i.data === '$!') {
		if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
		return (r = l), (s = Error(z(419))), (r = Ic(s, r, void 0)), yu(t, e, o, r);
	}
	if (((l = (o & t.childLanes) !== 0), cn || l)) {
		if (((r = yt), r !== null)) {
			switch (o & -o) {
				case 4:
					i = 2;
					break;
				case 16:
					i = 8;
					break;
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
				case 4194304:
				case 8388608:
				case 16777216:
				case 33554432:
				case 67108864:
					i = 32;
					break;
				case 536870912:
					i = 268435456;
					break;
				default:
					i = 0;
			}
			(i = i & (r.suspendedLanes | o) ? 0 : i),
				i !== 0 &&
					i !== s.retryLane &&
					((s.retryLane = i), Xr(t, i), cr(r, t, i, -1));
		}
		return yh(), (r = Ic(Error(z(421)))), yu(t, e, o, r);
	}
	return i.data === '$?'
		? ((e.flags |= 128),
			(e.child = t.child),
			(e = jx.bind(null, t)),
			(i._reactRetry = e),
			null)
		: ((t = s.treeContext),
			(Cn = xi(i.nextSibling)),
			(Nn = e),
			(Ae = !0),
			(or = null),
			t !== null &&
				((Fn[In++] = Ur),
				(Fn[In++] = Br),
				(Fn[In++] = ds),
				(Ur = t.id),
				(Br = t.overflow),
				(ds = e)),
			(e = hh(e, r.children)),
			(e.flags |= 4096),
			e);
}
function Zp(t, e, n) {
	t.lanes |= e;
	var r = t.alternate;
	r !== null && (r.lanes |= e), $f(t.return, e, n);
}
function Vc(t, e, n, r, i) {
	var s = t.memoizedState;
	s === null
		? (t.memoizedState = {
				isBackwards: e,
				rendering: null,
				renderingStartTime: 0,
				last: r,
				tail: n,
				tailMode: i,
			})
		: ((s.isBackwards = e),
			(s.rendering = null),
			(s.renderingStartTime = 0),
			(s.last = r),
			(s.tail = n),
			(s.tailMode = i));
}
function tg(t, e, n) {
	var r = e.pendingProps,
		i = r.revealOrder,
		s = r.tail;
	if ((Yt(t, e, r.children, n), (r = Ve.current), r & 2))
		(r = (r & 1) | 2), (e.flags |= 128);
	else {
		if (t !== null && t.flags & 128)
			e: for (t = e.child; t !== null; ) {
				if (t.tag === 13) t.memoizedState !== null && Zp(t, n, e);
				else if (t.tag === 19) Zp(t, n, e);
				else if (t.child !== null) {
					(t.child.return = t), (t = t.child);
					continue;
				}
				if (t === e) break e;
				for (; t.sibling === null; ) {
					if (t.return === null || t.return === e) break e;
					t = t.return;
				}
				(t.sibling.return = t.return), (t = t.sibling);
			}
		r &= 1;
	}
	if ((Te(Ve, r), !(e.mode & 1))) e.memoizedState = null;
	else
		switch (i) {
			case 'forwards':
				for (n = e.child, i = null; n !== null; )
					(t = n.alternate),
						t !== null && Sa(t) === null && (i = n),
						(n = n.sibling);
				(n = i),
					n === null
						? ((i = e.child), (e.child = null))
						: ((i = n.sibling), (n.sibling = null)),
					Vc(e, !1, i, n, s);
				break;
			case 'backwards':
				for (n = null, i = e.child, e.child = null; i !== null; ) {
					if (((t = i.alternate), t !== null && Sa(t) === null)) {
						e.child = i;
						break;
					}
					(t = i.sibling), (i.sibling = n), (n = i), (i = t);
				}
				Vc(e, !0, n, null, s);
				break;
			case 'together':
				Vc(e, !1, null, null, void 0);
				break;
			default:
				e.memoizedState = null;
		}
	return e.child;
}
function Yu(t, e) {
	!(e.mode & 1) &&
		t !== null &&
		((t.alternate = null), (e.alternate = null), (e.flags |= 2));
}
function Gr(t, e, n) {
	if (
		(t !== null && (e.dependencies = t.dependencies),
		(ps |= e.lanes),
		!(n & e.childLanes))
	)
		return null;
	if (t !== null && e.child !== t.child) throw Error(z(153));
	if (e.child !== null) {
		for (
			t = e.child, n = Ti(t, t.pendingProps), e.child = n, n.return = e;
			t.sibling !== null;

		)
			(t = t.sibling), (n = n.sibling = Ti(t, t.pendingProps)), (n.return = e);
		n.sibling = null;
	}
	return e.child;
}
function yx(t, e, n) {
	switch (e.tag) {
		case 3:
			J_(e), co();
			break;
		case 5:
			N_(e);
			break;
		case 1:
			dn(e.type) && _a(e);
			break;
		case 4:
			sh(e, e.stateNode.containerInfo);
			break;
		case 10:
			var r = e.type._context,
				i = e.memoizedProps.value;
			Te(ya, r._currentValue), (r._currentValue = i);
			break;
		case 13:
			if (((r = e.memoizedState), r !== null))
				return r.dehydrated !== null
					? (Te(Ve, Ve.current & 1), (e.flags |= 128), null)
					: n & e.child.childLanes
						? eg(t, e, n)
						: (Te(Ve, Ve.current & 1),
							(t = Gr(t, e, n)),
							t !== null ? t.sibling : null);
			Te(Ve, Ve.current & 1);
			break;
		case 19:
			if (((r = (n & e.childLanes) !== 0), t.flags & 128)) {
				if (r) return tg(t, e, n);
				e.flags |= 128;
			}
			if (
				((i = e.memoizedState),
				i !== null &&
					((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
				Te(Ve, Ve.current),
				r)
			)
				break;
			return null;
		case 22:
		case 23:
			return (e.lanes = 0), q_(t, e, n);
	}
	return Gr(t, e, n);
}
var ng, Xf, rg, ig;
ng = function (t, e) {
	for (var n = e.child; n !== null; ) {
		if (n.tag === 5 || n.tag === 6) t.appendChild(n.stateNode);
		else if (n.tag !== 4 && n.child !== null) {
			(n.child.return = n), (n = n.child);
			continue;
		}
		if (n === e) break;
		for (; n.sibling === null; ) {
			if (n.return === null || n.return === e) return;
			n = n.return;
		}
		(n.sibling.return = n.return), (n = n.sibling);
	}
};
Xf = function () {};
rg = function (t, e, n, r) {
	var i = t.memoizedProps;
	if (i !== r) {
		(t = e.stateNode), Zi(Cr.current);
		var s = null;
		switch (n) {
			case 'input':
				(i = _f(t, i)), (r = _f(t, r)), (s = []);
				break;
			case 'select':
				(i = We({}, i, { value: void 0 })),
					(r = We({}, r, { value: void 0 })),
					(s = []);
				break;
			case 'textarea':
				(i = yf(t, i)), (r = yf(t, r)), (s = []);
				break;
			default:
				typeof i.onClick != 'function' &&
					typeof r.onClick == 'function' &&
					(t.onclick = pa);
		}
		wf(n, r);
		var o;
		n = null;
		for (a in i)
			if (!r.hasOwnProperty(a) && i.hasOwnProperty(a) && i[a] != null)
				if (a === 'style') {
					var l = i[a];
					for (o in l) l.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''));
				} else
					a !== 'dangerouslySetInnerHTML' &&
						a !== 'children' &&
						a !== 'suppressContentEditableWarning' &&
						a !== 'suppressHydrationWarning' &&
						a !== 'autoFocus' &&
						(Sl.hasOwnProperty(a)
							? s || (s = [])
							: (s = s || []).push(a, null));
		for (a in r) {
			var u = r[a];
			if (
				((l = i != null ? i[a] : void 0),
				r.hasOwnProperty(a) && u !== l && (u != null || l != null))
			)
				if (a === 'style')
					if (l) {
						for (o in l)
							!l.hasOwnProperty(o) ||
								(u && u.hasOwnProperty(o)) ||
								(n || (n = {}), (n[o] = ''));
						for (o in u)
							u.hasOwnProperty(o) &&
								l[o] !== u[o] &&
								(n || (n = {}), (n[o] = u[o]));
					} else n || (s || (s = []), s.push(a, n)), (n = u);
				else
					a === 'dangerouslySetInnerHTML'
						? ((u = u ? u.__html : void 0),
							(l = l ? l.__html : void 0),
							u != null && l !== u && (s = s || []).push(a, u))
						: a === 'children'
							? (typeof u != 'string' && typeof u != 'number') ||
								(s = s || []).push(a, '' + u)
							: a !== 'suppressContentEditableWarning' &&
								a !== 'suppressHydrationWarning' &&
								(Sl.hasOwnProperty(a)
									? (u != null && a === 'onScroll' && Ce('scroll', t),
										s || l === u || (s = []))
									: (s = s || []).push(a, u));
		}
		n && (s = s || []).push('style', n);
		var a = s;
		(e.updateQueue = a) && (e.flags |= 4);
	}
};
ig = function (t, e, n, r) {
	n !== r && (e.flags |= 4);
};
function zo(t, e) {
	if (!Ae)
		switch (t.tailMode) {
			case 'hidden':
				e = t.tail;
				for (var n = null; e !== null; )
					e.alternate !== null && (n = e), (e = e.sibling);
				n === null ? (t.tail = null) : (n.sibling = null);
				break;
			case 'collapsed':
				n = t.tail;
				for (var r = null; n !== null; )
					n.alternate !== null && (r = n), (n = n.sibling);
				r === null
					? e || t.tail === null
						? (t.tail = null)
						: (t.tail.sibling = null)
					: (r.sibling = null);
		}
}
function Lt(t) {
	var e = t.alternate !== null && t.alternate.child === t.child,
		n = 0,
		r = 0;
	if (e)
		for (var i = t.child; i !== null; )
			(n |= i.lanes | i.childLanes),
				(r |= i.subtreeFlags & 14680064),
				(r |= i.flags & 14680064),
				(i.return = t),
				(i = i.sibling);
	else
		for (i = t.child; i !== null; )
			(n |= i.lanes | i.childLanes),
				(r |= i.subtreeFlags),
				(r |= i.flags),
				(i.return = t),
				(i = i.sibling);
	return (t.subtreeFlags |= r), (t.childLanes = n), e;
}
function xx(t, e, n) {
	var r = e.pendingProps;
	switch ((Zd(e), e.tag)) {
		case 2:
		case 16:
		case 15:
		case 0:
		case 11:
		case 7:
		case 8:
		case 12:
		case 9:
		case 14:
			return Lt(e), null;
		case 1:
			return dn(e.type) && ma(), Lt(e), null;
		case 3:
			return (
				(r = e.stateNode),
				ho(),
				Ne(fn),
				Ne(Bt),
				lh(),
				r.pendingContext &&
					((r.context = r.pendingContext), (r.pendingContext = null)),
				(t === null || t.child === null) &&
					(gu(e)
						? (e.flags |= 4)
						: t === null ||
							(t.memoizedState.isDehydrated && !(e.flags & 256)) ||
							((e.flags |= 1024), or !== null && (nd(or), (or = null)))),
				Xf(t, e),
				Lt(e),
				null
			);
		case 5:
			oh(e);
			var i = Zi(Al.current);
			if (((n = e.type), t !== null && e.stateNode != null))
				rg(t, e, n, r, i),
					t.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152));
			else {
				if (!r) {
					if (e.stateNode === null) throw Error(z(166));
					return Lt(e), null;
				}
				if (((t = Zi(Cr.current)), gu(e))) {
					(r = e.stateNode), (n = e.type);
					var s = e.memoizedProps;
					switch (((r[xr] = e), (r[Rl] = s), (t = (e.mode & 1) !== 0), n)) {
						case 'dialog':
							Ce('cancel', r), Ce('close', r);
							break;
						case 'iframe':
						case 'object':
						case 'embed':
							Ce('load', r);
							break;
						case 'video':
						case 'audio':
							for (i = 0; i < Yo.length; i++) Ce(Yo[i], r);
							break;
						case 'source':
							Ce('error', r);
							break;
						case 'img':
						case 'image':
						case 'link':
							Ce('error', r), Ce('load', r);
							break;
						case 'details':
							Ce('toggle', r);
							break;
						case 'input':
							lp(r, s), Ce('invalid', r);
							break;
						case 'select':
							(r._wrapperState = { wasMultiple: !!s.multiple }),
								Ce('invalid', r);
							break;
						case 'textarea':
							ap(r, s), Ce('invalid', r);
					}
					wf(n, s), (i = null);
					for (var o in s)
						if (s.hasOwnProperty(o)) {
							var l = s[o];
							o === 'children'
								? typeof l == 'string'
									? r.textContent !== l &&
										(s.suppressHydrationWarning !== !0 &&
											_u(r.textContent, l, t),
										(i = ['children', l]))
									: typeof l == 'number' &&
										r.textContent !== '' + l &&
										(s.suppressHydrationWarning !== !0 &&
											_u(r.textContent, l, t),
										(i = ['children', '' + l]))
								: Sl.hasOwnProperty(o) &&
									l != null &&
									o === 'onScroll' &&
									Ce('scroll', r);
						}
					switch (n) {
						case 'input':
							uu(r), up(r, s, !0);
							break;
						case 'textarea':
							uu(r), cp(r);
							break;
						case 'select':
						case 'option':
							break;
						default:
							typeof s.onClick == 'function' && (r.onclick = pa);
					}
					(r = i), (e.updateQueue = r), r !== null && (e.flags |= 4);
				} else {
					(o = i.nodeType === 9 ? i : i.ownerDocument),
						t === 'http://www.w3.org/1999/xhtml' && (t = j0(n)),
						t === 'http://www.w3.org/1999/xhtml'
							? n === 'script'
								? ((t = o.createElement('div')),
									(t.innerHTML = '<script></script>'),
									(t = t.removeChild(t.firstChild)))
								: typeof r.is == 'string'
									? (t = o.createElement(n, { is: r.is }))
									: ((t = o.createElement(n)),
										n === 'select' &&
											((o = t),
											r.multiple
												? (o.multiple = !0)
												: r.size && (o.size = r.size)))
							: (t = o.createElementNS(t, n)),
						(t[xr] = e),
						(t[Rl] = r),
						ng(t, e, !1, !1),
						(e.stateNode = t);
					e: {
						switch (((o = Sf(n, r)), n)) {
							case 'dialog':
								Ce('cancel', t), Ce('close', t), (i = r);
								break;
							case 'iframe':
							case 'object':
							case 'embed':
								Ce('load', t), (i = r);
								break;
							case 'video':
							case 'audio':
								for (i = 0; i < Yo.length; i++) Ce(Yo[i], t);
								i = r;
								break;
							case 'source':
								Ce('error', t), (i = r);
								break;
							case 'img':
							case 'image':
							case 'link':
								Ce('error', t), Ce('load', t), (i = r);
								break;
							case 'details':
								Ce('toggle', t), (i = r);
								break;
							case 'input':
								lp(t, r), (i = _f(t, r)), Ce('invalid', t);
								break;
							case 'option':
								i = r;
								break;
							case 'select':
								(t._wrapperState = { wasMultiple: !!r.multiple }),
									(i = We({}, r, { value: void 0 })),
									Ce('invalid', t);
								break;
							case 'textarea':
								ap(t, r), (i = yf(t, r)), Ce('invalid', t);
								break;
							default:
								i = r;
						}
						wf(n, i), (l = i);
						for (s in l)
							if (l.hasOwnProperty(s)) {
								var u = l[s];
								s === 'style'
									? A0(t, u)
									: s === 'dangerouslySetInnerHTML'
										? ((u = u ? u.__html : void 0), u != null && R0(t, u))
										: s === 'children'
											? typeof u == 'string'
												? (n !== 'textarea' || u !== '') && kl(t, u)
												: typeof u == 'number' && kl(t, '' + u)
											: s !== 'suppressContentEditableWarning' &&
												s !== 'suppressHydrationWarning' &&
												s !== 'autoFocus' &&
												(Sl.hasOwnProperty(s)
													? u != null && s === 'onScroll' && Ce('scroll', t)
													: u != null && Fd(t, s, u, o));
							}
						switch (n) {
							case 'input':
								uu(t), up(t, r, !1);
								break;
							case 'textarea':
								uu(t), cp(t);
								break;
							case 'option':
								r.value != null && t.setAttribute('value', '' + Ni(r.value));
								break;
							case 'select':
								(t.multiple = !!r.multiple),
									(s = r.value),
									s != null
										? Ks(t, !!r.multiple, s, !1)
										: r.defaultValue != null &&
											Ks(t, !!r.multiple, r.defaultValue, !0);
								break;
							default:
								typeof i.onClick == 'function' && (t.onclick = pa);
						}
						switch (n) {
							case 'button':
							case 'input':
							case 'select':
							case 'textarea':
								r = !!r.autoFocus;
								break e;
							case 'img':
								r = !0;
								break e;
							default:
								r = !1;
						}
					}
					r && (e.flags |= 4);
				}
				e.ref !== null && ((e.flags |= 512), (e.flags |= 2097152));
			}
			return Lt(e), null;
		case 6:
			if (t && e.stateNode != null) ig(t, e, t.memoizedProps, r);
			else {
				if (typeof r != 'string' && e.stateNode === null) throw Error(z(166));
				if (((n = Zi(Al.current)), Zi(Cr.current), gu(e))) {
					if (
						((r = e.stateNode),
						(n = e.memoizedProps),
						(r[xr] = e),
						(s = r.nodeValue !== n) && ((t = Nn), t !== null))
					)
						switch (t.tag) {
							case 3:
								_u(r.nodeValue, n, (t.mode & 1) !== 0);
								break;
							case 5:
								t.memoizedProps.suppressHydrationWarning !== !0 &&
									_u(r.nodeValue, n, (t.mode & 1) !== 0);
						}
					s && (e.flags |= 4);
				} else
					(r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
						(r[xr] = e),
						(e.stateNode = r);
			}
			return Lt(e), null;
		case 13:
			if (
				(Ne(Ve),
				(r = e.memoizedState),
				t === null ||
					(t.memoizedState !== null && t.memoizedState.dehydrated !== null))
			) {
				if (Ae && Cn !== null && e.mode & 1 && !(e.flags & 128))
					w_(), co(), (e.flags |= 98560), (s = !1);
				else if (((s = gu(e)), r !== null && r.dehydrated !== null)) {
					if (t === null) {
						if (!s) throw Error(z(318));
						if (
							((s = e.memoizedState),
							(s = s !== null ? s.dehydrated : null),
							!s)
						)
							throw Error(z(317));
						s[xr] = e;
					} else
						co(), !(e.flags & 128) && (e.memoizedState = null), (e.flags |= 4);
					Lt(e), (s = !1);
				} else or !== null && (nd(or), (or = null)), (s = !0);
				if (!s) return e.flags & 65536 ? e : null;
			}
			return e.flags & 128
				? ((e.lanes = n), e)
				: ((r = r !== null),
					r !== (t !== null && t.memoizedState !== null) &&
						r &&
						((e.child.flags |= 8192),
						e.mode & 1 &&
							(t === null || Ve.current & 1 ? ft === 0 && (ft = 3) : yh())),
					e.updateQueue !== null && (e.flags |= 4),
					Lt(e),
					null);
		case 4:
			return (
				ho(), Xf(t, e), t === null && Ml(e.stateNode.containerInfo), Lt(e), null
			);
		case 10:
			return nh(e.type._context), Lt(e), null;
		case 17:
			return dn(e.type) && ma(), Lt(e), null;
		case 19:
			if ((Ne(Ve), (s = e.memoizedState), s === null)) return Lt(e), null;
			if (((r = (e.flags & 128) !== 0), (o = s.rendering), o === null))
				if (r) zo(s, !1);
				else {
					if (ft !== 0 || (t !== null && t.flags & 128))
						for (t = e.child; t !== null; ) {
							if (((o = Sa(t)), o !== null)) {
								for (
									e.flags |= 128,
										zo(s, !1),
										r = o.updateQueue,
										r !== null && ((e.updateQueue = r), (e.flags |= 4)),
										e.subtreeFlags = 0,
										r = n,
										n = e.child;
									n !== null;

								)
									(s = n),
										(t = r),
										(s.flags &= 14680066),
										(o = s.alternate),
										o === null
											? ((s.childLanes = 0),
												(s.lanes = t),
												(s.child = null),
												(s.subtreeFlags = 0),
												(s.memoizedProps = null),
												(s.memoizedState = null),
												(s.updateQueue = null),
												(s.dependencies = null),
												(s.stateNode = null))
											: ((s.childLanes = o.childLanes),
												(s.lanes = o.lanes),
												(s.child = o.child),
												(s.subtreeFlags = 0),
												(s.deletions = null),
												(s.memoizedProps = o.memoizedProps),
												(s.memoizedState = o.memoizedState),
												(s.updateQueue = o.updateQueue),
												(s.type = o.type),
												(t = o.dependencies),
												(s.dependencies =
													t === null
														? null
														: {
																lanes: t.lanes,
																firstContext: t.firstContext,
															})),
										(n = n.sibling);
								return Te(Ve, (Ve.current & 1) | 2), e.child;
							}
							t = t.sibling;
						}
					s.tail !== null &&
						Ze() > mo &&
						((e.flags |= 128), (r = !0), zo(s, !1), (e.lanes = 4194304));
				}
			else {
				if (!r)
					if (((t = Sa(o)), t !== null)) {
						if (
							((e.flags |= 128),
							(r = !0),
							(n = t.updateQueue),
							n !== null && ((e.updateQueue = n), (e.flags |= 4)),
							zo(s, !0),
							s.tail === null && s.tailMode === 'hidden' && !o.alternate && !Ae)
						)
							return Lt(e), null;
					} else
						2 * Ze() - s.renderingStartTime > mo &&
							n !== 1073741824 &&
							((e.flags |= 128), (r = !0), zo(s, !1), (e.lanes = 4194304));
				s.isBackwards
					? ((o.sibling = e.child), (e.child = o))
					: ((n = s.last),
						n !== null ? (n.sibling = o) : (e.child = o),
						(s.last = o));
			}
			return s.tail !== null
				? ((e = s.tail),
					(s.rendering = e),
					(s.tail = e.sibling),
					(s.renderingStartTime = Ze()),
					(e.sibling = null),
					(n = Ve.current),
					Te(Ve, r ? (n & 1) | 2 : n & 1),
					e)
				: (Lt(e), null);
		case 22:
		case 23:
			return (
				vh(),
				(r = e.memoizedState !== null),
				t !== null && (t.memoizedState !== null) !== r && (e.flags |= 8192),
				r && e.mode & 1
					? wn & 1073741824 && (Lt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
					: Lt(e),
				null
			);
		case 24:
			return null;
		case 25:
			return null;
	}
	throw Error(z(156, e.tag));
}
function wx(t, e) {
	switch ((Zd(e), e.tag)) {
		case 1:
			return (
				dn(e.type) && ma(),
				(t = e.flags),
				t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
			);
		case 3:
			return (
				ho(),
				Ne(fn),
				Ne(Bt),
				lh(),
				(t = e.flags),
				t & 65536 && !(t & 128) ? ((e.flags = (t & -65537) | 128), e) : null
			);
		case 5:
			return oh(e), null;
		case 13:
			if (
				(Ne(Ve), (t = e.memoizedState), t !== null && t.dehydrated !== null)
			) {
				if (e.alternate === null) throw Error(z(340));
				co();
			}
			return (
				(t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
			);
		case 19:
			return Ne(Ve), null;
		case 4:
			return ho(), null;
		case 10:
			return nh(e.type._context), null;
		case 22:
		case 23:
			return vh(), null;
		case 24:
			return null;
		default:
			return null;
	}
}
var xu = !1,
	It = !1,
	Sx = typeof WeakSet == 'function' ? WeakSet : Set,
	W = null;
function bs(t, e) {
	var n = t.ref;
	if (n !== null)
		if (typeof n == 'function')
			try {
				n(null);
			} catch (r) {
				Ye(t, e, r);
			}
		else n.current = null;
}
function Gf(t, e, n) {
	try {
		n();
	} catch (r) {
		Ye(t, e, r);
	}
}
var Jp = !1;
function kx(t, e) {
	if (((Rf = fa), (t = u_()), Kd(t))) {
		if ('selectionStart' in t)
			var n = { start: t.selectionStart, end: t.selectionEnd };
		else
			e: {
				n = ((n = t.ownerDocument) && n.defaultView) || window;
				var r = n.getSelection && n.getSelection();
				if (r && r.rangeCount !== 0) {
					n = r.anchorNode;
					var i = r.anchorOffset,
						s = r.focusNode;
					r = r.focusOffset;
					try {
						n.nodeType, s.nodeType;
					} catch {
						n = null;
						break e;
					}
					var o = 0,
						l = -1,
						u = -1,
						a = 0,
						c = 0,
						d = t,
						f = null;
					t: for (;;) {
						for (
							var h;
							d !== n || (i !== 0 && d.nodeType !== 3) || (l = o + i),
								d !== s || (r !== 0 && d.nodeType !== 3) || (u = o + r),
								d.nodeType === 3 && (o += d.nodeValue.length),
								(h = d.firstChild) !== null;

						)
							(f = d), (d = h);
						for (;;) {
							if (d === t) break t;
							if (
								(f === n && ++a === i && (l = o),
								f === s && ++c === r && (u = o),
								(h = d.nextSibling) !== null)
							)
								break;
							(d = f), (f = d.parentNode);
						}
						d = h;
					}
					n = l === -1 || u === -1 ? null : { start: l, end: u };
				} else n = null;
			}
		n = n || { start: 0, end: 0 };
	} else n = null;
	for (Df = { focusedElem: t, selectionRange: n }, fa = !1, W = e; W !== null; )
		if (((e = W), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null))
			(t.return = e), (W = t);
		else
			for (; W !== null; ) {
				e = W;
				try {
					var g = e.alternate;
					if (e.flags & 1024)
						switch (e.tag) {
							case 0:
							case 11:
							case 15:
								break;
							case 1:
								if (g !== null) {
									var m = g.memoizedProps,
										T = g.memoizedState,
										_ = e.stateNode,
										p = _.getSnapshotBeforeUpdate(
											e.elementType === e.type ? m : ir(e.type, m),
											T,
										);
									_.__reactInternalSnapshotBeforeUpdate = p;
								}
								break;
							case 3:
								var y = e.stateNode.containerInfo;
								y.nodeType === 1
									? (y.textContent = '')
									: y.nodeType === 9 &&
										y.documentElement &&
										y.removeChild(y.documentElement);
								break;
							case 5:
							case 6:
							case 4:
							case 17:
								break;
							default:
								throw Error(z(163));
						}
				} catch (x) {
					Ye(e, e.return, x);
				}
				if (((t = e.sibling), t !== null)) {
					(t.return = e.return), (W = t);
					break;
				}
				W = e.return;
			}
	return (g = Jp), (Jp = !1), g;
}
function ol(t, e, n) {
	var r = e.updateQueue;
	if (((r = r !== null ? r.lastEffect : null), r !== null)) {
		var i = (r = r.next);
		do {
			if ((i.tag & t) === t) {
				var s = i.destroy;
				(i.destroy = void 0), s !== void 0 && Gf(e, n, s);
			}
			i = i.next;
		} while (i !== r);
	}
}
function rc(t, e) {
	if (
		((e = e.updateQueue), (e = e !== null ? e.lastEffect : null), e !== null)
	) {
		var n = (e = e.next);
		do {
			if ((n.tag & t) === t) {
				var r = n.create;
				n.destroy = r();
			}
			n = n.next;
		} while (n !== e);
	}
}
function Kf(t) {
	var e = t.ref;
	if (e !== null) {
		var n = t.stateNode;
		switch (t.tag) {
			case 5:
				t = n;
				break;
			default:
				t = n;
		}
		typeof e == 'function' ? e(t) : (e.current = t);
	}
}
function sg(t) {
	var e = t.alternate;
	e !== null && ((t.alternate = null), sg(e)),
		(t.child = null),
		(t.deletions = null),
		(t.sibling = null),
		t.tag === 5 &&
			((e = t.stateNode),
			e !== null &&
				(delete e[xr], delete e[Rl], delete e[zf], delete e[sx], delete e[ox])),
		(t.stateNode = null),
		(t.return = null),
		(t.dependencies = null),
		(t.memoizedProps = null),
		(t.memoizedState = null),
		(t.pendingProps = null),
		(t.stateNode = null),
		(t.updateQueue = null);
}
function og(t) {
	return t.tag === 5 || t.tag === 3 || t.tag === 4;
}
function em(t) {
	e: for (;;) {
		for (; t.sibling === null; ) {
			if (t.return === null || og(t.return)) return null;
			t = t.return;
		}
		for (
			t.sibling.return = t.return, t = t.sibling;
			t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

		) {
			if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
			(t.child.return = t), (t = t.child);
		}
		if (!(t.flags & 2)) return t.stateNode;
	}
}
function qf(t, e, n) {
	var r = t.tag;
	if (r === 5 || r === 6)
		(t = t.stateNode),
			e
				? n.nodeType === 8
					? n.parentNode.insertBefore(t, e)
					: n.insertBefore(t, e)
				: (n.nodeType === 8
						? ((e = n.parentNode), e.insertBefore(t, n))
						: ((e = n), e.appendChild(t)),
					(n = n._reactRootContainer),
					n != null || e.onclick !== null || (e.onclick = pa));
	else if (r !== 4 && ((t = t.child), t !== null))
		for (qf(t, e, n), t = t.sibling; t !== null; ) qf(t, e, n), (t = t.sibling);
}
function Zf(t, e, n) {
	var r = t.tag;
	if (r === 5 || r === 6)
		(t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
	else if (r !== 4 && ((t = t.child), t !== null))
		for (Zf(t, e, n), t = t.sibling; t !== null; ) Zf(t, e, n), (t = t.sibling);
}
var Pt = null,
	sr = !1;
function ti(t, e, n) {
	for (n = n.child; n !== null; ) lg(t, e, n), (n = n.sibling);
}
function lg(t, e, n) {
	if (Er && typeof Er.onCommitFiberUnmount == 'function')
		try {
			Er.onCommitFiberUnmount(Ga, n);
		} catch {}
	switch (n.tag) {
		case 5:
			It || bs(n, e);
		case 6:
			var r = Pt,
				i = sr;
			(Pt = null),
				ti(t, e, n),
				(Pt = r),
				(sr = i),
				Pt !== null &&
					(sr
						? ((t = Pt),
							(n = n.stateNode),
							t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n))
						: Pt.removeChild(n.stateNode));
			break;
		case 18:
			Pt !== null &&
				(sr
					? ((t = Pt),
						(n = n.stateNode),
						t.nodeType === 8
							? Rc(t.parentNode, n)
							: t.nodeType === 1 && Rc(t, n),
						Pl(t))
					: Rc(Pt, n.stateNode));
			break;
		case 4:
			(r = Pt),
				(i = sr),
				(Pt = n.stateNode.containerInfo),
				(sr = !0),
				ti(t, e, n),
				(Pt = r),
				(sr = i);
			break;
		case 0:
		case 11:
		case 14:
		case 15:
			if (
				!It &&
				((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
			) {
				i = r = r.next;
				do {
					var s = i,
						o = s.destroy;
					(s = s.tag),
						o !== void 0 && (s & 2 || s & 4) && Gf(n, e, o),
						(i = i.next);
				} while (i !== r);
			}
			ti(t, e, n);
			break;
		case 1:
			if (
				!It &&
				(bs(n, e),
				(r = n.stateNode),
				typeof r.componentWillUnmount == 'function')
			)
				try {
					(r.props = n.memoizedProps),
						(r.state = n.memoizedState),
						r.componentWillUnmount();
				} catch (l) {
					Ye(n, e, l);
				}
			ti(t, e, n);
			break;
		case 21:
			ti(t, e, n);
			break;
		case 22:
			n.mode & 1
				? ((It = (r = It) || n.memoizedState !== null), ti(t, e, n), (It = r))
				: ti(t, e, n);
			break;
		default:
			ti(t, e, n);
	}
}
function tm(t) {
	var e = t.updateQueue;
	if (e !== null) {
		t.updateQueue = null;
		var n = t.stateNode;
		n === null && (n = t.stateNode = new Sx()),
			e.forEach(function (r) {
				var i = Rx.bind(null, t, r);
				n.has(r) || (n.add(r), r.then(i, i));
			});
	}
}
function nr(t, e) {
	var n = e.deletions;
	if (n !== null)
		for (var r = 0; r < n.length; r++) {
			var i = n[r];
			try {
				var s = t,
					o = e,
					l = o;
				e: for (; l !== null; ) {
					switch (l.tag) {
						case 5:
							(Pt = l.stateNode), (sr = !1);
							break e;
						case 3:
							(Pt = l.stateNode.containerInfo), (sr = !0);
							break e;
						case 4:
							(Pt = l.stateNode.containerInfo), (sr = !0);
							break e;
					}
					l = l.return;
				}
				if (Pt === null) throw Error(z(160));
				lg(s, o, i), (Pt = null), (sr = !1);
				var u = i.alternate;
				u !== null && (u.return = null), (i.return = null);
			} catch (a) {
				Ye(i, e, a);
			}
		}
	if (e.subtreeFlags & 12854)
		for (e = e.child; e !== null; ) ug(e, t), (e = e.sibling);
}
function ug(t, e) {
	var n = t.alternate,
		r = t.flags;
	switch (t.tag) {
		case 0:
		case 11:
		case 14:
		case 15:
			if ((nr(e, t), _r(t), r & 4)) {
				try {
					ol(3, t, t.return), rc(3, t);
				} catch (m) {
					Ye(t, t.return, m);
				}
				try {
					ol(5, t, t.return);
				} catch (m) {
					Ye(t, t.return, m);
				}
			}
			break;
		case 1:
			nr(e, t), _r(t), r & 512 && n !== null && bs(n, n.return);
			break;
		case 5:
			if (
				(nr(e, t),
				_r(t),
				r & 512 && n !== null && bs(n, n.return),
				t.flags & 32)
			) {
				var i = t.stateNode;
				try {
					kl(i, '');
				} catch (m) {
					Ye(t, t.return, m);
				}
			}
			if (r & 4 && ((i = t.stateNode), i != null)) {
				var s = t.memoizedProps,
					o = n !== null ? n.memoizedProps : s,
					l = t.type,
					u = t.updateQueue;
				if (((t.updateQueue = null), u !== null))
					try {
						l === 'input' && s.type === 'radio' && s.name != null && O0(i, s),
							Sf(l, o);
						var a = Sf(l, s);
						for (o = 0; o < u.length; o += 2) {
							var c = u[o],
								d = u[o + 1];
							c === 'style'
								? A0(i, d)
								: c === 'dangerouslySetInnerHTML'
									? R0(i, d)
									: c === 'children'
										? kl(i, d)
										: Fd(i, c, d, a);
						}
						switch (l) {
							case 'input':
								gf(i, s);
								break;
							case 'textarea':
								M0(i, s);
								break;
							case 'select':
								var f = i._wrapperState.wasMultiple;
								i._wrapperState.wasMultiple = !!s.multiple;
								var h = s.value;
								h != null
									? Ks(i, !!s.multiple, h, !1)
									: f !== !!s.multiple &&
										(s.defaultValue != null
											? Ks(i, !!s.multiple, s.defaultValue, !0)
											: Ks(i, !!s.multiple, s.multiple ? [] : '', !1));
						}
						i[Rl] = s;
					} catch (m) {
						Ye(t, t.return, m);
					}
			}
			break;
		case 6:
			if ((nr(e, t), _r(t), r & 4)) {
				if (t.stateNode === null) throw Error(z(162));
				(i = t.stateNode), (s = t.memoizedProps);
				try {
					i.nodeValue = s;
				} catch (m) {
					Ye(t, t.return, m);
				}
			}
			break;
		case 3:
			if (
				(nr(e, t), _r(t), r & 4 && n !== null && n.memoizedState.isDehydrated)
			)
				try {
					Pl(e.containerInfo);
				} catch (m) {
					Ye(t, t.return, m);
				}
			break;
		case 4:
			nr(e, t), _r(t);
			break;
		case 13:
			nr(e, t),
				_r(t),
				(i = t.child),
				i.flags & 8192 &&
					((s = i.memoizedState !== null),
					(i.stateNode.isHidden = s),
					!s ||
						(i.alternate !== null && i.alternate.memoizedState !== null) ||
						(_h = Ze())),
				r & 4 && tm(t);
			break;
		case 22:
			if (
				((c = n !== null && n.memoizedState !== null),
				t.mode & 1 ? ((It = (a = It) || c), nr(e, t), (It = a)) : nr(e, t),
				_r(t),
				r & 8192)
			) {
				if (
					((a = t.memoizedState !== null),
					(t.stateNode.isHidden = a) && !c && t.mode & 1)
				)
					for (W = t, c = t.child; c !== null; ) {
						for (d = W = c; W !== null; ) {
							switch (((f = W), (h = f.child), f.tag)) {
								case 0:
								case 11:
								case 14:
								case 15:
									ol(4, f, f.return);
									break;
								case 1:
									bs(f, f.return);
									var g = f.stateNode;
									if (typeof g.componentWillUnmount == 'function') {
										(r = f), (n = f.return);
										try {
											(e = r),
												(g.props = e.memoizedProps),
												(g.state = e.memoizedState),
												g.componentWillUnmount();
										} catch (m) {
											Ye(r, n, m);
										}
									}
									break;
								case 5:
									bs(f, f.return);
									break;
								case 22:
									if (f.memoizedState !== null) {
										rm(d);
										continue;
									}
							}
							h !== null ? ((h.return = f), (W = h)) : rm(d);
						}
						c = c.sibling;
					}
				e: for (c = null, d = t; ; ) {
					if (d.tag === 5) {
						if (c === null) {
							c = d;
							try {
								(i = d.stateNode),
									a
										? ((s = i.style),
											typeof s.setProperty == 'function'
												? s.setProperty('display', 'none', 'important')
												: (s.display = 'none'))
										: ((l = d.stateNode),
											(u = d.memoizedProps.style),
											(o =
												u != null && u.hasOwnProperty('display')
													? u.display
													: null),
											(l.style.display = D0('display', o)));
							} catch (m) {
								Ye(t, t.return, m);
							}
						}
					} else if (d.tag === 6) {
						if (c === null)
							try {
								d.stateNode.nodeValue = a ? '' : d.memoizedProps;
							} catch (m) {
								Ye(t, t.return, m);
							}
					} else if (
						((d.tag !== 22 && d.tag !== 23) ||
							d.memoizedState === null ||
							d === t) &&
						d.child !== null
					) {
						(d.child.return = d), (d = d.child);
						continue;
					}
					if (d === t) break e;
					for (; d.sibling === null; ) {
						if (d.return === null || d.return === t) break e;
						c === d && (c = null), (d = d.return);
					}
					c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
				}
			}
			break;
		case 19:
			nr(e, t), _r(t), r & 4 && tm(t);
			break;
		case 21:
			break;
		default:
			nr(e, t), _r(t);
	}
}
function _r(t) {
	var e = t.flags;
	if (e & 2) {
		try {
			e: {
				for (var n = t.return; n !== null; ) {
					if (og(n)) {
						var r = n;
						break e;
					}
					n = n.return;
				}
				throw Error(z(160));
			}
			switch (r.tag) {
				case 5:
					var i = r.stateNode;
					r.flags & 32 && (kl(i, ''), (r.flags &= -33));
					var s = em(t);
					Zf(t, s, i);
					break;
				case 3:
				case 4:
					var o = r.stateNode.containerInfo,
						l = em(t);
					qf(t, l, o);
					break;
				default:
					throw Error(z(161));
			}
		} catch (u) {
			Ye(t, t.return, u);
		}
		t.flags &= -3;
	}
	e & 4096 && (t.flags &= -4097);
}
function Tx(t, e, n) {
	(W = t), ag(t);
}
function ag(t, e, n) {
	for (var r = (t.mode & 1) !== 0; W !== null; ) {
		var i = W,
			s = i.child;
		if (i.tag === 22 && r) {
			var o = i.memoizedState !== null || xu;
			if (!o) {
				var l = i.alternate,
					u = (l !== null && l.memoizedState !== null) || It;
				l = xu;
				var a = It;
				if (((xu = o), (It = u) && !a))
					for (W = i; W !== null; )
						(o = W),
							(u = o.child),
							o.tag === 22 && o.memoizedState !== null
								? im(i)
								: u !== null
									? ((u.return = o), (W = u))
									: im(i);
				for (; s !== null; ) (W = s), ag(s), (s = s.sibling);
				(W = i), (xu = l), (It = a);
			}
			nm(t);
		} else
			i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (W = s)) : nm(t);
	}
}
function nm(t) {
	for (; W !== null; ) {
		var e = W;
		if (e.flags & 8772) {
			var n = e.alternate;
			try {
				if (e.flags & 8772)
					switch (e.tag) {
						case 0:
						case 11:
						case 15:
							It || rc(5, e);
							break;
						case 1:
							var r = e.stateNode;
							if (e.flags & 4 && !It)
								if (n === null) r.componentDidMount();
								else {
									var i =
										e.elementType === e.type
											? n.memoizedProps
											: ir(e.type, n.memoizedProps);
									r.componentDidUpdate(
										i,
										n.memoizedState,
										r.__reactInternalSnapshotBeforeUpdate,
									);
								}
							var s = e.updateQueue;
							s !== null && Vp(e, s, r);
							break;
						case 3:
							var o = e.updateQueue;
							if (o !== null) {
								if (((n = null), e.child !== null))
									switch (e.child.tag) {
										case 5:
											n = e.child.stateNode;
											break;
										case 1:
											n = e.child.stateNode;
									}
								Vp(e, o, n);
							}
							break;
						case 5:
							var l = e.stateNode;
							if (n === null && e.flags & 4) {
								n = l;
								var u = e.memoizedProps;
								switch (e.type) {
									case 'button':
									case 'input':
									case 'select':
									case 'textarea':
										u.autoFocus && n.focus();
										break;
									case 'img':
										u.src && (n.src = u.src);
								}
							}
							break;
						case 6:
							break;
						case 4:
							break;
						case 12:
							break;
						case 13:
							if (e.memoizedState === null) {
								var a = e.alternate;
								if (a !== null) {
									var c = a.memoizedState;
									if (c !== null) {
										var d = c.dehydrated;
										d !== null && Pl(d);
									}
								}
							}
							break;
						case 19:
						case 17:
						case 21:
						case 22:
						case 23:
						case 25:
							break;
						default:
							throw Error(z(163));
					}
				It || (e.flags & 512 && Kf(e));
			} catch (f) {
				Ye(e, e.return, f);
			}
		}
		if (e === t) {
			W = null;
			break;
		}
		if (((n = e.sibling), n !== null)) {
			(n.return = e.return), (W = n);
			break;
		}
		W = e.return;
	}
}
function rm(t) {
	for (; W !== null; ) {
		var e = W;
		if (e === t) {
			W = null;
			break;
		}
		var n = e.sibling;
		if (n !== null) {
			(n.return = e.return), (W = n);
			break;
		}
		W = e.return;
	}
}
function im(t) {
	for (; W !== null; ) {
		var e = W;
		try {
			switch (e.tag) {
				case 0:
				case 11:
				case 15:
					var n = e.return;
					try {
						rc(4, e);
					} catch (u) {
						Ye(e, n, u);
					}
					break;
				case 1:
					var r = e.stateNode;
					if (typeof r.componentDidMount == 'function') {
						var i = e.return;
						try {
							r.componentDidMount();
						} catch (u) {
							Ye(e, i, u);
						}
					}
					var s = e.return;
					try {
						Kf(e);
					} catch (u) {
						Ye(e, s, u);
					}
					break;
				case 5:
					var o = e.return;
					try {
						Kf(e);
					} catch (u) {
						Ye(e, o, u);
					}
			}
		} catch (u) {
			Ye(e, e.return, u);
		}
		if (e === t) {
			W = null;
			break;
		}
		var l = e.sibling;
		if (l !== null) {
			(l.return = e.return), (W = l);
			break;
		}
		W = e.return;
	}
}
var Ex = Math.ceil,
	Ea = Zr.ReactCurrentDispatcher,
	ph = Zr.ReactCurrentOwner,
	bn = Zr.ReactCurrentBatchConfig,
	_e = 0,
	yt = null,
	rt = null,
	Ot = 0,
	wn = 0,
	Hs = Ai(0),
	ft = 0,
	Il = null,
	ps = 0,
	ic = 0,
	mh = 0,
	ll = null,
	an = null,
	_h = 0,
	mo = 1 / 0,
	Lr = null,
	Ca = !1,
	Jf = null,
	Si = null,
	wu = !1,
	ci = null,
	Pa = 0,
	ul = 0,
	ed = null,
	Qu = -1,
	Xu = 0;
function en() {
	return _e & 6 ? Ze() : Qu !== -1 ? Qu : (Qu = Ze());
}
function ki(t) {
	return t.mode & 1
		? _e & 2 && Ot !== 0
			? Ot & -Ot
			: ux.transition !== null
				? (Xu === 0 && (Xu = Y0()), Xu)
				: ((t = xe),
					t !== 0 || ((t = window.event), (t = t === void 0 ? 16 : J0(t.type))),
					t)
		: 1;
}
function cr(t, e, n, r) {
	if (50 < ul) throw ((ul = 0), (ed = null), Error(z(185)));
	Gl(t, n, r),
		(!(_e & 2) || t !== yt) &&
			(t === yt && (!(_e & 2) && (ic |= n), ft === 4 && ui(t, Ot)),
			hn(t, r),
			n === 1 && _e === 0 && !(e.mode & 1) && ((mo = Ze() + 500), ec && Li()));
}
function hn(t, e) {
	var n = t.callbackNode;
	uy(t, e);
	var r = ca(t, t === yt ? Ot : 0);
	if (r === 0)
		n !== null && hp(n), (t.callbackNode = null), (t.callbackPriority = 0);
	else if (((e = r & -r), t.callbackPriority !== e)) {
		if ((n != null && hp(n), e === 1))
			t.tag === 0 ? lx(sm.bind(null, t)) : v_(sm.bind(null, t)),
				rx(function () {
					!(_e & 6) && Li();
				}),
				(n = null);
		else {
			switch (Q0(r)) {
				case 1:
					n = Bd;
					break;
				case 4:
					n = b0;
					break;
				case 16:
					n = aa;
					break;
				case 536870912:
					n = H0;
					break;
				default:
					n = aa;
			}
			n = gg(n, cg.bind(null, t));
		}
		(t.callbackPriority = e), (t.callbackNode = n);
	}
}
function cg(t, e) {
	if (((Qu = -1), (Xu = 0), _e & 6)) throw Error(z(327));
	var n = t.callbackNode;
	if (to() && t.callbackNode !== n) return null;
	var r = ca(t, t === yt ? Ot : 0);
	if (r === 0) return null;
	if (r & 30 || r & t.expiredLanes || e) e = Na(t, r);
	else {
		e = r;
		var i = _e;
		_e |= 2;
		var s = dg();
		(yt !== t || Ot !== e) && ((Lr = null), (mo = Ze() + 500), ns(t, e));
		do
			try {
				Nx();
				break;
			} catch (l) {
				fg(t, l);
			}
		while (!0);
		th(),
			(Ea.current = s),
			(_e = i),
			rt !== null ? (e = 0) : ((yt = null), (Ot = 0), (e = ft));
	}
	if (e !== 0) {
		if (
			(e === 2 && ((i = Pf(t)), i !== 0 && ((r = i), (e = td(t, i)))), e === 1)
		)
			throw ((n = Il), ns(t, 0), ui(t, r), hn(t, Ze()), n);
		if (e === 6) ui(t, r);
		else {
			if (
				((i = t.current.alternate),
				!(r & 30) &&
					!Cx(i) &&
					((e = Na(t, r)),
					e === 2 && ((s = Pf(t)), s !== 0 && ((r = s), (e = td(t, s)))),
					e === 1))
			)
				throw ((n = Il), ns(t, 0), ui(t, r), hn(t, Ze()), n);
			switch (((t.finishedWork = i), (t.finishedLanes = r), e)) {
				case 0:
				case 1:
					throw Error(z(345));
				case 2:
					Yi(t, an, Lr);
					break;
				case 3:
					if (
						(ui(t, r), (r & 130023424) === r && ((e = _h + 500 - Ze()), 10 < e))
					) {
						if (ca(t, 0) !== 0) break;
						if (((i = t.suspendedLanes), (i & r) !== r)) {
							en(), (t.pingedLanes |= t.suspendedLanes & i);
							break;
						}
						t.timeoutHandle = Lf(Yi.bind(null, t, an, Lr), e);
						break;
					}
					Yi(t, an, Lr);
					break;
				case 4:
					if ((ui(t, r), (r & 4194240) === r)) break;
					for (e = t.eventTimes, i = -1; 0 < r; ) {
						var o = 31 - ar(r);
						(s = 1 << o), (o = e[o]), o > i && (i = o), (r &= ~s);
					}
					if (
						((r = i),
						(r = Ze() - r),
						(r =
							(120 > r
								? 120
								: 480 > r
									? 480
									: 1080 > r
										? 1080
										: 1920 > r
											? 1920
											: 3e3 > r
												? 3e3
												: 4320 > r
													? 4320
													: 1960 * Ex(r / 1960)) - r),
						10 < r)
					) {
						t.timeoutHandle = Lf(Yi.bind(null, t, an, Lr), r);
						break;
					}
					Yi(t, an, Lr);
					break;
				case 5:
					Yi(t, an, Lr);
					break;
				default:
					throw Error(z(329));
			}
		}
	}
	return hn(t, Ze()), t.callbackNode === n ? cg.bind(null, t) : null;
}
function td(t, e) {
	var n = ll;
	return (
		t.current.memoizedState.isDehydrated && (ns(t, e).flags |= 256),
		(t = Na(t, e)),
		t !== 2 && ((e = an), (an = n), e !== null && nd(e)),
		t
	);
}
function nd(t) {
	an === null ? (an = t) : an.push.apply(an, t);
}
function Cx(t) {
	for (var e = t; ; ) {
		if (e.flags & 16384) {
			var n = e.updateQueue;
			if (n !== null && ((n = n.stores), n !== null))
				for (var r = 0; r < n.length; r++) {
					var i = n[r],
						s = i.getSnapshot;
					i = i.value;
					try {
						if (!fr(s(), i)) return !1;
					} catch {
						return !1;
					}
				}
		}
		if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
			(n.return = e), (e = n);
		else {
			if (e === t) break;
			for (; e.sibling === null; ) {
				if (e.return === null || e.return === t) return !0;
				e = e.return;
			}
			(e.sibling.return = e.return), (e = e.sibling);
		}
	}
	return !0;
}
function ui(t, e) {
	for (
		e &= ~mh,
			e &= ~ic,
			t.suspendedLanes |= e,
			t.pingedLanes &= ~e,
			t = t.expirationTimes;
		0 < e;

	) {
		var n = 31 - ar(e),
			r = 1 << n;
		(t[n] = -1), (e &= ~r);
	}
}
function sm(t) {
	if (_e & 6) throw Error(z(327));
	to();
	var e = ca(t, 0);
	if (!(e & 1)) return hn(t, Ze()), null;
	var n = Na(t, e);
	if (t.tag !== 0 && n === 2) {
		var r = Pf(t);
		r !== 0 && ((e = r), (n = td(t, r)));
	}
	if (n === 1) throw ((n = Il), ns(t, 0), ui(t, e), hn(t, Ze()), n);
	if (n === 6) throw Error(z(345));
	return (
		(t.finishedWork = t.current.alternate),
		(t.finishedLanes = e),
		Yi(t, an, Lr),
		hn(t, Ze()),
		null
	);
}
function gh(t, e) {
	var n = _e;
	_e |= 1;
	try {
		return t(e);
	} finally {
		(_e = n), _e === 0 && ((mo = Ze() + 500), ec && Li());
	}
}
function ms(t) {
	ci !== null && ci.tag === 0 && !(_e & 6) && to();
	var e = _e;
	_e |= 1;
	var n = bn.transition,
		r = xe;
	try {
		if (((bn.transition = null), (xe = 1), t)) return t();
	} finally {
		(xe = r), (bn.transition = n), (_e = e), !(_e & 6) && Li();
	}
}
function vh() {
	(wn = Hs.current), Ne(Hs);
}
function ns(t, e) {
	(t.finishedWork = null), (t.finishedLanes = 0);
	var n = t.timeoutHandle;
	if ((n !== -1 && ((t.timeoutHandle = -1), nx(n)), rt !== null))
		for (n = rt.return; n !== null; ) {
			var r = n;
			switch ((Zd(r), r.tag)) {
				case 1:
					(r = r.type.childContextTypes), r != null && ma();
					break;
				case 3:
					ho(), Ne(fn), Ne(Bt), lh();
					break;
				case 5:
					oh(r);
					break;
				case 4:
					ho();
					break;
				case 13:
					Ne(Ve);
					break;
				case 19:
					Ne(Ve);
					break;
				case 10:
					nh(r.type._context);
					break;
				case 22:
				case 23:
					vh();
			}
			n = n.return;
		}
	if (
		((yt = t),
		(rt = t = Ti(t.current, null)),
		(Ot = wn = e),
		(ft = 0),
		(Il = null),
		(mh = ic = ps = 0),
		(an = ll = null),
		qi !== null)
	) {
		for (e = 0; e < qi.length; e++)
			if (((n = qi[e]), (r = n.interleaved), r !== null)) {
				n.interleaved = null;
				var i = r.next,
					s = n.pending;
				if (s !== null) {
					var o = s.next;
					(s.next = i), (r.next = o);
				}
				n.pending = r;
			}
		qi = null;
	}
	return t;
}
function fg(t, e) {
	do {
		var n = rt;
		try {
			if ((th(), (bu.current = Ta), ka)) {
				for (var r = Be.memoizedState; r !== null; ) {
					var i = r.queue;
					i !== null && (i.pending = null), (r = r.next);
				}
				ka = !1;
			}
			if (
				((hs = 0),
				(gt = at = Be = null),
				(sl = !1),
				(Ll = 0),
				(ph.current = null),
				n === null || n.return === null)
			) {
				(ft = 1), (Il = e), (rt = null);
				break;
			}
			e: {
				var s = t,
					o = n.return,
					l = n,
					u = e;
				if (
					((e = Ot),
					(l.flags |= 32768),
					u !== null && typeof u == 'object' && typeof u.then == 'function')
				) {
					var a = u,
						c = l,
						d = c.tag;
					if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
						var f = c.alternate;
						f
							? ((c.updateQueue = f.updateQueue),
								(c.memoizedState = f.memoizedState),
								(c.lanes = f.lanes))
							: ((c.updateQueue = null), (c.memoizedState = null));
					}
					var h = Yp(o);
					if (h !== null) {
						(h.flags &= -257),
							Qp(h, o, l, s, e),
							h.mode & 1 && Hp(s, a, e),
							(e = h),
							(u = a);
						var g = e.updateQueue;
						if (g === null) {
							var m = new Set();
							m.add(u), (e.updateQueue = m);
						} else g.add(u);
						break e;
					} else {
						if (!(e & 1)) {
							Hp(s, a, e), yh();
							break e;
						}
						u = Error(z(426));
					}
				} else if (Ae && l.mode & 1) {
					var T = Yp(o);
					if (T !== null) {
						!(T.flags & 65536) && (T.flags |= 256),
							Qp(T, o, l, s, e),
							Jd(po(u, l));
						break e;
					}
				}
				(s = u = po(u, l)),
					ft !== 4 && (ft = 2),
					ll === null ? (ll = [s]) : ll.push(s),
					(s = o);
				do {
					switch (s.tag) {
						case 3:
							(s.flags |= 65536), (e &= -e), (s.lanes |= e);
							var _ = X_(s, u, e);
							Ip(s, _);
							break e;
						case 1:
							l = u;
							var p = s.type,
								y = s.stateNode;
							if (
								!(s.flags & 128) &&
								(typeof p.getDerivedStateFromError == 'function' ||
									(y !== null &&
										typeof y.componentDidCatch == 'function' &&
										(Si === null || !Si.has(y))))
							) {
								(s.flags |= 65536), (e &= -e), (s.lanes |= e);
								var x = G_(s, l, e);
								Ip(s, x);
								break e;
							}
					}
					s = s.return;
				} while (s !== null);
			}
			pg(n);
		} catch (k) {
			(e = k), rt === n && n !== null && (rt = n = n.return);
			continue;
		}
		break;
	} while (!0);
}
function dg() {
	var t = Ea.current;
	return (Ea.current = Ta), t === null ? Ta : t;
}
function yh() {
	(ft === 0 || ft === 3 || ft === 2) && (ft = 4),
		yt === null || (!(ps & 268435455) && !(ic & 268435455)) || ui(yt, Ot);
}
function Na(t, e) {
	var n = _e;
	_e |= 2;
	var r = dg();
	(yt !== t || Ot !== e) && ((Lr = null), ns(t, e));
	do
		try {
			Px();
			break;
		} catch (i) {
			fg(t, i);
		}
	while (!0);
	if ((th(), (_e = n), (Ea.current = r), rt !== null)) throw Error(z(261));
	return (yt = null), (Ot = 0), ft;
}
function Px() {
	for (; rt !== null; ) hg(rt);
}
function Nx() {
	for (; rt !== null && !J1(); ) hg(rt);
}
function hg(t) {
	var e = _g(t.alternate, t, wn);
	(t.memoizedProps = t.pendingProps),
		e === null ? pg(t) : (rt = e),
		(ph.current = null);
}
function pg(t) {
	var e = t;
	do {
		var n = e.alternate;
		if (((t = e.return), e.flags & 32768)) {
			if (((n = wx(n, e)), n !== null)) {
				(n.flags &= 32767), (rt = n);
				return;
			}
			if (t !== null)
				(t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null);
			else {
				(ft = 6), (rt = null);
				return;
			}
		} else if (((n = xx(n, e, wn)), n !== null)) {
			rt = n;
			return;
		}
		if (((e = e.sibling), e !== null)) {
			rt = e;
			return;
		}
		rt = e = t;
	} while (e !== null);
	ft === 0 && (ft = 5);
}
function Yi(t, e, n) {
	var r = xe,
		i = bn.transition;
	try {
		(bn.transition = null), (xe = 1), Ox(t, e, n, r);
	} finally {
		(bn.transition = i), (xe = r);
	}
	return null;
}
function Ox(t, e, n, r) {
	do to();
	while (ci !== null);
	if (_e & 6) throw Error(z(327));
	n = t.finishedWork;
	var i = t.finishedLanes;
	if (n === null) return null;
	if (((t.finishedWork = null), (t.finishedLanes = 0), n === t.current))
		throw Error(z(177));
	(t.callbackNode = null), (t.callbackPriority = 0);
	var s = n.lanes | n.childLanes;
	if (
		(ay(t, s),
		t === yt && ((rt = yt = null), (Ot = 0)),
		(!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
			wu ||
			((wu = !0),
			gg(aa, function () {
				return to(), null;
			})),
		(s = (n.flags & 15990) !== 0),
		n.subtreeFlags & 15990 || s)
	) {
		(s = bn.transition), (bn.transition = null);
		var o = xe;
		xe = 1;
		var l = _e;
		(_e |= 4),
			(ph.current = null),
			kx(t, n),
			ug(n, t),
			Gy(Df),
			(fa = !!Rf),
			(Df = Rf = null),
			(t.current = n),
			Tx(n),
			ey(),
			(_e = l),
			(xe = o),
			(bn.transition = s);
	} else t.current = n;
	if (
		(wu && ((wu = !1), (ci = t), (Pa = i)),
		(s = t.pendingLanes),
		s === 0 && (Si = null),
		ry(n.stateNode),
		hn(t, Ze()),
		e !== null)
	)
		for (r = t.onRecoverableError, n = 0; n < e.length; n++)
			(i = e[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
	if (Ca) throw ((Ca = !1), (t = Jf), (Jf = null), t);
	return (
		Pa & 1 && t.tag !== 0 && to(),
		(s = t.pendingLanes),
		s & 1 ? (t === ed ? ul++ : ((ul = 0), (ed = t))) : (ul = 0),
		Li(),
		null
	);
}
function to() {
	if (ci !== null) {
		var t = Q0(Pa),
			e = bn.transition,
			n = xe;
		try {
			if (((bn.transition = null), (xe = 16 > t ? 16 : t), ci === null))
				var r = !1;
			else {
				if (((t = ci), (ci = null), (Pa = 0), _e & 6)) throw Error(z(331));
				var i = _e;
				for (_e |= 4, W = t.current; W !== null; ) {
					var s = W,
						o = s.child;
					if (W.flags & 16) {
						var l = s.deletions;
						if (l !== null) {
							for (var u = 0; u < l.length; u++) {
								var a = l[u];
								for (W = a; W !== null; ) {
									var c = W;
									switch (c.tag) {
										case 0:
										case 11:
										case 15:
											ol(8, c, s);
									}
									var d = c.child;
									if (d !== null) (d.return = c), (W = d);
									else
										for (; W !== null; ) {
											c = W;
											var f = c.sibling,
												h = c.return;
											if ((sg(c), c === a)) {
												W = null;
												break;
											}
											if (f !== null) {
												(f.return = h), (W = f);
												break;
											}
											W = h;
										}
								}
							}
							var g = s.alternate;
							if (g !== null) {
								var m = g.child;
								if (m !== null) {
									g.child = null;
									do {
										var T = m.sibling;
										(m.sibling = null), (m = T);
									} while (m !== null);
								}
							}
							W = s;
						}
					}
					if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (W = o);
					else
						e: for (; W !== null; ) {
							if (((s = W), s.flags & 2048))
								switch (s.tag) {
									case 0:
									case 11:
									case 15:
										ol(9, s, s.return);
								}
							var _ = s.sibling;
							if (_ !== null) {
								(_.return = s.return), (W = _);
								break e;
							}
							W = s.return;
						}
				}
				var p = t.current;
				for (W = p; W !== null; ) {
					o = W;
					var y = o.child;
					if (o.subtreeFlags & 2064 && y !== null) (y.return = o), (W = y);
					else
						e: for (o = p; W !== null; ) {
							if (((l = W), l.flags & 2048))
								try {
									switch (l.tag) {
										case 0:
										case 11:
										case 15:
											rc(9, l);
									}
								} catch (k) {
									Ye(l, l.return, k);
								}
							if (l === o) {
								W = null;
								break e;
							}
							var x = l.sibling;
							if (x !== null) {
								(x.return = l.return), (W = x);
								break e;
							}
							W = l.return;
						}
				}
				if (
					((_e = i), Li(), Er && typeof Er.onPostCommitFiberRoot == 'function')
				)
					try {
						Er.onPostCommitFiberRoot(Ga, t);
					} catch {}
				r = !0;
			}
			return r;
		} finally {
			(xe = n), (bn.transition = e);
		}
	}
	return !1;
}
function om(t, e, n) {
	(e = po(n, e)),
		(e = X_(t, e, 1)),
		(t = wi(t, e, 1)),
		(e = en()),
		t !== null && (Gl(t, 1, e), hn(t, e));
}
function Ye(t, e, n) {
	if (t.tag === 3) om(t, t, n);
	else
		for (; e !== null; ) {
			if (e.tag === 3) {
				om(e, t, n);
				break;
			} else if (e.tag === 1) {
				var r = e.stateNode;
				if (
					typeof e.type.getDerivedStateFromError == 'function' ||
					(typeof r.componentDidCatch == 'function' &&
						(Si === null || !Si.has(r)))
				) {
					(t = po(n, t)),
						(t = G_(e, t, 1)),
						(e = wi(e, t, 1)),
						(t = en()),
						e !== null && (Gl(e, 1, t), hn(e, t));
					break;
				}
			}
			e = e.return;
		}
}
function Mx(t, e, n) {
	var r = t.pingCache;
	r !== null && r.delete(e),
		(e = en()),
		(t.pingedLanes |= t.suspendedLanes & n),
		yt === t &&
			(Ot & n) === n &&
			(ft === 4 || (ft === 3 && (Ot & 130023424) === Ot && 500 > Ze() - _h)
				? ns(t, 0)
				: (mh |= n)),
		hn(t, e);
}
function mg(t, e) {
	e === 0 &&
		(t.mode & 1
			? ((e = fu), (fu <<= 1), !(fu & 130023424) && (fu = 4194304))
			: (e = 1));
	var n = en();
	(t = Xr(t, e)), t !== null && (Gl(t, e, n), hn(t, n));
}
function jx(t) {
	var e = t.memoizedState,
		n = 0;
	e !== null && (n = e.retryLane), mg(t, n);
}
function Rx(t, e) {
	var n = 0;
	switch (t.tag) {
		case 13:
			var r = t.stateNode,
				i = t.memoizedState;
			i !== null && (n = i.retryLane);
			break;
		case 19:
			r = t.stateNode;
			break;
		default:
			throw Error(z(314));
	}
	r !== null && r.delete(e), mg(t, n);
}
var _g;
_g = function (t, e, n) {
	if (t !== null)
		if (t.memoizedProps !== e.pendingProps || fn.current) cn = !0;
		else {
			if (!(t.lanes & n) && !(e.flags & 128)) return (cn = !1), yx(t, e, n);
			cn = !!(t.flags & 131072);
		}
	else (cn = !1), Ae && e.flags & 1048576 && y_(e, va, e.index);
	switch (((e.lanes = 0), e.tag)) {
		case 2:
			var r = e.type;
			Yu(t, e), (t = e.pendingProps);
			var i = ao(e, Bt.current);
			eo(e, n), (i = ah(null, e, r, t, i, n));
			var s = ch();
			return (
				(e.flags |= 1),
				typeof i == 'object' &&
				i !== null &&
				typeof i.render == 'function' &&
				i.$$typeof === void 0
					? ((e.tag = 1),
						(e.memoizedState = null),
						(e.updateQueue = null),
						dn(r) ? ((s = !0), _a(e)) : (s = !1),
						(e.memoizedState =
							i.state !== null && i.state !== void 0 ? i.state : null),
						ih(e),
						(i.updater = tc),
						(e.stateNode = i),
						(i._reactInternals = e),
						Bf(e, r, t, n),
						(e = Hf(null, e, r, !0, s, n)))
					: ((e.tag = 0), Ae && s && qd(e), Yt(null, e, i, n), (e = e.child)),
				e
			);
		case 16:
			r = e.elementType;
			e: {
				switch (
					(Yu(t, e),
					(t = e.pendingProps),
					(i = r._init),
					(r = i(r._payload)),
					(e.type = r),
					(i = e.tag = Ax(r)),
					(t = ir(r, t)),
					i)
				) {
					case 0:
						e = bf(null, e, r, t, n);
						break e;
					case 1:
						e = Kp(null, e, r, t, n);
						break e;
					case 11:
						e = Xp(null, e, r, t, n);
						break e;
					case 14:
						e = Gp(null, e, r, ir(r.type, t), n);
						break e;
				}
				throw Error(z(306, r, ''));
			}
			return e;
		case 0:
			return (
				(r = e.type),
				(i = e.pendingProps),
				(i = e.elementType === r ? i : ir(r, i)),
				bf(t, e, r, i, n)
			);
		case 1:
			return (
				(r = e.type),
				(i = e.pendingProps),
				(i = e.elementType === r ? i : ir(r, i)),
				Kp(t, e, r, i, n)
			);
		case 3:
			e: {
				if ((J_(e), t === null)) throw Error(z(387));
				(r = e.pendingProps),
					(s = e.memoizedState),
					(i = s.element),
					k_(t, e),
					wa(e, r, null, n);
				var o = e.memoizedState;
				if (((r = o.element), s.isDehydrated))
					if (
						((s = {
							element: r,
							isDehydrated: !1,
							cache: o.cache,
							pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
							transitions: o.transitions,
						}),
						(e.updateQueue.baseState = s),
						(e.memoizedState = s),
						e.flags & 256)
					) {
						(i = po(Error(z(423)), e)), (e = qp(t, e, r, n, i));
						break e;
					} else if (r !== i) {
						(i = po(Error(z(424)), e)), (e = qp(t, e, r, n, i));
						break e;
					} else
						for (
							Cn = xi(e.stateNode.containerInfo.firstChild),
								Nn = e,
								Ae = !0,
								or = null,
								n = P_(e, null, r, n),
								e.child = n;
							n;

						)
							(n.flags = (n.flags & -3) | 4096), (n = n.sibling);
				else {
					if ((co(), r === i)) {
						e = Gr(t, e, n);
						break e;
					}
					Yt(t, e, r, n);
				}
				e = e.child;
			}
			return e;
		case 5:
			return (
				N_(e),
				t === null && Vf(e),
				(r = e.type),
				(i = e.pendingProps),
				(s = t !== null ? t.memoizedProps : null),
				(o = i.children),
				Af(r, i) ? (o = null) : s !== null && Af(r, s) && (e.flags |= 32),
				Z_(t, e),
				Yt(t, e, o, n),
				e.child
			);
		case 6:
			return t === null && Vf(e), null;
		case 13:
			return eg(t, e, n);
		case 4:
			return (
				sh(e, e.stateNode.containerInfo),
				(r = e.pendingProps),
				t === null ? (e.child = fo(e, null, r, n)) : Yt(t, e, r, n),
				e.child
			);
		case 11:
			return (
				(r = e.type),
				(i = e.pendingProps),
				(i = e.elementType === r ? i : ir(r, i)),
				Xp(t, e, r, i, n)
			);
		case 7:
			return Yt(t, e, e.pendingProps, n), e.child;
		case 8:
			return Yt(t, e, e.pendingProps.children, n), e.child;
		case 12:
			return Yt(t, e, e.pendingProps.children, n), e.child;
		case 10:
			e: {
				if (
					((r = e.type._context),
					(i = e.pendingProps),
					(s = e.memoizedProps),
					(o = i.value),
					Te(ya, r._currentValue),
					(r._currentValue = o),
					s !== null)
				)
					if (fr(s.value, o)) {
						if (s.children === i.children && !fn.current) {
							e = Gr(t, e, n);
							break e;
						}
					} else
						for (s = e.child, s !== null && (s.return = e); s !== null; ) {
							var l = s.dependencies;
							if (l !== null) {
								o = s.child;
								for (var u = l.firstContext; u !== null; ) {
									if (u.context === r) {
										if (s.tag === 1) {
											(u = br(-1, n & -n)), (u.tag = 2);
											var a = s.updateQueue;
											if (a !== null) {
												a = a.shared;
												var c = a.pending;
												c === null
													? (u.next = u)
													: ((u.next = c.next), (c.next = u)),
													(a.pending = u);
											}
										}
										(s.lanes |= n),
											(u = s.alternate),
											u !== null && (u.lanes |= n),
											$f(s.return, n, e),
											(l.lanes |= n);
										break;
									}
									u = u.next;
								}
							} else if (s.tag === 10) o = s.type === e.type ? null : s.child;
							else if (s.tag === 18) {
								if (((o = s.return), o === null)) throw Error(z(341));
								(o.lanes |= n),
									(l = o.alternate),
									l !== null && (l.lanes |= n),
									$f(o, n, e),
									(o = s.sibling);
							} else o = s.child;
							if (o !== null) o.return = s;
							else
								for (o = s; o !== null; ) {
									if (o === e) {
										o = null;
										break;
									}
									if (((s = o.sibling), s !== null)) {
										(s.return = o.return), (o = s);
										break;
									}
									o = o.return;
								}
							s = o;
						}
				Yt(t, e, i.children, n), (e = e.child);
			}
			return e;
		case 9:
			return (
				(i = e.type),
				(r = e.pendingProps.children),
				eo(e, n),
				(i = Yn(i)),
				(r = r(i)),
				(e.flags |= 1),
				Yt(t, e, r, n),
				e.child
			);
		case 14:
			return (
				(r = e.type),
				(i = ir(r, e.pendingProps)),
				(i = ir(r.type, i)),
				Gp(t, e, r, i, n)
			);
		case 15:
			return K_(t, e, e.type, e.pendingProps, n);
		case 17:
			return (
				(r = e.type),
				(i = e.pendingProps),
				(i = e.elementType === r ? i : ir(r, i)),
				Yu(t, e),
				(e.tag = 1),
				dn(r) ? ((t = !0), _a(e)) : (t = !1),
				eo(e, n),
				E_(e, r, i),
				Bf(e, r, i, n),
				Hf(null, e, r, !0, t, n)
			);
		case 19:
			return tg(t, e, n);
		case 22:
			return q_(t, e, n);
	}
	throw Error(z(156, e.tag));
};
function gg(t, e) {
	return W0(t, e);
}
function Dx(t, e, n, r) {
	(this.tag = t),
		(this.key = n),
		(this.sibling =
			this.child =
			this.return =
			this.stateNode =
			this.type =
			this.elementType =
				null),
		(this.index = 0),
		(this.ref = null),
		(this.pendingProps = e),
		(this.dependencies =
			this.memoizedState =
			this.updateQueue =
			this.memoizedProps =
				null),
		(this.mode = r),
		(this.subtreeFlags = this.flags = 0),
		(this.deletions = null),
		(this.childLanes = this.lanes = 0),
		(this.alternate = null);
}
function Un(t, e, n, r) {
	return new Dx(t, e, n, r);
}
function xh(t) {
	return (t = t.prototype), !(!t || !t.isReactComponent);
}
function Ax(t) {
	if (typeof t == 'function') return xh(t) ? 1 : 0;
	if (t != null) {
		if (((t = t.$$typeof), t === Vd)) return 11;
		if (t === $d) return 14;
	}
	return 2;
}
function Ti(t, e) {
	var n = t.alternate;
	return (
		n === null
			? ((n = Un(t.tag, e, t.key, t.mode)),
				(n.elementType = t.elementType),
				(n.type = t.type),
				(n.stateNode = t.stateNode),
				(n.alternate = t),
				(t.alternate = n))
			: ((n.pendingProps = e),
				(n.type = t.type),
				(n.flags = 0),
				(n.subtreeFlags = 0),
				(n.deletions = null)),
		(n.flags = t.flags & 14680064),
		(n.childLanes = t.childLanes),
		(n.lanes = t.lanes),
		(n.child = t.child),
		(n.memoizedProps = t.memoizedProps),
		(n.memoizedState = t.memoizedState),
		(n.updateQueue = t.updateQueue),
		(e = t.dependencies),
		(n.dependencies =
			e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
		(n.sibling = t.sibling),
		(n.index = t.index),
		(n.ref = t.ref),
		n
	);
}
function Gu(t, e, n, r, i, s) {
	var o = 2;
	if (((r = t), typeof t == 'function')) xh(t) && (o = 1);
	else if (typeof t == 'string') o = 5;
	else
		e: switch (t) {
			case Ls:
				return rs(n.children, i, s, e);
			case Id:
				(o = 8), (i |= 8);
				break;
			case df:
				return (
					(t = Un(12, n, e, i | 2)), (t.elementType = df), (t.lanes = s), t
				);
			case hf:
				return (t = Un(13, n, e, i)), (t.elementType = hf), (t.lanes = s), t;
			case pf:
				return (t = Un(19, n, e, i)), (t.elementType = pf), (t.lanes = s), t;
			case C0:
				return sc(n, i, s, e);
			default:
				if (typeof t == 'object' && t !== null)
					switch (t.$$typeof) {
						case T0:
							o = 10;
							break e;
						case E0:
							o = 9;
							break e;
						case Vd:
							o = 11;
							break e;
						case $d:
							o = 14;
							break e;
						case si:
							(o = 16), (r = null);
							break e;
					}
				throw Error(z(130, t == null ? t : typeof t, ''));
		}
	return (
		(e = Un(o, n, e, i)), (e.elementType = t), (e.type = r), (e.lanes = s), e
	);
}
function rs(t, e, n, r) {
	return (t = Un(7, t, r, e)), (t.lanes = n), t;
}
function sc(t, e, n, r) {
	return (
		(t = Un(22, t, r, e)),
		(t.elementType = C0),
		(t.lanes = n),
		(t.stateNode = { isHidden: !1 }),
		t
	);
}
function $c(t, e, n) {
	return (t = Un(6, t, null, e)), (t.lanes = n), t;
}
function Uc(t, e, n) {
	return (
		(e = Un(4, t.children !== null ? t.children : [], t.key, e)),
		(e.lanes = n),
		(e.stateNode = {
			containerInfo: t.containerInfo,
			pendingChildren: null,
			implementation: t.implementation,
		}),
		e
	);
}
function Lx(t, e, n, r, i) {
	(this.tag = e),
		(this.containerInfo = t),
		(this.finishedWork =
			this.pingCache =
			this.current =
			this.pendingChildren =
				null),
		(this.timeoutHandle = -1),
		(this.callbackNode = this.pendingContext = this.context = null),
		(this.callbackPriority = 0),
		(this.eventTimes = wc(0)),
		(this.expirationTimes = wc(-1)),
		(this.entangledLanes =
			this.finishedLanes =
			this.mutableReadLanes =
			this.expiredLanes =
			this.pingedLanes =
			this.suspendedLanes =
			this.pendingLanes =
				0),
		(this.entanglements = wc(0)),
		(this.identifierPrefix = r),
		(this.onRecoverableError = i),
		(this.mutableSourceEagerHydrationData = null);
}
function wh(t, e, n, r, i, s, o, l, u) {
	return (
		(t = new Lx(t, e, n, l, u)),
		e === 1 ? ((e = 1), s === !0 && (e |= 8)) : (e = 0),
		(s = Un(3, null, null, e)),
		(t.current = s),
		(s.stateNode = t),
		(s.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: null,
			transitions: null,
			pendingSuspenseBoundaries: null,
		}),
		ih(s),
		t
	);
}
function zx(t, e, n) {
	var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
	return {
		$$typeof: As,
		key: r == null ? null : '' + r,
		children: t,
		containerInfo: e,
		implementation: n,
	};
}
function vg(t) {
	if (!t) return Oi;
	t = t._reactInternals;
	e: {
		if (Ss(t) !== t || t.tag !== 1) throw Error(z(170));
		var e = t;
		do {
			switch (e.tag) {
				case 3:
					e = e.stateNode.context;
					break e;
				case 1:
					if (dn(e.type)) {
						e = e.stateNode.__reactInternalMemoizedMergedChildContext;
						break e;
					}
			}
			e = e.return;
		} while (e !== null);
		throw Error(z(171));
	}
	if (t.tag === 1) {
		var n = t.type;
		if (dn(n)) return g_(t, n, e);
	}
	return e;
}
function yg(t, e, n, r, i, s, o, l, u) {
	return (
		(t = wh(n, r, !0, t, i, s, o, l, u)),
		(t.context = vg(null)),
		(n = t.current),
		(r = en()),
		(i = ki(n)),
		(s = br(r, i)),
		(s.callback = e ?? null),
		wi(n, s, i),
		(t.current.lanes = i),
		Gl(t, i, r),
		hn(t, r),
		t
	);
}
function oc(t, e, n, r) {
	var i = e.current,
		s = en(),
		o = ki(i);
	return (
		(n = vg(n)),
		e.context === null ? (e.context = n) : (e.pendingContext = n),
		(e = br(s, o)),
		(e.payload = { element: t }),
		(r = r === void 0 ? null : r),
		r !== null && (e.callback = r),
		(t = wi(i, e, o)),
		t !== null && (cr(t, i, o, s), Wu(t, i, o)),
		o
	);
}
function Oa(t) {
	if (((t = t.current), !t.child)) return null;
	switch (t.child.tag) {
		case 5:
			return t.child.stateNode;
		default:
			return t.child.stateNode;
	}
}
function lm(t, e) {
	if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
		var n = t.retryLane;
		t.retryLane = n !== 0 && n < e ? n : e;
	}
}
function Sh(t, e) {
	lm(t, e), (t = t.alternate) && lm(t, e);
}
function Fx() {
	return null;
}
var xg =
	typeof reportError == 'function'
		? reportError
		: function (t) {
				console.error(t);
			};
function kh(t) {
	this._internalRoot = t;
}
lc.prototype.render = kh.prototype.render = function (t) {
	var e = this._internalRoot;
	if (e === null) throw Error(z(409));
	oc(t, e, null, null);
};
lc.prototype.unmount = kh.prototype.unmount = function () {
	var t = this._internalRoot;
	if (t !== null) {
		this._internalRoot = null;
		var e = t.containerInfo;
		ms(function () {
			oc(null, t, null, null);
		}),
			(e[Qr] = null);
	}
};
function lc(t) {
	this._internalRoot = t;
}
lc.prototype.unstable_scheduleHydration = function (t) {
	if (t) {
		var e = K0();
		t = { blockedOn: null, target: t, priority: e };
		for (var n = 0; n < li.length && e !== 0 && e < li[n].priority; n++);
		li.splice(n, 0, t), n === 0 && Z0(t);
	}
};
function Th(t) {
	return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
}
function uc(t) {
	return !(
		!t ||
		(t.nodeType !== 1 &&
			t.nodeType !== 9 &&
			t.nodeType !== 11 &&
			(t.nodeType !== 8 || t.nodeValue !== ' react-mount-point-unstable '))
	);
}
function um() {}
function Ix(t, e, n, r, i) {
	if (i) {
		if (typeof r == 'function') {
			var s = r;
			r = function () {
				var a = Oa(o);
				s.call(a);
			};
		}
		var o = yg(e, r, t, 0, null, !1, !1, '', um);
		return (
			(t._reactRootContainer = o),
			(t[Qr] = o.current),
			Ml(t.nodeType === 8 ? t.parentNode : t),
			ms(),
			o
		);
	}
	for (; (i = t.lastChild); ) t.removeChild(i);
	if (typeof r == 'function') {
		var l = r;
		r = function () {
			var a = Oa(u);
			l.call(a);
		};
	}
	var u = wh(t, 0, !1, null, null, !1, !1, '', um);
	return (
		(t._reactRootContainer = u),
		(t[Qr] = u.current),
		Ml(t.nodeType === 8 ? t.parentNode : t),
		ms(function () {
			oc(e, u, n, r);
		}),
		u
	);
}
function ac(t, e, n, r, i) {
	var s = n._reactRootContainer;
	if (s) {
		var o = s;
		if (typeof i == 'function') {
			var l = i;
			i = function () {
				var u = Oa(o);
				l.call(u);
			};
		}
		oc(e, o, t, i);
	} else o = Ix(n, e, t, i, r);
	return Oa(o);
}
X0 = function (t) {
	switch (t.tag) {
		case 3:
			var e = t.stateNode;
			if (e.current.memoizedState.isDehydrated) {
				var n = Ho(e.pendingLanes);
				n !== 0 &&
					(Wd(e, n | 1), hn(e, Ze()), !(_e & 6) && ((mo = Ze() + 500), Li()));
			}
			break;
		case 13:
			ms(function () {
				var r = Xr(t, 1);
				if (r !== null) {
					var i = en();
					cr(r, t, 1, i);
				}
			}),
				Sh(t, 1);
	}
};
bd = function (t) {
	if (t.tag === 13) {
		var e = Xr(t, 134217728);
		if (e !== null) {
			var n = en();
			cr(e, t, 134217728, n);
		}
		Sh(t, 134217728);
	}
};
G0 = function (t) {
	if (t.tag === 13) {
		var e = ki(t),
			n = Xr(t, e);
		if (n !== null) {
			var r = en();
			cr(n, t, e, r);
		}
		Sh(t, e);
	}
};
K0 = function () {
	return xe;
};
q0 = function (t, e) {
	var n = xe;
	try {
		return (xe = t), e();
	} finally {
		xe = n;
	}
};
Tf = function (t, e, n) {
	switch (e) {
		case 'input':
			if ((gf(t, n), (e = n.name), n.type === 'radio' && e != null)) {
				for (n = t; n.parentNode; ) n = n.parentNode;
				for (
					n = n.querySelectorAll(
						'input[name=' + JSON.stringify('' + e) + '][type="radio"]',
					),
						e = 0;
					e < n.length;
					e++
				) {
					var r = n[e];
					if (r !== t && r.form === t.form) {
						var i = Ja(r);
						if (!i) throw Error(z(90));
						N0(r), gf(r, i);
					}
				}
			}
			break;
		case 'textarea':
			M0(t, n);
			break;
		case 'select':
			(e = n.value), e != null && Ks(t, !!n.multiple, e, !1);
	}
};
F0 = gh;
I0 = ms;
var Vx = { usingClientEntryPoint: !1, Events: [ql, Vs, Ja, L0, z0, gh] },
	Fo = {
		findFiberByHostInstance: Ki,
		bundleType: 0,
		version: '18.2.0',
		rendererPackageName: 'react-dom',
	},
	$x = {
		bundleType: Fo.bundleType,
		version: Fo.version,
		rendererPackageName: Fo.rendererPackageName,
		rendererConfig: Fo.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: Zr.ReactCurrentDispatcher,
		findHostInstanceByFiber: function (t) {
			return (t = U0(t)), t === null ? null : t.stateNode;
		},
		findFiberByHostInstance: Fo.findFiberByHostInstance || Fx,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
	};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
	var Su = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	if (!Su.isDisabled && Su.supportsFiber)
		try {
			(Ga = Su.inject($x)), (Er = Su);
		} catch {}
}
Rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vx;
Rn.createPortal = function (t, e) {
	var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
	if (!Th(e)) throw Error(z(200));
	return zx(t, e, null, n);
};
Rn.createRoot = function (t, e) {
	if (!Th(t)) throw Error(z(299));
	var n = !1,
		r = '',
		i = xg;
	return (
		e != null &&
			(e.unstable_strictMode === !0 && (n = !0),
			e.identifierPrefix !== void 0 && (r = e.identifierPrefix),
			e.onRecoverableError !== void 0 && (i = e.onRecoverableError)),
		(e = wh(t, 1, !1, null, null, n, !1, r, i)),
		(t[Qr] = e.current),
		Ml(t.nodeType === 8 ? t.parentNode : t),
		new kh(e)
	);
};
Rn.findDOMNode = function (t) {
	if (t == null) return null;
	if (t.nodeType === 1) return t;
	var e = t._reactInternals;
	if (e === void 0)
		throw typeof t.render == 'function'
			? Error(z(188))
			: ((t = Object.keys(t).join(',')), Error(z(268, t)));
	return (t = U0(e)), (t = t === null ? null : t.stateNode), t;
};
Rn.flushSync = function (t) {
	return ms(t);
};
Rn.hydrate = function (t, e, n) {
	if (!uc(e)) throw Error(z(200));
	return ac(null, t, e, !0, n);
};
Rn.hydrateRoot = function (t, e, n) {
	if (!Th(t)) throw Error(z(405));
	var r = (n != null && n.hydratedSources) || null,
		i = !1,
		s = '',
		o = xg;
	if (
		(n != null &&
			(n.unstable_strictMode === !0 && (i = !0),
			n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
			n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
		(e = yg(e, null, t, 1, n ?? null, i, !1, s, o)),
		(t[Qr] = e.current),
		Ml(t),
		r)
	)
		for (t = 0; t < r.length; t++)
			(n = r[t]),
				(i = n._getVersion),
				(i = i(n._source)),
				e.mutableSourceEagerHydrationData == null
					? (e.mutableSourceEagerHydrationData = [n, i])
					: e.mutableSourceEagerHydrationData.push(n, i);
	return new lc(e);
};
Rn.render = function (t, e, n) {
	if (!uc(e)) throw Error(z(200));
	return ac(null, t, e, !1, n);
};
Rn.unmountComponentAtNode = function (t) {
	if (!uc(t)) throw Error(z(40));
	return t._reactRootContainer
		? (ms(function () {
				ac(null, null, t, !1, function () {
					(t._reactRootContainer = null), (t[Qr] = null);
				});
			}),
			!0)
		: !1;
};
Rn.unstable_batchedUpdates = gh;
Rn.unstable_renderSubtreeIntoContainer = function (t, e, n, r) {
	if (!uc(n)) throw Error(z(200));
	if (t == null || t._reactInternals === void 0) throw Error(z(38));
	return ac(t, e, n, !1, r);
};
Rn.version = '18.2.0-next-9e3b772b8-20220608';
function wg() {
	if (
		!(
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
		)
	)
		try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wg);
		} catch (t) {
			console.error(t);
		}
}
wg(), (y0.exports = Rn);
var Ux = y0.exports,
	am = Ux;
(cf.createRoot = am.createRoot), (cf.hydrateRoot = am.hydrateRoot);
var cm =
		typeof window < 'u' &&
		new (class {
			constructor() {
				(this.raf = (t) => {
					requestAnimationFrame(this.raf);
					const e = t - this.now;
					this.now = t;
					for (let n = 0; n < this.callbacks.length; n++)
						this.callbacks[n].callback(t, e);
				}),
					(this.callbacks = []),
					(this.now = performance.now()),
					requestAnimationFrame(this.raf);
			}
			add(t, e = 0) {
				return (
					this.callbacks.push({ callback: t, priority: e }),
					this.callbacks.sort((n, r) => n.priority - r.priority),
					() => this.remove(t)
				);
			}
			remove(t) {
				this.callbacks = this.callbacks.filter(({ callback: e }) => t !== e);
			}
		})(),
	Bx = {
		BASE_URL: '/sample-site/',
		MODE: 'production',
		DEV: !1,
		PROD: !0,
		SSR: !1,
	};
const fm = (t) => {
		let e;
		const n = new Set(),
			r = (c, d) => {
				const f = typeof c == 'function' ? c(e) : c;
				if (!Object.is(f, e)) {
					const h = e;
					(e =
						d ?? (typeof f != 'object' || f === null)
							? f
							: Object.assign({}, e, f)),
						n.forEach((g) => g(e, h));
				}
			},
			i = () => e,
			u = {
				setState: r,
				getState: i,
				getInitialState: () => a,
				subscribe: (c) => (n.add(c), () => n.delete(c)),
				destroy: () => {
					(Bx ? 'production' : void 0) !== 'production' &&
						console.warn(
							'[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected.',
						),
						n.clear();
				},
			},
			a = (e = t(r, i, u));
		return u;
	},
	Wx = (t) => (t ? fm(t) : fm);
var Sg = { exports: {} },
	kg = {},
	Tg = { exports: {} },
	Eg = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _o = te;
function bx(t, e) {
	return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
}
var Hx = typeof Object.is == 'function' ? Object.is : bx,
	Yx = _o.useState,
	Qx = _o.useEffect,
	Xx = _o.useLayoutEffect,
	Gx = _o.useDebugValue;
function Kx(t, e) {
	var n = e(),
		r = Yx({ inst: { value: n, getSnapshot: e } }),
		i = r[0].inst,
		s = r[1];
	return (
		Xx(
			function () {
				(i.value = n), (i.getSnapshot = e), Bc(i) && s({ inst: i });
			},
			[t, n, e],
		),
		Qx(
			function () {
				return (
					Bc(i) && s({ inst: i }),
					t(function () {
						Bc(i) && s({ inst: i });
					})
				);
			},
			[t],
		),
		Gx(n),
		n
	);
}
function Bc(t) {
	var e = t.getSnapshot;
	t = t.value;
	try {
		var n = e();
		return !Hx(t, n);
	} catch {
		return !0;
	}
}
function qx(t, e) {
	return e();
}
var Zx =
	typeof window > 'u' ||
	typeof window.document > 'u' ||
	typeof window.document.createElement > 'u'
		? qx
		: Kx;
Eg.useSyncExternalStore =
	_o.useSyncExternalStore !== void 0 ? _o.useSyncExternalStore : Zx;
Tg.exports = Eg;
var Jx = Tg.exports;
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cc = te,
	ew = Jx;
function tw(t, e) {
	return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
}
var nw = typeof Object.is == 'function' ? Object.is : tw,
	rw = ew.useSyncExternalStore,
	iw = cc.useRef,
	sw = cc.useEffect,
	ow = cc.useMemo,
	lw = cc.useDebugValue;
kg.useSyncExternalStoreWithSelector = function (t, e, n, r, i) {
	var s = iw(null);
	if (s.current === null) {
		var o = { hasValue: !1, value: null };
		s.current = o;
	} else o = s.current;
	s = ow(
		function () {
			function u(h) {
				if (!a) {
					if (((a = !0), (c = h), (h = r(h)), i !== void 0 && o.hasValue)) {
						var g = o.value;
						if (i(g, h)) return (d = g);
					}
					return (d = h);
				}
				if (((g = d), nw(c, h))) return g;
				var m = r(h);
				return i !== void 0 && i(g, m) ? g : ((c = h), (d = m));
			}
			var a = !1,
				c,
				d,
				f = n === void 0 ? null : n;
			return [
				function () {
					return u(e());
				},
				f === null
					? void 0
					: function () {
							return u(f());
						},
			];
		},
		[e, n, r, i],
	);
	var l = rw(t, s[0], s[1]);
	return (
		sw(
			function () {
				(o.hasValue = !0), (o.value = l);
			},
			[l],
		),
		lw(l),
		l
	);
};
Sg.exports = kg;
var uw = Sg.exports;
const aw = Md(uw);
var Cg = {
	BASE_URL: '/sample-site/',
	MODE: 'production',
	DEV: !1,
	PROD: !0,
	SSR: !1,
};
const { useDebugValue: cw } = ut,
	{ useSyncExternalStoreWithSelector: fw } = aw;
let dm = !1;
const dw = (t) => t;
function hw(t, e = dw, n) {
	(Cg ? 'production' : void 0) !== 'production' &&
		n &&
		!dm &&
		(console.warn(
			"[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937",
		),
		(dm = !0));
	const r = fw(
		t.subscribe,
		t.getState,
		t.getServerState || t.getInitialState,
		e,
		n,
	);
	return cw(r), r;
}
const hm = (t) => {
		(Cg ? 'production' : void 0) !== 'production' &&
			typeof t != 'function' &&
			console.warn(
				"[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.",
			);
		const e = typeof t == 'function' ? Wx(t) : t,
			n = (r, i) => hw(e, r, i);
		return Object.assign(n, e), n;
	},
	Pg = (t) => (t ? hm(t) : hm);
function pw(t, e = 0) {
	te.useEffect(() => {
		if (t) return cm.add(t, e), () => cm.remove(t);
	}, [t, e]);
}
Pg((t) => ({
	elements: [],
	addElement: (e) => {
		t((n) => ({ elements: [...n.elements, e] }));
	},
	removeElement: (e) => {
		t((n) => ({ elements: n.elements.filter((r) => r !== e) }));
	},
}));
function Ma(t, e, n) {
	return Math.max(t, Math.min(e, n));
}
class mw {
	advance(e) {
		var l;
		if (!this.isRunning) return;
		let n = !1;
		if (this.lerp)
			(this.value =
				((r = this.value),
				(i = this.to),
				(s = 60 * this.lerp),
				(o = e),
				(function (u, a, c) {
					return (1 - c) * u + c * a;
				})(r, i, 1 - Math.exp(-s * o)))),
				Math.round(this.value) === this.to &&
					((this.value = this.to), (n = !0));
		else {
			this.currentTime += e;
			const u = Ma(0, this.currentTime / this.duration, 1);
			n = u >= 1;
			const a = n ? 1 : this.easing(u);
			this.value = this.from + (this.to - this.from) * a;
		}
		var r, i, s, o;
		(l = this.onUpdate) == null || l.call(this, this.value, n),
			n && this.stop();
	}
	stop() {
		this.isRunning = !1;
	}
	fromTo(
		e,
		n,
		{
			lerp: r = 0.1,
			duration: i = 1,
			easing: s = (u) => u,
			onStart: o,
			onUpdate: l,
		},
	) {
		(this.from = this.value = e),
			(this.to = n),
			(this.lerp = r),
			(this.duration = i),
			(this.easing = s),
			(this.currentTime = 0),
			(this.isRunning = !0),
			o == null || o(),
			(this.onUpdate = l);
	}
}
class _w {
	constructor({ wrapper: e, content: n, autoResize: r = !0 } = {}) {
		mr(this, 'resize', () => {
			this.onWrapperResize(), this.onContentResize();
		});
		mr(this, 'onWrapperResize', () => {
			this.wrapper === window
				? ((this.width = window.innerWidth), (this.height = window.innerHeight))
				: ((this.width = this.wrapper.clientWidth),
					(this.height = this.wrapper.clientHeight));
		});
		mr(this, 'onContentResize', () => {
			(this.scrollHeight = this.content.scrollHeight),
				(this.scrollWidth = this.content.scrollWidth);
		});
		if (((this.wrapper = e), (this.content = n), r)) {
			const i = (function (s, o) {
				let l;
				return function () {
					let u = arguments,
						a = this;
					clearTimeout(l),
						(l = setTimeout(function () {
							s.apply(a, u);
						}, o));
				};
			})(this.resize, 250);
			this.wrapper !== window &&
				((this.wrapperResizeObserver = new ResizeObserver(i)),
				this.wrapperResizeObserver.observe(this.wrapper)),
				(this.contentResizeObserver = new ResizeObserver(i)),
				this.contentResizeObserver.observe(this.content);
		}
		this.resize();
	}
	destroy() {
		var e, n;
		(e = this.wrapperResizeObserver) == null || e.disconnect(),
			(n = this.contentResizeObserver) == null || n.disconnect();
	}
	get limit() {
		return {
			x: this.scrollWidth - this.width,
			y: this.scrollHeight - this.height,
		};
	}
}
class Ng {
	constructor() {
		this.events = {};
	}
	emit(e, ...n) {
		let r = this.events[e] || [];
		for (let i = 0, s = r.length; i < s; i++) r[i](...n);
	}
	on(e, n) {
		var r;
		return (
			((r = this.events[e]) != null && r.push(n)) || (this.events[e] = [n]),
			() => {
				var i;
				this.events[e] =
					(i = this.events[e]) == null ? void 0 : i.filter((s) => n !== s);
			}
		);
	}
	off(e, n) {
		var r;
		this.events[e] =
			(r = this.events[e]) == null ? void 0 : r.filter((i) => n !== i);
	}
	destroy() {
		this.events = {};
	}
}
class gw {
	constructor(
		e,
		{ wheelMultiplier: n = 1, touchMultiplier: r = 2, normalizeWheel: i = !1 },
	) {
		mr(this, 'onTouchStart', (e) => {
			const { clientX: n, clientY: r } = e.targetTouches
				? e.targetTouches[0]
				: e;
			(this.touchStart.x = n),
				(this.touchStart.y = r),
				(this.lastDelta = { x: 0, y: 0 }),
				this.emitter.emit('scroll', { deltaX: 0, deltaY: 0, event: e });
		});
		mr(this, 'onTouchMove', (e) => {
			const { clientX: n, clientY: r } = e.targetTouches
					? e.targetTouches[0]
					: e,
				i = -(n - this.touchStart.x) * this.touchMultiplier,
				s = -(r - this.touchStart.y) * this.touchMultiplier;
			(this.touchStart.x = n),
				(this.touchStart.y = r),
				(this.lastDelta = { x: i, y: s }),
				this.emitter.emit('scroll', { deltaX: i, deltaY: s, event: e });
		});
		mr(this, 'onTouchEnd', (e) => {
			this.emitter.emit('scroll', {
				deltaX: this.lastDelta.x,
				deltaY: this.lastDelta.y,
				event: e,
			});
		});
		mr(this, 'onWheel', (e) => {
			let { deltaX: n, deltaY: r } = e;
			this.normalizeWheel && ((n = Ma(-100, n, 100)), (r = Ma(-100, r, 100))),
				(n *= this.wheelMultiplier),
				(r *= this.wheelMultiplier),
				this.emitter.emit('scroll', { deltaX: n, deltaY: r, event: e });
		});
		(this.element = e),
			(this.wheelMultiplier = n),
			(this.touchMultiplier = r),
			(this.normalizeWheel = i),
			(this.touchStart = { x: null, y: null }),
			(this.emitter = new Ng()),
			this.element.addEventListener('wheel', this.onWheel, { passive: !1 }),
			this.element.addEventListener('touchstart', this.onTouchStart, {
				passive: !1,
			}),
			this.element.addEventListener('touchmove', this.onTouchMove, {
				passive: !1,
			}),
			this.element.addEventListener('touchend', this.onTouchEnd, {
				passive: !1,
			});
	}
	on(e, n) {
		return this.emitter.on(e, n);
	}
	destroy() {
		this.emitter.destroy(),
			this.element.removeEventListener('wheel', this.onWheel, { passive: !1 }),
			this.element.removeEventListener('touchstart', this.onTouchStart, {
				passive: !1,
			}),
			this.element.removeEventListener('touchmove', this.onTouchMove, {
				passive: !1,
			}),
			this.element.removeEventListener('touchend', this.onTouchEnd, {
				passive: !1,
			});
	}
}
class vw {
	constructor({
		wrapper: e = window,
		content: n = document.documentElement,
		wheelEventsTarget: r = e,
		eventsTarget: i = r,
		smoothWheel: s = !0,
		syncTouch: o = !1,
		syncTouchLerp: l = 0.075,
		touchInertiaMultiplier: u = 35,
		duration: a,
		easing: c = (y) => Math.min(1, 1.001 - Math.pow(2, -10 * y)),
		lerp: d = !a && 0.1,
		infinite: f = !1,
		orientation: h = 'vertical',
		gestureOrientation: g = 'vertical',
		touchMultiplier: m = 1,
		wheelMultiplier: T = 1,
		normalizeWheel: _ = !1,
		autoResize: p = !0,
	} = {}) {
		mr(this, 'onVirtualScroll', ({ deltaX: e, deltaY: n, event: r }) => {
			if (r.ctrlKey) return;
			const i = r.type.includes('touch'),
				s = r.type.includes('wheel');
			if (this.options.syncTouch && i && r.type === 'touchstart')
				return void this.reset();
			const o = e === 0 && n === 0,
				l =
					(this.options.gestureOrientation === 'vertical' && n === 0) ||
					(this.options.gestureOrientation === 'horizontal' && e === 0);
			if (o || l) return;
			let u = r.composedPath();
			if (
				((u = u.slice(0, u.indexOf(this.rootElement))),
				u.find((f) => {
					var h, g, m, T;
					return (
						((h = f.hasAttribute) == null
							? void 0
							: h.call(f, 'data-lenis-prevent')) ||
						(i &&
							((g = f.hasAttribute) == null
								? void 0
								: g.call(f, 'data-lenis-prevent-touch'))) ||
						(s &&
							((m = f.hasAttribute) == null
								? void 0
								: m.call(f, 'data-lenis-prevent-wheel'))) ||
						((T = f.classList) == null ? void 0 : T.contains('lenis'))
					);
				}))
			)
				return;
			if (this.isStopped || this.isLocked) return void r.preventDefault();
			if (
				((this.isSmooth =
					(this.options.syncTouch && i) || (this.options.smoothWheel && s)),
				!this.isSmooth)
			)
				return (this.isScrolling = !1), void this.animate.stop();
			r.preventDefault();
			let a = n;
			this.options.gestureOrientation === 'both'
				? (a = Math.abs(n) > Math.abs(e) ? n : e)
				: this.options.gestureOrientation === 'horizontal' && (a = e);
			const c = i && this.options.syncTouch,
				d = i && r.type === 'touchend' && Math.abs(a) > 5;
			d && (a = this.velocity * this.options.touchInertiaMultiplier),
				this.scrollTo(this.targetScroll + a, {
					programmatic: !1,
					...(c
						? { lerp: d ? this.options.syncTouchLerp : 1 }
						: {
								lerp: this.options.lerp,
								duration: this.options.duration,
								easing: this.options.easing,
							}),
				});
		});
		mr(this, 'onNativeScroll', () => {
			if (!this.__preventNextScrollEvent && !this.isScrolling) {
				const e = this.animatedScroll;
				(this.animatedScroll = this.targetScroll = this.actualScroll),
					(this.velocity = 0),
					(this.direction = Math.sign(this.animatedScroll - e)),
					this.emit();
			}
		});
		(window.lenisVersion = '1.0.34'),
			(e !== document.documentElement && e !== document.body) || (e = window),
			(this.options = {
				wrapper: e,
				content: n,
				wheelEventsTarget: r,
				eventsTarget: i,
				smoothWheel: s,
				syncTouch: o,
				syncTouchLerp: l,
				touchInertiaMultiplier: u,
				duration: a,
				easing: c,
				lerp: d,
				infinite: f,
				gestureOrientation: g,
				orientation: h,
				touchMultiplier: m,
				wheelMultiplier: T,
				normalizeWheel: _,
				autoResize: p,
			}),
			(this.animate = new mw()),
			(this.emitter = new Ng()),
			(this.dimensions = new _w({ wrapper: e, content: n, autoResize: p })),
			this.toggleClass('lenis', !0),
			(this.velocity = 0),
			(this.isLocked = !1),
			(this.isStopped = !1),
			(this.isSmooth = o || s),
			(this.isScrolling = !1),
			(this.targetScroll = this.animatedScroll = this.actualScroll),
			this.options.wrapper.addEventListener('scroll', this.onNativeScroll, {
				passive: !1,
			}),
			(this.virtualScroll = new gw(i, {
				touchMultiplier: m,
				wheelMultiplier: T,
				normalizeWheel: _,
			})),
			this.virtualScroll.on('scroll', this.onVirtualScroll);
	}
	destroy() {
		this.emitter.destroy(),
			this.options.wrapper.removeEventListener('scroll', this.onNativeScroll, {
				passive: !1,
			}),
			this.virtualScroll.destroy(),
			this.dimensions.destroy(),
			this.toggleClass('lenis', !1),
			this.toggleClass('lenis-smooth', !1),
			this.toggleClass('lenis-scrolling', !1),
			this.toggleClass('lenis-stopped', !1),
			this.toggleClass('lenis-locked', !1);
	}
	on(e, n) {
		return this.emitter.on(e, n);
	}
	off(e, n) {
		return this.emitter.off(e, n);
	}
	setScroll(e) {
		this.isHorizontal
			? (this.rootElement.scrollLeft = e)
			: (this.rootElement.scrollTop = e);
	}
	resize() {
		this.dimensions.resize();
	}
	emit() {
		this.emitter.emit('scroll', this);
	}
	reset() {
		(this.isLocked = !1),
			(this.isScrolling = !1),
			(this.animatedScroll = this.targetScroll = this.actualScroll),
			(this.velocity = 0),
			this.animate.stop();
	}
	start() {
		(this.isStopped = !1), this.reset();
	}
	stop() {
		(this.isStopped = !0), this.animate.stop(), this.reset();
	}
	raf(e) {
		const n = e - (this.time || e);
		(this.time = e), this.animate.advance(0.001 * n);
	}
	scrollTo(
		e,
		{
			offset: n = 0,
			immediate: r = !1,
			lock: i = !1,
			duration: s = this.options.duration,
			easing: o = this.options.easing,
			lerp: l = !s && this.options.lerp,
			onComplete: u = null,
			force: a = !1,
			programmatic: c = !0,
		} = {},
	) {
		if ((!this.isStopped && !this.isLocked) || a) {
			if (['top', 'left', 'start'].includes(e)) e = 0;
			else if (['bottom', 'right', 'end'].includes(e)) e = this.limit;
			else {
				let d;
				if (
					(typeof e == 'string'
						? (d = document.querySelector(e))
						: e != null && e.nodeType && (d = e),
					d)
				) {
					if (this.options.wrapper !== window) {
						const h = this.options.wrapper.getBoundingClientRect();
						n -= this.isHorizontal ? h.left : h.top;
					}
					const f = d.getBoundingClientRect();
					e = (this.isHorizontal ? f.left : f.top) + this.animatedScroll;
				}
			}
			if (typeof e == 'number') {
				if (
					((e += n),
					(e = Math.round(e)),
					this.options.infinite
						? c && (this.targetScroll = this.animatedScroll = this.scroll)
						: (e = Ma(0, e, this.limit)),
					r)
				)
					return (
						(this.animatedScroll = this.targetScroll = e),
						this.setScroll(this.scroll),
						this.reset(),
						void (u == null ? void 0 : u(this))
					);
				if (!c) {
					if (e === this.targetScroll) return;
					this.targetScroll = e;
				}
				this.animate.fromTo(this.animatedScroll, e, {
					duration: s,
					easing: o,
					lerp: l,
					onStart: () => {
						i && (this.isLocked = !0), (this.isScrolling = !0);
					},
					onUpdate: (d, f) => {
						(this.isScrolling = !0),
							(this.velocity = d - this.animatedScroll),
							(this.direction = Math.sign(this.velocity)),
							(this.animatedScroll = d),
							this.setScroll(this.scroll),
							c && (this.targetScroll = d),
							f || this.emit(),
							f &&
								(this.reset(),
								this.emit(),
								u == null || u(this),
								(this.__preventNextScrollEvent = !0),
								requestAnimationFrame(() => {
									delete this.__preventNextScrollEvent;
								}));
					},
				});
			}
		}
	}
	get rootElement() {
		return this.options.wrapper === window
			? document.documentElement
			: this.options.wrapper;
	}
	get limit() {
		return this.dimensions.limit[this.isHorizontal ? 'x' : 'y'];
	}
	get isHorizontal() {
		return this.options.orientation === 'horizontal';
	}
	get actualScroll() {
		return this.isHorizontal
			? this.rootElement.scrollLeft
			: this.rootElement.scrollTop;
	}
	get scroll() {
		return this.options.infinite
			? ((e = this.animatedScroll), (n = this.limit), ((e % n) + n) % n)
			: this.animatedScroll;
		var e, n;
	}
	get progress() {
		return this.limit === 0 ? 1 : this.scroll / this.limit;
	}
	get isSmooth() {
		return this.__isSmooth;
	}
	set isSmooth(e) {
		this.__isSmooth !== e &&
			((this.__isSmooth = e), this.toggleClass('lenis-smooth', e));
	}
	get isScrolling() {
		return this.__isScrolling;
	}
	set isScrolling(e) {
		this.__isScrolling !== e &&
			((this.__isScrolling = e), this.toggleClass('lenis-scrolling', e));
	}
	get isStopped() {
		return this.__isStopped;
	}
	set isStopped(e) {
		this.__isStopped !== e &&
			((this.__isStopped = e), this.toggleClass('lenis-stopped', e));
	}
	get isLocked() {
		return this.__isLocked;
	}
	set isLocked(e) {
		this.__isLocked !== e &&
			((this.__isLocked = e), this.toggleClass('lenis-locked', e));
	}
	get className() {
		let e = 'lenis';
		return (
			this.isStopped && (e += ' lenis-stopped'),
			this.isLocked && (e += ' lenis-locked'),
			this.isScrolling && (e += ' lenis-scrolling'),
			this.isSmooth && (e += ' lenis-smooth'),
			e
		);
	}
	toggleClass(e, n) {
		this.rootElement.classList.toggle(e, n),
			this.emitter.emit('className change', this);
	}
}
function Og(t) {
	var e,
		n,
		r = '';
	if (typeof t == 'string' || typeof t == 'number') r += t;
	else if (typeof t == 'object')
		if (Array.isArray(t)) {
			var i = t.length;
			for (e = 0; e < i; e++)
				t[e] && (n = Og(t[e])) && (r && (r += ' '), (r += n));
		} else for (n in t) t[n] && (r && (r += ' '), (r += n));
	return r;
}
function pm() {
	for (var t, e, n = 0, r = '', i = arguments.length; n < i; n++)
		(t = arguments[n]) && (e = Og(t)) && (r && (r += ' '), (r += e));
	return r;
}
var Mg = { exports: {} },
	yw = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
	xw = yw,
	ww = xw;
function jg() {}
function Rg() {}
Rg.resetWarningCache = jg;
var Sw = function () {
	function t(r, i, s, o, l, u) {
		if (u !== ww) {
			var a = new Error(
				'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
			);
			throw ((a.name = 'Invariant Violation'), a);
		}
	}
	t.isRequired = t;
	function e() {
		return t;
	}
	var n = {
		array: t,
		bigint: t,
		bool: t,
		func: t,
		number: t,
		object: t,
		string: t,
		symbol: t,
		any: t,
		arrayOf: e,
		element: t,
		elementType: t,
		instanceOf: e,
		node: t,
		objectOf: e,
		oneOf: e,
		oneOfType: e,
		shape: e,
		exact: e,
		checkPropTypes: Rg,
		resetWarningCache: jg,
	};
	return (n.PropTypes = n), n;
};
Mg.exports = Sw();
var kw = Mg.exports;
const Ps = Md(kw);
function rd() {
	return (
		(rd = Object.assign
			? Object.assign.bind()
			: function (t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
					}
					return t;
				}),
		rd.apply(this, arguments)
	);
}
const Dg = te.createContext(),
	Ag = Pg(() => ({}));
function Tw(t, e = [], n = 0) {
	const {
		lenis: r,
		addCallback: i,
		removeCallback: s,
	} = (function () {
		const o = te.useContext(Dg),
			l = Ag();
		return o ?? l;
	})();
	return (
		te.useEffect(() => {
			if (t && i && s && r)
				return (
					i(t, n),
					t(r),
					() => {
						s(t);
					}
				);
		}, [r, i, s, n, ...e]),
		r
	);
}
const id = te.forwardRef(
	(
		{
			children: t,
			root: e = !1,
			options: n = {},
			autoRaf: r = !0,
			rafPriority: i = 0,
			className: s,
			...o
		},
		l,
	) => {
		const u = te.useRef(),
			a = te.useRef(),
			[c, d] = te.useState(),
			f = te.useRef([]),
			h = te.useCallback((_, p) => {
				f.current.push({ callback: _, priority: p }),
					f.current.sort((y, x) => y.priority - x.priority);
			}, []),
			g = te.useCallback((_) => {
				f.current = f.current.filter((p) => p.callback !== _);
			}, []);
		te.useImperativeHandle(
			l,
			() => ({ wrapper: u.current, content: a.current, lenis: c }),
			[c],
		),
			te.useEffect(() => {
				const _ = new vw({
					...n,
					...(!e && { wrapper: u.current, content: a.current }),
				});
				return (
					d(_),
					() => {
						_.destroy(), d(void 0);
					}
				);
			}, [e, JSON.stringify(n)]),
			pw((_) => {
				r && (c == null || c.raf(_));
			}, i),
			te.useEffect(() => {
				e && c && Ag.setState({ lenis: c, addCallback: h, removeCallback: g });
			}, [e, c, h, g]);
		const m = te.useCallback((_) => {
			for (let p = 0; p < f.current.length; p++) f.current[p].callback(_);
		}, []);
		te.useEffect(
			() => (
				c == null || c.on('scroll', m),
				() => {
					c == null || c.off('scroll', m);
				}
			),
			[c, m],
		);
		const T = te.useCallback(() => {
			u.current &&
				(u.current.className = pm(c == null ? void 0 : c.className, s));
		}, [c, s]);
		return (
			te.useEffect(
				() => (
					T(),
					c == null || c.on('className change', T),
					() => {
						c == null || c.off('className change', T);
					}
				),
				[c, T],
			),
			ut.createElement(
				Dg.Provider,
				{ value: { lenis: c, addCallback: h, removeCallback: g } },
				e
					? t
					: ut.createElement(
							'div',
							rd(
								{ ref: u, className: pm(c == null ? void 0 : c.className, s) },
								o,
							),
							ut.createElement('div', { ref: a }, t),
						),
			)
		);
	},
);
(id.displayName = 'ReactLenis'),
	(id.propTypes = {
		children: Ps.node,
		root: Ps.bool,
		options: Ps.object,
		autoRaf: Ps.bool,
		rafPriority: Ps.number,
		className: Ps.string,
	});
const Ew = '_header_9838k_29',
	Cw = '_container_9838k_39',
	Pw = '_logo_9838k_49',
	Nw = '_hamburger_9838k_64',
	Ow = '_line_9838k_90',
	Mw = '_nav_9838k_123',
	jw = '_menu_9838k_158',
	Rw = '_underLine_9838k_162',
	Dw = '_item_9838k_170',
	Dr = {
		header: Ew,
		container: Cw,
		logo: Pw,
		hamburger: Nw,
		line: Ow,
		nav: Mw,
		menu: jw,
		underLine: Rw,
		item: Dw,
	};
function Aw() {
	const [t, e] = te.useState(!1),
		n = ['top', 'about', 'works', 'company', 'contact'],
		r = {
			logo: te.useRef(null),
			hamburger: te.useRef(null),
			firstLine: te.useRef(null),
			secondLine: te.useRef(null),
			thirdLine: te.useRef(null),
			nav: te.useRef(null),
		},
		i = Tw(),
		s = () => {
			e(!t), r.nav.current.classList.contains('active') ? i.start() : i.stop();
		};
	return v.jsxs('header', {
		children: [
			v.jsx('div', {
				className: `${Dr.header} ${t ? 'active' : ''}`,
				children: v.jsxs('div', {
					className: Dr.container,
					children: [
						v.jsx('h1', {
							className: `${Dr.logo} ${t ? 'active' : ''}`,
							ref: r.logo,
							children: v.jsx('a', { href: '*/', children: 'MALTS' }),
						}),
						v.jsx('div', {
							className: `${Dr.hamburger} ${t ? 'active' : ''}`,
							ref: r.hamburger,
							onClick: s,
							children: [...Array(3)].map((o, l) =>
								v.jsx(
									'span',
									{
										className: `${Dr.line} ${t ? 'active' : ''}`,
										ref: r[
											l === 0
												? 'firstLine'
												: l === 1
													? 'secondLine'
													: 'thirdLine'
										],
									},
									l,
								),
							),
						}),
					],
				}),
			}),
			v.jsx('nav', {
				className: `${Dr.nav} ${t ? 'active' : ''}`,
				ref: r.nav,
				children: v.jsx('ul', {
					className: Dr.menu,
					children: n.map((o, l) =>
						v.jsxs(
							'li',
							{
								className: Dr.item,
								children: [
									v.jsx('a', { href: `#${o}`, children: o.toUpperCase() }),
									v.jsx('span', { className: Dr.underLine }),
								],
							},
							l,
						),
					),
				}),
			}),
		],
	});
}
const Lw = '_top_nymo5_29',
	zw = '_svg_nymo5_36',
	Fw = '_container_nymo5_44',
	Iw = '_svg_01_nymo5_52',
	Vw = '_svg_02_nymo5_58',
	$w = '_svg_03_nymo5_67',
	Uw = '_loopTextContainer_nymo5_75',
	Ui = {
		top: Lw,
		svg: zw,
		container: Fw,
		svg_01: Iw,
		svg_02: Vw,
		svg_03: $w,
		loopTextContainer: Uw,
	},
	Bw = '/sample-site/assets/wheat_field-QpWfI9zM.jpg',
	Ww = '_loopTextTop_1p651_1',
	bw = '_loopTextMiddle_1p651_13',
	Hw = '_loopTextBottom_1p651_26',
	Yw = '_preText_1p651_38',
	Qw = '_loop_1p651_1',
	Xw = '_postText_1p651_44',
	Ge = {
		loopTextTop: Ww,
		loopTextMiddle: bw,
		loopTextBottom: Hw,
		preText: Yw,
		loop: Qw,
		postText: Xw,
	};
function Gw({ position: t }) {
	return (
		console.log(t === 'Top'),
		t === 'Top'
			? v.jsxs('div', {
					className: Ge[`loopText${t}`],
					children: [
						v.jsxs('p', {
							className: Ge.preText,
							children: [
								v.jsx('span', { children: 'GRAPHIC' }),
								' ',
								v.jsx('span', { children: 'FARM' }),
								' ',
								v.jsx('span', { className: Ge.malts, children: 'MALTS' }),
								' ',
								v.jsx('span', { className: Ge.harajuku, children: 'HARAJUKU' }),
							],
						}),
						v.jsxs('p', {
							className: Ge.postText,
							children: [
								v.jsx('span', { children: 'GRAPHIC' }),
								' ',
								v.jsx('span', { children: 'FARM' }),
								' ',
								v.jsx('span', { className: Ge.malts, children: 'MALTS' }),
								' ',
								v.jsx('span', { className: Ge.harajuku, children: 'HARAJUKU' }),
							],
						}),
					],
				})
			: t === 'Bottom'
				? v.jsxs('div', {
						className: Ge[`loopText${t}`],
						children: [
							v.jsxs('p', {
								className: Ge.preText,
								children: [
									v.jsx('span', {
										className: Ge.harajuku,
										children: 'HARAJUKU',
									}),
									' ',
									v.jsx('span', { className: Ge.malts, children: 'MALTS' }),
									' ',
									v.jsx('span', { children: 'GRAPHIC' }),
									' ',
									v.jsx('span', { children: 'FARM' }),
								],
							}),
							v.jsxs('p', {
								className: Ge.postText,
								children: [
									v.jsx('span', {
										className: Ge.harajuku,
										children: 'HARAJUKU',
									}),
									' ',
									v.jsx('span', { className: Ge.malts, children: 'MALTS' }),
									' ',
									v.jsx('span', { children: 'GRAPHIC' }),
									' ',
									v.jsx('span', { children: 'FARM' }),
								],
							}),
						],
					})
				: v.jsxs('div', {
						className: Ge[`loopText${t}`],
						children: [
							v.jsxs('p', {
								className: Ge.preText,
								children: [
									v.jsx('span', { className: Ge.malts, children: 'MALTS' }),
									' ',
									v.jsx('span', { children: 'GRAPHIC' }),
									' ',
									v.jsx('span', { children: 'FARM' }),
									' ',
									v.jsx('span', {
										className: Ge.harajuku,
										children: 'HARAJUKU',
									}),
								],
							}),
							v.jsxs('p', {
								className: Ge.postText,
								children: [
									v.jsx('span', { className: Ge.malts, children: 'MALTS' }),
									' ',
									v.jsx('span', { children: 'GRAPHIC' }),
									' ',
									v.jsx('span', { children: 'FARM' }),
									' ',
									v.jsx('span', {
										className: Ge.harajuku,
										children: 'HARAJUKU',
									}),
								],
							}),
						],
					})
	);
}
function Kw() {
	const t =
		'M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;';
	function e() {
		return v.jsx('path', {
			children: v.jsx('animate', {
				attributeName: 'd',
				dur: '15s',
				repeatCount: 'indefinite',
				values: t,
			}),
		});
	}
	return v.jsx(v.Fragment, {
		children: v.jsxs('div', {
			className: Ui.top,
			children: [
				v.jsx('div', {
					className: Ui.svg,
					children: v.jsxs('div', {
						className: Ui.container,
						children: [
							v.jsxs('svg', {
								viewBox: '0 0 500 500',
								className: Ui.svg_01,
								children: [
									v.jsx('image', {
										x: '0',
										y: '0',
										width: '100%',
										height: '100%',
										clipPath: 'url(#clip)',
										href: Bw,
										preserveAspectRatio: 'none',
									}),
									v.jsx('clipPath', { id: 'clip', children: v.jsx(e, {}) }),
								],
							}),
							v.jsx('svg', {
								viewBox: '0 0 500 500',
								className: Ui.svg_02,
								children: v.jsx(e, {}),
							}),
							v.jsx('svg', {
								viewBox: '0 0 500 500',
								className: Ui.svg_03,
								children: v.jsx(e, {}),
							}),
						],
					}),
				}),
				v.jsx('div', {
					className: Ui.loopTextContainer,
					children: v.jsx(Gw, { position: 'Middle' }),
				}),
			],
		}),
	});
}
const qw = '_container_13uge_29',
	Zw = '_outer_13uge_41',
	Jw = '_descWrapper_13uge_54',
	eS = '_desc_13uge_54',
	tS = '_titleWrapper_13uge_72',
	nS = '_titleInner_13uge_83',
	rS = '_title_13uge_72',
	iS = '_subTitle_13uge_98',
	sS = '_textWrapper_13uge_104',
	oS = '_textInner_13uge_108',
	lS = '_text_13uge_104',
	uS = '_logoContainer_13uge_151',
	aS = '_logoMotion01_13uge_162',
	cS = '_rotation_13uge_1',
	fS = '_inner_13uge_212',
	dS = '_logoMotion02_13uge_215',
	hS = '_logoMotion03_13uge_228',
	Fe = {
		container: qw,
		outer: Zw,
		descWrapper: Jw,
		desc: eS,
		titleWrapper: tS,
		titleInner: nS,
		title: rS,
		subTitle: iS,
		textWrapper: sS,
		textInner: oS,
		text: lS,
		logoContainer: uS,
		logoMotion01: aS,
		rotation: cS,
		inner: fS,
		logoMotion02: dS,
		logoMotion03: hS,
	},
	pS = '/sample-site/assets/malts-logo-6SvyMCuE.svg',
	mS = '/sample-site/assets/about001-AREvM-mp.jpg',
	_S = '/sample-site/assets/about002-k5Xso-JY.jpg';
function zr(t) {
	if (t === void 0)
		throw new ReferenceError(
			"this hasn't been initialised - super() hasn't been called",
		);
	return t;
}
function Lg(t, e) {
	(t.prototype = Object.create(e.prototype)),
		(t.prototype.constructor = t),
		(t.__proto__ = e);
}
/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var On = {
		autoSleep: 120,
		force3D: 'auto',
		nullTargetWarn: 1,
		units: { lineHeight: '' },
	},
	go = { duration: 0.5, overwrite: !1, delay: 0 },
	Eh,
	$t,
	Le,
	Bn = 1e8,
	ke = 1 / Bn,
	sd = Math.PI * 2,
	gS = sd / 4,
	vS = 0,
	zg = Math.sqrt,
	yS = Math.cos,
	xS = Math.sin,
	xt = function (e) {
		return typeof e == 'string';
	},
	Qe = function (e) {
		return typeof e == 'function';
	},
	Kr = function (e) {
		return typeof e == 'number';
	},
	Ch = function (e) {
		return typeof e > 'u';
	},
	Or = function (e) {
		return typeof e == 'object';
	},
	pn = function (e) {
		return e !== !1;
	},
	Ph = function () {
		return typeof window < 'u';
	},
	ku = function (e) {
		return Qe(e) || xt(e);
	},
	Fg =
		(typeof ArrayBuffer == 'function' && ArrayBuffer.isView) || function () {},
	Ut = Array.isArray,
	od = /(?:-?\.?\d|\.)+/gi,
	Ig = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
	Ys = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
	Wc = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
	Vg = /[+-]=-?[.\d]+/,
	$g = /[^,'"\[\]\s]+/gi,
	wS = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
	$e,
	vr,
	ld,
	Nh,
	jn = {},
	ja = {},
	Ug,
	Bg = function (e) {
		return (ja = _s(e, jn)) && vn;
	},
	Oh = function (e, n) {
		return console.warn(
			'Invalid property',
			e,
			'set to',
			n,
			'Missing plugin? gsap.registerPlugin()',
		);
	},
	Vl = function (e, n) {
		return !n && console.warn(e);
	},
	Wg = function (e, n) {
		return (e && (jn[e] = n) && ja && (ja[e] = n)) || jn;
	},
	$l = function () {
		return 0;
	},
	SS = { suppressEvents: !0, isStart: !0, kill: !1 },
	Ku = { suppressEvents: !0, kill: !1 },
	kS = { suppressEvents: !0 },
	Mh = {},
	Ei = [],
	ud = {},
	bg,
	kn = {},
	bc = {},
	mm = 30,
	qu = [],
	jh = '',
	Rh = function (e) {
		var n = e[0],
			r,
			i;
		if ((Or(n) || Qe(n) || (e = [e]), !(r = (n._gsap || {}).harness))) {
			for (i = qu.length; i-- && !qu[i].targetTest(n); );
			r = qu[i];
		}
		for (i = e.length; i--; )
			(e[i] && (e[i]._gsap || (e[i]._gsap = new pv(e[i], r)))) ||
				e.splice(i, 1);
		return e;
	},
	is = function (e) {
		return e._gsap || Rh(Wn(e))[0]._gsap;
	},
	Hg = function (e, n, r) {
		return (r = e[n]) && Qe(r)
			? e[n]()
			: (Ch(r) && e.getAttribute && e.getAttribute(n)) || r;
	},
	mn = function (e, n) {
		return (e = e.split(',')).forEach(n) || e;
	},
	qe = function (e) {
		return Math.round(e * 1e5) / 1e5 || 0;
	},
	vt = function (e) {
		return Math.round(e * 1e7) / 1e7 || 0;
	},
	no = function (e, n) {
		var r = n.charAt(0),
			i = parseFloat(n.substr(2));
		return (
			(e = parseFloat(e)),
			r === '+' ? e + i : r === '-' ? e - i : r === '*' ? e * i : e / i
		);
	},
	TS = function (e, n) {
		for (var r = n.length, i = 0; e.indexOf(n[i]) < 0 && ++i < r; );
		return i < r;
	},
	Ra = function () {
		var e = Ei.length,
			n = Ei.slice(0),
			r,
			i;
		for (ud = {}, Ei.length = 0, r = 0; r < e; r++)
			(i = n[r]),
				i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
	},
	Yg = function (e, n, r, i) {
		Ei.length && !$t && Ra(),
			e.render(n, r, i || ($t && n < 0 && (e._initted || e._startAt))),
			Ei.length && !$t && Ra();
	},
	Qg = function (e) {
		var n = parseFloat(e);
		return (n || n === 0) && (e + '').match($g).length < 2
			? n
			: xt(e)
				? e.trim()
				: e;
	},
	Xg = function (e) {
		return e;
	},
	Xn = function (e, n) {
		for (var r in n) r in e || (e[r] = n[r]);
		return e;
	},
	ES = function (e) {
		return function (n, r) {
			for (var i in r)
				i in n || (i === 'duration' && e) || i === 'ease' || (n[i] = r[i]);
		};
	},
	_s = function (e, n) {
		for (var r in n) e[r] = n[r];
		return e;
	},
	_m = function t(e, n) {
		for (var r in n)
			r !== '__proto__' &&
				r !== 'constructor' &&
				r !== 'prototype' &&
				(e[r] = Or(n[r]) ? t(e[r] || (e[r] = {}), n[r]) : n[r]);
		return e;
	},
	Da = function (e, n) {
		var r = {},
			i;
		for (i in e) i in n || (r[i] = e[i]);
		return r;
	},
	al = function (e) {
		var n = e.parent || $e,
			r = e.keyframes ? ES(Ut(e.keyframes)) : Xn;
		if (pn(e.inherit))
			for (; n; ) r(e, n.vars.defaults), (n = n.parent || n._dp);
		return e;
	},
	CS = function (e, n) {
		for (var r = e.length, i = r === n.length; i && r-- && e[r] === n[r]; );
		return r < 0;
	},
	Gg = function (e, n, r, i, s) {
		r === void 0 && (r = '_first'), i === void 0 && (i = '_last');
		var o = e[i],
			l;
		if (s) for (l = n[s]; o && o[s] > l; ) o = o._prev;
		return (
			o ? ((n._next = o._next), (o._next = n)) : ((n._next = e[r]), (e[r] = n)),
			n._next ? (n._next._prev = n) : (e[i] = n),
			(n._prev = o),
			(n.parent = n._dp = e),
			n
		);
	},
	fc = function (e, n, r, i) {
		r === void 0 && (r = '_first'), i === void 0 && (i = '_last');
		var s = n._prev,
			o = n._next;
		s ? (s._next = o) : e[r] === n && (e[r] = o),
			o ? (o._prev = s) : e[i] === n && (e[i] = s),
			(n._next = n._prev = n.parent = null);
	},
	Mi = function (e, n) {
		e.parent &&
			(!n || e.parent.autoRemoveChildren) &&
			e.parent.remove &&
			e.parent.remove(e),
			(e._act = 0);
	},
	ss = function (e, n) {
		if (e && (!n || n._end > e._dur || n._start < 0))
			for (var r = e; r; ) (r._dirty = 1), (r = r.parent);
		return e;
	},
	PS = function (e) {
		for (var n = e.parent; n && n.parent; )
			(n._dirty = 1), n.totalDuration(), (n = n.parent);
		return e;
	},
	ad = function (e, n, r, i) {
		return (
			e._startAt &&
			($t
				? e._startAt.revert(Ku)
				: (e.vars.immediateRender && !e.vars.autoRevert) ||
					e._startAt.render(n, !0, i))
		);
	},
	NS = function t(e) {
		return !e || (e._ts && t(e.parent));
	},
	gm = function (e) {
		return e._repeat ? vo(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
	},
	vo = function (e, n) {
		var r = Math.floor((e /= n));
		return e && r === e ? r - 1 : r;
	},
	Aa = function (e, n) {
		return (
			(e - n._start) * n._ts +
			(n._ts >= 0 ? 0 : n._dirty ? n.totalDuration() : n._tDur)
		);
	},
	dc = function (e) {
		return (e._end = vt(
			e._start + (e._tDur / Math.abs(e._ts || e._rts || ke) || 0),
		));
	},
	hc = function (e, n) {
		var r = e._dp;
		return (
			r &&
				r.smoothChildTiming &&
				e._ts &&
				((e._start = vt(
					r._time -
						(e._ts > 0
							? n / e._ts
							: ((e._dirty ? e.totalDuration() : e._tDur) - n) / -e._ts),
				)),
				dc(e),
				r._dirty || ss(r, e)),
			e
		);
	},
	Kg = function (e, n) {
		var r;
		if (
			((n._time ||
				(!n._dur && n._initted) ||
				(n._start < e._time && (n._dur || !n.add))) &&
				((r = Aa(e.rawTime(), n)),
				(!n._dur || Jl(0, n.totalDuration(), r) - n._tTime > ke) &&
					n.render(r, !0)),
			ss(e, n)._dp && e._initted && e._time >= e._dur && e._ts)
		) {
			if (e._dur < e.duration())
				for (r = e; r._dp; )
					r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp);
			e._zTime = -ke;
		}
	},
	wr = function (e, n, r, i) {
		return (
			n.parent && Mi(n),
			(n._start = vt(
				(Kr(r) ? r : r || e !== $e ? Ln(e, r, n) : e._time) + n._delay,
			)),
			(n._end = vt(
				n._start + (n.totalDuration() / Math.abs(n.timeScale()) || 0),
			)),
			Gg(e, n, '_first', '_last', e._sort ? '_start' : 0),
			cd(n) || (e._recent = n),
			i || Kg(e, n),
			e._ts < 0 && hc(e, e._tTime),
			e
		);
	},
	qg = function (e, n) {
		return (
			(jn.ScrollTrigger || Oh('scrollTrigger', n)) &&
			jn.ScrollTrigger.create(n, e)
		);
	},
	Zg = function (e, n, r, i, s) {
		if ((Ah(e, n, s), !e._initted)) return 1;
		if (
			!r &&
			e._pt &&
			!$t &&
			((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
			bg !== Tn.frame
		)
			return Ei.push(e), (e._lazy = [s, i]), 1;
	},
	OS = function t(e) {
		var n = e.parent;
		return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n));
	},
	cd = function (e) {
		var n = e.data;
		return n === 'isFromStart' || n === 'isStart';
	},
	MS = function (e, n, r, i) {
		var s = e.ratio,
			o =
				n < 0 ||
				(!n &&
					((!e._start && OS(e) && !(!e._initted && cd(e))) ||
						((e._ts < 0 || e._dp._ts < 0) && !cd(e))))
					? 0
					: 1,
			l = e._rDelay,
			u = 0,
			a,
			c,
			d;
		if (
			(l &&
				e._repeat &&
				((u = Jl(0, e._tDur, n)),
				(c = vo(u, l)),
				e._yoyo && c & 1 && (o = 1 - o),
				c !== vo(e._tTime, l) &&
					((s = 1 - o), e.vars.repeatRefresh && e._initted && e.invalidate())),
			o !== s || $t || i || e._zTime === ke || (!n && e._zTime))
		) {
			if (!e._initted && Zg(e, n, i, r, u)) return;
			for (
				d = e._zTime,
					e._zTime = n || (r ? ke : 0),
					r || (r = n && !d),
					e.ratio = o,
					e._from && (o = 1 - o),
					e._time = 0,
					e._tTime = u,
					a = e._pt;
				a;

			)
				a.r(o, a.d), (a = a._next);
			n < 0 && ad(e, n, r, !0),
				e._onUpdate && !r && Pn(e, 'onUpdate'),
				u && e._repeat && !r && e.parent && Pn(e, 'onRepeat'),
				(n >= e._tDur || n < 0) &&
					e.ratio === o &&
					(o && Mi(e, 1),
					!r &&
						!$t &&
						(Pn(e, o ? 'onComplete' : 'onReverseComplete', !0),
						e._prom && e._prom()));
		} else e._zTime || (e._zTime = n);
	},
	jS = function (e, n, r) {
		var i;
		if (r > n)
			for (i = e._first; i && i._start <= r; ) {
				if (i.data === 'isPause' && i._start > n) return i;
				i = i._next;
			}
		else
			for (i = e._last; i && i._start >= r; ) {
				if (i.data === 'isPause' && i._start < n) return i;
				i = i._prev;
			}
	},
	yo = function (e, n, r, i) {
		var s = e._repeat,
			o = vt(n) || 0,
			l = e._tTime / e._tDur;
		return (
			l && !i && (e._time *= o / e._dur),
			(e._dur = o),
			(e._tDur = s ? (s < 0 ? 1e10 : vt(o * (s + 1) + e._rDelay * s)) : o),
			l > 0 && !i && hc(e, (e._tTime = e._tDur * l)),
			e.parent && dc(e),
			r || ss(e.parent, e),
			e
		);
	},
	vm = function (e) {
		return e instanceof Kt ? ss(e) : yo(e, e._dur);
	},
	RS = { _start: 0, endTime: $l, totalDuration: $l },
	Ln = function t(e, n, r) {
		var i = e.labels,
			s = e._recent || RS,
			o = e.duration() >= Bn ? s.endTime(!1) : e._dur,
			l,
			u,
			a;
		return xt(n) && (isNaN(n) || n in i)
			? ((u = n.charAt(0)),
				(a = n.substr(-1) === '%'),
				(l = n.indexOf('=')),
				u === '<' || u === '>'
					? (l >= 0 && (n = n.replace(/=/, '')),
						(u === '<' ? s._start : s.endTime(s._repeat >= 0)) +
							(parseFloat(n.substr(1)) || 0) *
								(a ? (l < 0 ? s : r).totalDuration() / 100 : 1))
					: l < 0
						? (n in i || (i[n] = o), i[n])
						: ((u = parseFloat(n.charAt(l - 1) + n.substr(l + 1))),
							a && r && (u = (u / 100) * (Ut(r) ? r[0] : r).totalDuration()),
							l > 1 ? t(e, n.substr(0, l - 1), r) + u : o + u))
			: n == null
				? o
				: +n;
	},
	cl = function (e, n, r) {
		var i = Kr(n[1]),
			s = (i ? 2 : 1) + (e < 2 ? 0 : 1),
			o = n[s],
			l,
			u;
		if ((i && (o.duration = n[1]), (o.parent = r), e)) {
			for (l = o, u = r; u && !('immediateRender' in l); )
				(l = u.vars.defaults || {}), (u = pn(u.vars.inherit) && u.parent);
			(o.immediateRender = pn(l.immediateRender)),
				e < 2 ? (o.runBackwards = 1) : (o.startAt = n[s - 1]);
		}
		return new nt(n[0], o, n[s + 1]);
	},
	zi = function (e, n) {
		return e || e === 0 ? n(e) : n;
	},
	Jl = function (e, n, r) {
		return r < e ? e : r > n ? n : r;
	},
	Vt = function (e, n) {
		return !xt(e) || !(n = wS.exec(e)) ? '' : n[1];
	},
	DS = function (e, n, r) {
		return zi(r, function (i) {
			return Jl(e, n, i);
		});
	},
	fd = [].slice,
	Jg = function (e, n) {
		return (
			e &&
			Or(e) &&
			'length' in e &&
			((!n && !e.length) || (e.length - 1 in e && Or(e[0]))) &&
			!e.nodeType &&
			e !== vr
		);
	},
	AS = function (e, n, r) {
		return (
			r === void 0 && (r = []),
			e.forEach(function (i) {
				var s;
				return (xt(i) && !n) || Jg(i, 1)
					? (s = r).push.apply(s, Wn(i))
					: r.push(i);
			}) || r
		);
	},
	Wn = function (e, n, r) {
		return Le && !n && Le.selector
			? Le.selector(e)
			: xt(e) && !r && (ld || !xo())
				? fd.call((n || Nh).querySelectorAll(e), 0)
				: Ut(e)
					? AS(e, r)
					: Jg(e)
						? fd.call(e, 0)
						: e
							? [e]
							: [];
	},
	dd = function (e) {
		return (
			(e = Wn(e)[0] || Vl('Invalid scope') || {}),
			function (n) {
				var r = e.current || e.nativeElement || e;
				return Wn(
					n,
					r.querySelectorAll
						? r
						: r === e
							? Vl('Invalid scope') || Nh.createElement('div')
							: e,
				);
			}
		);
	},
	ev = function (e) {
		return e.sort(function () {
			return 0.5 - Math.random();
		});
	},
	tv = function (e) {
		if (Qe(e)) return e;
		var n = Or(e) ? e : { each: e },
			r = os(n.ease),
			i = n.from || 0,
			s = parseFloat(n.base) || 0,
			o = {},
			l = i > 0 && i < 1,
			u = isNaN(i) || l,
			a = n.axis,
			c = i,
			d = i;
		return (
			xt(i)
				? (c = d = { center: 0.5, edges: 0.5, end: 1 }[i] || 0)
				: !l && u && ((c = i[0]), (d = i[1])),
			function (f, h, g) {
				var m = (g || n).length,
					T = o[m],
					_,
					p,
					y,
					x,
					k,
					C,
					E,
					N,
					j;
				if (!T) {
					if (((j = n.grid === 'auto' ? 0 : (n.grid || [1, Bn])[1]), !j)) {
						for (
							E = -Bn;
							E < (E = g[j++].getBoundingClientRect().left) && j < m;

						);
						j < m && j--;
					}
					for (
						T = o[m] = [],
							_ = u ? Math.min(j, m) * c - 0.5 : i % j,
							p = j === Bn ? 0 : u ? (m * d) / j - 0.5 : (i / j) | 0,
							E = 0,
							N = Bn,
							C = 0;
						C < m;
						C++
					)
						(y = (C % j) - _),
							(x = p - ((C / j) | 0)),
							(T[C] = k = a ? Math.abs(a === 'y' ? x : y) : zg(y * y + x * x)),
							k > E && (E = k),
							k < N && (N = k);
					i === 'random' && ev(T),
						(T.max = E - N),
						(T.min = N),
						(T.v = m =
							(parseFloat(n.amount) ||
								parseFloat(n.each) *
									(j > m
										? m - 1
										: a
											? a === 'y'
												? m / j
												: j
											: Math.max(j, m / j)) ||
								0) * (i === 'edges' ? -1 : 1)),
						(T.b = m < 0 ? s - m : s),
						(T.u = Vt(n.amount || n.each) || 0),
						(r = r && m < 0 ? fv(r) : r);
				}
				return (
					(m = (T[f] - T.min) / T.max || 0),
					vt(T.b + (r ? r(m) : m) * T.v) + T.u
				);
			}
		);
	},
	hd = function (e) {
		var n = Math.pow(10, ((e + '').split('.')[1] || '').length);
		return function (r) {
			var i = vt(Math.round(parseFloat(r) / e) * e * n);
			return (i - (i % 1)) / n + (Kr(r) ? 0 : Vt(r));
		};
	},
	nv = function (e, n) {
		var r = Ut(e),
			i,
			s;
		return (
			!r &&
				Or(e) &&
				((i = r = e.radius || Bn),
				e.values
					? ((e = Wn(e.values)), (s = !Kr(e[0])) && (i *= i))
					: (e = hd(e.increment))),
			zi(
				n,
				r
					? Qe(e)
						? function (o) {
								return (s = e(o)), Math.abs(s - o) <= i ? s : o;
							}
						: function (o) {
								for (
									var l = parseFloat(s ? o.x : o),
										u = parseFloat(s ? o.y : 0),
										a = Bn,
										c = 0,
										d = e.length,
										f,
										h;
									d--;

								)
									s
										? ((f = e[d].x - l), (h = e[d].y - u), (f = f * f + h * h))
										: (f = Math.abs(e[d] - l)),
										f < a && ((a = f), (c = d));
								return (
									(c = !i || a <= i ? e[c] : o),
									s || c === o || Kr(o) ? c : c + Vt(o)
								);
							}
					: hd(e),
			)
		);
	},
	rv = function (e, n, r, i) {
		return zi(Ut(e) ? !n : r === !0 ? !!(r = 0) : !i, function () {
			return Ut(e)
				? e[~~(Math.random() * e.length)]
				: (r = r || 1e-5) &&
						(i = r < 1 ? Math.pow(10, (r + '').length - 2) : 1) &&
						Math.floor(
							Math.round((e - r / 2 + Math.random() * (n - e + r * 0.99)) / r) *
								r *
								i,
						) / i;
		});
	},
	LS = function () {
		for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
			n[r] = arguments[r];
		return function (i) {
			return n.reduce(function (s, o) {
				return o(s);
			}, i);
		};
	},
	zS = function (e, n) {
		return function (r) {
			return e(parseFloat(r)) + (n || Vt(r));
		};
	},
	FS = function (e, n, r) {
		return sv(e, n, 0, 1, r);
	},
	iv = function (e, n, r) {
		return zi(r, function (i) {
			return e[~~n(i)];
		});
	},
	IS = function t(e, n, r) {
		var i = n - e;
		return Ut(e)
			? iv(e, t(0, e.length), n)
			: zi(r, function (s) {
					return ((i + ((s - e) % i)) % i) + e;
				});
	},
	VS = function t(e, n, r) {
		var i = n - e,
			s = i * 2;
		return Ut(e)
			? iv(e, t(0, e.length - 1), n)
			: zi(r, function (o) {
					return (o = (s + ((o - e) % s)) % s || 0), e + (o > i ? s - o : o);
				});
	},
	Ul = function (e) {
		for (var n = 0, r = '', i, s, o, l; ~(i = e.indexOf('random(', n)); )
			(o = e.indexOf(')', i)),
				(l = e.charAt(i + 7) === '['),
				(s = e.substr(i + 7, o - i - 7).match(l ? $g : od)),
				(r +=
					e.substr(n, i - n) + rv(l ? s : +s[0], l ? 0 : +s[1], +s[2] || 1e-5)),
				(n = o + 1);
		return r + e.substr(n, e.length - n);
	},
	sv = function (e, n, r, i, s) {
		var o = n - e,
			l = i - r;
		return zi(s, function (u) {
			return r + (((u - e) / o) * l || 0);
		});
	},
	$S = function t(e, n, r, i) {
		var s = isNaN(e + n)
			? 0
			: function (h) {
					return (1 - h) * e + h * n;
				};
		if (!s) {
			var o = xt(e),
				l = {},
				u,
				a,
				c,
				d,
				f;
			if ((r === !0 && (i = 1) && (r = null), o))
				(e = { p: e }), (n = { p: n });
			else if (Ut(e) && !Ut(n)) {
				for (c = [], d = e.length, f = d - 2, a = 1; a < d; a++)
					c.push(t(e[a - 1], e[a]));
				d--,
					(s = function (g) {
						g *= d;
						var m = Math.min(f, ~~g);
						return c[m](g - m);
					}),
					(r = n);
			} else i || (e = _s(Ut(e) ? [] : {}, e));
			if (!c) {
				for (u in n) Dh.call(l, e, u, 'get', n[u]);
				s = function (g) {
					return Fh(g, l) || (o ? e.p : e);
				};
			}
		}
		return zi(r, s);
	},
	ym = function (e, n, r) {
		var i = e.labels,
			s = Bn,
			o,
			l,
			u;
		for (o in i)
			(l = i[o] - n),
				l < 0 == !!r && l && s > (l = Math.abs(l)) && ((u = o), (s = l));
		return u;
	},
	Pn = function (e, n, r) {
		var i = e.vars,
			s = i[n],
			o = Le,
			l = e._ctx,
			u,
			a,
			c;
		if (s)
			return (
				(u = i[n + 'Params']),
				(a = i.callbackScope || e),
				r && Ei.length && Ra(),
				l && (Le = l),
				(c = u ? s.apply(a, u) : s.call(a)),
				(Le = o),
				c
			);
	},
	Qo = function (e) {
		return (
			Mi(e),
			e.scrollTrigger && e.scrollTrigger.kill(!!$t),
			e.progress() < 1 && Pn(e, 'onInterrupt'),
			e
		);
	},
	Qs,
	ov = [],
	lv = function (e) {
		if (e)
			if (((e = (!e.name && e.default) || e), Ph() || e.headless)) {
				var n = e.name,
					r = Qe(e),
					i =
						n && !r && e.init
							? function () {
									this._props = [];
								}
							: e,
					s = {
						init: $l,
						render: Fh,
						add: Dh,
						kill: nk,
						modifier: tk,
						rawVars: 0,
					},
					o = {
						targetTest: 0,
						get: 0,
						getSetter: zh,
						aliases: {},
						register: 0,
					};
				if ((xo(), e !== i)) {
					if (kn[n]) return;
					Xn(i, Xn(Da(e, s), o)),
						_s(i.prototype, _s(s, Da(e, o))),
						(kn[(i.prop = n)] = i),
						e.targetTest && (qu.push(i), (Mh[n] = 1)),
						(n =
							(n === 'css' ? 'CSS' : n.charAt(0).toUpperCase() + n.substr(1)) +
							'Plugin');
				}
				Wg(n, i), e.register && e.register(vn, i, _n);
			} else ov.push(e);
	},
	Se = 255,
	Xo = {
		aqua: [0, Se, Se],
		lime: [0, Se, 0],
		silver: [192, 192, 192],
		black: [0, 0, 0],
		maroon: [128, 0, 0],
		teal: [0, 128, 128],
		blue: [0, 0, Se],
		navy: [0, 0, 128],
		white: [Se, Se, Se],
		olive: [128, 128, 0],
		yellow: [Se, Se, 0],
		orange: [Se, 165, 0],
		gray: [128, 128, 128],
		purple: [128, 0, 128],
		green: [0, 128, 0],
		red: [Se, 0, 0],
		pink: [Se, 192, 203],
		cyan: [0, Se, Se],
		transparent: [Se, Se, Se, 0],
	},
	Hc = function (e, n, r) {
		return (
			(e += e < 0 ? 1 : e > 1 ? -1 : 0),
			((e * 6 < 1
				? n + (r - n) * e * 6
				: e < 0.5
					? r
					: e * 3 < 2
						? n + (r - n) * (2 / 3 - e) * 6
						: n) *
				Se +
				0.5) |
				0
		);
	},
	uv = function (e, n, r) {
		var i = e ? (Kr(e) ? [e >> 16, (e >> 8) & Se, e & Se] : 0) : Xo.black,
			s,
			o,
			l,
			u,
			a,
			c,
			d,
			f,
			h,
			g;
		if (!i) {
			if ((e.substr(-1) === ',' && (e = e.substr(0, e.length - 1)), Xo[e]))
				i = Xo[e];
			else if (e.charAt(0) === '#') {
				if (
					(e.length < 6 &&
						((s = e.charAt(1)),
						(o = e.charAt(2)),
						(l = e.charAt(3)),
						(e =
							'#' +
							s +
							s +
							o +
							o +
							l +
							l +
							(e.length === 5 ? e.charAt(4) + e.charAt(4) : ''))),
					e.length === 9)
				)
					return (
						(i = parseInt(e.substr(1, 6), 16)),
						[i >> 16, (i >> 8) & Se, i & Se, parseInt(e.substr(7), 16) / 255]
					);
				(e = parseInt(e.substr(1), 16)), (i = [e >> 16, (e >> 8) & Se, e & Se]);
			} else if (e.substr(0, 3) === 'hsl') {
				if (((i = g = e.match(od)), !n))
					(u = (+i[0] % 360) / 360),
						(a = +i[1] / 100),
						(c = +i[2] / 100),
						(o = c <= 0.5 ? c * (a + 1) : c + a - c * a),
						(s = c * 2 - o),
						i.length > 3 && (i[3] *= 1),
						(i[0] = Hc(u + 1 / 3, s, o)),
						(i[1] = Hc(u, s, o)),
						(i[2] = Hc(u - 1 / 3, s, o));
				else if (~e.indexOf('='))
					return (i = e.match(Ig)), r && i.length < 4 && (i[3] = 1), i;
			} else i = e.match(od) || Xo.transparent;
			i = i.map(Number);
		}
		return (
			n &&
				!g &&
				((s = i[0] / Se),
				(o = i[1] / Se),
				(l = i[2] / Se),
				(d = Math.max(s, o, l)),
				(f = Math.min(s, o, l)),
				(c = (d + f) / 2),
				d === f
					? (u = a = 0)
					: ((h = d - f),
						(a = c > 0.5 ? h / (2 - d - f) : h / (d + f)),
						(u =
							d === s
								? (o - l) / h + (o < l ? 6 : 0)
								: d === o
									? (l - s) / h + 2
									: (s - o) / h + 4),
						(u *= 60)),
				(i[0] = ~~(u + 0.5)),
				(i[1] = ~~(a * 100 + 0.5)),
				(i[2] = ~~(c * 100 + 0.5))),
			r && i.length < 4 && (i[3] = 1),
			i
		);
	},
	av = function (e) {
		var n = [],
			r = [],
			i = -1;
		return (
			e.split(Ci).forEach(function (s) {
				var o = s.match(Ys) || [];
				n.push.apply(n, o), r.push((i += o.length + 1));
			}),
			(n.c = r),
			n
		);
	},
	xm = function (e, n, r) {
		var i = '',
			s = (e + i).match(Ci),
			o = n ? 'hsla(' : 'rgba(',
			l = 0,
			u,
			a,
			c,
			d;
		if (!s) return e;
		if (
			((s = s.map(function (f) {
				return (
					(f = uv(f, n, 1)) &&
					o +
						(n ? f[0] + ',' + f[1] + '%,' + f[2] + '%,' + f[3] : f.join(',')) +
						')'
				);
			})),
			r && ((c = av(e)), (u = r.c), u.join(i) !== c.c.join(i)))
		)
			for (a = e.replace(Ci, '1').split(Ys), d = a.length - 1; l < d; l++)
				i +=
					a[l] +
					(~u.indexOf(l)
						? s.shift() || o + '0,0,0,0)'
						: (c.length ? c : s.length ? s : r).shift());
		if (!a)
			for (a = e.split(Ci), d = a.length - 1; l < d; l++) i += a[l] + s[l];
		return i + a[d];
	},
	Ci = (function () {
		var t =
				'(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b',
			e;
		for (e in Xo) t += '|' + e + '\\b';
		return new RegExp(t + ')', 'gi');
	})(),
	US = /hsl[a]?\(/,
	cv = function (e) {
		var n = e.join(' '),
			r;
		if (((Ci.lastIndex = 0), Ci.test(n)))
			return (
				(r = US.test(n)),
				(e[1] = xm(e[1], r)),
				(e[0] = xm(e[0], r, av(e[1]))),
				!0
			);
	},
	Bl,
	Tn = (function () {
		var t = Date.now,
			e = 500,
			n = 33,
			r = t(),
			i = r,
			s = 1e3 / 240,
			o = s,
			l = [],
			u,
			a,
			c,
			d,
			f,
			h,
			g = function m(T) {
				var _ = t() - i,
					p = T === !0,
					y,
					x,
					k,
					C;
				if (
					((_ > e || _ < 0) && (r += _ - n),
					(i += _),
					(k = i - r),
					(y = k - o),
					(y > 0 || p) &&
						((C = ++d.frame),
						(f = k - d.time * 1e3),
						(d.time = k = k / 1e3),
						(o += y + (y >= s ? 4 : s - y)),
						(x = 1)),
					p || (u = a(m)),
					x)
				)
					for (h = 0; h < l.length; h++) l[h](k, f, C, T);
			};
		return (
			(d = {
				time: 0,
				frame: 0,
				tick: function () {
					g(!0);
				},
				deltaRatio: function (T) {
					return f / (1e3 / (T || 60));
				},
				wake: function () {
					Ug &&
						(!ld &&
							Ph() &&
							((vr = ld = window),
							(Nh = vr.document || {}),
							(jn.gsap = vn),
							(vr.gsapVersions || (vr.gsapVersions = [])).push(vn.version),
							Bg(ja || vr.GreenSockGlobals || (!vr.gsap && vr) || {}),
							ov.forEach(lv)),
						(c = typeof requestAnimationFrame < 'u' && requestAnimationFrame),
						u && d.sleep(),
						(a =
							c ||
							function (T) {
								return setTimeout(T, (o - d.time * 1e3 + 1) | 0);
							}),
						(Bl = 1),
						g(2));
				},
				sleep: function () {
					(c ? cancelAnimationFrame : clearTimeout)(u), (Bl = 0), (a = $l);
				},
				lagSmoothing: function (T, _) {
					(e = T || 1 / 0), (n = Math.min(_ || 33, e));
				},
				fps: function (T) {
					(s = 1e3 / (T || 240)), (o = d.time * 1e3 + s);
				},
				add: function (T, _, p) {
					var y = _
						? function (x, k, C, E) {
								T(x, k, C, E), d.remove(y);
							}
						: T;
					return d.remove(T), l[p ? 'unshift' : 'push'](y), xo(), y;
				},
				remove: function (T, _) {
					~(_ = l.indexOf(T)) && l.splice(_, 1) && h >= _ && h--;
				},
				_listeners: l,
			}),
			d
		);
	})(),
	xo = function () {
		return !Bl && Tn.wake();
	},
	pe = {},
	BS = /^[\d.\-M][\d.\-,\s]/,
	WS = /["']/g,
	bS = function (e) {
		for (
			var n = {},
				r = e.substr(1, e.length - 3).split(':'),
				i = r[0],
				s = 1,
				o = r.length,
				l,
				u,
				a;
			s < o;
			s++
		)
			(u = r[s]),
				(l = s !== o - 1 ? u.lastIndexOf(',') : u.length),
				(a = u.substr(0, l)),
				(n[i] = isNaN(a) ? a.replace(WS, '').trim() : +a),
				(i = u.substr(l + 1).trim());
		return n;
	},
	HS = function (e) {
		var n = e.indexOf('(') + 1,
			r = e.indexOf(')'),
			i = e.indexOf('(', n);
		return e.substring(n, ~i && i < r ? e.indexOf(')', r + 1) : r);
	},
	YS = function (e) {
		var n = (e + '').split('('),
			r = pe[n[0]];
		return r && n.length > 1 && r.config
			? r.config.apply(
					null,
					~e.indexOf('{') ? [bS(n[1])] : HS(e).split(',').map(Qg),
				)
			: pe._CE && BS.test(e)
				? pe._CE('', e)
				: r;
	},
	fv = function (e) {
		return function (n) {
			return 1 - e(1 - n);
		};
	},
	dv = function t(e, n) {
		for (var r = e._first, i; r; )
			r instanceof Kt
				? t(r, n)
				: r.vars.yoyoEase &&
					(!r._yoyo || !r._repeat) &&
					r._yoyo !== n &&
					(r.timeline
						? t(r.timeline, n)
						: ((i = r._ease),
							(r._ease = r._yEase),
							(r._yEase = i),
							(r._yoyo = n))),
				(r = r._next);
	},
	os = function (e, n) {
		return (e && (Qe(e) ? e : pe[e] || YS(e))) || n;
	},
	ks = function (e, n, r, i) {
		r === void 0 &&
			(r = function (u) {
				return 1 - n(1 - u);
			}),
			i === void 0 &&
				(i = function (u) {
					return u < 0.5 ? n(u * 2) / 2 : 1 - n((1 - u) * 2) / 2;
				});
		var s = { easeIn: n, easeOut: r, easeInOut: i },
			o;
		return (
			mn(e, function (l) {
				(pe[l] = jn[l] = s), (pe[(o = l.toLowerCase())] = r);
				for (var u in s)
					pe[
						o + (u === 'easeIn' ? '.in' : u === 'easeOut' ? '.out' : '.inOut')
					] = pe[l + '.' + u] = s[u];
			}),
			s
		);
	},
	hv = function (e) {
		return function (n) {
			return n < 0.5 ? (1 - e(1 - n * 2)) / 2 : 0.5 + e((n - 0.5) * 2) / 2;
		};
	},
	Yc = function t(e, n, r) {
		var i = n >= 1 ? n : 1,
			s = (r || (e ? 0.3 : 0.45)) / (n < 1 ? n : 1),
			o = (s / sd) * (Math.asin(1 / i) || 0),
			l = function (c) {
				return c === 1 ? 1 : i * Math.pow(2, -10 * c) * xS((c - o) * s) + 1;
			},
			u =
				e === 'out'
					? l
					: e === 'in'
						? function (a) {
								return 1 - l(1 - a);
							}
						: hv(l);
		return (
			(s = sd / s),
			(u.config = function (a, c) {
				return t(e, a, c);
			}),
			u
		);
	},
	Qc = function t(e, n) {
		n === void 0 && (n = 1.70158);
		var r = function (o) {
				return o ? --o * o * ((n + 1) * o + n) + 1 : 0;
			},
			i =
				e === 'out'
					? r
					: e === 'in'
						? function (s) {
								return 1 - r(1 - s);
							}
						: hv(r);
		return (
			(i.config = function (s) {
				return t(e, s);
			}),
			i
		);
	};
mn('Linear,Quad,Cubic,Quart,Quint,Strong', function (t, e) {
	var n = e < 5 ? e + 1 : e;
	ks(
		t + ',Power' + (n - 1),
		e
			? function (r) {
					return Math.pow(r, n);
				}
			: function (r) {
					return r;
				},
		function (r) {
			return 1 - Math.pow(1 - r, n);
		},
		function (r) {
			return r < 0.5
				? Math.pow(r * 2, n) / 2
				: 1 - Math.pow((1 - r) * 2, n) / 2;
		},
	);
});
pe.Linear.easeNone = pe.none = pe.Linear.easeIn;
ks('Elastic', Yc('in'), Yc('out'), Yc());
(function (t, e) {
	var n = 1 / e,
		r = 2 * n,
		i = 2.5 * n,
		s = function (l) {
			return l < n
				? t * l * l
				: l < r
					? t * Math.pow(l - 1.5 / e, 2) + 0.75
					: l < i
						? t * (l -= 2.25 / e) * l + 0.9375
						: t * Math.pow(l - 2.625 / e, 2) + 0.984375;
		};
	ks(
		'Bounce',
		function (o) {
			return 1 - s(1 - o);
		},
		s,
	);
})(7.5625, 2.75);
ks('Expo', function (t) {
	return t ? Math.pow(2, 10 * (t - 1)) : 0;
});
ks('Circ', function (t) {
	return -(zg(1 - t * t) - 1);
});
ks('Sine', function (t) {
	return t === 1 ? 1 : -yS(t * gS) + 1;
});
ks('Back', Qc('in'), Qc('out'), Qc());
pe.SteppedEase =
	pe.steps =
	jn.SteppedEase =
		{
			config: function (e, n) {
				e === void 0 && (e = 1);
				var r = 1 / e,
					i = e + (n ? 0 : 1),
					s = n ? 1 : 0,
					o = 1 - ke;
				return function (l) {
					return (((i * Jl(0, o, l)) | 0) + s) * r;
				};
			},
		};
go.ease = pe['quad.out'];
mn(
	'onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt',
	function (t) {
		return (jh += t + ',' + t + 'Params,');
	},
);
var pv = function (e, n) {
		(this.id = vS++),
			(e._gsap = this),
			(this.target = e),
			(this.harness = n),
			(this.get = n ? n.get : Hg),
			(this.set = n ? n.getSetter : zh);
	},
	Wl = (function () {
		function t(n) {
			(this.vars = n),
				(this._delay = +n.delay || 0),
				(this._repeat = n.repeat === 1 / 0 ? -2 : n.repeat || 0) &&
					((this._rDelay = n.repeatDelay || 0),
					(this._yoyo = !!n.yoyo || !!n.yoyoEase)),
				(this._ts = 1),
				yo(this, +n.duration, 1, 1),
				(this.data = n.data),
				Le && ((this._ctx = Le), Le.data.push(this)),
				Bl || Tn.wake();
		}
		var e = t.prototype;
		return (
			(e.delay = function (r) {
				return r || r === 0
					? (this.parent &&
							this.parent.smoothChildTiming &&
							this.startTime(this._start + r - this._delay),
						(this._delay = r),
						this)
					: this._delay;
			}),
			(e.duration = function (r) {
				return arguments.length
					? this.totalDuration(
							this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r,
						)
					: this.totalDuration() && this._dur;
			}),
			(e.totalDuration = function (r) {
				return arguments.length
					? ((this._dirty = 0),
						yo(
							this,
							this._repeat < 0
								? r
								: (r - this._repeat * this._rDelay) / (this._repeat + 1),
						))
					: this._tDur;
			}),
			(e.totalTime = function (r, i) {
				if ((xo(), !arguments.length)) return this._tTime;
				var s = this._dp;
				if (s && s.smoothChildTiming && this._ts) {
					for (hc(this, r), !s._dp || s.parent || Kg(s, this); s && s.parent; )
						s.parent._time !==
							s._start +
								(s._ts >= 0
									? s._tTime / s._ts
									: (s.totalDuration() - s._tTime) / -s._ts) &&
							s.totalTime(s._tTime, !0),
							(s = s.parent);
					!this.parent &&
						this._dp.autoRemoveChildren &&
						((this._ts > 0 && r < this._tDur) ||
							(this._ts < 0 && r > 0) ||
							(!this._tDur && !r)) &&
						wr(this._dp, this, this._start - this._delay);
				}
				return (
					(this._tTime !== r ||
						(!this._dur && !i) ||
						(this._initted && Math.abs(this._zTime) === ke) ||
						(!r && !this._initted && (this.add || this._ptLookup))) &&
						(this._ts || (this._pTime = r), Yg(this, r, i)),
					this
				);
			}),
			(e.time = function (r, i) {
				return arguments.length
					? this.totalTime(
							Math.min(this.totalDuration(), r + gm(this)) %
								(this._dur + this._rDelay) || (r ? this._dur : 0),
							i,
						)
					: this._time;
			}),
			(e.totalProgress = function (r, i) {
				return arguments.length
					? this.totalTime(this.totalDuration() * r, i)
					: this.totalDuration()
						? Math.min(1, this._tTime / this._tDur)
						: this.rawTime() > 0
							? 1
							: 0;
			}),
			(e.progress = function (r, i) {
				return arguments.length
					? this.totalTime(
							this.duration() *
								(this._yoyo && !(this.iteration() & 1) ? 1 - r : r) +
								gm(this),
							i,
						)
					: this.duration()
						? Math.min(1, this._time / this._dur)
						: this.rawTime() > 0
							? 1
							: 0;
			}),
			(e.iteration = function (r, i) {
				var s = this.duration() + this._rDelay;
				return arguments.length
					? this.totalTime(this._time + (r - 1) * s, i)
					: this._repeat
						? vo(this._tTime, s) + 1
						: 1;
			}),
			(e.timeScale = function (r, i) {
				if (!arguments.length) return this._rts === -ke ? 0 : this._rts;
				if (this._rts === r) return this;
				var s =
					this.parent && this._ts ? Aa(this.parent._time, this) : this._tTime;
				return (
					(this._rts = +r || 0),
					(this._ts = this._ps || r === -ke ? 0 : this._rts),
					this.totalTime(Jl(-Math.abs(this._delay), this._tDur, s), i !== !1),
					dc(this),
					PS(this)
				);
			}),
			(e.paused = function (r) {
				return arguments.length
					? (this._ps !== r &&
							((this._ps = r),
							r
								? ((this._pTime =
										this._tTime || Math.max(-this._delay, this.rawTime())),
									(this._ts = this._act = 0))
								: (xo(),
									(this._ts = this._rts),
									this.totalTime(
										this.parent && !this.parent.smoothChildTiming
											? this.rawTime()
											: this._tTime || this._pTime,
										this.progress() === 1 &&
											Math.abs(this._zTime) !== ke &&
											(this._tTime -= ke),
									))),
						this)
					: this._ps;
			}),
			(e.startTime = function (r) {
				if (arguments.length) {
					this._start = r;
					var i = this.parent || this._dp;
					return (
						i && (i._sort || !this.parent) && wr(i, this, r - this._delay), this
					);
				}
				return this._start;
			}),
			(e.endTime = function (r) {
				return (
					this._start +
					(pn(r) ? this.totalDuration() : this.duration()) /
						Math.abs(this._ts || 1)
				);
			}),
			(e.rawTime = function (r) {
				var i = this.parent || this._dp;
				return i
					? r &&
						(!this._ts ||
							(this._repeat && this._time && this.totalProgress() < 1))
						? this._tTime % (this._dur + this._rDelay)
						: this._ts
							? Aa(i.rawTime(r), this)
							: this._tTime
					: this._tTime;
			}),
			(e.revert = function (r) {
				r === void 0 && (r = kS);
				var i = $t;
				return (
					($t = r),
					(this._initted || this._startAt) &&
						(this.timeline && this.timeline.revert(r),
						this.totalTime(-0.01, r.suppressEvents)),
					this.data !== 'nested' && r.kill !== !1 && this.kill(),
					($t = i),
					this
				);
			}),
			(e.globalTime = function (r) {
				for (var i = this, s = arguments.length ? r : i.rawTime(); i; )
					(s = i._start + s / (Math.abs(i._ts) || 1)), (i = i._dp);
				return !this.parent && this._sat ? this._sat.globalTime(r) : s;
			}),
			(e.repeat = function (r) {
				return arguments.length
					? ((this._repeat = r === 1 / 0 ? -2 : r), vm(this))
					: this._repeat === -2
						? 1 / 0
						: this._repeat;
			}),
			(e.repeatDelay = function (r) {
				if (arguments.length) {
					var i = this._time;
					return (this._rDelay = r), vm(this), i ? this.time(i) : this;
				}
				return this._rDelay;
			}),
			(e.yoyo = function (r) {
				return arguments.length ? ((this._yoyo = r), this) : this._yoyo;
			}),
			(e.seek = function (r, i) {
				return this.totalTime(Ln(this, r), pn(i));
			}),
			(e.restart = function (r, i) {
				return this.play().totalTime(r ? -this._delay : 0, pn(i));
			}),
			(e.play = function (r, i) {
				return r != null && this.seek(r, i), this.reversed(!1).paused(!1);
			}),
			(e.reverse = function (r, i) {
				return (
					r != null && this.seek(r || this.totalDuration(), i),
					this.reversed(!0).paused(!1)
				);
			}),
			(e.pause = function (r, i) {
				return r != null && this.seek(r, i), this.paused(!0);
			}),
			(e.resume = function () {
				return this.paused(!1);
			}),
			(e.reversed = function (r) {
				return arguments.length
					? (!!r !== this.reversed() &&
							this.timeScale(-this._rts || (r ? -ke : 0)),
						this)
					: this._rts < 0;
			}),
			(e.invalidate = function () {
				return (this._initted = this._act = 0), (this._zTime = -ke), this;
			}),
			(e.isActive = function () {
				var r = this.parent || this._dp,
					i = this._start,
					s;
				return !!(
					!r ||
					(this._ts &&
						this._initted &&
						r.isActive() &&
						(s = r.rawTime(!0)) >= i &&
						s < this.endTime(!0) - ke)
				);
			}),
			(e.eventCallback = function (r, i, s) {
				var o = this.vars;
				return arguments.length > 1
					? (i
							? ((o[r] = i),
								s && (o[r + 'Params'] = s),
								r === 'onUpdate' && (this._onUpdate = i))
							: delete o[r],
						this)
					: o[r];
			}),
			(e.then = function (r) {
				var i = this;
				return new Promise(function (s) {
					var o = Qe(r) ? r : Xg,
						l = function () {
							var a = i.then;
							(i.then = null),
								Qe(o) && (o = o(i)) && (o.then || o === i) && (i.then = a),
								s(o),
								(i.then = a);
						};
					(i._initted && i.totalProgress() === 1 && i._ts >= 0) ||
					(!i._tTime && i._ts < 0)
						? l()
						: (i._prom = l);
				});
			}),
			(e.kill = function () {
				Qo(this);
			}),
			t
		);
	})();
Xn(Wl.prototype, {
	_time: 0,
	_start: 0,
	_end: 0,
	_tTime: 0,
	_tDur: 0,
	_dirty: 0,
	_repeat: 0,
	_yoyo: !1,
	parent: null,
	_initted: !1,
	_rDelay: 0,
	_ts: 1,
	_dp: 0,
	ratio: 0,
	_zTime: -ke,
	_prom: 0,
	_ps: !1,
	_rts: 1,
});
var Kt = (function (t) {
	Lg(e, t);
	function e(r, i) {
		var s;
		return (
			r === void 0 && (r = {}),
			(s = t.call(this, r) || this),
			(s.labels = {}),
			(s.smoothChildTiming = !!r.smoothChildTiming),
			(s.autoRemoveChildren = !!r.autoRemoveChildren),
			(s._sort = pn(r.sortChildren)),
			$e && wr(r.parent || $e, zr(s), i),
			r.reversed && s.reverse(),
			r.paused && s.paused(!0),
			r.scrollTrigger && qg(zr(s), r.scrollTrigger),
			s
		);
	}
	var n = e.prototype;
	return (
		(n.to = function (i, s, o) {
			return cl(0, arguments, this), this;
		}),
		(n.from = function (i, s, o) {
			return cl(1, arguments, this), this;
		}),
		(n.fromTo = function (i, s, o, l) {
			return cl(2, arguments, this), this;
		}),
		(n.set = function (i, s, o) {
			return (
				(s.duration = 0),
				(s.parent = this),
				al(s).repeatDelay || (s.repeat = 0),
				(s.immediateRender = !!s.immediateRender),
				new nt(i, s, Ln(this, o), 1),
				this
			);
		}),
		(n.call = function (i, s, o) {
			return wr(this, nt.delayedCall(0, i, s), o);
		}),
		(n.staggerTo = function (i, s, o, l, u, a, c) {
			return (
				(o.duration = s),
				(o.stagger = o.stagger || l),
				(o.onComplete = a),
				(o.onCompleteParams = c),
				(o.parent = this),
				new nt(i, o, Ln(this, u)),
				this
			);
		}),
		(n.staggerFrom = function (i, s, o, l, u, a, c) {
			return (
				(o.runBackwards = 1),
				(al(o).immediateRender = pn(o.immediateRender)),
				this.staggerTo(i, s, o, l, u, a, c)
			);
		}),
		(n.staggerFromTo = function (i, s, o, l, u, a, c, d) {
			return (
				(l.startAt = o),
				(al(l).immediateRender = pn(l.immediateRender)),
				this.staggerTo(i, s, l, u, a, c, d)
			);
		}),
		(n.render = function (i, s, o) {
			var l = this._time,
				u = this._dirty ? this.totalDuration() : this._tDur,
				a = this._dur,
				c = i <= 0 ? 0 : vt(i),
				d = this._zTime < 0 != i < 0 && (this._initted || !a),
				f,
				h,
				g,
				m,
				T,
				_,
				p,
				y,
				x,
				k,
				C,
				E;
			if (
				(this !== $e && c > u && i >= 0 && (c = u), c !== this._tTime || o || d)
			) {
				if (
					(l !== this._time &&
						a &&
						((c += this._time - l), (i += this._time - l)),
					(f = c),
					(x = this._start),
					(y = this._ts),
					(_ = !y),
					d && (a || (l = this._zTime), (i || !s) && (this._zTime = i)),
					this._repeat)
				) {
					if (
						((C = this._yoyo),
						(T = a + this._rDelay),
						this._repeat < -1 && i < 0)
					)
						return this.totalTime(T * 100 + i, s, o);
					if (
						((f = vt(c % T)),
						c === u
							? ((m = this._repeat), (f = a))
							: ((m = ~~(c / T)),
								m && m === c / T && ((f = a), m--),
								f > a && (f = a)),
						(k = vo(this._tTime, T)),
						!l &&
							this._tTime &&
							k !== m &&
							this._tTime - k * T - this._dur <= 0 &&
							(k = m),
						C && m & 1 && ((f = a - f), (E = 1)),
						m !== k && !this._lock)
					) {
						var N = C && k & 1,
							j = N === (C && m & 1);
						if (
							(m < k && (N = !N),
							(l = N ? 0 : c % a ? a : c),
							(this._lock = 1),
							(this.render(l || (E ? 0 : vt(m * T)), s, !a)._lock = 0),
							(this._tTime = c),
							!s && this.parent && Pn(this, 'onRepeat'),
							this.vars.repeatRefresh && !E && (this.invalidate()._lock = 1),
							(l && l !== this._time) ||
								_ !== !this._ts ||
								(this.vars.onRepeat && !this.parent && !this._act))
						)
							return this;
						if (
							((a = this._dur),
							(u = this._tDur),
							j &&
								((this._lock = 2),
								(l = N ? a : -1e-4),
								this.render(l, !0),
								this.vars.repeatRefresh && !E && this.invalidate()),
							(this._lock = 0),
							!this._ts && !_)
						)
							return this;
						dv(this, E);
					}
				}
				if (
					(this._hasPause &&
						!this._forcing &&
						this._lock < 2 &&
						((p = jS(this, vt(l), vt(f))), p && (c -= f - (f = p._start))),
					(this._tTime = c),
					(this._time = f),
					(this._act = !y),
					this._initted ||
						((this._onUpdate = this.vars.onUpdate),
						(this._initted = 1),
						(this._zTime = i),
						(l = 0)),
					!l && f && !s && !m && (Pn(this, 'onStart'), this._tTime !== c))
				)
					return this;
				if (f >= l && i >= 0)
					for (h = this._first; h; ) {
						if (
							((g = h._next), (h._act || f >= h._start) && h._ts && p !== h)
						) {
							if (h.parent !== this) return this.render(i, s, o);
							if (
								(h.render(
									h._ts > 0
										? (f - h._start) * h._ts
										: (h._dirty ? h.totalDuration() : h._tDur) +
												(f - h._start) * h._ts,
									s,
									o,
								),
								f !== this._time || (!this._ts && !_))
							) {
								(p = 0), g && (c += this._zTime = -ke);
								break;
							}
						}
						h = g;
					}
				else {
					h = this._last;
					for (var M = i < 0 ? i : f; h; ) {
						if (((g = h._prev), (h._act || M <= h._end) && h._ts && p !== h)) {
							if (h.parent !== this) return this.render(i, s, o);
							if (
								(h.render(
									h._ts > 0
										? (M - h._start) * h._ts
										: (h._dirty ? h.totalDuration() : h._tDur) +
												(M - h._start) * h._ts,
									s,
									o || ($t && (h._initted || h._startAt)),
								),
								f !== this._time || (!this._ts && !_))
							) {
								(p = 0), g && (c += this._zTime = M ? -ke : ke);
								break;
							}
						}
						h = g;
					}
				}
				if (
					p &&
					!s &&
					(this.pause(),
					(p.render(f >= l ? 0 : -ke)._zTime = f >= l ? 1 : -1),
					this._ts)
				)
					return (this._start = x), dc(this), this.render(i, s, o);
				this._onUpdate && !s && Pn(this, 'onUpdate', !0),
					((c === u && this._tTime >= this.totalDuration()) || (!c && l)) &&
						(x === this._start || Math.abs(y) !== Math.abs(this._ts)) &&
						(this._lock ||
							((i || !a) &&
								((c === u && this._ts > 0) || (!c && this._ts < 0)) &&
								Mi(this, 1),
							!s &&
								!(i < 0 && !l) &&
								(c || l || !u) &&
								(Pn(
									this,
									c === u && i >= 0 ? 'onComplete' : 'onReverseComplete',
									!0,
								),
								this._prom &&
									!(c < u && this.timeScale() > 0) &&
									this._prom())));
			}
			return this;
		}),
		(n.add = function (i, s) {
			var o = this;
			if ((Kr(s) || (s = Ln(this, s, i)), !(i instanceof Wl))) {
				if (Ut(i))
					return (
						i.forEach(function (l) {
							return o.add(l, s);
						}),
						this
					);
				if (xt(i)) return this.addLabel(i, s);
				if (Qe(i)) i = nt.delayedCall(0, i);
				else return this;
			}
			return this !== i ? wr(this, i, s) : this;
		}),
		(n.getChildren = function (i, s, o, l) {
			i === void 0 && (i = !0),
				s === void 0 && (s = !0),
				o === void 0 && (o = !0),
				l === void 0 && (l = -Bn);
			for (var u = [], a = this._first; a; )
				a._start >= l &&
					(a instanceof nt
						? s && u.push(a)
						: (o && u.push(a), i && u.push.apply(u, a.getChildren(!0, s, o)))),
					(a = a._next);
			return u;
		}),
		(n.getById = function (i) {
			for (var s = this.getChildren(1, 1, 1), o = s.length; o--; )
				if (s[o].vars.id === i) return s[o];
		}),
		(n.remove = function (i) {
			return xt(i)
				? this.removeLabel(i)
				: Qe(i)
					? this.killTweensOf(i)
					: (fc(this, i),
						i === this._recent && (this._recent = this._last),
						ss(this));
		}),
		(n.totalTime = function (i, s) {
			return arguments.length
				? ((this._forcing = 1),
					!this._dp &&
						this._ts &&
						(this._start = vt(
							Tn.time -
								(this._ts > 0
									? i / this._ts
									: (this.totalDuration() - i) / -this._ts),
						)),
					t.prototype.totalTime.call(this, i, s),
					(this._forcing = 0),
					this)
				: this._tTime;
		}),
		(n.addLabel = function (i, s) {
			return (this.labels[i] = Ln(this, s)), this;
		}),
		(n.removeLabel = function (i) {
			return delete this.labels[i], this;
		}),
		(n.addPause = function (i, s, o) {
			var l = nt.delayedCall(0, s || $l, o);
			return (
				(l.data = 'isPause'), (this._hasPause = 1), wr(this, l, Ln(this, i))
			);
		}),
		(n.removePause = function (i) {
			var s = this._first;
			for (i = Ln(this, i); s; )
				s._start === i && s.data === 'isPause' && Mi(s), (s = s._next);
		}),
		(n.killTweensOf = function (i, s, o) {
			for (var l = this.getTweensOf(i, o), u = l.length; u--; )
				fi !== l[u] && l[u].kill(i, s);
			return this;
		}),
		(n.getTweensOf = function (i, s) {
			for (var o = [], l = Wn(i), u = this._first, a = Kr(s), c; u; )
				u instanceof nt
					? TS(u._targets, l) &&
						(a
							? (!fi || (u._initted && u._ts)) &&
								u.globalTime(0) <= s &&
								u.globalTime(u.totalDuration()) > s
							: !s || u.isActive()) &&
						o.push(u)
					: (c = u.getTweensOf(l, s)).length && o.push.apply(o, c),
					(u = u._next);
			return o;
		}),
		(n.tweenTo = function (i, s) {
			s = s || {};
			var o = this,
				l = Ln(o, i),
				u = s,
				a = u.startAt,
				c = u.onStart,
				d = u.onStartParams,
				f = u.immediateRender,
				h,
				g = nt.to(
					o,
					Xn(
						{
							ease: s.ease || 'none',
							lazy: !1,
							immediateRender: !1,
							time: l,
							overwrite: 'auto',
							duration:
								s.duration ||
								Math.abs(
									(l - (a && 'time' in a ? a.time : o._time)) / o.timeScale(),
								) ||
								ke,
							onStart: function () {
								if ((o.pause(), !h)) {
									var T =
										s.duration ||
										Math.abs(
											(l - (a && 'time' in a ? a.time : o._time)) /
												o.timeScale(),
										);
									g._dur !== T && yo(g, T, 0, 1).render(g._time, !0, !0),
										(h = 1);
								}
								c && c.apply(g, d || []);
							},
						},
						s,
					),
				);
			return f ? g.render(0) : g;
		}),
		(n.tweenFromTo = function (i, s, o) {
			return this.tweenTo(s, Xn({ startAt: { time: Ln(this, i) } }, o));
		}),
		(n.recent = function () {
			return this._recent;
		}),
		(n.nextLabel = function (i) {
			return i === void 0 && (i = this._time), ym(this, Ln(this, i));
		}),
		(n.previousLabel = function (i) {
			return i === void 0 && (i = this._time), ym(this, Ln(this, i), 1);
		}),
		(n.currentLabel = function (i) {
			return arguments.length
				? this.seek(i, !0)
				: this.previousLabel(this._time + ke);
		}),
		(n.shiftChildren = function (i, s, o) {
			o === void 0 && (o = 0);
			for (var l = this._first, u = this.labels, a; l; )
				l._start >= o && ((l._start += i), (l._end += i)), (l = l._next);
			if (s) for (a in u) u[a] >= o && (u[a] += i);
			return ss(this);
		}),
		(n.invalidate = function (i) {
			var s = this._first;
			for (this._lock = 0; s; ) s.invalidate(i), (s = s._next);
			return t.prototype.invalidate.call(this, i);
		}),
		(n.clear = function (i) {
			i === void 0 && (i = !0);
			for (var s = this._first, o; s; ) (o = s._next), this.remove(s), (s = o);
			return (
				this._dp && (this._time = this._tTime = this._pTime = 0),
				i && (this.labels = {}),
				ss(this)
			);
		}),
		(n.totalDuration = function (i) {
			var s = 0,
				o = this,
				l = o._last,
				u = Bn,
				a,
				c,
				d;
			if (arguments.length)
				return o.timeScale(
					(o._repeat < 0 ? o.duration() : o.totalDuration()) /
						(o.reversed() ? -i : i),
				);
			if (o._dirty) {
				for (d = o.parent; l; )
					(a = l._prev),
						l._dirty && l.totalDuration(),
						(c = l._start),
						c > u && o._sort && l._ts && !o._lock
							? ((o._lock = 1), (wr(o, l, c - l._delay, 1)._lock = 0))
							: (u = c),
						c < 0 &&
							l._ts &&
							((s -= c),
							((!d && !o._dp) || (d && d.smoothChildTiming)) &&
								((o._start += c / o._ts), (o._time -= c), (o._tTime -= c)),
							o.shiftChildren(-c, !1, -1 / 0),
							(u = 0)),
						l._end > s && l._ts && (s = l._end),
						(l = a);
				yo(o, o === $e && o._time > s ? o._time : s, 1, 1), (o._dirty = 0);
			}
			return o._tDur;
		}),
		(e.updateRoot = function (i) {
			if (($e._ts && (Yg($e, Aa(i, $e)), (bg = Tn.frame)), Tn.frame >= mm)) {
				mm += On.autoSleep || 120;
				var s = $e._first;
				if ((!s || !s._ts) && On.autoSleep && Tn._listeners.length < 2) {
					for (; s && !s._ts; ) s = s._next;
					s || Tn.sleep();
				}
			}
		}),
		e
	);
})(Wl);
Xn(Kt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var QS = function (e, n, r, i, s, o, l) {
		var u = new _n(this._pt, e, n, 0, 1, xv, null, s),
			a = 0,
			c = 0,
			d,
			f,
			h,
			g,
			m,
			T,
			_,
			p;
		for (
			u.b = r,
				u.e = i,
				r += '',
				i += '',
				(_ = ~i.indexOf('random(')) && (i = Ul(i)),
				o && ((p = [r, i]), o(p, e, n), (r = p[0]), (i = p[1])),
				f = r.match(Wc) || [];
			(d = Wc.exec(i));

		)
			(g = d[0]),
				(m = i.substring(a, d.index)),
				h ? (h = (h + 1) % 5) : m.substr(-5) === 'rgba(' && (h = 1),
				g !== f[c++] &&
					((T = parseFloat(f[c - 1]) || 0),
					(u._pt = {
						_next: u._pt,
						p: m || c === 1 ? m : ',',
						s: T,
						c: g.charAt(1) === '=' ? no(T, g) - T : parseFloat(g) - T,
						m: h && h < 4 ? Math.round : 0,
					}),
					(a = Wc.lastIndex));
		return (
			(u.c = a < i.length ? i.substring(a, i.length) : ''),
			(u.fp = l),
			(Vg.test(i) || _) && (u.e = 0),
			(this._pt = u),
			u
		);
	},
	Dh = function (e, n, r, i, s, o, l, u, a, c) {
		Qe(i) && (i = i(s || 0, e, o));
		var d = e[n],
			f =
				r !== 'get'
					? r
					: Qe(d)
						? a
							? e[
									n.indexOf('set') || !Qe(e['get' + n.substr(3)])
										? n
										: 'get' + n.substr(3)
								](a)
							: e[n]()
						: d,
			h = Qe(d) ? (a ? ZS : vv) : Lh,
			g;
		if (
			(xt(i) &&
				(~i.indexOf('random(') && (i = Ul(i)),
				i.charAt(1) === '=' &&
					((g = no(f, i) + (Vt(f) || 0)), (g || g === 0) && (i = g))),
			!c || f !== i || pd)
		)
			return !isNaN(f * i) && i !== ''
				? ((g = new _n(
						this._pt,
						e,
						n,
						+f || 0,
						i - (f || 0),
						typeof d == 'boolean' ? ek : yv,
						0,
						h,
					)),
					a && (g.fp = a),
					l && g.modifier(l, this, e),
					(this._pt = g))
				: (!d && !(n in e) && Oh(n, i),
					QS.call(this, e, n, f, i, h, u || On.stringFilter, a));
	},
	XS = function (e, n, r, i, s) {
		if (
			(Qe(e) && (e = fl(e, s, n, r, i)),
			!Or(e) || (e.style && e.nodeType) || Ut(e) || Fg(e))
		)
			return xt(e) ? fl(e, s, n, r, i) : e;
		var o = {},
			l;
		for (l in e) o[l] = fl(e[l], s, n, r, i);
		return o;
	},
	mv = function (e, n, r, i, s, o) {
		var l, u, a, c;
		if (
			kn[e] &&
			(l = new kn[e]()).init(
				s,
				l.rawVars ? n[e] : XS(n[e], i, s, o, r),
				r,
				i,
				o,
			) !== !1 &&
			((r._pt = u = new _n(r._pt, s, e, 0, 1, l.render, l, 0, l.priority)),
			r !== Qs)
		)
			for (a = r._ptLookup[r._targets.indexOf(s)], c = l._props.length; c--; )
				a[l._props[c]] = u;
		return l;
	},
	fi,
	pd,
	Ah = function t(e, n, r) {
		var i = e.vars,
			s = i.ease,
			o = i.startAt,
			l = i.immediateRender,
			u = i.lazy,
			a = i.onUpdate,
			c = i.runBackwards,
			d = i.yoyoEase,
			f = i.keyframes,
			h = i.autoRevert,
			g = e._dur,
			m = e._startAt,
			T = e._targets,
			_ = e.parent,
			p = _ && _.data === 'nested' ? _.vars.targets : T,
			y = e._overwrite === 'auto' && !Eh,
			x = e.timeline,
			k,
			C,
			E,
			N,
			j,
			M,
			H,
			D,
			I,
			Y,
			K,
			G,
			Q;
		if (
			(x && (!f || !s) && (s = 'none'),
			(e._ease = os(s, go.ease)),
			(e._yEase = d ? fv(os(d === !0 ? s : d, go.ease)) : 0),
			d &&
				e._yoyo &&
				!e._repeat &&
				((d = e._yEase), (e._yEase = e._ease), (e._ease = d)),
			(e._from = !x && !!i.runBackwards),
			!x || (f && !i.stagger))
		) {
			if (
				((D = T[0] ? is(T[0]).harness : 0),
				(G = D && i[D.prop]),
				(k = Da(i, Mh)),
				m &&
					(m._zTime < 0 && m.progress(1),
					n < 0 && c && l && !h ? m.render(-1, !0) : m.revert(c && g ? Ku : SS),
					(m._lazy = 0)),
				o)
			) {
				if (
					(Mi(
						(e._startAt = nt.set(
							T,
							Xn(
								{
									data: 'isStart',
									overwrite: !1,
									parent: _,
									immediateRender: !0,
									lazy: !m && pn(u),
									startAt: null,
									delay: 0,
									onUpdate:
										a &&
										function () {
											return Pn(e, 'onUpdate');
										},
									stagger: 0,
								},
								o,
							),
						)),
					),
					(e._startAt._dp = 0),
					(e._startAt._sat = e),
					n < 0 && ($t || (!l && !h)) && e._startAt.revert(Ku),
					l && g && n <= 0 && r <= 0)
				) {
					n && (e._zTime = n);
					return;
				}
			} else if (c && g && !m) {
				if (
					(n && (l = !1),
					(E = Xn(
						{
							overwrite: !1,
							data: 'isFromStart',
							lazy: l && !m && pn(u),
							immediateRender: l,
							stagger: 0,
							parent: _,
						},
						k,
					)),
					G && (E[D.prop] = G),
					Mi((e._startAt = nt.set(T, E))),
					(e._startAt._dp = 0),
					(e._startAt._sat = e),
					n < 0 && ($t ? e._startAt.revert(Ku) : e._startAt.render(-1, !0)),
					(e._zTime = n),
					!l)
				)
					t(e._startAt, ke, ke);
				else if (!n) return;
			}
			for (
				e._pt = e._ptCache = 0, u = (g && pn(u)) || (u && !g), C = 0;
				C < T.length;
				C++
			) {
				if (
					((j = T[C]),
					(H = j._gsap || Rh(T)[C]._gsap),
					(e._ptLookup[C] = Y = {}),
					ud[H.id] && Ei.length && Ra(),
					(K = p === T ? C : p.indexOf(j)),
					D &&
						(I = new D()).init(j, G || k, e, K, p) !== !1 &&
						((e._pt = N =
							new _n(e._pt, j, I.name, 0, 1, I.render, I, 0, I.priority)),
						I._props.forEach(function (A) {
							Y[A] = N;
						}),
						I.priority && (M = 1)),
					!D || G)
				)
					for (E in k)
						kn[E] && (I = mv(E, k, e, K, j, p))
							? I.priority && (M = 1)
							: (Y[E] = N =
									Dh.call(e, j, E, 'get', k[E], K, p, 0, i.stringFilter));
				e._op && e._op[C] && e.kill(j, e._op[C]),
					y &&
						e._pt &&
						((fi = e),
						$e.killTweensOf(j, Y, e.globalTime(n)),
						(Q = !e.parent),
						(fi = 0)),
					e._pt && u && (ud[H.id] = 1);
			}
			M && wv(e), e._onInit && e._onInit(e);
		}
		(e._onUpdate = a),
			(e._initted = (!e._op || e._pt) && !Q),
			f && n <= 0 && x.render(Bn, !0, !0);
	},
	GS = function (e, n, r, i, s, o, l, u) {
		var a = ((e._pt && e._ptCache) || (e._ptCache = {}))[n],
			c,
			d,
			f,
			h;
		if (!a)
			for (
				a = e._ptCache[n] = [], f = e._ptLookup, h = e._targets.length;
				h--;

			) {
				if (((c = f[h][n]), c && c.d && c.d._pt))
					for (c = c.d._pt; c && c.p !== n && c.fp !== n; ) c = c._next;
				if (!c)
					return (
						(pd = 1),
						(e.vars[n] = '+=0'),
						Ah(e, l),
						(pd = 0),
						u ? Vl(n + ' not eligible for reset') : 1
					);
				a.push(c);
			}
		for (h = a.length; h--; )
			(d = a[h]),
				(c = d._pt || d),
				(c.s = (i || i === 0) && !s ? i : c.s + (i || 0) + o * c.c),
				(c.c = r - c.s),
				d.e && (d.e = qe(r) + Vt(d.e)),
				d.b && (d.b = c.s + Vt(d.b));
	},
	KS = function (e, n) {
		var r = e[0] ? is(e[0]).harness : 0,
			i = r && r.aliases,
			s,
			o,
			l,
			u;
		if (!i) return n;
		s = _s({}, n);
		for (o in i)
			if (o in s) for (u = i[o].split(','), l = u.length; l--; ) s[u[l]] = s[o];
		return s;
	},
	qS = function (e, n, r, i) {
		var s = n.ease || i || 'power1.inOut',
			o,
			l;
		if (Ut(n))
			(l = r[e] || (r[e] = [])),
				n.forEach(function (u, a) {
					return l.push({ t: (a / (n.length - 1)) * 100, v: u, e: s });
				});
		else
			for (o in n)
				(l = r[o] || (r[o] = [])),
					o === 'ease' || l.push({ t: parseFloat(e), v: n[o], e: s });
	},
	fl = function (e, n, r, i, s) {
		return Qe(e)
			? e.call(n, r, i, s)
			: xt(e) && ~e.indexOf('random(')
				? Ul(e)
				: e;
	},
	_v = jh + 'repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert',
	gv = {};
mn(_v + ',id,stagger,delay,duration,paused,scrollTrigger', function (t) {
	return (gv[t] = 1);
});
var nt = (function (t) {
	Lg(e, t);
	function e(r, i, s, o) {
		var l;
		typeof i == 'number' && ((s.duration = i), (i = s), (s = null)),
			(l = t.call(this, o ? i : al(i)) || this);
		var u = l.vars,
			a = u.duration,
			c = u.delay,
			d = u.immediateRender,
			f = u.stagger,
			h = u.overwrite,
			g = u.keyframes,
			m = u.defaults,
			T = u.scrollTrigger,
			_ = u.yoyoEase,
			p = i.parent || $e,
			y = (Ut(r) || Fg(r) ? Kr(r[0]) : 'length' in i) ? [r] : Wn(r),
			x,
			k,
			C,
			E,
			N,
			j,
			M,
			H;
		if (
			((l._targets = y.length
				? Rh(y)
				: Vl(
						'GSAP target ' + r + ' not found. https://gsap.com',
						!On.nullTargetWarn,
					) || []),
			(l._ptLookup = []),
			(l._overwrite = h),
			g || f || ku(a) || ku(c))
		) {
			if (
				((i = l.vars),
				(x = l.timeline =
					new Kt({
						data: 'nested',
						defaults: m || {},
						targets: p && p.data === 'nested' ? p.vars.targets : y,
					})),
				x.kill(),
				(x.parent = x._dp = zr(l)),
				(x._start = 0),
				f || ku(a) || ku(c))
			) {
				if (((E = y.length), (M = f && tv(f)), Or(f)))
					for (N in f) ~_v.indexOf(N) && (H || (H = {}), (H[N] = f[N]));
				for (k = 0; k < E; k++)
					(C = Da(i, gv)),
						(C.stagger = 0),
						_ && (C.yoyoEase = _),
						H && _s(C, H),
						(j = y[k]),
						(C.duration = +fl(a, zr(l), k, j, y)),
						(C.delay = (+fl(c, zr(l), k, j, y) || 0) - l._delay),
						!f &&
							E === 1 &&
							C.delay &&
							((l._delay = c = C.delay), (l._start += c), (C.delay = 0)),
						x.to(j, C, M ? M(k, j, y) : 0),
						(x._ease = pe.none);
				x.duration() ? (a = c = 0) : (l.timeline = 0);
			} else if (g) {
				al(Xn(x.vars.defaults, { ease: 'none' })),
					(x._ease = os(g.ease || i.ease || 'none'));
				var D = 0,
					I,
					Y,
					K;
				if (Ut(g))
					g.forEach(function (G) {
						return x.to(y, G, '>');
					}),
						x.duration();
				else {
					C = {};
					for (N in g)
						N === 'ease' || N === 'easeEach' || qS(N, g[N], C, g.easeEach);
					for (N in C)
						for (
							I = C[N].sort(function (G, Q) {
								return G.t - Q.t;
							}),
								D = 0,
								k = 0;
							k < I.length;
							k++
						)
							(Y = I[k]),
								(K = {
									ease: Y.e,
									duration: ((Y.t - (k ? I[k - 1].t : 0)) / 100) * a,
								}),
								(K[N] = Y.v),
								x.to(y, K, D),
								(D += K.duration);
					x.duration() < a && x.to({}, { duration: a - x.duration() });
				}
			}
			a || l.duration((a = x.duration()));
		} else l.timeline = 0;
		return (
			h === !0 && !Eh && ((fi = zr(l)), $e.killTweensOf(y), (fi = 0)),
			wr(p, zr(l), s),
			i.reversed && l.reverse(),
			i.paused && l.paused(!0),
			(d ||
				(!a &&
					!g &&
					l._start === vt(p._time) &&
					pn(d) &&
					NS(zr(l)) &&
					p.data !== 'nested')) &&
				((l._tTime = -ke), l.render(Math.max(0, -c) || 0)),
			T && qg(zr(l), T),
			l
		);
	}
	var n = e.prototype;
	return (
		(n.render = function (i, s, o) {
			var l = this._time,
				u = this._tDur,
				a = this._dur,
				c = i < 0,
				d = i > u - ke && !c ? u : i < ke ? 0 : i,
				f,
				h,
				g,
				m,
				T,
				_,
				p,
				y,
				x;
			if (!a) MS(this, i, s, o);
			else if (
				d !== this._tTime ||
				!i ||
				o ||
				(!this._initted && this._tTime) ||
				(this._startAt && this._zTime < 0 !== c)
			) {
				if (((f = d), (y = this.timeline), this._repeat)) {
					if (((m = a + this._rDelay), this._repeat < -1 && c))
						return this.totalTime(m * 100 + i, s, o);
					if (
						((f = vt(d % m)),
						d === u
							? ((g = this._repeat), (f = a))
							: ((g = ~~(d / m)),
								g && g === vt(d / m) && ((f = a), g--),
								f > a && (f = a)),
						(_ = this._yoyo && g & 1),
						_ && ((x = this._yEase), (f = a - f)),
						(T = vo(this._tTime, m)),
						f === l && !o && this._initted && g === T)
					)
						return (this._tTime = d), this;
					g !== T &&
						(y && this._yEase && dv(y, _),
						this.vars.repeatRefresh &&
							!_ &&
							!this._lock &&
							this._time !== m &&
							this._initted &&
							((this._lock = o = 1),
							(this.render(vt(m * g), !0).invalidate()._lock = 0)));
				}
				if (!this._initted) {
					if (Zg(this, c ? i : f, o, s, d)) return (this._tTime = 0), this;
					if (l !== this._time && !(o && this.vars.repeatRefresh && g !== T))
						return this;
					if (a !== this._dur) return this.render(i, s, o);
				}
				if (
					((this._tTime = d),
					(this._time = f),
					!this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
					(this.ratio = p = (x || this._ease)(f / a)),
					this._from && (this.ratio = p = 1 - p),
					f && !l && !s && !g && (Pn(this, 'onStart'), this._tTime !== d))
				)
					return this;
				for (h = this._pt; h; ) h.r(p, h.d), (h = h._next);
				(y && y.render(i < 0 ? i : y._dur * y._ease(f / this._dur), s, o)) ||
					(this._startAt && (this._zTime = i)),
					this._onUpdate &&
						!s &&
						(c && ad(this, i, s, o), Pn(this, 'onUpdate')),
					this._repeat &&
						g !== T &&
						this.vars.onRepeat &&
						!s &&
						this.parent &&
						Pn(this, 'onRepeat'),
					(d === this._tDur || !d) &&
						this._tTime === d &&
						(c && !this._onUpdate && ad(this, i, !0, !0),
						(i || !a) &&
							((d === this._tDur && this._ts > 0) || (!d && this._ts < 0)) &&
							Mi(this, 1),
						!s &&
							!(c && !l) &&
							(d || l || _) &&
							(Pn(this, d === u ? 'onComplete' : 'onReverseComplete', !0),
							this._prom && !(d < u && this.timeScale() > 0) && this._prom()));
			}
			return this;
		}),
		(n.targets = function () {
			return this._targets;
		}),
		(n.invalidate = function (i) {
			return (
				(!i || !this.vars.runBackwards) && (this._startAt = 0),
				(this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
				(this._ptLookup = []),
				this.timeline && this.timeline.invalidate(i),
				t.prototype.invalidate.call(this, i)
			);
		}),
		(n.resetTo = function (i, s, o, l, u) {
			Bl || Tn.wake(), this._ts || this.play();
			var a = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
				c;
			return (
				this._initted || Ah(this, a),
				(c = this._ease(a / this._dur)),
				GS(this, i, s, o, l, c, a, u)
					? this.resetTo(i, s, o, l, 1)
					: (hc(this, 0),
						this.parent ||
							Gg(
								this._dp,
								this,
								'_first',
								'_last',
								this._dp._sort ? '_start' : 0,
							),
						this.render(0))
			);
		}),
		(n.kill = function (i, s) {
			if ((s === void 0 && (s = 'all'), !i && (!s || s === 'all')))
				return (this._lazy = this._pt = 0), this.parent ? Qo(this) : this;
			if (this.timeline) {
				var o = this.timeline.totalDuration();
				return (
					this.timeline.killTweensOf(i, s, fi && fi.vars.overwrite !== !0)
						._first || Qo(this),
					this.parent &&
						o !== this.timeline.totalDuration() &&
						yo(this, (this._dur * this.timeline._tDur) / o, 0, 1),
					this
				);
			}
			var l = this._targets,
				u = i ? Wn(i) : l,
				a = this._ptLookup,
				c = this._pt,
				d,
				f,
				h,
				g,
				m,
				T,
				_;
			if ((!s || s === 'all') && CS(l, u))
				return s === 'all' && (this._pt = 0), Qo(this);
			for (
				d = this._op = this._op || [],
					s !== 'all' &&
						(xt(s) &&
							((m = {}),
							mn(s, function (p) {
								return (m[p] = 1);
							}),
							(s = m)),
						(s = KS(l, s))),
					_ = l.length;
				_--;

			)
				if (~u.indexOf(l[_])) {
					(f = a[_]),
						s === 'all'
							? ((d[_] = s), (g = f), (h = {}))
							: ((h = d[_] = d[_] || {}), (g = s));
					for (m in g)
						(T = f && f[m]),
							T &&
								((!('kill' in T.d) || T.d.kill(m) === !0) && fc(this, T, '_pt'),
								delete f[m]),
							h !== 'all' && (h[m] = 1);
				}
			return this._initted && !this._pt && c && Qo(this), this;
		}),
		(e.to = function (i, s) {
			return new e(i, s, arguments[2]);
		}),
		(e.from = function (i, s) {
			return cl(1, arguments);
		}),
		(e.delayedCall = function (i, s, o, l) {
			return new e(s, 0, {
				immediateRender: !1,
				lazy: !1,
				overwrite: !1,
				delay: i,
				onComplete: s,
				onReverseComplete: s,
				onCompleteParams: o,
				onReverseCompleteParams: o,
				callbackScope: l,
			});
		}),
		(e.fromTo = function (i, s, o) {
			return cl(2, arguments);
		}),
		(e.set = function (i, s) {
			return (s.duration = 0), s.repeatDelay || (s.repeat = 0), new e(i, s);
		}),
		(e.killTweensOf = function (i, s, o) {
			return $e.killTweensOf(i, s, o);
		}),
		e
	);
})(Wl);
Xn(nt.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
mn('staggerTo,staggerFrom,staggerFromTo', function (t) {
	nt[t] = function () {
		var e = new Kt(),
			n = fd.call(arguments, 0);
		return n.splice(t === 'staggerFromTo' ? 5 : 4, 0, 0), e[t].apply(e, n);
	};
});
var Lh = function (e, n, r) {
		return (e[n] = r);
	},
	vv = function (e, n, r) {
		return e[n](r);
	},
	ZS = function (e, n, r, i) {
		return e[n](i.fp, r);
	},
	JS = function (e, n, r) {
		return e.setAttribute(n, r);
	},
	zh = function (e, n) {
		return Qe(e[n]) ? vv : Ch(e[n]) && e.setAttribute ? JS : Lh;
	},
	yv = function (e, n) {
		return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e6) / 1e6, n);
	},
	ek = function (e, n) {
		return n.set(n.t, n.p, !!(n.s + n.c * e), n);
	},
	xv = function (e, n) {
		var r = n._pt,
			i = '';
		if (!e && n.b) i = n.b;
		else if (e === 1 && n.e) i = n.e;
		else {
			for (; r; )
				(i =
					r.p +
					(r.m ? r.m(r.s + r.c * e) : Math.round((r.s + r.c * e) * 1e4) / 1e4) +
					i),
					(r = r._next);
			i += n.c;
		}
		n.set(n.t, n.p, i, n);
	},
	Fh = function (e, n) {
		for (var r = n._pt; r; ) r.r(e, r.d), (r = r._next);
	},
	tk = function (e, n, r, i) {
		for (var s = this._pt, o; s; )
			(o = s._next), s.p === i && s.modifier(e, n, r), (s = o);
	},
	nk = function (e) {
		for (var n = this._pt, r, i; n; )
			(i = n._next),
				(n.p === e && !n.op) || n.op === e
					? fc(this, n, '_pt')
					: n.dep || (r = 1),
				(n = i);
		return !r;
	},
	rk = function (e, n, r, i) {
		i.mSet(e, n, i.m.call(i.tween, r, i.mt), i);
	},
	wv = function (e) {
		for (var n = e._pt, r, i, s, o; n; ) {
			for (r = n._next, i = s; i && i.pr > n.pr; ) i = i._next;
			(n._prev = i ? i._prev : o) ? (n._prev._next = n) : (s = n),
				(n._next = i) ? (i._prev = n) : (o = n),
				(n = r);
		}
		e._pt = s;
	},
	_n = (function () {
		function t(n, r, i, s, o, l, u, a, c) {
			(this.t = r),
				(this.s = s),
				(this.c = o),
				(this.p = i),
				(this.r = l || yv),
				(this.d = u || this),
				(this.set = a || Lh),
				(this.pr = c || 0),
				(this._next = n),
				n && (n._prev = this);
		}
		var e = t.prototype;
		return (
			(e.modifier = function (r, i, s) {
				(this.mSet = this.mSet || this.set),
					(this.set = rk),
					(this.m = r),
					(this.mt = s),
					(this.tween = i);
			}),
			t
		);
	})();
mn(
	jh +
		'parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger',
	function (t) {
		return (Mh[t] = 1);
	},
);
jn.TweenMax = jn.TweenLite = nt;
jn.TimelineLite = jn.TimelineMax = Kt;
$e = new Kt({
	sortChildren: !1,
	defaults: go,
	autoRemoveChildren: !0,
	id: 'root',
	smoothChildTiming: !0,
});
On.stringFilter = cv;
var ls = [],
	Zu = {},
	ik = [],
	wm = 0,
	sk = 0,
	Xc = function (e) {
		return (Zu[e] || ik).map(function (n) {
			return n();
		});
	},
	md = function () {
		var e = Date.now(),
			n = [];
		e - wm > 2 &&
			(Xc('matchMediaInit'),
			ls.forEach(function (r) {
				var i = r.queries,
					s = r.conditions,
					o,
					l,
					u,
					a;
				for (l in i)
					(o = vr.matchMedia(i[l]).matches),
						o && (u = 1),
						o !== s[l] && ((s[l] = o), (a = 1));
				a && (r.revert(), u && n.push(r));
			}),
			Xc('matchMediaRevert'),
			n.forEach(function (r) {
				return r.onMatch(r, function (i) {
					return r.add(null, i);
				});
			}),
			(wm = e),
			Xc('matchMedia'));
	},
	Sv = (function () {
		function t(n, r) {
			(this.selector = r && dd(r)),
				(this.data = []),
				(this._r = []),
				(this.isReverted = !1),
				(this.id = sk++),
				n && this.add(n);
		}
		var e = t.prototype;
		return (
			(e.add = function (r, i, s) {
				Qe(r) && ((s = i), (i = r), (r = Qe));
				var o = this,
					l = function () {
						var a = Le,
							c = o.selector,
							d;
						return (
							a && a !== o && a.data.push(o),
							s && (o.selector = dd(s)),
							(Le = o),
							(d = i.apply(o, arguments)),
							Qe(d) && o._r.push(d),
							(Le = a),
							(o.selector = c),
							(o.isReverted = !1),
							d
						);
					};
				return (
					(o.last = l),
					r === Qe
						? l(o, function (u) {
								return o.add(null, u);
							})
						: r
							? (o[r] = l)
							: l
				);
			}),
			(e.ignore = function (r) {
				var i = Le;
				(Le = null), r(this), (Le = i);
			}),
			(e.getTweens = function () {
				var r = [];
				return (
					this.data.forEach(function (i) {
						return i instanceof t
							? r.push.apply(r, i.getTweens())
							: i instanceof nt &&
									!(i.parent && i.parent.data === 'nested') &&
									r.push(i);
					}),
					r
				);
			}),
			(e.clear = function () {
				this._r.length = this.data.length = 0;
			}),
			(e.kill = function (r, i) {
				var s = this;
				if (
					(r
						? (function () {
								for (var l = s.getTweens(), u = s.data.length, a; u--; )
									(a = s.data[u]),
										a.data === 'isFlip' &&
											(a.revert(),
											a.getChildren(!0, !0, !1).forEach(function (c) {
												return l.splice(l.indexOf(c), 1);
											}));
								for (
									l
										.map(function (c) {
											return {
												g:
													c._dur ||
													c._delay ||
													(c._sat && !c._sat.vars.immediateRender)
														? c.globalTime(0)
														: -1 / 0,
												t: c,
											};
										})
										.sort(function (c, d) {
											return d.g - c.g || -1 / 0;
										})
										.forEach(function (c) {
											return c.t.revert(r);
										}),
										u = s.data.length;
									u--;

								)
									(a = s.data[u]),
										a instanceof Kt
											? a.data !== 'nested' &&
												(a.scrollTrigger && a.scrollTrigger.revert(), a.kill())
											: !(a instanceof nt) && a.revert && a.revert(r);
								s._r.forEach(function (c) {
									return c(r, s);
								}),
									(s.isReverted = !0);
							})()
						: this.data.forEach(function (l) {
								return l.kill && l.kill();
							}),
					this.clear(),
					i)
				)
					for (var o = ls.length; o--; )
						ls[o].id === this.id && ls.splice(o, 1);
			}),
			(e.revert = function (r) {
				this.kill(r || {});
			}),
			t
		);
	})(),
	ok = (function () {
		function t(n) {
			(this.contexts = []), (this.scope = n), Le && Le.data.push(this);
		}
		var e = t.prototype;
		return (
			(e.add = function (r, i, s) {
				Or(r) || (r = { matches: r });
				var o = new Sv(0, s || this.scope),
					l = (o.conditions = {}),
					u,
					a,
					c;
				Le && !o.selector && (o.selector = Le.selector),
					this.contexts.push(o),
					(i = o.add('onMatch', i)),
					(o.queries = r);
				for (a in r)
					a === 'all'
						? (c = 1)
						: ((u = vr.matchMedia(r[a])),
							u &&
								(ls.indexOf(o) < 0 && ls.push(o),
								(l[a] = u.matches) && (c = 1),
								u.addListener
									? u.addListener(md)
									: u.addEventListener('change', md)));
				return (
					c &&
						i(o, function (d) {
							return o.add(null, d);
						}),
					this
				);
			}),
			(e.revert = function (r) {
				this.kill(r || {});
			}),
			(e.kill = function (r) {
				this.contexts.forEach(function (i) {
					return i.kill(r, !0);
				});
			}),
			t
		);
	})(),
	La = {
		registerPlugin: function () {
			for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
				n[r] = arguments[r];
			n.forEach(function (i) {
				return lv(i);
			});
		},
		timeline: function (e) {
			return new Kt(e);
		},
		getTweensOf: function (e, n) {
			return $e.getTweensOf(e, n);
		},
		getProperty: function (e, n, r, i) {
			xt(e) && (e = Wn(e)[0]);
			var s = is(e || {}).get,
				o = r ? Xg : Qg;
			return (
				r === 'native' && (r = ''),
				e &&
					(n
						? o(((kn[n] && kn[n].get) || s)(e, n, r, i))
						: function (l, u, a) {
								return o(((kn[l] && kn[l].get) || s)(e, l, u, a));
							})
			);
		},
		quickSetter: function (e, n, r) {
			if (((e = Wn(e)), e.length > 1)) {
				var i = e.map(function (c) {
						return vn.quickSetter(c, n, r);
					}),
					s = i.length;
				return function (c) {
					for (var d = s; d--; ) i[d](c);
				};
			}
			e = e[0] || {};
			var o = kn[n],
				l = is(e),
				u = (l.harness && (l.harness.aliases || {})[n]) || n,
				a = o
					? function (c) {
							var d = new o();
							(Qs._pt = 0),
								d.init(e, r ? c + r : c, Qs, 0, [e]),
								d.render(1, d),
								Qs._pt && Fh(1, Qs);
						}
					: l.set(e, u);
			return o
				? a
				: function (c) {
						return a(e, u, r ? c + r : c, l, 1);
					};
		},
		quickTo: function (e, n, r) {
			var i,
				s = vn.to(
					e,
					_s(((i = {}), (i[n] = '+=0.1'), (i.paused = !0), i), r || {}),
				),
				o = function (u, a, c) {
					return s.resetTo(n, u, a, c);
				};
			return (o.tween = s), o;
		},
		isTweening: function (e) {
			return $e.getTweensOf(e, !0).length > 0;
		},
		defaults: function (e) {
			return e && e.ease && (e.ease = os(e.ease, go.ease)), _m(go, e || {});
		},
		config: function (e) {
			return _m(On, e || {});
		},
		registerEffect: function (e) {
			var n = e.name,
				r = e.effect,
				i = e.plugins,
				s = e.defaults,
				o = e.extendTimeline;
			(i || '').split(',').forEach(function (l) {
				return (
					l && !kn[l] && !jn[l] && Vl(n + ' effect requires ' + l + ' plugin.')
				);
			}),
				(bc[n] = function (l, u, a) {
					return r(Wn(l), Xn(u || {}, s), a);
				}),
				o &&
					(Kt.prototype[n] = function (l, u, a) {
						return this.add(bc[n](l, Or(u) ? u : (a = u) && {}, this), a);
					});
		},
		registerEase: function (e, n) {
			pe[e] = os(n);
		},
		parseEase: function (e, n) {
			return arguments.length ? os(e, n) : pe;
		},
		getById: function (e) {
			return $e.getById(e);
		},
		exportRoot: function (e, n) {
			e === void 0 && (e = {});
			var r = new Kt(e),
				i,
				s;
			for (
				r.smoothChildTiming = pn(e.smoothChildTiming),
					$e.remove(r),
					r._dp = 0,
					r._time = r._tTime = $e._time,
					i = $e._first;
				i;

			)
				(s = i._next),
					(n ||
						!(
							!i._dur &&
							i instanceof nt &&
							i.vars.onComplete === i._targets[0]
						)) &&
						wr(r, i, i._start - i._delay),
					(i = s);
			return wr($e, r, 0), r;
		},
		context: function (e, n) {
			return e ? new Sv(e, n) : Le;
		},
		matchMedia: function (e) {
			return new ok(e);
		},
		matchMediaRefresh: function () {
			return (
				ls.forEach(function (e) {
					var n = e.conditions,
						r,
						i;
					for (i in n) n[i] && ((n[i] = !1), (r = 1));
					r && e.revert();
				}) || md()
			);
		},
		addEventListener: function (e, n) {
			var r = Zu[e] || (Zu[e] = []);
			~r.indexOf(n) || r.push(n);
		},
		removeEventListener: function (e, n) {
			var r = Zu[e],
				i = r && r.indexOf(n);
			i >= 0 && r.splice(i, 1);
		},
		utils: {
			wrap: IS,
			wrapYoyo: VS,
			distribute: tv,
			random: rv,
			snap: nv,
			normalize: FS,
			getUnit: Vt,
			clamp: DS,
			splitColor: uv,
			toArray: Wn,
			selector: dd,
			mapRange: sv,
			pipe: LS,
			unitize: zS,
			interpolate: $S,
			shuffle: ev,
		},
		install: Bg,
		effects: bc,
		ticker: Tn,
		updateRoot: Kt.updateRoot,
		plugins: kn,
		globalTimeline: $e,
		core: {
			PropTween: _n,
			globals: Wg,
			Tween: nt,
			Timeline: Kt,
			Animation: Wl,
			getCache: is,
			_removeLinkedListItem: fc,
			reverting: function () {
				return $t;
			},
			context: function (e) {
				return e && Le && (Le.data.push(e), (e._ctx = Le)), Le;
			},
			suppressOverwrites: function (e) {
				return (Eh = e);
			},
		},
	};
mn('to,from,fromTo,delayedCall,set,killTweensOf', function (t) {
	return (La[t] = nt[t]);
});
Tn.add(Kt.updateRoot);
Qs = La.to({}, { duration: 0 });
var lk = function (e, n) {
		for (var r = e._pt; r && r.p !== n && r.op !== n && r.fp !== n; )
			r = r._next;
		return r;
	},
	uk = function (e, n) {
		var r = e._targets,
			i,
			s,
			o;
		for (i in n)
			for (s = r.length; s--; )
				(o = e._ptLookup[s][i]),
					o &&
						(o = o.d) &&
						(o._pt && (o = lk(o, i)),
						o && o.modifier && o.modifier(n[i], e, r[s], i));
	},
	Gc = function (e, n) {
		return {
			name: e,
			rawVars: 1,
			init: function (i, s, o) {
				o._onInit = function (l) {
					var u, a;
					if (
						(xt(s) &&
							((u = {}),
							mn(s, function (c) {
								return (u[c] = 1);
							}),
							(s = u)),
						n)
					) {
						u = {};
						for (a in s) u[a] = n(s[a]);
						s = u;
					}
					uk(l, s);
				};
			},
		};
	},
	vn =
		La.registerPlugin(
			{
				name: 'attr',
				init: function (e, n, r, i, s) {
					var o, l, u;
					this.tween = r;
					for (o in n)
						(u = e.getAttribute(o) || ''),
							(l = this.add(
								e,
								'setAttribute',
								(u || 0) + '',
								n[o],
								i,
								s,
								0,
								0,
								o,
							)),
							(l.op = o),
							(l.b = u),
							this._props.push(o);
				},
				render: function (e, n) {
					for (var r = n._pt; r; )
						$t ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d), (r = r._next);
				},
			},
			{
				name: 'endArray',
				init: function (e, n) {
					for (var r = n.length; r--; )
						this.add(e, r, e[r] || 0, n[r], 0, 0, 0, 0, 0, 1);
				},
			},
			Gc('roundProps', hd),
			Gc('modifiers'),
			Gc('snap', nv),
		) || La;
nt.version = Kt.version = vn.version = '3.12.5';
Ug = 1;
Ph() && xo();
pe.Power0;
pe.Power1;
pe.Power2;
pe.Power3;
pe.Power4;
pe.Linear;
pe.Quad;
pe.Cubic;
pe.Quart;
pe.Quint;
pe.Strong;
pe.Elastic;
pe.Back;
pe.SteppedEase;
pe.Bounce;
pe.Sine;
pe.Expo;
pe.Circ;
/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Sm,
	di,
	ro,
	Ih,
	Ji,
	km,
	Vh,
	ak = function () {
		return typeof window < 'u';
	},
	qr = {},
	Qi = 180 / Math.PI,
	io = Math.PI / 180,
	Ns = Math.atan2,
	Tm = 1e8,
	$h = /([A-Z])/g,
	ck = /(left|right|width|margin|padding|x)/i,
	fk = /[\s,\(]\S/,
	Sr = {
		autoAlpha: 'opacity,visibility',
		scale: 'scaleX,scaleY',
		alpha: 'opacity',
	},
	_d = function (e, n) {
		return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u, n);
	},
	dk = function (e, n) {
		return n.set(
			n.t,
			n.p,
			e === 1 ? n.e : Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u,
			n,
		);
	},
	hk = function (e, n) {
		return n.set(
			n.t,
			n.p,
			e ? Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u : n.b,
			n,
		);
	},
	pk = function (e, n) {
		var r = n.s + n.c * e;
		n.set(n.t, n.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + n.u, n);
	},
	kv = function (e, n) {
		return n.set(n.t, n.p, e ? n.e : n.b, n);
	},
	Tv = function (e, n) {
		return n.set(n.t, n.p, e !== 1 ? n.b : n.e, n);
	},
	mk = function (e, n, r) {
		return (e.style[n] = r);
	},
	_k = function (e, n, r) {
		return e.style.setProperty(n, r);
	},
	gk = function (e, n, r) {
		return (e._gsap[n] = r);
	},
	vk = function (e, n, r) {
		return (e._gsap.scaleX = e._gsap.scaleY = r);
	},
	yk = function (e, n, r, i, s) {
		var o = e._gsap;
		(o.scaleX = o.scaleY = r), o.renderTransform(s, o);
	},
	xk = function (e, n, r, i, s) {
		var o = e._gsap;
		(o[n] = r), o.renderTransform(s, o);
	},
	Ue = 'transform',
	gn = Ue + 'Origin',
	wk = function t(e, n) {
		var r = this,
			i = this.target,
			s = i.style,
			o = i._gsap;
		if (e in qr && s) {
			if (((this.tfm = this.tfm || {}), e !== 'transform'))
				(e = Sr[e] || e),
					~e.indexOf(',')
						? e.split(',').forEach(function (l) {
								return (r.tfm[l] = Ir(i, l));
							})
						: (this.tfm[e] = o.x ? o[e] : Ir(i, e)),
					e === gn && (this.tfm.zOrigin = o.zOrigin);
			else
				return Sr.transform.split(',').forEach(function (l) {
					return t.call(r, l, n);
				});
			if (this.props.indexOf(Ue) >= 0) return;
			o.svg &&
				((this.svgo = i.getAttribute('data-svg-origin')),
				this.props.push(gn, n, '')),
				(e = Ue);
		}
		(s || n) && this.props.push(e, n, s[e]);
	},
	Ev = function (e) {
		e.translate &&
			(e.removeProperty('translate'),
			e.removeProperty('scale'),
			e.removeProperty('rotate'));
	},
	Sk = function () {
		var e = this.props,
			n = this.target,
			r = n.style,
			i = n._gsap,
			s,
			o;
		for (s = 0; s < e.length; s += 3)
			e[s + 1]
				? (n[e[s]] = e[s + 2])
				: e[s + 2]
					? (r[e[s]] = e[s + 2])
					: r.removeProperty(
							e[s].substr(0, 2) === '--'
								? e[s]
								: e[s].replace($h, '-$1').toLowerCase(),
						);
		if (this.tfm) {
			for (o in this.tfm) i[o] = this.tfm[o];
			i.svg &&
				(i.renderTransform(),
				n.setAttribute('data-svg-origin', this.svgo || '')),
				(s = Vh()),
				(!s || !s.isStart) &&
					!r[Ue] &&
					(Ev(r),
					i.zOrigin &&
						r[gn] &&
						((r[gn] += ' ' + i.zOrigin + 'px'),
						(i.zOrigin = 0),
						i.renderTransform()),
					(i.uncache = 1));
		}
	},
	Cv = function (e, n) {
		var r = { target: e, props: [], revert: Sk, save: wk };
		return (
			e._gsap || vn.core.getCache(e),
			n &&
				n.split(',').forEach(function (i) {
					return r.save(i);
				}),
			r
		);
	},
	Pv,
	gd = function (e, n) {
		var r = di.createElementNS
			? di.createElementNS(
					(n || 'http://www.w3.org/1999/xhtml').replace(/^https/, 'http'),
					e,
				)
			: di.createElement(e);
		return r && r.style ? r : di.createElement(e);
	},
	Pr = function t(e, n, r) {
		var i = getComputedStyle(e);
		return (
			i[n] ||
			i.getPropertyValue(n.replace($h, '-$1').toLowerCase()) ||
			i.getPropertyValue(n) ||
			(!r && t(e, wo(n) || n, 1)) ||
			''
		);
	},
	Em = 'O,Moz,ms,Ms,Webkit'.split(','),
	wo = function (e, n, r) {
		var i = n || Ji,
			s = i.style,
			o = 5;
		if (e in s && !r) return e;
		for (
			e = e.charAt(0).toUpperCase() + e.substr(1);
			o-- && !(Em[o] + e in s);

		);
		return o < 0 ? null : (o === 3 ? 'ms' : o >= 0 ? Em[o] : '') + e;
	},
	vd = function () {
		ak() &&
			window.document &&
			((Sm = window),
			(di = Sm.document),
			(ro = di.documentElement),
			(Ji = gd('div') || { style: {} }),
			gd('div'),
			(Ue = wo(Ue)),
			(gn = Ue + 'Origin'),
			(Ji.style.cssText =
				'border-width:0;line-height:0;position:absolute;padding:0'),
			(Pv = !!wo('perspective')),
			(Vh = vn.core.reverting),
			(Ih = 1));
	},
	Kc = function t(e) {
		var n = gd(
				'svg',
				(this.ownerSVGElement && this.ownerSVGElement.getAttribute('xmlns')) ||
					'http://www.w3.org/2000/svg',
			),
			r = this.parentNode,
			i = this.nextSibling,
			s = this.style.cssText,
			o;
		if (
			(ro.appendChild(n),
			n.appendChild(this),
			(this.style.display = 'block'),
			e)
		)
			try {
				(o = this.getBBox()),
					(this._gsapBBox = this.getBBox),
					(this.getBBox = t);
			} catch {}
		else this._gsapBBox && (o = this._gsapBBox());
		return (
			r && (i ? r.insertBefore(this, i) : r.appendChild(this)),
			ro.removeChild(n),
			(this.style.cssText = s),
			o
		);
	},
	Cm = function (e, n) {
		for (var r = n.length; r--; )
			if (e.hasAttribute(n[r])) return e.getAttribute(n[r]);
	},
	Nv = function (e) {
		var n;
		try {
			n = e.getBBox();
		} catch {
			n = Kc.call(e, !0);
		}
		return (
			(n && (n.width || n.height)) || e.getBBox === Kc || (n = Kc.call(e, !0)),
			n && !n.width && !n.x && !n.y
				? {
						x: +Cm(e, ['x', 'cx', 'x1']) || 0,
						y: +Cm(e, ['y', 'cy', 'y1']) || 0,
						width: 0,
						height: 0,
					}
				: n
		);
	},
	Ov = function (e) {
		return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Nv(e));
	},
	gs = function (e, n) {
		if (n) {
			var r = e.style,
				i;
			n in qr && n !== gn && (n = Ue),
				r.removeProperty
					? ((i = n.substr(0, 2)),
						(i === 'ms' || n.substr(0, 6) === 'webkit') && (n = '-' + n),
						r.removeProperty(
							i === '--' ? n : n.replace($h, '-$1').toLowerCase(),
						))
					: r.removeAttribute(n);
		}
	},
	hi = function (e, n, r, i, s, o) {
		var l = new _n(e._pt, n, r, 0, 1, o ? Tv : kv);
		return (e._pt = l), (l.b = i), (l.e = s), e._props.push(r), l;
	},
	Pm = { deg: 1, rad: 1, turn: 1 },
	kk = { grid: 1, flex: 1 },
	ji = function t(e, n, r, i) {
		var s = parseFloat(r) || 0,
			o = (r + '').trim().substr((s + '').length) || 'px',
			l = Ji.style,
			u = ck.test(n),
			a = e.tagName.toLowerCase() === 'svg',
			c = (a ? 'client' : 'offset') + (u ? 'Width' : 'Height'),
			d = 100,
			f = i === 'px',
			h = i === '%',
			g,
			m,
			T,
			_;
		if (i === o || !s || Pm[i] || Pm[o]) return s;
		if (
			(o !== 'px' && !f && (s = t(e, n, r, 'px')),
			(_ = e.getCTM && Ov(e)),
			(h || o === '%') && (qr[n] || ~n.indexOf('adius')))
		)
			return (
				(g = _ ? e.getBBox()[u ? 'width' : 'height'] : e[c]),
				qe(h ? (s / g) * d : (s / 100) * g)
			);
		if (
			((l[u ? 'width' : 'height'] = d + (f ? o : i)),
			(m =
				~n.indexOf('adius') || (i === 'em' && e.appendChild && !a)
					? e
					: e.parentNode),
			_ && (m = (e.ownerSVGElement || {}).parentNode),
			(!m || m === di || !m.appendChild) && (m = di.body),
			(T = m._gsap),
			T && h && T.width && u && T.time === Tn.time && !T.uncache)
		)
			return qe((s / T.width) * d);
		if (h && (n === 'height' || n === 'width')) {
			var p = e.style[n];
			(e.style[n] = d + i), (g = e[c]), p ? (e.style[n] = p) : gs(e, n);
		} else
			(h || o === '%') &&
				!kk[Pr(m, 'display')] &&
				(l.position = Pr(e, 'position')),
				m === e && (l.position = 'static'),
				m.appendChild(Ji),
				(g = Ji[c]),
				m.removeChild(Ji),
				(l.position = 'absolute');
		return (
			u && h && ((T = is(m)), (T.time = Tn.time), (T.width = m[c])),
			qe(f ? (g * s) / d : g && s ? (d / g) * s : 0)
		);
	},
	Ir = function (e, n, r, i) {
		var s;
		return (
			Ih || vd(),
			n in Sr &&
				n !== 'transform' &&
				((n = Sr[n]), ~n.indexOf(',') && (n = n.split(',')[0])),
			qr[n] && n !== 'transform'
				? ((s = Hl(e, i)),
					(s =
						n !== 'transformOrigin'
							? s[n]
							: s.svg
								? s.origin
								: Fa(Pr(e, gn)) + ' ' + s.zOrigin + 'px'))
				: ((s = e.style[n]),
					(!s || s === 'auto' || i || ~(s + '').indexOf('calc(')) &&
						(s =
							(za[n] && za[n](e, n, r)) ||
							Pr(e, n) ||
							Hg(e, n) ||
							(n === 'opacity' ? 1 : 0))),
			r && !~(s + '').trim().indexOf(' ') ? ji(e, n, s, r) + r : s
		);
	},
	Tk = function (e, n, r, i) {
		if (!r || r === 'none') {
			var s = wo(n, e, 1),
				o = s && Pr(e, s, 1);
			o && o !== r
				? ((n = s), (r = o))
				: n === 'borderColor' && (r = Pr(e, 'borderTopColor'));
		}
		var l = new _n(this._pt, e.style, n, 0, 1, xv),
			u = 0,
			a = 0,
			c,
			d,
			f,
			h,
			g,
			m,
			T,
			_,
			p,
			y,
			x,
			k;
		if (
			((l.b = r),
			(l.e = i),
			(r += ''),
			(i += ''),
			i === 'auto' &&
				((m = e.style[n]),
				(e.style[n] = i),
				(i = Pr(e, n) || i),
				m ? (e.style[n] = m) : gs(e, n)),
			(c = [r, i]),
			cv(c),
			(r = c[0]),
			(i = c[1]),
			(f = r.match(Ys) || []),
			(k = i.match(Ys) || []),
			k.length)
		) {
			for (; (d = Ys.exec(i)); )
				(T = d[0]),
					(p = i.substring(u, d.index)),
					g
						? (g = (g + 1) % 5)
						: (p.substr(-5) === 'rgba(' || p.substr(-5) === 'hsla(') && (g = 1),
					T !== (m = f[a++] || '') &&
						((h = parseFloat(m) || 0),
						(x = m.substr((h + '').length)),
						T.charAt(1) === '=' && (T = no(h, T) + x),
						(_ = parseFloat(T)),
						(y = T.substr((_ + '').length)),
						(u = Ys.lastIndex - y.length),
						y ||
							((y = y || On.units[n] || x),
							u === i.length && ((i += y), (l.e += y))),
						x !== y && (h = ji(e, n, m, y) || 0),
						(l._pt = {
							_next: l._pt,
							p: p || a === 1 ? p : ',',
							s: h,
							c: _ - h,
							m: (g && g < 4) || n === 'zIndex' ? Math.round : 0,
						}));
			l.c = u < i.length ? i.substring(u, i.length) : '';
		} else l.r = n === 'display' && i === 'none' ? Tv : kv;
		return Vg.test(i) && (l.e = 0), (this._pt = l), l;
	},
	Nm = { top: '0%', bottom: '100%', left: '0%', right: '100%', center: '50%' },
	Ek = function (e) {
		var n = e.split(' '),
			r = n[0],
			i = n[1] || '50%';
		return (
			(r === 'top' || r === 'bottom' || i === 'left' || i === 'right') &&
				((e = r), (r = i), (i = e)),
			(n[0] = Nm[r] || r),
			(n[1] = Nm[i] || i),
			n.join(' ')
		);
	},
	Ck = function (e, n) {
		if (n.tween && n.tween._time === n.tween._dur) {
			var r = n.t,
				i = r.style,
				s = n.u,
				o = r._gsap,
				l,
				u,
				a;
			if (s === 'all' || s === !0) (i.cssText = ''), (u = 1);
			else
				for (s = s.split(','), a = s.length; --a > -1; )
					(l = s[a]),
						qr[l] && ((u = 1), (l = l === 'transformOrigin' ? gn : Ue)),
						gs(r, l);
			u &&
				(gs(r, Ue),
				o &&
					(o.svg && r.removeAttribute('transform'),
					Hl(r, 1),
					(o.uncache = 1),
					Ev(i)));
		}
	},
	za = {
		clearProps: function (e, n, r, i, s) {
			if (s.data !== 'isFromStart') {
				var o = (e._pt = new _n(e._pt, n, r, 0, 0, Ck));
				return (o.u = i), (o.pr = -10), (o.tween = s), e._props.push(r), 1;
			}
		},
	},
	bl = [1, 0, 0, 1, 0, 0],
	Mv = {},
	jv = function (e) {
		return e === 'matrix(1, 0, 0, 1, 0, 0)' || e === 'none' || !e;
	},
	Om = function (e) {
		var n = Pr(e, Ue);
		return jv(n) ? bl : n.substr(7).match(Ig).map(qe);
	},
	Uh = function (e, n) {
		var r = e._gsap || is(e),
			i = e.style,
			s = Om(e),
			o,
			l,
			u,
			a;
		return r.svg && e.getAttribute('transform')
			? ((u = e.transform.baseVal.consolidate().matrix),
				(s = [u.a, u.b, u.c, u.d, u.e, u.f]),
				s.join(',') === '1,0,0,1,0,0' ? bl : s)
			: (s === bl &&
					!e.offsetParent &&
					e !== ro &&
					!r.svg &&
					((u = i.display),
					(i.display = 'block'),
					(o = e.parentNode),
					(!o || !e.offsetParent) &&
						((a = 1), (l = e.nextElementSibling), ro.appendChild(e)),
					(s = Om(e)),
					u ? (i.display = u) : gs(e, 'display'),
					a &&
						(l
							? o.insertBefore(e, l)
							: o
								? o.appendChild(e)
								: ro.removeChild(e))),
				n && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
	},
	yd = function (e, n, r, i, s, o) {
		var l = e._gsap,
			u = s || Uh(e, !0),
			a = l.xOrigin || 0,
			c = l.yOrigin || 0,
			d = l.xOffset || 0,
			f = l.yOffset || 0,
			h = u[0],
			g = u[1],
			m = u[2],
			T = u[3],
			_ = u[4],
			p = u[5],
			y = n.split(' '),
			x = parseFloat(y[0]) || 0,
			k = parseFloat(y[1]) || 0,
			C,
			E,
			N,
			j;
		r
			? u !== bl &&
				(E = h * T - g * m) &&
				((N = x * (T / E) + k * (-m / E) + (m * p - T * _) / E),
				(j = x * (-g / E) + k * (h / E) - (h * p - g * _) / E),
				(x = N),
				(k = j))
			: ((C = Nv(e)),
				(x = C.x + (~y[0].indexOf('%') ? (x / 100) * C.width : x)),
				(k = C.y + (~(y[1] || y[0]).indexOf('%') ? (k / 100) * C.height : k))),
			i || (i !== !1 && l.smooth)
				? ((_ = x - a),
					(p = k - c),
					(l.xOffset = d + (_ * h + p * m) - _),
					(l.yOffset = f + (_ * g + p * T) - p))
				: (l.xOffset = l.yOffset = 0),
			(l.xOrigin = x),
			(l.yOrigin = k),
			(l.smooth = !!i),
			(l.origin = n),
			(l.originIsAbsolute = !!r),
			(e.style[gn] = '0px 0px'),
			o &&
				(hi(o, l, 'xOrigin', a, x),
				hi(o, l, 'yOrigin', c, k),
				hi(o, l, 'xOffset', d, l.xOffset),
				hi(o, l, 'yOffset', f, l.yOffset)),
			e.setAttribute('data-svg-origin', x + ' ' + k);
	},
	Hl = function (e, n) {
		var r = e._gsap || new pv(e);
		if ('x' in r && !n && !r.uncache) return r;
		var i = e.style,
			s = r.scaleX < 0,
			o = 'px',
			l = 'deg',
			u = getComputedStyle(e),
			a = Pr(e, gn) || '0',
			c,
			d,
			f,
			h,
			g,
			m,
			T,
			_,
			p,
			y,
			x,
			k,
			C,
			E,
			N,
			j,
			M,
			H,
			D,
			I,
			Y,
			K,
			G,
			Q,
			A,
			$,
			w,
			q,
			oe,
			it,
			ge,
			Oe;
		return (
			(c = d = f = m = T = _ = p = y = x = 0),
			(h = g = 1),
			(r.svg = !!(e.getCTM && Ov(e))),
			u.translate &&
				((u.translate !== 'none' ||
					u.scale !== 'none' ||
					u.rotate !== 'none') &&
					(i[Ue] =
						(u.translate !== 'none'
							? 'translate3d(' +
								(u.translate + ' 0 0').split(' ').slice(0, 3).join(', ') +
								') '
							: '') +
						(u.rotate !== 'none' ? 'rotate(' + u.rotate + ') ' : '') +
						(u.scale !== 'none'
							? 'scale(' + u.scale.split(' ').join(',') + ') '
							: '') +
						(u[Ue] !== 'none' ? u[Ue] : '')),
				(i.scale = i.rotate = i.translate = 'none')),
			(E = Uh(e, r.svg)),
			r.svg &&
				(r.uncache
					? ((A = e.getBBox()),
						(a = r.xOrigin - A.x + 'px ' + (r.yOrigin - A.y) + 'px'),
						(Q = ''))
					: (Q = !n && e.getAttribute('data-svg-origin')),
				yd(e, Q || a, !!Q || r.originIsAbsolute, r.smooth !== !1, E)),
			(k = r.xOrigin || 0),
			(C = r.yOrigin || 0),
			E !== bl &&
				((H = E[0]),
				(D = E[1]),
				(I = E[2]),
				(Y = E[3]),
				(c = K = E[4]),
				(d = G = E[5]),
				E.length === 6
					? ((h = Math.sqrt(H * H + D * D)),
						(g = Math.sqrt(Y * Y + I * I)),
						(m = H || D ? Ns(D, H) * Qi : 0),
						(p = I || Y ? Ns(I, Y) * Qi + m : 0),
						p && (g *= Math.abs(Math.cos(p * io))),
						r.svg && ((c -= k - (k * H + C * I)), (d -= C - (k * D + C * Y))))
					: ((Oe = E[6]),
						(it = E[7]),
						(w = E[8]),
						(q = E[9]),
						(oe = E[10]),
						(ge = E[11]),
						(c = E[12]),
						(d = E[13]),
						(f = E[14]),
						(N = Ns(Oe, oe)),
						(T = N * Qi),
						N &&
							((j = Math.cos(-N)),
							(M = Math.sin(-N)),
							(Q = K * j + w * M),
							(A = G * j + q * M),
							($ = Oe * j + oe * M),
							(w = K * -M + w * j),
							(q = G * -M + q * j),
							(oe = Oe * -M + oe * j),
							(ge = it * -M + ge * j),
							(K = Q),
							(G = A),
							(Oe = $)),
						(N = Ns(-I, oe)),
						(_ = N * Qi),
						N &&
							((j = Math.cos(-N)),
							(M = Math.sin(-N)),
							(Q = H * j - w * M),
							(A = D * j - q * M),
							($ = I * j - oe * M),
							(ge = Y * M + ge * j),
							(H = Q),
							(D = A),
							(I = $)),
						(N = Ns(D, H)),
						(m = N * Qi),
						N &&
							((j = Math.cos(N)),
							(M = Math.sin(N)),
							(Q = H * j + D * M),
							(A = K * j + G * M),
							(D = D * j - H * M),
							(G = G * j - K * M),
							(H = Q),
							(K = A)),
						T &&
							Math.abs(T) + Math.abs(m) > 359.9 &&
							((T = m = 0), (_ = 180 - _)),
						(h = qe(Math.sqrt(H * H + D * D + I * I))),
						(g = qe(Math.sqrt(G * G + Oe * Oe))),
						(N = Ns(K, G)),
						(p = Math.abs(N) > 2e-4 ? N * Qi : 0),
						(x = ge ? 1 / (ge < 0 ? -ge : ge) : 0)),
				r.svg &&
					((Q = e.getAttribute('transform')),
					(r.forceCSS = e.setAttribute('transform', '') || !jv(Pr(e, Ue))),
					Q && e.setAttribute('transform', Q))),
			Math.abs(p) > 90 &&
				Math.abs(p) < 270 &&
				(s
					? ((h *= -1), (p += m <= 0 ? 180 : -180), (m += m <= 0 ? 180 : -180))
					: ((g *= -1), (p += p <= 0 ? 180 : -180))),
			(n = n || r.uncache),
			(r.x =
				c -
				((r.xPercent =
					c &&
					((!n && r.xPercent) ||
						(Math.round(e.offsetWidth / 2) === Math.round(-c) ? -50 : 0)))
					? (e.offsetWidth * r.xPercent) / 100
					: 0) +
				o),
			(r.y =
				d -
				((r.yPercent =
					d &&
					((!n && r.yPercent) ||
						(Math.round(e.offsetHeight / 2) === Math.round(-d) ? -50 : 0)))
					? (e.offsetHeight * r.yPercent) / 100
					: 0) +
				o),
			(r.z = f + o),
			(r.scaleX = qe(h)),
			(r.scaleY = qe(g)),
			(r.rotation = qe(m) + l),
			(r.rotationX = qe(T) + l),
			(r.rotationY = qe(_) + l),
			(r.skewX = p + l),
			(r.skewY = y + l),
			(r.transformPerspective = x + o),
			(r.zOrigin = parseFloat(a.split(' ')[2]) || (!n && r.zOrigin) || 0) &&
				(i[gn] = Fa(a)),
			(r.xOffset = r.yOffset = 0),
			(r.force3D = On.force3D),
			(r.renderTransform = r.svg ? Nk : Pv ? Rv : Pk),
			(r.uncache = 0),
			r
		);
	},
	Fa = function (e) {
		return (e = e.split(' '))[0] + ' ' + e[1];
	},
	qc = function (e, n, r) {
		var i = Vt(n);
		return qe(parseFloat(n) + parseFloat(ji(e, 'x', r + 'px', i))) + i;
	},
	Pk = function (e, n) {
		(n.z = '0px'),
			(n.rotationY = n.rotationX = '0deg'),
			(n.force3D = 0),
			Rv(e, n);
	},
	Bi = '0deg',
	Io = '0px',
	Wi = ') ',
	Rv = function (e, n) {
		var r = n || this,
			i = r.xPercent,
			s = r.yPercent,
			o = r.x,
			l = r.y,
			u = r.z,
			a = r.rotation,
			c = r.rotationY,
			d = r.rotationX,
			f = r.skewX,
			h = r.skewY,
			g = r.scaleX,
			m = r.scaleY,
			T = r.transformPerspective,
			_ = r.force3D,
			p = r.target,
			y = r.zOrigin,
			x = '',
			k = (_ === 'auto' && e && e !== 1) || _ === !0;
		if (y && (d !== Bi || c !== Bi)) {
			var C = parseFloat(c) * io,
				E = Math.sin(C),
				N = Math.cos(C),
				j;
			(C = parseFloat(d) * io),
				(j = Math.cos(C)),
				(o = qc(p, o, E * j * -y)),
				(l = qc(p, l, -Math.sin(C) * -y)),
				(u = qc(p, u, N * j * -y + y));
		}
		T !== Io && (x += 'perspective(' + T + Wi),
			(i || s) && (x += 'translate(' + i + '%, ' + s + '%) '),
			(k || o !== Io || l !== Io || u !== Io) &&
				(x +=
					u !== Io || k
						? 'translate3d(' + o + ', ' + l + ', ' + u + ') '
						: 'translate(' + o + ', ' + l + Wi),
			a !== Bi && (x += 'rotate(' + a + Wi),
			c !== Bi && (x += 'rotateY(' + c + Wi),
			d !== Bi && (x += 'rotateX(' + d + Wi),
			(f !== Bi || h !== Bi) && (x += 'skew(' + f + ', ' + h + Wi),
			(g !== 1 || m !== 1) && (x += 'scale(' + g + ', ' + m + Wi),
			(p.style[Ue] = x || 'translate(0, 0)');
	},
	Nk = function (e, n) {
		var r = n || this,
			i = r.xPercent,
			s = r.yPercent,
			o = r.x,
			l = r.y,
			u = r.rotation,
			a = r.skewX,
			c = r.skewY,
			d = r.scaleX,
			f = r.scaleY,
			h = r.target,
			g = r.xOrigin,
			m = r.yOrigin,
			T = r.xOffset,
			_ = r.yOffset,
			p = r.forceCSS,
			y = parseFloat(o),
			x = parseFloat(l),
			k,
			C,
			E,
			N,
			j;
		(u = parseFloat(u)),
			(a = parseFloat(a)),
			(c = parseFloat(c)),
			c && ((c = parseFloat(c)), (a += c), (u += c)),
			u || a
				? ((u *= io),
					(a *= io),
					(k = Math.cos(u) * d),
					(C = Math.sin(u) * d),
					(E = Math.sin(u - a) * -f),
					(N = Math.cos(u - a) * f),
					a &&
						((c *= io),
						(j = Math.tan(a - c)),
						(j = Math.sqrt(1 + j * j)),
						(E *= j),
						(N *= j),
						c &&
							((j = Math.tan(c)),
							(j = Math.sqrt(1 + j * j)),
							(k *= j),
							(C *= j))),
					(k = qe(k)),
					(C = qe(C)),
					(E = qe(E)),
					(N = qe(N)))
				: ((k = d), (N = f), (C = E = 0)),
			((y && !~(o + '').indexOf('px')) || (x && !~(l + '').indexOf('px'))) &&
				((y = ji(h, 'x', o, 'px')), (x = ji(h, 'y', l, 'px'))),
			(g || m || T || _) &&
				((y = qe(y + g - (g * k + m * E) + T)),
				(x = qe(x + m - (g * C + m * N) + _))),
			(i || s) &&
				((j = h.getBBox()),
				(y = qe(y + (i / 100) * j.width)),
				(x = qe(x + (s / 100) * j.height))),
			(j =
				'matrix(' + k + ',' + C + ',' + E + ',' + N + ',' + y + ',' + x + ')'),
			h.setAttribute('transform', j),
			p && (h.style[Ue] = j);
	},
	Ok = function (e, n, r, i, s) {
		var o = 360,
			l = xt(s),
			u = parseFloat(s) * (l && ~s.indexOf('rad') ? Qi : 1),
			a = u - i,
			c = i + a + 'deg',
			d,
			f;
		return (
			l &&
				((d = s.split('_')[1]),
				d === 'short' && ((a %= o), a !== a % (o / 2) && (a += a < 0 ? o : -o)),
				d === 'cw' && a < 0
					? (a = ((a + o * Tm) % o) - ~~(a / o) * o)
					: d === 'ccw' && a > 0 && (a = ((a - o * Tm) % o) - ~~(a / o) * o)),
			(e._pt = f = new _n(e._pt, n, r, i, a, dk)),
			(f.e = c),
			(f.u = 'deg'),
			e._props.push(r),
			f
		);
	},
	Mm = function (e, n) {
		for (var r in n) e[r] = n[r];
		return e;
	},
	Mk = function (e, n, r) {
		var i = Mm({}, r._gsap),
			s = 'perspective,force3D,transformOrigin,svgOrigin',
			o = r.style,
			l,
			u,
			a,
			c,
			d,
			f,
			h,
			g;
		i.svg
			? ((a = r.getAttribute('transform')),
				r.setAttribute('transform', ''),
				(o[Ue] = n),
				(l = Hl(r, 1)),
				gs(r, Ue),
				r.setAttribute('transform', a))
			: ((a = getComputedStyle(r)[Ue]),
				(o[Ue] = n),
				(l = Hl(r, 1)),
				(o[Ue] = a));
		for (u in qr)
			(a = i[u]),
				(c = l[u]),
				a !== c &&
					s.indexOf(u) < 0 &&
					((h = Vt(a)),
					(g = Vt(c)),
					(d = h !== g ? ji(r, u, a, g) : parseFloat(a)),
					(f = parseFloat(c)),
					(e._pt = new _n(e._pt, l, u, d, f - d, _d)),
					(e._pt.u = g || 0),
					e._props.push(u));
		Mm(l, i);
	};
mn('padding,margin,Width,Radius', function (t, e) {
	var n = 'Top',
		r = 'Right',
		i = 'Bottom',
		s = 'Left',
		o = (e < 3 ? [n, r, i, s] : [n + s, n + r, i + r, i + s]).map(function (l) {
			return e < 2 ? t + l : 'border' + l + t;
		});
	za[e > 1 ? 'border' + t : t] = function (l, u, a, c, d) {
		var f, h;
		if (arguments.length < 4)
			return (
				(f = o.map(function (g) {
					return Ir(l, g, a);
				})),
				(h = f.join(' ')),
				h.split(f[0]).length === 5 ? f[0] : h
			);
		(f = (c + '').split(' ')),
			(h = {}),
			o.forEach(function (g, m) {
				return (h[g] = f[m] = f[m] || f[((m - 1) / 2) | 0]);
			}),
			l.init(u, h, d);
	};
});
var Dv = {
	name: 'css',
	register: vd,
	targetTest: function (e) {
		return e.style && e.nodeType;
	},
	init: function (e, n, r, i, s) {
		var o = this._props,
			l = e.style,
			u = r.vars.startAt,
			a,
			c,
			d,
			f,
			h,
			g,
			m,
			T,
			_,
			p,
			y,
			x,
			k,
			C,
			E,
			N;
		Ih || vd(),
			(this.styles = this.styles || Cv(e)),
			(N = this.styles.props),
			(this.tween = r);
		for (m in n)
			if (m !== 'autoRound' && ((c = n[m]), !(kn[m] && mv(m, n, r, i, e, s)))) {
				if (
					((h = typeof c),
					(g = za[m]),
					h === 'function' && ((c = c.call(r, i, e, s)), (h = typeof c)),
					h === 'string' && ~c.indexOf('random(') && (c = Ul(c)),
					g)
				)
					g(this, e, m, c, r) && (E = 1);
				else if (m.substr(0, 2) === '--')
					(a = (getComputedStyle(e).getPropertyValue(m) + '').trim()),
						(c += ''),
						(Ci.lastIndex = 0),
						Ci.test(a) || ((T = Vt(a)), (_ = Vt(c))),
						_ ? T !== _ && (a = ji(e, m, a, _) + _) : T && (c += T),
						this.add(l, 'setProperty', a, c, i, s, 0, 0, m),
						o.push(m),
						N.push(m, 0, l[m]);
				else if (h !== 'undefined') {
					if (
						(u && m in u
							? ((a = typeof u[m] == 'function' ? u[m].call(r, i, e, s) : u[m]),
								xt(a) && ~a.indexOf('random(') && (a = Ul(a)),
								Vt(a + '') ||
									a === 'auto' ||
									(a += On.units[m] || Vt(Ir(e, m)) || ''),
								(a + '').charAt(1) === '=' && (a = Ir(e, m)))
							: (a = Ir(e, m)),
						(f = parseFloat(a)),
						(p = h === 'string' && c.charAt(1) === '=' && c.substr(0, 2)),
						p && (c = c.substr(2)),
						(d = parseFloat(c)),
						m in Sr &&
							(m === 'autoAlpha' &&
								(f === 1 && Ir(e, 'visibility') === 'hidden' && d && (f = 0),
								N.push('visibility', 0, l.visibility),
								hi(
									this,
									l,
									'visibility',
									f ? 'inherit' : 'hidden',
									d ? 'inherit' : 'hidden',
									!d,
								)),
							m !== 'scale' &&
								m !== 'transform' &&
								((m = Sr[m]), ~m.indexOf(',') && (m = m.split(',')[0]))),
						(y = m in qr),
						y)
					) {
						if (
							(this.styles.save(m),
							x ||
								((k = e._gsap),
								(k.renderTransform && !n.parseTransform) ||
									Hl(e, n.parseTransform),
								(C = n.smoothOrigin !== !1 && k.smooth),
								(x = this._pt =
									new _n(this._pt, l, Ue, 0, 1, k.renderTransform, k, 0, -1)),
								(x.dep = 1)),
							m === 'scale')
						)
							(this._pt = new _n(
								this._pt,
								k,
								'scaleY',
								k.scaleY,
								(p ? no(k.scaleY, p + d) : d) - k.scaleY || 0,
								_d,
							)),
								(this._pt.u = 0),
								o.push('scaleY', m),
								(m += 'X');
						else if (m === 'transformOrigin') {
							N.push(gn, 0, l[gn]),
								(c = Ek(c)),
								k.svg
									? yd(e, c, 0, C, 0, this)
									: ((_ = parseFloat(c.split(' ')[2]) || 0),
										_ !== k.zOrigin && hi(this, k, 'zOrigin', k.zOrigin, _),
										hi(this, l, m, Fa(a), Fa(c)));
							continue;
						} else if (m === 'svgOrigin') {
							yd(e, c, 1, C, 0, this);
							continue;
						} else if (m in Mv) {
							Ok(this, k, m, f, p ? no(f, p + c) : c);
							continue;
						} else if (m === 'smoothOrigin') {
							hi(this, k, 'smooth', k.smooth, c);
							continue;
						} else if (m === 'force3D') {
							k[m] = c;
							continue;
						} else if (m === 'transform') {
							Mk(this, c, e);
							continue;
						}
					} else m in l || (m = wo(m) || m);
					if (y || ((d || d === 0) && (f || f === 0) && !fk.test(c) && m in l))
						(T = (a + '').substr((f + '').length)),
							d || (d = 0),
							(_ = Vt(c) || (m in On.units ? On.units[m] : T)),
							T !== _ && (f = ji(e, m, a, _)),
							(this._pt = new _n(
								this._pt,
								y ? k : l,
								m,
								f,
								(p ? no(f, p + d) : d) - f,
								!y && (_ === 'px' || m === 'zIndex') && n.autoRound !== !1
									? pk
									: _d,
							)),
							(this._pt.u = _ || 0),
							T !== _ && _ !== '%' && ((this._pt.b = a), (this._pt.r = hk));
					else if (m in l) Tk.call(this, e, m, a, p ? p + c : c);
					else if (m in e) this.add(e, m, a || e[m], p ? p + c : c, i, s);
					else if (m !== 'parseTransform') {
						Oh(m, c);
						continue;
					}
					y || (m in l ? N.push(m, 0, l[m]) : N.push(m, 1, a || e[m])),
						o.push(m);
				}
			}
		E && wv(this);
	},
	render: function (e, n) {
		if (n.tween._time || !Vh())
			for (var r = n._pt; r; ) r.r(e, r.d), (r = r._next);
		else n.styles.revert();
	},
	get: Ir,
	aliases: Sr,
	getSetter: function (e, n, r) {
		var i = Sr[n];
		return (
			i && i.indexOf(',') < 0 && (n = i),
			n in qr && n !== gn && (e._gsap.x || Ir(e, 'x'))
				? r && km === r
					? n === 'scale'
						? vk
						: gk
					: (km = r || {}) && (n === 'scale' ? yk : xk)
				: e.style && !Ch(e.style[n])
					? mk
					: ~n.indexOf('-')
						? _k
						: zh(e, n)
		);
	},
	core: { _removeProperty: gs, _getMatrix: Uh },
};
vn.utils.checkPrefix = wo;
vn.core.getStyleSaver = Cv;
(function (t, e, n, r) {
	var i = mn(t + ',' + e + ',' + n, function (s) {
		qr[s] = 1;
	});
	mn(e, function (s) {
		(On.units[s] = 'deg'), (Mv[s] = 1);
	}),
		(Sr[i[13]] = t + ',' + e),
		mn(r, function (s) {
			var o = s.split(':');
			Sr[o[1]] = i[o[0]];
		});
})(
	'x,y,z,scale,scaleX,scaleY,xPercent,yPercent',
	'rotation,rotationX,rotationY,skewX,skewY',
	'transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective',
	'0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY',
);
mn(
	'x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective',
	function (t) {
		On.units[t] = 'px';
	},
);
vn.registerPlugin(Dv);
var Jt = vn.registerPlugin(Dv) || vn;
Jt.core.Tween;
/*!
 * @gsap/react 2.1.0
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ let jm = typeof window < 'u' ? te.useLayoutEffect : te.useEffect,
	Rm = (t) => t && !Array.isArray(t) && typeof t == 'object',
	Tu = [],
	jk = {},
	Av = Jt;
const eu = (t, e = Tu) => {
	let n = jk;
	Rm(t)
		? ((n = t), (t = null), (e = 'dependencies' in n ? n.dependencies : Tu))
		: Rm(e) && ((n = e), (e = 'dependencies' in n ? n.dependencies : Tu));
	let { scope: r, revertOnUpdate: i } = n,
		[s, o] = te.useState(!1);
	t &&
		typeof t != 'function' &&
		console.warn('First parameter must be a function or config object');
	const l = Av.context(() => {}, r),
		u = (d) => l.add(null, d),
		a = () => l.revert(),
		c = e && e.length && !i;
	return (
		jm(() => {
			if ((t && l.add(t, r), !c || !s)) return a;
		}, e),
		c && jm(() => (o(!0), a), Tu),
		{ context: l, contextSafe: u }
	);
};
eu.register = (t) => {
	Av = t;
};
eu.headless = !0;
function Rk() {
	const t = te.useRef(null),
		e = te.useRef(null),
		n = te.useRef(null),
		r = te.useRef(null),
		i = te.useRef(null);
	return (
		eu(
			() => {
				const s = r.current.offsetHeight,
					o = i.current.offsetHeight,
					l = () =>
						Jt.to(r.current, {
							y: -s + o,
							ease: 'none',
							scrollTrigger: {
								trigger: t.current,
								pin: !0,
								scrub: !0,
								start: 'top top',
								end: s,
								anticipatePin: 1,
								invalidateOnRefresh: !0,
							},
						}),
					u = () =>
						Jt.to(e.current, {
							scrollTrigger: {
								trigger: r.current,
								scrub: !0,
								start: '15% top',
								end: '20% end',
								anticipatePin: 1,
								invalidateOnRefresh: !0,
							},
							autoAlpha: 0,
							ease: 'none',
						}),
					a = () =>
						Jt.to(n.current, {
							scrollTrigger: {
								trigger: r.current,
								scrub: !0,
								start: '30% top',
								end: `${s}`,
								anticipatePin: 1,
								invalidateOnRefresh: !0,
							},
							autoAlpha: 0,
							ease: 'none',
						});
				Jt.matchMedia().add('(min-width: 1024px)', () => {
					l(), u(), a();
				});
			},
			{ scope: t },
		),
		v.jsx(v.Fragment, {
			children: v.jsx('div', {
				className: Fe.container,
				id: 'about',
				ref: t,
				children: v.jsxs('div', {
					className: Fe.outer,
					ref: i,
					children: [
						v.jsx('div', {
							className: Fe.descWrapper,
							children: v.jsxs('div', {
								className: Fe.desc,
								ref: r,
								children: [
									v.jsx('div', {
										className: Fe.titleWrapper,
										children: v.jsxs('div', {
											className: Fe.title.inner,
											children: [
												v.jsx('h2', {
													className: Fe.title,
													children: 'ABOUT US',
												}),
												v.jsx('h3', {
													className: Fe.subTitle,
													children: 'モルツが大切にしていること',
												}),
											],
										}),
									}),
									v.jsx('div', {
										className: Fe.textWrapper,
										children: v.jsxs('div', {
											className: Fe.textInner,
											children: [
												v.jsx('p', {
													className: Fe.text,
													children:
														'まず、見た目の美しさだけでなく、 マーケティング的な視点からデザインを構築し、 メッセージとの融合を目指します。 効果的なコミュニケーションを提供し、 クライアントとの関係を築き上げます。',
												}),
												v.jsx('p', {
													className: Fe.text,
													children:
														'そしてもう一つ、デザインという コミュニケーションを通じてクライアントと協力し、 共に喜びを分かち合える仕事をすること。 そのために私たちは、作品という成果が実るよう、 日々デザインという“畑”を耕し続けています。',
												}),
												v.jsx('p', {
													className: Fe.text,
													children:
														'“ モルツ ” は、企画から制作ディレクションまで、 トータルに手がけているデザイン会社です。 直接取引から大手代理店や出版社などを受注先として、 大手、中小企業、または各種団体など さまざまな業種、業態の広告を企画から参加しながら グラフィックデザイン業務を中心に、 お手伝いさせていただきます。',
												}),
											],
										}),
									}),
								],
							}),
						}),
						v.jsxs('div', {
							className: Fe.logoContainer,
							children: [
								v.jsx('div', {
									className: Fe.logoMotion01,
									ref: e,
									children: v.jsx('div', {
										className: Fe.outer,
										children: v.jsx('img', {
											className: Fe.inner,
											src: pS,
											alt: 'malts-logo',
										}),
									}),
								}),
								v.jsx('div', {
									className: Fe.logoMotion02,
									ref: n,
									children: v.jsx('div', {
										className: Fe.outer,
										children: v.jsx('img', {
											className: Fe.inner,
											src: mS,
											alt: 'malts-logo',
										}),
									}),
								}),
								v.jsx('div', {
									className: Fe.logoMotion03,
									children: v.jsx('div', {
										className: Fe.outer,
										children: v.jsx('img', {
											className: Fe.inner,
											src: _S,
											alt: 'malts-logo',
										}),
									}),
								}),
							],
						}),
					],
				}),
			}),
		})
	);
}
const Dk = '/sample-site/assets/PAL-LOuPWGK6.jpg',
	Ak = '/sample-site/assets/PAL_spread-8kIvk1I0.jpg',
	Lk = '/sample-site/assets/jinai-mJBqGcrV.jpg',
	zk = '/sample-site/assets/jinai_spread-9VBOCCRc.jpg',
	Fk = '/sample-site/assets/sandisk-cLLxX1UE.jpg',
	Ik = '/sample-site/assets/sandisk_spread-f9Gbc75b.jpg',
	Vk = '/sample-site/assets/todai-fi0CqSGh.jpg',
	$k = '/sample-site/assets/todai_spread-UK31Cux5.jpg',
	Uk = '/sample-site/assets/unicity-EdjOdgp8.jpg',
	Bk = '/sample-site/assets/unicity_spread-yij5WoFD.jpg',
	Wk = '_container_10y3u_29',
	bk = '_wrapper_10y3u_43',
	Hk = '_imageContainer_10y3u_49',
	Yk = '_flex_10y3u_68',
	Qk = '_figure_10y3u_94',
	Xk = '_show_10y3u_119',
	Gk = '_hidden_10y3u_123',
	ni = {
		container: Wk,
		wrapper: bk,
		imageContainer: Hk,
		flex: Yk,
		figure: Qk,
		show: Xk,
		hidden: Gk,
	},
	Kk = '_titleContainer_ktt4e_29',
	qk = '_title_ktt4e_29',
	Zk = '_subTitleContainer_ktt4e_43',
	Jk = '_subTitle_ktt4e_43',
	Ia = { titleContainer: Kk, title: qk, subTitleContainer: Zk, subTitle: Jk };
function Bh({ children: t }) {
	return v.jsx('div', {
		className: Ia.titleContainer,
		children: v.jsx('h2', { className: Ia.title, children: t }),
	});
}
function tu({ children: t }) {
	return v.jsx('div', {
		className: Ia.subTitleContainer,
		children: v.jsx('h2', { className: Ia.subTitle, children: t }),
	});
}
function e2() {
	const e = Object.values(
			Object.assign({
				'../../../../assets/img/works/graphic/PAL.jpg': Dk,
				'../../../../assets/img/works/graphic/PAL_spread.jpg': Ak,
				'../../../../assets/img/works/graphic/jinai.jpg': Lk,
				'../../../../assets/img/works/graphic/jinai_spread.jpg': zk,
				'../../../../assets/img/works/graphic/sandisk.jpg': Fk,
				'../../../../assets/img/works/graphic/sandisk_spread.jpg': Ik,
				'../../../../assets/img/works/graphic/todai.jpg': Vk,
				'../../../../assets/img/works/graphic/todai_spread.jpg': $k,
				'../../../../assets/img/works/graphic/unicity.jpg': Uk,
				'../../../../assets/img/works/graphic/unicity_spread.jpg': Bk,
			}),
		).reduce((r, i, s, o) => (s % 2 === 0 && r.push([i, o[s + 1]]), r), []),
		n = te.useRef(null);
	return (
		eu(
			() => {
				const r = n.current.offsetWidth,
					i = Jt.utils.toArray(`.${ni.figure}`);
				Jt.matchMedia().add('(min-width: 768px)', () => {
					Jt.to(i, {
						xPercent: -100 * (i.length - 1),
						ease: 'sine.out',
						scrollTrigger: {
							trigger: n.current,
							pin: !0,
							scrub: 2,
							start: 'bottom bottom',
							end: `+=${r}`,
							snap: 1 / (i.length - 1),
							anticipatePin: 1,
							invalidateOnRefresh: !0,
						},
					});
				});
			},
			{ scope: n },
		),
		v.jsx('section', {
			className: ni.container,
			ref: n,
			children: v.jsxs('div', {
				className: ni.wrapper,
				children: [
					v.jsx(Bh, { children: 'WORKS' }),
					v.jsx(tu, { children: 'GRAPHIC' }),
					v.jsx('div', {
						className: ni.imageContainer,
						children: v.jsx('div', {
							className: ni.flex,
							children: e.map((r, i) =>
								v.jsxs(
									'figure',
									{
										className: ni.figure,
										children: [
											v.jsxs('picture', {
												className: ni.show,
												children: [
													v.jsx('source', {}),
													v.jsx('img', { src: r[0], alt: 'Graphic Work' }),
												],
											}),
											v.jsxs('picture', {
												className: ni.hidden,
												children: [
													v.jsx('source', {}),
													v.jsx('img', { src: r[1], alt: 'Graphic Work' }),
												],
											}),
										],
									},
									i,
								),
							),
						}),
					}),
				],
			}),
		})
	);
}
const t2 = '/sample-site/assets/23_website-eYCJrssh.jpg',
	n2 = '/sample-site/assets/23_website_scroll-z4Xc32FC.jpg',
	r2 = '/sample-site/assets/JEED_website-R72Ygrbz.jpg',
	i2 = '/sample-site/assets/JEED_website_scroll-EsmQSEHq.jpg',
	s2 = '/sample-site/assets/jinai_website-PoSL6BLb.jpg',
	o2 = '/sample-site/assets/jinai_website_scroll-3bEVgtNV.jpg',
	l2 = '/sample-site/assets/naikakufu_website-k0zfn7LZ.jpg',
	u2 = '/sample-site/assets/naikakukfu_website_scroll-g7XKKCOH.jpg',
	a2 = '/sample-site/assets/tokyu_website-yVYY_O_S.jpg',
	c2 = '/sample-site/assets/tokyu_website_scroll-j1NB_5aM.jpg',
	f2 = '_container_nbd2n_29',
	d2 = '_wrapper_nbd2n_43',
	h2 = '_imageContainer_nbd2n_49',
	p2 = '_flex_nbd2n_68',
	m2 = '_figure_nbd2n_95',
	_2 = '_show_nbd2n_125',
	g2 = '_hidden_nbd2n_129',
	ri = {
		container: f2,
		wrapper: d2,
		imageContainer: h2,
		flex: p2,
		figure: m2,
		show: _2,
		hidden: g2,
	};
function v2() {
	const e = Object.values(
			Object.assign({
				'../../../../assets/img/works/website/23_website.jpg': t2,
				'../../../../assets/img/works/website/23_website_scroll.jpg': n2,
				'../../../../assets/img/works/website/JEED_website.jpg': r2,
				'../../../../assets/img/works/website/JEED_website_scroll.jpg': i2,
				'../../../../assets/img/works/website/jinai_website.jpg': s2,
				'../../../../assets/img/works/website/jinai_website_scroll.jpg': o2,
				'../../../../assets/img/works/website/naikakufu_website.jpg': l2,
				'../../../../assets/img/works/website/naikakukfu_website_scroll.jpg':
					u2,
				'../../../../assets/img/works/website/tokyu_website.jpg': a2,
				'../../../../assets/img/works/website/tokyu_website_scroll.jpg': c2,
			}),
		).reduce((r, i, s, o) => (s % 2 === 0 && r.push([i, o[s + 1]]), r), []),
		n = te.useRef(null);
	return (
		eu(
			() => {
				const r = n.current.offsetWidth,
					i = Jt.utils.toArray(`.${ri.figure}`);
				Jt.matchMedia().add('(min-width: 768px)', () => {
					Jt.to(i, {
						xPercent: -100 * (i.length - 1),
						ease: 'sine.out',
						scrollTrigger: {
							trigger: n.current,
							pin: !0,
							scrub: 2,
							start: 'bottom bottom',
							end: `+=${r}`,
							snap: 1 / (i.length - 1),
							anticipatePin: 1,
							invalidateOnRefresh: !0,
						},
					});
				});
			},
			{ scope: n },
		),
		v.jsx(v.Fragment, {
			children: v.jsx('section', {
				className: ri.container,
				ref: n,
				children: v.jsxs('div', {
					className: ri.wrapper,
					children: [
						v.jsx(tu, { children: 'WEBSITE' }),
						v.jsx('div', {
							className: ri.imageContainer,
							children: v.jsx('div', {
								className: ri.flex,
								children: e.map((r, i) =>
									v.jsxs(
										'figure',
										{
											className: ri.figure,
											children: [
												v.jsxs('picture', {
													className: ri.show,
													children: [
														v.jsx('source', {}),
														v.jsx('img', { src: r[0], alt: '' }),
													],
												}),
												v.jsxs('picture', {
													className: ri.hidden,
													children: [
														v.jsx('source', {}),
														v.jsx('img', { src: r[1], alt: '' }),
													],
												}),
											],
										},
										i,
									),
								),
							}),
						}),
					],
				}),
			}),
		})
	);
}
const y2 = '_container_1jyp1_29',
	x2 = '_description_1jyp1_35',
	w2 = '_details_1jyp1_42',
	S2 = '_subHeading_1jyp1_50',
	k2 = '_list_1jyp1_60',
	Vo = {
		container: y2,
		description: x2,
		details: w2,
		subHeading: S2,
		list: k2,
	},
	Dm = [
		{
			id: '1',
			title: '企業・学校・病院案内パンフレット',
			list: [
				'㈱ サンディスク会社案内',
				'㈱ ソラスト入社案内',
				'ろうきん入庫案内',
				'茨城県警警察官募集案内',
				'日本医科大学大学案内',
				'仁愛大学大学案内',
				'金城大学大学案内',
				'国際医療福祉大学大学案内',
				'愛知医科大学病院案内',
				'東京大学医学部附属病院看護師採用案内',
				'三井記念病院看護師採用案内',
				'東京女子医科大学病院看護師採用案内 等',
			],
		},
		{
			id: '2',
			title: '企業PR誌',
			list: [
				'（株）住友不動産 「PAL」',
				'（株）ユニシティ・ジャパン 「Be Better」',
				'EMCジャパン 「ACCESS」',
				'サンケイリビング新聞社 「あんふぁん」 等',
			],
		},
		{
			id: '3',
			title: '新聞・雑誌広告',
			list: [
				"（パナソニック 「Let's note」",
				'㈱ グンゼ 「Jean- Louis Scherrer」',
				'イオン 「イオンショップ',
				'㈱ はるやま レディーススーツ ViVi fleurs〈マニュアル・ガイドブック〉',
				'㈱ 日本コカ・コーラ コカ・コーラ日本版VIS',
				'野村アセットマネジメント 「投資信託はじめてガイド」',
				'㈱ ハーバライフ・オブ・ジャパン 「はじめてBook」 等',
			],
		},
		{
			id: '4',
			title: 'パッケージデザイン',
			list: [
				'㈱ 日本コカ・コーラ 清涼飲料水 「TADAS」',
				'㈱ ユニシティ・ジャパン 化粧品 「Be」 等',
			],
		},
		{
			id: '5',
			title: 'キャンペーン',
			list: [
				'㈱ マイクロソフト 春キャンペーン',
				'独立行政法人高齢・障害・求職者雇用支援機構職員採用サイト',
				'中小企業経営診断シンポジウム',
				'ひがしん創業支援事業',
				'ケーブル技術ショー',
				'東京国際映画祭マーケットイベント',
				'㈱ はるやま レディーススーツViViキャンペーン',
				'ふくしま「未来へのじまんの一品づくり」プロジェクト 等',
			],
		},
		{
			id: '6',
			title: 'ウェブサイト',
			list: [
				'特別区職員採用サイト',
				'独立行政法人高齢・障害・求職者雇用支援機構職員採用サイト',
				'ライオン社',
				'日本医科大学',
				'仁愛大学',
				'埼玉医科短期大学',
				'埼玉医療福祉会看護専門学校',
				'内閣府こどもの未来応援フォーラム',
				'JR東日本新幹線思い出写真キャンペーン',
				'立山黒部アルペンフェスティバル',
				'東急歌舞伎町タワー内覧会',
				'埼玉医科大学病院',
				'丸木記念メディカルセンター',
				'光の家療育センター',
				'がん研有明病院看護部',
				'マギーズ東京',
				'暮らしの保健室',
				'京成タクシー',
				'湯河原温泉協会 等',
			],
		},
		{ id: '7', title: 'title', list: [] },
	];
function T2() {
	function t({ num: e }) {
		return v.jsxs('div', {
			className: Vo.details,
			children: [
				v.jsx('h3', { className: Vo.subHeading, children: Dm[e].title }),
				v.jsx('ul', {
					className: Vo.list,
					children: Dm[e].list.map((n, r) => v.jsx('li', { children: n }, r)),
				}),
			],
		});
	}
	return v.jsx(v.Fragment, {
		children: v.jsxs('section', {
			className: Vo.container,
			children: [
				v.jsx(tu, { children: 'CLIENT' }),
				v.jsxs('div', {
					className: Vo.description,
					children: [
						v.jsx(t, { num: 0 }),
						v.jsx(t, { num: 1 }),
						v.jsx(t, { num: 2 }),
						v.jsx(t, { num: 3 }),
						v.jsx(t, { num: 4 }),
						v.jsx(t, { num: 5 }),
					],
				}),
			],
		}),
	});
}
const E2 = '_container_3zo0n_29',
	C2 = { container: E2 };
function P2() {
	return v.jsx(v.Fragment, {
		children: v.jsxs('article', {
			className: C2.container,
			id: 'works',
			children: [v.jsx(e2, {}), v.jsx(v2, {}), v.jsx(T2, {})],
		}),
	});
}
const N2 = '_container_1kfgg_29',
	O2 = '_information_1kfgg_51',
	M2 = '_access_1kfgg_57',
	j2 = { container: N2, information: O2, access: M2 },
	R2 = '_container_1gnsa_29',
	D2 = '_info_1gnsa_34',
	Am = { container: R2, info: D2 };
function A2() {
	return v.jsxs('section', {
		className: Am.container,
		children: [
			v.jsx(tu, { children: 'INFORMATION' }),
			v.jsx('table', {
				className: Am.info,
				'aria-label': '会社概要',
				children: v.jsxs('tbody', {
					children: [
						v.jsxs('tr', {
							children: [
								v.jsx('th', { children: '社名' }),
								v.jsx('td', { children: '株式会社 モルツ' }),
							],
						}),
						v.jsxs('tr', {
							children: [
								v.jsx('th', { children: '設立' }),
								v.jsx('td', { children: '1990年10月1日' }),
							],
						}),
						v.jsxs('tr', {
							children: [
								v.jsx('th', { children: '資本金' }),
								v.jsx('td', { children: '1,000,000円' }),
							],
						}),
						v.jsxs('tr', {
							children: [
								v.jsx('th', { children: '代表者' }),
								v.jsx('td', { children: '代表取締役社長  ** **' }),
							],
						}),
						v.jsxs('tr', {
							children: [
								v.jsx('th', { children: '取引銀行' }),
								v.jsx('td', {
									children: 'さわやか信用金庫 青山渋谷支店 当座******',
								}),
							],
						}),
						v.jsxs('tr', {
							children: [
								v.jsx('th', { children: '主要取引先' }),
								v.jsx('td', {
									children: v.jsxs('ul', {
										children: [
											v.jsx('li', { children: '合同会社ウェブレーン' }),
											v.jsx('li', { children: '株式会社旺文社' }),
											v.jsx('li', { children: '株式会社コムブリッジ' }),
											v.jsx('li', { children: '株式会社コムブレインズ' }),
											v.jsx('li', { children: '埼玉医科大学病院' }),
											v.jsx('li', { children: '社会福祉法人埼玉医療福祉会' }),
											v.jsx('li', { children: '仁愛大学' }),
											v.jsx('li', { children: '株式会社ディスコ' }),
											v.jsx('li', { children: '株式会社美松堂' }),
											v.jsx('li', { children: '株式会社モメンタム ジャパン' }),
											v.jsx('li', { children: '株式会社ライオン社 他' }),
										],
									}),
								}),
							],
						}),
						v.jsxs('tr', {
							children: [
								v.jsx('th', { children: 'スタッフ' }),
								v.jsx('td', {
									children: v.jsxs('ul', {
										children: [
											v.jsx('li', {
												children: 'クリエイティブディレクター1名',
											}),
											v.jsx('li', { children: 'ディレクター・デザイナー2名' }),
											v.jsx('li', {
												children: 'WEBディレクター・デザイナー2名',
											}),
											v.jsx('li', { children: 'コピーライター4名' }),
											v.jsx('li', { children: 'カメラマン5名' }),
											v.jsx('li', { children: 'イラストレーター2名' }),
											v.jsx('li', { children: 'デザイナー1名' }),
											v.jsx('li', { children: 'EBデザイナー1名' }),
											v.jsx('li', { children: '動画クリエイター2名' }),
											v.jsx('li', { children: 'システムエンジニア1名' }),
											v.jsx('li', { children: 'ヘアメイク2名' }),
										],
									}),
								}),
							],
						}),
						v.jsxs('tr', {
							children: [
								v.jsx('th', { children: '業務内容' }),
								v.jsx('td', {
									children: v.jsxs('ul', {
										children: [
											v.jsx('li', {
												children: '企業・学校・病院案内パンフレット',
											}),
											v.jsx('li', { children: 'ホームページ制作' }),
											v.jsx('li', {
												children:
													'イベント・キャンペーンSPツール（ポスター、チラシ等）',
											}),
											v.jsx('li', { children: '製品カタログ' }),
											v.jsx('li', { children: '企業PR誌' }),
											v.jsx('li', { children: '新聞・雑誌広告' }),
											v.jsx('li', { children: '書籍' }),
											v.jsx('li', { children: 'パッケージ' }),
											v.jsx('li', { children: 'ロゴマーク制定等' }),
											v.jsx('li', {
												children:
													'グラフィックデザイン業務を中心に、企画から制作まで',
											}),
										],
									}),
								}),
							],
						}),
					],
				}),
			}),
		],
	});
}
const L2 = '_container_2ebxd_29',
	z2 = '_access_2ebxd_35',
	F2 = '_location_2ebxd_45',
	I2 = '_textarea_2ebxd_51',
	V2 = '_desc_2ebxd_61',
	$2 = '_text_2ebxd_51',
	U2 = '_map_2ebxd_87',
	Et = {
		container: L2,
		access: z2,
		location: F2,
		textarea: I2,
		desc: V2,
		text: $2,
		map: U2,
		'icon-JR': '_icon-JR_2ebxd_176',
		'icon-TokyoMetro': '_icon-TokyoMetro_2ebxd_185',
		'icon-background': '_icon-background_2ebxd_190',
		'icon-logo': '_icon-logo_2ebxd_194',
	};
function B2() {
	return v.jsxs('section', {
		className: Et.container,
		children: [
			v.jsx(tu, { children: 'ACCESS' }),
			v.jsxs('div', {
				className: Et.access,
				children: [
					v.jsxs('div', {
						className: Et.location,
						children: [
							v.jsx('div', {
								className: Et.textarea,
								children: v.jsxs('div', {
									className: Et.desc,
									children: [
										v.jsx('h4', { children: '所在地' }),
										v.jsxs('div', {
											className: Et.text,
											children: [
												'〒150-0001',
												v.jsx('br', { 'aria-hidden': 'true' }),
												'東京都 渋谷区 神宮前 1-10-34',
												v.jsx('br', { 'aria-hidden': 'true' }),
												'原宿コーポ別館 707',
											],
										}),
									],
								}),
							}),
							v.jsx('div', {
								className: Et.textarea,
								children: v.jsxs('div', {
									className: Et.desc,
									children: [
										v.jsx('h4', { children: '交通機関' }),
										v.jsxs('div', {
											className: Et.text,
											children: [
												v.jsxs('span', {
													children: [
														v.jsx('i', {
															className: Et['icon-JR'],
															'aria-hidden': 'true',
														}),
														'山手線 原宿駅',
													],
												}),
												v.jsx('span', { children: '東口 徒歩5分' }),
												v.jsxs('span', {
													children: [
														v.jsxs('i', {
															className: Et['icon-TokyoMetro'],
															'aria-hidden': 'true',
															children: [
																v.jsx('i', {
																	className: Et['icon-background'],
																}),
																v.jsx('i', { className: Et['icon-logo'] }),
															],
														}),
														'千代田線 明治神宮前駅',
													],
												}),
												v.jsxs('span', {
													children: [
														v.jsxs('i', {
															className: Et['icon-TokyoMetro'],
															'aria-hidden': 'true',
															children: [
																v.jsx('i', {
																	className: Et['icon-background'],
																}),
																v.jsx('i', { className: Et['icon-logo'] }),
															],
														}),
														'副都心線 明治神宮前駅',
													],
												}),
												v.jsx('span', { children: '2番出口 徒歩3分' }),
											],
										}),
									],
								}),
							}),
						],
					}),
					v.jsx('div', {
						className: Et.map,
						children: v.jsx('iframe', {
							src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.2805176856577!2d139.70200487623086!3d35.67009423058498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ca4cfccf67d%3A0xcc90a94cf25f103!2z44CSMTUwLTAwMDEg5p2x5Lqs6YO95riL6LC35Yy656We5a6u5YmN77yR5LiB55uu77yR77yQ4oiS77yT77yUIOWOn-Wuv-OCs-ODvOODneWIpemkqA!5e0!3m2!1sja!2sjp!4v1708320151366!5m2!1sja!2sjp',
							title: 'map',
							loading: 'lazy',
						}),
					}),
				],
			}),
		],
	});
}
function W2() {
	return v.jsxs('article', {
		className: j2.container,
		id: 'company',
		children: [
			v.jsx(Bh, { children: 'COMPANY' }),
			v.jsx(A2, {}),
			v.jsx(B2, {}),
		],
	});
}
const b2 = '_container_lpom1_29',
	H2 = '_outer_lpom1_36',
	Y2 = '_inner_lpom1_41',
	Q2 = '_name_lpom1_56',
	X2 = '_company_lpom1_69',
	G2 = '_email_lpom1_70',
	K2 = '_message_lpom1_71',
	q2 = '_error_lpom1_135',
	Z2 = '_buttonContainer_lpom1_143',
	J2 = '_submit_lpom1_152',
	eT = '_cancel_lpom1_163',
	ln = {
		container: b2,
		outer: H2,
		inner: Y2,
		name: Q2,
		company: X2,
		email: G2,
		message: K2,
		error: q2,
		buttonContainer: Z2,
		submit: J2,
		cancel: eT,
	};
var nu = (t) => t.type === 'checkbox',
	Xs = (t) => t instanceof Date,
	Gt = (t) => t == null;
const Lv = (t) => typeof t == 'object';
var dt = (t) => !Gt(t) && !Array.isArray(t) && Lv(t) && !Xs(t),
	tT = (t) =>
		dt(t) && t.target ? (nu(t.target) ? t.target.checked : t.target.value) : t,
	nT = (t) => t.substring(0, t.search(/\.\d+(\.|$)/)) || t,
	rT = (t, e) => t.has(nT(e)),
	iT = (t) => {
		const e = t.constructor && t.constructor.prototype;
		return dt(e) && e.hasOwnProperty('isPrototypeOf');
	},
	Wh =
		typeof window < 'u' &&
		typeof window.HTMLElement < 'u' &&
		typeof document < 'u';
function An(t) {
	let e;
	const n = Array.isArray(t);
	if (t instanceof Date) e = new Date(t);
	else if (t instanceof Set) e = new Set(t);
	else if (
		!(Wh && (t instanceof Blob || t instanceof FileList)) &&
		(n || dt(t))
	)
		if (((e = n ? [] : {}), !n && !iT(t))) e = t;
		else for (const r in t) t.hasOwnProperty(r) && (e[r] = An(t[r]));
	else return t;
	return e;
}
var ru = (t) => (Array.isArray(t) ? t.filter(Boolean) : []),
	Ke = (t) => t === void 0,
	X = (t, e, n) => {
		if (!e || !dt(t)) return n;
		const r = ru(e.split(/[,[\].]+?/)).reduce((i, s) => (Gt(i) ? i : i[s]), t);
		return Ke(r) || r === t ? (Ke(t[e]) ? n : t[e]) : r;
	},
	Vr = (t) => typeof t == 'boolean';
const Lm = { BLUR: 'blur', FOCUS_OUT: 'focusout', CHANGE: 'change' },
	ur = {
		onBlur: 'onBlur',
		onChange: 'onChange',
		onSubmit: 'onSubmit',
		onTouched: 'onTouched',
		all: 'all',
	},
	Ar = {
		max: 'max',
		min: 'min',
		maxLength: 'maxLength',
		minLength: 'minLength',
		pattern: 'pattern',
		required: 'required',
		validate: 'validate',
	},
	zv = ut.createContext(null),
	sT = () => ut.useContext(zv),
	oT = (t) => {
		const { children: e, ...n } = t;
		return ut.createElement(zv.Provider, { value: n }, e);
	};
var lT = (t, e, n, r = !0) => {
		const i = { defaultValues: e._defaultValues };
		for (const s in t)
			Object.defineProperty(i, s, {
				get: () => {
					const o = s;
					return (
						e._proxyFormState[o] !== ur.all &&
							(e._proxyFormState[o] = !r || ur.all),
						n && (n[o] = !0),
						t[o]
					);
				},
			});
		return i;
	},
	zn = (t) => dt(t) && !Object.keys(t).length,
	uT = (t, e, n, r) => {
		n(t);
		const { name: i, ...s } = t;
		return (
			zn(s) ||
			Object.keys(s).length >= Object.keys(e).length ||
			Object.keys(s).find((o) => e[o] === (!r || ur.all))
		);
	},
	Zc = (t) => (Array.isArray(t) ? t : [t]);
function aT(t) {
	const e = ut.useRef(t);
	(e.current = t),
		ut.useEffect(() => {
			const n =
				!t.disabled &&
				e.current.subject &&
				e.current.subject.subscribe({ next: e.current.next });
			return () => {
				n && n.unsubscribe();
			};
		}, [t.disabled]);
}
var kr = (t) => typeof t == 'string',
	cT = (t, e, n, r, i) =>
		kr(t)
			? (r && e.watch.add(t), X(n, t, i))
			: Array.isArray(t)
				? t.map((s) => (r && e.watch.add(s), X(n, s)))
				: (r && (e.watchAll = !0), n),
	bh = (t) => /^\w*$/.test(t),
	Fv = (t) => ru(t.replace(/["|']|\]/g, '').split(/\.|\[/)),
	De = (t, e, n) => {
		let r = -1;
		const i = bh(e) ? [e] : Fv(e),
			s = i.length,
			o = s - 1;
		for (; ++r < s; ) {
			const l = i[r];
			let u = n;
			if (r !== o) {
				const a = t[l];
				u = dt(a) || Array.isArray(a) ? a : isNaN(+i[r + 1]) ? {} : [];
			}
			(t[l] = u), (t = t[l]);
		}
		return t;
	},
	fT = (t, e, n, r, i) =>
		e
			? {
					...n[t],
					types: { ...(n[t] && n[t].types ? n[t].types : {}), [r]: i || !0 },
				}
			: {},
	zm = (t) => ({
		isOnSubmit: !t || t === ur.onSubmit,
		isOnBlur: t === ur.onBlur,
		isOnChange: t === ur.onChange,
		isOnAll: t === ur.all,
		isOnTouch: t === ur.onTouched,
	}),
	Fm = (t, e, n) =>
		!n &&
		(e.watchAll ||
			e.watch.has(t) ||
			[...e.watch].some(
				(r) => t.startsWith(r) && /^\.\w+/.test(t.slice(r.length)),
			));
const dl = (t, e, n, r) => {
	for (const i of n || Object.keys(t)) {
		const s = X(t, i);
		if (s) {
			const { _f: o, ...l } = s;
			if (o) {
				if (o.refs && o.refs[0] && e(o.refs[0], i) && !r) break;
				if (o.ref && e(o.ref, o.name) && !r) break;
				dl(l, e);
			} else dt(l) && dl(l, e);
		}
	}
};
var dT = (t, e, n) => {
		const r = ru(X(t, n));
		return De(r, 'root', e[n]), De(t, n, r), t;
	},
	Hh = (t) => t.type === 'file',
	pi = (t) => typeof t == 'function',
	Va = (t) => {
		if (!Wh) return !1;
		const e = t ? t.ownerDocument : 0;
		return (
			t instanceof
			(e && e.defaultView ? e.defaultView.HTMLElement : HTMLElement)
		);
	},
	Ju = (t) => kr(t),
	Yh = (t) => t.type === 'radio',
	$a = (t) => t instanceof RegExp;
const Im = { value: !1, isValid: !1 },
	Vm = { value: !0, isValid: !0 };
var Iv = (t) => {
	if (Array.isArray(t)) {
		if (t.length > 1) {
			const e = t
				.filter((n) => n && n.checked && !n.disabled)
				.map((n) => n.value);
			return { value: e, isValid: !!e.length };
		}
		return t[0].checked && !t[0].disabled
			? t[0].attributes && !Ke(t[0].attributes.value)
				? Ke(t[0].value) || t[0].value === ''
					? Vm
					: { value: t[0].value, isValid: !0 }
				: Vm
			: Im;
	}
	return Im;
};
const $m = { isValid: !1, value: null };
var Vv = (t) =>
	Array.isArray(t)
		? t.reduce(
				(e, n) =>
					n && n.checked && !n.disabled ? { isValid: !0, value: n.value } : e,
				$m,
			)
		: $m;
function Um(t, e, n = 'validate') {
	if (Ju(t) || (Array.isArray(t) && t.every(Ju)) || (Vr(t) && !t))
		return { type: n, message: Ju(t) ? t : '', ref: e };
}
var Os = (t) => (dt(t) && !$a(t) ? t : { value: t, message: '' }),
	Bm = async (t, e, n, r, i) => {
		const {
				ref: s,
				refs: o,
				required: l,
				maxLength: u,
				minLength: a,
				min: c,
				max: d,
				pattern: f,
				validate: h,
				name: g,
				valueAsNumber: m,
				mount: T,
				disabled: _,
			} = t._f,
			p = X(e, g);
		if (!T || _) return {};
		const y = o ? o[0] : s,
			x = (D) => {
				r &&
					y.reportValidity &&
					(y.setCustomValidity(Vr(D) ? '' : D || ''), y.reportValidity());
			},
			k = {},
			C = Yh(s),
			E = nu(s),
			N = C || E,
			j =
				((m || Hh(s)) && Ke(s.value) && Ke(p)) ||
				(Va(s) && s.value === '') ||
				p === '' ||
				(Array.isArray(p) && !p.length),
			M = fT.bind(null, g, n, k),
			H = (D, I, Y, K = Ar.maxLength, G = Ar.minLength) => {
				const Q = D ? I : Y;
				k[g] = { type: D ? K : G, message: Q, ref: s, ...M(D ? K : G, Q) };
			};
		if (
			i
				? !Array.isArray(p) || !p.length
				: l &&
					((!N && (j || Gt(p))) ||
						(Vr(p) && !p) ||
						(E && !Iv(o).isValid) ||
						(C && !Vv(o).isValid))
		) {
			const { value: D, message: I } = Ju(l)
				? { value: !!l, message: l }
				: Os(l);
			if (
				D &&
				((k[g] = {
					type: Ar.required,
					message: I,
					ref: y,
					...M(Ar.required, I),
				}),
				!n)
			)
				return x(I), k;
		}
		if (!j && (!Gt(c) || !Gt(d))) {
			let D, I;
			const Y = Os(d),
				K = Os(c);
			if (!Gt(p) && !isNaN(p)) {
				const G = s.valueAsNumber || (p && +p);
				Gt(Y.value) || (D = G > Y.value), Gt(K.value) || (I = G < K.value);
			} else {
				const G = s.valueAsDate || new Date(p),
					Q = (w) => new Date(new Date().toDateString() + ' ' + w),
					A = s.type == 'time',
					$ = s.type == 'week';
				kr(Y.value) &&
					p &&
					(D = A ? Q(p) > Q(Y.value) : $ ? p > Y.value : G > new Date(Y.value)),
					kr(K.value) &&
						p &&
						(I = A
							? Q(p) < Q(K.value)
							: $
								? p < K.value
								: G < new Date(K.value));
			}
			if ((D || I) && (H(!!D, Y.message, K.message, Ar.max, Ar.min), !n))
				return x(k[g].message), k;
		}
		if ((u || a) && !j && (kr(p) || (i && Array.isArray(p)))) {
			const D = Os(u),
				I = Os(a),
				Y = !Gt(D.value) && p.length > +D.value,
				K = !Gt(I.value) && p.length < +I.value;
			if ((Y || K) && (H(Y, D.message, I.message), !n))
				return x(k[g].message), k;
		}
		if (f && !j && kr(p)) {
			const { value: D, message: I } = Os(f);
			if (
				$a(D) &&
				!p.match(D) &&
				((k[g] = { type: Ar.pattern, message: I, ref: s, ...M(Ar.pattern, I) }),
				!n)
			)
				return x(I), k;
		}
		if (h) {
			if (pi(h)) {
				const D = await h(p, e),
					I = Um(D, y);
				if (I && ((k[g] = { ...I, ...M(Ar.validate, I.message) }), !n))
					return x(I.message), k;
			} else if (dt(h)) {
				let D = {};
				for (const I in h) {
					if (!zn(D) && !n) break;
					const Y = Um(await h[I](p, e), y, I);
					Y &&
						((D = { ...Y, ...M(I, Y.message) }), x(Y.message), n && (k[g] = D));
				}
				if (!zn(D) && ((k[g] = { ref: y, ...D }), !n)) return k;
			}
		}
		return x(!0), k;
	};
function hT(t, e) {
	const n = e.slice(0, -1).length;
	let r = 0;
	for (; r < n; ) t = Ke(t) ? r++ : t[e[r++]];
	return t;
}
function pT(t) {
	for (const e in t) if (t.hasOwnProperty(e) && !Ke(t[e])) return !1;
	return !0;
}
function Ct(t, e) {
	const n = Array.isArray(e) ? e : bh(e) ? [e] : Fv(e),
		r = n.length === 1 ? t : hT(t, n),
		i = n.length - 1,
		s = n[i];
	return (
		r && delete r[s],
		i !== 0 &&
			((dt(r) && zn(r)) || (Array.isArray(r) && pT(r))) &&
			Ct(t, n.slice(0, -1)),
		t
	);
}
var Jc = () => {
		let t = [];
		return {
			get observers() {
				return t;
			},
			next: (i) => {
				for (const s of t) s.next && s.next(i);
			},
			subscribe: (i) => (
				t.push(i),
				{
					unsubscribe: () => {
						t = t.filter((s) => s !== i);
					},
				}
			),
			unsubscribe: () => {
				t = [];
			},
		};
	},
	Ua = (t) => Gt(t) || !Lv(t);
function es(t, e) {
	if (Ua(t) || Ua(e)) return t === e;
	if (Xs(t) && Xs(e)) return t.getTime() === e.getTime();
	const n = Object.keys(t),
		r = Object.keys(e);
	if (n.length !== r.length) return !1;
	for (const i of n) {
		const s = t[i];
		if (!r.includes(i)) return !1;
		if (i !== 'ref') {
			const o = e[i];
			if (
				(Xs(s) && Xs(o)) ||
				(dt(s) && dt(o)) ||
				(Array.isArray(s) && Array.isArray(o))
					? !es(s, o)
					: s !== o
			)
				return !1;
		}
	}
	return !0;
}
var $v = (t) => t.type === 'select-multiple',
	mT = (t) => Yh(t) || nu(t),
	ef = (t) => Va(t) && t.isConnected,
	Uv = (t) => {
		for (const e in t) if (pi(t[e])) return !0;
		return !1;
	};
function Ba(t, e = {}) {
	const n = Array.isArray(t);
	if (dt(t) || n)
		for (const r in t)
			Array.isArray(t[r]) || (dt(t[r]) && !Uv(t[r]))
				? ((e[r] = Array.isArray(t[r]) ? [] : {}), Ba(t[r], e[r]))
				: Gt(t[r]) || (e[r] = !0);
	return e;
}
function Bv(t, e, n) {
	const r = Array.isArray(t);
	if (dt(t) || r)
		for (const i in t)
			Array.isArray(t[i]) || (dt(t[i]) && !Uv(t[i]))
				? Ke(e) || Ua(n[i])
					? (n[i] = Array.isArray(t[i]) ? Ba(t[i], []) : { ...Ba(t[i]) })
					: Bv(t[i], Gt(e) ? {} : e[i], n[i])
				: (n[i] = !es(t[i], e[i]));
	return n;
}
var Eu = (t, e) => Bv(t, e, Ba(e)),
	Wv = (t, { valueAsNumber: e, valueAsDate: n, setValueAs: r }) =>
		Ke(t)
			? t
			: e
				? t === ''
					? NaN
					: t && +t
				: n && kr(t)
					? new Date(t)
					: r
						? r(t)
						: t;
function tf(t) {
	const e = t.ref;
	if (!(t.refs ? t.refs.every((n) => n.disabled) : e.disabled))
		return Hh(e)
			? e.files
			: Yh(e)
				? Vv(t.refs).value
				: $v(e)
					? [...e.selectedOptions].map(({ value: n }) => n)
					: nu(e)
						? Iv(t.refs).value
						: Wv(Ke(e.value) ? t.ref.value : e.value, t);
}
var _T = (t, e, n, r) => {
		const i = {};
		for (const s of t) {
			const o = X(e, s);
			o && De(i, s, o._f);
		}
		return {
			criteriaMode: n,
			names: [...t],
			fields: i,
			shouldUseNativeValidation: r,
		};
	},
	$o = (t) =>
		Ke(t)
			? t
			: $a(t)
				? t.source
				: dt(t)
					? $a(t.value)
						? t.value.source
						: t.value
					: t,
	gT = (t) =>
		t.mount &&
		(t.required ||
			t.min ||
			t.max ||
			t.maxLength ||
			t.minLength ||
			t.pattern ||
			t.validate);
function Wm(t, e, n) {
	const r = X(t, n);
	if (r || bh(n)) return { error: r, name: n };
	const i = n.split('.');
	for (; i.length; ) {
		const s = i.join('.'),
			o = X(e, s),
			l = X(t, s);
		if (o && !Array.isArray(o) && n !== s) return { name: n };
		if (l && l.type) return { name: s, error: l };
		i.pop();
	}
	return { name: n };
}
var vT = (t, e, n, r, i) =>
		i.isOnAll
			? !1
			: !n && i.isOnTouch
				? !(e || t)
				: (n ? r.isOnBlur : i.isOnBlur)
					? !t
					: (n ? r.isOnChange : i.isOnChange)
						? t
						: !0,
	yT = (t, e) => !ru(X(t, e)).length && Ct(t, e);
const xT = {
	mode: ur.onSubmit,
	reValidateMode: ur.onChange,
	shouldFocusError: !0,
};
function wT(t = {}, e) {
	let n = { ...xT, ...t },
		r = {
			submitCount: 0,
			isDirty: !1,
			isLoading: pi(n.defaultValues),
			isValidating: !1,
			isSubmitted: !1,
			isSubmitting: !1,
			isSubmitSuccessful: !1,
			isValid: !1,
			touchedFields: {},
			dirtyFields: {},
			errors: n.errors || {},
			disabled: n.disabled || !1,
		},
		i = {},
		s =
			dt(n.values) || dt(n.defaultValues)
				? An(n.values || n.defaultValues) || {}
				: {},
		o = n.shouldUnregister ? {} : An(s),
		l = { action: !1, mount: !1, watch: !1 },
		u = {
			mount: new Set(),
			unMount: new Set(),
			array: new Set(),
			watch: new Set(),
		},
		a,
		c = 0;
	const d = {
			isDirty: !1,
			dirtyFields: !1,
			touchedFields: !1,
			isValidating: !1,
			isValid: !1,
			errors: !1,
		},
		f = { values: Jc(), array: Jc(), state: Jc() },
		h = zm(n.mode),
		g = zm(n.reValidateMode),
		m = n.criteriaMode === ur.all,
		T = (S) => (P) => {
			clearTimeout(c), (c = setTimeout(S, P));
		},
		_ = async (S) => {
			if (d.isValid || S) {
				const P = n.resolver ? zn((await j()).errors) : await H(i, !0);
				P !== r.isValid && f.state.next({ isValid: P });
			}
		},
		p = (S) => d.isValidating && f.state.next({ isValidating: S }),
		y = (S, P = [], O, V, F = !0, L = !0) => {
			if (V && O) {
				if (((l.action = !0), L && Array.isArray(X(i, S)))) {
					const B = O(X(i, S), V.argA, V.argB);
					F && De(i, S, B);
				}
				if (L && Array.isArray(X(r.errors, S))) {
					const B = O(X(r.errors, S), V.argA, V.argB);
					F && De(r.errors, S, B), yT(r.errors, S);
				}
				if (d.touchedFields && L && Array.isArray(X(r.touchedFields, S))) {
					const B = O(X(r.touchedFields, S), V.argA, V.argB);
					F && De(r.touchedFields, S, B);
				}
				d.dirtyFields && (r.dirtyFields = Eu(s, o)),
					f.state.next({
						name: S,
						isDirty: I(S, P),
						dirtyFields: r.dirtyFields,
						errors: r.errors,
						isValid: r.isValid,
					});
			} else De(o, S, P);
		},
		x = (S, P) => {
			De(r.errors, S, P), f.state.next({ errors: r.errors });
		},
		k = (S) => {
			(r.errors = S), f.state.next({ errors: r.errors, isValid: !1 });
		},
		C = (S, P, O, V) => {
			const F = X(i, S);
			if (F) {
				const L = X(o, S, Ke(O) ? X(s, S) : O);
				Ke(L) || (V && V.defaultChecked) || P
					? De(o, S, P ? L : tf(F._f))
					: G(S, L),
					l.mount && _();
			}
		},
		E = (S, P, O, V, F) => {
			let L = !1,
				B = !1;
			const fe = { name: S },
				ie = !!(X(i, S) && X(i, S)._f.disabled);
			if (!O || V) {
				d.isDirty &&
					((B = r.isDirty),
					(r.isDirty = fe.isDirty = I()),
					(L = B !== fe.isDirty));
				const be = ie || es(X(s, S), P);
				(B = !!(!ie && X(r.dirtyFields, S))),
					be || ie ? Ct(r.dirtyFields, S) : De(r.dirtyFields, S, !0),
					(fe.dirtyFields = r.dirtyFields),
					(L = L || (d.dirtyFields && B !== !be));
			}
			if (O) {
				const be = X(r.touchedFields, S);
				be ||
					(De(r.touchedFields, S, O),
					(fe.touchedFields = r.touchedFields),
					(L = L || (d.touchedFields && be !== O)));
			}
			return L && F && f.state.next(fe), L ? fe : {};
		},
		N = (S, P, O, V) => {
			const F = X(r.errors, S),
				L = d.isValid && Vr(P) && r.isValid !== P;
			if (
				(t.delayError && O
					? ((a = T(() => x(S, O))), a(t.delayError))
					: (clearTimeout(c),
						(a = null),
						O ? De(r.errors, S, O) : Ct(r.errors, S)),
				(O ? !es(F, O) : F) || !zn(V) || L)
			) {
				const B = {
					...V,
					...(L && Vr(P) ? { isValid: P } : {}),
					errors: r.errors,
					name: S,
				};
				(r = { ...r, ...B }), f.state.next(B);
			}
			p(!1);
		},
		j = async (S) =>
			n.resolver(
				o,
				n.context,
				_T(S || u.mount, i, n.criteriaMode, n.shouldUseNativeValidation),
			),
		M = async (S) => {
			const { errors: P } = await j(S);
			if (S)
				for (const O of S) {
					const V = X(P, O);
					V ? De(r.errors, O, V) : Ct(r.errors, O);
				}
			else r.errors = P;
			return P;
		},
		H = async (S, P, O = { valid: !0 }) => {
			for (const V in S) {
				const F = S[V];
				if (F) {
					const { _f: L, ...B } = F;
					if (L) {
						const fe = u.array.has(L.name),
							ie = await Bm(F, o, m, n.shouldUseNativeValidation && !P, fe);
						if (ie[L.name] && ((O.valid = !1), P)) break;
						!P &&
							(X(ie, L.name)
								? fe
									? dT(r.errors, ie, L.name)
									: De(r.errors, L.name, ie[L.name])
								: Ct(r.errors, L.name));
					}
					B && (await H(B, P, O));
				}
			}
			return O.valid;
		},
		D = () => {
			for (const S of u.unMount) {
				const P = X(i, S);
				P &&
					(P._f.refs ? P._f.refs.every((O) => !ef(O)) : !ef(P._f.ref)) &&
					ye(S);
			}
			u.unMount = new Set();
		},
		I = (S, P) => (S && P && De(o, S, P), !es(oe(), s)),
		Y = (S, P, O) =>
			cT(S, u, { ...(l.mount ? o : Ke(P) ? s : kr(S) ? { [S]: P } : P) }, O, P),
		K = (S) => ru(X(l.mount ? o : s, S, t.shouldUnregister ? X(s, S, []) : [])),
		G = (S, P, O = {}) => {
			const V = X(i, S);
			let F = P;
			if (V) {
				const L = V._f;
				L &&
					(!L.disabled && De(o, S, Wv(P, L)),
					(F = Va(L.ref) && Gt(P) ? '' : P),
					$v(L.ref)
						? [...L.ref.options].forEach(
								(B) => (B.selected = F.includes(B.value)),
							)
						: L.refs
							? nu(L.ref)
								? L.refs.length > 1
									? L.refs.forEach(
											(B) =>
												(!B.defaultChecked || !B.disabled) &&
												(B.checked = Array.isArray(F)
													? !!F.find((fe) => fe === B.value)
													: F === B.value),
										)
									: L.refs[0] && (L.refs[0].checked = !!F)
								: L.refs.forEach((B) => (B.checked = B.value === F))
							: Hh(L.ref)
								? (L.ref.value = '')
								: ((L.ref.value = F),
									L.ref.type || f.values.next({ name: S, values: { ...o } })));
			}
			(O.shouldDirty || O.shouldTouch) &&
				E(S, F, O.shouldTouch, O.shouldDirty, !0),
				O.shouldValidate && q(S);
		},
		Q = (S, P, O) => {
			for (const V in P) {
				const F = P[V],
					L = `${S}.${V}`,
					B = X(i, L);
				(u.array.has(S) || !Ua(F) || (B && !B._f)) && !Xs(F)
					? Q(L, F, O)
					: G(L, F, O);
			}
		},
		A = (S, P, O = {}) => {
			const V = X(i, S),
				F = u.array.has(S),
				L = An(P);
			De(o, S, L),
				F
					? (f.array.next({ name: S, values: { ...o } }),
						(d.isDirty || d.dirtyFields) &&
							O.shouldDirty &&
							f.state.next({
								name: S,
								dirtyFields: Eu(s, o),
								isDirty: I(S, L),
							}))
					: V && !V._f && !Gt(L)
						? Q(S, L, O)
						: G(S, L, O),
				Fm(S, u) && f.state.next({ ...r }),
				f.values.next({ name: S, values: { ...o } }),
				!l.mount && e();
		},
		$ = async (S) => {
			const P = S.target;
			let O = P.name,
				V = !0;
			const F = X(i, O),
				L = () => (P.type ? tf(F._f) : tT(S)),
				B = (fe) => {
					V = Number.isNaN(fe) || fe === X(o, O, fe);
				};
			if (F) {
				let fe, ie;
				const be = L(),
					st = S.type === Lm.BLUR || S.type === Lm.FOCUS_OUT,
					Kn =
						(!gT(F._f) && !n.resolver && !X(r.errors, O) && !F._f.deps) ||
						vT(st, X(r.touchedFields, O), r.isSubmitted, g, h),
					Mr = Fm(O, u, st);
				De(o, O, be),
					st
						? (F._f.onBlur && F._f.onBlur(S), a && a(0))
						: F._f.onChange && F._f.onChange(S);
				const je = E(O, be, st, !1),
					Ts = !zn(je) || Mr;
				if (
					(!st && f.values.next({ name: O, type: S.type, values: { ...o } }),
					Kn)
				)
					return (
						d.isValid && _(), Ts && f.state.next({ name: O, ...(Mr ? {} : je) })
					);
				if ((!st && Mr && f.state.next({ ...r }), p(!0), n.resolver)) {
					const { errors: qn } = await j([O]);
					if ((B(be), V)) {
						const Jr = Wm(r.errors, i, O),
							jr = Wm(qn, i, Jr.name || O);
						(fe = jr.error), (O = jr.name), (ie = zn(qn));
					}
				} else
					(fe = (await Bm(F, o, m, n.shouldUseNativeValidation))[O]),
						B(be),
						V && (fe ? (ie = !1) : d.isValid && (ie = await H(i, !0)));
				V && (F._f.deps && q(F._f.deps), N(O, ie, fe, je));
			}
		},
		w = (S, P) => {
			if (X(r.errors, P) && S.focus) return S.focus(), 1;
		},
		q = async (S, P = {}) => {
			let O, V;
			const F = Zc(S);
			if ((p(!0), n.resolver)) {
				const L = await M(Ke(S) ? S : F);
				(O = zn(L)), (V = S ? !F.some((B) => X(L, B)) : O);
			} else
				S
					? ((V = (
							await Promise.all(
								F.map(async (L) => {
									const B = X(i, L);
									return await H(B && B._f ? { [L]: B } : B);
								}),
							)
						).every(Boolean)),
						!(!V && !r.isValid) && _())
					: (V = O = await H(i));
			return (
				f.state.next({
					...(!kr(S) || (d.isValid && O !== r.isValid) ? {} : { name: S }),
					...(n.resolver || !S ? { isValid: O } : {}),
					errors: r.errors,
					isValidating: !1,
				}),
				P.shouldFocus && !V && dl(i, w, S ? F : u.mount),
				V
			);
		},
		oe = (S) => {
			const P = { ...s, ...(l.mount ? o : {}) };
			return Ke(S) ? P : kr(S) ? X(P, S) : S.map((O) => X(P, O));
		},
		it = (S, P) => ({
			invalid: !!X((P || r).errors, S),
			isDirty: !!X((P || r).dirtyFields, S),
			isTouched: !!X((P || r).touchedFields, S),
			error: X((P || r).errors, S),
		}),
		ge = (S) => {
			S && Zc(S).forEach((P) => Ct(r.errors, P)),
				f.state.next({ errors: S ? r.errors : {} });
		},
		Oe = (S, P, O) => {
			const V = (X(i, S, { _f: {} })._f || {}).ref;
			De(r.errors, S, { ...P, ref: V }),
				f.state.next({ name: S, errors: r.errors, isValid: !1 }),
				O && O.shouldFocus && V && V.focus && V.focus();
		},
		Ee = (S, P) =>
			pi(S)
				? f.values.subscribe({ next: (O) => S(Y(void 0, P), O) })
				: Y(S, P, !0),
		ye = (S, P = {}) => {
			for (const O of S ? Zc(S) : u.mount)
				u.mount.delete(O),
					u.array.delete(O),
					P.keepValue || (Ct(i, O), Ct(o, O)),
					!P.keepError && Ct(r.errors, O),
					!P.keepDirty && Ct(r.dirtyFields, O),
					!P.keepTouched && Ct(r.touchedFields, O),
					!n.shouldUnregister && !P.keepDefaultValue && Ct(s, O);
			f.values.next({ values: { ...o } }),
				f.state.next({ ...r, ...(P.keepDirty ? { isDirty: I() } : {}) }),
				!P.keepIsValid && _();
		},
		ht = ({ disabled: S, name: P, field: O, fields: V, value: F }) => {
			if (Vr(S)) {
				const L = S ? void 0 : Ke(F) ? tf(O ? O._f : X(V, P)._f) : F;
				De(o, P, L), E(P, L, !1, !1, !0);
			}
		},
		et = (S, P = {}) => {
			let O = X(i, S);
			const V = Vr(P.disabled);
			return (
				De(i, S, {
					...(O || {}),
					_f: {
						...(O && O._f ? O._f : { ref: { name: S } }),
						name: S,
						mount: !0,
						...P,
					},
				}),
				u.mount.add(S),
				O
					? ht({ field: O, disabled: P.disabled, name: S, value: P.value })
					: C(S, !0, P.value),
				{
					...(V ? { disabled: P.disabled } : {}),
					...(n.progressive
						? {
								required: !!P.required,
								min: $o(P.min),
								max: $o(P.max),
								minLength: $o(P.minLength),
								maxLength: $o(P.maxLength),
								pattern: $o(P.pattern),
							}
						: {}),
					name: S,
					onChange: $,
					onBlur: $,
					ref: (F) => {
						if (F) {
							et(S, P), (O = X(i, S));
							const L =
									(Ke(F.value) &&
										F.querySelectorAll &&
										F.querySelectorAll('input,select,textarea')[0]) ||
									F,
								B = mT(L),
								fe = O._f.refs || [];
							if (B ? fe.find((ie) => ie === L) : L === O._f.ref) return;
							De(i, S, {
								_f: {
									...O._f,
									...(B
										? {
												refs: [
													...fe.filter(ef),
													L,
													...(Array.isArray(X(s, S)) ? [{}] : []),
												],
												ref: { type: L.type, name: S },
											}
										: { ref: L }),
								},
							}),
								C(S, !1, void 0, L);
						} else
							(O = X(i, S, {})),
								O._f && (O._f.mount = !1),
								(n.shouldUnregister || P.shouldUnregister) &&
									!(rT(u.array, S) && l.action) &&
									u.unMount.add(S);
					},
				}
			);
		},
		Gn = () => n.shouldFocusError && dl(i, w, u.mount),
		wt = (S) => {
			Vr(S) &&
				(f.state.next({ disabled: S }),
				dl(
					i,
					(P, O) => {
						let V = S;
						const F = X(i, O);
						F && Vr(F._f.disabled) && (V || (V = F._f.disabled)),
							(P.disabled = V);
					},
					0,
					!1,
				));
		},
		rn = (S, P) => async (O) => {
			let V;
			O && (O.preventDefault && O.preventDefault(), O.persist && O.persist());
			let F = An(o);
			if ((f.state.next({ isSubmitting: !0 }), n.resolver)) {
				const { errors: L, values: B } = await j();
				(r.errors = L), (F = B);
			} else await H(i);
			if ((Ct(r.errors, 'root'), zn(r.errors))) {
				f.state.next({ errors: {} });
				try {
					await S(F, O);
				} catch (L) {
					V = L;
				}
			} else P && (await P({ ...r.errors }, O)), Gn(), setTimeout(Gn);
			if (
				(f.state.next({
					isSubmitted: !0,
					isSubmitting: !1,
					isSubmitSuccessful: zn(r.errors) && !V,
					submitCount: r.submitCount + 1,
					errors: r.errors,
				}),
				V)
			)
				throw V;
		},
		me = (S, P = {}) => {
			X(i, S) &&
				(Ke(P.defaultValue)
					? A(S, An(X(s, S)))
					: (A(S, P.defaultValue), De(s, S, An(P.defaultValue))),
				P.keepTouched || Ct(r.touchedFields, S),
				P.keepDirty ||
					(Ct(r.dirtyFields, S),
					(r.isDirty = P.defaultValue ? I(S, An(X(s, S))) : I())),
				P.keepError || (Ct(r.errors, S), d.isValid && _()),
				f.state.next({ ...r }));
		},
		Me = (S, P = {}) => {
			const O = S ? An(S) : s,
				V = An(O),
				F = S && !zn(S) ? V : s;
			if ((P.keepDefaultValues || (s = O), !P.keepValues)) {
				if (P.keepDirtyValues)
					for (const L of u.mount)
						X(r.dirtyFields, L) ? De(F, L, X(o, L)) : A(L, X(F, L));
				else {
					if (Wh && Ke(S))
						for (const L of u.mount) {
							const B = X(i, L);
							if (B && B._f) {
								const fe = Array.isArray(B._f.refs) ? B._f.refs[0] : B._f.ref;
								if (Va(fe)) {
									const ie = fe.closest('form');
									if (ie) {
										ie.reset();
										break;
									}
								}
							}
						}
					i = {};
				}
				(o = t.shouldUnregister ? (P.keepDefaultValues ? An(s) : {}) : An(F)),
					f.array.next({ values: { ...F } }),
					f.values.next({ values: { ...F } });
			}
			(u = {
				mount: new Set(),
				unMount: new Set(),
				array: new Set(),
				watch: new Set(),
				watchAll: !1,
				focus: '',
			}),
				!l.mount && e(),
				(l.mount = !d.isValid || !!P.keepIsValid || !!P.keepDirtyValues),
				(l.watch = !!t.shouldUnregister),
				f.state.next({
					submitCount: P.keepSubmitCount ? r.submitCount : 0,
					isDirty: P.keepDirty
						? r.isDirty
						: !!(P.keepDefaultValues && !es(S, s)),
					isSubmitted: P.keepIsSubmitted ? r.isSubmitted : !1,
					dirtyFields: P.keepDirtyValues
						? P.keepDefaultValues && o
							? Eu(s, o)
							: r.dirtyFields
						: P.keepDefaultValues && S
							? Eu(s, S)
							: {},
					touchedFields: P.keepTouched ? r.touchedFields : {},
					errors: P.keepErrors ? r.errors : {},
					isSubmitSuccessful: P.keepIsSubmitSuccessful
						? r.isSubmitSuccessful
						: !1,
					isSubmitting: !1,
				});
		},
		St = (S, P) => Me(pi(S) ? S(o) : S, P);
	return {
		control: {
			register: et,
			unregister: ye,
			getFieldState: it,
			handleSubmit: rn,
			setError: Oe,
			_executeSchema: j,
			_getWatch: Y,
			_getDirty: I,
			_updateValid: _,
			_removeUnmounted: D,
			_updateFieldArray: y,
			_updateDisabledField: ht,
			_getFieldArray: K,
			_reset: Me,
			_resetDefaultValues: () =>
				pi(n.defaultValues) &&
				n.defaultValues().then((S) => {
					St(S, n.resetOptions), f.state.next({ isLoading: !1 });
				}),
			_updateFormState: (S) => {
				r = { ...r, ...S };
			},
			_disableForm: wt,
			_subjects: f,
			_proxyFormState: d,
			_setErrors: k,
			get _fields() {
				return i;
			},
			get _formValues() {
				return o;
			},
			get _state() {
				return l;
			},
			set _state(S) {
				l = S;
			},
			get _defaultValues() {
				return s;
			},
			get _names() {
				return u;
			},
			set _names(S) {
				u = S;
			},
			get _formState() {
				return r;
			},
			set _formState(S) {
				r = S;
			},
			get _options() {
				return n;
			},
			set _options(S) {
				n = { ...n, ...S };
			},
		},
		trigger: q,
		register: et,
		handleSubmit: rn,
		watch: Ee,
		setValue: A,
		getValues: oe,
		reset: St,
		resetField: me,
		clearErrors: ge,
		unregister: ye,
		setError: Oe,
		setFocus: (S, P = {}) => {
			const O = X(i, S),
				V = O && O._f;
			if (V) {
				const F = V.refs ? V.refs[0] : V.ref;
				F.focus && (F.focus(), P.shouldSelect && F.select());
			}
		},
		getFieldState: it,
	};
}
function ST(t = {}) {
	const e = ut.useRef(),
		n = ut.useRef(),
		[r, i] = ut.useState({
			isDirty: !1,
			isValidating: !1,
			isLoading: pi(t.defaultValues),
			isSubmitted: !1,
			isSubmitting: !1,
			isSubmitSuccessful: !1,
			isValid: !1,
			submitCount: 0,
			dirtyFields: {},
			touchedFields: {},
			errors: t.errors || {},
			disabled: t.disabled || !1,
			defaultValues: pi(t.defaultValues) ? void 0 : t.defaultValues,
		});
	e.current ||
		(e.current = { ...wT(t, () => i((o) => ({ ...o }))), formState: r });
	const s = e.current.control;
	return (
		(s._options = t),
		aT({
			subject: s._subjects.state,
			next: (o) => {
				uT(o, s._proxyFormState, s._updateFormState, !0) &&
					i({ ...s._formState });
			},
		}),
		ut.useEffect(() => s._disableForm(t.disabled), [s, t.disabled]),
		ut.useEffect(() => {
			if (s._proxyFormState.isDirty) {
				const o = s._getDirty();
				o !== r.isDirty && s._subjects.state.next({ isDirty: o });
			}
		}, [s, r.isDirty]),
		ut.useEffect(() => {
			t.values && !es(t.values, n.current)
				? (s._reset(t.values, s._options.resetOptions),
					(n.current = t.values),
					i((o) => ({ ...o })))
				: s._resetDefaultValues();
		}, [t.values, s]),
		ut.useEffect(() => {
			t.errors && s._setErrors(t.errors);
		}, [t.errors, s]),
		ut.useEffect(() => {
			s._state.mount || (s._updateValid(), (s._state.mount = !0)),
				s._state.watch &&
					((s._state.watch = !1), s._subjects.state.next({ ...s._formState })),
				s._removeUnmounted();
		}),
		ut.useEffect(() => {
			t.shouldUnregister && s._subjects.values.next({ values: s._getWatch() });
		}, [t.shouldUnregister, s]),
		(e.current.formState = lT(r, s)),
		e.current
	);
}
const bi = ({
		id: t,
		label: e = void 0,
		placeholder: n,
		type: r,
		name: i,
		validation: s = void 0,
		multiline: o = !1,
		rows: l = void 0,
	}) => {
		const {
				register: u,
				formState: { errors: a },
			} = sT(),
			c = (g, m) =>
				Object.keys(g)
					.filter((_) => _.includes(m))
					.reduce((_, p) => Object.assign(_, { error: g[p] }), {}),
			d = (g) => Object.keys(g).length > 0,
			f = c(a, i),
			h = d(f);
		return v.jsxs('div', {
			style: { position: 'relative' },
			children: [
				v.jsx('label', { htmlFor: t, children: e }),
				o
					? v.jsx('textarea', { placeholder: n, id: t, rows: l, ...u(i, s) })
					: v.jsx('input', { placeholder: n, id: t, type: r, ...u(i, s) }),
				h && v.jsx('p', { className: ln.error, children: f.error.message }),
			],
		});
	},
	kT = {
		label: 'お名前',
		placeholder: '例） 令和',
		id: 'familyName',
		type: 'text',
		name: 'familyName',
		validation: { required: { value: !0, message: '必須' } },
	},
	TT = {
		label: '',
		placeholder: '例） 太郎',
		id: 'firstName',
		type: 'text',
		name: 'firstName',
		validation: { required: { value: !0, message: '必須' } },
	},
	ET = {
		id: 'furiganaFamilyName',
		label: 'フリガナ',
		placeholder: '例） レイワ',
		type: 'text',
		name: 'furiganaFamilyName',
		validation: {
			required: { value: !0, message: '必須' },
			pattern: { value: /^(?:[ァ-ヴ]|[ｦ-ﾟ])+$/u, message: 'カタカナ入力' },
		},
	},
	CT = {
		id: 'furiganaFirstName',
		label: '',
		placeholder: '例） タロウ',
		type: 'text',
		name: 'furiganaFirstName',
		validation: {
			required: { value: !0, message: '必須' },
			pattern: { value: /^(?:[ァ-ヴ]|[ｦ-ﾟ])+$/u, message: 'カタカナ入力' },
		},
	},
	PT = {
		id: 'company',
		label: '会社名 （任意）',
		placeholder: '例） 株式会社 令和',
		type: 'text',
		name: 'company',
	},
	NT = {
		id: 'email',
		label: 'メールアドレス',
		placeholder: '例） email@example.com',
		type: 'email',
		name: 'email',
		validation: {
			required: { value: !0, message: '必須' },
			pattern: {
				value:
					/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
				message: '無効なメールアドレス',
			},
		},
	},
	OT = {
		multiline: !0,
		id: 'message',
		label: 'お問い合わせ',
		placeholder: 'お問い合わせをご記入ください',
		rows: '5',
		name: 'message',
		validation: {
			required: { value: !0, message: '必須' },
			maxLength: { value: 400, message: '400文字以内で入力' },
		},
	},
	MT = () => {
		const t = ST(),
			[e, n] = te.useState(!1),
			r = t.handleSubmit((s) => {
				t.reset(), n(!0);
			}),
			i = () => {
				t.reset();
			};
		return v.jsx(oT, {
			...t,
			children: v.jsxs('form', {
				className: ln.from,
				action: '',
				noValidate: !0,
				autoComplete: 'off',
				onSubmit: (s) => s.preventDefault(),
				children: [
					v.jsxs('div', {
						className: ln.name,
						children: [v.jsx(bi, { ...kT }), v.jsx(bi, { ...TT })],
					}),
					v.jsxs('div', {
						className: ln.name,
						children: [v.jsx(bi, { ...ET }), v.jsx(bi, { ...CT })],
					}),
					v.jsx('div', {
						className: ln.company,
						children: v.jsx(bi, { ...PT, className: ln.company }),
					}),
					v.jsx('div', { className: ln.email, children: v.jsx(bi, { ...NT }) }),
					v.jsx('div', {
						className: ln.message,
						children: v.jsx(bi, { ...OT }),
					}),
					e && v.jsx('p', { children: '送信完了' }),
					v.jsxs('div', {
						className: ln.buttonContainer,
						children: [
							v.jsx('button', {
								onClick: r,
								className: ln.submit,
								children: '送信する',
							}),
							v.jsx('button', {
								onClick: i,
								className: ln.cancel,
								children: 'キャンセル',
							}),
						],
					}),
				],
			}),
		});
	};
function jT() {
	return v.jsx('article', {
		className: ln.container,
		id: 'contact',
		children: v.jsxs('div', {
			className: ln.outer,
			children: [
				v.jsx(Bh, { children: 'CONTACT' }),
				v.jsx('div', { className: ln.inner, children: v.jsx(MT, {}) }),
			],
		}),
	});
}
function RT() {
	return v.jsxs('main', {
		children: [
			v.jsx(Kw, {}),
			v.jsx(Rk, {}),
			v.jsx(P2, {}),
			v.jsx(W2, {}),
			v.jsx(jT, {}),
		],
	});
}
function DT() {
	const e = new Date().getFullYear();
	return v.jsx('footer', {
		children: v.jsxs('p', {
			children: [
				'Copyright ©',
				e,
				v.jsx('a', { href: '#', children: 'Malts Corporation' }),
				'All Rights Reserved.',
			],
		}),
	});
}
function bm(t, e) {
	for (var n = 0; n < e.length; n++) {
		var r = e[n];
		(r.enumerable = r.enumerable || !1),
			(r.configurable = !0),
			'value' in r && (r.writable = !0),
			Object.defineProperty(t, r.key, r);
	}
}
function AT(t, e, n) {
	return e && bm(t.prototype, e), n && bm(t, n), t;
}
/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Nt,
	ea,
	En,
	mi,
	_i,
	so,
	bv,
	Xi,
	hl,
	Hv,
	Wr,
	rr,
	Yv,
	Qv = function () {
		return (
			Nt ||
			(typeof window < 'u' && (Nt = window.gsap) && Nt.registerPlugin && Nt)
		);
	},
	Xv = 1,
	Gs = [],
	ue = [],
	Nr = [],
	pl = Date.now,
	xd = function (e, n) {
		return n;
	},
	LT = function () {
		var e = hl.core,
			n = e.bridge || {},
			r = e._scrollers,
			i = e._proxies;
		r.push.apply(r, ue),
			i.push.apply(i, Nr),
			(ue = r),
			(Nr = i),
			(xd = function (o, l) {
				return n[o](l);
			});
	},
	Pi = function (e, n) {
		return ~Nr.indexOf(e) && Nr[Nr.indexOf(e) + 1][n];
	},
	ml = function (e) {
		return !!~Hv.indexOf(e);
	},
	bt = function (e, n, r, i, s) {
		return e.addEventListener(n, r, { passive: i !== !1, capture: !!s });
	},
	Wt = function (e, n, r, i) {
		return e.removeEventListener(n, r, !!i);
	},
	Cu = 'scrollLeft',
	Pu = 'scrollTop',
	wd = function () {
		return (Wr && Wr.isPressed) || ue.cache++;
	},
	Wa = function (e, n) {
		var r = function i(s) {
			if (s || s === 0) {
				Xv && (En.history.scrollRestoration = 'manual');
				var o = Wr && Wr.isPressed;
				(s = i.v = Math.round(s) || (Wr && Wr.iOS ? 1 : 0)),
					e(s),
					(i.cacheID = ue.cache),
					o && xd('ss', s);
			} else
				(n || ue.cache !== i.cacheID || xd('ref')) &&
					((i.cacheID = ue.cache), (i.v = e()));
			return i.v + i.offset;
		};
		return (r.offset = 0), e && r;
	},
	qt = {
		s: Cu,
		p: 'left',
		p2: 'Left',
		os: 'right',
		os2: 'Right',
		d: 'width',
		d2: 'Width',
		a: 'x',
		sc: Wa(function (t) {
			return arguments.length
				? En.scrollTo(t, ct.sc())
				: En.pageXOffset || mi[Cu] || _i[Cu] || so[Cu] || 0;
		}),
	},
	ct = {
		s: Pu,
		p: 'top',
		p2: 'Top',
		os: 'bottom',
		os2: 'Bottom',
		d: 'height',
		d2: 'Height',
		a: 'y',
		op: qt,
		sc: Wa(function (t) {
			return arguments.length
				? En.scrollTo(qt.sc(), t)
				: En.pageYOffset || mi[Pu] || _i[Pu] || so[Pu] || 0;
		}),
	},
	un = function (e, n) {
		return (
			((n && n._ctx && n._ctx.selector) || Nt.utils.toArray)(e)[0] ||
			(typeof e == 'string' && Nt.config().nullTargetWarn !== !1
				? console.warn('Element not found:', e)
				: null)
		);
	},
	Ri = function (e, n) {
		var r = n.s,
			i = n.sc;
		ml(e) && (e = mi.scrollingElement || _i);
		var s = ue.indexOf(e),
			o = i === ct.sc ? 1 : 2;
		!~s && (s = ue.push(e) - 1), ue[s + o] || bt(e, 'scroll', wd);
		var l = ue[s + o],
			u =
				l ||
				(ue[s + o] =
					Wa(Pi(e, r), !0) ||
					(ml(e)
						? i
						: Wa(function (a) {
								return arguments.length ? (e[r] = a) : e[r];
							})));
		return (
			(u.target = e),
			l || (u.smooth = Nt.getProperty(e, 'scrollBehavior') === 'smooth'),
			u
		);
	},
	Sd = function (e, n, r) {
		var i = e,
			s = e,
			o = pl(),
			l = o,
			u = n || 50,
			a = Math.max(500, u * 3),
			c = function (g, m) {
				var T = pl();
				m || T - o > u
					? ((s = i), (i = g), (l = o), (o = T))
					: r
						? (i += g)
						: (i = s + ((g - s) / (T - l)) * (o - l));
			},
			d = function () {
				(s = i = r ? 0 : i), (l = o = 0);
			},
			f = function (g) {
				var m = l,
					T = s,
					_ = pl();
				return (
					(g || g === 0) && g !== i && c(g),
					o === l || _ - l > a
						? 0
						: ((i + (r ? T : -T)) / ((r ? _ : o) - m)) * 1e3
				);
			};
		return { update: c, reset: d, getVelocity: f };
	},
	Uo = function (e, n) {
		return (
			n && !e._gsapAllow && e.preventDefault(),
			e.changedTouches ? e.changedTouches[0] : e
		);
	},
	Hm = function (e) {
		var n = Math.max.apply(Math, e),
			r = Math.min.apply(Math, e);
		return Math.abs(n) >= Math.abs(r) ? n : r;
	},
	Gv = function () {
		(hl = Nt.core.globals().ScrollTrigger), hl && hl.core && LT();
	},
	Kv = function (e) {
		return (
			(Nt = e || Qv()),
			!ea &&
				Nt &&
				typeof document < 'u' &&
				document.body &&
				((En = window),
				(mi = document),
				(_i = mi.documentElement),
				(so = mi.body),
				(Hv = [En, mi, _i, so]),
				Nt.utils.clamp,
				(Yv = Nt.core.context || function () {}),
				(Xi = 'onpointerenter' in so ? 'pointer' : 'mouse'),
				(bv = Je.isTouch =
					En.matchMedia &&
					En.matchMedia('(hover: none), (pointer: coarse)').matches
						? 1
						: 'ontouchstart' in En ||
							  navigator.maxTouchPoints > 0 ||
							  navigator.msMaxTouchPoints > 0
							? 2
							: 0),
				(rr = Je.eventTypes =
					(
						'ontouchstart' in _i
							? 'touchstart,touchmove,touchcancel,touchend'
							: 'onpointerdown' in _i
								? 'pointerdown,pointermove,pointercancel,pointerup'
								: 'mousedown,mousemove,mouseup,mouseup'
					).split(',')),
				setTimeout(function () {
					return (Xv = 0);
				}, 500),
				Gv(),
				(ea = 1)),
			ea
		);
	};
qt.op = ct;
ue.cache = 0;
var Je = (function () {
	function t(n) {
		this.init(n);
	}
	var e = t.prototype;
	return (
		(e.init = function (r) {
			ea || Kv(Nt) || console.warn('Please gsap.registerPlugin(Observer)'),
				hl || Gv();
			var i = r.tolerance,
				s = r.dragMinimum,
				o = r.type,
				l = r.target,
				u = r.lineHeight,
				a = r.debounce,
				c = r.preventDefault,
				d = r.onStop,
				f = r.onStopDelay,
				h = r.ignore,
				g = r.wheelSpeed,
				m = r.event,
				T = r.onDragStart,
				_ = r.onDragEnd,
				p = r.onDrag,
				y = r.onPress,
				x = r.onRelease,
				k = r.onRight,
				C = r.onLeft,
				E = r.onUp,
				N = r.onDown,
				j = r.onChangeX,
				M = r.onChangeY,
				H = r.onChange,
				D = r.onToggleX,
				I = r.onToggleY,
				Y = r.onHover,
				K = r.onHoverEnd,
				G = r.onMove,
				Q = r.ignoreCheck,
				A = r.isNormalizer,
				$ = r.onGestureStart,
				w = r.onGestureEnd,
				q = r.onWheel,
				oe = r.onEnable,
				it = r.onDisable,
				ge = r.onClick,
				Oe = r.scrollSpeed,
				Ee = r.capture,
				ye = r.allowClicks,
				ht = r.lockAxis,
				et = r.onLockAxis;
			(this.target = l = un(l) || _i),
				(this.vars = r),
				h && (h = Nt.utils.toArray(h)),
				(i = i || 1e-9),
				(s = s || 0),
				(g = g || 1),
				(Oe = Oe || 1),
				(o = o || 'wheel,touch,pointer'),
				(a = a !== !1),
				u || (u = parseFloat(En.getComputedStyle(so).lineHeight) || 22);
			var Gn,
				wt,
				rn,
				me,
				Me,
				St,
				sn,
				R = this,
				on = 0,
				S = 0,
				P = r.passive || !c,
				O = Ri(l, qt),
				V = Ri(l, ct),
				F = O(),
				L = V(),
				B =
					~o.indexOf('touch') &&
					!~o.indexOf('pointer') &&
					rr[0] === 'pointerdown',
				fe = ml(l),
				ie = l.ownerDocument || mi,
				be = [0, 0, 0],
				st = [0, 0, 0],
				Kn = 0,
				Mr = function () {
					return (Kn = pl());
				},
				je = function (J, ve) {
					return (
						((R.event = J) && h && ~h.indexOf(J.target)) ||
						(ve && B && J.pointerType !== 'touch') ||
						(Q && Q(J, ve))
					);
				},
				Ts = function () {
					R._vx.reset(), R._vy.reset(), wt.pause(), d && d(R);
				},
				qn = function () {
					var J = (R.deltaX = Hm(be)),
						ve = (R.deltaY = Hm(st)),
						U = Math.abs(J) >= i,
						re = Math.abs(ve) >= i;
					H && (U || re) && H(R, J, ve, be, st),
						U &&
							(k && R.deltaX > 0 && k(R),
							C && R.deltaX < 0 && C(R),
							j && j(R),
							D && R.deltaX < 0 != on < 0 && D(R),
							(on = R.deltaX),
							(be[0] = be[1] = be[2] = 0)),
						re &&
							(N && R.deltaY > 0 && N(R),
							E && R.deltaY < 0 && E(R),
							M && M(R),
							I && R.deltaY < 0 != S < 0 && I(R),
							(S = R.deltaY),
							(st[0] = st[1] = st[2] = 0)),
						(me || rn) && (G && G(R), rn && (p(R), (rn = !1)), (me = !1)),
						St && !(St = !1) && et && et(R),
						Me && (q(R), (Me = !1)),
						(Gn = 0);
				},
				Jr = function (J, ve, U) {
					(be[U] += J),
						(st[U] += ve),
						R._vx.update(J),
						R._vy.update(ve),
						a ? Gn || (Gn = requestAnimationFrame(qn)) : qn();
				},
				jr = function (J, ve) {
					ht &&
						!sn &&
						((R.axis = sn = Math.abs(J) > Math.abs(ve) ? 'x' : 'y'), (St = !0)),
						sn !== 'y' && ((be[2] += J), R._vx.update(J, !0)),
						sn !== 'x' && ((st[2] += ve), R._vy.update(ve, !0)),
						a ? Gn || (Gn = requestAnimationFrame(qn)) : qn();
				},
				ei = function (J) {
					if (!je(J, 1)) {
						J = Uo(J, c);
						var ve = J.clientX,
							U = J.clientY,
							re = ve - R.x,
							Z = U - R.y,
							ee = R.isDragging;
						(R.x = ve),
							(R.y = U),
							(ee ||
								Math.abs(R.startX - ve) >= s ||
								Math.abs(R.startY - U) >= s) &&
								(p && (rn = !0),
								ee || (R.isDragging = !0),
								jr(re, Z),
								ee || (T && T(R)));
					}
				},
				Fi = (R.onPress = function (ne) {
					je(ne, 1) ||
						(ne && ne.button) ||
						((R.axis = sn = null),
						wt.pause(),
						(R.isPressed = !0),
						(ne = Uo(ne)),
						(on = S = 0),
						(R.startX = R.x = ne.clientX),
						(R.startY = R.y = ne.clientY),
						R._vx.reset(),
						R._vy.reset(),
						bt(A ? l : ie, rr[1], ei, P, !0),
						(R.deltaX = R.deltaY = 0),
						y && y(R));
				}),
				le = (R.onRelease = function (ne) {
					if (!je(ne, 1)) {
						Wt(A ? l : ie, rr[1], ei, !0);
						var J = !isNaN(R.y - R.startY),
							ve = R.isDragging,
							U =
								ve &&
								(Math.abs(R.x - R.startX) > 3 || Math.abs(R.y - R.startY) > 3),
							re = Uo(ne);
						!U &&
							J &&
							(R._vx.reset(),
							R._vy.reset(),
							c &&
								ye &&
								Nt.delayedCall(0.08, function () {
									if (pl() - Kn > 300 && !ne.defaultPrevented) {
										if (ne.target.click) ne.target.click();
										else if (ie.createEvent) {
											var Z = ie.createEvent('MouseEvents');
											Z.initMouseEvent(
												'click',
												!0,
												!0,
												En,
												1,
												re.screenX,
												re.screenY,
												re.clientX,
												re.clientY,
												!1,
												!1,
												!1,
												!1,
												0,
												null,
											),
												ne.target.dispatchEvent(Z);
										}
									}
								})),
							(R.isDragging = R.isGesturing = R.isPressed = !1),
							d && ve && !A && wt.restart(!0),
							_ && ve && _(R),
							x && x(R, U);
					}
				}),
				Ii = function (J) {
					return (
						J.touches &&
						J.touches.length > 1 &&
						(R.isGesturing = !0) &&
						$(J, R.isDragging)
					);
				},
				Zn = function () {
					return (R.isGesturing = !1) || w(R);
				},
				Jn = function (J) {
					if (!je(J)) {
						var ve = O(),
							U = V();
						Jr((ve - F) * Oe, (U - L) * Oe, 1),
							(F = ve),
							(L = U),
							d && wt.restart(!0);
					}
				},
				er = function (J) {
					if (!je(J)) {
						(J = Uo(J, c)), q && (Me = !0);
						var ve =
							(J.deltaMode === 1 ? u : J.deltaMode === 2 ? En.innerHeight : 1) *
							g;
						Jr(J.deltaX * ve, J.deltaY * ve, 0), d && !A && wt.restart(!0);
					}
				},
				Vi = function (J) {
					if (!je(J)) {
						var ve = J.clientX,
							U = J.clientY,
							re = ve - R.x,
							Z = U - R.y;
						(R.x = ve),
							(R.y = U),
							(me = !0),
							d && wt.restart(!0),
							(re || Z) && jr(re, Z);
					}
				},
				Es = function (J) {
					(R.event = J), Y(R);
				},
				Rr = function (J) {
					(R.event = J), K(R);
				},
				Co = function (J) {
					return je(J) || (Uo(J, c) && ge(R));
				};
			(wt = R._dc = Nt.delayedCall(f || 0.25, Ts).pause()),
				(R.deltaX = R.deltaY = 0),
				(R._vx = Sd(0, 50, !0)),
				(R._vy = Sd(0, 50, !0)),
				(R.scrollX = O),
				(R.scrollY = V),
				(R.isDragging = R.isGesturing = R.isPressed = !1),
				Yv(this),
				(R.enable = function (ne) {
					return (
						R.isEnabled ||
							(bt(fe ? ie : l, 'scroll', wd),
							o.indexOf('scroll') >= 0 && bt(fe ? ie : l, 'scroll', Jn, P, Ee),
							o.indexOf('wheel') >= 0 && bt(l, 'wheel', er, P, Ee),
							((o.indexOf('touch') >= 0 && bv) || o.indexOf('pointer') >= 0) &&
								(bt(l, rr[0], Fi, P, Ee),
								bt(ie, rr[2], le),
								bt(ie, rr[3], le),
								ye && bt(l, 'click', Mr, !0, !0),
								ge && bt(l, 'click', Co),
								$ && bt(ie, 'gesturestart', Ii),
								w && bt(ie, 'gestureend', Zn),
								Y && bt(l, Xi + 'enter', Es),
								K && bt(l, Xi + 'leave', Rr),
								G && bt(l, Xi + 'move', Vi)),
							(R.isEnabled = !0),
							ne && ne.type && Fi(ne),
							oe && oe(R)),
						R
					);
				}),
				(R.disable = function () {
					R.isEnabled &&
						(Gs.filter(function (ne) {
							return ne !== R && ml(ne.target);
						}).length || Wt(fe ? ie : l, 'scroll', wd),
						R.isPressed &&
							(R._vx.reset(), R._vy.reset(), Wt(A ? l : ie, rr[1], ei, !0)),
						Wt(fe ? ie : l, 'scroll', Jn, Ee),
						Wt(l, 'wheel', er, Ee),
						Wt(l, rr[0], Fi, Ee),
						Wt(ie, rr[2], le),
						Wt(ie, rr[3], le),
						Wt(l, 'click', Mr, !0),
						Wt(l, 'click', Co),
						Wt(ie, 'gesturestart', Ii),
						Wt(ie, 'gestureend', Zn),
						Wt(l, Xi + 'enter', Es),
						Wt(l, Xi + 'leave', Rr),
						Wt(l, Xi + 'move', Vi),
						(R.isEnabled = R.isPressed = R.isDragging = !1),
						it && it(R));
				}),
				(R.kill = R.revert =
					function () {
						R.disable();
						var ne = Gs.indexOf(R);
						ne >= 0 && Gs.splice(ne, 1), Wr === R && (Wr = 0);
					}),
				Gs.push(R),
				A && ml(l) && (Wr = R),
				R.enable(m);
		}),
		AT(t, [
			{
				key: 'velocityX',
				get: function () {
					return this._vx.getVelocity();
				},
			},
			{
				key: 'velocityY',
				get: function () {
					return this._vy.getVelocity();
				},
			},
		]),
		t
	);
})();
Je.version = '3.12.5';
Je.create = function (t) {
	return new Je(t);
};
Je.register = Kv;
Je.getAll = function () {
	return Gs.slice();
};
Je.getById = function (t) {
	return Gs.filter(function (e) {
		return e.vars.id === t;
	})[0];
};
Qv() && Nt.registerPlugin(Je);
/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var b,
	Rs,
	he,
	Ie,
	lr,
	Pe,
	qv,
	ba,
	Yl,
	_l,
	Go,
	Nu,
	zt,
	pc,
	kd,
	Qt,
	Ym,
	Qm,
	Ds,
	Zv,
	nf,
	Jv,
	Ht,
	Td,
	e1,
	t1,
	ii,
	Ed,
	Qh,
	oo,
	Xh,
	Ha,
	Cd,
	rf,
	Ou = 1,
	Ft = Date.now,
	sf = Ft(),
	Hn = 0,
	Ko = 0,
	Xm = function (e, n, r) {
		var i = Sn(e) && (e.substr(0, 6) === 'clamp(' || e.indexOf('max') > -1);
		return (r['_' + n + 'Clamp'] = i), i ? e.substr(6, e.length - 7) : e;
	},
	Gm = function (e, n) {
		return n && (!Sn(e) || e.substr(0, 6) !== 'clamp(')
			? 'clamp(' + e + ')'
			: e;
	},
	zT = function t() {
		return Ko && requestAnimationFrame(t);
	},
	Km = function () {
		return (pc = 1);
	},
	qm = function () {
		return (pc = 0);
	},
	yr = function (e) {
		return e;
	},
	qo = function (e) {
		return Math.round(e * 1e5) / 1e5 || 0;
	},
	n1 = function () {
		return typeof window < 'u';
	},
	r1 = function () {
		return b || (n1() && (b = window.gsap) && b.registerPlugin && b);
	},
	vs = function (e) {
		return !!~qv.indexOf(e);
	},
	i1 = function (e) {
		return (
			(e === 'Height' ? Xh : he['inner' + e]) ||
			lr['client' + e] ||
			Pe['client' + e]
		);
	},
	s1 = function (e) {
		return (
			Pi(e, 'getBoundingClientRect') ||
			(vs(e)
				? function () {
						return (sa.width = he.innerWidth), (sa.height = Xh), sa;
					}
				: function () {
						return $r(e);
					})
		);
	},
	FT = function (e, n, r) {
		var i = r.d,
			s = r.d2,
			o = r.a;
		return (o = Pi(e, 'getBoundingClientRect'))
			? function () {
					return o()[i];
				}
			: function () {
					return (n ? i1(s) : e['client' + s]) || 0;
				};
	},
	IT = function (e, n) {
		return !n || ~Nr.indexOf(e)
			? s1(e)
			: function () {
					return sa;
				};
	},
	Tr = function (e, n) {
		var r = n.s,
			i = n.d2,
			s = n.d,
			o = n.a;
		return Math.max(
			0,
			(r = 'scroll' + i) && (o = Pi(e, r))
				? o() - s1(e)()[s]
				: vs(e)
					? (lr[r] || Pe[r]) - i1(i)
					: e[r] - e['offset' + i],
		);
	},
	Mu = function (e, n) {
		for (var r = 0; r < Ds.length; r += 3)
			(!n || ~n.indexOf(Ds[r + 1])) && e(Ds[r], Ds[r + 1], Ds[r + 2]);
	},
	Sn = function (e) {
		return typeof e == 'string';
	},
	Zt = function (e) {
		return typeof e == 'function';
	},
	Zo = function (e) {
		return typeof e == 'number';
	},
	Gi = function (e) {
		return typeof e == 'object';
	},
	Bo = function (e, n, r) {
		return e && e.progress(n ? 0 : 1) && r && e.pause();
	},
	of = function (e, n) {
		if (e.enabled) {
			var r = e._ctx
				? e._ctx.add(function () {
						return n(e);
					})
				: n(e);
			r && r.totalTime && (e.callbackAnimation = r);
		}
	},
	Ms = Math.abs,
	o1 = 'left',
	l1 = 'top',
	Gh = 'right',
	Kh = 'bottom',
	us = 'width',
	as = 'height',
	gl = 'Right',
	vl = 'Left',
	yl = 'Top',
	xl = 'Bottom',
	tt = 'padding',
	Vn = 'margin',
	So = 'Width',
	qh = 'Height',
	lt = 'px',
	$n = function (e) {
		return he.getComputedStyle(e);
	},
	VT = function (e) {
		var n = $n(e).position;
		e.style.position = n === 'absolute' || n === 'fixed' ? n : 'relative';
	},
	Zm = function (e, n) {
		for (var r in n) r in e || (e[r] = n[r]);
		return e;
	},
	$r = function (e, n) {
		var r =
				n &&
				$n(e)[kd] !== 'matrix(1, 0, 0, 1, 0, 0)' &&
				b
					.to(e, {
						x: 0,
						y: 0,
						xPercent: 0,
						yPercent: 0,
						rotation: 0,
						rotationX: 0,
						rotationY: 0,
						scale: 1,
						skewX: 0,
						skewY: 0,
					})
					.progress(1),
			i = e.getBoundingClientRect();
		return r && r.progress(0).kill(), i;
	},
	Ya = function (e, n) {
		var r = n.d2;
		return e['offset' + r] || e['client' + r] || 0;
	},
	u1 = function (e) {
		var n = [],
			r = e.labels,
			i = e.duration(),
			s;
		for (s in r) n.push(r[s] / i);
		return n;
	},
	$T = function (e) {
		return function (n) {
			return b.utils.snap(u1(e), n);
		};
	},
	Zh = function (e) {
		var n = b.utils.snap(e),
			r =
				Array.isArray(e) &&
				e.slice(0).sort(function (i, s) {
					return i - s;
				});
		return r
			? function (i, s, o) {
					o === void 0 && (o = 0.001);
					var l;
					if (!s) return n(i);
					if (s > 0) {
						for (i -= o, l = 0; l < r.length; l++) if (r[l] >= i) return r[l];
						return r[l - 1];
					} else for (l = r.length, i += o; l--; ) if (r[l] <= i) return r[l];
					return r[0];
				}
			: function (i, s, o) {
					o === void 0 && (o = 0.001);
					var l = n(i);
					return !s || Math.abs(l - i) < o || l - i < 0 == s < 0
						? l
						: n(s < 0 ? i - e : i + e);
				};
	},
	UT = function (e) {
		return function (n, r) {
			return Zh(u1(e))(n, r.direction);
		};
	},
	ju = function (e, n, r, i) {
		return r.split(',').forEach(function (s) {
			return e(n, s, i);
		});
	},
	_t = function (e, n, r, i, s) {
		return e.addEventListener(n, r, { passive: !i, capture: !!s });
	},
	mt = function (e, n, r, i) {
		return e.removeEventListener(n, r, !!i);
	},
	Ru = function (e, n, r) {
		(r = r && r.wheelHandler), r && (e(n, 'wheel', r), e(n, 'touchmove', r));
	},
	Jm = {
		startColor: 'green',
		endColor: 'red',
		indent: 0,
		fontSize: '16px',
		fontWeight: 'normal',
	},
	Du = { toggleActions: 'play', anticipatePin: 0 },
	Qa = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
	ta = function (e, n) {
		if (Sn(e)) {
			var r = e.indexOf('='),
				i = ~r ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
			~r && (e.indexOf('%') > r && (i *= n / 100), (e = e.substr(0, r - 1))),
				(e =
					i +
					(e in Qa
						? Qa[e] * n
						: ~e.indexOf('%')
							? (parseFloat(e) * n) / 100
							: parseFloat(e) || 0));
		}
		return e;
	},
	Au = function (e, n, r, i, s, o, l, u) {
		var a = s.startColor,
			c = s.endColor,
			d = s.fontSize,
			f = s.indent,
			h = s.fontWeight,
			g = Ie.createElement('div'),
			m = vs(r) || Pi(r, 'pinType') === 'fixed',
			T = e.indexOf('scroller') !== -1,
			_ = m ? Pe : r,
			p = e.indexOf('start') !== -1,
			y = p ? a : c,
			x =
				'border-color:' +
				y +
				';font-size:' +
				d +
				';color:' +
				y +
				';font-weight:' +
				h +
				';pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;';
		return (
			(x += 'position:' + ((T || u) && m ? 'fixed;' : 'absolute;')),
			(T || u || !m) &&
				(x += (i === ct ? Gh : Kh) + ':' + (o + parseFloat(f)) + 'px;'),
			l &&
				(x +=
					'box-sizing:border-box;text-align:left;width:' +
					l.offsetWidth +
					'px;'),
			(g._isStart = p),
			g.setAttribute('class', 'gsap-marker-' + e + (n ? ' marker-' + n : '')),
			(g.style.cssText = x),
			(g.innerText = n || n === 0 ? e + '-' + n : e),
			_.children[0] ? _.insertBefore(g, _.children[0]) : _.appendChild(g),
			(g._offset = g['offset' + i.op.d2]),
			na(g, 0, i, p),
			g
		);
	},
	na = function (e, n, r, i) {
		var s = { display: 'block' },
			o = r[i ? 'os2' : 'p2'],
			l = r[i ? 'p2' : 'os2'];
		(e._isFlipped = i),
			(s[r.a + 'Percent'] = i ? -100 : 0),
			(s[r.a] = i ? '1px' : 0),
			(s['border' + o + So] = 1),
			(s['border' + l + So] = 0),
			(s[r.p] = n + 'px'),
			b.set(e, s);
	},
	se = [],
	Pd = {},
	Ql,
	e0 = function () {
		return Ft() - Hn > 34 && (Ql || (Ql = requestAnimationFrame(Hr)));
	},
	js = function () {
		(!Ht || !Ht.isPressed || Ht.startX > Pe.clientWidth) &&
			(ue.cache++,
			Ht ? Ql || (Ql = requestAnimationFrame(Hr)) : Hr(),
			Hn || xs('scrollStart'),
			(Hn = Ft()));
	},
	lf = function () {
		(t1 = he.innerWidth), (e1 = he.innerHeight);
	},
	Jo = function () {
		ue.cache++,
			!zt &&
				!Jv &&
				!Ie.fullscreenElement &&
				!Ie.webkitFullscreenElement &&
				(!Td ||
					t1 !== he.innerWidth ||
					Math.abs(he.innerHeight - e1) > he.innerHeight * 0.25) &&
				ba.restart(!0);
	},
	ys = {},
	BT = [],
	a1 = function t() {
		return mt(ae, 'scrollEnd', t) || ts(!0);
	},
	xs = function (e) {
		return (
			(ys[e] &&
				ys[e].map(function (n) {
					return n();
				})) ||
			BT
		);
	},
	xn = [],
	c1 = function (e) {
		for (var n = 0; n < xn.length; n += 5)
			(!e || (xn[n + 4] && xn[n + 4].query === e)) &&
				((xn[n].style.cssText = xn[n + 1]),
				xn[n].getBBox && xn[n].setAttribute('transform', xn[n + 2] || ''),
				(xn[n + 3].uncache = 1));
	},
	Jh = function (e, n) {
		var r;
		for (Qt = 0; Qt < se.length; Qt++)
			(r = se[Qt]),
				r && (!n || r._ctx === n) && (e ? r.kill(1) : r.revert(!0, !0));
		(Ha = !0), n && c1(n), n || xs('revert');
	},
	f1 = function (e, n) {
		ue.cache++,
			(n || !Xt) &&
				ue.forEach(function (r) {
					return Zt(r) && r.cacheID++ && (r.rec = 0);
				}),
			Sn(e) && (he.history.scrollRestoration = Qh = e);
	},
	Xt,
	cs = 0,
	t0,
	WT = function () {
		if (t0 !== cs) {
			var e = (t0 = cs);
			requestAnimationFrame(function () {
				return e === cs && ts(!0);
			});
		}
	},
	d1 = function () {
		Pe.appendChild(oo),
			(Xh = (!Ht && oo.offsetHeight) || he.innerHeight),
			Pe.removeChild(oo);
	},
	n0 = function (e) {
		return Yl(
			'.gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end',
		).forEach(function (n) {
			return (n.style.display = e ? 'none' : 'block');
		});
	},
	ts = function (e, n) {
		if (Hn && !e && !Ha) {
			_t(ae, 'scrollEnd', a1);
			return;
		}
		d1(),
			(Xt = ae.isRefreshing = !0),
			ue.forEach(function (i) {
				return Zt(i) && ++i.cacheID && (i.rec = i());
			});
		var r = xs('refreshInit');
		Zv && ae.sort(),
			n || Jh(),
			ue.forEach(function (i) {
				Zt(i) && (i.smooth && (i.target.style.scrollBehavior = 'auto'), i(0));
			}),
			se.slice(0).forEach(function (i) {
				return i.refresh();
			}),
			(Ha = !1),
			se.forEach(function (i) {
				if (i._subPinOffset && i.pin) {
					var s = i.vars.horizontal ? 'offsetWidth' : 'offsetHeight',
						o = i.pin[s];
					i.revert(!0, 1), i.adjustPinSpacing(i.pin[s] - o), i.refresh();
				}
			}),
			(Cd = 1),
			n0(!0),
			se.forEach(function (i) {
				var s = Tr(i.scroller, i._dir),
					o = i.vars.end === 'max' || (i._endClamp && i.end > s),
					l = i._startClamp && i.start >= s;
				(o || l) &&
					i.setPositions(
						l ? s - 1 : i.start,
						o ? Math.max(l ? s : i.start + 1, s) : i.end,
						!0,
					);
			}),
			n0(!1),
			(Cd = 0),
			r.forEach(function (i) {
				return i && i.render && i.render(-1);
			}),
			ue.forEach(function (i) {
				Zt(i) &&
					(i.smooth &&
						requestAnimationFrame(function () {
							return (i.target.style.scrollBehavior = 'smooth');
						}),
					i.rec && i(i.rec));
			}),
			f1(Qh, 1),
			ba.pause(),
			cs++,
			(Xt = 2),
			Hr(2),
			se.forEach(function (i) {
				return Zt(i.vars.onRefresh) && i.vars.onRefresh(i);
			}),
			(Xt = ae.isRefreshing = !1),
			xs('refresh');
	},
	Nd = 0,
	ra = 1,
	wl,
	Hr = function (e) {
		if (e === 2 || (!Xt && !Ha)) {
			(ae.isUpdating = !0), wl && wl.update(0);
			var n = se.length,
				r = Ft(),
				i = r - sf >= 50,
				s = n && se[0].scroll();
			if (
				((ra = Nd > s ? -1 : 1),
				Xt || (Nd = s),
				i &&
					(Hn && !pc && r - Hn > 200 && ((Hn = 0), xs('scrollEnd')),
					(Go = sf),
					(sf = r)),
				ra < 0)
			) {
				for (Qt = n; Qt-- > 0; ) se[Qt] && se[Qt].update(0, i);
				ra = 1;
			} else for (Qt = 0; Qt < n; Qt++) se[Qt] && se[Qt].update(0, i);
			ae.isUpdating = !1;
		}
		Ql = 0;
	},
	Od = [
		o1,
		l1,
		Kh,
		Gh,
		Vn + xl,
		Vn + gl,
		Vn + yl,
		Vn + vl,
		'display',
		'flexShrink',
		'float',
		'zIndex',
		'gridColumnStart',
		'gridColumnEnd',
		'gridRowStart',
		'gridRowEnd',
		'gridArea',
		'justifySelf',
		'alignSelf',
		'placeSelf',
		'order',
	],
	ia = Od.concat([
		us,
		as,
		'boxSizing',
		'max' + So,
		'max' + qh,
		'position',
		Vn,
		tt,
		tt + yl,
		tt + gl,
		tt + xl,
		tt + vl,
	]),
	bT = function (e, n, r) {
		lo(r);
		var i = e._gsap;
		if (i.spacerIsNative) lo(i.spacerState);
		else if (e._gsap.swappedIn) {
			var s = n.parentNode;
			s && (s.insertBefore(e, n), s.removeChild(n));
		}
		e._gsap.swappedIn = !1;
	},
	uf = function (e, n, r, i) {
		if (!e._gsap.swappedIn) {
			for (var s = Od.length, o = n.style, l = e.style, u; s--; )
				(u = Od[s]), (o[u] = r[u]);
			(o.position = r.position === 'absolute' ? 'absolute' : 'relative'),
				r.display === 'inline' && (o.display = 'inline-block'),
				(l[Kh] = l[Gh] = 'auto'),
				(o.flexBasis = r.flexBasis || 'auto'),
				(o.overflow = 'visible'),
				(o.boxSizing = 'border-box'),
				(o[us] = Ya(e, qt) + lt),
				(o[as] = Ya(e, ct) + lt),
				(o[tt] = l[Vn] = l[l1] = l[o1] = '0'),
				lo(i),
				(l[us] = l['max' + So] = r[us]),
				(l[as] = l['max' + qh] = r[as]),
				(l[tt] = r[tt]),
				e.parentNode !== n &&
					(e.parentNode.insertBefore(n, e), n.appendChild(e)),
				(e._gsap.swappedIn = !0);
		}
	},
	HT = /([A-Z])/g,
	lo = function (e) {
		if (e) {
			var n = e.t.style,
				r = e.length,
				i = 0,
				s,
				o;
			for ((e.t._gsap || b.core.getCache(e.t)).uncache = 1; i < r; i += 2)
				(o = e[i + 1]),
					(s = e[i]),
					o
						? (n[s] = o)
						: n[s] && n.removeProperty(s.replace(HT, '-$1').toLowerCase());
		}
	},
	Lu = function (e) {
		for (var n = ia.length, r = e.style, i = [], s = 0; s < n; s++)
			i.push(ia[s], r[ia[s]]);
		return (i.t = e), i;
	},
	YT = function (e, n, r) {
		for (var i = [], s = e.length, o = r ? 8 : 0, l; o < s; o += 2)
			(l = e[o]), i.push(l, l in n ? n[l] : e[o + 1]);
		return (i.t = e.t), i;
	},
	sa = { left: 0, top: 0 },
	r0 = function (e, n, r, i, s, o, l, u, a, c, d, f, h, g) {
		Zt(e) && (e = e(u)),
			Sn(e) &&
				e.substr(0, 3) === 'max' &&
				(e = f + (e.charAt(4) === '=' ? ta('0' + e.substr(3), r) : 0));
		var m = h ? h.time() : 0,
			T,
			_,
			p;
		if ((h && h.seek(0), isNaN(e) || (e = +e), Zo(e)))
			h &&
				(e = b.utils.mapRange(
					h.scrollTrigger.start,
					h.scrollTrigger.end,
					0,
					f,
					e,
				)),
				l && na(l, r, i, !0);
		else {
			Zt(n) && (n = n(u));
			var y = (e || '0').split(' '),
				x,
				k,
				C,
				E;
			(p = un(n, u) || Pe),
				(x = $r(p) || {}),
				(!x || (!x.left && !x.top)) &&
					$n(p).display === 'none' &&
					((E = p.style.display),
					(p.style.display = 'block'),
					(x = $r(p)),
					E ? (p.style.display = E) : p.style.removeProperty('display')),
				(k = ta(y[0], x[i.d])),
				(C = ta(y[1] || '0', r)),
				(e = x[i.p] - a[i.p] - c + k + s - C),
				l && na(l, C, i, r - C < 20 || (l._isStart && C > 20)),
				(r -= r - C);
		}
		if ((g && ((u[g] = e || -0.001), e < 0 && (e = 0)), o)) {
			var N = e + r,
				j = o._isStart;
			(T = 'scroll' + i.d2),
				na(
					o,
					N,
					i,
					(j && N > 20) ||
						(!j && (d ? Math.max(Pe[T], lr[T]) : o.parentNode[T]) <= N + 1),
				),
				d &&
					((a = $r(l)),
					d && (o.style[i.op.p] = a[i.op.p] - i.op.m - o._offset + lt));
		}
		return (
			h &&
				p &&
				((T = $r(p)),
				h.seek(f),
				(_ = $r(p)),
				(h._caScrollDist = T[i.p] - _[i.p]),
				(e = (e / h._caScrollDist) * f)),
			h && h.seek(m),
			h ? e : Math.round(e)
		);
	},
	QT = /(webkit|moz|length|cssText|inset)/i,
	i0 = function (e, n, r, i) {
		if (e.parentNode !== n) {
			var s = e.style,
				o,
				l;
			if (n === Pe) {
				(e._stOrig = s.cssText), (l = $n(e));
				for (o in l)
					!+o &&
						!QT.test(o) &&
						l[o] &&
						typeof s[o] == 'string' &&
						o !== '0' &&
						(s[o] = l[o]);
				(s.top = r), (s.left = i);
			} else s.cssText = e._stOrig;
			(b.core.getCache(e).uncache = 1), n.appendChild(e);
		}
	},
	h1 = function (e, n, r) {
		var i = n,
			s = i;
		return function (o) {
			var l = Math.round(e());
			return (
				l !== i &&
					l !== s &&
					Math.abs(l - i) > 3 &&
					Math.abs(l - s) > 3 &&
					((o = l), r && r()),
				(s = i),
				(i = o),
				o
			);
		};
	},
	zu = function (e, n, r) {
		var i = {};
		(i[n.p] = '+=' + r), b.set(e, i);
	},
	s0 = function (e, n) {
		var r = Ri(e, n),
			i = '_scroll' + n.p2,
			s = function o(l, u, a, c, d) {
				var f = o.tween,
					h = u.onComplete,
					g = {};
				a = a || r();
				var m = h1(r, a, function () {
					f.kill(), (o.tween = 0);
				});
				return (
					(d = (c && d) || 0),
					(c = c || l - a),
					f && f.kill(),
					(u[i] = l),
					(u.inherit = !1),
					(u.modifiers = g),
					(g[i] = function () {
						return m(a + c * f.ratio + d * f.ratio * f.ratio);
					}),
					(u.onUpdate = function () {
						ue.cache++, o.tween && Hr();
					}),
					(u.onComplete = function () {
						(o.tween = 0), h && h.call(f);
					}),
					(f = o.tween = b.to(e, u)),
					f
				);
			};
		return (
			(e[i] = r),
			(r.wheelHandler = function () {
				return s.tween && s.tween.kill() && (s.tween = 0);
			}),
			_t(e, 'wheel', r.wheelHandler),
			ae.isTouch && _t(e, 'touchmove', r.wheelHandler),
			s
		);
	},
	ae = (function () {
		function t(n, r) {
			Rs ||
				t.register(b) ||
				console.warn('Please gsap.registerPlugin(ScrollTrigger)'),
				Ed(this),
				this.init(n, r);
		}
		var e = t.prototype;
		return (
			(e.init = function (r, i) {
				if (
					((this.progress = this.start = 0),
					this.vars && this.kill(!0, !0),
					!Ko)
				) {
					this.update = this.refresh = this.kill = yr;
					return;
				}
				r = Zm(Sn(r) || Zo(r) || r.nodeType ? { trigger: r } : r, Du);
				var s = r,
					o = s.onUpdate,
					l = s.toggleClass,
					u = s.id,
					a = s.onToggle,
					c = s.onRefresh,
					d = s.scrub,
					f = s.trigger,
					h = s.pin,
					g = s.pinSpacing,
					m = s.invalidateOnRefresh,
					T = s.anticipatePin,
					_ = s.onScrubComplete,
					p = s.onSnapComplete,
					y = s.once,
					x = s.snap,
					k = s.pinReparent,
					C = s.pinSpacer,
					E = s.containerAnimation,
					N = s.fastScrollEnd,
					j = s.preventOverlaps,
					M =
						r.horizontal || (r.containerAnimation && r.horizontal !== !1)
							? qt
							: ct,
					H = !d && d !== 0,
					D = un(r.scroller || he),
					I = b.core.getCache(D),
					Y = vs(D),
					K =
						('pinType' in r
							? r.pinType
							: Pi(D, 'pinType') || (Y && 'fixed')) === 'fixed',
					G = [r.onEnter, r.onLeave, r.onEnterBack, r.onLeaveBack],
					Q = H && r.toggleActions.split(' '),
					A = 'markers' in r ? r.markers : Du.markers,
					$ = Y ? 0 : parseFloat($n(D)['border' + M.p2 + So]) || 0,
					w = this,
					q =
						r.onRefreshInit &&
						function () {
							return r.onRefreshInit(w);
						},
					oe = FT(D, Y, M),
					it = IT(D, Y),
					ge = 0,
					Oe = 0,
					Ee = 0,
					ye = Ri(D, M),
					ht,
					et,
					Gn,
					wt,
					rn,
					me,
					Me,
					St,
					sn,
					R,
					on,
					S,
					P,
					O,
					V,
					F,
					L,
					B,
					fe,
					ie,
					be,
					st,
					Kn,
					Mr,
					je,
					Ts,
					qn,
					Jr,
					jr,
					ei,
					Fi,
					le,
					Ii,
					Zn,
					Jn,
					er,
					Vi,
					Es,
					Rr;
				if (
					((w._startClamp = w._endClamp = !1),
					(w._dir = M),
					(T *= 45),
					(w.scroller = D),
					(w.scroll = E ? E.time.bind(E) : ye),
					(wt = ye()),
					(w.vars = r),
					(i = i || r.animation),
					'refreshPriority' in r &&
						((Zv = 1), r.refreshPriority === -9999 && (wl = w)),
					(I.tweenScroll = I.tweenScroll || {
						top: s0(D, ct),
						left: s0(D, qt),
					}),
					(w.tweenTo = ht = I.tweenScroll[M.p]),
					(w.scrubDuration = function (U) {
						(Ii = Zo(U) && U),
							Ii
								? le
									? le.duration(U)
									: (le = b.to(i, {
											ease: 'expo',
											totalProgress: '+=0',
											inherit: !1,
											duration: Ii,
											paused: !0,
											onComplete: function () {
												return _ && _(w);
											},
										}))
								: (le && le.progress(1).kill(), (le = 0));
					}),
					i &&
						((i.vars.lazy = !1),
						(i._initted && !w.isReverted) ||
							(i.vars.immediateRender !== !1 &&
								r.immediateRender !== !1 &&
								i.duration() &&
								i.render(0, !0, !0)),
						(w.animation = i.pause()),
						(i.scrollTrigger = w),
						w.scrubDuration(d),
						(ei = 0),
						u || (u = i.vars.id)),
					x &&
						((!Gi(x) || x.push) && (x = { snapTo: x }),
						'scrollBehavior' in Pe.style &&
							b.set(Y ? [Pe, lr] : D, { scrollBehavior: 'auto' }),
						ue.forEach(function (U) {
							return (
								Zt(U) &&
								U.target === (Y ? Ie.scrollingElement || lr : D) &&
								(U.smooth = !1)
							);
						}),
						(Gn = Zt(x.snapTo)
							? x.snapTo
							: x.snapTo === 'labels'
								? $T(i)
								: x.snapTo === 'labelsDirectional'
									? UT(i)
									: x.directional !== !1
										? function (U, re) {
												return Zh(x.snapTo)(
													U,
													Ft() - Oe < 500 ? 0 : re.direction,
												);
											}
										: b.utils.snap(x.snapTo)),
						(Zn = x.duration || { min: 0.1, max: 2 }),
						(Zn = Gi(Zn) ? _l(Zn.min, Zn.max) : _l(Zn, Zn)),
						(Jn = b
							.delayedCall(x.delay || Ii / 2 || 0.1, function () {
								var U = ye(),
									re = Ft() - Oe < 500,
									Z = ht.tween;
								if (
									(re || Math.abs(w.getVelocity()) < 10) &&
									!Z &&
									!pc &&
									ge !== U
								) {
									var ee = (U - me) / O,
										pt = i && !H ? i.totalProgress() : ee,
										de = re ? 0 : ((pt - Fi) / (Ft() - Go)) * 1e3 || 0,
										Xe = b.utils.clamp(-ee, 1 - ee, (Ms(de / 2) * de) / 0.185),
										jt = ee + (x.inertia === !1 ? 0 : Xe),
										He,
										Re,
										we = x,
										tr = we.onStart,
										ze = we.onInterrupt,
										yn = we.onComplete;
									if (
										((He = Gn(jt, w)),
										Zo(He) || (He = jt),
										(Re = Math.round(me + He * O)),
										U <= Me && U >= me && Re !== U)
									) {
										if (Z && !Z._initted && Z.data <= Ms(Re - U)) return;
										x.inertia === !1 && (Xe = He - ee),
											ht(
												Re,
												{
													duration: Zn(
														Ms(
															(Math.max(Ms(jt - pt), Ms(He - pt)) * 0.185) /
																de /
																0.05 || 0,
														),
													),
													ease: x.ease || 'power3',
													data: Ms(Re - U),
													onInterrupt: function () {
														return Jn.restart(!0) && ze && ze(w);
													},
													onComplete: function () {
														w.update(),
															(ge = ye()),
															i &&
																(le
																	? le.resetTo(
																			'totalProgress',
																			He,
																			i._tTime / i._tDur,
																		)
																	: i.progress(He)),
															(ei = Fi =
																i && !H ? i.totalProgress() : w.progress),
															p && p(w),
															yn && yn(w);
													},
												},
												U,
												Xe * O,
												Re - U - Xe * O,
											),
											tr && tr(w, ht.tween);
									}
								} else w.isActive && ge !== U && Jn.restart(!0);
							})
							.pause())),
					u && (Pd[u] = w),
					(f = w.trigger = un(f || (h !== !0 && h))),
					(Rr = f && f._gsap && f._gsap.stRevert),
					Rr && (Rr = Rr(w)),
					(h = h === !0 ? f : un(h)),
					Sn(l) && (l = { targets: f, className: l }),
					h &&
						(g === !1 ||
							g === Vn ||
							(g =
								!g &&
								h.parentNode &&
								h.parentNode.style &&
								$n(h.parentNode).display === 'flex'
									? !1
									: tt),
						(w.pin = h),
						(et = b.core.getCache(h)),
						et.spacer
							? (V = et.pinState)
							: (C &&
									((C = un(C)),
									C && !C.nodeType && (C = C.current || C.nativeElement),
									(et.spacerIsNative = !!C),
									C && (et.spacerState = Lu(C))),
								(et.spacer = B = C || Ie.createElement('div')),
								B.classList.add('pin-spacer'),
								u && B.classList.add('pin-spacer-' + u),
								(et.pinState = V = Lu(h))),
						r.force3D !== !1 && b.set(h, { force3D: !0 }),
						(w.spacer = B = et.spacer),
						(jr = $n(h)),
						(Mr = jr[g + M.os2]),
						(ie = b.getProperty(h)),
						(be = b.quickSetter(h, M.a, lt)),
						uf(h, B, jr),
						(L = Lu(h))),
					A)
				) {
					(S = Gi(A) ? Zm(A, Jm) : Jm),
						(R = Au('scroller-start', u, D, M, S, 0)),
						(on = Au('scroller-end', u, D, M, S, 0, R)),
						(fe = R['offset' + M.op.d2]);
					var Co = un(Pi(D, 'content') || D);
					(St = this.markerStart = Au('start', u, Co, M, S, fe, 0, E)),
						(sn = this.markerEnd = Au('end', u, Co, M, S, fe, 0, E)),
						E && (Es = b.quickSetter([St, sn], M.a, lt)),
						!K &&
							!(Nr.length && Pi(D, 'fixedMarkers') === !0) &&
							(VT(Y ? Pe : D),
							b.set([R, on], { force3D: !0 }),
							(Ts = b.quickSetter(R, M.a, lt)),
							(Jr = b.quickSetter(on, M.a, lt)));
				}
				if (E) {
					var ne = E.vars.onUpdate,
						J = E.vars.onUpdateParams;
					E.eventCallback('onUpdate', function () {
						w.update(0, 0, 1), ne && ne.apply(E, J || []);
					});
				}
				if (
					((w.previous = function () {
						return se[se.indexOf(w) - 1];
					}),
					(w.next = function () {
						return se[se.indexOf(w) + 1];
					}),
					(w.revert = function (U, re) {
						if (!re) return w.kill(!0);
						var Z = U !== !1 || !w.enabled,
							ee = zt;
						Z !== w.isReverted &&
							(Z &&
								((er = Math.max(ye(), w.scroll.rec || 0)),
								(Ee = w.progress),
								(Vi = i && i.progress())),
							St &&
								[St, sn, R, on].forEach(function (pt) {
									return (pt.style.display = Z ? 'none' : 'block');
								}),
							Z && ((zt = w), w.update(Z)),
							h &&
								(!k || !w.isActive) &&
								(Z ? bT(h, B, V) : uf(h, B, $n(h), je)),
							Z || w.update(Z),
							(zt = ee),
							(w.isReverted = Z));
					}),
					(w.refresh = function (U, re, Z, ee) {
						if (!((zt || !w.enabled) && !re)) {
							if (h && U && Hn) {
								_t(t, 'scrollEnd', a1);
								return;
							}
							!Xt && q && q(w),
								(zt = w),
								ht.tween && !Z && (ht.tween.kill(), (ht.tween = 0)),
								le && le.pause(),
								m && i && i.revert({ kill: !1 }).invalidate(),
								w.isReverted || w.revert(!0, !0),
								(w._subPinOffset = !1);
							var pt = oe(),
								de = it(),
								Xe = E ? E.duration() : Tr(D, M),
								jt = O <= 0.01,
								He = 0,
								Re = ee || 0,
								we = Gi(Z) ? Z.end : r.end,
								tr = r.endTrigger || f,
								ze = Gi(Z)
									? Z.start
									: r.start || (r.start === 0 || !f ? 0 : h ? '0 0' : '0 100%'),
								yn = (w.pinnedContainer =
									r.pinnedContainer && un(r.pinnedContainer, w)),
								dr = (f && Math.max(0, se.indexOf(w))) || 0,
								kt = dr,
								Tt,
								Rt,
								$i,
								iu,
								Dt,
								ot,
								hr,
								mc,
								ep,
								Po,
								pr,
								No,
								su;
							for (
								A &&
								Gi(Z) &&
								((No = b.getProperty(R, M.p)), (su = b.getProperty(on, M.p)));
								kt--;

							)
								(ot = se[kt]),
									ot.end || ot.refresh(0, 1) || (zt = w),
									(hr = ot.pin),
									hr &&
										(hr === f || hr === h || hr === yn) &&
										!ot.isReverted &&
										(Po || (Po = []), Po.unshift(ot), ot.revert(!0, !0)),
									ot !== se[kt] && (dr--, kt--);
							for (
								Zt(ze) && (ze = ze(w)),
									ze = Xm(ze, 'start', w),
									me =
										r0(
											ze,
											f,
											pt,
											M,
											ye(),
											St,
											R,
											w,
											de,
											$,
											K,
											Xe,
											E,
											w._startClamp && '_startClamp',
										) || (h ? -0.001 : 0),
									Zt(we) && (we = we(w)),
									Sn(we) &&
										!we.indexOf('+=') &&
										(~we.indexOf(' ')
											? (we = (Sn(ze) ? ze.split(' ')[0] : '') + we)
											: ((He = ta(we.substr(2), pt)),
												(we = Sn(ze)
													? ze
													: (E
															? b.utils.mapRange(
																	0,
																	E.duration(),
																	E.scrollTrigger.start,
																	E.scrollTrigger.end,
																	me,
																)
															: me) + He),
												(tr = f))),
									we = Xm(we, 'end', w),
									Me =
										Math.max(
											me,
											r0(
												we || (tr ? '100% 0' : Xe),
												tr,
												pt,
												M,
												ye() + He,
												sn,
												on,
												w,
												de,
												$,
												K,
												Xe,
												E,
												w._endClamp && '_endClamp',
											),
										) || -0.001,
									He = 0,
									kt = dr;
								kt--;

							)
								(ot = se[kt]),
									(hr = ot.pin),
									hr &&
										ot.start - ot._pinPush <= me &&
										!E &&
										ot.end > 0 &&
										((Tt =
											ot.end -
											(w._startClamp ? Math.max(0, ot.start) : ot.start)),
										((hr === f && ot.start - ot._pinPush < me) || hr === yn) &&
											isNaN(ze) &&
											(He += Tt * (1 - ot.progress)),
										hr === h && (Re += Tt));
							if (
								((me += He),
								(Me += He),
								w._startClamp && (w._startClamp += He),
								w._endClamp &&
									!Xt &&
									((w._endClamp = Me || -0.001), (Me = Math.min(Me, Tr(D, M)))),
								(O = Me - me || ((me -= 0.01) && 0.001)),
								jt && (Ee = b.utils.clamp(0, 1, b.utils.normalize(me, Me, er))),
								(w._pinPush = Re),
								St &&
									He &&
									((Tt = {}),
									(Tt[M.a] = '+=' + He),
									yn && (Tt[M.p] = '-=' + ye()),
									b.set([St, sn], Tt)),
								h && !(Cd && w.end >= Tr(D, M)))
							)
								(Tt = $n(h)),
									(iu = M === ct),
									($i = ye()),
									(st = parseFloat(ie(M.a)) + Re),
									!Xe &&
										Me > 1 &&
										((pr = (Y ? Ie.scrollingElement || lr : D).style),
										(pr = {
											style: pr,
											value: pr['overflow' + M.a.toUpperCase()],
										}),
										Y &&
											$n(Pe)['overflow' + M.a.toUpperCase()] !== 'scroll' &&
											(pr.style['overflow' + M.a.toUpperCase()] = 'scroll')),
									uf(h, B, Tt),
									(L = Lu(h)),
									(Rt = $r(h, !0)),
									(mc = K && Ri(D, iu ? qt : ct)()),
									g
										? ((je = [g + M.os2, O + Re + lt]),
											(je.t = B),
											(kt = g === tt ? Ya(h, M) + O + Re : 0),
											kt &&
												(je.push(M.d, kt + lt),
												B.style.flexBasis !== 'auto' &&
													(B.style.flexBasis = kt + lt)),
											lo(je),
											yn &&
												se.forEach(function (Oo) {
													Oo.pin === yn &&
														Oo.vars.pinSpacing !== !1 &&
														(Oo._subPinOffset = !0);
												}),
											K && ye(er))
										: ((kt = Ya(h, M)),
											kt &&
												B.style.flexBasis !== 'auto' &&
												(B.style.flexBasis = kt + lt)),
									K &&
										((Dt = {
											top: Rt.top + (iu ? $i - me : mc) + lt,
											left: Rt.left + (iu ? mc : $i - me) + lt,
											boxSizing: 'border-box',
											position: 'fixed',
										}),
										(Dt[us] = Dt['max' + So] = Math.ceil(Rt.width) + lt),
										(Dt[as] = Dt['max' + qh] = Math.ceil(Rt.height) + lt),
										(Dt[Vn] =
											Dt[Vn + yl] =
											Dt[Vn + gl] =
											Dt[Vn + xl] =
											Dt[Vn + vl] =
												'0'),
										(Dt[tt] = Tt[tt]),
										(Dt[tt + yl] = Tt[tt + yl]),
										(Dt[tt + gl] = Tt[tt + gl]),
										(Dt[tt + xl] = Tt[tt + xl]),
										(Dt[tt + vl] = Tt[tt + vl]),
										(F = YT(V, Dt, k)),
										Xt && ye(0)),
									i
										? ((ep = i._initted),
											nf(1),
											i.render(i.duration(), !0, !0),
											(Kn = ie(M.a) - st + O + Re),
											(qn = Math.abs(O - Kn) > 1),
											K && qn && F.splice(F.length - 2, 2),
											i.render(0, !0, !0),
											ep || i.invalidate(!0),
											i.parent || i.totalTime(i.totalTime()),
											nf(0))
										: (Kn = O),
									pr &&
										(pr.value
											? (pr.style['overflow' + M.a.toUpperCase()] = pr.value)
											: pr.style.removeProperty('overflow-' + M.a));
							else if (f && ye() && !E)
								for (Rt = f.parentNode; Rt && Rt !== Pe; )
									Rt._pinOffset &&
										((me -= Rt._pinOffset), (Me -= Rt._pinOffset)),
										(Rt = Rt.parentNode);
							Po &&
								Po.forEach(function (Oo) {
									return Oo.revert(!1, !0);
								}),
								(w.start = me),
								(w.end = Me),
								(wt = rn = Xt ? er : ye()),
								!E && !Xt && (wt < er && ye(er), (w.scroll.rec = 0)),
								w.revert(!1, !0),
								(Oe = Ft()),
								Jn && ((ge = -1), Jn.restart(!0)),
								(zt = 0),
								i &&
									H &&
									(i._initted || Vi) &&
									i.progress() !== Vi &&
									i.progress(Vi || 0, !0).render(i.time(), !0, !0),
								(jt || Ee !== w.progress || E || m) &&
									(i &&
										!H &&
										i.totalProgress(
											E && me < -0.001 && !Ee
												? b.utils.normalize(me, Me, 0)
												: Ee,
											!0,
										),
									(w.progress = jt || (wt - me) / O === Ee ? 0 : Ee)),
								h && g && (B._pinOffset = Math.round(w.progress * Kn)),
								le && le.invalidate(),
								isNaN(No) ||
									((No -= b.getProperty(R, M.p)),
									(su -= b.getProperty(on, M.p)),
									zu(R, M, No),
									zu(St, M, No - (ee || 0)),
									zu(on, M, su),
									zu(sn, M, su - (ee || 0))),
								jt && !Xt && w.update(),
								c && !Xt && !P && ((P = !0), c(w), (P = !1));
						}
					}),
					(w.getVelocity = function () {
						return ((ye() - rn) / (Ft() - Go)) * 1e3 || 0;
					}),
					(w.endAnimation = function () {
						Bo(w.callbackAnimation),
							i &&
								(le
									? le.progress(1)
									: i.paused()
										? H || Bo(i, w.direction < 0, 1)
										: Bo(i, i.reversed()));
					}),
					(w.labelToScroll = function (U) {
						return (
							(i &&
								i.labels &&
								(me || w.refresh() || me) + (i.labels[U] / i.duration()) * O) ||
							0
						);
					}),
					(w.getTrailing = function (U) {
						var re = se.indexOf(w),
							Z =
								w.direction > 0 ? se.slice(0, re).reverse() : se.slice(re + 1);
						return (
							Sn(U)
								? Z.filter(function (ee) {
										return ee.vars.preventOverlaps === U;
									})
								: Z
						).filter(function (ee) {
							return w.direction > 0 ? ee.end <= me : ee.start >= Me;
						});
					}),
					(w.update = function (U, re, Z) {
						if (!(E && !Z && !U)) {
							var ee = Xt === !0 ? er : w.scroll(),
								pt = U ? 0 : (ee - me) / O,
								de = pt < 0 ? 0 : pt > 1 ? 1 : pt || 0,
								Xe = w.progress,
								jt,
								He,
								Re,
								we,
								tr,
								ze,
								yn,
								dr;
							if (
								(re &&
									((rn = wt),
									(wt = E ? ye() : ee),
									x && ((Fi = ei), (ei = i && !H ? i.totalProgress() : de))),
								T &&
									h &&
									!zt &&
									!Ou &&
									Hn &&
									(!de && me < ee + ((ee - rn) / (Ft() - Go)) * T
										? (de = 1e-4)
										: de === 1 &&
											Me > ee + ((ee - rn) / (Ft() - Go)) * T &&
											(de = 0.9999)),
								de !== Xe && w.enabled)
							) {
								if (
									((jt = w.isActive = !!de && de < 1),
									(He = !!Xe && Xe < 1),
									(ze = jt !== He),
									(tr = ze || !!de != !!Xe),
									(w.direction = de > Xe ? 1 : -1),
									(w.progress = de),
									tr &&
										!zt &&
										((Re = de && !Xe ? 0 : de === 1 ? 1 : Xe === 1 ? 2 : 3),
										H &&
											((we =
												(!ze && Q[Re + 1] !== 'none' && Q[Re + 1]) || Q[Re]),
											(dr =
												i &&
												(we === 'complete' || we === 'reset' || we in i)))),
									j &&
										(ze || dr) &&
										(dr || d || !i) &&
										(Zt(j)
											? j(w)
											: w.getTrailing(j).forEach(function ($i) {
													return $i.endAnimation();
												})),
									H ||
										(le && !zt && !Ou
											? (le._dp._time - le._start !== le._time &&
													le.render(le._dp._time - le._start),
												le.resetTo
													? le.resetTo('totalProgress', de, i._tTime / i._tDur)
													: ((le.vars.totalProgress = de),
														le.invalidate().restart()))
											: i && i.totalProgress(de, !!(zt && (Oe || U)))),
									h)
								) {
									if ((U && g && (B.style[g + M.os2] = Mr), !K))
										be(qo(st + Kn * de));
									else if (tr) {
										if (
											((yn =
												!U && de > Xe && Me + 1 > ee && ee + 1 >= Tr(D, M)),
											k)
										)
											if (!U && (jt || yn)) {
												var kt = $r(h, !0),
													Tt = ee - me;
												i0(
													h,
													Pe,
													kt.top + (M === ct ? Tt : 0) + lt,
													kt.left + (M === ct ? 0 : Tt) + lt,
												);
											} else i0(h, B);
										lo(jt || yn ? F : L),
											(qn && de < 1 && jt) ||
												be(st + (de === 1 && !yn ? Kn : 0));
									}
								}
								x && !ht.tween && !zt && !Ou && Jn.restart(!0),
									l &&
										(ze || (y && de && (de < 1 || !rf))) &&
										Yl(l.targets).forEach(function ($i) {
											return $i.classList[jt || y ? 'add' : 'remove'](
												l.className,
											);
										}),
									o && !H && !U && o(w),
									tr && !zt
										? (H &&
												(dr &&
													(we === 'complete'
														? i.pause().totalProgress(1)
														: we === 'reset'
															? i.restart(!0).pause()
															: we === 'restart'
																? i.restart(!0)
																: i[we]()),
												o && o(w)),
											(ze || !rf) &&
												(a && ze && of(w, a),
												G[Re] && of(w, G[Re]),
												y && (de === 1 ? w.kill(!1, 1) : (G[Re] = 0)),
												ze || ((Re = de === 1 ? 1 : 3), G[Re] && of(w, G[Re]))),
											N &&
												!jt &&
												Math.abs(w.getVelocity()) > (Zo(N) ? N : 2500) &&
												(Bo(w.callbackAnimation),
												le
													? le.progress(1)
													: Bo(i, we === 'reverse' ? 1 : !de, 1)))
										: H && o && !zt && o(w);
							}
							if (Jr) {
								var Rt = E ? (ee / E.duration()) * (E._caScrollDist || 0) : ee;
								Ts(Rt + (R._isFlipped ? 1 : 0)), Jr(Rt);
							}
							Es && Es((-ee / E.duration()) * (E._caScrollDist || 0));
						}
					}),
					(w.enable = function (U, re) {
						w.enabled ||
							((w.enabled = !0),
							_t(D, 'resize', Jo),
							Y || _t(D, 'scroll', js),
							q && _t(t, 'refreshInit', q),
							U !== !1 && ((w.progress = Ee = 0), (wt = rn = ge = ye())),
							re !== !1 && w.refresh());
					}),
					(w.getTween = function (U) {
						return U && ht ? ht.tween : le;
					}),
					(w.setPositions = function (U, re, Z, ee) {
						if (E) {
							var pt = E.scrollTrigger,
								de = E.duration(),
								Xe = pt.end - pt.start;
							(U = pt.start + (Xe * U) / de), (re = pt.start + (Xe * re) / de);
						}
						w.refresh(
							!1,
							!1,
							{
								start: Gm(U, Z && !!w._startClamp),
								end: Gm(re, Z && !!w._endClamp),
							},
							ee,
						),
							w.update();
					}),
					(w.adjustPinSpacing = function (U) {
						if (je && U) {
							var re = je.indexOf(M.d) + 1;
							(je[re] = parseFloat(je[re]) + U + lt),
								(je[1] = parseFloat(je[1]) + U + lt),
								lo(je);
						}
					}),
					(w.disable = function (U, re) {
						if (
							w.enabled &&
							(U !== !1 && w.revert(!0, !0),
							(w.enabled = w.isActive = !1),
							re || (le && le.pause()),
							(er = 0),
							et && (et.uncache = 1),
							q && mt(t, 'refreshInit', q),
							Jn && (Jn.pause(), ht.tween && ht.tween.kill() && (ht.tween = 0)),
							!Y)
						) {
							for (var Z = se.length; Z--; )
								if (se[Z].scroller === D && se[Z] !== w) return;
							mt(D, 'resize', Jo), Y || mt(D, 'scroll', js);
						}
					}),
					(w.kill = function (U, re) {
						w.disable(U, re), le && !re && le.kill(), u && delete Pd[u];
						var Z = se.indexOf(w);
						Z >= 0 && se.splice(Z, 1),
							Z === Qt && ra > 0 && Qt--,
							(Z = 0),
							se.forEach(function (ee) {
								return ee.scroller === w.scroller && (Z = 1);
							}),
							Z || Xt || (w.scroll.rec = 0),
							i &&
								((i.scrollTrigger = null),
								U && i.revert({ kill: !1 }),
								re || i.kill()),
							St &&
								[St, sn, R, on].forEach(function (ee) {
									return ee.parentNode && ee.parentNode.removeChild(ee);
								}),
							wl === w && (wl = 0),
							h &&
								(et && (et.uncache = 1),
								(Z = 0),
								se.forEach(function (ee) {
									return ee.pin === h && Z++;
								}),
								Z || (et.spacer = 0)),
							r.onKill && r.onKill(w);
					}),
					se.push(w),
					w.enable(!1, !1),
					Rr && Rr(w),
					i && i.add && !O)
				) {
					var ve = w.update;
					(w.update = function () {
						(w.update = ve), me || Me || w.refresh();
					}),
						b.delayedCall(0.01, w.update),
						(O = 0.01),
						(me = Me = 0);
				} else w.refresh();
				h && WT();
			}),
			(t.register = function (r) {
				return (
					Rs ||
						((b = r || r1()), n1() && window.document && t.enable(), (Rs = Ko)),
					Rs
				);
			}),
			(t.defaults = function (r) {
				if (r) for (var i in r) Du[i] = r[i];
				return Du;
			}),
			(t.disable = function (r, i) {
				(Ko = 0),
					se.forEach(function (o) {
						return o[i ? 'kill' : 'disable'](r);
					}),
					mt(he, 'wheel', js),
					mt(Ie, 'scroll', js),
					clearInterval(Nu),
					mt(Ie, 'touchcancel', yr),
					mt(Pe, 'touchstart', yr),
					ju(mt, Ie, 'pointerdown,touchstart,mousedown', Km),
					ju(mt, Ie, 'pointerup,touchend,mouseup', qm),
					ba.kill(),
					Mu(mt);
				for (var s = 0; s < ue.length; s += 3)
					Ru(mt, ue[s], ue[s + 1]), Ru(mt, ue[s], ue[s + 2]);
			}),
			(t.enable = function () {
				if (
					((he = window),
					(Ie = document),
					(lr = Ie.documentElement),
					(Pe = Ie.body),
					b &&
						((Yl = b.utils.toArray),
						(_l = b.utils.clamp),
						(Ed = b.core.context || yr),
						(nf = b.core.suppressOverwrites || yr),
						(Qh = he.history.scrollRestoration || 'auto'),
						(Nd = he.pageYOffset),
						b.core.globals('ScrollTrigger', t),
						Pe))
				) {
					(Ko = 1),
						(oo = document.createElement('div')),
						(oo.style.height = '100vh'),
						(oo.style.position = 'absolute'),
						d1(),
						zT(),
						Je.register(b),
						(t.isTouch = Je.isTouch),
						(ii =
							Je.isTouch &&
							/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
						(Td = Je.isTouch === 1),
						_t(he, 'wheel', js),
						(qv = [he, Ie, lr, Pe]),
						b.matchMedia
							? ((t.matchMedia = function (u) {
									var a = b.matchMedia(),
										c;
									for (c in u) a.add(c, u[c]);
									return a;
								}),
								b.addEventListener('matchMediaInit', function () {
									return Jh();
								}),
								b.addEventListener('matchMediaRevert', function () {
									return c1();
								}),
								b.addEventListener('matchMedia', function () {
									ts(0, 1), xs('matchMedia');
								}),
								b.matchMedia('(orientation: portrait)', function () {
									return lf(), lf;
								}))
							: console.warn('Requires GSAP 3.11.0 or later'),
						lf(),
						_t(Ie, 'scroll', js);
					var r = Pe.style,
						i = r.borderTopStyle,
						s = b.core.Animation.prototype,
						o,
						l;
					for (
						s.revert ||
							Object.defineProperty(s, 'revert', {
								value: function () {
									return this.time(-0.01, !0);
								},
							}),
							r.borderTopStyle = 'solid',
							o = $r(Pe),
							ct.m = Math.round(o.top + ct.sc()) || 0,
							qt.m = Math.round(o.left + qt.sc()) || 0,
							i ? (r.borderTopStyle = i) : r.removeProperty('border-top-style'),
							Nu = setInterval(e0, 250),
							b.delayedCall(0.5, function () {
								return (Ou = 0);
							}),
							_t(Ie, 'touchcancel', yr),
							_t(Pe, 'touchstart', yr),
							ju(_t, Ie, 'pointerdown,touchstart,mousedown', Km),
							ju(_t, Ie, 'pointerup,touchend,mouseup', qm),
							kd = b.utils.checkPrefix('transform'),
							ia.push(kd),
							Rs = Ft(),
							ba = b.delayedCall(0.2, ts).pause(),
							Ds = [
								Ie,
								'visibilitychange',
								function () {
									var u = he.innerWidth,
										a = he.innerHeight;
									Ie.hidden
										? ((Ym = u), (Qm = a))
										: (Ym !== u || Qm !== a) && Jo();
								},
								Ie,
								'DOMContentLoaded',
								ts,
								he,
								'load',
								ts,
								he,
								'resize',
								Jo,
							],
							Mu(_t),
							se.forEach(function (u) {
								return u.enable(0, 1);
							}),
							l = 0;
						l < ue.length;
						l += 3
					)
						Ru(mt, ue[l], ue[l + 1]), Ru(mt, ue[l], ue[l + 2]);
				}
			}),
			(t.config = function (r) {
				'limitCallbacks' in r && (rf = !!r.limitCallbacks);
				var i = r.syncInterval;
				(i && clearInterval(Nu)) || ((Nu = i) && setInterval(e0, i)),
					'ignoreMobileResize' in r &&
						(Td = t.isTouch === 1 && r.ignoreMobileResize),
					'autoRefreshEvents' in r &&
						(Mu(mt) || Mu(_t, r.autoRefreshEvents || 'none'),
						(Jv = (r.autoRefreshEvents + '').indexOf('resize') === -1));
			}),
			(t.scrollerProxy = function (r, i) {
				var s = un(r),
					o = ue.indexOf(s),
					l = vs(s);
				~o && ue.splice(o, l ? 6 : 2),
					i && (l ? Nr.unshift(he, i, Pe, i, lr, i) : Nr.unshift(s, i));
			}),
			(t.clearMatchMedia = function (r) {
				se.forEach(function (i) {
					return i._ctx && i._ctx.query === r && i._ctx.kill(!0, !0);
				});
			}),
			(t.isInViewport = function (r, i, s) {
				var o = (Sn(r) ? un(r) : r).getBoundingClientRect(),
					l = o[s ? us : as] * i || 0;
				return s
					? o.right - l > 0 && o.left + l < he.innerWidth
					: o.bottom - l > 0 && o.top + l < he.innerHeight;
			}),
			(t.positionInViewport = function (r, i, s) {
				Sn(r) && (r = un(r));
				var o = r.getBoundingClientRect(),
					l = o[s ? us : as],
					u =
						i == null
							? l / 2
							: i in Qa
								? Qa[i] * l
								: ~i.indexOf('%')
									? (parseFloat(i) * l) / 100
									: parseFloat(i) || 0;
				return s ? (o.left + u) / he.innerWidth : (o.top + u) / he.innerHeight;
			}),
			(t.killAll = function (r) {
				if (
					(se.slice(0).forEach(function (s) {
						return s.vars.id !== 'ScrollSmoother' && s.kill();
					}),
					r !== !0)
				) {
					var i = ys.killAll || [];
					(ys = {}),
						i.forEach(function (s) {
							return s();
						});
				}
			}),
			t
		);
	})();
ae.version = '3.12.5';
ae.saveStyles = function (t) {
	return t
		? Yl(t).forEach(function (e) {
				if (e && e.style) {
					var n = xn.indexOf(e);
					n >= 0 && xn.splice(n, 5),
						xn.push(
							e,
							e.style.cssText,
							e.getBBox && e.getAttribute('transform'),
							b.core.getCache(e),
							Ed(),
						);
				}
			})
		: xn;
};
ae.revert = function (t, e) {
	return Jh(!t, e);
};
ae.create = function (t, e) {
	return new ae(t, e);
};
ae.refresh = function (t) {
	return t ? Jo() : (Rs || ae.register()) && ts(!0);
};
ae.update = function (t) {
	return ++ue.cache && Hr(t === !0 ? 2 : 0);
};
ae.clearScrollMemory = f1;
ae.maxScroll = function (t, e) {
	return Tr(t, e ? qt : ct);
};
ae.getScrollFunc = function (t, e) {
	return Ri(un(t), e ? qt : ct);
};
ae.getById = function (t) {
	return Pd[t];
};
ae.getAll = function () {
	return se.filter(function (t) {
		return t.vars.id !== 'ScrollSmoother';
	});
};
ae.isScrolling = function () {
	return !!Hn;
};
ae.snapDirectional = Zh;
ae.addEventListener = function (t, e) {
	var n = ys[t] || (ys[t] = []);
	~n.indexOf(e) || n.push(e);
};
ae.removeEventListener = function (t, e) {
	var n = ys[t],
		r = n && n.indexOf(e);
	r >= 0 && n.splice(r, 1);
};
ae.batch = function (t, e) {
	var n = [],
		r = {},
		i = e.interval || 0.016,
		s = e.batchMax || 1e9,
		o = function (a, c) {
			var d = [],
				f = [],
				h = b
					.delayedCall(i, function () {
						c(d, f), (d = []), (f = []);
					})
					.pause();
			return function (g) {
				d.length || h.restart(!0),
					d.push(g.trigger),
					f.push(g),
					s <= d.length && h.progress(1);
			};
		},
		l;
	for (l in e)
		r[l] =
			l.substr(0, 2) === 'on' && Zt(e[l]) && l !== 'onRefreshInit'
				? o(l, e[l])
				: e[l];
	return (
		Zt(s) &&
			((s = s()),
			_t(ae, 'refresh', function () {
				return (s = e.batchMax());
			})),
		Yl(t).forEach(function (u) {
			var a = {};
			for (l in r) a[l] = r[l];
			(a.trigger = u), n.push(ae.create(a));
		}),
		n
	);
};
var o0 = function (e, n, r, i) {
		return (
			n > i ? e(i) : n < 0 && e(0),
			r > i ? (i - n) / (r - n) : r < 0 ? n / (n - r) : 1
		);
	},
	af = function t(e, n) {
		n === !0
			? e.style.removeProperty('touch-action')
			: (e.style.touchAction =
					n === !0
						? 'auto'
						: n
							? 'pan-' + n + (Je.isTouch ? ' pinch-zoom' : '')
							: 'none'),
			e === lr && t(Pe, n);
	},
	Fu = { auto: 1, scroll: 1 },
	XT = function (e) {
		var n = e.event,
			r = e.target,
			i = e.axis,
			s = (n.changedTouches ? n.changedTouches[0] : n).target,
			o = s._gsap || b.core.getCache(s),
			l = Ft(),
			u;
		if (!o._isScrollT || l - o._isScrollT > 2e3) {
			for (
				;
				s &&
				s !== Pe &&
				((s.scrollHeight <= s.clientHeight && s.scrollWidth <= s.clientWidth) ||
					!(Fu[(u = $n(s)).overflowY] || Fu[u.overflowX]));

			)
				s = s.parentNode;
			(o._isScroll =
				s &&
				s !== r &&
				!vs(s) &&
				(Fu[(u = $n(s)).overflowY] || Fu[u.overflowX])),
				(o._isScrollT = l);
		}
		(o._isScroll || i === 'x') && (n.stopPropagation(), (n._gsapAllow = !0));
	},
	p1 = function (e, n, r, i) {
		return Je.create({
			target: e,
			capture: !0,
			debounce: !1,
			lockAxis: !0,
			type: n,
			onWheel: (i = i && XT),
			onPress: i,
			onDrag: i,
			onScroll: i,
			onEnable: function () {
				return r && _t(Ie, Je.eventTypes[0], u0, !1, !0);
			},
			onDisable: function () {
				return mt(Ie, Je.eventTypes[0], u0, !0);
			},
		});
	},
	GT = /(input|label|select|textarea)/i,
	l0,
	u0 = function (e) {
		var n = GT.test(e.target.tagName);
		(n || l0) && ((e._gsapAllow = !0), (l0 = n));
	},
	KT = function (e) {
		Gi(e) || (e = {}),
			(e.preventDefault = e.isNormalizer = e.allowClicks = !0),
			e.type || (e.type = 'wheel,touch'),
			(e.debounce = !!e.debounce),
			(e.id = e.id || 'normalizer');
		var n = e,
			r = n.normalizeScrollX,
			i = n.momentum,
			s = n.allowNestedScroll,
			o = n.onRelease,
			l,
			u,
			a = un(e.target) || lr,
			c = b.core.globals().ScrollSmoother,
			d = c && c.get(),
			f =
				ii &&
				((e.content && un(e.content)) ||
					(d && e.content !== !1 && !d.smooth() && d.content())),
			h = Ri(a, ct),
			g = Ri(a, qt),
			m = 1,
			T =
				(Je.isTouch && he.visualViewport
					? he.visualViewport.scale * he.visualViewport.width
					: he.outerWidth) / he.innerWidth,
			_ = 0,
			p = Zt(i)
				? function () {
						return i(l);
					}
				: function () {
						return i || 2.8;
					},
			y,
			x,
			k = p1(a, e.type, !0, s),
			C = function () {
				return (x = !1);
			},
			E = yr,
			N = yr,
			j = function () {
				(u = Tr(a, ct)),
					(N = _l(ii ? 1 : 0, u)),
					r && (E = _l(0, Tr(a, qt))),
					(y = cs);
			},
			M = function () {
				(f._gsap.y = qo(parseFloat(f._gsap.y) + h.offset) + 'px'),
					(f.style.transform =
						'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' +
						parseFloat(f._gsap.y) +
						', 0, 1)'),
					(h.offset = h.cacheID = 0);
			},
			H = function () {
				if (x) {
					requestAnimationFrame(C);
					var A = qo(l.deltaY / 2),
						$ = N(h.v - A);
					if (f && $ !== h.v + h.offset) {
						h.offset = $ - h.v;
						var w = qo((parseFloat(f && f._gsap.y) || 0) - h.offset);
						(f.style.transform =
							'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' +
							w +
							', 0, 1)'),
							(f._gsap.y = w + 'px'),
							(h.cacheID = ue.cache),
							Hr();
					}
					return !0;
				}
				h.offset && M(), (x = !0);
			},
			D,
			I,
			Y,
			K,
			G = function () {
				j(),
					D.isActive() &&
						D.vars.scrollY > u &&
						(h() > u ? D.progress(1) && h(u) : D.resetTo('scrollY', u));
			};
		return (
			f && b.set(f, { y: '+=0' }),
			(e.ignoreCheck = function (Q) {
				return (
					(ii && Q.type === 'touchmove' && H()) ||
					(m > 1.05 && Q.type !== 'touchstart') ||
					l.isGesturing ||
					(Q.touches && Q.touches.length > 1)
				);
			}),
			(e.onPress = function () {
				x = !1;
				var Q = m;
				(m = qo(((he.visualViewport && he.visualViewport.scale) || 1) / T)),
					D.pause(),
					Q !== m && af(a, m > 1.01 ? !0 : r ? !1 : 'x'),
					(I = g()),
					(Y = h()),
					j(),
					(y = cs);
			}),
			(e.onRelease = e.onGestureStart =
				function (Q, A) {
					if ((h.offset && M(), !A)) K.restart(!0);
					else {
						ue.cache++;
						var $ = p(),
							w,
							q;
						r &&
							((w = g()),
							(q = w + ($ * 0.05 * -Q.velocityX) / 0.227),
							($ *= o0(g, w, q, Tr(a, qt))),
							(D.vars.scrollX = E(q))),
							(w = h()),
							(q = w + ($ * 0.05 * -Q.velocityY) / 0.227),
							($ *= o0(h, w, q, Tr(a, ct))),
							(D.vars.scrollY = N(q)),
							D.invalidate().duration($).play(0.01),
							((ii && D.vars.scrollY >= u) || w >= u - 1) &&
								b.to({}, { onUpdate: G, duration: $ });
					}
					o && o(Q);
				}),
			(e.onWheel = function () {
				D._ts && D.pause(), Ft() - _ > 1e3 && ((y = 0), (_ = Ft()));
			}),
			(e.onChange = function (Q, A, $, w, q) {
				if (
					(cs !== y && j(),
					A && r && g(E(w[2] === A ? I + (Q.startX - Q.x) : g() + A - w[1])),
					$)
				) {
					h.offset && M();
					var oe = q[2] === $,
						it = oe ? Y + Q.startY - Q.y : h() + $ - q[1],
						ge = N(it);
					oe && it !== ge && (Y += ge - it), h(ge);
				}
				($ || A) && Hr();
			}),
			(e.onEnable = function () {
				af(a, r ? !1 : 'x'),
					ae.addEventListener('refresh', G),
					_t(he, 'resize', G),
					h.smooth &&
						((h.target.style.scrollBehavior = 'auto'),
						(h.smooth = g.smooth = !1)),
					k.enable();
			}),
			(e.onDisable = function () {
				af(a, !0),
					mt(he, 'resize', G),
					ae.removeEventListener('refresh', G),
					k.kill();
			}),
			(e.lockAxis = e.lockAxis !== !1),
			(l = new Je(e)),
			(l.iOS = ii),
			ii && !h() && h(1),
			ii && b.ticker.add(yr),
			(K = l._dc),
			(D = b.to(l, {
				ease: 'power4',
				paused: !0,
				inherit: !1,
				scrollX: r ? '+=0.1' : '+=0',
				scrollY: '+=0.1',
				modifiers: {
					scrollY: h1(h, h(), function () {
						return D.pause();
					}),
				},
				onUpdate: Hr,
				onComplete: K.vars.onComplete,
			})),
			l
		);
	};
ae.sort = function (t) {
	return se.sort(
		t ||
			function (e, n) {
				return (
					(e.vars.refreshPriority || 0) * -1e6 +
					e.start -
					(n.start + (n.vars.refreshPriority || 0) * -1e6)
				);
			},
	);
};
ae.observe = function (t) {
	return new Je(t);
};
ae.normalizeScroll = function (t) {
	if (typeof t > 'u') return Ht;
	if (t === !0 && Ht) return Ht.enable();
	if (t === !1) {
		Ht && Ht.kill(), (Ht = t);
		return;
	}
	var e = t instanceof Je ? t : KT(t);
	return Ht && Ht.target === e.target && Ht.kill(), vs(e.target) && (Ht = e), e;
};
ae.core = {
	_getVelocityProp: Sd,
	_inputObserver: p1,
	_scrollers: ue,
	_proxies: Nr,
	bridge: {
		ss: function () {
			Hn || xs('scrollStart'), (Hn = Ft());
		},
		ref: function () {
			return zt;
		},
	},
};
r1() && b.registerPlugin(ae);
(function (t) {
	var e = { kitId: 'qjw2pln', scriptTimeout: 3e3, async: !0 },
		n = t.documentElement,
		r = setTimeout(function () {
			n.className = n.className.replace(/\bwf-loading\b/g, '') + ' wf-inactive';
		}, e.scriptTimeout),
		i = t.createElement('script'),
		s = !1,
		o = t.getElementsByTagName('script')[0],
		l;
	(n.className += ' wf-loading'),
		(i.src = 'https://use.typekit.net/' + e.kitId + '.js'),
		(i.async = !0),
		(i.onload = i.onreadystatechange =
			function () {
				(l = this.readyState),
					!(s || (l && l != 'complete' && l != 'loaded')) &&
						((s = !0), clearTimeout(r));
			}),
		o.parentNode.insertBefore(i, o);
})(document);
Jt.registerPlugin(ae);
function qT() {
	const t = te.useRef();
	return (
		te.useEffect(() => {
			function e(n) {
				var r, i;
				(i = (r = t.current) == null ? void 0 : r.lenis) == null ||
					i.raf(n * 1e3);
			}
			return (
				Jt.ticker.add(e),
				() => {
					Jt.ticker.remove(e);
				}
			);
		}),
		v.jsxs(id, {
			root: !0,
			options: {
				lerp: 0.1,
				duration: 1.2,
				smoothTouch: !0,
				easing: 'easeOutQuart',
			},
			ref: t,
			autoRaf: !1,
			children: [v.jsx(Aw, {}), v.jsx(RT, {}), v.jsx(DT, {})],
		})
	);
}
cf.createRoot(document.getElementById('root')).render(
	v.jsx(ut.StrictMode, { children: v.jsx(qT, {}) }),
);
