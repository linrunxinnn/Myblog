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
  ]
  // 公告
  // popover: {
  //   title: "公告",
  //   body: [
  //     { type: "text", content: "👇公众号👇---👇 微信 👇" },
  //     {
  //       type: "image",
  //       src: "https://img.cdn.sugarat.top/mdImg/MTYxNTAxODc2NTIxMA==615018765210~fmt.webp",
  //     },
  //     {
  //       type: "text",
  //       content: "欢迎大家加群&私信交流",
  //     },
  //     {
  //       type: "text",
  //       content: "文章首/文尾有群二维码",
  //       style: "padding-top:0",
  //     },
  //     {
  //       type: "button",
  //       content: "作者博客",
  //       link: "https://sugarat.top",
  //     },
  //     {
  //       type: "button",
  //       content: "加群交流",
  //       props: {
  //         type: "success",
  //       },
  //       link: "https://theme.sugarat.top/group.html",
  //     },
  //   ],
  //   duration: 0,
  // },
});

// docs/.vitepress/config.mts
var config_default = defineConfig({
  // 继承博客主题(@sugarat/theme)
  extends: blogTheme,
  // base,
  lang: "zh-cn",
  title: "linrunxinnn\u535A\u5BA2",
  lastUpdated: true,
  // 详见：https://vitepress.dev/zh/reference/site-config#head
  head: [
    // 配置网站的图标（显示在浏览器的 tab 上）
    // ['link', { rel: 'icon', href: `${base}favicon.ico` }], // 修改了 base 这里也需要同步修改
    ["link", { rel: "icon", href: "/Home.ico" }]
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy5tdHMiLCAiZG9jcy8udml0ZXByZXNzL2Jsb2ctdGhlbWUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxibG9nXFxcXG15LWJsb2dcXFxcZG9jc1xcXFwudml0ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxibG9nXFxcXG15LWJsb2dcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZy5tdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L2Jsb2cvbXktYmxvZy9kb2NzLy52aXRlcHJlc3MvY29uZmlnLm10c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlcHJlc3NcIjtcblxuLy8gXHU1QkZDXHU1MTY1XHU0RTNCXHU5ODk4XHU3Njg0XHU5MTREXHU3RjZFXG5pbXBvcnQgeyBibG9nVGhlbWUgfSBmcm9tIFwiLi9ibG9nLXRoZW1lXCI7XG5cbi8vIFx1NTk4Mlx1Njc5Q1x1NEY3Rlx1NzUyOCBHaXRIdWIvR2l0ZWUgUGFnZXMgXHU3QjQ5XHU1MTZDXHU1MTcxXHU1RTczXHU1M0YwXHU5MEU4XHU3RjcyXG4vLyBcdTkwMUFcdTVFMzhcdTk3MDBcdTg5ODFcdTRGRUVcdTY1MzkgYmFzZSBcdThERUZcdTVGODRcdUZGMENcdTkwMUFcdTVFMzhcdTRFM0FcdTIwMUMvXHU0RUQzXHU1RTkzXHU1NDBEL1x1MjAxRFxuLy8gXHU1OTgyXHU2NzlDXHU5ODc5XHU3NkVFXHU1NDBEXHU1REYyXHU3RUNGXHU0RTNBIG5hbWUuZ2l0aHViLmlvIFx1NTdERlx1NTQwRFx1RkYwQ1x1NTIxOVx1NEUwRFx1OTcwMFx1ODk4MVx1NEZFRVx1NjUzOVx1RkYwMVxuLy8gY29uc3QgYmFzZSA9IHByb2Nlc3MuZW52LkdJVEhVQl9BQ1RJT05TID09PSAndHJ1ZSdcbi8vICAgPyAnL3ZpdGVwcmVzcy1ibG9nLXN1Z2FyLXRlbXBsYXRlLydcbi8vICAgOiAnLydcblxuLy8gVml0ZXByZXNzIFx1OUVEOFx1OEJBNFx1OTE0RFx1N0Y2RVxuLy8gXHU4QkU2XHU4OUMxXHU2NTg3XHU2ODYzXHVGRjFBaHR0cHM6Ly92aXRlcHJlc3MuZGV2L3JlZmVyZW5jZS9zaXRlLWNvbmZpZ1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgLy8gXHU3RUU3XHU2MjdGXHU1MzVBXHU1QkEyXHU0RTNCXHU5ODk4KEBzdWdhcmF0L3RoZW1lKVxuICBleHRlbmRzOiBibG9nVGhlbWUsXG4gIC8vIGJhc2UsXG4gIGxhbmc6IFwiemgtY25cIixcbiAgdGl0bGU6IFwibGlucnVueGlubm5cdTUzNUFcdTVCQTJcIixcbiAgbGFzdFVwZGF0ZWQ6IHRydWUsXG4gIC8vIFx1OEJFNlx1ODlDMVx1RkYxQWh0dHBzOi8vdml0ZXByZXNzLmRldi96aC9yZWZlcmVuY2Uvc2l0ZS1jb25maWcjaGVhZFxuICBoZWFkOiBbXG4gICAgLy8gXHU5MTREXHU3RjZFXHU3RjUxXHU3QUQ5XHU3Njg0XHU1NkZFXHU2ODA3XHVGRjA4XHU2NjNFXHU3OTNBXHU1NzI4XHU2RDRGXHU4OUM4XHU1NjY4XHU3Njg0IHRhYiBcdTRFMEFcdUZGMDlcbiAgICAvLyBbJ2xpbmsnLCB7IHJlbDogJ2ljb24nLCBocmVmOiBgJHtiYXNlfWZhdmljb24uaWNvYCB9XSwgLy8gXHU0RkVFXHU2NTM5XHU0RTg2IGJhc2UgXHU4RkQ5XHU5MUNDXHU0RTVGXHU5NzAwXHU4OTgxXHU1NDBDXHU2QjY1XHU0RkVFXHU2NTM5XG4gICAgW1wibGlua1wiLCB7IHJlbDogXCJpY29uXCIsIGhyZWY6IFwiL0hvbWUuaWNvXCIgfV0sXG4gIF0sXG4gIHRoZW1lQ29uZmlnOiB7XG4gICAgLy8gXHU1QzU1XHU3OTNBIDIsMyBcdTdFQTdcdTY4MDdcdTk4OThcdTU3MjhcdTc2RUVcdTVGNTVcdTRFMkRcbiAgICBvdXRsaW5lOiB7XG4gICAgICBsZXZlbDogWzIsIDNdLFxuICAgICAgbGFiZWw6IFwiXHU3NkVFXHU1RjU1XCIsXG4gICAgfSxcbiAgICAvLyBcdTlFRDhcdThCQTRcdTY1ODdcdTY4NDhcdTRGRUVcdTY1MzlcbiAgICByZXR1cm5Ub1RvcExhYmVsOiBcIlx1NTZERVx1NTIzMFx1OTg3Nlx1OTBFOFwiLFxuICAgIHNpZGViYXJNZW51TGFiZWw6IFwiXHU3NkY4XHU1MTczXHU2NTg3XHU3QUUwXCIsXG4gICAgbGFzdFVwZGF0ZWRUZXh0OiBcIlx1NEUwQVx1NkIyMVx1NjZGNFx1NjVCMFx1NEU4RVwiLFxuXG4gICAgLy8gXHU4QkJFXHU3RjZFbG9nb1xuICAgIGxvZ286IFwiL1x1NUI1MFx1OEQ4NVx1NTE0NC5qcGdcIixcbiAgICAvLyBlZGl0TGluazoge1xuICAgIC8vICAgcGF0dGVybjpcbiAgICAvLyAgICAgJ2h0dHBzOi8vZ2l0aHViLmNvbS9BVFFRL3N1Z2FyLWJsb2cvdHJlZS9tYXN0ZXIvcGFja2FnZXMvYmxvZ3ByZXNzLzpwYXRoJyxcbiAgICAvLyAgIHRleHQ6ICdcdTUzQkIgR2l0SHViIFx1NEUwQVx1N0YxNlx1OEY5MVx1NTE4NVx1NUJCOSdcbiAgICAvLyB9LFxuICAgIG5hdjogW1xuICAgICAgeyB0ZXh0OiBcIlx1OTk5Nlx1OTg3NVwiLCBsaW5rOiBcIi9cIiB9LFxuICAgICAgeyB0ZXh0OiBcIlx1NTE3M1x1NEU4RVx1NEY1Q1x1ODAwNVwiLCBsaW5rOiBcImh0dHBzOi8vbGlucnVueGlubm4uY25cIiB9LFxuICAgIF0sXG4gICAgc29jaWFsTGlua3M6IFtcbiAgICAgIHtcbiAgICAgICAgaWNvbjogXCJnaXRodWJcIixcbiAgICAgICAgbGluazogXCJodHRwczovL2dpdGh1Yi5jb20vbGlucnVueGlubm5cIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbn0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxibG9nXFxcXG15LWJsb2dcXFxcZG9jc1xcXFwudml0ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxibG9nXFxcXG15LWJsb2dcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGJsb2ctdGhlbWUudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L2Jsb2cvbXktYmxvZy9kb2NzLy52aXRlcHJlc3MvYmxvZy10aGVtZS50c1wiOy8vIFx1NEUzQlx1OTg5OFx1NzJFQ1x1NjcwOVx1OTE0RFx1N0Y2RVxuaW1wb3J0IHsgZ2V0VGhlbWVDb25maWcgfSBmcm9tIFwiQHN1Z2FyYXQvdGhlbWUvbm9kZVwiO1xuXG4vLyBcdTVGMDBcdTU0MkZSU1NcdTY1MkZcdTYzMDFcdUZGMDhSU1NcdTkxNERcdTdGNkVcdUZGMDlcbi8vIGltcG9ydCB0eXBlIHsgVGhlbWUgfSBmcm9tICdAc3VnYXJhdC90aGVtZSdcblxuLy8gY29uc3QgYmFzZVVybCA9ICdodHRwczovL3N1Z2FyYXQudG9wJ1xuLy8gY29uc3QgUlNTOiBUaGVtZS5SU1NPcHRpb25zID0ge1xuLy8gICB0aXRsZTogJ1x1N0NBNVx1OTFDQ1x1NjcwOVx1NTJGQVx1N0NENicsXG4vLyAgIGJhc2VVcmwsXG4vLyAgIGNvcHlyaWdodDogJ0NvcHlyaWdodCAoYykgMjAxOC1wcmVzZW50LCBcdTdDQTVcdTkxQ0NcdTY3MDlcdTUyRkFcdTdDRDYnLFxuLy8gICBkZXNjcmlwdGlvbjogJ1x1NEY2MFx1NzY4NFx1NjMwN1x1NUMxNixcdTYyRTVcdTY3MDlcdTY1MzlcdTUzRDhcdTRFMTZcdTc1NENcdTc2ODRcdTUyOUJcdTkxQ0ZcdUZGMDhcdTU5MjdcdTUyNERcdTdBRUZcdTc2RjhcdTUxNzNcdTYyODBcdTY3MkZcdTUyMDZcdTRFQUJcdUZGMDknLFxuLy8gICBsYW5ndWFnZTogJ3poLWNuJyxcbi8vICAgaW1hZ2U6ICdodHRwczovL2ltZy5jZG4uc3VnYXJhdC50b3AvbWRJbWcvTVRZM05EazVOVEUyTnpBek1BPT02NzQ5OTUxNjcwMzAnLFxuLy8gICBmYXZpY29uOiAnaHR0cHM6Ly9zdWdhcmF0LnRvcC9mYXZpY29uLmljbycsXG4vLyB9XG5cbi8vIFx1NjI0MFx1NjcwOVx1OTE0RFx1N0Y2RVx1OTg3OVx1RkYwQ1x1OEJFNlx1ODlDMVx1NjU4N1x1Njg2MzogaHR0cHM6Ly90aGVtZS5zdWdhcmF0LnRvcC9cbmNvbnN0IGJsb2dUaGVtZSA9IGdldFRoZW1lQ29uZmlnKHtcbiAgLy8gXHU1RjAwXHU1NDJGUlNTXHU2NTJGXHU2MzAxXG4gIC8vIFJTUyxcblxuICAvLyBcdTY0MUNcdTdEMjJcbiAgLy8gXHU5RUQ4XHU4QkE0XHU1RjAwXHU1NDJGcGFnZWZpbmRcdTc5QkJcdTdFQkZcdTc2ODRcdTUxNjhcdTY1ODdcdTY0MUNcdTdEMjJcdTY1MkZcdTYzMDFcdUZGMDhcdTU5ODJcdTRGN0ZcdTc1MjhcdTUxNzZcdTVCODNcdTc2ODRcdTUzRUZcdTRFRTVcdThCQkVcdTdGNkVcdTRFM0FmYWxzZVx1RkYwOVxuICAvLyBzZWFyY2g6IGZhbHNlLFxuXG4gIC8vIG1hcmtkb3duIFx1NTZGRVx1ODg2OFx1NjUyRlx1NjMwMVx1RkYwOFx1NEYxQVx1NTg5RVx1NTJBMFx1NEUwMFx1NUI5QVx1NzY4NFx1Njc4NFx1NUVGQVx1ODAxN1x1NjVGNlx1RkYwOVxuICAvLyBtZXJtYWlkOiB0cnVlXG5cbiAgLy8gXHU5ODc1XHU4MTFBXG4gIGZvb3Rlcjoge1xuICAgIC8vIG1lc3NhZ2UgXHU1QjU3XHU2QkI1XHU2NTJGXHU2MzAxXHU5MTREXHU3RjZFXHU0RTNBSFRNTFx1NTE4NVx1NUJCOVx1RkYwQ1x1OTE0RFx1N0Y2RVx1NTkxQVx1Njc2MVx1NTNFRlx1NEVFNVx1OTE0RFx1N0Y2RVx1NEUzQVx1NjU3MFx1N0VDNFxuICAgIC8vIG1lc3NhZ2U6ICdcdTRFMEJcdTk3NjIgXHU3Njg0XHU1MTg1XHU1QkI5XHU1NDhDXHU1NkZFXHU2ODA3XHU5MEZEXHU2NjJGXHU1M0VGXHU0RUU1XHU0RkVFXHU2NTM5XHU3Njg0XHU1NjYyXHVGRjA4XHU1RjUzXHU3MTM2XHU2NzJDXHU2NzYxXHU1MTg1XHU1QkI5XHU0RTVGXHU2NjJGXHU1M0VGXHU0RUU1XHU5NjkwXHU4NUNGXHU3Njg0XHVGRjA5JyxcbiAgICAvLyBjb3B5cmlnaHQ6ICdNSVQgTGljZW5zZSB8IFx1N0NBNVx1OTFDQ1x1NjcwOVx1NTJGQVx1N0NENicsXG4gICAgaWNwUmVjb3JkOiB7XG4gICAgICBuYW1lOiBcIlx1N0NBNElDUFx1NTkwNzIwMjUzNzk1MDFcdTUzRjdcIixcbiAgICAgIGxpbms6IFwiaHR0cHM6Ly9iZWlhbi5taWl0Lmdvdi5jbi9cIixcbiAgICB9LFxuICAgIC8vIHNlY3VyaXR5UmVjb3JkOiB7XG4gICAgLy8gICBuYW1lOiAnXHU1MTZDXHU3RjUxXHU1Qjg5XHU1OTA3eHh4eHgnLFxuICAgIC8vICAgbGluazogJ2h0dHBzOi8vd3d3LmJlaWFuLmdvdi5jbi9wb3J0YWwvaW5kZXguZG8nXG4gICAgLy8gfSxcbiAgfSxcblxuICAvLyBcdTRFM0JcdTk4OThcdTgyNzJcdTRGRUVcdTY1MzlcbiAgdGhlbWVDb2xvcjogXCJlbC1ibHVlXCIsXG5cbiAgLy8gXHU2NTg3XHU3QUUwXHU5RUQ4XHU4QkE0XHU0RjVDXHU4MDA1XG4gIGF1dGhvcjogXCJsaW5ydW54aW5ublwiLFxuXG4gIC8vIFx1NTNDQlx1OTRGRVxuICBmcmllbmQ6IFtcbiAgICB7XG4gICAgICBuaWNrbmFtZTogXCJcdTdDQTVcdTkxQ0NcdTY3MDlcdTUyRkFcdTdDRDZcIixcbiAgICAgIGRlczogXCJcdTRGNjBcdTc2ODRcdTYzMDdcdTVDMTZcdTc1MjhcdTRFOEVcdTY1MzlcdTUzRDhcdTRFMTZcdTc1NENcdTc2ODRcdTUyOUJcdTkxQ0ZcIixcbiAgICAgIGF2YXRhcjpcbiAgICAgICAgXCJodHRwczovL2ltZy5jZG4uc3VnYXJhdC50b3AvbWRJbWcvTVRZM05EazVOVEUyTnpBek1BPT02NzQ5OTUxNjcwMzBcIixcbiAgICAgIHVybDogXCJodHRwczovL3N1Z2FyYXQudG9wXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuaWNrbmFtZTogXCJWaXRlcHJlc3NcIixcbiAgICAgIGRlczogXCJWaXRlICYgVnVlIFBvd2VyZWQgU3RhdGljIFNpdGUgR2VuZXJhdG9yXCIsXG4gICAgICBhdmF0YXI6IFwiaHR0cHM6Ly92aXRlcHJlc3MuZGV2L3ZpdGVwcmVzcy1sb2dvLWxhcmdlLndlYnBcIixcbiAgICAgIHVybDogXCJodHRwczovL3ZpdGVwcmVzcy5kZXYvXCIsXG4gICAgfSxcbiAgXSxcblxuICAvLyBcdTUxNkNcdTU0NEFcbiAgLy8gcG9wb3Zlcjoge1xuICAvLyAgIHRpdGxlOiBcIlx1NTE2Q1x1NTQ0QVwiLFxuICAvLyAgIGJvZHk6IFtcbiAgLy8gICAgIHsgdHlwZTogXCJ0ZXh0XCIsIGNvbnRlbnQ6IFwiXHVEODNEXHVEQzQ3XHU1MTZDXHU0RjE3XHU1M0Y3XHVEODNEXHVEQzQ3LS0tXHVEODNEXHVEQzQ3IFx1NUZBRVx1NEZFMSBcdUQ4M0RcdURDNDdcIiB9LFxuICAvLyAgICAge1xuICAvLyAgICAgICB0eXBlOiBcImltYWdlXCIsXG4gIC8vICAgICAgIHNyYzogXCJodHRwczovL2ltZy5jZG4uc3VnYXJhdC50b3AvbWRJbWcvTVRZeE5UQXhPRGMyTlRJeE1BPT02MTUwMTg3NjUyMTB+Zm10LndlYnBcIixcbiAgLy8gICAgIH0sXG4gIC8vICAgICB7XG4gIC8vICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAvLyAgICAgICBjb250ZW50OiBcIlx1NkIyMlx1OEZDRVx1NTkyN1x1NUJCNlx1NTJBMFx1N0ZBNCZcdTc5QzFcdTRGRTFcdTRFQTRcdTZENDFcIixcbiAgLy8gICAgIH0sXG4gIC8vICAgICB7XG4gIC8vICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAvLyAgICAgICBjb250ZW50OiBcIlx1NjU4N1x1N0FFMFx1OTk5Ni9cdTY1ODdcdTVDM0VcdTY3MDlcdTdGQTRcdTRFOENcdTdFRjRcdTc4MDFcIixcbiAgLy8gICAgICAgc3R5bGU6IFwicGFkZGluZy10b3A6MFwiLFxuICAvLyAgICAgfSxcbiAgLy8gICAgIHtcbiAgLy8gICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgLy8gICAgICAgY29udGVudDogXCJcdTRGNUNcdTgwMDVcdTUzNUFcdTVCQTJcIixcbiAgLy8gICAgICAgbGluazogXCJodHRwczovL3N1Z2FyYXQudG9wXCIsXG4gIC8vICAgICB9LFxuICAvLyAgICAge1xuICAvLyAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAvLyAgICAgICBjb250ZW50OiBcIlx1NTJBMFx1N0ZBNFx1NEVBNFx1NkQ0MVwiLFxuICAvLyAgICAgICBwcm9wczoge1xuICAvLyAgICAgICAgIHR5cGU6IFwic3VjY2Vzc1wiLFxuICAvLyAgICAgICB9LFxuICAvLyAgICAgICBsaW5rOiBcImh0dHBzOi8vdGhlbWUuc3VnYXJhdC50b3AvZ3JvdXAuaHRtbFwiLFxuICAvLyAgICAgfSxcbiAgLy8gICBdLFxuICAvLyAgIGR1cmF0aW9uOiAwLFxuICAvLyB9LFxufSk7XG5cbmV4cG9ydCB7IGJsb2dUaGVtZSB9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFpUixTQUFTLG9CQUFvQjs7O0FDQzlTLFNBQVMsc0JBQXNCO0FBaUIvQixJQUFNLFlBQVksZUFBZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVkvQixRQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFJTixXQUFXO0FBQUEsTUFDVCxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsSUFDUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFLRjtBQUFBO0FBQUEsRUFHQSxZQUFZO0FBQUE7QUFBQSxFQUdaLFFBQVE7QUFBQTtBQUFBLEVBR1IsUUFBUTtBQUFBLElBQ047QUFBQSxNQUNFLFVBQVU7QUFBQSxNQUNWLEtBQUs7QUFBQSxNQUNMLFFBQ0U7QUFBQSxNQUNGLEtBQUs7QUFBQSxJQUNQO0FBQUEsSUFDQTtBQUFBLE1BQ0UsVUFBVTtBQUFBLE1BQ1YsS0FBSztBQUFBLE1BQ0wsUUFBUTtBQUFBLE1BQ1IsS0FBSztBQUFBLElBQ1A7QUFBQSxFQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFvQ0YsQ0FBQzs7O0FEdkZELElBQU8saUJBQVEsYUFBYTtBQUFBO0FBQUEsRUFFMUIsU0FBUztBQUFBO0FBQUEsRUFFVCxNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUE7QUFBQSxFQUViLE1BQU07QUFBQTtBQUFBO0FBQUEsSUFHSixDQUFDLFFBQVEsRUFBRSxLQUFLLFFBQVEsTUFBTSxZQUFZLENBQUM7QUFBQSxFQUM3QztBQUFBLEVBQ0EsYUFBYTtBQUFBO0FBQUEsSUFFWCxTQUFTO0FBQUEsTUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDO0FBQUEsTUFDWixPQUFPO0FBQUEsSUFDVDtBQUFBO0FBQUEsSUFFQSxrQkFBa0I7QUFBQSxJQUNsQixrQkFBa0I7QUFBQSxJQUNsQixpQkFBaUI7QUFBQTtBQUFBLElBR2pCLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFNTixLQUFLO0FBQUEsTUFDSCxFQUFFLE1BQU0sZ0JBQU0sTUFBTSxJQUFJO0FBQUEsTUFDeEIsRUFBRSxNQUFNLDRCQUFRLE1BQU0seUJBQXlCO0FBQUEsSUFDakQ7QUFBQSxJQUNBLGFBQWE7QUFBQSxNQUNYO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
