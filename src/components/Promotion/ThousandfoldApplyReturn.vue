<template>
    <transition name="promotion-mod">
        <div>
            <notification :message="notifmessage" @close="closeNotif"  v-if="notifmessage!=''"></notification>
            <div class="prom-mask" style=""></div>
            <div class="promotion-modal">
                <div class="modal">
                    <div class="modal-header">
                        <span>领取优惠</span>
                        <div class="dema_kong" @click="closeModal"><span class="demoSpan2"></span></div>
                    </div>
                    <div class="modal-body">
                        <div class="offerdetail-btns">
                            <p style="font-weight: 600;color:#bb1515">千倍百倍 鸿福翻倍 奖金1288</p>
                            <p style="font-weight: 600;color:#bb1515">活动时间：</p>
                            <p style="font-weight: 600;color:#bb1515">北京时间2018年01月01日00:00:00开始</p><br>
                            <p style="font-weight: 600;color:#bb1515">活动内容：</p>
                            <p>1.从活动开始起，凡在 <span style="color:#bb1515">PT老虎机</span>虎机游戏达到以下要求：</p>
                            <ul style="padding-left: .3rem;">
                                <li>单线下注金额不低于1元；（如：四线游戏，每线注为0.25元，此局押注共1元是不计算的，必须每线注为1元，共4元才符合。单线游戏单局投注3元或以上即为有效）</li>
                                <li>单局盈利倍数达100倍及以上；</li>
                                <li>牌局号产生当日存款不低于200元</li>
                            </ul>
                            <p>即可申请千倍百倍优惠奖金，最高1288元：此优惠24小时内每个账户仅可以派发一次。</p>
                            <table style="width: 100%;font-size: .2rem;text-align: center;">
                                <tbody>
                                    <tr>
                                        <td style="font-weight: bold;">下注要求</td>
                                        <td style="font-weight: bold;">单局盈利倍数</td>
                                        <td style="font-weight: bold;">奖金(元)</td>
                                        <td style="font-weight: bold;">当日存款要求</td>
                                        <td style="font-weight: bold;">流水要求</td>
                                    </tr>
                                    <tr>
                                        <td rowspan="3">单线不低于1元,单局不低于3元</td>
                                        <td>100倍</td>
                                        <td>158</td>
                                        <td rowspan="3">≥200</td>
                                        <td rowspan="3">10倍</td>
                                    </tr>
                                    <tr>
                                        <td>500倍</td>
                                        <td>588</td>
                                    </tr>
                                    <tr>
                                        <td>1000倍</td>
                                        <td>1288</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>2.申请方式：【千倍百倍优惠】，提交优惠要求的信息；<span style="color:#bb1515">游戏时间</span>、<span style="color:#bb1515">游戏单号</span>，审核通过后奖金将会在30分钟内派发至账户</p>
                            <p>3.千倍百倍奖金仅限中奖当天申请，且每天仅限领取1次，过期或无法提供有效局号者，视为无效。（每天计算时间00：00-23：59如中奖时间23：59无法在0点前提交申请，鸿福会给予宽限30分钟）</p>
                            <p><span style="color: #bb1515;">例如</span>：会员HFwoyaofa8在12月01日5点 中的单线注额=100倍，那么在12月01日23:59点前都是可以提交申请的，如果此期间成功一笔，23：59前将无法再次派发其他千倍百倍奖金。</p>
                            <p>4.领取免费体验金或红包/转运金等所有其它优惠红利所中的千百倍投注将不适合此优惠申请。</p>
                            <p>5.本优惠奖金需达到10倍的投注额要求方能申请提款。。</p><br>
                            <p>规则与条款：</p>
                            <p>1.老虎机和捕鱼游戏优惠/促销推广均不包含所有21点游戏，所有轮盘游戏，所有百家乐游戏，所有骰宝游戏，所有视频扑克游戏，所有刮刮乐游戏，所有Pontoon游戏，各种Craps游戏，赌场战争游戏，娱乐场Hold’em游戏，牌九游戏，多旋转老虎机(地妖之穴、海洋公主、三倍利润、热带滚筒和部落生活),疯狂赌徒,北极冒险和老虎机奖金翻倍游戏。</p>
                            <p>2.同一帐户/家庭/户籍地址/电邮地址/电话号码/付款帐号（如借记卡/信用卡、AliPay、Neteller 账号等）/ IP地址/共享电脑环境(如学校、公共图书馆或工作场所)，仅限于享有优惠一次。</p>
                            <p>3.在优惠推广期间，鸿福保留权利对会员行为作出严格规定和执行，发现有任何违背、欺骗、或利用规则与条款进行非法获利的会员，鸿福有权终止登陆、暂停使用网站，关闭账号并没收资金等，鸿福的决定将视为最终的裁决。</p>
                            <p>4.在某些未知因素超出可控范围的情况下，鸿福保留可单方面执行的决定权，并承诺会在这类紧急问题发生时解释给客户原因并听取客户反馈与客户沟通协商解决。</p>
                            <p>5.富宝保留对本此次活动的修订、终止和最终解释权，超出本网站控制外的技术错误，富宝将不承担任何责任。</p>
                            <p>6.鸿福有权延长、缩短、终止或修改本活动，鸿福拥有本活</p>
                        </div>
                    </div>
                    <div class="modal-bottom">
                        <div  style="width: 79%;margin: 0 auto;">
                            <div class="form-row Thousandfold" style="margin-bottom: .1rem;padding: 0.08rem 0.1rem;">
                                <label>游戏单号</label>
                                <input type="text" v-model="gameTicketId" class="" id="SingleNumber">
                            </div>
                            <div class="form-row Thousandfold" style="padding: 0.08rem 0.1rem;">
                                <label id="date">游戏时间</label>
                                <input type="date" v-model="gameDateTime" id="datepicker_time">
                            </div>
                        </div>
                    </div>
                </div>
                <input type="submit" @click="availPromo" class="submission" value="申请提交">
            </div>
        </div>
    </transition>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'
import { THOUSANDFOLD_APPLY_LOBBY } from './../../api'
import Notification from './../Common/Notification'
export default {
    data(){
        return {
            type: 'Thousandfold',
            gameTicketId: '',
            gameDateTime: '',
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
        closeModal: function(){
            let that_ = this;
            setTimeout( function (){ 
                that_.$emit('closeModal')
            }, 2000);
        },
        closeNotif(){
            this.notifmessage = '';
        },
        // PROCESS
        availPromo(){
            let that_ = this;
            if (this.gameDateTime == "") {
                this.notifmessage = ('请输入游戏时间');
                return;
            }
            if (this.gameTicketId == "") {
                this.notifmessage = ('请输入游戏单号');
                return;
            }
            let postData = {
                activeCode : this.type,
                gameNo: this.gameTicketId,
                gameTime: this.gameDateTime
            }
            let config = {
                headers: {
                    'Authorization': 'Bearer ' + this.currentUser.tokenKey,
                    'Content-Type': 'application/json',
                    'Data-Type': 'json'
                }
            };
            this.$http.post( THOUSANDFOLD_APPLY_LOBBY, JSON.stringify(postData), config)
            .then( function(res){
                that_.notifmessage = (res.data);
                that_.closeModal();
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
.demoSpan2:before, .demoSpan2:after{
    content: '';
    height: .03rem;
    width: .4rem;
    display: block;
    background: #ffffff;
    border-radius: 10px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    position: absolute;
    top: .31rem;
    left: -.3rem;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
}
.demoSpan2:after{
    background: #fff;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
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