import { defineConfig } from "vitepress";
import { tabsMarkdownPlugin } from "vitepress-plugin-tabs";
import { ImagePlugin } from './plugins/markdown/image'

const commitRef = process.env.COMMIT_REF?.slice(0, 8) || "dev";

const ogDescription = "从想法到实践";
const ogImage = "https://doc.orionai.top/cover.png";
const ogTitle = "创赛全视角";
const ogUrl = "https://doc.orionai.top";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "技能大赛",
  description: "技能大赛",
  lang: "zh",
  head: [
    ["link", { rel: "icon", type: "image/png", href: "/logo.png" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:title", content: ogTitle }],
    ["meta", { property: "og:image", content: ogImage }],
    ["meta", { property: "og:url", content: ogUrl }],
    ["meta", { property: "og:description", content: ogDescription }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:site", content: "@cryptodraper1" }],
    ["meta", { name: "theme-color", content: "#646cff" }],
  ],

  themeConfig: {
    // 锚点导航
    outline: {
      level: [2, 6],
      label: '目录'
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "项目官网", link: "https://www.orionai.top/" },
      {
        text: '快速访问',
        items: [
          {
            // 该部分的标题
            // text: 'Section A Title',
            items: [
              { text: '✅ 版权免责', link: '/page/copyright' },
              { text: '✅ 资源下载', link: '/page/download' },
              { text: '✅ 更新日志', link: '/page/log' }
            ]
          }
        ]
      },
      {
        text: '前往',
        items: [
          {
            // 该部分的标题
            // text: 'Section A Title',
            items: [
              { text: '✈ 网址导航', link: 'https://nav.johntao.top/' },
            ]
          }
        ]
      },
    ],

    sidebar: [
      {
        text: "快速开始",
        link: "/start",
      },
      {
        text: "🥇 历年真题",
        items: [
          { text: "资料下载", link: "/PastExamPapers/start" },
          {
            collapsed: false,
            items: [
              { text: "2021年", link: "/page/404" },
              { text: "2022年", link: "/page/404" },
              { text: "2023年", link: "/page/404" },
              { text: "2024年", link: "/PastExamPapers/2024" },
            ],
          },
        ],
      },
      {
        text: "💻 代码文件",
        items: [
          { text: "代码下载", link: "#" },
          {
            collapsed: false,
            items: [
              { text: "2021年", link: "/page/404" },
              { text: "2022年", link: "/page/404" },
              { text: "2023年", link: "/code/2023" },
              { text: "2024年", link: "/code/2024" },
            ],
          },
        ],
      },
      {
        text: "💡 其他文件",
        items: [
          { text: "下载", link: "/other/start" },
          {
            collapsed: false,
            items: [
              { text: "2021年", link: "/page/404" },
              { text: "2022年", link: "/page/404" },
              { text: "2023年", link: "/page/404" },
              { text: "2024年", link: "/other/2024" },
            ],
          },
        ],
      },
      { text: "📖 常见问题", link: "/page/FAQ" },
      { text: "🚀 更新日志", link: "/page/log" },
      { text: "💎 版权与免责", link: "/page/copyright" },
    ],

    // socialLinks: [{ icon: "github", link: "https://github.com/Draper-crypto" }],

    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },

    footer: {
      message: 'Licensed under <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank">CC BY-NC-ND 4.0</a> | <a href="https://blog.johntao.top/about/">John Tao</a> | <a href="https://status.orionai.top/" target="_blank">Website Status</a> | <a href="https://f.wps.cn/g/LP0ERIdR/" target="_blank">Feedback</a>',
      copyright: "Copyright © 2024 By John Tao",
    },

    // editLink: {
    //   pattern: "https://github.com/Draper-crypto/doc-innovations/edit/main/:path",
    //   text: "Edit this page on GitHub",
    // },
  },
  lastUpdated: true,
  markdown: {
    // 自定义MarkDown图片渲染插件
    lineNumbers: true,
    config: (md) => {
      md.use(ImagePlugin)
    },
  },
  locales: {
    root: { label: "简体中文", lang: "zh" },
  },
});
