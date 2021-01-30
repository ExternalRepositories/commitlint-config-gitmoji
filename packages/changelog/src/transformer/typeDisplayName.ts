import type { CommitTypes } from '@gitmoji/commit-types';

export const getDisplayName = (type: CommitTypes | string): string => {
  switch (type) {
    case 'feat':
      return `✨ Features | 新特性`;
    case 'fix':
      return `🐛 Bug Fixes | 修复`;
    case 'perf':
      return `⚡ Performance Improvements | 性能优化`;
    case 'revert':
      return `⏪ Reverts | 回退`;
    case 'style':
    case 'styles':
      return `💄 Styles | 样式`;
    case 'docs':
      return `📝 Documentation | 文档`;
    case 'refactor':
      return `♻ Code Refactoring | 重构`;
    case 'build':
      return `👷‍ Build System`;
    case 'test':
      return `✅ Tests | 测试`;
    case 'ci':
      return `🔧 Continuous Integration 持续集成`;
    case 'chore':
      return `🎫 Chores 杂项`;
    // 其他都过滤不显示
    default:
      return type;
  }
};
