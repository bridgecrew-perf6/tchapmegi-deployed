import { call, put, takeLatest, select } from 'redux-saga/effects';
import axios from 'axios';
import { getToken } from '../lib/api';
import { getAuthDetails } from '../selectors/employees';
import { getAPIRoot } from '../config';
import { employees } from '../constants';
import {
    authUpdateSuccessful,
    removeAuth,
    authUpdateFailed
} from '../actions/employees';
import {
    addError
} from '../actions/error';

export function* editEmployeeAuthSaga() {
    try {
        const auth_details = yield select(getAuthDetails);
        const payload = {
            payload: auth_details
        }; 
        const headers = yield call(getToken);
        const API_ROOT = yield call(getAPIRoot, 'employees', 'v1');
        const response = yield call(axios.post, `${API_ROOT}/edit-auth/${auth_details.emp_id}`, {...payload.payload}, { headers: headers });
        if(response.data.status === 'fail') {
            yield put(authUpdateFailed());
            yield put(addError(response.data.data));
        } else {
            yield put(removeAuth(auth_details.emp_id));
            yield put(authUpdateSuccessful(response.data.data.auth));
        }
    } catch(error) {
        yield put(authUpdateFailed());
        yield put(addError({message: 'Failed while sending request'}));
    }
};

export function* watchEditEmployeeAuthSaga() {
    yield takeLatest(employees.AUTH_UPDATE, editEmployeeAuthSaga);
};
