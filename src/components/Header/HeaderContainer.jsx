import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { getUserAccountData } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getUserAccountData();
  }
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = state => ({
  login: state.auth.login,
  isAuth: state.auth.isAuth,
  isFetching: state.auth.isFetching,
});

export default connect(mapStateToProps, { getUserAccountData })(HeaderContainer);
