
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import './custom.css'
import './skip.css'
import { Divider, Support } from './components'
import { h } from 'vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/zh/guide/extending-default-theme 官方插槽查询
      'home-features-after': () => h(Divider, { style: { marginTop: '190px' } }),
    })
  },
  async enhanceApp({ app }) {
    // register your custom global components
    app.component('Divider', Divider).component('Support', Support)
  }
} satisfies Theme