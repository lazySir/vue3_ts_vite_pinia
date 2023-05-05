<template>
  <el-dialog v-model="dialogVisible" :title="title" width="30%" align-center>
    <el-form :model="newMenu" label-width="100px">
      <el-form-item v-if="newMenu.level > 1" label="父级路由名称">
        <el-input disabled v-model="newMenu.PmenuKey" placeholder=""></el-input>
      </el-form-item>
      <el-form-item label="权限名称">
        <el-input prop="menuKey" v-model="newMenu.menuKey" placeholder=""></el-input>
      </el-form-item>
      <el-form-item label="权限值">
        <el-input prop="menuValue" v-model="newMenu.menuValue" placeholder=""></el-input>
      </el-form-item>
      <el-form-item label="图标">
        <el-popover :width="300" popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;">
          <template #reference>
            <i style="font-size: 30px" :class="newMenu.icon"></i>
          </template>
          <template #default>
            <div class="icons">
              <div v-for="icon in icons" :key="icon" @click="newMenu.icon = icon">
                <i style="float: left; font-size: 30px" :class="icon"></i>
              </div>
            </div>
          </template>
        </el-popover>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="cancel">取消</el-button>
        <el-button type="primary" @click="confirm"> 确定 </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script lang="ts" setup>
import { ref, defineExpose, computed } from 'vue'
import { ElMessage } from 'element-plus'
import icons from '@/../icons'
import { usePermissionMenuStore } from '@/store/permission/menu'
const permissionMenuStore = usePermissionMenuStore()
let newMenu = ref<Record<string, any>>({
  icon:'i-material-symbols:grid-view',
  level:0,
})
//定义dialogVisible的值
const dialogVisible = ref(false)
//修改dialogVisible的值
function showDialog(row: any = undefined) {
  dialogVisible.value = true
  //如果是修改 那么我需要所有信息
  //如果不是修改，那么我要获取的是level+1 PmenuKey
  //怎么判断是不是修改？ 通过newMenu的id
  if (row.menuId) {
    resetNewMenu()
    // 修改
    newMenu.value.level= row.level
    newMenu.value.menuKey= row.menuKey
    newMenu.value.menuValue= row.menuValue
    newMenu.value.icon= row.icon
    newMenu.value.menuId= row.menuId
    newMenu.value.PmenuKey= row.PmenuKey
  } else {
    resetNewMenu()
    // 添加
    newMenu.value.level =  row.level?  row.level+1:newMenu.value.level+1,
    newMenu.value.PmenuKey = row.menuKey
  }
}
//计算标题
let title = computed(() => {
  const { menuId, level } = newMenu.value
  if (menuId) {
    return level === 3 ? '修改功能' : '修改菜单'
  } else {
    return level === 3 ? '添加功能' : `添加${level === 2 ? '二级' : '一级'}菜单`
  }
})
//重置newMenu
function resetNewMenu() {
  newMenu.value = {
    icon:'i-material-symbols:grid-view',
    level:0,
  }
}
//取消按钮
function cancel() {
  //关闭对话框
  dialogVisible.value = false
  //重置newMenu
  newMenu.value = {
  icon:'i-material-symbols:grid-view',
  level:1,
}
}
//确定按钮
function confirm() {
  //检验newMenu的menuKey和menuValue是否为空
  if (!newMenu.value.menuKey || !newMenu.value.menuValue) {
    return ElMessage.error('权限名称或权限值不能为空')
  }
  //关闭对话框
  dialogVisible.value = false
  //发送请求
  permissionMenuStore.addOrUpdateMenu(newMenu.value)
}
//暴露方法
defineExpose({ showDialog })
</script>

<style lang="scss" scoped>
@import './dialog.scss';
</style>
