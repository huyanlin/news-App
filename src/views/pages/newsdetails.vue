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
        <loading v-show="loadingFlag"></loading>
        <frameset cols="100%" v-if="this.$store.state.newsDetailsInfo[0].content === ''">
          <frame :src="this.$route.query.url" />
        </frameset>
        <div class="content-info" v-else v-for="(item, index) in this.$store.state.newsDetailsInfo" :key="index">
          <div class="content-title">{{ item.title }}</div>
          <div class="content-item" v-html="item.content"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import loading from '@/components/loading'

export default {
  name: 'newsdetails',
  data() {
    return {
      loadingFlag: true,
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  },
  components: {
    loading
  },
  computed: {
    title() {
      return this.$route.query.title + '新闻'
    }
  },
  created() {
    this.$http.get('txapi/htmltext/index', {
      "key": "fa63572e04fc04d2534dc83c9a3ee96a",
      "url": this.$route.query.url
    },  response => {
      if (response.status >= 200 && response.status < 300) {
        this.$store.commit('changeNewsDetailsInfo', response.data.newslist);
        setTimeout(() => {
          this.loadingFlag = false
        }, 400);
      } else {
        console.log(response.message);
      }
    });
  },
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
  height: 100%;
}

/* 头部样式 */
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 49px;
  background-color: rgb(16, 174, 181);
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

/* 内容样式 */
.content {
  height: 100%;
  width: 100%;
  overflow: hidden;
  overflow-y: auto;
}
.content-info {
  position: relative;
  padding: 10px 15px 10px 15px; 
  height: 100%;
}
.content-title {
  text-align: center;
  font-size: 25px;
  line-height: 33px;
  font-weight: 700;
}
.content-item {
  margin-top: 10px;
  margin-bottom: 60px;
}
.content-info>>> p {
  font-size: 14px;
  padding: 5px 0 5px 0;
  letter-spacing: 1px;
}
.content-info>>> p:last-child {
  display: none;
  margin-top: 15px;
  font-size: 12px;
  text-align: center;
  color: grey;
}
.content-info>>> p img {
  width: 100%;
  border-radius: 8px;
}
</style>