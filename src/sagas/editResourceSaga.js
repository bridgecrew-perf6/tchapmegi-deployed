import { call, put, takeLatest, select } from 'redux-saga/effects';
import axios from 'axios';
import { getToken } from '../lib/api';
import { getEditResourceId, getResource } from '../selectors/resources';
import { getAPIRoot } from '../config';
import { resources } from '../constants';
import {
    editResourceSuccessful,
    removeResource,
    editResourceFailed
} from '../actions/resources';
import {
    addError
} from '../actions/error';

export function* editResourceSaga() {
    try {
        const resource_id = yield select(getEditResourceId);
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
        const response = yield call(axios.post, `${API_ROOT}/edit-resource/${resource_id}`, {...payload.payload}, { headers: headers });
        if(response.data.status === 'fail') {
            yield put(editResourceFailed());
            yield put(addError(response.data.data));
        } else {
            yield put(removeResource(resource_id));
            yield put(editResourceSuccessful(response.data.data.resource));
        }
    } catch(error) {
        yield put(editResourceFailed());
        yield put(addError({message: 'Failed while sending request'}));
    }
};

export function* watchEditResourceSaga() {
    yield takeLatest(resources.EDIT_RESOURCE, editResourceSaga);
};
        
