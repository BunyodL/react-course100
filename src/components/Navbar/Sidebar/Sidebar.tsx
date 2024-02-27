import { FriendsType } from "components/Navbar/Navbar";
import React, { FC } from 'react';
import st from '../Navbar.module.css';
import Friend from '../Friend/Friend.tsx';

const Sidebar: FC<FriendsType> = ({ friends }) => {
  const myFriends = friends.map(f => <Friend name={f.name} image={f.image} key={f.id} id={f.id} age={f.age} />);

  return (
    <div className={st.bar}>
      <div className={st.title}>Friends</div>
      <div className={st.friends}>{myFriends}</div>
    </div>
  );
};

export default Sidebar;
