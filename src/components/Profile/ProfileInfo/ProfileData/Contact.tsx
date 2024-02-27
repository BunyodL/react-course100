import React, { FC } from 'react';
import st from '../ProfileInfo.module.css';

type ContactPropsType = {
  socialMediaName: string
  socialMediaLink: string
}

const Contact: FC<ContactPropsType> = ({ socialMediaName, socialMediaLink }) => {
  return (
    <div className={st.contact}>
      <span>
        <b>{socialMediaName}:</b>
      </span>
      <div>{socialMediaLink}</div>
    </div>
  );
};

export default Contact;
