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
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px 0px 15px;
  height: 100%;
  overflow: hidden;
  background-color: #9e64ff;
}
img {
  width: 100%;
}
</style>