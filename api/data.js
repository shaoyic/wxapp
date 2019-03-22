const persons = [
  {
    "name": "陌上花开",
    "img": "https://wx.qlogo.cn/mmopen/vi_32/PToJRPEpmnB2JFoWzqaduibIhoPEIC3eHF5De58nCNicMQ7XUKvGBeFGsDDuG2NkNLNRhT2t78fpWFVzFOn6YBJQ/132",
    "money": 5130
  }, {
    "name": "似水流年",
    "img": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLAmoKvBZ4p9FZ1Lpup36dcMrZnWibic7PH8wPUtL1mgDuYhCKSBEw7WfJv8hh4iaJk7pGrljICCL2IQ/132",
    "money": 6235
  }, {
    "name": "顺其",
    "img": "https://wx.qlogo.cn/mmopen/vi_32/bNWNQqqDFcLtGpCR5pxjFOBvUPd4987pTruNS9WQsDbdbVBpnFgNuhNuvjaLib6VHmkt01eIQQKPt2xl8yyATRA/132",
    "money": 5638
  }, {
    "name": "破寂寞的天空！",
    "img": "https://wx.qlogo.cn/mmopen/vi_32/0DtUCTzj3GVLQPmZibUEZsz7rl3UNrr6ia9yYyah7kVPu6NiaicZjQTY76lDMgAIQCFpro8aFPXFD0tABaqWJyW67Q/132",
    "money": 5352
  }, {
    "name": "细兰",
    "img": "https://qqpublic.qpic.cn/qq_public/0/0-2154707812-952DF56EA81AC75D64881255C0EEA24C/0?fmt=jpeg&size=6&rs=3-3&h=130&w=130&ppv=1",
    "money": 5151
  }, {
    "name": "莫莫",
    "img": "https://qqpublic.qpic.cn/qq_public/0/0-2179512010-42B94DCC74765A3055090275F26805E7/0?fmt=jpeg&size=43&rs=2-2&h=130&w=130&ppv=1",
    "money": 5226
  }, {
    "name": "??",
    "img": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKwqOJ6wnhcexJ3thZib57shZV9cqQ1Vx4iaIWIey2cib8jyDgYsdUkUyEdN1zcDKSLnAdwzatbW9tSw/132",
    "money": 5219
  }, {
    "name": "^ O ^ 梦之男孩 ^ O ^",
    "img": "https://qqpublic.qpic.cn/qq_public/0/0-2512738793-682D9AD07D0831E6169CB23D4684D768/0?fmt=jpeg&size=6&rs=3-3&h=130&w=130&ppv=1",
    "money": 5212
  }, {
    "name": "从零开始",
    "img": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJZO3Xkicd9Cy0Bd9xF22NFc4mzR0CoMqtI05PZvib30Gf7zehtgNNUXgRd62iaCv8RicrslgmuAolWNw/132",
    "money": 6410
  }, {
    "name": "Supreme",
    "img": "https://wx.qlogo.cn/mmopen/vi_32/YDH3ehzpSkAKPjhl1icz0S5H3sFMBeQzG32eZtkXAHyQicZ1jSjWge5ZF0C27HZiaJj98TiaHxH8HFZsjzEmCpzRIQ/132",
    "money": 5210
  }, {
    "name": "潘树星",
    "img": "https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83epDYE8lbgaygVwBuDItuVCD2qH9OPuBFS0PHsbiaQUEurOr0rstDwChjBQeknW44naoCVBk5I4taFQ/132",
    "money": 5391
  }, {
    "name": "yc",
    "img": "https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eoWeibIDIGkhicyaQpnR5Vy0X8JdH1eFoo6MKNlrz6oOInKAaZRbXYUdAevS6gLELibRyib3P3oEgVLxw/132",
    "money": 6414
  }, {
    "name": "^ o ^ 无限飞翔 ^ o ^ 外墙硅PU.EBS",
    "img": "https://wx.qlogo.cn/mmopen/vi_32/ZLU5MyemggWTjlAKoJ1ic8SVchwQPibEbAgCm0IFFaicQMLmMicMo5nJxajQfDib2k5gWHDV6HXnnicc4C8ZEfGzMfgw/132",
    "money": 5375
  }, {
    "name": " 。",
    "img": "https://wx.qlogo.cn/mmopen/vi_32/VpuZA6enbYCO3Nv2qEpUCQVluoVWxYlicib9R5JPpLgc1RdTHBTKYOYmTg8vV6lIwjN30JSgu2kGfia6dqdxicunjg/132",
    "money": 5284
  }, {
    "name": "人生如梦",
    "img": "https://qqpublic.qpic.cn/qq_public/0/0-2181718608-D09450F96ED8E0DDECC5276A8CF86D2E/0?fmt=jpeg&size=40&rs=4-4&h=130&w=130&ppv=1",
    "money": 6264
  }, {
    "name": " 努尔兰",
    "img": "https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eoQgjrOK8IEkYaUksDVLdcTDrEvn3AoZRlRUVPrcKy8StJ6D9j8kasBZqtAYCsv3sVudN5DiavT5kQ/132",
    "money": 5251
  }, {
    "name": " 厚德载物",
    "img": "https://wx.qlogo.cn/mmopen/vi_32/sofQBuKgVNZEcgqsB8LgibzWKIlXbfteicF5xpRBXmg2mutDJVxFoUeya1ylAj09osHR7Q9uoiagIjWia6QmH9QbZw/132",
    "money": 6245
  }, {
    "name": " 久睡成瘾ò",
    "img": "https://wx.qlogo.cn/mmopen/vi_32/PiajxSqBRaEJKYdQicvuYudOoNl0o5MkhsaDY7xQOjtawqsaoVyWocrB0qU5iab4ECIiaUlbbeCb3lUBEeOPVMZ32A/132",
    "money": 6232
  }, {
    "name": " 冰糖葫芦",
    "img": "https://wx.qlogo.cn/mmopen/vi_32/lOEg6gqth1OfmD7lJNRJglgclQGvpUc1kOiaQyMn2MLmpEgFOnyEjhGWSxCshNofdzAzLutUazGcQzjibfgbE3hg/132",
    "money": 6164
  }, {
    "name": "li",
    "img": "https://qqpublic.qpic.cn/qq_public/0/0-2517906539-023C781EE97E3B3B8A4DBE0FFDE8288B/0?fmt=jpeg&size=9&rs=4-4&h=130&w=130&ppv=1",
    "money": 5159
  }, {
    "name": " Taciturn",
    "img": "https://qqpublic.qpic.cn/qq_public/0/0-2449685895-8FA61AE29C88576152D77F912A918E6E/0?fmt=jpeg&size=8&rs=4-4&h=130&w=130&ppv=1",
    "money": 5243
  }, {
    "name": " 本命夏目",
    "img": "https://qqpublic.qpic.cn/qq_public/0/0-3009761435-D84149207FCD562416AA76997D854365/0?fmt=jpeg&size=5&rs=3-3&h=130&w=130&ppv=1",
    "money": 5583
  }, {
    "name": " 梦兮_",
    "img": "https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eoYWnwLT0UicT0Hmuibdm12ibAcsGweyM5dOjvxXovjzB6qgbCZDKS9pukib4F9BVB3J6wwwKGFwafTog/132",
    "money": 5210
  }, {
    "name": " 冰雨",
    "img": "https://wx.qlogo.cn/mmopen/vi_32/e6R5f8nLnNHHrBW1NlkUABYckoB3N1mMiaWOEj071WUycJ72Ilnf1KELP4aZyFvMXA3HaVsEIJOFopkpgZJhBUg/132",
    "money": 6387
  }, {
    "name": "友贤",
    "img": "https://wx.qlogo.cn/mmopen/vi_32/QArXT8T4WlpHYG7F6e5efzrc3af7Y8lGHK2SwEDLNCib7y5QzB9fmeFAd3rRrzQEXGicV7zUDV1pVdnicET6qL8Ww/132",
    "money": 5431
  }, {
    "name": "本色",
    "img": "https://qqpublic.qpic.cn/qq_public/0/0-2562677319-5DD0C3B20D4499AA35F51648B163F7C4/0?fmt=jpeg&size=6&rs=4-4&h=130&w=130&ppv=1",
    "money": 6196
  }, {
    "name": "背若芒刺",
    "img": "https://wx.qlogo.cn/mmopen/vi_32/1ZcgbSZ1Q0e2W7d3ovDeQdKgvibE9z0pPhJIwKXJqsfLKboI2lSS1JaRqSfucd4zyHyGgmYVZ17WzeVribPicbtQQ/132",
    "money": 6167
  }, {
    "name": "张启森张洋的妈妈",
    "img": "https://qqpublic.qpic.cn/qq_public/0/0-2260709276-6228DCDC87C446EE433CF5BA6C4044CE/0?fmt=jpeg&size=5&rs=3-3&h=130&w=130&ppv=1",
    "money": 5237
  }, {
    "name": "仙妹儿",
    "img": "https://qqpublic.qpic.cn/qq_public/0/0-2907916243-0739CECF8F5538A8B7C20F599BA0F342/0?fmt=jpeg&size=8&rs=4-4&h=130&w=130&ppv=1",
    "money": 5278
  }, {
    "name": "淦",
    "img": "https://wx.qlogo.cn/mmopen/vi_32/eUD0KU8ALqpo8PpurzCTE4UKChACFl6wibAKhPwibAaTu3DWkwoCMB7RYMziaUmaow0DM6UfeBTicbib8TPW6LXbAVA/132",
    "money": 5129
  }, {
    "name": "醉了",
    "img": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJTywPCdTDoRPWGfmdyu8Qx8l4spHvmTPdriaJp6ictbxRtIUGEa2GZDlTvohwPErI2fMVF1SbcWfug/132",
    "money": 5239
  }, {
    "name": "handsome",
    "img": "https://qqpublic.qpic.cn/qq_public/0/0-2253805864-657F67CDBA46E8F0F8144B7639DD87D2/0?fmt=jpeg&size=4&rs=2-2&h=130&w=130&ppv=1",
    "money": 5367
  }, {
    "name": "野侃",
    "img": "https://qqpublic.qpic.cn/qq_public/0/0-2272788422-BFF762C20F7A536925D1587DD6632156/0?fmt=jpeg&size=5&rs=3-3&h=130&w=130&ppv=1",
    "money": 5345
  }, {
    "name": "ove!!!示爱",
    "img": "https://qqpublic.qpic.cn/qq_public/0/0-2154707812-952DF56EA81AC75D64881255C0EEA24C/0?fmt=jpeg&size=6&rs=3-3&h=130&w=130&ppv=1",
    "money": 5534
  }, {
    "name": "春雨的颜色",
    "img": "https://wx.qlogo.cn/mmopen/vi_32/V8oDkDQoExTsN3JMFKh5fVIwPM89ALXGeLpyvcRR0LxlKYxvPObDjjiccslborFK4YkUt8qDFIRqnO4nmyqURvA/132",
    "money": 6241
  }, {
    "name": "青儿",
    "img": "https://qqpublic.qpic.cn/qq_public/0/0-2763395920-0EFE037D0DCBA01C9D4CE0ED6A51E2DF/0?fmt=jpeg&size=39&rs=2-2&h=130&w=130&ppv=1",
    "money": 5135
  }, {
    "name": "天天向上",
    "img": "https://qqpublic.qpic.cn/qq_public/0/0-3026167573-513B6DFA9D95F9194E6A8F063CF6DAA2/0?fmt=jpeg&size=5&rs=3-3&h=130&w=130&ppv=1",
    "money": 6123
  }, {
    "name": "搁浅",
    "img": "https://qqpublic.qpic.cn/qq_public/0/0-2707772639-9D20AB31BE227E4F3E1B98E5F37012A3/0?fmt=jpeg&size=5&rs=3-3&h=130&w=130&ppv=1",
    "money": 6123
  }, {
    "name": "福先",
    "img": "https://wx.qlogo.cn/mmopen/vi_32/OLLPKUsPKibNx5Bl8MABfwdicrAsIic9edPibiaMmjwsibF8s0nxEicNhyJLq8c8dBaP0NicR3kpKe0kqKpEWUqIcIibWzQ/132",
    "money": 5272
  }, {
    "name": "二次元",
    "img": "https://qqpublic.qpic.cn/qq_public/0/0-2418820878-6F39DB295FE7EB78B386DD6E2B5520CC/0?fmt=jpeg&size=4&rs=2-2&h=130&w=130&ppv=1",
    "money": 5110
  }
]

function getRedData(){
  return new Promise((reslove, reject) => {
    wx.request({
      method: 'post',
      data:{pkey:'wm002'},
      url: getApp().globalData.apiUrl + 'content/get_red_text',
      success: function(res){
        
        reslove(res);
      }
    })
  });
}

module.exports = {

  persons: persons,

  getRedData: getRedData
}