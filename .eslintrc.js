module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:vue/recommended', 'plugin:prettier/recommended'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    parser: '@babel/eslint-parser'
  },
  rules: {}
}
