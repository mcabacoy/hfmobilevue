const state = {
    platforms: [
        {
          name: '新PT老虎机',
          customClass: 'PT1',
          classification: 'new',
          link: '/New_PT_List',
          balance: 0,
          forBalancePlatform: false
        },
        {
          name: 'PT老虎机',
          customClass: 'PT',
          classification: 'hot',
          link: '/PT',
          balance: 0,
          forBalancePlatform: true
        },
        {
          name: 'MG老虎机',
          customClass: 'MG',
          classification: '',
          link: '/MG',
          balance: 0,
          forBalancePlatform: true
        },
        {
          name: 'SG老虎机',
          customClass: 'SG',
          classification: '',
          link: '/SG',
          balance: 0,
          forBalancePlatform: true
        },
        {
          name: 'HABA老虎机',
          customClass: 'HABA',
          classification: '',
          link: '/HABA',
          balance: 0,
          forBalancePlatform: true
        },
        {
          name: 'PNG老虎机',
          customClass: 'PNG',
          classification: '',
          link: '/PNG',
          balance: 0,
          forBalancePlatform: true
        },
        {
          name: 'TTG老虎机',
          customClass: 'TTG',
          classification: '',
          link: '/TTG',
          balance: 0,
          forBalancePlatform: true
        },
        {
          name: 'BS老虎机',
          customClass: 'BS',
          classification: '',
          link: '/BS',
          balance: 0,
          forBalancePlatform: true
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

export default {
    state,
    getters
}