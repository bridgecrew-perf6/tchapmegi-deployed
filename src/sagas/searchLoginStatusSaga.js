import { call, put, takeLatest, select } from 'redux-saga/effects';
import axios from 'axios';
import { getToken } from '../lib/api';
import { getAPIRoot } from '../config';
import { login_status } from '../constants';
import {
    getLoginStatusSuccessful,
    getLoginStatusFailed
} from '../actions/login_status';

export function* searchLoginStatusSaga(action) {
    try {
        const { sdate } = action;
        const payload = {
            payload: {
                sdate
            }
        };
        const headers = yield call(getToken);
        const API_ROOT = yield call(getAPIRoot, 'login_status', 'v1');
        const response = yield call(axios.post, `${API_ROOT}/search`, {...payload.payload}, { headers: headers });
        if(response.data.status === 'fail') {
            yield put(getLoginStatusFailed(response.data.data));
        } else {
            yield put(getLoginStatusSuccessful(response.data.data.lstatus));
        }
    } catch(error) {
        yield put(getLoginStatusFailed({message: 'Failed while sending request'}));
    }
};

export function* watchSearchLoginStatusSaga() {
    yield takeLatest(login_status.GET_LOGIN_STATUS_DATE, searchLoginStatusSaga);
};
