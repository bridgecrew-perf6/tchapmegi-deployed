import { call, put, takeLatest, select } from 'redux-saga/effects';
import axios from 'axios';
import { getToken } from '../lib/api';
import { getTask } from '../selectors/tasks';
import { getAPIRoot } from '../config';
import { tasks } from '../constants';
import {
    createTaskSuccessful,
    createTaskFailed
} from '../actions/tasks';
import {
    addError
} from '../actions/error';

export function* createTaskSaga() {
    try {
        const { task, name, description } = yield select(getTask);
        const payload = {
            payload: {
                task,
                name,
                description
            }
        }; 
        const headers = yield call(getToken);
        const API_ROOT = yield call(getAPIRoot, 'tasks', 'v1');
        const response = yield call(axios.post, `${API_ROOT}/create-task`, {...payload.payload}, { headers: headers });
        if(response.data.status === 'fail') {
            yield put(createTaskFailed());
            yield put(addError(response.data.data));
        } else {
            yield put(createTaskSuccessful(response.data.data.task));
        }
    } catch(error) {
        yield put(createTaskFailed());
        yield put(addError({message: 'Failed while sending request'}));
    }
};

export function* watchCreateTaskSaga() {
    yield takeLatest(tasks.CREATE_TASK, createTaskSaga);
};
        
