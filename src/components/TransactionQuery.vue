<template>
<div id = "transaction-query">
    <ul class="transac_nav">
        <li @click="setTab('transactq')" 
            :class="[ ('transactq'=== this.opentab ? 'active' : '') , 'tab' , 'transactq']">
            交易记录</li>
        <li @click="setTab('transactbet')" 
            :class="[ ('transactbet'=== this.opentab ? 'active' : '') , 'tab' , 'transactbet']">
            投注记录</li>
    </ul>
    <trans-records :selectedtab="opentab"></trans-records>
</div>
</template>
<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
import TransRecords from './TransactionQuery/TransactRecords'
export default {
    components: { TransRecords },
    data(){
      return {
          opentab: 'transactq',
      }
    },
    methods: {
        ...mapMutations (['setCurrentPage']),
        routePage: function(pageName){
            this.$router.push({ path: pageName });
        },
        setTab: function(payload){
            this.opentab =  payload;
        },
        getURL() {
            return this.imgsrc;
        }
    },
    created() {
      this.setCurrentPage('TransactionQuery');
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.transac_nav{
    position: relative;
    top: 1.1rem;
    overflow: hidden;

    li{
        float: left;
        width: 50%;
        text-align: center;
        padding: .31rem;
        background: #989387;
        color: #e1e1e1;
        font-size: .26rem;
    }
    li.active{
        background: #ffd800;
        color: #232323;
    }
}
</style>