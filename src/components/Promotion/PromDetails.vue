<template>
<div class="promdetail-wrap">
    <div class="offerdetails-content">
        <img :src="require('../../../static/img/images-app/' + [promDetail.promSrc])">
    </div>

    <div class="offerdetail-btns"
        v-if="promDetail.promType == promType">
        <div v-html="promDetail.promDetails"></div>
    </div>
</div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
export default {
    data(){
        return {
            promType: this.$route.params.promtype,
            //content: promDetail.promDetails
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
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.offerdetail-btns >>> .font600{
    font-weight: 600;
}
.offerdetail-btns >>> .font400{
    font-weight:400;
}
.offerdetail-btns >>> .red{
    color:#bb1515 !important;
}
.offerdetails-content img{
    width:100%;
}
.promdetail-wrap{
    margin-top: 1rem;
    height: 100%;
    background:#fff;
}
.offerdetail-btns{
    width: 100%;
    padding: .35rem .3rem;
    background:#fff;

    >>> p,
    >>> ol li{
        color: #494949;
        line-height: .4rem;
        font-size: .22rem;
    }
    >>> ol{
        list-style-type: decimal;
        margin-left: .23rem;
    }
    >>> table{
        width: 100%;
        font-size: .2rem;
        text-align: center;
    }
    >>> table td{
        border: 1px solid #000;
        padding: .06rem 0;
    }
}
</style>
