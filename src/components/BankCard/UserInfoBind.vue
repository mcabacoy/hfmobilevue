<template>
    <div class="info-bind">
        <ul class="info-bind-container">
            <li v-if="displayItem('birthdate')"> 
                <span>出生日期</span>
                <input type="date" v-model="AccountDetails.BirthDate"
                    data-bind="value:BirthDate" placeholder="请输入出生日期">
            </li>
            <li v-if="displayItem('qq')">
                <span>QQ</span>
                <input type="tel" v-model="AccountDetails.QQ" 
                        placeholder="请输入要绑定的QQ">
            </li>
            <li v-if="displayItem('wechat')">
                <span>微信</span>
                <input type="text" v-model="AccountDetails.Wechat"
                    id="wechat" data-bind="value:WeChat" placeholder="请输入要绑定的微信">
            </li>
            <li v-if="displayItem('password')" > 
            </li>
            <li class="info-input" v-else-if="displayItem('phone')">
                <input type="tel" @blur="phoneValidator()" v-model="AccountDetails.Mobile" placeholder="建议使用常用手机" maxlength="11" id="phone">
                <div :class="[ isValid == 'success'  ? 'success-status' : isValid == 'error' ? 'error-status' : ''  ]"></div>
            </li>  
            <li class="info-input" v-else-if="displayItem('email')">
                <input type="tel" @blur="emailValidator()" v-model="AccountDetails.Email" placeholder="请输入邮箱" id="mailbox">
                <div :class="[ isValid == 'success'  ? 'success-status' : isValid == 'error' ? 'error-status' : ''  ]"></div>
            </li>         
            <li class="list verification-code" v-if="bindtype == 'email' || bindtype == 'phone'">
                <input type="tel" placeholder="请输入验证码" maxlength="6" v-model="passCode" >
                <a class="message" @click="sendMobileCode">{{ verificationNote }}</a>
            </li>
        </ul>
        <div class="info-bind-submit">
            <a class="btn" @click="updateUserInfo" style="cursor: not-allowed;">完成验证</a>
        </div>
        <div class="bindsuccess-modal" v-if="showModalType">
            <transition name="modaltrans">
                <div class="bindsuccess" v-if="showModalType == 'bindsuccess' && display">
                    <h1>{{ bindAmount }}<span>元</span></h1>
                    <p>恭喜您获得鸿富新人礼金 已转入到中心钱包</p>
                    <span class="ok" @click="closeBindSuccessModal">确  定</span>
                </div>
            </transition>
        </div>
        <notification :message="notifmessage" @close="closeNotif"  v-if="notifmessage!=''"></notification>
    </div>
</template>
<script>
import { mapState , mapMutations, mapGetters } from 'vuex'
import {    USERINFO,
            SAVE_USER_INFO,
            VERIFY_PASSCODE,
            BIND_EMAIL,
            BIND_PHONE,
            GET_EMAIL_REDBAG,
            GET_VERIFICATION_CODE,
            SEND_PASS_CODE,
            BIND_BASE_INFO, 
            CHECK_HF_MOBILE_BIND,
            CHECK_HF_EMAIL_BIND
       } from './../../api'
import Notification from './../Common/Notification'
var qs = require("querystring");
export default {
    name: 'signin',
    data(){
        return {
            AccountDetails: '',
            email: '',
            phone: '',
            notifmessage: '',
            passCode: '',
            showModalType: false,
            display: false,
            bindAmount: 0,
            verificationNote: '获取验证码',
            enabledSmsRequest: true,
            bindtype: this.$route.params.bindtype,
            
            isValid: '',
            isPristine: true
        }
    },
    components: { Notification },
    computed: {
        ...mapGetters({ 
            currentUser: 'currentUser',
        }),
    },
    methods: {
        displayItem(item){
            switch( this.bindtype ){
                case 'password':
                case 'email':
                case 'phone':
                    return item == this.bindtype
                case 'qq':
                case 'wechat':
                case 'birthdate':
                    let  list_ = 'qq,wechat,birthdate,';
                    return list_.indexOf(item) > -1;
                default:
                    return true; 
            }
        },
        ...mapMutations ([
            'setCurrentPage'
        ]),
        closeNotif(){
            this.notifmessage = ''
        },
        closeBindSuccessModal(){
            this.display = false;
            this.showModalType = false;
        },
        sendMobileCode(){
            let that_ = this;
            let curCount = 119;
            if (!that_.enabledSmsRequest)
            {
                return;
            }
            that_.enabledSmsRequest = false;
            let setTime = function(obj){
                if (curCount == 0) {
                    clearInterval(interval_);
                    that_.verificationNote = ("重新发送");
                    curCount = 119;
                    that_.enabledSmsRequest = true;
                } else {
                    that_.verificationNote = ( +curCount  + "秒再获取");
                    curCount--;
                }
            };
            let interval_ = setInterval(() => {
                setTime(this);
            }, 1000);

            let config = { headers: { 
                'Authorization': 'Bearer ' + this.currentUser.tokenKey,
                'Content-Type': 'application/json; charset=utf-8',
                'Cache': false,
                'Async': true,
            } };
            this.$http.get( GET_VERIFICATION_CODE , config )
            .then( function(res) {
                // SEND PASS CODE
                let postData = {
                    mobile: that_.bindtype == 'email' ? that_.AccountDetails.Email : that_.AccountDetails.Mobile,
                    mode: that_.bindtype == 'email' ? 1 : 0 ,
                    verificationCode: res.data
                };
                that_.$http.get( SEND_PASS_CODE, { params: postData }, config )
                .then( function(res){
                     if ( that_.bindtype == 'email'  )  
                        that_.notifmessage = ("验证码发送成功");
                })
                .catch( function(error){ 
                    // Remove Disabled, Set Cursor Pointer, 
                    that_.verificationNote = '获取验证码';
                    that_.notifmessage = ("发送手机验证码服务正在维护中...");
                });
            })
            .catch( function() {
                that_.notifmessage = ("发送手机验证码服务正在维护中...");
            });
        },
        updateUserInfo(){
            let that_ = this;
            switch(this.bindtype){
                case 'email': 
                    that_.verifyPasscode(that_.bindUserEmail);
                    break;
                case 'phone':
                    that_.verifyPasscode(that_.bindUserPhone);
                    break;
                default:
                    that_.bindGeneralInfo();
                    break;
            }
        },
        getAge(birthDate) {
            var today = new Date();
            var age = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();

            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return age;
        },
        verifyPasscode( payload ){
            let that_ = this;
            let config = { headers: { 
                'Authorization': 'Bearer ' + this.currentUser.tokenKey,
                'Content-Type': 'application/json; charset=utf-8',
            } };
            let postData = { 
                mobile: that_.AccountDetails.Mobile, 
                passCode: that_.passCode, 
                mode:  that_.bindtype == 'email' ? 1 : 0
            };

            this.$http.get( VERIFY_PASSCODE,  { params: postData } , config )
            .then( function(res){
                payload(res.data);
            })
            .catch( function(error){
            });
        },
        bindGeneralInfo(){
            let that_ = this;
            if ( that_.AccountDetails.BirthDate == null || 
                    that_.AccountDetails.BirthDate == "" ) {
                that_.notifmessage = ("请输入出生日期");
                return;
            }
            else {
                var strDate = that_.AccountDetails.BirthDate.split("-");
                var birthdate = new Date(strDate[0], (strDate[1] - parseInt(1)), strDate[2])
                var age = that_.getAge(birthdate);
                if (age < 18) {
                    showmes("您输入的出生日期还未成年，请确认！");
                    return;
                }
            }
            if ( that_.AccountDetails.Email  == null ||  that_.AccountDetails.Email  == "") {
                that_.notifmessage = ("请输入邮箱地址");
                return;
            } else {
                var reg = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
                if (!reg.test( that_.AccountDetails.Email )) {
                    that_.notifmessage = ("请输入正确的邮箱地址");
                    return;
                }
            }
            if ( that_.AccountDetails.QQ  == null ||  that_.AccountDetails.QQ  == "") {
                that_.notifmessage = ("请输入您的QQ号");
                return;
            }
            // if ( that_.AccountDetails.WeChat  == null ||  that_.AccountDetails.WeChat  == "") {
            //     that_.notifmessage = ("请输入您的微信号");
            //     return;
            // }

            let postData = {
                Sex: that_.AccountDetails.Sex == "男",
                BirthDate: that_.AccountDetails.BirthDate,
                Email: that_.AccountDetails.Email,
                QQ: that_.AccountDetails.QQ,
                Wechat: that_.AccountDetails.WeChat
            };
            let config = { headers: { 
                'Authorization': 'Bearer ' + this.currentUser.tokenKey,
                'Content-Type': 'application/json; charset=utf-8',
            } };
            that_.$http.post(BIND_BASE_INFO, JSON.stringify(postData), config)
            .then( function(res){
                that_.$route.push({ path: '../BankCard' });
            })
            .catch( function(error){
            });
            // END bindGeneralInfo
        },
        bindUserPhone(){
            // BIND_PHONE
            let that_ = this;
            let config = { headers: { 
                'Authorization': 'Bearer ' + this.currentUser.tokenKey,
                'Content-Type': 'application/json; charset=utf-8',
                'Async': false
            } };
            this.$http.get( BIND_PHONE + '?mobile=' + this.AccountDetails.Mobile,  config )
            .then( function(res){
                this.requestAccountInfo( this.currentUser.tokenKey );
            })
        },
        bindUserEmail( payload ){
            let that_ = this;
            let config = { headers: { 
                'Authorization': 'Bearer ' + this.currentUser.tokenKey,
                'Content-Type': 'application/json; charset=utf-8',
                'Async': false
            } };
            this.$http.get( BIND_EMAIL + '?email=' + this.AccountDetails.Email,  config )
            .then( function(res){
                if (res.data == "true" ){
                    that_.notifmessage = '邮箱绑定成功';
                    that_.showSuccessBind();
                }
                else {

                }
            })
        },
        showSuccessBind(){
            // GET_EMAIL_REDBAG
            let that_ = this;
            let config = { headers: { 'Authorization': 'Bearer ' + this.currentUser.tokenKey } };
            this.$http.get( GET_EMAIL_REDBAG,  config )
            .then( function(res){
                if ( res.data.amount > 0 ){
                    that_.showModalType = false;
                }
                that_.requestAccountInfo();
            })
            .catch( function(){ });

        },
        setAccountDetails() {
            this.AccountDetails = qs.parse(this.currentUser.userInfo );
        },
        requestAccountInfo( token ){
            let that_ = this;
            let config = { headers: { 'Authorization': 'Bearer ' + token } };
            this.$http.get( USERINFO,  config )
            .then( function(res){
                that_.storeUserInfoSession((qs.stringify(res.data.Value)))
                that_.setAccountDetails();
            })
            .catch( function(error){
            });
        },
        populateUserInfo(){
            let session_ = this.currentUser;
            this.AccountDetails = qs.parse(session_.userInfo);
            if ( this.AccountDetails == null && this.AccountDetails.AccountName ) {
                this.setAccountDetails();
            }
            else {
                this.requestAccountInfo( this.currentUser.tokenKey );
            }
        },
        phoneValidator(){
            this.isPristine = false;
            let that_ = this;
            let value = this.AccountDetails.Mobile;
            if (value == null || value == "") {
                that_.isValid = 'error';
            }
            else {
                var reg = /^0?(13[0-9]|15[0-9]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/;
                if (!reg.test(value)) {
                    that_.isValid = 'error';
                }
                else {
                    this.enabledSmsRequest = true;
                    that_.isValid = true;
                    let config = { headers: { 
                        'Authorization': 'Bearer ' + this.currentUser.tokenKey,
                        'Content-Type': 'application/json; charset=utf-8',
                        'Data-Type': 'json'
                    } };
                    let postData = { mobile: value };
                    this.$http.get(CHECK_HF_MOBILE_BIND + '?mobile=' + value, config)
                    .then( function(res){
                        if (res.data) {
                            that_.isValid = true;
                        }
                        else {
                            that_.notifmessage = ("该手机号已被绑定");
                            that_.isValid = false;
                            return false;
                        }
                    }).catch(function(error){});
                }
            }
        },
        emailValidator(){
            this.isPristine = false;
            let that_ = this;
            let value = this.AccountDetails.Email;
            if (value == null || value == "") {
                that_.isValid = 'error';
            }
            else {
                var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (!reg.test(value)) {
                    that_.isValid = 'error';
                }
                else {
                    this.enabledSmsRequest = true;
                    that_.isValid = true;
                    let config = { headers: { 
                        'Authorization': 'Bearer ' + this.currentUser.tokenKey,
                        'Content-Type': 'application/json; charset=utf-8',
                    } };
                    let postData = { mobile: value };
                    this.$http.get(CHECK_HF_EMAIL_BIND + '?email=' + value, config)
                    .then( function(res){
                        if (res.data) {
                            that_.isValid = true;
                            that_.enabledSmsRequest = true;
                        }
                        else {
                            that_.notifmessage = ("该邮箱号已被绑定");
                            that_.isValid = false;
                            that_.enabledSmsRequest = false;
                            return false;
                        }
                    }).catch(function(error){});
                }
            }
        }
    },
    // watch: {
    //     'AccountDetails.Mobile': function(val){
    //         if ( val  )
    //             this.isValid = 'success';
    //         else 
    //             this.isValid = 'error';
    //     }
    // },
    created() {
        this.populateUserInfo();
        this.setCurrentPage('UserInfoBind');
   }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" >
    .bindsuccess-modal {
            width: 100%;
            height: 100%;
            display: block;
            position: fixed;
            top: 0;
            z-index: 299;
            left: 0;
            background: rgba(43, 35, 33, 0.9);
            .bindsuccess {
                background: url(../../../static/img/pop.png) no-repeat;
                background-size: 98%;
                background-position-x: .2rem;
                width: 100%;
                height: 8rem;
                position: fixed;
                top: 1rem !important;
                z-index: 300;

                h1 {
                    padding-left: .1rem;
                    text-align: center;
                    width: 2.8rem;
                    margin: 0 auto;
                    margin-top: 2.5rem;
                    color: #e6190a;
                    font-size: .75rem;
                    font-weight: 700;
                }

                p {
                    color: #ffe400;
                    width: 3.5rem;
                    margin: 0 auto;
                    text-align: center;
                    padding: 0 .2rem;
                    font-size: .3rem;
                    margin-top: 1rem;                   
                }

                .ok {
                    background: #ffba00;
                    background: -webkit-linear-gradient(#ffba00 50%, #ee7000);
                    background: -o-linear-gradient(#ffba00 50%, #ee7000);
                    background: -moz-linear-gradient(#ffba00 50%, #ee7000);
                    background: linear-gradient(#ffba00 50%, #ee7000);
                    box-shadow: 1px 4px 5px 0px #7c1004;
                    margin: 0 auto;
                    display: block;
                    width: 2.8rem;
                    height: .68rem;
                    border-radius: 2rem;
                    margin-top: 1.3rem;
                    color: #c10000;
                    font-size: .35rem;
                
                }

            }
}

.error-status {
    width: 1rem;
    height: .4rem;
    background: url('../../../static/img/error_validate.png') no-repeat;
    float: right;
    margin-right: -.7rem;
    background-size: 35%;
}
.success-status {
    width: 1rem;
    height: .4rem;
    background: url('../../../static/img/success_validate.png') no-repeat;
    float: right;
    background-size: 35%;
    margin-right: -.7rem;
}
body {
    background: #e4dede;
    margin: 0;
    padding: 0;
    display: block;
}

.info-bind {
        margin-top: 1.3rem;
        width: 100%;

        ul.info-bind-container {
            margin: 5% auto 0;
            width: 92%;
            background: #fff;
            border: 1px solid #f3f3f3;
            border-radius: .1rem;

            input {
                width: 70%;
                padding-left: .2rem;
                font-size: .28rem;
                color: #3d4245;
            }

            li {
                position: relative;
                padding: 4% 4%;
                font-size: .28rem;
                color: #c6c5c5;
                border-bottom: 1px solid #f3f3f3;
            }
            
            li.info-input {
                border-bottom: 1px solid #f3f3f3;
                
                .success_phone {
                    width: 1rem;
                    height: .4rem;
                    background: url(../../../static/img/success_validate.png) no-repeat;
                    float: right;
                    background-size: 35%;
                    margin-right: -.7rem;
                }
            }

            li.verification-code {
                border-bottom: 0;

                input {
                    width: 40%;
                    padding-left: .2rem;
                    font-size: .26rem;
                    color: #3d4245;
                }
                
                a.message {
                    color: #ff6464;
                    border-left: 1px solid #f3f3f3;
                    position: absolute;
                    right: 7%;
                    bottom: 2%;
                    padding: 3.6% 0;
                    padding-left: 7%;
                }
            }
        }
}


.info-bind-submit {
    margin-top: 3%;
    text-align: center;
    cursor: not-allowed;
    line-height: .4rem;

    a.btn , a.btn:visited {
        margin: 4% auto 2%;
        background: #c61324;
        color: #fff;
        text-align: center;
        display: block;
        width: 92%;
        padding: .3rem 0;
        border-radius: .08rem;
        font-size: .31rem;
    }
}

</style>
