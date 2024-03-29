import { createField } from "components/common/FormsControls/createField";
import React, { FC } from 'react';
import { Form } from 'react-final-form';
import { TextArea } from '../../../common/FormsControls/FormControls.tsx';
import { composeValidators, maxTextLength, required } from '../../../utils/validators/validators.ts';
import st from './../../Dialogs.module.css';

type PropsType = {
  addMessage: (text: string) => void
}

const AddMessage: FC<PropsType> = ({ addMessage }) => {
  let addNewMessage = ({ newMessageText }: { newMessageText: string }) => {
    addMessage(newMessageText);
  };

  return (
    <Form
      onSubmit={addNewMessage}
      render={({ handleSubmit }) => (
        <form className={st.addMessage} onSubmit={handleSubmit}>
          <div className={st.textarea}>
            {createField('newMessageText', '',
              TextArea, 'Add message',
              composeValidators(required, maxTextLength(20)))}
          </div>
          <div className={st.button}>
            <button type='submit'>Add message</button>
          </div>
        </form>
      )}
    />
  );
};

export default AddMessage;
