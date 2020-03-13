/**
 * 基本配置：https://vuepress.vuejs.org/zh/config/#基本配置
 * 主题配置：https://vuepress.vuejs.org/zh/theme/default-theme-config.html#首页
 */
const path = require('path');

module.exports = {
  base: '/FEN/',
  title: '前端之路',
  description: 'JINJITING 的前端学习笔记。',
  // head: ['link', { rel: 'icon', href: '/logo.png' }],
  host: '0.0.0.0',
  port: 8686,
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname, './assets')
      }
    }
  },
  dest: 'dist',
  themeConfig: {
    nav: [
      {
        text: '读书笔记',
        items: [
          { text: 'JS 高级程序设计', link: '/books/book1/'}
        ]
      },
      { text: '前端基础', link: '/base/' },
      { text: '脚本/API', link: '/script/' },
      { text: 'pavilion', link: 'https://jinjiting.github.io/pavilion/'}
    ],
    sidebar: {
      '/books/book1/': [
        {
          title: '6-面向对象',
          children: [
            { title: '理解对象', path: '/books/book1/6-1.md'},
            { title: '创建对象', path: '/books/book1/6-2.md'},
            { title: '继承', path: '/books/book1/6-3.md'}
          ]
        }
      ],
      '/base/': [
        {
          title: '浏览器',
          children: [
            { title: '浏览器架构简介', path: '/base/browser/architecture.md'},
            { title: '浏览器工作流程', path: '/base/browser/browser-work-process.md'}
          ]
        },
        {
          title: 'CSS',
          children: [
            { title: 'CSS3 的4个自适应关键字', path: '/base/css/adaptive-keywords.md'}
          ]
        },
        {
          title: 'HTTP',
          children: [
            { title: 'URI/URL/URN', path: '/base/http/uri-and-url.md'},
            { title: 'HTTP 简介', path: '/base/http/http.md' },
            { title: 'HTTP 状态码', path: '/base/http/http-status-code.md' },
            { title: 'HTTP 消息头', path: '/base/http/http-headers.md' }
          ]
        }
      ],
      '/script/': [
        {
          title: 'JS/ES',
          children: [
            { title: 'this 指向', path: '/script/es/this.md'},
            { title: '防抖与节流', path: '/script/es/debounce-and-throttle.md'},
            { title: 'JS 执行机制', path: '/script/es/JS执行机制.md'}
          ],
        },
      ]
      //{
      //     title: '其他',
      //     children: [
      //       { title: '正则表达式', path: '/other/regular-expression.md'}
      //     ]
      //   }
      // ],
    },
    lastUpdated: '最后更新',
  },

  markdown: {
    lineNumbers: true // boolean => 在每个代码块的左侧显示行号
  },
}
