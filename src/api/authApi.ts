import { instance } from './instance';
import { ResponseType, WithCaptchaResponseType } from './types';

const enum Endpoints {
  Me = 'auth/me',
  Login = 'auth/login',
}

type MeResponseType = ResponseType<{
  id: number;
  email: string;
  login: string;
}>;

type LoginResponseType = WithCaptchaResponseType<{ userId: number }>;

export const authAPI = {
  async me() {
    try {
      const res = await instance.get<MeResponseType>(`${Endpoints.Me}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
  async login(
    email: string | null,
    password: string | null,
    rememberMe: boolean,
    captcha: string | null = null
  ) {
    const res = await instance.post<LoginResponseType>(`${Endpoints.Login}`, {
      email,
      password,
      rememberMe,
      captcha,
    });
    return res.data;
  },
  async logout() {
    const res = await instance.delete<ResponseType>(`${Endpoints.Login}`);
    return res.data;
  },
};
