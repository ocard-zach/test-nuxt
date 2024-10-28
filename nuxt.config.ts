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
  ssr: false,
  devtools: { enabled: true },
  devServer: {
    port: 9527
  },
  // 兼容 Nuxt4 主要版本
  future: {
    compatibilityVersion: 4
  },
  experimental: {
    typedPages: true
  },
  compatibilityDate: '2024-10-21',
  typescript: {
    strict: true,
    shim: false,
    tsConfig: {
      compilerOptions: {
        baseUrl: '.',
        paths: {
          '@/*': ['../*']
        },
        include: [
          '**/*.ts',
          '**/*.d.ts',
          '**/*.tsx',
          '**/*.vue'
        ],
        exclude: ['node_modules']
      }
    }
  },
  eslint: {
    checker: true,
    config: {
      standalone: false
    }
  },
  i18n: {
    locales: ['tw', 'en'], // used in URL path prefix
    defaultLocale: 'tw' // default locale of your project for Nuxt pages and routings
  }
});
