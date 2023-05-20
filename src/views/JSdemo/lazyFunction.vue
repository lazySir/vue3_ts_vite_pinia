<template>
  <el-card class="content">
    <p>随机文本：{{ randomString }}</p>
    <el-button @click="copyText(randomString)" type="primary">复制文本</el-button>
    <el-button @click="refresh" >刷新文本</el-button>
    <el-input v-model="text" type="text" placeholder="测试复制结果" />
  </el-card>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
const randomString = ref()
const text = ref()
onMounted(() => {
  getRandomString()
})
//随机生成字符串
function getRandomString() {
  randomString.value = Math.random().toString(36).slice(2, 8).padEnd(6, '0')
}
//复制文本  ：惰性函数
const copyText = (function () {
  if (navigator.clipboard) {
    //非ie模式
    return (text:any) => {
      navigator.clipboard.writeText(text)
    }
  } else {
    //ie模式
    return (text:any) => {
      const input = document.createElement('input')
      input.setAttribute('value', text)
      document.body.appendChild(input)
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input)
    }
  }
})()
//刷新
const refresh = () => {
  getRandomString()
  //清空输入框
  text.value = ''
}
</script>
<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  .el-button {
    margin-top: 10px;
    margin-bottom: 10px;
    height: 40px;
    width: 100px;
  }
}
</style>
