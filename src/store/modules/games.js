const state = {
    games : [
        //PT1
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
                    gametype: 'sw_kxcs',
                    name: '酷炫财神',
                    bgImg: 'sw_kxcs.jpg',
                },
                {
                    id:17,
                    gametype: 'sw_pe',
                    name: '海盗女皇',
                    bgImg: 'sw_pe.jpg',
                },
                {
                    id:18,
                    gametype: 'sw_zcxm',
                    name: '招财熊猫',
                    bgImg: 'sw_zcxm.jpg',
                },
                {
                    id:19,
                    gametype: 'sw_ts',
                    name: '三姐妹',
                    bgImg: 'sw_ts.jpg',
                },
                {
                    id:20,
                    gametype: 'sw_tr',
                    name: '现金霸王龙',
                    bgImg: 'sw_tr.jpg',
                },
                {
                    id:21,
                    gametype: 'sw_pg',
                    name: '熊猫财富',
                    bgImg: 'sw_pg.jpg',
                },
                {
                    id:22,
                    gametype: 'sw_88sf',
                    name: '88-师父',
                    bgImg: 'sw_88sf.jpg',
                },
                {
                    id:23,
                    gametype: 'sw_go8d',
                    name: '八方女神',
                    bgImg: 'sw_go8d.jpg',
                },
                {
                    id:24,
                    gametype: 'sw_fc',
                    name: '财富城堡',
                    bgImg: 'sw_fc.jpg',
                },
                //--
                {
                    id:25,
                    gametype: 'sw_csy',
                    name: '财神爷',
                    bgImg: 'sw_csy.jpg',
                },
                {
                    id:26,
                    gametype: 'sw_mt',
                    name: '超强三人组',
                    bgImg: 'sw_mt.jpg',
                },
                {
                    id:27,
                    gametype: 'sw_ld',
                    name: '傳奇巨龍',
                    bgImg: 'sw_ld.jpg',
                },
                {
                    id:28,
                    gametype: 'sw_ggdn',
                    name: '黃金花園',
                    bgImg: 'sw_ggdn.jpg',
                },
                {
                    id:29,
                    gametype: 'sw_jxl',
                    name: '吉祥龙',
                    bgImg: 'sw_jxl.jpg',
                },
                {
                    id:30,
                    gametype: 'sw_9s1k',
                    name: '九子一王',
                    bgImg: 'sw_9s1k.jpg',
                },
                {
                    id:31,
                    gametype: 'sw_wq',
                    name: '狂野麒麟',
                    bgImg: 'sw_wq.jpg',
                },
                {
                    id:32,
                    gametype: 'sw_h2h',
                    name: '两心知',
                    bgImg: 'sw_h2h.jpg',
                },
                {
                    id:33,
                    gametype: 'sw_mj',
                    name: '美人鱼宝藏',
                    bgImg: 'sw_mj.jpg',
                },
                {
                    id:34,
                    gametype: 'sw_gg',
                    name: '名利双收',
                    bgImg: 'sw_gg.jpg',
                },
                {
                    id:35,
                    gametype: 'sw_totiatp',
                    name: '逆戟鲸，冰山和企鹅',
                    bgImg: 'sw_totiatp.jpg',
                },
                {
                    id:36,
                    gametype: 'sw_t2d',
                    name: '双龙传',
                    bgImg: 'sw_t2d.jpg',
                },
                //--
                {
                    id:37,
                    gametype: 'sw_rc',
                    name: '糖果炸弹',
                    bgImg: 'sw_rc.jpg',
                },
                {
                    id:38,
                    gametype: 'sw_hp',
                    name: '天上凤凰',
                    bgImg: 'sw_hp.jpg',
                },
                {
                    id:39,
                    gametype: 'sw_qv',
                    name: '维京女王',
                    bgImg: 'sw_hp.jpg',
                },
                {
                    id:40,
                    gametype: 'sw_sx',
                    name: '囍',
                    bgImg: 'List_newPT_sw_sq.jpg',
                },
                {
                    id:41,
                    gametype: 'sw_pvg',
                    name: '熊猫vs山羊',
                    bgImg: 'sw_pvg.jpg',
                },
                {
                    id:42,
                    gametype: 'sw_pp',
                    name: '熊猫奖励',
                    bgImg: 'sw_pp.jpg',
                },
                {
                    id:43,
                    gametype: 'sw_cts',
                    name: '游园会',
                    bgImg: 'sw_cts.jpg',
                },
                {
                    id:44,
                    gametype: 'sw_kog',
                    name: '众神之王',
                    bgImg: 'sw_kog.jpg',
                },
                {
                    id:45,
                    gametype: 'sw_mer',
                    name: '美人鱼',
                    bgImg: 'List_newPT_sw_mer.jpg',
                },
                {
                    id:46,
                    gametype: 'sw_mrmnky',
                    name: '猴子先生',
                    bgImg: 'List_newPT_sw_mrmnky.jpg',
                },
                {
                    id:47,
                    gametype: 'sw_nyf',
                    name: '新年财富',
                    bgImg: 'List_newPT_sw_nyf.jpg',
                },
                {
                    id:48,
                    gametype: 'sw_omqjp',
                    name: '老夫子',
                    bgImg: 'List_newPT_sw_omqjp.jpg',
                },
                //--
                {
                    id:49,
                    gametype: 'sw_pc',
                    name: '熊猫厨神',
                    bgImg: 'List_newPT_sw_pc.jpg',
                },
                {
                    id:50,
                    gametype: 'sw_sf',
                    name: '三福',
                    bgImg: 'List_newPT_sw_sf.jpg',
                },
                {
                    id:51,
                    gametype: 'sw_slbs',
                    name: '神龙宝石',
                    bgImg: 'List_newPT_sw_slbs.jpg',
                },
                {
                    id:52,
                    gametype: 'sw_sq',
                    name: '冰雪女王',
                    bgImg: 'List_newPT_sw_sq.jpg',
                },
                {
                    id:53,
                    gametype: 'sw_fp',
                    name: '浴火凤凰',
                    bgImg: 'List_newPT_sw_fp.jpg',
                },
                {
                    id:54,
                    gametype: 'sw_fbb',
                    name: '福宝宝',
                    bgImg: 'List_newPT_sw_fbb.jpg',
                },
                {
                    id:55,
                    gametype: 'sw_fufish_intw',
                    name: '捕鱼多福',
                    bgImg: 'List_newPT_sw_fufish_intw.jpg',
                },
                {
                    id:56,
                    gametype: 'sw_gol',
                    name: '闪电之神',
                    bgImg: 'List_newPT_sw_gol.jpg',
                },
                {
                    id:57,
                    gametype: 'sw_gm',
                    name: '猩猩月亮',
                    bgImg: 'List_newPT_sw_gm.jpg',
                },
                {
                    id:58,
                    gametype: 'sw_mf',
                    name: '吉祥招财猫',
                    bgImg: 'List_newPT_sw_mf.jpg',
                },
                {
                    id:59,
                    gametype: 'sw_qoiaf',
                    name: '冰火女王',
                    bgImg: 'List_newPT_sw_qoiaf.jpg',
                },
                {
                    id:60,
                    gametype: 'sw_rf',
                    name: '拉美西斯财富',
                    bgImg: 'List_newPT_sw_rf.jpg',
                },
                //--
                {
                    id:61,
                    gametype: 'sw_sod',
                    name: '钻石交响曲',
                    bgImg: 'List_newPT_sw_sod.jpg',
                },
                {
                    id:62,
                    gametype: 'sw_al',
                    name: '亚马逊美人',
                    bgImg: 'List_newPT_sw_al.jpg',
                },
                {
                    id:63,
                    gametype: 'sw_dhcf',
                    name: '大黑赐福',
                    bgImg: 'List_newPT_sw_dhcf.jpg',
                },
                {
                    id:64,
                    gametype: 'sw_dd',
                    name: '快乐海豚',
                    bgImg: 'List_newPT_sw_dd.jpg',
                },
                {
                    id:65,
                    gametype: 'sw_db',
                    name: '双倍奖金',
                    bgImg: 'List_newPT_sw_db.jpg',
                },
                {
                    id:66,
                    gametype: 'sw_dj',
                    name: '丛林翻倍赢',
                    bgImg: 'List_newPT_sw_dj.jpg',
                },
                {
                    id:67,
                    gametype: 'sw_rm',
                    name: '狂热重转',
                    bgImg: 'List_newPT_sw_rm.jpg',
                },
                {
                    id:68,
                    gametype: 'sw_tc',
                    name: '虎虎生财',
                    bgImg: 'List_newPT_sw_tc.jpg',
                },
                {
                    id:69,
                    gametype: 'sw_fufish-jp',
                    name: '捕鱼累积奖池',
                    bgImg: 'List_newPT_sw_fufish_intw.jpg',
                },
                {
                    id:70,
                    gametype: 'sw_ycs',
                    name: '迎财神',
                    bgImg: 'List_newPT_sw_ycs.jpg',
                },
                {
                    id:71,
                    gametype: 'sw_rs',
                    name: '崛起的武士',
                    bgImg: 'List_newPT_sw_rs.jpg',
                },
                {
                    id:72,
                    gametype: 'sw_lodk',
                    name: '龙鲤传奇',
                    bgImg: 'List_newPT_sw_lodk.jpg',
                },
                //--
                {
                    id:73,
                    gametype: 'sw_scyd',
                    name: '生财有道',
                    bgImg: 'List_newPT_sw_scyd.jpg',
                },
                {
                    id:74,
                    gametype: 'sw_888t',
                    name: '金龟发发发',
                    bgImg: 'List_newPT_sw_888t.jpg',
                },
                {
                    id:75,
                    gametype: 'sw_sgcf',
                    name: '水果财富',
                    bgImg: 'List_newPT_sw_sgcf.jpg',
                }
            ]
        },
        //PT
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
                    bgImg: 'slot3_img53.jpg',
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
                    bgImg: 'slot4_img19.jpg',
                },
                {
                    id: 83,
                    gametype: 'cheaasib',
                    name: '赌城扑克',
                    bgImg: 'slot4_img27.jpg',
                },
                {
                    id: 84,
                    gametype: 'catqc',
                    name: '猫后',
                    bgImg: 'catqc.jpg',
                },
            ]
        },
        //HABA
        {
            platform:  "HABA",
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
                    gametype: 'SG12Zodiacs',
                    name: '12生肖',
                    bgImg: 'List_HB_SG12Zodiacs.jpg',
                },
                {   
                    id: 2,
                    gametype: 'SGAllForOne',
                    name: '三剑客',
                    bgImg: 'List_HB_SGAllForOne.jpg',
                },
                {   
                    id: 3,
                    gametype: 'SGArcaneElements',
                    name: '神秘元素',
                    bgImg: 'List_HB_SGArcaneElements.jpg',
                },
                {   
                    id: 4,
                    gametype: 'SGArcticWonders',
                    name: '北极奇迹',
                    bgImg: 'List_HB_SGArcticWonders.jpg',
                },
                {   
                    id: 5,
                    gametype: 'SGAzlandsGold',
                    name: '亚兹特兰金 ',
                    bgImg: 'List_HB_SGAzlandsGold.jpg',
                },
                {   
                    id: 6,
                    gametype: 'SGBarnstormerBucks',
                    name: '农场现金',
                    bgImg: 'List_HB_SGBarnstormerBucks.jpg',
                },
                {   
                    id: 7,
                    gametype: 'SGBikiniIsland',
                    name: '比基尼岛',
                    bgImg: 'List_HB_SGBikiniIsland.jpg',
                },
                {   
                    id: 8,
                    gametype: 'SGBombsAway',
                    name: '炸弹追击',
                    bgImg: 'List_HB_SGBombsAway.jpg',
                },
                {   
                    id: 9,
                    gametype: 'SGBuggyBonus',
                    name: '昆虫宝',
                    bgImg: 'List_HB_SGBuggyBonus.jpg',
                },
                {   
                    id: 10,
                    gametype: 'SGCarnivalCash',
                    name: '现金嘉年华',
                    bgImg: 'List_HB_SGCarnivalCash.jpg',
                },
                {   
                    id: 11,
                    gametype: 'SGCashReef',
                    name: '农场现金',
                    bgImg: 'List_HB_SGCashReef.jpg',
                },
                {   
                    id: 12,
                    gametype: 'SGCoyoteCrash',
                    name: '狼贼夺宝',
                    bgImg: 'List_HB_SGCoyoteCrash.jpg',
                },
                //--
                {   
                    id: 13,
                    gametype: 'SGDiscoFunk',
                    name: '舞厅技巧',
                    bgImg: 'List_HB_SGDiscoFunk.jpg',
                },
                {   
                    id: 14,
                    gametype: 'SGDrFeelgood',
                    name: '好感医生',
                    bgImg: 'List_HB_SGDrFeelgood.jpg',
                },
                {   
                    id: 15,
                    gametype: 'SGTheDragonCastle',
                    name: '龙之城堡',
                    bgImg: 'List_HB_SGTheDragonCastle.jpg',
                },
                {   
                    id: 16,
                    gametype: 'SGDragonsRealm',
                    name: '神龙之境',
                    bgImg: 'List_HB_SGDragonsRealm.jpg',
                },
                {   
                    id: 17,
                    gametype: 'SGDragonsThrone',
                    name: '龙之宝座',
                    bgImg: 'List_HB_SGDragonsThrone.jpg',
                },
                {   
                    id: 18,
                    gametype: 'SGFaCaiShen',
                    name: '发财神',
                    bgImg: 'List_HB_SGFaCaiShen.jpg',
                },
                {   
                    id: 19,
                    gametype: 'SGFenghuang',
                    name: '凤凰',
                    bgImg: 'List_HB_SGFenghuang.jpg',
                },
                {   
                    id: 20,
                    gametype: 'SGFireRooster',
                    name: '公鸡王',
                    bgImg: 'List_HB_SGFireRooster.jpg',
                },
                {   
                    id: 21,
                    gametype: 'SGFlyingHigh',
                    name: '高飞',
                    bgImg: 'List_HB_SGFlyingHigh.jpg',
                },
                {   
                    id: 22,
                    gametype: 'SGFrontierFortunes',
                    name: '边境之福',
                    bgImg: 'List_HB_SGFrontierFortunes.jpg',
                },
                {   
                    id: 23,
                    gametype: 'SGGalacticCash',
                    name: '银河大战',
                    bgImg: 'List_HB_SGGalacticCash.jpg',
                },
                {   
                    id: 24,
                    gametype: 'SGGangsters',
                    name: '黑手党',
                    bgImg: 'List_HB_SGGangsters.jpg',
                },
                //--
                {   
                    id: 25,
                    gametype: 'SGGoldRush',
                    name: '淘金疯狂',
                    bgImg: 'List_HB_SGGoldRush.jpg',
                },
                {   
                    id: 26,
                    gametype: 'SGGoldenUnicorn',
                    name: '金麒麟',
                    bgImg: 'List_HB_SGGoldenUnicorn.jpg',
                },
                {   
                    id: 27,
                    gametype: 'SGGrapeEscape',
                    name: '逃跑的葡萄',
                    bgImg: 'List_HB_SGGrapeEscape.jpg',
                },
                {   
                    id: 28,
                    gametype: 'SGHauntedHouse',
                    name: '鬼屋',
                    bgImg: 'List_HB_SGHauntedHouse.jpg',
                },
                {   
                    id: 29,
                    gametype: 'SGIndianCashCatcher',
                    name: '印第安追梦',
                    bgImg: 'List_HB_SGIndianCashCatcher.jpg',
                },
                {   
                    id: 30,
                    gametype: 'SGJugglenaut',
                    name: '惊喜秀',
                    bgImg: 'List_HB_SGJugglenaut.jpg',
                },
                {   
                    id: 31,
                    gametype: 'SGJungleRumble',
                    name: '丛林怒吼',
                    bgImg: 'List_HB_SGJungleRumble.jpg',
                },
                {   
                    id: 32,
                    gametype: 'SGKanesInferno',
                    name: '凯恩地狱',
                    bgImg: 'List_HB_SGKanesInferno.jpg',
                },
                {   
                    id: 33,
                    gametype: 'SGKingTutsTomb',
                    name: '惊喜秀',
                    bgImg: 'List_HB_SGKingTutsTomb.jpg',
                },
                {   
                    id: 34,
                    gametype: 'SGLittleGreenMoney',
                    name: '小青钱',
                    bgImg: 'List_HB_SGLittleGreenMoney.jpg',
                },
                {   
                    id: 35,
                    gametype: 'SGMonsterMashCash',
                    name: '怪物现金',
                    bgImg: 'List_HB_SGMonsterMashCash.jpg',
                },
                {   
                    id: 36,
                    gametype: 'SGMrBling',
                    name: '珠光宝气',
                    bgImg: 'List_HB_SGMrBling.jpg',
                },
                //--
                {   
                    id: 37,
                    gametype: 'SGMummyMoney',
                    name: '金钱木乃伊 ',
                    bgImg: 'List_HB_SGMummyMoney.jpg',
                },
                {  
                    id: 38,
                    gametype: 'SGMysticFortune',
                    name: '神秘宝藏',
                    bgImg: 'List_HB_SGMysticFortune.jpg',
                },
                {   
                    id: 39,
                    gametype: 'SGOceansCall',
                    name: '海洋之音',
                    bgImg: 'List_HB_SGOceansCall.jpg',
                },
                {   
                    id: 40,
                    gametype: 'SGPamperMe',
                    name: '宠爱我',
                    bgImg: 'List_HB_SGPamperMe.jpg',
                },
                {   
                    id: 41,
                    gametype: 'SGPoolShark',
                    name: '台球高手',
                    bgImg: 'List_HB_SGPoolShark.jpg',
                },
                {   
                    id: 42,
                    gametype: 'SGQueenofQueens1024',
                    name: '女王之女王II',
                    bgImg: 'List_HB_SGQueenofQueens1024.jpg',
                },
                {   
                    id: 43,
                    gametpe: 'SGQueenofQueens243',
                    name: '女王之女王',
                    bgImg: 'List_HB_SGQueenofQueens243.jpg',
                },
                {   
                    id: 44,
                    gametype: 'SGRideEmCowBoy',
                    name: '牛仔骑马',
                    bgImg: 'List_HB_SGRideEmCowBoy.jpg',
                },
                {   
                    id: 45,
                    gametype: 'SGRomanEmpire',
                    name: '罗马帝国',
                    bgImg: 'List_HB_SGRomanEmpire.jpg',
                },
                {   
                    id: 46,
                    gametype: 'SGRuffledUp',
                    name: '触电的小鸟',
                    bgImg: 'List_HB_SGRuffledUp.jpg',
                },
                {   
                    id: 47,
                    gametype: 'SGSOS',
                    name: '求救信号',
                    bgImg: 'List_HB_SGSOS.jpg',
                },
                {   
                    id: 48,
                    gametype: 'SGShaolinFortunes243',
                    name: '少林宝藏',
                    bgImg: 'List_HB_SGShaolinFortunes243.jpg',
                },
                //--
                {   
                    id: 49,
                    gametype: 'SGSkystheLimit',
                    name: '天空之际',
                    bgImg: 'List_HB_SGSkystheLimit.jpg',
                },
                {   
                    id: 50,
                    gametype: 'SGSpaceFortune',
                    name: '空间宝藏',
                    bgImg: 'List_HB_SGSpaceFortune.jpg',
                },
                {   
                    id: 51,
                    gametype: 'SGSparta',
                    name: '斯巴达',
                    bgImg: 'List_HB_SGSparta.jpg',
                },
                {   
                    id: 52,
                    gametype: 'SGSuperStrike',
                    name: '好球',
                    bgImg: 'List_HB_SGSuperStrike.jpg',
                },
                {   
                    id: 53,
                    gametype: 'SGSuperTwister',
                    name: '超级龙卷风',
                    bgImg: 'List_HB_SGSuperTwister.jpg',
                },
                {   
                    id: 54,
                    gametype: 'SGTheBigDeal',
                    name: '重要人物',
                    bgImg: 'List_HB_SGTheBigDeal.jpg',
                },
                {   
                    id: 55,
                    gametype: 'SGTowerOfPizza',
                    name: '披萨塔',
                    bgImg: 'List_HB_SGTowerOfPizza.jpg',
                },
                {   
                    id: 56,
                    gametype: 'SGTreasureDiver',
                    name: '宝藏潜水员',
                    bgImg: 'List_HB_SGTreasureDiver.jpg',
                },
                {   
                    id: 57,
                    gametype: 'SGVikingsPlunder',
                    name: '维京掠宝',
                    bgImg: 'List_HB_SGVikingsPlunder.jpg',
                },
                {   
                    id: 58,
                    gametype: 'SGWeirdScience',
                    name: '科学怪人',
                    bgImg: 'List_HB_SGWeirdScience.jpg',
                },
                {   
                    id: 59,
                    gametype: 'SGWickedWitch',
                    name: '巫婆大财',
                    bgImg: 'List_HB_SGWickedWitch.jpg',
                },
                {   
                    id: 60,
                    gametype: 'SGZeus',
                    name: '宙斯',
                    bgImg: 'SGZeus.jpg',
                },
                //--
                {   
                    id: 61,
                    gametype: 'SGZeus2',
                    name: '宙斯2',
                    bgImg: 'List_HB_SGZeus2.jpg',
                }
            ]
        },
        //PNG
        {
            platform:  "PNG",
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
                    gametype: '100004',
                    name: '万能西瓜',
                    bgImg: 'List_PNG_WildMelon.jpg',
                },
                {   
                    id: 2,
                    gametype: '100005',
                    name: '幸运钻石',
                    bgImg: 'List_PNG_LuckyDiamonds.jpg',
                },
                {   
                    id: 3,
                    gametype: '100040',
                    name: '海盗旗帜',
                    bgImg: 'List_PNG_JollyRoger.jpg',
                },
                {   
                    id: 4,
                    gametype: '100043',
                    name: '水果财富',
                    bgImg: 'List_PNG_FruitBonanza.jpg',
                },
                {   
                    id: 5,
                    gametype: '100099',
                    name: '黑桃A ',
                    bgImg: 'List_PNG_AceofSpades.jpg',
                },
                {   
                    id: 6,
                    gametype: '100105',
                    name: '财富铃铛',
                    bgImg: 'List_PNG_BellofFortune.jpg',
                },
                {   
                    id: 7,
                    gametype: '100106',
                    name: '极速现金',
                    bgImg: 'List_PNG_SpeedCash.jpg',
                },
                {   
                    id: 8,
                    gametype: '100107',
                    name: '礼品店',
                    bgImg: 'List_PNG_GiftShop.jpg',
                },
                {   
                    id: 9,
                    gametype: '100108',
                    name: '黄金球门',
                    bgImg: 'List_PNG_GoldenGoal.jpg',
                },
                {   
                    id: 10,
                    gametype: '100196',
                    name: '占卜师',
                    bgImg: 'List_PNG_FortuneTeller.jpg',
                },
                {   
                    id: 11,
                    gametype: '100197',
                    name: '非洲掠影',
                    bgImg: 'List_PNG_PhotoSafari.jpg',
                },
                {   
                    id: 12,
                    gametype: '100198',
                    name: '太空竞赛',
                    bgImg: 'List_PNG_SpaceRace.jpg',
                },
                //--
                {   
                    id: 13,
                    gametype: '100199',
                    name: '5x魔术',
                    bgImg: 'List_PNG_5xMagic.jpg',
                },
                {   
                    id: 14,
                    gametype: '100200',
                    name: '爱尔兰黄金',
                    bgImg: 'List_PNG_IrishGold.jpg',
                },
                {   
                    id: 15,
                    gametype: '100225',
                    name: '魔法草原',
                    bgImg: 'List_PNG_EnchantedMeadow.jpg',
                },
                {   
                    id: 16,
                    gametype: '100237',
                    name: '太阳神的财富 ',
                    bgImg: 'List_PNG_RichesofRA.jpg',
                },
                {   
                    id: 17,
                    gametype: '100238',
                    name: '龙船',
                    bgImg: 'List_PNG_DragonShip.jpg',
                },
                {   
                    id: 18,
                    gametype: '100241',
                    name: '珍珠湖',
                    bgImg: 'List_PNG_PearlLagoon.jpg',
                },
                {   
                    id: 19,
                    gametype: '100242',
                    name: '珠宝盒',
                    bgImg: 'List_PNG_JewelBox.jpg',
                },
                {   
                    id: 20,
                    gametype: '100243',
                    name: '阿兹特克人像',
                    bgImg: 'List_PNG_AztecIdols.jpg',
                },
                {   
                    id: 21,
                    gametype: '100245',
                    name: '神话',
                    bgImg: 'List_PNG_Myth.jpg',
                },
                {   
                    id: 22,
                    gametype: '100246',
                    name: '黄金奖杯2神话',
                    bgImg: 'List_PNG_GoldTrophy2.jpg',
                },
                {   
                    id: 23,
                    gametype: '100250',
                    name: '狂野血液',
                    bgImg: 'List_PNG_WildBlood.jpg',
                },
                {   
                    id: 24,
                    gametype: '100251',
                    name: '矮精灵埃及之旅',
                    bgImg: 'List_PNG_LeprechaungoesEgypt.jpg',
                },
                //--
                {   
                    id: 25,
                    gametype: '100253',
                    name: '忍者水果',
                    bgImg: 'List_PNG_NinjaFruits.jpg',
                },
                {   
                    id: 26,
                    gametype: '100254',
                    name: '巨魔猎人',
                    bgImg: 'List_PNG_TrollHunters.jpg',
                },
                {   
                    id: 27,
                    gametype: '100259',
                    name: '魔法水晶',
                    bgImg: 'List_PNG_EnchantedCrystals.jpg',
                },
                {   
                    id: 28,
                    gametype: '100262',
                    name: '能量小精灵',
                    bgImg: 'List_PNG_Energoonz.jpg',
                },
                {   
                    id: 29,
                    gametype: '100277',
                    name: '中国新年',
                    bgImg: 'List_PNG_ChineseNewYear.jpg',
                },
                {   
                    id: 30,
                    gametype: '100278',
                    name: '财富淑女',
                    bgImg: 'List_PNG_LadyofFortune.jpg',
                },
                {   
                    id: 31,
                    gametype: '100282',
                    name: '印度珍珠',
                    bgImg: 'List_PNG_PearlsofIndia.jpg',
                },
                {   
                    id: 32,
                    gametype: '100283',
                    name: '神秘小丑',
                    bgImg: 'List_PNG_MysteryJoker.jpg',
                },
                {   
                    id: 33,
                    gametype: '100284',
                    name: '疯狂奶牛',
                    bgImg: 'List_PNG_CrazyCows.jpg',
                },
                {   
                    id: 34,
                    gametype: '100285',
                    name: '黄金入场券',
                    bgImg: 'List_PNG_GoldenTicket.jpg',
                },
                {   
                    id: 35,
                    gametype: '100286',
                    name: '五彩宝石',
                    bgImg: 'List_PNG_GEMiX.jpg',
                },
                {   
                    id: 36,
                    gametype: '100287',
                    name: '高塔任务',
                    bgImg: 'List_PNG_TowerQuest.jpg',
                },
                //--
                {   
                    id: 37,
                    gametype: '100288',
                    name: '欢乐圣诞节',
                    bgImg: 'List_PNG_MerryXmas.jpg',
                },
                {   
                    id: 38,
                    gametype: '100290',
                    name: '黄金传奇',
                    bgImg: 'List_PNG_GoldenLegend.jpg',
                },
                {   
                    id: 39,
                    gametype: '100291',
                    name: '酷炫一族',
                    bgImg: 'List_PNG_Pimped.jpg',
                },
                {   
                    id: 40,
                    gametype: '100292',
                    name: '旋转派对',
                    bgImg: 'List_PNG_SpinParty.jpg',
                },
                {   
                    id: 41,
                    gametype: '100293',
                    name: '复活节彩蛋',
                    bgImg: 'List_PNG_EasterEggs.jpg',
                },
                {   
                    id: 42,
                    gametype: '100294',
                    name: '北部荒野',
                    bgImg: 'List_PNG_WildNorth.jpg',
                },
                {   
                    id: 43,
                    gametype: '100295',
                    name: '超级翻转',
                    bgImg: 'List_PNG_SuperFlip.jpg',
                },
                {   
                    id: 44,
                    gametype: '100297',
                    name: '克拉肯的眼睛',
                    bgImg: 'List_PNG_EyeoftheKraken.jpg',
                },
                {   
                    id: 45,
                    gametype: '100298',
                    name: '皇室化妆舞会',
                    bgImg: 'List_PNG_RoyalMasquerade.jpg',
                },
                {   
                    id: 46,
                    gametype: '100300',
                    name: '天际战神',
                    bgImg: 'List_PNG_CloudQuest.jpg',
                },
                {   
                    id: 47,
                    gametype: '100302',
                    name: '宝石巫师',
                    bgImg: 'List_PNG_WizardofGems.jpg',
                },
                {   
                    id: 48,
                    gametype: '100303',
                    name: '冷酷亡灵',
                    bgImg: 'List_PNG_GrimMuerto.jpg',
                },
                //--
                {   
                    id: 49,
                    gametype: '100304',
                    name: '桑巴嘉年华',
                    bgImg: 'List_PNG_SambaCarnival.jpg',
                },
                {   
                    id: 50,
                    gametype: '100305',
                    name: '欢乐万圣节',
                    bgImg: 'List_PNG_HappyHalloween.jpg',
                },
                {   
                    id: 51,
                    gametype: '100307',
                    name: '火焰小丑',
                    bgImg: 'List_PNG_FireJoker.jpg',
                },
                {   
                    id: 52,
                    gametype: '100308',
                    name: '没有名字',
                    bgImg: 'List_HB_SGSuperStrike.jpg',
                },
                {   
                    id: 53,
                    gametype: '100309',
                    name: '圣诞小丑',
                    bgImg: 'List_PNG_Xmasoker.jpg',
                },
                {   
                    id: 54,
                    gametype: '100310',
                    name: '亡灵书',
                    bgImg: 'List_PNG_BookofDead.jpg',
                },
                {   
                    id: 55,
                    gametype: '100311',
                    name: '黄金之帆',
                    bgImg: 'List_PNG_SailsofGold.jpg',
                },
                {   
                    id: 56,
                    gametype: '100312',
                    name: '金色商队',
                    bgImg: 'List_PNG_GoldenCaravan.jpg',
                },
                {   
                    id: 57,
                    gametype: '100319',
                    name: '维京人世界',
                    bgImg: 'List_PNG_VikingRunecraft.jpg',
                },
                {   
                    id: 58,
                    gametype: '100320',
                    name: '夏日庆典',
                    bgImg: 'List_PNG_Matsuri.jpg',
                },
                {   
                    id: 59,
                    gametype: '100321',
                    name: '七宗罪',
                    bgImg: 'List_PNG_7Sins.jpg',
                },
                {   
                    id: 60,
                    gametype: '100322',
                    name: '雨果巨魔',
                    bgImg: 'List_PNG_Hugo.jpg',
                },
                //--
                {   
                    id: 61,
                    gametype: '100325',
                    name: '淘气小公主',
                    bgImg: 'List_PNG_PrissyPrincess.jpg',
                },
                {   
                    id: 62,
                    gametype: '100326',
                    name: '翡翠魔术师',
                    bgImg: 'List_PNG_JadeMagician.jpg',
                },
                {   
                    id: 63,
                    gametype: '100327',
                    name: '节庆假日',
                    bgImg: 'List_PNG_HolidaySeason.jpg',
                },
                {   
                    id: 64,
                    gametype: '100330',
                    name: '水果多多81',
                    bgImg: 'List_PNG_MULTIFRUIT81.jpg',
                },
                {   
                    id: 65,
                    gametype: '100332',
                    name: '阿斯德克战士公主',
                    bgImg: 'List_PNG_AztecWarriorPrincess.jpg',
                },
                {   
                    id: 66,
                    gametype: '100355',
                    name: '甜蜜27',
                    bgImg: 'List_PNG_Sweet27.jpg',
                },
                {   
                    id: 67,
                    gametype: '100011',
                    name: '迷你百家乐',
                    bgImg: 'List_PNG_MiniBaccarat.jpg',
                },
                {   
                    id: 68,
                    gametype: '100031',
                    name: '欧洲轮盘',
                    bgImg: 'List_PNG_EuropeanRoulette.jpg',
                },
                {   
                    id: 69,
                    gametype: '100034',
                    name: '比大小',
                    bgImg: 'List_PNG_BeatMe.jpg',
                },
                {   
                    id: 70,
                    gametype: '100035',
                    name: '赌场桩牌扑克',
                    bgImg: 'List_PNG_CasinoStudPoker.jpg',
                },
                {   
                    id: 71,
                    gametype: '100052',
                    name: '多手21点',
                    bgImg: 'List_PNG_BlackJackMH.jpg',
                },
                {   
                    id: 72,
                    gametype: '100053',
                    name: '雨果巨魔',
                    bgImg: 'List_PNG_EuropeanBlackJackMH.jpg',
                },
                //--
                {   
                    id: 73,
                    gametype: '100054',
                    name: '双开式21点',
                    bgImg: 'List_PNG_DoubleExposureBlackJackMH.jpg',
                },
                {   
                    id: 74,
                    gametype: '100055',
                    name: '单副牌21点',
                    bgImg: 'List_PNG_SingleeckBlackJackMH.jpg',
                },
                {   
                    id: 75,
                    gametype: '100057',
                    name: '赌场Hold’em',
                    bgImg: 'List_PNG_CasinoHoldem.jpg',
                },
                {   
                    id: 76,
                    gametype: '100058',
                    name: '牌九扑克',
                    bgImg: 'List_PNG_PaiGowPoker.jpg',
                },
                {   
                    id: 77,
                    gametype: '100093',
                    name: '刮刮乐',
                    bgImg: 'List_PNG_ScratchAhoy.jpg',
                },
                {   
                    id: 78,
                    gametype: '100094',
                    name: '一杆进洞',
                    bgImg: 'List_PNG_Holeinone.jpg',
                },
                {   
                    id: 79,
                    gametype: '100235',
                    name: '三輪大小',
                    bgImg: 'List_PNG_TripleChanceHiLo.jpg',
                },
                {   
                    id: 80,
                    gametype: '100269',
                    name: '杰克高手',
                    bgImg: 'List_PNG_JacksorBetterMH.jpg',
                },
                {   
                    id: 81,
                    gametype: '100270',
                    name: '德塞斯野生',
                    bgImg: 'List_PNG_DeucesWildMH.jpg',
                },
                {   
                    id: 82,
                    gametype: '100271',
                    name: '小丑扑克',
                    bgImg: 'List_PNG_JokerPokerMH.jpg',
                },
                {   
                    id: 83,
                    gametype: '100272',
                    name: '国王高手',
                    bgImg: 'List_PNG_KingsorBetterMH.jpg',
                },
                {   
                    id: 84,
                    gametype: '100273',
                    name: '牌十高手',
                    bgImg: 'List_PNG_TensorBetterMH.jpg',
                },
                //--
                {   
                    id: 85,
                    gametype: '100274',
                    name: '双倍奖金',
                    bgImg: 'List_PNG_DoubleBonusMH.jpg',
                },
                {   
                    id: 86,
                    gametype: '100275',
                    name: '德塞斯小丑',
                    bgImg: 'List_PNG_DeucesJokerMH.jpg',
                },
                {   
                    id: 87,
                    gametype: '100276',
                    name: '累积奖金扑克',
                    bgImg: 'List_PNG_JackpotPoker.jpg',
                },
                {   
                    id: 88,
                    gametype: '100316',
                    name: '飞翔小猪',
                    bgImg: 'List_PNG_FlyingPigs.jpg',
                },
                {   
                    id: 89,
                    gametype: '100317',
                    name: '虫虫派对',
                    bgImg: 'List_PNG_BugsParty.jpg',
                },
                {   
                    id: 90,
                    gametype: '100318',
                    name: '财运之轮',
                    bgImg: 'List_PNG_MoneyWheel.jpg',
                },
                {   
                    id: 91,
                    gametype: '100324',
                    name: '超级旋转',
                    bgImg: 'List_PNG_SuperFlip.jpg',
                },
                {   
                    id: 92,
                    gametype: '100239',
                    name: '基諾快乐彩',
                    bgImg: 'List_PNG_Keno.jpg',
                },
                {   
                    id: 93,
                    gametype: '100257',
                    name: '财富崛起',
                    bgImg: 'List_PNG_RagetoRiches.jpg',
                }
            ]
        },
        //MG
        {
            platform:  "MG",
            currentgame: "ngm",
            locationSrc: "",
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
                //--
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
                //--
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
                //--
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
                //--
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
                //--
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
                //--
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
                //--
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
                //--
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
                //--
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
                //--
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
                //--
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
                }
            ]
        },
        //SG
        {
            platform: "SG",
            currentgame:"ngm",
            locationSrc:"",
            gamelist: [
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
                //--
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
                //--
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
                //--
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
                //--
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
                //--
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
                //--
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
                //--
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
                }
            ]
        },
        //TTG
        {
            platform:  "TTG",
            currentgame: "ngm",
            locationSrc: "",
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
                }
            ]
        },
        //BS
        {
            platform: "BS",
            currentgame:"ngm",
            locationSrc:"",
            gamelist: [
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