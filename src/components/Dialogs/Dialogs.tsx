import { DialogsPropsType } from 'components/dialogs/DialogsContainer.tsx';
import { memo } from 'react';
import st from './Dialogs.module.css';
import Dialog from './Dialog/Dialog.tsx';
import { Messages } from './Messages/Messages.tsx';

export const Dialogs = memo(({ messagesData, dialogsData }: DialogsPropsType) => {
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
});
