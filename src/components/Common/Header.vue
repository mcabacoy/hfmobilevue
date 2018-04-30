<template>
<div>
    <div class="nav-platform" v-if="currentPageName == 'PlatformGames'">
        <span class="nav-back"  @click="goBack()"><i></i></span>
        <div :class="['nav-game' , getGameBalanceTitle]">
        </div>
    </div>

    <div class="nav"  v-else-if="currentPageName != ''" >
        <a  @click="goBack()" class="backer prompt" v-if="currentPageMenuType == 'back'"></a>
        
        <img src="../../../static/img/toggle.png" class="nav-toggle" @click="openSideBar" v-else/>
        
        <img src="../../../static/img/logo.png" 
         class="logo" v-if="currentPageName == '' || currentPageName == 'Homepage' || currentPageName == '鸿福首页' " />
        <span v-else-if="currentPageName == 'GameBalance'">{{ getGameBalanceTitle + "老虎机" }}</span>
        <span v-else >{{ currentPageName }}</span>
  </div>
</div>
</template>

<script>

import { mapState , mapMutations, mapGetters } from 'vuex'
export default {
    name: 'MenuBar',
    methods:{
      openSideBar: function (){
         this.$emit('openSideBar');
      },
      goBack() {
        this.$router.go(-1)
      }
    },
    computed: {
        ...mapState ({
            currentPage: state => state.menus.currentpage
        }),
        ...mapGetters ({
            currentPageName: 'getMenuByLink',
            currentPageMenuType: 'getMenuTypeLink'
        }),
        getGameBalanceTitle() {
            return this.$route.params.gametype;
        }
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.nav-game {
    height: rem;
    height: 1rem;
    margin-top: -0.01rem;

    &.PT1 , &.PT {
        background: url(../../../static/img/HGame/PT-text.png) no-repeat center;
        background-position-x: -.2rem;
    }
    
    &.MG {
        background: url(../../../static/img/HGame/MG-text.png) no-repeat center;
        background-position-x: -.2rem;
    }

    &.SG {
        background: url(../../../static/img/HGame/SG-text.png) no-repeat center;
        background-position-x: -.2rem;
    }

    &.HABA {
        background: url(../../../static/img/HGame/HB-text.png) no-repeat center;
        background-position-x: -.2rem;
    }
    
    &.PNG {
        background: url(../../../static/img/HGame/PNG-text.png) no-repeat center;
        background-position-x: -.2rem;
    }

    &.TTG {
        background: url(../../../static/img/HGame/TTG-text.png) no-repeat center;
        background-position-x: -.2rem;
    }

    &.BS {
        background: url(../../../static/img/HGame/BS-text.png) no-repeat center;
        background-position-x: -.2rem;
    }
    
    background-size: contain !important;
}
.nav-platform {
    background: url(../../../static/img/HGame/nav-bgportrait.png) no-repeat;
    background-size: 100%;
    height: 1rem;
    line-height: 34px;
    color: #FFF;
    font-size: .12rem;
    display: table;
    width: 100%;
    position: relative;
    z-index: 2;
    
    span {
        display: table-cell;
        height: .3rem;
    }

    .nav-back {
        position: relative;
        width: 15%;

        i {
            width: 100%;
            background: url(../../../static/img/HGame/back-portrait.png)no-repeat;
            background-size: 100%;
            height: 1rem;
            display: list-item;
            position: absolute;
            top: 0;
            left: 0;
        }
    }

    .nav-game {  
        position: relative;  
        top: 0;

        .nav-title {
            width: 100% !important;
            position: relative;

            img {
                margin-top: .12rem;
                width: 100%;
            }
        }
    }

    .nav-toggle {
        position: relative;
        width: 15%;
        i {
            background: url(../../../static/img/HGame/menu-activeportrait.png)no-repeat;
            background-size: 100%;
            width: 100%;
            height: 1rem;
            display: block;
            position: absolute;
            top: 0;
            right: 0;
        }
    }



}
.nav{
    .backer{
        color: #fff;
        font-size: .3rem;
        line-height: 1.35rem;
        position: absolute;
        width: 1.2rem;
        z-index: 5;
    }
    .backer:before{
        content: "";
        width: .24rem;
        height: .24rem;
        border-left: .03rem solid #ffc600;
        border-bottom: .03rem solid #ffc600;
        display: block;
        float: left;
        margin: .45rem -0.3rem 0 .4rem;
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
    }
}
.prompt {
    text-align: center;
    color: #acacac;
}
.nav, .nav2 {
    height: 1.1rem;
    background: #433635;
    background: -webkit-linear-gradient(#433635, #2b2622);
    background: -o-linear-gradient(#433635, #2b2622);
    background: -moz-linear-gradient(#433635, #2b2622);
    background: linear-gradient(#433635, #2b2622);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 150;
    display: block;
}
.nav-fixed-top {
    position: fixed;
    top:0;
    z-index: 100;
}
.nav2 {
    .backer{
        color: #fff;
        font-size: .3rem;
        line-height: 1.35rem;
        position: absolute;
        width: 1.2rem;
        z-index:5;
    }

    .prompt span{
        margin-left:-.4rem;
    }
    .backer:before{
        content: "";
        width: .24rem;
        height: .24rem;
        border-left: .03rem solid #ffc600;
        border-bottom: .03rem solid #ffc600;
        display: block;
        float: left;
        margin: .45rem -0.3rem 0 .4rem;
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
    }
    span{
        color: #ffcc00;
        font-size: .33rem;
        line-height: 1.15rem;
        width: 100%;
        text-align: center;
        display: block;
        position: absolute;
        top: 0;
    }
}
.nav{
    span {
        color: #ffcc00;
        font-size: .33rem;
        line-height: 1.15rem;
        width: 100%;
        text-align: center;
        display: block;
        position: absolute;
        top: 0;
    }

    .nav-toggle {
        position:relative;
        z-index:5;
        width: .5rem; 
        margin-top: .35rem; 
        margin-left: .3rem;
    }

    .logo {
        width: 1.6rem;
        margin-top: .15rem;
        margin-left: 1.6rem;
    }
}

@media screen and (orientation:landscape){
    .nav-platform{
        background: url(../../../static/img/HGame/nav-bg.png) no-repeat;
        background-size: 100%;
        height: .5rem;

        .nav-back{
            i{
                width: 53%;
                background: url(../../../static/img/HGame/back.png)no-repeat;
                background-size: 100%;
            }
        }
        .nav-game{
            width: 50%;
            height: .53rem;
            margin: 0 auto;
        }
    }
}
</style>
