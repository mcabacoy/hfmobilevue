<template>
  <div>
    <input id="indexloginName" name="loginName" type="hidden" v-model="username" />
  </br>
    <input id="password" name="password" type="hidden" v-model="password" />
    </br>
    <input id="gameCode" name="gameCode" type="hidden" v-model="gameCode" />
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data() {
      return{
        username:'',
        password:'',
        gameCode: '',
        pfId: '',
        type: '',
        genre: ''
      }
    },
    created() {
      this.username = this.getQueryString('username');
      this.password = this.getQueryString('password');
      this.gameCode = this.getQueryString('gameCode');
      console.dir(this.username)
    },
    mounted() {
      var currentgame = this.gameCode;
      var setCurrentURL = window.location.href.substring(0,window.location.href.lastIndexOf('/')+1)+'index';
      var setLogoutURL = window.location.href.substring(0,window.location.href.lastIndexOf('/')+1)+'logout';
      window.iapiSetCallout('Login', calloutLogin);
      window.iapiSetCallout('GetTemporaryAuthenticationToken', calloutGetTemporaryAuthenticationToken);
      login();
      function login() {
        window.iapiSetClientPlatform("mobile&deliveryPlatform=HTML5");
        var loginname = getQueryString('username');

        var loginnameup = loginname.toUpperCase();
        var passwords = getQueryString('password');
        window.iapiLogin(loginnameup,passwords,1,"zh-cn");
      }
      function calloutLogin(response) {
        if (response.errorCode) {
          alert("PT错误消息:" + response.playerMessage + "错误码:" + response.errorCode);
        }else {
          console.log("ptloginsucc");
          window.iapiRequestTemporaryToken(1, '976', 'GamePlay');
        }
      }
      function calloutGetTemporaryAuthenticationToken(response) {
        console.log("执行登入操作==================>1");
        if (response.errorCode) {
          alert("Token failed. " + response.playerMessage + " Error code: " + response.errorCode);
        }else {
          console.log("执行登入操作==================>2");
          launchMobileClient(response.sessionToken.sessionToken);
        }
      }
      function launchMobileClient(temptoken) {
        var loginname = getQueryString('username');
        var loginnameup = loginname.toUpperCase();

        window.location.href= "https://hub.gm175788.com/igaming/?gameId=" + currentgame + "&real=1&username=" + loginnameup + "&lang=zh-cn&tempToken=" + temptoken + "&lobby=" + setCurrentURL+"&logout=" + setLogoutURL;
      }
      function getUrlVars() {
        var vars = {};
        var parts = setCurrentURL.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
          vars[key] = value;
        });
        return vars;
      }
      function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
      }
    },
    methods: {
      getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
      }
    }
  }
</script>
<style scoped></style>
