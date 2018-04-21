import Vue from 'vue/dist/vue.js';
import Vuex from 'vuex';
import mutations from './mutations'

import menu  from './modules/menu'
import platfrom from './modules/platform'
import wallet from './modules/wallet'
import user from './modules/user'
import games from './modules/games'
import bankaccounts from './modules/bankaccounts'

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

const state = {
};

export default new Vuex.Store({
  state,
  modules: { menu, platfrom, wallet, user, games, bankaccounts},
  strict: true,
});

