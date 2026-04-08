export default {
  plugins: ['prettier-plugin-astro'],
  jsxSingleQuote: true,
  semi: false,
  singleQuote: true,
  experimentalTernaries: true,
  overrides: [
    {
      files: ['**/*.astro'],
      options: {
        parser: 'astro',
      },
    },
  ],
}
