<template>
  <el-sub-menu v-for="item in asideStore.hasChildren" :key="item.path" :index="item.path">
    <template #title>
      <i :class="item.icon" style="font-size: 17px;margin-right: 5px;"></i>
      <span>{{ item.title }}</span>
    </template>
    <el-menu-item-group v-for="itemChildrens in item.children" :key="itemChildrens.path">
      <el-menu-item @click="asideStore.pushPath(itemChildrens)" :index="itemChildrens.path">
        <i :class="itemChildrens.icon" style="font-size: 17px;margin-right: 5px;"></i>
        <span>{{ itemChildrens.title }}</span>
      </el-menu-item>
    </el-menu-item-group>
  </el-sub-menu>
</template>
<script lang="ts" setup>
import { useAsideStore } from '@/store/aside'
const asideStore = useAsideStore()
</script>
<style scoped>
</style>
