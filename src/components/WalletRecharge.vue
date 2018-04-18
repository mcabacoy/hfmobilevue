<template>
<div id="wallet-recharge">
    <div class="payment-method">
        <p>选择支付方式:</p>
        <ul>
            <li v-for="method in methods" :key="method.name">
                <span @click="updateRechargerTab(method.name)"
                      :class="( activeMethod == method.name ? 'active' : '') ">
                    <div :class="[method.customclass , 'method']"></div>
                    <span>
                        {{ method.description }}
                    </span>
                </span>
            </li>
        </ul>
    </div>
    <recharger-tab :method="activeMethod"></recharger-tab>
</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import RechargerTab from './WalletRecharge/RechargerTab'

export default {
  components: { RechargerTab },
  name: 'wallet-recharge',
  props: ['methodname'],
  data() {
      return {
          selectedmethod: this.methodname
      }
  },
  computed: {
      ...mapState ({
        methods: state => state.wallet.paymentmethod,
        defaultmethod: state => state.wallet.defaultmethod
      }),
      activeMethod: function (){
          return  this.selectedmethod == '' || typeof this.selectedmethod == 'undefined'  ? this.defaultmethod :  this.selectedmethod;
      }
  },
  methods: {
    ...mapMutations ([
       'selectMethod',
       'setCurrentPage'
    ]),
    updateRechargerTab: function (method){
       this.selectMethod(method);
       this.selectedmethod = method;
    }
  },
  created() {
      this.setCurrentPage('WalletRecharge');
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

body {
    background: #d6d7db;
}

#wallet-recharge {
    margin-top: 1.1rem !important;
    .payment-method {
        padding: 5px 17px;
        background-color: #fff;
        border-bottom: 1px solid #f3f3f3;
        
        p:first-child {
            color: #818181;
            font-size: .26rem;
            margin-top: .15rem;
        }
        
        ul {
            padding: .24rem 0;
            overflow: hidden;
            list-style: none;

            display: flex;
            flex-wrap: wrap;

            li {
                float: left;
                text-align: center;
                width: 25%;
                padding-bottom: .4rem;

                span {
                    color: #a0a0a0;
                    font-size: .22rem;
                }
            }
        }

        ul li:last-child , ul {
            padding-bottom: .12rem;
        }

        div.method {

            width: 0.75rem;
            height: 0.75rem;
            background-repeat: no-repeat !important;
            background-size: contain !important;
            margin: auto;
            
            display: block;
            margin: 0 auto;
            margin-bottom: .15rem;
            
            -webkit-filter: grayscale(100%);
            filter: grayscale(100%);
            opacity: 0.4;
            width: 50%;

            &.wechatbankcard {
                background: url('../../static/img/BankCard.png');
            }

            &.wechattransfer {
                background: url('../../static/img/wechat_icon.png');
            }

            &.wechatscancode {
                background: url('../../static/img/wechat-ico.png');
            }
            
            &.qqscancode {
                background: url('../../static/img/qq-have.png');
            }        

            &.alipayscancode {
                background: url('../../static/img/alipay-ico.png');
            }        

            &.rechargeonline {
                background: url('../../static/img/wallet-ico.png');
            }        

            &.quickpayment {
                background: url('../../static/img/unionpay.png');
            }        

            &.onlinebanking {
                background: url('../../static/img/unionpay.png');
            } 

            &.flashpayment {
                background: url('../../static/img/quick-icon.png');
            }                                        
        }

        .active {
            div.method {
                color: #000;
                opacity: 1 !important;
                -webkit-filter: grayscale(25%);
                filter: grayscale(25%) !important;
            }
            span {
                color: #232323 !important;
                font-size: .22rem;
            }
        }

    
    }

}

</style>
