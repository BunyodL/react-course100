import { UserType } from '@/@types/types';
import { instance } from './instance';
import { ResponseType } from './types';

enum Endpoints {
  Users = 'users',
  FollowUser = 'follow',
}

type GetUsersType = {
  items: Array<UserType>;
  totalCount: number;
  error: string;
};

export const usersAPI = {
  async getUsers(currentPage: number, pageSize: number) {
    const response = await instance.get<GetUsersType>(
      `${Endpoints.Users}?page=${currentPage}&count=${pageSize}`
    );
    return response.data;
  },
  async follow(userId: number) {
    const response = await instance.post<ResponseType>(
      `${Endpoints.FollowUser}/${userId}`
    );
    return response.data;
  },
  async unfollow(userId: number) {
    const response = await instance.delete<ResponseType>(
      `${Endpoints.FollowUser}/${userId}`
    );
    return response.data;
  },
};
