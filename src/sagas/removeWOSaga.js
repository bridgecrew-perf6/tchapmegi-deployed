import { call, put, takeLatest, select } from 'redux-saga/effects';
import axios from 'axios';
import { getToken } from '../lib/api';
import { getAPIRoot } from '../config';
import { wo } from '../constants';
import {
    deleteWOSuccessful,
    removeWO,
    deleteWOFailed
} from '../actions/wo';
import {
    addError
} from '../actions/error';

export function* removeWOSaga(action) {
    try {
        const { id } = action;
        const headers = yield call(getToken);
        const API_ROOT = yield call(getAPIRoot, 'wo', 'v1');
        const response = yield call(axios.get, `${API_ROOT}/remove/${id}`, { headers: headers }); 
        if(response.data.status === 'fail') {
            yield put(deleteWOFailed());
            yield put(addError(response.data.data));
        } else {
            yield put(removeWO(id));
            yield put(deleteWOSuccessful());
        }
    } catch(error) {
        console.log(error);
        yield put(deleteWOFailed());
        yield put(addError({message: 'Failed while sending request'}));
    }
};

export function* watchRemoveWOSaga() {
    yield takeLatest(wo.DELETE_WO, removeWOSaga);
}; 
