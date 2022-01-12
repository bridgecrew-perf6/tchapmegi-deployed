import { login } from '../constants';

export const addUsername = (username) => {
    return {
        type: login.ADD_USERNAME,
        username: {
            value: username,
            valid: (username.length > 0),
            entered: true
        }
    };
};

export const addPassword = (password) => {
    return {
        type: login.ADD_PASSWORD,
        password: {
            value: password,
            valid: (password.length > 0),
            entered: true
        }
    };
};

export const loginRequest = () => {
    return {
        type: login.LOGIN,
        loading: true
    };
};

export const loginRequestSuccessful = () => {
    return {
        type: login.LOGIN_SUCCESSFUL,
        loading: false
    };
};

export const loginRequestFailed = () => {
    return {
        type: login.LOGIN_FAILED,
        loading: false
    };
};
