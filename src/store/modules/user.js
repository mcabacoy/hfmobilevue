var qs = require("querystring");
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
    // tokenKey: sessionStorage.getItem(tokenKey_),
    // userInfo: emptyUserInfo_,
    notices: [],
}

const getters = {
    currentUser: state => {
        return {
            tokenKey : sessionStorage.getItem(tokenKey_),
            userInfo : (sessionStorage.getItem( userInfo_ ))
        }
    },
    getNotices: state => {
        return state.notices;
    }
}


const mutations = {
    setUserInfo  (state, payload) {
        state.userInfo_ = payload;
    },
    clearSessions (state) {
        // state.userInfo = emptyUserInfo_;
        state.tokenKey = ''
        sessionStorage.removeItem(tokenKey_);
        window.localStorage.removeItem(loginInfo_);
        sessionStorage.removeItem(userInfo_);
    },
    storeUserInfoSession(state, payload){
        state.userInfo = payload;
        sessionStorage.setItem(userInfo_, payload);
    },
    storeNoticesSession(state, payload){
        sessionStorage.setItem(userInfo_, payload );
        state.notices = payload;
    },
    logout(state, payload){
        state.tokenKey = ''
        sessionStorage.removeItem(tokenKey_);
        window.localStorage.removeItem(loginInfo_);
        sessionStorage.removeItem(userInfo_);
        
    }
}

export default {
    state,
    getters,
    mutations
}




