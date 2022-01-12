import { customers } from '../constants';
import isDate from 'date-fns/isDate';
import isEmail from 'validator/lib/isEmail';

export const getCustomers = () => {
    return {
        type: customers.GET_CUSTOMERS,
        loading: true,
        error: null
    };
};

export const getCustomersSuccessful = customer_list => {
    return {
        type: customers.GET_CUSTOMERS_SUCCESSFUL,
        customer_list,
        loading: false,
        error: null
    };
};

export const getCustomersFailed = error => {
    return {
        type: customers.GET_CUSTOMERS_FAILED,
        loading: false,
        error
    };
};

export const removeCustomer = id => {
    return {
        type: customers.REMOVE_CUSTOMER,
        id
    };
};

export const deleteCustomer = id => {
    return {
        type: customers.DELETE_CUSTOMER,
        loading: true,
        id
    };
};

export const deleteCustomerSuccessful = () => {
    return {
        type: customers.DELETE_CUSTOMER_SUCCESSFUL,
        loading: false,
        id: null
    };
};

export const deleteCustomerFailed = () => {
    return {
        type: customers.DELETE_CUSTOMER_FAILED,
        loading: false,
        id: null
    };
};

export const viewCustomer = customer_id => {
    return {
        type: customers.VIEW_CUSTOMER,
        customer_id,
        open: true
    };
};

export const closeViewCustomer = () => {
    return {
        type: customers.CLOSE_VIEW_CUSTOMER,
        open: false
    };
};

export const addCName = cname => {
    return {
        type: customers.ADD_CNAME,
        value: cname,
        valid: (cname.length > 0),
        entered: true
    };
};

export const addDNum = dnum => {
    return {
        type: customers.ADD_DNUM,
        value: Number(dnum),
        valid: Number.isInteger(Number(dnum)),
        entered: true
    };
};

export const addCreationDate = cdate => {
    return {
        type: customers.ADD_CREATION_DATE,
        value: cdate,
        valid: isDate(new Date(cdate)),
        entered: true
    };
};

export const addEditedOn = edate => {
    return {
        type: customers.ADD_EDITED_ON,
        value: edate,
        valid: isDate(new Date(edate)),
        entered: true
    };
};

export const addEditedBy = eby => {
    return {
        type: customers.ADD_EDITED_BY,
        value: eby,
        valid: (eby.length > 0),
        entered: true
    };
};

export const addSalutation = sal => {
    return {
        type: customers.ADD_SALUTATION,
        value: sal,
        valid: (sal.length > 0),
        entered: true
    };
};

export const addPhone = phone => {
    return {
        type: customers.ADD_PHONE,
        value: phone,
        valid: (phone.length > 0),
        entered: true
    };
};

export const addEmail = email => {
    return {
        type: customers.ADD_EMAIL,
        value: email,
        valid: isEmail(email),
        entered: true
    };
};

export const addWebsite =  web => {
    return {
        type: customers.ADD_WEBSITE,
        value: web
    };
};

export const addAddrCity = acity => {
    return {
        type: customers.ADD_ADDR_CITY,
        value: acity
    };
};

export const addAddr = addr => {
    return {
        type: customers.ADD_ADDR,
        value: addr
    };
};

export const addAddrPCode = addrpcode => {
    return {
        type: customers.ADD_ADDR_POSTCODE,
        value: addrpcode
    };
};

export const addAddrCcode = addrccode => {
    return {
        type: customers.ADD_ADDR_CCODE,
        value: addrccode
    };
};

export const addPBoxName = pname => {
    return {
        type: customers.ADD_POSTBOX_NAME,
        value: pname
    };
};

export const addPBoxPCode = pcode => {
    return {
        type: customers.ADD_POSTBOX_POSTCODE,
        value: pcode
    };
};

export const addPBoxCity = pcity => {
    return {
        type: customers.ADD_POSTBOX_CITY,
        value: pcity
    };
};

export const addPBoxCCode = pccode => {
    return {
        type: customers.ADD_POSTBOX_CCODE,
        value: pccode
    };
};

export const addBank = bank => {
    return {
        type: customers.ADD_BANK,
        value: bank
    };
};

export const addBankCode = bcode => {
    return {
        type: customers.ADD_BANK_CODE,
        value: bcode
    };
};

export const addBankAccount = bacc => {
    return {
        type: customers.ADD_BANK_ACCOUNT,
        value: bacc
    };
};

export const addBankUser = buser => {
    return {
        type: customers.ADD_BANK_USER,
        value: buser
    };
};

export const addBankIBAN = biban => {
    return {
        type: customers.ADD_BANK_IBAN,
        value: biban
    };
};

export const addBankBIC = bic => {
    return {
        type: customers.ADD_BANK_BIC,
        value: bic
    };
};

export const addBankCCode = bcode => {
    return {
        type: customers.ADD_BANK_CCODE,
        value: bcode
    };
};

export const addBankCurrency =  bcur => {
    return {
        type: customers.ADD_BANK_CURRENCY,
        value: bcur
    };
};

export const openCreateCustomer = () => {
    return {
        type: customers.OPEN_CREATE_CUSTOMER,
        open: true,
    }
};

export const closeCreateCustomer = () => {
    return {
        type: customers.CLOSE_CREATE_CUSTOMER,
        open: false,
        loading: false,
        checked: false,
        id: null
    };
};

export const openEditCustomer = id => {
    return {
        type: customers.OPEN_EDIT_CUSTOMER,
        open: true,
        id
    };
};

export const checkPrompt = () => {
    return {
        type: customers.CHECK_PROMPT
    };
};

export const createCustomer = () => {
    return {
        type: customers.CREATE_CUSTOMER,
        loading: true
    };
};

export const createCustomerSuccessful = customer => {
    return {
        type: customers.CREATE_CUSTOMER_SUCCESSFUL,
        customer,
        loading: false,
        open: false
    };
};

export const createCustomerFailed = () => {
    return {
        type: customers.CREATE_CUSTOMER_FAILED,
        loading: false
    };
};

export const editCustomer = ()  => {
    return {
        type: customers.EDIT_CUSTOMER,
        loading: true
    };
};

export const editCustomerSuccessful = customer => {
    return {
        type: customers.EDIT_CUSTOMER_SUCCESSFUL,
        customer,
        loading: false,
        open: false
    };
};

export const editCustomerFailed = () => {
    return {
        type: customers.EDIT_CUSTOMER_FAILED,
        loading: false
    };
};
