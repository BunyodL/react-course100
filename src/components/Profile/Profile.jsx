import React from 'react';
import st from './Profile.module.css';
import ProfileInfo from './ProfileInfo.jsx/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = ({ profile, status, updateUserStatus, isOwner, updatePhoto, updateProfileData, errorMessage }) => {
  return (
    <div className={st.content}>
      <ProfileInfo
        profile={profile}
        status={status}
        updateUserStatus={updateUserStatus}
        isOwner={isOwner}
        updatePhoto={updatePhoto}
        updateProfileData={updateProfileData}
        errorMessage={errorMessage}
      
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
