import React from 'react';
import st from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = ({ isAuth, login, logout }) => {
  return (
    <header className={st.header}>
      <NavLink to='/'>
        <img src='https://assets.turbologo.ru/blog/ru/2018/03/18170838/prozrachniy-logo-800x575.png' alt='logo' />
      </NavLink>
      <div className={st.loginBlock}>
        {isAuth ? (
          <div>
            {login} - <button onClick={logout}>Log out</button>
          </div>
        ) : (
          <NavLink to='/login'>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
