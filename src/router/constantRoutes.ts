const Layout = () => import('@/layouts/index.vue')

export const constantRoutes: any = [
  {
    path: '/',
    name: 'Home',
    icon: 'HomeFilled',
    title: '首页',
    component: Layout,
    redirect: '/dashboard', //重定向
    children: [{ path: 'dashboard', name: 'Dashboard', component: () => import('@/views/home/index.vue') }],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
  },
  // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/views/404/index.vue') },
]
