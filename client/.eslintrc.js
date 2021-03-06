module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['import'],
  extends: ['plugin:prettier/recommended', 'next'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'max-len': ['error', { code: 120 }],
    curly: ['error'],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: ['external', ['builtin', 'parent', 'sibling', 'index']],
      },
    ],
    'import/newline-after-import': ['error'],
    'import/no-duplicates': ['error'],
    'import/no-useless-path-segments': ['error'],
  },
}
