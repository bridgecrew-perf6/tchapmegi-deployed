import { call, put, takeLatest, select } from 'redux-saga/effects';
import axios from 'axios';
import { getToken } from '../lib/api';
import { getAPIRoot } from '../config';
import { customers } from '../constants';
import {
    getCustomersSuccessful,
    getCustomersFailed
} from '../actions/customers';

export function* fetchCustomersSaga() {
    try {
        const headers = yield call(getToken);
        const API_ROOT = yield call(getAPIRoot, 'customers', 'v1');
        const response = yield call(axios.get, `${API_ROOT}/customers`, { headers: headers });
        if(response.data.status === 'fail') {
            yield put(getCustomersFailed(response.data.data));
        } else {
            yield put(getCustomersSuccessful(response.data.data.customers));
        }
    } catch(error) {
        yield put(getCustomersFailed({message: 'Failed while sending request'}));
    }
};

export function* watchFetchCustomersSaga() {
    yield takeLatest(customers.GET_CUSTOMERS, fetchCustomersSaga);
};
