import React from 'react';
import st from './Sidebar.module.css';
import Friend from '../Friend/Friend';

const Sidebar = props => {
  const myFriends = props.friends.map(f => <Friend name={f.name} image={f.image} key={f.id} />);

  return (
    <div className={st.bar}>
      <div className={st.title}>Friends</div>
      <div className={st.friends}>{myFriends}</div>
    </div>
  );
};

export default Sidebar;
