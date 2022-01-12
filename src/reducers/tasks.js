import { tasks } from '../constants';

const initialState = {
    tasks: [],
    open:  false,
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
    actions: {
        delete_task: {
            id: null,
            loading: false
        },
        create_task: {
            loading: false
        },
        edit_task: {
            loading: false,
            checked: false,
            id: null
        }
    },
    loading: true,
    error: null
};

const TaskReducer = (state=initialState, action) => {
    switch(action.type) {
        case tasks.GET_TASKS:
            return {
                ...state,
                loading: action.loading,
                error: action.error
            };
        case tasks.GET_TASKS_SUCCESSFUL:
            return {
                ...state,
                loading: action.loading,
                tasks: action.tasklist
            };
        case tasks.GET_TASKS_FAILED:
            return {
                ...state,
                loading: action.loading,
                error: action.error
            };
        case tasks.REMOVE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task=>task.id !== action.id)
            };
        case tasks.DELETE_TASK:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    delete_task: {
                        ...state.delete_task,
                        loading: action.loading,
                        id: action.id
                    }
                }
            };
        case tasks.DELETE_TASK_SUCCESSFUL:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    delete_task: {
                        ...state.delete_task,
                        loading: action.loading,
                        id: action.id
                    }
                }
            };
        case tasks.DELETE_TASK_FAILED:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    delete_task: {
                        ...state.delete_task,
                        loading: action.loading,
                        id: action.id
                    }
                }
            };
        case tasks.OPEN_CREATE_TASK:
            return {
                ...state,
                open: action.open
            };
        case tasks.ADD_TASK:
            return {
                ...state,
                task_details: {
                    ...state.task_details,
                    task: {
                        ...state.task_details.task,
                        value: action.task,
                        entered: action.entered,
                        valid: action.valid
                    }
                }
            };
        case tasks.ADD_NAME:
            return {
                ...state,
                task_details: {
                    ...state.task_details,
                    name: {
                        ...state.task_details.name,
                        value: action.name,
                        entered: action.entered,
                        valid: action.valid
                    }
                }
            };
        case tasks.ADD_DESCRIPTION:
            return {
                ...state,
                task_details: {
                    ...state.task_details,
                    description: {
                        ...state.task_details.description,
                        value: action.description,
                        entered: action.entered,
                        valid: action.valid
                    }
                }
            };  
        case tasks.CLOSE_CREATE_TASK:
            return {
                ...state,
                open: action.open,
                task_details: action.task_details,
                actions: {
                    ...state.actions,
                    create_task: {
                        ...state.actions.create_task,
                        loading: action.loading
                    },
                    edit_task: {
                        ...state.actions.edit_task,
                        loading: action.loading,
                        checked: false,
                        id: action.id
                    }
                }
            };
        case tasks.CREATE_TASK:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    create_task: {
                        ...state.actions.create_task,
                        loading: action.loading
                    }
                }
            };
        case tasks.CREATE_TASK_SUCCESSFUL:
            return {
                ...state,
                open: action.open,
                tasks: [action.task, ...state.tasks],
                task_details: action.task_details,
                actions: {
                    ...state.actions,
                    create_task: {
                        ...state.actions.create_task,
                        loading: action.loading
                    }
                }
            };
        case tasks.CREATE_TASK_FAILED:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    create_task: {
                        ...state.actions.create_task,
                        loading: action.loading
                    }
                }
            };
        case tasks.OPEN_EDIT_TASK:
            let task = state.tasks.filter((t)=>{ return t.id === action.id; })[0];
            return {
                ...state,
                actions: {
                    ...state.actions,
                    edit_task: {
                        ...state.actions.edit_task,
                        id: action.id
                    }
                },
                open: action.open,
                task_details: {
                    task: {
                        value: task.task,
                        entered: true,
                        valid: true
                    },
                    name: {
                        value: task.name,
                        entered: true,
                        valid: true
                    },
                    description:{
                        value: task.description,
                        entered: true,
                        valid: true
                    }
                }
                
            };
        case tasks.EDIT_TASK:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    edit_task: {
                        ...state.actions.edit_task,
                        loading: action.loading
                    }
                }
            }; 
        case tasks.EDIT_TASK_SUCCESSFUL:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    edit_task: {
                        ...state.actions.edit_task,
                        id: null,
                        checked: false,
                        loading: action.loading
                    }
                },
                tasks: [action.task, ...state.tasks],
                open: action.open,
                task_details: action.task_details
            };
        case tasks.EDIT_TASK_FAILED:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    edit_task: {
                        ...state.actions.edit_task,
                        loading: action.loading
                    }
                }
            };
        case tasks.CHECKED:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    edit_task: {
                        ...state.actions.edit_task,
                        checked: !state.actions.edit_task.checked
                    }
                }
            };
        default:
            return state;
    }
};

export default TaskReducer;
