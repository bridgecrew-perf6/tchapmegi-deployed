import { login_status } from '../constants';

export const getLoginStatus = () => {
    return {
        type: login_status.GET_LOGIN_STATUS,
        loading: true,
        error: null
    };
};

export const getLoginStatusSuccessful = (lstatus) => {
    return {
        type: login_status.GET_LOGIN_STATUS_SUCCESSFUL,
        loading: false,
        error: null,
        lstatus
    };
};

export const getLoginStatusFailed = error => {
    return {
        type: login_status.GET_LOGIN_STATUS_FAILED,
        loading: false,
        error
    };
};

export const getLoginStatusSearch = sdate => {
    return {
        type: login_status.GET_LOGIN_STATUS_DATE,
        sdate,
        loading: true,
        error: null
    };
};
