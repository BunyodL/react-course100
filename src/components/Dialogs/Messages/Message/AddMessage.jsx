import React from 'react';
import st from './../../Dialogs.module.css';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../../../redux/state';

let newMessageElement = React.createRef();

const AddMessage = props => {
  let addMessage = () => {
    props.dispatch(addMessageActionCreator());
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.dispatch(updateNewMessageTextActionCreator(text));
  };

  return (
    <div className={st.addMessage}>
      <div className={st.textarea}>
        <textarea onChange={onMessageChange} ref={newMessageElement} value={props.newMessageText} placeholder="Add message" />
      </div>
      <div className={st.button}>
        <button onClick={addMessage}>Add message</button>
      </div>
    </div>
  );
};

export default AddMessage;
