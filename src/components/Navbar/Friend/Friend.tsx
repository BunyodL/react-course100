import { NavLink } from 'react-router-dom';
import { FriendType } from '../../../@types/types';
import st from '../Navbar.module.css';
import { Navigation } from '../../../@types/navigation';

const Friend = ({ name, image }: FriendType) => {
  return (
    <NavLink
      to={`${Navigation.Dialogs}/${name}`}
      className={st.friend}
    >
      <div className={st.image}>
        <img
          src={image}
          alt=""
        />
      </div>
      <div className={st.name}> {name} </div>
    </NavLink>
  );
};

export default Friend;
