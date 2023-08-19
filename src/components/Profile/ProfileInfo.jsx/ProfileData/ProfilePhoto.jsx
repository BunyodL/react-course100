import React from 'react';
import defaultProfileImage from '../../../../images/default-photo.png';
import st from '../ProfileInfo.module.css';

const ProfilePhoto = ({ profile, isOwner, updatePhoto }) => {
  const onPhotoSelected = e => {
    if (e.target.files.length) {
      updatePhoto(e.target.files[0]);
    }
  };

  return (
    <div className={st.ava}>
      <img src={profile.photos.large || defaultProfileImage} alt='' />
      {isOwner && <input type='file' onChange={onPhotoSelected} />}
    </div>
  );
};

export default ProfilePhoto;
