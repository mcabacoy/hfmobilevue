<template>
<section id="wallet-withdraw">
    <div class="withdrawCash-wrap">
        <ul class="withdrawCash-ul withdrawCash-ul03">
            <li class="listtip">
                注：单笔提现限额 <em>100 </em>至&nbsp;<em data-bind="text:TodayLimitAmount">50000</em>&nbsp;元.

            </li>
            <li class="toBankCard">
                <span>到账银行卡：</span><a @click="routePage('BankCard')"><span class="default">默认银行卡</span><i class="icon-arrow"></i></a>
            </li>
        </ul>
        <div class="cz_nr cz_nr02">
            <div class="cz_nr_shang">提现金额 :</div>
            <div class="cz_nr_zhong"><span>￥</span><input id="cz" pattern="[0-9]*" min="0" data-bind="value:withdrawAmount" maxlength="8" type="number" class="cz-input" placeholder="请输入金额"></div>
            <div class="cz_nr_xia">
                中心钱包余额：<span data-bind="text:balance">￥25.84</span>
                <!-- ko if: balance()!='0.00元' -->
                <a href="javascript:void(0);" data-bind="click:withDrawAll">全部提现</a>
                <!-- /ko -->
            </div>
        </div>
    </div>

    <div class="withdrawCash-btns">
        <a href="javascript:;" class="submit_Btn" data-bind="click:withdraw">下一步</a>
    </div>
</section>
</template>
<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
export default {
    methods: {
        ...mapMutations (['setCurrentPage']),
        routePage: function(pageName){
            this.$router.push({ path: pageName });
        }
    },
    created() {
      this.setCurrentPage('WalletWithdraw');
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
#wallet-withdraw{
    height: 100%;
}
.withdrawCash-wrap{
    width: 100%;
    overflow: hidden;
    margin-top: 1rem;

    .cz_nr{
        padding: 5% 4%;
        width: 6.2rem;
        padding-top: 16px;
        border-radius: 0 0 4px 4px !important;
        border-top: transparent;
        border-left: 1px solid #bdbdbd;
        border-right: 1px solid #bdbdbd;
        border-bottom: 1px solid #bdbdbd;
        height: 2.41rem;
        margin: auto;
        display: block;
        background-color: #FFF;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        position: relative;
        margin-top: 0;
        overflow: hidden;
    }
    .cz_nr > .cz_nr_xia{
        padding: 0 .1rem
        font-size: .25rem;
        width: 6.2rem;
        border-top: 1px solid #bdbdbd !important;
        border-radius: 0 0 4px 4px;
        bottom: 0;
        top: auto;
        border-bottom: transparent;
        color: #232323;
        background: #f4f4f4;
        height: .8rem;
        line-height: .8rem;
        position: absolute;
        left: 0;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        display: block;

        span{
            color: #ec3800;
            font-weight: 700;
            font-size: .28rem;
        }
        a{
            float: right;
            margin-right: 3%;
            font-weight: 600;
            color: #0a72e7;
            font-size: .22rem;
        }
    }
    .cz_nr > .cz_nr_shang{
        position: relative;
        float: left;
        line-height: 1.01rem;
        font-size: .3rem;
        color: #333333;
        height: .73rem;
        display: block;
    }
    .cz_nr_zhong{
        width: 5.62rem;
        height: 1.5rem;
        line-height: 1rem;
        display: block;
        color: #000;
        font-size: .22rem;
        overflow: initial;
    }
    .cz_nr > .cz_nr_zhong{
        span{
            font-size: .4rem;
            height: .73rem;
            display: block;
            float: left;
            color: #333333;
            padding-left: 2%;
        }
    }
    .cz-input{
        font-size: .33rem;
        width: 3.2rem;
        height: .6rem;
        line-height: .5rem;
        display: block;
        float: left;
        color: #333333;
        margin-top: .2rem;
    }
}
.withdrawCash-ul03{
    width: 6.2rem!important;
    margin: .2rem auto 0;
    overflow: hidden;

    li{
        position: relative;
        font-size: .24rem;
        color: #333;
        padding: 0 4%;
        height: .8rem;
        line-height: .8rem;
        background: #fff;
        border-bottom: 1px solid #cdcdcd;
        border-left: 1px solid #cdcdcd;
        border-right: 1px solid #cdcdcd

        span{
            margin-right: .4rem;
            float: left;
            font-size: .24rem;
            color: #232323;

            
        }
        span.default{
            font-weight: 600;
            color: #0059bd;
            margin-left: -.2rem;
            display: inline-block;
        }
        i.icon-arrow{
            position: absolute;
            top: 50%;
            right: 4%;
            width: .2rem;
            height: .2rem;
            margin-top: -.1rem;
            -webkit-transform: rotate(-45deg);
            transform: rotate(-45deg);
        }
        i.icon-arrow:before{
            position: absolute;
            top: 0;
            right: 0;
            height: .2rem;
            width: 0;
            content: '';
            border-left: .04rem solid #c9c9c9;
        }
        i.icon-arrow:after{
            position: absolute;
            bottom: 0;
            right: 0;
            width: .2rem;
            height: 0;
            content: '';
            border-top: .04rem solid #c9c9c9;
        }
    }
    li.listtip{
        position: relative;
        background: #fff;
        border: 1px solid #cdcdcd;
        border-bottom: 1px solid #cdcdcd;
        font-size: .22rem;
        height: .8rem;
        line-height: .57rem;
        color: #818181;
        border-radius: 4px 4px 0 0;
        padding: .11rem .18rem;

        em{
            color: #ec3800;
        }
    }
}
.withdrawCash-btns{
    margin-top: 3%;
    text-align: center;

    a.submit_Btn{
        background: #c61324;
        color: #fff;
        text-align: center;
        display: block;
        width: 92%;
        padding: .35rem 0;
        border-radius: .08rem;
        margin: .7rem auto;
        font-size: .31rem;
    }
}
</style>
