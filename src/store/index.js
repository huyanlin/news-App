import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'

// 安装插件
Vue.use(Vuex)

// 创建对象
export default new Vuex.Store({
  state: {
    loadingFlag: true,
    // 用于保存已选类别标签
    changedLableList: [
      { name: '头条', class: 'iconfont icon-jinrishouru', url: 'topnews/index' },
      { name: '苹果', class: 'iconfont icon-pingguoapple', url: "apple/index" },
      { name: 'NBA', class: 'iconfont icon-tiyu-lanqiu', url: "nba/index" },
      { name: '创业', class: 'iconfont  icon-chaxunchuangyebankaitongqingkuang', url: "startup/index" },
      { name: '足球', class: 'iconfont icon-swticonzuqiu', url: "football/index" },
      { name: '体育', class: 'iconfont icon-paobu', url: "tiyu/index" }
    ],
    // 用于保存备选类别标签
    alternativeLableList: [
      { name: '女性', class: 'iconfont icon-icon-qunzi', url: "woman/index" },
      { name: 'CBA', class: 'iconfont icon-swticonlanqiu', url: "cba/index" },
      { name: '垃圾分类', class: 'iconfont icon-fenlei', url: "lajifenleinews/index" },
      { name: '财经', class: 'iconfont icon-keji01', url: "caijing/index" },
      { name: '军事', class: 'iconfont icon-1huojian', url: "military/index" },
      { name: '科技', class: 'iconfont  icon-keji01', url: "keji/index" }
    ],
    // 用于保存新闻列表
    newsList: [],
    // // 用于保存当前正在访问的url，防止重复访问
    oldUrl: 'football/index'
  },
  mutations
})
