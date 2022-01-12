import { call, put, takeLatest, select } from 'redux-saga/effects';
import axios from 'axios';
import { getToken } from '../lib/api';
import { getAPIRoot } from '../config';
import { tasks } from '../constants';
import {
    deleteTaskSuccessful,
    removeTask,
    deleteTaskFailed
} from '../actions/tasks';
import {
    addError
} from '../actions/error';

export function* removeTaskSaga(action) {
    try {
        const { id } = action;
        const headers = yield call(getToken);
        const API_ROOT = yield call(getAPIRoot, 'tasks', 'v1');
        const response = yield call(axios.get, `${API_ROOT}/remove/${id}`, { headers: headers }); 
        if(response.data.status === 'fail') {
            yield put(deleteTaskFailed());
            yield put(addError(response.data.data));
        } else {
            yield put(removeTask(id));
            yield put(deleteTaskSuccessful());
        }
    } catch(error) {
        console.log(error);
        yield put(deleteTaskFailed());
        yield put(addError({message: 'Failed while sending request'}));
    }
};

export function* watchRemoveTaskSaga() {
    yield takeLatest(tasks.DELETE_TASK, removeTaskSaga);
}; 
