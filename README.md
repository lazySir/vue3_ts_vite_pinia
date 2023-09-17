![image](https://github.com/lazySir/vue3_ts_vite_pinia/assets/101635531/94333494-68b4-45f8-aa55-ec6ab77b815e)# 一、项目依赖
## 1.主要依赖
   1. @element-plus/icons-vue: Element Plus 组件库的 Vue 图标集合插件。
   2. @vueuse/core: 提供了一组常用的 Vue 3 Composition API 实用工具函数。
   3. axios: 用于进行 HTTP 请求的库。
   4. echarts: 基于 JavaScript 的可视化图表库，用于创建丰富的数据可视化。
   5. echarts-liquidfill: ECharts 的液态填充图插件，用于创建流体效果的图表。
   6. element-plus: 基于 Vue 3 的 UI 组件库，提供了一组强大的可定制的 UI 组件。
   7. mockjs: 用于生成随机数据和模拟 HTTP 请求的库。
   8. nprogress: 用于在页面加载期间显示进度条的轻量级库。
   9. pinia: Vue 3 的状态管理库，提供了类似于 Vuex 的功能。
   10. pinia-plugin-persistedstate: 用于在 Pinia 中实现状态持久化的插件。
   11. scss: Sass 预处理器的解析器，用于编译 SCSS 样式文件。
   12. unocss: 一个零配置的工具，用于对 CSS 进行解析和处理。
   13. vite-plugin-mock: Vite 的插件，用于在开发期间模拟 API 接口。
## 2.Vue 相关依赖
   1. vue: Vue.js 的核心库。
   2. vue-i18n: Vue.js 的国际化插件，用于实现多语言支持。
   3. vue-router: Vue.js 的官方路由库，用于实现单页面应用的路由。
## 3.开发相关依赖
   1. @iconify/json: 包含数千个图标集合的 JSON 文件。
   2. @types/mockjs: Mock.js 的 TypeScript 类型定义文件。
   3. @types/node: Node.js 的 TypeScript 类型定义文件。
   4. @types/nprogress: NProgress 的 TypeScript 类型定义文件。
   5. @unocss/preset-icons: UnoCSS 预设图标插件，提供了一组常见的图标。
   6. @vitejs/plugin-vue: Vite 的 Vue 插件，用于支持 Vue 单文件组件。
   7. typescript: JavaScript 的超集，用于提供静态类型检查和编译时类型检查。
   8. unplugin-auto-import: Vite 的插件，用于自动导入模块和组件。
   9. unplugin-icons: Vite 的插件，用于快速导入图标。
   10. unplugin-vue-components: Vite 的插件，用于自动导入 Vue 组件。
   11. vite: 快速、简单且功能强大的 Web 开发构建工具。
   12. vue-tsc: 用于对 Vue 3 单文件组件进行类型检查的编译器。

# 二、运行与构建

## 1.下载依赖

```
yarn add or npm i 
```
## 2.说明
dev: 该命令使用 Vite 构建工具启动开发服务器。在开发模式下，它会监视你的文件更改并实时重新加载应用程序。使用此命令可以在开发过程中进行实时预览和调试。

build: 该命令用于构建生产环境的应用程序。它首先使用 vue-tsc 编译器对 Vue 3 单文件组件进行类型检查，确保类型的一致性。然后使用 Vite 构建工具进行项目的静态资源打包和优化，生成用于部署的最终生产版本。

preview: 该命令用于在本地预览构建后的生产应用程序。它通过使用 Vite 构建工具的预览功能，在本地启动一个服务器来提供构建后的应用程序。这个命令可以帮助你在部署之前检查生产版本的应用程序是否正常运行。

这些脚本命令可以通过在终端中运行 npm run dev、npm run build 和 npm run preview 来调用。其中，npm run 是 npm 提供的一种运行项目中定义的脚本命令的方式。


# 三、运行截图

## 1. 登录与注册

![image](https://github.com/lazySir/vue3_ts_vite_pinia/assets/101635531/b38f7873-19b8-4720-8323-48fc7fbef464)

![image](https://github.com/lazySir/vue3_ts_vite_pinia/assets/101635531/1f0310c6-e8c1-46af-9cd4-67ee94679b7c)

## 2.布局相关

![image](https://github.com/lazySir/vue3_ts_vite_pinia/assets/101635531/d6348e92-fe6d-4034-81f2-340146e841df)

![image](https://github.com/lazySir/vue3_ts_vite_pinia/assets/101635531/e4d66c15-f6e4-4d3f-af23-9949ed0dfd1b)

## 3.数据大图

![image](https://github.com/lazySir/vue3_ts_vite_pinia/assets/101635531/5120dcc1-30cb-4422-a8b8-2d1958dfecd8)

## 4.权限管理

![image](https://github.com/lazySir/vue3_ts_vite_pinia/assets/101635531/ca497ce5-4720-472e-90b9-97965ff4d64c)

![image](https://github.com/lazySir/vue3_ts_vite_pinia/assets/101635531/b5b0f0c0-afb7-41ab-a43f-3066bba53445)

![image](https://github.com/lazySir/vue3_ts_vite_pinia/assets/101635531/d2ea62b7-d18d-4b5f-83ec-bd38fa06dcaa)

![image](https://github.com/lazySir/vue3_ts_vite_pinia/assets/101635531/85af53e3-c7a5-4fcd-8a46-b9a414236e0e)

![image](https://github.com/lazySir/vue3_ts_vite_pinia/assets/101635531/8bac66aa-63e5-4115-a97d-7a1b93c2f5aa)

## 5.其他

![image](https://github.com/lazySir/vue3_ts_vite_pinia/assets/101635531/912fe8d2-3631-4b20-b53c-42a9eadd6aee)
