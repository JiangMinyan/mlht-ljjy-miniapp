const app = getApp()

Page({
        data: {
                StatusBar: app.globalData.StatusBar,
                CustomBar: app.globalData.CustomBar,
                motto: '',
                userInfo: {},
                hasUserInfo: false,
                canIUse: wx.canIUse('button.open-type.getUserInfo'),
                unloginImage:'data:image/png;base64,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'
        },
        onLoad: function () {
                if (app.globalData.userInfo) {
                        this.setData({
                                userInfo: app.globalData.userInfo,
                                hasUserInfo: true
                        })
                } else if (this.data.canIUse) {
                        // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                        // 所以此处加入 callback 以防止这种情况
                        app.userInfoReadyCallback = res => {
                                this.setData({
                                        userInfo: res.userInfo,
                                        hasUserInfo: true
                                })
                        }
                } else {
                        // 在没有 open-type=getUserInfo 版本的兼容处理
                        wx.getUserInfo({
                                success: res => {
                                        app.globalData.userInfo = res.userInfo
                                        this.setData({
                                                userInfo: res.userInfo,
                                                hasUserInfo: true
                                        })
                                }
                        })
                }
        },
        getUserInfo: function (e) {
                console.log(e)
                app.globalData.userInfo = e.detail.userInfo
                this.setData({
                        userInfo: e.detail.userInfo,
                        hasUserInfo: true
                })
        }
})
