<template>
  <div class="platform-games">
      <div class="contentdiv swiper-container">
        <div class="swiper-wrapper">
          <div :class="['swiper-slide' , index ]" v-for="(i, index) in ( getPageNumber(gameset.gamelist))" :key="index">
            <ul>
              <li v-for="(item, index) in getGameListItems(index)"
                  :key="index"
                  @click="redirectGame(item)" >
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
import { GET_SG_TOKEN, GET_HB_TOKEN, GET_PNG_TOKEN, GET_TTG_TOKEN, GET_BS_TOKEN } from './../api'
var qs = require("querystring");
export default {
  name: 'platform-games',
  components: {
      Swiper,
      GameImage
  },
  mounted(){
    this.$nextTick(() => {
        var swiper = new Swiper('.swiper-container', {
          // lazy: {
          //     loadPrevNext: true,
          // },
          // pagination: {
          //   el:  '.swiper-pagination',
          //   clickable: true
          // }
          pagination: '.swiper-pagination',
          paginationClickable: true,
        });
    });
  },
  data(){
    return {
      platform:  this.$route.params.gametype,
      gameset: '',
      AccountDetails: '',
      gameToken: '',
    }
  },
  computed: {
    ...mapGetters(["getGamesByPlatform", "currentUser"])
  },
  methods: {
    getPageNumber(payload){
      if (window.innerHeight > window.innerWidth) {
        return Math.ceil(payload.length / 12);
      }
      else {
        return Math.ceil(payload.length / 8);
      }
    },
    getGameListItems(payload){
      var gameList = this.gameset.gamelist;
      let counter = 0;
      if (window.innerHeight > window.innerWidth) {
        counter = 12;
      }
      else {
        counter = 8;
      }

      let start_index = (payload * counter) + 1;
      let end_index = start_index + ( counter -1  );
      
      var games = gameList.filter( function(e) {
          return ( e.id >= start_index && e.id  <= end_index )
          && (  ( ((isNaN(e.id / counter) ? 0 : Math.floor(e.id / counter) ) == payload) && e.id != end_index )
                   || e.id == end_index ) ;
      });

     

      return games;
    },
    ...mapMutations ([
       'setCurrentPage',
    ]),

    // REDIRECTION
    redirectGame(payload){
      switch( this.platform ) {
        case 'PT1':
          this.redirectPT_New(payload);
          break;
        case 'PT':
          this.redirect_PT(payload);
          break;
        case 'SG': 
          this.redirect_SG(payload);
          break;
        case 'HABA':
          this.redirect_HABA(payload);
          break;
        case 'PNG':
          this.redirect_PNG(payload);
          break;
        case 'TTG':
          this.redirect_TTG(payload);
          break;
        case 'BS':
          this.redirect_BS(payload);
          break;
        default:
          break;
      }
    },
    redirectPT_New(payload){
      let rootLocation = 'https://gs2.m27613.com/v1/mrch/game';
      let qStrings = {
        language: 'zh-cn',
        merchantCode: 'swgnsfubao',
        playmode: 'real',
        gameCode: payload.gametype,
        ticket: this.currentUser.tokenKey,
        merch_login_url: location.href
      };
      location.href = rootLocation + '?' + qs.stringify(qStrings);
    },
    redirect_PT(payload){
      let rootLocation = 'http://hub.mp176388.com/igaming/';
      let qStrings = {
        gameId: payload.gametype,
        real: 1,
        username: 'F' + this.AccountDetails.AccountName,
        lang: 'zh-cn',
        tempToken: 'temptoken',
        lobby: location.href, // PTLIST
        deposit: location.href.substring(0, location.href.lastIndexOf('/') + 1) + 'WalletRecharge' ,
        support: location.href.substring(0, location.href.lastIndexOf('/') + 1) + 'PT',
        logout: location.href.substring(0, location.href.lastIndexOf('/') + 1) + 'PT'
      }
      location.href = rootLocation + '?' + qs.stringify(qStrings);

    },

    redirect_SG(payload){
      let rootLocation = 'http://lobby.bigmoose88.com/futu/auth/';
      let qStrings = {
        language: 'zh_CN',
        mobile: true,
        token: this.gameToken,
        game: payload.gametype,
        acctId: this.AccountDetails.AccountName
      };
      location.href = rootLocation + '?' + qs.stringify(qStrings);
    },
    redirect_HABA(payload){
      let rootLocation = 'https://app-a.insvr.com/play';
      let qStrings = {
        brandid: '355cac7f-cb5f-e711-80c4-000d3a805b30',
        mode: 'real',
        locale: 'zh-CN',
        token:  this.gameToken,
        keyname: payload.gametype
      };
      location.href = rootLocation + '?' + qs.stringify(qStrings);
    },
    redirect_PNG(payload){
      let rootLocation = 'https://bsicw.playngonetwork.com/casino/PlayMobile';
      let qStrings = {
        pid: 295,
        lang: 'zh_CN',
        practice: 0,
        gameid:  payload.gametype,
        ticket: this.gameToken,
      };
      location.href = rootLocation + '?' + qs.stringify(qStrings);
    },
    redirect_TTG(payload){
      let rootLocation = 'http://ams2-games.ttms.co/casino/default/game/casino5.html';
      let qStrings = {
        account: 'CNY',
        lang: 'zh-cn',
        deviceType: 'mobile',
        lsdid: 'futu',
        playerHandle: this.gameToken,
        gameId: payload.gameid,
        gameName: payload.gamename,
        gameType: payload.gametype,
      };
      location.href = rootLocation + '?' + qs.stringify(qStrings);
    },
    redirect_BS(payload){
      let rootLocation = 'https://winwis-gp3.betsoftgaming.com/cwstartgamev2.do';
      let qStrings = {
        bankId: 1833,
        mode: 'real',
        lang: 'zh-cn',
        CDN: 'CNC_China',
        token: this.gameToken,
        gameId: payload.gameid,
        homeUrl: location.href,
        cashierUrl: location.href.substring(0, location.href.lastIndexOf('/') + 1) + 'WalletRecharge'
      };
      location.href = rootLocation + '?' + qs.stringify(qStrings);
    },

    getGameToken(){
      let session_ = this.currentUser;
      let config = {
        headers: {
          'Authorization': 'Bearer ' + session_.tokenKey,
          'Async' : false
        }
      }
      let that_ = this;
      let url_ = '';
      switch( this.platform ){
        case 'SG':
          url_ = GET_SG_TOKEN;
          break;
        case  'HABA':
          url_ = GET_HB_TOKEN;
          break;
        case 'PNG':
          url_ = GET_PNG_TOKEN;
          break;
        case 'TTG':
          url_ = GET_TTG_TOKEN;
        case 'BS':
          url_ = GET_BS_TOKEN;
        default: break;
      }
      
      if ( url_ != ''){
        this.$http.get(  url_ ,  config )
        .then( function (res){
          console.log(res.data);
          if ( res.data != "Failed") 
          {
            that_.gameToken = ( res.data );
          }
        })
        .catch( function(error){ });
      }
    }
    
  },
  created() {
      this.setCurrentPage('PlatformGames');
      this.gameset = this.$store.getters.getGamesByPlatform(this.platform);
      let session_ = this.currentUser;
      this.AccountDetails = qs.parse(session_.userInfo);
      
      this.getGameToken();
      
      
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
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-box-pack: center;
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
.contentdiv{
    height: 10rem;
    display: block;
  }
  .swiper-slide{
    ul{
        list-style: none;
        width: 99%;
        height: 100%;
        margin: 0 auto;
        padding-top: 0.18rem;
        margin-left: 0.1rem !important;
    }
    li{
        width: 23.35%;
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
      
    }

    .picture{
      width: 93%;
      height: .91rem;
      border-radius: 2px;
      margin-left: 4%;
      margin-top: .05rem;
      margin-bottom: .02rem !important;
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
  }
  .swiper-pagination{
      bottom: .10rem !important;
      position: fixed;
  }
  .platform-games{
    .swiper-container{
      background: url(../../static/img/HGame/toobet-bg.png)no-repeat;
      background-size: 100% 100%;
    }
    .swiper-pagination-bullet{
          margin: 0.02rem !important;
          height: .05rem;
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
</style>
