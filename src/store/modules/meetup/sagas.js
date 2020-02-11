import { takeLatest, call, put, all } from 'redux-saga/effects';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';
import history from '~/services/history';

import {
  loadMeetupsSuccess,
  loadMeetupsFailure,
  createMeetupSuccess,
  createMeetupFailure,
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
  } catch (error) {
    yield put(createMeetupFailure());
  }
}

export default all([
  takeLatest('@meetup/LOAD_MEETUPS_REQUEST', loadMeetups),
  takeLatest('@meetup/CREATE_MEETUP_REQUEST', createMeetup),
]);
