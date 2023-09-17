module.exports = {
  extends: [
    'airbnb',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', '@typescript-eslint', 'react', 'jest'],
  env: {
    browser: true,
    es2021: true,
  },
  overrides: [
    {
      files: '**/*.spec.{ts,tsx}',
      rules: {
        'react/jsx-props-no-spreading': 'off',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // Cross Platform Dev
    'linebreak-style': 'off',

    indent: 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],

    // Typescript
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-unused-vars': 'off',

    'import/no-unresolved': 'off',
    'import/extensions': [
      'error',
      { ts: 'never', tsx: 'never', webp: 'always' },
    ],

    'no-shadow': 'off',

    // React
    'react/function-component-definition': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.tsx'],
      },
    ],
    // Anoying rules that slow dev
    'react/no-unused-prop-types': 'off',
    // I know what i am doing
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',

    // jest
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/setupTests.ts',
          '**/*.test.+(js|jsx|ts|tsx)',
          '**/*.spec.+(js|jsx|ts|tsx)',
        ],
      },
    ],

    // extras
    // Preference
    'import/prefer-default-export': 'off',
    // Anoying rules that slow dev
    'no-unused-vars': 'off',
    // index.js ~ export { default } from './Module';
    'no-restricted-exports': 'off',
  },
};
