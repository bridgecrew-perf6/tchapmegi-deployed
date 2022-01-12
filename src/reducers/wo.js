import { wo } from '../constants';

const initialState = {
    wo: [],
    open: false,
    wo_details: {
        status: {
            value: ""
        },
        customer: {
            value: ""
        },
        invoicing: {
            value: ""
        },
        project: {
            value: ""
        },
        start_datetime: {
            value: ""
        },
        duration: {
            value: ""
        },
        task: {
            value: ""
        },
        title: {
            value: ""
        },
        user: {
            value: ""
        },
        team: {
            value: ""
        },
        team_size: {
            value: ""
        },
        description: {
            value: ""
        },
        disposition_start_date: {
            value: ""
        },
        disposition_end_date: {
            value: ""
        },
        disposition_plan_travel_time: {
            value: ""
        },
        disposition_starting_time: {
            value: ""
        },
        disposition_ending_time: {
            value: ""
        },
        disposition_plan_duration: {
            value: ""
        },
        disposition_plan_workload: {
            value: ""
        },
        security_advice_construction_site: {
            value: ""
        },
        security_advice_environment: {
            value: ""
        },
        security_advice_during_work: {
            value: ""
        },
        security_advice_special_dangers: {
            value: ""
        },
        security_advice_instructions: {
            value: ""
        },
        security_advice_rescue: {
            value: ""
        },
        security_advice_remark: {
            value: ""
        }
    },
    loading: false,
    actions: {
        view_wo: {
            wo: {},
            open: false
        },
        delete_wo: {
            id: null,
            loading: false
        },
        create_wo: {
            loading: false
        },
        edit_wo: {
            id: null,
            loading: false,
            checked: false
        }
    },
    error: null
};

const woReducer = (state=initialState, action) => {
    switch(action.type) {
        case wo.GET_WO:
            return {
                ...state,
                loading: action.loading,
                error: action.error
            };
        case wo.GET_WO_SUCCESSFUL:
            return {
                ...state,
                loading: action.loading,
                wo: [...action.wolist]
            };
        case wo.GET_WO_FAILED:
            return {
                ...state,
                loading: action.loading,
                error: action.error
            };
        case wo.REMOVE_WO:
            return {
                ...state,
                wo: state.wo.filter((w)=>{ return w.id !== action.id })
            };
        case wo.DELETE_WO:
            return {
                ...state,
                actions:  {
                    ...state.actions,
                    delete_wo: {
                        ...state.actions.delete_wo,
                        loading: action.loading,
                        id: action.id
                    }
                }
            };
        case wo.DELETE_WO_SUCCESSFUL:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    delete_wo: {
                        ...state.actions.delete_wo,
                        loading: action.loading,
                        id: action.id
                    }
                }
            };
        case wo.DELETE_WO_FAILED:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    delete_wo: {
                        ...state.actions,
                        delete_wo: {
                            ...state.actions.delete_wo,
                            loading: action.loading,
                            id: action.id
                        }
                    }
                }
            };
        case wo.VIEW_WO:
            let wo_view =  state.wo.filter((t)=>{ return t.id === action.id })[0];
            return {
                ...state,
                actions: {
                    ...state.actions,
                    view_wo: {
                        open: action.open,
                        wo: wo_view
                    }
                }
            };
        case wo.CLOSE_WO:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    view_wo: {
                        open: action.open,
                        wo: {}
                    }
                }
            };
        case wo.OPEN_CREATE_WO:
            return {
                ...state,
                open: action.open
            };
        case wo.CLOSE_CREATE_WO:
            return {
                ...state,
                open: action.open,
                wo_details: initialState.wo_details,
                actions: {
                    ...state.actions,
                    create_wo: {
                        ...state.actions.create_wo,
                        loading: action.loading,
                    },
                    edit_wo: {
                        ...state.actions.edit_wo,
                        loading: action.loading,
                        checked: false,
                        id: null
                    }
                }
            };
        case wo.OPEN_EDIT_WO:
            let data2 = state.wo.filter((t)=>{ return t.id === action.id })[0];
            let wo2 = {};
            let mapp2 = Object.keys(data2).map((key, index)=>{
                if (key !== "id") {
                    wo2[key] = {
                        value: data2[key],
                        valid: true,
                        entered: true
                    }
                }
            });
            return {
                ...state,
                open: action.open,
                wo_details: wo2,
                actions: {
                    ...state.actions,
                    edit_wo: {
                        ...state.actions.edit_wo,
                        id: action.id
                    }
                }
            };
        case wo.CREATE_WO:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    create_wo: {
                        ...state.actions.create_wo,
                        loading: action.loading
                    }
                }
            };
        case wo.CREATE_WO_SUCCESSFUL:
            return {
                ...state,
                wo: [action.worder, ...state.wo],
                open: action.open,
                actions: {
                    ...state.actions,
                    create_wo: {
                        ...state.actions.create_wo,
                        loading: action.loading
                    }
                }
            };
        case wo.CREATE_WO_FAILED:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    create_wo: {
                        ...state.actions.create_wo,
                        loading: action.loading
                    }
                }
            };
        case wo.EDIT_WO:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    edit_wo: {
                        ...state.actions.edit_wo,
                        loading: action.loading
                    }
                }
            };
        case wo.EDIT_WO_SUCCESSFUL:
            return {
                ...state,
                open: action.open,
                wo: [action.worder, ...state.wo],
                actions: {
                    ...state.actions,
                    edit_wo: {
                        ...state.actions.edit_wo,
                        loading: action.loading,
                        id: null,
                        checked: false
                    }
                }
            };
        case wo.EDIT_WO_FAILED:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    edit_wo: {
                        ...state.actions.edit_wo,
                        loading: action.loading
                    }
                }
            };
        case wo.CHECK_PROMPT:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    edit_wo: {
                        ...state.actions.edit_wo,
                        checked: !state.actions.edit_wo.checked
                    }
                }
            };
        case wo.ADD_INFO:
            return {
                ...state,
                wo_details: {
                    ...state.wo_details,
                    [action.key]: {
                        value: action.value,
                        valid: action.valid,
                        entered: action.entered
                    }
                }
            };
        default:
            return state;
    }
};

export default woReducer;
