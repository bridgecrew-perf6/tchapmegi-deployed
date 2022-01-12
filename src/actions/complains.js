import { complains } from '../constants';

export const getComplains = () => {
    return {
        type: complains.GET_COMPLAINS,
        loading: true,
        error: null
    };
};

export const getComplainsSuccessful = (complainlist) => {
    return {
        type: complains.GET_COMPLAINS_SUCCESSFUL,
        loading: false,
        complainlist
    };
};

export const getComplainsFailed = (error) => {
    return {
        type: complains.GET_COMPLAINS_FAILED,
        loading: false,
        error
    };
};

export const removeComplain = id => {
    return {
        type: complains.REMOVE_COMPLAIN,
        id
    };
};

export const deleteComplain = id => {
    return {
        type: complains.DELETE_COMPLAIN,
        loading: true,
        id
    };
};

export const deleteComplainSuccessful = () => {
    return {
        type: complains.DELETE_COMPLAIN_SUCCESSFUL,
        id: null,
        loading: false
    };
};

export const deleteComplainFailed = () => {
    return {
        type: complains.DELETE_COMPLAIN_FAILED,
        loading: false,
        id: null
    };
};

export const changeView = view => {
    return {
        type: complains.CHANGE_VIEW,
        view
    };
};

export const getMap = () => {
    return {
        type: complains.GET_COMPLAIN_MAP,
        loading: true,
        error: null
    };
};

export const getMapSuccessful = mlist => {
    return {
        type: complains.GET_COMPLAIN_MAP_SUCCESSFUL,
        mlist,
        loading: false
    };
};

export const getMapFailed = error => {
    return {
        type: complains.GET_COMPLAIN_MAP_FAILED,
        loading: false,
        error
    };
};

export const getCAnalysis = () => {
    return {
        type: complains.GET_CANALYSIS,
        loading: true,
        error: null
    };
};

export const getCAnalysisSuccessful = clist => {
    return {
        type: complains.GET_CANALYSIS_SUCCESSFUL,
        clist,
        loading: false
    };
};

export const getCAnalysisFailed = error => {
    return {
        type: complains.GET_CANALYSIS_FAILED,
        loading: false,
        error
    };
};

export const openCreateCat = () => {
    return {
        type: complains.OPEN_CREATE_CAT,
        open: true
    };
};

export const closeCreateCat = () => {
    return {
        type: complains.CLOSE_CREATE_CAT,
        open: false,
        cat: ''
    };
};

export const createCat = () => {
    return {
        type: complains.CREATE_CAT,
        loading: true
    };
};

export const createCatSuccessful = new_cat => {
    return {
        type: complains.CREATE_CAT_SUCCESSFUL,
        loading: false,
        new_cat,
        open: false,
        cat: ''
    };
};

export const createCatFailed = () => {
    return {
        type: complains.CREATE_CAT_FAILED,
        loading: false
    };
};

export const addCat = cat => {
    return {
        type: complains.ADD_CAT,
        cat: cat.trim()
    };
};

export const getCategories = () => {
    return {
        type: complains.GET_CATEGORIES,
        loading: true,
        error: null
    };
};

export const getCategoriesSuccessful = (category) => {
    return {
        type: complains.GET_CATEGORIES_SUCCESSFUL,
        loading: false,
        category
    };
};

export const getCategoriesFailed = (error) => {
    return {
        type: complains.GET_CATEGORIES_FAILED,
        loading: false,
        error
    };
};

export const viewComplain = id => {
    return {
        type: complains.OPEN_VIEW,
        open: true,
        id
    };
};

export const closeViewComplain = () => {
    return {
        type: complains.CLOSE_VIEW
    };
};

export const modifyStatus = cid => {
    return {
        type: complains.MODIFY_STATUS,
        cid
    };
};

export const changeStatus = () => {
    return {
        type: complains.CHANGE_STATUS,
        loading: true,
    };
};

export const changeStatusSuccessful = complain => {
    return {
        type: complains.CHANGE_STATUS_SUCCESSFUL,
        complain,
        loading: false,
        open: false
    };
};

export const changeStatusFailed = () => {
    return {
        type: complains.CHANGE_STATUS_FAILED,
        loading: false
    };
};

