<template>
    <transition name="notiftrans">
        <div class="notif-container">
            <div class="notif-message">{{ message }}</div>
        </div>
    </transition>
</template>

<script>
export default {
  name: 'notification',
  props: ['message', 'duration'],
  mounted(){
      var vue_ = this;
        setTimeout( function (){ 
            vue_.$emit('close');
         }, vue_.duration || 1500);
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped >

.notiftrans-enter-active  {
    transition: opacity 0.8s ease-in;
    opacity: 1;
}

.notiftrans-leave-active
{
    opacity: 0;
    transition: opacity .5s linear;
}

.notiftrans-enter  {
    opacity: 0;
}

.notiftrans-leave  {
    opacity: 1;
}

.notif-container {   
    position: fixed;
    bottom: 0px;
    left: 10px;
    right: 10px;
    z-index: 99999;
    bottom:40%;

    .notif-message {
        text-align: center;
        background-color: rgba(102, 102, 102,0.9);
        border-radius: 5px;
        min-height: .3rem;
        font-size: .25rem;
        color: #FFFFFF;
        line-height: .4rem;
        width: 4rem;
        margin: 0px auto;
        padding: 5px;
        z-index: 99999;
    }
}

</style>

