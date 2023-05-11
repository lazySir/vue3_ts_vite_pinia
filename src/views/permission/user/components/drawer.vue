<template>
  <el-drawer v-model="drawer" title="用户编辑">
    <el-form :model="user">
      <div class="header_text">基础编辑</div>
      <!-- 头像 -->
      <el-form-item>
        <img class="avatar" :size="80" :src="user.avatar" />
      </el-form-item>
      <el-form-item label="账号" label-width="80px">
        <el-input disabled v-model="user.username" />
      </el-form-item>
      <el-form-item label="用户昵称" label-width="80px">
        <el-input v-model="user.name" />
      </el-form-item>
      <el-form-item label="email" label-width="80px">
        <el-input disabled v-model="user.email" />
      </el-form-item>
      <el-form-item label="状态" label-width="80px">
        <el-switch v-model="user.code" active-color="#13ce66"></el-switch>
      </el-form-item>
      <el-form-item label="创建时间" label-width="80px">
        <el-input disabled v-model="user.createTime" />
      </el-form-item>
      <el-form-item label="最近更新" label-width="80px">
        <el-input disabled v-model="user.updateTime" />
      </el-form-item>
      <!-- 角色列表 -->
      <el-form-item label="角色" label-width="80px">
        <el-checkbox @change="handleCheckAllChange" :indeterminate="isIndeterminate" v-model="checkedAll">全选</el-checkbox>
        <el-checkbox @change="handleCheckReverse" v-model="checkedReverse">反选</el-checkbox>
      </el-form-item>
      <el-form-item label="" label-width="80px">
        <el-checkbox-group v-model="selectedRole">
          <el-checkbox v-for="role in peremissionRoleStore.roleList" :disabled="role.code ? false : true" :label="role.name" :key="role">{{ role.name }}</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
    </el-form>
  </el-drawer>
</template>

<script lang="ts" setup>
import { ref, defineExpose, watch, onMounted, computed } from 'vue'
import { usePermissionRoleStore } from '@/store/permission/role'
const peremissionRoleStore = usePermissionRoleStore()
//加载时发送请求获取角色列表
onMounted(() => {
  peremissionRoleStore.getRoleList()
})
//是否打开抽屉
const drawer = ref(false)
//编辑的角色
const user = ref({
  username: '',
  name: '',
  email: '',
  code: '',
  createTime: '',
  roleList: [],
  updateTime: '',
})
//全部角色姓名
const allRoles: any = computed(() => {
  return peremissionRoleStore.roleList.filter((item) => item.code != false).map((item) => item.name)
})
//被选中的角色
const selectedRole = ref([])
watch(user, (newValue) => {
  selectedRole.value = []
  newValue.roleList.forEach((item) => selectedRole.value.push(item.name))
})
const checkedAll = ref(false)
const checkedReverse = ref(false)
const isIndeterminate = ref(true)
//全选
const handleCheckAllChange = (val: boolean) => {
  isIndeterminate.value = false
  selectedRole.value = val ? allRoles.value : []
}
//反选
const handleCheckReverse = () => {
  //将总的角色和已选中的角色进行比较，过滤出未选中的角色
  selectedRole.value = allRoles.value.filter((item) => !selectedRole.value.includes(item))
}
//打开抽屉
const openDrawer = (val: any) => {
  drawer.value = true
  user.value = JSON.parse(JSON.stringify(val))
}
defineExpose({ openDrawer })
</script>

<style lang="scss" scoped>
.header_text {
  text-align: center;
  margin-bottom: 10px;
  padding: 10px;
  font-size: 18px;
}
.avatar {
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
</style>
