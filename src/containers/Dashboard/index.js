import { connect } from 'react-redux';
import Dashboard from './dashboard.jsx';

const mapStateToProps = (state) => ({
  session: state.session,
});

export default connect(mapStateToProps)(Dashboard);
