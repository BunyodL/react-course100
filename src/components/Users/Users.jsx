import React from 'react';
import User from './User/User';
import st from './Users.module.css';
import defaultUserPhoto from '../../images/default-photo.png';

const Users = props => {
  const userElement = props.users.map(u => {
    let photo = u.photos.small != null ? u.photos.small : defaultUserPhoto;
    return (
      <User
        name={u.name}
        status={u.status}
        image={photo}
        followed={u.followed}
        location={'u.location'}
        follow={props.follow}
        unfollow={props.unfollow}
        id={u.id}
        key={u.id}
      />
    );
  });

  let pagesCount = Math.ceil(props.totalPagesCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={st.users}>
      <div className={st.pages}>
        {pages.map(p => (
          <span className={props.currentPage === p && st.selectedPage} onClick={() => props.setPage(p)}>
            {p}
          </span>
        ))}
      </div>
      {userElement}
    </div>
  );
};

export default Users;
