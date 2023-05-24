const Layout = () => import('@/layouts/index.vue')

export const constantRoutes: any = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录界面',
    },
    component: () => import('@/views/login/index.vue'),
  },
  // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
  { path: '/:pathMatch(.*)*', name: 'NotFound', meta: { title: '错误页面' }, component: () => import('@/views/404/index.vue') },
]
