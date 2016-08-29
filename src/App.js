import React from 'react';
import Login from './containers/Login';
import Dashboard from './containers/Dashboard';
import store from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';

import './App.css';
import 'react-toolbox/lib/commons.scss';

const App = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/'>
        <IndexRedirect to='login' />
        <Route path='login' component={Login} />
        <Route path='dashboard' component={Dashboard} />
      </Route>
    </Router>
  </Provider>
);

export default App;
