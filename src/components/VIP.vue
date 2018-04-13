<template>
  <div>
    <div class="vip-content">
        <img src="../../static/img/HVIP/vip-banner.jpg" style="width:100%;position:fixed;top: 1.1rem;z-index: 1;"/>
        <div class="viptitle"><p>VIP等级说明</p></div>
        <div class="vip-table">
            <ul class="vip-headtable">
                <li style="width: 35%;line-height: 1rem;">等级特权</li>
                <li><img src="../../static/img/HVIP/vip1.png" /></li>
                <li><img src="../../static/img/HVIP/vip2.png" /></li>
                <li><img src="../../static/img/HVIP/vip3.png" /></li>
            </ul>
            <div class="items">
                <div class="toggle-item">
                    <ul>
                        <li>累积有效投注</li>
                        <li>100+</li>
                        <li>30万</li>
                        <li>100万</li>
                    </ul>
                </div>
            </div>
            <div class="items">
                <div class="toggle-item">
                    <ul>
                        <li>生日礼金（1倍)</li>
                        <li>-</li>
                        <li>68</li>
                        <li>188</li>
                    </ul>
                </div>
            </div>
            <div class="items">
                <div class="toggle-item">
                    <ul>
                        <li>晋级奖赏</li>
                        <li>-</li>
                        <li>88</li>
                        <li>388</li>
                    </ul>
                </div>
            </div>
            <div class="items">
                <div class="toggle-item">
                    <ul>
                        <li>周周双返水</li>
                        <li>-</li>
                        <li style="width: 43%;font-size: .2rem;padding-bottom: .25rem;">每周一额外奖励上周总返水</li>
                    </ul>
                </div>
            </div>
            <div class="items">
                <div class="toggle-item">
                    <ul>
                        <li>VIP专用线路</li>
                        <li>-</li>
                        <li>-</li>
                        <li>-</li>
                    </ul>
                </div>
            </div>
            <div class="items">
                <div class="toggle-item">
                    <ul>
                        <li>存取款加速通道</li>
                        <li>-</li>
                        <li>√</li>
                        <li>√</li>
                    </ul>
                </div>
            </div>
            <div class="items">
                <div class="toggle-item">
                    <ul>
                        <li>24小时服务</li>
                        <li>√</li>
                        <li>√</li>
                        <li>√</li>
                    </ul>
                </div>
            </div>
            <div class="items">
                <div class="toggle-item">
                    <ul>
                        <li>每月保级条件</li>
                        <li>-</li>
                        <li>≥10万</li>
                        <li>≥30万</li>
                    </ul>
                </div>
            </div>

            <ul class="vip-headtable">
                <li style="width: 35%;line-height: 1rem;">等级特权</li>
                <li><img src="../../static/img/HVIP/vip4.png" style="width:77%;"/></li>
                <li><img src="../../static/img/HVIP/vip5.png" style="width:64%;" /></li>
                <li><img src="../../static/img/HVIP/vip6.png" /></li>
            </ul>

            <div class="items-1">
                <div class="toggle-item">
                    <ul>
                        <li>累积有效投注</li>
                        <li>300万</li>
                        <li>100万</li>
                        <li>3000万</li>
                    </ul>
                </div>
            </div>
            <div class="items-1">
                <div class="toggle-item">
                    <ul>
                        <li>累积有效投注</li>
                        <li>288</li>
                        <li>588</li>
                        <li>888</li>
                    </ul>
                </div>
            </div>
            <div class="items-1">
                <div class="toggle-item">
                    <ul>
                        <li>晋级奖赏</li>
                        <li>888</li>
                        <li>1888</li>
                        <li>3888</li>
                    </ul>
                </div>
            </div>
            <div class="items-1">
                <div class="toggle-item">
                    <ul>
                        <li>周周双返水</li>
                        <li style="width: 65%;font-size: .24rem;">每周一额外奖励上周总返水</li>
                    </ul>
                </div>
            </div>
            <div class="items-1">
                <div class="toggle-item">
                    <ul>
                        <li>VIP专用线路</li>
                        <li>-</li>
                        <li>√</li>
                        <li>√</li>
                    </ul>
                </div>
            </div>
            <div class="items-1">
                <div class="toggle-item">
                    <ul>
                        <li>存取款加速通道</li>
                        <li>√</li>
                        <li>存提秒到</li>
                        <li>存提秒到</li>
                    </ul>
                </div>
            </div>
            <div class="items-1">
                <div class="toggle-item">
                    <ul>
                        <li>24小时服务</li>
                        <li>专属</li>
                        <li>专属</li>
                        <li>私人助理</li>
                    </ul>
                </div>
            </div>
            <div class="items-1">
                <div class="toggle-item">
                    <ul>
                        <li>每月保级条件</li>
                        <li>≥100万</li>
                        <li>≥300万</li>
                        <li>≥800万</li>
                    </ul>
                </div>
            </div>

            <div class="rules">
                <p style="">规则与条款:</p>
                <ol>
                    <li v-for="(item, index) in rules"
                        :key="index" >{{ item }}</li>
                </ol>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {  mapMutations } from 'vuex'
export default {
    data(){
        return {
            rules: [
                "针对所有有效鸿福会员开放",
                "VIP等级会根据玩家当月累计投注系统自动更新",
                "晋晋级红包系统会自动派发至主钱包，每位会员每个档    次只可获取一次，5倍有效投注即可出款。",
                "vip等级2以上获得额外总反水只需10倍流水即可出款,出    款无上线。",
                "VIP2级或以上活跃每周双反水，每月需进行最低保级 投注，如当月未完成每月保级我们将会进行提醒。如连 续两月未完成保级要求，将会降级处理。",
                "鸿福拥有本活动的最终解释权。"
            ]
        }
    },
     methods: {
        ...mapMutations ([
            'setCurrentPage'
        ])
     },
    created() {
        this.setCurrentPage('VIP');
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" >
.vip-content {
    .viptitle {
        background: #e47626;
        width: 100%;
        height: .8rem;
        margin-top: 3.39rem;
        z-index: 10;
        position: relative;

        p   {
            color: #fff;
            line-height: .82rem;
            text-align: center;
            font-size: .33rem;
            text-shadow: 1px 2px 1px #8a3416;
        }
    }

    .vip-table {
        z-index: 10;
        position: relative;

        .vip-headtable {
            display: block;
            width: 100%;
            overflow: hidden;
            background: #303b58;
            padding-top: .2rem;

            li {
                float:left;
                width: 21%;
                text-align: center;
                color:#fff;
                
                img {
                    width: 82%;
                }
            }
        }

        .toggle-item {
            overflow: hidden;
            
            ul li {
                float:left;
                width: 21%;
                color: #ffdc1a;
                border-left: 1px solid #3c3d46;
                padding: .25rem 0;
                padding-bottom: .2rem;
                text-align: center;
                font-size: .25rem;

                &:first-child {
                    width:35%;
                    border-left:none;
                    color:#b9b9b9;
                    font-size: .23rem;
                    text-align: center;
                }
            }
        }

        .items:nth-child(even),
        .items-1:nth-child(odd){
            background: #292a32;
        }

        .items:nth-child(odd),
        .items-1:nth-child(even){
            background: #22232a;
        }

    }

    .rules {
        background:#292a32;
        padding: .5rem .35rem;
        
        > p {
            color:#ffde00;
            margin-bottom:.25rem;
            font-size: .28rem;
        }

        ol {
            list-style-type: decimal;
            margin-left: .3rem;

            li {
                color:#a8abbd;
                font-size: .25rem;
                letter-spacing: .02rem;
                line-height: 1.4;
            }
        }
    }
}
</style>
