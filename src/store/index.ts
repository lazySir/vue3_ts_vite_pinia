import { defineStore } from 'pinia'
//1.定义容器
//参数1：容器的ID，必须唯一（可以自己取名），将来Pinia会把所有的容器挂在到跟容器
export const useMainStore = defineStore('main', {
  //相当于data
  //1.必须是函数，这样是为了在服务端渲染的时候便面交叉请求导致的数据状态污染
  //2.必须是箭头函数，这是为了更好的TS类型推导
  //3.返回值：一个函数，调用得到函数的返回值
  state: () => {
    return {
      count: 0,
      foo:'foo',
      arr:['学习']
    }
  },
  //相当于computed
  getters: {},
  //相当于methods
  actions: {
    changeState(){
      this.count++
      this.foo='hello'
      this.arr.push("hello")
    }
  },
})
//2.使用容器中的state

//3.修改state

//4.容器中的action的使用
