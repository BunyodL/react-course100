import React from 'react';
import st from './Profile.module.css';
import ProfileInfo from './ProfileInfo.jsx/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = props => {
  
  return (
    <div className={st.content}>
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
