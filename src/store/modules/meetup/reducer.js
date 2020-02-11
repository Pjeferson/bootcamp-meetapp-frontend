import produce from 'immer';

const INITAL_STATE = {
  meetups: [],
};

export default function user(state = INITAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@meetup/LOAD_MEETUPS_SUCCESS':
        draft.meetups = action.payload.meetups;
        break;

      default:
        break;
    }
  });
}
