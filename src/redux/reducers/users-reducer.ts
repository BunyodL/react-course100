import {
  AppDispatch,
  InferActionsTypes,
  ThunkActionType,
} from 'redux/redux-store';
import { UserType } from '../../@types/types.ts';
import { updateObjectInArray } from '../../components/utils/object-helpers.ts';
import { usersAPI } from 'api';
import { ResponseType, ResultCodesEnum } from 'api/types.ts';

let initialState = {
  users: [] as Array<UserType | undefined>,
  pageSize: 12,
  totalUsersCount: 0,
  currentPage: 1,
  portionSize: 15,
  isFetching: true,
  disabledButton: [] as Array<number>, // array with users ids
};

type InitialStateType = typeof initialState;

const usersReducer = (
  state = initialState,
  action: ActionTypes
): InitialStateType => {
  switch (action.type) {
    case 'FOLLOW': {
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {
          followed: true,
        }),
      };
    }
    case 'UNFOLLOW': {
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {
          followed: false,
        }),
      };
    }
    case 'SET_USERS': {
      return { ...state, users: action.users };
    }
    case 'SET_CURRENT_PAGE': {
      return { ...state, currentPage: action.currentPage };
    }
    case 'SET_TOTAL_COUNT': {
      return { ...state, totalUsersCount: action.totalCount };
    }
    case 'TOGGLE_IS_FETCHING': {
      return { ...state, isFetching: action.isFetching };
    }
    case 'BUTTON_IS_DISABLED': {
      return {
        ...state,
        disabledButton: action.isDisabled
          ? [...state.disabledButton, action.userId]
          : state.disabledButton.filter((id) => id !== action.userId),
      };
    }
    default:
      return state;
  }
};

type ActionTypes = InferActionsTypes<typeof actions>;

//Action creators
export const actions = {
  followSuccess: (userId: number) =>
    ({
      type: 'FOLLOW',
      userId,
    } as const),

  unfollowSuccess: (userId: number) =>
    ({
      type: 'UNFOLLOW',
      userId,
    } as const),

  setUsers: (users: Array<UserType>) =>
    ({
      type: 'SET_USERS',
      users,
    } as const),

  setCurrentPage: (currentPage: number) =>
    ({
      type: 'SET_CURRENT_PAGE',
      currentPage,
    } as const),

  setTotalCount: (totalCount: number) =>
    ({
      type: 'SET_TOTAL_COUNT',
      totalCount,
    } as const),

  toggleIsFetching: (isFetching: boolean) =>
    ({
      type: 'TOGGLE_IS_FETCHING',
      isFetching,
    } as const),

  buttonIsDisabled: (isDisabled: boolean, userId: number) =>
    ({
      type: 'BUTTON_IS_DISABLED',
      isDisabled,
      userId,
    } as const),
};

//Thunk creators
export const requestUsers =
  (page: number, pageSize: number): ThunkActionType<ActionTypes> =>
  async (dispatch) => {
    dispatch(actions.toggleIsFetching(true));
    let data = await usersAPI.getUsers(page, pageSize);
    dispatch(actions.toggleIsFetching(false));
    dispatch(actions.setUsers(data.items));
    dispatch(actions.setTotalCount(Number(data.totalCount)));
  };

export const setUsersPage =
  (pageNumber: number, pageSize: number): ThunkActionType<ActionTypes> =>
  async (dispatch) => {
    dispatch(actions.setCurrentPage(pageNumber));
    dispatch(actions.toggleIsFetching(true));
    let data = await usersAPI.getUsers(pageNumber, pageSize);
    dispatch(actions.toggleIsFetching(false));
    dispatch(actions.setUsers(data.items));
  };

const _followUnfollowFlow = async (
  dispatch: AppDispatch,
  apiMethod: (userId: number) => Promise<ResponseType>,
  actionCreator: (userId: number) => ActionTypes,
  userId: number
) => {
  dispatch(actions.buttonIsDisabled(true, userId));
  let data = await apiMethod(userId);
  if (data.resultCode === ResultCodesEnum.Success) {
    dispatch(actionCreator(userId));
  }
  dispatch(actions.buttonIsDisabled(false, userId));
};

export const unfollow =
  (userId: number): ThunkActionType<ActionTypes> =>
  async (dispatch) => {
    await _followUnfollowFlow(
      dispatch,
      usersAPI.unfollow.bind(usersAPI),
      actions.unfollowSuccess,
      userId
    );
  };

export const follow =
  (userId: number): ThunkActionType<ActionTypes> =>
  async (dispatch) => {
    await _followUnfollowFlow(
      dispatch,
      usersAPI.follow.bind(usersAPI),
      actions.followSuccess,
      userId
    );
  };

export default usersReducer;
