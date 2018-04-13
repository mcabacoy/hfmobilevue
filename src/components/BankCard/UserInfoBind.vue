<template>
  <div class="info-bind">
    <ul class="info-bind-container">
        <li class="info-input">
            <input type="tel" placeholder="建议使用常用手机" maxlength="11" id="phone">
            <div class="success_phone"></div>
            <div id="phone_status"></div>
        </li>
        <li class="list verification-code">
            <input type="tel" placeholder="请输入验证码" maxlength="6" id="CodeInput">
            <a class="message" id="btnSendMobileCode">获取验证码</a>
        </li>
    </ul>
    <div class="info-bind-submit">
        <a class="btn" style="cursor: not-allowed;">完成验证</a>
    </div>
</div>
</template>

<script>
import { mapState , mapMutations, mapGetters } from 'vuex'
export default {
    name: 'signin',
    methods: {
    ...mapMutations ([
       'setCurrentPage'
        ])
    },
    created() {
      this.setCurrentPage('UserInfoBind');
   }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" >

body {
    background: #e4dede;
    margin: 0;
    padding: 0;
    display: block;
}

.info-bind {
        margin-top: 1.3rem;
        width: 100%;

        ul.info-bind-container {
            margin: 5% auto 0;
            width: 92%;
            background: #fff;
            border: 1px solid #f3f3f3;
            border-radius: .1rem;

            input {
                width: 78%;
                padding-left: .2rem;
                font-size: .28rem;
                color: #3d4245;
            }

            li {
                position: relative;
                padding: 4% 4%;
                font-size: .28rem;
                color: #c6c5c5;
                border-bottom: 1px solid #f3f3f3;
            }
            
            li.info-input {
                border-bottom: 1px solid #f3f3f3;
                
                .success_phone {
                    width: 1rem;
                    height: .4rem;
                    background: url(../../../static/img/success_validate.png) no-repeat;
                    float: right;
                    background-size: 35%;
                    margin-right: -.7rem;
                }
            }

            li.verification-code {
                border-bottom: 0;

                input {
                    width: 40%;
                    padding-left: .2rem;
                    font-size: .26rem;
                    color: #3d4245;
                }
                
                a.message {
                    color: #ff6464;
                    border-left: 1px solid #f3f3f3;
                    position: absolute;
                    right: 7%;
                    bottom: 2%;
                    padding: 3.6% 0;
                    padding-left: 7%;
                }
            }
        }
}


.info-bind-submit {
    margin-top: 3%;
    text-align: center;
    cursor: not-allowed;
    line-height: .4rem;

    a.btn , a.btn:visited {
        margin: 4% auto 2%;
        background: #c61324;
        color: #fff;
        text-align: center;
        display: block;
        width: 92%;
        padding: .3rem 0;
        border-radius: .08rem;
        font-size: .31rem;
    }
}

</style>
