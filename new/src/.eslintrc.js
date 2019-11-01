module.exports = {
    root: true,
    env: {
      node: true
    },
    extends: ['plugin:vue/essential'],
    rules: {
      'space-before-function-paren': ['error', 'never'],
      quotes: ['error', 'single', { allowTemplateLiterals: true }],
      semi: ['error', 'never'],
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }]
    },
    parserOptions: {
      parser: 'babel-eslint'
    }
  }
  