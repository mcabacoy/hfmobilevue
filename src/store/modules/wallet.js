const state = {
    defaultmethod: 'WeChatBankCard',
    selectedmethod: '',
    paymentmethod: [
        {
            name: 'WeChatBankCard',
            description: '微信转银行卡',
            customclass: 'wechatbankcard',
            logo: '/src/assets/BankCard.png',
            target: 'tabs-BankCard',
            recharger: {
              headertype: 'limit',
              limit: {
                from: 100,
                to: 2999,
                label: '单笔充值限额',
                preposition: '至',
                currency: '元'
              },
              placeholder: '请输入存款金额',
              defaultvalue: '',
              aditionalremarks: ''
            }
        },
        {
            name: 'WeChatTransfer',
            description: '微信转账',
            customclass: 'wechattransfer',
            logo: '/src/assets/wechat_icon.png',
            target: 'tabs-scanCode',
            recharger: {
              headertype: 'exclusive',
              exlcusive: {
              },
              
              placeholder: '单笔最低限额: 20',
              defaultvalue: '',
              aditionalremarks: ''
            }
        },
        {
            name: 'WeChatScanCode',
            description: '微信扫码',
            customclass: 'wechatscancode',
            logo: '/src/assets/wechat-ico.png',
            target: 'tabs-wechatpay',
            recharger: {
              headertype: 'limit',
              limit: {
                from: 31,
                to: 2999,
                label: '单笔充值限额',
                preposition: '至',
                currency: '元'
              },
              placeholder: '请输入不是整数的金额',
              defaultvalue: '',
              aditionalremarks: '*温馨提示：若提交订单失败请等待90秒后重试！建议使用"快捷支付""QQ扫码"'
            }
        },
        {
            name: 'QQScanCode',
            description: 'QQ扫码',
            customclass: 'qqscancode',
            logo: '/src/assets/qq-have.png',
            target: 'tabs-qq',
            recharger: {
              headertype: 'limit',
              limit: {
                from: 31,
                to: 299,
                label: '单笔充值限额',
                preposition: '至',
                currency: '元'
              },
              placeholder: '请输入整数金额',
              defaultvalue: '',
              aditionalremarks: '*如果无法完成充值，建议使用“快捷支付”'
            }
        },
        {
            name: 'AlipayScanCode',
            description: '支付宝扫码',
            customclass: 'alipayscancode',
            logo: '/src/assets/alipay-ico.png',
            target: 'tabs-alipayScanCode',
            recharger: {
              headertype: 'limit',
              limit: {
                from: 51,
                to: 999,
                label: '单笔充值限额',
                preposition: '至',
                currency: '元'
              },
              placeholder: '请输入不是整数的金额',
              defaultvalue: '',
              aditionalremarks: ''
            }
        },
        {
            name: 'RechargeOnline',
            description: '在线充值',
            customclass: 'rechargeonline',
            logo: '/src/assets/wallet-ico.png',
            target: 'tabs-online',
            recharger: {
              headertype: 'limit',
              limit: {
                from: 20,
                to: 50000,
                label: '单笔充值限额',
                preposition: '至',
                currency: '元'
              },
              placeholder: '请输入整数金额',
              defaultvalue: '',
              aditionalremarks: '*如果无法完成充值，建议使用“快捷支付”“QQ扫码”'
            }
        },
        {
            name: 'QuickPayment',
            description: '快捷支付',
            customclass: 'quickpayment',
            logo: '/src/assets/unionpay.png',
            target: 'tabs-fast',
            recharger: {
              headertype: 'limit',
              limit: {
                from: 20,
                to: 50000,
                label: '单笔充值限额',
                preposition: '至',
                currency: '元'
              },
              placeholder: '请输入整数金额',
              defaultvalue: '',
              aditionalremarks: '*如果无法完成充值，建议使用“快捷支付”“QQ扫码”'
            }
        },
        {
            name: 'OnlineBanking',
            description: '网银',
            customclass: 'onlinebanking',
            logo: '/src/assets/unionpay.png',
            target: 'tabs-union',
            recharger: {
              headertype: 'limit',
              limit: {
                from: 100,
                to: 2999,
                label: '单笔充值限额',
                preposition: '至',
                currency: '元'
              },
              placeholder: '请输入存款金额',
              defaultvalue: '',
              aditionalremarks: ''
            }
        },
        {
            name: 'FlashPayment',
            description: '云闪付',
            customclass: 'flashpayment',
            logo: '/src/assets/quick-icon.png',
            target: 'tabs-union',
            recharger: {
              headertype: 'limit',
              limit: {
                from: 100,
                to: 2999,
                label: '单笔充值限额',
                preposition: '至',
                currency: '元'
              },
              placeholder: '请输入整数金额',
              defaultvalue: '',
              aditionalremarks: ''
            }
        }
    ]
}

const getters = {
    getMethodDetails (state) {
        var item = state.paymentmethod.find( item => item.name == ( state.selectedmethod == '' ? state.defaultmethod :  state.selectedmethod ));
        return item;
    }
}

const mutations = {
    selectMethod (state, payload ) {
        state.selectedmethod = payload;
    }
}

export default {
    state,
    getters,
    mutations
}