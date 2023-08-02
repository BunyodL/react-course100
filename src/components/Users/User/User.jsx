import React from 'react';
import st from './../Users.module.css';

const User = props => {
  return (
    <div className={st.user}>
      <div className={st.profile}>
        <div className={st.ava}>
          <img src={props.image} alt="Profile avatar" />
        </div>
        <div className={st.button}>
          {props.followed
            ? <button onClick={() =>  props.unfollow(props.id) }>Unfollow</button>
            : <button onClick={() =>  props.follow(props.id) }>Follow</button>
          }
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
