import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

//基于文件生成路由
import VueRouter from 'unplugin-vue-router/vite'

// 按需自动导入 Vite、Webpack 和 Rollup 的 API
import AutoImport from 'unplugin-auto-import/vite'
// 自动导入路由
import { VueRouterAutoImports } from 'unplugin-vue-router'
// 按需自动导入组件
import Components from 'unplugin-vue-components/vite'
// 自动导入组件
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// 自动导入布局
import Layouts from 'vite-plugin-vue-layouts'

// 添加 PWA 支持
import { VitePWA } from 'vite-plugin-pwa'
import UnoCSS from 'unocss/vite'
import { VueMcp } from 'vite-plugin-vue-mcp'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      /* options */
    }),
    vue(),
    vueJsx(),
    vueDevTools(),
    UnoCSS(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      imports: [
        // presets
        'vue',
        // 'vue-router',
        VueRouterAutoImports,
        '@vueuse/core',
      ],
      dts: true,
      resolvers: [ElementPlusResolver()],
    }),

    Components({
      resolvers: [ElementPlusResolver()],
      // 允许子目录作为组件前缀
      directoryAsNamespace: true,
      // 合并相同的前缀
      collapseSamePrefixes: true,
    }),
    Layouts({
      defaultLayout: 'default',
      layoutsDirs: 'src/layouts',
      pagesDirs: 'src/pages',
    }),
    VueMcp({}),
    VitePWA({
      manifest: {
        name: 'VUe App',
        short_name: 'Vite App',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      // 如果不需要给用户安装提示，autoUpdate
      // registerType: 'autoUpdate',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
