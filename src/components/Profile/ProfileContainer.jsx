import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getUserStatus, updateUserStatus, updatePhoto, updateProfileData } from '../../redux/reducers/profile-reducer';
import { withRouter } from '../../hoc/withRouter';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  refreshUserProfile() {
    const { params, authorizedUserId, navigate, getUserProfile, getUserStatus } = this.props;
    let userId = params.userId;
    if (!userId) {
      userId = authorizedUserId;
      if (!userId) {
        navigate('/login/');
      }
    }
    getUserProfile(userId);
    getUserStatus(userId);
  }

  componentDidMount() {
    this.refreshUserProfile();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.params.userId !== prevProps.params.userId) {
      this.refreshUserProfile();
    }
  }

  render() {
    return <Profile {...this.props} isOwner={!this.props.params.userId} />;
  }
}

const mapStateToProps = state => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.id,
  isAuth: state.auth.isAuth,
  errorMessage: state.profilePage.errorMessage,
  
});

export default compose(
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus, updatePhoto, updateProfileData }),
  withRouter
)(ProfileContainer);
