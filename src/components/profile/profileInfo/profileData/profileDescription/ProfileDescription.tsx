import { FC } from 'react';
import { ContactType, ProfileType } from '../../../../../@types/types';
import CloseIcon from '../../../../../assets/icons/closeIcon.svg';
import CheckIcon from '../../../../../assets/icons/doneIcon.svg';
import st from './ProfileDescription.module.css';
import { Contact } from '../contact';

type Props = {
    profile: ProfileType;
    setEditMode: (editMode: boolean) => void;
    isOwner: boolean;
};

const ProfileDescription: FC<Props> = ({ profile, isOwner, setEditMode }) => {
    const turnOnEditMode = () => setEditMode(true);

    return (
        <div className={st.description}>
            <div className={st.info}>
                {isOwner && <button onClick={turnOnEditMode}>Edit</button>}
                <div>
                    <b>Full name:</b>
                    <h2>{profile.fullName}</h2>
                </div>

                <div className={st.lookingForAJob}>
                    <div>Looking for a job:</div>
                    {profile.lookingForAJob ? (
                        <img
                            src={CheckIcon}
                            alt=""
                        />
                    ) : (
                        <img
                            src={CloseIcon}
                            alt=""
                        />
                    )}
                </div>

                <div>
                    <div>My professional skills:</div>
                    {profile.lookingForAJobDescription}
                </div>

                <div>
                    <div>About me:</div>
                    {profile.aboutMe}
                </div>
            </div>
            <div className={st.contacts}>
                <div>Contacts:</div>
                {Object.keys(profile.contacts).map((key) => (
                    <Contact
                        key={key}
                        socialMediaName={key}
                        socialMediaLink={profile.contacts[key as keyof ContactType]}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProfileDescription;
