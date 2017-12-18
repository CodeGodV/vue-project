<template>
    <div>
        <div class="headerCon">
            <div class="header">    
                <router-link to="">
                    <span class="header-back iconfont">&#xe624;</span>
                </router-link>
                <div class="mp-header-title">
                    <div class="mp-header-citycon">
                        <span class="mp-header-city" @click="handleChina" :str="false">国内</span>
                        <span class="mp-header-city" @click="handleForeign" :str="false">海外</span>
                    </div>
                </div>           
            </div>
        </div>
        <div class="write">
            <input type="text" class="writeIn" placeholder="输入城市名或拼音">
        </div>
        <div class="mp-cityarea-group">
            <div class="mp-cityarea-title">您的位置</div>
            <div class="mp-cityarea-content">
                <a class="mp-cityitem-light">北京</a>
            </div>
        </div>
        <div class="popularCity">
            <div class="popCityTitle">热门城市</div>
            <div class="popCityCon">
                <a class="popCity" v-for="item in cityInfo" :key="item.id">{{item.name}}</a>
            </div>
        </div>
        <div class="city" v-for="item in chinaCityInfo">
            <li class="cityNum">{{item.number}}</li>
            <li class="cityList" v-for="items in item.address">{{items.name}}</li>
        </div>
        <div class="letters">
            <li>A</li>
            <li>B</li>
            <li>C</li>
            <li>D</li>
            <li>E</li>
            <li>F</li>
            <li>G</li>
            <li>H</li>
            <li>J</li>
            <li>K</li>
            <li>L</li>
            <li>M</li>
            <li>N</li>
            <li>P</li>
            <li>Q</li>
            <li>R</li>
            <li>S</li>
            <li>T</li>
            <li>W</li>
            <li>X</li>
            <li>Y</li>
            <li>Z</li>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Search',
  data () {
    return {
      str: '',
      cityInfo: [],
      chinaCityInfo: []
    }
  },
  methods: {
    getIndexData () {
      this.$http.get('/static/search.json')
      .then(this.handleAjaxSucc.bind(this))
    },
    handleAjaxSucc (res) {
      var body = res.body
      if (body.data && body && body.data.China) {
        this.cityInfo = body.data.China.popCity
        this.chinaCityInfo = body.data.China.ChinaCity
      }
    },
    handleChina: function (e) {
      if (this.str) {
        this.str = 'false'
        e.target.style.background = '#fff'
        e.target.style.color = '#00bcd2'
      } else {
        this.str = 'true'
        e.target.style.background = '#00bcd2'
        e.target.style.color = '#fff'
      }
    },
    handleForeign: function (e) {
      if (this.str) {
        this.str = 'false'
        e.target.style.background = '#fff'
        e.target.style.color = '#00bcd2'
      } else {
        this.str = 'true'
        e.target.style.background = '#00bcd2'
        e.target.style.color = '#fff'
      }
    }
  },
  created () {
    this.getIndexData()
  }
}
</script>

<style scoped>
    .headerCon{
        height: .88rem;
    }
    .header{
        position: fixed;
        width: 100%;
        height: .88rem;
        background: #00bcd2;
    }
    .header-back{
        display: inline-block;
        float: left;
        width: .4rem;
        line-height: .88rem;
        color: #fff;
        font-size: .36rem;
        margin-left: .11rem;
    }
    .mp-header-title{
        display: flex;
        justify-content: center;
        text-align: center;
    }
    .mp-header-city{
        display: block;
        float: left;
        width: 2rem;
        height: .56rem;
        color: #fff;
        text-align: center;
        line-height: .56rem;
        margin-top: .15rem;
        font-size: .28rem;
        border: .02rem solid #fff;
    }
    .mp-header-city:first-child{
        background: #fff;
        color: #00bcd2;
        border-radius: .06rem 0 0 .06rem;
    }
    .write{
        display: flex;
        justify-content: center;
        height: .73rem;
        line-height: .88rem;
        padding-top: .15rem;
        background: #00bcd2;
    }
    .writeIn{
        border: 0;
        width: 90%;
        height: .6rem;
        border-radius: 0.1rem;
        text-align: center;
    }
    .mp-cityarea-title{
        height: .54rem;
        line-height: .54rem;
        padding-left: .3rem;
        color: #616161;
        font-size: .26rem;
        border-bottom: 0.01rem solid #ccc;
        background: #f5f5f5;
    }
    .mp-cityarea-content{
        height: .8rem;
        border-bottom: 0.01rem solid #ccc;
        padding: .2rem .14rem 0 .1rem;
    }  
    .mp-cityitem-light{
        display: block;
        width: 2rem;
        height: 0.6rem;
        border: 0.01rem solid #00bcd2;
        border-radius: 0.06rem;
        text-align: center;
        line-height: 0.6rem;
    }
    .popCityTitle{
        height: .54rem;
        line-height: .54rem;
        padding-left: .3rem;
        color: #616161;
        font-size: .26rem;
        border-bottom: 0.01rem solid #ccc;
        background: #f5f5f5;
    }
    .popCityCon{
        display: flex;
        flex-wrap: wrap;
        border-bottom: 0.01rem solid #e1e1e1;
        padding-top: .3rem;
    }
    .popCity{
        display: block;
        width: 28%;
        height: .56rem;
        color: black;
        border: 0.01rem solid #e1e1e1;
        text-align: center;
        line-height: .56rem;
        float: left;
        margin: 0 0 .3rem .3rem; 
    }
    .cityNum{
        list-style: none;
        height: .52rem;
        line-height: .52rem;
        padding-left: .3rem;
        color: #616161;
        font-size: .26rem; 
        background: #f6f6f6;
        border-bottom: 0.01rem solid #e1e1e1;
    }
    .cityList{
        list-style: none;
        height: .66rem;
        line-height: .66rem;
        padding-left: .25rem;
        color: #1b1b1b;
        font-size: .26rem;
        border-bottom: 0.01rem solid #e1e1e1;
    }
    .letters{
        list-style: none;
        position: fixed;
        top: 4rem;
        right: 0;
        width: .32rem;
        height: 7.5rem;
    }
    .letters>li{
        text-align: center;
        margin-bottom: 0.1rem;
        color: #00bcd2;
        font-size: .18rem;
    }
</style>