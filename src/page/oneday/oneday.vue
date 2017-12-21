<template>
  <div class="background">
    <header>
      <div class="back">
        <span class="iconfont">&#xe624;</span>
      </div>
      <div class="search">
        <input type="text" value="一日游" placeholder="输入城市或景点" />
      </div>
      <div class="click-search">
        <a href="#">搜索</a>
      </div>
    </header>

    <main>
      <div class="address-select">
        <div class="address wrapper">
          <ul class="content">
            <li v-for="address in addressInfo" :key="address.id">
              <span>{{address.address}}</span>
            </li>
          </ul>
        </div>
        <div class="select" @click="handlePullDown">
          <span class="iconfont">&#xe62d;</span>
        </div>
      </div>

      <div class="mask" v-if="pullDown" ref="mask">
        <div class="pull-down">
          <div class="address-down">
            <div class="pulldown-title">
              <span>游玩景点</span>
              <em>(可所选)</em>
              <i class="iconfont" @click="handlePullDown">&#xe620;</i>
            </div>
            <div class="pulldown-wrapper">
              <ul class="pulldown-cont">
                <li v-for="address in addressInfo" :key="address.id">
                  <span>{{address.address}}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="recommend">
        <div class="recommend-cont" v-for="recommends in recommendInfo" :key="recommends.id">
          <div class="img-box">
            <img :src="recommends.imgUrl" alt="" />
          </div>
          <div class="describe">
            <p>{{recommends.discrebe}}</p>
            <div class="start">
              <span>{{recommends.start}}</span>
              <span>{{recommends.self}}</span>
              <span>{{recommends.shop}}</span>
            </div>
            <div class="indent">
              <span>{{recommends.indent}}</span>
            </div>
            <div class="price">
              <span class="price-mark">￥</span>
              <em class="price-cont">{{recommends.price}}</em>
              <span class="price-up">起</span>
            </div>
          </div>
        </div>
      </div>
    </main>

    <footer>
      <div class="click-jump">
        <a href="#" class="up-page">上一页</a>
        <span>1&nbsp/&nbsp21</span>
        <a href="#" class="next-page">下一页</a>
      </div>
      <div class="where">
        <a href="#">去哪儿门票</a>
      </div>
    </footer>

    <transition name="fade">
      <div class="bottom" ref="bottom" v-show="show">
        <div>
          <span class="iconfont">&#xe62f;</span>
          <span>全部分类</span>
        </div>
        <div>
          <span class="iconfont">&#xe64d;</span>
          <span>筛选</span>
        </div>
        <div>
          <span class="iconfont">&#xe602;</span>
          <span>选择排序</span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'Oneday',
    data () {
      return {
        addressInfo: [],
        recommendInfo: [],
        scrolled: null,
        scrollTop: null,
        show: false,
        pullDown: false
      }
    },
    methods: {
      getOnedayMes () {
        this.$http.get('/static/oneday.json')
          .then(this.handleOneDaySucc.bind(this))
      },
      handleOneDaySucc (res) {
        this.addressInfo = res.body.data.address
        this.recommendInfo = res.body.data.recommends
      },
      handleScroll () {
        this.scrolled = window.scrollY
        var that = this
        setTimeout(function () {
          that.scrollTop = that.scrolled
        }, 0)
        var scrollResult = this.scrollTop - this.scrolled
        if (scrollResult < 0) {
          this.show = false
          this.$refs.bottom.style.position = 'fixed'
          this.$refs.bottom.style.bottom = 0
        } else {
          this.show = true
        }
        if (this.pullDown) {
          this.$refs.mask.style.position = 'fixed'
          this.$refs.mask.style.bottom = 0
        }
      },
      handlePullDown () {
        this.pullDown = !(this.pullDown)
        this.$nextTick(() => {
          this.scroll.refresh()
        })
      }
    },
    mounted () {
      this.getOnedayMes()
      window.addEventListener('scroll', this.handleScroll)
    },
    distroyed () {
      window.scrollY = null
    },
    updated () {
      if (!this.pullDown) {
        this.scroll = new BScroll('.wrapper', {
          scrollX: true
        })
      } else {
        this.scroll = new BScroll('.pulldown-wrapper')
      }
    },
    watch: {
      addressInfo () {
        this.$nextTick(() => {
          this.scroll.refresh()
        })
      }
    }
  }
</script>
<style scoped>
  .fade-enter,
  .fade-leave-to {
    opacity: 0
  }
  .fade-enter-active {
    transition: opacity 2s
  }
  .fade-leave-active {
    transition: opacity 2s
  }
  .background {
    background: #ccc;
  }
  header {
    display: flex;
    background: #00bcd5;
    height: .88rem;
  }
  header .search {
    box-sizing: border-box;
    display: flex;
    padding: .15rem .2rem;
    flex: 1;
  }
  .search input {
    width: 100%;
    border: none;
    border-radius: .1rem;
    height: 100%;
    padding: 0 .2rem;
  }
  header .back {
    display: flex;
    align-items: center;
    font-size: .36rem;
    color: #fff;
    margin: 0 .2rem;
    font-weight: 900;
  }
  .click-search a {
    line-height: .88rem;
    font-size: .28rem;
    color: #fff;
    margin-right: .2rem;
  }
  .address-select {
    display: flex;
    box-sizing: border-box;
    background: #e6e7e9;
  }
  .address {
    display: flex;
    height: .68rem;
    box-sizing: border-box;
    padding: .08rem .12rem;
    overflow: hidden;
    border-bottom: .01rem solid #ccc;
  }
  .address ul {
    display: flex;
  }
  .address ul li {
    position: relative;
    padding: .04rem .08rem;
  }
  .address ul li span {
    display: block;
    background: #fff;
    line-height: .56rem;
    padding: 0 .22rem;
    white-space: nowrap;
  }
  .select {
    display: flex;
  }
  .select span {
    line-height: .88rem;
    text-align: center;
    position: relative;
    width: .8rem;
  }
  .recommend {
    display: flex;
    flex-direction: column;
    background: #fff;
  }
  .recommend-cont {
    display: flex;
    position: relative;
    padding: .2rem .2rem 0 .2rem;
  }
  .recommend-cont .img-box {
    height: 1.6rem;
    margin-right: .2rem;
  }
  .recommend-cont .img-box img {
    height: 100%;
  }
  .describe {
    padding-bottom: .2rem;
    border-bottom: .01rem solid #ccc;
  }
  .describe p {
    font-size: .3rem;
    line-height: .3rem;
  }
  .start {
    display: flex;
    box-sizing: border-box;
  }
  .start span {
    line-height: .24rem;
    padding: .2rem .3rem;
    font-size: .24rem;
  }
  .start span:first-child {
    color: #00bcd5;
  }
  .indent span {
    font-size: .3rem;
    color: #ccc;
  }
  .price {
    position: absolute;
    right: .2rem;
    bottom: .48rem;
    display: flex;
    align-items: flex-end;
  }
  .price-mark {
    color: #ff8300;
    font-size: .22rem;
    line-height: .22rem;
    font-weight: 900;
  }
  .price-cont {
    color: #ff8300;
    font-size: .32rem;
    line-height: .32rem;
    font-weight: 900;
  }
  .price-up {
    font-size: .2rem;
    color: #ccc;
  }
  .click-jump {
    display: flex;
    justify-content: center;
    padding: .25rem;
  }
  .click-jump a {
    line-height: .6rem;
    padding: .01rem .3rem;
    border: .01rem solid #00bcd5;
    background: #fff;
  }
  .click-jump span {
    line-height: .6rem;
    margin: 0 .2rem;
  }
  .where {
    text-align: center;
    padding-bottom: .2rem;
  }
  .where a {
    line-height: .2rem;
  }
  footer {
    background: #f5f5f5;
  }
  .bottom {
    display: flex;
    justify-content: space-around;
    background: rgba(0, 0, 0, .8);
    width: 100%;
  }
  .bottom div {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
  }
  .bottom span {
    font-size: .35rem;
    color: #fff;
    line-height: .42rem;
  }
  main {
    position: relative;
  }
  .pulldown-title {
    display: flex;
    position: relative;
  }
  .pulldown-title span {
    line-height: .8rem;
    font-size: .28rem;
    color: #212121;
  }
  .pulldown-title em {
    line-height: .8rem;
    font-size: .24rem;
    color: #212121;
  }
  .pulldown-title i {
    line-height: .8rem;
    font-size: .3rem;
    color: #212121;
    position: absolute;
    right: 0;
    padding: 0;
    font-weight: 900;
  }
  .pulldown-cont {
    display: flex;
    flex-wrap: wrap;
  }
  .pulldown-cont span {
    display: block;
    background: #fff;
    line-height: .56rem;
    padding: 0 .22rem;
    margin-right: .2rem;
    margin-bottom: .2rem;
  }
  .mask {
    position: absolute;
    top: 0;
    z-index: 3;
    padding: 0 .2rem;
    height: 10rem;
    background: #e5e7e8;
  }
  .pulldown-wrapper {
  	height: 6rem;
  	overflow: hidden;
  	background: #e5e7e8;
  }
</style>