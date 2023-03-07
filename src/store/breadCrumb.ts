import { defineStore } from 'pinia'
export const useBreadCrumbStore = defineStore('breadCrumb', {
  state: () => {
    return {
      tabList: [
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
    //添加tab
    addTab(route: any, index: number) {
      //重置tabList
      this.$reset()
      if (route.name !== 'Home') {
        //判断route.name是否存在于tabList中
        const isExit = this.tabList.some((item: any) => {
          return item.name === route.name
        })
        if (!isExit) {
          this.tabList.push(route)
          if (index !== undefined) {
            this.tabList.push(route.children[index])
          }
        }
      }
    },
    //跳转路由
    pushPath(route:any){
      this.router.push({name:route.name})
    }
  },
})
