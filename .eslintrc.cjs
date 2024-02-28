/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  "parserOptions": {
    "ecmaVersion": 'latest',
    "sourceType": 'module'
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'plugin:prettier/recommended',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
    "vue/setup-compiler-macros": true,
  },
  "plugins": [
    "vue",
    "prettier",
  ],
  "rules": {
    
  }
}