module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    commonjs: true,
  },
  extends: ['plugin:prettier/recommended'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
  },
}
