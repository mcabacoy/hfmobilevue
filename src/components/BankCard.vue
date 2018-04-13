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
                    <span class="details-val"></span>
                    <div class="border-info"></div>
                </div>
                <div class="info-div">
                    <div class="ico bday-icon"><img src="../../static/img/Userinfo/birthday-ico.png" /></div>
                    <span class="details-label bound">出生日期</span>
                    <span class="details-val" id="bday" ></span>
                    <div class="border-info"></div>
                </div>
                <div class="info-div">
                    <div class="ico register-icon"><img src="../../static/img/Userinfo/register-ico.png" /></div>
                    <span class="details-label">注册日期</span>
                    <span class="details-val" >去绑定</span>
                    <div class="border-info"></div>
                </div>
                <div class="info-div">
                    <div class="ico phone-icon"><img src="../../static/img/Userinfo/phone-ico.png" /></div>
                    <span class="details-label">手机号码</span>
                    <a @click="routePage('UserInfoBind')" class="arrow-right pull-right"></a>
                    <span class="details-val" id="Phone"></span>
                    <div class="border-info"></div>
                </div>
                <div class="info-div">
                    <div class="ico"><img src="../../static/img/Userinfo/message-ico.png" /></div>
                    <span class="details-label">电子邮箱</span>
                    <a  @click="routePage('UserInfoBind')" class="arrow-right pull-right"></a>
                    <span class="details-val" id="Email"></span>
                    <div class="border-info"></div>
                </div>
                <div class="info-div">
                    <div class="ico qq-icon"><img src="../../static/img/Userinfo/QQ-ico.png" /></div>
                    <span class="details-label">QQ号码</span>
                    <span class="details-val" id="QQ" style=""></span>
                    <div class="border-info"></div>
                </div>
                <div class="info-div">
                    <div class="ico wechat-icon"><img src="../../static/img/Userinfo/wechat-ico.png" /></div>
                    <span class="details-label">微信号码</span>
                    <span class="details-val" id="WeChat"></span>
                    <div class="border-info"></div>
                </div>
                <div class="info-div" id="changePwd">
                    <div class="ico passw-icon"><img src="../../static/img/Userinfo/passw_icon.png" /></div>
                    <span class="details-label">更改密码</span>
                    <a  @click="routePage('UserInfoBind')" class="arrow-right pull-right"></a>
                    <span class="details-val"  id="WeChat"></span>
                    <div class="border-info"></div>
                </div>

                <!-- <div class="info-div" style="display:none;">
                    <div class="ico cardinfo-icons"><img src="../../static/img/Userinfo/password-ico.png" /></div>
                    <span class="details-label">手势启动密码</span>
                    <span class="pull-right patternpw"><span>未开启</span><label class="pattpw_toggle switch"><input type="checkbox" class="pattpw_chk"><div class="slider round"></div></label></span>
                    <div class="border-info"></div>
                </div>
                <div class="info-div" style="display:none;">
                    <div class=" ico fingerprint-icons"><img src="/../../static/img/Userinfo/fingerprint-ico.png" /></div>
                    <span class="details-label">指纹启动密码</span>
                    <div class="pull-right fingerpr"><span>已开启</span><label class="fngr_toggle switch"><input type="checkbox" class="fngr_chk"><div class="slider round"></div></label></div>
                </div> -->

            </div>

            <div class="signout" id="logout"><a href="javascript:void(0);">退出登录</a></div>
            <div class="zhtcc" style="display: none;">
                <div class="zhtcc_fu">
                    <div class="zhtcc_fu_za">您确定退出登录?</div>
                    <div class="zhtcc_fu_da">
                        <a class="zhtcc_fu_x1">退出登录</a>
                        <a class="zhtcc_fu_x2">取消</a>
                    </div>
                </div>
            </div>

        </div>
        <div class="bankinfo tab-content" v-else-if="opentab == 'bankinfo'">
            <div class="bankcard">
                <ul id="bank_card">
                    <!--  !IsDefault -->
                    <li>
                        <div class="bankcard_content">
                            <div class="bank_img"><img src="../../static/img/Bank/bank2.png"></div>
                            <div class="bank_details ICBC">
                                <p class="bank-name">{{ bankname }}</p>
                                <p class="bank-num">{{ cardno }}</p>
                                <!-- Available for non-default Bank Card -->
                                <span class="removecard">删除卡片</span>
                                <span class="notdefaultcard">设为默认</span>
                            </div>
                        </div>
                    </li>
                    <!--  IsDefault -->
                    <li>
                        <div class="bankcard_content">
                            <div class="bank_img"><img src="../../static/img/Bank/bank-js.png"></div>
                            <div class="bank_details CIB">
                                <p class="bank-name">{{ bankname }}</p>
                                <p class="bank-num">{{ cardno }}</p>
                                <!-- Available for default Bank Card -->
                                <span class="defaultcard">默认卡片</span>
                                <span class="auto"></span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="footer">
                <div class="container btnadd-card button-container">
                    <button type="submit" 
                            class="btn btn-default btnaddcard" 
                            data-toggle="modal" data-target="#myModalNorm">
                        <img src="../../static/img/plus-icon.png" class="btnplus">
                        添加新银行卡
                    </button>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'bankcard',
  data(){
      return {
          bankname: '中国工商银行',
          cardno: '1234**********5678',
          opentab: 'userinfo'
      }
  },
  methods: {
      ...mapMutations ([
            'setCurrentPage'
        ]),
        setTab: function(payload){
           this.opentab =  payload;
        },
        routePage: function(pageName){
            this.$router.push({ path: pageName });
        }
  },
    created() {
      this.setCurrentPage('BankCard');
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

.flag {
            width: 0 !important;
            height: 0 !important;
            border-bottom: 0.59rem solid transparent !important;
            border-right: 0.66rem solid #fef000  !important;
            position: absolute !important;
            top: 0 !important;
            // right: 0 !important;
            opacity: 0.8 !important;

            span {
                position: absolute !important;
                color: white !important;
                left: 0 !important;
                font-size: .21rem !important;
                top: 0 !important;
                background: none !important;
                text-shadow: 0px 1px 1px black;
                margin-left: 0.35rem;
                margin-top: 0.06rem;
            }

            .star {
                margin: 50px 0;
                position: relative;
                display: block;
                color: #f00;
                width: 0px;
                height: 0px;
                border-right: 50px solid transparent;
                border-bottom: 35px solid #f00;
                border-left: 50px solid transparent;
                -moz-transform: rotate(35deg);
                -webkit-transform: rotate(35deg);
                -ms-transform: rotate(35deg);
                -o-transform: rotate(35deg);

                &:before {
                    border-bottom: 40px solid #f00;
                    border-left: 15px solid transparent;
                    border-right: 15px solid transparent;
                    position: absolute;
                    height: 0;
                    width: 0;
                    top: -30px;
                    left: -35px;
                    display: block;
                    content: '';
                    -webkit-transform: rotate(-35deg);
                    -moz-transform: rotate(-35deg);
                    -ms-transform: rotate(-35deg);
                    -o-transform: rotate(-35deg);
                }
                
                &:after {
                    position: absolute;
                    display: block;
                    color: #f00;
                    top: 3px;
                    left: -105px;
                    width: 0px;
                    height: 0px;
                    border-right: 50px solid transparent;
                    border-bottom: 35px solid #f00;
                    border-left: 50px solid transparent;
                    -webkit-transform: rotate(-70deg);
                    -moz-transform: rotate(-70deg);
                    -ms-transform: rotate(-70deg);
                    -o-transform: rotate(-70deg);
                    content: '';
                }
            }
}

body {
    background: #e2e3e7 !important;
    height: auto;
}

.footer {
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

.header {
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

                        img {
                            width: 86%;
                            padding: 21px 2px 21px 14px;
                        }
                    }

                    .bank_details {

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

                        &.ICBC, 
                        &.ABC,
                        &.CMB, 
                        &.CCB, &.COMM, 
                        &.BOC, &.CEB, 
                        &.CMBC, &.CITIC, &.SZPAB, 
                        &.SPDB, &.CIB, &.POST-NET {
                            width: 72%;
                            height: 100%;
                            margin-left: 28%;
                            border-radius: 0 12px 12px 0;
                            padding: 1px 0 0 16px;
                            color: #fff;
                        }

                        &.CIB, &.CCB, &.SPDB {
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
}

</style>

