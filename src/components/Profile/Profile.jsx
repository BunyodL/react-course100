import React from 'react';
import st from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo.jsx/ProfileInfo';

const Profile = props => {
  return (
    <div className={st.content}>
      <ProfileInfo />
      <MyPosts post={props.profilePage.postData} dispatch={props.dispatch} newPostText={props.profilePage.newPostText} />
    </div>
  );
};

export default Profile;
