import { Message } from './message';
import { MessageType } from '@/@types/types';
import st from './Messages.module.css';
import { AddMessageContainer } from './addMessage';

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
