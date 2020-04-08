/**
 * Created by dong on 2020/4/5.
 */
const app = getApp()
Page({
  data: {
    title: "东东好帅啊",
    items: [
      { name: '产品1' },
      { name: '产品2' },
      { name: '产品3' },
      { name: '产品4' },
      { name: '产品5 ' },
    ],
    text: '东东'
  },
  onLoad: function () {
    console.log("东东好帅load")
    console.log('跳转回调', this.getOpenerEventChannel())
    console.log('页面栈', app.getCurrentPage)
    console.log('页面路径', this.route)
    console.log('env', wx.env)
  },
  onLaunch: function () {
    console.log("东东好帅load")
  },
  onShow(){
    console.log("东东真的太帅了onShow")
  },
  onHide(){
    console.log("东东真的太帅了onHide")
  },
  onError() {
    console.log("东东真的太帅了onError")
  },
  setTitle: function () {
    console.log('设置title')
    // console.log('getCurrentPage', App.getCurrentPage())
  },
  bindInput (e) {
    console.log("bindInput", e)
    this.setData({
      text: e.detail.value
    })
  }
})