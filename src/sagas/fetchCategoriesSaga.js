import { call, put, takeLatest, select } from 'redux-saga/effects';
import axios from 'axios';
import { getToken } from '../lib/api';
import { getAPIRoot } from '../config';
import { complains } from '../constants';
import {
    getCategoriesSuccessful,
    getCategoriesFailed
} from '../actions/complains';

export function* fetchCategoriesSaga() {
    try {
        const headers = yield call(getToken);
        const API_ROOT = yield call(getAPIRoot, 'complains', 'v1');
        const response = yield call(axios.get, `${API_ROOT}/categories`, { headers: headers });
        if(response.data.status === 'fail') {
            yield put(getCategoriesFailed(response.data.data));
        } else {
            yield put(getCategoriesSuccessful(response.data.data.categories));
        }
    } catch(error) {
        yield put(getCategoriesFailed({message: 'Failed while sending request'}));
    }
};

export function* watchFetchCategoriesSaga() {
    yield takeLatest(complains.GET_CATEGORIES, fetchCategoriesSaga);
};
