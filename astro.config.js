import { defineConfig, fontProviders } from 'astro/config'

import sitemap from '@astrojs/sitemap'

import robotsTxt from 'astro-robots-txt'

export default defineConfig({
  site: 'https://jamiesonroberts.com',

  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Roboto Flex',
      cssVariable: '--primary-font',
      fallbacks: ['Helvetica Neue', 'Helvetica'],
      subsets: ['latin'],
    },
  ],

  i18n: {
    locales: ['en-CA'],
    defaultLocale: 'en-CA',
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en-CA', // All urls that don't contain `es` or `fr` after `https://example.com/` will be treated as default locale, i.e. `en`
        locales: {
          'en-CA': 'en-CA', // The `defaultLocale` value must present in `locales` keys
        },
      },
      lastmod: new Date().toISOString(),
    }),
    robotsTxt(),
  ],
})
