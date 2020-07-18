import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible'
// 引入阿里图标样式文件
import './assets/font-icon/iconfont.css'
// 导入axios
import http from "@/api/index"
// 导入图片懒加载插件
import VueLazyload from 'vue-lazyload'

// 安装插件
Vue.use(VueLazyload, {
  preLoad: 0,
  listenEvent: ['scroll','whell','mousewhell','resize','animationend','transitionend','touchmove'],
  loading: require('./assets/img/timg.gif'),
  error: require('./assets/img/error.png')
})

Vue.prototype.$http = http;

Vue.config.productionTip = false

// main.js中， 全局路由钩子
// router中的scrollBehavior仅在mode为history模式下有效
router.afterEach((to, from) => {
  let bodySrcollTop = document.body.scrollTop
  if (bodySrcollTop !== 0) {
    document.body.scrollTop = 0
    return
  }
  let docSrcollTop = document.documentElement.scrollTop
  if (docSrcollTop !== 0) {
    document.documentElement.scrollTop = 0
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
