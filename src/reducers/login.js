import { login } from '../constants';
const initialState = {
    username: {
        value: '',
        valid: false,
        entered: false
    },
    password: {
        value: '',
        valid: false,
        entered: false
    },
    loading: false
};

const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case login.ADD_USERNAME:
            return {
                ...state,
                username: {
                    ...state.username,
                    value: action.username.value,
                    valid: action.username.valid,
                    entered: action.username.entered
                }
            };
        case login.ADD_PASSWORD:
            return {
                ...state,
                password: {
                    ...state.password,
                    value: action.password.value,
                    valid: action.password.valid,
                    entered: action.password.entered
                }
            };
        case login.LOGIN:
            return {
                ...state,
                loading: action.loading
            };
        case login.LOGIN_SUCCESSFUL:
            return {
                ...state,
                loading: action.loading
            };
        case login.LOGIN_FAILED:
            return {
                ...state,
                loading: action.loading
            };
        default:
            return state;
    }
};

export default loginReducer;
