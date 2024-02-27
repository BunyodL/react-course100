import { DialogsPropsType } from "components/Dialogs/DialogsContainer";
import React, { FC } from 'react';
import st from './Dialogs.module.css';
import Dialog from './Dialog/Dialog.tsx';
import Messages from './Messages/Messages.tsx';
import AddMessageContainer from './Messages/Message/AddMessageContainer.tsx';
import { Navigate } from 'react-router-dom';

const Dialogs: FC<DialogsPropsType> = (props) => {
  const dialogs = props.dialogsData.map(d => <Dialog name={d.name} image={d.image} key={d.id} id={d.id} age={d.age} />);
  const messages = props.messagesData.map(m => <Messages message={m.message} key={m.id} id={m.id} />);

  if (!props.isAuth) return <Navigate to={'/login/'} />;

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
