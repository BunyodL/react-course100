import React from 'react';
import st from './MyPosts.module.css';
import Post from './post/Post';

const MyPosts = props => {
  const postElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id} />);

  let newPostElement = React.createRef();

  let onAddPost = () => props.addPost();

  let onPostChange = () => {
    let text = newPostElement.current.value;
    return props.updateNewPostText(text);
  };

  return (
    <div className={st.posts}>
      <h3>My posts</h3>
      <div className={st.addPost}>
        <div className={st.textarea}>
          <textarea onChange={onPostChange} ref={newPostElement} placeholder="Add post" value={props.newPostText} />
        </div>
        <button onClick={onAddPost}>Add post</button>
      </div>
      <div>{postElement}</div>
    </div>
  );
};

export default MyPosts;
