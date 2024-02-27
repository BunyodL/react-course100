import React, { FC } from 'react';
import { DialogType } from "types/types";
import st from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialog: FC<DialogType> = ({ name, image }) => {
  return (
    <NavLink to={'/dialogs/' + name} className={st.dialog}>
      <img src={image} alt='' />
      <div> {name} </div>
    </NavLink>
  );
};

export default Dialog;
