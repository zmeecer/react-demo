import {
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from '../actions/session';

const initialState = {
  user: null,
  error: null,
  loading: false,
};

export function session(state = initialState, action) {
  switch (action.type) {
    case LOGIN_PENDING: {
      return {
        ...state,
        user: null,
        error: null,
        loading: true,
      };
    }

    case LOGIN_SUCCESS: {
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    }

    case LOGIN_FAIL: {
      return {
        ...state,
        error: action.payload.message,
        loading: false,
      };
    }

    case LOGOUT: {
      return {
        ...state,
        user: null,
      };
    }

    default:
      return state;
  }
}
