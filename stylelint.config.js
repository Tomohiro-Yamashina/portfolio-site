/** Stylelint
 *  @see https://stylelint.io/user-guide/configure
 */

/** @type {import('stylelint').Config} */

export default {
	extends: [
		'stylelint-config-recommended-scss',
		'stylelint-config-property-sort-order-smacss',
		'stylelint-config-css-modules',
	],
	plugins: [
		'stylelint-scss',
		'stylelint-order',
		'stylelint-declaration-block-no-ignored-properties',
	],
	rules: {
		'plugin/declaration-block-no-ignored-properties': true,
		// @import、@use、@forward、およびパラメータの部分名の先頭にアンダースコアを使用を許可する
		'scss/load-no-partial-leading-underscore': null,
	},
	ignoreFiles: ['./node_modules/**', './dist/**'],
};
