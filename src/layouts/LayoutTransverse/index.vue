<template>
  <div class="el-container">
    <el-container>
      <el-header class="header-container">
        <logoForm class="logo"></logoForm>
        <el-menu mode="horizontal" active-text-color="#009688" background-color="#ffffff" default-active="首页" text-color="#333333">
          <!-- 菜单 -->
          <subMenu />
        </el-menu>
        <HeaderR class="r-container"></HeaderR>
      </el-header>
      <tagBox v-if="global.isShowTab"></tagBox>
      <el-main><Main></Main></el-main>
      <el-footer v-if="global.isShowFooter"><Footer class="footer"></Footer></el-footer>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import logoForm from '@/layouts/components/logo/index.vue'
import HeaderR from '@/layouts/components/header/right/index.vue'
import subMenu from '@/layouts/components/aside/components/subMenu.vue'
import Main from '@/layouts/components/main/index.vue'
import Footer from '@/layouts/components/footer/index.vue'
import tagBox from '@/layouts/components/tagBox/index.vue'
import { useGolbalStore } from '@/store/global'
const global = useGolbalStore()
</script>
<style lang="scss" scoped>
@import './index.scss'
</style>
