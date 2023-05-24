<template>
  <el-color-picker @change="setColor()" v-model="color" :predefine="predefineColors" show-alpha> </el-color-picker>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const color = ref('#409EFF')
//修改主题颜色
const setColor = () => {
  document.documentElement.style.setProperty('--el-color-primary', color.value)
  document.documentElement.style.setProperty('--el-color-danger', color.value)
  document.documentElement.style.setProperty('--el-color-success', color.value)
  document.documentElement.style.setProperty('--el-color-warning', color.value)
  document.documentElement.style.setProperty('--el-color-info', color.value)
}
const predefineColors = ref(['#ff4500', '#ff8c00', '#ffd700', '#90ee90', '#00ced1', '#1e90ff', '#c71585', 'rgb(255, 120, 0)', 'hsv(51, 100, 98)', 'hsl(181, 100%, 37%)'])
</script>
<style scoped></style>
