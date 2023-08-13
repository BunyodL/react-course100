import React from 'react';
import AddPostForm from './AddPostForm';
import st from './MyPosts.module.css';
import Post from './post/Post';

const MyPosts = props => {
  const postElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id} />);

  const addNewPost = ({ newPostText }) => {
    props.addPost(newPostText);
  };

  return (
    <div className={st.posts}>
      <h3>My posts</h3>
      <AddPostForm addNewPost={addNewPost} />
      <div>{postElement}</div>
    </div>
  );
};

export default MyPosts;
