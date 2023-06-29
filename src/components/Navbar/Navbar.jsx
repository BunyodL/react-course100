import React from "react";
import st from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";

const setActive = ({ isActive }) => (isActive ? st.active : "");

const Navbar = props => {
  return (
    <div className={st.navbar}>
      <nav className={st.nav}>
        <NavLink to="/profile" className={setActive}>
          <div className={st.item}>Profile</div>
        </NavLink>
        <NavLink to="/dialogs" className={setActive}>
          <div className={st.item}>Messages</div>
        </NavLink>
        <NavLink to="/news/" className={setActive}>
          <div className={st.item}>News</div>
        </NavLink>
        <NavLink to="/music" className={setActive}>
          <div className={st.item}>Music</div>
        </NavLink>
        <NavLink to="/settings" className={setActive}>
          <div className={st.item}>Settings</div>
        </NavLink>
      </nav>
      <div className={st.sidebar}>
        <Sidebar friends={props.friends} />
      </div>
    </div>
  );
};

export default Navbar;
