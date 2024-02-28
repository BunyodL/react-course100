import { authAPI, securityAPI } from '../../api/api';

const SET_USER_DATA = 'samurai/auth/SET_USER_DATA';
const STOP_SUBMIT = 'samurai/auth/STOP_SUBMIT';
const GET_CAPTCHA_URL_SUCCESS = 'samurai/auth/GET_CAPTCHA_URL_SUCCESS';

type InitialStateType = {
  id: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean,
  errorMessage: string,
  captchaUrl: string | null,
};

let initialState: InitialStateType = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  errorMessage: '',
  captchaUrl: null, // if null, captcha is not required
};


const authReducer = (state = initialState, action: any): InitialStateType => {
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
type SetUserDataActionPayloadType = {
  id: number | null
  email: string | null
  login: string | null
  isAuth: boolean
}

type SetUserDataActionType = {
  type: typeof SET_USER_DATA
  payload: SetUserDataActionPayloadType
}
const setUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean): SetUserDataActionType => ({
  type: SET_USER_DATA,
  payload: { id, email, login, isAuth }
});

type StopSubmitActionType = {
  type: typeof STOP_SUBMIT
  message: string
}
const stopSubmit = (message: string): StopSubmitActionType => ({ type: STOP_SUBMIT, message });

type GetCaptchaUrlSuccessActionType = {
  type: typeof GET_CAPTCHA_URL_SUCCESS
  payload: { captchaUrl: string | null }
}
const getCaptchaUrlSuccess = (captchaUrl: string | null): GetCaptchaUrlSuccessActionType => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl }
});

//Thunk creators
export const getUserAuthData = () => async (dispatch: any) => {
  const data = await authAPI.me();
  if (data.resultCode === 0) {
    let { id, email, login } = data.data;
    dispatch(setUserData(id, email, login, true));
  }
};

export type LoginTCPropsType = {
  email: string | null,
  password: string | null,
  rememberMe: boolean,
  captcha: string | null
}

export const login = (email: string | null, password: string | null, rememberMe: boolean, captcha: any) => async (dispatch: any) => {
  const data = await authAPI.login(email, password, rememberMe, captcha);
  if (data.resultCode === 0) {
    dispatch(getUserAuthData());
  } else {
    if (data.resultCode === 10) {
      dispatch(getCaptchaUrl());
    }
    const message = data.messages.length > 0 ? data.messages[0] : 'Some unknown error';
    dispatch(stopSubmit(message));
  }
};

export const getCaptchaUrl = () => async (dispatch: any) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl));
};


export const logout = () => async (dispatch: any) => {
  const data = await authAPI.logout();
  if (data.resultCode === 0) {
    dispatch(setUserData(null, null, null, false));
  }
};

export default authReducer;
