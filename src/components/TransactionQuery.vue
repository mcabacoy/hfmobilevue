<template>
<div id = "transaction-query">
    <ul class="transac_nav">
        <li @click="setTab('transactq')" 
            :class="[ ('transactq'=== this.opentab ? 'active' : '') , 'tab' , 'transactq']">
            交易记录</li>
        <li @click="setTab('transactbet')" 
            :class="[ ('transactbet'=== this.opentab ? 'active' : '') , 'tab' , 'transactbet']">
            投注记录</li>
    </ul>

    <div class="trans-records">
        <!--transac_record-->
        <div class="transac_record" style="display: block;">
            <div class="transaction-header header">
                <div class="cz_top">
                    <a href="javascript:void(0);" class="recharge menu-li" style="width:23%;color:#900e36;margin-left: 5%;">
                        充值
                        <span class="rechargeactive"><img src=""></span>
                    </a>
                    <a href="javascript:void(0);" class="withdraw menu-li" style="width:23%">
                        提现
                        <span class="withdrawactive" style="display:none;"><img src=""></span>
                    </a>
                    <a href="javascript:void(0);" class="transfer menu-li" style="width:23%">
                        转账
                        <span class="transferactive" style="display:none;"><img src=""></span>
                    </a>
                    <a href="javascript:void(0);" class="dividend menu-li" style="width:23%">
                        红利
                        <span class="dividendactive" style="display:none;"><img src=""></span>
                    </a>
                </div>
            </div>

            <div class="wrapper content-wrapper" id="TransactionQuery">
                <div class="loginpass-bg content-wrapper">
                    <div class="container date-range">
                        <form>
                            <ul>
                                <li><input type="date" class="date-from date-icon" id="startDate" maxlength="10"></li>
                                <li><span class="to">至</span></li>
                                <li><input type="date" class="date-to date-icon" id="endDate" maxlength="10"></li>
                                <li><button type="button" class="btndate-range" data-bind="click:query">查询</button></li>
                            </ul>
                        </form>
                    </div>
                    <div class="container transact-content">
                        <div class="tab-content ">
                            <div data-bind="foreach: TransactionList"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--bet_record-->
        <div class="bet_record" style="display: none;">
            <div class="wrapper content-wrapper" id="TransactionQuery">
                <div class="loginpass-bg content-wrapper">
                    <div class="container date-range1">
                        <form>
                            <ul>
                                <li><input type="datetime-local" class="date-from date-icon" id="BettingStartDate" maxlength="10"></li>
                                <li style="padding: 0 .1rem;"><span class="to" style="line-height: .7rem;display: inline-block;">至</span></li>
                                <li><input type="datetime-local" class="date-to date-icon" id="BettingEndDate" maxlength="10"></li>
                                <li class="gametype">
                                    <span class="arrow"></span>
                                    <select id="bettype">
                                        <option>游戏类型</option>
                                        <option value="PT">PT</option>
                                        <option value="MG">MG</option>
                                        <option value="SG">SG</option>
                                        <option value="TTG">TTG</option>
                                        <option value="HABA">HABA</option>
                                        <option value="PNG">PNG</option>
                                        <option value="BTS">BS</option>
                                    </select>
                                </li>
                            </ul>
                            <button type="button" class="bet_btn" id="Betting">开始查询</button>
                        </form>
                    </div>
                    <div class="container transact-content">
                        <table>
                            <thead>
                                <tr class="bethead">
                                    <td>游 戏</td>
                                    <td>日 期</td>
                                    <td>总游戏次数</td>
                                    <td>下注金额</td>
                                    <td>总输赢</td>
                                </tr>
                            </thead>
                            <tbody id="Record">
                            </tbody>
                        
                        </table>
                    </div> <!--End of transact-content-->
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
export default {
  methods: {
        ...mapMutations (['setCurrentPage']),
        routePage: function(pageName){
            this.$router.push({ path: pageName });
        },
        setTab: function(payload){
           this.opentab =  payload;
        },
    },
    created() {
      this.setCurrentPage('TransactionQuery');
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.transac_nav{
    position: relative;
    top: 1.1rem;
    overflow: hidden;

    li{
        float: left;
        width: 50%;
        text-align: center;
        padding: .27rem;
        background: #989387;
        color: #e1e1e1;
        font-size: .26rem;
    }
    li.active{
        background: #ffd800;
        color: #232323;
    }
}
.transac_record{
    .cz_top{
        position: relative;
        background: #fff;
        height: .7rem;
        top: 1.07rem;
        width: 100%;
        border-bottom: 1px solid #f3f3f3;

        a{
            width: 23%;
            height: .69rem;
            display: block;
            float: left;
            text-align: center;
            line-height: .69rem;
            color: #818181;
            font-size: .25rem;
        }
    }
}
#TransactionQuery {
    .date-range{
        padding: .2rem 0.03rem;
        position: relative;
        top: 1rem;
        padding-left: 0.12rem;
        width: 100%;

        ul li{
            display: inline;

            input{
                border: 1px solid #b1b1b1;
                height: .61rem;
                width: 2.25rem;
                font-size: .19rem;
                padding-left: .52rem;
                border-radius: 4px;
            }
        }
        .to{
            font-size: .26rem;
        }
        input{
            border: 1px solid #b1b1b1;
            height: .61rem;
            width: 2.25rem;
            font-size: .19rem;
            padding-left: .52rem;
            border-radius: 4px;

        }
    }
    .btndate-range{
        background: #ba0a1b;
        height: .62rem;
        width: 1.2rem;
        color: #ffffff;
        margin-left: .08rem;
        font-size: .26rem;
        position: absolute;
        border-radius: 20px;
    }
}
.transact-content{
    margin-top: 1rem;
    border-top: 1px solid #f3f3f3;
    background: #ffffff;
}
.container{
    padding-left: 0;
    padding-right: 0;
    width: 100%;
}
.date-icon{
    /*background: url(../images/date-icon.png) no-repeat #eeeeee;*/
    background-size: 18%;
    background-position: top .17rem left .03rem;
}

.bet_record{
    .loginpass-bg{
        top: 1.1rem;
        position: relative;
    }
    .date-range1{
        top: 0;
        background: #fff;
        padding-bottom: .16rem;

        ul{
            padding-top: .17rem;
            padding-left: .1rem;
        }
        li{
            float: left;

            input{
                width: 2rem;
                height: .7rem;
                font-size: .17rem;
                padding-left: .43rem;
                border: 1px solid #b1b1b1;
                border-radius: .05rem;
            }
        }
    }
    .gametype{
        position: relative;
        background: #eeeeee;
        border: 1px solid #b1b1b1;
        border-radius: .08rem;
        margin-left: .1rem;

        .arrow{
            /*background: url(../images/newVer/dropdown1.png) no-repeat;*/
            background-size: 100%;
            width: .52rem;
            height: .52rem;
            position: absolute;
            top: .29rem;
            margin-top: -.2rem;
            right: .06rem;
            border-radius: 3px;
            z-index: 1;
        }
        select{
            background: none;
            width: 1.58rem;
            height: .67rem;
            border-radius: .08rem;
            padding-left: .1rem;
            font-size: .22rem;
            z-index: 2;
            position: relative;
        }
    }
    .bet_btn{
        position: relative;
        background: #ba0a1b;
        height: .62rem;
        width: 4.5rem;
        color: #ffffff;
        font-size: .26rem;
        border-radius: 20px;
        margin: 0 auto;
        display: block;
        margin-top: .88rem;
    }
    .transact-content{
        margin-top: 0;

        table{
            width: 100%;

            tr:nth-child(odd){
                background: #f2f2f2;
            }
            .bethead{
                background: #55423d !important;

                td{
                    color: #ecd034;
                }
            }
            tr td{
                padding: .2rem 0;
                font-size: .22rem;
                text-align: center;
                border-top: .01rem solid #d1d1d1;
                border-right: .01rem solid #d1d1d1;
            }
            tr td:last-child{
                border-right: none;
            }
        }
    }
}
</style>