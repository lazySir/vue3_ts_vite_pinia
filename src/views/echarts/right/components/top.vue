<template>
  <div class="num">
    <el-card :body-style="{display:'flex',padding:0}" v-for='item in countData' :key='item.name'> 
      <!-- 图标 -->
      <i class="icon" :class="`el-icon-${item.icon}`" :style='{background:item.color}'></i>
      <!-- 金额 -->
      <div class='detail'>
        <p class='price'>￥{{item.value}}</p>
        <p class='desc'>{{item.name}}</p>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      countData: [
        {
          name: '今日支付订单',
          value: 1234,
          icon: 'success',
          color: '#2ec7c9',
        },
        {
          name: '今日收藏订单',
          value: 210,
          icon: 'star-on',
          color: '#ffb980',
        },
        {
          name: '今日未支付订单',
          value: 1234,
          icon: 's-goods',
          color: '#5ab1ef',
        },
        {
          name: '本月支付订单',
          value: 1234,
          icon: 'success',
          color: '#2ec7c9',
        },
        {
          name: '本月收藏订单',
          value: 210,
          icon: 'star-on',
          color: '#ffb980',
        },
        {
          name: '本月未支付订单',
          value: 1234,
          icon: 's-goods',
          color: '#5ab1ef',
        },
      ],
    }
  },
}
</script>

<style lang='less' scoped>
.num{
  display: flex;
  // 超出一行之后换行
  flex-wrap: wrap;
  justify-content: space-between;
  .el-card{
    width: 32%;
    margin-bottom: 20px;
  }
  .icon{
    height: 80px;
    width: 80px;
    font-size:30px;
    text-align: center;
    line-height: 80px;
    color: #fff;
  }
  .detail{
    margin-left:15px;
    display: flex;
    // 以y轴为主轴
    flex-direction: column;
    justify-content: center;
    .price{
      font-size: 30px;
      margin-bottom: 10px;
    }
    .desc{
      font-size: 14px;
      color: #999;
      text-align: center;
    }
  }
}
</style>
