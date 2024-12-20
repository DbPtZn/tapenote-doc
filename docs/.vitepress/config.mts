import { defineConfig } from 'vitepress'
// import { set_sidebar } from './gen_sidebar'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "筆記映畫 Tapenote",
  lang: 'zh-CN',
  description: [
    'tapenote',
    'note',
    'H5-editor',
    'Inverted teaching',
    'Flipped Classroom',
  ].join(' '),
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
  ],
  themeConfig: {
    siteTitle: '筆記映畫',
    logo: '/logo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '文档', link: '/guide/doc/index' },
      { text: '案例', link: '/guide/example' },
      { 
        text: '关于',
        items: [
          { text: '博客', link: 'https://platform.tapenote.cn/#/PXYkjC8e' },
          { text: '联系方式', link: '/guide/contact/index' },
          // { text: '所有文章', link: '/guide/post/index' } // 暂不使用
        ]
      }
    ],

    sidebar: [
      {
        base: '/guide/intro',
        text: '简介',
        items: [
          { text: '什么是笔记映画？', link: '/what' },
        ]
      },
      {
        base: '/guide/doc',
        text: '文档',
        items: [
          { text: '开始', link: '/start' },
          { text: '下载', link: '/download' },
          { text: '配置', link: '/config' },
        ]
      },
      {
        base: '/guide/example',
        text: '版本与计划',
        items: [
          { text: '开始', link: '/start' },
          { text: '下载', link: '/download' },
          { text: '配置', link: '/config' },
        ]
      }
    ],
    footer: {
      message: 'Copyright © 2024-Present Tapenote',
      copyright: '<a style="text-decoration:none;" href="https://beian.mps.gov.cn/#/query/webSearch?code=44051502000595" rel="noreferrer" target="_blank"><img style="display:inline;height:16px;width:16px;margin-right:3px;margin-bottom:2px;" src="./备案图标.png" alt="police" style="vertical-align:middle;" />粤公网安备44051502000595</a> | <a href="https://beian.miit.gov.cn" style="text-decoration:none;">粤ICP备2024238845号</a>'
    },

    socialLinks: [
      { 
        icon: {
          svg: '<svg t="1700588863612" class="icon" viewBox="0 0 1129 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="22118" width="64" height="64"><path d="M 234.909 9.65619 a 80.4683 80.4683 0 0 1 68.398 0 a 167.374 167.374 0 0 1 41.8435 30.5779 l 160.937 140.82 H 621.156 L 782.093 40.2341 a 168.983 168.983 0 0 1 41.8435 -30.5779 a 80.4683 80.4683 0 0 1 107.023 66.7887 a 80.4683 80.4683 0 0 1 -17.703 53.9138 a 449.818 449.818 0 0 1 -35.406 32.1873 a 232.553 232.553 0 0 1 -22.5311 18.5077 h 100.585 a 170.593 170.593 0 0 1 118.288 53.1091 A 171.397 171.397 0 0 1 1128.11 352.451 v 462.693 a 325.897 325.897 0 0 1 -4.02342 70.0074 a 178.64 178.64 0 0 1 -80.4683 112.656 a 173.007 173.007 0 0 1 -92.5385 25.7499 H 212.377 a 341.186 341.186 0 0 1 -72.4215 -4.02342 a 177.835 177.835 0 0 1 -111.046 -80.4683 A 172.202 172.202 0 0 1 1.55049 846.526 V 388.662 A 360.498 360.498 0 0 1 1.55049 321.873 a 177.03 177.03 0 0 1 160.937 -143.234 h 105.413 c -16.8983 -12.0702 -31.3826 -26.5545 -46.6716 -39.4295 a 80.4683 80.4683 0 0 1 -25.7499 -65.984 A 80.4683 80.4683 0 0 1 234.909 9.65619 M 216.401 321.873 a 80.4683 80.4683 0 0 0 -63.5699 57.9372 a 108.632 108.632 0 0 0 0 30.5779 v 380.615 a 80.4683 80.4683 0 0 0 55.5231 80.4683 a 106.218 106.218 0 0 0 34.6014 5.63278 h 654.207 a 80.4683 80.4683 0 0 0 76.4449 -47.4763 a 112.656 112.656 0 0 0 8.04683 -53.1091 v -354.06 a 135.187 135.187 0 0 0 0 -38.6248 a 80.4683 80.4683 0 0 0 -52.3044 -54.7184 a 129.554 129.554 0 0 0 -49.8903 -7.24215 H 254.221 a 268.764 268.764 0 0 0 -37.8201 0 Z m 0 0" fill="#707070" p-id="22119" data-spm-anchor-id="a313x.search_index.0.i16.7c4e3a81HbvERG" class="selected"></path><path d="M 348.369 447.404 a 80.4683 80.4683 0 0 1 55.5231 18.5077 a 80.4683 80.4683 0 0 1 28.1639 59.5465 v 80.4683 a 80.4683 80.4683 0 0 1 -16.0937 51.4997 a 80.4683 80.4683 0 0 1 -131.968 -9.65619 a 104.609 104.609 0 0 1 -10.4609 -54.7184 v -80.4683 a 80.4683 80.4683 0 0 1 70.0074 -67.5934 Z m 416.021 0 a 80.4683 80.4683 0 0 1 86.1011 75.6402 v 80.4683 a 94.1479 94.1479 0 0 1 -12.0702 53.1091 a 80.4683 80.4683 0 0 1 -132.773 0 a 95.7573 95.7573 0 0 1 -12.8749 -57.1325 v -80.4683 a 80.4683 80.4683 0 0 1 70.0074 -70.8121 Z m 0 0" fill="#707070" p-id="22120" data-spm-anchor-id="a313x.search_index.0.i18.7c4e3a81HbvERG" class="selected"></path></svg>'
        }, 
        link: 'https://platform.tapenote.cn' 
      },
      { icon: 'github', link: 'https://github.com/DbPtZn/tapenote' }
    ],
    search: {
      // 使用本地搜索
      provider: 'local'
    }
  },
})
