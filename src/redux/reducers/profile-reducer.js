import { profileAPI } from '../../api/api';

const ADD_POST = 'samurai/profile/ADD_POST';
const SET_USER_PROFILE = 'samurai/profile/SET_USER_PROFILE';
const SET_USER_STATUS = 'samurai/profile/SET_USER_STATUS';
const DELETE_POST = 'samurai/profile/DELETE_POST';
const UPDATE_PHOTO = 'samurai/profile/UPDATE_PHOTO';
const STOP_SUBMIT = 'samurai/profile/STOP_SUBMIT';

let initialState = {
  postsData: [
    { id: 1, message: 'Good morning, Vasya', likesCount: 12 },
    { id: 2, message: 'How are you', likesCount: 16 },
  ],
  profile: null,
  status: '',
  errorMessage: '',
};

const profileReducer = (state = initialState, action) => {
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
      return { ...state, postsData: state.postsData.filter(p => p.id !== action.postId) };
    }
    case UPDATE_PHOTO: {
      return { ...state, profile: { ...state.profile, photos: action.photos } };
    }
    case STOP_SUBMIT: {
      return { ...state, errorMessage: action.message };
    }
    default:
      return state;
  }
};

//Action creators
export const addPost = newPostText => ({ type: ADD_POST, newPostText });
export const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile });
export const setUserStatus = status => ({ type: SET_USER_STATUS, status });
export const deletePost = postId => ({ type: DELETE_POST, postId })
export const updatePhotoSuccess = photos => ({ type: DELETE_POST, photos });
export const stopSubmit = message => ({ type: STOP_SUBMIT, message });

//Thunk creators
export const getUserProfile = userId => async dispatch => {
  let data = await profileAPI.getProfile(userId)
  dispatch(setUserProfile(data));
};

export const getUserStatus = userId => async dispatch => {
  let data = await profileAPI.getStatus(userId)
  dispatch(setUserStatus(data));
};

export const updateUserStatus = status => async dispatch => {
  let data = await profileAPI.updateStatus(status)
  if (data.resultCode === 0) {
    dispatch(setUserStatus(status));
  }
};

export const updatePhoto = file => async dispatch => {
  let data = await profileAPI.updateMyPhoto(file)
  if (data.resultCode === 0) {
    dispatch(updatePhotoSuccess(data.data.photos));
  }
};

export const updateProfileData = profileData => async (dispatch, getState) => {
  const userId = getState().auth.id;
  const data = await profileAPI.updateMyProfile(profileData)
  if (data.resultCode === 0) {
    dispatch(getUserProfile(userId));
  } else {
    let message = data.messages.length > 0 ? data.messages[0] : 'Some unknown error'
    dispatch(stopSubmit(message));
    return Promise.reject(data.messages[0]);
  }
};

export default profileReducer;
