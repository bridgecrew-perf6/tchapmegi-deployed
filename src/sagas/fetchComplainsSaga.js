import { call, put, takeLatest, select } from 'redux-saga/effects';
import axios from 'axios';
import { getToken } from '../lib/api';
import { getAPIRoot } from '../config';
import { complains } from '../constants';
import {
    getComplainsSuccessful,
    getComplainsFailed
} from '../actions/complains';

export function* fetchComplainsSaga() {
    try {
        const headers = yield call(getToken);
        const API_ROOT = yield call(getAPIRoot, 'complains', 'v1');
        const response = yield call(axios.get, `${API_ROOT}/complains`, { headers: headers });
        if(response.data.status === 'fail') {
            yield put(getComplainsFailed(response.data.data));
        } else {
            yield put(getComplainsSuccessful(response.data.data.complains));
        }
    } catch(error) {
        yield put(getComplainsFailed({message: 'Failed while sending request'}));
    }
};

export function* watchFetchComplainsSaga() {
    yield takeLatest(complains.GET_COMPLAINS, fetchComplainsSaga);
};
