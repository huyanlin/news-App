<!-- "其他新闻"页面 -->
<template>
 <div class="others">
   <div class="container">
     <div class="head">
        <div class="header">
          <img class="find" src="@/assets/img/search.png" alt="">
          <div class="title">{{ title }}</div>
          <img class="add" src="@/assets/img/add.png" alt="" @click="goToTypeAdd()">
        </div>
        <div class="nav">
          <div class="items" v-for="(item, index) in changedLableList" :key="index" :class="{'item-color': index === $store.state.itemIndex}" @click="onClick(index, item.url, item.name)">{{ item.name }}</div>
        </div>
      </div>
      <loading v-show="loadingFlag"></loading>
      <div class="content" v-show="!loadingFlag">
        <newsList :newsList = '$store.state.newsList' :typeName = 'typeName'></newsList>
      </div>
   </div>
 </div>
</template>

<script>
import loading from '@/components/loading'
import newsList from '@/components/newsList'

export default {
  name: 'others',
  data() {
    return {
      itemIndex: 0,
      loadingFlag: true,
      // 用于保存当前请求页面数据的url
      url: '',
      // 用于保存当前所点击的新闻类型名称
      typeName: '头条'
    }
  },
  methods: {
    goToTypeAdd() {
      this.$router.push('/typeLableAdd')
    },
    onClick(index, url, typeName) {
      this.typeName = typeName
      this.$store.commit('changeItemIndex', index);
      this.url = url
      if(this.url !== this.$store.state.oldUrl) {
        this.handleScroll()
        this.loadingFlag = true
        this.$store.commit('saveUrl', this.url)
        this.$http.get(this.url,  {
          "key": "fa63572e04fc04d2534dc83c9a3ee96a",
          "num": "20"
        },  response => {
          if (response.status >= 200 && response.status < 300) {
            this.$store.commit('changeNewsList', response.data.newslist);
            setTimeout(() => {
              this.loadingFlag = false
            }, 400);
          } else {
            console.log(response.message);
          }
        });
      }
      
    },
    // 实现页面跳转，滚动条自动在顶部
    handleScroll () { //改变元素content的scrollTop
      var offsetTop = document.querySelector('.content').scrollTop;
        document.querySelector('.content').scrollTop = 50
        setTimeout(() => {
          document.querySelector('.content').scrollTop = 0
        }, 500);
      
    },
  },
  computed: {
    title() {
      return this.$route.meta.join()
    },
    changedLableList() {
      return this.$store.state.changedLableList
    },
  },
  components: {
    loading,
    newsList,
  },
  created() {
    if (this.$store.state.initLoad) {
      this.$http.get('topnews/index',  {
      "key": "fa63572e04fc04d2534dc83c9a3ee96a",
      "num": "20"
      },  response => {
        if (response.status >= 200 && response.status < 300) {
          this.$store.commit('changeNewsList', response.data.newslist);
          this.$store.commit('initLoad', false)
          setTimeout(() => {
            this.loadingFlag = false
          }, 400);
        } else {
          console.log(response.message);
        }
      });
    } else {
      this.loadingFlag = false
    }
  }
}

</script>
<style scoped>
.others {
  height: 100%;
  margin-bottom: 60px;
  background-color: #f4f4f4;
}
.container {
  height: 100%;
}

/* 头部样式 */
.head {
  position: relative;
  height: 91px;
}
.header {
  height: 49px;
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
.header .add {
  height: 25px;
  width: 25px;
  position: absolute;
  right: 15px;
}
.header .title {
  font-size: 16px;
  color: #fff;
  letter-spacing: 1px;
}

/* 导航标签 */
.nav {
  white-space: nowrap;
  width: 360px;
  overflow: hidden;
  overflow-y: hidden;
  overflow-x: auto;
  height: 42px;
  border-bottom: 1px solid rgba(158, 149, 149, 0.2);
}
.items {
  display: inline-block;
  font-size: 11px;
  line-height: 45px;
  width: 60px;
  text-align: center;
}
.item-color {
  color: rgb(16, 174, 181);
}

/* 内容区域样式 */
.content {
  position: relative;
  height: 94%;
  overflow: hidden;
  overflow-y: auto;
}
</style>