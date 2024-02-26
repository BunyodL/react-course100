import Header from './Header';
import { connect } from 'react-redux';
import { logout } from '../../redux/reducers/auth-reducer.ts';

const mapStateToProps = state => ({
  login: state.auth.login,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { logout })(Header);
