import { call, put, takeLatest, select } from 'redux-saga/effects';
import axios from 'axios';
import { getToken } from '../lib/api';
import { getComplain } from '../selectors/complains';
import { getAPIRoot } from '../config';
import { complains } from '../constants';
import {
    removeComplain,
    changeStatusSuccessful,
    changeStatusFailed
} from '../actions/complains';
import {
    addError
} from '../actions/error';

export function* changeStatusSaga() {
    try {
        let complain = yield select(getComplain);
        const payload = {
            payload: {
                ...complain
            }
        }; 
        const headers = yield call(getToken);
        const API_ROOT = yield call(getAPIRoot, 'complains', 'v1');
        const response = yield call(axios.post, `${API_ROOT}/change-status`, {...payload.payload}, { headers: headers });
        if(response.data.status === 'fail') {
            yield put(changeStatusFailed());
            yield put(addError(response.data.data));
        } else {
            yield put(removeComplain(complain.id));
            yield put(changeStatusSuccessful(response.data.data.complain));
        }
    } catch(error) {
        yield put(changeStatusFailed());
        yield put(addError({message: 'Failed while sending request'}));
    }
};

export function* watchChangeStatusSaga() {
    yield takeLatest(complains.CHANGE_STATUS, changeStatusSaga);
};
