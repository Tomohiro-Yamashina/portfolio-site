var a1 = Object.defineProperty;
var c1 = (t, e, n) =>
	e in t
		? a1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
		: (t[e] = n);
var _r = (t, e, n) => (c1(t, typeof e != 'symbol' ? e + '' : e, n), n);
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
function Cd(t) {
	return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, 'default')
		? t.default
		: t;
}
var r_ = { exports: {} },
	ba = {},
	i_ = { exports: {} },
	ce = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Yl = Symbol.for('react.element'),
	f1 = Symbol.for('react.portal'),
	d1 = Symbol.for('react.fragment'),
	h1 = Symbol.for('react.strict_mode'),
	p1 = Symbol.for('react.profiler'),
	_1 = Symbol.for('react.provider'),
	m1 = Symbol.for('react.context'),
	g1 = Symbol.for('react.forward_ref'),
	v1 = Symbol.for('react.suspense'),
	y1 = Symbol.for('react.memo'),
	x1 = Symbol.for('react.lazy'),
	Kh = Symbol.iterator;
function w1(t) {
	return t === null || typeof t != 'object'
		? null
		: ((t = (Kh && t[Kh]) || t['@@iterator']),
			typeof t == 'function' ? t : null);
}
var s_ = {
		isMounted: function () {
			return !1;
		},
		enqueueForceUpdate: function () {},
		enqueueReplaceState: function () {},
		enqueueSetState: function () {},
	},
	o_ = Object.assign,
	l_ = {};
function So(t, e, n) {
	(this.props = t),
		(this.context = e),
		(this.refs = l_),
		(this.updater = n || s_);
}
So.prototype.isReactComponent = {};
So.prototype.setState = function (t, e) {
	if (typeof t != 'object' && typeof t != 'function' && t != null)
		throw Error(
			'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
		);
	this.updater.enqueueSetState(this, t, e, 'setState');
};
So.prototype.forceUpdate = function (t) {
	this.updater.enqueueForceUpdate(this, t, 'forceUpdate');
};
function u_() {}
u_.prototype = So.prototype;
function Pd(t, e, n) {
	(this.props = t),
		(this.context = e),
		(this.refs = l_),
		(this.updater = n || s_);
}
var Nd = (Pd.prototype = new u_());
Nd.constructor = Pd;
o_(Nd, So.prototype);
Nd.isPureReactComponent = !0;
var qh = Array.isArray,
	a_ = Object.prototype.hasOwnProperty,
	Od = { current: null },
	c_ = { key: !0, ref: !0, __self: !0, __source: !0 };
function f_(t, e, n) {
	var r,
		i = {},
		s = null,
		o = null;
	if (e != null)
		for (r in (e.ref !== void 0 && (o = e.ref),
		e.key !== void 0 && (s = '' + e.key),
		e))
			a_.call(e, r) && !c_.hasOwnProperty(r) && (i[r] = e[r]);
	var l = arguments.length - 2;
	if (l === 1) i.children = n;
	else if (1 < l) {
		for (var u = Array(l), a = 0; a < l; a++) u[a] = arguments[a + 2];
		i.children = u;
	}
	if (t && t.defaultProps)
		for (r in ((l = t.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
	return {
		$$typeof: Yl,
		type: t,
		key: s,
		ref: o,
		props: i,
		_owner: Od.current,
	};
}
function S1(t, e) {
	return {
		$$typeof: Yl,
		type: t.type,
		key: e,
		ref: t.ref,
		props: t.props,
		_owner: t._owner,
	};
}
function Md(t) {
	return typeof t == 'object' && t !== null && t.$$typeof === Yl;
}
function k1(t) {
	var e = { '=': '=0', ':': '=2' };
	return (
		'$' +
		t.replace(/[=:]/g, function (n) {
			return e[n];
		})
	);
}
var Zh = /\/+/g;
function dc(t, e) {
	return typeof t == 'object' && t !== null && t.key != null
		? k1('' + t.key)
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
					case Yl:
					case f1:
						o = !0;
				}
		}
	if (o)
		return (
			(o = t),
			(i = i(o)),
			(t = r === '' ? '.' + dc(o, 0) : r),
			qh(i)
				? ((n = ''),
					t != null && (n = t.replace(Zh, '$&/') + '/'),
					Lu(i, e, n, '', function (a) {
						return a;
					}))
				: i != null &&
					(Md(i) &&
						(i = S1(
							i,
							n +
								(!i.key || (o && o.key === i.key)
									? ''
									: ('' + i.key).replace(Zh, '$&/') + '/') +
								t,
						)),
					e.push(i)),
			1
		);
	if (((o = 0), (r = r === '' ? '.' : r + ':'), qh(t)))
		for (var l = 0; l < t.length; l++) {
			s = t[l];
			var u = r + dc(s, l);
			o += Lu(s, e, n, u, i);
		}
	else if (((u = w1(t)), typeof u == 'function'))
		for (t = u.call(t), l = 0; !(s = t.next()).done; )
			(s = s.value), (u = r + dc(s, l++)), (o += Lu(s, e, n, u, i));
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
function ru(t, e, n) {
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
function T1(t) {
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
var nn = { current: null },
	Au = { transition: null },
	E1 = {
		ReactCurrentDispatcher: nn,
		ReactCurrentBatchConfig: Au,
		ReactCurrentOwner: Od,
	};
ce.Children = {
	map: ru,
	forEach: function (t, e, n) {
		ru(
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
			ru(t, function () {
				e++;
			}),
			e
		);
	},
	toArray: function (t) {
		return (
			ru(t, function (e) {
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
ce.Component = So;
ce.Fragment = d1;
ce.Profiler = p1;
ce.PureComponent = Pd;
ce.StrictMode = h1;
ce.Suspense = v1;
ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = E1;
ce.cloneElement = function (t, e, n) {
	if (t == null)
		throw Error(
			'React.cloneElement(...): The argument must be a React element, but you passed ' +
				t +
				'.',
		);
	var r = o_({}, t.props),
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
			a_.call(e, u) &&
				!c_.hasOwnProperty(u) &&
				(r[u] = e[u] === void 0 && l !== void 0 ? l[u] : e[u]);
	}
	var u = arguments.length - 2;
	if (u === 1) r.children = n;
	else if (1 < u) {
		l = Array(u);
		for (var a = 0; a < u; a++) l[a] = arguments[a + 2];
		r.children = l;
	}
	return { $$typeof: Yl, type: t.type, key: i, ref: s, props: r, _owner: o };
};
ce.createContext = function (t) {
	return (
		(t = {
			$$typeof: m1,
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
ce.createElement = f_;
ce.createFactory = function (t) {
	var e = f_.bind(null, t);
	return (e.type = t), e;
};
ce.createRef = function () {
	return { current: null };
};
ce.forwardRef = function (t) {
	return { $$typeof: g1, render: t };
};
ce.isValidElement = Md;
ce.lazy = function (t) {
	return { $$typeof: x1, _payload: { _status: -1, _result: t }, _init: T1 };
};
ce.memo = function (t, e) {
	return { $$typeof: y1, type: t, compare: e === void 0 ? null : e };
};
ce.startTransition = function (t) {
	var e = Au.transition;
	Au.transition = {};
	try {
		t();
	} finally {
		Au.transition = e;
	}
};
ce.unstable_act = function () {
	throw Error('act(...) is not supported in production builds of React.');
};
ce.useCallback = function (t, e) {
	return nn.current.useCallback(t, e);
};
ce.useContext = function (t) {
	return nn.current.useContext(t);
};
ce.useDebugValue = function () {};
ce.useDeferredValue = function (t) {
	return nn.current.useDeferredValue(t);
};
ce.useEffect = function (t, e) {
	return nn.current.useEffect(t, e);
};
ce.useId = function () {
	return nn.current.useId();
};
ce.useImperativeHandle = function (t, e, n) {
	return nn.current.useImperativeHandle(t, e, n);
};
ce.useInsertionEffect = function (t, e) {
	return nn.current.useInsertionEffect(t, e);
};
ce.useLayoutEffect = function (t, e) {
	return nn.current.useLayoutEffect(t, e);
};
ce.useMemo = function (t, e) {
	return nn.current.useMemo(t, e);
};
ce.useReducer = function (t, e, n) {
	return nn.current.useReducer(t, e, n);
};
ce.useRef = function (t) {
	return nn.current.useRef(t);
};
ce.useState = function (t) {
	return nn.current.useState(t);
};
ce.useSyncExternalStore = function (t, e, n) {
	return nn.current.useSyncExternalStore(t, e, n);
};
ce.useTransition = function () {
	return nn.current.useTransition();
};
ce.version = '18.2.0';
i_.exports = ce;
var te = i_.exports;
const at = Cd(te);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var C1 = te,
	P1 = Symbol.for('react.element'),
	N1 = Symbol.for('react.fragment'),
	O1 = Object.prototype.hasOwnProperty,
	M1 = C1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	j1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function d_(t, e, n) {
	var r,
		i = {},
		s = null,
		o = null;
	n !== void 0 && (s = '' + n),
		e.key !== void 0 && (s = '' + e.key),
		e.ref !== void 0 && (o = e.ref);
	for (r in e) O1.call(e, r) && !j1.hasOwnProperty(r) && (i[r] = e[r]);
	if (t && t.defaultProps)
		for (r in ((e = t.defaultProps), e)) i[r] === void 0 && (i[r] = e[r]);
	return {
		$$typeof: P1,
		type: t,
		key: s,
		ref: o,
		props: i,
		_owner: M1.current,
	};
}
ba.Fragment = N1;
ba.jsx = d_;
ba.jsxs = d_;
r_.exports = ba;
var y = r_.exports,
	of = {},
	h_ = { exports: {} },
	Rn = {},
	p_ = { exports: {} },
	__ = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (t) {
	function e(z, $) {
		var w = z.length;
		z.push($);
		e: for (; 0 < w; ) {
			var q = (w - 1) >>> 1,
				oe = z[q];
			if (0 < i(oe, $)) (z[q] = $), (z[w] = oe), (w = q);
			else break e;
		}
	}
	function n(z) {
		return z.length === 0 ? null : z[0];
	}
	function r(z) {
		if (z.length === 0) return null;
		var $ = z[0],
			w = z.pop();
		if (w !== $) {
			z[0] = w;
			e: for (var q = 0, oe = z.length, st = oe >>> 1; q < st; ) {
				var ge = 2 * (q + 1) - 1,
					Me = z[ge],
					Ce = ge + 1,
					ye = z[Ce];
				if (0 > i(Me, w))
					Ce < oe && 0 > i(ye, Me)
						? ((z[q] = ye), (z[Ce] = w), (q = Ce))
						: ((z[q] = Me), (z[ge] = w), (q = ge));
				else if (Ce < oe && 0 > i(ye, w)) (z[q] = ye), (z[Ce] = w), (q = Ce);
				else break e;
			}
		}
		return $;
	}
	function i(z, $) {
		var w = z.sortIndex - $.sortIndex;
		return w !== 0 ? w : z.id - $.id;
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
		_ = !1,
		T = typeof setTimeout == 'function' ? setTimeout : null,
		m = typeof clearTimeout == 'function' ? clearTimeout : null,
		p = typeof setImmediate < 'u' ? setImmediate : null;
	typeof navigator < 'u' &&
		navigator.scheduling !== void 0 &&
		navigator.scheduling.isInputPending !== void 0 &&
		navigator.scheduling.isInputPending.bind(navigator.scheduling);
	function v(z) {
		for (var $ = n(a); $ !== null; ) {
			if ($.callback === null) r(a);
			else if ($.startTime <= z)
				r(a), ($.sortIndex = $.expirationTime), e(u, $);
			else break;
			$ = n(a);
		}
	}
	function x(z) {
		if (((_ = !1), v(z), !g))
			if (n(u) !== null) (g = !0), G(k);
			else {
				var $ = n(a);
				$ !== null && Q(x, $.startTime - z);
			}
	}
	function k(z, $) {
		(g = !1), _ && ((_ = !1), m(N), (N = -1)), (h = !0);
		var w = f;
		try {
			for (
				v($), d = n(u);
				d !== null && (!(d.expirationTime > $) || (z && !H()));

			) {
				var q = d.callback;
				if (typeof q == 'function') {
					(d.callback = null), (f = d.priorityLevel);
					var oe = q(d.expirationTime <= $);
					($ = t.unstable_now()),
						typeof oe == 'function' ? (d.callback = oe) : d === n(u) && r(u),
						v($);
				} else r(u);
				d = n(u);
			}
			if (d !== null) var st = !0;
			else {
				var ge = n(a);
				ge !== null && Q(x, ge.startTime - $), (st = !1);
			}
			return st;
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
			var z = t.unstable_now();
			M = z;
			var $ = !0;
			try {
				$ = E(!0, z);
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
	function G(z) {
		(E = z), C || ((C = !0), I());
	}
	function Q(z, $) {
		N = T(function () {
			z(t.unstable_now());
		}, $);
	}
	(t.unstable_IdlePriority = 5),
		(t.unstable_ImmediatePriority = 1),
		(t.unstable_LowPriority = 4),
		(t.unstable_NormalPriority = 3),
		(t.unstable_Profiling = null),
		(t.unstable_UserBlockingPriority = 2),
		(t.unstable_cancelCallback = function (z) {
			z.callback = null;
		}),
		(t.unstable_continueExecution = function () {
			g || h || ((g = !0), G(k));
		}),
		(t.unstable_forceFrameRate = function (z) {
			0 > z || 125 < z
				? console.error(
						'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
					)
				: (j = 0 < z ? Math.floor(1e3 / z) : 5);
		}),
		(t.unstable_getCurrentPriorityLevel = function () {
			return f;
		}),
		(t.unstable_getFirstCallbackNode = function () {
			return n(u);
		}),
		(t.unstable_next = function (z) {
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
				return z();
			} finally {
				f = w;
			}
		}),
		(t.unstable_pauseExecution = function () {}),
		(t.unstable_requestPaint = function () {}),
		(t.unstable_runWithPriority = function (z, $) {
			switch (z) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
					break;
				default:
					z = 3;
			}
			var w = f;
			f = z;
			try {
				return $();
			} finally {
				f = w;
			}
		}),
		(t.unstable_scheduleCallback = function (z, $, w) {
			var q = t.unstable_now();
			switch (
				(typeof w == 'object' && w !== null
					? ((w = w.delay), (w = typeof w == 'number' && 0 < w ? q + w : q))
					: (w = q),
				z)
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
				(z = {
					id: c++,
					callback: $,
					priorityLevel: z,
					startTime: w,
					expirationTime: oe,
					sortIndex: -1,
				}),
				w > q
					? ((z.sortIndex = w),
						e(a, z),
						n(u) === null &&
							z === n(a) &&
							(_ ? (m(N), (N = -1)) : (_ = !0), Q(x, w - q)))
					: ((z.sortIndex = oe), e(u, z), g || h || ((g = !0), G(k))),
				z
			);
		}),
		(t.unstable_shouldYield = H),
		(t.unstable_wrapCallback = function (z) {
			var $ = f;
			return function () {
				var w = f;
				f = $;
				try {
					return z.apply(this, arguments);
				} finally {
					f = w;
				}
			};
		});
})(__);
p_.exports = __;
var R1 = p_.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var m_ = te,
	Mn = R1;
function A(t) {
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
var g_ = new Set(),
	xl = {};
function xs(t, e) {
	lo(t, e), lo(t + 'Capture', e);
}
function lo(t, e) {
	for (xl[t] = e, t = 0; t < e.length; t++) g_.add(e[t]);
}
var Qr = !(
		typeof window > 'u' ||
		typeof window.document > 'u' ||
		typeof window.document.createElement > 'u'
	),
	lf = Object.prototype.hasOwnProperty,
	D1 =
		/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	Jh = {},
	ep = {};
function z1(t) {
	return lf.call(ep, t)
		? !0
		: lf.call(Jh, t)
			? !1
			: D1.test(t)
				? (ep[t] = !0)
				: ((Jh[t] = !0), !1);
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
function A1(t, e, n, r) {
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
function rn(t, e, n, r, i, s, o) {
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
		Mt[t] = new rn(t, 0, !1, t, null, !1, !1);
	});
[
	['acceptCharset', 'accept-charset'],
	['className', 'class'],
	['htmlFor', 'for'],
	['httpEquiv', 'http-equiv'],
].forEach(function (t) {
	var e = t[0];
	Mt[e] = new rn(e, 1, !1, t[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (t) {
	Mt[t] = new rn(t, 2, !1, t.toLowerCase(), null, !1, !1);
});
[
	'autoReverse',
	'externalResourcesRequired',
	'focusable',
	'preserveAlpha',
].forEach(function (t) {
	Mt[t] = new rn(t, 2, !1, t, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
	.split(' ')
	.forEach(function (t) {
		Mt[t] = new rn(t, 3, !1, t.toLowerCase(), null, !1, !1);
	});
['checked', 'multiple', 'muted', 'selected'].forEach(function (t) {
	Mt[t] = new rn(t, 3, !0, t, null, !1, !1);
});
['capture', 'download'].forEach(function (t) {
	Mt[t] = new rn(t, 4, !1, t, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (t) {
	Mt[t] = new rn(t, 6, !1, t, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (t) {
	Mt[t] = new rn(t, 5, !1, t.toLowerCase(), null, !1, !1);
});
var jd = /[\-:]([a-z])/g;
function Rd(t) {
	return t[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
	.split(' ')
	.forEach(function (t) {
		var e = t.replace(jd, Rd);
		Mt[e] = new rn(e, 1, !1, t, null, !1, !1);
	});
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
	.split(' ')
	.forEach(function (t) {
		var e = t.replace(jd, Rd);
		Mt[e] = new rn(e, 1, !1, t, 'http://www.w3.org/1999/xlink', !1, !1);
	});
['xml:base', 'xml:lang', 'xml:space'].forEach(function (t) {
	var e = t.replace(jd, Rd);
	Mt[e] = new rn(e, 1, !1, t, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (t) {
	Mt[t] = new rn(t, 1, !1, t.toLowerCase(), null, !1, !1);
});
Mt.xlinkHref = new rn(
	'xlinkHref',
	1,
	!1,
	'xlink:href',
	'http://www.w3.org/1999/xlink',
	!0,
	!1,
);
['src', 'href', 'action', 'formAction'].forEach(function (t) {
	Mt[t] = new rn(t, 1, !1, t.toLowerCase(), null, !0, !0);
});
function Dd(t, e, n, r) {
	var i = Mt.hasOwnProperty(e) ? Mt[e] : null;
	(i !== null
		? i.type !== 0
		: r ||
			!(2 < e.length) ||
			(e[0] !== 'o' && e[0] !== 'O') ||
			(e[1] !== 'n' && e[1] !== 'N')) &&
		(A1(e, n, i, r) && (n = null),
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
var Jr = m_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	iu = Symbol.for('react.element'),
	Ds = Symbol.for('react.portal'),
	zs = Symbol.for('react.fragment'),
	zd = Symbol.for('react.strict_mode'),
	uf = Symbol.for('react.profiler'),
	v_ = Symbol.for('react.provider'),
	y_ = Symbol.for('react.context'),
	Ld = Symbol.for('react.forward_ref'),
	af = Symbol.for('react.suspense'),
	cf = Symbol.for('react.suspense_list'),
	Ad = Symbol.for('react.memo'),
	ii = Symbol.for('react.lazy'),
	x_ = Symbol.for('react.offscreen'),
	tp = Symbol.iterator;
function Oo(t) {
	return t === null || typeof t != 'object'
		? null
		: ((t = (tp && t[tp]) || t['@@iterator']),
			typeof t == 'function' ? t : null);
}
var He = Object.assign,
	hc;
function Uo(t) {
	if (hc === void 0)
		try {
			throw Error();
		} catch (n) {
			var e = n.stack.trim().match(/\n( *(at )?)/);
			hc = (e && e[1]) || '';
		}
	return (
		`
` +
		hc +
		t
	);
}
var pc = !1;
function _c(t, e) {
	if (!t || pc) return '';
	pc = !0;
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
		(pc = !1), (Error.prepareStackTrace = n);
	}
	return (t = t ? t.displayName || t.name : '') ? Uo(t) : '';
}
function F1(t) {
	switch (t.tag) {
		case 5:
			return Uo(t.type);
		case 16:
			return Uo('Lazy');
		case 13:
			return Uo('Suspense');
		case 19:
			return Uo('SuspenseList');
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
function ff(t) {
	if (t == null) return null;
	if (typeof t == 'function') return t.displayName || t.name || null;
	if (typeof t == 'string') return t;
	switch (t) {
		case zs:
			return 'Fragment';
		case Ds:
			return 'Portal';
		case uf:
			return 'Profiler';
		case zd:
			return 'StrictMode';
		case af:
			return 'Suspense';
		case cf:
			return 'SuspenseList';
	}
	if (typeof t == 'object')
		switch (t.$$typeof) {
			case y_:
				return (t.displayName || 'Context') + '.Consumer';
			case v_:
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
			case Ad:
				return (
					(e = t.displayName || null), e !== null ? e : ff(t.type) || 'Memo'
				);
			case ii:
				(e = t._payload), (t = t._init);
				try {
					return ff(t(e));
				} catch {}
		}
	return null;
}
function I1(t) {
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
			return ff(e);
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
function w_(t) {
	var e = t.type;
	return (
		(t = t.nodeName) &&
		t.toLowerCase() === 'input' &&
		(e === 'checkbox' || e === 'radio')
	);
}
function V1(t) {
	var e = w_(t) ? 'checked' : 'value',
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
function su(t) {
	t._valueTracker || (t._valueTracker = V1(t));
}
function S_(t) {
	if (!t) return !1;
	var e = t._valueTracker;
	if (!e) return !0;
	var n = e.getValue(),
		r = '';
	return (
		t && (r = w_(t) ? (t.checked ? 'true' : 'false') : t.value),
		(t = r),
		t !== n ? (e.setValue(t), !0) : !1
	);
}
function ra(t) {
	if (((t = t || (typeof document < 'u' ? document : void 0)), typeof t > 'u'))
		return null;
	try {
		return t.activeElement || t.body;
	} catch {
		return t.body;
	}
}
function df(t, e) {
	var n = e.checked;
	return He({}, e, {
		defaultChecked: void 0,
		defaultValue: void 0,
		value: void 0,
		checked: n ?? t._wrapperState.initialChecked,
	});
}
function np(t, e) {
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
function k_(t, e) {
	(e = e.checked), e != null && Dd(t, 'checked', e, !1);
}
function hf(t, e) {
	k_(t, e);
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
		? pf(t, e.type, n)
		: e.hasOwnProperty('defaultValue') && pf(t, e.type, Pi(e.defaultValue)),
		e.checked == null &&
			e.defaultChecked != null &&
			(t.defaultChecked = !!e.defaultChecked);
}
function rp(t, e, n) {
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
function pf(t, e, n) {
	(e !== 'number' || ra(t.ownerDocument) !== t) &&
		(n == null
			? (t.defaultValue = '' + t._wrapperState.initialValue)
			: t.defaultValue !== '' + n && (t.defaultValue = '' + n));
}
var Bo = Array.isArray;
function Gs(t, e, n, r) {
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
	if (e.dangerouslySetInnerHTML != null) throw Error(A(91));
	return He({}, e, {
		value: void 0,
		defaultValue: void 0,
		children: '' + t._wrapperState.initialValue,
	});
}
function ip(t, e) {
	var n = e.value;
	if (n == null) {
		if (((n = e.children), (e = e.defaultValue), n != null)) {
			if (e != null) throw Error(A(92));
			if (Bo(n)) {
				if (1 < n.length) throw Error(A(93));
				n = n[0];
			}
			e = n;
		}
		e == null && (e = ''), (n = e);
	}
	t._wrapperState = { initialValue: Pi(n) };
}
function T_(t, e) {
	var n = Pi(e.value),
		r = Pi(e.defaultValue);
	n != null &&
		((n = '' + n),
		n !== t.value && (t.value = n),
		e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)),
		r != null && (t.defaultValue = '' + r);
}
function sp(t) {
	var e = t.textContent;
	e === t._wrapperState.initialValue && e !== '' && e !== null && (t.value = e);
}
function E_(t) {
	switch (t) {
		case 'svg':
			return 'http://www.w3.org/2000/svg';
		case 'math':
			return 'http://www.w3.org/1998/Math/MathML';
		default:
			return 'http://www.w3.org/1999/xhtml';
	}
}
function mf(t, e) {
	return t == null || t === 'http://www.w3.org/1999/xhtml'
		? E_(e)
		: t === 'http://www.w3.org/2000/svg' && e === 'foreignObject'
			? 'http://www.w3.org/1999/xhtml'
			: t;
}
var ou,
	C_ = (function (t) {
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
				ou = ou || document.createElement('div'),
					ou.innerHTML = '<svg>' + e.valueOf().toString() + '</svg>',
					e = ou.firstChild;
				t.firstChild;

			)
				t.removeChild(t.firstChild);
			for (; e.firstChild; ) t.appendChild(e.firstChild);
		}
	});
function wl(t, e) {
	if (e) {
		var n = t.firstChild;
		if (n && n === t.lastChild && n.nodeType === 3) {
			n.nodeValue = e;
			return;
		}
	}
	t.textContent = e;
}
var Zo = {
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
	$1 = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Zo).forEach(function (t) {
	$1.forEach(function (e) {
		(e = e + t.charAt(0).toUpperCase() + t.substring(1)), (Zo[e] = Zo[t]);
	});
});
function P_(t, e, n) {
	return e == null || typeof e == 'boolean' || e === ''
		? ''
		: n || typeof e != 'number' || e === 0 || (Zo.hasOwnProperty(t) && Zo[t])
			? ('' + e).trim()
			: e + 'px';
}
function N_(t, e) {
	t = t.style;
	for (var n in e)
		if (e.hasOwnProperty(n)) {
			var r = n.indexOf('--') === 0,
				i = P_(n, e[n], r);
			n === 'float' && (n = 'cssFloat'), r ? t.setProperty(n, i) : (t[n] = i);
		}
}
var U1 = He(
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
function gf(t, e) {
	if (e) {
		if (U1[t] && (e.children != null || e.dangerouslySetInnerHTML != null))
			throw Error(A(137, t));
		if (e.dangerouslySetInnerHTML != null) {
			if (e.children != null) throw Error(A(60));
			if (
				typeof e.dangerouslySetInnerHTML != 'object' ||
				!('__html' in e.dangerouslySetInnerHTML)
			)
				throw Error(A(61));
		}
		if (e.style != null && typeof e.style != 'object') throw Error(A(62));
	}
}
function vf(t, e) {
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
var yf = null;
function Fd(t) {
	return (
		(t = t.target || t.srcElement || window),
		t.correspondingUseElement && (t = t.correspondingUseElement),
		t.nodeType === 3 ? t.parentNode : t
	);
}
var xf = null,
	Ks = null,
	qs = null;
function op(t) {
	if ((t = Gl(t))) {
		if (typeof xf != 'function') throw Error(A(280));
		var e = t.stateNode;
		e && ((e = Ga(e)), xf(t.stateNode, t.type, e));
	}
}
function O_(t) {
	Ks ? (qs ? qs.push(t) : (qs = [t])) : (Ks = t);
}
function M_() {
	if (Ks) {
		var t = Ks,
			e = qs;
		if (((qs = Ks = null), op(t), e)) for (t = 0; t < e.length; t++) op(e[t]);
	}
}
function j_(t, e) {
	return t(e);
}
function R_() {}
var mc = !1;
function D_(t, e, n) {
	if (mc) return t(e, n);
	mc = !0;
	try {
		return j_(t, e, n);
	} finally {
		(mc = !1), (Ks !== null || qs !== null) && (R_(), M_());
	}
}
function Sl(t, e) {
	var n = t.stateNode;
	if (n === null) return null;
	var r = Ga(n);
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
	if (n && typeof n != 'function') throw Error(A(231, e, typeof n));
	return n;
}
var wf = !1;
if (Qr)
	try {
		var Mo = {};
		Object.defineProperty(Mo, 'passive', {
			get: function () {
				wf = !0;
			},
		}),
			window.addEventListener('test', Mo, Mo),
			window.removeEventListener('test', Mo, Mo);
	} catch {
		wf = !1;
	}
function B1(t, e, n, r, i, s, o, l, u) {
	var a = Array.prototype.slice.call(arguments, 3);
	try {
		e.apply(n, a);
	} catch (c) {
		this.onError(c);
	}
}
var Jo = !1,
	ia = null,
	sa = !1,
	Sf = null,
	W1 = {
		onError: function (t) {
			(Jo = !0), (ia = t);
		},
	};
function b1(t, e, n, r, i, s, o, l, u) {
	(Jo = !1), (ia = null), B1.apply(W1, arguments);
}
function H1(t, e, n, r, i, s, o, l, u) {
	if ((b1.apply(this, arguments), Jo)) {
		if (Jo) {
			var a = ia;
			(Jo = !1), (ia = null);
		} else throw Error(A(198));
		sa || ((sa = !0), (Sf = a));
	}
}
function ws(t) {
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
function z_(t) {
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
function lp(t) {
	if (ws(t) !== t) throw Error(A(188));
}
function Y1(t) {
	var e = t.alternate;
	if (!e) {
		if (((e = ws(t)), e === null)) throw Error(A(188));
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
				if (s === n) return lp(i), t;
				if (s === r) return lp(i), e;
				s = s.sibling;
			}
			throw Error(A(188));
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
				if (!o) throw Error(A(189));
			}
		}
		if (n.alternate !== r) throw Error(A(190));
	}
	if (n.tag !== 3) throw Error(A(188));
	return n.stateNode.current === n ? t : e;
}
function L_(t) {
	return (t = Y1(t)), t !== null ? A_(t) : null;
}
function A_(t) {
	if (t.tag === 5 || t.tag === 6) return t;
	for (t = t.child; t !== null; ) {
		var e = A_(t);
		if (e !== null) return e;
		t = t.sibling;
	}
	return null;
}
var F_ = Mn.unstable_scheduleCallback,
	up = Mn.unstable_cancelCallback,
	Q1 = Mn.unstable_shouldYield,
	X1 = Mn.unstable_requestPaint,
	Je = Mn.unstable_now,
	G1 = Mn.unstable_getCurrentPriorityLevel,
	Id = Mn.unstable_ImmediatePriority,
	I_ = Mn.unstable_UserBlockingPriority,
	oa = Mn.unstable_NormalPriority,
	K1 = Mn.unstable_LowPriority,
	V_ = Mn.unstable_IdlePriority,
	Ha = null,
	Er = null;
function q1(t) {
	if (Er && typeof Er.onCommitFiberRoot == 'function')
		try {
			Er.onCommitFiberRoot(Ha, t, void 0, (t.current.flags & 128) === 128);
		} catch {}
}
var ar = Math.clz32 ? Math.clz32 : ey,
	Z1 = Math.log,
	J1 = Math.LN2;
function ey(t) {
	return (t >>>= 0), t === 0 ? 32 : (31 - ((Z1(t) / J1) | 0)) | 0;
}
var lu = 64,
	uu = 4194304;
function Wo(t) {
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
function la(t, e) {
	var n = t.pendingLanes;
	if (n === 0) return 0;
	var r = 0,
		i = t.suspendedLanes,
		s = t.pingedLanes,
		o = n & 268435455;
	if (o !== 0) {
		var l = o & ~i;
		l !== 0 ? (r = Wo(l)) : ((s &= o), s !== 0 && (r = Wo(s)));
	} else (o = n & ~i), o !== 0 ? (r = Wo(o)) : s !== 0 && (r = Wo(s));
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
function ty(t, e) {
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
function ny(t, e) {
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
			? (!(l & n) || l & r) && (i[o] = ty(l, e))
			: u <= e && (t.expiredLanes |= l),
			(s &= ~l);
	}
}
function kf(t) {
	return (
		(t = t.pendingLanes & -1073741825),
		t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
	);
}
function $_() {
	var t = lu;
	return (lu <<= 1), !(lu & 4194240) && (lu = 64), t;
}
function gc(t) {
	for (var e = [], n = 0; 31 > n; n++) e.push(t);
	return e;
}
function Ql(t, e, n) {
	(t.pendingLanes |= e),
		e !== 536870912 && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
		(t = t.eventTimes),
		(e = 31 - ar(e)),
		(t[e] = n);
}
function ry(t, e) {
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
function Vd(t, e) {
	var n = (t.entangledLanes |= e);
	for (t = t.entanglements; n; ) {
		var r = 31 - ar(n),
			i = 1 << r;
		(i & e) | (t[r] & e) && (t[r] |= e), (n &= ~i);
	}
}
var xe = 0;
function U_(t) {
	return (t &= -t), 1 < t ? (4 < t ? (t & 268435455 ? 16 : 536870912) : 4) : 1;
}
var B_,
	$d,
	W_,
	b_,
	H_,
	Tf = !1,
	au = [],
	mi = null,
	gi = null,
	vi = null,
	kl = new Map(),
	Tl = new Map(),
	oi = [],
	iy =
		'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
			' ',
		);
function ap(t, e) {
	switch (t) {
		case 'focusin':
		case 'focusout':
			mi = null;
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
			kl.delete(e.pointerId);
			break;
		case 'gotpointercapture':
		case 'lostpointercapture':
			Tl.delete(e.pointerId);
	}
}
function jo(t, e, n, r, i, s) {
	return t === null || t.nativeEvent !== s
		? ((t = {
				blockedOn: e,
				domEventName: n,
				eventSystemFlags: r,
				nativeEvent: s,
				targetContainers: [i],
			}),
			e !== null && ((e = Gl(e)), e !== null && $d(e)),
			t)
		: ((t.eventSystemFlags |= r),
			(e = t.targetContainers),
			i !== null && e.indexOf(i) === -1 && e.push(i),
			t);
}
function sy(t, e, n, r, i) {
	switch (e) {
		case 'focusin':
			return (mi = jo(mi, t, e, n, r, i)), !0;
		case 'dragenter':
			return (gi = jo(gi, t, e, n, r, i)), !0;
		case 'mouseover':
			return (vi = jo(vi, t, e, n, r, i)), !0;
		case 'pointerover':
			var s = i.pointerId;
			return kl.set(s, jo(kl.get(s) || null, t, e, n, r, i)), !0;
		case 'gotpointercapture':
			return (
				(s = i.pointerId), Tl.set(s, jo(Tl.get(s) || null, t, e, n, r, i)), !0
			);
	}
	return !1;
}
function Y_(t) {
	var e = Gi(t.target);
	if (e !== null) {
		var n = ws(e);
		if (n !== null) {
			if (((e = n.tag), e === 13)) {
				if (((e = z_(n)), e !== null)) {
					(t.blockedOn = e),
						H_(t.priority, function () {
							W_(n);
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
function Fu(t) {
	if (t.blockedOn !== null) return !1;
	for (var e = t.targetContainers; 0 < e.length; ) {
		var n = Ef(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
		if (n === null) {
			n = t.nativeEvent;
			var r = new n.constructor(n.type, n);
			(yf = r), n.target.dispatchEvent(r), (yf = null);
		} else return (e = Gl(n)), e !== null && $d(e), (t.blockedOn = n), !1;
		e.shift();
	}
	return !0;
}
function cp(t, e, n) {
	Fu(t) && n.delete(e);
}
function oy() {
	(Tf = !1),
		mi !== null && Fu(mi) && (mi = null),
		gi !== null && Fu(gi) && (gi = null),
		vi !== null && Fu(vi) && (vi = null),
		kl.forEach(cp),
		Tl.forEach(cp);
}
function Ro(t, e) {
	t.blockedOn === e &&
		((t.blockedOn = null),
		Tf ||
			((Tf = !0),
			Mn.unstable_scheduleCallback(Mn.unstable_NormalPriority, oy)));
}
function El(t) {
	function e(i) {
		return Ro(i, t);
	}
	if (0 < au.length) {
		Ro(au[0], t);
		for (var n = 1; n < au.length; n++) {
			var r = au[n];
			r.blockedOn === t && (r.blockedOn = null);
		}
	}
	for (
		mi !== null && Ro(mi, t),
			gi !== null && Ro(gi, t),
			vi !== null && Ro(vi, t),
			kl.forEach(e),
			Tl.forEach(e),
			n = 0;
		n < oi.length;
		n++
	)
		(r = oi[n]), r.blockedOn === t && (r.blockedOn = null);
	for (; 0 < oi.length && ((n = oi[0]), n.blockedOn === null); )
		Y_(n), n.blockedOn === null && oi.shift();
}
var Zs = Jr.ReactCurrentBatchConfig,
	ua = !0;
function ly(t, e, n, r) {
	var i = xe,
		s = Zs.transition;
	Zs.transition = null;
	try {
		(xe = 1), Ud(t, e, n, r);
	} finally {
		(xe = i), (Zs.transition = s);
	}
}
function uy(t, e, n, r) {
	var i = xe,
		s = Zs.transition;
	Zs.transition = null;
	try {
		(xe = 4), Ud(t, e, n, r);
	} finally {
		(xe = i), (Zs.transition = s);
	}
}
function Ud(t, e, n, r) {
	if (ua) {
		var i = Ef(t, e, n, r);
		if (i === null) Pc(t, e, r, aa, n), ap(t, r);
		else if (sy(i, t, e, n, r)) r.stopPropagation();
		else if ((ap(t, r), e & 4 && -1 < iy.indexOf(t))) {
			for (; i !== null; ) {
				var s = Gl(i);
				if (
					(s !== null && B_(s),
					(s = Ef(t, e, n, r)),
					s === null && Pc(t, e, r, aa, n),
					s === i)
				)
					break;
				i = s;
			}
			i !== null && r.stopPropagation();
		} else Pc(t, e, r, null, n);
	}
}
var aa = null;
function Ef(t, e, n, r) {
	if (((aa = null), (t = Fd(r)), (t = Gi(t)), t !== null))
		if (((e = ws(t)), e === null)) t = null;
		else if (((n = e.tag), n === 13)) {
			if (((t = z_(e)), t !== null)) return t;
			t = null;
		} else if (n === 3) {
			if (e.stateNode.current.memoizedState.isDehydrated)
				return e.tag === 3 ? e.stateNode.containerInfo : null;
			t = null;
		} else e !== t && (t = null);
	return (aa = t), null;
}
function Q_(t) {
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
			switch (G1()) {
				case Id:
					return 1;
				case I_:
					return 4;
				case oa:
				case K1:
					return 16;
				case V_:
					return 536870912;
				default:
					return 16;
			}
		default:
			return 16;
	}
}
var ui = null,
	Bd = null,
	Iu = null;
function X_() {
	if (Iu) return Iu;
	var t,
		e = Bd,
		n = e.length,
		r,
		i = 'value' in ui ? ui.value : ui.textContent,
		s = i.length;
	for (t = 0; t < n && e[t] === i[t]; t++);
	var o = n - t;
	for (r = 1; r <= o && e[n - r] === i[s - r]; r++);
	return (Iu = i.slice(t, 1 < r ? 1 - r : void 0));
}
function Vu(t) {
	var e = t.keyCode;
	return (
		'charCode' in t
			? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
			: (t = e),
		t === 10 && (t = 13),
		32 <= t || t === 13 ? t : 0
	);
}
function cu() {
	return !0;
}
function fp() {
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
				? cu
				: fp),
			(this.isPropagationStopped = fp),
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
					(this.isDefaultPrevented = cu));
			},
			stopPropagation: function () {
				var n = this.nativeEvent;
				n &&
					(n.stopPropagation
						? n.stopPropagation()
						: typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
					(this.isPropagationStopped = cu));
			},
			persist: function () {},
			isPersistent: cu,
		}),
		e
	);
}
var ko = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function (t) {
			return t.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0,
	},
	Wd = Dn(ko),
	Xl = He({}, ko, { view: 0, detail: 0 }),
	ay = Dn(Xl),
	vc,
	yc,
	Do,
	Ya = He({}, Xl, {
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
		getModifierState: bd,
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
				: (t !== Do &&
						(Do && t.type === 'mousemove'
							? ((vc = t.screenX - Do.screenX), (yc = t.screenY - Do.screenY))
							: (yc = vc = 0),
						(Do = t)),
					vc);
		},
		movementY: function (t) {
			return 'movementY' in t ? t.movementY : yc;
		},
	}),
	dp = Dn(Ya),
	cy = He({}, Ya, { dataTransfer: 0 }),
	fy = Dn(cy),
	dy = He({}, Xl, { relatedTarget: 0 }),
	xc = Dn(dy),
	hy = He({}, ko, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
	py = Dn(hy),
	_y = He({}, ko, {
		clipboardData: function (t) {
			return 'clipboardData' in t ? t.clipboardData : window.clipboardData;
		},
	}),
	my = Dn(_y),
	gy = He({}, ko, { data: 0 }),
	hp = Dn(gy),
	vy = {
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
	yy = {
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
	xy = {
		Alt: 'altKey',
		Control: 'ctrlKey',
		Meta: 'metaKey',
		Shift: 'shiftKey',
	};
function wy(t) {
	var e = this.nativeEvent;
	return e.getModifierState ? e.getModifierState(t) : (t = xy[t]) ? !!e[t] : !1;
}
function bd() {
	return wy;
}
var Sy = He({}, Xl, {
		key: function (t) {
			if (t.key) {
				var e = vy[t.key] || t.key;
				if (e !== 'Unidentified') return e;
			}
			return t.type === 'keypress'
				? ((t = Vu(t)), t === 13 ? 'Enter' : String.fromCharCode(t))
				: t.type === 'keydown' || t.type === 'keyup'
					? yy[t.keyCode] || 'Unidentified'
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
		getModifierState: bd,
		charCode: function (t) {
			return t.type === 'keypress' ? Vu(t) : 0;
		},
		keyCode: function (t) {
			return t.type === 'keydown' || t.type === 'keyup' ? t.keyCode : 0;
		},
		which: function (t) {
			return t.type === 'keypress'
				? Vu(t)
				: t.type === 'keydown' || t.type === 'keyup'
					? t.keyCode
					: 0;
		},
	}),
	ky = Dn(Sy),
	Ty = He({}, Ya, {
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
	pp = Dn(Ty),
	Ey = He({}, Xl, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: bd,
	}),
	Cy = Dn(Ey),
	Py = He({}, ko, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
	Ny = Dn(Py),
	Oy = He({}, Ya, {
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
	My = Dn(Oy),
	jy = [9, 13, 27, 32],
	Hd = Qr && 'CompositionEvent' in window,
	el = null;
Qr && 'documentMode' in document && (el = document.documentMode);
var Ry = Qr && 'TextEvent' in window && !el,
	G_ = Qr && (!Hd || (el && 8 < el && 11 >= el)),
	_p = ' ',
	mp = !1;
function K_(t, e) {
	switch (t) {
		case 'keyup':
			return jy.indexOf(e.keyCode) !== -1;
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
function q_(t) {
	return (t = t.detail), typeof t == 'object' && 'data' in t ? t.data : null;
}
var Ls = !1;
function Dy(t, e) {
	switch (t) {
		case 'compositionend':
			return q_(e);
		case 'keypress':
			return e.which !== 32 ? null : ((mp = !0), _p);
		case 'textInput':
			return (t = e.data), t === _p && mp ? null : t;
		default:
			return null;
	}
}
function zy(t, e) {
	if (Ls)
		return t === 'compositionend' || (!Hd && K_(t, e))
			? ((t = X_()), (Iu = Bd = ui = null), (Ls = !1), t)
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
			return G_ && e.locale !== 'ko' ? null : e.data;
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
function gp(t) {
	var e = t && t.nodeName && t.nodeName.toLowerCase();
	return e === 'input' ? !!Ly[t.type] : e === 'textarea';
}
function Z_(t, e, n, r) {
	O_(r),
		(e = ca(e, 'onChange')),
		0 < e.length &&
			((n = new Wd('onChange', 'change', null, n, r)),
			t.push({ event: n, listeners: e }));
}
var tl = null,
	Cl = null;
function Ay(t) {
	am(t, 0);
}
function Qa(t) {
	var e = Is(t);
	if (S_(e)) return t;
}
function Fy(t, e) {
	if (t === 'change') return e;
}
var J_ = !1;
if (Qr) {
	var wc;
	if (Qr) {
		var Sc = 'oninput' in document;
		if (!Sc) {
			var vp = document.createElement('div');
			vp.setAttribute('oninput', 'return;'),
				(Sc = typeof vp.oninput == 'function');
		}
		wc = Sc;
	} else wc = !1;
	J_ = wc && (!document.documentMode || 9 < document.documentMode);
}
function yp() {
	tl && (tl.detachEvent('onpropertychange', em), (Cl = tl = null));
}
function em(t) {
	if (t.propertyName === 'value' && Qa(Cl)) {
		var e = [];
		Z_(e, Cl, t, Fd(t)), D_(Ay, e);
	}
}
function Iy(t, e, n) {
	t === 'focusin'
		? (yp(), (tl = e), (Cl = n), tl.attachEvent('onpropertychange', em))
		: t === 'focusout' && yp();
}
function Vy(t) {
	if (t === 'selectionchange' || t === 'keyup' || t === 'keydown')
		return Qa(Cl);
}
function $y(t, e) {
	if (t === 'click') return Qa(e);
}
function Uy(t, e) {
	if (t === 'input' || t === 'change') return Qa(e);
}
function By(t, e) {
	return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
}
var fr = typeof Object.is == 'function' ? Object.is : By;
function Pl(t, e) {
	if (fr(t, e)) return !0;
	if (typeof t != 'object' || t === null || typeof e != 'object' || e === null)
		return !1;
	var n = Object.keys(t),
		r = Object.keys(e);
	if (n.length !== r.length) return !1;
	for (r = 0; r < n.length; r++) {
		var i = n[r];
		if (!lf.call(e, i) || !fr(t[i], e[i])) return !1;
	}
	return !0;
}
function xp(t) {
	for (; t && t.firstChild; ) t = t.firstChild;
	return t;
}
function wp(t, e) {
	var n = xp(t);
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
		n = xp(n);
	}
}
function tm(t, e) {
	return t && e
		? t === e
			? !0
			: t && t.nodeType === 3
				? !1
				: e && e.nodeType === 3
					? tm(t, e.parentNode)
					: 'contains' in t
						? t.contains(e)
						: t.compareDocumentPosition
							? !!(t.compareDocumentPosition(e) & 16)
							: !1
		: !1;
}
function nm() {
	for (var t = window, e = ra(); e instanceof t.HTMLIFrameElement; ) {
		try {
			var n = typeof e.contentWindow.location.href == 'string';
		} catch {
			n = !1;
		}
		if (n) t = e.contentWindow;
		else break;
		e = ra(t.document);
	}
	return e;
}
function Yd(t) {
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
function Wy(t) {
	var e = nm(),
		n = t.focusedElem,
		r = t.selectionRange;
	if (
		e !== n &&
		n &&
		n.ownerDocument &&
		tm(n.ownerDocument.documentElement, n)
	) {
		if (r !== null && Yd(n)) {
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
					(i = wp(n, s));
				var o = wp(n, r);
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
var by = Qr && 'documentMode' in document && 11 >= document.documentMode,
	As = null,
	Cf = null,
	nl = null,
	Pf = !1;
function Sp(t, e, n) {
	var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
	Pf ||
		As == null ||
		As !== ra(r) ||
		((r = As),
		'selectionStart' in r && Yd(r)
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
		(nl && Pl(nl, r)) ||
			((nl = r),
			(r = ca(Cf, 'onSelect')),
			0 < r.length &&
				((e = new Wd('onSelect', 'select', null, e, n)),
				t.push({ event: e, listeners: r }),
				(e.target = As))));
}
function fu(t, e) {
	var n = {};
	return (
		(n[t.toLowerCase()] = e.toLowerCase()),
		(n['Webkit' + t] = 'webkit' + e),
		(n['Moz' + t] = 'moz' + e),
		n
	);
}
var Fs = {
		animationend: fu('Animation', 'AnimationEnd'),
		animationiteration: fu('Animation', 'AnimationIteration'),
		animationstart: fu('Animation', 'AnimationStart'),
		transitionend: fu('Transition', 'TransitionEnd'),
	},
	kc = {},
	rm = {};
Qr &&
	((rm = document.createElement('div').style),
	'AnimationEvent' in window ||
		(delete Fs.animationend.animation,
		delete Fs.animationiteration.animation,
		delete Fs.animationstart.animation),
	'TransitionEvent' in window || delete Fs.transitionend.transition);
function Xa(t) {
	if (kc[t]) return kc[t];
	if (!Fs[t]) return t;
	var e = Fs[t],
		n;
	for (n in e) if (e.hasOwnProperty(n) && n in rm) return (kc[t] = e[n]);
	return t;
}
var im = Xa('animationend'),
	sm = Xa('animationiteration'),
	om = Xa('animationstart'),
	lm = Xa('transitionend'),
	um = new Map(),
	kp =
		'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
			' ',
		);
function Ri(t, e) {
	um.set(t, e), xs(e, [t]);
}
for (var Tc = 0; Tc < kp.length; Tc++) {
	var Ec = kp[Tc],
		Hy = Ec.toLowerCase(),
		Yy = Ec[0].toUpperCase() + Ec.slice(1);
	Ri(Hy, 'on' + Yy);
}
Ri(im, 'onAnimationEnd');
Ri(sm, 'onAnimationIteration');
Ri(om, 'onAnimationStart');
Ri('dblclick', 'onDoubleClick');
Ri('focusin', 'onFocus');
Ri('focusout', 'onBlur');
Ri(lm, 'onTransitionEnd');
lo('onMouseEnter', ['mouseout', 'mouseover']);
lo('onMouseLeave', ['mouseout', 'mouseover']);
lo('onPointerEnter', ['pointerout', 'pointerover']);
lo('onPointerLeave', ['pointerout', 'pointerover']);
xs(
	'onChange',
	'change click focusin focusout input keydown keyup selectionchange'.split(
		' ',
	),
);
xs(
	'onSelect',
	'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
		' ',
	),
);
xs('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
xs(
	'onCompositionEnd',
	'compositionend focusout keydown keypress keyup mousedown'.split(' '),
);
xs(
	'onCompositionStart',
	'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
);
xs(
	'onCompositionUpdate',
	'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
);
var bo =
		'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
			' ',
		),
	Qy = new Set('cancel close invalid load scroll toggle'.split(' ').concat(bo));
function Tp(t, e, n) {
	var r = t.type || 'unknown-event';
	(t.currentTarget = n), H1(r, e, void 0, t), (t.currentTarget = null);
}
function am(t, e) {
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
					Tp(i, l, a), (s = u);
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
					Tp(i, l, a), (s = u);
				}
		}
	}
	if (sa) throw ((t = Sf), (sa = !1), (Sf = null), t);
}
function Pe(t, e) {
	var n = e[Rf];
	n === void 0 && (n = e[Rf] = new Set());
	var r = t + '__bubble';
	n.has(r) || (cm(e, t, 2, !1), n.add(r));
}
function Cc(t, e, n) {
	var r = 0;
	e && (r |= 4), cm(n, t, r, e);
}
var du = '_reactListening' + Math.random().toString(36).slice(2);
function Nl(t) {
	if (!t[du]) {
		(t[du] = !0),
			g_.forEach(function (n) {
				n !== 'selectionchange' && (Qy.has(n) || Cc(n, !1, t), Cc(n, !0, t));
			});
		var e = t.nodeType === 9 ? t : t.ownerDocument;
		e === null || e[du] || ((e[du] = !0), Cc('selectionchange', !1, e));
	}
}
function cm(t, e, n, r) {
	switch (Q_(e)) {
		case 1:
			var i = ly;
			break;
		case 4:
			i = uy;
			break;
		default:
			i = Ud;
	}
	(n = i.bind(null, e, n, t)),
		(i = void 0),
		!wf ||
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
function Pc(t, e, n, r, i) {
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
					if (((o = Gi(l)), o === null)) return;
					if (((u = o.tag), u === 5 || u === 6)) {
						r = s = o;
						continue e;
					}
					l = l.parentNode;
				}
			}
			r = r.return;
		}
	D_(function () {
		var a = s,
			c = Fd(n),
			d = [];
		e: {
			var f = um.get(t);
			if (f !== void 0) {
				var h = Wd,
					g = t;
				switch (t) {
					case 'keypress':
						if (Vu(n) === 0) break e;
					case 'keydown':
					case 'keyup':
						h = ky;
						break;
					case 'focusin':
						(g = 'focus'), (h = xc);
						break;
					case 'focusout':
						(g = 'blur'), (h = xc);
						break;
					case 'beforeblur':
					case 'afterblur':
						h = xc;
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
						h = dp;
						break;
					case 'drag':
					case 'dragend':
					case 'dragenter':
					case 'dragexit':
					case 'dragleave':
					case 'dragover':
					case 'dragstart':
					case 'drop':
						h = fy;
						break;
					case 'touchcancel':
					case 'touchend':
					case 'touchmove':
					case 'touchstart':
						h = Cy;
						break;
					case im:
					case sm:
					case om:
						h = py;
						break;
					case lm:
						h = Ny;
						break;
					case 'scroll':
						h = ay;
						break;
					case 'wheel':
						h = My;
						break;
					case 'copy':
					case 'cut':
					case 'paste':
						h = my;
						break;
					case 'gotpointercapture':
					case 'lostpointercapture':
					case 'pointercancel':
					case 'pointerdown':
					case 'pointermove':
					case 'pointerout':
					case 'pointerover':
					case 'pointerup':
						h = pp;
				}
				var _ = (e & 4) !== 0,
					T = !_ && t === 'scroll',
					m = _ ? (f !== null ? f + 'Capture' : null) : f;
				_ = [];
				for (var p = a, v; p !== null; ) {
					v = p;
					var x = v.stateNode;
					if (
						(v.tag === 5 &&
							x !== null &&
							((v = x),
							m !== null && ((x = Sl(p, m)), x != null && _.push(Ol(p, x, v)))),
						T)
					)
						break;
					p = p.return;
				}
				0 < _.length &&
					((f = new h(f, g, null, n, c)), d.push({ event: f, listeners: _ }));
			}
		}
		if (!(e & 7)) {
			e: {
				if (
					((f = t === 'mouseover' || t === 'pointerover'),
					(h = t === 'mouseout' || t === 'pointerout'),
					f &&
						n !== yf &&
						(g = n.relatedTarget || n.fromElement) &&
						(Gi(g) || g[Xr]))
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
							(g = g ? Gi(g) : null),
							g !== null &&
								((T = ws(g)), g !== T || (g.tag !== 5 && g.tag !== 6)) &&
								(g = null))
						: ((h = null), (g = a)),
					h !== g)
				) {
					if (
						((_ = dp),
						(x = 'onMouseLeave'),
						(m = 'onMouseEnter'),
						(p = 'mouse'),
						(t === 'pointerout' || t === 'pointerover') &&
							((_ = pp),
							(x = 'onPointerLeave'),
							(m = 'onPointerEnter'),
							(p = 'pointer')),
						(T = h == null ? f : Is(h)),
						(v = g == null ? f : Is(g)),
						(f = new _(x, p + 'leave', h, n, c)),
						(f.target = T),
						(f.relatedTarget = v),
						(x = null),
						Gi(c) === a &&
							((_ = new _(m, p + 'enter', g, n, c)),
							(_.target = v),
							(_.relatedTarget = T),
							(x = _)),
						(T = x),
						h && g)
					)
						t: {
							for (_ = h, m = g, p = 0, v = _; v; v = Es(v)) p++;
							for (v = 0, x = m; x; x = Es(x)) v++;
							for (; 0 < p - v; ) (_ = Es(_)), p--;
							for (; 0 < v - p; ) (m = Es(m)), v--;
							for (; p--; ) {
								if (_ === m || (m !== null && _ === m.alternate)) break t;
								(_ = Es(_)), (m = Es(m));
							}
							_ = null;
						}
					else _ = null;
					h !== null && Ep(d, f, h, _, !1),
						g !== null && T !== null && Ep(d, T, g, _, !0);
				}
			}
			e: {
				if (
					((f = a ? Is(a) : window),
					(h = f.nodeName && f.nodeName.toLowerCase()),
					h === 'select' || (h === 'input' && f.type === 'file'))
				)
					var k = Fy;
				else if (gp(f))
					if (J_) k = Uy;
					else {
						k = Vy;
						var C = Iy;
					}
				else
					(h = f.nodeName) &&
						h.toLowerCase() === 'input' &&
						(f.type === 'checkbox' || f.type === 'radio') &&
						(k = $y);
				if (k && (k = k(t, a))) {
					Z_(d, k, n, c);
					break e;
				}
				C && C(t, f, a),
					t === 'focusout' &&
						(C = f._wrapperState) &&
						C.controlled &&
						f.type === 'number' &&
						pf(f, 'number', f.value);
			}
			switch (((C = a ? Is(a) : window), t)) {
				case 'focusin':
					(gp(C) || C.contentEditable === 'true') &&
						((As = C), (Cf = a), (nl = null));
					break;
				case 'focusout':
					nl = Cf = As = null;
					break;
				case 'mousedown':
					Pf = !0;
					break;
				case 'contextmenu':
				case 'mouseup':
				case 'dragend':
					(Pf = !1), Sp(d, n, c);
					break;
				case 'selectionchange':
					if (by) break;
				case 'keydown':
				case 'keyup':
					Sp(d, n, c);
			}
			var E;
			if (Hd)
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
					? K_(t, n) && (N = 'onCompositionEnd')
					: t === 'keydown' && n.keyCode === 229 && (N = 'onCompositionStart');
			N &&
				(G_ &&
					n.locale !== 'ko' &&
					(Ls || N !== 'onCompositionStart'
						? N === 'onCompositionEnd' && Ls && (E = X_())
						: ((ui = c),
							(Bd = 'value' in ui ? ui.value : ui.textContent),
							(Ls = !0))),
				(C = ca(a, N)),
				0 < C.length &&
					((N = new hp(N, t, null, n, c)),
					d.push({ event: N, listeners: C }),
					E ? (N.data = E) : ((E = q_(n)), E !== null && (N.data = E)))),
				(E = Ry ? Dy(t, n) : zy(t, n)) &&
					((a = ca(a, 'onBeforeInput')),
					0 < a.length &&
						((c = new hp('onBeforeInput', 'beforeinput', null, n, c)),
						d.push({ event: c, listeners: a }),
						(c.data = E)));
		}
		am(d, e);
	});
}
function Ol(t, e, n) {
	return { instance: t, listener: e, currentTarget: n };
}
function ca(t, e) {
	for (var n = e + 'Capture', r = []; t !== null; ) {
		var i = t,
			s = i.stateNode;
		i.tag === 5 &&
			s !== null &&
			((i = s),
			(s = Sl(t, n)),
			s != null && r.unshift(Ol(t, s, i)),
			(s = Sl(t, e)),
			s != null && r.push(Ol(t, s, i))),
			(t = t.return);
	}
	return r;
}
function Es(t) {
	if (t === null) return null;
	do t = t.return;
	while (t && t.tag !== 5);
	return t || null;
}
function Ep(t, e, n, r, i) {
	for (var s = e._reactName, o = []; n !== null && n !== r; ) {
		var l = n,
			u = l.alternate,
			a = l.stateNode;
		if (u !== null && u === r) break;
		l.tag === 5 &&
			a !== null &&
			((l = a),
			i
				? ((u = Sl(n, s)), u != null && o.unshift(Ol(n, u, l)))
				: i || ((u = Sl(n, s)), u != null && o.push(Ol(n, u, l)))),
			(n = n.return);
	}
	o.length !== 0 && t.push({ event: e, listeners: o });
}
var Xy = /\r\n?/g,
	Gy = /\u0000|\uFFFD/g;
function Cp(t) {
	return (typeof t == 'string' ? t : '' + t)
		.replace(
			Xy,
			`
`,
		)
		.replace(Gy, '');
}
function hu(t, e, n) {
	if (((e = Cp(e)), Cp(t) !== e && n)) throw Error(A(425));
}
function fa() {}
var Nf = null,
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
var jf = typeof setTimeout == 'function' ? setTimeout : void 0,
	Ky = typeof clearTimeout == 'function' ? clearTimeout : void 0,
	Pp = typeof Promise == 'function' ? Promise : void 0,
	qy =
		typeof queueMicrotask == 'function'
			? queueMicrotask
			: typeof Pp < 'u'
				? function (t) {
						return Pp.resolve(null).then(t).catch(Zy);
					}
				: jf;
function Zy(t) {
	setTimeout(function () {
		throw t;
	});
}
function Nc(t, e) {
	var n = e,
		r = 0;
	do {
		var i = n.nextSibling;
		if ((t.removeChild(n), i && i.nodeType === 8))
			if (((n = i.data), n === '/$')) {
				if (r === 0) {
					t.removeChild(i), El(e);
					return;
				}
				r--;
			} else (n !== '$' && n !== '$?' && n !== '$!') || r++;
		n = i;
	} while (n);
	El(e);
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
function Np(t) {
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
var To = Math.random().toString(36).slice(2),
	xr = '__reactFiber$' + To,
	Ml = '__reactProps$' + To,
	Xr = '__reactContainer$' + To,
	Rf = '__reactEvents$' + To,
	Jy = '__reactListeners$' + To,
	ex = '__reactHandles$' + To;
function Gi(t) {
	var e = t[xr];
	if (e) return e;
	for (var n = t.parentNode; n; ) {
		if ((e = n[Xr] || n[xr])) {
			if (
				((n = e.alternate),
				e.child !== null || (n !== null && n.child !== null))
			)
				for (t = Np(t); t !== null; ) {
					if ((n = t[xr])) return n;
					t = Np(t);
				}
			return e;
		}
		(t = n), (n = t.parentNode);
	}
	return null;
}
function Gl(t) {
	return (
		(t = t[xr] || t[Xr]),
		!t || (t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3) ? null : t
	);
}
function Is(t) {
	if (t.tag === 5 || t.tag === 6) return t.stateNode;
	throw Error(A(33));
}
function Ga(t) {
	return t[Ml] || null;
}
var Df = [],
	Vs = -1;
function Di(t) {
	return { current: t };
}
function Oe(t) {
	0 > Vs || ((t.current = Df[Vs]), (Df[Vs] = null), Vs--);
}
function Ee(t, e) {
	Vs++, (Df[Vs] = t.current), (t.current = e);
}
var Ni = {},
	Wt = Di(Ni),
	fn = Di(!1),
	cs = Ni;
function uo(t, e) {
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
function dn(t) {
	return (t = t.childContextTypes), t != null;
}
function da() {
	Oe(fn), Oe(Wt);
}
function Op(t, e, n) {
	if (Wt.current !== Ni) throw Error(A(168));
	Ee(Wt, e), Ee(fn, n);
}
function fm(t, e, n) {
	var r = t.stateNode;
	if (((e = e.childContextTypes), typeof r.getChildContext != 'function'))
		return n;
	r = r.getChildContext();
	for (var i in r) if (!(i in e)) throw Error(A(108, I1(t) || 'Unknown', i));
	return He({}, n, r);
}
function ha(t) {
	return (
		(t =
			((t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext) || Ni),
		(cs = Wt.current),
		Ee(Wt, t),
		Ee(fn, fn.current),
		!0
	);
}
function Mp(t, e, n) {
	var r = t.stateNode;
	if (!r) throw Error(A(169));
	n
		? ((t = fm(t, e, cs)),
			(r.__reactInternalMemoizedMergedChildContext = t),
			Oe(fn),
			Oe(Wt),
			Ee(Wt, t))
		: Oe(fn),
		Ee(fn, n);
}
var Ir = null,
	Ka = !1,
	Oc = !1;
function dm(t) {
	Ir === null ? (Ir = [t]) : Ir.push(t);
}
function tx(t) {
	(Ka = !0), dm(t);
}
function zi() {
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
			(Ir = null), (Ka = !1);
		} catch (i) {
			throw (Ir !== null && (Ir = Ir.slice(t + 1)), F_(Id, zi), i);
		} finally {
			(xe = e), (Oc = !1);
		}
	}
	return null;
}
var $s = [],
	Us = 0,
	pa = null,
	_a = 0,
	Fn = [],
	In = 0,
	fs = null,
	Br = 1,
	Wr = '';
function bi(t, e) {
	($s[Us++] = _a), ($s[Us++] = pa), (pa = t), (_a = e);
}
function hm(t, e, n) {
	(Fn[In++] = Br), (Fn[In++] = Wr), (Fn[In++] = fs), (fs = t);
	var r = Br;
	t = Wr;
	var i = 32 - ar(r) - 1;
	(r &= ~(1 << i)), (n += 1);
	var s = 32 - ar(e) + i;
	if (30 < s) {
		var o = i - (i % 5);
		(s = (r & ((1 << o) - 1)).toString(32)),
			(r >>= o),
			(i -= o),
			(Br = (1 << (32 - ar(e) + i)) | (n << i) | r),
			(Wr = s + t);
	} else (Br = (1 << s) | (n << i) | r), (Wr = t);
}
function Qd(t) {
	t.return !== null && (bi(t, 1), hm(t, 1, 0));
}
function Xd(t) {
	for (; t === pa; )
		(pa = $s[--Us]), ($s[Us] = null), (_a = $s[--Us]), ($s[Us] = null);
	for (; t === fs; )
		(fs = Fn[--In]),
			(Fn[In] = null),
			(Wr = Fn[--In]),
			(Fn[In] = null),
			(Br = Fn[--In]),
			(Fn[In] = null);
}
var Nn = null,
	Cn = null,
	Le = !1,
	or = null;
function pm(t, e) {
	var n = Un(5, null, null, 0);
	(n.elementType = 'DELETED'),
		(n.stateNode = e),
		(n.return = t),
		(e = t.deletions),
		e === null ? ((t.deletions = [n]), (t.flags |= 16)) : e.push(n);
}
function jp(t, e) {
	switch (t.tag) {
		case 5:
			var n = t.type;
			return (
				(e =
					e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase()
						? null
						: e),
				e !== null
					? ((t.stateNode = e), (Nn = t), (Cn = yi(e.firstChild)), !0)
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
					? ((n = fs !== null ? { id: Br, overflow: Wr } : null),
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
function zf(t) {
	return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
}
function Lf(t) {
	if (Le) {
		var e = Cn;
		if (e) {
			var n = e;
			if (!jp(t, e)) {
				if (zf(t)) throw Error(A(418));
				e = yi(n.nextSibling);
				var r = Nn;
				e && jp(t, e)
					? pm(r, n)
					: ((t.flags = (t.flags & -4097) | 2), (Le = !1), (Nn = t));
			}
		} else {
			if (zf(t)) throw Error(A(418));
			(t.flags = (t.flags & -4097) | 2), (Le = !1), (Nn = t);
		}
	}
}
function Rp(t) {
	for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; )
		t = t.return;
	Nn = t;
}
function pu(t) {
	if (t !== Nn) return !1;
	if (!Le) return Rp(t), (Le = !0), !1;
	var e;
	if (
		((e = t.tag !== 3) &&
			!(e = t.tag !== 5) &&
			((e = t.type),
			(e = e !== 'head' && e !== 'body' && !Mf(t.type, t.memoizedProps))),
		e && (e = Cn))
	) {
		if (zf(t)) throw (_m(), Error(A(418)));
		for (; e; ) pm(t, e), (e = yi(e.nextSibling));
	}
	if ((Rp(t), t.tag === 13)) {
		if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
			throw Error(A(317));
		e: {
			for (t = t.nextSibling, e = 0; t; ) {
				if (t.nodeType === 8) {
					var n = t.data;
					if (n === '/$') {
						if (e === 0) {
							Cn = yi(t.nextSibling);
							break e;
						}
						e--;
					} else (n !== '$' && n !== '$!' && n !== '$?') || e++;
				}
				t = t.nextSibling;
			}
			Cn = null;
		}
	} else Cn = Nn ? yi(t.stateNode.nextSibling) : null;
	return !0;
}
function _m() {
	for (var t = Cn; t; ) t = yi(t.nextSibling);
}
function ao() {
	(Cn = Nn = null), (Le = !1);
}
function Gd(t) {
	or === null ? (or = [t]) : or.push(t);
}
var nx = Jr.ReactCurrentBatchConfig;
function ir(t, e) {
	if (t && t.defaultProps) {
		(e = He({}, e)), (t = t.defaultProps);
		for (var n in t) e[n] === void 0 && (e[n] = t[n]);
		return e;
	}
	return e;
}
var ma = Di(null),
	ga = null,
	Bs = null,
	Kd = null;
function qd() {
	Kd = Bs = ga = null;
}
function Zd(t) {
	var e = ma.current;
	Oe(ma), (t._currentValue = e);
}
function Af(t, e, n) {
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
function Js(t, e) {
	(ga = t),
		(Kd = Bs = null),
		(t = t.dependencies),
		t !== null &&
			t.firstContext !== null &&
			(t.lanes & e && (cn = !0), (t.firstContext = null));
}
function Yn(t) {
	var e = t._currentValue;
	if (Kd !== t)
		if (((t = { context: t, memoizedValue: e, next: null }), Bs === null)) {
			if (ga === null) throw Error(A(308));
			(Bs = t), (ga.dependencies = { lanes: 0, firstContext: t });
		} else Bs = Bs.next = t;
	return e;
}
var Ki = null;
function Jd(t) {
	Ki === null ? (Ki = [t]) : Ki.push(t);
}
function mm(t, e, n, r) {
	var i = e.interleaved;
	return (
		i === null ? ((n.next = n), Jd(e)) : ((n.next = i.next), (i.next = n)),
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
function eh(t) {
	t.updateQueue = {
		baseState: t.memoizedState,
		firstBaseUpdate: null,
		lastBaseUpdate: null,
		shared: { pending: null, interleaved: null, lanes: 0 },
		effects: null,
	};
}
function gm(t, e) {
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
	if (((r = r.shared), me & 2)) {
		var i = r.pending;
		return (
			i === null ? (e.next = e) : ((e.next = i.next), (i.next = e)),
			(r.pending = e),
			Gr(t, n)
		);
	}
	return (
		(i = r.interleaved),
		i === null ? ((e.next = e), Jd(r)) : ((e.next = i.next), (i.next = e)),
		(r.interleaved = e),
		Gr(t, n)
	);
}
function $u(t, e, n) {
	if (
		((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194240) !== 0))
	) {
		var r = e.lanes;
		(r &= t.pendingLanes), (n |= r), (e.lanes = n), Vd(t, n);
	}
}
function Dp(t, e) {
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
function va(t, e, n, r) {
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
					var g = t,
						_ = l;
					switch (((f = e), (h = n), _.tag)) {
						case 1:
							if (((g = _.payload), typeof g == 'function')) {
								d = g.call(h, d, f);
								break e;
							}
							d = g;
							break e;
						case 3:
							g.flags = (g.flags & -65537) | 128;
						case 0:
							if (
								((g = _.payload),
								(f = typeof g == 'function' ? g.call(h, d, f) : g),
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
		(hs |= o), (t.lanes = o), (t.memoizedState = d);
	}
}
function zp(t, e, n) {
	if (((t = e.effects), (e.effects = null), t !== null))
		for (e = 0; e < t.length; e++) {
			var r = t[e],
				i = r.callback;
			if (i !== null) {
				if (((r.callback = null), (r = n), typeof i != 'function'))
					throw Error(A(191, i));
				i.call(r);
			}
		}
}
var vm = new m_.Component().refs;
function Ff(t, e, n, r) {
	(e = t.memoizedState),
		(n = n(r, e)),
		(n = n == null ? e : He({}, e, n)),
		(t.memoizedState = n),
		t.lanes === 0 && (t.updateQueue.baseState = n);
}
var qa = {
	isMounted: function (t) {
		return (t = t._reactInternals) ? ws(t) === t : !1;
	},
	enqueueSetState: function (t, e, n) {
		t = t._reactInternals;
		var r = tn(),
			i = Si(t),
			s = Hr(r, i);
		(s.payload = e),
			n != null && (s.callback = n),
			(e = xi(t, s, i)),
			e !== null && (cr(e, t, i, r), $u(e, t, i));
	},
	enqueueReplaceState: function (t, e, n) {
		t = t._reactInternals;
		var r = tn(),
			i = Si(t),
			s = Hr(r, i);
		(s.tag = 1),
			(s.payload = e),
			n != null && (s.callback = n),
			(e = xi(t, s, i)),
			e !== null && (cr(e, t, i, r), $u(e, t, i));
	},
	enqueueForceUpdate: function (t, e) {
		t = t._reactInternals;
		var n = tn(),
			r = Si(t),
			i = Hr(n, r);
		(i.tag = 2),
			e != null && (i.callback = e),
			(e = xi(t, i, r)),
			e !== null && (cr(e, t, r, n), $u(e, t, r));
	},
};
function Lp(t, e, n, r, i, s, o) {
	return (
		(t = t.stateNode),
		typeof t.shouldComponentUpdate == 'function'
			? t.shouldComponentUpdate(r, s, o)
			: e.prototype && e.prototype.isPureReactComponent
				? !Pl(n, r) || !Pl(i, s)
				: !0
	);
}
function ym(t, e, n) {
	var r = !1,
		i = Ni,
		s = e.contextType;
	return (
		typeof s == 'object' && s !== null
			? (s = Yn(s))
			: ((i = dn(e) ? cs : Wt.current),
				(r = e.contextTypes),
				(s = (r = r != null) ? uo(t, i) : Ni)),
		(e = new e(n, s)),
		(t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null),
		(e.updater = qa),
		(t.stateNode = e),
		(e._reactInternals = t),
		r &&
			((t = t.stateNode),
			(t.__reactInternalMemoizedUnmaskedChildContext = i),
			(t.__reactInternalMemoizedMaskedChildContext = s)),
		e
	);
}
function Ap(t, e, n, r) {
	(t = e.state),
		typeof e.componentWillReceiveProps == 'function' &&
			e.componentWillReceiveProps(n, r),
		typeof e.UNSAFE_componentWillReceiveProps == 'function' &&
			e.UNSAFE_componentWillReceiveProps(n, r),
		e.state !== t && qa.enqueueReplaceState(e, e.state, null);
}
function If(t, e, n, r) {
	var i = t.stateNode;
	(i.props = n), (i.state = t.memoizedState), (i.refs = vm), eh(t);
	var s = e.contextType;
	typeof s == 'object' && s !== null
		? (i.context = Yn(s))
		: ((s = dn(e) ? cs : Wt.current), (i.context = uo(t, s))),
		(i.state = t.memoizedState),
		(s = e.getDerivedStateFromProps),
		typeof s == 'function' && (Ff(t, e, s, n), (i.state = t.memoizedState)),
		typeof e.getDerivedStateFromProps == 'function' ||
			typeof i.getSnapshotBeforeUpdate == 'function' ||
			(typeof i.UNSAFE_componentWillMount != 'function' &&
				typeof i.componentWillMount != 'function') ||
			((e = i.state),
			typeof i.componentWillMount == 'function' && i.componentWillMount(),
			typeof i.UNSAFE_componentWillMount == 'function' &&
				i.UNSAFE_componentWillMount(),
			e !== i.state && qa.enqueueReplaceState(i, i.state, null),
			va(t, n, i, r),
			(i.state = t.memoizedState)),
		typeof i.componentDidMount == 'function' && (t.flags |= 4194308);
}
function zo(t, e, n) {
	if (
		((t = n.ref), t !== null && typeof t != 'function' && typeof t != 'object')
	) {
		if (n._owner) {
			if (((n = n._owner), n)) {
				if (n.tag !== 1) throw Error(A(309));
				var r = n.stateNode;
			}
			if (!r) throw Error(A(147, t));
			var i = r,
				s = '' + t;
			return e !== null &&
				e.ref !== null &&
				typeof e.ref == 'function' &&
				e.ref._stringRef === s
				? e.ref
				: ((e = function (o) {
						var l = i.refs;
						l === vm && (l = i.refs = {}),
							o === null ? delete l[s] : (l[s] = o);
					}),
					(e._stringRef = s),
					e);
		}
		if (typeof t != 'string') throw Error(A(284));
		if (!n._owner) throw Error(A(290, t));
	}
	return t;
}
function _u(t, e) {
	throw (
		((t = Object.prototype.toString.call(e)),
		Error(
			A(
				31,
				t === '[object Object]'
					? 'object with keys {' + Object.keys(e).join(', ') + '}'
					: t,
			),
		))
	);
}
function Fp(t) {
	var e = t._init;
	return e(t._payload);
}
function xm(t) {
	function e(m, p) {
		if (t) {
			var v = m.deletions;
			v === null ? ((m.deletions = [p]), (m.flags |= 16)) : v.push(p);
		}
	}
	function n(m, p) {
		if (!t) return null;
		for (; p !== null; ) e(m, p), (p = p.sibling);
		return null;
	}
	function r(m, p) {
		for (m = new Map(); p !== null; )
			p.key !== null ? m.set(p.key, p) : m.set(p.index, p), (p = p.sibling);
		return m;
	}
	function i(m, p) {
		return (m = ki(m, p)), (m.index = 0), (m.sibling = null), m;
	}
	function s(m, p, v) {
		return (
			(m.index = v),
			t
				? ((v = m.alternate),
					v !== null
						? ((v = v.index), v < p ? ((m.flags |= 2), p) : v)
						: ((m.flags |= 2), p))
				: ((m.flags |= 1048576), p)
		);
	}
	function o(m) {
		return t && m.alternate === null && (m.flags |= 2), m;
	}
	function l(m, p, v, x) {
		return p === null || p.tag !== 6
			? ((p = Ac(v, m.mode, x)), (p.return = m), p)
			: ((p = i(p, v)), (p.return = m), p);
	}
	function u(m, p, v, x) {
		var k = v.type;
		return k === zs
			? c(m, p, v.props.children, x, v.key)
			: p !== null &&
				  (p.elementType === k ||
						(typeof k == 'object' &&
							k !== null &&
							k.$$typeof === ii &&
							Fp(k) === p.type))
				? ((x = i(p, v.props)), (x.ref = zo(m, p, v)), (x.return = m), x)
				: ((x = Yu(v.type, v.key, v.props, null, m.mode, x)),
					(x.ref = zo(m, p, v)),
					(x.return = m),
					x);
	}
	function a(m, p, v, x) {
		return p === null ||
			p.tag !== 4 ||
			p.stateNode.containerInfo !== v.containerInfo ||
			p.stateNode.implementation !== v.implementation
			? ((p = Fc(v, m.mode, x)), (p.return = m), p)
			: ((p = i(p, v.children || [])), (p.return = m), p);
	}
	function c(m, p, v, x, k) {
		return p === null || p.tag !== 7
			? ((p = ns(v, m.mode, x, k)), (p.return = m), p)
			: ((p = i(p, v)), (p.return = m), p);
	}
	function d(m, p, v) {
		if ((typeof p == 'string' && p !== '') || typeof p == 'number')
			return (p = Ac('' + p, m.mode, v)), (p.return = m), p;
		if (typeof p == 'object' && p !== null) {
			switch (p.$$typeof) {
				case iu:
					return (
						(v = Yu(p.type, p.key, p.props, null, m.mode, v)),
						(v.ref = zo(m, null, p)),
						(v.return = m),
						v
					);
				case Ds:
					return (p = Fc(p, m.mode, v)), (p.return = m), p;
				case ii:
					var x = p._init;
					return d(m, x(p._payload), v);
			}
			if (Bo(p) || Oo(p))
				return (p = ns(p, m.mode, v, null)), (p.return = m), p;
			_u(m, p);
		}
		return null;
	}
	function f(m, p, v, x) {
		var k = p !== null ? p.key : null;
		if ((typeof v == 'string' && v !== '') || typeof v == 'number')
			return k !== null ? null : l(m, p, '' + v, x);
		if (typeof v == 'object' && v !== null) {
			switch (v.$$typeof) {
				case iu:
					return v.key === k ? u(m, p, v, x) : null;
				case Ds:
					return v.key === k ? a(m, p, v, x) : null;
				case ii:
					return (k = v._init), f(m, p, k(v._payload), x);
			}
			if (Bo(v) || Oo(v)) return k !== null ? null : c(m, p, v, x, null);
			_u(m, v);
		}
		return null;
	}
	function h(m, p, v, x, k) {
		if ((typeof x == 'string' && x !== '') || typeof x == 'number')
			return (m = m.get(v) || null), l(p, m, '' + x, k);
		if (typeof x == 'object' && x !== null) {
			switch (x.$$typeof) {
				case iu:
					return (m = m.get(x.key === null ? v : x.key) || null), u(p, m, x, k);
				case Ds:
					return (m = m.get(x.key === null ? v : x.key) || null), a(p, m, x, k);
				case ii:
					var C = x._init;
					return h(m, p, v, C(x._payload), k);
			}
			if (Bo(x) || Oo(x)) return (m = m.get(v) || null), c(p, m, x, k, null);
			_u(p, x);
		}
		return null;
	}
	function g(m, p, v, x) {
		for (
			var k = null, C = null, E = p, N = (p = 0), j = null;
			E !== null && N < v.length;
			N++
		) {
			E.index > N ? ((j = E), (E = null)) : (j = E.sibling);
			var M = f(m, E, v[N], x);
			if (M === null) {
				E === null && (E = j);
				break;
			}
			t && E && M.alternate === null && e(m, E),
				(p = s(M, p, N)),
				C === null ? (k = M) : (C.sibling = M),
				(C = M),
				(E = j);
		}
		if (N === v.length) return n(m, E), Le && bi(m, N), k;
		if (E === null) {
			for (; N < v.length; N++)
				(E = d(m, v[N], x)),
					E !== null &&
						((p = s(E, p, N)), C === null ? (k = E) : (C.sibling = E), (C = E));
			return Le && bi(m, N), k;
		}
		for (E = r(m, E); N < v.length; N++)
			(j = h(E, m, N, v[N], x)),
				j !== null &&
					(t && j.alternate !== null && E.delete(j.key === null ? N : j.key),
					(p = s(j, p, N)),
					C === null ? (k = j) : (C.sibling = j),
					(C = j));
		return (
			t &&
				E.forEach(function (H) {
					return e(m, H);
				}),
			Le && bi(m, N),
			k
		);
	}
	function _(m, p, v, x) {
		var k = Oo(v);
		if (typeof k != 'function') throw Error(A(150));
		if (((v = k.call(v)), v == null)) throw Error(A(151));
		for (
			var C = (k = null), E = p, N = (p = 0), j = null, M = v.next();
			E !== null && !M.done;
			N++, M = v.next()
		) {
			E.index > N ? ((j = E), (E = null)) : (j = E.sibling);
			var H = f(m, E, M.value, x);
			if (H === null) {
				E === null && (E = j);
				break;
			}
			t && E && H.alternate === null && e(m, E),
				(p = s(H, p, N)),
				C === null ? (k = H) : (C.sibling = H),
				(C = H),
				(E = j);
		}
		if (M.done) return n(m, E), Le && bi(m, N), k;
		if (E === null) {
			for (; !M.done; N++, M = v.next())
				(M = d(m, M.value, x)),
					M !== null &&
						((p = s(M, p, N)), C === null ? (k = M) : (C.sibling = M), (C = M));
			return Le && bi(m, N), k;
		}
		for (E = r(m, E); !M.done; N++, M = v.next())
			(M = h(E, m, N, M.value, x)),
				M !== null &&
					(t && M.alternate !== null && E.delete(M.key === null ? N : M.key),
					(p = s(M, p, N)),
					C === null ? (k = M) : (C.sibling = M),
					(C = M));
		return (
			t &&
				E.forEach(function (D) {
					return e(m, D);
				}),
			Le && bi(m, N),
			k
		);
	}
	function T(m, p, v, x) {
		if (
			(typeof v == 'object' &&
				v !== null &&
				v.type === zs &&
				v.key === null &&
				(v = v.props.children),
			typeof v == 'object' && v !== null)
		) {
			switch (v.$$typeof) {
				case iu:
					e: {
						for (var k = v.key, C = p; C !== null; ) {
							if (C.key === k) {
								if (((k = v.type), k === zs)) {
									if (C.tag === 7) {
										n(m, C.sibling),
											(p = i(C, v.props.children)),
											(p.return = m),
											(m = p);
										break e;
									}
								} else if (
									C.elementType === k ||
									(typeof k == 'object' &&
										k !== null &&
										k.$$typeof === ii &&
										Fp(k) === C.type)
								) {
									n(m, C.sibling),
										(p = i(C, v.props)),
										(p.ref = zo(m, C, v)),
										(p.return = m),
										(m = p);
									break e;
								}
								n(m, C);
								break;
							} else e(m, C);
							C = C.sibling;
						}
						v.type === zs
							? ((p = ns(v.props.children, m.mode, x, v.key)),
								(p.return = m),
								(m = p))
							: ((x = Yu(v.type, v.key, v.props, null, m.mode, x)),
								(x.ref = zo(m, p, v)),
								(x.return = m),
								(m = x));
					}
					return o(m);
				case Ds:
					e: {
						for (C = v.key; p !== null; ) {
							if (p.key === C)
								if (
									p.tag === 4 &&
									p.stateNode.containerInfo === v.containerInfo &&
									p.stateNode.implementation === v.implementation
								) {
									n(m, p.sibling),
										(p = i(p, v.children || [])),
										(p.return = m),
										(m = p);
									break e;
								} else {
									n(m, p);
									break;
								}
							else e(m, p);
							p = p.sibling;
						}
						(p = Fc(v, m.mode, x)), (p.return = m), (m = p);
					}
					return o(m);
				case ii:
					return (C = v._init), T(m, p, C(v._payload), x);
			}
			if (Bo(v)) return g(m, p, v, x);
			if (Oo(v)) return _(m, p, v, x);
			_u(m, v);
		}
		return (typeof v == 'string' && v !== '') || typeof v == 'number'
			? ((v = '' + v),
				p !== null && p.tag === 6
					? (n(m, p.sibling), (p = i(p, v)), (p.return = m), (m = p))
					: (n(m, p), (p = Ac(v, m.mode, x)), (p.return = m), (m = p)),
				o(m))
			: n(m, p);
	}
	return T;
}
var co = xm(!0),
	wm = xm(!1),
	Kl = {},
	Cr = Di(Kl),
	jl = Di(Kl),
	Rl = Di(Kl);
function qi(t) {
	if (t === Kl) throw Error(A(174));
	return t;
}
function th(t, e) {
	switch ((Ee(Rl, e), Ee(jl, t), Ee(Cr, Kl), (t = e.nodeType), t)) {
		case 9:
		case 11:
			e = (e = e.documentElement) ? e.namespaceURI : mf(null, '');
			break;
		default:
			(t = t === 8 ? e.parentNode : e),
				(e = t.namespaceURI || null),
				(t = t.tagName),
				(e = mf(e, t));
	}
	Oe(Cr), Ee(Cr, e);
}
function fo() {
	Oe(Cr), Oe(jl), Oe(Rl);
}
function Sm(t) {
	qi(Rl.current);
	var e = qi(Cr.current),
		n = mf(e, t.type);
	e !== n && (Ee(jl, t), Ee(Cr, n));
}
function nh(t) {
	jl.current === t && (Oe(Cr), Oe(jl));
}
var Ue = Di(0);
function ya(t) {
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
function rh() {
	for (var t = 0; t < Mc.length; t++)
		Mc[t]._workInProgressVersionPrimary = null;
	Mc.length = 0;
}
var Uu = Jr.ReactCurrentDispatcher,
	jc = Jr.ReactCurrentBatchConfig,
	ds = 0,
	be = null,
	ct = null,
	vt = null,
	xa = !1,
	rl = !1,
	Dl = 0,
	rx = 0;
function zt() {
	throw Error(A(321));
}
function ih(t, e) {
	if (e === null) return !1;
	for (var n = 0; n < e.length && n < t.length; n++)
		if (!fr(t[n], e[n])) return !1;
	return !0;
}
function sh(t, e, n, r, i, s) {
	if (
		((ds = s),
		(be = e),
		(e.memoizedState = null),
		(e.updateQueue = null),
		(e.lanes = 0),
		(Uu.current = t === null || t.memoizedState === null ? lx : ux),
		(t = n(r, i)),
		rl)
	) {
		s = 0;
		do {
			if (((rl = !1), (Dl = 0), 25 <= s)) throw Error(A(301));
			(s += 1),
				(vt = ct = null),
				(e.updateQueue = null),
				(Uu.current = ax),
				(t = n(r, i));
		} while (rl);
	}
	if (
		((Uu.current = wa),
		(e = ct !== null && ct.next !== null),
		(ds = 0),
		(vt = ct = be = null),
		(xa = !1),
		e)
	)
		throw Error(A(300));
	return t;
}
function oh() {
	var t = Dl !== 0;
	return (Dl = 0), t;
}
function gr() {
	var t = {
		memoizedState: null,
		baseState: null,
		baseQueue: null,
		queue: null,
		next: null,
	};
	return vt === null ? (be.memoizedState = vt = t) : (vt = vt.next = t), vt;
}
function Qn() {
	if (ct === null) {
		var t = be.alternate;
		t = t !== null ? t.memoizedState : null;
	} else t = ct.next;
	var e = vt === null ? be.memoizedState : vt.next;
	if (e !== null) (vt = e), (ct = t);
	else {
		if (t === null) throw Error(A(310));
		(ct = t),
			(t = {
				memoizedState: ct.memoizedState,
				baseState: ct.baseState,
				baseQueue: ct.baseQueue,
				queue: ct.queue,
				next: null,
			}),
			vt === null ? (be.memoizedState = vt = t) : (vt = vt.next = t);
	}
	return vt;
}
function zl(t, e) {
	return typeof e == 'function' ? e(t) : e;
}
function Rc(t) {
	var e = Qn(),
		n = e.queue;
	if (n === null) throw Error(A(311));
	n.lastRenderedReducer = t;
	var r = ct,
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
			if ((ds & c) === c)
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
					(hs |= c);
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
		do (s = i.lane), (be.lanes |= s), (hs |= s), (i = i.next);
		while (i !== t);
	} else i === null && (n.lanes = 0);
	return [e.memoizedState, n.dispatch];
}
function Dc(t) {
	var e = Qn(),
		n = e.queue;
	if (n === null) throw Error(A(311));
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
function km() {}
function Tm(t, e) {
	var n = be,
		r = Qn(),
		i = e(),
		s = !fr(r.memoizedState, i);
	if (
		(s && ((r.memoizedState = i), (cn = !0)),
		(r = r.queue),
		lh(Pm.bind(null, n, r, t), [t]),
		r.getSnapshot !== e || s || (vt !== null && vt.memoizedState.tag & 1))
	) {
		if (
			((n.flags |= 2048),
			Ll(9, Cm.bind(null, n, r, i, e), void 0, null),
			xt === null)
		)
			throw Error(A(349));
		ds & 30 || Em(n, e, i);
	}
	return i;
}
function Em(t, e, n) {
	(t.flags |= 16384),
		(t = { getSnapshot: e, value: n }),
		(e = be.updateQueue),
		e === null
			? ((e = { lastEffect: null, stores: null }),
				(be.updateQueue = e),
				(e.stores = [t]))
			: ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t));
}
function Cm(t, e, n, r) {
	(e.value = n), (e.getSnapshot = r), Nm(e) && Om(t);
}
function Pm(t, e, n) {
	return n(function () {
		Nm(e) && Om(t);
	});
}
function Nm(t) {
	var e = t.getSnapshot;
	t = t.value;
	try {
		var n = e();
		return !fr(t, n);
	} catch {
		return !0;
	}
}
function Om(t) {
	var e = Gr(t, 1);
	e !== null && cr(e, t, 1, -1);
}
function Ip(t) {
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
		(t = t.dispatch = ox.bind(null, be, t)),
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
function Mm() {
	return Qn().memoizedState;
}
function Bu(t, e, n, r) {
	var i = gr();
	(be.flags |= t),
		(i.memoizedState = Ll(1 | e, n, void 0, r === void 0 ? null : r));
}
function Za(t, e, n, r) {
	var i = Qn();
	r = r === void 0 ? null : r;
	var s = void 0;
	if (ct !== null) {
		var o = ct.memoizedState;
		if (((s = o.destroy), r !== null && ih(r, o.deps))) {
			i.memoizedState = Ll(e, n, s, r);
			return;
		}
	}
	(be.flags |= t), (i.memoizedState = Ll(1 | e, n, s, r));
}
function Vp(t, e) {
	return Bu(8390656, 8, t, e);
}
function lh(t, e) {
	return Za(2048, 8, t, e);
}
function jm(t, e) {
	return Za(4, 2, t, e);
}
function Rm(t, e) {
	return Za(4, 4, t, e);
}
function Dm(t, e) {
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
function zm(t, e, n) {
	return (
		(n = n != null ? n.concat([t]) : null), Za(4, 4, Dm.bind(null, e, t), n)
	);
}
function uh() {}
function Lm(t, e) {
	var n = Qn();
	e = e === void 0 ? null : e;
	var r = n.memoizedState;
	return r !== null && e !== null && ih(e, r[1])
		? r[0]
		: ((n.memoizedState = [t, e]), t);
}
function Am(t, e) {
	var n = Qn();
	e = e === void 0 ? null : e;
	var r = n.memoizedState;
	return r !== null && e !== null && ih(e, r[1])
		? r[0]
		: ((t = t()), (n.memoizedState = [t, e]), t);
}
function Fm(t, e, n) {
	return ds & 21
		? (fr(n, e) || ((n = $_()), (be.lanes |= n), (hs |= n), (t.baseState = !0)),
			e)
		: (t.baseState && ((t.baseState = !1), (cn = !0)), (t.memoizedState = n));
}
function ix(t, e) {
	var n = xe;
	(xe = n !== 0 && 4 > n ? n : 4), t(!0);
	var r = jc.transition;
	jc.transition = {};
	try {
		t(!1), e();
	} finally {
		(xe = n), (jc.transition = r);
	}
}
function Im() {
	return Qn().memoizedState;
}
function sx(t, e, n) {
	var r = Si(t);
	if (
		((n = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		}),
		Vm(t))
	)
		$m(e, n);
	else if (((n = mm(t, e, n, r)), n !== null)) {
		var i = tn();
		cr(n, t, r, i), Um(n, e, r);
	}
}
function ox(t, e, n) {
	var r = Si(t),
		i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
	if (Vm(t)) $m(e, i);
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
						? ((i.next = i), Jd(e))
						: ((i.next = u.next), (u.next = i)),
						(e.interleaved = i);
					return;
				}
			} catch {
			} finally {
			}
		(n = mm(t, e, i, r)),
			n !== null && ((i = tn()), cr(n, t, r, i), Um(n, e, r));
	}
}
function Vm(t) {
	var e = t.alternate;
	return t === be || (e !== null && e === be);
}
function $m(t, e) {
	rl = xa = !0;
	var n = t.pending;
	n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
		(t.pending = e);
}
function Um(t, e, n) {
	if (n & 4194240) {
		var r = e.lanes;
		(r &= t.pendingLanes), (n |= r), (e.lanes = n), Vd(t, n);
	}
}
var wa = {
		readContext: Yn,
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
	lx = {
		readContext: Yn,
		useCallback: function (t, e) {
			return (gr().memoizedState = [t, e === void 0 ? null : e]), t;
		},
		useContext: Yn,
		useEffect: Vp,
		useImperativeHandle: function (t, e, n) {
			return (
				(n = n != null ? n.concat([t]) : null),
				Bu(4194308, 4, Dm.bind(null, e, t), n)
			);
		},
		useLayoutEffect: function (t, e) {
			return Bu(4194308, 4, t, e);
		},
		useInsertionEffect: function (t, e) {
			return Bu(4, 2, t, e);
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
				(t = t.dispatch = sx.bind(null, be, t)),
				[r.memoizedState, t]
			);
		},
		useRef: function (t) {
			var e = gr();
			return (t = { current: t }), (e.memoizedState = t);
		},
		useState: Ip,
		useDebugValue: uh,
		useDeferredValue: function (t) {
			return (gr().memoizedState = t);
		},
		useTransition: function () {
			var t = Ip(!1),
				e = t[0];
			return (t = ix.bind(null, t[1])), (gr().memoizedState = t), [e, t];
		},
		useMutableSource: function () {},
		useSyncExternalStore: function (t, e, n) {
			var r = be,
				i = gr();
			if (Le) {
				if (n === void 0) throw Error(A(407));
				n = n();
			} else {
				if (((n = e()), xt === null)) throw Error(A(349));
				ds & 30 || Em(r, e, n);
			}
			i.memoizedState = n;
			var s = { value: n, getSnapshot: e };
			return (
				(i.queue = s),
				Vp(Pm.bind(null, r, s, t), [t]),
				(r.flags |= 2048),
				Ll(9, Cm.bind(null, r, s, n, e), void 0, null),
				n
			);
		},
		useId: function () {
			var t = gr(),
				e = xt.identifierPrefix;
			if (Le) {
				var n = Wr,
					r = Br;
				(n = (r & ~(1 << (32 - ar(r) - 1))).toString(32) + n),
					(e = ':' + e + 'R' + n),
					(n = Dl++),
					0 < n && (e += 'H' + n.toString(32)),
					(e += ':');
			} else (n = rx++), (e = ':' + e + 'r' + n.toString(32) + ':');
			return (t.memoizedState = e);
		},
		unstable_isNewReconciler: !1,
	},
	ux = {
		readContext: Yn,
		useCallback: Lm,
		useContext: Yn,
		useEffect: lh,
		useImperativeHandle: zm,
		useInsertionEffect: jm,
		useLayoutEffect: Rm,
		useMemo: Am,
		useReducer: Rc,
		useRef: Mm,
		useState: function () {
			return Rc(zl);
		},
		useDebugValue: uh,
		useDeferredValue: function (t) {
			var e = Qn();
			return Fm(e, ct.memoizedState, t);
		},
		useTransition: function () {
			var t = Rc(zl)[0],
				e = Qn().memoizedState;
			return [t, e];
		},
		useMutableSource: km,
		useSyncExternalStore: Tm,
		useId: Im,
		unstable_isNewReconciler: !1,
	},
	ax = {
		readContext: Yn,
		useCallback: Lm,
		useContext: Yn,
		useEffect: lh,
		useImperativeHandle: zm,
		useInsertionEffect: jm,
		useLayoutEffect: Rm,
		useMemo: Am,
		useReducer: Dc,
		useRef: Mm,
		useState: function () {
			return Dc(zl);
		},
		useDebugValue: uh,
		useDeferredValue: function (t) {
			var e = Qn();
			return ct === null ? (e.memoizedState = t) : Fm(e, ct.memoizedState, t);
		},
		useTransition: function () {
			var t = Dc(zl)[0],
				e = Qn().memoizedState;
			return [t, e];
		},
		useMutableSource: km,
		useSyncExternalStore: Tm,
		useId: Im,
		unstable_isNewReconciler: !1,
	};
function ho(t, e) {
	try {
		var n = '',
			r = e;
		do (n += F1(r)), (r = r.return);
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
function Vf(t, e) {
	try {
		console.error(e.value);
	} catch (n) {
		setTimeout(function () {
			throw n;
		});
	}
}
var cx = typeof WeakMap == 'function' ? WeakMap : Map;
function Bm(t, e, n) {
	(n = Hr(-1, n)), (n.tag = 3), (n.payload = { element: null });
	var r = e.value;
	return (
		(n.callback = function () {
			ka || ((ka = !0), (Gf = r)), Vf(t, e);
		}),
		n
	);
}
function Wm(t, e, n) {
	(n = Hr(-1, n)), (n.tag = 3);
	var r = t.type.getDerivedStateFromError;
	if (typeof r == 'function') {
		var i = e.value;
		(n.payload = function () {
			return r(i);
		}),
			(n.callback = function () {
				Vf(t, e);
			});
	}
	var s = t.stateNode;
	return (
		s !== null &&
			typeof s.componentDidCatch == 'function' &&
			(n.callback = function () {
				Vf(t, e),
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
function $p(t, e, n) {
	var r = t.pingCache;
	if (r === null) {
		r = t.pingCache = new cx();
		var i = new Set();
		r.set(e, i);
	} else (i = r.get(e)), i === void 0 && ((i = new Set()), r.set(e, i));
	i.has(n) || (i.add(n), (t = Tx.bind(null, t, e, n)), e.then(t, t));
}
function Up(t) {
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
function Bp(t, e, n, r, i) {
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
var fx = Jr.ReactCurrentOwner,
	cn = !1;
function Qt(t, e, n, r) {
	e.child = t === null ? wm(e, null, n, r) : co(e, t.child, n, r);
}
function Wp(t, e, n, r, i) {
	n = n.render;
	var s = e.ref;
	return (
		Js(e, i),
		(r = sh(t, e, n, r, s, i)),
		(n = oh()),
		t !== null && !cn
			? ((e.updateQueue = t.updateQueue),
				(e.flags &= -2053),
				(t.lanes &= ~i),
				Kr(t, e, i))
			: (Le && n && Qd(e), (e.flags |= 1), Qt(t, e, r, i), e.child)
	);
}
function bp(t, e, n, r, i) {
	if (t === null) {
		var s = n.type;
		return typeof s == 'function' &&
			!mh(s) &&
			s.defaultProps === void 0 &&
			n.compare === null &&
			n.defaultProps === void 0
			? ((e.tag = 15), (e.type = s), bm(t, e, s, r, i))
			: ((t = Yu(n.type, null, r, e, e.mode, i)),
				(t.ref = e.ref),
				(t.return = e),
				(e.child = t));
	}
	if (((s = t.child), !(t.lanes & i))) {
		var o = s.memoizedProps;
		if (
			((n = n.compare), (n = n !== null ? n : Pl), n(o, r) && t.ref === e.ref)
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
function bm(t, e, n, r, i) {
	if (t !== null) {
		var s = t.memoizedProps;
		if (Pl(s, r) && t.ref === e.ref)
			if (((cn = !1), (e.pendingProps = r = s), (t.lanes & i) !== 0))
				t.flags & 131072 && (cn = !0);
			else return (e.lanes = t.lanes), Kr(t, e, i);
	}
	return $f(t, e, n, r, i);
}
function Hm(t, e, n) {
	var r = e.pendingProps,
		i = r.children,
		s = t !== null ? t.memoizedState : null;
	if (r.mode === 'hidden')
		if (!(e.mode & 1))
			(e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				Ee(bs, wn),
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
					Ee(bs, wn),
					(wn |= t),
					null
				);
			(e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				(r = s !== null ? s.baseLanes : n),
				Ee(bs, wn),
				(wn |= r);
		}
	else
		s !== null ? ((r = s.baseLanes | n), (e.memoizedState = null)) : (r = n),
			Ee(bs, wn),
			(wn |= r);
	return Qt(t, e, i, n), e.child;
}
function Ym(t, e) {
	var n = e.ref;
	((t === null && n !== null) || (t !== null && t.ref !== n)) &&
		((e.flags |= 512), (e.flags |= 2097152));
}
function $f(t, e, n, r, i) {
	var s = dn(n) ? cs : Wt.current;
	return (
		(s = uo(e, s)),
		Js(e, i),
		(n = sh(t, e, n, r, s, i)),
		(r = oh()),
		t !== null && !cn
			? ((e.updateQueue = t.updateQueue),
				(e.flags &= -2053),
				(t.lanes &= ~i),
				Kr(t, e, i))
			: (Le && r && Qd(e), (e.flags |= 1), Qt(t, e, n, i), e.child)
	);
}
function Hp(t, e, n, r, i) {
	if (dn(n)) {
		var s = !0;
		ha(e);
	} else s = !1;
	if ((Js(e, i), e.stateNode === null))
		Wu(t, e), ym(e, n, r), If(e, n, r, i), (r = !0);
	else if (t === null) {
		var o = e.stateNode,
			l = e.memoizedProps;
		o.props = l;
		var u = o.context,
			a = n.contextType;
		typeof a == 'object' && a !== null
			? (a = Yn(a))
			: ((a = dn(n) ? cs : Wt.current), (a = uo(e, a)));
		var c = n.getDerivedStateFromProps,
			d =
				typeof c == 'function' ||
				typeof o.getSnapshotBeforeUpdate == 'function';
		d ||
			(typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
				typeof o.componentWillReceiveProps != 'function') ||
			((l !== r || u !== a) && Ap(e, o, r, a)),
			(si = !1);
		var f = e.memoizedState;
		(o.state = f),
			va(e, r, o, i),
			(u = e.memoizedState),
			l !== r || f !== u || fn.current || si
				? (typeof c == 'function' && (Ff(e, n, c, r), (u = e.memoizedState)),
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
			gm(t, e),
			(l = e.memoizedProps),
			(a = e.type === e.elementType ? l : ir(e.type, l)),
			(o.props = a),
			(d = e.pendingProps),
			(f = o.context),
			(u = n.contextType),
			typeof u == 'object' && u !== null
				? (u = Yn(u))
				: ((u = dn(n) ? cs : Wt.current), (u = uo(e, u)));
		var h = n.getDerivedStateFromProps;
		(c =
			typeof h == 'function' ||
			typeof o.getSnapshotBeforeUpdate == 'function') ||
			(typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
				typeof o.componentWillReceiveProps != 'function') ||
			((l !== d || f !== u) && Ap(e, o, r, u)),
			(si = !1),
			(f = e.memoizedState),
			(o.state = f),
			va(e, r, o, i);
		var g = e.memoizedState;
		l !== d || f !== g || fn.current || si
			? (typeof h == 'function' && (Ff(e, n, h, r), (g = e.memoizedState)),
				(a = si || Lp(e, n, a, r, f, g, u) || !1)
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
	return Uf(t, e, n, r, s, i);
}
function Uf(t, e, n, r, i, s) {
	Ym(t, e);
	var o = (e.flags & 128) !== 0;
	if (!r && !o) return i && Mp(e, n, !1), Kr(t, e, s);
	(r = e.stateNode), (fx.current = e);
	var l =
		o && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
	return (
		(e.flags |= 1),
		t !== null && o
			? ((e.child = co(e, t.child, null, s)), (e.child = co(e, null, l, s)))
			: Qt(t, e, l, s),
		(e.memoizedState = r.state),
		i && Mp(e, n, !0),
		e.child
	);
}
function Qm(t) {
	var e = t.stateNode;
	e.pendingContext
		? Op(t, e.pendingContext, e.pendingContext !== e.context)
		: e.context && Op(t, e.context, !1),
		th(t, e.containerInfo);
}
function Yp(t, e, n, r, i) {
	return ao(), Gd(i), (e.flags |= 256), Qt(t, e, n, r), e.child;
}
var Bf = { dehydrated: null, treeContext: null, retryLane: 0 };
function Wf(t) {
	return { baseLanes: t, cachePool: null, transitions: null };
}
function Xm(t, e, n) {
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
		Ee(Ue, i & 1),
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
								: (s = tc(o, r, 0, null)),
							(t = ns(t, r, n, null)),
							(s.return = e),
							(t.return = e),
							(s.sibling = t),
							(e.child = s),
							(e.child.memoizedState = Wf(n)),
							(e.memoizedState = Bf),
							t)
						: ah(e, o))
		);
	if (((i = t.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
		return dx(t, e, o, r, l, i, n);
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
			l !== null ? (s = ki(l, s)) : ((s = ns(s, o, n, null)), (s.flags |= 2)),
			(s.return = e),
			(r.return = e),
			(r.sibling = s),
			(e.child = r),
			(r = s),
			(s = e.child),
			(o = t.child.memoizedState),
			(o =
				o === null
					? Wf(n)
					: {
							baseLanes: o.baseLanes | n,
							cachePool: null,
							transitions: o.transitions,
						}),
			(s.memoizedState = o),
			(s.childLanes = t.childLanes & ~n),
			(e.memoizedState = Bf),
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
function ah(t, e) {
	return (
		(e = tc({ mode: 'visible', children: e }, t.mode, 0, null)),
		(e.return = t),
		(t.child = e)
	);
}
function mu(t, e, n, r) {
	return (
		r !== null && Gd(r),
		co(e, t.child, null, n),
		(t = ah(e, e.pendingProps.children)),
		(t.flags |= 2),
		(e.memoizedState = null),
		t
	);
}
function dx(t, e, n, r, i, s, o) {
	if (n)
		return e.flags & 256
			? ((e.flags &= -257), (r = zc(Error(A(422)))), mu(t, e, o, r))
			: e.memoizedState !== null
				? ((e.child = t.child), (e.flags |= 128), null)
				: ((s = r.fallback),
					(i = e.mode),
					(r = tc({ mode: 'visible', children: r.children }, i, 0, null)),
					(s = ns(s, i, o, null)),
					(s.flags |= 2),
					(r.return = e),
					(s.return = e),
					(r.sibling = s),
					(e.child = r),
					e.mode & 1 && co(e, t.child, null, o),
					(e.child.memoizedState = Wf(o)),
					(e.memoizedState = Bf),
					s);
	if (!(e.mode & 1)) return mu(t, e, o, null);
	if (i.data === '$!') {
		if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
		return (r = l), (s = Error(A(419))), (r = zc(s, r, void 0)), mu(t, e, o, r);
	}
	if (((l = (o & t.childLanes) !== 0), cn || l)) {
		if (((r = xt), r !== null)) {
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
					((s.retryLane = i), Gr(t, i), cr(r, t, i, -1));
		}
		return _h(), (r = zc(Error(A(421)))), mu(t, e, o, r);
	}
	return i.data === '$?'
		? ((e.flags |= 128),
			(e.child = t.child),
			(e = Ex.bind(null, t)),
			(i._reactRetry = e),
			null)
		: ((t = s.treeContext),
			(Cn = yi(i.nextSibling)),
			(Nn = e),
			(Le = !0),
			(or = null),
			t !== null &&
				((Fn[In++] = Br),
				(Fn[In++] = Wr),
				(Fn[In++] = fs),
				(Br = t.id),
				(Wr = t.overflow),
				(fs = e)),
			(e = ah(e, r.children)),
			(e.flags |= 4096),
			e);
}
function Qp(t, e, n) {
	t.lanes |= e;
	var r = t.alternate;
	r !== null && (r.lanes |= e), Af(t.return, e, n);
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
function Gm(t, e, n) {
	var r = e.pendingProps,
		i = r.revealOrder,
		s = r.tail;
	if ((Qt(t, e, r.children, n), (r = Ue.current), r & 2))
		(r = (r & 1) | 2), (e.flags |= 128);
	else {
		if (t !== null && t.flags & 128)
			e: for (t = e.child; t !== null; ) {
				if (t.tag === 13) t.memoizedState !== null && Qp(t, n, e);
				else if (t.tag === 19) Qp(t, n, e);
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
	if ((Ee(Ue, r), !(e.mode & 1))) e.memoizedState = null;
	else
		switch (i) {
			case 'forwards':
				for (n = e.child, i = null; n !== null; )
					(t = n.alternate),
						t !== null && ya(t) === null && (i = n),
						(n = n.sibling);
				(n = i),
					n === null
						? ((i = e.child), (e.child = null))
						: ((i = n.sibling), (n.sibling = null)),
					Lc(e, !1, i, n, s);
				break;
			case 'backwards':
				for (n = null, i = e.child, e.child = null; i !== null; ) {
					if (((t = i.alternate), t !== null && ya(t) === null)) {
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
function Wu(t, e) {
	!(e.mode & 1) &&
		t !== null &&
		((t.alternate = null), (e.alternate = null), (e.flags |= 2));
}
function Kr(t, e, n) {
	if (
		(t !== null && (e.dependencies = t.dependencies),
		(hs |= e.lanes),
		!(n & e.childLanes))
	)
		return null;
	if (t !== null && e.child !== t.child) throw Error(A(153));
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
function hx(t, e, n) {
	switch (e.tag) {
		case 3:
			Qm(e), ao();
			break;
		case 5:
			Sm(e);
			break;
		case 1:
			dn(e.type) && ha(e);
			break;
		case 4:
			th(e, e.stateNode.containerInfo);
			break;
		case 10:
			var r = e.type._context,
				i = e.memoizedProps.value;
			Ee(ma, r._currentValue), (r._currentValue = i);
			break;
		case 13:
			if (((r = e.memoizedState), r !== null))
				return r.dehydrated !== null
					? (Ee(Ue, Ue.current & 1), (e.flags |= 128), null)
					: n & e.child.childLanes
						? Xm(t, e, n)
						: (Ee(Ue, Ue.current & 1),
							(t = Kr(t, e, n)),
							t !== null ? t.sibling : null);
			Ee(Ue, Ue.current & 1);
			break;
		case 19:
			if (((r = (n & e.childLanes) !== 0), t.flags & 128)) {
				if (r) return Gm(t, e, n);
				e.flags |= 128;
			}
			if (
				((i = e.memoizedState),
				i !== null &&
					((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
				Ee(Ue, Ue.current),
				r)
			)
				break;
			return null;
		case 22:
		case 23:
			return (e.lanes = 0), Hm(t, e, n);
	}
	return Kr(t, e, n);
}
var Km, bf, qm, Zm;
Km = function (t, e) {
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
bf = function () {};
qm = function (t, e, n, r) {
	var i = t.memoizedProps;
	if (i !== r) {
		(t = e.stateNode), qi(Cr.current);
		var s = null;
		switch (n) {
			case 'input':
				(i = df(t, i)), (r = df(t, r)), (s = []);
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
					(t.onclick = fa);
		}
		gf(n, r);
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
						(xl.hasOwnProperty(a)
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
								(xl.hasOwnProperty(a)
									? (u != null && a === 'onScroll' && Pe('scroll', t),
										s || l === u || (s = []))
									: (s = s || []).push(a, u));
		}
		n && (s = s || []).push('style', n);
		var a = s;
		(e.updateQueue = a) && (e.flags |= 4);
	}
};
Zm = function (t, e, n, r) {
	n !== r && (e.flags |= 4);
};
function Lo(t, e) {
	if (!Le)
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
function px(t, e, n) {
	var r = e.pendingProps;
	switch ((Xd(e), e.tag)) {
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
			return dn(e.type) && da(), Lt(e), null;
		case 3:
			return (
				(r = e.stateNode),
				fo(),
				Oe(fn),
				Oe(Wt),
				rh(),
				r.pendingContext &&
					((r.context = r.pendingContext), (r.pendingContext = null)),
				(t === null || t.child === null) &&
					(pu(e)
						? (e.flags |= 4)
						: t === null ||
							(t.memoizedState.isDehydrated && !(e.flags & 256)) ||
							((e.flags |= 1024), or !== null && (Zf(or), (or = null)))),
				bf(t, e),
				Lt(e),
				null
			);
		case 5:
			nh(e);
			var i = qi(Rl.current);
			if (((n = e.type), t !== null && e.stateNode != null))
				qm(t, e, n, r, i),
					t.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152));
			else {
				if (!r) {
					if (e.stateNode === null) throw Error(A(166));
					return Lt(e), null;
				}
				if (((t = qi(Cr.current)), pu(e))) {
					(r = e.stateNode), (n = e.type);
					var s = e.memoizedProps;
					switch (((r[xr] = e), (r[Ml] = s), (t = (e.mode & 1) !== 0), n)) {
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
							for (i = 0; i < bo.length; i++) Pe(bo[i], r);
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
							np(r, s), Pe('invalid', r);
							break;
						case 'select':
							(r._wrapperState = { wasMultiple: !!s.multiple }),
								Pe('invalid', r);
							break;
						case 'textarea':
							ip(r, s), Pe('invalid', r);
					}
					gf(n, s), (i = null);
					for (var o in s)
						if (s.hasOwnProperty(o)) {
							var l = s[o];
							o === 'children'
								? typeof l == 'string'
									? r.textContent !== l &&
										(s.suppressHydrationWarning !== !0 &&
											hu(r.textContent, l, t),
										(i = ['children', l]))
									: typeof l == 'number' &&
										r.textContent !== '' + l &&
										(s.suppressHydrationWarning !== !0 &&
											hu(r.textContent, l, t),
										(i = ['children', '' + l]))
								: xl.hasOwnProperty(o) &&
									l != null &&
									o === 'onScroll' &&
									Pe('scroll', r);
						}
					switch (n) {
						case 'input':
							su(r), rp(r, s, !0);
							break;
						case 'textarea':
							su(r), sp(r);
							break;
						case 'select':
						case 'option':
							break;
						default:
							typeof s.onClick == 'function' && (r.onclick = fa);
					}
					(r = i), (e.updateQueue = r), r !== null && (e.flags |= 4);
				} else {
					(o = i.nodeType === 9 ? i : i.ownerDocument),
						t === 'http://www.w3.org/1999/xhtml' && (t = E_(n)),
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
						(t[Ml] = r),
						Km(t, e, !1, !1),
						(e.stateNode = t);
					e: {
						switch (((o = vf(n, r)), n)) {
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
								for (i = 0; i < bo.length; i++) Pe(bo[i], t);
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
								np(t, r), (i = df(t, r)), Pe('invalid', t);
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
								ip(t, r), (i = _f(t, r)), Pe('invalid', t);
								break;
							default:
								i = r;
						}
						gf(n, i), (l = i);
						for (s in l)
							if (l.hasOwnProperty(s)) {
								var u = l[s];
								s === 'style'
									? N_(t, u)
									: s === 'dangerouslySetInnerHTML'
										? ((u = u ? u.__html : void 0), u != null && C_(t, u))
										: s === 'children'
											? typeof u == 'string'
												? (n !== 'textarea' || u !== '') && wl(t, u)
												: typeof u == 'number' && wl(t, '' + u)
											: s !== 'suppressContentEditableWarning' &&
												s !== 'suppressHydrationWarning' &&
												s !== 'autoFocus' &&
												(xl.hasOwnProperty(s)
													? u != null && s === 'onScroll' && Pe('scroll', t)
													: u != null && Dd(t, s, u, o));
							}
						switch (n) {
							case 'input':
								su(t), rp(t, r, !1);
								break;
							case 'textarea':
								su(t), sp(t);
								break;
							case 'option':
								r.value != null && t.setAttribute('value', '' + Pi(r.value));
								break;
							case 'select':
								(t.multiple = !!r.multiple),
									(s = r.value),
									s != null
										? Gs(t, !!r.multiple, s, !1)
										: r.defaultValue != null &&
											Gs(t, !!r.multiple, r.defaultValue, !0);
								break;
							default:
								typeof i.onClick == 'function' && (t.onclick = fa);
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
			if (t && e.stateNode != null) Zm(t, e, t.memoizedProps, r);
			else {
				if (typeof r != 'string' && e.stateNode === null) throw Error(A(166));
				if (((n = qi(Rl.current)), qi(Cr.current), pu(e))) {
					if (
						((r = e.stateNode),
						(n = e.memoizedProps),
						(r[xr] = e),
						(s = r.nodeValue !== n) && ((t = Nn), t !== null))
					)
						switch (t.tag) {
							case 3:
								hu(r.nodeValue, n, (t.mode & 1) !== 0);
								break;
							case 5:
								t.memoizedProps.suppressHydrationWarning !== !0 &&
									hu(r.nodeValue, n, (t.mode & 1) !== 0);
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
				(Oe(Ue),
				(r = e.memoizedState),
				t === null ||
					(t.memoizedState !== null && t.memoizedState.dehydrated !== null))
			) {
				if (Le && Cn !== null && e.mode & 1 && !(e.flags & 128))
					_m(), ao(), (e.flags |= 98560), (s = !1);
				else if (((s = pu(e)), r !== null && r.dehydrated !== null)) {
					if (t === null) {
						if (!s) throw Error(A(318));
						if (
							((s = e.memoizedState),
							(s = s !== null ? s.dehydrated : null),
							!s)
						)
							throw Error(A(317));
						s[xr] = e;
					} else
						ao(), !(e.flags & 128) && (e.memoizedState = null), (e.flags |= 4);
					Lt(e), (s = !1);
				} else or !== null && (Zf(or), (or = null)), (s = !0);
				if (!s) return e.flags & 65536 ? e : null;
			}
			return e.flags & 128
				? ((e.lanes = n), e)
				: ((r = r !== null),
					r !== (t !== null && t.memoizedState !== null) &&
						r &&
						((e.child.flags |= 8192),
						e.mode & 1 &&
							(t === null || Ue.current & 1 ? dt === 0 && (dt = 3) : _h())),
					e.updateQueue !== null && (e.flags |= 4),
					Lt(e),
					null);
		case 4:
			return (
				fo(), bf(t, e), t === null && Nl(e.stateNode.containerInfo), Lt(e), null
			);
		case 10:
			return Zd(e.type._context), Lt(e), null;
		case 17:
			return dn(e.type) && da(), Lt(e), null;
		case 19:
			if ((Oe(Ue), (s = e.memoizedState), s === null)) return Lt(e), null;
			if (((r = (e.flags & 128) !== 0), (o = s.rendering), o === null))
				if (r) Lo(s, !1);
				else {
					if (dt !== 0 || (t !== null && t.flags & 128))
						for (t = e.child; t !== null; ) {
							if (((o = ya(t)), o !== null)) {
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
								return Ee(Ue, (Ue.current & 1) | 2), e.child;
							}
							t = t.sibling;
						}
					s.tail !== null &&
						Je() > po &&
						((e.flags |= 128), (r = !0), Lo(s, !1), (e.lanes = 4194304));
				}
			else {
				if (!r)
					if (((t = ya(o)), t !== null)) {
						if (
							((e.flags |= 128),
							(r = !0),
							(n = t.updateQueue),
							n !== null && ((e.updateQueue = n), (e.flags |= 4)),
							Lo(s, !0),
							s.tail === null && s.tailMode === 'hidden' && !o.alternate && !Le)
						)
							return Lt(e), null;
					} else
						2 * Je() - s.renderingStartTime > po &&
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
					(s.renderingStartTime = Je()),
					(e.sibling = null),
					(n = Ue.current),
					Ee(Ue, r ? (n & 1) | 2 : n & 1),
					e)
				: (Lt(e), null);
		case 22:
		case 23:
			return (
				ph(),
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
	throw Error(A(156, e.tag));
}
function _x(t, e) {
	switch ((Xd(e), e.tag)) {
		case 1:
			return (
				dn(e.type) && da(),
				(t = e.flags),
				t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
			);
		case 3:
			return (
				fo(),
				Oe(fn),
				Oe(Wt),
				rh(),
				(t = e.flags),
				t & 65536 && !(t & 128) ? ((e.flags = (t & -65537) | 128), e) : null
			);
		case 5:
			return nh(e), null;
		case 13:
			if (
				(Oe(Ue), (t = e.memoizedState), t !== null && t.dehydrated !== null)
			) {
				if (e.alternate === null) throw Error(A(340));
				ao();
			}
			return (
				(t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
			);
		case 19:
			return Oe(Ue), null;
		case 4:
			return fo(), null;
		case 10:
			return Zd(e.type._context), null;
		case 22:
		case 23:
			return ph(), null;
		case 24:
			return null;
		default:
			return null;
	}
}
var gu = !1,
	Vt = !1,
	mx = typeof WeakSet == 'function' ? WeakSet : Set,
	W = null;
function Ws(t, e) {
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
function Hf(t, e, n) {
	try {
		n();
	} catch (r) {
		Xe(t, e, r);
	}
}
var Xp = !1;
function gx(t, e) {
	if (((Nf = ua), (t = nm()), Yd(t))) {
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
	for (Of = { focusedElem: t, selectionRange: n }, ua = !1, W = e; W !== null; )
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
									var _ = g.memoizedProps,
										T = g.memoizedState,
										m = e.stateNode,
										p = m.getSnapshotBeforeUpdate(
											e.elementType === e.type ? _ : ir(e.type, _),
											T,
										);
									m.__reactInternalSnapshotBeforeUpdate = p;
								}
								break;
							case 3:
								var v = e.stateNode.containerInfo;
								v.nodeType === 1
									? (v.textContent = '')
									: v.nodeType === 9 &&
										v.documentElement &&
										v.removeChild(v.documentElement);
								break;
							case 5:
							case 6:
							case 4:
							case 17:
								break;
							default:
								throw Error(A(163));
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
	return (g = Xp), (Xp = !1), g;
}
function il(t, e, n) {
	var r = e.updateQueue;
	if (((r = r !== null ? r.lastEffect : null), r !== null)) {
		var i = (r = r.next);
		do {
			if ((i.tag & t) === t) {
				var s = i.destroy;
				(i.destroy = void 0), s !== void 0 && Hf(e, n, s);
			}
			i = i.next;
		} while (i !== r);
	}
}
function Ja(t, e) {
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
function Yf(t) {
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
function Jm(t) {
	var e = t.alternate;
	e !== null && ((t.alternate = null), Jm(e)),
		(t.child = null),
		(t.deletions = null),
		(t.sibling = null),
		t.tag === 5 &&
			((e = t.stateNode),
			e !== null &&
				(delete e[xr], delete e[Ml], delete e[Rf], delete e[Jy], delete e[ex])),
		(t.stateNode = null),
		(t.return = null),
		(t.dependencies = null),
		(t.memoizedProps = null),
		(t.memoizedState = null),
		(t.pendingProps = null),
		(t.stateNode = null),
		(t.updateQueue = null);
}
function eg(t) {
	return t.tag === 5 || t.tag === 3 || t.tag === 4;
}
function Gp(t) {
	e: for (;;) {
		for (; t.sibling === null; ) {
			if (t.return === null || eg(t.return)) return null;
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
function Qf(t, e, n) {
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
					n != null || e.onclick !== null || (e.onclick = fa));
	else if (r !== 4 && ((t = t.child), t !== null))
		for (Qf(t, e, n), t = t.sibling; t !== null; ) Qf(t, e, n), (t = t.sibling);
}
function Xf(t, e, n) {
	var r = t.tag;
	if (r === 5 || r === 6)
		(t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
	else if (r !== 4 && ((t = t.child), t !== null))
		for (Xf(t, e, n), t = t.sibling; t !== null; ) Xf(t, e, n), (t = t.sibling);
}
var Pt = null,
	sr = !1;
function ni(t, e, n) {
	for (n = n.child; n !== null; ) tg(t, e, n), (n = n.sibling);
}
function tg(t, e, n) {
	if (Er && typeof Er.onCommitFiberUnmount == 'function')
		try {
			Er.onCommitFiberUnmount(Ha, n);
		} catch {}
	switch (n.tag) {
		case 5:
			Vt || Ws(n, e);
		case 6:
			var r = Pt,
				i = sr;
			(Pt = null),
				ni(t, e, n),
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
							? Nc(t.parentNode, n)
							: t.nodeType === 1 && Nc(t, n),
						El(t))
					: Nc(Pt, n.stateNode));
			break;
		case 4:
			(r = Pt),
				(i = sr),
				(Pt = n.stateNode.containerInfo),
				(sr = !0),
				ni(t, e, n),
				(Pt = r),
				(sr = i);
			break;
		case 0:
		case 11:
		case 14:
		case 15:
			if (
				!Vt &&
				((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
			) {
				i = r = r.next;
				do {
					var s = i,
						o = s.destroy;
					(s = s.tag),
						o !== void 0 && (s & 2 || s & 4) && Hf(n, e, o),
						(i = i.next);
				} while (i !== r);
			}
			ni(t, e, n);
			break;
		case 1:
			if (
				!Vt &&
				(Ws(n, e),
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
				? ((Vt = (r = Vt) || n.memoizedState !== null), ni(t, e, n), (Vt = r))
				: ni(t, e, n);
			break;
		default:
			ni(t, e, n);
	}
}
function Kp(t) {
	var e = t.updateQueue;
	if (e !== null) {
		t.updateQueue = null;
		var n = t.stateNode;
		n === null && (n = t.stateNode = new mx()),
			e.forEach(function (r) {
				var i = Cx.bind(null, t, r);
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
				if (Pt === null) throw Error(A(160));
				tg(s, o, i), (Pt = null), (sr = !1);
				var u = i.alternate;
				u !== null && (u.return = null), (i.return = null);
			} catch (a) {
				Xe(i, e, a);
			}
		}
	if (e.subtreeFlags & 12854)
		for (e = e.child; e !== null; ) ng(e, t), (e = e.sibling);
}
function ng(t, e) {
	var n = t.alternate,
		r = t.flags;
	switch (t.tag) {
		case 0:
		case 11:
		case 14:
		case 15:
			if ((nr(e, t), mr(t), r & 4)) {
				try {
					il(3, t, t.return), Ja(3, t);
				} catch (_) {
					Xe(t, t.return, _);
				}
				try {
					il(5, t, t.return);
				} catch (_) {
					Xe(t, t.return, _);
				}
			}
			break;
		case 1:
			nr(e, t), mr(t), r & 512 && n !== null && Ws(n, n.return);
			break;
		case 5:
			if (
				(nr(e, t),
				mr(t),
				r & 512 && n !== null && Ws(n, n.return),
				t.flags & 32)
			) {
				var i = t.stateNode;
				try {
					wl(i, '');
				} catch (_) {
					Xe(t, t.return, _);
				}
			}
			if (r & 4 && ((i = t.stateNode), i != null)) {
				var s = t.memoizedProps,
					o = n !== null ? n.memoizedProps : s,
					l = t.type,
					u = t.updateQueue;
				if (((t.updateQueue = null), u !== null))
					try {
						l === 'input' && s.type === 'radio' && s.name != null && k_(i, s),
							vf(l, o);
						var a = vf(l, s);
						for (o = 0; o < u.length; o += 2) {
							var c = u[o],
								d = u[o + 1];
							c === 'style'
								? N_(i, d)
								: c === 'dangerouslySetInnerHTML'
									? C_(i, d)
									: c === 'children'
										? wl(i, d)
										: Dd(i, c, d, a);
						}
						switch (l) {
							case 'input':
								hf(i, s);
								break;
							case 'textarea':
								T_(i, s);
								break;
							case 'select':
								var f = i._wrapperState.wasMultiple;
								i._wrapperState.wasMultiple = !!s.multiple;
								var h = s.value;
								h != null
									? Gs(i, !!s.multiple, h, !1)
									: f !== !!s.multiple &&
										(s.defaultValue != null
											? Gs(i, !!s.multiple, s.defaultValue, !0)
											: Gs(i, !!s.multiple, s.multiple ? [] : '', !1));
						}
						i[Ml] = s;
					} catch (_) {
						Xe(t, t.return, _);
					}
			}
			break;
		case 6:
			if ((nr(e, t), mr(t), r & 4)) {
				if (t.stateNode === null) throw Error(A(162));
				(i = t.stateNode), (s = t.memoizedProps);
				try {
					i.nodeValue = s;
				} catch (_) {
					Xe(t, t.return, _);
				}
			}
			break;
		case 3:
			if (
				(nr(e, t), mr(t), r & 4 && n !== null && n.memoizedState.isDehydrated)
			)
				try {
					El(e.containerInfo);
				} catch (_) {
					Xe(t, t.return, _);
				}
			break;
		case 4:
			nr(e, t), mr(t);
			break;
		case 13:
			nr(e, t),
				mr(t),
				(i = t.child),
				i.flags & 8192 &&
					((s = i.memoizedState !== null),
					(i.stateNode.isHidden = s),
					!s ||
						(i.alternate !== null && i.alternate.memoizedState !== null) ||
						(dh = Je())),
				r & 4 && Kp(t);
			break;
		case 22:
			if (
				((c = n !== null && n.memoizedState !== null),
				t.mode & 1 ? ((Vt = (a = Vt) || c), nr(e, t), (Vt = a)) : nr(e, t),
				mr(t),
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
									il(4, f, f.return);
									break;
								case 1:
									Ws(f, f.return);
									var g = f.stateNode;
									if (typeof g.componentWillUnmount == 'function') {
										(r = f), (n = f.return);
										try {
											(e = r),
												(g.props = e.memoizedProps),
												(g.state = e.memoizedState),
												g.componentWillUnmount();
										} catch (_) {
											Xe(r, n, _);
										}
									}
									break;
								case 5:
									Ws(f, f.return);
									break;
								case 22:
									if (f.memoizedState !== null) {
										Zp(d);
										continue;
									}
							}
							h !== null ? ((h.return = f), (W = h)) : Zp(d);
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
											(l.style.display = P_('display', o)));
							} catch (_) {
								Xe(t, t.return, _);
							}
						}
					} else if (d.tag === 6) {
						if (c === null)
							try {
								d.stateNode.nodeValue = a ? '' : d.memoizedProps;
							} catch (_) {
								Xe(t, t.return, _);
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
			nr(e, t), mr(t), r & 4 && Kp(t);
			break;
		case 21:
			break;
		default:
			nr(e, t), mr(t);
	}
}
function mr(t) {
	var e = t.flags;
	if (e & 2) {
		try {
			e: {
				for (var n = t.return; n !== null; ) {
					if (eg(n)) {
						var r = n;
						break e;
					}
					n = n.return;
				}
				throw Error(A(160));
			}
			switch (r.tag) {
				case 5:
					var i = r.stateNode;
					r.flags & 32 && (wl(i, ''), (r.flags &= -33));
					var s = Gp(t);
					Xf(t, s, i);
					break;
				case 3:
				case 4:
					var o = r.stateNode.containerInfo,
						l = Gp(t);
					Qf(t, l, o);
					break;
				default:
					throw Error(A(161));
			}
		} catch (u) {
			Xe(t, t.return, u);
		}
		t.flags &= -3;
	}
	e & 4096 && (t.flags &= -4097);
}
function vx(t, e, n) {
	(W = t), rg(t);
}
function rg(t, e, n) {
	for (var r = (t.mode & 1) !== 0; W !== null; ) {
		var i = W,
			s = i.child;
		if (i.tag === 22 && r) {
			var o = i.memoizedState !== null || gu;
			if (!o) {
				var l = i.alternate,
					u = (l !== null && l.memoizedState !== null) || Vt;
				l = gu;
				var a = Vt;
				if (((gu = o), (Vt = u) && !a))
					for (W = i; W !== null; )
						(o = W),
							(u = o.child),
							o.tag === 22 && o.memoizedState !== null
								? Jp(i)
								: u !== null
									? ((u.return = o), (W = u))
									: Jp(i);
				for (; s !== null; ) (W = s), rg(s), (s = s.sibling);
				(W = i), (gu = l), (Vt = a);
			}
			qp(t);
		} else
			i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (W = s)) : qp(t);
	}
}
function qp(t) {
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
							Vt || Ja(5, e);
							break;
						case 1:
							var r = e.stateNode;
							if (e.flags & 4 && !Vt)
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
										d !== null && El(d);
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
							throw Error(A(163));
					}
				Vt || (e.flags & 512 && Yf(e));
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
function Zp(t) {
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
function Jp(t) {
	for (; W !== null; ) {
		var e = W;
		try {
			switch (e.tag) {
				case 0:
				case 11:
				case 15:
					var n = e.return;
					try {
						Ja(4, e);
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
						Yf(e);
					} catch (u) {
						Xe(e, s, u);
					}
					break;
				case 5:
					var o = e.return;
					try {
						Yf(e);
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
var yx = Math.ceil,
	Sa = Jr.ReactCurrentDispatcher,
	ch = Jr.ReactCurrentOwner,
	bn = Jr.ReactCurrentBatchConfig,
	me = 0,
	xt = null,
	it = null,
	Ot = 0,
	wn = 0,
	bs = Di(0),
	dt = 0,
	Al = null,
	hs = 0,
	ec = 0,
	fh = 0,
	sl = null,
	an = null,
	dh = 0,
	po = 1 / 0,
	Ar = null,
	ka = !1,
	Gf = null,
	wi = null,
	vu = !1,
	ai = null,
	Ta = 0,
	ol = 0,
	Kf = null,
	bu = -1,
	Hu = 0;
function tn() {
	return me & 6 ? Je() : bu !== -1 ? bu : (bu = Je());
}
function Si(t) {
	return t.mode & 1
		? me & 2 && Ot !== 0
			? Ot & -Ot
			: nx.transition !== null
				? (Hu === 0 && (Hu = $_()), Hu)
				: ((t = xe),
					t !== 0 || ((t = window.event), (t = t === void 0 ? 16 : Q_(t.type))),
					t)
		: 1;
}
function cr(t, e, n, r) {
	if (50 < ol) throw ((ol = 0), (Kf = null), Error(A(185)));
	Ql(t, n, r),
		(!(me & 2) || t !== xt) &&
			(t === xt && (!(me & 2) && (ec |= n), dt === 4 && li(t, Ot)),
			hn(t, r),
			n === 1 && me === 0 && !(e.mode & 1) && ((po = Je() + 500), Ka && zi()));
}
function hn(t, e) {
	var n = t.callbackNode;
	ny(t, e);
	var r = la(t, t === xt ? Ot : 0);
	if (r === 0)
		n !== null && up(n), (t.callbackNode = null), (t.callbackPriority = 0);
	else if (((e = r & -r), t.callbackPriority !== e)) {
		if ((n != null && up(n), e === 1))
			t.tag === 0 ? tx(e0.bind(null, t)) : dm(e0.bind(null, t)),
				qy(function () {
					!(me & 6) && zi();
				}),
				(n = null);
		else {
			switch (U_(r)) {
				case 1:
					n = Id;
					break;
				case 4:
					n = I_;
					break;
				case 16:
					n = oa;
					break;
				case 536870912:
					n = V_;
					break;
				default:
					n = oa;
			}
			n = fg(n, ig.bind(null, t));
		}
		(t.callbackPriority = e), (t.callbackNode = n);
	}
}
function ig(t, e) {
	if (((bu = -1), (Hu = 0), me & 6)) throw Error(A(327));
	var n = t.callbackNode;
	if (eo() && t.callbackNode !== n) return null;
	var r = la(t, t === xt ? Ot : 0);
	if (r === 0) return null;
	if (r & 30 || r & t.expiredLanes || e) e = Ea(t, r);
	else {
		e = r;
		var i = me;
		me |= 2;
		var s = og();
		(xt !== t || Ot !== e) && ((Ar = null), (po = Je() + 500), ts(t, e));
		do
			try {
				Sx();
				break;
			} catch (l) {
				sg(t, l);
			}
		while (!0);
		qd(),
			(Sa.current = s),
			(me = i),
			it !== null ? (e = 0) : ((xt = null), (Ot = 0), (e = dt));
	}
	if (e !== 0) {
		if (
			(e === 2 && ((i = kf(t)), i !== 0 && ((r = i), (e = qf(t, i)))), e === 1)
		)
			throw ((n = Al), ts(t, 0), li(t, r), hn(t, Je()), n);
		if (e === 6) li(t, r);
		else {
			if (
				((i = t.current.alternate),
				!(r & 30) &&
					!xx(i) &&
					((e = Ea(t, r)),
					e === 2 && ((s = kf(t)), s !== 0 && ((r = s), (e = qf(t, s)))),
					e === 1))
			)
				throw ((n = Al), ts(t, 0), li(t, r), hn(t, Je()), n);
			switch (((t.finishedWork = i), (t.finishedLanes = r), e)) {
				case 0:
				case 1:
					throw Error(A(345));
				case 2:
					Hi(t, an, Ar);
					break;
				case 3:
					if (
						(li(t, r), (r & 130023424) === r && ((e = dh + 500 - Je()), 10 < e))
					) {
						if (la(t, 0) !== 0) break;
						if (((i = t.suspendedLanes), (i & r) !== r)) {
							tn(), (t.pingedLanes |= t.suspendedLanes & i);
							break;
						}
						t.timeoutHandle = jf(Hi.bind(null, t, an, Ar), e);
						break;
					}
					Hi(t, an, Ar);
					break;
				case 4:
					if ((li(t, r), (r & 4194240) === r)) break;
					for (e = t.eventTimes, i = -1; 0 < r; ) {
						var o = 31 - ar(r);
						(s = 1 << o), (o = e[o]), o > i && (i = o), (r &= ~s);
					}
					if (
						((r = i),
						(r = Je() - r),
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
													: 1960 * yx(r / 1960)) - r),
						10 < r)
					) {
						t.timeoutHandle = jf(Hi.bind(null, t, an, Ar), r);
						break;
					}
					Hi(t, an, Ar);
					break;
				case 5:
					Hi(t, an, Ar);
					break;
				default:
					throw Error(A(329));
			}
		}
	}
	return hn(t, Je()), t.callbackNode === n ? ig.bind(null, t) : null;
}
function qf(t, e) {
	var n = sl;
	return (
		t.current.memoizedState.isDehydrated && (ts(t, e).flags |= 256),
		(t = Ea(t, e)),
		t !== 2 && ((e = an), (an = n), e !== null && Zf(e)),
		t
	);
}
function Zf(t) {
	an === null ? (an = t) : an.push.apply(an, t);
}
function xx(t) {
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
function li(t, e) {
	for (
		e &= ~fh,
			e &= ~ec,
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
function e0(t) {
	if (me & 6) throw Error(A(327));
	eo();
	var e = la(t, 0);
	if (!(e & 1)) return hn(t, Je()), null;
	var n = Ea(t, e);
	if (t.tag !== 0 && n === 2) {
		var r = kf(t);
		r !== 0 && ((e = r), (n = qf(t, r)));
	}
	if (n === 1) throw ((n = Al), ts(t, 0), li(t, e), hn(t, Je()), n);
	if (n === 6) throw Error(A(345));
	return (
		(t.finishedWork = t.current.alternate),
		(t.finishedLanes = e),
		Hi(t, an, Ar),
		hn(t, Je()),
		null
	);
}
function hh(t, e) {
	var n = me;
	me |= 1;
	try {
		return t(e);
	} finally {
		(me = n), me === 0 && ((po = Je() + 500), Ka && zi());
	}
}
function ps(t) {
	ai !== null && ai.tag === 0 && !(me & 6) && eo();
	var e = me;
	me |= 1;
	var n = bn.transition,
		r = xe;
	try {
		if (((bn.transition = null), (xe = 1), t)) return t();
	} finally {
		(xe = r), (bn.transition = n), (me = e), !(me & 6) && zi();
	}
}
function ph() {
	(wn = bs.current), Oe(bs);
}
function ts(t, e) {
	(t.finishedWork = null), (t.finishedLanes = 0);
	var n = t.timeoutHandle;
	if ((n !== -1 && ((t.timeoutHandle = -1), Ky(n)), it !== null))
		for (n = it.return; n !== null; ) {
			var r = n;
			switch ((Xd(r), r.tag)) {
				case 1:
					(r = r.type.childContextTypes), r != null && da();
					break;
				case 3:
					fo(), Oe(fn), Oe(Wt), rh();
					break;
				case 5:
					nh(r);
					break;
				case 4:
					fo();
					break;
				case 13:
					Oe(Ue);
					break;
				case 19:
					Oe(Ue);
					break;
				case 10:
					Zd(r.type._context);
					break;
				case 22:
				case 23:
					ph();
			}
			n = n.return;
		}
	if (
		((xt = t),
		(it = t = ki(t.current, null)),
		(Ot = wn = e),
		(dt = 0),
		(Al = null),
		(fh = ec = hs = 0),
		(an = sl = null),
		Ki !== null)
	) {
		for (e = 0; e < Ki.length; e++)
			if (((n = Ki[e]), (r = n.interleaved), r !== null)) {
				n.interleaved = null;
				var i = r.next,
					s = n.pending;
				if (s !== null) {
					var o = s.next;
					(s.next = i), (r.next = o);
				}
				n.pending = r;
			}
		Ki = null;
	}
	return t;
}
function sg(t, e) {
	do {
		var n = it;
		try {
			if ((qd(), (Uu.current = wa), xa)) {
				for (var r = be.memoizedState; r !== null; ) {
					var i = r.queue;
					i !== null && (i.pending = null), (r = r.next);
				}
				xa = !1;
			}
			if (
				((ds = 0),
				(vt = ct = be = null),
				(rl = !1),
				(Dl = 0),
				(ch.current = null),
				n === null || n.return === null)
			) {
				(dt = 1), (Al = e), (it = null);
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
					var h = Up(o);
					if (h !== null) {
						(h.flags &= -257),
							Bp(h, o, l, s, e),
							h.mode & 1 && $p(s, a, e),
							(e = h),
							(u = a);
						var g = e.updateQueue;
						if (g === null) {
							var _ = new Set();
							_.add(u), (e.updateQueue = _);
						} else g.add(u);
						break e;
					} else {
						if (!(e & 1)) {
							$p(s, a, e), _h();
							break e;
						}
						u = Error(A(426));
					}
				} else if (Le && l.mode & 1) {
					var T = Up(o);
					if (T !== null) {
						!(T.flags & 65536) && (T.flags |= 256),
							Bp(T, o, l, s, e),
							Gd(ho(u, l));
						break e;
					}
				}
				(s = u = ho(u, l)),
					dt !== 4 && (dt = 2),
					sl === null ? (sl = [s]) : sl.push(s),
					(s = o);
				do {
					switch (s.tag) {
						case 3:
							(s.flags |= 65536), (e &= -e), (s.lanes |= e);
							var m = Bm(s, u, e);
							Dp(s, m);
							break e;
						case 1:
							l = u;
							var p = s.type,
								v = s.stateNode;
							if (
								!(s.flags & 128) &&
								(typeof p.getDerivedStateFromError == 'function' ||
									(v !== null &&
										typeof v.componentDidCatch == 'function' &&
										(wi === null || !wi.has(v))))
							) {
								(s.flags |= 65536), (e &= -e), (s.lanes |= e);
								var x = Wm(s, l, e);
								Dp(s, x);
								break e;
							}
					}
					s = s.return;
				} while (s !== null);
			}
			ug(n);
		} catch (k) {
			(e = k), it === n && n !== null && (it = n = n.return);
			continue;
		}
		break;
	} while (!0);
}
function og() {
	var t = Sa.current;
	return (Sa.current = wa), t === null ? wa : t;
}
function _h() {
	(dt === 0 || dt === 3 || dt === 2) && (dt = 4),
		xt === null || (!(hs & 268435455) && !(ec & 268435455)) || li(xt, Ot);
}
function Ea(t, e) {
	var n = me;
	me |= 2;
	var r = og();
	(xt !== t || Ot !== e) && ((Ar = null), ts(t, e));
	do
		try {
			wx();
			break;
		} catch (i) {
			sg(t, i);
		}
	while (!0);
	if ((qd(), (me = n), (Sa.current = r), it !== null)) throw Error(A(261));
	return (xt = null), (Ot = 0), dt;
}
function wx() {
	for (; it !== null; ) lg(it);
}
function Sx() {
	for (; it !== null && !Q1(); ) lg(it);
}
function lg(t) {
	var e = cg(t.alternate, t, wn);
	(t.memoizedProps = t.pendingProps),
		e === null ? ug(t) : (it = e),
		(ch.current = null);
}
function ug(t) {
	var e = t;
	do {
		var n = e.alternate;
		if (((t = e.return), e.flags & 32768)) {
			if (((n = _x(n, e)), n !== null)) {
				(n.flags &= 32767), (it = n);
				return;
			}
			if (t !== null)
				(t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null);
			else {
				(dt = 6), (it = null);
				return;
			}
		} else if (((n = px(n, e, wn)), n !== null)) {
			it = n;
			return;
		}
		if (((e = e.sibling), e !== null)) {
			it = e;
			return;
		}
		it = e = t;
	} while (e !== null);
	dt === 0 && (dt = 5);
}
function Hi(t, e, n) {
	var r = xe,
		i = bn.transition;
	try {
		(bn.transition = null), (xe = 1), kx(t, e, n, r);
	} finally {
		(bn.transition = i), (xe = r);
	}
	return null;
}
function kx(t, e, n, r) {
	do eo();
	while (ai !== null);
	if (me & 6) throw Error(A(327));
	n = t.finishedWork;
	var i = t.finishedLanes;
	if (n === null) return null;
	if (((t.finishedWork = null), (t.finishedLanes = 0), n === t.current))
		throw Error(A(177));
	(t.callbackNode = null), (t.callbackPriority = 0);
	var s = n.lanes | n.childLanes;
	if (
		(ry(t, s),
		t === xt && ((it = xt = null), (Ot = 0)),
		(!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
			vu ||
			((vu = !0),
			fg(oa, function () {
				return eo(), null;
			})),
		(s = (n.flags & 15990) !== 0),
		n.subtreeFlags & 15990 || s)
	) {
		(s = bn.transition), (bn.transition = null);
		var o = xe;
		xe = 1;
		var l = me;
		(me |= 4),
			(ch.current = null),
			gx(t, n),
			ng(n, t),
			Wy(Of),
			(ua = !!Nf),
			(Of = Nf = null),
			(t.current = n),
			vx(n),
			X1(),
			(me = l),
			(xe = o),
			(bn.transition = s);
	} else t.current = n;
	if (
		(vu && ((vu = !1), (ai = t), (Ta = i)),
		(s = t.pendingLanes),
		s === 0 && (wi = null),
		q1(n.stateNode),
		hn(t, Je()),
		e !== null)
	)
		for (r = t.onRecoverableError, n = 0; n < e.length; n++)
			(i = e[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
	if (ka) throw ((ka = !1), (t = Gf), (Gf = null), t);
	return (
		Ta & 1 && t.tag !== 0 && eo(),
		(s = t.pendingLanes),
		s & 1 ? (t === Kf ? ol++ : ((ol = 0), (Kf = t))) : (ol = 0),
		zi(),
		null
	);
}
function eo() {
	if (ai !== null) {
		var t = U_(Ta),
			e = bn.transition,
			n = xe;
		try {
			if (((bn.transition = null), (xe = 16 > t ? 16 : t), ai === null))
				var r = !1;
			else {
				if (((t = ai), (ai = null), (Ta = 0), me & 6)) throw Error(A(331));
				var i = me;
				for (me |= 4, W = t.current; W !== null; ) {
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
											il(8, c, s);
									}
									var d = c.child;
									if (d !== null) (d.return = c), (W = d);
									else
										for (; W !== null; ) {
											c = W;
											var f = c.sibling,
												h = c.return;
											if ((Jm(c), c === a)) {
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
								var _ = g.child;
								if (_ !== null) {
									g.child = null;
									do {
										var T = _.sibling;
										(_.sibling = null), (_ = T);
									} while (_ !== null);
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
										il(9, s, s.return);
								}
							var m = s.sibling;
							if (m !== null) {
								(m.return = s.return), (W = m);
								break e;
							}
							W = s.return;
						}
				}
				var p = t.current;
				for (W = p; W !== null; ) {
					o = W;
					var v = o.child;
					if (o.subtreeFlags & 2064 && v !== null) (v.return = o), (W = v);
					else
						e: for (o = p; W !== null; ) {
							if (((l = W), l.flags & 2048))
								try {
									switch (l.tag) {
										case 0:
										case 11:
										case 15:
											Ja(9, l);
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
					((me = i), zi(), Er && typeof Er.onPostCommitFiberRoot == 'function')
				)
					try {
						Er.onPostCommitFiberRoot(Ha, t);
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
function t0(t, e, n) {
	(e = ho(n, e)),
		(e = Bm(t, e, 1)),
		(t = xi(t, e, 1)),
		(e = tn()),
		t !== null && (Ql(t, 1, e), hn(t, e));
}
function Xe(t, e, n) {
	if (t.tag === 3) t0(t, t, n);
	else
		for (; e !== null; ) {
			if (e.tag === 3) {
				t0(e, t, n);
				break;
			} else if (e.tag === 1) {
				var r = e.stateNode;
				if (
					typeof e.type.getDerivedStateFromError == 'function' ||
					(typeof r.componentDidCatch == 'function' &&
						(wi === null || !wi.has(r)))
				) {
					(t = ho(n, t)),
						(t = Wm(e, t, 1)),
						(e = xi(e, t, 1)),
						(t = tn()),
						e !== null && (Ql(e, 1, t), hn(e, t));
					break;
				}
			}
			e = e.return;
		}
}
function Tx(t, e, n) {
	var r = t.pingCache;
	r !== null && r.delete(e),
		(e = tn()),
		(t.pingedLanes |= t.suspendedLanes & n),
		xt === t &&
			(Ot & n) === n &&
			(dt === 4 || (dt === 3 && (Ot & 130023424) === Ot && 500 > Je() - dh)
				? ts(t, 0)
				: (fh |= n)),
		hn(t, e);
}
function ag(t, e) {
	e === 0 &&
		(t.mode & 1
			? ((e = uu), (uu <<= 1), !(uu & 130023424) && (uu = 4194304))
			: (e = 1));
	var n = tn();
	(t = Gr(t, e)), t !== null && (Ql(t, e, n), hn(t, n));
}
function Ex(t) {
	var e = t.memoizedState,
		n = 0;
	e !== null && (n = e.retryLane), ag(t, n);
}
function Cx(t, e) {
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
			throw Error(A(314));
	}
	r !== null && r.delete(e), ag(t, n);
}
var cg;
cg = function (t, e, n) {
	if (t !== null)
		if (t.memoizedProps !== e.pendingProps || fn.current) cn = !0;
		else {
			if (!(t.lanes & n) && !(e.flags & 128)) return (cn = !1), hx(t, e, n);
			cn = !!(t.flags & 131072);
		}
	else (cn = !1), Le && e.flags & 1048576 && hm(e, _a, e.index);
	switch (((e.lanes = 0), e.tag)) {
		case 2:
			var r = e.type;
			Wu(t, e), (t = e.pendingProps);
			var i = uo(e, Wt.current);
			Js(e, n), (i = sh(null, e, r, t, i, n));
			var s = oh();
			return (
				(e.flags |= 1),
				typeof i == 'object' &&
				i !== null &&
				typeof i.render == 'function' &&
				i.$$typeof === void 0
					? ((e.tag = 1),
						(e.memoizedState = null),
						(e.updateQueue = null),
						dn(r) ? ((s = !0), ha(e)) : (s = !1),
						(e.memoizedState =
							i.state !== null && i.state !== void 0 ? i.state : null),
						eh(e),
						(i.updater = qa),
						(e.stateNode = i),
						(i._reactInternals = e),
						If(e, r, t, n),
						(e = Uf(null, e, r, !0, s, n)))
					: ((e.tag = 0), Le && s && Qd(e), Qt(null, e, i, n), (e = e.child)),
				e
			);
		case 16:
			r = e.elementType;
			e: {
				switch (
					(Wu(t, e),
					(t = e.pendingProps),
					(i = r._init),
					(r = i(r._payload)),
					(e.type = r),
					(i = e.tag = Nx(r)),
					(t = ir(r, t)),
					i)
				) {
					case 0:
						e = $f(null, e, r, t, n);
						break e;
					case 1:
						e = Hp(null, e, r, t, n);
						break e;
					case 11:
						e = Wp(null, e, r, t, n);
						break e;
					case 14:
						e = bp(null, e, r, ir(r.type, t), n);
						break e;
				}
				throw Error(A(306, r, ''));
			}
			return e;
		case 0:
			return (
				(r = e.type),
				(i = e.pendingProps),
				(i = e.elementType === r ? i : ir(r, i)),
				$f(t, e, r, i, n)
			);
		case 1:
			return (
				(r = e.type),
				(i = e.pendingProps),
				(i = e.elementType === r ? i : ir(r, i)),
				Hp(t, e, r, i, n)
			);
		case 3:
			e: {
				if ((Qm(e), t === null)) throw Error(A(387));
				(r = e.pendingProps),
					(s = e.memoizedState),
					(i = s.element),
					gm(t, e),
					va(e, r, null, n);
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
						(i = ho(Error(A(423)), e)), (e = Yp(t, e, r, n, i));
						break e;
					} else if (r !== i) {
						(i = ho(Error(A(424)), e)), (e = Yp(t, e, r, n, i));
						break e;
					} else
						for (
							Cn = yi(e.stateNode.containerInfo.firstChild),
								Nn = e,
								Le = !0,
								or = null,
								n = wm(e, null, r, n),
								e.child = n;
							n;

						)
							(n.flags = (n.flags & -3) | 4096), (n = n.sibling);
				else {
					if ((ao(), r === i)) {
						e = Kr(t, e, n);
						break e;
					}
					Qt(t, e, r, n);
				}
				e = e.child;
			}
			return e;
		case 5:
			return (
				Sm(e),
				t === null && Lf(e),
				(r = e.type),
				(i = e.pendingProps),
				(s = t !== null ? t.memoizedProps : null),
				(o = i.children),
				Mf(r, i) ? (o = null) : s !== null && Mf(r, s) && (e.flags |= 32),
				Ym(t, e),
				Qt(t, e, o, n),
				e.child
			);
		case 6:
			return t === null && Lf(e), null;
		case 13:
			return Xm(t, e, n);
		case 4:
			return (
				th(e, e.stateNode.containerInfo),
				(r = e.pendingProps),
				t === null ? (e.child = co(e, null, r, n)) : Qt(t, e, r, n),
				e.child
			);
		case 11:
			return (
				(r = e.type),
				(i = e.pendingProps),
				(i = e.elementType === r ? i : ir(r, i)),
				Wp(t, e, r, i, n)
			);
		case 7:
			return Qt(t, e, e.pendingProps, n), e.child;
		case 8:
			return Qt(t, e, e.pendingProps.children, n), e.child;
		case 12:
			return Qt(t, e, e.pendingProps.children, n), e.child;
		case 10:
			e: {
				if (
					((r = e.type._context),
					(i = e.pendingProps),
					(s = e.memoizedProps),
					(o = i.value),
					Ee(ma, r._currentValue),
					(r._currentValue = o),
					s !== null)
				)
					if (fr(s.value, o)) {
						if (s.children === i.children && !fn.current) {
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
											Af(s.return, n, e),
											(l.lanes |= n);
										break;
									}
									u = u.next;
								}
							} else if (s.tag === 10) o = s.type === e.type ? null : s.child;
							else if (s.tag === 18) {
								if (((o = s.return), o === null)) throw Error(A(341));
								(o.lanes |= n),
									(l = o.alternate),
									l !== null && (l.lanes |= n),
									Af(o, n, e),
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
				Qt(t, e, i.children, n), (e = e.child);
			}
			return e;
		case 9:
			return (
				(i = e.type),
				(r = e.pendingProps.children),
				Js(e, n),
				(i = Yn(i)),
				(r = r(i)),
				(e.flags |= 1),
				Qt(t, e, r, n),
				e.child
			);
		case 14:
			return (
				(r = e.type),
				(i = ir(r, e.pendingProps)),
				(i = ir(r.type, i)),
				bp(t, e, r, i, n)
			);
		case 15:
			return bm(t, e, e.type, e.pendingProps, n);
		case 17:
			return (
				(r = e.type),
				(i = e.pendingProps),
				(i = e.elementType === r ? i : ir(r, i)),
				Wu(t, e),
				(e.tag = 1),
				dn(r) ? ((t = !0), ha(e)) : (t = !1),
				Js(e, n),
				ym(e, r, i),
				If(e, r, i, n),
				Uf(null, e, r, !0, t, n)
			);
		case 19:
			return Gm(t, e, n);
		case 22:
			return Hm(t, e, n);
	}
	throw Error(A(156, e.tag));
};
function fg(t, e) {
	return F_(t, e);
}
function Px(t, e, n, r) {
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
	return new Px(t, e, n, r);
}
function mh(t) {
	return (t = t.prototype), !(!t || !t.isReactComponent);
}
function Nx(t) {
	if (typeof t == 'function') return mh(t) ? 1 : 0;
	if (t != null) {
		if (((t = t.$$typeof), t === Ld)) return 11;
		if (t === Ad) return 14;
	}
	return 2;
}
function ki(t, e) {
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
function Yu(t, e, n, r, i, s) {
	var o = 2;
	if (((r = t), typeof t == 'function')) mh(t) && (o = 1);
	else if (typeof t == 'string') o = 5;
	else
		e: switch (t) {
			case zs:
				return ns(n.children, i, s, e);
			case zd:
				(o = 8), (i |= 8);
				break;
			case uf:
				return (
					(t = Un(12, n, e, i | 2)), (t.elementType = uf), (t.lanes = s), t
				);
			case af:
				return (t = Un(13, n, e, i)), (t.elementType = af), (t.lanes = s), t;
			case cf:
				return (t = Un(19, n, e, i)), (t.elementType = cf), (t.lanes = s), t;
			case x_:
				return tc(n, i, s, e);
			default:
				if (typeof t == 'object' && t !== null)
					switch (t.$$typeof) {
						case v_:
							o = 10;
							break e;
						case y_:
							o = 9;
							break e;
						case Ld:
							o = 11;
							break e;
						case Ad:
							o = 14;
							break e;
						case ii:
							(o = 16), (r = null);
							break e;
					}
				throw Error(A(130, t == null ? t : typeof t, ''));
		}
	return (
		(e = Un(o, n, e, i)), (e.elementType = t), (e.type = r), (e.lanes = s), e
	);
}
function ns(t, e, n, r) {
	return (t = Un(7, t, r, e)), (t.lanes = n), t;
}
function tc(t, e, n, r) {
	return (
		(t = Un(22, t, r, e)),
		(t.elementType = x_),
		(t.lanes = n),
		(t.stateNode = { isHidden: !1 }),
		t
	);
}
function Ac(t, e, n) {
	return (t = Un(6, t, null, e)), (t.lanes = n), t;
}
function Fc(t, e, n) {
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
		(this.eventTimes = gc(0)),
		(this.expirationTimes = gc(-1)),
		(this.entangledLanes =
			this.finishedLanes =
			this.mutableReadLanes =
			this.expiredLanes =
			this.pingedLanes =
			this.suspendedLanes =
			this.pendingLanes =
				0),
		(this.entanglements = gc(0)),
		(this.identifierPrefix = r),
		(this.onRecoverableError = i),
		(this.mutableSourceEagerHydrationData = null);
}
function gh(t, e, n, r, i, s, o, l, u) {
	return (
		(t = new Ox(t, e, n, l, u)),
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
		eh(s),
		t
	);
}
function Mx(t, e, n) {
	var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
	return {
		$$typeof: Ds,
		key: r == null ? null : '' + r,
		children: t,
		containerInfo: e,
		implementation: n,
	};
}
function dg(t) {
	if (!t) return Ni;
	t = t._reactInternals;
	e: {
		if (ws(t) !== t || t.tag !== 1) throw Error(A(170));
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
		throw Error(A(171));
	}
	if (t.tag === 1) {
		var n = t.type;
		if (dn(n)) return fm(t, n, e);
	}
	return e;
}
function hg(t, e, n, r, i, s, o, l, u) {
	return (
		(t = gh(n, r, !0, t, i, s, o, l, u)),
		(t.context = dg(null)),
		(n = t.current),
		(r = tn()),
		(i = Si(n)),
		(s = Hr(r, i)),
		(s.callback = e ?? null),
		xi(n, s, i),
		(t.current.lanes = i),
		Ql(t, i, r),
		hn(t, r),
		t
	);
}
function nc(t, e, n, r) {
	var i = e.current,
		s = tn(),
		o = Si(i);
	return (
		(n = dg(n)),
		e.context === null ? (e.context = n) : (e.pendingContext = n),
		(e = Hr(s, o)),
		(e.payload = { element: t }),
		(r = r === void 0 ? null : r),
		r !== null && (e.callback = r),
		(t = xi(i, e, o)),
		t !== null && (cr(t, i, o, s), $u(t, i, o)),
		o
	);
}
function Ca(t) {
	if (((t = t.current), !t.child)) return null;
	switch (t.child.tag) {
		case 5:
			return t.child.stateNode;
		default:
			return t.child.stateNode;
	}
}
function n0(t, e) {
	if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
		var n = t.retryLane;
		t.retryLane = n !== 0 && n < e ? n : e;
	}
}
function vh(t, e) {
	n0(t, e), (t = t.alternate) && n0(t, e);
}
function jx() {
	return null;
}
var pg =
	typeof reportError == 'function'
		? reportError
		: function (t) {
				console.error(t);
			};
function yh(t) {
	this._internalRoot = t;
}
rc.prototype.render = yh.prototype.render = function (t) {
	var e = this._internalRoot;
	if (e === null) throw Error(A(409));
	nc(t, e, null, null);
};
rc.prototype.unmount = yh.prototype.unmount = function () {
	var t = this._internalRoot;
	if (t !== null) {
		this._internalRoot = null;
		var e = t.containerInfo;
		ps(function () {
			nc(null, t, null, null);
		}),
			(e[Xr] = null);
	}
};
function rc(t) {
	this._internalRoot = t;
}
rc.prototype.unstable_scheduleHydration = function (t) {
	if (t) {
		var e = b_();
		t = { blockedOn: null, target: t, priority: e };
		for (var n = 0; n < oi.length && e !== 0 && e < oi[n].priority; n++);
		oi.splice(n, 0, t), n === 0 && Y_(t);
	}
};
function xh(t) {
	return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
}
function ic(t) {
	return !(
		!t ||
		(t.nodeType !== 1 &&
			t.nodeType !== 9 &&
			t.nodeType !== 11 &&
			(t.nodeType !== 8 || t.nodeValue !== ' react-mount-point-unstable '))
	);
}
function r0() {}
function Rx(t, e, n, r, i) {
	if (i) {
		if (typeof r == 'function') {
			var s = r;
			r = function () {
				var a = Ca(o);
				s.call(a);
			};
		}
		var o = hg(e, r, t, 0, null, !1, !1, '', r0);
		return (
			(t._reactRootContainer = o),
			(t[Xr] = o.current),
			Nl(t.nodeType === 8 ? t.parentNode : t),
			ps(),
			o
		);
	}
	for (; (i = t.lastChild); ) t.removeChild(i);
	if (typeof r == 'function') {
		var l = r;
		r = function () {
			var a = Ca(u);
			l.call(a);
		};
	}
	var u = gh(t, 0, !1, null, null, !1, !1, '', r0);
	return (
		(t._reactRootContainer = u),
		(t[Xr] = u.current),
		Nl(t.nodeType === 8 ? t.parentNode : t),
		ps(function () {
			nc(e, u, n, r);
		}),
		u
	);
}
function sc(t, e, n, r, i) {
	var s = n._reactRootContainer;
	if (s) {
		var o = s;
		if (typeof i == 'function') {
			var l = i;
			i = function () {
				var u = Ca(o);
				l.call(u);
			};
		}
		nc(e, o, t, i);
	} else o = Rx(n, e, t, i, r);
	return Ca(o);
}
B_ = function (t) {
	switch (t.tag) {
		case 3:
			var e = t.stateNode;
			if (e.current.memoizedState.isDehydrated) {
				var n = Wo(e.pendingLanes);
				n !== 0 &&
					(Vd(e, n | 1), hn(e, Je()), !(me & 6) && ((po = Je() + 500), zi()));
			}
			break;
		case 13:
			ps(function () {
				var r = Gr(t, 1);
				if (r !== null) {
					var i = tn();
					cr(r, t, 1, i);
				}
			}),
				vh(t, 1);
	}
};
$d = function (t) {
	if (t.tag === 13) {
		var e = Gr(t, 134217728);
		if (e !== null) {
			var n = tn();
			cr(e, t, 134217728, n);
		}
		vh(t, 134217728);
	}
};
W_ = function (t) {
	if (t.tag === 13) {
		var e = Si(t),
			n = Gr(t, e);
		if (n !== null) {
			var r = tn();
			cr(n, t, e, r);
		}
		vh(t, e);
	}
};
b_ = function () {
	return xe;
};
H_ = function (t, e) {
	var n = xe;
	try {
		return (xe = t), e();
	} finally {
		xe = n;
	}
};
xf = function (t, e, n) {
	switch (e) {
		case 'input':
			if ((hf(t, n), (e = n.name), n.type === 'radio' && e != null)) {
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
						var i = Ga(r);
						if (!i) throw Error(A(90));
						S_(r), hf(r, i);
					}
				}
			}
			break;
		case 'textarea':
			T_(t, n);
			break;
		case 'select':
			(e = n.value), e != null && Gs(t, !!n.multiple, e, !1);
	}
};
j_ = hh;
R_ = ps;
var Dx = { usingClientEntryPoint: !1, Events: [Gl, Is, Ga, O_, M_, hh] },
	Ao = {
		findFiberByHostInstance: Gi,
		bundleType: 0,
		version: '18.2.0',
		rendererPackageName: 'react-dom',
	},
	zx = {
		bundleType: Ao.bundleType,
		version: Ao.version,
		rendererPackageName: Ao.rendererPackageName,
		rendererConfig: Ao.rendererConfig,
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
			return (t = L_(t)), t === null ? null : t.stateNode;
		},
		findFiberByHostInstance: Ao.findFiberByHostInstance || jx,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
	};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
	var yu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	if (!yu.isDisabled && yu.supportsFiber)
		try {
			(Ha = yu.inject(zx)), (Er = yu);
		} catch {}
}
Rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Dx;
Rn.createPortal = function (t, e) {
	var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
	if (!xh(e)) throw Error(A(200));
	return Mx(t, e, null, n);
};
Rn.createRoot = function (t, e) {
	if (!xh(t)) throw Error(A(299));
	var n = !1,
		r = '',
		i = pg;
	return (
		e != null &&
			(e.unstable_strictMode === !0 && (n = !0),
			e.identifierPrefix !== void 0 && (r = e.identifierPrefix),
			e.onRecoverableError !== void 0 && (i = e.onRecoverableError)),
		(e = gh(t, 1, !1, null, null, n, !1, r, i)),
		(t[Xr] = e.current),
		Nl(t.nodeType === 8 ? t.parentNode : t),
		new yh(e)
	);
};
Rn.findDOMNode = function (t) {
	if (t == null) return null;
	if (t.nodeType === 1) return t;
	var e = t._reactInternals;
	if (e === void 0)
		throw typeof t.render == 'function'
			? Error(A(188))
			: ((t = Object.keys(t).join(',')), Error(A(268, t)));
	return (t = L_(e)), (t = t === null ? null : t.stateNode), t;
};
Rn.flushSync = function (t) {
	return ps(t);
};
Rn.hydrate = function (t, e, n) {
	if (!ic(e)) throw Error(A(200));
	return sc(null, t, e, !0, n);
};
Rn.hydrateRoot = function (t, e, n) {
	if (!xh(t)) throw Error(A(405));
	var r = (n != null && n.hydratedSources) || null,
		i = !1,
		s = '',
		o = pg;
	if (
		(n != null &&
			(n.unstable_strictMode === !0 && (i = !0),
			n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
			n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
		(e = hg(e, null, t, 1, n ?? null, i, !1, s, o)),
		(t[Xr] = e.current),
		Nl(t),
		r)
	)
		for (t = 0; t < r.length; t++)
			(n = r[t]),
				(i = n._getVersion),
				(i = i(n._source)),
				e.mutableSourceEagerHydrationData == null
					? (e.mutableSourceEagerHydrationData = [n, i])
					: e.mutableSourceEagerHydrationData.push(n, i);
	return new rc(e);
};
Rn.render = function (t, e, n) {
	if (!ic(e)) throw Error(A(200));
	return sc(null, t, e, !1, n);
};
Rn.unmountComponentAtNode = function (t) {
	if (!ic(t)) throw Error(A(40));
	return t._reactRootContainer
		? (ps(function () {
				sc(null, null, t, !1, function () {
					(t._reactRootContainer = null), (t[Xr] = null);
				});
			}),
			!0)
		: !1;
};
Rn.unstable_batchedUpdates = hh;
Rn.unstable_renderSubtreeIntoContainer = function (t, e, n, r) {
	if (!ic(n)) throw Error(A(200));
	if (t == null || t._reactInternals === void 0) throw Error(A(38));
	return sc(t, e, n, !1, r);
};
Rn.version = '18.2.0-next-9e3b772b8-20220608';
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
_g(), (h_.exports = Rn);
var Lx = h_.exports,
	i0 = Lx;
(of.createRoot = i0.createRoot), (of.hydrateRoot = i0.hydrateRoot);
var s0 =
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
	Ax = {
		BASE_URL: '/sample-site/',
		MODE: 'production',
		DEV: !1,
		PROD: !0,
		SSR: !1,
	};
const o0 = (t) => {
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
					(Ax ? 'production' : void 0) !== 'production' &&
						console.warn(
							'[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected.',
						),
						n.clear();
				},
			},
			a = (e = t(r, i, u));
		return u;
	},
	Fx = (t) => (t ? o0(t) : o0);
var mg = { exports: {} },
	gg = {},
	vg = { exports: {} },
	yg = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _o = te;
function Ix(t, e) {
	return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
}
var Vx = typeof Object.is == 'function' ? Object.is : Ix,
	$x = _o.useState,
	Ux = _o.useEffect,
	Bx = _o.useLayoutEffect,
	Wx = _o.useDebugValue;
function bx(t, e) {
	var n = e(),
		r = $x({ inst: { value: n, getSnapshot: e } }),
		i = r[0].inst,
		s = r[1];
	return (
		Bx(
			function () {
				(i.value = n), (i.getSnapshot = e), Ic(i) && s({ inst: i });
			},
			[t, n, e],
		),
		Ux(
			function () {
				return (
					Ic(i) && s({ inst: i }),
					t(function () {
						Ic(i) && s({ inst: i });
					})
				);
			},
			[t],
		),
		Wx(n),
		n
	);
}
function Ic(t) {
	var e = t.getSnapshot;
	t = t.value;
	try {
		var n = e();
		return !Vx(t, n);
	} catch {
		return !0;
	}
}
function Hx(t, e) {
	return e();
}
var Yx =
	typeof window > 'u' ||
	typeof window.document > 'u' ||
	typeof window.document.createElement > 'u'
		? Hx
		: bx;
yg.useSyncExternalStore =
	_o.useSyncExternalStore !== void 0 ? _o.useSyncExternalStore : Yx;
vg.exports = yg;
var Qx = vg.exports;
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var oc = te,
	Xx = Qx;
function Gx(t, e) {
	return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
}
var Kx = typeof Object.is == 'function' ? Object.is : Gx,
	qx = Xx.useSyncExternalStore,
	Zx = oc.useRef,
	Jx = oc.useEffect,
	ew = oc.useMemo,
	tw = oc.useDebugValue;
gg.useSyncExternalStoreWithSelector = function (t, e, n, r, i) {
	var s = Zx(null);
	if (s.current === null) {
		var o = { hasValue: !1, value: null };
		s.current = o;
	} else o = s.current;
	s = ew(
		function () {
			function u(h) {
				if (!a) {
					if (((a = !0), (c = h), (h = r(h)), i !== void 0 && o.hasValue)) {
						var g = o.value;
						if (i(g, h)) return (d = g);
					}
					return (d = h);
				}
				if (((g = d), Kx(c, h))) return g;
				var _ = r(h);
				return i !== void 0 && i(g, _) ? g : ((c = h), (d = _));
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
	var l = qx(t, s[0], s[1]);
	return (
		Jx(
			function () {
				(o.hasValue = !0), (o.value = l);
			},
			[l],
		),
		tw(l),
		l
	);
};
mg.exports = gg;
var nw = mg.exports;
const rw = Cd(nw);
var xg = {
	BASE_URL: '/sample-site/',
	MODE: 'production',
	DEV: !1,
	PROD: !0,
	SSR: !1,
};
const { useDebugValue: iw } = at,
	{ useSyncExternalStoreWithSelector: sw } = rw;
let l0 = !1;
const ow = (t) => t;
function lw(t, e = ow, n) {
	(xg ? 'production' : void 0) !== 'production' &&
		n &&
		!l0 &&
		(console.warn(
			"[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937",
		),
		(l0 = !0));
	const r = sw(
		t.subscribe,
		t.getState,
		t.getServerState || t.getInitialState,
		e,
		n,
	);
	return iw(r), r;
}
const u0 = (t) => {
		(xg ? 'production' : void 0) !== 'production' &&
			typeof t != 'function' &&
			console.warn(
				"[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.",
			);
		const e = typeof t == 'function' ? Fx(t) : t,
			n = (r, i) => lw(e, r, i);
		return Object.assign(n, e), n;
	},
	wg = (t) => (t ? u0(t) : u0);
function uw(t, e = 0) {
	te.useEffect(() => {
		if (t) return s0.add(t, e), () => s0.remove(t);
	}, [t, e]);
}
wg((t) => ({
	elements: [],
	addElement: (e) => {
		t((n) => ({ elements: [...n.elements, e] }));
	},
	removeElement: (e) => {
		t((n) => ({ elements: n.elements.filter((r) => r !== e) }));
	},
}));
function Pa(t, e, n) {
	return Math.max(t, Math.min(e, n));
}
class aw {
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
			const u = Pa(0, this.currentTime / this.duration, 1);
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
class cw {
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
class Sg {
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
class fw {
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
			this.normalizeWheel && ((n = Pa(-100, n, 100)), (r = Pa(-100, r, 100))),
				(n *= this.wheelMultiplier),
				(r *= this.wheelMultiplier),
				this.emitter.emit('scroll', { deltaX: n, deltaY: r, event: e });
		});
		(this.element = e),
			(this.wheelMultiplier = n),
			(this.touchMultiplier = r),
			(this.normalizeWheel = i),
			(this.touchStart = { x: null, y: null }),
			(this.emitter = new Sg()),
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
class dw {
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
		easing: c = (v) => Math.min(1, 1.001 - Math.pow(2, -10 * v)),
		lerp: d = !a && 0.1,
		infinite: f = !1,
		orientation: h = 'vertical',
		gestureOrientation: g = 'vertical',
		touchMultiplier: _ = 1,
		wheelMultiplier: T = 1,
		normalizeWheel: m = !1,
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
					var h, g, _, T;
					return (
						((h = f.hasAttribute) == null
							? void 0
							: h.call(f, 'data-lenis-prevent')) ||
						(i &&
							((g = f.hasAttribute) == null
								? void 0
								: g.call(f, 'data-lenis-prevent-touch'))) ||
						(s &&
							((_ = f.hasAttribute) == null
								? void 0
								: _.call(f, 'data-lenis-prevent-wheel'))) ||
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
				gestureOrientation: g,
				orientation: h,
				touchMultiplier: _,
				wheelMultiplier: T,
				normalizeWheel: m,
				autoResize: p,
			}),
			(this.animate = new aw()),
			(this.emitter = new Sg()),
			(this.dimensions = new cw({ wrapper: e, content: n, autoResize: p })),
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
			(this.virtualScroll = new fw(i, {
				touchMultiplier: _,
				wheelMultiplier: T,
				normalizeWheel: m,
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
						: (e = Pa(0, e, this.limit)),
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
function kg(t) {
	var e,
		n,
		r = '';
	if (typeof t == 'string' || typeof t == 'number') r += t;
	else if (typeof t == 'object')
		if (Array.isArray(t)) {
			var i = t.length;
			for (e = 0; e < i; e++)
				t[e] && (n = kg(t[e])) && (r && (r += ' '), (r += n));
		} else for (n in t) t[n] && (r && (r += ' '), (r += n));
	return r;
}
function a0() {
	for (var t, e, n = 0, r = '', i = arguments.length; n < i; n++)
		(t = arguments[n]) && (e = kg(t)) && (r && (r += ' '), (r += e));
	return r;
}
var Tg = { exports: {} },
	hw = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
	pw = hw,
	_w = pw;
function Eg() {}
function Cg() {}
Cg.resetWarningCache = Eg;
var mw = function () {
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
		checkPropTypes: Cg,
		resetWarningCache: Eg,
	};
	return (n.PropTypes = n), n;
};
Tg.exports = mw();
var gw = Tg.exports;
const Cs = Cd(gw);
function Jf() {
	return (
		(Jf = Object.assign
			? Object.assign.bind()
			: function (t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
					}
					return t;
				}),
		Jf.apply(this, arguments)
	);
}
const Pg = te.createContext(),
	Ng = wg(() => ({}));
function vw(t, e = [], n = 0) {
	const {
		lenis: r,
		addCallback: i,
		removeCallback: s,
	} = (function () {
		const o = te.useContext(Pg),
			l = Ng();
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
const ed = te.forwardRef(
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
			h = te.useCallback((m, p) => {
				f.current.push({ callback: m, priority: p }),
					f.current.sort((v, x) => v.priority - x.priority);
			}, []),
			g = te.useCallback((m) => {
				f.current = f.current.filter((p) => p.callback !== m);
			}, []);
		te.useImperativeHandle(
			l,
			() => ({ wrapper: u.current, content: a.current, lenis: c }),
			[c],
		),
			te.useEffect(() => {
				const m = new dw({
					...n,
					...(!e && { wrapper: u.current, content: a.current }),
				});
				return (
					d(m),
					() => {
						m.destroy(), d(void 0);
					}
				);
			}, [e, JSON.stringify(n)]),
			uw((m) => {
				r && (c == null || c.raf(m));
			}, i),
			te.useEffect(() => {
				e && c && Ng.setState({ lenis: c, addCallback: h, removeCallback: g });
			}, [e, c, h, g]);
		const _ = te.useCallback((m) => {
			for (let p = 0; p < f.current.length; p++) f.current[p].callback(m);
		}, []);
		te.useEffect(
			() => (
				c == null || c.on('scroll', _),
				() => {
					c == null || c.off('scroll', _);
				}
			),
			[c, _],
		);
		const T = te.useCallback(() => {
			u.current &&
				(u.current.className = a0(c == null ? void 0 : c.className, s));
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
			at.createElement(
				Pg.Provider,
				{ value: { lenis: c, addCallback: h, removeCallback: g } },
				e
					? t
					: at.createElement(
							'div',
							Jf(
								{ ref: u, className: a0(c == null ? void 0 : c.className, s) },
								o,
							),
							at.createElement('div', { ref: a }, t),
						),
			)
		);
	},
);
(ed.displayName = 'ReactLenis'),
	(ed.propTypes = {
		children: Cs.node,
		root: Cs.bool,
		options: Cs.object,
		autoRaf: Cs.bool,
		rafPriority: Cs.number,
		className: Cs.string,
	});
const yw = '_header_1kagg_29',
	xw = '_container_1kagg_39',
	ww = '_logo_1kagg_49',
	Sw = '_hamburger_1kagg_64',
	kw = '_line_1kagg_90',
	Tw = '_nav_1kagg_123',
	Ew = '_menu_1kagg_158',
	Cw = '_underLine_1kagg_162',
	Pw = '_item_1kagg_170',
	Dr = {
		header: yw,
		container: xw,
		logo: ww,
		hamburger: Sw,
		line: kw,
		nav: Tw,
		menu: Ew,
		underLine: Cw,
		item: Pw,
	};
function Nw() {
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
		i = vw(),
		s = () => {
			e(!t), r.nav.current.classList.contains('active') ? i.start() : i.stop();
		};
	return y.jsxs('header', {
		children: [
			y.jsx('div', {
				className: `${Dr.header} ${t ? 'active' : ''}`,
				children: y.jsxs('div', {
					className: Dr.container,
					children: [
						y.jsx('h1', {
							className: `${Dr.logo} ${t ? 'active' : ''}`,
							ref: r.logo,
							children: y.jsx('a', { href: '*/', children: 'MALTS' }),
						}),
						y.jsx('div', {
							className: `${Dr.hamburger} ${t ? 'active' : ''}`,
							ref: r.hamburger,
							onClick: s,
							children: [...Array(3)].map((o, l) =>
								y.jsx(
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
			y.jsx('nav', {
				className: `${Dr.nav} ${t ? 'active' : ''}`,
				ref: r.nav,
				children: y.jsx('ul', {
					className: Dr.menu,
					children: n.map((o, l) =>
						y.jsxs(
							'li',
							{
								className: Dr.item,
								children: [
									y.jsx('a', { href: `#${o}`, children: o.toUpperCase() }),
									y.jsx('span', { className: Dr.underLine }),
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
const Ow = '_top_1uzw3_29',
	Mw = '_svg_1uzw3_36',
	jw = '_container_1uzw3_44',
	Rw = '_svg_01_1uzw3_52',
	Dw = '_svg_02_1uzw3_57',
	zw = '_svg_03_1uzw3_66',
	Lw = '_loopContainer_1uzw3_74',
	Aw = '_text01_1uzw3_88',
	Fw = '_loop_1uzw3_74',
	Iw = '_text02_1uzw3_94',
	zr = {
		top: Ow,
		svg: Mw,
		container: jw,
		svg_01: Rw,
		svg_02: Dw,
		svg_03: zw,
		loopContainer: Lw,
		text01: Aw,
		loop: Fw,
		text02: Iw,
	},
	Vw = '/sample-site/assets/wheat_field-QpWfI9zM.jpg';
function $w() {
	const t =
		'M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;';
	function e() {
		return y.jsx('path', {
			children: y.jsx('animate', {
				attributeName: 'd',
				dur: '20s',
				repeatCount: 'indefinite',
				values: t,
			}),
		});
	}
	return y.jsx(y.Fragment, {
		children: y.jsxs('div', {
			className: zr.top,
			children: [
				y.jsx('div', {
					className: zr.svg,
					children: y.jsxs('div', {
						className: zr.container,
						children: [
							y.jsxs('svg', {
								viewBox: '0 0 500 500',
								className: zr.svg_01,
								children: [
									y.jsx('image', {
										x: '0',
										y: '0',
										width: '100%',
										height: '100%',
										clipPath: 'url(#clip)',
										href: Vw,
										preserveAspectRatio: 'none',
									}),
									y.jsx('clipPath', { id: 'clip', children: y.jsx(e, {}) }),
								],
							}),
							y.jsx('svg', {
								viewBox: '0 0 500 500',
								className: zr.svg_02,
								children: y.jsx(e, {}),
							}),
							y.jsx('svg', {
								viewBox: '0 0 500 500',
								className: zr.svg_03,
								children: y.jsx(e, {}),
							}),
						],
					}),
				}),
				y.jsxs('div', {
					className: zr.loopContainer,
					children: [
						y.jsx('p', {
							className: zr.text01,
							children: 'MALTS GRAPHIC FARM HARAJUKU',
						}),
						y.jsx('p', {
							className: zr.text02,
							children: 'MALTS GRAPHIC FARM HARAJUKU',
						}),
					],
				}),
			],
		}),
	});
}
const Uw = '_container_1fn6h_29',
	Bw = '_outer_1fn6h_41',
	Ww = '_descWrapper_1fn6h_54',
	bw = '_desc_1fn6h_54',
	Hw = '_titleWrapper_1fn6h_72',
	Yw = '_titleInner_1fn6h_83',
	Qw = '_title_1fn6h_72',
	Xw = '_subtitle_1fn6h_100',
	Gw = '_textWrapper_1fn6h_113',
	Kw = '_textInner_1fn6h_117',
	qw = '_text_1fn6h_113',
	Zw = '_logoContainer_1fn6h_160',
	Jw = '_logoMotion01_1fn6h_171',
	eS = '_rotation_1fn6h_1',
	tS = '_inner_1fn6h_221',
	nS = '_logoMotion02_1fn6h_224',
	rS = '_logoMotion03_1fn6h_237',
	Ie = {
		container: Uw,
		outer: Bw,
		descWrapper: Ww,
		desc: bw,
		titleWrapper: Hw,
		titleInner: Yw,
		title: Qw,
		subtitle: Xw,
		textWrapper: Gw,
		textInner: Kw,
		text: qw,
		logoContainer: Zw,
		logoMotion01: Jw,
		rotation: eS,
		inner: tS,
		logoMotion02: nS,
		logoMotion03: rS,
	},
	iS = '/sample-site/assets/malts-logo-6SvyMCuE.svg',
	sS = '/sample-site/assets/about001-AREvM-mp.jpg',
	oS = '/sample-site/assets/about002-k5Xso-JY.jpg';
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
	mo = { duration: 0.5, overwrite: !1, delay: 0 },
	wh,
	Ut,
	Ae,
	Bn = 1e8,
	Te = 1 / Bn,
	td = Math.PI * 2,
	lS = td / 4,
	uS = 0,
	Mg = Math.sqrt,
	aS = Math.cos,
	cS = Math.sin,
	wt = function (e) {
		return typeof e == 'string';
	},
	Ge = function (e) {
		return typeof e == 'function';
	},
	qr = function (e) {
		return typeof e == 'number';
	},
	Sh = function (e) {
		return typeof e > 'u';
	},
	Or = function (e) {
		return typeof e == 'object';
	},
	pn = function (e) {
		return e !== !1;
	},
	kh = function () {
		return typeof window < 'u';
	},
	xu = function (e) {
		return Ge(e) || wt(e);
	},
	jg =
		(typeof ArrayBuffer == 'function' && ArrayBuffer.isView) || function () {},
	Bt = Array.isArray,
	nd = /(?:-?\.?\d|\.)+/gi,
	Rg = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
	Hs = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
	Vc = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
	Dg = /[+-]=-?[.\d]+/,
	zg = /[^,'"\[\]\s]+/gi,
	fS = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
	Be,
	vr,
	rd,
	Th,
	jn = {},
	Na = {},
	Lg,
	Ag = function (e) {
		return (Na = _s(e, jn)) && vn;
	},
	Eh = function (e, n) {
		return console.warn(
			'Invalid property',
			e,
			'set to',
			n,
			'Missing plugin? gsap.registerPlugin()',
		);
	},
	Fl = function (e, n) {
		return !n && console.warn(e);
	},
	Fg = function (e, n) {
		return (e && (jn[e] = n) && Na && (Na[e] = n)) || jn;
	},
	Il = function () {
		return 0;
	},
	dS = { suppressEvents: !0, isStart: !0, kill: !1 },
	Qu = { suppressEvents: !0, kill: !1 },
	hS = { suppressEvents: !0 },
	Ch = {},
	Ti = [],
	id = {},
	Ig,
	kn = {},
	$c = {},
	c0 = 30,
	Xu = [],
	Ph = '',
	Nh = function (e) {
		var n = e[0],
			r,
			i;
		if ((Or(n) || Ge(n) || (e = [e]), !(r = (n._gsap || {}).harness))) {
			for (i = Xu.length; i-- && !Xu[i].targetTest(n); );
			r = Xu[i];
		}
		for (i = e.length; i--; )
			(e[i] && (e[i]._gsap || (e[i]._gsap = new uv(e[i], r)))) ||
				e.splice(i, 1);
		return e;
	},
	rs = function (e) {
		return e._gsap || Nh(Wn(e))[0]._gsap;
	},
	Vg = function (e, n, r) {
		return (r = e[n]) && Ge(r)
			? e[n]()
			: (Sh(r) && e.getAttribute && e.getAttribute(n)) || r;
	},
	_n = function (e, n) {
		return (e = e.split(',')).forEach(n) || e;
	},
	Ze = function (e) {
		return Math.round(e * 1e5) / 1e5 || 0;
	},
	yt = function (e) {
		return Math.round(e * 1e7) / 1e7 || 0;
	},
	to = function (e, n) {
		var r = n.charAt(0),
			i = parseFloat(n.substr(2));
		return (
			(e = parseFloat(e)),
			r === '+' ? e + i : r === '-' ? e - i : r === '*' ? e * i : e / i
		);
	},
	pS = function (e, n) {
		for (var r = n.length, i = 0; e.indexOf(n[i]) < 0 && ++i < r; );
		return i < r;
	},
	Oa = function () {
		var e = Ti.length,
			n = Ti.slice(0),
			r,
			i;
		for (id = {}, Ti.length = 0, r = 0; r < e; r++)
			(i = n[r]),
				i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
	},
	$g = function (e, n, r, i) {
		Ti.length && !Ut && Oa(),
			e.render(n, r, i || (Ut && n < 0 && (e._initted || e._startAt))),
			Ti.length && !Ut && Oa();
	},
	Ug = function (e) {
		var n = parseFloat(e);
		return (n || n === 0) && (e + '').match(zg).length < 2
			? n
			: wt(e)
				? e.trim()
				: e;
	},
	Bg = function (e) {
		return e;
	},
	Xn = function (e, n) {
		for (var r in n) r in e || (e[r] = n[r]);
		return e;
	},
	_S = function (e) {
		return function (n, r) {
			for (var i in r)
				i in n || (i === 'duration' && e) || i === 'ease' || (n[i] = r[i]);
		};
	},
	_s = function (e, n) {
		for (var r in n) e[r] = n[r];
		return e;
	},
	f0 = function t(e, n) {
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
	ll = function (e) {
		var n = e.parent || Be,
			r = e.keyframes ? _S(Bt(e.keyframes)) : Xn;
		if (pn(e.inherit))
			for (; n; ) r(e, n.vars.defaults), (n = n.parent || n._dp);
		return e;
	},
	mS = function (e, n) {
		for (var r = e.length, i = r === n.length; i && r-- && e[r] === n[r]; );
		return r < 0;
	},
	Wg = function (e, n, r, i, s) {
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
	lc = function (e, n, r, i) {
		r === void 0 && (r = '_first'), i === void 0 && (i = '_last');
		var s = n._prev,
			o = n._next;
		s ? (s._next = o) : e[r] === n && (e[r] = o),
			o ? (o._prev = s) : e[i] === n && (e[i] = s),
			(n._next = n._prev = n.parent = null);
	},
	Oi = function (e, n) {
		e.parent &&
			(!n || e.parent.autoRemoveChildren) &&
			e.parent.remove &&
			e.parent.remove(e),
			(e._act = 0);
	},
	is = function (e, n) {
		if (e && (!n || n._end > e._dur || n._start < 0))
			for (var r = e; r; ) (r._dirty = 1), (r = r.parent);
		return e;
	},
	gS = function (e) {
		for (var n = e.parent; n && n.parent; )
			(n._dirty = 1), n.totalDuration(), (n = n.parent);
		return e;
	},
	sd = function (e, n, r, i) {
		return (
			e._startAt &&
			(Ut
				? e._startAt.revert(Qu)
				: (e.vars.immediateRender && !e.vars.autoRevert) ||
					e._startAt.render(n, !0, i))
		);
	},
	vS = function t(e) {
		return !e || (e._ts && t(e.parent));
	},
	d0 = function (e) {
		return e._repeat ? go(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
	},
	go = function (e, n) {
		var r = Math.floor((e /= n));
		return e && r === e ? r - 1 : r;
	},
	ja = function (e, n) {
		return (
			(e - n._start) * n._ts +
			(n._ts >= 0 ? 0 : n._dirty ? n.totalDuration() : n._tDur)
		);
	},
	uc = function (e) {
		return (e._end = yt(
			e._start + (e._tDur / Math.abs(e._ts || e._rts || Te) || 0),
		));
	},
	ac = function (e, n) {
		var r = e._dp;
		return (
			r &&
				r.smoothChildTiming &&
				e._ts &&
				((e._start = yt(
					r._time -
						(e._ts > 0
							? n / e._ts
							: ((e._dirty ? e.totalDuration() : e._tDur) - n) / -e._ts),
				)),
				uc(e),
				r._dirty || is(r, e)),
			e
		);
	},
	bg = function (e, n) {
		var r;
		if (
			((n._time ||
				(!n._dur && n._initted) ||
				(n._start < e._time && (n._dur || !n.add))) &&
				((r = ja(e.rawTime(), n)),
				(!n._dur || ql(0, n.totalDuration(), r) - n._tTime > Te) &&
					n.render(r, !0)),
			is(e, n)._dp && e._initted && e._time >= e._dur && e._ts)
		) {
			if (e._dur < e.duration())
				for (r = e; r._dp; )
					r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp);
			e._zTime = -Te;
		}
	},
	wr = function (e, n, r, i) {
		return (
			n.parent && Oi(n),
			(n._start = yt(
				(qr(r) ? r : r || e !== Be ? Ln(e, r, n) : e._time) + n._delay,
			)),
			(n._end = yt(
				n._start + (n.totalDuration() / Math.abs(n.timeScale()) || 0),
			)),
			Wg(e, n, '_first', '_last', e._sort ? '_start' : 0),
			od(n) || (e._recent = n),
			i || bg(e, n),
			e._ts < 0 && ac(e, e._tTime),
			e
		);
	},
	Hg = function (e, n) {
		return (
			(jn.ScrollTrigger || Eh('scrollTrigger', n)) &&
			jn.ScrollTrigger.create(n, e)
		);
	},
	Yg = function (e, n, r, i, s) {
		if ((Mh(e, n, s), !e._initted)) return 1;
		if (
			!r &&
			e._pt &&
			!Ut &&
			((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
			Ig !== Tn.frame
		)
			return Ti.push(e), (e._lazy = [s, i]), 1;
	},
	yS = function t(e) {
		var n = e.parent;
		return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n));
	},
	od = function (e) {
		var n = e.data;
		return n === 'isFromStart' || n === 'isStart';
	},
	xS = function (e, n, r, i) {
		var s = e.ratio,
			o =
				n < 0 ||
				(!n &&
					((!e._start && yS(e) && !(!e._initted && od(e))) ||
						((e._ts < 0 || e._dp._ts < 0) && !od(e))))
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
				((u = ql(0, e._tDur, n)),
				(c = go(u, l)),
				e._yoyo && c & 1 && (o = 1 - o),
				c !== go(e._tTime, l) &&
					((s = 1 - o), e.vars.repeatRefresh && e._initted && e.invalidate())),
			o !== s || Ut || i || e._zTime === Te || (!n && e._zTime))
		) {
			if (!e._initted && Yg(e, n, i, r, u)) return;
			for (
				d = e._zTime,
					e._zTime = n || (r ? Te : 0),
					r || (r = n && !d),
					e.ratio = o,
					e._from && (o = 1 - o),
					e._time = 0,
					e._tTime = u,
					a = e._pt;
				a;

			)
				a.r(o, a.d), (a = a._next);
			n < 0 && sd(e, n, r, !0),
				e._onUpdate && !r && Pn(e, 'onUpdate'),
				u && e._repeat && !r && e.parent && Pn(e, 'onRepeat'),
				(n >= e._tDur || n < 0) &&
					e.ratio === o &&
					(o && Oi(e, 1),
					!r &&
						!Ut &&
						(Pn(e, o ? 'onComplete' : 'onReverseComplete', !0),
						e._prom && e._prom()));
		} else e._zTime || (e._zTime = n);
	},
	wS = function (e, n, r) {
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
	vo = function (e, n, r, i) {
		var s = e._repeat,
			o = yt(n) || 0,
			l = e._tTime / e._tDur;
		return (
			l && !i && (e._time *= o / e._dur),
			(e._dur = o),
			(e._tDur = s ? (s < 0 ? 1e10 : yt(o * (s + 1) + e._rDelay * s)) : o),
			l > 0 && !i && ac(e, (e._tTime = e._tDur * l)),
			e.parent && uc(e),
			r || is(e.parent, e),
			e
		);
	},
	h0 = function (e) {
		return e instanceof qt ? is(e) : vo(e, e._dur);
	},
	SS = { _start: 0, endTime: Il, totalDuration: Il },
	Ln = function t(e, n, r) {
		var i = e.labels,
			s = e._recent || SS,
			o = e.duration() >= Bn ? s.endTime(!1) : e._dur,
			l,
			u,
			a;
		return wt(n) && (isNaN(n) || n in i)
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
							a && r && (u = (u / 100) * (Bt(r) ? r[0] : r).totalDuration()),
							l > 1 ? t(e, n.substr(0, l - 1), r) + u : o + u))
			: n == null
				? o
				: +n;
	},
	ul = function (e, n, r) {
		var i = qr(n[1]),
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
		return new rt(n[0], o, n[s + 1]);
	},
	Li = function (e, n) {
		return e || e === 0 ? n(e) : n;
	},
	ql = function (e, n, r) {
		return r < e ? e : r > n ? n : r;
	},
	$t = function (e, n) {
		return !wt(e) || !(n = fS.exec(e)) ? '' : n[1];
	},
	kS = function (e, n, r) {
		return Li(r, function (i) {
			return ql(e, n, i);
		});
	},
	ld = [].slice,
	Qg = function (e, n) {
		return (
			e &&
			Or(e) &&
			'length' in e &&
			((!n && !e.length) || (e.length - 1 in e && Or(e[0]))) &&
			!e.nodeType &&
			e !== vr
		);
	},
	TS = function (e, n, r) {
		return (
			r === void 0 && (r = []),
			e.forEach(function (i) {
				var s;
				return (wt(i) && !n) || Qg(i, 1)
					? (s = r).push.apply(s, Wn(i))
					: r.push(i);
			}) || r
		);
	},
	Wn = function (e, n, r) {
		return Ae && !n && Ae.selector
			? Ae.selector(e)
			: wt(e) && !r && (rd || !yo())
				? ld.call((n || Th).querySelectorAll(e), 0)
				: Bt(e)
					? TS(e, r)
					: Qg(e)
						? ld.call(e, 0)
						: e
							? [e]
							: [];
	},
	ud = function (e) {
		return (
			(e = Wn(e)[0] || Fl('Invalid scope') || {}),
			function (n) {
				var r = e.current || e.nativeElement || e;
				return Wn(
					n,
					r.querySelectorAll
						? r
						: r === e
							? Fl('Invalid scope') || Th.createElement('div')
							: e,
				);
			}
		);
	},
	Xg = function (e) {
		return e.sort(function () {
			return 0.5 - Math.random();
		});
	},
	Gg = function (e) {
		if (Ge(e)) return e;
		var n = Or(e) ? e : { each: e },
			r = ss(n.ease),
			i = n.from || 0,
			s = parseFloat(n.base) || 0,
			o = {},
			l = i > 0 && i < 1,
			u = isNaN(i) || l,
			a = n.axis,
			c = i,
			d = i;
		return (
			wt(i)
				? (c = d = { center: 0.5, edges: 0.5, end: 1 }[i] || 0)
				: !l && u && ((c = i[0]), (d = i[1])),
			function (f, h, g) {
				var _ = (g || n).length,
					T = o[_],
					m,
					p,
					v,
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
							E < (E = g[j++].getBoundingClientRect().left) && j < _;

						);
						j < _ && j--;
					}
					for (
						T = o[_] = [],
							m = u ? Math.min(j, _) * c - 0.5 : i % j,
							p = j === Bn ? 0 : u ? (_ * d) / j - 0.5 : (i / j) | 0,
							E = 0,
							N = Bn,
							C = 0;
						C < _;
						C++
					)
						(v = (C % j) - m),
							(x = p - ((C / j) | 0)),
							(T[C] = k = a ? Math.abs(a === 'y' ? x : v) : Mg(v * v + x * x)),
							k > E && (E = k),
							k < N && (N = k);
					i === 'random' && Xg(T),
						(T.max = E - N),
						(T.min = N),
						(T.v = _ =
							(parseFloat(n.amount) ||
								parseFloat(n.each) *
									(j > _
										? _ - 1
										: a
											? a === 'y'
												? _ / j
												: j
											: Math.max(j, _ / j)) ||
								0) * (i === 'edges' ? -1 : 1)),
						(T.b = _ < 0 ? s - _ : s),
						(T.u = $t(n.amount || n.each) || 0),
						(r = r && _ < 0 ? sv(r) : r);
				}
				return (
					(_ = (T[f] - T.min) / T.max || 0),
					yt(T.b + (r ? r(_) : _) * T.v) + T.u
				);
			}
		);
	},
	ad = function (e) {
		var n = Math.pow(10, ((e + '').split('.')[1] || '').length);
		return function (r) {
			var i = yt(Math.round(parseFloat(r) / e) * e * n);
			return (i - (i % 1)) / n + (qr(r) ? 0 : $t(r));
		};
	},
	Kg = function (e, n) {
		var r = Bt(e),
			i,
			s;
		return (
			!r &&
				Or(e) &&
				((i = r = e.radius || Bn),
				e.values
					? ((e = Wn(e.values)), (s = !qr(e[0])) && (i *= i))
					: (e = ad(e.increment))),
			Li(
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
									s || c === o || qr(o) ? c : c + $t(o)
								);
							}
					: ad(e),
			)
		);
	},
	qg = function (e, n, r, i) {
		return Li(Bt(e) ? !n : r === !0 ? !!(r = 0) : !i, function () {
			return Bt(e)
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
	ES = function () {
		for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
			n[r] = arguments[r];
		return function (i) {
			return n.reduce(function (s, o) {
				return o(s);
			}, i);
		};
	},
	CS = function (e, n) {
		return function (r) {
			return e(parseFloat(r)) + (n || $t(r));
		};
	},
	PS = function (e, n, r) {
		return Jg(e, n, 0, 1, r);
	},
	Zg = function (e, n, r) {
		return Li(r, function (i) {
			return e[~~n(i)];
		});
	},
	NS = function t(e, n, r) {
		var i = n - e;
		return Bt(e)
			? Zg(e, t(0, e.length), n)
			: Li(r, function (s) {
					return ((i + ((s - e) % i)) % i) + e;
				});
	},
	OS = function t(e, n, r) {
		var i = n - e,
			s = i * 2;
		return Bt(e)
			? Zg(e, t(0, e.length - 1), n)
			: Li(r, function (o) {
					return (o = (s + ((o - e) % s)) % s || 0), e + (o > i ? s - o : o);
				});
	},
	Vl = function (e) {
		for (var n = 0, r = '', i, s, o, l; ~(i = e.indexOf('random(', n)); )
			(o = e.indexOf(')', i)),
				(l = e.charAt(i + 7) === '['),
				(s = e.substr(i + 7, o - i - 7).match(l ? zg : nd)),
				(r +=
					e.substr(n, i - n) + qg(l ? s : +s[0], l ? 0 : +s[1], +s[2] || 1e-5)),
				(n = o + 1);
		return r + e.substr(n, e.length - n);
	},
	Jg = function (e, n, r, i, s) {
		var o = n - e,
			l = i - r;
		return Li(s, function (u) {
			return r + (((u - e) / o) * l || 0);
		});
	},
	MS = function t(e, n, r, i) {
		var s = isNaN(e + n)
			? 0
			: function (h) {
					return (1 - h) * e + h * n;
				};
		if (!s) {
			var o = wt(e),
				l = {},
				u,
				a,
				c,
				d,
				f;
			if ((r === !0 && (i = 1) && (r = null), o))
				(e = { p: e }), (n = { p: n });
			else if (Bt(e) && !Bt(n)) {
				for (c = [], d = e.length, f = d - 2, a = 1; a < d; a++)
					c.push(t(e[a - 1], e[a]));
				d--,
					(s = function (g) {
						g *= d;
						var _ = Math.min(f, ~~g);
						return c[_](g - _);
					}),
					(r = n);
			} else i || (e = _s(Bt(e) ? [] : {}, e));
			if (!c) {
				for (u in n) Oh.call(l, e, u, 'get', n[u]);
				s = function (g) {
					return Dh(g, l) || (o ? e.p : e);
				};
			}
		}
		return Li(r, s);
	},
	p0 = function (e, n, r) {
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
			o = Ae,
			l = e._ctx,
			u,
			a,
			c;
		if (s)
			return (
				(u = i[n + 'Params']),
				(a = i.callbackScope || e),
				r && Ti.length && Oa(),
				l && (Ae = l),
				(c = u ? s.apply(a, u) : s.call(a)),
				(Ae = o),
				c
			);
	},
	Ho = function (e) {
		return (
			Oi(e),
			e.scrollTrigger && e.scrollTrigger.kill(!!Ut),
			e.progress() < 1 && Pn(e, 'onInterrupt'),
			e
		);
	},
	Ys,
	ev = [],
	tv = function (e) {
		if (e)
			if (((e = (!e.name && e.default) || e), kh() || e.headless)) {
				var n = e.name,
					r = Ge(e),
					i =
						n && !r && e.init
							? function () {
									this._props = [];
								}
							: e,
					s = {
						init: Il,
						render: Dh,
						add: Oh,
						kill: YS,
						modifier: HS,
						rawVars: 0,
					},
					o = {
						targetTest: 0,
						get: 0,
						getSetter: Rh,
						aliases: {},
						register: 0,
					};
				if ((yo(), e !== i)) {
					if (kn[n]) return;
					Xn(i, Xn(Ma(e, s), o)),
						_s(i.prototype, _s(s, Ma(e, o))),
						(kn[(i.prop = n)] = i),
						e.targetTest && (Xu.push(i), (Ch[n] = 1)),
						(n =
							(n === 'css' ? 'CSS' : n.charAt(0).toUpperCase() + n.substr(1)) +
							'Plugin');
				}
				Fg(n, i), e.register && e.register(vn, i, mn);
			} else ev.push(e);
	},
	ke = 255,
	Yo = {
		aqua: [0, ke, ke],
		lime: [0, ke, 0],
		silver: [192, 192, 192],
		black: [0, 0, 0],
		maroon: [128, 0, 0],
		teal: [0, 128, 128],
		blue: [0, 0, ke],
		navy: [0, 0, 128],
		white: [ke, ke, ke],
		olive: [128, 128, 0],
		yellow: [ke, ke, 0],
		orange: [ke, 165, 0],
		gray: [128, 128, 128],
		purple: [128, 0, 128],
		green: [0, 128, 0],
		red: [ke, 0, 0],
		pink: [ke, 192, 203],
		cyan: [0, ke, ke],
		transparent: [ke, ke, ke, 0],
	},
	Uc = function (e, n, r) {
		return (
			(e += e < 0 ? 1 : e > 1 ? -1 : 0),
			((e * 6 < 1
				? n + (r - n) * e * 6
				: e < 0.5
					? r
					: e * 3 < 2
						? n + (r - n) * (2 / 3 - e) * 6
						: n) *
				ke +
				0.5) |
				0
		);
	},
	nv = function (e, n, r) {
		var i = e ? (qr(e) ? [e >> 16, (e >> 8) & ke, e & ke] : 0) : Yo.black,
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
			if ((e.substr(-1) === ',' && (e = e.substr(0, e.length - 1)), Yo[e]))
				i = Yo[e];
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
						[i >> 16, (i >> 8) & ke, i & ke, parseInt(e.substr(7), 16) / 255]
					);
				(e = parseInt(e.substr(1), 16)), (i = [e >> 16, (e >> 8) & ke, e & ke]);
			} else if (e.substr(0, 3) === 'hsl') {
				if (((i = g = e.match(nd)), !n))
					(u = (+i[0] % 360) / 360),
						(a = +i[1] / 100),
						(c = +i[2] / 100),
						(o = c <= 0.5 ? c * (a + 1) : c + a - c * a),
						(s = c * 2 - o),
						i.length > 3 && (i[3] *= 1),
						(i[0] = Uc(u + 1 / 3, s, o)),
						(i[1] = Uc(u, s, o)),
						(i[2] = Uc(u - 1 / 3, s, o));
				else if (~e.indexOf('='))
					return (i = e.match(Rg)), r && i.length < 4 && (i[3] = 1), i;
			} else i = e.match(nd) || Yo.transparent;
			i = i.map(Number);
		}
		return (
			n &&
				!g &&
				((s = i[0] / ke),
				(o = i[1] / ke),
				(l = i[2] / ke),
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
	rv = function (e) {
		var n = [],
			r = [],
			i = -1;
		return (
			e.split(Ei).forEach(function (s) {
				var o = s.match(Hs) || [];
				n.push.apply(n, o), r.push((i += o.length + 1));
			}),
			(n.c = r),
			n
		);
	},
	_0 = function (e, n, r) {
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
					(f = nv(f, n, 1)) &&
					o +
						(n ? f[0] + ',' + f[1] + '%,' + f[2] + '%,' + f[3] : f.join(',')) +
						')'
				);
			})),
			r && ((c = rv(e)), (u = r.c), u.join(i) !== c.c.join(i)))
		)
			for (a = e.replace(Ei, '1').split(Hs), d = a.length - 1; l < d; l++)
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
		for (e in Yo) t += '|' + e + '\\b';
		return new RegExp(t + ')', 'gi');
	})(),
	jS = /hsl[a]?\(/,
	iv = function (e) {
		var n = e.join(' '),
			r;
		if (((Ei.lastIndex = 0), Ei.test(n)))
			return (
				(r = jS.test(n)),
				(e[1] = _0(e[1], r)),
				(e[0] = _0(e[0], r, rv(e[1]))),
				!0
			);
	},
	$l,
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
			g = function _(T) {
				var m = t() - i,
					p = T === !0,
					v,
					x,
					k,
					C;
				if (
					((m > e || m < 0) && (r += m - n),
					(i += m),
					(k = i - r),
					(v = k - o),
					(v > 0 || p) &&
						((C = ++d.frame),
						(f = k - d.time * 1e3),
						(d.time = k = k / 1e3),
						(o += v + (v >= s ? 4 : s - v)),
						(x = 1)),
					p || (u = a(_)),
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
					Lg &&
						(!rd &&
							kh() &&
							((vr = rd = window),
							(Th = vr.document || {}),
							(jn.gsap = vn),
							(vr.gsapVersions || (vr.gsapVersions = [])).push(vn.version),
							Ag(Na || vr.GreenSockGlobals || (!vr.gsap && vr) || {}),
							ev.forEach(tv)),
						(c = typeof requestAnimationFrame < 'u' && requestAnimationFrame),
						u && d.sleep(),
						(a =
							c ||
							function (T) {
								return setTimeout(T, (o - d.time * 1e3 + 1) | 0);
							}),
						($l = 1),
						g(2));
				},
				sleep: function () {
					(c ? cancelAnimationFrame : clearTimeout)(u), ($l = 0), (a = Il);
				},
				lagSmoothing: function (T, m) {
					(e = T || 1 / 0), (n = Math.min(m || 33, e));
				},
				fps: function (T) {
					(s = 1e3 / (T || 240)), (o = d.time * 1e3 + s);
				},
				add: function (T, m, p) {
					var v = m
						? function (x, k, C, E) {
								T(x, k, C, E), d.remove(v);
							}
						: T;
					return d.remove(T), l[p ? 'unshift' : 'push'](v), yo(), v;
				},
				remove: function (T, m) {
					~(m = l.indexOf(T)) && l.splice(m, 1) && h >= m && h--;
				},
				_listeners: l,
			}),
			d
		);
	})(),
	yo = function () {
		return !$l && Tn.wake();
	},
	pe = {},
	RS = /^[\d.\-M][\d.\-,\s]/,
	DS = /["']/g,
	zS = function (e) {
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
				(n[i] = isNaN(a) ? a.replace(DS, '').trim() : +a),
				(i = u.substr(l + 1).trim());
		return n;
	},
	LS = function (e) {
		var n = e.indexOf('(') + 1,
			r = e.indexOf(')'),
			i = e.indexOf('(', n);
		return e.substring(n, ~i && i < r ? e.indexOf(')', r + 1) : r);
	},
	AS = function (e) {
		var n = (e + '').split('('),
			r = pe[n[0]];
		return r && n.length > 1 && r.config
			? r.config.apply(
					null,
					~e.indexOf('{') ? [zS(n[1])] : LS(e).split(',').map(Ug),
				)
			: pe._CE && RS.test(e)
				? pe._CE('', e)
				: r;
	},
	sv = function (e) {
		return function (n) {
			return 1 - e(1 - n);
		};
	},
	ov = function t(e, n) {
		for (var r = e._first, i; r; )
			r instanceof qt
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
	ss = function (e, n) {
		return (e && (Ge(e) ? e : pe[e] || AS(e))) || n;
	},
	Ss = function (e, n, r, i) {
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
				(pe[l] = jn[l] = s), (pe[(o = l.toLowerCase())] = r);
				for (var u in s)
					pe[
						o + (u === 'easeIn' ? '.in' : u === 'easeOut' ? '.out' : '.inOut')
					] = pe[l + '.' + u] = s[u];
			}),
			s
		);
	},
	lv = function (e) {
		return function (n) {
			return n < 0.5 ? (1 - e(1 - n * 2)) / 2 : 0.5 + e((n - 0.5) * 2) / 2;
		};
	},
	Bc = function t(e, n, r) {
		var i = n >= 1 ? n : 1,
			s = (r || (e ? 0.3 : 0.45)) / (n < 1 ? n : 1),
			o = (s / td) * (Math.asin(1 / i) || 0),
			l = function (c) {
				return c === 1 ? 1 : i * Math.pow(2, -10 * c) * cS((c - o) * s) + 1;
			},
			u =
				e === 'out'
					? l
					: e === 'in'
						? function (a) {
								return 1 - l(1 - a);
							}
						: lv(l);
		return (
			(s = td / s),
			(u.config = function (a, c) {
				return t(e, a, c);
			}),
			u
		);
	},
	Wc = function t(e, n) {
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
						: lv(r);
		return (
			(i.config = function (s) {
				return t(e, s);
			}),
			i
		);
	};
_n('Linear,Quad,Cubic,Quart,Quint,Strong', function (t, e) {
	var n = e < 5 ? e + 1 : e;
	Ss(
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
Ss('Elastic', Bc('in'), Bc('out'), Bc());
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
	Ss(
		'Bounce',
		function (o) {
			return 1 - s(1 - o);
		},
		s,
	);
})(7.5625, 2.75);
Ss('Expo', function (t) {
	return t ? Math.pow(2, 10 * (t - 1)) : 0;
});
Ss('Circ', function (t) {
	return -(Mg(1 - t * t) - 1);
});
Ss('Sine', function (t) {
	return t === 1 ? 1 : -aS(t * lS) + 1;
});
Ss('Back', Wc('in'), Wc('out'), Wc());
pe.SteppedEase =
	pe.steps =
	jn.SteppedEase =
		{
			config: function (e, n) {
				e === void 0 && (e = 1);
				var r = 1 / e,
					i = e + (n ? 0 : 1),
					s = n ? 1 : 0,
					o = 1 - Te;
				return function (l) {
					return (((i * ql(0, o, l)) | 0) + s) * r;
				};
			},
		};
mo.ease = pe['quad.out'];
_n(
	'onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt',
	function (t) {
		return (Ph += t + ',' + t + 'Params,');
	},
);
var uv = function (e, n) {
		(this.id = uS++),
			(e._gsap = this),
			(this.target = e),
			(this.harness = n),
			(this.get = n ? n.get : Vg),
			(this.set = n ? n.getSetter : Rh);
	},
	Ul = (function () {
		function t(n) {
			(this.vars = n),
				(this._delay = +n.delay || 0),
				(this._repeat = n.repeat === 1 / 0 ? -2 : n.repeat || 0) &&
					((this._rDelay = n.repeatDelay || 0),
					(this._yoyo = !!n.yoyo || !!n.yoyoEase)),
				(this._ts = 1),
				vo(this, +n.duration, 1, 1),
				(this.data = n.data),
				Ae && ((this._ctx = Ae), Ae.data.push(this)),
				$l || Tn.wake();
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
						vo(
							this,
							this._repeat < 0
								? r
								: (r - this._repeat * this._rDelay) / (this._repeat + 1),
						))
					: this._tDur;
			}),
			(e.totalTime = function (r, i) {
				if ((yo(), !arguments.length)) return this._tTime;
				var s = this._dp;
				if (s && s.smoothChildTiming && this._ts) {
					for (ac(this, r), !s._dp || s.parent || bg(s, this); s && s.parent; )
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
						(this._initted && Math.abs(this._zTime) === Te) ||
						(!r && !this._initted && (this.add || this._ptLookup))) &&
						(this._ts || (this._pTime = r), $g(this, r, i)),
					this
				);
			}),
			(e.time = function (r, i) {
				return arguments.length
					? this.totalTime(
							Math.min(this.totalDuration(), r + d0(this)) %
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
								d0(this),
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
						? go(this._tTime, s) + 1
						: 1;
			}),
			(e.timeScale = function (r, i) {
				if (!arguments.length) return this._rts === -Te ? 0 : this._rts;
				if (this._rts === r) return this;
				var s =
					this.parent && this._ts ? ja(this.parent._time, this) : this._tTime;
				return (
					(this._rts = +r || 0),
					(this._ts = this._ps || r === -Te ? 0 : this._rts),
					this.totalTime(ql(-Math.abs(this._delay), this._tDur, s), i !== !1),
					uc(this),
					gS(this)
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
								: (yo(),
									(this._ts = this._rts),
									this.totalTime(
										this.parent && !this.parent.smoothChildTiming
											? this.rawTime()
											: this._tTime || this._pTime,
										this.progress() === 1 &&
											Math.abs(this._zTime) !== Te &&
											(this._tTime -= Te),
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
							? ja(i.rawTime(r), this)
							: this._tTime
					: this._tTime;
			}),
			(e.revert = function (r) {
				r === void 0 && (r = hS);
				var i = Ut;
				return (
					(Ut = r),
					(this._initted || this._startAt) &&
						(this.timeline && this.timeline.revert(r),
						this.totalTime(-0.01, r.suppressEvents)),
					this.data !== 'nested' && r.kill !== !1 && this.kill(),
					(Ut = i),
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
					? ((this._repeat = r === 1 / 0 ? -2 : r), h0(this))
					: this._repeat === -2
						? 1 / 0
						: this._repeat;
			}),
			(e.repeatDelay = function (r) {
				if (arguments.length) {
					var i = this._time;
					return (this._rDelay = r), h0(this), i ? this.time(i) : this;
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
							this.timeScale(-this._rts || (r ? -Te : 0)),
						this)
					: this._rts < 0;
			}),
			(e.invalidate = function () {
				return (this._initted = this._act = 0), (this._zTime = -Te), this;
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
						s < this.endTime(!0) - Te)
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
					var o = Ge(r) ? r : Bg,
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
				Ho(this);
			}),
			t
		);
	})();
Xn(Ul.prototype, {
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
	_zTime: -Te,
	_prom: 0,
	_ps: !1,
	_rts: 1,
});
var qt = (function (t) {
	Og(e, t);
	function e(r, i) {
		var s;
		return (
			r === void 0 && (r = {}),
			(s = t.call(this, r) || this),
			(s.labels = {}),
			(s.smoothChildTiming = !!r.smoothChildTiming),
			(s.autoRemoveChildren = !!r.autoRemoveChildren),
			(s._sort = pn(r.sortChildren)),
			Be && wr(r.parent || Be, Fr(s), i),
			r.reversed && s.reverse(),
			r.paused && s.paused(!0),
			r.scrollTrigger && Hg(Fr(s), r.scrollTrigger),
			s
		);
	}
	var n = e.prototype;
	return (
		(n.to = function (i, s, o) {
			return ul(0, arguments, this), this;
		}),
		(n.from = function (i, s, o) {
			return ul(1, arguments, this), this;
		}),
		(n.fromTo = function (i, s, o, l) {
			return ul(2, arguments, this), this;
		}),
		(n.set = function (i, s, o) {
			return (
				(s.duration = 0),
				(s.parent = this),
				ll(s).repeatDelay || (s.repeat = 0),
				(s.immediateRender = !!s.immediateRender),
				new rt(i, s, Ln(this, o), 1),
				this
			);
		}),
		(n.call = function (i, s, o) {
			return wr(this, rt.delayedCall(0, i, s), o);
		}),
		(n.staggerTo = function (i, s, o, l, u, a, c) {
			return (
				(o.duration = s),
				(o.stagger = o.stagger || l),
				(o.onComplete = a),
				(o.onCompleteParams = c),
				(o.parent = this),
				new rt(i, o, Ln(this, u)),
				this
			);
		}),
		(n.staggerFrom = function (i, s, o, l, u, a, c) {
			return (
				(o.runBackwards = 1),
				(ll(o).immediateRender = pn(o.immediateRender)),
				this.staggerTo(i, s, o, l, u, a, c)
			);
		}),
		(n.staggerFromTo = function (i, s, o, l, u, a, c, d) {
			return (
				(l.startAt = o),
				(ll(l).immediateRender = pn(l.immediateRender)),
				this.staggerTo(i, s, l, u, a, c, d)
			);
		}),
		(n.render = function (i, s, o) {
			var l = this._time,
				u = this._dirty ? this.totalDuration() : this._tDur,
				a = this._dur,
				c = i <= 0 ? 0 : yt(i),
				d = this._zTime < 0 != i < 0 && (this._initted || !a),
				f,
				h,
				g,
				_,
				T,
				m,
				p,
				v,
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
					(v = this._ts),
					(m = !v),
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
						((f = yt(c % T)),
						c === u
							? ((_ = this._repeat), (f = a))
							: ((_ = ~~(c / T)),
								_ && _ === c / T && ((f = a), _--),
								f > a && (f = a)),
						(k = go(this._tTime, T)),
						!l &&
							this._tTime &&
							k !== _ &&
							this._tTime - k * T - this._dur <= 0 &&
							(k = _),
						C && _ & 1 && ((f = a - f), (E = 1)),
						_ !== k && !this._lock)
					) {
						var N = C && k & 1,
							j = N === (C && _ & 1);
						if (
							(_ < k && (N = !N),
							(l = N ? 0 : c % a ? a : c),
							(this._lock = 1),
							(this.render(l || (E ? 0 : yt(_ * T)), s, !a)._lock = 0),
							(this._tTime = c),
							!s && this.parent && Pn(this, 'onRepeat'),
							this.vars.repeatRefresh && !E && (this.invalidate()._lock = 1),
							(l && l !== this._time) ||
								m !== !this._ts ||
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
							!this._ts && !m)
						)
							return this;
						ov(this, E);
					}
				}
				if (
					(this._hasPause &&
						!this._forcing &&
						this._lock < 2 &&
						((p = wS(this, yt(l), yt(f))), p && (c -= f - (f = p._start))),
					(this._tTime = c),
					(this._time = f),
					(this._act = !v),
					this._initted ||
						((this._onUpdate = this.vars.onUpdate),
						(this._initted = 1),
						(this._zTime = i),
						(l = 0)),
					!l && f && !s && !_ && (Pn(this, 'onStart'), this._tTime !== c))
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
								f !== this._time || (!this._ts && !m))
							) {
								(p = 0), g && (c += this._zTime = -Te);
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
									o || (Ut && (h._initted || h._startAt)),
								),
								f !== this._time || (!this._ts && !m))
							) {
								(p = 0), g && (c += this._zTime = M ? -Te : Te);
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
					(p.render(f >= l ? 0 : -Te)._zTime = f >= l ? 1 : -1),
					this._ts)
				)
					return (this._start = x), uc(this), this.render(i, s, o);
				this._onUpdate && !s && Pn(this, 'onUpdate', !0),
					((c === u && this._tTime >= this.totalDuration()) || (!c && l)) &&
						(x === this._start || Math.abs(v) !== Math.abs(this._ts)) &&
						(this._lock ||
							((i || !a) &&
								((c === u && this._ts > 0) || (!c && this._ts < 0)) &&
								Oi(this, 1),
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
			if ((qr(s) || (s = Ln(this, s, i)), !(i instanceof Ul))) {
				if (Bt(i))
					return (
						i.forEach(function (l) {
							return o.add(l, s);
						}),
						this
					);
				if (wt(i)) return this.addLabel(i, s);
				if (Ge(i)) i = rt.delayedCall(0, i);
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
					(a instanceof rt
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
			return wt(i)
				? this.removeLabel(i)
				: Ge(i)
					? this.killTweensOf(i)
					: (lc(this, i),
						i === this._recent && (this._recent = this._last),
						is(this));
		}),
		(n.totalTime = function (i, s) {
			return arguments.length
				? ((this._forcing = 1),
					!this._dp &&
						this._ts &&
						(this._start = yt(
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
			var l = rt.delayedCall(0, s || Il, o);
			return (
				(l.data = 'isPause'), (this._hasPause = 1), wr(this, l, Ln(this, i))
			);
		}),
		(n.removePause = function (i) {
			var s = this._first;
			for (i = Ln(this, i); s; )
				s._start === i && s.data === 'isPause' && Oi(s), (s = s._next);
		}),
		(n.killTweensOf = function (i, s, o) {
			for (var l = this.getTweensOf(i, o), u = l.length; u--; )
				ci !== l[u] && l[u].kill(i, s);
			return this;
		}),
		(n.getTweensOf = function (i, s) {
			for (var o = [], l = Wn(i), u = this._first, a = qr(s), c; u; )
				u instanceof rt
					? pS(u._targets, l) &&
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
				g = rt.to(
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
								Te,
							onStart: function () {
								if ((o.pause(), !h)) {
									var T =
										s.duration ||
										Math.abs(
											(l - (a && 'time' in a ? a.time : o._time)) /
												o.timeScale(),
										);
									g._dur !== T && vo(g, T, 0, 1).render(g._time, !0, !0),
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
			return i === void 0 && (i = this._time), p0(this, Ln(this, i));
		}),
		(n.previousLabel = function (i) {
			return i === void 0 && (i = this._time), p0(this, Ln(this, i), 1);
		}),
		(n.currentLabel = function (i) {
			return arguments.length
				? this.seek(i, !0)
				: this.previousLabel(this._time + Te);
		}),
		(n.shiftChildren = function (i, s, o) {
			o === void 0 && (o = 0);
			for (var l = this._first, u = this.labels, a; l; )
				l._start >= o && ((l._start += i), (l._end += i)), (l = l._next);
			if (s) for (a in u) u[a] >= o && (u[a] += i);
			return is(this);
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
				is(this)
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
				vo(o, o === Be && o._time > s ? o._time : s, 1, 1), (o._dirty = 0);
			}
			return o._tDur;
		}),
		(e.updateRoot = function (i) {
			if ((Be._ts && ($g(Be, ja(i, Be)), (Ig = Tn.frame)), Tn.frame >= c0)) {
				c0 += On.autoSleep || 120;
				var s = Be._first;
				if ((!s || !s._ts) && On.autoSleep && Tn._listeners.length < 2) {
					for (; s && !s._ts; ) s = s._next;
					s || Tn.sleep();
				}
			}
		}),
		e
	);
})(Ul);
Xn(qt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var FS = function (e, n, r, i, s, o, l) {
		var u = new mn(this._pt, e, n, 0, 1, pv, null, s),
			a = 0,
			c = 0,
			d,
			f,
			h,
			g,
			_,
			T,
			m,
			p;
		for (
			u.b = r,
				u.e = i,
				r += '',
				i += '',
				(m = ~i.indexOf('random(')) && (i = Vl(i)),
				o && ((p = [r, i]), o(p, e, n), (r = p[0]), (i = p[1])),
				f = r.match(Vc) || [];
			(d = Vc.exec(i));

		)
			(g = d[0]),
				(_ = i.substring(a, d.index)),
				h ? (h = (h + 1) % 5) : _.substr(-5) === 'rgba(' && (h = 1),
				g !== f[c++] &&
					((T = parseFloat(f[c - 1]) || 0),
					(u._pt = {
						_next: u._pt,
						p: _ || c === 1 ? _ : ',',
						s: T,
						c: g.charAt(1) === '=' ? to(T, g) - T : parseFloat(g) - T,
						m: h && h < 4 ? Math.round : 0,
					}),
					(a = Vc.lastIndex));
		return (
			(u.c = a < i.length ? i.substring(a, i.length) : ''),
			(u.fp = l),
			(Dg.test(i) || m) && (u.e = 0),
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
			h = Ge(d) ? (a ? BS : dv) : jh,
			g;
		if (
			(wt(i) &&
				(~i.indexOf('random(') && (i = Vl(i)),
				i.charAt(1) === '=' &&
					((g = to(f, i) + ($t(f) || 0)), (g || g === 0) && (i = g))),
			!c || f !== i || cd)
		)
			return !isNaN(f * i) && i !== ''
				? ((g = new mn(
						this._pt,
						e,
						n,
						+f || 0,
						i - (f || 0),
						typeof d == 'boolean' ? bS : hv,
						0,
						h,
					)),
					a && (g.fp = a),
					l && g.modifier(l, this, e),
					(this._pt = g))
				: (!d && !(n in e) && Eh(n, i),
					FS.call(this, e, n, f, i, h, u || On.stringFilter, a));
	},
	IS = function (e, n, r, i, s) {
		if (
			(Ge(e) && (e = al(e, s, n, r, i)),
			!Or(e) || (e.style && e.nodeType) || Bt(e) || jg(e))
		)
			return wt(e) ? al(e, s, n, r, i) : e;
		var o = {},
			l;
		for (l in e) o[l] = al(e[l], s, n, r, i);
		return o;
	},
	av = function (e, n, r, i, s, o) {
		var l, u, a, c;
		if (
			kn[e] &&
			(l = new kn[e]()).init(
				s,
				l.rawVars ? n[e] : IS(n[e], i, s, o, r),
				r,
				i,
				o,
			) !== !1 &&
			((r._pt = u = new mn(r._pt, s, e, 0, 1, l.render, l, 0, l.priority)),
			r !== Ys)
		)
			for (a = r._ptLookup[r._targets.indexOf(s)], c = l._props.length; c--; )
				a[l._props[c]] = u;
		return l;
	},
	ci,
	cd,
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
			g = e._dur,
			_ = e._startAt,
			T = e._targets,
			m = e.parent,
			p = m && m.data === 'nested' ? m.vars.targets : T,
			v = e._overwrite === 'auto' && !wh,
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
			(e._ease = ss(s, mo.ease)),
			(e._yEase = d ? sv(ss(d === !0 ? s : d, mo.ease)) : 0),
			d &&
				e._yoyo &&
				!e._repeat &&
				((d = e._yEase), (e._yEase = e._ease), (e._ease = d)),
			(e._from = !x && !!i.runBackwards),
			!x || (f && !i.stagger))
		) {
			if (
				((D = T[0] ? rs(T[0]).harness : 0),
				(G = D && i[D.prop]),
				(k = Ma(i, Ch)),
				_ &&
					(_._zTime < 0 && _.progress(1),
					n < 0 && c && l && !h ? _.render(-1, !0) : _.revert(c && g ? Qu : dS),
					(_._lazy = 0)),
				o)
			) {
				if (
					(Oi(
						(e._startAt = rt.set(
							T,
							Xn(
								{
									data: 'isStart',
									overwrite: !1,
									parent: m,
									immediateRender: !0,
									lazy: !_ && pn(u),
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
					n < 0 && (Ut || (!l && !h)) && e._startAt.revert(Qu),
					l && g && n <= 0 && r <= 0)
				) {
					n && (e._zTime = n);
					return;
				}
			} else if (c && g && !_) {
				if (
					(n && (l = !1),
					(E = Xn(
						{
							overwrite: !1,
							data: 'isFromStart',
							lazy: l && !_ && pn(u),
							immediateRender: l,
							stagger: 0,
							parent: m,
						},
						k,
					)),
					G && (E[D.prop] = G),
					Oi((e._startAt = rt.set(T, E))),
					(e._startAt._dp = 0),
					(e._startAt._sat = e),
					n < 0 && (Ut ? e._startAt.revert(Qu) : e._startAt.render(-1, !0)),
					(e._zTime = n),
					!l)
				)
					t(e._startAt, Te, Te);
				else if (!n) return;
			}
			for (
				e._pt = e._ptCache = 0, u = (g && pn(u)) || (u && !g), C = 0;
				C < T.length;
				C++
			) {
				if (
					((j = T[C]),
					(H = j._gsap || Nh(T)[C]._gsap),
					(e._ptLookup[C] = Y = {}),
					id[H.id] && Ti.length && Oa(),
					(K = p === T ? C : p.indexOf(j)),
					D &&
						(I = new D()).init(j, G || k, e, K, p) !== !1 &&
						((e._pt = N =
							new mn(e._pt, j, I.name, 0, 1, I.render, I, 0, I.priority)),
						I._props.forEach(function (z) {
							Y[z] = N;
						}),
						I.priority && (M = 1)),
					!D || G)
				)
					for (E in k)
						kn[E] && (I = av(E, k, e, K, j, p))
							? I.priority && (M = 1)
							: (Y[E] = N =
									Oh.call(e, j, E, 'get', k[E], K, p, 0, i.stringFilter));
				e._op && e._op[C] && e.kill(j, e._op[C]),
					v &&
						e._pt &&
						((ci = e),
						Be.killTweensOf(j, Y, e.globalTime(n)),
						(Q = !e.parent),
						(ci = 0)),
					e._pt && u && (id[H.id] = 1);
			}
			M && _v(e), e._onInit && e._onInit(e);
		}
		(e._onUpdate = a),
			(e._initted = (!e._op || e._pt) && !Q),
			f && n <= 0 && x.render(Bn, !0, !0);
	},
	VS = function (e, n, r, i, s, o, l, u) {
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
						(cd = 1),
						(e.vars[n] = '+=0'),
						Mh(e, l),
						(cd = 0),
						u ? Fl(n + ' not eligible for reset') : 1
					);
				a.push(c);
			}
		for (h = a.length; h--; )
			(d = a[h]),
				(c = d._pt || d),
				(c.s = (i || i === 0) && !s ? i : c.s + (i || 0) + o * c.c),
				(c.c = r - c.s),
				d.e && (d.e = Ze(r) + $t(d.e)),
				d.b && (d.b = c.s + $t(d.b));
	},
	$S = function (e, n) {
		var r = e[0] ? rs(e[0]).harness : 0,
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
	US = function (e, n, r, i) {
		var s = n.ease || i || 'power1.inOut',
			o,
			l;
		if (Bt(n))
			(l = r[e] || (r[e] = [])),
				n.forEach(function (u, a) {
					return l.push({ t: (a / (n.length - 1)) * 100, v: u, e: s });
				});
		else
			for (o in n)
				(l = r[o] || (r[o] = [])),
					o === 'ease' || l.push({ t: parseFloat(e), v: n[o], e: s });
	},
	al = function (e, n, r, i, s) {
		return Ge(e)
			? e.call(n, r, i, s)
			: wt(e) && ~e.indexOf('random(')
				? Vl(e)
				: e;
	},
	cv = Ph + 'repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert',
	fv = {};
_n(cv + ',id,stagger,delay,duration,paused,scrollTrigger', function (t) {
	return (fv[t] = 1);
});
var rt = (function (t) {
	Og(e, t);
	function e(r, i, s, o) {
		var l;
		typeof i == 'number' && ((s.duration = i), (i = s), (s = null)),
			(l = t.call(this, o ? i : ll(i)) || this);
		var u = l.vars,
			a = u.duration,
			c = u.delay,
			d = u.immediateRender,
			f = u.stagger,
			h = u.overwrite,
			g = u.keyframes,
			_ = u.defaults,
			T = u.scrollTrigger,
			m = u.yoyoEase,
			p = i.parent || Be,
			v = (Bt(r) || jg(r) ? qr(r[0]) : 'length' in i) ? [r] : Wn(r),
			x,
			k,
			C,
			E,
			N,
			j,
			M,
			H;
		if (
			((l._targets = v.length
				? Nh(v)
				: Fl(
						'GSAP target ' + r + ' not found. https://gsap.com',
						!On.nullTargetWarn,
					) || []),
			(l._ptLookup = []),
			(l._overwrite = h),
			g || f || xu(a) || xu(c))
		) {
			if (
				((i = l.vars),
				(x = l.timeline =
					new qt({
						data: 'nested',
						defaults: _ || {},
						targets: p && p.data === 'nested' ? p.vars.targets : v,
					})),
				x.kill(),
				(x.parent = x._dp = Fr(l)),
				(x._start = 0),
				f || xu(a) || xu(c))
			) {
				if (((E = v.length), (M = f && Gg(f)), Or(f)))
					for (N in f) ~cv.indexOf(N) && (H || (H = {}), (H[N] = f[N]));
				for (k = 0; k < E; k++)
					(C = Ma(i, fv)),
						(C.stagger = 0),
						m && (C.yoyoEase = m),
						H && _s(C, H),
						(j = v[k]),
						(C.duration = +al(a, Fr(l), k, j, v)),
						(C.delay = (+al(c, Fr(l), k, j, v) || 0) - l._delay),
						!f &&
							E === 1 &&
							C.delay &&
							((l._delay = c = C.delay), (l._start += c), (C.delay = 0)),
						x.to(j, C, M ? M(k, j, v) : 0),
						(x._ease = pe.none);
				x.duration() ? (a = c = 0) : (l.timeline = 0);
			} else if (g) {
				ll(Xn(x.vars.defaults, { ease: 'none' })),
					(x._ease = ss(g.ease || i.ease || 'none'));
				var D = 0,
					I,
					Y,
					K;
				if (Bt(g))
					g.forEach(function (G) {
						return x.to(v, G, '>');
					}),
						x.duration();
				else {
					C = {};
					for (N in g)
						N === 'ease' || N === 'easeEach' || US(N, g[N], C, g.easeEach);
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
								x.to(v, K, D),
								(D += K.duration);
					x.duration() < a && x.to({}, { duration: a - x.duration() });
				}
			}
			a || l.duration((a = x.duration()));
		} else l.timeline = 0;
		return (
			h === !0 && !wh && ((ci = Fr(l)), Be.killTweensOf(v), (ci = 0)),
			wr(p, Fr(l), s),
			i.reversed && l.reverse(),
			i.paused && l.paused(!0),
			(d ||
				(!a &&
					!g &&
					l._start === yt(p._time) &&
					pn(d) &&
					vS(Fr(l)) &&
					p.data !== 'nested')) &&
				((l._tTime = -Te), l.render(Math.max(0, -c) || 0)),
			T && Hg(Fr(l), T),
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
				d = i > u - Te && !c ? u : i < Te ? 0 : i,
				f,
				h,
				g,
				_,
				T,
				m,
				p,
				v,
				x;
			if (!a) xS(this, i, s, o);
			else if (
				d !== this._tTime ||
				!i ||
				o ||
				(!this._initted && this._tTime) ||
				(this._startAt && this._zTime < 0 !== c)
			) {
				if (((f = d), (v = this.timeline), this._repeat)) {
					if (((_ = a + this._rDelay), this._repeat < -1 && c))
						return this.totalTime(_ * 100 + i, s, o);
					if (
						((f = yt(d % _)),
						d === u
							? ((g = this._repeat), (f = a))
							: ((g = ~~(d / _)),
								g && g === yt(d / _) && ((f = a), g--),
								f > a && (f = a)),
						(m = this._yoyo && g & 1),
						m && ((x = this._yEase), (f = a - f)),
						(T = go(this._tTime, _)),
						f === l && !o && this._initted && g === T)
					)
						return (this._tTime = d), this;
					g !== T &&
						(v && this._yEase && ov(v, m),
						this.vars.repeatRefresh &&
							!m &&
							!this._lock &&
							this._time !== _ &&
							this._initted &&
							((this._lock = o = 1),
							(this.render(yt(_ * g), !0).invalidate()._lock = 0)));
				}
				if (!this._initted) {
					if (Yg(this, c ? i : f, o, s, d)) return (this._tTime = 0), this;
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
				(v && v.render(i < 0 ? i : v._dur * v._ease(f / this._dur), s, o)) ||
					(this._startAt && (this._zTime = i)),
					this._onUpdate &&
						!s &&
						(c && sd(this, i, s, o), Pn(this, 'onUpdate')),
					this._repeat &&
						g !== T &&
						this.vars.onRepeat &&
						!s &&
						this.parent &&
						Pn(this, 'onRepeat'),
					(d === this._tDur || !d) &&
						this._tTime === d &&
						(c && !this._onUpdate && sd(this, i, !0, !0),
						(i || !a) &&
							((d === this._tDur && this._ts > 0) || (!d && this._ts < 0)) &&
							Oi(this, 1),
						!s &&
							!(c && !l) &&
							(d || l || m) &&
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
			$l || Tn.wake(), this._ts || this.play();
			var a = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
				c;
			return (
				this._initted || Mh(this, a),
				(c = this._ease(a / this._dur)),
				VS(this, i, s, o, l, c, a, u)
					? this.resetTo(i, s, o, l, 1)
					: (ac(this, 0),
						this.parent ||
							Wg(
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
				return (this._lazy = this._pt = 0), this.parent ? Ho(this) : this;
			if (this.timeline) {
				var o = this.timeline.totalDuration();
				return (
					this.timeline.killTweensOf(i, s, ci && ci.vars.overwrite !== !0)
						._first || Ho(this),
					this.parent &&
						o !== this.timeline.totalDuration() &&
						vo(this, (this._dur * this.timeline._tDur) / o, 0, 1),
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
				_,
				T,
				m;
			if ((!s || s === 'all') && mS(l, u))
				return s === 'all' && (this._pt = 0), Ho(this);
			for (
				d = this._op = this._op || [],
					s !== 'all' &&
						(wt(s) &&
							((_ = {}),
							_n(s, function (p) {
								return (_[p] = 1);
							}),
							(s = _)),
						(s = $S(l, s))),
					m = l.length;
				m--;

			)
				if (~u.indexOf(l[m])) {
					(f = a[m]),
						s === 'all'
							? ((d[m] = s), (g = f), (h = {}))
							: ((h = d[m] = d[m] || {}), (g = s));
					for (_ in g)
						(T = f && f[_]),
							T &&
								((!('kill' in T.d) || T.d.kill(_) === !0) && lc(this, T, '_pt'),
								delete f[_]),
							h !== 'all' && (h[_] = 1);
				}
			return this._initted && !this._pt && c && Ho(this), this;
		}),
		(e.to = function (i, s) {
			return new e(i, s, arguments[2]);
		}),
		(e.from = function (i, s) {
			return ul(1, arguments);
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
			return ul(2, arguments);
		}),
		(e.set = function (i, s) {
			return (s.duration = 0), s.repeatDelay || (s.repeat = 0), new e(i, s);
		}),
		(e.killTweensOf = function (i, s, o) {
			return Be.killTweensOf(i, s, o);
		}),
		e
	);
})(Ul);
Xn(rt.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
_n('staggerTo,staggerFrom,staggerFromTo', function (t) {
	rt[t] = function () {
		var e = new qt(),
			n = ld.call(arguments, 0);
		return n.splice(t === 'staggerFromTo' ? 5 : 4, 0, 0), e[t].apply(e, n);
	};
});
var jh = function (e, n, r) {
		return (e[n] = r);
	},
	dv = function (e, n, r) {
		return e[n](r);
	},
	BS = function (e, n, r, i) {
		return e[n](i.fp, r);
	},
	WS = function (e, n, r) {
		return e.setAttribute(n, r);
	},
	Rh = function (e, n) {
		return Ge(e[n]) ? dv : Sh(e[n]) && e.setAttribute ? WS : jh;
	},
	hv = function (e, n) {
		return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e6) / 1e6, n);
	},
	bS = function (e, n) {
		return n.set(n.t, n.p, !!(n.s + n.c * e), n);
	},
	pv = function (e, n) {
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
	Dh = function (e, n) {
		for (var r = n._pt; r; ) r.r(e, r.d), (r = r._next);
	},
	HS = function (e, n, r, i) {
		for (var s = this._pt, o; s; )
			(o = s._next), s.p === i && s.modifier(e, n, r), (s = o);
	},
	YS = function (e) {
		for (var n = this._pt, r, i; n; )
			(i = n._next),
				(n.p === e && !n.op) || n.op === e
					? lc(this, n, '_pt')
					: n.dep || (r = 1),
				(n = i);
		return !r;
	},
	QS = function (e, n, r, i) {
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
	mn = (function () {
		function t(n, r, i, s, o, l, u, a, c) {
			(this.t = r),
				(this.s = s),
				(this.c = o),
				(this.p = i),
				(this.r = l || hv),
				(this.d = u || this),
				(this.set = a || jh),
				(this.pr = c || 0),
				(this._next = n),
				n && (n._prev = this);
		}
		var e = t.prototype;
		return (
			(e.modifier = function (r, i, s) {
				(this.mSet = this.mSet || this.set),
					(this.set = QS),
					(this.m = r),
					(this.mt = s),
					(this.tween = i);
			}),
			t
		);
	})();
_n(
	Ph +
		'parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger',
	function (t) {
		return (Ch[t] = 1);
	},
);
jn.TweenMax = jn.TweenLite = rt;
jn.TimelineLite = jn.TimelineMax = qt;
Be = new qt({
	sortChildren: !1,
	defaults: mo,
	autoRemoveChildren: !0,
	id: 'root',
	smoothChildTiming: !0,
});
On.stringFilter = iv;
var os = [],
	Gu = {},
	XS = [],
	m0 = 0,
	GS = 0,
	bc = function (e) {
		return (Gu[e] || XS).map(function (n) {
			return n();
		});
	},
	fd = function () {
		var e = Date.now(),
			n = [];
		e - m0 > 2 &&
			(bc('matchMediaInit'),
			os.forEach(function (r) {
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
			bc('matchMediaRevert'),
			n.forEach(function (r) {
				return r.onMatch(r, function (i) {
					return r.add(null, i);
				});
			}),
			(m0 = e),
			bc('matchMedia'));
	},
	mv = (function () {
		function t(n, r) {
			(this.selector = r && ud(r)),
				(this.data = []),
				(this._r = []),
				(this.isReverted = !1),
				(this.id = GS++),
				n && this.add(n);
		}
		var e = t.prototype;
		return (
			(e.add = function (r, i, s) {
				Ge(r) && ((s = i), (i = r), (r = Ge));
				var o = this,
					l = function () {
						var a = Ae,
							c = o.selector,
							d;
						return (
							a && a !== o && a.data.push(o),
							s && (o.selector = ud(s)),
							(Ae = o),
							(d = i.apply(o, arguments)),
							Ge(d) && o._r.push(d),
							(Ae = a),
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
				var i = Ae;
				(Ae = null), r(this), (Ae = i);
			}),
			(e.getTweens = function () {
				var r = [];
				return (
					this.data.forEach(function (i) {
						return i instanceof t
							? r.push.apply(r, i.getTweens())
							: i instanceof rt &&
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
										a instanceof qt
											? a.data !== 'nested' &&
												(a.scrollTrigger && a.scrollTrigger.revert(), a.kill())
											: !(a instanceof rt) && a.revert && a.revert(r);
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
					for (var o = os.length; o--; )
						os[o].id === this.id && os.splice(o, 1);
			}),
			(e.revert = function (r) {
				this.kill(r || {});
			}),
			t
		);
	})(),
	KS = (function () {
		function t(n) {
			(this.contexts = []), (this.scope = n), Ae && Ae.data.push(this);
		}
		var e = t.prototype;
		return (
			(e.add = function (r, i, s) {
				Or(r) || (r = { matches: r });
				var o = new mv(0, s || this.scope),
					l = (o.conditions = {}),
					u,
					a,
					c;
				Ae && !o.selector && (o.selector = Ae.selector),
					this.contexts.push(o),
					(i = o.add('onMatch', i)),
					(o.queries = r);
				for (a in r)
					a === 'all'
						? (c = 1)
						: ((u = vr.matchMedia(r[a])),
							u &&
								(os.indexOf(o) < 0 && os.push(o),
								(l[a] = u.matches) && (c = 1),
								u.addListener
									? u.addListener(fd)
									: u.addEventListener('change', fd)));
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
	Ra = {
		registerPlugin: function () {
			for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
				n[r] = arguments[r];
			n.forEach(function (i) {
				return tv(i);
			});
		},
		timeline: function (e) {
			return new qt(e);
		},
		getTweensOf: function (e, n) {
			return Be.getTweensOf(e, n);
		},
		getProperty: function (e, n, r, i) {
			wt(e) && (e = Wn(e)[0]);
			var s = rs(e || {}).get,
				o = r ? Bg : Ug;
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
				l = rs(e),
				u = (l.harness && (l.harness.aliases || {})[n]) || n,
				a = o
					? function (c) {
							var d = new o();
							(Ys._pt = 0),
								d.init(e, r ? c + r : c, Ys, 0, [e]),
								d.render(1, d),
								Ys._pt && Dh(1, Ys);
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
			return Be.getTweensOf(e, !0).length > 0;
		},
		defaults: function (e) {
			return e && e.ease && (e.ease = ss(e.ease, mo.ease)), f0(mo, e || {});
		},
		config: function (e) {
			return f0(On, e || {});
		},
		registerEffect: function (e) {
			var n = e.name,
				r = e.effect,
				i = e.plugins,
				s = e.defaults,
				o = e.extendTimeline;
			(i || '').split(',').forEach(function (l) {
				return (
					l && !kn[l] && !jn[l] && Fl(n + ' effect requires ' + l + ' plugin.')
				);
			}),
				($c[n] = function (l, u, a) {
					return r(Wn(l), Xn(u || {}, s), a);
				}),
				o &&
					(qt.prototype[n] = function (l, u, a) {
						return this.add($c[n](l, Or(u) ? u : (a = u) && {}, this), a);
					});
		},
		registerEase: function (e, n) {
			pe[e] = ss(n);
		},
		parseEase: function (e, n) {
			return arguments.length ? ss(e, n) : pe;
		},
		getById: function (e) {
			return Be.getById(e);
		},
		exportRoot: function (e, n) {
			e === void 0 && (e = {});
			var r = new qt(e),
				i,
				s;
			for (
				r.smoothChildTiming = pn(e.smoothChildTiming),
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
							i instanceof rt &&
							i.vars.onComplete === i._targets[0]
						)) &&
						wr(r, i, i._start - i._delay),
					(i = s);
			return wr(Be, r, 0), r;
		},
		context: function (e, n) {
			return e ? new mv(e, n) : Ae;
		},
		matchMedia: function (e) {
			return new KS(e);
		},
		matchMediaRefresh: function () {
			return (
				os.forEach(function (e) {
					var n = e.conditions,
						r,
						i;
					for (i in n) n[i] && ((n[i] = !1), (r = 1));
					r && e.revert();
				}) || fd()
			);
		},
		addEventListener: function (e, n) {
			var r = Gu[e] || (Gu[e] = []);
			~r.indexOf(n) || r.push(n);
		},
		removeEventListener: function (e, n) {
			var r = Gu[e],
				i = r && r.indexOf(n);
			i >= 0 && r.splice(i, 1);
		},
		utils: {
			wrap: NS,
			wrapYoyo: OS,
			distribute: Gg,
			random: qg,
			snap: Kg,
			normalize: PS,
			getUnit: $t,
			clamp: kS,
			splitColor: nv,
			toArray: Wn,
			selector: ud,
			mapRange: Jg,
			pipe: ES,
			unitize: CS,
			interpolate: MS,
			shuffle: Xg,
		},
		install: Ag,
		effects: $c,
		ticker: Tn,
		updateRoot: qt.updateRoot,
		plugins: kn,
		globalTimeline: Be,
		core: {
			PropTween: mn,
			globals: Fg,
			Tween: rt,
			Timeline: qt,
			Animation: Ul,
			getCache: rs,
			_removeLinkedListItem: lc,
			reverting: function () {
				return Ut;
			},
			context: function (e) {
				return e && Ae && (Ae.data.push(e), (e._ctx = Ae)), Ae;
			},
			suppressOverwrites: function (e) {
				return (wh = e);
			},
		},
	};
_n('to,from,fromTo,delayedCall,set,killTweensOf', function (t) {
	return (Ra[t] = rt[t]);
});
Tn.add(qt.updateRoot);
Ys = Ra.to({}, { duration: 0 });
var qS = function (e, n) {
		for (var r = e._pt; r && r.p !== n && r.op !== n && r.fp !== n; )
			r = r._next;
		return r;
	},
	ZS = function (e, n) {
		var r = e._targets,
			i,
			s,
			o;
		for (i in n)
			for (s = r.length; s--; )
				(o = e._ptLookup[s][i]),
					o &&
						(o = o.d) &&
						(o._pt && (o = qS(o, i)),
						o && o.modifier && o.modifier(n[i], e, r[s], i));
	},
	Hc = function (e, n) {
		return {
			name: e,
			rawVars: 1,
			init: function (i, s, o) {
				o._onInit = function (l) {
					var u, a;
					if (
						(wt(s) &&
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
					ZS(l, s);
				};
			},
		};
	},
	vn =
		Ra.registerPlugin(
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
						Ut ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d), (r = r._next);
				},
			},
			{
				name: 'endArray',
				init: function (e, n) {
					for (var r = n.length; r--; )
						this.add(e, r, e[r] || 0, n[r], 0, 0, 0, 0, 0, 1);
				},
			},
			Hc('roundProps', ad),
			Hc('modifiers'),
			Hc('snap', Kg),
		) || Ra;
rt.version = qt.version = vn.version = '3.12.5';
Lg = 1;
kh() && yo();
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
 */ var g0,
	fi,
	no,
	zh,
	Zi,
	v0,
	Lh,
	JS = function () {
		return typeof window < 'u';
	},
	Zr = {},
	Yi = 180 / Math.PI,
	ro = Math.PI / 180,
	Ps = Math.atan2,
	y0 = 1e8,
	Ah = /([A-Z])/g,
	ek = /(left|right|width|margin|padding|x)/i,
	tk = /[\s,\(]\S/,
	Sr = {
		autoAlpha: 'opacity,visibility',
		scale: 'scaleX,scaleY',
		alpha: 'opacity',
	},
	dd = function (e, n) {
		return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u, n);
	},
	nk = function (e, n) {
		return n.set(
			n.t,
			n.p,
			e === 1 ? n.e : Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u,
			n,
		);
	},
	rk = function (e, n) {
		return n.set(
			n.t,
			n.p,
			e ? Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u : n.b,
			n,
		);
	},
	ik = function (e, n) {
		var r = n.s + n.c * e;
		n.set(n.t, n.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + n.u, n);
	},
	gv = function (e, n) {
		return n.set(n.t, n.p, e ? n.e : n.b, n);
	},
	vv = function (e, n) {
		return n.set(n.t, n.p, e !== 1 ? n.b : n.e, n);
	},
	sk = function (e, n, r) {
		return (e.style[n] = r);
	},
	ok = function (e, n, r) {
		return e.style.setProperty(n, r);
	},
	lk = function (e, n, r) {
		return (e._gsap[n] = r);
	},
	uk = function (e, n, r) {
		return (e._gsap.scaleX = e._gsap.scaleY = r);
	},
	ak = function (e, n, r, i, s) {
		var o = e._gsap;
		(o.scaleX = o.scaleY = r), o.renderTransform(s, o);
	},
	ck = function (e, n, r, i, s) {
		var o = e._gsap;
		(o[n] = r), o.renderTransform(s, o);
	},
	We = 'transform',
	gn = We + 'Origin',
	fk = function t(e, n) {
		var r = this,
			i = this.target,
			s = i.style,
			o = i._gsap;
		if (e in Zr && s) {
			if (((this.tfm = this.tfm || {}), e !== 'transform'))
				(e = Sr[e] || e),
					~e.indexOf(',')
						? e.split(',').forEach(function (l) {
								return (r.tfm[l] = Vr(i, l));
							})
						: (this.tfm[e] = o.x ? o[e] : Vr(i, e)),
					e === gn && (this.tfm.zOrigin = o.zOrigin);
			else
				return Sr.transform.split(',').forEach(function (l) {
					return t.call(r, l, n);
				});
			if (this.props.indexOf(We) >= 0) return;
			o.svg &&
				((this.svgo = i.getAttribute('data-svg-origin')),
				this.props.push(gn, n, '')),
				(e = We);
		}
		(s || n) && this.props.push(e, n, s[e]);
	},
	yv = function (e) {
		e.translate &&
			(e.removeProperty('translate'),
			e.removeProperty('scale'),
			e.removeProperty('rotate'));
	},
	dk = function () {
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
								: e[s].replace(Ah, '-$1').toLowerCase(),
						);
		if (this.tfm) {
			for (o in this.tfm) i[o] = this.tfm[o];
			i.svg &&
				(i.renderTransform(),
				n.setAttribute('data-svg-origin', this.svgo || '')),
				(s = Lh()),
				(!s || !s.isStart) &&
					!r[We] &&
					(yv(r),
					i.zOrigin &&
						r[gn] &&
						((r[gn] += ' ' + i.zOrigin + 'px'),
						(i.zOrigin = 0),
						i.renderTransform()),
					(i.uncache = 1));
		}
	},
	xv = function (e, n) {
		var r = { target: e, props: [], revert: dk, save: fk };
		return (
			e._gsap || vn.core.getCache(e),
			n &&
				n.split(',').forEach(function (i) {
					return r.save(i);
				}),
			r
		);
	},
	wv,
	hd = function (e, n) {
		var r = fi.createElementNS
			? fi.createElementNS(
					(n || 'http://www.w3.org/1999/xhtml').replace(/^https/, 'http'),
					e,
				)
			: fi.createElement(e);
		return r && r.style ? r : fi.createElement(e);
	},
	Pr = function t(e, n, r) {
		var i = getComputedStyle(e);
		return (
			i[n] ||
			i.getPropertyValue(n.replace(Ah, '-$1').toLowerCase()) ||
			i.getPropertyValue(n) ||
			(!r && t(e, xo(n) || n, 1)) ||
			''
		);
	},
	x0 = 'O,Moz,ms,Ms,Webkit'.split(','),
	xo = function (e, n, r) {
		var i = n || Zi,
			s = i.style,
			o = 5;
		if (e in s && !r) return e;
		for (
			e = e.charAt(0).toUpperCase() + e.substr(1);
			o-- && !(x0[o] + e in s);

		);
		return o < 0 ? null : (o === 3 ? 'ms' : o >= 0 ? x0[o] : '') + e;
	},
	pd = function () {
		JS() &&
			window.document &&
			((g0 = window),
			(fi = g0.document),
			(no = fi.documentElement),
			(Zi = hd('div') || { style: {} }),
			hd('div'),
			(We = xo(We)),
			(gn = We + 'Origin'),
			(Zi.style.cssText =
				'border-width:0;line-height:0;position:absolute;padding:0'),
			(wv = !!xo('perspective')),
			(Lh = vn.core.reverting),
			(zh = 1));
	},
	Yc = function t(e) {
		var n = hd(
				'svg',
				(this.ownerSVGElement && this.ownerSVGElement.getAttribute('xmlns')) ||
					'http://www.w3.org/2000/svg',
			),
			r = this.parentNode,
			i = this.nextSibling,
			s = this.style.cssText,
			o;
		if (
			(no.appendChild(n),
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
			no.removeChild(n),
			(this.style.cssText = s),
			o
		);
	},
	w0 = function (e, n) {
		for (var r = n.length; r--; )
			if (e.hasAttribute(n[r])) return e.getAttribute(n[r]);
	},
	Sv = function (e) {
		var n;
		try {
			n = e.getBBox();
		} catch {
			n = Yc.call(e, !0);
		}
		return (
			(n && (n.width || n.height)) || e.getBBox === Yc || (n = Yc.call(e, !0)),
			n && !n.width && !n.x && !n.y
				? {
						x: +w0(e, ['x', 'cx', 'x1']) || 0,
						y: +w0(e, ['y', 'cy', 'y1']) || 0,
						width: 0,
						height: 0,
					}
				: n
		);
	},
	kv = function (e) {
		return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Sv(e));
	},
	ms = function (e, n) {
		if (n) {
			var r = e.style,
				i;
			n in Zr && n !== gn && (n = We),
				r.removeProperty
					? ((i = n.substr(0, 2)),
						(i === 'ms' || n.substr(0, 6) === 'webkit') && (n = '-' + n),
						r.removeProperty(
							i === '--' ? n : n.replace(Ah, '-$1').toLowerCase(),
						))
					: r.removeAttribute(n);
		}
	},
	di = function (e, n, r, i, s, o) {
		var l = new mn(e._pt, n, r, 0, 1, o ? vv : gv);
		return (e._pt = l), (l.b = i), (l.e = s), e._props.push(r), l;
	},
	S0 = { deg: 1, rad: 1, turn: 1 },
	hk = { grid: 1, flex: 1 },
	Mi = function t(e, n, r, i) {
		var s = parseFloat(r) || 0,
			o = (r + '').trim().substr((s + '').length) || 'px',
			l = Zi.style,
			u = ek.test(n),
			a = e.tagName.toLowerCase() === 'svg',
			c = (a ? 'client' : 'offset') + (u ? 'Width' : 'Height'),
			d = 100,
			f = i === 'px',
			h = i === '%',
			g,
			_,
			T,
			m;
		if (i === o || !s || S0[i] || S0[o]) return s;
		if (
			(o !== 'px' && !f && (s = t(e, n, r, 'px')),
			(m = e.getCTM && kv(e)),
			(h || o === '%') && (Zr[n] || ~n.indexOf('adius')))
		)
			return (
				(g = m ? e.getBBox()[u ? 'width' : 'height'] : e[c]),
				Ze(h ? (s / g) * d : (s / 100) * g)
			);
		if (
			((l[u ? 'width' : 'height'] = d + (f ? o : i)),
			(_ =
				~n.indexOf('adius') || (i === 'em' && e.appendChild && !a)
					? e
					: e.parentNode),
			m && (_ = (e.ownerSVGElement || {}).parentNode),
			(!_ || _ === fi || !_.appendChild) && (_ = fi.body),
			(T = _._gsap),
			T && h && T.width && u && T.time === Tn.time && !T.uncache)
		)
			return Ze((s / T.width) * d);
		if (h && (n === 'height' || n === 'width')) {
			var p = e.style[n];
			(e.style[n] = d + i), (g = e[c]), p ? (e.style[n] = p) : ms(e, n);
		} else
			(h || o === '%') &&
				!hk[Pr(_, 'display')] &&
				(l.position = Pr(e, 'position')),
				_ === e && (l.position = 'static'),
				_.appendChild(Zi),
				(g = Zi[c]),
				_.removeChild(Zi),
				(l.position = 'absolute');
		return (
			u && h && ((T = rs(_)), (T.time = Tn.time), (T.width = _[c])),
			Ze(f ? (g * s) / d : g && s ? (d / g) * s : 0)
		);
	},
	Vr = function (e, n, r, i) {
		var s;
		return (
			zh || pd(),
			n in Sr &&
				n !== 'transform' &&
				((n = Sr[n]), ~n.indexOf(',') && (n = n.split(',')[0])),
			Zr[n] && n !== 'transform'
				? ((s = Wl(e, i)),
					(s =
						n !== 'transformOrigin'
							? s[n]
							: s.svg
								? s.origin
								: za(Pr(e, gn)) + ' ' + s.zOrigin + 'px'))
				: ((s = e.style[n]),
					(!s || s === 'auto' || i || ~(s + '').indexOf('calc(')) &&
						(s =
							(Da[n] && Da[n](e, n, r)) ||
							Pr(e, n) ||
							Vg(e, n) ||
							(n === 'opacity' ? 1 : 0))),
			r && !~(s + '').trim().indexOf(' ') ? Mi(e, n, s, r) + r : s
		);
	},
	pk = function (e, n, r, i) {
		if (!r || r === 'none') {
			var s = xo(n, e, 1),
				o = s && Pr(e, s, 1);
			o && o !== r
				? ((n = s), (r = o))
				: n === 'borderColor' && (r = Pr(e, 'borderTopColor'));
		}
		var l = new mn(this._pt, e.style, n, 0, 1, pv),
			u = 0,
			a = 0,
			c,
			d,
			f,
			h,
			g,
			_,
			T,
			m,
			p,
			v,
			x,
			k;
		if (
			((l.b = r),
			(l.e = i),
			(r += ''),
			(i += ''),
			i === 'auto' &&
				((_ = e.style[n]),
				(e.style[n] = i),
				(i = Pr(e, n) || i),
				_ ? (e.style[n] = _) : ms(e, n)),
			(c = [r, i]),
			iv(c),
			(r = c[0]),
			(i = c[1]),
			(f = r.match(Hs) || []),
			(k = i.match(Hs) || []),
			k.length)
		) {
			for (; (d = Hs.exec(i)); )
				(T = d[0]),
					(p = i.substring(u, d.index)),
					g
						? (g = (g + 1) % 5)
						: (p.substr(-5) === 'rgba(' || p.substr(-5) === 'hsla(') && (g = 1),
					T !== (_ = f[a++] || '') &&
						((h = parseFloat(_) || 0),
						(x = _.substr((h + '').length)),
						T.charAt(1) === '=' && (T = to(h, T) + x),
						(m = parseFloat(T)),
						(v = T.substr((m + '').length)),
						(u = Hs.lastIndex - v.length),
						v ||
							((v = v || On.units[n] || x),
							u === i.length && ((i += v), (l.e += v))),
						x !== v && (h = Mi(e, n, _, v) || 0),
						(l._pt = {
							_next: l._pt,
							p: p || a === 1 ? p : ',',
							s: h,
							c: m - h,
							m: (g && g < 4) || n === 'zIndex' ? Math.round : 0,
						}));
			l.c = u < i.length ? i.substring(u, i.length) : '';
		} else l.r = n === 'display' && i === 'none' ? vv : gv;
		return Dg.test(i) && (l.e = 0), (this._pt = l), l;
	},
	k0 = { top: '0%', bottom: '100%', left: '0%', right: '100%', center: '50%' },
	_k = function (e) {
		var n = e.split(' '),
			r = n[0],
			i = n[1] || '50%';
		return (
			(r === 'top' || r === 'bottom' || i === 'left' || i === 'right') &&
				((e = r), (r = i), (i = e)),
			(n[0] = k0[r] || r),
			(n[1] = k0[i] || i),
			n.join(' ')
		);
	},
	mk = function (e, n) {
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
						Zr[l] && ((u = 1), (l = l === 'transformOrigin' ? gn : We)),
						ms(r, l);
			u &&
				(ms(r, We),
				o &&
					(o.svg && r.removeAttribute('transform'),
					Wl(r, 1),
					(o.uncache = 1),
					yv(i)));
		}
	},
	Da = {
		clearProps: function (e, n, r, i, s) {
			if (s.data !== 'isFromStart') {
				var o = (e._pt = new mn(e._pt, n, r, 0, 0, mk));
				return (o.u = i), (o.pr = -10), (o.tween = s), e._props.push(r), 1;
			}
		},
	},
	Bl = [1, 0, 0, 1, 0, 0],
	Tv = {},
	Ev = function (e) {
		return e === 'matrix(1, 0, 0, 1, 0, 0)' || e === 'none' || !e;
	},
	T0 = function (e) {
		var n = Pr(e, We);
		return Ev(n) ? Bl : n.substr(7).match(Rg).map(Ze);
	},
	Fh = function (e, n) {
		var r = e._gsap || rs(e),
			i = e.style,
			s = T0(e),
			o,
			l,
			u,
			a;
		return r.svg && e.getAttribute('transform')
			? ((u = e.transform.baseVal.consolidate().matrix),
				(s = [u.a, u.b, u.c, u.d, u.e, u.f]),
				s.join(',') === '1,0,0,1,0,0' ? Bl : s)
			: (s === Bl &&
					!e.offsetParent &&
					e !== no &&
					!r.svg &&
					((u = i.display),
					(i.display = 'block'),
					(o = e.parentNode),
					(!o || !e.offsetParent) &&
						((a = 1), (l = e.nextElementSibling), no.appendChild(e)),
					(s = T0(e)),
					u ? (i.display = u) : ms(e, 'display'),
					a &&
						(l
							? o.insertBefore(e, l)
							: o
								? o.appendChild(e)
								: no.removeChild(e))),
				n && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
	},
	_d = function (e, n, r, i, s, o) {
		var l = e._gsap,
			u = s || Fh(e, !0),
			a = l.xOrigin || 0,
			c = l.yOrigin || 0,
			d = l.xOffset || 0,
			f = l.yOffset || 0,
			h = u[0],
			g = u[1],
			_ = u[2],
			T = u[3],
			m = u[4],
			p = u[5],
			v = n.split(' '),
			x = parseFloat(v[0]) || 0,
			k = parseFloat(v[1]) || 0,
			C,
			E,
			N,
			j;
		r
			? u !== Bl &&
				(E = h * T - g * _) &&
				((N = x * (T / E) + k * (-_ / E) + (_ * p - T * m) / E),
				(j = x * (-g / E) + k * (h / E) - (h * p - g * m) / E),
				(x = N),
				(k = j))
			: ((C = Sv(e)),
				(x = C.x + (~v[0].indexOf('%') ? (x / 100) * C.width : x)),
				(k = C.y + (~(v[1] || v[0]).indexOf('%') ? (k / 100) * C.height : k))),
			i || (i !== !1 && l.smooth)
				? ((m = x - a),
					(p = k - c),
					(l.xOffset = d + (m * h + p * _) - m),
					(l.yOffset = f + (m * g + p * T) - p))
				: (l.xOffset = l.yOffset = 0),
			(l.xOrigin = x),
			(l.yOrigin = k),
			(l.smooth = !!i),
			(l.origin = n),
			(l.originIsAbsolute = !!r),
			(e.style[gn] = '0px 0px'),
			o &&
				(di(o, l, 'xOrigin', a, x),
				di(o, l, 'yOrigin', c, k),
				di(o, l, 'xOffset', d, l.xOffset),
				di(o, l, 'yOffset', f, l.yOffset)),
			e.setAttribute('data-svg-origin', x + ' ' + k);
	},
	Wl = function (e, n) {
		var r = e._gsap || new uv(e);
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
			_,
			T,
			m,
			p,
			v,
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
			z,
			$,
			w,
			q,
			oe,
			st,
			ge,
			Me;
		return (
			(c = d = f = _ = T = m = p = v = x = 0),
			(h = g = 1),
			(r.svg = !!(e.getCTM && kv(e))),
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
			(E = Fh(e, r.svg)),
			r.svg &&
				(r.uncache
					? ((z = e.getBBox()),
						(a = r.xOrigin - z.x + 'px ' + (r.yOrigin - z.y) + 'px'),
						(Q = ''))
					: (Q = !n && e.getAttribute('data-svg-origin')),
				_d(e, Q || a, !!Q || r.originIsAbsolute, r.smooth !== !1, E)),
			(k = r.xOrigin || 0),
			(C = r.yOrigin || 0),
			E !== Bl &&
				((H = E[0]),
				(D = E[1]),
				(I = E[2]),
				(Y = E[3]),
				(c = K = E[4]),
				(d = G = E[5]),
				E.length === 6
					? ((h = Math.sqrt(H * H + D * D)),
						(g = Math.sqrt(Y * Y + I * I)),
						(_ = H || D ? Ps(D, H) * Yi : 0),
						(p = I || Y ? Ps(I, Y) * Yi + _ : 0),
						p && (g *= Math.abs(Math.cos(p * ro))),
						r.svg && ((c -= k - (k * H + C * I)), (d -= C - (k * D + C * Y))))
					: ((Me = E[6]),
						(st = E[7]),
						(w = E[8]),
						(q = E[9]),
						(oe = E[10]),
						(ge = E[11]),
						(c = E[12]),
						(d = E[13]),
						(f = E[14]),
						(N = Ps(Me, oe)),
						(T = N * Yi),
						N &&
							((j = Math.cos(-N)),
							(M = Math.sin(-N)),
							(Q = K * j + w * M),
							(z = G * j + q * M),
							($ = Me * j + oe * M),
							(w = K * -M + w * j),
							(q = G * -M + q * j),
							(oe = Me * -M + oe * j),
							(ge = st * -M + ge * j),
							(K = Q),
							(G = z),
							(Me = $)),
						(N = Ps(-I, oe)),
						(m = N * Yi),
						N &&
							((j = Math.cos(-N)),
							(M = Math.sin(-N)),
							(Q = H * j - w * M),
							(z = D * j - q * M),
							($ = I * j - oe * M),
							(ge = Y * M + ge * j),
							(H = Q),
							(D = z),
							(I = $)),
						(N = Ps(D, H)),
						(_ = N * Yi),
						N &&
							((j = Math.cos(N)),
							(M = Math.sin(N)),
							(Q = H * j + D * M),
							(z = K * j + G * M),
							(D = D * j - H * M),
							(G = G * j - K * M),
							(H = Q),
							(K = z)),
						T &&
							Math.abs(T) + Math.abs(_) > 359.9 &&
							((T = _ = 0), (m = 180 - m)),
						(h = Ze(Math.sqrt(H * H + D * D + I * I))),
						(g = Ze(Math.sqrt(G * G + Me * Me))),
						(N = Ps(K, G)),
						(p = Math.abs(N) > 2e-4 ? N * Yi : 0),
						(x = ge ? 1 / (ge < 0 ? -ge : ge) : 0)),
				r.svg &&
					((Q = e.getAttribute('transform')),
					(r.forceCSS = e.setAttribute('transform', '') || !Ev(Pr(e, We))),
					Q && e.setAttribute('transform', Q))),
			Math.abs(p) > 90 &&
				Math.abs(p) < 270 &&
				(s
					? ((h *= -1), (p += _ <= 0 ? 180 : -180), (_ += _ <= 0 ? 180 : -180))
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
			(r.scaleX = Ze(h)),
			(r.scaleY = Ze(g)),
			(r.rotation = Ze(_) + l),
			(r.rotationX = Ze(T) + l),
			(r.rotationY = Ze(m) + l),
			(r.skewX = p + l),
			(r.skewY = v + l),
			(r.transformPerspective = x + o),
			(r.zOrigin = parseFloat(a.split(' ')[2]) || (!n && r.zOrigin) || 0) &&
				(i[gn] = za(a)),
			(r.xOffset = r.yOffset = 0),
			(r.force3D = On.force3D),
			(r.renderTransform = r.svg ? vk : wv ? Cv : gk),
			(r.uncache = 0),
			r
		);
	},
	za = function (e) {
		return (e = e.split(' '))[0] + ' ' + e[1];
	},
	Qc = function (e, n, r) {
		var i = $t(n);
		return Ze(parseFloat(n) + parseFloat(Mi(e, 'x', r + 'px', i))) + i;
	},
	gk = function (e, n) {
		(n.z = '0px'),
			(n.rotationY = n.rotationX = '0deg'),
			(n.force3D = 0),
			Cv(e, n);
	},
	$i = '0deg',
	Fo = '0px',
	Ui = ') ',
	Cv = function (e, n) {
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
			_ = r.scaleY,
			T = r.transformPerspective,
			m = r.force3D,
			p = r.target,
			v = r.zOrigin,
			x = '',
			k = (m === 'auto' && e && e !== 1) || m === !0;
		if (v && (d !== $i || c !== $i)) {
			var C = parseFloat(c) * ro,
				E = Math.sin(C),
				N = Math.cos(C),
				j;
			(C = parseFloat(d) * ro),
				(j = Math.cos(C)),
				(o = Qc(p, o, E * j * -v)),
				(l = Qc(p, l, -Math.sin(C) * -v)),
				(u = Qc(p, u, N * j * -v + v));
		}
		T !== Fo && (x += 'perspective(' + T + Ui),
			(i || s) && (x += 'translate(' + i + '%, ' + s + '%) '),
			(k || o !== Fo || l !== Fo || u !== Fo) &&
				(x +=
					u !== Fo || k
						? 'translate3d(' + o + ', ' + l + ', ' + u + ') '
						: 'translate(' + o + ', ' + l + Ui),
			a !== $i && (x += 'rotate(' + a + Ui),
			c !== $i && (x += 'rotateY(' + c + Ui),
			d !== $i && (x += 'rotateX(' + d + Ui),
			(f !== $i || h !== $i) && (x += 'skew(' + f + ', ' + h + Ui),
			(g !== 1 || _ !== 1) && (x += 'scale(' + g + ', ' + _ + Ui),
			(p.style[We] = x || 'translate(0, 0)');
	},
	vk = function (e, n) {
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
			_ = r.yOrigin,
			T = r.xOffset,
			m = r.yOffset,
			p = r.forceCSS,
			v = parseFloat(o),
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
				? ((u *= ro),
					(a *= ro),
					(k = Math.cos(u) * d),
					(C = Math.sin(u) * d),
					(E = Math.sin(u - a) * -f),
					(N = Math.cos(u - a) * f),
					a &&
						((c *= ro),
						(j = Math.tan(a - c)),
						(j = Math.sqrt(1 + j * j)),
						(E *= j),
						(N *= j),
						c &&
							((j = Math.tan(c)),
							(j = Math.sqrt(1 + j * j)),
							(k *= j),
							(C *= j))),
					(k = Ze(k)),
					(C = Ze(C)),
					(E = Ze(E)),
					(N = Ze(N)))
				: ((k = d), (N = f), (C = E = 0)),
			((v && !~(o + '').indexOf('px')) || (x && !~(l + '').indexOf('px'))) &&
				((v = Mi(h, 'x', o, 'px')), (x = Mi(h, 'y', l, 'px'))),
			(g || _ || T || m) &&
				((v = Ze(v + g - (g * k + _ * E) + T)),
				(x = Ze(x + _ - (g * C + _ * N) + m))),
			(i || s) &&
				((j = h.getBBox()),
				(v = Ze(v + (i / 100) * j.width)),
				(x = Ze(x + (s / 100) * j.height))),
			(j =
				'matrix(' + k + ',' + C + ',' + E + ',' + N + ',' + v + ',' + x + ')'),
			h.setAttribute('transform', j),
			p && (h.style[We] = j);
	},
	yk = function (e, n, r, i, s) {
		var o = 360,
			l = wt(s),
			u = parseFloat(s) * (l && ~s.indexOf('rad') ? Yi : 1),
			a = u - i,
			c = i + a + 'deg',
			d,
			f;
		return (
			l &&
				((d = s.split('_')[1]),
				d === 'short' && ((a %= o), a !== a % (o / 2) && (a += a < 0 ? o : -o)),
				d === 'cw' && a < 0
					? (a = ((a + o * y0) % o) - ~~(a / o) * o)
					: d === 'ccw' && a > 0 && (a = ((a - o * y0) % o) - ~~(a / o) * o)),
			(e._pt = f = new mn(e._pt, n, r, i, a, nk)),
			(f.e = c),
			(f.u = 'deg'),
			e._props.push(r),
			f
		);
	},
	E0 = function (e, n) {
		for (var r in n) e[r] = n[r];
		return e;
	},
	xk = function (e, n, r) {
		var i = E0({}, r._gsap),
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
				(o[We] = n),
				(l = Wl(r, 1)),
				ms(r, We),
				r.setAttribute('transform', a))
			: ((a = getComputedStyle(r)[We]),
				(o[We] = n),
				(l = Wl(r, 1)),
				(o[We] = a));
		for (u in Zr)
			(a = i[u]),
				(c = l[u]),
				a !== c &&
					s.indexOf(u) < 0 &&
					((h = $t(a)),
					(g = $t(c)),
					(d = h !== g ? Mi(r, u, a, g) : parseFloat(a)),
					(f = parseFloat(c)),
					(e._pt = new mn(e._pt, l, u, d, f - d, dd)),
					(e._pt.u = g || 0),
					e._props.push(u));
		E0(l, i);
	};
_n('padding,margin,Width,Radius', function (t, e) {
	var n = 'Top',
		r = 'Right',
		i = 'Bottom',
		s = 'Left',
		o = (e < 3 ? [n, r, i, s] : [n + s, n + r, i + r, i + s]).map(function (l) {
			return e < 2 ? t + l : 'border' + l + t;
		});
	Da[e > 1 ? 'border' + t : t] = function (l, u, a, c, d) {
		var f, h;
		if (arguments.length < 4)
			return (
				(f = o.map(function (g) {
					return Vr(l, g, a);
				})),
				(h = f.join(' ')),
				h.split(f[0]).length === 5 ? f[0] : h
			);
		(f = (c + '').split(' ')),
			(h = {}),
			o.forEach(function (g, _) {
				return (h[g] = f[_] = f[_] || f[((_ - 1) / 2) | 0]);
			}),
			l.init(u, h, d);
	};
});
var Pv = {
	name: 'css',
	register: pd,
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
			_,
			T,
			m,
			p,
			v,
			x,
			k,
			C,
			E,
			N;
		zh || pd(),
			(this.styles = this.styles || xv(e)),
			(N = this.styles.props),
			(this.tween = r);
		for (_ in n)
			if (_ !== 'autoRound' && ((c = n[_]), !(kn[_] && av(_, n, r, i, e, s)))) {
				if (
					((h = typeof c),
					(g = Da[_]),
					h === 'function' && ((c = c.call(r, i, e, s)), (h = typeof c)),
					h === 'string' && ~c.indexOf('random(') && (c = Vl(c)),
					g)
				)
					g(this, e, _, c, r) && (E = 1);
				else if (_.substr(0, 2) === '--')
					(a = (getComputedStyle(e).getPropertyValue(_) + '').trim()),
						(c += ''),
						(Ei.lastIndex = 0),
						Ei.test(a) || ((T = $t(a)), (m = $t(c))),
						m ? T !== m && (a = Mi(e, _, a, m) + m) : T && (c += T),
						this.add(l, 'setProperty', a, c, i, s, 0, 0, _),
						o.push(_),
						N.push(_, 0, l[_]);
				else if (h !== 'undefined') {
					if (
						(u && _ in u
							? ((a = typeof u[_] == 'function' ? u[_].call(r, i, e, s) : u[_]),
								wt(a) && ~a.indexOf('random(') && (a = Vl(a)),
								$t(a + '') ||
									a === 'auto' ||
									(a += On.units[_] || $t(Vr(e, _)) || ''),
								(a + '').charAt(1) === '=' && (a = Vr(e, _)))
							: (a = Vr(e, _)),
						(f = parseFloat(a)),
						(p = h === 'string' && c.charAt(1) === '=' && c.substr(0, 2)),
						p && (c = c.substr(2)),
						(d = parseFloat(c)),
						_ in Sr &&
							(_ === 'autoAlpha' &&
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
							_ !== 'scale' &&
								_ !== 'transform' &&
								((_ = Sr[_]), ~_.indexOf(',') && (_ = _.split(',')[0]))),
						(v = _ in Zr),
						v)
					) {
						if (
							(this.styles.save(_),
							x ||
								((k = e._gsap),
								(k.renderTransform && !n.parseTransform) ||
									Wl(e, n.parseTransform),
								(C = n.smoothOrigin !== !1 && k.smooth),
								(x = this._pt =
									new mn(this._pt, l, We, 0, 1, k.renderTransform, k, 0, -1)),
								(x.dep = 1)),
							_ === 'scale')
						)
							(this._pt = new mn(
								this._pt,
								k,
								'scaleY',
								k.scaleY,
								(p ? to(k.scaleY, p + d) : d) - k.scaleY || 0,
								dd,
							)),
								(this._pt.u = 0),
								o.push('scaleY', _),
								(_ += 'X');
						else if (_ === 'transformOrigin') {
							N.push(gn, 0, l[gn]),
								(c = _k(c)),
								k.svg
									? _d(e, c, 0, C, 0, this)
									: ((m = parseFloat(c.split(' ')[2]) || 0),
										m !== k.zOrigin && di(this, k, 'zOrigin', k.zOrigin, m),
										di(this, l, _, za(a), za(c)));
							continue;
						} else if (_ === 'svgOrigin') {
							_d(e, c, 1, C, 0, this);
							continue;
						} else if (_ in Tv) {
							yk(this, k, _, f, p ? to(f, p + c) : c);
							continue;
						} else if (_ === 'smoothOrigin') {
							di(this, k, 'smooth', k.smooth, c);
							continue;
						} else if (_ === 'force3D') {
							k[_] = c;
							continue;
						} else if (_ === 'transform') {
							xk(this, c, e);
							continue;
						}
					} else _ in l || (_ = xo(_) || _);
					if (v || ((d || d === 0) && (f || f === 0) && !tk.test(c) && _ in l))
						(T = (a + '').substr((f + '').length)),
							d || (d = 0),
							(m = $t(c) || (_ in On.units ? On.units[_] : T)),
							T !== m && (f = Mi(e, _, a, m)),
							(this._pt = new mn(
								this._pt,
								v ? k : l,
								_,
								f,
								(p ? to(f, p + d) : d) - f,
								!v && (m === 'px' || _ === 'zIndex') && n.autoRound !== !1
									? ik
									: dd,
							)),
							(this._pt.u = m || 0),
							T !== m && m !== '%' && ((this._pt.b = a), (this._pt.r = rk));
					else if (_ in l) pk.call(this, e, _, a, p ? p + c : c);
					else if (_ in e) this.add(e, _, a || e[_], p ? p + c : c, i, s);
					else if (_ !== 'parseTransform') {
						Eh(_, c);
						continue;
					}
					v || (_ in l ? N.push(_, 0, l[_]) : N.push(_, 1, a || e[_])),
						o.push(_);
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
	aliases: Sr,
	getSetter: function (e, n, r) {
		var i = Sr[n];
		return (
			i && i.indexOf(',') < 0 && (n = i),
			n in Zr && n !== gn && (e._gsap.x || Vr(e, 'x'))
				? r && v0 === r
					? n === 'scale'
						? uk
						: lk
					: (v0 = r || {}) && (n === 'scale' ? ak : ck)
				: e.style && !Sh(e.style[n])
					? sk
					: ~n.indexOf('-')
						? ok
						: Rh(e, n)
		);
	},
	core: { _removeProperty: ms, _getMatrix: Fh },
};
vn.utils.checkPrefix = xo;
vn.core.getStyleSaver = xv;
(function (t, e, n, r) {
	var i = _n(t + ',' + e + ',' + n, function (s) {
		Zr[s] = 1;
	});
	_n(e, function (s) {
		(On.units[s] = 'deg'), (Tv[s] = 1);
	}),
		(Sr[i[13]] = t + ',' + e),
		_n(r, function (s) {
			var o = s.split(':');
			Sr[o[1]] = i[o[0]];
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
vn.registerPlugin(Pv);
var en = vn.registerPlugin(Pv) || vn;
en.core.Tween;
/*!
 * @gsap/react 2.1.0
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ let C0 = typeof window < 'u' ? te.useLayoutEffect : te.useEffect,
	P0 = (t) => t && !Array.isArray(t) && typeof t == 'object',
	wu = [],
	wk = {},
	Nv = en;
const Zl = (t, e = wu) => {
	let n = wk;
	P0(t)
		? ((n = t), (t = null), (e = 'dependencies' in n ? n.dependencies : wu))
		: P0(e) && ((n = e), (e = 'dependencies' in n ? n.dependencies : wu));
	let { scope: r, revertOnUpdate: i } = n,
		[s, o] = te.useState(!1);
	t &&
		typeof t != 'function' &&
		console.warn('First parameter must be a function or config object');
	const l = Nv.context(() => {}, r),
		u = (d) => l.add(null, d),
		a = () => l.revert(),
		c = e && e.length && !i;
	return (
		C0(() => {
			if ((t && l.add(t, r), !c || !s)) return a;
		}, e),
		c && C0(() => (o(!0), a), wu),
		{ context: l, contextSafe: u }
	);
};
Zl.register = (t) => {
	Nv = t;
};
Zl.headless = !0;
function Sk() {
	const t = te.useRef(null),
		e = te.useRef(null),
		n = te.useRef(null),
		r = te.useRef(null),
		i = te.useRef(null);
	return (
		Zl(
			() => {
				const s = r.current.offsetHeight,
					o = i.current.offsetHeight,
					l = () =>
						en.to(r.current, {
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
						en.to(e.current, {
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
						en.to(n.current, {
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
				en.matchMedia().add('(min-width: 1024px)', () => {
					l(), u(), a();
				});
			},
			{ scope: t },
		),
		y.jsx(y.Fragment, {
			children: y.jsx('div', {
				className: Ie.container,
				id: 'about',
				ref: t,
				children: y.jsxs('div', {
					className: Ie.outer,
					ref: i,
					children: [
						y.jsx('div', {
							className: Ie.descWrapper,
							children: y.jsxs('div', {
								className: Ie.desc,
								ref: r,
								children: [
									y.jsx('div', {
										className: Ie.titleWrapper,
										children: y.jsxs('div', {
											className: Ie.title.inner,
											children: [
												y.jsx('h2', {
													className: Ie.title,
													children: 'ABOUT US',
												}),
												y.jsx('h3', {
													className: Ie.subTitle,
													children: 'モルツが大切にしていること',
												}),
											],
										}),
									}),
									y.jsx('div', {
										className: Ie.textWrapper,
										children: y.jsxs('div', {
											className: Ie.textInner,
											children: [
												y.jsxs('p', {
													className: Ie.text,
													children: [
														'まず、見た目の美しさだけでなく、',
														y.jsx('br', {}),
														'マーケティング的な視点からデザインを構築し、',
														y.jsx('br', {}),
														'メッセージとの融合を目指します。',
														y.jsx('br', {}),
														'効果的なコミュニケーションを提供し、',
														y.jsx('br', {}),
														'クライアントとの関係を築き上げます。',
													],
												}),
												y.jsxs('p', {
													className: Ie.text,
													children: [
														'そしてもう一つ、デザインという',
														y.jsx('br', {}),
														'コミュニケーションを通じてクライアントと協力し、',
														y.jsx('br', {}),
														'共に喜びを分かち合える仕事をすること。',
														y.jsx('br', {}),
														'そのために私たちは、作品という成果が実るよう、',
														y.jsx('br', {}),
														'日々デザインという“畑”を耕し続けています。',
													],
												}),
												y.jsxs('p', {
													className: Ie.text,
													children: [
														'“ モルツ ” は、企画から制作ディレクションまで、',
														y.jsx('br', {}),
														'トータルに手がけているデザイン会社です。',
														y.jsx('br', {}),
														'直接取引から大手代理店や出版社などを受注先として、',
														y.jsx('br', {}),
														'大手、中小企業、または各種団体など',
														y.jsx('br', {}),
														'さまざまな業種、業態の広告を企画から参加しながら',
														y.jsx('br', {}),
														'グラフィックデザイン業務を中心に、',
														y.jsx('br', {}),
														'お手伝いさせていただきます。',
													],
												}),
											],
										}),
									}),
								],
							}),
						}),
						y.jsxs('div', {
							className: Ie.logoContainer,
							children: [
								y.jsx('div', {
									className: Ie.logoMotion01,
									ref: e,
									children: y.jsx('div', {
										className: Ie.outer,
										children: y.jsx('img', {
											className: Ie.inner,
											src: iS,
											alt: 'malts-logo',
										}),
									}),
								}),
								y.jsx('div', {
									className: Ie.logoMotion02,
									ref: n,
									children: y.jsx('div', {
										className: Ie.outer,
										children: y.jsx('img', {
											className: Ie.inner,
											src: sS,
											alt: 'malts-logo',
										}),
									}),
								}),
								y.jsx('div', {
									className: Ie.logoMotion03,
									children: y.jsx('div', {
										className: Ie.outer,
										children: y.jsx('img', {
											className: Ie.inner,
											src: oS,
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
const kk = '/sample-site/assets/PAL-LOuPWGK6.jpg',
	Tk = '/sample-site/assets/PAL_spread-8kIvk1I0.jpg',
	Ek = '/sample-site/assets/jinai-mJBqGcrV.jpg',
	Ck = '/sample-site/assets/jinai_spread-9VBOCCRc.jpg',
	Pk = '/sample-site/assets/sandisk-cLLxX1UE.jpg',
	Nk = '/sample-site/assets/sandisk_spread-f9Gbc75b.jpg',
	Ok = '/sample-site/assets/todai-fi0CqSGh.jpg',
	Mk = '/sample-site/assets/todai_spread-UK31Cux5.jpg',
	jk = '/sample-site/assets/unicity-EdjOdgp8.jpg',
	Rk = '/sample-site/assets/unicity_spread-yij5WoFD.jpg',
	Dk = '_container_fd0zl_29',
	zk = '_titleWrapper_fd0zl_43',
	Lk = '_title_fd0zl_43',
	Ak = '_wrapper_fd0zl_53',
	Fk = '_subTitleWrapper_fd0zl_60',
	Ik = '_subTitle_fd0zl_60',
	Vk = '_imageContainer_fd0zl_81',
	$k = '_flex_fd0zl_101',
	Uk = '_figure_fd0zl_128',
	Bk = '_show_fd0zl_153',
	Wk = '_hidden_fd0zl_157',
	$e = {
		container: Dk,
		titleWrapper: zk,
		title: Lk,
		wrapper: Ak,
		subTitleWrapper: Fk,
		subTitle: Ik,
		imageContainer: Vk,
		flex: $k,
		figure: Uk,
		show: Bk,
		hidden: Wk,
	};
function bk() {
	const e = Object.values(
			Object.assign({
				'../../../assets/img/works/graphic/PAL.jpg': kk,
				'../../../assets/img/works/graphic/PAL_spread.jpg': Tk,
				'../../../assets/img/works/graphic/jinai.jpg': Ek,
				'../../../assets/img/works/graphic/jinai_spread.jpg': Ck,
				'../../../assets/img/works/graphic/sandisk.jpg': Pk,
				'../../../assets/img/works/graphic/sandisk_spread.jpg': Nk,
				'../../../assets/img/works/graphic/todai.jpg': Ok,
				'../../../assets/img/works/graphic/todai_spread.jpg': Mk,
				'../../../assets/img/works/graphic/unicity.jpg': jk,
				'../../../assets/img/works/graphic/unicity_spread.jpg': Rk,
			}),
		).reduce((r, i, s, o) => (s % 2 === 0 && r.push([i, o[s + 1]]), r), []),
		n = te.useRef(null);
	return (
		Zl(
			() => {
				const r = n.current.offsetWidth,
					i = en.utils.toArray(`.${$e.figure}`);
				en.matchMedia().add('(min-width: 768px)', () => {
					en.to(i, {
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
		y.jsx(y.Fragment, {
			children: y.jsx('section', {
				className: $e.container,
				ref: n,
				children: y.jsxs('div', {
					className: $e.titleWrapper,
					children: [
						y.jsx('div', {
							className: $e.titleWrapper,
							children: y.jsx('h2', { className: $e.title, children: 'WORKS' }),
						}),
						y.jsxs('div', {
							className: $e.wrapper,
							children: [
								y.jsx('div', {
									className: $e.subTitleWrapper,
									children: y.jsx('h2', {
										className: $e.subTitle,
										children: 'GRAPHIC',
									}),
								}),
								y.jsx('div', {
									className: $e.imageContainer,
									children: y.jsx('div', {
										className: $e.flex,
										children: e.map((r, i) =>
											y.jsxs(
												'figure',
												{
													className: $e.figure,
													children: [
														y.jsxs('picture', {
															className: $e.show,
															children: [
																y.jsx('source', {}),
																y.jsx('img', {
																	src: r[0],
																	alt: 'Graphic Work',
																}),
															],
														}),
														y.jsxs('picture', {
															className: $e.hidden,
															children: [
																y.jsx('source', {}),
																y.jsx('img', {
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
const Hk = '/sample-site/assets/23_website-eYCJrssh.jpg',
	Yk = '/sample-site/assets/23_website_scroll-z4Xc32FC.jpg',
	Qk = '/sample-site/assets/JEED_website-R72Ygrbz.jpg',
	Xk = '/sample-site/assets/JEED_website_scroll-EsmQSEHq.jpg',
	Gk = '/sample-site/assets/jinai_website-PoSL6BLb.jpg',
	Kk = '/sample-site/assets/jinai_website_scroll-3bEVgtNV.jpg',
	qk = '/sample-site/assets/naikakufu_website-k0zfn7LZ.jpg',
	Zk = '/sample-site/assets/naikakukfu_website_scroll-g7XKKCOH.jpg',
	Jk = '/sample-site/assets/tokyu_website-yVYY_O_S.jpg',
	e2 = '/sample-site/assets/tokyu_website_scroll-j1NB_5aM.jpg';
function t2() {
	const e = Object.values(
			Object.assign({
				'../../../assets/img/works/website/23_website.jpg': Hk,
				'../../../assets/img/works/website/23_website_scroll.jpg': Yk,
				'../../../assets/img/works/website/JEED_website.jpg': Qk,
				'../../../assets/img/works/website/JEED_website_scroll.jpg': Xk,
				'../../../assets/img/works/website/jinai_website.jpg': Gk,
				'../../../assets/img/works/website/jinai_website_scroll.jpg': Kk,
				'../../../assets/img/works/website/naikakufu_website.jpg': qk,
				'../../../assets/img/works/website/naikakukfu_website_scroll.jpg': Zk,
				'../../../assets/img/works/website/tokyu_website.jpg': Jk,
				'../../../assets/img/works/website/tokyu_website_scroll.jpg': e2,
			}),
		).reduce((r, i, s, o) => (s % 2 === 0 && r.push([i, o[s + 1]]), r), []),
		n = te.useRef(null);
	return (
		Zl(
			() => {
				const r = n.current.offsetWidth,
					i = en.utils.toArray(`.${$e.figure}`);
				en.matchMedia().add('(min-width: 768px)', () => {
					en.to(i, {
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
		y.jsx(y.Fragment, {
			children: y.jsx('section', {
				className: $e.container,
				ref: n,
				children: y.jsxs('div', {
					className: $e.wrapper,
					children: [
						y.jsx('div', {
							className: $e.subTitleWrapper,
							children: y.jsx('h2', {
								className: $e.subTitle,
								children: 'WEBSITE',
							}),
						}),
						y.jsx('div', {
							className: $e.imageContainer,
							children: y.jsx('div', {
								className: $e.flex,
								children: e.map((r, i) =>
									y.jsxs(
										'figure',
										{
											className: $e.figure,
											children: [
												y.jsxs('picture', {
													className: $e.show,
													children: [
														y.jsx('source', {}),
														y.jsx('img', { src: r[0], alt: '' }),
													],
												}),
												y.jsxs('picture', {
													className: $e.hidden,
													children: [
														y.jsx('source', {}),
														y.jsx('img', { src: r[1], alt: '' }),
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
const n2 = '_container_ecz2y_29',
	r2 = '_subTitleWrapper_ecz2y_36',
	i2 = '_subTitle_ecz2y_36',
	s2 = '_description_ecz2y_56',
	o2 = '_details_ecz2y_62',
	l2 = '_subHeading_ecz2y_70',
	u2 = '_list_ecz2y_80',
	Bi = {
		container: n2,
		subTitleWrapper: r2,
		subTitle: i2,
		description: s2,
		details: o2,
		subHeading: l2,
		list: u2,
	},
	N0 = [
		{
			id: '1',
			title: '企業・学校・病院案内パンフレット',
			list: [
				'（株）サンディスク会社案内',
				'（株）ソラスト入社案内',
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
				'（株）グンゼ 「Jean- Louis Scherrer」',
				'イオン 「イオンショップ',
				'（株）はるやま レディーススーツ ViVi fleurs〈マニュアル・ガイドブック〉',
				'（株）日本コカ・コーラ コカ・コーラ日本版VIS',
				'野村アセットマネジメント 「投資信託はじめてガイド」',
				'（株）ハーバライフ・オブ・ジャパン 「はじめてBook」 等',
			],
		},
		{
			id: '4',
			title: 'パッケージデザイン',
			list: [
				'（株）日本コカ・コーラ 清涼飲料水 「TADAS」',
				'（株）ユニシティ・ジャパン 化粧品 「Be」 等',
			],
		},
		{
			id: '5',
			title: 'キャンペーン',
			list: [
				'（株）マイクロソフト 春キャンペーン',
				'独立行政法人高齢・障害・求職者雇用支援機構職員採用サイト',
				'中小企業経営診断シンポジウム',
				'ひがしん創業支援事業',
				'ケーブル技術ショー',
				'東京国際映画祭マーケットイベント',
				'（株）はるやま レディーススーツViViキャンペーン',
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
function a2() {
	function t({ num: e }) {
		return y.jsxs('div', {
			className: Bi.details,
			children: [
				y.jsx('h3', { className: Bi.subHeading, children: N0[e].title }),
				y.jsx('ul', {
					className: Bi.list,
					children: N0[e].list.map((n, r) => y.jsx('li', { children: n }, r)),
				}),
			],
		});
	}
	return y.jsx(y.Fragment, {
		children: y.jsxs('section', {
			className: Bi.container,
			children: [
				y.jsx('div', {
					className: Bi.subTitleWrapper,
					children: y.jsx('h2', {
						className: Bi.subTitle,
						children: 'CLIENT LIST',
					}),
				}),
				y.jsxs('div', {
					className: Bi.description,
					children: [
						y.jsx(t, { num: 0 }),
						y.jsx(t, { num: 1 }),
						y.jsx(t, { num: 2 }),
						y.jsx(t, { num: 3 }),
						y.jsx(t, { num: 4 }),
						y.jsx(t, { num: 5 }),
					],
				}),
			],
		}),
	});
}
const c2 = '_container_iqa86_29',
	f2 = '_titleWrapper_iqa86_35',
	d2 = '_title_iqa86_35',
	h2 = { container: c2, titleWrapper: f2, title: d2 };
function p2() {
	return y.jsx(y.Fragment, {
		children: y.jsxs('article', {
			className: h2.container,
			id: 'works',
			children: [y.jsx(bk, {}), y.jsx(t2, {}), y.jsx(a2, {})],
		}),
	});
}
const _2 = '_module_147a5_29',
	m2 = '_titleWrapper_147a5_36',
	g2 = '_title_147a5_36',
	v2 = '_outer_147a5_47',
	y2 = '_inner_147a5_53',
	x2 = '_subtitleWrapper_147a5_57',
	w2 = '_subtitle_147a5_57',
	S2 = '_info_147a5_76',
	k2 = '_access_147a5_119',
	T2 = '_location_147a5_130',
	E2 = '_textarea_147a5_136',
	C2 = '_desc_147a5_146',
	P2 = '_text_147a5_136',
	N2 = '_map_147a5_172',
	Se = {
		module: _2,
		titleWrapper: m2,
		title: g2,
		outer: v2,
		inner: y2,
		subtitleWrapper: x2,
		subtitle: w2,
		info: S2,
		access: k2,
		location: T2,
		textarea: E2,
		desc: C2,
		text: P2,
		map: N2,
		'icon-JR': '_icon-JR_147a5_261',
		'icon-TokyoMetro': '_icon-TokyoMetro_147a5_270',
		'icon-background': '_icon-background_147a5_275',
		'icon-logo': '_icon-logo_147a5_279',
	};
function O2() {
	return y.jsx(y.Fragment, {
		children: y.jsxs('article', {
			className: Se.module,
			id: 'company',
			children: [
				y.jsx('div', {
					className: Se.titleWrapper,
					children: y.jsx('h2', { className: Se.title, children: 'COMPANY' }),
				}),
				y.jsxs('section', {
					className: Se.outer,
					children: [
						y.jsxs('div', {
							className: Se.inner,
							children: [
								y.jsx('div', {
									className: Se.subtitleWrapper,
									children: y.jsx('h3', {
										className: Se.subtitle,
										children: 'INFORMATION',
									}),
								}),
								y.jsx('table', {
									className: Se.info,
									'aria-label': '会社概要',
									children: y.jsxs('tbody', {
										children: [
											y.jsxs('tr', {
												children: [
													y.jsx('th', { children: '社名' }),
													y.jsx('td', { children: '株式会社 モルツ' }),
												],
											}),
											y.jsxs('tr', {
												children: [
													y.jsx('th', { children: '設立' }),
													y.jsx('td', { children: '1990年10月1日' }),
												],
											}),
											y.jsxs('tr', {
												children: [
													y.jsx('th', { children: '資本金' }),
													y.jsx('td', { children: '1,000,000円' }),
												],
											}),
											y.jsxs('tr', {
												children: [
													y.jsx('th', { children: '代表者' }),
													y.jsx('td', { children: '代表取締役社長  ** **' }),
												],
											}),
											y.jsxs('tr', {
												children: [
													y.jsx('th', { children: '取引銀行' }),
													y.jsx('td', {
														children:
															'さわやか信用金庫 青山渋谷支店 当座******',
													}),
												],
											}),
											y.jsxs('tr', {
												children: [
													y.jsx('th', { children: '主要取引先' }),
													y.jsx('td', {
														children: y.jsxs('ul', {
															children: [
																y.jsx('li', {
																	children: '合同会社ウェブレーン',
																}),
																y.jsx('li', { children: '株式会社旺文社' }),
																y.jsx('li', {
																	children: '株式会社コムブリッジ',
																}),
																y.jsx('li', {
																	children: '株式会社コムブレインズ',
																}),
																y.jsx('li', { children: '埼玉医科大学病院' }),
																y.jsx('li', {
																	children: '社会福祉法人埼玉医療福祉会',
																}),
																y.jsx('li', { children: '仁愛大学' }),
																y.jsx('li', { children: '株式会社ディスコ' }),
																y.jsx('li', { children: '株式会社美松堂' }),
																y.jsx('li', {
																	children: '株式会社モメンタム ジャパン',
																}),
																y.jsx('li', {
																	children: '株式会社ライオン社 他',
																}),
															],
														}),
													}),
												],
											}),
											y.jsxs('tr', {
												children: [
													y.jsx('th', { children: 'スタッフ' }),
													y.jsx('td', {
														children: y.jsxs('ul', {
															children: [
																y.jsx('li', {
																	children: 'クリエイティブディレクター1名',
																}),
																y.jsx('li', {
																	children: 'ディレクター・デザイナー2名',
																}),
																y.jsx('li', {
																	children: 'WEBディレクター・デザイナー2名',
																}),
																y.jsx('li', { children: 'コピーライター4名' }),
																y.jsx('li', { children: 'カメラマン5名' }),
																y.jsx('li', {
																	children: 'イラストレーター2名',
																}),
																y.jsx('li', { children: 'デザイナー1名' }),
																y.jsx('li', { children: 'EBデザイナー1名' }),
																y.jsx('li', {
																	children: '動画クリエイター2名',
																}),
																y.jsx('li', {
																	children: 'システムエンジニア1名',
																}),
																y.jsx('li', { children: 'ヘアメイク2名' }),
															],
														}),
													}),
												],
											}),
											y.jsxs('tr', {
												children: [
													y.jsx('th', { children: '業務内容' }),
													y.jsx('td', {
														children: y.jsxs('ul', {
															children: [
																y.jsx('li', {
																	children: '企業・学校・病院案内パンフレット',
																}),
																y.jsx('li', { children: 'ホームページ制作' }),
																y.jsx('li', {
																	children:
																		'イベント・キャンペーンSPツール（ポスター、チラシ等）',
																}),
																y.jsx('li', { children: '製品カタログ' }),
																y.jsx('li', { children: '企業PR誌' }),
																y.jsx('li', { children: '新聞・雑誌広告' }),
																y.jsx('li', { children: '書籍' }),
																y.jsx('li', { children: 'パッケージ' }),
																y.jsx('li', { children: 'ロゴマーク制定等' }),
																y.jsx('li', {
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
						}),
						y.jsxs('div', {
							className: Se.inner,
							children: [
								y.jsx('div', {
									className: Se.subtitleWrapper,
									children: y.jsx('h3', {
										className: Se.subtitle,
										children: 'ACCESS',
									}),
								}),
								y.jsxs('div', {
									className: Se.access,
									children: [
										y.jsxs('div', {
											className: Se.location,
											children: [
												y.jsx('div', {
													className: Se.textarea,
													children: y.jsxs('div', {
														className: Se.desc,
														children: [
															y.jsx('h4', { children: '所在地' }),
															y.jsxs('div', {
																className: Se.text,
																children: [
																	'〒150-0001',
																	y.jsx('br', { 'aria-hidden': 'true' }),
																	'東京都 渋谷区 神宮前 1-10-34',
																	y.jsx('br', { 'aria-hidden': 'true' }),
																	'原宿コーポ別館 707',
																],
															}),
														],
													}),
												}),
												y.jsx('div', {
													className: Se.textarea,
													children: y.jsxs('div', {
														className: Se.desc,
														children: [
															y.jsx('h4', { children: '交通機関' }),
															y.jsxs('div', {
																className: Se.text,
																children: [
																	y.jsxs('span', {
																		children: [
																			y.jsx('i', {
																				className: Se['icon-JR'],
																				'aria-hidden': 'true',
																			}),
																			'山手線 原宿駅',
																		],
																	}),
																	y.jsx('span', { children: '東口 徒歩5分' }),
																	y.jsxs('span', {
																		children: [
																			y.jsxs('i', {
																				className: Se['icon-TokyoMetro'],
																				'aria-hidden': 'true',
																				children: [
																					y.jsx('i', {
																						className: Se['icon-background'],
																					}),
																					y.jsx('i', {
																						className: Se['icon-logo'],
																					}),
																				],
																			}),
																			'千代田線 明治神宮前駅',
																		],
																	}),
																	y.jsxs('span', {
																		children: [
																			y.jsxs('i', {
																				className: Se['icon-TokyoMetro'],
																				'aria-hidden': 'true',
																				children: [
																					y.jsx('i', {
																						className: Se['icon-background'],
																					}),
																					y.jsx('i', {
																						className: Se['icon-logo'],
																					}),
																				],
																			}),
																			'副都心線 明治神宮前駅',
																		],
																	}),
																	y.jsx('span', {
																		children: '2番出口 徒歩3分',
																	}),
																],
															}),
														],
													}),
												}),
											],
										}),
										y.jsx('div', {
											className: Se.map,
											children: y.jsx('iframe', {
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
			],
		}),
	});
}
const M2 = '_container_zc0jt_29',
	j2 = '_outer_zc0jt_36',
	R2 = '_titleWrapper_zc0jt_41',
	D2 = '_title_zc0jt_41',
	z2 = '_inner_zc0jt_51',
	L2 = '_name_zc0jt_67',
	A2 = '_company_zc0jt_80',
	F2 = '_email_zc0jt_81',
	I2 = '_message_zc0jt_82',
	V2 = '_error_zc0jt_146',
	$2 = '_buttonContainer_zc0jt_154',
	U2 = '_submit_zc0jt_163',
	B2 = '_cancel_zc0jt_174',
	Ft = {
		container: M2,
		outer: j2,
		titleWrapper: R2,
		title: D2,
		inner: z2,
		name: L2,
		company: A2,
		email: F2,
		message: I2,
		error: V2,
		buttonContainer: $2,
		submit: U2,
		cancel: B2,
	};
var Jl = (t) => t.type === 'checkbox',
	Qs = (t) => t instanceof Date,
	Kt = (t) => t == null;
const Ov = (t) => typeof t == 'object';
var ht = (t) => !Kt(t) && !Array.isArray(t) && Ov(t) && !Qs(t),
	W2 = (t) =>
		ht(t) && t.target ? (Jl(t.target) ? t.target.checked : t.target.value) : t,
	b2 = (t) => t.substring(0, t.search(/\.\d+(\.|$)/)) || t,
	H2 = (t, e) => t.has(b2(e)),
	Y2 = (t) => {
		const e = t.constructor && t.constructor.prototype;
		return ht(e) && e.hasOwnProperty('isPrototypeOf');
	},
	Ih =
		typeof window < 'u' &&
		typeof window.HTMLElement < 'u' &&
		typeof document < 'u';
function zn(t) {
	let e;
	const n = Array.isArray(t);
	if (t instanceof Date) e = new Date(t);
	else if (t instanceof Set) e = new Set(t);
	else if (
		!(Ih && (t instanceof Blob || t instanceof FileList)) &&
		(n || ht(t))
	)
		if (((e = n ? [] : {}), !n && !Y2(t))) e = t;
		else for (const r in t) t.hasOwnProperty(r) && (e[r] = zn(t[r]));
	else return t;
	return e;
}
var eu = (t) => (Array.isArray(t) ? t.filter(Boolean) : []),
	qe = (t) => t === void 0,
	X = (t, e, n) => {
		if (!e || !ht(t)) return n;
		const r = eu(e.split(/[,[\].]+?/)).reduce((i, s) => (Kt(i) ? i : i[s]), t);
		return qe(r) || r === t ? (qe(t[e]) ? n : t[e]) : r;
	},
	$r = (t) => typeof t == 'boolean';
const O0 = { BLUR: 'blur', FOCUS_OUT: 'focusout', CHANGE: 'change' },
	ur = {
		onBlur: 'onBlur',
		onChange: 'onChange',
		onSubmit: 'onSubmit',
		onTouched: 'onTouched',
		all: 'all',
	},
	Lr = {
		max: 'max',
		min: 'min',
		maxLength: 'maxLength',
		minLength: 'minLength',
		pattern: 'pattern',
		required: 'required',
		validate: 'validate',
	},
	Mv = at.createContext(null),
	Q2 = () => at.useContext(Mv),
	X2 = (t) => {
		const { children: e, ...n } = t;
		return at.createElement(Mv.Provider, { value: n }, e);
	};
var G2 = (t, e, n, r = !0) => {
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
	An = (t) => ht(t) && !Object.keys(t).length,
	K2 = (t, e, n, r) => {
		n(t);
		const { name: i, ...s } = t;
		return (
			An(s) ||
			Object.keys(s).length >= Object.keys(e).length ||
			Object.keys(s).find((o) => e[o] === (!r || ur.all))
		);
	},
	Xc = (t) => (Array.isArray(t) ? t : [t]);
function q2(t) {
	const e = at.useRef(t);
	(e.current = t),
		at.useEffect(() => {
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
	Z2 = (t, e, n, r, i) =>
		kr(t)
			? (r && e.watch.add(t), X(n, t, i))
			: Array.isArray(t)
				? t.map((s) => (r && e.watch.add(s), X(n, s)))
				: (r && (e.watchAll = !0), n),
	Vh = (t) => /^\w*$/.test(t),
	jv = (t) => eu(t.replace(/["|']|\]/g, '').split(/\.|\[/)),
	ze = (t, e, n) => {
		let r = -1;
		const i = Vh(e) ? [e] : jv(e),
			s = i.length,
			o = s - 1;
		for (; ++r < s; ) {
			const l = i[r];
			let u = n;
			if (r !== o) {
				const a = t[l];
				u = ht(a) || Array.isArray(a) ? a : isNaN(+i[r + 1]) ? {} : [];
			}
			(t[l] = u), (t = t[l]);
		}
		return t;
	},
	J2 = (t, e, n, r, i) =>
		e
			? {
					...n[t],
					types: { ...(n[t] && n[t].types ? n[t].types : {}), [r]: i || !0 },
				}
			: {},
	M0 = (t) => ({
		isOnSubmit: !t || t === ur.onSubmit,
		isOnBlur: t === ur.onBlur,
		isOnChange: t === ur.onChange,
		isOnAll: t === ur.all,
		isOnTouch: t === ur.onTouched,
	}),
	j0 = (t, e, n) =>
		!n &&
		(e.watchAll ||
			e.watch.has(t) ||
			[...e.watch].some(
				(r) => t.startsWith(r) && /^\.\w+/.test(t.slice(r.length)),
			));
const cl = (t, e, n, r) => {
	for (const i of n || Object.keys(t)) {
		const s = X(t, i);
		if (s) {
			const { _f: o, ...l } = s;
			if (o) {
				if (o.refs && o.refs[0] && e(o.refs[0], i) && !r) break;
				if (o.ref && e(o.ref, o.name) && !r) break;
				cl(l, e);
			} else ht(l) && cl(l, e);
		}
	}
};
var eT = (t, e, n) => {
		const r = eu(X(t, n));
		return ze(r, 'root', e[n]), ze(t, n, r), t;
	},
	$h = (t) => t.type === 'file',
	hi = (t) => typeof t == 'function',
	La = (t) => {
		if (!Ih) return !1;
		const e = t ? t.ownerDocument : 0;
		return (
			t instanceof
			(e && e.defaultView ? e.defaultView.HTMLElement : HTMLElement)
		);
	},
	Ku = (t) => kr(t),
	Uh = (t) => t.type === 'radio',
	Aa = (t) => t instanceof RegExp;
const R0 = { value: !1, isValid: !1 },
	D0 = { value: !0, isValid: !0 };
var Rv = (t) => {
	if (Array.isArray(t)) {
		if (t.length > 1) {
			const e = t
				.filter((n) => n && n.checked && !n.disabled)
				.map((n) => n.value);
			return { value: e, isValid: !!e.length };
		}
		return t[0].checked && !t[0].disabled
			? t[0].attributes && !qe(t[0].attributes.value)
				? qe(t[0].value) || t[0].value === ''
					? D0
					: { value: t[0].value, isValid: !0 }
				: D0
			: R0;
	}
	return R0;
};
const z0 = { isValid: !1, value: null };
var Dv = (t) =>
	Array.isArray(t)
		? t.reduce(
				(e, n) =>
					n && n.checked && !n.disabled ? { isValid: !0, value: n.value } : e,
				z0,
			)
		: z0;
function L0(t, e, n = 'validate') {
	if (Ku(t) || (Array.isArray(t) && t.every(Ku)) || ($r(t) && !t))
		return { type: n, message: Ku(t) ? t : '', ref: e };
}
var Ns = (t) => (ht(t) && !Aa(t) ? t : { value: t, message: '' }),
	A0 = async (t, e, n, r, i) => {
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
				valueAsNumber: _,
				mount: T,
				disabled: m,
			} = t._f,
			p = X(e, g);
		if (!T || m) return {};
		const v = o ? o[0] : s,
			x = (D) => {
				r &&
					v.reportValidity &&
					(v.setCustomValidity($r(D) ? '' : D || ''), v.reportValidity());
			},
			k = {},
			C = Uh(s),
			E = Jl(s),
			N = C || E,
			j =
				((_ || $h(s)) && qe(s.value) && qe(p)) ||
				(La(s) && s.value === '') ||
				p === '' ||
				(Array.isArray(p) && !p.length),
			M = J2.bind(null, g, n, k),
			H = (D, I, Y, K = Lr.maxLength, G = Lr.minLength) => {
				const Q = D ? I : Y;
				k[g] = { type: D ? K : G, message: Q, ref: s, ...M(D ? K : G, Q) };
			};
		if (
			i
				? !Array.isArray(p) || !p.length
				: l &&
					((!N && (j || Kt(p))) ||
						($r(p) && !p) ||
						(E && !Rv(o).isValid) ||
						(C && !Dv(o).isValid))
		) {
			const { value: D, message: I } = Ku(l)
				? { value: !!l, message: l }
				: Ns(l);
			if (
				D &&
				((k[g] = {
					type: Lr.required,
					message: I,
					ref: v,
					...M(Lr.required, I),
				}),
				!n)
			)
				return x(I), k;
		}
		if (!j && (!Kt(c) || !Kt(d))) {
			let D, I;
			const Y = Ns(d),
				K = Ns(c);
			if (!Kt(p) && !isNaN(p)) {
				const G = s.valueAsNumber || (p && +p);
				Kt(Y.value) || (D = G > Y.value), Kt(K.value) || (I = G < K.value);
			} else {
				const G = s.valueAsDate || new Date(p),
					Q = (w) => new Date(new Date().toDateString() + ' ' + w),
					z = s.type == 'time',
					$ = s.type == 'week';
				kr(Y.value) &&
					p &&
					(D = z ? Q(p) > Q(Y.value) : $ ? p > Y.value : G > new Date(Y.value)),
					kr(K.value) &&
						p &&
						(I = z
							? Q(p) < Q(K.value)
							: $
								? p < K.value
								: G < new Date(K.value));
			}
			if ((D || I) && (H(!!D, Y.message, K.message, Lr.max, Lr.min), !n))
				return x(k[g].message), k;
		}
		if ((u || a) && !j && (kr(p) || (i && Array.isArray(p)))) {
			const D = Ns(u),
				I = Ns(a),
				Y = !Kt(D.value) && p.length > +D.value,
				K = !Kt(I.value) && p.length < +I.value;
			if ((Y || K) && (H(Y, D.message, I.message), !n))
				return x(k[g].message), k;
		}
		if (f && !j && kr(p)) {
			const { value: D, message: I } = Ns(f);
			if (
				Aa(D) &&
				!p.match(D) &&
				((k[g] = { type: Lr.pattern, message: I, ref: s, ...M(Lr.pattern, I) }),
				!n)
			)
				return x(I), k;
		}
		if (h) {
			if (hi(h)) {
				const D = await h(p, e),
					I = L0(D, v);
				if (I && ((k[g] = { ...I, ...M(Lr.validate, I.message) }), !n))
					return x(I.message), k;
			} else if (ht(h)) {
				let D = {};
				for (const I in h) {
					if (!An(D) && !n) break;
					const Y = L0(await h[I](p, e), v, I);
					Y &&
						((D = { ...Y, ...M(I, Y.message) }), x(Y.message), n && (k[g] = D));
				}
				if (!An(D) && ((k[g] = { ref: v, ...D }), !n)) return k;
			}
		}
		return x(!0), k;
	};
function tT(t, e) {
	const n = e.slice(0, -1).length;
	let r = 0;
	for (; r < n; ) t = qe(t) ? r++ : t[e[r++]];
	return t;
}
function nT(t) {
	for (const e in t) if (t.hasOwnProperty(e) && !qe(t[e])) return !1;
	return !0;
}
function Ct(t, e) {
	const n = Array.isArray(e) ? e : Vh(e) ? [e] : jv(e),
		r = n.length === 1 ? t : tT(t, n),
		i = n.length - 1,
		s = n[i];
	return (
		r && delete r[s],
		i !== 0 &&
			((ht(r) && An(r)) || (Array.isArray(r) && nT(r))) &&
			Ct(t, n.slice(0, -1)),
		t
	);
}
var Gc = () => {
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
	Fa = (t) => Kt(t) || !Ov(t);
function Ji(t, e) {
	if (Fa(t) || Fa(e)) return t === e;
	if (Qs(t) && Qs(e)) return t.getTime() === e.getTime();
	const n = Object.keys(t),
		r = Object.keys(e);
	if (n.length !== r.length) return !1;
	for (const i of n) {
		const s = t[i];
		if (!r.includes(i)) return !1;
		if (i !== 'ref') {
			const o = e[i];
			if (
				(Qs(s) && Qs(o)) ||
				(ht(s) && ht(o)) ||
				(Array.isArray(s) && Array.isArray(o))
					? !Ji(s, o)
					: s !== o
			)
				return !1;
		}
	}
	return !0;
}
var zv = (t) => t.type === 'select-multiple',
	rT = (t) => Uh(t) || Jl(t),
	Kc = (t) => La(t) && t.isConnected,
	Lv = (t) => {
		for (const e in t) if (hi(t[e])) return !0;
		return !1;
	};
function Ia(t, e = {}) {
	const n = Array.isArray(t);
	if (ht(t) || n)
		for (const r in t)
			Array.isArray(t[r]) || (ht(t[r]) && !Lv(t[r]))
				? ((e[r] = Array.isArray(t[r]) ? [] : {}), Ia(t[r], e[r]))
				: Kt(t[r]) || (e[r] = !0);
	return e;
}
function Av(t, e, n) {
	const r = Array.isArray(t);
	if (ht(t) || r)
		for (const i in t)
			Array.isArray(t[i]) || (ht(t[i]) && !Lv(t[i]))
				? qe(e) || Fa(n[i])
					? (n[i] = Array.isArray(t[i]) ? Ia(t[i], []) : { ...Ia(t[i]) })
					: Av(t[i], Kt(e) ? {} : e[i], n[i])
				: (n[i] = !Ji(t[i], e[i]));
	return n;
}
var Su = (t, e) => Av(t, e, Ia(e)),
	Fv = (t, { valueAsNumber: e, valueAsDate: n, setValueAs: r }) =>
		qe(t)
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
function qc(t) {
	const e = t.ref;
	if (!(t.refs ? t.refs.every((n) => n.disabled) : e.disabled))
		return $h(e)
			? e.files
			: Uh(e)
				? Dv(t.refs).value
				: zv(e)
					? [...e.selectedOptions].map(({ value: n }) => n)
					: Jl(e)
						? Rv(t.refs).value
						: Fv(qe(e.value) ? t.ref.value : e.value, t);
}
var iT = (t, e, n, r) => {
		const i = {};
		for (const s of t) {
			const o = X(e, s);
			o && ze(i, s, o._f);
		}
		return {
			criteriaMode: n,
			names: [...t],
			fields: i,
			shouldUseNativeValidation: r,
		};
	},
	Io = (t) =>
		qe(t)
			? t
			: Aa(t)
				? t.source
				: ht(t)
					? Aa(t.value)
						? t.value.source
						: t.value
					: t,
	sT = (t) =>
		t.mount &&
		(t.required ||
			t.min ||
			t.max ||
			t.maxLength ||
			t.minLength ||
			t.pattern ||
			t.validate);
function F0(t, e, n) {
	const r = X(t, n);
	if (r || Vh(n)) return { error: r, name: n };
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
var oT = (t, e, n, r, i) =>
		i.isOnAll
			? !1
			: !n && i.isOnTouch
				? !(e || t)
				: (n ? r.isOnBlur : i.isOnBlur)
					? !t
					: (n ? r.isOnChange : i.isOnChange)
						? t
						: !0,
	lT = (t, e) => !eu(X(t, e)).length && Ct(t, e);
const uT = {
	mode: ur.onSubmit,
	reValidateMode: ur.onChange,
	shouldFocusError: !0,
};
function aT(t = {}, e) {
	let n = { ...uT, ...t },
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
			ht(n.values) || ht(n.defaultValues)
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
		f = { values: Gc(), array: Gc(), state: Gc() },
		h = M0(n.mode),
		g = M0(n.reValidateMode),
		_ = n.criteriaMode === ur.all,
		T = (S) => (P) => {
			clearTimeout(c), (c = setTimeout(S, P));
		},
		m = async (S) => {
			if (d.isValid || S) {
				const P = n.resolver ? An((await j()).errors) : await H(i, !0);
				P !== r.isValid && f.state.next({ isValid: P });
			}
		},
		p = (S) => d.isValidating && f.state.next({ isValidating: S }),
		v = (S, P = [], O, V, F = !0, L = !0) => {
			if (V && O) {
				if (((l.action = !0), L && Array.isArray(X(i, S)))) {
					const B = O(X(i, S), V.argA, V.argB);
					F && ze(i, S, B);
				}
				if (L && Array.isArray(X(r.errors, S))) {
					const B = O(X(r.errors, S), V.argA, V.argB);
					F && ze(r.errors, S, B), lT(r.errors, S);
				}
				if (d.touchedFields && L && Array.isArray(X(r.touchedFields, S))) {
					const B = O(X(r.touchedFields, S), V.argA, V.argB);
					F && ze(r.touchedFields, S, B);
				}
				d.dirtyFields && (r.dirtyFields = Su(s, o)),
					f.state.next({
						name: S,
						isDirty: I(S, P),
						dirtyFields: r.dirtyFields,
						errors: r.errors,
						isValid: r.isValid,
					});
			} else ze(o, S, P);
		},
		x = (S, P) => {
			ze(r.errors, S, P), f.state.next({ errors: r.errors });
		},
		k = (S) => {
			(r.errors = S), f.state.next({ errors: r.errors, isValid: !1 });
		},
		C = (S, P, O, V) => {
			const F = X(i, S);
			if (F) {
				const L = X(o, S, qe(O) ? X(s, S) : O);
				qe(L) || (V && V.defaultChecked) || P
					? ze(o, S, P ? L : qc(F._f))
					: G(S, L),
					l.mount && m();
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
				const Ye = ie || Ji(X(s, S), P);
				(B = !!(!ie && X(r.dirtyFields, S))),
					Ye || ie ? Ct(r.dirtyFields, S) : ze(r.dirtyFields, S, !0),
					(fe.dirtyFields = r.dirtyFields),
					(L = L || (d.dirtyFields && B !== !Ye));
			}
			if (O) {
				const Ye = X(r.touchedFields, S);
				Ye ||
					(ze(r.touchedFields, S, O),
					(fe.touchedFields = r.touchedFields),
					(L = L || (d.touchedFields && Ye !== O)));
			}
			return L && F && f.state.next(fe), L ? fe : {};
		},
		N = (S, P, O, V) => {
			const F = X(r.errors, S),
				L = d.isValid && $r(P) && r.isValid !== P;
			if (
				(t.delayError && O
					? ((a = T(() => x(S, O))), a(t.delayError))
					: (clearTimeout(c),
						(a = null),
						O ? ze(r.errors, S, O) : Ct(r.errors, S)),
				(O ? !Ji(F, O) : F) || !An(V) || L)
			) {
				const B = {
					...V,
					...(L && $r(P) ? { isValid: P } : {}),
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
				iT(S || u.mount, i, n.criteriaMode, n.shouldUseNativeValidation),
			),
		M = async (S) => {
			const { errors: P } = await j(S);
			if (S)
				for (const O of S) {
					const V = X(P, O);
					V ? ze(r.errors, O, V) : Ct(r.errors, O);
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
							ie = await A0(F, o, _, n.shouldUseNativeValidation && !P, fe);
						if (ie[L.name] && ((O.valid = !1), P)) break;
						!P &&
							(X(ie, L.name)
								? fe
									? eT(r.errors, ie, L.name)
									: ze(r.errors, L.name, ie[L.name])
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
					(P._f.refs ? P._f.refs.every((O) => !Kc(O)) : !Kc(P._f.ref)) &&
					ye(S);
			}
			u.unMount = new Set();
		},
		I = (S, P) => (S && P && ze(o, S, P), !Ji(oe(), s)),
		Y = (S, P, O) =>
			Z2(S, u, { ...(l.mount ? o : qe(P) ? s : kr(S) ? { [S]: P } : P) }, O, P),
		K = (S) => eu(X(l.mount ? o : s, S, t.shouldUnregister ? X(s, S, []) : [])),
		G = (S, P, O = {}) => {
			const V = X(i, S);
			let F = P;
			if (V) {
				const L = V._f;
				L &&
					(!L.disabled && ze(o, S, Fv(P, L)),
					(F = La(L.ref) && Kt(P) ? '' : P),
					zv(L.ref)
						? [...L.ref.options].forEach(
								(B) => (B.selected = F.includes(B.value)),
							)
						: L.refs
							? Jl(L.ref)
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
							: $h(L.ref)
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
				(u.array.has(S) || !Fa(F) || (B && !B._f)) && !Qs(F)
					? Q(L, F, O)
					: G(L, F, O);
			}
		},
		z = (S, P, O = {}) => {
			const V = X(i, S),
				F = u.array.has(S),
				L = zn(P);
			ze(o, S, L),
				F
					? (f.array.next({ name: S, values: { ...o } }),
						(d.isDirty || d.dirtyFields) &&
							O.shouldDirty &&
							f.state.next({
								name: S,
								dirtyFields: Su(s, o),
								isDirty: I(S, L),
							}))
					: V && !V._f && !Kt(L)
						? Q(S, L, O)
						: G(S, L, O),
				j0(S, u) && f.state.next({ ...r }),
				f.values.next({ name: S, values: { ...o } }),
				!l.mount && e();
		},
		$ = async (S) => {
			const P = S.target;
			let O = P.name,
				V = !0;
			const F = X(i, O),
				L = () => (P.type ? qc(F._f) : W2(S)),
				B = (fe) => {
					V = Number.isNaN(fe) || fe === X(o, O, fe);
				};
			if (F) {
				let fe, ie;
				const Ye = L(),
					ot = S.type === O0.BLUR || S.type === O0.FOCUS_OUT,
					Kn =
						(!sT(F._f) && !n.resolver && !X(r.errors, O) && !F._f.deps) ||
						oT(ot, X(r.touchedFields, O), r.isSubmitted, g, h),
					Mr = j0(O, u, ot);
				ze(o, O, Ye),
					ot
						? (F._f.onBlur && F._f.onBlur(S), a && a(0))
						: F._f.onChange && F._f.onChange(S);
				const Re = E(O, Ye, ot, !1),
					ks = !An(Re) || Mr;
				if (
					(!ot && f.values.next({ name: O, type: S.type, values: { ...o } }),
					Kn)
				)
					return (
						d.isValid && m(), ks && f.state.next({ name: O, ...(Mr ? {} : Re) })
					);
				if ((!ot && Mr && f.state.next({ ...r }), p(!0), n.resolver)) {
					const { errors: qn } = await j([O]);
					if ((B(Ye), V)) {
						const ei = F0(r.errors, i, O),
							jr = F0(qn, i, ei.name || O);
						(fe = jr.error), (O = jr.name), (ie = An(qn));
					}
				} else
					(fe = (await A0(F, o, _, n.shouldUseNativeValidation))[O]),
						B(Ye),
						V && (fe ? (ie = !1) : d.isValid && (ie = await H(i, !0)));
				V && (F._f.deps && q(F._f.deps), N(O, ie, fe, Re));
			}
		},
		w = (S, P) => {
			if (X(r.errors, P) && S.focus) return S.focus(), 1;
		},
		q = async (S, P = {}) => {
			let O, V;
			const F = Xc(S);
			if ((p(!0), n.resolver)) {
				const L = await M(qe(S) ? S : F);
				(O = An(L)), (V = S ? !F.some((B) => X(L, B)) : O);
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
						!(!V && !r.isValid) && m())
					: (V = O = await H(i));
			return (
				f.state.next({
					...(!kr(S) || (d.isValid && O !== r.isValid) ? {} : { name: S }),
					...(n.resolver || !S ? { isValid: O } : {}),
					errors: r.errors,
					isValidating: !1,
				}),
				P.shouldFocus && !V && cl(i, w, S ? F : u.mount),
				V
			);
		},
		oe = (S) => {
			const P = { ...s, ...(l.mount ? o : {}) };
			return qe(S) ? P : kr(S) ? X(P, S) : S.map((O) => X(P, O));
		},
		st = (S, P) => ({
			invalid: !!X((P || r).errors, S),
			isDirty: !!X((P || r).dirtyFields, S),
			isTouched: !!X((P || r).touchedFields, S),
			error: X((P || r).errors, S),
		}),
		ge = (S) => {
			S && Xc(S).forEach((P) => Ct(r.errors, P)),
				f.state.next({ errors: S ? r.errors : {} });
		},
		Me = (S, P, O) => {
			const V = (X(i, S, { _f: {} })._f || {}).ref;
			ze(r.errors, S, { ...P, ref: V }),
				f.state.next({ name: S, errors: r.errors, isValid: !1 }),
				O && O.shouldFocus && V && V.focus && V.focus();
		},
		Ce = (S, P) =>
			hi(S)
				? f.values.subscribe({ next: (O) => S(Y(void 0, P), O) })
				: Y(S, P, !0),
		ye = (S, P = {}) => {
			for (const O of S ? Xc(S) : u.mount)
				u.mount.delete(O),
					u.array.delete(O),
					P.keepValue || (Ct(i, O), Ct(o, O)),
					!P.keepError && Ct(r.errors, O),
					!P.keepDirty && Ct(r.dirtyFields, O),
					!P.keepTouched && Ct(r.touchedFields, O),
					!n.shouldUnregister && !P.keepDefaultValue && Ct(s, O);
			f.values.next({ values: { ...o } }),
				f.state.next({ ...r, ...(P.keepDirty ? { isDirty: I() } : {}) }),
				!P.keepIsValid && m();
		},
		pt = ({ disabled: S, name: P, field: O, fields: V, value: F }) => {
			if ($r(S)) {
				const L = S ? void 0 : qe(F) ? qc(O ? O._f : X(V, P)._f) : F;
				ze(o, P, L), E(P, L, !1, !1, !0);
			}
		},
		tt = (S, P = {}) => {
			let O = X(i, S);
			const V = $r(P.disabled);
			return (
				ze(i, S, {
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
					? pt({ field: O, disabled: P.disabled, name: S, value: P.value })
					: C(S, !0, P.value),
				{
					...(V ? { disabled: P.disabled } : {}),
					...(n.progressive
						? {
								required: !!P.required,
								min: Io(P.min),
								max: Io(P.max),
								minLength: Io(P.minLength),
								maxLength: Io(P.maxLength),
								pattern: Io(P.pattern),
							}
						: {}),
					name: S,
					onChange: $,
					onBlur: $,
					ref: (F) => {
						if (F) {
							tt(S, P), (O = X(i, S));
							const L =
									(qe(F.value) &&
										F.querySelectorAll &&
										F.querySelectorAll('input,select,textarea')[0]) ||
									F,
								B = rT(L),
								fe = O._f.refs || [];
							if (B ? fe.find((ie) => ie === L) : L === O._f.ref) return;
							ze(i, S, {
								_f: {
									...O._f,
									...(B
										? {
												refs: [
													...fe.filter(Kc),
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
									!(H2(u.array, S) && l.action) &&
									u.unMount.add(S);
					},
				}
			);
		},
		Gn = () => n.shouldFocusError && cl(i, w, u.mount),
		St = (S) => {
			$r(S) &&
				(f.state.next({ disabled: S }),
				cl(
					i,
					(P, O) => {
						let V = S;
						const F = X(i, O);
						F && $r(F._f.disabled) && (V || (V = F._f.disabled)),
							(P.disabled = V);
					},
					0,
					!1,
				));
		},
		sn = (S, P) => async (O) => {
			let V;
			O && (O.preventDefault && O.preventDefault(), O.persist && O.persist());
			let F = zn(o);
			if ((f.state.next({ isSubmitting: !0 }), n.resolver)) {
				const { errors: L, values: B } = await j();
				(r.errors = L), (F = B);
			} else await H(i);
			if ((Ct(r.errors, 'root'), An(r.errors))) {
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
					isSubmitSuccessful: An(r.errors) && !V,
					submitCount: r.submitCount + 1,
					errors: r.errors,
				}),
				V)
			)
				throw V;
		},
		_e = (S, P = {}) => {
			X(i, S) &&
				(qe(P.defaultValue)
					? z(S, zn(X(s, S)))
					: (z(S, P.defaultValue), ze(s, S, zn(P.defaultValue))),
				P.keepTouched || Ct(r.touchedFields, S),
				P.keepDirty ||
					(Ct(r.dirtyFields, S),
					(r.isDirty = P.defaultValue ? I(S, zn(X(s, S))) : I())),
				P.keepError || (Ct(r.errors, S), d.isValid && m()),
				f.state.next({ ...r }));
		},
		je = (S, P = {}) => {
			const O = S ? zn(S) : s,
				V = zn(O),
				F = S && !An(S) ? V : s;
			if ((P.keepDefaultValues || (s = O), !P.keepValues)) {
				if (P.keepDirtyValues)
					for (const L of u.mount)
						X(r.dirtyFields, L) ? ze(F, L, X(o, L)) : z(L, X(F, L));
				else {
					if (Ih && qe(S))
						for (const L of u.mount) {
							const B = X(i, L);
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
						: !!(P.keepDefaultValues && !Ji(S, s)),
					isSubmitted: P.keepIsSubmitted ? r.isSubmitted : !1,
					dirtyFields: P.keepDirtyValues
						? P.keepDefaultValues && o
							? Su(s, o)
							: r.dirtyFields
						: P.keepDefaultValues && S
							? Su(s, S)
							: {},
					touchedFields: P.keepTouched ? r.touchedFields : {},
					errors: P.keepErrors ? r.errors : {},
					isSubmitSuccessful: P.keepIsSubmitSuccessful
						? r.isSubmitSuccessful
						: !1,
					isSubmitting: !1,
				});
		},
		kt = (S, P) => je(hi(S) ? S(o) : S, P);
	return {
		control: {
			register: tt,
			unregister: ye,
			getFieldState: st,
			handleSubmit: sn,
			setError: Me,
			_executeSchema: j,
			_getWatch: Y,
			_getDirty: I,
			_updateValid: m,
			_removeUnmounted: D,
			_updateFieldArray: v,
			_updateDisabledField: pt,
			_getFieldArray: K,
			_reset: je,
			_resetDefaultValues: () =>
				hi(n.defaultValues) &&
				n.defaultValues().then((S) => {
					kt(S, n.resetOptions), f.state.next({ isLoading: !1 });
				}),
			_updateFormState: (S) => {
				r = { ...r, ...S };
			},
			_disableForm: St,
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
		register: tt,
		handleSubmit: sn,
		watch: Ce,
		setValue: z,
		getValues: oe,
		reset: kt,
		resetField: _e,
		clearErrors: ge,
		unregister: ye,
		setError: Me,
		setFocus: (S, P = {}) => {
			const O = X(i, S),
				V = O && O._f;
			if (V) {
				const F = V.refs ? V.refs[0] : V.ref;
				F.focus && (F.focus(), P.shouldSelect && F.select());
			}
		},
		getFieldState: st,
	};
}
function cT(t = {}) {
	const e = at.useRef(),
		n = at.useRef(),
		[r, i] = at.useState({
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
		(e.current = { ...aT(t, () => i((o) => ({ ...o }))), formState: r });
	const s = e.current.control;
	return (
		(s._options = t),
		q2({
			subject: s._subjects.state,
			next: (o) => {
				K2(o, s._proxyFormState, s._updateFormState, !0) &&
					i({ ...s._formState });
			},
		}),
		at.useEffect(() => s._disableForm(t.disabled), [s, t.disabled]),
		at.useEffect(() => {
			if (s._proxyFormState.isDirty) {
				const o = s._getDirty();
				o !== r.isDirty && s._subjects.state.next({ isDirty: o });
			}
		}, [s, r.isDirty]),
		at.useEffect(() => {
			t.values && !Ji(t.values, n.current)
				? (s._reset(t.values, s._options.resetOptions),
					(n.current = t.values),
					i((o) => ({ ...o })))
				: s._resetDefaultValues();
		}, [t.values, s]),
		at.useEffect(() => {
			t.errors && s._setErrors(t.errors);
		}, [t.errors, s]),
		at.useEffect(() => {
			s._state.mount || (s._updateValid(), (s._state.mount = !0)),
				s._state.watch &&
					((s._state.watch = !1), s._subjects.state.next({ ...s._formState })),
				s._removeUnmounted();
		}),
		at.useEffect(() => {
			t.shouldUnregister && s._subjects.values.next({ values: s._getWatch() });
		}, [t.shouldUnregister, s]),
		(e.current.formState = G2(r, s)),
		e.current
	);
}
const Wi = ({
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
			} = Q2(),
			c = (g, _) =>
				Object.keys(g)
					.filter((m) => m.includes(_))
					.reduce((m, p) => Object.assign(m, { error: g[p] }), {}),
			d = (g) => Object.keys(g).length > 0,
			f = c(a, i),
			h = d(f);
		return y.jsxs('div', {
			style: { position: 'relative' },
			children: [
				y.jsx('label', { htmlFor: t, children: e }),
				o
					? y.jsx('textarea', { placeholder: n, id: t, rows: l, ...u(i, s) })
					: y.jsx('input', { placeholder: n, id: t, type: r, ...u(i, s) }),
				h && y.jsx('p', { className: Ft.error, children: f.error.message }),
			],
		});
	},
	fT = {
		label: 'お名前',
		placeholder: '例） 令和',
		id: 'familyName',
		type: 'text',
		name: 'familyName',
		validation: { required: { value: !0, message: '必須' } },
	},
	dT = {
		label: '',
		placeholder: '例） 太郎',
		id: 'firstName',
		type: 'text',
		name: 'firstName',
		validation: { required: { value: !0, message: '必須' } },
	},
	hT = {
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
	pT = {
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
	_T = {
		id: 'company',
		label: '会社名 （任意）',
		placeholder: '例） 株式会社 令和',
		type: 'text',
		name: 'company',
	},
	mT = {
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
	gT = {
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
	vT = () => {
		const t = cT(),
			[e, n] = te.useState(!1),
			r = t.handleSubmit((s) => {
				t.reset(), n(!0);
			}),
			i = () => {
				t.reset();
			};
		return y.jsx(X2, {
			...t,
			children: y.jsxs('form', {
				className: Ft.from,
				action: '',
				noValidate: !0,
				autoComplete: 'off',
				onSubmit: (s) => s.preventDefault(),
				children: [
					y.jsxs('div', {
						className: Ft.name,
						children: [y.jsx(Wi, { ...fT }), y.jsx(Wi, { ...dT })],
					}),
					y.jsxs('div', {
						className: Ft.name,
						children: [y.jsx(Wi, { ...hT }), y.jsx(Wi, { ...pT })],
					}),
					y.jsx('div', {
						className: Ft.company,
						children: y.jsx(Wi, { ..._T, className: Ft.company }),
					}),
					y.jsx('div', { className: Ft.email, children: y.jsx(Wi, { ...mT }) }),
					y.jsx('div', {
						className: Ft.message,
						children: y.jsx(Wi, { ...gT }),
					}),
					e && y.jsx('p', { children: '送信完了' }),
					y.jsxs('div', {
						className: Ft.buttonContainer,
						children: [
							y.jsx('button', {
								onClick: r,
								className: Ft.submit,
								children: '送信する',
							}),
							y.jsx('button', {
								onClick: i,
								className: Ft.cancel,
								children: 'キャンセル',
							}),
						],
					}),
				],
			}),
		});
	};
function yT() {
	return y.jsx(y.Fragment, {
		children: y.jsx('article', {
			className: Ft.container,
			id: 'contact',
			children: y.jsxs('div', {
				className: Ft.outer,
				children: [
					y.jsx('div', {
						className: Ft.titleWrapper,
						children: y.jsx('h2', { className: Ft.title, children: 'CONTACT' }),
					}),
					y.jsx('div', { className: Ft.inner, children: y.jsx(vT, {}) }),
				],
			}),
		}),
	});
}
function xT() {
	return y.jsxs('main', {
		children: [
			y.jsx($w, {}),
			y.jsx(Sk, {}),
			y.jsx(p2, {}),
			y.jsx(O2, {}),
			y.jsx(yT, {}),
		],
	});
}
function wT() {
	return y.jsx(y.Fragment, {
		children: y.jsx('footer', {
			children: y.jsx('p', { children: 'Malts Graphic' }),
		}),
	});
}
function I0(t, e) {
	for (var n = 0; n < e.length; n++) {
		var r = e[n];
		(r.enumerable = r.enumerable || !1),
			(r.configurable = !0),
			'value' in r && (r.writable = !0),
			Object.defineProperty(t, r.key, r);
	}
}
function ST(t, e, n) {
	return e && I0(t.prototype, e), n && I0(t, n), t;
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
	qu,
	En,
	pi,
	_i,
	io,
	Iv,
	Qi,
	fl,
	Vv,
	br,
	rr,
	$v,
	Uv = function () {
		return (
			Nt ||
			(typeof window < 'u' && (Nt = window.gsap) && Nt.registerPlugin && Nt)
		);
	},
	Bv = 1,
	Xs = [],
	ue = [],
	Nr = [],
	dl = Date.now,
	md = function (e, n) {
		return n;
	},
	kT = function () {
		var e = fl.core,
			n = e.bridge || {},
			r = e._scrollers,
			i = e._proxies;
		r.push.apply(r, ue),
			i.push.apply(i, Nr),
			(ue = r),
			(Nr = i),
			(md = function (o, l) {
				return n[o](l);
			});
	},
	Ci = function (e, n) {
		return ~Nr.indexOf(e) && Nr[Nr.indexOf(e) + 1][n];
	},
	hl = function (e) {
		return !!~Vv.indexOf(e);
	},
	Ht = function (e, n, r, i, s) {
		return e.addEventListener(n, r, { passive: i !== !1, capture: !!s });
	},
	bt = function (e, n, r, i) {
		return e.removeEventListener(n, r, !!i);
	},
	ku = 'scrollLeft',
	Tu = 'scrollTop',
	gd = function () {
		return (br && br.isPressed) || ue.cache++;
	},
	Va = function (e, n) {
		var r = function i(s) {
			if (s || s === 0) {
				Bv && (En.history.scrollRestoration = 'manual');
				var o = br && br.isPressed;
				(s = i.v = Math.round(s) || (br && br.iOS ? 1 : 0)),
					e(s),
					(i.cacheID = ue.cache),
					o && md('ss', s);
			} else
				(n || ue.cache !== i.cacheID || md('ref')) &&
					((i.cacheID = ue.cache), (i.v = e()));
			return i.v + i.offset;
		};
		return (r.offset = 0), e && r;
	},
	Zt = {
		s: ku,
		p: 'left',
		p2: 'Left',
		os: 'right',
		os2: 'Right',
		d: 'width',
		d2: 'Width',
		a: 'x',
		sc: Va(function (t) {
			return arguments.length
				? En.scrollTo(t, ft.sc())
				: En.pageXOffset || pi[ku] || _i[ku] || io[ku] || 0;
		}),
	},
	ft = {
		s: Tu,
		p: 'top',
		p2: 'Top',
		os: 'bottom',
		os2: 'Bottom',
		d: 'height',
		d2: 'Height',
		a: 'y',
		op: Zt,
		sc: Va(function (t) {
			return arguments.length
				? En.scrollTo(Zt.sc(), t)
				: En.pageYOffset || pi[Tu] || _i[Tu] || io[Tu] || 0;
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
	ji = function (e, n) {
		var r = n.s,
			i = n.sc;
		hl(e) && (e = pi.scrollingElement || _i);
		var s = ue.indexOf(e),
			o = i === ft.sc ? 1 : 2;
		!~s && (s = ue.push(e) - 1), ue[s + o] || Ht(e, 'scroll', gd);
		var l = ue[s + o],
			u =
				l ||
				(ue[s + o] =
					Va(Ci(e, r), !0) ||
					(hl(e)
						? i
						: Va(function (a) {
								return arguments.length ? (e[r] = a) : e[r];
							})));
		return (
			(u.target = e),
			l || (u.smooth = Nt.getProperty(e, 'scrollBehavior') === 'smooth'),
			u
		);
	},
	vd = function (e, n, r) {
		var i = e,
			s = e,
			o = dl(),
			l = o,
			u = n || 50,
			a = Math.max(500, u * 3),
			c = function (g, _) {
				var T = dl();
				_ || T - o > u
					? ((s = i), (i = g), (l = o), (o = T))
					: r
						? (i += g)
						: (i = s + ((g - s) / (T - l)) * (o - l));
			},
			d = function () {
				(s = i = r ? 0 : i), (l = o = 0);
			},
			f = function (g) {
				var _ = l,
					T = s,
					m = dl();
				return (
					(g || g === 0) && g !== i && c(g),
					o === l || m - l > a
						? 0
						: ((i + (r ? T : -T)) / ((r ? m : o) - _)) * 1e3
				);
			};
		return { update: c, reset: d, getVelocity: f };
	},
	Vo = function (e, n) {
		return (
			n && !e._gsapAllow && e.preventDefault(),
			e.changedTouches ? e.changedTouches[0] : e
		);
	},
	V0 = function (e) {
		var n = Math.max.apply(Math, e),
			r = Math.min.apply(Math, e);
		return Math.abs(n) >= Math.abs(r) ? n : r;
	},
	Wv = function () {
		(fl = Nt.core.globals().ScrollTrigger), fl && fl.core && kT();
	},
	bv = function (e) {
		return (
			(Nt = e || Uv()),
			!qu &&
				Nt &&
				typeof document < 'u' &&
				document.body &&
				((En = window),
				(pi = document),
				(_i = pi.documentElement),
				(io = pi.body),
				(Vv = [En, pi, _i, io]),
				Nt.utils.clamp,
				($v = Nt.core.context || function () {}),
				(Qi = 'onpointerenter' in io ? 'pointer' : 'mouse'),
				(Iv = et.isTouch =
					En.matchMedia &&
					En.matchMedia('(hover: none), (pointer: coarse)').matches
						? 1
						: 'ontouchstart' in En ||
							  navigator.maxTouchPoints > 0 ||
							  navigator.msMaxTouchPoints > 0
							? 2
							: 0),
				(rr = et.eventTypes =
					(
						'ontouchstart' in _i
							? 'touchstart,touchmove,touchcancel,touchend'
							: 'onpointerdown' in _i
								? 'pointerdown,pointermove,pointercancel,pointerup'
								: 'mousedown,mousemove,mouseup,mouseup'
					).split(',')),
				setTimeout(function () {
					return (Bv = 0);
				}, 500),
				Wv(),
				(qu = 1)),
			qu
		);
	};
Zt.op = ft;
ue.cache = 0;
var et = (function () {
	function t(n) {
		this.init(n);
	}
	var e = t.prototype;
	return (
		(e.init = function (r) {
			qu || bv(Nt) || console.warn('Please gsap.registerPlugin(Observer)'),
				fl || Wv();
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
				_ = r.event,
				T = r.onDragStart,
				m = r.onDragEnd,
				p = r.onDrag,
				v = r.onPress,
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
				z = r.isNormalizer,
				$ = r.onGestureStart,
				w = r.onGestureEnd,
				q = r.onWheel,
				oe = r.onEnable,
				st = r.onDisable,
				ge = r.onClick,
				Me = r.scrollSpeed,
				Ce = r.capture,
				ye = r.allowClicks,
				pt = r.lockAxis,
				tt = r.onLockAxis;
			(this.target = l = un(l) || _i),
				(this.vars = r),
				h && (h = Nt.utils.toArray(h)),
				(i = i || 1e-9),
				(s = s || 0),
				(g = g || 1),
				(Me = Me || 1),
				(o = o || 'wheel,touch,pointer'),
				(a = a !== !1),
				u || (u = parseFloat(En.getComputedStyle(io).lineHeight) || 22);
			var Gn,
				St,
				sn,
				_e,
				je,
				kt,
				on,
				R = this,
				ln = 0,
				S = 0,
				P = r.passive || !c,
				O = ji(l, Zt),
				V = ji(l, ft),
				F = O(),
				L = V(),
				B =
					~o.indexOf('touch') &&
					!~o.indexOf('pointer') &&
					rr[0] === 'pointerdown',
				fe = hl(l),
				ie = l.ownerDocument || pi,
				Ye = [0, 0, 0],
				ot = [0, 0, 0],
				Kn = 0,
				Mr = function () {
					return (Kn = dl());
				},
				Re = function (J, ve) {
					return (
						((R.event = J) && h && ~h.indexOf(J.target)) ||
						(ve && B && J.pointerType !== 'touch') ||
						(Q && Q(J, ve))
					);
				},
				ks = function () {
					R._vx.reset(), R._vy.reset(), St.pause(), d && d(R);
				},
				qn = function () {
					var J = (R.deltaX = V0(Ye)),
						ve = (R.deltaY = V0(ot)),
						U = Math.abs(J) >= i,
						re = Math.abs(ve) >= i;
					H && (U || re) && H(R, J, ve, Ye, ot),
						U &&
							(k && R.deltaX > 0 && k(R),
							C && R.deltaX < 0 && C(R),
							j && j(R),
							D && R.deltaX < 0 != ln < 0 && D(R),
							(ln = R.deltaX),
							(Ye[0] = Ye[1] = Ye[2] = 0)),
						re &&
							(N && R.deltaY > 0 && N(R),
							E && R.deltaY < 0 && E(R),
							M && M(R),
							I && R.deltaY < 0 != S < 0 && I(R),
							(S = R.deltaY),
							(ot[0] = ot[1] = ot[2] = 0)),
						(_e || sn) && (G && G(R), sn && (p(R), (sn = !1)), (_e = !1)),
						kt && !(kt = !1) && tt && tt(R),
						je && (q(R), (je = !1)),
						(Gn = 0);
				},
				ei = function (J, ve, U) {
					(Ye[U] += J),
						(ot[U] += ve),
						R._vx.update(J),
						R._vy.update(ve),
						a ? Gn || (Gn = requestAnimationFrame(qn)) : qn();
				},
				jr = function (J, ve) {
					pt &&
						!on &&
						((R.axis = on = Math.abs(J) > Math.abs(ve) ? 'x' : 'y'), (kt = !0)),
						on !== 'y' && ((Ye[2] += J), R._vx.update(J, !0)),
						on !== 'x' && ((ot[2] += ve), R._vy.update(ve, !0)),
						a ? Gn || (Gn = requestAnimationFrame(qn)) : qn();
				},
				ti = function (J) {
					if (!Re(J, 1)) {
						J = Vo(J, c);
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
								(p && (sn = !0),
								ee || (R.isDragging = !0),
								jr(re, Z),
								ee || (T && T(R)));
					}
				},
				Ai = (R.onPress = function (ne) {
					Re(ne, 1) ||
						(ne && ne.button) ||
						((R.axis = on = null),
						St.pause(),
						(R.isPressed = !0),
						(ne = Vo(ne)),
						(ln = S = 0),
						(R.startX = R.x = ne.clientX),
						(R.startY = R.y = ne.clientY),
						R._vx.reset(),
						R._vy.reset(),
						Ht(z ? l : ie, rr[1], ti, P, !0),
						(R.deltaX = R.deltaY = 0),
						v && v(R));
				}),
				le = (R.onRelease = function (ne) {
					if (!Re(ne, 1)) {
						bt(z ? l : ie, rr[1], ti, !0);
						var J = !isNaN(R.y - R.startY),
							ve = R.isDragging,
							U =
								ve &&
								(Math.abs(R.x - R.startX) > 3 || Math.abs(R.y - R.startY) > 3),
							re = Vo(ne);
						!U &&
							J &&
							(R._vx.reset(),
							R._vy.reset(),
							c &&
								ye &&
								Nt.delayedCall(0.08, function () {
									if (dl() - Kn > 300 && !ne.defaultPrevented) {
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
							d && ve && !z && St.restart(!0),
							m && ve && m(R),
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
				Zn = function () {
					return (R.isGesturing = !1) || w(R);
				},
				Jn = function (J) {
					if (!Re(J)) {
						var ve = O(),
							U = V();
						ei((ve - F) * Me, (U - L) * Me, 1),
							(F = ve),
							(L = U),
							d && St.restart(!0);
					}
				},
				er = function (J) {
					if (!Re(J)) {
						(J = Vo(J, c)), q && (je = !0);
						var ve =
							(J.deltaMode === 1 ? u : J.deltaMode === 2 ? En.innerHeight : 1) *
							g;
						ei(J.deltaX * ve, J.deltaY * ve, 0), d && !z && St.restart(!0);
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
							(_e = !0),
							d && St.restart(!0),
							(re || Z) && jr(re, Z);
					}
				},
				Ts = function (J) {
					(R.event = J), Y(R);
				},
				Rr = function (J) {
					(R.event = J), K(R);
				},
				Eo = function (J) {
					return Re(J) || (Vo(J, c) && ge(R));
				};
			(St = R._dc = Nt.delayedCall(f || 0.25, ks).pause()),
				(R.deltaX = R.deltaY = 0),
				(R._vx = vd(0, 50, !0)),
				(R._vy = vd(0, 50, !0)),
				(R.scrollX = O),
				(R.scrollY = V),
				(R.isDragging = R.isGesturing = R.isPressed = !1),
				$v(this),
				(R.enable = function (ne) {
					return (
						R.isEnabled ||
							(Ht(fe ? ie : l, 'scroll', gd),
							o.indexOf('scroll') >= 0 && Ht(fe ? ie : l, 'scroll', Jn, P, Ce),
							o.indexOf('wheel') >= 0 && Ht(l, 'wheel', er, P, Ce),
							((o.indexOf('touch') >= 0 && Iv) || o.indexOf('pointer') >= 0) &&
								(Ht(l, rr[0], Ai, P, Ce),
								Ht(ie, rr[2], le),
								Ht(ie, rr[3], le),
								ye && Ht(l, 'click', Mr, !0, !0),
								ge && Ht(l, 'click', Eo),
								$ && Ht(ie, 'gesturestart', Fi),
								w && Ht(ie, 'gestureend', Zn),
								Y && Ht(l, Qi + 'enter', Ts),
								K && Ht(l, Qi + 'leave', Rr),
								G && Ht(l, Qi + 'move', Ii)),
							(R.isEnabled = !0),
							ne && ne.type && Ai(ne),
							oe && oe(R)),
						R
					);
				}),
				(R.disable = function () {
					R.isEnabled &&
						(Xs.filter(function (ne) {
							return ne !== R && hl(ne.target);
						}).length || bt(fe ? ie : l, 'scroll', gd),
						R.isPressed &&
							(R._vx.reset(), R._vy.reset(), bt(z ? l : ie, rr[1], ti, !0)),
						bt(fe ? ie : l, 'scroll', Jn, Ce),
						bt(l, 'wheel', er, Ce),
						bt(l, rr[0], Ai, Ce),
						bt(ie, rr[2], le),
						bt(ie, rr[3], le),
						bt(l, 'click', Mr, !0),
						bt(l, 'click', Eo),
						bt(ie, 'gesturestart', Fi),
						bt(ie, 'gestureend', Zn),
						bt(l, Qi + 'enter', Ts),
						bt(l, Qi + 'leave', Rr),
						bt(l, Qi + 'move', Ii),
						(R.isEnabled = R.isPressed = R.isDragging = !1),
						st && st(R));
				}),
				(R.kill = R.revert =
					function () {
						R.disable();
						var ne = Xs.indexOf(R);
						ne >= 0 && Xs.splice(ne, 1), br === R && (br = 0);
					}),
				Xs.push(R),
				z && hl(l) && (br = R),
				R.enable(_);
		}),
		ST(t, [
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
et.version = '3.12.5';
et.create = function (t) {
	return new et(t);
};
et.register = bv;
et.getAll = function () {
	return Xs.slice();
};
et.getById = function (t) {
	return Xs.filter(function (e) {
		return e.vars.id === t;
	})[0];
};
Uv() && Nt.registerPlugin(et);
/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var b,
	js,
	he,
	Ve,
	lr,
	Ne,
	Hv,
	$a,
	bl,
	pl,
	Qo,
	Eu,
	At,
	cc,
	yd,
	Xt,
	$0,
	U0,
	Rs,
	Yv,
	Zc,
	Qv,
	Yt,
	xd,
	Xv,
	Gv,
	ri,
	wd,
	Bh,
	so,
	Wh,
	Ua,
	Sd,
	Jc,
	Cu = 1,
	It = Date.now,
	ef = It(),
	Hn = 0,
	Xo = 0,
	B0 = function (e, n, r) {
		var i = Sn(e) && (e.substr(0, 6) === 'clamp(' || e.indexOf('max') > -1);
		return (r['_' + n + 'Clamp'] = i), i ? e.substr(6, e.length - 7) : e;
	},
	W0 = function (e, n) {
		return n && (!Sn(e) || e.substr(0, 6) !== 'clamp(')
			? 'clamp(' + e + ')'
			: e;
	},
	TT = function t() {
		return Xo && requestAnimationFrame(t);
	},
	b0 = function () {
		return (cc = 1);
	},
	H0 = function () {
		return (cc = 0);
	},
	yr = function (e) {
		return e;
	},
	Go = function (e) {
		return Math.round(e * 1e5) / 1e5 || 0;
	},
	Kv = function () {
		return typeof window < 'u';
	},
	qv = function () {
		return b || (Kv() && (b = window.gsap) && b.registerPlugin && b);
	},
	gs = function (e) {
		return !!~Hv.indexOf(e);
	},
	Zv = function (e) {
		return (
			(e === 'Height' ? Wh : he['inner' + e]) ||
			lr['client' + e] ||
			Ne['client' + e]
		);
	},
	Jv = function (e) {
		return (
			Ci(e, 'getBoundingClientRect') ||
			(gs(e)
				? function () {
						return (na.width = he.innerWidth), (na.height = Wh), na;
					}
				: function () {
						return Ur(e);
					})
		);
	},
	ET = function (e, n, r) {
		var i = r.d,
			s = r.d2,
			o = r.a;
		return (o = Ci(e, 'getBoundingClientRect'))
			? function () {
					return o()[i];
				}
			: function () {
					return (n ? Zv(s) : e['client' + s]) || 0;
				};
	},
	CT = function (e, n) {
		return !n || ~Nr.indexOf(e)
			? Jv(e)
			: function () {
					return na;
				};
	},
	Tr = function (e, n) {
		var r = n.s,
			i = n.d2,
			s = n.d,
			o = n.a;
		return Math.max(
			0,
			(r = 'scroll' + i) && (o = Ci(e, r))
				? o() - Jv(e)()[s]
				: gs(e)
					? (lr[r] || Ne[r]) - Zv(i)
					: e[r] - e['offset' + i],
		);
	},
	Pu = function (e, n) {
		for (var r = 0; r < Rs.length; r += 3)
			(!n || ~n.indexOf(Rs[r + 1])) && e(Rs[r], Rs[r + 1], Rs[r + 2]);
	},
	Sn = function (e) {
		return typeof e == 'string';
	},
	Jt = function (e) {
		return typeof e == 'function';
	},
	Ko = function (e) {
		return typeof e == 'number';
	},
	Xi = function (e) {
		return typeof e == 'object';
	},
	$o = function (e, n, r) {
		return e && e.progress(n ? 0 : 1) && r && e.pause();
	},
	tf = function (e, n) {
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
	e1 = 'left',
	t1 = 'top',
	bh = 'right',
	Hh = 'bottom',
	ls = 'width',
	us = 'height',
	_l = 'Right',
	ml = 'Left',
	gl = 'Top',
	vl = 'Bottom',
	nt = 'padding',
	Vn = 'margin',
	wo = 'Width',
	Yh = 'Height',
	ut = 'px',
	$n = function (e) {
		return he.getComputedStyle(e);
	},
	PT = function (e) {
		var n = $n(e).position;
		e.style.position = n === 'absolute' || n === 'fixed' ? n : 'relative';
	},
	Y0 = function (e, n) {
		for (var r in n) r in e || (e[r] = n[r]);
		return e;
	},
	Ur = function (e, n) {
		var r =
				n &&
				$n(e)[yd] !== 'matrix(1, 0, 0, 1, 0, 0)' &&
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
	Ba = function (e, n) {
		var r = n.d2;
		return e['offset' + r] || e['client' + r] || 0;
	},
	n1 = function (e) {
		var n = [],
			r = e.labels,
			i = e.duration(),
			s;
		for (s in r) n.push(r[s] / i);
		return n;
	},
	NT = function (e) {
		return function (n) {
			return b.utils.snap(n1(e), n);
		};
	},
	Qh = function (e) {
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
	OT = function (e) {
		return function (n, r) {
			return Qh(n1(e))(n, r.direction);
		};
	},
	Nu = function (e, n, r, i) {
		return r.split(',').forEach(function (s) {
			return e(n, s, i);
		});
	},
	gt = function (e, n, r, i, s) {
		return e.addEventListener(n, r, { passive: !i, capture: !!s });
	},
	mt = function (e, n, r, i) {
		return e.removeEventListener(n, r, !!i);
	},
	Ou = function (e, n, r) {
		(r = r && r.wheelHandler), r && (e(n, 'wheel', r), e(n, 'touchmove', r));
	},
	Q0 = {
		startColor: 'green',
		endColor: 'red',
		indent: 0,
		fontSize: '16px',
		fontWeight: 'normal',
	},
	Mu = { toggleActions: 'play', anticipatePin: 0 },
	Wa = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
	Zu = function (e, n) {
		if (Sn(e)) {
			var r = e.indexOf('='),
				i = ~r ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
			~r && (e.indexOf('%') > r && (i *= n / 100), (e = e.substr(0, r - 1))),
				(e =
					i +
					(e in Wa
						? Wa[e] * n
						: ~e.indexOf('%')
							? (parseFloat(e) * n) / 100
							: parseFloat(e) || 0));
		}
		return e;
	},
	ju = function (e, n, r, i, s, o, l, u) {
		var a = s.startColor,
			c = s.endColor,
			d = s.fontSize,
			f = s.indent,
			h = s.fontWeight,
			g = Ve.createElement('div'),
			_ = gs(r) || Ci(r, 'pinType') === 'fixed',
			T = e.indexOf('scroller') !== -1,
			m = _ ? Ne : r,
			p = e.indexOf('start') !== -1,
			v = p ? a : c,
			x =
				'border-color:' +
				v +
				';font-size:' +
				d +
				';color:' +
				v +
				';font-weight:' +
				h +
				';pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;';
		return (
			(x += 'position:' + ((T || u) && _ ? 'fixed;' : 'absolute;')),
			(T || u || !_) &&
				(x += (i === ft ? bh : Hh) + ':' + (o + parseFloat(f)) + 'px;'),
			l &&
				(x +=
					'box-sizing:border-box;text-align:left;width:' +
					l.offsetWidth +
					'px;'),
			(g._isStart = p),
			g.setAttribute('class', 'gsap-marker-' + e + (n ? ' marker-' + n : '')),
			(g.style.cssText = x),
			(g.innerText = n || n === 0 ? e + '-' + n : e),
			m.children[0] ? m.insertBefore(g, m.children[0]) : m.appendChild(g),
			(g._offset = g['offset' + i.op.d2]),
			Ju(g, 0, i, p),
			g
		);
	},
	Ju = function (e, n, r, i) {
		var s = { display: 'block' },
			o = r[i ? 'os2' : 'p2'],
			l = r[i ? 'p2' : 'os2'];
		(e._isFlipped = i),
			(s[r.a + 'Percent'] = i ? -100 : 0),
			(s[r.a] = i ? '1px' : 0),
			(s['border' + o + wo] = 1),
			(s['border' + l + wo] = 0),
			(s[r.p] = n + 'px'),
			b.set(e, s);
	},
	se = [],
	kd = {},
	Hl,
	X0 = function () {
		return It() - Hn > 34 && (Hl || (Hl = requestAnimationFrame(Yr)));
	},
	Ms = function () {
		(!Yt || !Yt.isPressed || Yt.startX > Ne.clientWidth) &&
			(ue.cache++,
			Yt ? Hl || (Hl = requestAnimationFrame(Yr)) : Yr(),
			Hn || ys('scrollStart'),
			(Hn = It()));
	},
	nf = function () {
		(Gv = he.innerWidth), (Xv = he.innerHeight);
	},
	qo = function () {
		ue.cache++,
			!At &&
				!Qv &&
				!Ve.fullscreenElement &&
				!Ve.webkitFullscreenElement &&
				(!xd ||
					Gv !== he.innerWidth ||
					Math.abs(he.innerHeight - Xv) > he.innerHeight * 0.25) &&
				$a.restart(!0);
	},
	vs = {},
	MT = [],
	r1 = function t() {
		return mt(ae, 'scrollEnd', t) || es(!0);
	},
	ys = function (e) {
		return (
			(vs[e] &&
				vs[e].map(function (n) {
					return n();
				})) ||
			MT
		);
	},
	xn = [],
	i1 = function (e) {
		for (var n = 0; n < xn.length; n += 5)
			(!e || (xn[n + 4] && xn[n + 4].query === e)) &&
				((xn[n].style.cssText = xn[n + 1]),
				xn[n].getBBox && xn[n].setAttribute('transform', xn[n + 2] || ''),
				(xn[n + 3].uncache = 1));
	},
	Xh = function (e, n) {
		var r;
		for (Xt = 0; Xt < se.length; Xt++)
			(r = se[Xt]),
				r && (!n || r._ctx === n) && (e ? r.kill(1) : r.revert(!0, !0));
		(Ua = !0), n && i1(n), n || ys('revert');
	},
	s1 = function (e, n) {
		ue.cache++,
			(n || !Gt) &&
				ue.forEach(function (r) {
					return Jt(r) && r.cacheID++ && (r.rec = 0);
				}),
			Sn(e) && (he.history.scrollRestoration = Bh = e);
	},
	Gt,
	as = 0,
	G0,
	jT = function () {
		if (G0 !== as) {
			var e = (G0 = as);
			requestAnimationFrame(function () {
				return e === as && es(!0);
			});
		}
	},
	o1 = function () {
		Ne.appendChild(so),
			(Wh = (!Yt && so.offsetHeight) || he.innerHeight),
			Ne.removeChild(so);
	},
	K0 = function (e) {
		return bl(
			'.gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end',
		).forEach(function (n) {
			return (n.style.display = e ? 'none' : 'block');
		});
	},
	es = function (e, n) {
		if (Hn && !e && !Ua) {
			gt(ae, 'scrollEnd', r1);
			return;
		}
		o1(),
			(Gt = ae.isRefreshing = !0),
			ue.forEach(function (i) {
				return Jt(i) && ++i.cacheID && (i.rec = i());
			});
		var r = ys('refreshInit');
		Yv && ae.sort(),
			n || Xh(),
			ue.forEach(function (i) {
				Jt(i) && (i.smooth && (i.target.style.scrollBehavior = 'auto'), i(0));
			}),
			se.slice(0).forEach(function (i) {
				return i.refresh();
			}),
			(Ua = !1),
			se.forEach(function (i) {
				if (i._subPinOffset && i.pin) {
					var s = i.vars.horizontal ? 'offsetWidth' : 'offsetHeight',
						o = i.pin[s];
					i.revert(!0, 1), i.adjustPinSpacing(i.pin[s] - o), i.refresh();
				}
			}),
			(Sd = 1),
			K0(!0),
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
			K0(!1),
			(Sd = 0),
			r.forEach(function (i) {
				return i && i.render && i.render(-1);
			}),
			ue.forEach(function (i) {
				Jt(i) &&
					(i.smooth &&
						requestAnimationFrame(function () {
							return (i.target.style.scrollBehavior = 'smooth');
						}),
					i.rec && i(i.rec));
			}),
			s1(Bh, 1),
			$a.pause(),
			as++,
			(Gt = 2),
			Yr(2),
			se.forEach(function (i) {
				return Jt(i.vars.onRefresh) && i.vars.onRefresh(i);
			}),
			(Gt = ae.isRefreshing = !1),
			ys('refresh');
	},
	Td = 0,
	ea = 1,
	yl,
	Yr = function (e) {
		if (e === 2 || (!Gt && !Ua)) {
			(ae.isUpdating = !0), yl && yl.update(0);
			var n = se.length,
				r = It(),
				i = r - ef >= 50,
				s = n && se[0].scroll();
			if (
				((ea = Td > s ? -1 : 1),
				Gt || (Td = s),
				i &&
					(Hn && !cc && r - Hn > 200 && ((Hn = 0), ys('scrollEnd')),
					(Qo = ef),
					(ef = r)),
				ea < 0)
			) {
				for (Xt = n; Xt-- > 0; ) se[Xt] && se[Xt].update(0, i);
				ea = 1;
			} else for (Xt = 0; Xt < n; Xt++) se[Xt] && se[Xt].update(0, i);
			ae.isUpdating = !1;
		}
		Hl = 0;
	},
	Ed = [
		e1,
		t1,
		Hh,
		bh,
		Vn + vl,
		Vn + _l,
		Vn + gl,
		Vn + ml,
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
	ta = Ed.concat([
		ls,
		us,
		'boxSizing',
		'max' + wo,
		'max' + Yh,
		'position',
		Vn,
		nt,
		nt + gl,
		nt + _l,
		nt + vl,
		nt + ml,
	]),
	RT = function (e, n, r) {
		oo(r);
		var i = e._gsap;
		if (i.spacerIsNative) oo(i.spacerState);
		else if (e._gsap.swappedIn) {
			var s = n.parentNode;
			s && (s.insertBefore(e, n), s.removeChild(n));
		}
		e._gsap.swappedIn = !1;
	},
	rf = function (e, n, r, i) {
		if (!e._gsap.swappedIn) {
			for (var s = Ed.length, o = n.style, l = e.style, u; s--; )
				(u = Ed[s]), (o[u] = r[u]);
			(o.position = r.position === 'absolute' ? 'absolute' : 'relative'),
				r.display === 'inline' && (o.display = 'inline-block'),
				(l[Hh] = l[bh] = 'auto'),
				(o.flexBasis = r.flexBasis || 'auto'),
				(o.overflow = 'visible'),
				(o.boxSizing = 'border-box'),
				(o[ls] = Ba(e, Zt) + ut),
				(o[us] = Ba(e, ft) + ut),
				(o[nt] = l[Vn] = l[t1] = l[e1] = '0'),
				oo(i),
				(l[ls] = l['max' + wo] = r[ls]),
				(l[us] = l['max' + Yh] = r[us]),
				(l[nt] = r[nt]),
				e.parentNode !== n &&
					(e.parentNode.insertBefore(n, e), n.appendChild(e)),
				(e._gsap.swappedIn = !0);
		}
	},
	DT = /([A-Z])/g,
	oo = function (e) {
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
						: n[s] && n.removeProperty(s.replace(DT, '-$1').toLowerCase());
		}
	},
	Ru = function (e) {
		for (var n = ta.length, r = e.style, i = [], s = 0; s < n; s++)
			i.push(ta[s], r[ta[s]]);
		return (i.t = e), i;
	},
	zT = function (e, n, r) {
		for (var i = [], s = e.length, o = r ? 8 : 0, l; o < s; o += 2)
			(l = e[o]), i.push(l, l in n ? n[l] : e[o + 1]);
		return (i.t = e.t), i;
	},
	na = { left: 0, top: 0 },
	q0 = function (e, n, r, i, s, o, l, u, a, c, d, f, h, g) {
		Jt(e) && (e = e(u)),
			Sn(e) &&
				e.substr(0, 3) === 'max' &&
				(e = f + (e.charAt(4) === '=' ? Zu('0' + e.substr(3), r) : 0));
		var _ = h ? h.time() : 0,
			T,
			m,
			p;
		if ((h && h.seek(0), isNaN(e) || (e = +e), Ko(e)))
			h &&
				(e = b.utils.mapRange(
					h.scrollTrigger.start,
					h.scrollTrigger.end,
					0,
					f,
					e,
				)),
				l && Ju(l, r, i, !0);
		else {
			Jt(n) && (n = n(u));
			var v = (e || '0').split(' '),
				x,
				k,
				C,
				E;
			(p = un(n, u) || Ne),
				(x = Ur(p) || {}),
				(!x || (!x.left && !x.top)) &&
					$n(p).display === 'none' &&
					((E = p.style.display),
					(p.style.display = 'block'),
					(x = Ur(p)),
					E ? (p.style.display = E) : p.style.removeProperty('display')),
				(k = Zu(v[0], x[i.d])),
				(C = Zu(v[1] || '0', r)),
				(e = x[i.p] - a[i.p] - c + k + s - C),
				l && Ju(l, C, i, r - C < 20 || (l._isStart && C > 20)),
				(r -= r - C);
		}
		if ((g && ((u[g] = e || -0.001), e < 0 && (e = 0)), o)) {
			var N = e + r,
				j = o._isStart;
			(T = 'scroll' + i.d2),
				Ju(
					o,
					N,
					i,
					(j && N > 20) ||
						(!j && (d ? Math.max(Ne[T], lr[T]) : o.parentNode[T]) <= N + 1),
				),
				d &&
					((a = Ur(l)),
					d && (o.style[i.op.p] = a[i.op.p] - i.op.m - o._offset + ut));
		}
		return (
			h &&
				p &&
				((T = Ur(p)),
				h.seek(f),
				(m = Ur(p)),
				(h._caScrollDist = T[i.p] - m[i.p]),
				(e = (e / h._caScrollDist) * f)),
			h && h.seek(_),
			h ? e : Math.round(e)
		);
	},
	LT = /(webkit|moz|length|cssText|inset)/i,
	Z0 = function (e, n, r, i) {
		if (e.parentNode !== n) {
			var s = e.style,
				o,
				l;
			if (n === Ne) {
				(e._stOrig = s.cssText), (l = $n(e));
				for (o in l)
					!+o &&
						!LT.test(o) &&
						l[o] &&
						typeof s[o] == 'string' &&
						o !== '0' &&
						(s[o] = l[o]);
				(s.top = r), (s.left = i);
			} else s.cssText = e._stOrig;
			(b.core.getCache(e).uncache = 1), n.appendChild(e);
		}
	},
	l1 = function (e, n, r) {
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
	Du = function (e, n, r) {
		var i = {};
		(i[n.p] = '+=' + r), b.set(e, i);
	},
	J0 = function (e, n) {
		var r = ji(e, n),
			i = '_scroll' + n.p2,
			s = function o(l, u, a, c, d) {
				var f = o.tween,
					h = u.onComplete,
					g = {};
				a = a || r();
				var _ = l1(r, a, function () {
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
						return _(a + c * f.ratio + d * f.ratio * f.ratio);
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
			gt(e, 'wheel', r.wheelHandler),
			ae.isTouch && gt(e, 'touchmove', r.wheelHandler),
			s
		);
	},
	ae = (function () {
		function t(n, r) {
			js ||
				t.register(b) ||
				console.warn('Please gsap.registerPlugin(ScrollTrigger)'),
				wd(this),
				this.init(n, r);
		}
		var e = t.prototype;
		return (
			(e.init = function (r, i) {
				if (
					((this.progress = this.start = 0),
					this.vars && this.kill(!0, !0),
					!Xo)
				) {
					this.update = this.refresh = this.kill = yr;
					return;
				}
				r = Y0(Sn(r) || Ko(r) || r.nodeType ? { trigger: r } : r, Mu);
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
					_ = s.invalidateOnRefresh,
					T = s.anticipatePin,
					m = s.onScrubComplete,
					p = s.onSnapComplete,
					v = s.once,
					x = s.snap,
					k = s.pinReparent,
					C = s.pinSpacer,
					E = s.containerAnimation,
					N = s.fastScrollEnd,
					j = s.preventOverlaps,
					M =
						r.horizontal || (r.containerAnimation && r.horizontal !== !1)
							? Zt
							: ft,
					H = !d && d !== 0,
					D = un(r.scroller || he),
					I = b.core.getCache(D),
					Y = gs(D),
					K =
						('pinType' in r
							? r.pinType
							: Ci(D, 'pinType') || (Y && 'fixed')) === 'fixed',
					G = [r.onEnter, r.onLeave, r.onEnterBack, r.onLeaveBack],
					Q = H && r.toggleActions.split(' '),
					z = 'markers' in r ? r.markers : Mu.markers,
					$ = Y ? 0 : parseFloat($n(D)['border' + M.p2 + wo]) || 0,
					w = this,
					q =
						r.onRefreshInit &&
						function () {
							return r.onRefreshInit(w);
						},
					oe = ET(D, Y, M),
					st = CT(D, Y),
					ge = 0,
					Me = 0,
					Ce = 0,
					ye = ji(D, M),
					pt,
					tt,
					Gn,
					St,
					sn,
					_e,
					je,
					kt,
					on,
					R,
					ln,
					S,
					P,
					O,
					V,
					F,
					L,
					B,
					fe,
					ie,
					Ye,
					ot,
					Kn,
					Mr,
					Re,
					ks,
					qn,
					ei,
					jr,
					ti,
					Ai,
					le,
					Fi,
					Zn,
					Jn,
					er,
					Ii,
					Ts,
					Rr;
				if (
					((w._startClamp = w._endClamp = !1),
					(w._dir = M),
					(T *= 45),
					(w.scroller = D),
					(w.scroll = E ? E.time.bind(E) : ye),
					(St = ye()),
					(w.vars = r),
					(i = i || r.animation),
					'refreshPriority' in r &&
						((Yv = 1), r.refreshPriority === -9999 && (yl = w)),
					(I.tweenScroll = I.tweenScroll || {
						top: J0(D, ft),
						left: J0(D, Zt),
					}),
					(w.tweenTo = pt = I.tweenScroll[M.p]),
					(w.scrubDuration = function (U) {
						(Fi = Ko(U) && U),
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
												return m && m(w);
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
						((!Xi(x) || x.push) && (x = { snapTo: x }),
						'scrollBehavior' in Ne.style &&
							b.set(Y ? [Ne, lr] : D, { scrollBehavior: 'auto' }),
						ue.forEach(function (U) {
							return (
								Jt(U) &&
								U.target === (Y ? Ve.scrollingElement || lr : D) &&
								(U.smooth = !1)
							);
						}),
						(Gn = Jt(x.snapTo)
							? x.snapTo
							: x.snapTo === 'labels'
								? NT(i)
								: x.snapTo === 'labelsDirectional'
									? OT(i)
									: x.directional !== !1
										? function (U, re) {
												return Qh(x.snapTo)(
													U,
													It() - Me < 500 ? 0 : re.direction,
												);
											}
										: b.utils.snap(x.snapTo)),
						(Zn = x.duration || { min: 0.1, max: 2 }),
						(Zn = Xi(Zn) ? pl(Zn.min, Zn.max) : pl(Zn, Zn)),
						(Jn = b
							.delayedCall(x.delay || Fi / 2 || 0.1, function () {
								var U = ye(),
									re = It() - Me < 500,
									Z = pt.tween;
								if (
									(re || Math.abs(w.getVelocity()) < 10) &&
									!Z &&
									!cc &&
									ge !== U
								) {
									var ee = (U - _e) / O,
										_t = i && !H ? i.totalProgress() : ee,
										de = re ? 0 : ((_t - Ai) / (It() - Qo)) * 1e3 || 0,
										Ke = b.utils.clamp(-ee, 1 - ee, (Os(de / 2) * de) / 0.185),
										jt = ee + (x.inertia === !1 ? 0 : Ke),
										Qe,
										De,
										we = x,
										tr = we.onStart,
										Fe = we.onInterrupt,
										yn = we.onComplete;
									if (
										((Qe = Gn(jt, w)),
										Ko(Qe) || (Qe = jt),
										(De = Math.round(_e + Qe * O)),
										U <= je && U >= _e && De !== U)
									) {
										if (Z && !Z._initted && Z.data <= Os(De - U)) return;
										x.inertia === !1 && (Ke = Qe - ee),
											pt(
												De,
												{
													duration: Zn(
														Os(
															(Math.max(Os(jt - _t), Os(Qe - _t)) * 0.185) /
																de /
																0.05 || 0,
														),
													),
													ease: x.ease || 'power3',
													data: Os(De - U),
													onInterrupt: function () {
														return Jn.restart(!0) && Fe && Fe(w);
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
															(ti = Ai =
																i && !H ? i.totalProgress() : w.progress),
															p && p(w),
															yn && yn(w);
													},
												},
												U,
												Ke * O,
												De - U - Ke * O,
											),
											tr && tr(w, pt.tween);
									}
								} else w.isActive && ge !== U && Jn.restart(!0);
							})
							.pause())),
					u && (kd[u] = w),
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
									: nt),
						(w.pin = h),
						(tt = b.core.getCache(h)),
						tt.spacer
							? (V = tt.pinState)
							: (C &&
									((C = un(C)),
									C && !C.nodeType && (C = C.current || C.nativeElement),
									(tt.spacerIsNative = !!C),
									C && (tt.spacerState = Ru(C))),
								(tt.spacer = B = C || Ve.createElement('div')),
								B.classList.add('pin-spacer'),
								u && B.classList.add('pin-spacer-' + u),
								(tt.pinState = V = Ru(h))),
						r.force3D !== !1 && b.set(h, { force3D: !0 }),
						(w.spacer = B = tt.spacer),
						(jr = $n(h)),
						(Mr = jr[g + M.os2]),
						(ie = b.getProperty(h)),
						(Ye = b.quickSetter(h, M.a, ut)),
						rf(h, B, jr),
						(L = Ru(h))),
					z)
				) {
					(S = Xi(z) ? Y0(z, Q0) : Q0),
						(R = ju('scroller-start', u, D, M, S, 0)),
						(ln = ju('scroller-end', u, D, M, S, 0, R)),
						(fe = R['offset' + M.op.d2]);
					var Eo = un(Ci(D, 'content') || D);
					(kt = this.markerStart = ju('start', u, Eo, M, S, fe, 0, E)),
						(on = this.markerEnd = ju('end', u, Eo, M, S, fe, 0, E)),
						E && (Ts = b.quickSetter([kt, on], M.a, ut)),
						!K &&
							!(Nr.length && Ci(D, 'fixedMarkers') === !0) &&
							(PT(Y ? Ne : D),
							b.set([R, ln], { force3D: !0 }),
							(ks = b.quickSetter(R, M.a, ut)),
							(ei = b.quickSetter(ln, M.a, ut)));
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
							ee = At;
						Z !== w.isReverted &&
							(Z &&
								((er = Math.max(ye(), w.scroll.rec || 0)),
								(Ce = w.progress),
								(Ii = i && i.progress())),
							kt &&
								[kt, on, R, ln].forEach(function (_t) {
									return (_t.style.display = Z ? 'none' : 'block');
								}),
							Z && ((At = w), w.update(Z)),
							h &&
								(!k || !w.isActive) &&
								(Z ? RT(h, B, V) : rf(h, B, $n(h), Re)),
							Z || w.update(Z),
							(At = ee),
							(w.isReverted = Z));
					}),
					(w.refresh = function (U, re, Z, ee) {
						if (!((At || !w.enabled) && !re)) {
							if (h && U && Hn) {
								gt(t, 'scrollEnd', r1);
								return;
							}
							!Gt && q && q(w),
								(At = w),
								pt.tween && !Z && (pt.tween.kill(), (pt.tween = 0)),
								le && le.pause(),
								_ && i && i.revert({ kill: !1 }).invalidate(),
								w.isReverted || w.revert(!0, !0),
								(w._subPinOffset = !1);
							var _t = oe(),
								de = st(),
								Ke = E ? E.duration() : Tr(D, M),
								jt = O <= 0.01,
								Qe = 0,
								De = ee || 0,
								we = Xi(Z) ? Z.end : r.end,
								tr = r.endTrigger || f,
								Fe = Xi(Z)
									? Z.start
									: r.start || (r.start === 0 || !f ? 0 : h ? '0 0' : '0 100%'),
								yn = (w.pinnedContainer =
									r.pinnedContainer && un(r.pinnedContainer, w)),
								dr = (f && Math.max(0, se.indexOf(w))) || 0,
								Tt = dr,
								Et,
								Rt,
								Vi,
								tu,
								Dt,
								lt,
								hr,
								fc,
								Gh,
								Co,
								pr,
								Po,
								nu;
							for (
								z &&
								Xi(Z) &&
								((Po = b.getProperty(R, M.p)), (nu = b.getProperty(ln, M.p)));
								Tt--;

							)
								(lt = se[Tt]),
									lt.end || lt.refresh(0, 1) || (At = w),
									(hr = lt.pin),
									hr &&
										(hr === f || hr === h || hr === yn) &&
										!lt.isReverted &&
										(Co || (Co = []), Co.unshift(lt), lt.revert(!0, !0)),
									lt !== se[Tt] && (dr--, Tt--);
							for (
								Jt(Fe) && (Fe = Fe(w)),
									Fe = B0(Fe, 'start', w),
									_e =
										q0(
											Fe,
											f,
											_t,
											M,
											ye(),
											kt,
											R,
											w,
											de,
											$,
											K,
											Ke,
											E,
											w._startClamp && '_startClamp',
										) || (h ? -0.001 : 0),
									Jt(we) && (we = we(w)),
									Sn(we) &&
										!we.indexOf('+=') &&
										(~we.indexOf(' ')
											? (we = (Sn(Fe) ? Fe.split(' ')[0] : '') + we)
											: ((Qe = Zu(we.substr(2), _t)),
												(we = Sn(Fe)
													? Fe
													: (E
															? b.utils.mapRange(
																	0,
																	E.duration(),
																	E.scrollTrigger.start,
																	E.scrollTrigger.end,
																	_e,
																)
															: _e) + Qe),
												(tr = f))),
									we = B0(we, 'end', w),
									je =
										Math.max(
											_e,
											q0(
												we || (tr ? '100% 0' : Ke),
												tr,
												_t,
												M,
												ye() + Qe,
												on,
												ln,
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
									Tt = dr;
								Tt--;

							)
								(lt = se[Tt]),
									(hr = lt.pin),
									hr &&
										lt.start - lt._pinPush <= _e &&
										!E &&
										lt.end > 0 &&
										((Et =
											lt.end -
											(w._startClamp ? Math.max(0, lt.start) : lt.start)),
										((hr === f && lt.start - lt._pinPush < _e) || hr === yn) &&
											isNaN(Fe) &&
											(Qe += Et * (1 - lt.progress)),
										hr === h && (De += Et));
							if (
								((_e += Qe),
								(je += Qe),
								w._startClamp && (w._startClamp += Qe),
								w._endClamp &&
									!Gt &&
									((w._endClamp = je || -0.001), (je = Math.min(je, Tr(D, M)))),
								(O = je - _e || ((_e -= 0.01) && 0.001)),
								jt && (Ce = b.utils.clamp(0, 1, b.utils.normalize(_e, je, er))),
								(w._pinPush = De),
								kt &&
									Qe &&
									((Et = {}),
									(Et[M.a] = '+=' + Qe),
									yn && (Et[M.p] = '-=' + ye()),
									b.set([kt, on], Et)),
								h && !(Sd && w.end >= Tr(D, M)))
							)
								(Et = $n(h)),
									(tu = M === ft),
									(Vi = ye()),
									(ot = parseFloat(ie(M.a)) + De),
									!Ke &&
										je > 1 &&
										((pr = (Y ? Ve.scrollingElement || lr : D).style),
										(pr = {
											style: pr,
											value: pr['overflow' + M.a.toUpperCase()],
										}),
										Y &&
											$n(Ne)['overflow' + M.a.toUpperCase()] !== 'scroll' &&
											(pr.style['overflow' + M.a.toUpperCase()] = 'scroll')),
									rf(h, B, Et),
									(L = Ru(h)),
									(Rt = Ur(h, !0)),
									(fc = K && ji(D, tu ? Zt : ft)()),
									g
										? ((Re = [g + M.os2, O + De + ut]),
											(Re.t = B),
											(Tt = g === nt ? Ba(h, M) + O + De : 0),
											Tt &&
												(Re.push(M.d, Tt + ut),
												B.style.flexBasis !== 'auto' &&
													(B.style.flexBasis = Tt + ut)),
											oo(Re),
											yn &&
												se.forEach(function (No) {
													No.pin === yn &&
														No.vars.pinSpacing !== !1 &&
														(No._subPinOffset = !0);
												}),
											K && ye(er))
										: ((Tt = Ba(h, M)),
											Tt &&
												B.style.flexBasis !== 'auto' &&
												(B.style.flexBasis = Tt + ut)),
									K &&
										((Dt = {
											top: Rt.top + (tu ? Vi - _e : fc) + ut,
											left: Rt.left + (tu ? fc : Vi - _e) + ut,
											boxSizing: 'border-box',
											position: 'fixed',
										}),
										(Dt[ls] = Dt['max' + wo] = Math.ceil(Rt.width) + ut),
										(Dt[us] = Dt['max' + Yh] = Math.ceil(Rt.height) + ut),
										(Dt[Vn] =
											Dt[Vn + gl] =
											Dt[Vn + _l] =
											Dt[Vn + vl] =
											Dt[Vn + ml] =
												'0'),
										(Dt[nt] = Et[nt]),
										(Dt[nt + gl] = Et[nt + gl]),
										(Dt[nt + _l] = Et[nt + _l]),
										(Dt[nt + vl] = Et[nt + vl]),
										(Dt[nt + ml] = Et[nt + ml]),
										(F = zT(V, Dt, k)),
										Gt && ye(0)),
									i
										? ((Gh = i._initted),
											Zc(1),
											i.render(i.duration(), !0, !0),
											(Kn = ie(M.a) - ot + O + De),
											(qn = Math.abs(O - Kn) > 1),
											K && qn && F.splice(F.length - 2, 2),
											i.render(0, !0, !0),
											Gh || i.invalidate(!0),
											i.parent || i.totalTime(i.totalTime()),
											Zc(0))
										: (Kn = O),
									pr &&
										(pr.value
											? (pr.style['overflow' + M.a.toUpperCase()] = pr.value)
											: pr.style.removeProperty('overflow-' + M.a));
							else if (f && ye() && !E)
								for (Rt = f.parentNode; Rt && Rt !== Ne; )
									Rt._pinOffset &&
										((_e -= Rt._pinOffset), (je -= Rt._pinOffset)),
										(Rt = Rt.parentNode);
							Co &&
								Co.forEach(function (No) {
									return No.revert(!1, !0);
								}),
								(w.start = _e),
								(w.end = je),
								(St = sn = Gt ? er : ye()),
								!E && !Gt && (St < er && ye(er), (w.scroll.rec = 0)),
								w.revert(!1, !0),
								(Me = It()),
								Jn && ((ge = -1), Jn.restart(!0)),
								(At = 0),
								i &&
									H &&
									(i._initted || Ii) &&
									i.progress() !== Ii &&
									i.progress(Ii || 0, !0).render(i.time(), !0, !0),
								(jt || Ce !== w.progress || E || _) &&
									(i &&
										!H &&
										i.totalProgress(
											E && _e < -0.001 && !Ce
												? b.utils.normalize(_e, je, 0)
												: Ce,
											!0,
										),
									(w.progress = jt || (St - _e) / O === Ce ? 0 : Ce)),
								h && g && (B._pinOffset = Math.round(w.progress * Kn)),
								le && le.invalidate(),
								isNaN(Po) ||
									((Po -= b.getProperty(R, M.p)),
									(nu -= b.getProperty(ln, M.p)),
									Du(R, M, Po),
									Du(kt, M, Po - (ee || 0)),
									Du(ln, M, nu),
									Du(on, M, nu - (ee || 0))),
								jt && !Gt && w.update(),
								c && !Gt && !P && ((P = !0), c(w), (P = !1));
						}
					}),
					(w.getVelocity = function () {
						return ((ye() - sn) / (It() - Qo)) * 1e3 || 0;
					}),
					(w.endAnimation = function () {
						$o(w.callbackAnimation),
							i &&
								(le
									? le.progress(1)
									: i.paused()
										? H || $o(i, w.direction < 0, 1)
										: $o(i, i.reversed()));
					}),
					(w.labelToScroll = function (U) {
						return (
							(i &&
								i.labels &&
								(_e || w.refresh() || _e) + (i.labels[U] / i.duration()) * O) ||
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
							return w.direction > 0 ? ee.end <= _e : ee.start >= je;
						});
					}),
					(w.update = function (U, re, Z) {
						if (!(E && !Z && !U)) {
							var ee = Gt === !0 ? er : w.scroll(),
								_t = U ? 0 : (ee - _e) / O,
								de = _t < 0 ? 0 : _t > 1 ? 1 : _t || 0,
								Ke = w.progress,
								jt,
								Qe,
								De,
								we,
								tr,
								Fe,
								yn,
								dr;
							if (
								(re &&
									((sn = St),
									(St = E ? ye() : ee),
									x && ((Ai = ti), (ti = i && !H ? i.totalProgress() : de))),
								T &&
									h &&
									!At &&
									!Cu &&
									Hn &&
									(!de && _e < ee + ((ee - sn) / (It() - Qo)) * T
										? (de = 1e-4)
										: de === 1 &&
											je > ee + ((ee - sn) / (It() - Qo)) * T &&
											(de = 0.9999)),
								de !== Ke && w.enabled)
							) {
								if (
									((jt = w.isActive = !!de && de < 1),
									(Qe = !!Ke && Ke < 1),
									(Fe = jt !== Qe),
									(tr = Fe || !!de != !!Ke),
									(w.direction = de > Ke ? 1 : -1),
									(w.progress = de),
									tr &&
										!At &&
										((De = de && !Ke ? 0 : de === 1 ? 1 : Ke === 1 ? 2 : 3),
										H &&
											((we =
												(!Fe && Q[De + 1] !== 'none' && Q[De + 1]) || Q[De]),
											(dr =
												i &&
												(we === 'complete' || we === 'reset' || we in i)))),
									j &&
										(Fe || dr) &&
										(dr || d || !i) &&
										(Jt(j)
											? j(w)
											: w.getTrailing(j).forEach(function (Vi) {
													return Vi.endAnimation();
												})),
									H ||
										(le && !At && !Cu
											? (le._dp._time - le._start !== le._time &&
													le.render(le._dp._time - le._start),
												le.resetTo
													? le.resetTo('totalProgress', de, i._tTime / i._tDur)
													: ((le.vars.totalProgress = de),
														le.invalidate().restart()))
											: i && i.totalProgress(de, !!(At && (Me || U)))),
									h)
								) {
									if ((U && g && (B.style[g + M.os2] = Mr), !K))
										Ye(Go(ot + Kn * de));
									else if (tr) {
										if (
											((yn =
												!U && de > Ke && je + 1 > ee && ee + 1 >= Tr(D, M)),
											k)
										)
											if (!U && (jt || yn)) {
												var Tt = Ur(h, !0),
													Et = ee - _e;
												Z0(
													h,
													Ne,
													Tt.top + (M === ft ? Et : 0) + ut,
													Tt.left + (M === ft ? 0 : Et) + ut,
												);
											} else Z0(h, B);
										oo(jt || yn ? F : L),
											(qn && de < 1 && jt) ||
												Ye(ot + (de === 1 && !yn ? Kn : 0));
									}
								}
								x && !pt.tween && !At && !Cu && Jn.restart(!0),
									l &&
										(Fe || (v && de && (de < 1 || !Jc))) &&
										bl(l.targets).forEach(function (Vi) {
											return Vi.classList[jt || v ? 'add' : 'remove'](
												l.className,
											);
										}),
									o && !H && !U && o(w),
									tr && !At
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
											(Fe || !Jc) &&
												(a && Fe && tf(w, a),
												G[De] && tf(w, G[De]),
												v && (de === 1 ? w.kill(!1, 1) : (G[De] = 0)),
												Fe || ((De = de === 1 ? 1 : 3), G[De] && tf(w, G[De]))),
											N &&
												!jt &&
												Math.abs(w.getVelocity()) > (Ko(N) ? N : 2500) &&
												($o(w.callbackAnimation),
												le
													? le.progress(1)
													: $o(i, we === 'reverse' ? 1 : !de, 1)))
										: H && o && !At && o(w);
							}
							if (ei) {
								var Rt = E ? (ee / E.duration()) * (E._caScrollDist || 0) : ee;
								ks(Rt + (R._isFlipped ? 1 : 0)), ei(Rt);
							}
							Ts && Ts((-ee / E.duration()) * (E._caScrollDist || 0));
						}
					}),
					(w.enable = function (U, re) {
						w.enabled ||
							((w.enabled = !0),
							gt(D, 'resize', qo),
							Y || gt(D, 'scroll', Ms),
							q && gt(t, 'refreshInit', q),
							U !== !1 && ((w.progress = Ce = 0), (St = sn = ge = ye())),
							re !== !1 && w.refresh());
					}),
					(w.getTween = function (U) {
						return U && pt ? pt.tween : le;
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
								start: W0(U, Z && !!w._startClamp),
								end: W0(re, Z && !!w._endClamp),
							},
							ee,
						),
							w.update();
					}),
					(w.adjustPinSpacing = function (U) {
						if (Re && U) {
							var re = Re.indexOf(M.d) + 1;
							(Re[re] = parseFloat(Re[re]) + U + ut),
								(Re[1] = parseFloat(Re[1]) + U + ut),
								oo(Re);
						}
					}),
					(w.disable = function (U, re) {
						if (
							w.enabled &&
							(U !== !1 && w.revert(!0, !0),
							(w.enabled = w.isActive = !1),
							re || (le && le.pause()),
							(er = 0),
							tt && (tt.uncache = 1),
							q && mt(t, 'refreshInit', q),
							Jn && (Jn.pause(), pt.tween && pt.tween.kill() && (pt.tween = 0)),
							!Y)
						) {
							for (var Z = se.length; Z--; )
								if (se[Z].scroller === D && se[Z] !== w) return;
							mt(D, 'resize', qo), Y || mt(D, 'scroll', Ms);
						}
					}),
					(w.kill = function (U, re) {
						w.disable(U, re), le && !re && le.kill(), u && delete kd[u];
						var Z = se.indexOf(w);
						Z >= 0 && se.splice(Z, 1),
							Z === Xt && ea > 0 && Xt--,
							(Z = 0),
							se.forEach(function (ee) {
								return ee.scroller === w.scroller && (Z = 1);
							}),
							Z || Gt || (w.scroll.rec = 0),
							i &&
								((i.scrollTrigger = null),
								U && i.revert({ kill: !1 }),
								re || i.kill()),
							kt &&
								[kt, on, R, ln].forEach(function (ee) {
									return ee.parentNode && ee.parentNode.removeChild(ee);
								}),
							yl === w && (yl = 0),
							h &&
								(tt && (tt.uncache = 1),
								(Z = 0),
								se.forEach(function (ee) {
									return ee.pin === h && Z++;
								}),
								Z || (tt.spacer = 0)),
							r.onKill && r.onKill(w);
					}),
					se.push(w),
					w.enable(!1, !1),
					Rr && Rr(w),
					i && i.add && !O)
				) {
					var ve = w.update;
					(w.update = function () {
						(w.update = ve), _e || je || w.refresh();
					}),
						b.delayedCall(0.01, w.update),
						(O = 0.01),
						(_e = je = 0);
				} else w.refresh();
				h && jT();
			}),
			(t.register = function (r) {
				return (
					js ||
						((b = r || qv()), Kv() && window.document && t.enable(), (js = Xo)),
					js
				);
			}),
			(t.defaults = function (r) {
				if (r) for (var i in r) Mu[i] = r[i];
				return Mu;
			}),
			(t.disable = function (r, i) {
				(Xo = 0),
					se.forEach(function (o) {
						return o[i ? 'kill' : 'disable'](r);
					}),
					mt(he, 'wheel', Ms),
					mt(Ve, 'scroll', Ms),
					clearInterval(Eu),
					mt(Ve, 'touchcancel', yr),
					mt(Ne, 'touchstart', yr),
					Nu(mt, Ve, 'pointerdown,touchstart,mousedown', b0),
					Nu(mt, Ve, 'pointerup,touchend,mouseup', H0),
					$a.kill(),
					Pu(mt);
				for (var s = 0; s < ue.length; s += 3)
					Ou(mt, ue[s], ue[s + 1]), Ou(mt, ue[s], ue[s + 2]);
			}),
			(t.enable = function () {
				if (
					((he = window),
					(Ve = document),
					(lr = Ve.documentElement),
					(Ne = Ve.body),
					b &&
						((bl = b.utils.toArray),
						(pl = b.utils.clamp),
						(wd = b.core.context || yr),
						(Zc = b.core.suppressOverwrites || yr),
						(Bh = he.history.scrollRestoration || 'auto'),
						(Td = he.pageYOffset),
						b.core.globals('ScrollTrigger', t),
						Ne))
				) {
					(Xo = 1),
						(so = document.createElement('div')),
						(so.style.height = '100vh'),
						(so.style.position = 'absolute'),
						o1(),
						TT(),
						et.register(b),
						(t.isTouch = et.isTouch),
						(ri =
							et.isTouch &&
							/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
						(xd = et.isTouch === 1),
						gt(he, 'wheel', Ms),
						(Hv = [he, Ve, lr, Ne]),
						b.matchMedia
							? ((t.matchMedia = function (u) {
									var a = b.matchMedia(),
										c;
									for (c in u) a.add(c, u[c]);
									return a;
								}),
								b.addEventListener('matchMediaInit', function () {
									return Xh();
								}),
								b.addEventListener('matchMediaRevert', function () {
									return i1();
								}),
								b.addEventListener('matchMedia', function () {
									es(0, 1), ys('matchMedia');
								}),
								b.matchMedia('(orientation: portrait)', function () {
									return nf(), nf;
								}))
							: console.warn('Requires GSAP 3.11.0 or later'),
						nf(),
						gt(Ve, 'scroll', Ms);
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
							ft.m = Math.round(o.top + ft.sc()) || 0,
							Zt.m = Math.round(o.left + Zt.sc()) || 0,
							i ? (r.borderTopStyle = i) : r.removeProperty('border-top-style'),
							Eu = setInterval(X0, 250),
							b.delayedCall(0.5, function () {
								return (Cu = 0);
							}),
							gt(Ve, 'touchcancel', yr),
							gt(Ne, 'touchstart', yr),
							Nu(gt, Ve, 'pointerdown,touchstart,mousedown', b0),
							Nu(gt, Ve, 'pointerup,touchend,mouseup', H0),
							yd = b.utils.checkPrefix('transform'),
							ta.push(yd),
							js = It(),
							$a = b.delayedCall(0.2, es).pause(),
							Rs = [
								Ve,
								'visibilitychange',
								function () {
									var u = he.innerWidth,
										a = he.innerHeight;
									Ve.hidden
										? (($0 = u), (U0 = a))
										: ($0 !== u || U0 !== a) && qo();
								},
								Ve,
								'DOMContentLoaded',
								es,
								he,
								'load',
								es,
								he,
								'resize',
								qo,
							],
							Pu(gt),
							se.forEach(function (u) {
								return u.enable(0, 1);
							}),
							l = 0;
						l < ue.length;
						l += 3
					)
						Ou(mt, ue[l], ue[l + 1]), Ou(mt, ue[l], ue[l + 2]);
				}
			}),
			(t.config = function (r) {
				'limitCallbacks' in r && (Jc = !!r.limitCallbacks);
				var i = r.syncInterval;
				(i && clearInterval(Eu)) || ((Eu = i) && setInterval(X0, i)),
					'ignoreMobileResize' in r &&
						(xd = t.isTouch === 1 && r.ignoreMobileResize),
					'autoRefreshEvents' in r &&
						(Pu(mt) || Pu(gt, r.autoRefreshEvents || 'none'),
						(Qv = (r.autoRefreshEvents + '').indexOf('resize') === -1));
			}),
			(t.scrollerProxy = function (r, i) {
				var s = un(r),
					o = ue.indexOf(s),
					l = gs(s);
				~o && ue.splice(o, l ? 6 : 2),
					i && (l ? Nr.unshift(he, i, Ne, i, lr, i) : Nr.unshift(s, i));
			}),
			(t.clearMatchMedia = function (r) {
				se.forEach(function (i) {
					return i._ctx && i._ctx.query === r && i._ctx.kill(!0, !0);
				});
			}),
			(t.isInViewport = function (r, i, s) {
				var o = (Sn(r) ? un(r) : r).getBoundingClientRect(),
					l = o[s ? ls : us] * i || 0;
				return s
					? o.right - l > 0 && o.left + l < he.innerWidth
					: o.bottom - l > 0 && o.top + l < he.innerHeight;
			}),
			(t.positionInViewport = function (r, i, s) {
				Sn(r) && (r = un(r));
				var o = r.getBoundingClientRect(),
					l = o[s ? ls : us],
					u =
						i == null
							? l / 2
							: i in Wa
								? Wa[i] * l
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
					var i = vs.killAll || [];
					(vs = {}),
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
		? bl(t).forEach(function (e) {
				if (e && e.style) {
					var n = xn.indexOf(e);
					n >= 0 && xn.splice(n, 5),
						xn.push(
							e,
							e.style.cssText,
							e.getBBox && e.getAttribute('transform'),
							b.core.getCache(e),
							wd(),
						);
				}
			})
		: xn;
};
ae.revert = function (t, e) {
	return Xh(!t, e);
};
ae.create = function (t, e) {
	return new ae(t, e);
};
ae.refresh = function (t) {
	return t ? qo() : (js || ae.register()) && es(!0);
};
ae.update = function (t) {
	return ++ue.cache && Yr(t === !0 ? 2 : 0);
};
ae.clearScrollMemory = s1;
ae.maxScroll = function (t, e) {
	return Tr(t, e ? Zt : ft);
};
ae.getScrollFunc = function (t, e) {
	return ji(un(t), e ? Zt : ft);
};
ae.getById = function (t) {
	return kd[t];
};
ae.getAll = function () {
	return se.filter(function (t) {
		return t.vars.id !== 'ScrollSmoother';
	});
};
ae.isScrolling = function () {
	return !!Hn;
};
ae.snapDirectional = Qh;
ae.addEventListener = function (t, e) {
	var n = vs[t] || (vs[t] = []);
	~n.indexOf(e) || n.push(e);
};
ae.removeEventListener = function (t, e) {
	var n = vs[t],
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
			l.substr(0, 2) === 'on' && Jt(e[l]) && l !== 'onRefreshInit'
				? o(l, e[l])
				: e[l];
	return (
		Jt(s) &&
			((s = s()),
			gt(ae, 'refresh', function () {
				return (s = e.batchMax());
			})),
		bl(t).forEach(function (u) {
			var a = {};
			for (l in r) a[l] = r[l];
			(a.trigger = u), n.push(ae.create(a));
		}),
		n
	);
};
var e_ = function (e, n, r, i) {
		return (
			n > i ? e(i) : n < 0 && e(0),
			r > i ? (i - n) / (r - n) : r < 0 ? n / (n - r) : 1
		);
	},
	sf = function t(e, n) {
		n === !0
			? e.style.removeProperty('touch-action')
			: (e.style.touchAction =
					n === !0
						? 'auto'
						: n
							? 'pan-' + n + (et.isTouch ? ' pinch-zoom' : '')
							: 'none'),
			e === lr && t(Ne, n);
	},
	zu = { auto: 1, scroll: 1 },
	AT = function (e) {
		var n = e.event,
			r = e.target,
			i = e.axis,
			s = (n.changedTouches ? n.changedTouches[0] : n).target,
			o = s._gsap || b.core.getCache(s),
			l = It(),
			u;
		if (!o._isScrollT || l - o._isScrollT > 2e3) {
			for (
				;
				s &&
				s !== Ne &&
				((s.scrollHeight <= s.clientHeight && s.scrollWidth <= s.clientWidth) ||
					!(zu[(u = $n(s)).overflowY] || zu[u.overflowX]));

			)
				s = s.parentNode;
			(o._isScroll =
				s &&
				s !== r &&
				!gs(s) &&
				(zu[(u = $n(s)).overflowY] || zu[u.overflowX])),
				(o._isScrollT = l);
		}
		(o._isScroll || i === 'x') && (n.stopPropagation(), (n._gsapAllow = !0));
	},
	u1 = function (e, n, r, i) {
		return et.create({
			target: e,
			capture: !0,
			debounce: !1,
			lockAxis: !0,
			type: n,
			onWheel: (i = i && AT),
			onPress: i,
			onDrag: i,
			onScroll: i,
			onEnable: function () {
				return r && gt(Ve, et.eventTypes[0], n_, !1, !0);
			},
			onDisable: function () {
				return mt(Ve, et.eventTypes[0], n_, !0);
			},
		});
	},
	FT = /(input|label|select|textarea)/i,
	t_,
	n_ = function (e) {
		var n = FT.test(e.target.tagName);
		(n || t_) && ((e._gsapAllow = !0), (t_ = n));
	},
	IT = function (e) {
		Xi(e) || (e = {}),
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
				ri &&
				((e.content && un(e.content)) ||
					(d && e.content !== !1 && !d.smooth() && d.content())),
			h = ji(a, ft),
			g = ji(a, Zt),
			_ = 1,
			T =
				(et.isTouch && he.visualViewport
					? he.visualViewport.scale * he.visualViewport.width
					: he.outerWidth) / he.innerWidth,
			m = 0,
			p = Jt(i)
				? function () {
						return i(l);
					}
				: function () {
						return i || 2.8;
					},
			v,
			x,
			k = u1(a, e.type, !0, s),
			C = function () {
				return (x = !1);
			},
			E = yr,
			N = yr,
			j = function () {
				(u = Tr(a, ft)),
					(N = pl(ri ? 1 : 0, u)),
					r && (E = pl(0, Tr(a, Zt))),
					(v = as);
			},
			M = function () {
				(f._gsap.y = Go(parseFloat(f._gsap.y) + h.offset) + 'px'),
					(f.style.transform =
						'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' +
						parseFloat(f._gsap.y) +
						', 0, 1)'),
					(h.offset = h.cacheID = 0);
			},
			H = function () {
				if (x) {
					requestAnimationFrame(C);
					var z = Go(l.deltaY / 2),
						$ = N(h.v - z);
					if (f && $ !== h.v + h.offset) {
						h.offset = $ - h.v;
						var w = Go((parseFloat(f && f._gsap.y) || 0) - h.offset);
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
					(ri && Q.type === 'touchmove' && H()) ||
					(_ > 1.05 && Q.type !== 'touchstart') ||
					l.isGesturing ||
					(Q.touches && Q.touches.length > 1)
				);
			}),
			(e.onPress = function () {
				x = !1;
				var Q = _;
				(_ = Go(((he.visualViewport && he.visualViewport.scale) || 1) / T)),
					D.pause(),
					Q !== _ && sf(a, _ > 1.01 ? !0 : r ? !1 : 'x'),
					(I = g()),
					(Y = h()),
					j(),
					(v = as);
			}),
			(e.onRelease = e.onGestureStart =
				function (Q, z) {
					if ((h.offset && M(), !z)) K.restart(!0);
					else {
						ue.cache++;
						var $ = p(),
							w,
							q;
						r &&
							((w = g()),
							(q = w + ($ * 0.05 * -Q.velocityX) / 0.227),
							($ *= e_(g, w, q, Tr(a, Zt))),
							(D.vars.scrollX = E(q))),
							(w = h()),
							(q = w + ($ * 0.05 * -Q.velocityY) / 0.227),
							($ *= e_(h, w, q, Tr(a, ft))),
							(D.vars.scrollY = N(q)),
							D.invalidate().duration($).play(0.01),
							((ri && D.vars.scrollY >= u) || w >= u - 1) &&
								b.to({}, { onUpdate: G, duration: $ });
					}
					o && o(Q);
				}),
			(e.onWheel = function () {
				D._ts && D.pause(), It() - m > 1e3 && ((v = 0), (m = It()));
			}),
			(e.onChange = function (Q, z, $, w, q) {
				if (
					(as !== v && j(),
					z && r && g(E(w[2] === z ? I + (Q.startX - Q.x) : g() + z - w[1])),
					$)
				) {
					h.offset && M();
					var oe = q[2] === $,
						st = oe ? Y + Q.startY - Q.y : h() + $ - q[1],
						ge = N(st);
					oe && st !== ge && (Y += ge - st), h(ge);
				}
				($ || z) && Yr();
			}),
			(e.onEnable = function () {
				sf(a, r ? !1 : 'x'),
					ae.addEventListener('refresh', G),
					gt(he, 'resize', G),
					h.smooth &&
						((h.target.style.scrollBehavior = 'auto'),
						(h.smooth = g.smooth = !1)),
					k.enable();
			}),
			(e.onDisable = function () {
				sf(a, !0),
					mt(he, 'resize', G),
					ae.removeEventListener('refresh', G),
					k.kill();
			}),
			(e.lockAxis = e.lockAxis !== !1),
			(l = new et(e)),
			(l.iOS = ri),
			ri && !h() && h(1),
			ri && b.ticker.add(yr),
			(K = l._dc),
			(D = b.to(l, {
				ease: 'power4',
				paused: !0,
				inherit: !1,
				scrollX: r ? '+=0.1' : '+=0',
				scrollY: '+=0.1',
				modifiers: {
					scrollY: l1(h, h(), function () {
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
	return new et(t);
};
ae.normalizeScroll = function (t) {
	if (typeof t > 'u') return Yt;
	if (t === !0 && Yt) return Yt.enable();
	if (t === !1) {
		Yt && Yt.kill(), (Yt = t);
		return;
	}
	var e = t instanceof et ? t : IT(t);
	return Yt && Yt.target === e.target && Yt.kill(), gs(e.target) && (Yt = e), e;
};
ae.core = {
	_getVelocityProp: vd,
	_inputObserver: u1,
	_scrollers: ue,
	_proxies: Nr,
	bridge: {
		ss: function () {
			Hn || ys('scrollStart'), (Hn = It());
		},
		ref: function () {
			return At;
		},
	},
};
qv() && b.registerPlugin(ae);
en.registerPlugin(ae);
function VT() {
	const t = te.useRef();
	return (
		te.useEffect(() => {
			function e(n) {
				var r, i;
				(i = (r = t.current) == null ? void 0 : r.lenis) == null ||
					i.raf(n * 1e3);
			}
			return (
				en.ticker.add(e),
				() => {
					en.ticker.remove(e);
				}
			);
		}),
		y.jsxs(ed, {
			root: !0,
			options: {
				lerp: 0.1,
				duration: 1.2,
				smoothTouch: !0,
				easing: 'easeOutQuart',
			},
			ref: t,
			autoRaf: !1,
			children: [y.jsx(Nw, {}), y.jsx(xT, {}), y.jsx(wT, {})],
		})
	);
}
of.createRoot(document.getElementById('root')).render(
	y.jsx(at.StrictMode, { children: y.jsx(VT, {}) }),
);
