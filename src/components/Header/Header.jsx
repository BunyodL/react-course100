import React from 'react';
import st from './Header.module.css';
import { NavLink } from 'react-router-dom';
import Preloader from '../common/Preloader/Preloader';

const Header = props => {
  return (
    <header className={st.header}>
      <NavLink to="/">
        <img src="https://assets.turbologo.ru/blog/ru/2018/03/18170838/prozrachniy-logo-800x575.png" alt="logo" />
      </NavLink>
      <div className={st.preloader}>{props.isFetching ? <Preloader /> : null}</div>
      <div className={st.loginBlock}>{props.isAuth ? props.login : <NavLink to="/login">Login</NavLink>}</div>
    </header>
  );
};

export default Header;
