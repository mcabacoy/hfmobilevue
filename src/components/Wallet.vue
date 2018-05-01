<template>
    <section class="content-wrapper" id="Wallet">
        <div class="wallet-wrap">
            <div class="wallet-content">
                <img src="../../static/img/wallet-logo.png"/>
                <p class="wallet-balance">￥{{ parseFloat(AccountDetails.Balance).toFixed(2) }}</p>
                <a  @click="routePage('/BankCard/bankinfo')" class="toBankCard">添加银行卡</a>
                <div class="rescue">
                    <a @click="getBonus" href="javascript:;">周六奖金</a>
                    <a @click="getBonus" href="javascript:;">周日奖金</a>
                </div>
            </div>
            <div class="wallet-btns">
                <a @click="routePage('WalletRecharge')" class="Recharge_btn greenbg">充 &nbsp;值</a>
                <a @click="routePage('WalletWithdraw')"  class="withdraw_btn orangebg">提 &nbsp;现</a>
                <a @click="routePage('Transfers')"  class="withdraw_btn redbg">转 &nbsp;账</a>
            </div>  
        </div>
    </section>
</template>

<script>
import { mapState , mapMutations, mapGetters } from 'vuex'
import { GET_WEEKLY_BONUS } from './../api'

var qs = require('querystring')
export default {
    data(){
      return {
          AccountDetails: ''
      }
    },
    methods: {
        ...mapMutations (['setCurrentPage', 'getSessions']),
        routePage: function(pageName){
            this.$router.push({ path: pageName });
        },
        getBonus () {
            let that_ = this;
            let config = {
                headers: {
                    'Authorization': 'Bearer ' + this.currentUser.tokenKey,
                }        
            };
            this.$http.get( GET_WEEKLY_BONUS, config)
            .then( function(res){
                alert(res.data.msg);
            })
            .catch( function(error){
            });
        }
    },
    computed: {
        ...mapGetters({ 
            currentUser: 'currentUser'
        })
    },
    created() {
        this.getSessions();
        this.AccountDetails = this.currentUser.userInfo;
        if (  this.AccountDetails == null || this.AccountDetails == ''  )
        {
            this.requestAccountInfo();
            this.getSessions();
            this.AccountDetails = this.currentUser.userInfo;
        }

        this.setCurrentPage('Wallet');
        

    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>

#Wallet {
    margin-top: 0 !important;
    background: #f4f4f4;
    width: 100%;
    height: 100%;
    
    .wallet-wrap {
        width: 100%;
        
        .wallet-content {
            background: #f17c4e;
            background: -webkit-linear-gradient(#f17c4e, #9f0b43);
            background: -o-linear-gradient(#f17c4e, #9f0b43);
            background: -moz-linear-gradient(#f17c4e, #9f0b43);
            background: linear-gradient(#f17c4e, #9f0b43);
            background-size: 100% 100%;
            height: 6.2rem;
            text-align: center;
            position: relative;

            img {
                margin-top: 1.6rem;
                width: 35%;
            }

            p.wallet-balance {
                margin-top: .25rem;
                font-size: .54rem;
                text-shadow: 0px 3px 1px #830859;
            }
            p {
                color: #fff;
            }

            a.toBankCard {
                color: #fff;
                border: 1px solid #fff;
                border-radius: 1rem;
                padding: .16rem .2rem;
                position: absolute;
                right: .2rem;
                top: 2.5rem;
                font-size: .23rem;
            }

            .rescue {
                position: absolute;
                background: rgba(35, 35, 35, 0.3);
                width: 100%;
                height: 1rem;
                bottom: 0;

                a {
                    color: #ffd200;
                    font-size: .3rem;
                    line-height: .5rem;
                    width: 49%;
                    height: .5rem;
                    display: inline-block;
                    text-align: center;
                    margin-top: .27rem;
                    
                    &:first-child {
                        border-right: .02rem solid #ffd200;
                    }
                }
            }
        }
    
        .wallet-btns {
            width: 92%;
            margin: 10% auto;

            .greenbg, .greenbg:visited {
                background: #0e9a31;
            }
            
            .orangebg, .orangebg:visited {
                background: #ff8a00;
            }

            .redbg, .redbg:visited {
                background: #d90a31;
            }
        }

        .wallet-btns a, .Withdraw-ul a.submit_Btn {
            font-size: .32rem;
            color: #fff;
            display: block;
            width: 83%;
            margin: 0 auto;
            padding: .25rem 0;
            border-radius: 27px;
            text-align: center;
            margin-bottom: .2rem;
            margin-top: -.03rem;
        }
    
    }


}

</style>
