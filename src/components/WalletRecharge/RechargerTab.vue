<template>
  <div class="tabs-content" id="WalletRecharge">
      <div>
            <div>
                <div class="tab-header">
                    <div class="header-container tab-section exclusive" v-if="methoddetails.recharger.headertype=='exclusive'" >
                        添加专属微信：<span id="WeChatNumber"></span>，
                        <span>&nbsp;转账并备注账号!</span></div>

                    <div class="header-container tab-section" v-if="methoddetails.recharger.headertype =='limit'">
                                {{ methoddetails.recharger.limit.label  }}：
                                <span>{{ methoddetails.recharger.limit.from }}
                                &nbsp;</span>  {{ methoddetails.recharger.limit.preposition }} <span>
                                &nbsp;{{ methoddetails.recharger.limit.to }}
                                {{ methoddetails.recharger.limit.currency }}
                                </span>
                    </div>
                </div>

                <div class="tab-amount cz_nr">
                    <div class="tab-amount-label">充值金额</div>
                    <label class="tab-input-container">
                        <span>￥</span>
                        <input type="number"
                               step="0.01"
                               inputmode="numeric" 
                               min="0" 
                               class="tab-input"
                               autofocus="" 
                               :placeholder="methoddetails.recharger.placeholder">
                        </label>
                </div>

                <div class="tab-options  tab-section">
                    <div></div>
                    <span class="arrowbox"></span>
                    <select>
                      <option value="hfFirstDpBonus">首存优惠</option>
                      <option value="hfSecond25">再存25%</option>
                      <option value="no" selected="">下回再参与！</option>
                    </select>
                </div>
                <a class="tab-submit" href="#">确 认</a>
                <p class="tab-note">{{ methoddetails.recharger.aditionalremarks }}</p>
            </div>
        </div>
  </div>
</template>


<script>
import { mapState, mapGetters , mapMutations} from 'vuex'

export default {
  name: 'recharger-tab',
  props: ["method"],
  methods: {
    
  },
  computed: {
      ...mapGetters ({
          methoddetails: 'getMethodDetails',
          defaultmethod : 'defaultmethod'
      }),
      ...mapState ({
          selected: state => state.wallet.selectedmethod
      })
  }

}

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped >
.tabs-content {
    
    height: 6.8rem;
    
    .tab-section {
        background: #ffd800;
        color: #4c4c4c;
        border-radius: 3px 3px 0 0;
        font-size: .25rem;
        width: 6.2rem;
        height: .8rem;
        line-height: .8rem;
        margin: auto;
        margin-top: .22rem;
        padding-left: .28rem;
        border: 1px solid #bdbdbd !important;
    }

    .header-container {

        span {
            color: #ec3800;
            font-weight: 700;
        }

        .exlcusive  {
            color: #ec3800;
            font-weight: 700;
        }
    }

    .tab-amount {
        border-radius: 0 0 3px 3px;
        border: 1px solid #bdbdbd !important;
        border-top: none;
        margin-top: 0;
        height: 1.5rem;
        padding-top: .26rem;
        width: 6.2rem;
        margin: auto;
        display: block;
        background-color: #FFF;
        padding-left: .28rem;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        position: relative;

        display: inline-table;
    
        .tab-amount-label {
            position: relative;
            float: left;
            line-height: 1.01rem;
            font-size: .3rem;
            color: #232323;
        }

        > .tab-input-container span {
            font-size: .36rem;
            height: .73rem;
            display: block;
            float: left;
            color: #232323;
        }

        .tab-input-container {
            height: .73rem;
            line-height: .73rem;
            display: block;
            font-size: .3rem;
            color: #000;
      
            float: left;
            height: 1rem;
            width: auto;
            line-height: 1.02rem;
            color: #232323;
            font-size: .22rem;
            overflow: hidden;
            margin-left: 1%;
            
            .tab-input {
                font-size: .33rem;
                width: 3.2rem;
                height: .6rem;
                line-height: .5rem;
                display: block;
                float: left;
                color: #333333;
                margin-top: 6%;
                padding-left: 5px;
            }

        }
    }

    .tab-options {
            margin-top:0 !important;
            padding: 0 .6rem !important;
            text-align: center !important;
            position:relative !important;

            > div {
                background: #fff;
                width: 5rem;
                height: .6rem;
                position: absolute;
                margin-top: .1rem;
                border: 1px solid #bdbdbd;
                border-radius: .12rem;
            }

            select {
                height: .6rem;
                width: 5rem;
                padding-left: .25rem;
                /* z-index: 9999; */
                position: relative;
                float: left;
                margin-top: 0.1rem;
            }

            .arrowbox {
                padding: .21rem 6%;
                top: 50%;
                right: 1.0rem;
                z-index: 1;
                background: #ca0626;
                position: absolute;
                margin-top: -.2rem;
                border-radius: 3px;
            }
            .arrowbox:before {
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
            }
        }   
      .tab-submit {
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

        :visited {
            background-color: #0a72e7;
        }
    }

    .tab-note {
        font-size: .23rem; 
        color: red; 
        text-indent: .4rem; 
        position: relative; 
        top: .2rem; 
    }
}




</style>

