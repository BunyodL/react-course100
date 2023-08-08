import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getUserStatus, updateUserStatus } from '../../redux/profile-reducer';
import { useParams } from 'react-router-dom';
import { compose } from 'redux';

const withRouter = WrappedComponent => props => {
  const params = useParams();

  // etc... other react-router-dom v6 hooks
  return (
    <WrappedComponent
      {...props}
      params={params}
      //etc
    />
  );
};

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.params.userId;
    if (!userId) {
      userId = '2';
    }
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }
  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = state => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
});

export default compose(connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }), withRouter)(ProfileContainer);
