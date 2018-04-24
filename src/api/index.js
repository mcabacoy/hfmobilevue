let serviceUrl = 'http://localhost:60324';

export const serviceURL = serviceUrl;

//  登陆接口 - Login - POST
export const LOGIN = serviceUrl + '/Token';

// User Info - GET
export const USERINFO = serviceUrl + '/Account';

// Request Captcha - GET
export const LOAD_CAPTCHA = serviceUrl + '/Common/GenerateCaptcha';
// Validate Captcha - POST
export const VALIDATE_CAPTCHA =  serviceUrl +  '/Common/ValidateCaptcha'
export const CAPTCHA_SOURCE = 'C:/Users/marion.cabacoy/Documents/Marion/Workspaces/HongFu.MobileH5/FuTu.Mobile';

// Get System Notices - GET
export const GET_NOTICES = serviceUrl + '/active/GethfNotices';

// Get Verification Code - GET
export const GET_VERIFICATION_CODE = serviceUrl + '/Common/GetVerificationCode';

// Send Pass Code - GET
export const SEND_PASS_CODE = serviceUrl + '/Common/SendPassCode';



// ACCOUNTS ***************************************
// Register User - POST
export const REGISTER = serviceUrl + '/Account/Reg';

// Get Agent Code - GET
export const REGISTER_AGENT_CODE = serviceUrl + '/Common/GetCookieAgentCode';

// Check if User is existing - GET
export const CHECK_USERNAME = serviceUrl + '/Account/CheckUsername';

// Check if mobile number is existing - GET
export const CHECK_MOBILE = serviceUrl + '/Account/CheckMobile';

// Check if email is already registered - GET
export const CHECK_EMAIL = serviceUrl + '/Account/CheckEmail';

// Save User Info Changes - POST
export const SAVE_USER_INFO = serviceUrl + '/Account/BindBaseInfo';

// Verif Pass Code - GET
export const VERIFY_PASSCODE = serviceUrl + '/Common/VerifyPassCode';

// Bind Email Detail - GET
// Params < email>
export const BIND_EMAIL = serviceUrl + '/Account/BindEmail';

// Bind Phone Detail - GET
// Params < mobile >
export const BIND_PHONE = serviceUrl + '/Account/BindMobile';


// Bind Base Info (birthday, qq, wechat) - POST
export const BIND_BASE_INFO = serviceUrl + '/Account/BindBaseInfo';

// Get Email Redbag - GET
export const GET_EMAIL_REDBAG = serviceUrl + '/Active/GetEmailRedbag'

// Check HF Mobile - GET
export const CHECK_HF_MOBILE_BIND = serviceUrl + '/Account/CheckHFMobileBind';

// Check HF Email - GET
export const CHECK_HF_EMAIL_BIND = serviceUrl + '/Account/CheckHFEmailBind';



// GET
export const GET_USER_SIGNIN_STAT = serviceUrl + '/Active/GetUserSignStatus';

// Get Check-in Details - POST
export const GET_USER_CHECKIN_DETAILS = serviceUrl + '/Active/GetUserSignListAsyn';

// Get Redeem List - POST
export const GET_USER_REDEEM_LIST = serviceUrl + '/Active/GetUserRedeemListAsyn'

// Check-in User - GET
export const CHECKIN_USER = serviceUrl + '/Active/RegistUserSign'

// Exchange Sign-in Points - GET
export const EXCHANGE_SIGNIN_POINTS = serviceUrl + '/Active/ExchangeUserRedeem';

// PASSWORD RESET ****************************
// Retrieves user data - POST
export const RESET_PASSWORD = serviceUrl + '/Account/ResetPassword';
//  POST
export const FORGOT_PASSWORD = serviceUrl + '/Account/ForgetPassword'


// TRANSFERS ****************************
// Get Game Balance - GET
// Expected Parameter: gamecode = [GameType]
export const GET_GAME_BALANCE = serviceUrl + '/FundTransfer/GetGameBalance'

// Deposit In - POST
export const TRANSFER_IN = serviceUrl + '/FundTransfer/Deposit';

// Withdraw In - POST
export const TRANSFER_OUT = serviceUrl + '/FundTransfer/Withdrawal';



// BANK CARD / USER INFO ****************************
// Get All Bank - GET
export const GET_ALL_BANK_CARDS = serviceUrl + '/Transact/GetAllBanks';

// Add Bank Card - POST
export const ADD_BANK_CARD = serviceUrl + '/UserBankInfo/PostUserBankInfo';

// Set Default Bank Card - POST
export const SET_DEFAULT_BANK_CARD = serviceUrl + '/UserBankInfo/SetDefault';

// Delete Bank Card - POST
export const DELETE_BANK_CARD = serviceUrl + '/UserBankInfo/MarkDelete';

// Get User Bank Ifno - GET
export const GET_USER_BANK_INFO = serviceUrl + '/UserBankInfo';


// PROMOTIONS ***************
export const PROMO_APPLY_LOBBY = serviceUrl + '/Active/ApplyLobbyReturn';

