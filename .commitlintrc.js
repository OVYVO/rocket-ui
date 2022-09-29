module.exports = {
  ignores: [commit => commit.includes('init')],
  extends: ['gitmoji'],
  rules: {
    'header-max-length': [2, 'always', 72],
    'scope-case': [2, 'always', 'lowerCase'],
    'subject-empty': [2, 'never'],
    'subject-case': [2, 'always', ['lower-case', 'sentence-case', 'start-case', 'pascal-case', 'upper-case']],
    'subject-full-stop': [2, 'never', '.'],
    'type-empty': [2, 'never'],
    'type-case': [2, 'always', 'lowerCase'],
    'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'perf', 'chore', 'build']]
  }
}
