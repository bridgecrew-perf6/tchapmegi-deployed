import { call, put, takeLatest, select } from 'redux-saga/effects';
import axios from 'axios';
import { getToken } from '../lib/api';
import { getAPIRoot } from '../config';
import { tasks } from '../constants';
import {
    getTasksSuccessful,
    getTasksFailed
} from '../actions/tasks';

export function* fetchTasksSaga() {
    try {
        const headers = yield call(getToken);
        const API_ROOT = yield call(getAPIRoot, 'tasks', 'v1');
        const response = yield call(axios.get, `${API_ROOT}/tasks`, { headers: headers });
        if(response.data.status === 'fail') {
            yield put(getTasksFailed(response.data.data));
        } else {
            yield put(getTasksSuccessful(response.data.data.tasks));
        }
    } catch(error) {
        yield put(getTasksFailed({message: 'Failed while sending request'}));
    }
};

export function* watchFetchTasksSaga() {
    yield takeLatest(tasks.GET_TASKS, fetchTasksSaga);
};
        
