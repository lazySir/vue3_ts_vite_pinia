<template>
  <div class="top">
    <div @click="goHome" class="left"><span class="lbtn">首页</span></div>
    <div class="center">
      <div class="title">智慧旅游可视化大数据平台</div>
    </div>
    <div class="right">
      <span class="rbtn">统计报告</span>
      <span class="time">当前时间:{{ time }}</span>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { useTime } from '@/hooks/useTime'
import { ref, Ref, onMounted, onUnmounted } from 'vue'
const router = useRouter()
function goHome() {
  router.push('/')
}
// 获取当前时间
const { nowTime } = useTime()
let time: Ref<string> = ref(nowTime.value)
let timer = ref()
// 定时器
onMounted(() => {
  timer.value = setInterval(() => {
    time.value = useTime().nowTime.value
  }, 1000)
})
// 清除定时器
onUnmounted(() => {
  clearInterval(timer.value)
})
</script>
<style lang="scss" scoped>
.top {
  width: 100%;
  height: 40px;
  display: flex;
  .left {
    flex: 1.5;
    background: url('@/views/dataScreen/images/dataScreen-header-left-bg.png') no-repeat;
    background-size: cover;
    .lbtn {
      width: 150px;
      height: 40px;
      float: right;
      background: url('@/views/dataScreen/images/dataScreen-header-btn-bg-l.png') no-repeat;
      background-size: 100% 100%;
      text-align: center;
      line-height: 40px;
      color: #29fcff;
      font-size: 20px;
      cursor: pointer;
    }
  }
  .center {
    flex: 2;
    .title {
      width: 100%;
      height: 82px;
      background: url('@/views/dataScreen/images/dataScreen-header-center-bg.png') no-repeat;
      background-size: 100% 100%;
      line-height: 78px;
      text-align: center;
      font-family: YouSheBiaoTiHei;
      font-size: 30px;
      letter-spacing: 4px;
      color: #05e8fe;
    }
  }
  .right {
    flex: 1.5;
    background: url('@/views/dataScreen/images/dataScreen-header-left-bg.png') no-repeat;
    background-size: cover;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .rbtn {
      width: 150px;
      height: 40px;
      background: url('@/views/dataScreen/images/dataScreen-header-btn-bg-r.png') no-repeat;
      background-size: 100% 100%;
      text-align: center;
      line-height: 40px;
      color: #29fcff;
      font-size: 20px;
    }
    .time {
      color: #29fcff;
      margin-right: 10px;
      font-size: 20px;
    }
  }
}
</style>
