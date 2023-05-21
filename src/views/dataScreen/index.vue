<template>
  <div class="container">
    <!-- 数据大屏展示内容区域 -->
    <div ref="screen" class="screen">
      <!-- 数据大屏顶部 -->
      <div class="top"><Top /></div>
      <div class="bottom">
        <div class="left">
          <Tourist class="tourist"></Tourist>
          <Sex class="sex"> </Sex>
          <Age class="age"></Age>
        </div>
        <div class="center">
          <Map class="map"></Map>
          <Line class="line"></Line>
        </div>
        <div class="right">
          <Rank class="rank"></Rank>
          <Year class="year"></Year>
          <Counter class="counter"></Counter>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import Top from '@/views/dataScreen/components/top/index.vue'
import Sex from '@/views/dataScreen/components/sex/index.vue'
import Age from '@/views/dataScreen/components/age/index.vue'
import Tourist from '@/views/dataScreen/components/tourist/index.vue'
import Map from '@/views/dataScreen/components/map/index.vue'
import Line from '@/views/dataScreen/components/line/index.vue'
import Counter from '@/views/dataScreen/components/counter/index.vue'
import Rank from '@/views/dataScreen/components/rank/index.vue'
import Year from '@/views/dataScreen/components/year/index.vue'
//获取数据大屏展示内容盒子的DOM元素
let screen = ref()
onMounted(() => {
  screen.value.style.transform = ` scale(${getScale()}) translate(-50%,-50%) `
})
//定义大屏缩放的比例
function getScale(w = 1920, h = 1080) {
  const ww = window.innerWidth / w
  const wh = window.innerHeight / h
  return ww < wh ? ww : wh
}
//监听视口的变化
window.onresize = () => {
  screen.value.style.transform = ` scale(${getScale()}) translate(-50%,-50%)`
}
</script>
<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  background: url('./images/bg.png') no-repeat;
  background-size: cover;
  .screen {
    position: fixed;
    width: 1920px;
    height: 1080px;
    /* background: red; */
    left: 50%;
    top: 50%;
    transform-origin: left top;
    .top {
      width: 100%;
      height: 40px;
      /* background: green; */
    }
    .bottom {
      display: flex;
      .right {
        flex: 1;
        display: flex;
        flex-direction: column;
        margin-left: 35px;
        .rank{
          flex:1;
        }
        .year{
          flex:1;
        }
        .counter{
          flex:1;
        }

        /* background: red; */
      }
      .left {
        flex: 1;
        height: 1040px;
        /* background: red; */
        display: flex;
        flex-direction: column;
        .tourist {
          flex: 1.1;
        }
        .sex {
          flex: 1;
        }
        .age {
          flex: 1;
        }
      }
      .center {
        flex: 2;
        display: flex;
        flex-direction: column;
        .map{
          flex:4;
          /* background: red; */
        }
        .line{
          flex:1;
          /* margin-bottom:10px; */
        }
      }
    }
  }
}
</style>
