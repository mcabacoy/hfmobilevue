// let serviceUrl = '';
let serviceUrl = '/json';
// let serviceUrl = 'http://dlc-callbackmob:8080';
//let serviceUrl = 'http://192.168.1.7:7050';
// let serviceUrl ='http://cbc.dlptbet88.com';
export const serviceURL = serviceUrl;
//  获奖名单接口
export const GETKEFU = serviceUrl + '/index/queryIndexPrize';
//  忘记密码接口
export const ForgetPassword = serviceUrl + '/api/forgetPassword';
//  获取公告信息
export const QUERYINDEXNOTICE = serviceUrl + '/index/queryIndexNotice';
//  获取游戏额度信息
export const QUERYBalanceList = serviceUrl + '/main/queryBalanceList';
//  登陆接口
export const LOGIN = serviceUrl + '/api/login';
//  註冊接口
export const REGISTER = serviceUrl + '/api/register';
//  查询主页用户信息
export const MAININFO = serviceUrl + '/main/queryMainInfo';
//  查询内页用户信息
export const MAINUSERINFO = serviceUrl + '/main/queryMainUserInfo';
//  绑定真实姓名
export const ADDUSERREALNAME = serviceUrl + '/main/addUserRealName';
//  添加邮箱
export const ADDUSEREMAIL = serviceUrl + '/main/addUserEmail';
//  发送邮箱验证码
export const SENDEMAIL = serviceUrl + '/main/sendEmailValidatecode';
//  发送手机验证码
export const SENDPHONE = serviceUrl + '/main/sendPhoneValidatecode';
//  更新会员密码
export const UPDATEUSERPW = serviceUrl + '/main/updateUsersPassword';
//  会员站内信
export const QUERYUSERMESSAGE = serviceUrl + '/main/queryUsersMessage';
//  获取支付的方式
export const GETREALPAYMETHOD = serviceUrl + '/main/getRealPayMethod';
//  邀请好友
export const QueryUser = serviceUrl + '/main/queryUserInviteNumber';
//  转账转入
export const TransferIn = serviceUrl + '/transfer/transferIn';
//  转账转出
export const TransferOut = serviceUrl + '/transfer/transferOut';
//  检验手机邮箱验证码
export const ValidatePhoneMail = serviceUrl + '/main/validatePhoneAndEmail';
// 获取存款记录 分网银支付以及线上支付
export const GETDEPOSITLIST = serviceUrl + '/depositrecord/queryDepositRecord';
// 获取提款记录
export const GetDRAWMONEY = serviceUrl + '/withdrawrecord/queryWithdrawRecord';
// 获取转账记录
export const GetTRANSFER = serviceUrl + '/transferrecord/queryTransferRecord';
// 获取会员银行账号
export const GETUSERBANK = serviceUrl + '/main/queryUsersBankNumber'
// 用户提款
export const ADDWITHDRAW = serviceUrl + '/main/addWithdraw'
// 解绑
export const UNBINDBANK = serviceUrl + '/main/unBindBank'
// 添加银行卡
export const ADDBINDBANK = serviceUrl + '/main/addBindBank'
// 获取银行卡卡号
export const GETBANKCARDLIST = serviceUrl + '/index//queryMyBankTypeList'
// 取消提款
export const CANCELWITHDRAW = serviceUrl + '/main/cancelWithdraw'
// 存款
export const SAVABANKDEPOSIT = serviceUrl + '/main/savaBankDeposit';
// 获取转账优惠列表
export const QueryTransferBonusList = serviceUrl +'/transfer/queryTransferBonusList';
 // 获取投注记录列表
 export const QUERYBETRECORD = serviceUrl + '/betrecord/queryBetRecord';
 // 获取优惠记录
 export const QUERYBONUSRECORD = serviceUrl + '/bonusrecord/queryBonusRecord';
 // 代理註冊
 export const RegisterAgent = serviceUrl +'/agent/registerAgent';
// 退出登录
export const DROPOUT = serviceUrl + '/api/dropOut';
 // 校验用户名是否存在
 export const QUERYUSERNAME = serviceUrl +'/api/queryUserName';
//  查询手机号码是否存在
 export const QUERYUSERPhone = serviceUrl +'/api/queryUserPhone';
 //  获取救援金信息
 export const QUERYUSERHelpMoney = serviceUrl +'/bonus/queryHelpMoney';
//  申请救援金信息
export const APPLYhelpMONEY = serviceUrl +'/bonus/applyHelpMoney';
 //  查询创富金的申请条件
 export const QUERYDepositBonusStatus = serviceUrl +'/bonus/queryDepositBonusStatus';
 //  查询创富金的申请条件
 export const QUERYDepositTenferBonus = serviceUrl +'/bonus/applyDepositTenferBonus';
//  检查token是否失效
export const QUERYTokenStatus = serviceUrl + '/main/queryTokenStatus';
//  添加微信
export const AddWechatNumber = serviceUrl + '/main/addUserWechatNumber';
//  添加qq
export const AddQqNumber = serviceUrl + '/main/addUserQqNumber';
// PT检测
export const PTcheckout = serviceUrl + '/game/ptLoinGame';
// 获取单个游戏余额
export const QueryGameBalance = serviceUrl + '/main/queryGameBalance';
// 更改当前站内信的状态
export const UpdateMessageStatus = serviceUrl + '/main/updateMessageStatus';
// 性别更换
export const AddUserSex = serviceUrl + '/main/addUserSex';
// 欧洲PT检测
export const IMPTcheckout = serviceUrl + '/game/imptLoinGame'
