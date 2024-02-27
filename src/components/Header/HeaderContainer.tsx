import { RootState } from "redux/redux-store";
import Header from './Header.tsx';
import { connect } from 'react-redux';
import { logout } from '../../redux/reducers/auth-reducer.ts';

export type HeaderPropsType = {
  login: string | null
  isAuth: boolean
  logout: () => Promise<void>
}

const mapStateToProps = (state: RootState) => ({
  login: state.auth.login,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { logout })(Header);
