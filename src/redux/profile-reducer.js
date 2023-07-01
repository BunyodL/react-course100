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

  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: state.postData.length + 1,
        message: state.newPostText,
        likesCount: 0,
      };
      state.postData.push(newPost);
      state.newPostText = '';
      return state;
    }
    case UPDATE_NEW_POST_TEXT: {
      state.newPostText = action.newText;
      return state;
    }
    default:
      return state;
  };
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = text => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;
