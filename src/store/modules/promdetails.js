const state = {
    promotions : [
        {
            id: 1,
            promType: '01',
            promSrc: 'New-Promo-4.jpg',
            promDetails:
                `<p class="red font600" style="">活动时间：<br>
                <span class="red font400">北京时间2018年03月26日00:00至2018年04月08日23:59</span></p>
                <p style="margin-top: .4rem;" class="red font600">活动内容：</p>
                <ol>
                <li>活动期间所有鸿福有效会员均可参加</li>
                <table style="width: 100%;font-size: .2rem;text-align: center;">
                <tr><td>每日存款</td><td>200</td><td>500</td><td>1000</td><td>3000</td></tr>
                <tr><td>每日提款</td><td>400 </td><td>800</td><td>1500</td><td>5000</td></tr>
                <tr><td>每日奖金</td><td>18</td><td>38</td><td>68</td><td>128</td></tr>
                <tr><td>奖金倍数</td><td colspan="4">8倍</td></tr>
                <tr><td>提款上线</td><td colspan="4">无上限</td></tr></table>
                <p class="red">举例说明：玩家A当日累计存款1000提款为5000，次日即可获得存款1000元档奖金68元及提款5000元档奖金128元，以此类推</p>
                <li>此优惠无需申请，奖金将在次日16:00前自动派发到中心钱包内。</li>
                <li>所有免费奖金进行提款金额不参加提款奖金优惠。</li>
                <li>此奖金只需完成8倍流水即可出款，仅限投注在老虎机及捕鱼游戏。</li>
                <li>此优惠不予网站首存优惠共享。</li>
                </ol>
                <p class="red font600" style="margin-top: 27px;">规则与条款：</p>
                <ol>
                <li>老虎机和捕鱼游戏优惠/促销推广均不包含所有21点游戏，所有轮盘游戏，所有百家乐游戏，所有骰宝游戏，所有视频扑克游戏，所有刮刮乐游戏，所有Pontoon游戏，各种Craps游戏，赌场战争游戏，娱乐场Hold’em游戏，牌九游戏，多旋转老虎机(地妖之穴、海洋公主、三倍利润、热带滚筒和部落生活),疯狂赌徒,北极冒险和老虎机奖金翻倍游戏。</li>
                <li>同一帐户/家庭/户籍地址/电邮地址/电话号码/付款帐号（如借记卡/信用卡、AliPay、Neteller 账号等）/ IP地址/共享电脑环境(如学校、公共图书馆或工作场所)，仅限于享有优惠一次。</li>
                <li>在某些未知因素超出可控范围的情况下，鸿福保留可单方面执行的决定权，并承诺会在这类紧急问题发生时解释给客户原因并听取客户反馈与客户沟通协商解决。</li>
                <li>鸿福保留对本此次活动的修订、终止和最终解释权，超出本网站控制外的技术错误，鸿福将不承担任何责任。</li>
                <li>鸿福有权延长、缩短、终止或修改本活动，鸿福拥有本活动的最终解释权。</p>
                </ol>`
        },
        {
            id: 2,
            promType: '02',
            promSrc: 'New-Promo-10.jpg',
            promDetails:
                `<p class="font600 red">活动时间：<br>
                <span class="font400 red"> 北京时间2018年03月15日00:00:00开始</span></p>
                <p style="margin-top: .4rem;" class="font600 red">活动内容：</p>
                <ol>
                <li>从活动开始起，网站所有会员均可在线投诉。投诉事项包含（网站体验，在线客服，财务出入款等系列问题）感觉不满均可在网站邮件投诉箱点击描述详情，经公司核实后如属实，则会派发有奖投诉奖金。</li>
                <li>有奖投诉反馈会在24小时之内给予站内信发送审核结果。</li>
                <li>有奖投诉奖金为8-588不等，会根据投诉问题获得相应奖金。</li>
                <li>有奖投诉奖金1倍流水即可出款，提款无上限。</li>
                </ol>`
        },
        {
            id: 3,
            promType: '03',
            promSrc: 'New-Promo-11.jpg',
            promDetails:
                `<p class="red font600" style="">活动时间：<br>
                <span class="red font400">北京时间2018年01月01日00:00:00开始</span></p>
                <p style="margin-top: .4rem;" class="red font600">活动内容：</p>
                <ol>
                <li>此优惠所有鸿福有效会员均可参加，每天累积存款达到以下有效存款标准，即可获得相应档次奖金，最高奖金588元，每位会员每天仅限领取其中一个档次的奖金。</li>
                <table style="width: 100%;font-size: .2rem;text-align: center;">
                        <tr>
                            <td>当日有效存款</td>
                            <td>赠送奖金</td>
                            <td>投注倍数</td>
                        </tr>
                        <tr>
                            <td>累计存款≥1000</td>
                            <td>38元</td>
                            <td>8倍</td>
                        </tr>
                        <tr>
                            <td>累计存款≥3000</td>
                            <td>88元</td>
                            <td>8倍</td>
                        </tr>
                        <tr>
                            <td>累计存款≥5000</td>
                            <td>128元</td>
                            <td>8倍</td>
                        </tr>
                        <tr>
                            <td>累计存款≥10000</td>
                            <td>588元</td>
                            <td>3倍</td>
                        </tr>
                </table>
                <p class="red font600">举例说明：会员当日累计存款5000元，次日即可获得128元免费奖金，以此类推；</p>
                <li>此优惠无需申请，奖金将会在次日中午12点由系统计算并自动派发到会员主钱包。</li>
                <li>此优惠奖金只需完成8倍流水即可出款，提款无上限；</li>
                <li>此优惠有效存款定义是指没有申请其他任何存送优惠的存款，每位会员每天仅限申请其中一个档次的奖金。</li>
                </ol>
                <p class="red font600" style="margin-top: 27px;">规则与条款：</p>
                <ol>
                <li>老虎机和捕鱼游戏优惠/促销推广均不包含所有21点游戏，所有轮盘游戏，所有百家乐游戏，所有骰宝游戏，所有视频扑克游戏，所有刮刮乐游戏，所有Pontoon游戏，各种Craps游戏，赌场战争游戏，娱乐场Hold’em游戏，牌九游戏，多旋转老虎机(地妖之穴、海洋公主、三倍利润、热带滚筒和部落生活),疯狂赌徒,北极冒险和老虎机奖金翻倍游戏。</li>
                <li>同一帐户/家庭/户籍地址/电邮地址/电话号码/付款帐号（如借记卡/信用卡、AliPay、Neteller 账号等）/ IP地址/共享电脑环境(如学校、公共图书馆或工作场所)，仅限于享有优惠一次。</li>
                <li>在某些未知因素超出可控范围的情况下，鸿福保留可单方面执行的决定权，并承诺会在这类紧急问题发生时解释给客户原因并听取客户反馈与客户沟通协商解决。</li>
                <li>鸿福保留对本此次活动的修订、终止和最终解释权，超出本网站控制外的技术错误，鸿福将不承担任何责任。</li>
                <li>鸿福有权延长、缩短、终止或修改本活动，鸿福拥有本活动的最终解释权</p>
                </ol>`
        }
    ]
}
const getters = {
    getPromotionList (state) {
        return payload => state.promotions
    },
    getPromotionDetail (state, payload) {
        return payload => state.promotions.find( function( e ){
            return e.promType === payload;
        });
    }
}
export default {
    state,
    getters
}