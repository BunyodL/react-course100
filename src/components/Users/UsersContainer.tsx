import React from 'react';
import { connect } from 'react-redux';
import { RootState } from "redux/redux-store";
import { UserType } from "types/types";
import { follow, unfollow, requestUsers, setUsersPage } from '../../redux/reducers/users-reducer.ts';
import Users from './Users.tsx';
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
} from '../../redux/selectors/users-selectors.ts';

type MapStateToProps = {
  isFetching: boolean
  disabledButton: Array<number>
  currentPage: number
  pageSize: number
  users: Array<UserType | undefined>
  totalUsersCount: number
  portionSize: number
}

type MapDispatchToProps = {
  requestUsers: (page: number, pageSize: number) => void
  follow: (id: number) => void
  unfollow: (id: number) => void
  setUsersPage: (page: number, pageSize: number) => void
}

type Props = MapStateToProps & MapDispatchToProps

type State = {
  setPage: (page: number) => void
}

class UsersContainer extends React.Component<Props, State> {
  componentDidMount() {
    const { requestUsers, currentPage, pageSize } = this.props;
    requestUsers(currentPage, pageSize);
  }

  setPage = (pageNumber: number) => {
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
          disabledButton={this.props.disabledButton}
        />
      </>
    );
  }
}

const mapStateToProps = (state: RootState): MapStateToProps => ({
  users: getUsers(state),
  pageSize: getPageSize(state),
  totalUsersCount: getTotalPagesCount(state),
  currentPage: getCurrentPage(state),
  portionSize: getPortionCount(state),
  isFetching: getIsFetching(state),
  disabledButton: getDisabledButton(state),
});

export default compose(connect<MapStateToProps, MapDispatchToProps, {}, RootState>(mapStateToProps, {
  follow,
  unfollow,
  requestUsers,
  setUsersPage
}))(UsersContainer);
