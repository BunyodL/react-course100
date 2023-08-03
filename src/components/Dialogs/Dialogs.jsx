import React from 'react';
import st from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Messages from './Messages/Messages';
import AddMessageContainer from './Messages/Message/AddMessageContainer';

const Dialogs = props => {
  const dialogs = props.dialogsData.map(d => <Dialog name={d.name} image={d.image} key={d.id} />);
  const messages = props.messagesData.map(m => <Messages message={m.message} key={m.id} />);

  return (
    <div className={st.dialogs}>
      <div className={st.dialogsItem}>
        <div className={st.title}>Dialogs</div>
        {dialogs}
      </div>
      <div className={st.messagesContainer}>
        <div className={st.mainMessages}>
          <div className={st.messages}>
            <div className={st.message}>{messages}</div>
            <AddMessageContainer />
          </div>
        </div>
      </div>
      {/* messagesContainer */}
    </div>
  );
};

export default Dialogs;
