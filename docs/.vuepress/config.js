module.exports = {
  plugins: {
    '@vuepress/back-to-top': {},
    '@vuepress/active-header-links': {}
  },
  base: '/',
  title: '亚信云基础架构文档',
  description: 'Vuepress kaiju doc',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  themeConfig: {
    // 你的GitHub仓库
    repo: 'https://github.com/goodbigtree/kaiju',
    // 自定义仓库链接文字。
    repoLabel: 'kaiju doc',
    nav: [
      { text: '项目规划', link: '/plan/' },
      { text: '环境搭建', link: '/build/' },
      { text: '基础服务', link: '/junior/' },
      { text: '升级服务', link: '/senior/' }
    ],
    sidebar: {
      '/build/': [
        '/build/'
      ],
      '/junior/': [
        '/junior/'
      ],
      '/senior/': [
        '/senior/'
      ]
    },
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '在 GitHub 上编辑此页'
  }
}