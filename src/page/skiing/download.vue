<template>
  <div class="download">
    <div class="download-link">
      <div class="download-img">
        <img class="down-img" src="//source.qunarzz.com/site/images/wap/touch/images/v2/images1x/top-logo.png">
      </div>
      <div class="download-info">
        <h2 class="down-title">去哪儿旅行</h2>
        <div class="down-name">
          超过
          <span class="down-num">4.6亿</span>
          人的聪明选择
        </div>
      </div>
      <div class="download-btn" @click='handelDownloadClick'>下载客户端</div>
      <div class="download-close">
        <img class="down-close-img" src="//source.qunarzz.com/site/images/wap/touch/images/v2/images1x/modifydelete.png">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      handelDownloadClick () {
        const str = window.navigator.userAgent
        if (str.indexOf('Android') > -1) {
          window.location = 'https://touch.qunar.com/h5/download?bd_source=qunar&scheme=home'
        } else if (str.indexOf('iPhone') > -1) {
          window.location = 'https://itunes.apple.com/cn/app/id395096736'
        }
      }
    }
  }
</script>

<style scoped>
  .download{
    height: 1.2rem;
    font-size: 0;
    background-color: #000;
  }
  .download-link{
    position: fixed;
    top: 0;
    z-index: 5;
    height: 1.2rem;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    font-size: 0.24rem;
    padding: 0.2rem 0;
    box-sizing: border-box;
  } 
  .download-img{
    width: 1.2rem;
    text-align: center;
    position: absolute;
  }
  .down-img{
    width:0.8rem;
    height: 0.8rem;
  }
  .download-info{
    position: absolute;
    left: 1.2rem;
  }
  .down-title{
    font-size: 0.44rem;
    color: #25A4BB;
    font-weight: bold;
    line-height: 0.44rem;
  }
  .down-name{
    color: #c4c4c4;
    line-height: 0.4rem;
  }
  .down-num{
    font-size: 0.28rem;
    color: #fab400;
    font-weight: bold;
  }
  .download-btn{
    position: absolute;
    width: 1.6rem;
    height: 0.66rem;
    top: 0.24rem;
    right: 0.9rem;
    border-bottom: 0.06rem solid #e58700;
    font-size: 0.28rem;
    text-align: center;
    border-radius: 0.1rem;
    line-height: 0.66rem;
    font-weight: bold;
    color: #fff;
    background-color: #f4b000;
  }
  .download-close{
    position: absolute;
    top: 0.1rem;
    right: 0.1rem;
    width: 0.4rem;
    height: 0.4rem;
  }
  .down-close-img{
    width: 100%;
  }
</style>