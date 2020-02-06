export function signInRequest(email, password) {
  return {
    type: 'SIGN_IN_REQUEST',
    payload: {
      email,
      password,
    },
  };
}

export function signInSuccess(user, token) {
  return {
    type: 'SIGN_IN_SUCCESS',
    payload: {
      user,
      token,
    },
  };
}

export function signFailure() {
  return {
    type: 'SIGN_FAILURE',
  };
}
