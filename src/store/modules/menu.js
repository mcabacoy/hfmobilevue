const state ={
    currentpage: '',
    pages:[
        {
            link: 'Homepage',
            linktype: 'internal',
            name: '鸿福首页',
            class: 'icon1',
            type: 'sidemenu'
        },
        {
            link: 'WalletRecharge',
            linktype: 'internal',
            name: '充值中心',
            class: 'icon2',
            type: 'sidemenu'
        },
        {
            link: 'Transfers',
            linktype: 'internal',
            name: '平台转账',
            class: 'icon3',
            type: 'sidemenu'
        },
        {
            link: 'Promotion',
            linktype: 'internal',
            name: '优惠活动',
            class: 'icon4',
            type: 'sidemenu'
        },
        {
            link: 'VIP',
            linktype: 'internal',
            name: 'VIP特权',
            class: 'icon5',
            type: 'sidemenu'
        },
        {
            link: 'http://kefu.cckefu.com/vclient/chat/?websiteid=132526',        
            linktype: 'external',
            name: '在线客服',
            class: 'icon6',
            type: 'sidemenu'
        },
        {
            link: 'BankCard',
            linktype: 'internal',
            name: '个人信息',
            class: 'icon7',
            type: 'sidemenu'
        },
        {
            link: 'Signin',
            linktype: 'internal',
            name: '签 到',
            class: '',
            type: 'back'
        },
        {
            link: 'Wallet',
            linktype: 'internal',
            name: '中心钱包',
            class: '',
            type: 'back'
        },
        {
            link: 'GameList',
            linktype: 'internal',
            name: 'GameList',
            class: '',
            type: 'back'
        },
        {
            link: 'UserInfoBind',
            linktype: 'internal',
            name: '绑定',
            class: '',
            type: 'back'
        }
    ]
}

const getters = {
    getMenuByLink (state) {
        var item = state.pages.find( item => item.link == state.currentpage );
        if (item == null || typeof item == 'undefined')
            return '';
        return item.name;
    },
    getMenuTypeLink (state) {
        var item = state.pages.find( item => item.link == state.currentpage );
        if (item == null || typeof item == 'undefined')
            return '';
        return item.type;
    },
    getSideMenus (state) {
        return state.pages.filter( item => item.type == 'sidemenu' );
    }
}

const mutations = {
    setCurrentPage (state, payload)
    {
        state.currentpage = payload
    }
}

export default{
    state,
    mutations,
    getters
}