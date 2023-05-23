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
  let context: any
  if (immediate) {
    let t: any = null
    return function (this: any, ...args: any) {
      context = this // 保存正确的 this 上下文
      if (!t || Date.now() - t > delay) {
        fn.apply(context, args) // 使用保存的 context
        t = Date.now()
      }
    }
  } else {
    let timer: any = null
    return function (this: any, ...args: any) {
      context = this // 保存正确的 this 上下文
      if (timer) {
        return
      }
      timer = setTimeout(function () {
        fn.apply(context, args) // 使用保存的 context
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
