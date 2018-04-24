<template>
<div class="promdetail-wrap">
    <div class="offerdetails-content">
        <img :src="require('../../../static/img/images-app/' + [promDetail.promSrc])">
    </div>

    <div class="offerdetail-btns"
        v-if="promDetail.promType == 1">
        <div v-html="promDetail.promDetails"></div>
    </div>
    <div class="offerdetail-btns"
        v-else-if="promDetail.promType == 2">
    <p>dfjdshfd</p>
    </div>
</div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
export default {
    data(){
        return {
            promType: this.$route.params.promtype
         }
     },
    methods: {
        ...mapMutations (['setCurrentPage']),
        ...mapGetters ({
            getPromotionDetail: 'getPromotionDetail'
        }),
    },
    created() {
      this.setCurrentPage('PromDetails');
      this.promDetail = this.$store.getters.getPromotionDetail(this.promType);
      console.log(this.promDetail);
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.font600{
    font-weight: 600;
}
.red{
    color:#bb1515 !important;
}
.offerdetails-content img{
    width:100%;
}
.promdetail-wrap{
    margin-top: 1rem;
    height: 100%;
}
.offerdetail-btns{
    width: 100%;
    padding: .35rem .3rem;
    background:#fff;

    p{
        color: #494949;
        line-height: .4rem;
        font-size: .22rem;
    }
    table{
        width: 100%;
        font-size: .2rem;
        text-align: center;
    }
    table td{
        border: 1px solid #000;
        padding: .06rem 0;
    }
}
</style>
