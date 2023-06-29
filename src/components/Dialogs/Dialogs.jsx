import React from 'react';
import st from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Messages from './Messages/Messages';
import AddMessage from './Messages/Message/AddMessage';

const Dialogs = props => {
  const dialogs = props.dialogsPage.dialogsData.map(d => <Dialog name={d.name} image={d.image} />);
  const messages = props.dialogsPage.messagesData.map(m => <Messages message={m.message} />);

  return (
    <div className={st.dialogs}>
      <div className={st.dialogsItem}>
        <div className={st.title}>Dialogs</div>
        {dialogs}
      </div>
      <div className={st.messages}>
        <div className={st.message}>{messages}</div>
        <div className={st.newMessage}>
          <AddMessage newMessageText={props.dialogsPage.newMessageText} dispatch={props.dispatch} />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
