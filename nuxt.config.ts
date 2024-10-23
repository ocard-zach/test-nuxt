// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-10-21",
  devtools: { enabled: true },
  modules: [
    "@nuxt/devtools",
    "@nuxt/ui",
    "@nuxtjs/i18n",
    "nuxt-gtag",
    "@nuxt/test-utils/module",
    "@nuxt/eslint"
  ],
  i18n: {
    locales: ["tw", "en"], // used in URL path prefix
    defaultLocale: "tw" // default locale of your project for Nuxt pages and routings
  }
  // eslint: {
  //   checker: true,
  //   config: {
  //     stylistic: true
  //   }
  // }
});
