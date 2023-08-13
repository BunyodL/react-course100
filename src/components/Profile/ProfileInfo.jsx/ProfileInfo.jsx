import React from 'react';
import st from './ProfileInfo.module.css';
import wallpaperImg from '../../../images/profile_wallpaper.jpg';
import Preloader from '../../common/Preloader/Preloader';
import defaultProfileImage from '../../../images/default-photo.png';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = props => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div className={st.profileInfo}>
      <div className={st.image}>
        <img src={wallpaperImg} alt='' />
      </div>
      <div className={st.profile}>
        <div className={st.ava}>
          <img src={props.profile.photos.large ? props.profile.photos.large : defaultProfileImage} alt='' />
        </div>
        <div className={st.description}>
          <div>
            <h2>{props.profile.fullName}</h2>
          </div>
          {props.profile.aboutMe}
        </div>
      </div>
      <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus} />
    </div>
  );
};

export default ProfileInfo;
