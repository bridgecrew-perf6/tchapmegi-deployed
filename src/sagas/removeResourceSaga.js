import { call, put, takeLatest, select } from 'redux-saga/effects';
import axios from 'axios';
import { getToken } from '../lib/api';
import { getAPIRoot } from '../config';
import { resources } from '../constants';
import {
    deleteResourceSuccessful,
    removeResource,
    deleteResourceFailed
} from '../actions/resources';
import {
    addError
} from '../actions/error';

export function* removeResourceSaga(action) {
    try {
        const { id } = action;
        const headers = yield call(getToken);
        const API_ROOT = yield call(getAPIRoot, 'resources', 'v1');
        const response = yield call(axios.get, `${API_ROOT}/remove/${id}`, { headers: headers }); 
        if(response.data.status === 'fail') {
            yield put(deleteResourceFailed());
            yield put(addError(response.data.data));
        } else {
            yield put(removeResource(id));
            yield put(deleteResourceSuccessful());
        }
    } catch(error) {
        console.log(error);
        yield put(deleteResourceFailed());
        yield put(addError({message: 'Failed while sending request'}));
    }
};

export function* watchRemoveResourceSaga() {
    yield takeLatest(resources.DELETE_RESOURCE, removeResourceSaga);
}; 
