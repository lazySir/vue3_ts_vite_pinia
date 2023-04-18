<template>
  <el-form ref="loginForm" :model="loginUser" :rules="loginRules" size="large">
    <el-form-item label="账号" prop="username">
      <el-input v-model="loginUser.username" placeholder="用户名：admin / user">
        <template #prefix>
          <el-icon class="el-input__icon"><user /></el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input type="password" v-model="loginUser.password" placeholder="密码：admin / 12345" show-password>
        <template #prefix>
          <el-icon class="el-input__icon"><lock /></el-icon>
        </template>
      </el-input>
    </el-form-item>
  </el-form>
  <div class="login-btn">
    <el-button :icon="Plus" round @click="register()" size="large">注册</el-button>
    <el-button :icon="UserFilled" round @click="handlerLogin()" size="large" type="success" :loading="loading"> 登录 </el-button>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { loginUser, loginRules } from '@/utils/loginValidators.ts'
import { useRouter } from 'vue-router'
import { Plus, UserFilled } from '@element-plus/icons-vue'
import { useUserStore } from '@/store/user.ts'
const emit = defineEmits(['changeLogin'])
//pinia store
const userStore = useUserStore()
//获取表单实例
const loginForm = ref<any>(null)
//触发登录方法
function handlerLogin() {
  loginForm.value.validate(async (valid: boolean): boolean => {
    if (valid) {
      loading.value = true
      let result = await userStore.login(loginUser.username, loginUser.password)
      if (result) {
        resetForm()
        loading.value = false
      }
      return true
    } else {
      return false
    }
  })
}
//重置方法
function resetForm() {
  loginUser.username = ''
  loginUser.password = ''
}
//切换到注册
function register() {
  emit('changeLogin')
}
//loading
const loading = ref(false)
//监听enter键
onMounted(() => {
  // 监听 enter 事件（调用登录）
  document.onkeydown = (e: KeyboardEvent) => {
    e = (window.event as KeyboardEvent) || e
    if (e.code === 'Enter' || e.code === 'enter' || e.code === 'NumpadEnter') {
      handlerLogin()
    }
  }
})
</script>
<style scoped lang="scss">
@import '../index.scss';
</style>
