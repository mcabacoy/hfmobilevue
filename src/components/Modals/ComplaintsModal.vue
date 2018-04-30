<template>
     <div >
        <div class="allmask"></div>
         <transition name="modaltrans">
            <div class="compbox"  v-if="display">
                <div class="modal">
                    <div class="modal-header">
                        全民行动 有奖投诉
                        <div class="dema_kong" @click="closeModal"><span class="demoSpan2"></span></div>
                    </div>
                    <div class="modal-body">
                        <p style="margin-bottom:.2rem;">请选择要投诉的问题</p>
                        <ul class="listissues">
                            <li  @click="selectReport(1)" :class="[ reportType == 1 ?  'active' : '']" style="line-height: .3rem;">存款/<br>提现问题</li>
                            <li  @click="selectReport(2)" :class="[ reportType == 2 ?  'active' : '']" style="line-height: .3rem;">游戏卡顿/<br>闪退问题</li>
                            <li  @click="selectReport(3)" :class="[ reportType == 3 ?  'active' : '']" style="padding:.3rem 0;">客服回复问题</li>
                            <li  @click="selectReport(4)" :class="[ reportType == 4 ?  'active' : '']" style="padding:.3rem 0;">网站体验问题</li>
                        </ul>
                        <p style="margin-top:1.3rem;">请输入您的发生时间</p>
                        <input v-model="reportDate" type="date" class="form-control complaintPhone" placeholder="请输入您的发生时间">

                        <p style="margin-top:.3rem;">请描述投诉内容的具体细节</p>
                        <textarea v-model="reportContent" rows="8" placeholder="请填写详细描述:(如：3月8日 20：00左右 手机网页版添加银行卡时没有选项/咨询客服无回应等；)" class="Complaints"></textarea>
                    </div>
                    <input  @click="submitIssue" type="button" class="submitissue" value="确认提交">
                </div>
            </div>
         </transition>
         <notification :message="notifmessage" @close="closeNotif"  v-if="notifmessage!=''"/>
    </div>
</template>

<script>

import { ADD_CUSTOMER_COMPLAIN } from './../../api'
import Notification from './../Common/Notification'
import { mapGetters } from 'vuex'
export default {
    components: {
         Notification
    },
    data(){
        return {
            display: false,
            reportType: 1,
            reportDate: '',
            reportContent: '',
            notifmessage: ''
        }
    },
    computed: {
        ...mapGetters ({
            currentUser: 'currentUser'
        })
    },
    methods: {
        closeNotif(){
            this.notifmessage = ''
        },
        selectReport(payload){
            this.reportType = payload;

        },
        closeModal: function (){
            this.display = false;
                this.$nextTick(() => {
                    setTimeout(()=>{
                        this.$emit('closeModal')
                    }, 250);
                });
        },
        submitIssue: function (payload) {
            let that_ = this;
            let reportTitle = '';
            switch ( this.reportType ){
                case 1:
                    reportTitle = '存款/提现问题';
                    break;
                case 2:
                    reportTitle = '游戏卡顿/闪退问题';
                    break;
                case 3:
                    reportTitle = '客服回复问题';
                    break;
                case 4:
                    reportTitle = '网站体验问题';
                    break;
                default:
                    reportTitle = '存款/提现问题';
                    break;
            }

            if (this.reportDate == null || this.reportDate == ''  )
            {
                this.notifmessage = ("请填写您的时间");
                return;
            }
            if (this.reportContent == null || this.reportContent == ''  )
            {
                this.notifmessage = ("请填写您的时间");
                return;
            }

            let config = {
                headers: {
                    'Authorization': 'Bearer ' + this.currentUser.tokenKey,
                }
            };
            let postData = {
                title: reportTitle,
                content: this.reportContent,
                mobile: this.reportDate
            };
            this.$http.post(  ADD_CUSTOMER_COMPLAIN , postData )
            .then( function(res){ 
                that_.notifmessage = res.data;
                that_.$nextTick(() => {
                    setTimeout(()=>{
                        that_.closeModal();
                    }, 3000);
                });
            })
            .catch( function(error){
                console.log(error);

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

<style lang="stylus" rel="stylesheet/stylus" scoped>
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

.allmask {
    background: rgba(43, 35, 33, 0.9);
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 299;
    top: 0;
}
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
.compbox{
    width: 6rem;
    height:auto;
    left: .2rem;
    z-index:300;
    top:1rem;
    position: absolute;
    border-radius: .12rem;

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
        border-radius: .15rem .15rem 0 0;
        text-align: center;
        border-bottom: 1px solid #dddddd;
    }
    .modal-body{
        background: #fff;
        padding: .3rem .15rem;

        ul li{
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
    .form-control{
        background: #f2f2f2;
        border: 1px solid #e0e0e0;
        border-radius: .08rem;
        width: 4.2rem;
        margin-top:.1rem;

        height: 34px;
        padding: 6px 12px;
        font-size: 14px;
        line-height: 1.42857143;
        color: #555;
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
