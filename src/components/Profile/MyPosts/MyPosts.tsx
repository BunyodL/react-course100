import React, { FC } from 'react';
import { PostType } from "types/types";
import AddPostForm from './AddPostForm.tsx';
import st from './MyPosts.module.css';
import Post from './post/Post.tsx';

type Props = {
  posts: Array<PostType>
  addPost: (newPostText: string) => void
}

const MyPosts: FC<Props> = React.memo(({ posts, addPost }) => {
  const postElement = posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id} />);

  const addNewPost = ({ newPostText }: { newPostText: string }) => {
    addPost(newPostText);
  };

  return (
    <div className={st.posts}>
      <h3>My posts</h3>
      <AddPostForm addNewPost={addNewPost} />
      <div>{postElement}</div>
    </div>
  );
});

export default MyPosts;
