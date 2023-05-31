<template>
  <el-dropdown trigger="click" :teleported="false">
    <el-button size="small" type="primary">
      <span>{{ $t("tabs.more") }}</span>
      <el-icon class="el-icon--right"><arrow-down /></el-icon>
    </el-button>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="tagBoxStore.changeRefresh">
          <el-icon size="20px"><i class="i-ic:outline-sync"></i></el-icon>
          <span>{{ $t("tabs.reFresh") }}</span>
        </el-dropdown-item>
        <el-dropdown-item divided @click="closeCurrent"
          ><el-icon size="20px"><i class="i-line-md:cancel"></i></el-icon>
          <span> {{ $t("tabs.closeCurrent") }} </span>
        </el-dropdown-item>
        <el-dropdown-item @click="closeOther"
          ><el-icon size="20px"><i class="i-material-symbols:cancel-outline-rounded"></i></el-icon>
          <span>{{ $t("tabs.closeOther") }}</span>
        </el-dropdown-item>
        <el-dropdown-item @click="closeAll"
          ><el-icon size="20px"> <i class="i-fluent:calendar-cancel-16-regular"></i> </el-icon>
          <span>{{ $t("tabs.closeAll") }}</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script lang="ts" setup>
import { useTagBoxStore } from '@/store/tagBox'
import { useRoute,useRouter} from 'vue-router'
const route = useRoute()
const router = useRouter()
//关闭当前
const closeCurrent = () => {
  //获取当前地址
  const { path } = route
  //如果是首页则直接返回
  if (path === '/dashboard') return
  //定义正则表达式获取//中间的内容
  let reg = /\/(.*)\//
  //获取中间的内容
  let FirstOrder = path.match(reg)[1]
  //将FirstOder首字母大写
  FirstOrder = FirstOrder.replace(FirstOrder[0], FirstOrder[0].toUpperCase())
  let index = tagBoxStore.tagList.findIndex((item) => item.name === FirstOrder)
  if (index != -1) {
    tagBoxStore.deleteTag(index)
  } else {
    //正则表达式 获取/后面的内容
    reg = /\/(\w+)$/
    //获取/后面的内容
    let SecondOrder = path.match(reg)[1]
    //将SecondOrder首字母大写
    SecondOrder = SecondOrder.replace(SecondOrder[0], SecondOrder[0].toUpperCase())
    index = tagBoxStore.tagList.findIndex((item) => item.name === SecondOrder)
    tagBoxStore.deleteTag(index)
  }
}
//关闭其他
const closeOther = () => {
  //定义一个新数组
  let arr = []
  arr.push(tagBoxStore.tagList[0])
  //获取当前地址
  const { path } = route
  //如果是首页则直接返回
  if (path === '/dashboard') return tagBoxStore.resetTagBox()
  //定义正则表达式获取//中间的内容
  let reg = /\/(.*)\//
  //获取中间的内容
  let FirstOrder = path.match(reg)[1]
  //将FirstOder首字母大写
  FirstOrder = FirstOrder.replace(FirstOrder[0], FirstOrder[0].toUpperCase())
  let index = tagBoxStore.tagList.find((item) => item.name === FirstOrder)
  if (index) {
    arr.push(index)
    tagBoxStore.tagList = arr
  } else {
    //正则表达式 获取/后面的内容
    reg = /\/(\w+)$/
    //获取/后面的内容
    let SecondOrder = path.match(reg)[1]
    //将SecondOrder首字母大写
    SecondOrder = SecondOrder.replace(SecondOrder[0], SecondOrder[0].toUpperCase())
    index = tagBoxStore.tagList.find((item) => item.name === SecondOrder)
    arr.push({ name: index?.name, meta: index?.meta, icon: index?.icon })
    tagBoxStore.tagList = arr
  }
}
const closeAll = () => {
  tagBoxStore.resetTagBox()
  router.push({
    name: 'Home',
  })
}

const tagBoxStore = useTagBoxStore()
</script>
<style scoped></style>
