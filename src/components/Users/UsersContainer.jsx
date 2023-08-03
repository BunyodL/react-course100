import React from 'react';
import { connect } from 'react-redux';
import { follow, setUsers, unfollow, setCurrentPage, setTotalCount, toggleIsFetching } from '../../redux/users-reducer';
import axios from 'axios';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends React.Component {
  componentDidMount() {
    console.log('вызов метода componentDidMount');
    this.props.toggleIsFetching(true);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalCount(Math.floor(Number(response.data.totalCount) / 200));
      });
  }

  setPage = pageNum => {
    this.props.setCurrentPage(pageNum);
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`).then(response => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(response.data.items);
    });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          users={this.props.users}
          pageSize={this.props.pageSize}
          totalPagesCount={this.props.totalPagesCount}
          currentPage={this.props.currentPage}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          setPage={this.setPage}
          key={this.props.users.id}
        />
      </>
    );
  }
}

const mapStateToProps = state => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalPagesCount: state.usersPage.totalPagesCount,
  currentPage: state.usersPage.currentPage,
  isFetching: state.usersPage.isFetching,
});

export default connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, setTotalCount, toggleIsFetching })(UsersContainer);
