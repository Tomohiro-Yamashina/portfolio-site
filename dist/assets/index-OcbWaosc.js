var c1 = Object.defineProperty;
var f1 = (t, e, n) =>
	e in t
		? c1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
		: (t[e] = n);
var _r = (t, e, n) => (f1(t, typeof e != 'symbol' ? e + '' : e, n), n);
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
function Pd(t) {
	return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, 'default')
		? t.default
		: t;
}
var i0 = { exports: {} },
	Ha = {},
	s0 = { exports: {} },
	ce = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ql = Symbol.for('react.element'),
	d1 = Symbol.for('react.portal'),
	h1 = Symbol.for('react.fragment'),
	p1 = Symbol.for('react.strict_mode'),
	m1 = Symbol.for('react.profiler'),
	_1 = Symbol.for('react.provider'),
	g1 = Symbol.for('react.context'),
	v1 = Symbol.for('react.forward_ref'),
	y1 = Symbol.for('react.suspense'),
	x1 = Symbol.for('react.memo'),
	w1 = Symbol.for('react.lazy'),
	qh = Symbol.iterator;
function S1(t) {
	return t === null || typeof t != 'object'
		? null
		: ((t = (qh && t[qh]) || t['@@iterator']),
			typeof t == 'function' ? t : null);
}
var o0 = {
		isMounted: function () {
			return !1;
		},
		enqueueForceUpdate: function () {},
		enqueueReplaceState: function () {},
		enqueueSetState: function () {},
	},
	l0 = Object.assign,
	u0 = {};
function ko(t, e, n) {
	(this.props = t),
		(this.context = e),
		(this.refs = u0),
		(this.updater = n || o0);
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
function a0() {}
a0.prototype = ko.prototype;
function Nd(t, e, n) {
	(this.props = t),
		(this.context = e),
		(this.refs = u0),
		(this.updater = n || o0);
}
var jd = (Nd.prototype = new a0());
jd.constructor = Nd;
l0(jd, ko.prototype);
jd.isPureReactComponent = !0;
var Zh = Array.isArray,
	c0 = Object.prototype.hasOwnProperty,
	Od = { current: null },
	f0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function d0(t, e, n) {
	var r,
		i = {},
		s = null,
		o = null;
	if (e != null)
		for (r in (e.ref !== void 0 && (o = e.ref),
		e.key !== void 0 && (s = '' + e.key),
		e))
			c0.call(e, r) && !f0.hasOwnProperty(r) && (i[r] = e[r]);
	var l = arguments.length - 2;
	if (l === 1) i.children = n;
	else if (1 < l) {
		for (var u = Array(l), a = 0; a < l; a++) u[a] = arguments[a + 2];
		i.children = u;
	}
	if (t && t.defaultProps)
		for (r in ((l = t.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
	return {
		$$typeof: Ql,
		type: t,
		key: s,
		ref: o,
		props: i,
		_owner: Od.current,
	};
}
function k1(t, e) {
	return {
		$$typeof: Ql,
		type: t.type,
		key: e,
		ref: t.ref,
		props: t.props,
		_owner: t._owner,
	};
}
function Md(t) {
	return typeof t == 'object' && t !== null && t.$$typeof === Ql;
}
function T1(t) {
	var e = { '=': '=0', ':': '=2' };
	return (
		'$' +
		t.replace(/[=:]/g, function (n) {
			return e[n];
		})
	);
}
var Jh = /\/+/g;
function hc(t, e) {
	return typeof t == 'object' && t !== null && t.key != null
		? T1('' + t.key)
		: e.toString(36);
}
function Lu(t, e, n, r, i) {
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
					case Ql:
					case d1:
						o = !0;
				}
		}
	if (o)
		return (
			(o = t),
			(i = i(o)),
			(t = r === '' ? '.' + hc(o, 0) : r),
			Zh(i)
				? ((n = ''),
					t != null && (n = t.replace(Jh, '$&/') + '/'),
					Lu(i, e, n, '', function (a) {
						return a;
					}))
				: i != null &&
					(Md(i) &&
						(i = k1(
							i,
							n +
								(!i.key || (o && o.key === i.key)
									? ''
									: ('' + i.key).replace(Jh, '$&/') + '/') +
								t,
						)),
					e.push(i)),
			1
		);
	if (((o = 0), (r = r === '' ? '.' : r + ':'), Zh(t)))
		for (var l = 0; l < t.length; l++) {
			s = t[l];
			var u = r + hc(s, l);
			o += Lu(s, e, n, u, i);
		}
	else if (((u = S1(t)), typeof u == 'function'))
		for (t = u.call(t), l = 0; !(s = t.next()).done; )
			(s = s.value), (u = r + hc(s, l++)), (o += Lu(s, e, n, u, i));
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
function iu(t, e, n) {
	if (t == null) return t;
	var r = [],
		i = 0;
	return (
		Lu(t, r, '', '', function (s) {
			return e.call(n, s, i++);
		}),
		r
	);
}
function E1(t) {
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
var rn = { current: null },
	Fu = { transition: null },
	C1 = {
		ReactCurrentDispatcher: rn,
		ReactCurrentBatchConfig: Fu,
		ReactCurrentOwner: Od,
	};
ce.Children = {
	map: iu,
	forEach: function (t, e, n) {
		iu(
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
			iu(t, function () {
				e++;
			}),
			e
		);
	},
	toArray: function (t) {
		return (
			iu(t, function (e) {
				return e;
			}) || []
		);
	},
	only: function (t) {
		if (!Md(t))
			throw Error(
				'React.Children.only expected to receive a single React element child.',
			);
		return t;
	},
};
ce.Component = ko;
ce.Fragment = h1;
ce.Profiler = m1;
ce.PureComponent = Nd;
ce.StrictMode = p1;
ce.Suspense = y1;
ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = C1;
ce.cloneElement = function (t, e, n) {
	if (t == null)
		throw Error(
			'React.cloneElement(...): The argument must be a React element, but you passed ' +
				t +
				'.',
		);
	var r = l0({}, t.props),
		i = t.key,
		s = t.ref,
		o = t._owner;
	if (e != null) {
		if (
			(e.ref !== void 0 && ((s = e.ref), (o = Od.current)),
			e.key !== void 0 && (i = '' + e.key),
			t.type && t.type.defaultProps)
		)
			var l = t.type.defaultProps;
		for (u in e)
			c0.call(e, u) &&
				!f0.hasOwnProperty(u) &&
				(r[u] = e[u] === void 0 && l !== void 0 ? l[u] : e[u]);
	}
	var u = arguments.length - 2;
	if (u === 1) r.children = n;
	else if (1 < u) {
		l = Array(u);
		for (var a = 0; a < u; a++) l[a] = arguments[a + 2];
		r.children = l;
	}
	return { $$typeof: Ql, type: t.type, key: i, ref: s, props: r, _owner: o };
};
ce.createContext = function (t) {
	return (
		(t = {
			$$typeof: g1,
			_currentValue: t,
			_currentValue2: t,
			_threadCount: 0,
			Provider: null,
			Consumer: null,
			_defaultValue: null,
			_globalName: null,
		}),
		(t.Provider = { $$typeof: _1, _context: t }),
		(t.Consumer = t)
	);
};
ce.createElement = d0;
ce.createFactory = function (t) {
	var e = d0.bind(null, t);
	return (e.type = t), e;
};
ce.createRef = function () {
	return { current: null };
};
ce.forwardRef = function (t) {
	return { $$typeof: v1, render: t };
};
ce.isValidElement = Md;
ce.lazy = function (t) {
	return { $$typeof: w1, _payload: { _status: -1, _result: t }, _init: E1 };
};
ce.memo = function (t, e) {
	return { $$typeof: x1, type: t, compare: e === void 0 ? null : e };
};
ce.startTransition = function (t) {
	var e = Fu.transition;
	Fu.transition = {};
	try {
		t();
	} finally {
		Fu.transition = e;
	}
};
ce.unstable_act = function () {
	throw Error('act(...) is not supported in production builds of React.');
};
ce.useCallback = function (t, e) {
	return rn.current.useCallback(t, e);
};
ce.useContext = function (t) {
	return rn.current.useContext(t);
};
ce.useDebugValue = function () {};
ce.useDeferredValue = function (t) {
	return rn.current.useDeferredValue(t);
};
ce.useEffect = function (t, e) {
	return rn.current.useEffect(t, e);
};
ce.useId = function () {
	return rn.current.useId();
};
ce.useImperativeHandle = function (t, e, n) {
	return rn.current.useImperativeHandle(t, e, n);
};
ce.useInsertionEffect = function (t, e) {
	return rn.current.useInsertionEffect(t, e);
};
ce.useLayoutEffect = function (t, e) {
	return rn.current.useLayoutEffect(t, e);
};
ce.useMemo = function (t, e) {
	return rn.current.useMemo(t, e);
};
ce.useReducer = function (t, e, n) {
	return rn.current.useReducer(t, e, n);
};
ce.useRef = function (t) {
	return rn.current.useRef(t);
};
ce.useState = function (t) {
	return rn.current.useState(t);
};
ce.useSyncExternalStore = function (t, e, n) {
	return rn.current.useSyncExternalStore(t, e, n);
};
ce.useTransition = function () {
	return rn.current.useTransition();
};
ce.version = '18.2.0';
s0.exports = ce;
var te = s0.exports;
const ct = Pd(te);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var P1 = te,
	N1 = Symbol.for('react.element'),
	j1 = Symbol.for('react.fragment'),
	O1 = Object.prototype.hasOwnProperty,
	M1 = P1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	R1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function h0(t, e, n) {
	var r,
		i = {},
		s = null,
		o = null;
	n !== void 0 && (s = '' + n),
		e.key !== void 0 && (s = '' + e.key),
		e.ref !== void 0 && (o = e.ref);
	for (r in e) O1.call(e, r) && !R1.hasOwnProperty(r) && (i[r] = e[r]);
	if (t && t.defaultProps)
		for (r in ((e = t.defaultProps), e)) i[r] === void 0 && (i[r] = e[r]);
	return {
		$$typeof: N1,
		type: t,
		key: s,
		ref: o,
		props: i,
		_owner: M1.current,
	};
}
Ha.Fragment = j1;
Ha.jsx = h0;
Ha.jsxs = h0;
i0.exports = Ha;
var g = i0.exports,
	lf = {},
	p0 = { exports: {} },
	Dn = {},
	m0 = { exports: {} },
	_0 = {};
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
			e: for (var q = 0, oe = A.length, ot = oe >>> 1; q < ot; ) {
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
		v = !1,
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
		if (((m = !1), y(A), !v))
			if (n(u) !== null) (v = !0), G(k);
			else {
				var $ = n(a);
				$ !== null && Q(x, $.startTime - A);
			}
	}
	function k(A, $) {
		(v = !1), m && ((m = !1), _(N), (N = -1)), (h = !0);
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
			if (d !== null) var ot = !0;
			else {
				var ge = n(a);
				ge !== null && Q(x, ge.startTime - $), (ot = !1);
			}
			return ot;
		} finally {
			(d = null), (f = w), (h = !1);
		}
	}
	var C = !1,
		E = null,
		N = -1,
		M = 5,
		O = -1;
	function H() {
		return !(t.unstable_now() - O < M);
	}
	function D() {
		if (E !== null) {
			var A = t.unstable_now();
			O = A;
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
			v || h || ((v = !0), G(k));
		}),
		(t.unstable_forceFrameRate = function (A) {
			0 > A || 125 < A
				? console.error(
						'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
					)
				: (M = 0 < A ? Math.floor(1e3 / A) : 5);
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
					: ((A.sortIndex = oe), e(u, A), v || h || ((v = !0), G(k))),
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
})(_0);
m0.exports = _0;
var D1 = m0.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var g0 = te,
	Mn = D1;
function L(t) {
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
var v0 = new Set(),
	wl = {};
function ws(t, e) {
	uo(t, e), uo(t + 'Capture', e);
}
function uo(t, e) {
	for (wl[t] = e, t = 0; t < e.length; t++) v0.add(e[t]);
}
var Qr = !(
		typeof window > 'u' ||
		typeof window.document > 'u' ||
		typeof window.document.createElement > 'u'
	),
	uf = Object.prototype.hasOwnProperty,
	A1 =
		/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	ep = {},
	tp = {};
function z1(t) {
	return uf.call(tp, t)
		? !0
		: uf.call(ep, t)
			? !1
			: A1.test(t)
				? (tp[t] = !0)
				: ((ep[t] = !0), !1);
}
function L1(t, e, n, r) {
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
function F1(t, e, n, r) {
	if (e === null || typeof e > 'u' || L1(t, e, n, r)) return !0;
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
function sn(t, e, n, r, i, s, o) {
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
		Mt[t] = new sn(t, 0, !1, t, null, !1, !1);
	});
[
	['acceptCharset', 'accept-charset'],
	['className', 'class'],
	['htmlFor', 'for'],
	['httpEquiv', 'http-equiv'],
].forEach(function (t) {
	var e = t[0];
	Mt[e] = new sn(e, 1, !1, t[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (t) {
	Mt[t] = new sn(t, 2, !1, t.toLowerCase(), null, !1, !1);
});
[
	'autoReverse',
	'externalResourcesRequired',
	'focusable',
	'preserveAlpha',
].forEach(function (t) {
	Mt[t] = new sn(t, 2, !1, t, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
	.split(' ')
	.forEach(function (t) {
		Mt[t] = new sn(t, 3, !1, t.toLowerCase(), null, !1, !1);
	});
['checked', 'multiple', 'muted', 'selected'].forEach(function (t) {
	Mt[t] = new sn(t, 3, !0, t, null, !1, !1);
});
['capture', 'download'].forEach(function (t) {
	Mt[t] = new sn(t, 4, !1, t, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (t) {
	Mt[t] = new sn(t, 6, !1, t, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (t) {
	Mt[t] = new sn(t, 5, !1, t.toLowerCase(), null, !1, !1);
});
var Rd = /[\-:]([a-z])/g;
function Dd(t) {
	return t[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
	.split(' ')
	.forEach(function (t) {
		var e = t.replace(Rd, Dd);
		Mt[e] = new sn(e, 1, !1, t, null, !1, !1);
	});
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
	.split(' ')
	.forEach(function (t) {
		var e = t.replace(Rd, Dd);
		Mt[e] = new sn(e, 1, !1, t, 'http://www.w3.org/1999/xlink', !1, !1);
	});
['xml:base', 'xml:lang', 'xml:space'].forEach(function (t) {
	var e = t.replace(Rd, Dd);
	Mt[e] = new sn(e, 1, !1, t, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (t) {
	Mt[t] = new sn(t, 1, !1, t.toLowerCase(), null, !1, !1);
});
Mt.xlinkHref = new sn(
	'xlinkHref',
	1,
	!1,
	'xlink:href',
	'http://www.w3.org/1999/xlink',
	!0,
	!1,
);
['src', 'href', 'action', 'formAction'].forEach(function (t) {
	Mt[t] = new sn(t, 1, !1, t.toLowerCase(), null, !0, !0);
});
function Ad(t, e, n, r) {
	var i = Mt.hasOwnProperty(e) ? Mt[e] : null;
	(i !== null
		? i.type !== 0
		: r ||
			!(2 < e.length) ||
			(e[0] !== 'o' && e[0] !== 'O') ||
			(e[1] !== 'n' && e[1] !== 'N')) &&
		(F1(e, n, i, r) && (n = null),
		r || i === null
			? z1(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, '' + n))
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
var Jr = g0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	su = Symbol.for('react.element'),
	As = Symbol.for('react.portal'),
	zs = Symbol.for('react.fragment'),
	zd = Symbol.for('react.strict_mode'),
	af = Symbol.for('react.profiler'),
	y0 = Symbol.for('react.provider'),
	x0 = Symbol.for('react.context'),
	Ld = Symbol.for('react.forward_ref'),
	cf = Symbol.for('react.suspense'),
	ff = Symbol.for('react.suspense_list'),
	Fd = Symbol.for('react.memo'),
	ii = Symbol.for('react.lazy'),
	w0 = Symbol.for('react.offscreen'),
	np = Symbol.iterator;
function Oo(t) {
	return t === null || typeof t != 'object'
		? null
		: ((t = (np && t[np]) || t['@@iterator']),
			typeof t == 'function' ? t : null);
}
var He = Object.assign,
	pc;
function Bo(t) {
	if (pc === void 0)
		try {
			throw Error();
		} catch (n) {
			var e = n.stack.trim().match(/\n( *(at )?)/);
			pc = (e && e[1]) || '';
		}
	return (
		`
` +
		pc +
		t
	);
}
var mc = !1;
function _c(t, e) {
	if (!t || mc) return '';
	mc = !0;
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
		(mc = !1), (Error.prepareStackTrace = n);
	}
	return (t = t ? t.displayName || t.name : '') ? Bo(t) : '';
}
function I1(t) {
	switch (t.tag) {
		case 5:
			return Bo(t.type);
		case 16:
			return Bo('Lazy');
		case 13:
			return Bo('Suspense');
		case 19:
			return Bo('SuspenseList');
		case 0:
		case 2:
		case 15:
			return (t = _c(t.type, !1)), t;
		case 11:
			return (t = _c(t.type.render, !1)), t;
		case 1:
			return (t = _c(t.type, !0)), t;
		default:
			return '';
	}
}
function df(t) {
	if (t == null) return null;
	if (typeof t == 'function') return t.displayName || t.name || null;
	if (typeof t == 'string') return t;
	switch (t) {
		case zs:
			return 'Fragment';
		case As:
			return 'Portal';
		case af:
			return 'Profiler';
		case zd:
			return 'StrictMode';
		case cf:
			return 'Suspense';
		case ff:
			return 'SuspenseList';
	}
	if (typeof t == 'object')
		switch (t.$$typeof) {
			case x0:
				return (t.displayName || 'Context') + '.Consumer';
			case y0:
				return (t._context.displayName || 'Context') + '.Provider';
			case Ld:
				var e = t.render;
				return (
					(t = t.displayName),
					t ||
						((t = e.displayName || e.name || ''),
						(t = t !== '' ? 'ForwardRef(' + t + ')' : 'ForwardRef')),
					t
				);
			case Fd:
				return (
					(e = t.displayName || null), e !== null ? e : df(t.type) || 'Memo'
				);
			case ii:
				(e = t._payload), (t = t._init);
				try {
					return df(t(e));
				} catch {}
		}
	return null;
}
function V1(t) {
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
			return df(e);
		case 8:
			return e === zd ? 'StrictMode' : 'Mode';
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
function Pi(t) {
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
function S0(t) {
	var e = t.type;
	return (
		(t = t.nodeName) &&
		t.toLowerCase() === 'input' &&
		(e === 'checkbox' || e === 'radio')
	);
}
function $1(t) {
	var e = S0(t) ? 'checked' : 'value',
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
function ou(t) {
	t._valueTracker || (t._valueTracker = $1(t));
}
function k0(t) {
	if (!t) return !1;
	var e = t._valueTracker;
	if (!e) return !0;
	var n = e.getValue(),
		r = '';
	return (
		t && (r = S0(t) ? (t.checked ? 'true' : 'false') : t.value),
		(t = r),
		t !== n ? (e.setValue(t), !0) : !1
	);
}
function ia(t) {
	if (((t = t || (typeof document < 'u' ? document : void 0)), typeof t > 'u'))
		return null;
	try {
		return t.activeElement || t.body;
	} catch {
		return t.body;
	}
}
function hf(t, e) {
	var n = e.checked;
	return He({}, e, {
		defaultChecked: void 0,
		defaultValue: void 0,
		value: void 0,
		checked: n ?? t._wrapperState.initialChecked,
	});
}
function rp(t, e) {
	var n = e.defaultValue == null ? '' : e.defaultValue,
		r = e.checked != null ? e.checked : e.defaultChecked;
	(n = Pi(e.value != null ? e.value : n)),
		(t._wrapperState = {
			initialChecked: r,
			initialValue: n,
			controlled:
				e.type === 'checkbox' || e.type === 'radio'
					? e.checked != null
					: e.value != null,
		});
}
function T0(t, e) {
	(e = e.checked), e != null && Ad(t, 'checked', e, !1);
}
function pf(t, e) {
	T0(t, e);
	var n = Pi(e.value),
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
		? mf(t, e.type, n)
		: e.hasOwnProperty('defaultValue') && mf(t, e.type, Pi(e.defaultValue)),
		e.checked == null &&
			e.defaultChecked != null &&
			(t.defaultChecked = !!e.defaultChecked);
}
function ip(t, e, n) {
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
function mf(t, e, n) {
	(e !== 'number' || ia(t.ownerDocument) !== t) &&
		(n == null
			? (t.defaultValue = '' + t._wrapperState.initialValue)
			: t.defaultValue !== '' + n && (t.defaultValue = '' + n));
}
var Wo = Array.isArray;
function Ks(t, e, n, r) {
	if (((t = t.options), e)) {
		e = {};
		for (var i = 0; i < n.length; i++) e['$' + n[i]] = !0;
		for (n = 0; n < t.length; n++)
			(i = e.hasOwnProperty('$' + t[n].value)),
				t[n].selected !== i && (t[n].selected = i),
				i && r && (t[n].defaultSelected = !0);
	} else {
		for (n = '' + Pi(n), e = null, i = 0; i < t.length; i++) {
			if (t[i].value === n) {
				(t[i].selected = !0), r && (t[i].defaultSelected = !0);
				return;
			}
			e !== null || t[i].disabled || (e = t[i]);
		}
		e !== null && (e.selected = !0);
	}
}
function _f(t, e) {
	if (e.dangerouslySetInnerHTML != null) throw Error(L(91));
	return He({}, e, {
		value: void 0,
		defaultValue: void 0,
		children: '' + t._wrapperState.initialValue,
	});
}
function sp(t, e) {
	var n = e.value;
	if (n == null) {
		if (((n = e.children), (e = e.defaultValue), n != null)) {
			if (e != null) throw Error(L(92));
			if (Wo(n)) {
				if (1 < n.length) throw Error(L(93));
				n = n[0];
			}
			e = n;
		}
		e == null && (e = ''), (n = e);
	}
	t._wrapperState = { initialValue: Pi(n) };
}
function E0(t, e) {
	var n = Pi(e.value),
		r = Pi(e.defaultValue);
	n != null &&
		((n = '' + n),
		n !== t.value && (t.value = n),
		e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)),
		r != null && (t.defaultValue = '' + r);
}
function op(t) {
	var e = t.textContent;
	e === t._wrapperState.initialValue && e !== '' && e !== null && (t.value = e);
}
function C0(t) {
	switch (t) {
		case 'svg':
			return 'http://www.w3.org/2000/svg';
		case 'math':
			return 'http://www.w3.org/1998/Math/MathML';
		default:
			return 'http://www.w3.org/1999/xhtml';
	}
}
function gf(t, e) {
	return t == null || t === 'http://www.w3.org/1999/xhtml'
		? C0(e)
		: t === 'http://www.w3.org/2000/svg' && e === 'foreignObject'
			? 'http://www.w3.org/1999/xhtml'
			: t;
}
var lu,
	P0 = (function (t) {
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
				lu = lu || document.createElement('div'),
					lu.innerHTML = '<svg>' + e.valueOf().toString() + '</svg>',
					e = lu.firstChild;
				t.firstChild;

			)
				t.removeChild(t.firstChild);
			for (; e.firstChild; ) t.appendChild(e.firstChild);
		}
	});
function Sl(t, e) {
	if (e) {
		var n = t.firstChild;
		if (n && n === t.lastChild && n.nodeType === 3) {
			n.nodeValue = e;
			return;
		}
	}
	t.textContent = e;
}
var Jo = {
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
	U1 = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Jo).forEach(function (t) {
	U1.forEach(function (e) {
		(e = e + t.charAt(0).toUpperCase() + t.substring(1)), (Jo[e] = Jo[t]);
	});
});
function N0(t, e, n) {
	return e == null || typeof e == 'boolean' || e === ''
		? ''
		: n || typeof e != 'number' || e === 0 || (Jo.hasOwnProperty(t) && Jo[t])
			? ('' + e).trim()
			: e + 'px';
}
function j0(t, e) {
	t = t.style;
	for (var n in e)
		if (e.hasOwnProperty(n)) {
			var r = n.indexOf('--') === 0,
				i = N0(n, e[n], r);
			n === 'float' && (n = 'cssFloat'), r ? t.setProperty(n, i) : (t[n] = i);
		}
}
var B1 = He(
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
function vf(t, e) {
	if (e) {
		if (B1[t] && (e.children != null || e.dangerouslySetInnerHTML != null))
			throw Error(L(137, t));
		if (e.dangerouslySetInnerHTML != null) {
			if (e.children != null) throw Error(L(60));
			if (
				typeof e.dangerouslySetInnerHTML != 'object' ||
				!('__html' in e.dangerouslySetInnerHTML)
			)
				throw Error(L(61));
		}
		if (e.style != null && typeof e.style != 'object') throw Error(L(62));
	}
}
function yf(t, e) {
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
var xf = null;
function Id(t) {
	return (
		(t = t.target || t.srcElement || window),
		t.correspondingUseElement && (t = t.correspondingUseElement),
		t.nodeType === 3 ? t.parentNode : t
	);
}
var wf = null,
	qs = null,
	Zs = null;
function lp(t) {
	if ((t = Kl(t))) {
		if (typeof wf != 'function') throw Error(L(280));
		var e = t.stateNode;
		e && ((e = Ka(e)), wf(t.stateNode, t.type, e));
	}
}
function O0(t) {
	qs ? (Zs ? Zs.push(t) : (Zs = [t])) : (qs = t);
}
function M0() {
	if (qs) {
		var t = qs,
			e = Zs;
		if (((Zs = qs = null), lp(t), e)) for (t = 0; t < e.length; t++) lp(e[t]);
	}
}
function R0(t, e) {
	return t(e);
}
function D0() {}
var gc = !1;
function A0(t, e, n) {
	if (gc) return t(e, n);
	gc = !0;
	try {
		return R0(t, e, n);
	} finally {
		(gc = !1), (qs !== null || Zs !== null) && (D0(), M0());
	}
}
function kl(t, e) {
	var n = t.stateNode;
	if (n === null) return null;
	var r = Ka(n);
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
	if (n && typeof n != 'function') throw Error(L(231, e, typeof n));
	return n;
}
var Sf = !1;
if (Qr)
	try {
		var Mo = {};
		Object.defineProperty(Mo, 'passive', {
			get: function () {
				Sf = !0;
			},
		}),
			window.addEventListener('test', Mo, Mo),
			window.removeEventListener('test', Mo, Mo);
	} catch {
		Sf = !1;
	}
function W1(t, e, n, r, i, s, o, l, u) {
	var a = Array.prototype.slice.call(arguments, 3);
	try {
		e.apply(n, a);
	} catch (c) {
		this.onError(c);
	}
}
var el = !1,
	sa = null,
	oa = !1,
	kf = null,
	b1 = {
		onError: function (t) {
			(el = !0), (sa = t);
		},
	};
function H1(t, e, n, r, i, s, o, l, u) {
	(el = !1), (sa = null), W1.apply(b1, arguments);
}
function Y1(t, e, n, r, i, s, o, l, u) {
	if ((H1.apply(this, arguments), el)) {
		if (el) {
			var a = sa;
			(el = !1), (sa = null);
		} else throw Error(L(198));
		oa || ((oa = !0), (kf = a));
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
function z0(t) {
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
function up(t) {
	if (Ss(t) !== t) throw Error(L(188));
}
function Q1(t) {
	var e = t.alternate;
	if (!e) {
		if (((e = Ss(t)), e === null)) throw Error(L(188));
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
				if (s === n) return up(i), t;
				if (s === r) return up(i), e;
				s = s.sibling;
			}
			throw Error(L(188));
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
				if (!o) throw Error(L(189));
			}
		}
		if (n.alternate !== r) throw Error(L(190));
	}
	if (n.tag !== 3) throw Error(L(188));
	return n.stateNode.current === n ? t : e;
}
function L0(t) {
	return (t = Q1(t)), t !== null ? F0(t) : null;
}
function F0(t) {
	if (t.tag === 5 || t.tag === 6) return t;
	for (t = t.child; t !== null; ) {
		var e = F0(t);
		if (e !== null) return e;
		t = t.sibling;
	}
	return null;
}
var I0 = Mn.unstable_scheduleCallback,
	ap = Mn.unstable_cancelCallback,
	X1 = Mn.unstable_shouldYield,
	G1 = Mn.unstable_requestPaint,
	et = Mn.unstable_now,
	K1 = Mn.unstable_getCurrentPriorityLevel,
	Vd = Mn.unstable_ImmediatePriority,
	V0 = Mn.unstable_UserBlockingPriority,
	la = Mn.unstable_NormalPriority,
	q1 = Mn.unstable_LowPriority,
	$0 = Mn.unstable_IdlePriority,
	Ya = null,
	Cr = null;
function Z1(t) {
	if (Cr && typeof Cr.onCommitFiberRoot == 'function')
		try {
			Cr.onCommitFiberRoot(Ya, t, void 0, (t.current.flags & 128) === 128);
		} catch {}
}
var cr = Math.clz32 ? Math.clz32 : ty,
	J1 = Math.log,
	ey = Math.LN2;
function ty(t) {
	return (t >>>= 0), t === 0 ? 32 : (31 - ((J1(t) / ey) | 0)) | 0;
}
var uu = 64,
	au = 4194304;
function bo(t) {
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
function ua(t, e) {
	var n = t.pendingLanes;
	if (n === 0) return 0;
	var r = 0,
		i = t.suspendedLanes,
		s = t.pingedLanes,
		o = n & 268435455;
	if (o !== 0) {
		var l = o & ~i;
		l !== 0 ? (r = bo(l)) : ((s &= o), s !== 0 && (r = bo(s)));
	} else (o = n & ~i), o !== 0 ? (r = bo(o)) : s !== 0 && (r = bo(s));
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
			(n = 31 - cr(e)), (i = 1 << n), (r |= t[n]), (e &= ~i);
	return r;
}
function ny(t, e) {
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
function ry(t, e) {
	for (
		var n = t.suspendedLanes,
			r = t.pingedLanes,
			i = t.expirationTimes,
			s = t.pendingLanes;
		0 < s;

	) {
		var o = 31 - cr(s),
			l = 1 << o,
			u = i[o];
		u === -1
			? (!(l & n) || l & r) && (i[o] = ny(l, e))
			: u <= e && (t.expiredLanes |= l),
			(s &= ~l);
	}
}
function Tf(t) {
	return (
		(t = t.pendingLanes & -1073741825),
		t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
	);
}
function U0() {
	var t = uu;
	return (uu <<= 1), !(uu & 4194240) && (uu = 64), t;
}
function vc(t) {
	for (var e = [], n = 0; 31 > n; n++) e.push(t);
	return e;
}
function Xl(t, e, n) {
	(t.pendingLanes |= e),
		e !== 536870912 && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
		(t = t.eventTimes),
		(e = 31 - cr(e)),
		(t[e] = n);
}
function iy(t, e) {
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
		var i = 31 - cr(n),
			s = 1 << i;
		(e[i] = 0), (r[i] = -1), (t[i] = -1), (n &= ~s);
	}
}
function $d(t, e) {
	var n = (t.entangledLanes |= e);
	for (t = t.entanglements; n; ) {
		var r = 31 - cr(n),
			i = 1 << r;
		(i & e) | (t[r] & e) && (t[r] |= e), (n &= ~i);
	}
}
var xe = 0;
function B0(t) {
	return (t &= -t), 1 < t ? (4 < t ? (t & 268435455 ? 16 : 536870912) : 4) : 1;
}
var W0,
	Ud,
	b0,
	H0,
	Y0,
	Ef = !1,
	cu = [],
	_i = null,
	gi = null,
	vi = null,
	Tl = new Map(),
	El = new Map(),
	oi = [],
	sy =
		'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
			' ',
		);
function cp(t, e) {
	switch (t) {
		case 'focusin':
		case 'focusout':
			_i = null;
			break;
		case 'dragenter':
		case 'dragleave':
			gi = null;
			break;
		case 'mouseover':
		case 'mouseout':
			vi = null;
			break;
		case 'pointerover':
		case 'pointerout':
			Tl.delete(e.pointerId);
			break;
		case 'gotpointercapture':
		case 'lostpointercapture':
			El.delete(e.pointerId);
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
			e !== null && ((e = Kl(e)), e !== null && Ud(e)),
			t)
		: ((t.eventSystemFlags |= r),
			(e = t.targetContainers),
			i !== null && e.indexOf(i) === -1 && e.push(i),
			t);
}
function oy(t, e, n, r, i) {
	switch (e) {
		case 'focusin':
			return (_i = Ro(_i, t, e, n, r, i)), !0;
		case 'dragenter':
			return (gi = Ro(gi, t, e, n, r, i)), !0;
		case 'mouseover':
			return (vi = Ro(vi, t, e, n, r, i)), !0;
		case 'pointerover':
			var s = i.pointerId;
			return Tl.set(s, Ro(Tl.get(s) || null, t, e, n, r, i)), !0;
		case 'gotpointercapture':
			return (
				(s = i.pointerId), El.set(s, Ro(El.get(s) || null, t, e, n, r, i)), !0
			);
	}
	return !1;
}
function Q0(t) {
	var e = Ki(t.target);
	if (e !== null) {
		var n = Ss(e);
		if (n !== null) {
			if (((e = n.tag), e === 13)) {
				if (((e = z0(n)), e !== null)) {
					(t.blockedOn = e),
						Y0(t.priority, function () {
							b0(n);
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
function Iu(t) {
	if (t.blockedOn !== null) return !1;
	for (var e = t.targetContainers; 0 < e.length; ) {
		var n = Cf(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
		if (n === null) {
			n = t.nativeEvent;
			var r = new n.constructor(n.type, n);
			(xf = r), n.target.dispatchEvent(r), (xf = null);
		} else return (e = Kl(n)), e !== null && Ud(e), (t.blockedOn = n), !1;
		e.shift();
	}
	return !0;
}
function fp(t, e, n) {
	Iu(t) && n.delete(e);
}
function ly() {
	(Ef = !1),
		_i !== null && Iu(_i) && (_i = null),
		gi !== null && Iu(gi) && (gi = null),
		vi !== null && Iu(vi) && (vi = null),
		Tl.forEach(fp),
		El.forEach(fp);
}
function Do(t, e) {
	t.blockedOn === e &&
		((t.blockedOn = null),
		Ef ||
			((Ef = !0),
			Mn.unstable_scheduleCallback(Mn.unstable_NormalPriority, ly)));
}
function Cl(t) {
	function e(i) {
		return Do(i, t);
	}
	if (0 < cu.length) {
		Do(cu[0], t);
		for (var n = 1; n < cu.length; n++) {
			var r = cu[n];
			r.blockedOn === t && (r.blockedOn = null);
		}
	}
	for (
		_i !== null && Do(_i, t),
			gi !== null && Do(gi, t),
			vi !== null && Do(vi, t),
			Tl.forEach(e),
			El.forEach(e),
			n = 0;
		n < oi.length;
		n++
	)
		(r = oi[n]), r.blockedOn === t && (r.blockedOn = null);
	for (; 0 < oi.length && ((n = oi[0]), n.blockedOn === null); )
		Q0(n), n.blockedOn === null && oi.shift();
}
var Js = Jr.ReactCurrentBatchConfig,
	aa = !0;
function uy(t, e, n, r) {
	var i = xe,
		s = Js.transition;
	Js.transition = null;
	try {
		(xe = 1), Bd(t, e, n, r);
	} finally {
		(xe = i), (Js.transition = s);
	}
}
function ay(t, e, n, r) {
	var i = xe,
		s = Js.transition;
	Js.transition = null;
	try {
		(xe = 4), Bd(t, e, n, r);
	} finally {
		(xe = i), (Js.transition = s);
	}
}
function Bd(t, e, n, r) {
	if (aa) {
		var i = Cf(t, e, n, r);
		if (i === null) Nc(t, e, r, ca, n), cp(t, r);
		else if (oy(i, t, e, n, r)) r.stopPropagation();
		else if ((cp(t, r), e & 4 && -1 < sy.indexOf(t))) {
			for (; i !== null; ) {
				var s = Kl(i);
				if (
					(s !== null && W0(s),
					(s = Cf(t, e, n, r)),
					s === null && Nc(t, e, r, ca, n),
					s === i)
				)
					break;
				i = s;
			}
			i !== null && r.stopPropagation();
		} else Nc(t, e, r, null, n);
	}
}
var ca = null;
function Cf(t, e, n, r) {
	if (((ca = null), (t = Id(r)), (t = Ki(t)), t !== null))
		if (((e = Ss(t)), e === null)) t = null;
		else if (((n = e.tag), n === 13)) {
			if (((t = z0(e)), t !== null)) return t;
			t = null;
		} else if (n === 3) {
			if (e.stateNode.current.memoizedState.isDehydrated)
				return e.tag === 3 ? e.stateNode.containerInfo : null;
			t = null;
		} else e !== t && (t = null);
	return (ca = t), null;
}
function X0(t) {
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
			switch (K1()) {
				case Vd:
					return 1;
				case V0:
					return 4;
				case la:
				case q1:
					return 16;
				case $0:
					return 536870912;
				default:
					return 16;
			}
		default:
			return 16;
	}
}
var ui = null,
	Wd = null,
	Vu = null;
function G0() {
	if (Vu) return Vu;
	var t,
		e = Wd,
		n = e.length,
		r,
		i = 'value' in ui ? ui.value : ui.textContent,
		s = i.length;
	for (t = 0; t < n && e[t] === i[t]; t++);
	var o = n - t;
	for (r = 1; r <= o && e[n - r] === i[s - r]; r++);
	return (Vu = i.slice(t, 1 < r ? 1 - r : void 0));
}
function $u(t) {
	var e = t.keyCode;
	return (
		'charCode' in t
			? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
			: (t = e),
		t === 10 && (t = 13),
		32 <= t || t === 13 ? t : 0
	);
}
function fu() {
	return !0;
}
function dp() {
	return !1;
}
function An(t) {
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
				? fu
				: dp),
			(this.isPropagationStopped = dp),
			this
		);
	}
	return (
		He(e.prototype, {
			preventDefault: function () {
				this.defaultPrevented = !0;
				var n = this.nativeEvent;
				n &&
					(n.preventDefault
						? n.preventDefault()
						: typeof n.returnValue != 'unknown' && (n.returnValue = !1),
					(this.isDefaultPrevented = fu));
			},
			stopPropagation: function () {
				var n = this.nativeEvent;
				n &&
					(n.stopPropagation
						? n.stopPropagation()
						: typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
					(this.isPropagationStopped = fu));
			},
			persist: function () {},
			isPersistent: fu,
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
	bd = An(To),
	Gl = He({}, To, { view: 0, detail: 0 }),
	cy = An(Gl),
	yc,
	xc,
	Ao,
	Qa = He({}, Gl, {
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
		getModifierState: Hd,
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
							? ((yc = t.screenX - Ao.screenX), (xc = t.screenY - Ao.screenY))
							: (xc = yc = 0),
						(Ao = t)),
					yc);
		},
		movementY: function (t) {
			return 'movementY' in t ? t.movementY : xc;
		},
	}),
	hp = An(Qa),
	fy = He({}, Qa, { dataTransfer: 0 }),
	dy = An(fy),
	hy = He({}, Gl, { relatedTarget: 0 }),
	wc = An(hy),
	py = He({}, To, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
	my = An(py),
	_y = He({}, To, {
		clipboardData: function (t) {
			return 'clipboardData' in t ? t.clipboardData : window.clipboardData;
		},
	}),
	gy = An(_y),
	vy = He({}, To, { data: 0 }),
	pp = An(vy),
	yy = {
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
	xy = {
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
	wy = {
		Alt: 'altKey',
		Control: 'ctrlKey',
		Meta: 'metaKey',
		Shift: 'shiftKey',
	};
function Sy(t) {
	var e = this.nativeEvent;
	return e.getModifierState ? e.getModifierState(t) : (t = wy[t]) ? !!e[t] : !1;
}
function Hd() {
	return Sy;
}
var ky = He({}, Gl, {
		key: function (t) {
			if (t.key) {
				var e = yy[t.key] || t.key;
				if (e !== 'Unidentified') return e;
			}
			return t.type === 'keypress'
				? ((t = $u(t)), t === 13 ? 'Enter' : String.fromCharCode(t))
				: t.type === 'keydown' || t.type === 'keyup'
					? xy[t.keyCode] || 'Unidentified'
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
		getModifierState: Hd,
		charCode: function (t) {
			return t.type === 'keypress' ? $u(t) : 0;
		},
		keyCode: function (t) {
			return t.type === 'keydown' || t.type === 'keyup' ? t.keyCode : 0;
		},
		which: function (t) {
			return t.type === 'keypress'
				? $u(t)
				: t.type === 'keydown' || t.type === 'keyup'
					? t.keyCode
					: 0;
		},
	}),
	Ty = An(ky),
	Ey = He({}, Qa, {
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
	mp = An(Ey),
	Cy = He({}, Gl, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: Hd,
	}),
	Py = An(Cy),
	Ny = He({}, To, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
	jy = An(Ny),
	Oy = He({}, Qa, {
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
	My = An(Oy),
	Ry = [9, 13, 27, 32],
	Yd = Qr && 'CompositionEvent' in window,
	tl = null;
Qr && 'documentMode' in document && (tl = document.documentMode);
var Dy = Qr && 'TextEvent' in window && !tl,
	K0 = Qr && (!Yd || (tl && 8 < tl && 11 >= tl)),
	_p = ' ',
	gp = !1;
function q0(t, e) {
	switch (t) {
		case 'keyup':
			return Ry.indexOf(e.keyCode) !== -1;
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
function Z0(t) {
	return (t = t.detail), typeof t == 'object' && 'data' in t ? t.data : null;
}
var Ls = !1;
function Ay(t, e) {
	switch (t) {
		case 'compositionend':
			return Z0(e);
		case 'keypress':
			return e.which !== 32 ? null : ((gp = !0), _p);
		case 'textInput':
			return (t = e.data), t === _p && gp ? null : t;
		default:
			return null;
	}
}
function zy(t, e) {
	if (Ls)
		return t === 'compositionend' || (!Yd && q0(t, e))
			? ((t = G0()), (Vu = Wd = ui = null), (Ls = !1), t)
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
			return K0 && e.locale !== 'ko' ? null : e.data;
		default:
			return null;
	}
}
var Ly = {
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
function vp(t) {
	var e = t && t.nodeName && t.nodeName.toLowerCase();
	return e === 'input' ? !!Ly[t.type] : e === 'textarea';
}
function J0(t, e, n, r) {
	O0(r),
		(e = fa(e, 'onChange')),
		0 < e.length &&
			((n = new bd('onChange', 'change', null, n, r)),
			t.push({ event: n, listeners: e }));
}
var nl = null,
	Pl = null;
function Fy(t) {
	c_(t, 0);
}
function Xa(t) {
	var e = Vs(t);
	if (k0(e)) return t;
}
function Iy(t, e) {
	if (t === 'change') return e;
}
var e_ = !1;
if (Qr) {
	var Sc;
	if (Qr) {
		var kc = 'oninput' in document;
		if (!kc) {
			var yp = document.createElement('div');
			yp.setAttribute('oninput', 'return;'),
				(kc = typeof yp.oninput == 'function');
		}
		Sc = kc;
	} else Sc = !1;
	e_ = Sc && (!document.documentMode || 9 < document.documentMode);
}
function xp() {
	nl && (nl.detachEvent('onpropertychange', t_), (Pl = nl = null));
}
function t_(t) {
	if (t.propertyName === 'value' && Xa(Pl)) {
		var e = [];
		J0(e, Pl, t, Id(t)), A0(Fy, e);
	}
}
function Vy(t, e, n) {
	t === 'focusin'
		? (xp(), (nl = e), (Pl = n), nl.attachEvent('onpropertychange', t_))
		: t === 'focusout' && xp();
}
function $y(t) {
	if (t === 'selectionchange' || t === 'keyup' || t === 'keydown')
		return Xa(Pl);
}
function Uy(t, e) {
	if (t === 'click') return Xa(e);
}
function By(t, e) {
	if (t === 'input' || t === 'change') return Xa(e);
}
function Wy(t, e) {
	return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
}
var dr = typeof Object.is == 'function' ? Object.is : Wy;
function Nl(t, e) {
	if (dr(t, e)) return !0;
	if (typeof t != 'object' || t === null || typeof e != 'object' || e === null)
		return !1;
	var n = Object.keys(t),
		r = Object.keys(e);
	if (n.length !== r.length) return !1;
	for (r = 0; r < n.length; r++) {
		var i = n[r];
		if (!uf.call(e, i) || !dr(t[i], e[i])) return !1;
	}
	return !0;
}
function wp(t) {
	for (; t && t.firstChild; ) t = t.firstChild;
	return t;
}
function Sp(t, e) {
	var n = wp(t);
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
		n = wp(n);
	}
}
function n_(t, e) {
	return t && e
		? t === e
			? !0
			: t && t.nodeType === 3
				? !1
				: e && e.nodeType === 3
					? n_(t, e.parentNode)
					: 'contains' in t
						? t.contains(e)
						: t.compareDocumentPosition
							? !!(t.compareDocumentPosition(e) & 16)
							: !1
		: !1;
}
function r_() {
	for (var t = window, e = ia(); e instanceof t.HTMLIFrameElement; ) {
		try {
			var n = typeof e.contentWindow.location.href == 'string';
		} catch {
			n = !1;
		}
		if (n) t = e.contentWindow;
		else break;
		e = ia(t.document);
	}
	return e;
}
function Qd(t) {
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
function by(t) {
	var e = r_(),
		n = t.focusedElem,
		r = t.selectionRange;
	if (
		e !== n &&
		n &&
		n.ownerDocument &&
		n_(n.ownerDocument.documentElement, n)
	) {
		if (r !== null && Qd(n)) {
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
					(i = Sp(n, s));
				var o = Sp(n, r);
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
var Hy = Qr && 'documentMode' in document && 11 >= document.documentMode,
	Fs = null,
	Pf = null,
	rl = null,
	Nf = !1;
function kp(t, e, n) {
	var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
	Nf ||
		Fs == null ||
		Fs !== ia(r) ||
		((r = Fs),
		'selectionStart' in r && Qd(r)
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
		(rl && Nl(rl, r)) ||
			((rl = r),
			(r = fa(Pf, 'onSelect')),
			0 < r.length &&
				((e = new bd('onSelect', 'select', null, e, n)),
				t.push({ event: e, listeners: r }),
				(e.target = Fs))));
}
function du(t, e) {
	var n = {};
	return (
		(n[t.toLowerCase()] = e.toLowerCase()),
		(n['Webkit' + t] = 'webkit' + e),
		(n['Moz' + t] = 'moz' + e),
		n
	);
}
var Is = {
		animationend: du('Animation', 'AnimationEnd'),
		animationiteration: du('Animation', 'AnimationIteration'),
		animationstart: du('Animation', 'AnimationStart'),
		transitionend: du('Transition', 'TransitionEnd'),
	},
	Tc = {},
	i_ = {};
Qr &&
	((i_ = document.createElement('div').style),
	'AnimationEvent' in window ||
		(delete Is.animationend.animation,
		delete Is.animationiteration.animation,
		delete Is.animationstart.animation),
	'TransitionEvent' in window || delete Is.transitionend.transition);
function Ga(t) {
	if (Tc[t]) return Tc[t];
	if (!Is[t]) return t;
	var e = Is[t],
		n;
	for (n in e) if (e.hasOwnProperty(n) && n in i_) return (Tc[t] = e[n]);
	return t;
}
var s_ = Ga('animationend'),
	o_ = Ga('animationiteration'),
	l_ = Ga('animationstart'),
	u_ = Ga('transitionend'),
	a_ = new Map(),
	Tp =
		'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
			' ',
		);
function Ri(t, e) {
	a_.set(t, e), ws(e, [t]);
}
for (var Ec = 0; Ec < Tp.length; Ec++) {
	var Cc = Tp[Ec],
		Yy = Cc.toLowerCase(),
		Qy = Cc[0].toUpperCase() + Cc.slice(1);
	Ri(Yy, 'on' + Qy);
}
Ri(s_, 'onAnimationEnd');
Ri(o_, 'onAnimationIteration');
Ri(l_, 'onAnimationStart');
Ri('dblclick', 'onDoubleClick');
Ri('focusin', 'onFocus');
Ri('focusout', 'onBlur');
Ri(u_, 'onTransitionEnd');
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
var Ho =
		'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
			' ',
		),
	Xy = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Ho));
function Ep(t, e, n) {
	var r = t.type || 'unknown-event';
	(t.currentTarget = n), Y1(r, e, void 0, t), (t.currentTarget = null);
}
function c_(t, e) {
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
					Ep(i, l, a), (s = u);
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
					Ep(i, l, a), (s = u);
				}
		}
	}
	if (oa) throw ((t = kf), (oa = !1), (kf = null), t);
}
function Pe(t, e) {
	var n = e[Df];
	n === void 0 && (n = e[Df] = new Set());
	var r = t + '__bubble';
	n.has(r) || (f_(e, t, 2, !1), n.add(r));
}
function Pc(t, e, n) {
	var r = 0;
	e && (r |= 4), f_(n, t, r, e);
}
var hu = '_reactListening' + Math.random().toString(36).slice(2);
function jl(t) {
	if (!t[hu]) {
		(t[hu] = !0),
			v0.forEach(function (n) {
				n !== 'selectionchange' && (Xy.has(n) || Pc(n, !1, t), Pc(n, !0, t));
			});
		var e = t.nodeType === 9 ? t : t.ownerDocument;
		e === null || e[hu] || ((e[hu] = !0), Pc('selectionchange', !1, e));
	}
}
function f_(t, e, n, r) {
	switch (X0(e)) {
		case 1:
			var i = uy;
			break;
		case 4:
			i = ay;
			break;
		default:
			i = Bd;
	}
	(n = i.bind(null, e, n, t)),
		(i = void 0),
		!Sf ||
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
function Nc(t, e, n, r, i) {
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
	A0(function () {
		var a = s,
			c = Id(n),
			d = [];
		e: {
			var f = a_.get(t);
			if (f !== void 0) {
				var h = bd,
					v = t;
				switch (t) {
					case 'keypress':
						if ($u(n) === 0) break e;
					case 'keydown':
					case 'keyup':
						h = Ty;
						break;
					case 'focusin':
						(v = 'focus'), (h = wc);
						break;
					case 'focusout':
						(v = 'blur'), (h = wc);
						break;
					case 'beforeblur':
					case 'afterblur':
						h = wc;
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
						h = hp;
						break;
					case 'drag':
					case 'dragend':
					case 'dragenter':
					case 'dragexit':
					case 'dragleave':
					case 'dragover':
					case 'dragstart':
					case 'drop':
						h = dy;
						break;
					case 'touchcancel':
					case 'touchend':
					case 'touchmove':
					case 'touchstart':
						h = Py;
						break;
					case s_:
					case o_:
					case l_:
						h = my;
						break;
					case u_:
						h = jy;
						break;
					case 'scroll':
						h = cy;
						break;
					case 'wheel':
						h = My;
						break;
					case 'copy':
					case 'cut':
					case 'paste':
						h = gy;
						break;
					case 'gotpointercapture':
					case 'lostpointercapture':
					case 'pointercancel':
					case 'pointerdown':
					case 'pointermove':
					case 'pointerout':
					case 'pointerover':
					case 'pointerup':
						h = mp;
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
							_ !== null && ((x = kl(p, _)), x != null && m.push(Ol(p, x, y)))),
						T)
					)
						break;
					p = p.return;
				}
				0 < m.length &&
					((f = new h(f, v, null, n, c)), d.push({ event: f, listeners: m }));
			}
		}
		if (!(e & 7)) {
			e: {
				if (
					((f = t === 'mouseover' || t === 'pointerover'),
					(h = t === 'mouseout' || t === 'pointerout'),
					f &&
						n !== xf &&
						(v = n.relatedTarget || n.fromElement) &&
						(Ki(v) || v[Xr]))
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
						? ((v = n.relatedTarget || n.toElement),
							(h = a),
							(v = v ? Ki(v) : null),
							v !== null &&
								((T = Ss(v)), v !== T || (v.tag !== 5 && v.tag !== 6)) &&
								(v = null))
						: ((h = null), (v = a)),
					h !== v)
				) {
					if (
						((m = hp),
						(x = 'onMouseLeave'),
						(_ = 'onMouseEnter'),
						(p = 'mouse'),
						(t === 'pointerout' || t === 'pointerover') &&
							((m = mp),
							(x = 'onPointerLeave'),
							(_ = 'onPointerEnter'),
							(p = 'pointer')),
						(T = h == null ? f : Vs(h)),
						(y = v == null ? f : Vs(v)),
						(f = new m(x, p + 'leave', h, n, c)),
						(f.target = T),
						(f.relatedTarget = y),
						(x = null),
						Ki(c) === a &&
							((m = new m(_, p + 'enter', v, n, c)),
							(m.target = y),
							(m.relatedTarget = T),
							(x = m)),
						(T = x),
						h && v)
					)
						t: {
							for (m = h, _ = v, p = 0, y = m; y; y = Cs(y)) p++;
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
					h !== null && Cp(d, f, h, m, !1),
						v !== null && T !== null && Cp(d, T, v, m, !0);
				}
			}
			e: {
				if (
					((f = a ? Vs(a) : window),
					(h = f.nodeName && f.nodeName.toLowerCase()),
					h === 'select' || (h === 'input' && f.type === 'file'))
				)
					var k = Iy;
				else if (vp(f))
					if (e_) k = By;
					else {
						k = $y;
						var C = Vy;
					}
				else
					(h = f.nodeName) &&
						h.toLowerCase() === 'input' &&
						(f.type === 'checkbox' || f.type === 'radio') &&
						(k = Uy);
				if (k && (k = k(t, a))) {
					J0(d, k, n, c);
					break e;
				}
				C && C(t, f, a),
					t === 'focusout' &&
						(C = f._wrapperState) &&
						C.controlled &&
						f.type === 'number' &&
						mf(f, 'number', f.value);
			}
			switch (((C = a ? Vs(a) : window), t)) {
				case 'focusin':
					(vp(C) || C.contentEditable === 'true') &&
						((Fs = C), (Pf = a), (rl = null));
					break;
				case 'focusout':
					rl = Pf = Fs = null;
					break;
				case 'mousedown':
					Nf = !0;
					break;
				case 'contextmenu':
				case 'mouseup':
				case 'dragend':
					(Nf = !1), kp(d, n, c);
					break;
				case 'selectionchange':
					if (Hy) break;
				case 'keydown':
				case 'keyup':
					kp(d, n, c);
			}
			var E;
			if (Yd)
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
				Ls
					? q0(t, n) && (N = 'onCompositionEnd')
					: t === 'keydown' && n.keyCode === 229 && (N = 'onCompositionStart');
			N &&
				(K0 &&
					n.locale !== 'ko' &&
					(Ls || N !== 'onCompositionStart'
						? N === 'onCompositionEnd' && Ls && (E = G0())
						: ((ui = c),
							(Wd = 'value' in ui ? ui.value : ui.textContent),
							(Ls = !0))),
				(C = fa(a, N)),
				0 < C.length &&
					((N = new pp(N, t, null, n, c)),
					d.push({ event: N, listeners: C }),
					E ? (N.data = E) : ((E = Z0(n)), E !== null && (N.data = E)))),
				(E = Dy ? Ay(t, n) : zy(t, n)) &&
					((a = fa(a, 'onBeforeInput')),
					0 < a.length &&
						((c = new pp('onBeforeInput', 'beforeinput', null, n, c)),
						d.push({ event: c, listeners: a }),
						(c.data = E)));
		}
		c_(d, e);
	});
}
function Ol(t, e, n) {
	return { instance: t, listener: e, currentTarget: n };
}
function fa(t, e) {
	for (var n = e + 'Capture', r = []; t !== null; ) {
		var i = t,
			s = i.stateNode;
		i.tag === 5 &&
			s !== null &&
			((i = s),
			(s = kl(t, n)),
			s != null && r.unshift(Ol(t, s, i)),
			(s = kl(t, e)),
			s != null && r.push(Ol(t, s, i))),
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
function Cp(t, e, n, r, i) {
	for (var s = e._reactName, o = []; n !== null && n !== r; ) {
		var l = n,
			u = l.alternate,
			a = l.stateNode;
		if (u !== null && u === r) break;
		l.tag === 5 &&
			a !== null &&
			((l = a),
			i
				? ((u = kl(n, s)), u != null && o.unshift(Ol(n, u, l)))
				: i || ((u = kl(n, s)), u != null && o.push(Ol(n, u, l)))),
			(n = n.return);
	}
	o.length !== 0 && t.push({ event: e, listeners: o });
}
var Gy = /\r\n?/g,
	Ky = /\u0000|\uFFFD/g;
function Pp(t) {
	return (typeof t == 'string' ? t : '' + t)
		.replace(
			Gy,
			`
`,
		)
		.replace(Ky, '');
}
function pu(t, e, n) {
	if (((e = Pp(e)), Pp(t) !== e && n)) throw Error(L(425));
}
function da() {}
var jf = null,
	Of = null;
function Mf(t, e) {
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
var Rf = typeof setTimeout == 'function' ? setTimeout : void 0,
	qy = typeof clearTimeout == 'function' ? clearTimeout : void 0,
	Np = typeof Promise == 'function' ? Promise : void 0,
	Zy =
		typeof queueMicrotask == 'function'
			? queueMicrotask
			: typeof Np < 'u'
				? function (t) {
						return Np.resolve(null).then(t).catch(Jy);
					}
				: Rf;
function Jy(t) {
	setTimeout(function () {
		throw t;
	});
}
function jc(t, e) {
	var n = e,
		r = 0;
	do {
		var i = n.nextSibling;
		if ((t.removeChild(n), i && i.nodeType === 8))
			if (((n = i.data), n === '/$')) {
				if (r === 0) {
					t.removeChild(i), Cl(e);
					return;
				}
				r--;
			} else (n !== '$' && n !== '$?' && n !== '$!') || r++;
		n = i;
	} while (n);
	Cl(e);
}
function yi(t) {
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
function jp(t) {
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
	wr = '__reactFiber$' + Eo,
	Ml = '__reactProps$' + Eo,
	Xr = '__reactContainer$' + Eo,
	Df = '__reactEvents$' + Eo,
	ex = '__reactListeners$' + Eo,
	tx = '__reactHandles$' + Eo;
function Ki(t) {
	var e = t[wr];
	if (e) return e;
	for (var n = t.parentNode; n; ) {
		if ((e = n[Xr] || n[wr])) {
			if (
				((n = e.alternate),
				e.child !== null || (n !== null && n.child !== null))
			)
				for (t = jp(t); t !== null; ) {
					if ((n = t[wr])) return n;
					t = jp(t);
				}
			return e;
		}
		(t = n), (n = t.parentNode);
	}
	return null;
}
function Kl(t) {
	return (
		(t = t[wr] || t[Xr]),
		!t || (t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3) ? null : t
	);
}
function Vs(t) {
	if (t.tag === 5 || t.tag === 6) return t.stateNode;
	throw Error(L(33));
}
function Ka(t) {
	return t[Ml] || null;
}
var Af = [],
	$s = -1;
function Di(t) {
	return { current: t };
}
function je(t) {
	0 > $s || ((t.current = Af[$s]), (Af[$s] = null), $s--);
}
function Te(t, e) {
	$s++, (Af[$s] = t.current), (t.current = e);
}
var Ni = {},
	bt = Di(Ni),
	dn = Di(!1),
	fs = Ni;
function ao(t, e) {
	var n = t.type.contextTypes;
	if (!n) return Ni;
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
function hn(t) {
	return (t = t.childContextTypes), t != null;
}
function ha() {
	je(dn), je(bt);
}
function Op(t, e, n) {
	if (bt.current !== Ni) throw Error(L(168));
	Te(bt, e), Te(dn, n);
}
function d_(t, e, n) {
	var r = t.stateNode;
	if (((e = e.childContextTypes), typeof r.getChildContext != 'function'))
		return n;
	r = r.getChildContext();
	for (var i in r) if (!(i in e)) throw Error(L(108, V1(t) || 'Unknown', i));
	return He({}, n, r);
}
function pa(t) {
	return (
		(t =
			((t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext) || Ni),
		(fs = bt.current),
		Te(bt, t),
		Te(dn, dn.current),
		!0
	);
}
function Mp(t, e, n) {
	var r = t.stateNode;
	if (!r) throw Error(L(169));
	n
		? ((t = d_(t, e, fs)),
			(r.__reactInternalMemoizedMergedChildContext = t),
			je(dn),
			je(bt),
			Te(bt, t))
		: je(dn),
		Te(dn, n);
}
var Ir = null,
	qa = !1,
	Oc = !1;
function h_(t) {
	Ir === null ? (Ir = [t]) : Ir.push(t);
}
function nx(t) {
	(qa = !0), h_(t);
}
function Ai() {
	if (!Oc && Ir !== null) {
		Oc = !0;
		var t = 0,
			e = xe;
		try {
			var n = Ir;
			for (xe = 1; t < n.length; t++) {
				var r = n[t];
				do r = r(!0);
				while (r !== null);
			}
			(Ir = null), (qa = !1);
		} catch (i) {
			throw (Ir !== null && (Ir = Ir.slice(t + 1)), I0(Vd, Ai), i);
		} finally {
			(xe = e), (Oc = !1);
		}
	}
	return null;
}
var Us = [],
	Bs = 0,
	ma = null,
	_a = 0,
	In = [],
	Vn = 0,
	ds = null,
	Br = 1,
	Wr = '';
function Hi(t, e) {
	(Us[Bs++] = _a), (Us[Bs++] = ma), (ma = t), (_a = e);
}
function p_(t, e, n) {
	(In[Vn++] = Br), (In[Vn++] = Wr), (In[Vn++] = ds), (ds = t);
	var r = Br;
	t = Wr;
	var i = 32 - cr(r) - 1;
	(r &= ~(1 << i)), (n += 1);
	var s = 32 - cr(e) + i;
	if (30 < s) {
		var o = i - (i % 5);
		(s = (r & ((1 << o) - 1)).toString(32)),
			(r >>= o),
			(i -= o),
			(Br = (1 << (32 - cr(e) + i)) | (n << i) | r),
			(Wr = s + t);
	} else (Br = (1 << s) | (n << i) | r), (Wr = t);
}
function Xd(t) {
	t.return !== null && (Hi(t, 1), p_(t, 1, 0));
}
function Gd(t) {
	for (; t === ma; )
		(ma = Us[--Bs]), (Us[Bs] = null), (_a = Us[--Bs]), (Us[Bs] = null);
	for (; t === ds; )
		(ds = In[--Vn]),
			(In[Vn] = null),
			(Wr = In[--Vn]),
			(In[Vn] = null),
			(Br = In[--Vn]),
			(In[Vn] = null);
}
var jn = null,
	Pn = null,
	ze = !1,
	lr = null;
function m_(t, e) {
	var n = Bn(5, null, null, 0);
	(n.elementType = 'DELETED'),
		(n.stateNode = e),
		(n.return = t),
		(e = t.deletions),
		e === null ? ((t.deletions = [n]), (t.flags |= 16)) : e.push(n);
}
function Rp(t, e) {
	switch (t.tag) {
		case 5:
			var n = t.type;
			return (
				(e =
					e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase()
						? null
						: e),
				e !== null
					? ((t.stateNode = e), (jn = t), (Pn = yi(e.firstChild)), !0)
					: !1
			);
		case 6:
			return (
				(e = t.pendingProps === '' || e.nodeType !== 3 ? null : e),
				e !== null ? ((t.stateNode = e), (jn = t), (Pn = null), !0) : !1
			);
		case 13:
			return (
				(e = e.nodeType !== 8 ? null : e),
				e !== null
					? ((n = ds !== null ? { id: Br, overflow: Wr } : null),
						(t.memoizedState = {
							dehydrated: e,
							treeContext: n,
							retryLane: 1073741824,
						}),
						(n = Bn(18, null, null, 0)),
						(n.stateNode = e),
						(n.return = t),
						(t.child = n),
						(jn = t),
						(Pn = null),
						!0)
					: !1
			);
		default:
			return !1;
	}
}
function zf(t) {
	return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
}
function Lf(t) {
	if (ze) {
		var e = Pn;
		if (e) {
			var n = e;
			if (!Rp(t, e)) {
				if (zf(t)) throw Error(L(418));
				e = yi(n.nextSibling);
				var r = jn;
				e && Rp(t, e)
					? m_(r, n)
					: ((t.flags = (t.flags & -4097) | 2), (ze = !1), (jn = t));
			}
		} else {
			if (zf(t)) throw Error(L(418));
			(t.flags = (t.flags & -4097) | 2), (ze = !1), (jn = t);
		}
	}
}
function Dp(t) {
	for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; )
		t = t.return;
	jn = t;
}
function mu(t) {
	if (t !== jn) return !1;
	if (!ze) return Dp(t), (ze = !0), !1;
	var e;
	if (
		((e = t.tag !== 3) &&
			!(e = t.tag !== 5) &&
			((e = t.type),
			(e = e !== 'head' && e !== 'body' && !Mf(t.type, t.memoizedProps))),
		e && (e = Pn))
	) {
		if (zf(t)) throw (__(), Error(L(418)));
		for (; e; ) m_(t, e), (e = yi(e.nextSibling));
	}
	if ((Dp(t), t.tag === 13)) {
		if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
			throw Error(L(317));
		e: {
			for (t = t.nextSibling, e = 0; t; ) {
				if (t.nodeType === 8) {
					var n = t.data;
					if (n === '/$') {
						if (e === 0) {
							Pn = yi(t.nextSibling);
							break e;
						}
						e--;
					} else (n !== '$' && n !== '$!' && n !== '$?') || e++;
				}
				t = t.nextSibling;
			}
			Pn = null;
		}
	} else Pn = jn ? yi(t.stateNode.nextSibling) : null;
	return !0;
}
function __() {
	for (var t = Pn; t; ) t = yi(t.nextSibling);
}
function co() {
	(Pn = jn = null), (ze = !1);
}
function Kd(t) {
	lr === null ? (lr = [t]) : lr.push(t);
}
var rx = Jr.ReactCurrentBatchConfig;
function sr(t, e) {
	if (t && t.defaultProps) {
		(e = He({}, e)), (t = t.defaultProps);
		for (var n in t) e[n] === void 0 && (e[n] = t[n]);
		return e;
	}
	return e;
}
var ga = Di(null),
	va = null,
	Ws = null,
	qd = null;
function Zd() {
	qd = Ws = va = null;
}
function Jd(t) {
	var e = ga.current;
	je(ga), (t._currentValue = e);
}
function Ff(t, e, n) {
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
	(va = t),
		(qd = Ws = null),
		(t = t.dependencies),
		t !== null &&
			t.firstContext !== null &&
			(t.lanes & e && (fn = !0), (t.firstContext = null));
}
function Qn(t) {
	var e = t._currentValue;
	if (qd !== t)
		if (((t = { context: t, memoizedValue: e, next: null }), Ws === null)) {
			if (va === null) throw Error(L(308));
			(Ws = t), (va.dependencies = { lanes: 0, firstContext: t });
		} else Ws = Ws.next = t;
	return e;
}
var qi = null;
function eh(t) {
	qi === null ? (qi = [t]) : qi.push(t);
}
function g_(t, e, n, r) {
	var i = e.interleaved;
	return (
		i === null ? ((n.next = n), eh(e)) : ((n.next = i.next), (i.next = n)),
		(e.interleaved = n),
		Gr(t, r)
	);
}
function Gr(t, e) {
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
var si = !1;
function th(t) {
	t.updateQueue = {
		baseState: t.memoizedState,
		firstBaseUpdate: null,
		lastBaseUpdate: null,
		shared: { pending: null, interleaved: null, lanes: 0 },
		effects: null,
	};
}
function v_(t, e) {
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
function Hr(t, e) {
	return {
		eventTime: t,
		lane: e,
		tag: 0,
		payload: null,
		callback: null,
		next: null,
	};
}
function xi(t, e, n) {
	var r = t.updateQueue;
	if (r === null) return null;
	if (((r = r.shared), _e & 2)) {
		var i = r.pending;
		return (
			i === null ? (e.next = e) : ((e.next = i.next), (i.next = e)),
			(r.pending = e),
			Gr(t, n)
		);
	}
	return (
		(i = r.interleaved),
		i === null ? ((e.next = e), eh(r)) : ((e.next = i.next), (i.next = e)),
		(r.interleaved = e),
		Gr(t, n)
	);
}
function Uu(t, e, n) {
	if (
		((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194240) !== 0))
	) {
		var r = e.lanes;
		(r &= t.pendingLanes), (n |= r), (e.lanes = n), $d(t, n);
	}
}
function Ap(t, e) {
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
function ya(t, e, n, r) {
	var i = t.updateQueue;
	si = !1;
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
					var v = t,
						m = l;
					switch (((f = e), (h = n), m.tag)) {
						case 1:
							if (((v = m.payload), typeof v == 'function')) {
								d = v.call(h, d, f);
								break e;
							}
							d = v;
							break e;
						case 3:
							v.flags = (v.flags & -65537) | 128;
						case 0:
							if (
								((v = m.payload),
								(f = typeof v == 'function' ? v.call(h, d, f) : v),
								f == null)
							)
								break e;
							d = He({}, d, f);
							break e;
						case 2:
							si = !0;
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
function zp(t, e, n) {
	if (((t = e.effects), (e.effects = null), t !== null))
		for (e = 0; e < t.length; e++) {
			var r = t[e],
				i = r.callback;
			if (i !== null) {
				if (((r.callback = null), (r = n), typeof i != 'function'))
					throw Error(L(191, i));
				i.call(r);
			}
		}
}
var y_ = new g0.Component().refs;
function If(t, e, n, r) {
	(e = t.memoizedState),
		(n = n(r, e)),
		(n = n == null ? e : He({}, e, n)),
		(t.memoizedState = n),
		t.lanes === 0 && (t.updateQueue.baseState = n);
}
var Za = {
	isMounted: function (t) {
		return (t = t._reactInternals) ? Ss(t) === t : !1;
	},
	enqueueSetState: function (t, e, n) {
		t = t._reactInternals;
		var r = nn(),
			i = Si(t),
			s = Hr(r, i);
		(s.payload = e),
			n != null && (s.callback = n),
			(e = xi(t, s, i)),
			e !== null && (fr(e, t, i, r), Uu(e, t, i));
	},
	enqueueReplaceState: function (t, e, n) {
		t = t._reactInternals;
		var r = nn(),
			i = Si(t),
			s = Hr(r, i);
		(s.tag = 1),
			(s.payload = e),
			n != null && (s.callback = n),
			(e = xi(t, s, i)),
			e !== null && (fr(e, t, i, r), Uu(e, t, i));
	},
	enqueueForceUpdate: function (t, e) {
		t = t._reactInternals;
		var n = nn(),
			r = Si(t),
			i = Hr(n, r);
		(i.tag = 2),
			e != null && (i.callback = e),
			(e = xi(t, i, r)),
			e !== null && (fr(e, t, r, n), Uu(e, t, r));
	},
};
function Lp(t, e, n, r, i, s, o) {
	return (
		(t = t.stateNode),
		typeof t.shouldComponentUpdate == 'function'
			? t.shouldComponentUpdate(r, s, o)
			: e.prototype && e.prototype.isPureReactComponent
				? !Nl(n, r) || !Nl(i, s)
				: !0
	);
}
function x_(t, e, n) {
	var r = !1,
		i = Ni,
		s = e.contextType;
	return (
		typeof s == 'object' && s !== null
			? (s = Qn(s))
			: ((i = hn(e) ? fs : bt.current),
				(r = e.contextTypes),
				(s = (r = r != null) ? ao(t, i) : Ni)),
		(e = new e(n, s)),
		(t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null),
		(e.updater = Za),
		(t.stateNode = e),
		(e._reactInternals = t),
		r &&
			((t = t.stateNode),
			(t.__reactInternalMemoizedUnmaskedChildContext = i),
			(t.__reactInternalMemoizedMaskedChildContext = s)),
		e
	);
}
function Fp(t, e, n, r) {
	(t = e.state),
		typeof e.componentWillReceiveProps == 'function' &&
			e.componentWillReceiveProps(n, r),
		typeof e.UNSAFE_componentWillReceiveProps == 'function' &&
			e.UNSAFE_componentWillReceiveProps(n, r),
		e.state !== t && Za.enqueueReplaceState(e, e.state, null);
}
function Vf(t, e, n, r) {
	var i = t.stateNode;
	(i.props = n), (i.state = t.memoizedState), (i.refs = y_), th(t);
	var s = e.contextType;
	typeof s == 'object' && s !== null
		? (i.context = Qn(s))
		: ((s = hn(e) ? fs : bt.current), (i.context = ao(t, s))),
		(i.state = t.memoizedState),
		(s = e.getDerivedStateFromProps),
		typeof s == 'function' && (If(t, e, s, n), (i.state = t.memoizedState)),
		typeof e.getDerivedStateFromProps == 'function' ||
			typeof i.getSnapshotBeforeUpdate == 'function' ||
			(typeof i.UNSAFE_componentWillMount != 'function' &&
				typeof i.componentWillMount != 'function') ||
			((e = i.state),
			typeof i.componentWillMount == 'function' && i.componentWillMount(),
			typeof i.UNSAFE_componentWillMount == 'function' &&
				i.UNSAFE_componentWillMount(),
			e !== i.state && Za.enqueueReplaceState(i, i.state, null),
			ya(t, n, i, r),
			(i.state = t.memoizedState)),
		typeof i.componentDidMount == 'function' && (t.flags |= 4194308);
}
function zo(t, e, n) {
	if (
		((t = n.ref), t !== null && typeof t != 'function' && typeof t != 'object')
	) {
		if (n._owner) {
			if (((n = n._owner), n)) {
				if (n.tag !== 1) throw Error(L(309));
				var r = n.stateNode;
			}
			if (!r) throw Error(L(147, t));
			var i = r,
				s = '' + t;
			return e !== null &&
				e.ref !== null &&
				typeof e.ref == 'function' &&
				e.ref._stringRef === s
				? e.ref
				: ((e = function (o) {
						var l = i.refs;
						l === y_ && (l = i.refs = {}),
							o === null ? delete l[s] : (l[s] = o);
					}),
					(e._stringRef = s),
					e);
		}
		if (typeof t != 'string') throw Error(L(284));
		if (!n._owner) throw Error(L(290, t));
	}
	return t;
}
function _u(t, e) {
	throw (
		((t = Object.prototype.toString.call(e)),
		Error(
			L(
				31,
				t === '[object Object]'
					? 'object with keys {' + Object.keys(e).join(', ') + '}'
					: t,
			),
		))
	);
}
function Ip(t) {
	var e = t._init;
	return e(t._payload);
}
function w_(t) {
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
		return (_ = ki(_, p)), (_.index = 0), (_.sibling = null), _;
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
			? ((p = Fc(y, _.mode, x)), (p.return = _), p)
			: ((p = i(p, y)), (p.return = _), p);
	}
	function u(_, p, y, x) {
		var k = y.type;
		return k === zs
			? c(_, p, y.props.children, x, y.key)
			: p !== null &&
				  (p.elementType === k ||
						(typeof k == 'object' &&
							k !== null &&
							k.$$typeof === ii &&
							Ip(k) === p.type))
				? ((x = i(p, y.props)), (x.ref = zo(_, p, y)), (x.return = _), x)
				: ((x = Qu(y.type, y.key, y.props, null, _.mode, x)),
					(x.ref = zo(_, p, y)),
					(x.return = _),
					x);
	}
	function a(_, p, y, x) {
		return p === null ||
			p.tag !== 4 ||
			p.stateNode.containerInfo !== y.containerInfo ||
			p.stateNode.implementation !== y.implementation
			? ((p = Ic(y, _.mode, x)), (p.return = _), p)
			: ((p = i(p, y.children || [])), (p.return = _), p);
	}
	function c(_, p, y, x, k) {
		return p === null || p.tag !== 7
			? ((p = rs(y, _.mode, x, k)), (p.return = _), p)
			: ((p = i(p, y)), (p.return = _), p);
	}
	function d(_, p, y) {
		if ((typeof p == 'string' && p !== '') || typeof p == 'number')
			return (p = Fc('' + p, _.mode, y)), (p.return = _), p;
		if (typeof p == 'object' && p !== null) {
			switch (p.$$typeof) {
				case su:
					return (
						(y = Qu(p.type, p.key, p.props, null, _.mode, y)),
						(y.ref = zo(_, null, p)),
						(y.return = _),
						y
					);
				case As:
					return (p = Ic(p, _.mode, y)), (p.return = _), p;
				case ii:
					var x = p._init;
					return d(_, x(p._payload), y);
			}
			if (Wo(p) || Oo(p))
				return (p = rs(p, _.mode, y, null)), (p.return = _), p;
			_u(_, p);
		}
		return null;
	}
	function f(_, p, y, x) {
		var k = p !== null ? p.key : null;
		if ((typeof y == 'string' && y !== '') || typeof y == 'number')
			return k !== null ? null : l(_, p, '' + y, x);
		if (typeof y == 'object' && y !== null) {
			switch (y.$$typeof) {
				case su:
					return y.key === k ? u(_, p, y, x) : null;
				case As:
					return y.key === k ? a(_, p, y, x) : null;
				case ii:
					return (k = y._init), f(_, p, k(y._payload), x);
			}
			if (Wo(y) || Oo(y)) return k !== null ? null : c(_, p, y, x, null);
			_u(_, y);
		}
		return null;
	}
	function h(_, p, y, x, k) {
		if ((typeof x == 'string' && x !== '') || typeof x == 'number')
			return (_ = _.get(y) || null), l(p, _, '' + x, k);
		if (typeof x == 'object' && x !== null) {
			switch (x.$$typeof) {
				case su:
					return (_ = _.get(x.key === null ? y : x.key) || null), u(p, _, x, k);
				case As:
					return (_ = _.get(x.key === null ? y : x.key) || null), a(p, _, x, k);
				case ii:
					var C = x._init;
					return h(_, p, y, C(x._payload), k);
			}
			if (Wo(x) || Oo(x)) return (_ = _.get(y) || null), c(p, _, x, k, null);
			_u(p, x);
		}
		return null;
	}
	function v(_, p, y, x) {
		for (
			var k = null, C = null, E = p, N = (p = 0), M = null;
			E !== null && N < y.length;
			N++
		) {
			E.index > N ? ((M = E), (E = null)) : (M = E.sibling);
			var O = f(_, E, y[N], x);
			if (O === null) {
				E === null && (E = M);
				break;
			}
			t && E && O.alternate === null && e(_, E),
				(p = s(O, p, N)),
				C === null ? (k = O) : (C.sibling = O),
				(C = O),
				(E = M);
		}
		if (N === y.length) return n(_, E), ze && Hi(_, N), k;
		if (E === null) {
			for (; N < y.length; N++)
				(E = d(_, y[N], x)),
					E !== null &&
						((p = s(E, p, N)), C === null ? (k = E) : (C.sibling = E), (C = E));
			return ze && Hi(_, N), k;
		}
		for (E = r(_, E); N < y.length; N++)
			(M = h(E, _, N, y[N], x)),
				M !== null &&
					(t && M.alternate !== null && E.delete(M.key === null ? N : M.key),
					(p = s(M, p, N)),
					C === null ? (k = M) : (C.sibling = M),
					(C = M));
		return (
			t &&
				E.forEach(function (H) {
					return e(_, H);
				}),
			ze && Hi(_, N),
			k
		);
	}
	function m(_, p, y, x) {
		var k = Oo(y);
		if (typeof k != 'function') throw Error(L(150));
		if (((y = k.call(y)), y == null)) throw Error(L(151));
		for (
			var C = (k = null), E = p, N = (p = 0), M = null, O = y.next();
			E !== null && !O.done;
			N++, O = y.next()
		) {
			E.index > N ? ((M = E), (E = null)) : (M = E.sibling);
			var H = f(_, E, O.value, x);
			if (H === null) {
				E === null && (E = M);
				break;
			}
			t && E && H.alternate === null && e(_, E),
				(p = s(H, p, N)),
				C === null ? (k = H) : (C.sibling = H),
				(C = H),
				(E = M);
		}
		if (O.done) return n(_, E), ze && Hi(_, N), k;
		if (E === null) {
			for (; !O.done; N++, O = y.next())
				(O = d(_, O.value, x)),
					O !== null &&
						((p = s(O, p, N)), C === null ? (k = O) : (C.sibling = O), (C = O));
			return ze && Hi(_, N), k;
		}
		for (E = r(_, E); !O.done; N++, O = y.next())
			(O = h(E, _, N, O.value, x)),
				O !== null &&
					(t && O.alternate !== null && E.delete(O.key === null ? N : O.key),
					(p = s(O, p, N)),
					C === null ? (k = O) : (C.sibling = O),
					(C = O));
		return (
			t &&
				E.forEach(function (D) {
					return e(_, D);
				}),
			ze && Hi(_, N),
			k
		);
	}
	function T(_, p, y, x) {
		if (
			(typeof y == 'object' &&
				y !== null &&
				y.type === zs &&
				y.key === null &&
				(y = y.props.children),
			typeof y == 'object' && y !== null)
		) {
			switch (y.$$typeof) {
				case su:
					e: {
						for (var k = y.key, C = p; C !== null; ) {
							if (C.key === k) {
								if (((k = y.type), k === zs)) {
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
										k.$$typeof === ii &&
										Ip(k) === C.type)
								) {
									n(_, C.sibling),
										(p = i(C, y.props)),
										(p.ref = zo(_, C, y)),
										(p.return = _),
										(_ = p);
									break e;
								}
								n(_, C);
								break;
							} else e(_, C);
							C = C.sibling;
						}
						y.type === zs
							? ((p = rs(y.props.children, _.mode, x, y.key)),
								(p.return = _),
								(_ = p))
							: ((x = Qu(y.type, y.key, y.props, null, _.mode, x)),
								(x.ref = zo(_, p, y)),
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
						(p = Ic(y, _.mode, x)), (p.return = _), (_ = p);
					}
					return o(_);
				case ii:
					return (C = y._init), T(_, p, C(y._payload), x);
			}
			if (Wo(y)) return v(_, p, y, x);
			if (Oo(y)) return m(_, p, y, x);
			_u(_, y);
		}
		return (typeof y == 'string' && y !== '') || typeof y == 'number'
			? ((y = '' + y),
				p !== null && p.tag === 6
					? (n(_, p.sibling), (p = i(p, y)), (p.return = _), (_ = p))
					: (n(_, p), (p = Fc(y, _.mode, x)), (p.return = _), (_ = p)),
				o(_))
			: n(_, p);
	}
	return T;
}
var fo = w_(!0),
	S_ = w_(!1),
	ql = {},
	Pr = Di(ql),
	Rl = Di(ql),
	Dl = Di(ql);
function Zi(t) {
	if (t === ql) throw Error(L(174));
	return t;
}
function nh(t, e) {
	switch ((Te(Dl, e), Te(Rl, t), Te(Pr, ql), (t = e.nodeType), t)) {
		case 9:
		case 11:
			e = (e = e.documentElement) ? e.namespaceURI : gf(null, '');
			break;
		default:
			(t = t === 8 ? e.parentNode : e),
				(e = t.namespaceURI || null),
				(t = t.tagName),
				(e = gf(e, t));
	}
	je(Pr), Te(Pr, e);
}
function ho() {
	je(Pr), je(Rl), je(Dl);
}
function k_(t) {
	Zi(Dl.current);
	var e = Zi(Pr.current),
		n = gf(e, t.type);
	e !== n && (Te(Rl, t), Te(Pr, n));
}
function rh(t) {
	Rl.current === t && (je(Pr), je(Rl));
}
var Ue = Di(0);
function xa(t) {
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
var Mc = [];
function ih() {
	for (var t = 0; t < Mc.length; t++)
		Mc[t]._workInProgressVersionPrimary = null;
	Mc.length = 0;
}
var Bu = Jr.ReactCurrentDispatcher,
	Rc = Jr.ReactCurrentBatchConfig,
	hs = 0,
	be = null,
	ft = null,
	yt = null,
	wa = !1,
	il = !1,
	Al = 0,
	ix = 0;
function zt() {
	throw Error(L(321));
}
function sh(t, e) {
	if (e === null) return !1;
	for (var n = 0; n < e.length && n < t.length; n++)
		if (!dr(t[n], e[n])) return !1;
	return !0;
}
function oh(t, e, n, r, i, s) {
	if (
		((hs = s),
		(be = e),
		(e.memoizedState = null),
		(e.updateQueue = null),
		(e.lanes = 0),
		(Bu.current = t === null || t.memoizedState === null ? ux : ax),
		(t = n(r, i)),
		il)
	) {
		s = 0;
		do {
			if (((il = !1), (Al = 0), 25 <= s)) throw Error(L(301));
			(s += 1),
				(yt = ft = null),
				(e.updateQueue = null),
				(Bu.current = cx),
				(t = n(r, i));
		} while (il);
	}
	if (
		((Bu.current = Sa),
		(e = ft !== null && ft.next !== null),
		(hs = 0),
		(yt = ft = be = null),
		(wa = !1),
		e)
	)
		throw Error(L(300));
	return t;
}
function lh() {
	var t = Al !== 0;
	return (Al = 0), t;
}
function vr() {
	var t = {
		memoizedState: null,
		baseState: null,
		baseQueue: null,
		queue: null,
		next: null,
	};
	return yt === null ? (be.memoizedState = yt = t) : (yt = yt.next = t), yt;
}
function Xn() {
	if (ft === null) {
		var t = be.alternate;
		t = t !== null ? t.memoizedState : null;
	} else t = ft.next;
	var e = yt === null ? be.memoizedState : yt.next;
	if (e !== null) (yt = e), (ft = t);
	else {
		if (t === null) throw Error(L(310));
		(ft = t),
			(t = {
				memoizedState: ft.memoizedState,
				baseState: ft.baseState,
				baseQueue: ft.baseQueue,
				queue: ft.queue,
				next: null,
			}),
			yt === null ? (be.memoizedState = yt = t) : (yt = yt.next = t);
	}
	return yt;
}
function zl(t, e) {
	return typeof e == 'function' ? e(t) : e;
}
function Dc(t) {
	var e = Xn(),
		n = e.queue;
	if (n === null) throw Error(L(311));
	n.lastRenderedReducer = t;
	var r = ft,
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
					(be.lanes |= c),
					(ps |= c);
			}
			a = a.next;
		} while (a !== null && a !== s);
		u === null ? (o = r) : (u.next = l),
			dr(r, e.memoizedState) || (fn = !0),
			(e.memoizedState = r),
			(e.baseState = o),
			(e.baseQueue = u),
			(n.lastRenderedState = r);
	}
	if (((t = n.interleaved), t !== null)) {
		i = t;
		do (s = i.lane), (be.lanes |= s), (ps |= s), (i = i.next);
		while (i !== t);
	} else i === null && (n.lanes = 0);
	return [e.memoizedState, n.dispatch];
}
function Ac(t) {
	var e = Xn(),
		n = e.queue;
	if (n === null) throw Error(L(311));
	n.lastRenderedReducer = t;
	var r = n.dispatch,
		i = n.pending,
		s = e.memoizedState;
	if (i !== null) {
		n.pending = null;
		var o = (i = i.next);
		do (s = t(s, o.action)), (o = o.next);
		while (o !== i);
		dr(s, e.memoizedState) || (fn = !0),
			(e.memoizedState = s),
			e.baseQueue === null && (e.baseState = s),
			(n.lastRenderedState = s);
	}
	return [s, r];
}
function T_() {}
function E_(t, e) {
	var n = be,
		r = Xn(),
		i = e(),
		s = !dr(r.memoizedState, i);
	if (
		(s && ((r.memoizedState = i), (fn = !0)),
		(r = r.queue),
		uh(N_.bind(null, n, r, t), [t]),
		r.getSnapshot !== e || s || (yt !== null && yt.memoizedState.tag & 1))
	) {
		if (
			((n.flags |= 2048),
			Ll(9, P_.bind(null, n, r, i, e), void 0, null),
			wt === null)
		)
			throw Error(L(349));
		hs & 30 || C_(n, e, i);
	}
	return i;
}
function C_(t, e, n) {
	(t.flags |= 16384),
		(t = { getSnapshot: e, value: n }),
		(e = be.updateQueue),
		e === null
			? ((e = { lastEffect: null, stores: null }),
				(be.updateQueue = e),
				(e.stores = [t]))
			: ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t));
}
function P_(t, e, n, r) {
	(e.value = n), (e.getSnapshot = r), j_(e) && O_(t);
}
function N_(t, e, n) {
	return n(function () {
		j_(e) && O_(t);
	});
}
function j_(t) {
	var e = t.getSnapshot;
	t = t.value;
	try {
		var n = e();
		return !dr(t, n);
	} catch {
		return !0;
	}
}
function O_(t) {
	var e = Gr(t, 1);
	e !== null && fr(e, t, 1, -1);
}
function Vp(t) {
	var e = vr();
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
		(t = t.dispatch = lx.bind(null, be, t)),
		[e.memoizedState, t]
	);
}
function Ll(t, e, n, r) {
	return (
		(t = { tag: t, create: e, destroy: n, deps: r, next: null }),
		(e = be.updateQueue),
		e === null
			? ((e = { lastEffect: null, stores: null }),
				(be.updateQueue = e),
				(e.lastEffect = t.next = t))
			: ((n = e.lastEffect),
				n === null
					? (e.lastEffect = t.next = t)
					: ((r = n.next), (n.next = t), (t.next = r), (e.lastEffect = t))),
		t
	);
}
function M_() {
	return Xn().memoizedState;
}
function Wu(t, e, n, r) {
	var i = vr();
	(be.flags |= t),
		(i.memoizedState = Ll(1 | e, n, void 0, r === void 0 ? null : r));
}
function Ja(t, e, n, r) {
	var i = Xn();
	r = r === void 0 ? null : r;
	var s = void 0;
	if (ft !== null) {
		var o = ft.memoizedState;
		if (((s = o.destroy), r !== null && sh(r, o.deps))) {
			i.memoizedState = Ll(e, n, s, r);
			return;
		}
	}
	(be.flags |= t), (i.memoizedState = Ll(1 | e, n, s, r));
}
function $p(t, e) {
	return Wu(8390656, 8, t, e);
}
function uh(t, e) {
	return Ja(2048, 8, t, e);
}
function R_(t, e) {
	return Ja(4, 2, t, e);
}
function D_(t, e) {
	return Ja(4, 4, t, e);
}
function A_(t, e) {
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
function z_(t, e, n) {
	return (
		(n = n != null ? n.concat([t]) : null), Ja(4, 4, A_.bind(null, e, t), n)
	);
}
function ah() {}
function L_(t, e) {
	var n = Xn();
	e = e === void 0 ? null : e;
	var r = n.memoizedState;
	return r !== null && e !== null && sh(e, r[1])
		? r[0]
		: ((n.memoizedState = [t, e]), t);
}
function F_(t, e) {
	var n = Xn();
	e = e === void 0 ? null : e;
	var r = n.memoizedState;
	return r !== null && e !== null && sh(e, r[1])
		? r[0]
		: ((t = t()), (n.memoizedState = [t, e]), t);
}
function I_(t, e, n) {
	return hs & 21
		? (dr(n, e) || ((n = U0()), (be.lanes |= n), (ps |= n), (t.baseState = !0)),
			e)
		: (t.baseState && ((t.baseState = !1), (fn = !0)), (t.memoizedState = n));
}
function sx(t, e) {
	var n = xe;
	(xe = n !== 0 && 4 > n ? n : 4), t(!0);
	var r = Rc.transition;
	Rc.transition = {};
	try {
		t(!1), e();
	} finally {
		(xe = n), (Rc.transition = r);
	}
}
function V_() {
	return Xn().memoizedState;
}
function ox(t, e, n) {
	var r = Si(t);
	if (
		((n = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		}),
		$_(t))
	)
		U_(e, n);
	else if (((n = g_(t, e, n, r)), n !== null)) {
		var i = nn();
		fr(n, t, r, i), B_(n, e, r);
	}
}
function lx(t, e, n) {
	var r = Si(t),
		i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
	if ($_(t)) U_(e, i);
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
				if (((i.hasEagerState = !0), (i.eagerState = l), dr(l, o))) {
					var u = e.interleaved;
					u === null
						? ((i.next = i), eh(e))
						: ((i.next = u.next), (u.next = i)),
						(e.interleaved = i);
					return;
				}
			} catch {
			} finally {
			}
		(n = g_(t, e, i, r)),
			n !== null && ((i = nn()), fr(n, t, r, i), B_(n, e, r));
	}
}
function $_(t) {
	var e = t.alternate;
	return t === be || (e !== null && e === be);
}
function U_(t, e) {
	il = wa = !0;
	var n = t.pending;
	n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
		(t.pending = e);
}
function B_(t, e, n) {
	if (n & 4194240) {
		var r = e.lanes;
		(r &= t.pendingLanes), (n |= r), (e.lanes = n), $d(t, n);
	}
}
var Sa = {
		readContext: Qn,
		useCallback: zt,
		useContext: zt,
		useEffect: zt,
		useImperativeHandle: zt,
		useInsertionEffect: zt,
		useLayoutEffect: zt,
		useMemo: zt,
		useReducer: zt,
		useRef: zt,
		useState: zt,
		useDebugValue: zt,
		useDeferredValue: zt,
		useTransition: zt,
		useMutableSource: zt,
		useSyncExternalStore: zt,
		useId: zt,
		unstable_isNewReconciler: !1,
	},
	ux = {
		readContext: Qn,
		useCallback: function (t, e) {
			return (vr().memoizedState = [t, e === void 0 ? null : e]), t;
		},
		useContext: Qn,
		useEffect: $p,
		useImperativeHandle: function (t, e, n) {
			return (
				(n = n != null ? n.concat([t]) : null),
				Wu(4194308, 4, A_.bind(null, e, t), n)
			);
		},
		useLayoutEffect: function (t, e) {
			return Wu(4194308, 4, t, e);
		},
		useInsertionEffect: function (t, e) {
			return Wu(4, 2, t, e);
		},
		useMemo: function (t, e) {
			var n = vr();
			return (
				(e = e === void 0 ? null : e), (t = t()), (n.memoizedState = [t, e]), t
			);
		},
		useReducer: function (t, e, n) {
			var r = vr();
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
				(t = t.dispatch = ox.bind(null, be, t)),
				[r.memoizedState, t]
			);
		},
		useRef: function (t) {
			var e = vr();
			return (t = { current: t }), (e.memoizedState = t);
		},
		useState: Vp,
		useDebugValue: ah,
		useDeferredValue: function (t) {
			return (vr().memoizedState = t);
		},
		useTransition: function () {
			var t = Vp(!1),
				e = t[0];
			return (t = sx.bind(null, t[1])), (vr().memoizedState = t), [e, t];
		},
		useMutableSource: function () {},
		useSyncExternalStore: function (t, e, n) {
			var r = be,
				i = vr();
			if (ze) {
				if (n === void 0) throw Error(L(407));
				n = n();
			} else {
				if (((n = e()), wt === null)) throw Error(L(349));
				hs & 30 || C_(r, e, n);
			}
			i.memoizedState = n;
			var s = { value: n, getSnapshot: e };
			return (
				(i.queue = s),
				$p(N_.bind(null, r, s, t), [t]),
				(r.flags |= 2048),
				Ll(9, P_.bind(null, r, s, n, e), void 0, null),
				n
			);
		},
		useId: function () {
			var t = vr(),
				e = wt.identifierPrefix;
			if (ze) {
				var n = Wr,
					r = Br;
				(n = (r & ~(1 << (32 - cr(r) - 1))).toString(32) + n),
					(e = ':' + e + 'R' + n),
					(n = Al++),
					0 < n && (e += 'H' + n.toString(32)),
					(e += ':');
			} else (n = ix++), (e = ':' + e + 'r' + n.toString(32) + ':');
			return (t.memoizedState = e);
		},
		unstable_isNewReconciler: !1,
	},
	ax = {
		readContext: Qn,
		useCallback: L_,
		useContext: Qn,
		useEffect: uh,
		useImperativeHandle: z_,
		useInsertionEffect: R_,
		useLayoutEffect: D_,
		useMemo: F_,
		useReducer: Dc,
		useRef: M_,
		useState: function () {
			return Dc(zl);
		},
		useDebugValue: ah,
		useDeferredValue: function (t) {
			var e = Xn();
			return I_(e, ft.memoizedState, t);
		},
		useTransition: function () {
			var t = Dc(zl)[0],
				e = Xn().memoizedState;
			return [t, e];
		},
		useMutableSource: T_,
		useSyncExternalStore: E_,
		useId: V_,
		unstable_isNewReconciler: !1,
	},
	cx = {
		readContext: Qn,
		useCallback: L_,
		useContext: Qn,
		useEffect: uh,
		useImperativeHandle: z_,
		useInsertionEffect: R_,
		useLayoutEffect: D_,
		useMemo: F_,
		useReducer: Ac,
		useRef: M_,
		useState: function () {
			return Ac(zl);
		},
		useDebugValue: ah,
		useDeferredValue: function (t) {
			var e = Xn();
			return ft === null ? (e.memoizedState = t) : I_(e, ft.memoizedState, t);
		},
		useTransition: function () {
			var t = Ac(zl)[0],
				e = Xn().memoizedState;
			return [t, e];
		},
		useMutableSource: T_,
		useSyncExternalStore: E_,
		useId: V_,
		unstable_isNewReconciler: !1,
	};
function po(t, e) {
	try {
		var n = '',
			r = e;
		do (n += I1(r)), (r = r.return);
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
function zc(t, e, n) {
	return { value: t, source: null, stack: n ?? null, digest: e ?? null };
}
function $f(t, e) {
	try {
		console.error(e.value);
	} catch (n) {
		setTimeout(function () {
			throw n;
		});
	}
}
var fx = typeof WeakMap == 'function' ? WeakMap : Map;
function W_(t, e, n) {
	(n = Hr(-1, n)), (n.tag = 3), (n.payload = { element: null });
	var r = e.value;
	return (
		(n.callback = function () {
			Ta || ((Ta = !0), (Kf = r)), $f(t, e);
		}),
		n
	);
}
function b_(t, e, n) {
	(n = Hr(-1, n)), (n.tag = 3);
	var r = t.type.getDerivedStateFromError;
	if (typeof r == 'function') {
		var i = e.value;
		(n.payload = function () {
			return r(i);
		}),
			(n.callback = function () {
				$f(t, e);
			});
	}
	var s = t.stateNode;
	return (
		s !== null &&
			typeof s.componentDidCatch == 'function' &&
			(n.callback = function () {
				$f(t, e),
					typeof r != 'function' &&
						(wi === null ? (wi = new Set([this])) : wi.add(this));
				var o = e.stack;
				this.componentDidCatch(e.value, {
					componentStack: o !== null ? o : '',
				});
			}),
		n
	);
}
function Up(t, e, n) {
	var r = t.pingCache;
	if (r === null) {
		r = t.pingCache = new fx();
		var i = new Set();
		r.set(e, i);
	} else (i = r.get(e)), i === void 0 && ((i = new Set()), r.set(e, i));
	i.has(n) || (i.add(n), (t = Ex.bind(null, t, e, n)), e.then(t, t));
}
function Bp(t) {
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
function Wp(t, e, n, r, i) {
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
							: ((e = Hr(-1, 1)), (e.tag = 2), xi(n, e, 1))),
					(n.lanes |= 1)),
			t);
}
var dx = Jr.ReactCurrentOwner,
	fn = !1;
function Xt(t, e, n, r) {
	e.child = t === null ? S_(e, null, n, r) : fo(e, t.child, n, r);
}
function bp(t, e, n, r, i) {
	n = n.render;
	var s = e.ref;
	return (
		eo(e, i),
		(r = oh(t, e, n, r, s, i)),
		(n = lh()),
		t !== null && !fn
			? ((e.updateQueue = t.updateQueue),
				(e.flags &= -2053),
				(t.lanes &= ~i),
				Kr(t, e, i))
			: (ze && n && Xd(e), (e.flags |= 1), Xt(t, e, r, i), e.child)
	);
}
function Hp(t, e, n, r, i) {
	if (t === null) {
		var s = n.type;
		return typeof s == 'function' &&
			!gh(s) &&
			s.defaultProps === void 0 &&
			n.compare === null &&
			n.defaultProps === void 0
			? ((e.tag = 15), (e.type = s), H_(t, e, s, r, i))
			: ((t = Qu(n.type, null, r, e, e.mode, i)),
				(t.ref = e.ref),
				(t.return = e),
				(e.child = t));
	}
	if (((s = t.child), !(t.lanes & i))) {
		var o = s.memoizedProps;
		if (
			((n = n.compare), (n = n !== null ? n : Nl), n(o, r) && t.ref === e.ref)
		)
			return Kr(t, e, i);
	}
	return (
		(e.flags |= 1),
		(t = ki(s, r)),
		(t.ref = e.ref),
		(t.return = e),
		(e.child = t)
	);
}
function H_(t, e, n, r, i) {
	if (t !== null) {
		var s = t.memoizedProps;
		if (Nl(s, r) && t.ref === e.ref)
			if (((fn = !1), (e.pendingProps = r = s), (t.lanes & i) !== 0))
				t.flags & 131072 && (fn = !0);
			else return (e.lanes = t.lanes), Kr(t, e, i);
	}
	return Uf(t, e, n, r, i);
}
function Y_(t, e, n) {
	var r = e.pendingProps,
		i = r.children,
		s = t !== null ? t.memoizedState : null;
	if (r.mode === 'hidden')
		if (!(e.mode & 1))
			(e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				Te(Hs, Sn),
				(Sn |= n);
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
					Te(Hs, Sn),
					(Sn |= t),
					null
				);
			(e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				(r = s !== null ? s.baseLanes : n),
				Te(Hs, Sn),
				(Sn |= r);
		}
	else
		s !== null ? ((r = s.baseLanes | n), (e.memoizedState = null)) : (r = n),
			Te(Hs, Sn),
			(Sn |= r);
	return Xt(t, e, i, n), e.child;
}
function Q_(t, e) {
	var n = e.ref;
	((t === null && n !== null) || (t !== null && t.ref !== n)) &&
		((e.flags |= 512), (e.flags |= 2097152));
}
function Uf(t, e, n, r, i) {
	var s = hn(n) ? fs : bt.current;
	return (
		(s = ao(e, s)),
		eo(e, i),
		(n = oh(t, e, n, r, s, i)),
		(r = lh()),
		t !== null && !fn
			? ((e.updateQueue = t.updateQueue),
				(e.flags &= -2053),
				(t.lanes &= ~i),
				Kr(t, e, i))
			: (ze && r && Xd(e), (e.flags |= 1), Xt(t, e, n, i), e.child)
	);
}
function Yp(t, e, n, r, i) {
	if (hn(n)) {
		var s = !0;
		pa(e);
	} else s = !1;
	if ((eo(e, i), e.stateNode === null))
		bu(t, e), x_(e, n, r), Vf(e, n, r, i), (r = !0);
	else if (t === null) {
		var o = e.stateNode,
			l = e.memoizedProps;
		o.props = l;
		var u = o.context,
			a = n.contextType;
		typeof a == 'object' && a !== null
			? (a = Qn(a))
			: ((a = hn(n) ? fs : bt.current), (a = ao(e, a)));
		var c = n.getDerivedStateFromProps,
			d =
				typeof c == 'function' ||
				typeof o.getSnapshotBeforeUpdate == 'function';
		d ||
			(typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
				typeof o.componentWillReceiveProps != 'function') ||
			((l !== r || u !== a) && Fp(e, o, r, a)),
			(si = !1);
		var f = e.memoizedState;
		(o.state = f),
			ya(e, r, o, i),
			(u = e.memoizedState),
			l !== r || f !== u || dn.current || si
				? (typeof c == 'function' && (If(e, n, c, r), (u = e.memoizedState)),
					(l = si || Lp(e, n, l, r, f, u, a))
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
			v_(t, e),
			(l = e.memoizedProps),
			(a = e.type === e.elementType ? l : sr(e.type, l)),
			(o.props = a),
			(d = e.pendingProps),
			(f = o.context),
			(u = n.contextType),
			typeof u == 'object' && u !== null
				? (u = Qn(u))
				: ((u = hn(n) ? fs : bt.current), (u = ao(e, u)));
		var h = n.getDerivedStateFromProps;
		(c =
			typeof h == 'function' ||
			typeof o.getSnapshotBeforeUpdate == 'function') ||
			(typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
				typeof o.componentWillReceiveProps != 'function') ||
			((l !== d || f !== u) && Fp(e, o, r, u)),
			(si = !1),
			(f = e.memoizedState),
			(o.state = f),
			ya(e, r, o, i);
		var v = e.memoizedState;
		l !== d || f !== v || dn.current || si
			? (typeof h == 'function' && (If(e, n, h, r), (v = e.memoizedState)),
				(a = si || Lp(e, n, a, r, f, v, u) || !1)
					? (c ||
							(typeof o.UNSAFE_componentWillUpdate != 'function' &&
								typeof o.componentWillUpdate != 'function') ||
							(typeof o.componentWillUpdate == 'function' &&
								o.componentWillUpdate(r, v, u),
							typeof o.UNSAFE_componentWillUpdate == 'function' &&
								o.UNSAFE_componentWillUpdate(r, v, u)),
						typeof o.componentDidUpdate == 'function' && (e.flags |= 4),
						typeof o.getSnapshotBeforeUpdate == 'function' && (e.flags |= 1024))
					: (typeof o.componentDidUpdate != 'function' ||
							(l === t.memoizedProps && f === t.memoizedState) ||
							(e.flags |= 4),
						typeof o.getSnapshotBeforeUpdate != 'function' ||
							(l === t.memoizedProps && f === t.memoizedState) ||
							(e.flags |= 1024),
						(e.memoizedProps = r),
						(e.memoizedState = v)),
				(o.props = r),
				(o.state = v),
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
	return Bf(t, e, n, r, s, i);
}
function Bf(t, e, n, r, i, s) {
	Q_(t, e);
	var o = (e.flags & 128) !== 0;
	if (!r && !o) return i && Mp(e, n, !1), Kr(t, e, s);
	(r = e.stateNode), (dx.current = e);
	var l =
		o && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
	return (
		(e.flags |= 1),
		t !== null && o
			? ((e.child = fo(e, t.child, null, s)), (e.child = fo(e, null, l, s)))
			: Xt(t, e, l, s),
		(e.memoizedState = r.state),
		i && Mp(e, n, !0),
		e.child
	);
}
function X_(t) {
	var e = t.stateNode;
	e.pendingContext
		? Op(t, e.pendingContext, e.pendingContext !== e.context)
		: e.context && Op(t, e.context, !1),
		nh(t, e.containerInfo);
}
function Qp(t, e, n, r, i) {
	return co(), Kd(i), (e.flags |= 256), Xt(t, e, n, r), e.child;
}
var Wf = { dehydrated: null, treeContext: null, retryLane: 0 };
function bf(t) {
	return { baseLanes: t, cachePool: null, transitions: null };
}
function G_(t, e, n) {
	var r = e.pendingProps,
		i = Ue.current,
		s = !1,
		o = (e.flags & 128) !== 0,
		l;
	if (
		((l = o) ||
			(l = t !== null && t.memoizedState === null ? !1 : (i & 2) !== 0),
		l
			? ((s = !0), (e.flags &= -129))
			: (t === null || t.memoizedState !== null) && (i |= 1),
		Te(Ue, i & 1),
		t === null)
	)
		return (
			Lf(e),
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
								: (s = nc(o, r, 0, null)),
							(t = rs(t, r, n, null)),
							(s.return = e),
							(t.return = e),
							(s.sibling = t),
							(e.child = s),
							(e.child.memoizedState = bf(n)),
							(e.memoizedState = Wf),
							t)
						: ch(e, o))
		);
	if (((i = t.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
		return hx(t, e, o, r, l, i, n);
	if (s) {
		(s = r.fallback), (o = e.mode), (i = t.child), (l = i.sibling);
		var u = { mode: 'hidden', children: r.children };
		return (
			!(o & 1) && e.child !== i
				? ((r = e.child),
					(r.childLanes = 0),
					(r.pendingProps = u),
					(e.deletions = null))
				: ((r = ki(i, u)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
			l !== null ? (s = ki(l, s)) : ((s = rs(s, o, n, null)), (s.flags |= 2)),
			(s.return = e),
			(r.return = e),
			(r.sibling = s),
			(e.child = r),
			(r = s),
			(s = e.child),
			(o = t.child.memoizedState),
			(o =
				o === null
					? bf(n)
					: {
							baseLanes: o.baseLanes | n,
							cachePool: null,
							transitions: o.transitions,
						}),
			(s.memoizedState = o),
			(s.childLanes = t.childLanes & ~n),
			(e.memoizedState = Wf),
			r
		);
	}
	return (
		(s = t.child),
		(t = s.sibling),
		(r = ki(s, { mode: 'visible', children: r.children })),
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
function ch(t, e) {
	return (
		(e = nc({ mode: 'visible', children: e }, t.mode, 0, null)),
		(e.return = t),
		(t.child = e)
	);
}
function gu(t, e, n, r) {
	return (
		r !== null && Kd(r),
		fo(e, t.child, null, n),
		(t = ch(e, e.pendingProps.children)),
		(t.flags |= 2),
		(e.memoizedState = null),
		t
	);
}
function hx(t, e, n, r, i, s, o) {
	if (n)
		return e.flags & 256
			? ((e.flags &= -257), (r = zc(Error(L(422)))), gu(t, e, o, r))
			: e.memoizedState !== null
				? ((e.child = t.child), (e.flags |= 128), null)
				: ((s = r.fallback),
					(i = e.mode),
					(r = nc({ mode: 'visible', children: r.children }, i, 0, null)),
					(s = rs(s, i, o, null)),
					(s.flags |= 2),
					(r.return = e),
					(s.return = e),
					(r.sibling = s),
					(e.child = r),
					e.mode & 1 && fo(e, t.child, null, o),
					(e.child.memoizedState = bf(o)),
					(e.memoizedState = Wf),
					s);
	if (!(e.mode & 1)) return gu(t, e, o, null);
	if (i.data === '$!') {
		if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
		return (r = l), (s = Error(L(419))), (r = zc(s, r, void 0)), gu(t, e, o, r);
	}
	if (((l = (o & t.childLanes) !== 0), fn || l)) {
		if (((r = wt), r !== null)) {
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
					((s.retryLane = i), Gr(t, i), fr(r, t, i, -1));
		}
		return _h(), (r = zc(Error(L(421)))), gu(t, e, o, r);
	}
	return i.data === '$?'
		? ((e.flags |= 128),
			(e.child = t.child),
			(e = Cx.bind(null, t)),
			(i._reactRetry = e),
			null)
		: ((t = s.treeContext),
			(Pn = yi(i.nextSibling)),
			(jn = e),
			(ze = !0),
			(lr = null),
			t !== null &&
				((In[Vn++] = Br),
				(In[Vn++] = Wr),
				(In[Vn++] = ds),
				(Br = t.id),
				(Wr = t.overflow),
				(ds = e)),
			(e = ch(e, r.children)),
			(e.flags |= 4096),
			e);
}
function Xp(t, e, n) {
	t.lanes |= e;
	var r = t.alternate;
	r !== null && (r.lanes |= e), Ff(t.return, e, n);
}
function Lc(t, e, n, r, i) {
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
function K_(t, e, n) {
	var r = e.pendingProps,
		i = r.revealOrder,
		s = r.tail;
	if ((Xt(t, e, r.children, n), (r = Ue.current), r & 2))
		(r = (r & 1) | 2), (e.flags |= 128);
	else {
		if (t !== null && t.flags & 128)
			e: for (t = e.child; t !== null; ) {
				if (t.tag === 13) t.memoizedState !== null && Xp(t, n, e);
				else if (t.tag === 19) Xp(t, n, e);
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
	if ((Te(Ue, r), !(e.mode & 1))) e.memoizedState = null;
	else
		switch (i) {
			case 'forwards':
				for (n = e.child, i = null; n !== null; )
					(t = n.alternate),
						t !== null && xa(t) === null && (i = n),
						(n = n.sibling);
				(n = i),
					n === null
						? ((i = e.child), (e.child = null))
						: ((i = n.sibling), (n.sibling = null)),
					Lc(e, !1, i, n, s);
				break;
			case 'backwards':
				for (n = null, i = e.child, e.child = null; i !== null; ) {
					if (((t = i.alternate), t !== null && xa(t) === null)) {
						e.child = i;
						break;
					}
					(t = i.sibling), (i.sibling = n), (n = i), (i = t);
				}
				Lc(e, !0, n, null, s);
				break;
			case 'together':
				Lc(e, !1, null, null, void 0);
				break;
			default:
				e.memoizedState = null;
		}
	return e.child;
}
function bu(t, e) {
	!(e.mode & 1) &&
		t !== null &&
		((t.alternate = null), (e.alternate = null), (e.flags |= 2));
}
function Kr(t, e, n) {
	if (
		(t !== null && (e.dependencies = t.dependencies),
		(ps |= e.lanes),
		!(n & e.childLanes))
	)
		return null;
	if (t !== null && e.child !== t.child) throw Error(L(153));
	if (e.child !== null) {
		for (
			t = e.child, n = ki(t, t.pendingProps), e.child = n, n.return = e;
			t.sibling !== null;

		)
			(t = t.sibling), (n = n.sibling = ki(t, t.pendingProps)), (n.return = e);
		n.sibling = null;
	}
	return e.child;
}
function px(t, e, n) {
	switch (e.tag) {
		case 3:
			X_(e), co();
			break;
		case 5:
			k_(e);
			break;
		case 1:
			hn(e.type) && pa(e);
			break;
		case 4:
			nh(e, e.stateNode.containerInfo);
			break;
		case 10:
			var r = e.type._context,
				i = e.memoizedProps.value;
			Te(ga, r._currentValue), (r._currentValue = i);
			break;
		case 13:
			if (((r = e.memoizedState), r !== null))
				return r.dehydrated !== null
					? (Te(Ue, Ue.current & 1), (e.flags |= 128), null)
					: n & e.child.childLanes
						? G_(t, e, n)
						: (Te(Ue, Ue.current & 1),
							(t = Kr(t, e, n)),
							t !== null ? t.sibling : null);
			Te(Ue, Ue.current & 1);
			break;
		case 19:
			if (((r = (n & e.childLanes) !== 0), t.flags & 128)) {
				if (r) return K_(t, e, n);
				e.flags |= 128;
			}
			if (
				((i = e.memoizedState),
				i !== null &&
					((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
				Te(Ue, Ue.current),
				r)
			)
				break;
			return null;
		case 22:
		case 23:
			return (e.lanes = 0), Y_(t, e, n);
	}
	return Kr(t, e, n);
}
var q_, Hf, Z_, J_;
q_ = function (t, e) {
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
Hf = function () {};
Z_ = function (t, e, n, r) {
	var i = t.memoizedProps;
	if (i !== r) {
		(t = e.stateNode), Zi(Pr.current);
		var s = null;
		switch (n) {
			case 'input':
				(i = hf(t, i)), (r = hf(t, r)), (s = []);
				break;
			case 'select':
				(i = He({}, i, { value: void 0 })),
					(r = He({}, r, { value: void 0 })),
					(s = []);
				break;
			case 'textarea':
				(i = _f(t, i)), (r = _f(t, r)), (s = []);
				break;
			default:
				typeof i.onClick != 'function' &&
					typeof r.onClick == 'function' &&
					(t.onclick = da);
		}
		vf(n, r);
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
						(wl.hasOwnProperty(a)
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
								(wl.hasOwnProperty(a)
									? (u != null && a === 'onScroll' && Pe('scroll', t),
										s || l === u || (s = []))
									: (s = s || []).push(a, u));
		}
		n && (s = s || []).push('style', n);
		var a = s;
		(e.updateQueue = a) && (e.flags |= 4);
	}
};
J_ = function (t, e, n, r) {
	n !== r && (e.flags |= 4);
};
function Lo(t, e) {
	if (!ze)
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
function mx(t, e, n) {
	var r = e.pendingProps;
	switch ((Gd(e), e.tag)) {
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
			return hn(e.type) && ha(), Lt(e), null;
		case 3:
			return (
				(r = e.stateNode),
				ho(),
				je(dn),
				je(bt),
				ih(),
				r.pendingContext &&
					((r.context = r.pendingContext), (r.pendingContext = null)),
				(t === null || t.child === null) &&
					(mu(e)
						? (e.flags |= 4)
						: t === null ||
							(t.memoizedState.isDehydrated && !(e.flags & 256)) ||
							((e.flags |= 1024), lr !== null && (Jf(lr), (lr = null)))),
				Hf(t, e),
				Lt(e),
				null
			);
		case 5:
			rh(e);
			var i = Zi(Dl.current);
			if (((n = e.type), t !== null && e.stateNode != null))
				Z_(t, e, n, r, i),
					t.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152));
			else {
				if (!r) {
					if (e.stateNode === null) throw Error(L(166));
					return Lt(e), null;
				}
				if (((t = Zi(Pr.current)), mu(e))) {
					(r = e.stateNode), (n = e.type);
					var s = e.memoizedProps;
					switch (((r[wr] = e), (r[Ml] = s), (t = (e.mode & 1) !== 0), n)) {
						case 'dialog':
							Pe('cancel', r), Pe('close', r);
							break;
						case 'iframe':
						case 'object':
						case 'embed':
							Pe('load', r);
							break;
						case 'video':
						case 'audio':
							for (i = 0; i < Ho.length; i++) Pe(Ho[i], r);
							break;
						case 'source':
							Pe('error', r);
							break;
						case 'img':
						case 'image':
						case 'link':
							Pe('error', r), Pe('load', r);
							break;
						case 'details':
							Pe('toggle', r);
							break;
						case 'input':
							rp(r, s), Pe('invalid', r);
							break;
						case 'select':
							(r._wrapperState = { wasMultiple: !!s.multiple }),
								Pe('invalid', r);
							break;
						case 'textarea':
							sp(r, s), Pe('invalid', r);
					}
					vf(n, s), (i = null);
					for (var o in s)
						if (s.hasOwnProperty(o)) {
							var l = s[o];
							o === 'children'
								? typeof l == 'string'
									? r.textContent !== l &&
										(s.suppressHydrationWarning !== !0 &&
											pu(r.textContent, l, t),
										(i = ['children', l]))
									: typeof l == 'number' &&
										r.textContent !== '' + l &&
										(s.suppressHydrationWarning !== !0 &&
											pu(r.textContent, l, t),
										(i = ['children', '' + l]))
								: wl.hasOwnProperty(o) &&
									l != null &&
									o === 'onScroll' &&
									Pe('scroll', r);
						}
					switch (n) {
						case 'input':
							ou(r), ip(r, s, !0);
							break;
						case 'textarea':
							ou(r), op(r);
							break;
						case 'select':
						case 'option':
							break;
						default:
							typeof s.onClick == 'function' && (r.onclick = da);
					}
					(r = i), (e.updateQueue = r), r !== null && (e.flags |= 4);
				} else {
					(o = i.nodeType === 9 ? i : i.ownerDocument),
						t === 'http://www.w3.org/1999/xhtml' && (t = C0(n)),
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
						(t[wr] = e),
						(t[Ml] = r),
						q_(t, e, !1, !1),
						(e.stateNode = t);
					e: {
						switch (((o = yf(n, r)), n)) {
							case 'dialog':
								Pe('cancel', t), Pe('close', t), (i = r);
								break;
							case 'iframe':
							case 'object':
							case 'embed':
								Pe('load', t), (i = r);
								break;
							case 'video':
							case 'audio':
								for (i = 0; i < Ho.length; i++) Pe(Ho[i], t);
								i = r;
								break;
							case 'source':
								Pe('error', t), (i = r);
								break;
							case 'img':
							case 'image':
							case 'link':
								Pe('error', t), Pe('load', t), (i = r);
								break;
							case 'details':
								Pe('toggle', t), (i = r);
								break;
							case 'input':
								rp(t, r), (i = hf(t, r)), Pe('invalid', t);
								break;
							case 'option':
								i = r;
								break;
							case 'select':
								(t._wrapperState = { wasMultiple: !!r.multiple }),
									(i = He({}, r, { value: void 0 })),
									Pe('invalid', t);
								break;
							case 'textarea':
								sp(t, r), (i = _f(t, r)), Pe('invalid', t);
								break;
							default:
								i = r;
						}
						vf(n, i), (l = i);
						for (s in l)
							if (l.hasOwnProperty(s)) {
								var u = l[s];
								s === 'style'
									? j0(t, u)
									: s === 'dangerouslySetInnerHTML'
										? ((u = u ? u.__html : void 0), u != null && P0(t, u))
										: s === 'children'
											? typeof u == 'string'
												? (n !== 'textarea' || u !== '') && Sl(t, u)
												: typeof u == 'number' && Sl(t, '' + u)
											: s !== 'suppressContentEditableWarning' &&
												s !== 'suppressHydrationWarning' &&
												s !== 'autoFocus' &&
												(wl.hasOwnProperty(s)
													? u != null && s === 'onScroll' && Pe('scroll', t)
													: u != null && Ad(t, s, u, o));
							}
						switch (n) {
							case 'input':
								ou(t), ip(t, r, !1);
								break;
							case 'textarea':
								ou(t), op(t);
								break;
							case 'option':
								r.value != null && t.setAttribute('value', '' + Pi(r.value));
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
								typeof i.onClick == 'function' && (t.onclick = da);
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
			if (t && e.stateNode != null) J_(t, e, t.memoizedProps, r);
			else {
				if (typeof r != 'string' && e.stateNode === null) throw Error(L(166));
				if (((n = Zi(Dl.current)), Zi(Pr.current), mu(e))) {
					if (
						((r = e.stateNode),
						(n = e.memoizedProps),
						(r[wr] = e),
						(s = r.nodeValue !== n) && ((t = jn), t !== null))
					)
						switch (t.tag) {
							case 3:
								pu(r.nodeValue, n, (t.mode & 1) !== 0);
								break;
							case 5:
								t.memoizedProps.suppressHydrationWarning !== !0 &&
									pu(r.nodeValue, n, (t.mode & 1) !== 0);
						}
					s && (e.flags |= 4);
				} else
					(r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
						(r[wr] = e),
						(e.stateNode = r);
			}
			return Lt(e), null;
		case 13:
			if (
				(je(Ue),
				(r = e.memoizedState),
				t === null ||
					(t.memoizedState !== null && t.memoizedState.dehydrated !== null))
			) {
				if (ze && Pn !== null && e.mode & 1 && !(e.flags & 128))
					__(), co(), (e.flags |= 98560), (s = !1);
				else if (((s = mu(e)), r !== null && r.dehydrated !== null)) {
					if (t === null) {
						if (!s) throw Error(L(318));
						if (
							((s = e.memoizedState),
							(s = s !== null ? s.dehydrated : null),
							!s)
						)
							throw Error(L(317));
						s[wr] = e;
					} else
						co(), !(e.flags & 128) && (e.memoizedState = null), (e.flags |= 4);
					Lt(e), (s = !1);
				} else lr !== null && (Jf(lr), (lr = null)), (s = !0);
				if (!s) return e.flags & 65536 ? e : null;
			}
			return e.flags & 128
				? ((e.lanes = n), e)
				: ((r = r !== null),
					r !== (t !== null && t.memoizedState !== null) &&
						r &&
						((e.child.flags |= 8192),
						e.mode & 1 &&
							(t === null || Ue.current & 1 ? ht === 0 && (ht = 3) : _h())),
					e.updateQueue !== null && (e.flags |= 4),
					Lt(e),
					null);
		case 4:
			return (
				ho(), Hf(t, e), t === null && jl(e.stateNode.containerInfo), Lt(e), null
			);
		case 10:
			return Jd(e.type._context), Lt(e), null;
		case 17:
			return hn(e.type) && ha(), Lt(e), null;
		case 19:
			if ((je(Ue), (s = e.memoizedState), s === null)) return Lt(e), null;
			if (((r = (e.flags & 128) !== 0), (o = s.rendering), o === null))
				if (r) Lo(s, !1);
				else {
					if (ht !== 0 || (t !== null && t.flags & 128))
						for (t = e.child; t !== null; ) {
							if (((o = xa(t)), o !== null)) {
								for (
									e.flags |= 128,
										Lo(s, !1),
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
								return Te(Ue, (Ue.current & 1) | 2), e.child;
							}
							t = t.sibling;
						}
					s.tail !== null &&
						et() > mo &&
						((e.flags |= 128), (r = !0), Lo(s, !1), (e.lanes = 4194304));
				}
			else {
				if (!r)
					if (((t = xa(o)), t !== null)) {
						if (
							((e.flags |= 128),
							(r = !0),
							(n = t.updateQueue),
							n !== null && ((e.updateQueue = n), (e.flags |= 4)),
							Lo(s, !0),
							s.tail === null && s.tailMode === 'hidden' && !o.alternate && !ze)
						)
							return Lt(e), null;
					} else
						2 * et() - s.renderingStartTime > mo &&
							n !== 1073741824 &&
							((e.flags |= 128), (r = !0), Lo(s, !1), (e.lanes = 4194304));
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
					(s.renderingStartTime = et()),
					(e.sibling = null),
					(n = Ue.current),
					Te(Ue, r ? (n & 1) | 2 : n & 1),
					e)
				: (Lt(e), null);
		case 22:
		case 23:
			return (
				mh(),
				(r = e.memoizedState !== null),
				t !== null && (t.memoizedState !== null) !== r && (e.flags |= 8192),
				r && e.mode & 1
					? Sn & 1073741824 && (Lt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
					: Lt(e),
				null
			);
		case 24:
			return null;
		case 25:
			return null;
	}
	throw Error(L(156, e.tag));
}
function _x(t, e) {
	switch ((Gd(e), e.tag)) {
		case 1:
			return (
				hn(e.type) && ha(),
				(t = e.flags),
				t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
			);
		case 3:
			return (
				ho(),
				je(dn),
				je(bt),
				ih(),
				(t = e.flags),
				t & 65536 && !(t & 128) ? ((e.flags = (t & -65537) | 128), e) : null
			);
		case 5:
			return rh(e), null;
		case 13:
			if (
				(je(Ue), (t = e.memoizedState), t !== null && t.dehydrated !== null)
			) {
				if (e.alternate === null) throw Error(L(340));
				co();
			}
			return (
				(t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
			);
		case 19:
			return je(Ue), null;
		case 4:
			return ho(), null;
		case 10:
			return Jd(e.type._context), null;
		case 22:
		case 23:
			return mh(), null;
		case 24:
			return null;
		default:
			return null;
	}
}
var vu = !1,
	$t = !1,
	gx = typeof WeakSet == 'function' ? WeakSet : Set,
	W = null;
function bs(t, e) {
	var n = t.ref;
	if (n !== null)
		if (typeof n == 'function')
			try {
				n(null);
			} catch (r) {
				Xe(t, e, r);
			}
		else n.current = null;
}
function Yf(t, e, n) {
	try {
		n();
	} catch (r) {
		Xe(t, e, r);
	}
}
var Gp = !1;
function vx(t, e) {
	if (((jf = aa), (t = r_()), Qd(t))) {
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
	for (Of = { focusedElem: t, selectionRange: n }, aa = !1, W = e; W !== null; )
		if (((e = W), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null))
			(t.return = e), (W = t);
		else
			for (; W !== null; ) {
				e = W;
				try {
					var v = e.alternate;
					if (e.flags & 1024)
						switch (e.tag) {
							case 0:
							case 11:
							case 15:
								break;
							case 1:
								if (v !== null) {
									var m = v.memoizedProps,
										T = v.memoizedState,
										_ = e.stateNode,
										p = _.getSnapshotBeforeUpdate(
											e.elementType === e.type ? m : sr(e.type, m),
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
								throw Error(L(163));
						}
				} catch (x) {
					Xe(e, e.return, x);
				}
				if (((t = e.sibling), t !== null)) {
					(t.return = e.return), (W = t);
					break;
				}
				W = e.return;
			}
	return (v = Gp), (Gp = !1), v;
}
function sl(t, e, n) {
	var r = e.updateQueue;
	if (((r = r !== null ? r.lastEffect : null), r !== null)) {
		var i = (r = r.next);
		do {
			if ((i.tag & t) === t) {
				var s = i.destroy;
				(i.destroy = void 0), s !== void 0 && Yf(e, n, s);
			}
			i = i.next;
		} while (i !== r);
	}
}
function ec(t, e) {
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
function Qf(t) {
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
function eg(t) {
	var e = t.alternate;
	e !== null && ((t.alternate = null), eg(e)),
		(t.child = null),
		(t.deletions = null),
		(t.sibling = null),
		t.tag === 5 &&
			((e = t.stateNode),
			e !== null &&
				(delete e[wr], delete e[Ml], delete e[Df], delete e[ex], delete e[tx])),
		(t.stateNode = null),
		(t.return = null),
		(t.dependencies = null),
		(t.memoizedProps = null),
		(t.memoizedState = null),
		(t.pendingProps = null),
		(t.stateNode = null),
		(t.updateQueue = null);
}
function tg(t) {
	return t.tag === 5 || t.tag === 3 || t.tag === 4;
}
function Kp(t) {
	e: for (;;) {
		for (; t.sibling === null; ) {
			if (t.return === null || tg(t.return)) return null;
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
function Xf(t, e, n) {
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
					n != null || e.onclick !== null || (e.onclick = da));
	else if (r !== 4 && ((t = t.child), t !== null))
		for (Xf(t, e, n), t = t.sibling; t !== null; ) Xf(t, e, n), (t = t.sibling);
}
function Gf(t, e, n) {
	var r = t.tag;
	if (r === 5 || r === 6)
		(t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
	else if (r !== 4 && ((t = t.child), t !== null))
		for (Gf(t, e, n), t = t.sibling; t !== null; ) Gf(t, e, n), (t = t.sibling);
}
var Nt = null,
	or = !1;
function ni(t, e, n) {
	for (n = n.child; n !== null; ) ng(t, e, n), (n = n.sibling);
}
function ng(t, e, n) {
	if (Cr && typeof Cr.onCommitFiberUnmount == 'function')
		try {
			Cr.onCommitFiberUnmount(Ya, n);
		} catch {}
	switch (n.tag) {
		case 5:
			$t || bs(n, e);
		case 6:
			var r = Nt,
				i = or;
			(Nt = null),
				ni(t, e, n),
				(Nt = r),
				(or = i),
				Nt !== null &&
					(or
						? ((t = Nt),
							(n = n.stateNode),
							t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n))
						: Nt.removeChild(n.stateNode));
			break;
		case 18:
			Nt !== null &&
				(or
					? ((t = Nt),
						(n = n.stateNode),
						t.nodeType === 8
							? jc(t.parentNode, n)
							: t.nodeType === 1 && jc(t, n),
						Cl(t))
					: jc(Nt, n.stateNode));
			break;
		case 4:
			(r = Nt),
				(i = or),
				(Nt = n.stateNode.containerInfo),
				(or = !0),
				ni(t, e, n),
				(Nt = r),
				(or = i);
			break;
		case 0:
		case 11:
		case 14:
		case 15:
			if (
				!$t &&
				((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
			) {
				i = r = r.next;
				do {
					var s = i,
						o = s.destroy;
					(s = s.tag),
						o !== void 0 && (s & 2 || s & 4) && Yf(n, e, o),
						(i = i.next);
				} while (i !== r);
			}
			ni(t, e, n);
			break;
		case 1:
			if (
				!$t &&
				(bs(n, e),
				(r = n.stateNode),
				typeof r.componentWillUnmount == 'function')
			)
				try {
					(r.props = n.memoizedProps),
						(r.state = n.memoizedState),
						r.componentWillUnmount();
				} catch (l) {
					Xe(n, e, l);
				}
			ni(t, e, n);
			break;
		case 21:
			ni(t, e, n);
			break;
		case 22:
			n.mode & 1
				? (($t = (r = $t) || n.memoizedState !== null), ni(t, e, n), ($t = r))
				: ni(t, e, n);
			break;
		default:
			ni(t, e, n);
	}
}
function qp(t) {
	var e = t.updateQueue;
	if (e !== null) {
		t.updateQueue = null;
		var n = t.stateNode;
		n === null && (n = t.stateNode = new gx()),
			e.forEach(function (r) {
				var i = Px.bind(null, t, r);
				n.has(r) || (n.add(r), r.then(i, i));
			});
	}
}
function rr(t, e) {
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
							(Nt = l.stateNode), (or = !1);
							break e;
						case 3:
							(Nt = l.stateNode.containerInfo), (or = !0);
							break e;
						case 4:
							(Nt = l.stateNode.containerInfo), (or = !0);
							break e;
					}
					l = l.return;
				}
				if (Nt === null) throw Error(L(160));
				ng(s, o, i), (Nt = null), (or = !1);
				var u = i.alternate;
				u !== null && (u.return = null), (i.return = null);
			} catch (a) {
				Xe(i, e, a);
			}
		}
	if (e.subtreeFlags & 12854)
		for (e = e.child; e !== null; ) rg(e, t), (e = e.sibling);
}
function rg(t, e) {
	var n = t.alternate,
		r = t.flags;
	switch (t.tag) {
		case 0:
		case 11:
		case 14:
		case 15:
			if ((rr(e, t), gr(t), r & 4)) {
				try {
					sl(3, t, t.return), ec(3, t);
				} catch (m) {
					Xe(t, t.return, m);
				}
				try {
					sl(5, t, t.return);
				} catch (m) {
					Xe(t, t.return, m);
				}
			}
			break;
		case 1:
			rr(e, t), gr(t), r & 512 && n !== null && bs(n, n.return);
			break;
		case 5:
			if (
				(rr(e, t),
				gr(t),
				r & 512 && n !== null && bs(n, n.return),
				t.flags & 32)
			) {
				var i = t.stateNode;
				try {
					Sl(i, '');
				} catch (m) {
					Xe(t, t.return, m);
				}
			}
			if (r & 4 && ((i = t.stateNode), i != null)) {
				var s = t.memoizedProps,
					o = n !== null ? n.memoizedProps : s,
					l = t.type,
					u = t.updateQueue;
				if (((t.updateQueue = null), u !== null))
					try {
						l === 'input' && s.type === 'radio' && s.name != null && T0(i, s),
							yf(l, o);
						var a = yf(l, s);
						for (o = 0; o < u.length; o += 2) {
							var c = u[o],
								d = u[o + 1];
							c === 'style'
								? j0(i, d)
								: c === 'dangerouslySetInnerHTML'
									? P0(i, d)
									: c === 'children'
										? Sl(i, d)
										: Ad(i, c, d, a);
						}
						switch (l) {
							case 'input':
								pf(i, s);
								break;
							case 'textarea':
								E0(i, s);
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
						i[Ml] = s;
					} catch (m) {
						Xe(t, t.return, m);
					}
			}
			break;
		case 6:
			if ((rr(e, t), gr(t), r & 4)) {
				if (t.stateNode === null) throw Error(L(162));
				(i = t.stateNode), (s = t.memoizedProps);
				try {
					i.nodeValue = s;
				} catch (m) {
					Xe(t, t.return, m);
				}
			}
			break;
		case 3:
			if (
				(rr(e, t), gr(t), r & 4 && n !== null && n.memoizedState.isDehydrated)
			)
				try {
					Cl(e.containerInfo);
				} catch (m) {
					Xe(t, t.return, m);
				}
			break;
		case 4:
			rr(e, t), gr(t);
			break;
		case 13:
			rr(e, t),
				gr(t),
				(i = t.child),
				i.flags & 8192 &&
					((s = i.memoizedState !== null),
					(i.stateNode.isHidden = s),
					!s ||
						(i.alternate !== null && i.alternate.memoizedState !== null) ||
						(hh = et())),
				r & 4 && qp(t);
			break;
		case 22:
			if (
				((c = n !== null && n.memoizedState !== null),
				t.mode & 1 ? (($t = (a = $t) || c), rr(e, t), ($t = a)) : rr(e, t),
				gr(t),
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
									sl(4, f, f.return);
									break;
								case 1:
									bs(f, f.return);
									var v = f.stateNode;
									if (typeof v.componentWillUnmount == 'function') {
										(r = f), (n = f.return);
										try {
											(e = r),
												(v.props = e.memoizedProps),
												(v.state = e.memoizedState),
												v.componentWillUnmount();
										} catch (m) {
											Xe(r, n, m);
										}
									}
									break;
								case 5:
									bs(f, f.return);
									break;
								case 22:
									if (f.memoizedState !== null) {
										Jp(d);
										continue;
									}
							}
							h !== null ? ((h.return = f), (W = h)) : Jp(d);
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
											(l.style.display = N0('display', o)));
							} catch (m) {
								Xe(t, t.return, m);
							}
						}
					} else if (d.tag === 6) {
						if (c === null)
							try {
								d.stateNode.nodeValue = a ? '' : d.memoizedProps;
							} catch (m) {
								Xe(t, t.return, m);
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
			rr(e, t), gr(t), r & 4 && qp(t);
			break;
		case 21:
			break;
		default:
			rr(e, t), gr(t);
	}
}
function gr(t) {
	var e = t.flags;
	if (e & 2) {
		try {
			e: {
				for (var n = t.return; n !== null; ) {
					if (tg(n)) {
						var r = n;
						break e;
					}
					n = n.return;
				}
				throw Error(L(160));
			}
			switch (r.tag) {
				case 5:
					var i = r.stateNode;
					r.flags & 32 && (Sl(i, ''), (r.flags &= -33));
					var s = Kp(t);
					Gf(t, s, i);
					break;
				case 3:
				case 4:
					var o = r.stateNode.containerInfo,
						l = Kp(t);
					Xf(t, l, o);
					break;
				default:
					throw Error(L(161));
			}
		} catch (u) {
			Xe(t, t.return, u);
		}
		t.flags &= -3;
	}
	e & 4096 && (t.flags &= -4097);
}
function yx(t, e, n) {
	(W = t), ig(t);
}
function ig(t, e, n) {
	for (var r = (t.mode & 1) !== 0; W !== null; ) {
		var i = W,
			s = i.child;
		if (i.tag === 22 && r) {
			var o = i.memoizedState !== null || vu;
			if (!o) {
				var l = i.alternate,
					u = (l !== null && l.memoizedState !== null) || $t;
				l = vu;
				var a = $t;
				if (((vu = o), ($t = u) && !a))
					for (W = i; W !== null; )
						(o = W),
							(u = o.child),
							o.tag === 22 && o.memoizedState !== null
								? em(i)
								: u !== null
									? ((u.return = o), (W = u))
									: em(i);
				for (; s !== null; ) (W = s), ig(s), (s = s.sibling);
				(W = i), (vu = l), ($t = a);
			}
			Zp(t);
		} else
			i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (W = s)) : Zp(t);
	}
}
function Zp(t) {
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
							$t || ec(5, e);
							break;
						case 1:
							var r = e.stateNode;
							if (e.flags & 4 && !$t)
								if (n === null) r.componentDidMount();
								else {
									var i =
										e.elementType === e.type
											? n.memoizedProps
											: sr(e.type, n.memoizedProps);
									r.componentDidUpdate(
										i,
										n.memoizedState,
										r.__reactInternalSnapshotBeforeUpdate,
									);
								}
							var s = e.updateQueue;
							s !== null && zp(e, s, r);
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
								zp(e, o, n);
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
										d !== null && Cl(d);
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
							throw Error(L(163));
					}
				$t || (e.flags & 512 && Qf(e));
			} catch (f) {
				Xe(e, e.return, f);
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
function Jp(t) {
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
function em(t) {
	for (; W !== null; ) {
		var e = W;
		try {
			switch (e.tag) {
				case 0:
				case 11:
				case 15:
					var n = e.return;
					try {
						ec(4, e);
					} catch (u) {
						Xe(e, n, u);
					}
					break;
				case 1:
					var r = e.stateNode;
					if (typeof r.componentDidMount == 'function') {
						var i = e.return;
						try {
							r.componentDidMount();
						} catch (u) {
							Xe(e, i, u);
						}
					}
					var s = e.return;
					try {
						Qf(e);
					} catch (u) {
						Xe(e, s, u);
					}
					break;
				case 5:
					var o = e.return;
					try {
						Qf(e);
					} catch (u) {
						Xe(e, o, u);
					}
			}
		} catch (u) {
			Xe(e, e.return, u);
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
var xx = Math.ceil,
	ka = Jr.ReactCurrentDispatcher,
	fh = Jr.ReactCurrentOwner,
	Hn = Jr.ReactCurrentBatchConfig,
	_e = 0,
	wt = null,
	st = null,
	Ot = 0,
	Sn = 0,
	Hs = Di(0),
	ht = 0,
	Fl = null,
	ps = 0,
	tc = 0,
	dh = 0,
	ol = null,
	cn = null,
	hh = 0,
	mo = 1 / 0,
	Lr = null,
	Ta = !1,
	Kf = null,
	wi = null,
	yu = !1,
	ai = null,
	Ea = 0,
	ll = 0,
	qf = null,
	Hu = -1,
	Yu = 0;
function nn() {
	return _e & 6 ? et() : Hu !== -1 ? Hu : (Hu = et());
}
function Si(t) {
	return t.mode & 1
		? _e & 2 && Ot !== 0
			? Ot & -Ot
			: rx.transition !== null
				? (Yu === 0 && (Yu = U0()), Yu)
				: ((t = xe),
					t !== 0 || ((t = window.event), (t = t === void 0 ? 16 : X0(t.type))),
					t)
		: 1;
}
function fr(t, e, n, r) {
	if (50 < ll) throw ((ll = 0), (qf = null), Error(L(185)));
	Xl(t, n, r),
		(!(_e & 2) || t !== wt) &&
			(t === wt && (!(_e & 2) && (tc |= n), ht === 4 && li(t, Ot)),
			pn(t, r),
			n === 1 && _e === 0 && !(e.mode & 1) && ((mo = et() + 500), qa && Ai()));
}
function pn(t, e) {
	var n = t.callbackNode;
	ry(t, e);
	var r = ua(t, t === wt ? Ot : 0);
	if (r === 0)
		n !== null && ap(n), (t.callbackNode = null), (t.callbackPriority = 0);
	else if (((e = r & -r), t.callbackPriority !== e)) {
		if ((n != null && ap(n), e === 1))
			t.tag === 0 ? nx(tm.bind(null, t)) : h_(tm.bind(null, t)),
				Zy(function () {
					!(_e & 6) && Ai();
				}),
				(n = null);
		else {
			switch (B0(r)) {
				case 1:
					n = Vd;
					break;
				case 4:
					n = V0;
					break;
				case 16:
					n = la;
					break;
				case 536870912:
					n = $0;
					break;
				default:
					n = la;
			}
			n = dg(n, sg.bind(null, t));
		}
		(t.callbackPriority = e), (t.callbackNode = n);
	}
}
function sg(t, e) {
	if (((Hu = -1), (Yu = 0), _e & 6)) throw Error(L(327));
	var n = t.callbackNode;
	if (to() && t.callbackNode !== n) return null;
	var r = ua(t, t === wt ? Ot : 0);
	if (r === 0) return null;
	if (r & 30 || r & t.expiredLanes || e) e = Ca(t, r);
	else {
		e = r;
		var i = _e;
		_e |= 2;
		var s = lg();
		(wt !== t || Ot !== e) && ((Lr = null), (mo = et() + 500), ns(t, e));
		do
			try {
				kx();
				break;
			} catch (l) {
				og(t, l);
			}
		while (!0);
		Zd(),
			(ka.current = s),
			(_e = i),
			st !== null ? (e = 0) : ((wt = null), (Ot = 0), (e = ht));
	}
	if (e !== 0) {
		if (
			(e === 2 && ((i = Tf(t)), i !== 0 && ((r = i), (e = Zf(t, i)))), e === 1)
		)
			throw ((n = Fl), ns(t, 0), li(t, r), pn(t, et()), n);
		if (e === 6) li(t, r);
		else {
			if (
				((i = t.current.alternate),
				!(r & 30) &&
					!wx(i) &&
					((e = Ca(t, r)),
					e === 2 && ((s = Tf(t)), s !== 0 && ((r = s), (e = Zf(t, s)))),
					e === 1))
			)
				throw ((n = Fl), ns(t, 0), li(t, r), pn(t, et()), n);
			switch (((t.finishedWork = i), (t.finishedLanes = r), e)) {
				case 0:
				case 1:
					throw Error(L(345));
				case 2:
					Yi(t, cn, Lr);
					break;
				case 3:
					if (
						(li(t, r), (r & 130023424) === r && ((e = hh + 500 - et()), 10 < e))
					) {
						if (ua(t, 0) !== 0) break;
						if (((i = t.suspendedLanes), (i & r) !== r)) {
							nn(), (t.pingedLanes |= t.suspendedLanes & i);
							break;
						}
						t.timeoutHandle = Rf(Yi.bind(null, t, cn, Lr), e);
						break;
					}
					Yi(t, cn, Lr);
					break;
				case 4:
					if ((li(t, r), (r & 4194240) === r)) break;
					for (e = t.eventTimes, i = -1; 0 < r; ) {
						var o = 31 - cr(r);
						(s = 1 << o), (o = e[o]), o > i && (i = o), (r &= ~s);
					}
					if (
						((r = i),
						(r = et() - r),
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
													: 1960 * xx(r / 1960)) - r),
						10 < r)
					) {
						t.timeoutHandle = Rf(Yi.bind(null, t, cn, Lr), r);
						break;
					}
					Yi(t, cn, Lr);
					break;
				case 5:
					Yi(t, cn, Lr);
					break;
				default:
					throw Error(L(329));
			}
		}
	}
	return pn(t, et()), t.callbackNode === n ? sg.bind(null, t) : null;
}
function Zf(t, e) {
	var n = ol;
	return (
		t.current.memoizedState.isDehydrated && (ns(t, e).flags |= 256),
		(t = Ca(t, e)),
		t !== 2 && ((e = cn), (cn = n), e !== null && Jf(e)),
		t
	);
}
function Jf(t) {
	cn === null ? (cn = t) : cn.push.apply(cn, t);
}
function wx(t) {
	for (var e = t; ; ) {
		if (e.flags & 16384) {
			var n = e.updateQueue;
			if (n !== null && ((n = n.stores), n !== null))
				for (var r = 0; r < n.length; r++) {
					var i = n[r],
						s = i.getSnapshot;
					i = i.value;
					try {
						if (!dr(s(), i)) return !1;
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
function li(t, e) {
	for (
		e &= ~dh,
			e &= ~tc,
			t.suspendedLanes |= e,
			t.pingedLanes &= ~e,
			t = t.expirationTimes;
		0 < e;

	) {
		var n = 31 - cr(e),
			r = 1 << n;
		(t[n] = -1), (e &= ~r);
	}
}
function tm(t) {
	if (_e & 6) throw Error(L(327));
	to();
	var e = ua(t, 0);
	if (!(e & 1)) return pn(t, et()), null;
	var n = Ca(t, e);
	if (t.tag !== 0 && n === 2) {
		var r = Tf(t);
		r !== 0 && ((e = r), (n = Zf(t, r)));
	}
	if (n === 1) throw ((n = Fl), ns(t, 0), li(t, e), pn(t, et()), n);
	if (n === 6) throw Error(L(345));
	return (
		(t.finishedWork = t.current.alternate),
		(t.finishedLanes = e),
		Yi(t, cn, Lr),
		pn(t, et()),
		null
	);
}
function ph(t, e) {
	var n = _e;
	_e |= 1;
	try {
		return t(e);
	} finally {
		(_e = n), _e === 0 && ((mo = et() + 500), qa && Ai());
	}
}
function ms(t) {
	ai !== null && ai.tag === 0 && !(_e & 6) && to();
	var e = _e;
	_e |= 1;
	var n = Hn.transition,
		r = xe;
	try {
		if (((Hn.transition = null), (xe = 1), t)) return t();
	} finally {
		(xe = r), (Hn.transition = n), (_e = e), !(_e & 6) && Ai();
	}
}
function mh() {
	(Sn = Hs.current), je(Hs);
}
function ns(t, e) {
	(t.finishedWork = null), (t.finishedLanes = 0);
	var n = t.timeoutHandle;
	if ((n !== -1 && ((t.timeoutHandle = -1), qy(n)), st !== null))
		for (n = st.return; n !== null; ) {
			var r = n;
			switch ((Gd(r), r.tag)) {
				case 1:
					(r = r.type.childContextTypes), r != null && ha();
					break;
				case 3:
					ho(), je(dn), je(bt), ih();
					break;
				case 5:
					rh(r);
					break;
				case 4:
					ho();
					break;
				case 13:
					je(Ue);
					break;
				case 19:
					je(Ue);
					break;
				case 10:
					Jd(r.type._context);
					break;
				case 22:
				case 23:
					mh();
			}
			n = n.return;
		}
	if (
		((wt = t),
		(st = t = ki(t.current, null)),
		(Ot = Sn = e),
		(ht = 0),
		(Fl = null),
		(dh = tc = ps = 0),
		(cn = ol = null),
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
function og(t, e) {
	do {
		var n = st;
		try {
			if ((Zd(), (Bu.current = Sa), wa)) {
				for (var r = be.memoizedState; r !== null; ) {
					var i = r.queue;
					i !== null && (i.pending = null), (r = r.next);
				}
				wa = !1;
			}
			if (
				((hs = 0),
				(yt = ft = be = null),
				(il = !1),
				(Al = 0),
				(fh.current = null),
				n === null || n.return === null)
			) {
				(ht = 1), (Fl = e), (st = null);
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
					var h = Bp(o);
					if (h !== null) {
						(h.flags &= -257),
							Wp(h, o, l, s, e),
							h.mode & 1 && Up(s, a, e),
							(e = h),
							(u = a);
						var v = e.updateQueue;
						if (v === null) {
							var m = new Set();
							m.add(u), (e.updateQueue = m);
						} else v.add(u);
						break e;
					} else {
						if (!(e & 1)) {
							Up(s, a, e), _h();
							break e;
						}
						u = Error(L(426));
					}
				} else if (ze && l.mode & 1) {
					var T = Bp(o);
					if (T !== null) {
						!(T.flags & 65536) && (T.flags |= 256),
							Wp(T, o, l, s, e),
							Kd(po(u, l));
						break e;
					}
				}
				(s = u = po(u, l)),
					ht !== 4 && (ht = 2),
					ol === null ? (ol = [s]) : ol.push(s),
					(s = o);
				do {
					switch (s.tag) {
						case 3:
							(s.flags |= 65536), (e &= -e), (s.lanes |= e);
							var _ = W_(s, u, e);
							Ap(s, _);
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
										(wi === null || !wi.has(y))))
							) {
								(s.flags |= 65536), (e &= -e), (s.lanes |= e);
								var x = b_(s, l, e);
								Ap(s, x);
								break e;
							}
					}
					s = s.return;
				} while (s !== null);
			}
			ag(n);
		} catch (k) {
			(e = k), st === n && n !== null && (st = n = n.return);
			continue;
		}
		break;
	} while (!0);
}
function lg() {
	var t = ka.current;
	return (ka.current = Sa), t === null ? Sa : t;
}
function _h() {
	(ht === 0 || ht === 3 || ht === 2) && (ht = 4),
		wt === null || (!(ps & 268435455) && !(tc & 268435455)) || li(wt, Ot);
}
function Ca(t, e) {
	var n = _e;
	_e |= 2;
	var r = lg();
	(wt !== t || Ot !== e) && ((Lr = null), ns(t, e));
	do
		try {
			Sx();
			break;
		} catch (i) {
			og(t, i);
		}
	while (!0);
	if ((Zd(), (_e = n), (ka.current = r), st !== null)) throw Error(L(261));
	return (wt = null), (Ot = 0), ht;
}
function Sx() {
	for (; st !== null; ) ug(st);
}
function kx() {
	for (; st !== null && !X1(); ) ug(st);
}
function ug(t) {
	var e = fg(t.alternate, t, Sn);
	(t.memoizedProps = t.pendingProps),
		e === null ? ag(t) : (st = e),
		(fh.current = null);
}
function ag(t) {
	var e = t;
	do {
		var n = e.alternate;
		if (((t = e.return), e.flags & 32768)) {
			if (((n = _x(n, e)), n !== null)) {
				(n.flags &= 32767), (st = n);
				return;
			}
			if (t !== null)
				(t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null);
			else {
				(ht = 6), (st = null);
				return;
			}
		} else if (((n = mx(n, e, Sn)), n !== null)) {
			st = n;
			return;
		}
		if (((e = e.sibling), e !== null)) {
			st = e;
			return;
		}
		st = e = t;
	} while (e !== null);
	ht === 0 && (ht = 5);
}
function Yi(t, e, n) {
	var r = xe,
		i = Hn.transition;
	try {
		(Hn.transition = null), (xe = 1), Tx(t, e, n, r);
	} finally {
		(Hn.transition = i), (xe = r);
	}
	return null;
}
function Tx(t, e, n, r) {
	do to();
	while (ai !== null);
	if (_e & 6) throw Error(L(327));
	n = t.finishedWork;
	var i = t.finishedLanes;
	if (n === null) return null;
	if (((t.finishedWork = null), (t.finishedLanes = 0), n === t.current))
		throw Error(L(177));
	(t.callbackNode = null), (t.callbackPriority = 0);
	var s = n.lanes | n.childLanes;
	if (
		(iy(t, s),
		t === wt && ((st = wt = null), (Ot = 0)),
		(!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
			yu ||
			((yu = !0),
			dg(la, function () {
				return to(), null;
			})),
		(s = (n.flags & 15990) !== 0),
		n.subtreeFlags & 15990 || s)
	) {
		(s = Hn.transition), (Hn.transition = null);
		var o = xe;
		xe = 1;
		var l = _e;
		(_e |= 4),
			(fh.current = null),
			vx(t, n),
			rg(n, t),
			by(Of),
			(aa = !!jf),
			(Of = jf = null),
			(t.current = n),
			yx(n),
			G1(),
			(_e = l),
			(xe = o),
			(Hn.transition = s);
	} else t.current = n;
	if (
		(yu && ((yu = !1), (ai = t), (Ea = i)),
		(s = t.pendingLanes),
		s === 0 && (wi = null),
		Z1(n.stateNode),
		pn(t, et()),
		e !== null)
	)
		for (r = t.onRecoverableError, n = 0; n < e.length; n++)
			(i = e[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
	if (Ta) throw ((Ta = !1), (t = Kf), (Kf = null), t);
	return (
		Ea & 1 && t.tag !== 0 && to(),
		(s = t.pendingLanes),
		s & 1 ? (t === qf ? ll++ : ((ll = 0), (qf = t))) : (ll = 0),
		Ai(),
		null
	);
}
function to() {
	if (ai !== null) {
		var t = B0(Ea),
			e = Hn.transition,
			n = xe;
		try {
			if (((Hn.transition = null), (xe = 16 > t ? 16 : t), ai === null))
				var r = !1;
			else {
				if (((t = ai), (ai = null), (Ea = 0), _e & 6)) throw Error(L(331));
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
											sl(8, c, s);
									}
									var d = c.child;
									if (d !== null) (d.return = c), (W = d);
									else
										for (; W !== null; ) {
											c = W;
											var f = c.sibling,
												h = c.return;
											if ((eg(c), c === a)) {
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
							var v = s.alternate;
							if (v !== null) {
								var m = v.child;
								if (m !== null) {
									v.child = null;
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
										sl(9, s, s.return);
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
											ec(9, l);
									}
								} catch (k) {
									Xe(l, l.return, k);
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
					((_e = i), Ai(), Cr && typeof Cr.onPostCommitFiberRoot == 'function')
				)
					try {
						Cr.onPostCommitFiberRoot(Ya, t);
					} catch {}
				r = !0;
			}
			return r;
		} finally {
			(xe = n), (Hn.transition = e);
		}
	}
	return !1;
}
function nm(t, e, n) {
	(e = po(n, e)),
		(e = W_(t, e, 1)),
		(t = xi(t, e, 1)),
		(e = nn()),
		t !== null && (Xl(t, 1, e), pn(t, e));
}
function Xe(t, e, n) {
	if (t.tag === 3) nm(t, t, n);
	else
		for (; e !== null; ) {
			if (e.tag === 3) {
				nm(e, t, n);
				break;
			} else if (e.tag === 1) {
				var r = e.stateNode;
				if (
					typeof e.type.getDerivedStateFromError == 'function' ||
					(typeof r.componentDidCatch == 'function' &&
						(wi === null || !wi.has(r)))
				) {
					(t = po(n, t)),
						(t = b_(e, t, 1)),
						(e = xi(e, t, 1)),
						(t = nn()),
						e !== null && (Xl(e, 1, t), pn(e, t));
					break;
				}
			}
			e = e.return;
		}
}
function Ex(t, e, n) {
	var r = t.pingCache;
	r !== null && r.delete(e),
		(e = nn()),
		(t.pingedLanes |= t.suspendedLanes & n),
		wt === t &&
			(Ot & n) === n &&
			(ht === 4 || (ht === 3 && (Ot & 130023424) === Ot && 500 > et() - hh)
				? ns(t, 0)
				: (dh |= n)),
		pn(t, e);
}
function cg(t, e) {
	e === 0 &&
		(t.mode & 1
			? ((e = au), (au <<= 1), !(au & 130023424) && (au = 4194304))
			: (e = 1));
	var n = nn();
	(t = Gr(t, e)), t !== null && (Xl(t, e, n), pn(t, n));
}
function Cx(t) {
	var e = t.memoizedState,
		n = 0;
	e !== null && (n = e.retryLane), cg(t, n);
}
function Px(t, e) {
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
			throw Error(L(314));
	}
	r !== null && r.delete(e), cg(t, n);
}
var fg;
fg = function (t, e, n) {
	if (t !== null)
		if (t.memoizedProps !== e.pendingProps || dn.current) fn = !0;
		else {
			if (!(t.lanes & n) && !(e.flags & 128)) return (fn = !1), px(t, e, n);
			fn = !!(t.flags & 131072);
		}
	else (fn = !1), ze && e.flags & 1048576 && p_(e, _a, e.index);
	switch (((e.lanes = 0), e.tag)) {
		case 2:
			var r = e.type;
			bu(t, e), (t = e.pendingProps);
			var i = ao(e, bt.current);
			eo(e, n), (i = oh(null, e, r, t, i, n));
			var s = lh();
			return (
				(e.flags |= 1),
				typeof i == 'object' &&
				i !== null &&
				typeof i.render == 'function' &&
				i.$$typeof === void 0
					? ((e.tag = 1),
						(e.memoizedState = null),
						(e.updateQueue = null),
						hn(r) ? ((s = !0), pa(e)) : (s = !1),
						(e.memoizedState =
							i.state !== null && i.state !== void 0 ? i.state : null),
						th(e),
						(i.updater = Za),
						(e.stateNode = i),
						(i._reactInternals = e),
						Vf(e, r, t, n),
						(e = Bf(null, e, r, !0, s, n)))
					: ((e.tag = 0), ze && s && Xd(e), Xt(null, e, i, n), (e = e.child)),
				e
			);
		case 16:
			r = e.elementType;
			e: {
				switch (
					(bu(t, e),
					(t = e.pendingProps),
					(i = r._init),
					(r = i(r._payload)),
					(e.type = r),
					(i = e.tag = jx(r)),
					(t = sr(r, t)),
					i)
				) {
					case 0:
						e = Uf(null, e, r, t, n);
						break e;
					case 1:
						e = Yp(null, e, r, t, n);
						break e;
					case 11:
						e = bp(null, e, r, t, n);
						break e;
					case 14:
						e = Hp(null, e, r, sr(r.type, t), n);
						break e;
				}
				throw Error(L(306, r, ''));
			}
			return e;
		case 0:
			return (
				(r = e.type),
				(i = e.pendingProps),
				(i = e.elementType === r ? i : sr(r, i)),
				Uf(t, e, r, i, n)
			);
		case 1:
			return (
				(r = e.type),
				(i = e.pendingProps),
				(i = e.elementType === r ? i : sr(r, i)),
				Yp(t, e, r, i, n)
			);
		case 3:
			e: {
				if ((X_(e), t === null)) throw Error(L(387));
				(r = e.pendingProps),
					(s = e.memoizedState),
					(i = s.element),
					v_(t, e),
					ya(e, r, null, n);
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
						(i = po(Error(L(423)), e)), (e = Qp(t, e, r, n, i));
						break e;
					} else if (r !== i) {
						(i = po(Error(L(424)), e)), (e = Qp(t, e, r, n, i));
						break e;
					} else
						for (
							Pn = yi(e.stateNode.containerInfo.firstChild),
								jn = e,
								ze = !0,
								lr = null,
								n = S_(e, null, r, n),
								e.child = n;
							n;

						)
							(n.flags = (n.flags & -3) | 4096), (n = n.sibling);
				else {
					if ((co(), r === i)) {
						e = Kr(t, e, n);
						break e;
					}
					Xt(t, e, r, n);
				}
				e = e.child;
			}
			return e;
		case 5:
			return (
				k_(e),
				t === null && Lf(e),
				(r = e.type),
				(i = e.pendingProps),
				(s = t !== null ? t.memoizedProps : null),
				(o = i.children),
				Mf(r, i) ? (o = null) : s !== null && Mf(r, s) && (e.flags |= 32),
				Q_(t, e),
				Xt(t, e, o, n),
				e.child
			);
		case 6:
			return t === null && Lf(e), null;
		case 13:
			return G_(t, e, n);
		case 4:
			return (
				nh(e, e.stateNode.containerInfo),
				(r = e.pendingProps),
				t === null ? (e.child = fo(e, null, r, n)) : Xt(t, e, r, n),
				e.child
			);
		case 11:
			return (
				(r = e.type),
				(i = e.pendingProps),
				(i = e.elementType === r ? i : sr(r, i)),
				bp(t, e, r, i, n)
			);
		case 7:
			return Xt(t, e, e.pendingProps, n), e.child;
		case 8:
			return Xt(t, e, e.pendingProps.children, n), e.child;
		case 12:
			return Xt(t, e, e.pendingProps.children, n), e.child;
		case 10:
			e: {
				if (
					((r = e.type._context),
					(i = e.pendingProps),
					(s = e.memoizedProps),
					(o = i.value),
					Te(ga, r._currentValue),
					(r._currentValue = o),
					s !== null)
				)
					if (dr(s.value, o)) {
						if (s.children === i.children && !dn.current) {
							e = Kr(t, e, n);
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
											(u = Hr(-1, n & -n)), (u.tag = 2);
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
											Ff(s.return, n, e),
											(l.lanes |= n);
										break;
									}
									u = u.next;
								}
							} else if (s.tag === 10) o = s.type === e.type ? null : s.child;
							else if (s.tag === 18) {
								if (((o = s.return), o === null)) throw Error(L(341));
								(o.lanes |= n),
									(l = o.alternate),
									l !== null && (l.lanes |= n),
									Ff(o, n, e),
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
				Xt(t, e, i.children, n), (e = e.child);
			}
			return e;
		case 9:
			return (
				(i = e.type),
				(r = e.pendingProps.children),
				eo(e, n),
				(i = Qn(i)),
				(r = r(i)),
				(e.flags |= 1),
				Xt(t, e, r, n),
				e.child
			);
		case 14:
			return (
				(r = e.type),
				(i = sr(r, e.pendingProps)),
				(i = sr(r.type, i)),
				Hp(t, e, r, i, n)
			);
		case 15:
			return H_(t, e, e.type, e.pendingProps, n);
		case 17:
			return (
				(r = e.type),
				(i = e.pendingProps),
				(i = e.elementType === r ? i : sr(r, i)),
				bu(t, e),
				(e.tag = 1),
				hn(r) ? ((t = !0), pa(e)) : (t = !1),
				eo(e, n),
				x_(e, r, i),
				Vf(e, r, i, n),
				Bf(null, e, r, !0, t, n)
			);
		case 19:
			return K_(t, e, n);
		case 22:
			return Y_(t, e, n);
	}
	throw Error(L(156, e.tag));
};
function dg(t, e) {
	return I0(t, e);
}
function Nx(t, e, n, r) {
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
function Bn(t, e, n, r) {
	return new Nx(t, e, n, r);
}
function gh(t) {
	return (t = t.prototype), !(!t || !t.isReactComponent);
}
function jx(t) {
	if (typeof t == 'function') return gh(t) ? 1 : 0;
	if (t != null) {
		if (((t = t.$$typeof), t === Ld)) return 11;
		if (t === Fd) return 14;
	}
	return 2;
}
function ki(t, e) {
	var n = t.alternate;
	return (
		n === null
			? ((n = Bn(t.tag, e, t.key, t.mode)),
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
function Qu(t, e, n, r, i, s) {
	var o = 2;
	if (((r = t), typeof t == 'function')) gh(t) && (o = 1);
	else if (typeof t == 'string') o = 5;
	else
		e: switch (t) {
			case zs:
				return rs(n.children, i, s, e);
			case zd:
				(o = 8), (i |= 8);
				break;
			case af:
				return (
					(t = Bn(12, n, e, i | 2)), (t.elementType = af), (t.lanes = s), t
				);
			case cf:
				return (t = Bn(13, n, e, i)), (t.elementType = cf), (t.lanes = s), t;
			case ff:
				return (t = Bn(19, n, e, i)), (t.elementType = ff), (t.lanes = s), t;
			case w0:
				return nc(n, i, s, e);
			default:
				if (typeof t == 'object' && t !== null)
					switch (t.$$typeof) {
						case y0:
							o = 10;
							break e;
						case x0:
							o = 9;
							break e;
						case Ld:
							o = 11;
							break e;
						case Fd:
							o = 14;
							break e;
						case ii:
							(o = 16), (r = null);
							break e;
					}
				throw Error(L(130, t == null ? t : typeof t, ''));
		}
	return (
		(e = Bn(o, n, e, i)), (e.elementType = t), (e.type = r), (e.lanes = s), e
	);
}
function rs(t, e, n, r) {
	return (t = Bn(7, t, r, e)), (t.lanes = n), t;
}
function nc(t, e, n, r) {
	return (
		(t = Bn(22, t, r, e)),
		(t.elementType = w0),
		(t.lanes = n),
		(t.stateNode = { isHidden: !1 }),
		t
	);
}
function Fc(t, e, n) {
	return (t = Bn(6, t, null, e)), (t.lanes = n), t;
}
function Ic(t, e, n) {
	return (
		(e = Bn(4, t.children !== null ? t.children : [], t.key, e)),
		(e.lanes = n),
		(e.stateNode = {
			containerInfo: t.containerInfo,
			pendingChildren: null,
			implementation: t.implementation,
		}),
		e
	);
}
function Ox(t, e, n, r, i) {
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
		(this.eventTimes = vc(0)),
		(this.expirationTimes = vc(-1)),
		(this.entangledLanes =
			this.finishedLanes =
			this.mutableReadLanes =
			this.expiredLanes =
			this.pingedLanes =
			this.suspendedLanes =
			this.pendingLanes =
				0),
		(this.entanglements = vc(0)),
		(this.identifierPrefix = r),
		(this.onRecoverableError = i),
		(this.mutableSourceEagerHydrationData = null);
}
function vh(t, e, n, r, i, s, o, l, u) {
	return (
		(t = new Ox(t, e, n, l, u)),
		e === 1 ? ((e = 1), s === !0 && (e |= 8)) : (e = 0),
		(s = Bn(3, null, null, e)),
		(t.current = s),
		(s.stateNode = t),
		(s.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: null,
			transitions: null,
			pendingSuspenseBoundaries: null,
		}),
		th(s),
		t
	);
}
function Mx(t, e, n) {
	var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
	return {
		$$typeof: As,
		key: r == null ? null : '' + r,
		children: t,
		containerInfo: e,
		implementation: n,
	};
}
function hg(t) {
	if (!t) return Ni;
	t = t._reactInternals;
	e: {
		if (Ss(t) !== t || t.tag !== 1) throw Error(L(170));
		var e = t;
		do {
			switch (e.tag) {
				case 3:
					e = e.stateNode.context;
					break e;
				case 1:
					if (hn(e.type)) {
						e = e.stateNode.__reactInternalMemoizedMergedChildContext;
						break e;
					}
			}
			e = e.return;
		} while (e !== null);
		throw Error(L(171));
	}
	if (t.tag === 1) {
		var n = t.type;
		if (hn(n)) return d_(t, n, e);
	}
	return e;
}
function pg(t, e, n, r, i, s, o, l, u) {
	return (
		(t = vh(n, r, !0, t, i, s, o, l, u)),
		(t.context = hg(null)),
		(n = t.current),
		(r = nn()),
		(i = Si(n)),
		(s = Hr(r, i)),
		(s.callback = e ?? null),
		xi(n, s, i),
		(t.current.lanes = i),
		Xl(t, i, r),
		pn(t, r),
		t
	);
}
function rc(t, e, n, r) {
	var i = e.current,
		s = nn(),
		o = Si(i);
	return (
		(n = hg(n)),
		e.context === null ? (e.context = n) : (e.pendingContext = n),
		(e = Hr(s, o)),
		(e.payload = { element: t }),
		(r = r === void 0 ? null : r),
		r !== null && (e.callback = r),
		(t = xi(i, e, o)),
		t !== null && (fr(t, i, o, s), Uu(t, i, o)),
		o
	);
}
function Pa(t) {
	if (((t = t.current), !t.child)) return null;
	switch (t.child.tag) {
		case 5:
			return t.child.stateNode;
		default:
			return t.child.stateNode;
	}
}
function rm(t, e) {
	if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
		var n = t.retryLane;
		t.retryLane = n !== 0 && n < e ? n : e;
	}
}
function yh(t, e) {
	rm(t, e), (t = t.alternate) && rm(t, e);
}
function Rx() {
	return null;
}
var mg =
	typeof reportError == 'function'
		? reportError
		: function (t) {
				console.error(t);
			};
function xh(t) {
	this._internalRoot = t;
}
ic.prototype.render = xh.prototype.render = function (t) {
	var e = this._internalRoot;
	if (e === null) throw Error(L(409));
	rc(t, e, null, null);
};
ic.prototype.unmount = xh.prototype.unmount = function () {
	var t = this._internalRoot;
	if (t !== null) {
		this._internalRoot = null;
		var e = t.containerInfo;
		ms(function () {
			rc(null, t, null, null);
		}),
			(e[Xr] = null);
	}
};
function ic(t) {
	this._internalRoot = t;
}
ic.prototype.unstable_scheduleHydration = function (t) {
	if (t) {
		var e = H0();
		t = { blockedOn: null, target: t, priority: e };
		for (var n = 0; n < oi.length && e !== 0 && e < oi[n].priority; n++);
		oi.splice(n, 0, t), n === 0 && Q0(t);
	}
};
function wh(t) {
	return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
}
function sc(t) {
	return !(
		!t ||
		(t.nodeType !== 1 &&
			t.nodeType !== 9 &&
			t.nodeType !== 11 &&
			(t.nodeType !== 8 || t.nodeValue !== ' react-mount-point-unstable '))
	);
}
function im() {}
function Dx(t, e, n, r, i) {
	if (i) {
		if (typeof r == 'function') {
			var s = r;
			r = function () {
				var a = Pa(o);
				s.call(a);
			};
		}
		var o = pg(e, r, t, 0, null, !1, !1, '', im);
		return (
			(t._reactRootContainer = o),
			(t[Xr] = o.current),
			jl(t.nodeType === 8 ? t.parentNode : t),
			ms(),
			o
		);
	}
	for (; (i = t.lastChild); ) t.removeChild(i);
	if (typeof r == 'function') {
		var l = r;
		r = function () {
			var a = Pa(u);
			l.call(a);
		};
	}
	var u = vh(t, 0, !1, null, null, !1, !1, '', im);
	return (
		(t._reactRootContainer = u),
		(t[Xr] = u.current),
		jl(t.nodeType === 8 ? t.parentNode : t),
		ms(function () {
			rc(e, u, n, r);
		}),
		u
	);
}
function oc(t, e, n, r, i) {
	var s = n._reactRootContainer;
	if (s) {
		var o = s;
		if (typeof i == 'function') {
			var l = i;
			i = function () {
				var u = Pa(o);
				l.call(u);
			};
		}
		rc(e, o, t, i);
	} else o = Dx(n, e, t, i, r);
	return Pa(o);
}
W0 = function (t) {
	switch (t.tag) {
		case 3:
			var e = t.stateNode;
			if (e.current.memoizedState.isDehydrated) {
				var n = bo(e.pendingLanes);
				n !== 0 &&
					($d(e, n | 1), pn(e, et()), !(_e & 6) && ((mo = et() + 500), Ai()));
			}
			break;
		case 13:
			ms(function () {
				var r = Gr(t, 1);
				if (r !== null) {
					var i = nn();
					fr(r, t, 1, i);
				}
			}),
				yh(t, 1);
	}
};
Ud = function (t) {
	if (t.tag === 13) {
		var e = Gr(t, 134217728);
		if (e !== null) {
			var n = nn();
			fr(e, t, 134217728, n);
		}
		yh(t, 134217728);
	}
};
b0 = function (t) {
	if (t.tag === 13) {
		var e = Si(t),
			n = Gr(t, e);
		if (n !== null) {
			var r = nn();
			fr(n, t, e, r);
		}
		yh(t, e);
	}
};
H0 = function () {
	return xe;
};
Y0 = function (t, e) {
	var n = xe;
	try {
		return (xe = t), e();
	} finally {
		xe = n;
	}
};
wf = function (t, e, n) {
	switch (e) {
		case 'input':
			if ((pf(t, n), (e = n.name), n.type === 'radio' && e != null)) {
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
						var i = Ka(r);
						if (!i) throw Error(L(90));
						k0(r), pf(r, i);
					}
				}
			}
			break;
		case 'textarea':
			E0(t, n);
			break;
		case 'select':
			(e = n.value), e != null && Ks(t, !!n.multiple, e, !1);
	}
};
R0 = ph;
D0 = ms;
var Ax = { usingClientEntryPoint: !1, Events: [Kl, Vs, Ka, O0, M0, ph] },
	Fo = {
		findFiberByHostInstance: Ki,
		bundleType: 0,
		version: '18.2.0',
		rendererPackageName: 'react-dom',
	},
	zx = {
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
		currentDispatcherRef: Jr.ReactCurrentDispatcher,
		findHostInstanceByFiber: function (t) {
			return (t = L0(t)), t === null ? null : t.stateNode;
		},
		findFiberByHostInstance: Fo.findFiberByHostInstance || Rx,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
	};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
	var xu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	if (!xu.isDisabled && xu.supportsFiber)
		try {
			(Ya = xu.inject(zx)), (Cr = xu);
		} catch {}
}
Dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ax;
Dn.createPortal = function (t, e) {
	var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
	if (!wh(e)) throw Error(L(200));
	return Mx(t, e, null, n);
};
Dn.createRoot = function (t, e) {
	if (!wh(t)) throw Error(L(299));
	var n = !1,
		r = '',
		i = mg;
	return (
		e != null &&
			(e.unstable_strictMode === !0 && (n = !0),
			e.identifierPrefix !== void 0 && (r = e.identifierPrefix),
			e.onRecoverableError !== void 0 && (i = e.onRecoverableError)),
		(e = vh(t, 1, !1, null, null, n, !1, r, i)),
		(t[Xr] = e.current),
		jl(t.nodeType === 8 ? t.parentNode : t),
		new xh(e)
	);
};
Dn.findDOMNode = function (t) {
	if (t == null) return null;
	if (t.nodeType === 1) return t;
	var e = t._reactInternals;
	if (e === void 0)
		throw typeof t.render == 'function'
			? Error(L(188))
			: ((t = Object.keys(t).join(',')), Error(L(268, t)));
	return (t = L0(e)), (t = t === null ? null : t.stateNode), t;
};
Dn.flushSync = function (t) {
	return ms(t);
};
Dn.hydrate = function (t, e, n) {
	if (!sc(e)) throw Error(L(200));
	return oc(null, t, e, !0, n);
};
Dn.hydrateRoot = function (t, e, n) {
	if (!wh(t)) throw Error(L(405));
	var r = (n != null && n.hydratedSources) || null,
		i = !1,
		s = '',
		o = mg;
	if (
		(n != null &&
			(n.unstable_strictMode === !0 && (i = !0),
			n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
			n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
		(e = pg(e, null, t, 1, n ?? null, i, !1, s, o)),
		(t[Xr] = e.current),
		jl(t),
		r)
	)
		for (t = 0; t < r.length; t++)
			(n = r[t]),
				(i = n._getVersion),
				(i = i(n._source)),
				e.mutableSourceEagerHydrationData == null
					? (e.mutableSourceEagerHydrationData = [n, i])
					: e.mutableSourceEagerHydrationData.push(n, i);
	return new ic(e);
};
Dn.render = function (t, e, n) {
	if (!sc(e)) throw Error(L(200));
	return oc(null, t, e, !1, n);
};
Dn.unmountComponentAtNode = function (t) {
	if (!sc(t)) throw Error(L(40));
	return t._reactRootContainer
		? (ms(function () {
				oc(null, null, t, !1, function () {
					(t._reactRootContainer = null), (t[Xr] = null);
				});
			}),
			!0)
		: !1;
};
Dn.unstable_batchedUpdates = ph;
Dn.unstable_renderSubtreeIntoContainer = function (t, e, n, r) {
	if (!sc(n)) throw Error(L(200));
	if (t == null || t._reactInternals === void 0) throw Error(L(38));
	return oc(t, e, n, !1, r);
};
Dn.version = '18.2.0-next-9e3b772b8-20220608';
function _g() {
	if (
		!(
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
		)
	)
		try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_g);
		} catch (t) {
			console.error(t);
		}
}
_g(), (p0.exports = Dn);
var Lx = p0.exports,
	sm = Lx;
(lf.createRoot = sm.createRoot), (lf.hydrateRoot = sm.hydrateRoot);
var om =
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
	Fx = {
		BASE_URL: '/sample-site/',
		MODE: 'production',
		DEV: !1,
		PROD: !0,
		SSR: !1,
	};
const lm = (t) => {
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
						n.forEach((v) => v(e, h));
				}
			},
			i = () => e,
			u = {
				setState: r,
				getState: i,
				getInitialState: () => a,
				subscribe: (c) => (n.add(c), () => n.delete(c)),
				destroy: () => {
					(Fx ? 'production' : void 0) !== 'production' &&
						console.warn(
							'[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected.',
						),
						n.clear();
				},
			},
			a = (e = t(r, i, u));
		return u;
	},
	Ix = (t) => (t ? lm(t) : lm);
var gg = { exports: {} },
	vg = {},
	yg = { exports: {} },
	xg = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _o = te;
function Vx(t, e) {
	return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
}
var $x = typeof Object.is == 'function' ? Object.is : Vx,
	Ux = _o.useState,
	Bx = _o.useEffect,
	Wx = _o.useLayoutEffect,
	bx = _o.useDebugValue;
function Hx(t, e) {
	var n = e(),
		r = Ux({ inst: { value: n, getSnapshot: e } }),
		i = r[0].inst,
		s = r[1];
	return (
		Wx(
			function () {
				(i.value = n), (i.getSnapshot = e), Vc(i) && s({ inst: i });
			},
			[t, n, e],
		),
		Bx(
			function () {
				return (
					Vc(i) && s({ inst: i }),
					t(function () {
						Vc(i) && s({ inst: i });
					})
				);
			},
			[t],
		),
		bx(n),
		n
	);
}
function Vc(t) {
	var e = t.getSnapshot;
	t = t.value;
	try {
		var n = e();
		return !$x(t, n);
	} catch {
		return !0;
	}
}
function Yx(t, e) {
	return e();
}
var Qx =
	typeof window > 'u' ||
	typeof window.document > 'u' ||
	typeof window.document.createElement > 'u'
		? Yx
		: Hx;
xg.useSyncExternalStore =
	_o.useSyncExternalStore !== void 0 ? _o.useSyncExternalStore : Qx;
yg.exports = xg;
var Xx = yg.exports;
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var lc = te,
	Gx = Xx;
function Kx(t, e) {
	return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
}
var qx = typeof Object.is == 'function' ? Object.is : Kx,
	Zx = Gx.useSyncExternalStore,
	Jx = lc.useRef,
	ew = lc.useEffect,
	tw = lc.useMemo,
	nw = lc.useDebugValue;
vg.useSyncExternalStoreWithSelector = function (t, e, n, r, i) {
	var s = Jx(null);
	if (s.current === null) {
		var o = { hasValue: !1, value: null };
		s.current = o;
	} else o = s.current;
	s = tw(
		function () {
			function u(h) {
				if (!a) {
					if (((a = !0), (c = h), (h = r(h)), i !== void 0 && o.hasValue)) {
						var v = o.value;
						if (i(v, h)) return (d = v);
					}
					return (d = h);
				}
				if (((v = d), qx(c, h))) return v;
				var m = r(h);
				return i !== void 0 && i(v, m) ? v : ((c = h), (d = m));
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
	var l = Zx(t, s[0], s[1]);
	return (
		ew(
			function () {
				(o.hasValue = !0), (o.value = l);
			},
			[l],
		),
		nw(l),
		l
	);
};
gg.exports = vg;
var rw = gg.exports;
const iw = Pd(rw);
var wg = {
	BASE_URL: '/sample-site/',
	MODE: 'production',
	DEV: !1,
	PROD: !0,
	SSR: !1,
};
const { useDebugValue: sw } = ct,
	{ useSyncExternalStoreWithSelector: ow } = iw;
let um = !1;
const lw = (t) => t;
function uw(t, e = lw, n) {
	(wg ? 'production' : void 0) !== 'production' &&
		n &&
		!um &&
		(console.warn(
			"[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937",
		),
		(um = !0));
	const r = ow(
		t.subscribe,
		t.getState,
		t.getServerState || t.getInitialState,
		e,
		n,
	);
	return sw(r), r;
}
const am = (t) => {
		(wg ? 'production' : void 0) !== 'production' &&
			typeof t != 'function' &&
			console.warn(
				"[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.",
			);
		const e = typeof t == 'function' ? Ix(t) : t,
			n = (r, i) => uw(e, r, i);
		return Object.assign(n, e), n;
	},
	Sg = (t) => (t ? am(t) : am);
function aw(t, e = 0) {
	te.useEffect(() => {
		if (t) return om.add(t, e), () => om.remove(t);
	}, [t, e]);
}
Sg((t) => ({
	elements: [],
	addElement: (e) => {
		t((n) => ({ elements: [...n.elements, e] }));
	},
	removeElement: (e) => {
		t((n) => ({ elements: n.elements.filter((r) => r !== e) }));
	},
}));
function Na(t, e, n) {
	return Math.max(t, Math.min(e, n));
}
class cw {
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
			const u = Na(0, this.currentTime / this.duration, 1);
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
class fw {
	constructor({ wrapper: e, content: n, autoResize: r = !0 } = {}) {
		_r(this, 'resize', () => {
			this.onWrapperResize(), this.onContentResize();
		});
		_r(this, 'onWrapperResize', () => {
			this.wrapper === window
				? ((this.width = window.innerWidth), (this.height = window.innerHeight))
				: ((this.width = this.wrapper.clientWidth),
					(this.height = this.wrapper.clientHeight));
		});
		_r(this, 'onContentResize', () => {
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
class kg {
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
class dw {
	constructor(
		e,
		{ wheelMultiplier: n = 1, touchMultiplier: r = 2, normalizeWheel: i = !1 },
	) {
		_r(this, 'onTouchStart', (e) => {
			const { clientX: n, clientY: r } = e.targetTouches
				? e.targetTouches[0]
				: e;
			(this.touchStart.x = n),
				(this.touchStart.y = r),
				(this.lastDelta = { x: 0, y: 0 }),
				this.emitter.emit('scroll', { deltaX: 0, deltaY: 0, event: e });
		});
		_r(this, 'onTouchMove', (e) => {
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
		_r(this, 'onTouchEnd', (e) => {
			this.emitter.emit('scroll', {
				deltaX: this.lastDelta.x,
				deltaY: this.lastDelta.y,
				event: e,
			});
		});
		_r(this, 'onWheel', (e) => {
			let { deltaX: n, deltaY: r } = e;
			this.normalizeWheel && ((n = Na(-100, n, 100)), (r = Na(-100, r, 100))),
				(n *= this.wheelMultiplier),
				(r *= this.wheelMultiplier),
				this.emitter.emit('scroll', { deltaX: n, deltaY: r, event: e });
		});
		(this.element = e),
			(this.wheelMultiplier = n),
			(this.touchMultiplier = r),
			(this.normalizeWheel = i),
			(this.touchStart = { x: null, y: null }),
			(this.emitter = new kg()),
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
class hw {
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
		gestureOrientation: v = 'vertical',
		touchMultiplier: m = 1,
		wheelMultiplier: T = 1,
		normalizeWheel: _ = !1,
		autoResize: p = !0,
	} = {}) {
		_r(this, 'onVirtualScroll', ({ deltaX: e, deltaY: n, event: r }) => {
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
					var h, v, m, T;
					return (
						((h = f.hasAttribute) == null
							? void 0
							: h.call(f, 'data-lenis-prevent')) ||
						(i &&
							((v = f.hasAttribute) == null
								? void 0
								: v.call(f, 'data-lenis-prevent-touch'))) ||
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
		_r(this, 'onNativeScroll', () => {
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
				gestureOrientation: v,
				orientation: h,
				touchMultiplier: m,
				wheelMultiplier: T,
				normalizeWheel: _,
				autoResize: p,
			}),
			(this.animate = new cw()),
			(this.emitter = new kg()),
			(this.dimensions = new fw({ wrapper: e, content: n, autoResize: p })),
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
			(this.virtualScroll = new dw(i, {
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
						: (e = Na(0, e, this.limit)),
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
function Tg(t) {
	var e,
		n,
		r = '';
	if (typeof t == 'string' || typeof t == 'number') r += t;
	else if (typeof t == 'object')
		if (Array.isArray(t)) {
			var i = t.length;
			for (e = 0; e < i; e++)
				t[e] && (n = Tg(t[e])) && (r && (r += ' '), (r += n));
		} else for (n in t) t[n] && (r && (r += ' '), (r += n));
	return r;
}
function cm() {
	for (var t, e, n = 0, r = '', i = arguments.length; n < i; n++)
		(t = arguments[n]) && (e = Tg(t)) && (r && (r += ' '), (r += e));
	return r;
}
var Eg = { exports: {} },
	pw = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
	mw = pw,
	_w = mw;
function Cg() {}
function Pg() {}
Pg.resetWarningCache = Cg;
var gw = function () {
	function t(r, i, s, o, l, u) {
		if (u !== _w) {
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
		checkPropTypes: Pg,
		resetWarningCache: Cg,
	};
	return (n.PropTypes = n), n;
};
Eg.exports = gw();
var vw = Eg.exports;
const Ps = Pd(vw);
function ed() {
	return (
		(ed = Object.assign
			? Object.assign.bind()
			: function (t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
					}
					return t;
				}),
		ed.apply(this, arguments)
	);
}
const Ng = te.createContext(),
	jg = Sg(() => ({}));
function yw(t, e = [], n = 0) {
	const {
		lenis: r,
		addCallback: i,
		removeCallback: s,
	} = (function () {
		const o = te.useContext(Ng),
			l = jg();
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
const td = te.forwardRef(
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
			v = te.useCallback((_) => {
				f.current = f.current.filter((p) => p.callback !== _);
			}, []);
		te.useImperativeHandle(
			l,
			() => ({ wrapper: u.current, content: a.current, lenis: c }),
			[c],
		),
			te.useEffect(() => {
				const _ = new hw({
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
			aw((_) => {
				r && (c == null || c.raf(_));
			}, i),
			te.useEffect(() => {
				e && c && jg.setState({ lenis: c, addCallback: h, removeCallback: v });
			}, [e, c, h, v]);
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
				(u.current.className = cm(c == null ? void 0 : c.className, s));
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
			ct.createElement(
				Ng.Provider,
				{ value: { lenis: c, addCallback: h, removeCallback: v } },
				e
					? t
					: ct.createElement(
							'div',
							ed(
								{ ref: u, className: cm(c == null ? void 0 : c.className, s) },
								o,
							),
							ct.createElement('div', { ref: a }, t),
						),
			)
		);
	},
);
(td.displayName = 'ReactLenis'),
	(td.propTypes = {
		children: Ps.node,
		root: Ps.bool,
		options: Ps.object,
		autoRaf: Ps.bool,
		rafPriority: Ps.number,
		className: Ps.string,
	});
const xw = '_header_1kagg_29',
	ww = '_container_1kagg_39',
	Sw = '_logo_1kagg_49',
	kw = '_hamburger_1kagg_64',
	Tw = '_line_1kagg_90',
	Ew = '_nav_1kagg_123',
	Cw = '_menu_1kagg_158',
	Pw = '_underLine_1kagg_162',
	Nw = '_item_1kagg_170',
	Ar = {
		header: xw,
		container: ww,
		logo: Sw,
		hamburger: kw,
		line: Tw,
		nav: Ew,
		menu: Cw,
		underLine: Pw,
		item: Nw,
	};
function jw() {
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
		i = yw(),
		s = () => {
			e(!t), r.nav.current.classList.contains('active') ? i.start() : i.stop();
		};
	return g.jsxs('header', {
		children: [
			g.jsx('div', {
				className: `${Ar.header} ${t ? 'active' : ''}`,
				children: g.jsxs('div', {
					className: Ar.container,
					children: [
						g.jsx('h1', {
							className: `${Ar.logo} ${t ? 'active' : ''}`,
							ref: r.logo,
							children: g.jsx('a', { href: '*/', children: 'MALTS' }),
						}),
						g.jsx('div', {
							className: `${Ar.hamburger} ${t ? 'active' : ''}`,
							ref: r.hamburger,
							onClick: s,
							children: [...Array(3)].map((o, l) =>
								g.jsx(
									'span',
									{
										className: `${Ar.line} ${t ? 'active' : ''}`,
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
			g.jsx('nav', {
				className: `${Ar.nav} ${t ? 'active' : ''}`,
				ref: r.nav,
				children: g.jsx('ul', {
					className: Ar.menu,
					children: n.map((o, l) =>
						g.jsxs(
							'li',
							{
								className: Ar.item,
								children: [
									g.jsx('a', { href: `#${o}`, children: o.toUpperCase() }),
									g.jsx('span', { className: Ar.underLine }),
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
const Ow = '_top_1d7ir_29',
	Mw = '_svg_1d7ir_36',
	Rw = '_container_1d7ir_44',
	Dw = '_svg_01_1d7ir_52',
	Aw = '_svg_02_1d7ir_57',
	zw = '_svg_03_1d7ir_66',
	Lw = '_loopTextContainer_1d7ir_74',
	$i = {
		top: Ow,
		svg: Mw,
		container: Rw,
		svg_01: Dw,
		svg_02: Aw,
		svg_03: zw,
		loopTextContainer: Lw,
	},
	Fw = '/sample-site/assets/wheat_field-QpWfI9zM.jpg',
	Iw = '_loopTextTop_1p651_1',
	Vw = '_loopTextMiddle_1p651_13',
	$w = '_loopTextBottom_1p651_26',
	Uw = '_preText_1p651_38',
	Bw = '_loop_1p651_1',
	Ww = '_postText_1p651_44',
	qe = {
		loopTextTop: Iw,
		loopTextMiddle: Vw,
		loopTextBottom: $w,
		preText: Uw,
		loop: Bw,
		postText: Ww,
	};
function bw({ position: t }) {
	return (
		console.log(t === 'Top'),
		t === 'Top'
			? g.jsxs('div', {
					className: qe[`loopText${t}`],
					children: [
						g.jsxs('p', {
							className: qe.preText,
							children: [
								g.jsx('span', { children: 'GRAPHIC' }),
								' ',
								g.jsx('span', { children: 'FARM' }),
								' ',
								g.jsx('span', { className: qe.malts, children: 'MALTS' }),
								' ',
								g.jsx('span', { className: qe.harajuku, children: 'HARAJUKU' }),
							],
						}),
						g.jsxs('p', {
							className: qe.postText,
							children: [
								g.jsx('span', { children: 'GRAPHIC' }),
								' ',
								g.jsx('span', { children: 'FARM' }),
								' ',
								g.jsx('span', { className: qe.malts, children: 'MALTS' }),
								' ',
								g.jsx('span', { className: qe.harajuku, children: 'HARAJUKU' }),
							],
						}),
					],
				})
			: t === 'Bottom'
				? g.jsxs('div', {
						className: qe[`loopText${t}`],
						children: [
							g.jsxs('p', {
								className: qe.preText,
								children: [
									g.jsx('span', {
										className: qe.harajuku,
										children: 'HARAJUKU',
									}),
									' ',
									g.jsx('span', { className: qe.malts, children: 'MALTS' }),
									' ',
									g.jsx('span', { children: 'GRAPHIC' }),
									' ',
									g.jsx('span', { children: 'FARM' }),
								],
							}),
							g.jsxs('p', {
								className: qe.postText,
								children: [
									g.jsx('span', {
										className: qe.harajuku,
										children: 'HARAJUKU',
									}),
									' ',
									g.jsx('span', { className: qe.malts, children: 'MALTS' }),
									' ',
									g.jsx('span', { children: 'GRAPHIC' }),
									' ',
									g.jsx('span', { children: 'FARM' }),
								],
							}),
						],
					})
				: g.jsxs('div', {
						className: qe[`loopText${t}`],
						children: [
							g.jsxs('p', {
								className: qe.preText,
								children: [
									g.jsx('span', { className: qe.malts, children: 'MALTS' }),
									' ',
									g.jsx('span', { children: 'GRAPHIC' }),
									' ',
									g.jsx('span', { children: 'FARM' }),
									' ',
									g.jsx('span', {
										className: qe.harajuku,
										children: 'HARAJUKU',
									}),
								],
							}),
							g.jsxs('p', {
								className: qe.postText,
								children: [
									g.jsx('span', { className: qe.malts, children: 'MALTS' }),
									' ',
									g.jsx('span', { children: 'GRAPHIC' }),
									' ',
									g.jsx('span', { children: 'FARM' }),
									' ',
									g.jsx('span', {
										className: qe.harajuku,
										children: 'HARAJUKU',
									}),
								],
							}),
						],
					})
	);
}
function Hw() {
	const t =
		'M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;';
	function e() {
		return g.jsx('path', {
			children: g.jsx('animate', {
				attributeName: 'd',
				dur: '20s',
				repeatCount: 'indefinite',
				values: t,
			}),
		});
	}
	return g.jsx(g.Fragment, {
		children: g.jsxs('div', {
			className: $i.top,
			children: [
				g.jsx('div', {
					className: $i.svg,
					children: g.jsxs('div', {
						className: $i.container,
						children: [
							g.jsxs('svg', {
								viewBox: '0 0 500 500',
								className: $i.svg_01,
								children: [
									g.jsx('image', {
										x: '0',
										y: '0',
										width: '100%',
										height: '100%',
										clipPath: 'url(#clip)',
										href: Fw,
										preserveAspectRatio: 'none',
									}),
									g.jsx('clipPath', { id: 'clip', children: g.jsx(e, {}) }),
								],
							}),
							g.jsx('svg', {
								viewBox: '0 0 500 500',
								className: $i.svg_02,
								children: g.jsx(e, {}),
							}),
							g.jsx('svg', {
								viewBox: '0 0 500 500',
								className: $i.svg_03,
								children: g.jsx(e, {}),
							}),
						],
					}),
				}),
				g.jsx('div', {
					className: $i.loopTextContainer,
					children: g.jsx(bw, { position: 'Middle' }),
				}),
			],
		}),
	});
}
const Yw = '_container_1fn6h_29',
	Qw = '_outer_1fn6h_41',
	Xw = '_descWrapper_1fn6h_54',
	Gw = '_desc_1fn6h_54',
	Kw = '_titleWrapper_1fn6h_72',
	qw = '_titleInner_1fn6h_83',
	Zw = '_title_1fn6h_72',
	Jw = '_subtitle_1fn6h_100',
	eS = '_textWrapper_1fn6h_113',
	tS = '_textInner_1fn6h_117',
	nS = '_text_1fn6h_113',
	rS = '_logoContainer_1fn6h_160',
	iS = '_logoMotion01_1fn6h_171',
	sS = '_rotation_1fn6h_1',
	oS = '_inner_1fn6h_221',
	lS = '_logoMotion02_1fn6h_224',
	uS = '_logoMotion03_1fn6h_237',
	Ie = {
		container: Yw,
		outer: Qw,
		descWrapper: Xw,
		desc: Gw,
		titleWrapper: Kw,
		titleInner: qw,
		title: Zw,
		subtitle: Jw,
		textWrapper: eS,
		textInner: tS,
		text: nS,
		logoContainer: rS,
		logoMotion01: iS,
		rotation: sS,
		inner: oS,
		logoMotion02: lS,
		logoMotion03: uS,
	},
	aS = '/sample-site/assets/malts-logo-6SvyMCuE.svg',
	cS = '/sample-site/assets/about001-AREvM-mp.jpg',
	fS = '/sample-site/assets/about002-k5Xso-JY.jpg';
function Fr(t) {
	if (t === void 0)
		throw new ReferenceError(
			"this hasn't been initialised - super() hasn't been called",
		);
	return t;
}
function Og(t, e) {
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
	Sh,
	Bt,
	Le,
	Wn = 1e8,
	ke = 1 / Wn,
	nd = Math.PI * 2,
	dS = nd / 4,
	hS = 0,
	Mg = Math.sqrt,
	pS = Math.cos,
	mS = Math.sin,
	St = function (e) {
		return typeof e == 'string';
	},
	Ge = function (e) {
		return typeof e == 'function';
	},
	qr = function (e) {
		return typeof e == 'number';
	},
	kh = function (e) {
		return typeof e > 'u';
	},
	Or = function (e) {
		return typeof e == 'object';
	},
	mn = function (e) {
		return e !== !1;
	},
	Th = function () {
		return typeof window < 'u';
	},
	wu = function (e) {
		return Ge(e) || St(e);
	},
	Rg =
		(typeof ArrayBuffer == 'function' && ArrayBuffer.isView) || function () {},
	Wt = Array.isArray,
	rd = /(?:-?\.?\d|\.)+/gi,
	Dg = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
	Ys = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
	$c = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
	Ag = /[+-]=-?[.\d]+/,
	zg = /[^,'"\[\]\s]+/gi,
	_S = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
	Be,
	yr,
	id,
	Eh,
	Rn = {},
	ja = {},
	Lg,
	Fg = function (e) {
		return (ja = _s(e, Rn)) && yn;
	},
	Ch = function (e, n) {
		return console.warn(
			'Invalid property',
			e,
			'set to',
			n,
			'Missing plugin? gsap.registerPlugin()',
		);
	},
	Il = function (e, n) {
		return !n && console.warn(e);
	},
	Ig = function (e, n) {
		return (e && (Rn[e] = n) && ja && (ja[e] = n)) || Rn;
	},
	Vl = function () {
		return 0;
	},
	gS = { suppressEvents: !0, isStart: !0, kill: !1 },
	Xu = { suppressEvents: !0, kill: !1 },
	vS = { suppressEvents: !0 },
	Ph = {},
	Ti = [],
	sd = {},
	Vg,
	Tn = {},
	Uc = {},
	fm = 30,
	Gu = [],
	Nh = '',
	jh = function (e) {
		var n = e[0],
			r,
			i;
		if ((Or(n) || Ge(n) || (e = [e]), !(r = (n._gsap || {}).harness))) {
			for (i = Gu.length; i-- && !Gu[i].targetTest(n); );
			r = Gu[i];
		}
		for (i = e.length; i--; )
			(e[i] && (e[i]._gsap || (e[i]._gsap = new av(e[i], r)))) ||
				e.splice(i, 1);
		return e;
	},
	is = function (e) {
		return e._gsap || jh(bn(e))[0]._gsap;
	},
	$g = function (e, n, r) {
		return (r = e[n]) && Ge(r)
			? e[n]()
			: (kh(r) && e.getAttribute && e.getAttribute(n)) || r;
	},
	_n = function (e, n) {
		return (e = e.split(',')).forEach(n) || e;
	},
	Je = function (e) {
		return Math.round(e * 1e5) / 1e5 || 0;
	},
	xt = function (e) {
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
	yS = function (e, n) {
		for (var r = n.length, i = 0; e.indexOf(n[i]) < 0 && ++i < r; );
		return i < r;
	},
	Oa = function () {
		var e = Ti.length,
			n = Ti.slice(0),
			r,
			i;
		for (sd = {}, Ti.length = 0, r = 0; r < e; r++)
			(i = n[r]),
				i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
	},
	Ug = function (e, n, r, i) {
		Ti.length && !Bt && Oa(),
			e.render(n, r, i || (Bt && n < 0 && (e._initted || e._startAt))),
			Ti.length && !Bt && Oa();
	},
	Bg = function (e) {
		var n = parseFloat(e);
		return (n || n === 0) && (e + '').match(zg).length < 2
			? n
			: St(e)
				? e.trim()
				: e;
	},
	Wg = function (e) {
		return e;
	},
	Gn = function (e, n) {
		for (var r in n) r in e || (e[r] = n[r]);
		return e;
	},
	xS = function (e) {
		return function (n, r) {
			for (var i in r)
				i in n || (i === 'duration' && e) || i === 'ease' || (n[i] = r[i]);
		};
	},
	_s = function (e, n) {
		for (var r in n) e[r] = n[r];
		return e;
	},
	dm = function t(e, n) {
		for (var r in n)
			r !== '__proto__' &&
				r !== 'constructor' &&
				r !== 'prototype' &&
				(e[r] = Or(n[r]) ? t(e[r] || (e[r] = {}), n[r]) : n[r]);
		return e;
	},
	Ma = function (e, n) {
		var r = {},
			i;
		for (i in e) i in n || (r[i] = e[i]);
		return r;
	},
	ul = function (e) {
		var n = e.parent || Be,
			r = e.keyframes ? xS(Wt(e.keyframes)) : Gn;
		if (mn(e.inherit))
			for (; n; ) r(e, n.vars.defaults), (n = n.parent || n._dp);
		return e;
	},
	wS = function (e, n) {
		for (var r = e.length, i = r === n.length; i && r-- && e[r] === n[r]; );
		return r < 0;
	},
	bg = function (e, n, r, i, s) {
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
	uc = function (e, n, r, i) {
		r === void 0 && (r = '_first'), i === void 0 && (i = '_last');
		var s = n._prev,
			o = n._next;
		s ? (s._next = o) : e[r] === n && (e[r] = o),
			o ? (o._prev = s) : e[i] === n && (e[i] = s),
			(n._next = n._prev = n.parent = null);
	},
	ji = function (e, n) {
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
	SS = function (e) {
		for (var n = e.parent; n && n.parent; )
			(n._dirty = 1), n.totalDuration(), (n = n.parent);
		return e;
	},
	od = function (e, n, r, i) {
		return (
			e._startAt &&
			(Bt
				? e._startAt.revert(Xu)
				: (e.vars.immediateRender && !e.vars.autoRevert) ||
					e._startAt.render(n, !0, i))
		);
	},
	kS = function t(e) {
		return !e || (e._ts && t(e.parent));
	},
	hm = function (e) {
		return e._repeat ? vo(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
	},
	vo = function (e, n) {
		var r = Math.floor((e /= n));
		return e && r === e ? r - 1 : r;
	},
	Ra = function (e, n) {
		return (
			(e - n._start) * n._ts +
			(n._ts >= 0 ? 0 : n._dirty ? n.totalDuration() : n._tDur)
		);
	},
	ac = function (e) {
		return (e._end = xt(
			e._start + (e._tDur / Math.abs(e._ts || e._rts || ke) || 0),
		));
	},
	cc = function (e, n) {
		var r = e._dp;
		return (
			r &&
				r.smoothChildTiming &&
				e._ts &&
				((e._start = xt(
					r._time -
						(e._ts > 0
							? n / e._ts
							: ((e._dirty ? e.totalDuration() : e._tDur) - n) / -e._ts),
				)),
				ac(e),
				r._dirty || ss(r, e)),
			e
		);
	},
	Hg = function (e, n) {
		var r;
		if (
			((n._time ||
				(!n._dur && n._initted) ||
				(n._start < e._time && (n._dur || !n.add))) &&
				((r = Ra(e.rawTime(), n)),
				(!n._dur || Zl(0, n.totalDuration(), r) - n._tTime > ke) &&
					n.render(r, !0)),
			ss(e, n)._dp && e._initted && e._time >= e._dur && e._ts)
		) {
			if (e._dur < e.duration())
				for (r = e; r._dp; )
					r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp);
			e._zTime = -ke;
		}
	},
	Sr = function (e, n, r, i) {
		return (
			n.parent && ji(n),
			(n._start = xt(
				(qr(r) ? r : r || e !== Be ? Ln(e, r, n) : e._time) + n._delay,
			)),
			(n._end = xt(
				n._start + (n.totalDuration() / Math.abs(n.timeScale()) || 0),
			)),
			bg(e, n, '_first', '_last', e._sort ? '_start' : 0),
			ld(n) || (e._recent = n),
			i || Hg(e, n),
			e._ts < 0 && cc(e, e._tTime),
			e
		);
	},
	Yg = function (e, n) {
		return (
			(Rn.ScrollTrigger || Ch('scrollTrigger', n)) &&
			Rn.ScrollTrigger.create(n, e)
		);
	},
	Qg = function (e, n, r, i, s) {
		if ((Mh(e, n, s), !e._initted)) return 1;
		if (
			!r &&
			e._pt &&
			!Bt &&
			((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
			Vg !== En.frame
		)
			return Ti.push(e), (e._lazy = [s, i]), 1;
	},
	TS = function t(e) {
		var n = e.parent;
		return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n));
	},
	ld = function (e) {
		var n = e.data;
		return n === 'isFromStart' || n === 'isStart';
	},
	ES = function (e, n, r, i) {
		var s = e.ratio,
			o =
				n < 0 ||
				(!n &&
					((!e._start && TS(e) && !(!e._initted && ld(e))) ||
						((e._ts < 0 || e._dp._ts < 0) && !ld(e))))
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
				((u = Zl(0, e._tDur, n)),
				(c = vo(u, l)),
				e._yoyo && c & 1 && (o = 1 - o),
				c !== vo(e._tTime, l) &&
					((s = 1 - o), e.vars.repeatRefresh && e._initted && e.invalidate())),
			o !== s || Bt || i || e._zTime === ke || (!n && e._zTime))
		) {
			if (!e._initted && Qg(e, n, i, r, u)) return;
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
			n < 0 && od(e, n, r, !0),
				e._onUpdate && !r && Nn(e, 'onUpdate'),
				u && e._repeat && !r && e.parent && Nn(e, 'onRepeat'),
				(n >= e._tDur || n < 0) &&
					e.ratio === o &&
					(o && ji(e, 1),
					!r &&
						!Bt &&
						(Nn(e, o ? 'onComplete' : 'onReverseComplete', !0),
						e._prom && e._prom()));
		} else e._zTime || (e._zTime = n);
	},
	CS = function (e, n, r) {
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
			o = xt(n) || 0,
			l = e._tTime / e._tDur;
		return (
			l && !i && (e._time *= o / e._dur),
			(e._dur = o),
			(e._tDur = s ? (s < 0 ? 1e10 : xt(o * (s + 1) + e._rDelay * s)) : o),
			l > 0 && !i && cc(e, (e._tTime = e._tDur * l)),
			e.parent && ac(e),
			r || ss(e.parent, e),
			e
		);
	},
	pm = function (e) {
		return e instanceof Zt ? ss(e) : yo(e, e._dur);
	},
	PS = { _start: 0, endTime: Vl, totalDuration: Vl },
	Ln = function t(e, n, r) {
		var i = e.labels,
			s = e._recent || PS,
			o = e.duration() >= Wn ? s.endTime(!1) : e._dur,
			l,
			u,
			a;
		return St(n) && (isNaN(n) || n in i)
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
							a && r && (u = (u / 100) * (Wt(r) ? r[0] : r).totalDuration()),
							l > 1 ? t(e, n.substr(0, l - 1), r) + u : o + u))
			: n == null
				? o
				: +n;
	},
	al = function (e, n, r) {
		var i = qr(n[1]),
			s = (i ? 2 : 1) + (e < 2 ? 0 : 1),
			o = n[s],
			l,
			u;
		if ((i && (o.duration = n[1]), (o.parent = r), e)) {
			for (l = o, u = r; u && !('immediateRender' in l); )
				(l = u.vars.defaults || {}), (u = mn(u.vars.inherit) && u.parent);
			(o.immediateRender = mn(l.immediateRender)),
				e < 2 ? (o.runBackwards = 1) : (o.startAt = n[s - 1]);
		}
		return new it(n[0], o, n[s + 1]);
	},
	zi = function (e, n) {
		return e || e === 0 ? n(e) : n;
	},
	Zl = function (e, n, r) {
		return r < e ? e : r > n ? n : r;
	},
	Ut = function (e, n) {
		return !St(e) || !(n = _S.exec(e)) ? '' : n[1];
	},
	NS = function (e, n, r) {
		return zi(r, function (i) {
			return Zl(e, n, i);
		});
	},
	ud = [].slice,
	Xg = function (e, n) {
		return (
			e &&
			Or(e) &&
			'length' in e &&
			((!n && !e.length) || (e.length - 1 in e && Or(e[0]))) &&
			!e.nodeType &&
			e !== yr
		);
	},
	jS = function (e, n, r) {
		return (
			r === void 0 && (r = []),
			e.forEach(function (i) {
				var s;
				return (St(i) && !n) || Xg(i, 1)
					? (s = r).push.apply(s, bn(i))
					: r.push(i);
			}) || r
		);
	},
	bn = function (e, n, r) {
		return Le && !n && Le.selector
			? Le.selector(e)
			: St(e) && !r && (id || !xo())
				? ud.call((n || Eh).querySelectorAll(e), 0)
				: Wt(e)
					? jS(e, r)
					: Xg(e)
						? ud.call(e, 0)
						: e
							? [e]
							: [];
	},
	ad = function (e) {
		return (
			(e = bn(e)[0] || Il('Invalid scope') || {}),
			function (n) {
				var r = e.current || e.nativeElement || e;
				return bn(
					n,
					r.querySelectorAll
						? r
						: r === e
							? Il('Invalid scope') || Eh.createElement('div')
							: e,
				);
			}
		);
	},
	Gg = function (e) {
		return e.sort(function () {
			return 0.5 - Math.random();
		});
	},
	Kg = function (e) {
		if (Ge(e)) return e;
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
			St(i)
				? (c = d = { center: 0.5, edges: 0.5, end: 1 }[i] || 0)
				: !l && u && ((c = i[0]), (d = i[1])),
			function (f, h, v) {
				var m = (v || n).length,
					T = o[m],
					_,
					p,
					y,
					x,
					k,
					C,
					E,
					N,
					M;
				if (!T) {
					if (((M = n.grid === 'auto' ? 0 : (n.grid || [1, Wn])[1]), !M)) {
						for (
							E = -Wn;
							E < (E = v[M++].getBoundingClientRect().left) && M < m;

						);
						M < m && M--;
					}
					for (
						T = o[m] = [],
							_ = u ? Math.min(M, m) * c - 0.5 : i % M,
							p = M === Wn ? 0 : u ? (m * d) / M - 0.5 : (i / M) | 0,
							E = 0,
							N = Wn,
							C = 0;
						C < m;
						C++
					)
						(y = (C % M) - _),
							(x = p - ((C / M) | 0)),
							(T[C] = k = a ? Math.abs(a === 'y' ? x : y) : Mg(y * y + x * x)),
							k > E && (E = k),
							k < N && (N = k);
					i === 'random' && Gg(T),
						(T.max = E - N),
						(T.min = N),
						(T.v = m =
							(parseFloat(n.amount) ||
								parseFloat(n.each) *
									(M > m
										? m - 1
										: a
											? a === 'y'
												? m / M
												: M
											: Math.max(M, m / M)) ||
								0) * (i === 'edges' ? -1 : 1)),
						(T.b = m < 0 ? s - m : s),
						(T.u = Ut(n.amount || n.each) || 0),
						(r = r && m < 0 ? ov(r) : r);
				}
				return (
					(m = (T[f] - T.min) / T.max || 0),
					xt(T.b + (r ? r(m) : m) * T.v) + T.u
				);
			}
		);
	},
	cd = function (e) {
		var n = Math.pow(10, ((e + '').split('.')[1] || '').length);
		return function (r) {
			var i = xt(Math.round(parseFloat(r) / e) * e * n);
			return (i - (i % 1)) / n + (qr(r) ? 0 : Ut(r));
		};
	},
	qg = function (e, n) {
		var r = Wt(e),
			i,
			s;
		return (
			!r &&
				Or(e) &&
				((i = r = e.radius || Wn),
				e.values
					? ((e = bn(e.values)), (s = !qr(e[0])) && (i *= i))
					: (e = cd(e.increment))),
			zi(
				n,
				r
					? Ge(e)
						? function (o) {
								return (s = e(o)), Math.abs(s - o) <= i ? s : o;
							}
						: function (o) {
								for (
									var l = parseFloat(s ? o.x : o),
										u = parseFloat(s ? o.y : 0),
										a = Wn,
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
									s || c === o || qr(o) ? c : c + Ut(o)
								);
							}
					: cd(e),
			)
		);
	},
	Zg = function (e, n, r, i) {
		return zi(Wt(e) ? !n : r === !0 ? !!(r = 0) : !i, function () {
			return Wt(e)
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
	OS = function () {
		for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
			n[r] = arguments[r];
		return function (i) {
			return n.reduce(function (s, o) {
				return o(s);
			}, i);
		};
	},
	MS = function (e, n) {
		return function (r) {
			return e(parseFloat(r)) + (n || Ut(r));
		};
	},
	RS = function (e, n, r) {
		return ev(e, n, 0, 1, r);
	},
	Jg = function (e, n, r) {
		return zi(r, function (i) {
			return e[~~n(i)];
		});
	},
	DS = function t(e, n, r) {
		var i = n - e;
		return Wt(e)
			? Jg(e, t(0, e.length), n)
			: zi(r, function (s) {
					return ((i + ((s - e) % i)) % i) + e;
				});
	},
	AS = function t(e, n, r) {
		var i = n - e,
			s = i * 2;
		return Wt(e)
			? Jg(e, t(0, e.length - 1), n)
			: zi(r, function (o) {
					return (o = (s + ((o - e) % s)) % s || 0), e + (o > i ? s - o : o);
				});
	},
	$l = function (e) {
		for (var n = 0, r = '', i, s, o, l; ~(i = e.indexOf('random(', n)); )
			(o = e.indexOf(')', i)),
				(l = e.charAt(i + 7) === '['),
				(s = e.substr(i + 7, o - i - 7).match(l ? zg : rd)),
				(r +=
					e.substr(n, i - n) + Zg(l ? s : +s[0], l ? 0 : +s[1], +s[2] || 1e-5)),
				(n = o + 1);
		return r + e.substr(n, e.length - n);
	},
	ev = function (e, n, r, i, s) {
		var o = n - e,
			l = i - r;
		return zi(s, function (u) {
			return r + (((u - e) / o) * l || 0);
		});
	},
	zS = function t(e, n, r, i) {
		var s = isNaN(e + n)
			? 0
			: function (h) {
					return (1 - h) * e + h * n;
				};
		if (!s) {
			var o = St(e),
				l = {},
				u,
				a,
				c,
				d,
				f;
			if ((r === !0 && (i = 1) && (r = null), o))
				(e = { p: e }), (n = { p: n });
			else if (Wt(e) && !Wt(n)) {
				for (c = [], d = e.length, f = d - 2, a = 1; a < d; a++)
					c.push(t(e[a - 1], e[a]));
				d--,
					(s = function (v) {
						v *= d;
						var m = Math.min(f, ~~v);
						return c[m](v - m);
					}),
					(r = n);
			} else i || (e = _s(Wt(e) ? [] : {}, e));
			if (!c) {
				for (u in n) Oh.call(l, e, u, 'get', n[u]);
				s = function (v) {
					return Ah(v, l) || (o ? e.p : e);
				};
			}
		}
		return zi(r, s);
	},
	mm = function (e, n, r) {
		var i = e.labels,
			s = Wn,
			o,
			l,
			u;
		for (o in i)
			(l = i[o] - n),
				l < 0 == !!r && l && s > (l = Math.abs(l)) && ((u = o), (s = l));
		return u;
	},
	Nn = function (e, n, r) {
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
				r && Ti.length && Oa(),
				l && (Le = l),
				(c = u ? s.apply(a, u) : s.call(a)),
				(Le = o),
				c
			);
	},
	Yo = function (e) {
		return (
			ji(e),
			e.scrollTrigger && e.scrollTrigger.kill(!!Bt),
			e.progress() < 1 && Nn(e, 'onInterrupt'),
			e
		);
	},
	Qs,
	tv = [],
	nv = function (e) {
		if (e)
			if (((e = (!e.name && e.default) || e), Th() || e.headless)) {
				var n = e.name,
					r = Ge(e),
					i =
						n && !r && e.init
							? function () {
									this._props = [];
								}
							: e,
					s = {
						init: Vl,
						render: Ah,
						add: Oh,
						kill: qS,
						modifier: KS,
						rawVars: 0,
					},
					o = {
						targetTest: 0,
						get: 0,
						getSetter: Dh,
						aliases: {},
						register: 0,
					};
				if ((xo(), e !== i)) {
					if (Tn[n]) return;
					Gn(i, Gn(Ma(e, s), o)),
						_s(i.prototype, _s(s, Ma(e, o))),
						(Tn[(i.prop = n)] = i),
						e.targetTest && (Gu.push(i), (Ph[n] = 1)),
						(n =
							(n === 'css' ? 'CSS' : n.charAt(0).toUpperCase() + n.substr(1)) +
							'Plugin');
				}
				Ig(n, i), e.register && e.register(yn, i, gn);
			} else tv.push(e);
	},
	Se = 255,
	Qo = {
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
	Bc = function (e, n, r) {
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
	rv = function (e, n, r) {
		var i = e ? (qr(e) ? [e >> 16, (e >> 8) & Se, e & Se] : 0) : Qo.black,
			s,
			o,
			l,
			u,
			a,
			c,
			d,
			f,
			h,
			v;
		if (!i) {
			if ((e.substr(-1) === ',' && (e = e.substr(0, e.length - 1)), Qo[e]))
				i = Qo[e];
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
				if (((i = v = e.match(rd)), !n))
					(u = (+i[0] % 360) / 360),
						(a = +i[1] / 100),
						(c = +i[2] / 100),
						(o = c <= 0.5 ? c * (a + 1) : c + a - c * a),
						(s = c * 2 - o),
						i.length > 3 && (i[3] *= 1),
						(i[0] = Bc(u + 1 / 3, s, o)),
						(i[1] = Bc(u, s, o)),
						(i[2] = Bc(u - 1 / 3, s, o));
				else if (~e.indexOf('='))
					return (i = e.match(Dg)), r && i.length < 4 && (i[3] = 1), i;
			} else i = e.match(rd) || Qo.transparent;
			i = i.map(Number);
		}
		return (
			n &&
				!v &&
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
	iv = function (e) {
		var n = [],
			r = [],
			i = -1;
		return (
			e.split(Ei).forEach(function (s) {
				var o = s.match(Ys) || [];
				n.push.apply(n, o), r.push((i += o.length + 1));
			}),
			(n.c = r),
			n
		);
	},
	_m = function (e, n, r) {
		var i = '',
			s = (e + i).match(Ei),
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
					(f = rv(f, n, 1)) &&
					o +
						(n ? f[0] + ',' + f[1] + '%,' + f[2] + '%,' + f[3] : f.join(',')) +
						')'
				);
			})),
			r && ((c = iv(e)), (u = r.c), u.join(i) !== c.c.join(i)))
		)
			for (a = e.replace(Ei, '1').split(Ys), d = a.length - 1; l < d; l++)
				i +=
					a[l] +
					(~u.indexOf(l)
						? s.shift() || o + '0,0,0,0)'
						: (c.length ? c : s.length ? s : r).shift());
		if (!a)
			for (a = e.split(Ei), d = a.length - 1; l < d; l++) i += a[l] + s[l];
		return i + a[d];
	},
	Ei = (function () {
		var t =
				'(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b',
			e;
		for (e in Qo) t += '|' + e + '\\b';
		return new RegExp(t + ')', 'gi');
	})(),
	LS = /hsl[a]?\(/,
	sv = function (e) {
		var n = e.join(' '),
			r;
		if (((Ei.lastIndex = 0), Ei.test(n)))
			return (
				(r = LS.test(n)),
				(e[1] = _m(e[1], r)),
				(e[0] = _m(e[0], r, iv(e[1]))),
				!0
			);
	},
	Ul,
	En = (function () {
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
			v = function m(T) {
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
					v(!0);
				},
				deltaRatio: function (T) {
					return f / (1e3 / (T || 60));
				},
				wake: function () {
					Lg &&
						(!id &&
							Th() &&
							((yr = id = window),
							(Eh = yr.document || {}),
							(Rn.gsap = yn),
							(yr.gsapVersions || (yr.gsapVersions = [])).push(yn.version),
							Fg(ja || yr.GreenSockGlobals || (!yr.gsap && yr) || {}),
							tv.forEach(nv)),
						(c = typeof requestAnimationFrame < 'u' && requestAnimationFrame),
						u && d.sleep(),
						(a =
							c ||
							function (T) {
								return setTimeout(T, (o - d.time * 1e3 + 1) | 0);
							}),
						(Ul = 1),
						v(2));
				},
				sleep: function () {
					(c ? cancelAnimationFrame : clearTimeout)(u), (Ul = 0), (a = Vl);
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
		return !Ul && En.wake();
	},
	pe = {},
	FS = /^[\d.\-M][\d.\-,\s]/,
	IS = /["']/g,
	VS = function (e) {
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
				(n[i] = isNaN(a) ? a.replace(IS, '').trim() : +a),
				(i = u.substr(l + 1).trim());
		return n;
	},
	$S = function (e) {
		var n = e.indexOf('(') + 1,
			r = e.indexOf(')'),
			i = e.indexOf('(', n);
		return e.substring(n, ~i && i < r ? e.indexOf(')', r + 1) : r);
	},
	US = function (e) {
		var n = (e + '').split('('),
			r = pe[n[0]];
		return r && n.length > 1 && r.config
			? r.config.apply(
					null,
					~e.indexOf('{') ? [VS(n[1])] : $S(e).split(',').map(Bg),
				)
			: pe._CE && FS.test(e)
				? pe._CE('', e)
				: r;
	},
	ov = function (e) {
		return function (n) {
			return 1 - e(1 - n);
		};
	},
	lv = function t(e, n) {
		for (var r = e._first, i; r; )
			r instanceof Zt
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
		return (e && (Ge(e) ? e : pe[e] || US(e))) || n;
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
			_n(e, function (l) {
				(pe[l] = Rn[l] = s), (pe[(o = l.toLowerCase())] = r);
				for (var u in s)
					pe[
						o + (u === 'easeIn' ? '.in' : u === 'easeOut' ? '.out' : '.inOut')
					] = pe[l + '.' + u] = s[u];
			}),
			s
		);
	},
	uv = function (e) {
		return function (n) {
			return n < 0.5 ? (1 - e(1 - n * 2)) / 2 : 0.5 + e((n - 0.5) * 2) / 2;
		};
	},
	Wc = function t(e, n, r) {
		var i = n >= 1 ? n : 1,
			s = (r || (e ? 0.3 : 0.45)) / (n < 1 ? n : 1),
			o = (s / nd) * (Math.asin(1 / i) || 0),
			l = function (c) {
				return c === 1 ? 1 : i * Math.pow(2, -10 * c) * mS((c - o) * s) + 1;
			},
			u =
				e === 'out'
					? l
					: e === 'in'
						? function (a) {
								return 1 - l(1 - a);
							}
						: uv(l);
		return (
			(s = nd / s),
			(u.config = function (a, c) {
				return t(e, a, c);
			}),
			u
		);
	},
	bc = function t(e, n) {
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
						: uv(r);
		return (
			(i.config = function (s) {
				return t(e, s);
			}),
			i
		);
	};
_n('Linear,Quad,Cubic,Quart,Quint,Strong', function (t, e) {
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
ks('Elastic', Wc('in'), Wc('out'), Wc());
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
	return -(Mg(1 - t * t) - 1);
});
ks('Sine', function (t) {
	return t === 1 ? 1 : -pS(t * dS) + 1;
});
ks('Back', bc('in'), bc('out'), bc());
pe.SteppedEase =
	pe.steps =
	Rn.SteppedEase =
		{
			config: function (e, n) {
				e === void 0 && (e = 1);
				var r = 1 / e,
					i = e + (n ? 0 : 1),
					s = n ? 1 : 0,
					o = 1 - ke;
				return function (l) {
					return (((i * Zl(0, o, l)) | 0) + s) * r;
				};
			},
		};
go.ease = pe['quad.out'];
_n(
	'onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt',
	function (t) {
		return (Nh += t + ',' + t + 'Params,');
	},
);
var av = function (e, n) {
		(this.id = hS++),
			(e._gsap = this),
			(this.target = e),
			(this.harness = n),
			(this.get = n ? n.get : $g),
			(this.set = n ? n.getSetter : Dh);
	},
	Bl = (function () {
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
				Ul || En.wake();
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
					for (cc(this, r), !s._dp || s.parent || Hg(s, this); s && s.parent; )
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
						Sr(this._dp, this, this._start - this._delay);
				}
				return (
					(this._tTime !== r ||
						(!this._dur && !i) ||
						(this._initted && Math.abs(this._zTime) === ke) ||
						(!r && !this._initted && (this.add || this._ptLookup))) &&
						(this._ts || (this._pTime = r), Ug(this, r, i)),
					this
				);
			}),
			(e.time = function (r, i) {
				return arguments.length
					? this.totalTime(
							Math.min(this.totalDuration(), r + hm(this)) %
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
								hm(this),
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
					this.parent && this._ts ? Ra(this.parent._time, this) : this._tTime;
				return (
					(this._rts = +r || 0),
					(this._ts = this._ps || r === -ke ? 0 : this._rts),
					this.totalTime(Zl(-Math.abs(this._delay), this._tDur, s), i !== !1),
					ac(this),
					SS(this)
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
						i && (i._sort || !this.parent) && Sr(i, this, r - this._delay), this
					);
				}
				return this._start;
			}),
			(e.endTime = function (r) {
				return (
					this._start +
					(mn(r) ? this.totalDuration() : this.duration()) /
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
							? Ra(i.rawTime(r), this)
							: this._tTime
					: this._tTime;
			}),
			(e.revert = function (r) {
				r === void 0 && (r = vS);
				var i = Bt;
				return (
					(Bt = r),
					(this._initted || this._startAt) &&
						(this.timeline && this.timeline.revert(r),
						this.totalTime(-0.01, r.suppressEvents)),
					this.data !== 'nested' && r.kill !== !1 && this.kill(),
					(Bt = i),
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
					? ((this._repeat = r === 1 / 0 ? -2 : r), pm(this))
					: this._repeat === -2
						? 1 / 0
						: this._repeat;
			}),
			(e.repeatDelay = function (r) {
				if (arguments.length) {
					var i = this._time;
					return (this._rDelay = r), pm(this), i ? this.time(i) : this;
				}
				return this._rDelay;
			}),
			(e.yoyo = function (r) {
				return arguments.length ? ((this._yoyo = r), this) : this._yoyo;
			}),
			(e.seek = function (r, i) {
				return this.totalTime(Ln(this, r), mn(i));
			}),
			(e.restart = function (r, i) {
				return this.play().totalTime(r ? -this._delay : 0, mn(i));
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
					var o = Ge(r) ? r : Wg,
						l = function () {
							var a = i.then;
							(i.then = null),
								Ge(o) && (o = o(i)) && (o.then || o === i) && (i.then = a),
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
				Yo(this);
			}),
			t
		);
	})();
Gn(Bl.prototype, {
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
var Zt = (function (t) {
	Og(e, t);
	function e(r, i) {
		var s;
		return (
			r === void 0 && (r = {}),
			(s = t.call(this, r) || this),
			(s.labels = {}),
			(s.smoothChildTiming = !!r.smoothChildTiming),
			(s.autoRemoveChildren = !!r.autoRemoveChildren),
			(s._sort = mn(r.sortChildren)),
			Be && Sr(r.parent || Be, Fr(s), i),
			r.reversed && s.reverse(),
			r.paused && s.paused(!0),
			r.scrollTrigger && Yg(Fr(s), r.scrollTrigger),
			s
		);
	}
	var n = e.prototype;
	return (
		(n.to = function (i, s, o) {
			return al(0, arguments, this), this;
		}),
		(n.from = function (i, s, o) {
			return al(1, arguments, this), this;
		}),
		(n.fromTo = function (i, s, o, l) {
			return al(2, arguments, this), this;
		}),
		(n.set = function (i, s, o) {
			return (
				(s.duration = 0),
				(s.parent = this),
				ul(s).repeatDelay || (s.repeat = 0),
				(s.immediateRender = !!s.immediateRender),
				new it(i, s, Ln(this, o), 1),
				this
			);
		}),
		(n.call = function (i, s, o) {
			return Sr(this, it.delayedCall(0, i, s), o);
		}),
		(n.staggerTo = function (i, s, o, l, u, a, c) {
			return (
				(o.duration = s),
				(o.stagger = o.stagger || l),
				(o.onComplete = a),
				(o.onCompleteParams = c),
				(o.parent = this),
				new it(i, o, Ln(this, u)),
				this
			);
		}),
		(n.staggerFrom = function (i, s, o, l, u, a, c) {
			return (
				(o.runBackwards = 1),
				(ul(o).immediateRender = mn(o.immediateRender)),
				this.staggerTo(i, s, o, l, u, a, c)
			);
		}),
		(n.staggerFromTo = function (i, s, o, l, u, a, c, d) {
			return (
				(l.startAt = o),
				(ul(l).immediateRender = mn(l.immediateRender)),
				this.staggerTo(i, s, l, u, a, c, d)
			);
		}),
		(n.render = function (i, s, o) {
			var l = this._time,
				u = this._dirty ? this.totalDuration() : this._tDur,
				a = this._dur,
				c = i <= 0 ? 0 : xt(i),
				d = this._zTime < 0 != i < 0 && (this._initted || !a),
				f,
				h,
				v,
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
				(this !== Be && c > u && i >= 0 && (c = u), c !== this._tTime || o || d)
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
						((f = xt(c % T)),
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
							M = N === (C && m & 1);
						if (
							(m < k && (N = !N),
							(l = N ? 0 : c % a ? a : c),
							(this._lock = 1),
							(this.render(l || (E ? 0 : xt(m * T)), s, !a)._lock = 0),
							(this._tTime = c),
							!s && this.parent && Nn(this, 'onRepeat'),
							this.vars.repeatRefresh && !E && (this.invalidate()._lock = 1),
							(l && l !== this._time) ||
								_ !== !this._ts ||
								(this.vars.onRepeat && !this.parent && !this._act))
						)
							return this;
						if (
							((a = this._dur),
							(u = this._tDur),
							M &&
								((this._lock = 2),
								(l = N ? a : -1e-4),
								this.render(l, !0),
								this.vars.repeatRefresh && !E && this.invalidate()),
							(this._lock = 0),
							!this._ts && !_)
						)
							return this;
						lv(this, E);
					}
				}
				if (
					(this._hasPause &&
						!this._forcing &&
						this._lock < 2 &&
						((p = CS(this, xt(l), xt(f))), p && (c -= f - (f = p._start))),
					(this._tTime = c),
					(this._time = f),
					(this._act = !y),
					this._initted ||
						((this._onUpdate = this.vars.onUpdate),
						(this._initted = 1),
						(this._zTime = i),
						(l = 0)),
					!l && f && !s && !m && (Nn(this, 'onStart'), this._tTime !== c))
				)
					return this;
				if (f >= l && i >= 0)
					for (h = this._first; h; ) {
						if (
							((v = h._next), (h._act || f >= h._start) && h._ts && p !== h)
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
								(p = 0), v && (c += this._zTime = -ke);
								break;
							}
						}
						h = v;
					}
				else {
					h = this._last;
					for (var O = i < 0 ? i : f; h; ) {
						if (((v = h._prev), (h._act || O <= h._end) && h._ts && p !== h)) {
							if (h.parent !== this) return this.render(i, s, o);
							if (
								(h.render(
									h._ts > 0
										? (O - h._start) * h._ts
										: (h._dirty ? h.totalDuration() : h._tDur) +
												(O - h._start) * h._ts,
									s,
									o || (Bt && (h._initted || h._startAt)),
								),
								f !== this._time || (!this._ts && !_))
							) {
								(p = 0), v && (c += this._zTime = O ? -ke : ke);
								break;
							}
						}
						h = v;
					}
				}
				if (
					p &&
					!s &&
					(this.pause(),
					(p.render(f >= l ? 0 : -ke)._zTime = f >= l ? 1 : -1),
					this._ts)
				)
					return (this._start = x), ac(this), this.render(i, s, o);
				this._onUpdate && !s && Nn(this, 'onUpdate', !0),
					((c === u && this._tTime >= this.totalDuration()) || (!c && l)) &&
						(x === this._start || Math.abs(y) !== Math.abs(this._ts)) &&
						(this._lock ||
							((i || !a) &&
								((c === u && this._ts > 0) || (!c && this._ts < 0)) &&
								ji(this, 1),
							!s &&
								!(i < 0 && !l) &&
								(c || l || !u) &&
								(Nn(
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
			if ((qr(s) || (s = Ln(this, s, i)), !(i instanceof Bl))) {
				if (Wt(i))
					return (
						i.forEach(function (l) {
							return o.add(l, s);
						}),
						this
					);
				if (St(i)) return this.addLabel(i, s);
				if (Ge(i)) i = it.delayedCall(0, i);
				else return this;
			}
			return this !== i ? Sr(this, i, s) : this;
		}),
		(n.getChildren = function (i, s, o, l) {
			i === void 0 && (i = !0),
				s === void 0 && (s = !0),
				o === void 0 && (o = !0),
				l === void 0 && (l = -Wn);
			for (var u = [], a = this._first; a; )
				a._start >= l &&
					(a instanceof it
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
			return St(i)
				? this.removeLabel(i)
				: Ge(i)
					? this.killTweensOf(i)
					: (uc(this, i),
						i === this._recent && (this._recent = this._last),
						ss(this));
		}),
		(n.totalTime = function (i, s) {
			return arguments.length
				? ((this._forcing = 1),
					!this._dp &&
						this._ts &&
						(this._start = xt(
							En.time -
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
			var l = it.delayedCall(0, s || Vl, o);
			return (
				(l.data = 'isPause'), (this._hasPause = 1), Sr(this, l, Ln(this, i))
			);
		}),
		(n.removePause = function (i) {
			var s = this._first;
			for (i = Ln(this, i); s; )
				s._start === i && s.data === 'isPause' && ji(s), (s = s._next);
		}),
		(n.killTweensOf = function (i, s, o) {
			for (var l = this.getTweensOf(i, o), u = l.length; u--; )
				ci !== l[u] && l[u].kill(i, s);
			return this;
		}),
		(n.getTweensOf = function (i, s) {
			for (var o = [], l = bn(i), u = this._first, a = qr(s), c; u; )
				u instanceof it
					? yS(u._targets, l) &&
						(a
							? (!ci || (u._initted && u._ts)) &&
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
				v = it.to(
					o,
					Gn(
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
									v._dur !== T && yo(v, T, 0, 1).render(v._time, !0, !0),
										(h = 1);
								}
								c && c.apply(v, d || []);
							},
						},
						s,
					),
				);
			return f ? v.render(0) : v;
		}),
		(n.tweenFromTo = function (i, s, o) {
			return this.tweenTo(s, Gn({ startAt: { time: Ln(this, i) } }, o));
		}),
		(n.recent = function () {
			return this._recent;
		}),
		(n.nextLabel = function (i) {
			return i === void 0 && (i = this._time), mm(this, Ln(this, i));
		}),
		(n.previousLabel = function (i) {
			return i === void 0 && (i = this._time), mm(this, Ln(this, i), 1);
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
				u = Wn,
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
							? ((o._lock = 1), (Sr(o, l, c - l._delay, 1)._lock = 0))
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
				yo(o, o === Be && o._time > s ? o._time : s, 1, 1), (o._dirty = 0);
			}
			return o._tDur;
		}),
		(e.updateRoot = function (i) {
			if ((Be._ts && (Ug(Be, Ra(i, Be)), (Vg = En.frame)), En.frame >= fm)) {
				fm += On.autoSleep || 120;
				var s = Be._first;
				if ((!s || !s._ts) && On.autoSleep && En._listeners.length < 2) {
					for (; s && !s._ts; ) s = s._next;
					s || En.sleep();
				}
			}
		}),
		e
	);
})(Bl);
Gn(Zt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var BS = function (e, n, r, i, s, o, l) {
		var u = new gn(this._pt, e, n, 0, 1, mv, null, s),
			a = 0,
			c = 0,
			d,
			f,
			h,
			v,
			m,
			T,
			_,
			p;
		for (
			u.b = r,
				u.e = i,
				r += '',
				i += '',
				(_ = ~i.indexOf('random(')) && (i = $l(i)),
				o && ((p = [r, i]), o(p, e, n), (r = p[0]), (i = p[1])),
				f = r.match($c) || [];
			(d = $c.exec(i));

		)
			(v = d[0]),
				(m = i.substring(a, d.index)),
				h ? (h = (h + 1) % 5) : m.substr(-5) === 'rgba(' && (h = 1),
				v !== f[c++] &&
					((T = parseFloat(f[c - 1]) || 0),
					(u._pt = {
						_next: u._pt,
						p: m || c === 1 ? m : ',',
						s: T,
						c: v.charAt(1) === '=' ? no(T, v) - T : parseFloat(v) - T,
						m: h && h < 4 ? Math.round : 0,
					}),
					(a = $c.lastIndex));
		return (
			(u.c = a < i.length ? i.substring(a, i.length) : ''),
			(u.fp = l),
			(Ag.test(i) || _) && (u.e = 0),
			(this._pt = u),
			u
		);
	},
	Oh = function (e, n, r, i, s, o, l, u, a, c) {
		Ge(i) && (i = i(s || 0, e, o));
		var d = e[n],
			f =
				r !== 'get'
					? r
					: Ge(d)
						? a
							? e[
									n.indexOf('set') || !Ge(e['get' + n.substr(3)])
										? n
										: 'get' + n.substr(3)
								](a)
							: e[n]()
						: d,
			h = Ge(d) ? (a ? QS : hv) : Rh,
			v;
		if (
			(St(i) &&
				(~i.indexOf('random(') && (i = $l(i)),
				i.charAt(1) === '=' &&
					((v = no(f, i) + (Ut(f) || 0)), (v || v === 0) && (i = v))),
			!c || f !== i || fd)
		)
			return !isNaN(f * i) && i !== ''
				? ((v = new gn(
						this._pt,
						e,
						n,
						+f || 0,
						i - (f || 0),
						typeof d == 'boolean' ? GS : pv,
						0,
						h,
					)),
					a && (v.fp = a),
					l && v.modifier(l, this, e),
					(this._pt = v))
				: (!d && !(n in e) && Ch(n, i),
					BS.call(this, e, n, f, i, h, u || On.stringFilter, a));
	},
	WS = function (e, n, r, i, s) {
		if (
			(Ge(e) && (e = cl(e, s, n, r, i)),
			!Or(e) || (e.style && e.nodeType) || Wt(e) || Rg(e))
		)
			return St(e) ? cl(e, s, n, r, i) : e;
		var o = {},
			l;
		for (l in e) o[l] = cl(e[l], s, n, r, i);
		return o;
	},
	cv = function (e, n, r, i, s, o) {
		var l, u, a, c;
		if (
			Tn[e] &&
			(l = new Tn[e]()).init(
				s,
				l.rawVars ? n[e] : WS(n[e], i, s, o, r),
				r,
				i,
				o,
			) !== !1 &&
			((r._pt = u = new gn(r._pt, s, e, 0, 1, l.render, l, 0, l.priority)),
			r !== Qs)
		)
			for (a = r._ptLookup[r._targets.indexOf(s)], c = l._props.length; c--; )
				a[l._props[c]] = u;
		return l;
	},
	ci,
	fd,
	Mh = function t(e, n, r) {
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
			v = e._dur,
			m = e._startAt,
			T = e._targets,
			_ = e.parent,
			p = _ && _.data === 'nested' ? _.vars.targets : T,
			y = e._overwrite === 'auto' && !Sh,
			x = e.timeline,
			k,
			C,
			E,
			N,
			M,
			O,
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
			(e._yEase = d ? ov(os(d === !0 ? s : d, go.ease)) : 0),
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
				(k = Ma(i, Ph)),
				m &&
					(m._zTime < 0 && m.progress(1),
					n < 0 && c && l && !h ? m.render(-1, !0) : m.revert(c && v ? Xu : gS),
					(m._lazy = 0)),
				o)
			) {
				if (
					(ji(
						(e._startAt = it.set(
							T,
							Gn(
								{
									data: 'isStart',
									overwrite: !1,
									parent: _,
									immediateRender: !0,
									lazy: !m && mn(u),
									startAt: null,
									delay: 0,
									onUpdate:
										a &&
										function () {
											return Nn(e, 'onUpdate');
										},
									stagger: 0,
								},
								o,
							),
						)),
					),
					(e._startAt._dp = 0),
					(e._startAt._sat = e),
					n < 0 && (Bt || (!l && !h)) && e._startAt.revert(Xu),
					l && v && n <= 0 && r <= 0)
				) {
					n && (e._zTime = n);
					return;
				}
			} else if (c && v && !m) {
				if (
					(n && (l = !1),
					(E = Gn(
						{
							overwrite: !1,
							data: 'isFromStart',
							lazy: l && !m && mn(u),
							immediateRender: l,
							stagger: 0,
							parent: _,
						},
						k,
					)),
					G && (E[D.prop] = G),
					ji((e._startAt = it.set(T, E))),
					(e._startAt._dp = 0),
					(e._startAt._sat = e),
					n < 0 && (Bt ? e._startAt.revert(Xu) : e._startAt.render(-1, !0)),
					(e._zTime = n),
					!l)
				)
					t(e._startAt, ke, ke);
				else if (!n) return;
			}
			for (
				e._pt = e._ptCache = 0, u = (v && mn(u)) || (u && !v), C = 0;
				C < T.length;
				C++
			) {
				if (
					((M = T[C]),
					(H = M._gsap || jh(T)[C]._gsap),
					(e._ptLookup[C] = Y = {}),
					sd[H.id] && Ti.length && Oa(),
					(K = p === T ? C : p.indexOf(M)),
					D &&
						(I = new D()).init(M, G || k, e, K, p) !== !1 &&
						((e._pt = N =
							new gn(e._pt, M, I.name, 0, 1, I.render, I, 0, I.priority)),
						I._props.forEach(function (A) {
							Y[A] = N;
						}),
						I.priority && (O = 1)),
					!D || G)
				)
					for (E in k)
						Tn[E] && (I = cv(E, k, e, K, M, p))
							? I.priority && (O = 1)
							: (Y[E] = N =
									Oh.call(e, M, E, 'get', k[E], K, p, 0, i.stringFilter));
				e._op && e._op[C] && e.kill(M, e._op[C]),
					y &&
						e._pt &&
						((ci = e),
						Be.killTweensOf(M, Y, e.globalTime(n)),
						(Q = !e.parent),
						(ci = 0)),
					e._pt && u && (sd[H.id] = 1);
			}
			O && _v(e), e._onInit && e._onInit(e);
		}
		(e._onUpdate = a),
			(e._initted = (!e._op || e._pt) && !Q),
			f && n <= 0 && x.render(Wn, !0, !0);
	},
	bS = function (e, n, r, i, s, o, l, u) {
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
						(fd = 1),
						(e.vars[n] = '+=0'),
						Mh(e, l),
						(fd = 0),
						u ? Il(n + ' not eligible for reset') : 1
					);
				a.push(c);
			}
		for (h = a.length; h--; )
			(d = a[h]),
				(c = d._pt || d),
				(c.s = (i || i === 0) && !s ? i : c.s + (i || 0) + o * c.c),
				(c.c = r - c.s),
				d.e && (d.e = Je(r) + Ut(d.e)),
				d.b && (d.b = c.s + Ut(d.b));
	},
	HS = function (e, n) {
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
	YS = function (e, n, r, i) {
		var s = n.ease || i || 'power1.inOut',
			o,
			l;
		if (Wt(n))
			(l = r[e] || (r[e] = [])),
				n.forEach(function (u, a) {
					return l.push({ t: (a / (n.length - 1)) * 100, v: u, e: s });
				});
		else
			for (o in n)
				(l = r[o] || (r[o] = [])),
					o === 'ease' || l.push({ t: parseFloat(e), v: n[o], e: s });
	},
	cl = function (e, n, r, i, s) {
		return Ge(e)
			? e.call(n, r, i, s)
			: St(e) && ~e.indexOf('random(')
				? $l(e)
				: e;
	},
	fv = Nh + 'repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert',
	dv = {};
_n(fv + ',id,stagger,delay,duration,paused,scrollTrigger', function (t) {
	return (dv[t] = 1);
});
var it = (function (t) {
	Og(e, t);
	function e(r, i, s, o) {
		var l;
		typeof i == 'number' && ((s.duration = i), (i = s), (s = null)),
			(l = t.call(this, o ? i : ul(i)) || this);
		var u = l.vars,
			a = u.duration,
			c = u.delay,
			d = u.immediateRender,
			f = u.stagger,
			h = u.overwrite,
			v = u.keyframes,
			m = u.defaults,
			T = u.scrollTrigger,
			_ = u.yoyoEase,
			p = i.parent || Be,
			y = (Wt(r) || Rg(r) ? qr(r[0]) : 'length' in i) ? [r] : bn(r),
			x,
			k,
			C,
			E,
			N,
			M,
			O,
			H;
		if (
			((l._targets = y.length
				? jh(y)
				: Il(
						'GSAP target ' + r + ' not found. https://gsap.com',
						!On.nullTargetWarn,
					) || []),
			(l._ptLookup = []),
			(l._overwrite = h),
			v || f || wu(a) || wu(c))
		) {
			if (
				((i = l.vars),
				(x = l.timeline =
					new Zt({
						data: 'nested',
						defaults: m || {},
						targets: p && p.data === 'nested' ? p.vars.targets : y,
					})),
				x.kill(),
				(x.parent = x._dp = Fr(l)),
				(x._start = 0),
				f || wu(a) || wu(c))
			) {
				if (((E = y.length), (O = f && Kg(f)), Or(f)))
					for (N in f) ~fv.indexOf(N) && (H || (H = {}), (H[N] = f[N]));
				for (k = 0; k < E; k++)
					(C = Ma(i, dv)),
						(C.stagger = 0),
						_ && (C.yoyoEase = _),
						H && _s(C, H),
						(M = y[k]),
						(C.duration = +cl(a, Fr(l), k, M, y)),
						(C.delay = (+cl(c, Fr(l), k, M, y) || 0) - l._delay),
						!f &&
							E === 1 &&
							C.delay &&
							((l._delay = c = C.delay), (l._start += c), (C.delay = 0)),
						x.to(M, C, O ? O(k, M, y) : 0),
						(x._ease = pe.none);
				x.duration() ? (a = c = 0) : (l.timeline = 0);
			} else if (v) {
				ul(Gn(x.vars.defaults, { ease: 'none' })),
					(x._ease = os(v.ease || i.ease || 'none'));
				var D = 0,
					I,
					Y,
					K;
				if (Wt(v))
					v.forEach(function (G) {
						return x.to(y, G, '>');
					}),
						x.duration();
				else {
					C = {};
					for (N in v)
						N === 'ease' || N === 'easeEach' || YS(N, v[N], C, v.easeEach);
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
			h === !0 && !Sh && ((ci = Fr(l)), Be.killTweensOf(y), (ci = 0)),
			Sr(p, Fr(l), s),
			i.reversed && l.reverse(),
			i.paused && l.paused(!0),
			(d ||
				(!a &&
					!v &&
					l._start === xt(p._time) &&
					mn(d) &&
					kS(Fr(l)) &&
					p.data !== 'nested')) &&
				((l._tTime = -ke), l.render(Math.max(0, -c) || 0)),
			T && Yg(Fr(l), T),
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
				v,
				m,
				T,
				_,
				p,
				y,
				x;
			if (!a) ES(this, i, s, o);
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
						((f = xt(d % m)),
						d === u
							? ((v = this._repeat), (f = a))
							: ((v = ~~(d / m)),
								v && v === xt(d / m) && ((f = a), v--),
								f > a && (f = a)),
						(_ = this._yoyo && v & 1),
						_ && ((x = this._yEase), (f = a - f)),
						(T = vo(this._tTime, m)),
						f === l && !o && this._initted && v === T)
					)
						return (this._tTime = d), this;
					v !== T &&
						(y && this._yEase && lv(y, _),
						this.vars.repeatRefresh &&
							!_ &&
							!this._lock &&
							this._time !== m &&
							this._initted &&
							((this._lock = o = 1),
							(this.render(xt(m * v), !0).invalidate()._lock = 0)));
				}
				if (!this._initted) {
					if (Qg(this, c ? i : f, o, s, d)) return (this._tTime = 0), this;
					if (l !== this._time && !(o && this.vars.repeatRefresh && v !== T))
						return this;
					if (a !== this._dur) return this.render(i, s, o);
				}
				if (
					((this._tTime = d),
					(this._time = f),
					!this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
					(this.ratio = p = (x || this._ease)(f / a)),
					this._from && (this.ratio = p = 1 - p),
					f && !l && !s && !v && (Nn(this, 'onStart'), this._tTime !== d))
				)
					return this;
				for (h = this._pt; h; ) h.r(p, h.d), (h = h._next);
				(y && y.render(i < 0 ? i : y._dur * y._ease(f / this._dur), s, o)) ||
					(this._startAt && (this._zTime = i)),
					this._onUpdate &&
						!s &&
						(c && od(this, i, s, o), Nn(this, 'onUpdate')),
					this._repeat &&
						v !== T &&
						this.vars.onRepeat &&
						!s &&
						this.parent &&
						Nn(this, 'onRepeat'),
					(d === this._tDur || !d) &&
						this._tTime === d &&
						(c && !this._onUpdate && od(this, i, !0, !0),
						(i || !a) &&
							((d === this._tDur && this._ts > 0) || (!d && this._ts < 0)) &&
							ji(this, 1),
						!s &&
							!(c && !l) &&
							(d || l || _) &&
							(Nn(this, d === u ? 'onComplete' : 'onReverseComplete', !0),
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
			Ul || En.wake(), this._ts || this.play();
			var a = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
				c;
			return (
				this._initted || Mh(this, a),
				(c = this._ease(a / this._dur)),
				bS(this, i, s, o, l, c, a, u)
					? this.resetTo(i, s, o, l, 1)
					: (cc(this, 0),
						this.parent ||
							bg(
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
				return (this._lazy = this._pt = 0), this.parent ? Yo(this) : this;
			if (this.timeline) {
				var o = this.timeline.totalDuration();
				return (
					this.timeline.killTweensOf(i, s, ci && ci.vars.overwrite !== !0)
						._first || Yo(this),
					this.parent &&
						o !== this.timeline.totalDuration() &&
						yo(this, (this._dur * this.timeline._tDur) / o, 0, 1),
					this
				);
			}
			var l = this._targets,
				u = i ? bn(i) : l,
				a = this._ptLookup,
				c = this._pt,
				d,
				f,
				h,
				v,
				m,
				T,
				_;
			if ((!s || s === 'all') && wS(l, u))
				return s === 'all' && (this._pt = 0), Yo(this);
			for (
				d = this._op = this._op || [],
					s !== 'all' &&
						(St(s) &&
							((m = {}),
							_n(s, function (p) {
								return (m[p] = 1);
							}),
							(s = m)),
						(s = HS(l, s))),
					_ = l.length;
				_--;

			)
				if (~u.indexOf(l[_])) {
					(f = a[_]),
						s === 'all'
							? ((d[_] = s), (v = f), (h = {}))
							: ((h = d[_] = d[_] || {}), (v = s));
					for (m in v)
						(T = f && f[m]),
							T &&
								((!('kill' in T.d) || T.d.kill(m) === !0) && uc(this, T, '_pt'),
								delete f[m]),
							h !== 'all' && (h[m] = 1);
				}
			return this._initted && !this._pt && c && Yo(this), this;
		}),
		(e.to = function (i, s) {
			return new e(i, s, arguments[2]);
		}),
		(e.from = function (i, s) {
			return al(1, arguments);
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
			return al(2, arguments);
		}),
		(e.set = function (i, s) {
			return (s.duration = 0), s.repeatDelay || (s.repeat = 0), new e(i, s);
		}),
		(e.killTweensOf = function (i, s, o) {
			return Be.killTweensOf(i, s, o);
		}),
		e
	);
})(Bl);
Gn(it.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
_n('staggerTo,staggerFrom,staggerFromTo', function (t) {
	it[t] = function () {
		var e = new Zt(),
			n = ud.call(arguments, 0);
		return n.splice(t === 'staggerFromTo' ? 5 : 4, 0, 0), e[t].apply(e, n);
	};
});
var Rh = function (e, n, r) {
		return (e[n] = r);
	},
	hv = function (e, n, r) {
		return e[n](r);
	},
	QS = function (e, n, r, i) {
		return e[n](i.fp, r);
	},
	XS = function (e, n, r) {
		return e.setAttribute(n, r);
	},
	Dh = function (e, n) {
		return Ge(e[n]) ? hv : kh(e[n]) && e.setAttribute ? XS : Rh;
	},
	pv = function (e, n) {
		return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e6) / 1e6, n);
	},
	GS = function (e, n) {
		return n.set(n.t, n.p, !!(n.s + n.c * e), n);
	},
	mv = function (e, n) {
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
	Ah = function (e, n) {
		for (var r = n._pt; r; ) r.r(e, r.d), (r = r._next);
	},
	KS = function (e, n, r, i) {
		for (var s = this._pt, o; s; )
			(o = s._next), s.p === i && s.modifier(e, n, r), (s = o);
	},
	qS = function (e) {
		for (var n = this._pt, r, i; n; )
			(i = n._next),
				(n.p === e && !n.op) || n.op === e
					? uc(this, n, '_pt')
					: n.dep || (r = 1),
				(n = i);
		return !r;
	},
	ZS = function (e, n, r, i) {
		i.mSet(e, n, i.m.call(i.tween, r, i.mt), i);
	},
	_v = function (e) {
		for (var n = e._pt, r, i, s, o; n; ) {
			for (r = n._next, i = s; i && i.pr > n.pr; ) i = i._next;
			(n._prev = i ? i._prev : o) ? (n._prev._next = n) : (s = n),
				(n._next = i) ? (i._prev = n) : (o = n),
				(n = r);
		}
		e._pt = s;
	},
	gn = (function () {
		function t(n, r, i, s, o, l, u, a, c) {
			(this.t = r),
				(this.s = s),
				(this.c = o),
				(this.p = i),
				(this.r = l || pv),
				(this.d = u || this),
				(this.set = a || Rh),
				(this.pr = c || 0),
				(this._next = n),
				n && (n._prev = this);
		}
		var e = t.prototype;
		return (
			(e.modifier = function (r, i, s) {
				(this.mSet = this.mSet || this.set),
					(this.set = ZS),
					(this.m = r),
					(this.mt = s),
					(this.tween = i);
			}),
			t
		);
	})();
_n(
	Nh +
		'parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger',
	function (t) {
		return (Ph[t] = 1);
	},
);
Rn.TweenMax = Rn.TweenLite = it;
Rn.TimelineLite = Rn.TimelineMax = Zt;
Be = new Zt({
	sortChildren: !1,
	defaults: go,
	autoRemoveChildren: !0,
	id: 'root',
	smoothChildTiming: !0,
});
On.stringFilter = sv;
var ls = [],
	Ku = {},
	JS = [],
	gm = 0,
	ek = 0,
	Hc = function (e) {
		return (Ku[e] || JS).map(function (n) {
			return n();
		});
	},
	dd = function () {
		var e = Date.now(),
			n = [];
		e - gm > 2 &&
			(Hc('matchMediaInit'),
			ls.forEach(function (r) {
				var i = r.queries,
					s = r.conditions,
					o,
					l,
					u,
					a;
				for (l in i)
					(o = yr.matchMedia(i[l]).matches),
						o && (u = 1),
						o !== s[l] && ((s[l] = o), (a = 1));
				a && (r.revert(), u && n.push(r));
			}),
			Hc('matchMediaRevert'),
			n.forEach(function (r) {
				return r.onMatch(r, function (i) {
					return r.add(null, i);
				});
			}),
			(gm = e),
			Hc('matchMedia'));
	},
	gv = (function () {
		function t(n, r) {
			(this.selector = r && ad(r)),
				(this.data = []),
				(this._r = []),
				(this.isReverted = !1),
				(this.id = ek++),
				n && this.add(n);
		}
		var e = t.prototype;
		return (
			(e.add = function (r, i, s) {
				Ge(r) && ((s = i), (i = r), (r = Ge));
				var o = this,
					l = function () {
						var a = Le,
							c = o.selector,
							d;
						return (
							a && a !== o && a.data.push(o),
							s && (o.selector = ad(s)),
							(Le = o),
							(d = i.apply(o, arguments)),
							Ge(d) && o._r.push(d),
							(Le = a),
							(o.selector = c),
							(o.isReverted = !1),
							d
						);
					};
				return (
					(o.last = l),
					r === Ge
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
							: i instanceof it &&
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
										a instanceof Zt
											? a.data !== 'nested' &&
												(a.scrollTrigger && a.scrollTrigger.revert(), a.kill())
											: !(a instanceof it) && a.revert && a.revert(r);
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
	tk = (function () {
		function t(n) {
			(this.contexts = []), (this.scope = n), Le && Le.data.push(this);
		}
		var e = t.prototype;
		return (
			(e.add = function (r, i, s) {
				Or(r) || (r = { matches: r });
				var o = new gv(0, s || this.scope),
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
						: ((u = yr.matchMedia(r[a])),
							u &&
								(ls.indexOf(o) < 0 && ls.push(o),
								(l[a] = u.matches) && (c = 1),
								u.addListener
									? u.addListener(dd)
									: u.addEventListener('change', dd)));
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
	Da = {
		registerPlugin: function () {
			for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
				n[r] = arguments[r];
			n.forEach(function (i) {
				return nv(i);
			});
		},
		timeline: function (e) {
			return new Zt(e);
		},
		getTweensOf: function (e, n) {
			return Be.getTweensOf(e, n);
		},
		getProperty: function (e, n, r, i) {
			St(e) && (e = bn(e)[0]);
			var s = is(e || {}).get,
				o = r ? Wg : Bg;
			return (
				r === 'native' && (r = ''),
				e &&
					(n
						? o(((Tn[n] && Tn[n].get) || s)(e, n, r, i))
						: function (l, u, a) {
								return o(((Tn[l] && Tn[l].get) || s)(e, l, u, a));
							})
			);
		},
		quickSetter: function (e, n, r) {
			if (((e = bn(e)), e.length > 1)) {
				var i = e.map(function (c) {
						return yn.quickSetter(c, n, r);
					}),
					s = i.length;
				return function (c) {
					for (var d = s; d--; ) i[d](c);
				};
			}
			e = e[0] || {};
			var o = Tn[n],
				l = is(e),
				u = (l.harness && (l.harness.aliases || {})[n]) || n,
				a = o
					? function (c) {
							var d = new o();
							(Qs._pt = 0),
								d.init(e, r ? c + r : c, Qs, 0, [e]),
								d.render(1, d),
								Qs._pt && Ah(1, Qs);
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
				s = yn.to(
					e,
					_s(((i = {}), (i[n] = '+=0.1'), (i.paused = !0), i), r || {}),
				),
				o = function (u, a, c) {
					return s.resetTo(n, u, a, c);
				};
			return (o.tween = s), o;
		},
		isTweening: function (e) {
			return Be.getTweensOf(e, !0).length > 0;
		},
		defaults: function (e) {
			return e && e.ease && (e.ease = os(e.ease, go.ease)), dm(go, e || {});
		},
		config: function (e) {
			return dm(On, e || {});
		},
		registerEffect: function (e) {
			var n = e.name,
				r = e.effect,
				i = e.plugins,
				s = e.defaults,
				o = e.extendTimeline;
			(i || '').split(',').forEach(function (l) {
				return (
					l && !Tn[l] && !Rn[l] && Il(n + ' effect requires ' + l + ' plugin.')
				);
			}),
				(Uc[n] = function (l, u, a) {
					return r(bn(l), Gn(u || {}, s), a);
				}),
				o &&
					(Zt.prototype[n] = function (l, u, a) {
						return this.add(Uc[n](l, Or(u) ? u : (a = u) && {}, this), a);
					});
		},
		registerEase: function (e, n) {
			pe[e] = os(n);
		},
		parseEase: function (e, n) {
			return arguments.length ? os(e, n) : pe;
		},
		getById: function (e) {
			return Be.getById(e);
		},
		exportRoot: function (e, n) {
			e === void 0 && (e = {});
			var r = new Zt(e),
				i,
				s;
			for (
				r.smoothChildTiming = mn(e.smoothChildTiming),
					Be.remove(r),
					r._dp = 0,
					r._time = r._tTime = Be._time,
					i = Be._first;
				i;

			)
				(s = i._next),
					(n ||
						!(
							!i._dur &&
							i instanceof it &&
							i.vars.onComplete === i._targets[0]
						)) &&
						Sr(r, i, i._start - i._delay),
					(i = s);
			return Sr(Be, r, 0), r;
		},
		context: function (e, n) {
			return e ? new gv(e, n) : Le;
		},
		matchMedia: function (e) {
			return new tk(e);
		},
		matchMediaRefresh: function () {
			return (
				ls.forEach(function (e) {
					var n = e.conditions,
						r,
						i;
					for (i in n) n[i] && ((n[i] = !1), (r = 1));
					r && e.revert();
				}) || dd()
			);
		},
		addEventListener: function (e, n) {
			var r = Ku[e] || (Ku[e] = []);
			~r.indexOf(n) || r.push(n);
		},
		removeEventListener: function (e, n) {
			var r = Ku[e],
				i = r && r.indexOf(n);
			i >= 0 && r.splice(i, 1);
		},
		utils: {
			wrap: DS,
			wrapYoyo: AS,
			distribute: Kg,
			random: Zg,
			snap: qg,
			normalize: RS,
			getUnit: Ut,
			clamp: NS,
			splitColor: rv,
			toArray: bn,
			selector: ad,
			mapRange: ev,
			pipe: OS,
			unitize: MS,
			interpolate: zS,
			shuffle: Gg,
		},
		install: Fg,
		effects: Uc,
		ticker: En,
		updateRoot: Zt.updateRoot,
		plugins: Tn,
		globalTimeline: Be,
		core: {
			PropTween: gn,
			globals: Ig,
			Tween: it,
			Timeline: Zt,
			Animation: Bl,
			getCache: is,
			_removeLinkedListItem: uc,
			reverting: function () {
				return Bt;
			},
			context: function (e) {
				return e && Le && (Le.data.push(e), (e._ctx = Le)), Le;
			},
			suppressOverwrites: function (e) {
				return (Sh = e);
			},
		},
	};
_n('to,from,fromTo,delayedCall,set,killTweensOf', function (t) {
	return (Da[t] = it[t]);
});
En.add(Zt.updateRoot);
Qs = Da.to({}, { duration: 0 });
var nk = function (e, n) {
		for (var r = e._pt; r && r.p !== n && r.op !== n && r.fp !== n; )
			r = r._next;
		return r;
	},
	rk = function (e, n) {
		var r = e._targets,
			i,
			s,
			o;
		for (i in n)
			for (s = r.length; s--; )
				(o = e._ptLookup[s][i]),
					o &&
						(o = o.d) &&
						(o._pt && (o = nk(o, i)),
						o && o.modifier && o.modifier(n[i], e, r[s], i));
	},
	Yc = function (e, n) {
		return {
			name: e,
			rawVars: 1,
			init: function (i, s, o) {
				o._onInit = function (l) {
					var u, a;
					if (
						(St(s) &&
							((u = {}),
							_n(s, function (c) {
								return (u[c] = 1);
							}),
							(s = u)),
						n)
					) {
						u = {};
						for (a in s) u[a] = n(s[a]);
						s = u;
					}
					rk(l, s);
				};
			},
		};
	},
	yn =
		Da.registerPlugin(
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
						Bt ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d), (r = r._next);
				},
			},
			{
				name: 'endArray',
				init: function (e, n) {
					for (var r = n.length; r--; )
						this.add(e, r, e[r] || 0, n[r], 0, 0, 0, 0, 0, 1);
				},
			},
			Yc('roundProps', cd),
			Yc('modifiers'),
			Yc('snap', qg),
		) || Da;
it.version = Zt.version = yn.version = '3.12.5';
Lg = 1;
Th() && xo();
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
 */ var vm,
	fi,
	ro,
	zh,
	Ji,
	ym,
	Lh,
	ik = function () {
		return typeof window < 'u';
	},
	Zr = {},
	Qi = 180 / Math.PI,
	io = Math.PI / 180,
	Ns = Math.atan2,
	xm = 1e8,
	Fh = /([A-Z])/g,
	sk = /(left|right|width|margin|padding|x)/i,
	ok = /[\s,\(]\S/,
	kr = {
		autoAlpha: 'opacity,visibility',
		scale: 'scaleX,scaleY',
		alpha: 'opacity',
	},
	hd = function (e, n) {
		return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u, n);
	},
	lk = function (e, n) {
		return n.set(
			n.t,
			n.p,
			e === 1 ? n.e : Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u,
			n,
		);
	},
	uk = function (e, n) {
		return n.set(
			n.t,
			n.p,
			e ? Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u : n.b,
			n,
		);
	},
	ak = function (e, n) {
		var r = n.s + n.c * e;
		n.set(n.t, n.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + n.u, n);
	},
	vv = function (e, n) {
		return n.set(n.t, n.p, e ? n.e : n.b, n);
	},
	yv = function (e, n) {
		return n.set(n.t, n.p, e !== 1 ? n.b : n.e, n);
	},
	ck = function (e, n, r) {
		return (e.style[n] = r);
	},
	fk = function (e, n, r) {
		return e.style.setProperty(n, r);
	},
	dk = function (e, n, r) {
		return (e._gsap[n] = r);
	},
	hk = function (e, n, r) {
		return (e._gsap.scaleX = e._gsap.scaleY = r);
	},
	pk = function (e, n, r, i, s) {
		var o = e._gsap;
		(o.scaleX = o.scaleY = r), o.renderTransform(s, o);
	},
	mk = function (e, n, r, i, s) {
		var o = e._gsap;
		(o[n] = r), o.renderTransform(s, o);
	},
	We = 'transform',
	vn = We + 'Origin',
	_k = function t(e, n) {
		var r = this,
			i = this.target,
			s = i.style,
			o = i._gsap;
		if (e in Zr && s) {
			if (((this.tfm = this.tfm || {}), e !== 'transform'))
				(e = kr[e] || e),
					~e.indexOf(',')
						? e.split(',').forEach(function (l) {
								return (r.tfm[l] = Vr(i, l));
							})
						: (this.tfm[e] = o.x ? o[e] : Vr(i, e)),
					e === vn && (this.tfm.zOrigin = o.zOrigin);
			else
				return kr.transform.split(',').forEach(function (l) {
					return t.call(r, l, n);
				});
			if (this.props.indexOf(We) >= 0) return;
			o.svg &&
				((this.svgo = i.getAttribute('data-svg-origin')),
				this.props.push(vn, n, '')),
				(e = We);
		}
		(s || n) && this.props.push(e, n, s[e]);
	},
	xv = function (e) {
		e.translate &&
			(e.removeProperty('translate'),
			e.removeProperty('scale'),
			e.removeProperty('rotate'));
	},
	gk = function () {
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
								: e[s].replace(Fh, '-$1').toLowerCase(),
						);
		if (this.tfm) {
			for (o in this.tfm) i[o] = this.tfm[o];
			i.svg &&
				(i.renderTransform(),
				n.setAttribute('data-svg-origin', this.svgo || '')),
				(s = Lh()),
				(!s || !s.isStart) &&
					!r[We] &&
					(xv(r),
					i.zOrigin &&
						r[vn] &&
						((r[vn] += ' ' + i.zOrigin + 'px'),
						(i.zOrigin = 0),
						i.renderTransform()),
					(i.uncache = 1));
		}
	},
	wv = function (e, n) {
		var r = { target: e, props: [], revert: gk, save: _k };
		return (
			e._gsap || yn.core.getCache(e),
			n &&
				n.split(',').forEach(function (i) {
					return r.save(i);
				}),
			r
		);
	},
	Sv,
	pd = function (e, n) {
		var r = fi.createElementNS
			? fi.createElementNS(
					(n || 'http://www.w3.org/1999/xhtml').replace(/^https/, 'http'),
					e,
				)
			: fi.createElement(e);
		return r && r.style ? r : fi.createElement(e);
	},
	Nr = function t(e, n, r) {
		var i = getComputedStyle(e);
		return (
			i[n] ||
			i.getPropertyValue(n.replace(Fh, '-$1').toLowerCase()) ||
			i.getPropertyValue(n) ||
			(!r && t(e, wo(n) || n, 1)) ||
			''
		);
	},
	wm = 'O,Moz,ms,Ms,Webkit'.split(','),
	wo = function (e, n, r) {
		var i = n || Ji,
			s = i.style,
			o = 5;
		if (e in s && !r) return e;
		for (
			e = e.charAt(0).toUpperCase() + e.substr(1);
			o-- && !(wm[o] + e in s);

		);
		return o < 0 ? null : (o === 3 ? 'ms' : o >= 0 ? wm[o] : '') + e;
	},
	md = function () {
		ik() &&
			window.document &&
			((vm = window),
			(fi = vm.document),
			(ro = fi.documentElement),
			(Ji = pd('div') || { style: {} }),
			pd('div'),
			(We = wo(We)),
			(vn = We + 'Origin'),
			(Ji.style.cssText =
				'border-width:0;line-height:0;position:absolute;padding:0'),
			(Sv = !!wo('perspective')),
			(Lh = yn.core.reverting),
			(zh = 1));
	},
	Qc = function t(e) {
		var n = pd(
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
	Sm = function (e, n) {
		for (var r = n.length; r--; )
			if (e.hasAttribute(n[r])) return e.getAttribute(n[r]);
	},
	kv = function (e) {
		var n;
		try {
			n = e.getBBox();
		} catch {
			n = Qc.call(e, !0);
		}
		return (
			(n && (n.width || n.height)) || e.getBBox === Qc || (n = Qc.call(e, !0)),
			n && !n.width && !n.x && !n.y
				? {
						x: +Sm(e, ['x', 'cx', 'x1']) || 0,
						y: +Sm(e, ['y', 'cy', 'y1']) || 0,
						width: 0,
						height: 0,
					}
				: n
		);
	},
	Tv = function (e) {
		return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && kv(e));
	},
	gs = function (e, n) {
		if (n) {
			var r = e.style,
				i;
			n in Zr && n !== vn && (n = We),
				r.removeProperty
					? ((i = n.substr(0, 2)),
						(i === 'ms' || n.substr(0, 6) === 'webkit') && (n = '-' + n),
						r.removeProperty(
							i === '--' ? n : n.replace(Fh, '-$1').toLowerCase(),
						))
					: r.removeAttribute(n);
		}
	},
	di = function (e, n, r, i, s, o) {
		var l = new gn(e._pt, n, r, 0, 1, o ? yv : vv);
		return (e._pt = l), (l.b = i), (l.e = s), e._props.push(r), l;
	},
	km = { deg: 1, rad: 1, turn: 1 },
	vk = { grid: 1, flex: 1 },
	Oi = function t(e, n, r, i) {
		var s = parseFloat(r) || 0,
			o = (r + '').trim().substr((s + '').length) || 'px',
			l = Ji.style,
			u = sk.test(n),
			a = e.tagName.toLowerCase() === 'svg',
			c = (a ? 'client' : 'offset') + (u ? 'Width' : 'Height'),
			d = 100,
			f = i === 'px',
			h = i === '%',
			v,
			m,
			T,
			_;
		if (i === o || !s || km[i] || km[o]) return s;
		if (
			(o !== 'px' && !f && (s = t(e, n, r, 'px')),
			(_ = e.getCTM && Tv(e)),
			(h || o === '%') && (Zr[n] || ~n.indexOf('adius')))
		)
			return (
				(v = _ ? e.getBBox()[u ? 'width' : 'height'] : e[c]),
				Je(h ? (s / v) * d : (s / 100) * v)
			);
		if (
			((l[u ? 'width' : 'height'] = d + (f ? o : i)),
			(m =
				~n.indexOf('adius') || (i === 'em' && e.appendChild && !a)
					? e
					: e.parentNode),
			_ && (m = (e.ownerSVGElement || {}).parentNode),
			(!m || m === fi || !m.appendChild) && (m = fi.body),
			(T = m._gsap),
			T && h && T.width && u && T.time === En.time && !T.uncache)
		)
			return Je((s / T.width) * d);
		if (h && (n === 'height' || n === 'width')) {
			var p = e.style[n];
			(e.style[n] = d + i), (v = e[c]), p ? (e.style[n] = p) : gs(e, n);
		} else
			(h || o === '%') &&
				!vk[Nr(m, 'display')] &&
				(l.position = Nr(e, 'position')),
				m === e && (l.position = 'static'),
				m.appendChild(Ji),
				(v = Ji[c]),
				m.removeChild(Ji),
				(l.position = 'absolute');
		return (
			u && h && ((T = is(m)), (T.time = En.time), (T.width = m[c])),
			Je(f ? (v * s) / d : v && s ? (d / v) * s : 0)
		);
	},
	Vr = function (e, n, r, i) {
		var s;
		return (
			zh || md(),
			n in kr &&
				n !== 'transform' &&
				((n = kr[n]), ~n.indexOf(',') && (n = n.split(',')[0])),
			Zr[n] && n !== 'transform'
				? ((s = bl(e, i)),
					(s =
						n !== 'transformOrigin'
							? s[n]
							: s.svg
								? s.origin
								: za(Nr(e, vn)) + ' ' + s.zOrigin + 'px'))
				: ((s = e.style[n]),
					(!s || s === 'auto' || i || ~(s + '').indexOf('calc(')) &&
						(s =
							(Aa[n] && Aa[n](e, n, r)) ||
							Nr(e, n) ||
							$g(e, n) ||
							(n === 'opacity' ? 1 : 0))),
			r && !~(s + '').trim().indexOf(' ') ? Oi(e, n, s, r) + r : s
		);
	},
	yk = function (e, n, r, i) {
		if (!r || r === 'none') {
			var s = wo(n, e, 1),
				o = s && Nr(e, s, 1);
			o && o !== r
				? ((n = s), (r = o))
				: n === 'borderColor' && (r = Nr(e, 'borderTopColor'));
		}
		var l = new gn(this._pt, e.style, n, 0, 1, mv),
			u = 0,
			a = 0,
			c,
			d,
			f,
			h,
			v,
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
				(i = Nr(e, n) || i),
				m ? (e.style[n] = m) : gs(e, n)),
			(c = [r, i]),
			sv(c),
			(r = c[0]),
			(i = c[1]),
			(f = r.match(Ys) || []),
			(k = i.match(Ys) || []),
			k.length)
		) {
			for (; (d = Ys.exec(i)); )
				(T = d[0]),
					(p = i.substring(u, d.index)),
					v
						? (v = (v + 1) % 5)
						: (p.substr(-5) === 'rgba(' || p.substr(-5) === 'hsla(') && (v = 1),
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
						x !== y && (h = Oi(e, n, m, y) || 0),
						(l._pt = {
							_next: l._pt,
							p: p || a === 1 ? p : ',',
							s: h,
							c: _ - h,
							m: (v && v < 4) || n === 'zIndex' ? Math.round : 0,
						}));
			l.c = u < i.length ? i.substring(u, i.length) : '';
		} else l.r = n === 'display' && i === 'none' ? yv : vv;
		return Ag.test(i) && (l.e = 0), (this._pt = l), l;
	},
	Tm = { top: '0%', bottom: '100%', left: '0%', right: '100%', center: '50%' },
	xk = function (e) {
		var n = e.split(' '),
			r = n[0],
			i = n[1] || '50%';
		return (
			(r === 'top' || r === 'bottom' || i === 'left' || i === 'right') &&
				((e = r), (r = i), (i = e)),
			(n[0] = Tm[r] || r),
			(n[1] = Tm[i] || i),
			n.join(' ')
		);
	},
	wk = function (e, n) {
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
						Zr[l] && ((u = 1), (l = l === 'transformOrigin' ? vn : We)),
						gs(r, l);
			u &&
				(gs(r, We),
				o &&
					(o.svg && r.removeAttribute('transform'),
					bl(r, 1),
					(o.uncache = 1),
					xv(i)));
		}
	},
	Aa = {
		clearProps: function (e, n, r, i, s) {
			if (s.data !== 'isFromStart') {
				var o = (e._pt = new gn(e._pt, n, r, 0, 0, wk));
				return (o.u = i), (o.pr = -10), (o.tween = s), e._props.push(r), 1;
			}
		},
	},
	Wl = [1, 0, 0, 1, 0, 0],
	Ev = {},
	Cv = function (e) {
		return e === 'matrix(1, 0, 0, 1, 0, 0)' || e === 'none' || !e;
	},
	Em = function (e) {
		var n = Nr(e, We);
		return Cv(n) ? Wl : n.substr(7).match(Dg).map(Je);
	},
	Ih = function (e, n) {
		var r = e._gsap || is(e),
			i = e.style,
			s = Em(e),
			o,
			l,
			u,
			a;
		return r.svg && e.getAttribute('transform')
			? ((u = e.transform.baseVal.consolidate().matrix),
				(s = [u.a, u.b, u.c, u.d, u.e, u.f]),
				s.join(',') === '1,0,0,1,0,0' ? Wl : s)
			: (s === Wl &&
					!e.offsetParent &&
					e !== ro &&
					!r.svg &&
					((u = i.display),
					(i.display = 'block'),
					(o = e.parentNode),
					(!o || !e.offsetParent) &&
						((a = 1), (l = e.nextElementSibling), ro.appendChild(e)),
					(s = Em(e)),
					u ? (i.display = u) : gs(e, 'display'),
					a &&
						(l
							? o.insertBefore(e, l)
							: o
								? o.appendChild(e)
								: ro.removeChild(e))),
				n && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
	},
	_d = function (e, n, r, i, s, o) {
		var l = e._gsap,
			u = s || Ih(e, !0),
			a = l.xOrigin || 0,
			c = l.yOrigin || 0,
			d = l.xOffset || 0,
			f = l.yOffset || 0,
			h = u[0],
			v = u[1],
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
			M;
		r
			? u !== Wl &&
				(E = h * T - v * m) &&
				((N = x * (T / E) + k * (-m / E) + (m * p - T * _) / E),
				(M = x * (-v / E) + k * (h / E) - (h * p - v * _) / E),
				(x = N),
				(k = M))
			: ((C = kv(e)),
				(x = C.x + (~y[0].indexOf('%') ? (x / 100) * C.width : x)),
				(k = C.y + (~(y[1] || y[0]).indexOf('%') ? (k / 100) * C.height : k))),
			i || (i !== !1 && l.smooth)
				? ((_ = x - a),
					(p = k - c),
					(l.xOffset = d + (_ * h + p * m) - _),
					(l.yOffset = f + (_ * v + p * T) - p))
				: (l.xOffset = l.yOffset = 0),
			(l.xOrigin = x),
			(l.yOrigin = k),
			(l.smooth = !!i),
			(l.origin = n),
			(l.originIsAbsolute = !!r),
			(e.style[vn] = '0px 0px'),
			o &&
				(di(o, l, 'xOrigin', a, x),
				di(o, l, 'yOrigin', c, k),
				di(o, l, 'xOffset', d, l.xOffset),
				di(o, l, 'yOffset', f, l.yOffset)),
			e.setAttribute('data-svg-origin', x + ' ' + k);
	},
	bl = function (e, n) {
		var r = e._gsap || new av(e);
		if ('x' in r && !n && !r.uncache) return r;
		var i = e.style,
			s = r.scaleX < 0,
			o = 'px',
			l = 'deg',
			u = getComputedStyle(e),
			a = Nr(e, vn) || '0',
			c,
			d,
			f,
			h,
			v,
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
			M,
			O,
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
			ot,
			ge,
			Oe;
		return (
			(c = d = f = m = T = _ = p = y = x = 0),
			(h = v = 1),
			(r.svg = !!(e.getCTM && Tv(e))),
			u.translate &&
				((u.translate !== 'none' ||
					u.scale !== 'none' ||
					u.rotate !== 'none') &&
					(i[We] =
						(u.translate !== 'none'
							? 'translate3d(' +
								(u.translate + ' 0 0').split(' ').slice(0, 3).join(', ') +
								') '
							: '') +
						(u.rotate !== 'none' ? 'rotate(' + u.rotate + ') ' : '') +
						(u.scale !== 'none'
							? 'scale(' + u.scale.split(' ').join(',') + ') '
							: '') +
						(u[We] !== 'none' ? u[We] : '')),
				(i.scale = i.rotate = i.translate = 'none')),
			(E = Ih(e, r.svg)),
			r.svg &&
				(r.uncache
					? ((A = e.getBBox()),
						(a = r.xOrigin - A.x + 'px ' + (r.yOrigin - A.y) + 'px'),
						(Q = ''))
					: (Q = !n && e.getAttribute('data-svg-origin')),
				_d(e, Q || a, !!Q || r.originIsAbsolute, r.smooth !== !1, E)),
			(k = r.xOrigin || 0),
			(C = r.yOrigin || 0),
			E !== Wl &&
				((H = E[0]),
				(D = E[1]),
				(I = E[2]),
				(Y = E[3]),
				(c = K = E[4]),
				(d = G = E[5]),
				E.length === 6
					? ((h = Math.sqrt(H * H + D * D)),
						(v = Math.sqrt(Y * Y + I * I)),
						(m = H || D ? Ns(D, H) * Qi : 0),
						(p = I || Y ? Ns(I, Y) * Qi + m : 0),
						p && (v *= Math.abs(Math.cos(p * io))),
						r.svg && ((c -= k - (k * H + C * I)), (d -= C - (k * D + C * Y))))
					: ((Oe = E[6]),
						(ot = E[7]),
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
							((M = Math.cos(-N)),
							(O = Math.sin(-N)),
							(Q = K * M + w * O),
							(A = G * M + q * O),
							($ = Oe * M + oe * O),
							(w = K * -O + w * M),
							(q = G * -O + q * M),
							(oe = Oe * -O + oe * M),
							(ge = ot * -O + ge * M),
							(K = Q),
							(G = A),
							(Oe = $)),
						(N = Ns(-I, oe)),
						(_ = N * Qi),
						N &&
							((M = Math.cos(-N)),
							(O = Math.sin(-N)),
							(Q = H * M - w * O),
							(A = D * M - q * O),
							($ = I * M - oe * O),
							(ge = Y * O + ge * M),
							(H = Q),
							(D = A),
							(I = $)),
						(N = Ns(D, H)),
						(m = N * Qi),
						N &&
							((M = Math.cos(N)),
							(O = Math.sin(N)),
							(Q = H * M + D * O),
							(A = K * M + G * O),
							(D = D * M - H * O),
							(G = G * M - K * O),
							(H = Q),
							(K = A)),
						T &&
							Math.abs(T) + Math.abs(m) > 359.9 &&
							((T = m = 0), (_ = 180 - _)),
						(h = Je(Math.sqrt(H * H + D * D + I * I))),
						(v = Je(Math.sqrt(G * G + Oe * Oe))),
						(N = Ns(K, G)),
						(p = Math.abs(N) > 2e-4 ? N * Qi : 0),
						(x = ge ? 1 / (ge < 0 ? -ge : ge) : 0)),
				r.svg &&
					((Q = e.getAttribute('transform')),
					(r.forceCSS = e.setAttribute('transform', '') || !Cv(Nr(e, We))),
					Q && e.setAttribute('transform', Q))),
			Math.abs(p) > 90 &&
				Math.abs(p) < 270 &&
				(s
					? ((h *= -1), (p += m <= 0 ? 180 : -180), (m += m <= 0 ? 180 : -180))
					: ((v *= -1), (p += p <= 0 ? 180 : -180))),
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
			(r.scaleX = Je(h)),
			(r.scaleY = Je(v)),
			(r.rotation = Je(m) + l),
			(r.rotationX = Je(T) + l),
			(r.rotationY = Je(_) + l),
			(r.skewX = p + l),
			(r.skewY = y + l),
			(r.transformPerspective = x + o),
			(r.zOrigin = parseFloat(a.split(' ')[2]) || (!n && r.zOrigin) || 0) &&
				(i[vn] = za(a)),
			(r.xOffset = r.yOffset = 0),
			(r.force3D = On.force3D),
			(r.renderTransform = r.svg ? kk : Sv ? Pv : Sk),
			(r.uncache = 0),
			r
		);
	},
	za = function (e) {
		return (e = e.split(' '))[0] + ' ' + e[1];
	},
	Xc = function (e, n, r) {
		var i = Ut(n);
		return Je(parseFloat(n) + parseFloat(Oi(e, 'x', r + 'px', i))) + i;
	},
	Sk = function (e, n) {
		(n.z = '0px'),
			(n.rotationY = n.rotationX = '0deg'),
			(n.force3D = 0),
			Pv(e, n);
	},
	Ui = '0deg',
	Io = '0px',
	Bi = ') ',
	Pv = function (e, n) {
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
			v = r.scaleX,
			m = r.scaleY,
			T = r.transformPerspective,
			_ = r.force3D,
			p = r.target,
			y = r.zOrigin,
			x = '',
			k = (_ === 'auto' && e && e !== 1) || _ === !0;
		if (y && (d !== Ui || c !== Ui)) {
			var C = parseFloat(c) * io,
				E = Math.sin(C),
				N = Math.cos(C),
				M;
			(C = parseFloat(d) * io),
				(M = Math.cos(C)),
				(o = Xc(p, o, E * M * -y)),
				(l = Xc(p, l, -Math.sin(C) * -y)),
				(u = Xc(p, u, N * M * -y + y));
		}
		T !== Io && (x += 'perspective(' + T + Bi),
			(i || s) && (x += 'translate(' + i + '%, ' + s + '%) '),
			(k || o !== Io || l !== Io || u !== Io) &&
				(x +=
					u !== Io || k
						? 'translate3d(' + o + ', ' + l + ', ' + u + ') '
						: 'translate(' + o + ', ' + l + Bi),
			a !== Ui && (x += 'rotate(' + a + Bi),
			c !== Ui && (x += 'rotateY(' + c + Bi),
			d !== Ui && (x += 'rotateX(' + d + Bi),
			(f !== Ui || h !== Ui) && (x += 'skew(' + f + ', ' + h + Bi),
			(v !== 1 || m !== 1) && (x += 'scale(' + v + ', ' + m + Bi),
			(p.style[We] = x || 'translate(0, 0)');
	},
	kk = function (e, n) {
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
			v = r.xOrigin,
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
			M;
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
						(M = Math.tan(a - c)),
						(M = Math.sqrt(1 + M * M)),
						(E *= M),
						(N *= M),
						c &&
							((M = Math.tan(c)),
							(M = Math.sqrt(1 + M * M)),
							(k *= M),
							(C *= M))),
					(k = Je(k)),
					(C = Je(C)),
					(E = Je(E)),
					(N = Je(N)))
				: ((k = d), (N = f), (C = E = 0)),
			((y && !~(o + '').indexOf('px')) || (x && !~(l + '').indexOf('px'))) &&
				((y = Oi(h, 'x', o, 'px')), (x = Oi(h, 'y', l, 'px'))),
			(v || m || T || _) &&
				((y = Je(y + v - (v * k + m * E) + T)),
				(x = Je(x + m - (v * C + m * N) + _))),
			(i || s) &&
				((M = h.getBBox()),
				(y = Je(y + (i / 100) * M.width)),
				(x = Je(x + (s / 100) * M.height))),
			(M =
				'matrix(' + k + ',' + C + ',' + E + ',' + N + ',' + y + ',' + x + ')'),
			h.setAttribute('transform', M),
			p && (h.style[We] = M);
	},
	Tk = function (e, n, r, i, s) {
		var o = 360,
			l = St(s),
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
					? (a = ((a + o * xm) % o) - ~~(a / o) * o)
					: d === 'ccw' && a > 0 && (a = ((a - o * xm) % o) - ~~(a / o) * o)),
			(e._pt = f = new gn(e._pt, n, r, i, a, lk)),
			(f.e = c),
			(f.u = 'deg'),
			e._props.push(r),
			f
		);
	},
	Cm = function (e, n) {
		for (var r in n) e[r] = n[r];
		return e;
	},
	Ek = function (e, n, r) {
		var i = Cm({}, r._gsap),
			s = 'perspective,force3D,transformOrigin,svgOrigin',
			o = r.style,
			l,
			u,
			a,
			c,
			d,
			f,
			h,
			v;
		i.svg
			? ((a = r.getAttribute('transform')),
				r.setAttribute('transform', ''),
				(o[We] = n),
				(l = bl(r, 1)),
				gs(r, We),
				r.setAttribute('transform', a))
			: ((a = getComputedStyle(r)[We]),
				(o[We] = n),
				(l = bl(r, 1)),
				(o[We] = a));
		for (u in Zr)
			(a = i[u]),
				(c = l[u]),
				a !== c &&
					s.indexOf(u) < 0 &&
					((h = Ut(a)),
					(v = Ut(c)),
					(d = h !== v ? Oi(r, u, a, v) : parseFloat(a)),
					(f = parseFloat(c)),
					(e._pt = new gn(e._pt, l, u, d, f - d, hd)),
					(e._pt.u = v || 0),
					e._props.push(u));
		Cm(l, i);
	};
_n('padding,margin,Width,Radius', function (t, e) {
	var n = 'Top',
		r = 'Right',
		i = 'Bottom',
		s = 'Left',
		o = (e < 3 ? [n, r, i, s] : [n + s, n + r, i + r, i + s]).map(function (l) {
			return e < 2 ? t + l : 'border' + l + t;
		});
	Aa[e > 1 ? 'border' + t : t] = function (l, u, a, c, d) {
		var f, h;
		if (arguments.length < 4)
			return (
				(f = o.map(function (v) {
					return Vr(l, v, a);
				})),
				(h = f.join(' ')),
				h.split(f[0]).length === 5 ? f[0] : h
			);
		(f = (c + '').split(' ')),
			(h = {}),
			o.forEach(function (v, m) {
				return (h[v] = f[m] = f[m] || f[((m - 1) / 2) | 0]);
			}),
			l.init(u, h, d);
	};
});
var Nv = {
	name: 'css',
	register: md,
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
			v,
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
		zh || md(),
			(this.styles = this.styles || wv(e)),
			(N = this.styles.props),
			(this.tween = r);
		for (m in n)
			if (m !== 'autoRound' && ((c = n[m]), !(Tn[m] && cv(m, n, r, i, e, s)))) {
				if (
					((h = typeof c),
					(v = Aa[m]),
					h === 'function' && ((c = c.call(r, i, e, s)), (h = typeof c)),
					h === 'string' && ~c.indexOf('random(') && (c = $l(c)),
					v)
				)
					v(this, e, m, c, r) && (E = 1);
				else if (m.substr(0, 2) === '--')
					(a = (getComputedStyle(e).getPropertyValue(m) + '').trim()),
						(c += ''),
						(Ei.lastIndex = 0),
						Ei.test(a) || ((T = Ut(a)), (_ = Ut(c))),
						_ ? T !== _ && (a = Oi(e, m, a, _) + _) : T && (c += T),
						this.add(l, 'setProperty', a, c, i, s, 0, 0, m),
						o.push(m),
						N.push(m, 0, l[m]);
				else if (h !== 'undefined') {
					if (
						(u && m in u
							? ((a = typeof u[m] == 'function' ? u[m].call(r, i, e, s) : u[m]),
								St(a) && ~a.indexOf('random(') && (a = $l(a)),
								Ut(a + '') ||
									a === 'auto' ||
									(a += On.units[m] || Ut(Vr(e, m)) || ''),
								(a + '').charAt(1) === '=' && (a = Vr(e, m)))
							: (a = Vr(e, m)),
						(f = parseFloat(a)),
						(p = h === 'string' && c.charAt(1) === '=' && c.substr(0, 2)),
						p && (c = c.substr(2)),
						(d = parseFloat(c)),
						m in kr &&
							(m === 'autoAlpha' &&
								(f === 1 && Vr(e, 'visibility') === 'hidden' && d && (f = 0),
								N.push('visibility', 0, l.visibility),
								di(
									this,
									l,
									'visibility',
									f ? 'inherit' : 'hidden',
									d ? 'inherit' : 'hidden',
									!d,
								)),
							m !== 'scale' &&
								m !== 'transform' &&
								((m = kr[m]), ~m.indexOf(',') && (m = m.split(',')[0]))),
						(y = m in Zr),
						y)
					) {
						if (
							(this.styles.save(m),
							x ||
								((k = e._gsap),
								(k.renderTransform && !n.parseTransform) ||
									bl(e, n.parseTransform),
								(C = n.smoothOrigin !== !1 && k.smooth),
								(x = this._pt =
									new gn(this._pt, l, We, 0, 1, k.renderTransform, k, 0, -1)),
								(x.dep = 1)),
							m === 'scale')
						)
							(this._pt = new gn(
								this._pt,
								k,
								'scaleY',
								k.scaleY,
								(p ? no(k.scaleY, p + d) : d) - k.scaleY || 0,
								hd,
							)),
								(this._pt.u = 0),
								o.push('scaleY', m),
								(m += 'X');
						else if (m === 'transformOrigin') {
							N.push(vn, 0, l[vn]),
								(c = xk(c)),
								k.svg
									? _d(e, c, 0, C, 0, this)
									: ((_ = parseFloat(c.split(' ')[2]) || 0),
										_ !== k.zOrigin && di(this, k, 'zOrigin', k.zOrigin, _),
										di(this, l, m, za(a), za(c)));
							continue;
						} else if (m === 'svgOrigin') {
							_d(e, c, 1, C, 0, this);
							continue;
						} else if (m in Ev) {
							Tk(this, k, m, f, p ? no(f, p + c) : c);
							continue;
						} else if (m === 'smoothOrigin') {
							di(this, k, 'smooth', k.smooth, c);
							continue;
						} else if (m === 'force3D') {
							k[m] = c;
							continue;
						} else if (m === 'transform') {
							Ek(this, c, e);
							continue;
						}
					} else m in l || (m = wo(m) || m);
					if (y || ((d || d === 0) && (f || f === 0) && !ok.test(c) && m in l))
						(T = (a + '').substr((f + '').length)),
							d || (d = 0),
							(_ = Ut(c) || (m in On.units ? On.units[m] : T)),
							T !== _ && (f = Oi(e, m, a, _)),
							(this._pt = new gn(
								this._pt,
								y ? k : l,
								m,
								f,
								(p ? no(f, p + d) : d) - f,
								!y && (_ === 'px' || m === 'zIndex') && n.autoRound !== !1
									? ak
									: hd,
							)),
							(this._pt.u = _ || 0),
							T !== _ && _ !== '%' && ((this._pt.b = a), (this._pt.r = uk));
					else if (m in l) yk.call(this, e, m, a, p ? p + c : c);
					else if (m in e) this.add(e, m, a || e[m], p ? p + c : c, i, s);
					else if (m !== 'parseTransform') {
						Ch(m, c);
						continue;
					}
					y || (m in l ? N.push(m, 0, l[m]) : N.push(m, 1, a || e[m])),
						o.push(m);
				}
			}
		E && _v(this);
	},
	render: function (e, n) {
		if (n.tween._time || !Lh())
			for (var r = n._pt; r; ) r.r(e, r.d), (r = r._next);
		else n.styles.revert();
	},
	get: Vr,
	aliases: kr,
	getSetter: function (e, n, r) {
		var i = kr[n];
		return (
			i && i.indexOf(',') < 0 && (n = i),
			n in Zr && n !== vn && (e._gsap.x || Vr(e, 'x'))
				? r && ym === r
					? n === 'scale'
						? hk
						: dk
					: (ym = r || {}) && (n === 'scale' ? pk : mk)
				: e.style && !kh(e.style[n])
					? ck
					: ~n.indexOf('-')
						? fk
						: Dh(e, n)
		);
	},
	core: { _removeProperty: gs, _getMatrix: Ih },
};
yn.utils.checkPrefix = wo;
yn.core.getStyleSaver = wv;
(function (t, e, n, r) {
	var i = _n(t + ',' + e + ',' + n, function (s) {
		Zr[s] = 1;
	});
	_n(e, function (s) {
		(On.units[s] = 'deg'), (Ev[s] = 1);
	}),
		(kr[i[13]] = t + ',' + e),
		_n(r, function (s) {
			var o = s.split(':');
			kr[o[1]] = i[o[0]];
		});
})(
	'x,y,z,scale,scaleX,scaleY,xPercent,yPercent',
	'rotation,rotationX,rotationY,skewX,skewY',
	'transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective',
	'0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY',
);
_n(
	'x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective',
	function (t) {
		On.units[t] = 'px';
	},
);
yn.registerPlugin(Nv);
var tn = yn.registerPlugin(Nv) || yn;
tn.core.Tween;
/*!
 * @gsap/react 2.1.0
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ let Pm = typeof window < 'u' ? te.useLayoutEffect : te.useEffect,
	Nm = (t) => t && !Array.isArray(t) && typeof t == 'object',
	Su = [],
	Ck = {},
	jv = tn;
const Jl = (t, e = Su) => {
	let n = Ck;
	Nm(t)
		? ((n = t), (t = null), (e = 'dependencies' in n ? n.dependencies : Su))
		: Nm(e) && ((n = e), (e = 'dependencies' in n ? n.dependencies : Su));
	let { scope: r, revertOnUpdate: i } = n,
		[s, o] = te.useState(!1);
	t &&
		typeof t != 'function' &&
		console.warn('First parameter must be a function or config object');
	const l = jv.context(() => {}, r),
		u = (d) => l.add(null, d),
		a = () => l.revert(),
		c = e && e.length && !i;
	return (
		Pm(() => {
			if ((t && l.add(t, r), !c || !s)) return a;
		}, e),
		c && Pm(() => (o(!0), a), Su),
		{ context: l, contextSafe: u }
	);
};
Jl.register = (t) => {
	jv = t;
};
Jl.headless = !0;
function Pk() {
	const t = te.useRef(null),
		e = te.useRef(null),
		n = te.useRef(null),
		r = te.useRef(null),
		i = te.useRef(null);
	return (
		Jl(
			() => {
				const s = r.current.offsetHeight,
					o = i.current.offsetHeight,
					l = () =>
						tn.to(r.current, {
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
						tn.to(e.current, {
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
						tn.to(n.current, {
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
				tn.matchMedia().add('(min-width: 1024px)', () => {
					l(), u(), a();
				});
			},
			{ scope: t },
		),
		g.jsx(g.Fragment, {
			children: g.jsx('div', {
				className: Ie.container,
				id: 'about',
				ref: t,
				children: g.jsxs('div', {
					className: Ie.outer,
					ref: i,
					children: [
						g.jsx('div', {
							className: Ie.descWrapper,
							children: g.jsxs('div', {
								className: Ie.desc,
								ref: r,
								children: [
									g.jsx('div', {
										className: Ie.titleWrapper,
										children: g.jsxs('div', {
											className: Ie.title.inner,
											children: [
												g.jsx('h2', {
													className: Ie.title,
													children: 'ABOUT US',
												}),
												g.jsx('h3', {
													className: Ie.subTitle,
													children: 'モルツが大切にしていること',
												}),
											],
										}),
									}),
									g.jsx('div', {
										className: Ie.textWrapper,
										children: g.jsxs('div', {
											className: Ie.textInner,
											children: [
												g.jsxs('p', {
													className: Ie.text,
													children: [
														'まず、見た目の美しさだけでなく、',
														g.jsx('br', {}),
														'マーケティング的な視点からデザインを構築し、',
														g.jsx('br', {}),
														'メッセージとの融合を目指します。',
														g.jsx('br', {}),
														'効果的なコミュニケーションを提供し、',
														g.jsx('br', {}),
														'クライアントとの関係を築き上げます。',
													],
												}),
												g.jsxs('p', {
													className: Ie.text,
													children: [
														'そしてもう一つ、デザインという',
														g.jsx('br', {}),
														'コミュニケーションを通じてクライアントと協力し、',
														g.jsx('br', {}),
														'共に喜びを分かち合える仕事をすること。',
														g.jsx('br', {}),
														'そのために私たちは、作品という成果が実るよう、',
														g.jsx('br', {}),
														'日々デザインという“畑”を耕し続けています。',
													],
												}),
												g.jsxs('p', {
													className: Ie.text,
													children: [
														'“ モルツ ” は、企画から制作ディレクションまで、',
														g.jsx('br', {}),
														'トータルに手がけているデザイン会社です。',
														g.jsx('br', {}),
														'直接取引から大手代理店や出版社などを受注先として、',
														g.jsx('br', {}),
														'大手、中小企業、または各種団体など',
														g.jsx('br', {}),
														'さまざまな業種、業態の広告を企画から参加しながら',
														g.jsx('br', {}),
														'グラフィックデザイン業務を中心に、',
														g.jsx('br', {}),
														'お手伝いさせていただきます。',
													],
												}),
											],
										}),
									}),
								],
							}),
						}),
						g.jsxs('div', {
							className: Ie.logoContainer,
							children: [
								g.jsx('div', {
									className: Ie.logoMotion01,
									ref: e,
									children: g.jsx('div', {
										className: Ie.outer,
										children: g.jsx('img', {
											className: Ie.inner,
											src: aS,
											alt: 'malts-logo',
										}),
									}),
								}),
								g.jsx('div', {
									className: Ie.logoMotion02,
									ref: n,
									children: g.jsx('div', {
										className: Ie.outer,
										children: g.jsx('img', {
											className: Ie.inner,
											src: cS,
											alt: 'malts-logo',
										}),
									}),
								}),
								g.jsx('div', {
									className: Ie.logoMotion03,
									children: g.jsx('div', {
										className: Ie.outer,
										children: g.jsx('img', {
											className: Ie.inner,
											src: fS,
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
const Nk = '/sample-site/assets/PAL-LOuPWGK6.jpg',
	jk = '/sample-site/assets/PAL_spread-8kIvk1I0.jpg',
	Ok = '/sample-site/assets/jinai-mJBqGcrV.jpg',
	Mk = '/sample-site/assets/jinai_spread-9VBOCCRc.jpg',
	Rk = '/sample-site/assets/sandisk-cLLxX1UE.jpg',
	Dk = '/sample-site/assets/sandisk_spread-f9Gbc75b.jpg',
	Ak = '/sample-site/assets/todai-fi0CqSGh.jpg',
	zk = '/sample-site/assets/todai_spread-UK31Cux5.jpg',
	Lk = '/sample-site/assets/unicity-EdjOdgp8.jpg',
	Fk = '/sample-site/assets/unicity_spread-yij5WoFD.jpg',
	Ik = '_container_fd0zl_29',
	Vk = '_titleWrapper_fd0zl_43',
	$k = '_title_fd0zl_43',
	Uk = '_wrapper_fd0zl_53',
	Bk = '_subTitleWrapper_fd0zl_60',
	Wk = '_subTitle_fd0zl_60',
	bk = '_imageContainer_fd0zl_81',
	Hk = '_flex_fd0zl_101',
	Yk = '_figure_fd0zl_128',
	Qk = '_show_fd0zl_153',
	Xk = '_hidden_fd0zl_157',
	$e = {
		container: Ik,
		titleWrapper: Vk,
		title: $k,
		wrapper: Uk,
		subTitleWrapper: Bk,
		subTitle: Wk,
		imageContainer: bk,
		flex: Hk,
		figure: Yk,
		show: Qk,
		hidden: Xk,
	};
function Gk() {
	const e = Object.values(
			Object.assign({
				'../../../assets/img/works/graphic/PAL.jpg': Nk,
				'../../../assets/img/works/graphic/PAL_spread.jpg': jk,
				'../../../assets/img/works/graphic/jinai.jpg': Ok,
				'../../../assets/img/works/graphic/jinai_spread.jpg': Mk,
				'../../../assets/img/works/graphic/sandisk.jpg': Rk,
				'../../../assets/img/works/graphic/sandisk_spread.jpg': Dk,
				'../../../assets/img/works/graphic/todai.jpg': Ak,
				'../../../assets/img/works/graphic/todai_spread.jpg': zk,
				'../../../assets/img/works/graphic/unicity.jpg': Lk,
				'../../../assets/img/works/graphic/unicity_spread.jpg': Fk,
			}),
		).reduce((r, i, s, o) => (s % 2 === 0 && r.push([i, o[s + 1]]), r), []),
		n = te.useRef(null);
	return (
		Jl(
			() => {
				const r = n.current.offsetWidth,
					i = tn.utils.toArray(`.${$e.figure}`);
				tn.matchMedia().add('(min-width: 768px)', () => {
					tn.to(i, {
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
		g.jsx(g.Fragment, {
			children: g.jsx('section', {
				className: $e.container,
				ref: n,
				children: g.jsxs('div', {
					className: $e.titleWrapper,
					children: [
						g.jsx('div', {
							className: $e.titleWrapper,
							children: g.jsx('h2', { className: $e.title, children: 'WORKS' }),
						}),
						g.jsxs('div', {
							className: $e.wrapper,
							children: [
								g.jsx('div', {
									className: $e.subTitleWrapper,
									children: g.jsx('h2', {
										className: $e.subTitle,
										children: 'GRAPHIC',
									}),
								}),
								g.jsx('div', {
									className: $e.imageContainer,
									children: g.jsx('div', {
										className: $e.flex,
										children: e.map((r, i) =>
											g.jsxs(
												'figure',
												{
													className: $e.figure,
													children: [
														g.jsxs('picture', {
															className: $e.show,
															children: [
																g.jsx('source', {}),
																g.jsx('img', {
																	src: r[0],
																	alt: 'Graphic Work',
																}),
															],
														}),
														g.jsxs('picture', {
															className: $e.hidden,
															children: [
																g.jsx('source', {}),
																g.jsx('img', {
																	src: r[1],
																	alt: 'Graphic Work',
																}),
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
					],
				}),
			}),
		})
	);
}
const Kk = '/sample-site/assets/23_website-eYCJrssh.jpg',
	qk = '/sample-site/assets/23_website_scroll-z4Xc32FC.jpg',
	Zk = '/sample-site/assets/JEED_website-R72Ygrbz.jpg',
	Jk = '/sample-site/assets/JEED_website_scroll-EsmQSEHq.jpg',
	e2 = '/sample-site/assets/jinai_website-PoSL6BLb.jpg',
	t2 = '/sample-site/assets/jinai_website_scroll-3bEVgtNV.jpg',
	n2 = '/sample-site/assets/naikakufu_website-k0zfn7LZ.jpg',
	r2 = '/sample-site/assets/naikakukfu_website_scroll-g7XKKCOH.jpg',
	i2 = '/sample-site/assets/tokyu_website-yVYY_O_S.jpg',
	s2 = '/sample-site/assets/tokyu_website_scroll-j1NB_5aM.jpg';
function o2() {
	const e = Object.values(
			Object.assign({
				'../../../assets/img/works/website/23_website.jpg': Kk,
				'../../../assets/img/works/website/23_website_scroll.jpg': qk,
				'../../../assets/img/works/website/JEED_website.jpg': Zk,
				'../../../assets/img/works/website/JEED_website_scroll.jpg': Jk,
				'../../../assets/img/works/website/jinai_website.jpg': e2,
				'../../../assets/img/works/website/jinai_website_scroll.jpg': t2,
				'../../../assets/img/works/website/naikakufu_website.jpg': n2,
				'../../../assets/img/works/website/naikakukfu_website_scroll.jpg': r2,
				'../../../assets/img/works/website/tokyu_website.jpg': i2,
				'../../../assets/img/works/website/tokyu_website_scroll.jpg': s2,
			}),
		).reduce((r, i, s, o) => (s % 2 === 0 && r.push([i, o[s + 1]]), r), []),
		n = te.useRef(null);
	return (
		Jl(
			() => {
				const r = n.current.offsetWidth,
					i = tn.utils.toArray(`.${$e.figure}`);
				tn.matchMedia().add('(min-width: 768px)', () => {
					tn.to(i, {
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
		g.jsx(g.Fragment, {
			children: g.jsx('section', {
				className: $e.container,
				ref: n,
				children: g.jsxs('div', {
					className: $e.wrapper,
					children: [
						g.jsx('div', {
							className: $e.subTitleWrapper,
							children: g.jsx('h2', {
								className: $e.subTitle,
								children: 'WEBSITE',
							}),
						}),
						g.jsx('div', {
							className: $e.imageContainer,
							children: g.jsx('div', {
								className: $e.flex,
								children: e.map((r, i) =>
									g.jsxs(
										'figure',
										{
											className: $e.figure,
											children: [
												g.jsxs('picture', {
													className: $e.show,
													children: [
														g.jsx('source', {}),
														g.jsx('img', { src: r[0], alt: '' }),
													],
												}),
												g.jsxs('picture', {
													className: $e.hidden,
													children: [
														g.jsx('source', {}),
														g.jsx('img', { src: r[1], alt: '' }),
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
const l2 = '_container_1aemw_29',
	u2 = '_subTitleWrapper_1aemw_37',
	a2 = '_subTitle_1aemw_37',
	c2 = '_description_1aemw_57',
	f2 = '_details_1aemw_63',
	d2 = '_subHeading_1aemw_71',
	h2 = '_list_1aemw_81',
	Wi = {
		container: l2,
		subTitleWrapper: u2,
		subTitle: a2,
		description: c2,
		details: f2,
		subHeading: d2,
		list: h2,
	},
	jm = [
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
function p2() {
	function t({ num: e }) {
		return g.jsxs('div', {
			className: Wi.details,
			children: [
				g.jsx('h3', { className: Wi.subHeading, children: jm[e].title }),
				g.jsx('ul', {
					className: Wi.list,
					children: jm[e].list.map((n, r) => g.jsx('li', { children: n }, r)),
				}),
			],
		});
	}
	return g.jsx(g.Fragment, {
		children: g.jsxs('section', {
			className: Wi.container,
			children: [
				g.jsx('div', {
					className: Wi.subTitleWrapper,
					children: g.jsx('h2', {
						className: Wi.subTitle,
						children: 'CLIENT LIST',
					}),
				}),
				g.jsxs('div', {
					className: Wi.description,
					children: [
						g.jsx(t, { num: 0 }),
						g.jsx(t, { num: 1 }),
						g.jsx(t, { num: 2 }),
						g.jsx(t, { num: 3 }),
						g.jsx(t, { num: 4 }),
						g.jsx(t, { num: 5 }),
					],
				}),
			],
		}),
	});
}
const m2 = '_container_iqa86_29',
	_2 = '_titleWrapper_iqa86_35',
	g2 = '_title_iqa86_35',
	v2 = { container: m2, titleWrapper: _2, title: g2 };
function y2() {
	return g.jsx(g.Fragment, {
		children: g.jsxs('article', {
			className: v2.container,
			id: 'works',
			children: [g.jsx(Gk, {}), g.jsx(o2, {}), g.jsx(p2, {})],
		}),
	});
}
const x2 = '_module_hmkv3_29',
	w2 = '_titleWrapper_hmkv3_35',
	S2 = '_title_hmkv3_35',
	k2 = '_outer_hmkv3_49',
	T2 = '_subtitleWrapper_hmkv3_55',
	E2 = '_subtitle_hmkv3_55',
	C2 = '_info_hmkv3_72',
	P2 = '_access_hmkv3_116',
	N2 = '_location_hmkv3_127',
	j2 = '_textarea_hmkv3_133',
	O2 = '_desc_hmkv3_143',
	M2 = '_text_hmkv3_133',
	R2 = '_map_hmkv3_169',
	Ce = {
		module: x2,
		titleWrapper: w2,
		title: S2,
		outer: k2,
		subtitleWrapper: T2,
		subtitle: E2,
		info: C2,
		access: P2,
		location: N2,
		textarea: j2,
		desc: O2,
		text: M2,
		map: R2,
		'icon-JR': '_icon-JR_hmkv3_258',
		'icon-TokyoMetro': '_icon-TokyoMetro_hmkv3_267',
		'icon-background': '_icon-background_hmkv3_272',
		'icon-logo': '_icon-logo_hmkv3_276',
	};
function D2() {
	return g.jsx(g.Fragment, {
		children: g.jsxs('article', {
			className: Ce.module,
			id: 'company',
			children: [
				g.jsx('div', {
					className: Ce.titleWrapper,
					children: g.jsx('h2', { className: Ce.title, children: 'COMPANY' }),
				}),
				g.jsxs('section', {
					className: Ce.outer,
					children: [
						g.jsx('div', {
							className: Ce.subtitleWrapper,
							children: g.jsx('h3', {
								className: Ce.subtitle,
								children: 'INFORMATION',
							}),
						}),
						g.jsx('table', {
							className: Ce.info,
							'aria-label': '会社概要',
							children: g.jsxs('tbody', {
								children: [
									g.jsxs('tr', {
										children: [
											g.jsx('th', { children: '社名' }),
											g.jsx('td', { children: '株式会社 モルツ' }),
										],
									}),
									g.jsxs('tr', {
										children: [
											g.jsx('th', { children: '設立' }),
											g.jsx('td', { children: '1990年10月1日' }),
										],
									}),
									g.jsxs('tr', {
										children: [
											g.jsx('th', { children: '資本金' }),
											g.jsx('td', { children: '1,000,000円' }),
										],
									}),
									g.jsxs('tr', {
										children: [
											g.jsx('th', { children: '代表者' }),
											g.jsx('td', { children: '代表取締役社長  ** **' }),
										],
									}),
									g.jsxs('tr', {
										children: [
											g.jsx('th', { children: '取引銀行' }),
											g.jsx('td', {
												children: 'さわやか信用金庫 青山渋谷支店 当座******',
											}),
										],
									}),
									g.jsxs('tr', {
										children: [
											g.jsx('th', { children: '主要取引先' }),
											g.jsx('td', {
												children: g.jsxs('ul', {
													children: [
														g.jsx('li', { children: '合同会社ウェブレーン' }),
														g.jsx('li', { children: '株式会社旺文社' }),
														g.jsx('li', { children: '株式会社コムブリッジ' }),
														g.jsx('li', { children: '株式会社コムブレインズ' }),
														g.jsx('li', { children: '埼玉医科大学病院' }),
														g.jsx('li', {
															children: '社会福祉法人埼玉医療福祉会',
														}),
														g.jsx('li', { children: '仁愛大学' }),
														g.jsx('li', { children: '株式会社ディスコ' }),
														g.jsx('li', { children: '株式会社美松堂' }),
														g.jsx('li', {
															children: '株式会社モメンタム ジャパン',
														}),
														g.jsx('li', { children: '株式会社ライオン社 他' }),
													],
												}),
											}),
										],
									}),
									g.jsxs('tr', {
										children: [
											g.jsx('th', { children: 'スタッフ' }),
											g.jsx('td', {
												children: g.jsxs('ul', {
													children: [
														g.jsx('li', {
															children: 'クリエイティブディレクター1名',
														}),
														g.jsx('li', {
															children: 'ディレクター・デザイナー2名',
														}),
														g.jsx('li', {
															children: 'WEBディレクター・デザイナー2名',
														}),
														g.jsx('li', { children: 'コピーライター4名' }),
														g.jsx('li', { children: 'カメラマン5名' }),
														g.jsx('li', { children: 'イラストレーター2名' }),
														g.jsx('li', { children: 'デザイナー1名' }),
														g.jsx('li', { children: 'EBデザイナー1名' }),
														g.jsx('li', { children: '動画クリエイター2名' }),
														g.jsx('li', { children: 'システムエンジニア1名' }),
														g.jsx('li', { children: 'ヘアメイク2名' }),
													],
												}),
											}),
										],
									}),
									g.jsxs('tr', {
										children: [
											g.jsx('th', { children: '業務内容' }),
											g.jsx('td', {
												children: g.jsxs('ul', {
													children: [
														g.jsx('li', {
															children: '企業・学校・病院案内パンフレット',
														}),
														g.jsx('li', { children: 'ホームページ制作' }),
														g.jsx('li', {
															children:
																'イベント・キャンペーンSPツール（ポスター、チラシ等）',
														}),
														g.jsx('li', { children: '製品カタログ' }),
														g.jsx('li', { children: '企業PR誌' }),
														g.jsx('li', { children: '新聞・雑誌広告' }),
														g.jsx('li', { children: '書籍' }),
														g.jsx('li', { children: 'パッケージ' }),
														g.jsx('li', { children: 'ロゴマーク制定等' }),
														g.jsx('li', {
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
						g.jsx('div', {
							className: Ce.subtitleWrapper,
							children: g.jsx('h3', {
								className: Ce.subtitle,
								children: 'ACCESS',
							}),
						}),
						g.jsxs('div', {
							className: Ce.access,
							children: [
								g.jsxs('div', {
									className: Ce.location,
									children: [
										g.jsx('div', {
											className: Ce.textarea,
											children: g.jsxs('div', {
												className: Ce.desc,
												children: [
													g.jsx('h4', { children: '所在地' }),
													g.jsxs('div', {
														className: Ce.text,
														children: [
															'〒150-0001',
															g.jsx('br', { 'aria-hidden': 'true' }),
															'東京都 渋谷区 神宮前 1-10-34',
															g.jsx('br', { 'aria-hidden': 'true' }),
															'原宿コーポ別館 707',
														],
													}),
												],
											}),
										}),
										g.jsx('div', {
											className: Ce.textarea,
											children: g.jsxs('div', {
												className: Ce.desc,
												children: [
													g.jsx('h4', { children: '交通機関' }),
													g.jsxs('div', {
														className: Ce.text,
														children: [
															g.jsxs('span', {
																children: [
																	g.jsx('i', {
																		className: Ce['icon-JR'],
																		'aria-hidden': 'true',
																	}),
																	'山手線 原宿駅',
																],
															}),
															g.jsx('span', { children: '東口 徒歩5分' }),
															g.jsxs('span', {
																children: [
																	g.jsxs('i', {
																		className: Ce['icon-TokyoMetro'],
																		'aria-hidden': 'true',
																		children: [
																			g.jsx('i', {
																				className: Ce['icon-background'],
																			}),
																			g.jsx('i', {
																				className: Ce['icon-logo'],
																			}),
																		],
																	}),
																	'千代田線 明治神宮前駅',
																],
															}),
															g.jsxs('span', {
																children: [
																	g.jsxs('i', {
																		className: Ce['icon-TokyoMetro'],
																		'aria-hidden': 'true',
																		children: [
																			g.jsx('i', {
																				className: Ce['icon-background'],
																			}),
																			g.jsx('i', {
																				className: Ce['icon-logo'],
																			}),
																		],
																	}),
																	'副都心線 明治神宮前駅',
																],
															}),
															g.jsx('span', { children: '2番出口 徒歩3分' }),
														],
													}),
												],
											}),
										}),
									],
								}),
								g.jsx('div', {
									className: Ce.map,
									children: g.jsx('iframe', {
										src: 'https://snazzymaps.com/embed/493204',
										title: 'map',
										loading: 'lazy',
										'aria-label': '地図',
									}),
								}),
							],
						}),
					],
				}),
			],
		}),
	});
}
const A2 = '_container_1yeit_29',
	z2 = '_outer_1yeit_36',
	L2 = '_titleWrapper_1yeit_42',
	F2 = '_title_1yeit_42',
	I2 = '_inner_1yeit_55',
	V2 = '_name_1yeit_70',
	$2 = '_company_1yeit_83',
	U2 = '_email_1yeit_84',
	B2 = '_message_1yeit_85',
	W2 = '_error_1yeit_149',
	b2 = '_buttonContainer_1yeit_157',
	H2 = '_submit_1yeit_166',
	Y2 = '_cancel_1yeit_177',
	It = {
		container: A2,
		outer: z2,
		titleWrapper: L2,
		title: F2,
		inner: I2,
		name: V2,
		company: $2,
		email: U2,
		message: B2,
		error: W2,
		buttonContainer: b2,
		submit: H2,
		cancel: Y2,
	};
var eu = (t) => t.type === 'checkbox',
	Xs = (t) => t instanceof Date,
	qt = (t) => t == null;
const Ov = (t) => typeof t == 'object';
var pt = (t) => !qt(t) && !Array.isArray(t) && Ov(t) && !Xs(t),
	Q2 = (t) =>
		pt(t) && t.target ? (eu(t.target) ? t.target.checked : t.target.value) : t,
	X2 = (t) => t.substring(0, t.search(/\.\d+(\.|$)/)) || t,
	G2 = (t, e) => t.has(X2(e)),
	K2 = (t) => {
		const e = t.constructor && t.constructor.prototype;
		return pt(e) && e.hasOwnProperty('isPrototypeOf');
	},
	Vh =
		typeof window < 'u' &&
		typeof window.HTMLElement < 'u' &&
		typeof document < 'u';
function zn(t) {
	let e;
	const n = Array.isArray(t);
	if (t instanceof Date) e = new Date(t);
	else if (t instanceof Set) e = new Set(t);
	else if (
		!(Vh && (t instanceof Blob || t instanceof FileList)) &&
		(n || pt(t))
	)
		if (((e = n ? [] : {}), !n && !K2(t))) e = t;
		else for (const r in t) t.hasOwnProperty(r) && (e[r] = zn(t[r]));
	else return t;
	return e;
}
var tu = (t) => (Array.isArray(t) ? t.filter(Boolean) : []),
	Ze = (t) => t === void 0,
	X = (t, e, n) => {
		if (!e || !pt(t)) return n;
		const r = tu(e.split(/[,[\].]+?/)).reduce((i, s) => (qt(i) ? i : i[s]), t);
		return Ze(r) || r === t ? (Ze(t[e]) ? n : t[e]) : r;
	},
	$r = (t) => typeof t == 'boolean';
const Om = { BLUR: 'blur', FOCUS_OUT: 'focusout', CHANGE: 'change' },
	ar = {
		onBlur: 'onBlur',
		onChange: 'onChange',
		onSubmit: 'onSubmit',
		onTouched: 'onTouched',
		all: 'all',
	},
	zr = {
		max: 'max',
		min: 'min',
		maxLength: 'maxLength',
		minLength: 'minLength',
		pattern: 'pattern',
		required: 'required',
		validate: 'validate',
	},
	Mv = ct.createContext(null),
	q2 = () => ct.useContext(Mv),
	Z2 = (t) => {
		const { children: e, ...n } = t;
		return ct.createElement(Mv.Provider, { value: n }, e);
	};
var J2 = (t, e, n, r = !0) => {
		const i = { defaultValues: e._defaultValues };
		for (const s in t)
			Object.defineProperty(i, s, {
				get: () => {
					const o = s;
					return (
						e._proxyFormState[o] !== ar.all &&
							(e._proxyFormState[o] = !r || ar.all),
						n && (n[o] = !0),
						t[o]
					);
				},
			});
		return i;
	},
	Fn = (t) => pt(t) && !Object.keys(t).length,
	eT = (t, e, n, r) => {
		n(t);
		const { name: i, ...s } = t;
		return (
			Fn(s) ||
			Object.keys(s).length >= Object.keys(e).length ||
			Object.keys(s).find((o) => e[o] === (!r || ar.all))
		);
	},
	Gc = (t) => (Array.isArray(t) ? t : [t]);
function tT(t) {
	const e = ct.useRef(t);
	(e.current = t),
		ct.useEffect(() => {
			const n =
				!t.disabled &&
				e.current.subject &&
				e.current.subject.subscribe({ next: e.current.next });
			return () => {
				n && n.unsubscribe();
			};
		}, [t.disabled]);
}
var Tr = (t) => typeof t == 'string',
	nT = (t, e, n, r, i) =>
		Tr(t)
			? (r && e.watch.add(t), X(n, t, i))
			: Array.isArray(t)
				? t.map((s) => (r && e.watch.add(s), X(n, s)))
				: (r && (e.watchAll = !0), n),
	$h = (t) => /^\w*$/.test(t),
	Rv = (t) => tu(t.replace(/["|']|\]/g, '').split(/\.|\[/)),
	Ae = (t, e, n) => {
		let r = -1;
		const i = $h(e) ? [e] : Rv(e),
			s = i.length,
			o = s - 1;
		for (; ++r < s; ) {
			const l = i[r];
			let u = n;
			if (r !== o) {
				const a = t[l];
				u = pt(a) || Array.isArray(a) ? a : isNaN(+i[r + 1]) ? {} : [];
			}
			(t[l] = u), (t = t[l]);
		}
		return t;
	},
	rT = (t, e, n, r, i) =>
		e
			? {
					...n[t],
					types: { ...(n[t] && n[t].types ? n[t].types : {}), [r]: i || !0 },
				}
			: {},
	Mm = (t) => ({
		isOnSubmit: !t || t === ar.onSubmit,
		isOnBlur: t === ar.onBlur,
		isOnChange: t === ar.onChange,
		isOnAll: t === ar.all,
		isOnTouch: t === ar.onTouched,
	}),
	Rm = (t, e, n) =>
		!n &&
		(e.watchAll ||
			e.watch.has(t) ||
			[...e.watch].some(
				(r) => t.startsWith(r) && /^\.\w+/.test(t.slice(r.length)),
			));
const fl = (t, e, n, r) => {
	for (const i of n || Object.keys(t)) {
		const s = X(t, i);
		if (s) {
			const { _f: o, ...l } = s;
			if (o) {
				if (o.refs && o.refs[0] && e(o.refs[0], i) && !r) break;
				if (o.ref && e(o.ref, o.name) && !r) break;
				fl(l, e);
			} else pt(l) && fl(l, e);
		}
	}
};
var iT = (t, e, n) => {
		const r = tu(X(t, n));
		return Ae(r, 'root', e[n]), Ae(t, n, r), t;
	},
	Uh = (t) => t.type === 'file',
	hi = (t) => typeof t == 'function',
	La = (t) => {
		if (!Vh) return !1;
		const e = t ? t.ownerDocument : 0;
		return (
			t instanceof
			(e && e.defaultView ? e.defaultView.HTMLElement : HTMLElement)
		);
	},
	qu = (t) => Tr(t),
	Bh = (t) => t.type === 'radio',
	Fa = (t) => t instanceof RegExp;
const Dm = { value: !1, isValid: !1 },
	Am = { value: !0, isValid: !0 };
var Dv = (t) => {
	if (Array.isArray(t)) {
		if (t.length > 1) {
			const e = t
				.filter((n) => n && n.checked && !n.disabled)
				.map((n) => n.value);
			return { value: e, isValid: !!e.length };
		}
		return t[0].checked && !t[0].disabled
			? t[0].attributes && !Ze(t[0].attributes.value)
				? Ze(t[0].value) || t[0].value === ''
					? Am
					: { value: t[0].value, isValid: !0 }
				: Am
			: Dm;
	}
	return Dm;
};
const zm = { isValid: !1, value: null };
var Av = (t) =>
	Array.isArray(t)
		? t.reduce(
				(e, n) =>
					n && n.checked && !n.disabled ? { isValid: !0, value: n.value } : e,
				zm,
			)
		: zm;
function Lm(t, e, n = 'validate') {
	if (qu(t) || (Array.isArray(t) && t.every(qu)) || ($r(t) && !t))
		return { type: n, message: qu(t) ? t : '', ref: e };
}
var js = (t) => (pt(t) && !Fa(t) ? t : { value: t, message: '' }),
	Fm = async (t, e, n, r, i) => {
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
				name: v,
				valueAsNumber: m,
				mount: T,
				disabled: _,
			} = t._f,
			p = X(e, v);
		if (!T || _) return {};
		const y = o ? o[0] : s,
			x = (D) => {
				r &&
					y.reportValidity &&
					(y.setCustomValidity($r(D) ? '' : D || ''), y.reportValidity());
			},
			k = {},
			C = Bh(s),
			E = eu(s),
			N = C || E,
			M =
				((m || Uh(s)) && Ze(s.value) && Ze(p)) ||
				(La(s) && s.value === '') ||
				p === '' ||
				(Array.isArray(p) && !p.length),
			O = rT.bind(null, v, n, k),
			H = (D, I, Y, K = zr.maxLength, G = zr.minLength) => {
				const Q = D ? I : Y;
				k[v] = { type: D ? K : G, message: Q, ref: s, ...O(D ? K : G, Q) };
			};
		if (
			i
				? !Array.isArray(p) || !p.length
				: l &&
					((!N && (M || qt(p))) ||
						($r(p) && !p) ||
						(E && !Dv(o).isValid) ||
						(C && !Av(o).isValid))
		) {
			const { value: D, message: I } = qu(l)
				? { value: !!l, message: l }
				: js(l);
			if (
				D &&
				((k[v] = {
					type: zr.required,
					message: I,
					ref: y,
					...O(zr.required, I),
				}),
				!n)
			)
				return x(I), k;
		}
		if (!M && (!qt(c) || !qt(d))) {
			let D, I;
			const Y = js(d),
				K = js(c);
			if (!qt(p) && !isNaN(p)) {
				const G = s.valueAsNumber || (p && +p);
				qt(Y.value) || (D = G > Y.value), qt(K.value) || (I = G < K.value);
			} else {
				const G = s.valueAsDate || new Date(p),
					Q = (w) => new Date(new Date().toDateString() + ' ' + w),
					A = s.type == 'time',
					$ = s.type == 'week';
				Tr(Y.value) &&
					p &&
					(D = A ? Q(p) > Q(Y.value) : $ ? p > Y.value : G > new Date(Y.value)),
					Tr(K.value) &&
						p &&
						(I = A
							? Q(p) < Q(K.value)
							: $
								? p < K.value
								: G < new Date(K.value));
			}
			if ((D || I) && (H(!!D, Y.message, K.message, zr.max, zr.min), !n))
				return x(k[v].message), k;
		}
		if ((u || a) && !M && (Tr(p) || (i && Array.isArray(p)))) {
			const D = js(u),
				I = js(a),
				Y = !qt(D.value) && p.length > +D.value,
				K = !qt(I.value) && p.length < +I.value;
			if ((Y || K) && (H(Y, D.message, I.message), !n))
				return x(k[v].message), k;
		}
		if (f && !M && Tr(p)) {
			const { value: D, message: I } = js(f);
			if (
				Fa(D) &&
				!p.match(D) &&
				((k[v] = { type: zr.pattern, message: I, ref: s, ...O(zr.pattern, I) }),
				!n)
			)
				return x(I), k;
		}
		if (h) {
			if (hi(h)) {
				const D = await h(p, e),
					I = Lm(D, y);
				if (I && ((k[v] = { ...I, ...O(zr.validate, I.message) }), !n))
					return x(I.message), k;
			} else if (pt(h)) {
				let D = {};
				for (const I in h) {
					if (!Fn(D) && !n) break;
					const Y = Lm(await h[I](p, e), y, I);
					Y &&
						((D = { ...Y, ...O(I, Y.message) }), x(Y.message), n && (k[v] = D));
				}
				if (!Fn(D) && ((k[v] = { ref: y, ...D }), !n)) return k;
			}
		}
		return x(!0), k;
	};
function sT(t, e) {
	const n = e.slice(0, -1).length;
	let r = 0;
	for (; r < n; ) t = Ze(t) ? r++ : t[e[r++]];
	return t;
}
function oT(t) {
	for (const e in t) if (t.hasOwnProperty(e) && !Ze(t[e])) return !1;
	return !0;
}
function Pt(t, e) {
	const n = Array.isArray(e) ? e : $h(e) ? [e] : Rv(e),
		r = n.length === 1 ? t : sT(t, n),
		i = n.length - 1,
		s = n[i];
	return (
		r && delete r[s],
		i !== 0 &&
			((pt(r) && Fn(r)) || (Array.isArray(r) && oT(r))) &&
			Pt(t, n.slice(0, -1)),
		t
	);
}
var Kc = () => {
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
	Ia = (t) => qt(t) || !Ov(t);
function es(t, e) {
	if (Ia(t) || Ia(e)) return t === e;
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
				(pt(s) && pt(o)) ||
				(Array.isArray(s) && Array.isArray(o))
					? !es(s, o)
					: s !== o
			)
				return !1;
		}
	}
	return !0;
}
var zv = (t) => t.type === 'select-multiple',
	lT = (t) => Bh(t) || eu(t),
	qc = (t) => La(t) && t.isConnected,
	Lv = (t) => {
		for (const e in t) if (hi(t[e])) return !0;
		return !1;
	};
function Va(t, e = {}) {
	const n = Array.isArray(t);
	if (pt(t) || n)
		for (const r in t)
			Array.isArray(t[r]) || (pt(t[r]) && !Lv(t[r]))
				? ((e[r] = Array.isArray(t[r]) ? [] : {}), Va(t[r], e[r]))
				: qt(t[r]) || (e[r] = !0);
	return e;
}
function Fv(t, e, n) {
	const r = Array.isArray(t);
	if (pt(t) || r)
		for (const i in t)
			Array.isArray(t[i]) || (pt(t[i]) && !Lv(t[i]))
				? Ze(e) || Ia(n[i])
					? (n[i] = Array.isArray(t[i]) ? Va(t[i], []) : { ...Va(t[i]) })
					: Fv(t[i], qt(e) ? {} : e[i], n[i])
				: (n[i] = !es(t[i], e[i]));
	return n;
}
var ku = (t, e) => Fv(t, e, Va(e)),
	Iv = (t, { valueAsNumber: e, valueAsDate: n, setValueAs: r }) =>
		Ze(t)
			? t
			: e
				? t === ''
					? NaN
					: t && +t
				: n && Tr(t)
					? new Date(t)
					: r
						? r(t)
						: t;
function Zc(t) {
	const e = t.ref;
	if (!(t.refs ? t.refs.every((n) => n.disabled) : e.disabled))
		return Uh(e)
			? e.files
			: Bh(e)
				? Av(t.refs).value
				: zv(e)
					? [...e.selectedOptions].map(({ value: n }) => n)
					: eu(e)
						? Dv(t.refs).value
						: Iv(Ze(e.value) ? t.ref.value : e.value, t);
}
var uT = (t, e, n, r) => {
		const i = {};
		for (const s of t) {
			const o = X(e, s);
			o && Ae(i, s, o._f);
		}
		return {
			criteriaMode: n,
			names: [...t],
			fields: i,
			shouldUseNativeValidation: r,
		};
	},
	Vo = (t) =>
		Ze(t)
			? t
			: Fa(t)
				? t.source
				: pt(t)
					? Fa(t.value)
						? t.value.source
						: t.value
					: t,
	aT = (t) =>
		t.mount &&
		(t.required ||
			t.min ||
			t.max ||
			t.maxLength ||
			t.minLength ||
			t.pattern ||
			t.validate);
function Im(t, e, n) {
	const r = X(t, n);
	if (r || $h(n)) return { error: r, name: n };
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
var cT = (t, e, n, r, i) =>
		i.isOnAll
			? !1
			: !n && i.isOnTouch
				? !(e || t)
				: (n ? r.isOnBlur : i.isOnBlur)
					? !t
					: (n ? r.isOnChange : i.isOnChange)
						? t
						: !0,
	fT = (t, e) => !tu(X(t, e)).length && Pt(t, e);
const dT = {
	mode: ar.onSubmit,
	reValidateMode: ar.onChange,
	shouldFocusError: !0,
};
function hT(t = {}, e) {
	let n = { ...dT, ...t },
		r = {
			submitCount: 0,
			isDirty: !1,
			isLoading: hi(n.defaultValues),
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
			pt(n.values) || pt(n.defaultValues)
				? zn(n.values || n.defaultValues) || {}
				: {},
		o = n.shouldUnregister ? {} : zn(s),
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
		f = { values: Kc(), array: Kc(), state: Kc() },
		h = Mm(n.mode),
		v = Mm(n.reValidateMode),
		m = n.criteriaMode === ar.all,
		T = (S) => (P) => {
			clearTimeout(c), (c = setTimeout(S, P));
		},
		_ = async (S) => {
			if (d.isValid || S) {
				const P = n.resolver ? Fn((await M()).errors) : await H(i, !0);
				P !== r.isValid && f.state.next({ isValid: P });
			}
		},
		p = (S) => d.isValidating && f.state.next({ isValidating: S }),
		y = (S, P = [], j, V, F = !0, z = !0) => {
			if (V && j) {
				if (((l.action = !0), z && Array.isArray(X(i, S)))) {
					const B = j(X(i, S), V.argA, V.argB);
					F && Ae(i, S, B);
				}
				if (z && Array.isArray(X(r.errors, S))) {
					const B = j(X(r.errors, S), V.argA, V.argB);
					F && Ae(r.errors, S, B), fT(r.errors, S);
				}
				if (d.touchedFields && z && Array.isArray(X(r.touchedFields, S))) {
					const B = j(X(r.touchedFields, S), V.argA, V.argB);
					F && Ae(r.touchedFields, S, B);
				}
				d.dirtyFields && (r.dirtyFields = ku(s, o)),
					f.state.next({
						name: S,
						isDirty: I(S, P),
						dirtyFields: r.dirtyFields,
						errors: r.errors,
						isValid: r.isValid,
					});
			} else Ae(o, S, P);
		},
		x = (S, P) => {
			Ae(r.errors, S, P), f.state.next({ errors: r.errors });
		},
		k = (S) => {
			(r.errors = S), f.state.next({ errors: r.errors, isValid: !1 });
		},
		C = (S, P, j, V) => {
			const F = X(i, S);
			if (F) {
				const z = X(o, S, Ze(j) ? X(s, S) : j);
				Ze(z) || (V && V.defaultChecked) || P
					? Ae(o, S, P ? z : Zc(F._f))
					: G(S, z),
					l.mount && _();
			}
		},
		E = (S, P, j, V, F) => {
			let z = !1,
				B = !1;
			const fe = { name: S },
				ie = !!(X(i, S) && X(i, S)._f.disabled);
			if (!j || V) {
				d.isDirty &&
					((B = r.isDirty),
					(r.isDirty = fe.isDirty = I()),
					(z = B !== fe.isDirty));
				const Ye = ie || es(X(s, S), P);
				(B = !!(!ie && X(r.dirtyFields, S))),
					Ye || ie ? Pt(r.dirtyFields, S) : Ae(r.dirtyFields, S, !0),
					(fe.dirtyFields = r.dirtyFields),
					(z = z || (d.dirtyFields && B !== !Ye));
			}
			if (j) {
				const Ye = X(r.touchedFields, S);
				Ye ||
					(Ae(r.touchedFields, S, j),
					(fe.touchedFields = r.touchedFields),
					(z = z || (d.touchedFields && Ye !== j)));
			}
			return z && F && f.state.next(fe), z ? fe : {};
		},
		N = (S, P, j, V) => {
			const F = X(r.errors, S),
				z = d.isValid && $r(P) && r.isValid !== P;
			if (
				(t.delayError && j
					? ((a = T(() => x(S, j))), a(t.delayError))
					: (clearTimeout(c),
						(a = null),
						j ? Ae(r.errors, S, j) : Pt(r.errors, S)),
				(j ? !es(F, j) : F) || !Fn(V) || z)
			) {
				const B = {
					...V,
					...(z && $r(P) ? { isValid: P } : {}),
					errors: r.errors,
					name: S,
				};
				(r = { ...r, ...B }), f.state.next(B);
			}
			p(!1);
		},
		M = async (S) =>
			n.resolver(
				o,
				n.context,
				uT(S || u.mount, i, n.criteriaMode, n.shouldUseNativeValidation),
			),
		O = async (S) => {
			const { errors: P } = await M(S);
			if (S)
				for (const j of S) {
					const V = X(P, j);
					V ? Ae(r.errors, j, V) : Pt(r.errors, j);
				}
			else r.errors = P;
			return P;
		},
		H = async (S, P, j = { valid: !0 }) => {
			for (const V in S) {
				const F = S[V];
				if (F) {
					const { _f: z, ...B } = F;
					if (z) {
						const fe = u.array.has(z.name),
							ie = await Fm(F, o, m, n.shouldUseNativeValidation && !P, fe);
						if (ie[z.name] && ((j.valid = !1), P)) break;
						!P &&
							(X(ie, z.name)
								? fe
									? iT(r.errors, ie, z.name)
									: Ae(r.errors, z.name, ie[z.name])
								: Pt(r.errors, z.name));
					}
					B && (await H(B, P, j));
				}
			}
			return j.valid;
		},
		D = () => {
			for (const S of u.unMount) {
				const P = X(i, S);
				P &&
					(P._f.refs ? P._f.refs.every((j) => !qc(j)) : !qc(P._f.ref)) &&
					ye(S);
			}
			u.unMount = new Set();
		},
		I = (S, P) => (S && P && Ae(o, S, P), !es(oe(), s)),
		Y = (S, P, j) =>
			nT(S, u, { ...(l.mount ? o : Ze(P) ? s : Tr(S) ? { [S]: P } : P) }, j, P),
		K = (S) => tu(X(l.mount ? o : s, S, t.shouldUnregister ? X(s, S, []) : [])),
		G = (S, P, j = {}) => {
			const V = X(i, S);
			let F = P;
			if (V) {
				const z = V._f;
				z &&
					(!z.disabled && Ae(o, S, Iv(P, z)),
					(F = La(z.ref) && qt(P) ? '' : P),
					zv(z.ref)
						? [...z.ref.options].forEach(
								(B) => (B.selected = F.includes(B.value)),
							)
						: z.refs
							? eu(z.ref)
								? z.refs.length > 1
									? z.refs.forEach(
											(B) =>
												(!B.defaultChecked || !B.disabled) &&
												(B.checked = Array.isArray(F)
													? !!F.find((fe) => fe === B.value)
													: F === B.value),
										)
									: z.refs[0] && (z.refs[0].checked = !!F)
								: z.refs.forEach((B) => (B.checked = B.value === F))
							: Uh(z.ref)
								? (z.ref.value = '')
								: ((z.ref.value = F),
									z.ref.type || f.values.next({ name: S, values: { ...o } })));
			}
			(j.shouldDirty || j.shouldTouch) &&
				E(S, F, j.shouldTouch, j.shouldDirty, !0),
				j.shouldValidate && q(S);
		},
		Q = (S, P, j) => {
			for (const V in P) {
				const F = P[V],
					z = `${S}.${V}`,
					B = X(i, z);
				(u.array.has(S) || !Ia(F) || (B && !B._f)) && !Xs(F)
					? Q(z, F, j)
					: G(z, F, j);
			}
		},
		A = (S, P, j = {}) => {
			const V = X(i, S),
				F = u.array.has(S),
				z = zn(P);
			Ae(o, S, z),
				F
					? (f.array.next({ name: S, values: { ...o } }),
						(d.isDirty || d.dirtyFields) &&
							j.shouldDirty &&
							f.state.next({
								name: S,
								dirtyFields: ku(s, o),
								isDirty: I(S, z),
							}))
					: V && !V._f && !qt(z)
						? Q(S, z, j)
						: G(S, z, j),
				Rm(S, u) && f.state.next({ ...r }),
				f.values.next({ name: S, values: { ...o } }),
				!l.mount && e();
		},
		$ = async (S) => {
			const P = S.target;
			let j = P.name,
				V = !0;
			const F = X(i, j),
				z = () => (P.type ? Zc(F._f) : Q2(S)),
				B = (fe) => {
					V = Number.isNaN(fe) || fe === X(o, j, fe);
				};
			if (F) {
				let fe, ie;
				const Ye = z(),
					lt = S.type === Om.BLUR || S.type === Om.FOCUS_OUT,
					qn =
						(!aT(F._f) && !n.resolver && !X(r.errors, j) && !F._f.deps) ||
						cT(lt, X(r.touchedFields, j), r.isSubmitted, v, h),
					Mr = Rm(j, u, lt);
				Ae(o, j, Ye),
					lt
						? (F._f.onBlur && F._f.onBlur(S), a && a(0))
						: F._f.onChange && F._f.onChange(S);
				const Re = E(j, Ye, lt, !1),
					Ts = !Fn(Re) || Mr;
				if (
					(!lt && f.values.next({ name: j, type: S.type, values: { ...o } }),
					qn)
				)
					return (
						d.isValid && _(), Ts && f.state.next({ name: j, ...(Mr ? {} : Re) })
					);
				if ((!lt && Mr && f.state.next({ ...r }), p(!0), n.resolver)) {
					const { errors: Zn } = await M([j]);
					if ((B(Ye), V)) {
						const ei = Im(r.errors, i, j),
							Rr = Im(Zn, i, ei.name || j);
						(fe = Rr.error), (j = Rr.name), (ie = Fn(Zn));
					}
				} else
					(fe = (await Fm(F, o, m, n.shouldUseNativeValidation))[j]),
						B(Ye),
						V && (fe ? (ie = !1) : d.isValid && (ie = await H(i, !0)));
				V && (F._f.deps && q(F._f.deps), N(j, ie, fe, Re));
			}
		},
		w = (S, P) => {
			if (X(r.errors, P) && S.focus) return S.focus(), 1;
		},
		q = async (S, P = {}) => {
			let j, V;
			const F = Gc(S);
			if ((p(!0), n.resolver)) {
				const z = await O(Ze(S) ? S : F);
				(j = Fn(z)), (V = S ? !F.some((B) => X(z, B)) : j);
			} else
				S
					? ((V = (
							await Promise.all(
								F.map(async (z) => {
									const B = X(i, z);
									return await H(B && B._f ? { [z]: B } : B);
								}),
							)
						).every(Boolean)),
						!(!V && !r.isValid) && _())
					: (V = j = await H(i));
			return (
				f.state.next({
					...(!Tr(S) || (d.isValid && j !== r.isValid) ? {} : { name: S }),
					...(n.resolver || !S ? { isValid: j } : {}),
					errors: r.errors,
					isValidating: !1,
				}),
				P.shouldFocus && !V && fl(i, w, S ? F : u.mount),
				V
			);
		},
		oe = (S) => {
			const P = { ...s, ...(l.mount ? o : {}) };
			return Ze(S) ? P : Tr(S) ? X(P, S) : S.map((j) => X(P, j));
		},
		ot = (S, P) => ({
			invalid: !!X((P || r).errors, S),
			isDirty: !!X((P || r).dirtyFields, S),
			isTouched: !!X((P || r).touchedFields, S),
			error: X((P || r).errors, S),
		}),
		ge = (S) => {
			S && Gc(S).forEach((P) => Pt(r.errors, P)),
				f.state.next({ errors: S ? r.errors : {} });
		},
		Oe = (S, P, j) => {
			const V = (X(i, S, { _f: {} })._f || {}).ref;
			Ae(r.errors, S, { ...P, ref: V }),
				f.state.next({ name: S, errors: r.errors, isValid: !1 }),
				j && j.shouldFocus && V && V.focus && V.focus();
		},
		Ee = (S, P) =>
			hi(S)
				? f.values.subscribe({ next: (j) => S(Y(void 0, P), j) })
				: Y(S, P, !0),
		ye = (S, P = {}) => {
			for (const j of S ? Gc(S) : u.mount)
				u.mount.delete(j),
					u.array.delete(j),
					P.keepValue || (Pt(i, j), Pt(o, j)),
					!P.keepError && Pt(r.errors, j),
					!P.keepDirty && Pt(r.dirtyFields, j),
					!P.keepTouched && Pt(r.touchedFields, j),
					!n.shouldUnregister && !P.keepDefaultValue && Pt(s, j);
			f.values.next({ values: { ...o } }),
				f.state.next({ ...r, ...(P.keepDirty ? { isDirty: I() } : {}) }),
				!P.keepIsValid && _();
		},
		mt = ({ disabled: S, name: P, field: j, fields: V, value: F }) => {
			if ($r(S)) {
				const z = S ? void 0 : Ze(F) ? Zc(j ? j._f : X(V, P)._f) : F;
				Ae(o, P, z), E(P, z, !1, !1, !0);
			}
		},
		nt = (S, P = {}) => {
			let j = X(i, S);
			const V = $r(P.disabled);
			return (
				Ae(i, S, {
					...(j || {}),
					_f: {
						...(j && j._f ? j._f : { ref: { name: S } }),
						name: S,
						mount: !0,
						...P,
					},
				}),
				u.mount.add(S),
				j
					? mt({ field: j, disabled: P.disabled, name: S, value: P.value })
					: C(S, !0, P.value),
				{
					...(V ? { disabled: P.disabled } : {}),
					...(n.progressive
						? {
								required: !!P.required,
								min: Vo(P.min),
								max: Vo(P.max),
								minLength: Vo(P.minLength),
								maxLength: Vo(P.maxLength),
								pattern: Vo(P.pattern),
							}
						: {}),
					name: S,
					onChange: $,
					onBlur: $,
					ref: (F) => {
						if (F) {
							nt(S, P), (j = X(i, S));
							const z =
									(Ze(F.value) &&
										F.querySelectorAll &&
										F.querySelectorAll('input,select,textarea')[0]) ||
									F,
								B = lT(z),
								fe = j._f.refs || [];
							if (B ? fe.find((ie) => ie === z) : z === j._f.ref) return;
							Ae(i, S, {
								_f: {
									...j._f,
									...(B
										? {
												refs: [
													...fe.filter(qc),
													z,
													...(Array.isArray(X(s, S)) ? [{}] : []),
												],
												ref: { type: z.type, name: S },
											}
										: { ref: z }),
								},
							}),
								C(S, !1, void 0, z);
						} else
							(j = X(i, S, {})),
								j._f && (j._f.mount = !1),
								(n.shouldUnregister || P.shouldUnregister) &&
									!(G2(u.array, S) && l.action) &&
									u.unMount.add(S);
					},
				}
			);
		},
		Kn = () => n.shouldFocusError && fl(i, w, u.mount),
		kt = (S) => {
			$r(S) &&
				(f.state.next({ disabled: S }),
				fl(
					i,
					(P, j) => {
						let V = S;
						const F = X(i, j);
						F && $r(F._f.disabled) && (V || (V = F._f.disabled)),
							(P.disabled = V);
					},
					0,
					!1,
				));
		},
		on = (S, P) => async (j) => {
			let V;
			j && (j.preventDefault && j.preventDefault(), j.persist && j.persist());
			let F = zn(o);
			if ((f.state.next({ isSubmitting: !0 }), n.resolver)) {
				const { errors: z, values: B } = await M();
				(r.errors = z), (F = B);
			} else await H(i);
			if ((Pt(r.errors, 'root'), Fn(r.errors))) {
				f.state.next({ errors: {} });
				try {
					await S(F, j);
				} catch (z) {
					V = z;
				}
			} else P && (await P({ ...r.errors }, j)), Kn(), setTimeout(Kn);
			if (
				(f.state.next({
					isSubmitted: !0,
					isSubmitting: !1,
					isSubmitSuccessful: Fn(r.errors) && !V,
					submitCount: r.submitCount + 1,
					errors: r.errors,
				}),
				V)
			)
				throw V;
		},
		me = (S, P = {}) => {
			X(i, S) &&
				(Ze(P.defaultValue)
					? A(S, zn(X(s, S)))
					: (A(S, P.defaultValue), Ae(s, S, zn(P.defaultValue))),
				P.keepTouched || Pt(r.touchedFields, S),
				P.keepDirty ||
					(Pt(r.dirtyFields, S),
					(r.isDirty = P.defaultValue ? I(S, zn(X(s, S))) : I())),
				P.keepError || (Pt(r.errors, S), d.isValid && _()),
				f.state.next({ ...r }));
		},
		Me = (S, P = {}) => {
			const j = S ? zn(S) : s,
				V = zn(j),
				F = S && !Fn(S) ? V : s;
			if ((P.keepDefaultValues || (s = j), !P.keepValues)) {
				if (P.keepDirtyValues)
					for (const z of u.mount)
						X(r.dirtyFields, z) ? Ae(F, z, X(o, z)) : A(z, X(F, z));
				else {
					if (Vh && Ze(S))
						for (const z of u.mount) {
							const B = X(i, z);
							if (B && B._f) {
								const fe = Array.isArray(B._f.refs) ? B._f.refs[0] : B._f.ref;
								if (La(fe)) {
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
				(o = t.shouldUnregister ? (P.keepDefaultValues ? zn(s) : {}) : zn(F)),
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
							? ku(s, o)
							: r.dirtyFields
						: P.keepDefaultValues && S
							? ku(s, S)
							: {},
					touchedFields: P.keepTouched ? r.touchedFields : {},
					errors: P.keepErrors ? r.errors : {},
					isSubmitSuccessful: P.keepIsSubmitSuccessful
						? r.isSubmitSuccessful
						: !1,
					isSubmitting: !1,
				});
		},
		Tt = (S, P) => Me(hi(S) ? S(o) : S, P);
	return {
		control: {
			register: nt,
			unregister: ye,
			getFieldState: ot,
			handleSubmit: on,
			setError: Oe,
			_executeSchema: M,
			_getWatch: Y,
			_getDirty: I,
			_updateValid: _,
			_removeUnmounted: D,
			_updateFieldArray: y,
			_updateDisabledField: mt,
			_getFieldArray: K,
			_reset: Me,
			_resetDefaultValues: () =>
				hi(n.defaultValues) &&
				n.defaultValues().then((S) => {
					Tt(S, n.resetOptions), f.state.next({ isLoading: !1 });
				}),
			_updateFormState: (S) => {
				r = { ...r, ...S };
			},
			_disableForm: kt,
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
		register: nt,
		handleSubmit: on,
		watch: Ee,
		setValue: A,
		getValues: oe,
		reset: Tt,
		resetField: me,
		clearErrors: ge,
		unregister: ye,
		setError: Oe,
		setFocus: (S, P = {}) => {
			const j = X(i, S),
				V = j && j._f;
			if (V) {
				const F = V.refs ? V.refs[0] : V.ref;
				F.focus && (F.focus(), P.shouldSelect && F.select());
			}
		},
		getFieldState: ot,
	};
}
function pT(t = {}) {
	const e = ct.useRef(),
		n = ct.useRef(),
		[r, i] = ct.useState({
			isDirty: !1,
			isValidating: !1,
			isLoading: hi(t.defaultValues),
			isSubmitted: !1,
			isSubmitting: !1,
			isSubmitSuccessful: !1,
			isValid: !1,
			submitCount: 0,
			dirtyFields: {},
			touchedFields: {},
			errors: t.errors || {},
			disabled: t.disabled || !1,
			defaultValues: hi(t.defaultValues) ? void 0 : t.defaultValues,
		});
	e.current ||
		(e.current = { ...hT(t, () => i((o) => ({ ...o }))), formState: r });
	const s = e.current.control;
	return (
		(s._options = t),
		tT({
			subject: s._subjects.state,
			next: (o) => {
				eT(o, s._proxyFormState, s._updateFormState, !0) &&
					i({ ...s._formState });
			},
		}),
		ct.useEffect(() => s._disableForm(t.disabled), [s, t.disabled]),
		ct.useEffect(() => {
			if (s._proxyFormState.isDirty) {
				const o = s._getDirty();
				o !== r.isDirty && s._subjects.state.next({ isDirty: o });
			}
		}, [s, r.isDirty]),
		ct.useEffect(() => {
			t.values && !es(t.values, n.current)
				? (s._reset(t.values, s._options.resetOptions),
					(n.current = t.values),
					i((o) => ({ ...o })))
				: s._resetDefaultValues();
		}, [t.values, s]),
		ct.useEffect(() => {
			t.errors && s._setErrors(t.errors);
		}, [t.errors, s]),
		ct.useEffect(() => {
			s._state.mount || (s._updateValid(), (s._state.mount = !0)),
				s._state.watch &&
					((s._state.watch = !1), s._subjects.state.next({ ...s._formState })),
				s._removeUnmounted();
		}),
		ct.useEffect(() => {
			t.shouldUnregister && s._subjects.values.next({ values: s._getWatch() });
		}, [t.shouldUnregister, s]),
		(e.current.formState = J2(r, s)),
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
			} = q2(),
			c = (v, m) =>
				Object.keys(v)
					.filter((_) => _.includes(m))
					.reduce((_, p) => Object.assign(_, { error: v[p] }), {}),
			d = (v) => Object.keys(v).length > 0,
			f = c(a, i),
			h = d(f);
		return g.jsxs('div', {
			style: { position: 'relative' },
			children: [
				g.jsx('label', { htmlFor: t, children: e }),
				o
					? g.jsx('textarea', { placeholder: n, id: t, rows: l, ...u(i, s) })
					: g.jsx('input', { placeholder: n, id: t, type: r, ...u(i, s) }),
				h && g.jsx('p', { className: It.error, children: f.error.message }),
			],
		});
	},
	mT = {
		label: 'お名前',
		placeholder: '例） 令和',
		id: 'familyName',
		type: 'text',
		name: 'familyName',
		validation: { required: { value: !0, message: '必須' } },
	},
	_T = {
		label: '',
		placeholder: '例） 太郎',
		id: 'firstName',
		type: 'text',
		name: 'firstName',
		validation: { required: { value: !0, message: '必須' } },
	},
	gT = {
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
	vT = {
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
	yT = {
		id: 'company',
		label: '会社名 （任意）',
		placeholder: '例） 株式会社 令和',
		type: 'text',
		name: 'company',
	},
	xT = {
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
	wT = {
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
	ST = () => {
		const t = pT(),
			[e, n] = te.useState(!1),
			r = t.handleSubmit((s) => {
				t.reset(), n(!0);
			}),
			i = () => {
				t.reset();
			};
		return g.jsx(Z2, {
			...t,
			children: g.jsxs('form', {
				className: It.from,
				action: '',
				noValidate: !0,
				autoComplete: 'off',
				onSubmit: (s) => s.preventDefault(),
				children: [
					g.jsxs('div', {
						className: It.name,
						children: [g.jsx(bi, { ...mT }), g.jsx(bi, { ..._T })],
					}),
					g.jsxs('div', {
						className: It.name,
						children: [g.jsx(bi, { ...gT }), g.jsx(bi, { ...vT })],
					}),
					g.jsx('div', {
						className: It.company,
						children: g.jsx(bi, { ...yT, className: It.company }),
					}),
					g.jsx('div', { className: It.email, children: g.jsx(bi, { ...xT }) }),
					g.jsx('div', {
						className: It.message,
						children: g.jsx(bi, { ...wT }),
					}),
					e && g.jsx('p', { children: '送信完了' }),
					g.jsxs('div', {
						className: It.buttonContainer,
						children: [
							g.jsx('button', {
								onClick: r,
								className: It.submit,
								children: '送信する',
							}),
							g.jsx('button', {
								onClick: i,
								className: It.cancel,
								children: 'キャンセル',
							}),
						],
					}),
				],
			}),
		});
	};
function kT() {
	return g.jsx(g.Fragment, {
		children: g.jsx('article', {
			className: It.container,
			id: 'contact',
			children: g.jsxs('div', {
				className: It.outer,
				children: [
					g.jsx('div', {
						className: It.titleWrapper,
						children: g.jsx('h2', { className: It.title, children: 'CONTACT' }),
					}),
					g.jsx('div', { className: It.inner, children: g.jsx(ST, {}) }),
				],
			}),
		}),
	});
}
function TT() {
	return g.jsxs('main', {
		children: [
			g.jsx(Hw, {}),
			g.jsx(Pk, {}),
			g.jsx(y2, {}),
			g.jsx(D2, {}),
			g.jsx(kT, {}),
		],
	});
}
function ET() {
	return g.jsx(g.Fragment, {
		children: g.jsx('footer', {
			children: g.jsx('p', { children: 'Malts Graphic' }),
		}),
	});
}
function Vm(t, e) {
	for (var n = 0; n < e.length; n++) {
		var r = e[n];
		(r.enumerable = r.enumerable || !1),
			(r.configurable = !0),
			'value' in r && (r.writable = !0),
			Object.defineProperty(t, r.key, r);
	}
}
function CT(t, e, n) {
	return e && Vm(t.prototype, e), n && Vm(t, n), t;
}
/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var jt,
	Zu,
	Cn,
	pi,
	mi,
	so,
	Vv,
	Xi,
	dl,
	$v,
	br,
	ir,
	Uv,
	Bv = function () {
		return (
			jt ||
			(typeof window < 'u' && (jt = window.gsap) && jt.registerPlugin && jt)
		);
	},
	Wv = 1,
	Gs = [],
	ue = [],
	jr = [],
	hl = Date.now,
	gd = function (e, n) {
		return n;
	},
	PT = function () {
		var e = dl.core,
			n = e.bridge || {},
			r = e._scrollers,
			i = e._proxies;
		r.push.apply(r, ue),
			i.push.apply(i, jr),
			(ue = r),
			(jr = i),
			(gd = function (o, l) {
				return n[o](l);
			});
	},
	Ci = function (e, n) {
		return ~jr.indexOf(e) && jr[jr.indexOf(e) + 1][n];
	},
	pl = function (e) {
		return !!~$v.indexOf(e);
	},
	Yt = function (e, n, r, i, s) {
		return e.addEventListener(n, r, { passive: i !== !1, capture: !!s });
	},
	Ht = function (e, n, r, i) {
		return e.removeEventListener(n, r, !!i);
	},
	Tu = 'scrollLeft',
	Eu = 'scrollTop',
	vd = function () {
		return (br && br.isPressed) || ue.cache++;
	},
	$a = function (e, n) {
		var r = function i(s) {
			if (s || s === 0) {
				Wv && (Cn.history.scrollRestoration = 'manual');
				var o = br && br.isPressed;
				(s = i.v = Math.round(s) || (br && br.iOS ? 1 : 0)),
					e(s),
					(i.cacheID = ue.cache),
					o && gd('ss', s);
			} else
				(n || ue.cache !== i.cacheID || gd('ref')) &&
					((i.cacheID = ue.cache), (i.v = e()));
			return i.v + i.offset;
		};
		return (r.offset = 0), e && r;
	},
	Jt = {
		s: Tu,
		p: 'left',
		p2: 'Left',
		os: 'right',
		os2: 'Right',
		d: 'width',
		d2: 'Width',
		a: 'x',
		sc: $a(function (t) {
			return arguments.length
				? Cn.scrollTo(t, dt.sc())
				: Cn.pageXOffset || pi[Tu] || mi[Tu] || so[Tu] || 0;
		}),
	},
	dt = {
		s: Eu,
		p: 'top',
		p2: 'Top',
		os: 'bottom',
		os2: 'Bottom',
		d: 'height',
		d2: 'Height',
		a: 'y',
		op: Jt,
		sc: $a(function (t) {
			return arguments.length
				? Cn.scrollTo(Jt.sc(), t)
				: Cn.pageYOffset || pi[Eu] || mi[Eu] || so[Eu] || 0;
		}),
	},
	an = function (e, n) {
		return (
			((n && n._ctx && n._ctx.selector) || jt.utils.toArray)(e)[0] ||
			(typeof e == 'string' && jt.config().nullTargetWarn !== !1
				? console.warn('Element not found:', e)
				: null)
		);
	},
	Mi = function (e, n) {
		var r = n.s,
			i = n.sc;
		pl(e) && (e = pi.scrollingElement || mi);
		var s = ue.indexOf(e),
			o = i === dt.sc ? 1 : 2;
		!~s && (s = ue.push(e) - 1), ue[s + o] || Yt(e, 'scroll', vd);
		var l = ue[s + o],
			u =
				l ||
				(ue[s + o] =
					$a(Ci(e, r), !0) ||
					(pl(e)
						? i
						: $a(function (a) {
								return arguments.length ? (e[r] = a) : e[r];
							})));
		return (
			(u.target = e),
			l || (u.smooth = jt.getProperty(e, 'scrollBehavior') === 'smooth'),
			u
		);
	},
	yd = function (e, n, r) {
		var i = e,
			s = e,
			o = hl(),
			l = o,
			u = n || 50,
			a = Math.max(500, u * 3),
			c = function (v, m) {
				var T = hl();
				m || T - o > u
					? ((s = i), (i = v), (l = o), (o = T))
					: r
						? (i += v)
						: (i = s + ((v - s) / (T - l)) * (o - l));
			},
			d = function () {
				(s = i = r ? 0 : i), (l = o = 0);
			},
			f = function (v) {
				var m = l,
					T = s,
					_ = hl();
				return (
					(v || v === 0) && v !== i && c(v),
					o === l || _ - l > a
						? 0
						: ((i + (r ? T : -T)) / ((r ? _ : o) - m)) * 1e3
				);
			};
		return { update: c, reset: d, getVelocity: f };
	},
	$o = function (e, n) {
		return (
			n && !e._gsapAllow && e.preventDefault(),
			e.changedTouches ? e.changedTouches[0] : e
		);
	},
	$m = function (e) {
		var n = Math.max.apply(Math, e),
			r = Math.min.apply(Math, e);
		return Math.abs(n) >= Math.abs(r) ? n : r;
	},
	bv = function () {
		(dl = jt.core.globals().ScrollTrigger), dl && dl.core && PT();
	},
	Hv = function (e) {
		return (
			(jt = e || Bv()),
			!Zu &&
				jt &&
				typeof document < 'u' &&
				document.body &&
				((Cn = window),
				(pi = document),
				(mi = pi.documentElement),
				(so = pi.body),
				($v = [Cn, pi, mi, so]),
				jt.utils.clamp,
				(Uv = jt.core.context || function () {}),
				(Xi = 'onpointerenter' in so ? 'pointer' : 'mouse'),
				(Vv = tt.isTouch =
					Cn.matchMedia &&
					Cn.matchMedia('(hover: none), (pointer: coarse)').matches
						? 1
						: 'ontouchstart' in Cn ||
							  navigator.maxTouchPoints > 0 ||
							  navigator.msMaxTouchPoints > 0
							? 2
							: 0),
				(ir = tt.eventTypes =
					(
						'ontouchstart' in mi
							? 'touchstart,touchmove,touchcancel,touchend'
							: 'onpointerdown' in mi
								? 'pointerdown,pointermove,pointercancel,pointerup'
								: 'mousedown,mousemove,mouseup,mouseup'
					).split(',')),
				setTimeout(function () {
					return (Wv = 0);
				}, 500),
				bv(),
				(Zu = 1)),
			Zu
		);
	};
Jt.op = dt;
ue.cache = 0;
var tt = (function () {
	function t(n) {
		this.init(n);
	}
	var e = t.prototype;
	return (
		(e.init = function (r) {
			Zu || Hv(jt) || console.warn('Please gsap.registerPlugin(Observer)'),
				dl || bv();
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
				v = r.wheelSpeed,
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
				M = r.onChangeX,
				O = r.onChangeY,
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
				ot = r.onDisable,
				ge = r.onClick,
				Oe = r.scrollSpeed,
				Ee = r.capture,
				ye = r.allowClicks,
				mt = r.lockAxis,
				nt = r.onLockAxis;
			(this.target = l = an(l) || mi),
				(this.vars = r),
				h && (h = jt.utils.toArray(h)),
				(i = i || 1e-9),
				(s = s || 0),
				(v = v || 1),
				(Oe = Oe || 1),
				(o = o || 'wheel,touch,pointer'),
				(a = a !== !1),
				u || (u = parseFloat(Cn.getComputedStyle(so).lineHeight) || 22);
			var Kn,
				kt,
				on,
				me,
				Me,
				Tt,
				ln,
				R = this,
				un = 0,
				S = 0,
				P = r.passive || !c,
				j = Mi(l, Jt),
				V = Mi(l, dt),
				F = j(),
				z = V(),
				B =
					~o.indexOf('touch') &&
					!~o.indexOf('pointer') &&
					ir[0] === 'pointerdown',
				fe = pl(l),
				ie = l.ownerDocument || pi,
				Ye = [0, 0, 0],
				lt = [0, 0, 0],
				qn = 0,
				Mr = function () {
					return (qn = hl());
				},
				Re = function (J, ve) {
					return (
						((R.event = J) && h && ~h.indexOf(J.target)) ||
						(ve && B && J.pointerType !== 'touch') ||
						(Q && Q(J, ve))
					);
				},
				Ts = function () {
					R._vx.reset(), R._vy.reset(), kt.pause(), d && d(R);
				},
				Zn = function () {
					var J = (R.deltaX = $m(Ye)),
						ve = (R.deltaY = $m(lt)),
						U = Math.abs(J) >= i,
						re = Math.abs(ve) >= i;
					H && (U || re) && H(R, J, ve, Ye, lt),
						U &&
							(k && R.deltaX > 0 && k(R),
							C && R.deltaX < 0 && C(R),
							M && M(R),
							D && R.deltaX < 0 != un < 0 && D(R),
							(un = R.deltaX),
							(Ye[0] = Ye[1] = Ye[2] = 0)),
						re &&
							(N && R.deltaY > 0 && N(R),
							E && R.deltaY < 0 && E(R),
							O && O(R),
							I && R.deltaY < 0 != S < 0 && I(R),
							(S = R.deltaY),
							(lt[0] = lt[1] = lt[2] = 0)),
						(me || on) && (G && G(R), on && (p(R), (on = !1)), (me = !1)),
						Tt && !(Tt = !1) && nt && nt(R),
						Me && (q(R), (Me = !1)),
						(Kn = 0);
				},
				ei = function (J, ve, U) {
					(Ye[U] += J),
						(lt[U] += ve),
						R._vx.update(J),
						R._vy.update(ve),
						a ? Kn || (Kn = requestAnimationFrame(Zn)) : Zn();
				},
				Rr = function (J, ve) {
					mt &&
						!ln &&
						((R.axis = ln = Math.abs(J) > Math.abs(ve) ? 'x' : 'y'), (Tt = !0)),
						ln !== 'y' && ((Ye[2] += J), R._vx.update(J, !0)),
						ln !== 'x' && ((lt[2] += ve), R._vy.update(ve, !0)),
						a ? Kn || (Kn = requestAnimationFrame(Zn)) : Zn();
				},
				ti = function (J) {
					if (!Re(J, 1)) {
						J = $o(J, c);
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
								(p && (on = !0),
								ee || (R.isDragging = !0),
								Rr(re, Z),
								ee || (T && T(R)));
					}
				},
				Li = (R.onPress = function (ne) {
					Re(ne, 1) ||
						(ne && ne.button) ||
						((R.axis = ln = null),
						kt.pause(),
						(R.isPressed = !0),
						(ne = $o(ne)),
						(un = S = 0),
						(R.startX = R.x = ne.clientX),
						(R.startY = R.y = ne.clientY),
						R._vx.reset(),
						R._vy.reset(),
						Yt(A ? l : ie, ir[1], ti, P, !0),
						(R.deltaX = R.deltaY = 0),
						y && y(R));
				}),
				le = (R.onRelease = function (ne) {
					if (!Re(ne, 1)) {
						Ht(A ? l : ie, ir[1], ti, !0);
						var J = !isNaN(R.y - R.startY),
							ve = R.isDragging,
							U =
								ve &&
								(Math.abs(R.x - R.startX) > 3 || Math.abs(R.y - R.startY) > 3),
							re = $o(ne);
						!U &&
							J &&
							(R._vx.reset(),
							R._vy.reset(),
							c &&
								ye &&
								jt.delayedCall(0.08, function () {
									if (hl() - qn > 300 && !ne.defaultPrevented) {
										if (ne.target.click) ne.target.click();
										else if (ie.createEvent) {
											var Z = ie.createEvent('MouseEvents');
											Z.initMouseEvent(
												'click',
												!0,
												!0,
												Cn,
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
							d && ve && !A && kt.restart(!0),
							_ && ve && _(R),
							x && x(R, U);
					}
				}),
				Fi = function (J) {
					return (
						J.touches &&
						J.touches.length > 1 &&
						(R.isGesturing = !0) &&
						$(J, R.isDragging)
					);
				},
				Jn = function () {
					return (R.isGesturing = !1) || w(R);
				},
				er = function (J) {
					if (!Re(J)) {
						var ve = j(),
							U = V();
						ei((ve - F) * Oe, (U - z) * Oe, 1),
							(F = ve),
							(z = U),
							d && kt.restart(!0);
					}
				},
				tr = function (J) {
					if (!Re(J)) {
						(J = $o(J, c)), q && (Me = !0);
						var ve =
							(J.deltaMode === 1 ? u : J.deltaMode === 2 ? Cn.innerHeight : 1) *
							v;
						ei(J.deltaX * ve, J.deltaY * ve, 0), d && !A && kt.restart(!0);
					}
				},
				Ii = function (J) {
					if (!Re(J)) {
						var ve = J.clientX,
							U = J.clientY,
							re = ve - R.x,
							Z = U - R.y;
						(R.x = ve),
							(R.y = U),
							(me = !0),
							d && kt.restart(!0),
							(re || Z) && Rr(re, Z);
					}
				},
				Es = function (J) {
					(R.event = J), Y(R);
				},
				Dr = function (J) {
					(R.event = J), K(R);
				},
				Co = function (J) {
					return Re(J) || ($o(J, c) && ge(R));
				};
			(kt = R._dc = jt.delayedCall(f || 0.25, Ts).pause()),
				(R.deltaX = R.deltaY = 0),
				(R._vx = yd(0, 50, !0)),
				(R._vy = yd(0, 50, !0)),
				(R.scrollX = j),
				(R.scrollY = V),
				(R.isDragging = R.isGesturing = R.isPressed = !1),
				Uv(this),
				(R.enable = function (ne) {
					return (
						R.isEnabled ||
							(Yt(fe ? ie : l, 'scroll', vd),
							o.indexOf('scroll') >= 0 && Yt(fe ? ie : l, 'scroll', er, P, Ee),
							o.indexOf('wheel') >= 0 && Yt(l, 'wheel', tr, P, Ee),
							((o.indexOf('touch') >= 0 && Vv) || o.indexOf('pointer') >= 0) &&
								(Yt(l, ir[0], Li, P, Ee),
								Yt(ie, ir[2], le),
								Yt(ie, ir[3], le),
								ye && Yt(l, 'click', Mr, !0, !0),
								ge && Yt(l, 'click', Co),
								$ && Yt(ie, 'gesturestart', Fi),
								w && Yt(ie, 'gestureend', Jn),
								Y && Yt(l, Xi + 'enter', Es),
								K && Yt(l, Xi + 'leave', Dr),
								G && Yt(l, Xi + 'move', Ii)),
							(R.isEnabled = !0),
							ne && ne.type && Li(ne),
							oe && oe(R)),
						R
					);
				}),
				(R.disable = function () {
					R.isEnabled &&
						(Gs.filter(function (ne) {
							return ne !== R && pl(ne.target);
						}).length || Ht(fe ? ie : l, 'scroll', vd),
						R.isPressed &&
							(R._vx.reset(), R._vy.reset(), Ht(A ? l : ie, ir[1], ti, !0)),
						Ht(fe ? ie : l, 'scroll', er, Ee),
						Ht(l, 'wheel', tr, Ee),
						Ht(l, ir[0], Li, Ee),
						Ht(ie, ir[2], le),
						Ht(ie, ir[3], le),
						Ht(l, 'click', Mr, !0),
						Ht(l, 'click', Co),
						Ht(ie, 'gesturestart', Fi),
						Ht(ie, 'gestureend', Jn),
						Ht(l, Xi + 'enter', Es),
						Ht(l, Xi + 'leave', Dr),
						Ht(l, Xi + 'move', Ii),
						(R.isEnabled = R.isPressed = R.isDragging = !1),
						ot && ot(R));
				}),
				(R.kill = R.revert =
					function () {
						R.disable();
						var ne = Gs.indexOf(R);
						ne >= 0 && Gs.splice(ne, 1), br === R && (br = 0);
					}),
				Gs.push(R),
				A && pl(l) && (br = R),
				R.enable(m);
		}),
		CT(t, [
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
tt.version = '3.12.5';
tt.create = function (t) {
	return new tt(t);
};
tt.register = Hv;
tt.getAll = function () {
	return Gs.slice();
};
tt.getById = function (t) {
	return Gs.filter(function (e) {
		return e.vars.id === t;
	})[0];
};
Bv() && jt.registerPlugin(tt);
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
	Ve,
	ur,
	Ne,
	Yv,
	Ua,
	Hl,
	ml,
	Xo,
	Cu,
	Ft,
	fc,
	xd,
	Gt,
	Um,
	Bm,
	Ds,
	Qv,
	Jc,
	Xv,
	Qt,
	wd,
	Gv,
	Kv,
	ri,
	Sd,
	Wh,
	oo,
	bh,
	Ba,
	kd,
	ef,
	Pu = 1,
	Vt = Date.now,
	tf = Vt(),
	Yn = 0,
	Go = 0,
	Wm = function (e, n, r) {
		var i = kn(e) && (e.substr(0, 6) === 'clamp(' || e.indexOf('max') > -1);
		return (r['_' + n + 'Clamp'] = i), i ? e.substr(6, e.length - 7) : e;
	},
	bm = function (e, n) {
		return n && (!kn(e) || e.substr(0, 6) !== 'clamp(')
			? 'clamp(' + e + ')'
			: e;
	},
	NT = function t() {
		return Go && requestAnimationFrame(t);
	},
	Hm = function () {
		return (fc = 1);
	},
	Ym = function () {
		return (fc = 0);
	},
	xr = function (e) {
		return e;
	},
	Ko = function (e) {
		return Math.round(e * 1e5) / 1e5 || 0;
	},
	qv = function () {
		return typeof window < 'u';
	},
	Zv = function () {
		return b || (qv() && (b = window.gsap) && b.registerPlugin && b);
	},
	vs = function (e) {
		return !!~Yv.indexOf(e);
	},
	Jv = function (e) {
		return (
			(e === 'Height' ? bh : he['inner' + e]) ||
			ur['client' + e] ||
			Ne['client' + e]
		);
	},
	e1 = function (e) {
		return (
			Ci(e, 'getBoundingClientRect') ||
			(vs(e)
				? function () {
						return (ra.width = he.innerWidth), (ra.height = bh), ra;
					}
				: function () {
						return Ur(e);
					})
		);
	},
	jT = function (e, n, r) {
		var i = r.d,
			s = r.d2,
			o = r.a;
		return (o = Ci(e, 'getBoundingClientRect'))
			? function () {
					return o()[i];
				}
			: function () {
					return (n ? Jv(s) : e['client' + s]) || 0;
				};
	},
	OT = function (e, n) {
		return !n || ~jr.indexOf(e)
			? e1(e)
			: function () {
					return ra;
				};
	},
	Er = function (e, n) {
		var r = n.s,
			i = n.d2,
			s = n.d,
			o = n.a;
		return Math.max(
			0,
			(r = 'scroll' + i) && (o = Ci(e, r))
				? o() - e1(e)()[s]
				: vs(e)
					? (ur[r] || Ne[r]) - Jv(i)
					: e[r] - e['offset' + i],
		);
	},
	Nu = function (e, n) {
		for (var r = 0; r < Ds.length; r += 3)
			(!n || ~n.indexOf(Ds[r + 1])) && e(Ds[r], Ds[r + 1], Ds[r + 2]);
	},
	kn = function (e) {
		return typeof e == 'string';
	},
	en = function (e) {
		return typeof e == 'function';
	},
	qo = function (e) {
		return typeof e == 'number';
	},
	Gi = function (e) {
		return typeof e == 'object';
	},
	Uo = function (e, n, r) {
		return e && e.progress(n ? 0 : 1) && r && e.pause();
	},
	nf = function (e, n) {
		if (e.enabled) {
			var r = e._ctx
				? e._ctx.add(function () {
						return n(e);
					})
				: n(e);
			r && r.totalTime && (e.callbackAnimation = r);
		}
	},
	Os = Math.abs,
	t1 = 'left',
	n1 = 'top',
	Hh = 'right',
	Yh = 'bottom',
	us = 'width',
	as = 'height',
	_l = 'Right',
	gl = 'Left',
	vl = 'Top',
	yl = 'Bottom',
	rt = 'padding',
	$n = 'margin',
	So = 'Width',
	Qh = 'Height',
	at = 'px',
	Un = function (e) {
		return he.getComputedStyle(e);
	},
	MT = function (e) {
		var n = Un(e).position;
		e.style.position = n === 'absolute' || n === 'fixed' ? n : 'relative';
	},
	Qm = function (e, n) {
		for (var r in n) r in e || (e[r] = n[r]);
		return e;
	},
	Ur = function (e, n) {
		var r =
				n &&
				Un(e)[xd] !== 'matrix(1, 0, 0, 1, 0, 0)' &&
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
	Wa = function (e, n) {
		var r = n.d2;
		return e['offset' + r] || e['client' + r] || 0;
	},
	r1 = function (e) {
		var n = [],
			r = e.labels,
			i = e.duration(),
			s;
		for (s in r) n.push(r[s] / i);
		return n;
	},
	RT = function (e) {
		return function (n) {
			return b.utils.snap(r1(e), n);
		};
	},
	Xh = function (e) {
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
	DT = function (e) {
		return function (n, r) {
			return Xh(r1(e))(n, r.direction);
		};
	},
	ju = function (e, n, r, i) {
		return r.split(',').forEach(function (s) {
			return e(n, s, i);
		});
	},
	vt = function (e, n, r, i, s) {
		return e.addEventListener(n, r, { passive: !i, capture: !!s });
	},
	gt = function (e, n, r, i) {
		return e.removeEventListener(n, r, !!i);
	},
	Ou = function (e, n, r) {
		(r = r && r.wheelHandler), r && (e(n, 'wheel', r), e(n, 'touchmove', r));
	},
	Xm = {
		startColor: 'green',
		endColor: 'red',
		indent: 0,
		fontSize: '16px',
		fontWeight: 'normal',
	},
	Mu = { toggleActions: 'play', anticipatePin: 0 },
	ba = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
	Ju = function (e, n) {
		if (kn(e)) {
			var r = e.indexOf('='),
				i = ~r ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
			~r && (e.indexOf('%') > r && (i *= n / 100), (e = e.substr(0, r - 1))),
				(e =
					i +
					(e in ba
						? ba[e] * n
						: ~e.indexOf('%')
							? (parseFloat(e) * n) / 100
							: parseFloat(e) || 0));
		}
		return e;
	},
	Ru = function (e, n, r, i, s, o, l, u) {
		var a = s.startColor,
			c = s.endColor,
			d = s.fontSize,
			f = s.indent,
			h = s.fontWeight,
			v = Ve.createElement('div'),
			m = vs(r) || Ci(r, 'pinType') === 'fixed',
			T = e.indexOf('scroller') !== -1,
			_ = m ? Ne : r,
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
				(x += (i === dt ? Hh : Yh) + ':' + (o + parseFloat(f)) + 'px;'),
			l &&
				(x +=
					'box-sizing:border-box;text-align:left;width:' +
					l.offsetWidth +
					'px;'),
			(v._isStart = p),
			v.setAttribute('class', 'gsap-marker-' + e + (n ? ' marker-' + n : '')),
			(v.style.cssText = x),
			(v.innerText = n || n === 0 ? e + '-' + n : e),
			_.children[0] ? _.insertBefore(v, _.children[0]) : _.appendChild(v),
			(v._offset = v['offset' + i.op.d2]),
			ea(v, 0, i, p),
			v
		);
	},
	ea = function (e, n, r, i) {
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
	Td = {},
	Yl,
	Gm = function () {
		return Vt() - Yn > 34 && (Yl || (Yl = requestAnimationFrame(Yr)));
	},
	Ms = function () {
		(!Qt || !Qt.isPressed || Qt.startX > Ne.clientWidth) &&
			(ue.cache++,
			Qt ? Yl || (Yl = requestAnimationFrame(Yr)) : Yr(),
			Yn || xs('scrollStart'),
			(Yn = Vt()));
	},
	rf = function () {
		(Kv = he.innerWidth), (Gv = he.innerHeight);
	},
	Zo = function () {
		ue.cache++,
			!Ft &&
				!Xv &&
				!Ve.fullscreenElement &&
				!Ve.webkitFullscreenElement &&
				(!wd ||
					Kv !== he.innerWidth ||
					Math.abs(he.innerHeight - Gv) > he.innerHeight * 0.25) &&
				Ua.restart(!0);
	},
	ys = {},
	AT = [],
	i1 = function t() {
		return gt(ae, 'scrollEnd', t) || ts(!0);
	},
	xs = function (e) {
		return (
			(ys[e] &&
				ys[e].map(function (n) {
					return n();
				})) ||
			AT
		);
	},
	wn = [],
	s1 = function (e) {
		for (var n = 0; n < wn.length; n += 5)
			(!e || (wn[n + 4] && wn[n + 4].query === e)) &&
				((wn[n].style.cssText = wn[n + 1]),
				wn[n].getBBox && wn[n].setAttribute('transform', wn[n + 2] || ''),
				(wn[n + 3].uncache = 1));
	},
	Gh = function (e, n) {
		var r;
		for (Gt = 0; Gt < se.length; Gt++)
			(r = se[Gt]),
				r && (!n || r._ctx === n) && (e ? r.kill(1) : r.revert(!0, !0));
		(Ba = !0), n && s1(n), n || xs('revert');
	},
	o1 = function (e, n) {
		ue.cache++,
			(n || !Kt) &&
				ue.forEach(function (r) {
					return en(r) && r.cacheID++ && (r.rec = 0);
				}),
			kn(e) && (he.history.scrollRestoration = Wh = e);
	},
	Kt,
	cs = 0,
	Km,
	zT = function () {
		if (Km !== cs) {
			var e = (Km = cs);
			requestAnimationFrame(function () {
				return e === cs && ts(!0);
			});
		}
	},
	l1 = function () {
		Ne.appendChild(oo),
			(bh = (!Qt && oo.offsetHeight) || he.innerHeight),
			Ne.removeChild(oo);
	},
	qm = function (e) {
		return Hl(
			'.gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end',
		).forEach(function (n) {
			return (n.style.display = e ? 'none' : 'block');
		});
	},
	ts = function (e, n) {
		if (Yn && !e && !Ba) {
			vt(ae, 'scrollEnd', i1);
			return;
		}
		l1(),
			(Kt = ae.isRefreshing = !0),
			ue.forEach(function (i) {
				return en(i) && ++i.cacheID && (i.rec = i());
			});
		var r = xs('refreshInit');
		Qv && ae.sort(),
			n || Gh(),
			ue.forEach(function (i) {
				en(i) && (i.smooth && (i.target.style.scrollBehavior = 'auto'), i(0));
			}),
			se.slice(0).forEach(function (i) {
				return i.refresh();
			}),
			(Ba = !1),
			se.forEach(function (i) {
				if (i._subPinOffset && i.pin) {
					var s = i.vars.horizontal ? 'offsetWidth' : 'offsetHeight',
						o = i.pin[s];
					i.revert(!0, 1), i.adjustPinSpacing(i.pin[s] - o), i.refresh();
				}
			}),
			(kd = 1),
			qm(!0),
			se.forEach(function (i) {
				var s = Er(i.scroller, i._dir),
					o = i.vars.end === 'max' || (i._endClamp && i.end > s),
					l = i._startClamp && i.start >= s;
				(o || l) &&
					i.setPositions(
						l ? s - 1 : i.start,
						o ? Math.max(l ? s : i.start + 1, s) : i.end,
						!0,
					);
			}),
			qm(!1),
			(kd = 0),
			r.forEach(function (i) {
				return i && i.render && i.render(-1);
			}),
			ue.forEach(function (i) {
				en(i) &&
					(i.smooth &&
						requestAnimationFrame(function () {
							return (i.target.style.scrollBehavior = 'smooth');
						}),
					i.rec && i(i.rec));
			}),
			o1(Wh, 1),
			Ua.pause(),
			cs++,
			(Kt = 2),
			Yr(2),
			se.forEach(function (i) {
				return en(i.vars.onRefresh) && i.vars.onRefresh(i);
			}),
			(Kt = ae.isRefreshing = !1),
			xs('refresh');
	},
	Ed = 0,
	ta = 1,
	xl,
	Yr = function (e) {
		if (e === 2 || (!Kt && !Ba)) {
			(ae.isUpdating = !0), xl && xl.update(0);
			var n = se.length,
				r = Vt(),
				i = r - tf >= 50,
				s = n && se[0].scroll();
			if (
				((ta = Ed > s ? -1 : 1),
				Kt || (Ed = s),
				i &&
					(Yn && !fc && r - Yn > 200 && ((Yn = 0), xs('scrollEnd')),
					(Xo = tf),
					(tf = r)),
				ta < 0)
			) {
				for (Gt = n; Gt-- > 0; ) se[Gt] && se[Gt].update(0, i);
				ta = 1;
			} else for (Gt = 0; Gt < n; Gt++) se[Gt] && se[Gt].update(0, i);
			ae.isUpdating = !1;
		}
		Yl = 0;
	},
	Cd = [
		t1,
		n1,
		Yh,
		Hh,
		$n + yl,
		$n + _l,
		$n + vl,
		$n + gl,
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
	na = Cd.concat([
		us,
		as,
		'boxSizing',
		'max' + So,
		'max' + Qh,
		'position',
		$n,
		rt,
		rt + vl,
		rt + _l,
		rt + yl,
		rt + gl,
	]),
	LT = function (e, n, r) {
		lo(r);
		var i = e._gsap;
		if (i.spacerIsNative) lo(i.spacerState);
		else if (e._gsap.swappedIn) {
			var s = n.parentNode;
			s && (s.insertBefore(e, n), s.removeChild(n));
		}
		e._gsap.swappedIn = !1;
	},
	sf = function (e, n, r, i) {
		if (!e._gsap.swappedIn) {
			for (var s = Cd.length, o = n.style, l = e.style, u; s--; )
				(u = Cd[s]), (o[u] = r[u]);
			(o.position = r.position === 'absolute' ? 'absolute' : 'relative'),
				r.display === 'inline' && (o.display = 'inline-block'),
				(l[Yh] = l[Hh] = 'auto'),
				(o.flexBasis = r.flexBasis || 'auto'),
				(o.overflow = 'visible'),
				(o.boxSizing = 'border-box'),
				(o[us] = Wa(e, Jt) + at),
				(o[as] = Wa(e, dt) + at),
				(o[rt] = l[$n] = l[n1] = l[t1] = '0'),
				lo(i),
				(l[us] = l['max' + So] = r[us]),
				(l[as] = l['max' + Qh] = r[as]),
				(l[rt] = r[rt]),
				e.parentNode !== n &&
					(e.parentNode.insertBefore(n, e), n.appendChild(e)),
				(e._gsap.swappedIn = !0);
		}
	},
	FT = /([A-Z])/g,
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
						: n[s] && n.removeProperty(s.replace(FT, '-$1').toLowerCase());
		}
	},
	Du = function (e) {
		for (var n = na.length, r = e.style, i = [], s = 0; s < n; s++)
			i.push(na[s], r[na[s]]);
		return (i.t = e), i;
	},
	IT = function (e, n, r) {
		for (var i = [], s = e.length, o = r ? 8 : 0, l; o < s; o += 2)
			(l = e[o]), i.push(l, l in n ? n[l] : e[o + 1]);
		return (i.t = e.t), i;
	},
	ra = { left: 0, top: 0 },
	Zm = function (e, n, r, i, s, o, l, u, a, c, d, f, h, v) {
		en(e) && (e = e(u)),
			kn(e) &&
				e.substr(0, 3) === 'max' &&
				(e = f + (e.charAt(4) === '=' ? Ju('0' + e.substr(3), r) : 0));
		var m = h ? h.time() : 0,
			T,
			_,
			p;
		if ((h && h.seek(0), isNaN(e) || (e = +e), qo(e)))
			h &&
				(e = b.utils.mapRange(
					h.scrollTrigger.start,
					h.scrollTrigger.end,
					0,
					f,
					e,
				)),
				l && ea(l, r, i, !0);
		else {
			en(n) && (n = n(u));
			var y = (e || '0').split(' '),
				x,
				k,
				C,
				E;
			(p = an(n, u) || Ne),
				(x = Ur(p) || {}),
				(!x || (!x.left && !x.top)) &&
					Un(p).display === 'none' &&
					((E = p.style.display),
					(p.style.display = 'block'),
					(x = Ur(p)),
					E ? (p.style.display = E) : p.style.removeProperty('display')),
				(k = Ju(y[0], x[i.d])),
				(C = Ju(y[1] || '0', r)),
				(e = x[i.p] - a[i.p] - c + k + s - C),
				l && ea(l, C, i, r - C < 20 || (l._isStart && C > 20)),
				(r -= r - C);
		}
		if ((v && ((u[v] = e || -0.001), e < 0 && (e = 0)), o)) {
			var N = e + r,
				M = o._isStart;
			(T = 'scroll' + i.d2),
				ea(
					o,
					N,
					i,
					(M && N > 20) ||
						(!M && (d ? Math.max(Ne[T], ur[T]) : o.parentNode[T]) <= N + 1),
				),
				d &&
					((a = Ur(l)),
					d && (o.style[i.op.p] = a[i.op.p] - i.op.m - o._offset + at));
		}
		return (
			h &&
				p &&
				((T = Ur(p)),
				h.seek(f),
				(_ = Ur(p)),
				(h._caScrollDist = T[i.p] - _[i.p]),
				(e = (e / h._caScrollDist) * f)),
			h && h.seek(m),
			h ? e : Math.round(e)
		);
	},
	VT = /(webkit|moz|length|cssText|inset)/i,
	Jm = function (e, n, r, i) {
		if (e.parentNode !== n) {
			var s = e.style,
				o,
				l;
			if (n === Ne) {
				(e._stOrig = s.cssText), (l = Un(e));
				for (o in l)
					!+o &&
						!VT.test(o) &&
						l[o] &&
						typeof s[o] == 'string' &&
						o !== '0' &&
						(s[o] = l[o]);
				(s.top = r), (s.left = i);
			} else s.cssText = e._stOrig;
			(b.core.getCache(e).uncache = 1), n.appendChild(e);
		}
	},
	u1 = function (e, n, r) {
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
	Au = function (e, n, r) {
		var i = {};
		(i[n.p] = '+=' + r), b.set(e, i);
	},
	e0 = function (e, n) {
		var r = Mi(e, n),
			i = '_scroll' + n.p2,
			s = function o(l, u, a, c, d) {
				var f = o.tween,
					h = u.onComplete,
					v = {};
				a = a || r();
				var m = u1(r, a, function () {
					f.kill(), (o.tween = 0);
				});
				return (
					(d = (c && d) || 0),
					(c = c || l - a),
					f && f.kill(),
					(u[i] = l),
					(u.inherit = !1),
					(u.modifiers = v),
					(v[i] = function () {
						return m(a + c * f.ratio + d * f.ratio * f.ratio);
					}),
					(u.onUpdate = function () {
						ue.cache++, o.tween && Yr();
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
			vt(e, 'wheel', r.wheelHandler),
			ae.isTouch && vt(e, 'touchmove', r.wheelHandler),
			s
		);
	},
	ae = (function () {
		function t(n, r) {
			Rs ||
				t.register(b) ||
				console.warn('Please gsap.registerPlugin(ScrollTrigger)'),
				Sd(this),
				this.init(n, r);
		}
		var e = t.prototype;
		return (
			(e.init = function (r, i) {
				if (
					((this.progress = this.start = 0),
					this.vars && this.kill(!0, !0),
					!Go)
				) {
					this.update = this.refresh = this.kill = xr;
					return;
				}
				r = Qm(kn(r) || qo(r) || r.nodeType ? { trigger: r } : r, Mu);
				var s = r,
					o = s.onUpdate,
					l = s.toggleClass,
					u = s.id,
					a = s.onToggle,
					c = s.onRefresh,
					d = s.scrub,
					f = s.trigger,
					h = s.pin,
					v = s.pinSpacing,
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
					M = s.preventOverlaps,
					O =
						r.horizontal || (r.containerAnimation && r.horizontal !== !1)
							? Jt
							: dt,
					H = !d && d !== 0,
					D = an(r.scroller || he),
					I = b.core.getCache(D),
					Y = vs(D),
					K =
						('pinType' in r
							? r.pinType
							: Ci(D, 'pinType') || (Y && 'fixed')) === 'fixed',
					G = [r.onEnter, r.onLeave, r.onEnterBack, r.onLeaveBack],
					Q = H && r.toggleActions.split(' '),
					A = 'markers' in r ? r.markers : Mu.markers,
					$ = Y ? 0 : parseFloat(Un(D)['border' + O.p2 + So]) || 0,
					w = this,
					q =
						r.onRefreshInit &&
						function () {
							return r.onRefreshInit(w);
						},
					oe = jT(D, Y, O),
					ot = OT(D, Y),
					ge = 0,
					Oe = 0,
					Ee = 0,
					ye = Mi(D, O),
					mt,
					nt,
					Kn,
					kt,
					on,
					me,
					Me,
					Tt,
					ln,
					R,
					un,
					S,
					P,
					j,
					V,
					F,
					z,
					B,
					fe,
					ie,
					Ye,
					lt,
					qn,
					Mr,
					Re,
					Ts,
					Zn,
					ei,
					Rr,
					ti,
					Li,
					le,
					Fi,
					Jn,
					er,
					tr,
					Ii,
					Es,
					Dr;
				if (
					((w._startClamp = w._endClamp = !1),
					(w._dir = O),
					(T *= 45),
					(w.scroller = D),
					(w.scroll = E ? E.time.bind(E) : ye),
					(kt = ye()),
					(w.vars = r),
					(i = i || r.animation),
					'refreshPriority' in r &&
						((Qv = 1), r.refreshPriority === -9999 && (xl = w)),
					(I.tweenScroll = I.tweenScroll || {
						top: e0(D, dt),
						left: e0(D, Jt),
					}),
					(w.tweenTo = mt = I.tweenScroll[O.p]),
					(w.scrubDuration = function (U) {
						(Fi = qo(U) && U),
							Fi
								? le
									? le.duration(U)
									: (le = b.to(i, {
											ease: 'expo',
											totalProgress: '+=0',
											inherit: !1,
											duration: Fi,
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
						(ti = 0),
						u || (u = i.vars.id)),
					x &&
						((!Gi(x) || x.push) && (x = { snapTo: x }),
						'scrollBehavior' in Ne.style &&
							b.set(Y ? [Ne, ur] : D, { scrollBehavior: 'auto' }),
						ue.forEach(function (U) {
							return (
								en(U) &&
								U.target === (Y ? Ve.scrollingElement || ur : D) &&
								(U.smooth = !1)
							);
						}),
						(Kn = en(x.snapTo)
							? x.snapTo
							: x.snapTo === 'labels'
								? RT(i)
								: x.snapTo === 'labelsDirectional'
									? DT(i)
									: x.directional !== !1
										? function (U, re) {
												return Xh(x.snapTo)(
													U,
													Vt() - Oe < 500 ? 0 : re.direction,
												);
											}
										: b.utils.snap(x.snapTo)),
						(Jn = x.duration || { min: 0.1, max: 2 }),
						(Jn = Gi(Jn) ? ml(Jn.min, Jn.max) : ml(Jn, Jn)),
						(er = b
							.delayedCall(x.delay || Fi / 2 || 0.1, function () {
								var U = ye(),
									re = Vt() - Oe < 500,
									Z = mt.tween;
								if (
									(re || Math.abs(w.getVelocity()) < 10) &&
									!Z &&
									!fc &&
									ge !== U
								) {
									var ee = (U - me) / j,
										_t = i && !H ? i.totalProgress() : ee,
										de = re ? 0 : ((_t - Li) / (Vt() - Xo)) * 1e3 || 0,
										Ke = b.utils.clamp(-ee, 1 - ee, (Os(de / 2) * de) / 0.185),
										Rt = ee + (x.inertia === !1 ? 0 : Ke),
										Qe,
										De,
										we = x,
										nr = we.onStart,
										Fe = we.onInterrupt,
										xn = we.onComplete;
									if (
										((Qe = Kn(Rt, w)),
										qo(Qe) || (Qe = Rt),
										(De = Math.round(me + Qe * j)),
										U <= Me && U >= me && De !== U)
									) {
										if (Z && !Z._initted && Z.data <= Os(De - U)) return;
										x.inertia === !1 && (Ke = Qe - ee),
											mt(
												De,
												{
													duration: Jn(
														Os(
															(Math.max(Os(Rt - _t), Os(Qe - _t)) * 0.185) /
																de /
																0.05 || 0,
														),
													),
													ease: x.ease || 'power3',
													data: Os(De - U),
													onInterrupt: function () {
														return er.restart(!0) && Fe && Fe(w);
													},
													onComplete: function () {
														w.update(),
															(ge = ye()),
															i &&
																(le
																	? le.resetTo(
																			'totalProgress',
																			Qe,
																			i._tTime / i._tDur,
																		)
																	: i.progress(Qe)),
															(ti = Li =
																i && !H ? i.totalProgress() : w.progress),
															p && p(w),
															xn && xn(w);
													},
												},
												U,
												Ke * j,
												De - U - Ke * j,
											),
											nr && nr(w, mt.tween);
									}
								} else w.isActive && ge !== U && er.restart(!0);
							})
							.pause())),
					u && (Td[u] = w),
					(f = w.trigger = an(f || (h !== !0 && h))),
					(Dr = f && f._gsap && f._gsap.stRevert),
					Dr && (Dr = Dr(w)),
					(h = h === !0 ? f : an(h)),
					kn(l) && (l = { targets: f, className: l }),
					h &&
						(v === !1 ||
							v === $n ||
							(v =
								!v &&
								h.parentNode &&
								h.parentNode.style &&
								Un(h.parentNode).display === 'flex'
									? !1
									: rt),
						(w.pin = h),
						(nt = b.core.getCache(h)),
						nt.spacer
							? (V = nt.pinState)
							: (C &&
									((C = an(C)),
									C && !C.nodeType && (C = C.current || C.nativeElement),
									(nt.spacerIsNative = !!C),
									C && (nt.spacerState = Du(C))),
								(nt.spacer = B = C || Ve.createElement('div')),
								B.classList.add('pin-spacer'),
								u && B.classList.add('pin-spacer-' + u),
								(nt.pinState = V = Du(h))),
						r.force3D !== !1 && b.set(h, { force3D: !0 }),
						(w.spacer = B = nt.spacer),
						(Rr = Un(h)),
						(Mr = Rr[v + O.os2]),
						(ie = b.getProperty(h)),
						(Ye = b.quickSetter(h, O.a, at)),
						sf(h, B, Rr),
						(z = Du(h))),
					A)
				) {
					(S = Gi(A) ? Qm(A, Xm) : Xm),
						(R = Ru('scroller-start', u, D, O, S, 0)),
						(un = Ru('scroller-end', u, D, O, S, 0, R)),
						(fe = R['offset' + O.op.d2]);
					var Co = an(Ci(D, 'content') || D);
					(Tt = this.markerStart = Ru('start', u, Co, O, S, fe, 0, E)),
						(ln = this.markerEnd = Ru('end', u, Co, O, S, fe, 0, E)),
						E && (Es = b.quickSetter([Tt, ln], O.a, at)),
						!K &&
							!(jr.length && Ci(D, 'fixedMarkers') === !0) &&
							(MT(Y ? Ne : D),
							b.set([R, un], { force3D: !0 }),
							(Ts = b.quickSetter(R, O.a, at)),
							(ei = b.quickSetter(un, O.a, at)));
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
							ee = Ft;
						Z !== w.isReverted &&
							(Z &&
								((tr = Math.max(ye(), w.scroll.rec || 0)),
								(Ee = w.progress),
								(Ii = i && i.progress())),
							Tt &&
								[Tt, ln, R, un].forEach(function (_t) {
									return (_t.style.display = Z ? 'none' : 'block');
								}),
							Z && ((Ft = w), w.update(Z)),
							h &&
								(!k || !w.isActive) &&
								(Z ? LT(h, B, V) : sf(h, B, Un(h), Re)),
							Z || w.update(Z),
							(Ft = ee),
							(w.isReverted = Z));
					}),
					(w.refresh = function (U, re, Z, ee) {
						if (!((Ft || !w.enabled) && !re)) {
							if (h && U && Yn) {
								vt(t, 'scrollEnd', i1);
								return;
							}
							!Kt && q && q(w),
								(Ft = w),
								mt.tween && !Z && (mt.tween.kill(), (mt.tween = 0)),
								le && le.pause(),
								m && i && i.revert({ kill: !1 }).invalidate(),
								w.isReverted || w.revert(!0, !0),
								(w._subPinOffset = !1);
							var _t = oe(),
								de = ot(),
								Ke = E ? E.duration() : Er(D, O),
								Rt = j <= 0.01,
								Qe = 0,
								De = ee || 0,
								we = Gi(Z) ? Z.end : r.end,
								nr = r.endTrigger || f,
								Fe = Gi(Z)
									? Z.start
									: r.start || (r.start === 0 || !f ? 0 : h ? '0 0' : '0 100%'),
								xn = (w.pinnedContainer =
									r.pinnedContainer && an(r.pinnedContainer, w)),
								hr = (f && Math.max(0, se.indexOf(w))) || 0,
								Et = hr,
								Ct,
								Dt,
								Vi,
								nu,
								At,
								ut,
								pr,
								dc,
								Kh,
								Po,
								mr,
								No,
								ru;
							for (
								A &&
								Gi(Z) &&
								((No = b.getProperty(R, O.p)), (ru = b.getProperty(un, O.p)));
								Et--;

							)
								(ut = se[Et]),
									ut.end || ut.refresh(0, 1) || (Ft = w),
									(pr = ut.pin),
									pr &&
										(pr === f || pr === h || pr === xn) &&
										!ut.isReverted &&
										(Po || (Po = []), Po.unshift(ut), ut.revert(!0, !0)),
									ut !== se[Et] && (hr--, Et--);
							for (
								en(Fe) && (Fe = Fe(w)),
									Fe = Wm(Fe, 'start', w),
									me =
										Zm(
											Fe,
											f,
											_t,
											O,
											ye(),
											Tt,
											R,
											w,
											de,
											$,
											K,
											Ke,
											E,
											w._startClamp && '_startClamp',
										) || (h ? -0.001 : 0),
									en(we) && (we = we(w)),
									kn(we) &&
										!we.indexOf('+=') &&
										(~we.indexOf(' ')
											? (we = (kn(Fe) ? Fe.split(' ')[0] : '') + we)
											: ((Qe = Ju(we.substr(2), _t)),
												(we = kn(Fe)
													? Fe
													: (E
															? b.utils.mapRange(
																	0,
																	E.duration(),
																	E.scrollTrigger.start,
																	E.scrollTrigger.end,
																	me,
																)
															: me) + Qe),
												(nr = f))),
									we = Wm(we, 'end', w),
									Me =
										Math.max(
											me,
											Zm(
												we || (nr ? '100% 0' : Ke),
												nr,
												_t,
												O,
												ye() + Qe,
												ln,
												un,
												w,
												de,
												$,
												K,
												Ke,
												E,
												w._endClamp && '_endClamp',
											),
										) || -0.001,
									Qe = 0,
									Et = hr;
								Et--;

							)
								(ut = se[Et]),
									(pr = ut.pin),
									pr &&
										ut.start - ut._pinPush <= me &&
										!E &&
										ut.end > 0 &&
										((Ct =
											ut.end -
											(w._startClamp ? Math.max(0, ut.start) : ut.start)),
										((pr === f && ut.start - ut._pinPush < me) || pr === xn) &&
											isNaN(Fe) &&
											(Qe += Ct * (1 - ut.progress)),
										pr === h && (De += Ct));
							if (
								((me += Qe),
								(Me += Qe),
								w._startClamp && (w._startClamp += Qe),
								w._endClamp &&
									!Kt &&
									((w._endClamp = Me || -0.001), (Me = Math.min(Me, Er(D, O)))),
								(j = Me - me || ((me -= 0.01) && 0.001)),
								Rt && (Ee = b.utils.clamp(0, 1, b.utils.normalize(me, Me, tr))),
								(w._pinPush = De),
								Tt &&
									Qe &&
									((Ct = {}),
									(Ct[O.a] = '+=' + Qe),
									xn && (Ct[O.p] = '-=' + ye()),
									b.set([Tt, ln], Ct)),
								h && !(kd && w.end >= Er(D, O)))
							)
								(Ct = Un(h)),
									(nu = O === dt),
									(Vi = ye()),
									(lt = parseFloat(ie(O.a)) + De),
									!Ke &&
										Me > 1 &&
										((mr = (Y ? Ve.scrollingElement || ur : D).style),
										(mr = {
											style: mr,
											value: mr['overflow' + O.a.toUpperCase()],
										}),
										Y &&
											Un(Ne)['overflow' + O.a.toUpperCase()] !== 'scroll' &&
											(mr.style['overflow' + O.a.toUpperCase()] = 'scroll')),
									sf(h, B, Ct),
									(z = Du(h)),
									(Dt = Ur(h, !0)),
									(dc = K && Mi(D, nu ? Jt : dt)()),
									v
										? ((Re = [v + O.os2, j + De + at]),
											(Re.t = B),
											(Et = v === rt ? Wa(h, O) + j + De : 0),
											Et &&
												(Re.push(O.d, Et + at),
												B.style.flexBasis !== 'auto' &&
													(B.style.flexBasis = Et + at)),
											lo(Re),
											xn &&
												se.forEach(function (jo) {
													jo.pin === xn &&
														jo.vars.pinSpacing !== !1 &&
														(jo._subPinOffset = !0);
												}),
											K && ye(tr))
										: ((Et = Wa(h, O)),
											Et &&
												B.style.flexBasis !== 'auto' &&
												(B.style.flexBasis = Et + at)),
									K &&
										((At = {
											top: Dt.top + (nu ? Vi - me : dc) + at,
											left: Dt.left + (nu ? dc : Vi - me) + at,
											boxSizing: 'border-box',
											position: 'fixed',
										}),
										(At[us] = At['max' + So] = Math.ceil(Dt.width) + at),
										(At[as] = At['max' + Qh] = Math.ceil(Dt.height) + at),
										(At[$n] =
											At[$n + vl] =
											At[$n + _l] =
											At[$n + yl] =
											At[$n + gl] =
												'0'),
										(At[rt] = Ct[rt]),
										(At[rt + vl] = Ct[rt + vl]),
										(At[rt + _l] = Ct[rt + _l]),
										(At[rt + yl] = Ct[rt + yl]),
										(At[rt + gl] = Ct[rt + gl]),
										(F = IT(V, At, k)),
										Kt && ye(0)),
									i
										? ((Kh = i._initted),
											Jc(1),
											i.render(i.duration(), !0, !0),
											(qn = ie(O.a) - lt + j + De),
											(Zn = Math.abs(j - qn) > 1),
											K && Zn && F.splice(F.length - 2, 2),
											i.render(0, !0, !0),
											Kh || i.invalidate(!0),
											i.parent || i.totalTime(i.totalTime()),
											Jc(0))
										: (qn = j),
									mr &&
										(mr.value
											? (mr.style['overflow' + O.a.toUpperCase()] = mr.value)
											: mr.style.removeProperty('overflow-' + O.a));
							else if (f && ye() && !E)
								for (Dt = f.parentNode; Dt && Dt !== Ne; )
									Dt._pinOffset &&
										((me -= Dt._pinOffset), (Me -= Dt._pinOffset)),
										(Dt = Dt.parentNode);
							Po &&
								Po.forEach(function (jo) {
									return jo.revert(!1, !0);
								}),
								(w.start = me),
								(w.end = Me),
								(kt = on = Kt ? tr : ye()),
								!E && !Kt && (kt < tr && ye(tr), (w.scroll.rec = 0)),
								w.revert(!1, !0),
								(Oe = Vt()),
								er && ((ge = -1), er.restart(!0)),
								(Ft = 0),
								i &&
									H &&
									(i._initted || Ii) &&
									i.progress() !== Ii &&
									i.progress(Ii || 0, !0).render(i.time(), !0, !0),
								(Rt || Ee !== w.progress || E || m) &&
									(i &&
										!H &&
										i.totalProgress(
											E && me < -0.001 && !Ee
												? b.utils.normalize(me, Me, 0)
												: Ee,
											!0,
										),
									(w.progress = Rt || (kt - me) / j === Ee ? 0 : Ee)),
								h && v && (B._pinOffset = Math.round(w.progress * qn)),
								le && le.invalidate(),
								isNaN(No) ||
									((No -= b.getProperty(R, O.p)),
									(ru -= b.getProperty(un, O.p)),
									Au(R, O, No),
									Au(Tt, O, No - (ee || 0)),
									Au(un, O, ru),
									Au(ln, O, ru - (ee || 0))),
								Rt && !Kt && w.update(),
								c && !Kt && !P && ((P = !0), c(w), (P = !1));
						}
					}),
					(w.getVelocity = function () {
						return ((ye() - on) / (Vt() - Xo)) * 1e3 || 0;
					}),
					(w.endAnimation = function () {
						Uo(w.callbackAnimation),
							i &&
								(le
									? le.progress(1)
									: i.paused()
										? H || Uo(i, w.direction < 0, 1)
										: Uo(i, i.reversed()));
					}),
					(w.labelToScroll = function (U) {
						return (
							(i &&
								i.labels &&
								(me || w.refresh() || me) + (i.labels[U] / i.duration()) * j) ||
							0
						);
					}),
					(w.getTrailing = function (U) {
						var re = se.indexOf(w),
							Z =
								w.direction > 0 ? se.slice(0, re).reverse() : se.slice(re + 1);
						return (
							kn(U)
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
							var ee = Kt === !0 ? tr : w.scroll(),
								_t = U ? 0 : (ee - me) / j,
								de = _t < 0 ? 0 : _t > 1 ? 1 : _t || 0,
								Ke = w.progress,
								Rt,
								Qe,
								De,
								we,
								nr,
								Fe,
								xn,
								hr;
							if (
								(re &&
									((on = kt),
									(kt = E ? ye() : ee),
									x && ((Li = ti), (ti = i && !H ? i.totalProgress() : de))),
								T &&
									h &&
									!Ft &&
									!Pu &&
									Yn &&
									(!de && me < ee + ((ee - on) / (Vt() - Xo)) * T
										? (de = 1e-4)
										: de === 1 &&
											Me > ee + ((ee - on) / (Vt() - Xo)) * T &&
											(de = 0.9999)),
								de !== Ke && w.enabled)
							) {
								if (
									((Rt = w.isActive = !!de && de < 1),
									(Qe = !!Ke && Ke < 1),
									(Fe = Rt !== Qe),
									(nr = Fe || !!de != !!Ke),
									(w.direction = de > Ke ? 1 : -1),
									(w.progress = de),
									nr &&
										!Ft &&
										((De = de && !Ke ? 0 : de === 1 ? 1 : Ke === 1 ? 2 : 3),
										H &&
											((we =
												(!Fe && Q[De + 1] !== 'none' && Q[De + 1]) || Q[De]),
											(hr =
												i &&
												(we === 'complete' || we === 'reset' || we in i)))),
									M &&
										(Fe || hr) &&
										(hr || d || !i) &&
										(en(M)
											? M(w)
											: w.getTrailing(M).forEach(function (Vi) {
													return Vi.endAnimation();
												})),
									H ||
										(le && !Ft && !Pu
											? (le._dp._time - le._start !== le._time &&
													le.render(le._dp._time - le._start),
												le.resetTo
													? le.resetTo('totalProgress', de, i._tTime / i._tDur)
													: ((le.vars.totalProgress = de),
														le.invalidate().restart()))
											: i && i.totalProgress(de, !!(Ft && (Oe || U)))),
									h)
								) {
									if ((U && v && (B.style[v + O.os2] = Mr), !K))
										Ye(Ko(lt + qn * de));
									else if (nr) {
										if (
											((xn =
												!U && de > Ke && Me + 1 > ee && ee + 1 >= Er(D, O)),
											k)
										)
											if (!U && (Rt || xn)) {
												var Et = Ur(h, !0),
													Ct = ee - me;
												Jm(
													h,
													Ne,
													Et.top + (O === dt ? Ct : 0) + at,
													Et.left + (O === dt ? 0 : Ct) + at,
												);
											} else Jm(h, B);
										lo(Rt || xn ? F : z),
											(Zn && de < 1 && Rt) ||
												Ye(lt + (de === 1 && !xn ? qn : 0));
									}
								}
								x && !mt.tween && !Ft && !Pu && er.restart(!0),
									l &&
										(Fe || (y && de && (de < 1 || !ef))) &&
										Hl(l.targets).forEach(function (Vi) {
											return Vi.classList[Rt || y ? 'add' : 'remove'](
												l.className,
											);
										}),
									o && !H && !U && o(w),
									nr && !Ft
										? (H &&
												(hr &&
													(we === 'complete'
														? i.pause().totalProgress(1)
														: we === 'reset'
															? i.restart(!0).pause()
															: we === 'restart'
																? i.restart(!0)
																: i[we]()),
												o && o(w)),
											(Fe || !ef) &&
												(a && Fe && nf(w, a),
												G[De] && nf(w, G[De]),
												y && (de === 1 ? w.kill(!1, 1) : (G[De] = 0)),
												Fe || ((De = de === 1 ? 1 : 3), G[De] && nf(w, G[De]))),
											N &&
												!Rt &&
												Math.abs(w.getVelocity()) > (qo(N) ? N : 2500) &&
												(Uo(w.callbackAnimation),
												le
													? le.progress(1)
													: Uo(i, we === 'reverse' ? 1 : !de, 1)))
										: H && o && !Ft && o(w);
							}
							if (ei) {
								var Dt = E ? (ee / E.duration()) * (E._caScrollDist || 0) : ee;
								Ts(Dt + (R._isFlipped ? 1 : 0)), ei(Dt);
							}
							Es && Es((-ee / E.duration()) * (E._caScrollDist || 0));
						}
					}),
					(w.enable = function (U, re) {
						w.enabled ||
							((w.enabled = !0),
							vt(D, 'resize', Zo),
							Y || vt(D, 'scroll', Ms),
							q && vt(t, 'refreshInit', q),
							U !== !1 && ((w.progress = Ee = 0), (kt = on = ge = ye())),
							re !== !1 && w.refresh());
					}),
					(w.getTween = function (U) {
						return U && mt ? mt.tween : le;
					}),
					(w.setPositions = function (U, re, Z, ee) {
						if (E) {
							var _t = E.scrollTrigger,
								de = E.duration(),
								Ke = _t.end - _t.start;
							(U = _t.start + (Ke * U) / de), (re = _t.start + (Ke * re) / de);
						}
						w.refresh(
							!1,
							!1,
							{
								start: bm(U, Z && !!w._startClamp),
								end: bm(re, Z && !!w._endClamp),
							},
							ee,
						),
							w.update();
					}),
					(w.adjustPinSpacing = function (U) {
						if (Re && U) {
							var re = Re.indexOf(O.d) + 1;
							(Re[re] = parseFloat(Re[re]) + U + at),
								(Re[1] = parseFloat(Re[1]) + U + at),
								lo(Re);
						}
					}),
					(w.disable = function (U, re) {
						if (
							w.enabled &&
							(U !== !1 && w.revert(!0, !0),
							(w.enabled = w.isActive = !1),
							re || (le && le.pause()),
							(tr = 0),
							nt && (nt.uncache = 1),
							q && gt(t, 'refreshInit', q),
							er && (er.pause(), mt.tween && mt.tween.kill() && (mt.tween = 0)),
							!Y)
						) {
							for (var Z = se.length; Z--; )
								if (se[Z].scroller === D && se[Z] !== w) return;
							gt(D, 'resize', Zo), Y || gt(D, 'scroll', Ms);
						}
					}),
					(w.kill = function (U, re) {
						w.disable(U, re), le && !re && le.kill(), u && delete Td[u];
						var Z = se.indexOf(w);
						Z >= 0 && se.splice(Z, 1),
							Z === Gt && ta > 0 && Gt--,
							(Z = 0),
							se.forEach(function (ee) {
								return ee.scroller === w.scroller && (Z = 1);
							}),
							Z || Kt || (w.scroll.rec = 0),
							i &&
								((i.scrollTrigger = null),
								U && i.revert({ kill: !1 }),
								re || i.kill()),
							Tt &&
								[Tt, ln, R, un].forEach(function (ee) {
									return ee.parentNode && ee.parentNode.removeChild(ee);
								}),
							xl === w && (xl = 0),
							h &&
								(nt && (nt.uncache = 1),
								(Z = 0),
								se.forEach(function (ee) {
									return ee.pin === h && Z++;
								}),
								Z || (nt.spacer = 0)),
							r.onKill && r.onKill(w);
					}),
					se.push(w),
					w.enable(!1, !1),
					Dr && Dr(w),
					i && i.add && !j)
				) {
					var ve = w.update;
					(w.update = function () {
						(w.update = ve), me || Me || w.refresh();
					}),
						b.delayedCall(0.01, w.update),
						(j = 0.01),
						(me = Me = 0);
				} else w.refresh();
				h && zT();
			}),
			(t.register = function (r) {
				return (
					Rs ||
						((b = r || Zv()), qv() && window.document && t.enable(), (Rs = Go)),
					Rs
				);
			}),
			(t.defaults = function (r) {
				if (r) for (var i in r) Mu[i] = r[i];
				return Mu;
			}),
			(t.disable = function (r, i) {
				(Go = 0),
					se.forEach(function (o) {
						return o[i ? 'kill' : 'disable'](r);
					}),
					gt(he, 'wheel', Ms),
					gt(Ve, 'scroll', Ms),
					clearInterval(Cu),
					gt(Ve, 'touchcancel', xr),
					gt(Ne, 'touchstart', xr),
					ju(gt, Ve, 'pointerdown,touchstart,mousedown', Hm),
					ju(gt, Ve, 'pointerup,touchend,mouseup', Ym),
					Ua.kill(),
					Nu(gt);
				for (var s = 0; s < ue.length; s += 3)
					Ou(gt, ue[s], ue[s + 1]), Ou(gt, ue[s], ue[s + 2]);
			}),
			(t.enable = function () {
				if (
					((he = window),
					(Ve = document),
					(ur = Ve.documentElement),
					(Ne = Ve.body),
					b &&
						((Hl = b.utils.toArray),
						(ml = b.utils.clamp),
						(Sd = b.core.context || xr),
						(Jc = b.core.suppressOverwrites || xr),
						(Wh = he.history.scrollRestoration || 'auto'),
						(Ed = he.pageYOffset),
						b.core.globals('ScrollTrigger', t),
						Ne))
				) {
					(Go = 1),
						(oo = document.createElement('div')),
						(oo.style.height = '100vh'),
						(oo.style.position = 'absolute'),
						l1(),
						NT(),
						tt.register(b),
						(t.isTouch = tt.isTouch),
						(ri =
							tt.isTouch &&
							/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
						(wd = tt.isTouch === 1),
						vt(he, 'wheel', Ms),
						(Yv = [he, Ve, ur, Ne]),
						b.matchMedia
							? ((t.matchMedia = function (u) {
									var a = b.matchMedia(),
										c;
									for (c in u) a.add(c, u[c]);
									return a;
								}),
								b.addEventListener('matchMediaInit', function () {
									return Gh();
								}),
								b.addEventListener('matchMediaRevert', function () {
									return s1();
								}),
								b.addEventListener('matchMedia', function () {
									ts(0, 1), xs('matchMedia');
								}),
								b.matchMedia('(orientation: portrait)', function () {
									return rf(), rf;
								}))
							: console.warn('Requires GSAP 3.11.0 or later'),
						rf(),
						vt(Ve, 'scroll', Ms);
					var r = Ne.style,
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
							o = Ur(Ne),
							dt.m = Math.round(o.top + dt.sc()) || 0,
							Jt.m = Math.round(o.left + Jt.sc()) || 0,
							i ? (r.borderTopStyle = i) : r.removeProperty('border-top-style'),
							Cu = setInterval(Gm, 250),
							b.delayedCall(0.5, function () {
								return (Pu = 0);
							}),
							vt(Ve, 'touchcancel', xr),
							vt(Ne, 'touchstart', xr),
							ju(vt, Ve, 'pointerdown,touchstart,mousedown', Hm),
							ju(vt, Ve, 'pointerup,touchend,mouseup', Ym),
							xd = b.utils.checkPrefix('transform'),
							na.push(xd),
							Rs = Vt(),
							Ua = b.delayedCall(0.2, ts).pause(),
							Ds = [
								Ve,
								'visibilitychange',
								function () {
									var u = he.innerWidth,
										a = he.innerHeight;
									Ve.hidden
										? ((Um = u), (Bm = a))
										: (Um !== u || Bm !== a) && Zo();
								},
								Ve,
								'DOMContentLoaded',
								ts,
								he,
								'load',
								ts,
								he,
								'resize',
								Zo,
							],
							Nu(vt),
							se.forEach(function (u) {
								return u.enable(0, 1);
							}),
							l = 0;
						l < ue.length;
						l += 3
					)
						Ou(gt, ue[l], ue[l + 1]), Ou(gt, ue[l], ue[l + 2]);
				}
			}),
			(t.config = function (r) {
				'limitCallbacks' in r && (ef = !!r.limitCallbacks);
				var i = r.syncInterval;
				(i && clearInterval(Cu)) || ((Cu = i) && setInterval(Gm, i)),
					'ignoreMobileResize' in r &&
						(wd = t.isTouch === 1 && r.ignoreMobileResize),
					'autoRefreshEvents' in r &&
						(Nu(gt) || Nu(vt, r.autoRefreshEvents || 'none'),
						(Xv = (r.autoRefreshEvents + '').indexOf('resize') === -1));
			}),
			(t.scrollerProxy = function (r, i) {
				var s = an(r),
					o = ue.indexOf(s),
					l = vs(s);
				~o && ue.splice(o, l ? 6 : 2),
					i && (l ? jr.unshift(he, i, Ne, i, ur, i) : jr.unshift(s, i));
			}),
			(t.clearMatchMedia = function (r) {
				se.forEach(function (i) {
					return i._ctx && i._ctx.query === r && i._ctx.kill(!0, !0);
				});
			}),
			(t.isInViewport = function (r, i, s) {
				var o = (kn(r) ? an(r) : r).getBoundingClientRect(),
					l = o[s ? us : as] * i || 0;
				return s
					? o.right - l > 0 && o.left + l < he.innerWidth
					: o.bottom - l > 0 && o.top + l < he.innerHeight;
			}),
			(t.positionInViewport = function (r, i, s) {
				kn(r) && (r = an(r));
				var o = r.getBoundingClientRect(),
					l = o[s ? us : as],
					u =
						i == null
							? l / 2
							: i in ba
								? ba[i] * l
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
		? Hl(t).forEach(function (e) {
				if (e && e.style) {
					var n = wn.indexOf(e);
					n >= 0 && wn.splice(n, 5),
						wn.push(
							e,
							e.style.cssText,
							e.getBBox && e.getAttribute('transform'),
							b.core.getCache(e),
							Sd(),
						);
				}
			})
		: wn;
};
ae.revert = function (t, e) {
	return Gh(!t, e);
};
ae.create = function (t, e) {
	return new ae(t, e);
};
ae.refresh = function (t) {
	return t ? Zo() : (Rs || ae.register()) && ts(!0);
};
ae.update = function (t) {
	return ++ue.cache && Yr(t === !0 ? 2 : 0);
};
ae.clearScrollMemory = o1;
ae.maxScroll = function (t, e) {
	return Er(t, e ? Jt : dt);
};
ae.getScrollFunc = function (t, e) {
	return Mi(an(t), e ? Jt : dt);
};
ae.getById = function (t) {
	return Td[t];
};
ae.getAll = function () {
	return se.filter(function (t) {
		return t.vars.id !== 'ScrollSmoother';
	});
};
ae.isScrolling = function () {
	return !!Yn;
};
ae.snapDirectional = Xh;
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
			return function (v) {
				d.length || h.restart(!0),
					d.push(v.trigger),
					f.push(v),
					s <= d.length && h.progress(1);
			};
		},
		l;
	for (l in e)
		r[l] =
			l.substr(0, 2) === 'on' && en(e[l]) && l !== 'onRefreshInit'
				? o(l, e[l])
				: e[l];
	return (
		en(s) &&
			((s = s()),
			vt(ae, 'refresh', function () {
				return (s = e.batchMax());
			})),
		Hl(t).forEach(function (u) {
			var a = {};
			for (l in r) a[l] = r[l];
			(a.trigger = u), n.push(ae.create(a));
		}),
		n
	);
};
var t0 = function (e, n, r, i) {
		return (
			n > i ? e(i) : n < 0 && e(0),
			r > i ? (i - n) / (r - n) : r < 0 ? n / (n - r) : 1
		);
	},
	of = function t(e, n) {
		n === !0
			? e.style.removeProperty('touch-action')
			: (e.style.touchAction =
					n === !0
						? 'auto'
						: n
							? 'pan-' + n + (tt.isTouch ? ' pinch-zoom' : '')
							: 'none'),
			e === ur && t(Ne, n);
	},
	zu = { auto: 1, scroll: 1 },
	$T = function (e) {
		var n = e.event,
			r = e.target,
			i = e.axis,
			s = (n.changedTouches ? n.changedTouches[0] : n).target,
			o = s._gsap || b.core.getCache(s),
			l = Vt(),
			u;
		if (!o._isScrollT || l - o._isScrollT > 2e3) {
			for (
				;
				s &&
				s !== Ne &&
				((s.scrollHeight <= s.clientHeight && s.scrollWidth <= s.clientWidth) ||
					!(zu[(u = Un(s)).overflowY] || zu[u.overflowX]));

			)
				s = s.parentNode;
			(o._isScroll =
				s &&
				s !== r &&
				!vs(s) &&
				(zu[(u = Un(s)).overflowY] || zu[u.overflowX])),
				(o._isScrollT = l);
		}
		(o._isScroll || i === 'x') && (n.stopPropagation(), (n._gsapAllow = !0));
	},
	a1 = function (e, n, r, i) {
		return tt.create({
			target: e,
			capture: !0,
			debounce: !1,
			lockAxis: !0,
			type: n,
			onWheel: (i = i && $T),
			onPress: i,
			onDrag: i,
			onScroll: i,
			onEnable: function () {
				return r && vt(Ve, tt.eventTypes[0], r0, !1, !0);
			},
			onDisable: function () {
				return gt(Ve, tt.eventTypes[0], r0, !0);
			},
		});
	},
	UT = /(input|label|select|textarea)/i,
	n0,
	r0 = function (e) {
		var n = UT.test(e.target.tagName);
		(n || n0) && ((e._gsapAllow = !0), (n0 = n));
	},
	BT = function (e) {
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
			a = an(e.target) || ur,
			c = b.core.globals().ScrollSmoother,
			d = c && c.get(),
			f =
				ri &&
				((e.content && an(e.content)) ||
					(d && e.content !== !1 && !d.smooth() && d.content())),
			h = Mi(a, dt),
			v = Mi(a, Jt),
			m = 1,
			T =
				(tt.isTouch && he.visualViewport
					? he.visualViewport.scale * he.visualViewport.width
					: he.outerWidth) / he.innerWidth,
			_ = 0,
			p = en(i)
				? function () {
						return i(l);
					}
				: function () {
						return i || 2.8;
					},
			y,
			x,
			k = a1(a, e.type, !0, s),
			C = function () {
				return (x = !1);
			},
			E = xr,
			N = xr,
			M = function () {
				(u = Er(a, dt)),
					(N = ml(ri ? 1 : 0, u)),
					r && (E = ml(0, Er(a, Jt))),
					(y = cs);
			},
			O = function () {
				(f._gsap.y = Ko(parseFloat(f._gsap.y) + h.offset) + 'px'),
					(f.style.transform =
						'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' +
						parseFloat(f._gsap.y) +
						', 0, 1)'),
					(h.offset = h.cacheID = 0);
			},
			H = function () {
				if (x) {
					requestAnimationFrame(C);
					var A = Ko(l.deltaY / 2),
						$ = N(h.v - A);
					if (f && $ !== h.v + h.offset) {
						h.offset = $ - h.v;
						var w = Ko((parseFloat(f && f._gsap.y) || 0) - h.offset);
						(f.style.transform =
							'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' +
							w +
							', 0, 1)'),
							(f._gsap.y = w + 'px'),
							(h.cacheID = ue.cache),
							Yr();
					}
					return !0;
				}
				h.offset && O(), (x = !0);
			},
			D,
			I,
			Y,
			K,
			G = function () {
				M(),
					D.isActive() &&
						D.vars.scrollY > u &&
						(h() > u ? D.progress(1) && h(u) : D.resetTo('scrollY', u));
			};
		return (
			f && b.set(f, { y: '+=0' }),
			(e.ignoreCheck = function (Q) {
				return (
					(ri && Q.type === 'touchmove' && H()) ||
					(m > 1.05 && Q.type !== 'touchstart') ||
					l.isGesturing ||
					(Q.touches && Q.touches.length > 1)
				);
			}),
			(e.onPress = function () {
				x = !1;
				var Q = m;
				(m = Ko(((he.visualViewport && he.visualViewport.scale) || 1) / T)),
					D.pause(),
					Q !== m && of(a, m > 1.01 ? !0 : r ? !1 : 'x'),
					(I = v()),
					(Y = h()),
					M(),
					(y = cs);
			}),
			(e.onRelease = e.onGestureStart =
				function (Q, A) {
					if ((h.offset && O(), !A)) K.restart(!0);
					else {
						ue.cache++;
						var $ = p(),
							w,
							q;
						r &&
							((w = v()),
							(q = w + ($ * 0.05 * -Q.velocityX) / 0.227),
							($ *= t0(v, w, q, Er(a, Jt))),
							(D.vars.scrollX = E(q))),
							(w = h()),
							(q = w + ($ * 0.05 * -Q.velocityY) / 0.227),
							($ *= t0(h, w, q, Er(a, dt))),
							(D.vars.scrollY = N(q)),
							D.invalidate().duration($).play(0.01),
							((ri && D.vars.scrollY >= u) || w >= u - 1) &&
								b.to({}, { onUpdate: G, duration: $ });
					}
					o && o(Q);
				}),
			(e.onWheel = function () {
				D._ts && D.pause(), Vt() - _ > 1e3 && ((y = 0), (_ = Vt()));
			}),
			(e.onChange = function (Q, A, $, w, q) {
				if (
					(cs !== y && M(),
					A && r && v(E(w[2] === A ? I + (Q.startX - Q.x) : v() + A - w[1])),
					$)
				) {
					h.offset && O();
					var oe = q[2] === $,
						ot = oe ? Y + Q.startY - Q.y : h() + $ - q[1],
						ge = N(ot);
					oe && ot !== ge && (Y += ge - ot), h(ge);
				}
				($ || A) && Yr();
			}),
			(e.onEnable = function () {
				of(a, r ? !1 : 'x'),
					ae.addEventListener('refresh', G),
					vt(he, 'resize', G),
					h.smooth &&
						((h.target.style.scrollBehavior = 'auto'),
						(h.smooth = v.smooth = !1)),
					k.enable();
			}),
			(e.onDisable = function () {
				of(a, !0),
					gt(he, 'resize', G),
					ae.removeEventListener('refresh', G),
					k.kill();
			}),
			(e.lockAxis = e.lockAxis !== !1),
			(l = new tt(e)),
			(l.iOS = ri),
			ri && !h() && h(1),
			ri && b.ticker.add(xr),
			(K = l._dc),
			(D = b.to(l, {
				ease: 'power4',
				paused: !0,
				inherit: !1,
				scrollX: r ? '+=0.1' : '+=0',
				scrollY: '+=0.1',
				modifiers: {
					scrollY: u1(h, h(), function () {
						return D.pause();
					}),
				},
				onUpdate: Yr,
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
	return new tt(t);
};
ae.normalizeScroll = function (t) {
	if (typeof t > 'u') return Qt;
	if (t === !0 && Qt) return Qt.enable();
	if (t === !1) {
		Qt && Qt.kill(), (Qt = t);
		return;
	}
	var e = t instanceof tt ? t : BT(t);
	return Qt && Qt.target === e.target && Qt.kill(), vs(e.target) && (Qt = e), e;
};
ae.core = {
	_getVelocityProp: yd,
	_inputObserver: a1,
	_scrollers: ue,
	_proxies: jr,
	bridge: {
		ss: function () {
			Yn || xs('scrollStart'), (Yn = Vt());
		},
		ref: function () {
			return Ft;
		},
	},
};
Zv() && b.registerPlugin(ae);
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
tn.registerPlugin(ae);
function WT() {
	const t = te.useRef();
	return (
		te.useEffect(() => {
			function e(n) {
				var r, i;
				(i = (r = t.current) == null ? void 0 : r.lenis) == null ||
					i.raf(n * 1e3);
			}
			return (
				tn.ticker.add(e),
				() => {
					tn.ticker.remove(e);
				}
			);
		}),
		g.jsxs(td, {
			root: !0,
			options: {
				lerp: 0.1,
				duration: 1.2,
				smoothTouch: !0,
				easing: 'easeOutQuart',
			},
			ref: t,
			autoRaf: !1,
			children: [g.jsx(jw, {}), g.jsx(TT, {}), g.jsx(ET, {})],
		})
	);
}
lf.createRoot(document.getElementById('root')).render(
	g.jsx(ct.StrictMode, { children: g.jsx(WT, {}) }),
);
