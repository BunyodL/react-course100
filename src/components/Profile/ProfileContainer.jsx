import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/profile-reducer';
import { useParams } from 'react-router-dom';

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
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = state => ({
  profile: state.profilePage.profile,
});

let WithUrlDataProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, { getUserProfile })(WithUrlDataProfileContainer);
