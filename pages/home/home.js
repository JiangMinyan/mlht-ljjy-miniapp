const util = require('../../common/utils/util.js')
const app = getApp()

Page({
  data: {
      StatusBar: app.globalData.StatusBar,
      CustomBar: app.globalData.CustomBar,
      array: [{ msg: '1' }, { msg: '2' }],
      zero:0,
      obj1: {
          a: 1,
          b: 2
      },
      item: {
          index: 0,
          msg: 'this is a template',
          time: '2016-09-15'
      }
  },
  onLoad: function (query) {
      util.sayHello('MINA')
      util.tool()
  },
  onShareAppMessage(res){
      if(res.from === 'button'){
          console.log(res.target);
      }
      return {
          title: '转发标题'
      }
  },
    searchHome(e){
        console.log(e);
    }
})
