<template>
  <div class="wscn-http404-container">
    <div class="wscn-http404">
      <div class="pic-404">
        <img class="pic-404__parent" src="@/assets/404_images/404.png" alt="404" />
        <img class="pic-404__child left" src="@/assets/404_images/404_cloud.png" alt="404" />
        <img class="pic-404__child mid" src="@/assets/404_images/404_cloud.png" alt="404" />
        <img class="pic-404__child right" src="@/assets/404_images/404_cloud.png" alt="404" />
      </div>
      <div class="bullshit">
        <div class="bullshit__oops">错误!</div>
        <div class="bullshit__info">发生了一些错误，您可能无法访问此页面。</div>
        <div class="bullshit__headline">{{ message }}</div>
        <div class="bullshit__info">请检查您输入的URL是否正确，或点击下面的按钮返回主页。</div>
        <a href="./" class="bullshit__return-home">回到首页</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//引入ref
import { ref } from 'vue'
let message = ref('你不能进入这个页面...')
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
