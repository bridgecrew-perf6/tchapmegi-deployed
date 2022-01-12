import { projects } from '../constants';
import isDate from 'date-fns/isDate';
import isEmail from 'validator/lib/isEmail';

export const getProjects = () => {
    return {
        type: projects.GET_PROJECTS,
        loading: true,
        error: null
    };
};

export const getProjectsSuccessful = (projectlist) => {
    return {
        type: projects.GET_PROJECTS_SUCCESSFUL,
        loading: false,
        projectlist
    };
};

export const getProjectsFailed = (error) => {
    return {
        type: projects.GET_PROJECTS_FAILED,
        loading: false,
        error
    };
};

export const viewProject = (project_id) => {
    return {
        type: projects.VIEW_PROJECT,
        project_id,
        open: true
    };
};

export const closeViewProject = () => {
    return {
        type: projects.CLOSE_VIEW_PROJECT,
        open: false
    };
};

export const removeProject = (id) => {
    return {
        type: projects.REMOVE_PROJECT,
        id
    };
};

export const deleteProject = (id) => {
    return {
        type: projects.DELETE_PROJECT,
        id,
        loading: true
    };
};

export const deleteProjectSuccessful = () => {
    return {
        type: projects.DELETE_PROJECT_SUCCESSFUL,
        loading: false,
        id: null
    };
};

export const deleteProjectFailed = () => {
    return {
        type: projects.DELETE_PROJECT_FAILED,
        id: null,
        loading: false
    };
};

export const openCreateProject = () => {
    return {
        type: projects.OPEN_CREATE_PROJECT,
        open: true
    };
};

export const closeCreateProject = () => {
    return {
        type: projects.CLOSE_CREATE_PROJECT,
        open: false,
        loading: false,
        project_details: {
            project_name: {
                value: '',
                valid: false,
                entered: false
            },
            customer_name: {
                value: '',
                valid: false,
                entered: false
            },
            contact_person: {
                value: '',
                valid: false,
                entered: false
            },
            phone: {
                value: '',
                valid: false,
                entered: false
            },
            fax: {
                value: '',
                valid: false,
                entered: false
            },
            start_date: {
                value: '',
                valid: false,
                entered: false
            },
            end_date: {
                value: '',
                valid: false,
                entered: false
            },
            email: {
                value: '',
                valid: false,
                entered: false
            },
            city: {
                value: '',
                valid: false,
                entered: false
            },
            address: {
                value: '',
                valid: false,
                entered: false
            }
        },
        checked: false,
        id: null
    };
};

export const createProject = () => {
    return {
        type: projects.CREATE_PROJECT,
        loading: true
    };
};

export const editProject = () => {
    return {
        type: projects.EDIT_PROJECT,
        loading: true
    };
};

export const editProjectSuccessful = (project) => {
    return {
        type: projects.EDIT_PROJECT_SUCCESSFUL,
        project,
        open: false,
        project_details: {
            project_name: {
                value: '',
                valid: false,
                entered: false
            },
            customer_name: {
                value: '',
                valid: false,
                entered: false
            },
            contact_person: {
                value: '',
                valid: false,
                entered: false
            },
            phone: {
                value: '',
                valid: false,
                entered: false
            },
            fax: {
                value: '',
                valid: false,
                entered: false
            },
            start_date: {
                value: '',
                valid: false,
                entered: false
            },
            end_date: {
                value: '',
                valid: false,
                entered: false
            },
            email: {
                value: '',
                valid: false,
                entered: false
            },
            city: {
                value: '',
                valid: false,
                entered: false
            },
            address: {
                value: '',
                valid: false,
                entered: false
            }
        },
        loading: false
    };
};

export const editProjectFailed = () => {
    return {
        type: projects.EDIT_PROJECT_FAILED,
        loading: false
    };
};

export const createProjectSuccessful = (project) => {
    return {
        type: projects.CREATE_PROJECT_SUCCESSFUL,
        project,
        open: false,
        project_details: {
            project_name: {
                value: '',
                valid: false,
                entered: false
            },
            customer_name: {
                value: '',
                valid: false,
                entered: false
            },
            contact_person: {
                value: '',
                valid: false,
                entered: false
            },
            phone: {
                value: '',
                valid: false,
                entered: false
            },
            fax: {
                value: '',
                valid: false,
                entered: false
            },
            start_date: {
                value: '',
                valid: false,
                entered: false
            },
            end_date: {
                value: '',
                valid: false,
                entered: false
            },
            email: {
                value: '',
                valid: false,
                entered: false
            },
            city: {
                value: '',
                valid: false,
                entered: false
            },
            address: {
                value: '',
                valid: false,
                entered: false
            }
        },
        loading: false
    };
};

export const createProjectFailed = () => {
    return {
        type: projects.CREATE_PROJECT_FAILED,
        loading: false
    };
};

export const addStartDate = (sdate) => {
    return {
        type: projects.ADD_START_DATE,
        value: sdate,
        valid: isDate(new Date(sdate)),
        entered: true
    };
};

export const addEndDate = (edate) => {
    return {
        type: projects.ADD_END_DATE,
        value: edate,
        valid: isDate(new Date(edate)),
        entered: true
    };
};

export const addProjectName = (pname) => {
    return {
        type: projects.ADD_PROJECT_NAME,
        value: pname,
        valid: (pname.length > 0),
        entered: true
    };
};

export const addCustomerName = (cname) => {
    return {
        type: projects.ADD_CUSTOMER_NAME,
        value: cname,
        valid: (cname.length > 0),
        entered: true
    };
};

export const addContactPerson = (cperson) => {
    return {
        type: projects.ADD_CONTACT_PERSON,
        value: cperson,
        valid: (cperson.length > 0),
        entered: true
    };
};

export const addPhone = (phone) => {
    return {
        type: projects.ADD_PHONE,
        value: phone,
        valid: Number.isInteger(Number(phone)),
        entered: true
    };
};

export const addFax = (fax) => {
    return {
        type: projects.ADD_FAX,
        value: fax,
        valid: Number.isInteger(Number(fax)),
        entered: true
    };
};

export const addEmail = (email) => {
    return {
        type: projects.ADD_EMAIL,
        value: email,
        valid: isEmail(email),
        entered: true
    };
};

export const addCity = (city) => {
    return {
        type: projects.ADD_CITY,
        value: city,
        valid: (city.length > 0),
        entered: true
    };
};

export const addAddress = (addr) => {
    return {
        type: projects.ADD_ADDRESS,
        value: addr,
        valid: (addr.length > 0),
        entered: true
    };
};

export const openEditProject = (id) => {
    return {
        type: projects.OPEN_EDIT_PROJECT,
        id,
        open: true
    };
};

export const checkPrompt = () => {
    return {
        type: projects.CHECKED
    };
};
