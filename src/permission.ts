import router from './router'


//全局前置导航守卫
router.beforeEach((to, from, next) => {

  const hasToken = sessionStorage.getItem('user')
  // token不存在
  if (!hasToken && to.name != 'Login') {
    //说明当前用户未登录应该跳转到登录页面
    next({ name: 'Login' })
  } else if (hasToken && to.name === 'Login') {
    //说明当前用户已经登录且要跳转到登录页面
    next({ name: 'Home' })
  } else {
    next()
  }
})
