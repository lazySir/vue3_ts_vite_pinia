<template>
  <!-- 添加一级菜单按钮 -->
  <el-button @click="FatherClick" icon="plus" type="primary">添加</el-button>
  <!-- 菜单列表显示 -->
  <menuList @showDialog="FatherClick"></menuList>
  <!-- 弹窗 -->
  <dialogForm ref="dialogRef"></dialogForm>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import menuList from '@/views/permission/menu/components/menuList.vue'
import dialogForm from './components/dialog.vue'
const dialogRef: any = ref(null)
//父调用子方法
const FatherClick = (val: any) => {
  dialogRef.value.showDialog(val)
}
</script>
<style scoped></style>
