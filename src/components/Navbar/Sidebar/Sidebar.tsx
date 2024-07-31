import { FriendType } from '../../../@types/types.ts';
import Friend from '../Friend/Friend.tsx';
import st from '../Navbar.module.css';

type Props = {
  friends: Array<FriendType>;
};

const Sidebar = ({ friends }:Props) => {
  const myFriends = friends.map((f) => (
    <Friend
      name={f.name}
      image={f.image}
      key={f.id}
      id={f.id}
      age={f.age}
    />
  ));

  return (
    <div className={st.bar}>
      <div className={st.title}>Friends</div>
      <div className={st.friends}>{myFriends}</div>
    </div>
  );
};

export default Sidebar;
