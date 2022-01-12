import { error } from '../constants';

export const addError = (error_message) => {
    return {
        type: error.ADD_ERROR,
        open: true,
        error: error_message
    };
};

export const removeError = () => {
    return {
        type: error.REMOVE_ERROR,
        open: false,
        message: ''
    };
};
