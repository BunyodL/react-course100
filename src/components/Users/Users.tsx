import React, { FC } from 'react';
import { UserType } from "types/types";
import defaultUserPhoto from '../../images/default-photo.png';
import Paginator from '../common/Paginator/Paginator';
import User from './User/User.tsx';
import st from './Users.module.css';

type Props = {
  follow: (id: number) => void
  unfollow: (id: number) => void
  disabledButton: Array<number>
  currentPage: number
  pageSize: number
  users: Array<UserType | undefined>
  totalUsersCount: number
  portionSize: number
  setPage: (page: number) => void
}

const Users: FC<Props> = props => {
  const userElement = props.users.map((u) => {
    if (u) {
      let photo = u.photos.small != null ? u.photos.small : defaultUserPhoto;
      return (
        <User
          key={u.id}
          name={u.name}
          status={u.status}
          image={photo}
          followed={u.followed}
          follow={props.follow}
          unfollow={props.unfollow}
          id={u.id}
          disabledButton={props.disabledButton}
        />
      );
    } else return u;
  });

  return (
    <div className={st.users}>
      <Paginator
        totalItemsCount={props.totalUsersCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        setPage={props.setPage}
        portionSize={props.portionSize}
      />
      {userElement}
    </div>
  );
};

export default Users;
