import { DialogsPropsType } from 'components/Dialogs/DialogsContainer';
import { memo } from 'react';
import st from './Dialogs.module.css';
import Dialog from './Dialog/Dialog.tsx';
import { Navigate } from 'react-router-dom';
import { Messages } from './Messages/Messages.tsx';
import { Navigation } from '../../@types/navigation.ts';

export const Dialogs = memo(
  ({ messagesData, dialogsData, isAuth }: DialogsPropsType) => {
    if (!isAuth) return <Navigate to={`${Navigation.Dialogs}`} />;

    return (
      <div className={st.dialogs}>
        <div className={st.dialogsItem}>
          <div className={st.title}>Dialogs</div>
          {dialogsData.map((d) => (
            <Dialog
              name={d.name}
              image={d.image}
              key={d.id}
              id={d.id}
              age={d.age}
            />
          ))}
        </div>
        <div className={st.messagesContainer}>
          <div className={st.mainMessages}>
            <Messages messages={messagesData} />
          </div>
        </div>
        {/* messagesContainer */}
      </div>
    );
  }
);
