<template>
  <component :is="LayoutComponents[layout as LayoutType]" />
</template>

<script lang="ts" setup>
import { useGolbalStore } from '@/store/global'
import { computed, type Component } from 'vue'
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
const globalStore = useGolbalStore()
const layout = computed(() => globalStore.layout)
</script>
<style scoped></style>
