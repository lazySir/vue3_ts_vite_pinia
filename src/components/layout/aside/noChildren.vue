<template>
  <el-menu-item v-for="item in asideStore.noChildren" @click="asideStore.pushPath(item)" :key="item.path" :index="item.path">
    <el-icon :size="20">
      <component :is="item.icon" />
    </el-icon>
    <span>{{ item.title }}</span>
  </el-menu-item>
</template>
<script lang="ts" setup>

// useRouter的使用
import { useAsideStore } from '@/store/aside.ts'
const asideStore = useAsideStore()
</script>
<style scoped></style>
