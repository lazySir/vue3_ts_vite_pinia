import { defineStore } from 'pinia'
import {useTagBoxStore} from '@/store/tagBox'
import { useUserStore } from './user'
const tagBoxStore = useTagBoxStore()
export const useAsideStore = defineStore('Aside', {
  state: () => {
    return {
      //侧边栏是否折叠
      isCollapse: false,
    }
  },
  getters: {
    //过滤掉非菜单路由
    filterRoutes(): any {
      return this.routes.filter((item: any) => item.children)
    },
    routes() {
      // 实时引用 userStore.routes
      const userStore = useUserStore()
      return userStore.resultRoutes
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
