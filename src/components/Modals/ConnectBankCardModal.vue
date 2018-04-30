<template>
    <div class="connect-bankcard">
        <div class="modal">
            <div class="modal-container">
                <div class="modal-header">
                    <span>绑定银行卡</span>
                    <div class="close-modal"  @click="closeModal">
                    </div>
                </div>
                <div class="modal-body">
                    <ul>
                        <li>
                            <div class="form-group">
                                <div class="input-label">开户银行</div>
                                <div class="input-item">
                                    <!-- Bank Account Select -->
                                    <span class="arrowbox"></span>
                                    <select class="form-control" v-model="bankCode" >
                                        <option v-for="(item,index) in getBankTypes" :key="index" :value="item.value">
                                            {{ item.name }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="form-group">
                                <div class="input-label">开户姓名</div>
                                <div class="input-item">
                                    <!-- Account Name -->
                                    <input type="text" class="form-control" disabled v-model="cardOwnerName">
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="form-group">
                                <div class="input-label">银行账号 </div>
                                <div class="input-item">
                                    <!-- Bank Address -->
                                    <input type="text" class="form-control" v-model="cardNo">
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="form-group">
                                <div class="input-label">开户地址</div>
                                <div class="input-item">
                                    <!--Account Opening Address -->
                                    <input type="text" class="form-control" v-model="bankAddress">
                                </div>
                            </div>
                        </li>
                    </ul>

                    <div class="modal-footer">
                        <button type="submit" 
                            class="btn" @click="addBankCard">确  定</button>
                    </div>
                </div>
            </div>
        </div>


        <notification :message="notifmessage" @close="closeNotif"  v-if="notifmessage!=''"></notification>
    </div>
</template>

<script>
import { ADD_BANK_CARD } from '../../api'
import { mapState, mapGetters, mapMutations } from 'vuex'
import Notification from './../Common/Notification'

export default {
    components: { Notification },
    props: ['cardowner'],
    data(){
        return {
            cardOwnerName: this.cardowner,
            cardNo: '',
            bankAddress: '',
            bankCode: '',
            notifmessage: ''
        }
    }, 
    computed: {
        ...mapGetters(["getBankTypes", "currentUser"])
    },
    methods: {
        closeModal: function (){
            this.$emit('closeModal')
        },

        addBankCard(){
            let that_ = this;

            if ( this.cardOwnerName == null || this.cardOwnerName.length == 0){
                this.notifmessage = ("请输入收款人姓名");
                return false;
            }
            if  ( this.cardNo == null || this.cardNo.length == 0 ){
                 this.notifmessage = ("请输入银行账号");
                 return false;
            }
            if  ( this.bankAddress == null || this.bankAddress.length == 0 ){
                 this.notifmessage = ("请输入开户银行地址");
                 return false;
            }
            let postData = {
                Id: 0,
                BankName: this.bankCode,
                CardOwnerName: this.cardOwnerName,
                CardNo: this.cardNo,
                BankAddress: this.bankAddress,
                IsDefault: true,
                BankCode: this.bankCode
            };
            let config = { headers: { 'Authorization': 'Bearer ' + this.currentUser.tokenKey } };
            this.$http.post( ADD_BANK_CARD , postData, config )
            .then( function (){
                that_.$emit("refresh");
                that_.$emit("closeModal");
            })
            .catch( function (){ });
        }
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" >

.connect-bankcard {
    display: block;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    z-index: 9999;
    background-color: rgba(0,0,0,0.5);

    .modal {
        background: #f4f4f4;
        border-radius: 8px;
        width: 5.3rem;
        position: fixed;
        z-index: 99999;
        top: 36%;
        margin-top: -2rem;
        left: 50%;
        margin-left: -2.7rem;

       .form-control {
            background: none !important;
            width: 95%;
            color: #000;
            font-size: 0.31rem !important;
            position: relative;
            z-index: 9999;
            height: 0.6rem;
            padding: 6px 12px;
            line-height: 1.42857143;
            display: block;
        }

        .modal-header {
            height: 1rem;
            background-color: #fff;
            display: block;
            line-height: 1rem;
            padding-left: 0.58rem;
            font-size: .3rem;
            border-radius: 8px 8px 0 0;
            text-align: center;
            color: #ca0626;
            border-bottom: 1px solid #dddddd;

            .close-modal {
                    width: .4rem;
                    display: block;
                    height: .4rem;
                    position: relative;
                    float: right;
                    margin-top: .3rem;
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
            background: #f4f4f4;
            border-radius: 0 0 8px 8px;

            ul {
                padding-left: .26rem;
                li div {
                    display: inline-block;
                    vertical-align: middle;
                    
                    .input-label {
                        width: 1.2rem;
                        text-align: center;
                    }

                    .input-item {
                        width: 3.6rem;
                        padding: .19rem 0;
                        border-bottom: 1px solid rgba(221 , 221, 221, 0.7);

                        .label-only {
                            margin-left: .25rem;
                            height: .6rem;
                            line-height: .6rem;
                            font-size: .29rem
                        }

                        .arrowbox {
                                background: #ca0626;
                            padding: .26rem .38rem;
                            position: absolute;
                            top: 24%;
                            margin-top: -.2rem;
                            right: .33rem;
                            border-radius: 3px;

                            &:before {
                                content: '';
                                height: .2rem;
                                width: .2rem;
                                display: block;
                                border: 1px solid #fff;
                                border-right-width: 0;
                                border-top-width: 0;
                                transform: rotate(-45deg);
                                -webkit-transform: rotate(-45deg);
                                -moz-transform: rotate(-45deg);
                                -o-transform: rotate(-45deg);
                                -ms-transform: rotate(-45deg);
                                position: absolute;
                                top: 50%;
                                margin-top: -.16rem;
                                right: 37%;
                            }
                        }
                    }
                }
            }

        }

        .modal-footer {
            padding: .1rem .32rem .1rem .32rem;
            background: #ca0626;
            border-radius: 0 0 5px 6px;

            .btn {
                display: inline-block;
                margin-bottom: 0;
                font-size: .3rem;
                font-weight: 400;
                line-height: 1.42857143;
                text-align: center;
                white-space: nowrap;
                vertical-align: middle;
                -ms-touch-action: manipulation;
                touch-action: manipulation;
                cursor: pointer;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                background-image: none;
                border: 1px solid transparent;
                border-radius: 4px;
                cursor: pointer;
                width: 4.8rem;
                height: 0.66rem;    
                color: rgb(255, 255, 255);
                background: none;
            }
        }

    }
}

</style>
