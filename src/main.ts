import { createApp } from 'vue'
// import './style.css'
import App from '@/App.vue'
import { setupPinia } from '@/utils/pinia'
import { setupElementPlus } from '@//utils/element-plus'
import router from '@/router'

const app = createApp(App)
//引入router
app.use(router)
//引入pinia
setupPinia(app)

//引入element-plus
setupElementPlus(app)
// element dark(内置暗黑模式)
import 'element-plus/theme-chalk/dark/css-vars.css'
//引入路由守卫
import './permission'


//引入windicss
// import 'virtual:windi.css'

//引入全局axios
// import requests from './utils/request'
// app.provide('requests',app.config.globalProperties.$requests=requests)
//引入mock
import '@/mock'

app.mount('#app')
