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
  }
}