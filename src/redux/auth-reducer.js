import { authAPI } from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA';
const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const RESPONSE_IS_FETCHING = 'RESPONSE_IS_FETCHING';

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return { ...state, ...action.data, isAuth: true };
    }
    case SET_AUTH_USER_DATA: {
      return { ...state, isAuth: false };
    }
    case RESPONSE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    default:
      return state;
  }
};

//Action creators
const setUserData = (id, email, login) => ({ type: SET_USER_DATA, data: { id, email, login } });
const setAuthUserData = () => ({ type: SET_AUTH_USER_DATA });
const responseIsFetching = isFetching => ({ type: SET_USER_DATA, isFetching });

//Thunk creators
export const getUserAuthData = () => dispatch => {
  dispatch(responseIsFetching(true));
  authAPI.me().then(data => {
    if (data.resultCode === 0) {
      dispatch(responseIsFetching(false));
      let { id, email, login } = data.data;
      dispatch(setUserData(id, email, login));
    }
  });
};

export const checkUserAuthData = () => dispatch => {
  dispatch(responseIsFetching(true));
  authAPI.me().then(data => {
    if (data.resultCode === 1) {
      dispatch(responseIsFetching(false));
      dispatch(setAuthUserData());
    }
  });
};

export default authReducer;
