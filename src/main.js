// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue/dist/vue.js';
import App from './App';
import Axios from './utils/axios';
import Router from 'vue-router';

const Homepage = resolve => require(['./components/Homepage'], resolve);
const WalletRecharge = resolve => require(['./components/WalletRecharge'], resolve);
const Transfers = resolve => require(['./components/Transfers'], resolve);
const VIP = resolve => require(['./components/VIP'], resolve);
const Promotion = resolve => require(['./components/Promotion'], resolve)
const BankCard = resolve => require(['./components/BankCard'], resolve)
const Signin = resolve => require(['./components/Signin'], resolve)

const Wallet = resolve => require(['./components/Wallet'], resolve)
const InfoBind = resolve => require(['./components/BankCard/UserInfoBind'], resolve);
const PlatformGames = resolve => require(['./components/PlatformGames'], resolve);

import store from './store';
import layer from 'vue-layer-mobile';
import '../static/css/reset.css' 
import 'vue-swipe/dist/vue-swipe.css';

Vue.use(layer);
Vue.use(Router);

const routes = [
  {
    path: '/',
    component: Homepage
  },
  {
    path: '/Homepage',
    component: Homepage
  }  ,
  {
    path: '/WalletRecharge',
    component: WalletRecharge
  },
  {
    path: '/Transfers',
    component: Transfers
  },
  {
    path: '/VIP',
    component: VIP
  },
  {
    path: '/Promotion',
    component: Promotion
  },
  {
    path: '/BankCard',
    component: BankCard
  },
  {
    path: '/Signin',
    component: Signin
  },
  {
    path: '/Wallet',
    component: Wallet
  },
  {
    path: '/UserInfoBind',
    component: InfoBind
  },
  {
    path: '/PlatformGames',
    component: PlatformGames
  }
];

const router = new Router({
  routes
});


router.afterEach(() => {
  // NProgress.done();
});

/* http */
Vue.prototype.$http = Axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
