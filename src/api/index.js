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

