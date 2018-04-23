const state = {
    games : [
        {
            platform:  "PT1",
            currentgame: "ngm",
            locationSrc: "https://gs2.m27613.com/v1/mrch/game?language=zh-cn&merchantCode=swgnsfubao&playmode=real&gameCode=",
            // Needed QS
            // gameCode - this.gametype
            // ticket - token
            // merch_login_url - current URL / location.href
            // Sample
            // location.href = "https://gs2.m27613.com/v1/mrch/game?language=zh-cn&merchantCode=swgnsfubao&playmode=real&gameCode=" + $this.attr('data-gametype') + '&ticket=' + token + '&merch_login_url=' + location.href;
            gamelist: [
                {   
                    id: 1,
                    gametype: 'sw_gs',
                    name: '加油金块',
                    bgImg: 'sw_gs.jpg',
                },
                {
                    id: 2,
                    gametype: 'sw_ps',
                    name: '加油金砖',
                    bgImg: 'sw_ps.jpg',
                },
                {
                    id: 3,
                    gametype: 'sw_qotp',
                    name: '法老女王',
                    bgImg: 'sw_qotp.jpg',
                },
                {
                    id: 4,
                    gametype: 'sw_rr',
                    name: '河船送福',
                    bgImg: 'sw_rr.jpg',
                },
                {
                    id: 5,
                    gametype: 'sw_fb',
                    name: '四美',
                    bgImg: 'sw_fb.jpg',
                },
                {
                    id: 6,
                    gametype: 'sw_ar',
                    name: '阿兹特克送福',
                    bgImg: 'sw_ar.jpg',
                },
                {
                    id: 7,
                    gametype: 'sw_fr',
                    name: '五行火送福',
                    bgImg: 'sw_fr.jpg',
                },
                {
                    id: 8,
                    gametype: 'sw_wrl',
                    name: '五行水送福',
                    bgImg: 'sw_wrl.jpg',
                },
                {
                    id:9,
                    gametype: 'sw_tcb',
                    name: '炸金花',
                    bgImg: 'sw_tcb.jpg',
                },
                {
                    id:10,
                    gametype: 'sw_gk',
                    name: '宝石王',
                    bgImg: 'sw_gk.jpg',
                },
                {
                    id:11,
                    gametype: 'sw_lucky_omq',
                    name: '走运老夫子',
                    bgImg: 'sw_bjc.jpg',
                },
                {
                    id:12,
                    gametype: 'sw_bjc',
                    name: '黑杰克',
                    bgImg: 'sw_lucky_omq.jpg',
                },
                //--
                {
                    id:13,
                    gametype: 'sw_bl',
                    name: '百搭雄狮',
                    bgImg: 'sw_bl.jpg',
                },
                {
                    id:14,
                    gametype: 'sw_dld',
                    name: '豪华大蓝',
                    bgImg: 'sw_dld.jpg',
                },
                {
                    id:15,
                    gametype: 'sw_fuqsg',
                    name: '福气水果',
                    bgImg: 'sw_fuqsg.jpg',
                },
                {
                    id:16,
                    gametype: 'sw_bjc',
                    name: '黑杰克',
                    bgImg: 'sw_lucky_omq.jpg',
                },
                {
                    id:17,
                    gametype: 'sw_bjc',
                    name: '黑杰克',
                    bgImg: 'sw_lucky_omq.jpg',
                },
                {
                    id:18,
                    gametype: 'sw_bjc',
                    name: '黑杰克',
                    bgImg: 'sw_lucky_omq.jpg',
                }
            ]
        }
    ]
}

const getters = {
    getGamesByPlatform( state, payload ) {
        return payload => state.games.find( function( e ){
            return e.platform === payload;
        });
    }
}


export default { 
    state,
    getters
    
}