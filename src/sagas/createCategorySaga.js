import { call, put, takeLatest, select } from 'redux-saga/effects';
import axios from 'axios';
import { getToken } from '../lib/api';
import { getCat } from '../selectors/complains';
import { getAPIRoot } from '../config';
import { complains } from '../constants';
import {
    createCatSuccessful,
    createCatFailed
} from '../actions/complains';
import {
    addError
} from '../actions/error';

export function* createCatSaga() {
    try {
        let category = yield select(getCat);
        const payload = {
            payload: {
                category
            }
        }; 
        const headers = yield call(getToken);
        const API_ROOT = yield call(getAPIRoot, 'complains', 'v1');
        const response = yield call(axios.post, `${API_ROOT}/create-category`, {...payload.payload}, { headers: headers });
        if(response.data.status === 'fail') {
            yield put(createCatFailed());
            yield put(addError(response.data.data));
        } else {
            yield put(createCatSuccessful(response.data.data.category));
        }
    } catch(error) {
        yield put(createCatFailed());
        yield put(addError({message: 'Failed while sending request'}));
    }
};

export function* watchCreateCatSaga() {
    yield takeLatest(complains.CREATE_CAT, createCatSaga);
};
