import React, { FC } from "react";
import { Field, Form } from 'react-final-form';
import { Textarea } from '../../common/FormsControls/Textarea';
import { composeValidators, maxTextLength, required } from '../../utils/validators/validators';
import st from './MyPosts.module.css';

type Props = {
  addNewPost: (postText: { newPostText: string }) => void
}

const AddPostForm: FC<Props> = ({ addNewPost }) => {
  return (
    <Form
      onSubmit={addNewPost}
      render={({ handleSubmit }) => (
        <form className={st.addPost} onSubmit={handleSubmit}>
          <div className={st.textarea}>
            <Field
              name='newPostText'
              component={Textarea}
              placeholder='Add Post'
              validate={composeValidators(required, maxTextLength(10))}
            />
          </div>
          <button type='submit'>Add post</button>
        </form>
      )}
    />
  );
};

export default AddPostForm;
