const tokenKey_ = 'accessToken';
const loginInfo_ = 'information';
const userInfo_ = 'userInfo';

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
    tokenKey: sessionStorage.getItem(tokenKey_),
    userInfo: emptyUserInfo_
}

const mutations = {
    getUserDetails () {

    },

    logoutUser (state) {
        console.log('--- BEFORE LOGOUT ---');
        console.log(state.userInfo);
        console.log(state.tokenKey);

        
        sessionStorage.removeItem(tokenKey_);
        window.localStorage.removeItem(loginInfo_);
        sessionStorage.removeItem(userInfo_);
        
        state.tokenKey = ''
        state.userInfo = emptyUserInfo_;

        console.log('--- AFTER LOGOUT ---');
        console.log(state.userInfo);
        console.log(state.tokenKey);
        debugger;
    }
}

const getters = {

}

const actions = {
    
}

export default {
    state,
    getters,
    mutations,
    actions
}




