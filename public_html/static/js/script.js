let btnDownLoad = document.querySelector('.main')
let isWeChat = document.querySelector('.is-wechat')
btnDownLoad.onclick = down

function down() {
  _czc.push(["_trackEvent", 'Android下载', '下载'])
  let u = navigator.userAgent
  let WeChatReg = u.indexOf('MicroMessenger') > -1
  if (WeChatReg) {
    isWeChat.style.display = 'block'
  } else {
    window.location.href = 'http://upld.17k.ren/common/apk/kuaidu_3_3_7_fenxiang_0506_1.apk'
  }
}
isWeChat.onclick = function () {
  isWeChat.style.display = 'none'
}
