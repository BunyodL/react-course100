import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import st from './../Users.module.css';

type Props = {
  follow: (id: number) => void
  unfollow: (id: number) => void
  disabledButton: Array<number>
  followed: boolean
  id: number
  name: string
  status: string | null
  image: string
}

const User: FC<Props> = props => {
  return (
    <div className={st.user}>
      <div className={st.profile}>
        <div className={st.ava}>
          <NavLink to={`/profile/${props.id}`}>
            <img src={props.image} alt='Profile avatar' />
          </NavLink>
        </div>
        <div className={st.button}>
          {props.followed ? (
            <button disabled={props.disabledButton.some(id => id === props.id)}
                    onClick={() => props.unfollow(props.id)}>
              Unfollow
            </button>
          ) : (
            <button disabled={props.disabledButton.some(id => id === props.id)} onClick={() => props.follow(props.id)}>
              Follow
            </button>
          )}
        </div>
      </div>
      <div className={st.biography}>
        <div className={st.about}>
          <div className={st.name}>{props.name}</div>
          <div className={st.status}>
            <i>{props.status}</i>
          </div>
        </div>
        <div className={st.location}>
          <div className={st.country}>{`Country: ${'props.location.country'}`}</div>
          <div className={st.city}>{`City: ${'props.location.city'}`}</div>
        </div>
      </div>
    </div>
  );
};

export default User;
