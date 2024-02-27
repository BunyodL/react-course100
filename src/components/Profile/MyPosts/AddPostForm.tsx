import { FC } from "react";
import { Form, Field } from 'react-final-form';
import { composeValidators, maxTextLength, required } from '../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/Textarea';
import st from './MyPosts.module.css';

type AddPostFormPropsType = {
  addNewPost: (postText: { newPostText: string }) => void
}


const AddPostForm: FC<AddPostFormPropsType> = ({ addNewPost }) => {
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
