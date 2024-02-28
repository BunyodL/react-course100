import React, { ComponentType } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { RootState } from "redux/redux-store";
import { ProfileType } from "types/types";
import { withRouter } from '../../hoc/withRouter';
import {
  getUserProfile,
  getUserStatus,
  updatePhoto,
  updateProfileData,
  updateUserStatus
} from '../../redux/reducers/profile-reducer.ts';
import Profile from "./Profile.tsx";

type MapStateToProps = {
  authorizedUserId: number | null
  profile: ProfileType | null
  status: string
  errorMessage: string
  isAuth: boolean
}

type MapDispatchToProps = {
  getUserProfile: (id: number | null) => void
  getUserStatus: (id: number | null) => void
  updateUserStatus: (status: string) => void
  updatePhoto: (file: any) => void
  updateProfileData: (profileData: ProfileType) => void
}

type OwnProps = {
  params: { userId: number | null}
  navigate: (path: string) => void
}

type Props = MapStateToProps & MapDispatchToProps & OwnProps
type State = { refreshUserProfile: () => void }

class ProfileContainer extends React.Component<Props, State> {
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

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (this.props.params.userId !== prevProps.params.userId) {
      this.refreshUserProfile();
    }
  }

  render() {
    return <Profile updatePhoto={this.props.updatePhoto}
                    updateProfileData={this.props.updateProfileData}
                    updateUserStatus={this.props.updateUserStatus}
                    profile={this.props.profile}
                    status={this.props.status}
                    isOwner={!this.props.params.userId}
                    errorMessage={this.props.errorMessage} />;
  }
}


const mapStateToProps = (state: RootState): MapStateToProps => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.id,
  isAuth: state.auth.isAuth,
  errorMessage: state.profilePage.errorMessage,
});

export default compose(
  connect<MapStateToProps, MapDispatchToProps, OwnProps, RootState>(mapStateToProps, {
    getUserProfile,
    getUserStatus,
    updateUserStatus,
    updatePhoto,
    updateProfileData
  }),
  withRouter,
)(ProfileContainer) as ComponentType;
