import React from 'react';
import { Field, Form } from 'react-final-form';
import { composeValidators, maxTextLength, required } from '../../../utils/validators/validators';
import st from './../../Dialogs.module.css';
import { Textarea } from '../../../common/FormsControls/Textarea';

const AddMessage = ({ addMessage }) => {
  let addNewMessage = ({ newMessageText }) => {
    addMessage(newMessageText);
  };

  return (
    <Form
      onSubmit={addNewMessage}
      render={({ handleSubmit }) => (
        <form className={st.addMessage} onSubmit={handleSubmit}>
          <div className={st.textarea}>
            <Field
              component={Textarea}
              name='newMessageText'
              placeholder='Add message'
              validate={composeValidators(required, maxTextLength(20))}
            />
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
