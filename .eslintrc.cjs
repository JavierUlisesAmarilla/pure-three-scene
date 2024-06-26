module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'google',
    'eslint:recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:storybook/recommended',
    'plugin:jsdoc/recommended',
    'plugin:cypress/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:eslint-comments/recommended',
  ],
  overrides: [{
    files: ['*.ts', '*.tsx', '*.js', '*.mjs', '*.jsx'],
  }],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    babelOptions: {
      plugins: [
        '@babel/syntax-import-assertions',
      ],
    },
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'cypress',
    'import',
    'jsx-a11y',
    'jsdoc',
    '@typescript-eslint',
  ],
  rules: {
    'eslint-comments/require-description': 'error',
    'max-len': ['error', 200],
    'no-irregular-whitespace': ['error'],
    'no-trailing-spaces': ['error'],
    'prefer-rest-params': 'off',
    'quote-props': ['error', 'consistent-as-needed'],
    'semi': ['error', 'never'],
    'arrow-spacing': ['error', {before: true, after: true}],
    'space-infix-ops': ['error'],
    'curly': ['error', 'all'],
    'default-case': 'error',
    'default-param-last': ['error'],
    'eqeqeq': ['error', 'always'],
    'no-alert': 'error',
    'no-empty-function': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-implied-eval': 'error',
    'no-invalid-this': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-mixed-operators': 'error',
    'no-multi-assign': ['error', {ignoreNonDeclaration: true}],
    'no-return-assign': 'error',
    'no-shadow': 'error',
    'no-undef-init': 'error',
    'no-unneeded-ternary': 'error',
    'no-unused-expressions': 'error',
    'no-useless-call': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-return': 'error',
    'prefer-const': 'error',
    'prefer-template': 'error',
    'yoda': 'error',
    'arrow-parens': ['error', 'always'],
    'block-spacing': 'error',
    'brace-style': 'error',
    'comma-style': ['error', 'last'],
    'eol-last': ['error', 'always'],
    'func-call-spacing': ['error', 'never'],
    'no-multiple-empty-lines': ['error', {max: 1, maxEOF: 1}],
    'valid-jsdoc': 'off',
    'jsdoc/newline-after-description': 'error',
    'jsdoc/check-types': 'error',
    'jsdoc/require-param-description': 'off',
    'jsdoc/require-returns-description': 'off',
    'jsdoc/check-param-names': 'off',
    'jsdoc/require-param': 'off',
    'jsdoc/require-param-type': 'off',
    'require-jsdoc': 'off',
    'require-await': 'error',
    'linebreak-style': ['error', 'unix'],
    'new-cap': 'off',
  },
  settings: {
    jsdoc: {
      tagNamePreference: {
        returns: 'return',
      },
    },
  },
  reportUnusedDisableDirectives: true,
}
