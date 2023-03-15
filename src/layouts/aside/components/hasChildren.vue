<template>
  <el-sub-menu v-for="item in asideStore.hasChildren" :key="item.path" :index="item.path">
    <template #title>
      <el-icon :size="18" color='#BDBDC0'>
        <component :is="item.icon" />
      </el-icon>
      <span>{{ item.title }}</span>
    </template>
    <el-menu-item-group v-for="itemChildrens in item.children" :key="itemChildrens.path">
      <el-menu-item @click="asideStore.pushPath(itemChildrens)" :index="itemChildrens.path">
        <el-icon :size="18">
          <component :is="itemChildrens.icon" />
        </el-icon>
        <span>{{ itemChildrens.title }}</span>
      </el-menu-item>
    </el-menu-item-group>
  </el-sub-menu>
</template>
<script lang="ts" setup>
import { useAsideStore } from '@/store/aside.ts'
const asideStore = useAsideStore()
</script>
<style scoped>
</style>
