import { createField } from 'components/common/FormsControls/createField';
import { Form } from 'react-final-form';
import { TextArea } from '../../common/FormsControls/FormControls.tsx';
import {
  composeValidators,
  maxTextLength,
  required,
} from '../../utils/validators/validators.ts';
import st from './MyPosts.module.css';

type Props = {
  addNewPost: (postText: { newPostText: string }) => void;
};

const AddPostForm = ({ addNewPost }: Props) => {
  return (
    <Form
      onSubmit={addNewPost}
      render={({ handleSubmit }) => (
        <form
          className={st.addPost}
          onSubmit={handleSubmit}
        >
          <div className={st.textarea}>
            {createField(
              'newPostText',
              '',
              TextArea,
              'Add Post',
              composeValidators(required, maxTextLength(30))
            )}
          </div>
          <button type="submit">Add post</button>
        </form>
      )}
    />
  );
};

export default AddPostForm;
