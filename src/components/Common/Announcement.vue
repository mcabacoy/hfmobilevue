
<template>
<div class="announcement">
    <div class="annlist">
        <span>
            <img src="../../../static/img/speaker.png" />
            系统消息：
        </span>
        <div class="notices-container">
            <ul id="notices" class="marquee" :style="{ marginTop: activeMargin + 'rem' }" ref="marquee">
                <li v-for="(notice, index ) in notices" v-bind:key="index">{{ notice.Content }}</li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import { GET_NOTICES } from './../../api'
var qs = require("querystring");
export default {
    name: 'announcement',
    data(){
        return {
            activeMargin: 0.0,
        }
    },
    methods:{
        ...mapMutations(['getSessions' , 'storeNoticesSession']),
        getAnnouncements( ){
                let that_ = this;
                let config = {
                headers: {
                    'Data-Type': 'json'
                    }
                }
                this.$http.get( GET_NOTICES )
                .then( function( res ){
                    that_.storeNoticesSession((res.data));
                    that_.getSessions();
                });
        },
        getRootElementFontSize( ) {
                // Returns a number
                return parseFloat(
                    // of the computed font-size, so in px
                    getComputedStyle(
                        // for the root <html> element
                        document.documentElement
                    )
                    .fontSize
                );
        },
        convertRem(value) {
                return value * this.getRootElementFontSize();
            }
        },
    computed:{
        ...mapGetters({ 
                currentUser: 'currentUser',   
                notices: 'getNotices' 
        }),
    },
    mounted(){
        let that_ = this;
        let ctr_ = 0.45;
        let marginCtr_ = 0;
        let height_ = this.$refs.marquee.clientHeight;
        if ( that_.convertRem(ctr_) > ctr_ ) {
            this.noticeInteval = setInterval(function(){
                if ( Math.abs(that_.convertRem(that_.activeMargin)) >  height_ )
                {
                    that_.$refs.marquee.className = '';
                    that_.activeMargin = 0.4;
                    setTimeout(()=>{
                        that_.$refs.marquee.className = 'marquee';
                        that_.activeMargin = that_.activeMargin - ctr_;
                    }, 200);
                }
                else {
                    that_.activeMargin = that_.activeMargin - ctr_;
                }
            }, 3000);
        }
    },
    created(){
        this.getAnnouncements();
    }
}
</script>


<style lang="stylus"  scoped>

.notices-container {
    overflow: hidden;
}

.marquee {
    transition: margin  2s linear 1s;
}

.announcement {
    position: fixed;
    bottom: 0;
    background: #2b1913;
    background: -webkit-linear-gradient(to left, rgba(43, 25, 19, 0.43), #2b1913, #2b1913);
    background: -o-linear-gradient(to left, rgba(43, 25, 19, 0.43), #2b1913, #2b1913);
    background: -moz-linear-gradient(to left, rgba(43, 25, 19, 0.43), #2b1913, #2b1913);
    background: linear-gradient(to left, rgba(43, 25, 19, 0.43), #2b1913, #2b1913);
    padding: .15rem .2rem;
    width: 100%;
    
    .annlist {
        font-size: .2rem;
        color: #ffcc00;
        letter-spacing: .02rem;
        height: 0.35rem;
        overflow: hidden;
        span {
            color: #ff8400;
            float:left;

            img {
                vertical-align:middle;
                width: .38rem;
                margin-right: .1rem;
            }
        }

        ul,
        ul li {
            float:left;
        }

        ul li {
            
            padding: .04rem 0;
            line-height: .35rem;
            float:none;
        }
    }

     #notices {
        width:70%;
        margin-top: -.05rem;
    }
}




</style>

  