import React, {ComponentType } from 'react';
import { RootState } from "redux/redux-store";
import { ProfileType } from "types/types";
import Profile from './Profile.tsx';
import { connect } from 'react-redux';
import {
  getUserProfile,
  getUserStatus,
  updateUserStatus,
  updatePhoto,
  updateProfileData
} from '../../redux/reducers/profile-reducer.ts';
import { withRouter } from '../../hoc/withRouter';
import { compose } from 'redux';

export type ProfileContainerPropsType = {
  params: { userId: number }
  authorizedUserId: number
  navigate: (path: string) => void
  getUserProfile: (id: number) => void
  getUserStatus: (id: number) => void
  profile: ProfileType
  status: string
  updateUserStatus: () => void
  isOwner: boolean
  updatePhoto: () => void
  updateProfileData: (profileData: ProfileType) => Promise<void>
  errorMessage: string;
}

class ProfileContainer extends React.Component<ProfileContainerPropsType, {}> {
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

  componentDidUpdate(prevProps: ProfileContainerPropsType, prevState: any) {
    if (this.props.params.userId !== prevProps.params.userId) {
      this.refreshUserProfile();
    }
  }

  render() {
    return <Profile {...this.props} isOwner={!this.props.params.userId} />;
  }
}

const mapStateToProps = (state: RootState) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.id,
  isAuth: state.auth.isAuth,
  errorMessage: state.profilePage.errorMessage,
});

export default compose(
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus, updatePhoto, updateProfileData }),
  withRouter
)(ProfileContainer) as ComponentType;
