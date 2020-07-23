<!-- 回到顶部 -->
<template>
  <div class="back-top">
    <img src="@/assets/img/xiangshang.svg" alt="">
  </div>
</template>

<script>
export default {
  name: 'backTop',
  
}

</script>
<style scoped>
.back-top {
  position: fixed;
  right: 15px;
  bottom: 65px;
  z-index: 9999;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
  background-color: #10aeb5;
  box-shadow: 2px 2px 8px grey;
}
.back-top img {
  width: 70%;
}
</style>