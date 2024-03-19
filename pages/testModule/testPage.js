Page({
  data: {
    pickerShow: false,
    pickerList: [{
        text: '交通代步',
        value: '01'
      },
      {
        text: '手机数码',
        value: '02'
      },
      {
        text: '家用电器',
        value: '03'
      },
      {
        text: '个护日用',
        value: '04'
      },
      {
        text: '家居家装',
        value: '05'
      },
      {
        text: '母婴用品',
        value: '06'
      },
      {
        text: '文体图书',
        value: '07'
      },
      {
        text: '服饰箱包',
        value: '08'
      },
      {
        text: '其他物品',
        value: '09'
      }
    ]
  },
  onLoad() {},

  onShow() {},

  // choosePicker组件
  pickerBtn() {
    this.setData({
      pickerShow: true
    })
    console.log(this.data.pickerShow);
  },

  // choosePicker组件 弹框回调事件
  confirmItem(event) {
    console.log(event.detail.value);
  },

  // Toast弹框
  toastBtn() {
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
  },

  // modal弹框
  modalBtn() {
    wx.showModal({
      title: '我是标题', //提示的标题
      content: '我是内容', //提示的内容
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击了确定')
        } else if (res.cancel) {
          console.log('用户点击了取消')
        }
      }
    })
  },

  // action弹框
  actionBtn() {
    wx.showActionSheet({
      itemList: ['选项一', '选项二', '其它'], //文字数组
      success: (res) => {
        switch (res.tapIndex) {
          case 0:
            console.log('点击了 选项一')
            break;
          case 1:
            console.log('点击了 选项二')
            break;
          case 2:
            console.log('点击了 其它选项')
            break;
        }
      },
      fail(res) {
        console.log('取消选项')
      }
    })
  }
})