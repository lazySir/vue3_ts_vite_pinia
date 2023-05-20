<template>
  <el-icon size="20px">
    <p class="i-mingcute-t-shirt-line" @click="open"></p>
    <drawer ref="drawerRef"></drawer>
  </el-icon>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import drawer from './drawer.vue'
const drawerRef: any = ref(null)
const open= ()=>{
  drawerRef.value.showDrawer()
}
</script>
<style scoped>
.el-icon {
  margin-left: 15px;
  cursor: pointer;
}
</style>
