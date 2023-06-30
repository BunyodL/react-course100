import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      postData: [
        { id: 1, message: 'Good morning, Vasya', likesCount: 12 },
        { id: 2, message: 'How are you', likesCount: 16 },
      ],
      newPostText: '',
    },
    dialogsPage: {
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
    },
    sidebar: {
      friends: [
        { id: 1, name: 'Mamur', age: 18, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkUi79hizcXaO2mqWYuFL9RYh7c-UQgCGt8w&usqp=CAU' },
        { id: 2, name: 'Ahadjon', age: 61, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi7kWMjrIlJvW1nJsNRXdfzqjJcZCff5ZQRw&usqp=CAU' },
        { id: 3, name: 'Nozimkhon', age: 27, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoldbXNMFuRVNmn4m9E5K4wb1h1CDH8b9daw&usqp=CAU' },
      ],
    },
  },
  _callobserver() {
    console.log(123);
  },
  getState() {
    return this._state;
  },
  //subscribe
  intermediary(observer) {
    this._callobserver = observer;
  },

  dispatch(action) {
    profileReducer(this._state.profilePage, action);
    dialogsReducer(this._state.dialogsPage, action);
    sidebarReducer();

    this._callobserver(this._state);
  }
};

export default store;
window.store = store;

//store - OOP
