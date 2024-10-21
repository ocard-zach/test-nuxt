// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/i18n',
    'nuxt-gtag',
    '@nuxt/test-utils/module'
  ],
  i18n: {
    locales: ['en', 'tw'], // used in URL path prefix
    defaultLocale: 'tw', // default locale of your project for Nuxt pages and routings
  }
})