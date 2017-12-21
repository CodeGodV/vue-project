<template>
    <div>
        <div class="headerCon">
            <div class="header">    
                <router-link to="">
                    <span class="header-back iconfont">&#xe624;</span>
                </router-link>
                <div class="mp-header-title">
                    <div class="mp-header-citycon">
                        <span class="mp-header-city" @click="handleChinaData" :class='[{inloadColor:Chinaflag}]'>国内</span>
                        <span class="mp-header-city" @click="handleForeignData" :class='[{inloadColor:Foreignflag}]'>海外</span>
                    </div>
                </div>           
            </div>
        </div>
        <div class="write">
            <input type="text" class="writeIn" placeholder="输入城市名或拼音" ref="input" @focus="handleInputChange" @blur="handleInputBack">
        </div>
        <div class="mp-cityarea-group">
            <div class="mp-cityarea-title">您的位置</div>
            <div class="mp-cityarea-content">
                <a class="mp-cityitem-light">北京</a>
            </div>
        </div>
        <hot-city :cityInfo="cityInfo" :chinaCityInfo="chinaCityInfo" v-show="flag"></hot-city>
        <pop-city :citywaiInfo="citywaiInfo" :chinawaiCityInfo="chinawaiCityInfo" v-show="!flag"></pop-city>
    </div>
</template>
<script>
import HotCity from './china'
import PopCity from './foreign'
export default {
  name: 'Search',
  data () {
    return {
      china: true,
      flag: true,
      Chinaflag: true,
      Foreignflag: false,
      cityInfo: [],
      chinaCityInfo: [],
      citywaiInfo: [],
      chinawaiCityInfo: []
    }
  },
  components: {
    HotCity,
    PopCity
  },
  methods: {
    handleChinaData: function (e) {
      this.china = true
      this.flag = true
      this.Chinaflag = true
      this.Foreignflag = false
      this.getIndexData()
    },
    handleForeignData: function (e) {
      this.china = false
      this.flag = false
      this.Chinaflag = false
      this.Foreignflag = true
      this.getIndexData()
    },
    getIndexData () {
      this.$http.get('/static/search.json')
       .then(this.handleAjaxSucc.bind(this))
    },
    handleAjaxSucc (res) {
      var body = res.body
      if (body.data && body && this.china) {
        this.cityInfo = body.data.China.popCity
        this.chinaCityInfo = body.data.China.ChinaCity
      } else {
        this.citywaiInfo = body.data.Foreign.popCity
        this.chinawaiCityInfo = body.data.Foreign.ForeignCity
      }
    },
    handleInputChange: function () {
      this.$refs.input.placeholder = ''
      this.$refs.input.style.textAlign = 'left'
    },
    handleInputBack: function () {
      this.$refs.input.placeholder = '输入城市名或拼音'
      this.$refs.input.style.textAlign = 'center'
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
    .inloadColor{
        background: #fff;
        color: #00afc7;
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
</style>