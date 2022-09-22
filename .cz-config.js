//https://github.com/leoforfree/cz-customizable/blob/master/cz-config-EXAMPLE.js

module.exports = {
  types: [
    { value: ':sparkles: feat', name: '✨ feat: 一项新功能' },
    { value: ':bug: fix', name: '🐛 fix: 修复一个Bug' },
    { value: ':memo: docs', name: '📝 docs: 文档变更' },
    { value: ':lipstick: style', name: '💄 style: 代码风格，格式修复' },
    { value: ':recycle: refactor', name: '♻️ refactor: 代码重构，注意和feat、fix区分开' },
    { value: ':zap: perf', name: '⚡️ perf: 代码优化,改善性能' },
    { value: ':white_check_mark: test', name: '✅ test: 测试' },
    { value: ':rocket: chore', name: '🚀 chore: 变更构建流程或辅助工具' },
    { value: ':rewind: revert', name: ':rewind: revert: 代码回退' },
    { value: ':tada: init', name: '🎉 init: 项目初始化' },
    { value: ':construction_worker: ci', name: '👷 对CI配置文件和脚本的更改' },
    { value: ':package: build', name: '📦️ build: 变更项目构建或外部依赖' },
    { value: ':construction: WIP', name: '🚧 WIP: 进行中的工作' }
  ],
  messages: {
    type: '请选择提交类型(必填):',
    subject: '请简要描述提交(必填):',
    confirmCommit: '确定提交此说明吗？'
  },
  skipQuestions: ['scope', 'body', 'breaking', 'footer']
}