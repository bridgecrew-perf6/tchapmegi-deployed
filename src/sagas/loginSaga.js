import { call, put, takeLatest, select } from 'redux-saga/effects';
import axios from 'axios';
import { login } from '../constants';
import { getLoginCredentials } from '../selectors/login';
import { getAPIRoot } from '../config';
import { storeToken, reloadApp } from '../lib/api';
import {
    loginRequestSuccessful,
    loginRequestFailed
} from '../actions/login';
import {
    addError
} from '../actions/error';

export function* loginSaga() {
    try {
        const { username, password } = yield select(getLoginCredentials);
        const payload = {
            payload: {
                username,
                password
            }
        }; 
        const API_ROOT = yield call(getAPIRoot, 'user', 'v1');
        const response = yield call(axios.post, `${API_ROOT}/login`, { ...payload.payload });
        if(response.data.status === "fail") {
            yield put(loginRequestFailed());
            yield put(addError(response.data.data))
        } else {
            yield put(loginRequestSuccessful());
            yield call(storeToken, response.data.data.token);
            yield call(reloadApp);
        }
    } catch(error) {
        yield put(loginRequestFailed());
        yield put(addError({message:'Failed while sending request'}));
    }
};

export function* watchLoginSaga() {
    yield takeLatest(login.LOGIN, loginSaga);
};

    
