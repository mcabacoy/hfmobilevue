<template>
    <div class="platforms platform-list index_content">
        <ul>
           <li :class="item.customClass" 
                v-for="item in list" 
                v-bind:key="item.name"
                @click="routePage( item.isDirectList ?  '/PlatformGames' : '/GameBalance' , item.customClass)">            
                <span class="platform-name">{{item.name }}</span>
                <div :class="[item.classification , 'flag']" v-if="item.classification != ''">
                    <span v-if="item.classification=='hot'">热</span>
                    <span v-else-if="item.classification=='new'">新</span>
                    <span v-else-if="item.classification=='top'">热</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>

import { mapState , mapGetters } from 'vuex'
export default {
    computed: {
         ...mapGetters ({
             list: 'getAllPlatforms'
        })
    },
    methods: {
        routePage(pageName, platform ){
            this.$router.push({ path: pageName + '/' + platform  });
        }
    }
}
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>

.platforms {
  padding-bottom: .6rem;
  
  ul {
    padding: 0 .15rem;
    padding-bottom: .3rem;
    overflow:hidden;

    li {
        background: #fff;
        box-shadow: 0px 3px 6px 0px rgba(3, 1, 12, 0.61);
        width: 48.6%;
        height: 1.65rem;
        border-radius: .1rem;
        float: left;
        overflow:hidden;
        margin-right: .15rem;
        margin-top: .2rem;
        position:relative;

        background-size:100% !important;
        background-position-y: -.01rem !important;

        span.platform-name {
            background: rgba(174, 23, 76, 0.9);
            color: #fff;
            bottom: 0;
            position: absolute;
            width: 100%;
            padding: .05rem .2rem;
            font-size: .26rem;
        }
                
        .flag {
            width: 0 !important;
            height: 0 !important;
            border-bottom: 0.59rem solid transparent !important;
            border-right: 0.66rem solid rgb(67, 211, 29) !important;
            position: absolute !important;
            top: 0 !important;
            right: 0 !important;
            opacity: 0.8 !important;

            &.hot { 
                border-right: 0.66rem solid #f75304 !important;
            }

            &.new { 
                border-right: 0.66rem solid #42da1d !important;
            }

            span {
                /* -webkit-transform: rotate(49deg); */
                position: absolute !important;
                color: white !important;
                left: 0 !important;
                font-size: .21rem !important;
                top: 0 !important;
                background: none !important;
                text-shadow: 0px 1px 1px black;
                margin-left: 0.35rem;
                margin-top: 0.06rem;
            }
        }
    }
    
    li:nth-child(2n+2) {
        margin-right:0;
    }

    i:nth-child(2n+1) {
        margin-right: .15rem !important;
    }   
  }
}

.platforms  { 
    li.PT1 {
        background: url(../../../static/img/platforms/item1.png) no-repeat;
    }
    li.PNG {
        background: url(../../../static/img/platforms/item5.png) no-repeat;
    }
    li.PT {
        background: url(../../../static/img/platforms/item6.png) no-repeat;
    }
    li.SG {
        background: url(../../../static/img/platforms/item7.png) no-repeat;
    }
    li.TTG {
        background: url(../../../static/img/platforms/item8.png) no-repeat;
    }
    li.MG {
        background: url(../../../static/img/platforms/item10.png) no-repeat;
    }
    li.BS {
        background: url(../../../static/img/platforms/item9.png) no-repeat;
    }
    li.HABA {
        background: url(../../../static/img/platforms/item11.png) no-repeat;
    }
}

</style>
