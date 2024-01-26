/** markuplint
 *  @see https://markuplint.dev/ja/docs/configuration
 */

export default {
	extends: ['markuplint:recommended-react'],
	excludeFiles: ['**/node_modules/**', '**/dist/**'],
	parser: {
		'\\.[jt]sx?$': '@markuplint/jsx-parser',
	},
	specs: {
		'\\.[jt]sx?$': '@markuplint/react-spec',
	},
	// 特定の要素のみの解析ルール
	rules: {
		'required-h1': false,
	},
	nodeRules: [
		{
			selector: 'img',
			rules: {
				'required-attr': ['src', 'alt'],
			},
		},
	],
};
