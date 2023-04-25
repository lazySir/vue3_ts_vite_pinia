import { createRouter, createWebHistory } from 'vue-router'
const Layout = () => import('@/layouts/index.vue')
const Home = () => import('@/views/home/index.vue')
const NotFound = () => import('@/views/404.vue')
const Other1 = () => import('@/views/other1.vue')
const Other2 = () => import('@/views/other2.vue')

export const routes: any = [
  {
    path: '/',
    name: 'Home',
    icon: 'HomeFilled',
    title: '首页',
    component: Layout,
    redirect: '/dashboard', //重定向
    children: [{ path: 'dashboard', name: 'Dashboard', component: Home }],
  },
  //权限管理
  {
    path: '/permission',
    name: 'Permission',
    icon: 'Lock',
    title: '权限管理',
    component: Layout,
    children: [
      { path: 'user', name: 'User', title: '用户管理', icon: 'User', component: () => import('@/views/permission/user/index.vue') },
      { path: 'role', name: 'Role', title: '角色管理', icon: 'Avatar', component: () => import('@/views/permission/role/index.vue') },
      { path: 'menu', name: 'Menu', title: '菜单管理', icon: 'Menu', component: () => import('@/views/permission/menu/index.vue') },
    ],
  },
  {
    path: '/ecahrts',
    name: 'Ecahrts',
    icon: 'Histogram',
    title: 'Ecahrts',
    component: Layout,
    redirect: '/ecahrts/plan1',
    children: [
      {
        path: 'plan1',
        name: 'Plan1',
        component: () => import('@/views/echarts/index.vue'),
      },
    ],
  },
  {
    path: '/about',
    name: 'About',
    icon: 'UserFilled',
    title: '关于',
    redirect: '/about/case', //重定向
    component: Layout,
    children: [
      {
        path: 'case',
        name: 'About',
        component: () => import('@/views/about.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
  },
  // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  {
    path: '/superTable',
    name: 'SuperTable',
    title: '超级表格',
    component: Layout,
    icon: 'MessageBox',
    redirect: '/superTable/proTable', //重定向
    children: [
      {
        path: 'proTable',
        name: 'ProTable',
        title: '使用ProTable',
        icon: 'Menu',
        component: () => import('@/views/superTable/proTable/index.vue'),
      },
    ],
  },
  {
    path: '/other',
    name: 'Other',
    title: '其他',
    component: Layout,
    icon: 'Location',
    children: [
      {
        path: 'other1',
        name: 'Other1',
        title: '页面1',
        icon: 'Menu',
        component: Other1,
      },
      {
        path: 'other2',
        name: 'Other2',
        title: '页面2',
        icon: 'Menu',
        component: Other2,
      },
    ],
  },
]

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
})

export default router
