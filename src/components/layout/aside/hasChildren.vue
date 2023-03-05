<template>
  <el-sub-menu v-for="item in asideStore.hasChildren" :key="item.path" :index="item.path">
    <template #title>
      <el-icon :size="20">
        <component :is="item.icon" />
      </el-icon>
      <span>{{ item.title }}</span>
    </template>
    <el-menu-item-group v-for="(itemChildrens, index) in item.children" :key="itemChildrens.path">
      <el-menu-item @click="asideStore.pushPath(itemChildrens, index)" :index="itemChildrens.path">{{ itemChildrens.title }}</el-menu-item>
    </el-menu-item-group>
  </el-sub-menu>
</template>
<script lang="ts" setup>
import { useAsideStore } from '@/store/aside.ts'
const asideStore = useAsideStore()
</script>
<style scoped>

</style>
