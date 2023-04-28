import { defineStore } from 'pinia'
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const toggleDark = useToggle(isDark)
function getNight() {
  let flag = true
  if (window.localStorage.getItem('vueuse-color-scheme') == 'auto') flag = false
  return flag
}
export const useHeaderStore = defineStore('header', {
  state: () => {
    return {
      night: getNight(),
    }
  },
  getters: {
    //当night为true时，返回success，否则返回info
    nightClass: (state) => (state.night ? 'info' : 'success'),
    //当night为true时，返回dark，否则返回light
    nightTheme: (state) => (state.night ? 'dark' : 'light'),
  },
  actions: {
    changeTheme() {
      toggleDark()
      //这段话不用写 el-switch好像自动写了
      // this.night = !this.night
    },
  },
})
