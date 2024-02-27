import { connect } from 'react-redux';
import { RootState } from "redux/redux-store";
import { login } from '../../redux/reducers/auth-reducer.ts';
import Login from './Login.tsx';

export type LoginPropsType = {
  isAuth: boolean
  errorMessage: string
  captchaUrl: any
  login: (email: string | null, password: string | null, rememberMe: boolean, captcha: any) => (dispatch: any) => Promise<void>
}

const mapStateToProps = (state: RootState) => ({
  isAuth: state.auth.isAuth,
  errorMessage: state.auth.errorMessage,
  captchaUrl: state.auth.captchaUrl,
});

// @ts-ignore
export default connect(mapStateToProps, { login })(Login);
