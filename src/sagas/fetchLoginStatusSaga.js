import { call, put, takeLatest, select } from 'redux-saga/effects';
import axios from 'axios';
import { getToken } from '../lib/api';
import { getAPIRoot } from '../config';
import { login_status } from '../constants';
import {
    getLoginStatusSuccessful,
    getLoginStatusFailed
} from '../actions/login_status';

export function* fetchLoginStatusSaga() {
    try {
        const headers = yield call(getToken);
        const API_ROOT = yield call(getAPIRoot, 'login_status', 'v1');
        const response = yield call(axios.get, `${API_ROOT}/login_status`, { headers: headers });
        if(response.data.status === 'fail') {
            yield put(getLoginStatusFailed(response.data.data));
        } else {
            yield put(getLoginStatusSuccessful(response.data.data.lstatus));
        }
    } catch(error) {
        console.log(error);
        yield put(getLoginStatusFailed({message: 'Failed while sending request'}));
    }
};

export function* watchFetchLoginStatusSaga() {
    yield takeLatest(login_status.GET_LOGIN_STATUS, fetchLoginStatusSaga);
};
