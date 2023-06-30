const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
  dialogsData: [
    { id: 1, name: 'Alisher', age: 35, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGDHJH60ab8NWKbOSWJ45LpBX_xqVD0efAuQ&usqp=CAU' },
    { id: 2, name: 'Oyatullo', age: 14, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP8IueS9PvOxTQ9_BVVKTMcxrrKQG8i30rmA&usqp=CAU' },
    { id: 3, name: 'Umed', age: 22, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoldbXNMFuRVNmn4m9E5K4wb1h1CDH8b9daw&usqp=CAU' },
    { id: 4, name: 'Mamur', age: 18, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkUi79hizcXaO2mqWYuFL9RYh7c-UQgCGt8w&usqp=CAU' },
    { id: 5, name: 'Ahadjon', age: 61, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi7kWMjrIlJvW1nJsNRXdfzqjJcZCff5ZQRw&usqp=CAU' },
    { id: 6, name: 'Nozimkhon', age: 27, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoldbXNMFuRVNmn4m9E5K4wb1h1CDH8b9daw&usqp=CAU' },
  ],
  messagesData: [
    { id: 1, message: "What's up" },
    { id: 2, message: "How's it going" },
    { id: 3, message: 'Welcome to the team' },
  ],
  newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      const newMessage = {
        id: state.messagesData.length + 1,
        message: state.newMessageText,
      };
      state.messagesData.push(newMessage);
      state.newMessageText = '';
      return state;
    };
    case UPDATE_NEW_MESSAGE_TEXT: {
      state.newMessageText = action.newText;
      return state;
    }
    default:
      return state;
  };
};
  export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

  export const updateNewMessageTextActionCreator = text => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });

  export default dialogsReducer;
