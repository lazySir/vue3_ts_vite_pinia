<template>
  <div class="login-container">
    <div class="login-box">
          <SwitchDark class="dark" />
      <div class="login-left">
        <img class="login-left-img" src="@/assets/images/login_left.png" alt="login" />
      </div>
      <div class="login-form">
        <div class="login-logo">
          <img class="login-icon" src="@/assets/images/logo.svg" alt="" />
          <h2 class="logo-text">LazySir-Admin</h2>
        </div>
        <!-- 登录 -->
        <LoginForm @changeLogin="controlPage.change" v-if="!controlPage.signUpMode" />
        <!-- 注册 -->
        <RegisterFrom @changeLogin="controlPage.change" v-else />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {reactive} from 'vue'
import LoginForm from "./components/LoginForm.vue";
import RegisterFrom from "./components/RegisterForm.vue";
import SwitchDark from '@/layouts/header/right/components/switch.vue'
//控制登录或者注册页面
const controlPage = reactive<object>({
  //标记登录注册页面
  signUpMode: false,
  //改变登录注册页面
  change: function (): void {
    controlPage.signUpMode = !controlPage.signUpMode
  },
})
</script>
<style scoped lang="scss">
@import './index.scss';
</style>
