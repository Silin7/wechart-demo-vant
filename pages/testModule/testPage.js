// pages/homeModule/homePage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pickerShow: false,
    pickerList: [
      { text: '交通代步', value: '01' } ,
      { text: '手机数码', value: '02' } ,
      { text: '家用电器', value: '03' } ,
      { text: '个护日用', value: '04' } ,
      { text: '家居家装', value: '05' } ,
      { text: '母婴用品', value: '06' } ,
      { text: '文体图书', value: '07' } ,
      { text: '服饰箱包', value: '08' } ,
      { text: '其他物品', value: '09' } 
    ]
  },
  defaultBtn() {
    this.setData({
      pickerShow: true
    })
    console.log(this.data.pickerShow);
  },
  confirmItem(event) {
    console.log(event.detail.value);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})