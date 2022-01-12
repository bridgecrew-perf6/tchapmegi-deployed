import { error } from '../constants';

const initialState = {
    open: false
};

const errorReducer = (state=initialState, action) => {
    switch(action.type) {
        case error.ADD_ERROR:
            return {
                ...state,
                open: action.open,
                ...action.error
            };
        case error.REMOVE_ERROR:
            return {
                ...state,
                open: action.open,
                message: action.message
            };
        default:
            return state;
    };
};

export default errorReducer; 
