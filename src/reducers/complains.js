import { complains } from '../constants';

const initialState = {
    complains: [],
    category: [],
    map: [],
    active_view: "list",
    actions: {
        delete_complain: {
            loading: false,
            id: null
        },
        change_status: {
            open: false,
            complain: {},
            loading: false
        },
        canalysis: {
            analysis: null,
            loading: false,
            error: null
        },
        get_categories: {
            loading: false
        },
        cat: {
            open: false,
            cat: '',
            loading: false,
        },
        cmap: {
            loading: false,
            error: null
        }
    },
    loading: false,
    error: null
};

const complainsReducer = (state=initialState, action) => {
    switch(action.type) {
        case complains.GET_COMPLAINS: 
            return {
                ...state,
                loading: action.loading,
                error: action.error
            };
        case complains.GET_COMPLAINS_SUCCESSFUL:
            return {
                ...state,
                loading: action.loading,
                complains: [...action.complainlist]
            };
        case complains.GET_COMPLAINS_FAILED:
            return {
                ...state,
                loading: action.loading,
                error: action.error
            };
        case complains.REMOVE_COMPLAIN:
            return {
                ...state,
                complains: state.complains.filter((c)=>{ return c.id !== action.id })
            };
        case complains.DELETE_COMPLAIN:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    delete_complain: {
                        ...state.actions.delete_complain,
                        loading: action.loading,
                        id: action.id
                    }
                }
            };
        case complains.DELETE_COMPLAIN_SUCCESSFUL:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    delete_complain: {
                        ...state.actions.delete_complain,
                        loading: action.loading,
                        id: action.id
                    }
                }
            };
        case complains.DELETE_COMPLAIN_FAILED:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    delete_complain: {
                        ...state.actions.delete_complain,
                        loading: action.loading,
                        id: action.id
                    }
                }
            };
        case complains.CHANGE_VIEW:
            return {
                ...state,
                active_view: action.view
            };
        case complains.GET_COMPLAIN_MAP:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    cmap: {
                        ...state.actions.cmap,
                        loading: action.loading,
                        error: action.error
                    }
                }
            };
        case complains.GET_COMPLAIN_MAP_SUCCESSFUL:
            return {
                ...state,
                map: [...action.mlist],
                actions: {
                    ...state.actions,
                    cmap: {
                        ...state.actions.cmap,
                        loading: action.loading,
                    }
                }
            };
        case complains.GET_COMPLAIN_MAP_FAILED:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    cmap: {
                        ...state.actions.cmap,
                        loading: action.loading,
                        error: action.error
                    }
                }
            };
        case complains.GET_CANALYSIS:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    canalysis: {
                        ...state.actions.canalysis,
                        loading: action.loading,
                        error: action.error
                    }
                }
            };
        case complains.GET_CANALYSIS_SUCCESSFUL:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    canalysis: {
                        ...state.actions.canalysis,
                        analysis: action.clist,
                        loading: action.loading
                    }
                }
            };
        case complains.GET_CANALYSIS_FAILED:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    canalysis: {
                        ...state.actions.canalysis,
                        loading: action.loading,
                        error: action.error
                    }
                }
            };
        case complains.ADD_CAT:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    cat: {
                        ...state.actions.cat,
                        cat: action.cat
                    }
                }
            };
        case complains.CREATE_CAT:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    cat: {
                        ...state.actions.cat,
                        loading: action.loading
                    }
                }
            };
        case complains.CREATE_CAT_SUCCESSFUL:
            return {
                ...state,
                category: [...state.category, action.new_cat],
                actions: {
                    ...state.actions,
                    cat: {
                        ...state.actions.cat,
                        loading: action.loading,
                        open: action.open,
                        cat: action.cat
                    }
                }
            };
        case complains.CREATE_CAT_FAILED:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    cat: {
                        ...state.actions.cat,
                        loading: action.loading
                    }
                }
            };
        case complains.OPEN_CREATE_CAT:
                return {
                    ...state,
                    actions: {
                        ...state.actions,
                        cat: {
                            ...state.actions.cat,
                            open: action.open
                        }
                    }
                };
        case complains.CLOSE_CREATE_CAT:
                return {
                    ...state,
                    actions: {
                        ...state.actions,
                        cat: initialState.actions.cat
                    }
                };
        case complains.GET_CATEGORIES:
                return {
                    ...state,
                    actions: {
                        ...state.actions,
                        get_categories: {
                            ...state.actions.get_categories,
                            loading: action.loading,
                            error: action.error
                        }
                    }
                };
        case complains.GET_CATEGORIES_SUCCESSFUL:
            return {
                ...state,
                category: [...state.category, ...action.category],
                actions: {
                    ...state.actions,
                    get_categories: {
                        ...state.actions.get_categories,
                        loading: action.loading
                    }
                }
            };
        case complains.GET_CATEGORIES_FAILED:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    get_categories: {
                        ...state.actions.get_categories,
                        loading: action.loading,
                        error: action.error
                    }
                }
            };
        case complains.OPEN_VIEW:
            let complain = state.complains.filter((c)=>{ return c.id === action.id })[0]
            return {
                ...state,
                actions: {
                    ...state.actions,
                    change_status: {
                        ...state.actions.change_status,
                        complain: {
                            id: complain.id,
                            status_id: complain.status_id,
                            description: complain.description
                        },
                        open: action.open
                    }
                }
            };
        case complains.CLOSE_VIEW:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    change_status: initialState.actions.change_status
                }
            };
        case complains.MODIFY_STATUS:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    change_status: {
                        ...state.actions.change_status,
                        complain: {
                            ...state.actions.change_status.complain,
                            status_id: action.cid
                        }
                    }
                }
            };
        case complains.CHANGE_STATUS:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    change_status: {
                        ...state.actions.change_status,
                        loading: action.loading
                    }
                }
            };
        case complains.CHANGE_STATUS_SUCCESSFUL:
            return {
                ...state,
                complains: [action.complain, ...state.complains],
                actions: {
                    ...state.actions,
                    change_status: {
                        ...state.actions.change_status,
                        loading: action.loading,
                        open: action.open
                    }
                }
            };
        case complains.CHANGE_STATUS_FAILED:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    change_status: {
                        ...state.actions.change_status,
                        loading: action.loading
                    }
                }
            };
        default:
            return state;
    }
};

export default complainsReducer;
