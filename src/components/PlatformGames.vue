<template>
  <div class="platform-games">
      <div class="contentdiv swiper-container">
        <div class="swiper-wrapper">
          <div :class="['swiper-slide' , index ]" v-for="(i, index) in ( getPageNumber(gameset.gamelist))" :key="index">
            <ul>
              <li v-for="(item, index) in getGameListItems(index)" :key="index" >
              <game-image 
                  :bgsrc="require('../../static/img/' + [gameset.platform] + '/' +[item.bgImg]+ '')"
                  :class="['picture']" 
                  :gametype = [item.gametype]>
              </game-image>
              <span> {{ item.name }} </span>
              </li> 
            </ul>
          </div>
          
        </div>
        <div class="swiper-pagination swiper-pagination-clickable"></div>
    </div> 
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import GameImage from './GameList/ListImages'
import Swiper from 'Swiper'
export default {
  name: 'platform-games',
  components: {
      Swiper,
      GameImage
  },
  mounted(){
    this.$nextTick(() => {
        var swiper = new Swiper('.swiper-container', {
          lazy: {
              loadPrevNext: true,
          },
          pagination: {
            el:  '.swiper-pagination',
            clickable: true
          }
        });
    });
  },
  data(){
    return {
      platform:  this.$route.params.gametype,
      gameset: ''
    }
  },
  computed: {
    ...mapGetters(["getGamesByPlatform"])
  },
  methods: {
    getPageNumber(payload){
      return (payload.length / 12);
    },
    getGameListItems(payload){
      var gameList = this.gameset.gamelist;
      let counter = 12;
      let page_index = payload;
      let start_index = payload * counter;
      let end_index = start_index + ( counter   );
      
      var games = gameList.filter( function(e) {
        return ( ( e.id ) >= start_index && e.id  <= end_index ) && (  (isNaN(e.id / 12) ? 0 : Math.floor(e.id / 12) ) == payload  ) ;
      });
      return games;
    },
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
  .swiper-slide{
    text-align: center;
    background: 000;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;

    ul{
      list-style: none;
      width: 99%;
      height: 100%;
      margin: 0 auto;
      margin-left: 0.23rem;
    }
    li {
      margin-right: .1rem;
      float: left;
      display: block;
      text-align: center;
      color: #fff;
      font-family: HiraginoSans !important;
      letter-spacing: .02rem;
      box-shadow: none;
      position: relative;

      .picture {
        width: 93%;
        height: 75%;
        border-radius: 2px;
        margin-left: 4%;
        margin-bottom: .03rem;
        margin-top: .05rem;
        background: url(../../static/img/PT/ano.jpg);
        background-repeat: no-repeat !important;
        background-size: 100% 100% !important;
      }
    }
  }
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
    margin-top: -.1rem;
    overflow-y: hidden;

  }
}
@media screen and (orientation:portrait){
   .contentdiv{
     height: 10rem;
     display: block;
   }
   .swiper-slide{
     ul{
      padding-top: .34rem !important;
     }
     li{
      width: 31%;
      height: 1.63rem;
      margin-bottom: .15rem;
      background: url(../../static/img/HGame/gamemenu-bgportrait.png) no-repeat;
      background-size: 100%;
      font-size: .15rem;
      line-height: .31rem;
     }
     .picture{
      height: 1.2rem;
      width: 92.8%;
      margin-left: 4%;
     }
   }
   .swiper-pagination{
      bottom: .34rem !important;
      position: fixed;
   }
   .platform-games{
     .swiper-pagination-bullet{
          margin: 0.02rem !important;
          height: .08rem;
          opacity: 1;
          background: #ac1250 !important;
          box-shadow: 0 2px 3px 0 #540928;
          width: .3rem;
          border-radius: 0 !important;
     }
     .swiper-pagination-bullet-active{
         background: #ffa4b1 !important;
         opacity: 1 !important;
       }
   }
 }
 @media screen and (orientation:landscape){

 }
</style>
