module.exports = {
  base: '/',
  title: '亚信云基础架构文档',
  description: 'Vuepress credit doc',
  head: [
    ['link', { rel: 'icon', href: '/creditcloud.jpg' }]
  ],
  themeConfig: {
  	// 你的GitHub仓库
    repo: 'https://github.com/goodbigtree/credit.github.io.git',
    // 自定义仓库链接文字。
    repoLabel: 'credit doc',
  	nav: [
  		{ text: '首页', link: '/' },
  		{ text: '亚信云', link: '/credit/Credit.md' }
  	],
  	sidebar: [
      ['/credit/Credit.md', '基础环境'],
      ['/credit/QucikStart.md', '快速开始'],
      ['/credit/OnlineInfo.md', '服务说明'],
      ['/credit/TechDetail.md', '技术说明'],
      ['/credit/TaskList.md', '版本优化']
    ]
  }
}