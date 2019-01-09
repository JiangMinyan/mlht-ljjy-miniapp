const app = getApp()

Page({
        data: {
                StatusBar: app.globalData.StatusBar,
                CustomBar: app.globalData.CustomBar
        },
        onLoad: function () {
            // this.wxScanCode();
        },
        wxScanCode: function (e) {
            wx.showLoading({
                title: '加载中'
            })
            wx.scanCode({
                success(res) {
                    console.log(res)
                },
                complete(){
                    wx.hideLoading()
                }
            })
        }
})
