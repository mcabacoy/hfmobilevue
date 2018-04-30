<template>
<div>
    <div class="floater">
        <img :src="(link)"  @click="displayComplaint = true">
    </div>

    <complaints-modal @closeModal="closeModal" v-if="displayComplaint" ></complaints-modal>
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


</style>