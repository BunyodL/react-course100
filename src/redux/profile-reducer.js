import { profileAPI } from '../api/api';

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {
  postsData: [
    { id: 1, message: 'Good morning, Vasya', likesCount: 12 },
    { id: 2, message: 'How are you', likesCount: 16 },
  ],
  newPostText: '',
  profile: null,
  status: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: state.postsData.length + 1,
        message: state.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        newPostText: '',
        postsData: [...state.postsData, newPost],
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return { ...state, newPostText: action.newText };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_USER_STATUS: {
      return { ...state, status: action.status };
    }
    default:
      return state;
  }
};

//Action creators
export const addPost = () => ({ type: ADD_POST });
export const updateNewPostText = text => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile });
export const setUserStatus = status => ({ type: SET_USER_STATUS, status });

//Thunk creators
export const getUserProfile = userId => dispatch => {
  profileAPI.getProfile(userId).then(data => {
    dispatch(setUserProfile(data));
  });
};

export const getUserStatus = userId => dispatch => {
  profileAPI.getStatus(userId).then(data => {
    dispatch(setUserStatus(data));
  });
};

export const updateUserStatus = status => dispatch => {
  profileAPI.updateStatus(status).then(data => {
    if (data.resultCode === 0) {
      dispatch(setUserStatus(status));
    }
  });
};

export default profileReducer;
