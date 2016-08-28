import React from 'react';
import Login from './containers/Login';
import store from './store/configureStore';
import { Provider } from 'react-redux';

import './App.css';
import 'react-toolbox/lib/commons.scss';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Login />
    </div>
  </Provider>
);

export default App;
