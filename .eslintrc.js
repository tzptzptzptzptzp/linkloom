module.exports = {
  extends: ['eslint:recommended', 'next/core-web-vitals', 'prettier'],
  plugins: ['import'],
  rules: {
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling'],
          'object',
          'type',
          'index'
        ],
        'newlines-between': 'never',
        pathGroupsExcludedImportTypes: ['builtin'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before'
          },
          {
            pattern: 'react/**',
            group: 'external',
            position: 'before'
          },
          {
            pattern: 'next',
            group: 'external',
            position: 'before'
          },
          {
            pattern: 'next/**',
            group: 'external',
            position: 'before'
          },
          {
            pattern: '@/components/**',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: '@/hooks/**',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: '@/libs/**',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: '@/types/**',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: '@/utils/**',
            group: 'internal',
            position: 'before'
          }
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ]
  }
}
