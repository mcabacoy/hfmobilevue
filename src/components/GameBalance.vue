<template>
  <div class="game" id="GameBalance">
        <img class="game-banner"  ref="banner" />
        <div class="game-body">
            <div class="game-header">
                <span></span>{{ gamename }}
            </div>
            <div class="game-content">
                <p class="label">游戏余额:</p>
                <p class="balance">{{ balance }}</p>
            </div>
            <div class="game-actions">
                <span @click="showModal( { status:  'in' , platform: gamename })" 
                        class="transfer-in">转入</span>
                <span @click="showModal( { status:  'out' , platform: gamename })"
                        class="transfer-out">转出</span>
            </div>
        </div>
        <a @click="routePage('/PlatformGames')" class="game-start">开始游戏</a>

        <transfer-confirmation
            v-if="transfermode != ''"
            @closeModal="closeModal"
            :transfertype="transfermode"
            :platform="selectedplatform">
        </transfer-confirmation>

  </div>
</template>
<script>
import TransferConfirmation from './Transfers/TransferConfirmation'
import { mapState ,mapMutations,  mapGetters } from 'vuex'
export default {
    components: { TransferConfirmation } ,
    data() {
        return {
                banner: '../../static/img/HGame/PT-banner.jpg',
                gamename: this.$route.params.gametype + "老虎机",
                balance: '￥ 150.5',
                transfermode: '', //in, out, blank
                selectedplatform: ''
        }
    },
    computed: {
         ...mapGetters ({
             list: 'getAllPlatforms'
        })
    },
    methods: {
        ...mapMutations (['setCurrentPage']),
        routePage(pageName){
            this.$router.push({ path: '..' + pageName + '/' + this.$route.params.gametype});
        },
        showModal: function (payload) {
            this.transfermode = payload.status;
            this.selectedplatform = payload.platform;
        },
        closeModal: function () {
            this.transfermode = '';
            this.selectedplatform = '';
        },
        getBanner: function(){
            return this.banner;
        }
    },
    created() {
      this.setCurrentPage('GameBalance');
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" >

#GameBalance.game {
    margin-top: 1.1rem;
    background: #920e36 !important;
    background: -webkit-linear-gradient(#920e36, #330a16) !important;
    background: -o-linear-gradient(#920e36, #330a16) !important;
    background: -moz-linear-gradient(#920e36, #330a16) !important;
    background: linear-gradient(#920e36, #330a16) !important;

    .game-banner {
        width: 100%;
    }

    .game-body {
        background: #fff;
        margin: 0 .2rem;
        margin-top: .25rem;
        border-radius: .1rem;

        .game-header {
            padding: .2rem 0;
            padding-left: .3rem;
            border-bottom: 1px solid #c0c0c0;
            color: #2c2c2c;
            font-size: .35rem;
            font-weight: 600;
            letter-spacing: .02rem;
            
            span:first-child {
                border: 2px solid #1b940a;
                font-size: .2rem;
                margin-right: .1rem;
                vertical-align: middle;
            }
        }

        .game-content {
            padding: .45rem 0;
            padding-left: .28rem;

            p.label {
                display: inline-block;
                color: #6a6a6a;
                font-size: .3rem;
                vertical-align: middle;
                margin-top: -.2rem;
            }

            p.balance {
                display: inline-block;
                color: #c70013;
                font-size: .5rem;
                font-weight: 700;
                margin-left: .1rem;
            }
        }

        .game-actions {
            background: #ffc600;
            border-radius: 0 0 .1rem .1rem;
            height: .8rem;
            
            span {
                width: 50%;
                padding: .189rem 0;
                float: left;
                text-align: center;
                font-size: .3rem;
            }

            span.transfer-in {
                border-right: 1px solid #fff !important;
            }
        }        
    }

    .game-start {
        background: url(../../static/img/HGame/btn.png) no-repeat;
        background-size: 100%;
        width: 4.8rem;
        display: block;
        height: 1.1rem;
        margin: 0 auto;
        margin-top: .4rem;
        color: #fff;
        text-align: center;
        line-height: .95rem;
        font-size: .32rem;
        letter-spacing: .03rem;
    }
}
</style>
