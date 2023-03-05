<template>
  <el-form ref="loginForm" :rules="loginRules" :model="loginUser" label-width="100px" class="loginForm sign-in-form">
    <el-form-item label="账号" prop="username">
      <el-input v-model="loginUser.username" placeholder="请输入账号"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="loginUser.password" placeholder="请输入密码" show-password></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="handlerLogin()" class="submit-btn">登录</el-button>
    </el-form-item>
    <div class="tiparea">
      <p>忘记密码？<a>立即找回</a></p>
    </div>
  </el-form>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { loginUser, loginRules } from '@/utils/loginValidators.ts'
import { useRouter } from 'vue-router'

import { useUserStore } from '@/store/user'
//pinia store
const userStore = useUserStore()
//获取表单实例
const loginForm = ref<any>(null)
//触发登录方法
function handlerLogin() {
  loginForm.value.validate((valid: boolean): boolean => {
    if (valid) {
      userStore.login(loginUser.username, loginUser.password)
      return true
    } else {
      return false
    }
  })
}
</script>
<style scoped>
/* 登录 */
.loginForm {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #cccc;
}
.tiparea {
  text-align: right;
  font-size: 12px;
  color: #333;
}
.tiparea p a {
  color: #409eff;
}
.submit-btn {
  width: 100%;
}
</style>
