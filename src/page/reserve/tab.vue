<template>
  <div>
    <div class="tab">
      <div class="tab-group">
        <div class="tab-group-item tab-active" name='1'>行程介绍</div>
        <div class="tab-group-item" name='2'>费用说明</div>
        <div class="tab-group-item" name='3'>使用说明</div>
      </div>
    </div>
    <div class="scheduling"></div>
    <div class="costlist"></div>
    <div class="instructions"></div>
  </div>
</template>

<script>
  export default {
    name: 'Reserve'
  }
</script>

<style scoped>
  .tab{
    width: 100%;
    border-top: 0.2rem solid #f5f5f5;
    background-color: #fff;
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
  .scheduling{
    height:11rem;
    background: yellow;
  }
  .costlist{
    height:11rem;
    background: red;
  }
  .instructions{
    height:11rem;
    background: green;
  }
</style>