<template>
    <div class="slider">
      <div class="slider-title">滑雪干货</div>
      <div class="slider-info">
        <swiper :options="swiperOption">
          <swiper-slide v-for="item in swiperInfo" :key="item.id">
            <div class="swiper-slide">
              <img class="swiper-slide-img" :src="item.imgUrl">
            </div>
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </div>
    </div>
</template>

<script>
  export default {
    props: ['swiperInfo'],
    data () {
      return {
        swiperOption: {
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          coverflowEffect: {
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
          },
          pagination: '.swiper-pagination'
        }
      }
    }
  }
</script>

<style scoped>
  .slider-info{
    width: 100%;
    height: 3.68rem;
  }
  .slider-title{
    padding-top: 0.2rem;
    padding-bottom: 0.25rem;
    position: relative;
    text-align: center;
    font-weight: bold;
    font-size: .4rem;
    color: #20bef5;
  }
  .swiper-slide{
    width: 6.1rem;
  }
  .swiper-slide-img{
    width: 100%;
  }
  .swiper-pagination{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
</style>