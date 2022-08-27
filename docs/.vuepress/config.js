const path = require('path')
const components = require('./components.js') 

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
      { text: '组件', link: '/guide/install'},
      { text: '博客', link: 'https://ovyvo.github.io/yanblog.github.io/'},
      { text: 'github', link: 'https://github.com/OVYVO/vue-utils'}
    ],
    sidebar: [
      ['/','首页'],
      {
        title: '开发指南',
        path: '/guide/install',
        sidebarDepth: '1',
        children: [
          ['/guide/install','安装']
        ]
      },
      {
        title: '组件',
        path: '/components/statistics',
        sidebarDepth: '1',
        children: components.links
      }
    ]
  },
  plugins: [
    ['@vuepress/back-to-top'],
    ['demo-container']
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@root': path.resolve(__dirname, '../../')
      }
    }
  }
}