import { defineStore } from 'pinia'
import {reqGetRole} from '@/api/permission/role'
import {ElMessage} from 'element-plus'
export const usePermissionRoleStore = defineStore('permissionRole', {
  state: () => {
  return{
    roleList:[]
  }
  },
  getters: {},
  actions: {
    async getRoleList(){
      const res:any=await reqGetRole()
      if(res.code==200){
        this.roleList=res.data
        ElMessage.success(res.message)
      }

    }
 },
})