<template>
  <el-card>
    <!-- 下拉菜单 -->
    <div class="Drawer_direction">
      <label>抽屉方向:</label>
      <el-select @change="changDirection" v-model="direction" class="m-2" placeholder="Select">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </div>

    <roleList @openDrawer="FatherClick"></roleList>
    <!-- 抽屉 -->
    <drawer ref="drawerRef"></drawer>
  </el-card>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import roleList from './components/roleList.vue'
import drawer from './components/drawer.vue'
const drawerRef: any = ref(null)
//父调用子方法
const FatherClick = (val: any) => {
  drawerRef.value.openDrawer(val)
}
//options：ltr rtl ttb btt
const options = [
  { value: 'ltr', label: '左向右' },
  { value: 'rtl', label: '右向左' },
  { value: 'ttb', label: '上向下' },
  { value: 'btt', label: '下向上' },
]
//修改抽屉方向
const changDirection =(val:string) =>{
  drawerRef.value.directionDrawer(val)
}
//抽屉方向
const direction = ref('rtl')
</script>
<style lang="scss" scoped>
.el-input {
  float: right;
}
.Drawer_direction {
  label{
    margin-right: 5px;
  }
  margin-left: 10px;
  float: right;
  .el-select{
    width:130px
  }
}
</style>
