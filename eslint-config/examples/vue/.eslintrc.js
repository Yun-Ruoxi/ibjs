/**
 * @type {import('eslint').ESLint.ConfigData}
 */
module.exports = {
  extends: ['ibjs/vue'],
  rules: {
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['demo']
      }
    ]
  }
};
