import React from "react";
import st from "./Header.module.css";
import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <header className={st.header}>
      <NavLink to="/">
        <img src="https://assets.turbologo.ru/blog/ru/2018/03/18170838/prozrachniy-logo-800x575.png" alt="logo" />
        </NavLink>
    </header>
  );
};

export default Header;
