const state = {
    platforms: [
        {
          name: '新PT老虎机',
          customClass: 'PT1',
          classification: 'new',
          link: '/New_PT_List',
          balance: 0,
          forBalancePlatform: false,
          isDirectList: true,        
          banner: '../../static/img/HGame/PT-banner.jpg',
          forRefresh: false
        },
        {
          name: 'PT老虎机',
          customClass: 'PT',
          classification: 'hot',
          link: '/PT',
          balance: 0,
          forBalancePlatform: true,
          hexColor: '#188f63',
          isDirectList: false,
          forRefresh: false
        },
        {
          name: 'MG老虎机',
          customClass: 'MG',
          classification: '',
          link: '/MG',
          balance: 0,
          forBalancePlatform: true,
          hexColor: '#18b900',
          isDirectList: false,
          forRefresh: false
        },
        {
          name: 'SG老虎机',
          customClass: 'SG',
          classification: '',
          link: '/SG',
          balance: 0,
          forBalancePlatform: true,
          hexColor: '#f3310b',
          isDirectList: false,
          forRefresh: false
        },
        {
          name: 'HABA老虎机',
          customClass: 'HABA',
          classification: '',
          link: '/HABA',
          balance: 0,
          forBalancePlatform: true,
          hexColor: '#18b900',
          isDirectList: false,
          forRefresh: false
        },
        {
          name: 'PNG老虎机',
          customClass: 'PNG',
          classification: '',
          link: '/PNG',
          balance: 0,
          forBalancePlatform: true,
          hexColor: '#18b900',
          isDirectList: false,
          forRefresh: false
        },
        {
          name: 'TTG老虎机',
          customClass: 'TTG',
          classification: '',
          link: '/TTG',
          balance: 0,
          forBalancePlatform: true,
          hexColor: '#f71dcb',
          isDirectList: false,
          forRefresh: false
        },
        {
          name: 'BS老虎机',
          customClass: 'BS',
          classification: '',
          link: '/BS',
          balance: 0,
          forBalancePlatform: true,
          hexColor: '#f3310b',
          isDirectList: false,
          forRefresh: false
        }
      ]
}

const getters = {
    getBalancePlatforms: function(state ){
        return state.platforms.filter( state => state.forBalancePlatform );
    },
    getAllPlatforms: function(state ){
      return state.platforms;
    }
}

const mutations = {
  setRefreshPlatform(state, payload) {
      state.platforms.find( state => state.customClass == payload.platform ).forRefresh = payload.status;
  }
}

export default {
    state,
    getters,
    mutations
}