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
