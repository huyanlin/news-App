export default {
  // 方法
  // 向类别列表中添加元素（添加其他类别）
  incrementTypeLable(state,index) {
    let item = []
    item = state.alternativeLableList.splice(index, 1)
    state.changedLableList.push(item[0])
  },
  // 向类别列表中删除元素（删除其他类别）
  decrementTypeLable(state, index) {
    let item = []
    if (index !== 0) {
      item = state.changedLableList.splice(index, 1)
      state.alternativeLableList.push(item[0])
    }
  },
  // 更新新闻列表数据
  changeNewsList(state, newsList) {
    state.newsList = newsList
  },
  // 保存正在访问的url
  saveUrl(state, url) {
    state.oldUrl = url
  },
  initLoad(state, flag) {
    state.initLoad = flag
  },
  // 修改访问新闻类型索引
  changeItemIndex(state, index) {
    state.itemIndex = index
  },
  // 更新新闻详情信息
  changeNewsDetailsInfo (state, newsDetailsInfo) {
    state.newsDetailsInfo = newsDetailsInfo
  },
  // 初始化tabs页面完成，修改状态
  changeGuoNei(state, flag) {
    state.guoNeiInitLoad = flag
  },
  changeinternational(state, flag) {
    state.internationalInitLoad = flag
  },
  changeYuLe(state, flag) {
    state.yuLeInitLoad = flag
  },
  changeGuoNeiNewsList(state, newList) {
    state.guoNeiNewsList = newList
  },
  changeGuoWaiNewsList(state, newList) {
    state.guoWaiNewsList = newList
  },
  changeYuLeNewsList(state, newList) {
    state.yuLeNewsList = newList
  },
  // 向国内新闻中追加信息
  AddGuoNeiNewsList(state, newList) {
    for (const item of newList) {
      state.guoNeiNewsList.push(item)
    }
  },
  // 向国外新闻中追加信息
  AddGuoWaiNewsList(state, newList) {
    for (const item of newList) {
      state.guoWaiNewsList.push(item)
    }
  },
  // 向娱乐新闻中追加信息
  AddYuLeNewsList(state, newList) {
    for (const item of newList) {
      state.yuLeNewsList.push(item)
    }
  }
}