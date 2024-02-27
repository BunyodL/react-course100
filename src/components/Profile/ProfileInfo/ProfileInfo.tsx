import { ProfileInfoType } from "components/Profile/Profile";
import React, { FC, useState } from 'react';
import { ProfileType } from "types/types";
import st from './ProfileInfo.module.css';
import wallpaperImg from '../../../images/profile_wallpaper.jpg';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import ProfileDescription from './ProfileData/ProfileDescription.tsx';
import ProfileDescriptionForm from './ProfileData/ProfileDescriptionForm.tsx';
import ProfilePhoto from './ProfileData/ProfilePhoto.tsx';

const ProfileInfo: FC<ProfileInfoType> = ({ profile, status, updateUserStatus, isOwner, updatePhoto, updateProfileData, errorMessage }) => {
  const [editMode, setEditMode] = useState<boolean>(false);

  if (!profile) {
    return <Preloader />;
  }

  const onSubmit = (profileData: ProfileType) => {
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
