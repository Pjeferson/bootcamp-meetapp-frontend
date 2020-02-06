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

export function signUpRequest(name, email, password) {
  return {
    type: 'SIGN_UP_REQUEST',
    payload: {
      name,
      email,
      password,
    },
  };
}

export function signUpSuccess() {
  return {
    type: 'SIGN_UP_SUCCESS',
  };
}

export function signFailure() {
  return {
    type: 'SIGN_FAILURE',
  };
}
