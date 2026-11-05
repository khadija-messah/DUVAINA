// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // TODO: set the production domain once known (used for canonical URLs / OG tags).
  site: 'https://www.duvaniaharamain.com',
  trailingSlash: 'ignore',
  build: { inlineStylesheets: 'auto' },
  // French at "/", Arabic at "/ar/" (right-to-left).
  i18n: {
    locales: ['fr', 'ar'],
    defaultLocale: 'fr',
    routing: { prefixDefaultLocale: false },
  },
});
