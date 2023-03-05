import { createRouter, createWebHistory } from 'vue-router'
const Layout = () => import('@/components/layout/index.vue')
const Home = () => import('@/views/Home.vue')
const NotFound = () => import('@/views/404.vue')
const Other1 = ()=>import('@/views/other1.vue')
const Other2  =()=>import('@/views/other2.vue')
const about = ()=>import('@/views/about.vue')
export const routes: any = [
  {
    path: '/',
    name: 'Home',
    icon: 'House',
    title:'首页',
    component: Layout,
    redirect: '/dashboard', //重定向
    children: [{ path: 'dashboard', name: 'Dashboard', component: Home, meta: { title: '首页', icon: 'el-icon-s-home' } }],
  },
  {
    path:'/about',
    name:'About',
    icon:'User',
    title:'关于',
    redirect: '/about/about', //重定向
    component:Layout,
    children:[{
      path:'about',
      name:'About',
      component:about
    }]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/loginAndRegister/index.vue'),
  },
  // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  {
    path:'/other',
    name:'Other',
    title:'其他',
    component:Layout,
    icon:'Location',
    children:[{
      path:'other1',
      name:'Other1',
      title:'页面1',
      component:Other1
    },
    {
      path:'other2',
      name:'Other2',
      title:'页面2',
      component:Other2
    }
  ]
  }
]

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
})

export default router
