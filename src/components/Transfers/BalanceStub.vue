<template>
   <li :class="[item.customClass, 'transfer-list' ]">
        <p class="transtitle"><span :style="'border-left: 4px solid ' + item.hexColor + ';' "></span>{{ item.name }}</p>
        <div class="card">
            <p>平台余额：</p>
         <h2>{{ gamebalance }}元</h2>
            <div class="cardlink">
                <a @click="showModal( { status:  'in' , platform: item.customClass })" >转 入</a>
                <a @click="showModal( { status:  'out' , platform: item.customClass })" >转 出</a>
           </div>
        </div>
    </li>
</template>

<script>

import { mapMutations, mapGetters } from 'vuex'
import { GET_GAME_BALANCE } from './../../api'
var qs = require("querystring");

export default {
  name: 'balanceStub',
  props: {
      item: {
          type: Object
      }
  },
  data() {
    return {
        gamebalance: 0,
        AccountDetails: {},
    }
  },
  computed: {
       ...mapGetters ({
          currentUser: 'currentUser'
      })
  },
  methods: {
        ...mapMutations(["setRefreshPlatform", "logoutUser", 'getSessions']),
        showModal: function (payload){
            this.$emit('showModal', payload)
        },
        refreshBalance(){
            let that_ = this;
           
            let postData = {
                gamecode : this.item.customClass
            }
            let config = {
                headers: {
                    'Authorization': 'Bearer ' + this.currentUser.tokenKey,
                }
            };
            this.$http.get( GET_GAME_BALANCE + '?gamecode=' +   this.item.customClass , config)
            .then( function(res){
                if ( res.data == '您的账户在别的地方登陆，请重新登录!'){
                    that_.gamebalance = 0.00;
                    that_.logoutUser();
                    that_.$router.push({ path: '../Login' });
                    return;
                }
                else {
                    that_.gamebalance = ( !Number.isNaN(res.data) && res.data != ''  && res.data != null )  
                                    ? parseInt(res.data).toFixed(2) 
                                    : 0.00;
                }
            })
            .catch( function(err){
                console.log(err);
            });
        }   
    },
    created(){
        this.getSessions();
        this.refreshBalance();
        this.AccountDetails = qs.parse( this.currentUser.userInfo );
    },
    watch: {
        'item.forRefresh': function (val){
            if (!val ) return;
            this.getSessions();
            this.refreshBalance();
            this.setRefreshPlatform( { platform:  this.item.customClass , status: false   }  )
        }
    }

}
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped >

li.transfer-list {
                margin-top: .25rem;
                width: 48.6%;
                margin-right: .15rem;
                float: left;
                .card {
                    background: #525252;
                    width: 100%;
                    height: 1.7rem;
                    border-radius: .1rem;
                    overflow: hidden;
                    position: relative;
                    color: #fff;
                    background: black;
                    p {
                        font-size: .21rem;
                        margin-bottom: .14rem;
                        padding-left: .2rem;
                        padding-top: .24rem;
                    }

                    h2 {
                        font-size: .4rem;
                        padding-left: .2rem;
                    }

                    .cardlink {
                        background: rgba(35, 35, 35, 0.5);
                        color: #fff;
                        bottom: 0;
                        position: absolute;
                        width: 100%;
                        font-size: .25rem;

                        a:nth-child(1) {
                            border-right: 1px solid #fff;
                        }

                        a {
                            width: 48%;
                            display: inline-block;
                            text-align: center;
                            padding: .13rem 0;
                            color: #fff;
                        }
                    }
                }
    .transtitle {
                    font-size: .3rem;
                    color: #232323;
                    margin-bottom: .1rem;
                    margin-left: .08rem;
    }
    span {
                    border-left: 4px solid #188f63;
                    font-size: .21rem;
                    margin-right: .1rem;
    }
    &:nth-child(2n+2) {
                    margin-right: 0;
                }
}

.transferbody ul li.PT .card {
    background: url(../../../static/img/trans/trans-item1.png) no-repeat;
    background-size: 100%;
}

.transferbody ul li.MG .card {
    background: url(../../../static/img/trans/trans-item4.png) no-repeat;
    background-size: 100%;
}

.transferbody ul li.SG .card {
    background: url(../../../static/img/trans/trans-item8.png) no-repeat;
    background-size: 100%;
}

.transferbody ul li.TTG .card {
    background: url(../../../static/img/trans/trans-item6.png) no-repeat;
    background-size: 100%;
}
.transferbody ul li.HABA .card {
    background: url(../../../static/img/trans/trans-item9.png) no-repeat;
    background-size: 100%;
}

.transferbody ul li.PNG .card {
    background: url(../../../static/img/trans/trans-item7.png) no-repeat;
    background-size: 100%;
}

.transferbody ul li.BS .card {
    background: url(../../../static/img/trans/trans-item10.png) no-repeat;
    background-size: 100%;
}
</style>