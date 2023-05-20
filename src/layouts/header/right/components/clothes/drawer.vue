<template>
  <el-drawer size="18%" class="drawer" v-model="drawer">
    <template #header>
      <h1 class="title">布局设置</h1>
    </template>
    <template #default>
      <p>全局主题</p>
      <div class="drawer_item">
        <span>主题颜色</span>
        <el-color-picker @change="setColor()" v-model="color" :predefine="predefineColors" show-alpha> </el-color-picker>
      </div>
      <div class="drawer_item">
        <span>暗黑模式</span>
        <theme></theme>
      </div>
    </template>
  </el-drawer>
</template>
<script lang="ts" setup>
import { ref, defineExpose } from 'vue'
import theme from '@/components/switch.vue'
const drawer = ref(false)
const color = ref('#409EFF')
const predefineColors = ref(['#ff4500', '#ff8c00', '#ffd700', '#90ee90', '#00ced1', '#1e90ff', '#c71585', 'rgb(255, 120, 0)', 'hsv(51, 100, 98)', 'hsl(181, 100%, 37%)'])
const showDrawer = () => {
  drawer.value = true
}
//修改主题颜色
const setColor = () => {
  document.documentElement.style.setProperty('--el-color-primary', color.value)
  document.documentElement.style.setProperty('--el-color-danger', color.value)
  document.documentElement.style.setProperty('--el-color-success', color.value)
  document.documentElement.style.setProperty('--el-color-warning', color.value)
  document.documentElement.style.setProperty('--el-color-info', color.value)
}
//暴露方法
defineExpose({ showDrawer })
</script>
<style lang="scss" scoped>
.title {
  color: #303133;
  font-size: 17px;
}
p {
  display: flex;
  flex-direction: row;
  font-size: 14px;
  color: #000;
  &:before,
  &:after {
    content: '';
    flex: 1 1;
    border-bottom: 1px solid #dcdfe6;
    margin: auto;
  }
}
.drawer_item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  margin: 14px 0;
  color: #000;
}
</style>
