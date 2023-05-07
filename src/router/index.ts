import { createRouter, createWebHistory } from 'vue-router'
import { constantRoutes } from './constantRoutes'
import { asyncRoutes } from '@/mock/asyncRoutes'
export let routes = constantRoutes.concat(asyncRoutes)
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
})

export default router
