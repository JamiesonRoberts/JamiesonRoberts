export default {
  jsxSingleQuote: true,
  semi: false,
  singleQuote: true,
  experimentalTernaries: true,
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: ['**/*.astro'],
      options: {
        parser: 'astro',
      },
    },
  ],
}
