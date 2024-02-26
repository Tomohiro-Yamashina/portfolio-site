// adobe-fonts.js
// font-family: ltc-goudy-oldstyle-pro, serif;
// font-family: ivypresto-display, serif;
// font-family: a-otf-ryumin-pr6n, serif;

(function (d) {
	var config = {
			kitId: 'qjw2pln',
			scriptTimeout: 3000,
			async: true,
		},
		h = d.documentElement,
		t = setTimeout(function () {
			h.className = h.className.replace(/\bwf-loading\b/g, '') + ' wf-inactive';
		}, config.scriptTimeout),
		tk = d.createElement('script'),
		f = false,
		s = d.getElementsByTagName('script')[0],
		a;
	h.className += ' wf-loading';
	tk.src = 'https://use.typekit.net/' + config.kitId + '.js';
	tk.async = true;
	tk.onload = tk.onreadystatechange = function () {
		a = this.readyState;
		if (f || (a && a != 'complete' && a != 'loaded')) return;
		f = true;
		clearTimeout(t);
		try {
			// eslint-disable-next-line no-undef
			Typekit.load(config);
			// eslint-disable-next-line no-empty
		} catch (e) {}
	};
	s.parentNode.insertBefore(tk, s);
})(document);
