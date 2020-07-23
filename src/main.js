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
import VueCordova from 'vue-cordova'

Vue.use(VueCordova)

// 安装插件
Vue.use(VueLazyload, {
  preLoad: 0,
  listenEvent: ['scroll','whell','mousewhell','resize','animationend','transitionend','touchmove'],
  loading: require('./assets/img/loading.gif'),
  error: require('./assets/img/error.jpg')
})

Vue.prototype.$http = http;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
