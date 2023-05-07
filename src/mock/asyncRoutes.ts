const Layout = () => import('@/layouts/index.vue')
const Other1 = () => import('@/views/other1.vue')
const Other2 = () => import('@/views/other2.vue')
export let asyncRoutes: any = [
  //权限管理
  {
    path: '/permission',
    name: 'Permission',
    icon: 'i-material-symbols:lock',
    title: '权限管理',
    component: Layout,
    sort: 1,
    children: [
      {   sort: 1,path: 'user', name: 'User', title: '用户管理', icon: 'i-material-symbols:person', component: () => import('@/views/permission/user/index.vue') },
      {   sort: 2,path: 'role', name: 'Role', title: '角色管理', icon: 'i-carbon:user-avatar-filled', component: () => import('@/views/permission/role/index.vue') },
      {   sort: 3,path: 'menu', name: 'Menu', title: '菜单管理', icon: 'i-material-symbols:grid-view', component: () => import('@/views/permission/menu/index.vue') },
    ],
  },
  {
    path: '/ecahrts',
    name: 'Ecahrts',
    icon: 'i-fluent:data-histogram-24-filled',
    title: 'Ecahrts',
    component: Layout,
    sort: 2,
    redirect: '/ecahrts/plan1',
    children: [
      {
        path: 'plan1',
        name: 'Plan1',
        title:'方案一',
        icon:'i-material-symbols:grid-view',
        sort: 1,
        component: () => import('@/views/echarts/index.vue'),
      },
    ],
  },
  {
    path: '/superTable',
    name: 'SuperTable',
    title: '超级表格',
    component: Layout,
    icon: 'i-ep:message-box',
    sort: 3,
    redirect: '/superTable/proTable', //重定向
    children: [
      {
        path: 'proTable',
        name: 'ProTable',
        title: '使用ProTable',
        icon: 'i-material-symbols:grid-view',
        sort: 1,
        component: () => import('@/views/superTable/proTable/index.vue'),
      },
    ],
  },
  {
    path: '/other',
    name: 'Other',
    title: '其他',
    component: Layout,
    icon: 'i-basil:other-1-outline',
    sort: 1,
    children: [
      {
        path: 'other1',
        name: 'Other1',
        title: '页面1',
        icon: 'i-material-symbols:grid-view',
        sort: 4,
        component: Other1,
      },
      {
        path: 'other2',
        name: 'Other2',
        title: '页面2',
        icon: 'i-material-symbols:grid-view',
        sort: 1,
        component: Other2,
      },
    ],
  },
]
