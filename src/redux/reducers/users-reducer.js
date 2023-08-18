import { usersAPI } from '../../api/api';
import { updateObjectInArray } from '../../components/utils/object-helpers';

const FOLLOW = 'samurai/users/FOLLOW';
const UNFOLLOW = 'samurai/users/UNFOLLOW';
const SET_USERS = 'samurai/users/SET_USERS';
const SET_CURRENT_PAGE = 'samurai/users/SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'samurai/users/SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'samurai/users/TOGGLE_IS_FETCHING';
const BUTTON_IS_DISABLED = 'samurai/users/BUTTON_IS_DISABLED';

let initialState = {
  users: [],
  pageSize: 12,
  totalUsersCount: 0,
  currentPage: 1,
  portionSize: 15,
  isFetching: true,
  disabledButton: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', { followed: true }),
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', { followed: false }),
      };
    }
    case SET_USERS: {
      return { ...state, users: action.users };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case SET_TOTAL_COUNT: {
      return { ...state, totalUsersCount: action.totalCount };
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
export const requestUsers = (page, pageSize) => async dispatch => {
  dispatch(toggleIsFetching(true));
  let data = await usersAPI.getUsers(page, pageSize);
  dispatch(toggleIsFetching(false));
  dispatch(setUsers(data.items));
  dispatch(setTotalCount(Number(data.totalCount)));
};

export const setUsersPage = (pageNumber, pageSize) => async dispatch => {
  dispatch(setCurrentPage(pageNumber));
  dispatch(toggleIsFetching(true));
  let data = await usersAPI.getUsers(pageNumber, pageSize);
  dispatch(toggleIsFetching(false));
  dispatch(setUsers(data.items));
};

const followUnfollowFlow = async (dispatch, apiMethod, actionCreator, userId) => {
  dispatch(buttonIsDisabled(true, userId));
  let data = await apiMethod(userId);
  if (data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(buttonIsDisabled(false, userId));
};

export const unfollow = userId => async dispatch => {
  followUnfollowFlow(dispatch, usersAPI.unfollow.bind(usersAPI), unfollowSuccess, userId);
};

export const follow = userId => async dispatch => {
  followUnfollowFlow(dispatch, usersAPI.follow.bind(usersAPI), followSuccess, userId);
};

export default usersReducer;
