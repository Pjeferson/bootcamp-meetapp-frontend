import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case 'SIGN_IN_REQUEST':
        draft.loading = true;
        break;

      case 'SIGN_IN_SUCCESS':
        draft.loading = false;
        draft.signed = true;
        draft.token = action.payload.token;
        break;

      case 'SIGN_UP_REQUEST':
        draft.loading = true;
        break;

      case 'SIGN_UP_SUCCESS':
        draft.loading = false;
        break;

      case 'SIGN_FAILURE':
        draft.loading = false;
        break;
      default:
        break;
    }
  });
}
