import { connect } from 'react-redux';
import { login } from '../../redux/reducers/auth-reducer.ts';
import Login from './Login';

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  errorMessage: state.auth.errorMessage,
  captchaUrl: state.auth.captchaUrl,
});

export default connect(mapStateToProps, { login })(Login);
