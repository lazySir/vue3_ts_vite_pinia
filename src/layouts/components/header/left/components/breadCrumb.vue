<template>
  <el-breadcrumb separator=">">
    <el-breadcrumb-item v-for="(item, index) in breadCrumbList">
      <p v-if="globalStore.isShowBreadIcon" style="display:inline-block" :class="item.icon"></p>
      <span :class="{ active: index === breadCrumbList.length - 1 }">{{ item.meta.title }} </span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useBreadCrumbStore } from '@/store/breadCrumb'
import { useGolbalStore } from '@/store/global'
const breadCrumbStore = useBreadCrumbStore()
const globalStore = useGolbalStore()
const { breadCrumbList } = storeToRefs(breadCrumbStore)

import { useRouter } from 'vue-router'
import { watch } from 'vue'
const router = useRouter()
watch(
  () => router.currentRoute.value,
  (newValue: any) => {
    breadCrumbStore.addBreadCrumb(newValue.name)
  },
  { immediate: true },
)
</script>
<style scoped>
div {
  margin-left: 15px;
}
span {
  margin-left: 3px;
  font-size: 14px;
  font-weight: 700;
  color:#303133;
  font-family:"Microsoft YaHei";
}
/* 修改el-breadcrumb的最后一个的span的字体颜色为粉色 */
.active {
  color: #606266;
  font-weight: 400;
}
</style>
