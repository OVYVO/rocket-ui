module.exports = {
  ignores: [(commit) => commit.includes('init')],
  extends: [
    '@commitlint/config-conventional', 
    'cz',
    'gitmoji'
  ],
  // Level [0..2]: 0 disables the rule. For 1 it will be considered a warning for 2 an error.
  rules: {
    'header-max-length': [2, 'always', 100],
    'scope-case': [2, 'always', 'lowerCase'],
    'subject-empty': [2, 'never'],
    'subject-case': [2, 'always', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
    'subject-full-stop': [2, 'never', '.'],
    'type-empty': [2, 'never'],
    'type-case': [2, 'always', 'lowerCase'],
    'type-enum': [2, 'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'chore',
        'revert',
        'init',
        'ci',
        'build',
        'WIP'
      ]
    ]
  }
}