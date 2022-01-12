import { call, put, takeLatest, select } from 'redux-saga/effects';
import axios from 'axios';
import { getToken } from '../lib/api';
import { getAPIRoot } from '../config';
import { projects } from '../constants';
import {
    getProjectsSuccessful,
    getProjectsFailed
} from '../actions/projects';

export function* fetchProjectsSaga() {
    try {
        const headers = yield call(getToken);
        const API_ROOT = yield call(getAPIRoot, 'projects', 'v1');
        const response = yield call(axios.get, `${API_ROOT}/projects`, { headers: headers });
        if(response.data.status === 'fail') {
            yield put(getProjectsFailed(response.data.data));
        } else {
            yield put(getProjectsSuccessful(response.data.data.projects));
        }
    } catch(error) {
        yield put(getProjectsFailed({message: 'Failed while sending request'}));
    }
};

export function* watchFetchProjectsSaga() {
    yield takeLatest(projects.GET_PROJECTS, fetchProjectsSaga);
};
