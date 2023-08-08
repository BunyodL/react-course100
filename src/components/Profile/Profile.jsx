import React from 'react';
import st from './Profile.module.css';
import ProfileInfo from './ProfileInfo.jsx/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = props => {
  return (
    <div className={st.content}>
      <ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus} />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
