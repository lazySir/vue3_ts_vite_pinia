<template>
  <div class="content">
    <span>防抖函数</span>
    <div class="box">
      <el-button :plain="true" @click="open">不使用防抖</el-button>
      <el-button @click="open2">防抖</el-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ElMessage } from 'element-plus'
//防抖函数
const debounce = (callback: Function, delay: number) => {
  let timer: any;
  return function(this: any) {
    clearTimeout(timer);
    const args = arguments;
    timer = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
};


const open = () => {
  ElMessage({
    message: '不使用防抖立刻触发，使用防抖则从最后一次点击一秒后触发',
    type: 'success',
  })
}
const open2 = debounce(open, 1000)
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
