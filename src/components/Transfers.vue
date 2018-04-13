<template>
<div id="Transfers"> 
    <div class="wrap Transfers-content-top">
        <div class="transhead">
            <div class="lefthead">
                <span style="">中心钱包余额(元)</span>
                <h3 style="" data-bind="text:Balance">44.00元</h3>
            </div>
            <div class="righthead">
                <a href="/TransactionQuery" id="transactiondetails">交易明细</a>
            </div>
        </div>
        <div class="transferbody">
            <ul>
                <balance-stub v-for="platform in getPlatforms" 
                    :item="platform" 
                    :key="platform.name"
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
import BalanceStub from './Transfers/BalanceStub'
import TransferConfirmation from './Transfers/TransferConfirmation'
export default {
    name: 'transfer-platform',
    components: { BalanceStub , TransferConfirmation },
    data(){
        return {
            transfermode: '', //in, out, blank
            selectedplatform: ''
        }
    },
    methods: {
        ...mapMutations ([
            'setCurrentPage'
        ]),
        showModal: function (payload) {
            this.transfermode = payload.status;
            this.selectedplatform = payload.platform;
        },
        closeModal: function () {
            this.transfermode = '';
            this.selectedplatform = '';
        }
    },
    computed: {
      ...mapGetters ({
          getPlatforms: 'getBalancePlatforms'
      })
    },
    created() {
      this.setCurrentPage('Transfers');
  }
}

</script>

<style lang="stylus" rel="stylesheet/stylus" >

#Transfers {
    display:block !important;
    
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
            margin-top: .38rem;

            span {
                color: #fff;
                font-size: .28rem;
                letter-spacing: .02rem;
            }

            h3 {
                text-shadow: 1px 2px 3px #2d1205;
                color: #fff;
                font-size: .55rem;
                margin-top: .14rem;
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
            padding: .08rem .28rem;
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
