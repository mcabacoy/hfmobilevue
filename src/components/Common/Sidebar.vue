<template>
    <div class="sidenav">
        <div class="sidemask" @click="closeSideBar"></div>
        <transition name="sidenav-trans">
        <div class="side-content" ref="sidecontent">
            <div class="firsttabb">
                <div :class="['sidebarlogo', getUserProfileClass(grade)]"></div>
                <p id="AccountName">{{ "用户 " + accountName }}</p>
            </div>
            <div class="secondtabb">
                <ul>
                    <li v-for="menu in menus"
                        v-bind:key="menu.name" 
                        v-bind:class="menu.link == currentPage ? 'active' : ''" >    
                        <span @click="routePage(menu.link)" v-if="menu.linktype == 'internal'">
                            <span class="icon" :class="menu.class"></span>
                            <span>{{ menu.name }}</span>                        
                        </span>
                        <a :href="menu.link" v-else >
                            <span class="icon" :class="menu.class"></span>
                            <span>{{ menu.name }}</span>                        
                        </a> 
                    </li>
                </ul>
            </div>
            <div class="thirdtabb logout">
                <a href="" @click="logout()" ><img src="../../../static/img/nav-icons/logout-ico.png" style="width:12%;" /><span>退出登录</span></a>
            </div>
        </div>
        </transition>
    </div>
</template>

<script>

import { mapState , mapMutations, mapGetters } from 'vuex'
export default {
  name: 'SideNav',
  data(){
      return {
        grade: 0,
        accountName: 'HFeason9',
      }
  },
  mounted(){
      this.$nextTick(() => {
          setTimeout(()=>{
              this.$refs.sidecontent.className = this.$refs.sidecontent.className + ' visible';
          }, 50);
      });
  },
  methods: {
      ...mapMutations (['setCurrentPage', 'logoutUser']),
      getUserProfileClass: function (grade){
          switch(grade){
              case 0:
                return  'futu-profile';
             case 8: 
             case 7: 
                return 'grade-1';
             default:
                return "grade-" + grade ;
          }
      },
      closeSideBar: function(){
          this.$refs.sidecontent.className = this.$refs.sidecontent.className.replace('visible', '');
          setTimeout(()=>{
              this.$emit('closeSideBar');
          }, 400);
      },
      routePage: function ( pageName ){
        this.setCurrentPage(pageName);
        this.$router.push({ path: '../' + pageName });
        this.closeSideBar();
      },
      logout: function (){
        this.logoutUser();
        this.$router.push({ path: '../Login' });
      }
  },
  computed: {
    ...mapState ({
        currentPage: state => state.menu.currentpage
    }),
    ...mapGetters ({
        menus: 'getSideMenus'
    })
  }
}
</script>

<style>

</style>
<style lang="stylus" rel="stylesheet/stylus">

/* TRANSITION CLASSES */
    .sidenav-trans-enter-active {
        margin-left: -6.5rem;
        transition:  margin 3s linear;
    }
    .sidenav-trans-leave-active {
        margin-left: 0rem;;
        transition:  margin 3s linear;
    }
    .sidenav-trans-enter  {
        margin-left: 0rem;
    }
    .sidenav-trans-leave  {
        margin-left: -6.5rem;
    }

.sidebarlogo {
    &.futu-profile {
        background: url('../../../static/img/Personalprofile/futu-profile.png');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }
    &.grade-1 {
        background: url('../../../static/img/Personalprofile/1.png') ;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }
    &.grade-2 {
        background: url('../../../static/img/Personalprofile/2.png') ;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }
    &.grade-3 {
        background: url('../../../static/img/Personalprofile/3.png') ;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }
    &.grade-4 {
        background: url('../../../static/img/Personalprofile/4.png') ;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }
    &.grade-5 {
        background: url('../../../static/img/Personalprofile/5.png') ;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }
    &.grade-6 {
        background: url('../../../static/img/Personalprofile/6.png') ;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }
     
    width: 1.5rem;
    height: 1.5rem;
    margin: auto;
  
}

.sidemask {
    width: 1.9rem;
    height: 11rem;
    position: absolute;
    top: 0;
    right: 0;
}

.sidenav {
    background: rgba(0, 0, 0, 0.7);
    position: fixed;
    z-index: 200;
    top: 0;
    width: 100%;
    height: 100%;
    overflow-y: scroll;

    .side-content {
        background: #1f2226;
        height: auto;
        width: 4.5rem;
        position: relative;
        margin-left: -6.5rem;
        transition: 0.8s;

        &.visible {
            margin-left: 0rem;
        } 

        .firsttabb {
            background: url(../../../static/img/nav-icons/nav-bg.png) no-repeat;
            background-size: cover;
            text-align: center;
            padding: .7rem 0 0 0;
            height: 3.45rem;
             p {
                color: #fff;
                font-size: .32rem;
                margin-top: .15rem;
            }
        }

        .secondtabb {
            ul li {
                padding: .2rem .5rem;
 
                &.active{
                    background: #161c23;
                    
                    a , span {
                         color: #ffd200;
                    }
                }
                
                span {
                    vertical-align: middle;
                }

                a , span {
                    color: #d1d1d1;
                }

            }
        } 

        .thirdtabb {
            background: #24282e;
            padding: .27rem .5rem;
            margin-top: 1rem;   

            span {
                color: #5d6980;
                margin-left: .3rem;
                font-size: .25rem;
                line-height: 0.47rem;
            }
        }
    }
}

.sidenav .side-content .secondtabb ul li {  
    .icon {
        background: url(../../../static/img/nav-icons/nav-icon1.png) no-repeat;
        background-size: 100%;
        width: .45rem;
        height: .45rem;
        display: inline-block;
        margin-right:.4rem
        filter: grayscale(1);
    }
    
    &.active .icon {
        background: url(../../../static/img/nav-icons/nav-icon1active.png) no-repeat;
        background-size: 100%;
        filter: none !important;
    }   

    .icon2 {
        background: url(../../../static/img/nav-icons/nav-icon2.png) no-repeat;
        background-size: 100%;
    }

    &.active .icon2 {
        background: url(../../../static/img/nav-icons/nav-icon2active.png) no-repeat;
        background-size: 100%;
    }

    .icon3 {
        background: url(../../../static/img/nav-icons/nav-icon3.png) no-repeat;
        background-size: 100%;
    }

    &.active .icon3 {
        background: url(../../../static/img/nav-icons/nav-icon3active.png) no-repeat;
        background-size: 100%;
    }

}

.sidenav .side-content .secondtabb ul li .icon4{
    background: url(../../../static/img/nav-icons/nav-icon4.png) no-repeat;
    background-size: 100%;
}
.sidenav .side-content .secondtabb ul li.active .icon4{
    background: url(../../../static/img/nav-icons/nav-icon4active.png) no-repeat;
    background-size: 100%;
}
.sidenav .side-content .secondtabb ul li .icon5{
    background: url(../../../static/img/nav-icons/nav-icon5.png) no-repeat;
    background-size: 100%;
}
.sidenav .side-content .secondtabb ul li.active .icon5{
    background: url(../../../static/img/nav-icons/nav-icon5active.png) no-repeat;
    background-size: 100%;
}
.sidenav .side-content .secondtabb ul li .icon6{
    background: url(../../../static/img/nav-icons/nav-icon6.png) no-repeat;
    background-size: 100%;
}
.sidenav .side-content .secondtabb ul li.active .icon6{
    background: url(../../../static/img/nav-icons/nav-icon6active.png) no-repeat;
    background-size: 100%;
}
.sidenav .side-content .secondtabb ul li .icon7{
    background: url(../../../static/img/nav-icons/nav-icon7.png) no-repeat;
    background-size: 100%;
}
.sidenav .side-content .secondtabb ul li.active .icon7{
    background: url(../../../static/img/nav-icons/nav-icon7active.png) no-repeat;
    background-size: 100%;
}

</style>

