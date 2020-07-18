<!-- 类别管理页面 -->
<template>
  <div class="lable">
    <!-- 主体页面 -->
    <div class="lable-container">
      <div class="header">
        <img class="back" src="@/assets/img/back.png" alt="" @click="goBack()">
        <div class="title">{{ title }}</div>
      </div>
      <div class="content">
        <div class="title-info">点击删除以下频道</div>
        <div class="flex-content">
          <div class="lable-items" v-for="(item, index) in changedLableList" :key="index" @click="decrementTypeLable(index)">
            <div class="item">
              <div><i :class="item.class"></i></div>
              <span>{{ item.name }}</span>
            </div>
          </div>
        </div>
        <div class="title-info" v-show="alternativeLableList.length !== 0">点击添加以下频道</div>
        <div class="flex-content">
          <div class="lable-items" v-for="(item, index) in alternativeLableList" :key="index" @click="incrementTypeLable(index)">
            <div class="item">
              <div><i :class="item.class"></i></div>
              <span>{{ item.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import loading from '@/components/loading'

export default {
  name: 'typeLableAdd',
  methods: {
    // 返回“其他新闻”界面
    goBack() {
      this.$store.commit('saveUrl', 'topnews/index')
      this.$router.push('/home/others')
    },
    // 从已有频道中删除频道
    decrementTypeLable(index) {
      this.$store.commit('decrementTypeLable', index)
    },
    incrementTypeLable(index) {
      this.$store.commit('incrementTypeLable', index)
    }
  },
  computed: {
    title() {
      return this.$route.meta.join()
    },
    changedLableList() {
      return this.$store.state.changedLableList
    },
    alternativeLableList() {
      return this.$store.state.alternativeLableList
    }
  },
  components: {
    loading,
  }
}

</script>
<style scoped>
.lable {
  height: 100%;
  overflow: hidden;
  background-color: #f4f4f4;
}
/* 主体容器样式 */
.lable-container {
  
}

/* 头部样式 */
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 49px;
  background-color: rgb(16, 174, 181);
  /* box-shadow: 0 1px 3px rgb(128, 128, 128); */
}
.header .back {
  height: 25px;
  width: 25px;
  position: absolute;
  z-index: 999999;
  left: 15px;
}
.header .title {
  font-size: 16px;
  color: #fff;
  letter-spacing: 1px;
}
/* /头部样式 */

/* 内容样式 */
.content {
  height: 568px;
  padding: 20px 15px 20px 15px;
  overflow: hidden;
  overflow-y: auto;
}
.title-info {
  font-size: 14px;
  margin-bottom: 10px;
  color: rgb(128, 128, 128);
}
.flex-content {
  display: flex;
  flex-wrap: wrap;
  border-radius: 15px;
  margin-bottom: 20px;
  overflow: hidden;
}
.lable-items {
  width: 108px;
  height: 108px;
  text-align: center;
  font-size: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
}
.lable-items .item i {
  font-size: 18px;
}
.lable-items:first-child {
  margin: 0 2px 2px 0;
}
.lable-items:not(:first-child), .lable-items:not(:last-child) {
    margin: 0 2px 2px 0;
}

/* /内容样式 */
</style>