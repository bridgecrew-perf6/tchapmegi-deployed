import { call, put, takeLatest, select } from 'redux-saga/effects';
import axios from 'axios';
import { getToken } from '../lib/api';
import { getAPIRoot } from '../config';
import { projects } from '../constants';
import {
    deleteProjectSuccessful,
    removeProject,
    deleteProjectFailed
} from '../actions/projects';
import {
    addError
} from '../actions/error';

export function* removeProjectSaga(action) {
    try {
        const { id } = action;
        const headers = yield call(getToken);
        const API_ROOT = yield call(getAPIRoot, 'projects', 'v1');
        const response = yield call(axios.get, `${API_ROOT}/remove/${id}`, { headers: headers }); 
        if(response.data.status === 'fail') {
            yield put(deleteProjectFailed());
            yield put(addError(response.data.data));
        } else {
            yield put(removeProject(id));
            yield put(deleteProjectSuccessful());
        }
    } catch(error) {
        console.log(error);
        yield put(deleteProjectFailed());
        yield put(addError({message: 'Failed while sending request'}));
    }
};

export function* watchRemoveProjectSaga() {
    yield takeLatest(projects.DELETE_PROJECT, removeProjectSaga);
}; 
