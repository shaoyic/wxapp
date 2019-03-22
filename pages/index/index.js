//index.js
//获取应用实例
const app = getApp();
let util = require('../../utils/util.js');
const dataObj = require('../../api/data.js');
let person_list = dataObj.persons;
let tm = null;

Page({
  data: {
    model: 1,
    sh_num: 0,
    sh_status: false,
    money: 0,
    data: [],
    showindex:2
  },
  getTime: function () {
    for (let i = 0; i < person_list.length; i++) {
      let time = Date.parse(new Date()) - (person_list.length - 1 - i) * 60 * 1000;
      person_list[i].time = util.getDate(time);
    }
  },
  onLoad: function () {
    let  that = this;
    dataObj.getRedData().then(res=>{
      //console.log(res.data.data);
      that.setData({
        data: res.data.data,
        showindex: res.data.status
      });
    });

    wx.showShareMenu({
      withShareTicket: true
    })
    
    person_list.sort(function (a, b) { return Math.random() > .5 ? -1 : 1; });
    for(let i = 0; i < person_list.length; i++){
      person_list[i].time = that.getTime();
    }



    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          screenWidth: res.windowWidth,
          screenHeight: res.windowHeight
        });
      }
    });
    // 1.先判断key是否存在
    var key = wx.getStorageSync('my_key');
    // 2.如果不存在,则创建本地缓存
    if (key == '') {
      // 1.保存题目
      // console.log(2);
      wx.setStorage({
        key: 'my_key',
        data: {
          num: 1
        }
      })
    }
  },
  onShow: function(){
    let that = this;
    let persons = that.getPerson();
  
    that.setData({
      persons: persons,
    });
    let pos = 1;
    setInterval(()=>{
      if (pos > person_list.length){
        pos = 0;
      }
      let persons = that.getPerson(pos);
      that.setData({
        persons: persons,
      });
      pos++;
    }, 3000);

  },
  getPerson: function(pos = 0){
    let arrs = [];
    for(let i = 0; i < 6; i++){
      let loop = (pos + i) % (person_list.length - 1);
      arrs[5 - i] = person_list[loop];
    }
    return arrs;
  },
  open: function(){
    let that = this;
    that.setData({
      open: 'open',
    })
    setTimeout(()=>{
      that.setData({
        model: 2,
        money: 5000 + Math.round(Math.random() * 5000),
      });
    }, 2000);
  },

  getMoney: function(){
    let that = this;
    let date = new Date();
    let overtime = (date.getMonth() + 1) + '月' + ((date.getDate() + 1) < 10 ? '0' + (date.getDate() + 1) + '日' : (date.getDate() + 1) + '日');
    that.setData({
      sh_status:true,
      sh_num: 0,
      overtime: overtime,
    });
  },
  close: function(){
    let that = this;
    that.setData({
      sh_status: false,
      sh_num: 0,
    });
  },

  onShareAppMessage: function (e) {
    let that = this;
    let num = e.target.dataset.num;
    //console.log(num);
    clearTimeout(tm);
    tm = null;
    that.setData({
      sh_num: null
    });
    if(num >= 4){
      that.setData({
        sh_status: false,
        sh_num: 0,
      });
    }
    tm = setTimeout(()=>{
          that.setData({
            sh_num: num + 1,
          });
    }, 1000);
    return {
      title: that.data.data[9],
      imageUrl: that.data.data[10],
      path: "pages/index/index"
    }
  }
})
