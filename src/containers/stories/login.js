import React from 'react';
import Login from '../Login/login';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('Login', module)
  .add('blank', () => (
    <Login
      onLogin={action('login')}
      loading={false}
      error={null}
    />
  ))
  .add('error', () => (
    <Login
      onLogin={action('login')}
      loading={false}
      error="Alarma, Alarma, Alarma!"
    />
  ))
  .add('loading', () => (
    <Login
      onLogin={action('login')}
      loading={true}
      error={null}
    />
  ));
