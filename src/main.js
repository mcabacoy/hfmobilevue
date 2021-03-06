// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue/dist/vue.js';
import App from './App';
import Axios from './utils/axios';
import Router from 'vue-router';

const Homepage = resolve => require(['./components/Homepage'], resolve);
const WalletRecharge = resolve => require(['./components/WalletRecharge'], resolve);
const WalletWithdraw = resolve => require(['./components/WalletWithdraw'], resolve);
const Transfers = resolve => require(['./components/Transfers'], resolve);
const VIP = resolve => require(['./components/VIP'], resolve);
const Promotion = resolve => require(['./components/Promotion'], resolve);
const BankCard = resolve => require(['./components/BankCard'], resolve);
const Signin = resolve => require(['./components/Signin'], resolve);
const TransactionQuery = resolve => require(['./components/TransactionQuery'], resolve);
const PromDetails = resolve => require(['./components/Promotion/PromDetails'], resolve);
const UnionPay = resolve => require(['./components/WalletRecharge/UnionPay'], resolve);

const Wallet = resolve => require(['./components/Wallet'], resolve)
const InfoBind = resolve => require(['./components/BankCard/UserInfoBind'], resolve);
const PlatformGames = resolve => require(['./components/PlatformGames'], resolve);
const GameBalance = resolve => require(['./components/GameBalance'], resolve);
const Login = resolve => require(['./components/Login'], resolve);
const RetrievePassword = resolve => require(['./components/RetrievePassword'], resolve);
const Registration = resolve => require(['./components/Registration'], resolve);

import store from './store';
import layer from 'vue-layer-mobile';
import '../static/css/reset.css' 
import 'swiper/dist/css/swiper.min.css';
import Swiper from 'swiper';

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
    path: '/PromDetails/:promtype',
    component: PromDetails,
    props: true
  },
  {
    path: '/Unionpay',
    component: UnionPay
  },
  {
    path: '/WalletWithdraw',
    component: WalletWithdraw
  },
  {
    path: '/TransactionQuery',
    component: TransactionQuery
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
    component: Promotion,
    children: [{
      path: '/Promotion/:targettab',
      component: Promotion,
      props: true
      }
    ]
  },
  {
    path: '/BankCard',
    component: BankCard,
    children: [{
      path: '/BankCard/:targettab',
      component: BankCard,
      props: true
      }
    ]
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
    path: '/UserInfoBind/:bindtype',
    component: InfoBind
  },
  {
    path: '/PlatformGames/:gametype',
    component: PlatformGames,
    props: true
  },
  {
    path: '/GameBalance/:gametype',
    component: GameBalance,
    props: true
  },
  {
    path: '/Login',
    component: Login
  },
  {
    path: '/RetrievePassword',
    component: RetrievePassword
  },
  {
    path: '/Register',
    component: Registration
  }
];

const router = new Router({
  routes,
  scrollBehavior (to, from, savedPosition) {
   return { x: 0, y: 0 }
  }
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
  render: h => h(App),
  components: {
    Swiper
  }
});
