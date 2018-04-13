import Vue from 'vue';
import ptGame from './ptGame.vue';
import Axios from './../../utils/axios';
import 'vue-layer-mobile/need/layer.css';
import layer from 'vue-layer-mobile';
Vue.use(layer);
Vue.config.productionTip = false;
Vue.prototype.$http = Axios;
/* eslint-disable no-new */
new Vue({
  el: '#ptGame',
  render: h => h(ptGame)
});/**
 * Created by user on 2017/12/28.
 */
