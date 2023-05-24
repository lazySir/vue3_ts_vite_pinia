import { defineStore } from 'pinia'
import { useAsideStore } from './aside'
export const useGolbalStore = defineStore('globalStore', {
  state: () => {
    return {
      // 布局模式 (纵向：vertical | 经典：classic | 横向：transverse | 分栏：columns)
      layout: 'vertical',
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
    //改变布局模式
    setLayout(val: any) {
      this.layout = val
    },
  },
  persist: {
    storage: window.sessionStorage,
  },
})
