import React from 'react';
import st from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialog = ({ name, image }) => {
  return (
    <NavLink to={'/dialogs/' + name} className={st.dialog}>
      <img src={image} alt='' />
      <div> {name} </div>
    </NavLink>
  );
};

export default Dialog;
