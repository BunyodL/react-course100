import { authAPI, securityAPI } from '@/api';
import { ResultCodeForCaptcha, ResultCodesEnum } from '@/api/types';
import { InferActionsTypes, ThunkActionType } from '@/redux/redux-store';

const initialState = {
  id: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  errorMessage: '',
  captchaUrl: null as string | null, // if null, captcha is not required
};

export const authReducer = (
  state = initialState,
  action: ActionTypes
): InitialStateType => {
  switch (action.type) {
    case 'auth/SET_USER_DATA':
    case 'auth/GET_CAPTCHA_URL_SUCCESS': {
      return { ...state, ...action.payload };
    }
    case 'auth/STOP_SUBMIT': {
      return { ...state, errorMessage: action.message };
    }
    default:
      return state;
  }
};

//Action creators
export const actions = {
  setUserData: (
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
  ) =>
    ({
      type: 'auth/SET_USER_DATA',
      payload: { id, email, login, isAuth },
    } as const),

  stopSubmit: (message: string) =>
    ({
      type: 'auth/STOP_SUBMIT',
      message,
    } as const),

  getCaptchaUrlSuccess: (captchaUrl: string | null) =>
    ({
      type: 'auth/GET_CAPTCHA_URL_SUCCESS',
      payload: { captchaUrl },
    } as const),
};

//Thunk creators
export const getUserAuthData =
  (): ThunkActionType<ActionTypes> => async (dispatch) => {
    const data = await authAPI.me();
    if (data?.resultCode === ResultCodesEnum.Success) {
      let { id, email, login } = data.data;
      dispatch(actions.setUserData(id, email, login, true));
    }
  };

export const login =
  (
    email: string | null,
    password: string | null,
    rememberMe: boolean,
    captcha: string | null
  ): ThunkActionType<ActionTypes> =>
  async (dispatch) => {
    const data = await authAPI.login(email, password, rememberMe, captcha);
    if (data.resultCode === ResultCodesEnum.Success) {
      await dispatch(getUserAuthData());
    } else {
      if (data.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
        await dispatch(getCaptchaUrl());
      }
      const message =
        data.messages.length > 0 ? data.messages[0] : 'Some unknown error';
      dispatch(actions.stopSubmit(message));
    }
  };

export const getCaptchaUrl =
  (): ThunkActionType<ActionTypes> => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(actions.getCaptchaUrlSuccess(captchaUrl));
  };

export const logout = (): ThunkActionType<ActionTypes> => async (dispatch) => {
  const data = await authAPI.logout();
  if (data.resultCode === ResultCodesEnum.Success) {
    dispatch(actions.setUserData(null, null, null, false));
  }
};

type InitialStateType = typeof initialState;
type ActionTypes = InferActionsTypes<typeof actions>;
