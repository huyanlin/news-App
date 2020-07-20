<!--  -->
<template>
 <div class="international">
    <div class="header">
      <img class="find" src="@/assets/img/search.png" alt="">
      <div class="title">{{ typeName + "新闻" }}</div>
    </div>
    <div class="news-info">
      <loading v-show="loadingFlag"></loading>
      <newsList :newsList = '$store.state.guoWaiNewsList' :typeName = 'typeName' v-show="!loadingFlag"></newsList>
    </div>
 </div>
</template>

<script>
import loading from '@/components/loading'
import newsList from '@/components/newsList'

export default {
  name: 'internation',
  data() {
    return {
      loadingFlag: true,
      typeName: '国际'
    }
  },
  components: {
    loading,
    newsList
  },
  created() {
    if (this.$store.state.internationalInitLoad) {
      this.$http.get('world/index',  {
        "key": "fa63572e04fc04d2534dc83c9a3ee96a",
        "num": "20"
      },  response => {
        if (response.status >= 200 && response.status < 300) {
          this.$store.commit('changeGuoWaiNewsList', response.data.newslist);
          this.$store.commit('changeinternational', false)
          setTimeout(() => {
            this.loadingFlag = false
          }, 400);
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
.international {
  height: 100%;
  background-color: #f4f4f4;
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
.header .title {
  font-size: 16px;
  color: #fff;
  letter-spacing: 1px;
}
.news-info {
  overflow: hidden;
  overflow-y: auto;
  height: 100%;
  padding-bottom: 50px;
}
</style>