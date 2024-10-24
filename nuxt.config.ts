// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/devtools',
    '@nuxt/ui',
    '@nuxtjs/i18n',
    'nuxt-gtag',
    '@nuxt/test-utils/module',
    '@nuxt/eslint'
  ],
  devtools: { enabled: true },
  alias: {},
  devServer: {
    port: 9527
  },
  compatibilityDate: '2024-10-21',
  typescript: {
    strict: true
  },
  eslint: {
    checker: true
  },
  i18n: {
    locales: ['tw', 'en'], // used in URL path prefix
    defaultLocale: 'tw' // default locale of your project for Nuxt pages and routings
  }
});
