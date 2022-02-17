module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.eslint.json',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'import-newlines',
    'import',
  ],
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:unicorn/recommended',
    'airbnb-typescript/base',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
      },
    },
  },
  root: true,
  env: {
    node: true,
    jest: true,
  },
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'no-await-in-loop': 'off',
    'no-continue': 'off',
    'no-plusplus': 'off',
    'max-len': ['error', {
      code: 120,
      tabWidth: 2,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
    }],
    'object-curly-newline': ['error', {
      ImportDeclaration: { multiline: true },
    }],

    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'import/no-cycle': 'off',

    '@typescript-eslint/no-inferrable-types': 'off',

    'import/order': ['error', {
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      pathGroups: [
        {
          pattern: '~/**',
          group: 'internal',
        },
      ],
      pathGroupsExcludedImportTypes: [],
      'newlines-between': 'always',
      alphabetize: {
        order: 'asc',
        caseInsensitive: true,
      },
    }],

    'import-newlines/enforce': ['error', 4, 120],

    'unicorn/no-array-for-each': 'off',
    'unicorn/no-array-reduce': 'off',
    'unicorn/no-for-loop': 'off',
    'unicorn/no-null': 'off',
    'unicorn/prefer-ternary': 'off',
    'unicorn/prevent-abbreviations': [
      'error',
      {
        ignore: [
          'e2e',
          /args/i,
          '^(i|j)$',
        ],
      },
    ],
  },
  overrides: [{
    files: ['**/*.js'],
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
      'unicorn/prefer-module': 'off',
    },
  }, {
    files: ['scripts/**/*.js'],
    rules: {
      'import/no-extraneous-dependencies': 'off',
    },
  }, {
    files: ['src/database/migrations/**/*.{js,ts}'],
    rules: {
      'class-methods-use-this': 'off',
      'unicorn/filename-case': 'off',
    },
  }],
};
