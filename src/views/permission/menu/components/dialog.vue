<template>
  <el-dialog v-model="dialogVisible" :title="title" width="30%" align-center>
    <el-form :model="newMenu" label-width="100px">
      <el-form-item v-if="newMenu.level > 1" label="父级路由名称">
        <el-input disabled v-model="newMenu.PmenuKey" placeholder=""></el-input>
      </el-form-item>
      <el-form-item label="权限名称">
        <el-input v-model="newMenu.menuKey" placeholder=""></el-input>
      </el-form-item>
      <el-form-item label="权限值">
        <el-input v-model="newMenu.menuValue" placeholder=""></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false"> 确定 </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script lang="ts" setup>
import { ref, defineExpose, computed } from 'vue'
let newMenu = ref<Record<string, any>>({})

//定义dialogVisible的值
const dialogVisible = ref(false)
//修改dialogVisible的值
function showDialog(row: any = undefined) {
  dialogVisible.value = true
  //如果是修改 那么我需要所有信息
  //如果不是修改，那么我要获取的是level+1 PmenuKey
  //怎么判断是不是修改？ 通过newMenu的id
  if (row.menuId) {
    // 修改
    newMenu.value = row
  } else {
    // 添加
    newMenu.value = {
      level: row.level + 1,
      PmenuKey: row.menuKey,
    }
  }
}

let title = computed(() => {
  const { menuId, level } = newMenu.value
  if (menuId) {
    return level === 3 ? '修改功能' : '修改菜单'
  } else {
    return level === 3 ? '添加功能' : `添加${level === 2 ? '二级' : '一级'}菜单`
  }
})

//暴露方法
defineExpose({ showDialog })
</script>

<style scoped>
.el-button--text {
  margin-right: 15px;
}
.el-select {
  width: 300px;
}
.el-input {
  width: 300px;
}
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
