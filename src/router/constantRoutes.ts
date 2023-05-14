const Layout = () => import('@/layouts/index.vue')

export const constantRoutes: any = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
  },
  // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/views/404/index.vue') },
]
