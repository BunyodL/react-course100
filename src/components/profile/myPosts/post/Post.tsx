import { FC, memo } from 'react';
import postAvatar from '../../../../assets/images/Muzhskaya_avatarka_bez_litza.jpg';
import st from './Post.module.css';

type Props = {
  message: string
  likesCount: number
}

const Post: FC<Props> = memo(({ message, likesCount }) => {
  return (
    <div className={st.item}>
      <img src={postAvatar} alt='' />
      {message}
      <div>{`likes: ${likesCount}`}</div>
    </div>
  );
});

export default Post;
