<template>
   <div class="signout-menu" style="" @click="closeMenu()">
        <div class="signout-menu-container">
            <div class="signout-title">您确定退出登录?</div>
            <div class="signout-items">
                <a class="okay">退出登录</a>
                <a class="cancel">取消</a>
            </div>
        </div>
    </div>

</template>

<script>
export default {
methods: {
    closeMenu: function (){
        this.$emit('closeMenu');
    }
}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

.signout-menu {
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.6);
    position: fixed;
    top: 0;
    z-index: 9999999;

    .signout-menu-container {
        width: 100%;
        height: 2.4rem;
        background-color: #FFF;
        position: fixed;
        bottom: 0;
        z-index: 99999999;

        .signout-title {
            width: 100%;
            line-height: .4rem;
            text-align: center;
            display: block;
            font-size: .22rem;
            padding: .1rem;
            color: #999;
        }

        .signout-items {
            width: 100%;
            height: 1.84rem;
            position: relative;
            bottom: 0;

            .okay {
                width: 100%;
                height: .88rem;
                display: block;
                font-size: .24rem;
                color: #F00;
                text-align: center;
                line-height: .85rem;
                border-top: 1px solid #dbdbdc;
                border-bottom: 1px solid #dbdbdc;
            }

            .cancel {
                    width: 100%;
                    height: .88rem;
                    display: block;
                    color: #000;
                    font-size: .24rem;
                    text-align: center;
                    line-height: .88rem;
            }
        }
    }
}
</style>
