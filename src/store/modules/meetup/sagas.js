import { takeLatest, call, put, all } from 'redux-saga/effects';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import {
  loadMeetupsSuccess,
  loadMeetupsFailure,
  createMeetupSuccess,
  createMeetupFailure,
  editMeetupSuccess,
  editMeetupFailure,
  cancelMeetupSuccess,
  cancelMeetupFailure,
} from './actions';

export function* loadMeetups() {
  try {
    const response = yield call(api.get, '/organizing');

    const data = response.data.map(meetup => ({
      ...meetup,
      dateFormatted: format(parseISO(meetup.date), "d 'de' MMMM', às' HH'h'", {
        locale: pt,
      }),
    }));

    yield put(loadMeetupsSuccess(data));
  } catch (error) {
    yield put(loadMeetupsFailure());
  }
}

export function* createMeetup({ payload }) {
  try {
    const { file_id, title, description, date, location } = payload.data;
    const response = yield call(api.post, '/meetups', {
      file_id,
      title,
      description,
      date,
      location,
    });

    yield put(createMeetupSuccess(response));
    history.push('/dashboard');
    toast.success('Meetup criado com sucesso!');
  } catch (error) {
    yield put(createMeetupFailure());
    toast.error('Falha na criação do Meetup. Verifique os dados do mesmo.');
  }
}

export function* editMeetup({ payload }) {
  try {
    const { file_id, title, description, date, location } = payload.data;

    const response = yield call(api.put, `/meetups/${payload.id}`, {
      file_id,
      title,
      description,
      date,
      location,
    });

    yield put(editMeetupSuccess(response));
    history.push('/dashboard');
    toast.success('Meetup salvo com sucesso!');
  } catch (error) {
    yield put(editMeetupFailure());
    toast.error('Falha ao editar Meetup. Verifique os dados do mesmo.');
  }
}

export function* cancelMeetup({ payload }) {
  try {
    const response = yield call(api.delete, `/meetups/${payload.id}`);

    yield put(cancelMeetupSuccess(response));
    history.push('/dashboard');
    toast.success('Meetup cancelado com sucesso!');
  } catch (error) {
    yield put(cancelMeetupFailure());
    toast.error('Você não pode cancelar este Meetup.');
  }
}

export default all([
  takeLatest('@meetup/LOAD_MEETUPS_REQUEST', loadMeetups),
  takeLatest('@meetup/CREATE_MEETUP_REQUEST', createMeetup),
  takeLatest('@meetup/EDIT_MEETUP_REQUEST', editMeetup),
  takeLatest('@meetup/CANCEL_MEETUP_REQUEST', cancelMeetup),
]);
