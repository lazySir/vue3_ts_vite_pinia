import { defineStore } from 'pinia'
import { reqGetRole,reqAddOrUpdateRole} from '@/api/permission/role'
import { ElMessage } from 'element-plus'
export const usePermissionRoleStore = defineStore('permissionRole', {
  state: () => {
    return {
      roleList: [],
    }
  },
  getters: {},
  actions: {
    //获取角色列表
    async getRoleList() {
      const res: any = await reqGetRole()
      if (res.code == 200) {
        this.roleList = res.data
      }
    },
    //新增或修改角色
    async addOrUpdateRole(val:any){
      const res: any = await reqAddOrUpdateRole(val)
      if (res.code == 200) {
        this.getRoleList()
        ElMessage.success(res.message)
      }
    }
  },
})
