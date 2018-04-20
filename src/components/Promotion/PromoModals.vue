<template>
    <transition name="promotion-mod">
        <div>
            <div class="prom-mask" style=""></div>
            <div class="promotion-modal">
                <div class="modal">
                    <div class="modal-header">
                        <span>领取优惠</span>
                        <div class="dema_kong" @click="closeModal"><span class="demoSpan2"></span></div>
                    </div>
                    <div class="modal-body">
                        <slot name="body"></slot>
                    </div>
                    <div class="modal-bottom">
                        <slot name="bottom"></slot>
                    </div>
                </div>
                <input type="submit" class="submission" value="申请提交">
            </div>
        </div>
    </transition>
</template>
<script>
export default {
   name: 'promotion-modal',
   methods: {
       closeModal: function(){
           this.$emit('closeModal')
       }
   }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.prom-mask{
    width: 100%;
    height: 100%;
    background: rgba(23, 15, 12, 0.9);
    z-index: 150;
    position: fixed;
    top: 0;
}
.promotion-modal{
    z-index: 151;
    position: absolute;
    width: 5.73rem;
    height: 5rem;
    border-radius: .12rem;
    top: 1rem !important;
    left: .34rem;

    .modal-body{
        height: 9.504rem;
        max-height: 4.5rem;
        min-height: 3rem;
        background: #fff;
        overflow: hidden;
        overflow-y: scroll;
        border-radius: 0;

        .offerdetail-btns{
            width: 100%;
            padding: .35rem .3rem;

            p{
                color: #494949;
                line-height: .4rem;
                font-size: .22rem;
            }
            ul li{
                list-style-type: disc;
                font-size: 0.22rem;
                line-height:.33rem;
            }
        }
        table tr td{
            border:1px solid #000;
            padding:.08rem 0;
            line-height:.25rem;
        }
    }

    .modal-header{
        background: #f3552a;
        background: -webkit-linear-gradient(#f3552a, #c11042);
        background: -o-linear-gradient(#f3552a, #c11042);
        background: -moz-linear-gradient(#f3552a, #c11042);
        background: linear-gradient(#f3552a, #c11042);
        color: #fff;
        padding-left: .4rem;
        font-size: 0.29rem;
        line-height: 0.85rem;
        height: .9rem;
        display: block;
        border-radius: 8px 8px 0 0;
        text-align: center;
        border-bottom: 1px solid #dddddd;

        span{
            background-image: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #ffffff), color-stop(100%, #fcc762));
            background-image: -webkit-linear-gradient(#ffffff,#fcc762);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            color: #fff;
            position: relative;
            font-weight: 700;
            letter-spacing: .02rem;
            font-size: .33rem;
        }
    }
    .dema_kong{
        margin-top: .1rem;
        width: .4rem;
        display: block;
        height: .4rem;
        position: relative;
        float: right;
    }

   
    .modal-bottom{
        background: #e0e0e0;
        border-radius: 0 0 .12rem .12rem;
        padding: .25rem 0;
    }
    .submission{
        background: #ff0024;
        background: -webkit-linear-gradient(#ff0024 40%, #dd579f);
        background: -o-linear-gradient(#ff0024 40%, #dd579f);
        background: -moz-linear-gradient(#ff0024 40%, #dd579f);
        background: linear-gradient(#ff0024 35%, #dd579f);
        width: 2.88rem;
        height: .7rem;
        border-radius: .7rem;
        color: #fff;
        margin-top: .3rem;
        margin-left: 1.5rem;
        font-size: .31rem;
        box-shadow: 1px 3px 6px #000;
    }
}
.demoSpan2:before, .demoSpan2:after{
    content: '';
    height: .03rem;
    width: .4rem;
    display: block;
    background: #ffffff;
    border-radius: 10px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    position: absolute;
    top: .31rem;
    left: -.3rem;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
}
.demoSpan2:after{
    background: #fff;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
}
</style>