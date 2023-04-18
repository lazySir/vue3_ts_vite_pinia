<template>
  <el-menu-item :index='item.title'  v-for="(item,index1) in asideStore.noChildren" @click="asideStore.pushPath(item)" :key="item.path" >
    <el-icon :size="18" color="#BDBDC0">
      <component :is="item.icon" />
    </el-icon>
    <span>{{ item.title }}</span>
  </el-menu-item>
</template>
<script lang="ts" setup>
// useRouter的使用
import { useAsideStore } from '@/store/aside.ts'
import MaterialSymbolsAddHomeOutline from '~icons/material-symbols/add-home-outline'
const asideStore = useAsideStore()
</script>
<style scoped>
</style>
