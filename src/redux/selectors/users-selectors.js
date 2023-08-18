import { createSelector } from 'reselect';

const getUsersSelector = state => state.usersPage.users;
export const getUsers = createSelector(getUsersSelector, (users) => users.filter(u => true));

export const getPageSize = state => state.usersPage.pageSize;

export const getTotalPagesCount = state => state.usersPage.totalUsersCount;

export const getCurrentPage = state => state.usersPage.currentPage;

export const getPortionCount = state => state.usersPage.portionSize;

export const getIsFetching = state => state.usersPage.isFetching;

export const getDisabledButton = state => state.usersPage.disabledButton;
