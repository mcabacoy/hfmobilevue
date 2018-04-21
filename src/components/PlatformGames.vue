<template>
  <div class="platform-games">
    <swipe class="swiper-container">
      <swipe-item>
        <ul>
          <li v-for="(item, index) in gameset.gamelist"
              :key="index" >
            <div :class="['picture',item.gametype]"></div>
            <span> {{ item.name }} </span>
          </li>
        </ul>      
      </swipe-item>  
    </swipe>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import { Swipe, SwipeItem } from 'vue-swipe';
export default {
  name: 'platform-games',
  data(){
    return {
      platform:  this.$route.params.gametype,
      gameset: ''
    }
  },
  computed: {
    ...mapGetters(["getGamesByPlatform"])
  },
  components: {
      Swipe,
      SwipeItem,
  },
  methods: {
    ...mapMutations ([
       'setCurrentPage',
       
    ])
  },
  created() {
      this.setCurrentPage('PlatformGames');
      this.gameset = this.$store.getters.getGamesByPlatform(this.platform);
      console.log(  this.gameset);
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

.platform-games {
  .swiper-container {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    z-index: 1;

    background: url(../../static/img/HGame/toobet-bgportrait.png)no-repeat;
    background-size: cover;
    background-position: center;
    height: 11rem;
    padding-top: .4rem;
    margin-top: -.1rem;
    overflow-y: hidden;

    ul {
      padding-top: .1rem;
      list-style: none;
      width: 99%;
      height: 100%;
      margin: 0 auto;
      margin-left: 0.15rem;

      li {
          width: 23% !important;
          height: 1.24rem;
          margin-right: .1rem;
          margin-bottom: .1rem;
          float: left;
          display: block;
          text-align: center;
          color: #fff;
          font-size: .12rem;
          background: url(../../static/img/HGame/gamemenu-bg.png) no-repeat;
          background-size: 100%;
          font-family: HiraginoSans !important;
          letter-spacing: .02rem;
          line-height: .225rem;
          box-shadow: none;
          position: relative;

          div.picture {
            width: 93%;
            height: 75%;
            // height: .91rem;
            border-radius: 2px;
            margin-left: 4%;
            margin-top: .05rem;
            // margin-bottom: .05rem;
            background: url(../../static/img/PT/ano.jpg);
            background-repeat: no-repeat;
            background-size: 100% 100%;
        }
      }
      @media screen and (orientation:portrait)
      {
          li {
          width: 31% !important;
          height: 1.63rem;
          margin-bottom: .15rem;
          background-size: 100%;
          font-size: .15rem;
          line-height: .31rem;
          div.picture {
             margin-bottom: .01rem;
          }
        }
      }
    }

    .mint-swipe-items {
        width: 327px;
    }

    .mint-swipe-indicators {
        bottom: 10px !important;
        position: fixed;
        .mint-swipe-indicator  {
          background: #ac1250 !important;
          margin: 0.02rem !important;
          height: .08rem;
          box-shadow: 0 2px 3px 0 #540928;
          opacity: 1 !important;
          width: .3rem;
          border-radius: 0 !important;
          display: inline-block;
          
          &.is-active {
            background: #ffa4b1 !important;
          }
      }
    }


  }
}





</style>
