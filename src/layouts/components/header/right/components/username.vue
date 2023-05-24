<template>
  <span class='username'> {{userStore.userInfo.username}} </span>
</template>
<script lang="ts" setup>
import { useUserStore } from '@/store/user'
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
