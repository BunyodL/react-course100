import { ProfileContainerPropsType } from "components/Profile/ProfileContainer";
import React, { FC } from 'react';
import { ProfileType } from "types/types";
import st from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

export type ProfileInfoType = {
  profile: ProfileType
  status: string
  updateUserStatus: () => void
  isOwner: boolean
  updatePhoto: () => void
  updateProfileData: (profileData: ProfileType) => Promise<void>
  errorMessage: string
}

const Profile: FC<ProfileContainerPropsType> = ({
                                                  profile,
                                                  status,
                                                  updateUserStatus,
                                                  isOwner,
                                                  updatePhoto,
                                                  updateProfileData,
                                                  errorMessage
                                                }) => {
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
