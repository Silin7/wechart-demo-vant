import esRequest from './utils/esRequest';

App({
  onLaunch: function () {
    // 获取openid和session_key
    wx.login({
      success: (res) => {
        if (res.code) {
          console.log(res.code);
          // let data = {
          //   code: res.code,
          // }
          // esRequest('wx_login', data).then(res => {
          //   if (res && res.errMsg === "request:ok") {
          //     wx.setStorageSync('openid', res.data.openid)
          //     wx.setStorageSync('session_key', res.data.session_key)
          //   } else {
          //     console.warn('fail' + JSON.stringify(err))
          //   }
          // })
        }
      }
    })
  }
})