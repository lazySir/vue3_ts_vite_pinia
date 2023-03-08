import { defineStore } from 'pinia'
import { routes } from '@/router'
import {useTagBoxStore} from '@/store/tagBox'
const tagBoxStore = useTagBoxStore()
export const useAsideStore = defineStore('Aside', {
  state: () => {
    return {
      //侧边栏是否折叠
      isCollapse: false,
      routes,
    }
  },
  getters: {
    //没有子项的菜单 使用computed代替filter 返回routes数组中 routes.children与children.length===1
    noChildren(): any {
      return this.routes.filter((item: any) => item.children && item.children.length === 1)
    },
    //有子xiang的菜单 使用computed代替filter 返回routes数组中 routes.children与children.length>1
    hasChildren(): any {
      return this.routes.filter((item: any) => item.children && item.children.length > 1)
    },
  },
  actions: {
    //切换侧边栏折叠状态
    changeCollapse() {
      this.isCollapse = !this.isCollapse
    },
    //跳转路由
    pushPath(item: any) {
      //放入tagBox
      tagBoxStore.pushTag(item)
      this.router.push({
        name:item.name
      })
    },
  },
})
