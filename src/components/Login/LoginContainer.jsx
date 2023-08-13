import { connect } from 'react-redux';
import { login } from '../../redux/reducers/auth-reducer';
import Login from './Login';

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  errorMessage: state.auth.errorMessage,
});

export default connect(mapStateToProps, { login })(Login);
