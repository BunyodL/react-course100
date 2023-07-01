import React from 'react';
import st from './../../Dialogs.module.css';

let newMessageElement = React.createRef();

const AddMessage = props => {
  let addMessage = () => props.addMessage();

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    return props.changeMessage(text);
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
