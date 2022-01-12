import { call, put, takeLatest, select } from 'redux-saga/effects';
import axios from 'axios';
import { getToken } from '../lib/api';
import { getEditProjectId, getProject } from '../selectors/projects';
import { getAPIRoot } from '../config';
import { projects } from '../constants';
import {
    editProjectSuccessful,
    removeProject,
    editProjectFailed
} from '../actions/projects';
import {
    addError
} from '../actions/error';

export function* editProjectSaga() {
    try {
        const project_id = yield select(getEditProjectId);
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
        const response = yield call(axios.post, `${API_ROOT}/edit-project/${project_id}`, {...payload.payload}, { headers: headers });
        if(response.data.status === 'fail') {
            yield put(editProjectFailed());
            yield put(addError(response.data.data));
        } else {
            yield put(removeProject(project_id));
            yield put(editProjectSuccessful(response.data.data.project));
        }
    } catch(error) {
        console.log(error);
        yield put(editProjectFailed());
        yield put(addError({message: 'Failed while sending request'}));
    }
};

export function* watchEditProjectSaga() {
    yield takeLatest(projects.EDIT_PROJECT, editProjectSaga);
};
