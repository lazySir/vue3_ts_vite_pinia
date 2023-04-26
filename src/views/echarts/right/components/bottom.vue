<template>
  <!-- 柱状图 -->
  <div class="graph">
    <el-card style="height: 230px">
      <div ref="echarts1" style="height: 230px"></div>
    </el-card>
    <el-card style="height: 230px">
      <div ref="echarts2" style="height: 210px"></div>
    </el-card>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  props: ['barData', 'pieData'],
  watch: {
    barData: {
      handler(newValue, oldValue) {
        const echarts1 = echarts.init(this.$refs.echarts1)
        const echarts1Option = {
          legend: {
            // 图例文字颜色
            textStyle: {
              color: '#333',
            },
          },
          grid: {
            left: '20%',
          },
          // 提示框
          tooltip: {
            trigger: 'axis',
          },
          xAxis: {
            type: 'category', // 类目轴
            data: newValue.map((item) => item.date),
            axisLine: {
              lineStyle: {
                color: '#17b3a3',
              },
            },
            axisLabel: {
              interval: 0,
              color: '#333',
            },
          },
          yAxis: [
            {
              type: 'value',
              axisLine: {
                lineStyle: {
                  color: '#17b3a3',
                },
              },
            },
          ],
          color: ['#2ec7c9', '#b6a2de'],
          series: [
            {
              name: '新增用户',
              data: newValue.map((item) => item.new),
              type: 'bar',
            },
            {
              name: '活跃用户',
              data: newValue.map((item) => item.active),
              type: 'bar',
            },
          ],
        }
        echarts1.setOption(echarts1Option)
      },
      deep: true,
    },
    pieData: {
      handler(newValue, oldValue) {
        const echarts2 = echarts.init(this.$refs.echarts2)
        const echarts2Options = {
          tooltip: {
            trigger: 'item',
          },
          color: ['#0f78f4', '#dd536b', '#9462e5', '#a6a6a6', '#e1bb22', '#39c362', '#3ed1cf'],
          series: [{
            data:newValue,
            type:'pie'
          }],
        }
        echarts2.setOption(echarts2Options)
      },
      deep: true,
    },
  },
}
</script>

<style lang="less" scoped>
.graph {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  .el-card {
    width: 48%;
  }
}
</style>
