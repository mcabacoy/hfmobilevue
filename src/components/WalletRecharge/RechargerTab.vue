<template>
  <div class="tabs-content" id="WalletRecharge">
      <div>
            <div>
                <div class="tab-header">
                    <div class="header-container tab-section exclusive" v-if="methoddetails.recharger.headertype=='exclusive'" >
                        添加专属微信：<span id="WeChatNumber"></span>，
                        <span>&nbsp;转账并备注账号!</span></div>

                    <div class="header-container tab-section" v-if="methoddetails.recharger.headertype =='limit'">
                                {{ methoddetails.recharger.limit.label  }}：
                                <span>{{ methoddetails.recharger.limit.from }}
                                &nbsp;</span>  {{ methoddetails.recharger.limit.preposition }} <span>
                                &nbsp;{{ methoddetails.recharger.limit.to }}
                                {{ methoddetails.recharger.limit.currency }}
                                </span>
                    </div>
                </div>

                <div class="tab-amount cz_nr">
                    <div class="tab-amount-label">充值金额</div>
                    <label class="tab-input-container">
                        <span>￥</span>
                        <input type="number"
                               step="0.01"
                               inputmode="numeric" 
                               min="0" 
                               class="tab-input"
                               autofocus="" 
                               :placeholder="methoddetails.recharger.placeholder">
                        </label>
                </div>

                <div class="tab-options  tab-section">
                    <div></div>
                    <span class="arrowbox"></span>
                    <select v-model="rechargeOption">
                      <option value="hfFirstDpBonus">首存优惠</option>
                      <option value="hfSecond25">再存25%</option>
                      <option value="no" selected="">下回再参与！</option>
                    </select>
                </div>
                <a class="tab-submit" href="#">确 认</a>
                <p class="tab-note">{{ methoddetails.recharger.aditionalremarks }}</p>
            </div>
        </div>
  </div>
</template>


<script>
import { mapState, mapGetters , mapMutations} from 'vuex'
import { RECHARGE_WXPAYDEPOSIT } from './../../api'

export default {
    name: 'recharger-tab',
    props: ["method"],
    data(){
        return {
            notifmessage: '',
            rechargeOption: ''
        }
    },
    computed: {
        ...mapGetters ({
            methoddetails: 'getMethodDetails',
            defaultmethod : 'defaultmethod',
            currentUser: 'currentUser'
        }),
        ...mapState ({
            selected: state => state.wallet.selectedmethod
        })
    },
    methods: {
        validateAmount( payload ){
            let that_ = this;
            let amount_ = payload.amount;
            let rechargeOption = payload.option;
            
            if (amount_ == null || amount_ == "") {
                this.notifmessage = ("请填写充值金额！");
                return false;
            }
            if (isNaN(amount_)) {
                this.notifmessage = ("请输入有效的数字!");
                return false;
            }
            if (parseFloat(amount_) <= 0) {
                this.notifmessage = ("请输入大于0的数字!");
                return false;
            }
            if (Number(amount_) < 20) {
                this.notifmessage = ('输入金额至少20元');
                return false;
            }

            if (!/^-?\d+\.?\d{0,2}$/.test(amount_)) {
                this.notifmessage = ("请输入2位小数内的数字!");
                return false;
            }
            if (Number(amount_) > 100000) {
                this.notifmessage = ('输入金额不能大于100000元');
                return false;
            }
            if ( this.rechargeOption == 'hfFirstDpBonus') {
                if (Number(amount_) < 100) {
                    this.notifmessage = ('首存优惠起至少100元');
                    return false;
                }
            }
            if (val != 'no' && this.rechargeOption == 'hfSecond25') {
                    if (Number(amount_) < 200) {
                        this.notifmessage = ('再存优惠起至少200元');
                        return false;
                }
            }
            if (val != 'no' && this.rechargeOption == 'hfDpBonus88') {
                if (Number(amount_) < 88) {
                    this.notifmessage = ('再存优惠起至少88元');
                    return false;
                }
            }
            return true;
        },
        scanCode(){
            let that_ = this;
            let payload = {
                amount: '',
                option: ''
            }
            this.validateAmount(payload);
            // GetUserInfo
            // if true loginResult:false
            // loginResult: 正在充值中...
            let userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
            // Create postData
            let bankCode = "weixin";
            let postData = {
                Amount: parseFloat(x),
                BankCode: bankCode,
                ReturnDomain: this.$route.query.page,
                PayType: '3',
                UserId: userInfo.Id,
                UserLevel: userInfo.UserLevel,
                ActCode: this.rechargeOption
            }
            let config = { 
                headers: { 
                    'Authorization': 'Bearer ' + token,
                    'Content-Type': 'application/json; charset=utf-8',
                } 
            };

            this.$http.post()
            .then( function(res){
                //  loginResult(false);
                if ( res.data == 'Failed' ){
                    that_.notifmessage = ("支付失败，请重新在试或者使用其他支付方式！");
                    return;
                }
                if ( res.data == '您的账户在别的地方登陆，请重新登录!') {
                    that_.notifmessage = ("您的账户在别的地方登陆，请重新登陆", 2000);
                    // sessionStorage.clear();
                    setTimeout(function () {
                        that_.$route.push({ path: '../Login' });
                    }, 2500);
                    return;
                }
                if (data == "null") {
                    that_.notifmessage = ("您的账户暂时无法支付，请联系客服！");
                }
                if (data.Rnd) {
                    that_.notifmessage = ("订单号：" + res.data.Rnd + "完成转账，联系在线客服办理入账！");
                }
             })
            .catch( function(error){
                 if (error.data.status == 400) {
                    //loginResult(false);
                    that_.notifmessage = ("您的账户在别的地方登陆，请重新登陆", 2000);
                    //sessionStorage.clear();
                    setTimeout(function () {
                        that_.$route.push({ path: '../Login' });
                    }, 2500);
                }
             });

        }

    }
}

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped >
.tabs-content {
    
    height: 6.8rem;
    background: #d6d7db;
    padding-top: .22rem;
    
    .tab-section {
        background: #ffd800;
        color: #4c4c4c;
        border-radius: 3px 3px 0 0;
        font-size: .25rem;
        width: 6.2rem;
        height: .8rem;
        line-height: .8rem;
        margin: auto;
        padding-left: .28rem;
        border: 1px solid #bdbdbd !important;
    }

    .header-container {

        span {
            color: #ec3800;
            font-weight: 700;
        }

        .exlcusive  {
            color: #ec3800;
            font-weight: 700;
        }
    }

    .tab-amount {
        border-radius: 0 0 3px 3px;
        border: 1px solid #bdbdbd !important;
        border-top: none;
        margin-top: 0;
        height: 1.5rem;
        padding-top: .26rem;
        width: 6.2rem;
        margin: auto;
        display: block;
        background-color: #FFF;
        padding-left: .28rem;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        position: relative;
    
        .tab-amount-label {
            position: relative;
            float: left;
            line-height: 1.01rem;
            font-size: .3rem;
            color: #232323;
        }

        > .tab-input-container span {
            font-size: .36rem;
            height: .73rem;
            display: block;
            float: left;
            color: #232323;
        }

        .tab-input-container {
            height: .73rem;
            line-height: .73rem;
            display: block;
            font-size: .3rem;
            color: #000;
      
            float: left;
            height: 1rem;
            width: auto;
            line-height: 1.02rem;
            color: #232323;
            font-size: .22rem;
            overflow: hidden;
            margin-left: 1%;
            
            .tab-input {
                font-size: .33rem;
                width: 3.2rem;
                height: .6rem;
                line-height: .5rem;
                display: block;
                float: left;
                color: #333333;
                margin-top: 6%;
                padding-left: 5px;
            }

        }
    }

    .tab-options {
            margin-top:0 !important;
            padding: 0 .6rem !important;
            text-align: center !important;
            position:relative !important;

            > div {
                background: #fff;
                width: 5rem;
                height: .6rem;
                position: absolute;
                margin-top: .1rem;
                border: 1px solid #bdbdbd;
                border-radius: .12rem;
            }

            select {
                height: .6rem;
                width: 5rem;
                padding-left: .25rem;
                z-index: 2;
                position: relative;
                float: left;
                margin-top: 0.1rem;
            }

            .arrowbox {
                padding: .21rem 6%;
                top: 50%;
                right: 1.0rem;
                z-index: 1;
                background: #ca0626;
                position: absolute;
                margin-top: -.2rem;
                border-radius: 3px;
            }
            .arrowbox:before {
                content: '';
                height: .2rem;
                width: .2rem;
                display: block;
                border: 1px solid #fff;
                border-right-width: 0;
                border-top-width: 0;
                transform: rotate(-45deg);
                -webkit-transform: rotate(-45deg);
                -moz-transform: rotate(-45deg);
                -o-transform: rotate(-45deg);
                -ms-transform: rotate(-45deg);
                position: absolute;
                top: 50%;
                margin-top: -.16rem;
                right: 37%;
            }
        }   
      .tab-submit {
        width: 5.6rem;
        height: .9rem;
        background-color: #c61324;
        color: #FFF;
        text-align: center;
        line-height: .9rem;
        display: block;
        font-size: .3rem;
        margin: .7rem auto 0;
        border-radius: .07rem;

        :visited {
            background-color: #0a72e7;
        }
    }

    .tab-note {
        font-size: .23rem; 
        color: red; 
        text-indent: .4rem; 
        position: relative; 
        top: .2rem; 
    }
}




</style>

