<template>
  <div class="yesno-modal" v-if="showModalYesNo != ''">
    <div class="modal-container">
        <div class="modal-close" @click="submitNo" >
        </div>
        <div class="modal-title"><span>您确定要删除银行卡吗?</span></div>
            <p>
                <span class="modal-yes" @click="submitYes" >确认</span>
                <span class="modal-no" @click="submitNo" >取消</span>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['item'],
    methods: {
        submitYes() {
            this.$emit('clickYes', this.item );
        },
        submitNo(){
            this.$emit('clickNo');
        }
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped >

.yesno-modal {
    width: 100%;
    height: 100%;
    display: block;
    position: fixed;
    top: 0;
    background-color: rgba(0,0,0,.39);
    z-index: 9999999;

    .modal-container {
        width: 5.3rem;
        height: 2.9rem;
        display: block;
        background-color: #FFF;
        position: fixed;
        z-index: 999999999;
        margin-top: 40%;
        left: 50%;
        margin-left: -2.65rem;

        .modal-close {
            width: .4rem;
            display: block;
            height: .4rem;
            position: relative;
            float: right;
            margin-top: .2rem;

            &:before, &:after {
                content: '';
                height: .03rem;
                width: .4rem;
                display: block;
                background: #b5b5b5 !important;
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

            &:before, &:after {
                background: #fff;
            }

            &:after {
                transform: rotate(45deg);
                -webkit-transform: rotate(45deg);
                -moz-transform: rotate(45deg);
                -o-transform: rotate(45deg);
                -ms-transform: rotate(45deg);
            }
        }

        .modal-title {
            width: 4.8rem;
            height: 1rem;
            margin: .4rem auto 0;
            display: block;

            span {
                padding-top: .3rem;
                font-size: .24rem;
                line-height: 1rem;
            }
        }

        .modal-yes {
            border-radius: 0;
            height: .68rem;
            line-height: .66rem;
            background-color: #1b7be9;
            display: block;
            margin: .09rem auto 0;
            color: #FFF;
            font-size: .3rem;
            text-align: center;
            width: 43%;
            float: left;
            margin-left: .2rem !important;
        }

        .modal-no {
            border-radius: 0;
            height: .68rem;
            line-height: .66rem;
            background-color: #1b7be9;
            display: block;
            margin: .09rem auto 0;
            color: #FFF;
            font-size: .3rem;
            text-align: center;
            width: 46%;
            float: right;
            color: #333;
            background-color: #e6e5e5;
            margin-right: .2rem;

        }
    }
}
</style>
