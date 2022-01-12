import { call, put, takeLatest, select } from 'redux-saga/effects';
import axios from 'axios';
import { getToken } from '../lib/api';
import { getProject } from '../selectors/projects';
import { getAPIRoot } from '../config';
import { projects } from '../constants';
import {
    createProjectSuccessful,
    createProjectFailed
} from '../actions/projects';
import {
    addError
} from '../actions/error';

export function* createProjectSaga() {
    try {
        const { 
            project_name,
            customer_name,
            contact_person,
            start_date,
            end_date,
            fax,
            phone,
            email,
            city,
            address
        } = yield select(getProject);

        const payload = {
            payload: {
                project_name,
                customer_name,
                contact_person,
                start_date,
                end_date,
                fax,
                phone,
                email,
                city,
                address
            }
        }; 
        const headers = yield call(getToken);
        const API_ROOT = yield call(getAPIRoot, 'projects', 'v1');
        const response = yield call(axios.post, `${API_ROOT}/create-project`, {...payload.payload}, { headers: headers });
        if(response.data.status === 'fail') {
            yield put(createProjectFailed());
            yield put(addError(response.data.data));
        } else {
            yield put(createProjectSuccessful(response.data.data.project));
        }
    } catch(error) {
        yield put(createProjectFailed());
        yield put(addError({message: 'Failed while sending request'}));
    }
};

export function* watchCreateProjectSaga() {
    yield takeLatest(projects.CREATE_PROJECT, createProjectSaga);
};
        
