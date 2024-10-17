import { HeaderPropsType } from 'components/header/HeaderContainer';
import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import st from './Header.module.css';
import logo from '../../assets/logo/prozrachniy-logo-800x575.png';
import { Navigation } from '../../@types/navigation';

const Header = memo(({ isAuth, login, logout }: HeaderPropsType) => {
    return (
        <header className={st.header}>
            <NavLink to={Navigation.Home}>
                <img
                    src={logo}
                    alt="logo"
                />
            </NavLink>
            <div className={st.loginBlock}>
                {isAuth ? (
                    <div>
                        {login} - <button onClick={logout}>Log out</button>
                    </div>
                ) : (
                    <NavLink to={Navigation.Login}>Login</NavLink>
                )}
            </div>
        </header>
    );
});

export default Header;
