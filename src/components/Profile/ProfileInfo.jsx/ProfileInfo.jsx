import React from 'react';
import st from './ProfileInfo.module.css';
import wallpaperImg from '../../../images/profile_wallpaper.jpg';
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = props => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div className={st.profileInfo}>
      <div className={st.image}>
        <img src={wallpaperImg} alt="" />
      </div>
      <div className={st.profile}>
        <div className={st.ava}>
          <img src={props.profile.photos.large} alt="" />
        </div>
        <div className={st.description}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero architecto neque tempora doloribus ut, maiores ipsum sint fugit
          sapiente quisquam nulla similique voluptatem!
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
