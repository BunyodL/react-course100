import React from 'react';
import st from './MyPosts.module.css';
import Post from './post/Post';

const MyPosts = props => {
  const postElement = props.post.map(p => <Post message={p.message} likesCount={p.likesCount} />);

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch({ type: 'ADD-POST' });
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text });
  };

  return (
    <div className={st.posts}>
      <h3>My posts</h3>
      <div className={st.addPost}>
        <div className={st.textarea}>
          <textarea onChange={onPostChange} placeholder="Add post" ref={newPostElement} value={props.newPostText} />
        </div>
        <button onClick={addPost}>Add post</button>
      </div>
      <div>{postElement}</div>
    </div>
  );
};

export default MyPosts;
