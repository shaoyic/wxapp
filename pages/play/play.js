// pages/answer/answer.js
var data = require('../../api/api.js');
var config = require("../../config")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    status: 0,
    id: 0,
    question_num: 1,
    question: '',
    lists: [],
    words: [],
    answer: [],
    answer_array: [],
    tishi: [],
    tishi_keys: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var title = config.data.name
    wx.setNavigationBarTitle({ title: title });
    //开启分享群获取参数功能
    wx.showShareMenu({
      withShareTicket: true
    })

    //获取数据
    data.getData(that);

    //同步从本地缓存中获取数据
    var question_num = wx.getStorageSync('my_key')
    var num = question_num.num;

    //处理数据
    var lists = that.data.lists;
    //console.log(lists[num-1])
    var id = lists[num - 1].id;
    var question = lists[num - 1].question;
    var answer = lists[num - 1].answer;
    answer = that.strTomap(answer);

    var words = that.data.words;
    var len = 9 - answer.length;
    var words_len = words.length;
    var rand = 0;
    var words_array = [];
    for (var i = 0; i < len; i++) {
      rand = Math.floor(Math.random() * words_len);
      words_array[i] = words[rand];
    }
    var tishi = answer.concat(words_array);
    var tishi_keys = [];
    tishi = tishi.sort();
    for (var i = 0; i < tishi.length; i++) {
      tishi_keys[i] = i;
    }

    var answer_array = [];
    for (var i = 0; i < answer.length; i++) {
      answer_array[i] = {
        val: '',
        key: ''
      };
    }

    //渲染数据
    that.setData({
      id: id,
      question_num: num,
      question: question,
      answer_array: answer_array,
      tishi: tishi,
      tishi_keys: tishi_keys,
      answer: answer
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    /*var that = this;
    var num = that.data.question_num;
    //保存本地缓存内容
    wx.setStorage({
      key: 'my_key',
      data: {
        num: num
      }
    })*/
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 字符串转换数组
   */
  strTomap: function (str) {
    var len = str.length;
    var answer = [];
    for (var i = 0; i < len; i++) {
      answer[i] = str[i];
    }
    return answer;
  },

  /**
   * 点击事件
   */
  push: function (e) {
    //获取数据
    var that = this;
    var key = e.target.dataset.key;
    var index = e.target.dataset.index
    var answer_array = that.data.answer_array;
    var tishi_keys = that.data.tishi_keys;

    //把正确的key还给提示框以实现出现
    tishi_keys[key] = key;

    //把自己的值置空
    answer_array[index].val = '';

    that.setData({
      tishi_keys: tishi_keys,
      answer_array: answer_array
    });

  },

  pull: function (e) {
    //获取数据
    var that = this;
    var index = e.target.dataset.id;
    var word = e.target.dataset.title;
    var tishi_keys = that.data.tishi_keys;
    var answer_array = that.data.answer_array;
    var answer_array_len = answer_array.length;
    var answer = that.data.answer;
    var pos = 0;

    //获取answer_array有多少个值
    pos = that.isfull(answer_array);

    /*三种情况*/
    // 1. 如果pos==answer_array_len,表示满了
    if (pos == answer_array_len) {
      //提示删除错误答案 
      wx.showToast({
        title: '请删除错误答案',
        image: '../../image/failed.png',
        duration: 1500,
      })
      return;
    }
    // 2.pos == answer_array_len - 1,表示差一个满了
    else if (pos == answer_array_len - 1) {

      //把key置不相同,实现隐藏
      tishi_keys[index] = -1;

      //判断答案框是否为空,为空赋值,否则跳过
      for (var i = 0; i < answer_array_len; i++) {
        if (answer_array[i].val == '') {
          answer_array[i].val = word;
          answer_array[i].key = index;
          break;
        }
      }

      that.setData({
        tishi_keys: tishi_keys,
        answer_array: answer_array
      });

      //比较answer_array与answer是否相等
      if (that.arrayContact(answer, answer_array)) {
        //回答正确而提交
        wx.showModal({
          title: '回答正确',
          showCancel: false,
          success: function () {
            that.listenerConfirm(that);
          }
        })
      } else {
        wx.showToast({
          title: '答错了',
          image: '../../image/failed.png',
          duration: 1500,
        })
      }

      return;
    }
    // 3.pos < answer_array-len - 1,表示差最少一个才满,可以继续填写,不用判断
    else {
      //把key置不相同,实现隐藏
      tishi_keys[index] = -1;

      //判断答案框是否为空,为空赋值,否则跳过
      for (var i = 0; i < answer_array_len; i++) {
        if (answer_array[i].val == '') {
          answer_array[i].val = word;
          answer_array[i].key = index;
          break;
        }
      }

      that.setData({
        tishi_keys: tishi_keys,
        answer_array: answer_array
      });
      return;
    }

  },

  //判断answer_array有多少个值
  isfull: function (answer_array) {
    var pos = 0;
    for (var i = 0; i < answer_array.length; i++) {
      if (answer_array[i].val == '') {

      } else {
        pos++;
      }
    }
    return pos;
  },

  //比较两个数组是否相等
  arrayContact: function (answer, answer_array) {
    if (answer.length != answer_array.length) {
      return false;
    }
    for (var i = 0; i < answer.length; i++) {
      if (answer[i] != answer_array[i].val) {
        return false;
      }
    }
    return true;
  },
  /**
   * 监听提交按钮
   */
  listenerConfirm: function (that) {
    //获取数据
    var id = parseInt(that.data.id);
    var num = id + 1;
    var lists = that.data.lists;
    var question = that.data.question;

    //保存本地缓存内容
    wx.setStorage({
      key: 'my_key',
      data: {
        num: num
      }
    })

    var id = lists[num - 1].id;
    var question = lists[num - 1].question;
    var answer = lists[num - 1].answer;
    answer = that.strTomap(answer);

    var words = that.data.words;
    var len = 9 - answer.length;
    var words_len = words.length;
    var rand = 0;
    var words_array = [];
    for (var i = 0; i < len; i++) {
      rand = Math.floor(Math.random() * words_len);
      words_array[i] = words[rand];
    }
    var tishi = answer.concat(words_array);
    var tishi_keys = [];
    tishi = tishi.sort();
    for (var i = 0; i < tishi.length; i++) {
      tishi_keys[i] = i;
    }

    var answer_array = [];
    for (var i = 0; i < answer.length; i++) {
      answer_array[i] = {
        val: '',
        key: ''
      };
    }

    //渲染数据
    that.setData({
      id: id,
      question_num: num,
      question: question,
      answer_array: answer_array,
      tishi: tishi,
      tishi_keys: tishi_keys,
      answer: answer
    });
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    var that = this;
    var status = that.data.status;
    var nickName = getApp().globalData.userInfo.nickName;
    var answer = that.data.answer;
    var question = that.data.question;
    answer = answer.toString();
    answer = answer.replace(/,/g, "");

    if (status == 0) {
      return {
        title: nickName + ': ' + question,
        path: '/pages/cover/cover',
        success: function (res) {
          var shareTicket = res.shareTickets;
          console.log(shareTicket);
          if (shareTicket) {
            var ticket = shareTicket[0];
            wx.getShareInfo({
              shareTicket: ticket,
              success: function (res) {
                shareobj.wxData_decrypt(that, res.encryptedData, res.iv, answer);
              }
            });
          } else {
            wx.showToast({
              title: '请分享给群好友',
              icon: "none"
            })
          }
        }
      }
    }
    if (status == 1) {
      return {
        title: nickName + ': ' + question,
        path: '/pages/cover/cover',
        success: function (res) {
          var shareTicket = res.shareTickets;
          if (shareTicket) {
            var ticket = shareTicket[0];
            wx.getShareInfo({
              shareTicket: ticket,
              success: function (res) {
                shareobj.wxData_decrypt(that, res.encryptedData, res.iv, answer);
              }
            });
          } else {
            //同步从本地缓存中获取数据
            var share_time = wx.getStorageSync('share_time_key')
            var time = share_time.time;
            var timestamp = Date.parse(new Date());
            if (timestamp - time < 10 * 60 * 1000) {
              wx.showToast({
                title: '十分钟分享一次才有效哟',
                icon: "none"
              })
            } else {
              wx.showModal({
                title: '答案提示',
                content: answer,
                showCancel: false,
              })
              // 保存分享时间
              wx.setStorage({
                key: 'share_time_key',
                data: {
                  time: timestamp
                }
              })
            }
          }
        }
      }
    }

  }

})