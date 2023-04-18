<template>
  <el-form ref="registerForm" :rules="registerRules" :model="registerUser" label-width="100px">
    <el-form-item label="账号" prop="username">
      <el-input v-model="registerUser.username" placeholder="请输入账号"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="registerUser.password" placeholder="请输入密码" show-password></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="password2">
      <el-input v-model="registerUser.password2" placeholder="请再次输入密码" show-password></el-input>
    </el-form-item>
    <el-form-item label="邮箱" prop="email">
      <el-input v-model="registerUser.email" placeholder="请输入邮箱"></el-input>
    </el-form-item>
  </el-form>
  <div class="login-btn">
    <el-button :icon="CircleClose" round @click="login()" size="large">返回登录</el-button>
    <el-button :icon="Plus" round @click="handlerRegister()" size="large" type="success" :loading="loading"> 注册 </el-button>
  </div>
</template>
<script lang="ts" setup>
import { ref, defineEmits } from 'vue'
import { registerUser, registerRules } from '@/utils/registerValidators.ts'
import { Plus, CircleClose } from '@element-plus/icons-vue'
import { useUserStore } from '@/store/user'
const userStore = useUserStore()
const registerForm = ref<any>(null)
const emit = defineEmits(['changeLogin'])
//注册
function handlerRegister() {
  registerForm.value.validate(async (valid: boolean) => {
    if (valid) {
      const flag = await userStore.register(registerUser.username, registerUser.password, registerUser.email)
      if (flag) {
        login()
        resetForm()
      }
    }
  })
}
//重置
function resetForm() {
  registerUser.password = ''
  registerUser.password2 = ''
  registerUser.username = ''
  registerUser.email = ''
}
//切换到登录
function login() {
  emit('changeLogin')
}
</script>
<style scoped lang="scss">
.login-btn {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 40px;
  white-space: nowrap;
  .el-button {
    width: 185px;
  }
}
</style>
