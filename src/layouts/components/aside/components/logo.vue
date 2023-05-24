<template>
  <div class="logo">
    <img src="@/assets/vue.svg" alt="" />
    <h1 v-if="!asideStore.isCollapse" class="title">Lazy-Admin</h1>
  </div>
</template>
<script lang="ts" setup>
import { useAsideStore } from '@/store/aside'
const asideStore = useAsideStore()
</script>
<style scoped>
.logo {
  box-sizing: border-box;
  height: 55px;
  border-bottom:1px solid #e4e7ed;
  display: flex;
  justify-content: center;
  align-items: center;
}
.title {
  font-size: 21.5px;
  font-weight: 700;
  color: #303133;
  white-space: nowrap;
}
</style>
