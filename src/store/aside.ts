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
    //过滤掉非菜单路由
    filterRoutes(): any {
      return this.routes.filter((item: any) => item.children)
    }
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
