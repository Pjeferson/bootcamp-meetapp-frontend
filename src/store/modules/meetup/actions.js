export function loadMeetupsRequest() {
  return {
    type: '@meetup/LOAD_MEETUPS_REQUEST',
  };
}

export function loadMeetupsSuccess(meetups) {
  return {
    type: '@meetup/LOAD_MEETUPS_SUCCESS',
    payload: { meetups },
  };
}

export function loadMeetupsFailure() {
  return {
    type: '@meetup/LOAD_MEETUPS_FAILURE',
  };
}

export function createMeetupRequest(data) {
  return {
    type: '@meetup/CREATE_MEETUP_REQUEST',
    payload: { data },
  };
}

export function createMeetupSuccess(meetup) {
  return {
    type: '@meetup/CREATE_MEETUP_SUCCESS',
    payload: { meetup },
  };
}

export function createMeetupFailure() {
  return {
    type: '@meetup/CREATE_MEETUP_FAILURE',
  };
}

export function editMeetupRequest(id, data) {
  return {
    type: '@meetup/EDIT_MEETUP_REQUEST',
    payload: { id, data },
  };
}

export function editMeetupSuccess(meetup) {
  return {
    type: '@meetup/EDIT_MEETUP_SUCCESS',
    payload: { meetup },
  };
}

export function editMeetupFailure() {
  return {
    type: '@meetup/EDIT_MEETUP_FAILURE',
  };
}
