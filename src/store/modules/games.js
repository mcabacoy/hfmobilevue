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
        },
        {
            platform: "PT",
            currentgame: "ngm",
            locationSrc: "",
            gamelist: [
                {   
                    id: 1,
                    gametype: 'zcjb',
                    name: '招财进宝',
                    bgImg: 'zcjb.jpg',
                },
                {
                    id: 2,
                    gametype: 'fm',
                    name: '古怪猴子',
                    bgImg: 'fm.jpg',
                },
                {
                    id: 3,
                    gametype: 'trpmnk',
                    name: '三倍猴子',
                    bgImg: 'trpmnk.jpg',
                },
                {
                    id: 4,
                    gametype: 'ct',
                    name: '船长的宝藏',
                    bgImg: 'ct.jpg',
                },
                {
                    id: 5,
                    gametype: 'hk',
                    name: '高速之王',
                    bgImg: 'hk.jpg',
                },
                {
                    id: 6,
                    gametype: 'bib',
                    name: '深蓝冒险',
                    bgImg: 'bib.jpg',
                },
                {
                    id: 7,
                    gametype: 'gos',
                    name: '黄金旅行',
                    bgImg: 'gos.jpg',
                },
                {
                    id: 8,
                    gametype: 'bob',
                    name: '奖金熊',
                    bgImg: 'bob.jpg',
                },
                {
                    id: 9,
                    gametype: 'zctzhk',
                    name: '招财童子',
                    bgImg: 'zctz.jpg',
                },
                {
                    id: 10,
                    gametype: 'cm',
                    name: '中国厨房',
                    bgImg: 'cm.jpg',
                },
                {
                    id: 11,
                    gametype: 'eas',
                    name: '惊喜复活节',
                    bgImg: 'slot3_img27.jpg',
                },
                {
                    id: 12,
                    gametype: 'c7',
                    name: '疯狂777',
                    bgImg: 'slot3_img53c7.jpg',
                },
                //--
                {
                    id: 13,
                    gametype: 'dnr',
                    name: '海豚礁',
                    bgImg: 'dnr.jpg',
                },
                {
                    id: 14,
                    gametype: 'ssp',
                    name: '圣诞老人的惊喜',
                    bgImg: 'ssp.jpg',
                },
                {
                    id: 15,
                    gametype: 'nian',
                    name: '年年有鱼',
                    bgImg: 'nian_k.jpg',
                },
                {
                    id: 16,
                    gametype: 'hh',
                    name: '鬼屋',
                    bgImg: 'hh.jpg',
                },
                {
                    id: 17,
                    gametype: 'fcgzc7',
                    name: '翡翠公主',
                    bgImg: 'fcgz.jpg',
                },
                {
                    id: 18,
                    gametype: 'bt',
                    name: '百慕大三角',
                    bgImg: 'bt.jpg',
                },
                {
                    id: 19,
                    gametype: 'jqw',
                    name: '金钱蛙',
                    bgImg: 'jqw.jpg',
                },
                {
                    id: 20,
                    gametype: 'donq',
                    name: '唐吉诃德的财富',
                    bgImg: 'donq.jpg',
                },
                {
                    id: 21,
                    gametype: 'whk',
                    name: '白狮王',
                    bgImg: 'whk.jpg',
                },
                {
                    id: 22,
                    gametype: 'qnw',
                    name: '女王权杖',
                    bgImg: 'qnw.jpg',
                },
                {
                    id: 23,
                    gametype: 'hb',
                    name: '性感甜心',
                    bgImg: 'hb.jpg',
                },
                {
                    id: 24,
                    gametype: 'foy',
                    name: '青春之泉',
                    bgImg: 'foy.jpg',
                },
                //--
                {
                    id: 25,
                    gametype: 'mcb',
                    name: '钞票先生',
                    bgImg: 'mcb.jpg',
                },
                {
                    id: 26,
                    gametype: 'pgv',
                    name: '企鹅假期',
                    bgImg: 'pgv.jpg',
                },
                {
                    id: 27,
                    gametype: 'glrj',
                    name: '角斗士累积奖池',
                    bgImg: 'glrj.jpg',
                },
                {
                    id: 28,
                    gametype: 'gtsatq',
                    name: '亚特兰蒂斯女王',
                    bgImg: 'gtsatq.jpg',
                },
                {
                    id: 29,
                    gametype: 'bl',
                    name: '海滨嘉年华',
                    bgImg: 'bl.jpg',
                },
                {
                    id: 30,
                    gametype: 'aogs',
                    name: '诸神时代',
                    bgImg: 'aogs.jpg',
                },
                {
                    id: 31,
                    gametype: 'furf',
                    name: '狂暴4',
                    bgImg: 'furf.jpg',
                },
                {
                    id: 32,
                    gametype: 'zeus',
                    name: '奥林匹斯之王',
                    bgImg: 'zeus.jpg',
                },
                {
                    id: 33,
                    gametype: 'ctiv',
                    name: '猫闹维加斯',
                    bgImg: 'ctiv.jpg',
                },
                {
                    id: 34,
                    gametype: 'evj',
                    name: '幻影骑手7累积奖池',
                    bgImg: 'evj.jpg',
                },
                {
                    id: 35,
                    gametype: 'fdtjg',
                    name: '诸神时代',
                    bgImg: 'fdtjg.jpg',
                },
                {
                    id: 36,
                    gametype: 'fnfrj',
                    name: '酷炫水果',
                    bgImg: 'fnfrj.jpg',
                },
                //--
                {
                    id: 37,
                    gametype: 'jpgt',
                    name: '巨额奖池',
                    bgImg: 'jpgt.jpg',
                },
                {
                    id: 38,
                    gametype: 'lndg',
                    name: '黄金之地',
                    bgImg: 'lndg.jpg',
                },
                {
                    id: 39,
                    gametype: 'wlg',
                    name: '舞龙',
                    bgImg: 'wlg.jpg',
                },
                {
                    id: 40,
                    gametype: 'ftg',
                    name: '五虎上将',
                    bgImg: 'ftg.jpg',
                },
                {
                    id: 41,
                    gametype: 'ashamw',
                    name: '野生亚马逊',
                    bgImg: 'ashamw.jpg',
                },
                {
                    id: 42,
                    gametype: 'arc',
                    name: '亚契',
                    bgImg: 'arc.jpg',
                },
                {
                    id: 43,
                    gametype: 'chl',
                    name: '樱之恋',
                    bgImg: 'chl.jpg',
                },
                {
                    id: 44,
                    gametype: 'ashcpl',
                    name: '大量宝箱',
                    bgImg: 'ashcpl.jpg',
                },
                {
                    id: 45,
                    gametype: 'gtscbl',
                    name: '星际飙客',
                    bgImg: 'gtscbl.jpg',
                },
                {
                    id: 46,
                    gametype: 'esm',
                    name: '埃斯梅拉达',
                    bgImg: 'esm.jpg',
                },
                {
                    id: 47,
                    gametype: 'fxf',
                    name: '狐狸之宝',
                    bgImg: 'fxf.jpg',
                },
                {
                    id: 48,
                    gametype: 'ashfmf',
                    name: '圆月财富',
                    bgImg: 'ashfmf.jpg',
                },
                //--
                {
                    id: 49,
                    gametype: 'fff',
                    name: '酷炫水果庄园',
                    bgImg: 'fff.jpg',
                },
                {
                    id: 50,
                    gametype: 'ges',
                    name: '酷炫水果庄园',
                    bgImg: 'ges.jpg',
                },
                {
                    id: 51,
                    gametype: 'gemq',
                    name: '宝石女王',
                    bgImg: 'gemq.jpg',
                },
                {
                    id: 52,
                    gametype: 'ashhotj',
                    name: '丛林深处',
                    bgImg: 'ashhotj.jpg',
                },
                {
                    id: 53,
                    gametype: 'irl',
                    name: '幸运爱尔兰',
                    bgImg: 'irl.jpg',
                },
                {
                    id: 54,
                    gametype: 'mgstk',
                    name: '神奇堆叠',
                    bgImg: 'mgstk.jpg',
                },
                {
                    id: 55,
                    gametype: 'gtsmrln',
                    name: '玛利莲.梦露',
                    bgImg: 'gtsmrln.jpg',
                },
                {
                    id: 56,
                    gametype: 'pmn',
                    name: '月下美洲豹',
                    bgImg: 'pmn.jpg',
                },
                {
                    id: 57,
                    gametype: 'pst',
                    name: '法老的秘密',
                    bgImg: 'pst.jpg',
                },
                {
                    id: 58,
                    gametype: 'photk',
                    name: '紫热',
                    bgImg: 'photk.jpg',
                },
                {
                    id: 59,
                    gametype: 'gtssmbr',
                    name: '桑巴巴西',
                    bgImg: 'gtssmbr.jpg',
                },
                {
                    id: 60,
                    gametype: 'samz',
                    name: '亚马逊之谜',
                    bgImg: 'samz.jpg',
                },
                //--
                {
                    id: 61,
                    gametype: 'shmst',
                    name: '神探夏洛克',
                    bgImg: 'shmst.jpg',
                },
                {
                    id: 62,
                    gametype: 'sx',
                    name: '四象',
                    bgImg: 'sx.jpg',
                },
                {
                    id: 63,
                    gametype: 'sis',
                    name: '沉默的武士',
                    bgImg: 'sis.jpg',
                },
                {
                    id: 64,
                    gametype: 'sol',
                    name: '幸运直击',
                    bgImg: 'sol.jpg',
                },
                {
                    id: 65,
                    gametype: 'cnpr',
                    name: '甜蜜派对',
                    bgImg: 'cnpr.jpg',
                },
                {
                    id: 66,
                    gametype: 'thtk',
                    name: '泰庙',
                    bgImg: 'thtk.jpg',
                },
                {
                    id: 67,
                    gametype: 'lvb',
                    name: '爱之舟',
                    bgImg: 'lvb.jpg',
                },
                {
                    id: 68,
                    gametype: 'tmqd',
                    name: '三个火枪手',
                    bgImg: 'tmqd.jpg',
                },
                {
                    id: 69,
                    gametype: 'topg',
                    name: '壮志凌云',
                    bgImg: 'topg.jpg',
                },
                {
                    id: 70,
                    gametype: 'vcstd',
                    name: '豪华度假站',
                    bgImg: 'vcstd.jpg',
                },
                {
                    id: 71,
                    gametype: 'mobdt',
                    name: '沙漠珍宝',
                    bgImg: 'mobdt.jpg',
                },
                {
                    id: 72,
                    gametype: 'nk',
                    name: '海王星王国',
                    bgImg: 'nk.jpg',
                },
                //--
                {
                    id: 73,
                    gametype: 'gtswg',
                    name: '疯狂赌徒',
                    bgImg: 'gtswg.jpg',
                },
                {
                    id: 74,
                    gametype: 'gtscnb',
                    name: '警察与强盗',
                    bgImg: 'gtscnb.jpg',
                },
                {
                    id: 75,
                    gametype: 'hlf',
                    name: '警察与强盗',
                    bgImg: 'hlf.jpg',
                },
                {
                    id: 76,
                    gametype: 'gtspor',
                    name: '超级富翁',
                    bgImg: 'gtspor.jpg',
                },
                {
                    id: 77,
                    gametype: 'fbr',
                    name: '足球规则',
                    bgImg: 'fbr.jpg',
                },
                {
                    id: 78,
                    gametype: 'sib',
                    name: '银色子弹',
                    bgImg: 'sib.jpg',
                },
                {
                    id: 79,
                    gametype: 'ash3brg',
                    name: '三牌扑克',
                    bgImg: 'ash3brg.jpg',
                },
                {
                    id: 80,
                    gametype: 'ro',
                    name: '轮盘',
                    bgImg: 'ro.jpg',
                },
                {
                    id: 81,
                    gametype: 'mobbj',
                    name: '多手21点',
                    bgImg: 'mobbj.jpg',
                },
                {
                    id: 82,
                    gametype: 'bs',
                    name: '百家乐',
                    bgImg: 'bs.jpg',
                },
                {
                    id: 83,
                    gametype: 'cheaasib',
                    name: '赌城扑克',
                    bgImg: 'cheaa.jpg',
                },
                {
                    id: 84,
                    gametype: 'catqc',
                    name: '猫后',
                    bgImg: 'catqc.jpg',
                },
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