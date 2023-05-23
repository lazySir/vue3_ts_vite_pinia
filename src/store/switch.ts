import { defineStore } from 'pinia'
export const useSwitchStore = defineStore('switch', {
  state: () => {
    return {
      dark: false, //暗色模式
      os: false, //跟随系统
    }
  },
  getters: {
    //当night为true时，返回success，否则返回info
    nightClass: (state) => (state.dark ? 'info' : 'success'),
    //当night为true时，返回dark，否则返回light
    nightTheme: (state) => (state.dark ? 'dark' : 'light'),
  },
  actions: {
    changeDark() {
      //获取html根节点
      let html = document.documentElement
      this.dark ? html.classList.add('dark') : html.classList.remove('dark')
    },

    changeOS() {
      const match = window.matchMedia('(prefers-color-scheme: dark)')

      // 创建一个回调函数，当系统颜色主题变化时更新应用的颜色主题
      const updateTheme = (event: any) => {
        this.dark = event.matches
        this.changeDark()
      }

      // 设置初始主题
      updateTheme(match)

      // 添加事件监听器
      match.addEventListener('change', updateTheme)

      //如果暗夜模式打开则关闭
      if (this.dark) {
        this.dark = !this.dark
      }

      //如果跟随系统关闭，则恢复light模式
      if (!this.os) {
        this.dark = false
        this.changeDark()
      }
    },
  },
})
