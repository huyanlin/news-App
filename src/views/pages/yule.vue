<!--  -->
<template>
  <div class="yule">
    <div class="header">
      <img class="find" src="@/assets/img/search.png" alt="">
      <div class="title">{{ typeName + "新闻" }}</div>
    </div>
    <loading v-show="loadingFlag"></loading>
    <scroll ref="scroll" @scroll="contentScroll" @pullingUp="loadMore">
      <newsList :newsList = 'yuLeNewList' :typeName = 'typeName' v-show="!loadingFlag"></newsList>
    </scroll>
    <backTop @click.native="backTop()" v-show="!scrollFlag"></backTop>
  </div>
</template>

<script>
import loading from '@/components/loading'
import newsList from '@/components/newsList'
import scroll from '@/components/common/scroll/scroll'
import backTop from '@/components/common/backTop/backTop'

export default {
  name: 'yule',
  data() {
    return {
      loadingFlag: true,  // 控制加载动画的显隐
      scrollFlag: true,   // 控制返回顶部按钮的显隐
      typeName: '娱乐',   // title的名称
      num: 50,            // 初始化请求数据的个数 
      page: 1,            // 初始化请求数据的页面
      yuLeNewList: []   // 保存国内新闻列表数据
    }
  },
  methods: {
    backTop() {
      this.$refs.scroll.backTop(0, 0, 600)
    },
    contentScroll(position) {
      if ((-position.y) > 900) {
        this.scrollFlag = false
      } else {
        this.scrollFlag = true
      }
    },
    // 加载更多
    loadMore() {
      this.page += 1
      this.$http.get('huabian/index',  {
        "key": "fa63572e04fc04d2534dc83c9a3ee96a",
        "num": this.num,
        "page": this.page
      },  response => {
        if (response.status >= 200 && response.status < 300) {
          console.log(response.data.newslist.length)
          this.$store.commit('AddYuLeNewsList', response.data.newslist)
          this.$refs.scroll.scroll.refresh()
          this.$refs.scroll.scroll.finishPullUp()
        } else {
          console.log(response.message)
        }
      });
    },
  },
  components: {
    loading,
    newsList,
    scroll,
    backTop
  },
  mounted() {
    this.$http.get('huabian/index',  {
        "key": "fa63572e04fc04d2534dc83c9a3ee96a",
        "num": this.num
      },  response => {
        if (response.status >= 200 && response.status < 300) {
          this.yuLeNewList = response.data.newslist
          this.loadingFlag = false
        } else {
          console.log(response.message)
        }
      });
  },
}

</script>
<style scoped>
.yule {
  height: 100%;
  background-color: #f4f4f4;
}
.header {
  height: 49px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 999;
  height: 49px;
  background-color: rgb(16, 174, 181);
}
.header .find {
  height: 25px;
  width: 25px;
  position: absolute;
  left: 15px;
}
.header .title {
  font-size: 16px;
  color: #fff;
  letter-spacing: 1px;
}
</style>