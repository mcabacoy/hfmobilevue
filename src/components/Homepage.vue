<template>
  <div id="homepage">

    <!-- <div class="floater">
        <img src="">
    </div> -->
    <floater :imgsrc="require('../../static/img/box.png')"></floater>

    <banner-swiper></banner-swiper>

    <div class="wallet">
     <div class="wallet-txt">
            <p class="coins-label" style=""><img src="../../static/img/coins-ico.png"  class="coins" />中心钱包</p>
            <p class="balance-label" style="">余额：<span>￥{{ parseFloat(this.currentUser.userInfo.Balance).toFixed(2) }}</span></p>
    </div>
    <div class="wallet-btn">
        <a ><img @click="routePage('/Wallet')" src="../../static/img/wallet_.png" class="wallet-button" /></a>
        <a ><img  @click="routePage('/Signin')" src="../../static/img/signin.png" class="signin-button" /></a>
    </div>
    </div>

    <platform></platform>
    <announcement :notices="notices"></announcement>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import Floater from './Home/Floater'
import BannerSwiper from './Swiper/BannerSwiper'
import Platform from './Home/Platforms'
import Announcement from './Common/Announcement'
import { USERINFO, GET_NOTICES  } from './../api'
var qs = require("querystring");
export default {
    name: 'homepage',
    data(){
        return {
            AccountDetails: ''
        }
    },
    components: {
        BannerSwiper, Platform, Announcement, Floater
    },
    methods: {
        ...mapMutations ([
            'selectMethod',
            'setCurrentPage',
            'setUserInfo',
            'storeUserInfoSession',
            'storeNoticesSession'
        ]),
        routePage: function(pageName){
            this.$router.push({ path: pageName });
        },
        setAccountDetails() {
            this.AccountDetails = this.currentUser.userInfo;
        },
        requestAccountInfo( token ){
            let config = {
                headers: {
                    'Authorization': 'Bearer ' + token,
                }
            }
            let that_ = this;
            this.$http.get( USERINFO,  config )
            .then( function(res){
                that_.storeUserInfoSession((qs.stringify(res.data.Value)))
                that_.setAccountDetails();
            })
            .catch( function(error){
                
            });
        },
        getNotices( ){
            console.log(this.notices);
            if ( this.notices == '' || this.notices == null || this.notices.length == 0  ){
                let that_ = this;
                let config = {
                headers: {
                    'Data-Type': 'json'
                    }
                }
                this.$http.get( GET_NOTICES )
                .then( function( res ){
                    that_.storeNoticesSession(qs.stringify(res.data.Value));
                });
            }
        }
    },
    computed: {
        ...mapState ({
            tokenKey : state => state.tokenKey
        }),
        ...mapGetters({ 
            currentUser: 'currentUser',
            notices: 'getNotices'
        })
    },
    created() {
        let isLoggedIn = ( this.currentUser.tokenKey != '' && this.currentUser.tokenKey != null && this.currentUser.tokenKey != 'undefined');
        if ( !isLoggedIn) {
             this.$router.push('../Login');
             return;
        }
        if ( this.currentUser.userInfo != null && this.currentUser.userInfo.AccountName ) {
            this.setAccountDetails();
        }
        else {
            this.requestAccountInfo( this.currentUser.tokenKey );
        }
        
        this.getNotices();
        this.setCurrentPage('Homepage');
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
#homepage {
  margin-top: 1.1rem;
    .wallet {
        background: url(../../static/img/index-bg.png) no-repeat;
        background-size:100% 100%;
        height: 1.28rem;
        line-height: .6rem;
        font-size: .24rem;
        color:#fff;
        z-index: 2;
        position: relative;

        span {
            color: #fff;
            font-weight: 700;   
            font-size: .38rem;
            text-shadow: 1px 2px 1px #970032;
            margin-left: -.1rem;
        }
        .wallet-btn {
            position: absolute;
            right: .06rem;
            top: .37rem;
        }

        .wallet-txt {
            position:absolute;
            left:.2rem;
            top:.08rem;
        }
        
        .coins {
            width: .43rem; margin-right: .12rem; vertical-align: middle;
        }

        .coins-label {
            font-size: .29rem;color: #ffe57c;
        }

        .balance-label {
            font-size: .27rem;color: #ffe57c;margin-top: -.1rem;
        }

        .wallet-button {
            width: 1.8rem;
            margin-right: -.06rem;
        }

        .signin-button {
            width: 1.8rem;
        }

    }

}
</style>
