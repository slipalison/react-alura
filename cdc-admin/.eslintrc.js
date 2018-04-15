module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'plugin:jest/recommended'],
  plugins: ['jest'],
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/prefer-stateless-function': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'jsx-a11y/label-has-for': 'off',
    'comma-dangle': 'off',
    'object-curly-newline': 'off',
    'react/forbid-prop-types': 'off',
    'linebreak-style': 0,
    'import/prefer-default-export': 'off',
    'arrow-parens': 'off',
    'no-nested-ternary': 'off',
    'no-plusplus': 'off',
    'no-underscore-dangle': [2, { allowAfterThis: true }],
    'no-console': 0,
    'arrow-parens': 'off',
    'no-param-reassign': 0,
    'max-len': 'off',
    'import/no-named-as-default': 'off'
  },
  env: {
    'jest/globals': true,
    browser: true
  },
  globals: {
    'fetch': false
  }
};