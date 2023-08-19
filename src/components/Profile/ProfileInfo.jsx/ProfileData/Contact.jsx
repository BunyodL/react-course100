import React from 'react';
import st from '../ProfileInfo.module.css';

const Contact = ({ socialMediaName, socialMediaLink }) => {
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
