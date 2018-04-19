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

// Get Check-in Details - GET
export const GET_USER_CHECKIN_DETAILS = serviceUrl + '/Active/GetUserSignListAsyn';


