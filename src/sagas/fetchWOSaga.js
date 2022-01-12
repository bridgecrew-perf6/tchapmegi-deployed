import { call, put, takeLatest, select } from 'redux-saga/effects';
import axios from 'axios';
import { getToken } from '../lib/api';
import { getAPIRoot } from '../config';
import { wo } from '../constants';
import {
    getWOSuccessful,
    getWOFailed
} from '../actions/wo';

export function* fetchWOSaga() {
    try {
        const headers = yield call(getToken);
        const API_ROOT = yield call(getAPIRoot, 'wo', 'v1');
        const response = yield call(axios.get, `${API_ROOT}/wo`, { headers: headers });
        if(response.data.status === 'fail') {
            yield put(getWOFailed(response.data.data));
        } else {
            yield put(getWOSuccessful(response.data.data.wo));
        }
    } catch(error) {
        yield put(getWOFailed({message: 'Failed while sending request'}));
    }
};

export function* watchFetchWOSaga() {
    yield takeLatest(wo.GET_WO, fetchWOSaga);
};
