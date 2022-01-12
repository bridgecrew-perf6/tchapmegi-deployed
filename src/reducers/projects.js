import { projects } from '../constants';

const initialState = {
    projects: [],
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
    actions: {
        create_project: {
            loading: false
        },
        edit_project: {
            loading: false,
            checked: false,
            id: null
        },
        remove_project: {
            id: null,
            loading: false
        },
        view_project: {
            project: {},
            open: false
        }
    },
    error: null,
    loading: false
}

const projectReducer = (state=initialState, action) => {
    switch(action.type) {
        case projects.GET_PROJECTS:
            return {
                ...state,
                loading: action.loading,
                error: null
            };
        case projects.GET_PROJECTS_SUCCESSFUL:
            return {
                ...state,
                loading: action.loading,
                projects: action.projectlist
            };
        case projects.GET_PROJECTS_FAILED:
            return {
                ...state,
                loading: action.loading,
                error: action.error
            };
        case projects.VIEW_PROJECT:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    view_project: {
                        ...state.actions.view_project,
                        project: state.projects.filter((p)=>{ return p.id === action.project_id; })[0],
                        open: action.open
                    }
                }
            }; 
        case projects.CLOSE_VIEW_PROJECT:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    view_project: {
                        ...state.actions.view_project,
                        project: {},
                        open: action.open
                    }
                }
            };
        case projects.REMOVE_PROJECT:
            return {
                ...state,
                projects: state.projects.filter(p=>{ return p.id !== action.id })
            };
        case projects.DELETE_PROJECT:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    remove_project: {
                        ...state.actions.remove_project,
                        id: action.id,
                        loading: action.loading
                    }
                }
            };
        case projects.DELETE_PROJECT_SUCCESSFUL:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    remove_project: {
                        ...state.actions.remove_project,
                        id: action.id,
                        loading: action.loading
                    }
                }
            };
        case projects.DELETE_PROJECT_FAILED:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    remove_project: {
                        ...state.actions.remove_project,
                        id: action.id,
                        loading: action.loading
                    }
                }
            };
        case projects.OPEN_CREATE_PROJECT:
            return {
                ...state,
                open: action.open
            };
        case projects.CLOSE_CREATE_PROJECT:
            return {
                ...state,
                open: action.open,
                project_details: action.project_details,
                actions: {
                    ...state.actions,
                    create_project: {
                        ...state.actions.create_project,
                        loading: action.loading
                    },
                    edit_project: {
                        ...state.actions.edit_project,
                        loading: action.loading,
                        id: action.id,
                        checked: action.checked
                    }
                }
            };
        case projects.ADD_PROJECT_NAME:
            return {
                ...state,
                project_details: {
                    ...state.project_details,
                    project_name: {
                        value: action.value,
                        valid: action.valid,
                        entered: action.entered
                    }
                }
            };
        case projects.ADD_CUSTOMER_NAME:
            return {
                ...state,
                project_details: {
                    ...state.project_details,
                    customer_name: {
                        value: action.value,
                        valid: action.valid,
                        entered: action.entered
                    }
                }
            };
        case projects.ADD_CONTACT_PERSON:
            return {
                ...state,
                project_details: {
                    ...state.project_details,
                    contact_person: {
                        value: action.value,
                        valid: action.valid,
                        entered: action.entered
                    }
                }
            };
        case projects.ADD_START_DATE:
            return {
                ...state,
                project_details: {
                    ...state.project_details,
                    start_date: {
                        value: action.value,
                        valid: action.valid,
                        entered: action.entered
                    }
                }
            };
        case projects.ADD_END_DATE:
            return {
                ...state,
                project_details: {
                    ...state.project_details,
                    end_date: {
                        value: action.value,
                        valid: action.valid,
                        entered: action.entered
                    }
                }
            };
        case projects.ADD_PHONE:
            return {
                ...state,
                project_details: {
                    ...state.project_details,
                    phone: {
                        value: action.value,
                        valid: action.valid,
                        entered: action.entered
                    }
                }
            };
        case projects.ADD_EMAIL:
            return {
                ...state,
                project_details: {
                    ...state.project_details,
                    email: {
                        value: action.value,
                        valid: action.valid,
                        entered: action.entered
                    }
                }
            };
        case projects.ADD_FAX:
            return {
                ...state,
                project_details: {
                    ...state.project_details,
                    fax: {
                        value: action.value,
                        valid: action.valid,
                        entered: action.entered
                    }
                }
            };
        case projects.ADD_ADDRESS:
            return {
                ...state,
                project_details: {
                    ...state.project_details,
                    address: {
                        value: action.value,
                        valid: action.valid,
                        entered: action.entered
                    }
                }
            };
        case projects.ADD_CITY:
            return {
                ...state,
                project_details: {
                    ...state.project_details,
                    city: {
                        value: action.value,
                        valid: action.valid,
                        entered: action.entered
                    }
                }
            };
        case projects.CREATE_PROJECT || projects.CREATE_PROJECT_FAILED:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    create_project: {
                        ...state.actions.create_project,
                        loading: action.loading
                    }
                }
            };
        case projects.CREATE_PROJECT_SUCCESSFUL:
            return {
                ...state,
                projects: [action.project, ...state.projects],
                actions: {
                    ...state.actions,
                    create_project: {
                        ...state.actions.create_project,
                        loading: action.loading
                    }
                },
                project_details: action.project_details,
                open: action.open
            };
        case projects.EDIT_PROJECT || projects.EDIT_PROJECT_FAILED:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    edit_project: {
                        ...state.actions.edit_project,
                        loading: action.loading
                    }
                }
            };
        case projects.EDIT_PROJECT_SUCCESSFUL:
            return {
                ...state,
                projects: [action.project, ...state.projects],
                actions: {
                    ...state.actions,
                    edit_project: {
                        ...state.actions.edit_project,
                        loading: action.loading
                    }
                },
                project_details: action.project_details,
                open: action.open
            };
        case projects.OPEN_EDIT_PROJECT:
            let project = state.projects.filter((p)=>{ return p.id === action.id; })[0];
            return {
                ...state,
                actions: {
                    ...state.actions,
                    edit_project: {
                        ...state.actions.edit_project,
                        id: action.id
                    }
                },
                open: action.open,
                project_details: {
                    project_name: {
                        value: project.project_name,
                        valid: true,
                        entered: true
                    },
                    customer_name: {
                        value: project.customer_name,
                        valid: true,
                        entered: true
                    },
                    contact_person: {
                        value: project.contact_person,
                        valid: true,
                        entered: true
                    },
                    phone: {
                        value: project.phone,
                        valid: true,
                        entered: true
                    },
                    fax: {
                        value: project.fax,
                        valid: true,
                        entered: true
                    },
                    start_date: {
                        value: project.start_date,
                        valid: true,
                        entered: true
                    },
                    end_date: {
                        value: project.end_date,
                        valid: true,
                        entered: true
                    },
                    email: {
                        value: project.email,
                        valid: true,
                        entered: true
                    },
                    city: {
                        value: project.city,
                        valid: true,
                        entered: true
                    },
                    address: {
                        value: project.address,
                        valid: true,
                        entered: true
                    }
                }
            };
        case projects.CHECKED:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    edit_project: {
                        ...state.actions.edit_project,
                        checked: !state.actions.edit_project.checked
                    }
                }
            };
        default:
            return state;
    }
}

export default projectReducer;
