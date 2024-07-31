import { MessageType } from '../../../@types/types';
import st from './../Dialogs.module.css';

export const Message = ({ message }: MessageType) => {
  return <div className={st.messageItem}>{message}</div>;
};
