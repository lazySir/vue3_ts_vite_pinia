<template>
  <div class="logo">
    <img src="@/assets/vue.svg" alt="" />
    <h1 v-if="!asideStore.isCollapse" class="title">后台系统</h1>
  </div>
</template>
<script lang="ts" setup>
import { useAsideStore } from '@/store/aside.ts'
const asideStore = useAsideStore()
</script>
<style scoped>
.logo {
  box-sizing: border-box;
  height: 55px;
  border-bottom: 1px solid #282a35;
  display: flex;
  justify-content: center;
  align-items: center;
}
.title {
  font-size: 21.5px;
  font-weight: 700;
  color: #dadada;
  white-space: nowrap;
}
</style>
