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
    oldUrl: 'topnews/index',
    // 保存初始化加载状态
    initLoad: true,
    // 保存当前所访问的新闻类型index，以便返回时，页面不刷新
    itemIndex: 0,
    // 保存新闻详情信息
    newsDetailsInfo: [],
    // 用于保存国内新闻列表
    guoNeiNewsList: [],
    // 用于保存国外新闻列表
    guoWaiNewsList: [],
    // 用于保存娱乐新闻列表
    yuLeNewsList: [],
    // 监听tabs切换初始化页面
    guoNeiInitLoad: true,
    internationalInitLoad: true,
    yuLeInitLoad: true
  },
  mutations
})
