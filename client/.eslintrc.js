module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb',
  plugins: ['import'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'linebreak-style': ['error', 'windows'],
    'arrow-body-style': ['error', 'always'],
    'import/no-unresolved': ['error', { ignore: ['^src/'] }],
    'import/order': [
      'error',
      {
        groups: [
          ['external', 'builtin'],
          ['internal', 'parent', 'sibling', 'index'],
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        pathGroups: [
          {
            pattern: '<THIRD_PARTY_MODULES>',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '^src/(.*)$',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '^(.*)/(?!generated)(.*)/(.*)$',
            group: 'parent',
            position: 'before',
          },
          {
            pattern: '^(.*)/generated/(.*)$',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '^[./]',
            group: 'internal',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
      },
    ],
  },
};
