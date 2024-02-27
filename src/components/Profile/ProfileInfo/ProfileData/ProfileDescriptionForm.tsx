import React, { FC } from 'react';
import { ProfileType } from "types/types";
import st from '../ProfileInfo.module.css';
import { Field, Form } from 'react-final-form';
import { Input } from '../../../common/FormsControls/Input';
import { Textarea } from '../../../common/FormsControls/Textarea';
import ContactForm from './ContactForm';

type ProfileDescriptionFormPropsType = {
  profile: ProfileType
  onSubmit: (profile: ProfileType) => void
}

const ProfileDescriptionForm: FC<ProfileDescriptionFormPropsType> = ({ profile, onSubmit }) => {
  return (
    <Form
      onSubmit={onSubmit}
      initialValues={profile}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div className={st.description}>
            <div className={st.info}>
              <button>Save changes</button>
              <div>
                <span><b>Full name:</b></span>
                <Field id='fullName' name='fullName' type='text' component={Input} placeholder='Full Name' />
              </div>

              <div className={st.lookingForAJob}>
                <span>Looking for a job:</span>
                <Field id='lookingForAJob' name='lookingForAJob' component={Input} type='checkbox' />
              </div>

              <div>
                <span>My professional skills:</span>
                <Field
                  id='lookingForAJobDescription'
                  name='lookingForAJobDescription'
                  type='text'
                  component={Textarea}
                  placeholder='My professional skills'
                />
              </div>

              <div>
                <span>About me:</span>
                <Field id='aboutMe' name='aboutMe' type='text' component={Textarea} placeholder='About me' />
              </div>
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
