<template>
  <div class="content">
    <span>节流函数</span>
    <div class="box">
      <el-button :plain="true" @click="open">不使用防抖</el-button>
      <el-button @click="openT">立即触发形防抖</el-button>
      <el-button @click="openF">非立即触发防抖</el-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ElMessage } from 'element-plus'
//节流的最终形态：可选择是否立即触发
function throttle(fn: Function, delay: number, immediate = true) {
  //如果没有传immediate则默认true
  if (immediate) {
    let t: any = null
    return function (...args: any) {
      if (!t || Date.now() - t > delay) {
        //如果当前时间戳不存在或者当前时间戳减去上一次时间戳大于delay
        fn.apply(this, args) //执行函数
        t = Date.now() //得到当前的时间戳
      }
    }
  } else {
    //设置一个定时器id
    let timer: any = null
    return function (...args: any) {
      //如果timer值不是setTimeout返回的则直接返回不做处理
      if (timer) {
        return
      }
      timer = setTimeout(function () {
        fn.apply(null, args)
        timer = null
      }, delay)
    }
  }
}

const open = () => {
  ElMessage({
    message: '不使用节流立刻触发，使用节流则每隔1秒可重新触发',
    type: 'success',
  })
}
const openT = throttle(open, 1000, true)
const openF = throttle(open, 1000, false)
</script>
<style lang="scss" scoped>
.content {
  width: 100%;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .box {
    margin-top: 20px;
  }
}
</style>
