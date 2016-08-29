import { applyMiddleware, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from '../reducers';

import createSagaMiddleware from 'redux-saga';
import { loginSaga } from '../middleware/sagas/login';
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  compose(
    applyMiddleware(
      thunkMiddleware,
      sagaMiddleware,
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

sagaMiddleware.run(loginSaga);

export default store;
