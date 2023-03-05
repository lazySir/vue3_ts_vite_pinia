import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//导入所有图标并进行全局注册。
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
export const setupElementPlus = (app: any) => {
  //注册图标
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
  //使用element-plus组件
  app.use(ElementPlus)
}
