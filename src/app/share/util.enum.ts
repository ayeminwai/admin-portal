export enum Util {
    GRANT_TYPE = 'password',
    CLIENT = 'ottsLoyalty',
    SECRET = '12706FED141902BCC1B8C4FCB0B39E1D'
}

export enum CoreApi {
    REGISTRATION = "/authentication/v1.0/registration",
    BASIC_INFO = "/authentication/v1.0/updateBasicInfo",
    LOGIN_USER = "/authentication/v1.0/login"
}

export enum Oauth {
    TOKEN = '/otts/v1.0/token'
}

export enum SetupApi{
    LOGIN_SETUP = '/authentication/v1.0/loginSetup',
    REG_SETUP = '/authentication/v1.0/registrationSetup',
    BASIC_SETUP = '/authentication/v1.0/basicInfoSetup'
}

export enum MsgType {
    INFO = 'Information',
    WARN = 'Warning'
}
