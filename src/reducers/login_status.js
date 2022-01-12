import { login_status } from '../constants';

const initialState = {
    login_statuses: [],
    search: "",
    loading: true,
    error: null
};

const LoginStatusReducer = (state=initialState, action) => {
    switch(action.type) {
        case login_status.GET_LOGIN_STATUS:
            return {
                ...state,
                loading: action.loading,
                error: action.null
            };
        case login_status.GET_LOGIN_STATUS_SUCCESSFUL:
            return {
                ...state,
                login_statuses: [...action.lstatus],
                loading: action.loading,
                error: action.error
            };
        case login_status.GET_LOGIN_STATUS_FAILED:
            return {
                ...state,
                loading: action.loading,
                error: action.error
            };
        case login_status.GET_LOGIN_STATUS_DATE:
                return {
                    ...state,
                    loading: action.loading,
                    error: action.error
                };
        default:
            return state;
    }
};

export default LoginStatusReducer;
