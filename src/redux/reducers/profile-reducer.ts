import { ThunkAction } from "redux-thunk";
import { RootState } from "redux/redux-store";
import { PhotosType, PostType, ProfileType } from "types/types";
import { profileAPI } from '../../api/api.ts';

const ADD_POST = 'samurai/profile/ADD_POST';
const SET_USER_PROFILE = 'samurai/profile/SET_USER_PROFILE';
const SET_USER_STATUS = 'samurai/profile/SET_USER_STATUS';
const DELETE_POST = 'samurai/profile/DELETE_POST';
const UPDATE_PHOTO = 'samurai/profile/UPDATE_PHOTO';
const STOP_SUBMIT = 'samurai/profile/STOP_SUBMIT';

type InitialStateType = {
  postsData: Array<PostType>
  profile: ProfileType | null,
  status: string,
  errorMessage: string,
}

const initialState: InitialStateType = {
  postsData: [
    { id: 1, message: 'Good morning, Vasya', likesCount: 12 },
    { id: 2, message: 'How are you', likesCount: 16 },
  ],
  profile: null,
  status: '',
  errorMessage: '',
};

const profileReducer = (state = initialState, action: ActionTypes): InitialStateType => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: state.postsData.length + 1,
        message: action.newPostText,
        likesCount: 0,
      };
      return { ...state, postsData: [...state.postsData, newPost] };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile, errorMessage: '' };
    }
    case SET_USER_STATUS: {
      return { ...state, status: action.status };
    }
    case DELETE_POST: {
      return { ...state, postsData: state.postsData.filter((p) => p.id !== action.postId) };
    }
    case UPDATE_PHOTO: {
      return { ...state, profile: { ...state.profile, photos: action.photos } as ProfileType };
    }
    case STOP_SUBMIT: {
      return { ...state, errorMessage: action.message };
    }
    default:
      return state;
  }
};

//Action creators
type AddPostActionType = {
  type: typeof ADD_POST,
  newPostText: string
}
export const addPost = (newPostText: string): AddPostActionType => ({ type: ADD_POST, newPostText });

type SetUserProfileActionType = {
  type: typeof SET_USER_PROFILE,
  profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({ type: SET_USER_PROFILE, profile });

type SetUserStatusActionType = {
  type: typeof SET_USER_STATUS,
  status: string
}
export const setUserStatus = (status: string): SetUserStatusActionType => ({ type: SET_USER_STATUS, status });

type DeletePostActionType = {
  type: typeof DELETE_POST,
  postId: number
}
export const deletePost = (postId: number): DeletePostActionType => ({ type: DELETE_POST, postId });

type UpdatePhotoSuccessActionType = {
  type: typeof UPDATE_PHOTO,
  photos: PhotosType
}
export const updatePhotoSuccess = (photos: PhotosType): UpdatePhotoSuccessActionType => ({
  type: UPDATE_PHOTO,
  photos
});

type StopSubmitActionType = {
  type: typeof STOP_SUBMIT
  message: string
}
export const stopSubmit = (message: string): StopSubmitActionType => ({ type: STOP_SUBMIT, message });

type ActionTypes =
  AddPostActionType
  | SetUserProfileActionType
  | SetUserStatusActionType
  | DeletePostActionType
  | UpdatePhotoSuccessActionType
  | StopSubmitActionType

//Thunk creators

type ThunkActionType = ThunkAction<Promise<void>, RootState, null, ActionTypes>

export const getUserProfile = (userId: number | null): ThunkActionType =>
  async (dispatch) => {
    const data = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(data));
  };

export const getUserStatus = (userId: number | null): ThunkActionType => async (dispatch) => {
  const data = await profileAPI.getStatus(userId);
  dispatch(setUserStatus(data));
};

export const updateUserStatus = (status: string): ThunkActionType => async (dispatch) => {
  const data = await profileAPI.updateStatus(status);
  if (data) {
    if (data.resultCode === 0) {
      dispatch(setUserStatus(status));
    } else {
      const message = data.messages.length > 0 ? data.messages[0] : 'Some unknown error';
      dispatch(stopSubmit(message));
    }
  }
};

export const updatePhoto = (file: any): ThunkActionType => async (dispatch) => {
  const data = await profileAPI.updateMyPhoto(file);
  if (data.resultCode === 0) {
    dispatch(updatePhotoSuccess(data.data.photos));
  }
};

export const updateProfileData = (profileData: ProfileType): ThunkActionType => async (dispatch, getState) => {
  const userId = getState().auth.id;
  const data = await profileAPI.updateMyProfile(profileData);
  if (data.resultCode === 0) {
    await dispatch(getUserProfile(userId))
  } else {
    const message = data.messages.length > 0 ? data.messages[0] : 'Some unknown error';
    dispatch(stopSubmit(message));
    return Promise.reject(data.messages[0]);
  }
};

export default profileReducer;
