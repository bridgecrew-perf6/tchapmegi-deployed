import { call, put, takeLatest, select } from 'redux-saga/effects';
import axios from 'axios';
import { getToken } from '../lib/api';
import { getCustomer } from '../selectors/customers';
import { getAPIRoot } from '../config';
import { customers } from '../constants';
import {
    createCustomerSuccessful,
    createCustomerFailed
} from '../actions/customers';
import {
    addError
} from '../actions/error';

export function* createCustomerSaga() {
    try {
        const {
            customer_name,
            debitor_number,
            creation_date,
            edited_on,
            edited_by,
            salutation,
            phone,
            email,
            website,
            address_city,
            address,
            address_postcode,
            address_countrycode,
            postbox_name,
            postbox_postcode,
            postbox_city,
            postbox_countrycode,
            bank,
            bank_code,
            bank_account,
            bank_user,
            bank_iban,
            bank_bic,
            bank_countrycode,
            bank_currency
        } = yield select(getCustomer);

        const payload = {
            payload: {
		    customer_name,
		    debitor_number,
		    creation_date,
		    edited_on,
		    edited_by,
		    salutation,
		    phone,
		    email,
		    website,
		    address_city,
		    address,
		    address_postcode,
		    address_countrycode,
		    postbox_name,
		    postbox_postcode,
		    postbox_city,
		    postbox_countrycode,
		    bank,
		    bank_code,
		    bank_account,
		    bank_user,
		    bank_iban,
		    bank_bic,
		    bank_countrycode,
		    bank_currency
		}
        }; 
        const headers = yield call(getToken);
        const API_ROOT = yield call(getAPIRoot, 'customers', 'v1');
        const response = yield call(axios.post, `${API_ROOT}/create-customer`, {...payload.payload}, { headers: headers });
        if(response.data.status === 'fail') {
            yield put(createCustomerFailed());
            yield put(addError(response.data.data));
        } else {
            yield put(createCustomerSuccessful(response.data.data.customer));
        }
    } catch(error) {
        yield put(createCustomerFailed());
        yield put(addError({message: 'Failed while sending request'}));
    }
};

export function* watchCreateCustomerSaga() {
    yield takeLatest(customers.CREATE_CUSTOMER, createCustomerSaga);
};
