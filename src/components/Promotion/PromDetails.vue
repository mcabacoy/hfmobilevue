<template>
<div class="promdetail-wrap">
    <div class="offerdetails-content">
        <img src="../../../static/img/images-app/New-Promo-4.jpg" style="width:100%;">
    </div>

    <div class="offerdetail-btns"
        v-if="promtype = '1'">
        <p style="font-weight: 600;color:#bb1515">活动时间：<br><span style="font-weight:400;color:#bb1515;">北京时间2018年03月26日00:00至2018年04月08日23:59</span></p>
        <p style="margin-top: 27px;font-weight: 600;color:#bb1515">活动内容：</p>
        <p>1.活动期间所有鸿福有效会员均可参加</p>
        <table style="width: 100%;font-size: .2rem;text-align: center;">
            <tbody>
                <tr>
                    <td>每日存款</td>
                    <td>200</td>
                    <td>500</td>
                    <td>1000</td>
                    <td>3000</td>
                </tr>
                <tr>
                    <td>每日提款</td>
                    <td>400 </td>
                    <td>800</td>
                    <td>1500</td>
                    <td>5000</td>
                </tr>
                <tr>
                    <td>每日奖金</td>
                    <td>18</td>
                    <td>38</td>
                    <td>68</td>
                    <td>128</td>
                </tr>
                <tr>
                    <td>奖金倍数</td>
                    <td colspan="4">8倍</td>
                </tr>
                <tr>
                    <td>提款上线</td>
                    <td colspan="4">无上限</td>
                </tr>
            </tbody>
        </table>
        <p style="color:red;">举例说明：玩家A当日累计存款1000提款为5000，次日即可获得存款1000元档奖金68元及提款5000元档奖金128元，以此类推</p>
        <p>2.此优惠无需申请，奖金将在次日16:00前自动派发到中心钱包内。</p>
        <p>3.所有免费奖金进行提款金额不参加提款奖金优惠。</p>
        <p>4.此奖金只需完成8倍流水即可出款，仅限投注在老虎机及捕鱼游戏。</p>
        <p>5.此优惠不予网站首存优惠共享。</p>
        <p style="margin-top: 27px;font-weight: 600;color:#bb1515">规则与条款：</p>
        <p>1.老虎机和捕鱼游戏优惠/促销推广均不包含所有21点游戏，所有轮盘游戏，所有百家乐游戏，所有骰宝游戏，所有视频扑克游戏，所有刮刮乐游戏，所有Pontoon游戏，各种Craps游戏，赌场战争游戏，娱乐场Hold’em游戏，牌九游戏，多旋转老虎机(地妖之穴、海洋公主、三倍利润、热带滚筒和部落生活),疯狂赌徒,北极冒险和老虎机奖金翻倍游戏。</p>
        <p>2.同一帐户/家庭/户籍地址/电邮地址/电话号码/付款帐号（如借记卡/信用卡、AliPay、Neteller 账号等）/ IP地址/共享电脑环境(如学校、公共图书馆或工作场所)，仅限于享有优惠一次。</p>
        <p>4.在某些未知因素超出可控范围的情况下，鸿福保留可单方面执行的决定权，并承诺会在这类紧急问题发生时解释给客户原因并听取客户反馈与客户沟通协商解决。</p>
        <p>5.鸿福保留对本此次活动的修订、终止和最终解释权，超出本网站控制外的技术错误，鸿福将不承担任何责任。</p>
        <p>6.鸿福有权延长、缩短、终止或修改本活动，鸿福拥有本活动的最终解释权。</p>
    </div>
</div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
export default {
    data(){
        return {
            promtype: this.$route.params.promtype
         }
     },
    methods: {
        ...mapMutations (['setCurrentPage']),
    },
    created() {
      this.setCurrentPage('PromDetails');
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.promdetail-wrap{
    margin-top: 1rem;
    height: 100%;
}
.offerdetail-btns{
    width: 100%;
    padding: .35rem .3rem;
    background:#fff;

    p{
        color: #494949;
        line-height: .4rem;
        font-size: .22rem;
    }
    table td{
        border: 1px solid #000;
        padding: .06rem 0;
    }
}
</style>
