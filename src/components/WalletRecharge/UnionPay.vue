<template>
<div id="Pay">
    <!--Unionpay-->
    <section id="UnionPay">
        <div class="unionpay_content">
            <div class="union-content top">
                <span style="width:37%;"><img src="../../../static/img/unionpay_icon.png" style="width:100%;" id="BankCard-img"></span>
                <span><img src="../../../static/img/rightarrow.png" style="width:100%;"></span>
                <span style="width:37%;float:left;"><img src="../../../static/img/unionpay_icon.png" style="width:100%;"></span>
            </div>
            <div class="union-content">
                <span>姓&nbsp;&nbsp;&nbsp;名</span>
                <span data-bind="text:UnionPay_Name"></span>
            </div>
            <div class="union-content">
                <span>账&nbsp;&nbsp;&nbsp;号</span>
                <span data-bind="text:UnionPay_BankCardNum"></span>
            </div>
            <div class="union-content">
                <span style="line-height: .58rem;">金&nbsp;&nbsp;&nbsp;额</span>
                <span data-bind="text:UnionPay_Money" style="line-height: .58rem;"></span>

                <span style="width: 2.5rem;position: absolute;right: .15rem;top: .15rem;text-align: center;font-size: .2rem;color: #c61324;background: #e0e0e0;border: 1px solid #a9a9a9;padding: .08rem .2rem; display:none;" id="prompt"> 请按系统显示金额转账！</span>
            </div>
            <div class="union-content">
                <span>地&nbsp;&nbsp;&nbsp;址</span>
                <span data-bind="text:UnionPay_BankAddr"></span>
            </div>
            <div class="union-content bottom">
                <span>附&nbsp;&nbsp;&nbsp;言</span>
                <span data-bind="text:UnionPay_rnd"></span>
            </div>

            <div class="unionpay-btns">
                <a href="javascript:;" class="submit_Btn" data-bind="click:withdraw">充值确认</a>
            </div>
        </div>
    </section>
    <!--Wechat-->
    <section id="WeChat" style="display:none;">
        <div class="wechat_content">
            <div class="union-content top">
                <span style="width:37%;"><img src="../../../static/img/wechat_icon1.png" style="width:100%;"></span>
                <span><img src="../../../static/img/rightarrow.png" style="width:100%;"></span>
                <span style="width:37%;float:left;"><img src="../../../static/img/wechat_icon1.png" style="width:100%;"></span>
            </div>
            <div class="union-content">
                <span>微信号</span>
                <span data-bind="text:WeChat_Rnd"></span>
            </div>
            <div class="union-content">
                <span>金&nbsp;&nbsp;&nbsp;额</span>
                <span data-bind="text:WeChat_Money"></span>
            </div>
            <div class="union-content bottom" style="background:#f2f2f2;padding: 7% 4% 4% 8%;">
                <p style="margin-bottom: 6%;font-size: .32rem;">微信支付方式说明：</p>
                <p>1、扫描右侧二维码，添加富途微信收款专员，通过“微信-转账 ”付款，并将“ 附言 ”输入微信转账说明，不要使用微信红包。</p>
                <p>2、将您的“会员账号”和“姓名”通过微信告诉富途收款专员。等待充值成功</p>
                <p style="color:#c2210b;">（注：请确保“微信支付”和确认的充值金额一致，否则无法及时到账。）</p>
            </div>
        </div>
    </section>
    <!--Alipay-->
    <section id="Alipay" style="display:none;">
        <div class="alipay_content">
            <div class="union-content top">
                <span style="width:37%;"><img src="../../../static/img/alipay_icon.png" style="width:100%;"></span>
                <span><img src="../../../static/img/rightarrow.png" style="width:100%;"></span>
                <span style="width:37%;float:left;"><img src="../../../static/img/unionpay_icon.png" style="width:100%;"></span>
            </div>
            <div class="union-content">
                <span>附&nbsp;&nbsp;&nbsp;言</span>
                <span data-bind="text:Alipay_Rnd"></span>
            </div>
            <div class="union-content">
                <span>姓&nbsp;&nbsp;&nbsp;名</span>
                <span data-bind="text:Alipay_Name"></span>
            </div>
            <div class="union-content">
                <span>账&nbsp;&nbsp;&nbsp;号</span>
                <span data-bind="text:Alipay_AccountName"></span>
            </div>
            <div class="union-content">
                <span>金&nbsp;&nbsp;&nbsp;额</span>
                <span data-bind="text:Alipay_Money"></span>
            </div>
            <div class="union-content">
                <span>地&nbsp;&nbsp;&nbsp;址</span>
                <span data-bind="text:Alipay_Address"></span>
            </div>
            <div class="union-content bottom" style="background:#f2f2f2;">
                <p>注：填写正确的备注（附言后的红色6位阿拉伯数字）秒存秒到，若填写附言错误，请您联系在线客服处理，但还请耐心等待！</p>
            </div>

            <a class="cz_an" href="javascript:void(0);" id="alipayScanCode">确 认</a>
        </div>
    </section>
    <!--QuickPass-->
    <section id="QuickPass" style="display:none;">
        <div class="qp_content">
            <div class="union-content top">
                <span style="width:56%;margin-left: .1rem;">
                    <img src="../../../static/img/quickpass.png" style="width:100%;padding: .2rem 0;">
                </span>
            </div>
            <div class="union-content">
                <span>金  额</span>
                <span style="color:#dd1200;">51.1</span>
            </div>
            <div class="union-content bottom" style="background:#f2f2f2;padding: 7% 4% 4% 8%;">
                <p style="margin-bottom: 6%;font-size: .28rem;">银联云闪付说明：</p>
                <p style="margin-bottom: .14rem;font-size: .22rem;">1、需下载云闪付 APP进行扫码支付。</p>
                <p style="font-size: .22rem;">2、云闪付是银联旗下移动支付品牌，更安全、便捷。</p>
            </div>

            <img src="../../../static/img/quick-qr.jpg" style="width:2.8rem;display:block;margin:0 auto;margin-top:.7rem;">
            <p style="color:#818181;font-size:.28rem;text-align: center;margin-top: .4rem;margin-bottom: 1rem;">请使用云闪付APP进行扫码支付</p>
        </div>
    </section>
</div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
    methods: {
        ...mapMutations ([
            'setCurrentPage'
        ])
    },
    created() {
        this.setCurrentPage('UnionPay');
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped >
#Pay{
    margin-top: 1.2rem;
}
/* Unionpay */
.unionpay_content,
.wechat_content,
.alipay_content,
.qp_content{
    width: 100%;
    overflow: hidden;

    .top{
        border: 1px solid #cdcdcd;
        border-bottom: 1px solid #cdcdcd;
        margin: .22rem auto 0;
        border-radius: 5px 5px 0 0;
        padding: 4% 4% 4% 4%;

        span:nth-child(2){
            width: 8%;
            font-size: .29rem;
            color: #515151;
            float: left;
            margin-left: .47rem;
            margin-right: .47rem;
            margin-top: .16rem;
        }
    }

    .union-content{
        width: 6.2rem!important;
        margin: 0 auto;
        overflow: hidden;
        background: #fff;
        border-left: 1px solid #cdcdcd;
        border-right: 1px solid #cdcdcd;
        border-bottom: 1px solid #cdcdcd;
        padding: .28rem .255rem;
        border-radius: 0;
        position: relative;

        span:nth-child(1){
            font-size: .29rem;
            color: #515151;
            float: left;
        }
        span:nth-child(2){
            float: left;
            margin-left: 8%;
            font-size: .28rem;
            color: #c61324;
        }
        
    }

    .bottom{
        border-bottom: 1px solid #cdcdcd;
        border-radius: 0 0 5px 5px;
    }
    .unionpay-btns{
        margin-top: 3%;
        text-align: center;

        a{
            background: #c61324;
            color: #fff;
            text-align: center;
            display: block;
            width: 74%;
            padding: .25rem 0;
            border-radius: .08rem;
            margin: 11% auto 2%;
            font-size: .31rem;
        }
    }
}
/* Wechat */
.wechat_content{
    .bottom{
        p{
            color: #232323;
            line-height: .38rem;
            font-size: .24rem;
            margin-bottom: .3rem;
        }
    }
}
/*Alipay */
.alipay_content{
    .bottom{
        p{
            color: #c2210b;
            font-size: .22rem;
            line-height: .36rem;
        }
    }
    .cz_an{
        width: 5.6rem;
        height: .9rem;
        background-color: #c61324;
        color: #FFF;
        text-align: center;
        line-height: .9rem;
        display: block;
        font-size: .3rem;
        margin: .7rem auto 0;
        border-radius: .07rem;
    }
}
</style>