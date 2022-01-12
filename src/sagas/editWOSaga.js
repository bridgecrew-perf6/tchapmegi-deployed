import { call, put, takeLatest, select } from 'redux-saga/effects';
import axios from 'axios';
import { getToken } from '../lib/api';
import { getWODetails, getWOID } from '../selectors/wo';
import { getAPIRoot } from '../config';
import { wo } from '../constants';
import {
    editWOSuccessful,
    removeWO,
    editWOFailed
} from '../actions/wo';
import {
    addError
} from '../actions/error';

export function* editWOSaga() {
    try {
        const wo_id = yield select(getWOID);
        const wo_details = yield select(getWODetails);

        const payload = {
            payload: {
                ...wo_details
            }
        }; 
        const headers = yield call(getToken);
        const API_ROOT = yield call(getAPIRoot, 'wo', 'v1');
        const response = yield call(axios.post, `${API_ROOT}/edit-wo/${wo_id}`, {...payload.payload}, { headers: headers });
        if(response.data.status === 'fail') {
            yield put(editWOFailed());
            yield put(addError(response.data.data));
        } else {
            yield put(removeWO(wo_id));
            yield put(editWOSuccessful(response.data.data.wo));
        }
    } catch(error) {
        yield put(editWOFailed());
        yield put(addError({message: 'Failed while sending request'}));
    }
};

export function* watchEditWOSaga() {
    yield takeLatest(wo.EDIT_WO, editWOSaga);
};
        
