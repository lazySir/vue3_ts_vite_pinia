import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//windcss
import WindiCSS from 'vite-plugin-windicss'
//node的path模块
import path from 'path'
//引入vie-plugin-mock
import { viteMockServe } from 'vite-plugin-mock'
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
  ],
  server: {
    hmr: true,
    //vue3 vite配置热更新不用手动刷新
    // Listening on all local IPs
    // host: true,
  },

  resolve: {
    //配置别名
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    //配置文件扩展名
    // extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
  },
})
