import { call, put, takeLatest, select } from 'redux-saga/effects';
import axios from 'axios';
import { getToken } from '../lib/api';
import { getAPIRoot } from '../config';
import { employees } from '../constants';
import {
    authEmployeeSuccessful,
    authEmployeeFailed
} from '../actions/employees';

export function* fetchEmployeeAuthSaga() {
    try {
        const headers = yield call(getToken);
        const API_ROOT = yield call(getAPIRoot, 'employees', 'v1');
        const response = yield call(axios.get, `${API_ROOT}/auth`, { headers: headers });
        if(response.data.status === 'fail') {
            yield put(authEmployeeFailed(response.data.data));
        } else {
            yield put(authEmployeeSuccessful(response.data.data.auth));
        }
    } catch(error) {
        yield put(authEmployeeFailed({message: 'Failed while sending request'}));
    }
};

export function* watchFetchEmployeeAuthSaga() {
    yield takeLatest(employees.AUTH_EMPLOYEE, fetchEmployeeAuthSaga);
};
