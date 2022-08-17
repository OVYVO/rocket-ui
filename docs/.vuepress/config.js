const path = require('path')

module.exports={
  head: [
    ['link',{ rel:'icon',href: '/rocket.png'}],
  ],
  locales:{
    "/":{
      lang: 'zh-CN'
    }
  },
  themeConfig: {
    title: 'VueUtils',
    description: '简易组件库',
    logo: '/rocket.png',
    smoothScroll: true,
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/components/install'},
      { text: '博客', link: 'https://ovyvo.github.io/yanblog.github.io/'},
      { text: 'github', link: 'https://github.com/OVYVO/vue-utils'}
    ],
    sidebar: [
      ['/','首页'],
      {
        title: '开发指南',
        path: '/components/install',
        sidebarDepth: '1',
        children: [
          ['/components/install','安装']
        ]
      },
      {
        title: '组件',
        path: '/components/statistics',
        sidebarDepth: '1',
        children: [
          ['/components/statistics','条形统计']
        ]
      }
    ]
  },
  plugins: ['demo-container'],
  configureWebpack: {
    resolve: {
      alias: {
        '@root': path.resolve(__dirname, '../../')
      }
    }
  }
}