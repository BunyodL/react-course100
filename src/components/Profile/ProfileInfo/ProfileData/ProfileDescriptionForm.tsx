import { createField } from "components/common/FormsControls/createField";
import React, { FC } from 'react';
import { Form } from 'react-final-form';
import { ProfileType } from "types/types";
import { Input, TextArea } from '../../../common/FormsControls/FormControls.tsx';
import st from '../ProfileInfo.module.css';
import ContactForm from './ContactForm';

type Props = {
  profile: ProfileType
  onSubmit: (profile: ProfileType) => void
}

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
              {createField('fullName', 'fullName', Input, 'Full Name',
                undefined, { type: 'text' }, 'Full Name')}
              {createField('lookingForAJob', 'lookingForAJob', Input, '',
                undefined, { type: 'checkbox' }, 'lookingForAJob')}
              {createField('lookingForAJobDescription', 'lookingForAJobDescription', TextArea,
                'My professional skills', undefined, { type: 'text' }, 'My professional skills')}
              {createField('aboutMe', 'aboutMe', TextArea,'About me',
                undefined, { type: 'text' }, 'About me')}
            </div>
            <div className={st.contacts}>
              {Object.keys(profile.contacts).map(key => (
                <ContactForm key={key} contactName={key} />
              ))}
            </div>
          </div>
        </form>
      )}
    />
  );
};

export default ProfileDescriptionForm;
