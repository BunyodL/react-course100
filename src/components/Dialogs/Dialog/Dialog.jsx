import React from "react";
import st from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const Dialog = props => {
  return (
    <NavLink to={"/dialogs/" + props.name} className={st.dialog}>
      <img src={props.image} alt="" />
      <div> {props.name} </div>
    </NavLink>
  );
};

export default Dialog;
