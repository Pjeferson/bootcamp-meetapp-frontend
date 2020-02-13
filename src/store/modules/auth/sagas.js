import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import { signInSuccess, signUpSuccess, signFailure } from './actions';
import history from '~/services/history';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(api.post, '/sessions', { email, password });
    const { user, token } = response.data;
    yield put(signInSuccess(user, token));
    api.defaults.headers.Authorization = `Bearer ${token}`;
  } catch (error) {
    yield put(signFailure());
    toast.error('Falha no login. Verifique seus dados.');
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
    toast.error('Falha no cadastro. Verifique seus dados.');
  }
}

export function signOut() {
  history.push('/');
}

function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;
  api.defaults.headers.Authorization = `Bearer ${token}`;
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
