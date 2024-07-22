import { fileURLToPath, URL } from 'node:url'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueRouter from 'unplugin-vue-router/vite'
// 自动导入
import AutoImport from 'unplugin-auto-import/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'

// 组件自动注册 不需要import
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// import Icons from 'unplugin-icons/vite'
// import IconsResolver from 'unplugin-icons/resolver'

import Layouts from 'vite-plugin-vue-layouts'

import { VitePWA } from 'vite-plugin-pwa'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      /* options */
    }),
    vue(),
    vueJsx(),
    UnoCSS(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/ // .md
      ],
      imports: ['vue', VueRouterAutoImports, '@vueuse/core']
    }),
    Components({
      /* options */
      // 允许子目录作为组件的命名空间前缀
      directoryAsNamespace: true,
      // 折叠文件夹和组件的相同前缀(驼峰敏感)，以防止名称空间组件名称内的重复。
      collapseSamePrefixes: true,
      resolvers: [
        ElementPlusResolver()
        // 通过 unocss @iconify/json已引入不需要这里的配置
        // IconsResolver({
        //   prefix: 'icon'
        // })
      ]
    }),
    // Icons({
    //   // experimental
    //   autoInstall: true
    // }),
    Layouts({
      layoutsDirs: 'src/layouts',
      defaultLayout: 'default'
    }),
    VitePWA({
      // 自更新
      registerType: 'autoUpdate'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
