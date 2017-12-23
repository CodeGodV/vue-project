<template>
<div>
  <div class="popularCity">
    <div class="popCityTitle">热门城市</div>
    <div class="popCityCon">
      <router-link to="/">
        <a class="popCity" v-for="item in cityInfo" :key="item.id" @click="handleCityPos(item.name)">{{item.name}}</a>
      </router-link>
    </div>
  </div>
  <div class="city" v-for="(item, index) in chinaCityInfo">
    <li class="cityNum" ref="li">{{item.number}}</li>
    <router-link to='/'>
      <li class="cityList" v-for="items in item.address" @click="handleCityChange(items.name)">{{items.name}}</li>
    </router-link>
  </div>
  <div class="letters" ref="number">
    <li v-for="(item, index) in chinaCityInfo" :key="item.id" @click="handleJumpClick(index)">{{item.number}}</li>
  </div>
</div>
</template>
<script>
export default {
  props: {
    cityInfo: {
      type: Array
    },
    chinaCityInfo: {
      type: Array
    }
  },
  methods: {
    handleJumpClick (index) {
      document.documentElement.scrollTop = this.$refs.li[index].offsetTop - 44
    },
    handleCityChange (city) {
      this.$store.commit('changeCity', city)
    },
    handleCityPos: function (city) {
      this.$store.commit('changeCity', city)
    }
  }
}
</script>
<style scoped>
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
        width: .32rem;
        top: 4rem;
        right: 0;
    }
    .letters>li{
        height: .2rem;
        text-align: center;
        margin-bottom: 0.1rem;
        color: #00bcd2;
        font-size: .18rem;
    }
</style>