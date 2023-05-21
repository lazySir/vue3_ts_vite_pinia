<template>
  <!-- 用户列表  -->
  <userList @openDrawer="FatherClick"></userList>
  <!-- 抽屉 -->
  <drawer ref="drawerRef"></drawer>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import userList from '@/views/permission/user/components/userList.vue'
import drawer from '@/views/permission/user/components/drawer.vue'
const drawerRef = ref<any>(null)
const FatherClick = (val: any) => {
  drawerRef.value.openDrawer(val)
}
</script>
<style scoped></style>
