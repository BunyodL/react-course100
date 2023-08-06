import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, getUsers, setUsersPage } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  setPage = pageNumber => {
    this.props.setUsersPage(pageNumber, this.props.pageSize);
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
          disabledButton={this.props.disabledButton}
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
  disabledButton: state.usersPage.disabledButton,
});

export default connect(mapStateToProps, { follow, unfollow, getUsers, setUsersPage })(UsersContainer);
