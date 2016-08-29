import Axios from 'axios';
import { browserHistory } from 'react-router';
import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { LOGIN_PENDING, LOGIN_SUCCESS, LOGIN_FAIL} from '../../actions/session';

export function* fetchSession(action) {
  try {
    const session = yield Axios.get(
      "https://jsonplaceholder.typicode.com/users",
      action.payload
    );
    yield put({ type: LOGIN_SUCCESS, payload: session.data.pop() });
    yield call(browserHistory.push, 'dashboard');
  } catch (e) {
    console.log(e);
    yield put({ type: LOGIN_FAIL, message: e.message });
  }
}

export function* loginSaga() {
  yield* takeEvery(LOGIN_PENDING, fetchSession)
}
