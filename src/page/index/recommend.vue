<template>
  <div class="recommend">
    <h3 class="recommend-title">热销推荐</h3>
    <div v-for="recommends in recommendInfo" :key="recommends.id" class="recommend-count">
      <div class="address-img">
        <img :src="recommends.imgUrl" alt="" />
      </div>
      <div class="describe">
        <p>{{recommends.address}}</p>
        <p>{{recommends.describe}}</p>
        <p>
          <span>￥</span>
          <em class="price">{{recommends.price}}</em>
          <span class="price-up">起</span>
        </p>
      </div>
    </div>
    <div class="recommend-look">
      <a href="#">查看所有产品</a>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['recommendInfo']
  }
</script>

<style scoped>
  .recommend {
    display: flex;
    flex-direction: column;
  }
  .recommend-title {
    color: #171717;
    font-size: 0.26rem;
    line-height: 1.04rem;
    padding-left: 0.24rem;
  }
  .recommend-count {
    display: flex;
    box-sizing: border-box;
    padding: 0.2rem 0.8rem 0.2rem 0;
    height: 1.88rem;
    background: #fff;
    padding-left: 0.24rem;
    border-bottom: 0.01rem solid #ccc;
  }
  .recommend-count .address-img {
    float: left;
    margin-right: 0.22rem;
    height: 100%;
  }
  .recommend-count .address-img img {
    height: 100%;
  }
  .describe {
    width: 0.52rem;
    flex: 1;
  }
  .describe p:first-child {
    font-size: .26rem;
    color: #202020;
    margin-top: 0.04rem;
  }
  .describe p:nth-child(2) {
    font-size: 0.26rem;
    color: #a5a5a5;
    line-height: .72rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .describe p:nth-child(3) {
    color: #e78021;
    font-size: .16rem;
  }
  .describe .price {
    font-size: .36rem;
  }
  .describe .price-up {
    color: #a5a5a5;
  }
  .recommend-look {
    display: flex;
  }
  .recommend-look a {
    text-align: center;
    line-height: 0.9rem;
    background: #fff;
    Width: 100%;
  }
</style>