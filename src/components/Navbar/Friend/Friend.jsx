import React from 'react';
import st from '../Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Friend = ({ name, image }) => {
  return (
    <NavLink to={'/dialogs/' + name} className={st.friend}>
      <div className={st.image}>
        <img src={image} alt='' />
      </div>
      <div className={st.name}> {name} </div>
    </NavLink>
  );
};

export default Friend;
