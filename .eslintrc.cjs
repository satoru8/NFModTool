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
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "plugins": [
    "vue"
  ],
  "rules": {

  }
}