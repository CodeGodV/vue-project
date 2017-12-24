<template>
  <div>
    <div class="comments">
      <a href="#">
        <span class="comments-score">5.0</span>
        <span class="comments-text">分</span>
        <span class="comments-desc">非常满意</span>
        <span class="comments-totalnum">
          2条评论
          <span class="iconfont comments-icon">&#xe604;</span>
        </span>
      </a>
    </div>
    <div class="comments-info">
      <div class="comments-info-item">
        <div class="comments-info-level">
          <div class="comments-info-left">
            <i class="iconfont comments-info-icon">&#xe644;</i>
            <i class="iconfont comments-info-icon">&#xe644;</i>
            <i class="iconfont comments-info-icon">&#xe644;</i>
            <i class="iconfont comments-info-icon">&#xe644;</i>
            <i class="iconfont comments-info-icon">&#xe644;</i>
          </div>
          <span class="comments-info-right">k*4  2017-12-04</span>
        </div>
        <p class="comments-info-eval">不错，挺靠谱的，服务也不错，</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  .comments{
    height: 0.8rem;
    line-height: 0.8rem;
    position: relative;
    border-top: 0.2rem solid #f5f5f5;
    padding-top: 0.02rem;
    background-color: #fff;
  }
  .comments-score{
    font-size: 0.36rem;
    margin-left: 0.2rem;
    color: #ff8300;
  }
  .comments-text{
    font-size: .24rem;
    color: #ff8300;
  }
  .comments-desc{
    margin-left: 0.1rem;
    font-size: 0.24rem;
    color: #ff8300;
  }
  .comments-totalnum{
    float: right;
    margin-left: 0.16rem;
    margin-right: 0.2rem;
    font-size: .24rem;
    color: #616161;
  }
  .comments-icon{
    font-size: 0.24rem;
    color: #9e9e9e;
  }
  .comments-info{
    padding: 0 0.2rem;
    background-color: #fff;
    z-index: 99;
  }
  .comments-info::before{
    content: "";
    overflow: hidden;
    position: absolute;
    width: 95%;
    border-top: 1px solid #e0e0e0;
  }
  .comments-info-item{
    padding: 0.2rem 0;
  }
  .comments-info-level{
    height: 0.32rem;
    font-size: 0.2rem;
  }
  .comments-info-left{
    color:#ffb436;
    float: left;
  }
  .comments-info-icon{
    font-size: 0.2rem;
  }
  .comments-info-right{
    float: right;
    font-size: 0.24rem;
  }
  .comments-info-eval{
    display: -webkit-box;
    font-size: 0.24rem;
    margin-top: 0.1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: #212121;
  }
</style>