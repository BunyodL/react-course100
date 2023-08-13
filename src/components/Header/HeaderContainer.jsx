import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { logout } from '../../redux/reducers/auth-reducer';

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = state => ({
  login: state.auth.login,
  isAuth: state.auth.isAuth,
  isFetching: state.auth.isFetching,
});

export default connect(mapStateToProps, { logout })(HeaderContainer);
