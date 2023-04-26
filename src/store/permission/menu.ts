import { defineStore } from 'pinia'
import { reqGetMenu } from '@/api/permission'
export const usePermissionMenuStore = defineStore('permissionMenu', {
  state: () => {
  return{
    menuList:[]
  }
  },
  getters: {},
  actions: {
    async getMenuList() {
      const results: any = await reqGetMenu()
      if (results.code == 200) {
        this.menuList = results.data
      }
    },
  },
})