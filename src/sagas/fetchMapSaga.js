import { call, put, takeLatest, select } from 'redux-saga/effects';
import axios from 'axios';
import { getToken } from '../lib/api';
import { getAPIRoot } from '../config';
import { complains } from '../constants';
import {
    getMapSuccessful,
    getMapFailed
} from '../actions/complains';

export function* fetchMapSaga() {
    try {
        const headers = yield call(getToken);
        const API_ROOT = yield call(getAPIRoot, 'complains', 'v1');
        const response = yield call(axios.get, `${API_ROOT}/map`, { headers: headers });
        if(response.data.status === 'fail') {
            yield put(getMapFailed(response.data.data));
        } else {
            yield put(getMapSuccessful(response.data.data.complain_cities));
        }
    } catch(error) {
        yield put(getMapFailed({message: 'Failed while sending request'}));
    }
};

export function* watchFetchMapSaga() {
    yield takeLatest(complains.GET_COMPLAIN_MAP, fetchMapSaga);
};
