import React from 'react';
import st from '../ProfileInfo.module.css';
import { Field } from 'react-final-form';
import { Input } from '../../../common/FormsControls/Input';

const ContactForm = ({ contactName }) => {
  return (
    <div className={st.contact}>
      <b>{contactName}:</b>
      <Field id={contactName} name={`contacts.${contactName}`} type='text' component={Input} placeholder={contactName} />
    </div>
  );
};

export default ContactForm;
