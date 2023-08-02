import React from 'react';
import User from './User/User';
import st from './Users.module.css';
import axios from 'axios';

class Users extends React.Component {
  constructor(props) {
    super(props);
    console.log('вызов метода constructor');
    this.defaultPhoto = 'https://static.thenounproject.com/png/5034901-200.png';
  }

  componentDidMount() {
    console.log('вызов метода componentDidMount');
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalCount(Math.floor(Number(response.data.totalCount) / 200));
      });
  }

  userElement() {
    return this.props.users.map(u => {
      let photo = u.photos.small != null ? u.photos.small : this.defaultPhoto;

      return (
        <User
          name={u.name}
          status={u.status}
          image={photo}
          followed={u.followed}
          location={'u.location'}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          id={u.id}
          key={u.id}
        />
      );
    });
  }

  setPage = pageNum => {
    this.props.setCurrentPage(pageNum);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items);
    });
  };

  render() {
    console.log('вызов метода render');

    let pagesCount = Math.ceil(this.props.totalPagesCount / this.props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <div className={st.users}>
        <div className={st.pages}>
          {pages.map(p => (
            <span className={this.props.currentPage === p && st.selectedPage} onClick={() => this.setPage(p)}>
              {p}
            </span>
          ))}
        </div>

        {this.userElement()}
      </div>
    );
  }
}

export default Users;
