/**
 * Created by dong on 2020/4/5.
 */
const app = new getApp();
Page({
  data: {
    title: "东东好帅啊",
      items: [
      { name: '产品1' },
      { name: '产品2' },
      { name: '产品3' },
      { name: '产品4' },
      { name: '产品5 ' },
    ]
  },
  onLoad: function () {
    console.log("东东好帅load")
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
  setTitle: function (e) {
    console.log('设置title', e)
  },
  clickA() {
    console.log('CLickA')
  },
  clickB() {
    console.log('CLickB')
  },
  clickC() {
    console.log('CLickC')
  },
  captureA() {
    console.log('captureA')
  },
  captureB() {
    console.log('captureB')
  },
  captureC() {
    console.log('captureC')
  },
})