import React from 'react';
import st from './Post.module.css';
import postAvatar from '../../../../images/Muzhskaya_avatarka_bez_litza.jpg';

const Post = ({ message, likesCount }) => {
  return (
    <div className={st.item}>
      <img src={postAvatar} alt='' />
      {message}
      <div>{`likes: ${likesCount}`}</div>
    </div>
  );
};

export default Post;
