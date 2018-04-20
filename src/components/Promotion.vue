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
                        <input @click="showModal({ status: 'modal1'})" type="submit" class="btn" value="立即使用"/>
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
                        <input @click="showModal({ status: 'modal2'})" type="submit" class="btn" value="立即使用"/>
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
    v-if="promotionmode != ''"
    @closeModal = "closeModal">
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
            this.$emit("showModal");
            this.promotionmode = payload.status;
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

  


    
    
</style>

