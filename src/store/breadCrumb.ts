import { routes } from '@/router'
import { defineStore } from 'pinia'
export const useBreadCrumbStore = defineStore('breadCrumb', {
  state: () => {
    return {
      breadCrumbList: [
        {
          path: '/',
          name: 'Home',
          icon: 'House',
          title: '首页',
          redirect: '/dashboard', //重定向
          children: [{ path: 'dashboard', name: 'Dashboard' }],
        },
      ],
    }
  },
  getters: {},
  actions: {
    addBreadCrumb(routeName: any) {
      this.$reset()
      if (routeName != 'Dashboard') {
        let newRoutes = [...routes]
        //去除没有children的项目
        newRoutes = newRoutes.filter((item: any) => {
          return item.children
        })
        newRoutes.forEach((item: any) => {
          if (item.name === routeName) {
            this.breadCrumbList.push(item)
          } else {
            item.children.forEach((item2: any) => {
              if (item2.name === routeName) {
                this.breadCrumbList.push(item)
                this.breadCrumbList.push(item2)
              }
            })
          }
        })
      }
    },
    //跳转路由
    pushPath(route: any) {
      this.router.push({ name: route.name })
    },
  },
})
