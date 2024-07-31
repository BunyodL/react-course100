import { InferActionsTypes, ThunkActionType } from 'redux/redux-store';
import { PhotosType, PostType, ProfileType } from '../../@types/types.ts';
import { profileAPI } from 'api';
import { ResultCodesEnum } from 'api/types.ts';

type InitialStateType = {
  postsData: Array<PostType>;
  profile: ProfileType | null;
  status: string;
  errorMessage: string;
};

const initialState: InitialStateType = {
  postsData: [
    { id: 1, message: 'Good morning, Vasya', likesCount: 12 },
    { id: 2, message: 'How are you', likesCount: 16 },
  ],
  profile: null,
  status: '',
  errorMessage: '',
};

const profileReducer = (
  state = initialState,
  action: ActionTypes
): InitialStateType => {
  switch (action.type) {
    case 'ADD_POST': {
      const newPost = {
        id: state.postsData.length + 1,
        message: action.newPostText,
        likesCount: 0,
      };
      return { ...state, postsData: [...state.postsData, newPost] };
    }
    case 'SET_USER_PROFILE': {
      return { ...state, profile: action.profile, errorMessage: '' };
    }
    case 'SET_USER_STATUS': {
      return { ...state, status: action.status };
    }
    case 'DELETE_POST': {
      return {
        ...state,
        postsData: state.postsData.filter((p) => p.id !== action.postId),
      };
    }
    case 'UPDATE_PHOTO': {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos } as ProfileType,
      };
    }
    case 'STOP_SUBMIT': {
      return { ...state, errorMessage: action.message };
    }
    default:
      return state;
  }
};

type ActionTypes = InferActionsTypes<typeof actions>;

//Action creators
export const actions = {
  addPost: (newPostText: string) =>
    ({
      type: 'ADD_POST',
      newPostText,
    } as const),

  setUserProfile: (profile: ProfileType) =>
    ({ type: 'SET_USER_PROFILE', profile } as const),

  setUserStatus: (status: string) =>
    ({
      type: 'SET_USER_STATUS',
      status,
    } as const),

  deletePost: (postId: number) =>
    ({
      type: 'DELETE_POST',
      postId,
    } as const),

  updatePhotoSuccess: (photos: PhotosType) =>
    ({
      type: 'UPDATE_PHOTO',
      photos,
    } as const),

  stopSubmit: (message: string) =>
    ({
      type: 'STOP_SUBMIT',
      message,
    } as const),
};

//Thunk creators
export const getUserProfile =
  (userId: number | null): ThunkActionType<ActionTypes> =>
  async (dispatch) => {
    const data = await profileAPI.getProfile(userId);
    dispatch(actions.setUserProfile(data));
  };

export const getUserStatus =
  (userId: number | null): ThunkActionType<ActionTypes> =>
  async (dispatch) => {
    const data = await profileAPI.getStatus(userId);
    dispatch(actions.setUserStatus(data));
  };

export const updateUserStatus =
  (status: string): ThunkActionType<ActionTypes> =>
  async (dispatch) => {
    const data = await profileAPI.updateStatus(status);
    if (data) {
      if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(actions.setUserStatus(status));
      } else {
        const message =
          data.messages.length > 0 ? data.messages[0] : 'Some unknown error';
        dispatch(actions.stopSubmit(message));
      }
    }
  };

export const updatePhoto =
  (file: File): ThunkActionType<ActionTypes> =>
  async (dispatch) => {
    const data = await profileAPI.updateMyPhoto(file);
    if (data.resultCode === ResultCodesEnum.Success) {
      dispatch(actions.updatePhotoSuccess(data.data.photos));
    }
  };

export const updateProfileData =
  (profileData: ProfileType): ThunkActionType<ActionTypes> =>
  async (dispatch, getState) => {
    const userId = getState().auth.id;
    const data = await profileAPI.updateMyProfile(profileData);
    if (data.resultCode === ResultCodesEnum.Success) {
      await dispatch(getUserProfile(userId));
    } else {
      const message =
        data.messages.length > 0 ? data.messages[0] : 'Some unknown error';
      dispatch(actions.stopSubmit(message));
      return Promise.reject(data.messages[0]);
    }
  };

export default profileReducer;
