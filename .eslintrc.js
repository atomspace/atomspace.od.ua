module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['standard', 'plugin:react/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': 0,
    semi: 0,
    'space-before-function-paren': 0,
    'comma-dangle': 0,
  },
};
