<template>
<div id="Transfers"> 
    <div class="wrap Transfers-content-top">
        <div class="transhead">
            <div class="lefthead">
                <span style="">中心钱包余额(元)</span>
                <h3>{{ parseFloat(currentUser.userInfo.Balance).toFixed(2) }}元</h3>
            </div>
            <div class="righthead">
                <a @click="routePage('TransactionQuery')" id="transactiondetails">交易明细</a>
            </div>
        </div>
        <div class="transferbody">
            <ul>
                <balance-stub v-for="(platform, index) in getPlatforms" 
                    :item="platform" 
                    :key="index"
                    @showModal="showModal" >
                </balance-stub>
            </ul>
        </div>
    </div>
    <transfer-confirmation
        v-if="transfermode != ''"
        @closeModal="closeModal"
        :transfertype="transfermode"
        :platform="selectedplatform">
    </transfer-confirmation>
</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { USERINFO } from './../api'
import BalanceStub from './Transfers/BalanceStub'
import TransferConfirmation from './Transfers/TransferConfirmation'
var qs = require("querystring");
export default {
    name: 'transfer-platform',
    components: { BalanceStub , TransferConfirmation },
    data(){
        return {
            balance: '',
            transfermode: '', //in, out, blank
            selectedplatform: ''
        }
    },
    methods: {
        ...mapMutations ([
            'setCurrentPage',
            'storeUserInfoSession'
        ]),
        routePage(payload){
            this.$router.push({path: '../' + payload });
        },
        showModal: function (payload) {
            this.transfermode = payload.status;
            this.selectedplatform = payload.platform;
        },
        closeModal: function () {
            this.transfermode = '';
            this.selectedplatform = '';
        },
        // PROCESSING
        getOverAllBalance() {
            let that_ = this;
            let config = {
                headers: {
                    'Authorization': 'Bearer ' + this.currentUser.tokenKey
                }
            };
            this.$http.get( USERINFO , config )
            .then( function(res){
                that_.storeUserInfoSession(qs.stringify(res.data.Value));
            });
        }
    },
    computed: {
      ...mapGetters ({
          getPlatforms: 'getBalancePlatforms',
          currentUser: 'currentUser'
      })
    },
    created() {
        this.getOverAllBalance();
        this.setCurrentPage('Transfers');
  }
}

</script>

<style lang="stylus" rel="stylesheet/stylus" >

#Transfers {
    display:block !important;
    background: #fff;
    
    .wrap.Transfers-content-top {
        margin-top: 1.1rem;
    }

    .transhead {
        background: url(../../static/img/trans/transfer-bg.jpg) no-repeat;
        background-size: 100%;
        height: 2rem;
        
        .lefthead {
            float: left;
            margin-left: .4rem;
            margin-top: .44rem;

            span {
                color: #fff;
                font-size: .28rem;
                letter-spacing: .02rem;
            }

            h3 {
                text-shadow: 1px 2px 3px #2d1205;
                color: #fff;
                font-size: .55rem;
                margin-top: .27rem;
            }
        }
    }

    .righthead {
        float: right;
        margin-right: .2rem;

        a {
            font-size: .25rem;
            text-shadow: none;
            margin-top: 1rem;
            float: right;
            border: 1px solid #fff;
            border-radius: .28rem;
            padding: .12rem .28rem;
            letter-spacing: .03rem;
            color: #fff;
        }
    }

    .transferbody
    {
        ul {
            padding: 0 .15rem;
            overflow: hidden;
            list-style: none;
        }
    }
}


</style>
