import { call, put, takeLatest, select } from 'redux-saga/effects';
import axios from 'axios';
import { complains } from '../constants';
import { getComplainsDesc } from '../selectors/complains';
import {
    getSentimentSuccessful,
    getSentimentFailed
} from '../actions/complains';

export function* fetchSentimentSaga() {
    try {
        //const complain_combined = yield select(getComplainsDesc);
        const API_ROOT = 'http://text-processing.com/api/sentiment/';
        const response = yield call(axios.post, `${API_ROOT}`, { text: 'Good' });
        console.log(response);
    } catch(error) {
        console.log(error);
        yield put(getSentimentFailed({message: 'Failed while sending request'}));
    }
};

export function* watchFetchSentimentSaga() {
    yield takeLatest(complains.GET_SENTIMENT, fetchSentimentSaga);
};
