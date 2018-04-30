<template>
<div>
    <div class="floater">
        <img :src="(link)"  @click="displayComplaint = true">
    </div>
    <complaints-modal v-if="displayComplaint" @closeModal="closeModal"></complaints-modal>
 </div>   
</template>

<script>
import ComplaintsModal from './../Modals/ComplaintsModal'
export default {
  name: 'floater',
  props: ['imgsrc'],
  data(){
      return {
          link: this.imgsrc,
          displayComplaint: false
      }
  },
components: { ComplaintsModal },
  methods: {
    getURL() {
      return this.imgsrc;
    },
    closeModal(){
        this.displayComplaint = false;
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
 .floater {
    position: relative;
    animation: Transversal 5s linear infinite;

    @keyframes Transversal {
        0% {
            top: .5rem;
            }
        50% {
                top: 0;
            }
        100% {
                top: .5rem;
            }
    }

    img {
        position: absolute; 
        z-index: 99; 
        right: .2rem; 
        width: 16%; 
        top: .3rem;
        animation: beat 5.8s linear infinite ;
        margin: 0 auto;
        display: block;
    }

    .beat {
        animation: beat .8s linear 1;
        margin: 0 auto;
        display: block;
    }
    
    @keyframes beat {
        0%, 86.20% {
            position: absolute; 
            z-index: 99; 
            right: .2rem; 
            width: 16%; 
            top: .3rem;  
        }
        86.21% {
            width:19%;
        }
        93.10% {
            width: 16%;
        }
        96.55% {
            width:20%;
        }
        100% {
            width: 16%;
        }
    }
}
.allmask {
    background: rgba(43, 35, 33, 0.9);
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 299;
    top: 0;
}
.compbox{
    z-index: 151;
    position: absolute;
    border-radius: .12rem;
    width: 6rem;
    height:auto;
    left: .2rem;
    z-index:300;
    top:.8rem;

    .modal-header{
        height: .8rem;
        line-height: .8rem;
        background: #f3552a;
        background: -webkit-linear-gradient(#f3552a, #c11042);
        background: -o-linear-gradient(#f3552a, #c11042);
        background: -moz-linear-gradient(#f3552a, #c11042);
        background: linear-gradient(#f3552a, #c11042);
        color:#fff;

        padding-left: 0.58rem;
        font-size: .3rem;
        border-radius: .16rem .16rem 0 0;
        text-align: center;
        border-bottom: 1px solid #dddddd;

        .dema_kong{
            width: .4rem;
            display: block;
            height: .4rem;
            position: relative;
            float: right;
            margin-top: .06rem;

            .demoSpan2:before, .demoSpan2:after{
                content: '';
                height: .03rem;
                width: .4rem;
                display: block;
                background: #fff !important;
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
                transform: rotate(45deg);
                -webkit-transform: rotate(45deg);
                -moz-transform: rotate(45deg);
                -o-transform: rotate(45deg);
                -ms-transform: rotate(45deg);
            }
        }
    }
    .modal-body{
        background: #fff;
        padding: .3rem .15rem;

        ul{
            li{
                float:left;
                font-size: .22rem;
                width: 1.42rem;
                text-align: center;
                background: linear-gradient(0deg, #eeeeef, #ffffff);
                border: 1px solid #cccccc;
                color: #63676f;
                padding: .11rem 0;
            }
            li:first-child{
                border-left: 1px solid #cccccc;
                border-radius: 5px 0 0 5px;
            }
            li:last-child{
                border-radius: 0 5px 5px 0;
            }
            li.active{
                background: linear-gradient(0deg, #d84207, #f8732b);
                color: #fff;
            }
        }
    }
    .form-control{
        background: #f2f2f2;
        border: 1px solid #e0e0e0;
        border-radius: .08rem;
        width: 4.2rem;
        margin-top:.1rem;
    }
    textarea{
        background: #f2f2f2;
        border: 1px solid #e0e0e0;
        border-radius: .08rem;
        width: 100%;
        padding: .2rem;
        margin-top: .15rem;
        font-size: .24rem;
        resize: none;
    }
    .submitissue{
        background: #fc7100;
        color: #fff;
        padding:.2rem 1.2rem;
        border-radius:.5rem;
        margin: 0 auto;
        display: block;
        margin-top: .2rem;
        font-size: .3rem;
    }
}
</style>