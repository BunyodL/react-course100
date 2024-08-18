import { DialogType } from '@/@types/types';
import st from './Dialog.module.css';
import { NavLink } from 'react-router-dom';
import { Navigation } from '@/@types/navigation';

const Dialog = ({ name, image }: DialogType) => {
  return (
    <NavLink
      to={`${Navigation.Dialogs}/${name}`}
      className={st.dialog}
    >
      <img
        src={image}
        alt=""
      />
      <div> {name} </div>
    </NavLink>
  );
};

export default Dialog;
