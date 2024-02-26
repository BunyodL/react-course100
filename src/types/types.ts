export type DialogType = {
  id: number,
  name: string,
  age: number,
  image: string,
}

export type MessageType = {
  id: number
  message: string
}

export type PostType = {
  id: number
  message: string
  likesCount: number
}

export type ProfileType = {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: ContactType
}

export type ContactType = {
  github: string
  vk: string
  facebook: string
  instagram: string
  twitter: string
  website: string
  youtube: string
  mainLink: string
}

export type PhotosType = {
  large: string | null
  small: string | null
}

export type UserType = {
  name: string
  id: number
  followed: boolean
  photos: PhotosType
  status: string | null
}

export type FriendType = {
  id: number,
  name: string,
  age: number,
  image: string | null
}