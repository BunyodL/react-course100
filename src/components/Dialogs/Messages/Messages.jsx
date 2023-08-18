import React from 'react';
import st from './../Dialogs.module.css';

const Messages = ({ message }) => {
  return <div className={st.messageItem}>{message}</div>;
};

export default Messages;
