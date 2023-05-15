import { createApp } from 'vue'
// import './style.css'
import App from '@/App.vue'
import { setupPinia } from '@/utils/pinia'
import { setupElementPlus } from '@/utils/element-plus'
import router from '@/router'

const app = createApp(App)

//引入pinia
setupPinia(app)
//引入router
app.use(router)
//引入路由守卫
import './permission'
//全局引入element-ui图标组件库
setupElementPlus(app)
// 引入进度条样式
import 'nprogress/nprogress.css'
// element dark(内置暗黑模式)
import 'element-plus/theme-chalk/dark/css-vars.css'

// unocss
import 'virtual:uno.css'

//引入全局axios
// import requests from './utils/request'
// app.provide('requests',app.config.globalProperties.$requests=requests)
//引入mock
import '@/mock'

app.mount('#app')
