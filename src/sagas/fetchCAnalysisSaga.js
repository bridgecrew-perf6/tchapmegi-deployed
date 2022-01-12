import { call, put, takeLatest, select } from 'redux-saga/effects';
import axios from 'axios';
import { getToken } from '../lib/api';
import { getAPIRoot } from '../config';
import { complains } from '../constants';
import {
    getCAnalysisSuccessful,
    getCAnalysisFailed
} from '../actions/complains';

const convertToMatrix = list => {
    let arr = []
    for(let comp of list) {
        arr.push([comp.name, comp.complains]);
    }
    return arr
}

export function* fetchCAnalysisSaga() {
    try {
        const headers = yield call(getToken);
        const API_ROOT = yield call(getAPIRoot, 'complains', 'v1');
        const response = yield call(axios.get, `${API_ROOT}/canalysis`, { headers: headers });
        if(response.data.status === 'fail') {
            yield put(getCAnalysisFailed(response.data.data));
        } else {
            let canalysis = yield call(convertToMatrix, response.data.data.canalysis);
            yield put(getCAnalysisSuccessful(canalysis));
        }
    } catch(error) {
        yield put(getCAnalysisFailed({message: 'Failed while sending request'}));
    }
};

export function* watchFetchCAnalysisSaga() {
    yield takeLatest(complains.GET_CANALYSIS, fetchCAnalysisSaga);
};
