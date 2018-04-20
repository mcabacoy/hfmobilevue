<template>
<div id="rtrv">
    <header class="headerr" style="margin-top:6%;">
        <span class="cancel" @click="goBack()"><a href="#" style="color: #fff;">取消</a></span>
        <span class="titles">找回密码</span>
        <span class="cancel" style="color:transparent">取消</span>
    </header>
    <section class="stepDiv">
        第一步选择找回密码方式
    </section>

    <!--第一步-->
    <section class="messageDiv" id="retrieveOne" v-if="resetLevel == 1" >
        <div class="retUserNameBox">
            <span>用户名</span>
            <input type="text" v-model="accountName" placeholder="请输入用户名" />
        </div>
        <div class="realNameBox">
            <span>真实姓名</span>
            <input type="text" v-model="realName" placeholder="请输入真实姓名" />
        </div>
        <div class="nextBtn" @click="retrievePassword">下一步</div>
    </section>

    <!--第二步-->
    <section class="selectTypeDiv" id="retrieveTwo" v-else-if="resetLevel == 2" >
        <div class="phoneNumBox" id="rc1" @click="selectResetType(1)" >
            <i :class="resetType == 1 ? 'selectTrue' : ''"></i>
            <span :class="resetType == 1 ? 'selectColor' : ''">手机号码重置密码</span>
        </div>
        <div class="emailNumBox" id="rc2" @click="selectResetType(2)" >
            <i :class="resetType == 2 ? 'selectTrue' : ''"></i>
            <span :class="resetType == 2 ? 'selectColor' : ''">电子邮箱重置密码</span>
        </div>
        <div class="nextBtn confirm"  @click="confirmReset">下一步</div>
    </section>

    <notification :message="notifmessage" @close="closeNotif"  v-if="notifmessage!=''"/>
    
</div>


</template>

<script>

import Notification from './Common/Notification'
import { RESET_PASSWORD , FORGOT_PASSWORD } from './../api'
var qs = require("querystring");

export default {
    name: 'RetrievePass',
    components: { Notification },
    data(){
      return {
          accountName: '',
          realName: '',
          notifmessage: '',
          resetLevel: 1,
          resetType: 0,

          resetHeader: ''
      }
    },
    methods: {
        goBack() {
            this.$router.go(-1)
        },
        retrievePassword(){
            this.resetPassword();
        },
        closeNotif(){
            this.notifmessage = ''
        }, 
        selectResetType(type){
            this.resetType = type;
        },

        // PROCESSING
        resetPassword(){
            // Validate controls
            if (this.accountName == "" || this.accountName == null || typeof(this.accountName) == undefined) {
                this.notifmessage = ("请输入用户名");
                return false;
            }

            if (this.realName == "" || this.realName == null || typeof(this.realName) == undefined) {
                this.notifmessage = ("请输入真实姓名");
                return false;
            }

            let postData = {
                AccountName: 'HF'+ this.accountName,
                RealName: this.realName
            };

            let that_ = this;
            this.$http.post(RESET_PASSWORD, qs.stringify(postData))
            .then( function (res){
                if ( res.data != null && res.data != '' && res.data != 'Failed'){
                    that_.resetHeader = res.data;
                    that_.resetLevel = 2;
                    that_.resetType = 1;
                    console.log(that_.resetHeader);
                }
                else {
                    that_.notifmessage = '输入的信息不正确';
                }
            })
            .catch( function(error){
                console.log(error);
                // this.notifmessage = error.responseJSON.Message; 
            });
        },

        confirmReset(){
            let that_ = this;
            let postData = {
                AccountName: that_.accountName,
                RealName: that_.realName,
                NewPassword: that_.resetHeader.EncryptedNewPassword,
                Email: that_.resetHeader.EncryptedEmail,
                Mobile: that_.resetHeader.EncryptedMobile,
                SendMethod: that_.resetType == 1 ? '1':'0'
            };
            this.$http.post( FORGOT_PASSWORD, qs.stringify(postData) )
            .then( function(res) {
                console.log(res);
                that_.notifmessage = (" 新密码已成功发送，请留意查收");
                setTimeout(function(){ 
                    that_.$router.push( { path: '../Login'  });
                }, 1000);
            })
            .catch( function (error) {
                console.log(error);
            });
        }
    }
}
</script>

<style>

    body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
  
        position:relative;
        overflow:hidden;
        height:100%;
        background: #56001c;
        background: -webkit-linear-gradient(0deg, #56001c, #d2341a);
        background: -o-linear-gradient(0deg, #56001c, #d2341a);
        background: -moz-linear-gradient(0deg, #56001c, #d2341a);
        background: linear-gradient(0deg, #56001c, #d2341a);
    }

    .nav{
        display:none;
    }
    .headerr {
        width: 100%;
        height: 0.6rem;
        display: table;
        text-align: center;
        line-height: 0.6rem;
        font-size: 0.4rem;
        margin: 0 auto;
        margin-bottom: 0.38rem;
    }

    .headerr span {
        display: table-cell;
        color:#fff;
    }

    .headerr .cancel {
        font-size: 0.3rem;
    }

    .headerr .titles {
        font-weight: bold;
    }
    .stepDiv {
        height: 0.3rem;
        width: 5rem;
        margin: 0 auto;
        text-align: center;
        font-size: 0.29rem;
        color: #ffc8c2;
        margin-bottom: 0.7rem;
        letter-spacing: .04rem;
    }
    .messageDiv, .selectTypeDiv {
        width: 5rem;
        height: 3.4rem;
        margin: 0 auto;
    }
    .retUserNameBox, .realNameBox {
       height: 0.8rem !important; 
        width: 5rem !important;
        border-radius: .1rem;
        background: rgba(36, 6, 6, 0.3);
        margin-bottom: 0.25rem;
    }

    .phoneNumBox, .emailNumBox {
        height: 0.5rem;
        width: 5rem;
        background-size: 100% 100%;
        margin-bottom: 0.4rem;
    }

    .retUserNameBox span,
     .realNameBox span {
        width: 1.5rem;
        display: block;
        color: #ffc000;
        text-align: center;
        padding-top: .19rem;
        font-size: .3rem;
        letter-spacing: .01rem;
        line-height: 0.4rem;
    }

    .messageDiv input {
        width: 65%;
        height: 0.53rem;
        position: relative;
        left: 1.5rem;
        top: -0.445rem;
        border: none;
        font-size: 0.3rem;
        outline: none;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        background-color: transparent;
        border-left: 1px solid #ffc000;
        padding-left: .3rem;
        color: #fff;
        display: block;
        border-radius:0 !important;
    }
    .messageDiv input::-webkit-input-placeholder {
        color:#e65747
    }

    .nextBtn {
        width: 4.3rem;
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
        margin: 0 auto;
        margin-top: .8rem;
    }

    .selectTypeDiv span {
        font-size: 0.3rem;
        width: 3rem;
        height: 0.3rem;
        position: relative;
        left: 1.4rem;
        top: -.4rem;
        color:#ff6857;
    }

    .selectTypeDiv i {
        width: 1.5rem;
        height: 0.5rem;
        background-image: url(../../static/img/Login/radio_no.png);
        background-size: 40%;
        background-position-x: 88%;
        background-repeat: no-repeat;
        display: block;
    }

    .selectTypeDiv .selectTrue {
        background-image: url(../../static/img/Login/radio.png);
        background-size: 40%;
        background-position-x: 88%;
        background-repeat: no-repeat;
    }

    .selectTypeDiv .selectColor {
        color: #ffc000;
    }
</style>

