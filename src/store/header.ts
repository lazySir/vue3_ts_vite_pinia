import { defineStore } from 'pinia'
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const toggleDark = useToggle(isDark)

export const useHeaderStore = defineStore('header', {
  state: () => {
    return {
      night: false,
    }
  },
  getters: {
    //当night为true时，返回success，否则返回info
    nightClass: (state) => (state.night ? 'info' : 'success'),
    //当night为true时，返回dark，否则返回light
    nightTheme: (state) => (state.night ? 'dark' : 'light'),
  },
  actions: {
    changeTime() {
      toggleDark()
      //这段话不用写 el-switch好像自动写了
      // this.night = !this.night
    },
  },
})
