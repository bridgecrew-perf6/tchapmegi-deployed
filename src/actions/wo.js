import { wo } from '../constants';
import isDate from 'date-fns/isDate';

export const getWO = () => {
    return {
        type: wo.GET_WO,
        loading: true,
        error: null
    };
};

export const getWOSuccessful = wolist => {
    return {
        type: wo.GET_WO_SUCCESSFUL,
        loading: false,
        wolist
    };
};

export const getWOFailed = error => {
    return {
        type: wo.GET_WO_FAILED,
        loading: false,
        error
    };
};

export const removeWO = id => {
    return {
        type: wo.REMOVE_WO,
        id
    };
};

export const deleteWO = id => {
    return {
        type: wo.DELETE_WO,
        loading: true,
        id
    };
};

export const deleteWOSuccessful = () => {
    return {
        type: wo.DELETE_WO_SUCCESSFUL,
        id: null,
        loading: false
    };
};

export const deleteWOFailed = () => {
    return {
        type: wo.DELETE_WO_FAILED,
        loading: false,
        id: null
    };
};

export const viewWO = id => {
    return {
        type: wo.VIEW_WO,
        id,
        open: true
    };
};

const isValid = (key, value) => {
    switch(key) {
        case "duration":
            return (Number.isInteger(Number(value)) && value.length > 0);
        case "start_datetime":
            return (isDate(new Date(value)))
        case "title":
            return (value.length > 0)
        default:
            return true;
    }
};

export const closeWO = () => {
    return {
        type: wo.CLOSE_WO,
        id: null,
        open: false
    };
};

export const addInfo = (key, value) => {
    return {
        type: wo.ADD_INFO,
        key,
        value,
        valid: isValid(key, value),
        entered: true
    };
};

export const openCreateWO = () => {
    return {
        type: wo.OPEN_CREATE_WO,
        open: true
    };
};

export const closeCreateWO = () => {
    return {
        type: wo.CLOSE_CREATE_WO,
        open: false,
        loading: false,
        checked: false,
        id: null
    }
};

export const openEditWO = id => {
    return {
        type: wo.OPEN_EDIT_WO,
        id,
        open: true
    };
};

export const createWO = () => {
    return {
        type: wo.CREATE_WO,
        loading: true
    };
};

export const editWO = () => {
    return {
        type: wo.EDIT_WO,
        loading: true
    };
};

export const createWOSuccessful = worder => {
    return {
        type: wo.CREATE_WO_SUCCESSFUL,
        worder,
        open: false,
        loading: false
    };
};

export const createWOFailed = () => {
    return {
        type: wo.CREATE_WO_FAILED,
        loading: false
    };
};

export const editWOSuccessful = worder => {
    return {
        type: wo.EDIT_WO_SUCCESSFUL,
        worder,
        open: false,
        loading: false
    };
};

export const editWOFailed = () => {
    return {
        type: wo.EDIT_WO_FAILED,
        loading: false
    };
};

export const checkPrompt = () => {
    return {
        type: wo.CHECK_PROMPT,
    };
};

