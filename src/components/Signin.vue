<template>
    <div id="signin">
    <div class="sign-body">
        <div class="signin-foreground"></div>
        <span class="exchange" @click="getRedeemList('redemptiondetails')">兑换明细</span>
        <div class="circle-content">
            <img src="../../static/img/HSignin/signin-pl.png" style="width: 100%; margin-top: 3.9rem;"/>
            <div class="cc">
                <p class="cc-details">我的积分<span style="font-size: .9rem;display: block;margin-top: .24rem;font-weight: 700;" id="AccPoints"> {{ signinStatus.AccPoints  }} </span></p>
                <p style="color: #fff;text-align: center;width: 2rem;font-size: .28rem;position: absolute;top: 3.25rem;left: .4rem;">连续签到 <span style="color:#ffd200;" class="AccCount">{{ signinStatus.AccCount}}</span> 天</p>
            </div>
            <p class="clkcheck" @click="goCheckIn()">点击签到</p>
        </div>


        <!-- Coupon -->
        <div class="circle-body">
            <div class="ss-coupon">
                <div class="leftside">
                    <h1 id="chageMoney">{{ signinStatus.ChageMoney  }}<span class="currency">元</span></h1>
                </div>
                <div class="rightside">
                    <p id="exchange">{{ signinStatus.AccPoints }}积分兑换</p>
                    <span class="redeemimm" @click="goRedeem()">立即兑换</span>
                </div>
            </div>
            <p id="RegistUserSign"  @click="getCheckinDetails('collectionrecord')">积分领取记录</p>
            <p class="sr"  @click="showModal('checkinrules')">签到规则 <span></span></p>
        </div>
    </div>

    <div class="modal-group">
        <detail-modal
            v-if="showModalType == 'redemptiondetails'"
            @closeModal="closeModal" modaltitle="积分兑换记录">
            <table slot="content" class="redemptiondetails">
                <tbody>
                    <tr v-for="(item, index) in redempointrecord" :key="index">
                        <td>{{ item.RedeemTime }}</td>
                        <td>兑换{{ item.Amount }}元</td>
                        <td class="am">- {{ item.Points }}积分</td>
                    </tr>
                </tbody>
            </table>
        </detail-modal>
        <detail-modal
            v-else-if="showModalType == 'collectionrecord'"
            @closeModal="closeModal" modaltitle="积分兑换记录">
            <table slot="content" class="collectionrecord">
                <tbody>
                    <tr v-for="(item, index) in checkindetails" :key="index">
                        <td>
                        {{ item.EffectiveTime }}  连续签到{{ signinStatus.AccCount }} 天 + {{ item.Points }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </detail-modal>
        <detail-modal
            v-else-if="showModalType == 'checkinrules'"
            @closeModal="closeModal" modaltitle="签到规则">
            <div slot="content" class="checkinrules-list">
                <ol>
                <li v-for="(item, index) in checkinrules" :key="index">
                    {{ item  }}
                </li>
                </ol>
            </div>
        </detail-modal>
    
        <div class="signinsuccess-modal" v-if="showModalType == 'signinsuccess'">
            <transition name="modaltrans">
                <div class="signinsuccess" v-if="showModalType == 'signinsuccess' && display">
                    <h1>{{ checkinAmount }}</h1>
                    <p>连续签到 
                        <span class="AccCount">{{ signinStatus.AccCount }}</span> 天</p>
                    <span class="ok" @click="closeCheckinModal">确 定</span>
                </div>
            </transition>
        </div>
    </div>

   

    <notification :message="notifmessage" 
            @close="closeNotif"  
            v-if="notifmessage!=''" />
</div>

</template>

<script>
import {
        GET_USER_SIGNIN_STAT,
        GET_USER_CHECKIN_DETAILS,
        GET_USER_REDEEM_LIST,
        CHECKIN_USER,
        EXCHANGE_SIGNIN_POINTS
    } from './../api'

import Notification from './Common/Notification'
import DetailModal from './Modals/DetailModal'
import { mapGetters, mapMutations } from 'vuex'

var moment = require('moment');
var qs = require("querystring");

export default {
    name: 'signin',
    data(){
        return {
            signinStatus: {
                AccCount: 0,
                AccPoints: 0,
                ChageMoney: 0,
                LastEffectiveTime: '',
                SingStatus: 0,
                UserId: 0
            },
            checkinrules: [
                "签到满7天后会持续每天获得38积分，如中间出现没  有持续签到，则积分重新再10分开始继续计算；",
                "积分兑换方式：提交所需兑换的积分即可；如积分不  足兑换提交金额，为本次提交作废",
                "此奖金只可投注在老虎机或捕鱼游戏，达到奖金所要 求的倍数后方可申请提款。",
                "积分每月1号自动清零，请及时兑换；"
            ],
            checkinAmount: '',
            display: false,
            notifmessage: '',
            showModalType: '',
            checkindetails: [],
            redempointrecord: []
        }
    },
    components: { DetailModal, Notification },
    methods: {
        ...mapMutations ([
            'setCurrentPage'
        ]),
        showModal: function (payload) {
            this.showModalType = payload;
        },
        closeModal: function () {
            this.display = false;
            this.$nextTick(() => {
                setTimeout(()=>{
                    this.showModalType = '';
                }, 300);
            });
        },
        closeCheckinModal: function(){
            this.closeModal();
            this.getUserSignStatus();
        },        
        closeNotif(){
            this.notifmessage = '';
            
        },

        // DATA RETRIEVAL
        getCheckinDetails: function(payload){
            let that_ = this;
            let postData = {
                    startTime: moment(new Date(new Date().getTime() - 604800000)).format('YYYY-MM-DD'),
                    endTime: moment(new Date(new Date().getTime() + 86400000)).format('YYYY-MM-DD')
            };
            let config = {
                headers: {
                    'Authorization': 'Bearer ' + this.currentUser.tokenKey,
                    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
                }
            }
            this.$http.post(GET_USER_CHECKIN_DETAILS , qs.stringify(postData), config)
            .then( function ( res ){ 
                that_.checkindetails = [];
                let data = JSON.parse(res.data);
                if (  data.length > 0 && data != '' && data != null && typeof data != 'undefined' ) {
                    that_.checkindetails = data;
                }
                that_.showModalType = payload;
            });
        },
        getRedeemList(payload) {
            let that_ = this;
            let postData = {
                    startTime: moment(new Date(new Date().getTime() - 604800000)).format('YYYY-MM-DD'),
                    endTime: moment(new Date(new Date().getTime() + 86400000)).format('YYYY-MM-DD')
            };
            let config = {
                headers: {
                    'Authorization': 'Bearer ' + this.currentUser.tokenKey,
                    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
                }
            }
            this.$http.post( GET_USER_REDEEM_LIST, qs.stringify(postData), config)
            .then( function ( res ){ 
                that_.redempointrecord = [];
                let data = JSON.parse(res.data);
                if (  data.length > 0 && data != '' && data != null && typeof data != 'undefined' ) {
                    that_.redempointrecord = data;
                }
                that_.showModalType = payload;
            });
        },
        goCheckIn: function() {
            let that_ = this;
            let config = {
                headers: {
                    'Authorization': 'Bearer ' + this.currentUser.tokenKey,
                    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
                }
            }
            this.$http.get(CHECKIN_USER, config)
            .then( function (res) {
                if ( res.data.amount == 0.0 ) {
                    that_.notifmessage = res.data.msg;
                }
                else {
                    that_.checkinAmount = res.data.amount;
                    that_.showModal('signinsuccess');
                    that_.$nextTick(() => {
                        setTimeout(()=>{
                            that_.display = true;
                        }, 150);
                    });
                }
            });
        },
        getUserSignStatus(){
            let that_ = this;
            let config = {
                headers: {
                    'Authorization': 'Bearer ' + this.currentUser.tokenKey
                }
            }
            this.$http.get( GET_USER_SIGNIN_STAT , config )
            .then( function ( res ){
                    that_.signinStatus = res.data;
            });
        },
        goRedeem: function() {
            let error = '100积分才可兑换额度'
            let config = {
                headers: {
                    'Authorization': 'Bearer ' + this.currentUser.tokenKey
                }
            }
            this.notifmessage = error;
            if ( this.signinStatus.AccPoints >= 100 )
            {
                this.$http.get( EXCHANGE_SIGNIN_POINTS, config )
                .then( function( res ) {
                    this.notifmessage = (res.data.msg);
                });
            }
            else {
                this.notifmessage = ('100积分才可兑换额度');
            }
        }
    },
    computed: {
        ...mapGetters({ 
            currentUser: 'currentUser'
        })
    },
    created() {
        // Get User sigin in status
        this.getUserSignStatus();
        this.setCurrentPage('Signin');
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped >

.modaltrans-enter-active  {
    transition: transform .5s ease-in;
    transform: scale(1);
}
.modaltrans-leave-active
{
    transform: scale(0);
    transition: transform .5s ease-out;
}
.modaltrans-enter  {
    transform: scale(0);
}
.modaltrans-leave  {
   transform: scale(1);
}

.signinsuccess-modal {
            width: 100%;
            height: 100%;
            display: block;
            position: fixed;
            top: 0;
            z-index: 299;
            left: 0;
            background: rgba(43, 35, 33, 0.9);

            .signinsuccess {
                background: url(../../static/img/HSignin/popup-ss.png) no-repeat;
                background-size: 95%;
                background-position-x: .34rem;
                width: 100%;
                height: 7rem;
                position: fixed;
                top: 1rem !important;
                z-index: 300;

                h1 {
                    text-align: center;
                    width: 3.2rem;
                    margin: 0 auto;
                    margin-top: 3rem;
                    color: #fff600;
                    font-size: .88rem;
                    font-weight: 700;
                    line-height: 1.2rem;
                }

                p {
                    text-align: center;
                    width: 2.1rem;
                    height: .5rem;
                    margin: 0 auto;
                    margin-top: .18rem;
                    line-height: .48rem;
                    color: #e96da9;
                    font-size: .28rem;
                    background: rgba(0, 0, 0, 0.15);
                    border-radius: 1rem;

                    span {
                        color: #fff600;
                        font-size: .32rem;
                    }
                }

                .ok {
                    color: #fb027c;
                    position: absolute;
                    top: 6.5rem;
                    left: 1.8rem;
                    background: #fff;
                    background: -webkit-linear-gradient(#fff 50%, #ffbacd);
                    background: -o-linear-gradient(#fff 50%, #ffbacd);
                    background: -moz-linear-gradient(#fff 50%, #ffbacd);
                    background: linear-gradient(#fff 50%, #ffbacd);
                    box-shadow: 0px 3px 4px 0px #000000;
                    width: 2.8rem;
                    height: .67rem;
                    text-align: center;
                    border-radius: 2rem;
                    line-height: .65rem;
                    font-size: .35rem;
                    font-weight: 700;
                }

            }
}


#signin {
    height:100%;
}

table.collectionrecord {
    width: 100% !important;
    text-align: center;
        
    td {
        border-bottom: 1px solid #8e1a4d !important;
        padding: .2rem 0 !important;
        color: white !important;
    }
}

.checkinrules-list {
    
    ol {
        padding: 0.5rem;
        line-height: .4rem;
    
        li {
            list-style: decimal;
            color: white;
        }
    }
    
}

.currency {
    font-size: .35rem;
    margin-left: .15rem;
    vertical-align: middle;
}

body {
        background: #e3e3e3;
        height: 100%;
}

/*Signin*/
#signin{
    background: #A4064A;
    background: -webkit-linear-gradient(-90deg, #A4064A, #79083d 34%, #ea396b);
    background: -o-linear-gradient(-90deg, #A4064A, #79083d 34%, #ea396b);
    background: -moz-linear-gradient(-90deg, #A4064A, #79083d 34%, #ea396b);
    background: linear-gradient(-90deg, #A4064A, #79083d 34%, #ea396b);
}
.sign-body{
    position:relative;
    height: auto;
    padding-bottom: .6rem;
}
.signin-foreground{
    margin-top: 1.1rem;
    height: 5rem;
    background: url(../../static/img/HSignin/signin-bg.jpg) no-repeat;
    background-size: 100%;
    position: absolute;
    width: 100%;
    z-index: 1;
}
.circle-content{
    position: relative;
    z-index: 5;
}
.circle-content .cc{
    position: absolute;
    top: 1.65rem;
    left: 1.8rem;
    background: url(../../static/img/HSignin/signin-circle.png) no-repeat;
    background-size: 100%;
    width: 3rem;
    height: 3.2rem;
}
.circle-content .cc .cc-details{
    text-align: center;
    color: #fff;
    font-size: .25rem;
    text-shadow: 1px 2px 1px #c20044;
    margin-top: .65rem;
    margin-left: -.13rem;
}
.sign-body .exchange{
    position: absolute;
    top: 2.8rem;
    right: .25rem;
    color: #fff;
    z-index: 6;
    border: 1px solid #fff;
    border-radius: 1rem;
    text-align: center;
    width: 1.4rem;
    height: .55rem;
    line-height: .5rem;
    font-size: .24rem;
}
.circle-content .clkcheck{
    background: url(../../static/img/HSignin/signin-btn.png) no-repeat;
    background-size: 100%;
    width: 4.3rem;
    height: 1.2rem;
    margin-left: 1.1rem;
    margin-top: -1.42rem;
    position: relative;
    text-align: center;
    line-height: 1.3rem;
    font-size: .32rem;
    font-weight: 700;
    color: #e72701;
}
.circle-content .clkcheck.disable{
    background: url(../../static/img/HSignin/signin-btn-after.png) no-repeat;
    background-size: 100%;
    color:#935252;
    pointer-events:none;
}
.circle-body{
    padding: 0 .4rem;
}
.circle-body .ss-coupon{
    background: url(../../static/img/HSignin/S-coupon.png) no-repeat;
    background-size: 100%;
    width: 5.6rem;
    height: 2.15rem;
    margin-top: .4rem;
}
.circle-body .ss-coupon .leftside{
    float:left;
    width: 3rem;
    text-align: center;
    margin-top: .57rem;
}
.circle-body .ss-coupon .leftside h1{
    color: #fff;
    font-weight: 700;
    font-size: .8rem;
    text-shadow: 1px 2px 6px #9512c0;
}
.circle-body .ss-coupon .rightside{
    float:right;
    margin-right: .25rem;
    width: 2.2rem;
    text-align: center;
    margin-top: .51rem;
}
.circle-body .ss-coupon .rightside .redeemimm{
    margin-top: .15rem;
    margin-left: .4rem;
    background: #fff;
    border-radius: 1.2rem;
    width: 1.4rem;
    height: .5rem;
    line-height: .5rem;
    display: block;
    color: #fb027c;
    font-weight: 700;
    font-size: .26rem;
    box-shadow: 0px 3px 8px 0px #c50861;
}
.circle-body .ss-table{
    background: rgba(1, 1, 1, 0.21);
    padding: 0 .15rem;
    margin-top: .15rem;
}
.circle-body .ss-table table{
    width: 100%;
}
.circle-body .ss-table table tr{
    border-bottom: 1px solid #da4788;
}
.circle-body .ss-table table .am{
    color:#ffde00;
}
.circle-body .ss-table table tr:last-child{
    border:none;
}
.circle-body .ss-table table td{
    padding: .18rem 0;
    font-size:.26rem;
    color: #fff;
}
.circle-body .sr:before{
    content: "";
    width: .24rem;
    height: .24rem;
    border-right: .03rem solid #fff;
    border-bottom: .03rem solid #fff;
    display: inline-block;
    float: right;
    margin: 0rem .1rem 0 0rem;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(-45deg);
}

.alert{
    background: #fff;
    width: 3.8rem;
    height: 2.1rem;
    position: fixed;
    top: 4rem !important;
    left: 1.2rem;
    z-index: 300;
    border-radius: .05rem;
    text-align: center;
}
.redpop{
    background: url(../../static/img/HSignin/pop.png) no-repeat;
    background-size: 98%;
    background-position-x: .2rem;
    width: 100%;
    height: 8rem;
    position: fixed;
    top: 1rem !important;
    z-index: 300;
}
.redpop h1{
    padding-left: .1rem;
    text-align: center;
    width: 2.8rem;
    margin: 0 auto;
    margin-top: 2.5rem;
    color: #e6190a;
    font-size: .75rem;
    font-weight: 700;
}
.redpop h1 span{
    color: #e6190a;
    font-size: .8rem;
    margin-left: .07rem;
}
.redpop p{
    color: #ffe400;
    width: 3.5rem;
    margin: 0 auto;
    text-align: center;
    padding: 0 .2rem;
    font-size: .3rem;
    margin-top: 1rem;
}
.redpop .popok{
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
.allmask{
    background: rgba(43, 35, 33, 0.9);
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 299;
    top: 0;
}
.compbox{
    width: 6rem;
    height:auto;
    left: .2rem;
    z-index:300;
    top:.8rem;
}
.compbox .modal-header{
    height: .8rem;
    line-height: .8rem;
    background: #f3552a;
    background: -webkit-linear-gradient(#f3552a, #c11042);
    background: -o-linear-gradient(#f3552a, #c11042);
    background: -moz-linear-gradient(#f3552a, #c11042);
    background: linear-gradient(#f3552a, #c11042);
    color:#fff;
}
.compbox .demoSpan2:before, .demoSpan2:after{
    background:#fff;
}
.compbox .modal-body{
    background: #fff;
    padding: .3rem .15rem;
}
.compbox .modal-body ul li{
    float:left;
    font-size: .22rem;
    width: 1.42rem;
    text-align: center;
    background: linear-gradient(0deg, #eeeeef, #ffffff);
    border: 1px solid #cccccc;
    color: #63676f;
    padding: .11rem 0;
}
.compbox .modal-body ul li:first-child{
    border-left: 1px solid #cccccc;
    border-radius: 5px 0 0 5px;
}
.compbox .modal-body ul li:last-child{
    border-radius: 0 5px 5px 0;
}
.compbox .modal-body ul li.active{
    background: linear-gradient(0deg, #d84207, #f8732b);
    color: #fff;
}
.compbox .form-control{
    background: #f2f2f2;
    border: 1px solid #e0e0e0;
    border-radius: .08rem;
    width: 4.2rem;
    margin-top:.1rem;
}
.compbox textarea{
    background: #f2f2f2;
    border: 1px solid #e0e0e0;
    border-radius: .08rem;
    width: 100%;
    padding: .2rem;
    margin-top: .15rem;
    font-size: .24rem;
    resize: none;
}
.compbox .submitissue{
    background: #fc7100;
    color: #fff;
    padding:.2rem 1.2rem;
    border-radius:.5rem;
    margin: 0 auto;
    display: block;
    margin-top: .2rem;
    font-size: .3rem;
}


.rightside p#exchange {
    color: #fff;
    font-size: .26rem;
    letter-spacing: .02rem;
}



#RegistUserSign {
    color:#fff000;
    display: inline-block;
    font-size: .28rem;
}

.sr {
    color:#fff;
    /* display: inline-block; */
    float: right;
    font-size: .26rem;
}

</style>
