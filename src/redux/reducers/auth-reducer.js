import { authAPI } from '../../api/api';

const SET_USER_DATA = 'samurai/auth/SET_USER_DATA';
const STOP_SUBMIT = 'samurai/auth/STOP_SUBMIT';

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  errorMessage: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return { ...state, ...action.payload };
    }
    case STOP_SUBMIT: {
      return { ...state, errorMessage: action.message };
    }
    default:
      return state;
  }
};

//Action creators
const setUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { id, email, login, isAuth } });
const stopSubmit = (message) => ({ type: STOP_SUBMIT, message })

//Thunk creators
export const getUserAuthData = () => async dispatch => {
  let data = await authAPI.me()
  if (data.resultCode === 0) {
    let { id, email, login } = data.data;
    dispatch(setUserData(id, email, login, true));
  }
};

export const login = (email, password, rememberMe) => async dispatch => {
  let data = await authAPI.login(email, password, rememberMe)
  if (data.resultCode === 0) {
    dispatch(getUserAuthData(data.messages));
  } else {
    let message = data.messages.length > 0 ? data.messages[0] : 'Some unknown error'
    dispatch(stopSubmit(message))
  }
};

export const logout = () => async dispatch => {
  let data = await authAPI.logout()
  if (data.resultCode === 0) {
    dispatch(setUserData(null, null, null, false));
  }
};

export default authReducer;
