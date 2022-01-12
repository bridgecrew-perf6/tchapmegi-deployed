import { call, put, takeLatest, select } from 'redux-saga/effects';
import axios from 'axios';
import { getToken } from '../lib/api';
import { getWODetails, getWOID } from '../selectors/wo';
import { getAPIRoot } from '../config';
import { wo } from '../constants';
import {
    createWOSuccessful,
    createWOFailed
} from '../actions/wo';
import {
    addError
} from '../actions/error';

export function* createWOSaga() {
    try {
        const wo_details = yield select(getWODetails);

        const payload = {
            payload: {
                ...wo_details
            }
        }; 
        const headers = yield call(getToken);
        const API_ROOT = yield call(getAPIRoot, 'wo', 'v1');
        const response = yield call(axios.post, `${API_ROOT}/create-wo`, {...payload.payload}, { headers: headers });
        if(response.data.status === 'fail') {
            yield put(createWOFailed());
            yield put(addError(response.data.data));
        } else {
            yield put(createWOSuccessful(response.data.data.wo));
        }
    } catch(error) {
        yield put(createWOFailed());
        yield put(addError({message: 'Failed while sending request'}));
    }
};

export function* watchCreateWOSaga() {
    yield takeLatest(wo.CREATE_WO, createWOSaga);
};
        
