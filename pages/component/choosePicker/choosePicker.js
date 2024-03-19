Component({
  properties: {
    pickerShow: {
      type: Boolean,
      value: false,
    },
    pickerTitle: {
      type: String,
      value: ''
    },
    dataList: {
      type: Array,
      value: []
    }
  },

  data: {},

  attached: function () {},

  ready: function () {},

  methods: {
    // 取消按钮
    onCancel: function () {
      this.setData({
        pickerShow: false
      })
    },
    // 确定按钮
    onConfirm: function (event) {
      const { picker, value, index } = event.detail;
      console.log( picker, value, index );
      this.triggerEvent('confirmItem', event.detail)
      this.onCancel()
    }
  }
})