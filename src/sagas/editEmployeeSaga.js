import { call, put, takeLatest, select } from 'redux-saga/effects';
import axios from 'axios';
import { getToken } from '../lib/api';
import { getEmployeeDetails, getEmployeeID } from '../selectors/employees';
import { getAPIRoot } from '../config';
import { employees } from '../constants';
import {
    removeEmp,
    editEmpSuccessful,
    editEmpFailed
} from '../actions/employees';
import {
    addError
} from '../actions/error';

export function* editEmployeeSaga() {
    try {
        const employee_data = yield select(getEmployeeDetails); 
        const emp_id = yield select(getEmployeeID); 
        const payload = {
            payload: {
                ...employee_data
	    }
        }; 
        const headers = yield call(getToken);
        const API_ROOT = yield call(getAPIRoot, 'employees', 'v1');
        const response = yield call(axios.post, `${API_ROOT}/edit-employee/${emp_id}`, {...payload.payload}, { headers: headers });
        if(response.data.status === 'fail') {
            yield put(editEmpFailed());
            yield put(addError(response.data.data));
        } else {
            yield put(removeEmp(emp_id));
            yield put(editEmpSuccessful(response.data.data.employee));
        }
    } catch(error) {
        yield put(editEmpFailed());
        yield put(addError({message: 'Failed while sending request'}));
    }
};

export function* watchEditEmployeeSaga() {
    yield takeLatest(employees.EDIT_EMP, editEmployeeSaga);
};
