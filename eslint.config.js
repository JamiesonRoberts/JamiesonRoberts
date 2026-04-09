import { defineConfig } from 'eslint/config'
import globals from 'globals'
import astro from 'eslint-plugin-astro'
import prettier from 'eslint-plugin-prettier'
import neostandard from 'neostandard'

const astroParser = astro.parser

export default defineConfig([
  // Global configuration
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },

  // Prettier config
  {
    plugins: {
      prettier,
    },
  },

  // Standard rules as baseline
  neostandard({ semi: true, noStyle: true }),

  // astro setup with a11y
  astro.configs.recommended,
  astro.configs['jsx-a11y-recommended'],
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroParser,
    },
    rules: {
      'no-new': 0,
      'no-undef': 'off', // Disable "not defined" errors for specific Astro types that are globally available (ImageMetadata)
      'react/jsx-boolean-value': ['error', 'never', { always: ['priority'] }],
    },
  },

  // Ignore patterns
  {
    ignores: [
      'dist/**',
      '**/*.d.ts',
      '.github/',
      '.astro',
      'node_modules/**',
      '.husky',
    ],
  },
])
