import { call, put, takeLatest, select } from 'redux-saga/effects';
import axios from 'axios';
import { getToken } from '../lib/api';
import { getAPIRoot } from '../config';
import { customers } from '../constants';
import {
    deleteCustomerSuccessful,
    removeCustomer,
    deleteCustomerFailed
} from '../actions/customers';
import {
    addError
} from '../actions/error';

export function* removeCustomerSaga(action) {
    try {
        const { id } = action;
        const headers = yield call(getToken);
        const API_ROOT = yield call(getAPIRoot, 'customers', 'v1');
        const response = yield call(axios.get, `${API_ROOT}/remove/${id}`, { headers: headers }); 
        if(response.data.status === 'fail') {
            yield put(deleteCustomerFailed());
            yield put(addError(response.data.data));
        } else {
            yield put(removeCustomer(id));
            yield put(deleteCustomerSuccessful());
        }
    } catch(error) {
        console.log(error);
        yield put(deleteCustomerFailed());
        yield put(addError({message: 'Failed while sending request'}));
    }
};

export function* watchRemoveCustomerSaga() {
    yield takeLatest(customers.DELETE_CUSTOMER, removeCustomerSaga);
}; 
