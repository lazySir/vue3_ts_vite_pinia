import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//windcss
import WindiCSS from 'vite-plugin-windicss'
//node的path模块
import path from 'path'
//引入vie-plugin-mock
import { viteMockServe } from 'vite-plugin-mock'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'

//自动引入elemnet-plus
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    //windcss
    WindiCSS(),
    //mock
    viteMockServe({
      // 更多配置见最下方
      supportTs: true,
      logger: false,
      mockPath: './mock/',
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [
        IconsResolver(),
        ElementPlusResolver()
      ],
    }),
    Icons({
      scale: 1.2,
      //将默认icon的长和高设置为20px
      defaultStyle: 'height:20px;width:20px;',

    }),
  ],
  server: {
    hmr: true,

    host:"0.0.0.0",
  },

  resolve: {
    //配置别名
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    //配置文件扩展名
    // extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/theme/element-dark.scss" as *;`,
      },
    },
  },
})
