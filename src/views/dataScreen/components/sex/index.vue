<template>
  <div class="box1">
    <div class="title">
      <p>男女比例</p>
      <img src="@/views/dataScreen/images/dataScreen-title.png" alt="" />
    </div>
    <div class="sex">
      <div class="man">
        <p class="man_title">男士</p>
        <img src="@/views/dataScreen/images/man.png" alt="" />
      </div>
      <div class="women">
        <p class="women_title">女士</p>
        <img src="@/views/dataScreen/images/woman.png" alt="" />
      </div>
    </div>
    <div class="rate">
      <p>男士58%</p>
      <p>女士42%</p>
    </div>
    <div ref="charts" class="charts"></div>
  </div>
</template>
<script lang="ts" setup>
import * as echarts from 'echarts'
import { ref, onMounted } from 'vue'
//获取图形图标的dom
let charts = ref()
onMounted(() => {
  let mycharts = echarts.init(charts.value)

  mycharts.setOption({
    title: {
      text: '男女比例', //主标题
      textStyle: {
        color: 'skyblue', //主标题颜色
      },
      left: '40%',
    },
    xAxis: {
      show: false,
      min: 0,
      max: 100,
    },
    yAxis: {
      show: false,
      type: 'category',
    },
    series: [
      {
        type: 'bar',
        data: [58],
        barWidth: 20,
        z: 100,
        itemStyle: {
          color: 'rgb(17,124,250)',
          borderRadius: 20,
        },
      },
      {
        type: 'bar',
        data: [100],
        barWidth: 20,
        //调整柱子的位置
        barGap: '-100%',
        itemStyle: {
          color: 'rgb(253,73,123)',
          borderRadius: 20,
        },
      },
    ],
    grid: {
      left: 0,
      bottom: 0,
      top: 0,
      right: 0,
    },
  })
})
</script>
<style lang="scss" scoped>
.box1 {
  width: 100%;
  height: 100%;
  background: url('@/views/dataScreen/images/dataScreen-main-cb.png') no-repeat;
  background-size: 100% 100%;
  margin: 10px 0px 10px 0px;
  .title {
    margin-left: 20px;
    p {
      color: white;
      font-size: 20px;
    }
  }
  .sex {
    display: flex;
    justify-content: center;
    .man {
      margin: 50px 20px 20px 10px;
      width: 111px;
      height: 115px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      background: url('@/views/dataScreen/images/man-bg.png') no-repeat;
      .man_title {
        color: white;
        font-size: 20px;
      }
      img {
        position: fixed;
        top: 565px;
      }
    }
    .women {
      margin: 50px 20px 20px 10px;
      width: 111px;
      height: 115px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      background: url('@/views/dataScreen/images/woman-bg.png') no-repeat;
      .women_title {
        color: white;
        font-size: 20px;
      }
      img {
        position: fixed;
        top: 565px;
      }
    }
  }
  .rate {
    display: flex;
    justify-content: space-between;
    color: white;
  }
  .charts {
    height: 100px;
    /* background: red; */
  }
}
</style>
