<template>
    <!-- <transition name="loginres"> -->
        <div class="loginres-container">
            <div class="loginres-message">{{ message != '' && message != null ? message : defaultText }}</div>
        </div>
    <!-- </transition> -->
</template>

<script>
export default {
  name: 'LoginResult',
  props: ['message'],
  data(){
      return {
          defaultText: '努力载入中...'
      }
  }
//   mounted(){
//       var vue_ = this;
//         setTimeout( function (){ 
//             vue_.$emit('close');
//          }, 2500);
//   }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped >

.loginres-enter-active  {
    transition: opacity 0.8s ease-in;
    opacity: 1;
}

.loginres-leave-active
{
    opacity: 0;
    transition: opacity .5s linear;
}

.loginres-enter  {
    opacity: 0;
}

.loginres-leave  {
    opacity: 1;
}

.loginres-container {  
    display: block !important; 
    width: 100%;
    height: 100%;
    background: rgba(32,35,52, .62);
    margin: 0;
    position: fixed;
    top: 0;
    left: 0;
    display: none;
    z-index: 12999;

    .loginres-message {
        color: #fff;
        font-size: .24rem;
        margin-top: .15rem;
        margin: auto;
        position: absolute;
        top: 41%;
        left: 0;
        bottom: 0;
        right: 0;
        width: 2rem;
        text-align: center;
    }
}

</style>

