import React, { useState } from 'react';
import st from './ProfileInfo.module.css';
import wallpaperImg from '../../../images/profile_wallpaper.jpg';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import ProfileDescription from './ProfileData/ProfileDescription';
import ProfileDescriptionForm from './ProfileData/ProfileDescriptionForm';
import ProfilePhoto from './ProfileData/ProfilePhoto';

const ProfileInfo = ({ profile, status, updateUserStatus, isOwner, updatePhoto, updateProfileData, errorMessage }) => {
  const [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />;
  }

  const onSubmit = profileData => {
    updateProfileData(profileData).then(() => {
      setEditMode(false);
    });
  };

  return (
    <div className={st.profileInfo}>
      <div className={st.image}>
        <img src={wallpaperImg} alt='' />
      </div>

      <div className={st.profile}>
        <ProfilePhoto profile={profile} isOwner={isOwner} updatePhoto={updatePhoto} />
        {errorMessage && <div className={st.errorMessage}>{errorMessage}</div>}
        {editMode ? (
          <ProfileDescriptionForm profile={profile} onSubmit={onSubmit} />
        ) : (
          <ProfileDescription profile={profile} isOwner={isOwner} setEditMode={setEditMode} />
        )}
      </div>
      <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus} />
    </div>
  );
};

export default ProfileInfo;
