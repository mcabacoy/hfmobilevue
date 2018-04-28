<template>
  <div class="tabs-content" id="WalletRecharge">
      <div>
            <div>
                <div class="tab-header">
                    <div class="header-container tab-section exclusive" v-if="methoddetails.recharger.headertype=='exclusive'" 
                            style="border-radius: .08rem .08rem 0 0;">
                        添加专属微信：<span id="WeChatNumber"></span>，
                        <span>&nbsp;转账并备注账号!</span></div>

                    <div class="header-container tab-section" v-if="methoddetails.recharger.headertype =='limit'" 
                            style="border-radius: .08rem .08rem 0 0;">
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
                               v-model="rechargeAmount"
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
                <a class="tab-submit" @click="createPayloads">确 认</a>
                <p class="tab-note">{{ methoddetails.recharger.aditionalremarks }}</p>
            </div>
        </div>
        <notification :message="notifmessage" @close="closeNotif"  v-if="notifmessage!=''"></notification>
  </div>
</template>


<script>
import { mapState, mapGetters , mapMutations} from 'vuex'
import Notification from './../Common/Notification'
import { 
            RECHARGE_WXPAYDEPOSIT,
            RECHARGE_ONLINE_PROCESS,
            RECHARGEFAST_DEPOSIT
        } from './../../api'

export default {
    name: 'recharger-tab',
    props: ["method"],
    components: { Notification },
    data(){
        return {
            notifmessage: '',
            rechargeAmount: 0,
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
        closeNotif(){
            this.notifmessage = ''
        },
        ...mapMutations (['clearSessions']),
        // VALIDATOR
        dynamicValidator( validation  ){
            let amount_ = this.rechargeAmount;
            let rechargeOption = this.rechargeOption;
        
            // Dynamic Validator
            if ( validation.isRequired && (amount_ == null || amount_ == "")) {
                this.notifmessage = ("请填写充值金额！");
                return false;
            }
            if ( validation.isNumber && (isNaN(amount_))) {
                this.notifmessage = ("请输入有效的数字!");
                return false;
            }
            if ( validation.isAbsolute && (parseFloat(amount_) <= 0)) {
                this.notifmessage = ("请输入大于0的数字!");
                return false;
            }
            if ( validation.hasDecimal && String(amount_).indexOf(".") < 0) {
                this.rechargeAmount = amount_ + (Math.random()).toFixed(2).slice(1, 4);
                amount_ = this.rechargeAmount;
            }
            if ( validation.hasMinimum && (Number(amount_) < validation.minValue)) {
                this.notifmessage = ('输入金额至少' + validation.minValue +  '元');
                return false;
            }
            if ( validation.isFloat && (!/^-?\d+\.?\d{0,2}$/.test(amount_))) {
                this.notifmessage = ("请输入2位小数内的数字!");
                return false;
            }
            if (  validation.hasMaximum && (Number(amount_) > validation.maxValue)) {
                this.notifmessage = ('输入金额不能大于' + validation.maxValue + '元');
                return false;
            }

            // Validation for Deposit Options
            if ( rechargeOption == 'hfFirstDpBonus') {
                if (Number(amount_) < 100) {
                    this.notifmessage = ('首存优惠起至少100元');
                    return false;
                }
            }
            if (rechargeOption != 'no' && rechargeOption == 'hfSecond25') {
                    if (Number(amount_) < 200) {
                        this.notifmessage = ('再存优惠起至少200元');
                        return false;
                }
            }
            if (rechargeOption != 'no' && rechargeOption == 'hfDpBonus88') {
                if (Number(amount_) < 88) {
                    this.notifmessage = ('再存优惠起至少88元');
                    return false;
                }
            }
            return true;
        },

        // CALLBACKS
        successCallback_UnionPay( data ){
            if(this.successCallback()) {
                if(data){
                    location.href = '/UnionPay';
                    data.type = '1';
                    sessionStorage.setItem("pay", JSON.stringify(data));
                }
            }
        },
        successCallback_QQ( data ){
            if(this.successCallback()) {
               if (data.Success) {
                    if (data.Message.indexOf('频繁提交订单') > 0) 
                        this.notifmessage = ("您的上一笔订单还未支付，请等待90秒后再操作", 3000);
                    else 
                        document.write(data.Message);
                    
                } else {
                    this.notifmessage = (data.Message, 3000);
                }
            }
        },
        successCallback_UnionPay4( data ){
            if(this.successCallback()) {
                if(data){
                    location.href = '/UnionPay';
                    data.type = '4';
                    sessionStorage.setItem("pay", JSON.stringify(data));
                }
            }
        },
        successCallback_Alipay(data){
            if (this.successCallback(data)){
                if (data == null || data == "null") {
                     this.notifmessage = ("您的账户暂时无法支付，请联系客服！");
                    return;
                } else {
                    if (data.Message.indexOf('<form') > -1) {
                        document.write(data.Message);
                    } else {
                        data.type = '3';
                        sessionStorage.setItem("pay", JSON.stringify(data));
                        location.href = '/UnionPay';
                    }
                   
                }
              
            }
        },
        successCallback_Redirect(data){
            if (this.successCallback(data)){
                if (data.Success) {
                    if (data.Message.indexOf('请勿频繁提交订单，请稍后再试') > 0) 
                        this.notifmessage = ("您的上一笔订单还未支付，请等待90秒后再操作", 3000);
                    else {
                        localStorage.setItem('ThirdParty', location.href);
                        document.write(data.Message);
                    } 
                } else {
                    this.notifmessage = (data.Message, 3000);
                }
            }
        },
        successCallback_Write(data){
            if (this.successCallback(data)){
                // document.write(data.Message)
            }
        },
        successCallback_RND( data ){
            if(this.successCallback()); {
                if ( data == null ){
                    this.notifmessage = ("您的账户暂时无法支付，请联系客服！");
                }
                if ( data.Rnd){
                    this.notifmessage = ("订单号：" + data.Rnd + "完成转账，联系在线客服办理入账！");
                }
            }
        },
        successCallback(data){
            if (data == "Failed") {
                this.notifmessage = ("支付失败，请重新在试或者使用其他支付方式！");
                return false;
            }
            if (data == '您的账户在别的地方登陆，请重新登录!') {
                this.notifmessage = ("您的账户在别的地方登陆，请重新登陆", 2000);
                this.clearSessions();
                setTimeout(function () {
                    this.$route.push({ path: '../Login' });
                }, 2500);
                return false;
            }
        },
        errorCallback(error){
            // console.log('**********');
            // console.log(error);
             if (error.data.status == 400) {
                //loginResult(false); -- Display message
                this.notifmessage = ("您的账户在别的地方登陆，请重新登陆", 2000);
                this.clearSessions();
                setTimeout(function () {
                    this.$route.push({ path: '../Login' });
                }, 2500);
            }
        },

        // Generic Submission
        // Parameters
        genericSubmit( url, postData, config,  successCall, errorCall, validation ){
            if (!this.dynamicValidator(validation)) {
                return;
            }
            else {
                this.$http.post( url, JSON.stringify(postData), config)
                .then ( function(res){
                    console.log(res.data);
                    document.write(res.data.Message);
                    successCall(res.data);
                })
                .catch( function( error ){
                    errorCall(error);
                 });
            }
        },

        createPayloads(){
            let that_ = this;
            let name = this.methoddetails.name;
            let postData = { };
            let validationOption = { };
            let config = { 
                headers: { 
                    'Authorization': 'Bearer ' + this.currentUser.tokenKey,
                    'Content-Type': 'application/json; charset=utf-8',
                } 
            };
            let getUrl = '';
            let bankCode = '';
            let amount = this.rechargeAmount;
            let option = this.rechargeOption;
            let returnDomain = this.$route.fullPath;
            let callBackSuccess, callBackError;
            let userInfo =  this.currentUser.userInfo;
            console.log(name);
            switch(name){
                case "WeChatTransfer": 
                    validationOption = {
                        isRequired: true,
                        isInterger: false,
                        hasDecimal: true,
                        isNumber: true,
                        isAbsolute: true,
                        isFloat: true,
                        hasMinimum: true,
                        minValue: 20,
                        hasMaximum: true,
                        maxValue: 100000
                    };
                    bankCode = 'weixin';
                    getUrl = RECHARGE_WXPAYDEPOSIT;
                    postData = {
                        Amount: parseFloat(this.rechargeAmount),
                        BankCode: bankCode,
                        ReturnDomain: returnDomain,
                        PayType: '3',
                        UserId: userInfo.Id,
                        UserLevel: userInfo.UserLevel,
                        ActCode: option
                    }
                    this.genericSubmit(  getUrl, postData, config,  that_.successCallback_RND, that_.errorCallback, validationOption  );
                    break;
                case "RechargeOnline":
                    validationOption = {
                        isRequired: true,
                        isInterger: false,
                        hasDecimal: true,
                        isNumber: true,
                        isAbsolute: true,
                        isFloat: true,
                        hasMinimum: true,
                        minValue: 20,
                        hasMaximum: true,
                        maxValue: 50000
                    };
                    bankCode = 'online';
                    getUrl = RECHARGE_ONLINE_PROCESS;
                    postData = {
                        Amount: parseFloat(this.rechargeAmount),
                        BankCode: bankCode,
                        ReturnDomain: returnDomain,
                        PayType: '1',
                        ActCode: option
                    }
                    this.genericSubmit(  getUrl, postData, config,  that_.successCallback_Write, that_.errorCallback, validationOption  );
                    break;
                
                case "QuickPayment":
                    validationOption = {
                        isRequired: true,
                        isInterger: false,
                        hasDecimal: true,
                        isNumber: true,
                        isAbsolute: true,
                        isFloat: true,
                        hasMinimum: true,
                        minValue: 20,
                        hasMaximum: true,
                        maxValue: 50000
                    };
                    bankCode = 'online';
                    getUrl = RECHARGE_ONLINE_PROCESS;
                    postData = {
                        Amount: parseFloat(this.rechargeAmount),
                        BankCode: bankCode,
                        ReturnDomain: returnDomain,
                        PayType: '16',
                        ActCode: option
                    }
                    this.genericSubmit(  getUrl, postData, config,  that_.successCallback_Write, that_.errorCallback, validationOption  );
                    break;
                case "WeChatScanCode":
                    validationOption = {
                        isRequired: true,
                        isInterger: false,
                        hasDecimal: true,
                        isNumber: true,
                        isAbsolute: true,
                        isFloat: true,
                        hasMinimum: true,
                        minValue: 31,
                        hasMaximum: true,
                        maxValue: 2999
                    };
                    bankCode = 'weixin';
                    getUrl = RECHARGE_ONLINE_PROCESS;
                    postData = {
                        Amount: parseFloat(this.rechargeAmount),
                        BankCode: bankCode,
                        ReturnDomain: returnDomain,
                        PayType: '13',
                        ActCode: option
                    }
                    this.genericSubmit(  getUrl, postData, config,  that_.successCallback_Write, that_.errorCallback, validationOption  );
                    break;
                
                case "AlipayScanCode":
                    validationOption = {
                        isRequired: true,
                        isInterger: true,
                        hasDecimal: true,
                        isNumber: true,
                        isAbsolute: true,
                        isFloat: true,
                        hasMinimum: true,
                        minValue: 51,
                        hasMaximum: true,
                        maxValue: 999
                    };
                    bankCode = 'online';
                    getUrl = RECHARGE_ONLINE_PROCESS;
                    postData = {
                        Amount:  parseFloat(this.rechargeAmount),
                        BankCode: bankCode,
                        ReturnDomain: returnDomain,
                        PayType: '12',
                        UserId: userInfo.Id,
                        UserLevel: userInfo.UserLevel,
                        ActCode: option
                    }
                    this.genericSubmit(  getUrl, postData, config,  that_.successCallback_Alipay, that_.errorCallback, validationOption  );
                    break;
                case "OnlineBanking":
                    validationOption = {
                        isRequired: true,
                        isInterger: false,
                        hasDecimal: false,
                        isNumber: true,
                        isAbsolute: true,
                        isFloat: true,
                        hasMinimum: true,
                        minValue: 20,
                        hasMaximum: true,
                        maxValue: 100000
                    };
                    bankCode = 'ICBC';
                    getUrl = RECHARGEFAST_DEPOSIT;
                    postData = {
                        Amount:  parseFloat(this.rechargeAmount),
                        BankType: bankCode,
                        ReturnDomain: returnDomain,
                        UserId: userInfo.Id,
                        UserLevel: userInfo.UserLevel,
                        ActCode: option
                    }
                    this.genericSubmit(  getUrl, postData, config,  that_.successCallback_UnionPay, that_.errorCallback, validationOption  );
                    break;
                case "WeChatBankCard":
                    validationOption = {
                        isRequired: true,
                        isInterger: false,
                        hasDecimal: false,
                        isNumber: true,
                        isAbsolute: true,
                        isFloat: true,
                        hasMinimum: true,
                        minValue: 100,
                        hasMaximum: true,
                        maxValue: 2999
                    };
                    bankCode = 'ICBC';
                    getUrl = RECHARGEFAST_DEPOSIT;
                    postData = {
                        Amount:  parseFloat(this.rechargeAmount),
                        BankType: bankCode,
                        ReturnDomain: returnDomain,
                        UserId: userInfo.Id,
                        UserLevel: userInfo.UserLevel,
                        ActCode: option
                    }
                    this.genericSubmit(  getUrl, postData, config,  that_.successCallback_UnionPay4, that_.errorCallback, validationOption  );
                    break;
                case "QQScanCode":
                    validationOption = {
                        isRequired: true,
                        isInterger: false,
                        hasDecimal: false,
                        isNumber: true,
                        isAbsolute: true,
                        isFloat: true,
                        hasMinimum: true,
                        minValue: 31,
                        hasMaximum: true,
                        maxValue: 299
                    };
                    bankCode = 'QQPay';
                    getUrl = RECHARGE_ONLINE_PROCESS;
                    let realWebapi = '';
                    postData = {
                        Amount:  parseFloat(this.rechargeAmount),
                        BankCode: bankCode,
                        ReturnDomain: returnDomain,
                        PayType: '15',
                        ActCode: option
                    }
                    this.genericSubmit(  getUrl, postData, config,  that_.successCallback_UnionPay4, that_.errorCallback, validationOption  );
                    break;
                
                default:
                    break;
            }
        }
    },
    created(){
        
    }
}

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped >
.tabs-content {
    height: 7.5rem;
    background: #d6d7db;
    padding-top: .22rem;
    
    .tab-section {
        background: #ffd800;
        color: #4c4c4c;
        border-radius: 0 0 .08rem .08rem;
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
        border-left: 1px solid #bdbdbd !important;
        border-right: 1px solid #bdbdbd !important;
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

