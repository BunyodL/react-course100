import { NavLink } from 'react-router-dom';
import { FriendType } from '../../@types/types.ts';
import st from './Navbar.module.css';
import Sidebar from './sidebar/Sidebar.tsx';
import { Navigation } from '../../@types/navigation.ts';

const setActive = ({ isActive }: { isActive: boolean }) =>
  isActive ? st.active : '';

type Props = {
  friends: Array<FriendType>;
};

const Navbar = ({ friends }: Props) => {
  return (
    <div className={st.navbar}>
      <nav className={st.nav}>
        <NavLink
          to={`${Navigation.Profile}`}
          className={setActive}
        >
          <div className={st.item}>Profile</div>
        </NavLink>
        <NavLink
          to={`${Navigation.Dialogs}`}
          className={setActive}
        >
          <div className={st.item}>Messages</div>
        </NavLink>
        <NavLink
          to={`${Navigation.Users}`}
          className={setActive}
        >
          <div className={st.item}>Users</div>
        </NavLink>
        <NavLink
          to={`${Navigation.News}`}
          className={setActive}
        >
          <div className={st.item}>News</div>
        </NavLink>
        <NavLink
          to={`${Navigation.Music}`}
          className={setActive}
        >
          <div className={st.item}>Music</div>
        </NavLink>
        <NavLink
          to={`${Navigation.Settings}`}
          className={setActive}
        >
          <div className={st.item}>Settings</div>
        </NavLink>
      </nav>
      <div className={st.sidebar}>
        <Sidebar friends={friends} />
      </div>
    </div>
  );
};

export default Navbar;
