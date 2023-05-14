import { defineStore } from 'pinia'
import { reqLogin, reqRegister, reqLogout } from '@/api/user'
import { ElMessage } from 'element-plus'
import { asyncRoutes } from '@/router/asyncRoutes'
import { usePermissionRoleStore } from '@/store/permission/role'
import { constantRoutes } from '@/router/constantRoutes'
const permissionRoleStore = usePermissionRoleStore()
import _ from 'lodash'
//1.定义容器
//参数1：容器的ID，必须唯一（可以自己取名），将来Pinia会把所有的容器挂在到跟容器
export const useUserStore = defineStore('user', {
  // 开启数据持久化
  persist: {
    // enabled:true,
    storage: window.sessionStorage,
  },

  state: () => {
    return {
      userInfo: {
        avatar: '',
        username: '',
        name: '',
        email: '',
        roleIdList: [],
        createTime: '',
        token: '',
        updateTime: '',
      },
      resultRoutes: [],
      asyRoutes: [],
    }
  },
  //相当于computed
  getters: {},

  //相当于methods
  actions: {
    //登录
    async login(username: string, password: string) {
      //请求登录接口
      const results: any = await reqLogin(username, password)
      if (results.code == 200) {
        //存储信息
        this.userInfo = results.data
        //获取菜单id
        const menuIdList = await getMenuIdList(this.userInfo.roleIdList)
        //根据id过滤路由
        this.asyRoutes = await filterRoutes(asyncRoutes, menuIdList)
        this.resultRoutes = this.asyRoutes.concat(constantRoutes)
        this.resultRoutes.forEach((item) => {
          this.router.addRoute(item)
        })
        //跳转到首页
        this.router.push('/')
        return true
      } else {
        ElMessage.error(results.message)
        return false
      }
    },
    //注册
    async register(username: string, password: string, email: string) {
      //请求注册接口
      const results: any = await reqRegister(username, password, email)
      if (results.code == 200) {
        ElMessage.success(results.message)
        //跳转到登录页面
        return true
      } else {
        ElMessage.error(results.message)
        return false
      }
    },
    //退出登录
    async logout() {
      let results: any = await reqLogout()
      if (results.code == 200) {
        //删除路由
        this.asyRoutes.forEach((item: any) => {
          this.router.removeRoute(item.name)
        })
        //重置state  //需要放在前面 不然会重新加载到本地存储
        this.$reset()
        //清空数据绘画存储空间 key为user
        sessionStorage.removeItem('user')
        //跳转到登录页面
        this.router.push('/login')
        ElMessage.success(results.message)
      }
    },
  },
})
async function getMenuIdList(val: any) {
  //发送获取角色请求
  await permissionRoleStore.getRoleList()
  let menuIdList: any = []
  val.forEach((item: any) => {
    permissionRoleStore.roleList.forEach((item1: any) => {
      if (item == item1.roleId) {
        menuIdList.push(...item1.menuIdList)
      }
    })
  })
  //去重
  menuIdList = Array.from(new Set(menuIdList))
  return menuIdList
}
//过滤异步函数
function filterRoutes(routes: any, menuIds: any) {
  const newRoutes = _.cloneDeep(routes)
  return newRoutes.filter((route: any) => {
    // 如果当前路由在menuIds中，则保留
    if (menuIds.includes(route.menuId)) {
      return true
    }
    // 如果当前路由有子路由
    if (route.children) {
      // 过滤子路由
      route.children = filterRoutes(route.children, menuIds)
      // 如果过滤后的子路由数组不为空，则保留当前路由
      return route.children.length > 0
    }
    // 如果当前路由不在menuIds中，并且没有子路由，则不保留
    return false
  })
}
