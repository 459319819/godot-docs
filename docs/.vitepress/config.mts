import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Godot 中文文档",
  // html 标签中的属性
  lang: 'zh-CN',
  description: "Godot 游戏引擎，中文社区文档",
  // 如果是部署到 GitHub 上，那么这里是 GitHub 的仓库名称
  base: '/godot-docs/',
  // 这里是所有语言通用的配置
  themeConfig: {
    // 站点LOGO
    logo: '/godot.svg',
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/godot-community' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/355814770?spm_id_from=333.33.0.0' }
    ],
    nav: [
      { text: '首页', link: '/' },
      { text: '手册', link: '/manual/intro/' }
    ],
    sidebar: [
      {
        text: '简介',
        link: '/manual/intro/'
      },
      {
        text: '插件',
        collapsed: true,
        items: [
          { text: '概述', link: '/manual/plugin/overview/'},
          { text: '安装插件', link: '/manual/plugin/setup/'},
          { text: '制作插件', link: '/manual/plugin/make-plugins/'},
        ]
      },
    ],
  },
  markdown: {
    lineNumbers: true
  },
})
