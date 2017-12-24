<template>
  <div>
    <div class="tab" ref='tab'>
      <ul class="tab-group" @click='handelTabClick'>
        <li class="tab-group-item tab-active" name='1' ref="item1">行程介绍</li>
        <li class="tab-group-item" name='2' ref="item2">费用说明</li>
        <li class="tab-group-item" name='3' ref="item3">使用说明</li>
      </ul>
    </div>
    <div class="prd-group scheduling" ref='scheduling' name='1'>
      <div class="sche-item">
        <div class="sche-item-out">
          <div class="item-out-inner">
            <div class="inner-item">
              <div class="inner-item-tit">
                <i class="iconfont">&#xe619;</i>
                交通
              </div>
              <div class="inner-item-con">汽车往返</div>
            </div>
            <div class="inner-item">
              <div class="inner-item-tit">
                <i class="iconfont">&#xe619;</i>
                交通
              </div>
              <div class="inner-item-con">汽车往返</div>
            </div>
          </div>
        </div>
        <div class="sche-item-head">行程亮点</div>
        <div class="sche-item-con">
          ★故宫深度游，不一样的体验<br>
          ★逛帝王之家，走皇家园林<br>
          ★无线耳麦*无需扎堆*聆听历史
        </div>
      </div>
      <h3 class="sche-headtext">行程安排</h3>
      <div class="arrange">
        <div class="arrange-item">
          <span class="arrange-time">7:30</span>
          <div class="arrange-info">
            <i class="iconfont">&#xe600;</i>
            <a href="#" class="arr-info-title">集合地点</a>
            <span class="arr-info-desc">北京市东城区天安门广场(人民英雄纪念碑北侧)</span>
          </div>
        </div>
        <div class="arrange-item">
          <span class="arrange-time">7:30</span>
          <div class="arrange-info">
            <i class="iconfont">&#xe600;</i>
            <a href="#" class="arr-info-title">集合地点</a>
            <span class="arr-info-desc">北京市东城区天安门广场(人民英雄纪念碑北侧)</span>
          </div>
        </div>
      </div>
      <a href="javascript:;">
        <div class="sche-bottom">
          查看详细产品介绍
          <i class="iconfont">&#xe604;</i>
        </div>
      </a>
    </div>
    <div class="prd-group costlist" ref='costlist'  name='2'>
      <h3 class="cost-head">
        费用及退款说明
      </h3>
      <div class="cost-con">
        <h4 class="cost-con-title">费用包含</h4>
        <div class="cost-include">
          <div class="cost-in-item">
            <h4 class="cost-in-title">门票</h4>
            <p class="cost-in-info">
              【基础版】天安门广场+故宫<br>
              【基础版】天安门广场+故宫<br>
              【基础版】天安门广场+故宫<br>
              【基础版】天安门广场+故宫<br>
              【基础版】天安门广场+故宫<br>
              【基础版】天安门广场+故宫<br>
              【基础版】天安门广场+故宫
            </p>
          </div>
        </div>
        <h4 class="cost-con-title">费用不含</h4>
        <div class="cost-include">
          <div class="cost-in-item">
            <h4 class="cost-in-title">交通</h4>
            <p class="cost-in-info">
              【基础版】天安门广场+故宫无需用车
            </p>
          </div>
        </div>
        <h4 class="cost-con-title">退款说明</h4>
        <p class="cost-con-desc">
          退款时间：使用日期截止前1天12:00前可以申请退款;<br> 12：00前买家通知取消，费用全退！免费改期！<br>
          退款时间：使用日期截止前1天12:00前可以申请退款; <br>12：00前买家通知取消，费用全退！免费改期！<br>
          12：00后或当天临时通知取消，收取全单100%的损失费。。 
        </p>
      </div>
      <div class="cost-more">
        更多退款说明
        <i class="iconfont">&#xe62d;</i>
      </div>
    </div>
    <div class="prd-group instructions" ref='instructions' name='3'>
      <h3 class="cost-head">
        使用说明
      </h3>
      <div class="inst-con">
        <h4 class="cost-con-title">出团信息</h4>
        <p class="cost-con-desc">
          商家会在出游当天的0点前与您确认出团信息。若您在超过此时间预订，商家会在您预订成功后120分钟内与您确认出团信息。<br> 商家确认短信发送时间：下单成功后导游会提前一天18:00--20:00内发送。 
        </p>
        <h4 class="cost-con-title">预定须知</h4>
        <p class="cost-con-desc">
          1、儿童价：指1.2米以下儿童，含车位费、讲解费以及服务费。(儿童不论大小，均需占座，请按实际人数下单)。<br>  
          1、儿童价：指1.2米以下儿童，含车位费、讲解费以及服务费。(儿童不论大小，均需占座，请按实际人数下单)。<br>  
          1、儿童价：指1.2米以下儿童，含车位费、讲解费以及服务费。(儿童不论大小，均需占座，请按实际人数下单)。<br>  
          1、儿童价：指1.2米以下儿童，含车位费、讲解费以及服务费。(儿童不论大小，均需占座，请按实际人数下单)。<br>  
          1、儿童价：指1.2米以下儿童，含车位费、讲解费以及服务费。(儿童不论大小，均需占座，请按实际人数下单)。<br>  
          1、儿童价：指1.2米以下儿童，含车位费、讲解费以及服务费。(儿童不论大小，均需占座，请按实际人数下单)。<br>  
        </p>
      </div>
      <div class="cost-more">
        更多使用说明
        <i class="iconfont">&#xe62d;</i>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Reserve',
    methods: {
      handelTabClick (e) {
        if (e.target.getAttribute('name') === '1') {
          document.documentElement.scrollTop = this.$refs.scheduling.offsetTop - 100
        } else if (e.target.getAttribute('name') === '2') {
          document.documentElement.scrollTop = this.$refs.costlist.offsetTop - 100
        } else if (e.target.getAttribute('name') === '3') {
          document.documentElement.scrollTop = this.$refs.instructions.offsetTop - 100
        }
      },
      handleScroll () {
        this.scrolled = window.scrollY
        if (this.scrolled > this.$refs.tab.offsetTop - 44) {
          this.$refs.tab.style.position = 'fixed'
          this.$refs.tab.style.top = 44 + 'px'
        } else {
          this.$refs.tab.style.position = ''
        }
        if (this.$refs.scheduling.offsetTop <= this.scrolled) {
          this.$refs.item1.classList.add('tab-active')
        } else {
          this.$refs.item1.classList.remove('tab-active')
        }
      }
    },
    mounted () {
      window.addEventListener('scroll', this.handleScroll)
    }
  }
</script>

<style scoped>
  .tab{
    width: 100%;
    border-top: 0.2rem solid #f5f5f5;
    background-color: #fff;
    z-index: 99;
  }
  .tab-group{
    display: flex;
    position: relative;
  }
  .tab-group-item{
    flex: 1;
    float: left;
    text-align: center;
    height: 0.4rem;
    padding: 0.2rem 0;
  }
  .tab-active{
    border-bottom: 0.04rem solid #00afc7;
    color: #00afc7;
  }
  .tab-group::after{
    content: "";
    overflow: hidden;
    position: absolute;
    width: 100%;
    bottom: 0;
    border-bottom: 1px solid #e0e0e0;
  }
  .sche-item{
    margin-top: 0.2rem;
    background-color: #fff;
    padding: 0 0.2rem;
  }
  .sche-item-out{
    padding: 0.24rem 0;
  }
  .item-out-inner{
    background-color: #f5f5f5;
    border-radius: 0.1rem;
    padding: 0.2rem;
  }
  .inner-item{
    position: relative;
    zoom: 1;
    overflow: hidden;
    margin-bottom: 0.2rem;
  }
  .inner-item:last-child{
    margin-bottom: 0;
  }
  .inner-item-tit{
    position: absolute;
    width: 1.2rem;
    color: #212121;
  }
  .inner-item-con{
    padding-left: 1.2rem;
    line-height: 0.36rem;
    color: #616161;
  }
  .sche-item-head{
    margin-top: 0.1rem;
    color: #616161;
    font-size: .4rem;
  }
  .sche-item-con{
    padding: .24rem 0 .3rem 0;
    border-bottom: 1px dashed #dadada;
    color: #616161;
    font-size: .28rem;
    line-height: .44rem;
    max-height: 1.32rem;
    overflow: hidden;
  }
  .sche-headtext{
    color: #616161;
    font-size: .4rem;
    margin: .3rem 0 0 .2rem;
  }
  .arrange{
    padding: 0.2rem;
    overflow: hidden;
    color: #616161;
    font-size: .28rem;
    line-height: .4rem;
  }
  .arrange-time{
    color: #212121;
    overflow: hidden;
    float: left;
    width: .72rem;
    height: .44rem;
    white-space: nowrap;
  }
  .arrange-info{
    position: relative;
    margin-left: .76rem;
    padding-left: .7rem;
    font-size: .28rem;
    padding-bottom: .1rem;
  }
  .arrange-info i{
    position: absolute;
    top: 2px;
    left: .2rem;
    color: #00afc7;
    font-size: .28rem;
  }
  .arr-info-title{
    display: block;
    color: #00afc7;
  }
  .arr-info-desc{
    color: #616161;
    font-size: .28rem;
  }
  .arrange-info:after{
    content: '';
    position: absolute;
    bottom: -.4rem;
    left: .04rem;
    width: 1px;
    height: 100%;
    margin-left: .3rem;
    border-radius: 3px;
    background-color: rgba(217,217,217,0.7);
  }
  .sche-bottom{
    height: .8rem;
    position: relative;
    color: #616161;
    font-size: .28rem;
    line-height: .8rem;
    text-align: center;
    margin-top: .1rem;
    border-top: 1px dashed #dadada;
  }
  .sche-bottom:before{
    content: "";
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    border-bottom: 1px solid #e0e0e0;
    transform: scaleY(0.5);
  }
  .cost-head{
    overflow: hidden;
    position: relative;
    height: .84rem;
    padding: 0 .2rem;
    color: #212121;
    font-size: .32rem;
    line-height: .84rem;
    text-indent: .16rem;
  }
  .cost-head:after{
    content: " ";
    position: absolute;
    top: .28rem;
    left: .2rem;
    width: .06rem;
    height: .28rem;
    background: #00bcd4;
    border-radius: .06rem;
  }
  .cost-head:before{
    content: "";
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    border-bottom: 1px solid #e0e0e0;
    transform: scaleY(0.5);
  }
  .cost-con{
    overflow: hidden;
    padding: 0 .24rem;
    color: #616161;
    font-size: .28rem;
    line-height: .4rem;
  }
  .cost-con-title{
    padding: .24rem 0 .1rem;
    color: #ff8300;
    font-size: .3rem;
    line-height: .42rem;
  }
  .cost-con-desc{
    height: 2rem;
    padding-bottom: .2rem;
    color: #616161;
    word-wrap: break-word;
    white-space: normal;
    word-break: break-word;
  }
  .cost-more{
    position: relative;
    padding: .24rem 0 .3rem;
    height: .4rem;
    color: #616161;
    font-size: .28rem;
    line-height: .4rem;
    text-align: center;
  }
  .cost-include{
    position: relative;
  }
  .cost-in-item{
    overflow: hidden;
    position: relative;
    color: #212121;
    background: #f5f5f5;
    font-size: .28rem;
    line-height: .4rem;
  }
  .cost-in-title{
    position: absolute;
    padding: .2rem 0;
    width: 1.8rem;
    text-align: center;
  }
  .cost-in-info{
    margin-left: 1.8rem;
    padding: .2rem;
    background: #fff;
    color: #616161;
  }
  .inst-con{
    overflow: hidden;
    padding: 0 .24rem;
    color: #616161;
    font-size: .28rem;
    height: 4.84rem;
  }
</style>