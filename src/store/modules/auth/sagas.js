import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';
import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(api.post, '/sessions', { email, password });
    const { user, token } = response.data;
    yield put(signInSuccess(user, token));
  } catch (error) {
    yield put(signFailure());
  }
}

export default all([takeLatest('SIGN_IN_REQUEST', signIn)]);
