import React from "react";
import st from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div className={st.profileInfo}>
      <div className={st.image}>
        <img src="https://images.wallpaperscraft.ru/image/single/skala_obryv_derevia_945494_3840x2160.jpg" alt="" />
      </div>
      <div className={st.profile}>
        <div className={st.ava}>
        <img src="https://imgv3.fotor.com/images/slider-image/A-clear-image-of-a-woman-wearing-red-sharpened-by-Fotors-image-sharpener.jpg" alt="" />
        </div>
        <div className={st.description}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero architecto neque tempora doloribus ut, maiores ipsum sint fugit sapiente quisquam nulla similique voluptatem!
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
