<template>
  <div class="aside-container">
    <div v-if="globalStore.layout == 'vertical'" class="logo-container">
      <logoForm />
    </div>
    <el-scrollbar class="scroll-container">
      <el-menu :collapse="asideStore.isCollapse" active-text-color="#009688" background-color="#ffffff" class="el-menu-vertical-demo" default-active="首页" text-color="#333333">
        <!-- 菜单 -->
        <subMenu />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
import subMenu from '@/layouts/components/aside/components/subMenu.vue' //子菜单
import logoForm from '@/layouts/components/aside/components/logo.vue'
import { useGolbalStore } from '@/store/global'
import { useAsideStore } from '@/store/aside'
const asideStore = useAsideStore()
const globalStore = useGolbalStore()
</script>

<style lang="scss">
@import './index.scss';
</style>
