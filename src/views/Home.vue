<template>
  <div class="home">
    <div class="pages-container">
      <router-view></router-view>
    </div>
    <div class="tabs-container">
      <!-- <keep-alive> -->
        <router-link tag="div" class="tab" to="/home/guonei">
          <div><i class="iconfont icon-guoneiyou"></i></div>
          <span>国内</span>
          <!-- 点击动画 -->
          <div v-bind:class="{ 'animation': $route.path === '/home/guonei' }"></div>
        </router-link>
      <!-- </keep-alive> -->

      <router-link tag="div" class="tab" to="/home/international">
        <div><i class="iconfont icon-iconset0403"></i></div>
        <span>国际</span>
        <!-- 点击动画 -->
        <div v-bind:class="{ 'animation': $route.path === '/home/international' }"></div>
      </router-link>

      <router-link tag="div" class="tab" to="/home/yule">
        <div><i class="iconfont icon-yule"></i></div>
        <span>娱乐</span>
        <!-- 点击动画 -->
        <div v-bind:class="{ 'animation': $route.path === '/home/yule' }"></div>
      </router-link>

      <router-link tag="div" class="tab" to="/home/others">
        <div><i class="iconfont icon-paobu"></i></div>
        <span>其他</span>
        <!-- 点击动画 -->
        <div v-bind:class="{ 'animation': $route.path === '/home/others' }"></div>
      </router-link>
    </div>
  </div>  
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      
    }
  },
  methods: {
    
  },
  components: {
   
  }
}
</script>

<style scoped>
.home {
  height: 100%;
}
.pages-container {
  height: 100%;
  padding: 10px 15px 60px 15px;
  overflow: hidden;
  overflow-y: auto;
  background-color: #f7f7f7;
}

/* tabs样式 */
.tabs-container {
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  width: 100%;
  box-shadow: 0px 0px 8px rgb(189, 186, 186);
  background-color: rgba(255, 255, 255, 0.98);
}
.tab {
  position: relative;
  text-align: center;
  flex-grow: 1;
  font-size: 12px;
  padding: 10px 0 10px 0;
}
.tab div i {
  font-size: 18px;
}
/* 点击tabs的点击动画 */
.animation {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(18, 178, 187, 0.08);
  animation: abc 400ms 1;
}
@keyframes abc {
  from {
    width: 0;
    height: 0;
  }
  to{
    width: 100%;
    height: 100%;
  }
}

/* tabs选中样式 */
.active {
  color: #10aeb5;
}
</style>
