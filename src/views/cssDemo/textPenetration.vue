<template>
  <div class="content">
    <div class="modal">
      <h1>AMSTERDAM</h1>
    </div>
  </div>
</template>
<script lang='ts' setup>
</script>
<style lang="scss" scoped>
.content
{
  background: url('../../assets/images/textPenetration.jpg') no-repeat center/cover;
  height: 750px;
  font-family:'Open sans' ,sans-serif;
}
.modal{
  background: rgba(0,0,0,0.7);
  width: 100%;
  height: 100%;
  h1{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12vw;
    text-stroke:1px #fff;
    -webkit-text-stroke: 1px #fff;
    background: url('../../assets/images/textPenetration.jpg') no-repeat center/cover;
    background-clip:text; // 使背景图像仅显示在元素的文本内容上
    -webkit-background-clip:text;
    color: transparent;
    
  }
}
</style>