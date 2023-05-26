<template>
  <div class="menu-search-dialog">
    <el-icon size="20px">
      <i @click="handleOpen" :class="'iconfont icon-sousuo'" class="i-ic:sharp-search"></i>
    </el-icon>

    <el-dialog v-model="isShowSearch" destroy-on-close :modal="false" :show-close="false" fullscreen @click="closeSearch">
      <el-autocomplete v-model="searchMenu" ref="menuInputRef" value-key="path" placeholder="菜单搜索 ：支持菜单名称、路径" :fetch-suggestions="searchMenuList" @select="handleClickMenu" @click.stop>
        <template #prefix>
          <el-icon>
            <Search />
          </el-icon>
        </template>
        <template #default="{ item }">
          <el-icon>
            <i :class="item.icon"></i>
          </el-icon>
          <span> {{ item.meta.title }} </span>
        </template>
      </el-autocomplete>
    </el-dialog>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useUserStore } from '@/store/user'
import { useTagBoxStore } from '@/store/tagBox'
const tagBoxStore = useTagBoxStore()
const userStore = useUserStore()
// 打开搜索框
const handleOpen = () => {
  isShowSearch.value = true
}
//是否显示搜索框
const isShowSearch = ref(false)
//搜索的值
const searchMenu = ref('')
//搜索的回调
const searchMenuList = (queryString: string, cb: any) => {
  const results = queryString ? menuList.value.filter(filterNodeMethod(queryString)) : menuList.value
  cb(results)
}
// 筛选菜单
const filterNodeMethod = (queryString: string) => {
  return (restaurant: any) => {
    return restaurant.path.toLowerCase().indexOf(queryString.toLowerCase()) > -1 || restaurant.meta.title.toLowerCase().indexOf(queryString.toLowerCase()) > -1
  }
}
// 搜索窗关闭
const closeSearch = () => {
  isShowSearch.value = false
}
// 点击搜索结果
const handleClickMenu = (menuItem: any) => {
  searchMenu.value = ''
  tagBoxStore.pushTag(menuItem)
  tagBoxStore.pushRoute(menuItem.name)
  closeSearch()
}
//拥有的权限菜单列表
const menuList = computed(() => {
  return userStore.asyRoutes.flatMap((obj: any) => {
    if (obj.children) {
      return [obj, ...obj.children]
    } else {
      return obj
    }
  })
})
</script>
<style lang="scss" scoped>
.el-icon {
  margin-left: 15px;
  cursor: pointer;
}

.menu-search-dialog {
  :deep(.el-dialog) {
    background-color: rgb(0 0 0 / 50%);
    border-radius: 0 !important;
    box-shadow: unset !important;
    .el-dialog__header {
      border-bottom: none !important;
    }
  }
  :deep(.el-autocomplete) {
    position: absolute;
    top: 100px;
    left: 50%;
    width: 550px;
    transform: translateX(-50%);
    .el-input__wrapper {
      background-color: var(--el-bg-color);
    }
  }
}
.el-autocomplete__popper {
  .el-icon {
    position: relative;
    top: 2px;
    font-size: 16px;
  }
  span {
    margin: 0 0 0 10px;
    font-size: 14px;
  }
}
</style>
