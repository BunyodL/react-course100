import { usersAPI } from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const BUTTON_IS_DISABLED = 'BUTTON_IS_DISABLED';

let initialState = {
  users: [],
  pageSize: 12,
  totalPagesCount: 0,
  currentPage: 1,
  isFetching: true,
  disabledButton: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    }
    case SET_USERS: {
      return { ...state, users: action.users };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case SET_TOTAL_COUNT: {
      return { ...state, totalPagesCount: action.totalCount };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case BUTTON_IS_DISABLED: {
      return {
        ...state,
        disabledButton: action.isDisabled
          ? [...state.disabledButton, action.userId]
          : state.disabledButton.filter(id => id !== action.userId),
      };
    }
    default:
      return state;
  }
};

//Action creators
const followSuccess = userId => ({ type: FOLLOW, userId });
const unfollowSuccess = userId => ({ type: UNFOLLOW, userId });
const setUsers = users => ({ type: SET_USERS, users });
const setCurrentPage = currentPage => ({ type: SET_CURRENT_PAGE, currentPage });
const setTotalCount = totalCount => ({ type: SET_TOTAL_COUNT, totalCount });
const toggleIsFetching = isFetching => ({ type: TOGGLE_IS_FETCHING, isFetching });
const buttonIsDisabled = (isDisabled, userId) => ({ type: BUTTON_IS_DISABLED, isDisabled, userId });

//Thunk creators
export const getUsers = (currentPage, pageSize) => dispatch => {
  dispatch(toggleIsFetching(true));
  usersAPI.getUsers(currentPage, pageSize).then(data => {
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalCount(Math.floor(Number(data.totalCount) / 200)));
  });
};

export const setUsersPage = (pageNumber, pageSize) => dispatch => {
  dispatch(setCurrentPage(pageNumber));
  dispatch(toggleIsFetching(true));
  usersAPI.getUsers(pageNumber, pageSize).then(data => {
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
  });
};

export const unfollow = userId => dispatch => {
  dispatch(buttonIsDisabled(true, userId));
  usersAPI.unfollow(userId).then(data => {
    if (data.resultCode === 0) {
      dispatch(unfollowSuccess(userId));
    }
    dispatch(buttonIsDisabled(false, userId));
  });
};

export const follow = userId => dispatch => {
  dispatch(buttonIsDisabled(true, userId));
  usersAPI.follow(userId).then(data => {
    if (data.resultCode === 0) {
      dispatch(followSuccess(userId));
    }
    dispatch(buttonIsDisabled(false, userId));
  });
};

export default usersReducer;
