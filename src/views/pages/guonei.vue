<!--  -->
<template>
 <div class="guonei">
    <div class="header">
      <img class="find" src="@/assets/img/search.png" alt="">
      <div class="title">{{ typeName + "新闻" }}</div>
    </div>
    <loading v-show="loadingFlag"></loading>
    <scroll ref="scroll" @scroll="contentScroll" @pullingUp="loadMore">
      <newsList :newsList = '$store.state.guoNeiNewsList' :typeName = 'typeName' v-show="!loadingFlag"></newsList>
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
  name: 'guonei',
  data() {
    return {
      loadingFlag: true,
      scrollFlag: true,
      typeName: '国内',
      num: 50,
      page: 1
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
      this.$http.get('guonei/index',  {
        "key": "fa63572e04fc04d2534dc83c9a3ee96a",
        "num": this.num,
        "page": this.page
      },  response => {
        if (response.status >= 200 && response.status < 300) {
          console.log(response.data.newslist.length)
          this.$store.commit('AddGuoNeiNewsList', response.data.newslist)
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
  created() {
    if (this.$store.state.guoNeiInitLoad) {
      this.$http.get('guonei/index',  {
        "key": "fa63572e04fc04d2534dc83c9a3ee96a",
        "num": this.num
      },  response => {
        if (response.status >= 200 && response.status < 300) {
          this.$store.commit('changeGuoNeiNewsList', response.data.newslist);
          this.$store.commit('changeGuoNei', false)
          setTimeout(() => {
            this.loadingFlag = false
          }, 600);
        } else {
          console.log(response.message)
        }
      });
    } else {
      this.loadingFlag = false
    }
  },
}

</script>
<style scoped>
.guonei {
  height: 100%;
  background-color: #f4f4f4;
}
.header {
  height: 49px;
  position: relative;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
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