import { RootState } from "@/redux/redux-store";
import { createSelector } from 'reselect';

const getUsersSelector = (state: RootState) => state.usersPage.users;
export const getUsers = createSelector(getUsersSelector, (users) => users.filter(u => true));

export const getPageSize = (state: RootState) => state.usersPage.pageSize;

export const getTotalPagesCount = (state: RootState) => state.usersPage.totalUsersCount;

export const getCurrentPage = (state: RootState) => state.usersPage.currentPage;

export const getPortionCount = (state: RootState) => state.usersPage.portionSize;

export const getIsFetching = (state: RootState) => state.usersPage.isFetching;

export const getDisabledButton = (state: RootState) => state.usersPage.disabledButton;
