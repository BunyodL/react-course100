import { connect } from 'react-redux';
import { RootState } from "redux/redux-store";
import { login } from '../../redux/reducers/auth-reducer.ts';
import Login from './Login.tsx';

type MapStateToProps = {
  isAuth: boolean
  errorMessage: string
  captchaUrl: string | null
}

type MapDispatchPropsType = {
  login: (email: string | null, password: string | null, rememberMe: boolean, captcha: string | null) => void
}

type OwnProps = {}

export type LoginProps = MapStateToProps & MapDispatchPropsType & OwnProps

const mapStateToProps = (state: RootState): MapStateToProps => ({
  isAuth: state.auth.isAuth,
  errorMessage: state.auth.errorMessage,
  captchaUrl: state.auth.captchaUrl,
});

export default connect<MapStateToProps, MapDispatchPropsType, OwnProps, RootState>(mapStateToProps, { login })(Login);
