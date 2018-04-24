const state = {
    games : [
        {
            platform:  "TTG",
            currentgame: "ngm",
            locationSrc: "",
            // Needed QS
            // gameCode - this.gametype
            // ticket - token
            // merch_login_url - current URL / location.href
            // Sample
            // location.href = "https://gs2.m27613.com/v1/mrch/game?language=zh-cn&merchantCode=swgnsfubao&playmode=real&gameCode=" + $this.attr('data-gametype') + '&ticket=' + token + '&merch_login_url=' + location.href;
            gamelist: [
                {   
                    id: 1,
                    gametype: '0',
                    name: '炽热火山',
                    bgImg: 'List_TTG_1061 picture.jpg',
                },
                
                {   
                    id: 2,
                    gametype: '0',
                    name: '招财进宝',
                    bgImg: 'List_TTG_1060 picture.jpg',
                },


                {   
                    id: 3,
                    gametype: '1072',
                    name: '超级宝贝',
                    bgImg: 'List_TTG_1072 picture.jpg',
                },
                {   
                    id: 4,
                    gametype: '1078',
                    name: '葫芦娃',
                    bgImg: 'List_TTG_1078.jpg',
                },
               
                {   
                    id: 5,
                    gametype: '1049',
                    name: '林克的传说',
                    bgImg: 'List_TTG_1049.jpg',
                },

                {   
                    id: 6,
                    gametype: '1075',
                    name: '黑猫警长',
                    bgImg: 'List_TTG_1075.jpg',
                },
               
                {   
                    id: 7,
                    gametype: '1052',
                    name: '捕蝇大赛',
                    bgImg: 'List_TTG_1052.jpg',
                },

                {   
                    id: 8,
                    gametype: '1042',
                    name: '八仙过海',
                    bgImg: 'List_TTG_1042.jpg',
                },

                {   
                    id: 9,
                    gametype: '1073',
                    name: '恭喜发财',
                    bgImg: 'List_TTG_1073.jpg',
                },

                {   
                    id: 10,
                    gametype: '1055',
                    name: '金海豚',
                    bgImg: 'List_TTG_1055.jpg',
                },

                {   
                    id: 11,
                    gametype: '1056',
                    name: '海龙王',
                    bgImg: 'List_TTG_1056.jpg',
                },

                {   
                    id: 12,
                    gametype: '1057',
                    name: '银狮奖',
                    bgImg: 'List_TTG_1056.jpg',
                },
               
                {   
                    id: 13,
                    gametype: '1054',
                    name: '猴年大吉',
                    bgImg: 'List_TTG_1054.jpg',
                },
               
                {   
                    id: 14,
                    gametype: '1053',
                    name: '火辣金砖',
                    bgImg: 'List_TTG_1053.jpg',
                },
                {   
                    id: 15,
                    gametype: '1051',
                    name: '疯狂的猴子',
                    bgImg: 'List_TTG_1051.jpg',
                },
       

                 //BS platform
                 {
                    platform: "BS",
                    currentgame:"ngm",
                    locationSrc:"",
 
                    gamelist:[
                     
                 {   
                     id:788,
                     name: '虎威',
                     bgImg: 'game_788.jpg',
                 },
                 {   
                    id:788,
                    name: '弹弹糖 2',
                    bgImg: 'game_784.jpg',
                },

                {   
                    id:775,  
                    name: '尼罗河传说',
                    bgImg: 'game_775.jpg',
                },

                {   
                    id:771,
                    name: '踩踏',
                    bgImg: 'game_771.jpg',
                },

                {   
                    id:767,
                    name: '寻宝小丑',
                    bgImg: 'game_767.jpg',
                },

                {   
                    id:763,
                    name: '吸血僵尸',
                    bgImg: 'game_763.jpg',
                },

                {   
                    id:751,
                    name: '魔术商店',
                    bgImg: 'game_751.png',
                },
 

                {   
                    id:747,
                    name: '垂钓者',
                    bgImg: 'Angler.jpg',
                },
                
                {   
                    id:692,
                    name: '发发姐妹',
                    bgImg: 'FaFaTwins.png',
                },

                {   
                    id:704,
                    name: '老虎机老爹',
                    bgImg: 'Slotfather2.png',
                },

                {   
                    id:700,
                    name: 'Great88',
                    bgImg: 'great88-GameButton.jpg',
                },
                
                {   
                    id:727,
                    name: '卡哇伊喵喵儿',
                    bgImg: 'kawaii-GameButton.png',
                },

                {   
                    id:719,
                    name: '罪恶之夜',
                    bgImg: 'sincity-DemoButton.png',
                },

                {   
                    id:225,
                    name: '劲爆辣椒',
                    bgImg: 'game_227.png',
                },

                {   
                    id:226,
                    name: '到达者',
                    bgImg: 'game_226.png',
                },

                
                {   
                    id:2,
                    name: '幸运七宝',
                    bgImg: 'game_226.png',
                },

                {   
                    id:180,
                    name: '通天大盗',
                    bgImg: 'heist.jpg',
                },

                {   
                    id:224,
                    name: '公元前两百万年',
                    bgImg: '2-million-bc.jpg',
                },

                {   
                    id:228,
                    name: '维京时代',
                    bgImg: 'viking-age.jpg',
                },

                {   
                    id:229,
                    name: '第七天堂',
                    bgImg: '7th-heaven.jpg',
                },
                
                {   
                    id:236,
                    name: '真实与幻象',
                    bgImg: 'true-illusions.jpg',
                },

                {   
                    id:238,
                    name: '妈妈咪呀',
                    bgImg: 'mamma-mia.jpg',
                },

                {   
                    id:247,
                    name: '疯狂科学家2',
                    bgImg: 'madder-scientist.jpg',
                },
                
                {   
                    id:248,
                    name: '迷失',
                    bgImg: 'lost.jpg',
                },

                {   
                    id:256,
                    name: '黑金帝国',
                    bgImg: 'black-gold.jpg',
                },

                {   
                    id:295,
                    name: '星夜迷案',
                    bgImg: 'after-night-falls.jpg',
                },
 
                {   
                    id:300,
                    name: '科帕酒店',
                    bgImg: 'at-the-copa.jpg',
                },

                {   
                    id:308,
                    name: '床下魅影',
                    bgImg: 'under-the-bed.jpg',
                },
 
                {   
                    id:12,
                    name: '加勒比扑克',
                    bgImg: 'caribbean-poker.jpg',
                },
                
                {   
                    id:29,
                    name: '疯狂局末',
                    bgImg: 'deuces-wild-video-poker.jpg',
                },

                {   
                    id:350,
                    name: '着魔',
                    bgImg: 'enchanted.jpg',
                },
 
                {   
                    id:351,
                    name: '巴黎之夜',
                    bgImg: 'a-night-in-paris-jp.jpg',
                },

                
                {   
                    id:384,
                    name: '真正的警长',
                    bgImg: 'the-true-sheriff.jpg',
                },

                {   
                    id:402,
                    name: '糖果之星',
                    bgImg: 'sugar-pop.jpg',
                },

                {   
                    id:63,
                    bgImg: 'single-deck-blackjack.jpg',
                    name: '二十一点大亨',
                },

                {   
                    id:444,
                    bgImg: 'more-gold-diggin.jpg',
                    name: '挖金矿',
                },


                {   
                    id:461,
                    bgImg: 'curious-machine-plus.jpg',
                    name: '古怪机器',
                },

                {   
                    id:471,
                    name: '大富豪',
                    bgImg: 'tycoons-plus.jpg',
                },

                {   
                    id:478,
                    name: '吉普赛玫瑰',
                    bgImg: 'gypsy-rose.jpg',
                },

                {   
                    id:482,
                    name: '挚爱宠物',
                    bgImg: 'puppy-love-plus.jpg',
                },

                {   
                    id:500,
                    name: '化身博士',
                    bgImg: 'dr-jekyll-mr-hyde.jpg',
                },
                
                {   
                    id:504,
                    name: '金星来客',
                    bgImg: 'it-came-from-venus-jp-plus.jpg',
                },
                
                {   
                    id:512,
                    name: '水果道',
                    bgImg: 'fruit-zen.jpg',
                },
                
                {   
                    id:520,
                    name: '木偶奇遇记',
                    bgImg: 'pinocchio.jpg',
                },

                {   
                    id:534,
                    name: '巨钻珍宝',
                    bgImg: 'curious-machine-plus.jpg',
                },
                
                {   
                    id:548,
                    name: '黑洞边界',
                    bgImg: 'event-horizon.jpg',
                },

                {   
                    id:554,
                    name: '奢华生活',
                    bgImg: 'mega-glam-life.jpg',
                },

                {   
                    id:590,
                    name: '赌城周末',
                    bgImg: 'weekend-in-vegas.jpg',
                },

                {   
                    id:597,
                    name: '宿醉之旅',
                    bgImg: 'the-tipsy-tourist.jpg',
                },
 
                {   
                    id:79,
                    name: '欧式轮盘',
                    bgImg: 'european-roulette.jpg',
                },

                {   
                    id:637,
                    name: '四季',
                    bgImg: 'four-seasons.jpg',
                },

                {   
                    id:647,
                    name: '科学怪人',
                    bgImg: 'frankenslots-monster.jpg',
                },

                
                {   
                    id:177,
                    name: '三个愿望',
                    bgImg: 'three-wishes.jpg',
                },

                {   
                    id:534,
                    name: '巨钻珍宝',
                    bgImg: 'mega-gems.jpg',
                },

                {   
                    id:195,
                    name: '美式二十一点',
                    bgImg: 'american-us-blackjack.jpg',
                },

                {   
                    id:280,
                    name: '猎人山姆',
                    bgImg: 'safari-sam.jpg',
                },

                {   
                    id:178,
                    name: '角斗士',
                    bgImg: 'gladiator.jpg',
                },

                {   
                    id:210,
                    name: '维加斯先生',
                    bgImg: 'mr-vegas.jpg',
                },

                {   
                    id:194,
                    name: '巴巴里海岸',
                    bgImg: 'barbary-coast.jpg',
                },
 
                   
                {   
                    id:221,
                    name: '奇趣房子',
                    bgImg: 'house-of-fun.jpg',
                },

                {   
                    id:691,
                    name: '魅力三叶者',
                    bgImg: 'charms-and-clovers.jpg',
                },

                {   
                    id:344,
                    name: '老虎机教父',
                    bgImg: 'the-slotfather-jp.jpg',
                },

                {   
                    id:426,
                    name: '天使与魔鬼',
                    bgImg: 'good-girlbad-girl.jpg',
                },
                
                {   
                    id:619,
                    name: '圣诞颂歌',
                    bgImg: 'a-christmas-carol.jpg',
                },

                {   
                    id:553,
                    name: '法师塔',
                    bgImg: 'alkemors-tower.jpg',
                },
  
                {   
                    id:227,
                    name: '鲁克的复仇',
                    bgImg: 'rooks-revenge.jpg',
                },

                {   
                    id:137,
                    name: '红利万岁',
                    bgImg: 'hl.jpg',
                },
  
  
 
 
 
 
                   ]
                   

                }

            ]
        },



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