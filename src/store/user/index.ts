import { defineStore } from 'pinia'
import { reqLogin, reqRegister, reqLogout } from '@/api/user'
import { ElMessage } from 'element-plus'
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
      token: '',
      avatar: '',
      username: '',
      role: '',
      email: '',
    }
  },
  //相当于computed
  getters: {
    //获取本地存储空间的user
  },

  //相当于methods
  actions: {
    //登录
    async login(username: string, password: string) {
      //请求登录接口
      const results: any = await reqLogin(username, password)
      if (results.code == 200) {
        //存储信息
        this.token = results.token
        this.avatar = results.avatar
        this.username = results.username
        this.role = results.role
        this.email = results.email
        ElMessage.success(results.message)
        //跳转到首页
        this.router.push('/')
      } else {
        ElMessage.error(results.message)
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
        ElMessage.success(results.message)
        //重置state  //需要放在前面 不然会重新加载到本地存储
        this.$reset()
        //清空数据绘画存储空间 key为user
        sessionStorage.removeItem('user')
        //跳转到登录页面
        this.router.push('/login')
      }
    },
  },
})
