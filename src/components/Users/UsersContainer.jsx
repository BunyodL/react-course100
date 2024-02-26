import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, requestUsers, setUsersPage } from '../../redux/reducers/users-reducer.ts';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import {
  getCurrentPage,
  getDisabledButton,
  getIsFetching,
  getPageSize,
  getPortionCount,
  getTotalPagesCount,
  getUsers,
} from '../../redux/selectors/users-selectors';

class UsersContainer extends React.Component {
  componentDidMount() {
    const { requestUsers, currentPage, pageSize } = this.props;
    requestUsers(currentPage, pageSize);
  }

  setPage = pageNumber => {
    const { setUsersPage, pageSize } = this.props;
    setUsersPage(pageNumber, pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          users={this.props.users}
          pageSize={this.props.pageSize}
          totalUsersCount={this.props.totalUsersCount}
          currentPage={this.props.currentPage}
          portionSize={this.props.portionSize}
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
  users: getUsers(state),
  pageSize: getPageSize(state),
  totalUsersCount: getTotalPagesCount(state),
  currentPage: getCurrentPage(state),
  portionSize: getPortionCount(state),
  isFetching: getIsFetching(state),
  disabledButton: getDisabledButton(state),
});

export default compose(connect(mapStateToProps, { follow, unfollow, requestUsers, setUsersPage }))(UsersContainer);
