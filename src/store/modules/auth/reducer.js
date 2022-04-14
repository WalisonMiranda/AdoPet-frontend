import * as types from '../types';

const INITIAL_STATE = {
  isLoggedIn: false,
  token: false,
  user: {},
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS: {
      const newState = { ...state };
      newState.isLoggedIn = true;
      newState.token = action.payload.token;
      newState.user = action.payload.user;
      return newState;
    }

    case types.LOGIN_FAILURE: {
      const newState = { ...INITIAL_STATE };
      return newState;
    }

    case types.LOGIN_REQUEST: {
      return state;
    }

    case types.REGISTER_REQUEST: {
      return state;
    }

    case types.REGISTER_CREATED_SUCCESS: {
      const newState = { ...state };
      return newState;
    }

    case types.REGISTER_FAILURE: {
      const newState = { ...state };
      return newState;
    }

    default:
      return state;
  }
}
