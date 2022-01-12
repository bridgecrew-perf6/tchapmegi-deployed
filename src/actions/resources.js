import { resources } from '../constants';
import isDate from 'date-fns/isDate';
import isEmail from 'validator/lib/isEmail';

export const getResources = () => {
    return {
        type: resources.GET_RESOURCES,
        loading: true,
        error: null
    };
};

export const getResourcesSuccessful = resource_list => {
    return {
        type: resources.GET_RESOURCES_SUCCESSFUL,
        resources: resource_list,
        loading: false,
        error: null
    };
};

export const getResourcesFailed = error => {
    return {
        type: resources.GET_RESOURCES_FAILED,
        loading: false,
        error
    };
};

export const removeResource = id => {
    return {
        type: resources.REMOVE_RESOURCE,
        id
    };
};

export const deleteResource = id => {
    return {
        type: resources.DELETE_RESOURCE,
        loading: true,
        id
    };
};

export const deleteResourceSuccessful = () => {
    return {
        type: resources.DELETE_RESOURCE_SUCCESSFUL,
        id: null,
        loading: false
    };
};

export const deleteResourceFailed = () => {
    return {
        type: resources.DELETE_RESOURCE_FAILED,
        id: null,
        loading: false
    };
};

export const viewResource = (resource_id) => {
    return {
        type: resources.VIEW_RESOURCE,
        resource_id,
        open: true
    };
};

export const closeViewResource = () => {
    return {
        type: resources.CLOSE_VIEW_RESOURCE,
        open: false
    };
};

export const openCreateResource = () => {
    return {
        type: resources.OPEN_CREATE_RESOURCE,
        open: true,
    }
};

export const closeCreateResource = () => {
    return {
        type: resources.CLOSE_CREATE_RESOURCE,
        open: false,
        loading: false,
        checked: false,
        id: null
    };
};

export const createResource = () => {
    return {
        type: resources.CREATE_RESOURCE,
        loading: true
    };
};

export const createResourceSuccessful = resource => {
    return {
        type: resources.CREATE_RESOURCE_SUCCESSFUL,
        resource,
        loading: false,
        open: false
    };
};

export const createResourceFailed = () => {
    return {
        type: resources.CREATE_RESOURCE_FAILED,
        loading: false
    };
};

export const editResource = ()  => {
    return {
        type: resources.EDIT_RESOURCE,
        loading: true
    };
};

export const editResourceSuccessful = resource => {
    return {
        type: resources.EDIT_RESOURCE_SUCCESSFUL,
        resource,
        loading: false,
        open: false
    };
};

export const editResourceFailed = () => {
    return {
        type: resources.EDIT_RESOURCE_FAILED,
        loading: false
    };
};

export const openEditResource = id => {
    return {
        type: resources.OPEN_EDIT_RESOURCE,
        open: true,
        id
    };
};

export const addRNR = (rnr) => {
    return {
        type: resources.ADD_RNR,
        rnr,
        valid: ((rnr.length > 0) &&(Number.isInteger(Number(rnr)))),
        entered: true
    };
};

export const addRName = (rname) => {
    return {
        type: resources.ADD_RNAME,
        rname,
        valid: (rname.length > 0),
        entered: true
    };
};

export const addValidFrom = (vfrom) => {
    return {
        type: resources.ADD_VALID_FROM,
        vfrom,
        valid: isDate(new Date(vfrom)),
        entered: true
    };
};

export const addValidTo = (vto) => {
    return {
        type: resources.ADD_VALID_TO,
        vto,
        valid: isDate(new Date(vto)),
        entered: true
    };
};

export const addGroup = (group) => {
    return {
        type: resources.ADD_GROUP,
        group
    };
};

export const addArticle = (article) => {
    return {
        type: resources.ADD_ARTICLE,
        article
    };
};

export const addStore = (store) => {
    return {
        type: resources.ADD_STORE,
        store
    };
};

export const addLongName = (lname) => {
    return {
        type: resources.ADD_LONG_NAME,
        lname
    };
};

export const addAddress = (addr) => {
    return {
        type: resources.ADD_ADDRESS,
        addr
    };
};

export const addBSector = (bsector) => {
    return {
        type: resources.ADD_BSECTOR,
        bsector
    };
};

export const checkPrompt = () => {
    return {
        type: resources.CHECK_PROMPT
    };
};
