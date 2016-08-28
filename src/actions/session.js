import Axios from 'axios';

export const LOGIN_PENDING = 'LOGIN_PENDING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT = 'LOGOUT';

export const isLoading = (state) => {
  const { loading } = state.session;
  return loading;
};

export const logout = () => ({
  type: LOGOUT,
});

export const loginPending = () => ({
  type: LOGIN_PENDING,
});

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginFail = (payload) => ({
  type: LOGIN_FAIL,
  payload,
});

export const login = (credentials) => (
  (dispatch, getState) => {
    if (!isLoading(getState())) {
      dispatch(loginPending());

      Axios.get(
        `https://jsonplaceholder.typicode.com/users`,
        credentials,
      )
        .then(response => {
          debugger;
          dispatch(loginSuccess({
            ...response.data.pop(),
          }))
        })
        .catch(error =>
          dispatch(loginFail(error))
        );
    }
    return null;
  }
);
