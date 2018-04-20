
<template>
<div class="announcement">
    <div class="annlist">
        <span>
            <img src="../../../static/img/speaker.png" />
            系统消息：
        </span>
        <div class="notices-container">
            <ul id="notices" class="marquee">
                <li v-for="(notice, index ) in notices" v-bind:key="index">{{ notice.Content }}</li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'announcement',
    props: ['notices']
}
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>

.notices-container {
    overflow: hidden;
}

.marquee  {
    display: inline-grid;
    animation: marquee 10s linear infinite backwards;
}

@keyframes marquee {
    0%    { transform: translate(0, 15%); }
    100% { transform: translate(0, -100%); }
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

  