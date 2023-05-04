<template>
  <el-menu-item :index='item.title'  v-for="(item,index1) in asideStore.noChildren" @click="asideStore.pushPath(item)" :key="item.path" >
   <div :class="item.icon" style="font-size: 17px;margin-right: 5px;"></div>
    <span>{{ item.title }}</span>
  </el-menu-item>
</template>
<script lang="ts" setup>
// useRouter的使用
import { useAsideStore } from '@/store/aside.ts'
const asideStore = useAsideStore()
</script>
<style scoped>
</style>
