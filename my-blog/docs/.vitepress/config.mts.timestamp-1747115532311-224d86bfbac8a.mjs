// docs/.vitepress/config.mts
import { defineConfig } from "file:///D:/blog/my-blog/node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_0a4c8bfb128e07d2c0e0c57e7fc0e83a/node_modules/vitepress/dist/node/index.js";

// docs/.vitepress/blog-theme.ts
import { getThemeConfig } from "file:///D:/blog/my-blog/node_modules/.pnpm/@sugarat+theme@0.5.4_@eleme_8ac2d125377a79aaf1d9cc57373848d9/node_modules/@sugarat/theme/node.mjs";
var blogTheme = getThemeConfig({
  // 开启RSS支持
  // RSS,
  // 搜索
  // 默认开启pagefind离线的全文搜索支持（如使用其它的可以设置为false）
  // search: false,
  // markdown 图表支持（会增加一定的构建耗时）
  // mermaid: true
  // 页脚
  footer: {
    // message 字段支持配置为HTML内容，配置多条可以配置为数组
    // message: '下面 的内容和图标都是可以修改的噢（当然本条内容也是可以隐藏的）',
    // copyright: 'MIT License | 粥里有勺糖',
    icpRecord: {
      name: "\u7CA4ICP\u59072025379501\u53F7",
      link: "https://beian.miit.gov.cn/"
    }
    // securityRecord: {
    //   name: '公网安备xxxxx',
    //   link: 'https://www.beian.gov.cn/portal/index.do'
    // },
  },
  // 主题色修改
  themeColor: "el-blue",
  // 文章默认作者
  author: "linrunxinnn",
  // 友链
  friend: [
    {
      nickname: "\u7CA5\u91CC\u6709\u52FA\u7CD6",
      des: "\u4F60\u7684\u6307\u5C16\u7528\u4E8E\u6539\u53D8\u4E16\u754C\u7684\u529B\u91CF",
      avatar: "https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTE2NzAzMA==674995167030",
      url: "https://sugarat.top"
    },
    {
      nickname: "Vitepress",
      des: "Vite & Vue Powered Static Site Generator",
      avatar: "https://vitepress.dev/vitepress-logo-large.webp",
      url: "https://vitepress.dev/"
    }
  ],
  // 公告
  popover: {
    title: "\u516C\u544A",
    body: [
      { type: "text", content: "\u{1F447}\u516C\u4F17\u53F7\u{1F447}---\u{1F447} \u5FAE\u4FE1 \u{1F447}" },
      {
        type: "image",
        src: "https://img.cdn.sugarat.top/mdImg/MTYxNTAxODc2NTIxMA==615018765210~fmt.webp"
      },
      {
        type: "text",
        content: "\u6B22\u8FCE\u5927\u5BB6\u52A0\u7FA4&\u79C1\u4FE1\u4EA4\u6D41"
      },
      {
        type: "text",
        content: "\u6587\u7AE0\u9996/\u6587\u5C3E\u6709\u7FA4\u4E8C\u7EF4\u7801",
        style: "padding-top:0"
      },
      {
        type: "button",
        content: "\u4F5C\u8005\u535A\u5BA2",
        link: "https://sugarat.top"
      },
      {
        type: "button",
        content: "\u52A0\u7FA4\u4EA4\u6D41",
        props: {
          type: "success"
        },
        link: "https://theme.sugarat.top/group.html"
      }
    ],
    duration: 0
  }
});

// docs/.vitepress/config.mts
var config_default = defineConfig({
  // 继承博客主题(@sugarat/theme)
  extends: blogTheme,
  // base,
  lang: "zh-cn",
  title: "linrunxinnn \u306E \u535A\u5BA2",
  description: "linrunxinnn\u7684\u535A\u5BA2\u4E3B\u9898",
  lastUpdated: true,
  // 详见：https://vitepress.dev/zh/reference/site-config#head
  head: [
    // 配置网站的图标（显示在浏览器的 tab 上）
    // ['link', { rel: 'icon', href: `${base}favicon.ico` }], // 修改了 base 这里也需要同步修改
    ["link", { rel: "icon", href: "/favicon.ico" }]
  ],
  themeConfig: {
    // 展示 2,3 级标题在目录中
    outline: {
      level: [2, 3],
      label: "\u76EE\u5F55"
    },
    // 默认文案修改
    returnToTopLabel: "\u56DE\u5230\u9876\u90E8",
    sidebarMenuLabel: "\u76F8\u5173\u6587\u7AE0",
    lastUpdatedText: "\u4E0A\u6B21\u66F4\u65B0\u4E8E",
    // 设置logo
    logo: "/\u5B50\u8D85\u5144.jpg",
    // editLink: {
    //   pattern:
    //     'https://github.com/ATQQ/sugar-blog/tree/master/packages/blogpress/:path',
    //   text: '去 GitHub 上编辑内容'
    // },
    nav: [
      { text: "\u9996\u9875", link: "/" },
      { text: "\u5173\u4E8E\u4F5C\u8005", link: "https://linrunxinnn.cn" }
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/linrunxinnn"
      }
    ]
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy5tdHMiLCAiZG9jcy8udml0ZXByZXNzL2Jsb2ctdGhlbWUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxibG9nXFxcXG15LWJsb2dcXFxcZG9jc1xcXFwudml0ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxibG9nXFxcXG15LWJsb2dcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZy5tdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L2Jsb2cvbXktYmxvZy9kb2NzLy52aXRlcHJlc3MvY29uZmlnLm10c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlcHJlc3NcIjtcblxuLy8gXHU1QkZDXHU1MTY1XHU0RTNCXHU5ODk4XHU3Njg0XHU5MTREXHU3RjZFXG5pbXBvcnQgeyBibG9nVGhlbWUgfSBmcm9tIFwiLi9ibG9nLXRoZW1lXCI7XG5cbi8vIFx1NTk4Mlx1Njc5Q1x1NEY3Rlx1NzUyOCBHaXRIdWIvR2l0ZWUgUGFnZXMgXHU3QjQ5XHU1MTZDXHU1MTcxXHU1RTczXHU1M0YwXHU5MEU4XHU3RjcyXG4vLyBcdTkwMUFcdTVFMzhcdTk3MDBcdTg5ODFcdTRGRUVcdTY1MzkgYmFzZSBcdThERUZcdTVGODRcdUZGMENcdTkwMUFcdTVFMzhcdTRFM0FcdTIwMUMvXHU0RUQzXHU1RTkzXHU1NDBEL1x1MjAxRFxuLy8gXHU1OTgyXHU2NzlDXHU5ODc5XHU3NkVFXHU1NDBEXHU1REYyXHU3RUNGXHU0RTNBIG5hbWUuZ2l0aHViLmlvIFx1NTdERlx1NTQwRFx1RkYwQ1x1NTIxOVx1NEUwRFx1OTcwMFx1ODk4MVx1NEZFRVx1NjUzOVx1RkYwMVxuLy8gY29uc3QgYmFzZSA9IHByb2Nlc3MuZW52LkdJVEhVQl9BQ1RJT05TID09PSAndHJ1ZSdcbi8vICAgPyAnL3ZpdGVwcmVzcy1ibG9nLXN1Z2FyLXRlbXBsYXRlLydcbi8vICAgOiAnLydcblxuLy8gVml0ZXByZXNzIFx1OUVEOFx1OEJBNFx1OTE0RFx1N0Y2RVxuLy8gXHU4QkU2XHU4OUMxXHU2NTg3XHU2ODYzXHVGRjFBaHR0cHM6Ly92aXRlcHJlc3MuZGV2L3JlZmVyZW5jZS9zaXRlLWNvbmZpZ1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgLy8gXHU3RUU3XHU2MjdGXHU1MzVBXHU1QkEyXHU0RTNCXHU5ODk4KEBzdWdhcmF0L3RoZW1lKVxuICBleHRlbmRzOiBibG9nVGhlbWUsXG4gIC8vIGJhc2UsXG4gIGxhbmc6IFwiemgtY25cIixcbiAgdGl0bGU6IFwibGlucnVueGlubm4gXHUzMDZFIFx1NTM1QVx1NUJBMlwiLFxuICBkZXNjcmlwdGlvbjogXCJsaW5ydW54aW5ublx1NzY4NFx1NTM1QVx1NUJBMlx1NEUzQlx1OTg5OFwiLFxuICBsYXN0VXBkYXRlZDogdHJ1ZSxcbiAgLy8gXHU4QkU2XHU4OUMxXHVGRjFBaHR0cHM6Ly92aXRlcHJlc3MuZGV2L3poL3JlZmVyZW5jZS9zaXRlLWNvbmZpZyNoZWFkXG4gIGhlYWQ6IFtcbiAgICAvLyBcdTkxNERcdTdGNkVcdTdGNTFcdTdBRDlcdTc2ODRcdTU2RkVcdTY4MDdcdUZGMDhcdTY2M0VcdTc5M0FcdTU3MjhcdTZENEZcdTg5QzhcdTU2NjhcdTc2ODQgdGFiIFx1NEUwQVx1RkYwOVxuICAgIC8vIFsnbGluaycsIHsgcmVsOiAnaWNvbicsIGhyZWY6IGAke2Jhc2V9ZmF2aWNvbi5pY29gIH1dLCAvLyBcdTRGRUVcdTY1MzlcdTRFODYgYmFzZSBcdThGRDlcdTkxQ0NcdTRFNUZcdTk3MDBcdTg5ODFcdTU0MENcdTZCNjVcdTRGRUVcdTY1MzlcbiAgICBbXCJsaW5rXCIsIHsgcmVsOiBcImljb25cIiwgaHJlZjogXCIvZmF2aWNvbi5pY29cIiB9XSxcbiAgXSxcbiAgdGhlbWVDb25maWc6IHtcbiAgICAvLyBcdTVDNTVcdTc5M0EgMiwzIFx1N0VBN1x1NjgwN1x1OTg5OFx1NTcyOFx1NzZFRVx1NUY1NVx1NEUyRFxuICAgIG91dGxpbmU6IHtcbiAgICAgIGxldmVsOiBbMiwgM10sXG4gICAgICBsYWJlbDogXCJcdTc2RUVcdTVGNTVcIixcbiAgICB9LFxuICAgIC8vIFx1OUVEOFx1OEJBNFx1NjU4N1x1Njg0OFx1NEZFRVx1NjUzOVxuICAgIHJldHVyblRvVG9wTGFiZWw6IFwiXHU1NkRFXHU1MjMwXHU5ODc2XHU5MEU4XCIsXG4gICAgc2lkZWJhck1lbnVMYWJlbDogXCJcdTc2RjhcdTUxNzNcdTY1ODdcdTdBRTBcIixcbiAgICBsYXN0VXBkYXRlZFRleHQ6IFwiXHU0RTBBXHU2QjIxXHU2NkY0XHU2NUIwXHU0RThFXCIsXG5cbiAgICAvLyBcdThCQkVcdTdGNkVsb2dvXG4gICAgbG9nbzogXCIvXHU1QjUwXHU4RDg1XHU1MTQ0LmpwZ1wiLFxuICAgIC8vIGVkaXRMaW5rOiB7XG4gICAgLy8gICBwYXR0ZXJuOlxuICAgIC8vICAgICAnaHR0cHM6Ly9naXRodWIuY29tL0FUUVEvc3VnYXItYmxvZy90cmVlL21hc3Rlci9wYWNrYWdlcy9ibG9ncHJlc3MvOnBhdGgnLFxuICAgIC8vICAgdGV4dDogJ1x1NTNCQiBHaXRIdWIgXHU0RTBBXHU3RjE2XHU4RjkxXHU1MTg1XHU1QkI5J1xuICAgIC8vIH0sXG4gICAgbmF2OiBbXG4gICAgICB7IHRleHQ6IFwiXHU5OTk2XHU5ODc1XCIsIGxpbms6IFwiL1wiIH0sXG4gICAgICB7IHRleHQ6IFwiXHU1MTczXHU0RThFXHU0RjVDXHU4MDA1XCIsIGxpbms6IFwiaHR0cHM6Ly9saW5ydW54aW5ubi5jblwiIH0sXG4gICAgXSxcbiAgICBzb2NpYWxMaW5rczogW1xuICAgICAge1xuICAgICAgICBpY29uOiBcImdpdGh1YlwiLFxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9saW5ydW54aW5ublwiLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxufSk7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXGJsb2dcXFxcbXktYmxvZ1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXGJsb2dcXFxcbXktYmxvZ1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcYmxvZy10aGVtZS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovYmxvZy9teS1ibG9nL2RvY3MvLnZpdGVwcmVzcy9ibG9nLXRoZW1lLnRzXCI7Ly8gXHU0RTNCXHU5ODk4XHU3MkVDXHU2NzA5XHU5MTREXHU3RjZFXG5pbXBvcnQgeyBnZXRUaGVtZUNvbmZpZyB9IGZyb20gXCJAc3VnYXJhdC90aGVtZS9ub2RlXCI7XG5cbi8vIFx1NUYwMFx1NTQyRlJTU1x1NjUyRlx1NjMwMVx1RkYwOFJTU1x1OTE0RFx1N0Y2RVx1RkYwOVxuLy8gaW1wb3J0IHR5cGUgeyBUaGVtZSB9IGZyb20gJ0BzdWdhcmF0L3RoZW1lJ1xuXG4vLyBjb25zdCBiYXNlVXJsID0gJ2h0dHBzOi8vc3VnYXJhdC50b3AnXG4vLyBjb25zdCBSU1M6IFRoZW1lLlJTU09wdGlvbnMgPSB7XG4vLyAgIHRpdGxlOiAnXHU3Q0E1XHU5MUNDXHU2NzA5XHU1MkZBXHU3Q0Q2Jyxcbi8vICAgYmFzZVVybCxcbi8vICAgY29weXJpZ2h0OiAnQ29weXJpZ2h0IChjKSAyMDE4LXByZXNlbnQsIFx1N0NBNVx1OTFDQ1x1NjcwOVx1NTJGQVx1N0NENicsXG4vLyAgIGRlc2NyaXB0aW9uOiAnXHU0RjYwXHU3Njg0XHU2MzA3XHU1QzE2LFx1NjJFNVx1NjcwOVx1NjUzOVx1NTNEOFx1NEUxNlx1NzU0Q1x1NzY4NFx1NTI5Qlx1OTFDRlx1RkYwOFx1NTkyN1x1NTI0RFx1N0FFRlx1NzZGOFx1NTE3M1x1NjI4MFx1NjcyRlx1NTIwNlx1NEVBQlx1RkYwOScsXG4vLyAgIGxhbmd1YWdlOiAnemgtY24nLFxuLy8gICBpbWFnZTogJ2h0dHBzOi8vaW1nLmNkbi5zdWdhcmF0LnRvcC9tZEltZy9NVFkzTkRrNU5URTJOekF6TUE9PTY3NDk5NTE2NzAzMCcsXG4vLyAgIGZhdmljb246ICdodHRwczovL3N1Z2FyYXQudG9wL2Zhdmljb24uaWNvJyxcbi8vIH1cblxuLy8gXHU2MjQwXHU2NzA5XHU5MTREXHU3RjZFXHU5ODc5XHVGRjBDXHU4QkU2XHU4OUMxXHU2NTg3XHU2ODYzOiBodHRwczovL3RoZW1lLnN1Z2FyYXQudG9wL1xuY29uc3QgYmxvZ1RoZW1lID0gZ2V0VGhlbWVDb25maWcoe1xuICAvLyBcdTVGMDBcdTU0MkZSU1NcdTY1MkZcdTYzMDFcbiAgLy8gUlNTLFxuXG4gIC8vIFx1NjQxQ1x1N0QyMlxuICAvLyBcdTlFRDhcdThCQTRcdTVGMDBcdTU0MkZwYWdlZmluZFx1NzlCQlx1N0VCRlx1NzY4NFx1NTE2OFx1NjU4N1x1NjQxQ1x1N0QyMlx1NjUyRlx1NjMwMVx1RkYwOFx1NTk4Mlx1NEY3Rlx1NzUyOFx1NTE3Nlx1NUI4M1x1NzY4NFx1NTNFRlx1NEVFNVx1OEJCRVx1N0Y2RVx1NEUzQWZhbHNlXHVGRjA5XG4gIC8vIHNlYXJjaDogZmFsc2UsXG5cbiAgLy8gbWFya2Rvd24gXHU1NkZFXHU4ODY4XHU2NTJGXHU2MzAxXHVGRjA4XHU0RjFBXHU1ODlFXHU1MkEwXHU0RTAwXHU1QjlBXHU3Njg0XHU2Nzg0XHU1RUZBXHU4MDE3XHU2NUY2XHVGRjA5XG4gIC8vIG1lcm1haWQ6IHRydWVcblxuICAvLyBcdTk4NzVcdTgxMUFcbiAgZm9vdGVyOiB7XG4gICAgLy8gbWVzc2FnZSBcdTVCNTdcdTZCQjVcdTY1MkZcdTYzMDFcdTkxNERcdTdGNkVcdTRFM0FIVE1MXHU1MTg1XHU1QkI5XHVGRjBDXHU5MTREXHU3RjZFXHU1OTFBXHU2NzYxXHU1M0VGXHU0RUU1XHU5MTREXHU3RjZFXHU0RTNBXHU2NTcwXHU3RUM0XG4gICAgLy8gbWVzc2FnZTogJ1x1NEUwQlx1OTc2MiBcdTc2ODRcdTUxODVcdTVCQjlcdTU0OENcdTU2RkVcdTY4MDdcdTkwRkRcdTY2MkZcdTUzRUZcdTRFRTVcdTRGRUVcdTY1MzlcdTc2ODRcdTU2NjJcdUZGMDhcdTVGNTNcdTcxMzZcdTY3MkNcdTY3NjFcdTUxODVcdTVCQjlcdTRFNUZcdTY2MkZcdTUzRUZcdTRFRTVcdTk2OTBcdTg1Q0ZcdTc2ODRcdUZGMDknLFxuICAgIC8vIGNvcHlyaWdodDogJ01JVCBMaWNlbnNlIHwgXHU3Q0E1XHU5MUNDXHU2NzA5XHU1MkZBXHU3Q0Q2JyxcbiAgICBpY3BSZWNvcmQ6IHtcbiAgICAgIG5hbWU6IFwiXHU3Q0E0SUNQXHU1OTA3MjAyNTM3OTUwMVx1NTNGN1wiLFxuICAgICAgbGluazogXCJodHRwczovL2JlaWFuLm1paXQuZ292LmNuL1wiLFxuICAgIH0sXG4gICAgLy8gc2VjdXJpdHlSZWNvcmQ6IHtcbiAgICAvLyAgIG5hbWU6ICdcdTUxNkNcdTdGNTFcdTVCODlcdTU5MDd4eHh4eCcsXG4gICAgLy8gICBsaW5rOiAnaHR0cHM6Ly93d3cuYmVpYW4uZ292LmNuL3BvcnRhbC9pbmRleC5kbydcbiAgICAvLyB9LFxuICB9LFxuXG4gIC8vIFx1NEUzQlx1OTg5OFx1ODI3Mlx1NEZFRVx1NjUzOVxuICB0aGVtZUNvbG9yOiBcImVsLWJsdWVcIixcblxuICAvLyBcdTY1ODdcdTdBRTBcdTlFRDhcdThCQTRcdTRGNUNcdTgwMDVcbiAgYXV0aG9yOiBcImxpbnJ1bnhpbm5uXCIsXG5cbiAgLy8gXHU1M0NCXHU5NEZFXG4gIGZyaWVuZDogW1xuICAgIHtcbiAgICAgIG5pY2tuYW1lOiBcIlx1N0NBNVx1OTFDQ1x1NjcwOVx1NTJGQVx1N0NENlwiLFxuICAgICAgZGVzOiBcIlx1NEY2MFx1NzY4NFx1NjMwN1x1NUMxNlx1NzUyOFx1NEU4RVx1NjUzOVx1NTNEOFx1NEUxNlx1NzU0Q1x1NzY4NFx1NTI5Qlx1OTFDRlwiLFxuICAgICAgYXZhdGFyOlxuICAgICAgICBcImh0dHBzOi8vaW1nLmNkbi5zdWdhcmF0LnRvcC9tZEltZy9NVFkzTkRrNU5URTJOekF6TUE9PTY3NDk5NTE2NzAzMFwiLFxuICAgICAgdXJsOiBcImh0dHBzOi8vc3VnYXJhdC50b3BcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5pY2tuYW1lOiBcIlZpdGVwcmVzc1wiLFxuICAgICAgZGVzOiBcIlZpdGUgJiBWdWUgUG93ZXJlZCBTdGF0aWMgU2l0ZSBHZW5lcmF0b3JcIixcbiAgICAgIGF2YXRhcjogXCJodHRwczovL3ZpdGVwcmVzcy5kZXYvdml0ZXByZXNzLWxvZ28tbGFyZ2Uud2VicFwiLFxuICAgICAgdXJsOiBcImh0dHBzOi8vdml0ZXByZXNzLmRldi9cIixcbiAgICB9LFxuICBdLFxuXG4gIC8vIFx1NTE2Q1x1NTQ0QVxuICBwb3BvdmVyOiB7XG4gICAgdGl0bGU6IFwiXHU1MTZDXHU1NDRBXCIsXG4gICAgYm9keTogW1xuICAgICAgeyB0eXBlOiBcInRleHRcIiwgY29udGVudDogXCJcdUQ4M0RcdURDNDdcdTUxNkNcdTRGMTdcdTUzRjdcdUQ4M0RcdURDNDctLS1cdUQ4M0RcdURDNDcgXHU1RkFFXHU0RkUxIFx1RDgzRFx1REM0N1wiIH0sXG4gICAgICB7XG4gICAgICAgIHR5cGU6IFwiaW1hZ2VcIixcbiAgICAgICAgc3JjOiBcImh0dHBzOi8vaW1nLmNkbi5zdWdhcmF0LnRvcC9tZEltZy9NVFl4TlRBeE9EYzJOVEl4TUE9PTYxNTAxODc2NTIxMH5mbXQud2VicFwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgIGNvbnRlbnQ6IFwiXHU2QjIyXHU4RkNFXHU1OTI3XHU1QkI2XHU1MkEwXHU3RkE0Jlx1NzlDMVx1NEZFMVx1NEVBNFx1NkQ0MVwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgIGNvbnRlbnQ6IFwiXHU2NTg3XHU3QUUwXHU5OTk2L1x1NjU4N1x1NUMzRVx1NjcwOVx1N0ZBNFx1NEU4Q1x1N0VGNFx1NzgwMVwiLFxuICAgICAgICBzdHlsZTogXCJwYWRkaW5nLXRvcDowXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICBjb250ZW50OiBcIlx1NEY1Q1x1ODAwNVx1NTM1QVx1NUJBMlwiLFxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vc3VnYXJhdC50b3BcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgIGNvbnRlbnQ6IFwiXHU1MkEwXHU3RkE0XHU0RUE0XHU2RDQxXCIsXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgdHlwZTogXCJzdWNjZXNzXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly90aGVtZS5zdWdhcmF0LnRvcC9ncm91cC5odG1sXCIsXG4gICAgICB9LFxuICAgIF0sXG4gICAgZHVyYXRpb246IDAsXG4gIH0sXG59KTtcblxuZXhwb3J0IHsgYmxvZ1RoZW1lIH07XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWlSLFNBQVMsb0JBQW9COzs7QUNDOVMsU0FBUyxzQkFBc0I7QUFpQi9CLElBQU0sWUFBWSxlQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBWS9CLFFBQVE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUlOLFdBQVc7QUFBQSxNQUNULE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxJQUNSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUtGO0FBQUE7QUFBQSxFQUdBLFlBQVk7QUFBQTtBQUFBLEVBR1osUUFBUTtBQUFBO0FBQUEsRUFHUixRQUFRO0FBQUEsSUFDTjtBQUFBLE1BQ0UsVUFBVTtBQUFBLE1BQ1YsS0FBSztBQUFBLE1BQ0wsUUFDRTtBQUFBLE1BQ0YsS0FBSztBQUFBLElBQ1A7QUFBQSxJQUNBO0FBQUEsTUFDRSxVQUFVO0FBQUEsTUFDVixLQUFLO0FBQUEsTUFDTCxRQUFRO0FBQUEsTUFDUixLQUFLO0FBQUEsSUFDUDtBQUFBLEVBQ0Y7QUFBQTtBQUFBLEVBR0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsTUFBTTtBQUFBLE1BQ0osRUFBRSxNQUFNLFFBQVEsU0FBUywwRUFBcUI7QUFBQSxNQUM5QztBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sS0FBSztBQUFBLE1BQ1A7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixTQUFTO0FBQUEsTUFDWDtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLFNBQVM7QUFBQSxRQUNULE9BQU87QUFBQSxNQUNUO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sU0FBUztBQUFBLFFBQ1QsTUFBTTtBQUFBLE1BQ1I7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixTQUFTO0FBQUEsUUFDVCxPQUFPO0FBQUEsVUFDTCxNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0EsTUFBTTtBQUFBLE1BQ1I7QUFBQSxJQUNGO0FBQUEsSUFDQSxVQUFVO0FBQUEsRUFDWjtBQUNGLENBQUM7OztBRHZGRCxJQUFPLGlCQUFRLGFBQWE7QUFBQTtBQUFBLEVBRTFCLFNBQVM7QUFBQTtBQUFBLEVBRVQsTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBO0FBQUEsRUFFYixNQUFNO0FBQUE7QUFBQTtBQUFBLElBR0osQ0FBQyxRQUFRLEVBQUUsS0FBSyxRQUFRLE1BQU0sZUFBZSxDQUFDO0FBQUEsRUFDaEQ7QUFBQSxFQUNBLGFBQWE7QUFBQTtBQUFBLElBRVgsU0FBUztBQUFBLE1BQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQztBQUFBLE1BQ1osT0FBTztBQUFBLElBQ1Q7QUFBQTtBQUFBLElBRUEsa0JBQWtCO0FBQUEsSUFDbEIsa0JBQWtCO0FBQUEsSUFDbEIsaUJBQWlCO0FBQUE7QUFBQSxJQUdqQixNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTU4sS0FBSztBQUFBLE1BQ0gsRUFBRSxNQUFNLGdCQUFNLE1BQU0sSUFBSTtBQUFBLE1BQ3hCLEVBQUUsTUFBTSw0QkFBUSxNQUFNLHlCQUF5QjtBQUFBLElBQ2pEO0FBQUEsSUFDQSxhQUFhO0FBQUEsTUFDWDtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1I7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
