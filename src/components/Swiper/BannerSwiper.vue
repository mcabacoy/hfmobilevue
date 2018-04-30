<template>
<div>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide"
                v-for="(item, index) in banners"
                :key="index" 
                :class="item">
            </div>
        </div>
         
        <div class="swiper-pagination"></div>
    </div>
</div>
</template>

<script> 
export default {
  name: 'bannerSwiper',
  mounted(){
    this.$nextTick(() => {
        var swiper = new Swiper('.swiper-container', {
            // autoplay: {
            //     delay: 10000,
            // },
            // pagination: {
            //     el: '.swiper-pagination',
            // }
            pagination: '.swiper-pagination',
            paginationClickable: true,
            autoplay: 2000,
        });
    });
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
    width: 100% !important; 
    height: 2.82rem;
    color: #fff;
    font-size: 30px;
    text-align: center;

    .swiper-slide{
        background-size: 100% !important;
    }
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

#homepage .swiper-pagination {
   bottom: 0px !important;
   position: absolute;

   .swiper-pagination-bullet{
        width: 7px;
        height: 7px;
        background: #d6d6d6;
   }
   .swiper-pagination-bullet-active{
       opacity: 1 !important;
   }
}
</style>
