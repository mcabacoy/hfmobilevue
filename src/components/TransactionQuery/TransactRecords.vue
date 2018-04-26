<template>
<div class="trans-records">
        <!--transac_record-->
        <div class="transac_record" v-if="selectedtab == 'transactq'">
            <div class="transaction-header header">
                <div class="cz_top">
                    <a  @click="setTab('rechargeactive')" 
                        :class="[ ('rechargeactive'=== this.transtab ? 'active' : '') , 'tab' , 'rechargeactive']"
                        class="recharge menu-li">                       
                        充值
                        <span v-if="transtab == 'rechargeactive'"><img src="../../../static/img/line.png"></span>
                    </a>
                    <a @click="setTab('withdrawactive')" 
                        :class="[ ('withdrawactive'=== this.transtab ? 'active' : '') , 'tab' , 'withdrawactive']"
                        class="withdraw menu-li">
                        提现
                        <span v-if="transtab == 'withdrawactive'"><img src="../../../static/img/line.png"></span>
                    </a>
                    <a  @click="setTab('transferactive')" 
                        :class="[ ('transferactive'=== this.transtab ? 'active' : '') , 'tab' , 'transferactive']"
                        class="transfer menu-li">
                        转账
                        <span v-if="transtab == 'transferactive'"><img src="../../../static/img/line.png"></span>
                    </a>
                    <a  @click="setTab('dividendactive')" 
                        :class="[ ('dividendactive'=== this.transtab ? 'active' : '') , 'tab' , 'dividendactive']"
                        class="dividend menu-li">
                        红利
                        <span v-if="transtab == 'dividendactive'"><img src="../../../static/img/line.png"></span>
                    </a>
                </div>
            </div>

            <div class="wrapper content-wrapper" id="TransactionQuery">
                <div class="loginpass-bg content-wrapper">
                    <div class="container date-range">
                        <form>
                            <ul>
                                <li><input type="date" v-model="transactionFilters.startDate" class="date-from date-icon" id="startDate" maxlength="10"></li>
                                <li><span class="to">至</span></li>
                                <li><input type="date" v-model="transactionFilters.endDate" class="date-to date-icon" id="endDate" maxlength="10"></li>
                                <li><button type="button"  @click="searchTransaction"   class="btndate-range">查询</button></li>
                            </ul>
                        </form>
                    </div>
                    <div class="container transact-content">
                        <div class="tab-content ">
                            <div v-for="(item, index) in transactionList" :key="index">
                                <div class="complete-content">
                                    <div class="wl-trans">
                                        <span style="padding-right: .16rem;font-size: .34rem;">{{ item.searchType }}</span>
                                        <span class="wallet-num">￥ {{ item.Amount }}</span>
                                        <span :class="['pull-right', 'wallet-trans', item.TransactionDescription == '存款失败' ? 'succ' : '']" style="margin-right:0;">{{ item.TransactionDescription }}</span>
                                    </div>

                                    <div class="s-info">
                                        <span class="pull-right s-date" >{{ item.TransactionDateTime }} </span>
                                        <p>订单号&nbsp;&nbsp;<span data-bind="text:OrderNumber">{{ item.OrderNumber }}</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--bet_record-->
        <div class="bet_record" v-if="selectedtab == 'transactbet'">
            <div class="wrapper content-wrapper" id="TransactionQuery">
                <div class="loginpass-bg content-wrapper">
                    <div class="container date-range1">
                        <form>
                            <ul>
                                <li><input type="date" v-model="bettingFilters.startDate" class="date-from date-icon" id="BettingStartDate" maxlength="10"></li>
                                <li style="padding: 0 .1rem;"><span class="to" style="line-height: .7rem;display: inline-block;">至</span></li>
                                <li><input type="date" v-model="bettingFilters.endDate" class="date-to date-icon" id="BettingEndDate" maxlength="10"></li>
                                <li class="gametype">
                                    <span class="arrow"></span>
                                    <select id="bettype" v-model="bettingFilters.gameType">
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
                            <button type="button" @click="searchBetting" class="bet_btn" id="Betting">开始查询</button>
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
                                <tr v-for="(item, index) in bettingList" :key="index">
                                    <td>{{ item.platNo }}</td> 
                                    <td>{{ item.betTime.substring(0, 19).replace("T", " ") }}</td> 
                                    <td>{{ item.BetCount }} ** </td> 
                                    <td>{{ item.betAmount }}</td> 
                                    <td>{{ item.TotalWinLoss }} **</td> 
                                </tr>
                            </tbody>
                        
                        </table>
                    </div> <!--End of transact-content-->
                </div>
            </div>
        </div>

        <notification :message="notifmessage" 
            @close="closeNotif"  
            v-if="notifmessage!=''" />
    </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
import Notification from './../Common/Notification'
import { GET_TRANSACTION_HISTORY, GET_PAGED_BET_RECORDS } from '../../api/index';
export default {
   props: ['selectedtab'],
   components: { Notification },
   data(){
      return {
          transtab: 'rechargeactive',
          transactionFilters: {
              text: '充值',
              startDate: '',
              endDate: ''
          },
          bettingFilters: {
              startDate: '',
              endDate: '',
              gameType: '',
              pageIndex: 0,
              TotalPages: 0
          },
          notifmessage: '',
          transactionList: [],
          bettingList: [],
      }
    },
    computed: {
          ...mapGetters({ 
                currentUser: 'currentUser'
            }),
            transactions(){
                return this.transactionList;
            } 
    },
    create(){
    },
    methods: {
        closeNotif(){
            this.notifmessage = '';
        },
        setTab: function(transload){
            this.transtab =  transload;
        },
        searchTransaction(   ){
            this.transactionList = [];
            let that_ = this;
            let searchText = this.transtab;
            let searchType = 1;
            let text = searchType;
            switch(searchText.trim())
            {
                case "withdrawactive":
                    searchType = 2;
                    text = '提现';
                    break;
                case "transferactive":
                    searchType = 3;
                    text = '转账';
                    break;
                case "dividendactive":
                    searchType = 4;
                    text = '红利';
                    break;
                default:
                    searchType = 1;
                    text = '充值';
                    break;
            }

            let postData = {
                searchType: searchType,
                startDate: this.transactionFilters.startDate,
                endDate: this.transactionFilters.endDate
            };
            let config = { headers: { 'Authorization': 'Bearer ' + this.currentUser.tokenKey } };
            if ( new Date(this.transactionFilters.endDate).getTime() < new Date(this.transactionFilters.startDate).getTime() )
            {   
                this.notifmessage = "结束日期小于开始日期";
                return;
            }
            // loginResult(true, '正在查询中...');
            this.$http.post( GET_TRANSACTION_HISTORY, postData, config )
            .then( function(res) {
                // loginResult(false);
                if (res.data.length == 0) {
                    that_.notifmessage = ("暂无" + postData.searchType + "数据");
                } else {
                    for ( var i = 0; i < res.data.length; i++ )
                    {
                        for ( var j = 0; j < res.data[i].TransactionHistoryItems.length; j++){
                            that_.transactionList.push(res.data[i].TransactionHistoryItems[j]);
                        }
                    }
                }
            }).catch( function(error){ });
        },
        searchBetting( pageIndex ){
            // GamePlatType
            this.bettingList = [];
            let that_ = this;

            let postData = {
                PlatNo: this.bettingFilters.gameType,
                StartTime: this.bettingFilters.startDate.substring(0, 19).replace("T", " ").replace(/-/g, '/'),
                EndTime:  this.bettingFilters.endDate.substring(0, 19).replace("T", " ").replace(/-/g, '/'),
                type: 1,
                PageIndex: pageIndex || 0,
                PageSize: 10
            };

            if (pageIndex){
                this.bettingFilters.pageIndex = pageIndex;
            } else {
                this.bettingFilters.pageIndex = 0;
            }
            if (!this.bettingFilters.gameType) {
                this.notifmessage = ('请输入游戏类型');
                return;
            }
            if ( postData.StartTime == '' || postData.EndTime == '') {
                this.notifmessage = ("请输入日期");
                return;
            }
            let endDate_ = new Date(this.bettingFilters.endDate).getTime();
            let startDate_ = new Date(this.bettingFilters.startDate).getTime();
            if ( endDate_  < startDate_ )
            {   
                this.notifmessage = "结束日期小于开始日期";
                return;
            }
                
            if (endDate_ - startDate_ > 86400000) {
                 this.notifmessage = ("目前只提供昨天到今天的投注记录");
                return;
            }
            
            // loginResult(true, '正在查询中...');
            let config = { headers: { 'Authorization': 'Bearer ' + this.currentUser.tokenKey } };
            this.$http.post( GET_PAGED_BET_RECORDS , postData, config )
            .then( function (res) {
                //  loginResult(false);
                if (res.data == "Failed") {
                    that_.notifmessage = ('投注记录出现异常错误，请稍后重试');
                }
                else if ( res.data == '')
                {

                }
                else {
                    var data = JSON.parse(res.data),
                        i = 0, 
                        len = res.data.BetRecords.length, 
                        html = '';
                    bettingFilters.TotalPages = res.data.TotalPages;
                    if (len == 0) {
                        that_.notifmessage = ('暂时没有投注记录');
                        return;
                    }
                    
                    for (i; i < len; i++) {
                        that_.bettingList.push(data.BetRecords[i]);
                        html += '<tr> <td>' + bettingList.platNo + 
                                '</td> <td>' + bettingList.betTime.substring(0, 19).replace("T", " ") + 
                                '</td> <td>' + data.BetCount ;
                                // '</td> <td  class="positive">' + data.BetRecords[i].betAmount + 
                                // '</td><td  class="positive">' + data.TotalWinLoss + 
                                // '</td></tr>'
                    }
                    // $('#Record').append(html);
                }
                
            });
        }
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.transac_record{
    .cz_top{
        position: relative;
        background: #fff;
        height: .7rem;
        top: 1.07rem;
        width: 100%;
        border-bottom: 1px solid #f3f3f3;

        a{
            width: 24%;
            height: .69rem;
            display: block;
            float: left;
            text-align: center;
            line-height: .69rem;
            color: #818181;
            position:relative;
            font-size: .25rem;
        }
        a.active{
            color: rgb(144, 14, 54);
            color:#900e36;
        }
        a.active img{
            width: 60%;
            position: absolute;
            bottom: -1px;
            left: .33rem;
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

    .complete-content{
        padding-top: .26rem;
        border-bottom: 1px solid #f3f3f3;
        padding-left: .39rem;
        padding-right: .39rem;

        .wl-trans{
            padding-bottom: .06rem;

            .wallet-num{
                font-size: .34rem;
            }
            .wallet-trans{
                font-size: .29rem;
            }
        }
        .s-info{
            color: #b7b7b7;
            border: 1px solid transparent;

            .s-date{
                font-size: .2rem;
                margin-right: .05rem;
            }
            p{
                padding-top: 0rem;
                font-size: .23rem;
                padding-bottom: .16rem;

                span{
                    font-size: .2rem;
                }
            }
        }
    }
}

.pull-right{
    float:right;
}
.container{
    padding-left: 0;
    padding-right: 0;
    width: 100%;
}
.date-icon{
    background: url(../../../static/img/date-icon.png) no-repeat #fff;
    background-size: 20%;
    background-position: top .08rem left .05rem;
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
                background-position: top 0.15rem left 0.03rem;
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
            background: url(../../../static/img/dropdown.png) no-repeat;
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
