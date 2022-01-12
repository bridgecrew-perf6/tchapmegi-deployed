import { resources } from '../constants';

const initialState = {
    resources: [],
    open: false,
    resource_details: {
        rnr: {
            value: "",
            valid: false,
            entered: false
        },
        resource_name: {
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
        group: {
            value: ""
        },
        article: {
            value: ""
        },
        store: {
            value: ""
        },
        long_name: {
            value: ""
        },
        business_sector: {
            value: ""
        },
        address: {
            value: ""
        }
    },
    actions: {
        remove_rsrc: {
            id: null,
            loading: false
        },
        create_resource: {
            loading: false
        },
        edit_resource: {
            id: null,
            checked: false,
            loading: false
        },
        view_resource: {
            resource: {},
            open: false
        }
    },
    loading: false,
    error: null
};

const ResourceReducer = (state=initialState, action) => {
    switch(action.type) {
        case resources.GET_RESOURCES:
            return {
                ...state,
                loading: action.loading,
                error: action.error
            };
        case resources.GET_RESOURCES_SUCCESSFUL:
            return {
                ...state,
                resources: action.resources,
                loading: action.loading,
                error: action.error
            };
        case resources.GET_RESOURCES_FAILED:
            return {
                ...state,
                loading: action.loading,
                error: action.error
            };
        case resources.REMOVE_RESOURCE:
            return {
                ...state,
                resources: [...state.resources.filter((r)=>{ return r.id !== action.id; })]
            };
        case resources.DELETE_RESOURCE:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    remove_rsrc: {
                        ...state.actions.remove_rsrc,
                        id: action.id,
                        loading: action.loading
                    }
                }
            };
        case resources.DELETE_RESOURCE_SUCCESSFUL:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    remove_rsrc: {
                        ...state.actions.remove_rsrc,
                        id: action.id,
                        loading: action.loading
                    }
                }
            };
        case resources.DELETE_RESOURCE_FAILED:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    remove_rsrc: {
                        ...state.actions.remove_rsrc,
                        id: action.id,
                        loading: action.loading
                    }
                }
            };
        case resources.VIEW_RESOURCE:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    view_resource: {
                        ...state.actions.view_resource,
                        resource: state.resources.filter((p)=>{ return p.id === action.resource_id; })[0],
                        open: action.open
                    }
                }
            };
        case resources.CLOSE_VIEW_RESOURCE:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    view_resource: {
                        ...state.actions.view_resource,
                        open: action.open
                    }
                }
            };
        case resources.OPEN_CREATE_RESOURCE:
            return {
                ...state,
                open: action.open
            };
        case resources.ADD_RNR:
            return {
                ...state,
                resource_details: {
                    ...state.resource_details,
                    rnr: {
                        value: action.rnr,
                        valid: action.valid,
                        entered: action.entered
                    }
                }
            };
        case resources.ADD_RNAME:
            return {
                ...state,
                resource_details: {
                    ...state.resource_details,
                    resource_name: {
                        value: action.rname,
                        valid: action.valid,
                        entered: action.entered
                    }
                }
            };
        case resources.ADD_VALID_FROM:
            return {
                ...state,
                resource_details: {
                    ...state.resource_details,
                    valid_from: {
                        value: action.vfrom,
                        valid: action.valid,
                        entered: action.entered
                    }
                }
            };
        case resources.ADD_VALID_TO:
            return {
                ...state,
                resource_details: {
                    ...state.resource_details,
                    valid_to: {
                        value: action.vto,
                        valid: action.valid,
                        entered: action.entered
                    }
                }
            };
        case resources.ADD_STORE:
            return {
                ...state,
                resource_details: {
                    ...state.resource_details,
                    store: {
                        value: action.store
                    }
                }
            };
        case resources.ADD_ARTICLE: 
            return {
                ...state,
                resource_details: {
                    ...state.resource_details,
                    article: {
                        value: action.article
                    }
                }
            };
        case resources.ADD_GROUP:
            return {
                ...state,
                resource_details: {
                    ...state.resource_details,
                    group: {
                        value: action.group
                    }
                }
            };
        case resources.ADD_LONG_NAME:
            return {
                ...state,
                resource_details: {
                    ...state.resource_details,
                    long_name: {
                        value: action.lname
                    }
                }
            };
        case resources.ADD_BSECTOR:
            return {
                ...state,
                resource_details: {
                    ...state.resource_details,
                    business_sector: {
                        value: action.bsector
                    }
                }
            };
        case resources.ADD_ADDRESS:
            return {
                ...state,
                resource_details: {
                    ...state.resource_details,
                    address: {
                        value: action.addr
                    }
                }
            };
        case resources.CLOSE_CREATE_RESOURCE:
            return {
                ...state,
                open: action.open,
                resource_details: initialState.resource_details,
                actions: {
                    ...state.actions,
                    create_resource: {
                        ...state.actions.create_resource,
                        loading: action.loading
                    },
                    edit_resource: {
                        ...state.actions.edit_resource,
                        loading: action.loading,
                        id: action.id,
                        checked: action.checked
                    }
                }
            };
        case resources.CREATE_RESOURCE: 
            return {
                ...state,
                actions: {
                    ...state.actions,
                    create_resource: {
                        loading: action.loading
                    }
                }
            };
        case resources.CREATE_RESOURCE_SUCCESSFUL:
            return {
                ...state,
                resources: [action.resource, ...state.resources],
                open: action.open,
                resource_details: initialState.resource_details,
                actions: {
                    ...state.actions,
                    create_resource: {
                        loading: action.loading
                    }
                }
            };
        case resources.CREATE_RESOURCE_FAILED:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    create_resource: {
                        loading: action.loading
                    }
                }
            };
        case resources.OPEN_EDIT_RESOURCE:
            let resource = state.resources.filter((t)=>{ return t.id === action.id })[0];
            return {
                ...state,
                open: action.open,
                actions: {
                    ...state.actions,
                    edit_resource: {
                        ...state.actions.edit_resource,
                        id: action.id
                    }
                },
                resource_details: {
                  rnr: {
                      value: resource.rnr,
                      valid: true,
                      entered: true
                  },
                  resource_name: {
                      value: resource.resource_name,
                      valid: true,
                      entered: true
                  },
                  valid_from: {
                      value: resource.valid_from,
                      valid: true,
                      entered: true
                  },
                  valid_to: {
                      value: resource.valid_to,
                      valid: true,
                      entered: true
                  },
                  group: {
                      value: resource.group
                  },
                  article: {
                      value: resource.article
                  },
                  store: {
                      value: resource.store
                  },
                  long_name: {
                      value: resource.long_name
                  },
                  business_sector: {
                      value: resource.business_sector
                  },
                  address: {
                      value: resource.address
                  }
                }
            };
        case resources.EDIT_RESOURCE:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    edit_resource: {
                        ...state.actions.edit_resource,
                        loading: action.loading
                    }
                }
            };
        case resources.EDIT_RESOURCE_FAILED:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    edit_resource: {
                        ...state.actions.edit_resource,
                        loading: action.loading
                    }
                }
            };
        case resources.EDIT_RESOURCE_SUCCESSFUL:
            return {
                ...state,
                resources: [action.resource, ...state.resources],
                open: action.open,
                resource_details: initialState.resource_details,
                actions: {
                    ...state.actions,
                    edit_resource: {
                        ...state.actions.edit_resource,
                        loading: action.loading,
                        id: null,
                        checked: false
                    }
                }
            };
        case resources.CHECK_PROMPT:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    edit_resource: {
                        ...state.actions.edit_resource,
                        checked: !state.actions.edit_resource.checked
                    }
                }
            };
        default:
            return state;
    }
};

export default ResourceReducer;
