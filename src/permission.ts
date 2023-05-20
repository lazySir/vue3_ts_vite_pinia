import router from '@/router'
import { useUserStore } from '@/store/user'
import { constantRoutes } from '@/router/constantRoutes'
//全局前置导航守卫
router.beforeEach(async (to, from, next) => {
  const hasToken = sessionStorage.getItem('user')
  // token不存在
  if (!hasToken && to.name != 'Login') {
    //说明当前用户未登录应该跳转到登录页面
    next({ name: 'Login' })
  } else if (hasToken && to.name === 'Login') {
    //说明当前用户已经登录且要跳转到登录页面
    next({ name: 'Home' })
  } else {
    const userStore = useUserStore()
    //如果用户已经登录，且路由数量小于常态路由长度，就加载路由表
    if (userStore.resultRoutes.length > 0 && router.getRoutes().length <= constantRoutes.length) {
      //加载异步路由
      await userStore.loadRoutes()
      //跳转到刷新前的页面
      await router.replace(to.path)
    }
    next()
  }
})
