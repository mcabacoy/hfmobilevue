<template>
    <div class="registration">
        <header class="reg-header">
            <span class="cancel" @click="goBack()">取消</span>
            <span class="header-title">找回密码</span>
            <span class="cancel" @click="goBack()">取消</span>
        </header>
        <div class="reg-body">
            <div class="reg-input text-control">
                <span class="input-label">HF用户名</span>
                <input class="input-control" placeholder="5-10个字母或数字" 
                    type="text" maxlength="12">
            </div>
            
            <div class="reg-input date-control">
                <span class="input-label">出生年月</span>
                <input class="input-control"
                    placeholder="请输入出生日期" 
                    type="date" maxlength="12">
            </div>

            <div class="reg-input option-control">
                <span class="input-label">性 别</span>
                <div class="input-options-control">
                    <div class="item">
                        <span class="radio-circle"></span>
                        <input type="radio" class="item-control">
                        <label class="item-label">男</label>
                    </div>                           
                    <div class="item selected">
                        <span class="radio-circle"></span>
                        <input type="radio" class="item-control">
                        <label class="item-label">女</label>
                    </div> 
                </div>
            </div>

            <div class="reg-input captcha-control">
                <div><img src="../../static/img/CaptchaImages/sample.png" class="captcha-img" /></div>
                <input class="input-control" placeholder="请输入验证码" 
                    autocomplete="off" type="text" maxlength="6">
            </div>

            <div class="submit-btn">注册</div>

          


        </div>
        <div class="reg-footer">
            <a href="/Login">已有鸿福账号，请登录</a>
            <a href="javascript:;" class="Button-light disabled" 
                data-bind="click:reg" disabled="disabled" style="cursor: not-allowed;">注册</a>
        </div>

    </div>
</template>
<script>
export default {

}
</script>
<style lang="stylus" rel="stylesheet/stylus" >

.registration {
    overflow: hidden;
    position: relative;
    height: auto;
    background: #56001c;
    background: -webkit-linear-gradient(0deg, #56001c, #d2341a);
    background: -o-linear-gradient(0deg, #56001c, #d2341a);
    background: -moz-linear-gradient(0deg, #56001c, #d2341a);
    background: linear-gradient(0deg, #56001c, #d2341a);
    padding-bottom: .5rem;

    .reg-header {
        margin-top:.4rem !important;
        width: 100%;
        height: 0.6rem;
        display: table;
        text-align: center;
        line-height: 0.6rem;
        font-size: 0.4rem;
        margin: 0 auto;
        margin-bottom: 0.8rem;
       
        .cancel {
            font-size: 0.3rem !important;
            color: #fff;
        }

        .header-title  {
            display: table-cell;
            color: #fff !important;
            text-align: center;
            line-height: 0.6rem;
            font-size: 0.4rem;
        }
    }

    .reg-body {
        width: 4.8rem;
        height: auto;
        margin: 0 auto;

        div.reg-input {
            height: 0.7rem;
            width: 4.8rem;
            border-radius: .1rem;
            background: rgba(0, 0, 0, 0.15);
            margin-bottom: 0.25rem;

            span.input-label {
                    width: 1.7rem;
                    height: 0.3rem;
                    display: block;
                    color: #ffc000;
                    padding-top: .13rem;
                    padding-left: .15rem;
                    font-size: .3rem;
            }

            input.input-control {
                width: 60%;
                height: 0.44rem;
                position: relative;
                left: 1.55rem;
                top: -0.18rem;
                border: none;
                font-size: 0.27rem;
                outline: none;
                -webkit-tap-highlight-color: rgba(0,0,0,0);
                background-color: transparent;
                border-left: 1px solid #ffc000;
                padding-left: .2rem;
                color: #fff;
                border-radius: 0 !important;
            }

            div.input-options-control {
                border-left: 1px solid #ffc000;
                position: relative;
                left: 1.54rem;
                top: -0.18rem;
                width: 60%;
                height: .45rem;
                padding-left: .1rem;
                padding-top: .04rem;
                border-radius: 0;
                display: flex;

                .item {
                    margin-right: .3rem;
                    
                    span.radio-circle {
                        background-size: 100%;
                        width: .5rem;
                        height: 0.4rem;
                        border: none;
                        display: inline-block;
                        vertical-align: middle;

                        background-image: url(../../static/img/Login/201.png) !important;
                        background-position-x: 70%;
                        background-position-y: 65%;
                        background-repeat: no-repeat;
                    
                        padding-top: .13rem;
                        padding-left: .15rem;
                        font-size: .3rem;
                    }

                    input[type="radio"].item-control {
                        width: auto;
                        height: auto;
                        -webkit-appearance: radio;
                        -moz-appearance: button;
                        appearance: radio;
                        top: 0;
                        left: 0;
                        position: absolute;
                        visibility: hidden;
                    }

                    label.item-label {
                        color: rgb(196, 180, 178);
                    }

                    &.selected {
                        span.radio-circle {
                            background-image: url(../../static/img/Login/200.png) !important;
                        }

                        label.item-label {
                            color: rgb(255, 192, 0) !important;
                       }
                    }
                }

                
            }

            img.captcha-img {
                margin-top: .2rem;
                margin-left: .03rem;
                width: 28%;
                display: block;
            }
            
        }


        div.submit-btn {
            width: 4.5rem;
            height: 0.8rem;
            background: #ef8d00;
            background: -webkit-linear-gradient(0deg, #ef8d00, #ffae00);
            background: -o-linear-gradient(0deg, #ef8d00, #ffae00);
            background: -moz-linear-gradient(0deg, #ef8d00, #ffae00);
            background: linear-gradient(0deg, #ef8d00, #ffae00);
            border-radius: .1rem;
            color: #fff;
            font-size: 0.3rem;
            text-align: center;
            line-height: 0.8rem;
            margin-bottom: 0.4rem;
            margin-top: .7rem;
        }
    }


    .reg-footer {
        text-align: center;
        font-size: 0.2rem;
        margin: 0 auto;
        
        a {
            color: #fd8172;
            font-size: .24rem;
            border-bottom: 1px solid #fd8172;
            padding-bottom: 4px;
        }

        .disabled {
            cursor: not-allowed;
        }
    }
}



</style>
