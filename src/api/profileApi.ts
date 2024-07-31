import { ResponseType } from './types';
import { PhotosType, ProfileType } from '../@types/types';
import { instance } from './instance';

enum Endpoints {
  Profile = 'profile',
  ProfileStatus = Endpoints.Profile + '/status',
  ProfilePhoto = Endpoints.Profile + '/photo',
}

type UpdateMyPhotoType = ResponseType<{ photos: PhotosType }> & {
  fieldsErrors: Array<string>;
};

export const profileAPI = {
  async getProfile(userId: number | null) {
    const response = await instance.get<ProfileType>(
      `${Endpoints.Profile}/${userId}`
    );
    return response.data;
  },

  async getStatus(userId: number | null) {
    const response = await instance.get<string>(
      `${Endpoints.ProfileStatus}/${userId}`
    );
    return response.data;
  },

  async updateStatus(status: string) {
    try {
      const response = await instance.put<ResponseType>(
        `${Endpoints.ProfileStatus}`,
        {
          status,
        }
      );
      return response.data;
    } catch (error) {
      // alert(error);
    }
  },

  async updateMyPhoto(photoFile: File) {
    const formData: FormData = new FormData();
    formData.append('image', photoFile);
    const response = await instance.put<UpdateMyPhotoType>(
      `${Endpoints.ProfilePhoto}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    return response.data;
  },

  async updateMyProfile(profileData: ProfileType) {
    const response = await instance.put<ResponseType>(
      `${Endpoints.Profile}`,
      profileData
    );
    return response.data;
  },
};
