<!--  -->
<template>
  <div class="news-list">
    <div class="content" v-for="(item) in newsList" :key="item.title" @click="goToNewsContent(item.url)">
      <div class="info">
        <div class="top">{{ item.title }}</div>
        <div class="foot">
          <span>{{ item.ctime }}</span>
          <!-- <span>{{ item.description }}</span> -->
        </div>
      </div>
      <div class="img">
        <img v-lazy="item.picUrl" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'newList',
  props: {
    newsList: {
      type: Array
    },
    typeName: {
      type: String
    }
  },
  methods: {
    goToNewsContent(htmlUrl) {
      this.$router.push({ path: '/newsdetails', query: { title: this.typeName, url: htmlUrl } });
    }
  },
}

</script>
<style scoped>
.news-list{
  padding: 10px 15px 20px 15px;
  margin-bottom: 80px;
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75px;
  padding: 15px 0 15px 0;
  border-bottom: 1px solid rgba(128, 128, 128, 0.2);
}
.info {
  position: relative;
  width: 68%;
  height: 75px;
}
.img {
  width: 30%;
  height: 75px;
  text-align: center;
}
.img img {
  width: 100%;
  height: 100%;
}
.top {
  position: absolute;
  top: 0px;
  font-size: 13px;
  word-break: break-all;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  margin-right: 5px;
}
.foot {
  position: absolute;
  bottom: 0;
  font-size: 11px;
  color: grey;
}
</style>