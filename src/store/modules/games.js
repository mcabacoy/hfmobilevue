

const state = {
    games : [
        {
            platform:  "PT1",
            currentgame: "npm",
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
                    gametype: 'sw_ggdn',
                    name: '黃金花園',
                    bgImg: '',
                },
                {
                    id: 2,
                    gametype: 'sw_jxl',
                    name: '吉祥龙',
                    bgImg: 'sw_jxl.jpg',
                },
                {
                    id: 3,
                    gametype: 'sw_9s1k',
                    name: '九子一王',
                    bgImg: 'sw_9s1k.jpg',
                },
                {
                    id: 4,
                    gametype: 'sw_wq',
                    name: '狂野麒麟',
                    bgImg: 'sw_wq.jpg',
                },
                {
                    id: 5,
                    gametype: 'sw_h2h',
                    name: '两心知',
                    bgImg: 'sw_h2h.jpg',
                },
                {
                    id: 5,
                    gametype: 'sw_mj',
                    name: '美人鱼宝藏',
                    bgImg: 'sw_mj.jpg',
                },
                {
                    id: 6,
                    gametype: 'sw_gg',
                    name: '名利双收',
                    bgImg: 'sw_gg.jpg',
                },
                {
                    id: 7,
                    gametype: 'sw_totiatp',
                    name: '逆戟鲸，冰山和企鹅',
                    bgImg: 'sw_totiatp.jpg',
                },
                {
                    gametype: '',
                    name: '',
                    bgImg: '.jpg',
                }
                // {
                //     gametype: '',
                //     name: '',
                //     bgImg: '.jpg',
                // },
                // {
                //     gametype: '',
                //     name: '',
                //     bgImg: '.jpg',
                // }
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