import { tasks } from '../constants';

export const getTasks = () => {
    return {
        type: tasks.GET_TASKS,
        loading: true,
        error: null
    };
};

export const getTasksSuccessful = (tasklist) => {
    return { 
        type: tasks.GET_TASKS_SUCCESSFUL,
        loading: false,
        tasklist
    };
};

export const getTasksFailed = (error) => {
    return {
        type: tasks.GET_TASKS_FAILED,
        loading: false,
        error
    };
};

export const removeTask = (id) => {
    return {
        type: tasks.REMOVE_TASK,
        id
    };
};

export const openCreateTask = () => {
    return {
        type: tasks.OPEN_CREATE_TASK,
        open: true
    };
};


export const deleteTask = (id) => {
    return {
        type: tasks.DELETE_TASK,
        loading: true,
        id
    };
};

export const deleteTaskSuccessful = () => {
    return {
        type: tasks.DELETE_TASK_SUCCESSFUL,
        id: null,
        loading: false
    };
};

export const deleteTaskFailed = () => {
    return {
        type: tasks.DELETE_TASK_FAILED,
        id: null,
        loading: false
    };
};

export const addTask = (task) => {      
    return {
        type: tasks.ADD_TASK,
        task,
        entered: true,
        valid: (task.length > 0)
    };
};

export const addName = (name) => {
    return {
        type: tasks.ADD_NAME,
        name,
        entered: true,
        valid: (name.length > 0)
    };
};

export const addDescription = (description) => {
    return {
        type: tasks.ADD_DESCRIPTION,
        description,
        entered: true,
        valid: (description.length > 0)
    };
};

export const closeCreateTask = () => {
    return {
        type: tasks.CLOSE_CREATE_TASK,
        open: false,
        task_details: {
            task: {
                value: "",
                entered: false,
                valid: false
            },
            name: {
                value: "",
                entered: false,
                valid: false
            },
            description:{
                value: "",
                entered: false,
                valid: false
            }
        },
        loading: false,
        id: null
    };
};

export const createTask = () => {
    return {
        type: tasks.CREATE_TASK,
        loading: true
    };
};

export const createTaskSuccessful = (task) => {
    return {
        type: tasks.CREATE_TASK_SUCCESSFUL,
        task,
        open: false,
        task_details: {
            task: {
                value: "",
                entered: false,
                valid: false
            },
            name: {
                value: "",
                entered: false,
                valid: false
            },
            description:{
                value: "",
                entered: false,
                valid: false
            }
        },
        loading: false
    };
};

export const createTaskFailed = () => {
    return {
        type: tasks.CREATE_TASK_FAILED,
        loading: false
    };
};

export const openEditTask = (id) => {
    return {
        type: tasks.OPEN_EDIT_TASK,
        open: true,
        id
    };
};

export const editTask = () => {
    return {
        type: tasks.EDIT_TASK,
        loading: true
    };
};

export const editTaskSuccessful = (task) => {
    return {
        type: tasks.EDIT_TASK_SUCCESSFUL,
        task,
        open: false,
        task_details: {
            task: {
                value: "",
                entered: false,
                valid: false
            },
            name: {
                value: "",
                entered: false,
                valid: false
            },
            description:{
                value: "",
                entered: false,
                valid: false
            }
        },
        loading: false
    };
};

export const editTaskFailed = () => {
    return {
        type: tasks.EDIT_TASK_FAILED,
        loading: false
    };
};

export const checkPrompt = () => {
    return {
        type: tasks.CHECKED
    };
};
