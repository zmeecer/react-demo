import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { login } from '../../actions/session';
import Login from './login.jsx';

const mapStateToProps = (state) => ({
  loading: state.session.loading,
  error: state.session.error,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    onLogin: login,
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Login);
