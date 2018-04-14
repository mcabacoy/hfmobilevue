<template>
<div>
    <swipe class="swiper-container">
            <swipe-item v-for="(item, index) in banners"
                :key="index" 
                :class="item">
            </swipe-item>  
    </swipe>
</div>
</template>

<script>
import { Swipe, SwipeItem } from 'vue-swipe';
export default {
  name: 'bannerSwiper',
  components: {
      Swipe,
      SwipeItem,
  },
  data(){
     return {
         bannerPath: '/src/assets/banner/',
         banners: ['banner-01' , 'banner-02', 'banner-03', 'banner-04' , 
                    'banner-06', 'banner-018' , 'banner-019']
     }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" >

.swiper-container {
    .banner-01 {
        background: url('../../../static/img/banner/banner_01.jpg');
    }
    .banner-02 {
        background: url('../../../static/img/banner/banner_02.jpg');
    }
    .banner-03 {
        background: url('../../../static/img/banner/banner_03.jpg');
    }
    .banner-04 {
        background: url('../../../static/img/banner/banner_04.jpg');
    }
    .banner-06 {
        background: url('../../../static/img/banner/banner_06.jpg');
    }
    .banner-018 {
        background: url('../../../static/img/banner/banner_018.jpg');
    }
    .banner-019 {
        background: url('../../../static/img/banner/banner_019.jpg');
    }
}

.swiper-container {
    width: 100% !important; 
    height: 2.82rem;
    color: #fff;
    font-size: 30px;
    text-align: center;
  
  .mint-swipe-item {
    background-size: cover !important;
    background-repeat: no-repeat !important;
    margin: auto;
    width: 100%;
    height: 100%;
  }
  
  .mint-swipe-indicators {
    bottom: 0.1rem !important;
    .mint-swipe-indicator {
        cursor: pointer !important;
        width: 7px;
        height: 7px;
        background: #d6d6d6 !important;
        opacity: 0.5;
        margin-bottom: -0.1rem !important;
        
        &.is-active {
            opacity: 1 !important;
        }
    }
    }
}
</style>
