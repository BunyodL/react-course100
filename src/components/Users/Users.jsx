import React from 'react';
import User from './User/User';
import st from './Users.module.css';
import defaultUserPhoto from '../../images/default-photo.png';
import Paginator from '../common/Paginator/Paginator';

const Users = props => {
  const userElement = props.users.map(u => {
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
