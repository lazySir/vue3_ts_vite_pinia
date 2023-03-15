<template>
  <div class="aside-container">
    <!-- @open="handleOpen" @close="handleClose" -->
    <el-menu :collapse="asideStore.isCollapse" active-text-color="#fff" background-color="#191A20" class="el-menu-vertical-demo" default-active="2" text-color="#BDBDC0">
      <!-- 头部 -->
      <logoForm />
      <!-- 无子项 -->
      <noChildren />
      <!-- 有子项 -->
      <hasChildren />
    </el-menu>
  </div>
</template>
<script lang="ts" setup>
import noChildren from '@/layouts/aside/components/noChildren.vue' //没有子项的菜单
import hasChildren from '@/layouts/aside/components/hasChildren.vue' //有子菜单的菜单
import logoForm from '@/layouts/aside/components/logo.vue'
import { useAsideStore } from '@/store/aside.ts'
const asideStore = useAsideStore()
</script>

<style lang="scss">
@import "./index.scss"
</style>
