
var qs = require("querystring");

import { USERINFO } from './../../api';
import Axios from './../../utils/axios'
import Router from 'vue-router';


const tokenKey_ = 'accessToken';
const loginInfo_ = 'information';
const userInfo_ = 'userInfo';
const hfNotices_ = 'gethfnotices';

const emptyUserInfo_ =  {
    AccountLevel:0,
    AccountName:"",
    AgentCode:"",
    Balance:0,
    BirthDate:"", //YYYY-MM-DD
    DayWithdrawCount: 0,
    DayWithdrawMax: 0,
    Email:"",
    Id: 0,
    IsBanBound: false,
    IsBasicBound: false,
    IsEmailBound: false,
    IsPhoneBound: false,
    LastLogin: "", //"2018-04-18 13:18"
    LgPassword: "",
    Mobile: "",
    Password: "",
    QQ:"",
    RealName: "",
    RegisterTime: "",  //"2018-04-17 19:37"
    Sex: false,
    UserLevel: 0,
    VipLevel: 0,
    Wechat: "",
    spLink: null
}

const state = {
    tokenKey: '',
    userInfo: {},
    announcements: [],
    loginresultmessage: ''
}

const getters = {
    currentUser: state => {
        return {
            tokenKey : state.tokenKey,
            userInfo : state.userInfo,
            announcements : state.announcements
        }
    },
    getNotices: state => {
        return state.announcements;
    }
}

const mutations = {
    getSessions (state){
        state.tokenKey = sessionStorage.getItem(tokenKey_);
        state.userInfo = qs.parse(sessionStorage.getItem( userInfo_ ));
        state.announcements = JSON.parse(sessionStorage.getItem( hfNotices_ ));
    },
    setUserInfo  (state, payload) {
        state.userInfo_ = payload;
    },
    clearSessions (state) {
        state.tokenKey = '';
        sessionStorage.removeItem(tokenKey_);
        window.localStorage.removeItem(loginInfo_);
        sessionStorage.removeItem(userInfo_);
        sessionStorage.clear();
        localStorage.clear();
    },
    storeUserInfoSession(state, payload){
        state.userInfo = payload;
        sessionStorage.setItem(userInfo_, (payload));
    },
    storeNoticesSession(state, payload){
        sessionStorage.setItem(hfNotices_, payload );
        state.announcements = payload;
    },
    logoutUser(state, payload){
        state.tokenKey = '';
        state.userInfo = {};
        sessionStorage.removeItem(tokenKey_);
        window.localStorage.removeItem(loginInfo_);
        sessionStorage.removeItem(userInfo_);
        sessionStorage.clear();
        localStorage.clear();
        // Router.push({ path: '../Login'    });
    },
    requestAccountInfo (state, successCallback, scPayload){
            let config = { headers: { 'Authorization': 'Bearer ' + state.tokenKey } };
            let that_ = this;
            Axios.get( USERINFO,  config )
            .then( function(res){
                sessionStorage.setItem(userInfo_, qs.stringify(res.data.Value));
                that_.state.userInfo = res.data.Value;
                if (typeof successCallback != 'undefined') {
                    successCallback(scPayload);
                }
            })
            .catch( function(error){ 
            });
    }
}

export default {
    state,
    getters,
    mutations
}




