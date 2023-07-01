const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  postData: [
    { id: 1, message: 'Good morning, Vasya', likesCount: 12 },
    { id: 2, message: 'How are you', likesCount: 16 },
  ],
  newPostText: '',
};

const profileReducer = (state = initialState, action) => {
  let stateCopy;
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: state.postData.length + 1,
        message: state.newPostText,
        likesCount: 0,
      };
      stateCopy = {
        ...state,
        newPostText: '',
        postData: [...state.postData, newPost],
      };
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT: {
      stateCopy = {
        ...state,
        newPostText: action.newText,
      };
      return stateCopy;
    }
    default:
      return state;
  };
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = text => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;
