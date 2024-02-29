import { connect } from 'react-redux';
import { RootState } from "redux/redux-store";
import { logout } from '../../redux/reducers/auth-reducer.ts';
import Header from './Header.tsx';

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
