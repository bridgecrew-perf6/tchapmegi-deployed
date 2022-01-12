import { call, put, takeLatest, select } from 'redux-saga/effects';
import axios from 'axios';
import { getToken } from '../lib/api';
import { getAPIRoot } from '../config';
import { employees } from '../constants';
import {
    deleteEmployeeSuccessful,
    removeEmployee,
    deleteEmployeeFailed
} from '../actions/employees';
import {
    addError
} from '../actions/error';

export function* removeEmployeeSaga(action) {
    try {
        const { id } = action;
        const headers = yield call(getToken);
        const API_ROOT = yield call(getAPIRoot, 'employees', 'v1');
        const response = yield call(axios.get, `${API_ROOT}/remove/${id}`, { headers: headers }); 
        if(response.data.status === 'fail') {
            yield put(deleteEmployeeFailed());
            yield put(addError(response.data.data));
        } else {
            yield put(removeEmployee(id));
            yield put(deleteEmployeeSuccessful());
        }
    } catch(error) {
        console.log(error);
        yield put(deleteEmployeeFailed());
        yield put(addError({message: 'Failed while sending request'}));
    }
};

export function* watchRemoveEmployeeSaga() {
    yield takeLatest(employees.DELETE_EMPLOYEE, removeEmployeeSaga);
}; 
