<template>
  <component :is="LayoutComponents[layout as LayoutType]"  v-if="flag"/>
</template>

<script lang="ts" setup>
import { useGolbalStore } from '@/store/global'
import {useTagBoxStore} from '@/store/tagBox'
import { computed, type Component,watch,ref,nextTick} from 'vue'
//四种布局
import LayoutVertical from './LayoutVertical/index.vue'
import LayoutClassic from './LayoutClassic/index.vue'
import LayoutTransverse from './LayoutTransverse/index.vue'
import LayoutColumns from './LayoutColumns/index.vue'
export type LayoutType = 'vertical' | 'classic' | 'transverse' | 'columns'
const LayoutComponents: Record<LayoutType, Component> = {
  vertical: LayoutVertical,
  classic: LayoutClassic,
  transverse: LayoutTransverse,
  columns: LayoutColumns,
}
//控制当前组件是否销毁
const flag =ref(true);
const tagBoxStore = useTagBoxStore()
watch(()=>tagBoxStore.refresh,()=>{
  //点击刷新按钮组件销毁
  flag.value=false;
  nextTick(()=>{
    //组件销毁后再次渲染
    flag.value=true;
  })
})
const globalStore = useGolbalStore()
const layout = computed(() => globalStore.layout)
</script>
<style scoped></style>
