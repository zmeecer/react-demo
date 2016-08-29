import React from 'react';

const User = ({ user }) => (
  <dl>
    <dt>User Id</dt>
    <dd>{user.id}</dd>
    <dt>User Name</dt>
    <dd>{user.name}</dd>
  </dl>
);

User.propTypes = {
  user: React.PropTypes.shape({
    id: React.PropTypes.string,
  }).isRequired,
}

export default User;
