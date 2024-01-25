/** markuplint 設定
 *  @see https://markuplint.dev/ja/docs/guides
 */

export default {
  extends: ['markuplint:recommended-react'],
  excludeFiles: ['./node_modules/**', './dist/**'],
  parser: {
    '\\.[jt]sx?$': '@markuplint/jsx-parser',
  },
  specs: {
    '\\.[jt]sx?$': '@markuplint/react-spec',
  },
};
