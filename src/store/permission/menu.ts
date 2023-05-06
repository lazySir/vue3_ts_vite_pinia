import { defineStore } from 'pinia'
import { reqAddOrUpdateMenu, reqGetMenu,reqDeleteMenu } from '@/api/permission/menu'
import { ElMessage } from 'element-plus'
export const usePermissionMenuStore = defineStore('permissionMenu', {
  state: () => {
  return{
    menuList:[]
  }
  },
  getters: {},
  actions: {
    //获取菜单列表
    async getMenuList() {
      const results: any = await reqGetMenu()
      if (results.code == 200) {
        this.menuList = results.data
      }
    },
    //添加菜单或更新菜单
    async addOrUpdateMenu(val:any) {
      const results :any = await reqAddOrUpdateMenu(val)
      if (results.code == 200) {
        //成功
        ElMessage.success(results.message)
        //重新获取菜单列表
        this.getMenuList()
      }
    },
    //删除菜单
    async deleteMenu(val:any) {
      const results :any = await reqDeleteMenu(val)
      if (results.code == 200) {
        //成功
        ElMessage.success(results.message)
        //重新获取菜单列表
        this.getMenuList()
      }
    }
  },
})