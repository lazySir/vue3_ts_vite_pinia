const Layout = () => import('@/layouts/index.vue')
const Other1 = () => import('@/views/other1.vue')
const Other2 = () => import('@/views/other2.vue')
export let asyncRoutes: any = [
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
        title:'方案一',
        icon:'Menu',
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
        title: '测试1',
        icon:'Menu',
        component: () => import('@/views/about.vue'),
      },
    ],
  },
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
