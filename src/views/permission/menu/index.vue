<template>
  <el-card>
    <!-- 添加一级菜单按钮 -->
    <el-button icon="plus" type="primary">添加</el-button>
    <!-- 菜单列表显示 -->
    <menuList></menuList>
  </el-card>
</template>
<script lang="ts" setup>
import menuList from '@/views/permission/menu/components/menuList.vue'
</script>
<style scoped></style>
