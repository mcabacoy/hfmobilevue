<template>
<div class="detail-modal">
        <div class="modal" >
        <transition name="modaltrans">
            <div class="modal-container" v-if="display">
                <div class="modal-header">
                    <span>{{ modaltitle }}</span>
                    <div class="close-modal"  @click="closeModal">
                    </div>
                </div>
                <div class="modal-body" >
                    <!-- Pass slot here for content -->
                    <slot name="content"></slot>
                </div>
                <!-- Add footer here! -->
            </div>
        </transition>
        </div>
<div class="modal-shadow"></div>
</div>
</template>
<script>

export default {
  name: 'detail-modal',
  props: ['modaltitle'],
  data(){
    return {
        display: false
    }
  },
  methods: {
    closeModal: function (payload){
        this.display = false;
            this.$nextTick(() => {
                setTimeout(()=>{
                    this.$emit('closeModal', payload)
            }, 250);
        });
    }
  },
  mounted(){
      this.$nextTick(() => {
          setTimeout(()=>{
              this.display = true;
          }, 100);
      });
  }
}

</script>
<style lang="stylus" rel="stylesheet/stylus" >

.modaltrans-enter-active  {
    transition: transform .5s ease-in;
    transform: scale(1);
}
.modaltrans-leave-active
{
    transform: scale(0);
    transition: transform .5s ease-out;
}
.modaltrans-enter  {
    transform: scale(0);
}
.modaltrans-leave  {
   transform: scale(1);
}

.detail-modal {
    .modal {
        overflow: hidden;
        position: fixed;
        top: 0;
        z-index: 2001;
        width: 100%;
        height: 100%;

        // background-position-x: .34rem;
        width: 5.35rem;
        
        position: fixed;
        top: 2rem !important;
        z-index: 300;
        
        margin-left: 0.55rem;
        margin-top: auto;

        .modal-container {
            position: fixed;
            left: auto;
            top: 1.9rem;
            width: 5.3rem;
            min-height: 4rem;
            display: block;
            z-index: 2001;
            background: #62072f;
            .modal-header {
                    display: block;
                    line-height: 0.8rem;
                    padding-left: 0.23rem;
                    background: #720535;
                    color: #fff000;
                    text-align: center;
                    font-size: 0.27rem;
                    letter-spacing: 0.02rem;
                    height: .8rem;
                
                .close-modal {
                    width: .4rem;
                    display: block;
                    height: .4rem;
                    position: relative;
                    float: right;
                    margin-top: .06rem;
                    right: 0.3rem;
                    // top: 0.15rem;
                    width: .4rem;


                    &:after , &:before  {
                            content: '';
                            height: .03rem;
                            width: .4rem;
                            display: block;
                            background: #b5b5b5 !important;
                            border-radius: 10px;
                            -webkit-border-radius: 10px;
                            -moz-border-radius: 10px;
                            position: absolute;
                            top: .25rem;
                            height: .02rem;
                            width: .35rem;
                            background: #fff;
                    }

                    &:before {
                            transform: rotate(-45deg);
                            -webkit-transform: rotate(-45deg);
                            -moz-transform: rotate(-45deg);
                            -o-transform: rotate(-45deg);
                            -ms-transform: rotate(-45deg);
                    }

                    &:after {
                            transform: rotate(45deg);
                            -webkit-transform: rotate(45deg);
                            -moz-transform: rotate(45deg);
                            -o-transform: rotate(45deg);
                            -ms-transform: rotate(45deg);
                    }
                }
            }

            .modal-body {
                table {
                    width: 100%;
                    color: #fff;
                    text-align: center;
                }
            }
        }
        
        
    }
    .modal-shadow {
            width: 100%;
            height: 100%;
            display: block;
            position: fixed;
            top: 0;
            z-index: 299;
            left: 0;
            background: rgba(43, 35, 33, 0.9);
    }
}
</style>
