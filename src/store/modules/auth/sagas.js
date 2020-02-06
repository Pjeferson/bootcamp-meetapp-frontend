import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';
import { signInSuccess, signUpSuccess, signFailure } from './actions';
import history from '~/services/history';

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

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;
    yield call(api.post, '/users', {
      name,
      email,
      password,
    });

    yield put(signUpSuccess());
    history.push('/');
  } catch (error) {
    yield put(signFailure());
  }
}

export default all([
  takeLatest('SIGN_IN_REQUEST', signIn),
  takeLatest('SIGN_UP_REQUEST', signUp),
]);
