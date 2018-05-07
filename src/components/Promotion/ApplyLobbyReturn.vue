<template>
    <transition name="promotion-mod">
        <div>
            
            <div class="prom-mask" style=""></div>
            <div class="promotion-modal">
                <div class="modal">
                    <div class="modal-header">
                        <span>领取优惠</span>
                        <div class="dema_kong" @click="closeModal">
                        </div>
                    </div>
                    <div class="modal-body">
                        <div class="offerdetail-btns">
                            <p style="font-weight: 600;color:#bb1515">助您做赢家 奖金祝您发</p>
                            <p>活动内容：</p>
                            <p>1.从活动开始起，当天存款100元或以上且满足以下优惠条件的玩家，即可申请救援优惠，奖金高达5888。</p>
                            <table style="width: 100%;font-size: .2rem;text-align: center;">
                                <tbody>
                                    <tr>
                                        <td style="font-weight: bold;">当日负盈利金额</td>
                                        <td style="font-weight: bold;">申请要求</td>
                                        <td style="font-weight: bold;">救援金获得比例</td>
                                        <td style="font-weight: bold;">救援金上限</td>
                                        <td style="font-weight: bold;">提款要求</td>
                                    </tr>
                                    <tr>
                                        <td>≥100元</td>
                                        <td>余额≤5元</td>
                                        <td>10%</td>
                                        <td>5888</td>
                                        <td>10倍流水</td>
                                    </tr>
                                    <tr>
                                        <td>≥100元</td>
                                        <td>余额≤5元</td>
                                        <td>22%</td>
                                        <td>5888</td>
                                        <td>25倍流水</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>2.申请方式：点击【申请提交】，申请将会在30分钟内审核并派发奖金。</p>
                            <p>3.此优惠奖金需要完成对应流水要求即可出款，仅限投注在老虎机或捕鱼游戏；</p>
                            <p>4.此优惠不与网站首存优惠共享。</p>
                        </div>
                    </div>
                    <div class="modal-bottom">
                        <div style="width: 79%;margin: 0 auto;">
                            <div class="form-row Rescue2to1">
                                <label style="color:#232323;">救援金选项</label>
                                <span class="arrowbox2"></span>
                                <select id="ApplyLobbyReturn" @change="updateAppContent">
                                    <option v-for="(item, index) in applyContents" 
                                            :selected="applicationContent == item ? 'selected' : ''"
                                            :key="index" :value="item" :class="['option', 'option' + (index + 1)]" >{{ item }}</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <input type="submit"  @click="availPromo" class="submission" value="申请提交">
            </div>
                <notification :message="notifmessage" @close="closeNotif"  v-if="notifmessage!=''"></notification>
        </div>
    </transition>
</template>
<script>

import { mapMutations, mapGetters } from 'vuex'
import { PROMO_APPLY_LOBBY } from './../../api'
import Notification from './../Common/Notification'
export default {
    data(){
        return {
            type: 'Rescue2to1',
            applicationContent: '救援金获得比例22%',// '救援金获得比例10',
            applyContents: ["救援金获得比例10%", "救援金获得比例22%"],
            notifmessage: ''
        }
    },
    components: { Notification },
    computed: {
        ...mapGetters ({
            currentUser: 'currentUser'
        })
    },
    methods: {
        closeModal: function(t){
            let that_ = this;
            setTimeout( function (){ 
                that_.$emit('closeModal')
            }, t || 0);
        },
        closeNotif(){
            this.notifmessage = ''
        },
        updateAppContent(src ){
            this.applicationContent = src.target.value;
        },
        // PROCESS
        availPromo(){
            let that_ = this;
            let postData = {
                activeCode : this.type,
                applyContent: this.applicationContent
            }
            let config = {
                headers: {
                    'Authorization': 'Bearer ' + this.currentUser.tokenKey,
                }
            };
            this.$http.post( PROMO_APPLY_LOBBY, JSON.stringify(postData ), config)
            .then( function(res){
                that_.notifmessage =  typeof res.data == 'object' 
                                    ? (res.data.Message)
                                    : (res.data);
                that_.closeModal(2000);
            }).catch( function(error){ });
        }
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.prom-mask{
    width: 100%;
    height: 100%;
    background: rgba(23, 15, 12, 0.9);
    z-index: 150;
    position: fixed;
    top: 0;
}
.promotion-modal{
    z-index: 151;
    position: absolute;
    width: 5.73rem;
    height: 5rem;
    border-radius: .12rem;
    top: 1rem !important;
    left: .34rem;

    .modal-body{
        height: 9.504rem;
        max-height: 4.5rem;
        min-height: 3rem;
        background: #fff;
        overflow: hidden;
        overflow-y: scroll;
        border-radius: 0;

        .offerdetail-btns{
            width: 100%;
            padding: .35rem .3rem;

            p{
                color: #494949;
                line-height: .4rem;
                font-size: .22rem;
            }
            ul li{
                list-style-type: disc;
                font-size: 0.22rem;
                line-height:.33rem;
            }
        }
        table tr td{
            border:1px solid #000;
            padding:.08rem 0;
            line-height:.25rem;
        }
    }

    .modal-header{
        background: #f3552a;
        background: -webkit-linear-gradient(#f3552a, #c11042);
        background: -o-linear-gradient(#f3552a, #c11042);
        background: -moz-linear-gradient(#f3552a, #c11042);
        background: linear-gradient(#f3552a, #c11042);
        color: #fff;
        padding-left: .4rem;
        font-size: 0.29rem;
        line-height: 0.85rem;
        height: .9rem;
        display: block;
        border-radius: 8px 8px 0 0;
        text-align: center;
        border-bottom: 1px solid #dddddd;

        span{
            background-image: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #ffffff), color-stop(100%, #fcc762));
            background-image: -webkit-linear-gradient(#ffffff,#fcc762);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            color: #fff;
            position: relative;
            font-weight: 700;
            letter-spacing: .02rem;
            font-size: .33rem;
        }
    }
    .dema_kong{
        margin-top: .1rem;
        width: .4rem;
        display: block;
        height: .4rem;
        position: relative;
        float: right;
        top: 0.15rem;
        left: -.3rem;

        &:before, &:after{
            top: 0.15rem;
            content: '';
            height: .03rem;
            width: .4rem;
            display: block;
            background: #ffffff;
            border-radius: 10px;
            -webkit-border-radius: 10px;
            -moz-border-radius: 10px;
            position: absolute;
            
            transform: rotate(-45deg);
            -webkit-transform: rotate(-45deg);
            -moz-transform: rotate(-45deg);
            -o-transform: rotate(-45deg);
            -ms-transform: rotate(-45deg);
        }
        &:after{
            background: #fff;
            transform: rotate(45deg);
            -webkit-transform: rotate(45deg);
            -moz-transform: rotate(45deg);
            -o-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
        }
    }

   
    .modal-bottom{
        background: #e0e0e0;
        border-radius: 0 0 .12rem .12rem;
        padding: .25rem 0;
    }
    .submission{
        background: #ff0024;
        background: -webkit-linear-gradient(#ff0024 40%, #dd579f);
        background: -o-linear-gradient(#ff0024 40%, #dd579f);
        background: -moz-linear-gradient(#ff0024 40%, #dd579f);
        background: linear-gradient(#ff0024 35%, #dd579f);
        width: 2.88rem;
        height: .7rem;
        border-radius: .7rem;
        color: #fff;
        margin-top: .3rem;
        margin-left: 1.5rem;
        font-size: .31rem;
        box-shadow: 1px 3px 6px #000;
    }
}


.Rescue2to1{
    label{
        float: left;
        display: inline-block;
        max-width: 100%;
        color: #3d4245;
        font-size: .25rem;
    }
    .arrowbox2{
        padding: .2rem .25rem;
        margin-top: -.05rem;
        right: .04rem;
        background: #ca0626;
        position: absolute;
        top: 24%;
        border-radius: 3px;
    }
    .arrowbox2:before{
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
        top: 62%;
        right: .2rem;
        height: .15rem;
        width: .15rem;

    }
}

#ApplyLobbyReturn{
    width: 2.9rem;
    float: left;
    border-left: 1px solid #000;
    padding-left: .1rem;
    background: none;
    z-index: 2;
    position: relative;
    font-size: .25rem;
    border-radius: 0;
    margin-left: .1rem;
    margin-top: -.06rem;
}
.promotion-modal{
     .modal-body{
        height: 9.504rem;
        max-height: 4.5rem;
        min-height: 3rem;
        background: #fff;
        overflow: hidden;
        overflow-y: scroll;
        border-radius: 0;

        .offerdetail-btns{
            width: 100%;
            padding: .35rem .3rem;

            p{
                color: #494949;
                line-height: .4rem;
                font-size: .22rem;
            }
            ul li{
                list-style-type: disc;
                font-size: 0.22rem;
                line-height:.33rem;
            }
        }
        table tr td{
            border:1px solid #000;
            padding:.08rem 0;
            line-height:.25rem;
        }
    }
    .modal-bottom{
        .form-row{
            background: #fff;
            padding: .16rem .1rem;
            border-radius: .08rem;
            position: relative;
            height: .55rem;

            label{
                display: inline-block;
                max-width: 100%;
                color: #232323;
                font-size: .25rem;
            }
            input{
                border-left: 1px solid #000;
                color: #94002a;
                margin-left: .04rem;
                padding-left: .18rem;
                width: 2.9rem;
                font-size: .3rem;
            }
        }
    }   
}
</style>