<template>
    <div class="registration">
        <header class="reg-header">
            <span class="cancel" @click="goBack()">取消</span>
            <span class="header-title">注册新用户</span>
            <span class="" style="color: transparent" >取消</span>
        </header>
        <div class="reg-body">
            <!-- Username -->
            <div class="reg-input text-control">
                <span class="input-label">HF用户名</span>
                <input class="input-control" placeholder="5-10个字母或数字" 
                    v-model="userName" @blur="validateAccountName"
                    type="text" maxlength="12">
            </div>

            <!-- Password -->
             <div class="reg-input text-control">
                <span class="input-label">密 码</span>
                <input class="input-control" placeholder="密码建议至少使用两种字符组合" 
                    v-model="passWord"  @blur="validatePassword"
                    type="password" maxlength="12">
            </div>
            
            <!-- Fullname -->
            <div class="reg-input text-control">
                <span class="input-label">真实姓名</span>
                <input class="input-control" placeholder="请输入您的真实姓名" 
                    v-model="realName" @blur="validateRealName"  type="text" >
            </div>

            <!-- Birthdate -->
            <!-- Default Value: 1999/7/14 -->
            <div class="reg-input date-control">
                <span class="input-label">出生年月</span>
                <input class="input-control" v-model="birthDate" placeholder="请输入出生日期" 
                    @blur="validateBirthdate" type="date" maxlength="12">
            </div>

            <!-- Gender -->
            <div class="reg-input option-control">
                <span class="input-label">性 别</span>
                <div class="input-options-control">
                    <div :class="['item', selectedSex == 1 ? 'selected' : '' ]">
                        <span class="radio-circle" @click="selectRadioButton(1)"></span>
                        <input type="radio" class="item-control" value="1" v-model="sex" :checked="selectedSex == 1">
                        <label class="item-label">男</label>
                    </div>                           
                    <div :class="['item', selectedSex == 2 ? 'selected' : '' ]">
                        <span class="radio-circle" @click="selectRadioButton(2)"></span>
                        <input type="radio" class="item-control" value="2" v-model="sex" :checked="selectedSex == 2">
                        <label class="item-label">女</label>
                    </div> 
                </div>
            </div>

            <!-- Wechat -->
            <div class="reg-input text-control">
                <span class="input-label">微信号</span>
                <input class="input-control" placeholder="请输入您的微信号" 
                    @blur="validateRequired(wechatNo)"
                    v-model="wechatNo" type="text" >
            </div>

            <!-- Phone -->
            <div class="reg-input text-control">
                <span class="input-label">手机号码</span>
                <input class="input-control" placeholder="请输入您的电话号码" 
                    v-model="phoneNo" @blur="validatePhoneNumber"
                    type="tel" maxlength="11">
            </div>

            <!-- Email Address -->
            <div class="reg-input text-control">
                <span class="input-label">邮 箱</span>
                <input class="input-control" placeholder="建议使用常用邮箱" 
                    v-model="emailAddress" @blur="validateEmailAddress"
                    type="text">
            </div>

            <!-- Captcha -->
            <div class="reg-input captcha-control">
                <div>
                    <!-- {{ getCaptchaImage }} -->
                    <img class="captcha-img" :src="getCaptchaImage"  />
                </div>
                <input class="input-control" placeholder="请输入验证码" 
                    v-model="captchaText" @blur="validateCaptcha"
                    autocomplete="off" type="text" maxlength="6" >
            </div>

            <div  @click="register" class="submit-btn">注册</div>

        </div>
        <div class="reg-footer">
            <a href="/Login">已有鸿福账号，请登录</a>
            <a href="javascript:;" class="Button-light disabled" 
                disabled="disabled" style="cursor: not-allowed;">注册</a>
        </div>

        <notification :message="notifmessage" @close="closeNotif"  v-if="notifmessage!=''"></notification>
    </div>
</template>

<script>
var qs = require("querystring");
import Notification from './Common/Notification'
import  {   LOAD_CAPTCHA,
            VALIDATE_CAPTCHA, 
            CAPTCHA_SOURCE,
            REGISTER,
            REGISTER_AGENT_CODE,
            CHECK_USERNAME,
            CHECK_MOBILE,
            CHECK_EMAIL
        } from './../api'

export default {
    components: { Notification },
    data(){
        return {
            userName: '',
            passWord: '',
            realName: '',
            birthDate: '',
            sex: 1,
            wechatNo: '',
            phoneNo: '',
            emailAddress: '',
            captchaText: '',

            captchaImage: '',

            isCaptchaCorrect: false,
            isAccountNameCorrect: false,
            isEmailCorrect: false,
            isPhoneCorrect: false,
            notifmessage: ''
        }   
    },
    computed: {
        getCaptchaImage() {
            return (this.captchaImage);
        },
        selectedSex() {
            return this.sex;
        }
    },

    created() {
        this.loadCaptcha();
        // this.birthDate = new Date('1999/7/14');
    },

    methods: {
        // FRONT-END FUNCTIONS
        closeNotif(){
            this.notifmessage = ''
        },
        goBack(){
            this.$router.go(-1);
        },
        selectRadioButton(payload){
            this.sex = payload;
        },

        // FORM VALIDATIONS
        validateRequired: function(e){
            var field = e;
            if (field == null || field == "") {
                this.notifmessage = ("请输入您的微信");
                return false;
            } else {
                return true;
            }
        },

        validateAccountName: function(){
            var accountName = this.userName;
            let reg = /^\w{6,12}$/ ;
            if ( reg.test(accountName) && accountName != undefined && accountName != "" )
            {
                let accountNameVal = 'HF' + accountName;
                let that_ = this;
                this.$http.get( CHECK_USERNAME + '?username=' + accountNameVal )
                .then(  function (res){
                    if (!res.data) {
                        that_.notifmessage = '用户名已存在';
                        that_.isAccountNameCorrect = false;
                        return false;
                    }
                    else {
                        that_.isAccountNameCorrect = true;
                        return true;
                    }
                })
            }
            else {
                this.notifmessage = '用户名长度须为6-12位,数字,字母及下划线';
                this.isAccountNameCorrect = false;
                return false;
            }
        },

        validatePassword: function (){
            var password = this.passWord;
            var reg = /^\w{6,12}$/;
            if (password == null || password == "") {
                this.notifmessage = "请输入密码";
                return false;
            }
            else {
                if (!reg.test(password)) {
                    this.notifmessage = "密码长度6-12位数字和字母组合";
                    return false;
                }
                else {
                    return true;
                }
            }
        },

        validateRealName: function (){
            var realname = this.realName;
            var reg = /^[\u4e00-\u9fa5 ]{2,20}$/;
            if ( realname == null || realname == "") {
                this.notifmessage = ("请输入您的真实姓名");
                return false;
            } else {
                if (!reg.test(realname)) {
                    this.notifmessage = ("请输入您的真实姓名，如：张学友");
                    return false;
                }
                else {
                    return true;
                }
            }
        },

        validateBirthdate: function(){
            var birthdate = this.birthDate;
            if ( birthdate == null || birthdate == "") {
                this.notifmessage = ("请输入您的出生年月");
                return false;
            } else {
                if (new Date(birthdate).getTime() > 933638400000) {
                    this.notifmessage = ("您还没有成年");
                    return false;
                }
                else {
                    return true;
                }
            }
        },

        validatePhoneNumber: function(){
            var phoneVal = this.phoneNo,
                reg = /^0?(13[0-9]|15[0-9]|18[0-9]|14[0-9]|17[0-9])[0-9]{8}$/,
                that_ = this;
            if (phoneVal == null || phoneVal == "") {
                this.notifmessage = ("请输入手机号码");
                this.isPhoneCorrect = false;
                return false;
            }
            else {
                if (!reg.test(phoneVal)) {
                    this.notifmessage = ("请输入正确的手机号码");
                    this.isPhoneCorrect = false;
                    return false;
                } 
                else {
                    this.$http.get( CHECK_MOBILE + '?mobile=' + phoneVal )
                    .then( function (res) {
                        if (!res.data) {
                            that_.notifmessage = ("此手机号码已被注册");
                            that_.isPhoneCorrect = false;
                            return false;
                        }
                        else {
                            that_.isPhoneCorrect = true;
                            return true;
                        }
                    });
                }
            }
        },

        validateEmailAddress: function(){
            var email = this.emailAddress;
            var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if ( email == null || email == "" ) {
                this.notifmessage = ("请输入正确的电子邮件地址");
                this.isEmailCorrect = false;
                return false;
            }
            else {
                if (!reg.test(email)) {
                    this.notifmessage = ("请输入正确的电子邮件地址");
                    this.isEmailCorrect = false;
                    return false;
                }
                else {
                    let that_ = this;
                    this.$http.get(CHECK_EMAIL + '?email=' + email )
                    .then (function (res) {
                        if (!res.data) {
                            that_.notifmessage = ("该邮箱地址已被注册");
                            that_.isEmailCorrect = false;
                            return false;
                        }
                        else {
                            that_.isEmailCorrect = true;
                            return true;
                        }
                    })
                }
            }
        },
        // END OF FORM VALIDATIONS
        
        loadCaptcha() {
            let that_ = this;
            let config = {
                header: {
                    'Content-Type': 'application/json; charset=utf-8',
                    'Cache' : false,
                    'Data-Type': 'json'
                }
            }
            this.$http.get( LOAD_CAPTCHA , config )
                .then( function(res) {
                    var imgdata_ = res.data.split('.png');
                    that_.captchaImage = imgdata_[0]; //'./../../static' + imgdata_[0] + '.png';
                    that_.isCaptchaCorrect = false;
                });
        },

        validateCaptcha(){
            let that_ = this;
            var captcha = this.captchaText;
            let config = {
                header: {
                    'Data-Type': 'json'
                }
            };
            if ( captcha == null || captcha == "") {
                this.notifmessage = "请输入验证码";
                this.isCaptchaCorrect = false;
                return false;
            }
            else {
                this.$http.get( VALIDATE_CAPTCHA + '?captchaText=' + captcha , config )
                .then( function (res){
                    if (!res.data) {
                        that_.notifmessage = "请输入正确的验证码";
                        that_.isCaptchaCorrect = false;
                        return false;
                    }
                    else {
                        that_.isCaptchaCorrect = false;
                        return true;
                    }
                })
            }
        },

        validateForm(){
            if (!this.isAccountNameCorrect){
                if (!this.validateAccountName()){
                    return false;
                }
            }
            if (!this.validatePassword()){
                return false
            }
            if (!this.validateRealName()){
                return false;
            }
            if (!this.validateBirthdate()){
                return false;
            }
            if (!this.isPhoneCorrect){
                if (!this.validatePhoneNumber()){
                    return false;
                }
            }
            if (!this.isEmailCorrect){
                if (!this.validateEmailAddress()){
                    return false;
                }
            }
            if (!this.validateRequired(this.wechatNo)){
                return false;
            }

            return true;
            // if (!this.isCaptchaCorrect){
            //     if (!this.validateCaptcha()){
            //         return false;
            //     }
            // }
            // Validate Captcha
        },
        register(){
            console.log(this.validateForm());
            if (!this.validateForm()){
                return;
            }            
            else {            
                var that_ = this;
                this.$http.get(  REGISTER_AGENT_CODE )
                .then( function( res ){ 
                    var postData = {
                        Username:"HF"+ that_.userName,
                        Password: that_.passWord,
                        ConfirmPassword: that_.passWord,
                        RealName: that_.realName,
                        Phone: that_.phoneNo,
                        Email:  that_.emailAddress,
                        Captcha: that_.captchaText,
                        Agentcode: res.data,
                        RegApp: '1',
                        BirthDate: that_.birthDate,
                        sex: that_.sex == 1 ? 1 : 0,
                        wechat: that_.passWord.wechatNo
                    };
                    // After Form Validation
                    that_.$http.get( REGISTER , { params: postData } )
                    .then ( function  (result) {
                        if ( result.data.Value ){
                            // Login User
                            var loginData = {
                                grant_type: 'password',
                                username: 'HF'+ this.userName,
                                password: this.passWord
                            };
                            // Login using API:LOGIN 
                            // Route to Homepage
                        }
                        else {
                            that_.notifmessage = '网站维护中，请稍后再试！！';
                        }
                    })
                    .catch( function(error){
                        console.log(error);
                    });
                })
            }
        }
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" >
.registration {
    overflow: hidden;
    position: relative;
    height: auto;
    background: #56001c;
    background: -webkit-linear-gradient(0deg, #56001c, #d2341a);
    background: -o-linear-gradient(0deg, #56001c, #d2341a);
    background: -moz-linear-gradient(0deg, #56001c, #d2341a);
    background: linear-gradient(0deg, #56001c, #d2341a);
    padding-bottom: .5rem;

    .reg-header {
        margin-top:.4rem !important;
        width: 100%;
        height: 0.6rem;
        display: table;
        text-align: center;
        line-height: 0.6rem;
        font-size: 0.4rem;
        margin: 0 auto;
        margin-bottom: 0.8rem;
       
        .cancel {
            font-size: 0.3rem !important;
            color: #fff;
        }

        .header-title  {
            display: table-cell;
            color: #fff !important;
            text-align: center;
            line-height: 0.6rem;
            font-size: 0.4rem;
        }
    }

    .reg-body {
        width: 4.8rem;
        height: auto;
        margin: 0 auto;

        div.reg-input {
            height: 0.7rem;
            width: 4.8rem;
            border-radius: .1rem;
            background: rgba(0, 0, 0, 0.15);
            margin-bottom: 0.25rem;


            &.captcha-control {
                display: "grid";
                
                .input-control {
                    margin-top: 0.3rem;
                }
            }
            span.input-label {
                    width: 1.7rem;
                    height: 0.3rem;
                    display: block;
                    color: #ffc000;
                    padding-top: .13rem;
                    padding-left: .15rem;
                    font-size: .3rem;
            }

            input.input-control {
                width: 60%;
                height: 0.44rem;
                position: relative;
                left: 1.55rem;
                top: -0.18rem;
                border: none;
                font-size: 0.27rem;
                outline: none;
                -webkit-tap-highlight-color: rgba(0,0,0,0);
                background-color: transparent;
                border-left: 1px solid #ffc000;
                padding-left: .2rem;
                color: #fff;
                border-radius: 0 !important;
            }

            div.input-options-control {
                border-left: 1px solid #ffc000;
                position: relative;
                left: 1.54rem;
                top: -0.18rem;
                width: 60%;
                height: .45rem;
                padding-left: .1rem;
                padding-top: .04rem;
                border-radius: 0;
                display: flex;

                .item {
                    margin-right: .3rem;
                    
                    span.radio-circle {
                        background-size: 100%;
                        width: .5rem;
                        height: 0.4rem;
                        border: none;
                        display: inline-block;
                        vertical-align: middle;

                        background-image: url(../../static/img/Login/201.png) !important;
                        background-position-x: 70%;
                        background-position-y: 65%;
                        background-repeat: no-repeat;
                    
                        padding-top: .13rem;
                        padding-left: .15rem;
                        font-size: .3rem;
                    }

                    input[type="radio"].item-control {
                        width: auto;
                        height: auto;
                        -webkit-appearance: radio;
                        -moz-appearance: button;
                        appearance: radio;
                        top: 0;
                        left: 0;
                        position: absolute;
                        visibility: hidden;
                    }

                    label.item-label {
                        color: rgb(196, 180, 178);
                    }

                    &.selected {
                        span.radio-circle {
                            background-image: url(../../static/img/Login/200.png) !important;
                        }

                        label.item-label {
                            color: rgb(255, 192, 0) !important;
                       }
                    }
                }

                
            }

            img.captcha-img {
                margin-top: .2rem;
                margin-left: .03rem;
                width: 28%;
                display: block;
            }
            
            input::-webkit-input-placeholder {
            color: #e65747;
        }   
    }


    div.submit-btn {
            width: 4.5rem;
            height: 0.8rem;
            background: #ef8d00;
            background: -webkit-linear-gradient(0deg, #ef8d00, #ffae00);
            background: -o-linear-gradient(0deg, #ef8d00, #ffae00);
            background: -moz-linear-gradient(0deg, #ef8d00, #ffae00);
            background: linear-gradient(0deg, #ef8d00, #ffae00);
            border-radius: .1rem;
            color: #fff;
            font-size: 0.3rem;
            text-align: center;
            line-height: 0.8rem;
            margin-bottom: 0.4rem;
            margin-top: .7rem;
        }
    }


    .reg-footer {
        text-align: center;
        font-size: 0.2rem;
        margin: 0 auto;
        
        a {
            color: #fd8172;
            font-size: .24rem;
            border-bottom: 1px solid #fd8172;
            padding-bottom: 4px;
        }

        .disabled {
            cursor: not-allowed;
        }
    }
}
</style>
