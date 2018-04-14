<template>
  <div id="app">
    <menu-bar @openSideBar="open"></menu-bar>
    <side-bar 
        @closeSideBar="close"
        v-bind:currentPage="currentPage"
        v-if="showSidebar" />
    <router-view></router-view>
  </div>
</template>

<script>

import { mapState,mapMutations } from 'vuex'
import MenuBar from './components/Common/Header'
import SideBar from './components/Common/Sidebar'

export default {
  data(){
      return {
          showSidebar: false,
      }
  },
  components: { MenuBar, SideBar },
  computed: {
      ...mapState ({
           currentPage: state => state.menu.currentPage 
      })
  },
  methods: {
      open: function (){
          this.showSidebar = true;
    },
      close: function(pageName){
          this.showSidebar = false;
    }
  },
  created() {
    var _self = this;
    _self.width = 640; 
    _self.fontSize = 100;
    _self.widthProportion = function () { 
      var p = (document.body && document.body.clientWidth || document.getElementsByTagName("html")[0].offsetWidth) / _self.width; 
      return p < 0.5 ? 0.5 : p; 
    };
    _self.changePage = function () {
        document.getElementsByTagName("html")[0].setAttribute("style", "font-size:" + _self.widthProportion() * _self.fontSize + "px !important");
    }
    _self.changePage();
    window.addEventListener("resize", function () { _self.changePage(); }, false);
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" >

body {
   font-family:Microsoft YaHei !important;
}
</style>
