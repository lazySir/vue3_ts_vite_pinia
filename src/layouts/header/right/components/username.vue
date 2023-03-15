<template>
  <span class='username'> {{userStore.username}} </span>
</template>
<script lang="ts" setup>
import { useUserStore } from '@/store/user/index.ts'
const userStore = useUserStore()
</script>
<style scoped>
.username {
  margin: 0 20px;
  font-size: 15px;
  color:#303113;
  font-family: Microsoft YaHei;
}
</style>
