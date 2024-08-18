import { TextArea } from '@/components/common/formsControls';
import { createField } from '@/components/common/formsControls/createField.tsx';
import { composeValidators, maxTextLength, required } from '@/utils/validators';
import { Form } from 'react-final-form';
import st from './AddMessage.module.css';

type PropsType = {
    addMessage: (text: string) => void;
};

const AddMessage = ({ addMessage }: PropsType) => {
    let addNewMessage = ({ newMessageText }: { newMessageText: string }) => {
        addMessage(newMessageText);
    };

    return (
        <Form
            onSubmit={addNewMessage}
            render={({ handleSubmit }) => (
                <form
                    className={st.addMessage}
                    onSubmit={handleSubmit}
                >
                    <div className={st.textarea}>
                        {createField(
                            'newMessageText',
                            '',
                            TextArea,
                            'Add message',
                            composeValidators(required, maxTextLength(20)),
                        )}
                    </div>
                    <div className={st.button}>
                        <button type="submit">Add message</button>
                    </div>
                </form>
            )}
        />
    );
};

export default AddMessage;
