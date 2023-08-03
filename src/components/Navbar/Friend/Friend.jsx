import React from 'react';
import st from '../Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Friend = props => {
  return (
    <NavLink to={'/dialogs/' + props.name} className={st.friend}>
      <div className={st.image}>
        <img src={props.image} alt="" />
      </div>
      <div className={st.name}> {props.name} </div>
    </NavLink>
  );
};

export default Friend;
