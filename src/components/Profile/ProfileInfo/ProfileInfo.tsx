import { FC, useState } from 'react';
import { ProfileType } from '@/@types/types.ts';
import wallpaperImg from '@/assets/images/profile_wallpaper.jpg';
import { Preloader } from '@/components/common/preloader';
import { ProfileDescription } from './profileData/profileDescription';
import { ProfileDescriptionForm } from './profileData/profileDescriptionForm';
import { ProfilePhoto } from './profileData/profilePhoto';
import st from './ProfileInfo.module.css';
import { ProfileStatusWithHooks } from './profileStatus';

type Props = {
    profile: ProfileType | null;
    status: string;
    updateUserStatus: (status: string) => void;
    isOwner: boolean;
    updatePhoto: (file: File) => void;
    updateProfileData: (profileData: ProfileType) => void;
    errorMessage: string;
};

const ProfileInfo: FC<Props> = ({
    profile,
    status,
    updateUserStatus,
    isOwner,
    updatePhoto,
    updateProfileData,
    errorMessage,
}) => {
    const [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader />;
    }

    const onSubmit = (profileData: ProfileType) => {
        setEditMode(false);
        updateProfileData(profileData);
    };

    return (
        <div className={st.profileInfo}>
            <div className={st.image}>
                <img
                    src={wallpaperImg}
                    alt=""
                />
            </div>

            <div className={st.profile}>
                <ProfilePhoto
                    profile={profile}
                    isOwner={isOwner}
                    updatePhoto={updatePhoto}
                />
                {errorMessage && <div className={st.errorMessage}>{errorMessage}</div>}
                {editMode ? (
                    <ProfileDescriptionForm
                        profile={profile}
                        onSubmit={onSubmit}
                    />
                ) : (
                    <ProfileDescription
                        profile={profile}
                        isOwner={isOwner}
                        setEditMode={setEditMode}
                    />
                )}
            </div>
            <ProfileStatusWithHooks
                status={status}
                updateUserStatus={updateUserStatus}
            />
        </div>
    );
};

export default ProfileInfo;
