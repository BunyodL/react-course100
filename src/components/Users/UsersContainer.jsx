import React from 'react';
import { connect } from 'react-redux';
import { follow, setUsers, unfollow, setCurrentPage, setTotalCount, toggleIsFetching } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { usersAPI } from '../../api/api';

class UsersContainer extends React.Component {
  componentDidMount() {
    console.log('вызов метода componentDidMount');
    this.props.toggleIsFetching(true);
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
      this.props.setTotalCount(Math.floor(Number(data.totalCount) / 200));
    });
  }

  setPage = pageNumber => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
    });
  };

  unfollowUser = id => {
    usersAPI.unfollowUserAPI(id).then(data => {
      if (data.resultCode === 0) {
        this.props.unfollow(id);
      }
    });
  };

  followUser = id => {
    usersAPI.followUserAPI(id).then(data => {
      if (data.resultCode === 0) {
        this.props.follow(id);
      }
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
          follow={this.followUser}
          unfollow={this.unfollowUser}
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
