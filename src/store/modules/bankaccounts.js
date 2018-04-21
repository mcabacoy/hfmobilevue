
const state = {
    bankaccounttypes: [
        {
            name: '中国工商银行',
            value: 'ICBC',
            logo: '../../static/img/bank2.png'
        },
        {
            name: '中国农业银行',
            value: 'ABC',
            logo: '../../static/img/bank2.png'
        },
        {
            name: '中国招商银行',
            value: 'CMB',
            logo: '../../static/img/bank2.png'
        },
        {
            name: '中国建设银行',
            value: 'CCB',
            logo: '../../static/img/bank2.png'
        },
        {
            name: '中国交通银行',
            value: 'COMM',
            logo: '../../static/img/bank2.png'
        },
        {
            name: '中国银行',
            value: 'BOC',
            logo: '../../static/img/bank2.png'
        },
        {
            name: '中国光大银行',
            value: 'CEB ',
            logo: '../../static/img/bank2.png'
        },
        {
            name: '中国民生银行',
            value: 'CMBC',
            logo: '../../static/img/bank2.png'
        },
        {
            name: '中信银行',
            value: 'CITIC',
            logo: '../../static/img/bank2.png'
        },
        {
            name: '平安银行',
            value: 'SZPAB',
            logo: '../../static/img/bank2.png'
        },
        {
            name: '上海浦东发展银行',
            value: 'SPDB',
            logo: '../../static/img/bank2.png'
        },
        {
            name: '兴业银行',
            value: 'CIB',
            logo: '../../static/img/bank2.png'
        },
        {
            name: '邮政银行',
            value: 'POST-NET',
            logo: '../../static/img/bank2.png'
        }
    ]
}

const getters = {

    getBankTypeByName (state, payload) {
        return payload => state.bankaccounttypes.find( function( e ){
            return e.value === payload;
        });
    },
    getBankTypes (state) {
        return  state.bankaccounttypes;
    }
    
}



export default {
    state,
    getters
}