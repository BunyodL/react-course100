import React from 'react';
import st from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Messages from './Messages/Messages';
import AddMessageContainer from './Messages/Message/AddMessageContainer';

const Dialogs = props => {
  let state = props.store.getState().dialogsPage;

  const dialogs = state.dialogsData.map(d => <Dialog name={d.name} image={d.image} />);
  const messages = state.messagesData.map(m => <Messages message={m.message} />);

  return (
    <div className={st.dialogs}>
      <div className={st.dialogsItem}>
        <div className={st.title}>Dialogs</div>
        {dialogs}
      </div>
      <div className={st.messages}>
        <div className={st.message}>{messages}</div>
        <div className={st.newMessage}>
          <AddMessageContainer />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
