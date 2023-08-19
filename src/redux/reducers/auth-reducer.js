import { authAPI, securityAPI } from '../../api/api';

const SET_USER_DATA = 'samurai/auth/SET_USER_DATA';
const STOP_SUBMIT = 'samurai/auth/STOP_SUBMIT';
const GET_CAPTCHA_URL_SUCCESS = 'samurai/auth/GET_CAPTCHA_URL_SUCCESS';

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  errorMessage: null,
  captchaUrl: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS: {
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
const stopSubmit = message => ({ type: STOP_SUBMIT, message });
const getCaptchaUrlSuccess = captchaUrl => ({ type: GET_CAPTCHA_URL_SUCCESS, payload: { captchaUrl } });

//Thunk creators
export const getUserAuthData = () => async dispatch => {
  const data = await authAPI.me();
  if (data.resultCode === 0) {
    let { id, email, login } = data.data;
    dispatch(setUserData(id, email, login, true));
  }
};

export const login = (email, password, rememberMe, captcha) => async dispatch => {
  const data = await authAPI.login(email, password, rememberMe, captcha);
  if (data.resultCode === 0) {
    dispatch(getUserAuthData(data.messages));
  } else {
    if (data.resultCode === 10) {
      dispatch(getCaptchaUrl());
    }
    const message = data.messages.length > 0 ? data.messages[0] : 'Some unknown error';
    dispatch(stopSubmit(message));
  }
};

export const getCaptchaUrl = () => async dispatch => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export const logout = () => async dispatch => {
  const data = await authAPI.logout();
  if (data.resultCode === 0) {
    dispatch(setUserData(null, null, null, false));
  }
};

export default authReducer;
