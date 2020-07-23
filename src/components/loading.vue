<!-- 页面加载动画组件 -->
<template>
  <div class="loading">
    <img src="@/assets/img/timg.gif" alt="">
  </div>
</template>

<script>
export default {
  name: 'loading'
}

</script>
<style scoped>
.loading {
  position: relative;
  top: 0;
  padding: 0 15px 0px 15px;
  height: 100%;
  overflow: hidden;
  background-color: #f6f6f6;
}
img {
  width: 15%;
  position: absolute;
  margin-top: 50px;
  left: 50%;
  transform: translateX(-50%);
}
</style>