export type DialogType = {
  id: number;
  name: string;
  age: number;
  image: string;
};

export type MessageType = {
  id: number;
  message: string;
};

export type PostType = {
  id: number;
  message: string;
  likesCount: number;
};

export interface ProfileType {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  aboutMe: string;
  contacts: ContactType;
  photos: PhotosType;
}

export interface ContactType {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainLink: string;
}

export type PhotosType = {
  large: string | null;
  small: string | null;
};

export interface UserType {
  name: string;
  id: number;
  followed: boolean;
  photos: PhotosType;
  status: string | null;
}

export interface FriendType {
  id: number;
  name: string;
  age: number;
  image?: string;
}

export type GetStringKeys<T> = Extract<keyof T, string>;
