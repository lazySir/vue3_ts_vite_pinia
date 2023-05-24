<template>
  <div class="aside-container">
    <div class="logo-container">
      <logoForm />
    </div>
    <el-scrollbar class="scroll-container">
      <el-menu :collapse="asideStore.isCollapse" 
        active-text-color="#009688" 
        background-color="#ffffff" 
        class="el-menu-vertical-demo" 
        default-active="首页" 
        text-color="#333333">
          <!-- 菜单 -->
          <subMenu />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
import subMenu from '@/layouts/aside/components/subMenu.vue' //子菜单
import logoForm from '@/layouts/aside/components/logo.vue'
import { useAsideStore } from '@/store/aside'
const asideStore = useAsideStore()
</script>

<style lang="scss">
@import "./index.scss"
</style>
