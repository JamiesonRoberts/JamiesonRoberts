export default {
  '*.{js,mjs,cjs,astro}': ['eslint --fix', 'prettier --write'],
  '*.{css,scss,sass,astro}': ['stylelint --fix', 'prettier --write'],
  '*.{md,json}': 'prettier --write',
}
