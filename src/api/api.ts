import axios from 'axios';
import { PhotosType, ProfileType, UserType } from "types/types";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '32165f28-ca0a-43bd-9a08-b387c3e8a388',
  },
});

export enum ResultCodesEnum {
  Success = 0,
  Error = 1,
}

export enum ResultCodeForCaptcha {
  CaptchaIsRequired = 10
}

type GetUsersType = {
  items: Array<UserType>
  totalCount: number
  error: string
}

type FollowUnfollow = {
  resultCode: ResultCodesEnum
  messages: Array<string>
  data: {}
}

export const usersAPI = {
  async getUsers(currentPage: number, pageSize: number) {
    const response = await instance.get<GetUsersType>(`users?page=${currentPage}&count=${pageSize}`);
    return response.data;
  },
  async follow(userId: number) {
    const response = await instance.post<FollowUnfollow>(`follow/${userId}`);
    return response.data;
  },
  async unfollow(userId: number) {
    const response = await instance.delete<FollowUnfollow>(`follow/${userId}`);
    return response.data;
  },
};

type UpdateStatusType = {
  resultCode: ResultCodesEnum
  messages: Array<string>
  data: {}
}

type UpdateMyPhotoType = {
  resultCode: ResultCodesEnum
  messages: Array<string>
  data: { photos: PhotosType }
  fieldsErrors: Array<string>
}

type UpdateMyProfileType = {
  resultCode: ResultCodesEnum
  messages: Array<string>
  data: {}
}

export const profileAPI = {
  async getProfile(userId: number | null) {
    const response = await instance.get<ProfileType>(`profile/` + userId);
    return response.data;
  },
  async getStatus(userId: number | null) {
    const response = await instance.get<string>('profile/status/' + userId);
    return response.data;
  },
  async updateStatus(status: string) {
    try {
      const response = await instance.put<UpdateStatusType>('profile/status', { status: status });
      return response.data
    } catch (error) {
      // alert(error);
    }
  },
  async updateMyPhoto(photoFile: any) {
    const formData = new FormData();
    formData.append('image', photoFile);
    const response = await instance.put<UpdateMyPhotoType>('profile/photo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },
  async updateMyProfile(profileData: ProfileType) {
    const response = await instance.put<UpdateMyProfileType>('profile', profileData);
    return response.data;
  }
};

type MeResponseType = {
  data: {
    id: number
    email: string
    login: string
  }
  resultCode: ResultCodesEnum
  messages: Array<string>
}

type LoginResponseType = {
  resultCode: ResultCodesEnum | ResultCodeForCaptcha
  messages: Array<string>
  data: { userId: number }
}

type LogoutResponseType = {
  resultCode: ResultCodesEnum
  messages: Array<string>
  data: {}
}

export const authAPI = {
  async me() {
    const res = await instance.get<MeResponseType>('auth/me');
    return res.data;
  },
  async login(email: string | null, password: string | null, rememberMe: boolean, captcha: string | null = null) {
    const res = await instance.post<LoginResponseType>('auth/login', { email, password, rememberMe, captcha })
    return res.data;
  },
  async logout() {
    const res = await instance.delete<LogoutResponseType>('auth/login');
    return res.data;
  },
};

type GetCaptchaUrlResponse = { url: string }

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get<GetCaptchaUrlResponse>('security/get-captcha-url');
  },
};
