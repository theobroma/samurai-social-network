module.exports = {
  extends: ['airbnb-typescript-prettier'],
  plugins: ['simple-import-sort', 'unused-imports'],
  rules: {
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/no-explicit-any': 1,
    '@typescript-eslint/no-unused-vars': 0, // Use unused-imports/no-unused-vars instead
    '@typescript-eslint/no-use-before-define': 0,
    // prettier-ignore
    'camelcase': 0,
    'import/no-unused-modules': [0, { unusedExports: true }], // no-unused-modules
    'import/prefer-default-export': 0,
    'jsx-a11y/control-has-associated-label': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'no-console': 0,
    'no-param-reassign': 0,
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-restricted-exports': 0, // Nothing to restrict.
    'no-underscore-dangle': 0,
    'react-hooks/exhaustive-deps': [
      'warn',
      // add deps for custom hooks
      {
        additionalHooks: 'useNonInitialEffect',
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-no-leaked-render': [
      'error',
      { validStrategies: ['coerce', 'ternary'] },
    ],
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0, // Since we do not use prop-types
    // 'react/react-in-jsx-scope': 0, // Since React 18 "react-jsx"
    'react/require-default-props': 0, // Since we do not use prop-types
    'react/state-in-constructor': 0,
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.js', '**/*.ts', '**/*.tsx'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              // `react` first, `next` second, then packages starting with a character
              ['^react$', '^next', '^[a-z]'],
              // Packages starting with `@`
              ['^@'],
              // Packages starting with `~`
              ['^~'],
              // Imports starting with `../`
              ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
              // Imports starting with `./`
              ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
              // Style imports
              ['^.+\\.s?css$'],
              // Side effect imports
              ['^\\u0000'],
            ],
          },
        ],
      },
    },
  ],
};
