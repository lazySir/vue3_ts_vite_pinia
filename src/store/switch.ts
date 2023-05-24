import { defineStore } from 'pinia'

export const useSwitchStore = defineStore('switch', {
  state: () => {
    // 从localStorage中获取初始状态
    const dark = localStorage.getItem('dark') === 'true' ? true : false;
    const os = localStorage.getItem('os') === 'true' ? true : false;

    // 若是暗夜模式，需要立刻改变主题
    if(dark) {
      let html = document.documentElement
      html.classList.add('dark')
    }

    return {
      dark: dark,
      os: os,
    }
  },
  getters: {
    nightClass: (state) => (state.dark ? 'info' : 'success'),
    nightTheme: (state) => (state.dark ? 'dark' : 'light'),
  },
  actions: {
    changeDark() {
      //获取html根节点
      let html = document.documentElement
      this.dark ? html.classList.add('dark') : html.classList.remove('dark')
      
      //在localStorage中存储状态
      localStorage.setItem('dark', this.dark ? 'true' : 'false')
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
    
      //在localStorage中存储状态
      localStorage.setItem('os', this.os ? 'true' : 'false')
    },
    
  },
})
