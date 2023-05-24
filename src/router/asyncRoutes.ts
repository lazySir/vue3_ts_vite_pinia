const Layout = () => import('@/layouts/index.vue')
export let asyncRoutes: any = [
  //首页
  {
    path: '/',
    name: 'Home',
    icon: 'i-material-symbols:home',
    meta: {
      title: '首页',
    },
    sort: 0,
    component: Layout,
    redirect: '/dashboard', //重定向
    children: [
      {
        sort: 0,
        path: 'dashboard',
        meta: {
          title: '首页',
        },
        icon: 'i-material-symbols:home',
        name: 'Dashboard',
        component: () => import('@/views/home/index.vue'),
      },
    ],
  },
  //数据大屏
  {
    path: '/dataScreen',
    name: 'DataScreen',
    component: () => import('@/views/dataScreen/index.vue'),
    meta: {
      title: '数据大屏',
    },
    icon: 'i-ic:baseline-monitor',
    sort: 1,
    children: [],
  },
  //权限管理
  {
    path: '/permission',
    name: 'Permission',
    icon: 'i-material-symbols:lock',
    meta: {
      title: '权限管理',
    },
    component: Layout,
    sort: 2,
    children: [
      { sort: 1, path: 'user', name: 'User', meta: { title: '用户管理' }, icon: 'i-material-symbols:person', component: () => import('@/views/permission/user/index.vue') },
      { sort: 2, path: 'role', name: 'Role', meta: { title: '角色管理' }, icon: 'i-carbon:user-avatar-filled', component: () => import('@/views/permission/role/index.vue') },
      { sort: 3, path: 'menu', name: 'Menu', meta: { title: '菜单管理' }, icon: 'i-material-symbols:grid-view', component: () => import('@/views/permission/menu/index.vue') },
    ],
  },
  //echarts
  {
    path: '/ecahrts',
    name: 'Ecahrts',
    icon: 'i-fluent:data-histogram-24-filled',
    meta: {
      title: '数据可视化',
    },
    component: Layout,
    sort: 3,
    redirect: '/ecahrts/plan1',
    children: [
      {
        path: 'plan1',
        name: 'Plan1',
        meta: {
          title: '方案一',
        },
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
    meta: {
      title: '超级表格',
    },
    component: Layout,
    icon: 'i-ep:message-box',
    sort: 4,
    redirect: '/superTable/proTable', //重定向
    children: [
      {
        path: 'proTable',
        name: 'ProTable',
        meta: {
          title: '使用ProTable',
        },

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
    meta: {
      title: 'JS案例',
    },
    icon: 'i-material-symbols:background-grid-small',
    redirect: '/jsDemo/mathRandom',
    sort: 5,
    children: [
      {
        path: 'mathRandom',
        name: 'MathRandom',
        component: () => import('@/views/JSdemo/index.vue'),

        meta: {
          title: 'random函数',
        },
        icon: 'i-material-symbols:grid-view',
        sort: 1,
      },
      {
        path: 'lazyFunction',
        name: 'LazyFunction',
        component: () => import('@/views/JSdemo/lazyFunction.vue'),
        meta: {
          title: '惰性函数',
        },
        icon: 'i-material-symbols:grid-view',
        sort: 2,
      },
      {
        path: 'debounce',
        name: 'Debounce',
        component: () => import('@/views/JSdemo/debounce.vue'),
        meta: {
          title: '防抖函数',
        },
        icon: 'i-material-symbols:grid-view',
        sort: 3,
      },
      {
        path: 'throttle',
        name: 'Throttle',
        component: () => import('@/views/JSdemo/throttle.vue'),
        meta: {
          title: '节流函数',
        },
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
    meta: {
      title: 'CSS案例',
    },
    icon: 'i-material-symbols:background-grid-small',
    redirect: '/cssDemo/flashLight',
    sort: 6,
    children: [
      {
        path: 'flashLight',
        name: 'FlashLight',
        component: () => import('@/views/cssDemo/flashLight.vue'),
        meta: {
          title: '手电筒效果',
        },
        icon: 'i-material-symbols:grid-view',
        sort: 1,
      },
      {
        path: 'textPenetration',
        name: 'TextPenetration',
        component: () => import('@/views/cssDemo/textPenetration.vue'),
        meta: {
          title: '文字穿透',
        },
        icon: 'i-material-symbols:grid-view',
        sort: 2,
      },
      {
        path: 'chatText',
        name: 'ChatText',
        component: () => import('@/views/cssDemo/chatText.vue'),
        meta: {
          title: 'chatGPT的输入框',
        },
        icon: 'i-material-symbols:grid-view',
        sort: 3,
      },
    ],
  },
  //其他
  {
    path: '/other',
    name: 'Other',
    meta: {
      title: '其他',
    },
    component: Layout,
    icon: 'i-basil:other-1-outline',
    sort: 7,
    redirect: '/other/embedded', //重定向
    children: [
      {
        path: 'embedded',
        name: 'Embedded',
        meta: {
          title: '内嵌页面',
        },
        icon: 'i-material-symbols:grid-view',
        sort: 1,
        component: () => import('@/views/other/embedded/index.vue'),
      },
      {
        path: 'demo',
        name: 'Demo',
        meta: {
          title: '测试',
        },
        icon: 'i-material-symbols:grid-view',
        sort: 2,
        component: () => import('@/views/other/demo/index.vue'),
      },
    ],
  },
]
