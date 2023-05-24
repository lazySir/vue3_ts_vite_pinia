<template>
  <div @click="asideStore.changeCollapse()" style="padding: 0">
    <el-icon size="20px">
      <i-uis-right-indent class="hamburger" :class="{ 'is-active': !asideStore.isCollapse }"></i-uis-right-indent>
    </el-icon>
  </div>
</template>

<script setup lang="ts">
import { useAsideStore } from '@/store/aside'
const asideStore = useAsideStore()
</script>
<style scoped>
.hamburger {
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
}
.hamburger:hover {
  cursor: pointer;
}
.hamburger.is-active {
  transform: rotate(180deg);
}
</style>
