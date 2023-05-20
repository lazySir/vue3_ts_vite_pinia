import { defineStore } from 'pinia'
import { reqLogin, reqRegister, reqLogout } from '@/api/user'
import { ElMessage } from 'element-plus'
import { asyncRoutes } from '@/router/asyncRoutes'
import { usePermissionRoleStore } from '@/store/permission/role'
import { constantRoutes } from '@/router/constantRoutes'
import { usePermissionMenuStore } from '@/store/permission/menu'


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
        //加载异步路由
        await this.loadRoutes()
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
    //加载动态路由
    async loadRoutes() {
      //获取菜单id
      const menuIdList = await getMenuIdList(this.userInfo.roleIdList)
      const permissionMenuStore = usePermissionMenuStore()
      //发送请求获取排序后的路由
      await permissionMenuStore.getMenuList()
      const computedRoutes = permissionMenuStore.menuList
      //将排序后的路由和异步路由进行合并   ---获取更新后的路由
      this.asyRoutes = mergeArrays(asyncRoutes, computedRoutes)
      //重新排序
      this.asyRoutes = sortRoutes(this.asyRoutes)
      //根据id过滤路由
      this.asyRoutes = await filterRoutes(this.asyRoutes, menuIdList)
      this.resultRoutes = this.asyRoutes.concat(constantRoutes)
      //添加路由
      this.resultRoutes.forEach((item: any) => {
        this.router.addRoute(item)
      })
    },
  },
})

//获取菜单id
async function getMenuIdList(val: any) {
  const permissionRoleStore = usePermissionRoleStore()
  //发送获取角色请求
  await permissionRoleStore.getRoleList()
  let menuIdList: any = []
  val.forEach((item: any) => {
    permissionRoleStore.roleList
      .filter((item: any) => item.code == true)
      .forEach((item1: any) => {
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
function sortRoutes(routes: any) {
  routes.sort((a: any, b: any) => a.sort - b.sort)
  routes.forEach((route: any) => {
    if (route.children && route.children.length > 0) {
      sortRoutes(route.children)
    }
  })
  return routes
}
// 合并同类属性
const mergeArrays = (array1: any, array2: any) => {
  const mergeObjects = (obj1: any, obj2: any) => {
    const merged = { ...obj1, ...obj2 }
    if (obj1.children && obj2.children) {
      merged.children = obj1.children.map((child1: any) => {
        const child2 = obj2.children.find((child2: any) => child2.menuId === child1.menuId)
        return child2 ? mergeObjects(child1, child2) : child1
      })
    }
    return merged
  }

  return array1.map((obj1: any) => {
    const obj2 = array2.find((obj2: any) => obj2.menuId === obj1.menuId)
    return obj2 ? mergeObjects(obj1, obj2) : obj1
  })
}
