import { call, put, takeLatest, select } from 'redux-saga/effects';
import axios from 'axios';
import { getToken } from '../lib/api';
import { getAPIRoot } from '../config';
import { complains } from '../constants';
import {
    deleteComplainSuccessful,
    removeComplain,
    deleteComplainFailed
} from '../actions/complains';
import {
    addError
} from '../actions/error';

export function* removeComplainSaga(action) {
    try {
        const { id } = action;
        const headers = yield call(getToken);
        const API_ROOT = yield call(getAPIRoot, 'complains', 'v1');
        const response = yield call(axios.get, `${API_ROOT}/remove/${id}`, { headers: headers }); 
        if(response.data.status === 'fail') {
            yield put(deleteComplainFailed());
            yield put(addError(response.data.data));
        } else {
            yield put(removeComplain(id));
            yield put(deleteComplainSuccessful());
        }
    } catch(error) {
        console.log(error);
        yield put(deleteComplainFailed());
        yield put(addError({message: 'Failed while sending request'}));
    }
};

export function* watchRemoveComplainSaga() {
    yield takeLatest(complains.DELETE_COMPLAIN, removeComplainSaga);
}; 
