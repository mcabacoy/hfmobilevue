<template>
  <div class="bankcard" id="Bankcard">
    <header class="header">
        <div class="tab-menu">
            <a  @click="setTab('userinfo')"
                :class="[ ('userinfo'=== this.opentab ? 'active' : '') , 'tab' , 'userinfo']" >个人信息
                <span class="infoactive">
                    <img src="../../static/img/active-line1.png" />
                </span>
            </a>
            <a  @click="setTab('bankinfo')" 
                :class="[ ('bankinfo'=== this.opentab ? 'active' : '') , 'tab' , 'bankinfo']">银行卡
                <span class="bankactive" >
                    <img src="../../static/img/active-line1.png" />
                </span>
            </a>
        </div>
    </header>

    <!--Personal Info-->
    <div class="wrapper content-wrapper" id="UserInfo">
        <div class="userinfo tab-content" v-if="opentab == 'userinfo'">
            <div class="user-information">
                <div class="info-div">
                    <div class="ico actual-name-icons"><img src="../../static/img/Userinfo/userinfo.png"/></div>
                    <span class="details-label">真实姓名</span>
                    <span class="details-val">{{ AccountDetails.RealName + '**' }}</span>
                    <div class="border-info"></div>
                </div>
                <div class="info-div">
                    <div class="ico bday-icon"><img src="../../static/img/Userinfo/birthday-ico.png" /></div>
                    <span class="details-label bound">出生日期</span>
                    <span class="details-val" id="bday" >{{ AccountDetails.BirthDate }}</span>
                    <div class="border-info"></div>
                </div>
                <div class="info-div">
                    <div class="ico register-icon"><img src="../../static/img/Userinfo/register-ico.png" /></div>
                    <span class="details-label">注册日期</span>
                    <span class="details-val" >{{ AccountDetails.RegisterTime }}</span>
                    <div class="border-info"></div>
                </div>
                <div class="info-div">
                    <div class="ico phone-icon"><img src="../../static/img/Userinfo/phone-ico.png" /></div>
                    <span class="details-label">手机号码</span>
                    <a @click="routePage('UserInfoBind', 'phone')" class="arrow-right" v-show="AccountDetails.IsPhoneBound"></a>
                    <span class="details-val" id="Phone">{{ checkBinding(AccountDetails.Mobile) }}</span>
                    <div class="border-info"></div>
                </div>
                <div class="info-div">
                    <div class="ico"><img src="../../static/img/Userinfo/message-ico.png" /></div>
                    <span class="details-label">电子邮箱</span>
                    <a  @click="routePage('UserInfoBind', 'email')" class="arrow-right" v-if="AccountDetails.IsEmailBound"></a>
                    <span class="details-val" id="Email">{{ checkBinding(AccountDetails.Email) }}</span>
                    <div class="border-info"></div>
                </div>
                <div class="info-div">
                    <div class="ico qq-icon"><img src="../../static/img/Userinfo/QQ-ico.png" /></div>
                    <span class="details-label">QQ号码</span>
                    <a  @click="routePage('UserInfoBind', 'qq')" class="arrow-right" v-if="AccountDetails.QQ != null || AccountDetails.QQ != ''"></a>
                    <span class="details-val" id="QQ">{{ checkBinding(AccountDetails.QQ) }}</span>
                    <div class="border-info"></div>
                </div>
                <div class="info-div">
                    <div class="ico wechat-icon"><img src="../../static/img/Userinfo/wechat-ico.png" /></div>
                    <span class="details-label">微信号码</span>
                    <a  @click="routePage('UserInfoBind', 'wechat')" class="arrow-right" v-if="AccountDetails.Wechat != null || AccountDetails.Wechat != ''"></a>
                    <span class="details-val" id="WeChat">{{ (AccountDetails.Wechat) }}</span>
                    <div class="border-info"></div>
                </div>
                <div class="info-div" id="changePwd">
                    <div class="ico passw-icon"><img src="../../static/img/Userinfo/passw_icon.png" /></div>
                    <span class="details-label">更改密码</span>
                    <a  @click="routePage('UserInfoBind', 'password')" class="arrow-right"></a>
                    <span class="details-val"></span>
                    <div class="border-info"></div>
                </div>
            </div>

            <div @click="showSignoutMenu(true)" class="signout" id="logout"><a>退出登录</a></div>
            <signout-menu  @closeMenu="showSignoutMenu(false)"  v-show="displaySignout"></signout-menu>           
        </div>
        <div class="bankinfo tab-content" v-else-if="opentab == 'bankinfo'">
            <div class="bankcard">
                <ul id="bank_card">
                    <!--  !IsDefault -->
                    <li v-for="(item, index) in getCardList" :key="index">
                        <div :class="['bankcard_content', item.BankCode]">
                            <div class="bank_img">
                                <div class="bank-logo"></div>
                            </div>
                            <div class="bank_details">
                                <p class="bank-name">{{ item.BankName }}</p>
                                <p class="bank-num">{{ item.CardNo }}</p>

                                <!-- Available for non-default Bank Card -->
                                <span class="removecard"  @click="displayModalYesNo(item.BankCode)" 
                                        v-show="!(item.IsDefault)">删除卡片</span>
                                <span class="notdefaultcard" @click="setDefaultCard(item)"
                                        v-show="!(item.IsDefault)">设为默认</span>

                                 <!-- Available for default Bank Card -->
                                <span class="defaultcard" v-show="(item.IsDefault)">默认卡片</span>
                                <span class="auto" v-show="( item.IsDefault)"></span>
                            </div>
                        </div>
                        <yes-no-modal v-if="showModalYesNo"
                                     @clickYes="deleteUserBank"
                                     @clickNo="closeYesNoModal"
                                     :item="item"></yes-no-modal>
                    </li>
                </ul>
            </div>
            <div class="footer">
                <div class="container btnadd-card button-container">
                    <button @click="showConnectBankCard()"
                            class="btn btn-default btnaddcard">
                        <img src="../../static/img/plus-icon.png" class="btnplus">
                        添加新银行卡
                    </button>
                </div>
            </div>
            <connect-bank-card  :cardowner="AccountDetails.RealName"  @refresh="refreshBankCards" v-if="displayConnectBankCard" @closeModal="closeBankCard()" ></connect-bank-card>
            
        </div>
    </div>

    <notification :message="notifmessage" @close="closeNotif"  v-if="notifmessage!=''"></notification>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import SignoutMenu from './Common/SignoutMenu'
import ConnectBankCard from './Modals/ConnectBankCardModal'
import YesNoModal from './Modals/YesNoModal'
import Notification from './Common/Notification'
import  {   USERINFO, 
            GET_ALL_BANK_CARDS,
            SET_DEFAULT_BANK_CARD,
            DELETE_BANK_CARD,
            GET_USER_BANK_INFO
        } from './../api'
var qs = require("querystring");

export default {
    components: { SignoutMenu , ConnectBankCard, Notification, YesNoModal },
    props: ['targettab'],
    data(){
      return {
        AccountDetails: '',
        displayConnectBankCard: false,
        displaySignout: false,
        defaultbank: '',
        opentab: this.$route.params.targettab ? this.$route.params.targettab : 'userinfo',
        banklist: [],
        notifmessage: '',
        showModalYesNo: false
      }
    },
    computed: {
        ...mapGetters({ 
            currentUser: 'currentUser',
            getBankAccount: 'getBankTypeByName'
        }),
        getCardList(){
            return this.banklist.sort( function(e){
                return !e.IsDefault;
            });
        }
    },
    methods: {
        ...mapMutations ([
            'setCurrentPage',
            'storeUserInfoSession',
            'clearSessions',
        ]),
        setTab: function(payload){
           this.opentab =  payload;
        },
        routePage: function(pageName, bindType){
            this.$router.push({ path: '../' + pageName + '/' + bindType });
        },
        showSignoutMenu: function (mode){
            this.displaySignout = mode;
        },
        showConnectBankCard: function (){
            this.displayConnectBankCard = true;
        },
        closeBankCard: function (){
            this.displayConnectBankCard = false;
        },
        closeNotif(){
            this.notifmessage = ''
        },
        getBankName(payload){
            let item_ = this.getBankAccount(payload);
            return '';
        },
        closeYesNoModal(){
            this.showModalYesNo = false;
        },

        // PROCESS
        // USER INFO ***************************
        checkBinding( payload ){
            return ( payload != null && payload != '' && typeof payload == 'undefined' )
                    ? 'payload' : '去绑定';
        },
        setAccountDetails() {
            this.AccountDetails = qs.parse(this.currentUser.userInfo);
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
             this.AccountDetails = qs.parse(session_.userInfo);
            if ( this.AccountDetails == null && this.AccountDetails.AccountName ) {
                this.setAccountDetails();
            }
            else {
                this.requestAccountInfo( this.currentUser.tokenKey );
            }
        },

        // BANK CARDS ***************************
        refreshBankCards(){
            this.getUserBankInfo();
        },       
        displayModalYesNo( ){
            this.showModalYesNo = true;
        },
        deleteUserBank(payload){
            this.closeYesNoModal();
            let that_ = this;
            let config = { headers: { 'Authorization': 'Bearer ' + this.currentUser.tokenKey } };
            let postData = payload;
            this.$http.post( DELETE_BANK_CARD, postData,  config )
            .then( function(res){
                that_.refreshBankCards();
            })
            .catch( function(error){});
        },
        setDefaultCard(payload){
            this.closeYesNoModal();
            let that_ = this;
            let config = { headers: { 'Authorization': 'Bearer ' + this.currentUser.tokenKey } };
            let postData = payload;
            this.$http.post( SET_DEFAULT_BANK_CARD, postData,  config )
            .then( function(res){
                that_.refreshBankCards();
            })
            .catch( function(error){});
        },
        getUserBankInfo(){
            let that_ = this;
            let config = { headers: { 'Authorization': 'Bearer ' + this.currentUser.tokenKey } };
            this.$http.get( GET_USER_BANK_INFO,  config )
            .then( function(res){
                if ( res.data == 'Failed' ){
                     that_.notifmessage = ("您的账户在别的地方登陆，请重新登陆！");
                     that_.clearSessions();
                     that_.$nextTick(() => {
                        setTimeout(()=>{
                            that_.$router.push({path: '../Login' });
                        }, 1100);
                    });
                }
                else {
                    that_.banklist = res.data;
                }
            })
            .catch( function(error){});
        }
    },
    created() {
        this.populateUserInfo();
        this.getUserBankInfo();
        this.setCurrentPage('BankCard');
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">




body {
    background: #e2e3e7 !important;
    height: auto;
}

.bankinfo { 
    > .footer {
        
        margin-top: .23rem;

        .button-container {
            padding-right: .32rem;
            padding-left: .32rem;
            width: 100%;
        }

        .btnadd-card {
            background: #e2e3e7;
            padding-bottom: .2rem;
            padding-top: .2rem;
            position: fixed;
            bottom: 0;
            text-align: center;
        }

        .btnplus {
            width: 5%;
            position: relative;
            top: .07rem;
        }

        .btn {
            display: inline-block;
            margin-bottom: 0;
            font-size: .3rem;
            font-weight: 400;
            line-height: 1.42857143;
            text-align: center;
            white-space: nowrap;
            vertical-align: middle;
            -ms-touch-action: manipulation;
            touch-action: manipulation;
            cursor: pointer;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            background-image: none;
            border: 1px solid transparent;
            border-radius: 4px;
            cursor: pointer;
        }

        .btnaddcard {
            background: #ca0626;
            border-radius: 1rem !important;
            width: 90%;
            font-size: .3rem !Important;
            color: #ffffff;
            height: .77rem;
        }

    }
}

.bankcard > .header {
    position: fixed;
    top: 0;
    z-index: 100;

    .tab-menu {
        background: #f4f4f4;
        position: fixed;
        height: .83rem;
        top: 1rem;
        border-bottom: 1px solid #f3f3f3;
        width: 100%;

        a {
            width: 50%;
            color: #900e36;
     
            font-size: .3rem;
            line-height: .9rem;
            float: left;
            text-align: center;

            color: #818181;
            font-size: .3rem;
            line-height: .9rem;
            float: left;
            text-align: center;

            .infoactive img {
                width: 21%;
                position: absolute;
                bottom: -3px;
                left: 15%;
                display:none;
            }

            .bankactive img {
                width: 22%;
                position: absolute;
                bottom: -3px;
                right: 13.2%;
                display:none;
            }
        }
        
        a.active {
            color: rgb(144, 14, 54);

            img {
                display: inline;
            }
        }
    }
}

#Bankcard {
    overflow: hidden;
}

#UserInfo {
    margin-top: 1.73rem;
    
    .userinfo.tab-content {
        padding-top: .1rem;
        background: #ffffff;
        padding-left: 0;
        padding-right: 0;
        width: 100%;
        border-bottom: 1px solid #f3f3f3;

        .user-information {
            .info-div {
                height: .88rem;
                line-height: 1rem;
                position: relative;

                .actual-name-icons {
                    background-size: 100%;
                    background-position: 0px 0px;
                }

                .ico img {
                    width: 8.7%;
                    float: left;
                    vertical-align: text-top;
                    display: block;
                    position: absolute;
                    top: 50%;
                    margin-top: -.23rem;
                    left: .2rem;
                }
 
                .details-label {
                    margin-left: 1.1rem;
                    font-size: .24rem;
                    color: #818181;
                }

                .details-val {
                    font-size: .25rem;
                    margin-left: .25rem;
                    color: #232323;
                }

                .details-value {
                    color: #797979;
                    font-size: .25rem;
                    margin-left: .25rem;
                    color: #232323;
                }

                .border-info {
                    border-bottom: 1px solid #e6e6e6;
                    position: relative;
                    right: -1.1rem;
                    margin-top: -1.1%;
                }

                .wechat-icon,
                .passw-icon {
                    .details-val {
                        margin-left:.21rem;
                    }
                }

                .qq-icon {
                    .details-val {
                        color: #20a3eb;
                        margin-left:.32rem;
                    }
                }

                .phone-icon {
                    .details-val {
                        color: #20a3eb;
                    }
                }

                .register-icon {
                    .details-val {
                        margin-left: .26rem;
                    }
                }

                .bday-icon {
                    .details-val {
                        margin-left: .22rem;
                    }
                }

                .arrow-right {
                    color: #232323;
                    font-size: .25rem;
                    margin-right: 0;
                    float: right;

                    &:before {
                        content: "";
                        width: .2rem;
                        height: .2rem;
                        border-right: .05rem solid #c1c1c1;
                        border-top: .05rem solid #c1c1c1;
                        display: block;
                        float: left;
                        margin: .43rem 0.35rem 0 .1rem;
                        -webkit-transform: rotate(45deg);
                        -moz-transform: rotate(45deg);
                        -ms-transform: rotate(45deg);
                        -o-transform: rotate(45deg);
                        transform: rotate(45deg);
                    }
                }
            }
        }

        .signout {
            background: #fff;
            width: 100%;
            padding: 17px 0;
            text-align: center;
            margin-top: .15rem;
            position: absolute;

            a {
                font-size: .3rem;
                color: #766c68;
            }

        }
    }

    .bankinfo.tab-content {
        padding: 0 0px;
        margin: 0;
        
        .bankcard {
            margin-top: 2rem;
            padding-bottom: 1.3rem;

            ul li:first-child {
                padding-top: 0;
            }

            ul li {
                padding-left: .1rem;
                padding-right: .1rem;
                padding-top: .13rem;
                -webkit-transition: all 0.5s ease-out;
                -moz-transition: all 0.5s ease-out;
                -o-transition: all 0.5s ease-out;
                transition: all 0.5s ease-out;

                .bankcard_content {
                    position: relative;
                    overflow: hidden;
                    height: 2.1rem;
                    border-radius: 12px;
                    box-shadow: 0 4px 4px -2px rgba(64, 64, 64, 0.38);
                    -moz-box-shadow: 0 4px 4px -2px rgba(64, 64, 64, 0.38);
                    -webkit-box-shadow: 0 4px 4px -2px rgba(64, 64, 64, 0.38);
                    -webkit-transition: all 0.5s ease-out;
                    -moz-transition: all 0.5s ease-out;
                    -o-transition: all 0.5s ease-out;
                    transition: all 0.5s ease-out;

                    .bank_img {
                        background: #fff;
                        height: 100%;
                        float: left;
                        width: 28%;
                        border-radius: 12px 0 0 12px;
                        display: grid;
                        img {
                            width: 86%;
                            padding: 21px 2px 21px 14px;
                        }

                        .bank-logo {
                            height: 75%;
                            width: 75%;
                            margin: auto auto;                                                        
                            
                            background-size: contain !important;
                            background-repeat: no-repeat !important;
                        }
                    }

                    .bank_details {
                        width: 72%;
                        height: 100%;
                        margin-left: 28%;
                        border-radius: 0 12px 12px 0;
                        padding: 1px 0 0 16px;
                        color: #fff;

                        .bank-name {
                            font-size: 0.3rem;
                            padding-top: 0.2rem;
                        }    

                        .bank-num {
                            font-size: 0.34rem;
                            padding-top: 0.1rem;
                        }

                        .removecard, .notdefaultcard, .defaultcard {
                            float: right;
                            margin-top: 8px;
                            background: rgba(255, 255, 255, 0.21);
                            padding: 5px 11px;
                            border-radius: 0 6px 6px 0;
                            font-size: 12px;
                            margin-right: 9px;
                        }
                        
                        .defaultcard {
                            border-radius: 6px !important;
                        }

                        .notdefaultcard {
                            margin-right: 1px !important;
                            border-radius: 6px 0 0 6px !important;
                        }

                        .auto {
                            width: 42px;
                            height: 69px;
                            display: block;
                            position: absolute;
                            top: 0;
                            right: 0;
                            background: url(../../static/img/auto.png) no-repeat;
                            background-size: 101%;
                        }
                    }


                    &.ICBC .bank-logo {
                        background: url(../../static/img/Bank/bank2.png);
                    } 
                    &.ABC .bank-logo {
                        background: url(../../static/img/Bank/bank-ny.png);
                    } 
                    &.CMB .bank-logo {
                        background: url(../../static/img/Bank/bank-zs.png);
                    } 
                    &.CCB .bank-logo {
                        background: url(../../static/img/Bank/bank-js.png);
                    } 
                    &.COMM .bank-logo {
                        background: url(../../static/img/Bank/bank-jt.png);
                    } 
                    &.BOC .bank-logo {
                        background: url(../../static/img/Bank/bank-zg.png);
                    } 
                    &.CEB .bank-logo {
                        background: url(../../static/img/Bank/bank-lg.png);
                    } 

                    &.CMBC .bank-logo {
                        background: url(../../static/img/Bank/bank-ms.png);
                    }

                    &.CITIC .bank-logo {
                        background: url(../../static/img/Bank/bank-zx.png);
                    }
                    &.SZPAB .bank-logo {
                        background: url(../../static/img/Bank/bank-pa.png);
                    }
                    &.SPDB .bank-logo {
                        background: url(../../static/img/Bank/bank-pd.png);
                    }
                    &.CIB .bank-logo {
                        background: url(../../static/img/Bank/bank-xy.png);
                    }
                    &.POST-NET .bank-logo {
                        background: url(../../static/img/Bank/bank-uz.png);
                    }





                    &.ICBC,
                    &.CMB, 
                    &.CITIC,
                    &.BOC {
                        background: #c32b2b;
                        background: -webkit-linear-gradient(left, #c32b2b , #ec5bb0);
                        background: -o-linear-gradient(right, #c32b2b, #ec5bb0);
                        background: -moz-linear-gradient(right, #c32b2b, #ec5bb0);
                        background: linear-gradient(to right, #c32b2b, #ec5bb0);
                    }

                    &.CIB, 
                    &.CCB, 
                    &.SPDB {
                            background: #284cc3;
                            background: -webkit-linear-gradient(left, #284cc3 , #4591e6);
                            background: -o-linear-gradient(right, #284cc3, #4591e6);
                            background: -moz-linear-gradient(right, #284cc3, #4591e6);
                            background: linear-gradient(to right, #284cc3, #4591e6);
                    }
                    
                    &.ICBC, &.CMB, &.CITIC, &.BOC{
                        background: #c32b2b;
                        background: -webkit-linear-gradient(left, #c32b2b , #ec5bb0);
                        background: -o-linear-gradient(right, #c32b2b, #ec5bb0);
                        background: -moz-linear-gradient(right, #c32b2b, #ec5bb0);
                        background: linear-gradient(to right, #c32b2b, #ec5bb0);
                    }
                    &.COMM{
                        background: #3e60cf;
                        background: -webkit-linear-gradient(left, #3e60cf , #5192ec);
                        background: -o-linear-gradient(right, #3e60cf, #5192ec);
                        background: -moz-linear-gradient(right, #3e60cf, #5192ec);
                        background: linear-gradient(to right, #3e60cf, #5192ec);
                    }
                    &.CEB{
                        background: #e17710;
                        background: -webkit-linear-gradient(left, #e17710 , #ffa31f);
                        background: -o-linear-gradient(right, #e17710, #ffa31f);
                        background: -moz-linear-gradient(right, #e17710, #ffa31f);
                        background: linear-gradient(to right, #e17710, #ffa31f);
                    }
                    &.CMBC, &.POST-NET, &.ABC{
                        background: #0f974c;
                        background: -webkit-linear-gradient(left, #0f974c , #7bc334);
                        background: -o-linear-gradient(right, #0f974c, #7bc334);
                        background: -moz-linear-gradient(right, #0f974c, #7bc334);
                        background: linear-gradient(to right, #0f974c, #7bc334);
                    }
                    &.SZPAB{
                        background: #de7004;
                        background: -webkit-linear-gradient(left, #de7004 , #ffa31f);
                        background: -o-linear-gradient(right, #de7004, #ffa31f);
                        background: -moz-linear-gradient(right, #de7004, #ffa31f);
                        background: linear-gradient(to right, #de7004, #ffa31f);
                    }
                    &.CIB, &.CCB, &.SPDB{
                        background: #284cc3;
                        background: -webkit-linear-gradient(left, #284cc3 , #4591e6);
                        background: -o-linear-gradient(right, #284cc3, #4591e6);
                        background: -moz-linear-gradient(right, #284cc3, #4591e6);
                        background: linear-gradient(to right, #284cc3, #4591e6);
                    }



                }
            }
        }

    }
}

</style>

