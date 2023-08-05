import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setUserData, responseIsFetching } from '../../redux/auth-reducer';
import { usersAPI } from '../../api/api';

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.responseIsFetching(true);
    usersAPI.getUserData().then(data => {
      if (data.resultCode === 0) {
        this.props.responseIsFetching(false);
        const { id, email, login } = data.data;
        this.props.setUserData(id, email, login);
      }
    });
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

export default connect(mapStateToProps, { setUserData, responseIsFetching })(HeaderContainer);
