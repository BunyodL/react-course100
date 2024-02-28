import { usersAPI } from '../../api/api';
import { updateObjectInArray } from '../../components/utils/object-helpers.ts';
import { UserType } from "types/types";

const FOLLOW = 'samurai/users/FOLLOW';
const UNFOLLOW = 'samurai/users/UNFOLLOW';
const SET_USERS = 'samurai/users/SET_USERS';
const SET_CURRENT_PAGE = 'samurai/users/SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'samurai/users/SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'samurai/users/TOGGLE_IS_FETCHING';
const BUTTON_IS_DISABLED = 'samurai/users/BUTTON_IS_DISABLED';

let initialState = {
  users: [] as Array<UserType | undefined>,
  pageSize: 12,
  totalUsersCount: 0,
  currentPage: 1,
  portionSize: 15,
  isFetching: true,
  disabledButton: [] as Array<number>, // array with users ids
};

type InitialStateType = typeof initialState

const usersReducer = (state = initialState, action: any):InitialStateType => {
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
type FollowSuccessActionType = {
  type: typeof FOLLOW,
  userId: number
}
const followSuccess = (userId: number): FollowSuccessActionType => ({ type: FOLLOW, userId });
type UnfollowSuccessActionType = {
  type: typeof UNFOLLOW,
  userId: number
}
const unfollowSuccess = (userId: number): UnfollowSuccessActionType => ({ type: UNFOLLOW, userId });
type SetUsersActionType = {
  type: typeof SET_USERS,
  users: Array<UserType>
}
const setUsers = (users: Array<UserType>): SetUsersActionType => ({ type: SET_USERS, users });
type SetCurrentPageActionType = {
  type: typeof SET_CURRENT_PAGE,
  currentPage: number
}
const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({ type: SET_CURRENT_PAGE, currentPage });
type SetTotalCountActionType = {
  type: typeof SET_TOTAL_COUNT,
  totalCount: number
}
const setTotalCount = (totalCount: number): SetTotalCountActionType => ({ type: SET_TOTAL_COUNT, totalCount });
type ToggleIsFetchingActionType = {
  type: typeof TOGGLE_IS_FETCHING,
  isFetching: boolean
}
const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({
  type: TOGGLE_IS_FETCHING,
  isFetching
});
type ButtonIsDisabledActionType = {
  type: typeof BUTTON_IS_DISABLED,
  isDisabled: boolean
  userId: number
}
const buttonIsDisabled = (isDisabled: boolean, userId: number): ButtonIsDisabledActionType => ({
  type: BUTTON_IS_DISABLED,
  isDisabled,
  userId
});

//Thunk creators
export const requestUsers = (page: number, pageSize: number) => async (dispatch: any) => {
  dispatch(toggleIsFetching(true));
  let data = await usersAPI.getUsers(page, pageSize);
  dispatch(toggleIsFetching(false));
  dispatch(setUsers(data.items));
  dispatch(setTotalCount(Number(data.totalCount)));
};

export const setUsersPage = (pageNumber: number, pageSize: number) => async (dispatch: any) => {
  dispatch(setCurrentPage(pageNumber));
  dispatch(toggleIsFetching(true));
  let data = await usersAPI.getUsers(pageNumber, pageSize);
  dispatch(toggleIsFetching(false));
  dispatch(setUsers(data.items));
};

const followUnfollowFlow = async (dispatch: any, apiMethod: any, actionCreator: any, userId: number) => {
  dispatch(buttonIsDisabled(true, userId));
  let data = await apiMethod(userId);
  if (data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(buttonIsDisabled(false, userId));
};

export const unfollow = (userId: number) => async (dispatch: any) => {
  await followUnfollowFlow(dispatch, usersAPI.unfollow.bind(usersAPI), unfollowSuccess, userId);
};

export const follow = (userId: number) => async (dispatch: any) => {
  await followUnfollowFlow(dispatch, usersAPI.follow.bind(usersAPI), followSuccess, userId);
};

export default usersReducer;
