import React from "react";
import st from './../Dialogs.module.css';

const Messages = props => {
  return <div className={st.messageItem}>{props.message}</div>;
};

export default Messages;
