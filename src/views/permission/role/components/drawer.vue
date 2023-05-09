<template>
  <el-drawer :direction="direction" :before-close="handleClose" v-model="drawer" :title="title" size="30%">
    <!-- 整体内容 -->
    <div class="drawer_content">
      <!-- 角色信息 -->
      <el-form :model="role">
        <div class="header_text">基础编辑</div>
        <el-form-item label="名称" label-width="80px">
          <el-input v-model="role.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="启用状态" label-width="80px">
          <el-switch v-model="role.code" active-color="#13ce66" />
        </el-form-item>
        <el-form-item v-if="role.date" label="创建时间" label-width="80px">
          <el-input disabled v-model="role.date" autocomplete="off" />
        </el-form-item>
        <el-form-item label="备注" label-width="80px">
          <el-input v-model="role.remarks" autocomplete="off" />
        </el-form-item>
        <div class="header_text">权限编辑</div>
        <!-- 树形结构 -->
        <el-tree ref="treeRef" :data="permissionMenuStore.menuList" show-checkbox node-key="menuId" default-expand-all :props="defaultProps" />
      </el-form>
      <!-- 尾部 -->
      <div class="drawer__footer">
        <el-button type="danger" @click="handleClose">取消</el-button>
        <el-button type="primary" @click="confirm">确认</el-button>
      </div>
    </div>
  </el-drawer>
</template>

<script lang="ts" setup>
import { ref, defineExpose, computed, onMounted, nextTick } from 'vue'
import { ElDrawer } from 'element-plus'
import { usePermissionMenuStore } from '@/store/permission/menu'
import { usePermissionRoleStore } from '@/store/permission/role'
const permissionRoleStore = usePermissionRoleStore()
const permissionMenuStore = usePermissionMenuStore()

onMounted(() => {
  permissionMenuStore.getMenuList()
})
const treeRef = ref<any>(null)
//树形控件参数配置
const defaultProps = {
  children: 'children',
  label: 'title',
}
//树形空间展开方向
const direction = ref<any>('rtl')
//是否显示抽屉
const drawer = ref(false)
//编辑的角色信息
const role = ref({
  name: '',
  code: '',
  date: '',
  remarks: '',
  menuIdList: [],
})

//打开抽屉
const openDrawer = (val: any) => {
  resetRole()
  drawer.value = true
  role.value = JSON.parse(JSON.stringify(val))
  role.value.menuIdList?setCheckedKeys(role.value.menuIdList):setCheckedKeys([])
}
//关闭抽屉的回调 与取消编辑
const handleClose = () => {
  drawer.value = false
  resetRole()
}
// 设置节点的选中状态
const setCheckedKeys = (keys: any) => {
  //要等树形组件渲染完毕后才可以设置选中状态
  nextTick(() => {
    treeRef.value.setCheckedKeys(keys)
  })
}
///确认修改
const confirm = () => {
  const checkedKeys = treeRef.value.getCheckedKeys()
  role.value.menuIdList = checkedKeys
  //发送请求
  permissionRoleStore.addOrUpdateRole(role.value)
  //关闭抽屉
  handleClose()
}
//计算标题
const title = computed(() => {
  return role.value.name ? role.value.name + '编辑' : '添加角色'
})
//重置role
const resetRole = () => {
  role.value = {
    name: '',
    code: '',
    date: '',
    remarks: '',
    menuIdList: [],
  }
}
//修改抽屉方向
const directionDrawer = (val: any) => {
  direction.value = val
}
defineExpose({
  openDrawer,
  directionDrawer, // 将该函数暴露出去
})
</script>
<style lang="scss" scoped>
.drawer__footer {
  text-align: center;
}
.header_text {
  text-align: center;
  margin-bottom: 10px;
  padding: 10px;
  font-size: 18px;
}
</style>
