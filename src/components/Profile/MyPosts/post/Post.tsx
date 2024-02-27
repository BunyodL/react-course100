import React, { FC } from 'react';
import st from './Post.module.css';
import postAvatar from '../../../../images/Muzhskaya_avatarka_bez_litza.jpg';

type PostPropsType = {
  message: string
  likesCount: number
}

const Post: FC<PostPropsType> = ({ message, likesCount }) => {
  return (
    <div className={st.item}>
      <img src={postAvatar} alt='' />
      {message}
      <div>{`likes: ${likesCount}`}</div>
    </div>
  );
};

export default Post;
