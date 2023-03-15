<template>
    <el-card class="box-card">
      <div class="user">
        <img src="@/assets/author.jpg" alt="" />
        <div class="userinfo">
          <p class="name">Admin</p>
          <p class="access">超级管理员</p>
        </div>
      </div>
      <div class="login-info">
        <p>上次登录时间：<span>2023/1/19</span></p>
        <p>上次登录地点：<span>福清</span></p>
      </div>
    </el-card>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.user {
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  .userinfo {
    .name {
      font-size: 32px;
      margin-bottom: 10px;
    }
    .access {
      color: #999;
    }
  }
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-right: 40px;
  }
}
.login-info {
  p {
    line-height: 28px;
    font-size: 14px;
    color: #999;
    span {
      color: #666;
      margin-left: 60px;
    }
  }
}
</style>
