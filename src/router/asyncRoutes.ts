const Layout = () => import('@/layouts/index.vue')
export let asyncRoutes: any = [
  //首页
  {
    path: '/',
    name: 'Home',
    icon: 'i-material-symbols:home',
    title: '首页',
    sort: 0,
    component: Layout,
    redirect: '/dashboard', //重定向
    children: [{ sort: 0, path: 'dashboard', name: 'Dashboard', component: () => import('@/views/home/index.vue') }],
  },
  //数据大屏
  {
    path: '/dataScreen',
    name: 'DataScreen',
    component: () => import('@/views/dataScreen/index.vue'),
    title: '数据大屏',
    icon: 'i-ic:baseline-monitor',
    sort: 1,
    children: [],
  },
  //权限管理
  {
    path: '/permission',
    name: 'Permission',
    icon: 'i-material-symbols:lock',
    title: '权限管理',
    component: Layout,
    sort: 2,
    children: [
      { sort: 1, path: 'user', name: 'User', title: '用户管理', icon: 'i-material-symbols:person', component: () => import('@/views/permission/user/index.vue') },
      { sort: 2, path: 'role', name: 'Role', title: '角色管理', icon: 'i-carbon:user-avatar-filled', component: () => import('@/views/permission/role/index.vue') },
      { sort: 3, path: 'menu', name: 'Menu', title: '菜单管理', icon: 'i-material-symbols:grid-view', component: () => import('@/views/permission/menu/index.vue') },
    ],
  },
  //echarts
  {
    path: '/ecahrts',
    name: 'Ecahrts',
    icon: 'i-fluent:data-histogram-24-filled',
    title: 'Ecahrts',
    component: Layout,
    sort: 3,
    redirect: '/ecahrts/plan1',
    children: [
      {
        path: 'plan1',
        name: 'Plan1',
        title: '方案一',
        icon: 'i-material-symbols:grid-view',
        sort: 1,
        component: () => import('@/views/echarts/index.vue'),
      },
    ],
  },
  //超级表格
  {
    path: '/superTable',
    name: 'SuperTable',
    title: '超级表格',
    component: Layout,
    icon: 'i-ep:message-box',
    sort: 4,
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

  //jsDemo
  {
    path: '/jsDemo',
    name: 'JsDemo',
    component: Layout,
    title: 'JS案例',
    icon: 'i-material-symbols:background-grid-small',
    redirect: '/jsDemo/mathRandom',
    sort: 5,
    children: [
      {
        path: 'mathRandom',
        name: 'MathRandom',
        component: () => import('@/views/JSdemo/index.vue'),
        title: 'random函数',
        icon: 'i-material-symbols:grid-view',
        sort: 1,
      },
      {
        path: 'lazyFunction',
        name: 'LazyFunction',
        component: () => import('@/views/JSdemo/lazyFunction.vue'),
        title: '惰性函数',
        icon: 'i-material-symbols:grid-view',
        sort: 2,
      },
      {
        path: 'debounce',
        name: 'Debounce',
        component: () => import('@/views/JSdemo/debounce.vue'),
        title: '防抖函数',
        icon: 'i-material-symbols:grid-view',
        sort: 3,
      },
      {
        path: 'throttle',
        name: 'Throttle',
        component: () => import('@/views/JSdemo/throttle.vue'),
        title: '节流函数',
        icon: 'i-material-symbols:grid-view',
        sort: 4,
      },
    ],
  },
  //cssDemo
  {
    path: '/cssDemo',
    name: 'CssDemo',
    component: Layout,
    title: 'CSS案例',
    icon: 'i-material-symbols:background-grid-small',
    redirect: '/cssDemo/flashLight',
    sort: 6,
    children: [
      {
        path: 'flashLight',
        name: 'FlashLight',
        component: () => import('@/views/cssDemo/flashLight.vue'),
        title: '手电筒效果',
        icon: 'i-material-symbols:grid-view',
        sort: 1,
      },
      {
        path: 'textPenetration',
        name: 'TextPenetration',
        component: () => import('@/views/cssDemo/textPenetration.vue'),
        title: '文字穿透',
        icon: 'i-material-symbols:grid-view',
        sort: 2,
      },
      {
        path: 'chatText',
        name: 'ChatText',
        component: () => import('@/views/cssDemo/chatText.vue'),
        title: 'chatGPT的输入框',
        icon: 'i-material-symbols:grid-view',
        sort: 3,
      },
    ],
  },
  //其他
  {
    path: '/other',
    name: 'Other',
    title: '其他',
    component: Layout,
    icon: 'i-basil:other-1-outline',
    sort: 7,
    redirect: '/other/embedded', //重定向
    children: [
      {
        path: 'embedded',
        name: 'Embedded',
        title: '内嵌页面',
        icon: 'i-material-symbols:grid-view',
        sort: 1,
        component: () => import('@/views/other/embedded/index.vue'),
      },
      {
        path: 'demo',
        name: 'Demo',
        title: '测试',
        icon: 'i-material-symbols:grid-view',
        sort: 2,
        component: () => import('@/views/other/demo/index.vue'),
      },
    ],
  },
]
