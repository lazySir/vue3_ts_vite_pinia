<template>
  <el-form ref="registerForm" :rules="registerRules" :model="registerUser" label-width="100px" class="registerForm sign-up-form">
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
    <el-form-item>
      <el-button type="primary" @click="handlerRegister()" class="submit-btn">注册</el-button>
    </el-form-item>
  </el-form>
</template>
<script lang="ts" setup>
import { ref, defineEmits } from 'vue'
import { registerUser, registerRules } from '@/utils/registerValidators.ts'

import { useUserStore } from '@/store/user'
const userStore = useUserStore()
const registerForm = ref<any>(null)
const emit = defineEmits(['changeLogin'])
function handlerRegister() {
  registerForm.value.validate((valid: boolean) => {
    if (valid) {
      const flag = userStore.register(registerUser.username, registerUser.password, registerUser.email)
      if (flag) {
        emit('changeLogin')
      }
    }
  })
}
</script>
<style scoped>
/* register */
.registerForm {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #cccc;
}

.submit-btn {
  width: 100%;
}
</style>
