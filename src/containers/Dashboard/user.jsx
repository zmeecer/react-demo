import React from 'react';

const User = ({ user }) => (
  <dl>
    <dt>User Id</dt>
    <dd><b>{user.id}</b></dd>
    <br />
    <dt>User Name</dt>
    <dd><b>{user.name}</b></dd>
  </dl>
);

User.propTypes = {
  user: React.PropTypes.shape({
    id: React.PropTypes.number,
  }).isRequired,
}

export default User;
