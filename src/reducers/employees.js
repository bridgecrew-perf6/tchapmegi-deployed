import { employees } from '../constants';

const initialState = {
    employees: [],
    auth: [],
    open: false,
    employee_details: {
        avatar: {
            value: "",
            valid: false,
            entered: false
        },
        first_name: {
            value: "",
            valid: false,
            entered: false
        },
        last_name: {
            value: "",
            valid: false,
            entered: false
        },
        valid_from: {
            value: "",
            valid: false,
            entered: false
        },
        valid_to: {
            value: "",
            valid: false,
            entered: false
        },
        gender: {
            value: "Male"
        },
        profession: {
            value: "Worker"
        },
        bank: {
            value: ""
        },
        bank_code: {
            value: ""
        },
        phone: {
            value: "",
            valid: false,
            entered: false
        },
        currency: {
            value: ""
        },
        wage_index: {
            value: ""
        },
        nationality: {
            value: ""
        },
        date_of_birth: {
            value: ""
        },
        address: {
            value: ""
        },
        location: {
            value: ""
        },
        comments: {
            value: ""
        }
    },
    actions: {
        delete_employee: {
            id: null,
            loading: false
        },
        view_employee: {
            open: false,
            employee: {}
        },
        create_emp: {
            loading: false
        },
        edit_emp: {
            id: null,
            checked: false,
            loading: false
        },
        auth: {
            open: false,
            loading: false,
            emp: {},
            id: null
        }
    },
    loading: false,
    error: null
};

const EmployeeReducer = (state=initialState, action) => {
    switch(action.type) {
        case employees.GET_EMPLOYEES:
            return {
                ...state,
                loading: action.loading,
                error: action.error
            };
        case employees.GET_EMPLOYEES_SUCCESSFUL:
            return {
                ...state,
                employees: [...action.emp_list],
                loading: action.loading,
                error: action.error
            };
        case employees.GET_EMPLOYEES_FAILED:
            return {
                ...state,
                loading: action.loading,
                error: action.error
            };
        case employees.REMOVE_EMPLOYEE:
            return {
                ...state,
                employees: state.employees.filter(t=> { return t.id !== action.id })
            };
        case employees.DELETE_EMPLOYEE:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    delete_employee: {
                        ...state.actions.delete_employee,
                        id: action.id,
                        loading: action.loading
                    }
                }
            };
        case employees.DELETE_EMPLOYEE_SUCCESSFUL:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    delete_employee: {
                        ...state.actions.delete_employee,
                        id: null,
                        loading: action.loading
                    }
                }
            };
        case employees.DELETE_EMPLOYEE_FAILED:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    delete_employee: {
                        ...state.actions.delete_employee,
                        id: null,
                        loading: action.loading
                    }
                }
            };
        case employees.VIEW_EMPLOYEE:
            var employee = state.employees.filter(e=>{ return e.id === action.id; })[0];
            return {
                ...state,
                actions: {
                    ...state.actions,
                    view_employee: {
                        open: action.open,
                        employee: employee
                    }
                }
            };
        case employees.CLOSE_VIEW_EMPLOYEE:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    view_employee: {
                        open: action.open,
                        employee: {}
                    }
                }
            };
        case employees.OPEN_AUTH_EMPLOYEE:
            let emp = state.auth.filter(t=>{ return t.emp_id === action.id; })[0];
            return {
                ...state,
                actions: {
                    ...state.actions,
                    auth: {
                        ...state.actions.auth,
                        id: action.id,
                        emp: emp,
                        open: true
                    }
                }
            };
        case employees.CLOSE_AUTH_EMPLOYEE:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    auth: {
                        ...state.actions.auth,
                        id: null,
                        open: action.open,
                        loading: false,
                        emp: {}
                    }
                }
            }
        case employees.AUTH_EMPLOYEE:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    auth: {
                        ...state.actions.auth,
                        loading: action.true
                    }
                }
            };
        case employees.AUTH_EMPLOYEE_SUCCESSFUL:
            return {
                ...state,
                auth: [...state.auth, ...action.auth],
                actions: {
                    ...state.actions,
                    auth: {
                        ...state.actions.auth,
                        emp: {},
                        loading: action.loading,
                        open: false,
                        id: null
                    }
                }
            };
        case employees.AUTH_EMPLOYEE_FAILED:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    auth: {
                        ...state.actions.auth,
                        loading: action.loading
                    }
                }
            };
        case employees.REMOVE_AUTH:
            return {
                ...state,
                auth: state.auth.filter(t=>{ return t.emp_id !== action.id })
            };
        case employees.CHANGE_AUTH:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    auth: {
                        ...state.actions.auth,
                        emp: {
                            ...state.actions.auth.emp,
                            [action.key]: action[action.key]
                        }
                    }
                }
            };
        case employees.AUTH_UPDATE:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    auth: {
                        ...state.actions.auth,
                        loading: action.loading
                    }
                }
            };
        case employees.AUTH_UPDATE_SUCCESSFUL:
            return {
                ...state,
                auth: [...state.auth, action.auth_list],
                actions: {
                    ...state.actions,
                    auth: {
                        ...state.actions.auth,
                        open: action.open,
                        loading: action.loading,
                        id: null
                    }
                }
            };
        case  employees.AUTH_UPDATE_FAILED:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    auth: {
                        ...state.actions.auth,
                        loading: action.loading
                    }
                }
            };      
        case employees.ADD_INFO:
            return {
                ...state,
                employee_details: {
                    ...state.employee_details,
                    [action.key]: {
                        value: action.value,
                        valid: action.valid,
                        entered: action.entered
                    }
                }
            };
        case employees.OPEN_CREATE_EMP:
            return {
                ...state,
                open: action.open,
                actions: {
                    ...state.actions,
                    create_emp: {
                        ...state.actions.create_emp,
                    }
                }
            };
        case employees.CLOSE_CREATE_EMP:
            return {
                ...state,
                open: action.open,
                employee_details: initialState.employee_details,
                actions: {
                    ...state.actions,
                    create_emp: {
                        loading: action.loading
                    },
                    edit_emp: {
                        loading: action.loading,
                        checked: action.checked,
                        id: action.id
                    }
                }
            };
        case employees.OPEN_EDIT_EMP:
            let data = state.employees.filter((t)=>{ return t.id === action.id })[0];
            let emp2 = {};
            let mapp = Object.keys(data).map((key, index)=>{
                if (key !== "id") {
                    emp2[key] = {
                        value: data[key],
                        valid: true,
                        entered: true
                    }
                }
            });
            return {
                ...state,
                employee_details: {
                    ...state.employee_details,
                    ...emp2
                },
                open: action.open,
                actions: {
                    ...state.actions,
                    edit_emp: {
                        ...state.actions.edit_emp,
                        id: action.id,
                    }
                }
            };
        case employees.CREATE_EMP:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    create_emp: {
                        ...state.actions.create_emp,
                        loading: action.loading
                    }
                }
            };
        case employees.CREATE_EMP_SUCCESSFUL:
            return {
                ...state,
                employee_details: initialState.employee_details,
                employees: [action.emp, ...state.employees],
                open: action.open,
                actions: {
                    ...state.actions,
                    create_emp: {
                        ...state.actions.create_emp,
                        loading: action.loading
                    }
                }
            };
        case employees.CREATE_EMP_FAILED:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    create_emp: {
                        ...state.actions.create_emp,
                        loading: action.loading
                    }
                }
            };
        case employees.EDIT_EMP:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    edit_emp: {
                        ...state.actions.edit_emp,
                        loading: action.loading
                    }
                }
            };
        case employees.EDIT_EMP_SUCCESSFUL:
            return {
                ...state,
                employee_details: initialState.employee_details,
                open: action.open,
                employees: [action.emp, ...state.employees],
                actions: {
                    ...state.actions,
                    edit_emp: {
                        ...state.actions.edit_emp,
                        loading: action.loading,
                        checked: false,
                        id: null
                    }
                }
            };
        case employees.EDIT_EMP_FAILED:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    edit_emp: {
                        ...state.actions.edit_emp,
                        loading: action.loading
                    }
                }
            };
        case employees.REMOVE_EMP:
            return {
                ...state,
                employees: state.employees.filter((t)=>{return t.id !== action.id})
            };
        case employees.CHECK_PROMPT:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    edit_emp: {
                        ...state.actions.edit_emp,
                        checked: !state.actions.edit_emp.checked
                    }
                }
            };
        default:
            return state;
    }
};

export default EmployeeReducer;
