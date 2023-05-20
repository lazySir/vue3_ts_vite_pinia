<template>
  <div class="random">
    <el-card class="randomColor" header="使用random随机生成颜色">
      <div class="content">
        <div :style="{ backgroundColor: color }" class="color"></div>
        <div class="box">
          <el-button @click="randomColor" type="primary">随机生成</el-button>
          <span>{{ color }}</span>
        </div>
      </div>
    </el-card>
    <el-card class="randomColor" header="原理">
      <p>1. "Marh.random()返回[0,1)"</p>
      <p>2. "toString(16)转化为16进制"</p>
      <p>3. slice(2,8)截取6位</p>
      <p>4. padEnd(6,'0')如果截取的数字不够六位补0</p>
    </el-card>
  </div>
  <div class="random">
    <el-card class="randomString" header="随机字符串">
      <div class="content">
        <div class="box">
          <el-input v-model="stringLength" placeholder="字符串长度:默认6"></el-input>
          <el-input v-model="randString" placeholder="生成的字符串">
          </el-input>
        </div>
        <el-button @click="randomString()" type="primary">随机生成</el-button>
      </div>
    </el-card>
    <el-card class="randomString" header="原理"> 
      <p>原理类似使用toString(36) :26个字母+10个数字</p>
    </el-card>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
var color = ref('#000000')
const stringLength = ref()
const randString = ref()
const randomColor = () => {
  color.value = '#' + Math.random().toString(16).slice(2, 8).padEnd(6, '0')
}

function randomString() {
  if (stringLength.value <= 11||!stringLength.value) {
    if (!stringLength.value) {
      randString.value = Math.random().toString(36).slice(2, 8).padEnd(6, '0')
    } else {
      randString.value = Math.random()
        .toString(36)
        .slice(2, 2 + Number(stringLength.value))
        .padEnd(Number(stringLength.value), '0')
    }
  } else {
    let length = Number(stringLength.value)
    let generatedString = ''
    while (generatedString.length < length) {
      generatedString += Math.random().toString(36).slice(2)
    }
    randString.value = generatedString.slice(0, length)
  }
}
</script>
<style lang="scss" scoped>
.random {
  display: flex;
  justify-content: space-around;
  margin-bottom: 100px;
}
.randomString {
  width: 400px;
  .content {
    display: flex;
    justify-content: center;
  }
  .box {
    width: 220px;
  }
  .el-input {
    width: 200px;
    margin-bottom: 10px;
  }
}
.randomColor {
  width: 400px;
  .content {
    display: flex;
  }
  p {
    padding: 5px;
  }
  .box {
    width: 160px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
  }
}
.color {
  float: left;
  height: 100px;
  width: 200px;
}
</style>
