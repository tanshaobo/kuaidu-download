let btnDownLoad = document.querySelector('.btn-download')
let isWeChat = document.querySelector('.is-wechat')
btnDownLoad.onclick = function () {
  _czc.push(["_trackEvent",'Android下载','下载'])
  let u = navigator.userAgent
  let WeChatReg = u.indexOf('MicroMessenger') > -1
  if (WeChatReg) {
    isWeChat.style.display = 'block'
  } else {
    window.location.href = 'http://upld.17k.ren/common/apk/kuaidu_3_3_7_web_0422_1.apk'
  }
}
isWeChat.onclick = function () {
  isWeChat.style.display = 'none'
}
