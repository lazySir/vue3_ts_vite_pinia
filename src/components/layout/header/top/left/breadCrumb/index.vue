<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="(item, index) in tabList" >
        <component style="width: 15px" :is="item.icon"> </component>
        <span :class="{ active: index === tabList.length - 1 }">{{ item.title }} </span>

    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useBreadCrumbStore } from '@/store/breadCrumb'
const breadCrumbStore = useBreadCrumbStore()
const { tabList } = storeToRefs(breadCrumbStore)

import { useRouter} from 'vue-router'
import { watch } from 'vue'
const router = useRouter()
watch(
  () => router.currentRoute.value,
  (newValue: any) => {
    // console.log(newValue)
    breadCrumbStore.test(newValue)
  },
  // { immediate: true }
)
</script>
<style  scoped>
div {
  margin-left: 5px;
}
span {
  font-size: 16px;
}
/* 修改el-breadcrumb的最后一个的span的字体颜色为粉色 */
.active {
  color: black;
}

</style>
