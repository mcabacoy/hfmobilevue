
<template>
<div class="announcement">
    <div class="annlist">
        <span>
            <img src="../../../static/img/speaker.png" />
            系统消息：
        </span>
        <div class="notices-container">
            <ul id="notices" class="marquee">
                <li v-for="notice in notices" v-bind:key="notice">{{ notice }}</li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'announcement',
    data(){
      return {
          notices:[
              'The quick brown fox jumps over the lazy dog',
              'This is just a random text',
              'Please disregard this'
          ]
      }
    }
}
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>

.notices-container {
    // width: 450px;
    // margin: 0 auto;
    // white-space: nowrap;
    overflow: hidden;
    // box-sizing: border-box;
}

.marquee  {
    // display: inline-block;
    display: inline-grid;
    // padding-left: 100%;  /* show the marquee just outside the paragraph */
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

  