import { FC } from 'react';
import { ProfileType } from '../../@types/types.ts';
import MyPostsContainer from './myPosts/MyPostsContainer.tsx';
import st from './Profile.module.css';
import { ProfileInfo } from './profileInfo/index.ts';

type Props = {
    profile: ProfileType | null;
    status: string;
    updateUserStatus: (status: string) => void;
    updatePhoto: (file: File) => void;
    updateProfileData: (profileData: ProfileType) => void;
    isOwner: boolean;
    errorMessage: string;
};

const Profile: FC<Props> = ({
    profile,
    status,
    updateUserStatus,
    isOwner,
    updatePhoto,
    updateProfileData,
    errorMessage,
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
