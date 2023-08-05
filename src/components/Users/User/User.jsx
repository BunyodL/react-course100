import React from 'react';
import st from './../Users.module.css';
import { NavLink } from 'react-router-dom';

const User = props => {
  const unfollow = () => props.unfollow(props.id);
  const follow = () => props.follow(props.id);

  return (
    <div className={st.user}>
      <div className={st.profile}>
        <div className={st.ava}>
          <NavLink to={`/profile/${props.id}`}>
            <img src={props.image} alt="Profile avatar" />
          </NavLink>
        </div>
        <div className={st.button}>
          {props.followed ? <button onClick={unfollow}>Unfollow</button> : <button onClick={follow}>Follow</button>}
        </div>
      </div>
      <div className={st.biography}>
        <div className={st.about}>
          <div className={st.name}>{props.name}</div>
          <div className={st.status}>
            <i>{props.status}</i>
          </div>
        </div>
        <div className={st.location}>
          <div className={st.country}>{`Country: ${'props.location.country'}`}</div>
          <div className={st.city}>{`City: ${'props.location.city'}`}</div>
        </div>
      </div>
    </div>
  );
};

export default User;
