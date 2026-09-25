import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    rules: {
      'no-var': 'error',
      'prefer-const': 'error',
      'no-unused-vars': 'error',
      eqeqeq: 'error'
    }
  }
];