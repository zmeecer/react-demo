import React from 'react';
import User from './user.jsx';

const Dashboard = ({ session }) => (
  !session.user
    ? <h2>Empty Dashboard</h2>
    : <User user={session.user} />
);

Dashboard.propTypes = {
  session: React.PropTypes.object,
}

export default Dashboard;
