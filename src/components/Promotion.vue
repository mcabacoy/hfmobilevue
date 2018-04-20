<template>
<div class="promo-container">

<header class="header">
    <div class="tab-menu">
        <a @click="setTab('promotions')" 
            :class="[ ('promotions'=== this.opentab ? 'active' : '') , 'tab' , 'promotions']" >
            自助优惠
            <span class="infoactive" v-if="opentab == 'promotions'">
                <img src="../../static/img/active-line.png" /></span>
        </a>
        <a  @click="setTab('information')" 
            :class="[ ('information'=== this.opentab ? 'active' : '') , 'tab' , 'information']">
            全部优惠
            <span class="bankactive"  v-if="opentab == 'information'">
                <img src="../../static/img/active-line.png" /></span>
        </a>
    </div>
</header>

<div class="wrapper content-wrapper" id="Promotion">
    <!-- TAB 1 -->
    <div class="promotion tab-content" v-if="opentab == 'promotions'">
        <ul>
            <li>
                <div class="promotion_content">
                    <div class="leftside">
                        <h1>救援金22%</h1>
                        <p>存款≥100元 余额≤5元可使用 投注10-25倍</p>
                    </div>
                    <div class="rightside">
                        <p>高达5888元<br />老虎机/捕鱼</p>
                        <input @click="showModal('modal1')" type="submit" class="btn" value="立即使用"/>
                    </div>
                </div>
            </li>
            <li>
                <div class="promotion_content">
                    <div class="leftside">
                        <h1>千倍百倍</h1>
                        <p>存款≥100元 余额≤5元可使用 投注10-25倍</p>
                    </div>
                    <div class="rightside">
                        <p>高达5888元<br />老虎机/捕鱼</p>
                        <input @click="showModal('modal2')" type="submit" class="btn" value="立即使用"/>
                    </div>
                </div>
            </li>
        </ul>
    </div>

    <!-- TAB 2 -->
    <div class="systeminfo tab-content" v-else-if="opentab == 'information'">
        <ul class="slotMachine">
            <li class="Offer1  ">
                <div class="offer_content">
                    <a href="/OfferDetails?type=12">
                        <img src="../../static/img/promotions/New-Promo-1.png" style="width:100%;" />
                    </a>
                </div>
            </li>
        </ul>
    </div>
</div>

<promotion-modal
    v-if="promotionmode == 'modal1'"
    @closeModal = "closeModal">
        <div slot="body" class="offerdetail-btns">
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
        <div slot="bottom" style="width: 79%;margin: 0 auto;">
            <div class="form-row Rescue2to1">
                <label style="color:#232323;">救援金选项</label>
                <span class="arrowbox2"></span>
                <select id="ApplyLobbyReturn">
                    <option value="救援金获得比例10%" class="option option1">救援金获得比例10%</option>
                    <option value="救援金获得比例22%" class="option option2">救援金获得比例22%</option>
                </select>
            </div>
        </div>
</promotion-modal>

<promotion-modal
    v-else-if="promotionmode == 'modal2'"
    @closeModal = "closeModal">
        <div slot="body" class="offerdetail-btns">
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
        <div slot="bottom" style="width: 79%;margin: 0 auto;">
            <div class="form-row Thousandfold" style="margin-bottom: .1rem;padding: 0.08rem 0.1rem;">
                <label>游戏单号</label>
                <input type="text" class="" id="SingleNumber">
            </div>
            <div class="form-row Thousandfold" style="padding: 0.08rem 0.1rem;">
                <label id="date">游戏时间</label>
                <input type="date" id="datepicker_time">
            </div>
        </div>
</promotion-modal>

</div>
</template>

<script>
import { mapMutations } from 'vuex'
import PromotionModal from './Promotion/PromoModals'
export default {
  name: 'promotion',
  components: { PromotionModal },
  data(){
      return {
          opentab: 'promotions',
          promotionmode: ''
      }
  },
  methods: {
      ...mapMutations ([
            'setCurrentPage'
        ]),
        setTab: function(payload){
           this.opentab =  payload;
        },
        showModal: function(payload){
            this.promotionmode = payload;
        },
        closeModal: function(){
            this.promotionmode = "";
        }
  },
    created() {
      this.setCurrentPage('Promotion');
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    

input[type="submit"], 
input[type="button"], 
input[type="reset"] {
        cursor: pointer;
        border: none;
}
.promo-container {
    margin-top: -0.2rem;
    height: 100%;
    background: #e3e3e3;
}  
.header {
    background: #1b7be9;
    overflow: hidden;
    position: relative;

    .tab-menu
    {
        position: fixed;
        height: .83rem;
        z-index: 5;
        top: 1.1rem;
        background-color: #ededed;
        border:0;
        width: 100%;

        > a {
            color: #818181;
            font-size: .3rem;
            line-height: .76rem;
            float: left;
            text-align: center;
        
        
        }
        
        .information.tab , 
        .promotions.tab {
            width:50% !important;
        }

        .information.tab.active , 
        .promotions.tab.active { 
            color:#ba0a1b;
        }

        .infoactive img {
            width: 21%;
            position: absolute;
            bottom: -3px;
            left: 15%;
        }

        .bankactive img {
            width: 22%;
            position: absolute;
            bottom: -3px;
            right: 13.2%;
        }


    }
} 
#Promotion {
    margin-top: 2.4rem !important;

    .promotion.tab-content {
        margin-top: 2.2rem;
        ul {
            li {
                margin-left: .3rem;
                background: #000;
                background: url(../../static/img/promotions/couponbg.png) no-repeat;
                background-size: 100%;
                width: 5.9rem;
                height: 1.9rem;

                &:first-child {
                    padding-top: 0;
                }

                .promotion_content {
                    
                    .leftside {
                        float: left;
                        width: 3.2rem;
                        text-align: center;
                        padding: .25rem 0 .15rem .3rem;

                        h1 {
                            color: #fff;
                            font-weight: 600;
                            font-size: .48rem;
                            text-shadow: 1px 2px 6px #9512c0;
                        }

                        p {
                            font-size: .22rem;
                            color: #ffc4ed;
                            background: rgba(255, 255, 255, 0.2);
                            padding: .06rem .1rem;
                            margin-top: .13rem;
                            line-height: .3rem;
                        }
                    }

                    .rightside {
                        float: right;
                        width: 1.75rem;
                        margin-right: .25rem;
                        margin-top: .27rem;

                        p {
                            color: #ffc4ed;
                            padding-left: .1rem;
                            font-size: .24rem;
                            line-height: .33rem;
                        }
                        .btn {
                            background: #fff;
                            background: -webkit-linear-gradient(#ffffff, #ffbcd1);
                            background: -o-linear-gradient(#ffffff, #ffbcd1);
                            background: -moz-linear-gradient(#ffffff, #ffbcd1);
                            background: linear-gradient(#ffffff, #ffbcd1);
                            box-shadow: 2px 3px 10px #c50861;
                            color: #fb027c;
                            font-weight: 600;
                            font-size: .26rem;
                            width: 1.5rem;
                            height: .5rem;
                            border-radius: .25rem;
                            margin-top: .08rem;
                        }
                    }
                }
            }
        }
        
    }

    .systeminfo.tab-content {
        display: block;
        li {
            padding: .13rem .1rem 0 .1rem;
            .offer_content img {
                box-shadow: 0px 2px 4px #888888;
                border-radius: 5px;
            }
        }
    }
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
</style>