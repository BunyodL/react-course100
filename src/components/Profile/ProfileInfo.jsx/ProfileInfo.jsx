import React from 'react';
import st from './ProfileInfo.module.css';
import wallpaperImg from '../../../images/profile_wallpaper.jpg';
import Preloader from '../../common/Preloader/Preloader';
import defaultProfileImage from '../../../images/default-photo.png';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import CheckIcon from '../../../images/icons/doneIcon.svg';
import CloseIcon from '../../../images/icons/closeIcon.svg';

const ProfileInfo = ({ profile, status, updateUserStatus, isOwner, updatePhoto }) => {
  if (!profile) {
    return <Preloader />;
  }

  const onPhotoSelected = e => {
    if (e.target.files.length) {
      updatePhoto(e.target.files[0]);
    }
  };

  return (
    <div className={st.profileInfo}>
      <div className={st.image}>
        <img src={wallpaperImg} alt='' />
      </div>

      <div className={st.profile}>
        <div className={st.ava}>
          <img src={profile.photos.large || defaultProfileImage} alt='' />
          {isOwner && <input type='file' onChange={onPhotoSelected} />}
        </div>

        <div className={st.description}>
          <h2>{profile.fullName}</h2>
          <div>{profile.aboutMe}</div>
          <div className={st.lookingForAJob}>
            <div>Looking for a job:</div> {profile.lookingForAJob ? <img src={CheckIcon} alt='' /> : <img src={CloseIcon} alt='' />}
          </div>
        </div>
      </div>
      <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus} />
    </div>
  );
};

export default ProfileInfo;
