import { createField } from 'components/common/formsControls/createField.tsx';
import { FC } from 'react';
import { Form } from 'react-final-form';
import { GetStringKeys, ProfileType } from '../../../../../@types/types.ts';
import { Input, TextArea } from '../../../../common/formsControls';
import st from './ProfileDescriptionForm.module.css';
import { ContactForm } from '../contactForm';

type Props = {
    profile: ProfileType;
    onSubmit: (profile: ProfileType) => void;
};

type ProfileTypeKeys = GetStringKeys<ProfileType>;

const ProfileDescriptionForm: FC<Props> = ({ profile, onSubmit }) => {
    return (
        <Form
            onSubmit={onSubmit}
            initialValues={profile}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <div className={st.description}>
                        <div className={st.info}>
                            <button>Save changes</button>
                            {createField<ProfileTypeKeys>(
                                'fullName',
                                'fullName',
                                Input,
                                'Full Name',
                                undefined,
                                { type: 'text' },
                                'Full Name',
                            )}
                            {createField<ProfileTypeKeys>(
                                'lookingForAJob',
                                'lookingForAJob',
                                Input,
                                '',
                                undefined,
                                { type: 'checkbox' },
                                'lookingForAJob',
                            )}
                            {createField<ProfileTypeKeys>(
                                'lookingForAJobDescription',
                                'lookingForAJobDescription',
                                TextArea,
                                'My professional skills',
                                undefined,
                                { type: 'text' },
                                'My professional skills',
                            )}
                            {createField<ProfileTypeKeys>(
                                'aboutMe',
                                'aboutMe',
                                TextArea,
                                'About me',
                                undefined,
                                { type: 'text' },
                                'About me',
                            )}
                        </div>
                        <div className={st.contacts}>
                            {Object.keys(profile.contacts).map((key) => (
                                <ContactForm
                                    key={key}
                                    contactName={key}
                                />
                            ))}
                        </div>
                    </div>
                </form>
            )}
        />
    );
};

export default ProfileDescriptionForm;
