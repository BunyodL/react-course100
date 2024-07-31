import { Message } from './Message';
import { MessageType } from '../../../@types/types';
import st from '../Dialogs.module.css';
import AddMessageContainer from './Message/AddMessageContainer';

type Props = {
  messages: Array<MessageType>;
};

export function Messages({ messages }: Props) {
  return (
    <div className={st.messages}>
      <div className={st.message}>
        {messages.map((m) => (
          <Message
            message={m.message}
            key={m.id}
            id={m.id}
          />
        ))}
      </div>
      <AddMessageContainer />
    </div>
  );
}
