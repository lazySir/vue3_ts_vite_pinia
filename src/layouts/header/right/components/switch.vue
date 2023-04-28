<template>
  <el-switch @change='headerStore.changeTheme' v-model="night" class="mt-2" style="--el-switch-on-color: #0d0d0d; --el-switch-off-color: #8B8989" inline-prompt active-icon="Moon" inactive-icon="Sunny" />
</template>

<script setup lang="ts">
import {useHeaderStore} from '@/store/header'
import {storeToRefs} from 'pinia'
const headerStore = useHeaderStore()
const {night} = storeToRefs(headerStore)
</script>
<style scoped>
.el-switch {
  margin-left: 15px;
}
</style>
