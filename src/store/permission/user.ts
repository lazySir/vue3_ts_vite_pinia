import { defineStore } from 'pinia'
import { ElMessage } from 'element-plus'
import { reqGetUserList, reqUpdateUser,reqDeleteUser} from '@/api/permission/user'
import { usePermissionRoleStore } from '@/store/permission/role'
const permissionRoleStore = usePermissionRoleStore()
export const usePermissionUserStore = defineStore('permissionUser', {
  state: () => {
    return {
      userList: [],
      roleList: [],
    }
  },
  getters: {},
  actions: {
    //获取用户列表
    async getUserList() {
      //发送请求获取用户列表
      const res: any = await reqGetUserList()
      if (res.code == 200) {
        this.userList = res.data
        //发送请求获取角色列表
        await permissionRoleStore.getRoleList()
        this.roleList = permissionRoleStore.roleList
        //遍历userList，添加roleList数组， 如果userList里的roleIdList和roleList里的id相同，就把roleList里的name添加到userList里的roleList里
        this.userList.forEach((item: any) => {
          item.roleList = []
          item.roleIdList.forEach((id: number) => {
            this.roleList.forEach((role: any) => {
              if (id == role.roleId) {
                item.roleList.push(role)
              }
            })
          })
        })
      }
    },
    //更新用户
    async updateUser(user: any) {
      const res: any = await reqUpdateUser(user)
      if (res.code == 200) {
        ElMessage.success('更新用户成功')
        // 这里不需要 await
        this.getUserList()
      }
    },
    //删除用户
    async deleteUser(username:any){
      const res:any = await reqDeleteUser(username)
      if(res.code == 200){
        ElMessage.success(res.message)
        this.getUserList()
      }else{
        ElMessage.error(res.message)
      }
    }
  },
})
