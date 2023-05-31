<template>
  <el-dropdown trigger="click" @command="changeLanguage">
    <el-icon size="20px">
      <i class="i-iconoir:language"></i>
    </el-icon>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item v-for="item in languageList" :key="item.value" :command="item.value" :disabled="language === item.value">
          {{ item.label }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useGolbalStore } from '@/store/global'
import { storeToRefs } from 'pinia'
const globalStore = useGolbalStore()
const { language } = storeToRefs(globalStore)
const i18n = useI18n()
const languageList = [
  { label: '简体中文', value: 'zh' },
  { label: '繁体中文', value: 'zh_tw' },
  { label: 'English', value: 'en' },
  { label: '日本語', value: 'ja' },
  { label: '한국어', value: 'ko' },
  { label: 'français', value: 'fr' },
  { label: 'Deutsch', value: 'de' },
  { label: 'español', value: 'es' },
]
const changeLanguage = (lang: string) => {
  i18n.locale.value = lang
  globalStore.language = lang
}
onMounted(() => {
  i18n.locale.value = globalStore.language
})
</script>

<style scoped>
.el-icon {
  margin-left: 15px;
  cursor: pointer;
}
</style>
