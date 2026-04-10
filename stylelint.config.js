export default {
  plugins: ['stylelint-scss'],
  extends: [
    'stylelint-config-standard-scss', // SCSS-specific rules
    'stylelint-config-astro', // Rules for styles within Astro components
  ],
  ignoreFiles: ['node_modules', '.astro', '.github', '.husky', 'public'],
  rules: {
    'declaration-block-no-redundant-longhand-properties': [
      true,
      { ignoreShorthands: ['/flex/', '/grid/'] },
    ],
    'selector-disallowed-list': ['*'],
    'selector-class-pattern': [
      '^([a-z][a-z0-9]*)([-_]{1,2}[a-z0-9]+)*$',
      {
        message: (selector) =>
          `Expected class selector "${selector}" to be kebab-case (double - or _ allowed)`,
      },
    ],
    'custom-property-pattern': [
      '^([a-z][a-z0-9]*)([-_]{1,2}[a-z0-9]+)*$',
      {
        message: (selector) =>
          `Expected custom property name "${selector}" to be kebab-case (double - or _ allowed)`,
      },
    ],
    'container-name-pattern': [
      '^([a-z][a-z0-9]*)([-_]{1,2}[a-z0-9]+)*$',
      {
        message: (selector) =>
          `Expected custom property name "${selector}" to be kebab-case (double - or _ allowed)`,
      },
    ],
    'selector-id-pattern': [
      '^([a-z][a-z0-9]*)([-_]{1,2}[a-z0-9]+)*$',
      {
        message: (selector) =>
          `Expected id selector "${selector}" to be kebab-case (double - or _ allowed)`,
      },
    ],
    'unit-allowed-list': [
      [
        'em',
        'rem',
        's',
        'ms',
        'deg',
        '%',
        'vh',
        'vw',
        'fr',
        'in',
        'cm',
        'dvh',
        'dvw',
        'cqw',
        'cqh',
      ],
      {
        ignoreFunctions: ['/^rgb/', '/^rgba/', '/^hsl/', 'calc'],
      },
    ],
    'scss/at-mixin-pattern': [
      '^([a-z][a-z0-9]*)([-_]{1,2}[a-z0-9]+)*$',
      {
        message: (selector) =>
          `Expected mixin "${selector}" to be kebab-case (double - or _ allowed)`,
      },
    ],
    'scss/dollar-variable-pattern': [
      '^([a-z][a-z0-9]*)([-_]{1,2}[a-z0-9]+)*$',
      {
        message: (selector) =>
          `Expected variable "${selector}" to be kebab-case (double - or _ allowed)`,
      },
    ],
    'value-keyword-case': [
      'lower',
      {
        camelCaseSvgKeywords: true,
      },
    ],
  },
}
