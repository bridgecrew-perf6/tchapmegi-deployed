import { customers } from '../constants';

const initialState = {
    customers: [],
    open: false,
    customer_details: {
        customer_name: {
            value: "",
            valid: false,
            entered: false
        },
        debitor_number: {
            value: "",
            valid: false,
            entered: false
        },
        creation_date: {
            value: "",
            valid: false,
            entered: false
        },
        edited_on: {
            value: "",
            valid: false,
            entered: false
        },
        edited_by: {
            value: "",
            valid: false,
            entered: false
        },
        salutation: {
            value: "",
            valid: false,
            entered: false
        },
        phone: {
            value: "",
            valid: false,
            entered: false
        },
        email: {
            value: "",
            valid: false,
            entered: false
        },
        website: {
            value: ""
        },
        address_city: {
            value: ""
        },
        address: {
            value: ""
        },
        address_postcode: {
            value: ""
        },
        address_countrycode: {
            value: ""
        },
        postbox_name: {
            value: ""
        },
        postbox_postcode: {
            value: ""
        },
        postbox_city: {
            value: ""
        },
        postbox_countrycode: {
            value: ""
        },
        bank: {
            value: ""
        },
        bank_code: {
            value: ""
        },
        bank_account: {
            value: ""
        }, 
        bank_user: {
            value: ""
        },
        bank_iban: {
            value: ""
        },
        bank_bic: {
            value: ""
        },
        bank_countrycode: {
            value: ""
        },
        bank_currency: {
            value: ""
        }
    },
    actions: {
        create_customer: {
            loading: false
        },
        edit_customer: {
            loading: false,
            id: null,
            checked: false
        },
        view_customer: {
            open: false,
            customer: {}
        },
        delete_customer: {
            id: null,
            loading: false
        }
    },
    loading: false,
    error: null
};

const customersReducer = (state=initialState, action) => {
    switch(action.type) {
        case customers.GET_CUSTOMERS:
            return {
                ...state,
                loading: action.loading,
                error: action.error
            };
        case customers.GET_CUSTOMERS_SUCCESSFUL:
            return {
                ...state,
                loading: action.loading,
                error: action.error,
                customers: [...action.customer_list]
            };
        case customers.GET_CUSTOMERS_FAILED:
            return {
                ...state,
                loading: action.loading,
                error: action.error
            };
        case customers.REMOVE_CUSTOMER:
            return {
                ...state,
                customers: state.customers.filter((c)=>{ return c.id !== action.id })
            };
        case customers.DELETE_CUSTOMER:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    delete_customer: {
                        ...state.actions.delete_customer,
                        id: action.id,
                        loading: action.loading
                    }
                }
            };
        case customers.DELETE_CUSTOMER_SUCCESSFUL:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    delete_customer: {
                        ...state.actions.delete_customer,
                        id: action.id,
                        loading: action.loading
                    }
                }
            };
        case customers.DELETE_CUSTOMER_FAILED:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    delete_customer: {
                        ...state.actions.delete_customer,
                        id: action.id,
                        loading: action.loading
                    }
                }
            };
        case customers.VIEW_CUSTOMER:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    view_customer: {
                        ...state.actions.view_customer,
                        open: action.open,
                        customer: state.customers.filter((c)=>{ return c.id === action.customer_id })[0]
                    }
                }
            };
        case customers.CLOSE_VIEW_CUSTOMER:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    view_customer: {
                        ...state.actions.view_customer,
                        open: action.open,
                        customer: {}
                    }
                }
            };
        case customers.ADD_CNAME:
            return {
                ...state,
                customer_details: {
                    ...state.customer_details,
                    customer_name: {
                        value: action.value,
                        valid: action.valid,
                        entered: action.entered
                    }
                }
            };
        case customers.ADD_DNUM:
            return {
                ...state,
                customer_details: {
                    ...state.customer_details,
                    debitor_number: {
                        value: action.value,
                        valid: action.valid,
                        entered: action.entered
                    }
                }
            };
        case customers.ADD_CREATION_DATE:
            return {
                ...state,
                customer_details: {
                    ...state.customer_details,
                    creation_date: {
                        value: action.value,
                        valid: action.valid,
                        entered: action.entered
                    }
                }
            };
        case customers.ADD_EDITED_ON:
            return {
                ...state,
                customer_details: {
                    ...state.customer_details,
                    edited_on: {
                        value: action.value,
                        valid: action.valid,
                        entered: action.entered
                    }
                }
            };
        case customers.ADD_EDITED_BY:
            return {
                ...state,
                customer_details: {
                    ...state.customer_details,
                    edited_by: {
                        value: action.value,
                        valid: action.valid,
                        entered: action.entered
                    }
                }
            };
        case customers.ADD_SALUTATION:
            return {
                ...state,
                customer_details: {
                    ...state.customer_details,
                    salutation: {
                        value: action.value,
                        valid: action.valid,
                        entered: action.entered
                    }
                }
            };
        case customers.ADD_PHONE:
            return {
                ...state,
                customer_details: {
                    ...state.customer_details,
                    phone: {
                        value: action.value,
                        valid: action.valid,
                        entered: action.entered
                    }
                }
            };
        case customers.ADD_EMAIL:
            return {
                ...state,
                customer_details: {
                    ...state.customer_details,
                    email: {
                        value: action.value,
                        valid: action.valid,
                        entered: action.entered
                    }
                }
            };
        case customers.ADD_WEBSITE:
            return {
                ...state,
                customer_details: {
                    ...state.customer_details,
                    website: {
                        value: action.value
                    }
                }
            };
        case customers.ADD_ADDR_CITY:
            return {
                ...state,
                customer_details: {
                    ...state.customer_details,
                    address_city: {
                        value: action.value
                    }
                }
            };
        case customers.ADD_ADDR:
            return {
                ...state,
                customer_details: {
                    ...state.customer_details,
                    address: {
                        value: action.value
                    }
                }
            };
        case customers.ADD_ADDR_POSTCODE:
            return {
                ...state,
                customer_details: {
                    ...state.customer_details,
                    address_postcode: {
                        value: action.value
                    }
                }
            };
        case customers.ADD_ADDR_CCODE:
            return {
                ...state,
                customer_details: {
                    ...state.customer_details,
                    address_countrycode: {
                        value: action.value
                    }
                }
            };
        case customers.ADD_POSTBOX_NAME:
            return {
                ...state,
                customer_details: {
                    ...state.customer_details,
                    postbox_name: {
                        value: action.value
                    }
                }
            };
        case customers.ADD_POSTBOX_POSTCODE:
            return {
                ...state,
                customer_details: {
                    ...state.customer_details,
                    postbox_postcode: {
                        value: action.value
                    }
                }
            };
        case customers.ADD_POSTBOX_CITY:
            return {
                ...state,
                customer_details: {
                    ...state.customer_details,
                    postbox_city: {
                        value: action.value
                    }
                }
            };
        case customers.ADD_POSTBOX_CCODE:
            return {
                ...state,
                customer_details: {
                    ...state.customer_details,
                    postbox_countrycode: {
                        value: action.value
                    }
                }
            };
        case customers.ADD_BANK:
            return {
                ...state,
                customer_details: {
                    ...state.customer_details,
                    bank: {
                        value: action.value
                    }
                }
            };
        case customers.ADD_BANK_CODE:
            return {
                ...state,
                customer_details: {
                    ...state.customer_details,
                    bank_code: {
                        value: action.value
                    }
                }
            };
        case customers.ADD_BANK_USER:
            return {
                ...state,
                customer_details: {
                    ...state.customer_details,
                    bank_user: {
                        value: action.value
                    }
                }
            };
        case customers.ADD_BANK_IBAN:
            return {
                ...state,
                customer_details: {
                    ...state.customer_details,
                    bank_iban: {
                        value: action.value
                    }
                }
            };
        case customers.ADD_BANK_BIC:
            return {
                ...state,
                customer_details: {
                    ...state.customer_details,
                    bank_bic: {
                        value: action.value
                    }
                }
            };
        case customers.ADD_BANK_CCODE:
            return {
                ...state,
                customer_details: {
                    ...state.customer_details,
                    bank_countrycode: {
                        value: action.value
                    }
                }
            };
        case customers.ADD_BANK_CURRENCY:
            return {
                ...state,
                customer_details: {
                    ...state.customer_details,
                    bank_currency: {
                        value: action.value
                    }
                }
            };
        case customers.OPEN_CREATE_CUSTOMER:
            return {
                ...state,
                open: action.open
            };
        case customers.CLOSE_CREATE_CUSTOMER:
            return {
                ...state,
                open: action.open,
                customer_details: initialState.customer_details,
                actions: {
                    ...state.actions,
                    create_customer: {
                        ...state.actions.create_customer,
                        loading: action.loading
                    },
                    edit_customer: {
                        ...state.actions.edit_customer,
                        loading: action.loading,
                        id: action.id,
                        checked: action.checked
                    }
                }
            };
	case customers.OPEN_EDIT_CUSTOMER:
            let customer = state.customers.filter((t)=>{ return t.id === action.id })[0];
            return {
                ...state,
                open: action.open,
                actions: {
                    ...state.actions,
                    edit_customer: {
                        ...state.actions.edit_customer,
                        id: action.id
                    }
                },
		customer_details: {
			customer_name: {
			    value: customer.customer_name,
			    valid: true,
			    entered: true
			},
			debitor_number: {
			    value: customer.debitor_number,
			    valid: true,
			    entered: true
			},
			creation_date: {
			    value: customer.creation_date,
			    valid: true,
			    entered: true
			},
			edited_on: {
			    value: customer.edited_on,
			    valid: true,
			    entered: true
			},
			edited_by: {
			    value: customer.edited_by,
			    valid: true,
			    entered: true
			},
			salutation: {
			    value: customer.salutation,
			    valid: true,
			    entered: true
			},
			phone: {
			    value: customer.phone,
			    valid: true,
			    entered: true
			},
			email: {
			    value: customer.email,
			    valid: true,
			    entered: true
			},
			website: {
			    value: customer.website
			},
			address_city: {
			    value: customer.address_city
			},
			address: {
			    value: customer.address
			},
			address_postcode: {
			    value: customer.address_postcode
			},
			address_countrycode: {
			    value: customer.address_postcode
			},
			postbox_name: {
			    value: customer.postbox_name
			},
			postbox_postcode: {
			    value: customer.postbox_postcode
			},
			postbox_city: {
			    value: customer.postbox_city
			},
			postbox_countrycode: {
			    value: customer.postbox_countrycode
			},
			bank: {
			    value: customer.bank
			},
			bank_code: {
			    value: customer.bank_code
			},
			bank_account: {
			    value: customer.bank_account
			}, 
			bank_user: {
			    value: customer.bank_user
			},
			bank_iban: {
			    value: customer.bank_iban
			},
			bank_bic: {
			    value: customer.bank_bic
			},
			bank_countrycode: {
			    value: customer.bank_countrycode
			},
			bank_currency: {
			    value: customer.bank_currency
			}
		    }
		};
	case customers.EDIT_CUSTOMER:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    edit_customer: {
                        ...state.actions.edit_customer,
                        loading: action.loading
                    }
                }
            };
        case customers.EDIT_CUSTOMER_FAILED:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    edit_customer: {
                        ...state.actions.edit_customer,
                        loading: action.loading
                    }
                }
            };
        case customers.EDIT_CUSTOMER_SUCCESSFUL:
            return {
                ...state,
                customers: [action.customer, ...state.customers],
                open: action.open,
                customer_details: initialState.customer_details,
                actions: {
                    ...state.actions,
                    edit_customer: {
                        ...state.actions.edit_customer,
                        loading: action.loading,
                        id: null,
                        checked: false
                    }
                }
            };
        case customers.CHECK_PROMPT:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    edit_customer: {
                        ...state.actions.edit_customer,
                        checked: !state.actions.edit_customer.checked
                    }
                }
            };
	case customers.CREATE_CUSTOMER: 
            return {
                ...state,
                actions: {
                    ...state.actions,
                    create_customer: {
                        loading: action.loading
                    }
                }
            };
        case customers.CREATE_CUSTOMER_SUCCESSFUL:
            return {
                ...state,
                customers: [action.customer, ...state.customers],
                open: action.open,
                customer_details: initialState.customer_details,
                actions: {
                    ...state.actions,
                    create_customer: {
                        loading: action.loading
                    }
                }
            };
        case customers.CREATE_CUSTOMER_FAILED:
            return {
                ...state,
                actions: {
                    ...state.actions,
                    create_customer: {
                        loading: action.loading
                    }
                }
            };
        default:
            return state;
    };
};

export default customersReducer; 
