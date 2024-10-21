// .eslintrc.js
const { rules } = require('ocard-eslint');

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  root: true,
  extends: [
    '@vue/eslint-config-airbnb',
    '@nuxt/eslint-config',
    'plugin:vue/vue3-recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules,
};