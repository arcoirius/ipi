import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    files: ['src/**/*.js'],

    languageOptions: {
      globals: globals.node,
    },

    rules: {
      'no-var': 'error',
      'prefer-const': 'error',
      'no-unused-vars': 'error',
      eqeqeq: 'error',
    },
  },
];