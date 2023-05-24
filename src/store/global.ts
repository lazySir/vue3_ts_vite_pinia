import { defineStore } from 'pinia'
import { useAsideStore } from './aside'
export const useGolbalStore = defineStore('globalStore', {
  state: () => {
    return {
      //侧边栏是否折叠
      isCollapse: false,
      //是否显示面包屑
      isShowBread: true,
      //是否显示面包屑图标
      isShowBreadIcon: true,
      //是否显示标签栏
      isShowTab: true,
      //是否显示标签栏图标
      isShowTabIcon: true,
      //是否显示页脚
      isShowFooter: true,
    }
  },

  getters: {},

  actions: {
    //改变侧边栏折叠状态
    changeCollapse() {
      const asideStore = useAsideStore()
      asideStore.changeCollapse()
    },
  },
})
