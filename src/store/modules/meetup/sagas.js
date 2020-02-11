import { takeLatest, call, put, all } from 'redux-saga/effects';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';

import { loadMeetupsSuccess, loadMeetupsFailure } from './actions';

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

export default all([takeLatest('@meetup/LOAD_MEETUPS_REQUEST', loadMeetups)]);
