import Vue from 'vue/dist/vue.js';
import Vuex from 'vuex';
import mutations from './mutations'

import menu  from './modules/menu'
import platfrom from './modules/platform'
import wallet from './modules/wallet'

function getRegCarrier() {
  let regCarrier;
  var isiOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  if (isiOS) {
    if (navigator.userAgent.indexOf('duoleIos') != -1) {
      regCarrier = 'app_ios';
    } else {
      regCarrier = 'mobile_ios';
    }
  } else {
    if (window.location.host === window.localStorage.getItem('ipNum')) {
      regCarrier = 'app_android';
    } else {
      regCarrier = 'mobile_android';
    }
    if (navigator.userAgent.indexOf('duoleAndroid') != -1) {
      regCarrier = 'app_android';
    } else {
      regCarrier = 'mobile_android';
    }
  }
  return regCarrier
}

Vue.use(Vuex);

const formDate = (year, month, day) => {
  let date
  let fullDay = day
  if (day < 10) {
    fullDay = `0${day}`
  }
  switch (month) {
    case 10:
    case 11:
    case 12:
      date = `${year}-${month}-${fullDay}`
      break;
    default:
      date = `${year}-0${month}-${fullDay}`
  }
  return date
}
const getPreTime = (year, month) => {
  let preyear = year
  let preMonth = month;
  if (month === 1) {
    preMonth = 12
    preyear = year - 1
  }
  return formDate(preyear, preMonth, 1)
}

const time = new Date()
const year = time.getFullYear()
const month = time.getMonth() + 1
const day = time.getDate()
const preTime = '';
const nowTime = '';
const state = {
  loginName:  window.localStorage.getItem('loginName') || '',
  token: window.localStorage.getItem('setToken') || '',
  ipNow: window.localStorage.getItem('ipNum') || '',
  openDeposit: '0',
  nowGameType: {
    'gameType': 'game_ptlist',
    'gameNum': '0'
  },
  selectBalance: '',
  regCarrier: getRegCarrier(),
  bindNewBankCard: {
    name: '',
    cardNum: '',
    bank: '',
    province: '',
    city: '',
    address: '',
  },
  depositRecord: {
    depositList: [],
    sumpage: 0,
    sumcount: 0,
  },
  bindCard: {
    balance: 0,
    balanceRest: 0,
    userbankList: [],
  },
  time: {
    preTime,
    nowTime,
  },
};

export default new Vuex.Store({
  state,
  mutations,
  modules: { menu, platfrom, wallet },
  strict: true,
});

