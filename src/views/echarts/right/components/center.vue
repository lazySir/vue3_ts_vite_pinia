<template>
  <el-card style="height: 280px">
    <!-- 折线图 -->
    <div ref="echarts1" style="height: 280px"></div>
  </el-card>
</template>

<script>
import * as echarts from 'echarts'
export default {
  props: ['lineData'],
  watch: {
    lineData: {
      handler(newValue, oldValue) {
        // console.log(newValue)
        //基于准备好的dom，初始化echarts
        const echarts1 = echarts.init(this.$refs.echarts1)
        //指定图表的配置项和数据
        var echarts1Option = {}
        // //处理数据xAxis 我需要获取的是newValue里的date数组里的每一个对象的value值
        const xAxis = []
        for (let item of newValue.date) {
          xAxis.push(item)
        }
        // console.log(xAxis)
        echarts1Option.xAxis = {
          data: xAxis,
        }
        //处理数据yAxis
        echarts1Option.yAxis = {}
        // //处理数据legend 需要获取的是newValue里的data数组里的每一个对象的key值
        const legend = Object.keys(newValue.data[0])
        // console.log(legend)
        echarts1Option.legend = {
          newValue: legend,
        }
        //不写这个下面push报错
        echarts1Option.series = []
        //处理series
        legend.forEach((key) => {
          echarts1Option.series.push({
            name: key,
            type: 'line',
            data: newValue.data.map((item) => item[key]),
          })
        })
        // console.log(echarts1Option)
        //使用刚指定的配置项和数据显示图表
        echarts1.setOption(echarts1Option)
      },
      deep: true,
    },
  },
}
</script>

<style></style>
