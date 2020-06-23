// .eslintrc.js
module.exports = {
  extends: ['airbnb-typescript-prettier', 'plugin:jest/recommended'],
  plugins: ['react-hooks'],
  rules: {
    '@typescript-eslint/no-use-before-define': 0,
    'import/prefer-default-export': 0,
    'no-param-reassign': 0,
    'no-console': 0,
    'no-underscore-dangle': 0,
    'react/state-in-constructor': 0,
    'react/jsx-props-no-spreading': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/control-has-associated-label': 0,
  },
  env: {
    'jest/globals': true,
  },
};
