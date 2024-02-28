import { RootState } from "redux/redux-store";
import Header from './Header.tsx';
import { connect } from 'react-redux';
import { logout } from '../../redux/reducers/auth-reducer.ts';

type MapStateToProps = {
  login: string | null
  isAuth: boolean
}

type MapDispatchToProps = {
  logout: () => void
}

export type HeaderPropsType = MapStateToProps & MapDispatchToProps;

const mapStateToProps = (state: RootState): MapStateToProps => ({
  login: state.auth.login,
  isAuth: state.auth.isAuth,
});

export default connect<MapStateToProps, MapDispatchToProps, {}, RootState>(mapStateToProps, { logout })(Header);
