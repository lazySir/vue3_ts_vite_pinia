<template>
  <el-dropdown>
    <div @mouseenter="changeActive" @mouseleave="changeActive">
      <img class="user" :src="userStore.avatar" alt="" />
      <el-icon v-if="isActive">
        <arrow-down />
      </el-icon>
      <el-icon v-else>
        <arrow-up />
      </el-icon>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item @click='userStore.logout'>退出</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import {useUserStore} from '@/store/user.ts'
const userStore = useUserStore()
let isActive = ref(true)
const changeActive = ():void => {
  isActive.value = !isActive.value
}
</script>
<style scoped>
/* 默认移动上去会有一个黑色边框给她去除掉 */
:focus {
  outline: 0;
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
.user {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>
