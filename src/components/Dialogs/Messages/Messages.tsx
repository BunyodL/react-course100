import React, { FC } from 'react';
import { MessageType } from "types/types";
import st from './../Dialogs.module.css';

const Messages: FC<MessageType> = ({ message }) => {
  return <div className={st.messageItem}>{message}</div>;
};

export default Messages;
