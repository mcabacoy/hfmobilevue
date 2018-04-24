const state = {
    games : [
        {
            platform:  "MG",
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
                    gametype: 'cashSplash',
                    name: '黃金花園',
                    bgImg: 'cashSplash.jpg',
                },
                
                {   
                    id: 2,
                    gametype: 'majorMillions',
                    name: '百万富翁',
                    bgImg: 'majorMillions.jpg',
                },
                {   
                    id: 3,
                    gametype: 'treasureNile',
                    name: '尼罗河宝藏',
                    bgImg: 'treasureNile.jpg',
                },
                {   
                    id: 4,
                    gametype: 'beautifulBones',
                    name: '美丽骷髅',
                    bgImg: 'beautifulBones.jpg',
                },

                {   
                    id: 5,
                    gametype: 'beautifulBones',
                    name: '美丽骷髅',
                    bgImg: 'beautifulBones.jpg',
                },

                {   
                    id:6,
                    gametype: 'jurassicWorlds',
                    name: '侏罗纪世界',
                    bgImg: 'jurassicWorld.jpg',
                },

                {   
                    id:7,
                    gametype: 'candyDreams',
                    name: '梦果子乐园',
                    bgImg: 'candyDreams.jpg',
                },
                {   
                    id:8,
                    gametype: 'forbiddenThrone',
                    name: '禁忌的皇权',
                    bgImg: 'forbiddenThrone.jpg',
                },

                {   
                    id:9,
                    gametype: 'fortuneGirl',
                    name: '金库甜心',
                    bgImg: 'fortuneGirl.jpg',
                },

                {   
                    id:10,
                    gametype: 'doubleWammy',
                    name: '双倍惊喜',
                    bgImg: 'doubleWammy.jpg',
                },
                {   
                    id:11,
                    gametype: 'megaMoneyMultiplier',
                    name: '巨额现金乘数',
                    bgImg: 'megaMoneyMultiplier.jpg',
                },

                {   
                    id:12,
                    gametype: 'coolBuck',
                    name: '运财酷儿',
                    bgImg: 'coolBuck.jpg',
                },

                {   
                    id:13,
                    gametype: 'luckyTwins',
                    name: '幸运双星',
                    bgImg: 'luckyTwins.jpg',
                },
                {   
                    id:14,
                    gametype: 'retroReelsExtremeHeat',
                    name: '酷热经典',
                    bgImg: 'retroReelsExtremeHeat.jpg',
                },
                {   
                    id:15,
                    gametype: 'retroReels',
                    name: '经典老虎机',
                    bgImg: 'retroReels.jpg',
                },

                {   
                    id:16,
                    gametype: 'rhymingReelsHeartsAndTarts',
                    name: '女皇之心',
                    bgImg: 'rhymingReelsHeartsAndTarts.jpg',
                },
                {   
                    id:17,
                    gametype: 'theHeatisOn',
                    name: '极速抢钱',
                    bgImg: 'theHeatisOn.jpg',
                },

                {   
                    id:18,
                    gametype: 'goldenPrincess',
                    name: '黄金公主',
                    bgImg: 'goldenPrincess.jpg',
                },
                {   
                    id:19,
                    gametype: 'emperorofTheSea',
                    name: '青龙出海',
                    bgImg: 'emperorofTheSea.jpg',
                },
                {   
                    id:20,
                    gametype: 'pollenParty',
                    name: '花粉之国',
                    bgImg: 'pollenParty.jpg',
                },

                {   
                    id:21,
                    gametype: 'fruitvsCandy',
                    name: '水果vs糖果',
                    bgImg: 'fruitvsCandy.jpg',
                },
                
                {   
                    id:22,
                    gametype: 'secretRomance',
                    name: '秘密爱慕者',
                    bgImg: 'secretRomance.jpg',
                },
                {   
                    id:23,
                    gametype: 'classic243',
                    name: '经典243',
                    bgImg: 'classic243.jpg',
                },
                {   
                    id:24,
                    gametype: 'huangdi-TheYellowEmperor',
                    name: '轩辕帝传',
                    bgImg: 'TheYellowEmperor.jpg',
                },
                {   
                    id:25,
                    gametype: 'lifeofRiches',
                    name: '富裕人生',
                    bgImg: 'lifeofRiches.jpg',
                },
                {   
                    id:26,
                    gametype: 'immortalRomance',
                    name: '不朽的浪漫',
                    bgImg: 'immortalRomance.jpg',
                },
                {   
                    id:27,
                    gametype: 'tarzan',
                    name: '泰山传奇',
                    bgImg: 'tarzan.jpg',
                },

                {   
                    id:28,
                    gametype: 'reelGems',
                    name: '宝石之轮',
                    bgImg: 'reelGems.jpg',
                },

                {   
                    id:29,
                    gametype: 'dragonz',
                    name: '幸运龙宝贝',
                    bgImg: 'dragonz.jpg',
                },

                
                {   
                    id:30,
                    gametype: 'lostVegas',
                    name: '迷失拉斯维加斯',
                    bgImg: 'lostVegas.jpg',
                },

                {   
                    id:31,
                    gametype: 'jungleJim-ElDorado',
                    name: '丛林吉姆黄金国&#8203',
                    bgImg: 'ElDorado.jpg',
                },
                {   
                    id:32,
                    gametype: 'karaokeParty',
                    name: 'K歌乐韵',
                    bgImg: 'karaokeParty.jpg',
                },

                {   
                    id:33,
                    gametype: 'frozenDiamonds',
                    name: '急冻钻石',
                    bgImg: 'frozenDimonds.jpg',
                },

                {   
                    id:34,
                    gametype: 'reelSpinner',
                    name: '旋转大战',
                    bgImg: 'reelSpinner.jpg',
                },

                {   
                    id:35,
                    gametype: 'cashville',
                    name: '现金威乐',
                    bgImg: 'cashville.jpg',
                },

                {   
                    id:36,
                    gametype: 'fishParty',
                    name: '海底派对',
                    bgImg: 'fishParty.jpg',
                },

                {   
                    id:37,
                    gametype: 'kingsOfCash',
                    name: '现金之王',
                    bgImg: 'kingsOfCash.jpg',
                },
                {   
                    id:38,
                    gametype: 'summerHoliday',
                    name: '暑假',
                    bgImg: 'summerHoliday.jpg',
                },
                {   
                    id:39,
                    gametype: 'prettyKitty',
                    name: '漂亮猫咪',
                    bgImg: 'prettyKitty.jpg',
                },
                {   
                    id:40,
                    gametype: 'shoot!',
                    name: '射门!',
                    bgImg: 'shoot.jpg',
                },
                {   
                    id:41,
                    gametype: 'winSumDimSum',
                    name: '开心点心',
                    bgImg: 'winSumDimSum.jpg',
                },

                {   
                    id:42,
                    gametype: 'barBarBlackSheep5Reel',
                    name: '黑绵羊咩咩叫',
                    bgImg: 'barBarBlackSheep5Reel.jpg',
                },

                {   
                    id:43,
                    gametype: 'sunTide',
                    name: '太阳征程',
                    bgImg: 'sunTide.jpg',
                },
                {   
                    id:44,
                    gametype: 'wildOrient',
                    name: '东方珍兽',
                    bgImg: 'wildOrient.jpg',
                },

                {   
                    id:45,
                    gametype: 'bikiniParty',
                    name: '比基尼派对',
                    bgImg: 'bikiniParty.jpg',
                },
                {   
                    id:46,
                    gametype: 'dragonDance',
                    name: '舞龙',
                    bgImg: 'dragonDance.jpg',
                },
                {   
                    id:47,
                    gametype: 'untamed-GiantPanda',
                    name: '野生熊猫',
                    bgImg: 'untamed-GiantPanda.jpg',
                },

                {   
                    id:48,
                    gametype: 'happyHolidays',
                    name: '快乐假日',
                    bgImg: 'happyHolidays.jpg',
                },

                {   
                    id:49,
                    gametype: 'luckyKoi',
                    name: '好运金鲤',
                    bgImg: 'luckyKoi.jpg',
                },

                {   
                    id:50,
                    gametype: 'soManyMonsters',
                    name: '好多怪兽',
                    bgImg: 'soManyMonsters.jpg',
                },

                {   
                    id:51,
                    gametype: 'soMuchCandy',
                    name: '好多糖果',
                    bgImg: 'soMuchCandy.jpg',
                },

                {   
                    id:52,
                    gametype: 'soMuchSushi',
                    name: '好多寿司',
                    bgImg: 'soMuchSushi.jpg',
                },
                {   
                    id:53,
                    gametype: 'basketballStar',
                    name: '篮球巨星',
                    bgImg: 'basketballStar.jpg',
                },

                {   
                    id:54,
                    gametype: 'goldenEra',
                    name: '黄金时代',
                    bgImg: 'goldenEra.jpg',
                },
                {   
                    id:55,
                    gametype: 'rugbyStar',
                    name: '橄榄球明星',
                    bgImg: 'rugbyStar.jpg',
                },

                {   
                    id:56,
                    gametype: 'asianBeauty',
                    name: '亚洲风情',
                    bgImg: 'asianBeauty.jpg',
                },

                {   
                    id:57,
                    gametype: 'bridesmaids',
                    name: '伴娘我最大',
                    bgImg: 'bridesmaids.jpg',
                },

                {   
                    id:58,
                    gametype: 'sterlingSilver',
                    name: '纯银',
                    bgImg: 'sterlingSilver.jpg',
                },

                {   
                    id:59,
                    gametype: 'supeItUp',
                    name: '增强马力',
                    bgImg: 'supeItUp.jpg',
                },

                {   
                    id:60,
                    gametype: 'partyIsland',
                    name: '派对岛屿',
                    bgImg: 'partyIsland.jpg',
                },

                {   
                    id:61,
                    gametype: 'liquidGold',
                    name: '液态黄金',
                    bgImg: 'liquidGold.jpg',
                },

                {   
                    id:62,
                    gametype: 'coolWolf',
                    name: '酷派狼人',
                    bgImg: 'coolWolf.jpg',
                },

                {   
                    id:63,
                    gametype: 'breakAway',
                    name: '冰上曲棍球',
                    bgImg: 'breakAway.jpg',
                },
                {   
                    id:64,
                    gametype: 'ariana',
                    name: '阿丽亚娜',
                    bgImg: 'ariana.jpg',
                },
                {   
                    id:66,
                    gametype: 'rhymingReelsGeorgiePorgie',
                    name: '乔治与柏志',
                    bgImg: 'rhymingReelsGeorgiePorgie.jpg',
                },

                {   
                    id:67,
                    gametype: 'harveys',
                    name: '哈维斯的晚餐',
                    bgImg: 'harveys.jpg',
                },

                {   
                    id:68,
                    gametype: 'boogieMonsters',
                    name: '摇滚怪兽',
                    bgImg: 'boogieMonsters.jpg',
                },

                {   
                    id:69,
                    gametype: 'luckyLeprechaun',
                    name: '幸运妖精',
                    bgImg: 'luckyLeprechaun.jpg',
                },
                {   
                    id:70,
                    gametype: 'cricketStar',
                    name: '板球明星',
                    bgImg: 'crickerStar.jpg',
                },
                {   
                    id:71,
                    gametype: 'secretAdmirer',
                    name: '暗恋',
                    bgImg: 'secretAdmirer.jpg',
                },

                {   
                    id:72,
                    gametype: 'bigKahuna',
                    name: '森林之王',
                    bgImg: 'bigKahuna.jpg',
                },

                
                {   
                    id:73,
                    gametype: 'tigersEye',
                    name: '虎眼',
                    bgImg: 'tigersEye.jpg',
                },

                {   
                    id:74,
                    gametype: 'sureWin',
                    name: '必胜',
                    bgImg: 'sureWin.jpg',
                },

                {   
                    id:75,
                    gametype: 'santaPaws',
                    name: '冰雪圣诞村',
                    bgImg: 'santaPaws.jpg',
                },

                {   
                    id:76,
                    gametype: 'riveraRiches',
                    name: '瑞维拉财宝',
                    bgImg: 'riveraRiches.jpg',
                },

                {   
                    id:77,
                    gametype: 'ageOfDiscovery',
                    name: '大航海时代',
                    bgImg: 'ageOfDiscovery.jpg',
                },
                {   
                    id:78,
                    gametype: 'barsandStripes',
                    name: '美式酒吧',
                    bgImg: 'barsandsStripes.jpg',
                },

                {   
                    id:79,
                    gametype: 'silverFang',
                    name: '银狼',
                    bgImg: 'silverFANG.jpg',
                },
                {   
                    id:80,
                    gametype: 'mysticDreams',
                    name: '神秘的梦',
                    bgImg: 'mysticDreams.jpg',
                },

                {   
                    id:81,
                    gametype: 'bushTelegraph',
                    name: '丛林快讯',
                    bgImg: 'bushTelegraph.jpg',
                },

                {   
                    id:82,
                    gametype: 'kathmandu',
                    name: '加德满都',
                    bgImg: 'kathmandu.jpg',
                },

                {   
                    id:83,
                    gametype: 'summertime',
                    name: '加德满都',
                    bgImg: 'summertime.jpg',
                },
                {   
                    id:84,
                    gametype: 'beachBabes',
                    name: '沙滩女孩',
                    bgImg: 'beachbabes.jpg',
                },
                {   
                    id:85,
                    gametype: 'madHatters',
                    name: '疯狂帽匠',
                    bgImg: 'madHatters.jpg',
                },
                {   
                    id:86,
                    gametype: 'footballStar',
                    name: '足球之巅',
                    bgImg: 'footballStar.jpg',
                },

                {   
                    id:87,
                    gametype: 'treasurePalace',
                    name: '宝藏宫殿',
                    bgImg: 'treasurePalace.jpg',
                },

                {   
                    id:88,
                    gametype: 'mermaidsMillions',
                    name: '百万美人鱼',
                    bgImg: 'mermaidsMillions.jpg',
                },

                {   
                    id:89,
                    gametype: 'thunderstruck',
                    name: '雷神',
                    bgImg: 'thunderstruck.jpg',
                },
                {   
                    id:90,
                    gametype: 'tombRaider',
                    name: '古墓奇兵',
                    bgImg: 'tombRaider.jpg',
                },

                {   
                    id:91,
                    gametype: 'ladiesNite',
                    name: '淑女派对',
                    bgImg: 'ladiesNite.jpg',
                },
                
                {   
                    id:92,
                    gametype: 'springBreak',
                    name: '淑女派对',
                    bgImg: 'springBreak.jpg',
                },

                {   
                    id:93,
                    gametype: 'avalon',
                    name: '阿瓦隆',
                    bgImg: 'avalon.jpg',
                },

                {   
                    id:94,
                    gametype: 'agentJaneBlonde',
                    name: '城市猎人',
                    bgImg: 'agentJaneBlonde.jpg',
                },

                {   
                    id:95,
                    gametype: 'burningDesire',
                    name: '燃烧的慾望',
                    bgImg: 'burningDesire.jpg',
                },
                {   
                    id:96,
                    gametype: 'decktheHalls',
                    name: '圣诞大餐',
                    bgImg: 'decktheHalls.jpg',
                },

                {   
                    id:97,
                    gametype: 'adventurePalace',
                    name: '冒险丛林',
                    bgImg: 'adventurePalace.jpg',
                },

                {   
                    id:98,
                    gametype: 'tallyHo',
                    name: '狐狸爵士',
                    bgImg: 'tallyHo.jpg',
                },

                {   
                    id:99,
                    gametype: 'loaded',
                    name: '幸运嘻哈',
                    bgImg: 'loaded.jpg',
                },
                
                {   
                    id:100,
                    gametype: 'breadaBankAgain',
                    name: '银行抢匪2',
                    bgImg: 'breakdaBankAgain.jpg',
                },

                {   
                    id:101,
                    gametype: 'cashapillar',
                    name: '昆虫派对',
                    bgImg: 'cashapillar.jpg',
                },

                {   
                    id:102,
                    gametype: 'alaskanFishing',
                    name: '阿拉斯加垂钓',
                    bgImg: 'alaskanFishing.jpg',
                },
                
                {   
                    id:103,
                    gametype: 'stashoftheTitans',
                    name: '泰坦帝国',
                    bgImg: 'starshoftheTitans.jpg',
                },

                {   
                    id:104,
                    gametype: 'carnaval',
                    name: '狂欢节',
                    bgImg: 'carnaval.jpg',
                },

                {   
                    id:105,
                    gametype: 'voila!',
                    name: '哈啰巴黎',
                    bgImg: 'voila.jpg',
                },

                {   
                    id:106,
                    gametype: 'lionsPride',
                    name: '狮子的自尊',
                    bgImg: 'lionsPride.jpg',
                },
                
                {   
                    id:107,
                    gametype: 'bigTop',
                    name: '马戏团',
                    bgImg: 'bigTop.jpg',
                },
                {   
                    id:108,
                    gametype: 'breakdaBank',
                    name: '银行抢匪',
                    bgImg: 'breakdaBank.jpg',
                },
                

                {   
                    id:109,
                    gametype: 'purePlatinum',
                    name: '白金俱乐部',
                    bgImg: 'purePlatinum.jpg',
                },
                

                {   
                    id:110,
                    gametype: '5ReelDrive',
                    name: '侠盗猎车手',
                    bgImg: 'ReelDrive.jpg',
                },

                {   
                    id:111,
                    gametype: 'couchPotato',
                    name: '慵懒土豆',
                    bgImg: 'couchPotato.jpg',
                },

                {   
                    id:112,
                    gametype: 'halloweenies',
                    name: '万圣节派对',
                    bgImg: 'halloweenies.jpg',
                },
                
                {   
                    id:113,
                    gametype: 'whataHoot',
                    name: '猫头鹰乐园',
                    bgImg: 'whataHoot.jpg',
                },

                {   
                    id:114,
                    gametype: 'thunderstruckII',
                    name: '雷神2',
                    bgImg: 'thunderstruckII.jpg',
                },
                

                {   
                    id:115,
                    gametype: 'reelThunder',
                    name: '雷霆风暴',
                    bgImg: 'reelThunder.jpg',
                },

                {   
                    id:116,
                    gametype: 'isis',
                    name: '伊西斯',
                    bgImg: 'isis.jpg',
                },
                
                
                {   
                    id:117,
                    gametype: 'centreCourt',
                    name: '网球冠军',
                    bgImg: 'centreCourt.jpg',
                },

                {   
                    id:118,
                    gametype: 'theTwistedCircus',
                    name: '反转马戏团',
                    bgImg: 'theTwistedCircus.jpg',
                },

                {   
                    id:119,
                    gametype: 'starlightKiss',
                    name: '星光之吻',
                    bgImg: 'starlighKiss.jpg',
                },

                {   
                    id:120,
                    gametype: 'mayanPrincess',
                    name: '玛雅公主',
                    bgImg: 'mayanPrincess.jpg',
                },

                {   
                    id:121,
                    gametype: 'eaglesWings',
                    name: '疾风老鹰',
                    bgImg: 'eagleWings.jpg',
                },
            
                {   
                    id:122,
                    gametype: 'highSociety',
                    name: '上流社会',
                    bgImg: 'highSociety.jpg',
                },

                {   
                    id:123,
                    gametype: 'hitman',
                    name: '终极杀手',
                    bgImg: 'hitman.jpg',
                },
                {   
                    id:124,
                    gametype: 'americanRouletteGold',
                    name: '黄金美式轮盘',
                    bgImg: 'americanRouletteGold.jpg',
                },
                {   
                    id:125,
                    gametype: 'vegasStripBlackjackGold',
                    name: '黄金拉斯维加斯大道',
                    bgImg: 'vegasSingleDeckBlackjackGold.jpg',
                },
            
                {   
                    id:126,
                    gametype: 'vegasSingleDeckBlackjackGold',
                    name: '黄金拉斯维加斯(单副)',
                    bgImg: 'vegasSingleDeckBlackjackGold.jpg',
                },

                {   
                    id:127,
                    gametype: 'vegasDowntownBlackjackGold',
                    name: '金牌拉斯维加斯市中心',
                    bgImg: 'vegasDowntownBlackjackGold.jpg',
                },

                {   
                    id:128,
                    gametype: 'atlanticCityBlackjackGold',
                    name: '金牌大西洋城21点',
                    bgImg: 'atlanticCityBlackjackGold.jpg',
                },

                {   
                    id:129,
                    gametype: 'classicBlackjackGold',
                    name: '黄金经典21点',
                    bgImg: 'classicBlackjackGold.jpg',
                },

                {   
                    id:130,
                    gametype: 'acesAndEights',
                    name: 'A及8牌',
                    bgImg: 'acesAndEights.jpg',
                },


                
                {   
                    id:131,
                    gametype: 'bonusDeucesWild',
                    name: 'A及花牌',
                    bgImg: 'bonusDeucesWild.jpg',
                },

                {   
                    id:132,
                    gametype: 'deucesWild',
                    name: '奖金大放送',
                    bgImg: 'deucesWild.jpg',
                },

                {   
                    id:133,
                    gametype: 'doubleDoubleBonus',
                    name: '百搭二王',
                    bgImg: 'doubleDoubleBonus.jpg',
                },

                {   
                    id:134,
                    gametype: 'doubleDoubleBonus',
                    name: '翻倍红利扑克',
                    bgImg: 'doubleDoubleBonus.jpg',
                },

                {   
                    id:135,
                    gametype: 'europeanRoulette',
                    name: '黄金欧洲轮盘',
                    bgImg: 'europeanRoulette.jpg',
                },


                {   
                    id:136,
                    gametype: 'jacksOrBetter',
                    name: '对J高手',
                    bgImg: 'jacksOrBetter.jpg',
                },

                {   
                    id:137,
                    gametype: 'europeanBlackjackGold',
                    name: '黄金欧洲21点',
                    bgImg: 'europeanBlackjackGold.jpg',
                },

                //sg platform
                {
                   platform: "SG",
                   currentgame:"ngm",
                   locationSrc:"",

                   gamelist:[
                    
                {   
                    id:1,
                    gametype: 'S-LY02',
                    name: '发发发2',
                    bgImg: 'S-LY02.jpg',
                },


                {   
                    id:2,
                    gametype: 'S-GA01',
                    name: '斧头帮',
                    bgImg: 'S-GA01.jpg',
                },

                
                {   
                    id:3,
                    gametype: 'S-PW02',
                    name: '旺旺公主',
                    bgImg: 'S-PW02.jpg',
                },

                {   
                    id:4,
                    gametype: 'S-WP02',
                    name: '汪旺财',
                    bgImg: 'S-WP02.jpg',
                },

                {   
                    id:5,
                    gametype: 'S-DM01',
                    name: '大明帝国',
                    bgImg: 'S-DM01.jpg',
                },

                {   
                    id:6,
                    gametype: 'S-FL02',
                    name: '初恋',
                    bgImg: 'S-FL02.jpg',
                },

                {   
                    id:7,
                    gametype: 'S-FM02',
                    name: '齐天大胜',
                    bgImg: 'S-FM02.jpg',
                },

                {   
                    id:8,
                    gametype: 'S-PP01',
                    name: '潘精灵',
                    bgImg: 'S-PP01.jpg',
                },

                {   
                    id:9,
                    gametype: 'S-SH01',
                    name: '上海00发',
                    bgImg: 'S-SH01.jpg',
                },

                {   
                    id:10,
                    gametype: 'S-TZ01',
                    name: '森林之王',
                    bgImg: 'S-TZ01.jpg',
                },

                {   
                    id:11,
                    gametype: 'S-HY01',
                    name: '猴爷到',
                    bgImg: 'HoyeahMonkey_400x258_cn.jpg',
                },

                {   
                    id:12,
                    gametype: 'S-GC03',
                    name: '金鸡',
                    bgImg: 'goldenchicken_stage_04_400x258_2016_CN.jpg',
                },

                
                {   
                    id:13,
                    gametype: 'S-DG04',
                    name: '金龙赐福 SA',
                    bgImg: 'Grand_dragon-gold_400x258_CN.jpg',
                },

                {   
                    id:14,
                    gametype: 'S-FC03',
                    name: '发大财 SA',
                    bgImg: 'Grand_bigprosperity_400x258_CN.jpg',
                },

                {   
                    id:15,
                    gametype: 'S-WM03',
                    name: '五福门 SA',
                    bgImg: 'SA_5fortune_224x153cn.jpg',
                },

                {   
                    id:16,
                    gametype: 'S-FG01',
                    name: '新霸天下',
                    bgImg: 'xb.jpg',
                },
                {   
                    id:17,
                    gametype: 'S-TW01',
                    name: '虎大天王',
                    bgImg: 'hdtw.jpg',
                },
                {   
                    id:18,
                    gametype: 'S-NT01',
                    name: '海龙王',
                    bgImg: 'seaemperor_thumbs_400x258_2017_stage5_cn.jpg',
                },

                {   
                    id:19,
                    gametype: 'S-ZE01',
                    name: '天通雷神',
                    bgImg: 'zeus_400x258_cn.jpg',
                },

                {   
                    id:20,
                    gametype: 'S-GS04',
                    name: '吉星 SA',
                    bgImg: 'SA_GreatStar_224x153cn.jpg',
                },

                {   
                    id:21,
                    gametype: 'S-WC03',
                    name: '旺财 SA',
                    bgImg: 'SA_WongChoy_224x153cn.jpg',
                },

                {   
                    id:22,
                    gametype: 'S-LH03',
                    name: '狮心王SA',
                    bgImg: 'SA_KingTheLionHeart_224x153cn.jpg',
                },

                {   
                    id:23,
                    gametype: 'S-EG03',
                    name: '斩五门SA',
                    bgImg: 'SA_EmperorGate_224x153cn.jpg',
                },

                {   
                    id:24,
                    gametype: 'S-SP03',
                    name: '斯巴达SA',
                    bgImg: 'SA_Spartan_224x153cn.jpg',
                },

                {   
                    id:25,
                    gametype: 'S-SG04',
                    name: '将军令SA',
                    bgImg: 'SA_ShougenWar_224x153cn.jpg',
                },

                {   
                    id:26,
                    gametype: 'S-LE03',
                    name: '狮子王SA',
                    bgImg: 'SA_LionEmperor_224x153cn.jpg',
                },

                {   
                    id:27,
                    gametype: 'S-IL03',
                    name: '雪冰世界SA',
                    bgImg: 'SA_iceland_224x153cn.jpg',
                },

                {   
                    id:28,
                    gametype: 'S-IM03',
                    name: '印度神话SA',
                    bgImg: 'SA_IndianMyth_224x153cn.jpg',
                },

                {   
                    id:29,
                    gametype: 'S-LF01',
                    name: '风生水起',
                    bgImg: 'luckyfengshui_400x258_cn.jpg',
                },

                {   
                    id:30,
                    gametype: 'S-PK01',
                    name: '海盗霸王',
                    bgImg: 'pirateking_400x258_cn.jpg',
                },

                {   
                    id:31,
                    gametype: 'S-HF01',
                    name: '极速王者',
                    bgImg: 'highwayfortune_400x258_cn.jpg',
                },

                {   
                    id:32,
                    gametype: 'S-GP02',
                    name: '冠军高尔夫',
                    bgImg: 'golfchampion_400x258_cn.jpg',
                },

                {   
                    id:33,
                    gametype: 'SGGalacticCash',
                    name: '潘金莲 特别版',
                    bgImg: 'Goldenlotu_400x258__SE_cn.jpg',
                },
                {   
                    id:34,
                    gametype: 'S-PH02',
                    name: '新法老宝藏',
                    bgImg: 'kingpharoah_400x258_CN.jpg',
                },

                {   
                    id:35,
                    gametype: 'S-FO01',
                    name: '一路发发',
                    bgImg: 'fortune_400x258__cn.jpg',
                },

                {   
                    id:36,
                    gametype: 'S-PO01',
                    name: '宝袋精灵',
                    bgImg: 'pocketmon_400x258__cn.jpg',
                },

                {   
                    id:37,
                    gametype: 'S-BC01',
                    name: '财神宝宝',
                    bgImg: 'BabyCaishen_400x258__CN.jpg',
                },

                {   
                    id:38,
                    gametype: 'S-MR01',
                    name: '美人鱼',
                    bgImg: 'Mermaid_400x258__cn.jpg',
                },

                
                {   
                    id:39,
                    gametype: 'S-WP01',
                    name: '旺宝',
                    bgImg: 'wongpo_400X258__cn.jpg',
                },

                {   
                    id:40,
                    gametype: 'S-LE02',
                    name: '新狮子王',
                    bgImg: 'Lionemperor_400x258_CN.jpg',
                },

                {   
                    id:41,
                    gametype: 'S-IL02',
                    name: '新雪冰世界',
                    bgImg: 'SA_iceland_224x153cn.jpg',
                },

                {   
                    id:42,
                    gametype: 'S-IM02',
                    name: '新印度神话',
                    bgImg: 'IndianMYTH_400x258_CN.jpg',
                },

                {   
                    id:43,
                    gametype: 'S-SM01',
                    name: '疯狂足球',
                    bgImg: 'soccerMania_400x258_cn.jpg',
                },

                {   
                    id:44,
                    gametype: 'S-LK01',
                    name: '运财锂鱼',
                    bgImg: 'luckykoi_400x258_cn.jpg',
                },

                {   
                    id:45,
                    gametype: 'S-GO01',
                    name: '厨神',
                    bgImg: 'GODkitchen_400x258_cn.jpg',
                },

                {   
                    id:46,
                    gametype: 'S-DF01',
                    name: '青龙白虎',
                    bgImg: 'double-fortunes_400x258_cn.jpg',
                },

                {   
                    id:47,
                    gametype: 'S-AL01',
                    name: '阿里巴巴',
                    bgImg: 'alibaba_400x258__cn.jpg',
                },

                {   
                    id:48,
                    gametype: 'S-FD01',
                    name: '五龙吐珠',
                    bgImg: 'fortunes-dragon_400x258_cn.jpg',
                },

                

                {   
                    id:49,
                    gametype: 'S-CS01',
                    name: '财神888',
                    bgImg: 'caishen888_400x258__CN.jpg',
                },

                {   
                    id:50,
                    gametype: 'S-SM02',
                    name: '太空神猴',
                    bgImg: 'spacemonkey_400x258_cn.jpg',
                },

                {   
                    id:51,
                    gametype: 'S-LY01',
                    name: '发发发',
                    bgImg: 'fafafa_400x258_CN.jpg',
                },

                {   
                    id:52,
                    gametype: 'S-CM01',
                    name: '森林狂欢季',
                    bgImg: 'DrunkenJUNGLE_400x258_CN.jpg',
                },

                {   
                    id:53,
                    gametype: 'S-HL01',
                    name: '幸运坦克',
                    bgImg: 'luckytank__400x258_CN.jpg',
                },

                
                {   
                    id:54,
                    gametype: 'S-DG03',
                    name: '新金龙赐福',
                    bgImg: 'SA_DragonGold_224x153cn.jpg',
                },

               

                {   
                    id:55,
                    gametype: 'S-FC02',
                    name: '新发大财',
                    bgImg: 'SA_BigProsperity_224x153cn.jpg',
                },

                {   
                    id:56,
                    gametype: 'S-WM02',
                    name: '新五福门',
                    bgImg: 'Grand_5fortunes_400x258_cn.jpg',
                },

                {   
                    id:57,
                    gametype: 'S-GS03',
                    name: '新吉星',
                    bgImg: 'Grand_greatstar_400x258_cn.jpg',
                },

                {   
                    id:58,
                    gametype: 'S-WC02',
                    name: '新旺财',
                    bgImg: 'GrandWongchoy_400x258_CN.jpg',
                },

                {   
                    id:59,
                    gametype: 'S-LH02',
                    name: '新狮心王',
                    bgImg: 'kingoflionheart_400x258_CN.jpg',
                },

                {   
                    id:60,
                    gametype: 'S-EG02',
                    name: '新斩五门',
                    bgImg: 'emporergate_400x258__cn.jpg',
                },

                {   
                    id:61,
                    gametype: 'S-SP02',
                    name: '新斯巴达',
                    bgImg: 'spartan_400x258_CN.jpg',
                },

                
                {   
                    id:62,
                    gametype: 'S-SG03',
                    name: '新将军令',
                    bgImg: 'shougen_400x258_CN.jpg',
                },
                {   
                    id:63,
                    gametype: 'S-PT01',
                    name: '花木兰',
                    bgImg: 'huamulan_400x258_CN.jpg',
                },

                {   
                    id:64,
                    gametype: 'S-GG01',
                    name: '如鱼得水',
                    bgImg: 'aquacash_400x258__cn.jpg',
                },

                {   
                    id:65,
                    gametype: 'S-GC02',
                    name: '新中华之最',
                    bgImg: 'GreatCHINA__400x258_cn.jpg',
                },

                {   
                    id:66,
                    gametype: 'S-JF02',
                    name: '新日本福气',
                    bgImg: 'japanfortune_400x258_cn.jpg',
                },

                {   
                    id:67,
                    gametype: 'S-LI02',
                    name: '新冒险火岛',
                    bgImg: 'lavaisland_400x258_cn.jpg',
                },
                {   
                    id:68,
                    gametype: 'S-AT02',
                    name: '新泰国神游',
                    bgImg: 'amazingthailand_400x258_cn.jpg',
                },
                {   
                    id:69,
                    gametype: 'S-HH01',
                    name: '熊之蜜',
                    bgImg: 'honeyhunter_400x258_cn.jpg',
                },

                {   
                    id:70,
                    gametype: 'S-LC01',
                    name: '天降财神',
                    bgImg: 'luckycaishen_400x258_cn.jpg',
                },

                {   
                    id:71,
                    gametype: 'S-SK01',
                    name: '野生动物园',
                    bgImg: 'safariking_400x258_cn.jpg',
                },
                {   
                    id:72,
                    gametype: 'S-SG02',
                    name: '圣诞大礼',
                    bgImg: 'SantaGIFT_400x258_CN.jpg',
                },

                {   
                    id:73,
                    gametype: 'S-BB01',
                    name: '金狮拜年',
                    bgImg: 'festiveLION_400x258_cn.jpg',
                },

                {   
                    id:74,
                    gametype: 'S-CY01',
                    name: '财源广进',
                    bgImg: 'caiyuanguangjin_400x258_cn.jpg',
                },
                {   
                    id:75,
                    gametype: 'S-LM01',
                    name: '超吉猫',
                    bgImg: 'luckymeow_400x258_cn.jpg',
                },
                {   
                    id:76,
                    gametype: 'S-CC01',
                    name: '至尊厨师',
                    bgImg: 'MasterChef_400x258_cn.jpg',
                },

                {   
                    id:75,
                    gametype: 'S-DV01',
                    name: '爸爸飞那儿',
                    bgImg: 'daddyvacations_400x258_cn.jpg',
                },

                
                {   
                    id:76,
                    gametype: 'S-RK01',
                    name: '铁路王',
                    bgImg: 'railwayking_400x258_cn.jpg',
                },

                {   
                    id:77,
                    gametype: 'S-DX01',
                    name: '大福小福',
                    bgImg: 'dafuxiaofu_400x258_cn.jpg',
                },

                {   
                    id:78,
                    gametype: 'S-LS01',
                    name: '马上赢',
                    bgImg: 'S-LS01.jpg',
                },

                {   
                    id:79,
                    gametype: 'S-TS02',
                    name: '新中国好歌声',
                    bgImg: 'S-TS02.jpg',
                },

                {   
                    id:80,
                    gametype: 'S-MH02',
                    name: '新神錘魔咒',
                    bgImg: 'magichammer_400x258_cn.jpg',
                },

                {   
                    id:81,
                    gametype: 'S-FZ02',
                    name: '新父女战殭屍',
                    bgImg: 'fatherVsZombie_400x258_cn.jpg',
                },

                {   
                    id:82,
                    gametype: 'S-BF02',
                    name: '新大脚先生',
                    bgImg: 'big-foot_400x258__cn.jpg',
                },

                {   
                    id:83,
                    gametype: 'S-MP02',
                    name: '新下水道小魔兽',
                    bgImg: 'monstertunnel_400x258_cn.jpg',
                },

                {   
                    id:84,
                    gametype: 'S-RG02',
                    name: '新魔幻宝石',
                    bgImg: 'rising-gems_400x258_cn.jpg',
                },

                {   
                    id:85,
                    gametype: 'S-SA02',
                    name: '新石器时代',
                    bgImg: 'spinstone_400x258_cn.jpg',
                },

                
                {   
                    id:86,
                    gametype: 'S-FB02',
                    name: '新金靴世界杯',
                    bgImg: 'worldcupgolenboo_400x258_cn.jpg',
                },

                {   
                    id:87,
                    gametype: 'S-TP01',
                    name: '乐天堂',
                    bgImg: 'FunPAradise_400x258_cn.jpg',
                },

                {   
                    id:88,
                    gametype: 'S-JT01',
                    name: '杰克海盗',
                    bgImg: 'jackthepirate_400x258_cn.jpg',
                },

                
                {   
                    id:89,
                    gametype: 'S-GW01',
                    name: '黄金黥鱼',
                    bgImg: 'S-GW01.jpg',
                },

                {   
                    id:90,
                    gametype: 'A-MT02',
                    name: '霹雳神猴',
                    bgImg: 'A-MT02.jpg',
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