module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'prettier',
    'prettier/react',
    'airbnb',
  ],
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
  plugins: [
    'react',
    'prettier',
  ],
  rules: {
    'react/jsx-filename-extension': [
        'warn',
        { extensions: ['.jsx', '.js'] }
    ],
  }
};
