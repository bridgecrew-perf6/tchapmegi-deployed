import { employees } from '../constants';
import isDate from 'date-fns/isDate';

export const getEmployees = () => {
    return {
        type: employees.GET_EMPLOYEES,
        loading: true,
        error: null
    };
};

export const getEmployeesSuccessful = emp_list => {
    return {
        type: employees.GET_EMPLOYEES_SUCCESSFUL,
        loading: false,
        error: null,
        emp_list
    };
};

export const getEmployeesFailed = error => {
    return {
        type: employees.GET_EMPLOYEES_FAILED,
        loading: false,
        error
    };
};

export const removeEmployee = id => {
    return {
        type: employees.REMOVE_EMPLOYEE,
        id
    };
};

export const deleteEmployee = id => {
    return {
        type: employees.DELETE_EMPLOYEE,
        id,
        loading: true
    };
};

export const deleteEmployeeSuccessful = () => {
    return {
        type: employees.DELETE_EMPLOYEE_SUCCESSFUL,
        loading: false
    };
};

export const deleteEmployeeFailed = error => {
    return {
        type: employees.DELETE_EMPLOYEE_FAILED,
        loading: false,
        error
    };
};

export const viewEmployee = id => {
    return {
        type: employees.VIEW_EMPLOYEE,
        id,
        open: true
    };
};

export const closeViewEmployee = () => {
    return {
        type: employees.CLOSE_VIEW_EMPLOYEE,
        open: false
    };
};

export const openAuth = id => {
    return {
        type: employees.OPEN_AUTH_EMPLOYEE,
        id,
        open: true
    };
};

export const closeAuth = () => {
    return {
        type: employees.CLOSE_AUTH_EMPLOYEE,
        open: false
    };
};

export const authEmployee = () => {
    return {
        type: employees.AUTH_EMPLOYEE,
        loading: true
    };
};

export const authEmployeeSuccessful = auth => {
    return {
        type: employees.AUTH_EMPLOYEE_SUCCESSFUL,
        loading: false,
        auth
    };
};

export const authEmployeeFailed = () => {
    return {
        type: employees.AUTH_EMPLOYEE_FAILED,
        loading: false
    };
};

export const changeAuth = (key, value) => {
    return {
        type: employees.CHANGE_AUTH,
        [key]: value,
        key
    };
};

export const authUpdate = () => {
    return {
        type: employees.AUTH_UPDATE,
        loading: true
    }
};

export const authUpdateSuccessful = auth_list => {
    return {
        type: employees.AUTH_UPDATE_SUCCESSFUL,
        auth_list,
        open: false,
        loading: false
    };
};

export const authUpdateFailed = () => {
    return {
        type: employees.AUTH_UPDATE_FAILED,
        loading: false
    };
};

export const removeAuth = id => {
    return {
        type: employees.REMOVE_AUTH,
        id
    }
};

export const removeEmp = id => {
    return {
        type: employees.REMOVE_EMP,
        id
    }
};

const isValid = (key, value) => {
    switch(key) {
        case "first_name":
            return (value.length > 0);
        case "last_name":
            return (value.length > 0);
        case "valid_from":
        case "valid_to":
        case "date_of_birth":
            return isDate(new Date(value));
            break
        case "phone":
            return (Number.isInteger(Number(value)) && value.length > 0);
        default:
            return true;
    }
};

export const addInfo = (key, value) => {
    return {
        type: employees.ADD_INFO,
        key,
        value,
        valid: (isValid(key, value)), entered: true
    }
};

export const openCreateEmp = () => {
    return {
        type: employees.OPEN_CREATE_EMP,
        open: true
    };
};

export const closeCreateEmp = () => {
    return {
        type: employees.CLOSE_CREATE_EMP,
        open: false,
        loading: false,
        checked: false,
        id: null
    }
};

export const openEditEmp = id => {
    return {
        type: employees.OPEN_EDIT_EMP,
        id,
        open: true
    };
};

export const createEmp = () => {
    return {
        type: employees.CREATE_EMP,
        loading: true
    };
};

export const editEmp = () => {
    return {
        type: employees.EDIT_EMP,
        loading: true
    };
};

export const createEmpSuccessful = emp => {
    return {
        type: employees.CREATE_EMP_SUCCESSFUL,
        emp,
        open: false,
        loading: false
    };
};

export const createEmpFailed = () => {
    return {
        type: employees.CREATE_EMP_FAILED,
        loading: false
    };
};

export const editEmpSuccessful = emp => {
    return {
        type: employees.EDIT_EMP_SUCCESSFUL,
        emp,
        open: false,
        loading: false
    };
};

export const editEmpFailed = () => {
    return {
        type: employees.EDIT_EMP_FAILED,
        loading: false
    };
};

export const checkPrompt = () => {
    return {
        type: employees.CHECK_PROMPT,
    };
};
