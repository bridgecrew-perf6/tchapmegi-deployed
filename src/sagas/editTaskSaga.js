import { call, put, takeLatest, select } from 'redux-saga/effects';
import axios from 'axios';
import { getToken } from '../lib/api';
import { getEditTaskId, getTask } from '../selectors/tasks';
import { getAPIRoot } from '../config';
import { tasks } from '../constants';
import {
    editTaskSuccessful,
    removeTask,
    editTaskFailed
} from '../actions/tasks';
import {
    addError
} from '../actions/error';

export function* editTaskSaga() {
    try {
        const { task, name, description } = yield select(getTask);
        const task_id = yield select(getEditTaskId);
        const payload = {
            payload: {
                task,
                name,
                description
            }
        }; 
        const headers = yield call(getToken);
        const API_ROOT = yield call(getAPIRoot, 'tasks', 'v1');
        const response = yield call(axios.post, `${API_ROOT}/edit-task/${task_id}`, {...payload.payload}, { headers: headers });
        if(response.data.status === 'fail') {
            yield put(editTaskFailed());
            yield put(addError(response.data.data));
        } else {
            yield put(removeTask(task_id));
            yield put(editTaskSuccessful(response.data.data.task));
        }
    } catch(error) {
        yield put(editTaskFailed());
        yield put(addError({message: 'Failed while sending request'}));
    }
};

export function* watchEditTaskSaga() {
    yield takeLatest(tasks.EDIT_TASK, editTaskSaga);
};
