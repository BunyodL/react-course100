import React, { ChangeEvent, FC } from 'react';
import { ProfileType } from "types/types";
import defaultProfileImage from '../../../../images/default-photo.png';
import st from '../ProfileInfo.module.css';

type Props = {
  profile: ProfileType
  isOwner: boolean
  updatePhoto: (file: any) => void
}

const ProfilePhoto: FC<Props> = ({ profile, isOwner, updatePhoto }) => {
  const onPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    const files = (e.target).files;
    if (!files) {
      return
    } else {
      updatePhoto(files[0]);
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
