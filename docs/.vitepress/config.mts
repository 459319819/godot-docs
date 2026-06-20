import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Godot 中文文档",
  description: "Godot 游戏引擎，中文社区文档",
  // 这里是所有语言通用的配置
  themeConfig: {
    // 站点LOGO
    logo: '/godot.svg',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
  },
  markdown: {
    lineNumbers: true
  },
  locales: {
    // root 是默认语言，且必须有；否则不显示语言切换图标
    root: {
      // 切换语言时显示的标签内容
      label: 'English',
      // 当前语言下，网站的标签
      title: 'Godot docs',
      // html 标签中的属性
      lang: 'en-US',
      // 站点的描述。这将呈现为页面 HTML 中的 <meta> 标签
      description: '...',
      // 指定文档访问路径的前缀
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Manual', link: '/en/manual/intro' }
        ],
        sidebar: [
          {
            text: 'Examples',
            items: [
              { text: 'Markdown Examples', link: '/markdown-examples' },
              { text: 'Runtime API Examples', link: '/api-examples' }
            ]
          }
        ],
      }
    },
    zh: {
      label: '中文',
      title: 'Godot 中文文档',
      lang: 'zh-CN',
      description: '...',
      link: '/zh/',
      // 覆盖根级别的主题配置
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '手册', link: '/zh/manual/intro/' }
        ],
        sidebar: [
          {
            text: '简介',
            link: '/zh/manual/intro/'
          },
          {
            text: '插件',
            collapsed: true,
            items: [
              { text: '概述', link: '/zh/manual/plugin/overview/'},
              { text: '安装插件', link: '/zh/manual/plugin/setup/'},
              { text: '制作插件', link: '/zh/manual/plugin/make-plugins/'},
            ]
          },
        ],
      },
    }
  },
})
