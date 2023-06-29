const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
  if (action.type === ADD_MESSAGE) {
    const newMessage = {
      id: state.messagesData.length + 1,
      message: state.newMessageText,
    };
    state.messagesData.push(newMessage);
    state.newMessageText = '';
  }
  if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
    state.newMessageText = action.newText;
  }
  return state;
};

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const updateNewMessageTextActionCreator = text => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });

export default dialogsReducer;
