import { defineStore } from 'pinia'
export const useTagBoxStore = defineStore('tagBox', {
  state: () => {
    return {
      tagList: [
        {
          name: 'Home',
          meta: {
            title: '首页',
          },
          icon: 'i-material-symbols:home',
        },
      ],
      refresh:true
    }
  },
  getters: {},
  actions: {
    //添加tag
    pushTag(route: any) {
      //如果tagList中已经存在该路由则不再添加
      if (this.tagList.some((item: any) => item.name === route.name)) return
      //将name，title以及如果存在icon放入tagList
      this.tagList.push(route)
    },
    //删除tag
    deleteTag(index: number) {
      //删除tagList中的某一项
      this.tagList.splice(index, 1)
      //将页面跳转到前一个路由
      this.router.push({
        name: this.tagList[index - 1].name,
      })
    },
    //刷新tag
    pushRoute(name: string) {
      this.router.push({
        name,
      })
    },
    //刷新
    changeRefresh(){
      this.refresh=!this.refresh
    }
  },
})
