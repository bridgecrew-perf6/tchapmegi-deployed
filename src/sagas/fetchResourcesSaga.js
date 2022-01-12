import { call, put, takeLatest, select } from 'redux-saga/effects';
import axios from 'axios';
import { getToken } from '../lib/api';
import { getAPIRoot } from '../config';
import { resources } from '../constants';
import {
    getResourcesSuccessful,
    getResourcesFailed
} from '../actions/resources';

export function* fetchResourcesSaga() {
    try {
        const headers = yield call(getToken);
        const API_ROOT = yield call(getAPIRoot, 'resources', 'v1');
        const response = yield call(axios.get, `${API_ROOT}/resources`, { headers: headers });
        if(response.data.status === 'fail') {
            yield put(getResourcesFailed(response.data.data));
        } else {
            yield put(getResourcesSuccessful(response.data.data.resources));
        }
    } catch(error) {
        yield put(getResourcesFailed({message: 'Failed while sending request'}));
    }
};

export function* watchFetchResourcesSaga() {
    yield takeLatest(resources.GET_RESOURCES, fetchResourcesSaga);
};
        
