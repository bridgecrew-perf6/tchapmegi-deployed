import { call, put, takeLatest, select } from 'redux-saga/effects';
import axios from 'axios';
import { getToken } from '../lib/api';
import { getResource } from '../selectors/resources';
import { getAPIRoot } from '../config';
import { resources } from '../constants';
import {
    createResourceSuccessful,
    createResourceFailed
} from '../actions/resources';
import {
    addError
} from '../actions/error';

export function* createResourceSaga() {
    try {
        const { 
            rnr,
            resource_name,
            valid_from,
            valid_to,
            store,
            business_sector,
            long_name,
            group,
            article,
            address
        } = yield select(getResource);

        const payload = {
            payload: {
                rnr,
                resource_name,
                valid_from,
                valid_to,
                store,
                business_sector,
                long_name,
                group,
                article,
                address
            }
        }; 
        const headers = yield call(getToken);
        const API_ROOT = yield call(getAPIRoot, 'resources', 'v1');
        const response = yield call(axios.post, `${API_ROOT}/create-resource`, {...payload.payload}, { headers: headers });
        if(response.data.status === 'fail') {
            yield put(createResourceFailed());
            yield put(addError(response.data.data));
        } else {
            yield put(createResourceSuccessful(response.data.data.resource));
        }
    } catch(error) {
        yield put(createResourceFailed());
        yield put(addError({message: 'Failed while sending request'}));
    }
};

export function* watchCreateResourceSaga() {
    yield takeLatest(resources.CREATE_RESOURCE, createResourceSaga);
};
        
