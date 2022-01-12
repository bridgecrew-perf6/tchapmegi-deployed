import { call, put, takeLatest, select } from 'redux-saga/effects';
import axios from 'axios';
import { getToken } from '../lib/api';
import { getAPIRoot } from '../config';
import { employees } from '../constants';
import {
    getEmployeesSuccessful,
    getEmployeesFailed
} from '../actions/employees';

export function* fetchEmployeesSaga() {
    try {
        const headers = yield call(getToken);
        const API_ROOT = yield call(getAPIRoot, 'employees', 'v1');
        const response = yield call(axios.get, `${API_ROOT}/employees`, { headers: headers });
        if(response.data.status === 'fail') {
            yield put(getEmployeesFailed(response.data.data));
        } else {
            yield put(getEmployeesSuccessful(response.data.data.employees));
        }
    } catch(error) {
        yield put(getEmployeesFailed({message: 'Failed while sending request'}));
    }
};

export function* watchFetchEmployeesSaga() {
    yield takeLatest(employees.GET_EMPLOYEES, fetchEmployeesSaga);
};
