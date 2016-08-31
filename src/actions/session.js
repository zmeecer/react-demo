// @ flow
import Axios from 'axios';
import { browserHistory } from 'react-router';

export const LOGIN_PENDING: string = 'LOGIN_PENDING';
export const LOGIN_SUCCESS: string = 'LOGIN_SUCCESS';
export const LOGIN_FAIL: string = 'LOGIN_FAIL';
export const LOGOUT: string = 'LOGOUT';

export const isLoading = (state) => {
  const { loading } = state.session;
  return loading;
};

export const logout = () => ({
  type: LOGOUT,
});

export const loginPending = (payload: Object) => ({
  type: LOGIN_PENDING,
  payload,
});

export const loginSuccess = (payload: Object) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginFail = (payload: Object) => ({
  type: LOGIN_FAIL,
  payload,
});

export const login = (credentials: Object) => (
  (dispatch: Function, getState: Function) => {
    if (!isLoading(getState())) {
      dispatch(loginPending());

      Axios.get(
        `https://jsonplaceholder.typicode.com/users`,
        credentials,
      )
        .then(response => {
          dispatch(loginSuccess({
            ...response.data.pop(),
          }));
          browserHistory.push('dashboard');
        })
        .catch(error =>
          dispatch(loginFail(error))
        );
    }
    return null;
  }
);
